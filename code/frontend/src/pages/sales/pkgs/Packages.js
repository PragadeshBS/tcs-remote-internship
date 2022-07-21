import { Link } from "react-router-dom";
import PackagesList from "../../../components/sales/PackagesList";

const Packages = () => {
  return (
    <div>
      <div className="row mb-3">
        <div className="col-8">
          <h1 className="display-3 px-2">Packages</h1>
        </div>
        <div className="col-2"></div>
        <div className="col-2">
          <div className="p-3">
            <Link to="/sales/packages/add" className="btn bg-primary">
              New package
            </Link>
          </div>
        </div>
      </div>
      <PackagesList />
    </div>
  );
};
export default Packages;
