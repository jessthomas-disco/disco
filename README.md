# DISCOTIME

DISCOTIME now includes:
- the web prototype at the repo root
- an iOS Xcode project at [ios/DISCOTIME.xcodeproj](/Users/jessthomas/Documents/New%20project%203/ios/DISCOTIME.xcodeproj)

## iOS App Configuration Included

- bundle identifier: `com.jessthomas.discotime`
- version: `1.0.0`
- build number: `1`
- launch screen storyboard
- app icon placeholder set
- shared Xcode scheme for build/archive
- environment configuration via `.xcconfig`
- production Supabase values injected from a local uncommitted `Secrets.xcconfig`
- optional push notification scaffold
- privacy manifest placeholder

## iOS Project Layout

- [ios/DISCOTIME.xcodeproj/project.pbxproj](/Users/jessthomas/Documents/New%20project%203/ios/DISCOTIME.xcodeproj/project.pbxproj)
- [ios/DISCOTIME/App](/Users/jessthomas/Documents/New%20project%203/ios/DISCOTIME/App)
- [ios/DISCOTIME/Config](/Users/jessthomas/Documents/New%20project%203/ios/DISCOTIME/Config)
- [ios/DISCOTIME/Resources](/Users/jessthomas/Documents/New%20project%203/ios/DISCOTIME/Resources)
- [ios/DISCOTIME/Resources/Web](/Users/jessthomas/Documents/New%20project%203/ios/DISCOTIME/Resources/Web)

## Environment Handling

Build settings are defined in:
- [ios/DISCOTIME/Config/Base.xcconfig](/Users/jessthomas/Documents/New%20project%203/ios/DISCOTIME/Config/Base.xcconfig)
- [ios/DISCOTIME/Config/Debug.xcconfig](/Users/jessthomas/Documents/New%20project%203/ios/DISCOTIME/Config/Debug.xcconfig)
- [ios/DISCOTIME/Config/Release.xcconfig](/Users/jessthomas/Documents/New%20project%203/ios/DISCOTIME/Config/Release.xcconfig)
- [ios/DISCOTIME/Config/Secrets.example.xcconfig](/Users/jessthomas/Documents/New%20project%203/ios/DISCOTIME/Config/Secrets.example.xcconfig)

The native shell injects:
- `window.__SUPABASE_URL__`
- `window.__SUPABASE_ANON_KEY__`
- `window.__APP_ENV__`

into the bundled web app before `index.html` loads.

Create your local secrets file before building:

1. Copy `ios/DISCOTIME/Config/Secrets.example.xcconfig`
2. Save it as `ios/DISCOTIME/Config/Secrets.xcconfig`
3. Fill in:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `DEVELOPMENT_TEAM`
4. Keep `Secrets.xcconfig` out of source control

## Build And Archive In Xcode

1. Open [ios/DISCOTIME.xcodeproj](/Users/jessthomas/Documents/New%20project%203/ios/DISCOTIME.xcodeproj) in Xcode
2. Select the `DISCOTIME` project in the navigator
3. Under `DISCOTIME > Signing & Capabilities`
4. Choose your Apple Developer team
5. Confirm `Bundle Identifier` is unique in your account
6. If you want push later, add the `Push Notifications` capability and configure the App ID in Apple Developer
7. Select an iPhone device or `Any iOS Device (arm64)` as the run destination
8. Build once with `Product > Build`
9. Fix any signing prompts Xcode raises
10. Archive with `Product > Archive`
11. In Organizer, select the new archive
12. Click `Distribute App`
13. Choose `App Store Connect`
14. Choose `Upload`
15. Complete validation
16. Upload the build
17. In App Store Connect, attach the build to your app version

## Important Notes

- This workspace does not currently have full Xcode selected for `xcodebuild`, so CLI archive verification could not be run here. The project structure is in place, but final validation still needs a machine with full Xcode selected.
- Push notifications are scaffolded in [ios/DISCOTIME/Config/PushNotifications.entitlements](/Users/jessthomas/Documents/New%20project%203/ios/DISCOTIME/Config/PushNotifications.entitlements) but not enabled by default, to avoid breaking signing before the App ID capability is configured.
