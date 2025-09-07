import React, { useState, useEffect } from "react";
import "./NavbarMenu.css";
import NavbarItem from "./NavbarItem";
function Navbar() {
  const [activeNavbarItem, setActiveNavbarItem] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // xu ly cuộn
  useEffect(() => {
    const onHandleScroll = () => {
      // so pixel đã cuộn theo chieu dọc > 50 , cuộn quá 50px setSrolled else gần đầu trang < 50px thì thôi
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // cpn mount (hiển thị first) ,gắn sk scroll vào window
    window.addEventListener("scroll", onHandleScroll);

    // clean func chạy khi cpn unmount ||trc khi use effect chạy lại
    // gỡ sk scoll trc đó, tránh trùng
    return () => window.removeEventListener("scroll", onHandleScroll);
  }, []);

  function onUpdateActiveNavbarItem(value) {
    return setActiveNavbarItem(value);
  }
  return (
    <div className="navbar">
      <nav className="navbar-nav">
        <NavbarItem
          content="Home"
          goToId="#home"
          className={activeNavbarItem === "home" ? "active" : ""}
          onClick={() => onUpdateActiveNavbarItem("home")}
        />
        <NavbarItem
          content="Skills"
          goToId="#skill"
          className={activeNavbarItem === "skill" ? "active" : ""}
          onClick={() => onUpdateActiveNavbarItem("skill")}
        />
        <NavbarItem
          content="Projects"
          goToId="#project"
          className={activeNavbarItem === "project" ? "active" : ""}
          onClick={() => onUpdateActiveNavbarItem("project")}
        />
      </nav>
    </div>
  );
}
export default Navbar;
