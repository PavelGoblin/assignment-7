
import './Footer.css'
const Footer = () => {
    return (
        <div>
            {/* Footer Section */}
            <div className='bg-black'>
            <footer className="border-2 border-black h-[550px] max-w-6xl mx-auto mt-[250px] bg-black relative">
                <div className=" absolute h-[300px] w-[900px]  border-2 border-white ml-[130px] -mt-[140px] text-black rounded-3xl  bg-[#ffffffbd] p-6">
                    <div className=' subscribe-section rounded-3xl flex justify-center items-center  h-full max-w-full  border-2 border-gray-400'>
                        <div className='w-full text-center'>
                        <h1 className='text-4xl font-semibold'>Subscribe to our Newsletter</h1>
                        <p className='py-3 text-xl text-gray-500'>Get the latest updates and news right in your inbox!</p>
                        <div className='subscriber-container flex gap-4 justify-center'>
                            <input className='input px-3 placeholder:text-xl'   type="text" placeholder='Enter your email' />
                            <button className='subscribe-btn'>Subscribe</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="img-container  w-full flex justify-center mt-[200px]">
                    <img src="../../../images/logo-footer.png" alt="" />
                </div>

                {/* footer option */}
                <div className="footer-optoin-container text-white flex">
                    <div className=" h-[200px] w-1/3 pl-3">
                    <h1 className="text-2xl font-semibold mb-2">About Us</h1>
                    <p className="text-gray-400">We are a passionate team dedicated to providing the best services to our customers. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, laboriosam.</p>
                    </div>

                    <div className=" h-[200px] w-1/3 flex flex-col items-center ">
                    <h1 className="text-2xl font-semibold mb-2">Quick Links</h1>
                    <ul className="text-gray-400">
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    </div>
                    <div className=" h-[200px] w-1/3">
                    <h1 className="text-2xl font-semibold mb-2">Subscribe</h1>
                    <p className="text-gray-400">Subscribe to our newsletter for the latest updates. </p>

                    <div className="border-2 border-gray-600 inline-block rounded-xl overflow-hidden mt-3">
                        <input className="px-2 py-2 placeholder:text-[18px]" placeholder="Enter your email" type="text" name="" id="" />
                        <button className="px-4 py-2 bg-[#EB8787] text-black font-semibold">Subscribe</button>
                    </div>

                    </div>
                </div>
            </footer>
            </div>
            
        </div>
    );
};

export default Footer;