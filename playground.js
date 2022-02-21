window.onload = () => main()

function main() {


    setInterval(function () {
        const $ = (selector) => document.getElementById(selector)
        let hour = $("hour")
        let min = $("min")
        let sec = $("sec")
        let date = new Date()

        let getHours = date.getHours()
        let getMinutes = date.getMinutes()
        let getSeconds = date.getSeconds()


        function getAll(param) {
            if (getHours < 10) {
                getHours = `0${getHours}`
            }
            if (getMinutes < 10) {
                getMinutes = `0${getMinutes}`
            }
            if (getSeconds < 10) {
                getSeconds = `0${getSeconds}`
            }
        }

        getAll()
        hour.innerText = getHours
        min.innerText = getMinutes
        sec.innerText = getSeconds


    });




}