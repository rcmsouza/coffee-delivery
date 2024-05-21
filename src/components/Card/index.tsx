import {
  CardContainer,
  CoffeeDescription,
  CoffeeTitle,
  Control,
  Order,
  Price,
  Tags,
} from './styles'
import { ShoppingCart } from '@phosphor-icons/react'
import { QuantityInput } from '../QuantityInput'
import { useTheme } from 'styled-components'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

interface CardProps {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({ coffee }: CardProps) {
  const [quantity, setQuantity] = useState(1)

  const { addItem } = useContext(CartContext)

  function handleIncreaseQuantit() {
    setQuantity((state) => state + 1)
  }

  function handleDecreaseQuantit() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddItemToCart() {
    addItem(coffee.id, quantity)
  }

  const theme = useTheme()

  return (
    <CardContainer>
      <img src={coffee.image} alt="" />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <CoffeeTitle>{coffee.title}</CoffeeTitle>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>

      <Control>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>
        <Order>
          <QuantityInput
            quantity={quantity}
            increaseQuantity={handleIncreaseQuantit}
            decreaseQuantity={handleDecreaseQuantit}
          />
          <button onClick={handleAddItemToCart}>
            <ShoppingCart size={22} color={theme['base-card']} />
          </button>
        </Order>
      </Control>
    </CardContainer>
  )
}
