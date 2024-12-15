import styles from "./dealtitle.module.css";

const DealTitle = ({ title }) => {
  return (
    <>
      <div>
        <div id={styles.title}>
          <h1>{title}</h1>
        </div>
      </div>
    </>
  );
};

export default DealTitle;
