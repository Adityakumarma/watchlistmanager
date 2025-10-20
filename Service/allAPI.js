import BASEURL from "./Service/Baseurl";
import commonAPI from "./commonAPI";

// Get all shows
export const getAllShowsAPI = async () => {
  return await commonAPI("GET", `${BASEURL}/shows`, {});
};

// Get a single show 
export const getShowAPI = async (id) => {
  return await commonAPI("GET", `${BASEURL}/shows/${id}`, {});
};

// Add a new show
export const addShowAPI = async (data) => {
  return await commonAPI("POST", `${BASEURL}/shows`, data);
};

// Update a show
export const updateShowAPI = async (id, data) => {
  return await commonAPI("PUT", `${BASEURL}/shows/${id}`, data);
};

// Delete a show
export const deleteShowAPI = async (id) => {
  return await commonAPI("DELETE", `${BASEURL}/shows/${id}`, {});
};


BASEURL