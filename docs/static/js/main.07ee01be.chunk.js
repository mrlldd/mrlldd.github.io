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
            var i,
                a = n(4),
                o = n(6),
                c = n.n(o),
                r = n(28),
                s = n.n(r),
                d = (n(33), n(34), n(8)),
                l = (n(35), n(9)),
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
            var b = function (t) {
                var e = Object(o.useState)(i.Start),
                    n = Object(d.a)(e, 2),
                    c = n[0],
                    r = n[1],
                    s = Object(o.useState)(j(Math.random(), t)),
                    u = Object(d.a)(s, 2),
                    b = u[0],
                    f = u[1],
                    m = Object(o.useState)(),
                    p = Object(d.a)(m, 2),
                    g = p[0],
                    v = p[1]
                return (
                    Object(o.useEffect)(
                        function () {
                            if (g) {
                                var e,
                                    n,
                                    a,
                                    o =
                                        ((e = (g.rotation() * Math.PI) / 180),
                                        (n = b.side ? 1 : -1),
                                        (a = b.pathLength),
                                        {
                                            x: n * Math.cos(e) * a,
                                            y: n * Math.sin(e) * a,
                                        })
                                switch (c) {
                                    case i.Start:
                                        g.to({
                                            opacity: b.opacity,
                                            x: b.position.x + o.x / 2,
                                            y: b.position.y + o.y / 2,
                                            onFinish: function () {
                                                return r(i.End)
                                            },
                                            duration: b.duration / 2,
                                        })
                                        break
                                    case i.End:
                                        g.to({
                                            opacity: 0,
                                            x: b.position.x + o.x,
                                            y: b.position.y + o.y,
                                            onFinish: function () {
                                                return r(i.BeforeStart)
                                            },
                                            duration: b.duration / 2,
                                        })
                                        break
                                    case i.BeforeStart:
                                        var s = h(t)
                                        g.to({
                                            x: s.x,
                                            y: s.y,
                                            duration: 0,
                                            onFinish: function () {
                                                r(i.Start),
                                                    f(j(Math.random(), t))
                                            },
                                        })
                                }
                            }
                        },
                        [b, c, g]
                    ),
                    Object(a.jsx)(l.Text, {
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
                            var e = Object(o.useState)(t),
                                n = Object(d.a)(e, 2),
                                i = n[0],
                                a = n[1]
                            return (
                                Object(o.useEffect)(
                                    function () {
                                        function e() {
                                            a(t())
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
                                [i]
                            )
                        })(function () {
                            var t = document.documentElement.getBoundingClientRect()
                            return { height: t.height, width: t.width }
                        }),
                        e = Object(d.a)(t, 1)[0]
                    return Object(a.jsx)('div', {
                        className: 'BackgroundCanvas',
                        'data-testid': 'BackgroundCanvas',
                        children: Object(a.jsx)(l.Stage, {
                            width: e.width,
                            height: e.height,
                            className: 'stage',
                            children: Object(a.jsx)(l.Layer, {
                                children: Array(24)
                                    .fill(void 0)
                                    .map(function (t, n) {
                                        return Object(a.jsx)(
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
                m = (n(83), n.p + 'static/media/spotify.f771ec54.svg'),
                p = n.p + 'static/media/github.db829821.svg',
                g = n.p + 'static/media/telegram.7d08cc91.svg',
                v =
                    (n(84),
                    function (t) {
                        var e = Object(o.useState)(!0),
                            n = Object(d.a)(e, 2),
                            i = n[0],
                            c = n[1]
                        return Object(a.jsxs)('div', {
                            className: 'Hideable',
                            'data-testid': 'Hideable',
                            children: [
                                Object(a.jsx)('div', {
                                    className: 'hideable-children '.concat(
                                        i && 'hideable-hidden'
                                    ),
                                    children: t.children,
                                }),
                                Object(a.jsx)('div', {
                                    className: 'hideable-arrow-container',
                                    onClick: function () {
                                        return c(!i)
                                    },
                                    children: Object(a.jsx)('div', {
                                        className: 'hideable-arrow-content '.concat(
                                            !i &&
                                                'hideable-arrow-content-flipped'
                                        ),
                                        children: '|>',
                                    }),
                                }),
                            ],
                        })
                    })
            var x = [
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
                y = function () {
                    return Object(a.jsxs)('div', {
                        className: 'Summary',
                        'data-testid': 'Dashboard',
                        children: [
                            Object(a.jsxs)('div', {
                                className: 'summary-content-header',
                                children: [
                                    Object(a.jsxs)('div', {
                                        className: 'info-container',
                                        children: [
                                            Object(a.jsx)('h2', {
                                                children: 'mrlldd',
                                            }),
                                            'Forcing electrons to do math',
                                        ],
                                    }),
                                    Object(a.jsx)('div', {
                                        className: 'links-logos',
                                        children: x.map(function (t, e) {
                                            return Object(a.jsx)(
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
                            Object(a.jsxs)(v, {
                                children: [
                                    Object(a.jsx)('h2', {
                                        children: 'Ivan Yeremenko',
                                    }),
                                    Object(a.jsx)('h3', {
                                        children: 'Software Engineer',
                                    }),
                                    Object(a.jsx)('h4', {
                                        children: 'Zaporizhzhya, Ukraine',
                                    }),
                                ],
                            }),
                        ],
                    })
                }
            var O = function () {
                    return Object(a.jsxs)('div', {
                        className: 'App',
                        children: [Object(a.jsx)(f, {}), Object(a.jsx)(y, {})],
                    })
                },
                S = function (t) {
                    t &&
                        t instanceof Function &&
                        n
                            .e(3)
                            .then(n.bind(null, 86))
                            .then(function (e) {
                                var n = e.getCLS,
                                    i = e.getFID,
                                    a = e.getFCP,
                                    o = e.getLCP,
                                    c = e.getTTFB
                                n(t), i(t), a(t), o(t), c(t)
                            })
                }
            s.a.render(
                Object(a.jsx)(c.a.StrictMode, {
                    children: Object(a.jsx)(O, {}),
                }),
                document.getElementById('root')
            ),
                S()
        },
    },
    [[85, 1, 2]],
])
//# sourceMappingURL=main.07ee01be.chunk.js.map
