import { headers } from "./headers";

export function getImages() {
  return fetch("https://api.artsy.net/api/artworks?total_count=1&size=9", {
    headers,
  }).then((response) => response.json());
}
