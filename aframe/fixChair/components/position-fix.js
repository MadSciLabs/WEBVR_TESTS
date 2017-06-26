var _objModel = document.querySelector('#obj-object');        




      window.addEventListener("keypress", moveObject);
        
      function moveObject(event) {
       var _x = _objModel.getAttribute('position').x;
       var _y = _objModel.getAttribute('position').y;
       var _z = _objModel.getAttribute('position').z;
       var _u = _objModel.getAttribute('rotation').x;
       var _v = _objModel.getAttribute('rotation').y;  
       var _w = _objModel.getAttribute('rotation').z;
       var _r = _objModel.getAttribute('scale').x;



       //console.log(_u, _v, _w);
          if(event.keyCode==49){//1
            _x+=0.05;
          }
          else if(event.keyCode==50){//2
            _x-=0.05;
          }
          else if(event.keyCode==51){//3
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
          else if(event.keyCode==57){//9
            _w+=5; 
          }
          else if(event.keyCode==48){//0
            _r-=0.01;
          }
 

          
          console.log("Chair: " + _x + "," + _y + "," +_z + "-" + _u + "," + _v + "," + _w + "," + _r);

          
        _objModel.setAttribute('position', `${_x} ${_y} ${_z}`);
        _objModel.setAttribute('rotation', `${_u} ${_v} ${_w}`);
        _objModel.setAttribute('scale', `${_r} ${_r} ${_r}`);
      }                           