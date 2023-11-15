import { ValidationError } from 'express-validator';

export class ApiError extends Error {
  status: number;
  errors: ValidationError[];

  constructor(status: number, message: string, errors: ValidationError[] = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError(): ApiError {
    return new ApiError(401, 'User is not authorized');
  }

  static BadRequest(message: string, errors: ValidationError[] = []): ApiError {
    return new ApiError(400, message, errors);
  }
}
