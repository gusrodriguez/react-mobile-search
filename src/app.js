import React from 'react';

import Search from './components/search';
import Results from './components/results';
import ZeroState from './components/zero-state';
import data from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
    this.search = this.search.bind(this);
  }
  search(searchTerm) {
    const results = data
      .filter(entry => entry.title.includes(searchTerm))
      .sort((a, b) => b.isSpecialOffer - a.isSpecialOffer);
    this.setState({ results });
  }
  render() {
    return (
      <React.Fragment>
        <Search search={this.search} />
        {
          this.state.results.length ?
            <Results tours={this.state.results} />
            :
            <ZeroState />
        }

      </React.Fragment>
    );
  }
}

export default App;

