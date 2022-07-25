import { Link } from "react-router-dom";

const TitleSection = ({ title, buttonText, formLink }) => {
  return (
    <div className="row mb-3">
      <div className="col-8">
        <h1 className="display-3 px-2">{title}</h1>
      </div>
      <div className="col-2"></div>
      <div className="col-2">
        <div className="p-3">
          <Link to={formLink} className="btn bg-primary">
            {buttonText}{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default TitleSection;
