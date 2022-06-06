export const getData = (): Promise<number> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 3000);
  })
};
