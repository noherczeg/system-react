import { Card, CardContent, Divider, Icon, TextField, Typography } from '@mui/material';
import type { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

export default function About() {
  const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-07'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <Icon sx={{ marginRight: '.5rem' }}>people</Icon>
            About
          </Typography>
          <Typography variant="body2">And this is the About page!</Typography>
          <Divider sx={{ margin: '1rem 0' }} />
          <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
          </div>
          <Divider sx={{ margin: '1rem 0' }} />
          <DatePicker
            disableFuture
            label="Responsive"
            openTo="year"
            views={['year', 'month', 'day']}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </CardContent>
      </Card>
    </LocalizationProvider>
  );
}
