import React from 'react'
import Food from './Food'
import axios from 'axios'

class FoodCard extends React.Component{
    state= {
        food: []
    }

    componentDidMount(){
        this.fetchUser()
        console.log('mounted')

    }

    fetchUser = () => {
        axios.get(`http://localhost:5000/api/restricted/data`)
        .then(res => this.setState({ food: res.data }, console.log('check',res.data)))        
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                {this.state.food.map(foods=> {
                    return ( 
                <div data-testid="name">
                <Food name={foods.name} id={foods.id}  />
                </div>
                )})}
            </div>
        )
    }
}
export default FoodCard