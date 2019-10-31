var app = new Vue ({
    el: '#app',
    methods: {
      onClick: function () {
        console.log('cliked');
      },
      onEnter: function () {
        console.log('mouse enter');
      },  
      onOut: function () {
        console.log('mouse leave');
      },
      onSubmit: function () {
        console.log('submitted');
      },
      onEnter: function () {
        console.log('entered');
      },
    }  
});