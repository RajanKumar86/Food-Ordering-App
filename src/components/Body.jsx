import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { API_url } from "../../src/utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ListofRestaurent, setListofRestaurent] = useState([]);

  const [searchedRestaurent, setSearchedRestaurent] = useState([]);

  const [searchText, setSearchText] = useState(" ");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(API_url);
    const json = await res.json();

    setListofRestaurent(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setSearchedRestaurent(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return ListofRestaurent.length === 0 ? (
    <Shimmer/>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>

          <button
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

        <button
          className="filter-btn"
          onClick={() => {
            console.log("button was clicked !!!");

            const filteredList = ListofRestaurent.filter((restaurants) => {
              return restaurants.info.avgRating > 4.3;
            });
            console.log(filteredList);
            setListofRestaurent(filteredList);
          }}
        >
          Top Rated Restaurent !
        </button>
      </div>

      <div className="res-container">
        {searchedRestaurent.map((res) => {
          return (
            <RestaurentCard
              key={res.info.id}
              resNames={res.info.name}
              avgRating={res.info.avgRating}
              costForTwo={res.info.costForTwo}
              cuisines={res.info.cuisines.join(", ")}
              cloudinaryImageId={res.info.cloudinaryImageId}
              locality={res.info.locality}
              deliveryTime={res.info.sla.slaString}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
