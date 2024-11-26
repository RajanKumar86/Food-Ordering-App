import { useEffect, useState } from "react";
import { MENU_url } from "../utils/constants";

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_url + resId);
    const json = data.json;
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurentMenu;
