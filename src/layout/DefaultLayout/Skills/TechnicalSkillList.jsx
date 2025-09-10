import "./Skills.css";
import Skill from "./Skill";
import images from "../../../assets/images/images";
import {
  ReactJS_Icon,
  JS_Icon,
  HTML_Icon,
  CSS_Icon,
  Python_Icon,
  CPlusPlus_Icon,
  MySQL_Icon,
  SQLite_Icon,
  Git_Icon,
  Figma_Icon,
  Flask_Icon,
} from "../../../components/Icon/Icon";
function TechnicalSkillList() {
  let size = "160px";
  let sizeCircle = "180px";
  return (
    <div className="techSkillList skillList">
      <Skill
        icon={<ReactJS_Icon width={size} height={size} />}
        size_icon={size}
        width={sizeCircle}
        height={sizeCircle}
      />

      <Skill
        icon={<JS_Icon width={size} height={size} />}
        size_icon={size}
        width={sizeCircle}
        height={sizeCircle}
      />
      <Skill
        icon={<HTML_Icon width={size} height={size} />}
        size_icon={size}
        width={sizeCircle}
        height={sizeCircle}
      />
      <Skill
        icon={<CSS_Icon width={size} height={size} />}
        size_icon={size}
        width={sizeCircle}
        height={sizeCircle}
      />

      <Skill
        icon={<Python_Icon width={size} height={size} />}
        size_icon={size}
        width={sizeCircle}
        height={sizeCircle}
      />
      <Skill
        icon={<CPlusPlus_Icon width={size} height={size} />}
        size_icon={size}
        width={sizeCircle}
        height={sizeCircle}
      />
      <Skill
        icon={<MySQL_Icon width={size} height={size} />}
        size_icon={size}
        width={sizeCircle}
        height={sizeCircle}
      />
      <Skill
        icon={<SQLite_Icon width={size} height={size} />}
        size_icon={size}
        width={sizeCircle}
        height={sizeCircle}
      />
      <Skill
        icon={<Git_Icon width={size} height={size} />}
        size_icon={size}
        width={sizeCircle}
        height={sizeCircle}
      />
      <Skill
        icon={<Figma_Icon width={size} height={size} />}
        size_icon={size}
        width={sizeCircle}
        height={sizeCircle}
      />
      <Skill
        icon={<Flask_Icon width={size} height={size} />}
        size_icon={size}
        width={sizeCircle}
        height={sizeCircle}
      />
    </div>
  );
}
export default TechnicalSkillList;
