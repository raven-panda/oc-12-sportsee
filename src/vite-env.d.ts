/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_URI: string;
  readonly VITE_FIXTURE_USER_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
