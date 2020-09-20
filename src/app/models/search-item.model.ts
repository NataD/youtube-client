import {SearchItemSnippet} from "./search-item-snippet.model";
import {SearchItemStatistics} from "./search-item-statistics.model";

export class SearchItem {
  constructor(private _kind: string = null,
              private _etag: string = null,
              private _id: string = null,
              private _snippet: SearchItemSnippet = null,
              private _statistics: SearchItemStatistics = null) {
  }

  get kind(): string {
    return this._kind;
  }

  get etag(): string {
    return this._etag;
  }

  get id(): string {
    return this._id;
  }

  get snippet(): SearchItemSnippet {
    return this._snippet;
  }

  get statistics(): SearchItemStatistics {
    return this._statistics;
  }

  static fromRaw(data: any): SearchItem {
    if (data === null || data === undefined) {
      return null;
    }

    return new SearchItem(
      data.kind,
      data.etag,
      data.id,
      SearchItemSnippet.fromRaw(data.snippet),
      SearchItemStatistics.fromRaw(data.statistics)
    );
  }
}

const item = {
  "kind": "youtube#video",
  "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/tmmI1yiRrmLWlKikXk1gD3TXsUI\"",
  "id": "YN8zNnV0sK8",

  "statistics": {
    "viewCount": "33265",
    "likeCount": "1173",
    "dislikeCount": "26",
    "favoriteCount": "0",
    "commentCount": "170"
  }
}
