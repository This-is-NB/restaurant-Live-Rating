import React from "react";

const Spinner: React.FC = () => (
  <div className="spinner" style={{ display: "none" }}>
    <div
      className="spinner-inner align-items-center justify-content-center"
      role="status"
    >
      <div className="spinner-border">
        <span className="sr-only">Loading...</span>
      </div>
      <img
        src="https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg"
        alt="Logo"
        width={50}
        height={50}
        loading="lazy"
      />
    </div>
  </div>
);

export default Spinner;