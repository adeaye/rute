import { Outlet, NavLink } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <nav className="w-1/4 bg-gray-800 text-white h-screen p-4">
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              end
              className={({isActive}) => isActive ? 'text-yellow-400' : 'block py-2'}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/profile"
              className={({isActive}) => isActive ? 'text-yellow-400' : 'block py-2'}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/settings"
              className={({isActive}) => isActive ? 'text-yellow-400' : 'block py-2'}
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Content */}
      <div className="w-3/4 p-6">
        <Outlet /> {/* Nested Routes Rendered Here */}
      </div>
    </div>
  );
};

export default DashboardLayout;
