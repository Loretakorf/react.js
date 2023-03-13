import Grid from "../../components/Grid/Grid";
import { useEffect, useState } from "react";
import "./GalleryPage.css";
import ArtWorkCard from "../../components/ArtWorkCard/ArtWorkCard.js";
import Topic from "../../components/Topic/Topic.js";
import { getImages } from "../../constants/getImages";
import Button from "../../components/Button/Button";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GalleryPage = () => {
  const [artWorkList, setArtWorkList] = useState();
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState();

  const handleLoading = async () => {
    setLoading(true);
    try {
      const data = await getImages();
      setArtWorkList(data.documents);
    } catch (errMessage) {
      setErrMessage("Something went wrong!");
    }
    setLoading(false);
  };
  useEffect(() => {
    handleLoading();
  }, []);
  
  const onNextPage = () => {
    fetch(artWorkList._links.next.href, {
      headers: {
        "X-Xapp-Token":
          "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2NDBhMmZjMDBkNDQxZDAwMGJjNGNlYjQiLCJleHAiOjE2Nzg5OTM5ODQsImlhdCI6MTY3ODM4OTE4NCwiYXVkIjoiNjQwYTJmYzAwZDQ0MWQwMDBiYzRjZWI0IiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY0MGEyZmMwMTc4ZGE4MDAwY2ZlYjEzNyJ9.5Y9l-YV9urcOZiYv_zGsb_oAsiZ2kWjuYqpg8WmKKDk",
      },
    })
      .then((response) => response.json())
      .then((data) => setArtWorkList(data));
  };
  return (
    <div>
      {errMessage ? (
        "Something went wrong!"
      ) : (
        <Topic
          title="Collection"
          paragraph="Reflecting a broad range of styles and ideas, the collection introduces viewers to the main processes and developments in art of the last 60 years. The collection is continually supplemented with new and relevant works of Lithuanian art."
        />
      )}
      {!errMessage && (
        <Grid columns={3}>
          {loading ? (
            <Skeleton />
          ) : (
            artWorkList?._embedded.artworks.map(
              (artwork, artist, id, title) => {
                return (
                  <ArtWorkCard
                    src={artwork._links.image.href.replace(
                      "(image_version)",
                      "large"
                    )}
                    title={title}
                    alt={artist}
                    key={id}
                    // author={author}
                    className="img"
                  />
                );
              }
            )
          )}
        </Grid>
      )}
      <Button onClick={onNextPage} className={"btn"} label="Next" />
    </div>
  );
};
export default GalleryPage;
