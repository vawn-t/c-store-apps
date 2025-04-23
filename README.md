# React Native - Expo, Turborepo Practice

## OVERVIEW

This document outlines the estimation plan for implementing a Turborepo-based project to build a mobile and web application. The practice focuses on understanding and applying monorepo architecture using Turborepo while leveraging Expo for mobile development. It aims to enhance workflow efficiency, optimize build processes, and ensure seamless project scalability through structured configurations and best practices.

## TIMELINE

- Estimated duration: ~12 days (2025/02/21 - 2025/03/10)
- Actual duration: 14 days

## OBJECTIVES

- Ensure compatibility with modern build tools.
- Gain a deep understanding of monorepo best practices.
- Explore and apply new Expo features.
- Deliver a production-ready mobile and web application.

## TECHNICAL STACKS

### Frameworks and Tools:

- [React.js](https://react.dev/)(v18.3.1): React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.
- [Turborepo](https://turbo.build/repo/docs)(v2.4.2): Turborepo is a high-performance build system for JavaScript and TypeScript codebases. It is designed for scaling monorepos and also makes workflows in single-package workspaces faster, too.
- [React Native](https://reactnative.dev/)(v0.76.7): React Native brings the best parts of developing with React to native development. It's a best-in-class JavaScript library for building user interfaces.
- [Expo](https://expo.dev/)(v52.0.37): Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.
- [Next.js](http://Next.js)(v14.0.4): Built on a foundation of fast, production-grade tooling. Powered By. React The library for web and native user interfaces.
- [Turbopack](https://turbo.build/pack/docs): Turbopack is an incremental bundler optimized for JavaScript and TypeScript, written in Rust by the creators of webpack and Next.js at Vercel.
- [Typescript](https://www.typescriptlang.org/)(v5.5.4): TypeScript extends JavaScript by adding types to the language.

### UI & State Management

- [Zustand](https://github.com/pmndrs/zustand): A small, fast and scalable bearbones state-management solution using simplified flux principles.

### Development Tools

- [ESLint](https://eslint.org/)(v8.56.0): The pluggable linting utility for JavaScript and JSX.
- [Android Studio](https://developer.android.com/studio): Android Studio provides app builders with an integrated development environment (IDE) optimized for Android apps.

## APPROACH

### Analysis and Planning:

- Analyze requirements and align on deliverables.
- Define and document the estimation plan.

### Implementation:

- Develop mobile and web applications using the technical stack.
- Leverage new Expo features and Turbopack for performance optimization.

### Testing and Optimization:

- Monitor performance using EAS Insights and LogRocket.

### Deployment:

- Deploy applications using Vercel, GitHub Actions, and Expo tools.

## DESIGN

[[Figma](https://www.figma.com/design/Hq2LNnduVW2jXFXdJNEQd7/C-Store?node-id=2366-1073&t=BnW5xB8TBDSrwDzl-1)]

## PREREQUISITES

Before you begin, ensure you have the following installed:

- Node.js >= 18
- pnpm v9.15.5 or higher (npm install -g pnpm@9.15.5)
- Expo CLI (npm install -g expo-cli)
- Android Studio (for Android development)
- Xcode (for iOS development, Mac only)

## INSTALLATION

1. Clone the repository:

```shell
git clone git@github.com:vawn-t/c-store-apps.git
cd grocery-app
```

2. Install dependencies:

```shell
pnpm install
```

### Development

Running the Applications
Run all applications (web and native):

```shell
pnpm dev
```

Run only the web application:

```shell
pnpm dev:web
```

Run only the native application:

```shell
pnpm dev:mobile
```

For the native app, Expo will start and provide you with QR codes to run the app on your physical device using the Expo Go app, or options to run on simulators.

Building the Applications
Build all applications:

```shell
pnpm build
```

Build only the native app locally:

```shell
pnpm build:local
```

### Testing

Run all tests:

```shell
pnpm test
```

Run tests in watch mode (for development):

```shell
pnpm test:watch
```

### Other Useful Commands

Format code:

```shell
pnpm format
```

Lint code:

```shell
pnpm lint
```

Check TypeScript types:

```shell
pnpm check-types
```

Clean build artifacts and node_modules:

```shell
pnpm clean
```

## TESTING ACCOUNTS

Use these credentials to test different user roles in the application:

| Role     | Username          | Password    |
| -------- | ----------------- | ----------- |
| Admin    | admin@example.com | password123 |
| Customer | user@example.com  | password123 |

## WHAT'S INSIDE?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `native`: a [react-native](https://reactnative.dev/) app built with [expo](https://docs.expo.dev/)
- `web`: a [Next.js](https://nextjs.org/) app built with [react-native-web](https://necolas.github.io/react-native-web/)
- `@repo/ui`: a stub [react-native](https://reactnative.dev/) component library shared by both `web` and `native` applications
- `@repo/constants`: Shared constants including API endpoints, theme values, error messages, and route definitions used across all applications
- `@repo/hooks`: Custom React hooks for data fetching, authentication, form handling, and other reusable logic shared between web and mobile apps
- `@repo/models`: TypeScript interfaces and type definitions for data models, ensuring consistent data structures across the entire monorepo
- `@repo/stores`: Global state management using Zustand stores for user authentication, cart management, and application preferences
- `@repo/utils`: Helper functions for common tasks like date formatting, validation, secure storage, and platform-specific utilities
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/eslint-config`: `eslint.config.mjs`s used throughout the monorepo

## DEPLOYMENT

The applications can be deployed using:

- Web: Vercel (see [Next.js deployment documentation](https://nextjs.org/docs/pages/getting-started/deploying))
- Native: Expo Application Services ([EAS](https://expo.dev/eas))

## Author

[vawn](mailto:vantran99dn@gmail.com)
