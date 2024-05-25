import './App.css'
import CardList from './Components/CardList/CardList'
import Search from './Components/Search/Search'
import {useState} from 'react'

function App() {

  //data flow is from parent to child, so the parent component can pass down props to the child component
  //this keeps the child component stateless, and the parent component can manage the state
  //also I don't have to define define these in every component, I can just define them in the parent component
  const[search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value); 
      console.log(e);
  }

  //Mouse Events can be hard to deal with in react, in that case you can use 
  //the e:SyntheticEvent, which is a broader version which covers events but also provides 
  //type checking (you might have to import the SyntheticEvent from react) 
  // const onClick = (e:SyntheticEvent) => {}
  const onClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e);
  }
 

  return (
    <>
      <Search onClick={onClick} search={search} handleChange={handleChange}/>
      <CardList/>
    </>
  )
}

export default App
