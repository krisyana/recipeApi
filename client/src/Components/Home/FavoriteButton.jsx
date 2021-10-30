import { Icon, IconButton, LightMode } from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionAddFAVORITEUser } from '../../store/actions/actionFavorite';
import { toast } from 'react-toastify';

export const FavouriteButton = props => {
  const { favorites } = useSelector(state => state.favoriteState);
  const dispatch = useDispatch();
  const { recipe } = props;
  const addFavorite = () => {
    if (favorited) {
      toast.warning('Already Favorited');
    } else {
      dispatch(actionAddFAVORITEUser(recipe));
    }
  };
  const favorited = favorites.find(i => Number(i.IngId) === Number(recipe.id));

  return (
    <LightMode>
      <IconButton
        isRound
        bg={favorited ? 'red.500' : 'white'}
        color="gray.900"
        size="sm"
        _hover={{
          transform: 'scale(1.1)',
        }}
        sx={{
          ':hover > svg': {
            transform: 'scale(1.1)',
          },
        }}
        transition="all 0.15s ease"
        icon={<Icon as={FiHeart} transition="all 0.15s ease" />}
        boxShadow="base"
        {...props}
        onClick={() => addFavorite()}
      />
    </LightMode>
  );
};
