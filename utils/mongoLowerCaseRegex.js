export const mongoLowerCaseRegex = (string) => {
  return new RegExp(`^${string.toLowerCase()}`, "i");
};
