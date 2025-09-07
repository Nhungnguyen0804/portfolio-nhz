import "./NavbarMenu.css";

function NavbarItem({ content, goToId, className, onClick }) {
  return (
    <a href={goToId} className={`navbarItem ${className}`} onClick={onClick}>
      <span>{content}</span>
    </a>
  );
}
export default NavbarItem;
