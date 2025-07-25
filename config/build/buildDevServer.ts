import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/types';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port ?? 'auto',
        open: true,
        historyApiFallback: true,
        hot: true,
    }
}