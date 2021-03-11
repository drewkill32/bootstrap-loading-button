import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const FontAwesomeLoadingButton = ({
  loading,
  children,
  spinnerVariant,
  size = "sm",
  icon = faSpinner,
  animation = "border",
  ...otherProps
}) => {
  return (
    <div>
      <Button variant="primary" disabled={loading} {...otherProps}>
        <div style={{ position: "relative" }}>
          <div
            className={`loading-container ${
              loading ? "loading-container-active" : ""
            }`}
          >
            <FontAwesomeIcon
              style={{ fontSize: size === "lg" ? "2.2rem" : "1.2rem" }}
              icon={icon}
              spin
            />
          </div>
          <div className={loading ? "loading-button-active" : ""}>
            {children}
          </div>
        </div>
      </Button>
    </div>
  );
};

export default FontAwesomeLoadingButton;
