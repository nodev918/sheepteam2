import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/">Qpost</Link>
                    <ul id="nav-mobile" className="right">
                    <li><Link to="/test">test</Link></li>
                        <li><Link to="/post">post</Link></li>
                        <li><Link to="/signin">signin</Link></li>
                        <li><Link to="/todolist">todolist</Link></li>
                        <li><Link to="/others">other</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}