import {ThumbnailData} from ThumbnailData;

export class Thumbnail {
  constructor(private _default: ThumbnailData = null,
              private _medium: ThumbnailData = null,
              private _high: ThumbnailData = null,
              private _standard: ThumbnailData = null,
              private _maxres: ThumbnailData = null) {
  }

  get default(): ThumbnailData {
    return this._default;
  }

  get medium(): ThumbnailData {
    return this._medium;
  }

  get high(): ThumbnailData {
    return this._high;
  }

  get standard(): ThumbnailData {
    return this._standard;
  }

  get maxres(): ThumbnailData {
    return this._maxres;
  }

  static fromRaw(data: any): Thumbnail {
    if (data === null || data === undefined) {
      return null;
    }

    return new Thumbnail(
      data.default,
      data.medium,
      data.high,
      data.standard,
      data.maxres
    );
  }
}
