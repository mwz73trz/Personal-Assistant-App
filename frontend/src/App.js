import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/contacts/CategoriesPage";
import CreateCategoryPage from "./pages/contacts/CreateCategoryPage";
import UpdateCategoryPage from "./pages/contacts/UpdateCategoryPage";
import DeleteCategoryPage from "./pages/contacts/DeleteCategoryPage";
import ContactsPage from "./pages/contacts/ContactsPage";
import CreateContactPage from "./pages/contacts/CreateContactPage";
import ContactPage from "./pages/contacts/ContactPage";
import UpdateContactPage from "./pages/contacts/UpdateContactPage";
import DeleteContactPage from "./pages/contacts/DeleteContactPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CheckLoginPage from "./pages/CheckLoginPage";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <Router>
        <NavBar username={username} setUsername={setUsername} />
        <Routes>
          <Route
            path="/login"
            element={<LoginPage setUsername={setUsername} />}
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <HomePage username={username} />}
              />
            }
          />
          <Route
            path="/categories"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <CategoriesPage username={username} />}
              />
            }
          />
          <Route
            path="/categories/add"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <CreateCategoryPage username={username} />}
              />
            }
          />
          <Route
            path="/categories/:id/update"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <UpdateCategoryPage username={username} />}
              />
            }
          />
          <Route
            path="/categories/:id/delete"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <DeleteCategoryPage username={username} />}
              />
            }
          />
          <Route path="/categories/:id/contacts" element={<ContactsPage />} />
          <Route
            path="/categories/:id/contacts/add"
            element={<CreateContactPage />}
          />
          <Route
            path="/categories/:id/contacts/:id"
            element={<ContactPage />}
          />
          <Route path="/contacts/:id/update" element={<UpdateContactPage />} />
          <Route path="/contacts/:id/delete" element={<DeleteContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
