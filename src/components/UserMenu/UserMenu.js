import { useSelector, useDispatch } from 'react-redux';

import Avatar from '@mui/material/Avatar';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';

import { getUserName } from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operation';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  return (
    <div className={s.container}>
      <p className={s.text}>Добро пожаловать, {userName}! </p>
      <Avatar
        sx={{ bgcolor: blue[700] }}
        src="/broken-image.jpg"
        className={s.avatar}
      />
      <Button
        variant="contained"
        startIcon={<ExitToAppIcon />}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Exit
      </Button>
    </div>
  );
}
