/**
 * This file contains query type builder for axios call
 * We manage errors here
 */

import axios from "axios";

interface Response<TRes> {
  data?: TRes;
  error?: any;
}

export async function apiGet<TRes>(
  uri: string,
): Promise<Response<{ data: TRes }>> {
  try {
    const res = await axios.get(uri);

    return {
      data: res.data,
    };
  } catch (error) {
    console.error({ error });

    return {
      error: error,
    };
  }
}
