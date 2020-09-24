export class User {
  constructor(private _id: number,
              private _username: string,
              private _password: string,
              private _firstName: string,
              private _lastName: string,
              private _token: string) {
  }

  get id(): string {
    return this._id;
  }

  get username(): string {
    return this._username;
  }

  get password(): string {
    return this._password;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get token(): string {
    return this._token;
  }

  static fromRaw(data: any): User {
    if (data === null || data === undefined) {
      return null;
    }

    return new User(
      data.id,
      data.username,
      data.password,
      data.firstName,
      data.lastName,
      data.token
    );
  }
}
