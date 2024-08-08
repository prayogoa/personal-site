import md5Hex from "md5-hex";

export default (email: string, size: number) => {
  const url = new URL("https://gravatar.com/avatar/");
  url.pathname += md5Hex(email);
  url.search = new URLSearchParams({ size: size.toString() }).toString();
  return url.toString();
};
