import { Link } from "react-router-dom";

function Categories(props) {
  return (
    <div>
      <h3>
        <Link to={`${props.category.id}/contacts`}>{props.category.name}</Link>
      </h3>
      <p>
        <Link to={`${props.category.id}/delete`}>Delete Category</Link> | |{" "}
        <Link to={`${props.category.id}/update`}>Edit Category</Link>
      </p>
    </div>
  );
}

export default Categories;
