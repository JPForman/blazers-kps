import React from 'react';
import '../css/keyPlayersStats.css'
import testJsonObject from '../test_json_object.js';


function KeyPlayersStats(){

  const roster = testJsonObject;
  const playerOne = roster[1];
  const playerTwo = roster[2];

  // link for full body image
  // https://ak-static.cms.nba.com/wp-content/uploads/silos/nba/latest/440x700/${player.id}.png

  //link for head shot
  // http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/${player.id}.png

  return(
    <div className='kpsWrapper '>
      <h1 className='kpsTitle'>Key Players Stats - Home</h1>
      <div className='cardRow'>
        <div className='playerCard'>
          <div className='playerInfo '>
            <p className='playerNumber'>{playerOne.number}</p>
            <p className='firstName'>{playerOne.firstName}</p>
            <p className='lastName'>{playerOne.lastName}</p>
            <div className='playerStats'>
              <p>Points Per Game:  {playerOne.pointsPerGame}</p>
              <p>Rebounds Per Game: {playerOne.reboundsPerGame}</p>
              <p>Assits Per Game: {playerOne.assistsPerGame}</p>
              <p>Field Goal Percentage: {playerOne.fieldGoalPercent}</p>
              <p>Free Throw Percentage: {playerOne.freeThrowPercent}</p>
              <p>3 Point Percentage: {playerOne.threePointFieldGoal}</p>
              <p>Avg Steals Per Game: {playerOne.stealsPerGame}</p>
              <p>Avg Blocks Per Game: {playerOne.blocksPerGame}</p>
            </div>
          </div>
          <div className='imageWrapper '>
            <img className='playerPic' src={`https://ak-static.cms.nba.com/wp-content/uploads/silos/nba/latest/440x700/${playerOne.id}.png`} />
          </div>
        </div>

        <div className='playerCard'>
          <div className='playerInfo '>
            <p className='playerNumber'>{playerTwo.number}</p>
            <p className='firstName'>{playerTwo.firstName}</p>
            <p className='lastName'>{playerTwo.lastName}</p>
            <div className='playerStats'>
              <p>Points Per Game:  {playerTwo.pointsPerGame}</p>
              <p>Rebounds Per Game: {playerTwo.reboundsPerGame}</p>
              <p>Assits Per Game: {playerTwo.assistsPerGame}</p>
              <p>Field Goal Percentage: {playerTwo.fieldGoalPercent}</p>
              <p>Free Throw Percentage: {playerTwo.freeThrowPercent}</p>
              <p>3 Point Percentage: {playerTwo.threePointFieldGoal}</p>
              <p>Avg Steals Per Game: {playerTwo.stealsPerGame}</p>
              <p>Avg Blocks Per Game: {playerTwo.blocksPerGame}</p>
            </div>
          </div>
          <div className='imageWrapper '>
            <img className='playerPic' src={`https://ak-static.cms.nba.com/wp-content/uploads/silos/nba/latest/440x700/${playerTwo.id}.png`} />
          </div>
        </div>

      </div>
    </div>
  );
}
export default KeyPlayersStats;