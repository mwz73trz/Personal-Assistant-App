import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import contactAPI from "../../api/contactAPI";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CreateContactPage(props) {
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

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();

    const contactData = {
      first_name: evt.target.elements["first_name"].value,
      last_name: evt.target.elements["last_name"].value,
      address: evt.target.elements["address"].value,
      city: evt.target.elements["city"].value,
      state: evt.target.elements["state"].value,
      zip: evt.target.elements["zip"].value,
      phone: evt.target.elements["phone"].value,
      email: evt.target.elements["email"].value,
      category: category.id,
    };

    const data = await contactAPI.createContact(contactData);
    if (data) {
      navigate(`/categories/${category.id}/contacts`);
    }
  };

  return (
    <Form
      onSubmit={handleFormSubmit}
      style={{ width: "30%", marginLeft: "35%" }}
    >
      <Form.Group className="mb-3" controlId="first_name">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" />
        <Form.Text className="text-muted">Enter Contact First Name</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="last_name">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
        <Form.Text className="text-muted">Enter Contact Last Name</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address" />
        <Form.Text className="text-muted">Enter Contact Address</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" />
        <Form.Text className="text-muted">Enter Contact City</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="state">
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="State" />
        <Form.Text className="text-muted">Enter Contact State</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="zip">
        <Form.Label>Zip</Form.Label>
        <Form.Control type="text" placeholder="Zip" />
        <Form.Text className="text-muted">Enter Contact Zip</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Phone" />
        <Form.Text className="text-muted">Enter Contact Phone</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Email" />
        <Form.Text className="text-muted">Enter Contact Email</Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CreateContactPage;
