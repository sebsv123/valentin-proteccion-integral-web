import 'server-only';

export const MAX_LEAD_REQUEST_BYTES = 64 * 1024;

export class RequestBodyTooLargeError extends Error {
  constructor() {
    super('Request body exceeds the configured limit.');
    this.name = 'RequestBodyTooLargeError';
  }
}

export async function readLimitedJson(request: Request, maxBytes = MAX_LEAD_REQUEST_BYTES): Promise<unknown> {
  const contentLength = request.headers.get('content-length');
  if (contentLength) {
    const declaredLength = Number(contentLength);
    if (Number.isFinite(declaredLength) && declaredLength > maxBytes) {
      throw new RequestBodyTooLargeError();
    }
  }

  if (!request.body) return null;

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      totalBytes += value.byteLength;
      if (totalBytes > maxBytes) {
        await reader.cancel();
        throw new RequestBodyTooLargeError();
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const bytes = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return JSON.parse(new TextDecoder().decode(bytes));
}
