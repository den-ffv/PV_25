import React from 'react';
import { Button } from "@chakra-ui/react"
import { HStack } from "@chakra-ui/react"
const Home: React.FC = () => {
  const [loading, setLoading] = React.useState(false)

  const ss = () => {
    console.log('clicked')
    setLoading(prev => !prev)

  }


  return (
    <HStack>
      <Button size={'xs'} onClick={ss}>Click me</Button>
      <Button onClick={ss} loading={loading}>Click me</Button>
    </HStack>
  );
};

export default Home;