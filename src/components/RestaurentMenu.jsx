import { useEffect, useState } from "react";
import { MENU_url } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {
  
  const [resinfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_url + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resinfo === null) return <h2>Please wait...</h2>;

  const { name, cuisines, costForTwoMessage, avgRatingString } =
    resinfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;



  return (
    <div>
      <h1>{name}</h1>
      <h5> rating: {avgRatingString} </h5>
      <p> {cuisines.join(", ")} </p>
      <h5> {costForTwoMessage} </h5>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} ---
            <b> Rs- {item.card.info.price / 100} </b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
