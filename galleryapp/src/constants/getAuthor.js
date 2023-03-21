import { headers } from "./headers";

export function getAuthor() {
  return fetch("https://api.artsy.net/api/artists?artwork_id={artwork_id}", {
    headers,
  }).then((response) => response.json());
}