import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import TwoSidedLayout from '../components/TwoSidedLayout';

export default function GameHalloween() {
  return (
    <TwoSidedLayout image="/halloween.png">
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Death by PowerPoint
      </Typography>
      <Typography color="danger" fontSize="lg" fontWeight="lg">
        2018 - PowerPoint
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        A 2D side shooter that pushes the limits of what Office can do.
      </Typography>
      <Button color="danger" size='lg' component="a" href="https://mcteamster.itch.io/halloween">
        Download
      </Button>
    </TwoSidedLayout>
  );
}
