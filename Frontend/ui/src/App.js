import logo from './logo.svg';
import './App.css';
import SignIn from './pages/signin';
import Dashboard from './pages/dashboard';
import { BrowserRouter, Routes, Route } from "react-router";
import CreateUser from './pages/createuser';
import UserList from './pages/userlist';
import ShiftManagement from './pages/shiftmanagement';

function Layout() {
  return (
    <div>
      {/* Common Header */}
      <nav className="pink navbar navbar-expand-lg navbar-dark  mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Shift Manager Admin View</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/createuser">Create User</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/userlist">User List</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/shiftmanagement">Shift Management</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes >
        <Route path="createuser" element={<CreateUser />} />
        <Route path="userlist" element={<UserList />} />
        <Route path="shiftmanagement" element={<ShiftManagement />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/*" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
