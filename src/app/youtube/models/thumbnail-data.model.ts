export class ThumbnailData {
  constructor(private _url: string = null,
              private _width: string = null,
              private _height: string = null) {
  }

  get url(): string {
    return this._url;
  }

  get width(): string {
    return this._width;
  }

  get height(): string {
    return this._height;
  }

  static fromRaw(data: any): ThumbnailData {
    if (data === null || data === undefined) {
      return null;
    }

    return new ThumbnailData(
      data.url,
      data.width,
      data.height
    );
  }
}
