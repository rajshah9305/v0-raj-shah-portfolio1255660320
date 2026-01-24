/**
 * Enterprise Error Handling System
 * Handles all error types and provides consistent error reporting
 */

export enum ErrorType {
  VALIDATION = 'VALIDATION_ERROR',
  NETWORK = 'NETWORK_ERROR',
  API = 'API_ERROR',
  AUTHENTICATION = 'AUTH_ERROR',
  PERMISSION = 'PERMISSION_ERROR',
  NOT_FOUND = 'NOT_FOUND_ERROR',
  SERVER = 'SERVER_ERROR',
  UNKNOWN = 'UNKNOWN_ERROR',
}

export interface AppError {
  type: ErrorType;
  message: string;
  statusCode?: number;
  context?: Record<string, unknown>;
  timestamp: number;
  isDev: boolean;
}

class ErrorHandler {
  private static isDev = process.env.NODE_ENV === 'development';

  /**
   * Create a structured error
   */
  static create(
    type: ErrorType,
    message: string,
    statusCode?: number,
    context?: Record<string, unknown>
  ): AppError {
    return {
      type,
      message,
      statusCode,
      context,
      timestamp: Date.now(),
      isDev: this.isDev,
    };
  }

  /**
   * Handle validation error
   */
  static validation(message: string, field?: string): AppError {
    return this.create(
      ErrorType.VALIDATION,
      message,
       400,
      field ? { field } : undefined
    );
  }

  /**
   * Handle API/network error
   */
  static network(message: string, statusCode?: number): AppError {
    return this.create(
      ErrorType.NETWORK,
      message || 'Network request failed',
      statusCode || 0
    );
  }

  /**
   * Handle authentication error
   */
  static authentication(message = 'Authentication failed'): AppError {
    return this.create(ErrorType.AUTHENTICATION, message, 401);
  }

  /**
   * Handle permission error
   */
  static permission(message = 'Permission denied'): AppError {
    return this.create(ErrorType.PERMISSION, message, 403);
  }

  /**
   * Handle not found error
   */
  static notFound(resource = 'Resource'): AppError {
    return this.create(
      ErrorType.NOT_FOUND,
      `${resource} not found`,
      404
    );
  }

  /**
   * Handle server error
   */
  static server(message = 'Internal server error', statusCode = 500): AppError {
    return this.create(ErrorType.SERVER, message, statusCode);
  }

  /**
   * Handle unknown error
   */
  static unknown(error: unknown): AppError {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    return this.create(ErrorType.UNKNOWN, message);
  }

  /**
   * Log error (development only)
   */
  static log(error: AppError): void {
    if (this.isDev) {
      console.error('🔴 Error:', {
        type: error.type,
        message: error.message,
        statusCode: error.statusCode,
        context: error.context,
        timestamp: new Date(error.timestamp).toISOString(),
      });
    }
  }

  /**
   * Get user-friendly error message
   */
  static getUserMessage(error: AppError): string {
    const messages: Record<ErrorType, string> = {
      [ErrorType.VALIDATION]: 'Please check your input and try again.',
      [ErrorType.NETWORK]: 'Network error. Please check your connection.',
      [ErrorType.API]: 'Something went wrong. Please try again later.',
      [ErrorType.AUTHENTICATION]: 'Please log in to continue.',
      [ErrorType.PERMISSION]: 'You do not have permission to access this.',
      [ErrorType.NOT_FOUND]: 'The requested resource was not found.',
      [ErrorType.SERVER]: 'Server error. Please try again later.',
      [ErrorType.UNKNOWN]: 'An unexpected error occurred.',
    };

    return messages[error.type] || 'An error occurred. Please try again.';
  }
}

export default ErrorHandler;
