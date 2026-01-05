import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

// Interfaces based on configuration
export interface ApiConfigurationOptions {
  baseUrl: string;
  timeout?: number;
  maxRetries?: number;
}

export interface RequestConfig extends AxiosRequestConfig {
  retry?: boolean;
  cache?: boolean;
  cacheKey?: string;
  cacheTTL?: number;
}

export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: RequestConfig;
  requestId?: string;
  timestamp: string;
}

export interface ApiError {
  code: string;
  message: string;
  status?: number;
  details?: unknown;
  timestamp: string;
  requestId?: string;
  retryable?: boolean;
}

// ApiConfig Class
export class ApiConfig {
  private static instance: ApiConfig;
  private baseUrl: string = "https://api.clubportal.com/v1";
  private timeout: number = 30000;
  private maxRetries: number = 3;
  // private retryDelay: number = 1000; // Not used yet
  // private rateLimiterEnabled: boolean = true; // Not used yet

  private constructor() {}

  public static getInstance(): ApiConfig {
    if (!ApiConfig.instance) {
      ApiConfig.instance = new ApiConfig();
    }
    return ApiConfig.instance;
  }

  public configure(options: ApiConfigurationOptions): void {
    if (options.baseUrl) this.baseUrl = options.baseUrl;
    if (options.timeout) this.timeout = options.timeout;
    if (options.maxRetries) this.maxRetries = options.maxRetries;
  }

  public getBaseUrl(): string {
    return this.baseUrl;
  }

  public getTimeout(): number {
    return this.timeout;
  }

  public getMaxRetries(): number {
    return this.maxRetries;
  }
}

// Simple implementations for dependencies (can be expanded later)
class AuthInterceptor {
  interceptRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    // TODO: Add auth token logic here
    // const token = typeof localStorage !== 'undefined' ? localStorage.getItem('authToken') : null;
    // if (token && config.headers) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  }

  interceptResponse(response: AxiosResponse): AxiosResponse {
    return response;
  }
}

class ErrorHandler {
  handleError(error: AxiosError | Error): ApiError {
    const timestamp = new Date().toISOString();
    if (axios.isAxiosError(error)) {
      return {
        code: error.code || 'UNKNOWN',
        message: error.message,
        status: error.response?.status,
        details: error.response?.data,
        timestamp,
        retryable: true // Simplified logic
      };
    }
    return {
      code: 'CLIENT_ERROR',
      message: error.message,
      timestamp,
      retryable: false
    };
  }
}

// ApiClient Class
export class ApiClient {
  private axiosInstance: AxiosInstance;
  private authInterceptor: AuthInterceptor;
  private errorHandler: ErrorHandler;

  constructor() {
    const config = ApiConfig.getInstance();
    this.axiosInstance = axios.create({
      baseURL: config.getBaseUrl(),
      timeout: config.getTimeout(),
    });
    this.authInterceptor = new AuthInterceptor();
    this.errorHandler = new ErrorHandler();
    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.axiosInstance.interceptors.request.use(
      (config) => this.authInterceptor.interceptRequest(config),
      (error) => Promise.reject(error)
    );

    this.axiosInstance.interceptors.response.use(
      (response) => this.authInterceptor.interceptResponse(response),
      (error) => {
        const apiError = this.errorHandler.handleError(error);
        return Promise.reject(apiError);
      }
    );
  }

  public async get<T = unknown>(url: string, config?: RequestConfig): Promise<ApiResponse<T>> {
    const response = await this.axiosInstance.get<T>(url, config);
    return this.formatResponse(response);
  }

  public async post<T = unknown>(url: string, data?: unknown, config?: RequestConfig): Promise<ApiResponse<T>> {
    const response = await this.axiosInstance.post<T>(url, data, config);
    return this.formatResponse(response);
  }

  public async put<T = unknown>(url: string, data?: unknown, config?: RequestConfig): Promise<ApiResponse<T>> {
    const response = await this.axiosInstance.put<T>(url, data, config);
    return this.formatResponse(response);
  }

  public async delete<T = unknown>(url: string, config?: RequestConfig): Promise<ApiResponse<T>> {
    const response = await this.axiosInstance.delete<T>(url, config);
    return this.formatResponse(response);
  }

  private formatResponse<T>(response: AxiosResponse<T>): ApiResponse<T> {
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers as Record<string, string>,
      config: response.config,
      timestamp: new Date().toISOString(),
    };
  }
}

export const apiClient = new ApiClient();
