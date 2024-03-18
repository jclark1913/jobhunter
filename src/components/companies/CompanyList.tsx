import React, { useState, useEffect } from "react";
// import SearchForm from "../common/SearchForm";
import { JobHunterAPI } from "../../api/api";
import CompanyCard from "./CompanyCard";
import LoadingModal from "../LoadingModal";
import SearchForm from "../SearchForm";

const CompanyList: React.FC = () => {
  const [companies, setCompanies] = useState<any[]>([]);

  useEffect(function getCompaniesOnMount() {
    search();
    console.log("companies", companies);
  }, []);

  const search = async (name?: string) => {
    const companies = await JobHunterAPI.getCompanies(name);
    setCompanies(companies);
  };

  return (
    <div>
      <h1 className="text-center font-extrabold text-2xl mb-5 text-primarytext">
        Companies
      </h1>
      {companies.length === 0 ? <LoadingModal /> : null}
      {/* <SearchForm searchFor={search} /> */}
      <div className="flex flex-col align-middle items-center gap-4">
        <SearchForm searchFor={search} />
        {companies.map((c) => (
          <CompanyCard
            key={c.handle}
            name={c.name}
            description={c.description}
            logoUrl={c.logoUrl}
            handle={c.handle}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
