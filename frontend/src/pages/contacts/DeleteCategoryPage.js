import { useParams, useNavigate } from "react-router-dom";
import contactAPI from "../../api/contactAPI";
import Button from "react-bootstrap/Button";

function DeleteCategoryPage(props) {
  const params = useParams();
  const navigate = useNavigate();

  const deleteCategory = async () => {
    const data = await contactAPI.deleteCategory(params.id);
    if (data) {
      navigate("/categories");
    }
  };

  return (
    <div>
      <h1>Delete Contact Category Page</h1>
      <br />
      <p>Are you sure you want to delete this Contact Category?</p>
      <Button variant="danger" onClick={deleteCategory}>
        Yes
      </Button>
      <Button>No</Button>
    </div>
  );
}

export default DeleteCategoryPage;
