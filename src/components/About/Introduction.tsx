import { Box, Center, Grid, Text } from '@mantine/core';

import { introduction } from '@/data/About/introdution';

import RoundedImage from './RoundedImage';

const Introduction = () => {
  return (
    <Grid>
      <Grid.Col xs={12} md={3} orderXs={1} orderMd={2}>
        <Box sx={{ paddingTop: '1.5rem' }}>
          <RoundedImage
            src='/images/face.jpg'
            width={150}
            height={150}
          />
        </Box>
      </Grid.Col>
      <Grid.Col xs={12} md={9} orderXs={2} orderMd={1}>
        <Text size={42} weight='bold'>
          About Me
        </Text>
        <Text
          component='span'
          variant='gradient'
          size={26}
          weight='bold'
          gradient={{ from: 'orange', to: 'yellow', deg: 45 }}
        >
          Muh. Nur Iksan
        </Text>
        {introduction.map((each, idx) => (
          <Text size='md' my='sm' key={idx}>
            {each}
          </Text>
        ))}
      </Grid.Col>
    </Grid>
  );
};

export default Introduction;
