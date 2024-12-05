const Navbar = ({ handleSection }) => {
  return (
    <div>
      <button onClick={handleSection} value="Home">
        Home
      </button>
      <button onClick={handleSection} value="History">
        History
      </button>
      <button onClick={handleSection} value="Staff">
        Staff
      </button>
      <button onClick={handleSection} value="ContactUs">
        Contact
      </button>
      {/* <button onClick={handleSection} value='Home'>Home</button> */}
    </div>
  );
};

export default Navbar;
