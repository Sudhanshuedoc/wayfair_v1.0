import styles from "./promotion.module.css";
const Promotion = () => {
  return (
    <div id={styles.promotion}>
      <div>
        <h1>Quick-ship Christmas gifts and guest prep starting at $20 →</h1>
      </div>
      <div id={styles.rewards}>
        <span className="item">
          <a href="#">Rewards</a>
        </span>{" "}
        |{" "}
        <span className="item">
          <a href="">Financing</a>
        </span>{" "}
        |{" "}
        <span className="item">
          <a href="">Professional</a>
        </span>
        |{" "}
        <span className="item">
          <a href="">Free & easy delivery Over $35</a>
        </span>
      </div>
    </div>
  );
};

export default Promotion;
