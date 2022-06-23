import axios from "axios";

const options = (gameName) => {
  return{
    method: 'GET',
    url: `https://game-prices.p.rapidapi.com/game/${gameName}`,
    params: {region: 'us', type: 'game'},
    headers: {
      'X-RapidAPI-Key': '6db746e077msh0a1609870030b0fp115007jsn62452d24cc95',
      'X-RapidAPI-Host': 'game-prices.p.rapidapi.com'
    }
  }
  };

  export const getApiData = async (game) => {
    try{
        const response = await axios.request(options(game));
        const {data} = response;
        return data;
    }
    catch(e){
        console.error(e);
        return {};
    }
  }