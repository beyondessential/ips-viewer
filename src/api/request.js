import axios from "axios";
import FetchError from "./FetchError";

const TIMEOUT = 45 * 1000; // 45 seconds

export const request = async (apiUrl, endpoint, options) => {
  try {
    const response = await axios(`${apiUrl}/${endpoint}`, {
      TIMEOUT,
      method: "GET",
      ...options,
    });
    return response.data;
  } catch (error) {
    // normalise error messages
    if (error.response) {
      const { data } = error.response;
      const code = error.response.status;

      if (data.error) {
        throw new FetchError(data.error, code);
      }

      if (data.message) {
        throw new FetchError(data.error, code);
      }
      throw new FetchError(error, code);
    }

    throw new Error(error);
  }
};
