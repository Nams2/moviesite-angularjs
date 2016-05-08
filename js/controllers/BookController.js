app.controller('BookController', ['$scope', function($scope) { 
  $scope.title = 'Hollywood Movies'; 
  $scope.promo='Hurry UP';
  $scope.products=[ 
  { 
    name: "Kung Fu Panda 3",
    Author:"Rated PG‎‎",
    movietype: "Animation", 
    price: 10, 
    pubdate: new Date('2016', '02', '24'), 
    cover: 'img/Kung_ku_panga_3.jpeg' ,
    likes:0,
    dislikes:0
  },{
    name: "Deadpool",
    Author: "Rated R", 
    movietype: "Action/Adventure/Scifi/Fantasy‎", 
    price: 14, 
    pubdate: new Date('2016', '05', '24'), 
    cover: 'img/deadpool.jpeg' ,
    likes:0,
    dislikes:0
  },
  {
    name: "The Revenant",
    Author:"Rated R",
    movietype: "Thriller", 
    price: 12, 
    pubdate: new Date('2016', '01', '12'), 
    cover: 'img/the_revenant.jpeg' ,
    likes:0,
    dislikes:0
  },
  {
    name: " Star Wars: The Force Awakens",
    Author:"Rated PG‎‎",
    movietype: "Sci-fi fantasy", 
    price: 10, 
    pubdate: new Date('2015', '12', '24'), 
    cover: 'img/star_wars.jpg' ,
    likes:0,
    dislikes:0
  },
  {
    name: "Spectre",
    Author:"Rated R",
    movietype: "Action", 
    price: 10, 
    pubdate: new Date('2015', '12', '24'), 
    cover: 'img/spectre.jpg' ,
    likes:0,
    dislikes:0
  }
  ,
  {
    name: "Goosebumps",
    Author:"Rated PG‎‎",
    movietype: "Action/Fantasy/Comedy", 
    price: 10, 
    pubdate: new Date('2016', '02', '24'), 
    cover: 'img/Goosebumps.jpg' ,
    likes:0,
    dislikes:0
  }
  ]
  $scope.plusOne=function(index) { 
  $scope.products[index].likes += 1; 
};
   $scope.minusOne=function(index) { 
  $scope.products[index].dislikes -= 1; 
};
}]);