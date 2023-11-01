import './_header.scss';

interface IHeader {
    name: string,
    total: number,
    logo: string
}

const Header = ({ name, total, logo } : IHeader ) => {
  return (
    <div className="header-container">
        <div className="heading">
            <img src={logo} alt={name} />
        </div>
        <div className="score">
            <div className="title">Score</div>
            <div className="total">{total}</div>
        </div>
    </div>
  )
}

export default Header