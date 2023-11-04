import { forwardRef } from "react";
import styles from "./Select.module.scss";

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  label?: string;
  options: HTMLOptionElement[];
};
export const CustomSelect = forwardRef(
  (
    { label, ...otherProps }: SelectProps,
    ref: React.ForwardedRef<HTMLSelectElement>
  ) => {
    return (
      <div className={styles.inputWrapper}>
        {label}
        <select ref={ref} {...otherProps}>
          {otherProps.options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);
