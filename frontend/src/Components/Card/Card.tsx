import './Card.css';

interface Props {
    companyName: string
    ticker: string
    price: number
}

const Card: React.FC<Props> = ({companyName, ticker, price}: Props) : JSX.Element => {
  return (
    <div className="card">
        <img
        src="https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Image"
    />

        <div className="details">
            <h2>{companyName} ({ticker})</h2>
            <p>${price}</p>
        </div>
        <p className="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan
            tincidunt. Donec sollicitudin molestie malesuada.
        </p>
        
    </div>
  )
}

export default Card;

