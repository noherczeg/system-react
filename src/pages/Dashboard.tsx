import { Card, CardContent, List, ListItem, ListItemText, Typography, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useEffect, useState } from 'react';

export function Dashboard() {
  const { t } = useTranslation();
  const [pokemon, setPokemon] = useState([]);

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
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body2">{t('dashboard.welcome', { defaultValue: 'Default value' })}</Typography>
        <Divider sx={{ padding: '.5rem 0' }} />
        <List>
          {pokemon.map((p: any) => (
            <ListItem key={p.name}>
              <ListItemText primary={p.name} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
