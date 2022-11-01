// Copyright (c) 2022 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: Sep 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit2-05B", {
    scope: "/ICS2O-Unit2-05B/",
  })
}

/**
 * This function displays an alert.
 */

function calculate() {
  const hours = parseInt(
    document.getElementById("number-of-hours-worked").value
  )
  const rate = parseInt(document.getElementById("Hourly-rate").value)

  const take = hours * rate * 0.18
  const wage = hours * rate * (1.0 - 0.18)

  document.getElementById("take").innerHTML =
    "The governemnt will take: " + take.toFixed(2) + "$"
  document.getElementById("wage").innerHTML =
    "your pay will be: " + wage.toFixed(2) + "$"
}
