import {Thumbnail} from "./Thumbnail";
import {SearchItemLocalized} from "./SearchItemLocalized";

export class SearchItemSnippet {
  constructor(private _publishedAt: string = null,
              private _channelId: string = null,
              private _title: string = null,
              private _description: string = null,
              private _thumbnails: Thumbnail = null,
              private _channelTitle: string = null,
              private _tags: string[] = null,
              private _categoryId: string = null,
              private _liveBroadcastContent: string = null,
              private _localized: SearchItemLocalized = null,
              private _defaultAudioLanguage: string = null) {
  }

  get publishedAt(): string {
    return this._publishedAt;
  }

  get channelId(): string {
    return this._channelId;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get thumbnails(): Thumbnail {
    return this._thumbnails;
  }

  get channelTitle(): string {
    return this._channelTitle;
  }

  get tags(): string[] {
    return this._tags;
  }

  get categoryId(): string {
    return this._categoryId;
  }

  get liveBroadcastContent(): string {
    return this._liveBroadcastContent;
  }

  get localized(): SearchItemLocalized {
    return this._localized;
  }

  get defaultAudioLanguage(): string {
    return this._defaultAudioLanguage;
  }

  static fromRaw(data: any): SearchItemSnippet {
    if (data === null || data === undefined) {
      return null;
    }

    const tags = [];
    if (data && Array.isArray(data.tags)) {
      data.tags.forEach(tag => tags.push(tag));
    }

    return new SearchItemSnippet(
      data.publishedAt,
      data.channelId,
      data.title,
      data.description,
      Thumbnail.fromRaw(data.thumbnails),
      data.channelTitle,
      data.tags,
      data.categoryId,
      data.liveBroadcastContent,
      SearchItemLocalized.fromRaw(data.localized),
      data.defaultAudioLanguage
    );
  }
}
