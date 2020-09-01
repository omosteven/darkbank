import { useState, useEffect } from "react";
const axios = require("axios").default;

const [userState, setUserState] = useState("");

  const checkUserState = () => {
    const urlLink = "http://localhost:5000/user/checkUserState";
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",

        url: urlLink,

        data: {
          token: localStorage.getItem("userToken")
        }
      })
        .then(response => {
          resolve("Active!");
        })
        .catch(error => {
          if (error.response.message === "Sorry, an error occurred!") {
            reject("Error!");
          } else {
            resolve("Token Expired!");
          }
        });
    });
  };

 
const RedirectState = () => {

  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    (async () => {
      setIsFetching(true);
      const data = await  checkUserState();
      setUserState(data);
      setIsFetching(false);
    })();
  }, []);

  if (isFetching) {
    if(userState === "Token Expired!"){
      sessionStorage.setItem("userState","Expired!")
     window.location = "http://localhost:3000/auth/signin/"
    }
  }

}

export default RedirectState;