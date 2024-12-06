const Navbar = ({ handleSection }) => {
  return (
    <nav>
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
    </nav>
  );
};

export default Navbar;
