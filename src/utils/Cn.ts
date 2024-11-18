export default function Cn(...classNames: (string | undefined)[]): string {
  return classNames.filter(Boolean).join(' ')
}
