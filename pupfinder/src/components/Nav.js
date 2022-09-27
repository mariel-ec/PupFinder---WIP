import logo from "../images/pupfinder.png";

const Nav = ({ setShowModal, showModal, setIsSignUp}) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }
    
    const authToken = false

    return(
       <nav>
           <div className="logo-container"></div>
           <img className="logo" src={logo} />
           {!authToken && 
           (<button 
           className="nav-button"
           onClick={handleClick}
           disabled={showModal}
           >
               Log in
               </button>)}

       </nav>
    )
}

export default Nav;