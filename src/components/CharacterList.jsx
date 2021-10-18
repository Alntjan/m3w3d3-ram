import React, { Component } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

export default class CharacterList extends Component {
  render() {
    return (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {this.props.characters.map((character) => {
          return (
            <ListItem alignItems="flex-start" key={character.id}>
              <ListItemAvatar>
                <Avatar alt={character.name} src={character.image} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Link
                    component={RouterLink}
                    to={`/character/${character.id}`}
                  >
                    {character.name}
                  </Link>
                }
                secondary={
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {character.species} | {character.origin.name}
                  </Typography>
                }
              />
            </ListItem>
          );
        })}
      </List>
    );
  }
}
