import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency: string = 'EGP'): string {
  return new Intl.NumberFormat('ar-EG', {
    style: 'currency',
    currency: currency,
  }).format(amount)
}

export function formatDate(date: Date | string, format: 'short' | 'long' = 'short'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  
  if (format === 'long') {
    return new Intl.DateTimeFormat('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(dateObj)
  }
  
  return new Intl.DateTimeFormat('ar-EG').format(dateObj)
}

export function calculateVAT(amount: number, rate: number = 14): number {
  return (amount * rate) / 100
}

export function calculateTotal(subtotal: number, vatRate: number = 14, profitTaxRate: number = 1): {
  subtotal: number
  vatAmount: number
  profitTaxAmount: number
  totalAmount: number
} {
  const vatAmount = calculateVAT(subtotal, vatRate)
  const profitTaxAmount = calculateVAT(subtotal, profitTaxRate)
  const totalAmount = subtotal + vatAmount + profitTaxAmount
  
  return {
    subtotal,
    vatAmount,
    profitTaxAmount,
    totalAmount,
  }
}
