import { Box, Grid, Stack, Text } from '@mantine/core';
import React, { FC } from 'react';
import { TypeAnimation } from 'react-type-animation';

import { useStyles } from '@/hooks/useStyles';

interface Props {
  isDark: boolean;
}

const WelcomeText: FC<Props> = ({ isDark }) => {
  const { classes } = useStyles();

  return (
    <Grid.Col sm={6} orderSm={1}>
      <Stack
        spacing='md'
        sx={{
          textAlign: 'center',
          '@media (min-width: 768px)': {
            textAlign: 'left',
          },
        }}
      >
        <Box>
          <Text
            weight='bold'
            sx={{
              fontSize: 32,
              '@media (min-width: 768px)': {
                fontSize: 42,
              },
            }}
            color={isDark ? 'white' : 'dark'}
          >
            Muh. Nur Iksan
          </Text>
          <div style={{ minHeight: "54px", display: "flex", justifyContent: "start", alignItems: "start", paddingTop: "8px" }}>
            <TypeAnimation
              sequence={[
                'Informatics Engineering Fresh Graduate',
                2000,
                'Web Development Enthusiast',
                2000,
                'Mobile Development Enthusiast',
                2000,
              ]}
              cursor={true}
              repeat={Infinity}
              className={classes.gradientText}
              wrapper='span'
              style={{ whiteSpace: "normal", wordBreak: "break-word", maxWidth: "300px" }}
            />
          </div>
          {/* </Text> */}
        </Box>
        <Text
          size='md'
          sx={{
            '@media (min-width: 992px)': {
              fontSize: 18,
            },
          }}
        >
          Hi everyone <span className='wave'>👋🏼</span><br></br>Welcome to my portfolio
          website
        </Text>
      </Stack>
    </Grid.Col>
  );
};

export default WelcomeText;
