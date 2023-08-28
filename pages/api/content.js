import { axiosInstance } from "../../utils/axios";

/**
 * Fetches content based on a specified content type using Axios HTTP client.
 *
 * @param {string} content_type - The content type to filter the fetched content.
 * @returns {Promise<object|null>} - A Promise that resolves with the fetched data or null in case of error.
 */
export const fetchContent = async (content_type = "") => {
  try {
    const { data } = await axiosInstance().get("/", {
      params: {
        starts_with: content_type,
      },
    });
    return data;
  } catch (error) {
    return null;
  }
};
