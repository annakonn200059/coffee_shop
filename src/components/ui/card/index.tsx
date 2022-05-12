import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { ListItemIcon } from '@mui/material'
import Typography from '@mui/material/Typography'
import { ICoffeeItem } from 'types/coffee'
import { List, ListItem } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'

interface ICoffeeCard {
  data: ICoffeeItem
}

export const CoffeeCard = ({ data }: ICoffeeCard) => {
  const notesParser = (notesStr: string): string[] => {
    return notesStr.split(', ')
  }

  return (
    <Card sx={{ minWidth: 275, maxWidth: 300 }}>
      <CardContent>
        <Typography variant="h5" component="div" color="secondary" gutterBottom>
          {data.blend_name}
        </Typography>
        <Typography sx={{ mb: 1.5, maxWidth: 240 }} color="text.secondary">
          {data.origin}
        </Typography>
        <Typography variant="body2" component="div">
          <List>
            {notesParser(data.notes).map((note, index) => (
              <ListItem key={index}>
                <ListItemIcon sx={{ minWidth: 20 }}>
                  <CircleIcon sx={{ width: 10 }} />
                </ListItemIcon>
                {note}
              </ListItem>
            ))}
          </List>
        </Typography>
      </CardContent>
    </Card>
  )
}
