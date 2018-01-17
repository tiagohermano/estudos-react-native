/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { ScrollView } from 'react-native';
import Repository from 'components/Repository';

/* Redux */
import { connect } from 'react-redux';

import styles from './styles';

class Favorites extends Component {
  static navigationOptions = {
    title: 'Meus Favoritos',
  };

  static propTypes = {
    favorites: PropTypes.arrayOf(Repository.propTypes.repository).isRequired,
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        { this.props.favorites.map(repository => (
          <Repository key={repository.id} repository={repository} />
        )) }
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
});

export default connect(mapStateToProps)(Favorites);
