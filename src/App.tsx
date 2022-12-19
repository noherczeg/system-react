import { AppBar, Box, Button, CssBaseline, Toolbar, Typography } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { i18n } from './i18n';
import { SnackProvider } from './SnackProvider';

export function App() {
  const navigate = useNavigate();

  return (
    <I18nextProvider i18n={i18n}>
      <SnackProvider>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar component="nav">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                SystemJS - React
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Button sx={{ color: '#fff' }} onClick={() => navigate('/')}>
                  Dashboard
                </Button>
                <Button sx={{ color: '#fff' }} onClick={() => navigate('/about')}>
                  About
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
          <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
            <Outlet />
          </Box>
        </Box>
      </SnackProvider>
    </I18nextProvider>
  );
}
