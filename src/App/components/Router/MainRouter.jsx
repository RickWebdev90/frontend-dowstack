import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import Homepage from '../../../Landingpage/Homepage';
import Dashboard from '../dashboard/Dashboard';
import Cashflow from '../cashflow/CashFlow.jsx';
import Portfolio from '../portfolio/Portfolio.jsx';
import Savinggoals from '../savinggoals/Savinggoals.jsx';
import LoginPage from '../user/LoginPage.jsx';
import Registration from '../../../Landingpage/Registration/Registration.jsx';
import Usersettings from '../user/Usersettings/UserSettings.jsx';
import NotFoundPage from '../NotFoundPage';
import PopupDelete from '../user/Usersettings/PopupDelete';
import ProtectedRoutes from './ProtectedRoutes';

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="registration" element={<Registration />} />
      <Route element={<ProtectedRoutes user="authenticated" />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="cashflow" element={<Cashflow />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="savinggoals" element={<Savinggoals />} />
        <Route path="usersettings" element={<Usersettings />} />
        <Route path="usersettings/delete" element={<PopupDelete />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);


