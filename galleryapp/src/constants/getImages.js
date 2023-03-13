export function getImages() {
  return fetch("https://api.artsy.net/api/artworks?total_count=1&size=12", {
    headers: {
      "X-Xapp-Token": "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2NDBhMmZjMDBkNDQxZDAwMGJjNGNlYjQiLCJleHAiOjE2Nzg5OTM5ODQsImlhdCI6MTY3ODM4OTE4NCwiYXVkIjoiNjQwYTJmYzAwZDQ0MWQwMDBiYzRjZWI0IiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY0MGEyZmMwMTc4ZGE4MDAwY2ZlYjEzNyJ9.5Y9l-YV9urcOZiYv_zGsb_oAsiZ2kWjuYqpg8WmKKDk",
    },
  })
    .then((response) => response.json());
}
