import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { Logo } from '../../Logo';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useColorModeValue } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { actionLogout } from '../../store/actions/actionUser';

const MenuItems = props => {
  const { children, isLast, to = '/', ...rest } = props;
  const colorMode = useColorModeValue('gray.800', 'white');

  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 6 }}
      color={colorMode}
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const Header = props => {
  const dispatch = useDispatch();
  const { accesstoken } = useSelector(state => state.usersState);

  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);
  const colorMode = useColorModeValue('white', 'gray.800');
  useEffect(() => {}, [dispatch, accesstoken]);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={3}
      bg={['teal.500', 'teal.500', 'teal.500', 'teal.500']}
      {...props}
    >
      <Flex align="center">
        <Logo
          w="40px"
          color={['white', 'white', 'primary.500', 'primary.500']}
        />
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align={['center', 'center', 'center', 'center']}
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <MenuItems to="/">Home</MenuItems>
          <MenuItems to="/recipes">Recipes </MenuItems>
          {!localStorage.getItem('access_token') ? (
            <>
              <MenuItems to="/register">
                <Button
                  size="sm"
                  rounded="md"
                  color={colorMode}
                  bgGradient="linear(to-r, teal.200, pink.500)"
                  _hover={{
                    bg: ['teal.100', 'teal.100', 'teal.600', 'teal.600'],
                  }}
                >
                  Create Account
                </Button>
              </MenuItems>
              <MenuItems to="/login" isLast>
                <Button
                  size="sm"
                  rounded="md"
                  color={colorMode}
                  bgGradient="linear(to-r, teal.200, pink.500)"
                  _hover={{
                    bg: ['teal.100', 'teal.100', 'teal.600', 'teal.600'],
                  }}
                >
                  Login
                </Button>
              </MenuItems>
            </>
          ) : null}

          {localStorage.getItem('access_token') ? (
            <>
              <MenuItems to="/favorites">
                <Button
                  size="sm"
                  rounded="md"
                  color={colorMode}
                  bgGradient="linear(to-r, teal.200, pink.500)"
                  _hover={{
                    bg: ['teal.100', 'teal.100', 'teal.600', 'teal.600'],
                  }}
                >
                  My Favorites
                </Button>
              </MenuItems>
              <MenuItems to="/" isLast>
                <Button
                  size="sm"
                  rounded="md"
                  color={colorMode}
                  bgGradient="linear(to-r, teal.200, pink.500)"
                  _hover={{
                    bg: ['teal.100', 'teal.100', 'teal.600', 'teal.600'],
                  }}
                  onClick={() => {
                    dispatch(actionLogout());
                    localStorage.clear();
                  }}
                >
                  Logout
                </Button>
              </MenuItems>
            </>
          ) : null}

          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
