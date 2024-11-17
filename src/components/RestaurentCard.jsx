import { CDN_Img } from "../../src/utils/constants";

const RestaurentCard = ({
  cloudinaryImageId,
  resNames,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwo,
  locality,
}) => {
  return (
    <div className="res-card">
      <img src={CDN_Img + cloudinaryImageId}></img>

      <div className="res-card-content">
        <h2>{resNames}</h2>
        <h4>Cuisines: {cuisines}</h4>
        <h5>Rating: {avgRating} Star </h5>
        <h5>{costForTwo} </h5>
        <h5>DeliveryTime :{deliveryTime} </h5>
        <h5>Locality: {locality} </h5>
      </div>
    </div>
  );
};

export default RestaurentCard;
