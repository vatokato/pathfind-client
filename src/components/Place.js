import React from 'react';

export class Place extends React.Component {
  handlerPlaceDelClick = (e) => {
    this.props.delPlace(this.props.ind);
  }
  handlerPlaceClearClick = (e) => {
    this.props.place.name='';
    this.props.place.x='';
    this.props.place.y='';
    this.props.place.z='';
    this.forceUpdate();
  }
  handlerPlaceRandClick = (e) => {
    this.props.place.x=parseInt(Math.random()*1000);
    this.props.place.y=parseInt(Math.random()*1000);
    this.props.place.z=parseInt(Math.random()*10);
    this.forceUpdate();
  }

  handlerTextChange = (e) => {
    this.props.place[e.target.dataset.name] = e.target.value;
    this.forceUpdate();
  }

  render() {
    console.log("Place render");
    const {name, x,y,z} = this.props.place;
    const ind = this.props.ind;
    return (
      <div className="input-group">
        <div className="input-text-container">
          <input type="text" name={'name'+ind} data-name="name" placeholder="Наименование" value={name} onChange={this.handlerTextChange} />
        </div>
        <div className="input-text-container -sm">
          <input type="text" name={'x'+ind} data-name="x" placeholder="x" value={x} onChange={this.handlerTextChange}/>
        </div>
        <div className="input-text-container -sm">
          <input type="text" name={'y'+ind} data-name="y" placeholder="y" value={y} onChange={this.handlerTextChange}/>
        </div>
        <div className="input-text-container -sm">
          <input type="text" name={'z'+ind} data-name="z" placeholder="z" value={z} onChange={this.handlerTextChange}/>
        </div>
        <div className="action-rand-container" onClick={this.handlerPlaceRandClick} title="random"><span>r</span></div>
        <div className="action-clear-container" onClick={this.handlerPlaceClearClick} title="clear"><span>c</span></div>
        <div className="action-del-container" onClick={this.handlerPlaceDelClick}  title="delete"><span>x</span></div>
      </div>
    )
  }
}