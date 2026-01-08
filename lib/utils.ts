export const getAssetPath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/vercel-launch-clone' : '';
  return `${basePath}${path}`;
};
