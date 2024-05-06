const checkEmail = (email) => {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 2000); 
      });
}

export {checkEmail}