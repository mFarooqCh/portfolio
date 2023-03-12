import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ShareIcon from '@mui/icons-material/Share';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const actions = [
  { icon: <FacebookIcon />, name: 'Facebook' },
  { icon: <YouTubeIcon />, name: 'YouTube' },
  { icon: <LinkedInIcon />, name: 'LinkedIn' },
  { icon: <InstagramIcon />, name: 'Instagram' },
];

export default function SocialLinksWidget() {
  return (
    <Box sx={{ height: 800, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel='Social Media Links'
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon icon={<ShareIcon />} openIcon={<CloseIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
