import { Box, Button, Typography } from '@mui/joy';
import TwoSidedLayout from '../components/TwoSidedLayout';
import { SteamButton } from '../components/Icons';

export default function GameOrange() {
  return (
    <TwoSidedLayout image='/fton.png'>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        A Point-and-Click Fever Dream
      </Typography>
      <Typography color="warning" fontSize="lg" fontWeight="lg">
        2022 - Desktop
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        Can you overcome your crippling hangover and find the Orange Narwhal?
      </Typography>
      <Box sx={{
        display: 'flex',
      }}>
        <Button color="warning" size='lg' component="a" href="https://orange.mcteamster.com/">
          Learn More
        </Button>
        <SteamButton url="https://store.steampowered.com/app/2946010/Find_the_Orange_Narwhal/" />
      </Box>
    </TwoSidedLayout>
  );
}
