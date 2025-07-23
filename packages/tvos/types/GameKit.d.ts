/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />
/// <reference path="./UIKit.d.ts" />

declare const GKPlayerAuthenticationDidChangeNotificationName: string;

declare const GKExchangeTimeoutDefault: number;

declare const GKTurnTimeoutDefault: number;

declare const GKVoiceChatServiceErrorDomain: string;

declare const GKTurnTimeoutNone: number;

declare const GKPlayerDidChangeNotificationName: string;

declare const GKGameSessionErrorDomain: string;

declare const GKExchangeTimeoutNone: number;

declare const GKErrorDomain: string;

declare const GKSessionErrorDomain: string;

declare const GKPlayerIDNoLongerAvailable: string;

declare const GKVoiceChatPlayerState: {
  Connected: 0,
  Disconnected: 1,
  Speaking: 2,
  Silent: 3,
  Connecting: 4,
};

declare const GKVoiceChatServiceError: {
  Internal: 32000,
  NoRemotePackets: 32001,
  UnableToConnect: 32002,
  RemoteParticipantHangup: 32003,
  InvalidCallID: 32004,
  AudioUnavailable: 32005,
  UninitializedClient: 32006,
  ClientMissingRequiredMethods: 32007,
  RemoteParticipantBusy: 32008,
  RemoteParticipantCancelled: 32009,
  RemoteParticipantResponseInvalid: 32010,
  RemoteParticipantDeclinedInvite: 32011,
  MethodCurrentlyInvalid: 32012,
  NetworkConfiguration: 32013,
  UnsupportedRemoteVersion: 32014,
  OutOfMemory: 32015,
  InvalidParameter: 32016,
};

declare const GKPeerConnectionState: {
  Available: 0,
  Unavailable: 1,
  Connected: 2,
  Disconnected: 3,
  Connecting: 4,
  ConnectedRelay: 5,
};

declare const GKSessionMode: {
  Server: 0,
  Client: 1,
  Peer: 2,
};

declare const GKMatchType: {
  PeerToPeer: 0,
  Hosted: 1,
  TurnBased: 2,
};

declare const GKTurnBasedMatchOutcome: {
  None: 0,
  Quit: 1,
  Won: 2,
  Lost: 3,
  Tied: 4,
  TimeExpired: 5,
  First: 6,
  Second: 7,
  Third: 8,
  Fourth: 9,
  CustomRange: 16711680,
};

declare const GKGameSessionErrorCode: {
  Unknown: 1,
  NotAuthenticated: 2,
  SessionConflict: 3,
  SessionNotShared: 4,
  ConnectionCancelledByUser: 5,
  ConnectionFailed: 6,
  SessionHasMaxConnectedPlayers: 7,
  SendDataNotConnected: 8,
  SendDataNoRecipients: 9,
  SendDataNotReachable: 10,
  SendRateLimitReached: 11,
  BadContainer: 12,
  CloudQuotaExceeded: 13,
  NetworkFailure: 14,
  CloudDriveDisabled: 15,
  InvalidSession: 16,
};

declare const GKChallengeState: {
  Invalid: 0,
  Pending: 1,
  Completed: 2,
  Declined: 3,
};

declare const GKAccessPointLocation: {
  TopLeading: 0,
  TopTrailing: 1,
  BottomLeading: 2,
  BottomTrailing: 3,
};

declare const GKGameCenterViewControllerState: {
  Default: -1,
  Leaderboards: 0,
  Achievements: 1,
  Challenges: 2,
  LocalPlayerProfile: 3,
  Dashboard: 4,
  LocalPlayerFriendsList: 5,
};

declare const GKLeaderboardPlayerScope: {
  Global: 0,
  FriendsOnly: 1,
};

declare const GKLeaderboardTimeScope: {
  Today: 0,
  Week: 1,
  AllTime: 2,
};

declare const GKPhotoSize: {
  Small: 0,
  Normal: 1,
};

declare const GKErrorCode: {
  Unknown: 1,
  Cancelled: 2,
  CommunicationsFailure: 3,
  UserDenied: 4,
  InvalidCredentials: 5,
  NotAuthenticated: 6,
  AuthenticationInProgress: 7,
  InvalidPlayer: 8,
  ScoreNotSet: 9,
  ParentalControlsBlocked: 10,
  PlayerStatusExceedsMaximumLength: 11,
  PlayerStatusInvalid: 12,
  MatchRequestInvalid: 13,
  Underage: 14,
  GameUnrecognized: 15,
  NotSupported: 16,
  InvalidParameter: 17,
  UnexpectedConnection: 18,
  ChallengeInvalid: 19,
  TurnBasedMatchDataTooLarge: 20,
  TurnBasedTooManySessions: 21,
  TurnBasedInvalidParticipant: 22,
  TurnBasedInvalidTurn: 23,
  TurnBasedInvalidState: 24,
  InvitationsDisabled: 25,
  PlayerPhotoFailure: 26,
  UbiquityContainerUnavailable: 27,
  MatchNotConnected: 28,
  GameSessionRequestInvalid: 29,
  RestrictedToAutomatch: 30,
  APINotAvailable: 31,
  NotAuthorized: 32,
  ConnectionTimeout: 33,
  APIObsolete: 34,
  ICloudUnavailable: 35,
  LockdownMode: 36,
  AppUnlisted: 37,
  FriendListDescriptionMissing: 100,
  FriendListRestricted: 101,
  FriendListDenied: 102,
  FriendRequestNotAvailable: 103,
};

declare const GKTurnBasedParticipantStatus: {
  Unknown: 0,
  Invited: 1,
  Declined: 2,
  Matching: 3,
  Active: 4,
  Done: 5,
};

declare const GKSendDataMode: {
  Reliable: 0,
  Unreliable: 1,
};

declare const GKMatchSendDataMode: {
  Reliable: 0,
  Unreliable: 1,
};

declare const GKInviteRecipientResponse: {
  InviteRecipientResponseAccepted: 0,
  InviteRecipientResponseDeclined: 1,
  InviteRecipientResponseFailed: 2,
  InviteRecipientResponseIncompatible: 3,
  InviteRecipientResponseUnableToConnect: 4,
  InviteRecipientResponseNoAnswer: 5,
  InviteeResponseAccepted: 0,
  InviteeResponseDeclined: 1,
  InviteeResponseFailed: 2,
  InviteeResponseIncompatible: 3,
  InviteeResponseUnableToConnect: 4,
  InviteeResponseNoAnswer: 5,
};

declare const GKSessionError: {
  InvalidParameter: 30500,
  PeerNotFound: 30501,
  Declined: 30502,
  TimedOut: 30503,
  Cancelled: 30504,
  ConnectionFailed: 30505,
  ConnectionClosed: 30506,
  DataTooBig: 30507,
  NotConnected: 30508,
  CannotEnable: 30509,
  InProgress: 30510,
  Connectivity: 30201,
  Transport: 30202,
  Internal: 30203,
  Unknown: 30204,
  System: 30205,
};

declare const GKConnectionState: {
  Not: 0,
  GKConnectionStateConnected: 1,
};

declare const GKMatchmakingMode: {
  Default: 0,
  NearbyOnly: 1,
  AutomatchOnly: 2,
  InviteOnly: 3,
};

declare const GKLeaderboardType: {
  Classic: 0,
  Recurring: 1,
};

declare const GKPlayerConnectionState: {
  Unknown: 0,
  Connected: 1,
  Disconnected: 2,
};

declare const GKTurnBasedMatchStatus: {
  Unknown: 0,
  Open: 1,
  Ended: 2,
  Matching: 3,
};

declare const GKFriendsAuthorizationStatus: {
  NotDetermined: 0,
  Restricted: 1,
  Denied: 2,
  Authorized: 3,
};

declare const GKTurnBasedExchangeStatus: {
  Unknown: 0,
  Active: 1,
  Complete: 2,
  Resolved: 3,
  Canceled: 4,
};

declare const GKTransportType: {
  Unreliable: 0,
  Reliable: 1,
};

declare interface GKMatchmakerViewControllerDelegate extends NSObjectProtocol {
  matchmakerViewControllerWasCancelled(viewController: GKMatchmakerViewController): void;

  matchmakerViewControllerDidFailWithError(viewController: GKMatchmakerViewController, error: NSError): void;

  matchmakerViewControllerDidFindMatch?(viewController: GKMatchmakerViewController, match: GKMatch): void;

  matchmakerViewControllerDidFindHostedPlayers?(viewController: GKMatchmakerViewController, players: NSArray<interop.Object> | Array<interop.Object>): void;

  matchmakerViewControllerHostedPlayerDidAccept?(viewController: GKMatchmakerViewController, player: GKPlayer): void;

  matchmakerViewControllerGetMatchPropertiesForRecipientWithCompletionHandler?(viewController: GKMatchmakerViewController, recipient: GKPlayer, completionHandler: (p1: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) => void): void;
}

declare class GKMatchmakerViewControllerDelegate extends NativeObject implements GKMatchmakerViewControllerDelegate {
}

declare interface GKLocalPlayerListener extends GKChallengeListener, GKInviteEventListener, GKTurnBasedEventListener {
}

declare class GKLocalPlayerListener extends NativeObject implements GKLocalPlayerListener {
}

declare interface GKTurnBasedEventListener {
  playerDidRequestMatchWithOtherPlayers?(player: GKPlayer, playersToInvite: NSArray<interop.Object> | Array<interop.Object>): void;

  playerReceivedTurnEventForMatchDidBecomeActive?(player: GKPlayer, match: GKTurnBasedMatch, didBecomeActive: boolean): void;

  playerMatchEnded?(player: GKPlayer, match: GKTurnBasedMatch): void;

  playerReceivedExchangeRequestForMatch?(player: GKPlayer, exchange: GKTurnBasedExchange, match: GKTurnBasedMatch): void;

  playerReceivedExchangeCancellationForMatch?(player: GKPlayer, exchange: GKTurnBasedExchange, match: GKTurnBasedMatch): void;

  playerReceivedExchangeRepliesForCompletedExchangeForMatch?(player: GKPlayer, replies: NSArray<interop.Object> | Array<interop.Object>, exchange: GKTurnBasedExchange, match: GKTurnBasedMatch): void;

  playerWantsToQuitMatch?(player: GKPlayer, match: GKTurnBasedMatch): void;
}

declare class GKTurnBasedEventListener extends NativeObject implements GKTurnBasedEventListener {
}

declare interface GKGameSessionEventListener extends NSObjectProtocol {
  sessionDidAddPlayer?(session: GKGameSession, player: GKCloudPlayer): void;

  sessionDidRemovePlayer?(session: GKGameSession, player: GKCloudPlayer): void;

  sessionPlayerDidChangeConnectionState?(session: GKGameSession, player: GKCloudPlayer, newState: interop.Enum<typeof GKConnectionState>): void;

  sessionPlayerDidSaveData?(session: GKGameSession, player: GKCloudPlayer, data: NSData): void;

  sessionDidReceiveDataFromPlayer?(session: GKGameSession, data: NSData, player: GKCloudPlayer): void;

  sessionDidReceiveMessageWithDataFromPlayer?(session: GKGameSession, message: string, data: NSData, player: GKCloudPlayer): void;
}

declare class GKGameSessionEventListener extends NativeObject implements GKGameSessionEventListener {
}

declare interface GKChallengeListener extends NSObjectProtocol {
  playerWantsToPlayChallenge?(player: GKPlayer, challenge: GKChallenge): void;

  playerDidReceiveChallenge?(player: GKPlayer, challenge: GKChallenge): void;

  playerDidCompleteChallengeIssuedByFriend?(player: GKPlayer, challenge: GKChallenge, friendPlayer: GKPlayer): void;

  playerIssuedChallengeWasCompletedByFriend?(player: GKPlayer, challenge: GKChallenge, friendPlayer: GKPlayer): void;
}

declare class GKChallengeListener extends NativeObject implements GKChallengeListener {
}

declare interface GKGameCenterControllerDelegate extends NSObjectProtocol {
  gameCenterViewControllerDidFinish(gameCenterViewController: GKGameCenterViewController): void;
}

declare class GKGameCenterControllerDelegate extends NativeObject implements GKGameCenterControllerDelegate {
}

declare interface GKMatchDelegate extends NSObjectProtocol {
  matchDidReceiveDataFromRemotePlayer?(match: GKMatch, data: NSData, player: GKPlayer): void;

  matchDidReceiveDataForRecipientFromRemotePlayer?(match: GKMatch, data: NSData, recipient: GKPlayer, player: GKPlayer): void;

  matchPlayerDidChangeConnectionState?(match: GKMatch, player: GKPlayer, state: interop.Enum<typeof GKPlayerConnectionState>): void;

  matchDidFailWithError?(match: GKMatch, error: NSError | null): void;

  matchShouldReinviteDisconnectedPlayer?(match: GKMatch, player: GKPlayer): boolean;
}

declare class GKMatchDelegate extends NativeObject implements GKMatchDelegate {
}

declare interface GKTurnBasedMatchmakerViewControllerDelegate extends NSObjectProtocol {
  turnBasedMatchmakerViewControllerWasCancelled(viewController: GKTurnBasedMatchmakerViewController): void;

  turnBasedMatchmakerViewControllerDidFailWithError(viewController: GKTurnBasedMatchmakerViewController, error: NSError): void;
}

declare class GKTurnBasedMatchmakerViewControllerDelegate extends NativeObject implements GKTurnBasedMatchmakerViewControllerDelegate {
}

declare interface GKGameSessionSharingViewControllerDelegate extends NSObjectProtocol {
  sharingViewControllerDidFinishWithError(viewController: GKGameSessionSharingViewController, error: NSError | null): void;
}

declare class GKGameSessionSharingViewControllerDelegate extends NativeObject implements GKGameSessionSharingViewControllerDelegate {
}

declare interface GKInviteEventListener {
  playerDidAcceptInvite?(player: GKPlayer, invite: GKInvite): void;

  playerDidRequestMatchWithRecipients?(player: GKPlayer, recipientPlayers: NSArray<interop.Object> | Array<interop.Object>): void;
}

declare class GKInviteEventListener extends NativeObject implements GKInviteEventListener {
}

declare class GKVoiceChat extends NSObject {
  start(): void;

  stop(): void;

  setPlayerMuted(player: GKPlayer, isMuted: boolean): void;

  playerVoiceChatStateDidChangeHandler: (p1: GKPlayer, p2: interop.Enum<typeof GKVoiceChatPlayerState>) => void;

  readonly name: string;

  isActive: boolean;

  volume: number;

  readonly players: NSArray;

  static isVoIPAllowed(): boolean;
}

declare class GKNotificationBanner extends NSObject {
  static showBannerWithTitleMessageCompletionHandler(title: string | null, message: string | null, completionHandler: () => void | null): void;

  static showBannerWithTitleMessageDurationCompletionHandler(title: string | null, message: string | null, duration: number, completionHandler: () => void | null): void;
}

declare class GKMatchmakerViewController extends UINavigationController {
  matchmakerDelegate: GKMatchmakerViewControllerDelegate;

  readonly matchRequest: GKMatchRequest;

  isHosted: boolean;

  matchmakingMode: interop.Enum<typeof GKMatchmakingMode>;

  canStartWithMinimumPlayers: boolean;

  initWithMatchRequest(request: GKMatchRequest): this;

  initWithInvite(invite: GKInvite): this;

  addPlayersToMatch(match: GKMatch): void;

  setHostedPlayerDidConnect(player: GKPlayer, connected: boolean): void;
}

declare class GKMatch extends NSObject {
  readonly players: NSArray;

  delegate: GKMatchDelegate;

  readonly expectedPlayerCount: number;

  readonly properties: NSDictionary;

  readonly playerProperties: NSDictionary;

  sendDataToPlayersDataModeError(data: NSData, players: NSArray<interop.Object> | Array<interop.Object>, mode: interop.Enum<typeof GKMatchSendDataMode>, error: interop.PointerConvertible): boolean;

  sendDataToAllPlayersWithDataModeError(data: NSData, mode: interop.Enum<typeof GKMatchSendDataMode>, error: interop.PointerConvertible): boolean;

  disconnect(): void;

  chooseBestHostingPlayerWithCompletionHandler(completionHandler: (p1: GKPlayer) => void | null): void;

  rematchWithCompletionHandler(completionHandler: (p1: GKMatch, p2: NSError) => void | null): void;

  voiceChatWithName(name: string): GKVoiceChat;
}

declare class GKLocalPlayer extends GKPlayer {
  static readonly local: GKLocalPlayer;

  static readonly localPlayer: GKLocalPlayer;

  readonly isAuthenticated: boolean;

  readonly isUnderage: boolean;

  readonly isMultiplayerGamingRestricted: boolean;

  readonly isPersonalizedCommunicationRestricted: boolean;

  loadRecentPlayersWithCompletionHandler(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;

  loadChallengableFriendsWithCompletionHandler(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;

  setDefaultLeaderboardIdentifierCompletionHandler(leaderboardIdentifier: string, completionHandler: (p1: NSError) => void | null): void;

  loadDefaultLeaderboardIdentifierWithCompletionHandler(completionHandler: (p1: string, p2: NSError) => void | null): void;

  fetchItemsForIdentityVerificationSignature(completionHandler: (p1: NSURL, p2: NSData, p3: NSData, p4: number, p5: NSError) => void | null): void;

  registerListener(listener: GKLocalPlayerListener): void;

  unregisterListener(listener: GKLocalPlayerListener): void;

  unregisterAllListeners(): void;

  loadFriendPlayersWithCompletionHandler(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;

  generateIdentityVerificationSignatureWithCompletionHandler(completionHandler: (p1: NSURL, p2: NSData, p3: NSData, p4: number, p5: NSError) => void | null): void;

  loadFriendsAuthorizationStatus(completionHandler: (p1: interop.Enum<typeof GKFriendsAuthorizationStatus>, p2: NSError) => void | null): void;

  loadFriends(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;

  loadFriendsWithIdentifiersCompletionHandler(identifiers: NSArray<interop.Object> | Array<interop.Object>, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;

  authenticateHandler: (p1: UIViewController, p2: NSError) => void | null;
}

declare class GKMatchedPlayers extends NSObject {
  readonly properties: NSDictionary;

  readonly players: NSArray;

  readonly playerProperties: NSDictionary;
}

declare class GKMatchRequest extends NSObject {
  minPlayers: number;

  maxPlayers: number;

  playerGroup: number;

  playerAttributes: number;

  get recipients(): NSArray;
  set recipients(value: NSArray<interop.Object> | Array<interop.Object>);

  inviteMessage: string;

  defaultNumberOfPlayers: number;

  restrictToAutomatch: boolean;

  recipientResponseHandler: (p1: GKPlayer, p2: interop.Enum<typeof GKInviteRecipientResponse>) => void;

  static maxPlayersAllowedForMatchOfType(matchType: interop.Enum<typeof GKMatchType>): number;

  queueName: string;

  get properties(): NSDictionary;
  set properties(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  get recipientProperties(): NSDictionary;
  set recipientProperties(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);
}

declare class GKTurnBasedExchange extends NSObject {
  readonly exchangeID: string;

  readonly sender: GKTurnBasedParticipant;

  readonly recipients: NSArray;

  readonly status: interop.Enum<typeof GKTurnBasedExchangeStatus>;

  readonly message: string;

  readonly data: NSData;

  readonly sendDate: NSDate;

  readonly timeoutDate: NSDate;

  readonly completionDate: NSDate;

  readonly replies: NSArray;

  cancelWithLocalizableMessageKeyArgumentsCompletionHandler(key: string, arguments$: NSArray<interop.Object> | Array<interop.Object>, completionHandler: (p1: NSError) => void | null): void;

  replyWithLocalizableMessageKeyArgumentsDataCompletionHandler(key: string, arguments$: NSArray<interop.Object> | Array<interop.Object>, data: NSData, completionHandler: (p1: NSError) => void | null): void;
}

declare class GKTurnBasedParticipant extends NSObject {
  readonly player: GKPlayer;

  readonly lastTurnDate: NSDate;

  readonly status: interop.Enum<typeof GKTurnBasedParticipantStatus>;

  matchOutcome: interop.Enum<typeof GKTurnBasedMatchOutcome>;

  readonly timeoutDate: NSDate;
}

declare class GKGameSessionSharingViewController extends UIViewController {
  readonly session: GKGameSession;

  delegate: GKGameSessionSharingViewControllerDelegate;

  initWithSession(session: GKGameSession): this;
}

declare class GKCloudPlayer extends GKBasePlayer {
  static getCurrentSignedInPlayerForContainerCompletionHandler(containerName: string | null, handler: (p1: GKCloudPlayer, p2: NSError) => void | null): void;
}

declare class GKAchievementChallenge extends GKChallenge {
  readonly achievement: GKAchievement;
}

declare class GKScoreChallenge extends GKChallenge {
  readonly score: GKScore;

  readonly leaderboardEntry: GKLeaderboardEntry;
}

declare class GKLeaderboardEntry extends NSObject {
  readonly player: GKPlayer;

  readonly rank: number;

  readonly score: number;

  readonly formattedScore: string;

  readonly context: number;

  readonly date: NSDate;

  challengeComposeControllerWithMessagePlayersCompletionHandler(message: string | null, players: NSArray<interop.Object> | Array<interop.Object> | null, completionHandler: (p1: UIViewController, p2: boolean, p3: NSArray<interop.Object> | Array<interop.Object>) => void | null): UIViewController;

  challengeComposeControllerWithMessagePlayersCompletion(message: string | null, players: NSArray<interop.Object> | Array<interop.Object> | null, completionHandler: (p1: UIViewController, p2: boolean, p3: NSArray<interop.Object> | Array<interop.Object>) => void | null): UIViewController;
}

declare class GKLeaderboard extends NSObject {
  readonly title: string;

  readonly groupIdentifier: string;

  readonly baseLeaderboardID: string;

  readonly type: interop.Enum<typeof GKLeaderboardType>;

  readonly startDate: NSDate;

  readonly nextStartDate: NSDate;

  readonly duration: number;

  static loadLeaderboardsWithIDsCompletionHandler(leaderboardIDs: NSArray<interop.Object> | Array<interop.Object> | null, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;

  loadPreviousOccurrenceWithCompletionHandler(completionHandler: (p1: GKLeaderboard, p2: NSError) => void | null): void;

  static submitScoreContextPlayerLeaderboardIDsCompletionHandler(score: number, context: number, player: GKPlayer, leaderboardIDs: NSArray<interop.Object> | Array<interop.Object>, completionHandler: (p1: NSError) => void | null): void;

  submitScoreContextPlayerCompletionHandler(score: number, context: number, player: GKPlayer, completionHandler: (p1: NSError) => void | null): void;

  loadEntriesForPlayerScopeTimeScopeRangeCompletionHandler(playerScope: interop.Enum<typeof GKLeaderboardPlayerScope>, timeScope: interop.Enum<typeof GKLeaderboardTimeScope>, range: _NSRange, completionHandler: (p1: GKLeaderboardEntry, p2: NSArray<interop.Object> | Array<interop.Object>, p3: number, p4: NSError) => void | null): void;

  loadEntriesForPlayersTimeScopeCompletionHandler(players: NSArray<interop.Object> | Array<interop.Object>, timeScope: interop.Enum<typeof GKLeaderboardTimeScope>, completionHandler: (p1: GKLeaderboardEntry, p2: NSArray<interop.Object> | Array<interop.Object>, p3: NSError) => void | null): void;

  timeScope: interop.Enum<typeof GKLeaderboardTimeScope>;

  playerScope: interop.Enum<typeof GKLeaderboardPlayerScope>;

  identifier: string;

  range: _NSRange;

  readonly scores: NSArray;

  readonly maxRange: number;

  readonly localPlayerScore: GKScore;

  readonly isLoading: boolean;

  init(): this;

  initWithPlayers(players: NSArray<interop.Object> | Array<interop.Object>): this;

  loadScoresWithCompletionHandler(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;

  static loadLeaderboardsWithCompletionHandler(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;
}

declare class GKPlayer extends GKBasePlayer {
  scopedIDsArePersistent(): boolean;

  readonly gamePlayerID: string;

  readonly teamPlayerID: string;

  readonly displayName: string;

  readonly alias: string;

  static anonymousGuestPlayerWithIdentifier<This extends abstract new (...args: any) => any>(this: This, guestIdentifier: string): InstanceType<This>;

  readonly guestIdentifier: string;

  readonly isInvitable: boolean;

  loadPhotoForSizeWithCompletionHandler(size: interop.Enum<typeof GKPhotoSize>, completionHandler: (p1: UIImage, p2: NSError) => void | null): void;

  readonly playerID: string;

  static loadPlayersForIdentifiersWithCompletionHandler(identifiers: NSArray<interop.Object> | Array<interop.Object>, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;
}

declare class GKGameCenterViewController extends UINavigationController {
  gameCenterDelegate: GKGameCenterControllerDelegate;

  initWithState(state: interop.Enum<typeof GKGameCenterViewControllerState>): this;

  initWithLeaderboardIDPlayerScopeTimeScope(leaderboardID: string, playerScope: interop.Enum<typeof GKLeaderboardPlayerScope>, timeScope: interop.Enum<typeof GKLeaderboardTimeScope>): this;

  initWithLeaderboardPlayerScope(leaderboard: GKLeaderboard, playerScope: interop.Enum<typeof GKLeaderboardPlayerScope>): this;

  initWithLeaderboardSetID(leaderboardSetID: string): this;

  initWithAchievementID(achievementID: string): this;

  initWithPlayer(player: GKPlayer): this;

  viewState: interop.Enum<typeof GKGameCenterViewControllerState>;

  leaderboardIdentifier: string;
}

declare class GKTurnBasedMatch extends NSObject {
  readonly matchID: string;

  readonly creationDate: NSDate;

  readonly participants: NSArray;

  readonly status: interop.Enum<typeof GKTurnBasedMatchStatus>;

  readonly currentParticipant: GKTurnBasedParticipant;

  readonly matchData: NSData;

  setLocalizableMessageWithKeyArguments(key: string, arguments$: NSArray<interop.Object> | Array<interop.Object> | null): void;

  message: string;

  readonly matchDataMaximumSize: number;

  readonly exchanges: NSArray;

  readonly activeExchanges: NSArray;

  readonly completedExchanges: NSArray;

  readonly exchangeDataMaximumSize: number;

  readonly exchangeMaxInitiatedExchangesPerPlayer: number;

  static findMatchForRequestWithCompletionHandler(request: GKMatchRequest, completionHandler: (p1: GKTurnBasedMatch, p2: NSError) => void | null): void;

  static loadMatchesWithCompletionHandler(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;

  static loadMatchWithIDWithCompletionHandler(matchID: string, completionHandler: (p1: GKTurnBasedMatch, p2: NSError) => void | null): void;

  rematchWithCompletionHandler(completionHandler: (p1: GKTurnBasedMatch, p2: NSError) => void | null): void;

  acceptInviteWithCompletionHandler(completionHandler: (p1: GKTurnBasedMatch, p2: NSError) => void | null): void;

  declineInviteWithCompletionHandler(completionHandler: (p1: NSError) => void | null): void;

  removeWithCompletionHandler(completionHandler: (p1: NSError) => void | null): void;

  loadMatchDataWithCompletionHandler(completionHandler: (p1: NSData, p2: NSError) => void | null): void;

  endTurnWithNextParticipantsTurnTimeoutMatchDataCompletionHandler(nextParticipants: NSArray<interop.Object> | Array<interop.Object>, timeout: number, matchData: NSData, completionHandler: (p1: NSError) => void | null): void;

  participantQuitInTurnWithOutcomeNextParticipantsTurnTimeoutMatchDataCompletionHandler(matchOutcome: interop.Enum<typeof GKTurnBasedMatchOutcome>, nextParticipants: NSArray<interop.Object> | Array<interop.Object>, timeout: number, matchData: NSData, completionHandler: (p1: NSError) => void | null): void;

  participantQuitOutOfTurnWithOutcomeWithCompletionHandler(matchOutcome: interop.Enum<typeof GKTurnBasedMatchOutcome>, completionHandler: (p1: NSError) => void | null): void;

  endMatchInTurnWithMatchDataCompletionHandler(matchData: NSData, completionHandler: (p1: NSError) => void | null): void;

  endMatchInTurnWithMatchDataScoresAchievementsCompletionHandler(matchData: NSData, scores: NSArray<interop.Object> | Array<interop.Object> | null, achievements: NSArray<interop.Object> | Array<interop.Object> | null, completionHandler: (p1: NSError) => void | null): void;

  endMatchInTurnWithMatchDataLeaderboardScoresAchievementsCompletionHandler(matchData: NSData, scores: NSArray<interop.Object> | Array<interop.Object>, achievements: NSArray<interop.Object> | Array<interop.Object>, completionHandler: (p1: NSError) => void | null): void;

  saveCurrentTurnWithMatchDataCompletionHandler(matchData: NSData, completionHandler: (p1: NSError) => void | null): void;

  saveMergedMatchDataWithResolvedExchangesCompletionHandler(matchData: NSData, exchanges: NSArray<interop.Object> | Array<interop.Object>, completionHandler: (p1: NSError) => void | null): void;

  sendExchangeToParticipantsDataLocalizableMessageKeyArgumentsTimeoutCompletionHandler(participants: NSArray<interop.Object> | Array<interop.Object>, data: NSData, key: string, arguments$: NSArray<interop.Object> | Array<interop.Object>, timeout: number, completionHandler: (p1: GKTurnBasedExchange, p2: NSError) => void | null): void;

  sendReminderToParticipantsLocalizableMessageKeyArgumentsCompletionHandler(participants: NSArray<interop.Object> | Array<interop.Object>, key: string, arguments$: NSArray<interop.Object> | Array<interop.Object>, completionHandler: (p1: NSError) => void | null): void;
}

declare class GKScore extends NSObject implements NSCoding, NSSecureCoding {
  initWithLeaderboardIdentifier(identifier: string): this;

  initWithLeaderboardIdentifierPlayer(identifier: string, player: GKPlayer): this;

  value: number;

  readonly formattedValue: string;

  leaderboardIdentifier: string;

  context: number;

  readonly date: NSDate;

  readonly player: GKPlayer;

  readonly rank: number;

  shouldSetDefaultLeaderboard: boolean;

  static reportScoresWithCompletionHandler(scores: NSArray<interop.Object> | Array<interop.Object>, completionHandler: (p1: NSError) => void | null): void;

  static reportScoresWithEligibleChallengesWithCompletionHandler(scores: NSArray<interop.Object> | Array<interop.Object>, challenges: NSArray<interop.Object> | Array<interop.Object>, completionHandler: (p1: NSError) => void | null): void;

  static reportLeaderboardScoresWithEligibleChallengesWithCompletionHandler(scores: NSArray<interop.Object> | Array<interop.Object>, challenges: NSArray<interop.Object> | Array<interop.Object>, completionHandler: (p1: NSError) => void | null): void;

  challengeComposeControllerWithMessagePlayersCompletionHandler(message: string | null, players: NSArray<interop.Object> | Array<interop.Object> | null, completionHandler: (p1: UIViewController, p2: boolean, p3: NSArray<interop.Object> | Array<interop.Object>) => void | null): UIViewController;

  challengeComposeControllerWithMessagePlayersCompletion(message: string | null, players: NSArray<interop.Object> | Array<interop.Object> | null, completionHandler: (p1: UIViewController, p2: boolean, p3: NSArray<interop.Object> | Array<interop.Object>) => void | null): UIViewController;

  challengeComposeControllerWithPlayersMessageCompletionHandler(playerIDs: NSArray<interop.Object> | Array<interop.Object> | null, message: string | null, completionHandler: (p1: UIViewController, p2: boolean, p3: NSArray<interop.Object> | Array<interop.Object>) => void | null): UIViewController;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  static readonly supportsSecureCoding: boolean;
}

declare class GKGameSession extends NSObject {
  readonly identifier: string;

  readonly title: string;

  readonly owner: GKCloudPlayer;

  readonly players: NSArray;

  readonly lastModifiedDate: NSDate;

  readonly lastModifiedPlayer: GKCloudPlayer;

  readonly maxNumberOfConnectedPlayers: number;

  readonly badgedPlayers: NSArray;

  static createSessionInContainerWithTitleMaxConnectedPlayersCompletionHandler(containerName: string | null, title: string, maxPlayers: number, completionHandler: (p1: GKGameSession, p2: NSError) => void | null): void;

  static loadSessionsInContainerCompletionHandler(containerName: string | null, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;

  static loadSessionWithIdentifierCompletionHandler(identifier: string, completionHandler: (p1: GKGameSession, p2: NSError) => void | null): void;

  static removeSessionWithIdentifierCompletionHandler(identifier: string, completionHandler: (p1: NSError) => void | null): void;

  getShareURLWithCompletionHandler(completionHandler: (p1: NSURL, p2: NSError) => void | null): void;

  loadDataWithCompletionHandler(completionHandler: (p1: NSData, p2: NSError) => void | null): void;

  saveDataCompletionHandler(data: NSData, completionHandler: (p1: NSData, p2: NSError) => void | null): void;

  setConnectionStateCompletionHandler(state: interop.Enum<typeof GKConnectionState>, completionHandler: (p1: NSError) => void | null): void;

  playersWithConnectionState(state: interop.Enum<typeof GKConnectionState>): NSArray;

  sendDataWithTransportTypeCompletionHandler(data: NSData, transport: interop.Enum<typeof GKTransportType>, completionHandler: (p1: NSError) => void | null): void;

  sendMessageWithLocalizedFormatKeyArgumentsDataToPlayersBadgePlayersCompletionHandler(key: string, arguments$: NSArray<interop.Object> | Array<interop.Object>, data: NSData | null, players: NSArray<interop.Object> | Array<interop.Object>, badgePlayers: boolean, completionHandler: (p1: NSError) => void | null): void;

  clearBadgeForPlayersCompletionHandler(players: NSArray<interop.Object> | Array<interop.Object>, completionHandler: (p1: NSError) => void | null): void;

  static addEventListener(listener: NSObject): void;

  static removeEventListener(listener: NSObject): void;
}

declare class GKAchievementDescription extends NSObject implements NSCoding, NSSecureCoding {
  static loadAchievementDescriptionsWithCompletionHandler(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;

  readonly identifier: string;

  readonly groupIdentifier: string;

  readonly title: string;

  readonly achievedDescription: string;

  readonly unachievedDescription: string;

  readonly maximumPoints: number;

  readonly isHidden: boolean;

  readonly isReplayable: boolean;

  readonly rarityPercent: NSNumber;

  readonly image: UIImage;

  loadImageWithCompletionHandler(completionHandler: (p1: UIImage, p2: NSError) => void | null): void;

  static incompleteAchievementImage(): UIImage;

  static placeholderCompletedAchievementImage(): UIImage;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  static readonly supportsSecureCoding: boolean;
}

declare class GKInvite extends NSObject {
  readonly sender: GKPlayer;

  readonly isHosted: boolean;

  readonly playerGroup: number;

  readonly playerAttributes: number;
}

declare class GKTurnBasedMatchmakerViewController extends UINavigationController {
  turnBasedMatchmakerDelegate: GKTurnBasedMatchmakerViewControllerDelegate;

  showExistingMatches: boolean;

  matchmakingMode: interop.Enum<typeof GKMatchmakingMode>;

  initWithMatchRequest(request: GKMatchRequest): this;
}

declare class GKAccessPoint extends NSObject {
  static readonly shared: GKAccessPoint;

  isActive: boolean;

  isFocused: boolean;

  readonly isVisible: boolean;

  readonly isPresentingGameCenter: boolean;

  showHighlights: boolean;

  location: interop.Enum<typeof GKAccessPointLocation>;

  readonly frameInScreenCoordinates: CGRect;

  parentWindow: UIWindow;

  triggerAccessPointWithHandler(handler: () => void): void;

  triggerAccessPointWithStateHandler(state: interop.Enum<typeof GKGameCenterViewControllerState>, handler: () => void): void;

  triggerAccessPointWithAchievementIDHandler(achievementID: string, handler: () => void | null): void;

  triggerAccessPointWithLeaderboardSetIDHandler(leaderboardSetID: string, handler: () => void | null): void;

  triggerAccessPointWithLeaderboardIDPlayerScopeTimeScopeHandler(leaderboardID: string, playerScope: interop.Enum<typeof GKLeaderboardPlayerScope>, timeScope: interop.Enum<typeof GKLeaderboardTimeScope>, handler: () => void | null): void;

  triggerAccessPointWithPlayerHandler(player: GKPlayer, handler: () => void | null): void;
}

declare class GKLeaderboardSet extends NSObject implements NSCoding, NSSecureCoding {
  readonly title: string;

  readonly groupIdentifier: string;

  identifier: string;

  static loadLeaderboardSetsWithCompletionHandler(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;

  loadLeaderboardsWithHandler(handler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;

  loadLeaderboardsWithCompletionHandler(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  static readonly supportsSecureCoding: boolean;
}

declare class GKTurnBasedExchangeReply extends NSObject {
  readonly recipient: GKTurnBasedParticipant;

  readonly message: string;

  readonly data: NSData;

  readonly replyDate: NSDate;
}

declare class GKBasePlayer extends NSObject {
  readonly playerID: string;

  readonly displayName: string;
}

declare class GKChallenge extends NSObject implements NSCoding, NSSecureCoding {
  static loadReceivedChallengesWithCompletionHandler(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;

  decline(): void;

  readonly issuingPlayer: GKPlayer;

  readonly receivingPlayer: GKPlayer;

  readonly state: interop.Enum<typeof GKChallengeState>;

  readonly issueDate: NSDate;

  readonly completionDate: NSDate;

  readonly message: string;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  static readonly supportsSecureCoding: boolean;
}

declare class GKAchievement extends NSObject implements NSCoding, NSSecureCoding {
  static loadAchievementsWithCompletionHandler(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;

  static resetAchievementsWithCompletionHandler(completionHandler: (p1: NSError) => void | null): void;

  initWithIdentifier(identifier: string | null): this;

  initWithIdentifierPlayer(identifier: string | null, player: GKPlayer): this;

  static reportAchievementsWithCompletionHandler(achievements: NSArray<interop.Object> | Array<interop.Object>, completionHandler: (p1: NSError) => void | null): void;

  identifier: string;

  percentComplete: number;

  readonly isCompleted: boolean;

  readonly lastReportedDate: NSDate;

  showsCompletionBanner: boolean;

  readonly player: GKPlayer;

  selectChallengeablePlayersWithCompletionHandler(players: NSArray<interop.Object> | Array<interop.Object>, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;

  static reportAchievementsWithEligibleChallengesWithCompletionHandler(achievements: NSArray<interop.Object> | Array<interop.Object>, challenges: NSArray<interop.Object> | Array<interop.Object>, completionHandler: (p1: NSError) => void | null): void;

  challengeComposeControllerWithMessagePlayersCompletionHandler(message: string | null, players: NSArray<interop.Object> | Array<interop.Object>, completionHandler: (p1: UIViewController, p2: boolean, p3: NSArray<interop.Object> | Array<interop.Object>) => void | null): UIViewController;

  challengeComposeControllerWithMessagePlayersCompletion(message: string | null, players: NSArray<interop.Object> | Array<interop.Object>, completionHandler: (p1: UIViewController, p2: boolean, p3: NSArray<interop.Object> | Array<interop.Object>) => void | null): UIViewController;

  challengeComposeControllerWithPlayersMessageCompletionHandler(playerIDs: NSArray<interop.Object> | Array<interop.Object> | null, message: string | null, completionHandler: (p1: UIViewController, p2: boolean, p3: NSArray<interop.Object> | Array<interop.Object>) => void | null): UIViewController;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  static readonly supportsSecureCoding: boolean;
}

declare class GKLeaderboardScore extends NSObject {
  player: GKPlayer;

  value: number;

  context: number;

  leaderboardID: string;
}

declare class GKMatchmaker extends NSObject {
  static sharedMatchmaker(): GKMatchmaker;

  matchForInviteCompletionHandler(invite: GKInvite, completionHandler: (p1: GKMatch, p2: NSError) => void | null): void;

  findMatchForRequestWithCompletionHandler(request: GKMatchRequest, completionHandler: (p1: GKMatch, p2: NSError) => void | null): void;

  findPlayersForHostedRequestWithCompletionHandler(request: GKMatchRequest, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;

  findMatchedPlayersWithCompletionHandler(request: GKMatchRequest, completionHandler: (p1: GKMatchedPlayers, p2: NSError) => void | null): void;

  addPlayersToMatchMatchRequestCompletionHandler(match: GKMatch, matchRequest: GKMatchRequest, completionHandler: (p1: NSError) => void | null): void;

  cancel(): void;

  cancelPendingInviteToPlayer(player: GKPlayer): void;

  finishMatchmakingForMatch(match: GKMatch): void;

  queryPlayerGroupActivityWithCompletionHandler(playerGroup: number, completionHandler: (p1: number, p2: NSError) => void | null): void;

  queryActivityWithCompletionHandler(completionHandler: (p1: number, p2: NSError) => void | null): void;

  queryQueueActivityWithCompletionHandler(queueName: string, completionHandler: (p1: number, p2: NSError) => void | null): void;

  startBrowsingForNearbyPlayersWithHandler(reachableHandler: (p1: GKPlayer, p2: boolean) => void | null): void;

  stopBrowsingForNearbyPlayers(): void;
}

