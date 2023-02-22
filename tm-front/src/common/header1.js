// import './App.css';
import '../style/common.css';
import 'bootstrap/dist/css/bootstrap.css';

function Header1() {
  return (
    <div className="header">
      <header className="App-mainHeader">
      <div class="container">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">세번째미술관</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    미술관
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">미술관 소개</a></li>
                    <li><a class="dropdown-item" href="#">찾아오시는 길</a></li>
                  </ul>
                </li>
                </ul>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    전시
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">현재 전시</a></li>
                    <li><a class="dropdown-item" href="#">과거 전시</a></li>
                    <li><a class="dropdown-item" href="#">프로그램</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    예약
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">관람예약</a></li>
                    <li><a class="dropdown-item" href="#">관람 유의사항</a></li>
                  </ul>
                </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">공지사항</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">로그인</a>
                  </li>
            </div>
          </div>
        </nav>
    </div>
      </header>
    </div>
  );
}

export default Header1;
