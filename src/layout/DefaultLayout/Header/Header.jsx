import "./Header.css";
import NavbarMenu from "../../../components/NavbarMenu/NavbarMenu";
import {
  GithubIcon,
  EmailIcon,
  LinkedInIcon,
} from "../../../components/Icon/Icon";

import Button from "../../../components/Button/Button";
function Header() {
  const sizeIcon = "25px";
  return (
    <div className="header-wrapper">
      <div className="header-inner">
        <div className="logo">Nhung Nhz</div>

        <div className="header-navbar">
          <NavbarMenu />
        </div>
        <div
          className="header-social-icon"
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
          <Button
            external="https://www.linkedin.com/in/nhungnguyen0804/"
            iconLeft={<LinkedInIcon width={sizeIcon} height={sizeIcon} />}
            type="cycle"
            target="_blank"
          />
        </div>
        <div className="header-button">
          <Button content="Connect With Me!" type="rectangle" />
        </div>
      </div>
    </div>
  );
}
export default Header;
