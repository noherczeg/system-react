import { Card, CardContent, List, ListItem, ListItemText, Typography, Divider, Icon, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSnack } from '../SnackProvider';

export default function Dashboard() {
  const { t } = useTranslation();
  const [pokemon, setPokemon] = useState([]);
  const [openSnack] = useSnack();

  useEffect(() => {
    async function getPokemon() {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
      const data = await response.data;
      setPokemon(data.results);
    }

    getPokemon();
  }, []);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon sx={{ marginRight: '.5rem' }}>home</Icon>
          Dashboard
        </Typography>
        <Typography variant="body2">{t('dashboard.welcome', { defaultValue: 'Default value' })}</Typography>
        <Divider sx={{ margin: '1rem 0' }} />
        <List>
          {pokemon.map((p: any) => (
            <ListItem key={p.name}>
              <ListItemText primary={p.name} />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ margin: '1rem 0' }} />
        <Button variant="outlined" onClick={() => openSnack('hello', { severity: 'success', autoHideDuration: 2000 })}>
          Call snack
        </Button>
        <Divider sx={{ margin: '1rem 0' }} />
        <Button variant="outlined" onClick={() => openSnack('hello', { horizontal: 'center' })}>
          Call other snack
        </Button>
      </CardContent>
    </Card>
  );
}
