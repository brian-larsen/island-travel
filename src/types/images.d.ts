// Type declarations for importing image assets
// Place in `src/types/images.d.ts` so TypeScript can import .png files

declare module '*.png' {
  const value: string;
  export default value;
}
