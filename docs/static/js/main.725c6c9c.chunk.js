;(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
    [0],
    {
        33: function (t, e, n) {},
        34: function (t, e, n) {},
        35: function (t, e, n) {},
        82: function (t, e, n) {},
        83: function (t, e, n) {},
        84: function (t, e, n) {
            'use strict'
            n.r(e)
            var i,
                a = n(0),
                c = n(7),
                s = n.n(c),
                o = n(28),
                r = n.n(o),
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
            })(i || (i = {}))
            var m = function (t) {
                    var e = Object(c.useState)(i.Start),
                        n = Object(l.a)(e, 2),
                        s = n[0],
                        o = n[1],
                        r = Object(c.useState)(j(Math.random(), t)),
                        u = Object(l.a)(r, 2),
                        m = u[0],
                        f = u[1],
                        b = Object(c.useState)(),
                        g = Object(l.a)(b, 2),
                        p = g[0],
                        x = g[1]
                    return (
                        Object(c.useEffect)(
                            function () {
                                if (p) {
                                    var e,
                                        n,
                                        a,
                                        c =
                                            ((e =
                                                (p.rotation() * Math.PI) / 180),
                                            (n = m.side ? 1 : -1),
                                            (a = m.pathLength),
                                            {
                                                x: n * Math.cos(e) * a,
                                                y: n * Math.sin(e) * a,
                                            })
                                    switch (s) {
                                        case i.Start:
                                            p.to({
                                                opacity: m.opacity,
                                                x: m.position.x + c.x / 2,
                                                y: m.position.y + c.y / 2,
                                                onFinish: function () {
                                                    return o(i.End)
                                                },
                                                duration: m.duration / 2,
                                            })
                                            break
                                        case i.End:
                                            p.to({
                                                opacity: 0,
                                                x: m.position.x + c.x,
                                                y: m.position.y + c.y,
                                                onFinish: function () {
                                                    return o(i.BeforeStart)
                                                },
                                                duration: m.duration / 2,
                                            })
                                            break
                                        case i.BeforeStart:
                                            var r = h(t)
                                            p.to({
                                                x: r.x,
                                                y: r.y,
                                                duration: 0,
                                                onFinish: function () {
                                                    o(i.Start),
                                                        f(j(Math.random(), t))
                                                },
                                            })
                                    }
                                }
                            },
                            [m, m.position, s, p]
                        ),
                        Object(a.jsx)(d.Text, {
                            ref: function (t) {
                                return t && x(t)
                            },
                            text: m.value,
                            y: m.position.y,
                            x: m.position.x,
                            opacity: 0,
                            onClick: function (t) {
                                return t.target.to({ opacity: 0, duration: 0 })
                            },
                            fontSize: m.fontSize,
                            fontFamily: 'JetBrains Mono',
                            rotation: (180 * m.rotation) / Math.PI,
                            fill: 'rgb(255, 255, 255, 0.5)',
                        })
                    )
                },
                f = function () {
                    var t = Object(c.useState)(function () {
                            var t = document.documentElement.getBoundingClientRect()
                            return { width: t.width, height: t.height }
                        }),
                        e = Object(l.a)(t, 2),
                        n = e[0],
                        i = e[1]
                    return (
                        Object(c.useEffect)(function () {
                            function t() {
                                var t = document.documentElement.getBoundingClientRect(),
                                    e = { width: t.width, height: t.height }
                                i(e)
                            }
                            function e(e) {
                                e('resize', t), e('orientationchange', t)
                            }
                            return (
                                e(window.addEventListener),
                                function () {
                                    return e(window.removeEventListener)
                                }
                            )
                        }, []),
                        Object(a.jsx)('div', {
                            className: 'BackgroundCanvas',
                            'data-testid': 'BackgroundCanvas',
                            children: Object(a.jsx)(d.Stage, {
                                width: n.width,
                                height: n.height,
                                className: 'stage',
                                children: Object(a.jsx)(d.Layer, {
                                    children: Array(24)
                                        .fill(void 0)
                                        .map(function (t, e) {
                                            return Object(a.jsx)(
                                                m,
                                                {
                                                    width: n.width,
                                                    height: n.height,
                                                },
                                                ''.concat(e, ':dynamic-text')
                                            )
                                        }),
                                }),
                            }),
                        })
                    )
                },
                b = (n(83), n.p + 'static/media/spotify-outer.12cf6fc0.svg'),
                g = n.p + 'static/media/github-outer.a6d59bf4.svg',
                p = n.p + 'static/media/telegram-outer.a216a42a.svg',
                x = ['react', 'angular'],
                v = ['dotnet', 'aspnetcore', 'efcore', 'mssql'],
                k = ['azure', 'heroku'],
                O = ['ts', 'js', 'csharp']
            function y(t) {
                return function () {
                    return window.open(t, '_blank')
                }
            }
            var N = function () {
                return Object(a.jsx)('div', {
                    className: 'Summary',
                    'data-testid': 'Summary',
                    children: Object(a.jsx)('div', {
                        className: 'summary-paper',
                        children: Object(a.jsxs)('div', {
                            className: 'summary-content',
                            children: [
                                Object(a.jsxs)('div', {
                                    className: 'info-container',
                                    children: [
                                        Object(a.jsx)('h1', {
                                            children: 'Ivan Yeremenko',
                                        }),
                                        Object(a.jsx)('div', {
                                            className: 'skills-sets-container',
                                            children: [x, v, k, O].map(
                                                function (t, e) {
                                                    return Object(a.jsx)(
                                                        'div',
                                                        {
                                                            className: 'skill-set-container '.concat(
                                                                e % 2 === 0
                                                                    ? 'even'
                                                                    : 'odd'
                                                            ),
                                                            children: t.map(
                                                                function (
                                                                    t,
                                                                    n
                                                                ) {
                                                                    return Object(
                                                                        a.jsx
                                                                    )(
                                                                        'span',
                                                                        {
                                                                            className:
                                                                                'skill-container',
                                                                            children: t,
                                                                        },
                                                                        ''
                                                                            .concat(
                                                                                e,
                                                                                ':'
                                                                            )
                                                                            .concat(
                                                                                n,
                                                                                ':skill'
                                                                            )
                                                                    )
                                                                }
                                                            ),
                                                        },
                                                        ''.concat(
                                                            e,
                                                            ':skill-set'
                                                        )
                                                    )
                                                }
                                            ),
                                        }),
                                    ],
                                }),
                                Object(a.jsxs)('div', {
                                    className: 'links-container',
                                    children: [
                                        Object(a.jsxs)('div', {
                                            className:
                                                'links-content-container links-logos',
                                            children: [
                                                Object(a.jsx)('div', {
                                                    className: 'link-side-fill',
                                                }),
                                                Object(a.jsx)('div', {
                                                    className:
                                                        'link-container link-logo-container',
                                                    onClick: y(
                                                        'https://github.com/mrlldd'
                                                    ),
                                                    children: Object(
                                                        a.jsx
                                                    )('img', {
                                                        src: g,
                                                        alt: 'github-logo',
                                                        className: 'link-logo',
                                                    }),
                                                }),
                                                Object(a.jsx)('div', {
                                                    className: 'link-side-fill',
                                                }),
                                                Object(a.jsx)('div', {
                                                    className:
                                                        'link-container link-logo-container',
                                                    onClick: y(
                                                        'https://t.me/mrlldd'
                                                    ),
                                                    children: Object(
                                                        a.jsx
                                                    )('img', {
                                                        src: p,
                                                        alt: 'telegram-logo',
                                                        className: 'link-logo',
                                                    }),
                                                }),
                                                Object(a.jsx)('div', {
                                                    className: 'link-side-fill',
                                                }),
                                                Object(a.jsx)('div', {
                                                    className:
                                                        'link-container link-logo-container',
                                                    onClick: y(
                                                        'https://open.spotify.com/user/1ytvagjswjl00avixcs29sh4v?si=C9eGNEyQTNGxSkr4j1o6WA'
                                                    ),
                                                    children: Object(
                                                        a.jsx
                                                    )('img', {
                                                        src: b,
                                                        alt: 'spotify-logo',
                                                        className: 'link-logo',
                                                    }),
                                                }),
                                                Object(a.jsx)('div', {
                                                    className: 'link-side-fill',
                                                }),
                                            ],
                                        }),
                                        Object(a.jsxs)('div', {
                                            className:
                                                'links-content-container',
                                            children: [
                                                Object(a.jsx)('div', {
                                                    className: 'link-side-fill',
                                                }),
                                                Object(a.jsx)('div', {
                                                    className:
                                                        'link-container link-content-name-container',
                                                    children: Object(a.jsx)(
                                                        'a',
                                                        {
                                                            href:
                                                                'https://github.com/mrlldd',
                                                            rel: 'noreferrer',
                                                            target: '_blank',
                                                            children: 'GitHub',
                                                        }
                                                    ),
                                                }),
                                                Object(a.jsx)('div', {
                                                    className: 'link-side-fill',
                                                }),
                                                Object(a.jsx)('div', {
                                                    className:
                                                        'link-container link-content-name-container',
                                                    children: Object(a.jsx)(
                                                        'a',
                                                        {
                                                            href:
                                                                'https://t.me/mrlldd',
                                                            rel: 'noreferrer',
                                                            target: '_blank',
                                                            children:
                                                                'Telegram',
                                                        }
                                                    ),
                                                }),
                                                Object(a.jsx)('div', {
                                                    className: 'link-side-fill',
                                                }),
                                                Object(a.jsx)('div', {
                                                    className:
                                                        'link-container link-content-name-container',
                                                    children: Object(a.jsx)(
                                                        'a',
                                                        {
                                                            href:
                                                                'https://t.me/mrlldd',
                                                            rel: 'noreferrer',
                                                            target: '_blank',
                                                            children: 'Spotify',
                                                        }
                                                    ),
                                                }),
                                                Object(a.jsx)('div', {
                                                    className: 'link-side-fill',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                })
            }
            var S = function () {
                    return Object(a.jsxs)('div', {
                        className: 'App',
                        children: [Object(a.jsx)(f, {}), Object(a.jsx)(N, {})],
                    })
                },
                w = function (t) {
                    t &&
                        t instanceof Function &&
                        n
                            .e(3)
                            .then(n.bind(null, 85))
                            .then(function (e) {
                                var n = e.getCLS,
                                    i = e.getFID,
                                    a = e.getFCP,
                                    c = e.getLCP,
                                    s = e.getTTFB
                                n(t), i(t), a(t), c(t), s(t)
                            })
                }
            r.a.render(
                Object(a.jsx)(s.a.StrictMode, {
                    children: Object(a.jsx)(S, {}),
                }),
                document.getElementById('root')
            ),
                w()
        },
    },
    [[84, 1, 2]],
])
//# sourceMappingURL=main.725c6c9c.chunk.js.map
