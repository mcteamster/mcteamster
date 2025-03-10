import IconButton from '@mui/joy/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CoffeeIcon from '@mui/icons-material/Coffee';

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
                top: '1rem',
                left: '4.5rem',
                borderRadius: '50%',
                boxShadow: 'sm',
            }}
            target="_blank" component="a" href="https://github.com/mcteamster"
        >
            <GitHubIcon />
        </IconButton>
    );
}

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
                top: '1rem',
                left: '1rem',
                borderRadius: '50%',
                boxShadow: 'sm',
            }}
            target="_blank" component="a" href="https://mcteamster.itch.io/"
        >
            <SportsEsportsIcon />
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
                top: '1rem',
                left: '8rem',
                borderRadius: '50%',
                boxShadow: 'sm',
            }}
            target="_blank" component="a" href="https://www.buymeacoffee.com/mcteamster/"
        >
            <CoffeeIcon />
        </IconButton>
    );
}