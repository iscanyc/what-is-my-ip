fetch('http://ip-api.com/json')
    .then(response => response.json())
    .then(data => {
        document.querySelector("body > div > div.ip").innerHTML = data.query;
        document.querySelector("body > div > div.country").innerHTML = `${data.country} (${data.countryCode})`
        document.querySelector("body > div > div.isp").innerHTML = data.isp;
    });
document.querySelector("div.info").addEventListener('click', () => {
    const text = document.querySelector("body > div > div.ip").innerHTML;
    const data = document.querySelector("body > div.info");
    const hasAlert = document.querySelector("body > div.info > div.alert")
    if (text !== "Loading info..." && hasAlert === null) {
        navigator.clipboard.writeText(text).then(function () {
            data.innerHTML += '<div class="alert">Successfully copied to clipboard.</div>';
            setTimeout(() => document.querySelector('body > div > div.alert').remove(), 1800);
        }, function (err) {
            data.innerHTML += '<div class="alert err">Have some errors.</div>';
            setTimeout(() => document.querySelector('body > div > div.alert').remove(), 1800);
        });
    }
})
