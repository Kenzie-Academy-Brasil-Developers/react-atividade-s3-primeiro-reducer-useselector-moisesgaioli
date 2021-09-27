import { useSelector } from "react-redux";
import "./styles.css"

const FruitsPage = () => {

  const fruits = useSelector((state) => state.fruits);

  return (
    <>
      {fruits.map((fruit) => (
        <p className="card" key={fruit}> {fruit} </p>
      ))}
    </>
  );
}

export default FruitsPage;