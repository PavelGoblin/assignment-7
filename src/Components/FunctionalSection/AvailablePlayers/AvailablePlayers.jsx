import { useEffect, useState } from 'react';
import './AvailablePlayers.css'

const AvailablePlayers = ({addPlayerToSelectedPlayer, playerDone}) => {
  const [availablePlayers, setAvailablePlayers] = useState([]);
  useEffect(() => {
    fetch('/Players.json')
      .then(res => res.json())
      .then(data => setAvailablePlayers(data));
  }, []);
  console.log(selectedPlayer)

  return (

    
   <div className='max-w-6xl mx-auto'>
    <h1 className='text-3xl font-bold '>Available Players</h1>
     <div className="   grid grid-cols-3 gap-3 mt-10">
     
     {availablePlayers.map(player => (
       <div key={player.id}>
         <div className="max-w-1/3 p-2 border-2 border-gray-600 rounded-2xl">
           <div className="w-full h-80">
             <img
               className="rounded-2xl w-full h-full "
               src={player.image}
               alt=""
             />
           </div>

           {/* name */}
           <div className="flex gap-2 items-center my-3 text-[20px] font-semibold">
             <i className="fa-solid fa-user"></i>
             <h1>{player.name}</h1>
           </div>
           {/* country */}
           <div className="flex justify-between items-center border-b-2 border-gray-500 pb-3">
             <div className="flex gap-2 items-center">
               <i className="fa-solid fa-flag"></i>
               <h1 className="text-gray-500 text-[16px]">{player.country}</h1>
             </div>

             <div className="bg-gray-300 py-1 px-2 rounded-xl">
               {player.role}
             </div>
           </div>

           <h1 className="text-xl font-semibold">Rating</h1>
           {/* bat */}

           <div className="flex justify-between items-center my-2 ">
             <div className="flex gap-2 items-center">
               <h1 className=" text-xl">{player.battingType}</h1>
             </div>

             <div className="text-sx text-gray-500">
               {player.battingType}
             </div>
           </div>

           {/* Price */}
           <div className="flex justify-between items-center ">
             <div className="flex gap-2 items-center">
               <h1 className=" text-xl">Price: $ {player.biddingPrice}</h1>
             </div>

<<<<<<< HEAD
             <button onClick={()=>addPlayerToSelectedPlayer(player,player.biddingPrice)  }  className={` ${playerDone?'selected-btn available-btn':'available-btn'}`}>
               {playerDone?'Selected':'Choose Player'}
=======
             <button onClick={()=>{addPlayerToSelectedPlayer(player,player.biddingPrice), reduceMoney(player.biddingPrice, player)}  }  className="border-2 border-gray-400 py-1 px-2 rounded-xl">
               Choose Player
>>>>>>> e3e5473f60d7ec58594ccdc6513ce87d47c0712b
             </button>
           </div>
         </div>
       </div>
     ))}
   </div>
   </div>
  );
};

export default AvailablePlayers;
