import React from 'react';
import { Link } from 'react-router-dom';
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
} from '@chakra-ui/react';
import { PasswordField } from '../Components/PasswordField';

const Register = () => {
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
            }}
          >
            <Stack spacing="6">
              <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </FormControl>
              <PasswordField />
              <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
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
