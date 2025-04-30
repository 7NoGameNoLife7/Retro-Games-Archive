import { useParams } from "react-router";

function FicheGame() {
   const{ id } = useParams();
    return <h1>Hello from Fiche {id}</h1>;
    
}

export default FicheGame;
