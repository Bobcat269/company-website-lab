
const Staff = ({rangerInfo}) => {
    return(
        <>
    <h2>Rangers</h2>
    {rangerInfo.staff.map((staff, index) => 
        <div key={index} className="=staffCard">
            <h3>{staff.name}</h3>
            <h4>{staff.position}</h4>
            <p>{staff.bio}</p>
            <img src={staff.img} alt={staff.position}/> {/* made the alt tag the same as the position tag simplify */}
        </div>
    )}
    </>
    )
}
export default Staff