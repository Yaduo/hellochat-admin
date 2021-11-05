import React from "react";
import { Col } from "reactstrap";
import Widget from "./Widget";

const WidgetList = ({ loading, members, wallets, transactions }) => {
  const widgetList = [
    {
      title: "Total Members",
      data: members && {
        value: members.totalMember,
        rank: members.newRegisteredMember,
      },
    },
    {
      title: "Wallet Cash Pooling",
      data: wallets && {
        value: wallets.totalCashPooling,
        preFix: "$ ",
      },
    },
    {
      title: "Total Transactions",
      data: transactions && {
        value: transactions.totalTxNumber,
        rank: transactions.yesterdayTxNumber,
        series: Object.keys(transactions.monthlyTxNumber).map(
          (key) => transactions.monthlyTxNumber[key]
        ),
      },
    },
  ];

  return (
    <React.Fragment>
      {(widgetList || []).map((widget: any, key: number) => (
        <Col xl={4} md={6} key={key}>
          <Widget
            loading={loading}
            title={widget["title"]}
            data={widget["data"]}
          />
        </Col>
      ))}
    </React.Fragment>
  );
};

export default WidgetList;
