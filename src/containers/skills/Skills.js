import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <SkillSection theme={theme} />
    </div>
  );
}
