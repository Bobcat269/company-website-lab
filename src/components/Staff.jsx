
const Staff = ({rangerInfo}) => {
    return(
        <>
    <h2>Rangers</h2>
    {rangerInfo.staff.map((staff, index) => 
        <div key={index} className="=staffCard">
            <img src={staff.img} alt={staff.position}/> {/* made the alt tag the same as the position tag simplify */}
            <h3>{staff.name}</h3>
            <h4>{staff.position}</h4>
            <p>{staff.bio}</p>
            <br></br>
            
        </div>
    )}
    </>
    )
}
export default Staff