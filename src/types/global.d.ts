import 'vue';

declare module 'vue' {
  interface ComponentCustomProperties {
    $hasPermission: (permission: string) => boolean;
  }
}
