import axios from "axios";

export const fetchWeather = async (city) => {
  const API_KEY = process.env.OPENWEATHER_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await axios.get(url);
  return response.data;
};
