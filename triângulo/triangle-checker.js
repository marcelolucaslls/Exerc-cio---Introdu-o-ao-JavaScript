export function triangleChecker(a, b, c) {
  if (a >= b + c || b >= a + c || c >= a + b) return 'none';
  else
    switch (true) {
      case a === b && b === c:
        return 'equilateral';
      case a !== b && b !== c && a !== c:
        return 'escaleno';
      default:
        return 'isosceles';
    }
}
