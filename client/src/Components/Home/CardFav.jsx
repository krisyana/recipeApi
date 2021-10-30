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
} from '@chakra-ui/react';
import * as React from 'react';
import { useHistory } from 'react-router-dom';

export const CardFav = props => {
  const history = useHistory();
  const { recipe, rootProps } = props;
  const { title, image, id } = recipe;
  return (
    <Stack
      spacing={useBreakpointValue({
        base: '4',
        md: '5',
      })}
      maxW="50vh"
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
      </Stack>
      <Stack align="center">
        <Button
          onClick={() => history.push(`/detail/${id}`)}
          colorScheme="teal"
          isFullWidth
        >
          See Detail
        </Button>
      </Stack>
    </Stack>
  );
};
