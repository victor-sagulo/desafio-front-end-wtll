import { forwardRef } from "react";
import { InputProps } from "../../@types";
import { InputDiv } from "./styles";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...rest }, ref) => {
    return (
      <InputDiv>
        {label && <label>{label}</label>}
        <input ref={ref} {...rest} />
        {!!error && (
          <div className="error">
            <span>{error}</span>
          </div>
        )}
      </InputDiv>
    );
  }
);

export default Input;
