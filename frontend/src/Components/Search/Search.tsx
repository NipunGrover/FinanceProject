import { SyntheticEvent } from "react";


interface Props {
    onSearchSubmit: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

//<Props> is what implements the interface, so that the props can be passed down to the component
// :Props is not stricly necessary, but it is good to have it for type checking
const Search : React.FC<Props> = ({onSearchSubmit, search, handleSearchChange}: Props) : JSX.Element => {


  return (
      <>
        <form onSubmit={onSearchSubmit}>
            <input value={search} onChange={handleSearchChange}/>

        </form>
      </>
    )
}

export default Search