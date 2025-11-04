import react from 'react'
import food from '../images/food.png'
import Footer from '../components/Footer'
import { FaFacebook } from 'react-icons/fa'
import { FaLine } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Home(){
    const navigate = useNavigate();
    const [secureCode, setSecureCode] = useState('')    

    const handleAccessAppClick = () =>{
        //validate
        if(secureCode == ''){
            Swal.fire({
                icon: 'warning',
                iconColor: 'orange',
                title: 'กรุณากรอกรหัสเข้าใช้งาน',
                showConfirmButton: true,
                confirmButtonText: 'ตกลง',
                confirmButtonColor: 'orange'
            })
            return;
        }

    if(secureCode.toUpperCase() === 'SAU'){
        navigate('/showallkinkun');
    }else{
        alert('รหัสเข้าใช้งานไม่ถูกต้อง');
    }
}

    return(
        <div>
            <div className='w-10/12 mx-auto border-gray-300 p-6 shadow-md my-10 rounded-1g'>
            <h1 className='text-2x1 font-bold text-center text-blue-700'>
                Kinkun APP (Supabase)
            </h1>

            <h1 className='text-2x1 font-bold text-center text-blue-700'>
                บันทึกกการกิน
            </h1>

            <img src={food} alt="กินกัน" className='block mx-auto w-30 mt-5'></img>

            <input type="text" placeholder='Enter secure code'
                    value={secureCode} onChange={(e)=>{setSecureCode(e.target.value)}}
                    className='p-3 border border-gray-400 rounded-md mt-5 w-full' />
             
            <button className='w-full bg-blue-700 p-3 rounded-md text-white mt-5 hover:bg-blue-800 cursor-pointer'
                                onClick={handleAccessAppClick}>
                เข้าใช้งาน
            </button>

            <div className='mt-5 flex justify-center gap-5'>
                <a href="#">
                    <FaFacebook className='text-2x1 text-gray-500 hover:text-red-700' />
                </a>
                <a href="#">
                    <FaLine className='text-2x1 text-gray-500 hover:text-red-700' />
                </a>
                <a href="#">
                    <AiFillGithub className='text-2x1 text-gray-500 hover:text-red-700' />
                </a>
            </div>

            <Footer/>
            </div>
        </div>
    )
}