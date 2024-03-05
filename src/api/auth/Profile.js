import { headers } from "../headers";

export async function getProfile(credentials) {
 const storedData = localStorage.getItem("UserData");
 const data = JSON.parse(storedData);

 console.log(data);
 const name = data.name;

 const Url = `https://api.noroff.dev/api/v1/social/profiles/${name}`;

 return fetch(Url, {
  method: "GET",
  headers: headers("application/json"),
  body: JSON.stringify(credentials),
 }).then((data) => data.json());
}
