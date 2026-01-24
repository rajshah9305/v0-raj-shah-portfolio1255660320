/**
 * Lightweight error handling for forms and user interactions
 */

export enum ErrorType {
  VALIDATION = "VALIDATION_ERROR",
  NETWORK = "NETWORK_ERROR",
  UNKNOWN = "UNKNOWN_ERROR",
}

export interface AppError {
  type: ErrorType;
  message: string;
  context?: Record<string, unknown>;
}

class ErrorHandler {
  /**
   * Create validation error
   */
  static validation(message: string, field?: string): AppError {
    return {
      type: ErrorType.VALIDATION,
      message,
      context: field ? { field } : undefined,
    };
  }

  /**
   * Create network error
   */
  static network(message = "Network request failed"): AppError {
    return {
      type: ErrorType.NETWORK,
      message,
    };
  }

  /**
   * Create unknown error
   */
  static unknown(error: unknown): AppError {
    const message = error instanceof Error ? error.message : "An unknown error occurred";
    return {
      type: ErrorType.UNKNOWN,
      message,
    };
  }

  /**
   * Get user-friendly error message
   */
  static getUserMessage(error: AppError): string {
    const messages: Record<ErrorType, string> = {
      [ErrorType.VALIDATION]: "Please check your input and try again.",
      [ErrorType.NETWORK]: "Network error. Please check your connection.",
      [ErrorType.UNKNOWN]: "An unexpected error occurred. Please try again.",
    };

    return messages[error.type] || "An error occurred. Please try again.";
  }
}

export default ErrorHandler;
