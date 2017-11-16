import React from 'react';
import './home.scss';
class Home extends React.Component{
    render(){
        return(
            <div className="InputtextBox">
                <input type="text" className="InputText" placeholder="Enter Your text Hear"/>
            </div>
        );
    }
}
export default Home;