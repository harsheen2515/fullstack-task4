import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
function Footer() {
  return (
    <footer className="footer">

      <div>
        <h3>Explore</h3>
        <a href="#">Home</a>
        <a href="#">Questions</a>
        <a href="#">Articles</a>
        <a href="#">Tutorials</a>
      </div>

      <div>
        <h3>Support</h3>
        <a href="#">FAQs</a>
        <a href="#">Help</a>
        <a href="#">Contact Us</a>
      </div>

      
 <div>
  <h3>Stay Connected</h3>

  <a href="#">
    <FaFacebook /> Facebook
  </a>

  <a href="#">
    <FaTwitter /> Twitter
  </a>

  <a href="#">
    <FaInstagram /> Instagram
  </a>
</div>

      <div className="footer-bottom">
        <p>DEV@Deakin 2022</p>
        <p>Privacy Policy | Terms | Code of Conduct</p>
      </div>

    </footer>
  )
}

export default Footer