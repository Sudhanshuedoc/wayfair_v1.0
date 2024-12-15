import styles from "./Impact.module.css";

const Impact = () => {
  let set = [
    {
      image:
        "https://assets.wfcdn.com/im/64020343/scale-h332-w571%5Ecompr-r85/2352/235224551/default_name.jpg",
      type: "contributing to all the home we share",
      description:
        "Learn more about our DEI , social impact and substainaiblity Work→",
    },
    {
      image:
        "https://assets.wfcdn.com/im/86722169/scale-h332-w571%5Ecompr-r85/2352/235224553/default_name.jpg",
      type: "building supplier diversity",
      description: "Learn more about the maker behind the business→",
    },
    {
      image:
        "https://assets.wfcdn.com/im/09423995/scale-h332-w571%5Ecompr-r85/2352/235224555/default_name.jpg",
      type: "all thing home sustainably",
      description: "Discover so many (easy) ways to live more sustainably→",
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
                fontFamily: "sans-serif",
                fontWeight: "bold",
                fontSize: "1.3em",
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

export default Impact;
