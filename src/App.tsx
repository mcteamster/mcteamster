import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import CssBaseline from '@mui/joy/CssBaseline';
import { framesxTheme } from './theme';
import { CoffeeButton, GitHubButton, ItchButton } from './components/Icons';
import GameOrange from './blocks/GameOrange';
import GameTwinge from './blocks/GameTwinge';
import GameDrink from './blocks/GameDrink';
import GameBlank from './blocks/GameBlank';
import GameHalloween from './blocks/GameHalloween';
import { useEffect } from 'react';

export default function App() {
  return (
    <CssVarsProvider disableTransitionOnChange theme={framesxTheme}>
      <CssBaseline />
      <Container />
    </CssVarsProvider>
  );
}

function Container() {
  const { setMode } = useColorScheme();
  useEffect(() => {
    setMode('dark');
  }, [setMode]);

  return (
    <>
      <Box
        sx={{
          height: '100vh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          '& > div': {
            scrollSnapAlign: 'end',
          },
        }}
      >
        <GameBlank />
        <GameOrange />
        <GameTwinge />
        <GameDrink />
        <GameHalloween />
      </Box>
      <ItchButton />
      <GitHubButton />
      <CoffeeButton />
    </>
  )
}
