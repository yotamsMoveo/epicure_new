import { useEffect, useState } from "react";
import {
  getBestDishesData,
  getResturantsData,
  getChefOfTheWeekData,
} from "../../services/api_service";

const HomePageSlice = () => {
  const [chefOfTheWeekData, setChefOfTheWeekData] = useState({});
  const [bestDishesData, setBestDishesData] = useState({});
  const [bestResturantsData, setBestResturantsData] = useState({});

  useEffect(() => {
    const data = getChefOfTheWeekData().then((response) =>
      setChefOfTheWeekData(response)
    );
  }, []);

  useEffect(() => {
    const data = getResturantsData().then((response) =>
      setBestResturantsData(response)
    );
  }, []);

  useEffect(() => {
    const data = getBestDishesData().then((response) =>
      setBestDishesData(response)
    );
  }, []);
};

export default HomePageSlice;
