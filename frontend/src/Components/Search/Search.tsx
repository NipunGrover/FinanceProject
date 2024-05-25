import {useState} from 'react'

interface Props {
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    search: string | undefined;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

//<Props> is what implements the interface, so that the props can be passed down to the component
// :Props is not stricly necessary, but it is good to have it for type checking
const Search : React.FC<Props> = ({onClick, search, handleChange}: Props) : JSX.Element => {


  return (
      <div>
          <input value={search} onChange={(e) => handleChange(e)}></input>
          <button onClick={(e) => onClick(e)} />
      </div>
    )
}

export default Search