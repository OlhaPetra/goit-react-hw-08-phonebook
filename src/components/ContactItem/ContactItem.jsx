import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ name, phone }) => {
  return (
    <div className={s.contactItem}>
      <p className={s.contactName}> {`${name}:`}</p>{' '}
      <p className={s.contactNumber}> {phone}</p>
    </div>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
};
export default ContactItem;
