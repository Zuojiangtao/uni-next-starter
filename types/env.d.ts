/// <reference types="vite/client" />
interface ImportMetaEnv {
  /** 环境变量 */
  readonly VITE_GLOB_APP_TITLE: string;
  /** 环境变量 */
  readonly VITE_UNI_APPID: string;
  /** 环境变量 */
  readonly VITE_WX_APPID: string;
  /** 环境变量 */
  readonly VITE_APP_NODE_ENV: string;
  /** 环境变量 */
  readonly VITE_PORT: string;
  /** 环境变量 */
  readonly VITE_PROXY: string;
  /** 环境变量 */
  readonly VITE_GLOB_API_URL: string;
  /** 环境变量 */
  readonly VITE_GLOB_API_URL_PREFIX: string;
}
