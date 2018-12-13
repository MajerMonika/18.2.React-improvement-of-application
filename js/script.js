var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju.',
    image: 'images/HarryPotter.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny.',
    image: 'images/KrolLew.jpg'
  },
  {
    id: 3,
    title: 'Pingwiny z Madagaskaru',
    desc: 'Film o pingwinach-komandosach.',
    image: 'images/Pingwiny.jpg'
  },
  {
    id: 4,
    title: 'Kraina lodu',
    desc: 'Film o Annie, która wyrusza na wielką wyprawę, by odnaleźć swoją siostrę Elsę.',
    image: 'images/KrainaLodu.jpg'
  },
  {
    id: 5,
    title: 'Shrek',
    desc: 'Film o sympatycznym ogrze.',
    image: 'images/Shrek.jpg'
  },
  {
    id: 6,
    title: 'Vaiana: Skarb oceanu',
    desc: 'Film o Vaianie i jej przygodach.',
    image: 'images/Vaiana.jpg'
  }
];

var moviesElements = movies.map(function (movie) {
  return React.createElement('li', {
      key: movie.id
    },
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    React.createElement('img', {
      src: movie.image,
    })
  );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));
