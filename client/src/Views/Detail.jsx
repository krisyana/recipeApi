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

export default function Detail() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [recipe, setRecipe] = useState({});
  // const [loading, setLoading] = useState(false);
  // let { id } = useParams();

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(
  //     `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true`
  //   )
  //     .then(response => response.json())
  //     .then(data => setRecipe(data))
  //     .catch(err => console.log(err))
  //     .finally(setLoading(false));
  // }, [id]);

  const recipe = {
    vegetarian: true,
    vegan: true,
    glutenFree: true,
    dairyFree: true,
    veryHealthy: true,
    cheap: false,
    veryPopular: true,
    sustainable: false,
    weightWatcherSmartPoints: 4,
    gaps: 'no',
    lowFodmap: false,
    aggregateLikes: 3689,
    spoonacularScore: 100.0,
    healthScore: 76.0,
    creditsText: 'Full Belly Sisters',
    license: 'CC BY-SA 3.0',
    sourceName: 'Full Belly Sisters',
    pricePerServing: 112.39,
    id: 716426,
    title: 'Cauliflower, Brown Rice, and Vegetable Fried Rice',
    readyInMinutes: 30,
    servings: 8,
    sourceUrl:
      'http://fullbellysisters.blogspot.com/2012/01/cauliflower-fried-rice-more-veggies.html',
    image: 'https://spoonacular.com/recipeImages/716426-312x231.jpg',
    imageType: 'jpg',
    nutrition: {
      nutrients: [
        {
          name: 'Calories',
          title: 'Calories',
          amount: 191.51,
          unit: 'kcal',
          percentOfDailyNeeds: 9.58,
        },
        {
          name: 'Fat',
          title: 'Fat',
          amount: 6.36,
          unit: 'g',
          percentOfDailyNeeds: 9.78,
        },
        {
          name: 'Saturated Fat',
          title: 'Saturated Fat',
          amount: 1.03,
          unit: 'g',
          percentOfDailyNeeds: 6.45,
        },
        {
          name: 'Carbohydrates',
          title: 'Carbohydrates',
          amount: 29.11,
          unit: 'g',
          percentOfDailyNeeds: 9.7,
        },
        {
          name: 'Net Carbohydrates',
          title: 'Net Carbohydrates',
          amount: 23.38,
          unit: 'g',
          percentOfDailyNeeds: 8.5,
        },
        {
          name: 'Sugar',
          title: 'Sugar',
          amount: 3.32,
          unit: 'g',
          percentOfDailyNeeds: 3.68,
        },
        {
          name: 'Cholesterol',
          title: 'Cholesterol',
          amount: 0.0,
          unit: 'mg',
          percentOfDailyNeeds: 0.0,
        },
        {
          name: 'Sodium',
          title: 'Sodium',
          amount: 428.32,
          unit: 'mg',
          percentOfDailyNeeds: 18.62,
        },
        {
          name: 'Protein',
          title: 'Protein',
          amount: 6.85,
          unit: 'g',
          percentOfDailyNeeds: 13.7,
        },
        {
          name: 'Vitamin C',
          title: 'Vitamin C',
          amount: 65.87,
          unit: 'mg',
          percentOfDailyNeeds: 79.85,
        },
        {
          name: 'Vitamin K',
          title: 'Vitamin K',
          amount: 73.09,
          unit: 'µg',
          percentOfDailyNeeds: 69.61,
        },
        {
          name: 'Manganese',
          title: 'Manganese',
          amount: 1.32,
          unit: 'mg',
          percentOfDailyNeeds: 65.81,
        },
        {
          name: 'Copper',
          title: 'Copper',
          amount: 0.48,
          unit: 'mg',
          percentOfDailyNeeds: 24.16,
        },
        {
          name: 'Fiber',
          title: 'Fiber',
          amount: 5.73,
          unit: 'g',
          percentOfDailyNeeds: 22.92,
        },
        {
          name: 'Folate',
          title: 'Folate',
          amount: 89.34,
          unit: 'µg',
          percentOfDailyNeeds: 22.34,
        },
        {
          name: 'Magnesium',
          title: 'Magnesium',
          amount: 87.61,
          unit: 'mg',
          percentOfDailyNeeds: 21.9,
        },
        {
          name: 'Vitamin B6',
          title: 'Vitamin B6',
          amount: 0.42,
          unit: 'mg',
          percentOfDailyNeeds: 20.91,
        },
        {
          name: 'Phosphorus',
          title: 'Phosphorus',
          amount: 188.42,
          unit: 'mg',
          percentOfDailyNeeds: 18.84,
        },
        {
          name: 'Vitamin B1',
          title: 'Vitamin B1',
          amount: 0.25,
          unit: 'mg',
          percentOfDailyNeeds: 16.93,
        },
        {
          name: 'Iron',
          title: 'Iron',
          amount: 2.68,
          unit: 'mg',
          percentOfDailyNeeds: 14.92,
        },
        {
          name: 'Potassium',
          title: 'Potassium',
          amount: 490.13,
          unit: 'mg',
          percentOfDailyNeeds: 14.0,
        },
        {
          name: 'Calcium',
          title: 'Calcium',
          amount: 132.76,
          unit: 'mg',
          percentOfDailyNeeds: 13.28,
        },
        {
          name: 'Vitamin B3',
          title: 'Vitamin B3',
          amount: 2.52,
          unit: 'mg',
          percentOfDailyNeeds: 12.62,
        },
        {
          name: 'Zinc',
          title: 'Zinc',
          amount: 1.69,
          unit: 'mg',
          percentOfDailyNeeds: 11.3,
        },
        {
          name: 'Vitamin B5',
          title: 'Vitamin B5',
          amount: 0.96,
          unit: 'mg',
          percentOfDailyNeeds: 9.62,
        },
        {
          name: 'Vitamin A',
          title: 'Vitamin A',
          amount: 445.78,
          unit: 'IU',
          percentOfDailyNeeds: 8.92,
        },
        {
          name: 'Vitamin B2',
          title: 'Vitamin B2',
          amount: 0.15,
          unit: 'mg',
          percentOfDailyNeeds: 8.55,
        },
        {
          name: 'Selenium',
          title: 'Selenium',
          amount: 4.49,
          unit: 'µg',
          percentOfDailyNeeds: 6.42,
        },
        {
          name: 'Vitamin E',
          title: 'Vitamin E',
          amount: 0.42,
          unit: 'mg',
          percentOfDailyNeeds: 2.82,
        },
      ],
      properties: [
        {
          name: 'Glycemic Index',
          title: 'Glycemic Index',
          amount: 45.69,
          unit: '',
        },
        {
          name: 'Glycemic Load',
          title: 'Glycemic Load',
          amount: 10.77,
          unit: '',
        },
      ],
      flavonoids: [
        {
          name: 'Cyanidin',
          title: 'Cyanidin',
          amount: 0.0,
          unit: 'mg',
        },
        {
          name: 'Petunidin',
          title: 'Petunidin',
          amount: 0.0,
          unit: 'mg',
        },
        {
          name: 'Delphinidin',
          title: 'Delphinidin',
          amount: 0.0,
          unit: 'mg',
        },
        {
          name: 'Malvidin',
          title: 'Malvidin',
          amount: 0.0,
          unit: 'mg',
        },
        {
          name: 'Pelargonidin',
          title: 'Pelargonidin',
          amount: 0.0,
          unit: 'mg',
        },
        {
          name: 'Peonidin',
          title: 'Peonidin',
          amount: 0.0,
          unit: 'mg',
        },
        {
          name: 'Catechin',
          title: 'Catechin',
          amount: 0.0,
          unit: 'mg',
        },
        {
          name: 'Epigallocatechin',
          title: 'Epigallocatechin',
          amount: 0.0,
          unit: 'mg',
        },
        {
          name: 'Epicatechin',
          title: 'Epicatechin',
          amount: 0.0,
          unit: 'mg',
        },
        {
          name: 'Epicatechin 3-gallate',
          title: 'Epicatechin 3-gallate',
          amount: 0.0,
          unit: 'mg',
        },
        {
          name: 'Epigallocatechin 3-gallate',
          title: 'Epigallocatechin 3-gallate',
          amount: 0.0,
          unit: 'mg',
        },
        {
          name: 'Theaflavin',
          title: 'Theaflavin',
          amount: 0.0,
          unit: '',
        },
        {
          name: 'Thearubigins',
          title: 'Thearubigins',
          amount: 0.0,
          unit: '',
        },
        {
          name: 'Eriodictyol',
          title: 'Eriodictyol',
          amount: 0.0,
          unit: '',
        },
        {
          name: 'Hesperetin',
          title: 'Hesperetin',
          amount: 0.0,
          unit: 'mg',
        },
        {
          name: 'Naringenin',
          title: 'Naringenin',
          amount: 0.0,
          unit: 'mg',
        },
        {
          name: 'Apigenin',
          title: 'Apigenin',
          amount: 0.02,
          unit: 'mg',
        },
        {
          name: 'Luteolin',
          title: 'Luteolin',
          amount: 0.25,
          unit: 'mg',
        },
        {
          name: 'Isorhamnetin',
          title: 'Isorhamnetin',
          amount: 0.0,
          unit: '',
        },
        {
          name: 'Kaempferol',
          title: 'Kaempferol',
          amount: 2.27,
          unit: 'mg',
        },
        {
          name: 'Myricetin',
          title: 'Myricetin',
          amount: 0.04,
          unit: 'mg',
        },
        {
          name: 'Quercetin',
          title: 'Quercetin',
          amount: 2.92,
          unit: 'mg',
        },
        {
          name: "Theaflavin-3,3'-digallate",
          title: "Theaflavin-3,3'-digallate",
          amount: 0.0,
          unit: '',
        },
        {
          name: "Theaflavin-3'-gallate",
          title: "Theaflavin-3'-gallate",
          amount: 0.0,
          unit: '',
        },
        {
          name: 'Theaflavin-3-gallate',
          title: 'Theaflavin-3-gallate',
          amount: 0.0,
          unit: '',
        },
        {
          name: 'Gallocatechin',
          title: 'Gallocatechin',
          amount: 0.0,
          unit: 'mg',
        },
      ],
      ingredients: [
        {
          id: 11090,
          name: 'broccoli',
          amount: 0.25,
          unit: 'cups',
          nutrients: [
            {
              title: 'Mono Unsaturated Fat',
              name: 'Mono Unsaturated Fat',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Fat',
              name: 'Fat',
              amount: 0.08,
              unit: 'g',
            },
            {
              title: 'Vitamin B3',
              name: 'Vitamin B3',
              amount: 0.15,
              unit: 'mg',
            },
            {
              title: 'Carbohydrates',
              name: 'Carbohydrates',
              amount: 1.51,
              unit: 'g',
            },
            {
              title: 'Vitamin A',
              name: 'Vitamin A',
              amount: 141.73,
              unit: 'IU',
            },
            {
              title: 'Vitamin B6',
              name: 'Vitamin B6',
              amount: 0.04,
              unit: 'mg',
            },
            {
              title: 'Iron',
              name: 'Iron',
              amount: 0.17,
              unit: 'mg',
            },
            {
              title: 'Potassium',
              name: 'Potassium',
              amount: 71.89,
              unit: 'mg',
            },
            {
              title: 'Vitamin C',
              name: 'Vitamin C',
              amount: 20.29,
              unit: 'mg',
            },
            {
              title: 'Protein',
              name: 'Protein',
              amount: 0.64,
              unit: 'g',
            },
            {
              title: 'Vitamin B2',
              name: 'Vitamin B2',
              amount: 0.03,
              unit: 'mg',
            },
            {
              title: 'Poly Unsaturated Fat',
              name: 'Poly Unsaturated Fat',
              amount: 0.01,
              unit: 'g',
            },
            {
              title: 'Magnesium',
              name: 'Magnesium',
              amount: 4.78,
              unit: 'mg',
            },
            {
              title: 'Vitamin D',
              name: 'Vitamin D',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Calcium',
              name: 'Calcium',
              amount: 10.69,
              unit: 'mg',
            },
            {
              title: 'Caffeine',
              name: 'Caffeine',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Saturated Fat',
              name: 'Saturated Fat',
              amount: 0.01,
              unit: 'g',
            },
            {
              title: 'Phosphorus',
              name: 'Phosphorus',
              amount: 15.02,
              unit: 'mg',
            },
            {
              title: 'Vitamin E',
              name: 'Vitamin E',
              amount: 0.18,
              unit: 'mg',
            },
            {
              title: 'Vitamin B1',
              name: 'Vitamin B1',
              amount: 0.02,
              unit: 'mg',
            },
            {
              title: 'Folate',
              name: 'Folate',
              amount: 14.33,
              unit: 'µg',
            },
            {
              title: 'Sodium',
              name: 'Sodium',
              amount: 7.51,
              unit: 'mg',
            },
            {
              title: 'Vitamin B5',
              name: 'Vitamin B5',
              amount: 0.13,
              unit: 'mg',
            },
            {
              title: 'Net Carbohydrates',
              name: 'Net Carbohydrates',
              amount: 0.92,
              unit: 'g',
            },
            {
              title: 'Calories',
              name: 'Calories',
              amount: 7.74,
              unit: 'kcal',
            },
            {
              title: 'Cholesterol',
              name: 'Cholesterol',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin B12',
              name: 'Vitamin B12',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Selenium',
              name: 'Selenium',
              amount: 0.57,
              unit: 'µg',
            },
            {
              title: 'Vitamin K',
              name: 'Vitamin K',
              amount: 23.11,
              unit: 'µg',
            },
            {
              title: 'Fiber',
              name: 'Fiber',
              amount: 0.59,
              unit: 'g',
            },
            {
              title: 'Folic Acid',
              name: 'Folic Acid',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Copper',
              name: 'Copper',
              amount: 0.01,
              unit: 'mg',
            },
            {
              title: 'Choline',
              name: 'Choline',
              amount: 4.25,
              unit: 'mg',
            },
            {
              title: 'Alcohol',
              name: 'Alcohol',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Zinc',
              name: 'Zinc',
              amount: 0.09,
              unit: 'mg',
            },
            {
              title: 'Manganese',
              name: 'Manganese',
              amount: 0.05,
              unit: 'mg',
            },
            {
              title: 'Sugar',
              name: 'Sugar',
              amount: 0.39,
              unit: 'g',
            },
          ],
        },
        {
          id: 11135,
          name: 'cauliflower',
          amount: 0.13,
          unit: 'head',
          nutrients: [
            {
              title: 'Mono Unsaturated Fat',
              name: 'Mono Unsaturated Fat',
              amount: 0.01,
              unit: 'g',
            },
            {
              title: 'Fat',
              name: 'Fat',
              amount: 0.2,
              unit: 'g',
            },
            {
              title: 'Vitamin B3',
              name: 'Vitamin B3',
              amount: 0.36,
              unit: 'mg',
            },
            {
              title: 'Carbohydrates',
              name: 'Carbohydrates',
              amount: 3.57,
              unit: 'g',
            },
            {
              title: 'Vitamin A',
              name: 'Vitamin A',
              amount: 0.0,
              unit: 'IU',
            },
            {
              title: 'Vitamin B6',
              name: 'Vitamin B6',
              amount: 0.13,
              unit: 'mg',
            },
            {
              title: 'Iron',
              name: 'Iron',
              amount: 0.3,
              unit: 'mg',
            },
            {
              title: 'Potassium',
              name: 'Potassium',
              amount: 214.91,
              unit: 'mg',
            },
            {
              title: 'Vitamin C',
              name: 'Vitamin C',
              amount: 34.64,
              unit: 'mg',
            },
            {
              title: 'Protein',
              name: 'Protein',
              amount: 1.38,
              unit: 'g',
            },
            {
              title: 'Vitamin B2',
              name: 'Vitamin B2',
              amount: 0.04,
              unit: 'mg',
            },
            {
              title: 'Poly Unsaturated Fat',
              name: 'Poly Unsaturated Fat',
              amount: 0.01,
              unit: 'g',
            },
            {
              title: 'Magnesium',
              name: 'Magnesium',
              amount: 10.78,
              unit: 'mg',
            },
            {
              title: 'Vitamin D',
              name: 'Vitamin D',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Calcium',
              name: 'Calcium',
              amount: 15.81,
              unit: 'mg',
            },
            {
              title: 'Caffeine',
              name: 'Caffeine',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Saturated Fat',
              name: 'Saturated Fat',
              amount: 0.05,
              unit: 'g',
            },
            {
              title: 'Phosphorus',
              name: 'Phosphorus',
              amount: 31.63,
              unit: 'mg',
            },
            {
              title: 'Vitamin E',
              name: 'Vitamin E',
              amount: 0.06,
              unit: 'mg',
            },
            {
              title: 'Vitamin B1',
              name: 'Vitamin B1',
              amount: 0.04,
              unit: 'mg',
            },
            {
              title: 'Folate',
              name: 'Folate',
              amount: 40.97,
              unit: 'µg',
            },
            {
              title: 'Sodium',
              name: 'Sodium',
              amount: 21.56,
              unit: 'mg',
            },
            {
              title: 'Vitamin B5',
              name: 'Vitamin B5',
              amount: 0.48,
              unit: 'mg',
            },
            {
              title: 'Net Carbohydrates',
              name: 'Net Carbohydrates',
              amount: 2.13,
              unit: 'g',
            },
            {
              title: 'Fluoride',
              name: 'Fluoride',
              amount: 0.72,
              unit: 'mg',
            },
            {
              title: 'Calories',
              name: 'Calories',
              amount: 17.97,
              unit: 'kcal',
            },
            {
              title: 'Cholesterol',
              name: 'Cholesterol',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin B12',
              name: 'Vitamin B12',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Selenium',
              name: 'Selenium',
              amount: 0.43,
              unit: 'µg',
            },
            {
              title: 'Vitamin K',
              name: 'Vitamin K',
              amount: 11.14,
              unit: 'µg',
            },
            {
              title: 'Trans Fat',
              name: 'Trans Fat',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Fiber',
              name: 'Fiber',
              amount: 1.44,
              unit: 'g',
            },
            {
              title: 'Folic Acid',
              name: 'Folic Acid',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Copper',
              name: 'Copper',
              amount: 0.03,
              unit: 'mg',
            },
            {
              title: 'Choline',
              name: 'Choline',
              amount: 31.84,
              unit: 'mg',
            },
            {
              title: 'Alcohol',
              name: 'Alcohol',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Zinc',
              name: 'Zinc',
              amount: 0.19,
              unit: 'mg',
            },
            {
              title: 'Manganese',
              name: 'Manganese',
              amount: 0.11,
              unit: 'mg',
            },
            {
              title: 'Sugar',
              name: 'Sugar',
              amount: 1.37,
              unit: 'g',
            },
          ],
        },
        {
          id: 4047,
          name: 'coconut oil',
          amount: 0.13,
          unit: '',
          nutrients: [
            {
              title: 'Mono Unsaturated Fat',
              name: 'Mono Unsaturated Fat',
              amount: 0.01,
              unit: 'g',
            },
            {
              title: 'Fat',
              name: 'Fat',
              amount: 0.13,
              unit: 'g',
            },
            {
              title: 'Vitamin B3',
              name: 'Vitamin B3',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Carbohydrates',
              name: 'Carbohydrates',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Vitamin A',
              name: 'Vitamin A',
              amount: 0.0,
              unit: 'IU',
            },
            {
              title: 'Vitamin B6',
              name: 'Vitamin B6',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Iron',
              name: 'Iron',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Potassium',
              name: 'Potassium',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin C',
              name: 'Vitamin C',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Protein',
              name: 'Protein',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Vitamin B2',
              name: 'Vitamin B2',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Poly Unsaturated Fat',
              name: 'Poly Unsaturated Fat',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Magnesium',
              name: 'Magnesium',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin D',
              name: 'Vitamin D',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Calcium',
              name: 'Calcium',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Caffeine',
              name: 'Caffeine',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Saturated Fat',
              name: 'Saturated Fat',
              amount: 0.11,
              unit: 'g',
            },
            {
              title: 'Phosphorus',
              name: 'Phosphorus',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin E',
              name: 'Vitamin E',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin B1',
              name: 'Vitamin B1',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Folate',
              name: 'Folate',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Sodium',
              name: 'Sodium',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin B5',
              name: 'Vitamin B5',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Net Carbohydrates',
              name: 'Net Carbohydrates',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Calories',
              name: 'Calories',
              amount: 1.08,
              unit: 'kcal',
            },
            {
              title: 'Cholesterol',
              name: 'Cholesterol',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin B12',
              name: 'Vitamin B12',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Selenium',
              name: 'Selenium',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Vitamin K',
              name: 'Vitamin K',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Fiber',
              name: 'Fiber',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Folic Acid',
              name: 'Folic Acid',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Copper',
              name: 'Copper',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Choline',
              name: 'Choline',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Alcohol',
              name: 'Alcohol',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Zinc',
              name: 'Zinc',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Manganese',
              name: 'Manganese',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Sugar',
              name: 'Sugar',
              amount: 0.0,
              unit: 'g',
            },
          ],
        },
        {
          id: 20041,
          name: 'cooked brown rice',
          amount: 0.38,
          unit: 'cups',
          nutrients: [
            {
              title: 'Mono Unsaturated Fat',
              name: 'Mono Unsaturated Fat',
              amount: 0.22,
              unit: 'g',
            },
            {
              title: 'Fat',
              name: 'Fat',
              amount: 0.61,
              unit: 'g',
            },
            {
              title: 'Vitamin B3',
              name: 'Vitamin B3',
              amount: 0.97,
              unit: 'mg',
            },
            {
              title: 'Carbohydrates',
              name: 'Carbohydrates',
              amount: 17.19,
              unit: 'g',
            },
            {
              title: 'Vitamin A',
              name: 'Vitamin A',
              amount: 0.0,
              unit: 'IU',
            },
            {
              title: 'Vitamin B6',
              name: 'Vitamin B6',
              amount: 0.11,
              unit: 'mg',
            },
            {
              title: 'Iron',
              name: 'Iron',
              amount: 0.39,
              unit: 'mg',
            },
            {
              title: 'Potassium',
              name: 'Potassium',
              amount: 57.77,
              unit: 'mg',
            },
            {
              title: 'Vitamin C',
              name: 'Vitamin C',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Protein',
              name: 'Protein',
              amount: 1.7,
              unit: 'g',
            },
            {
              title: 'Vitamin B2',
              name: 'Vitamin B2',
              amount: 0.01,
              unit: 'mg',
            },
            {
              title: 'Poly Unsaturated Fat',
              name: 'Poly Unsaturated Fat',
              amount: 0.22,
              unit: 'g',
            },
            {
              title: 'Magnesium',
              name: 'Magnesium',
              amount: 32.17,
              unit: 'mg',
            },
            {
              title: 'Vitamin D',
              name: 'Vitamin D',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Calcium',
              name: 'Calcium',
              amount: 7.31,
              unit: 'mg',
            },
            {
              title: 'Saturated Fat',
              name: 'Saturated Fat',
              amount: 0.12,
              unit: 'g',
            },
            {
              title: 'Phosphorus',
              name: 'Phosphorus',
              amount: 56.31,
              unit: 'mg',
            },
            {
              title: 'Vitamin B1',
              name: 'Vitamin B1',
              amount: 0.07,
              unit: 'mg',
            },
            {
              title: 'Folate',
              name: 'Folate',
              amount: 2.93,
              unit: 'µg',
            },
            {
              title: 'Sodium',
              name: 'Sodium',
              amount: 0.73,
              unit: 'mg',
            },
            {
              title: 'Vitamin B5',
              name: 'Vitamin B5',
              amount: 0.29,
              unit: 'mg',
            },
            {
              title: 'Net Carbohydrates',
              name: 'Net Carbohydrates',
              amount: 15.88,
              unit: 'g',
            },
            {
              title: 'Calories',
              name: 'Calories',
              amount: 81.9,
              unit: 'kcal',
            },
            {
              title: 'Cholesterol',
              name: 'Cholesterol',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin B12',
              name: 'Vitamin B12',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Fiber',
              name: 'Fiber',
              amount: 1.32,
              unit: 'g',
            },
            {
              title: 'Folic Acid',
              name: 'Folic Acid',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Copper',
              name: 'Copper',
              amount: 0.06,
              unit: 'mg',
            },
            {
              title: 'Zinc',
              name: 'Zinc',
              amount: 0.45,
              unit: 'mg',
            },
            {
              title: 'Manganese',
              name: 'Manganese',
              amount: 0.8,
              unit: 'mg',
            },
          ],
        },
        {
          id: 11215,
          name: 'garlic',
          amount: 0.63,
          unit: 'cloves',
          nutrients: [
            {
              title: 'Mono Unsaturated Fat',
              name: 'Mono Unsaturated Fat',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Fat',
              name: 'Fat',
              amount: 0.01,
              unit: 'g',
            },
            {
              title: 'Vitamin B3',
              name: 'Vitamin B3',
              amount: 0.01,
              unit: 'mg',
            },
            {
              title: 'Carbohydrates',
              name: 'Carbohydrates',
              amount: 0.62,
              unit: 'g',
            },
            {
              title: 'Vitamin A',
              name: 'Vitamin A',
              amount: 0.17,
              unit: 'IU',
            },
            {
              title: 'Vitamin B6',
              name: 'Vitamin B6',
              amount: 0.02,
              unit: 'mg',
            },
            {
              title: 'Iron',
              name: 'Iron',
              amount: 0.03,
              unit: 'mg',
            },
            {
              title: 'Potassium',
              name: 'Potassium',
              amount: 7.52,
              unit: 'mg',
            },
            {
              title: 'Vitamin C',
              name: 'Vitamin C',
              amount: 0.59,
              unit: 'mg',
            },
            {
              title: 'Protein',
              name: 'Protein',
              amount: 0.12,
              unit: 'g',
            },
            {
              title: 'Vitamin B2',
              name: 'Vitamin B2',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Poly Unsaturated Fat',
              name: 'Poly Unsaturated Fat',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Magnesium',
              name: 'Magnesium',
              amount: 0.47,
              unit: 'mg',
            },
            {
              title: 'Vitamin D',
              name: 'Vitamin D',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Calcium',
              name: 'Calcium',
              amount: 3.39,
              unit: 'mg',
            },
            {
              title: 'Caffeine',
              name: 'Caffeine',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Saturated Fat',
              name: 'Saturated Fat',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Phosphorus',
              name: 'Phosphorus',
              amount: 2.87,
              unit: 'mg',
            },
            {
              title: 'Vitamin E',
              name: 'Vitamin E',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin B1',
              name: 'Vitamin B1',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Folate',
              name: 'Folate',
              amount: 0.06,
              unit: 'µg',
            },
            {
              title: 'Sodium',
              name: 'Sodium',
              amount: 0.32,
              unit: 'mg',
            },
            {
              title: 'Vitamin B5',
              name: 'Vitamin B5',
              amount: 0.01,
              unit: 'mg',
            },
            {
              title: 'Net Carbohydrates',
              name: 'Net Carbohydrates',
              amount: 0.58,
              unit: 'g',
            },
            {
              title: 'Calories',
              name: 'Calories',
              amount: 2.79,
              unit: 'kcal',
            },
            {
              title: 'Cholesterol',
              name: 'Cholesterol',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin B12',
              name: 'Vitamin B12',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Selenium',
              name: 'Selenium',
              amount: 0.27,
              unit: 'µg',
            },
            {
              title: 'Vitamin K',
              name: 'Vitamin K',
              amount: 0.03,
              unit: 'µg',
            },
            {
              title: 'Fiber',
              name: 'Fiber',
              amount: 0.04,
              unit: 'g',
            },
            {
              title: 'Folic Acid',
              name: 'Folic Acid',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Copper',
              name: 'Copper',
              amount: 0.01,
              unit: 'mg',
            },
            {
              title: 'Choline',
              name: 'Choline',
              amount: 0.44,
              unit: 'mg',
            },
            {
              title: 'Alcohol',
              name: 'Alcohol',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Zinc',
              name: 'Zinc',
              amount: 0.02,
              unit: 'mg',
            },
            {
              title: 'Manganese',
              name: 'Manganese',
              amount: 0.03,
              unit: 'mg',
            },
            {
              title: 'Sugar',
              name: 'Sugar',
              amount: 0.02,
              unit: 'g',
            },
          ],
        },
        {
          id: 4517,
          name: 'grapeseed oil',
          amount: 0.13,
          unit: '',
          nutrients: [
            {
              title: 'Mono Unsaturated Fat',
              name: 'Mono Unsaturated Fat',
              amount: 0.02,
              unit: 'g',
            },
            {
              title: 'Fat',
              name: 'Fat',
              amount: 0.13,
              unit: 'g',
            },
            {
              title: 'Vitamin B3',
              name: 'Vitamin B3',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Carbohydrates',
              name: 'Carbohydrates',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Vitamin A',
              name: 'Vitamin A',
              amount: 0.0,
              unit: 'IU',
            },
            {
              title: 'Vitamin B6',
              name: 'Vitamin B6',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Iron',
              name: 'Iron',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Potassium',
              name: 'Potassium',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin C',
              name: 'Vitamin C',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Protein',
              name: 'Protein',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Vitamin B2',
              name: 'Vitamin B2',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Poly Unsaturated Fat',
              name: 'Poly Unsaturated Fat',
              amount: 0.09,
              unit: 'g',
            },
            {
              title: 'Magnesium',
              name: 'Magnesium',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Calcium',
              name: 'Calcium',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Caffeine',
              name: 'Caffeine',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Saturated Fat',
              name: 'Saturated Fat',
              amount: 0.01,
              unit: 'g',
            },
            {
              title: 'Phosphorus',
              name: 'Phosphorus',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin E',
              name: 'Vitamin E',
              amount: 0.04,
              unit: 'mg',
            },
            {
              title: 'Vitamin B1',
              name: 'Vitamin B1',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Folate',
              name: 'Folate',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Sodium',
              name: 'Sodium',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin B5',
              name: 'Vitamin B5',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Net Carbohydrates',
              name: 'Net Carbohydrates',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Calories',
              name: 'Calories',
              amount: 1.11,
              unit: 'kcal',
            },
            {
              title: 'Cholesterol',
              name: 'Cholesterol',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin B12',
              name: 'Vitamin B12',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Selenium',
              name: 'Selenium',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Fiber',
              name: 'Fiber',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Folic Acid',
              name: 'Folic Acid',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Alcohol',
              name: 'Alcohol',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Zinc',
              name: 'Zinc',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Sugar',
              name: 'Sugar',
              amount: 0.0,
              unit: 'g',
            },
          ],
        },
        {
          id: 16424,
          name: 'low sodium soy sauce',
          amount: 0.38,
          unit: 'T',
          nutrients: [
            {
              title: 'Mono Unsaturated Fat',
              name: 'Mono Unsaturated Fat',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Fat',
              name: 'Fat',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Vitamin B3',
              name: 'Vitamin B3',
              amount: 0.2,
              unit: 'mg',
            },
            {
              title: 'Carbohydrates',
              name: 'Carbohydrates',
              amount: 0.51,
              unit: 'g',
            },
            {
              title: 'Vitamin A',
              name: 'Vitamin A',
              amount: 0.0,
              unit: 'IU',
            },
            {
              title: 'Vitamin B6',
              name: 'Vitamin B6',
              amount: 0.01,
              unit: 'mg',
            },
            {
              title: 'Iron',
              name: 'Iron',
              amount: 0.12,
              unit: 'mg',
            },
            {
              title: 'Potassium',
              name: 'Potassium',
              amount: 10.8,
              unit: 'mg',
            },
            {
              title: 'Vitamin C',
              name: 'Vitamin C',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Protein',
              name: 'Protein',
              amount: 0.31,
              unit: 'g',
            },
            {
              title: 'Vitamin B2',
              name: 'Vitamin B2',
              amount: 0.01,
              unit: 'mg',
            },
            {
              title: 'Poly Unsaturated Fat',
              name: 'Poly Unsaturated Fat',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Magnesium',
              name: 'Magnesium',
              amount: 2.04,
              unit: 'mg',
            },
            {
              title: 'Vitamin D',
              name: 'Vitamin D',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Calcium',
              name: 'Calcium',
              amount: 1.02,
              unit: 'mg',
            },
            {
              title: 'Caffeine',
              name: 'Caffeine',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Saturated Fat',
              name: 'Saturated Fat',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Phosphorus',
              name: 'Phosphorus',
              amount: 6.6,
              unit: 'mg',
            },
            {
              title: 'Vitamin E',
              name: 'Vitamin E',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin B1',
              name: 'Vitamin B1',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Folate',
              name: 'Folate',
              amount: 0.96,
              unit: 'µg',
            },
            {
              title: 'Sodium',
              name: 'Sodium',
              amount: 199.98,
              unit: 'mg',
            },
            {
              title: 'Vitamin B5',
              name: 'Vitamin B5',
              amount: 0.02,
              unit: 'mg',
            },
            {
              title: 'Net Carbohydrates',
              name: 'Net Carbohydrates',
              amount: 0.46,
              unit: 'g',
            },
            {
              title: 'Calories',
              name: 'Calories',
              amount: 3.18,
              unit: 'kcal',
            },
            {
              title: 'Cholesterol',
              name: 'Cholesterol',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin B12',
              name: 'Vitamin B12',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Selenium',
              name: 'Selenium',
              amount: 0.05,
              unit: 'µg',
            },
            {
              title: 'Vitamin K',
              name: 'Vitamin K',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Fiber',
              name: 'Fiber',
              amount: 0.05,
              unit: 'g',
            },
            {
              title: 'Folic Acid',
              name: 'Folic Acid',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Copper',
              name: 'Copper',
              amount: 0.01,
              unit: 'mg',
            },
            {
              title: 'Choline',
              name: 'Choline',
              amount: 1.96,
              unit: 'mg',
            },
            {
              title: 'Alcohol',
              name: 'Alcohol',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Zinc',
              name: 'Zinc',
              amount: 0.02,
              unit: 'mg',
            },
            {
              title: 'Manganese',
              name: 'Manganese',
              amount: 0.03,
              unit: 'mg',
            },
            {
              title: 'Sugar',
              name: 'Sugar',
              amount: 0.1,
              unit: 'g',
            },
          ],
        },
        {
          id: 11304,
          name: 'peas',
          amount: 0.13,
          unit: 'cup',
          nutrients: [
            {
              title: 'Mono Unsaturated Fat',
              name: 'Mono Unsaturated Fat',
              amount: 0.01,
              unit: 'g',
            },
            {
              title: 'Fat',
              name: 'Fat',
              amount: 0.07,
              unit: 'g',
            },
            {
              title: 'Vitamin B3',
              name: 'Vitamin B3',
              amount: 0.38,
              unit: 'mg',
            },
            {
              title: 'Carbohydrates',
              name: 'Carbohydrates',
              amount: 2.62,
              unit: 'g',
            },
            {
              title: 'Vitamin A',
              name: 'Vitamin A',
              amount: 138.66,
              unit: 'IU',
            },
            {
              title: 'Vitamin B6',
              name: 'Vitamin B6',
              amount: 0.03,
              unit: 'mg',
            },
            {
              title: 'Iron',
              name: 'Iron',
              amount: 0.27,
              unit: 'mg',
            },
            {
              title: 'Potassium',
              name: 'Potassium',
              amount: 44.23,
              unit: 'mg',
            },
            {
              title: 'Vitamin C',
              name: 'Vitamin C',
              amount: 7.25,
              unit: 'mg',
            },
            {
              title: 'Protein',
              name: 'Protein',
              amount: 0.98,
              unit: 'g',
            },
            {
              title: 'Vitamin B2',
              name: 'Vitamin B2',
              amount: 0.02,
              unit: 'mg',
            },
            {
              title: 'Poly Unsaturated Fat',
              name: 'Poly Unsaturated Fat',
              amount: 0.03,
              unit: 'g',
            },
            {
              title: 'Magnesium',
              name: 'Magnesium',
              amount: 5.98,
              unit: 'mg',
            },
            {
              title: 'Vitamin D',
              name: 'Vitamin D',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Calcium',
              name: 'Calcium',
              amount: 4.53,
              unit: 'mg',
            },
            {
              title: 'Caffeine',
              name: 'Caffeine',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Saturated Fat',
              name: 'Saturated Fat',
              amount: 0.01,
              unit: 'g',
            },
            {
              title: 'Phosphorus',
              name: 'Phosphorus',
              amount: 19.58,
              unit: 'mg',
            },
            {
              title: 'Vitamin E',
              name: 'Vitamin E',
              amount: 0.02,
              unit: 'mg',
            },
            {
              title: 'Vitamin B1',
              name: 'Vitamin B1',
              amount: 0.05,
              unit: 'mg',
            },
            {
              title: 'Folate',
              name: 'Folate',
              amount: 11.78,
              unit: 'µg',
            },
            {
              title: 'Sodium',
              name: 'Sodium',
              amount: 0.91,
              unit: 'mg',
            },
            {
              title: 'Vitamin B5',
              name: 'Vitamin B5',
              amount: 0.02,
              unit: 'mg',
            },
            {
              title: 'Net Carbohydrates',
              name: 'Net Carbohydrates',
              amount: 1.69,
              unit: 'g',
            },
            {
              title: 'Calories',
              name: 'Calories',
              amount: 14.68,
              unit: 'kcal',
            },
            {
              title: 'Cholesterol',
              name: 'Cholesterol',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin B12',
              name: 'Vitamin B12',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Selenium',
              name: 'Selenium',
              amount: 0.33,
              unit: 'µg',
            },
            {
              title: 'Vitamin K',
              name: 'Vitamin K',
              amount: 4.5,
              unit: 'µg',
            },
            {
              title: 'Fiber',
              name: 'Fiber',
              amount: 0.92,
              unit: 'g',
            },
            {
              title: 'Folic Acid',
              name: 'Folic Acid',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Copper',
              name: 'Copper',
              amount: 0.03,
              unit: 'mg',
            },
            {
              title: 'Choline',
              name: 'Choline',
              amount: 5.15,
              unit: 'mg',
            },
            {
              title: 'Alcohol',
              name: 'Alcohol',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Zinc',
              name: 'Zinc',
              amount: 0.22,
              unit: 'mg',
            },
            {
              title: 'Manganese',
              name: 'Manganese',
              amount: 0.07,
              unit: 'mg',
            },
            {
              title: 'Sugar',
              name: 'Sugar',
              amount: 1.03,
              unit: 'g',
            },
          ],
        },
        {
          id: 2047,
          name: 'salt',
          amount: 1.0,
          unit: 'servings',
          nutrients: [
            {
              title: 'Mono Unsaturated Fat',
              name: 'Mono Unsaturated Fat',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Fat',
              name: 'Fat',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Vitamin B3',
              name: 'Vitamin B3',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Carbohydrates',
              name: 'Carbohydrates',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Vitamin A',
              name: 'Vitamin A',
              amount: 0.0,
              unit: 'IU',
            },
            {
              title: 'Vitamin B6',
              name: 'Vitamin B6',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Iron',
              name: 'Iron',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Potassium',
              name: 'Potassium',
              amount: 0.04,
              unit: 'mg',
            },
            {
              title: 'Vitamin C',
              name: 'Vitamin C',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Protein',
              name: 'Protein',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Vitamin B2',
              name: 'Vitamin B2',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Poly Unsaturated Fat',
              name: 'Poly Unsaturated Fat',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Magnesium',
              name: 'Magnesium',
              amount: 0.01,
              unit: 'mg',
            },
            {
              title: 'Vitamin D',
              name: 'Vitamin D',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Calcium',
              name: 'Calcium',
              amount: 0.12,
              unit: 'mg',
            },
            {
              title: 'Caffeine',
              name: 'Caffeine',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Saturated Fat',
              name: 'Saturated Fat',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Phosphorus',
              name: 'Phosphorus',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin E',
              name: 'Vitamin E',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin B1',
              name: 'Vitamin B1',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Folate',
              name: 'Folate',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Sodium',
              name: 'Sodium',
              amount: 193.79,
              unit: 'mg',
            },
            {
              title: 'Vitamin B5',
              name: 'Vitamin B5',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Net Carbohydrates',
              name: 'Net Carbohydrates',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Fluoride',
              name: 'Fluoride',
              amount: 0.01,
              unit: 'mg',
            },
            {
              title: 'Calories',
              name: 'Calories',
              amount: 0.0,
              unit: 'kcal',
            },
            {
              title: 'Cholesterol',
              name: 'Cholesterol',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin B12',
              name: 'Vitamin B12',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Selenium',
              name: 'Selenium',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Vitamin K',
              name: 'Vitamin K',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Fiber',
              name: 'Fiber',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Folic Acid',
              name: 'Folic Acid',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Copper',
              name: 'Copper',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Choline',
              name: 'Choline',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Alcohol',
              name: 'Alcohol',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Zinc',
              name: 'Zinc',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Manganese',
              name: 'Manganese',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Sugar',
              name: 'Sugar',
              amount: 0.0,
              unit: 'g',
            },
          ],
        },
        {
          id: 11291,
          name: 'scallion',
          amount: 1.0,
          unit: 'servings',
          nutrients: [
            {
              title: 'Mono Unsaturated Fat',
              name: 'Mono Unsaturated Fat',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Fat',
              name: 'Fat',
              amount: 0.01,
              unit: 'g',
            },
            {
              title: 'Vitamin B3',
              name: 'Vitamin B3',
              amount: 0.03,
              unit: 'mg',
            },
            {
              title: 'Carbohydrates',
              name: 'Carbohydrates',
              amount: 0.44,
              unit: 'g',
            },
            {
              title: 'Vitamin A',
              name: 'Vitamin A',
              amount: 59.82,
              unit: 'IU',
            },
            {
              title: 'Vitamin B6',
              name: 'Vitamin B6',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Iron',
              name: 'Iron',
              amount: 0.09,
              unit: 'mg',
            },
            {
              title: 'Potassium',
              name: 'Potassium',
              amount: 16.56,
              unit: 'mg',
            },
            {
              title: 'Vitamin C',
              name: 'Vitamin C',
              amount: 1.13,
              unit: 'mg',
            },
            {
              title: 'Protein',
              name: 'Protein',
              amount: 0.11,
              unit: 'g',
            },
            {
              title: 'Vitamin B2',
              name: 'Vitamin B2',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Poly Unsaturated Fat',
              name: 'Poly Unsaturated Fat',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Magnesium',
              name: 'Magnesium',
              amount: 1.2,
              unit: 'mg',
            },
            {
              title: 'Vitamin D',
              name: 'Vitamin D',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Calcium',
              name: 'Calcium',
              amount: 4.32,
              unit: 'mg',
            },
            {
              title: 'Caffeine',
              name: 'Caffeine',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Saturated Fat',
              name: 'Saturated Fat',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Phosphorus',
              name: 'Phosphorus',
              amount: 2.22,
              unit: 'mg',
            },
            {
              title: 'Vitamin E',
              name: 'Vitamin E',
              amount: 0.03,
              unit: 'mg',
            },
            {
              title: 'Vitamin B1',
              name: 'Vitamin B1',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Folate',
              name: 'Folate',
              amount: 3.84,
              unit: 'µg',
            },
            {
              title: 'Sodium',
              name: 'Sodium',
              amount: 0.96,
              unit: 'mg',
            },
            {
              title: 'Vitamin B5',
              name: 'Vitamin B5',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Net Carbohydrates',
              name: 'Net Carbohydrates',
              amount: 0.28,
              unit: 'g',
            },
            {
              title: 'Calories',
              name: 'Calories',
              amount: 1.92,
              unit: 'kcal',
            },
            {
              title: 'Cholesterol',
              name: 'Cholesterol',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin B12',
              name: 'Vitamin B12',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Selenium',
              name: 'Selenium',
              amount: 0.04,
              unit: 'µg',
            },
            {
              title: 'Vitamin K',
              name: 'Vitamin K',
              amount: 12.42,
              unit: 'µg',
            },
            {
              title: 'Fiber',
              name: 'Fiber',
              amount: 0.16,
              unit: 'g',
            },
            {
              title: 'Folic Acid',
              name: 'Folic Acid',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Copper',
              name: 'Copper',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Choline',
              name: 'Choline',
              amount: 0.34,
              unit: 'mg',
            },
            {
              title: 'Alcohol',
              name: 'Alcohol',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Zinc',
              name: 'Zinc',
              amount: 0.02,
              unit: 'mg',
            },
            {
              title: 'Manganese',
              name: 'Manganese',
              amount: 0.01,
              unit: 'mg',
            },
            {
              title: 'Sugar',
              name: 'Sugar',
              amount: 0.14,
              unit: 'g',
            },
          ],
        },
        {
          id: 11291,
          name: 'scallions',
          amount: 0.88,
          unit: '',
          nutrients: [
            {
              title: 'Mono Unsaturated Fat',
              name: 'Mono Unsaturated Fat',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Fat',
              name: 'Fat',
              amount: 0.02,
              unit: 'g',
            },
            {
              title: 'Vitamin B3',
              name: 'Vitamin B3',
              amount: 0.06,
              unit: 'mg',
            },
            {
              title: 'Carbohydrates',
              name: 'Carbohydrates',
              amount: 0.77,
              unit: 'g',
            },
            {
              title: 'Vitamin A',
              name: 'Vitamin A',
              amount: 104.69,
              unit: 'IU',
            },
            {
              title: 'Vitamin B6',
              name: 'Vitamin B6',
              amount: 0.01,
              unit: 'mg',
            },
            {
              title: 'Iron',
              name: 'Iron',
              amount: 0.16,
              unit: 'mg',
            },
            {
              title: 'Potassium',
              name: 'Potassium',
              amount: 28.98,
              unit: 'mg',
            },
            {
              title: 'Vitamin C',
              name: 'Vitamin C',
              amount: 1.97,
              unit: 'mg',
            },
            {
              title: 'Protein',
              name: 'Protein',
              amount: 0.19,
              unit: 'g',
            },
            {
              title: 'Vitamin B2',
              name: 'Vitamin B2',
              amount: 0.01,
              unit: 'mg',
            },
            {
              title: 'Poly Unsaturated Fat',
              name: 'Poly Unsaturated Fat',
              amount: 0.01,
              unit: 'g',
            },
            {
              title: 'Magnesium',
              name: 'Magnesium',
              amount: 2.1,
              unit: 'mg',
            },
            {
              title: 'Vitamin D',
              name: 'Vitamin D',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Calcium',
              name: 'Calcium',
              amount: 7.56,
              unit: 'mg',
            },
            {
              title: 'Caffeine',
              name: 'Caffeine',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Saturated Fat',
              name: 'Saturated Fat',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Phosphorus',
              name: 'Phosphorus',
              amount: 3.89,
              unit: 'mg',
            },
            {
              title: 'Vitamin E',
              name: 'Vitamin E',
              amount: 0.06,
              unit: 'mg',
            },
            {
              title: 'Vitamin B1',
              name: 'Vitamin B1',
              amount: 0.01,
              unit: 'mg',
            },
            {
              title: 'Folate',
              name: 'Folate',
              amount: 6.72,
              unit: 'µg',
            },
            {
              title: 'Sodium',
              name: 'Sodium',
              amount: 1.68,
              unit: 'mg',
            },
            {
              title: 'Vitamin B5',
              name: 'Vitamin B5',
              amount: 0.01,
              unit: 'mg',
            },
            {
              title: 'Net Carbohydrates',
              name: 'Net Carbohydrates',
              amount: 0.5,
              unit: 'g',
            },
            {
              title: 'Calories',
              name: 'Calories',
              amount: 3.36,
              unit: 'kcal',
            },
            {
              title: 'Cholesterol',
              name: 'Cholesterol',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin B12',
              name: 'Vitamin B12',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Selenium',
              name: 'Selenium',
              amount: 0.06,
              unit: 'µg',
            },
            {
              title: 'Vitamin K',
              name: 'Vitamin K',
              amount: 21.74,
              unit: 'µg',
            },
            {
              title: 'Fiber',
              name: 'Fiber',
              amount: 0.27,
              unit: 'g',
            },
            {
              title: 'Folic Acid',
              name: 'Folic Acid',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Copper',
              name: 'Copper',
              amount: 0.01,
              unit: 'mg',
            },
            {
              title: 'Choline',
              name: 'Choline',
              amount: 0.6,
              unit: 'mg',
            },
            {
              title: 'Alcohol',
              name: 'Alcohol',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Zinc',
              name: 'Zinc',
              amount: 0.04,
              unit: 'mg',
            },
            {
              title: 'Manganese',
              name: 'Manganese',
              amount: 0.02,
              unit: 'mg',
            },
            {
              title: 'Sugar',
              name: 'Sugar',
              amount: 0.24,
              unit: 'g',
            },
          ],
        },
        {
          id: 4058,
          name: 'sesame oil',
          amount: 0.25,
          unit: 't',
          nutrients: [
            {
              title: 'Mono Unsaturated Fat',
              name: 'Mono Unsaturated Fat',
              amount: 0.45,
              unit: 'g',
            },
            {
              title: 'Fat',
              name: 'Fat',
              amount: 1.13,
              unit: 'g',
            },
            {
              title: 'Vitamin B3',
              name: 'Vitamin B3',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Carbohydrates',
              name: 'Carbohydrates',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Vitamin A',
              name: 'Vitamin A',
              amount: 0.0,
              unit: 'IU',
            },
            {
              title: 'Vitamin B6',
              name: 'Vitamin B6',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Iron',
              name: 'Iron',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Potassium',
              name: 'Potassium',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin C',
              name: 'Vitamin C',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Protein',
              name: 'Protein',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Vitamin B2',
              name: 'Vitamin B2',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Poly Unsaturated Fat',
              name: 'Poly Unsaturated Fat',
              amount: 0.47,
              unit: 'g',
            },
            {
              title: 'Magnesium',
              name: 'Magnesium',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin D',
              name: 'Vitamin D',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Calcium',
              name: 'Calcium',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Caffeine',
              name: 'Caffeine',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Saturated Fat',
              name: 'Saturated Fat',
              amount: 0.16,
              unit: 'g',
            },
            {
              title: 'Phosphorus',
              name: 'Phosphorus',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin E',
              name: 'Vitamin E',
              amount: 0.02,
              unit: 'mg',
            },
            {
              title: 'Vitamin B1',
              name: 'Vitamin B1',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Folate',
              name: 'Folate',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Sodium',
              name: 'Sodium',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin B5',
              name: 'Vitamin B5',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Net Carbohydrates',
              name: 'Net Carbohydrates',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Calories',
              name: 'Calories',
              amount: 9.95,
              unit: 'kcal',
            },
            {
              title: 'Cholesterol',
              name: 'Cholesterol',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin B12',
              name: 'Vitamin B12',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Selenium',
              name: 'Selenium',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Vitamin K',
              name: 'Vitamin K',
              amount: 0.15,
              unit: 'µg',
            },
            {
              title: 'Fiber',
              name: 'Fiber',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Folic Acid',
              name: 'Folic Acid',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Copper',
              name: 'Copper',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Choline',
              name: 'Choline',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Alcohol',
              name: 'Alcohol',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Zinc',
              name: 'Zinc',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Sugar',
              name: 'Sugar',
              amount: 0.0,
              unit: 'g',
            },
          ],
        },
        {
          id: 12023,
          name: 'sesame seeds',
          amount: 1.0,
          unit: 'servings',
          nutrients: [
            {
              title: 'Mono Unsaturated Fat',
              name: 'Mono Unsaturated Fat',
              amount: 1.5,
              unit: 'g',
            },
            {
              title: 'Fat',
              name: 'Fat',
              amount: 3.97,
              unit: 'g',
            },
            {
              title: 'Vitamin B3',
              name: 'Vitamin B3',
              amount: 0.36,
              unit: 'mg',
            },
            {
              title: 'Carbohydrates',
              name: 'Carbohydrates',
              amount: 1.88,
              unit: 'g',
            },
            {
              title: 'Vitamin A',
              name: 'Vitamin A',
              amount: 0.72,
              unit: 'IU',
            },
            {
              title: 'Vitamin B6',
              name: 'Vitamin B6',
              amount: 0.06,
              unit: 'mg',
            },
            {
              title: 'Iron',
              name: 'Iron',
              amount: 1.16,
              unit: 'mg',
            },
            {
              title: 'Potassium',
              name: 'Potassium',
              amount: 37.44,
              unit: 'mg',
            },
            {
              title: 'Vitamin C',
              name: 'Vitamin C',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Protein',
              name: 'Protein',
              amount: 1.42,
              unit: 'g',
            },
            {
              title: 'Vitamin B2',
              name: 'Vitamin B2',
              amount: 0.02,
              unit: 'mg',
            },
            {
              title: 'Poly Unsaturated Fat',
              name: 'Poly Unsaturated Fat',
              amount: 1.74,
              unit: 'g',
            },
            {
              title: 'Magnesium',
              name: 'Magnesium',
              amount: 28.08,
              unit: 'mg',
            },
            {
              title: 'Vitamin D',
              name: 'Vitamin D',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Calcium',
              name: 'Calcium',
              amount: 78.0,
              unit: 'mg',
            },
            {
              title: 'Caffeine',
              name: 'Caffeine',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Saturated Fat',
              name: 'Saturated Fat',
              amount: 0.56,
              unit: 'g',
            },
            {
              title: 'Phosphorus',
              name: 'Phosphorus',
              amount: 50.32,
              unit: 'mg',
            },
            {
              title: 'Vitamin E',
              name: 'Vitamin E',
              amount: 0.02,
              unit: 'mg',
            },
            {
              title: 'Vitamin B1',
              name: 'Vitamin B1',
              amount: 0.06,
              unit: 'mg',
            },
            {
              title: 'Folate',
              name: 'Folate',
              amount: 7.76,
              unit: 'µg',
            },
            {
              title: 'Sodium',
              name: 'Sodium',
              amount: 0.88,
              unit: 'mg',
            },
            {
              title: 'Vitamin B5',
              name: 'Vitamin B5',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Net Carbohydrates',
              name: 'Net Carbohydrates',
              amount: 0.93,
              unit: 'g',
            },
            {
              title: 'Calories',
              name: 'Calories',
              amount: 45.84,
              unit: 'kcal',
            },
            {
              title: 'Cholesterol',
              name: 'Cholesterol',
              amount: 0.0,
              unit: 'mg',
            },
            {
              title: 'Vitamin B12',
              name: 'Vitamin B12',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Selenium',
              name: 'Selenium',
              amount: 2.75,
              unit: 'µg',
            },
            {
              title: 'Vitamin K',
              name: 'Vitamin K',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Fiber',
              name: 'Fiber',
              amount: 0.94,
              unit: 'g',
            },
            {
              title: 'Folic Acid',
              name: 'Folic Acid',
              amount: 0.0,
              unit: 'µg',
            },
            {
              title: 'Copper',
              name: 'Copper',
              amount: 0.33,
              unit: 'mg',
            },
            {
              title: 'Choline',
              name: 'Choline',
              amount: 2.05,
              unit: 'mg',
            },
            {
              title: 'Alcohol',
              name: 'Alcohol',
              amount: 0.0,
              unit: 'g',
            },
            {
              title: 'Zinc',
              name: 'Zinc',
              amount: 0.62,
              unit: 'mg',
            },
            {
              title: 'Manganese',
              name: 'Manganese',
              amount: 0.2,
              unit: 'mg',
            },
            {
              title: 'Sugar',
              name: 'Sugar',
              amount: 0.02,
              unit: 'g',
            },
          ],
        },
      ],
      caloricBreakdown: {
        percentProtein: 13.63,
        percentFat: 28.46,
        percentCarbs: 57.91,
      },
      weightPerServing: {
        amount: 220,
        unit: 'g',
      },
    },
    summary:
      'Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.12 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about <b>30 minutes</b>. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this recipe earns an <b>awesome spoonacular score of 100%</b>. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/vegetable-fried-brown-rice-36199">Vegetable Fried Brown Rice</a>, <a href="https://spoonacular.com/recipes/vegetable-fried-cauliflower-rice-933261">Vegetable Fried Cauliflower Rice</a>, and <a href="https://spoonacular.com/recipes/easy-vegetable-fried-brown-rice-with-egg-802042">Easy Vegetable Fried Brown Rice with Egg</a>.',
    cuisines: ['Chinese', 'Asian'],
    dishTypes: ['side dish'],
    diets: ['gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan'],
    occasions: [],
    analyzedInstructions: [
      {
        name: '',
        steps: [
          {
            number: 1,
            step: 'Remove the cauliflower\'s tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of "cauliflower rice."',
            ingredients: [
              {
                id: 10011135,
                name: 'cauliflower florets',
                localizedName: 'cauliflower florets',
                image: 'cauliflower.jpg',
              },
              {
                id: 10111135,
                name: 'cauliflower rice',
                localizedName: 'cauliflower rice',
                image: 'cauliflower.jpg',
              },
              {
                id: 11135,
                name: 'cauliflower',
                localizedName: 'cauliflower',
                image: 'cauliflower.jpg',
              },
              {
                id: 20028,
                name: 'couscous',
                localizedName: 'couscous',
                image: 'couscous-cooked.jpg',
              },
              {
                id: 20444,
                name: 'rice',
                localizedName: 'rice',
                image: 'uncooked-white-rice.png',
              },
            ],
            equipment: [
              {
                id: 404771,
                name: 'food processor',
                localizedName: 'food processor',
                image: 'food-processor.png',
              },
            ],
          },
          {
            number: 2,
            step: 'Heat 1T butter and 1T oil in a large skillet over medium heat.',
            ingredients: [
              {
                id: 1001,
                name: 'butter',
                localizedName: 'butter',
                image: 'butter-sliced.jpg',
              },
              {
                id: 4582,
                name: 'cooking oil',
                localizedName: 'cooking oil',
                image: 'vegetable-oil.jpg',
              },
            ],
            equipment: [
              {
                id: 404645,
                name: 'frying pan',
                localizedName: 'frying pan',
                image: 'pan.png',
              },
            ],
          },
          {
            number: 3,
            step: 'Add garlic and the white and light green pieces of scallion. Sauté about a minute.',
            ingredients: [
              {
                id: 11291,
                name: 'green onions',
                localizedName: 'green onions',
                image: 'spring-onions.jpg',
              },
              {
                id: 11215,
                name: 'garlic',
                localizedName: 'garlic',
                image: 'garlic.png',
              },
            ],
            equipment: [],
          },
          {
            number: 4,
            step: 'Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.',
            ingredients: [
              {
                id: 11135,
                name: 'cauliflower',
                localizedName: 'cauliflower',
                image: 'cauliflower.jpg',
              },
              {
                id: 0,
                name: 'spread',
                localizedName: 'spread',
                image: '',
              },
              {
                id: 4582,
                name: 'cooking oil',
                localizedName: 'cooking oil',
                image: 'vegetable-oil.jpg',
              },
            ],
            equipment: [
              {
                id: 404645,
                name: 'frying pan',
                localizedName: 'frying pan',
                image: 'pan.png',
              },
            ],
          },
          {
            number: 5,
            step: "Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom.",
            ingredients: [
              {
                id: 4047,
                name: 'coconut oil',
                localizedName: 'coconut oil',
                image: 'oil-coconut.jpg',
              },
              {
                id: 1001,
                name: 'butter',
                localizedName: 'butter',
                image: 'butter-sliced.jpg',
              },
              {
                id: 0,
                name: 'spread',
                localizedName: 'spread',
                image: '',
              },
              {
                id: 20444,
                name: 'rice',
                localizedName: 'rice',
                image: 'uncooked-white-rice.png',
              },
            ],
            equipment: [
              {
                id: 404645,
                name: 'frying pan',
                localizedName: 'frying pan',
                image: 'pan.png',
              },
            ],
          },
          {
            number: 6,
            step: 'Let it sit for about two minutes—so the rice can get toasted and a little crispy.',
            ingredients: [
              {
                id: 20444,
                name: 'rice',
                localizedName: 'rice',
                image: 'uncooked-white-rice.png',
              },
            ],
            equipment: [],
            length: {
              number: 2,
              unit: 'minutes',
            },
          },
          {
            number: 7,
            step: 'Add the peas and broccoli and stir again.',
            ingredients: [
              {
                id: 11090,
                name: 'broccoli',
                localizedName: 'broccoli',
                image: 'broccoli.jpg',
              },
              {
                id: 11304,
                name: 'peas',
                localizedName: 'peas',
                image: 'peas.jpg',
              },
            ],
            equipment: [],
          },
          {
            number: 8,
            step: 'Drizzle soy sauce and toasted sesame oil over rice.Cook for another minute or so and turn off heat.',
            ingredients: [
              {
                id: 4058,
                name: 'sesame oil',
                localizedName: 'sesame oil',
                image: 'sesame-oil.png',
              },
              {
                id: 16124,
                name: 'soy sauce',
                localizedName: 'soy sauce',
                image: 'soy-sauce.jpg',
              },
              {
                id: 20444,
                name: 'rice',
                localizedName: 'rice',
                image: 'uncooked-white-rice.png',
              },
            ],
            equipment: [],
          },
          {
            number: 9,
            step: "Add chopped scallion tops and toss.I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.",
            ingredients: [
              {
                id: 12023,
                name: 'sesame seeds',
                localizedName: 'sesame seeds',
                image: 'sesame-seeds.png',
              },
              {
                id: 16124,
                name: 'soy sauce',
                localizedName: 'soy sauce',
                image: 'soy-sauce.jpg',
              },
              {
                id: 11291,
                name: 'green onions',
                localizedName: 'green onions',
                image: 'spring-onions.jpg',
              },
              {
                id: 5006,
                name: 'whole chicken',
                localizedName: 'whole chicken',
                image: 'whole-chicken.jpg',
              },
              {
                id: 18070,
                name: 'toast',
                localizedName: 'toast',
                image: 'toast',
              },
              {
                id: 20444,
                name: 'rice',
                localizedName: 'rice',
                image: 'uncooked-white-rice.png',
              },
              {
                id: 2047,
                name: 'salt',
                localizedName: 'salt',
                image: 'salt.jpg',
              },
            ],
            equipment: [
              {
                id: 404645,
                name: 'frying pan',
                localizedName: 'frying pan',
                image: 'pan.png',
              },
            ],
          },
        ],
      },
    ],
    spoonacularSourceUrl:
      'https://spoonacular.com/cauliflower-brown-rice-and-vegetable-fried-rice-716426',
  };
  return (
    <>
      <Instruction
        instructions={recipe.analyzedInstructions[0].steps}
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
              {recipe.dishTypes.join(', ').toUpperCase()}
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
                  {recipe.cuisines.map(item => {
                    return (
                      <Text
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
                  <Text color={'gray.500'}>/200</Text>
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
                  See Recipe{' '}
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
          <Ingridients />
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
          <Nutrients nutrients={recipe.nutrition.nutrients} />
        </Box>
      </DetaiLayout>
    </>
  );
}