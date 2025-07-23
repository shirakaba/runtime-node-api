import { $ } from "./deps.ts";

$.setPrintCommand(true);

// CWD is scripts/
Deno.chdir(new URL("./", import.meta.url));

// Process arguments and environment variables

const VALID_PLATFORMS = [
  "macos",
  "ios",
  "ios-sim",
  "tvos",
  "tvos-sim",
  "ios-universal",
] as const;
type ValidPlatform = (typeof VALID_PLATFORMS)[number];
type PlatformDir = "ios" | "macos" | "tvos";

const targetPlatform = Deno.args[0] ?? "macos";

if (!isValidPlatform(targetPlatform)) {
  throw new Error(
    `Invalid platform: ${targetPlatform}. Valid platforms are: ${VALID_PLATFORMS.join(
      ", "
    )}`
  );
}

const buildConfig = Deno.args.includes("debug") ? "Debug" : "Release";

function isValidPlatform(platform: string): platform is ValidPlatform {
  return VALID_PLATFORMS.includes(platform as ValidPlatform);
}

async function ensureTargetDir({
  platformDir,
  targetPlatform,
}: {
  platformDir: PlatformDir;
  targetPlatform: ValidPlatform;
}) {
  // Clean any previous target specific build
  // await Deno.remove(`../packages/${platformDir}/build/${targetPlatform}`, { recursive: true }).catch(
  //   () => {},
  // );
  // Create a new target specific build directory
  await Deno.mkdir(`../packages/${platformDir}/build/${targetPlatform}`).catch(
    () => {}
  );
}

const archs: Record<ValidPlatform, string[]> = {
  ios: ["arm64"],
  "ios-sim": ["arm64", "x86_64"],
  tvos: ["arm64"],
  "tvos-sim": ["arm64", "x86_64"],
  "ios-universal": ["arm64", "x86_64"],
  macos: ["x86_64", "arm64"],
};

async function build({
  platformDir,
  targetPlatform,
}: {
  platformDir: PlatformDir;
  targetPlatform: ValidPlatform;
}) {
  await ensureTargetDir({ platformDir, targetPlatform });

  const maxMDSize = Math.max(
    ...archs[targetPlatform].map((arch) => {
      return Deno.lstatSync(
        new URL(
          `../metadata/metadata.${platformDir}.${arch}.nsmd`,
          import.meta.url
        )
      ).size;
    })
  );

  // Generate the build files
  await $`cmake -S=../ -B=../packages/${platformDir}/build/${targetPlatform} -GXcode -DTARGET_PLATFORM=${targetPlatform} -DCMAKE_EXPORT_COMPILE_COMMANDS=ON ${
    targetPlatform.startsWith("ios-test") ? "" : `-DMETADATA_SIZE=${maxMDSize}`
  }`;

  // Build the project
  await $`cmake --build ../packages/${platformDir}/build/${targetPlatform} --config ${buildConfig}`;

  if (platformDir === "macos") {
    await Deno.mkdir(`../packages/${platformDir}/dist/${targetPlatform}`, {
      recursive: true,
    }).catch(() => {});

    await Deno.copyFile(
      `../packages/${platformDir}/build/${targetPlatform}/${buildConfig}/libNativeScript.dylib`,
      `../packages/${platformDir}/dist/${targetPlatform}/NativeScript.node`
    );
  }
}

const TARGET_RELEASE_FOLDERS: Record<
  Exclude<ValidPlatform, "macos" | "ios-universal">,
  string
> = {
  ios: `${buildConfig}-iphoneos`,
  "ios-sim": `${buildConfig}-iphonesimulator`,
  tvos: `${buildConfig}-appletvos`,
  "tvos-sim": `${buildConfig}-appletvsimulator`,
} as const;

if (import.meta.main) {
  if (targetPlatform === "ios-universal") {
    const targets: Array<{
      platformDir: PlatformDir;
      targetPlatforms: Array<Exclude<ValidPlatform, "macos" | "ios-universal">>;
    }> = [
      { platformDir: "ios", targetPlatforms: ["ios", "ios-sim"] },
      { platformDir: "tvos", targetPlatforms: ["tvos", "tvos-sim"] },
    ];

    for (const { platformDir, targetPlatforms } of targets) {
      // Ensure we have a build directory
      await Deno.mkdir(`../packages/${platformDir}/build`).catch(() => {});

      for (const targetPlatform of targetPlatforms) {
        await ensureTargetDir({ platformDir, targetPlatform });
        await build({ platformDir, targetPlatform });

        await Deno.mkdir(`../packages/${platformDir}/dist`, {
          recursive: true,
        }).catch(() => {});

        await Deno.remove(
          `../packages/${platformDir}/dist/${targetPlatform}/NativeScript.xcframework`,
          { recursive: true }
        ).catch(() => {});

        await $`xcodebuild -create-xcframework ${targetPlatforms
          .map((targetPlatform) => [
            `-framework`,
            `../packages/${platformDir}/build/${targetPlatform}/${TARGET_RELEASE_FOLDERS[targetPlatform]}/NativeScript.framework`,
          ])
          .flat()} -output ../packages/${platformDir}/dist/${targetPlatform}/NativeScript.xcframework`;
      }
    }
  } else {
    await build({ platformDir: "macos", targetPlatform });
  }
}
