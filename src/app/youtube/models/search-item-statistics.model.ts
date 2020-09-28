export class SearchItemStatistics {
  constructor(private _viewCount: string = null,
              private _likeCount: string = null,
              private _dislikeCount: string = null,
              private _favoriteCount: string = null,
              private _commentCount: string = null) {
  }

  get viewCount(): string {
    return this._viewCount;
  }

  get likeCount(): string {
    return this._likeCount;
  }

  get dislikeCount(): string {
    return this._dislikeCount;
  }

  get favoriteCount(): string {
    return this._favoriteCount;
  }

  get commentCount(): string {
    return this._commentCount;
  }

  static fromRaw(data: any): SearchItemStatistics {
    if (data === null || data === undefined) {
      return null;
    }

    return new SearchItemStatistics(
      data.viewCount,
      data.likeCount,
      data.dislikeCount,
      data.favoriteCount,
      data.commentCount
    );
  }
}
