import { ChangeEvent, forwardRef, useMemo, useState } from "react";
import styles from "./MultiSelect.module.scss";

type MultiSelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  label?: string;
  options: HTMLOptionElement[];
};
export const MultiSelect = forwardRef(
  (
    { label, ...otherProps }: MultiSelectProps,
    ref: React.ForwardedRef<HTMLSelectElement>
  ) => {
    const [showOptions, setShowOptions] = useState<boolean>(true);
    const [values, setValues] = useState<string[]>([]);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = e.target.value;
      if (!values.includes(e.target.value))
        setValues([...values, selectedValue]);
      if (values.includes(e.target.value)) {
        const index = values.indexOf(selectedValue, 0);
        if (index > -1) {
          setValues([...values.splice(index, 1)]);
        }
      }

      if (otherProps.onChange) otherProps.onChange(e);
    };

    const renderSelectedValues = useMemo(() => {
      return (
        <div
          onClick={() => setShowOptions(!showOptions)}
          className={styles.selectedValuesContainer}
        >
          {values.map((value) => (
            <span key={value}>{value}</span>
          ))}
        </div>
      );
    }, [values, showOptions]);

    return (
      <div className={styles.selectWrapper}>
        {label}
        {renderSelectedValues}
        {showOptions && (
          <select
            ref={ref}
            {...otherProps}
            onChange={handleChange}
            multiple
            className={styles.selectContainer}
          >
            {otherProps.options.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        )}
      </div>
    );
  }
);
