/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare const UNAuthorizationOptionNone: interop.Enum<typeof UNAuthorizationOptions>;

declare const UNErrorDomain: string;

declare const UNNotificationPresentationOptionNone: interop.Enum<typeof UNNotificationPresentationOptions>;

declare const UNAuthorizationOptions: {
  Badge: 1,
  Sound: 2,
  Alert: 4,
  CarPlay: 8,
  CriticalAlert: 16,
  ProvidesAppNotificationSettings: 32,
  Provisional: 64,
  TimeSensitive: 256,
};

declare const UNNotificationSetting: {
  NotSupported: 0,
  Disabled: 1,
  Enabled: 2,
};

declare const UNNotificationInterruptionLevel: {
  Passive: 0,
  Active: 1,
  TimeSensitive: 2,
  Critical: 3,
};

declare const UNAuthorizationStatus: {
  NotDetermined: 0,
  Denied: 1,
  Authorized: 2,
  Provisional: 3,
};

declare const UNErrorCode: {
  NotificationsNotAllowed: 1,
  AttachmentInvalidURL: 100,
  AttachmentUnrecognizedType: 101,
  AttachmentInvalidFileSize: 102,
  AttachmentNotInDataStore: 103,
  AttachmentMoveIntoDataStoreFailed: 104,
  AttachmentCorrupt: 105,
  NotificationInvalidNoDate: 1400,
  NotificationInvalidNoContent: 1401,
  ContentProvidingObjectNotAllowed: 1500,
  ContentProvidingInvalid: 1501,
  BadgeInputInvalid: 1600,
};

declare const UNNotificationPresentationOptions: {
  Badge: 1,
  Sound: 2,
  Alert: 4,
  List: 8,
  Banner: 16,
};

declare interface UNUserNotificationCenterDelegate extends NSObjectProtocol {
  userNotificationCenterWillPresentNotificationWithCompletionHandler?(center: UNUserNotificationCenter, notification: UNNotification, completionHandler: (p1: interop.Enum<typeof UNNotificationPresentationOptions>) => void): void;
}

declare class UNUserNotificationCenterDelegate extends NativeObject implements UNUserNotificationCenterDelegate {
}

declare interface UNNotificationContentProviding extends NSObjectProtocol {
}

declare class UNNotificationContentProviding extends NativeObject implements UNNotificationContentProviding {
}

declare class UNUserNotificationCenter extends NSObject {
  delegate: UNUserNotificationCenterDelegate;

  readonly supportsContentExtensions: boolean;

  static currentNotificationCenter(): UNUserNotificationCenter;

  requestAuthorizationWithOptionsCompletionHandler(options: interop.Enum<typeof UNAuthorizationOptions>, completionHandler: (p1: boolean, p2: NSError) => void | null): void;

  getNotificationSettingsWithCompletionHandler(completionHandler: (p1: UNNotificationSettings) => void): void;

  addNotificationRequestWithCompletionHandler(request: UNNotificationRequest, completionHandler: (p1: NSError) => void | null): void;

  getPendingNotificationRequestsWithCompletionHandler(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  removePendingNotificationRequestsWithIdentifiers(identifiers: NSArray<interop.Object> | Array<interop.Object>): void;

  removeAllPendingNotificationRequests(): void;

  setBadgeCountWithCompletionHandler(newBadgeCount: number, completionHandler: (p1: NSError) => void | null): void;
}

declare class UNCalendarNotificationTrigger extends UNNotificationTrigger {
  readonly dateComponents: NSDateComponents;

  static triggerWithDateMatchingComponentsRepeats<This extends abstract new (...args: any) => any>(this: This, dateComponents: NSDateComponents, repeats: boolean): InstanceType<This>;

  nextTriggerDate(): NSDate;
}

declare class UNTimeIntervalNotificationTrigger extends UNNotificationTrigger {
  readonly timeInterval: number;

  static triggerWithTimeIntervalRepeats<This extends abstract new (...args: any) => any>(this: This, timeInterval: number, repeats: boolean): InstanceType<This>;

  nextTriggerDate(): NSDate;
}

declare class UNNotificationTrigger extends NSObject implements NSCopying, NSSecureCoding {
  readonly repeats: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class UNNotificationRequest extends NSObject implements NSCopying, NSSecureCoding {
  readonly identifier: string;

  readonly content: UNNotificationContent;

  readonly trigger: UNNotificationTrigger;

  static requestWithIdentifierContentTrigger<This extends abstract new (...args: any) => any>(this: This, identifier: string, content: UNNotificationContent, trigger: UNNotificationTrigger | null): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class UNNotificationActionIcon extends NSObject implements NSCopying, NSSecureCoding {
  static iconWithTemplateImageName<This extends abstract new (...args: any) => any>(this: This, templateImageName: string): InstanceType<This>;

  static iconWithSystemImageName<This extends abstract new (...args: any) => any>(this: This, systemImageName: string): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class UNNotification extends NSObject implements NSCopying, NSSecureCoding {
  readonly date: NSDate;

  readonly request: UNNotificationRequest;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class UNPushNotificationTrigger extends UNNotificationTrigger {
}

// @ts-ignore ClassDecl.tsIgnore
declare class UNMutableNotificationContent extends UNNotificationContent {
  // @ts-ignore MemberDecl.tsIgnore
  badge: NSNumber;

  // @ts-ignore MemberDecl.tsIgnore
  summaryArgument: string;

  // @ts-ignore MemberDecl.tsIgnore
  summaryArgumentCount: number;

  // @ts-ignore MemberDecl.tsIgnore
  targetContentIdentifier: string;

  // @ts-ignore MemberDecl.tsIgnore
  interruptionLevel: interop.Enum<typeof UNNotificationInterruptionLevel>;

  // @ts-ignore MemberDecl.tsIgnore
  relevanceScore: number;

  filterCriteria: string;
}

declare class UNNotificationContent extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {
  readonly badge: NSNumber;

  readonly summaryArgument: string;

  readonly summaryArgumentCount: number;

  readonly targetContentIdentifier: string;

  readonly interruptionLevel: interop.Enum<typeof UNNotificationInterruptionLevel>;

  readonly relevanceScore: number;

  contentByUpdatingWithProviderError(provider: UNNotificationContentProviding, outError: interop.PointerConvertible): UNNotificationContent;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  mutableCopyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class UNNotificationSettings extends NSObject implements NSCopying, NSSecureCoding {
  readonly authorizationStatus: interop.Enum<typeof UNAuthorizationStatus>;

  readonly badgeSetting: interop.Enum<typeof UNNotificationSetting>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

