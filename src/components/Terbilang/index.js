import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Terbilang() {

    const navigate = useNavigate()

    const [angkaTerbilang, setAngkaTerbilang] = useState(null)
    const [resultTerbilang, setResultTerbilang] = useState('')

    // START CONVERT TERBILANG
    var ones = ['', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan'];
    var tens = ['', '', 'Dua puluh', 'Tiga puluh', 'Empat puluh', 'Lima puluh', 'Enam puluh', 'Tujuh puluh', 'Delapan puluh', 'Sembilan puluh'];
    var teens = ['Sepuluh', 'Sebelas', 'Dua belas', 'Tiga belas', 'Empat belas', 'Lima belas', 'Enam belas', 'Tujuh belas', 'Delapan belas', 'Sembilan belas'];

    function convert_millions(num) {
        if (num >= 1000000) {
            return convert_millions(Math.floor(num / 1000000)) + " Juta " + convert_thousands(num % 1000000);
        } else {
            return convert_thousands(num);
        }
    }

    function convert_thousands(num) {
        if (num >= 1000) {
            return convert_hundreds(Math.floor(num / 1000)) + " Ribu " + convert_hundreds(num % 1000);
        } else {
            return convert_hundreds(num);
        }
    }

    function convert_hundreds(num) {
        if (num > 99) {
            return ones[Math.floor(num / 100)] + " Ratus " + convert_tens(num % 100);
        } else {
            return convert_tens(num);
        }
    }

    function convert_tens(num) {
        if (num < 10) return ones[num];
        else if (num >= 10 && num < 20) return teens[num - 10];
        else {
            return tens[Math.floor(num / 10)] + " " + ones[num % 10];
        }
    }

    function convert(num) {
        if (num == 0) return "zero";
        else return convert_millions(num);
    }
    //END CONVERT TERBILANG

    const changeAngkaTerbilang = (e) => {
        setAngkaTerbilang(e.target.value)
    }

    const clickEnterTerbilang = () => {
        const dataTerbilang = convert(angkaTerbilang)
        setResultTerbilang(dataTerbilang)
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
                <input type='number' placeholder='Masukkan angka' onChange={changeAngkaTerbilang} />
                <button onClick={clickEnterTerbilang}>ENTER</button>
            </p>

            <p>{resultTerbilang}</p>

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

export default Terbilang