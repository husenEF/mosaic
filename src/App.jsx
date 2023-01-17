import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Fintech from './pages/Fintech';
import Customers from './pages/ecommerce/Customers';
import Orders from './pages/ecommerce/Orders';
import Invoices from './pages/ecommerce/Invoices';
import Shop from './pages/ecommerce/Shop';
import Shop2 from './pages/ecommerce/Shop2';
import Product from './pages/ecommerce/Product';
import Cart from './pages/ecommerce/Cart';
import Cart2 from './pages/ecommerce/Cart2';
import Cart3 from './pages/ecommerce/Cart3';
import Pay from './pages/ecommerce/Pay';
import Campaigns from './pages/Campaigns';
import UsersTabs from './pages/community/UsersTabs';
import UsersTiles from './pages/community/UsersTiles';
import Profile from './pages/community/Profile';
import Feed from './pages/community/Feed';
import Forum from './pages/community/Forum';
import ForumPost from './pages/community/ForumPost';
import Meetups from './pages/community/Meetups';
import MeetupsPost from './pages/community/MeetupsPost';
import CreditCards from './pages/finance/CreditCards';
import Transactions from './pages/finance/Transactions';
import TransactionDetails from './pages/finance/TransactionDetails';
import JobListing from './pages/job/JobListing';
import JobPost from './pages/job/JobPost';
import CompanyProfile from './pages/job/CompanyProfile';
import Messages from './pages/Messages';
import TasksKanban from './pages/tasks/TasksKanban';
import TasksList from './pages/tasks/TasksList';
import Inbox from './pages/Inbox';
import Calendar from './pages/Calendar';
import Account from './pages/settings/Account';
import Notifications from './pages/settings/Notifications';
import Apps from './pages/settings/Apps';
import Plans from './pages/settings/Plans';
import Billing from './pages/settings/Billing';
import Feedback from './pages/settings/Feedback';
import Changelog from './pages/utility/Changelog';
import Roadmap from './pages/utility/Roadmap';
import Faqs from './pages/utility/Faqs';
import EmptyState from './pages/utility/EmptyState';
import PageNotFound from './pages/utility/PageNotFound';
import KnowledgeBase from './pages/utility/KnowledgeBase';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import Onboarding01 from './pages/Onboarding01';
import Onboarding02 from './pages/Onboarding02';
import Onboarding03 from './pages/Onboarding03';
import Onboarding04 from './pages/Onboarding04';
import ButtonPage from './pages/component/ButtonPage';
import FormPage from './pages/component/FormPage';
import DropdownPage from './pages/component/DropdownPage';
import AlertPage from './pages/component/AlertPage';
import ModalPage from './pages/component/ModalPage';
import PaginationPage from './pages/component/PaginationPage';
import TabsPage from './pages/component/TabsPage';
import BreadcrumbPage from './pages/component/BreadcrumbPage';
import BadgePage from './pages/component/BadgePage';
import AvatarPage from './pages/component/AvatarPage';
import TooltipPage from './pages/component/TooltipPage';
import AccordionPage from './pages/component/AccordionPage';
import IconsPage from './pages/component/IconsPage';

// import LoginPage from './pages/auth/login';
import PrivateLayout from './components/Layout/PrivateLayout';

/*pages*/
const LoginPage = lazy(() => import('./pages/auth/login'));
const FormPagesMain = lazy(() => import('./pages/Form'));

const LoadingMessage = () => "I'm loading...";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <Suspense fallback={<LoadingMessage />}>
      <Routes>
        <Route element={<PrivateLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/form" element={<FormPagesMain />} />
        </Route>
        {/* <Route exact path="/" element={<Dashboard />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<PageNotFound />} />
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
        <Route path="/template/community/users-tabs" element={<UsersTabs />} />
        <Route
          path="/template/community/users-tiles"
          element={<UsersTiles />}
        />
        <Route path="/template/community/profile" element={<Profile />} />
        <Route path="/template/community/feed" element={<Feed />} />
        <Route path="/template/community/forum" element={<Forum />} />
        <Route path="/template/community/forum-post" element={<ForumPost />} />
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
        <Route path="/template/utility/empty-state" element={<EmptyState />} />
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
        <Route path="/template/component/dropdown" element={<DropdownPage />} />
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
    </Suspense>
  );
}

export default App;
