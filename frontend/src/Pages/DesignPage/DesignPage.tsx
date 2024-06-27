import RatioList from "../../Components/RatioList/RatioList"
import Table from "../../Components/Table/Table"
import { testIncomeStatementData } from "../../Components/Table/testData"

type Props = {}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  }
]

const DesignPage = (props: Props) => {
  return (
    <>
        <h1>Finshark Design Page</h1>
        <h2>
            This is the design page. This page is for the design of the application. 
            This page is for the design of the application. This page is for the design of the application.
        </h2>
        <RatioList data={testIncomeStatementData} config={tableConfig}/>
        <Table data={testIncomeStatementData} config={tableConfig}/>
    </>
  )
}

export default DesignPage