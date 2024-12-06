const History = ({rangerInfo}) => {
    return(
        <>
    <h2>Plot Overview</h2>
    {rangerInfo.history.plot.map((history, index) => {
        return (
        <p key={index}>{history}</p>
        )
    })}
    <h2>Our <span style={{textDecoration: 'underline'}}>Real</span> Mission</h2>
    <p>{rangerInfo.history.realMission}</p>
    </>
    )
}


export default History