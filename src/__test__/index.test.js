import React from 'react';
import App from '../App';

import { render, waitForElement, fireEvent, screen } from '@testing-library/react'

test('home work as expected', async () => {
  const {container} = render(<App />)
  const gifLink = await waitForElement(
    () => container.querySelector(".gif")
  )
  expect(gifLink).toBeInTheDocument()
})

test('search form could be used', async () => {
  render(<App />)
  const input = await screen.findByRole("search")
  const button = await screen.findByRole("button")

  fireEvent.change(input, { target: { value:"Matrix" }})
  fireEvent.click(button)

  const title = await screen.findByText("Matrix")
  expect(title).toBeVisible()
})