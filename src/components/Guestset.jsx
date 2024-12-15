import styles from "./Guestset.module.css";

const Guestset = () => {
  let set = [
    {
      image:
        "https://assets.wfcdn.com/im/56168740/scale-h429-w429%5Ecompr-r85/3143/314342598/default_name.jpg",
      type: "sink accessories from $15",
      description: "Spa day everyday",
    },
    {
      image:
        "https://assets.wfcdn.com/im/82410054/scale-h429-w429%5Ecompr-r85/3143/314340561/default_name.jpg",
      type: "bed pillows under $50",
      description: "Your best rest start here",
    },
    {
      image:
        "https://assets.wfcdn.com/im/77663861/scale-h429-w429%5Ecompr-r85/3143/314342360/default_name.jpg",
      type: "shower curtain from $15",
      description: "Hang up your fave",
    },
    {
      image:
        "https://assets.wfcdn.com/im/56168740/scale-h429-w429%5Ecompr-r85/3143/314342598/default_name.jpg",
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
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.4em",
                fontFamily: "sans-serif",
              }}
            >
              {ele.type}
            </p>{" "}
            <br />
            <p>{ele.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Guestset;
