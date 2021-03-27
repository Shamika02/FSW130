import React from "react"
import ThemeContext from "./ThemeContext"
import "./styles.css"

function Button(props){
    return (
      <ThemeContext.Consumer>
      {theme => (
           <button className={`${props.theme}-theme`}>Click Me</button>
          
      )}
      </ThemeContext.Consumer>
     
        )    
    }


export default Button