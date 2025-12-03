import { fetchWeather } from "../services/weather.service.js";

export const getWeather = async (req, res) => {
  try {
    const city = req.params.city;
    const data = await fetchWeather(city);

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather" });
  }
};
