# C-Store App - Mobile Application

## Overview

This is the native mobile client for the C-Store App, built to provide a seamless grocery shopping experience on iOS and Android devices. The application helps users manage shopping lists, browse products.

## Technologies

- React Native
- TypeScript
- Expo
- Tanstack Query (React Query)
- State Management (Zustand)
- AsyncStorage

## Features

- **User Authentication**: Secure login, registration and account activation
- **Product Browsing**: Search products by name

## Project Structure

```
apps/native/
    ├── .eas/workflows/
    ├── app/
    │   ├── (auth)/
    │   │   └── (signup)/
    │   └── (post-auth)/
    │       ├── (tabs)/
    │       └── (product)/
    ├── assets/
    │   ├── fonst/
    │   ├── icons/
    │   └── image/
    └── src/
        ├── components/
        ├── layouts/
        ├── mocks/
        ├── navigation/
        └── screens/
```
