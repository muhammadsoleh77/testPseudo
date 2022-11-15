import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Perulangan() {

    const navigate = useNavigate()
    const [variable, setVariable] = useState(null)
    const [result, setResult] = useState([])

    const changeAngkaPerulangan = (e) => {
        setVariable(e.target.value)
    }

    const clickEnterPerulangan = () => {
        var str = "";
        const num = parseInt(variable) + 1

        for (var baris = 1; baris < num; baris++) {
            for (var kol = 0; kol < baris; kol++) {
                // document.write(str);
                str+='*'
            }
            // document.write("<br/>")
            str+='\n'
        }
        setResult(str)
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
                <input type='number' placeholder='Masukkan angka' onChange={changeAngkaPerulangan} />
                <button onClick={clickEnterPerulangan}>ENTER</button>
            </p>

            <p>{result}</p>

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

export default Perulangan