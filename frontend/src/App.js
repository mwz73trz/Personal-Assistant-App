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

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/add" element={<CreateCategoryPage />} />
          <Route
            path="/categories/:id/update"
            element={<UpdateCategoryPage />}
          />
          <Route
            path="/categories/:id/delete"
            element={<DeleteCategoryPage />}
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
