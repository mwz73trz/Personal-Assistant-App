import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import contactAPI from "../../api/contactAPI";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function UpdateCategoryPage(props) {
  const [category, setCategory] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadCategory();
  }, [params.id]);

  const loadCategory = async () => {
    const data = await contactAPI.getCategoryByID(params.id);
    setCategory(data);
  };

  const formSubmitHandler = async (evt) => {
    evt.preventDefault();

    const updatedData = {
      name: evt.target.elements["name"].value,
      contacts: category.contacts,
    };

    const data = await contactAPI.updateCategory(params.id, updatedData);
    setCategory(data);
    navigate(-1);
  };

  const renderCategory = () => {
    if (!category) {
      return null;
    }

    return (
      <Form
        onSubmit={formSubmitHandler}
        style={{ width: "35%", marginLeft: "35%" }}
      >
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Category Name</Form.Label>
          <Form.Control type="text" defaultValue={category.name} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  };
  return (
    <div>
      <h1>Update Category Page</h1>
      {renderCategory()}
    </div>
  );
}

export default UpdateCategoryPage;
