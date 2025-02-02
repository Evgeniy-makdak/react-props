export default function Header() {
    return (
        <header>
        <div className="header-container">
            <img src="/public/images/logo.jpg" alt="logo" className="logo" />
            <span className="time">Текущее время: </span>
        </div>
        </header>
    );
}