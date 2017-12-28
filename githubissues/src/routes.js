import { StackNavigator } from 'react-navigation';

import Repositories from 'pages/repositories';

const createRootNavigator = () => {
  StackNavigator({
    Repositories: { screen: Repositories },
  }, {
    initialRouteName: 'Repositories',
  });
};

export default createRootNavigator;
