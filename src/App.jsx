import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';
import PrivateLayout from './components/Layout/PrivateLayout';
import PageLoading from './pages/utility/PageLoading';
import { ToastProvider } from './context/toastContext';
// Import pages
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Analytics = lazy(() => import('./pages/Analytics'));
const Fintech = lazy(() => import('./pages/Fintech'));
const Customers = lazy(() => import('./pages/ecommerce/Customers'));
const Orders = lazy(() => import('./pages/ecommerce/Orders'));
const Invoices = lazy(() => import('./pages/ecommerce/Invoices'));
const Shop = lazy(() => import('./pages/ecommerce/Shop'));
const Shop2 = lazy(() => import('./pages/ecommerce/Shop2'));
const Product = lazy(() => import('./pages/ecommerce/Product'));
const Cart = lazy(() => import('./pages/ecommerce/Cart'));
const Cart2 = lazy(() => import('./pages/ecommerce/Cart2'));
const Cart3 = lazy(() => import('./pages/ecommerce/Cart3'));
const Pay = lazy(() => import('./pages/ecommerce/Pay'));
const Campaigns = lazy(() => import('./pages/Campaigns'));
const UsersTabs = lazy(() => import('./pages/community/UsersTabs'));
const UsersTiles = lazy(() => import('./pages/community/UsersTiles'));
const Profile = lazy(() => import('./pages/community/Profile'));
const Feed = lazy(() => import('./pages/community/Feed'));
const Forum = lazy(() => import('./pages/community/Forum'));
const ForumPost = lazy(() => import('./pages/community/ForumPost'));
const Meetups = lazy(() => import('./pages/community/Meetups'));
const MeetupsPost = lazy(() => import('./pages/community/MeetupsPost'));
const CreditCards = lazy(() => import('./pages/finance/CreditCards'));
const Transactions = lazy(() => import('./pages/finance/Transactions'));
const TransactionDetails = lazy(() =>
  import('./pages/finance/TransactionDetails'),
);
const JobListing = lazy(() => import('./pages/job/JobListing'));
const JobPost = lazy(() => import('./pages/job/JobPost'));
const CompanyProfile = lazy(() => import('./pages/job/CompanyProfile'));
const Messages = lazy(() => import('./pages/Messages'));
const TasksKanban = lazy(() => import('./pages/tasks/TasksKanban'));
const TasksList = lazy(() => import('./pages/tasks/TasksList'));
const Inbox = lazy(() => import('./pages/Inbox'));
const Calendar = lazy(() => import('./pages/Calendar'));
const Account = lazy(() => import('./pages/settings/Account'));
const Notifications = lazy(() => import('./pages/settings/Notifications'));
const Apps = lazy(() => import('./pages/settings/Apps'));
const Plans = lazy(() => import('./pages/settings/Plans'));
const Billing = lazy(() => import('./pages/settings/Billing'));
const Feedback = lazy(() => import('./pages/settings/Feedback'));
const Changelog = lazy(() => import('./pages/utility/Changelog'));
const Roadmap = lazy(() => import('./pages/utility/Roadmap'));
const Faqs = lazy(() => import('./pages/utility/Faqs'));
const EmptyState = lazy(() => import('./pages/utility/EmptyState'));
const PageNotFound = lazy(() => import('./pages/utility/PageNotFound'));
const KnowledgeBase = lazy(() => import('./pages/utility/KnowledgeBase'));
const Signin = lazy(() => import('./pages/Signin'));
const Signup = lazy(() => import('./pages/Signup'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const Onboarding01 = lazy(() => import('./pages/Onboarding01'));
const Onboarding02 = lazy(() => import('./pages/Onboarding02'));
const Onboarding03 = lazy(() => import('./pages/Onboarding03'));
const Onboarding04 = lazy(() => import('./pages/Onboarding04'));
const ButtonPage = lazy(() => import('./pages/component/ButtonPage'));
const FormPage = lazy(() => import('./pages/component/FormPage'));
const DropdownPage = lazy(() => import('./pages/component/DropdownPage'));
const AlertPage = lazy(() => import('./pages/component/AlertPage'));
const ModalPage = lazy(() => import('./pages/component/ModalPage'));
const PaginationPage = lazy(() => import('./pages/component/PaginationPage'));
const TabsPage = lazy(() => import('./pages/component/TabsPage'));
const BreadcrumbPage = lazy(() => import('./pages/component/BreadcrumbPage'));
const BadgePage = lazy(() => import('./pages/component/BadgePage'));
const AvatarPage = lazy(() => import('./pages/component/AvatarPage'));
const TooltipPage = lazy(() => import('./pages/component/TooltipPage'));
const AccordionPage = lazy(() => import('./pages/component/AccordionPage'));
const IconsPage = lazy(() => import('./pages/component/IconsPage'));

/*pages*/
const LoginPage = lazy(() => import('./pages/auth/login'));
const FormIndex = lazy(() => import('./pages/Form'));
const FormDashboard = lazy(() => import('./pages/Form/dashboard'));
const FormView = lazy(() => import('./pages/Form/FormView'));
const FormEdit = lazy(() => import('./pages/Form/FormEdit'));
const BroadCastIndex = lazy(() => import('./pages/Broadcast/index'));
const BroadCastCampaign = lazy(() => import('./pages/Broadcast/campaign'));
const BroadcastCampaignAdd = lazy(() => import('./pages/Broadcast/add'));
const DeviceList = lazy(() => import('./pages/Broadcast/devices'));
const DeviceForm = lazy(() => import('./pages/Broadcast/devices/add'));
const BroadcastList = lazy(() => import('./pages/Broadcast/List'));
const AddList = lazy(() => import('./pages/Broadcast/List/add'));
const StaffList = lazy(() => import('./pages/staff'));
const StaffAdd = lazy(() => import('./pages/staff/add'));
const ChangeLogPage = lazy(() => import('./pages/changelog'));

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <Suspense fallback={<PageLoading />}>
      <ToastProvider>
        <Routes>
          <Route element={<PrivateLayout />}>
            <Route index element={<Dashboard />} />
            {/* <Route path="/form" element={<FormIndex />} /> */}
            <Route path="/form" element={<FormIndex />}>
              <Route index element={<FormDashboard />} />
              <Route path="new" element={<FormEdit />} />
              <Route path="view/:formId" element={<FormView />} />
              <Route path="edit/:formId" element={<FormEdit />} />
            </Route>
            <Route path="/broadcast" element={<BroadCastIndex />}>
              <Route index element={<BroadCastCampaign />} />
              <Route path="add" element={<BroadcastCampaignAdd />} />
              <Route path="devices" element={<DeviceList />} />
              <Route path="devices/:id" element={<DeviceForm />} />
              <Route path="list" element={<BroadcastList />} />
              <Route path="list/add" element={<AddList />} />
              <Route path="list/:listId" element={<AddList />} />
            </Route>
            <Route path="/staff" element={<StaffList />} />
            <Route path="/staff/:staffId" element={<StaffAdd />} />
            <Route path="/changelog" element={<ChangeLogPage />} />

            <Route path="/*" element={<PageNotFound />} />
          </Route>
          {/* <Route exact path="/" element={<Dashboard />} /> */}
          <Route path="/login" element={<LoginPage />} />
          {/* original template */}
          <Route path="/template" element={<Dashboard />} />
          <Route path="/template/dashboard/analytics" element={<Analytics />} />
          <Route path="/template/dashboard/fintech" element={<Fintech />} />
          <Route path="/template/ecommerce/customers" element={<Customers />} />
          <Route path="/template/ecommerce/orders" element={<Orders />} />
          <Route path="/template/ecommerce/invoices" element={<Invoices />} />
          <Route path="/template/ecommerce/shop" element={<Shop />} />
          <Route path="/template/ecommerce/shop-2" element={<Shop2 />} />
          <Route path="/template/ecommerce/product" element={<Product />} />
          <Route path="/template/ecommerce/cart" element={<Cart />} />
          <Route path="/template/ecommerce/cart-2" element={<Cart2 />} />
          <Route path="/template/ecommerce/cart-3" element={<Cart3 />} />
          <Route path="/template/ecommerce/pay" element={<Pay />} />
          <Route path="/template/campaigns" element={<Campaigns />} />
          <Route
            path="/template/community/users-tabs"
            element={<UsersTabs />}
          />
          <Route
            path="/template/community/users-tiles"
            element={<UsersTiles />}
          />
          <Route path="/template/community/profile" element={<Profile />} />
          <Route path="/template/community/feed" element={<Feed />} />
          <Route path="/template/community/forum" element={<Forum />} />
          <Route
            path="/template/community/forum-post"
            element={<ForumPost />}
          />
          <Route path="/template/community/meetups" element={<Meetups />} />
          <Route
            path="/template/community/meetups-post"
            element={<MeetupsPost />}
          />
          <Route path="/template/finance/cards" element={<CreditCards />} />
          <Route
            path="/template/finance/transactions"
            element={<Transactions />}
          />
          <Route
            path="/template/finance/transaction-details"
            element={<TransactionDetails />}
          />
          <Route path="/template/job/job-listing" element={<JobListing />} />
          <Route path="/template/job/job-post" element={<JobPost />} />
          <Route
            path="/template/job/company-profile"
            element={<CompanyProfile />}
          />
          <Route path="/template/messages" element={<Messages />} />
          <Route path="/template/tasks/kanban" element={<TasksKanban />} />
          <Route path="/template/tasks/list" element={<TasksList />} />
          <Route path="/template/inbox" element={<Inbox />} />
          <Route path="/template/calendar" element={<Calendar />} />
          <Route path="/template/settings/account" element={<Account />} />
          <Route
            path="/template/settings/notifications"
            element={<Notifications />}
          />
          <Route path="/template/settings/apps" element={<Apps />} />
          <Route path="/template/settings/plans" element={<Plans />} />
          <Route path="/template/settings/billing" element={<Billing />} />
          <Route path="/template/settings/feedback" element={<Feedback />} />
          <Route path="/template/utility/changelog" element={<Changelog />} />
          <Route path="/template/utility/roadmap" element={<Roadmap />} />
          <Route path="/template/utility/faqs" element={<Faqs />} />
          <Route
            path="/template/utility/empty-state"
            element={<EmptyState />}
          />
          <Route path="/template/utility/404" element={<PageNotFound />} />
          <Route
            path="/template/utility/knowledge-base"
            element={<KnowledgeBase />}
          />
          <Route path="/template/signin" element={<Signin />} />
          <Route path="/template/signup" element={<Signup />} />
          <Route path="/template/reset-password" element={<ResetPassword />} />
          <Route path="/template/onboarding-01" element={<Onboarding01 />} />
          <Route path="/template/onboarding-02" element={<Onboarding02 />} />
          <Route path="/template/onboarding-03" element={<Onboarding03 />} />
          <Route path="/template/onboarding-04" element={<Onboarding04 />} />
          <Route path="/template/component/button" element={<ButtonPage />} />
          <Route path="/template/component/form" element={<FormPage />} />
          <Route
            path="/template/component/dropdown"
            element={<DropdownPage />}
          />
          <Route path="/template/component/alert" element={<AlertPage />} />
          <Route path="/template/component/modal" element={<ModalPage />} />
          <Route
            path="/template/component/pagination"
            element={<PaginationPage />}
          />
          <Route path="/template/component/tabs" element={<TabsPage />} />
          <Route
            path="/template/component/breadcrumb"
            element={<BreadcrumbPage />}
          />
          <Route path="/template/component/badge" element={<BadgePage />} />
          <Route path="/template/component/avatar" element={<AvatarPage />} />
          <Route path="/template/component/tooltip" element={<TooltipPage />} />
          <Route
            path="/template/component/accordion"
            element={<AccordionPage />}
          />
          <Route path="/template/component/icons" element={<IconsPage />} />
          <Route path="/template/login" element={<LoginPage />} />
          <Route path="/template/*" element={<PageNotFound />} />
        </Routes>
      </ToastProvider>
    </Suspense>
  );
}

export default App;
