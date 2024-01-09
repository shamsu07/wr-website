import React from "react";
import { Select, Option } from "@material-tailwind/react";
import { useController } from "react-hook-form";

const SelectRole = ({ control, name, label, options, rules, ...rest }) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <>
      <Select
        {...rest}
        onChange={(e) => {
          onChange(e);
        }}
        onBlur={onBlur}
        value={value}
        ref={ref}
        style={{
          border: "none",
          borderColor: "none",
          stroke: "none"
        }}
        color="bg-bondiBlue"
        className="px-4 py-2 border bg-darkGunmetal placeholder:text-gray-600 placeholder:italic focus:ring-bondiBlue focus:border-bondiBlue w-full sm:text-sm border-black rounded-md focus:outline-none text-white"
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default SelectRole;
