import "/src/component/header/Header.css";


export default function Header(){
    return(
        <>
                     
<nav class="navbar navbar-expand-lg">
  <div class="container">
    <a class=" Logo navbar-brand animate__animated animate__backInDown" href="#"> <img src="public/BUZZCUTS LOGO.png" alt="Logo" /> </a>
    <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"> <a class=" Logo navbar-brand" href="#"> <img src="public/FooterLogo.png" alt="Logo" /> </a></h5>
        <button type="button" class="btn-close  shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
          <li class="nav-item mx-2 design">
            <a class="nav-link active" aria-current="page" href="#SERVICES">SERVICES</a>
          </li>
          <li class="nav-item mx-2 design">
            <a class="nav-link active" href="#LOCATION"> LOCATION </a>
          </li>
          <li class="nav-item mx-2 design">
            <a class="nav-link active" href="#DISCOVER"> DISCOVER </a>
          </li>
          <li class="nav-item mx-2 design">
            <a class="nav-link active" href="#GALLERY"> GALLERY </a>
          </li>
          <li class="nav-item mx-2 design">
            <a class="nav-link active" href="#SHOP"> SHOP </a>
          </li>
          <li class="nav-item mx-2 design">
            <a class="nav-link active" href="#ABOUT"> ABOUT </a>
          </li>
          
        </ul>
        

         <div class="d-flex justify-content-center align-items-center">
          <a href="" class=" Start text-decoration-none"> CONTACT US </a>
         </div>

      </div>
    </div>
  </div>
</nav>
<hr />
</>
    )
}