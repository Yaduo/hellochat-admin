import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import PostCards from "./PostCards";
import ContactsCard from "./ContactsCard";
import MerchantCard from "./MerchantCard";
import PersonalInfoCard from "./PersonalInfoCard";

const ProfileTabBasicInfo = ({ user }) => {
  return (
    <React.Fragment>
      <Row>
        <Col xl={9} lg={8}>
          <Card>
            <CardHeader>
              <CardTitle className="mb-0">About</CardTitle>
            </CardHeader>
            <CardBody>
              <div>
                <div className="pb-3">
                  <Row>
                    <Col xl={2}>
                      <div>
                        <h5 className="font-size-15">Bio :</h5>
                      </div>
                    </Col>
                    <div className="col-xl">
                      <div className="text-muted">
                        <p className="mb-2">{user.bio}</p>
                      </div>
                    </div>
                  </Row>
                </div>

                <div className="pb-3">
                  <Row>
                    <Col xl={2}>
                      <div>
                        <h5 className="font-size-15">Label :</h5>
                      </div>
                    </Col>
                    <div className="col-xl">
                      <div className="text-muted">
                        <p className="mb-2">{user.label}</p>
                      </div>
                    </div>
                  </Row>
                </div>

                <div className="pb-3">
                  <Row>
                    <Col xl={2}>
                      <div>
                        <h5 className="font-size-15">Location :</h5>
                      </div>
                    </Col>
                    <div className="col-xl">
                      <div className="text-muted">
                        <p className="mb-2">{user.location}</p>
                      </div>
                    </div>
                  </Row>
                </div>

                <div className="pb-3">
                  <Row>
                    <Col xl={2}>
                      <div>
                        <h5 className="font-size-15">Sign Date :</h5>
                      </div>
                    </Col>
                    <div className="col-xl">
                      <div className="text-muted">
                        <p className="mb-2">{user.signDate}</p>
                      </div>
                    </div>
                  </Row>
                </div>

                <div className="pb-3">
                  <Row>
                    <Col xl={2}>
                      <div>
                        <h5 className="font-size-15">Modified Date: </h5>
                      </div>
                    </Col>
                    <div className="col-xl">
                      <div className="text-muted">
                        <p className="mb-2">{user.modifiedDate}</p>
                      </div>
                    </div>
                  </Row>
                </div>

                <div className="py-3">
                  <Row>
                    <Col xl={2}>
                      <div>
                        <h5 className="font-size-15">IM Login:</h5>
                      </div>
                    </Col>
                    <div className="col-xl">
                      <div className="text-muted">
                        <p>{user.imLogin}</p>
                      </div>
                    </div>
                  </Row>
                </div>

                <div className="py-3">
                  <Row>
                    <Col xl={2}>
                      <div>
                        <h5 className="font-size-15">IM user Id:</h5>
                      </div>
                    </Col>
                    <div className="col-xl">
                      <div className="text-muted">
                        <p>{user.imLogin}</p>
                      </div>
                    </div>
                  </Row>
                </div>

                <div className="py-3">
                  <Row>
                    <Col xl={2}>
                      <div>
                        <h5 className="font-size-15">IM user Id:</h5>
                      </div>
                    </Col>
                    <div className="col-xl">
                      <div className="text-muted">
                        <p>{user.imLogin}</p>
                      </div>
                    </div>
                  </Row>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl={3} lg={4}>
          <PersonalInfoCard user={user} />
          <MerchantCard user={user} />
          <ContactsCard user={user} />
        </Col>
      </Row>
      <Card>
        <CardHeader>
          <div className="d-flex">
            <div className="flex-grow-1">
              <CardTitle className="mb-0">Post</CardTitle>
            </div>
            <div className="flex-shrink-0">
              <Link to="#">View All</Link>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <PostCards />
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default ProfileTabBasicInfo;
