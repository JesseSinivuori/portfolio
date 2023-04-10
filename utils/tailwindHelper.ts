//creates multiple tailwind classes with the same modifier:
//tw('hover:', 'bg-red-500 bg-blue-500') => 'hover:bg-red-500 hover:bg-blue-500'
export default function tw(modifiers: string, values: string): string {
  const modifiersArray = modifiers.replace(/\s+/g, " ").trim().split(" ");
  const valuesArray = values.replace(/\s+/g, " ").trim().split(" ");
  const classes = modifiersArray
    .flatMap((modifier) => valuesArray.map((value) => `${modifier}${value}`))
    .join(" ");
  return classes;
}
