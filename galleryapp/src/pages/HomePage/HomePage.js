import Topic from "../../components/Topic/Topic";
import Button from "../../components/Button/Button";
import Grid from "../../components/Grid/Grid";
import ArtWorkCard from "../../components/ArtWorkCard/ArtWorkCard";
import { useState, useEffect } from "react";
import "./HomePage.css";
import "../../components/Button/Button.css";

const HomePage = () => {
  const [artWorkList, setArtWorkList] = useState();

  useEffect(() => {
    fetch("https://api.artsy.net/api/artworks?total_count=1&size=1", {
      headers: {
        "X-Xapp-Token":
          "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2NDBhMmZjMDBkNDQxZDAwMGJjNGNlYjQiLCJleHAiOjE2Nzg5OTM5ODQsImlhdCI6MTY3ODM4OTE4NCwiYXVkIjoiNjQwYTJmYzAwZDQ0MWQwMDBiYzRjZWI0IiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY0MGEyZmMwMTc4ZGE4MDAwY2ZlYjEzNyJ9.5Y9l-YV9urcOZiYv_zGsb_oAsiZ2kWjuYqpg8WmKKDk",
      },
    })
      .then((response) => response.json())
      .then((data) => setArtWorkList(data));
  }, []);

  const [isShowingMore, setIsShowingMore] = useState(false);
  const handleClick = () => {
    setIsShowingMore(!isShowingMore);
  };

  return (
    <div>
      <>
        <Grid columns={1}>
          {artWorkList?._embedded.artworks.map((artwork, artist, id) => {
            return (
              <ArtWorkCard
                src={artwork._links.image.href.replace(
                  "(image_version)",
                  "large"
                )}
                alt={artist}
                key={artist + id}
                // author={author}
                className="img-home"
              />
            );
          })}
        </Grid>
      </>
      <Topic
        title="Welcome to Modern Art Museum"
        paragraph="MAM Collection one of the largest private art collections in Lithuania, the MA Museum Collection consists of artworks dating from the 1960s to this day. It includes around 6 000 works of modern and contemporary Lithuanian art. In 2011 the collection was officially recognised as being of “national significance.”"
      />

      {isShowingMore && (
        <Topic
          title="What is Modern Art Museum?"
          paragraph="An exceptional opportunity to experience  the works of world-renowned artists, such as Guerrilla Girls, Andy Warhol, Yves Klein and the others! Here, in Lithuania, at MA Museum!"
        />
      )}

      <>
        {" "}
        {true && (
          <Button
            label={isShowingMore ? "Less" : "Read more"}
            onClick={handleClick}
            id="button"
          />
        )}
        {false && (
          <Button
            label={isShowingMore ? "Less" : "Read more"}
            onClick={handleClick}
          />
        )}
      </>
    </div>
  );
};
export default HomePage;
