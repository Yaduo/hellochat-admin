import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Icon from "@ailibs/feather-react-ts";

export const DevMenu = () => {
  const i18n = useTranslation();
  return (
    <>
      <li className="menu-title">{i18n.t("Development")}</li>
      <li>
        <Link to="/#" className="has-arrow">
          <Icon name="grid" />
          <span>{i18n.t("Apps")}</span>
        </Link>
        <ul className="sub-menu">
          <li>
            <Link to="/apps-calendar">{i18n.t("Calendar")}</Link>
          </li>
          <li>
            <Link to="/apps-chat">{i18n.t("Chat")}</Link>
          </li>
          <li>
            <Link to="/#" className="has-arrow">
              <span>{i18n.t("Email")}</span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="/email-inbox">{i18n.t("Inbox")}</Link>
              </li>
              <li>
                <Link to="/email-read">{i18n.t("Read Email")} </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/#" className="has-arrow">
              <span>{i18n.t("Invoices")}</span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="/invoices-list">{i18n.t("Invoice List")}</Link>
              </li>
              <li>
                <Link to="/invoices-detail">{i18n.t("Invoice Detail")}</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/#" className="has-arrow ">
              <span>{i18n.t("Contacts")}</span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="/contacts-grid">{i18n.t("User Grid")}</Link>
              </li>
              <li>
                <Link to="/contacts-list">{i18n.t("User List")}</Link>
              </li>
              <li>
                <Link to="/contacts-profile">{i18n.t("Profile")}</Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>

      <li>
        <Link to="/#" className="has-arrow">
          <Icon name="users" />
          <span>{i18n.t("Authentication")}</span>
        </Link>
        <ul className="sub-menu">
          <li>
            <Link to="/page-login">{i18n.t("Login")}</Link>
          </li>
          <li>
            <Link to="/page-register">{i18n.t("Register")}</Link>
          </li>
          <li>
            <Link to="/page-recoverpw">{i18n.t("Recover Password")}</Link>
          </li>
          <li>
            <Link to="/page-lock-screen">{i18n.t("Lock Screen")}</Link>
          </li>
          <li>
            <Link to="/page-confirm-mail">{i18n.t("Confirm Mail")}</Link>
          </li>
          <li>
            <Link to="/page-email-verification">
              {i18n.t("Email Verification")}
            </Link>
          </li>
          <li>
            <Link to="/page-two-step-verification">
              {i18n.t("Two Step Verification")}
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link to="/#" className="has-arrow ">
          <Icon name="file-text" />
          <span>{i18n.t("Pages")}</span>
        </Link>
        <ul className="sub-menu">
          <li>
            <Link to="/pages-starter">{i18n.t("Starter Page")}</Link>
          </li>
          <li>
            <Link to="/pages-maintenance">{i18n.t("Maintenance")}</Link>
          </li>
          <li>
            <Link to="/pages-comingsoon">{i18n.t("Coming Soon")}</Link>
          </li>
          <li>
            <Link to="/pages-timeline">{i18n.t("Timeline")}</Link>
          </li>
          <li>
            <Link to="/pages-faqs">{i18n.t("FAQs")}</Link>
          </li>
          <li>
            <Link to="/pages-pricing">{i18n.t("Pricing")}</Link>
          </li>
          <li>
            <Link to="/pages-404">{i18n.t("Error 404")}</Link>
          </li>
          <li>
            <Link to="/pages-500">{i18n.t("Error 500")}</Link>
          </li>
        </ul>
      </li>

      <li>
        <Link to="/#" className="has-arrow ">
          <Icon name="briefcase" />
          <span>{i18n.t("components")}</span>
        </Link>
        <ul className="sub-menu">
          <li>
            <Link to="/ui-alerts">{i18n.t("Alerts")}</Link>
          </li>
          <li>
            <Link to="/ui-buttons">{i18n.t("Buttons")}</Link>
          </li>
          <li>
            <Link to="/ui-cards">{i18n.t("Cards")}</Link>
          </li>
          <li>
            <Link to="/ui-carousel">{i18n.t("Carousel")}</Link>
          </li>
          <li>
            <Link to="/ui-dropdowns">{i18n.t("Dropdowns")}</Link>
          </li>
          <li>
            <Link to="/ui-grid">{i18n.t("Grid")}</Link>
          </li>
          <li>
            <Link to="/ui-images">{i18n.t("Images")}</Link>
          </li>
          <li>
            <Link to="/ui-modals">{i18n.t("Modals")}</Link>
          </li>
          <li>
            <Link to="/ui-drawer">{i18n.t("Drawer")}</Link>
          </li>
          <li>
            <Link to="/ui-progressbars">{i18n.t("Progress Bars")}</Link>
          </li>
          <li>
            <Link to="/ui-tabs-accordions">{i18n.t("Tabs & Accordions")}</Link>
          </li>
          <li>
            <Link to="/ui-typography">{i18n.t("Typography")}</Link>
          </li>
          <li>
            <Link to="/ui-video">{i18n.t("Video")}</Link>
          </li>
          <li>
            <Link to="/ui-general">{i18n.t("General")}</Link>
          </li>
          <li>
            <Link to="/ui-colors">{i18n.t("Colors")}</Link>
          </li>
        </ul>
      </li>

      <li>
        <Link to="/#" className="has-arrow ">
          <Icon name="gift" />
          <span>{i18n.t("Extended")}</span>
        </Link>
        <ul className="sub-menu">
          <li>
            <Link to="/extended-lightbox">{i18n.t("Lightbox")}</Link>
          </li>
          <li>
            <Link to="/extended-rangeslider">{i18n.t("Range Slider")}</Link>
          </li>
          <li>
            <Link to="/extended-sweet-alert">{i18n.t("Sweet Alert")}</Link>
          </li>
          <li>
            <Link to="/extended-session-timeout">
              {i18n.t("Session Timeout")}
            </Link>
          </li>
          <li>
            <Link to="/extended-rating">{i18n.t("Rating")}</Link>
          </li>
          <li>
            <Link to="/extended-notifications">{i18n.t("Notifications")}</Link>
          </li>
        </ul>
      </li>

      <li>
        <Link to="/#" className="">
          <Icon name="box" />
          <span className="badge rounded-pill bg-soft-danger text-danger float-end">
            7
          </span>
          <span>{i18n.t("Forms")}</span>
        </Link>
        <ul className="sub-menu">
          <li>
            <Link to="/form-elements">{i18n.t("Basic Elements")}</Link>
          </li>
          <li>
            <Link to="/form-validation">{i18n.t("Validation")}</Link>
          </li>
          <li>
            <Link to="/form-advanced">{i18n.t("Advanced Plugins")}</Link>
          </li>
          <li>
            <Link to="/form-editors">{i18n.t("Editors")}</Link>
          </li>
          <li>
            <Link to="/form-uploads">{i18n.t("File Upload")} </Link>
          </li>
          <li>
            <Link to="/form-wizard">{i18n.t("Form Wizard")}</Link>
          </li>
          <li>
            <Link to="/form-mask">{i18n.t("Form Mask")}</Link>
          </li>
        </ul>
      </li>

      <li>
        <Link to="/#" className="has-arrow ">
          <Icon name="sliders" />
          <span>{i18n.t("Tables")}</span>
        </Link>
        <ul className="sub-menu">
          <li>
            <Link to="/tables-basic">{i18n.t("Bootstrap Basic")}</Link>
          </li>
          <li>
            <Link to="/tables-datatable">{i18n.t("DataTables")}</Link>
          </li>
          <li>
            <Link to="/tables-responsive">{i18n.t("Responsive")}</Link>
          </li>
          <li>
            <Link to="/tables-editable">{i18n.t("Editable")}</Link>
          </li>
        </ul>
      </li>

      <li>
        <Link to="/#" className="has-arrow ">
          <Icon name="pie-chart" />
          <span>{i18n.t("Charts")}</span>
        </Link>

        <ul className="sub-menu">
          <li>
            <Link to="/charts-apex">{i18n.t("Apexcharts")}</Link>
          </li>
          <li>
            <Link to="/charts-echart">{i18n.t("Echarts")}</Link>
          </li>
          <li>
            <Link to="/charts-chartjs">{i18n.t("Chartjs")}</Link>
          </li>
          <li>
            <Link to="/charts-sparkline">{i18n.t("Sparkline")}</Link>
          </li>
        </ul>
      </li>

      <li>
        <Link to="/#" className="has-arrow ">
          <Icon name="cpu" />
          <span>{i18n.t("Icons")}</span>
        </Link>
        <ul className="sub-menu">
          <li>
            <Link to="/icons-boxicons">{i18n.t("Boxicons")}</Link>
          </li>
          <li>
            <Link to="/icons-materialdesign">{i18n.t("Material Design")}</Link>
          </li>
          <li>
            <Link to="/icons-dripicons">{i18n.t("Dripicons")}</Link>
          </li>
          <li>
            <Link to="/icons-fontawesome">{i18n.t("Font awesome")}</Link>
          </li>
        </ul>
      </li>

      <li>
        <Link to="/#" className="has-arrow ">
          <Icon name="map" />
          <span>{i18n.t("Maps")}</span>
        </Link>
        <ul className="sub-menu">
          <li>
            <Link to="/maps-google">{i18n.t("Google")}</Link>
          </li>
          <li>
            <Link to="/maps-vector">{i18n.t("Vector")}</Link>
          </li>
          <li>
            <Link to="/maps-leaflet">{i18n.t("Leaflet")}</Link>
          </li>
        </ul>
      </li>

      <li>
        <Link to="/#" className="has-arrow ">
          <Icon name="share-2" />
          <span>{i18n.t("Multi Level")}</span>
        </Link>
        <ul className="sub-menu">
          <li>
            <Link to="/#">{i18n.t("Level 1.1")}</Link>
          </li>
          <li>
            <Link to="/#" className="has-arrow">
              {i18n.t("Level 1.2")}
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="/#">{i18n.t("Level 2.1")}</Link>
              </li>
              <li>
                <Link to="/#">{i18n.t("Level 2.2")}</Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </>
  );
};
