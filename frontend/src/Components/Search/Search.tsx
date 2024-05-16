import {useState} from 'react'

type Props = {}

const Search : React.FC<Props> = (props: Props) : JSX.Element => {
  const[search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value); 
  }

  //Mouse Events can be hard to deal with in react, in that case you can use 
  //the e:SyntheticEvent, which is a broader version which covers events but also provides 
  //type checking (you might have to import the SyntheticEvent from react) 
  // const onClick = (e:SyntheticEvent) => {}
  const onClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e);
  }

  return (
      <div>
          <input value={search} onChange={(e) => handleChange(e)}></input>
          <button onClick={(e) => onClick(e)} />
      </div>
    )
}

export default Search