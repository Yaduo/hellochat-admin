import React, { useEffect } from "react";
import MetaTags from "react-meta-tags";

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Col, Container, Row } from "reactstrap";

/** import Mini Widget data */
import WalletBalance from "./WalletBalance";
import WalletActivationOverview from "./WalletActivationOverview";
import MarketOverview from "./MarketOverview";
import Locations from "./Locations";
import Trading from "./Trading";
import Transactions from "./Transactions";
import RecentActivity from "./RecentActivity";
import NewSlider from "./NewSlider";
import WidgetList from "./WidgetList";

import { useDispatch } from "react-redux";
import { getKpi } from "src/store/kpi/slice";
import { useSelector } from "src/store/hooks";

const Dashboard = () => {
  const dispatch = useDispatch();

  const loading = useSelector((s) => s.kpi.loading);
  const error = useSelector((s) => s.kpi.error);

  const dau = useSelector((s) => s.kpi.dau);
  const members = useSelector((s) => s.kpi.members);
  const transactions = useSelector((s) => s.kpi.transactions);
  const wallets = useSelector((s) => s.kpi.wallets);

  useEffect(() => {
    if (
      dau == null ||
      members == null ||
      transactions == null ||
      wallets == null
    ) {
      dispatch(getKpi());
    }
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title> HelloChat Admin - Dashboard </title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Dashboard" breadcrumbItem="Dashboard" />

          <Row>
            <WidgetList
              loading={loading}
              members={members}
              wallets={wallets}
              transactions={transactions}
            />
          </Row>
          <Row>
            <WalletBalance loading={loading} wallets={wallets} />
            <Col>
              <Row>
                <WalletActivationOverview loading={loading} wallets={wallets} members={members} />
                <NewSlider />
              </Row>
            </Col>
          </Row>
          <Row>
            <MarketOverview />
            <Locations />
          </Row>
          <Row>
            <Trading />
            <Transactions />
            <RecentActivity />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
