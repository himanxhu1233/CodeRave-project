
const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Madarsa
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Computer Science
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Block Chain
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      AI/Ml
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Pirkya
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Loyal
                    </a>
                  </li>
              
                </ul>
              </li>
            </ul>
            <form class="d-flex search-form" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

            <div class="d-flex">
              <a
                href="#"
                class="btn btn-outline-primary me-2 ms-2 mt-2 mt-lg-0"
              >
                Login
              </a>
              <a href="#" class="btn btn-primary mt-2 mt-lg-0">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
