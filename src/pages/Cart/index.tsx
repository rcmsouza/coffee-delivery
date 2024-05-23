import { Trash } from '@phosphor-icons/react'
import {
  CartContainer,
  CartTotal,
  CheckoutButton,
  CoffeeSelected,
  InfoContainer,
  PriceDescription,
} from './styles'
import { CartContext } from '../../context/CartContext'
import { coffees } from '../../../data.json'
import { QuantityInput } from '../../components/QuantityInput'
import { AddressFormComponent } from './components/AddressForm'
import React, { useContext } from 'react'

export function Cart() {
  const { cart, incrementQuantity, decrementQuantity, removeItem } =
    useContext(CartContext)

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id)

    if (!coffeeInfo) {
      throw new Error('Invalid coffee.')
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    }
  })

  const itemsPrice = coffeesInCart.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  const deliveryPrice = 3.5

  const totalPrice = itemsPrice + deliveryPrice

  return (
    <CartContainer>
      <InfoContainer>
        <h2>Complete seu pedido</h2>
        <AddressFormComponent />
      </InfoContainer>
      <InfoContainer>
        <h2>Cafés selecionados</h2>
        <CartTotal>
          {coffeesInCart.map((coffee) => {
            return (
              <React.Fragment key={coffee.id}>
                <CoffeeSelected key={coffee.id}>
                  <img src={coffee.image} alt="" />
                  <div>
                    <span>{coffee.title}</span>
                    <div>
                      <QuantityInput
                        quantity={coffee.quantity}
                        increaseQuantity={() => incrementQuantity(coffee.id)}
                        decreaseQuantity={() =>
                          coffee.quantity > 1
                            ? decrementQuantity(coffee.id)
                            : removeItem(coffee.id)
                        }
                      />
                      <button onClick={() => removeItem(coffee.id)}>
                        <Trash size={16} />
                        <span>Remover</span>
                      </button>
                    </div>
                  </div>
                  <strong>
                    {new Intl.NumberFormat('pt-br', {
                      currency: 'BRL',
                      style: 'currency',
                    }).format(coffee.price * coffee.quantity)}
                  </strong>
                </CoffeeSelected>
                <span />
              </React.Fragment>
            )
          })}

          <PriceDescription>
            <div>
              <span>Total de itens</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(itemsPrice)}
              </span>
            </div>
            <div>
              <span>Entrega</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(deliveryPrice)}
              </span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalPrice)}
              </strong>
            </div>
          </PriceDescription>

          <CheckoutButton type="submit" form="order">
            confirmar pedido
          </CheckoutButton>
        </CartTotal>
      </InfoContainer>
    </CartContainer>
  )
}
