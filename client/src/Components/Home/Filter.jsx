import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Button,
  HStack,
} from '@chakra-ui/react';

function StatsCard(props) {
  const { title, stat, filter, setfilter } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      color={filter.toUpperCase() === title.toUpperCase() ? 'teal.500' : null}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
    >
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <HStack>
        <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
          {stat}
        </StatNumber>
        <Button
          onClick={() => {
            setfilter(title.toLowerCase());
          }}
          colorScheme="teal"
          size="md"
        >
          Filter
        </Button>
      </HStack>
    </Stat>
  );
}

export default function Filter({ setfilter, filter }) {
  return (
    <Box maxW="7xl" mx={'auto'} mb={7} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}
      >
        Discover All Recipe you want
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          setfilter={setfilter}
          title={'Main Course'}
          stat={'5000 dish'}
          filter={filter}
        />
        <StatsCard
          setfilter={setfilter}
          filter={filter}
          title={'Side Dish'}
          stat={'2000 Dish'}
        />
        <StatsCard
          setfilter={setfilter}
          filter={filter}
          title={'Dessert'}
          stat={'1000 Dish'}
        />
      </SimpleGrid>
    </Box>
  );
}
