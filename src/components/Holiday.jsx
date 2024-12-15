import styles from "./Holiday.module.css";

const Holiday = () => {
  let set = [
    {
      image:
        "https://assets.wfcdn.com/im/81425755/scale-h523-w429%5Ecompr-r85/3071/307185737/default_name.jpg",
      type: "sink accessories from $15",
      description: "Spa day everyday",
    },
    {
      image:
        "https://assets.wfcdn.com/im/39630921/scale-h523-w429%5Ecompr-r85/3071/307184619/default_name.jpg",
      type: "bed pillows under $50",
      description: "Your best rest start here",
    },
    {
      image:
        "https://assets.wfcdn.com/im/29523093/scale-h523-w429%5Ecompr-r85/3071/307185050/default_name.jpg",
      type: "shower curtain from $15",
      description: "Hang up your fave",
    },
    {
      image:
        "https://assets.wfcdn.com/im/03525558/scale-h523-w429%5Ecompr-r85/3026/302632404/default_name.jpg",
      type: "towel set from $15",
      description: "picks your linen closet will love",
    },
  ];
  return (
    <>
      <div id={styles.parent}>
        {set.map((ele) => (
          <div key={ele.image} id={styles.child}>
            <img src={ele.image} alt="" /> <br />
          </div>
        ))}
      </div>
    </>
  );
};

export default Holiday;
