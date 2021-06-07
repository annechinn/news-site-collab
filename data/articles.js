const articlesData = [
  {
      id: 1,
      title: 'Article 1',
      topicId: 2, // science
      abstract: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.`,
      imageURL: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. 
      `,
      authorId: 2, // Joe
  },
  {
      id: 2,
      title: 'Article 2',
      topicId: 2, // science
      abstract: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.`,
      imageURL: 'https://images.pexels.com/photos/130621/pexels-photo-130621.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. 
      `,
      authorId: 1
  },
  {
      id: 3,
      title: 'Article 3',
      topicId: 3, // food
      abstract: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.`,
      imageURL: 'https://images.pexels.com/photos/6529912/pexels-photo-6529912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. 
      `,
      authorId: 1
  },
  {
      id: 4,
      title: 'Article 4',
      topicId: 2, // science
      abstract: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.`,
      imageURL: 'https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. 
      `,
      authorId: 1
  },
  {
      id: 5,
      title: 'Article 5',
      topicId: 5, // sports
      abstract: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.`,
      imageURL: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. 
      `,
      authorId: 1
  },
  {
      id: 6,
      title: 'Article 6',
      topicId: 4, // arts
      abstract: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.`,
      imageURL: 'https://images.pexels.com/photos/256189/pexels-photo-256189.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. 
      `,
      authorId: 1
  },
  {
      id: 7,
      title: 'Article 7',
      topicId: 3, // food
      abstract: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.`,
      imageURL: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. 
      `,
      authorId: 1
  },
  {
      id: 8,
      title: 'Article 8',
      topicId: 3, // food
      abstract: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.`,
      imageURL: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. 
      `,
      authorId: 1
  },
  {
      id: 9,
      title: 'Article 9',
      topicId: 3, // food
      abstract: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.`,
      imageURL: 'https://images.pexels.com/photos/853006/pexels-photo-853006.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. 
      `,
      authorId: 1
  },
  {
      id: 10,
      title: 'Article 10',
      topicId: 5, // sports
      abstract: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.`,
      imageURL: 'https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. 
      `,
      authorId: 1
  },
  {
      id: 11,
      title: 'Article 11',
      topicId: 5, // sports
      abstract: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.`,
      imageURL: 'https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. 
      `,
      authorId: 1
  },
  {
      id: 12,
      title: 'Article 12',
      topicId: 5, // sports
      abstract: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.`,
      imageURL: 'https://images.pexels.com/photos/1005456/pexels-photo-1005456.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. 
      `,
      authorId: 1
  },
  {
      id: 13,
      title: 'Article 13',
      topicId: 4, // arts
      abstract: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.`,
      imageURL: 'https://images.pexels.com/photos/209948/pexels-photo-209948.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. 
      `,
      authorId: 2, // Joe
  },
  {
      id: 14,
      title: 'Article 14',
      topicId: 4, // arts
      abstract: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.`,
      imageURL: 'https://images.pexels.com/photos/3622671/pexels-photo-3622671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. 
      `,
      authorId: 2, // Joe
  },
  {
      id: 15,
      title: 'Article 15',
      topicId: 4, // arts
      abstract: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.`,
      imageURL: 'https://images.pexels.com/photos/3777876/pexels-photo-3777876.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. 
      `,
      authorId: 1
  },
  {
      id: 16,
      title: 'Article 16',
      topicId: 1, // tech
      abstract: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.`,
      imageURL: 'https://images.pexels.com/photos/834949/pexels-photo-834949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. 
      `,
      authorId: 1, // Sally Smith
      comments: [
          {id: 1,
           authorId: 1, // Sally Smith
           recommendedCount: 0,
           comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
           impedit libero, beatae animi provident nesciunt molestias ipsam
           nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
           impedit libero, beatae animi provident nesciunt molestias ipsam
           nemo ad.`},
           {id: 2,
              authorId: 2, // Joe,
              recommendedCount: 2,
              comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
              impedit libero, beatae animi provident nesciunt molestias ipsam
              nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
              impedit libero, beatae animi provident nesciunt molestias ipsam
              nemo ad.`},

      ]
  },
  {
      id: 17,
      title: 'Article 17',
      topicId: 1, // tech
      abstract: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.`,
      imageURL: 'https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. 
      `,
      authorId: 1, // Sally Smith
      comments: [
          {id: 3,
           authorId: 1, // Sally Smith
           recommendedCount: 0,
           comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
           impedit libero, beatae animi provident nesciunt molestias ipsam
           nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
           impedit libero, beatae animi provident nesciunt molestias ipsam
           nemo ad.`},
           {id: 4,
              authorId: 2, // Joe,
              recommendedCount: 4,
              comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
              impedit libero, beatae animi provident nesciunt molestias ipsam
              nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
              impedit libero, beatae animi provident nesciunt molestias ipsam
              nemo ad.`},

      ]
  },
  {
      id: 18,
      title: 'Article 18',
      topicId: 1, // tech
      abstract: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.`,
      imageURL: 'https://images.pexels.com/photos/50711/board-electronics-computer-data-processing-50711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. 
      `,
      authorId: 1, // Sally Smith
      comments: [
          {id: 5,
           authorId: 1, // Sally Smith
           recommendedCount: 0,
           comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
           impedit libero, beatae animi provident nesciunt molestias ipsam
           nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
           impedit libero, beatae animi provident nesciunt molestias ipsam
           nemo ad.`},
           {id: 6,
              authorId: 2, // Joe,
              recommendedCount: 0,
              comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
              impedit libero, beatae animi provident nesciunt molestias ipsam
              nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
              impedit libero, beatae animi provident nesciunt molestias ipsam
              nemo ad.`},

      ]
  },
  {
      id: 19,
      title: 'Article 19',
      topicId: 1, // tech
      abstract: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.`,
      imageURL: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. 
      `,
      authorId: 1, // Sally Smith
      comments: [
          {id: 7,
           authorId: 1, // Sally Smith
           comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
           impedit libero, beatae animi provident nesciunt molestias ipsam
           nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
           impedit libero, beatae animi provident nesciunt molestias ipsam
           nemo ad.`},
           {id: 8,
              authorId: 2, // Joe,
              comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
              impedit libero, beatae animi provident nesciunt molestias ipsam
              nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
              impedit libero, beatae animi provident nesciunt molestias ipsam
              nemo ad.`},

      ]
  },
  {
      id: 20,
      title: 'Article 20',
      topicId: 2, // science
      abstract: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.`,
      imageURL: 'https://images.pexels.com/photos/45239/white-blood-cell-cell-blood-cell-blood-45239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. 
      `,
      authorId: 1
  },
   
];