import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";

import { v4 as uuid } from "uuid";
import PokemonTeamAccordion from "../components/PokemonTeamAccordion";
import { Typography } from "@material-ui/core";

const Home = () => {
  const [cards, setCard] = useState([]);

  const addCard = () => {
    const card = { id: uuid() };
    let newCards = [...cards, card];
    setCard(newCards);
  };

  const handleDelete = (id) => {
    const newCards = cards.filter((card) => {
      return card.id !== id;
    });
    setCard({ newCards });
  };

  const cardList = cards.length ? (
    cards.map((card) => {
      return (
        <PokemonTeamAccordion
          cardId={card.id}
          key={card.id}
          handleDelete={handleDelete}
        />
      );
    })
  ) : (
    <Typography variant="h3">The team is empty</Typography>
  );

  return (
    <div>
      <Navbar addCard={addCard} />
      {cardList}
    </div>
  );
};

export default Home;
