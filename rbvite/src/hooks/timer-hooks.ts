export default function useTimer() {
  const tmout = setTimeout(() => console.log('x', 1000));
  return (
    () => {
      clearTimeout(tmout);
    },
    []
  );
}
//+ useFetch 도 만들기 0926 timer- hooks, my.tsx 수정되어야함.
