import React, { Component } from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

export default class CharacterDetails extends Component {
  state = {
    character: null,
    isLoading: true,
  };

  getCharacter = (id) => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        this.setState({ character: response.data.character, isLoading: false });
      });
  };

  componentDidMount() {
    console.log('CharacterDetails is did MOUNT.');
    const { id } = this.props.match.params;
    this.getCharacter(id);
  }

  componentDidUpdate(previousProps, previousState) {
    const { id } = this.props.match.params;
    const { id: previousId } = previousProps.match.params;
    console.log('CharacterDetails DID UPDATE.', previousId, id);
    if (previousId !== id) {
      this.setState({ isLoading: true });
      this.getCharacter(id);
    }
  }

  render() {
    const { character, isLoading } = this.state;
    console.log('CharacterDetails is RENDERING.');
    return (
      <div>
        {!isLoading && <h1>{character.name}</h1>}
        {isLoading && (
          <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="secondary" />
          </Stack>
        )}
      </div>
    );
  }
}
