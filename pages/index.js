import {Box, Flex, Heading, Text, Button} from '@chakra-ui/core';
import NextLink from 'next/link';

// import {withSignInRedirect} from '../components/Auth';
import Logo from '../components/Logo';

export const Container = (props) => <Box width="full" maxWidth="1280px" mx="auto" px={6} {...props} />;

const Header = ({onSignIn}) => (
    <Box as="header" width="full" height="4rem">
        <Box width="full" mx="auto" px={6} pr={[1, 6]} height="100%">
            <Flex size="100%" p={[0, 6]} pl={[0, 4]} align="center" justify="space-between">
                <Box as="a" d="block" href="/" aria-label="breezer, Back to homepage">
                    <Logo w="100px" />
                </Box>
                <Flex align="center">
                    <Button onClick={onSignIn} variant="ghost">
                        {'Sign In'}
                    </Button>
                    <NextLink href="/deals" passHref>
                        <Button as="a">{'Find Deals'}</Button>
                    </NextLink>
                </Flex>
            </Flex>
        </Box>
    </Box>
);

const HomePage = ({onSignIn}) => {
    return (
        <Box h="100vh">
            <Header onSignIn={onSignIn} />
            <Box as="section" pt={40} pb={24}>
                <Container>
                    <Box maxW="xl" mx="auto" textAlign="center">
                        <Heading as="h1" size="xl" fontWeight="black">
                            It ain't so hard...
                        </Heading>

                        <Text opacity="0.7" fontSize="lg" mt="6">
                            BREEZER helps you quickly define your requirements, so that you can test your assumptions
                            and validate the outcome, almost gauranting success!
                        </Text>

                        <Box mt="6">
                            <NextLink href="/signup" passHref>
                                <Button size="lg" as="a" variantColor="teal">
                                    Let's Get Started
                                </Button>
                            </NextLink>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

// export default withSignInRedirect(HomePage);
export default HomePage;
