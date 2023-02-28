import Topic from "../../components/Topic/Topic";
import Button from "../../components/Button/Button";
import Grid from "../../components/Grid/Grid";
import PictureCard from "../../components/PictureCard/PictureCard";
import { useState, useEffect } from "react";
import "./HomePage.css";
import "../../components/Button/Button.css";

function getImages() {
  return fetch("https://picsum.photos/v2/list?page=2&limit=4").then((res) =>
    res.json()
  );
}

const HomePage = () => {
  const [pictureCardList, setPictureCardList] = useState([]);

  useEffect(() => {
    getImages().then((pictureCardData) => setPictureCardList(pictureCardData));
  }, []);

  const [isShowingMore, setIsShowingMore] = useState(false);
  const handleClick = () => {
    setIsShowingMore(!isShowingMore);
  };

  return (
    <div>
      <>
        <Grid columns={4}>
          {pictureCardList.map(({ download_url, author, id }) => {
            return (
              <PictureCard src={download_url} alt={author} key={author + id} className="img-home"/>
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
