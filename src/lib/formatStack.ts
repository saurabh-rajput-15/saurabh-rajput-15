/* Join a tech stack into a single mono credit string: "React · TS · Postgres". */
export function formatStack(stack: string[]): string {
  return stack.join(' · ')
}
