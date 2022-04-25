const User = require('./../app/user')

describe("Unist Tests for User class", () => {
  test('1) Create a user object', () => {

    //Aquí escribimos el código que queremos usar tal cuál
    // Quiero poder instanciar un objeto Spiderman con esta información
    const user = new User(1, "ruckysolis", "Ricardo", "Bio")
    
    //Validamos que este código funcione de la forma esperada
    expect(user.id).toBe(1)
    expect(user.username).toBe("ruckysolis")
    expect(user.bio).toBe("Bio")
    expect(user.dateCreated).not.toBeUndefined()
    expect(user.lastUpdated).not.toBeUndefined()

  });   
})