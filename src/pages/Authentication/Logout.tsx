import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { userSlice } from "src/store/user/slice"
import { useDispatch } from "react-redux";


const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(userSlice.actions.logOut())
    history.push("/login")
  }, [dispatch, history]);

  return <></>;
};

export default Logout;
