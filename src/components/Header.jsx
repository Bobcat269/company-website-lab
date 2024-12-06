 const Header = ({ rangerInfo }) => {
//moved styling to App.css
    // const headerStyle = {
    //     logo: {
    //         height: '300px',
    //     }
    // }

    return (
        <header>
            {/* <h1>{rangerInfo.name}</h1> */}
            <img id="logo" src={rangerInfo.logoImg} alt={rangerInfo.name}/>
        </header>
    )

 }

 export default Header