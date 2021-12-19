import Loader from 'react-loader-spinner';
import s from './Loading.module.css';

const Loading = () => (
  <div className={s.loading}>
    <Loader type="Oval" color="rgb(160, 155, 155)" height={100} width={100} />
  </div>
);

export default Loading;
