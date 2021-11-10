import React from "react";
import { Col, Label, Input } from "reactstrap";
import { SearchInput } from "src/components/Common/SearchInput";

interface PropType {
  name: string | null;
  phone: string | null;
  email: string | null;
  hellochatID: string | null;
  onPhoneChange: (value) => void;
  onEmailChange: (value) => void;
  onUsernameChange: (value) => void;
  onHellochatIDChange: (value) => void;
  onSearch: () => void;
  onClear: () => void;
}

const SearchBar: React.FC<PropType> = ({
  name,
  phone,
  email,
  hellochatID,
  onSearch,
  onPhoneChange,
  onEmailChange,
  onUsernameChange,
  onHellochatIDChange,
  onClear,
}) => {
  return (
    <form className="row gx-3 gy-2 align-items-center">
      <Col sm={2}>
        <SearchInput
          value={name}
          placeholder={"Username"}
          onChange={(value) => onUsernameChange(value)}
          onSearch={onSearch}
        />
      </Col>
      <Col sm={2}>
        <SearchInput
          value={email}
          placeholder={"Email"}
          onChange={(value) => onEmailChange(value)}
          onSearch={onSearch}
        />
      </Col>
      <Col sm={2}>
        <SearchInput
          value={phone}
          placeholder={"Phone"}
          onChange={(value) => onPhoneChange(value)}
          onSearch={onSearch}
        />
      </Col>
      <Col sm={2}>
        <SearchInput
          value={hellochatID}
          placeholder={"HellochatID"}
          onChange={(value) => onHellochatIDChange(value)}
          onSearch={onSearch}
        />
      </Col>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary" onClick={onClear}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
