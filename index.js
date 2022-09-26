const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204
const feetToMeter = (1/meterToFeet).toFixed(3)
const gallonToLiter = (1/literToGallon).toFixed(3)
const poundToKilo = (1/kiloToPound).toFixed(3)

let massEl = document.getElementById('mass')
let volumeEl = document.getElementById('volume')
let lenghtEl = document.getElementById('lenght')
let inputEl = document.getElementById('input')
let convertBtn = document.getElementById('convert')

convertBtn.addEventListener('click', ()=>convert())

lenghtEl.textContent = `1 meter = ${meterToFeet} feet | 1 feet = ${feetToMeter} meter`
volumeEl.textContent = `1 liter = ${literToGallon} gallons | 1 gallon = ${gallonToLiter} liter`
massEl.textContent = `1 kilo = ${kiloToPound} pounds | 1 pound = ${poundToKilo} kilo`

function convert(){
    let value = inputEl.value
    
    lenghtEl.textContent = `${value} meter = ${(value*meterToFeet).toFixed(3)} feet | ${value} feet = ${(value*feetToMeter).toFixed(3)} meter`
    volumeEl.textContent = `${value} liter = ${(value*literToGallon).toFixed(3)} gallons | ${value} gallon = ${(value*gallonToLiter).toFixed(3)} liter`
    massEl.textContent = `${value} kilo = ${(value*kiloToPound).toFixed(3)} pounds | ${value} pound = ${(value*poundToKilo).toFixed(3)} kilo`
}