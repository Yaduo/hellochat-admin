import React, { useState } from "react";
import {
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import BasicInfo from "./BasicInfo";
import ProfileTabBasicInfo from "./ProfileTabBasicInfo";
import ProfileTabPurchaseOrders from "./ProfileTabPurchaseOrders";
import ProfileTabWalletTransactions from "./ProfileTabWalletTransactions";
import Profiletab4 from "./Profiletab4";

const ProfileTab = ({ user }) => {
  const [activeTab, toggleTab] = useState("1");

  return (
    <React.Fragment>
      <Row>
        <Card>
          <CardBody>
            <Row>
              <BasicInfo user={user} />
            </Row>
            {/* Tab Navigation */}
            <Nav className="nav-tabs-custom card-header-tabs border-top mt-4">
              <NavItem>
                <NavLink
                  to="#"
                  className={classnames(
                    {
                      active: activeTab === "1",
                    },
                    "px-3"
                  )}
                  onClick={() => {
                    toggleTab("1");
                  }}
                >
                  Overview
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="#"
                  className={classnames(
                    {
                      active: activeTab === "2",
                    },
                    "px-3"
                  )}
                  onClick={() => {
                    toggleTab("2");
                  }}
                >
                  Purchase Orders
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="#"
                  className={classnames(
                    {
                      active: activeTab === "3",
                    },
                    "px-3"
                  )}
                  onClick={() => {
                    toggleTab("3");
                  }}
                >
                  Wallet Transactions
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="#"
                  className={classnames(
                    {
                      active: activeTab === "4",
                    },
                    "px-3"
                  )}
                  onClick={() => {
                    toggleTab("4");
                  }}
                >
                  Identity Docs
                </NavLink>
              </NavItem>
            </Nav>
          </CardBody>
        </Card>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <ProfileTabBasicInfo user={user} />
          </TabPane>
          <TabPane tabId="2">
            <ProfileTabPurchaseOrders user={user} />
          </TabPane>
          <TabPane tabId="3">
            <ProfileTabWalletTransactions user={user} />
          </TabPane>
          <TabPane tabId="4">
            <Profiletab4 />
          </TabPane>
        </TabContent>
      </Row>
    </React.Fragment>
  );
};

export default ProfileTab;
