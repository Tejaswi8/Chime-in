import React from 'react';
import styles from "./styles.css";
import Header from "./Header"
import SponsorBadge from './Sponserbadge';
import EditableCtaContainer from './EditableCtaContainer'
import TrendingContainer from './TrendingContainer'


// class App extends React.Component {
//     constructor(props){
//       super(props);
//       //this.state = {};
//     }
// //          render() {
// //            const { medias } = this.props;

//       return (
//           <div className="container-fluid">
//               <Header/>
//               <SponsorBadge/>
//               <EditableCtaContainer/>
          

//           </div>
//       );
//     }
//   }




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
                
            </div>
        );
    }
}


export default App;
