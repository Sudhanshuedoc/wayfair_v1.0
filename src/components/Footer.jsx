import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div id={styles.parent}>
        <div>
          <h2>About us</h2>
          <p>About Wayfair</p>
          <p>Wayfair rewards</p>
          <p>wayfair professional</p>
          <p>Design services</p>
          <p>Gift Cards</p>
          <p>Wayfair Credit Cards</p>
          <p>Wayfair financing</p>
          <p>Product collection</p>
          <p>careers</p>
          <p>Sells on Wayfair</p>
          <p>Creator</p>
          <p>Investor relation</p>
          <p>Advertise with us</p>
          <p>Location</p>
        </div>
        <div>
          <h2>Customer Service</h2>
          <p>My Orders</p>
          <p>My Accounts</p>
          <p>Track My Order</p>
          <p>Wayfair Accessibility Statement</p>
          <p>Return Policy</p>
          <p>Help Center</p>
          <p>Ideas & Advice</p>
          <p>Product Recalls</p>
        </div>
        <div>
          <h2>Contact Us</h2>
          <button>Quick Help</button> <br />
          <button>Call Us</button> <br />
          <p>Customer Service</p>
          <p>Closed. Opens at 8:00 AM ET.</p>
          <a href="">Weekly Hours</a>
          <p>Shopping Assistance</p>
          <p>Closed. Opens at 8:00 AM ET.</p>
          <a href="">Weekly Hours</a>
        </div>
      </div>
      <hr />
      <section id="footer">
        {" "}
        <div>
          {" "}
          <img
            src="https://assets.wfcdn.com/im/56298724/resize-h600-w600%5Ecompr-r85/1920/192068014/Joss+%26+Main.jpg"
            alt=""
          />
          <img
            src="https://assets.wfcdn.com/im/39665588/compr-r85/1857/185786407/allmodern.jpg"
            alt=""
          />
          <img
            src="https://mma.prnewswire.com/media/2520094/Birch_Lane_Logo.jpg?p=facebook"
            alt=""
          />
        </div>
        <div id="social">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-pinterest"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-tiktok"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
        <div id={styles.link}>
          <a href="">Terms of use</a>
          <a href="">Privacy Policy</a>
          <a href="">Your Privacy Right & Choices</a>
        </div>
        <p>
          © 2024 by Wayfair LLC, 4 Copley Place, 7th Floor, Boston, MA 02116
        </p>
      </section>
    </>
  );
};

export default Footer;
