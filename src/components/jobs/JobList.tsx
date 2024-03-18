import React from "react";
import JobCard from "./JobCard";

interface JobListProps {
  jobs: any[];
  companyHandle: string;
}

const JobList: React.FC<JobListProps> = ({ jobs, companyHandle }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-4 place-items-center">
      {jobs.map((job) => (
        <JobCard
          id={job.id}
          key={job.id}
          title={job.title}
          salary={job.salary}
          equity={job.equity}
          companyHandle={companyHandle}
        />
      ))}
    </div>
  );
};

export default JobList;
