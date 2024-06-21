import React from "react";

interface IInputFieldProps {
  type: "text" | "email" | "password" | "checkbox";
  label: string;
  placeholder?: string;
  value: string | boolean;
  onChange: (value: string | boolean) => void;
  isRequired: boolean;
  error?: string | boolean;
}

export const InputField = ({
  type,
  label,
  placeholder,
  value,
  onChange,
  isRequired,
  error,
}: IInputFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "checkbox") {
      onChange(e.target.checked);
    } else {
      onChange(e.target.value);
    }
  };

  if (type === "checkbox") {
    return (
      <div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={value as boolean}
            onChange={handleChange}
          />
          <label className="ml-2">{label}</label>
        </div>
        {isRequired && error && (
          <small className="text-xs text-red-500 mt-1">{error}</small>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <label className="text-sm">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value as string}
        onChange={handleChange}
        className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
      />
      {isRequired && error && (
        <small className="text-xs text-red-500 mt-1">{error}</small>
      )}
    </div>
  );
};
