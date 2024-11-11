

function RecentNews() {

    return (
        <div>
            <div className="relative top-[580px] ">
                <h1 className=" font-Taviraj font-[500px] text-[36px] text-[#333333] relative left-[-490px]">Recently News</h1>

                <div className="w-[100px] h-[1px] bg-[#333333]"></div>
            </div>

            <div className="w-full">
                <p className="relative left-[18px] top-[800px] text-left  font-Taviraj font-[400px] text-xl text-[#777777]" >Where To Travel</p>
                <p className="relative top-[830px] left-[15px]  w-[350px] h-[96px] text-left font-Taviraj font-[500px] text-[36px] text-[#333333]">Matoa Where To Travel? Yogyakarta</p>

            </div>

            <button className="relative top-[900px] border-2 border-[#D84727] flex items-center left-[20px] rounded-none text-[#D84727] px-12 py-4 ">
                Discover
            </button>

            <div className="relative top-[400px] left-[620px] w-[600px] h-[500px] bg-[#F1DDC9] "></div>
            <img src="https://images.unsplash.com/photo-1639762738624-8c96f2137168?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className=" relative left-[400px] top-[100px] w-[550px] h-[400px]" />

        </div>

    );
};
export default RecentNews;