import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Fibonaci() {

    const navigate = useNavigate()
    const [angka, setAngka] = useState(null)
    const [datafibonaci, setDatafibonaci] = useState([])

    const changeAngka = (e) => {
        setAngka(e.target.value)
    }

    const clickEnter = () => {
        fib(angka)
    }

    function fib(num) {
        var x = 0;
        var y = 1;
        var fibarray = [0];
        setDatafibonaci(fibarray)

        while (y < num) {
            fibarray.push(y);
            y += x;
            x = y - x;
        }

        return fibarray;
    }

    const kembali = () => {
        navigate('/main')
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <p>
                <input type='number' placeholder='Masukkan angka' onChange={changeAngka} />
                <button onClick={clickEnter}>ENTER</button>
            </p>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                {
                    datafibonaci.length !== 0 ? (
                        <>
                            <p>HASIL</p>
                            <p>
                                {
                                    datafibonaci.map((el) => {
                                        return (
                                            <>{`${el}, `}</>
                                        )
                                    })
                                }
                            </p>
                        </>
                    ) : null
                }
            </div>

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

export default Fibonaci