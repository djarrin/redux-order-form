export const SET_OFFER = 'SET_OFFER';

export function setOffer({offerName, price}) {
  return {
    type: SET_OFFER,
    offerName,
    price
  }
}
