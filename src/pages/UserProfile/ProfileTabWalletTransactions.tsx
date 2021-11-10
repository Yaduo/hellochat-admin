import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
import WalletTransactionList from "./WalletTransactions"

const ProfileTabWalletTransactions = ({user}) => {
  return (
    <React.Fragment>
      <Card>
        <CardHeader>
          <CardTitle className="mb-0">Wallet Transactions</CardTitle>
        </CardHeader>
        <CardBody>
          <WalletTransactionList user={user} />
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default ProfileTabWalletTransactions;
