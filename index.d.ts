export interface SnakifyOptions {
  ignoreNumber: boolean;
}

export default function snakify<T>(obj: T, options?: SnakifyOptions): T

export as namespace snakify
