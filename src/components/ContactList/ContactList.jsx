import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {deleteContact, fetchContacts} from '../../redux/phonebook/phonebook-operation';
import { getLoading, getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';
import ContactItem from '../ContactItem';
import Loading from '../Loading';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const isLoadingContacts = useSelector(getLoading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <>      
      <ul className={s.list}>
        {contacts.map(({ id, name, phone }) => (
          <li key={id} className={s.item}>
            <ContactItem name={name} phone={phone} />
            <button
              type="button"
              onClick={() => onDeleteContact(id)}
              className={s.button}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {isLoadingContacts && <Loading/>}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
