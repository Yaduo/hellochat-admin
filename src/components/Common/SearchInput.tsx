import React, { useState } from "react";
import { Col, Label, Input } from "reactstrap";

interface PropType {
  value: string | null;
  placeholder: string;
  onChange: (value) => void;
  onSearch: () => void;
}

const SearchInput: React.FC<PropType> = ({
  value,
  placeholder,
  onChange,
  onSearch,
}) => {
  return (
    <div className="input-group">
      <Input
        value={value ? value : ""}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        className="form-control"
        id="specificSizeInputGroupUsername"
        placeholder={placeholder}
        // onKeyUp={(e) => {
        //   if (e.key === "Enter" || e.keyCode === 13) {
        //     // Do something
        //     onChange(value);
        //   }
        // }}
      />
      <div
        className="input-group-text"
        onClick={() => {
          onSearch();
        }}
      >
        <i className="bx bx-search-alt align-middle"></i>
      </div>
    </div>
  );
};

export default SearchInput;
