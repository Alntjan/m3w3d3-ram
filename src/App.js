import './App.css';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import CharacterDetails from './components/CharacterDetails';
import CharacterForm from './components/CharacterForm';
import CharacterList from './components/CharacterList';
import { Component } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

class App extends Component {
  state = {
    characters: null,
  };

  componentDidMount() {
    axios.get('https://rickandmortyapi.com/api/character').then((response) => {
      this.setState({ characters: response.data.characters });
    });
  }

  render() {
    const { characters } = this.state;
    return (
      <div>
        {characters && <CharacterList characters={this.state.characters} />}
        {!characters && (
          <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <CircularProgress color="inherit" />
          </Stack>
        )}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/character/create" component={CharacterForm} />
          <Route path="/character/:id" component={CharacterDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
