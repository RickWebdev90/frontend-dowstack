import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout.jsx';
import Homepage from '../../../Landingpage/Homepage.jsx';
import CashFlow from '../cashflow/CashFlow.jsx';
import Portfolio from '../portfolio/Portfolio.jsx';
import SavingGoals from '../savinggoals/SavingGoals.jsx';
import LoginPage from '../user/LoginPage.jsx';
import Registration from '../../../Landingpage/Registration/Registration.jsx';
import UserSettings from '../user/Usersettings/UserSettings.jsx';
import NotFoundPage from '../NotFoundPage.jsx';
import PopupDelete from '../user/Usersettings/PopupDelete.jsx';
import ProtectedRoutes from './ProtectedRoutes.jsx';
import Dashboard from "../dashboard/Dashboard.jsx";

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="registration" element={<Registration />} />
      <Route element={<ProtectedRoutes user="authenticated" />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="cashflow" element={<CashFlow />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="savinggoals" element={<SavingGoals />} />
        <Route path="usersettings" element={<UserSettings />} />
        <Route path="usersettings/delete" element={<PopupDelete />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);


