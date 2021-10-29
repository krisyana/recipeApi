import {
  AspectRatio,
  Box,
  Button,
  Image,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import * as React from 'react';
import { FavouriteButton } from './FavoriteButton';

export const Card = props => {
  const { recipe, rootProps } = props;
  const { title, image, healthScore } = recipe;
  return (
    <Stack
      spacing={useBreakpointValue({
        base: '4',
        md: '5',
      })}
      {...rootProps}
    >
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={image}
            alt={title}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({
              base: 'md',
              md: 'xl',
            })}
          />
        </AspectRatio>
        <FavouriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${title} to your favourites`}
        />
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue('gray.700', 'gray.400')}
            isTruncated
          >
            {title}
          </Text>
        </Stack>
        <HStack>
          <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
            Health Score : {healthScore}
          </Text>
        </HStack>
      </Stack>
      <Stack align="center">
        <Button colorScheme="teal" isFullWidth>
          See Detail
        </Button>
      </Stack>
    </Stack>
  );
};
