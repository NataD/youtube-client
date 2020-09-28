export class SearchItemLocalized {
  constructor(private _title: string = null,
              private _description: string = null) {
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  static fromRaw(data: any): SearchItemLocalized {
    if (data === null || data === undefined) {
      return null;
    }

    return new SearchItemLocalized(
      data.title,
      data.description
    );
  }
}
