import { useParams, useNavigate } from "react-router-dom";
import contactAPI from "../../api/contactAPI";
import Button from "react-bootstrap/Button";

function DeleteContactPage(props) {
  const params = useParams();
  const navigate = useNavigate();

  const deleteContact = async () => {
    const data = await contactAPI.deleteContact(params.id);
    if (data) {
      navigate(-2);
    }
  };

  return (
    <div>
      <h1>Delete Contact Page</h1>
      <p>Are you sure you want to delete this contact?</p>
      <br />
      <Button variant="danger" onClick={deleteContact}>
        Yes
      </Button>
      <Button>No</Button>
    </div>
  );
}

export default DeleteContactPage;
