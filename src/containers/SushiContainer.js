import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js';

const SushiContainer = (props) => {
  // console.log("props in SC are", props);
  // console.log("--------");
  const sushiBois = props.sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi} />)
  return (
    <Fragment>
      <div className="belt">
        {sushiBois}
        <MoreButton nextFour={props.nextFour} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
