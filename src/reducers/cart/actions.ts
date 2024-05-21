import { Item } from './reducer'

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
}

export function addNewItemAction(item: Item) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      item,
    },
  }
}
