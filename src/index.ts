export function contains(str: string, search: string) {
  return str.indexOf(search) !== -1;
}

export function lcfirst(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

export function slug(str: string) {
  return str
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-")
    .replace(/_+/g, "-");
}

export function title(str: string) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
  );
}

export function ucfirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function ucSplit(str: string) {
  return str.split(/(?=[A-Z])/);
}

export function wordCount(str: string) {
  return str.split(/\s+/).length;
}

class Strootil {
  private str: string;

  constructor(str: string) {
    this.str = str;
  }

  public contains(search: string) {
    return contains(this.str, search);
  }

  public lcfirst() {
    this.str = lcfirst(this.str);
    return this;
  }

  public slug() {
    this.str = slug(this.str);
    return this;
  }

  public title() {
    this.str = title(this.str);
    return this;
  }

  public ucfirst() {
    this.str = ucfirst(this.str);
    return this;
  }

  ucSplit = () => ucSplit(this.str);
  wordCount = () => wordCount(this.str);
}

export default (str: string) => new Strootil(str);
