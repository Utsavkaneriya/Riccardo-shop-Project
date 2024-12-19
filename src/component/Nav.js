import images from '../component/images/shopping-bag.png'


const Nav = () => {

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-secondary tertiary fixed-top ">
        <div class="container-fluid">
          <img src={images} width={40} height={40} alt=""></img>
          <a class="navbar-brand" href="#"><span className="text-primary"><b>RICCARDO SHOP</b></span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link mx-3" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-3" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-3" href="#">Service</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-3" href="#">Shop</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-3" href="#">Product</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-3" href="#">Review</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-3" href="#">Contact Us</a>
              </li>
              <form class="d-flex" role="search">
               
                  {/* <button class="btn btn-primary" type="submit">Login</button> */}
              </form>
            </ul>

          </div>
        </div>
      </nav>
    </>

  );
}
export default Nav;       