import { FaShoppingCart } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';



function Watch() {
    return (
        <div className="flex relative h-[500px] top-[130px] bg-[#F1DDC9]  ">
            <div>
                <img src="https://s3-alpha-sig.figma.com/img/1fbf/3595/3b70a23b1f37752b786923fd00e2a9ee?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H-xc2ZQpz5viZO3zLuWgNk~557~OFOvw2zkjnIxcXyrlnf38knyk9MbiBJuLdUrE60X6q5i82VFe6rvsRiBndN3LlGgANsWti1inNctAFfeGud90L4hwXOGJYcNwR44kiRoIHpC2NZi6oChFZe-ObcBQk3i2P8IpTzSeT3IwgF5Ho9PObuyOZIIxcC-TyAThtMyWFMukJP7Sk6DZYI3LkfeW2dUlUYPSkZ4Hab1GsauRe8Pd~xSDVHA-F-tLkPVk9jxABxDpL0TFQB0kEtTVO6vZoOx~ehwrbhyUZWmr9WN34rRFDS8iNRFMTr4gi8Go77CMl0WvmB3zrQd~DVL8uA__" alt="" className="relative w-[380px] h-[800px] top-[0px] left-[40px] " />
            </div>

            <div>
                <h2 className="
               Taviraj font-[400px] text-5xl leading-[60px] w-[300px] text-center text-[#333333] relative top-[80px] left-[100px] ">WAY KAMBAS MINI EBONY
                </h2>
                <div className="w-[100px] h-[1px] bg-[#333333] relative top-[80px] left-[120px] "></div>
            </div>

            <p className="w-[400px]  relative top-[230px] right-[190px] text-left">MATOA Way Kambas - This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin.</p>

            <div>
                <h3 className="relative top-[350px] right-[480px] font-Taviraj text-[16px] font-bold ">Descover</h3>
                <div className="w-[60px] h-[1px] bg-[#333333] relative top-[350px] right-[480px]"></div>
            </div>

            <div>
            <button className="relative top-[420px] right-[560px] bg-[#D84727] w-[170px] h-[50px] flex items-center justify-center space-x-3"><FaShoppingCart className="text-white text-[16px]" /><span className='text-white'>Add to cart</span></button>

            <div className='border-2 border-[#D84727] text-[#D84727] w-[100px] h-[50px] relative top-[370px] right-[380px] flex items-center justify-center font-bold text-2xl '>cicil</div>
            </div>

            <div className='border-2 border-[#D84727] h-[42px] w-[60px] relative top-[480px] right-[40px] '><FaChevronLeft className="text-[#D84727] text-[20px] relative top-[10px] left-[8px]" /></div>

            <div className='border-2 border-[#D84727] bg-[#D84727] h-[42px] w-[60px] relative top-[480px] right-[30px] '><FaChevronRight className="text-white text-[20px] relative top-[10px] left-[8px]" /></div>
            





        </div>
    );
};
export default Watch;