import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

function Dashboard({ user }) {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Dashboard</h2>
        <p className="info">Welcome back! You are successfully logged in.</p>
        <div className="user-info">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>User ID:</strong> {user.uid}</p>
        </div>
        <button onClick={handleLogout}>Sign Out</button>
      </div>
    </div>
  );
}

export default Dashboard;
