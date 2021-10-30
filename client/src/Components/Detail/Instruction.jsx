import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Heading,
} from '@chakra-ui/react';

export default function Instruction({ isOpen, onClose, instructions }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Instruction</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {!instructions || instructions.length === 0 ? (
            <Heading>No Instruction</Heading>
          ) : (
            instructions?.map(item => {
              return (
                <Text key={item.number + 'instruction'} my={1}>
                  {item.number}. {item.step}{' '}
                </Text>
              );
            })
          )}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
