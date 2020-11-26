;(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
    [0],
    {
        33: function (t, e, n) {},
        34: function (t, e, n) {},
        35: function (t, e, n) {},
        82: function (t, e, n) {},
        83: function (t, e, n) {},
        84: function (t, e, n) {},
        85: function (t, e, n) {
            'use strict'
            n.r(e)
            var a,
                i = n(4),
                c = n(6),
                o = n.n(c),
                s = n(28),
                r = n.n(s),
                l = (n(33), n(34), n(8)),
                d = (n(35), n(9)),
                u =
                    (n(82),
                    [
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
                    ])
            function h(t) {
                return {
                    x: t.width * Math.random(),
                    y: t.height * Math.random(),
                }
            }
            function j(t, e) {
                var n = t + 0.35
                return {
                    duration: 1.5 * t + 2.5,
                    fontSize: 14 + 22 * t,
                    opacity: n > 1 ? 0.7 : n,
                    position: h(e),
                    rotation: ((180 * t - 90) * Math.PI) / 180,
                    side: t % 0.02 > 0.01,
                    pathLength: 100 * t + 100,
                    value: u[Math.ceil(Math.random() * u.length) - 1],
                }
            }
            !(function (t) {
                ;(t[(t.Start = 0)] = 'Start'),
                    (t[(t.End = 1)] = 'End'),
                    (t[(t.BeforeStart = 2)] = 'BeforeStart')
            })(a || (a = {}))
            var b = function (t) {
                var e = Object(c.useState)(a.Start),
                    n = Object(l.a)(e, 2),
                    o = n[0],
                    s = n[1],
                    r = Object(c.useState)(j(Math.random(), t)),
                    u = Object(l.a)(r, 2),
                    b = u[0],
                    f = u[1],
                    m = Object(c.useState)(),
                    p = Object(l.a)(m, 2),
                    g = p[0],
                    v = p[1]
                return (
                    Object(c.useEffect)(
                        function () {
                            if (g) {
                                var e,
                                    n,
                                    i,
                                    c =
                                        ((e = (g.rotation() * Math.PI) / 180),
                                        (n = b.side ? 1 : -1),
                                        (i = b.pathLength),
                                        {
                                            x: n * Math.cos(e) * i,
                                            y: n * Math.sin(e) * i,
                                        })
                                switch (o) {
                                    case a.Start:
                                        g.to({
                                            opacity: b.opacity,
                                            x: b.position.x + c.x / 2,
                                            y: b.position.y + c.y / 2,
                                            onFinish: function () {
                                                return s(a.End)
                                            },
                                            duration: b.duration / 2,
                                        })
                                        break
                                    case a.End:
                                        g.to({
                                            opacity: 0,
                                            x: b.position.x + c.x,
                                            y: b.position.y + c.y,
                                            onFinish: function () {
                                                return s(a.BeforeStart)
                                            },
                                            duration: b.duration / 2,
                                        })
                                        break
                                    case a.BeforeStart:
                                        var r = h(t)
                                        g.to({
                                            x: r.x,
                                            y: r.y,
                                            duration: 0,
                                            onFinish: function () {
                                                s(a.Start),
                                                    f(j(Math.random(), t))
                                            },
                                        })
                                }
                            }
                        },
                        [b, o, g]
                    ),
                    Object(i.jsx)(d.Text, {
                        ref: function (t) {
                            return t && v(t)
                        },
                        text: b.value,
                        y: b.position.y,
                        x: b.position.x,
                        opacity: 0,
                        fontSize: b.fontSize,
                        fontFamily: 'JetBrains Mono',
                        rotation: (180 * b.rotation) / Math.PI,
                        fill: 'rgba(140,140,140,0.6)',
                    })
                )
            }
            var f = function () {
                    var t = (function (t) {
                            var e = Object(c.useState)(t),
                                n = Object(l.a)(e, 2),
                                a = n[0],
                                i = n[1]
                            return (
                                Object(c.useEffect)(
                                    function () {
                                        function e() {
                                            i(t())
                                        }
                                        function n(t) {
                                            t('resize', e),
                                                t('orientationchange', e)
                                        }
                                        return (
                                            n(window.addEventListener),
                                            function () {
                                                return n(
                                                    window.removeEventListener
                                                )
                                            }
                                        )
                                    },
                                    [t]
                                ),
                                [a]
                            )
                        })(function () {
                            var t = document.documentElement.getBoundingClientRect()
                            return { height: t.height, width: t.width }
                        }),
                        e = Object(l.a)(t, 1)[0]
                    return Object(i.jsx)('div', {
                        className: 'BackgroundCanvas',
                        'data-testid': 'BackgroundCanvas',
                        children: Object(i.jsx)(d.Stage, {
                            width: e.width,
                            height: e.height,
                            className: 'stage',
                            children: Object(i.jsx)(d.Layer, {
                                children: Array(24)
                                    .fill(void 0)
                                    .map(function (t, n) {
                                        return Object(i.jsx)(
                                            b,
                                            {
                                                width: e.width,
                                                height: e.height,
                                            },
                                            ''.concat(n, ':dynamic-text')
                                        )
                                    }),
                            }),
                        }),
                    })
                },
                m = (n(83), n.p + 'static/media/spotify.b326db1a.svg'),
                p = n.p + 'static/media/github.487ee85d.svg',
                g = n.p + 'static/media/telegram.a7c021c8.svg',
                v =
                    (n(84),
                    function (t) {
                        var e = Object(c.useState)(!0),
                            n = Object(l.a)(e, 2),
                            a = n[0],
                            o = n[1]
                        return Object(i.jsxs)('div', {
                            className: 'Hideable',
                            'data-testid': 'Hideable',
                            children: [
                                Object(i.jsx)('div', {
                                    className: 'hideable-children '.concat(
                                        a && 'hideable-hidden'
                                    ),
                                    children: t.children,
                                }),
                                Object(i.jsx)('div', {
                                    className: 'hideable-arrow-container',
                                    onClick: function () {
                                        return o(!a)
                                    },
                                    children: Object(i.jsx)('div', {
                                        className: 'hideable-arrow-content '.concat(
                                            !a &&
                                                'hideable-arrow-content-flipped'
                                        ),
                                        children: '|>',
                                    }),
                                }),
                            ],
                        })
                    }),
                x = ['react', 'angular'],
                y = ['dotnet', 'aspnetcore', 'efcore', 'mssql'],
                O = ['azure', 'heroku'],
                S = ['ts', 'js', 'csharp']
            var k = [
                    {
                        alt: 'github-logo',
                        content: p,
                        link: 'https://github.com/mrlldd',
                    },
                    {
                        alt: 'telegram-logo',
                        content: g,
                        link: 'https://t.me/mrlldd',
                    },
                    {
                        alt: 'spotify-logo',
                        content: m,
                        link:
                            'https://open.spotify.com/user/1ytvagjswjl00avixcs29sh4v?si=C9eGNEyQTNGxSkr4j1o6WA',
                    },
                ],
                w = function () {
                    return Object(i.jsxs)('div', {
                        className: 'Summary',
                        'data-testid': 'Summary',
                        children: [
                            Object(i.jsxs)('div', {
                                className: 'summary-content-header',
                                children: [
                                    Object(i.jsxs)('div', {
                                        className: 'info-container',
                                        children: [
                                            Object(i.jsx)('h2', {
                                                children: 'mrlldd',
                                            }),
                                            'Forcing electrons to do math',
                                        ],
                                    }),
                                    Object(i.jsx)('div', {
                                        className: 'links-logos',
                                        children: k.map(function (t, e) {
                                            return Object(i.jsx)(
                                                'img',
                                                {
                                                    alt: t.alt,
                                                    src: t.content,
                                                    onClick:
                                                        ((n = t.link),
                                                        function () {
                                                            return window.open(
                                                                n,
                                                                '_blank'
                                                            )
                                                        }),
                                                    className: 'link-logo',
                                                },
                                                ''.concat(e, ':logo')
                                            )
                                            var n
                                        }),
                                    }),
                                ],
                            }),
                            Object(i.jsx)(v, {
                                children: Object(i.jsx)('div', {
                                    className: 'skills-sets-container',
                                    children: [x, y, O, S].map(function (t, e) {
                                        return Object(i.jsx)(
                                            'div',
                                            {
                                                className: 'skill-set-container '.concat(
                                                    e % 2 === 0 ? 'even' : 'odd'
                                                ),
                                                children: t.map(function (
                                                    t,
                                                    n
                                                ) {
                                                    return Object(i.jsx)(
                                                        'span',
                                                        {
                                                            className:
                                                                'skill-container',
                                                            children: t,
                                                        },
                                                        ''
                                                            .concat(e, ':')
                                                            .concat(n, ':skill')
                                                    )
                                                }),
                                            },
                                            ''.concat(e, ':skill-set')
                                        )
                                    }),
                                }),
                            }),
                        ],
                    })
                }
            var N = function () {
                    return Object(i.jsxs)('div', {
                        className: 'App',
                        children: [Object(i.jsx)(f, {}), Object(i.jsx)(w, {})],
                    })
                },
                T = function (t) {
                    t &&
                        t instanceof Function &&
                        n
                            .e(3)
                            .then(n.bind(null, 86))
                            .then(function (e) {
                                var n = e.getCLS,
                                    a = e.getFID,
                                    i = e.getFCP,
                                    c = e.getLCP,
                                    o = e.getTTFB
                                n(t), a(t), i(t), c(t), o(t)
                            })
                }
            r.a.render(
                Object(i.jsx)(o.a.StrictMode, {
                    children: Object(i.jsx)(N, {}),
                }),
                document.getElementById('root')
            ),
                T()
        },
    },
    [[85, 1, 2]],
])
//# sourceMappingURL=main.15d45607.chunk.js.map
