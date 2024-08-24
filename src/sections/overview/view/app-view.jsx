import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Car Dealership Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Cars Sold"
            total={2850}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_sold.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="New Listings"
            total={723}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_listing.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Active Users"
            total={45213}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Inquiries"
            total={1345}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_question_dark.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Customer Statistics"
            subheader=""
            chart={{
              labels: [
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
              ],
              series: [
                {
                  name: 'Dealers',
                  type: 'column',
                  fill: 'solid',
                  data: [50, 70, 60, 80, 90, 100, 110, 95, 85, 75, 65],
                },
                {
                  name: 'Buyers',
                  type: 'area',
                  fill: 'gradient',
                  data: [200, 220, 210, 240, 260, 280, 300, 270, 250, 230, 210],
                },
                {
                  name: 'Sellers',
                  type: 'line',
                  fill: 'solid',
                  data: [80, 100, 90, 110, 120, 130, 140, 130, 120, 110, 100],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Current Listings by Region"
            chart={{
              series: [
                { label: 'Karachi', value: 1344 },
                { label: 'Lahore', value: 1543 },
                { label: 'Islamabad', value: 1443 },
                { label: 'Peshawar', value: 743 },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
