import React from 'react';
import Article from '../components/Article';

const articles = [
  {
    id: 1,
    title: 'Czym jest teoria strun',
    author: 'Jan Nowak',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eligendi excepturi consectetur autem corporis veritatis laudantium, blanditiis voluptatum asperiores, repudiandae deserunt consequatur eum dicta, rerum maiores assumenda ea quas optio.',
  },
  {
    id: 2,
    title: 'Czym jest paradoks fermiego',
    author: 'Ania Kwiatkowska',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eligendi excepturi consectetur autem corporis veritatis laudantium, blanditiis voluptatum asperiores, repudiandae deserunt consequatur eum dicta, rerum maiores assumenda ea quas optio.',
  },
  {
    id: 3,
    title: 'Ciemna materia i ciemna energia?',
    author: 'Jan Kowalski',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eligendi excepturi consectetur autem corporis veritatis laudantium, blanditiis voluptatum asperiores, repudiandae deserunt consequatur eum dicta, rerum maiores assumenda ea quas optio.',
  },
];
const HomePage = () => {
  const artList = articles.map((article) => <Article key={article.id} {...article} />);

  return <div className='home'>{artList}</div>;
};

export default HomePage;
