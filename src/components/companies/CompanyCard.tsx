import React from "react";
import { Link } from "react-router-dom";

interface CompanyCardProps {
  name: string;
  description: string;
  logoUrl: string;
  handle: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  name,
  description,
  logoUrl,
  handle,
}) => {
  return (
    <Link to={`/companies/${handle}`} className="flex flex-col w-3/4 p-4 border border-normalborder rounded-md bg-slate-800">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <h3 className="font-bold">{name}</h3>
          {logoUrl ? (
            <img src={logoUrl} alt={name} className="max-h-10 max-w-10" />
          ) : null}
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CompanyCard;
