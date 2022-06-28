import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import contactAPI from "../../api/contactAPI";
import Categories from "../../components/contacts/Categories";

function CategoriesPage(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const data = await contactAPI.getCategories();
    setCategories(data ? data : []);
  };

  const renderCategories = () => {
    return categories.map((category, index) => {
      return <Categories key={index} category={category} />;
    });
  };
  return (
    <div>
      <h1>Contact Categories Page</h1>
      {renderCategories()}
      <br />
      <Link to="/categories/add">Create New Contact Category</Link>
    </div>
  );
}

export default CategoriesPage;
