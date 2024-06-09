import Produk from '../components/Produk/Produk'
import { render, screen } from '@testing-library/react'

const dummy = [
  {
    id: 1,
    img: '',
    pengarang: 'Chu-Gong',
    judul: 'Solo Leveling vol. 1',
    harga: 'Rp. 325.000',
    aosDelay: '0',
  },
  {
    id: 2,
    img: '',
    pengarang: 'Chu-Gong',
    judul: 'Solo Leveling vol. 1',
    harga: 'Rp. 325.000',
    aosDelay: '0',
  },
]

describe('Produk Component', () => {
  it('Should be show title correctly', async () => {
    render(<Produk data={dummy} title="title" subtitle="test" />)
    const title = await screen.findByText('title')

    expect(title).toBeVisible()
  })
  it('Should be show subtitle correctly', async () => {
    render(<Produk data={dummy} title="test" subtitle="subtitle" />)
    const subtitle = await screen.findByText('subtitle')

    expect(subtitle).toBeVisible()
  })

  it('Should be show product correctly', async () => {
    render(<Produk data={dummy} title="test" subtitle="subtitle" />)
    const data = await screen.findAllByTestId('produk')

    expect(data).toHaveLength(2)
  })
})
