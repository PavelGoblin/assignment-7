const SelectedPlayers = ({
  selectedPlayer,
  handleRemove,
  handleIsActiveState,
}) => {
  console.log(selectedPlayer);
  return (
   <div className="max-w-6xl mx-auto  p-3">
    <h1 className="text-2xl font-bold text-black mb-4">Selected Players {`(${selectedPlayer.length}/6)`}</h1>
     <div className=" space-y-2">
      {selectedPlayer.map((singlePlayer, index) => (
        <div
          className="border-2 border-gray-500 rounded-2xl flex items-center justify-between"
          key={index}
        >
          <div className="flex gap-3 items-center">
            <img
              className=" m-2 w-16 h-16 rounded-full"
              src={singlePlayer.image}
              alt=""
            />
            <div>
              <h1 className="text-2xl font-semibold">{singlePlayer.name}</h1>
              <p className="text-xs font-semibold">
                {singlePlayer.battingType}
              </p>
            </div>
          </div>
          <div className="text-2xl text-red-700 pr-5">
            <button onClick={() => handleRemove(singlePlayer.playerId)}>
              <i className="fa-solid fa-trash"></i>
              
            </button>
          </div>
        </div>
      ))}

      <div className="p-1 rounded-xl border-2 border-gray-600 inline-block">
      <button className="bg-[#e9fe29b7] text-black rounded-xl py-2 px-4 border-2 border-[#e9fe29] text-xl font-semibold" onClick={() => handleIsActiveState('available')}>
        Add More Player
      </button>
      </div>
    </div>
   </div>
  );
};

export default SelectedPlayers;
