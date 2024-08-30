import "./Header.css"
export const Header = () => {
return (
<header className="header">
      <div className="container">
        <div className="header-box">
          <a href="#!" className="header-logo">
            <img src="/images/Vector.svg" alt="logo" />
            <span>Abito</span>
          </a>
          <div className="header-controls">
            <button className="button btn-outline">Вход Регистрация</button>
            <button className="button btn-primary">Подать объявление</button>
          </div>
          <div className="header-burger">
            <img src="/images/burger.svg" alt="burger" />
          </div>
        </div>
      </div>
    </header>
)
}
