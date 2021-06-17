import Link from "next/link";
// import passHref from "next/passhref";
export function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" passHref href="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href="/login" passHref>
                Login
              </Link>
              <Link href="/signup" passHref>
                Signup
              </Link>
              <Link href="/cart" passHref>
                Cart
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Link href="/search">
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                passHref
              >
                Search
              </button>
            </Link>
          </form>
        </div>
      </nav>
    </>
  );
}
