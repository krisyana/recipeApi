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
import { ToastContainer } from 'react-toastify';
import Header from './Components/Layout/Header';
import { Switch, Route } from 'react-router-dom';
import Recipes from './Views/Recipes';
import Login from './Views/Login';
import Register from './Views/Register';
import Detail from './Views/Detail';
import 'react-toastify/dist/ReactToastify.css';
import MyFavorites from './Views/MyFavorites';
import PrivateRoute from './Components/Route/PrivateRoute';
import UnauthRoute from './Components/Route/UnauthenthicatedRoute';

function App() {
  return (
    <>
      <ToastContainer autoClose={2000} />
      <ChakraProvider theme={theme}>
        <Header />
        <Switch>
          <Route path="/recipes">
            <Recipes />
          </Route>
          <UnauthRoute path="/login">
            <Login />
          </UnauthRoute>
          <UnauthRoute path="/register">
            <Register />
          </UnauthRoute>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <PrivateRoute path="/favorites">
            <MyFavorites />
          </PrivateRoute>
          <Route path="/">
            <Box textAlign="center" fontSize="xl">
              <Grid minH="80vh" p={3}>
                <VStack spacing={8}>
                  <Logo h="40vmin" mt="20vh" pointerEvents="none" />
                  <Text>
                    Lightning <Code fontSize="xl">Recipes</Code>
                  </Text>
                  <Link
                    color="teal.500"
                    href="/recipes"
                    fontSize="2xl"
                    rel="noopener noreferrer"
                  >
                    Discover Recipe
                  </Link>
                </VStack>
              </Grid>
            </Box>{' '}
          </Route>
        </Switch>
      </ChakraProvider>
    </>
  );
}

export default App;
