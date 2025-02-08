import { CssVarsProvider } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import CssBaseline from '@mui/joy/CssBaseline';

import framesxTheme from './theme';
import { CoffeeButton, ColorSchemeToggle, GitHubButton, ItchButton } from './components/Icons';
import GameOrange from './blocks/GameOrange';
import GameTwinge from './blocks/GameTwinge';
import GameDrink from './blocks/GameDrink';
import GameBlank from './blocks/GameBlank';
import GameHalloween from './blocks/GameHalloween';

export default function App() {
  return (
    <CssVarsProvider disableTransitionOnChange theme={framesxTheme}>
      <CssBaseline />
      <ItchButton />
      <GitHubButton />
      <CoffeeButton />
      <ColorSchemeToggle />
      <Box
        sx={{
          height: '100vh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          '& > div': {
            scrollSnapAlign: 'start',
          },
        }}
      >
        <GameBlank />
        <GameOrange />
        <GameTwinge />
        <GameDrink />
        <GameHalloween />
      </Box>
    </CssVarsProvider>
  );
}
