import { createContext, ReactNode, useReducer } from 'react'
import { CartReducer, Item, Order } from '../reducers/cart/reducer'
import {
  addNewItemAction,
  checkoutAction,
  decrementQuantityAction,
  incrementQuantityAction,
  removeItemAction,
} from '../reducers/cart/actions'
import { AddressFormData } from '../pages/Cart/components/AddressForm'
import { useNavigate } from 'react-router-dom'

interface CartContextProps {
  cart: Item[]
  orders: Order[]
  checkout: (order: AddressFormData) => void
  addItem: (coffeeId: string, quantity: number) => void
  removeItem: (itemId: string) => void
  incrementQuantity: (itemId: string) => void
  decrementQuantity: (itemId: string) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffeeState, dispatch] = useReducer(CartReducer, {
    cart: [],
    orders: [],
  })

  const { cart, orders } = coffeeState

  const navigate = useNavigate()

  function addItem(coffeeId: string, quantity: number) {
    dispatch(addNewItemAction({ id: coffeeId, quantity }))
  }

  function removeItem(coffeeId: string) {
    dispatch(removeItemAction(coffeeId))
  }

  function incrementQuantity(coffeeId: string) {
    dispatch(incrementQuantityAction(coffeeId))
  }

  function decrementQuantity(coffeeId: string) {
    dispatch(decrementQuantityAction(coffeeId))
  }

  function checkout(order: AddressFormData) {
    dispatch(checkoutAction(order, navigate))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        checkout,
        addItem,
        removeItem,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
