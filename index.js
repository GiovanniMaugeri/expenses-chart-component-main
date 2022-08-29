fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
        const colums = document.getElementsByClassName("column");
        const maxLength = 150;
        var maxValue = 0;
        Object.entries(json).forEach((data) =>{
            if(data[1].amount > maxValue){
                maxValue = data[1].amount
            }
        })
        Object.entries(json).forEach((data,index) => {
            
            colums[index].children[0].textContent = '$' + data[1].amount;
            colums[index].children[2].textContent =  data[1].day;
            var width = data[1].amount * maxLength / maxValue;
            console.log(width);
            console.log(colums[index].children[1]);
            colums[index].children[1].style.height = width +'px';
        });
        
        
    });
