export const EMAIL_LOADING = 'EMAIL_LOADING';
export const EMAIL_VALID = 'EMAIL_VALID';
export const EMAIL_INVALID = 'EMAIL_INVALID'

export function setEmailStateLoading() {
  return {
    type: EMAIL_LOADING
  }
}

export function setEmailStateValid() {
    return {
        type: EMAIL_VALID
    }
}

export function setEmailStateInValid() {
    return {
        type: EMAIL_INVALID
    }
}
