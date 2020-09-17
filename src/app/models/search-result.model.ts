import {SearchItem} from "./SearchItem";
import {SearchResultPageInfo} from "./SearchResultPageInfo";

export class SearchResults {
  constructor(private _kind: string = null,
              private _etag: string = null,
              private _pageInfo: SearchResultPageInfo = null,
              private _items: SearchItem[] = null) {
  }

  get kind(): string {
    return this._kind;
  }

  get etag(): string {
    return this._etag;
  }

  get items(): SearchResultPageInfo {
    return this._pageInfo;
  }

  get items(): SearchItem[] {
    return this._items;
  }

  static fromRaw(data: any): SearchResults {
    const items = [];
    if (data && Array.isArray(data.items)) {
      data.items.forEach(item => items.push(SearchItem.fromRaw(item)));
    }
    return new SearchResults(
      data.kind,
      data.etag,
      SearchResultPageInfo.fromRaw(data.pageInfo),
      items
    );
  }
}
