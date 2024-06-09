import Footer from '../components/Footer/Footer'
import { render, screen } from '@testing-library/react'

describe('Footer Component', () => {
  it('Should be show title correctly', async () => {
    render(<Footer />)

    expect(title).toBeVisible()
  })
})
