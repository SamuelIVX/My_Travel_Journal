/**
 * Smoke test: App renders the journal title and each destination heading.
 */
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "./App"

test("renders the travel journal destinations", () => {
  render(<App />)

  expect(screen.getByText(/my travel journal/i)).toBeInTheDocument()
  expect(screen.getByRole("heading", { name: /mount fiji/i })).toBeInTheDocument()
  expect(screen.getByRole("heading", { name: /sydney opera house/i })).toBeInTheDocument()
  expect(screen.getByRole("heading", { name: /geirangerfjord/i })).toBeInTheDocument()
})
