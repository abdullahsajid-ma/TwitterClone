import Header from "./Components/Header";
import Item from "./Components/Item";
import './index.css'
import model3 from './assets/Desktop-Model3.jpeg'
import modely from './assets/Desktop-ModelY.jpeg'
import models from './assets/Desktop-ModelS.jpeg'
import modelx from './assets/Desktop-ModelX.jpeg'
import solarPanel from './assets/Desktop-SolarPanels.jpeg'
import solarroof from './assets/Desktop-SolarRoof.jpeg'
import acc from './assets/Desktop-Accessories.jpg'
import {useState} from 'react'
function App() {
  const [sidebar,setsidebar] = useState(false)
  const  showBar = () => setsidebar(!sidebar)
  return (
    <>
      <Header showBar={showBar} sidebar={sidebar}/>
      <div className={`Item_container ${sidebar ? "blur" : " "}`}>
        <Item 
        title='Model 3'
        desc='Order Online for Touchless Delivery'
        textleft='Custom Order'
        textright='Existing Inventory'
        twobtn={true}
        img={model3}
        />
        <Item 
        title='Model Y'
        desc='Order Online for Touchless Delivery'
        textleft='Custom Order'
        textright='Existing Inventory'
        twobtn={true}
        img={modely}
        />
        <Item 
        title='Model S'
        desc='Order Online for Touchless Delivery'
        textleft='Custom Order'
        textright='Existing Inventory'
        twobtn={true}
        img={models}
        />
        <Item 
        title='Model X'
        desc='Order Online for Touchless Delivery'
        textleft='Custom Order'
        textright='Existing Inventory'
        twobtn={true}
        img={modelx}
        />
        <Item 
        title='Solar Panels'
        textleft='Custom Order'
        textright='Learn More'
        twobtn={true}
        desc='Lowest Cost Solar Panels in America'
        img={solarPanel}
        />
        <Item 
        title='Solar Roof'
        desc='Produce Clean Energy From Your Roof'
        textleft='Custom Order'
        textright='Learn More'
        twobtn={true}
        img={solarroof}
        />
        <Item 
        title='Accessories'
        textleft='Shop Now'
        textright='Learn More'
        twobtn={false}
        img={acc}
        />
      </div>
    </>
  );
}

export default App;
