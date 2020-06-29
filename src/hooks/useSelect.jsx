import React, { useState } from "react";

const useSelect = (intialState, options) => {
  const [state, saveState] = useState(intialState);

  

  const SelectNews = () => (
    <select
      name=""
      id=""
      className="browser-default"
      value={state}
      onChange={(e) => saveState(e.target.value)}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );

  return [state, SelectNews];
};

export default useSelect;
