
x = 0
function image(event){
    
    
    while (x <= 8){

        minyear = 2020
        maxyear = 2023

        let year =  Math.floor(Math.random() * (maxyear - minyear) + minyear) 


        minmonth = 1
        maxmonth = 13
        let month = Math.floor(Math.random() * (maxmonth - minmonth) + minmonth) 
        
        minday = 1
        maxday = 27
    
        let day = Math.floor(Math.random() * (maxday - minday) + minday)

    

    

    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=JEaeur1NeLKPFOuIf0w9vvSGcKheW0OOL3NP4Ztx&date='+year+'-'+month +'-'+day, true)
    xhr.onload = (event) => {
		response(xhr, event)
	}

    const image = 'https://api.nasa.gov/planetary/apod?api_key=JEaeur1NeLKPFOuIf0w9vvSGcKheW0OOL3NP4Ztxdate='+year+'-'+month +'-'+day

    xhr.send(image)

    x++

    }

    if(x == 8){
        x = 0;
    }

}

function response(xhr, event){
     if (xhr.status != 200) {
		
        return;
     }

     const data = JSON.parse(xhr.response)
     const trfirst = document.getElementById('m')
     const td = document.createElement('tr')
     td.innerHTML = `<td>${data.title}</td> <img src = '${data.hdurl}'  width = '1080' height = '300' </img>`
     trfirst.appendChild(td)
     console.log(data)
     

}

window.onload = image;

function refresh(event){

    location.reload()
    
    

}