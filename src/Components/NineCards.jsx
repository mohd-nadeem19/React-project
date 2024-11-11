

function NineCards(props){
    return(
        <div className="flex">
        <div className="bg-[#F1DDC9] w-[110px] h-[110px] relative top-[250px]">
            <img src={ props.img } alt="" className="relative top-[15px] w-[100px] h-[100px] " />
        </div>
        <p className="relative top-[250px] left-[20px] w-[120px] h-[68px] text-left font-Taviraj font-[600px] text-[#333333]">{ props.title }</p>

        <p className="relative top-[320px] left-[-100px] font-Taviraj font-semibold text-xl ">{ props.price }</p>

        </div>
        
    );
}
export default NineCards;