
const API_KEY = 'e30c5d1ebb4f58170c1e01930d962ab1';


function renderWeatherInfo(data){
    let newPara = document.createElement ('p');
    newPara. textContent =`${data?.main?.temp.toFixed(2)}°C`;
    document. body.appendChild (newPara);
}

async function showWeather() {

    try{

        let city = "bareilly";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            
        const data=await response.json();
        console.log("Weather data:->" , data);
    
        renderWeatherInfo(data);
    }
    catch(err){
        // error
    }

}


showWeather();








