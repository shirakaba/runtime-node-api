/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare const kCLHeadingFilterNone: number;

declare const kCLLocationAccuracyThreeKilometers: number;

declare const kCLLocationAccuracyBest: number;

declare const kCLLocationAccuracyReduced: number;

declare const kCLLocationCoordinate2DInvalid: CLLocationCoordinate2D;

declare const CLTimeIntervalMax: number;

declare const CLLocationDistanceMax: number;

declare const kCLLocationAccuracyHundredMeters: number;

declare const kCLLocationAccuracyKilometer: number;

declare const kCLLocationAccuracyBestForNavigation: number;

declare const kCLDistanceFilterNone: number;

declare const kCLLocationAccuracyNearestTenMeters: number;

declare const kCLErrorDomain: string;

declare const CLServiceSessionAuthorizationRequirement: {
  None: 0,
  WhenInUse: 1,
};

declare const CLAccuracyAuthorization: {
  Full: 0,
  Reduced: 1,
};

declare const CLAuthorizationStatus: {
  NotDetermined: 0,
  Restricted: 1,
  Denied: 2,
  AuthorizedAlways: 3,
  AuthorizedWhenInUse: 4,
};

declare const CLDeviceOrientation: {
  Unknown: 0,
  Portrait: 1,
  PortraitUpsideDown: 2,
  LandscapeLeft: 3,
  LandscapeRight: 4,
  FaceUp: 5,
  FaceDown: 6,
};

declare const CLMonitoringState: {
  Unknown: 0,
  Satisfied: 1,
  Unsatisfied: 2,
};

declare const CLLiveUpdateConfiguration: {
  Default: 0,
  AutomotiveNavigation: 1,
  OtherNavigation: 2,
  Fitness: 3,
  Airborne: 4,
};

declare const CLError: {
  LocationUnknown: 0,
  Denied: 1,
  Network: 2,
  HeadingFailure: 3,
  RegionMonitoringDenied: 4,
  RegionMonitoringFailure: 5,
  RegionMonitoringSetupDelayed: 6,
  RegionMonitoringResponseDelayed: 7,
  GeocodeFoundNoResult: 8,
  GeocodeFoundPartialResult: 9,
  GeocodeCanceled: 10,
  DeferredFailed: 11,
  DeferredNotUpdatingLocation: 12,
  DeferredAccuracyTooLow: 13,
  DeferredDistanceFiltered: 14,
  DeferredCanceled: 15,
  RangingUnavailable: 16,
  RangingFailure: 17,
  PromptDeclined: 18,
  HistoricalLocationError: 19,
};

declare const CLActivityType: {
  Other: 1,
  AutomotiveNavigation: 2,
  Fitness: 3,
  OtherNavigation: 4,
  Airborne: 5,
};

declare class CLLocationCoordinate2D {
  constructor(init?: CLLocationCoordinate2D);
  latitude: number;
  longitude: number;
}

declare function CLLocationCoordinate2DIsValid(coord: CLLocationCoordinate2D): boolean;

declare function CLLocationCoordinate2DMake(latitude: number, longitude: number): CLLocationCoordinate2D;

declare interface CLLocationManagerDelegate extends NSObjectProtocol {
  locationManagerDidUpdateLocations?(manager: CLLocationManager, locations: NSArray<interop.Object> | Array<interop.Object>): void;

  locationManagerDidFailWithError?(manager: CLLocationManager, error: NSError): void;

  locationManagerDidChangeAuthorizationStatus?(manager: CLLocationManager, status: interop.Enum<typeof CLAuthorizationStatus>): void;

  locationManagerDidChangeAuthorization?(manager: CLLocationManager): void;
}

declare class CLLocationManagerDelegate extends NativeObject implements CLLocationManagerDelegate {
}

declare class CLServiceSession extends NSObject {
  static sessionRequiringAuthorization(authorizationRequirement: interop.Enum<typeof CLServiceSessionAuthorizationRequirement>): CLServiceSession;

  static sessionRequiringAuthorizationQueueHandler(authorizationRequirement: interop.Enum<typeof CLServiceSessionAuthorizationRequirement>, queue: NSObject, handler: (p1: CLServiceSessionDiagnostic) => void): CLServiceSession;

  static sessionRequiringAuthorizationFullAccuracyPurposeKey(authorizationRequirement: interop.Enum<typeof CLServiceSessionAuthorizationRequirement>, purposeKey: string): CLServiceSession;

  static sessionRequiringAuthorizationFullAccuracyPurposeKeyQueueHandler(authorizationRequirement: interop.Enum<typeof CLServiceSessionAuthorizationRequirement>, purposeKey: string, queue: NSObject, handler: (p1: CLServiceSessionDiagnostic) => void): CLServiceSession;

  invalidate(): void;
}

declare class CLServiceSessionDiagnostic extends NSObject {
  readonly authorizationDenied: boolean;

  readonly authorizationDeniedGlobally: boolean;

  readonly authorizationRestricted: boolean;

  readonly insufficientlyInUse: boolean;

  readonly serviceSessionRequired: boolean;

  readonly fullAccuracyDenied: boolean;

  readonly alwaysAuthorizationDenied: boolean;

  readonly authorizationRequestInProgress: boolean;
}

declare class CLBackgroundActivitySession extends NSObject {
  invalidate(): void;

  static backgroundActivitySession<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static backgroundActivitySessionWithQueueHandler<This extends abstract new (...args: any) => any>(this: This, queue: NSObject, handler: (p1: CLBackgroundActivitySessionDiagnostic) => void): InstanceType<This>;
}

declare class CLBackgroundActivitySessionDiagnostic extends NSObject {
  readonly authorizationDenied: boolean;

  readonly authorizationDeniedGlobally: boolean;

  readonly authorizationRestricted: boolean;

  readonly insufficientlyInUse: boolean;
}

declare class CLLocationManager extends NSObject {
  static locationServicesEnabled(): boolean;

  readonly authorizationStatus: interop.Enum<typeof CLAuthorizationStatus>;

  static authorizationStatus(): interop.Enum<typeof CLAuthorizationStatus>;

  readonly accuracyAuthorization: interop.Enum<typeof CLAccuracyAuthorization>;

  delegate: CLLocationManagerDelegate;

  distanceFilter: number;

  desiredAccuracy: number;

  readonly location: CLLocation;

  requestWhenInUseAuthorization(): void;

  requestTemporaryFullAccuracyAuthorizationWithPurposeKeyCompletion(purposeKey: string, completion: (p1: NSError) => void | null): void;

  requestTemporaryFullAccuracyAuthorizationWithPurposeKey(purposeKey: string): void;

  stopUpdatingLocation(): void;

  requestLocation(): void;
}

declare class CLLocationUpdater extends NSObject {
  static liveUpdaterWithQueueHandler<This extends abstract new (...args: any) => any>(this: This, queue: NSObject, handler: (p1: CLUpdate) => void | null): InstanceType<This>;

  static liveUpdaterWithConfigurationQueueHandler<This extends abstract new (...args: any) => any>(this: This, configuration: interop.Enum<typeof CLLiveUpdateConfiguration>, queue: NSObject, handler: (p1: CLUpdate) => void | null): InstanceType<This>;

  resume(): void;

  pause(): void;

  invalidate(): void;
}

declare class CLUpdate extends NSObject {
  readonly authorizationDenied: boolean;

  readonly authorizationDeniedGlobally: boolean;

  readonly authorizationRestricted: boolean;

  readonly isStationary: boolean;

  readonly stationary: boolean;

  readonly insufficientlyInUse: boolean;

  readonly locationUnavailable: boolean;

  readonly accuracyLimited: boolean;

  readonly location: CLLocation | null;
}

declare class CLCircularRegion extends CLRegion {
  initWithCenterRadiusIdentifier(center: CLLocationCoordinate2D, radius: number, identifier: string): this;

  readonly center: CLLocationCoordinate2D;

  readonly radius: number;

  containsCoordinate(coordinate: CLLocationCoordinate2D): boolean;
}

declare class CLRegion extends NSObject implements NSCopying, NSSecureCoding {
  readonly identifier: string;

  notifyOnEntry: boolean;

  notifyOnExit: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class CLPlacemark extends NSObject implements NSCopying, NSSecureCoding {
  initWithPlacemark(placemark: CLPlacemark): this;

  readonly location: CLLocation;

  readonly region: CLRegion;

  readonly timeZone: NSTimeZone;

  readonly addressDictionary: NSDictionary;

  readonly name: string;

  readonly thoroughfare: string;

  readonly subThoroughfare: string;

  readonly locality: string;

  readonly subLocality: string;

  readonly administrativeArea: string;

  readonly subAdministrativeArea: string;

  readonly postalCode: string;

  readonly ISOcountryCode: string;

  readonly country: string;

  readonly inlandWater: string;

  readonly ocean: string;

  readonly areasOfInterest: NSArray;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class CLFloor extends NSObject implements NSCopying, NSSecureCoding {
  readonly level: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class CLGeocoder extends NSObject {
  readonly isGeocoding: boolean;

  reverseGeocodeLocationCompletionHandler(location: CLLocation, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void): void;

  reverseGeocodeLocationPreferredLocaleCompletionHandler(location: CLLocation, locale: NSLocale | null, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void): void;

  geocodeAddressDictionaryCompletionHandler(addressDictionary: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void): void;

  geocodeAddressStringInRegionCompletionHandler(addressString: string, region: CLRegion | null, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void): void;

  geocodeAddressStringInRegionPreferredLocaleCompletionHandler(addressString: string, region: CLRegion | null, locale: NSLocale | null, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void): void;

  geocodeAddressStringCompletionHandler(addressString: string, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void): void;

  cancelGeocode(): void;
}

declare class CLLocationSourceInformation extends NSObject implements NSCopying, NSSecureCoding {
  initWithSoftwareSimulationStateAndExternalAccessoryState(isSoftware: boolean, isAccessory: boolean): this;

  readonly isSimulatedBySoftware: boolean;

  readonly isProducedByAccessory: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class CLLocation extends NSObject implements NSCopying, NSSecureCoding {
  initWithLatitudeLongitude(latitude: number, longitude: number): this;

  initWithCoordinateAltitudeHorizontalAccuracyVerticalAccuracyTimestamp(coordinate: CLLocationCoordinate2D, altitude: number, hAccuracy: number, vAccuracy: number, timestamp: NSDate): this;

  initWithCoordinateAltitudeHorizontalAccuracyVerticalAccuracyCourseSpeedTimestamp(coordinate: CLLocationCoordinate2D, altitude: number, hAccuracy: number, vAccuracy: number, course: number, speed: number, timestamp: NSDate): this;

  initWithCoordinateAltitudeHorizontalAccuracyVerticalAccuracyCourseCourseAccuracySpeedSpeedAccuracyTimestamp(coordinate: CLLocationCoordinate2D, altitude: number, hAccuracy: number, vAccuracy: number, course: number, courseAccuracy: number, speed: number, speedAccuracy: number, timestamp: NSDate): this;

  initWithCoordinateAltitudeHorizontalAccuracyVerticalAccuracyCourseCourseAccuracySpeedSpeedAccuracyTimestampSourceInfo(coordinate: CLLocationCoordinate2D, altitude: number, hAccuracy: number, vAccuracy: number, course: number, courseAccuracy: number, speed: number, speedAccuracy: number, timestamp: NSDate, sourceInfo: CLLocationSourceInformation): this;

  readonly coordinate: CLLocationCoordinate2D;

  readonly altitude: number;

  readonly ellipsoidalAltitude: number;

  readonly horizontalAccuracy: number;

  readonly verticalAccuracy: number;

  readonly course: number;

  readonly courseAccuracy: number;

  readonly speed: number;

  readonly speedAccuracy: number;

  readonly timestamp: NSDate;

  readonly floor: CLFloor;

  readonly sourceInformation: CLLocationSourceInformation;

  distanceFromLocation(location: CLLocation): number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

