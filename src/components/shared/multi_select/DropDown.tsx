import type { FC } from "react";
import type { IMultiSelectDropDownProps } from "./interfaces";

export const MultiSelectDropDown: FC<IMultiSelectDropDownProps> = ({
  internalOptions,
  internal,
  handleSelect,
}) => {
  return (
    <ul className="multi-select__dropdown">
      {internalOptions.length === 0 ? (
        <div className="multi-select__dropdown__notfound">
          <p className="multi-select__dropdown__notfound--text">
            nothing found...!
          </p>
        </div>
      ) : (
        <>
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
        </>
      )}
    </ul>
  );
};
