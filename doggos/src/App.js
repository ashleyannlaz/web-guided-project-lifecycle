import React from 'react';
import axios from 'axios';

class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Dog Pics for Days</h1>
            
            <form>
                <input />
                <button>Fetch Dogs</button>
            </form>
            <div id='dogImage'>
                <img src="" />
            </div>
            </div>
        );
    }
}

export default App;
