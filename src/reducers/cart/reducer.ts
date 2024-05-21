import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface Item {
  id: string
  quantity: number
}

interface CartState {
  cart: Item[]
}

export function CartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM:
      return produce(state, (draft) => {
        const itemAlreadyAdded = draft.cart.find(
          (item) => item.id === action.payload.item.id,
        )

        if (itemAlreadyAdded) {
          itemAlreadyAdded.quantity += 1
        } else {
          draft.cart.push(action.payload.item)
        }
      })
  }
}
