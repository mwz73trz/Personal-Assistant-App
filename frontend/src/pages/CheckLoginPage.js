import { Link } from "react-router-dom";

function CheckLoginPage(props) {
  if (props.username === "") {
    return (
      <div style={{ marginTop: "10%" }}>
        <p>
          You are not logged in, either <Link to="/login">Login</Link> or{" "}
          <Link to="/signup">Signup</Link> to enter Personal Assistant App.
        </p>
      </div>
    );
  }

  return <div>{props.actualPage()}</div>;
}

export default CheckLoginPage;
