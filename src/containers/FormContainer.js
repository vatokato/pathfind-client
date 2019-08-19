import React from 'react';
import { connect } from 'react-redux'
import { Form } from '../components/Form'
import { getDistance, addPlace, delPlace } from '../actions/FormActions'


class FormContainer extends React.Component {
  render () {
    console.log("FormContainer render", this.props);
    const { distance, places } = this.props.path;
    return (
      <React.Fragment>
        <div className="form-container">
          <Form
            getDistance={this.props.getDistance}
            addPlace={this.props.addPlace}
            delPlace={this.props.delPlace}
            places={places} />
        </div>
        {distance.total>0 && (
          <div className="result">
            <div className="distance-total">Общая длина маршрута: {distance.total} м.</div>
            <div className="distance-text">{distance.text}</div>
          </div>
        )}

      </React.Fragment>
    );
  }
}

const mapStateToProps = store => {
  return {
    path: store.path
  };

}

const mapDispatchToProps = dispatch => {
  return {
    addPlace: (place) => dispatch(addPlace(place)),
    delPlace: (ind) => dispatch(delPlace(ind)),
    getDistance: (places, cb) => dispatch(getDistance(places, cb)),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(FormContainer);