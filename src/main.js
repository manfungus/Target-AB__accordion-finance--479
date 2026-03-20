if (import.meta.env.DEV) {
  import("./js/baseFunctions.js")
  import("./css/baseStyles.scss")
}

// console.log(import.meta.env, 'TEST HERE 1')

function init () {
  let test = 'test'
  console.log(test, 'TEST HERE 2')
}

init()