import { Button } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import {
  Box,
  Heading,
  Center,
  Stack,
  Text,
  List,
  ListIcon,
  ListItem,
  HStack,
  Divider,
} from '@chakra-ui/layout';
import React, { useState, useEffect } from 'react';
import Ingridients from '../Components/Detail/Ingridients';
import { DetaiLayout } from '../Components/Layout/DetailLayout';
import Nutrients from '../Components/Detail/Nutrients';
import { useDisclosure } from '@chakra-ui/hooks';
import Instruction from '../Components/Detail/Instruction';
import { useParams } from 'react-router';
import { Spinner } from '@chakra-ui/spinner';
import { useDispatch, useSelector } from 'react-redux';
import { actionAddFAVORITEUser } from '../store/actions/actionFavorite';
import { toast } from 'react-toastify';

export default function Detail() {
  const { favorites } = useSelector(state => state.favoriteState);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [recipe, setRecipe] = useState({});
  const [instruction, setinstruction] = useState([]);
  const [loading, setLoading] = useState(false);
  let { id } = useParams();
  const addFavorite = () => {
    if (!localStorage.getItem('access_token')) {
      toast.warning('Login First to Favorite');
    } else if (favorited) {
      toast.warning('Already Favorited');
    } else {
      dispatch(actionAddFAVORITEUser(recipe));
    }
  };
  const favorited = favorites.find(i => Number(i.IngId) === Number(recipe.id));

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=392f16f3019e4a6ab5876c0701cc1f73`
    )
      .then(response => response.json())
      .then(data => {
        setRecipe(data);
      })
      .catch(err => console.log(err));

    fetch(
      `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=392f16f3019e4a6ab5876c0701cc1f73`
    )
      .then(response => response.json())
      .then(data => {
        if (data[0]) {
          setinstruction(data[0].steps);
        }
      })
      .catch(err => console.log(err));
    setLoading(false);
  }, [id]);

  return (
    <>
      {!recipe.title || loading ? (
        <Center h="100px">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="teal.500"
            size="xl"
          />
        </Center>
      ) : null}
      <Instruction
        instructions={instruction}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Center my={3}>
        <Heading>{recipe.title}</Heading>
      </Center>
      <Divider />
      <DetaiLayout>
        <Box
          rowSpan={2}
          role={'group'}
          p={6}
          mt={10}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
        >
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${recipe.image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}
          >
            <Image
              mx={'auto'}
              rounded={'lg'}
              objectFit={'cover'}
              height={230}
              src={recipe.image}
              alt={recipe.title}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'}>
              {recipe.summary}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {recipe?.dishTypes?.join(', ').toUpperCase()}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                ${recipe.pricePerServing}
              </Text>
              <Text color={'gray.600'}>Per Serving</Text>
            </Stack>
          </Stack>
        </Box>
        <Box role={'group'} rowSpan={2} minH="50vh">
          <Center py={6}>
            <Box
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'md'}
              overflow={'hidden'}
            >
              <Stack
                textAlign={'center'}
                p={6}
                color={useColorModeValue('gray.800', 'white')}
                align={'center'}
              >
                <HStack>
                  {recipe?.cuisines?.map(item => {
                    return (
                      <Text
                        key={item + 'cuisine'}
                        fontSize={'sm'}
                        fontWeight={500}
                        bg={'green.400'}
                        p={2}
                        px={3}
                        rounded={'full'}
                      >
                        {item}
                      </Text>
                    );
                  })}
                </HStack>

                <Stack direction={'row'} align={'center'} justify={'center'}>
                  <Text fontSize={'3xl'}>Health Score : </Text>
                  <Text fontSize={'6xl'} fontWeight={800}>
                    {recipe.healthScore}
                  </Text>
                  <Text color={'gray.500'}>/100</Text>
                </Stack>
              </Stack>

              <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon
                      as={recipe.veryHealthy ? CheckIcon : CloseIcon}
                      color={recipe.veryHealthy ? 'green.400' : 'red.400'}
                    />
                    Healty
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={recipe.vegetarian ? CheckIcon : CloseIcon}
                      color="green.400"
                    />
                    Vegetarian
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={recipe.glutenFree ? CheckIcon : CloseIcon}
                      color={recipe.glutenFree ? 'green.400' : 'red.400'}
                    />
                    Gluten Free
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={recipe.cheap ? CheckIcon : CloseIcon}
                      color={recipe.cheap ? 'green.400' : 'red.400'}
                    />
                    Cheap
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={recipe.dairyFree ? CheckIcon : CloseIcon}
                      color={recipe.dairyFree ? 'green.400' : 'red.400'}
                    />
                    Dairy Free
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={recipe.veryPopular ? CheckIcon : CloseIcon}
                      color={recipe.veryPopular ? 'green.400' : 'red.400'}
                    />
                    Popular
                  </ListItem>
                </List>

                <Button
                  mt={10}
                  w={'full'}
                  bg={'green.400'}
                  color={'white'}
                  rounded={'xl'}
                  boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                  _hover={{
                    bg: 'green.500',
                  }}
                  _focus={{
                    bg: 'green.500',
                  }}
                  onClick={() => addFavorite()}
                >
                  Add To Favorites
                </Button>
                <Button
                  mt={3}
                  w={'full'}
                  bg={'green.400'}
                  color={'white'}
                  rounded={'xl'}
                  boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                  _hover={{
                    bg: 'green.500',
                  }}
                  _focus={{
                    bg: 'green.500',
                  }}
                  onClick={onOpen}
                >
                  See Instruction{' '}
                </Button>
              </Box>
            </Box>
          </Center>
        </Box>
        <Box
          role={'group'}
          p={6}
          mt={10}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
        >
          <Center>
            <Heading my={5} fontSize={'lg'}>
              Ingredients
            </Heading>
          </Center>
          <Ingridients ingredients={recipe?.extendedIngredients} />
        </Box>
        <Box
          role={'group'}
          p={6}
          mt={10}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
        >
          <Center>
            <Heading my={5} fontSize={'lg'}>
              Nutrient
            </Heading>
          </Center>
          <Nutrients nutrients={recipe?.nutrition?.nutrients} />
        </Box>
      </DetaiLayout>
    </>
  );
}
