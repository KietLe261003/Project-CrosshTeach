import cat from "../assets/Cat.svg"
import cat1 from "../assets/Cat1.svg"
import cat2 from "../assets/Cat2.svg"
import cat3 from "../assets/Cat3.svg";
function ListCatLeg() {
    return ( 
        <>
            <img src={cat} alt="Hình con mèo" className=" absolute top-[130px] right-[250px]"/>
            <img src={cat1} alt="Hình con mèo" className=" absolute top-[150px] right-[180px]"/>
            <img src={cat2} alt="Hình con mèo" className=" absolute top-[230px] right-[150px]"/>
            <img src={cat3} alt="Hình con mèo" className=" absolute top-[280px] right-[80px]"/>
        </>
     );
}

export default ListCatLeg;