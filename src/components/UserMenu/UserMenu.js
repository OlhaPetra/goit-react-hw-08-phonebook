import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operation';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  return (
    <div>
      <span>Добро пожаловать, {userName}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </div>
  );
}
