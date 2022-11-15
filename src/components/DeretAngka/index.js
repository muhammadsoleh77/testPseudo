import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function DeretAngka() {

    const navigate = useNavigate()
    const [sum, setSum] = useState([])

    const [kurang, setKurang] = useState([])
    const [cukup, setCukup] = useState('')
    const [baik, setBaik] = useState('')
    const [luarbiasa, setLuarbiasa] = useState('')

    useEffect(() => {
        var x = 5;
        var max = 100;
        var array = [];

        for (var i = 50; i < max - 1; i++) {
            if ((i % x === 0)) {
                array.push(i);
            }
        }
        setSum(array)
    }, [])

    useEffect(() => {

        let dataKurang = []
        let dataCukup = []
        let dataBaik = []
        let dataLuarbiasa = []

        if (sum.length !== 0) {
            sum.forEach((el) => {
                if (el <= 60) {
                    dataKurang.push(`KURANG ${el} `)
                    setKurang(dataKurang)
                    return false
                } else if (el > 60 && el <= 70) {
                    dataCukup.push(`CUKUP ${el} `)
                    setCukup(dataCukup)
                } else if (el > 70 && el <= 80) {
                    dataBaik.push(`BAIK ${el} `)
                    setBaik(dataBaik)
                } else if (el > 80) {
                    dataLuarbiasa.push(`LUAR BIASA ${el} `)
                    setLuarbiasa(dataLuarbiasa)
                }
            })
        }
    }, [sum])

    const kembali = () => {
        navigate('/main')
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <p><b>DATA DERET ANGKA KELIPATAN 5</b></p>
            {kurang}{cukup}{baik}{luarbiasa}

            <button
                style={{
                    margin: '100px 0',
                    border: 'none',
                    background: 'green',
                    padding: '20px 15px',
                    borderRadius: '10px',
                    color: '#fff',
                    cursor: 'pointer'
                }}
                onClick={kembali}
            >KEMBALI</button>
        </div>
    )
}

export default DeretAngka