import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import TwoSidedLayout from '../components/TwoSidedLayout';

export default function GameBlank() {
  return (
    <TwoSidedLayout image="/blank.png">
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        2025 / 2019 - Web
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Sandbox Party Drawing
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        Create your own cards and make up the rules of the game as you go!
      </Typography>
      <Button size='lg' target="_blank" component="a" href="https://white.mcteamster.com/">
        Play Now!
      </Button>
    </TwoSidedLayout>
  );
}
