import { useState, useEffect } from "react";
import { JobHunterAPI } from "../../api/api";
import CompanyCard from "./CompanyCard";
import LoadingModal from "../LoadingModal";
import SearchForm from "../SearchForm";

/**
 * Displays all companies in the database along with a search bar.
 *
 * App -> CompanyList -> { SearchForm, CompanyCard }
 */
const CompanyList: React.FC = () => {
  const [companies, setCompanies] = useState<any>(null);

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
      {companies === null ? <LoadingModal /> : null}
      <div className="flex flex-col align-middle items-center gap-4">
        <SearchForm searchFor={search} />
        {companies && companies.map((c:any) => (
          <CompanyCard
            key={c.handle}
            name={c.name}
            description={c.description}
            logoUrl={c.logoUrl}
            handle={c.handle}
          />
        ))}
        {companies !== null && companies.length === 0 ? <p>No results found</p> : null}
      </div>
    </div>
  );
};

export default CompanyList;
