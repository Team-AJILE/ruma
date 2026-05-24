import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer r-container">
      <div className="footer-grid">
        <div className="footer-brand">
          <h4>Ruma</h4>
          <p>Compare, calculate, and close smarter. Built by Team AJILE.</p>
        </div>
        <div className="footer-col">
          <h6>Product</h6>
          <ul>
            <li><a href="#features">Why Ruma</a></li>
            <li><a href="#walkthrough">Preview</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h6>Company</h6>
          <ul>
            <li><a href="mailto:inbox@ajile.team">Contact</a></li>
            <li><a href="#waitlist">Waitlist</a></li>
            <li><a href="#">Roadmap</a></li>
            <li><a href="#">Changelog</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h6>Legal</h6>
          <ul>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Disclaimer</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-credit">
        <span>© {year} Team AJILE</span>
      </div>
    </footer>
  );
};

export default Footer;
