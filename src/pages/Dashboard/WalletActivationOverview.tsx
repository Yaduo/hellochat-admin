import React from "react";
import { Col, Card, CardBody, Row, Spinner } from "reactstrap";
import WalletActivationApexRadial from "./WalletActivationApexRadial";

const WalletActivationOverview = ({ loading, wallets, members }) => {
  return (
    <React.Fragment>
      <Col xl={8}>
        <Card className="card-h-100">
          <CardBody>
            <div className="d-flex flex-wrap align-items-center mb-4">
              <h5 className="card-title me-2">Total Wallet Activation Rate</h5>
            </div>
            {loading && wallets == null ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <>
                <Row className="align-items-center">
                  <div className="col-sm">
                    <div id="invested-overview" className="apex-charts">
                      <WalletActivationApexRadial
                        radial={Math.round(
                          (wallets.totalPersonalWalletQty /
                            members.totalMember) *
                            100
                        ).toFixed(2)}
                      />
                    </div>
                  </div>
                  <div className="col-sm align-self-center">
                    <div className="mt-4 mt-sm-0">
                      <p className="mb-1">Totla Wallet Count</p>
                      <h4> {wallets.totalPersonalWalletQty} </h4>
                      <Row className="g-0">
                        <Col xs={6}>
                          <div>
                            <p className="mb-2 text-muted text-uppercase font-size-11">
                              YDA TopUp
                            </p>
                            <h5 className="fw-medium">
                              $ {wallets.yesterdayTopUpAmount}{" "}
                            </h5>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div>
                            <p className="mb-2 text-muted text-uppercase font-size-11">
                              YDA Withdraw
                            </p>
                            <h5 className="fw-medium">
                              -$ {wallets.yesterdayWithdrawAmount}
                            </h5>
                          </div>
                        </Col>
                      </Row>
                      <Row className="g-0">
                        <Col xs={6}>
                          <div>
                            <p className="mb-2 text-muted text-uppercase font-size-11">
                              YDA TopUp Count
                            </p>
                            <h5 className="fw-medium">
                              {" "}
                              {wallets.yesterdayTopUpQty}{" "}
                            </h5>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div>
                            <p className="mb-2 text-muted text-uppercase font-size-11">
                              YDA Withdraw Count
                            </p>
                            <h5 className="fw-medium">
                              {" "}
                              {wallets.yesterdayWithdrawQty}
                            </h5>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Row>
              </>
            )}
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default WalletActivationOverview;
