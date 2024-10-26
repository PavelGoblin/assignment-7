import { useState } from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import AvailableBtn from './Components/FunctionalSection/AvailableBtn';
import Navber from './Components/Navber/Navber';
<<<<<<< HEAD

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const [playerDone, setPlayerDone]=useState(false)

  // add player to selected player
  const addPlayerToSelectedPlayer = (player, money) => {
    console.log(money)
    if (selectedPlayer.length <6) {
      
      const allReadyAdded = selectedPlayer.find(
        addedPlayer => addedPlayer.playerId == player.playerId
      );
  
      if (donateMoney <= money) {
        toast.error(
          'You do not have enough money to hire this player. Claim some credit',
          { position: 'top-center' }
        );
        return;
      }
  
      if (!allReadyAdded) {
        setSelectedPlayer([...selectedPlayer, player]);
        toast.success(`Congrates!! ${player.name}  is now in your team.`, {
          position: 'top-center',
        });
        setDonateMondy(donateMoney - money);
        setPlayerDone(true)
        
      }

      // color

      
      
    }else{
      


      toast('You can not select more than 6 players');
      return;
=======

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  // add player to selected player
  const addPlayerToSelectedPlayer = player => {
    if (selectedPlayer.length > 5) {
      toast('You can not select more than 6 players');
      return;
      
    }else{
      setSelectedPlayer([...selectedPlayer, player]);
>>>>>>> e3e5473f60d7ec58594ccdc6513ce87d47c0712b
     
    }
    console.log(selectedPlayer.length);
    const allReadyAdded = selectedPlayer.find(
      addedPlayer => addedPlayer.playerId == player.playerId
    );

    if (allReadyAdded) {
      toast('This Player is already Selected', { position: 'top-center' });
    }
  };
<<<<<<< HEAD

  // add money
  const [donateMoney, setDonateMondy] = useState(0);
  const addMoney = () => {
    toast.success('90000 taka added to your account', {
      position: 'top-center',
    });

    setDonateMondy(donateMoney + 90000);
  };

 

=======

  // add money
  const [donateMoney, setDonateMondy] = useState(0);
  const addMoney = () => {
    toast.success('90000 taka added to your account', {
      position: 'top-center',
    });

    setDonateMondy(donateMoney + 90000);
  };

  // reduce money
  const reduceMoney = (money, player) => {
    const allReadyAdded = selectedPlayer.find(
      addedPlayer => addedPlayer.playerId == player.playerId
    );

    if (donateMoney <= money) {
      toast.error(
        'You do not have enough money to hire this player. Claim some credit',
        { position: 'top-center' }
      );
      return;
    }

    if (!allReadyAdded) {
      
      toast.success(`Congrates!! ${player.name}  is now in your team.`, {
        position: 'top-center',
      });
      setDonateMondy(donateMoney - money);
    }
  };

>>>>>>> e3e5473f60d7ec58594ccdc6513ce87d47c0712b
  // remove
  const handleRemove = id => {
    const updatedPlayer = selectedPlayer.filter(
      upPlayer => upPlayer.playerId !== id
    );
    setSelectedPlayer(updatedPlayer);
    toast.warn(`Player is removed.`, { position: 'top-center' });
  };

  // end add player

  const [isActive, setIsActive] = useState({
    available: true,
    status: 'available',
  });

  const handleIsActiveState = status => {
    if (status == 'available') {
      setIsActive({
        available: true,
        status: 'available',
      });
    } else {
      setIsActive({
        available: false,
        status: 'selected',
      });
    }
  };

  return (
    <>
      {/* nav section */}
      <Navber
        donateMoney={donateMoney}
        addPlayerToSelectedPlayer={addPlayerToSelectedPlayer}
      ></Navber>
      {/* banner section */}
      <Banner addMoney={addMoney}></Banner>
      {/* Functional btn */}
      <AvailableBtn
        selectedPlayer={selectedPlayer}
        addPlayerToSelectedPlayer={addPlayerToSelectedPlayer}
        handleIsActiveState={handleIsActiveState}
        isActive={isActive}
<<<<<<< HEAD
        playerDone={playerDone}
      
=======
        reduceMoney={reduceMoney}
>>>>>>> e3e5473f60d7ec58594ccdc6513ce87d47c0712b
        handleRemove={handleRemove}
      ></AvailableBtn>
      {/* Footer Section */}
      <Footer></Footer>
    </>
  );
}

export default App;
