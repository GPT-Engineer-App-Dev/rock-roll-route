import { Box, Flex, Heading, Text, Button, Image, useBreakpointValue } from '@chakra-ui/react';
import { FaTicketAlt } from 'react-icons/fa';

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      <Flex direction="column" align="center" justify="center" bg="gray.700" color="white" p={4}>
        <Heading as="h1" size="2xl" mb={2}>The Rockers</Heading>
        <Text fontSize="xl" mb={4}>Join us on our world tour!</Text>
        <Button leftIcon={<FaTicketAlt />} colorScheme="pink" variant="solid">
          Get Tickets
        </Button>
      </Flex>
      <Image src="https://via.placeholder.com/1200x500" alt="Band on stage" w="full" />
      <Box p={4}>
        <Heading as="h2" size="lg" mb={2}>Tour Dates</Heading>
        <Text>Don't miss out on our upcoming performances!</Text>
        {/* Tour dates list would go here */}
      </Box>
    </Box>
  );
};

export default Index;