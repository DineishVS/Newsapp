import image from '../assets/OIP.jpg';

const Newsitem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
      <img
        src={src || image} 
        style={{ height: "200px", width: "100%", objectFit: "cover" }} 
        className="card-img-top"
        alt={title ? title.slice(0, 50) : "News Image"}
      />
      <div className="card-body">
        <h5 className="card-title" style={{ fontSize: "1rem" }}>{title ? title.slice(0, 50) : "No Title Available"}</h5>
        <p className="card-text" style={{ fontSize: "0.875rem" }}>
          {description ? description.slice(0, 90) : "News is Loading"}
        </p>
        <a href={url} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
