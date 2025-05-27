export const books = [
  {
    id: '1',
    title: 'El Quinto Dragón',
    author: 'Paulina Aguilar',
    description: 'Una historia de superación y fantasía protagonizada por una joven con una enfermedad crónica.',
    sinopsis: 'Emma, una joven con fibrosis quística, emprende un viaje entre la fantasía y la realidad, aprendiendo a luchar por su vida y sus sueños con la ayuda de cinco dragones.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9IiRz44QU6G8E_IHct3MWfPz9vcLD9Ywcr15xVqmEsdh0PHt7vyRxvhRVmUPizPyaJug&usqp=CAU',
    opinionPersonal: 'Una historia poderosa que mezcla la fantasía con el dolor real de una enfermedad, conmovedora y esperanzadora.',
    opiniones: [
      '“Un relato de valentía e imaginación.” – Revista Chilango',
      '“Inspiradora para lectores jóvenes y adultos.” – Booklist'
    ],
  },
  {
    id: '2',
    title: 'Otelo',
    author: 'William Shakespeare',
    description: 'Una tragedia sobre los celos, la traición y el honor.',
    sinopsis: 'El general moro Otelo cae en la trampa de su alférez Yago, quien siembra los celos y la desconfianza en su mente, llevándolo a una trágica cadena de errores fatales.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-IGG8CgKoB_oce9eviQuYC9pLqSaXqF8jIw&s',
    opinionPersonal: 'La intensidad emocional de esta obra es impactante. Shakespeare retrata con maestría la fragilidad humana.',
    opiniones: [
      '“Una de las tragedias más devastadoras jamás escritas.” – The Guardian',
      '“La manipulación de Yago es tan brillante como aterradora.” – The Telegraph'
    ],
  },
  {
    id: '3',
    title: 'Dos Velas para el Diablo',
    author: 'Laura Gallego',
    description: 'Una joven en busca de justicia en un mundo donde ángeles y demonios existen.',
    sinopsis: 'Cat, hija de un ángel, busca vengar la muerte de su padre en un mundo lleno de secretos celestiales y demoníacos, descubriendo verdades más complejas de lo que imaginaba.',
    image: 'https://m.media-amazon.com/images/I/81NzfHCbqRL._UF894,1000_QL80_DpWeblab_.jpg',
    opinionPersonal: 'Me encantó cómo mezcla fantasía con temas religiosos. Es ágil y sorprendente.',
    opiniones: [
      '“Una novela juvenil con gran profundidad.” – El País',
      '“Laura Gallego logra una historia atrapante y reflexiva.” – Babelia'
    ],
  },
  {
    id: '4',
    title: 'Donde Habitan los Ángeles',
    author: 'Claudia Celis',
    description: 'Una novela entrañable sobre crecer y encontrar la esperanza.',
    sinopsis: 'Pancho vive experiencias que lo enfrentan con la pérdida, el cambio y el valor del amor familiar, en una historia conmovedora y realista.',
    image: 'data:image/jpeg;base64,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',
    opinionPersonal: 'Un libro muy emocional. Me hizo reflexionar sobre la vida y los afectos.',
    opiniones: [
      '“Una joya de la literatura juvenil mexicana.” – SEP',
      '“Llena de ternura, dolor y enseñanza.” – Educal'
    ],
  },
  {
    id: '5',
    title: 'La Metamorfosis',
    author: 'Franz Kafka',
    description: 'Un hombre se despierta convertido en un insecto y enfrenta el rechazo de su familia.',
    sinopsis: 'Gregor Samsa sufre una transformación física que lo lleva al aislamiento y la incomprensión, reflejando la angustia existencial del ser humano.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5mMxOOQ7TsfmOWW36f58B46_vLNkKyr6jfA&s',
    opinionPersonal: 'Kafka me dejó con una sensación extraña. Es perturbador, pero necesario de leer.',
    opiniones: [
      '“Una de las obras más influyentes del siglo XX.” – Le Monde',
      '“Simbólica y poderosa.” – The New Yorker'
    ],
  },
  {
    id: '6',
    title: 'El Diario de Ana Frank',
    author: 'Ana Frank',
    description: 'El testimonio de una niña judía durante el Holocausto.',
    sinopsis: 'Ana narra su vida en la clandestinidad con honestidad, madurez y esperanza, mientras se esconde de los nazis durante la Segunda Guerra Mundial.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_Vkio7gXruO1349O170xpUwUbX1F-NNK4A&s',
    opinionPersonal: 'Muy conmovedor. Me dolió y me inspiró a la vez.',
    opiniones: [
      '“Un documento histórico imprescindible.” – The Times',
      '“Una voz adolescente que se convirtió en símbolo de esperanza.” – El Mundo'
    ],
  },
  {
    id: '7',
    title: 'Cazadores de Microbios',
    author: 'Paul de Kruif',
    description: 'El relato apasionante de los descubrimientos científicos que cambiaron la medicina.',
    sinopsis: 'Desde Pasteur hasta Ehrlich, esta obra recorre las vidas de los pioneros en microbiología, mostrando cómo su tenacidad salvó millones de vidas.',
    image: 'https://m.media-amazon.com/images/I/71aQXaeme1L._AC_UF350,350_QL50_DpWeblab_.jpg',
    opinionPersonal: 'Te hace valorar la ciencia y el esfuerzo detrás de cada hallazgo.',
    opiniones: [
      '“Una historia fascinante y educativa.” – Scientific American',
      '“Ideal para jóvenes interesados en ciencia.” – Nature'
    ],
  },
  {
    id: '8',
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    description: 'Un futuro donde los libros están prohibidos.',
    sinopsis: 'Guy Montag es un bombero encargado de quemar libros, hasta que empieza a cuestionar la sociedad que lo rodea y decide rebelarse.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW8sJ06jWEzTlBCMcyM-3txGM1q3cqZ6KEIw&s',
    opinionPersonal: 'Crudo y visionario. Bradbury es un genio.',
    opiniones: [
      '“Un clásico distópico imprescindible.” – The New York Review',
      '“Impactante reflexión sobre la censura.” – Wired'
    ],
  },
  {
    id: '9',
    title: 'Soy Leyenda',
    author: 'Richard Matheson',
    description: 'El último humano sobrevive entre vampiros.',
    sinopsis: 'Robert Neville es el único ser humano inmune a una plaga que ha transformado al resto en vampiros. Su lucha por sobrevivir redefine la leyenda.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFVNCWP6LWlgM0cEZCaotyj4Bkl8FGqGM05w&s',
    opinionPersonal: 'Me gustó más que la película. Es más psicológico.',
    opiniones: [
      '“Un clásico del terror y la ciencia ficción.” – Publishers Weekly',
      '“Tensa, profunda y solitaria.” – Kirkus Reviews'
    ],
  },
  {
    id: '10',
    title: 'El Llano en Llamas',
    author: 'Juan Rulfo',
    description: 'Cuentos sobre la vida rural mexicana.',
    sinopsis: 'Relatos cortos que retratan la dureza, soledad y la violencia del México rural posrevolucionario, escritos con una prosa única.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Wv1fOz7q9wdzj4iDPyM59UCGFoBk7E-JdA&s',
    opinionPersonal: 'Cada cuento te deja pensando. Rulfo escribe con el alma.',
    opiniones: [
      '“El alma de México plasmada en letras.” – Letras Libres',
      '“Puro, doloroso y hermoso.” – La Jornada'
    ],
  },
  {
    id: '11',
    title: 'Pedro Páramo',
    author: 'Juan Rulfo',
    description: 'Una novela sobre fantasmas, culpa y redención.',
    sinopsis: 'Juan Preciado viaja a Comala a buscar a su padre Pedro Páramo, solo para encontrar un pueblo habitado por voces del pasado.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR87jKXvHxmTasVodC0gyhbwx5zMC6DDOav_Q&s',
    opinionPersonal: 'Un viaje onírico y profundo a la muerte y la memoria.',
    opiniones: [
      '“Una obra maestra de la literatura mexicana.” – El Universal',
      '“Misteriosa y poética.” – The New York Times'
    ],
  },
];
