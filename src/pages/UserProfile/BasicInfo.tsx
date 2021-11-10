import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  UncontrolledDropdown,
} from "reactstrap";
import avatar from "src/assets/images/users/dizzy.png";

const BasicInfo = ({ user }) => {

  return (
    <React.Fragment>
      <div className="col-sm order-2 order-sm-1">
        <div className="d-flex align-items-start mt-3 mt-sm-0">
          <div className="flex-shrink-0">
            <div className="avatar-xl me-3">
              <img
                src={user.photoUrl || user.photoUrl != "" ? user.photoUrl : avatar}
                alt=""
                className="img-fluid rounded-circle d-block"
              />
            </div>
          </div>
          <div className="flex-grow-1">
            <div>
              <h5 className="font-size-16 mb-1">{user.firstName} {user.lastName}</h5>
              <p className="text-muted font-size-13">{user.location}</p>

              <div className="d-flex flex-wrap align-items-start gap-2 gap-lg-3 text-muted font-size-13">
                <div>
                  <i className="mdi mdi-circle-medium me-1 text-success align-middle"></i>
                  {user.phoneNumber}
                </div>
                <div>
                  <i className="mdi mdi-circle-medium me-1 text-success align-middle"></i>
                  {user.email}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-auto order-1 order-sm-2">
        <div className="d-flex align-items-start justify-content-end gap-2">
          <div>
            <button type="button" className="btn btn-soft-light" disabled>
              <i className="me-1"></i> Send Message
            </button>
          </div>
          <div>
            <UncontrolledDropdown>
              <DropdownToggle
                className="btn btn-link font-size-16 shadow-none text-muted"
                tag="a"
              >
                <i className="bx bx-dots-horizontal-rounded"></i>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                <li>
                  <DropdownItem to="#">Force Logout</DropdownItem>
                </li>
                <li>
                  <DropdownItem to="#">Reset Password</DropdownItem>
                </li>
                <li>
                  <DropdownItem to="#">Deactive</DropdownItem>
                </li>
                <li>
                  <DropdownItem to="#">Delete</DropdownItem>
                </li>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BasicInfo;
