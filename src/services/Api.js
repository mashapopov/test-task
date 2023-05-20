import axios from 'axios';
axios.defaults.baseURL = 'https://6467f5cd60c8cb9a2ca09eac.mockapi.io/api/v1';
export const getTweets = async () => {
  try {
    const data = await axios.get(`users`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateTweets = async (id, followers, following) => {
  try {
    const data = await axios.put(`users/${id}`, {
      followers,
      following,
    });

    return data;
  } catch (e) {
    console.log(e);
  }
};
