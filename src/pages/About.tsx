import { Card, CardContent, Icon, Typography } from '@mui/material';

export function About() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon sx={{ marginRight: '.5rem' }}>people</Icon>
          About
        </Typography>
        <Typography variant="body2">And this is the About page!</Typography>
      </CardContent>
    </Card>
  );
}
