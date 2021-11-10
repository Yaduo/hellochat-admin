import React, { useState } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export type PaymentType =
  | "wallet"
  | "alipay"
  | "wechatpay"
  | "stripe"
  | "bambora";

interface PropsType {
  currentPaymentType: PaymentType;
  types: PaymentType[];
  onTypeChange: (type: PaymentType) => void;
}

const PaymentTypeDropdown: React.FC<PropsType> = ({
  currentPaymentType,
  types,
  onTypeChange,
}) => {
  return (
    <UncontrolledDropdown>
      <DropdownToggle color="primary" type="button">
        {currentPaymentType} <i className="mdi mdi-chevron-down"></i>
      </DropdownToggle>
      <DropdownMenu className="dropdownmenu-primary">
        {types.map((t, index) => (
          <DropdownItem
            to="#"
            onClick={() => {
              onTypeChange(t);
            }}
          >
            {t}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default PaymentTypeDropdown;
