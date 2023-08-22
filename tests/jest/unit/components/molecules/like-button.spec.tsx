import React from 'react';
import renderer from 'react-test-renderer';

import { LikeButton } from '../../../../../src/components/molecules/buttons/like-button/like.button';

describe('Like Button Component', () => {
  test('should render red heart Like Button if "liked" props is true', () => {
    // given
    const mocklinkButtonProps = {
      callback: jest.fn(),
      liked: true,
    };
    // when
    const componentRenderer = renderer.create(<LikeButton {...mocklinkButtonProps} />);
    const tree = componentRenderer.toJSON();
    // then
    expect(tree).toMatchSnapshot();
  });

  test('should render empty heart Like Button if "liked" props is false', () => {
    // given
    const mocklinkButtonProps = {
      callback: jest.fn(),
      liked: false,
    };
    // when
    const componentRenderer = renderer.create(<LikeButton {...mocklinkButtonProps} />);
    const tree = componentRenderer.toJSON();
    // then
    expect(tree).toMatchSnapshot();
  });
});
