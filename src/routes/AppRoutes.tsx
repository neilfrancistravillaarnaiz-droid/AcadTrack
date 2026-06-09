import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";

import {
  Home,
  Achievements,
  AchievementDetails,
  Profiles,
  ProfileDetails,
  SubmitAchievement,
  Login,
  AdminDashboard,
  ManageAchievements,
  ManageUsers,
  NotFound,
} from "./LazyCodeComponents";

function AppRoutes() {
  return (
    <Suspense fallback={<div className="loader">Loading AwardTrack...</div>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/achievements/:id" element={<AchievementDetails />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/profiles/:id" element={<ProfileDetails />} />
          <Route path="/submit" element={<SubmitAchievement />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/achievements"
          element={
            <ProtectedRoute>
              <ManageAchievements />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute>
              <ManageUsers />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;