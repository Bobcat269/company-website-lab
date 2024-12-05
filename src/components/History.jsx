const History = ({companyInfo}) => {
    return(
        <>
    <h2>Our Mission</h2>
    <p>{companyInfo.history.mission}</p>
    <h2>Our <span style={{textDecoration: 'underline'}}>Real</span> Mission</h2>
    <p>{companyInfo.history.realMission}</p>
    </>
    )
}


export default History