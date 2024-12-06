 const Header = ({ rangerInfo }) => {

    const headerStyle = {
        logo: {
            height: '300px',
        }
    }

    return (
        <header>
            {/* <h1>{rangerInfo.name}</h1> */}
            <img id="logo" src={rangerInfo.logoImg} alt={rangerInfo.name} style={headerStyle.logo}/>
        </header>
    )

 }

 export default Header