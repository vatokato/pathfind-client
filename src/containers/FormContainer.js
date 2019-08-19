import React from 'react';
import { connect } from 'react-redux'
import { Form } from '../components/Form'
import { getDistance } from '../actions/FormActions'


class FormContainer extends React.Component {
  render () {
    console.log("FormContainer render", this.props);
    const { distance } = this.props.path;
    return (
      <React.Fragment>
        <div className="form-container">
          <Form getDistance={this.props.getDistance} />
        </div>
        {distance ? <div>Расстояние между объектами {distance} м.</div> : ''}
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
    getDistance: (data) => dispatch(getDistance(data))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(FormContainer);