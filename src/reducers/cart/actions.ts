import { NavigateFunction } from 'react-router-dom'
import { Item } from './reducer'
import { AddressFormData } from '../../pages/Cart/components/AddressForm'

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_QUANTITY = 'INCREMENT_QUANTITY',
  DECREMENT_QUANTITY = 'DECREMENT_QUANTITY',
  CHECKOUT = 'CHECKOUT',
}

export function addNewItemAction(item: Item) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      item,
    },
  }
}

export function removeItemAction(itemId: Item['id']) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  }
}

export function incrementQuantityAction(coffeeId: Item['id']) {
  return {
    type: ActionTypes.INCREMENT_QUANTITY,
    payload: {
      coffeeId,
    },
  }
}

export function decrementQuantityAction(coffeeId: Item['id']) {
  return {
    type: ActionTypes.DECREMENT_QUANTITY,
    payload: {
      coffeeId,
    },
  }
}

export function checkoutAction(
  order: AddressFormData,
  callback: NavigateFunction,
) {
  return {
    type: ActionTypes.CHECKOUT,
    payload: {
      order,
      callback,
    },
  }
}
