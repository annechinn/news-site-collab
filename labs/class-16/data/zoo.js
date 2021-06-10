zoo = {
  caretakers: [
    {
      id: 1,
      firstName: "Nigel",
      lastName: "Nelson",
      imageURL: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYyfHxwcm9maWxlJTIwcGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: 2,
      firstName: "Burl",
      lastName: "Bethea",
      imageURL: "https://images.unsplash.com/photo-1590031905406-f18a426d772d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjAyfHxwcm9maWxlJTIwcGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: 3,
      firstName: "Ola",
      lastName: "Orloff"
    },
    {
      id: 4,
      firstName: "Wilburn",
      lastName: "Wishart"
    },
    {
      id: 5,
      firstName: "Stephanie",
      lastName: "Strauss"
    },
    {
      id: 6,
      firstName: "Sharonda",
      lastName: "Spry",
    },
    {
      id: 7,
      firstName: "Ardith",
      lastName: "Azevado",
    },
    {
      id: 8,
      firstName: "Emery",
      lastName: "Elser",
    },
  ],
  animalTypes: [
    {
      id: 1,
      name: 'lion',
      location: 'NE',
      caretakerId: 1, // Nigel
    },
    {
      id: 2,
      name: 'tiger',
      location: 'NW',
      caretakerId: 2, // Burl
    },
    {
      id: 3,
      name: 'bear',
      location: 'NE',
      caretakerId: 4, // Wilburn
    },
    {
      id: 4,
      name: "penguin",
      location: "SE",
      caretakerId: 3, // Ola
    },
    {
      id: 5,
      name: "otter",
      location: "SE",
      caretakerId: 6, // Sharonda
    },
    {
      id: 6,
      name: "frog",
      location: "SW",
      caretakerId: 8, // Emery   
    },
    {
      id: 7,
      name: "snake",
      location: "SW",
      caretakerId: 6, // Sharonda
    },
    {
      id: 8,
      name: "elephant",
      location: "NW",
      caretakerId: 7, // Ardith
    },
    {
      id: 9,
      name: "giraffe",
      location: "NE",
      caretakerId: 5, // Stephanie
    }
  ],
  animals: [
    {
      name: "Zena",
      sex: "female",
      imageURL: "https://images.unsplash.com/photo-1571835782488-1793036d8887?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI3fHxsaW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 12,
      showcase: false,
      typeId: 1, // lion
    },
    {
      name: "Maxwell",
      sex: "male",
      imageURL: "https://images.unsplash.com/photo-1554990772-0bea55d510d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGlvbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
       age: 15,
      showcase: false,
      typeId: 1, // lion
    },
    {
      name: "Faustino",
      sex: "male",
      age:14,
      showcase: true,
      typeId: 1, // lion
      imageURL: "https://images.unsplash.com/photo-1580043621114-172a136b02fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE0fHxsaW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",          age: 7,
    },
    {
      name: "Dee",
      sex: "female",
      imageURL: "https://images.unsplash.com/photo-1603955389958-8ab4c2025b71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGlvbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
       age: 14,
       showcase: false,
      typeId: 1, // lion
    },
    {
      name: "Shu",
      sex: "female",
      imageURL: "https://images.unsplash.com/photo-1562552476-8ac59b2a2e46?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRpZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
       age: 19,
       showcase: false,
      typeId: 2, // tiger
    },
    {
      name: "Esther",
      sex: "female",
      imageURL: "https://images.unsplash.com/photo-1551972251-12070d63502a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGlnZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 17,
      showcase: false,
      typeId: 2, // tiger
    },
    {
      name: "Hiram",
      sex: "male",
      imageURL: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 4,
      showcase: false,
      typeId: 3, // bear
    },
    {
      name: "Edwardo",
      sex: "male",
      imageURL: "https://images.unsplash.com/photo-1575415930355-7289cc848cf1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
       age: 4,
       showcase: false,
      typeId: 3, // bear
    },
    {
      name: "Milan",
      sex: "male",
      imageURL: "https://images.unsplash.com/photo-1561127954-65393e6644d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGJlYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 4,
      showcase: false,
      typeId: 3, // bear
    },
    {
      name: "Joe",
      sex: "male",
      imageURL: "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlbmd1aW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
      age: 10,
      showcase: false,
      typeId: 4, // penguin
    },
    {
      name: "Tad",
      sex: "male",
      imageURL:"https://images.unsplash.com/photo-1565870304282-f99a26804887?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlbmd1aW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 12,
      showcase: false,
      typeId: 4, // penguin
    },
    {
      name: "Keri",
      sex: "female",
      imageURL: "https://images.unsplash.com/photo-1602587365437-5d02d274b3cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVuZ3VpbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 2,
      showcase: false,
      typeId: 4, // penguin
    },
    {
      name: "Nicholas",
      sex: "male",
      imageURL: "https://images.unsplash.com/photo-1520637438573-ee1ba80b2a7f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVuZ3VpbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 2,
      showcase: false,
      typeId: 4, // penguin
    },
    {
      name: "Neville",
      sex: "male",
      imageURL: "https://images.unsplash.com/photo-1599236449650-f2a86b592422?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b3R0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 9,
      showcase: false,
      typeId: 5, // otter
    },
    {
      name: "Lloyd",
      sex: "male",
      imageURL: "https://images.unsplash.com/photo-1589860170912-6b83cf6f8809?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3R0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 8,
      showcase: false,
      typeId: 5, // otter
    },
    {
      name: "Mercedes",
      sex: "female",
      imageURL: "https://images.unsplash.com/photo-1594158416180-c9d457b894b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG90dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 9,
      showcase: false,
      typeId: 5, // otter
    },
    {
      name: "Margherita",
      sex: "female",
      imageURL: "https://images.unsplash.com/photo-1582478683390-b209b1079fec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG90dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 10,
      showcase: false,
      typeId: 5, // otter
    },
    {
      name: "Cathey",
      sex: "female",
      imageURL: "https://images.unsplash.com/photo-1559253664-ca249d4608c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 3,
      showcase: false,
      typeId: 6, // frog
    },
    {
      name: "Annice",
      sex: "female",
      imageURL: "https://images.unsplash.com/photo-1551189014-fe516aed0e9e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJvZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
       age: 2,
       showcase: false,
      typeId: 6, // frog
    },
    {
      name: "Paulette",
      sex: "female",
      imageURL: "https://images.unsplash.com/photo-1528158222524-d4d912d2e208?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c25ha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 5,
      showcase: false,
      typeId: 7, // snake
    },
    {
      name: "Bill",
      sex: "male",
      imageURL: "https://images.unsplash.com/photo-1585095595205-e68428a9e205?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c25ha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 6,
      showcase: false,
      typeId: 7, // snake
    },
    {
      name: "Ilana",
      sex: "female",
      imageURL: "https://images.unsplash.com/photo-1557178985-891ca9b9b01c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlcGhhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 11,
      showcase: false,
      typeId: 8, // elephant
    },
    {
      name: "Orval",
      sex: "male",
      imageURL: "https://images.unsplash.com/photo-1586680160345-b4e033387997?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGVsZXBoYW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 15,
      showcase: false,
      typeId: 8, // elephant
    },
    {
      name: "Bea",
      sex: "female",
      imageURL: "https://images.unsplash.com/photo-1549942514-bf87b7b8cd99?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGVsZXBoYW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 12,
      showcase: false,
      typeId: 8, // elephant
    },
    {
      name: "Jefferson",
      sex: "male",
      imageURL: "https://images.unsplash.com/photo-1614698561633-5eb087077543?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGVsZXBoYW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 2,
      showcase: false,
      typeId: 8, // elephant
    },
    {
      name: "Gracia",
      sex: "female",
      imageURL: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lyYWZmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
      age: 11,
      showcase: false,
      typeId: 9, // giraffe
    },
    {
      name: "Antone",
      sex: "male",
      imageURL: "https://images.unsplash.com/photo-1548506446-86bfddac5620?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lyYWZmZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 9,
      showcase: false,
      typeId: 9, // giraffe
    },
    {
      name: "Vicky",
      sex: "female",
      imageURL: "https://images.unsplash.com/photo-1538127426967-75a6c73f6d20?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lyYWZmZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 12,
      showcase: false,
      typeId: 9, // giraffe
    },
    {
      name: "Clay",
      sex: "male",
      imageURL: "https://images.unsplash.com/photo-1536626733238-1bb1f7782c87?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmFmZmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 4,
      showcase: false,
      typeId: 9, // giraffe
    },
    {
      name: "Arron",
      sex: "male",
      imageURL: "https://images.unsplash.com/photo-1583589259561-cbdbcb7354c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmFmZmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 7,
      showcase: false,
      typeId: 9, // giraffe
    },
    {
      name: "Bernard",
      sex: "male",
      imageURL: "https://images.unsplash.com/photo-1574870111867-089730e5a72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGdpcmFmZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
      age: 6,
      showcase: false,
      typeId: 9, // giraffe
    },
  ]
}