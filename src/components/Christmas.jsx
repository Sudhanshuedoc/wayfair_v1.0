import styles from "./Christmas.module.css";

const Christmas = () => {
  let set = [
    {
      image:
        "https://assets.wfcdn.com/im/13348257/scale-h697-w571%5Ecompr-r85/2987/298770413/default_name.jpg",
      type: "Kitchen & tabletop",
    },
    {
      image:
        "https://assets.wfcdn.com/im/35254470/scale-h697-w571%5Ecompr-r85/2987/298770320/default_name.jpg",
      type: "bedding & towels",
    },
    {
      image:
        "https://assets.wfcdn.com/im/00252538/scale-h697-w571%5Ecompr-r85/3152/315225022/default_name.jpg",
      type: "dining furniture",
    },
  ];
  return (
    <>
      <div id={styles.parent}>
        {set.map((ele) => (
          <div key={ele.image} id={styles.child}>
            <img src={ele.image} alt="" /> <br />
            <p>{ele.type}</p> <br />
            {/* <p>{ele.description}</p> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Christmas;
