import axios from "axios";
import { FETCH_USER } from "./types";

// remember to add export
export const fetchUser = () => {
  return function() {
    axios
      .get("/api/current_user")
      .then(res => dispatchEvent({ type: FETCH_USER, payload: res }));
  };
};
