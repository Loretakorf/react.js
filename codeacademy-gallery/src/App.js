import { useState, useEffect } from "react";
// import data from "./data/image_list.json";
import Container from "./components/Container/Container";
import Grid from "./components/Grid/Grid";
import Image from "./components/Image/Image";

function getImages() {
  return fetch("https://picsum.photos/v2/list").then((res) => res.json());
}

function App() {
  const [imageList, setImageList] = useState([]);
  const[errMessage, setErrMessage] = useState();

  useEffect(() => {
    getImages()
      .then((imageData) => setImageList(imageData))
      .catch(() => setErrMessage("Something went wrong!"));
  }, []);

  return (
    <div>
      <Container>
        {errMessage && <h1>{errMessage}</h1>}
        {!errMessage && (<Grid columns={3}>
          {imageList.map(({ download_url, author, id }) => {
            return <Image src={download_url} alt={author} key={author + id} />;
          })}
        </Grid>
        )}
      </Container>
    </div>
  );
}

export default App;
