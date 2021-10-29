import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/accordion';
import { Box, VStack } from '@chakra-ui/layout';

export default function Nutrients({ nutrients }) {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {nutrients.map(item => {
        return (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {item.name}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack>
                <span>Amount : {item.amount + ' ' + item.unit}</span>
                <span>Percent Of Daily Needs : {item.percentOfDailyNeeds}</span>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
