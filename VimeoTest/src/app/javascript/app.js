(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [

    {
      name : 'Dodecahedron',
      price: 2.95,
      description: 'This is a very common jewel, is therefore extremely affordable',
      images:[
        {
          full : "gemOrange1.png",
          thumb: "gemOrange1.png"
        },
        {
          full : "gemOrange2.png",
          thumb: "gemOrange2.png"
        }
      ],
      canPurchase: true,
      soldOut: false
    },

    {
      name: "Pentagonal Gem",
      price: 5.95,
      description: ". . .",
      images:[
        {
          full : "gemOrange3.png",
          thumb: "gemOrange3.png"
        },
        {
          full : "gemOrange2.png",
          thumb: "gemOrange2.png"
        }
      ],
      canPurchase: true,
      soldOut: false
    }


  ]

})();
