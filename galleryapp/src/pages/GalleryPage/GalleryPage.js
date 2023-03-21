import Grid from "../../components/Grid/Grid";
import { useEffect, useState } from "react";
import "./GalleryPage.css";
import ArtWorkCard from "../../components/ArtWorkCard/ArtWorkCard.js";
import Topic from "../../components/Topic/Topic.js";
import Button from "../../components/Button/Button";
import Component from "../../components/Component/Component";
import { getImages } from "../../constants/getImages";
import { headers } from "../../constants/headers";

const GalleryPage = () => {
  const [artWorkList, setArtWorkList] = useState();
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(1);

  const handleLoad = async () => {
    setLoading(true);
    try {
      const data = await getImages();
      setArtWorkList(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const onNextPage = () => {
    setIndex(index + 1);
    fetch(artWorkList._links.next.href, {
      headers,
    })
      .then((response) => response.json())
      .then((data) => setArtWorkList(data));
  };
  return (
    <div>
      <Topic
        title="Collection"
        paragraph="Reflecting a broad range of styles and ideas, the collection introduces viewers to the main processes and developments in art of the last 60 years. The collection is continually supplemented with new and relevant works of Lithuanian art."
      />

      {loading ? (
        <Component className="loading" />
      ) : (
        <Grid columns={3}>
          {artWorkList?._embedded.artworks.map((artwork, artist) => {
            return (
              <ArtWorkCard
                src={artwork._links.image.href.replace(
                  "{image_version}",
                  "large"
                )}
                title={artwork.title}
                alt={artist}
                id={artwork.id}
                key={artwork.id}
                className="img"
              />
            );
          })}
        </Grid>
      )}

      <Button onClick={onNextPage} className={"btn"} label={`${index} page`} />
    </div>
  );
};
export default GalleryPage;
