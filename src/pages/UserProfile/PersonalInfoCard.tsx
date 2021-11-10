import React, { useState } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

const PersonalInfoCard = ({ user }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="mb-3">Tag</CardTitle>
        <div className="d-flex flex-wrap gap-2 font-size-16">
          <Link to="#" className="badge badge-soft-primary">
            Photoshop
          </Link>
          <Link to="#" className="badge badge-soft-primary">
            illustrator
          </Link>
          <Link to="#" className="badge badge-soft-primary">
            HTML
          </Link>
          <Link to="#" className="badge badge-soft-primary">
            CSS
          </Link>
          <Link to="#" className="badge badge-soft-primary">
            Javascript
          </Link>
          <Link to="#" className="badge badge-soft-primary">
            Php
          </Link>
          <Link to="#" className="badge badge-soft-primary">
            Python
          </Link>
        </div>
      </CardBody>
    </Card>
  );
};

export default PersonalInfoCard;
