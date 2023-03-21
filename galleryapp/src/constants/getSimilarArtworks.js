import { headers } from "./headers";

export function getSimilarArtworks() {
  return fetch("https://api.artsy.net/api/artworks?similar_to_artwork={artwork_id}", {
    headers,
  }).then((response) => response.json());
}