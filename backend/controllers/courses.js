const { v4: uuid } = require('uuid');

const coursesData = [
  {
    authors: ['Bartłomiej Borowczyk'],
    id: uuid(),
    img: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    price: 69.99,
    title: 'Web developer od podstaw w 15 dni',
  },
  {
    authors: ['Bartłomiej Borowczyk'],
    id: uuid(),
    img: 'https://miuc.org/wp-content/uploads/2020/08/6-Reasons-why-you-should-learn-Programming-1280x720.png',
    price: 69.99,
    title: 'Zaawansowany front-end w 15 dni',
  },
  {
    authors: ['Bartłomiej Borowczyk'],
    id: uuid(),
    img: 'https://cdn.britannica.com/30/199930-131-B3D1D347/computer.jpg',
    price: 69.99,
    title: 'Programowanie w JavaScript',
  },
  {
    authors: ['Bartłomiej Borowczyk', 'Mateusz Domański'],
    id: uuid(),
    img: 'https://d1rytvr7gmk1sx.cloudfront.net/wp-content/uploads/2020/01/python-developer.jpg',
    price: 69.99,
    title: 'React od podstaw - teoria i praktyka',
  },
  {
    authors: ['Bartłomiej Borowczyk'],
    id: uuid(),
    img: 'https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces,q_auto/https://www.gcu.edu/sites/default/files/2020-09/programming.jpg',
    price: 69.99,
    title: 'Backend - Node.js, Express i MongoDB',
  },
  {
    authors: ['Bartłomiej Borowczyk'],
    id: uuid(),
    img: 'https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-developer-picture-id1133924836?k=20&m=1133924836&s=612x612&w=0&h=ZbBADkAdBr-vQ63_HYk6ZAVV4nUlfNrsvnJLG389OKA=',
    price: 69.99,
    title: '(Zaawansowane) Projekty w CSS i JavaScript',
  },
  {
    authors: ['Bartłomiej Borowczyk'],
    id: uuid(),
    img: 'https://extension.harvard.edu/wp-content/uploads/sites/8/2020/10/computer-programming.jpg',
    price: 0,
    title: 'Wprowadzenie do Git i GitHub',
  },
  {
    authors: ['Bartłomiej Borowczyk', 'Mateusz Domański', 'Michał Dziedziński', 'Kacper Sieradziński'],
    id: uuid(),
    img: 'https://www.soldevelo.com/blog/wp-content/uploads/What-makes-a-great-programmer-banner-1536x1024-1.jpeg',
    price: 69.99,
    title: 'Programowanie obiektowe w JavaScript - opanuj, tworząc gry!'
  }
];

exports.getCourses = (request, response, next) => {
  try {
    response.status(200).json({
      courses: coursesData
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: 'Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /courses',
    });
  }
};

exports.getCourse = (request, response, next) => {
  try {
    const { id } = request.params;
    const courseToSend = coursesData.find(course => course.id === id);

    if (!courseToSend) {
      response.status(404).json({
        message: 'Nie znaleziono kursu o podanym id',
      });
      
      return;
    }

    response.status(200).json({
      course: courseToSend, 
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: 'Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /courses/:id',
    })
  }
};

exports.postCourse = (request, response, next) => {
  try {
    const { authors, img, price, title } = request.body;
    if ( !authors || !price || !title ) {
      response.status(400).json({
        message: 'Nie podano wszystkich wymaganych informacji',
      });

      return;
    }

    const isCourseExist = coursesData.some(({title: currentTitle}) => currentTitle === title);
    if (isCourseExist) {
      response.status(409).json({
        message: `Istnieje już w bazie kurs ${title}`,
      });

      return;
    }

    const newCourse = {
      authors: authors,
      id: uuid(),
      img,
      price,
      title,
    };

    coursesData.push(newCourse);

    response.status(201).json({
      courses: coursesData
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: 'Oops! Coś poszło nie tak, przy metodzie POST w endpointcie /courses'
    });
  }
};

exports.putCourse = (request, response, next) => {
  try {
    const { authors, id, price, title } = request.body;
    if (!authors || !id || !price || !title) {
      response.status(400).json({
        message: 'Nie podano wszystkich wymaganych informacji',
      });

      return;
    }

    const indexCourseToUpdate = coursesData.findIndex(course => course.id === id);
    if (indexCourseToUpdate === -1) {
      response.status(404).json({
        message: 'Nie znaleziono kursu o podanym id',
      });
      
      return;
    }
    
    
    coursesData.splice(indexCourseToUpdate, 1, request.body);

    response.status(202).json({
      courses: coursesData
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: 'Oops! Coś poszło nie tak, przy metodzie PUT w endpointcie /courses'
    });
  }
};

exports.deleteCourse = (request, response, next) => {
  try {
    const { id } = request.params;

    console.log(id);
    const indexCourseToDelete = coursesData.findIndex(course => course.id === id);

    if (indexCourseToDelete === -1) {
      response.status(404).json({
        message: 'Nie znaleziono kursu o podanym id',
      });
      
      return;
    }

    coursesData.splice(indexCourseToDelete, 1);
    response.status(200).end();
  } catch (error) {
    response.status(500).json({
      error,
      message: 'Oops! Coś poszło nie tak, przy metodzie DELETE w endpointcie /courses/:id',
    });
  }
};

exports.coursesData = coursesData;