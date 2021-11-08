import React from "react";
import MetaTags from "react-meta-tags";
import { Container, Row } from "reactstrap";
import { RouteComponentProps, useParams } from "react-router-dom";
import ProfileTab from "./ProfileTab";
import Breadcrumbs from "src/components/Common/Breadcrumb";

interface MatchParams {
  userId: string;
}

const UserProfile: React.FC<RouteComponentProps<MatchParams>>  = () => {
  const { userId } = useParams<MatchParams>();
  console.log("userId ", userId)
  
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Profile | HelloChat Admin</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Contacts" breadcrumbItem="Profile" />

          <Row>
            {/* Render profilemenu */}
            <ProfileTab />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default UserProfile;
