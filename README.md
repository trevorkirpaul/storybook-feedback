# Storybook Feedback

An addon for storybook which adds support for adding comments and other feedback to stories

## Development

This addon is still very early in development. Currently, the foundational UI work is done and it's connected to firebase and sends/receives comments based on the `storyId`.

There still needs to be a ton of fine tuning but the rest of the work will mainly be with getting the addon to function correctly as an NPM package and allowing the end user to be able to connect their own Firebase instance.

## Todo

- [ ] remove redundant/unused deps
- [ ] truncate messages that exceed view width
- [ ] add more chat features (delete/update)

## How to use this addon

Within your `.storybook/config.ts` file, add this:

```typescript
import { configureDatabase } from 'storybook-feedback'

configureDatabase({
  databaseType: 'firebase',
  firebaseConfig: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
  },
})
```

You can find the values necessary by visiting your Firebase console.

## Screenshot

![storybook-feedback ui](https://i.imgur.com/MkaRBT8.png)
