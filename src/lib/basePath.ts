const base = process.env.NODE_ENV === "production" ? "/macra-web" : "";
export function bp(path: string): string {
  return ${base};
}
