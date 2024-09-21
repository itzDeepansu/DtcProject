"use client"
import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Generate 80 unique route numbers
const routeNumbers = Array.from({ length: 80 }, (_, i) => i + 1)

// Generate random emission value between 0.1 and 0.5
const randomEmissionIncrease = () => Math.random() * 0.4 + 0.1

export default function Component() {
  const [emissions, setEmissions] = useState(routeNumbers.map(() => 200))
  const [currentDateTime, setCurrentDateTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setEmissions(prevEmissions => 
        prevEmissions.map(emission => {
          const newEmission = emission + randomEmissionIncrease()
          return Math.min(newEmission, 1000) // Cap at 1000
        })
      )
      setCurrentDateTime(new Date())
    }, 1000) // Update every second

    return () => clearInterval(interval)
  }, [])

  const getEmissionColor = (emission) => {
    if (emission < 400) return 'text-green-500'
    if (emission < 700) return 'text-yellow-500'
    return 'text-red-500'
  }

  const formatDateTime = (date) => {
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    })
  }

  return (
    <div className="container mx-auto p-4 text-white bg-[#171717] rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-2 text-white">Bus Route Carbon Emission Tracker</h1>
      <p className="text-center mb-6 text-gray-600">{formatDateTime(currentDateTime)}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {routeNumbers.map((routeNumber, index) => (
          <Card key={routeNumber} className="border-[#4c4c4c] bg-gradient-to-br from-[#171717] to-slate-600 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="space-y-1 pb-2">
              <CardTitle className="text-lg font-semibold text-center text-green-700">Route {routeNumber}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-transparent rounded-lg p-2 shadow-inner border-[#4c4c4c] border">
                <h2 className="text-sm font-semibold text-gray-400 mb-1">Carbon Emission</h2>
                <p className={`text-xl font-bold ${getEmissionColor(emissions[index])}`}>
                  {emissions[index].toFixed(2)} kg
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}