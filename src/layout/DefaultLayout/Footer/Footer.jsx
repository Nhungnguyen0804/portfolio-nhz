// import "./Header.css";

function Footer() {
  return (
    <footer className="footer-wrapper">
      {/* copyright */}
      <div
        style={{
          borderTop: "2px solid white",
          width: "100%",
          height: "20%",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>&copy; 2025 Portfolio - Nhung Nguyen. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;
