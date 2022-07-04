import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGifs = (apiResponse) => {
  const { data } = apiResponse;
  const { images, title, id } = data;
  const { url } = images.downsized_medium;
//   console.log(data);
  return { title, id, url };
};

export default function getSingleGift({ id }) {
  return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then(fromApiResponseToGifs);
}
