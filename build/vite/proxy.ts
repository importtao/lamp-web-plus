import type { ServerOptions } from 'http-proxy';

type ProxyItem = [string, string];

type ProxyList = ProxyItem[];

type ProxyTargetList = Record<string, ServerOptions & { rewrite: (path: string) => string }>;

const httpsRE = /^https:\/\//;

/**
 * Generate proxy
 * @param list
 */
export function createProxy(list: ProxyList = []) {
  const ret: ProxyTargetList = {};
  debugger;
  for (const [prefix, target] of list) {
    const isHttps = httpsRE.test(target);

    // https://github.com/http-party/node-http-proxy#options
    ret[prefix] = {
      target: target,
      changeOrigin: true,
      ws: true,
      rewrite: (path) => {
        console.log('path===');
        console.log(path);
        return path.replace(new RegExp(`^${prefix}`), `${prefix}`);
      },
      // https is require secure=false
      ...(isHttps ? { secure: false } : {}),
    };
  }
  debugger;
  return ret;
}
