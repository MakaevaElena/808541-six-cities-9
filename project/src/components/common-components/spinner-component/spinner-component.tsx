import styles from './spinner.module.css';

function Spinner(): JSX.Element {
  return <div className={styles['loader']}>Loading...</div>;
}

export default Spinner;
