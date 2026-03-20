if (import.meta.env.DEV) {
  import("./js/baseFunctions.js")
  import("./css/baseStyles.scss")
}

function init () {
  let test = 'test'
  console.log(test, 'TEST HERE 2')
}

init()