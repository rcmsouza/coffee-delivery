import { createContext, ReactNode, useState } from 'react'
import { Item } from '../reducers/cart/reducer'

interface CartContextProps {
  items: Item[]
  addItem: (coffeeId: string, quantity: number) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, setItems] = useState<Item[]>([])

  function addItem(coffeeId: string, quantity: number) {
    setItems((state) => {
      if (state.some((item) => item.id === coffeeId)) {
        return state.map((item) => {
          if (item.id === coffeeId) {
            return { ...item, quantity: item.quantity + quantity }
          }
          return item
        })
      }
      return [...state, { id: coffeeId, quantity }]
    })
  }

  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  )
}
