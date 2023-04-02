import { Box, Button, Typography } from '@mui/material';
import { DashboardOutlined, InfoOutlined } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@mui/material';

export default function WelcomeSection() {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <>
      <Box className='headerWrapper'>
        <Box className='deacription' sx={{}}>
          {/* <AnimatePresence> */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, delay: 1 }}
          >
            <Typography variant={isMobile ? 'h6' : 'h4'} className='title'>
              Welcome, I'm
            </Typography>
            <motion.div
              whileHover={{ rotateY: 10 }}
              whileTap={{ rotateY: 20 }}
              transition={{ type: 'tween', stiffness: 100, damping: 5 }}
            >
              <Typography
                variant={isMobile ? 'h4' : 'h2'}
                sx={{
                  fontWeight: 'bolder',
                  fontStyle: 'italic',
                }}
              >
                Atif Ali
              </Typography>
            </motion.div>
          </motion.div>
          {/* </AnimatePresence> */}

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            <Typography
              variant={isMobile ? 'h6' : 'h5'}
              className='subTitle'
              sx={{}}
            >
              A Professional
              <Typography
                variant={'span'}
                sx={{
                  fontWeight: 'bolder',
                  fontStyle: 'italic',
                }}
              >
                &nbsp;Graphic Designer.
              </Typography>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Box
              sx={{
                mt: 5,
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
              }}
            >
              <Button
                color='primary'
                variant='contained'
                sx={{
                  width: '150px',
                  fontWeight: 'bolder',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
                size='medium'
              >
                <InfoOutlined sx={{ mr: 1 }} />
                About Me
              </Button>

              <Button
                variant='outlined'
                sx={{
                  color: 'primary.dark',
                  width: '200px',
                  marginLeft: isMobile ? '0' : '15px',
                  marginTop: isMobile ? '15px' : '0',
                  fontWeight: 'bolder',
                  '&:hover': {
                    boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.75)',
                  },
                }}
                size='medium'
              >
                <DashboardOutlined sx={{ mr: 1 }} />
                See my Work
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </>
  );
}
