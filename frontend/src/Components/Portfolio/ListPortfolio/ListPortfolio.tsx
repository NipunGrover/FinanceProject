
//holds the full list of portfolio values
import CardPortfolio from '../CardPortfolio/CardPortfolio';
import { SyntheticEvent } from 'react';

interface Props {
    portfolioValues: string[];
    onPortfolioDelete: (e: SyntheticEvent) => void;
}

const ListPortfolio = ({portfolioValues, onPortfolioDelete}: Props) => {
  return (
    <>
        <h3>My Portfolio</h3>
        <ul>
            {portfolioValues &&
                portfolioValues.map((portfolioValue) => {
                    return <CardPortfolio portfolioValue={portfolioValue} onPortfolioDelete={onPortfolioDelete}/>
                }
            )}
        </ul>
    </>
  )
}

export default ListPortfolio