import React from "react";
import { Card, CardBody, Col, Row, Spinner } from "reactstrap";
import WalletPieChart from "./WalletPieChart";

const WalletBalance = ({ loading, wallets }) => {

  const walletList = [
    {
      title: "Gift Deposit",
      amount: wallets && wallets["totalGiftDepositAmount"],
      color: "#5156be",
    },
    {
      title: "Group Payment",
      amount: wallets && wallets["totalGroupPaymentAmount"],
      color: "#0D47A1",
    },
    {
      title: "Inchat Payment",
      amount: wallets && wallets["totalInchatPaymentAmount"],
      color: "#7B1FA2",
    },
    {
      title: "total Payment",
      amount: wallets && wallets["totalPaymentAmount"],
      color: "#777aca",
    },
    {
      title: "Qrc Payment",
      amount: wallets && wallets["totalQrcPaymentAmount"],
      color: "#5C6BC0",
    },
    {
      title: "Top Up",
      amount: wallets && wallets["totalTopUpAmount"],
      color: "#1E88E5",
    },
    {
      title: "Refund",
      amount: wallets && wallets["totalVerificationRefundAmount"],
      color: "#3949AB",
    },
    {
      title: "Withdraw",
      amount: wallets && wallets["totalWithdrawAmount"],
      color: "#4527A0",
    },
  ];

  return (
    <React.Fragment>
      <Col xl={5}>
        <Card className="card-h-100">
          <CardBody>
            <div className="d-flex flex-wrap align-items-center mb-4">
              <h5 className="card-title me-2">Wallet Balance</h5>
            </div>
            {loading ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <Row className="align-items-center">
                <div className="col-sm">
                  <div id="wallet-balance" className="apex-charts">
                    <WalletPieChart wallets={walletList} />
                  </div>
                </div>
                <div className="col-sm align-self-center">
                  {walletList.map((w) => (
                    <div className="mt-4 mt-sm-0">
                      <div>
                        <p className="mb-2">
                          {w.title + ": "}
                          <span className="text-muted font-size-14 fw-normal">
                            $ {w.amount}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Row>
            )}
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default WalletBalance;
