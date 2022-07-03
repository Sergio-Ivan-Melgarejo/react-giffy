import React from 'react';
import App from './App';

import { render } from '@testing-library/react'

test('renders without crashing', async () => {
  const {findByText} = render(<App />)
  const title = await findByText(/ÚLTIMA BÚSQUEDA/i)
  expect(title).toBeInTheDocument()
})