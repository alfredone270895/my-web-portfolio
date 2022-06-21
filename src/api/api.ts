import { DefaultAxiosGetResponse } from './types';
import axios, { AxiosRequestConfig } from 'axios';

/**
 * Get api for getting more resources / search results
 * @param {string} url calling url
 * @param {Record<string, string | number | Date | boolean>} payload as params
 * @param {AxiosRequestConfig} axiosConfigurations default axios configurations wrapped
 */
export async function getApi<T, D = any>(
  url: string,
  payload?: Record<string, string | number | Date | boolean>,
  axiosConfigurations?: AxiosRequestConfig<D>,
): Promise<T[]> {
  const getResult = await axios.get<DefaultAxiosGetResponse<T>>(
    url,
    axiosConfigurations
      ? {
          ...axiosConfigurations,
          ...{
            params: payload,
          },
        }
      : payload && {
          params: payload,
        },
  );
  return getResult.data.success as T[];
}

/**
 * Get instance api for getting a single resource
 * @param {string} url calling url
 * @param {Record<string, string | number | Date | boolean>} payload as params
 * @param {AxiosRequestConfig} axiosConfigurations default axios configurations wrapped
 */
export async function getInstanceApi<T, D = any>(
  url: string,
  payload?: Record<string, string | number | Date | boolean>,
  axiosConfigurations?: AxiosRequestConfig<D>,
): Promise<T> {
  const getResult = await axios.get<DefaultAxiosGetResponse<T>>(
    url,
    axiosConfigurations
      ? {
          ...axiosConfigurations,
          ...{
            params: payload,
          },
        }
      : payload && {
          params: payload,
        },
  );
  return getResult.data.success as T;
}

/**
 * Post api for insert a new resource
 * @param {string} url calling url
 * @param {Record<string, string | number | Date | boolean>} payload as body
 * @param {AxiosRequestConfig} axiosConfigurations default axios configurations wrapped
 */
export async function postApi<T, D = any>(
  url: string,
  payload?: Record<string, string | number | Date | boolean>,
  axiosConfigurations?: AxiosRequestConfig<D>,
): Promise<T> {
  const postResult = await axios.post<DefaultAxiosGetResponse<T>>(
    url,
    axiosConfigurations
      ? {
          ...axiosConfigurations,
          ...{
            data: payload,
          },
        }
      : payload,
  );
  return postResult.data.success as T;
}

/**
 * Put api for update a resource
 * @param url
 * @param payload
 * @param {AxiosRequestConfig} axiosConfigurations default axios configurations wrapped
 */
export async function putApi<T, D = any>(
  url: string,
  payload?: Record<string, string | number | Date | boolean>,
  axiosConfigurations?: AxiosRequestConfig<D>,
): Promise<T> {
  const putResult = await axios.put<DefaultAxiosGetResponse<T>>(
    url,
    axiosConfigurations
      ? {
          ...axiosConfigurations,
          ...{
            data: payload,
          },
        }
      : payload,
  );
  return putResult.data.success as T;
}

/**
 * Delete api for delete a resource
 * @param url
 * @param payload
 * @param {AxiosRequestConfig} axiosConfigurations default axios configurations wrapped
 */
export async function deleteApi<T, D = any>(
  url: string,
  payload?: Record<string, string | number | Date | boolean>,
  axiosConfigurations?: AxiosRequestConfig<D>,
): Promise<string> {
  const deleteResult = await axios.delete<DefaultAxiosGetResponse<T>>(
    url,
    axiosConfigurations
      ? {
          ...axiosConfigurations,
          ...{
            data: payload,
          },
        }
      : payload,
  );
  return deleteResult.data.success as string;
}
