import yelp from "../api/yelp";
import { useState } from "react";
export default () => {
  const [result, setResult] = useState({
    data: null,
    loading: false,
    error: null,
  });
  const searchResturant = async (id) => {
    setResult({
      data: null,
      loading: true,
      error: null,
    });
    try {
      
        const response = await yelp.get(`/${id}`, {});
       

      setResult({
        data: response.data.photos,
        loading: false,
        error: null,
      });
    } catch (err) {
      setResult({
        data: null,
        loading: false,
        error: "Something went wrong",
      });
    }
  };

  return [result, searchResturant];
};
