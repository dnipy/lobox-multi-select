import type { FC } from "react";
import type { IMultiSelectDropDownProps } from "./interfaces";

export const MultiSelectDropDown: FC<IMultiSelectDropDownProps> = ({
  internalOptions,
  internal,
  handleSelect,
}) => {
  return (
    <ul className="multi-select__dropdown">
      {internalOptions.length === 0 && (
        <div style={{ padding: "0px 10px" }}>
          <p style={{ textAlign: "center", fontSize: "16px" }}>
            nothing found...!
          </p>
        </div>
      )}
      {internalOptions.map((opt) => {
        const selected = internal.some((v) => v.value === opt.value);
        return (
          <li
            key={opt.value}
            onClick={() => handleSelect(opt)}
            className={`multi-select__option ${
              selected ? "multi-select__option--selected" : ""
            }`}
          >
            <span>{opt.label}</span>
            {selected && <span className="multi-select__checkmark">✓</span>}
          </li>
        );
      })}
    </ul>
  );
};
