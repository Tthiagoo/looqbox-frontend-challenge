import React from 'react';
import { Button, useToast } from '@chakra-ui/react';

export default function ButtomCustomSearch({ Loading, pokeName = '', search }) {
    const toast = useToast();
    return (
        <>
            {Loading ? (
                <Button
                    isLoading
                    backgroundColor="black"
                    color="white"
                    ml="20px"
                />
            ) : (
                <Button
                    backgroundColor="black"
                    color="white"
                    ml="20px"
                    onClick={() =>
                        pokeName
                            ? search()
                            : toast({
                                  title: 'Error ',
                                  description: 'Digite o nome de um pokémon',
                                  status: 'error',
                                  duration: 3000,
                                  isClosable:true,
                              })
                    }
                >
                    Pesquisar
                </Button>
            )}
        </>
    );
}
