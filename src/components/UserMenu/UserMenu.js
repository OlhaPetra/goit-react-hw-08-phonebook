import { useSelector, useDispatch } from 'react-redux';

import Avatar from '@mui/material/Avatar';
import { pink } from '@mui/material/colors';

import { getUserName } from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operation';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  return (
    <div>
      <span>
        Добро пожаловать, {userName}
        <Avatar sx={{ bgcolor: pink[200] }} src="/broken-image.jpg" />
      </span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </div>
  );
}
