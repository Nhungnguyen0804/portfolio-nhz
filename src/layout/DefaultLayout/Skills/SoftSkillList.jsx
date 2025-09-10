import "./Skills.css";
import Skill from "./Skill";
import images from "../../../assets/images/images";
import { ImageIcon } from "../../../components/Icon/Icon";
function SoftSkillList() {
  let size = "250px";
  let size_icon = "60%";
  return (
    <div className="softSkillList skillList">
      <Skill
        icon={
          <ImageIcon
            src={images.teamwork}
            width={size_icon}
            height={size_icon}
          />
        }
        text="Teamwork"
        width={size}
        height={size}
      />
      <Skill
        icon={
          <ImageIcon
            src={images.creative}
            width={size_icon}
            height={size_icon}
          />
        }
        text="Creativity"
        width={size}
        height={size}
      />
      <Skill
        icon={
          <ImageIcon
            src={images.selflearn}
            width={size_icon}
            height={size_icon}
          />
        }
        text="Self-Learning"
        width={size}
        height={size}
      />
      <Skill
        icon={
          <ImageIcon
            src={images.problemsolve}
            width={size_icon}
            height={size_icon}
          />
        }
        text="Problem Solving"
        width={size}
        height={size}
      />

      <Skill
        icon={
          <ImageIcon
            src={images.responsible}
            width={size_icon}
            height={size_icon}
          />
        }
        text="Responsibility"
        width={size}
        height={size}
      />
      <Skill
        icon={
          <ImageIcon src={images.adapt} width={size_icon} height={size_icon} />
        }
        text="Adaptability"
        width={size}
        height={size}
      />
      <Skill
        icon={
          <ImageIcon
            src={images.persist}
            width={size_icon}
            height={size_icon}
          />
        }
        text="Persistence"
        width={size}
        height={size}
      />
      <Skill
        icon={
          <ImageIcon src={images.detail} width={size_icon} height={size_icon} />
        }
        text="Attention to Detail"
        width={size}
        height={size}
      />
    </div>
  );
}
export default SoftSkillList;
