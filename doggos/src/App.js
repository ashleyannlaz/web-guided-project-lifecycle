import React from 'react';
import axios from 'axios';

class App extends React.Component {

    state = {
        dogImages: [],
        breed: ""
    }

    componentDidMount(){
        axios.get('https://dog.ceo/api/breed/husky/images')
        .then(res=> {
            console.log(res.data);
            this.setState({
                dogImages:res.data.message
            });
        })
        .catch(err=> {
            console.log(err);
        })
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.dogImages !== this.state.dogImages){
            console.log("Update Images")
            if(this.state.breed === 'chihuahua') {
                axios.get('https://dog.ceo/api/breed/husky/images')
                .then(res=> {
                this.setState({
                dogImages:res.data.message,
                breed: 'husky',
            });
        })
        .catch(err=> {
            console.log(err);
        })
        
                
            }
        }
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            ...this.state,
            breed: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        axios.get(`https://dog.ceo/api/breed/${this.state.breed}/images`)
        .then (res => {
            // console.log(res)
            this.setState({
                ...this.state,
                dogImages: res.data.message
            })
        })
    }

    render() {
        return(
            <div>
                <h1>Dog Pics for Days</h1>
            
            <form>
                <input onChange={this.handleChange} />
                <button onClick={this.handleClick} >Fetch Dogs</button>
            </form>
            <div id='dogImage'>
                {
                    this.state.dogImages.map(image => {
                        return(<img src={image} alt={image} width={200} />)
                    })
                }
            </div>
            </div>
        );
    }
}

export default App;
