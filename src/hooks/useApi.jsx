// Importing React
import { useEffect, useState } from "react";
import { headers } from "../api/headers";


/**
 * Function to call a api to receive data
 *
 * @param endpoint Needs a url for the endpoint of the api call you want to make
 * @param method Needs the method you want to use on the fetch call
 * @param body Needs a body for making fetch calls
 * @Return Returning data, loading area and error area.
 *
 * @Info The base structure of this call is made by the creator mentioned down below. Adjustments have been done to the original code.
 *
 * @Creator Martin Kruger
 */
const useApi = (endpoint, method, body) => {
 const [data, setData] = useState([]);
 const [isLoading, setIsLoading] = useState(false);
 const [isError, setIsError] = useState(false);

 const url = `https://api.noroff.dev/api/v1/social` || "www.example.com";
 
 useEffect(() => {
  async function getData() {
   try {
    setIsLoading(true);
    setIsError(false);
    const fetchedData = await fetch(url + endpoint, {
     method: method,
     headers: headers("application/json"),
     body: JSON.stringify(body),
    });
    const json = await fetchedData.json();
    setData(json);
    // Check if the endpoint is for logging in, and if so, store the data in localStorage
    if (endpoint === '/login') {
      localStorage.setItem("loggedInUserData", JSON.stringify(json));
    }
   } catch (error) {
    console.log(error);
    setIsError(true);
   } finally {
    setIsLoading(false);
   }
  }
  getData();
 }, [endpoint, method, body]);
 
 return { data, isLoading, isError };
};

export default useApi;