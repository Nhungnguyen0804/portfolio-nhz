import "./Navbar.css";

function NavbarItem({ content, goToId }) {
  return (
    <a href={goToId} className="navbarItem">
      <span>{content}</span>
    </a>
  );
}
export default NavbarItem;
