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
      className={`${bgColor} text-white w-[90%] md:w-[13rem] h-[13rem] lg:w-[17rem] lg:h-[17rem] relative z-20 rounded-xl overflow-hidden mb-6`}
    >
      <img
        src={imageIcon}
        alt="background icon"
        className="absolute top-[-2%] right-2"
      />
      <div className="cardForegroundColor w-full h-[8rem] lg:h-[14.6rem] absolute bottom-[-5%] rounded-xl ">
        <div className="w-full h-auto flex px-4 justify-between items-center mt-8 md:mt-4">
          <p className="text-[1.2rem] font-bold">{title}</p>
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#BBC0FF"
              fill-rule="evenodd"
              className="hover:fill-white cursor-pointer w-8 h-2"
            />
          </svg>
        </div>
        <div className="w-full flex lg:flex-col lg:items-start px-4 justify-between items-center">
          <h2 className="text-[2rem] lg:text-[3rem] font-light">
            {currentHours}hrs
          </h2>
          <p className="md:ml-4 lg:ml-0 md:text-center lg:text-left">
            Last week <span className="md:hidden lg:inline mx-1">-</span>
            {previousHours}hrs
          </p>
        </div>
      </div>
    </div>
  );
};
