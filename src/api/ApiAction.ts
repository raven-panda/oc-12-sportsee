/**
 * This file contains query type builder for axios call
 * We manage errors here
 */

import axios from "axios";

export interface ApiResponse<TRes> {
  body: TRes | undefined;
  error?: ApiResponseError | undefined;
}

export interface ApiResponseError {
  status?: number;
  isApiUnavailable?: boolean;
}

export async function apiGet<TRes>(
  uri: string,
): Promise<ApiResponse<{ data: TRes }>> {
  try {
    const res = await axios.get(uri);

    return {
      body: res.data,
    };
  } catch (error: any) {
    console.error({ error });

    return {
      body: undefined,
      error: {
        status: error?.status,
        isApiUnavailable: error?.code && error.code === "ERR_NETWORK",
      },
    };
  }
}
