import React from "react";

import AddedFeature from "./AddedFeature";
import { connect } from "react-redux";

const AddedFeatures = (props) => {
  console.log(props.additionalPrice);
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <>
          <ol type="1">
            {props.car.features.map((item) => (
              <AddedFeature key={item.id} feature={item} />
            ))}
          </ol>
          <p>New Amount: $<span id={props.additionalPrice === 3750 ? 'sold' : ''}>{props.car.price + props.additionalPrice}</span></p>
        </>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(`state`, state);
  return {
    car: state.carReducer.car,
    additionalPrice: state.carReducer.additionalPrice,
  };
};

export default connect(mapStateToProps, {})(AddedFeatures);
