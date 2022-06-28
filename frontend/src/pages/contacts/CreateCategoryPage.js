import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import contactAPI from "../../api/contactAPI";
import { useNavigate } from "react-router-dom";

function CreateCategoryPage(props) {
  const navigate = useNavigate();

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();

    const categoryData = {
      name: evt.target.elements["name"].value,
      contacts: [],
    };

    const data = await contactAPI.createCategory(categoryData);
    if (data) {
      navigate(`/categories`);
    }
  };

  return (
    <Form
      onSubmit={handleFormSubmit}
      style={{ width: "30%", marginLeft: "35%" }}
    >
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Category Name</Form.Label>
        <Form.Control type="text" placeholder="Category Name" />
        <Form.Text className="text-muted">Enter Category Name</Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CreateCategoryPage;
