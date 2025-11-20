export function maskPhone(phone: string): string {
  if (!phone) return "";
  const keepPlus = phone.trim().startsWith("+") ? "+" : "";
  const digits = phone.replace(/\D/g, "");
  const maskedDigits = digits.replace(/\d/g, "×");
  const part1 = maskedDigits.slice(0, 3);
  const part2 = maskedDigits.slice(3);
  return `${keepPlus}${part1}${part2 ? " " + part2 : ""}`;
}