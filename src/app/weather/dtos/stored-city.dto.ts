export class StoredCity {
  public id!: string;
  public city!: string;
  public constructor(obj: StoredCity) {
    Object.assign(this, obj);
  }

}
