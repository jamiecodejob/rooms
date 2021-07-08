import React, { useState } from 'react';
import Room from './components/room/Room';
import './App.scss';

function App() {
  const rooms = [{min: 0, max: 2}, {min: 0, max: 1}];
  const [postRoomData, setPostRoomData] = useState([{adult: 0, child: 0}, {adult: 0, child: 0}]);
  const handleDistribution = (roomDetail) => {
    let order = roomDetail.order;
    let updatePersonNumber = postRoomData[order] = roomDetail;
    let roomTotal = {updatePersonNumber, ...postRoomData};
    delete roomTotal[order];
    setPostRoomData(roomTotal);
  }
  return (
    <div className="App">
      <div className="title">住房人數：3人/2房</div>
      {
        rooms.map((item, index)=>(
          <Room key={index} order={index} min={item.min} max={item.max} handleRoomDetail={(roomDetail)=>handleDistribution(roomDetail)}/>
        ))
      }
    </div>
  );
}

export default App;
