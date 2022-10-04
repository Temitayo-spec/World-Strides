import axios from "axios";

const options = {
  url: "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
};

export const getPlacesData = async (
  type: string,
  ne: { lat: number; lng: number },
  sw: { lat: number; lng: number }
) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw?.lat ?? 0,
          tr_latitude: ne?.lat ?? 0,
          bl_longitude: sw?.lng ?? 0,
          tr_longitude: ne?.lng ?? 0,
        },
        headers: {
          "X-RapidAPI-Key": process.env
            .NEXT_PUBLIC_RAPID_TRAVEL_API_KEY as string,
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat: number, lng: number) => {
  try {
    const weather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3a8f05b0c1af860e8551e88c22270268`
    );
    console.log(weather.data);
    return weather.data;
  } catch (error) {
    console.log(error);
  }
};
