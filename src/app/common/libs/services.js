const API_URL = "https://grove-server-one.vercel.app/api";

export const getData = async (params) => {
  try {
    const response = await fetch(API_URL + params, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
