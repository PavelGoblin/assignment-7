import './Banner.css'

const Banner = ({addMoney}) => {
    return (
        <div className='banner-container max-w-6xl mx-auto flex items-center justify-center '>
            <div className='  text-center space-y-2 '>
                <div className='w-full  flex justify-center items-center'>
                <img  src="../../../images/banner-main.png" alt="" />
                </div>
                <h1 className='font-bold text-3xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='font-semibold text-xl text-gray-600'>Beyond Boundaries Beyond Limits</p>
                <div className='btn-border'><button onClick={()=>addMoney()} className='Credit-btn'>Claim Free Credit</button></div>


            </div>
            
        </div>
    );
};

export default Banner;