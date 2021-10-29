import { SimpleGrid } from '@chakra-ui/react';
import * as React from 'react';

export const DetaiLayout = props => {
  const columns = React.useMemo(() => {
    const count = React.Children.toArray(props.children).filter(
      React.isValidElement
    ).length;
    return {
      base: Math.min(1, count),
      md: Math.min(2, count),
    };
  }, [props.children]);
  return (
    <SimpleGrid
      columns={columns}
      columnGap={{
        base: '4',
        md: '6',
      }}
      rowGap={{
        base: '5',
        md: '8',
      }}
      autoRows
      mx={5}
      {...props}
    />
  );
};
