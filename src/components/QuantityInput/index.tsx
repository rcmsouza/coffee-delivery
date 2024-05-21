import { Minus, Plus } from '@phosphor-icons/react'
import { Container } from './styles'

interface QuantityInputProps {
  quantity: number
  increaseQuantity: () => void
  decreaseQuantity: () => void
}

export function QuantityInput({
  quantity,
  increaseQuantity,
  decreaseQuantity,
}: QuantityInputProps) {
  return (
    <Container>
      <button disabled={quantity === 1} onClick={decreaseQuantity}>
        <Minus size={14} />
      </button>
      <span>{quantity ?? 1}</span>
      <button onClick={increaseQuantity}>
        <Plus size={14} />
      </button>
    </Container>
  )
}
