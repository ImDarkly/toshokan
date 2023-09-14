import React from "react";
import { StyledTab } from "./Tab.style";

const Tab = React.forwardRef(({ label = "Tab", isActive, onClick }, ref) => {
  return (
    <StyledTab>
      <div>
        <button
          ref={ref}
          className={isActive ? "active" : ""}
          onClick={() => onClick()}
        >
          {label}
        </button>
      </div>
    </StyledTab>
  );
});

export default Tab;
