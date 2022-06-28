import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import contactAPI from "../../api/contactAPI";

function ContactPage(props) {
  const [contact, setContact] = useState(null);
  const params = useParams();

  useEffect(() => {
    loadContact();
  }, [params.id]);

  const loadContact = async () => {
    const data = await contactAPI.getContactById(params.id);
    setContact(data);
  };

  const renderContact = () => {
    if (!contact) {
      return null;
    }

    return (
      <div>
        <h1>
          {contact.first_name} {contact.last_name}
        </h1>
        <p>{contact.address}</p>
        <p>
          {contact.city}, {contact.state} {contact.zip}
        </p>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
        <br /> <Link to={`/contacts/${contact.id}/delete`}>
          Delete Contact
        </Link>{" "}
        | | <Link to={`/contacts/${contact.id}/update`}>Update Contact</Link>
      </div>
    );
  };

  return <div>{renderContact()}</div>;
}

export default ContactPage;
