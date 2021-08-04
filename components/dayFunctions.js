
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const day1p1 = (input) => {
    input = input.split('\n')
    console.log(input)
    input.map((item1, i) => {
        input.map((item2, j) => {
            console.log(Number.parseInt(item1) + Number.parseInt(item2))
            if (Number.parseInt(item1) + Number.parseInt(item2) == 2020) {
                return Number.parseInt(item1) * Number.parseInt(item2)
            }
        })

    });
}

export default day1p1