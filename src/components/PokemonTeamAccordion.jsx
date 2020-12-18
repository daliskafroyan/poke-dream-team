import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  Avatar,
  Box,
  CardMedia,
  Container,
  Fab,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PokemonCardDetail from "./PokemonCardDetail";
import { v4 as uuid } from "uuid";

const useStyles = makeStyles((theme) => ({
  avatarWrapper: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    backgroundColor: "#fff",
  },
}));

const PokemonTeamAccordion = ({ cardId, handleDelete }) => {
  const classes = useStyles();

  const [pokedata, setPokedata] = useState([]);

  const handleAdd = (pokerawdata) => {
    let name = pokerawdata.name;
    let types = pokerawdata.types.map((type) => {
      return type.type.name;
    });
    let id = uuid();
    let pictureUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokerawdata.id}.png`;
    let newPokedata = [...pokedata, { id, name, types, pictureUrl }];
    setPokedata(newPokedata);
  };

  // const handleDelete = (id) => {
  //   const
  // }

  const typeColor = {
    normal: "#BCBCAE",
    poison: "#AA5DA1",
    psychic: "#FA65B5",
    grass: "#8DD850",
    ground: "#E7C758",
    ice: "#96F1FF",
    fire: "#FA5643",
    rock: "#CDBD72",
    dragon: "#8975FF",
    water: "#56AEFF",
    bug: "#C3D21F",
    dark: "#8E6956",
    fighting: "#A85644",
    ghost: "#7975D7",
    steel: "#C4C2DA",
    flying: "#79A4FF",
    electric: "#FDE53C",
    fairy: "#FAADFF",
  };

  // const chipStyle = {
  //   background: `${type.type.name}`,
  //   height: 48,
  //   boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  // };

  return (
    <Container key={cardId}>
      <Box mt={3}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.avatarWrapper}>
              {pokedata.length ? (
                pokedata.map((poke) => {
                  return (
                    <Avatar
                      alt={poke.name}
                      src={poke.pictureUrl}
                      className={classes.avatar}
                    />
                  );
                })
              ) : (
                <Avatar
                  alt="no pokemon"
                  src="https://img.icons8.com/ios-glyphs/60/000000/question-mark.png"
                  className={classes.avatar}
                />
              )}
            </div>
          </AccordionSummary>
          <PokemonCardDetail
            cardId={cardId}
            handleAdd={handleAdd}
            handleDelete={handleDelete}
            pokedata={pokedata}
          />
        </Accordion>
      </Box>
    </Container>
  );
};

export default PokemonTeamAccordion;
