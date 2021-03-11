import { useState } from "react";
import LoadingButton from "./LoadingButton";
import FortAwesomeLoadingButton from "./FontAwesomeLoading";

const CounterButton = ({ setCount, children, type, ...otherProps }) => {
  const [loading, setLoading] = useState(false);
  if (type === "fortawesome") {
    return (
      <FortAwesomeLoadingButton
        style={{ minWidth: "100px" }}
        loading={loading}
        {...otherProps}
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setCount((cnt) => cnt + 1);
            setLoading(false);
          }, 2500);
        }}
      >
        {children}
      </FortAwesomeLoadingButton>
    );
  } else {
    return (
      <LoadingButton
        loading={loading}
        style={{ minWidth: "100px" }}
        {...otherProps}
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setCount((cnt) => cnt + 1);
            setLoading(false);
          }, 1500);
        }}
      >
        {children}
      </LoadingButton>
    );
  }
};

export default CounterButton;
