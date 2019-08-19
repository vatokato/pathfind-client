export const getDistance = (places, cb) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_DISTANCE_REQUEST'
    })

    let url = "http://134.0.119.35:3001/path";
    let total = 0;
    let text = '';
    Promise
      .all( fetchPromises(places, url) )
      .then((response) => {
        let tmpDistance=0;
        response.forEach((way,i )=> {
          tmpDistance += way.distance;
          let name1 = way.name1 || (i===0 ? 'начала' : '');
          let name2 = way.name2 || (i===response.length-1 ? 'конца' : '');

          if(name1) {
            text+="от "+name1;
          }
          if(name2) {
            text+=" до "+name2+" "+(Math.floor(tmpDistance * 100) / 100)+" м; ";
            tmpDistance=0;
          }
          total+=way.distance;
        });
        return response;
      })
      .then((response) => {
        cb();
        dispatch({
          type: 'GET_DISTANCE_SUCCESS',
          payload: {
            text: text,
            total: Math.floor(total * 100) / 100
          },
        });
      })
      .catch((err)=>{
        dispatch({
          type: 'GET_DISTANCE_ERROR',
          payload: err,
        });
      });
  }
};

export const addPlace = (place) => {
  return {
    type: 'ADD_PLACE',
    payload: place
  }
}

export const delPlace = (ind) => {
  return {
    type: 'DEL_PLACE',
    payload: ind
  }
}
export const changePlace = () => {
  return {
    type: 'CHANGE_PLACE',
    payload: ''
  }
}

function fetchPromises (places, url) {
  let fetchs = [];
  for(let i = 0; i<places.length-1; i++) {
    fetchs.push(
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          name1: places[i].name,
          x1: places[i].x,
          y1: places[i].y,
          z1: places[i].z,
          name2: places[i+1].name,
          x2: places[i+1].x,
          y2: places[i+1].y,
          z2: places[i+1].z,
        })
      }).then(response=>response.json())
    )
  }
  return fetchs;
}