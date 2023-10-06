import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">busbooking</span>
                <div className="navItems">
                    <button className="navButton">Üye Ol</button>
                    <button className="navButton">Giriş Yap</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar