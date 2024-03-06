import React, {useState, useEffect} from "react";
// import SearchForm from "../common/SearchForm";
import { JobHunterAPI } from "../../api/api";
// import CompanyCard from "./CompanyCard";


const CompanyList: React.FC = () => {
    const [companies, setCompanies] = useState<any[]>([]);

    useEffect(function getCompaniesOnMount() {
        search();
    }, []);

    const search = async (name?: string) => {
        const companies = await JobHunterAPI.getCompanies(name);
        setCompanies(companies);
    }

    if (!companies) return <p>Loading...</p>;

    return (
        <div>
            <h1>Companies</h1>
            {/* <SearchForm searchFor={search} /> */}
            {companies.map((c) => (
                <p key={c.handle}> {c.handle} </p>
            ))}
        </div>
    );

}

export default CompanyList;