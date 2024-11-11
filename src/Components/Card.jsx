import Cards from "./Cards";


function Card() {

    return (
        <div className="flex gap-4">
            <Cards
                img="https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2F0Y2h8ZW58MHx8MHx8fDA%3D"
                heading="Singo Maple"
                offer="20% Off"
                title="Rp 1.500.000"
                price="Rp 1.264.000" 
            />
            <Cards
                img="https://images.unsplash.com/photo-1444881421460-d838c3b98f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdhdGNofGVufDB8fDB8fHww"
                heading="Singo Maple"
                offer="20% Off"
                title="Rp 1.500.000"
                price="Rp 1.264.000"
            />
            <Cards
                img="https://images.unsplash.com/photo-1526045431048-f857369baa09?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                heading="Singo Maple"
                offer="20% Off"
                title="Rp 1.500.000"
                price="Rp 1.264.000" 
            />
            <Cards
                img="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"
                heading="Singo Maple"
                offer="20% Off"
                title="Rp 1.500.000"
                price="Rp 1.264.000" />
                
        </div>
    );

};

export default Card;