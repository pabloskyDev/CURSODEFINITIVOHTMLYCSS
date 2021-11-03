// $(document).ready(function(){
    
// });

function displayData(val){
    var minutes = 60;

    hour = document.getElementById('hour').value;
    minutesE = document.getElementById('minute').value;

    if(!hour == '' && !minutesE == ''){
        
        if(hour < 10){
            let hourP = 11;
            hour = -1*(hour - hourP);
        }else{
            let hourP = 23;
            hour = -1*(hour - hourP);
        }

        minutesE = -1*(minutesE - minutes);

        if(minutesE == 60){
            hour= hour + 1;
            minutesE = minutesE - minutes;
        }

        alert('The real hour is: ' + hour + ' : ' + minutesE);
    }
}