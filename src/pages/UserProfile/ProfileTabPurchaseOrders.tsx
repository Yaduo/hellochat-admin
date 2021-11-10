import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import PurchaseOrdersList from "./PurchaseOrders"

const ProfileTabPurchaseOrders = ({ user }) => {
  return (
    <React.Fragment>
      <Card>
        <CardHeader>
          <CardTitle className="mb-0">About</CardTitle>
        </CardHeader>
        <CardBody>
          <PurchaseOrdersList user={user} />
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default ProfileTabPurchaseOrders;
