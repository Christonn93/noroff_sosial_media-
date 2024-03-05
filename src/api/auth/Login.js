const Url = "https://api.noroff.dev/api/v1/social";

export async function loginUser(credentials) {
 console.log(credentials);

 return fetch(Url + "/auth/login", {
  method: "POST",
  headers: {
   "Content-Type": "application/json",
  },
  body: JSON.stringify(credentials),
 }).then((data) => data.json());
}