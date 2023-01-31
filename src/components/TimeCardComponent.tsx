import iconEllipis from "../assets/images/icon-ellipsis.svg";

interface CardItems {
  bgColor: string;
  imageIcon: string;
  title: string;
  currentHours: number;
  previousHours: number;
}

export const TimeCardComponent = ({
  bgColor,
  imageIcon,
  title,
  currentHours,
  previousHours,
}: CardItems) => {
  return (
    <div
      className={`${bgColor} text-white w-[90%] h-[11rem] relative z-20 rounded-xl overflow-hidden border-2 border-green-300 mb-6`}
    >
      <img
        src={imageIcon}
        alt="background icon"
        className="absolute top-[-5%] right-2"
      />
      <div className="cardForegroundColor w-full h-[8rem] absolute bottom-[-5%] rounded-xl ">
        <div className="w-full h-auto flex px-4 justify-between items-center mt-8">
          <p className="text-[1.2rem] font-bold">{title}</p>
          <img src={iconEllipis} alt="three points icon" className="w-8 h-2" />
        </div>
        <div className="w-full flex px-4 justify-between items-center">
          <h2 className="text-[2rem] font-light">{currentHours}hrs</h2>
          <p className="">Last week - {previousHours}hrs</p>
        </div>
      </div>
    </div>
  );
};
