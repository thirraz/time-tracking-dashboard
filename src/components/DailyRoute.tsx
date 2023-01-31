import { FC, useEffect, useState } from "react";
import { DataJSON } from "../interfaces/dataJSON";

import { TimeCardComponent } from "./TimeCardComponent";

//icons
import exerciseIcon from "../assets/images/icon-exercise.svg";
import playIcon from "../assets/images/icon-play.svg";
import selfCareIcon from "../assets/images/icon-self-care.svg";
import socialIcon from "../assets/images/icon-social.svg";
import studyIcon from "../assets/images/icon-study.svg";
import workIcon from "../assets/images/icon-work.svg";
import { InfosContainer } from "./InfosContainer";

export const Daily: FC = () => {
  const [data, setData] = useState<DataJSON[]>([]);

  useEffect(() => {
    fetch("http://localhost:5173/src/utils/data.json")
      .then((r) => r.json())
      .then((dataResponse) => setData(dataResponse))
      .catch((e) => console.warn(e));
  }, []);

  const TimeCardComponentObjectArray = [
    {
      imageIcon: `${workIcon}`,
      title: data[0]?.title,
      bgColor: "workCardBg",
      currentHours: data[0]?.timeframes.daily.current,
      previousHours: data[0]?.timeframes.daily.previous,
    },
    {
      imageIcon: `${playIcon}`,
      title: data[1]?.title,
      bgColor: "playCardBg",
      currentHours: data[1]?.timeframes.daily.current,
      previousHours: data[1]?.timeframes.daily.previous,
    },
    {
      imageIcon: `${studyIcon}`,
      title: data[2]?.title,
      bgColor: "studyCardBg",
      currentHours: data[2]?.timeframes.daily.current,
      previousHours: data[2]?.timeframes.daily.previous,
    },
    {
      imageIcon: `${exerciseIcon}`,
      title: data[3]?.title,
      bgColor: "exerciseCardBg",
      currentHours: data[3]?.timeframes.daily.current,
      previousHours: data[3]?.timeframes.daily.previous,
    },
    {
      imageIcon: `${socialIcon}`,
      title: data[4]?.title,
      bgColor: "socialCardBg",
      currentHours: data[4]?.timeframes.daily.current,
      previousHours: data[4]?.timeframes.daily.previous,
    },
    {
      imageIcon: `${selfCareIcon}`,
      title: data[5]?.title,
      bgColor: "selfCareCardBg",
      currentHours: data[5]?.timeframes.daily.current,
      previousHours: data[5]?.timeframes.daily.previous,
    },
  ];

  return (
    <div className="w-full h-auto">
      <InfosContainer>
        {TimeCardComponentObjectArray.map((item, i) => {
          return (
            <TimeCardComponent
              key={i}
              imageIcon={item.imageIcon}
              title={item.title}
              bgColor={item.bgColor}
              currentHours={item.currentHours}
              previousHours={item.previousHours}
            />
          );
        })}
      </InfosContainer>

      {/* <TimeCardComponent
        imageIcon={workIcon}
        title={data[0]?.title}
        bgColor="workCardBg"
        currentHours={data[0]?.timeframes.daily.current}
        previousHours={data[0]?.timeframes.daily.previous}
      />
      <TimeCardComponent
        imageIcon={workIcon}
        title={data[1]?.title}
        bgColor="playCardBg"
        currentHours={data[0]?.timeframes.daily.current}
        previousHours={data[0]?.timeframes.daily.previous}
      />
      <TimeCardComponent
        imageIcon={workIcon}
        title={data[2]?.title}
        bgColor="studyCardBg"
        currentHours={data[0]?.timeframes.daily.current}
        previousHours={data[0]?.timeframes.daily.previous}
      />
      <TimeCardComponent
        imageIcon={workIcon}
        title={data[3]?.title}
        bgColor="exerciseCardBg"
        currentHours={data[0]?.timeframes.daily.current}
        previousHours={data[0]?.timeframes.daily.previous}
      />
      <TimeCardComponent
        imageIcon={workIcon}
        title={data[4]?.title}
        bgColor="socialCardBg"
        currentHours={data[0]?.timeframes.daily.current}
        previousHours={data[0]?.timeframes.daily.previous}
      />
      <TimeCardComponent
        imageIcon={workIcon}
        title={data[5]?.title}
        bgColor="selfCareCardBg"
        currentHours={data[0]?.timeframes.daily.current}
        previousHours={data[0]?.timeframes.daily.previous}
      /> */}
    </div>
  );
};
