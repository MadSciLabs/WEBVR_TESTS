var _objModel = document.querySelector('#obj-object'); 
var _objHand = document.querySelector('#hand-object');

      window.addEventListener("keypress", moveObject);
        
      function moveObject(event) {

       var _x = _objModel.getAttribute('position').x;
       var _y = _objModel.getAttribute('position').y;
       var _z = _objModel.getAttribute('position').z;
       var _u = _objModel.getAttribute('rotation').x;
       var _v = _objModel.getAttribute('rotation').y;  
       var _w = _objModel.getAttribute('rotation').z;

       var _hx = _objHand.getAttribute('position').x;
       var _hy = _objHand.getAttribute('position').y;
       var _hz = _objHand.getAttribute('position').z;
       var _hu = _objHand.getAttribute('rotation').x;
       var _hv = _objHand.getAttribute('rotation').y;  
       var _hw = _objHand.getAttribute('rotation').z;

       //console.log(_u, _v, _w);
          if(event.keyCode==49){
            _x+=0.05;
          }
          else if(event.keyCode==50){
            _x-=0.05;
          }
          else if(event.keyCode==51){
            _y+=0.05;
          }
          else if(event.keyCode==52){
            _y-=0.05;
          }
          else if(event.keyCode==53){
            _z+=0.05;
          }
          else if(event.keyCode==54){
            _z-=0.05;
          }
          if(event.keyCode==55){
            _u+=5;
          }
          else if(event.keyCode==56){
            _v+=5; 
          }
          else if(event.keyCode==57){
            _w+=5; 
          }

          //KEYCODE 
          if(event.keyCode==108){
            _hx+=0.05;
          }
          else if(event.keyCode==106){
            _hx-=0.05;
          }
          else if(event.keyCode==105){
            _hy+=0.05;
          }
          else if(event.keyCode==107){
            _hy-=0.05;
          }
          else if(event.keyCode==117){
            _hz+=0.05;
          }
          else if(event.keyCode==111){
            _hz-=0.05;
          }
          if(event.keyCode==98){
            _hu+=5;
          }
          else if(event.keyCode==110){
            _hv+=5; 
          }
          else if(event.keyCode==109){
            _hw+=5; 
          }
          
          console.log("Chair: " + _x + "," + _y + "," +_z + "-" + _u + "," + _v + "," + _w);
          console.log("Hand: " + _hx + "," + _hy + "," +_hz + "-" + _hu + "," + _hv + "," + _hw);
          
        _objModel.setAttribute('position', `${_x} ${_y} ${_z}`);
        _objModel.setAttribute('rotation', `${_u} ${_v} ${_w}`);
        
      }                           