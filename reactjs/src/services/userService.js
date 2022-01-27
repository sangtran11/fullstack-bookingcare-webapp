import axios from "../axios";

let onHandleLogin = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/login", payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { onHandleLogin };
