import { forwardRef } from "react";
import styles from "./Input.module.scss";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
};
export const Input = forwardRef(
  (
    { label, ...otherProps }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={styles.inputWrapper}>
        {label}
        <input className={styles.inputContainer} ref={ref} {...otherProps} />
      </div>
    );
  }
);
