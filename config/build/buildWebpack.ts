import webpack from 'webpack';
import { buildLoader } from './buildLoader';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';
import { buildDevServer } from './buildDevServer';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;

  const isDev = mode === 'development';

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoader(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}