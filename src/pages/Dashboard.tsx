import { Card, CardContent, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export function Dashboard() {
  const { t } = useTranslation();

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body2">{t('dashboard.welcome', { defaultValue: 'Default value' })}</Typography>
      </CardContent>
    </Card>
  );
}
