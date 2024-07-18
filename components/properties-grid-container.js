import PropertyCard from "./property-card";
import PropTypes from "prop-types";

const PropertiesGridContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-center ${className}`}
    >
      <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[8px]">
        <PropertyCard
          imageDimensions="/property-image4@2x.png"
          imageDimensionsText="/ellipse-1@2x.png"
          moreDetailsFlex="unset"
          moreDetailsMinWidth="unset"
          moreDetailsWidth="350px"
        />
        <PropertyCard
          imageDimensions="/property-image5@2x.png"
          imageDimensionsText="/ellipse-1@2x.png"
          moreDetailsFlex="unset"
          moreDetailsMinWidth="unset"
          moreDetailsWidth="350px"
        />
        <PropertyCard
          imageDimensions="/property-image6@2x.png"
          imageDimensionsText="/ellipse-1@2x.png"
          moreDetailsFlex="unset"
          moreDetailsMinWidth="unset"
          moreDetailsWidth="350px"
        />
        <PropertyCard
          imageDimensions="/property-image7@2x.png"
          imageDimensionsText="/ellipse-1@2x.png"
          moreDetailsFlex="unset"
          moreDetailsMinWidth="unset"
          moreDetailsWidth="350px"
        />
        <PropertyCard
          imageDimensions="/property-image4@2x.png"
          imageDimensionsText="/ellipse-1@2x.png"
          moreDetailsFlex="unset"
          moreDetailsMinWidth="unset"
          moreDetailsWidth="350px"
        />
        <PropertyCard
          imageDimensions="/property-image8@2x.png"
          imageDimensionsText="/ellipse-11@2x.png"
          moreDetailsFlex="unset"
          moreDetailsMinWidth="unset"
          moreDetailsWidth="350px"
        />
        <PropertyCard
          imageDimensions="/property-image9@2x.png"
          imageDimensionsText="/ellipse-11@2x.png"
          moreDetailsFlex="unset"
          moreDetailsMinWidth="unset"
          moreDetailsWidth="350px"
        />
        <PropertyCard
          imageDimensions="/property-image10@2x.png"
          imageDimensionsText="/ellipse-11@2x.png"
          moreDetailsFlex="unset"
          moreDetailsMinWidth="unset"
          moreDetailsWidth="350px"
        />
      </div>
    </div>
  );
};

PropertiesGridContainer.propTypes = {
  className: PropTypes.string,
};

export default PropertiesGridContainer;
