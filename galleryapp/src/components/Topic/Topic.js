import "./Topic.css"

const Topic = ({ title, paragraph }) => {
  return (<div className="title-container">
    <h1 className="title">{title}</h1>
    <p className="text">{paragraph}</p>
  </div>);
};
export default Topic;
