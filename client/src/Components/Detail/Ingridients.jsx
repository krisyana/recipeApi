import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/accordion';
import { Box, VStack } from '@chakra-ui/layout';

import React from 'react';

export default function Ingridients({ ingredients }) {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {ingredients?.map((item, i) => {
        return (
          <AccordionItem key={item.name + 'ingri' + i}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {item.name.toUpperCase()}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack>
                <span>Amount : {item.amount}</span>
                <span>Aisle : {item.aisle}</span>
                <span>Consistency : {item.consitency}</span>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
