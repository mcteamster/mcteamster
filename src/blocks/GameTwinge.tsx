import { Box, Button, Typography } from '@mui/joy';
import TwoSidedLayout from '../components/TwoSidedLayout';
import { DiscordButton } from '../components/Icons';

export default function GameTwinge() {
  return (
    <TwoSidedLayout image="/twinge.png">
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        One-Button Co-Op Counting
      </Typography>
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        2022 - Web
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        How hard could it possibly be to count upwards together? 
      </Typography>
      <Box sx={{
        display: 'flex',
      }}>
        <Button color="primary" size='lg' component="a" href="https://twinge.mcteamster.com/">
          Play Now!
        </Button>
        <DiscordButton url="https://discord.com/discovery/applications/1385639813268373587" />
      </Box>
    </TwoSidedLayout>
  );
}
