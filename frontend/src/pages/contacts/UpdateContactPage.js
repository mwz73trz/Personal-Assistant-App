import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import contactAPI from "../../api/contactAPI";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function UpdateContactPage(props) {
  const [contact, setContact] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadContact();
  }, [params.id]);

  const loadContact = async () => {
    const data = await contactAPI.getContactById(params.id);
    setContact(data);
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
      category: contact.category,
    };

    const dataUpdated = await contactAPI.updateContact(params.id, contactData);
    setContact(dataUpdated);
    navigate(-1);
  };

  const renderContact = () => {
    if (!contact) {
      return null;
    }

    return (
      <Form
        onSubmit={handleFormSubmit}
        style={{ width: "35%", marginLeft: "35%" }}
      >
        <Form.Group className="mb-3" controlId="first_name">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" defaultValue={contact.first_name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="last_name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" defaultValue={contact.last_name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" defaultValue={contact.address} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" defaultValue={contact.city} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" defaultValue={contact.state} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="zip">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" defaultValue={contact.zip} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" defaultValue={contact.phone} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" defaultValue={contact.email} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Task
        </Button>
      </Form>
    );
  };

  return (
    <div>
      <h1>Update Contact Page</h1>
      {renderContact()}
    </div>
  );
}

export default UpdateContactPage;
