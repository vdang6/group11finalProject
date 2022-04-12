import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";

const RestaurantPage = () => {
  const {id} = useParams()
  const  {selectedRestaurant, setrselectedRestaurant} = useContext(RestaurantsContext)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        console.log(response);

        setSelectedRestaurant(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
};
export default RestaurantPage