var app = new Vue ({
    el: '#app',
    data: {
      foodList:['蔥','薑','蒜'],
      foodList:[
        {
          name:'蔥',
          price:'10',
          discount: .8,
        },
        {
          name:'薑',
          price: '5',
          discount: .6,
        },
        {
          name:'蒜',
          price: '4.5',
         
        },
      ]
    } 
});