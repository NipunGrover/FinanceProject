import {useState} from 'react'

type Props = {}

const Search : React.FC<Props> = (props: Props) : JSX.Element => {
    const[search, setSearch] = useState<string>("");

    const onClick = (e: any) => {
        setSearch(e.target.value);
        
    }

  return (
    <div>
        <input value={search} onChange={(e) => onClick(e)}>
        </input>
    </div>
  )
}

export default Search