const puppeteer = require('puppeteer')

async function getLatestDate(page, url){
    await page.goto(url) // ページへ移動

    const getData = await page.evaluate(() => {
        document.getElementsByClassName('eventTable')[0]
            .getElementsByClassName('eventTable--event')[0]
            .getElementsByClassName('t20m00')[0]//ここの値と
            .getElementsByClassName('day-thursday')[0].innerText//ここを動的に変えればだいたい完成ではw
    })


    return '20:00 '+getData
}

!(async() => {
    try {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()

        const latestDate = await getLatestDate(page, 'http://pso2.jp/players/boost/')
        console.log(latestDate)

        browser.close()
    } catch(e) {
        console.error(e)
    }
})()