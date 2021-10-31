import { Center, Heading } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import React, { useEffect, useState } from 'react';
import { Card } from '../Components/Home/Card';
import Filter from '../Components/Home/Filter';
import { CardLayout } from '../Components/Layout/CardLayout';
import { toast } from 'react-toastify';

export default function Recipes() {
  const [recipes, setrecipes] = useState([]);
  const [filter, setfilter] = useState('main course');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=392f16f3019e4a6ab5876c0701cc1f73&type=${filter}&number=100&addRecipeNutrition=true`
        );
        const data = await response.json();
        setrecipes(data.results);
        setLoading(false);
      } catch (err) {
        toast.error('Error fetching recipe');
        setrecipes([]);
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [filter]);
  return (
    <>
      <Filter filter={filter} setfilter={setfilter} />
      {loading ? (
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
        <CardLayout>
          {!recipes || recipes.length === 0 ? (
            <Center h="100px">
              <Heading>No Recipes or Daily Limit Api Exceeded</Heading>
            </Center>
          ) : (
            recipes.map(recipe => {
              return <Card key={recipe.title} recipe={recipe} />;
            })
          )}
        </CardLayout>
      )}
    </>
  );
}
