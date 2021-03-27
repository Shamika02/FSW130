import React, {Component} from "react"
import ThemeContext from "./ThemeContext"


function Header(props){ 
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <header className={`${theme}-theme`}>
                <h2>{theme === "light" ? "Good Morning" : "Good Night"} </h2>
            </header>
                )}
            
            </ThemeContext.Consumer>

        )    
}

export default Header