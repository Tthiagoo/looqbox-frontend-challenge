import React, { useState, useEffect } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Heading } from '@chakra-ui/layout';
import {
    Box,
    Flex,
    Image,
    Input,
    InputLeftElement,
    InputGroup,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react';
import { ButtonColorMode } from '../components/ButtonColorMode';
import ButtonCustomSearch from '../components/ButtomCustomSearch';

import { api } from '../api/api';
import ButtomCustomLoad from '../components/ButtomCustomLoad';
import GridPokemon from '../components/GridPokemon';

export default function Search() {
    const bgSearch = useColorModeValue('gray.100', 'gray.700');
    const [namePokemon, setNamePokemon] = useState('');
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    async function handleSearch() {
        setLoading(true);
        try {
            const nameLower = namePokemon.toLocaleLowerCase();
            const response = await api.get(`pokemon/${nameLower}`);
            setPokemons([response.data]);
            setLoading(false);
            setPage(0);
        } catch (err) {
            setLoading(false);
            return toast({
                title: 'Error ',
                description: 'Nenhum pokémon encontrado',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    }

    async function LoadList() {
        setLoading(true);
        try {
            const response = await api.get(`pokemon?offset=${page}&limit=4`);
            const { results } = response.data;

            setPokemons(oldValues => {
                return [...oldValues, ...results];
            });
            setPage(page + 4);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setPage(0);
        setPokemons([]);
        async function Load() {
            await LoadList();
        }
        Load();
    }, []);

    return (
        <Flex flexDirection="column" h="100vh">
            <Flex flexDirection="row" justifyContent="space-between" h="10%">
                <ButtonColorMode aria-label="" />
                <Image
                    m="5px"
                    src="https://i.pinimg.com/originals/0f/bd/f1/0fbdf1c2d327de0c57a364ef64a6c3c4.png"
                />
            </Flex>

            <Flex
                h={{ base: '11%', md: '9%', lg: '4%', xl: '1%' }}
                justifyContent="center"
                alignSelf={{ xl: 'center' }}
                flexDirection="column"
                p={{ base: '5%', xl: '3.5%' }}
                w={{ xl: '90%' }}
            >
                <Heading mb="15px">Pokedex</Heading>
                <Flex flexDir="row">
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<SearchIcon color="gray.500" />}
                        />
                        <Input
                            placeholder="Pesquise um Pokémon"
                            press
                            variant="filled"
                            value={namePokemon}
                            onChange={e => setNamePokemon(e.target.value)}
                        />
                    </InputGroup>
                    <ButtonCustomSearch
                        Loading={loading}
                        search={handleSearch}
                        pokeName={namePokemon}
                    />
                </Flex>
            </Flex>

            <Flex
                alignSelf="center"
                justifySelf="center"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                backgroundColor={bgSearch}
                m={{ base: '15px', xl: '8px' }}
                borderRadius="10px"
                w={{ xl: '95%' }}
                overflow="hidden"
                p={{ base: '3.5%', xl: '1%' }}
            >
                <GridPokemon pokeList={pokemons} />

                <Box>
                    <ButtomCustomLoad
                        Loading={loading}
                        functionLoad={LoadList}
                    />
                </Box>
            </Flex>
        </Flex>
    );
}
