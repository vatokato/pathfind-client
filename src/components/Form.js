import React from 'react';

export class Form extends React.Component {
  onSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    let data = [
      {x: form.x1.value, y: form.y1.value, z: form.z1.value},
      {x: form.x2.value, y: form.y2.value, z: form.z2.value},
    ];
    this.props.getDistance(data);
  }

  render() {
    console.log("Form render");
    return (
      <form onSubmit={this.onSubmit}>
        <h3>место 1</h3>
        <div className="input-text-container">
          <input type="text" name="x1" placeholder="x1" />
        </div>
        <div className="input-text-container">
          <input type="text" name="y1" placeholder="y1" />
        </div>
        <div className="input-text-container">
          <input type="text" name="z1" placeholder="z1" />
        </div>

        <h3>место 2</h3>
        <div className="input-text-container">
          <input type="text" name="x2" placeholder="x2" defaultValue={10} />
        </div>
        <div className="input-text-container">
          <input type="text" name="y2" placeholder="y2" />
        </div>
        <div className="input-text-container">
          <input type="text" name="z2" placeholder="z2" />
        </div>

        <input type="submit"/>
      </form>
    )
  }
}