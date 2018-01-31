import React from 'react';
import { shallow } from 'enzyme';

import List from '../../src/List';

import { Text } from 'react-native';

const posts = [
  {id: 1, title: 'Teste', description: 'Descrição'},
  {id: 2, title: 'Teste', description: 'Descrição'},
  {id: 3, title: 'Teste', description: 'Descrição'},
];

describe('Testing List', () => {
  it('renders as expected', () => {
    const wrapper =  shallow(<List posts={posts} />);
    expect(wrapper.children()).toHaveLength(3);
  });

  it('shows empty message', () => {
    const wrapper =  shallow(<List posts={[]} />);
    expect(wrapper.contains(<Text>Nenhum post</Text>)).toBe(true);

    wrapper.setProps({ posts });
    expect(wrapper.contains(<Text>Nenhum post</Text>)).toBe(false);
  });
});
