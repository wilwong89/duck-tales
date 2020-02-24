import axios from "axios";

export default {
  submitFormCall: formObj => {
    return axios
      .put("/data", formObj)
      .then(response => response.data)
      .catch(err => {
        console.log("submitForm error", err);
        return err;
      });
  },
  getFeedingData: () => {
    return axios
      .get("/data")
      .then(response => response.data)
      .catch(err => {
        console.log("submitForm error", err);
        return err;
      });
  }
};
