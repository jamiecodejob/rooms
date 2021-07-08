import React, { useState } from 'react';
import Counter from '../counter/Counter';


function Room({...props}) {
    // hook
    const [adult, setAdultNumber] = useState(0);
    const [child, setChildNumber] = useState(0);
    const { min, max, order, handleRoomDetail } = props;
  
    const handleAdd = (number, fn, accessObject)=> {
      if(child + adult + 1 <= max){
        fn(number+1);
        // trigger action
        handleRoomDetail({
            order: order, 
            adult: accessObject === 'adult' ? adult + 1 : adult, 
            child: accessObject === 'child' ? child + 1 : child
        });
      }
    } 
    const handleMinus = (number, fn, accessObject)=> {
      if(number - 1 >= min){
        fn(number-1);
        // trigger action
        handleRoomDetail({
            order: order, 
            adult: accessObject === 'adult' ? adult - 1 : adult, 
            child: accessObject === 'child' ? child - 1 : child
        });
      }
    } 
    return (
        <div className="room">  
            <div className="title">房間:{max}人</div>
            <div className="item">
            <div className="description">
                <div className="subTitle">大人</div>
                <div className="age">年齡 20+</div>
            </div>
            <Counter 
                add={()=>handleAdd(adult, setAdultNumber, 'adult')}
                minus={()=>handleMinus(adult, setAdultNumber, 'adult')}
                number={adult}
            />
            </div>
            <div className="item">
            <div className="description">
                <div className="subTitle">小孩</div>
                <div className="age">年齡 0+</div>
            </div>
            <Counter 
                add={()=>handleAdd(child, setChildNumber, 'child')}
                minus={()=>handleMinus(child, setChildNumber, 'child')}
                number={child}
            />
            </div>
        </div>);
}
export default Room;

      