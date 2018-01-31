import React from 'react';
import { shallow } from 'enzyme';

import List from '../../src/List';

import { Text, ScrollView, Button } from 'react-native';

const posts = [
  {id: 1, title: 'Teste', description: 'Descrição'},
  {id: 2, title: 'Teste', description: 'Descrição'},
  {id: 3, title: 'Teste', description: 'Descrição'},
];

describe('Testing List', () => {
  it('renders as expected', () => {
    const wrapper =  shallow(<List />);
    expect(wrapper.find(ScrollView).exists()).toBe(false);

    wrapper.setState({ posts });
    expect(wrapper.find(ScrollView).children()).toHaveLength(3);
  });

  it('can add new post', () => {
    const wrapper =  shallow(<List />);

    wrapper.find(Button).simulate('press');

    expect(wrapper.state('posts')).toHaveLength(1);
  });

  it('shows empty message', () => {
    const wrapper =  shallow(<List />);
    expect(wrapper.contains(<Text>Nenhum post</Text>)).toBe(true);

    wrapper.setProps({ posts });
    expect(wrapper.contains(<Text>Nenhum post</Text>)).toBe(true);
  });
});
