const Cvalue = document.getElementById("percentId");

let apply = document.getElementById("btnId");

apply.addEventListener('click', () => {

    let color = document.getElementById("colorId");
    color.innerHTML = "";
    let grab = Cvalue.value;
    
    if(grab>=1 && grab<20){

        let red = document.createElement('div');
        red.className = 'red';
        red.id = 'redId';
        red.style.width = grab + "%";

        let width = 1;
        let Interval = setInterval(frame, 40);
        function frame() {
          if (width >= grab) {
            clearInterval(Interval);
          } else {
            width++;
            red.style.width = width + "%";
          }
        }
        
            color.appendChild(red);
        
    }
    else if(grab>=20 && grab<76){
        let yellow = document.createElement('div');
        yellow.className = 'yellow';
        yellow.id = 'yellowId';

        let width = 1;
        let Interval = setInterval(frame, 20);
        function frame() {
          if (width >= grab) {
            clearInterval(Interval);
          } else {
            width++;
            yellow.style.width = width + "%";
          }
        }
        color.appendChild(yellow);
    }
    else if (grab>=76 && grab<=100) {
        let green = document.createElement('div');
        green.className = 'green';
        green.id = 'greenId';
        green.style.width = grab + "%";

        let width = 1;
        let Interval = setInterval(frame, 20);
        function frame() {
          if (width >= grab) {
            clearInterval(Interval);
          } else {
            width++;
            green.style.width = width + "%";
          }
        }
        
        color.appendChild(green);
    }
    else {
        let alert = document.createElement('div');
        alert.className = "alert";
        let alertMsg = document.createTextNode("Enter No. Between 1-100!");
        alert.appendChild(alertMsg);
        color.appendChild(alert);
    }
})