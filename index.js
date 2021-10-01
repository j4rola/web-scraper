const PORT = 4000

const axios = require('axios');
const express = require('express');
const cheerio = require('cheerio');

const array = []

const scraper = express()

const url = 'https://www.espn.com/'

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        $('.headlineStack__list').each( function(){
            const headlines = $(this).text()
            array.push(headlines)
            
        })

        console.log(array)
        
    }).catch(err => console.log(err))

scraper.listen(PORT , () => console.log(`Server running on PORT ${PORT}`))

//function updatePage (){p.innerText = array}

//let loadEvent = document.addEventListener('loadstart', updatePage)

if (typeof window === 'object') {

    let p = document.getElementById('p');
    // Check if document is finally loaded
       document.addEventListener("DOMContentLoaded", function add () {
        p.innerText = array[0]
    });
}




