export const randomNumber = (limit) => {
  return Math.floor(Math.random() * limit) + 1;
};

export const imageCollection = (length) => {
  return Array.from({ length }, (_, index) => [randomNumber(2), randomNumber(2)])
}