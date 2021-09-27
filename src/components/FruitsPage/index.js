import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFruit } from "../../store/modules/fruits/actions";
import "./styles.css";

function FruitsPage() {
  const [fruit, setFruit] = useState("");
  const dispatch = useDispatch();
  const fruits = useSelector((state) => state.fruits);

  const handleAddFruit = () => dispatch(addFruit(fruit));

  return (
    <>
        <div className="input-container">
            <input placeholder="Digite o nome da fruta" className="input" onChange={(e) => setFruit(e.target.value)} />
            <button className="btn" onClick={handleAddFruit}>Adicionar fruta</button>
        </div>

        <div className="card-container">
            {fruits.map((fruit) => (
                <p className="card" key={fruit}> {fruit} </p>
            ))}
        </div>
    </>
  );
}

export default FruitsPage;  