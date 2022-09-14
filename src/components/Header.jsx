import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="header-container">
            <header style={{ height: "480px", overflow: 'hidden' }}>
            <nav className="nav">
                <Link to="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                    />
                </Link>
                <div>People App</div>
            </nav>
            <img style={{ width: "100%" }} src="...your header image" />
        </header>
        </div>
    )
}