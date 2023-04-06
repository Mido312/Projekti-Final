import React from 'react'
import './SelectsStyles.css'

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import Maldives3 from '../../assets/maldives3.jpg'
import KeyWest from '../../assets/keywest.jpg'
import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
  return (
    <div className='selects'>
      <div className="text">
        <h1>Most popular Places!</h1>
      </div>
      <div name='views' className='selects'>
        <div className='container'>
          <SelectsImg bgImg={BoraBora} text='Bora Bora' className="img-1" />
          <SelectsImg bgImg={BoraBora2} text='Emerald Bay' className="img-2" />
          <SelectsImg bgImg={Maldives} text='Maldives' className="img-3" />
          <SelectsImg bgImg={Maldives2} text='Grenada' className="img-4" />
          <SelectsImg bgImg={Maldives3} text='Barbados' className="img-5" />
          <SelectsImg bgImg={KeyWest} text='Key West' className="img-6" />
        </div>
      </div>
    </div>
  );
}

export default Selects;
