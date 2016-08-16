export interface AxiosDataTransformer {
  (data: any): any;
}

export interface AxiosRequestConfig {
  url?: string;
  method?: string;
  baseURL?: string;
  transformRequest?: AxiosDataTransformer | AxiosDataTransformer[];
  transformResponse?: AxiosDataTransformer | AxiosDataTransformer[];
  headers?: any;
  params?: any;
  paramsSerializer?: (params: any) => string;
  data?: any;
  timeout?: number;
  withCredentials?: boolean;
  adapter?: any;
  auth?: any;
  responseType?: string;
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  progress?: (progressEvent: any) => void;
  maxContentLength?: number;
  validateStatus?: (status: number) => boolean;
  maxRedirects?: number;
  httpAgent?: any;
  httpsAgent?: any;
}

export interface AxiosResponse {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
}

export interface AxiosError extends Error {
  config: AxiosRequestConfig;
  code?: string;
  response?: AxiosResponse;
}

export interface Promise<V> {
  then<R1, R2>(onFulfilled: (value: V) => R1 | Promise<R1>, onRejected: (error: any) => R2 | Promise<R2>): Promise<R1 | R2>;
  then<R>(onFulfilled: (value: V) => R | Promise<R>): Promise<R>;
  catch<R>(onRejected: (error: any) => R | Promise<R>): Promise<R>;
}

export interface AxiosPromise extends Promise<AxiosResponse> {
}

export interface InterceptorManager<V> {
  use(onFulfilled: (value: V) => V | Promise<V>, onRejected?: (error: any) => any): number;
  eject(id: number): void;
}

export interface AxiosInstance {
  defaults: AxiosRequestConfig;
  interceptors: {
    request: InterceptorManager<AxiosRequestConfig>;
    response: InterceptorManager<AxiosResponse>;
  };
  request(config: AxiosRequestConfig): AxiosPromise;
  get(url: string, config?: AxiosRequestConfig): AxiosPromise;
  delete(url: string, config?: AxiosRequestConfig): AxiosPromise;
  head(url: string, config?: AxiosRequestConfig): AxiosPromise;
  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise;
  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise;
  patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise;
}

export interface AxiosStatic extends AxiosInstance {
  (config: AxiosRequestConfig): AxiosPromise;
  (url: string, config?: AxiosRequestConfig): AxiosPromise;
  create(config?: AxiosRequestConfig): AxiosInstance;
  all(iterable: any): any;
  spread(callback: any): any;
}

declare const Axios: AxiosStatic;

export default Axios;
