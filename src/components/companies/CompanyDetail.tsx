import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { JobHunterAPI } from "../../api/api";
import LoadingModal from "../LoadingModal";
import JobList from "../jobs/JobList";
// import JobList from "../jobs/JobList";

const CompanyDetail: React.FC = () => {
  const { handle } = useParams<{ handle?: string }>();
  const [company, setCompany] = useState<any>(null);
  // const [errors, setErrors] = useState<any>([]);

  useEffect(
    function getCompanyAndJobsOnMount() {
      async function getCompany() {
        try {
          if (handle) {
            const company = await JobHunterAPI.getCompany(handle);
            setCompany(company);
          }
        } catch (errors) {
          // setErrors(errors);
        }
      }
      getCompany();
    },
    [handle]
  );

  if (!company) return <LoadingModal />;

  console.log("company", company);

  return (
    <div className="flex flex-col items-center text-primarytext">
      <h1 className="text-center font-extrabold text-2xl mb-5">
        {company.name}
      </h1>
      <img
        className="max-h-64 max-w-64 mb-4"
        src={company.logoUrl}
        alt={company.name}
      />
      <p className="mb-4">{company.description}</p>
      <div>
        <JobList jobs={company.jobs} companyHandle={company.handle} />
      </div>
    </div>
  );
};

export default CompanyDetail;
