import { useRouter } from 'next/router'
import React, { useState } from 'react'
"use client"

export default function Createform() {
    const router = useRouter()
    const [titel,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [priority,setPriority] = useState('low')
    const [isLoading,setIsLoading] = useState('false')
  return (
    <form className='w-1/2'></form>
  )
}
