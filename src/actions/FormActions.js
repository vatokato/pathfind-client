export const getDistance = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_DISTANCE_REQUEST'
    })

    let url = "http://localhost:3001/path";
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        x1: data[0].x,
        y1: data[0].y,
        z1: data[0].z,
        x2: data[1].x,
        y2: data[1].y,
        z2: data[1].z,
      })
    })
      .then((response) => response.json())
      .then((response) => {
        setTimeout(()=>{
          dispatch({
            type: 'GET_DISTANCE_SUCCESS',
            payload: response.distance,
          });
        },1000)

      })
      .catch((err)=>{
        dispatch({
          type: 'GET_DISTANCE_ERROR',
          payload: err,
        });
      });
  }
};
