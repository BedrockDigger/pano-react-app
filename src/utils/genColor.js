export default function genColor() {
  const colors = ["red", "orange", "yellow", "green", "teal", "blue", "violet"]
  const index = new Date().getDay()
  return colors[index]
}