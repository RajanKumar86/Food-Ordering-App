import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { API_url } from "../../src/utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBody from "../utils/useBody";

const Body = () => {
  const [searchText, setSearchText] = useState(" ");

  const [ListofRestaurent, searchedRestaurent] = useBody();

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1> No internet!! please check your internet...</h1>;

  return ListofRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            className="border-2 border-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>

          <button
            className="bg-green-200 m-3 px-4 py-1 rounded-lg"
            onClick={() => {
              console.log(searchText);

              const searchedRestaurent = ListofRestaurent.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setSearchedRestaurent(searchedRestaurent);
            }}
          >
            Search !!!
          </button>
        </div>

        <div className="m-4 p-4 flex items-center">
          <button
            className="bg-gray-200  px-4 py-1 rounded-lg "
            onClick={() => {
              console.log("button was clicked !!!");

              const filteredList = ListofRestaurent.filter((res) => {
                return res.info.avgRating > 4.3;
              });

              setSearchedRestaurent(filteredList);
            }}
          >
            Top Rated Restaurent !
          </button>

          <button
            className="bg-blue-300 px-4 py-1 ml-10 rounded-lg"
            onClick={() => {
              setSearchedRestaurent(ListofRestaurent);
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap">
        {searchedRestaurent.map((res) => {
          return (
            <Link to={"restaurents/" + res.info.id}>
              <RestaurentCard
                key={res.info.id}
                resNames={res.info.name}
                avgRating={res.info.avgRating}
                costForTwo={res.info.costForTwo}
                cuisines={res.info.cuisines[0]}
                cloudinaryImageId={res.info.cloudinaryImageId}
                locality={res.info.locality}
                deliveryTime={res.info.sla.slaString}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
