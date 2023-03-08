import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{  }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://picsum.photos/id/237/400/200"
        title="Doggie"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cute dog
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor tempor rutrum. Aliquam scelerisque ligula rhoncus enim consequat lacinia. Suspendisse ac ornare sapien, eu fermentum arcu. In malesuada ut libero et tincidunt. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}