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
    <section className="relative bg-gray-100">
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <form
        className="form relative flex flex-col w-full p-10 space-y-4 bg-darkBlue rounded-lg md:flex-row md:space-y-0 md:space-x-3"
        onSubmit={onSearchSubmit}
      >
        <input
          className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none"
          id="search-input"
          placeholder="Search companies"
          value={search}
          onChange={handleSearchChange}
        ></input>
      </form>
    </div>
  </section>
    )
}

export default Search