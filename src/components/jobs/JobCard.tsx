import React from "react";

interface JobCardProps {
  title: string;
  salary: number | null;
  equity: string | null;
  companyHandle: string;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  salary,
  equity,
  companyHandle,
}) => {
  return (
    <div className="flex flex-col p-4 border border-normalborder rounded-md bg-cardbackground h-full w-full">
      <div className="flex flex-col gap-4">
        <h3 className="font-bold">{title}</h3>
        <div className="flex flex-col gap-2">
          <p>Salary: {salary ? salary : null}</p>
          <p>Equity: {equity}</p>
        </div>
        <div>
          <p>Company: {companyHandle}</p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
