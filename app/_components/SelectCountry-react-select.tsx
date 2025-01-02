"use client";

import React, { useState } from "react";
import Image from "next/image";
import Select from "react-select";

type Props = {
  countries: { flags: { png: string }; name: { common: string } }[];
};

export default function SelectCountry({ countries }: Props) {
  const sortedCountries = countries
    .slice()
    .sort((a, b) => a?.name?.common.localeCompare(b?.name?.common));

  const [clickedCountry, setClickedCountry] = useState<string | undefined>(
    undefined
  );

  const selectedFlag = sortedCountries.find(
    (country) => country?.name?.common === clickedCountry
  )?.flags?.png;

  // Returns an array of objects
  const options = sortedCountries.map((country) => ({
    option: country?.name?.common,
    label: country?.name?.common,
  }));

  const customStyles = {
    control: (existingStyles: object, state) => ({
      // ...existingStyles,
      padding: "6px",
      paddingLeft: "32px",
      cursor: "pointer",
      outline: "2px solid transparent",
      outlineColor: state.isFocused ? "#a8a29e" : "",
    }),
    option: (existingStyles: object, state) => ({
      // ...existingStyles,
      // backgroundColor: state.isSelected ? "#fecaca" : "",
      color: state.isSelected ? "#292524" : "",
      width: "98%",
      borderRadius: "8px",
      marginBottom: "2px",
      cursor: "pointer",
      marginLeft: "4px",
      padding: "8px",
    }),
  };

  // To style the options onHover & to override the default style of the select conatiner. See globals.css
  const customClassName = {
    option: () => "options-style",
    control: () => "select-container-style",
  };

  return (
    <div className="relative">
      <Select
        classNames={customClassName}
        styles={customStyles}
        options={options}
        name="country"
        placeholder="nationality"
        onChange={(option) => setClickedCountry(option?.option)}
      />
      {!selectedFlag ? (
        <span className="absolute top-3 left-3 scale-125">🌍</span>
      ) : (
        <span className="absolute top-4 left-3">
          <Image
            src={selectedFlag as string}
            alt="country flag"
            width={50}
            height={50}
            unoptimized
            className="w-6 h-4"
          />
        </span>
      )}
    </div>
  );
}
