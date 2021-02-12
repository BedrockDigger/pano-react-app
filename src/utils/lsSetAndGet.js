export default function lsSetAndGet(key, defaultValue) {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, defaultValue);
  }
  return localStorage.getItem(key);
}