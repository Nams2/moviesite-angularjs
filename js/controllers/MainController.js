app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Bollywood Movies'; 
  $scope.promo='Rate You movie';
  $scope.products=[ 
  { 
    name: "Airlift",
    Author:"Rated R",
    movietype: "War/Thriller", 
    price: 10, 
    pubdate: new Date('2016', '02', '24'), 
    cover: 'img/Airlift.jpg' ,
    likes:0,
    dislikes:0
  },{
    name: " Ki & Ka",
    Author: "Rated PG", 
    movietype: "Romance/Comedy", 
    price: 14, 
    pubdate: new Date('2016', '04', '4'), 
    cover: 'img/kika.jpeg' ,
    likes:0,
    dislikes:0
  },
  {
    name: " Dilwale",
    Author:"Rated PG",
    movietype: "Drama", 
    price: 12, 
    pubdate: new Date('2015', '11', '12'), 
    cover: 'img/Dilwali.png' ,
    likes:0,
    dislikes:0
  },
  {
    name: "Shaandaar",
    Author:"Rated PG‎‎",
    movietype: "Romance/Comedy", 
    price: 10, 
    pubdate: new Date('2015', '12', '24'), 
    cover: 'img/shaandar.jpeg' ,
    likes:0,
    dislikes:0
  },
  {
    name: "Jazbaa",
    Author:"Rated R",
    movietype: "Action/Drama", 
    price: 10, 
    pubdate: new Date('2015', '12', '14'), 
    cover: 'img/Jazbaa.jpg' ,
    likes:0,
    dislikes:0
  }
  ,
  {
    name: "Prem Ratan Dhan Payo",
    Author:"Rated PG‎‎",
    movietype: "Drama", 
    price: 10, 
    pubdate: new Date('2015', '10', '20'), 
    cover: 'img/prem.jpg' ,
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