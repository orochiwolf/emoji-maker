'use client'

interface FormProps {
  onSubmit: (e: React.FormEvent) => void
}

export function Form({ onSubmit }: FormProps) {
  return (
    <form onSubmit={onSubmit}>
      {/* Your form fields here */}
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  )
} 