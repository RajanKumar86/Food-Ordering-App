import { useEffect, useState } from "react";
import { MENU_url } from "../utils/constants";

const useRestaurentMenu = (resId) => {
  const [resinfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(MENU_url + resId);
    const json = await res.json();
    setResInfo(json.data);
    console.log(json.data)
  };

  return resinfo;
};

export default useRestaurentMenu;
