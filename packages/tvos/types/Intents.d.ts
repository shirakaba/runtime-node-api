/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare const INSetMessageAttributeIntentIdentifier: string;

declare const INIntentErrorDomain: string;

declare const IntentsVersionNumber: number;

declare const INAnswerCallIntentIdentifier: string;

declare const IntentsVersionString: interop.Pointer;

declare const INHangUpCallIntentIdentifier: string;

declare const INSiriAuthorizationStatus: {
  NotDetermined: 0,
  Restricted: 1,
  Denied: 2,
  Authorized: 3,
};

declare const INVocabularyStringType: {
  ContactName: 1,
  ContactGroupName: 2,
  PhotoTag: 100,
  PhotoAlbumName: 101,
  WorkoutActivityName: 200,
  CarProfileName: 300,
  CarName: 301,
  PaymentsOrganizationName: 400,
  PaymentsAccountNickname: 401,
  NotebookItemTitle: 500,
  NotebookItemGroupName: 501,
  MediaPlaylistTitle: 700,
  MediaMusicArtistName: 701,
  MediaAudiobookTitle: 702,
  MediaAudiobookAuthorName: 703,
  MediaShowTitle: 704,
};

declare const INGetRestaurantGuestIntentResponseCode: {
  Success: 0,
  Failure: 1,
};

declare const INGetAvailableRestaurantReservationBookingDefaultsIntentResponseCode: {
  Success: 0,
  Failure: 1,
  Unspecified: 2,
};

declare const INUpdateMediaAffinityMediaItemUnsupportedReason: {
  LoginRequired: 1,
  SubscriptionRequired: 2,
  UnsupportedMediaType: 3,
  ExplicitContentSettings: 4,
  CellularDataSettings: 5,
  RestrictedContent: 6,
  ServiceUnavailable: 7,
  RegionRestriction: 8,
};

declare const INSearchForMediaMediaItemUnsupportedReason: {
  LoginRequired: 1,
  SubscriptionRequired: 2,
  UnsupportedMediaType: 3,
  ExplicitContentSettings: 4,
  CellularDataSettings: 5,
  RestrictedContent: 6,
  ServiceUnavailable: 7,
  RegionRestriction: 8,
};

declare const INPlayMediaPlaybackSpeedUnsupportedReason: {
  BelowMinimum: 1,
  AboveMaximum: 2,
};

declare const INMediaSortOrder: {
  Unknown: 0,
  Newest: 1,
  Oldest: 2,
  Best: 3,
  Worst: 4,
  Popular: 5,
  Unpopular: 6,
  Trending: 7,
  Recommended: 8,
};

declare const INAddMediaMediaItemUnsupportedReason: {
  LoginRequired: 1,
  SubscriptionRequired: 2,
  UnsupportedMediaType: 3,
  ExplicitContentSettings: 4,
  CellularDataSettings: 5,
  RestrictedContent: 6,
  ServiceUnavailable: 7,
  RegionRestriction: 8,
};

declare const INUpdateMediaAffinityIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
};

declare const INPlayMediaIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  ContinueInApp: 2,
  InProgress: 3,
  Success: 4,
  HandleInApp: 5,
  Failure: 6,
  FailureRequiringAppLaunch: 7,
  FailureUnknownMediaType: 8,
  FailureNoUnplayedContent: 9,
  FailureRestrictedContent: 10,
  FailureMaxStreamLimitReached: 11,
};

declare const INAddMediaIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  HandleInApp: 4,
  Failure: 5,
  FailureRequiringAppLaunch: 6,
};

declare const INPlaybackRepeatMode: {
  Unknown: 0,
  None: 1,
  All: 2,
  One: 3,
};

declare const INGetAvailableRestaurantReservationBookingsIntentCode: {
  Success: 0,
  Failure: 1,
  FailureRequestUnsatisfiable: 2,
  FailureRequestUnspecified: 3,
};

declare const INBookRestaurantReservationIntentCode: {
  Success: 0,
  Denied: 1,
  Failure: 2,
  FailureRequiringAppLaunch: 3,
  FailureRequiringAppLaunchMustVerifyCredentials: 4,
  FailureRequiringAppLaunchServiceTemporarilyUnavailable: 5,
};

declare const INPlayMediaMediaItemUnsupportedReason: {
  LoginRequired: 1,
  SubscriptionRequired: 2,
  UnsupportedMediaType: 3,
  ExplicitContentSettings: 4,
  CellularDataSettings: 5,
  RestrictedContent: 6,
  ServiceUnavailable: 7,
  RegionRestriction: 8,
};

declare const INIntentHandlingStatus: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  DeferredToApplication: 5,
  UserConfirmationRequired: 6,
};

declare const INInteractionDirection: {
  Unspecified: 0,
  Outgoing: 1,
  Incoming: 2,
};

declare const INRestaurantReservationUserBookingStatus: {
  Pending: 0,
  Confirmed: 1,
  Denied: 2,
};

declare const INMediaUserContextSubscriptionStatus: {
  Unknown: 0,
  NotSubscribed: 1,
  Subscribed: 2,
};

declare const INMediaAffinityType: {
  Unknown: 0,
  Like: 1,
  Dislike: 2,
};

declare const INPlaybackQueueLocation: {
  Unknown: 0,
  Now: 1,
  Next: 2,
  Later: 3,
};

declare const INIntentErrorCode: {
  InteractionOperationNotSupported: 1900,
  DonatingInteraction: 1901,
  DeletingAllInteractions: 1902,
  DeletingInteractionWithIdentifiers: 1903,
  DeletingInteractionWithGroupIdentifier: 1904,
  IntentSupportedByMultipleExtension: 2001,
  RestrictedIntentsNotSupportedByExtension: 2002,
  NoHandlerProvidedForIntent: 2003,
  InvalidIntentName: 2004,
  NoAppAvailable: 2005,
  RequestTimedOut: 3001,
  MissingInformation: 3002,
  InvalidUserVocabularyFileLocation: 4000,
  ExtensionLaunchingTimeout: 5000,
  ExtensionBringUpFailed: 5001,
  ImageGeneric: 6000,
  ImageNoServiceAvailable: 6001,
  ImageStorageFailed: 6002,
  ImageLoadingFailed: 6003,
  ImageRetrievalFailed: 6004,
  ImageProxyLoop: 6005,
  ImageProxyInvalid: 6006,
  ImageProxyTimeout: 6007,
  ImageServiceFailure: 6008,
  ImageScalingFailed: 6009,
  PermissionDenied: 6010,
  VoiceShortcutCreationFailed: 7000,
  VoiceShortcutGetFailed: 7001,
  VoiceShortcutDeleteFailed: 7002,
  EncodingGeneric: 8000,
  EncodingFailed: 8001,
  DecodingGeneric: 9000,
  UnableToCreateAppIntentRepresentation: 10000,
  NoAppIntent: 10001,
};

declare const INGetUserCurrentRestaurantReservationBookingsIntentResponseCode: {
  Success: 0,
  Failure: 1,
  FailureRequestUnsatisfiable: 2,
  Unspecified: 3,
};

declare const INMediaItemType: {
  Unknown: 0,
  Song: 1,
  Album: 2,
  Artist: 3,
  Genre: 4,
  Playlist: 5,
  PodcastShow: 6,
  PodcastEpisode: 7,
  PodcastPlaylist: 8,
  MusicStation: 9,
  AudioBook: 10,
  Movie: 11,
  TVShow: 12,
  TVShowEpisode: 13,
  MusicVideo: 14,
  PodcastStation: 15,
  RadioStation: 16,
  Station: 17,
  Music: 18,
  AlgorithmicRadioStation: 19,
  News: 20,
};

declare const INAddMediaMediaDestinationUnsupportedReason: {
  NameNotFound: 1,
  NotEditable: 2,
};

declare const INMediaDestinationType: {
  Unknown: 0,
  Library: 1,
  Playlist: 2,
};

declare const INMediaReference: {
  Unknown: 0,
  CurrentlyPlaying: 1,
  My: 2,
};

declare const INSearchForMediaIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  ContinueInApp: 2,
  InProgress: 3,
  Success: 4,
  Failure: 5,
  FailureRequiringAppLaunch: 6,
};

declare interface INUpdateMediaAffinityIntentHandling extends NSObjectProtocol {
  handleUpdateMediaAffinityCompletion(intent: INUpdateMediaAffinityIntent, completion: (p1: INUpdateMediaAffinityIntentResponse) => void): void;

  confirmUpdateMediaAffinityCompletion?(intent: INUpdateMediaAffinityIntent, completion: (p1: INUpdateMediaAffinityIntentResponse) => void): void;

  resolveMediaItemsForUpdateMediaAffinityWithCompletion?(intent: INUpdateMediaAffinityIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  resolveAffinityTypeForUpdateMediaAffinityWithCompletion?(intent: INUpdateMediaAffinityIntent, completion: (p1: INMediaAffinityTypeResolutionResult) => void): void;
}

declare class INUpdateMediaAffinityIntentHandling extends NativeObject implements INUpdateMediaAffinityIntentHandling {
}

declare interface INIntentHandlerProviding extends NSObjectProtocol {
  handlerForIntent(intent: INIntent): interop.Object;
}

declare class INIntentHandlerProviding extends NativeObject implements INIntentHandlerProviding {
}

declare interface INAddMediaIntentHandling extends NSObjectProtocol {
  handleAddMediaCompletion(intent: INAddMediaIntent, completion: (p1: INAddMediaIntentResponse) => void): void;

  confirmAddMediaCompletion?(intent: INAddMediaIntent, completion: (p1: INAddMediaIntentResponse) => void): void;

  resolveMediaItemsForAddMediaWithCompletion?(intent: INAddMediaIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  resolveMediaDestinationForAddMediaWithCompletion?(intent: INAddMediaIntent, completion: (p1: INAddMediaMediaDestinationResolutionResult) => void): void;
}

declare class INAddMediaIntentHandling extends NativeObject implements INAddMediaIntentHandling {
}

declare interface INSearchForMediaIntentHandling extends NSObjectProtocol {
  handleSearchForMediaCompletion(intent: INSearchForMediaIntent, completion: (p1: INSearchForMediaIntentResponse) => void): void;

  confirmSearchForMediaCompletion?(intent: INSearchForMediaIntent, completion: (p1: INSearchForMediaIntentResponse) => void): void;

  resolveMediaItemsForSearchForMediaWithCompletion?(intent: INSearchForMediaIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;
}

declare class INSearchForMediaIntentHandling extends NativeObject implements INSearchForMediaIntentHandling {
}

declare interface INPlayMediaIntentHandling extends NSObjectProtocol {
  handlePlayMediaCompletion(intent: INPlayMediaIntent, completion: (p1: INPlayMediaIntentResponse) => void): void;

  confirmPlayMediaCompletion?(intent: INPlayMediaIntent, completion: (p1: INPlayMediaIntentResponse) => void): void;

  resolveMediaItemsForPlayMediaWithCompletion?(intent: INPlayMediaIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  resolvePlayShuffledForPlayMediaWithCompletion?(intent: INPlayMediaIntent, completion: (p1: INBooleanResolutionResult) => void): void;

  resolvePlaybackRepeatModeForPlayMediaWithCompletion?(intent: INPlayMediaIntent, completion: (p1: INPlaybackRepeatModeResolutionResult) => void): void;

  resolveResumePlaybackForPlayMediaWithCompletion?(intent: INPlayMediaIntent, completion: (p1: INBooleanResolutionResult) => void): void;

  resolvePlaybackQueueLocationForPlayMediaWithCompletion?(intent: INPlayMediaIntent, completion: (p1: INPlaybackQueueLocationResolutionResult) => void): void;

  resolvePlaybackSpeedForPlayMediaWithCompletion?(intent: INPlayMediaIntent, completion: (p1: INPlayMediaPlaybackSpeedResolutionResult) => void): void;
}

declare class INPlayMediaIntentHandling extends NativeObject implements INPlayMediaIntentHandling {
}

declare interface INSpeakable extends NSObjectProtocol {
  readonly spokenPhrase: string;

  readonly pronunciationHint: string;

  readonly vocabularyIdentifier: string;

  readonly alternativeSpeakableMatches: NSArray;

  readonly identifier?: string;
}

declare class INSpeakable extends NativeObject implements INSpeakable {
}

declare class INMediaItem extends NSObject implements NSCopying, NSSecureCoding {
  initWithIdentifierTitleTypeArtworkArtist(identifier: string | null, title: string | null, type: interop.Enum<typeof INMediaItemType>, artwork: INImage | null, artist: string | null): this;

  initWithIdentifierTitleTypeArtwork(identifier: string | null, title: string | null, type: interop.Enum<typeof INMediaItemType>, artwork: INImage | null): this;

  readonly identifier: string;

  readonly title: string;

  readonly type: interop.Enum<typeof INMediaItemType>;

  readonly artwork: INImage;

  readonly artist: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INMediaUserContext extends INUserContext {
  init(): this;

  subscriptionStatus: interop.Enum<typeof INMediaUserContextSubscriptionStatus>;

  numberOfLibraryItems: NSNumber;
}

declare class INUserContext extends NSObject implements NSSecureCoding {
  becomeCurrent(): void;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INPreferences extends NSObject {
  static siriAuthorizationStatus(): interop.Enum<typeof INSiriAuthorizationStatus>;

  static requestSiriAuthorization(handler: (p1: interop.Enum<typeof INSiriAuthorizationStatus>) => void): void;

  static siriLanguageCode(): string;
}

declare class INVocabulary extends NSObject {
  static sharedVocabulary<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  setVocabularyStringsOfType(vocabulary: NSOrderedSet, type: interop.Enum<typeof INVocabularyStringType>): void;

  setVocabularyOfType(vocabulary: NSOrderedSet, type: interop.Enum<typeof INVocabularyStringType>): void;

  removeAllVocabularyStrings(): void;
}

declare class INIntegerResolutionResult extends INIntentResolutionResult {
  static successWithResolvedValue<This extends abstract new (...args: any) => any>(this: This, resolvedValue: number): InstanceType<This>;

  static confirmationRequiredWithValueToConfirm<This extends abstract new (...args: any) => any>(this: This, valueToConfirm: NSNumber | null): InstanceType<This>;
}

declare class INImage extends NSObject implements NSCopying, NSSecureCoding {
  static imageNamed<This extends abstract new (...args: any) => any>(this: This, name: string): InstanceType<This>;

  static systemImageNamed<This extends abstract new (...args: any) => any>(this: This, systemImageName: string): InstanceType<This>;

  static imageWithImageData<This extends abstract new (...args: any) => any>(this: This, imageData: NSData): InstanceType<This>;

  static imageWithURL<This extends abstract new (...args: any) => any>(this: This, URL: NSURL): InstanceType<This>;

  static imageWithURLWidthHeight<This extends abstract new (...args: any) => any>(this: This, URL: NSURL, width: number, height: number): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INIntentDonationMetadata extends NSObject implements NSCopying, NSSecureCoding {
  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INUpdateMediaAffinityMediaItemResolutionResult extends INMediaItemResolutionResult {
  static successesWithResolvedMediaItems(resolvedMediaItems: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INUpdateMediaAffinityMediaItemUnsupportedReason>): InstanceType<This>;

  initWithMediaItemResolutionResult(mediaItemResolutionResult: INMediaItemResolutionResult): this;
}

declare class INPlaybackRepeatModeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedPlaybackRepeatMode<This extends abstract new (...args: any) => any>(this: This, resolvedPlaybackRepeatMode: interop.Enum<typeof INPlaybackRepeatMode>): InstanceType<This>;

  static confirmationRequiredWithPlaybackRepeatModeToConfirm<This extends abstract new (...args: any) => any>(this: This, playbackRepeatModeToConfirm: interop.Enum<typeof INPlaybackRepeatMode>): InstanceType<This>;
}

declare class INPlayMediaPlaybackSpeedResolutionResult extends INDoubleResolutionResult {
  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INPlayMediaPlaybackSpeedUnsupportedReason>): InstanceType<This>;

  initWithDoubleResolutionResult(doubleResolutionResult: INDoubleResolutionResult): this;
}

declare class INDoubleResolutionResult extends INIntentResolutionResult {
  static successWithResolvedValue<This extends abstract new (...args: any) => any>(this: This, resolvedValue: number): InstanceType<This>;

  static confirmationRequiredWithValueToConfirm<This extends abstract new (...args: any) => any>(this: This, valueToConfirm: NSNumber | null): InstanceType<This>;
}

declare class INPlayMediaMediaItemResolutionResult extends INMediaItemResolutionResult {
  static successesWithResolvedMediaItems(resolvedMediaItems: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INPlayMediaMediaItemUnsupportedReason>): InstanceType<This>;

  initWithMediaItemResolutionResult(mediaItemResolutionResult: INMediaItemResolutionResult): this;
}

declare class INMediaSearch extends NSObject implements NSCopying, NSSecureCoding {
  initWithMediaTypeSortOrderMediaNameArtistNameAlbumNameGenreNamesMoodNamesReleaseDateReferenceMediaIdentifier(mediaType: interop.Enum<typeof INMediaItemType>, sortOrder: interop.Enum<typeof INMediaSortOrder>, mediaName: string | null, artistName: string | null, albumName: string | null, genreNames: NSArray<interop.Object> | Array<interop.Object> | null, moodNames: NSArray<interop.Object> | Array<interop.Object> | null, releaseDate: INDateComponentsRange | null, reference: interop.Enum<typeof INMediaReference>, mediaIdentifier: string | null): this;

  readonly mediaType: interop.Enum<typeof INMediaItemType>;

  readonly sortOrder: interop.Enum<typeof INMediaSortOrder>;

  readonly mediaName: string;

  readonly artistName: string;

  readonly albumName: string;

  readonly genreNames: NSArray;

  readonly moodNames: NSArray;

  readonly releaseDate: INDateComponentsRange;

  readonly reference: interop.Enum<typeof INMediaReference>;

  readonly mediaIdentifier: string;

  readonly activityNames: NSArray;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INAddMediaMediaItemResolutionResult extends INMediaItemResolutionResult {
  static successesWithResolvedMediaItems(resolvedMediaItems: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INAddMediaMediaItemUnsupportedReason>): InstanceType<This>;

  initWithMediaItemResolutionResult(mediaItemResolutionResult: INMediaItemResolutionResult): this;
}

declare class INMediaItemResolutionResult extends INIntentResolutionResult {
  static successWithResolvedMediaItem<This extends abstract new (...args: any) => any>(this: This, resolvedMediaItem: INMediaItem): InstanceType<This>;

  static successesWithResolvedMediaItems(resolvedMediaItems: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  static disambiguationWithMediaItemsToDisambiguate<This extends abstract new (...args: any) => any>(this: This, mediaItemsToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithMediaItemToConfirm<This extends abstract new (...args: any) => any>(this: This, mediaItemToConfirm: INMediaItem | null): InstanceType<This>;
}

declare class INAddMediaMediaDestinationResolutionResult extends INMediaDestinationResolutionResult {
  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INAddMediaMediaDestinationUnsupportedReason>): InstanceType<This>;

  initWithMediaDestinationResolutionResult(mediaDestinationResolutionResult: INMediaDestinationResolutionResult): this;
}

declare class INAddMediaIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INAddMediaIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INAddMediaIntentResponseCode>;
}

declare class INInteraction extends NSObject implements NSSecureCoding, NSCopying {
  initWithIntentResponse(intent: INIntent, response: INIntentResponse | null): this;

  donateInteractionWithCompletion(completion: (p1: NSError) => void | null): void;

  static deleteAllInteractionsWithCompletion(completion: (p1: NSError) => void | null): void;

  static deleteInteractionsWithIdentifiersCompletion(identifiers: NSArray<interop.Object> | Array<interop.Object>, completion: (p1: NSError) => void | null): void;

  static deleteInteractionsWithGroupIdentifierCompletion(groupIdentifier: string, completion: (p1: NSError) => void | null): void;

  readonly intent: INIntent;

  readonly intentResponse: INIntentResponse;

  readonly intentHandlingStatus: interop.Enum<typeof INIntentHandlingStatus>;

  direction: interop.Enum<typeof INInteractionDirection>;

  dateInterval: NSDateInterval;

  identifier: string;

  groupIdentifier: string;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class INUpdateMediaAffinityIntent extends INIntent {
  initWithMediaItemsMediaSearchAffinityType(mediaItems: NSArray<interop.Object> | Array<interop.Object> | null, mediaSearch: INMediaSearch | null, affinityType: interop.Enum<typeof INMediaAffinityType>): this;

  readonly mediaItems: NSArray;

  readonly mediaSearch: INMediaSearch;

  readonly affinityType: interop.Enum<typeof INMediaAffinityType>;
}

declare class INSearchForMediaIntent extends INIntent {
  initWithMediaItemsMediaSearch(mediaItems: NSArray<interop.Object> | Array<interop.Object> | null, mediaSearch: INMediaSearch | null): this;

  readonly mediaItems: NSArray;

  readonly mediaSearch: INMediaSearch;
}

declare class INPlayMediaIntent extends INIntent {
  initWithMediaItemsMediaContainerPlayShuffledPlaybackRepeatModeResumePlaybackPlaybackQueueLocationPlaybackSpeedMediaSearch(mediaItems: NSArray<interop.Object> | Array<interop.Object> | null, mediaContainer: INMediaItem | null, playShuffled: NSNumber | null, playbackRepeatMode: interop.Enum<typeof INPlaybackRepeatMode>, resumePlayback: NSNumber | null, playbackQueueLocation: interop.Enum<typeof INPlaybackQueueLocation>, playbackSpeed: NSNumber | null, mediaSearch: INMediaSearch | null): this;

  readonly mediaItems: NSArray;

  readonly mediaContainer: INMediaItem;

  readonly playShuffled: NSNumber;

  readonly playbackRepeatMode: interop.Enum<typeof INPlaybackRepeatMode>;

  readonly resumePlayback: NSNumber;

  readonly playbackQueueLocation: interop.Enum<typeof INPlaybackQueueLocation>;

  readonly playbackSpeed: NSNumber;

  readonly mediaSearch: INMediaSearch;

  initWithMediaItemsMediaContainerPlayShuffledPlaybackRepeatModeResumePlayback(mediaItems: NSArray<interop.Object> | Array<interop.Object> | null, mediaContainer: INMediaItem | null, playShuffled: NSNumber | null, playbackRepeatMode: interop.Enum<typeof INPlaybackRepeatMode>, resumePlayback: NSNumber | null): this;
}

declare class INIntentResolutionResult extends NSObject {
  static needsValue<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static notRequired<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static unsupported<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static unsupportedWithReason<This extends abstract new (...args: any) => any>(this: This, reason: number): InstanceType<This>;

  static confirmationRequiredWithItemToConfirmForReason<This extends abstract new (...args: any) => any>(this: This, itemToConfirm: interop.Object, reason: number): InstanceType<This>;
}

declare class INIntentResponse extends NSObject implements NSCopying, NSSecureCoding {
  userActivity: NSUserActivity;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INIntent extends NSObject implements NSCopying, NSSecureCoding {
  readonly identifier: string;

  readonly intentDescription: string;

  suggestedInvocationPhrase: string;

  donationMetadata: INIntentDonationMetadata;

  setImageForParameterNamed(image: INImage | null, parameterName: string): void;

  imageForParameterNamed(parameterName: string): INImage | null;

  keyImage(): INImage | null;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INMediaDestinationResolutionResult extends INIntentResolutionResult {
  static successWithResolvedMediaDestination<This extends abstract new (...args: any) => any>(this: This, resolvedMediaDestination: INMediaDestination): InstanceType<This>;

  static disambiguationWithMediaDestinationsToDisambiguate<This extends abstract new (...args: any) => any>(this: This, mediaDestinationsToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithMediaDestinationToConfirm<This extends abstract new (...args: any) => any>(this: This, mediaDestinationToConfirm: INMediaDestination | null): InstanceType<This>;
}

declare class INBooleanResolutionResult extends INIntentResolutionResult {
  static successWithResolvedValue<This extends abstract new (...args: any) => any>(this: This, resolvedValue: boolean): InstanceType<This>;

  static confirmationRequiredWithValueToConfirm<This extends abstract new (...args: any) => any>(this: This, valueToConfirm: NSNumber | null): InstanceType<This>;
}

declare class INPlaybackQueueLocationResolutionResult extends INIntentResolutionResult {
  static successWithResolvedPlaybackQueueLocation<This extends abstract new (...args: any) => any>(this: This, resolvedPlaybackQueueLocation: interop.Enum<typeof INPlaybackQueueLocation>): InstanceType<This>;

  static confirmationRequiredWithPlaybackQueueLocationToConfirm<This extends abstract new (...args: any) => any>(this: This, playbackQueueLocationToConfirm: interop.Enum<typeof INPlaybackQueueLocation>): InstanceType<This>;
}

declare class INMediaDestination extends NSObject implements NSCopying, NSSecureCoding {
  static libraryDestination<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static playlistDestinationWithName<This extends abstract new (...args: any) => any>(this: This, playlistName: string): InstanceType<This>;

  readonly mediaDestinationType: interop.Enum<typeof INMediaDestinationType>;

  readonly playlistName: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INUpdateMediaAffinityIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INUpdateMediaAffinityIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INUpdateMediaAffinityIntentResponseCode>;
}

declare class INAddMediaIntent extends INIntent {
  initWithMediaItemsMediaSearchMediaDestination(mediaItems: NSArray<interop.Object> | Array<interop.Object> | null, mediaSearch: INMediaSearch | null, mediaDestination: INMediaDestination | null): this;

  readonly mediaItems: NSArray;

  readonly mediaSearch: INMediaSearch;

  readonly mediaDestination: INMediaDestination;
}

declare class INSpeakableString extends NSObject implements INSpeakable, NSCopying, NSSecureCoding {
  initWithVocabularyIdentifierSpokenPhrasePronunciationHint(vocabularyIdentifier: string, spokenPhrase: string, pronunciationHint: string | null): this;

  initWithSpokenPhrase(spokenPhrase: string): this;

  readonly spokenPhrase: string;

  readonly pronunciationHint: string;

  readonly vocabularyIdentifier: string;

  readonly alternativeSpeakableMatches: NSArray;

  readonly identifier: string;

  isEqual(object: interop.Object): boolean;

  readonly hash: number;

  readonly superclass: interop.Object;

  class(): interop.Object;

  self(): this;

  performSelector(aSelector: string): interop.Object;

  performSelectorWithObject(aSelector: string, object: interop.Object): interop.Object;

  performSelectorWithObjectWithObject(aSelector: string, object1: interop.Object, object2: interop.Object): interop.Object;

  readonly isProxy: boolean;

  isKindOfClass(aClass: interop.Object): boolean;

  isMemberOfClass(aClass: interop.Object): boolean;

  conformsToProtocol(aProtocol: interop.PointerConvertible): boolean;

  respondsToSelector(aSelector: string): boolean;

  retain(): this;

  release(): void;

  autorelease(): this;

  retainCount(): number;

  readonly zone: interop.Pointer;

  readonly description: string;

  readonly debugDescription: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INSearchForMediaMediaItemResolutionResult extends INMediaItemResolutionResult {
  static successesWithResolvedMediaItems(resolvedMediaItems: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INSearchForMediaMediaItemUnsupportedReason>): InstanceType<This>;

  initWithMediaItemResolutionResult(mediaItemResolutionResult: INMediaItemResolutionResult): this;
}

declare class INSearchForMediaIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INSearchForMediaIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INSearchForMediaIntentResponseCode>;

  get mediaItems(): NSArray;
  set mediaItems(value: NSArray<interop.Object> | Array<interop.Object>);
}

declare class INDateComponentsRange extends NSObject implements NSCopying, NSSecureCoding {
  initWithStartDateComponentsEndDateComponents(startDateComponents: NSDateComponents | null, endDateComponents: NSDateComponents | null): this;

  initWithStartDateComponentsEndDateComponentsRecurrenceRule(startDateComponents: NSDateComponents | null, endDateComponents: NSDateComponents | null, recurrenceRule: interop.Object | null): this;

  readonly startDateComponents: NSDateComponents;

  readonly endDateComponents: NSDateComponents;

  readonly recurrenceRule: interop.Object;

  initWithEKRecurrenceRule(recurrenceRule: interop.Object): this;

  EKRecurrenceRule(): interop.Object;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INMediaAffinityTypeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedMediaAffinityType<This extends abstract new (...args: any) => any>(this: This, resolvedMediaAffinityType: interop.Enum<typeof INMediaAffinityType>): InstanceType<This>;

  static confirmationRequiredWithMediaAffinityTypeToConfirm<This extends abstract new (...args: any) => any>(this: This, mediaAffinityTypeToConfirm: interop.Enum<typeof INMediaAffinityType>): InstanceType<This>;
}

declare class INPlayMediaIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INPlayMediaIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INPlayMediaIntentResponseCode>;

  get nowPlayingInfo(): NSDictionary;
  set nowPlayingInfo(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);
}

declare class INExtension extends NSObject implements INIntentHandlerProviding {
  handlerForIntent(intent: INIntent): interop.Object;

  isEqual(object: interop.Object): boolean;

  readonly hash: number;

  readonly superclass: interop.Object;

  class(): interop.Object;

  self(): this;

  performSelector(aSelector: string): interop.Object;

  performSelectorWithObject(aSelector: string, object: interop.Object): interop.Object;

  performSelectorWithObjectWithObject(aSelector: string, object1: interop.Object, object2: interop.Object): interop.Object;

  readonly isProxy: boolean;

  isKindOfClass(aClass: interop.Object): boolean;

  isMemberOfClass(aClass: interop.Object): boolean;

  conformsToProtocol(aProtocol: interop.PointerConvertible): boolean;

  respondsToSelector(aSelector: string): boolean;

  retain(): this;

  release(): void;

  autorelease(): this;

  retainCount(): number;

  readonly zone: interop.Pointer;

  readonly description: string;

  readonly debugDescription: string;
}

