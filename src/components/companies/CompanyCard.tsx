import React from "react";
import { Link } from "react-router-dom";

const CompanyCard: React.FC = ({ name, description, logoUrl, handle }) => {
  return (
    <Link to={`/companies/${handle}`}>
      <div className="flex flex-row gap-4">
        <h6>
          {name} {logoUrl && <img src={logoUrl} alt={name} className="" />}
        </h6>
        <img src={logoUrl} alt={name} />
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CompanyCard;