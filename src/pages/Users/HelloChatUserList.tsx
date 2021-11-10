import React, { useEffect, useState } from "react";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import MetaTags from "react-meta-tags";
import { Breadcrumb } from "../../components/Common/Breadcrumb";
import axios from "axios";
import configs from "src/config";
import { Datatable } from "../../components/Common/Datatable/Datatable";
import { useSelector } from "src/store/hooks";
import { columns } from "./datatableConfigs";
import SearchBar from "./SearchBar";
import { useHistory } from "react-router-dom";

const HelloChatUserList = () => {
  const access_token = useSelector((s) => s.user.token);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<any>([]);
  const [totalElements, setTotalElements] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [hellochatID, setHellochatID] = useState(null);
  const history = useHistory();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async (
    page = 0,
    size = 10,
    phone?,
    name?,
    email?,
    hellochatID?
  ) => {
    setLoading(true);
    let url = `${configs.BASE_API_URL}/proxy/hellochat/members?page=${page}&size=${size}`;
    if (name != null) {
      url += `&name=${name}`;
    }
    if (email != null) {
      url += `&email=${email}`;
    }
    if (phone != null) {
      url += `&phone=${phone}`;
    }
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    setUsers(data.content);

    setTotalElements(data.totalElements);
    setTotalPages(data.totalPages);
    setCurrentPage(page);
    setPageSize(size);

    setPhone(phone);
    setEmail(email);
    setName(name);
    setHellochatID(null);

    setLoading(false);
  };

  const getUserByHellochatId = async (hellochatID) => {
    setLoading(true);

    const { data } = await axios.get(
      `${configs.BASE_API_URL}/proxy/hellochat/members/member-by-hellochat-id/${hellochatID}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    setUsers([data]);

    setTotalElements(1);
    setTotalPages(1);
    setCurrentPage(0);

    setPhone(null);
    setEmail(null);
    setName(null);
    setHellochatID(hellochatID);
    setLoading(false);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Data Tables | HelloChat Admin</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumb title="Tables" breadcrumbItem="Data Tables" />
          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <SearchBar
                    name={name}
                    phone={phone}
                    email={email}
                    hellochatID={hellochatID}
                    onUsernameChange={(value) => {
                      setPhone(null);
                      setEmail(null);
                      setHellochatID(null);
                      setName(value);
                    }}
                    onEmailChange={(value) => {
                      setPhone(null);
                      setEmail(value);
                      setHellochatID(null);
                      setName(null);
                    }}
                    onHellochatIDChange={(value) => {
                      setPhone(null);
                      setEmail(null);
                      setHellochatID(value);
                      setName(null);
                    }}
                    onPhoneChange={(value) => {
                      setPhone(value);
                      setEmail(null);
                      setHellochatID(null);
                      setName(null);
                    }}
                    onSearch={() => {
                      if (hellochatID) {
                        getUserByHellochatId(hellochatID);
                      } else {
                        getUsers(0, pageSize, phone, name, email, hellochatID);
                      }
                    }}
                    onClear={() => getUsers(0, pageSize, null, null, null)}
                  />
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
                      getUsers(page, pageSize, phone, name, email);
                    }}
                    onSizeChange={(size) => {
                      getUsers(0, size, phone, name, email);
                    }}
                    onRowClick={(row, rowIndex) => {
                      history.push(`/hellochat-users/${row.hellochatId}`);
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
