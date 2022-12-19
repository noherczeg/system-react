import { Card, CardContent, Typography } from '@mui/material';

export function About() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          About
        </Typography>
        <Typography variant="body2">And this is the About page!</Typography>
      </CardContent>
    </Card>
  );
}
