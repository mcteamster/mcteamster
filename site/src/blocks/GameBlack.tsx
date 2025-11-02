import { Box, Button, Typography } from '@mui/joy';
import TwoSidedLayout from '../components/TwoSidedLayout';

export default function GameBlack() {
  return (
    <TwoSidedLayout image="/black.png">
      <Typography
        level="h4"
        sx={{
          width: '100%',
          position: 'absolute',
          top: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        games by mcteamster
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Roguelike Clicker in 13k
      </Typography>
      <Typography color="neutral" fontSize="lg" fontWeight="lg">
        2025 - Web
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        Please DO NOT the cat. Seriously.
      </Typography>
      <Box sx={{
        display: 'flex',
      }}>
        <Button sx={{ backgroundColor: '#111', color: 'white' }} color="neutral" size='lg' component="a" href="https://black.mcteamster.com/">
          Play Now!
        </Button>
      </Box>
    </TwoSidedLayout>
  );
}
