

const Navber = ({donateMoney}) => {
    return (
        <div className="max-w-6xl  h-20 mx-auto flex justify-between items-center">
            {/* logo */}
            <div>
                <img src="../../../images/logo.png" alt="" />
            </div>
            {/* option */}
            <div className="flex gap-2 items-center">
                <ul className="flex gap-6 text-gray-500 text-xl font-semibold cursor-pointer">
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
                <button  className="border-2 border-gray-500 px-4 py-2 rounded-xl text-xl font-semibold flex items-center gap-2">{donateMoney} Coin <img src="../../../images/dollar 1.png" alt="" /></button>
            </div>
            
        </div>
    );
};

export default Navber;