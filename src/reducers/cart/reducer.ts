import { produce } from 'immer'
import { ActionTypes } from './actions'
import { AddressFormData } from '../../pages/Cart/components/AddressForm'

export interface Item {
  id: string
  quantity: number
}

export interface Order extends AddressFormData {
  id: string
  items: Item[]
}

interface CartState {
  cart: Item[]
  orders: Order[]
}

export function CartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM:
      return produce(state, (draft) => {
        const itemAlreadyAdded = draft.cart.find(
          (item) => item.id === action.payload.item.id,
        )

        if (itemAlreadyAdded) {
          itemAlreadyAdded.quantity += action.payload.item.quantity
        } else {
          draft.cart.push(action.payload.item)
        }
      })

    case ActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        draft.cart = draft.cart.filter(
          (item) => item.id !== action.payload.itemId,
        )
      })

    case ActionTypes.INCREMENT_QUANTITY:
      return produce(state, (draft) => {
        const itemToIncrement = draft.cart.find(
          (item) => item.id === action.payload.coffeeId,
        )

        if (itemToIncrement) {
          itemToIncrement.quantity += 1
        }
      })

    case ActionTypes.DECREMENT_QUANTITY:
      return produce(state, (draft) => {
        const itemToDecrement = draft.cart.find(
          (item) => item.id === action.payload.coffeeId,
        )

        if (itemToDecrement) {
          itemToDecrement.quantity -= 1
        }
      })

    case ActionTypes.CHECKOUT:
      return produce(state, (draft) => {
        const newOrder: Order = {
          id: new Date().getTime(),
          items: state.cart,
          ...action.payload.order,
        }
        draft.orders?.push(newOrder)
        draft.cart = []
        action.payload.callback(`/order/${newOrder.id}/success`)
      })

    default:
      return state
  }
}
