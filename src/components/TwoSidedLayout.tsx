import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Container from '@mui/joy/Container';
import { typographyClasses } from '@mui/joy/Typography';

export default function TwoSidedLayout({ children, reversed, image, }: React.PropsWithChildren<{ reversed?: boolean, image?: string }>) {
  return (
    <Container
      sx={(theme) => ({
        position: 'relative',
        display: 'flex',
        minHeight: '100vh',
        flexDirection: reversed ? 'column-reverse' : 'column',
        alignItems: 'center',
        py: 10,
        gap: 1,
        [theme.breakpoints.up(834)]: {
          flexDirection: 'row',
          gap: 6,
          minHeight: '30vh',
        },
        [theme.breakpoints.up(1199)]: {
          gap: 12,
        },
      })}
    >
      <AspectRatio
        ratio={16 / 9}
        variant="outlined"
        maxHeight={300}
        sx={(theme) => ({
          minWidth: 300,
          alignSelf: 'stretch',
          [theme.breakpoints.up(834)]: {
            alignSelf: 'initial',
            flexGrow: 1,
            '--AspectRatio-maxHeight': '520px',
            '--AspectRatio-minHeight': '360px',
          },
          borderRadius: 'sm',
          bgcolor: 'background.level2',
          flexBasis: '50%',
        })}
      >
        <img
          src={image}
          style={{ objectFit: "contain", backgroundColor: "black" }}
        />
      </AspectRatio>
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          maxWidth: '50ch',
          textAlign: 'center',
          flexShrink: 999,
          [theme.breakpoints.up(834)]: {
            minWidth: 420,
            alignItems: 'flex-start',
            textAlign: 'initial',
          },
          [`& .${typographyClasses.root}`]: {
            textWrap: 'balance',
          },
        })}
      >
        {children}
      </Box>
    </Container>
  );
}
