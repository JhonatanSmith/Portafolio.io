export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const getBasePath = () => {
  return process.env.NODE_ENV === "production"
    ? "/Portafolio.io"
    : "";
};

export const withBasePath = (path: string) => {
  return `${getBasePath()}${path}`;
};
