import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-intro">
        Made with <i className="fas fa-heart"></i> by
        <a
          className="td-ul"
          href="https://rushikeshchougule.netlify.app/"
          target="_blank"
        >
          Rushikesh
        </a>
      </div>
      <div className="footer-icon">
        <a href="https://github.com/rushikesh3299" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://twitter.com/rushikesh3299" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/rushikesh-chougule-621854192/"
          target="_blank"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <div className="footer-copyright">@2021 AyuMall</div>
    </div>
  );
};
