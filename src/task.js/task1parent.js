import Studentcard from "./task1cardchild";
function Card() {
    return (
        <Studentcard
            image="https://i.pinimg.com/736x/7c/23/52/7c235299b207afdce2e4a2305b227865.jpg"
            name="Ananya"
            age={21}
            college="Vignan Institute"
            branch="CSE"
            email="ananya@gmail.com"
        />
    );
}
export default Card;