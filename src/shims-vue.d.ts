declare module "leaflet";
declare module "@kangc/v-md-editor/lib/preview";
declare module "@kangc/v-md-editor/lib/theme/github";
declare module "apollo-upload-client";

declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}