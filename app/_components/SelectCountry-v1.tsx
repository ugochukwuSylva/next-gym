"use client";

import Image from "next/image";
import { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { BiSearchAlt2 } from "react-icons/bi";

type Props = {
  countries: { flags: { png: string }; name: { common: string } }[];
};

export default function SelectCountry({ countries }: Props) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const sortedCountries = countries
    .slice()
    .sort((a, b) => a?.name?.common.localeCompare(b?.name?.common));

  const selectedFlag = sortedCountries.find(
    (country) => country?.name?.common === selectedCountry
  )?.flags.png;

  return (
    <div
      onClick={() => setIsClicked((prev) => !prev)}
      className="cursor-pointer  border py-3 bg-white"
    >
      <div className="relative flex justify-between items-center ">
        <span className="px-4  tracking-wider uppercase font-semibold">
          {selectedCountry ? selectedCountry : "--Nationality--"}
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
          className={`ml-2 text-2xl transition-all duration-700 ${
            isClicked ? "rotate-180" : "rotate-0"
          }`}
        />

        <div
          className={`absolute top-9 left-0 w-full bg-white transition-all duration-700 overflow-y-scroll ${
            isClicked ? "h-80 opacity-100 visible" : "h-0 opacity-0 invisible"
          }`}
        >
          {/* search box */}
          {/* <div className=""> */}
          <div className=" relative w-full" onClick={() => setIsClicked(false)}>
            <BiSearchAlt2 className="absolute left-1 top-1.5 text-2xl text-stone-600" />
            <input className="border p-1 pl-8 text-gray-900 ring-2 ring-black/20 focus:outline-none w-full" />
          </div>
          {/* </div> */}

          {/* list of countries */}
          <div className="px-2 py-1">
            {sortedCountries.map((country) => (
              <div
                onClick={() => setSelectedCountry(country.name.common)}
                key={country.name.common}
                className={`px-2 py-1 mb-1 rounded-md hover:bg-red-500/30 ${
                  selectedCountry === country.name.common ? "bg-red-500/30" : ""
                } text-gray-900`}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={country.flags.png}
                    alt="country flag"
                    width={50}
                    height={50}
                    unoptimized
                    className="w-6 h-4"
                  />
                  <span className="">{country.name.common}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
