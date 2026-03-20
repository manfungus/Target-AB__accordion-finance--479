if (import.meta.env.DEV) {
  import("./css/baseStyles.scss")
}

// console.log(import.meta.env, 'TEST HERE 1')

function test () {
  let test = 'test'
  console.log(test, 'TEST HERE 2')
}

test()