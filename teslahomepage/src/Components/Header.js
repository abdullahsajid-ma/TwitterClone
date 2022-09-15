import TeslaLogo from '../assets/teslaLogoSmall.svg'
import { VscChromeClose } from "react-icons/vsc";
import './Header.css'
const Header = ({showBar,sidebar}) => {
  return (
    <>
    <div className={`header ${sidebar ? "blur" : " "}`}>
        <div className="header_logo">
            <img src={TeslaLogo} alt="Tesla Logo"/>
        </div>
        <div className="header_center">
            <p>Model S</p>
            <p>Model 3</p>
            <p>Model X</p>
            <p>Model Y</p>
            <p>Solar Roof</p>
            <p>Solar Panels</p>
        </div>
        <div className="header_right">
            <p>Shop</p>
            <p>Account</p>
        </div>
        <p className='main-menu' onClick={showBar}>Menu</p>
    </div>
    <div className={`overlay ${sidebar ? "display-overlay" : " "}`}>
            <div className='icon-div'>
              <VscChromeClose onClick={showBar}/>
            </div>
            <div className='overlay-inner'>
              <p>Model S</p>
              <p>Model 3</p>
              <p>Model X</p>
              <p>Model Y</p>
              <p>Solar Roof</p>
              <p>Solar Panels</p>
              <p>Shop</p>
              <p>Account</p>
            </div>  
        </div>
    </>
  )
}

export default Header
