import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { Container, Row, Spinner } from "reactstrap";
import { RouteComponentProps, useParams } from "react-router-dom";
import ProfileTab from "./ProfileTab";
import {Breadcrumb} from "src/components/Common/Breadcrumb";
import axios from "axios";
import configs from "src/config";
import { useSelector } from "src/store/hooks";

interface MatchParams {
  userId: string;
}

const UserProfile: React.FC<RouteComponentProps<MatchParams>> = () => {
  const { userId } = useParams<MatchParams>();
  const access_token = useSelector((s) => s.user.token);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `${configs.BASE_API_URL}/proxy/hellochat/members/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    console.log("user, ", data);
    setUser(data);
    setLoading(false);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Profile | HelloChat Admin</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumb title="Contacts" breadcrumbItem="Profile" />

          <Row>
            {/* Render profilemenu */}
            {loading ? <Spinner /> : <ProfileTab user={user} />}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default UserProfile;
