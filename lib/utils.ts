export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const getBasePath = () => {
  // Quemado. Nada de process.env. 
  return "/Portafolio.io"; 
};

export const withBasePath = (path: string) => {
  return `${getBasePath()}${path}`;
};