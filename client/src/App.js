import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { Logo } from './Logo';
import Header from './Components/Layout/Header';
import { Switch, Route } from 'react-router-dom';
import Recipes from './Views/Recipes';
import Login from './Views/Login';
import Register from './Views/Register';
import Detail from './Views/Detail';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Switch>
        <Route path="/recipes">
          <Recipes />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Box textAlign="center" fontSize="xl">
            <Grid minH="80vh" p={3}>
              <VStack spacing={8}>
                <Logo h="40vmin" mt="20vh" pointerEvents="none" />
                <Text>
                  Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
                </Text>
                <Link
                  color="teal.500"
                  href="https://chakra-ui.com"
                  fontSize="2xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn Chakra
                </Link>
              </VStack>
            </Grid>
          </Box>{' '}
        </Route>
      </Switch>
    </ChakraProvider>
  );
}

export default App;
