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
      <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
        <Sidebar/>
        <CompanyDashboard>
          <Tile title="Company Name" description={company.companyName}></Tile>
        </CompanyDashboard>
      </div>
   
    ) : (
    <div>Company not found</div>
  )
  
  }
 </>

}

export default CompanyPage;