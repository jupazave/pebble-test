var UI = require('ui');
var ajax = require('ajax');

var URL = 'http://192.168.1.70:1337';
var menu = new UI.Menu({
});

menu.on('select', function(e) {
  console.log('Selected item #' + e.item.code_id + ' of section #');
  ajax(
    {
      url: URL + "/code/emit?id=" + e.item.code_id,
      type: 'json'
    },
    function(data) {

      
    },
    function(error) {
    }
  );
});

ajax(
  {
    url: URL + "/device/",
    type: 'json'
  },
  function(data) {
    console.log( data.length);
    
    for (var i = 0; i < data.length; i++) {
      var section = {},
          items = [];
      section.title = data[i].macaddress;
      for (var j = 0; j < data[i].codes.length; j++) {
        items.push(
          {
            title: data[i].codes[j].action,
            code_id: data[i].codes[j].id
          });
      }
      section.items = items;
      
      menu.section(i, section);
    }
    
    
    menu.show();
    
  },
  function(error) {
  }
);


