import { TestDataCompany } from "../Table/testData";


type Props = {}

const data = TestDataCompany[0];

type Company = typeof data;

const config = [
    {
        label: "Company Name",
        render: (company: Company) => company.companyName,
        subTitle: "This is the Company Name"
    }
]

const RatioList = (props: Props) => {
  
    const renderedRow = config.map(row => {
        return (
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0"></>
                </div>
            </li>
        )
    })
  
    return (
    <div>RatioList</div>
  )
}

export default RatioList