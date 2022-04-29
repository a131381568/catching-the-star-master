declare module "leaflet";
declare module "@kangc/v-md-editor/lib/lang/zh-TW";
declare module "@kangc/v-md-editor";
declare module "@kangc/v-md-editor/lib/preview";
declare module "@kangc/v-md-editor/lib/theme/github";
declare module "apollo-upload-client";
declare module "vee-validate";
declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}
