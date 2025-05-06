import { useState } from "react";
import { useLoaderData } from "react-router";

function FicheGame() {
  const game = useLoaderData() 
 console.log("game", game) 
  return <h1>Hello from Fiche</h1>;
  <></>;
}

export default FicheGame;
