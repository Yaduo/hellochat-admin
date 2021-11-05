import React, { useEffect, useRef, useCallback } from "react";
import Icon from "@ailibs/feather-react-ts";
import SimpleBar from "simplebar-react";
import { useTranslation } from "react-i18next";
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import DevMenu from "./DevMenu";

const SidebarContent = () => {
  const i18n = useTranslation();
  const ref = useRef<any>();
  const location = useLocation();

  const activateParentDropdown = useCallback((item) => {
    item.classList.add("active");
    const parent = item.parentElement;
    const parent2El = parent.childNodes[1];
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag

        const parent3 = parent2.parentElement; // li tag

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              parent5.childNodes[0].classList.add("mm-active"); // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false;
    }
    scrollElement(item);
    return false;
  }, []);

  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = location.pathname;

    const initMenu = () => {
      new MetisMenu("#side-menu");
      let matchingMenuItem = null;
      const ul: any = document.getElementById("side-menu");
      const items = ul.getElementsByTagName("a");
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i];
          break;
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem);
      }
    };
    initMenu();
  }, [location.pathname, activateParentDropdown]);

  useEffect(() => {
    console.log("ref.current.recalculate ");
    ref.current.recalculate();
  });

  function scrollElement(item: any) {
    if (item) {
      const currentPosition = item.offsetTop;
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300;
      }
    }
  }

  return (
    <React.Fragment>
      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{i18n.t("Menu")} </li>
            <li>
              <Link to="/dashboard" className="">
                <Icon name="home" />
                <span>{i18n.t("Dashboard")}</span>
              </Link>
            </li>

            <li className="menu-title">{i18n.t("Managment")}</li>
            <li>
              <Link to="/#" className="has-arrow ">
                <Icon name="briefcase" />
                <span>{i18n.t("Users")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/ui-alerts">{i18n.t("HelloChat Users")}</Link>
                </li>
                <li>
                  <Link to="/ui-alerts">{i18n.t("Staff")}</Link>
                </li>
              </ul>
            </li>

            <li className="menu-title">{i18n.t("HelloChat Pay")}</li>
            <li>
              <Link to="/#" className="has-arrow ">
                <Icon name="briefcase" />
                <span>{i18n.t("Wallets")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/ui-alerts">{i18n.t("Wallets")}</Link>
                </li>
                <li>
                  <Link to="/extended-rangeslider">
                    {i18n.t("Payment Orders")}
                  </Link>
                </li>
                <li>
                  <Link to="/extended-rangeslider">
                    {i18n.t("Transactions")}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/ui-alerts">{i18n.t("Parteners")}</Link>
            </li>
            <li>
              <Link to="/ui-alerts">{i18n.t("Merchant List")}</Link>
            </li>

            <li className="menu-title">{i18n.t("E-Commerce")}</li>
            <li>
              <Link to="/ui-alerts">{i18n.t("Products")}</Link>
            </li>
            <li>
              <Link to="/ui-alerts">{i18n.t("Purchase Orders")}</Link>
            </li>

            {/* DevMenu only shows in Dev mode */}
            {process.env.REACT_APP_DEV_MODE && <DevMenu />}
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

export default SidebarContent;
