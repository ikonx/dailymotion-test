const fetcher = (arg: string) => fetch(arg).then((res) => res.json());

export default fetcher;
