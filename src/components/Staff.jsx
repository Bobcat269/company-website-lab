
const Staff = ({companyInfo}) => {
    return(
        <>
    <h2>Staff</h2>
    {companyInfo.staff.map((staff, index) => 
        <div key={index} className="=staffCard">
            <h3>{staff.name}</h3>
            <h4>{staff.position}</h4>
            <p>{staff.bio}</p>
            <img src={staff.img} alt={staff.imgAlt}/>
        </div>
    )}
    </>
    )
}
export default Staff