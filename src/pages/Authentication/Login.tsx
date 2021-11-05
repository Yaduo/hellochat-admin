import MetaTags from "react-meta-tags";
import React, { useEffect } from "react";
import { Row, Col, Alert, Container } from "reactstrap";
import { withRouter, Link } from "react-router-dom";
import { AvForm, AvField } from "availity-reactstrap-validation";
import logo from "../../assets/images/logo-sm.svg";
import CarouselPage from "../AuthenticationInner/CarouselPage";
import { signIn, userSlice } from "../../store/user/slice";
import { useDispatch } from "react-redux";
import { useSelector } from "../../store/hooks";
import { useHistory } from "react-router-dom";

// interface LoginProps {
//   history: object;
// }

const Login = () => {
  const loading = useSelector((s) => s.user.loading);
  const access_token = useSelector((s) => s.user.token);
  const error = useSelector((s) => s.user.error);
  const dispatch = useDispatch();
  const history = useHistory();

  // handleValidSubmit
  const handleValidSubmit = (event: any, values: any) => {
    dispatch(
      signIn({
        email: values.email,
        password: values.password,
      })
    );
  };

  useEffect(() => {
    if (access_token !== null) {
      history.push("/dashboard");
    }
  }, [access_token]);

  return (
    <React.Fragment>
      <MetaTags>
        <title>Login | HelloChat Admin</title>
      </MetaTags>
      <div className="auth-page">
        <Container fluid className="p-0">
          <Row className="g-0">
            <Col lg={4} md={5} className="col-xxl-3">
              <div className="auth-full-page-content d-flex p-sm-5 p-4">
                <div className="w-100">
                  <div className="d-flex flex-column h-100">
                    <div className="mb-4 mb-md-5 text-center">
                      <Link to="/dashboard" className="d-block auth-logo">
                        <img src={logo} alt="" height="28" />{" "}
                        <span className="logo-txt">HelloChat</span>
                      </Link>
                    </div>
                    <div className="auth-content my-auto">
                      <div className="text-center">
                        <h5 className="mb-0">Welcome Back !</h5>
                        <p className="text-muted mt-2">
                          Sign in to continue to HelloChat.
                        </p>
                      </div>
                      <AvForm
                        className="custom-form mt-4 pt-2"
                        onValidSubmit={(e: any, v: any) => {
                          handleValidSubmit(e, v);
                        }}
                      >
                        {/* {error ? <Alert color="danger">{error}</Alert> : null} */}
                        <div className="mb-3">
                          <AvField
                            name="email"
                            label="Email"
                            value="alex1234@163.com"
                            className="form-control"
                            placeholder="Enter email"
                            type="email"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <div className="d-flex align-items-start">
                            <div className="flex-grow-1">
                              <label className="form-label">Password</label>
                            </div>
                            {/* <div className="flex-shrink-0">
                              <div className="">
                                <Link
                                  to="/auth-recoverpw"
                                  className="text-muted"
                                >
                                  Forgot password?
                                </Link>
                              </div>
                            </div> */}
                          </div>

                          <div className="mb-3">
                            <AvField
                              name="password"
                              value="Fake123$"
                              type="password"
                              className="form-control"
                              required
                              placeholder="Enter Password"
                            />
                          </div>
                        </div>
                        <div className="row mb-4">
                          <div className="col">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="remember-check"
                              />
                              {/* <label
                                className="form-check-label"
                                htmlFor="remember-check"
                              >
                                Remember me
                              </label> */}
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <button
                            className="btn btn-primary w-100 waves-effect waves-light"
                            type="submit"
                          >
                            Log In
                          </button>
                        </div>
                      </AvForm>
                    </div>
                    <div className="mt-4 mt-md-5 text-center">
                      <p className="mb-0">
                        © {new Date().getFullYear()} HelloChat . Crafted with{" "}
                        <i className="mdi mdi-heart text-danger"></i> by
                        HelloChat
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <CarouselPage />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Login);
