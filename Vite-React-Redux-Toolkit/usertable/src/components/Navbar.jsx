const Navbar = () => {
  return (
    <>
      <div className="wrapper">
        <div className="wrapper-text-div">Welcome, to Thapa Education Hub</div>
        <h1 className="wrapper-text-heading">Admin Table</h1>

        <section className="main-section">
          <div className="section-text-div">One Destination for complete Web Development</div>
          <nav>
            <ul className="menuItems">
              <li>
                <a href="/" data-item="Home">
                  Home
                </a>
              </li>
              <li>
                <a href="/" data-item="About">
                  About
                </a>
              </li>
              <li>
                <a href="/" data-item="Projects">
                  Projects
                </a>
              </li>
              <li>
                <a href="/" data-item="Code">
                  Code
                </a>
              </li>
              <li>
                <a href="/" data-item="Contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </>
  );
};

export default Navbar;
