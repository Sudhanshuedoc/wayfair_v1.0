import styles from "./Image.module.css";
const Image = ({ source }) => {
  return (
    <>
      <div id={styles.header}>
        <img src={source} alt="" />
      </div>
    </>
  );
};

export default Image;
