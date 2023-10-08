"use client"
import Link from "next/link";
import "./navbar.css"
import { useAuth } from "@/context/AuthContext"

const Navbar = () => {
    const { currentUser, logout } = useAuth();
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link href="/home">
                    <span className="logo">busbooking</span>
                </Link>
                <div className="navItems">
                    <button onClick={() => logout()}
                     className="navButton">
                        Çıkış Yap
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar