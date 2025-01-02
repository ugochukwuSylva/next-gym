"use client";

import Image from "next/image";
import { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { BiSearchAlt2 } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

type Props = {
  countries: {
    flags: { png: string };
    name: { common: string };
    idd: { root: string; suffixes: [string] };
  }[];
};
export default function PhoneContact({ countries }: Props) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");

  const sortedCountries = countries
    .slice()
    .sort((a, b) => a?.name?.common.localeCompare(b?.name?.common));

  const selectedFlag = sortedCountries.find(
    (country) => country?.name?.common === selectedCountry
  )?.flags.png;

  return (
    <OutsideClickHandler onOutsideClick={() => setIsClicked(false)}>
      <div
        onClick={() => setIsClicked((prev) => !prev)}
        className=" cursor-pointer  py-3  bg-white/70 md:bg-white"
      >
        <div className="relative w-full flex justify-between items-center ">
          <span className="absolute left-3  text-red-500 scale-125">🌍</span>
          <span className="px-4  tracking-wider uppercase pl-10 text-stone-700">
            {selectedCountry ? selectedCountry : "Nationality"}
          </span>

          {selectedFlag && (
            <Image
              src={selectedFlag}
              alt="country flag"
              width={50}
              height={50}
              unoptimized
              className="w-6 h-4 ml-auto"
            />
          )}
          <RiArrowDownSFill
            className={`ml-2 text-stone-400 text-2xl transition-all duration-700 ${
              isClicked ? "rotate-180" : "rotate-0"
            }`}
          />

          <div
            className={`absolute top-9 left-0 w-full z-10 bg-white  transition-all duration-700 overflow-y-scroll ${
              isClicked ? "h-80 opacity-100 visible" : "h-0 opacity-0 invisible"
            }`}
          >
            {/* search box */}
            {/* <div className=""> */}
            <div
              className=" relative w-full"
              onClick={() => setIsClicked(false)}
            >
              <input
                placeholder="Search country"
                onChange={(e) => setSearch(e.target.value)}
                className="border-b-2  placeholder:text-stone-300  p-1 pl-8 text-gray-900 focus:outline-none w-full"
              />
              <BiSearchAlt2 className="absolute left-1 top-1.5 text-2xl text-stone-600" />
            </div>
            {/* </div> */}

            {/* list of countries */}
            <div className="px-2 py-1 bg-white">
              {sortedCountries
                .filter((country) =>
                  country.name.common
                    .toLowerCase()
                    .startsWith(search.toLowerCase())
                )
                .map((country) => {
                  function handleClick() {
                    setSelectedCountry(country.name.common);
                  }

                  return (
                    <div
                      onClick={handleClick}
                      key={country.name.common}
                      className={`px-2 py-2 mb-1 rounded-md hover:bg-red-50 ${
                        selectedCountry === country.name.common
                          ? "bg-red-50"
                          : ""
                      } text-gray-900 [&:not(:last-child)]:border-b`}
                    >
                      <div className="flex items-center gap-3 ">
                        <Image
                          src={country.flags.png}
                          alt="country flag"
                          width={50}
                          height={50}
                          unoptimized
                          className="w-6 h-4"
                        />
                        <span>{country.name.common}</span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
}
