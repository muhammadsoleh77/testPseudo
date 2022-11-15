import React from 'react'
import './App.css';
import { useNavigate } from 'react-router-dom';

function Main() {

    const navigate = useNavigate()

    const clickTest1 = () => {
        navigate('/deretAngka')
    }

    const clickTest2 = () => {
        navigate('/fibonaci')
    }

    const clickTest3 = () => {
        navigate('/perulangan')
    }

    const clickTest4 = () => {
        navigate('/terbilang')
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    TES PSEUDO CODE
                </p>
                <p>
                    <button
                        style={{
                            border: 'none',
                            backgroundColor: 'green',
                            padding: '15px 10px',
                            borderRadius: '10px',
                            color: '#fff',
                            cursor: 'pointer'
                        }}
                        onClick={clickTest1}
                    >SOAL 1. DERET ANGKA</button>
                </p>
                <p>
                    <button
                        style={{
                            border: 'none',
                            backgroundColor: 'green',
                            padding: '15px 10px',
                            borderRadius: '10px',
                            color: '#fff',
                            cursor: 'pointer'
                        }}
                        onClick={clickTest2}
                    >SOAL 2. FIBONACI</button>
                </p>
                <p>
                    <button
                        style={{
                            border: 'none',
                            backgroundColor: 'green',
                            padding: '15px 10px',
                            borderRadius: '10px',
                            color: '#fff',
                            cursor: 'pointer'
                        }}
                        onClick={clickTest3}
                    >SOAL 3. PERULANGAN</button>
                </p>
                <p>
                    <button
                        style={{
                            border: 'none',
                            backgroundColor: 'green',
                            padding: '15px 10px',
                            borderRadius: '10px',
                            color: '#fff',
                            cursor: 'pointer'
                        }}
                        onClick={clickTest4}
                    >SOAL 4. TERBILANG</button>
                </p>
            </header>
        </div>
    )
}

export default Main