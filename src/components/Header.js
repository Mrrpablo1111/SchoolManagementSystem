import React, { useEffect, useState } from 'react'
import {BiMenuAltRight} from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai"
import classes from './Header.module.scss'
import { Link, useHistory } from "react-router-dom";
const Header = () => {
    const history = useHistory();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height:window.innerHeight
            });
        };
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize);
    },[]);

    useEffect(() => {
        if (size.width > 768 && menuOpen){
            setMenuOpen(false)
        }
    }, [size.width, menuOpen])


    const menuToggleHandler = () => {
        setMenuOpen((p) =>!p);
    };

    const lwkClickHandler = () => {
        history.push("/LKWPage")
    }
    
  return (
    <header className={classes.header}>
        <div className={classes.header__content}>
            <Link to = "/"className={classes.header__content__logo}>Limkokwing</Link>
        
        <nav 
            className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu:""}`}>
            <ul>
                <li>
                    <Link to="/Home" onClick={menuToggleHandler}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/About" onClick={menuToggleHandler}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/Context" onClick={menuToggleHandler}>
                        Context
                    
                    </Link>
                </li>
            </ul>
            <button onClick={lwkClickHandler}>LKW-Page</button>
        </nav>
        <div className={classes.header__content__toggle}>
            {!menuOpen ? <BiMenuAltRight on onClick={menuToggleHandler}/> : <AiOutlineClose onClick={menuToggleHandler}/>}
            
        </div>
        </div>
    </header>
  )
}

export default Header
