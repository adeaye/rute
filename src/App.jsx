import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";

const App = () => {
  const isAuthenticated = true; // Simulasi status login

  return (
    <div className="w-full h-full bg-white">
      <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<h1>Not found ana</h1>} />
        </Route>
          <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
