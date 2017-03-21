var app = angular.module("App",[]);
  app.controller("ProductCtrl",function($scope){
    $scope.query = {}
    $scope.queryBy = '$'
    $scope.products = [
      {
        "name" : "Electronic",
        "url" : "sub_products.html",
        "designation" : "Electronic",
        "image" : "image/fridge.jpg"
      },
      {
        "name" : "Wood chair",
        "url" : "sub_products.html",
        "designation" : "Wood chair",
         "image" : "image/wood_chair.jpg"
      },
      {
        "name" : "Sprots Beauty",
        "url" : "sub_products.html",
        "designation" : "Sprots Beauty",
         "image" : "image/sports.jpg"
      },
      {
        "name" : "Beauty",
        "url" : "sub_products.html",
        "designation" : "Beauty",
         "image" : "image/maycup.jpg"
      },
      
      {
        "name" : "Kitchen",
        "url" : "sub_products.html",
        "designation" : "Kitchen",
         "image" : "image/kitchen.jpg"
      },
      {
        "name" : "Dress",
        "url" : "sub_products.html",
        "designation" : "Dress",
         "image" : "image/dress.jpg"
      },
      {
        "name" : "Motorcycle",
        "url" : "sub_products.html",
        "designation" : "Motorcycle",
         "image" : "image/bike_car.jpg"
      }
          
    ];
                  
  });