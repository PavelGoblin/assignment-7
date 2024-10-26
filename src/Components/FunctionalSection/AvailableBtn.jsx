import './Available-btn/AvailableBtn.css';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../FunctionalSection/SelectedPlayers/SelectedPlayers';
const AvailableBtn = ({
  handleIsActiveState,
  isActive,
  addPlayerToSelectedPlayer,
  selectedPlayer,
  playerDone,
  handleRemove
}) => {
  return (
    <div className="mt-12">
      <div className="flex max-w-6xl justify-end   mx-auto ">
        <div className="rounded-2xl border-2 border-gray-500 overflow-hidden">
          <button
            onClick={() => handleIsActiveState('available')}
            className={`${isActive.available ? 'active btn' : 'btn'}`}
          >
            Available
          </button>
          <button
            onClick={() => handleIsActiveState('selected')}
            className={`${isActive.available ? ' btn' : ' active btn'}`}
          >
            Selected {selectedPlayer.length}
          </button>
        </div>
      </div>
      {isActive.available ? 
        <AvailablePlayers
        playerDone={playerDone}
        
        
          addPlayerToSelectedPlayer={addPlayerToSelectedPlayer}
        ></AvailablePlayers>
       : 
        <SelectedPlayers handleIsActiveState={handleIsActiveState}  handleRemove={handleRemove}  selectedPlayer={selectedPlayer} >

        </SelectedPlayers>
      }
    </div>
  );
};

export default AvailableBtn;
