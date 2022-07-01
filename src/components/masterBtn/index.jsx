import "./index.css";

export const MasterBtn = ({ bgColor, text }) => {
  return (
    <button
      data="red"
      className={`border-2 border-${bgColor} rounded-full flex flex-nowrap items-center text-${bgColor} justify-center gap-4 hvr-bounce-to-right  overflow-hidden py-3 text-xl my-1  px-8  hvr-bounce-to-right-${bgColor}`}
    >
      <p className="font-regular ">{text}</p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27.11"
        height="18.081"
        viewBox="0 0 27.11 18.081"
        className="fill-current"
      >
        <path
          id="Icon_ionic-ios-arrow-round-forward"
          data-name="Icon ionic-ios-arrow-round-forward"
          d="M25.164,11.6a1.23,1.23,0,0,0-.009,1.733l5.725,5.735H9.09a1.224,1.224,0,0,0,0,2.448H30.87l-5.725,5.735a1.239,1.239,0,0,0,.009,1.733,1.219,1.219,0,0,0,1.723-.009l7.759-7.816h0a1.375,1.375,0,0,0,.254-.386,1.168,1.168,0,0,0,.094-.471,1.227,1.227,0,0,0-.348-.857l-7.759-7.816A1.2,1.2,0,0,0,25.164,11.6Z"
          transform="translate(-7.875 -11.252)"
        />
      </svg>
    </button>
  );
};
