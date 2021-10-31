import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Heading,
  Text,
  Flex,
  Divider,
  useColorModeValue,
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { actionAddUsers } from '../store/actions/actionUser';

const Register = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.usersState);

  const [register, setRegister] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const handleChange = event => {
    setRegister({ ...register, [event.target.name]: event.target.value });
  };
  return (
    <Box
      bg={useColorModeValue('gray.50', 'inherit')}
      minH="80vh"
      py="12"
      px={{ base: '4', lg: '8' }}
    >
      <Box maxW="md" mx="auto">
        <Heading textAlign="center" size="xl" fontWeight="extrabold">
          Register new account
        </Heading>
        <Flex align="center" color="gray.300" mt={6}>
          <Box flex="1">
            <Divider borderColor="currentcolor" />
          </Box>
          <Text
            as="span"
            px="3"
            color={useColorModeValue('gray.600', 'gray.400')}
            fontWeight="medium"
          >
            Have an account?
          </Text>
          <Box flex="1">
            <Divider borderColor="currentcolor" />
          </Box>
        </Flex>
        <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
          <Link to="/login">Login</Link>
        </Text>
        <Box
          bg={useColorModeValue('white', 'gray.700')}
          py="8"
          px={{ base: '4', md: '10' }}
          shadow="base"
          rounded={{ sm: 'lg' }}
        >
          <chakra.form
            onSubmit={e => {
              e.preventDefault();
              // your login logic here
              console.log('register created', register);
              dispatch(actionAddUsers(register));
            }}
          >
            <Stack spacing="6">
              <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  name="username"
                  type="text"
                  autoComplete="username"
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={handleChange}
                />
              </FormControl>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter password"
                  onChange={handleChange}
                  name="password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button
                isLoading={loading}
                type="submit"
                colorScheme="blue"
                size="lg"
                fontSize="md"
              >
                Register
              </Button>
            </Stack>
          </chakra.form>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
