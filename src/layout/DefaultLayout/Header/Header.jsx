import "./Header.css";
import Navbar from "../../../components/Navbar/Navbar";
import { GithubIcon, EmailIcon } from "../../../components/Icon/Icon";

import Button from "../../../components/Button/Button";
function Header() {
  const sizeIcon = "30px";
  return (
    <div className="header-wrapper">
      <div className="header-inner">
        <div className="logo">Nhung Nhz</div>

        <div className="header-navbar">
          <Navbar />
        </div>
        <div
          className="header-link"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Button
            external="https://github.com/Nhungnguyen0804"
            iconLeft={<GithubIcon width={sizeIcon} height={sizeIcon} />}
            type="cycle"
            target="_blank"
          />
          <Button
            external="mailto:nhungnguyen8404@gmail.com"
            iconLeft={<EmailIcon width={sizeIcon} height={sizeIcon} />}
            type="cycle"
            target="_blank"
          />
        </div>
        <div className="header-button">
          <Button content="Connect With Me!" />
        </div>
      </div>
    </div>
  );
}
export default Header;
