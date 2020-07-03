# Storybook Feedback

## Changelog

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

> Date Format: YYYY-MM-DD

## [0.0.9] - 2020-07-03

### Security

- upgraded Node packages

## [0.0.8] - 2019-07-28

### Security

- upgraded packages to fix security issues

## [0.0.7] - 2019-06-30

### Added

- Icons package
- comment delete feature
- "update comment" feature and associated components
- Link component
- settings menu

### Changes

- significant styling updates to how comments are rendered, now handles overflow correctly, renders an icon area

## [0.0.2] - 2019-06-24

### Added

- added Loader component
- updated sign in / get session process to hopefully render a loading state when fetching the user
- added more files to `npmignore`
- updated Feedback to subscribe to comments and update state when comments length from firebase does not equal comments in local state
- updated sign in logic to prevent infinite renders
- replaced "refresh" button with "clear" button

## [0.0.1] - 2019-06-24

> pre-release/alpha build

### Added

- Project config (Babel, Rollup, npm package files, README, CHANGELOG, ect)
- addon foundation
- Button
- Input
- ListItem
- Containers
- connected Firebase, send/receive comments
- added method for client app to configure firebase connection

## [0.0.0] - 2019-06-20

- Launch/initial work
