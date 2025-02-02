import React from "react";

export default function Spinner() {
  return (
    <div className="absolute top-[40%] left-[42%] flex flex-col justify-center items-center gap-3">
      <span className="loader"></span>
      <p className="uppercase">Loading...</p>
    </div>
  );
}
// USEFUL SITES FOR LOADING SPINNERS
// loading.io
// cssloaders.github.io
