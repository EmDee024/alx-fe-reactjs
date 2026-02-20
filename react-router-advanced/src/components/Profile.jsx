import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "../pages/ProfileDetails";
import ProfileSettings from "../pages/ProfileSettings";
import ProtectedRoute from "../components/ProtectedRoute";

function Profile() {
  return (
    <ProtectedRoute>
      <div>
        <h2>Profile Page</h2>

        <nav>
          <Link to="details">Details</Link> |{" "}
          <Link to="settings">Settings</Link>
        </nav>

        <Routes>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>
      </div>
    </ProtectedRoute>
  );
}

export default Profile;