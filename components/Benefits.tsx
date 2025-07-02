import React from "react";
import IconWithText from "./IconWithText";
import Logo from "./Logo";

import style from "./Benefits.module.css";
import TemplateImage from "./TemplateImage";

export default function Benefits() {
  return (
    <div>
      <div className={style.Benefits}>
        <div className={style.headers}>
          <h3>The Results You Can Expect</h3>
          <h6>So you can stop worrying about ___</h6>
        </div>
        <div className={style.IconsDiv}>
          <IconWithText
            Icon=<TemplateImage />
            subText={"Benefit 1"}
            Text={"Here is more detail"}
          />
          <IconWithText
            Icon=<TemplateImage />
            subText={"Benefit 2"}
            Text={"Here is more more detail"}
          />
          <IconWithText
            Icon=<TemplateImage />
            subText={`Benefit 3)`}
            Text={"Here is more more more detail"}
          />
        </div>
      </div>
    </div>
  );
}