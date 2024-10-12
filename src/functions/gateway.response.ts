import { StatusCode } from './../constants/status-code';

export const notFound = (
  message: string = 'Resource not found',
  error: Record<string, any> = {},
) => {
  return {
    statusCode: StatusCode.NOT_FOUND,
    message,
    error
  };
}

export const badRequest = (
  message: string = 'Bad request',
  error: Record<string, any> = {},
) => {
  return {
    statusCode: StatusCode.BAD_REQUEST,
    message,
    error
  };
}