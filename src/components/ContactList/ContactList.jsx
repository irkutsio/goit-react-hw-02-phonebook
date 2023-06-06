export const ContactList = ({ userContact, deleteContact }) => {
  return (
    <div>
      <h3>Contacts</h3>
      <ul>
        {userContact.map(({ id, name, number }) => (
          <li key={id}>
            <span>{name}</span>
            <span>{number}</span>
            <button
              type="button"
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
