import React, { useEffect, useState } from "react";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import MetaTags from "react-meta-tags";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import axios from "axios";
import configs from "src/config";
import Datatable from "../../components/Common/Datatable/Datatable";
import { useSelector } from "src/store/hooks";
import { columns } from "./datatableConfigs";

const HelloChatUserList = () => {
  const access_token = useSelector((s) => s.user.token);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [totalElements, setTotalElements] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);

  const getUsers = async (page = 0, size = 10, phone?, name?, email?) => {
    setLoading(true);
    let url = `${configs.BASE_API_URL}/proxy/hellochat/members?page=${page}&size=${size}`;
    if (name != null) {
      url += url + `&name=${name}`;
    }
    if (email != null) {
      url += url + `&email=${email}`;
    }
    if (phone != null) {
      url += url + `&phone=${phone}`;
    }
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    console.log("getUsers ", data);
    setUsers(data.content);
    setTotalElements(data.totalElements);
    setTotalPages(data.totalPages);
    setCurrentPage(page);
    setPageSize(size);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Data Tables | HelloChat Admin</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs title="Tables" breadcrumbItem="Data Tables" />
          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <Datatable
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
                      console.log("onPageChange ", page);
                      getUsers(page, pageSize);
                    }}
                    onSizeChange={(size) => {
                      console.log("onSizeChange ", size);
                      getUsers(currentPage, size);
                    }}
                    onRowClick={(row, rowIndex) => {
                      console.log("onRowClick ", row);
                      console.log("rowIndex ", rowIndex);
                    }}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HelloChatUserList;
