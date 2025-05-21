import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ContactPage from "../pages/ContactPage/ContactPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LogInPage from "../pages/LogInPage/LogInPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import BattlePage from "../pages/BattlePage/BattlePage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import AfterReg from "../pages/AfterReg/AfterReg";
import SetPasswordPage from "../pages/SetPasswordPage/SetPasswordPage";
import Page404 from "../pages/Page404/Page404";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LogInPage />,
  },
  {
    path: "/profile/:username",
    element: <ProfilePage />,
  },
  {
    path: "/battle",
    element: <BattlePage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
  {
    path: "/staring",
    element: <AfterReg />,
  },
  {
    path: "/setPassword",
    element: <SetPasswordPage />,
  },
  {
    path: "*",
    element: <Page404 />,
  }
]);
