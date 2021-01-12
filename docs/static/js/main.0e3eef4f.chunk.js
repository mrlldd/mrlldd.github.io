(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
  [0],
  {
    102: function (e, t, n) {},
    103: function (e, t, n) {},
    104: function (e, t, n) {
      'use strict';
      n.r(t);
      var c,
        r = n(0),
        i = n(1),
        a = n.n(i),
        o = n(41),
        s = n.n(o),
        l = (n(47), n(48), n(10)),
        d = (n(49), n(16)),
        j =
          (n(95),
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
          ]);
      function h(e) {
        return { x: e.width * Math.random(), y: e.height * Math.random() };
      }
      function b(e, t) {
        var n = e + 0.35;
        return {
          duration: 1.5 * e + 2.5,
          fontSize: 14 + 22 * e,
          opacity: n > 1 ? 0.7 : n,
          position: h(t),
          rotation: ((180 * e - 90) * Math.PI) / 180,
          side: e % 0.02 > 0.01,
          pathLength: 100 * e + 100,
          value: j[Math.ceil(Math.random() * j.length) - 1],
        };
      }
      !(function (e) {
        (e[(e.Start = 0)] = 'Start'),
          (e[(e.End = 1)] = 'End'),
          (e[(e.BeforeStart = 2)] = 'BeforeStart');
      })(c || (c = {}));
      var u = function (e) {
        var t = Object(i.useState)(c.Start),
          n = Object(l.a)(t, 2),
          a = n[0],
          o = n[1],
          s = Object(i.useState)(b(Math.random(), e)),
          j = Object(l.a)(s, 2),
          u = j[0],
          x = j[1],
          m = Object(i.useState)(),
          p = Object(l.a)(m, 2),
          O = p[0],
          g = p[1];
        return (
          Object(i.useEffect)(
            function () {
              if (O) {
                var t,
                  n,
                  r,
                  i =
                    ((t = (O.rotation() * Math.PI) / 180),
                    (n = u.side ? 1 : -1),
                    (r = u.pathLength),
                    { x: n * Math.cos(t) * r, y: n * Math.sin(t) * r });
                switch (a) {
                  case c.Start:
                    O.to({
                      opacity: u.opacity,
                      x: u.position.x + i.x / 2,
                      y: u.position.y + i.y / 2,
                      onFinish: function () {
                        return o(c.End);
                      },
                      duration: u.duration / 2,
                    });
                    break;
                  case c.End:
                    O.to({
                      opacity: 0,
                      x: u.position.x + i.x,
                      y: u.position.y + i.y,
                      onFinish: function () {
                        return o(c.BeforeStart);
                      },
                      duration: u.duration / 2,
                    });
                    break;
                  case c.BeforeStart:
                    var s = h(e);
                    O.to({
                      x: s.x,
                      y: s.y,
                      duration: 0,
                      onFinish: function () {
                        o(c.Start), x(b(Math.random(), e));
                      },
                    });
                }
              }
            },
            [u, a, O]
          ),
          Object(r.jsx)(d.Text, {
            ref: function (e) {
              return e && g(e);
            },
            text: u.value,
            y: u.position.y,
            x: u.position.x,
            opacity: 0,
            fontSize: u.fontSize,
            fontFamily: 'JetBrains Mono',
            rotation: (180 * u.rotation) / Math.PI,
            fill: 'rgba(140,140,140,0.6)',
          })
        );
      };
      var x = (function () {
          var e,
            t = 'ontouchstart' in document.documentElement;
          return (
            (e = t ? 'mobile' : 'desktop'),
            console.log('detected '.concat(e, ' device!')),
            t
          );
        })()
          ? 12
          : 24,
        m = function (e) {
          var t = (function (e) {
              var t = Object(i.useState)(e),
                n = Object(l.a)(t, 2),
                c = n[0],
                r = n[1];
              return (
                Object(i.useEffect)(
                  function () {
                    function t() {
                      r(e());
                    }
                    function n(e) {
                      e('resize', t), e('orientationchange', t);
                    }
                    return (
                      n(window.addEventListener),
                      function () {
                        return n(window.removeEventListener);
                      }
                    );
                  },
                  [e]
                ),
                [c]
              );
            })(function () {
              var e = document.documentElement.getBoundingClientRect();
              return { height: e.height, width: e.width };
            }),
            n = Object(l.a)(t, 1)[0];
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsx)('div', {
                className: 'BackgroundCanvas',
                'data-testid': 'BackgroundCanvas',
                children: Object(r.jsx)(d.Stage, {
                  width: n.width,
                  height: n.height,
                  className: 'stage',
                  children: Object(r.jsx)(d.Layer, {
                    children: Array(x)
                      .fill(void 0)
                      .map(function (e, t) {
                        return Object(r.jsx)(
                          u,
                          { width: n.width, height: n.height },
                          ''.concat(t, ':dynamic-text')
                        );
                      }),
                  }),
                }),
              }),
              e.children,
            ],
          });
        },
        p = (n(96), n.p + 'static/media/spotify.f771ec54.svg'),
        O = n.p + 'static/media/github.db829821.svg',
        g = n.p + 'static/media/telegram.7d08cc91.svg',
        f =
          (n(97),
          function (e) {
            var t = Object(i.useState)(!0),
              n = Object(l.a)(t, 2),
              c = n[0],
              a = n[1];
            return Object(r.jsxs)('div', {
              className: 'Hideable',
              'data-testid': 'Hideable',
              children: [
                Object(r.jsx)('div', {
                  className: 'hideable-children '.concat(
                    c && 'hideable-hidden'
                  ),
                  style: { maxHeight: c ? 0 : e.maxHeight },
                  children: e.children,
                }),
                Object(r.jsx)('div', {
                  className:
                    'hideable-arrow-container switching-opacity switch-opacity-a-lot',
                  onClick: function () {
                    return a(!c);
                  },
                  children: Object(r.jsx)('div', {
                    className: 'hideable-arrow-content '.concat(
                      c ? '' : 'hideable-arrow-content-flipped'
                    ),
                    children: '|>',
                  }),
                }),
              ],
            });
          }),
        v = n(20);
      var k,
        y = [
          { alt: 'github-logo', content: O, link: 'https://github.com/mrlldd' },
          { alt: 'telegram-logo', content: g, link: 'https://t.me/mrlldd' },
          {
            alt: 'spotify-logo',
            content: p,
            link:
              'https://open.spotify.com/user/1ytvagjswjl00avixcs29sh4v?si=C9eGNEyQTNGxSkr4j1o6WA',
          },
        ],
        w = function () {
          return Object(r.jsxs)('div', {
            className: 'Dashboard',
            'data-testid': 'Dashboard',
            children: [
              Object(r.jsxs)('div', {
                className: 'dashboard-content-header',
                children: [
                  Object(r.jsxs)('div', {
                    className: 'info-container',
                    children: [
                      Object(r.jsx)('h2', { children: 'mrlldd' }),
                      'Forcing electrons to do math',
                    ],
                  }),
                  Object(r.jsx)('div', {
                    className: 'links-logos',
                    children: y.map(function (e, t) {
                      return Object(r.jsx)(
                        'img',
                        {
                          alt: e.alt,
                          src: e.content,
                          onClick:
                            ((n = e.link),
                            function () {
                              return window.open(n, '_blank');
                            }),
                          className: 'link-logo',
                        },
                        ''.concat(t, ':logo')
                      );
                      var n;
                    }),
                  }),
                ],
              }),
              Object(r.jsxs)(f, {
                maxHeight: 130,
                children: [
                  Object(r.jsx)('h2', { children: 'Ivan Yeremenko' }),
                  Object(r.jsx)('h3', { children: 'Software Engineer' }),
                  Object(r.jsx)('h4', { children: 'Zaporizhzhya, Ukraine' }),
                  Object(r.jsx)(v.a, {
                    to: '/cv',
                    className: 'centered italic',
                    children: 'CV',
                  }),
                ],
              }),
            ],
          });
        },
        S = n(7),
        T =
          (n(102),
          n(103),
          function (e) {
            return Object(r.jsx)('span', {
              className:
                'switching-opacity switch-opacity-a-few-with-color with-normal-weight',
              children: e.children,
            });
          });
      !(function (e) {
        (e.Functional = 'Functional'),
          (e.MediaSeekerTelegramBot = 'Media Seeker Telegram Bot'),
          (e.SoundCloudTrackDownloaderTelegramBot =
            'SoundCloud Track Downloader Telegram Bot'),
          (e.HookrRentService = 'Hookr Rent Service');
      })(k || (k = {}));
      var N = Object(r.jsxs)(r.Fragment, {
          children: [
            'The ',
            Object(r.jsx)(T, { children: 'dotnet' }),
            ' library that provides a set of functional types and extensions. Done with ',
            Object(r.jsx)(T, { children: 'csharp' }),
            '. Currently hosted on',
            ' ',
            Object(r.jsx)('a', {
              href: 'https://www.nuget.org/packages/mrlldd.Functional',
              target: '_blank',
              rel: 'noreferrer',
              children: Object(r.jsx)(T, { children: 'NuGet' }),
            }),
            '.',
          ],
        }),
        F = Object(r.jsxs)(r.Fragment, {
          children: [
            'The inline ',
            Object(r.jsx)(T, { children: 'telegram bot' }),
            ' that seeks for media (in such services as ',
            Object(r.jsx)(T, { children: 'YouTube' }),
            ' and ',
            Object(r.jsx)(T, { children: 'SoundCloud' }),
            ') and provides the results in inline mode. Done with ',
            Object(r.jsx)(T, { children: 'dotnet' }),
            ', ',
            Object(r.jsx)(T, { children: 'fsharp' }),
            ' and ',
            Object(r.jsx)(T, { children: 'Suave' }),
            '.',
          ],
        }),
        C = Object(r.jsxs)(r.Fragment, {
          children: [
            'The ',
            Object(r.jsx)(T, { children: 'telegram bot' }),
            ' that seeks for media in',
            ' ',
            Object(r.jsx)(T, { children: 'SoundCloud' }),
            ' and able to download and provide needed result as file. Currently hosted on',
            ' ',
            Object(r.jsx)('a', {
              href: 'https://heroku.com',
              target: '_blank',
              rel: 'noreferrer',
              children: Object(r.jsx)(T, { children: 'Heroku' }),
            }),
            '.',
          ],
        }),
        M = Object(r.jsxs)(r.Fragment, {
          children: [
            'The hookah rent service system, consists of:',
            Object(r.jsx)('br', {}),
            Object(r.jsxs)('span', {
              style: { marginLeft: 32 },
              children: [
                '- Telegram bot(',
                Object(r.jsx)(T, { children: 'csharp' }),
                ', ',
                Object(r.jsx)(T, { children: 'aspnetcore' }),
                ',',
                ' ',
                Object(r.jsx)(T, { children: 'efcore' }),
                ', ',
                Object(r.jsx)(T, { children: 'mssql' }),
                ')',
              ],
            }),
            Object(r.jsx)('br', {}),
            Object(r.jsxs)('span', {
              style: { marginLeft: 32 },
              children: [
                '- PWA(',
                Object(r.jsx)(T, { children: 'csharp' }),
                ',',
                ' ',
              ],
            }),
            Object(r.jsx)(T, { children: 'aspnetcore' }),
            ', ',
            Object(r.jsx)(T, { children: 'typescript' }),
            ',',
            ' ',
            Object(r.jsx)(T, { children: 'react' }),
            ')',
            Object(r.jsx)('br', {}),
          ],
        }),
        E = new Map([
          [
            k.Functional,
            {
              link: 'https://github.com/mrlldd/dotnet-functional',
              renderedDescription: N,
            },
          ],
          [
            k.MediaSeekerTelegramBot,
            {
              link: 'https://github.com/mrlldd/dotnet-media-seek-telegram-bot',
              renderedDescription: F,
            },
          ],
          [
            k.SoundCloudTrackDownloaderTelegramBot,
            {
              link: 'https://github.com/mrlldd/dotnet-soundcloud-telegram-bot',
              renderedDescription: C,
            },
          ],
          [
            k.HookrRentService,
            {
              link: 'https://github.com/mrlldd/hookr-rent-service',
              renderedDescription: M,
            },
          ],
        ]),
        D = {
          gitHub: 'https://github.com/mrlldd',
          telegram: 'https://t.me/mrlldd',
        },
        A = [
          {
            title: '2018 - 2021',
            content:
              'Zaporizhzhya Institute of Economics and Information Technologies',
            context: 'Bachelor Degree in Software Engineering',
          },
        ],
        B = [
          {
            title: 'October 2019 - March 2020',
            content: 'KM-Ware',
            context: 'Trainee',
          },
          {
            title: 'March 2020 - July 2020',
            content: 'KM-Ware',
            context: 'Junior Fullstack Web Developer',
          },
          {
            title: 'July 2020 - December 2020',
            content: 'Tentonteam',
            context: 'Junior Fullstack Web Developer',
          },
          {
            title: 'January 2021 - Now',
            content: 'Tentonteam',
            context: 'Middle Fullstack Web Developer',
          },
        ];
      function I(e, t) {
        return function (n, c) {
          return Object(r.jsxs)(
            'span',
            {
              children: [
                Object(r.jsx)('small', {
                  className: 'italic',
                  children: n.title,
                }),
                Object(r.jsx)('br', {}),
                Object(r.jsxs)('span', {
                  className: 'row-content italic lighter',
                  children: [n.content, ' - ', e(n.context)],
                }),
                Object(r.jsx)('br', {}),
              ],
            },
            ''.concat(c, ':').concat(t, '-row')
          );
        };
      }
      function H(e, t) {
        var n = e.length - 1,
          c = [e.slice(0, n), e[n]],
          i = c[0],
          a = c[1],
          o = t.toLowerCase();
        return Object(r.jsxs)(r.Fragment, {
          children: [
            t,
            ':',
            Object(r.jsx)('br', {}),
            Object(r.jsxs)('div', {
              className: 'content',
              children: [
                i.map(
                  I(function (e) {
                    return Object(r.jsx)('span', { children: e });
                  }, o)
                ),
                I(function (e) {
                  return Object(r.jsx)(T, { children: e });
                }, o)(a, n + 1),
              ],
            }),
          ],
        });
      }
      var L = function () {
        var e = Object(S.g)();
        return Object(r.jsxs)(r.Fragment, {
          children: [
            Object(r.jsx)('div', {
              onClick: function () {
                return e.push('/');
              },
              className: 'back-button',
              children: Object(r.jsx)('span', { children: '<|' }),
            }),
            Object(r.jsxs)('div', {
              className: 'CV',
              'data-testid': 'CV',
              children: [
                'Ivan Yeremenko',
                Object(r.jsx)('br', {}),
                'Fullstack Web Developer',
                Object(r.jsx)('br', {}),
                Object(r.jsx)('br', {}),
                Object.entries(D).map(function (e, t) {
                  var n = Object(l.a)(e, 2),
                    c = n[0],
                    i = n[1];
                  return Object(r.jsxs)(
                    'span',
                    {
                      children: [
                        c.substring(0, 1).toUpperCase() + c.substring(1),
                        ':',
                        ' ',
                        Object(r.jsx)('a', {
                          className: 'contact-link lighter',
                          href: i,
                          target: '_blank',
                          rel: 'noreferrer',
                          children: i,
                        }),
                        Object(r.jsx)('br', {}),
                      ],
                    },
                    ''.concat(t, ':contacts')
                  );
                }),
                Object(r.jsx)('br', {}),
                Object(r.jsxs)('span', {
                  className: 'lighter',
                  children: [
                    'Experienced in ',
                    Object(r.jsx)(T, { children: 'dotnet' }),
                    ', ',
                    Object(r.jsx)(T, { children: 'react' }),
                    ' and',
                    ' ',
                    Object(r.jsx)(T, { children: 'angular' }),
                    '.',
                    Object(r.jsx)('br', {}),
                    'Also have an experience in developing and managing',
                    ' ',
                    Object(r.jsx)(T, { children: 'NuGet' }),
                    ' packages.',
                  ],
                }),
                Object(r.jsx)('br', {}),
                H(A, 'Education'),
                H(B, 'Experience'),
                'Projects:',
                Object(r.jsx)('div', {
                  className: 'content',
                  children: Array.from(E.entries()).map(function (e, t) {
                    var n = Object(l.a)(e, 2),
                      c = n[0],
                      i = n[1];
                    return Object(r.jsxs)(
                      'span',
                      {
                        children: [
                          Object(r.jsx)('a', {
                            className: 'italic',
                            href: i.link,
                            target: '_blank',
                            rel: 'noreferrer',
                            children: c,
                          }),
                          Object(r.jsx)('br', {}),
                          Object(r.jsx)('span', {
                            className: 'row-content lighter',
                            children: i.renderedDescription,
                          }),
                          Object(r.jsx)('br', {}),
                        ],
                      },
                      ''.concat(t, ':projects-row')
                    );
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var P = function () {
          var e = Object(S.g)();
          return Object(r.jsx)('div', {
            className: 'App',
            children: Object(r.jsx)(m, {
              children: Object(r.jsx)(S.c, {
                history: e,
                children: Object(r.jsxs)(S.d, {
                  children: [
                    Object(r.jsx)(S.b, {
                      exact: !0,
                      path: '/cv',
                      component: L,
                    }),
                    Object(r.jsx)(S.b, { exact: !0, path: '/', component: w }),
                    Object(r.jsx)(S.a, { to: '/' }),
                  ],
                }),
              }),
            }),
          });
        },
        R = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 105))
              .then(function (t) {
                var n = t.getCLS,
                  c = t.getFID,
                  r = t.getFCP,
                  i = t.getLCP,
                  a = t.getTTFB;
                n(e), c(e), r(e), i(e), a(e);
              });
        };
      s.a.render(
        Object(r.jsx)(a.a.StrictMode, { children: Object(r.jsx)(P, {}) }),
        document.getElementById('root')
      ),
        R();
    },
    47: function (e, t, n) {},
    48: function (e, t, n) {},
    49: function (e, t, n) {},
    95: function (e, t, n) {},
    96: function (e, t, n) {},
    97: function (e, t, n) {},
  },
  [[104, 1, 2]],
]);
//# sourceMappingURL=main.0e3eef4f.chunk.js.map
