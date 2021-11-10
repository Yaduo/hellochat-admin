import React from "react";
import MetaTags from "react-meta-tags";
import { Container } from "reactstrap";

//Import Breadcrumb
import { Breadcrumb } from "../../../components/Common/Breadcrumb";

const PageStarter = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Starter Page | HelloChat Admin</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumb title="Pages" breadcrumbItem="Starter Page" />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default PageStarter;
