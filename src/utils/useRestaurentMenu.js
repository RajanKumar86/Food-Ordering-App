import { useEffect } from "react";



const useRestaurentMenu = (resId) => {
    const [resInfo, setResInfo] = useState()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("URL");
    const json = data.json;
    setResInfo(json)
  };

  return resInfo;
};

export default useRestaurentMenu;
