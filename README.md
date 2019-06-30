# Storybook Feedback

An addon for storybook which adds support for adding comments and other feedback to stories

> The "Development" and "Todo" sections will be removed once this addon leaves alpha. Until then, please keep in mind that this addon is in alpha and very rough. Do not use unless testing.

## Development

This addon is still very early in development. Currently, the foundational UI work is done and it's connected to firebase and sends/receives comments based on the `storyId`.

There still needs to be a ton of fine tuning but the rest of the work will mainly be with getting the addon to function correctly as an NPM package and allowing the end user to be able to connect their own Firebase instance.

## Todo

- [x] remove redundant/unused deps
- [x] truncate messages that exceed view width
- [x] add more chat features (delete/update)
- [ ] resolve issue with mobile view
- [ ] add more options to Settings feature

## How to use this addon

Install with: `yarn add storybook-feedback`

Add this line to `.storybook/addons.ts`:

```typescript
import 'storybook-feedback'
```

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

> You can find the values necessary by visiting your Firebase console.

## Screenshots

### Viewing Comments

![storybook-feedback ui viewing comments](https://i.imgur.com/ATOjTXi.png)

### Editing a Comment

![storybook-feedback ui editing a comment](https://i.imgur.com/UbvtdtO.png)
