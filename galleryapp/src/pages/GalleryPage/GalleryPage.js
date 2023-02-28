import Grid from "../../components/Grid/Grid";
import { useEffect, useState } from "react";
import "./GalleryPage.css";
import PictureCard  from "../../components/PictureCard/PictureCard.js";
import  Topic  from "../../components/Topic/Topic.js";

function getImages() {
  return fetch("https://picsum.photos/v2/list?page=2&limit=30").then((res) => res.json());
}

const GalleryPage = () => {
  const [pictureCardList, setPictureCardList] = useState([]);
  const [errMessage, setErrMessage] = useState();
  useEffect(() => {
    getImages()
      .then((pictureCardData) => setPictureCardList(pictureCardData))
      .catch(() => setErrMessage("Something went wrong!"));
  }, []);
  return (
    <div>
      {errMessage ? "Something went wrong!" : 
        <Topic
        title="Collection"
        paragraph="Reflecting a broad range of styles and ideas, the collection introduces viewers to the main processes and developments in art of the last 60 years. The collection is continually supplemented with new and relevant works of Lithuanian art."
      />}
      {!errMessage && (<Grid columns={3}>
        {pictureCardList.map(({download_url, author, id }) => {
            return <PictureCard src={download_url} alt={author} key={author + id} author={author} className="img"/>
        })}
      </Grid>)}
    </div>
  );
};
export default GalleryPage;
