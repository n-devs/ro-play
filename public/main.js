
const loaderBox = document.getElementById("box-loader")
const bg = document.getElementById("bg")


function run() {

    window.lastTouchTimestamp = 0;

    document.addEventListener('touchstart', function (event) {
        const nowTouchTimestamp = new Date().getTime();
        const tapDelayThreshold = 300;
        const tapDelay = nowTouchTimestamp - window.lastTouchTimestamp;
        if (tapDelay <= tapDelayThreshold) {
            event.preventDefault();
        }
        window.lastTouchTimestamp = nowTouchTimestamp;
    }, { passive: false });



    loaderBox.style.display = "flex"
    bg.style.display = "block"

    fetch("https://raw.githubusercontent.com/n-devs/public-ip/data/ip-address.json").then(res => res.json())
        .then(data => {


            window.ROConfig = {
                "remoteClient": `https://${data.ipv4}:5737/`,
                "width": "100%",
                "height": "100%",
                "socketProxy": `ws://${data.ipv4}:5999`,
                "servers": [
                    {
                        "display": "เซิฟเวอร์ต่างโลก",
                        "desc": "Ro Saga Server Bata",
                        "address": `${data.ipv4}`,
                        "port": 6900,
                        "version": 55,
                        "langtype": 5,
                        "packetver": 20141022,
                        "forceUseAddress": true,
                        "socketProxy": `ws://${data.ipv4}:5999`,
                        "packetKeys": true
                    }
                ],
                "development": false,
                "packetver": 20141022,
                "skipIntro": true,
                "saveFiles": true
            };

            let script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'Online.js';
            document.getElementsByTagName('body')[0].appendChild(script);
            bg.style.display = "none"
            loaderBox.style.display = "none"

        }).catch(err => { throw err });


}

run()

