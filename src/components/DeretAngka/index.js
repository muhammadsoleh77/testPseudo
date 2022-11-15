import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

function DeretAngka() {

    const navigate = useNavigate()
    const [sum, setSum] = useState([])

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
            {
                sum.map((el) => {
                    if(el <= 60) {
                        return (
                            <>{`KURANG ${el}, `}</>
                        )
                    } else if(el > 60 && el <= 70) {
                        return (
                            <>{`CUKUP ${el}, `}</>
                        )
                    } else if(el > 70 && el <= 80) {
                        return (
                            <>{`BAIK ${el}, `}</>
                        )
                    } else if(el > 80) {
                        return (
                            <>{`LUAR BIASA ${el}, `}</>
                        )
                    }
                })
            }

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