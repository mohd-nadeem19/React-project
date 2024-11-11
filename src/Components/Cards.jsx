

function Cards(props) {
    return (
        <div className="relative top-[500px] bg-white w-[255px] h-[280px] ">

            <img src={props.img} alt="image" className="w-[150px] h-[150px] relative left-[50px] top-[-60px] " />

            <div className="flex flex-col items-center  w-[200px] relative left-[18px] top-[-50px]">


                <h2 className="font-
                  Taviraj text-xl text-[#333333] leading-[32px] font-semibold relative top-3 left-[-10px]">{props.heading}</h2>



                <p className="text-[#777777] relative top-4 right-[39px] ">{props.offer}</p>



                <h3 className="text-[#777777] relative top-4 right-[24px] line-through decoration-[#777777]">
                    {props.title}
                </h3>



                <p className="text-[#333333] relative top-6 right-4 text-xl">{props.price}</p>



            </div>


        </div>
    );
}

export default Cards;