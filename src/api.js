import axios from "axios";

// Create an axios Object with pre-configured setting
const backendApi = axios.create({
  baseURL: "http://localhost:5555",
  // send cookies to the backend on every request

  withCredentials: true
});

function errorHandler(err) {
  if (err.response && err.response.data) {
    // console.log() error info for debugging
    console.log("API Error", err.response.data);
  } else {
    console.log("React Code Error", err);
  }

  // Alert a generic messsage for the user
  alert("Sorry! Something went wrong. Try again later");

  // Cause the error again so the .then() won't be called

  throw err;
}

export function getProductList() {
  return backendApi.get("/api/product").catch(errorHandler);
}

export function getProductDetails(productId) {
  return backendApi.get(`/api/product/${productId}`).catch(errorHandler);
}

export function postSignup(userSubmission) {
  return backendApi
    .post("/api/process-signup", userSubmission)
    .catch(errorHandler);
}

export function postLogIn(loginCredentials) {
  return backendApi
    .post("/api/process-login", loginCredentials)
    .catch(errorHandler);
}

export function getLogOut() {
  return backendApi.get("/api/logout").catch(errorHandler);
}
