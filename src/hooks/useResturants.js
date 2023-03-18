import yelp from "../api/yelp";
import { useState } from "react";
export default () => {
  const [results, setResults] = useState({
    data: null,
    loading: false,
    error: null,
  });
  const searchResturant = async (term) => {
    setResults({
      data: null,
      loading: true,
      error: null,
    });
      try {
        console.log("term" +term)
      const response = await yelp.get("/search?", {
        params: {
          limit: 15,
          term,
          location: "Toronto",
        },
      });
       

      setResults({
        data: response.data.businesses,
        loading: false,
        error: null,
      });
    } catch (err) {
      setResults({
        data: null,
        loading: false,
        error: "Something went wrong",
      });
    }
  };

  return [results, searchResturant];
};
