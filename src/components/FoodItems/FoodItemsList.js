import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { getFoodItems } from '../../actions';
import './FoodItemsList.css';

class FoodItemsList extends Component {
    componentDidMount() {
        this.props.getFoodItems();
    }

    render() {
        const {error, records} = this.props.state.foodItems;
        if (error) {
          return <div>Error: {error.message}</div>
        } else {
          if (records && records.length > 0) {
            const FoodItemsList = records.map((foodItem, index) => {
            const bgColor = `hsl(${(index + 6) * 100},93%,53%)`;
            const processBgColor = bgColor.trim().replaceAll('%', '-');
            return ( 
              <ul className="foodItemListStyle" key={index}
              style={{backgroundColor: bgColor }}>
                        <li className="itemStyle"><h2>{foodItem.name}</h2></li>
                        <li>{foodItem.description}</li>    
                        <li className="itemStyle"><span>Click here for Recipe</span>
                        <button  className="btn first"><Link to=
                        {{
                        pathname: '/recipe',
                        state: {
                          params: {
                            id: foodItem.id,
                            name: foodItem.name,
                            recipe: foodItem.recipe,
                            formColor: processBgColor
                          }
                        }
                        }}>Recipe Details</Link></button></li>  
              </ul>)
            })
            return (
              <div>
                 <Header/>
                 <div className="foodItemSectionStyle">{FoodItemsList}</div>
              </div>
            )
          } else {
            return null;
          }
        }
      }
}

const mapDispatchToProps = {
    getFoodItems: getFoodItems
}
const mapStateToProps = (state) => (
{
    state: state
})
  
export default connect(mapStateToProps, mapDispatchToProps)(FoodItemsList);

