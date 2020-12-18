import React, { useState } from "react";
import {
  AccordionDetails,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Axios from "axios";

const PokemonCardDetail = ({ cardId, handleAdd, pokedata, handleDelete }) => {
  const disabledAddButton = pokedata.length > 5 ? true : false;
  const [state, setstate] = useState("");
  const [pokerawdata, setPokerawdata] = useState(0);
  const handleChange = (e) => {
    setstate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${state}`)
      .then((res) => setPokerawdata(res.data))
      .catch(() => setPokerawdata(0));
  };

  return (
    <div>
      <AccordionDetails>
        <FormControl component="form" fullWidth onSubmit={handleSubmit}>
          <InputLabel>Enter your pokemon here!</InputLabel>
          <Input
            endAdornment={
              <InputAdornment position="end">
                <IconButton type="submit">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            onChange={handleChange}
            value={state}
          ></Input>
        </FormControl>
      </AccordionDetails>
      <AccordionDetails>
        {pokerawdata === 0 ? (
          <Typography>There's no pokemon registered with that name</Typography>
        ) : (
          pokerawdata.types.map((type) => <Button>{type.type.name}</Button>)
        )}
      </AccordionDetails>
      <Divider />
      <Button
        onClick={() => {
          handleDelete(cardId);
        }}
        // disabled={disabledDeleteButton}
      >
        Delete Team
      </Button>
      <Button
        onClick={() => {
          handleAdd(pokerawdata);
          setstate("");
        }}
        disabled={disabledAddButton}
      >
        Add Pokemon
      </Button>
    </div>
  );
};

export default PokemonCardDetail;
