import { lazy } from "react";

export const Home = lazy(() => import("../pages/Home"));
export const Achievements = lazy(() => import("../pages/Achievements"));
export const AchievementDetails = lazy(() => import("../pages/AchievementDetails"));
export const Profiles = lazy(() => import("../pages/Profiles"));
export const ProfileDetails = lazy(() => import("../pages/ProfileDetails"));
export const SubmitAchievement = lazy(() => import("../pages/SubmitAchievement"));
export const Login = lazy(() => import("../pages/Login"));
export const AdminDashboard = lazy(() => import("../pages/AdminDashboard"));
export const ManageAchievements = lazy(() => import("../pages/ManageAchievements"));
export const ManageUsers = lazy(() => import("../pages/ManageUsers"));
export const NotFound = lazy(() => import("../pages/NotFound"));