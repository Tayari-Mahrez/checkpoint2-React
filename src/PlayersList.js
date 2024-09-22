import React from 'react';
import players from './DB';
import Player from './Player';

const PlayersList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {players.map((player, i) => (
        <Player key={i} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;