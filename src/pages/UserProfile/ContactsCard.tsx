import React, { useState } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

//import images
import avatar1 from "src/assets/images/users/dizzy.png";
import avatar3 from "src/assets/images/users/dizzy.png";

const ContactsCard = ({ user }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="mb-3">Contacts</CardTitle>
        <div className="list-group list-group-flush">
          <Link to="#" className="list-group-item list-group-item-action">
            <div className="d-flex align-items-center">
              <div className="avatar-sm flex-shrink-0 me-3">
                <img
                  src={avatar1}
                  alt=""
                  className="img-thumbnail rounded-circle"
                />
              </div>
              <div className="flex-grow-1">
                <div>
                  <h5 className="font-size-14 mb-1">James Nix</h5>
                  <p className="font-size-13 text-muted mb-0">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="#" className="list-group-item list-group-item-action">
            <div className="d-flex align-items-center">
              <div className="avatar-sm flex-shrink-0 me-3">
                <img
                  src={avatar3}
                  alt=""
                  className="img-thumbnail rounded-circle"
                />
              </div>
              <div className="flex-grow-1">
                <div>
                  <h5 className="font-size-14 mb-1">Darlene Smith</h5>
                  <p className="font-size-13 text-muted mb-0">UI/UX Designer</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="#" className="list-group-item list-group-item-action">
            <div className="d-flex align-items-center">
              <div className="avatar-sm flex-shrink-0 me-3">
                <div className="avatar-title bg-soft-light text-light rounded-circle font-size-22">
                  <i className="bx bxs-user-circle"></i>
                </div>
              </div>
              <div className="flex-grow-1">
                <div>
                  <h5 className="font-size-14 mb-1">William Swift</h5>
                  <p className="font-size-13 text-muted mb-0">
                    Backend Developer
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </CardBody>
    </Card>
  );
};

export default ContactsCard;
