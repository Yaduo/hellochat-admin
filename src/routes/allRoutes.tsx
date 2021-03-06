import { Redirect } from "react-router-dom";
//Dashboard
import Dashboard from "../pages/Dashboard";
//Authentication pages
import Login from "src/pages/Authentication/Login";
import Logout from "src/pages/Authentication/Logout";
import Register from "src/pages/Authentication/Register";
import userProfile from "src/pages/Authentication/user-profile";
import PagesComingsoon from "src/pages/Dev/Utility/PageComingsoon";
// Management
import HelloChatUserList from "../pages/Users/HelloChatUserList";
import UserProfile from "../pages/UserProfile/Profile";
import StaffList from "../pages/Staffs/StaffList";
import ServiceTogglesList from "../pages/ServiceToggles/ServiceTogglesList";
import DynamicContentList from "../pages/DynamicContents/DynamicContentList"
import SystemNotificationList from "../pages/SystemNotifications/SystemNotificationList"
// Wallets
import WalletList from "../pages/Wallets/WalletList";
import PaymentOrderList from "../pages/PaymentOrders/PaymentOrderList";
import TransactionList from "../pages/Transactions/TransactionList";
// Parteners
import PartenerList from "../pages/Parteners/PartenerList";
import MerchantList from "../pages/Merchants/MerchantList"
// e-com
import ProductList from "../pages/Products/ProductList"
import PurchaseOrderList from "../pages/PurchaseOrders/PurchaseOrderList"

// ----------------- Dev Routes ---------------------
//Calendar
import Calendar from "src/pages/Dev/Calendar";
//Chat
import Chat from "src/pages/Dev/Chat/Chat";
//Email Inbox
import Inbox from "src/pages/Dev/Email/Inbox";
import EmailRead from "src/pages/Dev/Email/email-read";
//Invoice
import InvoiceList from "src/pages/Dev/Invoices/invoice-list";
import InvoiceDetails from "src/pages/Dev/Invoices/invoice-details";
//Contacts
import ContactsGrid from "src/pages/Dev/Contacts/contactsGrid";
import ContactsList from "src/pages/Dev/Contacts/ContactList/contacts-list";
import ContactsProfile from "src/pages/Dev/Contacts/ContactsProfile/contacts-profile";
//Utility
import PageStarter from "src/pages/Dev/Utility/PageStarter";
import PageMaintenance from "src/pages/Dev/Utility/PageMaintenance";
import PageTimeline from "src/pages/Dev/Utility/PageTimeline";
import PageFaqs from "src/pages/Dev/Utility/PageFAQs";
import PagePricing from "src/pages/Dev/Utility/PagePricing";
import Error404 from "src/pages/Dev/Utility/Error404";
import Error500 from "src/pages/Dev/Utility/Error500";
//UI Components
import UiAlert from "src/pages/Dev/UiComponents/UiAlert";
import UiButton from "src/pages/Dev/UiComponents/UiButton";
import UiCard from "src/pages/Dev/UiComponents/UiCard";
import UiCarousel from "src/pages/Dev/UiComponents/UiCarousel";
import UiDropdowns from "src/pages/Dev/UiComponents/UiDropdowns";
import UiGrid from "src/pages/Dev/UiComponents/UiGird";
import UiModal from "src/pages/Dev/UiComponents/UiModals";
import UiImages from "src/pages/Dev/UiComponents/UiImages";
import UiDrawer from "src/pages/Dev/UiComponents/UiDrawer";
import UiProgressbar from "src/pages/Dev/UiComponents/UiProgressbar";
import UiTabsAccordions from "src/pages/Dev/Utility/UiTabsAccordions";
import UiTypography from "src/pages/Dev/Utility/UiTypography";
import UiVideo from "src/pages/Dev/Utility/UiVideo";
import UiGeneral from "src/pages/Dev/UiComponents/UiGeneral";
import UiColors from "src/pages/Dev/UiComponents/UiColors";
//Extended pages
import UiLightbox from "src/pages/Dev/Extended/Lightbox";
import RangeSlider from "src/pages/Dev/Extended/Rangeslider";
import UiSweetAlert from "src/pages/Dev/Extended/SweetAlert";
import SessionTimeout from "src/pages/Dev/Extended/SessionTimeout";
import UiRating from "src/pages/Dev/Extended/UiRating";
import Notifications from "src/pages/Dev/Extended/Notifications";
//Forms pages
import FormElements from "src/pages/Dev/Forms/FormElements";
import FormValidation from "src/pages/Dev/Forms/FormValidation";
import AdvancedPlugins from "src/pages/Dev/Forms/AdvancedPlugins";
import FormEditors from "src/pages/Dev/Forms/FormEditors";
import FormUpload from "src/pages/Dev/Forms/FormUpload";
import FormWizard from "src/pages/Dev/Forms/FormWizard";
import FormMask from "src/pages/Dev/Forms/FormMask";
//Tables
import BasicTable from "src/pages/Dev/Tables/BasicTables";
import DatatableTables from "src/pages/Dev/Tables/DatatableTables";
import ResponsiveTables from "src/pages/Dev/Tables/ResponsiveTables";
import EditableTables from "src/pages/Dev/Tables/EditableTables";
//Charts
import Apexchart from "src/pages/Dev/Charts/Apexcharts";
import EChart from "src/pages/Dev/Charts/EChart";
import ChartjsChart from "src/pages/Dev/Charts/ChartjsChart";
import SparklineChart from "src/pages/Dev/Charts/SparklineChart";
//Icons
import IconBoxicons from "../pages/Dev/Icons/IconBoxicons";
import IconMaterialdesign from "../pages/Dev/Icons/IconMaterialdesign";
import IconDripicons from "../pages/Dev/Icons/IconDripicons";
import IconFontawesome from "../pages/Dev/Icons/IconFontawesome";
//AuthenticationInner pages
import PageLogin from "src/pages/Dev/AuthenticationInner/PageLogin";
import PageRegister from "src/pages/Dev/AuthenticationInner/PageRegister";
import RecoverPassword from "src/pages/Dev/AuthenticationInner/RecoverPassword";
import LockScreen from "src/pages/Dev/AuthenticationInner/LockScreen";
import ConfirmMail from "src/pages/Dev/AuthenticationInner/ConfirmMail";
import EmailVerification from "src/pages/Dev/AuthenticationInner/EmailVerification";
import TwoStepVerfication from "src/pages/Dev/AuthenticationInner/TwoStepVerfication";

//Maps
import MapsGoogle from "src/pages/Dev/Maps/MapsGoogle";
import MapsVector from "src/pages/Dev/Maps/MapsVector";
import MapsLeaflet from "src/pages/Dev/Maps/MapsLeaflet";

interface RouteProps {
  path: string;
  component: any;
  exact?: boolean;
}

const userRoutes: Array<RouteProps> = [
  //User Profile
  { path: "/profile", component: userProfile },

  //dashboard
  { path: "/dashboard", component: Dashboard },

  // management
  { path: "/hellochat-users", component: HelloChatUserList },
  { path: "/hellochat-users/:userId", component: UserProfile },
  { path: "/staffs", component: StaffList },
  { path: "/service-toggles", component: ServiceTogglesList },
  { path: "/dynamic-contents", component: DynamicContentList },
  { path: "/system-notifications", component: SystemNotificationList },

  // Wallets
  { path: "/wallets", component: WalletList },
  { path: "/payment-orders", component: PaymentOrderList },
  { path: "/transactions", component: TransactionList },
  
  // Parteners
  { path: "/parteners", component: PartenerList },
  { path: "/merchants", component: MerchantList },

  // e-com
  { path: "/products", component: ProductList },
  { path: "/purchase-orders", component: PurchaseOrderList },
  
  
  
  




  // ----------------- Dev Routes -----------------
  //Calendar
  { path: "/apps-calendar", component: Calendar },

  //Chat
  { path: "/apps-chat", component: Chat },

  //Email Inbox
  { path: "/email-inbox", component: Inbox },
  { path: "/email-read", component: EmailRead },

  //Invoice
  { path: "/invoices-list", component: InvoiceList },
  { path: "/invoices-detail", component: InvoiceDetails },

  //Contact
  { path: "/contacts-grid", component: ContactsGrid },
  { path: "/contacts-list", component: ContactsList },
  { path: "/contacts-profile", component: ContactsProfile },

  //Utility
  { path: "/pages-starter", component: PageStarter },
  { path: "/pages-timeline", component: PageTimeline },
  { path: "/pages-faqs", component: PageFaqs },
  { path: "/pages-pricing", component: PagePricing },

  //UI Components
  { path: "/ui-alerts", component: UiAlert },
  { path: "/ui-buttons", component: UiButton },
  { path: "/ui-cards", component: UiCard },
  { path: "/ui-carousel", component: UiCarousel },
  { path: "/ui-dropdowns", component: UiDropdowns },
  { path: "/ui-grid", component: UiGrid },
  { path: "/ui-modals", component: UiModal },
  { path: "/ui-images", component: UiImages },
  { path: "/ui-drawer", component: UiDrawer },
  { path: "/ui-progressbars", component: UiProgressbar },
  { path: "/ui-tabs-accordions", component: UiTabsAccordions },
  { path: "/ui-typography", component: UiTypography },
  { path: "/ui-video", component: UiVideo },
  { path: "/ui-general", component: UiGeneral },
  { path: "/ui-colors", component: UiColors },

  //Extended pages
  { path: "/extended-lightbox", component: UiLightbox },
  { path: "/extended-rangeslider", component: RangeSlider },
  { path: "/extended-sweet-alert", component: UiSweetAlert },
  { path: "/extended-session-timeout", component: SessionTimeout },
  { path: "/extended-rating", component: UiRating },
  { path: "/extended-notifications", component: Notifications },

  // Forms pages
  { path: "/form-elements", component: FormElements },
  { path: "/form-validation", component: FormValidation },
  { path: "/form-advanced", component: AdvancedPlugins },
  { path: "/form-editors", component: FormEditors },
  { path: "/form-uploads", component: FormUpload },
  { path: "/form-wizard", component: FormWizard },
  { path: "/form-mask", component: FormMask },

  //tables
  { path: "/tables-basic", component: BasicTable },
  { path: "/tables-datatable", component: DatatableTables },
  { path: "/tables-responsive", component: ResponsiveTables },
  { path: "/tables-editable", component: EditableTables },

  //Charts
  { path: "/charts-apex", component: Apexchart },
  { path: "/charts-echart", component: EChart },
  { path: "/charts-chartjs", component: ChartjsChart },
  { path: "/charts-sparkline", component: SparklineChart },

  //Icons
  { path: "/icons-boxicons", component: IconBoxicons },
  { path: "/icons-materialdesign", component: IconMaterialdesign },
  { path: "/icons-dripicons", component: IconDripicons },
  { path: "/icons-fontawesome", component: IconFontawesome },

  //Maps
  { path: "/maps-google", component: MapsGoogle },
  { path: "/maps-vector", component: MapsVector },
  { path: "/maps-leaflet", component: MapsLeaflet },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
];

const authRoutes: Array<RouteProps> = [
  //Authentication pages
  { path: "/login", component: Login },
  { path: "/logout", component: Logout },
  { path: "/register", component: Register },

  //AuthenticationInner pages
  { path: "/page-login", component: PageLogin },
  { path: "/page-register", component: PageRegister },
  { path: "/page-recoverpw", component: RecoverPassword },
  { path: "/page-lock-screen", component: LockScreen },
  { path: "/page-confirm-mail", component: ConfirmMail },
  { path: "/page-email-verification", component: EmailVerification },
  { path: "/page-two-step-verification", component: TwoStepVerfication },

  //utility page
  { path: "/pages-comingsoon", component: PagesComingsoon },
  { path: "/pages-maintenance", component: PageMaintenance },
  { path: "/pages-404", component: Error404 },
  { path: "/pages-500", component: Error500 },
];

export { userRoutes, authRoutes };
