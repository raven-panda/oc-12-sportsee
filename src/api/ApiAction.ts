/**
 * This file contains query type builder for axios call
 * We manage errors here
 */

import axios from "axios";

interface Response<TRes> {
  data?: TRes;
  error?: ResponseError | undefined;
}

export interface ResponseError {
  status?: number;
  isApiUnavailable?: boolean;
}

export async function apiGet<TRes>(
  uri: string,
): Promise<Response<{ data: TRes }>> {
  try {
    const res = await axios.get(uri);

    return {
      data: res.data,
    };
  } catch (error: any) {
    console.error({ error });

    return {
      error: {
        status: error?.status,
        isApiUnavailable: error?.code && error.code === "ERR_NETWORK",
      },
    };
  }
}
