import React from 'react';
import '../css/keyPlayersStats.css'
import testJsonObject from '../test_json_object.js';


function KeyPlayersStats(){

  const roster = testJsonObject;
  const player = roster[1];

  // link for full body image
  // https://ak-static.cms.nba.com/wp-content/uploads/silos/nba/latest/440x700/${player.id}.png

  //link for head shot
  // http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/${player.id}.png

  return(
    <div className='kpsWrapper'>
      <h1 className='kpsTitle'>Key Players Stats - Home</h1>
      <div className='playerCard row'>
        <div className='playerStats col-6'>
          <p>{player.number}</p>
          <p>{player.lastName} {player.firstName}</p>
          <p>Points Per Game:  {player.pointsPerGame}</p>
          <p>Rebounds Per Game: {player.reboundsPerGame}</p>
          <p>Assits Per Game: {player.assistsPerGame}</p>
          <p>Field Goal Percentage: {player.fieldGoalPercent}</p>
          <p>Free Throw Percentage: {player.freeThrowPercent}</p>
          <p>3 Point Field Goal Percentage: {player.threePointFieldGoal}</p>
          <p>Avg Steals Per Game: {player.stealsPerGame}</p>
          <p>Avg Blocks Per Game: {player.blocksPerGame}</p>
        </div>
        <div className='imageWrapper col-6'>
          <img className='headShot' src={`https://ak-static.cms.nba.com/wp-content/uploads/silos/nba/latest/440x700/${player.id}.png`} />
      </div>
      </div>
    </div>
  );
}
export default KeyPlayersStats;