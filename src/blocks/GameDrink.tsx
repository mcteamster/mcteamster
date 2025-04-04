import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import TwoSidedLayout from '../components/TwoSidedLayout';

export default function GameDrink() {
  return (
    <TwoSidedLayout image="/drink.png">
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Aussie Pub Crawl Simulator
      </Typography>
      <Typography color="success" fontSize="lg" fontWeight="lg">
        2021 - Web
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        Get on the beers, COVID Era style.
      </Typography>
      <Button color="success" size='lg' component="a" href="https://drinkingold.mcteamster.com/">
        Play Now!
      </Button>
    </TwoSidedLayout>
  );
}
