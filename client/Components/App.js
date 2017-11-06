import React from 'react';
import styles from "./styles.css";
import Header from "./Header"
import SponsorBadge from './Sponserbadge';
import EditableCtaContainer from './EditableCtaContainer'
import TrendingContainer from './TrendingContainer'
import MoeConv from './MoreConv'
import Adevertisement from './Adevertisement'
// import AdvertisementSmall from './AdvertisementSmall'
class App extends React.Component {
    constructor(){
        super();
        this.state={
            data : [],
           
        }
    }
    render() {
        return (          
            <div>
                <Header/>
                <SponsorBadge/>   
                <EditableCtaContainer />
                <br/>
                <br/>
                <TrendingContainer/>
                <MoeConv/>
                <Adevertisement/>
                
            </div>
        );
    }
}
export default App;
