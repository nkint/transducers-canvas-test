/* to avoid `[ts] Cannot find name 'module'.` typescript error */

declare var module: {
  hot: {
    accept: (input: any) => any
    dispose: (input: any) => any
    data: any
  }
}
