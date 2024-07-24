import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';
import Sidebar from '../../Components/Sidebar/Sidebar'
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tiles/Tiles';

interface Props {}

const CompanyPage = (props: Props) => {
  
  let {ticker} = useParams();
  const [company, setCompany] = React.useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    }
    getProfileInit();
  }, [])


  return <>  
  {company? (
      <div className="w-full max-w-screen-lg relative flex ct-docs-disable-sidebar-content ">
        <Sidebar/>
        <CompanyDashboard ticker={ticker!}>
          <Tile title="Company Name" description={company.companyName}></Tile>
          <Tile title="Price" description={company.price.toString()}></Tile>
          <Tile title="Sector" description={company.sector}></Tile>
          <Tile title="DCF" description={company.dcf.toString()}></Tile>
          <p className="bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4">
            {company.description}
          </p>
        </CompanyDashboard>
      </div>
   
    ) : (
    <div>Company not found</div>
  )
  
  }
 </>

}

export default CompanyPage;