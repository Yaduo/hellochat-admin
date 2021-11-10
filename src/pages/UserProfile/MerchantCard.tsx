import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import { Link } from "react-router-dom";


const MerchantCard = ({ user }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="mb-3">Merchants</CardTitle>
        <div>
          <ul className="list-unstyled mb-0">
            <li>
              <Link to="#" className="py-2 d-block text-muted">
                <i className="mdi mdi-web text-primary me-1"></i> Website
              </Link>
            </li>
            <li>
              <Link to="#" className="py-2 d-block text-muted">
                <i className="mdi mdi-note-text-outline text-primary me-1"></i>{" "}
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </CardBody>
    </Card>
  );
};

export default MerchantCard;
