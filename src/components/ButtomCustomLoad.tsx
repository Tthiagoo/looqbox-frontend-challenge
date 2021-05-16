import React from 'react';
import { Button} from '@chakra-ui/react';

export default function ButtomCustomLoad({ Loading, functionLoad }) {
    return (
        <>
            {Loading ? (
                <Button
                    isLoading
                    
                    backgroundColor="black"
                    color="white"
                    ml="20px"
                    mt="20%"
                />
            ) : (
                <Button
                    backgroundColor="black"
                    onClick={functionLoad}
                    mt="10%"
                    color="white"
                    ml="20px"
                >
                    Carregar mais pokemons
                </Button>
            )}
        </>
    );
}
