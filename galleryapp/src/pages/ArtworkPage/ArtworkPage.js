import { useParams } from "react-router-dom";
import ArtWorkCard from "../../components/ArtWorkCard/ArtWorkCard";
import { useState, useEffect } from "react";
import { headers } from "../../constants/headers";
import Component from "../../components/Component/Component";
import Grid from "../../components/Grid/Grid";
import Dropdown from "../../components/Dropdown/Dropdown";
import { getAuthor } from "../../constants/getAuthor";

const ArtworkPage = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState();
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(true);
  const [author, setAuthor] = useState()

  useEffect(() => {
    fetch(`https://api.artsy.net/api/artworks/${id}`, {
      headers,
    })
      .then((response) => response.json())
     
      .then((data) => {
        setArtwork(data);
        getAuthor()
        setAuthor(data);
        setLoading(false);
      });
  }, []);
  console.log(author);

  const handleChange = () => {
    setValue(value);
  };

 
  if (loading) {
    return <Component />;
  }
  return (
    <Grid className={1}>
      <ArtWorkCard
        className={"artwork-img"}
        src={artwork._links.image.href.replace("{image_version}", "large")}
        alt={artwork.alt}
        id={artwork.id}
        key={artwork.id}
      />
      <div className="artwork-description">
        <p className="artwork-title">{artwork.title}</p>
        <p className="artwork-title">{artwork.category}</p>
        <p className="artwork-title">{artwork.medium}</p>
        <p className="artwork-title">{artwork.date}</p>
        <Dropdown onChange={handleChange} dimensions={artwork.dimensions} />

        <p>{artwork.collecting_institution}</p>
        <p artwork_id={author._links.artists.href.artwork_id}>{author.author}</p>
        <p artwork_id={author.artwork_id}>{author.birthday}</p>
        <p artwork_id={author.artwork_id}>{author.deathday}</p>
        <p artwork_id={author.artwork_id}>{author.nationality}</p>
        <p similar_to_artwork={artwork.artwork_id}>{artwork.similar_artworks}</p>
      </div>
    </Grid>
  );
};

export default ArtworkPage;
