export default function genColor() {
  let offset = localStorage['colorOffset'];
  if (!offset) {
    localStorage['colorOffset'] = 0;
  }
  const colors = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'violet'];
  const index = (new Date().getDay() + offset) % 7;
  return colors[index];
}
