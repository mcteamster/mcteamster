import IconButton from '@mui/joy/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

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
                top: '1.5rem',
                left: '50%',
                transform: 'translate(-50%, 0)',
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
                top: '1.5rem',
                left: '1.5rem',
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
                top: '1.5rem',
                right: '1.5rem',
                borderRadius: '50%',
                boxShadow: 'sm',
            }}
            target="_blank" component="a" href="https://www.buymeacoffee.com/mcteamster/"
        >
            <LocalCafeIcon />
        </IconButton>
    );
}