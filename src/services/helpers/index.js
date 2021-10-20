export const catcher = fn => async (...args) => {
    try {
      const res = (await fn(...args)).data
      console.log("catcher", res)
      return res
    } catch (error) {
      console.info('> error: ', error.message)
      return false
    }
  }
  