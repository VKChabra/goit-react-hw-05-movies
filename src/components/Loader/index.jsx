import { ThreeDots } from 'react-loader-spinner';
import main from 'globalStyles/main.module.css';

const Loader = () => {
  return (
    <div className={main.main}>
      <ThreeDots width="100" radius="9" color="#4fa94d" />
    </div>
  );
};

export default Loader;
