import InfoCard from "./info-card";
import PropTypes from "prop-types";

const FeatureContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-primary-50 flex flex-col items-center justify-start py-[70px] px-0 text-center text-21xl text-primary-800 font-body-large-400 ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start pt-[75px] px-0 pb-0 box-border gap-[54px] max-w-[95%]">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] box-border gap-[24px] max-w-[95%]">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Properties by Area
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px] text-5xl text-gray-700">
          <InfoCard icon="/icon@2x.png" sellYourHome="Sell your home" />
          <InfoCard
            icon="/icon1@2x.png"
            sellYourHome="Rent your home"
            propWidth="312px"
          />
          <InfoCard
            icon="/icon2@2x.png"
            sellYourHome="Buy a home"
            propWidth="unset"
          />
          <InfoCard
            icon="/icon3@2x.png"
            sellYourHome="Free marketing"
            propWidth="312px"
          />
        </div>
      </div>
    </div>
  );
};

FeatureContainer.propTypes = {
  className: PropTypes.string,
};

export default FeatureContainer;
