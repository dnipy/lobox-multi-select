export interface IOption {
  label: string;
  value: string;
}

export interface IMultiSelectProps {
  label?: string;
  options?: IOption[];
  value?: IOption[];
  onChange?: (value: IOption[]) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  loading?: boolean;
}

export interface IMultiSelectDropDownProps {
  internalOptions: IOption[];
  internal: IOption[];
  handleSelect: (opt: IOption) => void;
}
