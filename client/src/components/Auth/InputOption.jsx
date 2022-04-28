import React from "react";

const InputOption = ({ listValue, ...optionProps }) => {
  return (
    <select {...optionProps}>
      {listValue?.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default InputOption;
