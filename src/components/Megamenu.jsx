import styles from "./megamenu.module.css";
const Megamenu = () => {
  let linkList = [
    "Furniture",
    "Outdoor",
    "Bedding & Bath",
    "Rugs",
    "Decors & Pillows",
    "Lighting",
    "Organization",
    "Kitchen",
    "Baby & Kids",
    "Home Improvement",
    "Appliances",
    "Pet",
    "Holiday",
    "Gift",
    "Sale",
  ];
  return (
    <>
      <div id={styles.parent}>
        {linkList.map((ele) => {
          return (
            <a href="" key={ele}>
              {ele}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Megamenu;
