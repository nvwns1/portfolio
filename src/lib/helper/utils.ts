export default function isTruthy<T>(
  t: T | undefined | null | void | false | number
): t is T {
  return !!t;
}

let current = 0;

export const generateUID = (prefix?: string) =>
  `${prefix || "id"}-${current++}`;
export const fakeEvent = <T>(value: T) => ({ target: { value } });

export const concatStringProp = (
  strings: (string | boolean | null | undefined)[] = []
) => {
  return strings.filter(isTruthy).join(" ").trim();
};

export const classnames = (
  classNames: (string | boolean | null | undefined)[] = []
) => {
  return concatStringProp(classNames);
};
