import React from "react";
import { Button, Spinner } from "react-bootstrap";

const LoadingButton = ({
  loading,
  children,
  spinnerVariant,
  size = "sm",
  animation = "border",
  ...otherProps
}) => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <Button variant="primary" disabled={loading} {...otherProps}>
          <div
            className={`loading-container ${
              loading ? "loading-container-active" : ""
            }`}
          >
            <Spinner
              as="span"
              animation={animation}
              varient={spinnerVariant}
              size={size}
              role="status"
              aria-hidden="true"
              hidden={!loading}
            />
          </div>
          <span className={loading ? "loading-button-active" : ""}>
            {children}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default LoadingButton;
