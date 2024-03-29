const textValues: ReadonlyArray<string> = [
    'void',
    'public',
    'private',
    'protected',
    'int',
    'observable$',
    'class',
    'struct',
    '.Equals()',
    'Task<TResult>',
    'Task',
    'typeof(Startup).Assembly',
    'store',
    'dispatch',
    'useState',
    'useEffect',
    '[] != []',
    'async',
    'await',
    'object',
    'function',
    'Promise',
    'Promise<T>',
    'Action<T>',
    'Func<TArgs, TResult>',
    'AllowAnonymous',
    'Nullable<T>',
    'commit',
    'hook',
    'IAsyncActionFilter',
    'swagger',
    'http',
    'https',
    'HttpClient',
    'readonly',
    '.tsx',
    '.jsx',
    '.ts',
    '.js',
    '.fs',
    '.cs',
    '.css',
    '.json',
    '.html',
    'Main(string[] args)',
    'IEnumerable<T>',
    'new',
    'this',
    'prototype',
    'pull',
    'push',
    'deploy',
    'Azure',
    'Stream',
    'application/json',
    'Subject<T>',
    'BehaviorSubject<T>',
    'AsyncSubject<T>',
    '.pipe()',
    'NgRx',
    'React',
    'Ng',
    'dotnet',
    'ef core',
    'dotnet ef migrations add',
    'dotnet ef database update',
    '??=',
    '??',
    "console.log('here am I')",
    'npm',
    'NuGet',
    '--save-dev',
    '--global',
    'SOAP',
    'REST',
    '\0',
    '<>',
    '</>',
    'Async.AwaitTask',
    'let',
    'rec',
    'namespace',
    'open',
    'module',
    'inline',
    'let inline logJson obj = obj |> json |> printfn "%s"',
    "'a option",
    "Result<'a, 'b>",
    'csharp',
    'fsharp',
    'javascript',
    'IHostedService',
    'useMemo',
    'useCallback',
    'typescript',
    'SELECT 1',
    'npx',
    'using',
    'static',
    'Amazon',
    'S3',
    'record',
    'requirements',
    'design',
    '.HasKey(x => x.EntityId)',
    'unique index',
    'require',
    'lazy',
    'useRef'
];

export function getRandomTextValue(): string {
    return textValues[Math.ceil(Math.random() * textValues.length) - 1];
}
