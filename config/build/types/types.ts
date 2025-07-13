export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
  public: string;
}

export type BuildMode = 'development' | 'production';
export type BuildPlatform = 'mobile' | 'desktop';

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  port: number;
  analyzer?: boolean;
  platform: BuildPlatform;
}