import { useEffect } from 'react';
import { connect } from 'react-redux';
import contactsOperation from '../../redux/contacts/contacts-operations';
import './contactlist.css';

function ContactsList({ contacts, onDeleteContacts }) {
  useEffect(() => {
    contactsOperation.fetchContacts(res => console.log(res));
  }, []);

  return (
    <ul className="contacts">
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}:{number}
          <button
            type="button"
            className="TodoList__btn"
            onClick={() => onDeleteContacts(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

const getFilteredContacts = (contacts, filter) => {
  const filterCase = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterCase),
  );
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;

  const visibleContacts = getFilteredContacts(items, filter);
  return {
    contacts: visibleContacts,
  };
};
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperation.fetchContacts()),
  onDeleteContacts: id => dispatch(contactsOperation.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);