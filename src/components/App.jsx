import { useDispatch, useSelector } from 'react-redux';

import { getError, getIsLoading } from 'redux/selectors/selectors';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations/operations';

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        {isLoading && <p>LOnding...</p>}
        {error && <p>{error}</p>}
      </div>
    </>
  );
};

export default App;
