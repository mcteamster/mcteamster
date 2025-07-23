import IconButton from '@mui/joy/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CoffeeIcon from '@mui/icons-material/Coffee';
import DiscordIcon from '../assets/discord.svg';
import SteamIcon from '../assets/steam.svg';

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

export function DiscordButton(props: { url: string }) {
  return (
    <IconButton
      id="toggle-mode"
      size="lg"
      variant="soft"
      color="neutral"
      sx={{
        margin: '0 0.5em',
        borderRadius: '50%',
        boxShadow: 'sm',
        flexGrow: 'none',
      }}
      component="a" href={props.url}
    >
      <img height='75%' width='75%' src={DiscordIcon} />
    </IconButton>
  );
}

export function SteamButton(props: { url: string }) {
  return (
    <IconButton
      id="toggle-mode"
      size="lg"
      variant="soft"
      color="neutral"
      sx={{
        margin: '0 0.5em',
        borderRadius: '50%',
        boxShadow: 'sm',
        flexGrow: 'none',
      }}
      component="a" href={props.url}
    >
      <img src={SteamIcon} />
    </IconButton>
  );
}