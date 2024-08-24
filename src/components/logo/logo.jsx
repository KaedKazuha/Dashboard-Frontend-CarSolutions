import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { RouterLink } from 'src/routes/components';

// Import the PNG image
import carLogo from './car_512.png';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {


  const logo = (
    <Box
      ref={ref}
      component="img"
      src={carLogo} // Using the imported image
      sx={{
        width: 40,
        height: 40,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    />
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
