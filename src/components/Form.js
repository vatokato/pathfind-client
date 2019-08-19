import React from 'react';
import { Place } from './Place'

export class Form extends React.Component {
  onSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    let places = [];
    let inp = e.target.querySelector('input[type=submit]');
    inp.disabled = true;

    form.querySelectorAll(".place").forEach((place,i)=>{
      places.push({
        name:form['name'+i].value,
        x:form['x'+i].value,
        y:form['y'+i].value,
        z:form['z'+i].value,
      })
    });

    this.props.getDistance(places, ()=>{
      inp.disabled = false;
    });
  }

  handleAddPlaceClick = (e) => {
    e.preventDefault();
    this.props.addPlace({name:'',x:'',y:'',z:''});
  }

  render() {
    console.log("Form render", this.props);
    const places = this.props.places || [];
    return (
      <form onSubmit={this.onSubmit}>
        {
          places.map((place, i)=>
            <section className="place" key={i} >
              <Place ind={i} place={place} delPlace={this.props.delPlace} />
            </section>
          )
        }
        <button onClick={this.handleAddPlaceClick}>+ место</button>
        <input type="submit" value="Рассчитать длину маршрута" />
      </form>
    )
  }
}