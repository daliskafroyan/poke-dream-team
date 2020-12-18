import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const Navbar = (props) => {
  const { addCard } = props;
  // const handleAdd = (e) => {
  //   e.preventDefault();
  //   addPokemon;
  // };

  return (
    <div>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Container>
            <Typography variant="h5">Poke Dream Team</Typography>
            <Box position="absolute" right="10%" top="5%">
              <Fab color="primary" aria-label="add">
                <AddIcon onClick={addCard} />
              </Fab>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
