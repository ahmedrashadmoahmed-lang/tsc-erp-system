export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number = 500,
    public isOperational: boolean = true
  ) {
    super(message)
    Object.setPrototypeOf(this, AppError.prototype)
  }
}

export class ValidationError extends AppError {
  constructor(message: string) {
    super(message, 400, true)
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = 'العنصر غير موجود') {
    super(message, 404, true)
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = 'غير مصرح') {
    super(message, 401, true)
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string = 'ليس لديك صلاحية') {
    super(message, 403, true)
  }
}

export function handleError(error: unknown): { message: string; statusCode: number } {
  if (error instanceof AppError) {
    return {
      message: error.message,
      statusCode: error.statusCode,
    }
  }
  
  console.error('Unexpected error:', error)
  
  return {
    message: 'حدث خطأ غير متوقع',
    statusCode: 500,
  }
}
