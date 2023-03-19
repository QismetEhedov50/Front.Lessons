document.getElementById("AylarSelect").addEventListener("change", function () {
    getIslamicTime(this.value)
})
function getIslamicTime(monthData) {
    fetch(` https://api.aladhan.com/v1/calendarByCity/2023/${monthData}?city=Baku&country=Azerbaijan&method=2`)
        .then(response => response.json())
        .then(json => {
            var date = new Date();
            var nowDay = date.getDate() - 1;
            document.getElementById("İmsak").innerHTML = json.data[nowDay].timings.Imsak
            document.getElementById("Sübh").innerHTML = json.data[nowDay].timings.Fajr
            document.getElementById("Zöhr").innerHTML = json.data[nowDay].timings.Dhuhr
            document.getElementById("Əsr").innerHTML = json.data[nowDay].timings.Asr
            document.getElementById("Axşam").innerHTML = json.data[nowDay].timings.Maghrib
            document.getElementById("İşa").innerHTML = json.data[nowDay].timings.Isha


        })
}