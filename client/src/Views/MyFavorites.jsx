import { Center, Heading } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import React, { useEffect } from 'react';
import { CardLayout } from '../Components/Layout/CardLayout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFAVORITEs } from '../store/actions/actionFavorite';
import { CardFav } from '../Components/Home/CardFav';

export default function MyFavorites() {
  const dispatch = useDispatch();
  const { favorites, isLoading } = useSelector(state => state.favoriteState);

  useEffect(() => {
    dispatch(fetchFAVORITEs());
  }, [dispatch]);

  return (
    <CardLayout>
      {isLoading && favorites.length === 0 ? (
        <Center h="100px">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="teal.500"
            size="xl"
          />
        </Center>
      ) : !favorites || (favorites.length === 0 && isLoading === false) ? (
        <Center h="100px">
          <Heading>No Favorite Yet</Heading>
        </Center>
      ) : (
        favorites.map(recipe => {
          return <CardFav key={recipe.title + 'favorites'} recipe={recipe} />;
        })
      )}
    </CardLayout>
  );
}
