import React from 'react'
import Header from './Header'
import AddedFeatures from './AddedFeatures'
import AdditionalFeatures from './AdditionalFeatures'
import Total from './Total'
import { connect } from 'react-redux'
import { buyItem, removeFeature} from '../actions'


const CarHome = (props) => {

    const logout = e => {
        e.preventDefault();
        localStorage.clear();
        props.history.push("/");
      };

    return (
        <div className="home-body">

        <div className="boxes">
        <div className="box">
           <Header  /> {/*car={state.car} */}
           <AddedFeatures  /> {/*car={state.car} */}
        </div>
        <div className="box">
          <AdditionalFeatures  />{/*additionalFeatures={state.additionalFeatures} */}
          <Total  />{/*car={state.car} additionalPrice={state.additionalPrice} */}
        </div>
      </div>
      <button className="log-out" onClick={logout}>
        Logout
      </button>
      </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return{
      stats:state.carReducer
    }
  }
export default connect(mapStateToProps,{buyItem,removeFeature})(CarHome);
