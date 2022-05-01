import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';

export class AxiosInstanceBuilder {
    constructor(private readonly axiosInstance: AxiosInstance = axios.create({
        baseURL: '',
        timeout: 1000,
        headers: {
            'Content-Type': 'application/json'
        }
    })) { }

    withTimeout(value: number): AxiosInstanceBuilder {
        const instance = axios.create({
            baseURL: this.axiosInstance.defaults.baseURL,
            timeout: value ?? 1000,
            headers: this.axiosInstance.defaults.headers.head
        });
        return new AxiosInstanceBuilder(instance);
    }

    withBaseUrl(baseUrl: string): AxiosInstanceBuilder {
        const instance = axios.create({
            baseURL: baseUrl,
            timeout: this.axiosInstance.defaults.timeout,
            headers: this.axiosInstance.defaults.headers.head
        });
        return new AxiosInstanceBuilder(instance);
    }

    withHeaders(headers: AxiosRequestHeaders): AxiosInstanceBuilder {
        const instance = axios.create({
            baseURL: this.axiosInstance.defaults.baseURL,
            timeout: this.axiosInstance.defaults.timeout,
            headers: headers
        });
        return new AxiosInstanceBuilder(instance);
    }

    toInstance(): AxiosInstance {
        return this.axiosInstance;
    }
}