import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import contactAPI from "../../api/contactAPI";

function ContactsPage(props) {
  const [category, setCategory] = useState(null);
  const [contacts, setContacts] = useState([]);
  const params = useParams();

  useEffect(() => {
    loadCategory();
  }, [params.id]);

  const loadCategory = async () => {
    let data = await contactAPI.getCategoryByID(params.id);
    setCategory(data);
  };

  useEffect(() => {
    loadContacts();
  }, [category]);

  const loadContacts = async () => {
    if (!category) setContacts([]);

    let newContacts = [];
    for (const contactId of category.contacts) {
      newContacts.push(await contactAPI.getContactById(contactId));
    }

    setContacts(newContacts);
  };

  const renderContacts = () => {
    return contacts.map((contact, index) => {
      return (
        <p key={index}>
          <Link
            to={{
              pathname: `${contact.id}`,
              state: { contact: contact },
            }}
          >
            {contact.last_name}, {contact.first_name}
          </Link>
        </p>
      );
    });
  };

  return (
    <div>
      <h1>Contacts Page</h1>
      {renderContacts()}
      <br />
      <Link to="add">Create New Contact</Link>
    </div>
  );
}

export default ContactsPage;
