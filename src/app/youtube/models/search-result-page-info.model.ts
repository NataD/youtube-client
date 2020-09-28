import {SearchItem} from "./search-item.model";

export class SearchResultPageInfo {
  constructor(private _totalResults: number = null,
              private _resultsPerPage: number = null) {
  }

  get totalResults(): number {
    return this._totalResults;
  }

  get resultsPerPage(): number {
    return this._resultsPerPage;
  }

  static fromRaw(data: any): SearchResultPageInfo {
    if (data === null || data === undefined) {
      return null;
    }

    return new SearchResultPageInfo(
      data.totalResults,
      data.resultsPerPage,
    );
  }
}
