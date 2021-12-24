const storeKids = [
    {
      category: "shose",
      imgClass: "card--kids--shose",
      data: [
        {
          title: "Boots",
          imageUrl: "https://images.unsplash.com/photo-1554995783-571a2b4d923a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          price: '20$',
          id: 201,
        },
        {
          title: "Brown Boots",
          imageUrl: "https://images.unsplash.com/photo-1520640205423-3917c6fdeae6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          price: '20$',
          id: 202,
        },
        {
          title: "Brown Sinkers",
          imageUrl: "https://images.unsplash.com/photo-1445633629932-0029acc44e88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          price: '15$',
          id: 203,
        },
        {
          title: "Purple Shoes",
          imageUrl: "https://images.unsplash.com/photo-1471342051519-9621d25323fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          price: '10$',
          id: 204,
        },
      ],
    },
    {
      category: "Games",
      imgClass: "card--kids--games",
      data: [
        {
          title: "Jenga Game",
          imageUrl: "https://images.unsplash.com/photo-1539387893102-c0e198446a35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
          price: '20$',
          id: 221,
        },
        {
          title: "Ono Game",
          imageUrl: "https://images.unsplash.com/photo-1616574808693-9fce87de38a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=433&q=80",
          price: '25$',
          id: 222,
        },
        {
          title: "Dominos",
          imageUrl: "https://images.unsplash.com/photo-1566694271453-390536dd1f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          price: '10$',
          id: 223,
        },
        {
          title: "Ticket To Ride Game",
          imageUrl: "https://images.unsplash.com/photo-1582921017967-79d1cb6702ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          price: '15$',
          id: 224,
        },
      ],
    },
    {
      category: "Clothing",
      imgClass: "card--kids--clothing",
      data: [
        {
          title: "White Dress",
          imageUrl: "https://images.unsplash.com/photo-1508083460982-28b3207400d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
          price: '20$',
          id: 241,
        },
        {
          title: "Jeans Coat",
          imageUrl: "https://images.unsplash.com/photo-1541043081679-e877f6b15b51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          price: '30$',
          id: 242,
        },
        {
          title: "Brown Jacket",
          imageUrl: "https://images.unsplash.com/photo-1445796886651-d31a2c15f3c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          price: '20$',
          id: 243,
        },
        {
          title: "Black Jeans",
          imageUrl: "https://images.unsplash.com/photo-1528739535921-9e9a4e75dddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          price: '15$',
          id: 244,
        },
      ],
    },
    {
      category: "Babies",
      imgClass: "card--kids--babies",
      data: [
        {
          title: "Bunny Hat",
          imageUrl: "https://images.unsplash.com/flagged/photo-1571017659487-8435d954545e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=424&q=80",
          price: '10$',
          id: 261,
        },
        {
          title: "Gray Hat",
          imageUrl: "https://images.unsplash.com/photo-1610901158532-d246c011729e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
          price: '20$',
          id: 262,
        },
        {
          title: "Purple Hair Ribbon",
          imageUrl: "https://images.unsplash.com/photo-1619668001914-e53a048bf97a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          price: '10$',
          id: 263,
        },
        {
          title: "Sheep Hat",
          imageUrl: "https://images.unsplash.com/photo-1511852365831-4c1b2b2b1325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          price: '15$',
          id: 264,
        },
      ],
    },
  ];
  
  export default storeKids;