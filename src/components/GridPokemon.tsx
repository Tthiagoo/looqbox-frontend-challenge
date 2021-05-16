import { Grid, ScaleFade } from "@chakra-ui/react";
import React, { memo } from "react";
import CardPokemon from "./CardPokemon";

function GridPokemon({pokeList}){
    return(
        <Grid
        overflowY="scroll"
        templateColumns={{
            base: 'repeat(2, 10fr)',
            md: 'repeat(3, 10fr)',
            lg: 'repeat(4, 10fr)',
            xl: 'repeat(5, 10fr)',
        }}
        id="Grid"
        w="100%"
        gap={4}
        pt="1%"
    >
        {pokeList.map((poke, index) => (
            <ScaleFade initialScale={0.9} key={index} in={true}>
                <CardPokemon namePokemon={poke.name} key={index} />
            </ScaleFade>
        ))}
    </Grid>
    )
}export default memo(GridPokemon)