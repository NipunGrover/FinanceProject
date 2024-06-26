import { SyntheticEvent, useState } from "react";
import CardList from "../../Components/CardList/CardList";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import Search from "../../Components/Search/Search";
import { CompanySearch } from "../../company";
import { searchCompanies } from "../../api";

interface Props {}

const SearchPage = (props: Props) => {
 //data flow is from parent to child, so the parent component can pass down props to the child component
  //this keeps the child component stateless, and the parent component can manage the state
  //also I don't have to define define these in every component, I can just define them in the parent component
  const[search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]); 
  const [serverError, setServerError] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value); 
      //console.log(e);
  }

  //Mouse Events can be hard to deal with in react, in that case you can use 
  //the e:SyntheticEvent, which is a broader version which covers events but also provides 
  //type checking (you might have to import the SyntheticEvent from react) 
  // const onClick = (e:SyntheticEvent) => {}
  const onSearchSubmit = async (e:SyntheticEvent) => {

    e.preventDefault();

    //taking ticker from the search box, then passing it to the searchCompanies function as a query (prop)
    const result = await searchCompanies(search);
  
    if (!result) {
      setServerError('No result returned from search');
      return;
    }
    if (typeof result === "string" || typeof result === "undefined")
    {
      setServerError(result);
    }
    else if (Array.isArray(result.data))
    {
      setSearchResult(result.data);
      console.log(result.data);
    }

  }

  const onPortfolioCreate = ( e: any) =>
    {
      e.preventDefault();
      const exists = portfolioValues.find((value) => value === e.target[0].value);
      if(exists) return;
      const updatedPortfolio = [...portfolioValues, e.target[0].value];
      setPortfolioValues(updatedPortfolio);
    }
 
  const onPortfolioDelete = (e: any) =>{
    e.preventDefault();
    const removed = portfolioValues.filter((value) => {
      return value !== e.target[0].value;
  });
    setPortfolioValues(removed);
  };


  return (
    <>
    <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange}/>
    {serverError && <h1>setServerError</h1>}
    <ListPortfolio 
    portfolioValues={portfolioValues}
    onPortfolioDelete={onPortfolioDelete}
    />
    <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate} />
  </>
  )
}

export default SearchPage