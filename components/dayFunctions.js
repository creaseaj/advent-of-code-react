
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const day1p1 = (input) => {
    input = input.split('\n')
    for (var i = 0; i < input.length; i++) {
        for (var j = i; j < input.length; j++) {
            if (Number.parseInt(input[i]) + Number.parseInt(input[j]) == 2020) {
                return Number.parseInt(input[i]) * Number.parseInt(input[j])

            }
        }
    }
}

const day1p2 = (input) => {
    input = input.split('\n')
    for (var i = 0; i < input.length; i++) {
        for (var j = i; j < input.length; j++) {
            for (var k = j; k < input.length; k++) {
                if (Number.parseInt(input[i]) + Number.parseInt(input[j]) + Number.parseInt(input[k]) == 2020) {
                    return Number.parseInt(input[i]) * Number.parseInt(input[j]) * Number.parseInt(input[k])
                }
            }
        }
    }
}

export default { day1p1, day1p2 }