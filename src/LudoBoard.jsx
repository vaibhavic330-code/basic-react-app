import { useState } from "react";

export default function LudoBoard (){
    let  [moves, setMoves] = useState({
        blue: 0,
        red: 0,
        yellow: 0,
        green: 0
    });

    let [arr, SetArr] = useState(["no movs"]);

    // --- BLUE BUTTON ---
    let updateBlue = () =>{
        // update object state
        setMoves((prevMoves)=>{
            return { ...prevMoves, blue: prevMoves.blue + 1 };
        });

        // update array state
        SetArr((prevArr) => {
            const newArr = [...prevArr, "blue moves"];
            console.log(newArr);
            return newArr;
        });
    };

    // --- YELLOW BUTTON ---
    let updateYellow = () =>{
        setMoves((prevMoves)=>{
            return { ...prevMoves, yellow: prevMoves.yellow + 1 };
        });

        SetArr((prevArr) => {
            const newArr = [...prevArr, "yellow moves"];
            console.log(newArr);
            return newArr;
        });
    };

    return(
        <div>
            <p>Game Begins!</p>
            <p>{arr.join(", ")}</p>

            <div className="board">
                <p>Blue moves = {moves.blue} </p>
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>

                <p>Yellow moves = {moves.yellow} </p>
                <button style={{backgroundColor: "yellow"}} onClick={updateYellow}>+1</button>

                <p>Red moves = {moves.red}</p>
                <button style={{backgroundColor: "red"}}>+1</button>

                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor: "green"}}>+1</button>
            </div>
        </div>
    );
}
