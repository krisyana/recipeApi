import { Center, Heading } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import React, { useEffect, useState } from 'react';
import { Card } from '../Components/Home/Card';
import Filter from '../Components/Home/Filter';
import { CardLayout } from '../Components/Layout/CardLayout';

export default function Recipes() {
  const [recipes, setrecipes] = useState([]);
  const [filter, setfilter] = useState('main course');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=392f16f3019e4a6ab5876c0701cc1f73&type=${filter}&number=100&addRecipeNutrition=true`
    )
      .then(response => response.json())
      .then(data => setrecipes(data.results))
      .catch(err => {
        console.log(err);
        setrecipes([]);
      })
      .finally(setLoading(false));
  }, [filter]);
  return (
    <>
      <Filter filter={filter} setfilter={setfilter} />
      <CardLayout>
        {!recipes || (recipes.length === 0 && loading === false) ? (
          <Center h="100px">
            <Heading>No Recipes or Daily Limit Api Exceeded</Heading>
          </Center>
        ) : recipes.length === 0 && loading ? (
          <Center h="100px">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="teal.500"
              size="xl"
            />
          </Center>
        ) : (
          recipes.map(recipe => {
            return <Card key={recipe.title} recipe={recipe} />;
          })
        )}
      </CardLayout>
    </>
  );
}
