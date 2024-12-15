import styles from "./Holiday.module.css";

const Cards = () => {
  let set = [
    {
      image:
        "https://assets.wfcdn.com/im/16960917/scale-h358-w340%5Ecompr-r85/3085/308537609/default_name.jpg",
      type: "bed pillows under $50",
      description: "Your best rest start here",
    },
    {
      image:
        "https://assets.wfcdn.com/im/39662743/scale-h358-w340%5Ecompr-r85/3085/308537607/default_name.jpg",
      type: "shower curtain from $15",
      description: "Hang up your fave",
    },
    {
      image:
        "https://assets.wfcdn.com/im/62364569/scale-h358-w340%5Ecompr-r85/3085/308537605/default_name.jpg",
      type: "towel set from $15",
      description: "picks your linen closet will love",
    },
    {
      image:
        "https://assets.wfcdn.com/im/98549988/scale-h358-w340%5Ecompr-r85/3085/308537602/default_name.jpg",
      type: "towel set from $15",
      description: "picks your linen closet will love",
    },
    {
      image:
        "https://assets.wfcdn.com/im/62208127/scale-h358-w340%5Ecompr-r85/3085/308537610/default_name.jpg",
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

export default Cards;
