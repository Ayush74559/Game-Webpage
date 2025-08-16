import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import Tournaments from './pages/Tournaments'
import Leaderboard from './pages/Leaderboard'
import Community from './pages/Community'
import ProtectedRoute from './components/ProtectedRoute'
import ProfileOverview from './pages/profile/ProfileOverview'
import ProfileEdit from './pages/profile/ProfileEdit'
import ProfileSecurity from './pages/profile/ProfileSecurity'

function App() {
  return (
  <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/tournaments" element={<Tournaments />} />
  <Route path="/leaderboard" element={<Leaderboard />} />
  <Route path="/community" element={<Community />} />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Profile routes */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfileOverview />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/edit"
          element={
            <ProtectedRoute>
              <ProfileEdit />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/security"
          element={
            <ProtectedRoute>
              <ProfileSecurity />
            </ProtectedRoute>
          }
        />

        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App;
