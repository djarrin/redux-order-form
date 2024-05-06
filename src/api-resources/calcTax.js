const calcTax = (price) => {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(price * 0.1);
        }, 2000); 
      });
}

export {calcTax}