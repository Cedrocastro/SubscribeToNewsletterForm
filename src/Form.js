import React from "react"

export default function Form() {
    const [darkMode,setDarkMode] = React.useState(false)
    const [element, setElement] = React.useState({
        emailAddress: "", 
        password: "", 
        confirmPassword: "", 
        joinedNewsletter: false
    })

    function handleChanged(event) {
        const {name, value, type, checked} = event.target
        setElement(prevElement => ({    
            ...prevElement,
            [name] : type === "checkbox" ? checked : value
        }))
    }

    function submitDone(event) {
        event.preventDefault()
    }

    function changeMode() {
        setDarkMode(prevDarkMode => !prevDarkMode)
      }


    return (
        <div>
            <form className="container" id={darkMode ? "dark" :""} onSubmit={submitDone} >
                <div 
                    className="toggler" 
                    >
                    <p className="toggler--light">Light</p>
                    <div 
                        className="toggler--slider"
                        onClick={changeMode}
                    >
                        <div className="toggler--slider--circle"></div>
                    </div>
                    <p className="toggler--dark">Dark</p>
                </div>

                <input
                    className={darkMode ? "dark" : ""}
                    type="email"
                    placeholder="Email address"
                    name="emailAddress"
                    onChange={handleChanged}
                    value={element.emailAddress}
                />

                <input
                    className={darkMode ? "dark" : ""}
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChanged}
                    value={element.password}
                />

                <input
                    className={darkMode ? "dark" : ""}
                    type="password"
                    placeholder="Comfirm password"
                    name="confirmPassword"
                    onChange={handleChanged}
                    value={element.confirmPassword}
                />
                <input
                    className="checkbox"
                    type="checkbox"
                    id="isNeedy"
                    name="joinedNewsletter"
                    onChange={handleChanged}
                    checked={element.joinedNewsletter}

                />
                <label htmlFor="isNeedy">I want to join Newsletter</label>
                <br/>
                <button>Sign up</button>
           
            </form>
        </div>
    )
}