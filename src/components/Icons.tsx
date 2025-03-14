import IconButton from '@mui/joy/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CoffeeIcon from '@mui/icons-material/Coffee';

export function ItchButton() {
  return (
    <IconButton
      id="toggle-mode"
      size="lg"
      variant="soft"
      color="neutral"
      sx={{
        position: 'fixed',
        zIndex: 999,
        bottom: '1rem',
        left: '50%',
        transform: 'translate(-175%, 0)',
        borderRadius: '50%',
        boxShadow: 'sm',
      }}
      component="a" href="https://mcteamster.itch.io/"
    >
      <SportsEsportsIcon />
    </IconButton>
  );
}

export function GitHubButton() {
  return (
    <IconButton
      id="toggle-mode"
      size="lg"
      variant="soft"
      color="neutral"
      sx={{
        position: 'fixed',
        zIndex: 999,
        bottom: '1rem',
        left: '50%',
        transform: 'translate(-50%, 0)',
        borderRadius: '50%',
        boxShadow: 'sm',
      }}
      component="a" href="https://github.com/mcteamster"
    >
      <GitHubIcon />
    </IconButton>
  );
}

export function CoffeeButton() {
  return (
    <IconButton
      id="toggle-mode"
      size="lg"
      variant="soft"
      color="neutral"
      sx={{
        position: 'fixed',
        zIndex: 999,
        bottom: '1rem',
        left: '50%',
        transform: 'translate(75%, 0)',
        borderRadius: '50%',
        boxShadow: 'sm',
      }}
      component="a" href="https://www.buymeacoffee.com/mcteamster/"
    >
      <CoffeeIcon />
    </IconButton>
  );
}