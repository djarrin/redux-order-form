export const TAX_LOADING = 'TAX_LOADING';
export const TAX_CALCULATED = 'TAX_CALCULATED';

export function setTaxLoading() {
  return {
    type: TAX_LOADING
  }
}

export function setTaxCalculated() {
    return {
        type: TAX_CALCULATED
    }
}
