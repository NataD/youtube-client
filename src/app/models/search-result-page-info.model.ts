import {SearchItem} from "./SearchItem";

export class SearchResultPageInfo {
  constructor(private _totalResults: number = null,
              private _resultsPerPage: number = null) {
  }

  get totalResults(): string {
    return this._totalResults;
  }

  get resultsPerPage(): string {
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
