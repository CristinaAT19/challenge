import React from "react";

export const Input = ({ datos, tipo }) => {
  return (
    <>
      <input
        type={tipo}
        placeholder={datos}
        required
        className="px-6 py-3 outline-none w-full rounded-md border-solid border-2 border-black text-sm font-bold text-gray-500 focus:border-morado"
      />
    </>
  );
};
