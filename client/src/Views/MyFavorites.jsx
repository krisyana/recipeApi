import { Center, Heading } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import React, { useEffect, useState } from 'react';
import { Card } from '../Components/Home/Card';
import { CardLayout } from '../Components/Layout/CardLayout';

export default function MyFavorites() {
  const [favorites, setfavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setLoading(false);
  }, []);

  return (
    <CardLayout>
      {favorites.length === 0 ? (
        <Center h="100px">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="teal.500"
            size="xl"
          />
        </Center>
      ) : !favorites || (favorites.length === 0 && loading === false) ? (
        <Center h="100px">
          <Heading>No Recipes</Heading>
        </Center>
      ) : (
        favorites.map(recipe => {
          return <Card key={recipe.title} recipe={recipe} />;
        })
      )}
    </CardLayout>
  );
}
