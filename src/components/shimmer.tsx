import { Flex, Box, Skeleton } from '@chakra-ui/react';
import React from 'react';

export default function ShimmerEffect() {
    return (
        <Flex alignItems="center" justifyContent="center" h="100vh">
            <Flex
                flexDirection="column"
                boxShadow="lg"
                bg="white"
                w="95%"
                h="95%"
                borderRadius="20px"
                bgColor="gray.300"
            >
                <Skeleton
                    height="50px"
                    w={{ base: '40%', xl: '20%' }}
                    mt={{ base: '7%', xl: '4%' }}
                    ml="5%"
                />
                <Skeleton
                    height="30px"
                    w="10%"
                    mt="1%"
                    ml="5%"
                    borderRadius="5"
                />
                <Flex
                    flexDirection={{ base: 'column', xl: 'row' }}
                    w="100%"
                    h={{ base: '90%', xl: '70%' }}
                    alignItems="center"
                    justifyContent={{ base: 'center', xl: 'space-around' }}
                >
                    <Skeleton
                        height={{ base: '30%', xl: '50%' }}
                        w={{ base: '50%', xl: '20%' }}
                        mt="4%"
                        borderRadius="8"
                    />
                    <Box
                        bgColor="gray.400"
                        height={{ base: '70%', xl: '80%' }}
                        w={{ base: '100%', xl: '50%' }}
                        mt={{ base: '10%', xl: '0%' }}
                        borderTopRadius={{ base: '30', xl: 'none' }}
                        borderRadius={{ xl: '10' }}
                        p="5"
                    >
                        <Flex
                            flexDirection="row"
                            justifyContent="space-around"
                            w="100%"
                            h="10%"
                            mb="5%"
                        >
                            <Skeleton height="100%" w="30%" />
                            <Skeleton height="100%" w="30%" />
                            <Skeleton height="100%" w="30%" />
                        </Flex>

                        <Skeleton height="80%" w="100%" />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
}
