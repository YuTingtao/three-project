// eslint-disable-next-line spaced-comment
/// <reference types="vite/client" />

declare module 'virtual:svg-icons-register';

export {};
declare module 'vue' {
  interface ComponentCustomProperties {
    $hasPermission: (permission: string) => boolean;
  }
}
