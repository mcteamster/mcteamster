import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import TwoSidedLayout from '../components/TwoSidedLayout';

export default function GameBlank() {
  return (
    <TwoSidedLayout image="/blank.png">
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
        Sandbox Party Drawing
      </Typography>
      <Typography color="neutral" fontSize="lg" fontWeight="lg">
        2025 - Web
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        Create your own cards and make up the rules of the game as you go!
      </Typography>
      <Button color="neutral" size='lg' component="a" href="https://blankwhite.cards/">
        Play Now!
      </Button>
    </TwoSidedLayout>
  );
}
