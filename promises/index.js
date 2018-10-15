function fiendGetsPizza () {
  return new Promise((resolve, reject) => {
    const num = 1

    if (num === 12) {
      return resolve({name: 'Oscar'})
    }

    return reject('cannot be trusted')
  })
}

fiendGetsPizza()
  .then(pizza => {
    console.log('now eating pizza', pizza.name)
  })
  .catch(e => {
    console.log('take friend out of life and move on because he', e)
  })
