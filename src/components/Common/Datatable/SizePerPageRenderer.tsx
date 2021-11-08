import React, { useState } from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

interface PropsTypes {
  options:
    | [number]
    | [number, number]
    | [number, number, number]
    | [number, number, number, number];
  currentSize: number;
  onSizeChange: (size) => void;
}

export const SizePerPageRenderer: React.FC<PropsTypes> = ({
  options,
  currentSize,
  onSizeChange,
}) => {
  const [margin90, setMargin90] = useState(false);

  return (
    <div style={{ marginBottom: margin90 ? 90 : 15 }}>
      <UncontrolledDropdown
        onFocus={() => {
          setMargin90(true);
        }}
        onBlur={() => {
          setMargin90(false);
        }}
      >
        <DropdownToggle color="primary" type="button">
          {currentSize} <i className="mdi mdi-chevron-down"></i>
        </DropdownToggle>
        <DropdownMenu className="dropdownmenu-primary">
          {options.map((option, index) => (
            <DropdownItem
              to="#"
              key={index}
              onClick={() => {
                onSizeChange(option);
              }}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};
