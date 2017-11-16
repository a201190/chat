import React from 'react';
import './home.scss';
class Home extends React.Component{
    render(){
        return(
            <div>
            <ul id="messages"></ul>
            <form className="InputtextBox">
                <input type="text"  autoComplete="off" className="InputText" placeholder="Enter Your text Hear"/>
                <button>send</button>
            </form>
            </div>
        );
    }
}
export default Home;