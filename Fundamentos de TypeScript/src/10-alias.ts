(() => {
  type UserID = string | number;
  type Size = 'S' | 'M' | 'L' | 'XL';

  let userID: UserID = 112;
  let sizeUser : Size;

  sizeUser = "S";

  function greeting(userId:UserID, size: Size) {
    if(typeof userId === 'string'){
      console.log(`El usuario: ${userId.toLowerCase()}`);
    }

    console.log(` y la talla es ${size}`);
  }

  greeting('jhasbdh', 'L')

})()
