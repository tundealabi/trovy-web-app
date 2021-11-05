/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthButton from '../AuthButton';

describe('Home', () => {
  it('renders a button', () => {
    render(<AuthButton>login</AuthButton>);

    const heading = screen.getByRole('button', {
      name: /login/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
