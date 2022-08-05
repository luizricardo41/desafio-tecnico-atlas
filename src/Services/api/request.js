import axios from 'axios';

const requestApi = async (url) => {
  try {
    const data = await axios.get(url);
    return data;
  } catch (error) {
    return error.response.status;
  }
};

export default requestApi;
