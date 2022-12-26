export const limitText = (sentence: string, limit: number) =>
  sentence.length > limit ? sentence.slice(0, limit) + '...' : sentence;
