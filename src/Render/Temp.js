import React, { useState } from "react";

export default function Temp(props) {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Temp in °C"
        className="m-1 py-2 px-1 bg-blue-300 rounded-md placeholder:text-gray-700"
      />
      {props.render(value)}
    </>
  );
}

export const Kelvin = ({ value }) => {
  return (
    <div className="text-base bg-slate-400 text-gray-700 p-2 rounded-lg m-4 w-20">
      {parseInt(value || 0) + 273.15}K
    </div>
  );
};

export const Fahrenheit = ({ value }) => {
  return (
    <div className="text-base bg-slate-400 text-gray-700 p-2 rounded-lg m-4 w-20">
      {(parseInt(value || 0) * 9) / 5 + 32}°F
    </div>
  );
};
