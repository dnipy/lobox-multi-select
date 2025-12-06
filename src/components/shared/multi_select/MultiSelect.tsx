import { useState, useRef, useEffect, type FC } from "react";
import "./styles.scss";
import type { IMultiSelectProps, IOption } from "./interfaces";
import { MultiSelectDropDown } from "./DropDown";

const MultiSelect: FC<IMultiSelectProps> = ({
  options = [],
  value = [],
  onChange,
  placeholder = "",
  label,
  disabled,
  error,
  loading,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalOptions, setInternalOptions] = useState<IOption[]>(options);
  const [inputValue, setInputValue] = useState("");
  const [internal, setInternal] = useState<IOption[]>(value);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInternalOptions(options);
  }, [options]);

  const handleAddNew = (label: string) => {
    const newOption: IOption = { label, value: label };

    if (!internalOptions.some((o) => o.value === newOption.value)) {
      setInternalOptions([newOption, ...internalOptions]);
    }

    handleSelect(newOption);
  };

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        containerRef?.current &&
        !containerRef?.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggle = disabled || loading ? () => {} : () => setIsOpen((o) => !o);

  const handleSelect = (opt: IOption) => {
    if (disabled) return;
    const exists = internal.some((v) => v.value === opt.value);

    let updated: IOption[];
    if (exists) {
      updated = internal.filter((v) => v.value !== opt.value);
    } else {
      updated = [...internal, opt];
    }

    setInternal(updated);
    onChange && onChange(updated);
  };

  const handleRemove = (value: string) => {
    if (disabled) return;
    let updated = internal.filter((elm) => elm.value != value);

    setInternal(updated);
    onChange && onChange(updated);
  };

  return (
    <div ref={containerRef} className="multi-select">
      <p className="multi-select__label">{label}</p>
      <div
        onClick={toggle}
        className={`multi-select__control ${
          error ? "multi-select__control--error" : ""
        } ${disabled ? "multi-select__control--disabled" : ""}`}
      >
        <div className="multi-select__tags">
          {isOpen ? (
            <input
              ref={inputRef}
              type="text"
              className="multi-select__input"
              value={inputValue}
              disabled={disabled}
              placeholder={`${label} `}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && inputValue.trim() !== "") {
                  handleAddNew(inputValue.trim());
                  setInputValue("");
                }
              }}
            />
          ) : (
            <>
              {internal.length === 0 && (
                <span className="multi-select__placeholder">{placeholder}</span>
              )}
              {internal.map((opt) => (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(opt.value);
                  }}
                  key={opt.value}
                  className="multi-select__tag"
                >
                  {opt.label}
                </span>
              ))}
            </>
          )}
        </div>
        <div
          className={`multi-select__indicator ${
            isOpen ? "multi-select__indicator-open" : ""
          }`}
        >
          {loading ? (
            <span className="multi-select__loader"></span>
          ) : (
            <img src="https://www.svgrepo.com/show/425982/right-arrow.svg" />
          )}
        </div>
      </div>

      {error && <p className="multi-select__error">{error}</p>}

      {isOpen && (
        <MultiSelectDropDown
          handleSelect={(opt) => handleSelect(opt)}
          internal={internal}
          internalOptions={internalOptions}
        />
      )}
    </div>
  );
};

export default MultiSelect;
