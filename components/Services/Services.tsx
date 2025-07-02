import React from "react";
import IconWithText from "./IconWithText";
import Image from "next/image";

import style from "./Services.module.css";

interface IconWIthTextProps {
  IconPath: string;
  Alt: string;
  subText: string;
  Text: string;
}

export default function Services() {

  const DefaultWidth = 100;
  const DefaultHeight = 100;

  const ServiceItems: IconWIthTextProps[] = [
    {
      IconPath: "images/SEO-icon.svg",
      Alt: "Magnifying Glass icon",
      subText: "Search Engine Optimisation",
      Text: "Boosts search ranking and visibility, making it easier for new customers to find your business, keeping it ahead of the competition.",
    },
    {
      IconPath: "images/Accessibility-icon.svg",
      Alt: "Accessibility icon",
      subText: "Improving Accessibility",
      Text: "Makes your website user-friendly for everyone, allowing you to easily provide an inclusive experience without the hassle.",
    },
    {
      IconPath: "images/Launch-icon.svg",
      Alt: "Rocket Ship icon",
      subText: "Setup & Launch all done for you",
      Text: "From setup to launch, everything is handled for you, so you can focus on running your business — not Googling how to fix a button.",
    },
  ];

  return (
    <div className={style.services}>
      <div className={style.headers}>
        <h3>What You Get With Every Project</h3>
        <h6>From visibility to usability — essential features built into every website I deliver.</h6>
      </div>
      <div className={style.iconsDiv}>
        {ServiceItems.map((ServiceItem) => {
          return (
            <IconWithText
              Icon=<Image
                src={ServiceItem.IconPath}
                width={DefaultWidth}
                height={DefaultHeight}
                alt={ServiceItem.Alt}
              />
              subText={ServiceItem.subText}
              Text={ServiceItem.Text}
            />
          );
        })}
      </div>
    </div>
  );
}
