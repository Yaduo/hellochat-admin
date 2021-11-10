import React from "react";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import MetaTags from "react-meta-tags";
import { Datatable, Breadcrumb } from "src/components";

const TransactionList = () => {

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Wallet Transactions | HelloChat Admin</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumb title="Tables" breadcrumbItem="Data Tables" />
          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Wallet Transactions </CardTitle>
                  {/* <Datatable
                    loading={loading}
                    data={users}
                    columns={columns}
                    pagination={{
                      currentPage,
                      totalElements,
                      totalPages,
                      pageSize,
                    }}
                    onPageChange={(page) => {
                      getUsers(page, pageSize, phone, name, email);
                    }}
                    onSizeChange={(size) => {
                      getUsers(0, size, phone, name, email);
                    }}
                    onRowClick={(row, rowIndex) => {
                      history.push(`/hellochat-users/${row.hellochatId}`);
                    }}
                  /> */}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TransactionList;
