'use client'

import { useState } from 'react'
import { Form } from './Form'

export default function FormWrapper() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Your submission logic here
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
} 