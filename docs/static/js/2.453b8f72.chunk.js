/*! For license information please see 2.453b8f72.chunk.js.LICENSE.txt */
(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
  [2],
  [
    function (t, e, n) {
      'use strict';
      t.exports = n(43);
    },
    function (t, e, n) {
      'use strict';
      t.exports = n(44);
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(5),
        i = n(4),
        a = 'get',
        o = 'set';
      e.Factory = {
        addGetterSetter: function (t, n, r, i, a) {
          e.Factory.addGetter(t, n, r),
            e.Factory.addSetter(t, n, i, a),
            e.Factory.addOverloadedGetterSetter(t, n);
        },
        addGetter: function (t, e, n) {
          var i = a + r.Util._capitalize(e);
          t.prototype[i] =
            t.prototype[i] ||
            function () {
              var t = this.attrs[e];
              return void 0 === t ? n : t;
            };
        },
        addSetter: function (t, n, i, a) {
          var l = o + r.Util._capitalize(n);
          t.prototype[l] || e.Factory.overWriteSetter(t, n, i, a);
        },
        overWriteSetter: function (t, e, n, i) {
          var a = o + r.Util._capitalize(e);
          t.prototype[a] = function (t) {
            return (
              n && void 0 !== t && null !== t && (t = n.call(this, t, e)),
              this._setAttr(e, t),
              i && i.call(this),
              this
            );
          };
        },
        addComponentsGetterSetter: function (t, n, l, s, u) {
          var c,
            f,
            d = l.length,
            h = r.Util._capitalize,
            p = a + h(n),
            g = o + h(n);
          t.prototype[p] = function () {
            var t = {};
            for (c = 0; c < d; c++) t[(f = l[c])] = this.getAttr(n + h(f));
            return t;
          };
          var v = i.getComponentValidator(l);
          (t.prototype[g] = function (t) {
            var e,
              r = this.attrs[n];
            for (e in (s && (t = s.call(this, t)), v && v.call(this, t, n), t))
              t.hasOwnProperty(e) && this._setAttr(n + h(e), t[e]);
            return this._fireChangeEvent(n, r, t), u && u.call(this), this;
          }),
            e.Factory.addOverloadedGetterSetter(t, n);
        },
        addOverloadedGetterSetter: function (t, e) {
          var n = r.Util._capitalize(e),
            i = o + n,
            l = a + n;
          t.prototype[e] = function () {
            return arguments.length ? (this[i](arguments[0]), this) : this[l]();
          };
        },
        addDeprecatedGetterSetter: function (t, n, i, o) {
          r.Util.error('Adding deprecated ' + n);
          var l = a + r.Util._capitalize(n),
            s =
              n +
              ' property is deprecated and will be removed soon. Look at Konva change log for more information.';
          (t.prototype[l] = function () {
            r.Util.error(s);
            var t = this.attrs[n];
            return void 0 === t ? i : t;
          }),
            e.Factory.addSetter(t, n, o, function () {
              r.Util.error(s);
            }),
            e.Factory.addOverloadedGetterSetter(t, n);
        },
        backCompat: function (t, e) {
          r.Util.each(e, function (e, n) {
            var i = t.prototype[n],
              l = a + r.Util._capitalize(e),
              s = o + r.Util._capitalize(e);
            function u() {
              i.apply(this, arguments),
                r.Util.error(
                  '"' +
                    e +
                    '" method is deprecated and will be removed soon. Use ""' +
                    n +
                    '" instead.'
                );
            }
            (t.prototype[e] = u), (t.prototype[l] = u), (t.prototype[s] = u);
          });
        },
        afterSetFilter: function () {
          this._filterUpToDate = !1;
        },
      };
    },
    function (t, e, n) {
      'use strict';
      (function (t) {
        Object.defineProperty(e, '__esModule', { value: !0 });
        var n = Math.PI / 180;
        var r = function (t) {
          var e = t.indexOf('msie ');
          if (e > 0) return parseInt(t.substring(e + 5, t.indexOf('.', e)), 10);
          if (t.indexOf('trident/') > 0) {
            var n = t.indexOf('rv:');
            return parseInt(t.substring(n + 3, t.indexOf('.', n)), 10);
          }
          var r = t.indexOf('edge/');
          return r > 0 && parseInt(t.substring(r + 5, t.indexOf('.', r)), 10);
        };
        (e._parseUA = function (t) {
          var e = t.toLowerCase(),
            n =
              /(chrome)[ /]([\w.]+)/.exec(e) ||
              /(webkit)[ /]([\w.]+)/.exec(e) ||
              /(opera)(?:.*version|)[ /]([\w.]+)/.exec(e) ||
              /(msie) ([\w.]+)/.exec(e) ||
              (e.indexOf('compatible') < 0 &&
                /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)) ||
              [],
            i = !!t.match(
              /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i
            ),
            a = !!t.match(/IEMobile/i);
          return {
            browser: n[1] || '',
            version: n[2] || '0',
            isIE: r(e),
            mobile: i,
            ieMobile: a,
          };
        }),
          (e.glob =
            'undefined' !== typeof t
              ? t
              : 'undefined' !== typeof window
              ? window
              : 'undefined' !== typeof WorkerGlobalScope
              ? self
              : {}),
          (e.Konva = {
            _global: e.glob,
            version: '7.1.4',
            isBrowser:
              'undefined' !== typeof window &&
              ('[object Window]' === {}.toString.call(window) ||
                '[object global]' === {}.toString.call(window)),
            isUnminified: /param/.test(function (t) {}.toString()),
            dblClickWindow: 400,
            getAngle: function (t) {
              return e.Konva.angleDeg ? t * n : t;
            },
            enableTrace: !1,
            _pointerEventsEnabled: !1,
            hitOnDragEnabled: !1,
            captureTouchEventsEnabled: !1,
            listenClickTap: !1,
            inDblClickWindow: !1,
            pixelRatio: void 0,
            dragDistance: 3,
            angleDeg: !0,
            showWarnings: !0,
            dragButtons: [0, 1],
            isDragging: function () {
              return e.Konva.DD.isDragging;
            },
            isDragReady: function () {
              return !!e.Konva.DD.node;
            },
            UA: e._parseUA(
              (e.glob.navigator && e.glob.navigator.userAgent) || ''
            ),
            document: e.glob.document,
            _injectGlobal: function (t) {
              e.glob.Konva = t;
            },
            _parseUA: e._parseUA,
          }),
          (e._NODES_REGISTRY = {}),
          (e._registerNode = function (t) {
            (e._NODES_REGISTRY[t.prototype.getClassName()] = t),
              (e.Konva[t.prototype.getClassName()] = t);
          });
      }.call(this, n(31)));
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(3),
        i = n(5);
      function a(t) {
        return i.Util._isString(t)
          ? '"' + t + '"'
          : '[object Number]' === Object.prototype.toString.call(t) ||
            i.Util._isBoolean(t)
          ? t
          : Object.prototype.toString.call(t);
      }
      (e.RGBComponent = function (t) {
        return t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
      }),
        (e.alphaComponent = function (t) {
          return t > 1 ? 1 : t < 1e-4 ? 1e-4 : t;
        }),
        (e.getNumberValidator = function () {
          if (r.Konva.isUnminified)
            return function (t, e) {
              return (
                i.Util._isNumber(t) ||
                  i.Util.warn(
                    a(t) +
                      ' is a not valid value for "' +
                      e +
                      '" attribute. The value should be a number.'
                  ),
                t
              );
            };
        }),
        (e.getNumberOrArrayOfNumbersValidator = function (t) {
          if (r.Konva.isUnminified)
            return function (e, n) {
              var r = i.Util._isNumber(e),
                o = i.Util._isArray(e) && e.length == t;
              return (
                r ||
                  o ||
                  i.Util.warn(
                    a(e) +
                      ' is a not valid value for "' +
                      n +
                      '" attribute. The value should be a number or Array<number>(' +
                      t +
                      ')'
                  ),
                e
              );
            };
        }),
        (e.getNumberOrAutoValidator = function () {
          if (r.Konva.isUnminified)
            return function (t, e) {
              return (
                i.Util._isNumber(t) ||
                  'auto' === t ||
                  i.Util.warn(
                    a(t) +
                      ' is a not valid value for "' +
                      e +
                      '" attribute. The value should be a number or "auto".'
                  ),
                t
              );
            };
        }),
        (e.getStringValidator = function () {
          if (r.Konva.isUnminified)
            return function (t, e) {
              return (
                i.Util._isString(t) ||
                  i.Util.warn(
                    a(t) +
                      ' is a not valid value for "' +
                      e +
                      '" attribute. The value should be a string.'
                  ),
                t
              );
            };
        }),
        (e.getStringOrGradientValidator = function () {
          if (r.Konva.isUnminified)
            return function (t, e) {
              var n = i.Util._isString(t),
                r =
                  '[object CanvasGradient]' ===
                  Object.prototype.toString.call(t);
              return (
                n ||
                  r ||
                  i.Util.warn(
                    a(t) +
                      ' is a not valid value for "' +
                      e +
                      '" attribute. The value should be a string or a native gradient.'
                  ),
                t
              );
            };
        }),
        (e.getFunctionValidator = function () {
          if (r.Konva.isUnminified)
            return function (t, e) {
              return (
                i.Util._isFunction(t) ||
                  i.Util.warn(
                    a(t) +
                      ' is a not valid value for "' +
                      e +
                      '" attribute. The value should be a function.'
                  ),
                t
              );
            };
        }),
        (e.getNumberArrayValidator = function () {
          if (r.Konva.isUnminified)
            return function (t, e) {
              return (
                i.Util._isArray(t)
                  ? t.forEach(function (t) {
                      i.Util._isNumber(t) ||
                        i.Util.warn(
                          '"' +
                            e +
                            '" attribute has non numeric element ' +
                            t +
                            '. Make sure that all elements are numbers.'
                        );
                    })
                  : i.Util.warn(
                      a(t) +
                        ' is a not valid value for "' +
                        e +
                        '" attribute. The value should be a array of numbers.'
                    ),
                t
              );
            };
        }),
        (e.getBooleanValidator = function () {
          if (r.Konva.isUnminified)
            return function (t, e) {
              return (
                !0 === t ||
                  !1 === t ||
                  i.Util.warn(
                    a(t) +
                      ' is a not valid value for "' +
                      e +
                      '" attribute. The value should be a boolean.'
                  ),
                t
              );
            };
        }),
        (e.getComponentValidator = function (t) {
          if (r.Konva.isUnminified)
            return function (e, n) {
              return (
                i.Util.isObject(e) ||
                  i.Util.warn(
                    a(e) +
                      ' is a not valid value for "' +
                      n +
                      '" attribute. The value should be an object with properties ' +
                      t
                  ),
                e
              );
            };
        });
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(3),
        i = (function () {
          function t() {}
          return (
            (t.toCollection = function (e) {
              var n,
                r = new t(),
                i = e.length;
              for (n = 0; n < i; n++) r.push(e[n]);
              return r;
            }),
            (t._mapMethod = function (e) {
              t.prototype[e] = function () {
                var t,
                  n = this.length,
                  r = [].slice.call(arguments);
                for (t = 0; t < n; t++) this[t][e].apply(this[t], r);
                return this;
              };
            }),
            (t.mapMethods = function (e) {
              var n = e.prototype;
              for (var r in n) t._mapMethod(r);
            }),
            t
          );
        })();
      (e.Collection = i),
        (i.prototype = []),
        (i.prototype.each = function (t) {
          for (var e = 0; e < this.length; e++) t(this[e], e);
        }),
        (i.prototype.toArray = function () {
          var t,
            e = [],
            n = this.length;
          for (t = 0; t < n; t++) e.push(this[t]);
          return e;
        });
      var a = (function () {
        function t(t) {
          void 0 === t && (t = [1, 0, 0, 1, 0, 0]),
            (this.dirty = !1),
            (this.m = (t && t.slice()) || [1, 0, 0, 1, 0, 0]);
        }
        return (
          (t.prototype.reset = function () {
            (this.m[0] = 1),
              (this.m[1] = 0),
              (this.m[2] = 0),
              (this.m[3] = 1),
              (this.m[4] = 0),
              (this.m[5] = 0);
          }),
          (t.prototype.copy = function () {
            return new t(this.m);
          }),
          (t.prototype.copyInto = function (t) {
            (t.m[0] = this.m[0]),
              (t.m[1] = this.m[1]),
              (t.m[2] = this.m[2]),
              (t.m[3] = this.m[3]),
              (t.m[4] = this.m[4]),
              (t.m[5] = this.m[5]);
          }),
          (t.prototype.point = function (t) {
            var e = this.m;
            return {
              x: e[0] * t.x + e[2] * t.y + e[4],
              y: e[1] * t.x + e[3] * t.y + e[5],
            };
          }),
          (t.prototype.translate = function (t, e) {
            return (
              (this.m[4] += this.m[0] * t + this.m[2] * e),
              (this.m[5] += this.m[1] * t + this.m[3] * e),
              this
            );
          }),
          (t.prototype.scale = function (t, e) {
            return (
              (this.m[0] *= t),
              (this.m[1] *= t),
              (this.m[2] *= e),
              (this.m[3] *= e),
              this
            );
          }),
          (t.prototype.rotate = function (t) {
            var e = Math.cos(t),
              n = Math.sin(t),
              r = this.m[0] * e + this.m[2] * n,
              i = this.m[1] * e + this.m[3] * n,
              a = this.m[0] * -n + this.m[2] * e,
              o = this.m[1] * -n + this.m[3] * e;
            return (
              (this.m[0] = r),
              (this.m[1] = i),
              (this.m[2] = a),
              (this.m[3] = o),
              this
            );
          }),
          (t.prototype.getTranslation = function () {
            return { x: this.m[4], y: this.m[5] };
          }),
          (t.prototype.skew = function (t, e) {
            var n = this.m[0] + this.m[2] * e,
              r = this.m[1] + this.m[3] * e,
              i = this.m[2] + this.m[0] * t,
              a = this.m[3] + this.m[1] * t;
            return (
              (this.m[0] = n),
              (this.m[1] = r),
              (this.m[2] = i),
              (this.m[3] = a),
              this
            );
          }),
          (t.prototype.multiply = function (t) {
            var e = this.m[0] * t.m[0] + this.m[2] * t.m[1],
              n = this.m[1] * t.m[0] + this.m[3] * t.m[1],
              r = this.m[0] * t.m[2] + this.m[2] * t.m[3],
              i = this.m[1] * t.m[2] + this.m[3] * t.m[3],
              a = this.m[0] * t.m[4] + this.m[2] * t.m[5] + this.m[4],
              o = this.m[1] * t.m[4] + this.m[3] * t.m[5] + this.m[5];
            return (
              (this.m[0] = e),
              (this.m[1] = n),
              (this.m[2] = r),
              (this.m[3] = i),
              (this.m[4] = a),
              (this.m[5] = o),
              this
            );
          }),
          (t.prototype.invert = function () {
            var t = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]),
              e = this.m[3] * t,
              n = -this.m[1] * t,
              r = -this.m[2] * t,
              i = this.m[0] * t,
              a = t * (this.m[2] * this.m[5] - this.m[3] * this.m[4]),
              o = t * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
            return (
              (this.m[0] = e),
              (this.m[1] = n),
              (this.m[2] = r),
              (this.m[3] = i),
              (this.m[4] = a),
              (this.m[5] = o),
              this
            );
          }),
          (t.prototype.getMatrix = function () {
            return this.m;
          }),
          (t.prototype.setAbsolutePosition = function (t, e) {
            var n = this.m[0],
              r = this.m[1],
              i = this.m[2],
              a = this.m[3],
              o = this.m[4],
              l = (n * (e - this.m[5]) - r * (t - o)) / (n * a - r * i),
              s = (t - o - i * l) / n;
            return this.translate(s, l);
          }),
          (t.prototype.decompose = function () {
            var t = this.m[0],
              n = this.m[1],
              r = this.m[2],
              i = this.m[3],
              a = t * i - n * r,
              o = {
                x: this.m[4],
                y: this.m[5],
                rotation: 0,
                scaleX: 0,
                scaleY: 0,
                skewX: 0,
                skewY: 0,
              };
            if (0 != t || 0 != n) {
              var l = Math.sqrt(t * t + n * n);
              (o.rotation = n > 0 ? Math.acos(t / l) : -Math.acos(t / l)),
                (o.scaleX = l),
                (o.scaleY = a / l),
                (o.skewX = (t * r + n * i) / a),
                (o.skewY = 0);
            } else if (0 != r || 0 != i) {
              var s = Math.sqrt(r * r + i * i);
              (o.rotation =
                Math.PI / 2 - (i > 0 ? Math.acos(-r / s) : -Math.acos(r / s))),
                (o.scaleX = a / s),
                (o.scaleY = s),
                (o.skewX = 0),
                (o.skewY = (t * r + n * i) / a);
            }
            return (o.rotation = e.Util._getRotation(o.rotation)), o;
          }),
          t
        );
      })();
      e.Transform = a;
      var o = Math.PI / 180,
        l = 180 / Math.PI,
        s = 'Konva error: ',
        u = {
          aliceblue: [240, 248, 255],
          antiquewhite: [250, 235, 215],
          aqua: [0, 255, 255],
          aquamarine: [127, 255, 212],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          bisque: [255, 228, 196],
          black: [0, 0, 0],
          blanchedalmond: [255, 235, 205],
          blue: [0, 0, 255],
          blueviolet: [138, 43, 226],
          brown: [165, 42, 42],
          burlywood: [222, 184, 135],
          cadetblue: [95, 158, 160],
          chartreuse: [127, 255, 0],
          chocolate: [210, 105, 30],
          coral: [255, 127, 80],
          cornflowerblue: [100, 149, 237],
          cornsilk: [255, 248, 220],
          crimson: [220, 20, 60],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgoldenrod: [184, 132, 11],
          darkgray: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkgrey: [169, 169, 169],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkseagreen: [143, 188, 143],
          darkslateblue: [72, 61, 139],
          darkslategray: [47, 79, 79],
          darkslategrey: [47, 79, 79],
          darkturquoise: [0, 206, 209],
          darkviolet: [148, 0, 211],
          deeppink: [255, 20, 147],
          deepskyblue: [0, 191, 255],
          dimgray: [105, 105, 105],
          dimgrey: [105, 105, 105],
          dodgerblue: [30, 144, 255],
          firebrick: [178, 34, 34],
          floralwhite: [255, 255, 240],
          forestgreen: [34, 139, 34],
          fuchsia: [255, 0, 255],
          gainsboro: [220, 220, 220],
          ghostwhite: [248, 248, 255],
          gold: [255, 215, 0],
          goldenrod: [218, 165, 32],
          gray: [128, 128, 128],
          green: [0, 128, 0],
          greenyellow: [173, 255, 47],
          grey: [128, 128, 128],
          honeydew: [240, 255, 240],
          hotpink: [255, 105, 180],
          indianred: [205, 92, 92],
          indigo: [75, 0, 130],
          ivory: [255, 255, 240],
          khaki: [240, 230, 140],
          lavender: [230, 230, 250],
          lavenderblush: [255, 240, 245],
          lawngreen: [124, 252, 0],
          lemonchiffon: [255, 250, 205],
          lightblue: [173, 216, 230],
          lightcoral: [240, 128, 128],
          lightcyan: [224, 255, 255],
          lightgoldenrodyellow: [250, 250, 210],
          lightgray: [211, 211, 211],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightsalmon: [255, 160, 122],
          lightseagreen: [32, 178, 170],
          lightskyblue: [135, 206, 250],
          lightslategray: [119, 136, 153],
          lightslategrey: [119, 136, 153],
          lightsteelblue: [176, 196, 222],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          limegreen: [50, 205, 50],
          linen: [250, 240, 230],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          mediumaquamarine: [102, 205, 170],
          mediumblue: [0, 0, 205],
          mediumorchid: [186, 85, 211],
          mediumpurple: [147, 112, 219],
          mediumseagreen: [60, 179, 113],
          mediumslateblue: [123, 104, 238],
          mediumspringgreen: [0, 250, 154],
          mediumturquoise: [72, 209, 204],
          mediumvioletred: [199, 21, 133],
          midnightblue: [25, 25, 112],
          mintcream: [245, 255, 250],
          mistyrose: [255, 228, 225],
          moccasin: [255, 228, 181],
          navajowhite: [255, 222, 173],
          navy: [0, 0, 128],
          oldlace: [253, 245, 230],
          olive: [128, 128, 0],
          olivedrab: [107, 142, 35],
          orange: [255, 165, 0],
          orangered: [255, 69, 0],
          orchid: [218, 112, 214],
          palegoldenrod: [238, 232, 170],
          palegreen: [152, 251, 152],
          paleturquoise: [175, 238, 238],
          palevioletred: [219, 112, 147],
          papayawhip: [255, 239, 213],
          peachpuff: [255, 218, 185],
          peru: [205, 133, 63],
          pink: [255, 192, 203],
          plum: [221, 160, 203],
          powderblue: [176, 224, 230],
          purple: [128, 0, 128],
          rebeccapurple: [102, 51, 153],
          red: [255, 0, 0],
          rosybrown: [188, 143, 143],
          royalblue: [65, 105, 225],
          saddlebrown: [139, 69, 19],
          salmon: [250, 128, 114],
          sandybrown: [244, 164, 96],
          seagreen: [46, 139, 87],
          seashell: [255, 245, 238],
          sienna: [160, 82, 45],
          silver: [192, 192, 192],
          skyblue: [135, 206, 235],
          slateblue: [106, 90, 205],
          slategray: [119, 128, 144],
          slategrey: [119, 128, 144],
          snow: [255, 255, 250],
          springgreen: [0, 255, 127],
          steelblue: [70, 130, 180],
          tan: [210, 180, 140],
          teal: [0, 128, 128],
          thistle: [216, 191, 216],
          transparent: [255, 255, 255, 0],
          tomato: [255, 99, 71],
          turquoise: [64, 224, 208],
          violet: [238, 130, 238],
          wheat: [245, 222, 179],
          white: [255, 255, 255],
          whitesmoke: [245, 245, 245],
          yellow: [255, 255, 0],
          yellowgreen: [154, 205, 5],
        },
        c = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/,
        f = [];
      e.Util = {
        _isElement: function (t) {
          return !(!t || 1 != t.nodeType);
        },
        _isFunction: function (t) {
          return !!(t && t.constructor && t.call && t.apply);
        },
        _isPlainObject: function (t) {
          return !!t && t.constructor === Object;
        },
        _isArray: function (t) {
          return '[object Array]' === Object.prototype.toString.call(t);
        },
        _isNumber: function (t) {
          return (
            '[object Number]' === Object.prototype.toString.call(t) &&
            !isNaN(t) &&
            isFinite(t)
          );
        },
        _isString: function (t) {
          return '[object String]' === Object.prototype.toString.call(t);
        },
        _isBoolean: function (t) {
          return '[object Boolean]' === Object.prototype.toString.call(t);
        },
        isObject: function (t) {
          return t instanceof Object;
        },
        isValidSelector: function (t) {
          if ('string' !== typeof t) return !1;
          var e = t[0];
          return '#' === e || '.' === e || e === e.toUpperCase();
        },
        _sign: function (t) {
          return 0 === t ? 0 : t > 0 ? 1 : -1;
        },
        requestAnimFrame: function (t) {
          f.push(t),
            1 === f.length &&
              requestAnimationFrame(function () {
                var t = f;
                (f = []),
                  t.forEach(function (t) {
                    t();
                  });
              });
        },
        createCanvasElement: function () {
          var t = document.createElement('canvas');
          try {
            t.style = t.style || {};
          } catch (e) {}
          return t;
        },
        createImageElement: function () {
          return document.createElement('img');
        },
        _isInDocument: function (t) {
          for (; (t = t.parentNode); ) if (t == document) return !0;
          return !1;
        },
        _simplifyArray: function (t) {
          var n,
            r,
            i = [],
            a = t.length,
            o = e.Util;
          for (n = 0; n < a; n++)
            (r = t[n]),
              o._isNumber(r)
                ? (r = Math.round(1e3 * r) / 1e3)
                : o._isString(r) || (r = r.toString()),
              i.push(r);
          return i;
        },
        _urlToImage: function (t, e) {
          var n = new r.glob.Image();
          (n.onload = function () {
            e(n);
          }),
            (n.src = t);
        },
        _rgbToHex: function (t, e, n) {
          return ((1 << 24) + (t << 16) + (e << 8) + n).toString(16).slice(1);
        },
        _hexToRgb: function (t) {
          t = t.replace('#', '');
          var e = parseInt(t, 16);
          return { r: (e >> 16) & 255, g: (e >> 8) & 255, b: 255 & e };
        },
        getRandomColor: function () {
          for (
            var t = ((16777215 * Math.random()) << 0).toString(16);
            t.length < 6;

          )
            t = '0' + t;
          return '#' + t;
        },
        get: function (t, e) {
          return void 0 === t ? e : t;
        },
        getRGB: function (t) {
          var e;
          return t in u
            ? { r: (e = u[t])[0], g: e[1], b: e[2] }
            : '#' === t[0]
            ? this._hexToRgb(t.substring(1))
            : 'rgb(' === t.substr(0, 4)
            ? ((e = c.exec(t.replace(/ /g, ''))),
              {
                r: parseInt(e[1], 10),
                g: parseInt(e[2], 10),
                b: parseInt(e[3], 10),
              })
            : { r: 0, g: 0, b: 0 };
        },
        colorToRGBA: function (t) {
          return (
            (t = t || 'black'),
            e.Util._namedColorToRBA(t) ||
              e.Util._hex3ColorToRGBA(t) ||
              e.Util._hex6ColorToRGBA(t) ||
              e.Util._rgbColorToRGBA(t) ||
              e.Util._rgbaColorToRGBA(t) ||
              e.Util._hslColorToRGBA(t)
          );
        },
        _namedColorToRBA: function (t) {
          var e = u[t.toLowerCase()];
          return e ? { r: e[0], g: e[1], b: e[2], a: 1 } : null;
        },
        _rgbColorToRGBA: function (t) {
          if (0 === t.indexOf('rgb(')) {
            var e = (t = t.match(/rgb\(([^)]+)\)/)[1])
              .split(/ *, */)
              .map(Number);
            return { r: e[0], g: e[1], b: e[2], a: 1 };
          }
        },
        _rgbaColorToRGBA: function (t) {
          if (0 === t.indexOf('rgba(')) {
            var e = (t = t.match(/rgba\(([^)]+)\)/)[1])
              .split(/ *, */)
              .map(Number);
            return { r: e[0], g: e[1], b: e[2], a: e[3] };
          }
        },
        _hex6ColorToRGBA: function (t) {
          if ('#' === t[0] && 7 === t.length)
            return {
              r: parseInt(t.slice(1, 3), 16),
              g: parseInt(t.slice(3, 5), 16),
              b: parseInt(t.slice(5, 7), 16),
              a: 1,
            };
        },
        _hex3ColorToRGBA: function (t) {
          if ('#' === t[0] && 4 === t.length)
            return {
              r: parseInt(t[1] + t[1], 16),
              g: parseInt(t[2] + t[2], 16),
              b: parseInt(t[3] + t[3], 16),
              a: 1,
            };
        },
        _hslColorToRGBA: function (t) {
          if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(t)) {
            var e = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t),
              n = (e[0], e.slice(1)),
              r = Number(n[0]) / 360,
              i = Number(n[1]) / 100,
              a = Number(n[2]) / 100,
              o = void 0,
              l = void 0,
              s = void 0;
            if (0 === i)
              return (
                (s = 255 * a),
                { r: Math.round(s), g: Math.round(s), b: Math.round(s), a: 1 }
              );
            for (
              var u = 2 * a - (o = a < 0.5 ? a * (1 + i) : a + i - a * i),
                c = [0, 0, 0],
                f = 0;
              f < 3;
              f++
            )
              (l = r + (1 / 3) * -(f - 1)) < 0 && l++,
                l > 1 && l--,
                (s =
                  6 * l < 1
                    ? u + 6 * (o - u) * l
                    : 2 * l < 1
                    ? o
                    : 3 * l < 2
                    ? u + (o - u) * (2 / 3 - l) * 6
                    : u),
                (c[f] = 255 * s);
            return {
              r: Math.round(c[0]),
              g: Math.round(c[1]),
              b: Math.round(c[2]),
              a: 1,
            };
          }
        },
        haveIntersection: function (t, e) {
          return !(
            e.x > t.x + t.width ||
            e.x + e.width < t.x ||
            e.y > t.y + t.height ||
            e.y + e.height < t.y
          );
        },
        cloneObject: function (t) {
          var e = {};
          for (var n in t)
            this._isPlainObject(t[n])
              ? (e[n] = this.cloneObject(t[n]))
              : this._isArray(t[n])
              ? (e[n] = this.cloneArray(t[n]))
              : (e[n] = t[n]);
          return e;
        },
        cloneArray: function (t) {
          return t.slice(0);
        },
        _degToRad: function (t) {
          return t * o;
        },
        _radToDeg: function (t) {
          return t * l;
        },
        _getRotation: function (t) {
          return r.Konva.angleDeg ? e.Util._radToDeg(t) : t;
        },
        _capitalize: function (t) {
          return t.charAt(0).toUpperCase() + t.slice(1);
        },
        throw: function (t) {
          throw new Error(s + t);
        },
        error: function (t) {
          console.error(s + t);
        },
        warn: function (t) {
          r.Konva.showWarnings && console.warn('Konva warning: ' + t);
        },
        extend: function (t, e) {
          function n() {
            this.constructor = t;
          }
          n.prototype = e.prototype;
          var r = t.prototype;
          for (var i in ((t.prototype = new n()), r))
            r.hasOwnProperty(i) && (t.prototype[i] = r[i]);
          (t.__super__ = e.prototype), (t.super = e);
        },
        _getControlPoints: function (t, e, n, r, i, a, o) {
          var l = Math.sqrt(Math.pow(n - t, 2) + Math.pow(r - e, 2)),
            s = Math.sqrt(Math.pow(i - n, 2) + Math.pow(a - r, 2)),
            u = (o * l) / (l + s),
            c = (o * s) / (l + s);
          return [
            n - u * (i - t),
            r - u * (a - e),
            n + c * (i - t),
            r + c * (a - e),
          ];
        },
        _expandPoints: function (t, n) {
          var r,
            i,
            a = t.length,
            o = [];
          for (r = 2; r < a - 2; r += 2)
            (i = e.Util._getControlPoints(
              t[r - 2],
              t[r - 1],
              t[r],
              t[r + 1],
              t[r + 2],
              t[r + 3],
              n
            )),
              o.push(i[0]),
              o.push(i[1]),
              o.push(t[r]),
              o.push(t[r + 1]),
              o.push(i[2]),
              o.push(i[3]);
          return o;
        },
        each: function (t, e) {
          for (var n in t) e(n, t[n]);
        },
        _inRange: function (t, e, n) {
          return e <= t && t < n;
        },
        _getProjectionToSegment: function (t, e, n, r, i, a) {
          var o,
            l,
            s,
            u = (t - n) * (t - n) + (e - r) * (e - r);
          if (0 == u)
            (o = t), (l = e), (s = (i - n) * (i - n) + (a - r) * (a - r));
          else {
            var c = ((i - t) * (n - t) + (a - e) * (r - e)) / u;
            c < 0
              ? ((o = t), (l = e), (s = (t - i) * (t - i) + (e - a) * (e - a)))
              : c > 1
              ? ((o = n), (l = r), (s = (n - i) * (n - i) + (r - a) * (r - a)))
              : (s =
                  ((o = t + c * (n - t)) - i) * (o - i) +
                  ((l = e + c * (r - e)) - a) * (l - a));
          }
          return [o, l, s];
        },
        _getProjectionToLine: function (t, n, r) {
          var i = e.Util.cloneObject(t),
            a = Number.MAX_VALUE;
          return (
            n.forEach(function (o, l) {
              if (r || l !== n.length - 1) {
                var s = n[(l + 1) % n.length],
                  u = e.Util._getProjectionToSegment(
                    o.x,
                    o.y,
                    s.x,
                    s.y,
                    t.x,
                    t.y
                  ),
                  c = u[0],
                  f = u[1],
                  d = u[2];
                d < a && ((i.x = c), (i.y = f), (a = d));
              }
            }),
            i
          );
        },
        _prepareArrayForTween: function (t, n, r) {
          var i,
            a = [],
            o = [];
          if (t.length > n.length) {
            var l = n;
            (n = t), (t = l);
          }
          for (i = 0; i < t.length; i += 2) a.push({ x: t[i], y: t[i + 1] });
          for (i = 0; i < n.length; i += 2) o.push({ x: n[i], y: n[i + 1] });
          var s = [];
          return (
            o.forEach(function (t) {
              var n = e.Util._getProjectionToLine(t, a, r);
              s.push(n.x), s.push(n.y);
            }),
            s
          );
        },
        _prepareToStringify: function (t) {
          var n;
          for (var r in ((t.visitedByCircularReferenceRemoval = !0), t))
            if (t.hasOwnProperty(r) && t[r] && 'object' == typeof t[r])
              if (
                ((n = Object.getOwnPropertyDescriptor(t, r)),
                t[r].visitedByCircularReferenceRemoval ||
                  e.Util._isElement(t[r]))
              ) {
                if (!n.configurable) return null;
                delete t[r];
              } else if (null === e.Util._prepareToStringify(t[r])) {
                if (!n.configurable) return null;
                delete t[r];
              }
          return delete t.visitedByCircularReferenceRemoval, t;
        },
        _assign: function (t, e) {
          for (var n in e) t[n] = e[n];
          return t;
        },
        _getFirstPointerId: function (t) {
          return t.touches ? t.changedTouches[0].identifier : 999;
        },
      };
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(5),
        i = n(2),
        a = n(19),
        o = n(3),
        l = n(23),
        s = n(4);
      (e.ids = {}), (e.names = {});
      (e._removeId = function (t, n) {
        t && e.ids[t] === n && delete e.ids[t];
      }),
        (e._addName = function (t, n) {
          n && (e.names[n] || (e.names[n] = []), e.names[n].push(t));
        }),
        (e._removeName = function (t, n) {
          if (t) {
            var r = e.names[t];
            if (r) {
              for (var i = 0; i < r.length; i++) {
                r[i]._id === n && r.splice(i, 1);
              }
              0 === r.length && delete e.names[t];
            }
          }
        });
      var u = 'absoluteOpacity',
        c = 'allEventListeners',
        f = 'absoluteTransform',
        d = 'absoluteScale',
        h = 'canvas',
        p = 'listening',
        g = 'mouseenter',
        v = 'mouseleave',
        y = 'Shape',
        m = ' ',
        b = 'stage',
        _ = 'transform',
        w = 'visible',
        S = [
          'xChange.konva',
          'yChange.konva',
          'scaleXChange.konva',
          'scaleYChange.konva',
          'skewXChange.konva',
          'skewYChange.konva',
          'rotationChange.konva',
          'offsetXChange.konva',
          'offsetYChange.konva',
          'transformsEnabledChange.konva',
        ].join(m),
        x =
          (['scaleXChange.konva', 'scaleYChange.konva'].join(m),
          new r.Collection()),
        k = 1,
        C = (function () {
          function t(t) {
            (this._id = k++),
              (this.eventListeners = {}),
              (this.attrs = {}),
              (this.index = 0),
              (this._allEventListeners = null),
              (this.parent = null),
              (this._cache = new Map()),
              (this._attachedDepsListeners = new Map()),
              (this._lastPos = null),
              (this._batchingTransformChange = !1),
              (this._needClearTransformCache = !1),
              (this._filterUpToDate = !1),
              (this._isUnderCache = !1),
              (this.children = x),
              (this._dragEventId = null),
              (this._shouldFireChangeEvents = !1),
              this.setAttrs(t),
              (this._shouldFireChangeEvents = !0);
          }
          return (
            (t.prototype.hasChildren = function () {
              return !1;
            }),
            (t.prototype.getChildren = function () {
              return x;
            }),
            (t.prototype._clearCache = function (t) {
              (t !== _ && t !== f) || !this._cache.get(t)
                ? t
                  ? this._cache.delete(t)
                  : this._cache.clear()
                : (this._cache.get(t).dirty = !0);
            }),
            (t.prototype._getCache = function (t, e) {
              var n = this._cache.get(t);
              return (
                (void 0 === n || ((t === _ || t === f) && !0 === n.dirty)) &&
                  ((n = e.call(this)), this._cache.set(t, n)),
                n
              );
            }),
            (t.prototype._calculate = function (t, e, n) {
              var r = this;
              if (!this._attachedDepsListeners.get(t)) {
                var i = e
                  .map(function (t) {
                    return t + 'Change.konva';
                  })
                  .join(m);
                this.on(i, function () {
                  r._clearCache(t);
                }),
                  this._attachedDepsListeners.set(t, !0);
              }
              return this._getCache(t, n);
            }),
            (t.prototype._getCanvasCache = function () {
              return this._cache.get(h);
            }),
            (t.prototype._clearSelfAndDescendantCache = function (t, e) {
              this._clearCache(t),
                e && t === f && this.fire('_clearTransformCache'),
                this.isCached() ||
                  (this.children &&
                    this.children.each(function (e) {
                      e._clearSelfAndDescendantCache(t, !0);
                    }));
            }),
            (t.prototype.clearCache = function () {
              return (
                this._cache.delete(h), this._clearSelfAndDescendantCache(), this
              );
            }),
            (t.prototype.cache = function (t) {
              var e = t || {},
                n = {};
              (void 0 !== e.x &&
                void 0 !== e.y &&
                void 0 !== e.width &&
                void 0 !== e.height) ||
                (n = this.getClientRect({
                  skipTransform: !0,
                  relativeTo: this.getParent(),
                }));
              var i = Math.ceil(e.width || n.width),
                o = Math.ceil(e.height || n.height),
                l = e.pixelRatio,
                s = void 0 === e.x ? n.x : e.x,
                c = void 0 === e.y ? n.y : e.y,
                f = e.offset || 0,
                p = e.drawBorder || !1;
              if (i && o) {
                (i += 2 * f), (o += 2 * f), (s -= f), (c -= f);
                var g = new a.SceneCanvas({
                    pixelRatio: l,
                    width: i,
                    height: o,
                  }),
                  v = new a.SceneCanvas({ pixelRatio: l, width: 0, height: 0 }),
                  y = new a.HitCanvas({ pixelRatio: 1, width: i, height: o }),
                  m = g.getContext(),
                  b = y.getContext();
                return (
                  (y.isCache = !0),
                  (g.isCache = !0),
                  this._cache.delete('canvas'),
                  (this._filterUpToDate = !1),
                  !1 === e.imageSmoothingEnabled &&
                    ((g.getContext()._context.imageSmoothingEnabled = !1),
                    (v.getContext()._context.imageSmoothingEnabled = !1)),
                  m.save(),
                  b.save(),
                  m.translate(-s, -c),
                  b.translate(-s, -c),
                  (this._isUnderCache = !0),
                  this._clearSelfAndDescendantCache(u),
                  this._clearSelfAndDescendantCache(d),
                  this.drawScene(g, this),
                  this.drawHit(y, this),
                  (this._isUnderCache = !1),
                  m.restore(),
                  b.restore(),
                  p &&
                    (m.save(),
                    m.beginPath(),
                    m.rect(0, 0, i, o),
                    m.closePath(),
                    m.setAttr('strokeStyle', 'red'),
                    m.setAttr('lineWidth', 5),
                    m.stroke(),
                    m.restore()),
                  this._cache.set(h, {
                    scene: g,
                    filter: v,
                    hit: y,
                    x: s,
                    y: c,
                  }),
                  this
                );
              }
              r.Util.error(
                'Can not cache the node. Width or height of the node equals 0. Caching is skipped.'
              );
            }),
            (t.prototype.isCached = function () {
              return this._cache.has('canvas');
            }),
            (t.prototype.getClientRect = function (t) {
              throw new Error('abstract "getClientRect" method call');
            }),
            (t.prototype._transformedRect = function (t, e) {
              var n,
                r,
                i,
                a,
                o = [
                  { x: t.x, y: t.y },
                  { x: t.x + t.width, y: t.y },
                  { x: t.x + t.width, y: t.y + t.height },
                  { x: t.x, y: t.y + t.height },
                ],
                l = this.getAbsoluteTransform(e);
              return (
                o.forEach(function (t) {
                  var e = l.point(t);
                  void 0 === n && ((n = i = e.x), (r = a = e.y)),
                    (n = Math.min(n, e.x)),
                    (r = Math.min(r, e.y)),
                    (i = Math.max(i, e.x)),
                    (a = Math.max(a, e.y));
                }),
                { x: n, y: r, width: i - n, height: a - r }
              );
            }),
            (t.prototype._drawCachedSceneCanvas = function (t) {
              t.save(),
                t._applyOpacity(this),
                t._applyGlobalCompositeOperation(this);
              var e = this._getCanvasCache();
              t.translate(e.x, e.y);
              var n = this._getCachedSceneCanvas(),
                r = n.pixelRatio;
              t.drawImage(n._canvas, 0, 0, n.width / r, n.height / r),
                t.restore();
            }),
            (t.prototype._drawCachedHitCanvas = function (t) {
              var e = this._getCanvasCache(),
                n = e.hit;
              t.save(),
                t.translate(e.x, e.y),
                t.drawImage(n._canvas, 0, 0),
                t.restore();
            }),
            (t.prototype._getCachedSceneCanvas = function () {
              var t,
                e,
                n,
                i,
                a = this.filters(),
                o = this._getCanvasCache(),
                l = o.scene,
                s = o.filter,
                u = s.getContext();
              if (a) {
                if (!this._filterUpToDate) {
                  var c = l.pixelRatio;
                  s.setSize(l.width / l.pixelRatio, l.height / l.pixelRatio);
                  try {
                    for (
                      t = a.length,
                        u.clear(),
                        u.drawImage(
                          l._canvas,
                          0,
                          0,
                          l.getWidth() / c,
                          l.getHeight() / c
                        ),
                        e = u.getImageData(0, 0, s.getWidth(), s.getHeight()),
                        n = 0;
                      n < t;
                      n++
                    )
                      'function' === typeof (i = a[n])
                        ? (i.call(this, e), u.putImageData(e, 0, 0))
                        : r.Util.error(
                            'Filter should be type of function, but got ' +
                              typeof i +
                              ' instead. Please check correct filters'
                          );
                  } catch (f) {
                    r.Util.error(
                      'Unable to apply filter. ' +
                        f.message +
                        ' This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.'
                    );
                  }
                  this._filterUpToDate = !0;
                }
                return s;
              }
              return l;
            }),
            (t.prototype.on = function (t, e) {
              if (
                (this._cache && this._cache.delete(c), 3 === arguments.length)
              )
                return this._delegate.apply(this, arguments);
              var n,
                r,
                i,
                a,
                o = t.split(m),
                l = o.length;
              for (n = 0; n < l; n++)
                (i = (r = o[n].split('.'))[0]),
                  (a = r[1] || ''),
                  this.eventListeners[i] || (this.eventListeners[i] = []),
                  this.eventListeners[i].push({ name: a, handler: e });
              return this;
            }),
            (t.prototype.off = function (t, e) {
              var n,
                r,
                i,
                a,
                o,
                l = (t || '').split(m),
                s = l.length;
              if ((this._cache && this._cache.delete(c), !t))
                for (r in this.eventListeners) this._off(r);
              for (n = 0; n < s; n++)
                if (((a = (i = l[n].split('.'))[0]), (o = i[1]), a))
                  this.eventListeners[a] && this._off(a, o, e);
                else for (r in this.eventListeners) this._off(r, o, e);
              return this;
            }),
            (t.prototype.dispatchEvent = function (t) {
              var e = { target: this, type: t.type, evt: t };
              return this.fire(t.type, e), this;
            }),
            (t.prototype.addEventListener = function (t, e) {
              return (
                this.on(t, function (t) {
                  e.call(this, t.evt);
                }),
                this
              );
            }),
            (t.prototype.removeEventListener = function (t) {
              return this.off(t), this;
            }),
            (t.prototype._delegate = function (t, e, n) {
              var i = this;
              this.on(t, function (t) {
                for (
                  var a = t.target.findAncestors(e, !0, i), o = 0;
                  o < a.length;
                  o++
                )
                  ((t = r.Util.cloneObject(t)).currentTarget = a[o]),
                    n.call(a[o], t);
              });
            }),
            (t.prototype.remove = function () {
              return (
                this.isDragging() && this.stopDrag(),
                l.DD._dragElements.delete(this._id),
                this._remove(),
                this
              );
            }),
            (t.prototype._clearCaches = function () {
              this._clearSelfAndDescendantCache(f),
                this._clearSelfAndDescendantCache(u),
                this._clearSelfAndDescendantCache(d),
                this._clearSelfAndDescendantCache(b),
                this._clearSelfAndDescendantCache(w),
                this._clearSelfAndDescendantCache(p);
            }),
            (t.prototype._remove = function () {
              this._clearCaches();
              var t = this.getParent();
              t &&
                t.children &&
                (t.children.splice(this.index, 1),
                t._setChildrenIndices(),
                (this.parent = null));
            }),
            (t.prototype.destroy = function () {
              e._removeId(this.id(), this);
              for (
                var t = (this.name() || '').split(/\s/g), n = 0;
                n < t.length;
                n++
              ) {
                var r = t[n];
                e._removeName(r, this._id);
              }
              return this.remove(), this;
            }),
            (t.prototype.getAttr = function (t) {
              var e = 'get' + r.Util._capitalize(t);
              return r.Util._isFunction(this[e]) ? this[e]() : this.attrs[t];
            }),
            (t.prototype.getAncestors = function () {
              for (var t = this.getParent(), e = new r.Collection(); t; )
                e.push(t), (t = t.getParent());
              return e;
            }),
            (t.prototype.getAttrs = function () {
              return this.attrs || {};
            }),
            (t.prototype.setAttrs = function (t) {
              var e = this;
              return (
                this._batchTransformChanges(function () {
                  var n, i;
                  if (!t) return e;
                  for (n in t)
                    'children' !== n &&
                      ((i = 'set' + r.Util._capitalize(n)),
                      r.Util._isFunction(e[i])
                        ? e[i](t[n])
                        : e._setAttr(n, t[n]));
                }),
                this
              );
            }),
            (t.prototype.isListening = function () {
              return this._getCache(p, this._isListening);
            }),
            (t.prototype._isListening = function (t) {
              if (!this.listening()) return !1;
              var e = this.getParent();
              return !e || e === t || this === t || e._isListening(t);
            }),
            (t.prototype.isVisible = function () {
              return this._getCache(w, this._isVisible);
            }),
            (t.prototype._isVisible = function (t) {
              if (!this.visible()) return !1;
              var e = this.getParent();
              return !e || e === t || this === t || e._isVisible(t);
            }),
            (t.prototype.shouldDrawHit = function (t) {
              if (t) return this._isVisible(t) && this._isListening(t);
              var e = this.getLayer(),
                n = !1;
              l.DD._dragElements.forEach(function (t) {
                'dragging' === t.dragStatus &&
                  ('Stage' === t.node.nodeType || t.node.getLayer() === e) &&
                  (n = !0);
              });
              var r = !o.Konva.hitOnDragEnabled && n;
              return this.isListening() && this.isVisible() && !r;
            }),
            (t.prototype.show = function () {
              return this.visible(!0), this;
            }),
            (t.prototype.hide = function () {
              return this.visible(!1), this;
            }),
            (t.prototype.getZIndex = function () {
              return this.index || 0;
            }),
            (t.prototype.getAbsoluteZIndex = function () {
              var t,
                e,
                n,
                r,
                i = this.getDepth(),
                a = this,
                o = 0;
              return (
                'Stage' !== a.nodeType &&
                  (function l(s) {
                    for (t = [], e = s.length, n = 0; n < e; n++)
                      (r = s[n]),
                        o++,
                        r.nodeType !== y &&
                          (t = t.concat(r.getChildren().toArray())),
                        r._id === a._id && (n = e);
                    t.length > 0 && t[0].getDepth() <= i && l(t);
                  })(a.getStage().getChildren()),
                o
              );
            }),
            (t.prototype.getDepth = function () {
              for (var t = 0, e = this.parent; e; ) t++, (e = e.parent);
              return t;
            }),
            (t.prototype._batchTransformChanges = function (t) {
              (this._batchingTransformChange = !0),
                t(),
                (this._batchingTransformChange = !1),
                this._needClearTransformCache &&
                  (this._clearCache(_),
                  this._clearSelfAndDescendantCache(f, !0)),
                (this._needClearTransformCache = !1);
            }),
            (t.prototype.setPosition = function (t) {
              var e = this;
              return (
                this._batchTransformChanges(function () {
                  e.x(t.x), e.y(t.y);
                }),
                this
              );
            }),
            (t.prototype.getPosition = function () {
              return { x: this.x(), y: this.y() };
            }),
            (t.prototype.getAbsolutePosition = function (t) {
              for (var e = !1, n = this.parent; n; ) {
                if (n.isCached()) {
                  e = !0;
                  break;
                }
                n = n.parent;
              }
              e && !t && (t = !0);
              var i = this.getAbsoluteTransform(t).getMatrix(),
                a = new r.Transform(),
                o = this.offset();
              return (
                (a.m = i.slice()), a.translate(o.x, o.y), a.getTranslation()
              );
            }),
            (t.prototype.setAbsolutePosition = function (t) {
              var e = this._clearTransform();
              (this.attrs.x = e.x),
                (this.attrs.y = e.y),
                delete e.x,
                delete e.y,
                this._clearCache(_);
              var n = this._getAbsoluteTransform().copy();
              return (
                n.invert(),
                n.translate(t.x, t.y),
                (t = {
                  x: this.attrs.x + n.getTranslation().x,
                  y: this.attrs.y + n.getTranslation().y,
                }),
                this._setTransform(e),
                this.setPosition({ x: t.x, y: t.y }),
                this._clearCache(_),
                this._clearSelfAndDescendantCache(f),
                this
              );
            }),
            (t.prototype._setTransform = function (t) {
              var e;
              for (e in t) this.attrs[e] = t[e];
            }),
            (t.prototype._clearTransform = function () {
              var t = {
                x: this.x(),
                y: this.y(),
                rotation: this.rotation(),
                scaleX: this.scaleX(),
                scaleY: this.scaleY(),
                offsetX: this.offsetX(),
                offsetY: this.offsetY(),
                skewX: this.skewX(),
                skewY: this.skewY(),
              };
              return (
                (this.attrs.x = 0),
                (this.attrs.y = 0),
                (this.attrs.rotation = 0),
                (this.attrs.scaleX = 1),
                (this.attrs.scaleY = 1),
                (this.attrs.offsetX = 0),
                (this.attrs.offsetY = 0),
                (this.attrs.skewX = 0),
                (this.attrs.skewY = 0),
                t
              );
            }),
            (t.prototype.move = function (t) {
              var e = t.x,
                n = t.y,
                r = this.x(),
                i = this.y();
              return (
                void 0 !== e && (r += e),
                void 0 !== n && (i += n),
                this.setPosition({ x: r, y: i }),
                this
              );
            }),
            (t.prototype._eachAncestorReverse = function (t, e) {
              var n,
                r,
                i = [],
                a = this.getParent();
              if (!e || e._id !== this._id) {
                for (i.unshift(this); a && (!e || a._id !== e._id); )
                  i.unshift(a), (a = a.parent);
                for (n = i.length, r = 0; r < n; r++) t(i[r]);
              }
            }),
            (t.prototype.rotate = function (t) {
              return this.rotation(this.rotation() + t), this;
            }),
            (t.prototype.moveToTop = function () {
              if (!this.parent)
                return (
                  r.Util.warn(
                    'Node has no parent. moveToTop function is ignored.'
                  ),
                  !1
                );
              var t = this.index;
              return (
                this.parent.children.splice(t, 1),
                this.parent.children.push(this),
                this.parent._setChildrenIndices(),
                !0
              );
            }),
            (t.prototype.moveUp = function () {
              if (!this.parent)
                return (
                  r.Util.warn(
                    'Node has no parent. moveUp function is ignored.'
                  ),
                  !1
                );
              var t = this.index;
              return (
                t < this.parent.getChildren().length - 1 &&
                (this.parent.children.splice(t, 1),
                this.parent.children.splice(t + 1, 0, this),
                this.parent._setChildrenIndices(),
                !0)
              );
            }),
            (t.prototype.moveDown = function () {
              if (!this.parent)
                return (
                  r.Util.warn(
                    'Node has no parent. moveDown function is ignored.'
                  ),
                  !1
                );
              var t = this.index;
              return (
                t > 0 &&
                (this.parent.children.splice(t, 1),
                this.parent.children.splice(t - 1, 0, this),
                this.parent._setChildrenIndices(),
                !0)
              );
            }),
            (t.prototype.moveToBottom = function () {
              if (!this.parent)
                return (
                  r.Util.warn(
                    'Node has no parent. moveToBottom function is ignored.'
                  ),
                  !1
                );
              var t = this.index;
              return (
                t > 0 &&
                (this.parent.children.splice(t, 1),
                this.parent.children.unshift(this),
                this.parent._setChildrenIndices(),
                !0)
              );
            }),
            (t.prototype.setZIndex = function (t) {
              if (!this.parent)
                return (
                  r.Util.warn(
                    'Node has no parent. zIndex parameter is ignored.'
                  ),
                  this
                );
              (t < 0 || t >= this.parent.children.length) &&
                r.Util.warn(
                  'Unexpected value ' +
                    t +
                    ' for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to ' +
                    (this.parent.children.length - 1) +
                    '.'
                );
              var e = this.index;
              return (
                this.parent.children.splice(e, 1),
                this.parent.children.splice(t, 0, this),
                this.parent._setChildrenIndices(),
                this
              );
            }),
            (t.prototype.getAbsoluteOpacity = function () {
              return this._getCache(u, this._getAbsoluteOpacity);
            }),
            (t.prototype._getAbsoluteOpacity = function () {
              var t = this.opacity(),
                e = this.getParent();
              return e && !e._isUnderCache && (t *= e.getAbsoluteOpacity()), t;
            }),
            (t.prototype.moveTo = function (t) {
              return (
                this.getParent() !== t && (this._remove(), t.add(this)), this
              );
            }),
            (t.prototype.toObject = function () {
              var t,
                e,
                n,
                i,
                a = {},
                o = this.getAttrs();
              for (t in ((a.attrs = {}), o))
                (e = o[t]),
                  (r.Util.isObject(e) &&
                    !r.Util._isPlainObject(e) &&
                    !r.Util._isArray(e)) ||
                    ((n = 'function' === typeof this[t] && this[t]),
                    delete o[t],
                    (i = n ? n.call(this) : null),
                    (o[t] = e),
                    i !== e && (a.attrs[t] = e));
              return (
                (a.className = this.getClassName()),
                r.Util._prepareToStringify(a)
              );
            }),
            (t.prototype.toJSON = function () {
              return JSON.stringify(this.toObject());
            }),
            (t.prototype.getParent = function () {
              return this.parent;
            }),
            (t.prototype.findAncestors = function (t, e, n) {
              var r = [];
              e && this._isMatch(t) && r.push(this);
              for (var i = this.parent; i; ) {
                if (i === n) return r;
                i._isMatch(t) && r.push(i), (i = i.parent);
              }
              return r;
            }),
            (t.prototype.isAncestorOf = function (t) {
              return !1;
            }),
            (t.prototype.findAncestor = function (t, e, n) {
              return this.findAncestors(t, e, n)[0];
            }),
            (t.prototype._isMatch = function (t) {
              if (!t) return !1;
              if ('function' === typeof t) return t(this);
              var e,
                n,
                i = t.replace(/ /g, '').split(','),
                a = i.length;
              for (e = 0; e < a; e++)
                if (
                  ((n = i[e]),
                  r.Util.isValidSelector(n) ||
                    (r.Util.warn(
                      'Selector "' +
                        n +
                        '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'
                    ),
                    r.Util.warn(
                      'If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'
                    ),
                    r.Util.warn('Konva is awesome, right?')),
                  '#' === n.charAt(0))
                ) {
                  if (this.id() === n.slice(1)) return !0;
                } else if ('.' === n.charAt(0)) {
                  if (this.hasName(n.slice(1))) return !0;
                } else if (this.className === n || this.nodeType === n)
                  return !0;
              return !1;
            }),
            (t.prototype.getLayer = function () {
              var t = this.getParent();
              return t ? t.getLayer() : null;
            }),
            (t.prototype.getStage = function () {
              return this._getCache(b, this._getStage);
            }),
            (t.prototype._getStage = function () {
              var t = this.getParent();
              return t ? t.getStage() : void 0;
            }),
            (t.prototype.fire = function (t, e, n) {
              return (
                void 0 === e && (e = {}),
                (e.target = e.target || this),
                n ? this._fireAndBubble(t, e) : this._fire(t, e),
                this
              );
            }),
            (t.prototype.getAbsoluteTransform = function (t) {
              return t
                ? this._getAbsoluteTransform(t)
                : this._getCache(f, this._getAbsoluteTransform);
            }),
            (t.prototype._getAbsoluteTransform = function (t) {
              var e;
              if (t)
                return (
                  (e = new r.Transform()),
                  this._eachAncestorReverse(function (t) {
                    var n = t.transformsEnabled();
                    'all' === n
                      ? e.multiply(t.getTransform())
                      : 'position' === n &&
                        e.translate(t.x() - t.offsetX(), t.y() - t.offsetY());
                  }, t),
                  e
                );
              (e = this._cache.get(f) || new r.Transform()),
                this.parent
                  ? this.parent.getAbsoluteTransform().copyInto(e)
                  : e.reset();
              var n = this.transformsEnabled();
              if ('all' === n) e.multiply(this.getTransform());
              else if ('position' === n) {
                var i = this.attrs.x || 0,
                  a = this.attrs.y || 0,
                  o = this.attrs.offsetX || 0,
                  l = this.attrs.offsetY || 0;
                e.translate(i - o, a - l);
              }
              return (e.dirty = !1), e;
            }),
            (t.prototype.getAbsoluteScale = function (t) {
              for (var e = this; e; )
                e._isUnderCache && (t = e), (e = e.getParent());
              var n = this.getAbsoluteTransform(t).decompose();
              return { x: n.scaleX, y: n.scaleY };
            }),
            (t.prototype.getAbsoluteRotation = function () {
              return this.getAbsoluteTransform().decompose().rotation;
            }),
            (t.prototype.getTransform = function () {
              return this._getCache(_, this._getTransform);
            }),
            (t.prototype._getTransform = function () {
              var t,
                e,
                n = this._cache.get(_) || new r.Transform();
              n.reset();
              var i = this.x(),
                a = this.y(),
                l = o.Konva.getAngle(this.rotation()),
                s = null !== (t = this.attrs.scaleX) && void 0 !== t ? t : 1,
                u = null !== (e = this.attrs.scaleY) && void 0 !== e ? e : 1,
                c = this.attrs.skewX || 0,
                f = this.attrs.skewY || 0,
                d = this.attrs.offsetX || 0,
                h = this.attrs.offsetY || 0;
              return (
                (0 === i && 0 === a) || n.translate(i, a),
                0 !== l && n.rotate(l),
                (0 === c && 0 === f) || n.skew(c, f),
                (1 === s && 1 === u) || n.scale(s, u),
                (0 === d && 0 === h) || n.translate(-1 * d, -1 * h),
                (n.dirty = !1),
                n
              );
            }),
            (t.prototype.clone = function (t) {
              var e,
                n,
                i,
                a,
                o,
                l = r.Util.cloneObject(this.attrs);
              for (e in t) l[e] = t[e];
              var s = new this.constructor(l);
              for (e in this.eventListeners)
                for (i = (n = this.eventListeners[e]).length, a = 0; a < i; a++)
                  (o = n[a]).name.indexOf('konva') < 0 &&
                    (s.eventListeners[e] || (s.eventListeners[e] = []),
                    s.eventListeners[e].push(o));
              return s;
            }),
            (t.prototype._toKonvaCanvas = function (t) {
              t = t || {};
              var e = this.getClientRect(),
                n = this.getStage(),
                r = void 0 !== t.x ? t.x : e.x,
                i = void 0 !== t.y ? t.y : e.y,
                o = t.pixelRatio || 1,
                l = new a.SceneCanvas({
                  width: t.width || e.width || (n ? n.width() : 0),
                  height: t.height || e.height || (n ? n.height() : 0),
                  pixelRatio: o,
                }),
                s = l.getContext();
              return (
                s.save(),
                (r || i) && s.translate(-1 * r, -1 * i),
                this.drawScene(l),
                s.restore(),
                l
              );
            }),
            (t.prototype.toCanvas = function (t) {
              return this._toKonvaCanvas(t)._canvas;
            }),
            (t.prototype.toDataURL = function (t) {
              var e = (t = t || {}).mimeType || null,
                n = t.quality || null,
                r = this._toKonvaCanvas(t).toDataURL(e, n);
              return t.callback && t.callback(r), r;
            }),
            (t.prototype.toImage = function (t) {
              if (!t || !t.callback)
                throw 'callback required for toImage method config argument';
              var e = t.callback;
              delete t.callback,
                r.Util._urlToImage(this.toDataURL(t), function (t) {
                  e(t);
                });
            }),
            (t.prototype.setSize = function (t) {
              return this.width(t.width), this.height(t.height), this;
            }),
            (t.prototype.getSize = function () {
              return { width: this.width(), height: this.height() };
            }),
            (t.prototype.getClassName = function () {
              return this.className || this.nodeType;
            }),
            (t.prototype.getType = function () {
              return this.nodeType;
            }),
            (t.prototype.getDragDistance = function () {
              return void 0 !== this.attrs.dragDistance
                ? this.attrs.dragDistance
                : this.parent
                ? this.parent.getDragDistance()
                : o.Konva.dragDistance;
            }),
            (t.prototype._off = function (t, e, n) {
              var r,
                i,
                a,
                o = this.eventListeners[t];
              for (r = 0; r < o.length; r++)
                if (
                  ((i = o[r].name),
                  (a = o[r].handler),
                  ('konva' !== i || 'konva' === e) &&
                    (!e || i === e) &&
                    (!n || n === a))
                ) {
                  if ((o.splice(r, 1), 0 === o.length)) {
                    delete this.eventListeners[t];
                    break;
                  }
                  r--;
                }
            }),
            (t.prototype._fireChangeEvent = function (t, e, n) {
              this._fire(t + 'Change', { oldVal: e, newVal: n });
            }),
            (t.prototype.setId = function (t) {
              var n = this.id();
              return (
                e._removeId(n, this),
                (function (t, n) {
                  n && (e.ids[n] = t);
                })(this, t),
                this._setAttr('id', t),
                this
              );
            }),
            (t.prototype.setName = function (t) {
              var n,
                r,
                i = (this.name() || '').split(/\s/g),
                a = (t || '').split(/\s/g);
              for (r = 0; r < i.length; r++)
                (n = i[r]),
                  -1 === a.indexOf(n) && n && e._removeName(n, this._id);
              for (r = 0; r < a.length; r++)
                (n = a[r]), -1 === i.indexOf(n) && n && e._addName(this, n);
              return this._setAttr('name', t), this;
            }),
            (t.prototype.addName = function (t) {
              if (!this.hasName(t)) {
                var e = this.name(),
                  n = e ? e + ' ' + t : t;
                this.setName(n);
              }
              return this;
            }),
            (t.prototype.hasName = function (t) {
              if (!t) return !1;
              var e = this.name();
              return !!e && -1 !== (e || '').split(/\s/g).indexOf(t);
            }),
            (t.prototype.removeName = function (t) {
              var e = (this.name() || '').split(/\s/g),
                n = e.indexOf(t);
              return (
                -1 !== n && (e.splice(n, 1), this.setName(e.join(' '))), this
              );
            }),
            (t.prototype.setAttr = function (t, e) {
              var n = this['set' + r.Util._capitalize(t)];
              return (
                r.Util._isFunction(n) ? n.call(this, e) : this._setAttr(t, e),
                this
              );
            }),
            (t.prototype._setAttr = function (t, e, n) {
              void 0 === n && (n = !1);
              var i = this.attrs[t];
              (i !== e || r.Util.isObject(e)) &&
                (void 0 === e || null === e
                  ? delete this.attrs[t]
                  : (this.attrs[t] = e),
                this._shouldFireChangeEvents && this._fireChangeEvent(t, i, e));
            }),
            (t.prototype._setComponentAttr = function (t, e, n) {
              var r;
              void 0 !== n &&
                ((r = this.attrs[t]) || (this.attrs[t] = this.getAttr(t)),
                (this.attrs[t][e] = n),
                this._fireChangeEvent(t, r, n));
            }),
            (t.prototype._fireAndBubble = function (t, e, n) {
              if (
                (e && this.nodeType === y && (e.target = this),
                !(
                  (t === g || t === v) &&
                  ((n &&
                    (this === n ||
                      (this.isAncestorOf && this.isAncestorOf(n)))) ||
                    ('Stage' === this.nodeType && !n))
                ))
              ) {
                this._fire(t, e);
                var r =
                  (t === g || t === v) &&
                  n &&
                  n.isAncestorOf &&
                  n.isAncestorOf(this) &&
                  !n.isAncestorOf(this.parent);
                ((e && !e.cancelBubble) || !e) &&
                  this.parent &&
                  this.parent.isListening() &&
                  !r &&
                  (n && n.parent
                    ? this._fireAndBubble.call(this.parent, t, e, n)
                    : this._fireAndBubble.call(this.parent, t, e));
              }
            }),
            (t.prototype._getProtoListeners = function (t) {
              var e = this._cache.get(c);
              if (!e) {
                e = {};
                for (var n = Object.getPrototypeOf(this); n; )
                  if (n.eventListeners) {
                    for (var r in n.eventListeners) {
                      var i = n.eventListeners[r],
                        a = e[r] || [];
                      e[r] = i.concat(a);
                    }
                    n = Object.getPrototypeOf(n);
                  } else n = Object.getPrototypeOf(n);
                this._cache.set(c, e);
              }
              return e[t];
            }),
            (t.prototype._fire = function (t, e) {
              ((e = e || {}).currentTarget = this), (e.type = t);
              var n = this._getProtoListeners(t);
              if (n)
                for (var r = 0; r < n.length; r++) n[r].handler.call(this, e);
              var i = this.eventListeners[t];
              if (i) for (r = 0; r < i.length; r++) i[r].handler.call(this, e);
            }),
            (t.prototype.draw = function () {
              return this.drawScene(), this.drawHit(), this;
            }),
            (t.prototype._createDragElement = function (t) {
              var e = t ? t.pointerId : void 0,
                n = this.getStage(),
                r = this.getAbsolutePosition(),
                i = n._getPointerById(e) || n._changedPointerPositions[0] || r;
              l.DD._dragElements.set(this._id, {
                node: this,
                startPointerPos: i,
                offset: { x: i.x - r.x, y: i.y - r.y },
                dragStatus: 'ready',
                pointerId: e,
              });
            }),
            (t.prototype.startDrag = function (t, e) {
              void 0 === e && (e = !0),
                l.DD._dragElements.has(this._id) || this._createDragElement(t),
                (l.DD._dragElements.get(this._id).dragStatus = 'dragging'),
                this.fire(
                  'dragstart',
                  { type: 'dragstart', target: this, evt: t && t.evt },
                  e
                );
            }),
            (t.prototype._setDragPosition = function (t, e) {
              var n = this.getStage()._getPointerById(e.pointerId);
              if (n) {
                var i = { x: n.x - e.offset.x, y: n.y - e.offset.y },
                  a = this.dragBoundFunc();
                if (void 0 !== a) {
                  var o = a.call(this, i, t);
                  o
                    ? (i = o)
                    : r.Util.warn(
                        'dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.'
                      );
                }
                (this._lastPos &&
                  this._lastPos.x === i.x &&
                  this._lastPos.y === i.y) ||
                  (this.setAbsolutePosition(i),
                  this.getLayer()
                    ? this.getLayer().batchDraw()
                    : this.getStage() && this.getStage().batchDraw()),
                  (this._lastPos = i);
              }
            }),
            (t.prototype.stopDrag = function (t) {
              var e = l.DD._dragElements.get(this._id);
              e && (e.dragStatus = 'stopped'),
                l.DD._endDragBefore(t),
                l.DD._endDragAfter(t);
            }),
            (t.prototype.setDraggable = function (t) {
              this._setAttr('draggable', t), this._dragChange();
            }),
            (t.prototype.isDragging = function () {
              var t = l.DD._dragElements.get(this._id);
              return !!t && 'dragging' === t.dragStatus;
            }),
            (t.prototype._listenDrag = function () {
              this._dragCleanup(),
                this.on('mousedown.konva touchstart.konva', function (t) {
                  var e = this;
                  if (
                    (!(void 0 !== t.evt.button) ||
                      o.Konva.dragButtons.indexOf(t.evt.button) >= 0) &&
                    !this.isDragging()
                  ) {
                    var n = !1;
                    l.DD._dragElements.forEach(function (t) {
                      e.isAncestorOf(t.node) && (n = !0);
                    }),
                      n || this._createDragElement(t);
                  }
                });
            }),
            (t.prototype._dragChange = function () {
              if (this.attrs.draggable) this._listenDrag();
              else {
                if ((this._dragCleanup(), !this.getStage())) return;
                var t = l.DD._dragElements.get(this._id),
                  e = t && 'dragging' === t.dragStatus,
                  n = t && 'ready' === t.dragStatus;
                e ? this.stopDrag() : n && l.DD._dragElements.delete(this._id);
              }
            }),
            (t.prototype._dragCleanup = function () {
              this.off('mousedown.konva'), this.off('touchstart.konva');
            }),
            (t.create = function (t, e) {
              return (
                r.Util._isString(t) && (t = JSON.parse(t)),
                this._createNode(t, e)
              );
            }),
            (t._createNode = function (e, n) {
              var i,
                a,
                l,
                s = t.prototype.getClassName.call(e),
                u = e.children;
              if (
                (n && (e.attrs.container = n),
                o._NODES_REGISTRY[s] ||
                  (r.Util.warn(
                    'Can not find a node with class name "' +
                      s +
                      '". Fallback to "Shape".'
                  ),
                  (s = 'Shape')),
                (i = new (0, o._NODES_REGISTRY[s])(e.attrs)),
                u)
              )
                for (a = u.length, l = 0; l < a; l++)
                  i.add(t._createNode(u[l]));
              return i;
            }),
            t
          );
        })();
      (e.Node = C),
        (C.prototype.nodeType = 'Node'),
        (C.prototype._attrsAffectingSize = []),
        (C.prototype.eventListeners = {}),
        C.prototype.on.call(C.prototype, S, function () {
          this._batchingTransformChange
            ? (this._needClearTransformCache = !0)
            : (this._clearCache(_), this._clearSelfAndDescendantCache(f));
        }),
        C.prototype.on.call(C.prototype, 'visibleChange.konva', function () {
          this._clearSelfAndDescendantCache(w);
        }),
        C.prototype.on.call(C.prototype, 'listeningChange.konva', function () {
          this._clearSelfAndDescendantCache(p);
        }),
        C.prototype.on.call(C.prototype, 'opacityChange.konva', function () {
          this._clearSelfAndDescendantCache(u);
        });
      var P = i.Factory.addGetterSetter;
      P(C, 'zIndex'),
        P(C, 'absolutePosition'),
        P(C, 'position'),
        P(C, 'x', 0, s.getNumberValidator()),
        P(C, 'y', 0, s.getNumberValidator()),
        P(C, 'globalCompositeOperation', 'source-over', s.getStringValidator()),
        P(C, 'opacity', 1, s.getNumberValidator()),
        P(C, 'name', '', s.getStringValidator()),
        P(C, 'id', '', s.getStringValidator()),
        P(C, 'rotation', 0, s.getNumberValidator()),
        i.Factory.addComponentsGetterSetter(C, 'scale', ['x', 'y']),
        P(C, 'scaleX', 1, s.getNumberValidator()),
        P(C, 'scaleY', 1, s.getNumberValidator()),
        i.Factory.addComponentsGetterSetter(C, 'skew', ['x', 'y']),
        P(C, 'skewX', 0, s.getNumberValidator()),
        P(C, 'skewY', 0, s.getNumberValidator()),
        i.Factory.addComponentsGetterSetter(C, 'offset', ['x', 'y']),
        P(C, 'offsetX', 0, s.getNumberValidator()),
        P(C, 'offsetY', 0, s.getNumberValidator()),
        P(C, 'dragDistance', null, s.getNumberValidator()),
        P(C, 'width', 0, s.getNumberValidator()),
        P(C, 'height', 0, s.getNumberValidator()),
        P(C, 'listening', !0, s.getBooleanValidator()),
        P(C, 'preventDefault', !0, s.getBooleanValidator()),
        P(C, 'filters', null, function (t) {
          return (this._filterUpToDate = !1), t;
        }),
        P(C, 'visible', !0, s.getBooleanValidator()),
        P(C, 'transformsEnabled', 'all', s.getStringValidator()),
        P(C, 'size'),
        P(C, 'dragBoundFunc'),
        P(C, 'draggable', !1, s.getBooleanValidator()),
        i.Factory.backCompat(C, {
          rotateDeg: 'rotate',
          setRotationDeg: 'setRotation',
          getRotationDeg: 'getRotation',
        }),
        r.Collection.mapMethods(C);
    },
    function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return _;
      }),
        n.d(e, 'b', function () {
          return k;
        }),
        n.d(e, 'c', function () {
          return g;
        }),
        n.d(e, 'd', function () {
          return N;
        }),
        n.d(e, 'e', function () {
          return p;
        }),
        n.d(e, 'f', function () {
          return x;
        }),
        n.d(e, 'g', function () {
          return A;
        });
      var r = n(11),
        i = n(1),
        a = n.n(i),
        o = (n(16), n(13)),
        l = n(27),
        s = n(12),
        u = n(8),
        c = n(28),
        f = n.n(c),
        d = (n(40), n(14)),
        h =
          (n(42),
          (function (t) {
            var e = Object(l.a)();
            return (e.displayName = t), e;
          })('Router-History')),
        p = (function (t) {
          var e = Object(l.a)();
          return (e.displayName = t), e;
        })('Router'),
        g = (function (t) {
          function e(e) {
            var n;
            return (
              ((n = t.call(this, e) || this).state = {
                location: e.history.location,
              }),
              (n._isMounted = !1),
              (n._pendingLocation = null),
              e.staticContext ||
                (n.unlisten = e.history.listen(function (t) {
                  n._isMounted
                    ? n.setState({ location: t })
                    : (n._pendingLocation = t);
                })),
              n
            );
          }
          Object(r.a)(e, t),
            (e.computeRootMatch = function (t) {
              return { path: '/', url: '/', params: {}, isExact: '/' === t };
            });
          var n = e.prototype;
          return (
            (n.componentDidMount = function () {
              (this._isMounted = !0),
                this._pendingLocation &&
                  this.setState({ location: this._pendingLocation });
            }),
            (n.componentWillUnmount = function () {
              this.unlisten && this.unlisten();
            }),
            (n.render = function () {
              return a.a.createElement(
                p.Provider,
                {
                  value: {
                    history: this.props.history,
                    location: this.state.location,
                    match: e.computeRootMatch(this.state.location.pathname),
                    staticContext: this.props.staticContext,
                  },
                },
                a.a.createElement(h.Provider, {
                  children: this.props.children || null,
                  value: this.props.history,
                })
              );
            }),
            e
          );
        })(a.a.Component);
      a.a.Component;
      var v = (function (t) {
        function e() {
          return t.apply(this, arguments) || this;
        }
        Object(r.a)(e, t);
        var n = e.prototype;
        return (
          (n.componentDidMount = function () {
            this.props.onMount && this.props.onMount.call(this, this);
          }),
          (n.componentDidUpdate = function (t) {
            this.props.onUpdate && this.props.onUpdate.call(this, this, t);
          }),
          (n.componentWillUnmount = function () {
            this.props.onUnmount && this.props.onUnmount.call(this, this);
          }),
          (n.render = function () {
            return null;
          }),
          e
        );
      })(a.a.Component);
      var y = {},
        m = 0;
      function b(t, e) {
        return (
          void 0 === t && (t = '/'),
          void 0 === e && (e = {}),
          '/' === t
            ? t
            : (function (t) {
                if (y[t]) return y[t];
                var e = f.a.compile(t);
                return m < 1e4 && ((y[t] = e), m++), e;
              })(t)(e, { pretty: !0 })
        );
      }
      function _(t) {
        var e = t.computedMatch,
          n = t.to,
          r = t.push,
          i = void 0 !== r && r;
        return a.a.createElement(p.Consumer, null, function (t) {
          t || Object(s.a)(!1);
          var r = t.history,
            l = t.staticContext,
            c = i ? r.push : r.replace,
            f = Object(o.c)(
              e
                ? 'string' === typeof n
                  ? b(n, e.params)
                  : Object(u.a)({}, n, { pathname: b(n.pathname, e.params) })
                : n
            );
          return l
            ? (c(f), null)
            : a.a.createElement(v, {
                onMount: function () {
                  c(f);
                },
                onUpdate: function (t, e) {
                  var n = Object(o.c)(e.to);
                  Object(o.f)(n, Object(u.a)({}, f, { key: n.key })) || c(f);
                },
                to: n,
              });
        });
      }
      var w = {},
        S = 0;
      function x(t, e) {
        void 0 === e && (e = {}),
          ('string' === typeof e || Array.isArray(e)) && (e = { path: e });
        var n = e,
          r = n.path,
          i = n.exact,
          a = void 0 !== i && i,
          o = n.strict,
          l = void 0 !== o && o,
          s = n.sensitive,
          u = void 0 !== s && s;
        return [].concat(r).reduce(function (e, n) {
          if (!n && '' !== n) return null;
          if (e) return e;
          var r = (function (t, e) {
              var n = '' + e.end + e.strict + e.sensitive,
                r = w[n] || (w[n] = {});
              if (r[t]) return r[t];
              var i = [],
                a = { regexp: f()(t, i, e), keys: i };
              return S < 1e4 && ((r[t] = a), S++), a;
            })(n, { end: a, strict: l, sensitive: u }),
            i = r.regexp,
            o = r.keys,
            s = i.exec(t);
          if (!s) return null;
          var c = s[0],
            d = s.slice(1),
            h = t === c;
          return a && !h
            ? null
            : {
                path: n,
                url: '/' === n && '' === c ? '/' : c,
                isExact: h,
                params: o.reduce(function (t, e, n) {
                  return (t[e.name] = d[n]), t;
                }, {}),
              };
        }, null);
      }
      var k = (function (t) {
        function e() {
          return t.apply(this, arguments) || this;
        }
        return (
          Object(r.a)(e, t),
          (e.prototype.render = function () {
            var t = this;
            return a.a.createElement(p.Consumer, null, function (e) {
              e || Object(s.a)(!1);
              var n = t.props.location || e.location,
                r = t.props.computedMatch
                  ? t.props.computedMatch
                  : t.props.path
                  ? x(n.pathname, t.props)
                  : e.match,
                i = Object(u.a)({}, e, { location: n, match: r }),
                o = t.props,
                l = o.children,
                c = o.component,
                f = o.render;
              return (
                Array.isArray(l) && 0 === l.length && (l = null),
                a.a.createElement(
                  p.Provider,
                  { value: i },
                  i.match
                    ? l
                      ? 'function' === typeof l
                        ? l(i)
                        : l
                      : c
                      ? a.a.createElement(c, i)
                      : f
                      ? f(i)
                      : null
                    : 'function' === typeof l
                    ? l(i)
                    : null
                )
              );
            });
          }),
          e
        );
      })(a.a.Component);
      function C(t) {
        return '/' === t.charAt(0) ? t : '/' + t;
      }
      function P(t, e) {
        if (!t) return e;
        var n = C(t);
        return 0 !== e.pathname.indexOf(n)
          ? e
          : Object(u.a)({}, e, { pathname: e.pathname.substr(n.length) });
      }
      function E(t) {
        return 'string' === typeof t ? t : Object(o.e)(t);
      }
      function T(t) {
        return function () {
          Object(s.a)(!1);
        };
      }
      function O() {}
      a.a.Component;
      var N = (function (t) {
        function e() {
          return t.apply(this, arguments) || this;
        }
        return (
          Object(r.a)(e, t),
          (e.prototype.render = function () {
            var t = this;
            return a.a.createElement(p.Consumer, null, function (e) {
              e || Object(s.a)(!1);
              var n,
                r,
                i = t.props.location || e.location;
              return (
                a.a.Children.forEach(t.props.children, function (t) {
                  if (null == r && a.a.isValidElement(t)) {
                    n = t;
                    var o = t.props.path || t.props.from;
                    r = o
                      ? x(i.pathname, Object(u.a)({}, t.props, { path: o }))
                      : e.match;
                  }
                }),
                r
                  ? a.a.cloneElement(n, { location: i, computedMatch: r })
                  : null
              );
            });
          }),
          e
        );
      })(a.a.Component);
      var M = a.a.useContext;
      function A() {
        return M(h);
      }
    },
    function (t, e, n) {
      'use strict';
      function r() {
        return (r =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i,
        a = n(5),
        o = n(2),
        l = n(6),
        s = n(4),
        u = n(3),
        c = n(33),
        f = 'hasShadow',
        d = 'shadowRGBA',
        h = 'patternImage',
        p = 'linearGradient',
        g = 'radialGradient';
      function v() {
        return i || (i = a.Util.createCanvasElement().getContext('2d'));
      }
      e.shapes = {};
      var y = (function (t) {
        function n(n) {
          for (
            var r, i = t.call(this, n) || this;
            !(r = a.Util.getRandomColor()) || r in e.shapes;

          );
          return (i.colorKey = r), (e.shapes[r] = i), i;
        }
        return (
          r(n, t),
          (n.prototype.getContext = function () {
            return this.getLayer().getContext();
          }),
          (n.prototype.getCanvas = function () {
            return this.getLayer().getCanvas();
          }),
          (n.prototype.getSceneFunc = function () {
            return this.attrs.sceneFunc || this._sceneFunc;
          }),
          (n.prototype.getHitFunc = function () {
            return this.attrs.hitFunc || this._hitFunc;
          }),
          (n.prototype.hasShadow = function () {
            return this._getCache(f, this._hasShadow);
          }),
          (n.prototype._hasShadow = function () {
            return (
              this.shadowEnabled() &&
              0 !== this.shadowOpacity() &&
              !!(
                this.shadowColor() ||
                this.shadowBlur() ||
                this.shadowOffsetX() ||
                this.shadowOffsetY()
              )
            );
          }),
          (n.prototype._getFillPattern = function () {
            return this._getCache(h, this.__getFillPattern);
          }),
          (n.prototype.__getFillPattern = function () {
            if (this.fillPatternImage()) {
              var t = v().createPattern(
                this.fillPatternImage(),
                this.fillPatternRepeat() || 'repeat'
              );
              return (
                t &&
                  t.setTransform &&
                  t.setTransform({
                    a: this.fillPatternScaleX(),
                    b: 0,
                    c: 0,
                    d: this.fillPatternScaleY(),
                    e: 0,
                    f: 0,
                  }),
                t
              );
            }
          }),
          (n.prototype._getLinearGradient = function () {
            return this._getCache(p, this.__getLinearGradient);
          }),
          (n.prototype.__getLinearGradient = function () {
            var t = this.fillLinearGradientColorStops();
            if (t) {
              for (
                var e = v(),
                  n = this.fillLinearGradientStartPoint(),
                  r = this.fillLinearGradientEndPoint(),
                  i = e.createLinearGradient(n.x, n.y, r.x, r.y),
                  a = 0;
                a < t.length;
                a += 2
              )
                i.addColorStop(t[a], t[a + 1]);
              return i;
            }
          }),
          (n.prototype._getRadialGradient = function () {
            return this._getCache(g, this.__getRadialGradient);
          }),
          (n.prototype.__getRadialGradient = function () {
            var t = this.fillRadialGradientColorStops();
            if (t) {
              for (
                var e = v(),
                  n = this.fillRadialGradientStartPoint(),
                  r = this.fillRadialGradientEndPoint(),
                  i = e.createRadialGradient(
                    n.x,
                    n.y,
                    this.fillRadialGradientStartRadius(),
                    r.x,
                    r.y,
                    this.fillRadialGradientEndRadius()
                  ),
                  a = 0;
                a < t.length;
                a += 2
              )
                i.addColorStop(t[a], t[a + 1]);
              return i;
            }
          }),
          (n.prototype.getShadowRGBA = function () {
            return this._getCache(d, this._getShadowRGBA);
          }),
          (n.prototype._getShadowRGBA = function () {
            if (this.hasShadow()) {
              var t = a.Util.colorToRGBA(this.shadowColor());
              return (
                'rgba(' +
                t.r +
                ',' +
                t.g +
                ',' +
                t.b +
                ',' +
                t.a * (this.shadowOpacity() || 1) +
                ')'
              );
            }
          }),
          (n.prototype.hasFill = function () {
            var t = this;
            return this._calculate(
              'hasFill',
              [
                'fillEnabled',
                'fill',
                'fillPatternImage',
                'fillLinearGradientColorStops',
                'fillRadialGradientColorStops',
              ],
              function () {
                return (
                  t.fillEnabled() &&
                  !!(
                    t.fill() ||
                    t.fillPatternImage() ||
                    t.fillLinearGradientColorStops() ||
                    t.fillRadialGradientColorStops()
                  )
                );
              }
            );
          }),
          (n.prototype.hasStroke = function () {
            var t = this;
            return this._calculate(
              'hasStroke',
              [
                'strokeEnabled',
                'strokeWidth',
                'stroke',
                'strokeLinearGradientColorStops',
              ],
              function () {
                return (
                  t.strokeEnabled() &&
                  t.strokeWidth() &&
                  !(!t.stroke() && !t.strokeLinearGradientColorStops())
                );
              }
            );
          }),
          (n.prototype.hasHitStroke = function () {
            var t = this.hitStrokeWidth();
            return 'auto' === t
              ? this.hasStroke()
              : this.strokeEnabled() && !!t;
          }),
          (n.prototype.intersects = function (t) {
            var e = this.getStage().bufferHitCanvas;
            return (
              e.getContext().clear(),
              this.drawHit(e),
              e.context.getImageData(Math.round(t.x), Math.round(t.y), 1, 1)
                .data[3] > 0
            );
          }),
          (n.prototype.destroy = function () {
            return (
              l.Node.prototype.destroy.call(this),
              delete e.shapes[this.colorKey],
              delete this.colorKey,
              this
            );
          }),
          (n.prototype._useBufferCanvas = function (t) {
            var e;
            if (!this.getStage()) return !1;
            if (
              !(
                null === (e = this.attrs.perfectDrawEnabled) ||
                void 0 === e ||
                e
              )
            )
              return !1;
            var n = t || this.hasFill(),
              r = this.hasStroke(),
              i = 1 !== this.getAbsoluteOpacity();
            if (n && r && i) return !0;
            var a = this.hasShadow(),
              o = this.shadowForStrokeEnabled();
            return !!(n && r && a && o);
          }),
          (n.prototype.setStrokeHitEnabled = function (t) {
            a.Util.warn(
              'strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead.'
            ),
              t ? this.hitStrokeWidth('auto') : this.hitStrokeWidth(0);
          }),
          (n.prototype.getStrokeHitEnabled = function () {
            return 0 !== this.hitStrokeWidth();
          }),
          (n.prototype.getSelfRect = function () {
            var t = this.size();
            return {
              x: this._centroid ? -t.width / 2 : 0,
              y: this._centroid ? -t.height / 2 : 0,
              width: t.width,
              height: t.height,
            };
          }),
          (n.prototype.getClientRect = function (t) {
            void 0 === t && (t = {});
            var e = t.skipTransform,
              n = t.relativeTo,
              r = this.getSelfRect(),
              i =
                (!t.skipStroke && this.hasStroke() && this.strokeWidth()) || 0,
              a = r.width + i,
              o = r.height + i,
              l = !t.skipShadow && this.hasShadow(),
              s = l ? this.shadowOffsetX() : 0,
              u = l ? this.shadowOffsetY() : 0,
              c = a + Math.abs(s),
              f = o + Math.abs(u),
              d = (l && this.shadowBlur()) || 0,
              h = c + 2 * d,
              p = f + 2 * d,
              g = 0;
            Math.round(i / 2) !== i / 2 && (g = 1);
            var v = {
              width: h + g,
              height: p + g,
              x: -Math.round(i / 2 + d) + Math.min(s, 0) + r.x,
              y: -Math.round(i / 2 + d) + Math.min(u, 0) + r.y,
            };
            return e ? v : this._transformedRect(v, n);
          }),
          (n.prototype.drawScene = function (t, e) {
            var n,
              r,
              i = this.getLayer(),
              a = t || i.getCanvas(),
              o = a.getContext(),
              l = this._getCanvasCache(),
              s = this.getSceneFunc(),
              u = this.hasShadow(),
              c = a.isCache,
              f = a.isCache,
              d = e === this;
            if (!this.isVisible() && !c) return this;
            if (l) {
              o.save();
              var h = this.getAbsoluteTransform(e).getMatrix();
              return (
                o.transform(h[0], h[1], h[2], h[3], h[4], h[5]),
                this._drawCachedSceneCanvas(o),
                o.restore(),
                this
              );
            }
            if (!s) return this;
            if ((o.save(), this._useBufferCanvas() && !f)) {
              (r = (n = this.getStage().bufferCanvas).getContext()).clear(),
                r.save(),
                r._applyLineJoin(this);
              var p = this.getAbsoluteTransform(e).getMatrix();
              r.transform(p[0], p[1], p[2], p[3], p[4], p[5]),
                s.call(this, r, this),
                r.restore();
              var g = n.pixelRatio;
              u && o._applyShadow(this),
                o._applyOpacity(this),
                o._applyGlobalCompositeOperation(this),
                o.drawImage(n._canvas, 0, 0, n.width / g, n.height / g);
            } else {
              if ((o._applyLineJoin(this), !d)) {
                p = this.getAbsoluteTransform(e).getMatrix();
                o.transform(p[0], p[1], p[2], p[3], p[4], p[5]),
                  o._applyOpacity(this),
                  o._applyGlobalCompositeOperation(this);
              }
              u && o._applyShadow(this), s.call(this, o, this);
            }
            return o.restore(), this;
          }),
          (n.prototype.drawHit = function (t, e) {
            if (!this.shouldDrawHit(e)) return this;
            var n = this.getLayer(),
              r = t || n.hitCanvas,
              i = r && r.getContext(),
              o = this.hitFunc() || this.sceneFunc(),
              l = this._getCanvasCache(),
              s = l && l.hit;
            if (
              (this.colorKey ||
                (console.log(this),
                a.Util.warn(
                  'Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. See the shape in logs above. If you want to reuse shape you should call remove() instead of destroy()'
                )),
              s)
            ) {
              i.save();
              var u = this.getAbsoluteTransform(e).getMatrix();
              return (
                i.transform(u[0], u[1], u[2], u[3], u[4], u[5]),
                this._drawCachedHitCanvas(i),
                i.restore(),
                this
              );
            }
            if (!o) return this;
            if ((i.save(), i._applyLineJoin(this), !(this === e))) {
              var c = this.getAbsoluteTransform(e).getMatrix();
              i.transform(c[0], c[1], c[2], c[3], c[4], c[5]);
            }
            return o.call(this, i, this), i.restore(), this;
          }),
          (n.prototype.drawHitFromCache = function (t) {
            void 0 === t && (t = 0);
            var e,
              n,
              r,
              i,
              o,
              l = this._getCanvasCache(),
              s = this._getCachedSceneCanvas(),
              u = l.hit,
              c = u.getContext(),
              f = u.getWidth(),
              d = u.getHeight();
            c.clear(), c.drawImage(s._canvas, 0, 0, f, d);
            try {
              for (
                r = (n = (e = c.getImageData(0, 0, f, d)).data).length,
                  i = a.Util._hexToRgb(this.colorKey),
                  o = 0;
                o < r;
                o += 4
              )
                n[o + 3] > t
                  ? ((n[o] = i.r),
                    (n[o + 1] = i.g),
                    (n[o + 2] = i.b),
                    (n[o + 3] = 255))
                  : (n[o + 3] = 0);
              c.putImageData(e, 0, 0);
            } catch (h) {
              a.Util.error(
                'Unable to draw hit graph from cached scene canvas. ' +
                  h.message
              );
            }
            return this;
          }),
          (n.prototype.hasPointerCapture = function (t) {
            return c.hasPointerCapture(t, this);
          }),
          (n.prototype.setPointerCapture = function (t) {
            c.setPointerCapture(t, this);
          }),
          (n.prototype.releaseCapture = function (t) {
            c.releaseCapture(t, this);
          }),
          n
        );
      })(l.Node);
      (e.Shape = y),
        (y.prototype._fillFunc = function (t) {
          t.fill();
        }),
        (y.prototype._strokeFunc = function (t) {
          t.stroke();
        }),
        (y.prototype._fillFuncHit = function (t) {
          t.fill();
        }),
        (y.prototype._strokeFuncHit = function (t) {
          t.stroke();
        }),
        (y.prototype._centroid = !1),
        (y.prototype.nodeType = 'Shape'),
        u._registerNode(y),
        (y.prototype.eventListeners = {}),
        y.prototype.on.call(
          y.prototype,
          'shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva',
          function () {
            this._clearCache(f);
          }
        ),
        y.prototype.on.call(
          y.prototype,
          'shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva',
          function () {
            this._clearCache(d);
          }
        ),
        y.prototype.on.call(
          y.prototype,
          'fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva',
          function () {
            this._clearCache(h);
          }
        ),
        y.prototype.on.call(
          y.prototype,
          'fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva',
          function () {
            this._clearCache(p);
          }
        ),
        y.prototype.on.call(
          y.prototype,
          'fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva',
          function () {
            this._clearCache(g);
          }
        ),
        o.Factory.addGetterSetter(
          y,
          'stroke',
          void 0,
          s.getStringOrGradientValidator()
        ),
        o.Factory.addGetterSetter(y, 'strokeWidth', 2, s.getNumberValidator()),
        o.Factory.addGetterSetter(
          y,
          'hitStrokeWidth',
          'auto',
          s.getNumberOrAutoValidator()
        ),
        o.Factory.addGetterSetter(
          y,
          'strokeHitEnabled',
          !0,
          s.getBooleanValidator()
        ),
        o.Factory.addGetterSetter(
          y,
          'perfectDrawEnabled',
          !0,
          s.getBooleanValidator()
        ),
        o.Factory.addGetterSetter(
          y,
          'shadowForStrokeEnabled',
          !0,
          s.getBooleanValidator()
        ),
        o.Factory.addGetterSetter(y, 'lineJoin'),
        o.Factory.addGetterSetter(y, 'lineCap'),
        o.Factory.addGetterSetter(y, 'sceneFunc'),
        o.Factory.addGetterSetter(y, 'hitFunc'),
        o.Factory.addGetterSetter(y, 'dash'),
        o.Factory.addGetterSetter(y, 'dashOffset', 0, s.getNumberValidator()),
        o.Factory.addGetterSetter(
          y,
          'shadowColor',
          void 0,
          s.getStringValidator()
        ),
        o.Factory.addGetterSetter(y, 'shadowBlur', 0, s.getNumberValidator()),
        o.Factory.addGetterSetter(
          y,
          'shadowOpacity',
          1,
          s.getNumberValidator()
        ),
        o.Factory.addComponentsGetterSetter(y, 'shadowOffset', ['x', 'y']),
        o.Factory.addGetterSetter(
          y,
          'shadowOffsetX',
          0,
          s.getNumberValidator()
        ),
        o.Factory.addGetterSetter(
          y,
          'shadowOffsetY',
          0,
          s.getNumberValidator()
        ),
        o.Factory.addGetterSetter(y, 'fillPatternImage'),
        o.Factory.addGetterSetter(
          y,
          'fill',
          void 0,
          s.getStringOrGradientValidator()
        ),
        o.Factory.addGetterSetter(y, 'fillPatternX', 0, s.getNumberValidator()),
        o.Factory.addGetterSetter(y, 'fillPatternY', 0, s.getNumberValidator()),
        o.Factory.addGetterSetter(y, 'fillLinearGradientColorStops'),
        o.Factory.addGetterSetter(y, 'strokeLinearGradientColorStops'),
        o.Factory.addGetterSetter(y, 'fillRadialGradientStartRadius', 0),
        o.Factory.addGetterSetter(y, 'fillRadialGradientEndRadius', 0),
        o.Factory.addGetterSetter(y, 'fillRadialGradientColorStops'),
        o.Factory.addGetterSetter(y, 'fillPatternRepeat', 'repeat'),
        o.Factory.addGetterSetter(y, 'fillEnabled', !0),
        o.Factory.addGetterSetter(y, 'strokeEnabled', !0),
        o.Factory.addGetterSetter(y, 'shadowEnabled', !0),
        o.Factory.addGetterSetter(y, 'dashEnabled', !0),
        o.Factory.addGetterSetter(y, 'strokeScaleEnabled', !0),
        o.Factory.addGetterSetter(y, 'fillPriority', 'color'),
        o.Factory.addComponentsGetterSetter(y, 'fillPatternOffset', ['x', 'y']),
        o.Factory.addGetterSetter(
          y,
          'fillPatternOffsetX',
          0,
          s.getNumberValidator()
        ),
        o.Factory.addGetterSetter(
          y,
          'fillPatternOffsetY',
          0,
          s.getNumberValidator()
        ),
        o.Factory.addComponentsGetterSetter(y, 'fillPatternScale', ['x', 'y']),
        o.Factory.addGetterSetter(
          y,
          'fillPatternScaleX',
          1,
          s.getNumberValidator()
        ),
        o.Factory.addGetterSetter(
          y,
          'fillPatternScaleY',
          1,
          s.getNumberValidator()
        ),
        o.Factory.addComponentsGetterSetter(y, 'fillLinearGradientStartPoint', [
          'x',
          'y',
        ]),
        o.Factory.addComponentsGetterSetter(
          y,
          'strokeLinearGradientStartPoint',
          ['x', 'y']
        ),
        o.Factory.addGetterSetter(y, 'fillLinearGradientStartPointX', 0),
        o.Factory.addGetterSetter(y, 'strokeLinearGradientStartPointX', 0),
        o.Factory.addGetterSetter(y, 'fillLinearGradientStartPointY', 0),
        o.Factory.addGetterSetter(y, 'strokeLinearGradientStartPointY', 0),
        o.Factory.addComponentsGetterSetter(y, 'fillLinearGradientEndPoint', [
          'x',
          'y',
        ]),
        o.Factory.addComponentsGetterSetter(y, 'strokeLinearGradientEndPoint', [
          'x',
          'y',
        ]),
        o.Factory.addGetterSetter(y, 'fillLinearGradientEndPointX', 0),
        o.Factory.addGetterSetter(y, 'strokeLinearGradientEndPointX', 0),
        o.Factory.addGetterSetter(y, 'fillLinearGradientEndPointY', 0),
        o.Factory.addGetterSetter(y, 'strokeLinearGradientEndPointY', 0),
        o.Factory.addComponentsGetterSetter(y, 'fillRadialGradientStartPoint', [
          'x',
          'y',
        ]),
        o.Factory.addGetterSetter(y, 'fillRadialGradientStartPointX', 0),
        o.Factory.addGetterSetter(y, 'fillRadialGradientStartPointY', 0),
        o.Factory.addComponentsGetterSetter(y, 'fillRadialGradientEndPoint', [
          'x',
          'y',
        ]),
        o.Factory.addGetterSetter(y, 'fillRadialGradientEndPointX', 0),
        o.Factory.addGetterSetter(y, 'fillRadialGradientEndPointY', 0),
        o.Factory.addGetterSetter(y, 'fillPatternRotation', 0),
        o.Factory.backCompat(y, {
          dashArray: 'dash',
          getDashArray: 'getDash',
          setDashArray: 'getDash',
          drawFunc: 'sceneFunc',
          getDrawFunc: 'getSceneFunc',
          setDrawFunc: 'setSceneFunc',
          drawHitFunc: 'hitFunc',
          getDrawHitFunc: 'getHitFunc',
          setDrawHitFunc: 'setHitFunc',
        }),
        a.Collection.mapMethods(y);
    },
    function (t, e, n) {
      'use strict';
      function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function i(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t)) {
              var n = [],
                r = !0,
                i = !1,
                a = void 0;
              try {
                for (
                  var o, l = t[Symbol.iterator]();
                  !(r = (o = l.next()).done) &&
                  (n.push(o.value), !e || n.length !== e);
                  r = !0
                );
              } catch (s) {
                (i = !0), (a = s);
              } finally {
                try {
                  r || null == l.return || l.return();
                } finally {
                  if (i) throw a;
                }
              }
              return n;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ('string' === typeof t) return r(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              return (
                'Object' === n && t.constructor && (n = t.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(t)
                  : 'Arguments' === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? r(t, e)
                  : void 0
              );
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      n.d(e, 'a', function () {
        return i;
      });
    },
    function (t, e, n) {
      'use strict';
      function r(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    function (t, e, n) {
      'use strict';
      var r = 'Invariant failed';
      e.a = function (t, e) {
        if (!t) throw new Error(r);
      };
    },
    function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return x;
      }),
        n.d(e, 'b', function () {
          return O;
        }),
        n.d(e, 'd', function () {
          return M;
        }),
        n.d(e, 'c', function () {
          return g;
        }),
        n.d(e, 'f', function () {
          return v;
        }),
        n.d(e, 'e', function () {
          return p;
        });
      var r = n(8);
      function i(t) {
        return '/' === t.charAt(0);
      }
      function a(t, e) {
        for (var n = e, r = n + 1, i = t.length; r < i; n += 1, r += 1)
          t[n] = t[r];
        t.pop();
      }
      var o = function (t, e) {
        void 0 === e && (e = '');
        var n,
          r = (t && t.split('/')) || [],
          o = (e && e.split('/')) || [],
          l = t && i(t),
          s = e && i(e),
          u = l || s;
        if (
          (t && i(t) ? (o = r) : r.length && (o.pop(), (o = o.concat(r))),
          !o.length)
        )
          return '/';
        if (o.length) {
          var c = o[o.length - 1];
          n = '.' === c || '..' === c || '' === c;
        } else n = !1;
        for (var f = 0, d = o.length; d >= 0; d--) {
          var h = o[d];
          '.' === h
            ? a(o, d)
            : '..' === h
            ? (a(o, d), f++)
            : f && (a(o, d), f--);
        }
        if (!u) for (; f--; f) o.unshift('..');
        !u || '' === o[0] || (o[0] && i(o[0])) || o.unshift('');
        var p = o.join('/');
        return n && '/' !== p.substr(-1) && (p += '/'), p;
      };
      function l(t) {
        return t.valueOf ? t.valueOf() : Object.prototype.valueOf.call(t);
      }
      var s = function t(e, n) {
          if (e === n) return !0;
          if (null == e || null == n) return !1;
          if (Array.isArray(e))
            return (
              Array.isArray(n) &&
              e.length === n.length &&
              e.every(function (e, r) {
                return t(e, n[r]);
              })
            );
          if ('object' === typeof e || 'object' === typeof n) {
            var r = l(e),
              i = l(n);
            return r !== e || i !== n
              ? t(r, i)
              : Object.keys(Object.assign({}, e, n)).every(function (r) {
                  return t(e[r], n[r]);
                });
          }
          return !1;
        },
        u = n(12);
      function c(t) {
        return '/' === t.charAt(0) ? t : '/' + t;
      }
      function f(t) {
        return '/' === t.charAt(0) ? t.substr(1) : t;
      }
      function d(t, e) {
        return (function (t, e) {
          return (
            0 === t.toLowerCase().indexOf(e.toLowerCase()) &&
            -1 !== '/?#'.indexOf(t.charAt(e.length))
          );
        })(t, e)
          ? t.substr(e.length)
          : t;
      }
      function h(t) {
        return '/' === t.charAt(t.length - 1) ? t.slice(0, -1) : t;
      }
      function p(t) {
        var e = t.pathname,
          n = t.search,
          r = t.hash,
          i = e || '/';
        return (
          n && '?' !== n && (i += '?' === n.charAt(0) ? n : '?' + n),
          r && '#' !== r && (i += '#' === r.charAt(0) ? r : '#' + r),
          i
        );
      }
      function g(t, e, n, i) {
        var a;
        'string' === typeof t
          ? ((a = (function (t) {
              var e = t || '/',
                n = '',
                r = '',
                i = e.indexOf('#');
              -1 !== i && ((r = e.substr(i)), (e = e.substr(0, i)));
              var a = e.indexOf('?');
              return (
                -1 !== a && ((n = e.substr(a)), (e = e.substr(0, a))),
                {
                  pathname: e,
                  search: '?' === n ? '' : n,
                  hash: '#' === r ? '' : r,
                }
              );
            })(t)).state = e)
          : (void 0 === (a = Object(r.a)({}, t)).pathname && (a.pathname = ''),
            a.search
              ? '?' !== a.search.charAt(0) && (a.search = '?' + a.search)
              : (a.search = ''),
            a.hash
              ? '#' !== a.hash.charAt(0) && (a.hash = '#' + a.hash)
              : (a.hash = ''),
            void 0 !== e && void 0 === a.state && (a.state = e));
        try {
          a.pathname = decodeURI(a.pathname);
        } catch (l) {
          throw l instanceof URIError
            ? new URIError(
                'Pathname "' +
                  a.pathname +
                  '" could not be decoded. This is likely caused by an invalid percent-encoding.'
              )
            : l;
        }
        return (
          n && (a.key = n),
          i
            ? a.pathname
              ? '/' !== a.pathname.charAt(0) &&
                (a.pathname = o(a.pathname, i.pathname))
              : (a.pathname = i.pathname)
            : a.pathname || (a.pathname = '/'),
          a
        );
      }
      function v(t, e) {
        return (
          t.pathname === e.pathname &&
          t.search === e.search &&
          t.hash === e.hash &&
          t.key === e.key &&
          s(t.state, e.state)
        );
      }
      function y() {
        var t = null;
        var e = [];
        return {
          setPrompt: function (e) {
            return (
              (t = e),
              function () {
                t === e && (t = null);
              }
            );
          },
          confirmTransitionTo: function (e, n, r, i) {
            if (null != t) {
              var a = 'function' === typeof t ? t(e, n) : t;
              'string' === typeof a
                ? 'function' === typeof r
                  ? r(a, i)
                  : i(!0)
                : i(!1 !== a);
            } else i(!0);
          },
          appendListener: function (t) {
            var n = !0;
            function r() {
              n && t.apply(void 0, arguments);
            }
            return (
              e.push(r),
              function () {
                (n = !1),
                  (e = e.filter(function (t) {
                    return t !== r;
                  }));
              }
            );
          },
          notifyListeners: function () {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            e.forEach(function (t) {
              return t.apply(void 0, n);
            });
          },
        };
      }
      var m = !(
        'undefined' === typeof window ||
        !window.document ||
        !window.document.createElement
      );
      function b(t, e) {
        e(window.confirm(t));
      }
      var _ = 'popstate',
        w = 'hashchange';
      function S() {
        try {
          return window.history.state || {};
        } catch (t) {
          return {};
        }
      }
      function x(t) {
        void 0 === t && (t = {}), m || Object(u.a)(!1);
        var e = window.history,
          n = (function () {
            var t = window.navigator.userAgent;
            return (
              ((-1 === t.indexOf('Android 2.') &&
                -1 === t.indexOf('Android 4.0')) ||
                -1 === t.indexOf('Mobile Safari') ||
                -1 !== t.indexOf('Chrome') ||
                -1 !== t.indexOf('Windows Phone')) &&
              window.history &&
              'pushState' in window.history
            );
          })(),
          i = !(-1 === window.navigator.userAgent.indexOf('Trident')),
          a = t,
          o = a.forceRefresh,
          l = void 0 !== o && o,
          s = a.getUserConfirmation,
          f = void 0 === s ? b : s,
          v = a.keyLength,
          x = void 0 === v ? 6 : v,
          k = t.basename ? h(c(t.basename)) : '';
        function C(t) {
          var e = t || {},
            n = e.key,
            r = e.state,
            i = window.location,
            a = i.pathname + i.search + i.hash;
          return k && (a = d(a, k)), g(a, r, n);
        }
        function P() {
          return Math.random().toString(36).substr(2, x);
        }
        var E = y();
        function T(t) {
          Object(r.a)(j, t),
            (j.length = e.length),
            E.notifyListeners(j.location, j.action);
        }
        function O(t) {
          (function (t) {
            return (
              void 0 === t.state && -1 === navigator.userAgent.indexOf('CriOS')
            );
          })(t) || A(C(t.state));
        }
        function N() {
          A(C(S()));
        }
        var M = !1;
        function A(t) {
          if (M) (M = !1), T();
          else {
            E.confirmTransitionTo(t, 'POP', f, function (e) {
              e
                ? T({ action: 'POP', location: t })
                : (function (t) {
                    var e = j.location,
                      n = L.indexOf(e.key);
                    -1 === n && (n = 0);
                    var r = L.indexOf(t.key);
                    -1 === r && (r = 0);
                    var i = n - r;
                    i && ((M = !0), I(i));
                  })(t);
            });
          }
        }
        var F = C(S()),
          L = [F.key];
        function R(t) {
          return k + p(t);
        }
        function I(t) {
          e.go(t);
        }
        var D = 0;
        function z(t) {
          1 === (D += t) && 1 === t
            ? (window.addEventListener(_, O),
              i && window.addEventListener(w, N))
            : 0 === D &&
              (window.removeEventListener(_, O),
              i && window.removeEventListener(w, N));
        }
        var U = !1;
        var j = {
          length: e.length,
          action: 'POP',
          location: F,
          createHref: R,
          push: function (t, r) {
            var i = 'PUSH',
              a = g(t, r, P(), j.location);
            E.confirmTransitionTo(a, i, f, function (t) {
              if (t) {
                var r = R(a),
                  o = a.key,
                  s = a.state;
                if (n)
                  if ((e.pushState({ key: o, state: s }, null, r), l))
                    window.location.href = r;
                  else {
                    var u = L.indexOf(j.location.key),
                      c = L.slice(0, u + 1);
                    c.push(a.key), (L = c), T({ action: i, location: a });
                  }
                else window.location.href = r;
              }
            });
          },
          replace: function (t, r) {
            var i = 'REPLACE',
              a = g(t, r, P(), j.location);
            E.confirmTransitionTo(a, i, f, function (t) {
              if (t) {
                var r = R(a),
                  o = a.key,
                  s = a.state;
                if (n)
                  if ((e.replaceState({ key: o, state: s }, null, r), l))
                    window.location.replace(r);
                  else {
                    var u = L.indexOf(j.location.key);
                    -1 !== u && (L[u] = a.key), T({ action: i, location: a });
                  }
                else window.location.replace(r);
              }
            });
          },
          go: I,
          goBack: function () {
            I(-1);
          },
          goForward: function () {
            I(1);
          },
          block: function (t) {
            void 0 === t && (t = !1);
            var e = E.setPrompt(t);
            return (
              U || (z(1), (U = !0)),
              function () {
                return U && ((U = !1), z(-1)), e();
              }
            );
          },
          listen: function (t) {
            var e = E.appendListener(t);
            return (
              z(1),
              function () {
                z(-1), e();
              }
            );
          },
        };
        return j;
      }
      var k = 'hashchange',
        C = {
          hashbang: {
            encodePath: function (t) {
              return '!' === t.charAt(0) ? t : '!/' + f(t);
            },
            decodePath: function (t) {
              return '!' === t.charAt(0) ? t.substr(1) : t;
            },
          },
          noslash: { encodePath: f, decodePath: c },
          slash: { encodePath: c, decodePath: c },
        };
      function P(t) {
        var e = t.indexOf('#');
        return -1 === e ? t : t.slice(0, e);
      }
      function E() {
        var t = window.location.href,
          e = t.indexOf('#');
        return -1 === e ? '' : t.substring(e + 1);
      }
      function T(t) {
        window.location.replace(P(window.location.href) + '#' + t);
      }
      function O(t) {
        void 0 === t && (t = {}), m || Object(u.a)(!1);
        var e = window.history,
          n = (window.navigator.userAgent.indexOf('Firefox'), t),
          i = n.getUserConfirmation,
          a = void 0 === i ? b : i,
          o = n.hashType,
          l = void 0 === o ? 'slash' : o,
          s = t.basename ? h(c(t.basename)) : '',
          f = C[l],
          v = f.encodePath,
          _ = f.decodePath;
        function w() {
          var t = _(E());
          return s && (t = d(t, s)), g(t);
        }
        var S = y();
        function x(t) {
          Object(r.a)(j, t),
            (j.length = e.length),
            S.notifyListeners(j.location, j.action);
        }
        var O = !1,
          N = null;
        function M() {
          var t,
            e,
            n = E(),
            r = v(n);
          if (n !== r) T(r);
          else {
            var i = w(),
              o = j.location;
            if (
              !O &&
              ((e = i),
              (t = o).pathname === e.pathname &&
                t.search === e.search &&
                t.hash === e.hash)
            )
              return;
            if (N === p(i)) return;
            (N = null),
              (function (t) {
                if (O) (O = !1), x();
                else {
                  var e = 'POP';
                  S.confirmTransitionTo(t, e, a, function (n) {
                    n
                      ? x({ action: e, location: t })
                      : (function (t) {
                          var e = j.location,
                            n = R.lastIndexOf(p(e));
                          -1 === n && (n = 0);
                          var r = R.lastIndexOf(p(t));
                          -1 === r && (r = 0);
                          var i = n - r;
                          i && ((O = !0), I(i));
                        })(t);
                  });
                }
              })(i);
          }
        }
        var A = E(),
          F = v(A);
        A !== F && T(F);
        var L = w(),
          R = [p(L)];
        function I(t) {
          e.go(t);
        }
        var D = 0;
        function z(t) {
          1 === (D += t) && 1 === t
            ? window.addEventListener(k, M)
            : 0 === D && window.removeEventListener(k, M);
        }
        var U = !1;
        var j = {
          length: e.length,
          action: 'POP',
          location: L,
          createHref: function (t) {
            var e = document.querySelector('base'),
              n = '';
            return (
              e && e.getAttribute('href') && (n = P(window.location.href)),
              n + '#' + v(s + p(t))
            );
          },
          push: function (t, e) {
            var n = 'PUSH',
              r = g(t, void 0, void 0, j.location);
            S.confirmTransitionTo(r, n, a, function (t) {
              if (t) {
                var e = p(r),
                  i = v(s + e);
                if (E() !== i) {
                  (N = e),
                    (function (t) {
                      window.location.hash = t;
                    })(i);
                  var a = R.lastIndexOf(p(j.location)),
                    o = R.slice(0, a + 1);
                  o.push(e), (R = o), x({ action: n, location: r });
                } else x();
              }
            });
          },
          replace: function (t, e) {
            var n = 'REPLACE',
              r = g(t, void 0, void 0, j.location);
            S.confirmTransitionTo(r, n, a, function (t) {
              if (t) {
                var e = p(r),
                  i = v(s + e);
                E() !== i && ((N = e), T(i));
                var a = R.indexOf(p(j.location));
                -1 !== a && (R[a] = e), x({ action: n, location: r });
              }
            });
          },
          go: I,
          goBack: function () {
            I(-1);
          },
          goForward: function () {
            I(1);
          },
          block: function (t) {
            void 0 === t && (t = !1);
            var e = S.setPrompt(t);
            return (
              U || (z(1), (U = !0)),
              function () {
                return U && ((U = !1), z(-1)), e();
              }
            );
          },
          listen: function (t) {
            var e = S.appendListener(t);
            return (
              z(1),
              function () {
                z(-1), e();
              }
            );
          },
        };
        return j;
      }
      function N(t, e, n) {
        return Math.min(Math.max(t, e), n);
      }
      function M(t) {
        void 0 === t && (t = {});
        var e = t,
          n = e.getUserConfirmation,
          i = e.initialEntries,
          a = void 0 === i ? ['/'] : i,
          o = e.initialIndex,
          l = void 0 === o ? 0 : o,
          s = e.keyLength,
          u = void 0 === s ? 6 : s,
          c = y();
        function f(t) {
          Object(r.a)(_, t),
            (_.length = _.entries.length),
            c.notifyListeners(_.location, _.action);
        }
        function d() {
          return Math.random().toString(36).substr(2, u);
        }
        var h = N(l, 0, a.length - 1),
          v = a.map(function (t) {
            return g(t, void 0, 'string' === typeof t ? d() : t.key || d());
          }),
          m = p;
        function b(t) {
          var e = N(_.index + t, 0, _.entries.length - 1),
            r = _.entries[e];
          c.confirmTransitionTo(r, 'POP', n, function (t) {
            t ? f({ action: 'POP', location: r, index: e }) : f();
          });
        }
        var _ = {
          length: v.length,
          action: 'POP',
          location: v[h],
          index: h,
          entries: v,
          createHref: m,
          push: function (t, e) {
            var r = 'PUSH',
              i = g(t, e, d(), _.location);
            c.confirmTransitionTo(i, r, n, function (t) {
              if (t) {
                var e = _.index + 1,
                  n = _.entries.slice(0);
                n.length > e ? n.splice(e, n.length - e, i) : n.push(i),
                  f({ action: r, location: i, index: e, entries: n });
              }
            });
          },
          replace: function (t, e) {
            var r = 'REPLACE',
              i = g(t, e, d(), _.location);
            c.confirmTransitionTo(i, r, n, function (t) {
              t && ((_.entries[_.index] = i), f({ action: r, location: i }));
            });
          },
          go: b,
          goBack: function () {
            b(-1);
          },
          goForward: function () {
            b(1);
          },
          canGo: function (t) {
            var e = _.index + t;
            return e >= 0 && e < _.entries.length;
          },
          block: function (t) {
            return void 0 === t && (t = !1), c.setPrompt(t);
          },
          listen: function (t) {
            return c.appendListener(t);
          },
        };
        return _;
      }
    },
    function (t, e, n) {
      'use strict';
      function r(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = {},
          a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          (n = a[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
        return i;
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return f;
      }),
        n.d(e, 'b', function () {
          return y;
        });
      var r = n(7),
        i = n(11),
        a = n(1),
        o = n.n(a),
        l = n(13),
        s = (n(16), n(8)),
        u = n(14),
        c = n(12),
        f = (function (t) {
          function e() {
            for (
              var e, n = arguments.length, r = new Array(n), i = 0;
              i < n;
              i++
            )
              r[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(r)) || this).history = Object(
                l.a
              )(e.props)),
              e
            );
          }
          return (
            Object(i.a)(e, t),
            (e.prototype.render = function () {
              return o.a.createElement(r.c, {
                history: this.history,
                children: this.props.children,
              });
            }),
            e
          );
        })(o.a.Component);
      o.a.Component;
      var d = function (t, e) {
          return 'function' === typeof t ? t(e) : t;
        },
        h = function (t, e) {
          return 'string' === typeof t ? Object(l.c)(t, null, null, e) : t;
        },
        p = function (t) {
          return t;
        },
        g = o.a.forwardRef;
      'undefined' === typeof g && (g = p);
      var v = g(function (t, e) {
        var n = t.innerRef,
          r = t.navigate,
          i = t.onClick,
          a = Object(u.a)(t, ['innerRef', 'navigate', 'onClick']),
          l = a.target,
          c = Object(s.a)({}, a, {
            onClick: function (t) {
              try {
                i && i(t);
              } catch (e) {
                throw (t.preventDefault(), e);
              }
              t.defaultPrevented ||
                0 !== t.button ||
                (l && '_self' !== l) ||
                (function (t) {
                  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
                })(t) ||
                (t.preventDefault(), r());
            },
          });
        return (c.ref = (p !== g && e) || n), o.a.createElement('a', c);
      });
      var y = g(function (t, e) {
          var n = t.component,
            i = void 0 === n ? v : n,
            a = t.replace,
            l = t.to,
            f = t.innerRef,
            y = Object(u.a)(t, ['component', 'replace', 'to', 'innerRef']);
          return o.a.createElement(r.e.Consumer, null, function (t) {
            t || Object(c.a)(!1);
            var n = t.history,
              r = h(d(l, t.location), t.location),
              u = r ? n.createHref(r) : '',
              v = Object(s.a)({}, y, {
                href: u,
                navigate: function () {
                  var e = d(l, t.location);
                  (a ? n.replace : n.push)(e);
                },
              });
            return (
              p !== g ? (v.ref = e || f) : (v.innerRef = f),
              o.a.createElement(i, v)
            );
          });
        }),
        m = function (t) {
          return t;
        },
        b = o.a.forwardRef;
      'undefined' === typeof b && (b = m);
      b(function (t, e) {
        var n = t['aria-current'],
          i = void 0 === n ? 'page' : n,
          a = t.activeClassName,
          l = void 0 === a ? 'active' : a,
          f = t.activeStyle,
          p = t.className,
          g = t.exact,
          v = t.isActive,
          _ = t.location,
          w = t.sensitive,
          S = t.strict,
          x = t.style,
          k = t.to,
          C = t.innerRef,
          P = Object(u.a)(t, [
            'aria-current',
            'activeClassName',
            'activeStyle',
            'className',
            'exact',
            'isActive',
            'location',
            'sensitive',
            'strict',
            'style',
            'to',
            'innerRef',
          ]);
        return o.a.createElement(r.e.Consumer, null, function (t) {
          t || Object(c.a)(!1);
          var n = _ || t.location,
            a = h(d(k, n), n),
            u = a.pathname,
            E = u && u.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1'),
            T = E
              ? Object(r.f)(n.pathname, {
                  path: E,
                  exact: g,
                  sensitive: w,
                  strict: S,
                })
              : null,
            O = !!(v ? v(T, n) : T),
            N = O
              ? (function () {
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  return e
                    .filter(function (t) {
                      return t;
                    })
                    .join(' ');
                })(p, l)
              : p,
            M = O ? Object(s.a)({}, x, {}, f) : x,
            A = Object(s.a)(
              {
                'aria-current': (O && i) || null,
                className: N,
                style: M,
                to: a,
              },
              P
            );
          return (
            m !== b ? (A.ref = e || C) : (A.innerRef = C),
            o.a.createElement(y, A)
          );
        });
      });
    },
    function (t, e, n) {
      t.exports = n(98)();
    },
    function (t, e, n) {
      'use strict';
      var r =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          },
        i = n(50);
      n(61);
      t.exports = r({}, i);
    },
    function (t, e, n) {
      'use strict';
      var r = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable;
      function o(t) {
        if (null === t || void 0 === t)
          throw new TypeError(
            'Object.assign cannot be called with null or undefined'
          );
        return Object(t);
      }
      t.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var t = new String('abc');
          if (((t[5] = 'de'), '5' === Object.getOwnPropertyNames(t)[0]))
            return !1;
          for (var e = {}, n = 0; n < 10; n++)
            e['_' + String.fromCharCode(n)] = n;
          if (
            '0123456789' !==
            Object.getOwnPropertyNames(e)
              .map(function (t) {
                return e[t];
              })
              .join('')
          )
            return !1;
          var r = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function (t) {
              r[t] = t;
            }),
            'abcdefghijklmnopqrst' ===
              Object.keys(Object.assign({}, r)).join('')
          );
        } catch (i) {
          return !1;
        }
      })()
        ? Object.assign
        : function (t, e) {
            for (var n, l, s = o(t), u = 1; u < arguments.length; u++) {
              for (var c in (n = Object(arguments[u])))
                i.call(n, c) && (s[c] = n[c]);
              if (r) {
                l = r(n);
                for (var f = 0; f < l.length; f++)
                  a.call(n, l[f]) && (s[l[f]] = n[l[f]]);
              }
            }
            return s;
          };
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i,
        a = n(5),
        o = n(32),
        l = n(3),
        s = n(2),
        u = n(4);
      var c = (function () {
        function t(t) {
          (this.pixelRatio = 1),
            (this.width = 0),
            (this.height = 0),
            (this.isCache = !1);
          var e =
            (t || {}).pixelRatio ||
            l.Konva.pixelRatio ||
            (function () {
              if (i) return i;
              var t = a.Util.createCanvasElement().getContext('2d');
              return (i =
                (l.Konva._global.devicePixelRatio || 1) /
                (t.webkitBackingStorePixelRatio ||
                  t.mozBackingStorePixelRatio ||
                  t.msBackingStorePixelRatio ||
                  t.oBackingStorePixelRatio ||
                  t.backingStorePixelRatio ||
                  1));
            })();
          (this.pixelRatio = e),
            (this._canvas = a.Util.createCanvasElement()),
            (this._canvas.style.padding = '0'),
            (this._canvas.style.margin = '0'),
            (this._canvas.style.border = '0'),
            (this._canvas.style.background = 'transparent'),
            (this._canvas.style.position = 'absolute'),
            (this._canvas.style.top = '0'),
            (this._canvas.style.left = '0');
        }
        return (
          (t.prototype.getContext = function () {
            return this.context;
          }),
          (t.prototype.getPixelRatio = function () {
            return this.pixelRatio;
          }),
          (t.prototype.setPixelRatio = function (t) {
            var e = this.pixelRatio;
            (this.pixelRatio = t),
              this.setSize(this.getWidth() / e, this.getHeight() / e);
          }),
          (t.prototype.setWidth = function (t) {
            (this.width = this._canvas.width = t * this.pixelRatio),
              (this._canvas.style.width = t + 'px');
            var e = this.pixelRatio;
            this.getContext()._context.scale(e, e);
          }),
          (t.prototype.setHeight = function (t) {
            (this.height = this._canvas.height = t * this.pixelRatio),
              (this._canvas.style.height = t + 'px');
            var e = this.pixelRatio;
            this.getContext()._context.scale(e, e);
          }),
          (t.prototype.getWidth = function () {
            return this.width;
          }),
          (t.prototype.getHeight = function () {
            return this.height;
          }),
          (t.prototype.setSize = function (t, e) {
            this.setWidth(t || 0), this.setHeight(e || 0);
          }),
          (t.prototype.toDataURL = function (t, e) {
            try {
              return this._canvas.toDataURL(t, e);
            } catch (n) {
              try {
                return this._canvas.toDataURL();
              } catch (r) {
                return (
                  a.Util.error(
                    'Unable to get data URL. ' +
                      r.message +
                      ' For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html.'
                  ),
                  ''
                );
              }
            }
          }),
          t
        );
      })();
      (e.Canvas = c),
        s.Factory.addGetterSetter(
          c,
          'pixelRatio',
          void 0,
          u.getNumberValidator()
        );
      var f = (function (t) {
        function e(e) {
          void 0 === e && (e = { width: 0, height: 0 });
          var n = t.call(this, e) || this;
          return (
            (n.context = new o.SceneContext(n)), n.setSize(e.width, e.height), n
          );
        }
        return r(e, t), e;
      })(c);
      e.SceneCanvas = f;
      var d = (function (t) {
        function e(e) {
          void 0 === e && (e = { width: 0, height: 0 });
          var n = t.call(this, e) || this;
          return (
            (n.hitCanvas = !0),
            (n.context = new o.HitContext(n)),
            n.setSize(e.width, e.height),
            n
          );
        }
        return r(e, t), e;
      })(c);
      e.HitCanvas = d;
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n(5),
        a = n(2),
        o = n(6),
        l = n(4),
        s = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.children = new i.Collection()), e;
          }
          return (
            r(e, t),
            (e.prototype.getChildren = function (t) {
              if (!t) return this.children;
              var e = new i.Collection();
              return (
                this.children.each(function (n) {
                  t(n) && e.push(n);
                }),
                e
              );
            }),
            (e.prototype.hasChildren = function () {
              return this.getChildren().length > 0;
            }),
            (e.prototype.removeChildren = function () {
              for (var t, e = 0; e < this.children.length; e++)
                ((t = this.children[e]).parent = null),
                  (t.index = 0),
                  t.remove();
              return (this.children = new i.Collection()), this;
            }),
            (e.prototype.destroyChildren = function () {
              for (var t, e = 0; e < this.children.length; e++)
                ((t = this.children[e]).parent = null),
                  (t.index = 0),
                  t.destroy();
              return (this.children = new i.Collection()), this;
            }),
            (e.prototype.add = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              if (arguments.length > 1) {
                for (var n = 0; n < arguments.length; n++)
                  this.add(arguments[n]);
                return this;
              }
              var r = t[0];
              if (r.getParent()) return r.moveTo(this), this;
              var i = this.children;
              return (
                this._validateAdd(r),
                r._clearCaches(),
                (r.index = i.length),
                (r.parent = this),
                i.push(r),
                this._fire('add', { child: r }),
                this
              );
            }),
            (e.prototype.destroy = function () {
              return (
                this.hasChildren() && this.destroyChildren(),
                t.prototype.destroy.call(this),
                this
              );
            }),
            (e.prototype.find = function (t) {
              return this._generalFind(t, !1);
            }),
            (e.prototype.get = function (t) {
              return (
                i.Util.warn(
                  'collection.get() method is deprecated. Please use collection.find() instead.'
                ),
                this.find(t)
              );
            }),
            (e.prototype.findOne = function (t) {
              var e = this._generalFind(t, !0);
              return e.length > 0 ? e[0] : void 0;
            }),
            (e.prototype._generalFind = function (t, e) {
              var n = [];
              return (
                this._descendants(function (r) {
                  var i = r._isMatch(t);
                  return i && n.push(r), !(!i || !e);
                }),
                i.Collection.toCollection(n)
              );
            }),
            (e.prototype._descendants = function (t) {
              for (var e = 0; e < this.children.length; e++) {
                var n = this.children[e];
                if (t(n)) return !0;
                if (n.hasChildren() && n._descendants(t)) return !0;
              }
              return !1;
            }),
            (e.prototype.toObject = function () {
              var t = o.Node.prototype.toObject.call(this);
              t.children = [];
              for (
                var e = this.getChildren(), n = e.length, r = 0;
                r < n;
                r++
              ) {
                var i = e[r];
                t.children.push(i.toObject());
              }
              return t;
            }),
            (e.prototype.isAncestorOf = function (t) {
              for (var e = t.getParent(); e; ) {
                if (e._id === this._id) return !0;
                e = e.getParent();
              }
              return !1;
            }),
            (e.prototype.clone = function (t) {
              var e = o.Node.prototype.clone.call(this, t);
              return (
                this.getChildren().each(function (t) {
                  e.add(t.clone());
                }),
                e
              );
            }),
            (e.prototype.getAllIntersections = function (t) {
              var e = [];
              return (
                this.find('Shape').each(function (n) {
                  n.isVisible() && n.intersects(t) && e.push(n);
                }),
                e
              );
            }),
            (e.prototype._setChildrenIndices = function () {
              this.children.each(function (t, e) {
                t.index = e;
              });
            }),
            (e.prototype.drawScene = function (t, e) {
              var n = this.getLayer(),
                r = t || (n && n.getCanvas()),
                i = r && r.getContext(),
                a = this._getCanvasCache(),
                o = a && a.scene,
                l = r && r.isCache;
              if (!this.isVisible() && !l) return this;
              if (o) {
                i.save();
                var s = this.getAbsoluteTransform(e).getMatrix();
                i.transform(s[0], s[1], s[2], s[3], s[4], s[5]),
                  this._drawCachedSceneCanvas(i),
                  i.restore();
              } else this._drawChildren('drawScene', r, e);
              return this;
            }),
            (e.prototype.drawHit = function (t, e) {
              if (!this.shouldDrawHit(e)) return this;
              var n = this.getLayer(),
                r = t || (n && n.hitCanvas),
                i = r && r.getContext(),
                a = this._getCanvasCache();
              if (a && a.hit) {
                i.save();
                var o = this.getAbsoluteTransform(e).getMatrix();
                i.transform(o[0], o[1], o[2], o[3], o[4], o[5]),
                  this._drawCachedHitCanvas(i),
                  i.restore();
              } else this._drawChildren('drawHit', r, e);
              return this;
            }),
            (e.prototype._drawChildren = function (t, e, n) {
              var r = e && e.getContext(),
                i = this.clipWidth(),
                a = this.clipHeight(),
                o = this.clipFunc(),
                l = (i && a) || o,
                s = n === this;
              if (l) {
                r.save();
                var u = this.getAbsoluteTransform(n),
                  c = u.getMatrix();
                if (
                  (r.transform(c[0], c[1], c[2], c[3], c[4], c[5]),
                  r.beginPath(),
                  o)
                )
                  o.call(this, r, this);
                else {
                  var f = this.clipX(),
                    d = this.clipY();
                  r.rect(f, d, i, a);
                }
                r.clip(),
                  (c = u.copy().invert().getMatrix()),
                  r.transform(c[0], c[1], c[2], c[3], c[4], c[5]);
              }
              var h =
                !s &&
                'source-over' !== this.globalCompositeOperation() &&
                'drawScene' === t;
              h && (r.save(), r._applyGlobalCompositeOperation(this)),
                this.children.each(function (r) {
                  r[t](e, n);
                }),
                h && r.restore(),
                l && r.restore();
            }),
            (e.prototype.getClientRect = function (t) {
              var e,
                n,
                r,
                i,
                a = (t = t || {}).skipTransform,
                o = t.relativeTo,
                l = { x: 1 / 0, y: 1 / 0, width: 0, height: 0 },
                s = this;
              this.children.each(function (a) {
                if (a.visible()) {
                  var o = a.getClientRect({
                    relativeTo: s,
                    skipShadow: t.skipShadow,
                    skipStroke: t.skipStroke,
                  });
                  (0 === o.width && 0 === o.height) ||
                    (void 0 === e
                      ? ((e = o.x),
                        (n = o.y),
                        (r = o.x + o.width),
                        (i = o.y + o.height))
                      : ((e = Math.min(e, o.x)),
                        (n = Math.min(n, o.y)),
                        (r = Math.max(r, o.x + o.width)),
                        (i = Math.max(i, o.y + o.height))));
                }
              });
              for (
                var u = this.find('Shape'), c = !1, f = 0;
                f < u.length;
                f++
              ) {
                if (u[f]._isVisible(this)) {
                  c = !0;
                  break;
                }
              }
              return (
                (l =
                  c && void 0 !== e
                    ? { x: e, y: n, width: r - e, height: i - n }
                    : { x: 0, y: 0, width: 0, height: 0 }),
                a ? l : this._transformedRect(l, o)
              );
            }),
            e
          );
        })(o.Node);
      (e.Container = s),
        a.Factory.addComponentsGetterSetter(s, 'clip', [
          'x',
          'y',
          'width',
          'height',
        ]),
        a.Factory.addGetterSetter(s, 'clipX', void 0, l.getNumberValidator()),
        a.Factory.addGetterSetter(s, 'clipY', void 0, l.getNumberValidator()),
        a.Factory.addGetterSetter(
          s,
          'clipWidth',
          void 0,
          l.getNumberValidator()
        ),
        a.Factory.addGetterSetter(
          s,
          'clipHeight',
          void 0,
          l.getNumberValidator()
        ),
        a.Factory.addGetterSetter(s, 'clipFunc'),
        i.Collection.mapMethods(s);
    },
    ,
    function (t, e, n) {
      'use strict';
      t.exports = n(46);
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(3),
        i = n(5);
      (e.DD = {
        get isDragging() {
          var t = !1;
          return (
            e.DD._dragElements.forEach(function (e) {
              'dragging' === e.dragStatus && (t = !0);
            }),
            t
          );
        },
        justDragged: !1,
        get node() {
          var t;
          return (
            e.DD._dragElements.forEach(function (e) {
              t = e.node;
            }),
            t
          );
        },
        _dragElements: new Map(),
        _drag: function (t) {
          var n = [];
          e.DD._dragElements.forEach(function (e, r) {
            var a = e.node,
              o = a.getStage();
            o.setPointersPositions(t),
              void 0 === e.pointerId &&
                (e.pointerId = i.Util._getFirstPointerId(t));
            var l = o._changedPointerPositions.find(function (t) {
              return t.id === e.pointerId;
            });
            if (l) {
              if ('dragging' !== e.dragStatus) {
                var s = a.dragDistance();
                if (
                  Math.max(
                    Math.abs(l.x - e.startPointerPos.x),
                    Math.abs(l.y - e.startPointerPos.y)
                  ) < s
                )
                  return;
                if ((a.startDrag({ evt: t }), !a.isDragging())) return;
              }
              a._setDragPosition(t, e), n.push(a);
            }
          }),
            n.forEach(function (e) {
              e.fire('dragmove', { type: 'dragmove', target: e, evt: t }, !0);
            });
        },
        _endDragBefore: function (t) {
          e.DD._dragElements.forEach(function (n, i) {
            var a = n.node.getStage();
            if (
              (t && a.setPointersPositions(t),
              a._changedPointerPositions.find(function (t) {
                return t.id === n.pointerId;
              }))
            ) {
              ('dragging' !== n.dragStatus && 'stopped' !== n.dragStatus) ||
                ((e.DD.justDragged = !0),
                (r.Konva.listenClickTap = !1),
                (n.dragStatus = 'stopped'));
              var o =
                n.node.getLayer() ||
                (n.node instanceof r.Konva.Stage && n.node);
              o && o.draw();
            }
          });
        },
        _endDragAfter: function (t) {
          e.DD._dragElements.forEach(function (n, r) {
            'stopped' === n.dragStatus &&
              n.node.fire(
                'dragend',
                { type: 'dragend', target: n.node, evt: t },
                !0
              ),
              'dragging' !== n.dragStatus && e.DD._dragElements.delete(r);
          });
        },
      }),
        r.Konva.isBrowser &&
          (window.addEventListener('mouseup', e.DD._endDragBefore, !0),
          window.addEventListener('touchend', e.DD._endDragBefore, !0),
          window.addEventListener('mousemove', e.DD._drag),
          window.addEventListener('touchmove', e.DD._drag),
          window.addEventListener('mouseup', e.DD._endDragAfter, !1),
          window.addEventListener('touchend', e.DD._endDragAfter, !1));
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n(5),
        a = n(20),
        o = n(3),
        l = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            r(e, t),
            (e.prototype._validateAdd = function (t) {
              var e = t.getType();
              'Group' !== e &&
                'Shape' !== e &&
                i.Util.throw('You may only add groups and shapes to groups.');
            }),
            e
          );
        })(a.Container);
      (e.Group = l),
        (l.prototype.nodeType = 'Group'),
        o._registerNode(l),
        i.Collection.mapMethods(l);
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(3),
        i =
          r.glob.performance && r.glob.performance.now
            ? function () {
                return r.glob.performance.now();
              }
            : function () {
                return new Date().getTime();
              },
        a = (function () {
          function t(e, n) {
            (this.id = t.animIdCounter++),
              (this.frame = {
                time: 0,
                timeDiff: 0,
                lastTime: i(),
                frameRate: 0,
              }),
              (this.func = e),
              this.setLayers(n);
          }
          return (
            (t.prototype.setLayers = function (t) {
              var e = [];
              return (
                (e = t ? (t.length > 0 ? t : [t]) : []), (this.layers = e), this
              );
            }),
            (t.prototype.getLayers = function () {
              return this.layers;
            }),
            (t.prototype.addLayer = function (t) {
              var e,
                n = this.layers,
                r = n.length;
              for (e = 0; e < r; e++) if (n[e]._id === t._id) return !1;
              return this.layers.push(t), !0;
            }),
            (t.prototype.isRunning = function () {
              var e,
                n = t.animations,
                r = n.length;
              for (e = 0; e < r; e++) if (n[e].id === this.id) return !0;
              return !1;
            }),
            (t.prototype.start = function () {
              return (
                this.stop(),
                (this.frame.timeDiff = 0),
                (this.frame.lastTime = i()),
                t._addAnimation(this),
                this
              );
            }),
            (t.prototype.stop = function () {
              return t._removeAnimation(this), this;
            }),
            (t.prototype._updateFrameObject = function (t) {
              (this.frame.timeDiff = t - this.frame.lastTime),
                (this.frame.lastTime = t),
                (this.frame.time += this.frame.timeDiff),
                (this.frame.frameRate = 1e3 / this.frame.timeDiff);
            }),
            (t._addAnimation = function (t) {
              this.animations.push(t), this._handleAnimation();
            }),
            (t._removeAnimation = function (t) {
              var e,
                n = t.id,
                r = this.animations,
                i = r.length;
              for (e = 0; e < i; e++)
                if (r[e].id === n) {
                  this.animations.splice(e, 1);
                  break;
                }
            }),
            (t._runFrames = function () {
              var t,
                e,
                n,
                r,
                a,
                o,
                l,
                s,
                u = {},
                c = this.animations;
              for (r = 0; r < c.length; r++)
                if (
                  ((e = (t = c[r]).layers),
                  (n = t.func),
                  t._updateFrameObject(i()),
                  (o = e.length),
                  !n || !1 !== n.call(t, t.frame))
                )
                  for (a = 0; a < o; a++)
                    void 0 !== (l = e[a])._id && (u[l._id] = l);
              for (s in u) u.hasOwnProperty(s) && u[s].draw();
            }),
            (t._animationLoop = function () {
              var e = t;
              e.animations.length
                ? (e._runFrames(), requestAnimationFrame(e._animationLoop))
                : (e.animRunning = !1);
            }),
            (t._handleAnimation = function () {
              this.animRunning ||
                ((this.animRunning = !0),
                requestAnimationFrame(this._animationLoop));
            }),
            (t.animations = []),
            (t.animIdCounter = 0),
            (t.animRunning = !1),
            t
          );
        })();
      e.Animation = a;
    },
    function (t, e, n) {
      'use strict';
      var r = function (t) {
        if (void 0 === t)
          throw new Error('invariant(...): Second argument must be a string.');
      };
      t.exports = function (t, e) {
        for (
          var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2;
          a < n;
          a++
        )
          i[a - 2] = arguments[a];
        if ((r(e), !t)) {
          var o;
          if (void 0 === e)
            o = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            );
          else {
            var l = 0;
            (o = new Error(
              e.replace(/%s/g, function () {
                return String(i[l++]);
              })
            )).name = 'Invariant Violation';
          }
          throw ((o.framesToPop = 1), o);
        }
      };
    },
    function (t, e, n) {
      'use strict';
      (function (t) {
        var r = n(1),
          i = n.n(r),
          a = n(11),
          o = n(16),
          l = n.n(o),
          s = 1073741823,
          u =
            'undefined' !== typeof globalThis
              ? globalThis
              : 'undefined' !== typeof window
              ? window
              : 'undefined' !== typeof t
              ? t
              : {};
        function c(t) {
          var e = [];
          return {
            on: function (t) {
              e.push(t);
            },
            off: function (t) {
              e = e.filter(function (e) {
                return e !== t;
              });
            },
            get: function () {
              return t;
            },
            set: function (n, r) {
              (t = n),
                e.forEach(function (e) {
                  return e(t, r);
                });
            },
          };
        }
        var f =
          i.a.createContext ||
          function (t, e) {
            var n,
              i,
              o =
                '__create-react-context-' +
                (function () {
                  var t = '__global_unique_id__';
                  return (u[t] = (u[t] || 0) + 1);
                })() +
                '__',
              f = (function (t) {
                function n() {
                  var e;
                  return (
                    ((e = t.apply(this, arguments) || this).emitter = c(
                      e.props.value
                    )),
                    e
                  );
                }
                Object(a.a)(n, t);
                var r = n.prototype;
                return (
                  (r.getChildContext = function () {
                    var t;
                    return ((t = {})[o] = this.emitter), t;
                  }),
                  (r.componentWillReceiveProps = function (t) {
                    if (this.props.value !== t.value) {
                      var n,
                        r = this.props.value,
                        i = t.value;
                      (
                        (a = r) === (o = i)
                          ? 0 !== a || 1 / a === 1 / o
                          : a !== a && o !== o
                      )
                        ? (n = 0)
                        : ((n = 'function' === typeof e ? e(r, i) : s),
                          0 !== (n |= 0) && this.emitter.set(t.value, n));
                    }
                    var a, o;
                  }),
                  (r.render = function () {
                    return this.props.children;
                  }),
                  n
                );
              })(r.Component);
            f.childContextTypes = (((n = {})[o] = l.a.object.isRequired), n);
            var d = (function (e) {
              function n() {
                var t;
                return (
                  ((t = e.apply(this, arguments) || this).state = {
                    value: t.getValue(),
                  }),
                  (t.onUpdate = function (e, n) {
                    0 !== ((0 | t.observedBits) & n) &&
                      t.setState({ value: t.getValue() });
                  }),
                  t
                );
              }
              Object(a.a)(n, e);
              var r = n.prototype;
              return (
                (r.componentWillReceiveProps = function (t) {
                  var e = t.observedBits;
                  this.observedBits = void 0 === e || null === e ? s : e;
                }),
                (r.componentDidMount = function () {
                  this.context[o] && this.context[o].on(this.onUpdate);
                  var t = this.props.observedBits;
                  this.observedBits = void 0 === t || null === t ? s : t;
                }),
                (r.componentWillUnmount = function () {
                  this.context[o] && this.context[o].off(this.onUpdate);
                }),
                (r.getValue = function () {
                  return this.context[o] ? this.context[o].get() : t;
                }),
                (r.render = function () {
                  return ((t = this.props.children),
                  Array.isArray(t) ? t[0] : t)(this.state.value);
                  var t;
                }),
                n
              );
            })(r.Component);
            return (
              (d.contextTypes = (((i = {})[o] = l.a.object), i)),
              { Provider: f, Consumer: d }
            );
          };
        e.a = f;
      }.call(this, n(31)));
    },
    function (t, e, n) {
      var r = n(100);
      (t.exports = h),
        (t.exports.parse = a),
        (t.exports.compile = function (t, e) {
          return l(a(t, e), e);
        }),
        (t.exports.tokensToFunction = l),
        (t.exports.tokensToRegExp = d);
      var i = new RegExp(
        [
          '(\\\\.)',
          '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
        ].join('|'),
        'g'
      );
      function a(t, e) {
        for (
          var n, r = [], a = 0, o = 0, l = '', c = (e && e.delimiter) || '/';
          null != (n = i.exec(t));

        ) {
          var f = n[0],
            d = n[1],
            h = n.index;
          if (((l += t.slice(o, h)), (o = h + f.length), d)) l += d[1];
          else {
            var p = t[o],
              g = n[2],
              v = n[3],
              y = n[4],
              m = n[5],
              b = n[6],
              _ = n[7];
            l && (r.push(l), (l = ''));
            var w = null != g && null != p && p !== g,
              S = '+' === b || '*' === b,
              x = '?' === b || '*' === b,
              k = n[2] || c,
              C = y || m;
            r.push({
              name: v || a++,
              prefix: g || '',
              delimiter: k,
              optional: x,
              repeat: S,
              partial: w,
              asterisk: !!_,
              pattern: C ? u(C) : _ ? '.*' : '[^' + s(k) + ']+?',
            });
          }
        }
        return o < t.length && (l += t.substr(o)), l && r.push(l), r;
      }
      function o(t) {
        return encodeURI(t).replace(/[\/?#]/g, function (t) {
          return '%' + t.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function l(t, e) {
        for (var n = new Array(t.length), i = 0; i < t.length; i++)
          'object' === typeof t[i] &&
            (n[i] = new RegExp('^(?:' + t[i].pattern + ')$', f(e)));
        return function (e, i) {
          for (
            var a = '',
              l = e || {},
              s = (i || {}).pretty ? o : encodeURIComponent,
              u = 0;
            u < t.length;
            u++
          ) {
            var c = t[u];
            if ('string' !== typeof c) {
              var f,
                d = l[c.name];
              if (null == d) {
                if (c.optional) {
                  c.partial && (a += c.prefix);
                  continue;
                }
                throw new TypeError('Expected "' + c.name + '" to be defined');
              }
              if (r(d)) {
                if (!c.repeat)
                  throw new TypeError(
                    'Expected "' +
                      c.name +
                      '" to not repeat, but received `' +
                      JSON.stringify(d) +
                      '`'
                  );
                if (0 === d.length) {
                  if (c.optional) continue;
                  throw new TypeError(
                    'Expected "' + c.name + '" to not be empty'
                  );
                }
                for (var h = 0; h < d.length; h++) {
                  if (((f = s(d[h])), !n[u].test(f)))
                    throw new TypeError(
                      'Expected all "' +
                        c.name +
                        '" to match "' +
                        c.pattern +
                        '", but received `' +
                        JSON.stringify(f) +
                        '`'
                    );
                  a += (0 === h ? c.prefix : c.delimiter) + f;
                }
              } else {
                if (
                  ((f = c.asterisk
                    ? encodeURI(d).replace(/[?#]/g, function (t) {
                        return '%' + t.charCodeAt(0).toString(16).toUpperCase();
                      })
                    : s(d)),
                  !n[u].test(f))
                )
                  throw new TypeError(
                    'Expected "' +
                      c.name +
                      '" to match "' +
                      c.pattern +
                      '", but received "' +
                      f +
                      '"'
                  );
                a += c.prefix + f;
              }
            } else a += c;
          }
          return a;
        };
      }
      function s(t) {
        return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
      }
      function u(t) {
        return t.replace(/([=!:$\/()])/g, '\\$1');
      }
      function c(t, e) {
        return (t.keys = e), t;
      }
      function f(t) {
        return t && t.sensitive ? '' : 'i';
      }
      function d(t, e, n) {
        r(e) || ((n = e || n), (e = []));
        for (
          var i = (n = n || {}).strict, a = !1 !== n.end, o = '', l = 0;
          l < t.length;
          l++
        ) {
          var u = t[l];
          if ('string' === typeof u) o += s(u);
          else {
            var d = s(u.prefix),
              h = '(?:' + u.pattern + ')';
            e.push(u),
              u.repeat && (h += '(?:' + d + h + ')*'),
              (o += h = u.optional
                ? u.partial
                  ? d + '(' + h + ')?'
                  : '(?:' + d + '(' + h + '))?'
                : d + '(' + h + ')');
          }
        }
        var p = s(n.delimiter || '/'),
          g = o.slice(-p.length) === p;
        return (
          i || (o = (g ? o.slice(0, -p.length) : o) + '(?:' + p + '(?=$))?'),
          (o += a ? '$' : i && g ? '' : '(?=' + p + '|$)'),
          c(new RegExp('^' + o, f(n)), e)
        );
      }
      function h(t, e, n) {
        return (
          r(e) || ((n = e || n), (e = [])),
          (n = n || {}),
          t instanceof RegExp
            ? (function (t, e) {
                var n = t.source.match(/\((?!\?)/g);
                if (n)
                  for (var r = 0; r < n.length; r++)
                    e.push({
                      name: r,
                      prefix: null,
                      delimiter: null,
                      optional: !1,
                      repeat: !1,
                      partial: !1,
                      asterisk: !1,
                      pattern: null,
                    });
                return c(t, e);
              })(t, e)
            : r(t)
            ? (function (t, e, n) {
                for (var r = [], i = 0; i < t.length; i++)
                  r.push(h(t[i], e, n).source);
                return c(new RegExp('(?:' + r.join('|') + ')', f(n)), e);
              })(t, e, n)
            : (function (t, e, n) {
                return d(a(t, n), e, n);
              })(t, e, n)
        );
      }
    },
    function (t, e, n) {
      var r = n(30).Konva;
      r._injectGlobal(r),
        (e.default = r),
        (r.default = r),
        (t.exports = e.default);
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(3),
        i = n(5),
        a = n(6),
        o = n(20),
        l = n(51),
        s = n(34),
        u = n(52),
        c = n(24),
        f = n(23),
        d = n(9),
        h = n(25),
        p = n(53),
        g = n(32),
        v = n(19);
      e.Konva = i.Util._assign(r.Konva, {
        Collection: i.Collection,
        Util: i.Util,
        Transform: i.Transform,
        Node: a.Node,
        ids: a.ids,
        names: a.names,
        Container: o.Container,
        Stage: l.Stage,
        stages: l.stages,
        Layer: s.Layer,
        FastLayer: u.FastLayer,
        Group: c.Group,
        DD: f.DD,
        Shape: d.Shape,
        shapes: d.shapes,
        Animation: h.Animation,
        Tween: p.Tween,
        Easings: p.Easings,
        Context: g.Context,
        Canvas: v.Canvas,
      });
    },
    function (t, e) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function('return this')();
      } catch (r) {
        'object' === typeof window && (n = window);
      }
      t.exports = n;
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n(5),
        a = n(3),
        o = [
          'arc',
          'arcTo',
          'beginPath',
          'bezierCurveTo',
          'clearRect',
          'clip',
          'closePath',
          'createLinearGradient',
          'createPattern',
          'createRadialGradient',
          'drawImage',
          'ellipse',
          'fill',
          'fillText',
          'getImageData',
          'createImageData',
          'lineTo',
          'moveTo',
          'putImageData',
          'quadraticCurveTo',
          'rect',
          'restore',
          'rotate',
          'save',
          'scale',
          'setLineDash',
          'setTransform',
          'stroke',
          'strokeText',
          'transform',
          'translate',
        ],
        l = (function () {
          function t(t) {
            (this.canvas = t),
              (this._context = t._canvas.getContext('2d')),
              a.Konva.enableTrace &&
                ((this.traceArr = []), this._enableTrace());
          }
          return (
            (t.prototype.fillShape = function (t) {
              t.fillEnabled() && this._fill(t);
            }),
            (t.prototype._fill = function (t) {}),
            (t.prototype.strokeShape = function (t) {
              t.hasStroke() && this._stroke(t);
            }),
            (t.prototype._stroke = function (t) {}),
            (t.prototype.fillStrokeShape = function (t) {
              this.fillShape(t), this.strokeShape(t);
            }),
            (t.prototype.getTrace = function (t) {
              var e,
                n,
                r,
                a,
                o = this.traceArr,
                l = o.length,
                s = '';
              for (e = 0; e < l; e++)
                (r = (n = o[e]).method)
                  ? ((a = n.args),
                    (s += r),
                    t
                      ? (s += '()')
                      : i.Util._isArray(a[0])
                      ? (s += '([' + a.join(',') + '])')
                      : (s += '(' + a.join(',') + ')'))
                  : ((s += n.property), t || (s += '=' + n.val)),
                  (s += ';');
              return s;
            }),
            (t.prototype.clearTrace = function () {
              this.traceArr = [];
            }),
            (t.prototype._trace = function (t) {
              var e = this.traceArr;
              e.push(t), e.length >= 100 && e.shift();
            }),
            (t.prototype.reset = function () {
              var t = this.getCanvas().getPixelRatio();
              this.setTransform(1 * t, 0, 0, 1 * t, 0, 0);
            }),
            (t.prototype.getCanvas = function () {
              return this.canvas;
            }),
            (t.prototype.clear = function (t) {
              var e = this.getCanvas();
              t
                ? this.clearRect(
                    t.x || 0,
                    t.y || 0,
                    t.width || 0,
                    t.height || 0
                  )
                : this.clearRect(
                    0,
                    0,
                    e.getWidth() / e.pixelRatio,
                    e.getHeight() / e.pixelRatio
                  );
            }),
            (t.prototype._applyLineCap = function (t) {
              var e = t.getLineCap();
              e && this.setAttr('lineCap', e);
            }),
            (t.prototype._applyOpacity = function (t) {
              var e = t.getAbsoluteOpacity();
              1 !== e && this.setAttr('globalAlpha', e);
            }),
            (t.prototype._applyLineJoin = function (t) {
              var e = t.attrs.lineJoin;
              e && this.setAttr('lineJoin', e);
            }),
            (t.prototype.setAttr = function (t, e) {
              this._context[t] = e;
            }),
            (t.prototype.arc = function (t, e, n, r, i, a) {
              this._context.arc(t, e, n, r, i, a);
            }),
            (t.prototype.arcTo = function (t, e, n, r, i) {
              this._context.arcTo(t, e, n, r, i);
            }),
            (t.prototype.beginPath = function () {
              this._context.beginPath();
            }),
            (t.prototype.bezierCurveTo = function (t, e, n, r, i, a) {
              this._context.bezierCurveTo(t, e, n, r, i, a);
            }),
            (t.prototype.clearRect = function (t, e, n, r) {
              this._context.clearRect(t, e, n, r);
            }),
            (t.prototype.clip = function () {
              this._context.clip();
            }),
            (t.prototype.closePath = function () {
              this._context.closePath();
            }),
            (t.prototype.createImageData = function (t, e) {
              var n = arguments;
              return 2 === n.length
                ? this._context.createImageData(t, e)
                : 1 === n.length
                ? this._context.createImageData(t)
                : void 0;
            }),
            (t.prototype.createLinearGradient = function (t, e, n, r) {
              return this._context.createLinearGradient(t, e, n, r);
            }),
            (t.prototype.createPattern = function (t, e) {
              return this._context.createPattern(t, e);
            }),
            (t.prototype.createRadialGradient = function (t, e, n, r, i, a) {
              return this._context.createRadialGradient(t, e, n, r, i, a);
            }),
            (t.prototype.drawImage = function (t, e, n, r, i, a, o, l, s) {
              var u = arguments,
                c = this._context;
              3 === u.length
                ? c.drawImage(t, e, n)
                : 5 === u.length
                ? c.drawImage(t, e, n, r, i)
                : 9 === u.length && c.drawImage(t, e, n, r, i, a, o, l, s);
            }),
            (t.prototype.ellipse = function (t, e, n, r, i, a, o, l) {
              this._context.ellipse(t, e, n, r, i, a, o, l);
            }),
            (t.prototype.isPointInPath = function (t, e) {
              return this._context.isPointInPath(t, e);
            }),
            (t.prototype.fill = function () {
              this._context.fill();
            }),
            (t.prototype.fillRect = function (t, e, n, r) {
              this._context.fillRect(t, e, n, r);
            }),
            (t.prototype.strokeRect = function (t, e, n, r) {
              this._context.strokeRect(t, e, n, r);
            }),
            (t.prototype.fillText = function (t, e, n) {
              this._context.fillText(t, e, n);
            }),
            (t.prototype.measureText = function (t) {
              return this._context.measureText(t);
            }),
            (t.prototype.getImageData = function (t, e, n, r) {
              return this._context.getImageData(t, e, n, r);
            }),
            (t.prototype.lineTo = function (t, e) {
              this._context.lineTo(t, e);
            }),
            (t.prototype.moveTo = function (t, e) {
              this._context.moveTo(t, e);
            }),
            (t.prototype.rect = function (t, e, n, r) {
              this._context.rect(t, e, n, r);
            }),
            (t.prototype.putImageData = function (t, e, n) {
              this._context.putImageData(t, e, n);
            }),
            (t.prototype.quadraticCurveTo = function (t, e, n, r) {
              this._context.quadraticCurveTo(t, e, n, r);
            }),
            (t.prototype.restore = function () {
              this._context.restore();
            }),
            (t.prototype.rotate = function (t) {
              this._context.rotate(t);
            }),
            (t.prototype.save = function () {
              this._context.save();
            }),
            (t.prototype.scale = function (t, e) {
              this._context.scale(t, e);
            }),
            (t.prototype.setLineDash = function (t) {
              this._context.setLineDash
                ? this._context.setLineDash(t)
                : 'mozDash' in this._context
                ? (this._context.mozDash = t)
                : 'webkitLineDash' in this._context &&
                  (this._context.webkitLineDash = t);
            }),
            (t.prototype.getLineDash = function () {
              return this._context.getLineDash();
            }),
            (t.prototype.setTransform = function (t, e, n, r, i, a) {
              this._context.setTransform(t, e, n, r, i, a);
            }),
            (t.prototype.stroke = function () {
              this._context.stroke();
            }),
            (t.prototype.strokeText = function (t, e, n, r) {
              this._context.strokeText(t, e, n, r);
            }),
            (t.prototype.transform = function (t, e, n, r, i, a) {
              this._context.transform(t, e, n, r, i, a);
            }),
            (t.prototype.translate = function (t, e) {
              this._context.translate(t, e);
            }),
            (t.prototype._enableTrace = function () {
              var t,
                e,
                n = this,
                r = o.length,
                a = i.Util._simplifyArray,
                l = this.setAttr,
                s = function (t) {
                  var r,
                    i = n[t];
                  n[t] = function () {
                    return (
                      (e = a(Array.prototype.slice.call(arguments, 0))),
                      (r = i.apply(n, arguments)),
                      n._trace({ method: t, args: e }),
                      r
                    );
                  };
                };
              for (t = 0; t < r; t++) s(o[t]);
              n.setAttr = function () {
                l.apply(n, arguments);
                var t = arguments[0],
                  e = arguments[1];
                ('shadowOffsetX' !== t &&
                  'shadowOffsetY' !== t &&
                  'shadowBlur' !== t) ||
                  (e /= this.canvas.getPixelRatio()),
                  n._trace({ property: t, val: e });
              };
            }),
            (t.prototype._applyGlobalCompositeOperation = function (t) {
              var e = t.getGlobalCompositeOperation();
              'source-over' !== e &&
                this.setAttr('globalCompositeOperation', e);
            }),
            t
          );
        })();
      (e.Context = l),
        [
          'fillStyle',
          'strokeStyle',
          'shadowColor',
          'shadowBlur',
          'shadowOffsetX',
          'shadowOffsetY',
          'lineCap',
          'lineDashOffset',
          'lineJoin',
          'lineWidth',
          'miterLimit',
          'font',
          'textAlign',
          'textBaseline',
          'globalAlpha',
          'globalCompositeOperation',
          'imageSmoothingEnabled',
        ].forEach(function (t) {
          Object.defineProperty(l.prototype, t, {
            get: function () {
              return this._context[t];
            },
            set: function (e) {
              this._context[t] = e;
            },
          });
        });
      var s = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          r(e, t),
          (e.prototype._fillColor = function (t) {
            var e = t.fill();
            this.setAttr('fillStyle', e), t._fillFunc(this);
          }),
          (e.prototype._fillPattern = function (t) {
            var e = t.getFillPatternX(),
              n = t.getFillPatternY(),
              r = a.Konva.getAngle(t.getFillPatternRotation()),
              i = t.getFillPatternOffsetX(),
              o = t.getFillPatternOffsetY();
            t.getFillPatternScaleX(), t.getFillPatternScaleY();
            (e || n) && this.translate(e || 0, n || 0),
              r && this.rotate(r),
              (i || o) && this.translate(-1 * i, -1 * o),
              this.setAttr('fillStyle', t._getFillPattern()),
              t._fillFunc(this);
          }),
          (e.prototype._fillLinearGradient = function (t) {
            var e = t._getLinearGradient();
            e && (this.setAttr('fillStyle', e), t._fillFunc(this));
          }),
          (e.prototype._fillRadialGradient = function (t) {
            var e = t._getRadialGradient();
            e && (this.setAttr('fillStyle', e), t._fillFunc(this));
          }),
          (e.prototype._fill = function (t) {
            var e = t.fill(),
              n = t.getFillPriority();
            if (e && 'color' === n) this._fillColor(t);
            else {
              var r = t.getFillPatternImage();
              if (r && 'pattern' === n) this._fillPattern(t);
              else {
                var i = t.getFillLinearGradientColorStops();
                if (i && 'linear-gradient' === n) this._fillLinearGradient(t);
                else {
                  var a = t.getFillRadialGradientColorStops();
                  a && 'radial-gradient' === n
                    ? this._fillRadialGradient(t)
                    : e
                    ? this._fillColor(t)
                    : r
                    ? this._fillPattern(t)
                    : i
                    ? this._fillLinearGradient(t)
                    : a && this._fillRadialGradient(t);
                }
              }
            }
          }),
          (e.prototype._strokeLinearGradient = function (t) {
            var e = t.getStrokeLinearGradientStartPoint(),
              n = t.getStrokeLinearGradientEndPoint(),
              r = t.getStrokeLinearGradientColorStops(),
              i = this.createLinearGradient(e.x, e.y, n.x, n.y);
            if (r) {
              for (var a = 0; a < r.length; a += 2)
                i.addColorStop(r[a], r[a + 1]);
              this.setAttr('strokeStyle', i);
            }
          }),
          (e.prototype._stroke = function (t) {
            var e = t.dash(),
              n = t.getStrokeScaleEnabled();
            if (t.hasStroke()) {
              if (!n) {
                this.save();
                var r = this.getCanvas().getPixelRatio();
                this.setTransform(r, 0, 0, r, 0, 0);
              }
              this._applyLineCap(t),
                e &&
                  t.dashEnabled() &&
                  (this.setLineDash(e),
                  this.setAttr('lineDashOffset', t.dashOffset())),
                this.setAttr('lineWidth', t.strokeWidth()),
                t.getShadowForStrokeEnabled() ||
                  this.setAttr('shadowColor', 'rgba(0,0,0,0)'),
                t.getStrokeLinearGradientColorStops()
                  ? this._strokeLinearGradient(t)
                  : this.setAttr('strokeStyle', t.stroke()),
                t._strokeFunc(this),
                n || this.restore();
            }
          }),
          (e.prototype._applyShadow = function (t) {
            var e = i.Util,
              n = e.get(t.getShadowRGBA(), 'black'),
              r = e.get(t.getShadowBlur(), 5),
              a = e.get(t.getShadowOffset(), { x: 0, y: 0 }),
              o = t.getAbsoluteScale(),
              l = this.canvas.getPixelRatio(),
              s = o.x * l,
              u = o.y * l;
            this.setAttr('shadowColor', n),
              this.setAttr(
                'shadowBlur',
                r * Math.min(Math.abs(s), Math.abs(u))
              ),
              this.setAttr('shadowOffsetX', a.x * s),
              this.setAttr('shadowOffsetY', a.y * u);
          }),
          e
        );
      })(l);
      e.SceneContext = s;
      var u = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          r(e, t),
          (e.prototype._fill = function (t) {
            this.save(),
              this.setAttr('fillStyle', t.colorKey),
              t._fillFuncHit(this),
              this.restore();
          }),
          (e.prototype.strokeShape = function (t) {
            t.hasHitStroke() && this._stroke(t);
          }),
          (e.prototype._stroke = function (t) {
            if (t.hasHitStroke()) {
              var e = t.getStrokeScaleEnabled();
              if (!e) {
                this.save();
                var n = this.getCanvas().getPixelRatio();
                this.setTransform(n, 0, 0, n, 0, 0);
              }
              this._applyLineCap(t);
              var r = t.hitStrokeWidth(),
                i = 'auto' === r ? t.strokeWidth() : r;
              this.setAttr('lineWidth', i),
                this.setAttr('strokeStyle', t.colorKey),
                t._strokeFuncHit(this),
                e || this.restore();
            }
          }),
          e
        );
      })(l);
      e.HitContext = u;
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(3),
        i = new Map(),
        a = void 0 !== r.Konva._global.PointerEvent;
      function o(t) {
        return { evt: t, pointerId: t.pointerId };
      }
      function l(t, e) {
        var n = i.get(t);
        if (n) {
          var r = n.getStage();
          r && r.content,
            i.delete(t),
            a &&
              n._fire(
                'lostpointercapture',
                o(new PointerEvent('lostpointercapture'))
              );
        }
      }
      (e.getCapturedShape = function (t) {
        return i.get(t);
      }),
        (e.createEvent = o),
        (e.hasPointerCapture = function (t, e) {
          return i.get(t) === e;
        }),
        (e.setPointerCapture = function (t, e) {
          l(t),
            e.getStage() &&
              (i.set(t, e),
              a &&
                e._fire(
                  'gotpointercapture',
                  o(new PointerEvent('gotpointercapture'))
                ));
        }),
        (e.releaseCapture = l);
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n(5),
        a = n(20),
        o = n(6),
        l = n(2),
        s = n(19),
        u = n(4),
        c = n(9),
        f = n(3),
        d = [
          { x: 0, y: 0 },
          { x: -1, y: -1 },
          { x: 1, y: -1 },
          { x: 1, y: 1 },
          { x: -1, y: 1 },
        ],
        h = d.length,
        p = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n.canvas = new s.SceneCanvas()),
              (n.hitCanvas = new s.HitCanvas({ pixelRatio: 1 })),
              (n._waitingForDraw = !1),
              n.on('visibleChange.konva', n._checkVisibility),
              n._checkVisibility(),
              n.on('imageSmoothingEnabledChange.konva', n._setSmoothEnabled),
              n._setSmoothEnabled(),
              n
            );
          }
          return (
            r(e, t),
            (e.prototype.createPNGStream = function () {
              return this.canvas._canvas.createPNGStream();
            }),
            (e.prototype.getCanvas = function () {
              return this.canvas;
            }),
            (e.prototype.getHitCanvas = function () {
              return this.hitCanvas;
            }),
            (e.prototype.getContext = function () {
              return this.getCanvas().getContext();
            }),
            (e.prototype.clear = function (t) {
              return (
                this.getContext().clear(t),
                this.getHitCanvas().getContext().clear(t),
                this
              );
            }),
            (e.prototype.setZIndex = function (e) {
              t.prototype.setZIndex.call(this, e);
              var n = this.getStage();
              return (
                n &&
                  (n.content.removeChild(this.getCanvas()._canvas),
                  e < n.children.length - 1
                    ? n.content.insertBefore(
                        this.getCanvas()._canvas,
                        n.children[e + 1].getCanvas()._canvas
                      )
                    : n.content.appendChild(this.getCanvas()._canvas)),
                this
              );
            }),
            (e.prototype.moveToTop = function () {
              o.Node.prototype.moveToTop.call(this);
              var t = this.getStage();
              return (
                t &&
                  (t.content.removeChild(this.getCanvas()._canvas),
                  t.content.appendChild(this.getCanvas()._canvas)),
                !0
              );
            }),
            (e.prototype.moveUp = function () {
              if (!o.Node.prototype.moveUp.call(this)) return !1;
              var t = this.getStage();
              return (
                !!t &&
                (t.content.removeChild(this.getCanvas()._canvas),
                this.index < t.children.length - 1
                  ? t.content.insertBefore(
                      this.getCanvas()._canvas,
                      t.children[this.index + 1].getCanvas()._canvas
                    )
                  : t.content.appendChild(this.getCanvas()._canvas),
                !0)
              );
            }),
            (e.prototype.moveDown = function () {
              if (o.Node.prototype.moveDown.call(this)) {
                var t = this.getStage();
                if (t) {
                  var e = t.children;
                  t.content.removeChild(this.getCanvas()._canvas),
                    t.content.insertBefore(
                      this.getCanvas()._canvas,
                      e[this.index + 1].getCanvas()._canvas
                    );
                }
                return !0;
              }
              return !1;
            }),
            (e.prototype.moveToBottom = function () {
              if (o.Node.prototype.moveToBottom.call(this)) {
                var t = this.getStage();
                if (t) {
                  var e = t.children;
                  t.content.removeChild(this.getCanvas()._canvas),
                    t.content.insertBefore(
                      this.getCanvas()._canvas,
                      e[1].getCanvas()._canvas
                    );
                }
                return !0;
              }
              return !1;
            }),
            (e.prototype.getLayer = function () {
              return this;
            }),
            (e.prototype.remove = function () {
              var t = this.getCanvas()._canvas;
              return (
                o.Node.prototype.remove.call(this),
                t &&
                  t.parentNode &&
                  i.Util._isInDocument(t) &&
                  t.parentNode.removeChild(t),
                this
              );
            }),
            (e.prototype.getStage = function () {
              return this.parent;
            }),
            (e.prototype.setSize = function (t) {
              var e = t.width,
                n = t.height;
              return (
                this.canvas.setSize(e, n),
                this.hitCanvas.setSize(e, n),
                this._setSmoothEnabled(),
                this
              );
            }),
            (e.prototype._validateAdd = function (t) {
              var e = t.getType();
              'Group' !== e &&
                'Shape' !== e &&
                i.Util.throw('You may only add groups and shapes to a layer.');
            }),
            (e.prototype._toKonvaCanvas = function (t) {
              return (
                ((t = t || {}).width = t.width || this.getWidth()),
                (t.height = t.height || this.getHeight()),
                (t.x = void 0 !== t.x ? t.x : this.x()),
                (t.y = void 0 !== t.y ? t.y : this.y()),
                o.Node.prototype._toKonvaCanvas.call(this, t)
              );
            }),
            (e.prototype._checkVisibility = function () {
              var t = this.visible();
              this.canvas._canvas.style.display = t ? 'block' : 'none';
            }),
            (e.prototype._setSmoothEnabled = function () {
              this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
            }),
            (e.prototype.getWidth = function () {
              if (this.parent) return this.parent.width();
            }),
            (e.prototype.setWidth = function () {
              i.Util.warn(
                'Can not change width of layer. Use "stage.width(value)" function instead.'
              );
            }),
            (e.prototype.getHeight = function () {
              if (this.parent) return this.parent.height();
            }),
            (e.prototype.setHeight = function () {
              i.Util.warn(
                'Can not change height of layer. Use "stage.height(value)" function instead.'
              );
            }),
            (e.prototype.batchDraw = function () {
              var t = this;
              return (
                this._waitingForDraw ||
                  ((this._waitingForDraw = !0),
                  i.Util.requestAnimFrame(function () {
                    t.draw(), (t._waitingForDraw = !1);
                  })),
                this
              );
            }),
            (e.prototype.getIntersection = function (t, e) {
              var n, r, i, a;
              if (!this.isListening() || !this.isVisible()) return null;
              for (var o = 1, l = !1; ; ) {
                for (r = 0; r < h; r++) {
                  if (
                    ((i = d[r]),
                    (a = (n = this._getIntersection({
                      x: t.x + i.x * o,
                      y: t.y + i.y * o,
                    })).shape) && e)
                  )
                    return a.findAncestor(e, !0);
                  if (a) return a;
                  if (((l = !!n.antialiased), !n.antialiased)) break;
                }
                if (!l) return null;
                o += 1;
              }
            }),
            (e.prototype._getIntersection = function (t) {
              var e,
                n,
                r = this.hitCanvas.pixelRatio,
                a = this.hitCanvas.context.getImageData(
                  Math.round(t.x * r),
                  Math.round(t.y * r),
                  1,
                  1
                ).data,
                o = a[3];
              return 255 === o
                ? ((e = i.Util._rgbToHex(a[0], a[1], a[2])),
                  (n = c.shapes['#' + e]) ? { shape: n } : { antialiased: !0 })
                : o > 0
                ? { antialiased: !0 }
                : {};
            }),
            (e.prototype.drawScene = function (t, e) {
              var n = this.getLayer(),
                r = t || (n && n.getCanvas());
              return (
                this._fire('beforeDraw', { node: this }),
                this.clearBeforeDraw() && r.getContext().clear(),
                a.Container.prototype.drawScene.call(this, r, e),
                this._fire('draw', { node: this }),
                this
              );
            }),
            (e.prototype.drawHit = function (t, e) {
              var n = this.getLayer(),
                r = t || (n && n.hitCanvas);
              return (
                n &&
                  n.clearBeforeDraw() &&
                  n.getHitCanvas().getContext().clear(),
                a.Container.prototype.drawHit.call(this, r, e),
                this
              );
            }),
            (e.prototype.enableHitGraph = function () {
              return this.hitGraphEnabled(!0), this;
            }),
            (e.prototype.disableHitGraph = function () {
              return this.hitGraphEnabled(!1), this;
            }),
            (e.prototype.setHitGraphEnabled = function (t) {
              i.Util.warn(
                'hitGraphEnabled method is deprecated. Please use layer.listening() instead.'
              ),
                this.listening(t);
            }),
            (e.prototype.getHitGraphEnabled = function (t) {
              return (
                i.Util.warn(
                  'hitGraphEnabled method is deprecated. Please use layer.listening() instead.'
                ),
                this.listening()
              );
            }),
            (e.prototype.toggleHitCanvas = function () {
              if (this.parent) {
                var t = this.parent;
                !!this.hitCanvas._canvas.parentNode
                  ? t.content.removeChild(this.hitCanvas._canvas)
                  : t.content.appendChild(this.hitCanvas._canvas);
              }
            }),
            e
          );
        })(a.Container);
      (e.Layer = p),
        (p.prototype.nodeType = 'Layer'),
        f._registerNode(p),
        l.Factory.addGetterSetter(p, 'imageSmoothingEnabled', !0),
        l.Factory.addGetterSetter(p, 'clearBeforeDraw', !0),
        l.Factory.addGetterSetter(
          p,
          'hitGraphEnabled',
          !0,
          u.getBooleanValidator()
        ),
        i.Collection.mapMethods(p);
    },
    function (t, e, n) {
      'use strict';
      (e.__esModule = !0),
        (e.toggleStrictMode = function (t) {
          l = t;
        }),
        (e.applyNodeProps = function (t, e) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c;
          e === n && console.error('same props');
          !i && 'zIndex' in e && (console.warn(u), (i = !0));
          if (!a && e.draggable) {
            var d = void 0 !== e.x || void 0 !== e.y,
              h = e.onDragEnd || e.onDragMove;
            d && !h && (console.warn(s), (a = !0));
          }
          for (var p in n)
            if (!r[p]) {
              var g = 'on' === p.slice(0, 2),
                v = n[p] !== e[p];
              if (g && v)
                'content' === (x = p.substr(2).toLowerCase()).substr(0, 7) &&
                  (x = 'content' + x.substr(7, 1).toUpperCase() + x.substr(8)),
                  t.off(x, n[p]);
              var y = !e.hasOwnProperty(p);
              y && t.setAttr(p, void 0);
            }
          var m = l || e._useStrictMode,
            b = {},
            _ = !1,
            w = {};
          for (var p in e)
            if (!r[p]) {
              g = 'on' === p.slice(0, 2);
              var S = n[p] !== e[p];
              if (g && S)
                'content' === (x = p.substr(2).toLowerCase()).substr(0, 7) &&
                  (x = 'content' + x.substr(7, 1).toUpperCase() + x.substr(8)),
                  e[p] && (w[x] = e[p]);
              !g &&
                (e[p] !== n[p] || (m && e[p] !== t.getAttr(p))) &&
                ((_ = !0), (b[p] = e[p]));
            }
          _ && (t.setAttrs(b), f(t));
          for (var x in w) t.on(x + o, w[x]);
        }),
        (e.updatePicture = f);
      var r = {
          children: !0,
          ref: !0,
          key: !0,
          style: !0,
          forwardedRef: !0,
          unstable_applyCache: !0,
          unstable_applyDrawHitFromCache: !0,
        },
        i = !1,
        a = !1,
        o = (e.EVENTS_NAMESPACE = '.react-konva-event'),
        l = !1;
      var s =
          'ReactKonva: You have a Konva node with draggable = true and position defined but no onDragMove or onDragEnd events are handled.\nPosition of a node will be changed during drag&drop, so you should update state of the react app as well.\nConsider to add onDragMove or onDragEnd events.\nFor more info see: https://github.com/konvajs/react-konva/issues/256\n',
        u =
          'ReactKonva: You are using "zIndex" attribute for a Konva node.\nreact-konva may get confused with ordering. Just define correct order of elements in your render function of a component.\nFor more info see: https://github.com/konvajs/react-konva/issues/194\n',
        c = {};
      function f(t) {
        var e = t.getLayer() || t.getStage();
        e && e.batchDraw();
      }
    },
    function (t, e, n) {
      'use strict';
      var r =
          (this && this.__extends) ||
          (function () {
            var t = function (e, n) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(e, n);
            };
            return function (e, n) {
              function r() {
                this.constructor = e;
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
        i =
          (this && this.__spreadArrays) ||
          function () {
            for (var t = 0, e = 0, n = arguments.length; e < n; e++)
              t += arguments[e].length;
            var r = Array(t),
              i = 0;
            for (e = 0; e < n; e++)
              for (var a = arguments[e], o = 0, l = a.length; o < l; o++, i++)
                r[i] = a[o];
            return r;
          };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var a = n(5),
        o = n(2),
        l = n(9),
        s = n(4),
        u = n(3),
        c = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              n.on(
                'pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva',
                function () {
                  this._clearCache('tensionPoints');
                }
              ),
              n
            );
          }
          return (
            r(e, t),
            (e.prototype._sceneFunc = function (t) {
              var e,
                n,
                r,
                i = this.points(),
                a = i.length,
                o = this.tension(),
                l = this.closed(),
                s = this.bezier();
              if (a) {
                if ((t.beginPath(), t.moveTo(i[0], i[1]), 0 !== o && a > 4)) {
                  for (
                    n = (e = this.getTensionPoints()).length,
                      r = l ? 0 : 4,
                      l || t.quadraticCurveTo(e[0], e[1], e[2], e[3]);
                    r < n - 2;

                  )
                    t.bezierCurveTo(
                      e[r++],
                      e[r++],
                      e[r++],
                      e[r++],
                      e[r++],
                      e[r++]
                    );
                  l ||
                    t.quadraticCurveTo(e[n - 2], e[n - 1], i[a - 2], i[a - 1]);
                } else if (s)
                  for (r = 2; r < a; )
                    t.bezierCurveTo(
                      i[r++],
                      i[r++],
                      i[r++],
                      i[r++],
                      i[r++],
                      i[r++]
                    );
                else for (r = 2; r < a; r += 2) t.lineTo(i[r], i[r + 1]);
                l
                  ? (t.closePath(), t.fillStrokeShape(this))
                  : t.strokeShape(this);
              }
            }),
            (e.prototype.getTensionPoints = function () {
              return this._getCache('tensionPoints', this._getTensionPoints);
            }),
            (e.prototype._getTensionPoints = function () {
              return this.closed()
                ? this._getTensionPointsClosed()
                : a.Util._expandPoints(this.points(), this.tension());
            }),
            (e.prototype._getTensionPointsClosed = function () {
              var t = this.points(),
                e = t.length,
                n = this.tension(),
                r = a.Util._getControlPoints(
                  t[e - 2],
                  t[e - 1],
                  t[0],
                  t[1],
                  t[2],
                  t[3],
                  n
                ),
                i = a.Util._getControlPoints(
                  t[e - 4],
                  t[e - 3],
                  t[e - 2],
                  t[e - 1],
                  t[0],
                  t[1],
                  n
                ),
                o = a.Util._expandPoints(t, n);
              return [r[2], r[3]]
                .concat(o)
                .concat([
                  i[0],
                  i[1],
                  t[e - 2],
                  t[e - 1],
                  i[2],
                  i[3],
                  r[0],
                  r[1],
                  t[0],
                  t[1],
                ]);
            }),
            (e.prototype.getWidth = function () {
              return this.getSelfRect().width;
            }),
            (e.prototype.getHeight = function () {
              return this.getSelfRect().height;
            }),
            (e.prototype.getSelfRect = function () {
              var t = this.points();
              if (t.length < 4)
                return { x: t[0] || 0, y: t[1] || 0, width: 0, height: 0 };
              for (
                var e,
                  n,
                  r = (t =
                    0 !== this.tension()
                      ? i([t[0], t[1]], this._getTensionPoints(), [
                          t[t.length - 2],
                          t[t.length - 1],
                        ])
                      : this.points())[0],
                  a = t[0],
                  o = t[1],
                  l = t[1],
                  s = 0;
                s < t.length / 2;
                s++
              )
                (e = t[2 * s]),
                  (n = t[2 * s + 1]),
                  (r = Math.min(r, e)),
                  (a = Math.max(a, e)),
                  (o = Math.min(o, n)),
                  (l = Math.max(l, n));
              return { x: r, y: o, width: a - r, height: l - o };
            }),
            e
          );
        })(l.Shape);
      (e.Line = c),
        (c.prototype.className = 'Line'),
        (c.prototype._attrsAffectingSize = ['points', 'bezier', 'tension']),
        u._registerNode(c),
        o.Factory.addGetterSetter(c, 'closed', !1),
        o.Factory.addGetterSetter(c, 'bezier', !1),
        o.Factory.addGetterSetter(c, 'tension', 0, s.getNumberValidator()),
        o.Factory.addGetterSetter(c, 'points', [], s.getNumberArrayValidator()),
        a.Collection.mapMethods(c);
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n(5),
        a = n(2),
        o = n(9),
        l = n(3),
        s = (function (t) {
          function e(n) {
            var r = t.call(this, n) || this;
            (r.dataArray = []),
              (r.pathLength = 0),
              (r.dataArray = e.parsePathData(r.data())),
              (r.pathLength = 0);
            for (var i = 0; i < r.dataArray.length; ++i)
              r.pathLength += r.dataArray[i].pathLength;
            return (
              r.on('dataChange.konva', function () {
                (this.dataArray = e.parsePathData(this.data())),
                  (this.pathLength = 0);
                for (var t = 0; t < this.dataArray.length; ++t)
                  this.pathLength += this.dataArray[t].pathLength;
              }),
              r
            );
          }
          return (
            r(e, t),
            (e.prototype._sceneFunc = function (t) {
              var e = this.dataArray;
              t.beginPath();
              for (var n = !1, r = 0; r < e.length; r++) {
                var i = e[r].command,
                  a = e[r].points;
                switch (i) {
                  case 'L':
                    t.lineTo(a[0], a[1]);
                    break;
                  case 'M':
                    t.moveTo(a[0], a[1]);
                    break;
                  case 'C':
                    t.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
                    break;
                  case 'Q':
                    t.quadraticCurveTo(a[0], a[1], a[2], a[3]);
                    break;
                  case 'A':
                    var o = a[0],
                      l = a[1],
                      s = a[2],
                      u = a[3],
                      c = a[4],
                      f = a[5],
                      d = a[6],
                      h = a[7],
                      p = s > u ? s : u,
                      g = s > u ? 1 : s / u,
                      v = s > u ? u / s : 1;
                    t.translate(o, l),
                      t.rotate(d),
                      t.scale(g, v),
                      t.arc(0, 0, p, c, c + f, 1 - h),
                      t.scale(1 / g, 1 / v),
                      t.rotate(-d),
                      t.translate(-o, -l);
                    break;
                  case 'z':
                    (n = !0), t.closePath();
                }
              }
              n || this.hasFill()
                ? t.fillStrokeShape(this)
                : t.strokeShape(this);
            }),
            (e.prototype.getSelfRect = function () {
              var t = [];
              this.dataArray.forEach(function (n) {
                if ('A' === n.command) {
                  var r = n.points[4],
                    i = n.points[5],
                    a = n.points[4] + i,
                    o = Math.PI / 180;
                  if ((Math.abs(r - a) < o && (o = Math.abs(r - a)), i < 0))
                    for (var l = r - o; l > a; l -= o) {
                      var s = e.getPointOnEllipticalArc(
                        n.points[0],
                        n.points[1],
                        n.points[2],
                        n.points[3],
                        l,
                        0
                      );
                      t.push(s.x, s.y);
                    }
                  else
                    for (l = r + o; l < a; l += o) {
                      s = e.getPointOnEllipticalArc(
                        n.points[0],
                        n.points[1],
                        n.points[2],
                        n.points[3],
                        l,
                        0
                      );
                      t.push(s.x, s.y);
                    }
                } else if ('C' === n.command)
                  for (l = 0; l <= 1; l += 0.01) {
                    s = e.getPointOnCubicBezier(
                      l,
                      n.start.x,
                      n.start.y,
                      n.points[0],
                      n.points[1],
                      n.points[2],
                      n.points[3],
                      n.points[4],
                      n.points[5]
                    );
                    t.push(s.x, s.y);
                  }
                else t = t.concat(n.points);
              });
              for (
                var n, r, i = t[0], a = t[0], o = t[1], l = t[1], s = 0;
                s < t.length / 2;
                s++
              )
                (n = t[2 * s]),
                  (r = t[2 * s + 1]),
                  isNaN(n) || ((i = Math.min(i, n)), (a = Math.max(a, n))),
                  isNaN(r) || ((o = Math.min(o, r)), (l = Math.max(l, r)));
              return {
                x: Math.round(i),
                y: Math.round(o),
                width: Math.round(a - i),
                height: Math.round(l - o),
              };
            }),
            (e.prototype.getLength = function () {
              return this.pathLength;
            }),
            (e.prototype.getPointAtLength = function (t) {
              var n,
                r = 0,
                i = this.dataArray.length;
              if (!i) return null;
              for (; r < i && t > this.dataArray[r].pathLength; )
                (t -= this.dataArray[r].pathLength), ++r;
              if (r === i)
                return {
                  x: (n = this.dataArray[r - 1].points.slice(-2))[0],
                  y: n[1],
                };
              if (t < 0.01)
                return {
                  x: (n = this.dataArray[r].points.slice(0, 2))[0],
                  y: n[1],
                };
              var a = this.dataArray[r],
                o = a.points;
              switch (a.command) {
                case 'L':
                  return e.getPointOnLine(t, a.start.x, a.start.y, o[0], o[1]);
                case 'C':
                  return e.getPointOnCubicBezier(
                    t / a.pathLength,
                    a.start.x,
                    a.start.y,
                    o[0],
                    o[1],
                    o[2],
                    o[3],
                    o[4],
                    o[5]
                  );
                case 'Q':
                  return e.getPointOnQuadraticBezier(
                    t / a.pathLength,
                    a.start.x,
                    a.start.y,
                    o[0],
                    o[1],
                    o[2],
                    o[3]
                  );
                case 'A':
                  var l = o[0],
                    s = o[1],
                    u = o[2],
                    c = o[3],
                    f = o[4],
                    d = o[5],
                    h = o[6];
                  return (
                    (f += (d * t) / a.pathLength),
                    e.getPointOnEllipticalArc(l, s, u, c, f, h)
                  );
              }
              return null;
            }),
            (e.getLineLength = function (t, e, n, r) {
              return Math.sqrt((n - t) * (n - t) + (r - e) * (r - e));
            }),
            (e.getPointOnLine = function (t, e, n, r, i, a, o) {
              void 0 === a && (a = e), void 0 === o && (o = n);
              var l = (i - n) / (r - e + 1e-8),
                s = Math.sqrt((t * t) / (1 + l * l));
              r < e && (s *= -1);
              var u,
                c = l * s;
              if (r === e) u = { x: a, y: o + c };
              else if ((o - n) / (a - e + 1e-8) === l)
                u = { x: a + s, y: o + c };
              else {
                var f,
                  d,
                  h = this.getLineLength(e, n, r, i);
                if (h < 1e-8) return;
                var p = (a - e) * (r - e) + (o - n) * (i - n);
                (f = e + (p /= h * h) * (r - e)), (d = n + p * (i - n));
                var g = this.getLineLength(a, o, f, d),
                  v = Math.sqrt(t * t - g * g);
                (s = Math.sqrt((v * v) / (1 + l * l))),
                  r < e && (s *= -1),
                  (u = { x: f + s, y: d + (c = l * s) });
              }
              return u;
            }),
            (e.getPointOnCubicBezier = function (t, e, n, r, i, a, o, l, s) {
              function u(t) {
                return t * t * t;
              }
              function c(t) {
                return 3 * t * t * (1 - t);
              }
              function f(t) {
                return 3 * t * (1 - t) * (1 - t);
              }
              function d(t) {
                return (1 - t) * (1 - t) * (1 - t);
              }
              return {
                x: l * u(t) + a * c(t) + r * f(t) + e * d(t),
                y: s * u(t) + o * c(t) + i * f(t) + n * d(t),
              };
            }),
            (e.getPointOnQuadraticBezier = function (t, e, n, r, i, a, o) {
              function l(t) {
                return t * t;
              }
              function s(t) {
                return 2 * t * (1 - t);
              }
              function u(t) {
                return (1 - t) * (1 - t);
              }
              return {
                x: a * l(t) + r * s(t) + e * u(t),
                y: o * l(t) + i * s(t) + n * u(t),
              };
            }),
            (e.getPointOnEllipticalArc = function (t, e, n, r, i, a) {
              var o = Math.cos(a),
                l = Math.sin(a),
                s = n * Math.cos(i),
                u = r * Math.sin(i);
              return { x: t + (s * o - u * l), y: e + (s * l + u * o) };
            }),
            (e.parsePathData = function (t) {
              if (!t) return [];
              var e = t,
                n = [
                  'm',
                  'M',
                  'l',
                  'L',
                  'v',
                  'V',
                  'h',
                  'H',
                  'z',
                  'Z',
                  'c',
                  'C',
                  'q',
                  'Q',
                  't',
                  'T',
                  's',
                  'S',
                  'a',
                  'A',
                ];
              e = e.replace(new RegExp(' ', 'g'), ',');
              for (var r = 0; r < n.length; r++)
                e = e.replace(new RegExp(n[r], 'g'), '|' + n[r]);
              var i,
                a = e.split('|'),
                o = [],
                l = [],
                s = 0,
                u = 0,
                c = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
              for (r = 1; r < a.length; r++) {
                var f = a[r],
                  d = f.charAt(0);
                for (f = f.slice(1), l.length = 0; (i = c.exec(f)); )
                  l.push(i[0]);
                for (var h = [], p = 0, g = l.length; p < g; p++) {
                  var v = parseFloat(l[p]);
                  isNaN(v) ? h.push(0) : h.push(v);
                }
                for (; h.length > 0 && !isNaN(h[0]); ) {
                  var y,
                    m,
                    b,
                    _,
                    w,
                    S,
                    x,
                    k,
                    C,
                    P,
                    E = null,
                    T = [],
                    O = s,
                    N = u;
                  switch (d) {
                    case 'l':
                      (s += h.shift()),
                        (u += h.shift()),
                        (E = 'L'),
                        T.push(s, u);
                      break;
                    case 'L':
                      (s = h.shift()), (u = h.shift()), T.push(s, u);
                      break;
                    case 'm':
                      var M = h.shift(),
                        A = h.shift();
                      if (
                        ((s += M),
                        (u += A),
                        (E = 'M'),
                        o.length > 2 && 'z' === o[o.length - 1].command)
                      )
                        for (var F = o.length - 2; F >= 0; F--)
                          if ('M' === o[F].command) {
                            (s = o[F].points[0] + M), (u = o[F].points[1] + A);
                            break;
                          }
                      T.push(s, u), (d = 'l');
                      break;
                    case 'M':
                      (s = h.shift()),
                        (u = h.shift()),
                        (E = 'M'),
                        T.push(s, u),
                        (d = 'L');
                      break;
                    case 'h':
                      (s += h.shift()), (E = 'L'), T.push(s, u);
                      break;
                    case 'H':
                      (s = h.shift()), (E = 'L'), T.push(s, u);
                      break;
                    case 'v':
                      (u += h.shift()), (E = 'L'), T.push(s, u);
                      break;
                    case 'V':
                      (u = h.shift()), (E = 'L'), T.push(s, u);
                      break;
                    case 'C':
                      T.push(h.shift(), h.shift(), h.shift(), h.shift()),
                        (s = h.shift()),
                        (u = h.shift()),
                        T.push(s, u);
                      break;
                    case 'c':
                      T.push(
                        s + h.shift(),
                        u + h.shift(),
                        s + h.shift(),
                        u + h.shift()
                      ),
                        (s += h.shift()),
                        (u += h.shift()),
                        (E = 'C'),
                        T.push(s, u);
                      break;
                    case 'S':
                      (m = s),
                        (b = u),
                        'C' === (y = o[o.length - 1]).command &&
                          ((m = s + (s - y.points[2])),
                          (b = u + (u - y.points[3]))),
                        T.push(m, b, h.shift(), h.shift()),
                        (s = h.shift()),
                        (u = h.shift()),
                        (E = 'C'),
                        T.push(s, u);
                      break;
                    case 's':
                      (m = s),
                        (b = u),
                        'C' === (y = o[o.length - 1]).command &&
                          ((m = s + (s - y.points[2])),
                          (b = u + (u - y.points[3]))),
                        T.push(m, b, s + h.shift(), u + h.shift()),
                        (s += h.shift()),
                        (u += h.shift()),
                        (E = 'C'),
                        T.push(s, u);
                      break;
                    case 'Q':
                      T.push(h.shift(), h.shift()),
                        (s = h.shift()),
                        (u = h.shift()),
                        T.push(s, u);
                      break;
                    case 'q':
                      T.push(s + h.shift(), u + h.shift()),
                        (s += h.shift()),
                        (u += h.shift()),
                        (E = 'Q'),
                        T.push(s, u);
                      break;
                    case 'T':
                      (m = s),
                        (b = u),
                        'Q' === (y = o[o.length - 1]).command &&
                          ((m = s + (s - y.points[0])),
                          (b = u + (u - y.points[1]))),
                        (s = h.shift()),
                        (u = h.shift()),
                        (E = 'Q'),
                        T.push(m, b, s, u);
                      break;
                    case 't':
                      (m = s),
                        (b = u),
                        'Q' === (y = o[o.length - 1]).command &&
                          ((m = s + (s - y.points[0])),
                          (b = u + (u - y.points[1]))),
                        (s += h.shift()),
                        (u += h.shift()),
                        (E = 'Q'),
                        T.push(m, b, s, u);
                      break;
                    case 'A':
                      (_ = h.shift()),
                        (w = h.shift()),
                        (S = h.shift()),
                        (x = h.shift()),
                        (k = h.shift()),
                        (C = s),
                        (P = u),
                        (s = h.shift()),
                        (u = h.shift()),
                        (E = 'A'),
                        (T = this.convertEndpointToCenterParameterization(
                          C,
                          P,
                          s,
                          u,
                          x,
                          k,
                          _,
                          w,
                          S
                        ));
                      break;
                    case 'a':
                      (_ = h.shift()),
                        (w = h.shift()),
                        (S = h.shift()),
                        (x = h.shift()),
                        (k = h.shift()),
                        (C = s),
                        (P = u),
                        (s += h.shift()),
                        (u += h.shift()),
                        (E = 'A'),
                        (T = this.convertEndpointToCenterParameterization(
                          C,
                          P,
                          s,
                          u,
                          x,
                          k,
                          _,
                          w,
                          S
                        ));
                  }
                  o.push({
                    command: E || d,
                    points: T,
                    start: { x: O, y: N },
                    pathLength: this.calcLength(O, N, E || d, T),
                  });
                }
                ('z' !== d && 'Z' !== d) ||
                  o.push({
                    command: 'z',
                    points: [],
                    start: void 0,
                    pathLength: 0,
                  });
              }
              return o;
            }),
            (e.calcLength = function (t, n, r, i) {
              var a,
                o,
                l,
                s,
                u = e;
              switch (r) {
                case 'L':
                  return u.getLineLength(t, n, i[0], i[1]);
                case 'C':
                  for (
                    a = 0,
                      o = u.getPointOnCubicBezier(
                        0,
                        t,
                        n,
                        i[0],
                        i[1],
                        i[2],
                        i[3],
                        i[4],
                        i[5]
                      ),
                      s = 0.01;
                    s <= 1;
                    s += 0.01
                  )
                    (l = u.getPointOnCubicBezier(
                      s,
                      t,
                      n,
                      i[0],
                      i[1],
                      i[2],
                      i[3],
                      i[4],
                      i[5]
                    )),
                      (a += u.getLineLength(o.x, o.y, l.x, l.y)),
                      (o = l);
                  return a;
                case 'Q':
                  for (
                    a = 0,
                      o = u.getPointOnQuadraticBezier(
                        0,
                        t,
                        n,
                        i[0],
                        i[1],
                        i[2],
                        i[3]
                      ),
                      s = 0.01;
                    s <= 1;
                    s += 0.01
                  )
                    (l = u.getPointOnQuadraticBezier(
                      s,
                      t,
                      n,
                      i[0],
                      i[1],
                      i[2],
                      i[3]
                    )),
                      (a += u.getLineLength(o.x, o.y, l.x, l.y)),
                      (o = l);
                  return a;
                case 'A':
                  a = 0;
                  var c = i[4],
                    f = i[5],
                    d = i[4] + f,
                    h = Math.PI / 180;
                  if (
                    (Math.abs(c - d) < h && (h = Math.abs(c - d)),
                    (o = u.getPointOnEllipticalArc(
                      i[0],
                      i[1],
                      i[2],
                      i[3],
                      c,
                      0
                    )),
                    f < 0)
                  )
                    for (s = c - h; s > d; s -= h)
                      (l = u.getPointOnEllipticalArc(
                        i[0],
                        i[1],
                        i[2],
                        i[3],
                        s,
                        0
                      )),
                        (a += u.getLineLength(o.x, o.y, l.x, l.y)),
                        (o = l);
                  else
                    for (s = c + h; s < d; s += h)
                      (l = u.getPointOnEllipticalArc(
                        i[0],
                        i[1],
                        i[2],
                        i[3],
                        s,
                        0
                      )),
                        (a += u.getLineLength(o.x, o.y, l.x, l.y)),
                        (o = l);
                  return (
                    (l = u.getPointOnEllipticalArc(
                      i[0],
                      i[1],
                      i[2],
                      i[3],
                      d,
                      0
                    )),
                    (a += u.getLineLength(o.x, o.y, l.x, l.y))
                  );
              }
              return 0;
            }),
            (e.convertEndpointToCenterParameterization = function (
              t,
              e,
              n,
              r,
              i,
              a,
              o,
              l,
              s
            ) {
              var u = s * (Math.PI / 180),
                c = (Math.cos(u) * (t - n)) / 2 + (Math.sin(u) * (e - r)) / 2,
                f =
                  (-1 * Math.sin(u) * (t - n)) / 2 +
                  (Math.cos(u) * (e - r)) / 2,
                d = (c * c) / (o * o) + (f * f) / (l * l);
              d > 1 && ((o *= Math.sqrt(d)), (l *= Math.sqrt(d)));
              var h = Math.sqrt(
                (o * o * (l * l) - o * o * (f * f) - l * l * (c * c)) /
                  (o * o * (f * f) + l * l * (c * c))
              );
              i === a && (h *= -1), isNaN(h) && (h = 0);
              var p = (h * o * f) / l,
                g = (h * -l * c) / o,
                v = (t + n) / 2 + Math.cos(u) * p - Math.sin(u) * g,
                y = (e + r) / 2 + Math.sin(u) * p + Math.cos(u) * g,
                m = function (t) {
                  return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
                },
                b = function (t, e) {
                  return (t[0] * e[0] + t[1] * e[1]) / (m(t) * m(e));
                },
                _ = function (t, e) {
                  return (
                    (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(b(t, e))
                  );
                },
                w = _([1, 0], [(c - p) / o, (f - g) / l]),
                S = [(c - p) / o, (f - g) / l],
                x = [(-1 * c - p) / o, (-1 * f - g) / l],
                k = _(S, x);
              return (
                b(S, x) <= -1 && (k = Math.PI),
                b(S, x) >= 1 && (k = 0),
                0 === a && k > 0 && (k -= 2 * Math.PI),
                1 === a && k < 0 && (k += 2 * Math.PI),
                [v, y, o, l, w, k, u, a]
              );
            }),
            e
          );
        })(o.Shape);
      (e.Path = s),
        (s.prototype.className = 'Path'),
        (s.prototype._attrsAffectingSize = ['data']),
        l._registerNode(s),
        a.Factory.addGetterSetter(s, 'data'),
        i.Collection.mapMethods(s);
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n(5),
        a = n(2),
        o = n(9),
        l = n(3),
        s = n(4),
        u = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            r(e, t),
            (e.prototype._sceneFunc = function (t) {
              var e = this.cornerRadius(),
                n = this.width(),
                r = this.height();
              if ((t.beginPath(), e)) {
                var i = 0,
                  a = 0,
                  o = 0,
                  l = 0;
                'number' === typeof e
                  ? (i = a = o = l = Math.min(e, n / 2, r / 2))
                  : ((i = Math.min(e[0] || 0, n / 2, r / 2)),
                    (a = Math.min(e[1] || 0, n / 2, r / 2)),
                    (l = Math.min(e[2] || 0, n / 2, r / 2)),
                    (o = Math.min(e[3] || 0, n / 2, r / 2))),
                  t.moveTo(i, 0),
                  t.lineTo(n - a, 0),
                  t.arc(n - a, a, a, (3 * Math.PI) / 2, 0, !1),
                  t.lineTo(n, r - l),
                  t.arc(n - l, r - l, l, 0, Math.PI / 2, !1),
                  t.lineTo(o, r),
                  t.arc(o, r - o, o, Math.PI / 2, Math.PI, !1),
                  t.lineTo(0, i),
                  t.arc(i, i, i, Math.PI, (3 * Math.PI) / 2, !1);
              } else t.rect(0, 0, n, r);
              t.closePath(), t.fillStrokeShape(this);
            }),
            e
          );
        })(o.Shape);
      (e.Rect = u),
        (u.prototype.className = 'Rect'),
        l._registerNode(u),
        a.Factory.addGetterSetter(
          u,
          'cornerRadius',
          0,
          s.getNumberOrArrayOfNumbersValidator(4)
        ),
        i.Collection.mapMethods(u);
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n(5),
        a = n(2),
        o = n(9),
        l = n(3),
        s = n(4),
        u = n(3);
      function c(t) {
        return Array.from(t);
      }
      e.stringToArray = c;
      var f,
        d = 'auto',
        h = 'justify',
        p = 'left',
        g = 'middle',
        v = 'normal',
        y = ' ',
        m = '\u2026',
        b = [
          'fontFamily',
          'fontSize',
          'fontStyle',
          'fontVariant',
          'padding',
          'align',
          'verticalAlign',
          'lineHeight',
          'text',
          'width',
          'height',
          'wrap',
          'ellipsis',
          'letterSpacing',
        ],
        _ = b.length;
      function w() {
        return f || (f = i.Util.createCanvasElement().getContext('2d'));
      }
      var S = (function (t) {
        function e(e) {
          var n =
            t.call(
              this,
              (function (t) {
                return (
                  (t = t || {}).fillLinearGradientColorStops ||
                    t.fillRadialGradientColorStops ||
                    t.fillPatternImage ||
                    (t.fill = t.fill || 'black'),
                  t
                );
              })(e)
            ) || this;
          (n._partialTextX = 0), (n._partialTextY = 0);
          for (var r = 0; r < _; r++)
            n.on(b[r] + 'Change.konva', n._setTextData);
          return n._setTextData(), n;
        }
        return (
          r(e, t),
          (e.prototype._sceneFunc = function (t) {
            var e = this.textArr,
              n = e.length;
            if (this.text()) {
              var r,
                i = this.padding(),
                a = this.fontSize(),
                o = this.lineHeight() * a,
                l = this.verticalAlign(),
                s = 0,
                u = this.align(),
                f = this.getWidth(),
                d = this.letterSpacing(),
                v = this.fill(),
                y = this.textDecoration(),
                m = -1 !== y.indexOf('underline'),
                b = -1 !== y.indexOf('line-through'),
                _ = 0,
                w = ((_ = o / 2), 0),
                S = 0;
              for (
                t.setAttr('font', this._getContextFont()),
                  t.setAttr('textBaseline', g),
                  t.setAttr('textAlign', p),
                  l === g
                    ? (s = (this.getHeight() - n * o - 2 * i) / 2)
                    : 'bottom' === l && (s = this.getHeight() - n * o - 2 * i),
                  t.translate(i, s + i),
                  r = 0;
                r < n;
                r++
              ) {
                (w = 0), (S = 0);
                var x,
                  k,
                  C,
                  P = e[r],
                  E = P.text,
                  T = P.width,
                  O = r !== n - 1;
                if (
                  (t.save(),
                  'right' === u
                    ? (w += f - T - 2 * i)
                    : 'center' === u && (w += (f - T - 2 * i) / 2),
                  m &&
                    (t.save(),
                    t.beginPath(),
                    t.moveTo(w, _ + S + Math.round(a / 2)),
                    (k = 0 === (x = E.split(' ').length - 1)),
                    (C = u === h && O && !k ? f - 2 * i : T),
                    t.lineTo(w + Math.round(C), _ + S + Math.round(a / 2)),
                    (t.lineWidth = a / 15),
                    (t.strokeStyle = v),
                    t.stroke(),
                    t.restore()),
                  b &&
                    (t.save(),
                    t.beginPath(),
                    t.moveTo(w, _ + S),
                    (k = 0 === (x = E.split(' ').length - 1)),
                    (C = u === h && O && !k ? f - 2 * i : T),
                    t.lineTo(w + Math.round(C), _ + S),
                    (t.lineWidth = a / 15),
                    (t.strokeStyle = v),
                    t.stroke(),
                    t.restore()),
                  0 !== d || u === h)
                ) {
                  x = E.split(' ').length - 1;
                  for (var N = c(E), M = 0; M < N.length; M++) {
                    var A = N[M];
                    ' ' === A &&
                      r !== n - 1 &&
                      u === h &&
                      (w += (f - 2 * i - T) / x),
                      (this._partialTextX = w),
                      (this._partialTextY = _ + S),
                      (this._partialText = A),
                      t.fillStrokeShape(this),
                      (w += this.measureSize(A).width + d);
                  }
                } else
                  (this._partialTextX = w),
                    (this._partialTextY = _ + S),
                    (this._partialText = E),
                    t.fillStrokeShape(this);
                t.restore(), n > 1 && (_ += o);
              }
            }
          }),
          (e.prototype._hitFunc = function (t) {
            var e = this.getWidth(),
              n = this.getHeight();
            t.beginPath(),
              t.rect(0, 0, e, n),
              t.closePath(),
              t.fillStrokeShape(this);
          }),
          (e.prototype.setText = function (t) {
            var e = i.Util._isString(t)
              ? t
              : null === t || void 0 === t
              ? ''
              : t + '';
            return this._setAttr('text', e), this;
          }),
          (e.prototype.getWidth = function () {
            return this.attrs.width === d || void 0 === this.attrs.width
              ? this.getTextWidth() + 2 * this.padding()
              : this.attrs.width;
          }),
          (e.prototype.getHeight = function () {
            return this.attrs.height === d || void 0 === this.attrs.height
              ? this.fontSize() * this.textArr.length * this.lineHeight() +
                  2 * this.padding()
              : this.attrs.height;
          }),
          (e.prototype.getTextWidth = function () {
            return this.textWidth;
          }),
          (e.prototype.getTextHeight = function () {
            return (
              i.Util.warn(
                'text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height.'
              ),
              this.textHeight
            );
          }),
          (e.prototype.measureSize = function (t) {
            var e,
              n = w(),
              r = this.fontSize();
            return (
              n.save(),
              (n.font = this._getContextFont()),
              (e = n.measureText(t)),
              n.restore(),
              { width: e.width, height: r }
            );
          }),
          (e.prototype._getContextFont = function () {
            return l.Konva.UA.isIE
              ? this.fontStyle() +
                  y +
                  this.fontSize() +
                  'px ' +
                  this.fontFamily()
              : this.fontStyle() +
                  y +
                  this.fontVariant() +
                  y +
                  (this.fontSize() + 'px ') +
                  this.fontFamily()
                    .split(',')
                    .map(function (t) {
                      var e = (t = t.trim()).indexOf(' ') >= 0,
                        n = t.indexOf('"') >= 0 || t.indexOf("'") >= 0;
                      return e && !n && (t = '"' + t + '"'), t;
                    })
                    .join(', ');
          }),
          (e.prototype._addTextLine = function (t) {
            this.align() === h && (t = t.trim());
            var e = this._getTextWidth(t);
            return this.textArr.push({ text: t, width: e });
          }),
          (e.prototype._getTextWidth = function (t) {
            var e = this.letterSpacing(),
              n = t.length;
            return w().measureText(t).width + (n ? e * (n - 1) : 0);
          }),
          (e.prototype._setTextData = function () {
            var t = this.text().split('\n'),
              e = +this.fontSize(),
              n = 0,
              r = this.lineHeight() * e,
              i = this.attrs.width,
              a = this.attrs.height,
              o = i !== d && void 0 !== i,
              l = a !== d && void 0 !== a,
              s = this.padding(),
              u = i - 2 * s,
              c = a - 2 * s,
              f = 0,
              h = this.wrap(),
              p = 'none' !== h,
              g = 'char' !== h && p,
              v = this.ellipsis();
            (this.textArr = []), (w().font = this._getContextFont());
            for (
              var b = v ? this._getTextWidth(m) : 0, _ = 0, S = t.length;
              _ < S;
              ++_
            ) {
              var x = t[_],
                k = this._getTextWidth(x);
              if (o && k > u)
                for (; x.length > 0; ) {
                  for (var C = 0, P = x.length, E = '', T = 0; C < P; ) {
                    var O = (C + P) >>> 1,
                      N = x.slice(0, O + 1),
                      M = this._getTextWidth(N) + b;
                    M <= u
                      ? ((C = O + 1), (E = N + (v ? m : '')), (T = M))
                      : (P = O);
                  }
                  if (!E) break;
                  if (g) {
                    var A,
                      F = x[E.length];
                    (A =
                      (F === y || '-' === F) && T <= u
                        ? E.length
                        : Math.max(E.lastIndexOf(y), E.lastIndexOf('-')) + 1) >
                      0 &&
                      ((C = A),
                      (E = E.slice(0, C)),
                      (T = this._getTextWidth(E)));
                  }
                  if (
                    ((E = E.trimRight()),
                    this._addTextLine(E),
                    (n = Math.max(n, T)),
                    (f += r),
                    !p || (l && f + r > c))
                  ) {
                    var L = this.textArr[this.textArr.length - 1];
                    if (L)
                      if (v)
                        this._getTextWidth(L.text + m) < u ||
                          (L.text = L.text.slice(0, L.text.length - 3)),
                          this.textArr.splice(this.textArr.length - 1, 1),
                          this._addTextLine(L.text + m);
                    break;
                  }
                  if (
                    (x = (x = x.slice(C)).trimLeft()).length > 0 &&
                    (k = this._getTextWidth(x)) <= u
                  ) {
                    this._addTextLine(x), (f += r), (n = Math.max(n, k));
                    break;
                  }
                }
              else this._addTextLine(x), (f += r), (n = Math.max(n, k));
              if (l && f + r > c) break;
            }
            (this.textHeight = e), (this.textWidth = n);
          }),
          (e.prototype.getStrokeScaleEnabled = function () {
            return !0;
          }),
          e
        );
      })(o.Shape);
      (e.Text = S),
        (S.prototype._fillFunc = function (t) {
          t.fillText(this._partialText, this._partialTextX, this._partialTextY);
        }),
        (S.prototype._strokeFunc = function (t) {
          t.strokeText(
            this._partialText,
            this._partialTextX,
            this._partialTextY
          );
        }),
        (S.prototype.className = 'Text'),
        (S.prototype._attrsAffectingSize = [
          'text',
          'fontSize',
          'padding',
          'wrap',
          'lineHeight',
        ]),
        u._registerNode(S),
        a.Factory.overWriteSetter(S, 'width', s.getNumberOrAutoValidator()),
        a.Factory.overWriteSetter(S, 'height', s.getNumberOrAutoValidator()),
        a.Factory.addGetterSetter(S, 'fontFamily', 'Arial'),
        a.Factory.addGetterSetter(S, 'fontSize', 12, s.getNumberValidator()),
        a.Factory.addGetterSetter(S, 'fontStyle', v),
        a.Factory.addGetterSetter(S, 'fontVariant', v),
        a.Factory.addGetterSetter(S, 'padding', 0, s.getNumberValidator()),
        a.Factory.addGetterSetter(S, 'align', p),
        a.Factory.addGetterSetter(S, 'verticalAlign', 'top'),
        a.Factory.addGetterSetter(S, 'lineHeight', 1, s.getNumberValidator()),
        a.Factory.addGetterSetter(S, 'wrap', 'word'),
        a.Factory.addGetterSetter(S, 'ellipsis', !1, s.getBooleanValidator()),
        a.Factory.addGetterSetter(
          S,
          'letterSpacing',
          0,
          s.getNumberValidator()
        ),
        a.Factory.addGetterSetter(S, 'text', '', s.getStringValidator()),
        a.Factory.addGetterSetter(S, 'textDecoration', ''),
        i.Collection.mapMethods(S);
    },
    function (t, e, n) {
      'use strict';
      t.exports = n(101);
    },
    function (t, e, n) {
      'use strict';
      !(function t() {
        if (
          'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
          } catch (e) {
            console.error(e);
          }
      })(),
        (t.exports = n(45));
    },
    function (t, e, n) {
      'use strict';
      var r = n(40),
        i = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        a = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        o = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        l = {};
      function s(t) {
        return r.isMemo(t) ? o : l[t.$$typeof] || i;
      }
      (l[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (l[r.Memo] = o);
      var u = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        p = Object.prototype;
      t.exports = function t(e, n, r) {
        if ('string' !== typeof n) {
          if (p) {
            var i = h(n);
            i && i !== p && t(e, i, r);
          }
          var o = c(n);
          f && (o = o.concat(f(n)));
          for (var l = s(e), g = s(n), v = 0; v < o.length; ++v) {
            var y = o[v];
            if (!a[y] && (!r || !r[y]) && (!g || !g[y]) && (!l || !l[y])) {
              var m = d(n, y);
              try {
                u(e, y, m);
              } catch (b) {}
            }
          }
        }
        return e;
      };
    },
    function (t, e, n) {
      'use strict';
      n(18);
      var r = n(1),
        i = 60103;
      if (((e.Fragment = 60107), 'function' === typeof Symbol && Symbol.for)) {
        var a = Symbol.for;
        (i = a('react.element')), (e.Fragment = a('react.fragment'));
      }
      var o =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = Object.prototype.hasOwnProperty,
        s = { key: !0, ref: !0, __self: !0, __source: !0 };
      function u(t, e, n) {
        var r,
          a = {},
          u = null,
          c = null;
        for (r in (void 0 !== n && (u = '' + n),
        void 0 !== e.key && (u = '' + e.key),
        void 0 !== e.ref && (c = e.ref),
        e))
          l.call(e, r) && !s.hasOwnProperty(r) && (a[r] = e[r]);
        if (t && t.defaultProps)
          for (r in (e = t.defaultProps)) void 0 === a[r] && (a[r] = e[r]);
        return {
          $$typeof: i,
          type: t,
          key: u,
          ref: c,
          props: a,
          _owner: o.current,
        };
      }
      (e.jsx = u), (e.jsxs = u);
    },
    function (t, e, n) {
      'use strict';
      var r = n(18),
        i = 60103,
        a = 60106;
      (e.Fragment = 60107), (e.StrictMode = 60108), (e.Profiler = 60114);
      var o = 60109,
        l = 60110,
        s = 60112;
      e.Suspense = 60113;
      var u = 60115,
        c = 60116;
      if ('function' === typeof Symbol && Symbol.for) {
        var f = Symbol.for;
        (i = f('react.element')),
          (a = f('react.portal')),
          (e.Fragment = f('react.fragment')),
          (e.StrictMode = f('react.strict_mode')),
          (e.Profiler = f('react.profiler')),
          (o = f('react.provider')),
          (l = f('react.context')),
          (s = f('react.forward_ref')),
          (e.Suspense = f('react.suspense')),
          (u = f('react.memo')),
          (c = f('react.lazy'));
      }
      var d = 'function' === typeof Symbol && Symbol.iterator;
      function h(t) {
        for (
          var e = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t,
            n = 1;
          n < arguments.length;
          n++
        )
          e += '&args[]=' + encodeURIComponent(arguments[n]);
        return (
          'Minified React error #' +
          t +
          '; visit ' +
          e +
          ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
      }
      var p = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        g = {};
      function v(t, e, n) {
        (this.props = t),
          (this.context = e),
          (this.refs = g),
          (this.updater = n || p);
      }
      function y() {}
      function m(t, e, n) {
        (this.props = t),
          (this.context = e),
          (this.refs = g),
          (this.updater = n || p);
      }
      (v.prototype.isReactComponent = {}),
        (v.prototype.setState = function (t, e) {
          if ('object' !== typeof t && 'function' !== typeof t && null != t)
            throw Error(h(85));
          this.updater.enqueueSetState(this, t, e, 'setState');
        }),
        (v.prototype.forceUpdate = function (t) {
          this.updater.enqueueForceUpdate(this, t, 'forceUpdate');
        }),
        (y.prototype = v.prototype);
      var b = (m.prototype = new y());
      (b.constructor = m), r(b, v.prototype), (b.isPureReactComponent = !0);
      var _ = { current: null },
        w = Object.prototype.hasOwnProperty,
        S = { key: !0, ref: !0, __self: !0, __source: !0 };
      function x(t, e, n) {
        var r,
          a = {},
          o = null,
          l = null;
        if (null != e)
          for (r in (void 0 !== e.ref && (l = e.ref),
          void 0 !== e.key && (o = '' + e.key),
          e))
            w.call(e, r) && !S.hasOwnProperty(r) && (a[r] = e[r]);
        var s = arguments.length - 2;
        if (1 === s) a.children = n;
        else if (1 < s) {
          for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
          a.children = u;
        }
        if (t && t.defaultProps)
          for (r in (s = t.defaultProps)) void 0 === a[r] && (a[r] = s[r]);
        return {
          $$typeof: i,
          type: t,
          key: o,
          ref: l,
          props: a,
          _owner: _.current,
        };
      }
      function k(t) {
        return 'object' === typeof t && null !== t && t.$$typeof === i;
      }
      var C = /\/+/g;
      function P(t, e) {
        return 'object' === typeof t && null !== t && null != t.key
          ? (function (t) {
              var e = { '=': '=0', ':': '=2' };
              return (
                '$' +
                t.replace(/[=:]/g, function (t) {
                  return e[t];
                })
              );
            })('' + t.key)
          : e.toString(36);
      }
      function E(t, e, n, r, o) {
        var l = typeof t;
        ('undefined' !== l && 'boolean' !== l) || (t = null);
        var s = !1;
        if (null === t) s = !0;
        else
          switch (l) {
            case 'string':
            case 'number':
              s = !0;
              break;
            case 'object':
              switch (t.$$typeof) {
                case i:
                case a:
                  s = !0;
              }
          }
        if (s)
          return (
            (o = o((s = t))),
            (t = '' === r ? '.' + P(s, 0) : r),
            Array.isArray(o)
              ? ((n = ''),
                null != t && (n = t.replace(C, '$&/') + '/'),
                E(o, e, n, '', function (t) {
                  return t;
                }))
              : null != o &&
                (k(o) &&
                  (o = (function (t, e) {
                    return {
                      $$typeof: i,
                      type: t.type,
                      key: e,
                      ref: t.ref,
                      props: t.props,
                      _owner: t._owner,
                    };
                  })(
                    o,
                    n +
                      (!o.key || (s && s.key === o.key)
                        ? ''
                        : ('' + o.key).replace(C, '$&/') + '/') +
                      t
                  )),
                e.push(o)),
            1
          );
        if (((s = 0), (r = '' === r ? '.' : r + ':'), Array.isArray(t)))
          for (var u = 0; u < t.length; u++) {
            var c = r + P((l = t[u]), u);
            s += E(l, e, n, c, o);
          }
        else if (
          'function' ===
          typeof (c = (function (t) {
            return null === t || 'object' !== typeof t
              ? null
              : 'function' === typeof (t = (d && t[d]) || t['@@iterator'])
              ? t
              : null;
          })(t))
        )
          for (t = c.call(t), u = 0; !(l = t.next()).done; )
            s += E((l = l.value), e, n, (c = r + P(l, u++)), o);
        else if ('object' === l)
          throw (
            ((e = '' + t),
            Error(
              h(
                31,
                '[object Object]' === e
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : e
              )
            ))
          );
        return s;
      }
      function T(t, e, n) {
        if (null == t) return t;
        var r = [],
          i = 0;
        return (
          E(t, r, '', '', function (t) {
            return e.call(n, t, i++);
          }),
          r
        );
      }
      function O(t) {
        if (-1 === t._status) {
          var e = t._result;
          (e = e()),
            (t._status = 0),
            (t._result = e),
            e.then(
              function (e) {
                0 === t._status &&
                  ((e = e.default), (t._status = 1), (t._result = e));
              },
              function (e) {
                0 === t._status && ((t._status = 2), (t._result = e));
              }
            );
        }
        if (1 === t._status) return t._result;
        throw t._result;
      }
      var N = { current: null };
      function M() {
        var t = N.current;
        if (null === t) throw Error(h(321));
        return t;
      }
      var A = {
        ReactCurrentDispatcher: N,
        ReactCurrentBatchConfig: { transition: 0 },
        ReactCurrentOwner: _,
        IsSomeRendererActing: { current: !1 },
        assign: r,
      };
      (e.Children = {
        map: T,
        forEach: function (t, e, n) {
          T(
            t,
            function () {
              e.apply(this, arguments);
            },
            n
          );
        },
        count: function (t) {
          var e = 0;
          return (
            T(t, function () {
              e++;
            }),
            e
          );
        },
        toArray: function (t) {
          return (
            T(t, function (t) {
              return t;
            }) || []
          );
        },
        only: function (t) {
          if (!k(t)) throw Error(h(143));
          return t;
        },
      }),
        (e.Component = v),
        (e.PureComponent = m),
        (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A),
        (e.cloneElement = function (t, e, n) {
          if (null === t || void 0 === t) throw Error(h(267, t));
          var a = r({}, t.props),
            o = t.key,
            l = t.ref,
            s = t._owner;
          if (null != e) {
            if (
              (void 0 !== e.ref && ((l = e.ref), (s = _.current)),
              void 0 !== e.key && (o = '' + e.key),
              t.type && t.type.defaultProps)
            )
              var u = t.type.defaultProps;
            for (c in e)
              w.call(e, c) &&
                !S.hasOwnProperty(c) &&
                (a[c] = void 0 === e[c] && void 0 !== u ? u[c] : e[c]);
          }
          var c = arguments.length - 2;
          if (1 === c) a.children = n;
          else if (1 < c) {
            u = Array(c);
            for (var f = 0; f < c; f++) u[f] = arguments[f + 2];
            a.children = u;
          }
          return {
            $$typeof: i,
            type: t.type,
            key: o,
            ref: l,
            props: a,
            _owner: s,
          };
        }),
        (e.createContext = function (t, e) {
          return (
            void 0 === e && (e = null),
            ((t = {
              $$typeof: l,
              _calculateChangedBits: e,
              _currentValue: t,
              _currentValue2: t,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = { $$typeof: o, _context: t }),
            (t.Consumer = t)
          );
        }),
        (e.createElement = x),
        (e.createFactory = function (t) {
          var e = x.bind(null, t);
          return (e.type = t), e;
        }),
        (e.createRef = function () {
          return { current: null };
        }),
        (e.forwardRef = function (t) {
          return { $$typeof: s, render: t };
        }),
        (e.isValidElement = k),
        (e.lazy = function (t) {
          return {
            $$typeof: c,
            _payload: { _status: -1, _result: t },
            _init: O,
          };
        }),
        (e.memo = function (t, e) {
          return { $$typeof: u, type: t, compare: void 0 === e ? null : e };
        }),
        (e.useCallback = function (t, e) {
          return M().useCallback(t, e);
        }),
        (e.useContext = function (t, e) {
          return M().useContext(t, e);
        }),
        (e.useDebugValue = function () {}),
        (e.useEffect = function (t, e) {
          return M().useEffect(t, e);
        }),
        (e.useImperativeHandle = function (t, e, n) {
          return M().useImperativeHandle(t, e, n);
        }),
        (e.useLayoutEffect = function (t, e) {
          return M().useLayoutEffect(t, e);
        }),
        (e.useMemo = function (t, e) {
          return M().useMemo(t, e);
        }),
        (e.useReducer = function (t, e, n) {
          return M().useReducer(t, e, n);
        }),
        (e.useRef = function (t) {
          return M().useRef(t);
        }),
        (e.useState = function (t) {
          return M().useState(t);
        }),
        (e.version = '17.0.1');
    },
    function (t, e, n) {
      'use strict';
      var r = n(1),
        i = n(18),
        a = n(22);
      function o(t) {
        for (
          var e = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t,
            n = 1;
          n < arguments.length;
          n++
        )
          e += '&args[]=' + encodeURIComponent(arguments[n]);
        return (
          'Minified React error #' +
          t +
          '; visit ' +
          e +
          ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
      }
      if (!r) throw Error(o(227));
      var l = new Set(),
        s = {};
      function u(t, e) {
        c(t, e), c(t + 'Capture', e);
      }
      function c(t, e) {
        for (s[t] = e, t = 0; t < e.length; t++) l.add(e[t]);
      }
      var f = !(
          'undefined' === typeof window ||
          'undefined' === typeof window.document ||
          'undefined' === typeof window.document.createElement
        ),
        d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        h = Object.prototype.hasOwnProperty,
        p = {},
        g = {};
      function v(t, e, n, r, i, a, o) {
        (this.acceptsBooleans = 2 === e || 3 === e || 4 === e),
          (this.attributeName = r),
          (this.attributeNamespace = i),
          (this.mustUseProperty = n),
          (this.propertyName = t),
          (this.type = e),
          (this.sanitizeURL = a),
          (this.removeEmptyString = o);
      }
      var y = {};
      'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
        .split(' ')
        .forEach(function (t) {
          y[t] = new v(t, 0, !1, t, null, !1, !1);
        }),
        [
          ['acceptCharset', 'accept-charset'],
          ['className', 'class'],
          ['htmlFor', 'for'],
          ['httpEquiv', 'http-equiv'],
        ].forEach(function (t) {
          var e = t[0];
          y[e] = new v(e, 1, !1, t[1], null, !1, !1);
        }),
        ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
          function (t) {
            y[t] = new v(t, 2, !1, t.toLowerCase(), null, !1, !1);
          }
        ),
        [
          'autoReverse',
          'externalResourcesRequired',
          'focusable',
          'preserveAlpha',
        ].forEach(function (t) {
          y[t] = new v(t, 2, !1, t, null, !1, !1);
        }),
        'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
          .split(' ')
          .forEach(function (t) {
            y[t] = new v(t, 3, !1, t.toLowerCase(), null, !1, !1);
          }),
        ['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
          y[t] = new v(t, 3, !0, t, null, !1, !1);
        }),
        ['capture', 'download'].forEach(function (t) {
          y[t] = new v(t, 4, !1, t, null, !1, !1);
        }),
        ['cols', 'rows', 'size', 'span'].forEach(function (t) {
          y[t] = new v(t, 6, !1, t, null, !1, !1);
        }),
        ['rowSpan', 'start'].forEach(function (t) {
          y[t] = new v(t, 5, !1, t.toLowerCase(), null, !1, !1);
        });
      var m = /[\-:]([a-z])/g;
      function b(t) {
        return t[1].toUpperCase();
      }
      function _(t, e, n, r) {
        var i = y.hasOwnProperty(e) ? y[e] : null;
        (null !== i
          ? 0 === i.type
          : !r &&
            2 < e.length &&
            ('o' === e[0] || 'O' === e[0]) &&
            ('n' === e[1] || 'N' === e[1])) ||
          ((function (t, e, n, r) {
            if (
              null === e ||
              'undefined' === typeof e ||
              (function (t, e, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof e) {
                  case 'function':
                  case 'symbol':
                    return !0;
                  case 'boolean':
                    return (
                      !r &&
                      (null !== n
                        ? !n.acceptsBooleans
                        : 'data-' !== (t = t.toLowerCase().slice(0, 5)) &&
                          'aria-' !== t)
                    );
                  default:
                    return !1;
                }
              })(t, e, n, r)
            )
              return !0;
            if (r) return !1;
            if (null !== n)
              switch (n.type) {
                case 3:
                  return !e;
                case 4:
                  return !1 === e;
                case 5:
                  return isNaN(e);
                case 6:
                  return isNaN(e) || 1 > e;
              }
            return !1;
          })(e, n, i, r) && (n = null),
          r || null === i
            ? (function (t) {
                return (
                  !!h.call(g, t) ||
                  (!h.call(p, t) &&
                    (d.test(t) ? (g[t] = !0) : ((p[t] = !0), !1)))
                );
              })(e) &&
              (null === n ? t.removeAttribute(e) : t.setAttribute(e, '' + n))
            : i.mustUseProperty
            ? (t[i.propertyName] = null === n ? 3 !== i.type && '' : n)
            : ((e = i.attributeName),
              (r = i.attributeNamespace),
              null === n
                ? t.removeAttribute(e)
                : ((n =
                    3 === (i = i.type) || (4 === i && !0 === n) ? '' : '' + n),
                  r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
      }
      'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
        .split(' ')
        .forEach(function (t) {
          var e = t.replace(m, b);
          y[e] = new v(e, 1, !1, t, null, !1, !1);
        }),
        'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
          .split(' ')
          .forEach(function (t) {
            var e = t.replace(m, b);
            y[e] = new v(e, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1);
          }),
        ['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
          var e = t.replace(m, b);
          y[e] = new v(
            e,
            1,
            !1,
            t,
            'http://www.w3.org/XML/1998/namespace',
            !1,
            !1
          );
        }),
        ['tabIndex', 'crossOrigin'].forEach(function (t) {
          y[t] = new v(t, 1, !1, t.toLowerCase(), null, !1, !1);
        }),
        (y.xlinkHref = new v(
          'xlinkHref',
          1,
          !1,
          'xlink:href',
          'http://www.w3.org/1999/xlink',
          !0,
          !1
        )),
        ['src', 'href', 'action', 'formAction'].forEach(function (t) {
          y[t] = new v(t, 1, !1, t.toLowerCase(), null, !0, !0);
        });
      var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        S = 60103,
        x = 60106,
        k = 60107,
        C = 60108,
        P = 60114,
        E = 60109,
        T = 60110,
        O = 60112,
        N = 60113,
        M = 60120,
        A = 60115,
        F = 60116,
        L = 60121,
        R = 60128,
        I = 60129,
        D = 60130,
        z = 60131;
      if ('function' === typeof Symbol && Symbol.for) {
        var U = Symbol.for;
        (S = U('react.element')),
          (x = U('react.portal')),
          (k = U('react.fragment')),
          (C = U('react.strict_mode')),
          (P = U('react.profiler')),
          (E = U('react.provider')),
          (T = U('react.context')),
          (O = U('react.forward_ref')),
          (N = U('react.suspense')),
          (M = U('react.suspense_list')),
          (A = U('react.memo')),
          (F = U('react.lazy')),
          (L = U('react.block')),
          U('react.scope'),
          (R = U('react.opaque.id')),
          (I = U('react.debug_trace_mode')),
          (D = U('react.offscreen')),
          (z = U('react.legacy_hidden'));
      }
      var j,
        G = 'function' === typeof Symbol && Symbol.iterator;
      function B(t) {
        return null === t || 'object' !== typeof t
          ? null
          : 'function' === typeof (t = (G && t[G]) || t['@@iterator'])
          ? t
          : null;
      }
      function H(t) {
        if (void 0 === j)
          try {
            throw Error();
          } catch (n) {
            var e = n.stack.trim().match(/\n( *(at )?)/);
            j = (e && e[1]) || '';
          }
        return '\n' + j + t;
      }
      var V = !1;
      function W(t, e) {
        if (!t || V) return '';
        V = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (e)
            if (
              ((e = function () {
                throw Error();
              }),
              Object.defineProperty(e.prototype, 'props', {
                set: function () {
                  throw Error();
                },
              }),
              'object' === typeof Reflect && Reflect.construct)
            ) {
              try {
                Reflect.construct(e, []);
              } catch (s) {
                var r = s;
              }
              Reflect.construct(t, [], e);
            } else {
              try {
                e.call();
              } catch (s) {
                r = s;
              }
              t.call(e.prototype);
            }
          else {
            try {
              throw Error();
            } catch (s) {
              r = s;
            }
            t();
          }
        } catch (s) {
          if (s && r && 'string' === typeof s.stack) {
            for (
              var i = s.stack.split('\n'),
                a = r.stack.split('\n'),
                o = i.length - 1,
                l = a.length - 1;
              1 <= o && 0 <= l && i[o] !== a[l];

            )
              l--;
            for (; 1 <= o && 0 <= l; o--, l--)
              if (i[o] !== a[l]) {
                if (1 !== o || 1 !== l)
                  do {
                    if ((o--, 0 > --l || i[o] !== a[l]))
                      return '\n' + i[o].replace(' at new ', ' at ');
                  } while (1 <= o && 0 <= l);
                break;
              }
          }
        } finally {
          (V = !1), (Error.prepareStackTrace = n);
        }
        return (t = t ? t.displayName || t.name : '') ? H(t) : '';
      }
      function K(t) {
        switch (t.tag) {
          case 5:
            return H(t.type);
          case 16:
            return H('Lazy');
          case 13:
            return H('Suspense');
          case 19:
            return H('SuspenseList');
          case 0:
          case 2:
          case 15:
            return (t = W(t.type, !1));
          case 11:
            return (t = W(t.type.render, !1));
          case 22:
            return (t = W(t.type._render, !1));
          case 1:
            return (t = W(t.type, !0));
          default:
            return '';
        }
      }
      function $(t) {
        if (null == t) return null;
        if ('function' === typeof t) return t.displayName || t.name || null;
        if ('string' === typeof t) return t;
        switch (t) {
          case k:
            return 'Fragment';
          case x:
            return 'Portal';
          case P:
            return 'Profiler';
          case C:
            return 'StrictMode';
          case N:
            return 'Suspense';
          case M:
            return 'SuspenseList';
        }
        if ('object' === typeof t)
          switch (t.$$typeof) {
            case T:
              return (t.displayName || 'Context') + '.Consumer';
            case E:
              return (t._context.displayName || 'Context') + '.Provider';
            case O:
              var e = t.render;
              return (
                (e = e.displayName || e.name || ''),
                t.displayName ||
                  ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
              );
            case A:
              return $(t.type);
            case L:
              return $(t._render);
            case F:
              (e = t._payload), (t = t._init);
              try {
                return $(t(e));
              } catch (n) {}
          }
        return null;
      }
      function Y(t) {
        switch (typeof t) {
          case 'boolean':
          case 'number':
          case 'object':
          case 'string':
          case 'undefined':
            return t;
          default:
            return '';
        }
      }
      function Q(t) {
        var e = t.type;
        return (
          (t = t.nodeName) &&
          'input' === t.toLowerCase() &&
          ('checkbox' === e || 'radio' === e)
        );
      }
      function q(t) {
        t._valueTracker ||
          (t._valueTracker = (function (t) {
            var e = Q(t) ? 'checked' : 'value',
              n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
              r = '' + t[e];
            if (
              !t.hasOwnProperty(e) &&
              'undefined' !== typeof n &&
              'function' === typeof n.get &&
              'function' === typeof n.set
            ) {
              var i = n.get,
                a = n.set;
              return (
                Object.defineProperty(t, e, {
                  configurable: !0,
                  get: function () {
                    return i.call(this);
                  },
                  set: function (t) {
                    (r = '' + t), a.call(this, t);
                  },
                }),
                Object.defineProperty(t, e, { enumerable: n.enumerable }),
                {
                  getValue: function () {
                    return r;
                  },
                  setValue: function (t) {
                    r = '' + t;
                  },
                  stopTracking: function () {
                    (t._valueTracker = null), delete t[e];
                  },
                }
              );
            }
          })(t));
      }
      function X(t) {
        if (!t) return !1;
        var e = t._valueTracker;
        if (!e) return !0;
        var n = e.getValue(),
          r = '';
        return (
          t && (r = Q(t) ? (t.checked ? 'true' : 'false') : t.value),
          (t = r) !== n && (e.setValue(t), !0)
        );
      }
      function J(t) {
        if (
          'undefined' ===
          typeof (t =
            t || ('undefined' !== typeof document ? document : void 0))
        )
          return null;
        try {
          return t.activeElement || t.body;
        } catch (e) {
          return t.body;
        }
      }
      function Z(t, e) {
        var n = e.checked;
        return i({}, e, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : t._wrapperState.initialChecked,
        });
      }
      function tt(t, e) {
        var n = null == e.defaultValue ? '' : e.defaultValue,
          r = null != e.checked ? e.checked : e.defaultChecked;
        (n = Y(null != e.value ? e.value : n)),
          (t._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
              'checkbox' === e.type || 'radio' === e.type
                ? null != e.checked
                : null != e.value,
          });
      }
      function et(t, e) {
        null != (e = e.checked) && _(t, 'checked', e, !1);
      }
      function nt(t, e) {
        et(t, e);
        var n = Y(e.value),
          r = e.type;
        if (null != n)
          'number' === r
            ? ((0 === n && '' === t.value) || t.value != n) &&
              (t.value = '' + n)
            : t.value !== '' + n && (t.value = '' + n);
        else if ('submit' === r || 'reset' === r)
          return void t.removeAttribute('value');
        e.hasOwnProperty('value')
          ? it(t, e.type, n)
          : e.hasOwnProperty('defaultValue') &&
            it(t, e.type, Y(e.defaultValue)),
          null == e.checked &&
            null != e.defaultChecked &&
            (t.defaultChecked = !!e.defaultChecked);
      }
      function rt(t, e, n) {
        if (e.hasOwnProperty('value') || e.hasOwnProperty('defaultValue')) {
          var r = e.type;
          if (
            !(
              ('submit' !== r && 'reset' !== r) ||
              (void 0 !== e.value && null !== e.value)
            )
          )
            return;
          (e = '' + t._wrapperState.initialValue),
            n || e === t.value || (t.value = e),
            (t.defaultValue = e);
        }
        '' !== (n = t.name) && (t.name = ''),
          (t.defaultChecked = !!t._wrapperState.initialChecked),
          '' !== n && (t.name = n);
      }
      function it(t, e, n) {
        ('number' === e && J(t.ownerDocument) === t) ||
          (null == n
            ? (t.defaultValue = '' + t._wrapperState.initialValue)
            : t.defaultValue !== '' + n && (t.defaultValue = '' + n));
      }
      function at(t, e) {
        return (
          (t = i({ children: void 0 }, e)),
          (e = (function (t) {
            var e = '';
            return (
              r.Children.forEach(t, function (t) {
                null != t && (e += t);
              }),
              e
            );
          })(e.children)) && (t.children = e),
          t
        );
      }
      function ot(t, e, n, r) {
        if (((t = t.options), e)) {
          e = {};
          for (var i = 0; i < n.length; i++) e['$' + n[i]] = !0;
          for (n = 0; n < t.length; n++)
            (i = e.hasOwnProperty('$' + t[n].value)),
              t[n].selected !== i && (t[n].selected = i),
              i && r && (t[n].defaultSelected = !0);
        } else {
          for (n = '' + Y(n), e = null, i = 0; i < t.length; i++) {
            if (t[i].value === n)
              return (
                (t[i].selected = !0), void (r && (t[i].defaultSelected = !0))
              );
            null !== e || t[i].disabled || (e = t[i]);
          }
          null !== e && (e.selected = !0);
        }
      }
      function lt(t, e) {
        if (null != e.dangerouslySetInnerHTML) throw Error(o(91));
        return i({}, e, {
          value: void 0,
          defaultValue: void 0,
          children: '' + t._wrapperState.initialValue,
        });
      }
      function st(t, e) {
        var n = e.value;
        if (null == n) {
          if (((n = e.children), (e = e.defaultValue), null != n)) {
            if (null != e) throw Error(o(92));
            if (Array.isArray(n)) {
              if (!(1 >= n.length)) throw Error(o(93));
              n = n[0];
            }
            e = n;
          }
          null == e && (e = ''), (n = e);
        }
        t._wrapperState = { initialValue: Y(n) };
      }
      function ut(t, e) {
        var n = Y(e.value),
          r = Y(e.defaultValue);
        null != n &&
          ((n = '' + n) !== t.value && (t.value = n),
          null == e.defaultValue &&
            t.defaultValue !== n &&
            (t.defaultValue = n)),
          null != r && (t.defaultValue = '' + r);
      }
      function ct(t) {
        var e = t.textContent;
        e === t._wrapperState.initialValue &&
          '' !== e &&
          null !== e &&
          (t.value = e);
      }
      var ft = 'http://www.w3.org/1999/xhtml',
        dt = 'http://www.w3.org/2000/svg';
      function ht(t) {
        switch (t) {
          case 'svg':
            return 'http://www.w3.org/2000/svg';
          case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
          default:
            return 'http://www.w3.org/1999/xhtml';
        }
      }
      function pt(t, e) {
        return null == t || 'http://www.w3.org/1999/xhtml' === t
          ? ht(e)
          : 'http://www.w3.org/2000/svg' === t && 'foreignObject' === e
          ? 'http://www.w3.org/1999/xhtml'
          : t;
      }
      var gt,
        vt,
        yt =
          ((vt = function (t, e) {
            if (t.namespaceURI !== dt || 'innerHTML' in t) t.innerHTML = e;
            else {
              for (
                (gt = gt || document.createElement('div')).innerHTML =
                  '<svg>' + e.valueOf().toString() + '</svg>',
                  e = gt.firstChild;
                t.firstChild;

              )
                t.removeChild(t.firstChild);
              for (; e.firstChild; ) t.appendChild(e.firstChild);
            }
          }),
          'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (t, e, n, r) {
                MSApp.execUnsafeLocalFunction(function () {
                  return vt(t, e);
                });
              }
            : vt);
      function mt(t, e) {
        if (e) {
          var n = t.firstChild;
          if (n && n === t.lastChild && 3 === n.nodeType)
            return void (n.nodeValue = e);
        }
        t.textContent = e;
      }
      var bt = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        _t = ['Webkit', 'ms', 'Moz', 'O'];
      function wt(t, e, n) {
        return null == e || 'boolean' === typeof e || '' === e
          ? ''
          : n ||
            'number' !== typeof e ||
            0 === e ||
            (bt.hasOwnProperty(t) && bt[t])
          ? ('' + e).trim()
          : e + 'px';
      }
      function St(t, e) {
        for (var n in ((t = t.style), e))
          if (e.hasOwnProperty(n)) {
            var r = 0 === n.indexOf('--'),
              i = wt(n, e[n], r);
            'float' === n && (n = 'cssFloat'),
              r ? t.setProperty(n, i) : (t[n] = i);
          }
      }
      Object.keys(bt).forEach(function (t) {
        _t.forEach(function (e) {
          (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (bt[e] = bt[t]);
        });
      });
      var xt = i(
        { menuitem: !0 },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        }
      );
      function kt(t, e) {
        if (e) {
          if (
            xt[t] &&
            (null != e.children || null != e.dangerouslySetInnerHTML)
          )
            throw Error(o(137, t));
          if (null != e.dangerouslySetInnerHTML) {
            if (null != e.children) throw Error(o(60));
            if (
              'object' !== typeof e.dangerouslySetInnerHTML ||
              !('__html' in e.dangerouslySetInnerHTML)
            )
              throw Error(o(61));
          }
          if (null != e.style && 'object' !== typeof e.style)
            throw Error(o(62));
        }
      }
      function Ct(t, e) {
        if (-1 === t.indexOf('-')) return 'string' === typeof e.is;
        switch (t) {
          case 'annotation-xml':
          case 'color-profile':
          case 'font-face':
          case 'font-face-src':
          case 'font-face-uri':
          case 'font-face-format':
          case 'font-face-name':
          case 'missing-glyph':
            return !1;
          default:
            return !0;
        }
      }
      function Pt(t) {
        return (
          (t = t.target || t.srcElement || window).correspondingUseElement &&
            (t = t.correspondingUseElement),
          3 === t.nodeType ? t.parentNode : t
        );
      }
      var Et = null,
        Tt = null,
        Ot = null;
      function Nt(t) {
        if ((t = ti(t))) {
          if ('function' !== typeof Et) throw Error(o(280));
          var e = t.stateNode;
          e && ((e = ni(e)), Et(t.stateNode, t.type, e));
        }
      }
      function Mt(t) {
        Tt ? (Ot ? Ot.push(t) : (Ot = [t])) : (Tt = t);
      }
      function At() {
        if (Tt) {
          var t = Tt,
            e = Ot;
          if (((Ot = Tt = null), Nt(t), e))
            for (t = 0; t < e.length; t++) Nt(e[t]);
        }
      }
      function Ft(t, e) {
        return t(e);
      }
      function Lt(t, e, n, r, i) {
        return t(e, n, r, i);
      }
      function Rt() {}
      var It = Ft,
        Dt = !1,
        zt = !1;
      function Ut() {
        (null === Tt && null === Ot) || (Rt(), At());
      }
      function jt(t, e) {
        var n = t.stateNode;
        if (null === n) return null;
        var r = ni(n);
        if (null === r) return null;
        n = r[e];
        t: switch (e) {
          case 'onClick':
          case 'onClickCapture':
          case 'onDoubleClick':
          case 'onDoubleClickCapture':
          case 'onMouseDown':
          case 'onMouseDownCapture':
          case 'onMouseMove':
          case 'onMouseMoveCapture':
          case 'onMouseUp':
          case 'onMouseUpCapture':
          case 'onMouseEnter':
            (r = !r.disabled) ||
              (r = !(
                'button' === (t = t.type) ||
                'input' === t ||
                'select' === t ||
                'textarea' === t
              )),
              (t = !r);
            break t;
          default:
            t = !1;
        }
        if (t) return null;
        if (n && 'function' !== typeof n) throw Error(o(231, e, typeof n));
        return n;
      }
      var Gt = !1;
      if (f)
        try {
          var Bt = {};
          Object.defineProperty(Bt, 'passive', {
            get: function () {
              Gt = !0;
            },
          }),
            window.addEventListener('test', Bt, Bt),
            window.removeEventListener('test', Bt, Bt);
        } catch (vt) {
          Gt = !1;
        }
      function Ht(t, e, n, r, i, a, o, l, s) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
          e.apply(n, u);
        } catch (c) {
          this.onError(c);
        }
      }
      var Vt = !1,
        Wt = null,
        Kt = !1,
        $t = null,
        Yt = {
          onError: function (t) {
            (Vt = !0), (Wt = t);
          },
        };
      function Qt(t, e, n, r, i, a, o, l, s) {
        (Vt = !1), (Wt = null), Ht.apply(Yt, arguments);
      }
      function qt(t) {
        var e = t,
          n = t;
        if (t.alternate) for (; e.return; ) e = e.return;
        else {
          t = e;
          do {
            0 !== (1026 & (e = t).flags) && (n = e.return), (t = e.return);
          } while (t);
        }
        return 3 === e.tag ? n : null;
      }
      function Xt(t) {
        if (13 === t.tag) {
          var e = t.memoizedState;
          if (
            (null === e && null !== (t = t.alternate) && (e = t.memoizedState),
            null !== e)
          )
            return e.dehydrated;
        }
        return null;
      }
      function Jt(t) {
        if (qt(t) !== t) throw Error(o(188));
      }
      function Zt(t) {
        if (
          !(t = (function (t) {
            var e = t.alternate;
            if (!e) {
              if (null === (e = qt(t))) throw Error(o(188));
              return e !== t ? null : t;
            }
            for (var n = t, r = e; ; ) {
              var i = n.return;
              if (null === i) break;
              var a = i.alternate;
              if (null === a) {
                if (null !== (r = i.return)) {
                  n = r;
                  continue;
                }
                break;
              }
              if (i.child === a.child) {
                for (a = i.child; a; ) {
                  if (a === n) return Jt(i), t;
                  if (a === r) return Jt(i), e;
                  a = a.sibling;
                }
                throw Error(o(188));
              }
              if (n.return !== r.return) (n = i), (r = a);
              else {
                for (var l = !1, s = i.child; s; ) {
                  if (s === n) {
                    (l = !0), (n = i), (r = a);
                    break;
                  }
                  if (s === r) {
                    (l = !0), (r = i), (n = a);
                    break;
                  }
                  s = s.sibling;
                }
                if (!l) {
                  for (s = a.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = a), (r = i);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = a), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) throw Error(o(189));
                }
              }
              if (n.alternate !== r) throw Error(o(190));
            }
            if (3 !== n.tag) throw Error(o(188));
            return n.stateNode.current === n ? t : e;
          })(t))
        )
          return null;
        for (var e = t; ; ) {
          if (5 === e.tag || 6 === e.tag) return e;
          if (e.child) (e.child.return = e), (e = e.child);
          else {
            if (e === t) break;
            for (; !e.sibling; ) {
              if (!e.return || e.return === t) return null;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        }
        return null;
      }
      function te(t, e) {
        for (var n = t.alternate; null !== e; ) {
          if (e === t || e === n) return !0;
          e = e.return;
        }
        return !1;
      }
      var ee,
        ne,
        re,
        ie,
        ae = !1,
        oe = [],
        le = null,
        se = null,
        ue = null,
        ce = new Map(),
        fe = new Map(),
        de = [],
        he = 'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
          ' '
        );
      function pe(t, e, n, r, i) {
        return {
          blockedOn: t,
          domEventName: e,
          eventSystemFlags: 16 | n,
          nativeEvent: i,
          targetContainers: [r],
        };
      }
      function ge(t, e) {
        switch (t) {
          case 'focusin':
          case 'focusout':
            le = null;
            break;
          case 'dragenter':
          case 'dragleave':
            se = null;
            break;
          case 'mouseover':
          case 'mouseout':
            ue = null;
            break;
          case 'pointerover':
          case 'pointerout':
            ce.delete(e.pointerId);
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
            fe.delete(e.pointerId);
        }
      }
      function ve(t, e, n, r, i, a) {
        return null === t || t.nativeEvent !== a
          ? ((t = pe(e, n, r, i, a)),
            null !== e && null !== (e = ti(e)) && ne(e),
            t)
          : ((t.eventSystemFlags |= r),
            (e = t.targetContainers),
            null !== i && -1 === e.indexOf(i) && e.push(i),
            t);
      }
      function ye(t) {
        var e = Zr(t.target);
        if (null !== e) {
          var n = qt(e);
          if (null !== n)
            if (13 === (e = n.tag)) {
              if (null !== (e = Xt(n)))
                return (
                  (t.blockedOn = e),
                  void ie(t.lanePriority, function () {
                    a.unstable_runWithPriority(t.priority, function () {
                      re(n);
                    });
                  })
                );
            } else if (3 === e && n.stateNode.hydrate)
              return void (t.blockedOn =
                3 === n.tag ? n.stateNode.containerInfo : null);
        }
        t.blockedOn = null;
      }
      function me(t) {
        if (null !== t.blockedOn) return !1;
        for (var e = t.targetContainers; 0 < e.length; ) {
          var n = Ze(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
          if (null !== n)
            return null !== (e = ti(n)) && ne(e), (t.blockedOn = n), !1;
          e.shift();
        }
        return !0;
      }
      function be(t, e, n) {
        me(t) && n.delete(e);
      }
      function _e() {
        for (ae = !1; 0 < oe.length; ) {
          var t = oe[0];
          if (null !== t.blockedOn) {
            null !== (t = ti(t.blockedOn)) && ee(t);
            break;
          }
          for (var e = t.targetContainers; 0 < e.length; ) {
            var n = Ze(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
            if (null !== n) {
              t.blockedOn = n;
              break;
            }
            e.shift();
          }
          null === t.blockedOn && oe.shift();
        }
        null !== le && me(le) && (le = null),
          null !== se && me(se) && (se = null),
          null !== ue && me(ue) && (ue = null),
          ce.forEach(be),
          fe.forEach(be);
      }
      function we(t, e) {
        t.blockedOn === e &&
          ((t.blockedOn = null),
          ae ||
            ((ae = !0),
            a.unstable_scheduleCallback(a.unstable_NormalPriority, _e)));
      }
      function Se(t) {
        function e(e) {
          return we(e, t);
        }
        if (0 < oe.length) {
          we(oe[0], t);
          for (var n = 1; n < oe.length; n++) {
            var r = oe[n];
            r.blockedOn === t && (r.blockedOn = null);
          }
        }
        for (
          null !== le && we(le, t),
            null !== se && we(se, t),
            null !== ue && we(ue, t),
            ce.forEach(e),
            fe.forEach(e),
            n = 0;
          n < de.length;
          n++
        )
          (r = de[n]).blockedOn === t && (r.blockedOn = null);
        for (; 0 < de.length && null === (n = de[0]).blockedOn; )
          ye(n), null === n.blockedOn && de.shift();
      }
      function xe(t, e) {
        var n = {};
        return (
          (n[t.toLowerCase()] = e.toLowerCase()),
          (n['Webkit' + t] = 'webkit' + e),
          (n['Moz' + t] = 'moz' + e),
          n
        );
      }
      var ke = {
          animationend: xe('Animation', 'AnimationEnd'),
          animationiteration: xe('Animation', 'AnimationIteration'),
          animationstart: xe('Animation', 'AnimationStart'),
          transitionend: xe('Transition', 'TransitionEnd'),
        },
        Ce = {},
        Pe = {};
      function Ee(t) {
        if (Ce[t]) return Ce[t];
        if (!ke[t]) return t;
        var e,
          n = ke[t];
        for (e in n) if (n.hasOwnProperty(e) && e in Pe) return (Ce[t] = n[e]);
        return t;
      }
      f &&
        ((Pe = document.createElement('div').style),
        'AnimationEvent' in window ||
          (delete ke.animationend.animation,
          delete ke.animationiteration.animation,
          delete ke.animationstart.animation),
        'TransitionEvent' in window || delete ke.transitionend.transition);
      var Te = Ee('animationend'),
        Oe = Ee('animationiteration'),
        Ne = Ee('animationstart'),
        Me = Ee('transitionend'),
        Ae = new Map(),
        Fe = new Map(),
        Le = [
          'abort',
          'abort',
          Te,
          'animationEnd',
          Oe,
          'animationIteration',
          Ne,
          'animationStart',
          'canplay',
          'canPlay',
          'canplaythrough',
          'canPlayThrough',
          'durationchange',
          'durationChange',
          'emptied',
          'emptied',
          'encrypted',
          'encrypted',
          'ended',
          'ended',
          'error',
          'error',
          'gotpointercapture',
          'gotPointerCapture',
          'load',
          'load',
          'loadeddata',
          'loadedData',
          'loadedmetadata',
          'loadedMetadata',
          'loadstart',
          'loadStart',
          'lostpointercapture',
          'lostPointerCapture',
          'playing',
          'playing',
          'progress',
          'progress',
          'seeking',
          'seeking',
          'stalled',
          'stalled',
          'suspend',
          'suspend',
          'timeupdate',
          'timeUpdate',
          Me,
          'transitionEnd',
          'waiting',
          'waiting',
        ];
      function Re(t, e) {
        for (var n = 0; n < t.length; n += 2) {
          var r = t[n],
            i = t[n + 1];
          (i = 'on' + (i[0].toUpperCase() + i.slice(1))),
            Fe.set(r, e),
            Ae.set(r, i),
            u(i, [r]);
        }
      }
      (0, a.unstable_now)();
      var Ie = 8;
      function De(t) {
        if (0 !== (1 & t)) return (Ie = 15), 1;
        if (0 !== (2 & t)) return (Ie = 14), 2;
        if (0 !== (4 & t)) return (Ie = 13), 4;
        var e = 24 & t;
        return 0 !== e
          ? ((Ie = 12), e)
          : 0 !== (32 & t)
          ? ((Ie = 11), 32)
          : 0 !== (e = 192 & t)
          ? ((Ie = 10), e)
          : 0 !== (256 & t)
          ? ((Ie = 9), 256)
          : 0 !== (e = 3584 & t)
          ? ((Ie = 8), e)
          : 0 !== (4096 & t)
          ? ((Ie = 7), 4096)
          : 0 !== (e = 4186112 & t)
          ? ((Ie = 6), e)
          : 0 !== (e = 62914560 & t)
          ? ((Ie = 5), e)
          : 67108864 & t
          ? ((Ie = 4), 67108864)
          : 0 !== (134217728 & t)
          ? ((Ie = 3), 134217728)
          : 0 !== (e = 805306368 & t)
          ? ((Ie = 2), e)
          : 0 !== (1073741824 & t)
          ? ((Ie = 1), 1073741824)
          : ((Ie = 8), t);
      }
      function ze(t, e) {
        var n = t.pendingLanes;
        if (0 === n) return (Ie = 0);
        var r = 0,
          i = 0,
          a = t.expiredLanes,
          o = t.suspendedLanes,
          l = t.pingedLanes;
        if (0 !== a) (r = a), (i = Ie = 15);
        else if (0 !== (a = 134217727 & n)) {
          var s = a & ~o;
          0 !== s
            ? ((r = De(s)), (i = Ie))
            : 0 !== (l &= a) && ((r = De(l)), (i = Ie));
        } else
          0 !== (a = n & ~o)
            ? ((r = De(a)), (i = Ie))
            : 0 !== l && ((r = De(l)), (i = Ie));
        if (0 === r) return 0;
        if (
          ((r = n & (((0 > (r = 31 - Ve(r)) ? 0 : 1 << r) << 1) - 1)),
          0 !== e && e !== r && 0 === (e & o))
        ) {
          if ((De(e), i <= Ie)) return e;
          Ie = i;
        }
        if (0 !== (e = t.entangledLanes))
          for (t = t.entanglements, e &= r; 0 < e; )
            (i = 1 << (n = 31 - Ve(e))), (r |= t[n]), (e &= ~i);
        return r;
      }
      function Ue(t) {
        return 0 !== (t = -1073741825 & t.pendingLanes)
          ? t
          : 1073741824 & t
          ? 1073741824
          : 0;
      }
      function je(t, e) {
        switch (t) {
          case 15:
            return 1;
          case 14:
            return 2;
          case 12:
            return 0 === (t = Ge(24 & ~e)) ? je(10, e) : t;
          case 10:
            return 0 === (t = Ge(192 & ~e)) ? je(8, e) : t;
          case 8:
            return (
              0 === (t = Ge(3584 & ~e)) &&
                0 === (t = Ge(4186112 & ~e)) &&
                (t = 512),
              t
            );
          case 2:
            return 0 === (e = Ge(805306368 & ~e)) && (e = 268435456), e;
        }
        throw Error(o(358, t));
      }
      function Ge(t) {
        return t & -t;
      }
      function Be(t) {
        for (var e = [], n = 0; 31 > n; n++) e.push(t);
        return e;
      }
      function He(t, e, n) {
        t.pendingLanes |= e;
        var r = e - 1;
        (t.suspendedLanes &= r),
          (t.pingedLanes &= r),
          ((t = t.eventTimes)[(e = 31 - Ve(e))] = n);
      }
      var Ve = Math.clz32
          ? Math.clz32
          : function (t) {
              return 0 === t ? 32 : (31 - ((We(t) / Ke) | 0)) | 0;
            },
        We = Math.log,
        Ke = Math.LN2;
      var $e = a.unstable_UserBlockingPriority,
        Ye = a.unstable_runWithPriority,
        Qe = !0;
      function qe(t, e, n, r) {
        Dt || Rt();
        var i = Je,
          a = Dt;
        Dt = !0;
        try {
          Lt(i, t, e, n, r);
        } finally {
          (Dt = a) || Ut();
        }
      }
      function Xe(t, e, n, r) {
        Ye($e, Je.bind(null, t, e, n, r));
      }
      function Je(t, e, n, r) {
        var i;
        if (Qe)
          if ((i = 0 === (4 & e)) && 0 < oe.length && -1 < he.indexOf(t))
            (t = pe(null, t, e, n, r)), oe.push(t);
          else {
            var a = Ze(t, e, n, r);
            if (null === a) i && ge(t, r);
            else {
              if (i) {
                if (-1 < he.indexOf(t))
                  return (t = pe(a, t, e, n, r)), void oe.push(t);
                if (
                  (function (t, e, n, r, i) {
                    switch (e) {
                      case 'focusin':
                        return (le = ve(le, t, e, n, r, i)), !0;
                      case 'dragenter':
                        return (se = ve(se, t, e, n, r, i)), !0;
                      case 'mouseover':
                        return (ue = ve(ue, t, e, n, r, i)), !0;
                      case 'pointerover':
                        var a = i.pointerId;
                        return (
                          ce.set(a, ve(ce.get(a) || null, t, e, n, r, i)), !0
                        );
                      case 'gotpointercapture':
                        return (
                          (a = i.pointerId),
                          fe.set(a, ve(fe.get(a) || null, t, e, n, r, i)),
                          !0
                        );
                    }
                    return !1;
                  })(a, t, e, n, r)
                )
                  return;
                ge(t, r);
              }
              Ar(t, e, r, null, n);
            }
          }
      }
      function Ze(t, e, n, r) {
        var i = Pt(r);
        if (null !== (i = Zr(i))) {
          var a = qt(i);
          if (null === a) i = null;
          else {
            var o = a.tag;
            if (13 === o) {
              if (null !== (i = Xt(a))) return i;
              i = null;
            } else if (3 === o) {
              if (a.stateNode.hydrate)
                return 3 === a.tag ? a.stateNode.containerInfo : null;
              i = null;
            } else a !== i && (i = null);
          }
        }
        return Ar(t, e, r, i, n), null;
      }
      var tn = null,
        en = null,
        nn = null;
      function rn() {
        if (nn) return nn;
        var t,
          e,
          n = en,
          r = n.length,
          i = 'value' in tn ? tn.value : tn.textContent,
          a = i.length;
        for (t = 0; t < r && n[t] === i[t]; t++);
        var o = r - t;
        for (e = 1; e <= o && n[r - e] === i[a - e]; e++);
        return (nn = i.slice(t, 1 < e ? 1 - e : void 0));
      }
      function an(t) {
        var e = t.keyCode;
        return (
          'charCode' in t
            ? 0 === (t = t.charCode) && 13 === e && (t = 13)
            : (t = e),
          10 === t && (t = 13),
          32 <= t || 13 === t ? t : 0
        );
      }
      function on() {
        return !0;
      }
      function ln() {
        return !1;
      }
      function sn(t) {
        function e(e, n, r, i, a) {
          for (var o in ((this._reactName = e),
          (this._targetInst = r),
          (this.type = n),
          (this.nativeEvent = i),
          (this.target = a),
          (this.currentTarget = null),
          t))
            t.hasOwnProperty(o) && ((e = t[o]), (this[o] = e ? e(i) : i[o]));
          return (
            (this.isDefaultPrevented = (
              null != i.defaultPrevented
                ? i.defaultPrevented
                : !1 === i.returnValue
            )
              ? on
              : ln),
            (this.isPropagationStopped = ln),
            this
          );
        }
        return (
          i(e.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              var t = this.nativeEvent;
              t &&
                (t.preventDefault
                  ? t.preventDefault()
                  : 'unknown' !== typeof t.returnValue && (t.returnValue = !1),
                (this.isDefaultPrevented = on));
            },
            stopPropagation: function () {
              var t = this.nativeEvent;
              t &&
                (t.stopPropagation
                  ? t.stopPropagation()
                  : 'unknown' !== typeof t.cancelBubble &&
                    (t.cancelBubble = !0),
                (this.isPropagationStopped = on));
            },
            persist: function () {},
            isPersistent: on,
          }),
          e
        );
      }
      var un,
        cn,
        fn,
        dn = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (t) {
            return t.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
        },
        hn = sn(dn),
        pn = i({}, dn, { view: 0, detail: 0 }),
        gn = sn(pn),
        vn = i({}, pn, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: En,
          button: 0,
          buttons: 0,
          relatedTarget: function (t) {
            return void 0 === t.relatedTarget
              ? t.fromElement === t.srcElement
                ? t.toElement
                : t.fromElement
              : t.relatedTarget;
          },
          movementX: function (t) {
            return 'movementX' in t
              ? t.movementX
              : (t !== fn &&
                  (fn && 'mousemove' === t.type
                    ? ((un = t.screenX - fn.screenX),
                      (cn = t.screenY - fn.screenY))
                    : (cn = un = 0),
                  (fn = t)),
                un);
          },
          movementY: function (t) {
            return 'movementY' in t ? t.movementY : cn;
          },
        }),
        yn = sn(vn),
        mn = sn(i({}, vn, { dataTransfer: 0 })),
        bn = sn(i({}, pn, { relatedTarget: 0 })),
        _n = sn(
          i({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
        ),
        wn = sn(
          i({}, dn, {
            clipboardData: function (t) {
              return 'clipboardData' in t
                ? t.clipboardData
                : window.clipboardData;
            },
          })
        ),
        Sn = sn(i({}, dn, { data: 0 })),
        xn = {
          Esc: 'Escape',
          Spacebar: ' ',
          Left: 'ArrowLeft',
          Up: 'ArrowUp',
          Right: 'ArrowRight',
          Down: 'ArrowDown',
          Del: 'Delete',
          Win: 'OS',
          Menu: 'ContextMenu',
          Apps: 'ContextMenu',
          Scroll: 'ScrollLock',
          MozPrintableKey: 'Unidentified',
        },
        kn = {
          8: 'Backspace',
          9: 'Tab',
          12: 'Clear',
          13: 'Enter',
          16: 'Shift',
          17: 'Control',
          18: 'Alt',
          19: 'Pause',
          20: 'CapsLock',
          27: 'Escape',
          32: ' ',
          33: 'PageUp',
          34: 'PageDown',
          35: 'End',
          36: 'Home',
          37: 'ArrowLeft',
          38: 'ArrowUp',
          39: 'ArrowRight',
          40: 'ArrowDown',
          45: 'Insert',
          46: 'Delete',
          112: 'F1',
          113: 'F2',
          114: 'F3',
          115: 'F4',
          116: 'F5',
          117: 'F6',
          118: 'F7',
          119: 'F8',
          120: 'F9',
          121: 'F10',
          122: 'F11',
          123: 'F12',
          144: 'NumLock',
          145: 'ScrollLock',
          224: 'Meta',
        },
        Cn = {
          Alt: 'altKey',
          Control: 'ctrlKey',
          Meta: 'metaKey',
          Shift: 'shiftKey',
        };
      function Pn(t) {
        var e = this.nativeEvent;
        return e.getModifierState
          ? e.getModifierState(t)
          : !!(t = Cn[t]) && !!e[t];
      }
      function En() {
        return Pn;
      }
      var Tn = sn(
          i({}, pn, {
            key: function (t) {
              if (t.key) {
                var e = xn[t.key] || t.key;
                if ('Unidentified' !== e) return e;
              }
              return 'keypress' === t.type
                ? 13 === (t = an(t))
                  ? 'Enter'
                  : String.fromCharCode(t)
                : 'keydown' === t.type || 'keyup' === t.type
                ? kn[t.keyCode] || 'Unidentified'
                : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (t) {
              return 'keypress' === t.type ? an(t) : 0;
            },
            keyCode: function (t) {
              return 'keydown' === t.type || 'keyup' === t.type ? t.keyCode : 0;
            },
            which: function (t) {
              return 'keypress' === t.type
                ? an(t)
                : 'keydown' === t.type || 'keyup' === t.type
                ? t.keyCode
                : 0;
            },
          })
        ),
        On = sn(
          i({}, vn, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
          })
        ),
        Nn = sn(
          i({}, pn, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: En,
          })
        ),
        Mn = sn(
          i({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
        ),
        An = sn(
          i({}, vn, {
            deltaX: function (t) {
              return 'deltaX' in t
                ? t.deltaX
                : 'wheelDeltaX' in t
                ? -t.wheelDeltaX
                : 0;
            },
            deltaY: function (t) {
              return 'deltaY' in t
                ? t.deltaY
                : 'wheelDeltaY' in t
                ? -t.wheelDeltaY
                : 'wheelDelta' in t
                ? -t.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          })
        ),
        Fn = [9, 13, 27, 32],
        Ln = f && 'CompositionEvent' in window,
        Rn = null;
      f && 'documentMode' in document && (Rn = document.documentMode);
      var In = f && 'TextEvent' in window && !Rn,
        Dn = f && (!Ln || (Rn && 8 < Rn && 11 >= Rn)),
        zn = String.fromCharCode(32),
        Un = !1;
      function jn(t, e) {
        switch (t) {
          case 'keyup':
            return -1 !== Fn.indexOf(e.keyCode);
          case 'keydown':
            return 229 !== e.keyCode;
          case 'keypress':
          case 'mousedown':
          case 'focusout':
            return !0;
          default:
            return !1;
        }
      }
      function Gn(t) {
        return 'object' === typeof (t = t.detail) && 'data' in t
          ? t.data
          : null;
      }
      var Bn = !1;
      var Hn = {
        color: !0,
        date: !0,
        datetime: !0,
        'datetime-local': !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
      function Vn(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return 'input' === e ? !!Hn[t.type] : 'textarea' === e;
      }
      function Wn(t, e, n, r) {
        Mt(r),
          0 < (e = Lr(e, 'onChange')).length &&
            ((n = new hn('onChange', 'change', null, n, r)),
            t.push({ event: n, listeners: e }));
      }
      var Kn = null,
        $n = null;
      function Yn(t) {
        Pr(t, 0);
      }
      function Qn(t) {
        if (X(ei(t))) return t;
      }
      function qn(t, e) {
        if ('change' === t) return e;
      }
      var Xn = !1;
      if (f) {
        var Jn;
        if (f) {
          var Zn = 'oninput' in document;
          if (!Zn) {
            var tr = document.createElement('div');
            tr.setAttribute('oninput', 'return;'),
              (Zn = 'function' === typeof tr.oninput);
          }
          Jn = Zn;
        } else Jn = !1;
        Xn = Jn && (!document.documentMode || 9 < document.documentMode);
      }
      function er() {
        Kn && (Kn.detachEvent('onpropertychange', nr), ($n = Kn = null));
      }
      function nr(t) {
        if ('value' === t.propertyName && Qn($n)) {
          var e = [];
          if ((Wn(e, $n, t, Pt(t)), (t = Yn), Dt)) t(e);
          else {
            Dt = !0;
            try {
              Ft(t, e);
            } finally {
              (Dt = !1), Ut();
            }
          }
        }
      }
      function rr(t, e, n) {
        'focusin' === t
          ? (er(), ($n = n), (Kn = e).attachEvent('onpropertychange', nr))
          : 'focusout' === t && er();
      }
      function ir(t) {
        if ('selectionchange' === t || 'keyup' === t || 'keydown' === t)
          return Qn($n);
      }
      function ar(t, e) {
        if ('click' === t) return Qn(e);
      }
      function or(t, e) {
        if ('input' === t || 'change' === t) return Qn(e);
      }
      var lr =
          'function' === typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t === 1 / e)) ||
                  (t !== t && e !== e)
                );
              },
        sr = Object.prototype.hasOwnProperty;
      function ur(t, e) {
        if (lr(t, e)) return !0;
        if (
          'object' !== typeof t ||
          null === t ||
          'object' !== typeof e ||
          null === e
        )
          return !1;
        var n = Object.keys(t),
          r = Object.keys(e);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++)
          if (!sr.call(e, n[r]) || !lr(t[n[r]], e[n[r]])) return !1;
        return !0;
      }
      function cr(t) {
        for (; t && t.firstChild; ) t = t.firstChild;
        return t;
      }
      function fr(t, e) {
        var n,
          r = cr(t);
        for (t = 0; r; ) {
          if (3 === r.nodeType) {
            if (((n = t + r.textContent.length), t <= e && n >= e))
              return { node: r, offset: e - t };
            t = n;
          }
          t: {
            for (; r; ) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break t;
              }
              r = r.parentNode;
            }
            r = void 0;
          }
          r = cr(r);
        }
      }
      function dr(t, e) {
        return (
          !(!t || !e) &&
          (t === e ||
            ((!t || 3 !== t.nodeType) &&
              (e && 3 === e.nodeType
                ? dr(t, e.parentNode)
                : 'contains' in t
                ? t.contains(e)
                : !!t.compareDocumentPosition &&
                  !!(16 & t.compareDocumentPosition(e)))))
        );
      }
      function hr() {
        for (var t = window, e = J(); e instanceof t.HTMLIFrameElement; ) {
          try {
            var n = 'string' === typeof e.contentWindow.location.href;
          } catch (r) {
            n = !1;
          }
          if (!n) break;
          e = J((t = e.contentWindow).document);
        }
        return e;
      }
      function pr(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return (
          e &&
          (('input' === e &&
            ('text' === t.type ||
              'search' === t.type ||
              'tel' === t.type ||
              'url' === t.type ||
              'password' === t.type)) ||
            'textarea' === e ||
            'true' === t.contentEditable)
        );
      }
      var gr = f && 'documentMode' in document && 11 >= document.documentMode,
        vr = null,
        yr = null,
        mr = null,
        br = !1;
      function _r(t, e, n) {
        var r =
          n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        br ||
          null == vr ||
          vr !== J(r) ||
          ('selectionStart' in (r = vr) && pr(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                anchorNode: (r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
                ).getSelection()).anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset,
              }),
          (mr && ur(mr, r)) ||
            ((mr = r),
            0 < (r = Lr(yr, 'onSelect')).length &&
              ((e = new hn('onSelect', 'select', null, e, n)),
              t.push({ event: e, listeners: r }),
              (e.target = vr))));
      }
      Re(
        'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
          ' '
        ),
        0
      ),
        Re(
          'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
            ' '
          ),
          1
        ),
        Re(Le, 2);
      for (
        var wr = 'change selectionchange textInput compositionstart compositionend compositionupdate'.split(
            ' '
          ),
          Sr = 0;
        Sr < wr.length;
        Sr++
      )
        Fe.set(wr[Sr], 0);
      c('onMouseEnter', ['mouseout', 'mouseover']),
        c('onMouseLeave', ['mouseout', 'mouseover']),
        c('onPointerEnter', ['pointerout', 'pointerover']),
        c('onPointerLeave', ['pointerout', 'pointerover']),
        u(
          'onChange',
          'change click focusin focusout input keydown keyup selectionchange'.split(
            ' '
          )
        ),
        u(
          'onSelect',
          'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
            ' '
          )
        ),
        u('onBeforeInput', [
          'compositionend',
          'keypress',
          'textInput',
          'paste',
        ]),
        u(
          'onCompositionEnd',
          'compositionend focusout keydown keypress keyup mousedown'.split(' ')
        ),
        u(
          'onCompositionStart',
          'compositionstart focusout keydown keypress keyup mousedown'.split(
            ' '
          )
        ),
        u(
          'onCompositionUpdate',
          'compositionupdate focusout keydown keypress keyup mousedown'.split(
            ' '
          )
        );
      var xr = 'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
          ' '
        ),
        kr = new Set(
          'cancel close invalid load scroll toggle'.split(' ').concat(xr)
        );
      function Cr(t, e, n) {
        var r = t.type || 'unknown-event';
        (t.currentTarget = n),
          (function (t, e, n, r, i, a, l, s, u) {
            if ((Qt.apply(this, arguments), Vt)) {
              if (!Vt) throw Error(o(198));
              var c = Wt;
              (Vt = !1), (Wt = null), Kt || ((Kt = !0), ($t = c));
            }
          })(r, e, void 0, t),
          (t.currentTarget = null);
      }
      function Pr(t, e) {
        e = 0 !== (4 & e);
        for (var n = 0; n < t.length; n++) {
          var r = t[n],
            i = r.event;
          r = r.listeners;
          t: {
            var a = void 0;
            if (e)
              for (var o = r.length - 1; 0 <= o; o--) {
                var l = r[o],
                  s = l.instance,
                  u = l.currentTarget;
                if (((l = l.listener), s !== a && i.isPropagationStopped()))
                  break t;
                Cr(i, l, u), (a = s);
              }
            else
              for (o = 0; o < r.length; o++) {
                if (
                  ((s = (l = r[o]).instance),
                  (u = l.currentTarget),
                  (l = l.listener),
                  s !== a && i.isPropagationStopped())
                )
                  break t;
                Cr(i, l, u), (a = s);
              }
          }
        }
        if (Kt) throw ((t = $t), (Kt = !1), ($t = null), t);
      }
      function Er(t, e) {
        var n = ri(e),
          r = t + '__bubble';
        n.has(r) || (Mr(e, t, 2, !1), n.add(r));
      }
      var Tr = '_reactListening' + Math.random().toString(36).slice(2);
      function Or(t) {
        t[Tr] ||
          ((t[Tr] = !0),
          l.forEach(function (e) {
            kr.has(e) || Nr(e, !1, t, null), Nr(e, !0, t, null);
          }));
      }
      function Nr(t, e, n, r) {
        var i =
            4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
          a = n;
        if (
          ('selectionchange' === t && 9 !== n.nodeType && (a = n.ownerDocument),
          null !== r && !e && kr.has(t))
        ) {
          if ('scroll' !== t) return;
          (i |= 2), (a = r);
        }
        var o = ri(a),
          l = t + '__' + (e ? 'capture' : 'bubble');
        o.has(l) || (e && (i |= 4), Mr(a, t, i, e), o.add(l));
      }
      function Mr(t, e, n, r) {
        var i = Fe.get(e);
        switch (void 0 === i ? 2 : i) {
          case 0:
            i = qe;
            break;
          case 1:
            i = Xe;
            break;
          default:
            i = Je;
        }
        (n = i.bind(null, e, n, t)),
          (i = void 0),
          !Gt ||
            ('touchstart' !== e && 'touchmove' !== e && 'wheel' !== e) ||
            (i = !0),
          r
            ? void 0 !== i
              ? t.addEventListener(e, n, { capture: !0, passive: i })
              : t.addEventListener(e, n, !0)
            : void 0 !== i
            ? t.addEventListener(e, n, { passive: i })
            : t.addEventListener(e, n, !1);
      }
      function Ar(t, e, n, r, i) {
        var a = r;
        if (0 === (1 & e) && 0 === (2 & e) && null !== r)
          t: for (;;) {
            if (null === r) return;
            var o = r.tag;
            if (3 === o || 4 === o) {
              var l = r.stateNode.containerInfo;
              if (l === i || (8 === l.nodeType && l.parentNode === i)) break;
              if (4 === o)
                for (o = r.return; null !== o; ) {
                  var s = o.tag;
                  if (
                    (3 === s || 4 === s) &&
                    ((s = o.stateNode.containerInfo) === i ||
                      (8 === s.nodeType && s.parentNode === i))
                  )
                    return;
                  o = o.return;
                }
              for (; null !== l; ) {
                if (null === (o = Zr(l))) return;
                if (5 === (s = o.tag) || 6 === s) {
                  r = a = o;
                  continue t;
                }
                l = l.parentNode;
              }
            }
            r = r.return;
          }
        !(function (t, e, n) {
          if (zt) return t(e, n);
          zt = !0;
          try {
            It(t, e, n);
          } finally {
            (zt = !1), Ut();
          }
        })(function () {
          var r = a,
            i = Pt(n),
            o = [];
          t: {
            var l = Ae.get(t);
            if (void 0 !== l) {
              var s = hn,
                u = t;
              switch (t) {
                case 'keypress':
                  if (0 === an(n)) break t;
                case 'keydown':
                case 'keyup':
                  s = Tn;
                  break;
                case 'focusin':
                  (u = 'focus'), (s = bn);
                  break;
                case 'focusout':
                  (u = 'blur'), (s = bn);
                  break;
                case 'beforeblur':
                case 'afterblur':
                  s = bn;
                  break;
                case 'click':
                  if (2 === n.button) break t;
                case 'auxclick':
                case 'dblclick':
                case 'mousedown':
                case 'mousemove':
                case 'mouseup':
                case 'mouseout':
                case 'mouseover':
                case 'contextmenu':
                  s = yn;
                  break;
                case 'drag':
                case 'dragend':
                case 'dragenter':
                case 'dragexit':
                case 'dragleave':
                case 'dragover':
                case 'dragstart':
                case 'drop':
                  s = mn;
                  break;
                case 'touchcancel':
                case 'touchend':
                case 'touchmove':
                case 'touchstart':
                  s = Nn;
                  break;
                case Te:
                case Oe:
                case Ne:
                  s = _n;
                  break;
                case Me:
                  s = Mn;
                  break;
                case 'scroll':
                  s = gn;
                  break;
                case 'wheel':
                  s = An;
                  break;
                case 'copy':
                case 'cut':
                case 'paste':
                  s = wn;
                  break;
                case 'gotpointercapture':
                case 'lostpointercapture':
                case 'pointercancel':
                case 'pointerdown':
                case 'pointermove':
                case 'pointerout':
                case 'pointerover':
                case 'pointerup':
                  s = On;
              }
              var c = 0 !== (4 & e),
                f = !c && 'scroll' === t,
                d = c ? (null !== l ? l + 'Capture' : null) : l;
              c = [];
              for (var h, p = r; null !== p; ) {
                var g = (h = p).stateNode;
                if (
                  (5 === h.tag &&
                    null !== g &&
                    ((h = g),
                    null !== d &&
                      null != (g = jt(p, d)) &&
                      c.push(Fr(p, g, h))),
                  f)
                )
                  break;
                p = p.return;
              }
              0 < c.length &&
                ((l = new s(l, u, null, n, i)),
                o.push({ event: l, listeners: c }));
            }
          }
          if (0 === (7 & e)) {
            if (
              ((s = 'mouseout' === t || 'pointerout' === t),
              (!(l = 'mouseover' === t || 'pointerover' === t) ||
                0 !== (16 & e) ||
                !(u = n.relatedTarget || n.fromElement) ||
                (!Zr(u) && !u[Xr])) &&
                (s || l) &&
                ((l =
                  i.window === i
                    ? i
                    : (l = i.ownerDocument)
                    ? l.defaultView || l.parentWindow
                    : window),
                s
                  ? ((s = r),
                    null !==
                      (u = (u = n.relatedTarget || n.toElement)
                        ? Zr(u)
                        : null) &&
                      (u !== (f = qt(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                      (u = null))
                  : ((s = null), (u = r)),
                s !== u))
            ) {
              if (
                ((c = yn),
                (g = 'onMouseLeave'),
                (d = 'onMouseEnter'),
                (p = 'mouse'),
                ('pointerout' !== t && 'pointerover' !== t) ||
                  ((c = On),
                  (g = 'onPointerLeave'),
                  (d = 'onPointerEnter'),
                  (p = 'pointer')),
                (f = null == s ? l : ei(s)),
                (h = null == u ? l : ei(u)),
                ((l = new c(g, p + 'leave', s, n, i)).target = f),
                (l.relatedTarget = h),
                (g = null),
                Zr(i) === r &&
                  (((c = new c(d, p + 'enter', u, n, i)).target = h),
                  (c.relatedTarget = f),
                  (g = c)),
                (f = g),
                s && u)
              )
                t: {
                  for (d = u, p = 0, h = c = s; h; h = Rr(h)) p++;
                  for (h = 0, g = d; g; g = Rr(g)) h++;
                  for (; 0 < p - h; ) (c = Rr(c)), p--;
                  for (; 0 < h - p; ) (d = Rr(d)), h--;
                  for (; p--; ) {
                    if (c === d || (null !== d && c === d.alternate)) break t;
                    (c = Rr(c)), (d = Rr(d));
                  }
                  c = null;
                }
              else c = null;
              null !== s && Ir(o, l, s, c, !1),
                null !== u && null !== f && Ir(o, f, u, c, !0);
            }
            if (
              'select' ===
                (s =
                  (l = r ? ei(r) : window).nodeName &&
                  l.nodeName.toLowerCase()) ||
              ('input' === s && 'file' === l.type)
            )
              var v = qn;
            else if (Vn(l))
              if (Xn) v = or;
              else {
                v = ir;
                var y = rr;
              }
            else
              (s = l.nodeName) &&
                'input' === s.toLowerCase() &&
                ('checkbox' === l.type || 'radio' === l.type) &&
                (v = ar);
            switch (
              (v && (v = v(t, r))
                ? Wn(o, v, n, i)
                : (y && y(t, l, r),
                  'focusout' === t &&
                    (y = l._wrapperState) &&
                    y.controlled &&
                    'number' === l.type &&
                    it(l, 'number', l.value)),
              (y = r ? ei(r) : window),
              t)
            ) {
              case 'focusin':
                (Vn(y) || 'true' === y.contentEditable) &&
                  ((vr = y), (yr = r), (mr = null));
                break;
              case 'focusout':
                mr = yr = vr = null;
                break;
              case 'mousedown':
                br = !0;
                break;
              case 'contextmenu':
              case 'mouseup':
              case 'dragend':
                (br = !1), _r(o, n, i);
                break;
              case 'selectionchange':
                if (gr) break;
              case 'keydown':
              case 'keyup':
                _r(o, n, i);
            }
            var m;
            if (Ln)
              t: {
                switch (t) {
                  case 'compositionstart':
                    var b = 'onCompositionStart';
                    break t;
                  case 'compositionend':
                    b = 'onCompositionEnd';
                    break t;
                  case 'compositionupdate':
                    b = 'onCompositionUpdate';
                    break t;
                }
                b = void 0;
              }
            else
              Bn
                ? jn(t, n) && (b = 'onCompositionEnd')
                : 'keydown' === t &&
                  229 === n.keyCode &&
                  (b = 'onCompositionStart');
            b &&
              (Dn &&
                'ko' !== n.locale &&
                (Bn || 'onCompositionStart' !== b
                  ? 'onCompositionEnd' === b && Bn && (m = rn())
                  : ((en = 'value' in (tn = i) ? tn.value : tn.textContent),
                    (Bn = !0))),
              0 < (y = Lr(r, b)).length &&
                ((b = new Sn(b, t, null, n, i)),
                o.push({ event: b, listeners: y }),
                m ? (b.data = m) : null !== (m = Gn(n)) && (b.data = m))),
              (m = In
                ? (function (t, e) {
                    switch (t) {
                      case 'compositionend':
                        return Gn(e);
                      case 'keypress':
                        return 32 !== e.which ? null : ((Un = !0), zn);
                      case 'textInput':
                        return (t = e.data) === zn && Un ? null : t;
                      default:
                        return null;
                    }
                  })(t, n)
                : (function (t, e) {
                    if (Bn)
                      return 'compositionend' === t || (!Ln && jn(t, e))
                        ? ((t = rn()), (nn = en = tn = null), (Bn = !1), t)
                        : null;
                    switch (t) {
                      case 'paste':
                        return null;
                      case 'keypress':
                        if (
                          !(e.ctrlKey || e.altKey || e.metaKey) ||
                          (e.ctrlKey && e.altKey)
                        ) {
                          if (e.char && 1 < e.char.length) return e.char;
                          if (e.which) return String.fromCharCode(e.which);
                        }
                        return null;
                      case 'compositionend':
                        return Dn && 'ko' !== e.locale ? null : e.data;
                      default:
                        return null;
                    }
                  })(t, n)) &&
                0 < (r = Lr(r, 'onBeforeInput')).length &&
                ((i = new Sn('onBeforeInput', 'beforeinput', null, n, i)),
                o.push({ event: i, listeners: r }),
                (i.data = m));
          }
          Pr(o, e);
        });
      }
      function Fr(t, e, n) {
        return { instance: t, listener: e, currentTarget: n };
      }
      function Lr(t, e) {
        for (var n = e + 'Capture', r = []; null !== t; ) {
          var i = t,
            a = i.stateNode;
          5 === i.tag &&
            null !== a &&
            ((i = a),
            null != (a = jt(t, n)) && r.unshift(Fr(t, a, i)),
            null != (a = jt(t, e)) && r.push(Fr(t, a, i))),
            (t = t.return);
        }
        return r;
      }
      function Rr(t) {
        if (null === t) return null;
        do {
          t = t.return;
        } while (t && 5 !== t.tag);
        return t || null;
      }
      function Ir(t, e, n, r, i) {
        for (var a = e._reactName, o = []; null !== n && n !== r; ) {
          var l = n,
            s = l.alternate,
            u = l.stateNode;
          if (null !== s && s === r) break;
          5 === l.tag &&
            null !== u &&
            ((l = u),
            i
              ? null != (s = jt(n, a)) && o.unshift(Fr(n, s, l))
              : i || (null != (s = jt(n, a)) && o.push(Fr(n, s, l)))),
            (n = n.return);
        }
        0 !== o.length && t.push({ event: e, listeners: o });
      }
      function Dr() {}
      var zr = null,
        Ur = null;
      function jr(t, e) {
        switch (t) {
          case 'button':
          case 'input':
          case 'select':
          case 'textarea':
            return !!e.autoFocus;
        }
        return !1;
      }
      function Gr(t, e) {
        return (
          'textarea' === t ||
          'option' === t ||
          'noscript' === t ||
          'string' === typeof e.children ||
          'number' === typeof e.children ||
          ('object' === typeof e.dangerouslySetInnerHTML &&
            null !== e.dangerouslySetInnerHTML &&
            null != e.dangerouslySetInnerHTML.__html)
        );
      }
      var Br = 'function' === typeof setTimeout ? setTimeout : void 0,
        Hr = 'function' === typeof clearTimeout ? clearTimeout : void 0;
      function Vr(t) {
        1 === t.nodeType
          ? (t.textContent = '')
          : 9 === t.nodeType && null != (t = t.body) && (t.textContent = '');
      }
      function Wr(t) {
        for (; null != t; t = t.nextSibling) {
          var e = t.nodeType;
          if (1 === e || 3 === e) break;
        }
        return t;
      }
      function Kr(t) {
        t = t.previousSibling;
        for (var e = 0; t; ) {
          if (8 === t.nodeType) {
            var n = t.data;
            if ('$' === n || '$!' === n || '$?' === n) {
              if (0 === e) return t;
              e--;
            } else '/$' === n && e++;
          }
          t = t.previousSibling;
        }
        return null;
      }
      var $r = 0;
      var Yr = Math.random().toString(36).slice(2),
        Qr = '__reactFiber$' + Yr,
        qr = '__reactProps$' + Yr,
        Xr = '__reactContainer$' + Yr,
        Jr = '__reactEvents$' + Yr;
      function Zr(t) {
        var e = t[Qr];
        if (e) return e;
        for (var n = t.parentNode; n; ) {
          if ((e = n[Xr] || n[Qr])) {
            if (
              ((n = e.alternate),
              null !== e.child || (null !== n && null !== n.child))
            )
              for (t = Kr(t); null !== t; ) {
                if ((n = t[Qr])) return n;
                t = Kr(t);
              }
            return e;
          }
          n = (t = n).parentNode;
        }
        return null;
      }
      function ti(t) {
        return !(t = t[Qr] || t[Xr]) ||
          (5 !== t.tag && 6 !== t.tag && 13 !== t.tag && 3 !== t.tag)
          ? null
          : t;
      }
      function ei(t) {
        if (5 === t.tag || 6 === t.tag) return t.stateNode;
        throw Error(o(33));
      }
      function ni(t) {
        return t[qr] || null;
      }
      function ri(t) {
        var e = t[Jr];
        return void 0 === e && (e = t[Jr] = new Set()), e;
      }
      var ii = [],
        ai = -1;
      function oi(t) {
        return { current: t };
      }
      function li(t) {
        0 > ai || ((t.current = ii[ai]), (ii[ai] = null), ai--);
      }
      function si(t, e) {
        ai++, (ii[ai] = t.current), (t.current = e);
      }
      var ui = {},
        ci = oi(ui),
        fi = oi(!1),
        di = ui;
      function hi(t, e) {
        var n = t.type.contextTypes;
        if (!n) return ui;
        var r = t.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
          return r.__reactInternalMemoizedMaskedChildContext;
        var i,
          a = {};
        for (i in n) a[i] = e[i];
        return (
          r &&
            (((t =
              t.stateNode).__reactInternalMemoizedUnmaskedChildContext = e),
            (t.__reactInternalMemoizedMaskedChildContext = a)),
          a
        );
      }
      function pi(t) {
        return null !== (t = t.childContextTypes) && void 0 !== t;
      }
      function gi() {
        li(fi), li(ci);
      }
      function vi(t, e, n) {
        if (ci.current !== ui) throw Error(o(168));
        si(ci, e), si(fi, n);
      }
      function yi(t, e, n) {
        var r = t.stateNode;
        if (
          ((t = e.childContextTypes), 'function' !== typeof r.getChildContext)
        )
          return n;
        for (var a in (r = r.getChildContext()))
          if (!(a in t)) throw Error(o(108, $(e) || 'Unknown', a));
        return i({}, n, r);
      }
      function mi(t) {
        return (
          (t =
            ((t = t.stateNode) &&
              t.__reactInternalMemoizedMergedChildContext) ||
            ui),
          (di = ci.current),
          si(ci, t),
          si(fi, fi.current),
          !0
        );
      }
      function bi(t, e, n) {
        var r = t.stateNode;
        if (!r) throw Error(o(169));
        n
          ? ((t = yi(t, e, di)),
            (r.__reactInternalMemoizedMergedChildContext = t),
            li(fi),
            li(ci),
            si(ci, t))
          : li(fi),
          si(fi, n);
      }
      var _i = null,
        wi = null,
        Si = a.unstable_runWithPriority,
        xi = a.unstable_scheduleCallback,
        ki = a.unstable_cancelCallback,
        Ci = a.unstable_shouldYield,
        Pi = a.unstable_requestPaint,
        Ei = a.unstable_now,
        Ti = a.unstable_getCurrentPriorityLevel,
        Oi = a.unstable_ImmediatePriority,
        Ni = a.unstable_UserBlockingPriority,
        Mi = a.unstable_NormalPriority,
        Ai = a.unstable_LowPriority,
        Fi = a.unstable_IdlePriority,
        Li = {},
        Ri = void 0 !== Pi ? Pi : function () {},
        Ii = null,
        Di = null,
        zi = !1,
        Ui = Ei(),
        ji =
          1e4 > Ui
            ? Ei
            : function () {
                return Ei() - Ui;
              };
      function Gi() {
        switch (Ti()) {
          case Oi:
            return 99;
          case Ni:
            return 98;
          case Mi:
            return 97;
          case Ai:
            return 96;
          case Fi:
            return 95;
          default:
            throw Error(o(332));
        }
      }
      function Bi(t) {
        switch (t) {
          case 99:
            return Oi;
          case 98:
            return Ni;
          case 97:
            return Mi;
          case 96:
            return Ai;
          case 95:
            return Fi;
          default:
            throw Error(o(332));
        }
      }
      function Hi(t, e) {
        return (t = Bi(t)), Si(t, e);
      }
      function Vi(t, e, n) {
        return (t = Bi(t)), xi(t, e, n);
      }
      function Wi() {
        if (null !== Di) {
          var t = Di;
          (Di = null), ki(t);
        }
        Ki();
      }
      function Ki() {
        if (!zi && null !== Ii) {
          zi = !0;
          var t = 0;
          try {
            var e = Ii;
            Hi(99, function () {
              for (; t < e.length; t++) {
                var n = e[t];
                do {
                  n = n(!0);
                } while (null !== n);
              }
            }),
              (Ii = null);
          } catch (n) {
            throw (null !== Ii && (Ii = Ii.slice(t + 1)), xi(Oi, Wi), n);
          } finally {
            zi = !1;
          }
        }
      }
      var $i = w.ReactCurrentBatchConfig;
      function Yi(t, e) {
        if (t && t.defaultProps) {
          for (var n in ((e = i({}, e)), (t = t.defaultProps)))
            void 0 === e[n] && (e[n] = t[n]);
          return e;
        }
        return e;
      }
      var Qi = oi(null),
        qi = null,
        Xi = null,
        Ji = null;
      function Zi() {
        Ji = Xi = qi = null;
      }
      function ta(t) {
        var e = Qi.current;
        li(Qi), (t.type._context._currentValue = e);
      }
      function ea(t, e) {
        for (; null !== t; ) {
          var n = t.alternate;
          if ((t.childLanes & e) === e) {
            if (null === n || (n.childLanes & e) === e) break;
            n.childLanes |= e;
          } else (t.childLanes |= e), null !== n && (n.childLanes |= e);
          t = t.return;
        }
      }
      function na(t, e) {
        (qi = t),
          (Ji = Xi = null),
          null !== (t = t.dependencies) &&
            null !== t.firstContext &&
            (0 !== (t.lanes & e) && (Lo = !0), (t.firstContext = null));
      }
      function ra(t, e) {
        if (Ji !== t && !1 !== e && 0 !== e)
          if (
            (('number' === typeof e && 1073741823 !== e) ||
              ((Ji = t), (e = 1073741823)),
            (e = { context: t, observedBits: e, next: null }),
            null === Xi)
          ) {
            if (null === qi) throw Error(o(308));
            (Xi = e),
              (qi.dependencies = {
                lanes: 0,
                firstContext: e,
                responders: null,
              });
          } else Xi = Xi.next = e;
        return t._currentValue;
      }
      var ia = !1;
      function aa(t) {
        t.updateQueue = {
          baseState: t.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null },
          effects: null,
        };
      }
      function oa(t, e) {
        (t = t.updateQueue),
          e.updateQueue === t &&
            (e.updateQueue = {
              baseState: t.baseState,
              firstBaseUpdate: t.firstBaseUpdate,
              lastBaseUpdate: t.lastBaseUpdate,
              shared: t.shared,
              effects: t.effects,
            });
      }
      function la(t, e) {
        return {
          eventTime: t,
          lane: e,
          tag: 0,
          payload: null,
          callback: null,
          next: null,
        };
      }
      function sa(t, e) {
        if (null !== (t = t.updateQueue)) {
          var n = (t = t.shared).pending;
          null === n ? (e.next = e) : ((e.next = n.next), (n.next = e)),
            (t.pending = e);
        }
      }
      function ua(t, e) {
        var n = t.updateQueue,
          r = t.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
          var i = null,
            a = null;
          if (null !== (n = n.firstBaseUpdate)) {
            do {
              var o = {
                eventTime: n.eventTime,
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: n.callback,
                next: null,
              };
              null === a ? (i = a = o) : (a = a.next = o), (n = n.next);
            } while (null !== n);
            null === a ? (i = a = e) : (a = a.next = e);
          } else i = a = e;
          return (
            (n = {
              baseState: r.baseState,
              firstBaseUpdate: i,
              lastBaseUpdate: a,
              shared: r.shared,
              effects: r.effects,
            }),
            void (t.updateQueue = n)
          );
        }
        null === (t = n.lastBaseUpdate)
          ? (n.firstBaseUpdate = e)
          : (t.next = e),
          (n.lastBaseUpdate = e);
      }
      function ca(t, e, n, r) {
        var a = t.updateQueue;
        ia = !1;
        var o = a.firstBaseUpdate,
          l = a.lastBaseUpdate,
          s = a.shared.pending;
        if (null !== s) {
          a.shared.pending = null;
          var u = s,
            c = u.next;
          (u.next = null), null === l ? (o = c) : (l.next = c), (l = u);
          var f = t.alternate;
          if (null !== f) {
            var d = (f = f.updateQueue).lastBaseUpdate;
            d !== l &&
              (null === d ? (f.firstBaseUpdate = c) : (d.next = c),
              (f.lastBaseUpdate = u));
          }
        }
        if (null !== o) {
          for (d = a.baseState, l = 0, f = c = u = null; ; ) {
            s = o.lane;
            var h = o.eventTime;
            if ((r & s) === s) {
              null !== f &&
                (f = f.next = {
                  eventTime: h,
                  lane: 0,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                });
              t: {
                var p = t,
                  g = o;
                switch (((s = e), (h = n), g.tag)) {
                  case 1:
                    if ('function' === typeof (p = g.payload)) {
                      d = p.call(h, d, s);
                      break t;
                    }
                    d = p;
                    break t;
                  case 3:
                    p.flags = (-4097 & p.flags) | 64;
                  case 0:
                    if (
                      null ===
                        (s =
                          'function' === typeof (p = g.payload)
                            ? p.call(h, d, s)
                            : p) ||
                      void 0 === s
                    )
                      break t;
                    d = i({}, d, s);
                    break t;
                  case 2:
                    ia = !0;
                }
              }
              null !== o.callback &&
                ((t.flags |= 32),
                null === (s = a.effects) ? (a.effects = [o]) : s.push(o));
            } else
              (h = {
                eventTime: h,
                lane: s,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              }),
                null === f ? ((c = f = h), (u = d)) : (f = f.next = h),
                (l |= s);
            if (null === (o = o.next)) {
              if (null === (s = a.shared.pending)) break;
              (o = s.next),
                (s.next = null),
                (a.lastBaseUpdate = s),
                (a.shared.pending = null);
            }
          }
          null === f && (u = d),
            (a.baseState = u),
            (a.firstBaseUpdate = c),
            (a.lastBaseUpdate = f),
            (zl |= l),
            (t.lanes = l),
            (t.memoizedState = d);
        }
      }
      function fa(t, e, n) {
        if (((t = e.effects), (e.effects = null), null !== t))
          for (e = 0; e < t.length; e++) {
            var r = t[e],
              i = r.callback;
            if (null !== i) {
              if (((r.callback = null), (r = n), 'function' !== typeof i))
                throw Error(o(191, i));
              i.call(r);
            }
          }
      }
      var da = new r.Component().refs;
      function ha(t, e, n, r) {
        (n =
          null === (n = n(r, (e = t.memoizedState))) || void 0 === n
            ? e
            : i({}, e, n)),
          (t.memoizedState = n),
          0 === t.lanes && (t.updateQueue.baseState = n);
      }
      var pa = {
        isMounted: function (t) {
          return !!(t = t._reactInternals) && qt(t) === t;
        },
        enqueueSetState: function (t, e, n) {
          t = t._reactInternals;
          var r = us(),
            i = cs(t),
            a = la(r, i);
          (a.payload = e),
            void 0 !== n && null !== n && (a.callback = n),
            sa(t, a),
            fs(t, i, r);
        },
        enqueueReplaceState: function (t, e, n) {
          t = t._reactInternals;
          var r = us(),
            i = cs(t),
            a = la(r, i);
          (a.tag = 1),
            (a.payload = e),
            void 0 !== n && null !== n && (a.callback = n),
            sa(t, a),
            fs(t, i, r);
        },
        enqueueForceUpdate: function (t, e) {
          t = t._reactInternals;
          var n = us(),
            r = cs(t),
            i = la(n, r);
          (i.tag = 2),
            void 0 !== e && null !== e && (i.callback = e),
            sa(t, i),
            fs(t, r, n);
        },
      };
      function ga(t, e, n, r, i, a, o) {
        return 'function' === typeof (t = t.stateNode).shouldComponentUpdate
          ? t.shouldComponentUpdate(r, a, o)
          : !e.prototype ||
              !e.prototype.isPureReactComponent ||
              !ur(n, r) ||
              !ur(i, a);
      }
      function va(t, e, n) {
        var r = !1,
          i = ui,
          a = e.contextType;
        return (
          'object' === typeof a && null !== a
            ? (a = ra(a))
            : ((i = pi(e) ? di : ci.current),
              (a = (r = null !== (r = e.contextTypes) && void 0 !== r)
                ? hi(t, i)
                : ui)),
          (e = new e(n, a)),
          (t.memoizedState =
            null !== e.state && void 0 !== e.state ? e.state : null),
          (e.updater = pa),
          (t.stateNode = e),
          (e._reactInternals = t),
          r &&
            (((t =
              t.stateNode).__reactInternalMemoizedUnmaskedChildContext = i),
            (t.__reactInternalMemoizedMaskedChildContext = a)),
          e
        );
      }
      function ya(t, e, n, r) {
        (t = e.state),
          'function' === typeof e.componentWillReceiveProps &&
            e.componentWillReceiveProps(n, r),
          'function' === typeof e.UNSAFE_componentWillReceiveProps &&
            e.UNSAFE_componentWillReceiveProps(n, r),
          e.state !== t && pa.enqueueReplaceState(e, e.state, null);
      }
      function ma(t, e, n, r) {
        var i = t.stateNode;
        (i.props = n), (i.state = t.memoizedState), (i.refs = da), aa(t);
        var a = e.contextType;
        'object' === typeof a && null !== a
          ? (i.context = ra(a))
          : ((a = pi(e) ? di : ci.current), (i.context = hi(t, a))),
          ca(t, n, i, r),
          (i.state = t.memoizedState),
          'function' === typeof (a = e.getDerivedStateFromProps) &&
            (ha(t, e, a, n), (i.state = t.memoizedState)),
          'function' === typeof e.getDerivedStateFromProps ||
            'function' === typeof i.getSnapshotBeforeUpdate ||
            ('function' !== typeof i.UNSAFE_componentWillMount &&
              'function' !== typeof i.componentWillMount) ||
            ((e = i.state),
            'function' === typeof i.componentWillMount &&
              i.componentWillMount(),
            'function' === typeof i.UNSAFE_componentWillMount &&
              i.UNSAFE_componentWillMount(),
            e !== i.state && pa.enqueueReplaceState(i, i.state, null),
            ca(t, n, i, r),
            (i.state = t.memoizedState)),
          'function' === typeof i.componentDidMount && (t.flags |= 4);
      }
      var ba = Array.isArray;
      function _a(t, e, n) {
        if (
          null !== (t = n.ref) &&
          'function' !== typeof t &&
          'object' !== typeof t
        ) {
          if (n._owner) {
            if ((n = n._owner)) {
              if (1 !== n.tag) throw Error(o(309));
              var r = n.stateNode;
            }
            if (!r) throw Error(o(147, t));
            var i = '' + t;
            return null !== e &&
              null !== e.ref &&
              'function' === typeof e.ref &&
              e.ref._stringRef === i
              ? e.ref
              : (((e = function (t) {
                  var e = r.refs;
                  e === da && (e = r.refs = {}),
                    null === t ? delete e[i] : (e[i] = t);
                })._stringRef = i),
                e);
          }
          if ('string' !== typeof t) throw Error(o(284));
          if (!n._owner) throw Error(o(290, t));
        }
        return t;
      }
      function wa(t, e) {
        if ('textarea' !== t.type)
          throw Error(
            o(
              31,
              '[object Object]' === Object.prototype.toString.call(e)
                ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                : e
            )
          );
      }
      function Sa(t) {
        function e(e, n) {
          if (t) {
            var r = e.lastEffect;
            null !== r
              ? ((r.nextEffect = n), (e.lastEffect = n))
              : (e.firstEffect = e.lastEffect = n),
              (n.nextEffect = null),
              (n.flags = 8);
          }
        }
        function n(n, r) {
          if (!t) return null;
          for (; null !== r; ) e(n, r), (r = r.sibling);
          return null;
        }
        function r(t, e) {
          for (t = new Map(); null !== e; )
            null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
              (e = e.sibling);
          return t;
        }
        function i(t, e) {
          return ((t = Hs(t, e)).index = 0), (t.sibling = null), t;
        }
        function a(e, n, r) {
          return (
            (e.index = r),
            t
              ? null !== (r = e.alternate)
                ? (r = r.index) < n
                  ? ((e.flags = 2), n)
                  : r
                : ((e.flags = 2), n)
              : n
          );
        }
        function l(e) {
          return t && null === e.alternate && (e.flags = 2), e;
        }
        function s(t, e, n, r) {
          return null === e || 6 !== e.tag
            ? (((e = $s(n, t.mode, r)).return = t), e)
            : (((e = i(e, n)).return = t), e);
        }
        function u(t, e, n, r) {
          return null !== e && e.elementType === n.type
            ? (((r = i(e, n.props)).ref = _a(t, e, n)), (r.return = t), r)
            : (((r = Vs(n.type, n.key, n.props, null, t.mode, r)).ref = _a(
                t,
                e,
                n
              )),
              (r.return = t),
              r);
        }
        function c(t, e, n, r) {
          return null === e ||
            4 !== e.tag ||
            e.stateNode.containerInfo !== n.containerInfo ||
            e.stateNode.implementation !== n.implementation
            ? (((e = Ys(n, t.mode, r)).return = t), e)
            : (((e = i(e, n.children || [])).return = t), e);
        }
        function f(t, e, n, r, a) {
          return null === e || 7 !== e.tag
            ? (((e = Ws(n, t.mode, r, a)).return = t), e)
            : (((e = i(e, n)).return = t), e);
        }
        function d(t, e, n) {
          if ('string' === typeof e || 'number' === typeof e)
            return ((e = $s('' + e, t.mode, n)).return = t), e;
          if ('object' === typeof e && null !== e) {
            switch (e.$$typeof) {
              case S:
                return (
                  ((n = Vs(e.type, e.key, e.props, null, t.mode, n)).ref = _a(
                    t,
                    null,
                    e
                  )),
                  (n.return = t),
                  n
                );
              case x:
                return ((e = Ys(e, t.mode, n)).return = t), e;
            }
            if (ba(e) || B(e))
              return ((e = Ws(e, t.mode, n, null)).return = t), e;
            wa(t, e);
          }
          return null;
        }
        function h(t, e, n, r) {
          var i = null !== e ? e.key : null;
          if ('string' === typeof n || 'number' === typeof n)
            return null !== i ? null : s(t, e, '' + n, r);
          if ('object' === typeof n && null !== n) {
            switch (n.$$typeof) {
              case S:
                return n.key === i
                  ? n.type === k
                    ? f(t, e, n.props.children, r, i)
                    : u(t, e, n, r)
                  : null;
              case x:
                return n.key === i ? c(t, e, n, r) : null;
            }
            if (ba(n) || B(n)) return null !== i ? null : f(t, e, n, r, null);
            wa(t, n);
          }
          return null;
        }
        function p(t, e, n, r, i) {
          if ('string' === typeof r || 'number' === typeof r)
            return s(e, (t = t.get(n) || null), '' + r, i);
          if ('object' === typeof r && null !== r) {
            switch (r.$$typeof) {
              case S:
                return (
                  (t = t.get(null === r.key ? n : r.key) || null),
                  r.type === k
                    ? f(e, t, r.props.children, i, r.key)
                    : u(e, t, r, i)
                );
              case x:
                return c(
                  e,
                  (t = t.get(null === r.key ? n : r.key) || null),
                  r,
                  i
                );
            }
            if (ba(r) || B(r)) return f(e, (t = t.get(n) || null), r, i, null);
            wa(e, r);
          }
          return null;
        }
        function g(i, o, l, s) {
          for (
            var u = null, c = null, f = o, g = (o = 0), v = null;
            null !== f && g < l.length;
            g++
          ) {
            f.index > g ? ((v = f), (f = null)) : (v = f.sibling);
            var y = h(i, f, l[g], s);
            if (null === y) {
              null === f && (f = v);
              break;
            }
            t && f && null === y.alternate && e(i, f),
              (o = a(y, o, g)),
              null === c ? (u = y) : (c.sibling = y),
              (c = y),
              (f = v);
          }
          if (g === l.length) return n(i, f), u;
          if (null === f) {
            for (; g < l.length; g++)
              null !== (f = d(i, l[g], s)) &&
                ((o = a(f, o, g)),
                null === c ? (u = f) : (c.sibling = f),
                (c = f));
            return u;
          }
          for (f = r(i, f); g < l.length; g++)
            null !== (v = p(f, i, g, l[g], s)) &&
              (t &&
                null !== v.alternate &&
                f.delete(null === v.key ? g : v.key),
              (o = a(v, o, g)),
              null === c ? (u = v) : (c.sibling = v),
              (c = v));
          return (
            t &&
              f.forEach(function (t) {
                return e(i, t);
              }),
            u
          );
        }
        function v(i, l, s, u) {
          var c = B(s);
          if ('function' !== typeof c) throw Error(o(150));
          if (null == (s = c.call(s))) throw Error(o(151));
          for (
            var f = (c = null), g = l, v = (l = 0), y = null, m = s.next();
            null !== g && !m.done;
            v++, m = s.next()
          ) {
            g.index > v ? ((y = g), (g = null)) : (y = g.sibling);
            var b = h(i, g, m.value, u);
            if (null === b) {
              null === g && (g = y);
              break;
            }
            t && g && null === b.alternate && e(i, g),
              (l = a(b, l, v)),
              null === f ? (c = b) : (f.sibling = b),
              (f = b),
              (g = y);
          }
          if (m.done) return n(i, g), c;
          if (null === g) {
            for (; !m.done; v++, m = s.next())
              null !== (m = d(i, m.value, u)) &&
                ((l = a(m, l, v)),
                null === f ? (c = m) : (f.sibling = m),
                (f = m));
            return c;
          }
          for (g = r(i, g); !m.done; v++, m = s.next())
            null !== (m = p(g, i, v, m.value, u)) &&
              (t &&
                null !== m.alternate &&
                g.delete(null === m.key ? v : m.key),
              (l = a(m, l, v)),
              null === f ? (c = m) : (f.sibling = m),
              (f = m));
          return (
            t &&
              g.forEach(function (t) {
                return e(i, t);
              }),
            c
          );
        }
        return function (t, r, a, s) {
          var u =
            'object' === typeof a &&
            null !== a &&
            a.type === k &&
            null === a.key;
          u && (a = a.props.children);
          var c = 'object' === typeof a && null !== a;
          if (c)
            switch (a.$$typeof) {
              case S:
                t: {
                  for (c = a.key, u = r; null !== u; ) {
                    if (u.key === c) {
                      switch (u.tag) {
                        case 7:
                          if (a.type === k) {
                            n(t, u.sibling),
                              ((r = i(u, a.props.children)).return = t),
                              (t = r);
                            break t;
                          }
                          break;
                        default:
                          if (u.elementType === a.type) {
                            n(t, u.sibling),
                              ((r = i(u, a.props)).ref = _a(t, u, a)),
                              (r.return = t),
                              (t = r);
                            break t;
                          }
                      }
                      n(t, u);
                      break;
                    }
                    e(t, u), (u = u.sibling);
                  }
                  a.type === k
                    ? (((r = Ws(
                        a.props.children,
                        t.mode,
                        s,
                        a.key
                      )).return = t),
                      (t = r))
                    : (((s = Vs(
                        a.type,
                        a.key,
                        a.props,
                        null,
                        t.mode,
                        s
                      )).ref = _a(t, r, a)),
                      (s.return = t),
                      (t = s));
                }
                return l(t);
              case x:
                t: {
                  for (u = a.key; null !== r; ) {
                    if (r.key === u) {
                      if (
                        4 === r.tag &&
                        r.stateNode.containerInfo === a.containerInfo &&
                        r.stateNode.implementation === a.implementation
                      ) {
                        n(t, r.sibling),
                          ((r = i(r, a.children || [])).return = t),
                          (t = r);
                        break t;
                      }
                      n(t, r);
                      break;
                    }
                    e(t, r), (r = r.sibling);
                  }
                  ((r = Ys(a, t.mode, s)).return = t), (t = r);
                }
                return l(t);
            }
          if ('string' === typeof a || 'number' === typeof a)
            return (
              (a = '' + a),
              null !== r && 6 === r.tag
                ? (n(t, r.sibling), ((r = i(r, a)).return = t), (t = r))
                : (n(t, r), ((r = $s(a, t.mode, s)).return = t), (t = r)),
              l(t)
            );
          if (ba(a)) return g(t, r, a, s);
          if (B(a)) return v(t, r, a, s);
          if ((c && wa(t, a), 'undefined' === typeof a && !u))
            switch (t.tag) {
              case 1:
              case 22:
              case 0:
              case 11:
              case 15:
                throw Error(o(152, $(t.type) || 'Component'));
            }
          return n(t, r);
        };
      }
      var xa = Sa(!0),
        ka = Sa(!1),
        Ca = {},
        Pa = oi(Ca),
        Ea = oi(Ca),
        Ta = oi(Ca);
      function Oa(t) {
        if (t === Ca) throw Error(o(174));
        return t;
      }
      function Na(t, e) {
        switch ((si(Ta, e), si(Ea, t), si(Pa, Ca), (t = e.nodeType))) {
          case 9:
          case 11:
            e = (e = e.documentElement) ? e.namespaceURI : pt(null, '');
            break;
          default:
            e = pt(
              (e = (t = 8 === t ? e.parentNode : e).namespaceURI || null),
              (t = t.tagName)
            );
        }
        li(Pa), si(Pa, e);
      }
      function Ma() {
        li(Pa), li(Ea), li(Ta);
      }
      function Aa(t) {
        Oa(Ta.current);
        var e = Oa(Pa.current),
          n = pt(e, t.type);
        e !== n && (si(Ea, t), si(Pa, n));
      }
      function Fa(t) {
        Ea.current === t && (li(Pa), li(Ea));
      }
      var La = oi(0);
      function Ra(t) {
        for (var e = t; null !== e; ) {
          if (13 === e.tag) {
            var n = e.memoizedState;
            if (
              null !== n &&
              (null === (n = n.dehydrated) ||
                '$?' === n.data ||
                '$!' === n.data)
            )
              return e;
          } else if (19 === e.tag && void 0 !== e.memoizedProps.revealOrder) {
            if (0 !== (64 & e.flags)) return e;
          } else if (null !== e.child) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break;
          for (; null === e.sibling; ) {
            if (null === e.return || e.return === t) return null;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
        return null;
      }
      var Ia = null,
        Da = null,
        za = !1;
      function Ua(t, e) {
        var n = Gs(5, null, null, 0);
        (n.elementType = 'DELETED'),
          (n.type = 'DELETED'),
          (n.stateNode = e),
          (n.return = t),
          (n.flags = 8),
          null !== t.lastEffect
            ? ((t.lastEffect.nextEffect = n), (t.lastEffect = n))
            : (t.firstEffect = t.lastEffect = n);
      }
      function ja(t, e) {
        switch (t.tag) {
          case 5:
            var n = t.type;
            return (
              null !==
                (e =
                  1 !== e.nodeType ||
                  n.toLowerCase() !== e.nodeName.toLowerCase()
                    ? null
                    : e) && ((t.stateNode = e), !0)
            );
          case 6:
            return (
              null !==
                (e = '' === t.pendingProps || 3 !== e.nodeType ? null : e) &&
              ((t.stateNode = e), !0)
            );
          case 13:
          default:
            return !1;
        }
      }
      function Ga(t) {
        if (za) {
          var e = Da;
          if (e) {
            var n = e;
            if (!ja(t, e)) {
              if (!(e = Wr(n.nextSibling)) || !ja(t, e))
                return (
                  (t.flags = (-1025 & t.flags) | 2), (za = !1), void (Ia = t)
                );
              Ua(Ia, n);
            }
            (Ia = t), (Da = Wr(e.firstChild));
          } else (t.flags = (-1025 & t.flags) | 2), (za = !1), (Ia = t);
        }
      }
      function Ba(t) {
        for (
          t = t.return;
          null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag;

        )
          t = t.return;
        Ia = t;
      }
      function Ha(t) {
        if (t !== Ia) return !1;
        if (!za) return Ba(t), (za = !0), !1;
        var e = t.type;
        if (
          5 !== t.tag ||
          ('head' !== e && 'body' !== e && !Gr(e, t.memoizedProps))
        )
          for (e = Da; e; ) Ua(t, e), (e = Wr(e.nextSibling));
        if ((Ba(t), 13 === t.tag)) {
          if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null))
            throw Error(o(317));
          t: {
            for (t = t.nextSibling, e = 0; t; ) {
              if (8 === t.nodeType) {
                var n = t.data;
                if ('/$' === n) {
                  if (0 === e) {
                    Da = Wr(t.nextSibling);
                    break t;
                  }
                  e--;
                } else ('$' !== n && '$!' !== n && '$?' !== n) || e++;
              }
              t = t.nextSibling;
            }
            Da = null;
          }
        } else Da = Ia ? Wr(t.stateNode.nextSibling) : null;
        return !0;
      }
      function Va() {
        (Da = Ia = null), (za = !1);
      }
      var Wa = [];
      function Ka() {
        for (var t = 0; t < Wa.length; t++)
          Wa[t]._workInProgressVersionPrimary = null;
        Wa.length = 0;
      }
      var $a = w.ReactCurrentDispatcher,
        Ya = w.ReactCurrentBatchConfig,
        Qa = 0,
        qa = null,
        Xa = null,
        Ja = null,
        Za = !1,
        to = !1;
      function eo() {
        throw Error(o(321));
      }
      function no(t, e) {
        if (null === e) return !1;
        for (var n = 0; n < e.length && n < t.length; n++)
          if (!lr(t[n], e[n])) return !1;
        return !0;
      }
      function ro(t, e, n, r, i, a) {
        if (
          ((Qa = a),
          (qa = e),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.lanes = 0),
          ($a.current = null === t || null === t.memoizedState ? No : Mo),
          (t = n(r, i)),
          to)
        ) {
          a = 0;
          do {
            if (((to = !1), !(25 > a))) throw Error(o(301));
            (a += 1),
              (Ja = Xa = null),
              (e.updateQueue = null),
              ($a.current = Ao),
              (t = n(r, i));
          } while (to);
        }
        if (
          (($a.current = Oo),
          (e = null !== Xa && null !== Xa.next),
          (Qa = 0),
          (Ja = Xa = qa = null),
          (Za = !1),
          e)
        )
          throw Error(o(300));
        return t;
      }
      function io() {
        var t = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null,
        };
        return (
          null === Ja ? (qa.memoizedState = Ja = t) : (Ja = Ja.next = t), Ja
        );
      }
      function ao() {
        if (null === Xa) {
          var t = qa.alternate;
          t = null !== t ? t.memoizedState : null;
        } else t = Xa.next;
        var e = null === Ja ? qa.memoizedState : Ja.next;
        if (null !== e) (Ja = e), (Xa = t);
        else {
          if (null === t) throw Error(o(310));
          (t = {
            memoizedState: (Xa = t).memoizedState,
            baseState: Xa.baseState,
            baseQueue: Xa.baseQueue,
            queue: Xa.queue,
            next: null,
          }),
            null === Ja ? (qa.memoizedState = Ja = t) : (Ja = Ja.next = t);
        }
        return Ja;
      }
      function oo(t, e) {
        return 'function' === typeof e ? e(t) : e;
      }
      function lo(t) {
        var e = ao(),
          n = e.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = t;
        var r = Xa,
          i = r.baseQueue,
          a = n.pending;
        if (null !== a) {
          if (null !== i) {
            var l = i.next;
            (i.next = a.next), (a.next = l);
          }
          (r.baseQueue = i = a), (n.pending = null);
        }
        if (null !== i) {
          (i = i.next), (r = r.baseState);
          var s = (l = a = null),
            u = i;
          do {
            var c = u.lane;
            if ((Qa & c) === c)
              null !== s &&
                (s = s.next = {
                  lane: 0,
                  action: u.action,
                  eagerReducer: u.eagerReducer,
                  eagerState: u.eagerState,
                  next: null,
                }),
                (r = u.eagerReducer === t ? u.eagerState : t(r, u.action));
            else {
              var f = {
                lane: c,
                action: u.action,
                eagerReducer: u.eagerReducer,
                eagerState: u.eagerState,
                next: null,
              };
              null === s ? ((l = s = f), (a = r)) : (s = s.next = f),
                (qa.lanes |= c),
                (zl |= c);
            }
            u = u.next;
          } while (null !== u && u !== i);
          null === s ? (a = r) : (s.next = l),
            lr(r, e.memoizedState) || (Lo = !0),
            (e.memoizedState = r),
            (e.baseState = a),
            (e.baseQueue = s),
            (n.lastRenderedState = r);
        }
        return [e.memoizedState, n.dispatch];
      }
      function so(t) {
        var e = ao(),
          n = e.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = t;
        var r = n.dispatch,
          i = n.pending,
          a = e.memoizedState;
        if (null !== i) {
          n.pending = null;
          var l = (i = i.next);
          do {
            (a = t(a, l.action)), (l = l.next);
          } while (l !== i);
          lr(a, e.memoizedState) || (Lo = !0),
            (e.memoizedState = a),
            null === e.baseQueue && (e.baseState = a),
            (n.lastRenderedState = a);
        }
        return [a, r];
      }
      function uo(t, e, n) {
        var r = e._getVersion;
        r = r(e._source);
        var i = e._workInProgressVersionPrimary;
        if (
          (null !== i
            ? (t = i === r)
            : ((t = t.mutableReadLanes),
              (t = (Qa & t) === t) &&
                ((e._workInProgressVersionPrimary = r), Wa.push(e))),
          t)
        )
          return n(e._source);
        throw (Wa.push(e), Error(o(350)));
      }
      function co(t, e, n, r) {
        var i = Nl;
        if (null === i) throw Error(o(349));
        var a = e._getVersion,
          l = a(e._source),
          s = $a.current,
          u = s.useState(function () {
            return uo(i, e, n);
          }),
          c = u[1],
          f = u[0];
        u = Ja;
        var d = t.memoizedState,
          h = d.refs,
          p = h.getSnapshot,
          g = d.source;
        d = d.subscribe;
        var v = qa;
        return (
          (t.memoizedState = { refs: h, source: e, subscribe: r }),
          s.useEffect(
            function () {
              (h.getSnapshot = n), (h.setSnapshot = c);
              var t = a(e._source);
              if (!lr(l, t)) {
                (t = n(e._source)),
                  lr(f, t) ||
                    (c(t),
                    (t = cs(v)),
                    (i.mutableReadLanes |= t & i.pendingLanes)),
                  (t = i.mutableReadLanes),
                  (i.entangledLanes |= t);
                for (var r = i.entanglements, o = t; 0 < o; ) {
                  var s = 31 - Ve(o),
                    u = 1 << s;
                  (r[s] |= t), (o &= ~u);
                }
              }
            },
            [n, e, r]
          ),
          s.useEffect(
            function () {
              return r(e._source, function () {
                var t = h.getSnapshot,
                  n = h.setSnapshot;
                try {
                  n(t(e._source));
                  var r = cs(v);
                  i.mutableReadLanes |= r & i.pendingLanes;
                } catch (a) {
                  n(function () {
                    throw a;
                  });
                }
              });
            },
            [e, r]
          ),
          (lr(p, n) && lr(g, e) && lr(d, r)) ||
            (((t = {
              pending: null,
              dispatch: null,
              lastRenderedReducer: oo,
              lastRenderedState: f,
            }).dispatch = c = To.bind(null, qa, t)),
            (u.queue = t),
            (u.baseQueue = null),
            (f = uo(i, e, n)),
            (u.memoizedState = u.baseState = f)),
          f
        );
      }
      function fo(t, e, n) {
        return co(ao(), t, e, n);
      }
      function ho(t) {
        var e = io();
        return (
          'function' === typeof t && (t = t()),
          (e.memoizedState = e.baseState = t),
          (t = (t = e.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: oo,
            lastRenderedState: t,
          }).dispatch = To.bind(null, qa, t)),
          [e.memoizedState, t]
        );
      }
      function po(t, e, n, r) {
        return (
          (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
          null === (e = qa.updateQueue)
            ? ((e = { lastEffect: null }),
              (qa.updateQueue = e),
              (e.lastEffect = t.next = t))
            : null === (n = e.lastEffect)
            ? (e.lastEffect = t.next = t)
            : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t)),
          t
        );
      }
      function go(t) {
        return (t = { current: t }), (io().memoizedState = t);
      }
      function vo() {
        return ao().memoizedState;
      }
      function yo(t, e, n, r) {
        var i = io();
        (qa.flags |= t),
          (i.memoizedState = po(1 | e, n, void 0, void 0 === r ? null : r));
      }
      function mo(t, e, n, r) {
        var i = ao();
        r = void 0 === r ? null : r;
        var a = void 0;
        if (null !== Xa) {
          var o = Xa.memoizedState;
          if (((a = o.destroy), null !== r && no(r, o.deps)))
            return void po(e, n, a, r);
        }
        (qa.flags |= t), (i.memoizedState = po(1 | e, n, a, r));
      }
      function bo(t, e) {
        return yo(516, 4, t, e);
      }
      function _o(t, e) {
        return mo(516, 4, t, e);
      }
      function wo(t, e) {
        return mo(4, 2, t, e);
      }
      function So(t, e) {
        return 'function' === typeof e
          ? ((t = t()),
            e(t),
            function () {
              e(null);
            })
          : null !== e && void 0 !== e
          ? ((t = t()),
            (e.current = t),
            function () {
              e.current = null;
            })
          : void 0;
      }
      function xo(t, e, n) {
        return (
          (n = null !== n && void 0 !== n ? n.concat([t]) : null),
          mo(4, 2, So.bind(null, e, t), n)
        );
      }
      function ko() {}
      function Co(t, e) {
        var n = ao();
        e = void 0 === e ? null : e;
        var r = n.memoizedState;
        return null !== r && null !== e && no(e, r[1])
          ? r[0]
          : ((n.memoizedState = [t, e]), t);
      }
      function Po(t, e) {
        var n = ao();
        e = void 0 === e ? null : e;
        var r = n.memoizedState;
        return null !== r && null !== e && no(e, r[1])
          ? r[0]
          : ((t = t()), (n.memoizedState = [t, e]), t);
      }
      function Eo(t, e) {
        var n = Gi();
        Hi(98 > n ? 98 : n, function () {
          t(!0);
        }),
          Hi(97 < n ? 97 : n, function () {
            var n = Ya.transition;
            Ya.transition = 1;
            try {
              t(!1), e();
            } finally {
              Ya.transition = n;
            }
          });
      }
      function To(t, e, n) {
        var r = us(),
          i = cs(t),
          a = {
            lane: i,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null,
          },
          o = e.pending;
        if (
          (null === o ? (a.next = a) : ((a.next = o.next), (o.next = a)),
          (e.pending = a),
          (o = t.alternate),
          t === qa || (null !== o && o === qa))
        )
          to = Za = !0;
        else {
          if (
            0 === t.lanes &&
            (null === o || 0 === o.lanes) &&
            null !== (o = e.lastRenderedReducer)
          )
            try {
              var l = e.lastRenderedState,
                s = o(l, n);
              if (((a.eagerReducer = o), (a.eagerState = s), lr(s, l))) return;
            } catch (u) {}
          fs(t, i, r);
        }
      }
      var Oo = {
          readContext: ra,
          useCallback: eo,
          useContext: eo,
          useEffect: eo,
          useImperativeHandle: eo,
          useLayoutEffect: eo,
          useMemo: eo,
          useReducer: eo,
          useRef: eo,
          useState: eo,
          useDebugValue: eo,
          useDeferredValue: eo,
          useTransition: eo,
          useMutableSource: eo,
          useOpaqueIdentifier: eo,
          unstable_isNewReconciler: !1,
        },
        No = {
          readContext: ra,
          useCallback: function (t, e) {
            return (io().memoizedState = [t, void 0 === e ? null : e]), t;
          },
          useContext: ra,
          useEffect: bo,
          useImperativeHandle: function (t, e, n) {
            return (
              (n = null !== n && void 0 !== n ? n.concat([t]) : null),
              yo(4, 2, So.bind(null, e, t), n)
            );
          },
          useLayoutEffect: function (t, e) {
            return yo(4, 2, t, e);
          },
          useMemo: function (t, e) {
            var n = io();
            return (
              (e = void 0 === e ? null : e),
              (t = t()),
              (n.memoizedState = [t, e]),
              t
            );
          },
          useReducer: function (t, e, n) {
            var r = io();
            return (
              (e = void 0 !== n ? n(e) : e),
              (r.memoizedState = r.baseState = e),
              (t = (t = r.queue = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: e,
              }).dispatch = To.bind(null, qa, t)),
              [r.memoizedState, t]
            );
          },
          useRef: go,
          useState: ho,
          useDebugValue: ko,
          useDeferredValue: function (t) {
            var e = ho(t),
              n = e[0],
              r = e[1];
            return (
              bo(
                function () {
                  var e = Ya.transition;
                  Ya.transition = 1;
                  try {
                    r(t);
                  } finally {
                    Ya.transition = e;
                  }
                },
                [t]
              ),
              n
            );
          },
          useTransition: function () {
            var t = ho(!1),
              e = t[0];
            return go((t = Eo.bind(null, t[1]))), [t, e];
          },
          useMutableSource: function (t, e, n) {
            var r = io();
            return (
              (r.memoizedState = {
                refs: { getSnapshot: e, setSnapshot: null },
                source: t,
                subscribe: n,
              }),
              co(r, t, e, n)
            );
          },
          useOpaqueIdentifier: function () {
            if (za) {
              var t = !1,
                e = (function (t) {
                  return { $$typeof: R, toString: t, valueOf: t };
                })(function () {
                  throw (
                    (t || ((t = !0), n('r:' + ($r++).toString(36))),
                    Error(o(355)))
                  );
                }),
                n = ho(e)[1];
              return (
                0 === (2 & qa.mode) &&
                  ((qa.flags |= 516),
                  po(
                    5,
                    function () {
                      n('r:' + ($r++).toString(36));
                    },
                    void 0,
                    null
                  )),
                e
              );
            }
            return ho((e = 'r:' + ($r++).toString(36))), e;
          },
          unstable_isNewReconciler: !1,
        },
        Mo = {
          readContext: ra,
          useCallback: Co,
          useContext: ra,
          useEffect: _o,
          useImperativeHandle: xo,
          useLayoutEffect: wo,
          useMemo: Po,
          useReducer: lo,
          useRef: vo,
          useState: function () {
            return lo(oo);
          },
          useDebugValue: ko,
          useDeferredValue: function (t) {
            var e = lo(oo),
              n = e[0],
              r = e[1];
            return (
              _o(
                function () {
                  var e = Ya.transition;
                  Ya.transition = 1;
                  try {
                    r(t);
                  } finally {
                    Ya.transition = e;
                  }
                },
                [t]
              ),
              n
            );
          },
          useTransition: function () {
            var t = lo(oo)[0];
            return [vo().current, t];
          },
          useMutableSource: fo,
          useOpaqueIdentifier: function () {
            return lo(oo)[0];
          },
          unstable_isNewReconciler: !1,
        },
        Ao = {
          readContext: ra,
          useCallback: Co,
          useContext: ra,
          useEffect: _o,
          useImperativeHandle: xo,
          useLayoutEffect: wo,
          useMemo: Po,
          useReducer: so,
          useRef: vo,
          useState: function () {
            return so(oo);
          },
          useDebugValue: ko,
          useDeferredValue: function (t) {
            var e = so(oo),
              n = e[0],
              r = e[1];
            return (
              _o(
                function () {
                  var e = Ya.transition;
                  Ya.transition = 1;
                  try {
                    r(t);
                  } finally {
                    Ya.transition = e;
                  }
                },
                [t]
              ),
              n
            );
          },
          useTransition: function () {
            var t = so(oo)[0];
            return [vo().current, t];
          },
          useMutableSource: fo,
          useOpaqueIdentifier: function () {
            return so(oo)[0];
          },
          unstable_isNewReconciler: !1,
        },
        Fo = w.ReactCurrentOwner,
        Lo = !1;
      function Ro(t, e, n, r) {
        e.child = null === t ? ka(e, null, n, r) : xa(e, t.child, n, r);
      }
      function Io(t, e, n, r, i) {
        n = n.render;
        var a = e.ref;
        return (
          na(e, i),
          (r = ro(t, e, n, r, a, i)),
          null === t || Lo
            ? ((e.flags |= 1), Ro(t, e, r, i), e.child)
            : ((e.updateQueue = t.updateQueue),
              (e.flags &= -517),
              (t.lanes &= ~i),
              nl(t, e, i))
        );
      }
      function Do(t, e, n, r, i, a) {
        if (null === t) {
          var o = n.type;
          return 'function' !== typeof o ||
            Bs(o) ||
            void 0 !== o.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((t = Vs(n.type, null, r, e, e.mode, a)).ref = e.ref),
              (t.return = e),
              (e.child = t))
            : ((e.tag = 15), (e.type = o), zo(t, e, o, r, i, a));
        }
        return (
          (o = t.child),
          0 === (i & a) &&
          ((i = o.memoizedProps),
          (n = null !== (n = n.compare) ? n : ur)(i, r) && t.ref === e.ref)
            ? nl(t, e, a)
            : ((e.flags |= 1),
              ((t = Hs(o, r)).ref = e.ref),
              (t.return = e),
              (e.child = t))
        );
      }
      function zo(t, e, n, r, i, a) {
        if (null !== t && ur(t.memoizedProps, r) && t.ref === e.ref) {
          if (((Lo = !1), 0 === (a & i)))
            return (e.lanes = t.lanes), nl(t, e, a);
          0 !== (16384 & t.flags) && (Lo = !0);
        }
        return Go(t, e, n, r, a);
      }
      function Uo(t, e, n) {
        var r = e.pendingProps,
          i = r.children,
          a = null !== t ? t.memoizedState : null;
        if ('hidden' === r.mode || 'unstable-defer-without-hiding' === r.mode)
          if (0 === (4 & e.mode))
            (e.memoizedState = { baseLanes: 0 }), bs(e, n);
          else {
            if (0 === (1073741824 & n))
              return (
                (t = null !== a ? a.baseLanes | n : n),
                (e.lanes = e.childLanes = 1073741824),
                (e.memoizedState = { baseLanes: t }),
                bs(e, t),
                null
              );
            (e.memoizedState = { baseLanes: 0 }),
              bs(e, null !== a ? a.baseLanes : n);
          }
        else
          null !== a
            ? ((r = a.baseLanes | n), (e.memoizedState = null))
            : (r = n),
            bs(e, r);
        return Ro(t, e, i, n), e.child;
      }
      function jo(t, e) {
        var n = e.ref;
        ((null === t && null !== n) || (null !== t && t.ref !== n)) &&
          (e.flags |= 128);
      }
      function Go(t, e, n, r, i) {
        var a = pi(n) ? di : ci.current;
        return (
          (a = hi(e, a)),
          na(e, i),
          (n = ro(t, e, n, r, a, i)),
          null === t || Lo
            ? ((e.flags |= 1), Ro(t, e, n, i), e.child)
            : ((e.updateQueue = t.updateQueue),
              (e.flags &= -517),
              (t.lanes &= ~i),
              nl(t, e, i))
        );
      }
      function Bo(t, e, n, r, i) {
        if (pi(n)) {
          var a = !0;
          mi(e);
        } else a = !1;
        if ((na(e, i), null === e.stateNode))
          null !== t &&
            ((t.alternate = null), (e.alternate = null), (e.flags |= 2)),
            va(e, n, r),
            ma(e, n, r, i),
            (r = !0);
        else if (null === t) {
          var o = e.stateNode,
            l = e.memoizedProps;
          o.props = l;
          var s = o.context,
            u = n.contextType;
          'object' === typeof u && null !== u
            ? (u = ra(u))
            : (u = hi(e, (u = pi(n) ? di : ci.current)));
          var c = n.getDerivedStateFromProps,
            f =
              'function' === typeof c ||
              'function' === typeof o.getSnapshotBeforeUpdate;
          f ||
            ('function' !== typeof o.UNSAFE_componentWillReceiveProps &&
              'function' !== typeof o.componentWillReceiveProps) ||
            ((l !== r || s !== u) && ya(e, o, r, u)),
            (ia = !1);
          var d = e.memoizedState;
          (o.state = d),
            ca(e, r, o, i),
            (s = e.memoizedState),
            l !== r || d !== s || fi.current || ia
              ? ('function' === typeof c &&
                  (ha(e, n, c, r), (s = e.memoizedState)),
                (l = ia || ga(e, n, l, r, d, s, u))
                  ? (f ||
                      ('function' !== typeof o.UNSAFE_componentWillMount &&
                        'function' !== typeof o.componentWillMount) ||
                      ('function' === typeof o.componentWillMount &&
                        o.componentWillMount(),
                      'function' === typeof o.UNSAFE_componentWillMount &&
                        o.UNSAFE_componentWillMount()),
                    'function' === typeof o.componentDidMount && (e.flags |= 4))
                  : ('function' === typeof o.componentDidMount &&
                      (e.flags |= 4),
                    (e.memoizedProps = r),
                    (e.memoizedState = s)),
                (o.props = r),
                (o.state = s),
                (o.context = u),
                (r = l))
              : ('function' === typeof o.componentDidMount && (e.flags |= 4),
                (r = !1));
        } else {
          (o = e.stateNode),
            oa(t, e),
            (l = e.memoizedProps),
            (u = e.type === e.elementType ? l : Yi(e.type, l)),
            (o.props = u),
            (f = e.pendingProps),
            (d = o.context),
            'object' === typeof (s = n.contextType) && null !== s
              ? (s = ra(s))
              : (s = hi(e, (s = pi(n) ? di : ci.current)));
          var h = n.getDerivedStateFromProps;
          (c =
            'function' === typeof h ||
            'function' === typeof o.getSnapshotBeforeUpdate) ||
            ('function' !== typeof o.UNSAFE_componentWillReceiveProps &&
              'function' !== typeof o.componentWillReceiveProps) ||
            ((l !== f || d !== s) && ya(e, o, r, s)),
            (ia = !1),
            (d = e.memoizedState),
            (o.state = d),
            ca(e, r, o, i);
          var p = e.memoizedState;
          l !== f || d !== p || fi.current || ia
            ? ('function' === typeof h &&
                (ha(e, n, h, r), (p = e.memoizedState)),
              (u = ia || ga(e, n, u, r, d, p, s))
                ? (c ||
                    ('function' !== typeof o.UNSAFE_componentWillUpdate &&
                      'function' !== typeof o.componentWillUpdate) ||
                    ('function' === typeof o.componentWillUpdate &&
                      o.componentWillUpdate(r, p, s),
                    'function' === typeof o.UNSAFE_componentWillUpdate &&
                      o.UNSAFE_componentWillUpdate(r, p, s)),
                  'function' === typeof o.componentDidUpdate && (e.flags |= 4),
                  'function' === typeof o.getSnapshotBeforeUpdate &&
                    (e.flags |= 256))
                : ('function' !== typeof o.componentDidUpdate ||
                    (l === t.memoizedProps && d === t.memoizedState) ||
                    (e.flags |= 4),
                  'function' !== typeof o.getSnapshotBeforeUpdate ||
                    (l === t.memoizedProps && d === t.memoizedState) ||
                    (e.flags |= 256),
                  (e.memoizedProps = r),
                  (e.memoizedState = p)),
              (o.props = r),
              (o.state = p),
              (o.context = s),
              (r = u))
            : ('function' !== typeof o.componentDidUpdate ||
                (l === t.memoizedProps && d === t.memoizedState) ||
                (e.flags |= 4),
              'function' !== typeof o.getSnapshotBeforeUpdate ||
                (l === t.memoizedProps && d === t.memoizedState) ||
                (e.flags |= 256),
              (r = !1));
        }
        return Ho(t, e, n, r, a, i);
      }
      function Ho(t, e, n, r, i, a) {
        jo(t, e);
        var o = 0 !== (64 & e.flags);
        if (!r && !o) return i && bi(e, n, !1), nl(t, e, a);
        (r = e.stateNode), (Fo.current = e);
        var l =
          o && 'function' !== typeof n.getDerivedStateFromError
            ? null
            : r.render();
        return (
          (e.flags |= 1),
          null !== t && o
            ? ((e.child = xa(e, t.child, null, a)),
              (e.child = xa(e, null, l, a)))
            : Ro(t, e, l, a),
          (e.memoizedState = r.state),
          i && bi(e, n, !0),
          e.child
        );
      }
      function Vo(t) {
        var e = t.stateNode;
        e.pendingContext
          ? vi(0, e.pendingContext, e.pendingContext !== e.context)
          : e.context && vi(0, e.context, !1),
          Na(t, e.containerInfo);
      }
      var Wo,
        Ko,
        $o,
        Yo = { dehydrated: null, retryLane: 0 };
      function Qo(t, e, n) {
        var r,
          i = e.pendingProps,
          a = La.current,
          o = !1;
        return (
          (r = 0 !== (64 & e.flags)) ||
            (r = (null === t || null !== t.memoizedState) && 0 !== (2 & a)),
          r
            ? ((o = !0), (e.flags &= -65))
            : (null !== t && null === t.memoizedState) ||
              void 0 === i.fallback ||
              !0 === i.unstable_avoidThisFallback ||
              (a |= 1),
          si(La, 1 & a),
          null === t
            ? (void 0 !== i.fallback && Ga(e),
              (t = i.children),
              (a = i.fallback),
              o
                ? ((t = qo(e, t, a, n)),
                  (e.child.memoizedState = { baseLanes: n }),
                  (e.memoizedState = Yo),
                  t)
                : 'number' === typeof i.unstable_expectedLoadTime
                ? ((t = qo(e, t, a, n)),
                  (e.child.memoizedState = { baseLanes: n }),
                  (e.memoizedState = Yo),
                  (e.lanes = 33554432),
                  t)
                : (((n = Ks(
                    { mode: 'visible', children: t },
                    e.mode,
                    n,
                    null
                  )).return = e),
                  (e.child = n)))
            : (t.memoizedState,
              o
                ? ((i = Jo(t, e, i.children, i.fallback, n)),
                  (o = e.child),
                  (a = t.child.memoizedState),
                  (o.memoizedState =
                    null === a
                      ? { baseLanes: n }
                      : { baseLanes: a.baseLanes | n }),
                  (o.childLanes = t.childLanes & ~n),
                  (e.memoizedState = Yo),
                  i)
                : ((n = Xo(t, e, i.children, n)), (e.memoizedState = null), n))
        );
      }
      function qo(t, e, n, r) {
        var i = t.mode,
          a = t.child;
        return (
          (e = { mode: 'hidden', children: e }),
          0 === (2 & i) && null !== a
            ? ((a.childLanes = 0), (a.pendingProps = e))
            : (a = Ks(e, i, 0, null)),
          (n = Ws(n, i, r, null)),
          (a.return = t),
          (n.return = t),
          (a.sibling = n),
          (t.child = a),
          n
        );
      }
      function Xo(t, e, n, r) {
        var i = t.child;
        return (
          (t = i.sibling),
          (n = Hs(i, { mode: 'visible', children: n })),
          0 === (2 & e.mode) && (n.lanes = r),
          (n.return = e),
          (n.sibling = null),
          null !== t &&
            ((t.nextEffect = null),
            (t.flags = 8),
            (e.firstEffect = e.lastEffect = t)),
          (e.child = n)
        );
      }
      function Jo(t, e, n, r, i) {
        var a = e.mode,
          o = t.child;
        t = o.sibling;
        var l = { mode: 'hidden', children: n };
        return (
          0 === (2 & a) && e.child !== o
            ? (((n = e.child).childLanes = 0),
              (n.pendingProps = l),
              null !== (o = n.lastEffect)
                ? ((e.firstEffect = n.firstEffect),
                  (e.lastEffect = o),
                  (o.nextEffect = null))
                : (e.firstEffect = e.lastEffect = null))
            : (n = Hs(o, l)),
          null !== t ? (r = Hs(t, r)) : ((r = Ws(r, a, i, null)).flags |= 2),
          (r.return = e),
          (n.return = e),
          (n.sibling = r),
          (e.child = n),
          r
        );
      }
      function Zo(t, e) {
        t.lanes |= e;
        var n = t.alternate;
        null !== n && (n.lanes |= e), ea(t.return, e);
      }
      function tl(t, e, n, r, i, a) {
        var o = t.memoizedState;
        null === o
          ? (t.memoizedState = {
              isBackwards: e,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: i,
              lastEffect: a,
            })
          : ((o.isBackwards = e),
            (o.rendering = null),
            (o.renderingStartTime = 0),
            (o.last = r),
            (o.tail = n),
            (o.tailMode = i),
            (o.lastEffect = a));
      }
      function el(t, e, n) {
        var r = e.pendingProps,
          i = r.revealOrder,
          a = r.tail;
        if ((Ro(t, e, r.children, n), 0 !== (2 & (r = La.current))))
          (r = (1 & r) | 2), (e.flags |= 64);
        else {
          if (null !== t && 0 !== (64 & t.flags))
            t: for (t = e.child; null !== t; ) {
              if (13 === t.tag) null !== t.memoizedState && Zo(t, n);
              else if (19 === t.tag) Zo(t, n);
              else if (null !== t.child) {
                (t.child.return = t), (t = t.child);
                continue;
              }
              if (t === e) break t;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) break t;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          r &= 1;
        }
        if ((si(La, r), 0 === (2 & e.mode))) e.memoizedState = null;
        else
          switch (i) {
            case 'forwards':
              for (n = e.child, i = null; null !== n; )
                null !== (t = n.alternate) && null === Ra(t) && (i = n),
                  (n = n.sibling);
              null === (n = i)
                ? ((i = e.child), (e.child = null))
                : ((i = n.sibling), (n.sibling = null)),
                tl(e, !1, i, n, a, e.lastEffect);
              break;
            case 'backwards':
              for (n = null, i = e.child, e.child = null; null !== i; ) {
                if (null !== (t = i.alternate) && null === Ra(t)) {
                  e.child = i;
                  break;
                }
                (t = i.sibling), (i.sibling = n), (n = i), (i = t);
              }
              tl(e, !0, n, null, a, e.lastEffect);
              break;
            case 'together':
              tl(e, !1, null, null, void 0, e.lastEffect);
              break;
            default:
              e.memoizedState = null;
          }
        return e.child;
      }
      function nl(t, e, n) {
        if (
          (null !== t && (e.dependencies = t.dependencies),
          (zl |= e.lanes),
          0 !== (n & e.childLanes))
        ) {
          if (null !== t && e.child !== t.child) throw Error(o(153));
          if (null !== e.child) {
            for (
              n = Hs((t = e.child), t.pendingProps), e.child = n, n.return = e;
              null !== t.sibling;

            )
              (t = t.sibling),
                ((n = n.sibling = Hs(t, t.pendingProps)).return = e);
            n.sibling = null;
          }
          return e.child;
        }
        return null;
      }
      function rl(t, e) {
        if (!za)
          switch (t.tailMode) {
            case 'hidden':
              e = t.tail;
              for (var n = null; null !== e; )
                null !== e.alternate && (n = e), (e = e.sibling);
              null === n ? (t.tail = null) : (n.sibling = null);
              break;
            case 'collapsed':
              n = t.tail;
              for (var r = null; null !== n; )
                null !== n.alternate && (r = n), (n = n.sibling);
              null === r
                ? e || null === t.tail
                  ? (t.tail = null)
                  : (t.tail.sibling = null)
                : (r.sibling = null);
          }
      }
      function il(t, e, n) {
        var r = e.pendingProps;
        switch (e.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return null;
          case 1:
            return pi(e.type) && gi(), null;
          case 3:
            return (
              Ma(),
              li(fi),
              li(ci),
              Ka(),
              (r = e.stateNode).pendingContext &&
                ((r.context = r.pendingContext), (r.pendingContext = null)),
              (null !== t && null !== t.child) ||
                (Ha(e) ? (e.flags |= 4) : r.hydrate || (e.flags |= 256)),
              null
            );
          case 5:
            Fa(e);
            var a = Oa(Ta.current);
            if (((n = e.type), null !== t && null != e.stateNode))
              Ko(t, e, n, r), t.ref !== e.ref && (e.flags |= 128);
            else {
              if (!r) {
                if (null === e.stateNode) throw Error(o(166));
                return null;
              }
              if (((t = Oa(Pa.current)), Ha(e))) {
                (r = e.stateNode), (n = e.type);
                var l = e.memoizedProps;
                switch (((r[Qr] = e), (r[qr] = l), n)) {
                  case 'dialog':
                    Er('cancel', r), Er('close', r);
                    break;
                  case 'iframe':
                  case 'object':
                  case 'embed':
                    Er('load', r);
                    break;
                  case 'video':
                  case 'audio':
                    for (t = 0; t < xr.length; t++) Er(xr[t], r);
                    break;
                  case 'source':
                    Er('error', r);
                    break;
                  case 'img':
                  case 'image':
                  case 'link':
                    Er('error', r), Er('load', r);
                    break;
                  case 'details':
                    Er('toggle', r);
                    break;
                  case 'input':
                    tt(r, l), Er('invalid', r);
                    break;
                  case 'select':
                    (r._wrapperState = { wasMultiple: !!l.multiple }),
                      Er('invalid', r);
                    break;
                  case 'textarea':
                    st(r, l), Er('invalid', r);
                }
                for (var u in (kt(n, l), (t = null), l))
                  l.hasOwnProperty(u) &&
                    ((a = l[u]),
                    'children' === u
                      ? 'string' === typeof a
                        ? r.textContent !== a && (t = ['children', a])
                        : 'number' === typeof a &&
                          r.textContent !== '' + a &&
                          (t = ['children', '' + a])
                      : s.hasOwnProperty(u) &&
                        null != a &&
                        'onScroll' === u &&
                        Er('scroll', r));
                switch (n) {
                  case 'input':
                    q(r), rt(r, l, !0);
                    break;
                  case 'textarea':
                    q(r), ct(r);
                    break;
                  case 'select':
                  case 'option':
                    break;
                  default:
                    'function' === typeof l.onClick && (r.onclick = Dr);
                }
                (r = t), (e.updateQueue = r), null !== r && (e.flags |= 4);
              } else {
                switch (
                  ((u = 9 === a.nodeType ? a : a.ownerDocument),
                  t === ft && (t = ht(n)),
                  t === ft
                    ? 'script' === n
                      ? (((t = u.createElement('div')).innerHTML =
                          '<script></script>'),
                        (t = t.removeChild(t.firstChild)))
                      : 'string' === typeof r.is
                      ? (t = u.createElement(n, { is: r.is }))
                      : ((t = u.createElement(n)),
                        'select' === n &&
                          ((u = t),
                          r.multiple
                            ? (u.multiple = !0)
                            : r.size && (u.size = r.size)))
                    : (t = u.createElementNS(t, n)),
                  (t[Qr] = e),
                  (t[qr] = r),
                  Wo(t, e),
                  (e.stateNode = t),
                  (u = Ct(n, r)),
                  n)
                ) {
                  case 'dialog':
                    Er('cancel', t), Er('close', t), (a = r);
                    break;
                  case 'iframe':
                  case 'object':
                  case 'embed':
                    Er('load', t), (a = r);
                    break;
                  case 'video':
                  case 'audio':
                    for (a = 0; a < xr.length; a++) Er(xr[a], t);
                    a = r;
                    break;
                  case 'source':
                    Er('error', t), (a = r);
                    break;
                  case 'img':
                  case 'image':
                  case 'link':
                    Er('error', t), Er('load', t), (a = r);
                    break;
                  case 'details':
                    Er('toggle', t), (a = r);
                    break;
                  case 'input':
                    tt(t, r), (a = Z(t, r)), Er('invalid', t);
                    break;
                  case 'option':
                    a = at(t, r);
                    break;
                  case 'select':
                    (t._wrapperState = { wasMultiple: !!r.multiple }),
                      (a = i({}, r, { value: void 0 })),
                      Er('invalid', t);
                    break;
                  case 'textarea':
                    st(t, r), (a = lt(t, r)), Er('invalid', t);
                    break;
                  default:
                    a = r;
                }
                kt(n, a);
                var c = a;
                for (l in c)
                  if (c.hasOwnProperty(l)) {
                    var f = c[l];
                    'style' === l
                      ? St(t, f)
                      : 'dangerouslySetInnerHTML' === l
                      ? null != (f = f ? f.__html : void 0) && yt(t, f)
                      : 'children' === l
                      ? 'string' === typeof f
                        ? ('textarea' !== n || '' !== f) && mt(t, f)
                        : 'number' === typeof f && mt(t, '' + f)
                      : 'suppressContentEditableWarning' !== l &&
                        'suppressHydrationWarning' !== l &&
                        'autoFocus' !== l &&
                        (s.hasOwnProperty(l)
                          ? null != f && 'onScroll' === l && Er('scroll', t)
                          : null != f && _(t, l, f, u));
                  }
                switch (n) {
                  case 'input':
                    q(t), rt(t, r, !1);
                    break;
                  case 'textarea':
                    q(t), ct(t);
                    break;
                  case 'option':
                    null != r.value && t.setAttribute('value', '' + Y(r.value));
                    break;
                  case 'select':
                    (t.multiple = !!r.multiple),
                      null != (l = r.value)
                        ? ot(t, !!r.multiple, l, !1)
                        : null != r.defaultValue &&
                          ot(t, !!r.multiple, r.defaultValue, !0);
                    break;
                  default:
                    'function' === typeof a.onClick && (t.onclick = Dr);
                }
                jr(n, r) && (e.flags |= 4);
              }
              null !== e.ref && (e.flags |= 128);
            }
            return null;
          case 6:
            if (t && null != e.stateNode) $o(0, e, t.memoizedProps, r);
            else {
              if ('string' !== typeof r && null === e.stateNode)
                throw Error(o(166));
              (n = Oa(Ta.current)),
                Oa(Pa.current),
                Ha(e)
                  ? ((r = e.stateNode),
                    (n = e.memoizedProps),
                    (r[Qr] = e),
                    r.nodeValue !== n && (e.flags |= 4))
                  : (((r = (9 === n.nodeType
                      ? n
                      : n.ownerDocument
                    ).createTextNode(r))[Qr] = e),
                    (e.stateNode = r));
            }
            return null;
          case 13:
            return (
              li(La),
              (r = e.memoizedState),
              0 !== (64 & e.flags)
                ? ((e.lanes = n), e)
                : ((r = null !== r),
                  (n = !1),
                  null === t
                    ? void 0 !== e.memoizedProps.fallback && Ha(e)
                    : (n = null !== t.memoizedState),
                  r &&
                    !n &&
                    0 !== (2 & e.mode) &&
                    ((null === t &&
                      !0 !== e.memoizedProps.unstable_avoidThisFallback) ||
                    0 !== (1 & La.current)
                      ? 0 === Rl && (Rl = 3)
                      : ((0 !== Rl && 3 !== Rl) || (Rl = 4),
                        null === Nl ||
                          (0 === (134217727 & zl) && 0 === (134217727 & Ul)) ||
                          gs(Nl, Al))),
                  (r || n) && (e.flags |= 4),
                  null)
            );
          case 4:
            return Ma(), null === t && Or(e.stateNode.containerInfo), null;
          case 10:
            return ta(e), null;
          case 17:
            return pi(e.type) && gi(), null;
          case 19:
            if ((li(La), null === (r = e.memoizedState))) return null;
            if (((l = 0 !== (64 & e.flags)), null === (u = r.rendering)))
              if (l) rl(r, !1);
              else {
                if (0 !== Rl || (null !== t && 0 !== (64 & t.flags)))
                  for (t = e.child; null !== t; ) {
                    if (null !== (u = Ra(t))) {
                      for (
                        e.flags |= 64,
                          rl(r, !1),
                          null !== (l = u.updateQueue) &&
                            ((e.updateQueue = l), (e.flags |= 4)),
                          null === r.lastEffect && (e.firstEffect = null),
                          e.lastEffect = r.lastEffect,
                          r = n,
                          n = e.child;
                        null !== n;

                      )
                        (t = r),
                          ((l = n).flags &= 2),
                          (l.nextEffect = null),
                          (l.firstEffect = null),
                          (l.lastEffect = null),
                          null === (u = l.alternate)
                            ? ((l.childLanes = 0),
                              (l.lanes = t),
                              (l.child = null),
                              (l.memoizedProps = null),
                              (l.memoizedState = null),
                              (l.updateQueue = null),
                              (l.dependencies = null),
                              (l.stateNode = null))
                            : ((l.childLanes = u.childLanes),
                              (l.lanes = u.lanes),
                              (l.child = u.child),
                              (l.memoizedProps = u.memoizedProps),
                              (l.memoizedState = u.memoizedState),
                              (l.updateQueue = u.updateQueue),
                              (l.type = u.type),
                              (t = u.dependencies),
                              (l.dependencies =
                                null === t
                                  ? null
                                  : {
                                      lanes: t.lanes,
                                      firstContext: t.firstContext,
                                    })),
                          (n = n.sibling);
                      return si(La, (1 & La.current) | 2), e.child;
                    }
                    t = t.sibling;
                  }
                null !== r.tail &&
                  ji() > Hl &&
                  ((e.flags |= 64), (l = !0), rl(r, !1), (e.lanes = 33554432));
              }
            else {
              if (!l)
                if (null !== (t = Ra(u))) {
                  if (
                    ((e.flags |= 64),
                    (l = !0),
                    null !== (n = t.updateQueue) &&
                      ((e.updateQueue = n), (e.flags |= 4)),
                    rl(r, !0),
                    null === r.tail &&
                      'hidden' === r.tailMode &&
                      !u.alternate &&
                      !za)
                  )
                    return (
                      null !== (e = e.lastEffect = r.lastEffect) &&
                        (e.nextEffect = null),
                      null
                    );
                } else
                  2 * ji() - r.renderingStartTime > Hl &&
                    1073741824 !== n &&
                    ((e.flags |= 64),
                    (l = !0),
                    rl(r, !1),
                    (e.lanes = 33554432));
              r.isBackwards
                ? ((u.sibling = e.child), (e.child = u))
                : (null !== (n = r.last) ? (n.sibling = u) : (e.child = u),
                  (r.last = u));
            }
            return null !== r.tail
              ? ((n = r.tail),
                (r.rendering = n),
                (r.tail = n.sibling),
                (r.lastEffect = e.lastEffect),
                (r.renderingStartTime = ji()),
                (n.sibling = null),
                (e = La.current),
                si(La, l ? (1 & e) | 2 : 1 & e),
                n)
              : null;
          case 23:
          case 24:
            return (
              _s(),
              null !== t &&
                (null !== t.memoizedState) !== (null !== e.memoizedState) &&
                'unstable-defer-without-hiding' !== r.mode &&
                (e.flags |= 4),
              null
            );
        }
        throw Error(o(156, e.tag));
      }
      function al(t) {
        switch (t.tag) {
          case 1:
            pi(t.type) && gi();
            var e = t.flags;
            return 4096 & e ? ((t.flags = (-4097 & e) | 64), t) : null;
          case 3:
            if ((Ma(), li(fi), li(ci), Ka(), 0 !== (64 & (e = t.flags))))
              throw Error(o(285));
            return (t.flags = (-4097 & e) | 64), t;
          case 5:
            return Fa(t), null;
          case 13:
            return (
              li(La),
              4096 & (e = t.flags) ? ((t.flags = (-4097 & e) | 64), t) : null
            );
          case 19:
            return li(La), null;
          case 4:
            return Ma(), null;
          case 10:
            return ta(t), null;
          case 23:
          case 24:
            return _s(), null;
          default:
            return null;
        }
      }
      function ol(t, e) {
        try {
          var n = '',
            r = e;
          do {
            (n += K(r)), (r = r.return);
          } while (r);
          var i = n;
        } catch (a) {
          i = '\nError generating stack: ' + a.message + '\n' + a.stack;
        }
        return { value: t, source: e, stack: i };
      }
      function ll(t, e) {
        try {
          console.error(e.value);
        } catch (n) {
          setTimeout(function () {
            throw n;
          });
        }
      }
      (Wo = function (t, e) {
        for (var n = e.child; null !== n; ) {
          if (5 === n.tag || 6 === n.tag) t.appendChild(n.stateNode);
          else if (4 !== n.tag && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === e) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === e) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }),
        (Ko = function (t, e, n, r) {
          var a = t.memoizedProps;
          if (a !== r) {
            (t = e.stateNode), Oa(Pa.current);
            var o,
              l = null;
            switch (n) {
              case 'input':
                (a = Z(t, a)), (r = Z(t, r)), (l = []);
                break;
              case 'option':
                (a = at(t, a)), (r = at(t, r)), (l = []);
                break;
              case 'select':
                (a = i({}, a, { value: void 0 })),
                  (r = i({}, r, { value: void 0 })),
                  (l = []);
                break;
              case 'textarea':
                (a = lt(t, a)), (r = lt(t, r)), (l = []);
                break;
              default:
                'function' !== typeof a.onClick &&
                  'function' === typeof r.onClick &&
                  (t.onclick = Dr);
            }
            for (f in (kt(n, r), (n = null), a))
              if (!r.hasOwnProperty(f) && a.hasOwnProperty(f) && null != a[f])
                if ('style' === f) {
                  var u = a[f];
                  for (o in u)
                    u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
                } else
                  'dangerouslySetInnerHTML' !== f &&
                    'children' !== f &&
                    'suppressContentEditableWarning' !== f &&
                    'suppressHydrationWarning' !== f &&
                    'autoFocus' !== f &&
                    (s.hasOwnProperty(f)
                      ? l || (l = [])
                      : (l = l || []).push(f, null));
            for (f in r) {
              var c = r[f];
              if (
                ((u = null != a ? a[f] : void 0),
                r.hasOwnProperty(f) && c !== u && (null != c || null != u))
              )
                if ('style' === f)
                  if (u) {
                    for (o in u)
                      !u.hasOwnProperty(o) ||
                        (c && c.hasOwnProperty(o)) ||
                        (n || (n = {}), (n[o] = ''));
                    for (o in c)
                      c.hasOwnProperty(o) &&
                        u[o] !== c[o] &&
                        (n || (n = {}), (n[o] = c[o]));
                  } else n || (l || (l = []), l.push(f, n)), (n = c);
                else
                  'dangerouslySetInnerHTML' === f
                    ? ((c = c ? c.__html : void 0),
                      (u = u ? u.__html : void 0),
                      null != c && u !== c && (l = l || []).push(f, c))
                    : 'children' === f
                    ? ('string' !== typeof c && 'number' !== typeof c) ||
                      (l = l || []).push(f, '' + c)
                    : 'suppressContentEditableWarning' !== f &&
                      'suppressHydrationWarning' !== f &&
                      (s.hasOwnProperty(f)
                        ? (null != c && 'onScroll' === f && Er('scroll', t),
                          l || u === c || (l = []))
                        : 'object' === typeof c &&
                          null !== c &&
                          c.$$typeof === R
                        ? c.toString()
                        : (l = l || []).push(f, c));
            }
            n && (l = l || []).push('style', n);
            var f = l;
            (e.updateQueue = f) && (e.flags |= 4);
          }
        }),
        ($o = function (t, e, n, r) {
          n !== r && (e.flags |= 4);
        });
      var sl = 'function' === typeof WeakMap ? WeakMap : Map;
      function ul(t, e, n) {
        ((n = la(-1, n)).tag = 3), (n.payload = { element: null });
        var r = e.value;
        return (
          (n.callback = function () {
            $l || (($l = !0), (Yl = r)), ll(0, e);
          }),
          n
        );
      }
      function cl(t, e, n) {
        (n = la(-1, n)).tag = 3;
        var r = t.type.getDerivedStateFromError;
        if ('function' === typeof r) {
          var i = e.value;
          n.payload = function () {
            return ll(0, e), r(i);
          };
        }
        var a = t.stateNode;
        return (
          null !== a &&
            'function' === typeof a.componentDidCatch &&
            (n.callback = function () {
              'function' !== typeof r &&
                (null === Ql ? (Ql = new Set([this])) : Ql.add(this), ll(0, e));
              var t = e.stack;
              this.componentDidCatch(e.value, {
                componentStack: null !== t ? t : '',
              });
            }),
          n
        );
      }
      var fl = 'function' === typeof WeakSet ? WeakSet : Set;
      function dl(t) {
        var e = t.ref;
        if (null !== e)
          if ('function' === typeof e)
            try {
              e(null);
            } catch (n) {
              Ds(t, n);
            }
          else e.current = null;
      }
      function hl(t, e) {
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            return;
          case 1:
            if (256 & e.flags && null !== t) {
              var n = t.memoizedProps,
                r = t.memoizedState;
              (e = (t = e.stateNode).getSnapshotBeforeUpdate(
                e.elementType === e.type ? n : Yi(e.type, n),
                r
              )),
                (t.__reactInternalSnapshotBeforeUpdate = e);
            }
            return;
          case 3:
            return void (256 & e.flags && Vr(e.stateNode.containerInfo));
          case 5:
          case 6:
          case 4:
          case 17:
            return;
        }
        throw Error(o(163));
      }
      function pl(t, e, n) {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            if (
              null !== (e = null !== (e = n.updateQueue) ? e.lastEffect : null)
            ) {
              t = e = e.next;
              do {
                if (3 === (3 & t.tag)) {
                  var r = t.create;
                  t.destroy = r();
                }
                t = t.next;
              } while (t !== e);
            }
            if (
              null !== (e = null !== (e = n.updateQueue) ? e.lastEffect : null)
            ) {
              t = e = e.next;
              do {
                var i = t;
                (r = i.next),
                  0 !== (4 & (i = i.tag)) &&
                    0 !== (1 & i) &&
                    (Ls(n, t), Fs(n, t)),
                  (t = r);
              } while (t !== e);
            }
            return;
          case 1:
            return (
              (t = n.stateNode),
              4 & n.flags &&
                (null === e
                  ? t.componentDidMount()
                  : ((r =
                      n.elementType === n.type
                        ? e.memoizedProps
                        : Yi(n.type, e.memoizedProps)),
                    t.componentDidUpdate(
                      r,
                      e.memoizedState,
                      t.__reactInternalSnapshotBeforeUpdate
                    ))),
              void (null !== (e = n.updateQueue) && fa(n, e, t))
            );
          case 3:
            if (null !== (e = n.updateQueue)) {
              if (((t = null), null !== n.child))
                switch (n.child.tag) {
                  case 5:
                    t = n.child.stateNode;
                    break;
                  case 1:
                    t = n.child.stateNode;
                }
              fa(n, e, t);
            }
            return;
          case 5:
            return (
              (t = n.stateNode),
              void (
                null === e &&
                4 & n.flags &&
                jr(n.type, n.memoizedProps) &&
                t.focus()
              )
            );
          case 6:
          case 4:
          case 12:
            return;
          case 13:
            return void (
              null === n.memoizedState &&
              ((n = n.alternate),
              null !== n &&
                ((n = n.memoizedState),
                null !== n && ((n = n.dehydrated), null !== n && Se(n))))
            );
          case 19:
          case 17:
          case 20:
          case 21:
          case 23:
          case 24:
            return;
        }
        throw Error(o(163));
      }
      function gl(t, e) {
        for (var n = t; ; ) {
          if (5 === n.tag) {
            var r = n.stateNode;
            if (e)
              'function' === typeof (r = r.style).setProperty
                ? r.setProperty('display', 'none', 'important')
                : (r.display = 'none');
            else {
              r = n.stateNode;
              var i = n.memoizedProps.style;
              (i =
                void 0 !== i && null !== i && i.hasOwnProperty('display')
                  ? i.display
                  : null),
                (r.style.display = wt('display', i));
            }
          } else if (6 === n.tag)
            n.stateNode.nodeValue = e ? '' : n.memoizedProps;
          else if (
            ((23 !== n.tag && 24 !== n.tag) ||
              null === n.memoizedState ||
              n === t) &&
            null !== n.child
          ) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === t) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }
      function vl(t, e) {
        if (wi && 'function' === typeof wi.onCommitFiberUnmount)
          try {
            wi.onCommitFiberUnmount(_i, e);
          } catch (a) {}
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            if (null !== (t = e.updateQueue) && null !== (t = t.lastEffect)) {
              var n = (t = t.next);
              do {
                var r = n,
                  i = r.destroy;
                if (((r = r.tag), void 0 !== i))
                  if (0 !== (4 & r)) Ls(e, n);
                  else {
                    r = e;
                    try {
                      i();
                    } catch (a) {
                      Ds(r, a);
                    }
                  }
                n = n.next;
              } while (n !== t);
            }
            break;
          case 1:
            if (
              (dl(e),
              'function' === typeof (t = e.stateNode).componentWillUnmount)
            )
              try {
                (t.props = e.memoizedProps),
                  (t.state = e.memoizedState),
                  t.componentWillUnmount();
              } catch (a) {
                Ds(e, a);
              }
            break;
          case 5:
            dl(e);
            break;
          case 4:
            Sl(t, e);
        }
      }
      function yl(t) {
        (t.alternate = null),
          (t.child = null),
          (t.dependencies = null),
          (t.firstEffect = null),
          (t.lastEffect = null),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.pendingProps = null),
          (t.return = null),
          (t.updateQueue = null);
      }
      function ml(t) {
        return 5 === t.tag || 3 === t.tag || 4 === t.tag;
      }
      function bl(t) {
        t: {
          for (var e = t.return; null !== e; ) {
            if (ml(e)) break t;
            e = e.return;
          }
          throw Error(o(160));
        }
        var n = e;
        switch (((e = n.stateNode), n.tag)) {
          case 5:
            var r = !1;
            break;
          case 3:
          case 4:
            (e = e.containerInfo), (r = !0);
            break;
          default:
            throw Error(o(161));
        }
        16 & n.flags && (mt(e, ''), (n.flags &= -17));
        t: e: for (n = t; ; ) {
          for (; null === n.sibling; ) {
            if (null === n.return || ml(n.return)) {
              n = null;
              break t;
            }
            n = n.return;
          }
          for (
            n.sibling.return = n.return, n = n.sibling;
            5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

          ) {
            if (2 & n.flags) continue e;
            if (null === n.child || 4 === n.tag) continue e;
            (n.child.return = n), (n = n.child);
          }
          if (!(2 & n.flags)) {
            n = n.stateNode;
            break t;
          }
        }
        r ? _l(t, n, e) : wl(t, n, e);
      }
      function _l(t, e, n) {
        var r = t.tag,
          i = 5 === r || 6 === r;
        if (i)
          (t = i ? t.stateNode : t.stateNode.instance),
            e
              ? 8 === n.nodeType
                ? n.parentNode.insertBefore(t, e)
                : n.insertBefore(t, e)
              : (8 === n.nodeType
                  ? (e = n.parentNode).insertBefore(t, n)
                  : (e = n).appendChild(t),
                (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                  null !== e.onclick ||
                  (e.onclick = Dr));
        else if (4 !== r && null !== (t = t.child))
          for (_l(t, e, n), t = t.sibling; null !== t; )
            _l(t, e, n), (t = t.sibling);
      }
      function wl(t, e, n) {
        var r = t.tag,
          i = 5 === r || 6 === r;
        if (i)
          (t = i ? t.stateNode : t.stateNode.instance),
            e ? n.insertBefore(t, e) : n.appendChild(t);
        else if (4 !== r && null !== (t = t.child))
          for (wl(t, e, n), t = t.sibling; null !== t; )
            wl(t, e, n), (t = t.sibling);
      }
      function Sl(t, e) {
        for (var n, r, i = e, a = !1; ; ) {
          if (!a) {
            a = i.return;
            t: for (;;) {
              if (null === a) throw Error(o(160));
              switch (((n = a.stateNode), a.tag)) {
                case 5:
                  r = !1;
                  break t;
                case 3:
                case 4:
                  (n = n.containerInfo), (r = !0);
                  break t;
              }
              a = a.return;
            }
            a = !0;
          }
          if (5 === i.tag || 6 === i.tag) {
            t: for (var l = t, s = i, u = s; ; )
              if ((vl(l, u), null !== u.child && 4 !== u.tag))
                (u.child.return = u), (u = u.child);
              else {
                if (u === s) break t;
                for (; null === u.sibling; ) {
                  if (null === u.return || u.return === s) break t;
                  u = u.return;
                }
                (u.sibling.return = u.return), (u = u.sibling);
              }
            r
              ? ((l = n),
                (s = i.stateNode),
                8 === l.nodeType
                  ? l.parentNode.removeChild(s)
                  : l.removeChild(s))
              : n.removeChild(i.stateNode);
          } else if (4 === i.tag) {
            if (null !== i.child) {
              (n = i.stateNode.containerInfo),
                (r = !0),
                (i.child.return = i),
                (i = i.child);
              continue;
            }
          } else if ((vl(t, i), null !== i.child)) {
            (i.child.return = i), (i = i.child);
            continue;
          }
          if (i === e) break;
          for (; null === i.sibling; ) {
            if (null === i.return || i.return === e) return;
            4 === (i = i.return).tag && (a = !1);
          }
          (i.sibling.return = i.return), (i = i.sibling);
        }
      }
      function xl(t, e) {
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            var n = e.updateQueue;
            if (null !== (n = null !== n ? n.lastEffect : null)) {
              var r = (n = n.next);
              do {
                3 === (3 & r.tag) &&
                  ((t = r.destroy), (r.destroy = void 0), void 0 !== t && t()),
                  (r = r.next);
              } while (r !== n);
            }
            return;
          case 1:
            return;
          case 5:
            if (null != (n = e.stateNode)) {
              r = e.memoizedProps;
              var i = null !== t ? t.memoizedProps : r;
              t = e.type;
              var a = e.updateQueue;
              if (((e.updateQueue = null), null !== a)) {
                for (
                  n[qr] = r,
                    'input' === t &&
                      'radio' === r.type &&
                      null != r.name &&
                      et(n, r),
                    Ct(t, i),
                    e = Ct(t, r),
                    i = 0;
                  i < a.length;
                  i += 2
                ) {
                  var l = a[i],
                    s = a[i + 1];
                  'style' === l
                    ? St(n, s)
                    : 'dangerouslySetInnerHTML' === l
                    ? yt(n, s)
                    : 'children' === l
                    ? mt(n, s)
                    : _(n, l, s, e);
                }
                switch (t) {
                  case 'input':
                    nt(n, r);
                    break;
                  case 'textarea':
                    ut(n, r);
                    break;
                  case 'select':
                    (t = n._wrapperState.wasMultiple),
                      (n._wrapperState.wasMultiple = !!r.multiple),
                      null != (a = r.value)
                        ? ot(n, !!r.multiple, a, !1)
                        : t !== !!r.multiple &&
                          (null != r.defaultValue
                            ? ot(n, !!r.multiple, r.defaultValue, !0)
                            : ot(n, !!r.multiple, r.multiple ? [] : '', !1));
                }
              }
            }
            return;
          case 6:
            if (null === e.stateNode) throw Error(o(162));
            return void (e.stateNode.nodeValue = e.memoizedProps);
          case 3:
            return void (
              (n = e.stateNode).hydrate &&
              ((n.hydrate = !1), Se(n.containerInfo))
            );
          case 12:
            return;
          case 13:
            return (
              null !== e.memoizedState && ((Bl = ji()), gl(e.child, !0)),
              void kl(e)
            );
          case 19:
            return void kl(e);
          case 17:
            return;
          case 23:
          case 24:
            return void gl(e, null !== e.memoizedState);
        }
        throw Error(o(163));
      }
      function kl(t) {
        var e = t.updateQueue;
        if (null !== e) {
          t.updateQueue = null;
          var n = t.stateNode;
          null === n && (n = t.stateNode = new fl()),
            e.forEach(function (e) {
              var r = Us.bind(null, t, e);
              n.has(e) || (n.add(e), e.then(r, r));
            });
        }
      }
      function Cl(t, e) {
        return (
          null !== t &&
          (null === (t = t.memoizedState) || null !== t.dehydrated) &&
          null !== (e = e.memoizedState) &&
          null === e.dehydrated
        );
      }
      var Pl = Math.ceil,
        El = w.ReactCurrentDispatcher,
        Tl = w.ReactCurrentOwner,
        Ol = 0,
        Nl = null,
        Ml = null,
        Al = 0,
        Fl = 0,
        Ll = oi(0),
        Rl = 0,
        Il = null,
        Dl = 0,
        zl = 0,
        Ul = 0,
        jl = 0,
        Gl = null,
        Bl = 0,
        Hl = 1 / 0;
      function Vl() {
        Hl = ji() + 500;
      }
      var Wl,
        Kl = null,
        $l = !1,
        Yl = null,
        Ql = null,
        ql = !1,
        Xl = null,
        Jl = 90,
        Zl = [],
        ts = [],
        es = null,
        ns = 0,
        rs = null,
        is = -1,
        as = 0,
        os = 0,
        ls = null,
        ss = !1;
      function us() {
        return 0 !== (48 & Ol) ? ji() : -1 !== is ? is : (is = ji());
      }
      function cs(t) {
        if (0 === (2 & (t = t.mode))) return 1;
        if (0 === (4 & t)) return 99 === Gi() ? 1 : 2;
        if ((0 === as && (as = Dl), 0 !== $i.transition)) {
          0 !== os && (os = null !== Gl ? Gl.pendingLanes : 0), (t = as);
          var e = 4186112 & ~os;
          return (
            0 === (e &= -e) &&
              0 === (e = (t = 4186112 & ~t) & -t) &&
              (e = 8192),
            e
          );
        }
        return (
          (t = Gi()),
          0 !== (4 & Ol) && 98 === t
            ? (t = je(12, as))
            : (t = je(
                (t = (function (t) {
                  switch (t) {
                    case 99:
                      return 15;
                    case 98:
                      return 10;
                    case 97:
                    case 96:
                      return 8;
                    case 95:
                      return 2;
                    default:
                      return 0;
                  }
                })(t)),
                as
              )),
          t
        );
      }
      function fs(t, e, n) {
        if (50 < ns) throw ((ns = 0), (rs = null), Error(o(185)));
        if (null === (t = ds(t, e))) return null;
        He(t, e, n), t === Nl && ((Ul |= e), 4 === Rl && gs(t, Al));
        var r = Gi();
        1 === e
          ? 0 !== (8 & Ol) && 0 === (48 & Ol)
            ? vs(t)
            : (hs(t, n), 0 === Ol && (Vl(), Wi()))
          : (0 === (4 & Ol) ||
              (98 !== r && 99 !== r) ||
              (null === es ? (es = new Set([t])) : es.add(t)),
            hs(t, n)),
          (Gl = t);
      }
      function ds(t, e) {
        t.lanes |= e;
        var n = t.alternate;
        for (null !== n && (n.lanes |= e), n = t, t = t.return; null !== t; )
          (t.childLanes |= e),
            null !== (n = t.alternate) && (n.childLanes |= e),
            (n = t),
            (t = t.return);
        return 3 === n.tag ? n.stateNode : null;
      }
      function hs(t, e) {
        for (
          var n = t.callbackNode,
            r = t.suspendedLanes,
            i = t.pingedLanes,
            a = t.expirationTimes,
            l = t.pendingLanes;
          0 < l;

        ) {
          var s = 31 - Ve(l),
            u = 1 << s,
            c = a[s];
          if (-1 === c) {
            if (0 === (u & r) || 0 !== (u & i)) {
              (c = e), De(u);
              var f = Ie;
              a[s] = 10 <= f ? c + 250 : 6 <= f ? c + 5e3 : -1;
            }
          } else c <= e && (t.expiredLanes |= u);
          l &= ~u;
        }
        if (((r = ze(t, t === Nl ? Al : 0)), (e = Ie), 0 === r))
          null !== n &&
            (n !== Li && ki(n),
            (t.callbackNode = null),
            (t.callbackPriority = 0));
        else {
          if (null !== n) {
            if (t.callbackPriority === e) return;
            n !== Li && ki(n);
          }
          15 === e
            ? ((n = vs.bind(null, t)),
              null === Ii ? ((Ii = [n]), (Di = xi(Oi, Ki))) : Ii.push(n),
              (n = Li))
            : 14 === e
            ? (n = Vi(99, vs.bind(null, t)))
            : (n = Vi(
                (n = (function (t) {
                  switch (t) {
                    case 15:
                    case 14:
                      return 99;
                    case 13:
                    case 12:
                    case 11:
                    case 10:
                      return 98;
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 4:
                    case 5:
                      return 97;
                    case 3:
                    case 2:
                    case 1:
                      return 95;
                    case 0:
                      return 90;
                    default:
                      throw Error(o(358, t));
                  }
                })(e)),
                ps.bind(null, t)
              )),
            (t.callbackPriority = e),
            (t.callbackNode = n);
        }
      }
      function ps(t) {
        if (((is = -1), (os = as = 0), 0 !== (48 & Ol))) throw Error(o(327));
        var e = t.callbackNode;
        if (As() && t.callbackNode !== e) return null;
        var n = ze(t, t === Nl ? Al : 0);
        if (0 === n) return null;
        var r = n,
          i = Ol;
        Ol |= 16;
        var a = xs();
        for ((Nl === t && Al === r) || (Vl(), ws(t, r)); ; )
          try {
            Ps();
            break;
          } catch (s) {
            Ss(t, s);
          }
        if (
          (Zi(),
          (El.current = a),
          (Ol = i),
          null !== Ml ? (r = 0) : ((Nl = null), (Al = 0), (r = Rl)),
          0 !== (Dl & Ul))
        )
          ws(t, 0);
        else if (0 !== r) {
          if (
            (2 === r &&
              ((Ol |= 64),
              t.hydrate && ((t.hydrate = !1), Vr(t.containerInfo)),
              0 !== (n = Ue(t)) && (r = ks(t, n))),
            1 === r)
          )
            throw ((e = Il), ws(t, 0), gs(t, n), hs(t, ji()), e);
          switch (
            ((t.finishedWork = t.current.alternate), (t.finishedLanes = n), r)
          ) {
            case 0:
            case 1:
              throw Error(o(345));
            case 2:
              Os(t);
              break;
            case 3:
              if (
                (gs(t, n), (62914560 & n) === n && 10 < (r = Bl + 500 - ji()))
              ) {
                if (0 !== ze(t, 0)) break;
                if (((i = t.suspendedLanes) & n) !== n) {
                  us(), (t.pingedLanes |= t.suspendedLanes & i);
                  break;
                }
                t.timeoutHandle = Br(Os.bind(null, t), r);
                break;
              }
              Os(t);
              break;
            case 4:
              if ((gs(t, n), (4186112 & n) === n)) break;
              for (r = t.eventTimes, i = -1; 0 < n; ) {
                var l = 31 - Ve(n);
                (a = 1 << l), (l = r[l]) > i && (i = l), (n &= ~a);
              }
              if (
                ((n = i),
                10 <
                  (n =
                    (120 > (n = ji() - n)
                      ? 120
                      : 480 > n
                      ? 480
                      : 1080 > n
                      ? 1080
                      : 1920 > n
                      ? 1920
                      : 3e3 > n
                      ? 3e3
                      : 4320 > n
                      ? 4320
                      : 1960 * Pl(n / 1960)) - n))
              ) {
                t.timeoutHandle = Br(Os.bind(null, t), n);
                break;
              }
              Os(t);
              break;
            case 5:
              Os(t);
              break;
            default:
              throw Error(o(329));
          }
        }
        return hs(t, ji()), t.callbackNode === e ? ps.bind(null, t) : null;
      }
      function gs(t, e) {
        for (
          e &= ~jl,
            e &= ~Ul,
            t.suspendedLanes |= e,
            t.pingedLanes &= ~e,
            t = t.expirationTimes;
          0 < e;

        ) {
          var n = 31 - Ve(e),
            r = 1 << n;
          (t[n] = -1), (e &= ~r);
        }
      }
      function vs(t) {
        if (0 !== (48 & Ol)) throw Error(o(327));
        if ((As(), t === Nl && 0 !== (t.expiredLanes & Al))) {
          var e = Al,
            n = ks(t, e);
          0 !== (Dl & Ul) && (n = ks(t, (e = ze(t, e))));
        } else n = ks(t, (e = ze(t, 0)));
        if (
          (0 !== t.tag &&
            2 === n &&
            ((Ol |= 64),
            t.hydrate && ((t.hydrate = !1), Vr(t.containerInfo)),
            0 !== (e = Ue(t)) && (n = ks(t, e))),
          1 === n)
        )
          throw ((n = Il), ws(t, 0), gs(t, e), hs(t, ji()), n);
        return (
          (t.finishedWork = t.current.alternate),
          (t.finishedLanes = e),
          Os(t),
          hs(t, ji()),
          null
        );
      }
      function ys(t, e) {
        var n = Ol;
        Ol |= 1;
        try {
          return t(e);
        } finally {
          0 === (Ol = n) && (Vl(), Wi());
        }
      }
      function ms(t, e) {
        var n = Ol;
        (Ol &= -2), (Ol |= 8);
        try {
          return t(e);
        } finally {
          0 === (Ol = n) && (Vl(), Wi());
        }
      }
      function bs(t, e) {
        si(Ll, Fl), (Fl |= e), (Dl |= e);
      }
      function _s() {
        (Fl = Ll.current), li(Ll);
      }
      function ws(t, e) {
        (t.finishedWork = null), (t.finishedLanes = 0);
        var n = t.timeoutHandle;
        if ((-1 !== n && ((t.timeoutHandle = -1), Hr(n)), null !== Ml))
          for (n = Ml.return; null !== n; ) {
            var r = n;
            switch (r.tag) {
              case 1:
                null !== (r = r.type.childContextTypes) && void 0 !== r && gi();
                break;
              case 3:
                Ma(), li(fi), li(ci), Ka();
                break;
              case 5:
                Fa(r);
                break;
              case 4:
                Ma();
                break;
              case 13:
              case 19:
                li(La);
                break;
              case 10:
                ta(r);
                break;
              case 23:
              case 24:
                _s();
            }
            n = n.return;
          }
        (Nl = t),
          (Ml = Hs(t.current, null)),
          (Al = Fl = Dl = e),
          (Rl = 0),
          (Il = null),
          (jl = Ul = zl = 0);
      }
      function Ss(t, e) {
        for (;;) {
          var n = Ml;
          try {
            if ((Zi(), ($a.current = Oo), Za)) {
              for (var r = qa.memoizedState; null !== r; ) {
                var i = r.queue;
                null !== i && (i.pending = null), (r = r.next);
              }
              Za = !1;
            }
            if (
              ((Qa = 0),
              (Ja = Xa = qa = null),
              (to = !1),
              (Tl.current = null),
              null === n || null === n.return)
            ) {
              (Rl = 1), (Il = e), (Ml = null);
              break;
            }
            t: {
              var a = t,
                o = n.return,
                l = n,
                s = e;
              if (
                ((e = Al),
                (l.flags |= 2048),
                (l.firstEffect = l.lastEffect = null),
                null !== s &&
                  'object' === typeof s &&
                  'function' === typeof s.then)
              ) {
                var u = s;
                if (0 === (2 & l.mode)) {
                  var c = l.alternate;
                  c
                    ? ((l.updateQueue = c.updateQueue),
                      (l.memoizedState = c.memoizedState),
                      (l.lanes = c.lanes))
                    : ((l.updateQueue = null), (l.memoizedState = null));
                }
                var f = 0 !== (1 & La.current),
                  d = o;
                do {
                  var h;
                  if ((h = 13 === d.tag)) {
                    var p = d.memoizedState;
                    if (null !== p) h = null !== p.dehydrated;
                    else {
                      var g = d.memoizedProps;
                      h =
                        void 0 !== g.fallback &&
                        (!0 !== g.unstable_avoidThisFallback || !f);
                    }
                  }
                  if (h) {
                    var v = d.updateQueue;
                    if (null === v) {
                      var y = new Set();
                      y.add(u), (d.updateQueue = y);
                    } else v.add(u);
                    if (0 === (2 & d.mode)) {
                      if (
                        ((d.flags |= 64),
                        (l.flags |= 16384),
                        (l.flags &= -2981),
                        1 === l.tag)
                      )
                        if (null === l.alternate) l.tag = 17;
                        else {
                          var m = la(-1, 1);
                          (m.tag = 2), sa(l, m);
                        }
                      l.lanes |= 1;
                      break t;
                    }
                    (s = void 0), (l = e);
                    var b = a.pingCache;
                    if (
                      (null === b
                        ? ((b = a.pingCache = new sl()),
                          (s = new Set()),
                          b.set(u, s))
                        : void 0 === (s = b.get(u)) &&
                          ((s = new Set()), b.set(u, s)),
                      !s.has(l))
                    ) {
                      s.add(l);
                      var _ = zs.bind(null, a, u, l);
                      u.then(_, _);
                    }
                    (d.flags |= 4096), (d.lanes = e);
                    break t;
                  }
                  d = d.return;
                } while (null !== d);
                s = Error(
                  ($(l.type) || 'A React component') +
                    ' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.'
                );
              }
              5 !== Rl && (Rl = 2), (s = ol(s, l)), (d = o);
              do {
                switch (d.tag) {
                  case 3:
                    (a = s),
                      (d.flags |= 4096),
                      (e &= -e),
                      (d.lanes |= e),
                      ua(d, ul(0, a, e));
                    break t;
                  case 1:
                    a = s;
                    var w = d.type,
                      S = d.stateNode;
                    if (
                      0 === (64 & d.flags) &&
                      ('function' === typeof w.getDerivedStateFromError ||
                        (null !== S &&
                          'function' === typeof S.componentDidCatch &&
                          (null === Ql || !Ql.has(S))))
                    ) {
                      (d.flags |= 4096),
                        (e &= -e),
                        (d.lanes |= e),
                        ua(d, cl(d, a, e));
                      break t;
                    }
                }
                d = d.return;
              } while (null !== d);
            }
            Ts(n);
          } catch (x) {
            (e = x), Ml === n && null !== n && (Ml = n = n.return);
            continue;
          }
          break;
        }
      }
      function xs() {
        var t = El.current;
        return (El.current = Oo), null === t ? Oo : t;
      }
      function ks(t, e) {
        var n = Ol;
        Ol |= 16;
        var r = xs();
        for ((Nl === t && Al === e) || ws(t, e); ; )
          try {
            Cs();
            break;
          } catch (i) {
            Ss(t, i);
          }
        if ((Zi(), (Ol = n), (El.current = r), null !== Ml))
          throw Error(o(261));
        return (Nl = null), (Al = 0), Rl;
      }
      function Cs() {
        for (; null !== Ml; ) Es(Ml);
      }
      function Ps() {
        for (; null !== Ml && !Ci(); ) Es(Ml);
      }
      function Es(t) {
        var e = Wl(t.alternate, t, Fl);
        (t.memoizedProps = t.pendingProps),
          null === e ? Ts(t) : (Ml = e),
          (Tl.current = null);
      }
      function Ts(t) {
        var e = t;
        do {
          var n = e.alternate;
          if (((t = e.return), 0 === (2048 & e.flags))) {
            if (null !== (n = il(n, e, Fl))) return void (Ml = n);
            if (
              (24 !== (n = e).tag && 23 !== n.tag) ||
              null === n.memoizedState ||
              0 !== (1073741824 & Fl) ||
              0 === (4 & n.mode)
            ) {
              for (var r = 0, i = n.child; null !== i; )
                (r |= i.lanes | i.childLanes), (i = i.sibling);
              n.childLanes = r;
            }
            null !== t &&
              0 === (2048 & t.flags) &&
              (null === t.firstEffect && (t.firstEffect = e.firstEffect),
              null !== e.lastEffect &&
                (null !== t.lastEffect &&
                  (t.lastEffect.nextEffect = e.firstEffect),
                (t.lastEffect = e.lastEffect)),
              1 < e.flags &&
                (null !== t.lastEffect
                  ? (t.lastEffect.nextEffect = e)
                  : (t.firstEffect = e),
                (t.lastEffect = e)));
          } else {
            if (null !== (n = al(e))) return (n.flags &= 2047), void (Ml = n);
            null !== t &&
              ((t.firstEffect = t.lastEffect = null), (t.flags |= 2048));
          }
          if (null !== (e = e.sibling)) return void (Ml = e);
          Ml = e = t;
        } while (null !== e);
        0 === Rl && (Rl = 5);
      }
      function Os(t) {
        var e = Gi();
        return Hi(99, Ns.bind(null, t, e)), null;
      }
      function Ns(t, e) {
        do {
          As();
        } while (null !== Xl);
        if (0 !== (48 & Ol)) throw Error(o(327));
        var n = t.finishedWork;
        if (null === n) return null;
        if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
          throw Error(o(177));
        t.callbackNode = null;
        var r = n.lanes | n.childLanes,
          i = r,
          a = t.pendingLanes & ~i;
        (t.pendingLanes = i),
          (t.suspendedLanes = 0),
          (t.pingedLanes = 0),
          (t.expiredLanes &= i),
          (t.mutableReadLanes &= i),
          (t.entangledLanes &= i),
          (i = t.entanglements);
        for (var l = t.eventTimes, s = t.expirationTimes; 0 < a; ) {
          var u = 31 - Ve(a),
            c = 1 << u;
          (i[u] = 0), (l[u] = -1), (s[u] = -1), (a &= ~c);
        }
        if (
          (null !== es && 0 === (24 & r) && es.has(t) && es.delete(t),
          t === Nl && ((Ml = Nl = null), (Al = 0)),
          1 < n.flags
            ? null !== n.lastEffect
              ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
              : (r = n)
            : (r = n.firstEffect),
          null !== r)
        ) {
          if (
            ((i = Ol),
            (Ol |= 32),
            (Tl.current = null),
            (zr = Qe),
            pr((l = hr())))
          ) {
            if ('selectionStart' in l)
              s = { start: l.selectionStart, end: l.selectionEnd };
            else
              t: if (
                ((s = ((s = l.ownerDocument) && s.defaultView) || window),
                (c = s.getSelection && s.getSelection()) && 0 !== c.rangeCount)
              ) {
                (s = c.anchorNode),
                  (a = c.anchorOffset),
                  (u = c.focusNode),
                  (c = c.focusOffset);
                try {
                  s.nodeType, u.nodeType;
                } catch (P) {
                  s = null;
                  break t;
                }
                var f = 0,
                  d = -1,
                  h = -1,
                  p = 0,
                  g = 0,
                  v = l,
                  y = null;
                e: for (;;) {
                  for (
                    var m;
                    v !== s || (0 !== a && 3 !== v.nodeType) || (d = f + a),
                      v !== u || (0 !== c && 3 !== v.nodeType) || (h = f + c),
                      3 === v.nodeType && (f += v.nodeValue.length),
                      null !== (m = v.firstChild);

                  )
                    (y = v), (v = m);
                  for (;;) {
                    if (v === l) break e;
                    if (
                      (y === s && ++p === a && (d = f),
                      y === u && ++g === c && (h = f),
                      null !== (m = v.nextSibling))
                    )
                      break;
                    y = (v = y).parentNode;
                  }
                  v = m;
                }
                s = -1 === d || -1 === h ? null : { start: d, end: h };
              } else s = null;
            s = s || { start: 0, end: 0 };
          } else s = null;
          (Ur = { focusedElem: l, selectionRange: s }),
            (Qe = !1),
            (ls = null),
            (ss = !1),
            (Kl = r);
          do {
            try {
              Ms();
            } catch (P) {
              if (null === Kl) throw Error(o(330));
              Ds(Kl, P), (Kl = Kl.nextEffect);
            }
          } while (null !== Kl);
          (ls = null), (Kl = r);
          do {
            try {
              for (l = t; null !== Kl; ) {
                var b = Kl.flags;
                if ((16 & b && mt(Kl.stateNode, ''), 128 & b)) {
                  var _ = Kl.alternate;
                  if (null !== _) {
                    var w = _.ref;
                    null !== w &&
                      ('function' === typeof w ? w(null) : (w.current = null));
                  }
                }
                switch (1038 & b) {
                  case 2:
                    bl(Kl), (Kl.flags &= -3);
                    break;
                  case 6:
                    bl(Kl), (Kl.flags &= -3), xl(Kl.alternate, Kl);
                    break;
                  case 1024:
                    Kl.flags &= -1025;
                    break;
                  case 1028:
                    (Kl.flags &= -1025), xl(Kl.alternate, Kl);
                    break;
                  case 4:
                    xl(Kl.alternate, Kl);
                    break;
                  case 8:
                    Sl(l, (s = Kl));
                    var S = s.alternate;
                    yl(s), null !== S && yl(S);
                }
                Kl = Kl.nextEffect;
              }
            } catch (P) {
              if (null === Kl) throw Error(o(330));
              Ds(Kl, P), (Kl = Kl.nextEffect);
            }
          } while (null !== Kl);
          if (
            ((w = Ur),
            (_ = hr()),
            (b = w.focusedElem),
            (l = w.selectionRange),
            _ !== b &&
              b &&
              b.ownerDocument &&
              dr(b.ownerDocument.documentElement, b))
          ) {
            null !== l &&
              pr(b) &&
              ((_ = l.start),
              void 0 === (w = l.end) && (w = _),
              'selectionStart' in b
                ? ((b.selectionStart = _),
                  (b.selectionEnd = Math.min(w, b.value.length)))
                : (w =
                    ((_ = b.ownerDocument || document) && _.defaultView) ||
                    window).getSelection &&
                  ((w = w.getSelection()),
                  (s = b.textContent.length),
                  (S = Math.min(l.start, s)),
                  (l = void 0 === l.end ? S : Math.min(l.end, s)),
                  !w.extend && S > l && ((s = l), (l = S), (S = s)),
                  (s = fr(b, S)),
                  (a = fr(b, l)),
                  s &&
                    a &&
                    (1 !== w.rangeCount ||
                      w.anchorNode !== s.node ||
                      w.anchorOffset !== s.offset ||
                      w.focusNode !== a.node ||
                      w.focusOffset !== a.offset) &&
                    ((_ = _.createRange()).setStart(s.node, s.offset),
                    w.removeAllRanges(),
                    S > l
                      ? (w.addRange(_), w.extend(a.node, a.offset))
                      : (_.setEnd(a.node, a.offset), w.addRange(_))))),
              (_ = []);
            for (w = b; (w = w.parentNode); )
              1 === w.nodeType &&
                _.push({ element: w, left: w.scrollLeft, top: w.scrollTop });
            for (
              'function' === typeof b.focus && b.focus(), b = 0;
              b < _.length;
              b++
            )
              ((w = _[b]).element.scrollLeft = w.left),
                (w.element.scrollTop = w.top);
          }
          (Qe = !!zr), (Ur = zr = null), (t.current = n), (Kl = r);
          do {
            try {
              for (b = t; null !== Kl; ) {
                var x = Kl.flags;
                if ((36 & x && pl(b, Kl.alternate, Kl), 128 & x)) {
                  _ = void 0;
                  var k = Kl.ref;
                  if (null !== k) {
                    var C = Kl.stateNode;
                    switch (Kl.tag) {
                      case 5:
                        _ = C;
                        break;
                      default:
                        _ = C;
                    }
                    'function' === typeof k ? k(_) : (k.current = _);
                  }
                }
                Kl = Kl.nextEffect;
              }
            } catch (P) {
              if (null === Kl) throw Error(o(330));
              Ds(Kl, P), (Kl = Kl.nextEffect);
            }
          } while (null !== Kl);
          (Kl = null), Ri(), (Ol = i);
        } else t.current = n;
        if (ql) (ql = !1), (Xl = t), (Jl = e);
        else
          for (Kl = r; null !== Kl; )
            (e = Kl.nextEffect),
              (Kl.nextEffect = null),
              8 & Kl.flags && (((x = Kl).sibling = null), (x.stateNode = null)),
              (Kl = e);
        if (
          (0 === (r = t.pendingLanes) && (Ql = null),
          1 === r ? (t === rs ? ns++ : ((ns = 0), (rs = t))) : (ns = 0),
          (n = n.stateNode),
          wi && 'function' === typeof wi.onCommitFiberRoot)
        )
          try {
            wi.onCommitFiberRoot(_i, n, void 0, 64 === (64 & n.current.flags));
          } catch (P) {}
        if ((hs(t, ji()), $l)) throw (($l = !1), (t = Yl), (Yl = null), t);
        return 0 !== (8 & Ol) || Wi(), null;
      }
      function Ms() {
        for (; null !== Kl; ) {
          var t = Kl.alternate;
          ss ||
            null === ls ||
            (0 !== (8 & Kl.flags)
              ? te(Kl, ls) && (ss = !0)
              : 13 === Kl.tag && Cl(t, Kl) && te(Kl, ls) && (ss = !0));
          var e = Kl.flags;
          0 !== (256 & e) && hl(t, Kl),
            0 === (512 & e) ||
              ql ||
              ((ql = !0),
              Vi(97, function () {
                return As(), null;
              })),
            (Kl = Kl.nextEffect);
        }
      }
      function As() {
        if (90 !== Jl) {
          var t = 97 < Jl ? 97 : Jl;
          return (Jl = 90), Hi(t, Rs);
        }
        return !1;
      }
      function Fs(t, e) {
        Zl.push(e, t),
          ql ||
            ((ql = !0),
            Vi(97, function () {
              return As(), null;
            }));
      }
      function Ls(t, e) {
        ts.push(e, t),
          ql ||
            ((ql = !0),
            Vi(97, function () {
              return As(), null;
            }));
      }
      function Rs() {
        if (null === Xl) return !1;
        var t = Xl;
        if (((Xl = null), 0 !== (48 & Ol))) throw Error(o(331));
        var e = Ol;
        Ol |= 32;
        var n = ts;
        ts = [];
        for (var r = 0; r < n.length; r += 2) {
          var i = n[r],
            a = n[r + 1],
            l = i.destroy;
          if (((i.destroy = void 0), 'function' === typeof l))
            try {
              l();
            } catch (u) {
              if (null === a) throw Error(o(330));
              Ds(a, u);
            }
        }
        for (n = Zl, Zl = [], r = 0; r < n.length; r += 2) {
          (i = n[r]), (a = n[r + 1]);
          try {
            var s = i.create;
            i.destroy = s();
          } catch (u) {
            if (null === a) throw Error(o(330));
            Ds(a, u);
          }
        }
        for (s = t.current.firstEffect; null !== s; )
          (t = s.nextEffect),
            (s.nextEffect = null),
            8 & s.flags && ((s.sibling = null), (s.stateNode = null)),
            (s = t);
        return (Ol = e), Wi(), !0;
      }
      function Is(t, e, n) {
        sa(t, (e = ul(0, (e = ol(n, e)), 1))),
          (e = us()),
          null !== (t = ds(t, 1)) && (He(t, 1, e), hs(t, e));
      }
      function Ds(t, e) {
        if (3 === t.tag) Is(t, t, e);
        else
          for (var n = t.return; null !== n; ) {
            if (3 === n.tag) {
              Is(n, t, e);
              break;
            }
            if (1 === n.tag) {
              var r = n.stateNode;
              if (
                'function' === typeof n.type.getDerivedStateFromError ||
                ('function' === typeof r.componentDidCatch &&
                  (null === Ql || !Ql.has(r)))
              ) {
                var i = cl(n, (t = ol(e, t)), 1);
                if ((sa(n, i), (i = us()), null !== (n = ds(n, 1))))
                  He(n, 1, i), hs(n, i);
                else if (
                  'function' === typeof r.componentDidCatch &&
                  (null === Ql || !Ql.has(r))
                )
                  try {
                    r.componentDidCatch(e, t);
                  } catch (a) {}
                break;
              }
            }
            n = n.return;
          }
      }
      function zs(t, e, n) {
        var r = t.pingCache;
        null !== r && r.delete(e),
          (e = us()),
          (t.pingedLanes |= t.suspendedLanes & n),
          Nl === t &&
            (Al & n) === n &&
            (4 === Rl || (3 === Rl && (62914560 & Al) === Al && 500 > ji() - Bl)
              ? ws(t, 0)
              : (jl |= n)),
          hs(t, e);
      }
      function Us(t, e) {
        var n = t.stateNode;
        null !== n && n.delete(e),
          0 === (e = 0) &&
            (0 === (2 & (e = t.mode))
              ? (e = 1)
              : 0 === (4 & e)
              ? (e = 99 === Gi() ? 1 : 2)
              : (0 === as && (as = Dl),
                0 === (e = Ge(62914560 & ~as)) && (e = 4194304))),
          (n = us()),
          null !== (t = ds(t, e)) && (He(t, e, n), hs(t, n));
      }
      function js(t, e, n, r) {
        (this.tag = t),
          (this.key = n),
          (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = e),
          (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
          (this.mode = r),
          (this.flags = 0),
          (this.lastEffect = this.firstEffect = this.nextEffect = null),
          (this.childLanes = this.lanes = 0),
          (this.alternate = null);
      }
      function Gs(t, e, n, r) {
        return new js(t, e, n, r);
      }
      function Bs(t) {
        return !(!(t = t.prototype) || !t.isReactComponent);
      }
      function Hs(t, e) {
        var n = t.alternate;
        return (
          null === n
            ? (((n = Gs(t.tag, e, t.key, t.mode)).elementType = t.elementType),
              (n.type = t.type),
              (n.stateNode = t.stateNode),
              (n.alternate = t),
              (t.alternate = n))
            : ((n.pendingProps = e),
              (n.type = t.type),
              (n.flags = 0),
              (n.nextEffect = null),
              (n.firstEffect = null),
              (n.lastEffect = null)),
          (n.childLanes = t.childLanes),
          (n.lanes = t.lanes),
          (n.child = t.child),
          (n.memoizedProps = t.memoizedProps),
          (n.memoizedState = t.memoizedState),
          (n.updateQueue = t.updateQueue),
          (e = t.dependencies),
          (n.dependencies =
            null === e
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext }),
          (n.sibling = t.sibling),
          (n.index = t.index),
          (n.ref = t.ref),
          n
        );
      }
      function Vs(t, e, n, r, i, a) {
        var l = 2;
        if (((r = t), 'function' === typeof t)) Bs(t) && (l = 1);
        else if ('string' === typeof t) l = 5;
        else
          t: switch (t) {
            case k:
              return Ws(n.children, i, a, e);
            case I:
              (l = 8), (i |= 16);
              break;
            case C:
              (l = 8), (i |= 1);
              break;
            case P:
              return (
                ((t = Gs(12, n, e, 8 | i)).elementType = P),
                (t.type = P),
                (t.lanes = a),
                t
              );
            case N:
              return (
                ((t = Gs(13, n, e, i)).type = N),
                (t.elementType = N),
                (t.lanes = a),
                t
              );
            case M:
              return ((t = Gs(19, n, e, i)).elementType = M), (t.lanes = a), t;
            case D:
              return Ks(n, i, a, e);
            case z:
              return ((t = Gs(24, n, e, i)).elementType = z), (t.lanes = a), t;
            default:
              if ('object' === typeof t && null !== t)
                switch (t.$$typeof) {
                  case E:
                    l = 10;
                    break t;
                  case T:
                    l = 9;
                    break t;
                  case O:
                    l = 11;
                    break t;
                  case A:
                    l = 14;
                    break t;
                  case F:
                    (l = 16), (r = null);
                    break t;
                  case L:
                    l = 22;
                    break t;
                }
              throw Error(o(130, null == t ? t : typeof t, ''));
          }
        return (
          ((e = Gs(l, n, e, i)).elementType = t), (e.type = r), (e.lanes = a), e
        );
      }
      function Ws(t, e, n, r) {
        return ((t = Gs(7, t, r, e)).lanes = n), t;
      }
      function Ks(t, e, n, r) {
        return ((t = Gs(23, t, r, e)).elementType = D), (t.lanes = n), t;
      }
      function $s(t, e, n) {
        return ((t = Gs(6, t, null, e)).lanes = n), t;
      }
      function Ys(t, e, n) {
        return (
          ((e = Gs(
            4,
            null !== t.children ? t.children : [],
            t.key,
            e
          )).lanes = n),
          (e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation,
          }),
          e
        );
      }
      function Qs(t, e, n) {
        (this.tag = e),
          (this.containerInfo = t),
          (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
          (this.timeoutHandle = -1),
          (this.pendingContext = this.context = null),
          (this.hydrate = n),
          (this.callbackNode = null),
          (this.callbackPriority = 0),
          (this.eventTimes = Be(0)),
          (this.expirationTimes = Be(-1)),
          (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
          (this.entanglements = Be(0)),
          (this.mutableSourceEagerHydrationData = null);
      }
      function qs(t, e, n) {
        var r =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
          $$typeof: x,
          key: null == r ? null : '' + r,
          children: t,
          containerInfo: e,
          implementation: n,
        };
      }
      function Xs(t, e, n, r) {
        var i = e.current,
          a = us(),
          l = cs(i);
        t: if (n) {
          e: {
            if (qt((n = n._reactInternals)) !== n || 1 !== n.tag)
              throw Error(o(170));
            var s = n;
            do {
              switch (s.tag) {
                case 3:
                  s = s.stateNode.context;
                  break e;
                case 1:
                  if (pi(s.type)) {
                    s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              s = s.return;
            } while (null !== s);
            throw Error(o(171));
          }
          if (1 === n.tag) {
            var u = n.type;
            if (pi(u)) {
              n = yi(n, u, s);
              break t;
            }
          }
          n = s;
        } else n = ui;
        return (
          null === e.context ? (e.context = n) : (e.pendingContext = n),
          ((e = la(a, l)).payload = { element: t }),
          null !== (r = void 0 === r ? null : r) && (e.callback = r),
          sa(i, e),
          fs(i, l, a),
          l
        );
      }
      function Js(t) {
        if (!(t = t.current).child) return null;
        switch (t.child.tag) {
          case 5:
          default:
            return t.child.stateNode;
        }
      }
      function Zs(t, e) {
        if (null !== (t = t.memoizedState) && null !== t.dehydrated) {
          var n = t.retryLane;
          t.retryLane = 0 !== n && n < e ? n : e;
        }
      }
      function tu(t, e) {
        Zs(t, e), (t = t.alternate) && Zs(t, e);
      }
      function eu(t, e, n) {
        var r =
          (null != n &&
            null != n.hydrationOptions &&
            n.hydrationOptions.mutableSources) ||
          null;
        if (
          ((n = new Qs(t, e, null != n && !0 === n.hydrate)),
          (e = Gs(3, null, null, 2 === e ? 7 : 1 === e ? 3 : 0)),
          (n.current = e),
          (e.stateNode = n),
          aa(e),
          (t[Xr] = n.current),
          Or(8 === t.nodeType ? t.parentNode : t),
          r)
        )
          for (t = 0; t < r.length; t++) {
            var i = (e = r[t])._getVersion;
            (i = i(e._source)),
              null == n.mutableSourceEagerHydrationData
                ? (n.mutableSourceEagerHydrationData = [e, i])
                : n.mutableSourceEagerHydrationData.push(e, i);
          }
        this._internalRoot = n;
      }
      function nu(t) {
        return !(
          !t ||
          (1 !== t.nodeType &&
            9 !== t.nodeType &&
            11 !== t.nodeType &&
            (8 !== t.nodeType ||
              ' react-mount-point-unstable ' !== t.nodeValue))
        );
      }
      function ru(t, e, n, r, i) {
        var a = n._reactRootContainer;
        if (a) {
          var o = a._internalRoot;
          if ('function' === typeof i) {
            var l = i;
            i = function () {
              var t = Js(o);
              l.call(t);
            };
          }
          Xs(e, o, t, i);
        } else {
          if (
            ((a = n._reactRootContainer = (function (t, e) {
              if (
                (e ||
                  (e = !(
                    !(e = t
                      ? 9 === t.nodeType
                        ? t.documentElement
                        : t.firstChild
                      : null) ||
                    1 !== e.nodeType ||
                    !e.hasAttribute('data-reactroot')
                  )),
                !e)
              )
                for (var n; (n = t.lastChild); ) t.removeChild(n);
              return new eu(t, 0, e ? { hydrate: !0 } : void 0);
            })(n, r)),
            (o = a._internalRoot),
            'function' === typeof i)
          ) {
            var s = i;
            i = function () {
              var t = Js(o);
              s.call(t);
            };
          }
          ms(function () {
            Xs(e, o, t, i);
          });
        }
        return Js(o);
      }
      function iu(t, e) {
        var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!nu(e)) throw Error(o(200));
        return qs(t, e, null, n);
      }
      (Wl = function (t, e, n) {
        var r = e.lanes;
        if (null !== t)
          if (t.memoizedProps !== e.pendingProps || fi.current) Lo = !0;
          else {
            if (0 === (n & r)) {
              switch (((Lo = !1), e.tag)) {
                case 3:
                  Vo(e), Va();
                  break;
                case 5:
                  Aa(e);
                  break;
                case 1:
                  pi(e.type) && mi(e);
                  break;
                case 4:
                  Na(e, e.stateNode.containerInfo);
                  break;
                case 10:
                  r = e.memoizedProps.value;
                  var i = e.type._context;
                  si(Qi, i._currentValue), (i._currentValue = r);
                  break;
                case 13:
                  if (null !== e.memoizedState)
                    return 0 !== (n & e.child.childLanes)
                      ? Qo(t, e, n)
                      : (si(La, 1 & La.current),
                        null !== (e = nl(t, e, n)) ? e.sibling : null);
                  si(La, 1 & La.current);
                  break;
                case 19:
                  if (((r = 0 !== (n & e.childLanes)), 0 !== (64 & t.flags))) {
                    if (r) return el(t, e, n);
                    e.flags |= 64;
                  }
                  if (
                    (null !== (i = e.memoizedState) &&
                      ((i.rendering = null),
                      (i.tail = null),
                      (i.lastEffect = null)),
                    si(La, La.current),
                    r)
                  )
                    break;
                  return null;
                case 23:
                case 24:
                  return (e.lanes = 0), Uo(t, e, n);
              }
              return nl(t, e, n);
            }
            Lo = 0 !== (16384 & t.flags);
          }
        else Lo = !1;
        switch (((e.lanes = 0), e.tag)) {
          case 2:
            if (
              ((r = e.type),
              null !== t &&
                ((t.alternate = null), (e.alternate = null), (e.flags |= 2)),
              (t = e.pendingProps),
              (i = hi(e, ci.current)),
              na(e, n),
              (i = ro(null, e, r, t, i, n)),
              (e.flags |= 1),
              'object' === typeof i &&
                null !== i &&
                'function' === typeof i.render &&
                void 0 === i.$$typeof)
            ) {
              if (
                ((e.tag = 1),
                (e.memoizedState = null),
                (e.updateQueue = null),
                pi(r))
              ) {
                var a = !0;
                mi(e);
              } else a = !1;
              (e.memoizedState =
                null !== i.state && void 0 !== i.state ? i.state : null),
                aa(e);
              var l = r.getDerivedStateFromProps;
              'function' === typeof l && ha(e, r, l, t),
                (i.updater = pa),
                (e.stateNode = i),
                (i._reactInternals = e),
                ma(e, r, t, n),
                (e = Ho(null, e, r, !0, a, n));
            } else (e.tag = 0), Ro(null, e, i, n), (e = e.child);
            return e;
          case 16:
            i = e.elementType;
            t: {
              switch (
                (null !== t &&
                  ((t.alternate = null), (e.alternate = null), (e.flags |= 2)),
                (t = e.pendingProps),
                (i = (a = i._init)(i._payload)),
                (e.type = i),
                (a = e.tag = (function (t) {
                  if ('function' === typeof t) return Bs(t) ? 1 : 0;
                  if (void 0 !== t && null !== t) {
                    if ((t = t.$$typeof) === O) return 11;
                    if (t === A) return 14;
                  }
                  return 2;
                })(i)),
                (t = Yi(i, t)),
                a)
              ) {
                case 0:
                  e = Go(null, e, i, t, n);
                  break t;
                case 1:
                  e = Bo(null, e, i, t, n);
                  break t;
                case 11:
                  e = Io(null, e, i, t, n);
                  break t;
                case 14:
                  e = Do(null, e, i, Yi(i.type, t), r, n);
                  break t;
              }
              throw Error(o(306, i, ''));
            }
            return e;
          case 0:
            return (
              (r = e.type),
              (i = e.pendingProps),
              Go(t, e, r, (i = e.elementType === r ? i : Yi(r, i)), n)
            );
          case 1:
            return (
              (r = e.type),
              (i = e.pendingProps),
              Bo(t, e, r, (i = e.elementType === r ? i : Yi(r, i)), n)
            );
          case 3:
            if ((Vo(e), (r = e.updateQueue), null === t || null === r))
              throw Error(o(282));
            if (
              ((r = e.pendingProps),
              (i = null !== (i = e.memoizedState) ? i.element : null),
              oa(t, e),
              ca(e, r, null, n),
              (r = e.memoizedState.element) === i)
            )
              Va(), (e = nl(t, e, n));
            else {
              if (
                ((a = (i = e.stateNode).hydrate) &&
                  ((Da = Wr(e.stateNode.containerInfo.firstChild)),
                  (Ia = e),
                  (a = za = !0)),
                a)
              ) {
                if (null != (t = i.mutableSourceEagerHydrationData))
                  for (i = 0; i < t.length; i += 2)
                    ((a = t[i])._workInProgressVersionPrimary = t[i + 1]),
                      Wa.push(a);
                for (n = ka(e, null, r, n), e.child = n; n; )
                  (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
              } else Ro(t, e, r, n), Va();
              e = e.child;
            }
            return e;
          case 5:
            return (
              Aa(e),
              null === t && Ga(e),
              (r = e.type),
              (i = e.pendingProps),
              (a = null !== t ? t.memoizedProps : null),
              (l = i.children),
              Gr(r, i) ? (l = null) : null !== a && Gr(r, a) && (e.flags |= 16),
              jo(t, e),
              Ro(t, e, l, n),
              e.child
            );
          case 6:
            return null === t && Ga(e), null;
          case 13:
            return Qo(t, e, n);
          case 4:
            return (
              Na(e, e.stateNode.containerInfo),
              (r = e.pendingProps),
              null === t ? (e.child = xa(e, null, r, n)) : Ro(t, e, r, n),
              e.child
            );
          case 11:
            return (
              (r = e.type),
              (i = e.pendingProps),
              Io(t, e, r, (i = e.elementType === r ? i : Yi(r, i)), n)
            );
          case 7:
            return Ro(t, e, e.pendingProps, n), e.child;
          case 8:
          case 12:
            return Ro(t, e, e.pendingProps.children, n), e.child;
          case 10:
            t: {
              (r = e.type._context),
                (i = e.pendingProps),
                (l = e.memoizedProps),
                (a = i.value);
              var s = e.type._context;
              if ((si(Qi, s._currentValue), (s._currentValue = a), null !== l))
                if (
                  ((s = l.value),
                  0 ===
                    (a = lr(s, a)
                      ? 0
                      : 0 |
                        ('function' === typeof r._calculateChangedBits
                          ? r._calculateChangedBits(s, a)
                          : 1073741823)))
                ) {
                  if (l.children === i.children && !fi.current) {
                    e = nl(t, e, n);
                    break t;
                  }
                } else
                  for (null !== (s = e.child) && (s.return = e); null !== s; ) {
                    var u = s.dependencies;
                    if (null !== u) {
                      l = s.child;
                      for (var c = u.firstContext; null !== c; ) {
                        if (c.context === r && 0 !== (c.observedBits & a)) {
                          1 === s.tag &&
                            (((c = la(-1, n & -n)).tag = 2), sa(s, c)),
                            (s.lanes |= n),
                            null !== (c = s.alternate) && (c.lanes |= n),
                            ea(s.return, n),
                            (u.lanes |= n);
                          break;
                        }
                        c = c.next;
                      }
                    } else
                      l = 10 === s.tag && s.type === e.type ? null : s.child;
                    if (null !== l) l.return = s;
                    else
                      for (l = s; null !== l; ) {
                        if (l === e) {
                          l = null;
                          break;
                        }
                        if (null !== (s = l.sibling)) {
                          (s.return = l.return), (l = s);
                          break;
                        }
                        l = l.return;
                      }
                    s = l;
                  }
              Ro(t, e, i.children, n), (e = e.child);
            }
            return e;
          case 9:
            return (
              (i = e.type),
              (r = (a = e.pendingProps).children),
              na(e, n),
              (r = r((i = ra(i, a.unstable_observedBits)))),
              (e.flags |= 1),
              Ro(t, e, r, n),
              e.child
            );
          case 14:
            return (
              (a = Yi((i = e.type), e.pendingProps)),
              Do(t, e, i, (a = Yi(i.type, a)), r, n)
            );
          case 15:
            return zo(t, e, e.type, e.pendingProps, r, n);
          case 17:
            return (
              (r = e.type),
              (i = e.pendingProps),
              (i = e.elementType === r ? i : Yi(r, i)),
              null !== t &&
                ((t.alternate = null), (e.alternate = null), (e.flags |= 2)),
              (e.tag = 1),
              pi(r) ? ((t = !0), mi(e)) : (t = !1),
              na(e, n),
              va(e, r, i),
              ma(e, r, i, n),
              Ho(null, e, r, !0, t, n)
            );
          case 19:
            return el(t, e, n);
          case 23:
          case 24:
            return Uo(t, e, n);
        }
        throw Error(o(156, e.tag));
      }),
        (eu.prototype.render = function (t) {
          Xs(t, this._internalRoot, null, null);
        }),
        (eu.prototype.unmount = function () {
          var t = this._internalRoot,
            e = t.containerInfo;
          Xs(null, t, null, function () {
            e[Xr] = null;
          });
        }),
        (ee = function (t) {
          13 === t.tag && (fs(t, 4, us()), tu(t, 4));
        }),
        (ne = function (t) {
          13 === t.tag && (fs(t, 67108864, us()), tu(t, 67108864));
        }),
        (re = function (t) {
          if (13 === t.tag) {
            var e = us(),
              n = cs(t);
            fs(t, n, e), tu(t, n);
          }
        }),
        (ie = function (t, e) {
          return e();
        }),
        (Et = function (t, e, n) {
          switch (e) {
            case 'input':
              if ((nt(t, n), (e = n.name), 'radio' === n.type && null != e)) {
                for (n = t; n.parentNode; ) n = n.parentNode;
                for (
                  n = n.querySelectorAll(
                    'input[name=' + JSON.stringify('' + e) + '][type="radio"]'
                  ),
                    e = 0;
                  e < n.length;
                  e++
                ) {
                  var r = n[e];
                  if (r !== t && r.form === t.form) {
                    var i = ni(r);
                    if (!i) throw Error(o(90));
                    X(r), nt(r, i);
                  }
                }
              }
              break;
            case 'textarea':
              ut(t, n);
              break;
            case 'select':
              null != (e = n.value) && ot(t, !!n.multiple, e, !1);
          }
        }),
        (Ft = ys),
        (Lt = function (t, e, n, r, i) {
          var a = Ol;
          Ol |= 4;
          try {
            return Hi(98, t.bind(null, e, n, r, i));
          } finally {
            0 === (Ol = a) && (Vl(), Wi());
          }
        }),
        (Rt = function () {
          0 === (49 & Ol) &&
            ((function () {
              if (null !== es) {
                var t = es;
                (es = null),
                  t.forEach(function (t) {
                    (t.expiredLanes |= 24 & t.pendingLanes), hs(t, ji());
                  });
              }
              Wi();
            })(),
            As());
        }),
        (It = function (t, e) {
          var n = Ol;
          Ol |= 2;
          try {
            return t(e);
          } finally {
            0 === (Ol = n) && (Vl(), Wi());
          }
        });
      var au = { Events: [ti, ei, ni, Mt, At, As, { current: !1 }] },
        ou = {
          findFiberByHostInstance: Zr,
          bundleType: 0,
          version: '17.0.1',
          rendererPackageName: 'react-dom',
        },
        lu = {
          bundleType: ou.bundleType,
          version: ou.version,
          rendererPackageName: ou.rendererPackageName,
          rendererConfig: ou.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: w.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (t) {
            return null === (t = Zt(t)) ? null : t.stateNode;
          },
          findFiberByHostInstance:
            ou.findFiberByHostInstance ||
            function () {
              return null;
            },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
        };
      if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var su = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!su.isDisabled && su.supportsFiber)
          try {
            (_i = su.inject(lu)), (wi = su);
          } catch (vt) {}
      }
      (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = au),
        (e.createPortal = iu),
        (e.findDOMNode = function (t) {
          if (null == t) return null;
          if (1 === t.nodeType) return t;
          var e = t._reactInternals;
          if (void 0 === e) {
            if ('function' === typeof t.render) throw Error(o(188));
            throw Error(o(268, Object.keys(t)));
          }
          return (t = null === (t = Zt(e)) ? null : t.stateNode);
        }),
        (e.flushSync = function (t, e) {
          var n = Ol;
          if (0 !== (48 & n)) return t(e);
          Ol |= 1;
          try {
            if (t) return Hi(99, t.bind(null, e));
          } finally {
            (Ol = n), Wi();
          }
        }),
        (e.hydrate = function (t, e, n) {
          if (!nu(e)) throw Error(o(200));
          return ru(null, t, e, !0, n);
        }),
        (e.render = function (t, e, n) {
          if (!nu(e)) throw Error(o(200));
          return ru(null, t, e, !1, n);
        }),
        (e.unmountComponentAtNode = function (t) {
          if (!nu(t)) throw Error(o(40));
          return (
            !!t._reactRootContainer &&
            (ms(function () {
              ru(null, null, t, !1, function () {
                (t._reactRootContainer = null), (t[Xr] = null);
              });
            }),
            !0)
          );
        }),
        (e.unstable_batchedUpdates = ys),
        (e.unstable_createPortal = function (t, e) {
          return iu(
            t,
            e,
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null
          );
        }),
        (e.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
          if (!nu(n)) throw Error(o(200));
          if (null == t || void 0 === t._reactInternals) throw Error(o(38));
          return ru(t, e, n, !1, r);
        }),
        (e.version = '17.0.1');
    },
    function (t, e, n) {
      'use strict';
      var r, i, a, o;
      if (
        'object' === typeof performance &&
        'function' === typeof performance.now
      ) {
        var l = performance;
        e.unstable_now = function () {
          return l.now();
        };
      } else {
        var s = Date,
          u = s.now();
        e.unstable_now = function () {
          return s.now() - u;
        };
      }
      if (
        'undefined' === typeof window ||
        'function' !== typeof MessageChannel
      ) {
        var c = null,
          f = null,
          d = function t() {
            if (null !== c)
              try {
                var n = e.unstable_now();
                c(!0, n), (c = null);
              } catch (r) {
                throw (setTimeout(t, 0), r);
              }
          };
        (r = function (t) {
          null !== c ? setTimeout(r, 0, t) : ((c = t), setTimeout(d, 0));
        }),
          (i = function (t, e) {
            f = setTimeout(t, e);
          }),
          (a = function () {
            clearTimeout(f);
          }),
          (e.unstable_shouldYield = function () {
            return !1;
          }),
          (o = e.unstable_forceFrameRate = function () {});
      } else {
        var h = window.setTimeout,
          p = window.clearTimeout;
        if ('undefined' !== typeof console) {
          var g = window.cancelAnimationFrame;
          'function' !== typeof window.requestAnimationFrame &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
            ),
            'function' !== typeof g &&
              console.error(
                "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              );
        }
        var v = !1,
          y = null,
          m = -1,
          b = 5,
          _ = 0;
        (e.unstable_shouldYield = function () {
          return e.unstable_now() >= _;
        }),
          (o = function () {}),
          (e.unstable_forceFrameRate = function (t) {
            0 > t || 125 < t
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (b = 0 < t ? Math.floor(1e3 / t) : 5);
          });
        var w = new MessageChannel(),
          S = w.port2;
        (w.port1.onmessage = function () {
          if (null !== y) {
            var t = e.unstable_now();
            _ = t + b;
            try {
              y(!0, t) ? S.postMessage(null) : ((v = !1), (y = null));
            } catch (n) {
              throw (S.postMessage(null), n);
            }
          } else v = !1;
        }),
          (r = function (t) {
            (y = t), v || ((v = !0), S.postMessage(null));
          }),
          (i = function (t, n) {
            m = h(function () {
              t(e.unstable_now());
            }, n);
          }),
          (a = function () {
            p(m), (m = -1);
          });
      }
      function x(t, e) {
        var n = t.length;
        t.push(e);
        t: for (;;) {
          var r = (n - 1) >>> 1,
            i = t[r];
          if (!(void 0 !== i && 0 < P(i, e))) break t;
          (t[r] = e), (t[n] = i), (n = r);
        }
      }
      function k(t) {
        return void 0 === (t = t[0]) ? null : t;
      }
      function C(t) {
        var e = t[0];
        if (void 0 !== e) {
          var n = t.pop();
          if (n !== e) {
            t[0] = n;
            t: for (var r = 0, i = t.length; r < i; ) {
              var a = 2 * (r + 1) - 1,
                o = t[a],
                l = a + 1,
                s = t[l];
              if (void 0 !== o && 0 > P(o, n))
                void 0 !== s && 0 > P(s, o)
                  ? ((t[r] = s), (t[l] = n), (r = l))
                  : ((t[r] = o), (t[a] = n), (r = a));
              else {
                if (!(void 0 !== s && 0 > P(s, n))) break t;
                (t[r] = s), (t[l] = n), (r = l);
              }
            }
          }
          return e;
        }
        return null;
      }
      function P(t, e) {
        var n = t.sortIndex - e.sortIndex;
        return 0 !== n ? n : t.id - e.id;
      }
      var E = [],
        T = [],
        O = 1,
        N = null,
        M = 3,
        A = !1,
        F = !1,
        L = !1;
      function R(t) {
        for (var e = k(T); null !== e; ) {
          if (null === e.callback) C(T);
          else {
            if (!(e.startTime <= t)) break;
            C(T), (e.sortIndex = e.expirationTime), x(E, e);
          }
          e = k(T);
        }
      }
      function I(t) {
        if (((L = !1), R(t), !F))
          if (null !== k(E)) (F = !0), r(D);
          else {
            var e = k(T);
            null !== e && i(I, e.startTime - t);
          }
      }
      function D(t, n) {
        (F = !1), L && ((L = !1), a()), (A = !0);
        var r = M;
        try {
          for (
            R(n), N = k(E);
            null !== N &&
            (!(N.expirationTime > n) || (t && !e.unstable_shouldYield()));

          ) {
            var o = N.callback;
            if ('function' === typeof o) {
              (N.callback = null), (M = N.priorityLevel);
              var l = o(N.expirationTime <= n);
              (n = e.unstable_now()),
                'function' === typeof l ? (N.callback = l) : N === k(E) && C(E),
                R(n);
            } else C(E);
            N = k(E);
          }
          if (null !== N) var s = !0;
          else {
            var u = k(T);
            null !== u && i(I, u.startTime - n), (s = !1);
          }
          return s;
        } finally {
          (N = null), (M = r), (A = !1);
        }
      }
      var z = o;
      (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (t) {
          t.callback = null;
        }),
        (e.unstable_continueExecution = function () {
          F || A || ((F = !0), r(D));
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
          return M;
        }),
        (e.unstable_getFirstCallbackNode = function () {
          return k(E);
        }),
        (e.unstable_next = function (t) {
          switch (M) {
            case 1:
            case 2:
            case 3:
              var e = 3;
              break;
            default:
              e = M;
          }
          var n = M;
          M = e;
          try {
            return t();
          } finally {
            M = n;
          }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = z),
        (e.unstable_runWithPriority = function (t, e) {
          switch (t) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              t = 3;
          }
          var n = M;
          M = t;
          try {
            return e();
          } finally {
            M = n;
          }
        }),
        (e.unstable_scheduleCallback = function (t, n, o) {
          var l = e.unstable_now();
          switch (
            ('object' === typeof o && null !== o
              ? (o = 'number' === typeof (o = o.delay) && 0 < o ? l + o : l)
              : (o = l),
            t)
          ) {
            case 1:
              var s = -1;
              break;
            case 2:
              s = 250;
              break;
            case 5:
              s = 1073741823;
              break;
            case 4:
              s = 1e4;
              break;
            default:
              s = 5e3;
          }
          return (
            (t = {
              id: O++,
              callback: n,
              priorityLevel: t,
              startTime: o,
              expirationTime: (s = o + s),
              sortIndex: -1,
            }),
            o > l
              ? ((t.sortIndex = o),
                x(T, t),
                null === k(E) &&
                  t === k(T) &&
                  (L ? a() : (L = !0), i(I, o - l)))
              : ((t.sortIndex = s), x(E, t), F || A || ((F = !0), r(D))),
            t
          );
        }),
        (e.unstable_wrapCallback = function (t) {
          var e = M;
          return function () {
            var n = M;
            M = e;
            try {
              return t.apply(this, arguments);
            } finally {
              M = n;
            }
          };
        });
    },
    ,
    ,
    ,
    function (t, e, n) {
      'use strict';
      var r =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        };
      function i(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }
      function a(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ('object' !== typeof e && 'function' !== typeof e) ? t : e;
      }
      var o = n(1),
        l = n(29),
        s = n(54),
        u = n(57),
        c = n(58),
        f = n(35),
        d = f.applyNodeProps,
        h = f.toggleStrictMode,
        p = (function (t) {
          function e() {
            return i(this, e), a(this, t.apply(this, arguments));
          }
          return (
            (function (t, e) {
              if ('function' !== typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof e
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                e &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, e)
                    : (t.__proto__ = e));
            })(e, t),
            (e.prototype.componentDidMount = function () {
              l.isBrowser &&
                ((this._stage = new l.Stage({
                  width: this.props.width,
                  height: this.props.height,
                  container: this._tagRef,
                })),
                this._setRef(this._stage),
                d(this._stage, this.props),
                (this._mountNode = v.createContainer(this._stage)),
                v.updateContainer(this.props.children, this._mountNode, this));
            }),
            (e.prototype._setRef = function (t) {
              var e = this.props.forwardedRef;
              e && ('function' === typeof e ? e(t) : (e.current = t));
            }),
            (e.prototype.componentDidUpdate = function (t) {
              l.isBrowser &&
                (this._setRef(this._stage),
                d(this._stage, this.props, t),
                v.updateContainer(this.props.children, this._mountNode, this));
            }),
            (e.prototype.componentWillUnmount = function () {
              l.isBrowser &&
                (this._setRef(null),
                v.updateContainer(null, this._mountNode, this),
                this._stage.destroy());
            }),
            (e.prototype.getStage = function () {
              return this._stage;
            }),
            (e.prototype.render = function () {
              var t = this,
                e = this.props;
              return o.createElement('div', {
                ref: function (e) {
                  return (t._tagRef = e);
                },
                accessKey: e.accessKey,
                className: e.className,
                role: e.role,
                style: e.style,
                tabIndex: e.tabIndex,
                title: e.title,
              });
            }),
            e
          );
        })(o.Component),
        g = {};
      [
        'Layer',
        'FastLayer',
        'Group',
        'Label',
        'Rect',
        'Circle',
        'Ellipse',
        'Wedge',
        'Line',
        'Sprite',
        'Image',
        'Text',
        'TextPath',
        'Star',
        'Ring',
        'Arc',
        'Tag',
        'Path',
        'RegularPolygon',
        'Arrow',
        'Shape',
        'Transformer',
      ].forEach(function (t) {
        g[t] = t;
      });
      var v = s(c);
      v.injectIntoDevTools({
        findFiberByHostInstance: u.getClosestInstanceFromNode,
        bundleType: 0,
        version: o.version,
        rendererPackageName: 'react-konva',
        getInspectorDataForViewTag: function () {
          for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          console.log(e);
        },
      });
      var y = o.forwardRef(function (t, e) {
        return o.createElement(p, r({}, t, { forwardedRef: e }));
      });
      t.exports = r({}, g, {
        __matchRectVersion: !0,
        Stage: y,
        useStrictMode: h,
      });
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n(5),
        a = n(2),
        o = n(20),
        l = n(3),
        s = n(19),
        u = n(23),
        c = n(3),
        f = n(33),
        d = 'mouseout',
        h = 'mouseleave',
        p = 'mouseover',
        g = 'mouseenter',
        v = 'mousemove',
        y = 'mousedown',
        m = 'mouseup',
        b = 'pointermove',
        _ = 'pointerdown',
        w = 'pointerup',
        S = 'contextmenu',
        x = 'click',
        k = 'dblclick',
        C = 'touchstart',
        P = 'touchend',
        E = 'dbltap',
        T = 'touchmove',
        O = 'wheel',
        N = [
          g,
          y,
          v,
          m,
          d,
          C,
          T,
          P,
          p,
          O,
          S,
          _,
          b,
          w,
          'pointercancel',
          'lostpointercapture',
        ],
        M = N.length;
      function A(t, e) {
        t.content.addEventListener(
          e,
          function (n) {
            t['_' + e](n);
          },
          !1
        );
      }
      function F(t) {
        return (
          void 0 === t && (t = {}),
          (t.clipFunc || t.clipWidth || t.clipHeight) &&
            i.Util.warn(
              'Stage does not support clipping. Please use clip for Layers or Groups.'
            ),
          t
        );
      }
      e.stages = [];
      var L = (function (t) {
        function n(n) {
          var r = t.call(this, F(n)) || this;
          return (
            (r._pointerPositions = []),
            (r._changedPointerPositions = []),
            r._buildDOM(),
            r._bindContentEvents(),
            e.stages.push(r),
            r.on('widthChange.konva heightChange.konva', r._resizeDOM),
            r.on('visibleChange.konva', r._checkVisibility),
            r.on(
              'clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva',
              function () {
                F(r.attrs);
              }
            ),
            r._checkVisibility(),
            r
          );
        }
        return (
          r(n, t),
          (n.prototype._validateAdd = function (t) {
            var e = 'Layer' === t.getType(),
              n = 'FastLayer' === t.getType();
            e || n || i.Util.throw('You may only add layers to the stage.');
          }),
          (n.prototype._checkVisibility = function () {
            if (this.content) {
              var t = this.visible() ? '' : 'none';
              this.content.style.display = t;
            }
          }),
          (n.prototype.setContainer = function (t) {
            if ('string' === typeof t) {
              if ('.' === t.charAt(0)) {
                var e = t.slice(1);
                t = document.getElementsByClassName(e)[0];
              } else {
                var n;
                (n = '#' !== t.charAt(0) ? t : t.slice(1)),
                  (t = document.getElementById(n));
              }
              if (!t) throw 'Can not find container in document with id ' + n;
            }
            return (
              this._setAttr('container', t),
              this.content &&
                (this.content.parentElement &&
                  this.content.parentElement.removeChild(this.content),
                t.appendChild(this.content)),
              this
            );
          }),
          (n.prototype.shouldDrawHit = function () {
            return !0;
          }),
          (n.prototype.clear = function () {
            var t,
              e = this.children,
              n = e.length;
            for (t = 0; t < n; t++) e[t].clear();
            return this;
          }),
          (n.prototype.clone = function (t) {
            return (
              t || (t = {}),
              (t.container = document.createElement('div')),
              o.Container.prototype.clone.call(this, t)
            );
          }),
          (n.prototype.destroy = function () {
            t.prototype.destroy.call(this);
            var n = this.content;
            n && i.Util._isInDocument(n) && this.container().removeChild(n);
            var r = e.stages.indexOf(this);
            return r > -1 && e.stages.splice(r, 1), this;
          }),
          (n.prototype.getPointerPosition = function () {
            var t =
              this._pointerPositions[0] || this._changedPointerPositions[0];
            return t
              ? { x: t.x, y: t.y }
              : (i.Util.warn(
                  'Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);'
                ),
                null);
          }),
          (n.prototype._getPointerById = function (t) {
            return this._pointerPositions.find(function (e) {
              return e.id === t;
            });
          }),
          (n.prototype.getPointersPositions = function () {
            return this._pointerPositions;
          }),
          (n.prototype.getStage = function () {
            return this;
          }),
          (n.prototype.getContent = function () {
            return this.content;
          }),
          (n.prototype._toKonvaCanvas = function (t) {
            var e = (t = t || {}).x || 0,
              n = t.y || 0,
              r = new s.SceneCanvas({
                width: t.width || this.width(),
                height: t.height || this.height(),
                pixelRatio: t.pixelRatio || 1,
              }),
              i = r.getContext()._context,
              a = this.children;
            return (
              (e || n) && i.translate(-1 * e, -1 * n),
              a.each(function (r) {
                if (r.isVisible()) {
                  var a = r._toKonvaCanvas(t);
                  i.drawImage(
                    a._canvas,
                    e,
                    n,
                    a.getWidth() / a.getPixelRatio(),
                    a.getHeight() / a.getPixelRatio()
                  );
                }
              }),
              r
            );
          }),
          (n.prototype.getIntersection = function (t, e) {
            if (!t) return null;
            var n,
              r,
              i = this.children;
            for (n = i.length - 1; n >= 0; n--)
              if ((r = i[n].getIntersection(t, e))) return r;
            return null;
          }),
          (n.prototype._resizeDOM = function () {
            var t = this.width(),
              e = this.height();
            this.content &&
              ((this.content.style.width = t + 'px'),
              (this.content.style.height = e + 'px')),
              this.bufferCanvas.setSize(t, e),
              this.bufferHitCanvas.setSize(t, e),
              this.children.each(function (n) {
                n.setSize({ width: t, height: e }), n.draw();
              });
          }),
          (n.prototype.add = function (e) {
            if (arguments.length > 1) {
              for (var n = 0; n < arguments.length; n++) this.add(arguments[n]);
              return this;
            }
            t.prototype.add.call(this, e);
            var r = this.children.length;
            return (
              r > 5 &&
                i.Util.warn(
                  'The stage has ' +
                    r +
                    ' layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group.'
                ),
              e.setSize({ width: this.width(), height: this.height() }),
              e.draw(),
              l.Konva.isBrowser && this.content.appendChild(e.canvas._canvas),
              this
            );
          }),
          (n.prototype.getParent = function () {
            return null;
          }),
          (n.prototype.getLayer = function () {
            return null;
          }),
          (n.prototype.hasPointerCapture = function (t) {
            return f.hasPointerCapture(t, this);
          }),
          (n.prototype.setPointerCapture = function (t) {
            f.setPointerCapture(t, this);
          }),
          (n.prototype.releaseCapture = function (t) {
            f.releaseCapture(t, this);
          }),
          (n.prototype.getLayers = function () {
            return this.getChildren();
          }),
          (n.prototype._bindContentEvents = function () {
            if (l.Konva.isBrowser) for (var t = 0; t < M; t++) A(this, N[t]);
          }),
          (n.prototype._mouseenter = function (t) {
            this.setPointersPositions(t),
              this._fire(g, { evt: t, target: this, currentTarget: this });
          }),
          (n.prototype._mouseover = function (t) {
            this.setPointersPositions(t),
              this._fire('contentMouseover', { evt: t }),
              this._fire(p, { evt: t, target: this, currentTarget: this });
          }),
          (n.prototype._mouseout = function (t) {
            var e;
            this.setPointersPositions(t);
            var n = (
                null === (e = this.targetShape) || void 0 === e
                  ? void 0
                  : e.getStage()
              )
                ? this.targetShape
                : null,
              r = !u.DD.isDragging || l.Konva.hitOnDragEnabled;
            n && r
              ? (n._fireAndBubble(d, { evt: t }),
                n._fireAndBubble(h, { evt: t }),
                this._fire(h, { evt: t, target: this, currentTarget: this }),
                (this.targetShape = null))
              : r &&
                (this._fire(h, { evt: t, target: this, currentTarget: this }),
                this._fire(d, { evt: t, target: this, currentTarget: this })),
              (this.pointerPos = void 0),
              (this._pointerPositions = []),
              this._fire('contentMouseout', { evt: t });
          }),
          (n.prototype._mousemove = function (t) {
            var e;
            if (l.Konva.UA.ieMobile) return this._touchmove(t);
            this.setPointersPositions(t);
            var n,
              r = i.Util._getFirstPointerId(t),
              a = (
                null === (e = this.targetShape) || void 0 === e
                  ? void 0
                  : e.getStage()
              )
                ? this.targetShape
                : null,
              o = !u.DD.isDragging || l.Konva.hitOnDragEnabled;
            if (o) {
              if (
                (n = this.getIntersection(this.getPointerPosition())) &&
                n.isListening()
              )
                o && a !== n
                  ? (a &&
                      (a._fireAndBubble(d, { evt: t, pointerId: r }, n),
                      a._fireAndBubble(h, { evt: t, pointerId: r }, n)),
                    n._fireAndBubble(p, { evt: t, pointerId: r }, a),
                    n._fireAndBubble(g, { evt: t, pointerId: r }, a),
                    n._fireAndBubble(v, { evt: t, pointerId: r }),
                    (this.targetShape = n))
                  : n._fireAndBubble(v, { evt: t, pointerId: r });
              else
                a &&
                  o &&
                  (a._fireAndBubble(d, { evt: t, pointerId: r }),
                  a._fireAndBubble(h, { evt: t, pointerId: r }),
                  this._fire(p, {
                    evt: t,
                    target: this,
                    currentTarget: this,
                    pointerId: r,
                  }),
                  (this.targetShape = null)),
                  this._fire(v, {
                    evt: t,
                    target: this,
                    currentTarget: this,
                    pointerId: r,
                  });
              this._fire('contentMousemove', { evt: t });
            }
            t.cancelable && t.preventDefault();
          }),
          (n.prototype._mousedown = function (t) {
            if (l.Konva.UA.ieMobile) return this._touchstart(t);
            this.setPointersPositions(t);
            var e = i.Util._getFirstPointerId(t),
              n = this.getIntersection(this.getPointerPosition());
            (u.DD.justDragged = !1),
              (l.Konva.listenClickTap = !0),
              n && n.isListening()
                ? ((this.clickStartShape = n),
                  n._fireAndBubble(y, { evt: t, pointerId: e }))
                : this._fire(y, {
                    evt: t,
                    target: this,
                    currentTarget: this,
                    pointerId: e,
                  }),
              this._fire('contentMousedown', { evt: t });
          }),
          (n.prototype._mouseup = function (t) {
            if (l.Konva.UA.ieMobile) return this._touchend(t);
            this.setPointersPositions(t);
            var e = i.Util._getFirstPointerId(t),
              n = this.getIntersection(this.getPointerPosition()),
              r = this.clickStartShape,
              a = this.clickEndShape,
              o = !1;
            l.Konva.inDblClickWindow
              ? ((o = !0), clearTimeout(this.dblTimeout))
              : u.DD.justDragged ||
                ((l.Konva.inDblClickWindow = !0),
                clearTimeout(this.dblTimeout)),
              (this.dblTimeout = setTimeout(function () {
                l.Konva.inDblClickWindow = !1;
              }, l.Konva.dblClickWindow)),
              n && n.isListening()
                ? ((this.clickEndShape = n),
                  n._fireAndBubble(m, { evt: t, pointerId: e }),
                  l.Konva.listenClickTap &&
                    r &&
                    r._id === n._id &&
                    (n._fireAndBubble(x, { evt: t, pointerId: e }),
                    o &&
                      a &&
                      a === n &&
                      n._fireAndBubble(k, { evt: t, pointerId: e })))
                : ((this.clickEndShape = null),
                  this._fire(m, {
                    evt: t,
                    target: this,
                    currentTarget: this,
                    pointerId: e,
                  }),
                  l.Konva.listenClickTap &&
                    this._fire(x, {
                      evt: t,
                      target: this,
                      currentTarget: this,
                      pointerId: e,
                    }),
                  o &&
                    this._fire(k, {
                      evt: t,
                      target: this,
                      currentTarget: this,
                      pointerId: e,
                    })),
              this._fire('contentMouseup', { evt: t }),
              l.Konva.listenClickTap &&
                (this._fire('contentClick', { evt: t }),
                o && this._fire('contentDblclick', { evt: t })),
              (l.Konva.listenClickTap = !1),
              t.cancelable && t.preventDefault();
          }),
          (n.prototype._contextmenu = function (t) {
            this.setPointersPositions(t);
            var e = this.getIntersection(this.getPointerPosition());
            e && e.isListening()
              ? e._fireAndBubble(S, { evt: t })
              : this._fire(S, { evt: t, target: this, currentTarget: this }),
              this._fire('contentContextmenu', { evt: t });
          }),
          (n.prototype._touchstart = function (t) {
            var e = this;
            this.setPointersPositions(t);
            var n = !1;
            this._changedPointerPositions.forEach(function (r) {
              var i = e.getIntersection(r);
              (l.Konva.listenClickTap = !0),
                (u.DD.justDragged = !1),
                i &&
                  i.isListening() &&
                  (l.Konva.captureTouchEventsEnabled &&
                    i.setPointerCapture(r.id),
                  (e.tapStartShape = i),
                  i._fireAndBubble(C, { evt: t, pointerId: r.id }, e),
                  (n = !0),
                  i.isListening() &&
                    i.preventDefault() &&
                    t.cancelable &&
                    t.preventDefault());
            }),
              n ||
                this._fire(C, {
                  evt: t,
                  target: this,
                  currentTarget: this,
                  pointerId: this._changedPointerPositions[0].id,
                }),
              this._fire('contentTouchstart', { evt: t });
          }),
          (n.prototype._touchmove = function (t) {
            var e = this;
            if (
              (this.setPointersPositions(t),
              !u.DD.isDragging || l.Konva.hitOnDragEnabled)
            ) {
              var n = !1,
                r = {};
              this._changedPointerPositions.forEach(function (i) {
                var a = f.getCapturedShape(i.id) || e.getIntersection(i);
                a &&
                  a.isListening() &&
                  (r[a._id] ||
                    ((r[a._id] = !0),
                    a._fireAndBubble(T, { evt: t, pointerId: i.id }),
                    (n = !0),
                    a.isListening() &&
                      a.preventDefault() &&
                      t.cancelable &&
                      t.preventDefault()));
              }),
                n ||
                  this._fire(T, {
                    evt: t,
                    target: this,
                    currentTarget: this,
                    pointerId: this._changedPointerPositions[0].id,
                  }),
                this._fire('contentTouchmove', { evt: t });
            }
            u.DD.isDragging &&
              u.DD.node.preventDefault() &&
              t.cancelable &&
              t.preventDefault();
          }),
          (n.prototype._touchend = function (t) {
            var e = this;
            this.setPointersPositions(t);
            var n = this.tapEndShape,
              r = !1;
            l.Konva.inDblClickWindow
              ? ((r = !0), clearTimeout(this.dblTimeout))
              : u.DD.justDragged ||
                ((l.Konva.inDblClickWindow = !0),
                clearTimeout(this.dblTimeout)),
              (this.dblTimeout = setTimeout(function () {
                l.Konva.inDblClickWindow = !1;
              }, l.Konva.dblClickWindow));
            var i = !1,
              a = {},
              o = !1,
              s = !1;
            this._changedPointerPositions.forEach(function (u) {
              var c = f.getCapturedShape(u.id) || e.getIntersection(u);
              c && c.releaseCapture(u.id),
                c &&
                  c.isListening() &&
                  (a[c._id] ||
                    ((a[c._id] = !0),
                    (e.tapEndShape = c),
                    c._fireAndBubble(P, { evt: t, pointerId: u.id }),
                    (i = !0),
                    l.Konva.listenClickTap &&
                      c === e.tapStartShape &&
                      ((o = !0),
                      c._fireAndBubble('tap', { evt: t, pointerId: u.id }),
                      r &&
                        n &&
                        n === c &&
                        ((s = !0),
                        c._fireAndBubble(E, { evt: t, pointerId: u.id }))),
                    c.isListening() &&
                      c.preventDefault() &&
                      t.cancelable &&
                      t.preventDefault()));
            }),
              i ||
                this._fire(P, {
                  evt: t,
                  target: this,
                  currentTarget: this,
                  pointerId: this._changedPointerPositions[0].id,
                }),
              l.Konva.listenClickTap &&
                !o &&
                ((this.tapEndShape = null),
                this._fire('tap', {
                  evt: t,
                  target: this,
                  currentTarget: this,
                  pointerId: this._changedPointerPositions[0].id,
                })),
              r &&
                !s &&
                this._fire(E, {
                  evt: t,
                  target: this,
                  currentTarget: this,
                  pointerId: this._changedPointerPositions[0].id,
                }),
              this._fire('contentTouchend', { evt: t }),
              l.Konva.listenClickTap &&
                (this._fire('contentTap', { evt: t }),
                r && this._fire('contentDbltap', { evt: t })),
              this.preventDefault() && t.cancelable && t.preventDefault(),
              (l.Konva.listenClickTap = !1);
          }),
          (n.prototype._wheel = function (t) {
            this.setPointersPositions(t);
            var e = this.getIntersection(this.getPointerPosition());
            e && e.isListening()
              ? e._fireAndBubble(O, { evt: t })
              : this._fire(O, { evt: t, target: this, currentTarget: this }),
              this._fire('contentWheel', { evt: t });
          }),
          (n.prototype._pointerdown = function (t) {
            if (l.Konva._pointerEventsEnabled) {
              this.setPointersPositions(t);
              var e =
                f.getCapturedShape(t.pointerId) ||
                this.getIntersection(this.getPointerPosition());
              e && e._fireAndBubble(_, f.createEvent(t));
            }
          }),
          (n.prototype._pointermove = function (t) {
            if (l.Konva._pointerEventsEnabled) {
              this.setPointersPositions(t);
              var e =
                f.getCapturedShape(t.pointerId) ||
                this.getIntersection(this.getPointerPosition());
              e && e._fireAndBubble(b, f.createEvent(t));
            }
          }),
          (n.prototype._pointerup = function (t) {
            if (l.Konva._pointerEventsEnabled) {
              this.setPointersPositions(t);
              var e =
                f.getCapturedShape(t.pointerId) ||
                this.getIntersection(this.getPointerPosition());
              e && e._fireAndBubble(w, f.createEvent(t)),
                f.releaseCapture(t.pointerId);
            }
          }),
          (n.prototype._pointercancel = function (t) {
            if (l.Konva._pointerEventsEnabled) {
              this.setPointersPositions(t);
              var e =
                f.getCapturedShape(t.pointerId) ||
                this.getIntersection(this.getPointerPosition());
              e && e._fireAndBubble(w, f.createEvent(t)),
                f.releaseCapture(t.pointerId);
            }
          }),
          (n.prototype._lostpointercapture = function (t) {
            f.releaseCapture(t.pointerId);
          }),
          (n.prototype.setPointersPositions = function (t) {
            var e = this,
              n = this._getContentPosition(),
              r = null,
              a = null;
            void 0 !== (t = t || window.event).touches
              ? ((this._pointerPositions = []),
                (this._changedPointerPositions = []),
                i.Collection.prototype.each.call(t.touches, function (t) {
                  e._pointerPositions.push({
                    id: t.identifier,
                    x: (t.clientX - n.left) / n.scaleX,
                    y: (t.clientY - n.top) / n.scaleY,
                  });
                }),
                i.Collection.prototype.each.call(
                  t.changedTouches || t.touches,
                  function (t) {
                    e._changedPointerPositions.push({
                      id: t.identifier,
                      x: (t.clientX - n.left) / n.scaleX,
                      y: (t.clientY - n.top) / n.scaleY,
                    });
                  }
                ))
              : ((r = (t.clientX - n.left) / n.scaleX),
                (a = (t.clientY - n.top) / n.scaleY),
                (this.pointerPos = { x: r, y: a }),
                (this._pointerPositions = [
                  { x: r, y: a, id: i.Util._getFirstPointerId(t) },
                ]),
                (this._changedPointerPositions = [
                  { x: r, y: a, id: i.Util._getFirstPointerId(t) },
                ]));
          }),
          (n.prototype._setPointerPosition = function (t) {
            i.Util.warn(
              'Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'
            ),
              this.setPointersPositions(t);
          }),
          (n.prototype._getContentPosition = function () {
            if (!this.content || !this.content.getBoundingClientRect)
              return { top: 0, left: 0, scaleX: 1, scaleY: 1 };
            var t = this.content.getBoundingClientRect();
            return {
              top: t.top,
              left: t.left,
              scaleX: t.width / this.content.clientWidth || 1,
              scaleY: t.height / this.content.clientHeight || 1,
            };
          }),
          (n.prototype._buildDOM = function () {
            if (
              ((this.bufferCanvas = new s.SceneCanvas({
                width: this.width(),
                height: this.height(),
              })),
              (this.bufferHitCanvas = new s.HitCanvas({
                pixelRatio: 1,
                width: this.width(),
                height: this.height(),
              })),
              l.Konva.isBrowser)
            ) {
              var t = this.container();
              if (!t) throw 'Stage has no container. A container is required.';
              (t.innerHTML = ''),
                (this.content = document.createElement('div')),
                (this.content.style.position = 'relative'),
                (this.content.style.userSelect = 'none'),
                (this.content.className = 'konvajs-content'),
                this.content.setAttribute('role', 'presentation'),
                t.appendChild(this.content),
                this._resizeDOM();
            }
          }),
          (n.prototype.cache = function () {
            return (
              i.Util.warn(
                'Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.'
              ),
              this
            );
          }),
          (n.prototype.clearCache = function () {
            return this;
          }),
          (n.prototype.batchDraw = function () {
            return (
              this.children.each(function (t) {
                t.batchDraw();
              }),
              this
            );
          }),
          n
        );
      })(o.Container);
      (e.Stage = L),
        (L.prototype.nodeType = 'Stage'),
        c._registerNode(L),
        a.Factory.addGetterSetter(L, 'container');
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n(5),
        a = n(34),
        o = n(3),
        l = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              n.listening(!1),
              i.Util.warn(
                'Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.'
              ),
              n
            );
          }
          return r(e, t), e;
        })(a.Layer);
      (e.FastLayer = l),
        (l.prototype.nodeType = 'FastLayer'),
        o._registerNode(l),
        i.Collection.mapMethods(l);
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(5),
        i = n(25),
        a = n(6),
        o = n(3),
        l = { node: 1, duration: 1, easing: 1, onFinish: 1, yoyo: 1 },
        s = 0,
        u = ['fill', 'stroke', 'shadowColor'],
        c = (function () {
          function t(t, e, n, r, i, a, o) {
            (this.prop = t),
              (this.propFunc = e),
              (this.begin = r),
              (this._pos = r),
              (this.duration = a),
              (this._change = 0),
              (this.prevPos = 0),
              (this.yoyo = o),
              (this._time = 0),
              (this._position = 0),
              (this._startTime = 0),
              (this._finish = 0),
              (this.func = n),
              (this._change = i - this.begin),
              this.pause();
          }
          return (
            (t.prototype.fire = function (t) {
              var e = this[t];
              e && e();
            }),
            (t.prototype.setTime = function (t) {
              t > this.duration
                ? this.yoyo
                  ? ((this._time = this.duration), this.reverse())
                  : this.finish()
                : t < 0
                ? this.yoyo
                  ? ((this._time = 0), this.play())
                  : this.reset()
                : ((this._time = t), this.update());
            }),
            (t.prototype.getTime = function () {
              return this._time;
            }),
            (t.prototype.setPosition = function (t) {
              (this.prevPos = this._pos), this.propFunc(t), (this._pos = t);
            }),
            (t.prototype.getPosition = function (t) {
              return (
                void 0 === t && (t = this._time),
                this.func(t, this.begin, this._change, this.duration)
              );
            }),
            (t.prototype.play = function () {
              (this.state = 2),
                (this._startTime = this.getTimer() - this._time),
                this.onEnterFrame(),
                this.fire('onPlay');
            }),
            (t.prototype.reverse = function () {
              (this.state = 3),
                (this._time = this.duration - this._time),
                (this._startTime = this.getTimer() - this._time),
                this.onEnterFrame(),
                this.fire('onReverse');
            }),
            (t.prototype.seek = function (t) {
              this.pause(),
                (this._time = t),
                this.update(),
                this.fire('onSeek');
            }),
            (t.prototype.reset = function () {
              this.pause(),
                (this._time = 0),
                this.update(),
                this.fire('onReset');
            }),
            (t.prototype.finish = function () {
              this.pause(),
                (this._time = this.duration),
                this.update(),
                this.fire('onFinish');
            }),
            (t.prototype.update = function () {
              this.setPosition(this.getPosition(this._time)),
                this.fire('onUpdate');
            }),
            (t.prototype.onEnterFrame = function () {
              var t = this.getTimer() - this._startTime;
              2 === this.state
                ? this.setTime(t)
                : 3 === this.state && this.setTime(this.duration - t);
            }),
            (t.prototype.pause = function () {
              (this.state = 1), this.fire('onPause');
            }),
            (t.prototype.getTimer = function () {
              return new Date().getTime();
            }),
            t
          );
        })(),
        f = (function () {
          function t(n) {
            var a,
              u,
              f = this,
              d = n.node,
              h = d._id,
              p = n.easing || e.Easings.Linear,
              g = !!n.yoyo;
            (a =
              'undefined' === typeof n.duration
                ? 0.3
                : 0 === n.duration
                ? 0.001
                : n.duration),
              (this.node = d),
              (this._id = s++);
            var v =
              d.getLayer() ||
              (d instanceof o.Konva.Stage ? d.getLayers() : null);
            for (u in (v ||
              r.Util.error(
                'Tween constructor have `node` that is not in a layer. Please add node into layer first.'
              ),
            (this.anim = new i.Animation(function () {
              f.tween.onEnterFrame();
            }, v)),
            (this.tween = new c(
              u,
              function (t) {
                f._tweenFunc(t);
              },
              p,
              0,
              1,
              1e3 * a,
              g
            )),
            this._addListeners(),
            t.attrs[h] || (t.attrs[h] = {}),
            t.attrs[h][this._id] || (t.attrs[h][this._id] = {}),
            t.tweens[h] || (t.tweens[h] = {}),
            n))
              void 0 === l[u] && this._addAttr(u, n[u]);
            this.reset(),
              (this.onFinish = n.onFinish),
              (this.onReset = n.onReset),
              (this.onUpdate = n.onUpdate);
          }
          return (
            (t.prototype._addAttr = function (e, n) {
              var i,
                a,
                o,
                l,
                s,
                c,
                f,
                d,
                h = this.node,
                p = h._id;
              if (
                ((o = t.tweens[p][e]) && delete t.attrs[p][o][e],
                (i = h.getAttr(e)),
                r.Util._isArray(n))
              )
                if (
                  ((a = []),
                  (s = Math.max(n.length, i.length)),
                  'points' === e &&
                    n.length !== i.length &&
                    (n.length > i.length
                      ? ((f = i),
                        (i = r.Util._prepareArrayForTween(i, n, h.closed())))
                      : ((c = n),
                        (n = r.Util._prepareArrayForTween(n, i, h.closed())))),
                  0 === e.indexOf('fill'))
                )
                  for (l = 0; l < s; l++)
                    if (l % 2 === 0) a.push(n[l] - i[l]);
                    else {
                      var g = r.Util.colorToRGBA(i[l]);
                      (d = r.Util.colorToRGBA(n[l])),
                        (i[l] = g),
                        a.push({
                          r: d.r - g.r,
                          g: d.g - g.g,
                          b: d.b - g.b,
                          a: d.a - g.a,
                        });
                    }
                else for (l = 0; l < s; l++) a.push(n[l] - i[l]);
              else
                -1 !== u.indexOf(e)
                  ? ((i = r.Util.colorToRGBA(i)),
                    (a = {
                      r: (d = r.Util.colorToRGBA(n)).r - i.r,
                      g: d.g - i.g,
                      b: d.b - i.b,
                      a: d.a - i.a,
                    }))
                  : (a = n - i);
              (t.attrs[p][this._id][e] = {
                start: i,
                diff: a,
                end: n,
                trueEnd: c,
                trueStart: f,
              }),
                (t.tweens[p][e] = this._id);
            }),
            (t.prototype._tweenFunc = function (e) {
              var n,
                i,
                a,
                o,
                l,
                s,
                c,
                f,
                d = this.node,
                h = t.attrs[d._id][this._id];
              for (n in h) {
                if (
                  ((a = (i = h[n]).start),
                  (o = i.diff),
                  (f = i.end),
                  r.Util._isArray(a))
                )
                  if (
                    ((l = []),
                    (c = Math.max(a.length, f.length)),
                    0 === n.indexOf('fill'))
                  )
                    for (s = 0; s < c; s++)
                      s % 2 === 0
                        ? l.push((a[s] || 0) + o[s] * e)
                        : l.push(
                            'rgba(' +
                              Math.round(a[s].r + o[s].r * e) +
                              ',' +
                              Math.round(a[s].g + o[s].g * e) +
                              ',' +
                              Math.round(a[s].b + o[s].b * e) +
                              ',' +
                              (a[s].a + o[s].a * e) +
                              ')'
                          );
                  else for (s = 0; s < c; s++) l.push((a[s] || 0) + o[s] * e);
                else
                  l =
                    -1 !== u.indexOf(n)
                      ? 'rgba(' +
                        Math.round(a.r + o.r * e) +
                        ',' +
                        Math.round(a.g + o.g * e) +
                        ',' +
                        Math.round(a.b + o.b * e) +
                        ',' +
                        (a.a + o.a * e) +
                        ')'
                      : a + o * e;
                d.setAttr(n, l);
              }
            }),
            (t.prototype._addListeners = function () {
              var e = this;
              (this.tween.onPlay = function () {
                e.anim.start();
              }),
                (this.tween.onReverse = function () {
                  e.anim.start();
                }),
                (this.tween.onPause = function () {
                  e.anim.stop();
                }),
                (this.tween.onFinish = function () {
                  var n = e.node,
                    r = t.attrs[n._id][e._id];
                  r.points &&
                    r.points.trueEnd &&
                    n.setAttr('points', r.points.trueEnd),
                    e.onFinish && e.onFinish.call(e);
                }),
                (this.tween.onReset = function () {
                  var n = e.node,
                    r = t.attrs[n._id][e._id];
                  r.points &&
                    r.points.trueStart &&
                    n.points(r.points.trueStart),
                    e.onReset && e.onReset();
                }),
                (this.tween.onUpdate = function () {
                  e.onUpdate && e.onUpdate.call(e);
                });
            }),
            (t.prototype.play = function () {
              return this.tween.play(), this;
            }),
            (t.prototype.reverse = function () {
              return this.tween.reverse(), this;
            }),
            (t.prototype.reset = function () {
              return this.tween.reset(), this;
            }),
            (t.prototype.seek = function (t) {
              return this.tween.seek(1e3 * t), this;
            }),
            (t.prototype.pause = function () {
              return this.tween.pause(), this;
            }),
            (t.prototype.finish = function () {
              return this.tween.finish(), this;
            }),
            (t.prototype.destroy = function () {
              var e,
                n = this.node._id,
                r = this._id,
                i = t.tweens[n];
              for (e in (this.pause(), i)) delete t.tweens[n][e];
              delete t.attrs[n][r];
            }),
            (t.attrs = {}),
            (t.tweens = {}),
            t
          );
        })();
      (e.Tween = f),
        (a.Node.prototype.to = function (t) {
          var e = t.onFinish;
          (t.node = this),
            (t.onFinish = function () {
              this.destroy(), e && e();
            }),
            new f(t).play();
        }),
        (e.Easings = {
          BackEaseIn: function (t, e, n, r) {
            var i = 1.70158;
            return n * (t /= r) * t * ((i + 1) * t - i) + e;
          },
          BackEaseOut: function (t, e, n, r) {
            var i = 1.70158;
            return n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e;
          },
          BackEaseInOut: function (t, e, n, r) {
            var i = 1.70158;
            return (t /= r / 2) < 1
              ? (n / 2) * (t * t * ((1 + (i *= 1.525)) * t - i)) + e
              : (n / 2) * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e;
          },
          ElasticEaseIn: function (t, e, n, r, i, a) {
            var o = 0;
            return 0 === t
              ? e
              : 1 === (t /= r)
              ? e + n
              : (a || (a = 0.3 * r),
                !i || i < Math.abs(n)
                  ? ((i = n), (o = a / 4))
                  : (o = (a / (2 * Math.PI)) * Math.asin(n / i)),
                -i *
                  Math.pow(2, 10 * (t -= 1)) *
                  Math.sin(((t * r - o) * (2 * Math.PI)) / a) +
                  e);
          },
          ElasticEaseOut: function (t, e, n, r, i, a) {
            var o = 0;
            return 0 === t
              ? e
              : 1 === (t /= r)
              ? e + n
              : (a || (a = 0.3 * r),
                !i || i < Math.abs(n)
                  ? ((i = n), (o = a / 4))
                  : (o = (a / (2 * Math.PI)) * Math.asin(n / i)),
                i *
                  Math.pow(2, -10 * t) *
                  Math.sin(((t * r - o) * (2 * Math.PI)) / a) +
                  n +
                  e);
          },
          ElasticEaseInOut: function (t, e, n, r, i, a) {
            var o = 0;
            return 0 === t
              ? e
              : 2 === (t /= r / 2)
              ? e + n
              : (a || (a = r * (0.3 * 1.5)),
                !i || i < Math.abs(n)
                  ? ((i = n), (o = a / 4))
                  : (o = (a / (2 * Math.PI)) * Math.asin(n / i)),
                t < 1
                  ? i *
                      Math.pow(2, 10 * (t -= 1)) *
                      Math.sin(((t * r - o) * (2 * Math.PI)) / a) *
                      -0.5 +
                    e
                  : i *
                      Math.pow(2, -10 * (t -= 1)) *
                      Math.sin(((t * r - o) * (2 * Math.PI)) / a) *
                      0.5 +
                    n +
                    e);
          },
          BounceEaseOut: function (t, e, n, r) {
            return (t /= r) < 1 / 2.75
              ? n * (7.5625 * t * t) + e
              : t < 2 / 2.75
              ? n * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + e
              : t < 2.5 / 2.75
              ? n * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + e
              : n * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + e;
          },
          BounceEaseIn: function (t, n, r, i) {
            return r - e.Easings.BounceEaseOut(i - t, 0, r, i) + n;
          },
          BounceEaseInOut: function (t, n, r, i) {
            return t < i / 2
              ? 0.5 * e.Easings.BounceEaseIn(2 * t, 0, r, i) + n
              : 0.5 * e.Easings.BounceEaseOut(2 * t - i, 0, r, i) + 0.5 * r + n;
          },
          EaseIn: function (t, e, n, r) {
            return n * (t /= r) * t + e;
          },
          EaseOut: function (t, e, n, r) {
            return -n * (t /= r) * (t - 2) + e;
          },
          EaseInOut: function (t, e, n, r) {
            return (t /= r / 2) < 1
              ? (n / 2) * t * t + e
              : (-n / 2) * (--t * (t - 2) - 1) + e;
          },
          StrongEaseIn: function (t, e, n, r) {
            return n * (t /= r) * t * t * t * t + e;
          },
          StrongEaseOut: function (t, e, n, r) {
            return n * ((t = t / r - 1) * t * t * t * t + 1) + e;
          },
          StrongEaseInOut: function (t, e, n, r) {
            return (t /= r / 2) < 1
              ? (n / 2) * t * t * t * t * t + e
              : (n / 2) * ((t -= 2) * t * t * t * t + 2) + e;
          },
          Linear: function (t, e, n, r) {
            return (n * t) / r + e;
          },
        });
    },
    function (t, e, n) {
      'use strict';
      t.exports = n(55);
    },
    function (t, e, n) {
      (function (t) {
        t.exports = function (e) {
          var r = {},
            i = n(18),
            a = n(1),
            o = n(22);
          function l(t) {
            for (
              var e =
                  'https://reactjs.org/docs/error-decoder.html?invariant=' + t,
                n = 1;
              n < arguments.length;
              n++
            )
              e += '&args[]=' + encodeURIComponent(arguments[n]);
            return (
              'Minified React error #' +
              t +
              '; visit ' +
              e +
              ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
            );
          }
          var s = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            u = 60103,
            c = 60106,
            f = 60107,
            d = 60108,
            h = 60114,
            p = 60109,
            g = 60110,
            v = 60112,
            y = 60113,
            m = 60120,
            b = 60115,
            _ = 60116,
            w = 60121,
            S = 60129,
            x = 60130,
            k = 60131;
          if ('function' === typeof Symbol && Symbol.for) {
            var C = Symbol.for;
            (u = C('react.element')),
              (c = C('react.portal')),
              (f = C('react.fragment')),
              (d = C('react.strict_mode')),
              (h = C('react.profiler')),
              (p = C('react.provider')),
              (g = C('react.context')),
              (v = C('react.forward_ref')),
              (y = C('react.suspense')),
              (m = C('react.suspense_list')),
              (b = C('react.memo')),
              (_ = C('react.lazy')),
              (w = C('react.block')),
              C('react.scope'),
              (S = C('react.debug_trace_mode')),
              (x = C('react.offscreen')),
              (k = C('react.legacy_hidden'));
          }
          var P = 'function' === typeof Symbol && Symbol.iterator;
          function E(t) {
            return null === t || 'object' !== typeof t
              ? null
              : 'function' === typeof (t = (P && t[P]) || t['@@iterator'])
              ? t
              : null;
          }
          function T(t) {
            if (null == t) return null;
            if ('function' === typeof t) return t.displayName || t.name || null;
            if ('string' === typeof t) return t;
            switch (t) {
              case f:
                return 'Fragment';
              case c:
                return 'Portal';
              case h:
                return 'Profiler';
              case d:
                return 'StrictMode';
              case y:
                return 'Suspense';
              case m:
                return 'SuspenseList';
            }
            if ('object' === typeof t)
              switch (t.$$typeof) {
                case g:
                  return (t.displayName || 'Context') + '.Consumer';
                case p:
                  return (t._context.displayName || 'Context') + '.Provider';
                case v:
                  var e = t.render;
                  return (
                    (e = e.displayName || e.name || ''),
                    t.displayName ||
                      ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
                  );
                case b:
                  return T(t.type);
                case w:
                  return T(t._render);
                case _:
                  (e = t._payload), (t = t._init);
                  try {
                    return T(t(e));
                  } catch (n) {}
              }
            return null;
          }
          function O(t) {
            var e = t,
              n = t;
            if (t.alternate) for (; e.return; ) e = e.return;
            else {
              t = e;
              do {
                0 !== (1026 & (e = t).flags) && (n = e.return), (t = e.return);
              } while (t);
            }
            return 3 === e.tag ? n : null;
          }
          function N(t) {
            if (O(t) !== t) throw Error(l(188));
          }
          function M(t) {
            var e = t.alternate;
            if (!e) {
              if (null === (e = O(t))) throw Error(l(188));
              return e !== t ? null : t;
            }
            for (var n = t, r = e; ; ) {
              var i = n.return;
              if (null === i) break;
              var a = i.alternate;
              if (null === a) {
                if (null !== (r = i.return)) {
                  n = r;
                  continue;
                }
                break;
              }
              if (i.child === a.child) {
                for (a = i.child; a; ) {
                  if (a === n) return N(i), t;
                  if (a === r) return N(i), e;
                  a = a.sibling;
                }
                throw Error(l(188));
              }
              if (n.return !== r.return) (n = i), (r = a);
              else {
                for (var o = !1, s = i.child; s; ) {
                  if (s === n) {
                    (o = !0), (n = i), (r = a);
                    break;
                  }
                  if (s === r) {
                    (o = !0), (r = i), (n = a);
                    break;
                  }
                  s = s.sibling;
                }
                if (!o) {
                  for (s = a.child; s; ) {
                    if (s === n) {
                      (o = !0), (n = a), (r = i);
                      break;
                    }
                    if (s === r) {
                      (o = !0), (r = a), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!o) throw Error(l(189));
                }
              }
              if (n.alternate !== r) throw Error(l(190));
            }
            if (3 !== n.tag) throw Error(l(188));
            return n.stateNode.current === n ? t : e;
          }
          function A(t) {
            if (!(t = M(t))) return null;
            for (var e = t; ; ) {
              if (5 === e.tag || 6 === e.tag) return e;
              if (e.child) (e.child.return = e), (e = e.child);
              else {
                if (e === t) break;
                for (; !e.sibling; ) {
                  if (!e.return || e.return === t) return null;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            }
            return null;
          }
          function F(t, e) {
            for (var n = t.alternate; null !== e; ) {
              if (e === t || e === n) return !0;
              e = e.return;
            }
            return !1;
          }
          var L,
            R = e.getPublicInstance,
            I = e.getRootHostContext,
            D = e.getChildHostContext,
            z = e.prepareForCommit,
            U = e.resetAfterCommit,
            j = e.createInstance,
            G = e.appendInitialChild,
            B = e.finalizeInitialChildren,
            H = e.prepareUpdate,
            V = e.shouldSetTextContent,
            W = e.createTextInstance,
            K = e.scheduleTimeout,
            $ = e.cancelTimeout,
            Y = e.noTimeout,
            Q = e.isPrimaryRenderer,
            q = e.supportsMutation,
            X = e.supportsPersistence,
            J = e.supportsHydration,
            Z = e.getInstanceFromNode,
            tt = e.makeOpaqueHydratingObject,
            et = e.makeClientId,
            nt = e.beforeActiveInstanceBlur,
            rt = e.afterActiveInstanceBlur,
            it = e.preparePortalMount,
            at = e.supportsTestSelectors,
            ot = e.findFiberRoot,
            lt = e.getBoundingRect,
            st = e.getTextContent,
            ut = e.isHiddenSubtree,
            ct = e.matchAccessibilityRole,
            ft = e.setFocusIfFocusable,
            dt = e.setupIntersectionObserver,
            ht = e.appendChild,
            pt = e.appendChildToContainer,
            gt = e.commitTextUpdate,
            vt = e.commitMount,
            yt = e.commitUpdate,
            mt = e.insertBefore,
            bt = e.insertInContainerBefore,
            _t = e.removeChild,
            wt = e.removeChildFromContainer,
            St = e.resetTextContent,
            xt = e.hideInstance,
            kt = e.hideTextInstance,
            Ct = e.unhideInstance,
            Pt = e.unhideTextInstance,
            Et = e.clearContainer,
            Tt = e.cloneInstance,
            Ot = e.createContainerChildSet,
            Nt = e.appendChildToContainerChildSet,
            Mt = e.finalizeContainerChildren,
            At = e.replaceContainerChildren,
            Ft = e.cloneHiddenInstance,
            Lt = e.cloneHiddenTextInstance,
            Rt = e.canHydrateInstance,
            It = e.canHydrateTextInstance,
            Dt = e.isSuspenseInstancePending,
            zt = e.isSuspenseInstanceFallback,
            Ut = e.getNextHydratableSibling,
            jt = e.getFirstHydratableChild,
            Gt = e.hydrateInstance,
            Bt = e.hydrateTextInstance,
            Ht = e.getNextHydratableInstanceAfterSuspenseInstance,
            Vt = e.commitHydratedContainer,
            Wt = e.commitHydratedSuspenseInstance;
          function Kt(t) {
            if (void 0 === L)
              try {
                throw Error();
              } catch (n) {
                var e = n.stack.trim().match(/\n( *(at )?)/);
                L = (e && e[1]) || '';
              }
            return '\n' + L + t;
          }
          var $t = !1;
          function Yt(t, e) {
            if (!t || $t) return '';
            $t = !0;
            var n = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
              if (e)
                if (
                  ((e = function () {
                    throw Error();
                  }),
                  Object.defineProperty(e.prototype, 'props', {
                    set: function () {
                      throw Error();
                    },
                  }),
                  'object' === typeof Reflect && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(e, []);
                  } catch (s) {
                    var r = s;
                  }
                  Reflect.construct(t, [], e);
                } else {
                  try {
                    e.call();
                  } catch (s) {
                    r = s;
                  }
                  t.call(e.prototype);
                }
              else {
                try {
                  throw Error();
                } catch (s) {
                  r = s;
                }
                t();
              }
            } catch (s) {
              if (s && r && 'string' === typeof s.stack) {
                for (
                  var i = s.stack.split('\n'),
                    a = r.stack.split('\n'),
                    o = i.length - 1,
                    l = a.length - 1;
                  1 <= o && 0 <= l && i[o] !== a[l];

                )
                  l--;
                for (; 1 <= o && 0 <= l; o--, l--)
                  if (i[o] !== a[l]) {
                    if (1 !== o || 1 !== l)
                      do {
                        if ((o--, 0 > --l || i[o] !== a[l]))
                          return '\n' + i[o].replace(' at new ', ' at ');
                      } while (1 <= o && 0 <= l);
                    break;
                  }
              }
            } finally {
              ($t = !1), (Error.prepareStackTrace = n);
            }
            return (t = t ? t.displayName || t.name : '') ? Kt(t) : '';
          }
          var Qt = [],
            qt = -1;
          function Xt(t) {
            return { current: t };
          }
          function Jt(t) {
            0 > qt || ((t.current = Qt[qt]), (Qt[qt] = null), qt--);
          }
          function Zt(t, e) {
            qt++, (Qt[qt] = t.current), (t.current = e);
          }
          var te = {},
            ee = Xt(te),
            ne = Xt(!1),
            re = te;
          function ie(t, e) {
            var n = t.type.contextTypes;
            if (!n) return te;
            var r = t.stateNode;
            if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
              return r.__reactInternalMemoizedMaskedChildContext;
            var i,
              a = {};
            for (i in n) a[i] = e[i];
            return (
              r &&
                (((t =
                  t.stateNode).__reactInternalMemoizedUnmaskedChildContext = e),
                (t.__reactInternalMemoizedMaskedChildContext = a)),
              a
            );
          }
          function ae(t) {
            return null !== (t = t.childContextTypes) && void 0 !== t;
          }
          function oe() {
            Jt(ne), Jt(ee);
          }
          function le(t, e, n) {
            if (ee.current !== te) throw Error(l(168));
            Zt(ee, e), Zt(ne, n);
          }
          function se(t, e, n) {
            var r = t.stateNode;
            if (
              ((t = e.childContextTypes),
              'function' !== typeof r.getChildContext)
            )
              return n;
            for (var a in (r = r.getChildContext()))
              if (!(a in t)) throw Error(l(108, T(e) || 'Unknown', a));
            return i({}, n, r);
          }
          function ue(t) {
            return (
              (t =
                ((t = t.stateNode) &&
                  t.__reactInternalMemoizedMergedChildContext) ||
                te),
              (re = ee.current),
              Zt(ee, t),
              Zt(ne, ne.current),
              !0
            );
          }
          function ce(t, e, n) {
            var r = t.stateNode;
            if (!r) throw Error(l(169));
            n
              ? ((t = se(t, e, re)),
                (r.__reactInternalMemoizedMergedChildContext = t),
                Jt(ne),
                Jt(ee),
                Zt(ee, t))
              : Jt(ne),
              Zt(ne, n);
          }
          var fe = null,
            de = null;
          (0, o.unstable_now)();
          var he = 0,
            pe = 8;
          function ge(t) {
            if (0 !== (1 & t)) return (pe = 15), 1;
            if (0 !== (2 & t)) return (pe = 14), 2;
            if (0 !== (4 & t)) return (pe = 13), 4;
            var e = 24 & t;
            return 0 !== e
              ? ((pe = 12), e)
              : 0 !== (32 & t)
              ? ((pe = 11), 32)
              : 0 !== (e = 192 & t)
              ? ((pe = 10), e)
              : 0 !== (256 & t)
              ? ((pe = 9), 256)
              : 0 !== (e = 3584 & t)
              ? ((pe = 8), e)
              : 0 !== (4096 & t)
              ? ((pe = 7), 4096)
              : 0 !== (e = 4186112 & t)
              ? ((pe = 6), e)
              : 0 !== (e = 62914560 & t)
              ? ((pe = 5), e)
              : 67108864 & t
              ? ((pe = 4), 67108864)
              : 0 !== (134217728 & t)
              ? ((pe = 3), 134217728)
              : 0 !== (e = 805306368 & t)
              ? ((pe = 2), e)
              : 0 !== (1073741824 & t)
              ? ((pe = 1), 1073741824)
              : ((pe = 8), t);
          }
          function ve(t, e) {
            var n = t.pendingLanes;
            if (0 === n) return (pe = 0);
            var r = 0,
              i = 0,
              a = t.expiredLanes,
              o = t.suspendedLanes,
              l = t.pingedLanes;
            if (0 !== a) (r = a), (i = pe = 15);
            else if (0 !== (a = 134217727 & n)) {
              var s = a & ~o;
              0 !== s
                ? ((r = ge(s)), (i = pe))
                : 0 !== (l &= a) && ((r = ge(l)), (i = pe));
            } else
              0 !== (a = n & ~o)
                ? ((r = ge(a)), (i = pe))
                : 0 !== l && ((r = ge(l)), (i = pe));
            if (0 === r) return 0;
            if (
              ((r = n & (((0 > (r = 31 - Se(r)) ? 0 : 1 << r) << 1) - 1)),
              0 !== e && e !== r && 0 === (e & o))
            ) {
              if ((ge(e), i <= pe)) return e;
              pe = i;
            }
            if (0 !== (e = t.entangledLanes))
              for (t = t.entanglements, e &= r; 0 < e; )
                (i = 1 << (n = 31 - Se(e))), (r |= t[n]), (e &= ~i);
            return r;
          }
          function ye(t) {
            return 0 !== (t = -1073741825 & t.pendingLanes)
              ? t
              : 1073741824 & t
              ? 1073741824
              : 0;
          }
          function me(t, e) {
            switch (t) {
              case 15:
                return 1;
              case 14:
                return 2;
              case 12:
                return 0 === (t = be(24 & ~e)) ? me(10, e) : t;
              case 10:
                return 0 === (t = be(192 & ~e)) ? me(8, e) : t;
              case 8:
                return (
                  0 === (t = be(3584 & ~e)) &&
                    0 === (t = be(4186112 & ~e)) &&
                    (t = 512),
                  t
                );
              case 2:
                return 0 === (e = be(805306368 & ~e)) && (e = 268435456), e;
            }
            throw Error(l(358, t));
          }
          function be(t) {
            return t & -t;
          }
          function _e(t) {
            for (var e = [], n = 0; 31 > n; n++) e.push(t);
            return e;
          }
          function we(t, e, n) {
            t.pendingLanes |= e;
            var r = e - 1;
            (t.suspendedLanes &= r),
              (t.pingedLanes &= r),
              ((t = t.eventTimes)[(e = 31 - Se(e))] = n);
          }
          var Se = Math.clz32
              ? Math.clz32
              : function (t) {
                  return 0 === t ? 32 : (31 - ((xe(t) / ke) | 0)) | 0;
                },
            xe = Math.log,
            ke = Math.LN2;
          var Ce = o.unstable_runWithPriority,
            Pe = o.unstable_scheduleCallback,
            Ee = o.unstable_cancelCallback,
            Te = o.unstable_shouldYield,
            Oe = o.unstable_requestPaint,
            Ne = o.unstable_now,
            Me = o.unstable_getCurrentPriorityLevel,
            Ae = o.unstable_ImmediatePriority,
            Fe = o.unstable_UserBlockingPriority,
            Le = o.unstable_NormalPriority,
            Re = o.unstable_LowPriority,
            Ie = o.unstable_IdlePriority,
            De = {},
            ze = void 0 !== Oe ? Oe : function () {},
            Ue = null,
            je = null,
            Ge = !1,
            Be = Ne(),
            He =
              1e4 > Be
                ? Ne
                : function () {
                    return Ne() - Be;
                  };
          function Ve() {
            switch (Me()) {
              case Ae:
                return 99;
              case Fe:
                return 98;
              case Le:
                return 97;
              case Re:
                return 96;
              case Ie:
                return 95;
              default:
                throw Error(l(332));
            }
          }
          function We(t) {
            switch (t) {
              case 99:
                return Ae;
              case 98:
                return Fe;
              case 97:
                return Le;
              case 96:
                return Re;
              case 95:
                return Ie;
              default:
                throw Error(l(332));
            }
          }
          function Ke(t, e) {
            return (t = We(t)), Ce(t, e);
          }
          function $e(t, e, n) {
            return (t = We(t)), Pe(t, e, n);
          }
          function Ye() {
            if (null !== je) {
              var t = je;
              (je = null), Ee(t);
            }
            Qe();
          }
          function Qe() {
            if (!Ge && null !== Ue) {
              Ge = !0;
              var t = 0;
              try {
                var e = Ue;
                Ke(99, function () {
                  for (; t < e.length; t++) {
                    var n = e[t];
                    do {
                      n = n(!0);
                    } while (null !== n);
                  }
                }),
                  (Ue = null);
              } catch (n) {
                throw (null !== Ue && (Ue = Ue.slice(t + 1)), Pe(Ae, Ye), n);
              } finally {
                Ge = !1;
              }
            }
          }
          var qe = s.ReactCurrentBatchConfig;
          var Xe =
              'function' === typeof Object.is
                ? Object.is
                : function (t, e) {
                    return (
                      (t === e && (0 !== t || 1 / t === 1 / e)) ||
                      (t !== t && e !== e)
                    );
                  },
            Je = Object.prototype.hasOwnProperty;
          function Ze(t, e) {
            if (Xe(t, e)) return !0;
            if (
              'object' !== typeof t ||
              null === t ||
              'object' !== typeof e ||
              null === e
            )
              return !1;
            var n = Object.keys(t),
              r = Object.keys(e);
            if (n.length !== r.length) return !1;
            for (r = 0; r < n.length; r++)
              if (!Je.call(e, n[r]) || !Xe(t[n[r]], e[n[r]])) return !1;
            return !0;
          }
          function tn(t) {
            switch (t.tag) {
              case 5:
                return Kt(t.type);
              case 16:
                return Kt('Lazy');
              case 13:
                return Kt('Suspense');
              case 19:
                return Kt('SuspenseList');
              case 0:
              case 2:
              case 15:
                return (t = Yt(t.type, !1));
              case 11:
                return (t = Yt(t.type.render, !1));
              case 22:
                return (t = Yt(t.type._render, !1));
              case 1:
                return (t = Yt(t.type, !0));
              default:
                return '';
            }
          }
          function en(t, e) {
            if (t && t.defaultProps) {
              for (var n in ((e = i({}, e)), (t = t.defaultProps)))
                void 0 === e[n] && (e[n] = t[n]);
              return e;
            }
            return e;
          }
          var nn = Xt(null),
            rn = null,
            an = null,
            on = null;
          function ln() {
            on = an = rn = null;
          }
          function sn(t, e) {
            (t = t.type._context),
              Q
                ? (Zt(nn, t._currentValue), (t._currentValue = e))
                : (Zt(nn, t._currentValue2), (t._currentValue2 = e));
          }
          function un(t) {
            var e = nn.current;
            Jt(nn),
              (t = t.type._context),
              Q ? (t._currentValue = e) : (t._currentValue2 = e);
          }
          function cn(t, e) {
            for (; null !== t; ) {
              var n = t.alternate;
              if ((t.childLanes & e) === e) {
                if (null === n || (n.childLanes & e) === e) break;
                n.childLanes |= e;
              } else (t.childLanes |= e), null !== n && (n.childLanes |= e);
              t = t.return;
            }
          }
          function fn(t, e) {
            (rn = t),
              (on = an = null),
              null !== (t = t.dependencies) &&
                null !== t.firstContext &&
                (0 !== (t.lanes & e) && (Br = !0), (t.firstContext = null));
          }
          function dn(t, e) {
            if (on !== t && !1 !== e && 0 !== e)
              if (
                (('number' === typeof e && 1073741823 !== e) ||
                  ((on = t), (e = 1073741823)),
                (e = { context: t, observedBits: e, next: null }),
                null === an)
              ) {
                if (null === rn) throw Error(l(308));
                (an = e),
                  (rn.dependencies = {
                    lanes: 0,
                    firstContext: e,
                    responders: null,
                  });
              } else an = an.next = e;
            return Q ? t._currentValue : t._currentValue2;
          }
          var hn = !1;
          function pn(t) {
            t.updateQueue = {
              baseState: t.memoizedState,
              firstBaseUpdate: null,
              lastBaseUpdate: null,
              shared: { pending: null },
              effects: null,
            };
          }
          function gn(t, e) {
            (t = t.updateQueue),
              e.updateQueue === t &&
                (e.updateQueue = {
                  baseState: t.baseState,
                  firstBaseUpdate: t.firstBaseUpdate,
                  lastBaseUpdate: t.lastBaseUpdate,
                  shared: t.shared,
                  effects: t.effects,
                });
          }
          function vn(t, e) {
            return {
              eventTime: t,
              lane: e,
              tag: 0,
              payload: null,
              callback: null,
              next: null,
            };
          }
          function yn(t, e) {
            if (null !== (t = t.updateQueue)) {
              var n = (t = t.shared).pending;
              null === n ? (e.next = e) : ((e.next = n.next), (n.next = e)),
                (t.pending = e);
            }
          }
          function mn(t, e) {
            var n = t.updateQueue,
              r = t.alternate;
            if (null !== r && n === (r = r.updateQueue)) {
              var i = null,
                a = null;
              if (null !== (n = n.firstBaseUpdate)) {
                do {
                  var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                  };
                  null === a ? (i = a = o) : (a = a.next = o), (n = n.next);
                } while (null !== n);
                null === a ? (i = a = e) : (a = a.next = e);
              } else i = a = e;
              return (
                (n = {
                  baseState: r.baseState,
                  firstBaseUpdate: i,
                  lastBaseUpdate: a,
                  shared: r.shared,
                  effects: r.effects,
                }),
                void (t.updateQueue = n)
              );
            }
            null === (t = n.lastBaseUpdate)
              ? (n.firstBaseUpdate = e)
              : (t.next = e),
              (n.lastBaseUpdate = e);
          }
          function bn(t, e, n, r) {
            var a = t.updateQueue;
            hn = !1;
            var o = a.firstBaseUpdate,
              l = a.lastBaseUpdate,
              s = a.shared.pending;
            if (null !== s) {
              a.shared.pending = null;
              var u = s,
                c = u.next;
              (u.next = null), null === l ? (o = c) : (l.next = c), (l = u);
              var f = t.alternate;
              if (null !== f) {
                var d = (f = f.updateQueue).lastBaseUpdate;
                d !== l &&
                  (null === d ? (f.firstBaseUpdate = c) : (d.next = c),
                  (f.lastBaseUpdate = u));
              }
            }
            if (null !== o) {
              for (d = a.baseState, l = 0, f = c = u = null; ; ) {
                s = o.lane;
                var h = o.eventTime;
                if ((r & s) === s) {
                  null !== f &&
                    (f = f.next = {
                      eventTime: h,
                      lane: 0,
                      tag: o.tag,
                      payload: o.payload,
                      callback: o.callback,
                      next: null,
                    });
                  t: {
                    var p = t,
                      g = o;
                    switch (((s = e), (h = n), g.tag)) {
                      case 1:
                        if ('function' === typeof (p = g.payload)) {
                          d = p.call(h, d, s);
                          break t;
                        }
                        d = p;
                        break t;
                      case 3:
                        p.flags = (-4097 & p.flags) | 64;
                      case 0:
                        if (
                          null ===
                            (s =
                              'function' === typeof (p = g.payload)
                                ? p.call(h, d, s)
                                : p) ||
                          void 0 === s
                        )
                          break t;
                        d = i({}, d, s);
                        break t;
                      case 2:
                        hn = !0;
                    }
                  }
                  null !== o.callback &&
                    ((t.flags |= 32),
                    null === (s = a.effects) ? (a.effects = [o]) : s.push(o));
                } else
                  (h = {
                    eventTime: h,
                    lane: s,
                    tag: o.tag,
                    payload: o.payload,
                    callback: o.callback,
                    next: null,
                  }),
                    null === f ? ((c = f = h), (u = d)) : (f = f.next = h),
                    (l |= s);
                if (null === (o = o.next)) {
                  if (null === (s = a.shared.pending)) break;
                  (o = s.next),
                    (s.next = null),
                    (a.lastBaseUpdate = s),
                    (a.shared.pending = null);
                }
              }
              null === f && (u = d),
                (a.baseState = u),
                (a.firstBaseUpdate = c),
                (a.lastBaseUpdate = f),
                (fa |= l),
                (t.lanes = l),
                (t.memoizedState = d);
            }
          }
          function _n(t, e, n) {
            if (((t = e.effects), (e.effects = null), null !== t))
              for (e = 0; e < t.length; e++) {
                var r = t[e],
                  i = r.callback;
                if (null !== i) {
                  if (((r.callback = null), (r = n), 'function' !== typeof i))
                    throw Error(l(191, i));
                  i.call(r);
                }
              }
          }
          var wn = new a.Component().refs;
          function Sn(t, e, n, r) {
            (n =
              null === (n = n(r, (e = t.memoizedState))) || void 0 === n
                ? e
                : i({}, e, n)),
              (t.memoizedState = n),
              0 === t.lanes && (t.updateQueue.baseState = n);
          }
          var xn = {
            isMounted: function (t) {
              return !!(t = t._reactInternals) && O(t) === t;
            },
            enqueueSetState: function (t, e, n) {
              t = t._reactInternals;
              var r = Ia(),
                i = Da(t),
                a = vn(r, i);
              (a.payload = e),
                void 0 !== n && null !== n && (a.callback = n),
                yn(t, a),
                za(t, i, r);
            },
            enqueueReplaceState: function (t, e, n) {
              t = t._reactInternals;
              var r = Ia(),
                i = Da(t),
                a = vn(r, i);
              (a.tag = 1),
                (a.payload = e),
                void 0 !== n && null !== n && (a.callback = n),
                yn(t, a),
                za(t, i, r);
            },
            enqueueForceUpdate: function (t, e) {
              t = t._reactInternals;
              var n = Ia(),
                r = Da(t),
                i = vn(n, r);
              (i.tag = 2),
                void 0 !== e && null !== e && (i.callback = e),
                yn(t, i),
                za(t, r, n);
            },
          };
          function kn(t, e, n, r, i, a, o) {
            return 'function' === typeof (t = t.stateNode).shouldComponentUpdate
              ? t.shouldComponentUpdate(r, a, o)
              : !e.prototype ||
                  !e.prototype.isPureReactComponent ||
                  !Ze(n, r) ||
                  !Ze(i, a);
          }
          function Cn(t, e, n) {
            var r = !1,
              i = te,
              a = e.contextType;
            return (
              'object' === typeof a && null !== a
                ? (a = dn(a))
                : ((i = ae(e) ? re : ee.current),
                  (a = (r = null !== (r = e.contextTypes) && void 0 !== r)
                    ? ie(t, i)
                    : te)),
              (e = new e(n, a)),
              (t.memoizedState =
                null !== e.state && void 0 !== e.state ? e.state : null),
              (e.updater = xn),
              (t.stateNode = e),
              (e._reactInternals = t),
              r &&
                (((t =
                  t.stateNode).__reactInternalMemoizedUnmaskedChildContext = i),
                (t.__reactInternalMemoizedMaskedChildContext = a)),
              e
            );
          }
          function Pn(t, e, n, r) {
            (t = e.state),
              'function' === typeof e.componentWillReceiveProps &&
                e.componentWillReceiveProps(n, r),
              'function' === typeof e.UNSAFE_componentWillReceiveProps &&
                e.UNSAFE_componentWillReceiveProps(n, r),
              e.state !== t && xn.enqueueReplaceState(e, e.state, null);
          }
          function En(t, e, n, r) {
            var i = t.stateNode;
            (i.props = n), (i.state = t.memoizedState), (i.refs = wn), pn(t);
            var a = e.contextType;
            'object' === typeof a && null !== a
              ? (i.context = dn(a))
              : ((a = ae(e) ? re : ee.current), (i.context = ie(t, a))),
              bn(t, n, i, r),
              (i.state = t.memoizedState),
              'function' === typeof (a = e.getDerivedStateFromProps) &&
                (Sn(t, e, a, n), (i.state = t.memoizedState)),
              'function' === typeof e.getDerivedStateFromProps ||
                'function' === typeof i.getSnapshotBeforeUpdate ||
                ('function' !== typeof i.UNSAFE_componentWillMount &&
                  'function' !== typeof i.componentWillMount) ||
                ((e = i.state),
                'function' === typeof i.componentWillMount &&
                  i.componentWillMount(),
                'function' === typeof i.UNSAFE_componentWillMount &&
                  i.UNSAFE_componentWillMount(),
                e !== i.state && xn.enqueueReplaceState(i, i.state, null),
                bn(t, n, i, r),
                (i.state = t.memoizedState)),
              'function' === typeof i.componentDidMount && (t.flags |= 4);
          }
          var Tn = Array.isArray;
          function On(t, e, n) {
            if (
              null !== (t = n.ref) &&
              'function' !== typeof t &&
              'object' !== typeof t
            ) {
              if (n._owner) {
                if ((n = n._owner)) {
                  if (1 !== n.tag) throw Error(l(309));
                  var r = n.stateNode;
                }
                if (!r) throw Error(l(147, t));
                var i = '' + t;
                return null !== e &&
                  null !== e.ref &&
                  'function' === typeof e.ref &&
                  e.ref._stringRef === i
                  ? e.ref
                  : (((e = function (t) {
                      var e = r.refs;
                      e === wn && (e = r.refs = {}),
                        null === t ? delete e[i] : (e[i] = t);
                    })._stringRef = i),
                    e);
              }
              if ('string' !== typeof t) throw Error(l(284));
              if (!n._owner) throw Error(l(290, t));
            }
            return t;
          }
          function Nn(t, e) {
            if ('textarea' !== t.type)
              throw Error(
                l(
                  31,
                  '[object Object]' === Object.prototype.toString.call(e)
                    ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                    : e
                )
              );
          }
          function Mn(t) {
            function e(e, n) {
              if (t) {
                var r = e.lastEffect;
                null !== r
                  ? ((r.nextEffect = n), (e.lastEffect = n))
                  : (e.firstEffect = e.lastEffect = n),
                  (n.nextEffect = null),
                  (n.flags = 8);
              }
            }
            function n(n, r) {
              if (!t) return null;
              for (; null !== r; ) e(n, r), (r = r.sibling);
              return null;
            }
            function r(t, e) {
              for (t = new Map(); null !== e; )
                null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
                  (e = e.sibling);
              return t;
            }
            function i(t, e) {
              return ((t = ko(t, e)).index = 0), (t.sibling = null), t;
            }
            function a(e, n, r) {
              return (
                (e.index = r),
                t
                  ? null !== (r = e.alternate)
                    ? (r = r.index) < n
                      ? ((e.flags = 2), n)
                      : r
                    : ((e.flags = 2), n)
                  : n
              );
            }
            function o(e) {
              return t && null === e.alternate && (e.flags = 2), e;
            }
            function s(t, e, n, r) {
              return null === e || 6 !== e.tag
                ? (((e = To(n, t.mode, r)).return = t), e)
                : (((e = i(e, n)).return = t), e);
            }
            function d(t, e, n, r) {
              return null !== e && e.elementType === n.type
                ? (((r = i(e, n.props)).ref = On(t, e, n)), (r.return = t), r)
                : (((r = Co(n.type, n.key, n.props, null, t.mode, r)).ref = On(
                    t,
                    e,
                    n
                  )),
                  (r.return = t),
                  r);
            }
            function h(t, e, n, r) {
              return null === e ||
                4 !== e.tag ||
                e.stateNode.containerInfo !== n.containerInfo ||
                e.stateNode.implementation !== n.implementation
                ? (((e = Oo(n, t.mode, r)).return = t), e)
                : (((e = i(e, n.children || [])).return = t), e);
            }
            function p(t, e, n, r, a) {
              return null === e || 7 !== e.tag
                ? (((e = Po(n, t.mode, r, a)).return = t), e)
                : (((e = i(e, n)).return = t), e);
            }
            function g(t, e, n) {
              if ('string' === typeof e || 'number' === typeof e)
                return ((e = To('' + e, t.mode, n)).return = t), e;
              if ('object' === typeof e && null !== e) {
                switch (e.$$typeof) {
                  case u:
                    return (
                      ((n = Co(
                        e.type,
                        e.key,
                        e.props,
                        null,
                        t.mode,
                        n
                      )).ref = On(t, null, e)),
                      (n.return = t),
                      n
                    );
                  case c:
                    return ((e = Oo(e, t.mode, n)).return = t), e;
                }
                if (Tn(e) || E(e))
                  return ((e = Po(e, t.mode, n, null)).return = t), e;
                Nn(t, e);
              }
              return null;
            }
            function v(t, e, n, r) {
              var i = null !== e ? e.key : null;
              if ('string' === typeof n || 'number' === typeof n)
                return null !== i ? null : s(t, e, '' + n, r);
              if ('object' === typeof n && null !== n) {
                switch (n.$$typeof) {
                  case u:
                    return n.key === i
                      ? n.type === f
                        ? p(t, e, n.props.children, r, i)
                        : d(t, e, n, r)
                      : null;
                  case c:
                    return n.key === i ? h(t, e, n, r) : null;
                }
                if (Tn(n) || E(n))
                  return null !== i ? null : p(t, e, n, r, null);
                Nn(t, n);
              }
              return null;
            }
            function y(t, e, n, r, i) {
              if ('string' === typeof r || 'number' === typeof r)
                return s(e, (t = t.get(n) || null), '' + r, i);
              if ('object' === typeof r && null !== r) {
                switch (r.$$typeof) {
                  case u:
                    return (
                      (t = t.get(null === r.key ? n : r.key) || null),
                      r.type === f
                        ? p(e, t, r.props.children, i, r.key)
                        : d(e, t, r, i)
                    );
                  case c:
                    return h(
                      e,
                      (t = t.get(null === r.key ? n : r.key) || null),
                      r,
                      i
                    );
                }
                if (Tn(r) || E(r))
                  return p(e, (t = t.get(n) || null), r, i, null);
                Nn(e, r);
              }
              return null;
            }
            function m(i, o, l, s) {
              for (
                var u = null, c = null, f = o, d = (o = 0), h = null;
                null !== f && d < l.length;
                d++
              ) {
                f.index > d ? ((h = f), (f = null)) : (h = f.sibling);
                var p = v(i, f, l[d], s);
                if (null === p) {
                  null === f && (f = h);
                  break;
                }
                t && f && null === p.alternate && e(i, f),
                  (o = a(p, o, d)),
                  null === c ? (u = p) : (c.sibling = p),
                  (c = p),
                  (f = h);
              }
              if (d === l.length) return n(i, f), u;
              if (null === f) {
                for (; d < l.length; d++)
                  null !== (f = g(i, l[d], s)) &&
                    ((o = a(f, o, d)),
                    null === c ? (u = f) : (c.sibling = f),
                    (c = f));
                return u;
              }
              for (f = r(i, f); d < l.length; d++)
                null !== (h = y(f, i, d, l[d], s)) &&
                  (t &&
                    null !== h.alternate &&
                    f.delete(null === h.key ? d : h.key),
                  (o = a(h, o, d)),
                  null === c ? (u = h) : (c.sibling = h),
                  (c = h));
              return (
                t &&
                  f.forEach(function (t) {
                    return e(i, t);
                  }),
                u
              );
            }
            function b(i, o, s, u) {
              var c = E(s);
              if ('function' !== typeof c) throw Error(l(150));
              if (null == (s = c.call(s))) throw Error(l(151));
              for (
                var f = (c = null), d = o, h = (o = 0), p = null, m = s.next();
                null !== d && !m.done;
                h++, m = s.next()
              ) {
                d.index > h ? ((p = d), (d = null)) : (p = d.sibling);
                var b = v(i, d, m.value, u);
                if (null === b) {
                  null === d && (d = p);
                  break;
                }
                t && d && null === b.alternate && e(i, d),
                  (o = a(b, o, h)),
                  null === f ? (c = b) : (f.sibling = b),
                  (f = b),
                  (d = p);
              }
              if (m.done) return n(i, d), c;
              if (null === d) {
                for (; !m.done; h++, m = s.next())
                  null !== (m = g(i, m.value, u)) &&
                    ((o = a(m, o, h)),
                    null === f ? (c = m) : (f.sibling = m),
                    (f = m));
                return c;
              }
              for (d = r(i, d); !m.done; h++, m = s.next())
                null !== (m = y(d, i, h, m.value, u)) &&
                  (t &&
                    null !== m.alternate &&
                    d.delete(null === m.key ? h : m.key),
                  (o = a(m, o, h)),
                  null === f ? (c = m) : (f.sibling = m),
                  (f = m));
              return (
                t &&
                  d.forEach(function (t) {
                    return e(i, t);
                  }),
                c
              );
            }
            return function (t, r, a, s) {
              var d =
                'object' === typeof a &&
                null !== a &&
                a.type === f &&
                null === a.key;
              d && (a = a.props.children);
              var h = 'object' === typeof a && null !== a;
              if (h)
                switch (a.$$typeof) {
                  case u:
                    t: {
                      for (h = a.key, d = r; null !== d; ) {
                        if (d.key === h) {
                          switch (d.tag) {
                            case 7:
                              if (a.type === f) {
                                n(t, d.sibling),
                                  ((r = i(d, a.props.children)).return = t),
                                  (t = r);
                                break t;
                              }
                              break;
                            default:
                              if (d.elementType === a.type) {
                                n(t, d.sibling),
                                  ((r = i(d, a.props)).ref = On(t, d, a)),
                                  (r.return = t),
                                  (t = r);
                                break t;
                              }
                          }
                          n(t, d);
                          break;
                        }
                        e(t, d), (d = d.sibling);
                      }
                      a.type === f
                        ? (((r = Po(
                            a.props.children,
                            t.mode,
                            s,
                            a.key
                          )).return = t),
                          (t = r))
                        : (((s = Co(
                            a.type,
                            a.key,
                            a.props,
                            null,
                            t.mode,
                            s
                          )).ref = On(t, r, a)),
                          (s.return = t),
                          (t = s));
                    }
                    return o(t);
                  case c:
                    t: {
                      for (d = a.key; null !== r; ) {
                        if (r.key === d) {
                          if (
                            4 === r.tag &&
                            r.stateNode.containerInfo === a.containerInfo &&
                            r.stateNode.implementation === a.implementation
                          ) {
                            n(t, r.sibling),
                              ((r = i(r, a.children || [])).return = t),
                              (t = r);
                            break t;
                          }
                          n(t, r);
                          break;
                        }
                        e(t, r), (r = r.sibling);
                      }
                      ((r = Oo(a, t.mode, s)).return = t), (t = r);
                    }
                    return o(t);
                }
              if ('string' === typeof a || 'number' === typeof a)
                return (
                  (a = '' + a),
                  null !== r && 6 === r.tag
                    ? (n(t, r.sibling), ((r = i(r, a)).return = t), (t = r))
                    : (n(t, r), ((r = To(a, t.mode, s)).return = t), (t = r)),
                  o(t)
                );
              if (Tn(a)) return m(t, r, a, s);
              if (E(a)) return b(t, r, a, s);
              if ((h && Nn(t, a), 'undefined' === typeof a && !d))
                switch (t.tag) {
                  case 1:
                  case 22:
                  case 0:
                  case 11:
                  case 15:
                    throw Error(l(152, T(t.type) || 'Component'));
                }
              return n(t, r);
            };
          }
          var An = Mn(!0),
            Fn = Mn(!1),
            Ln = {},
            Rn = Xt(Ln),
            In = Xt(Ln),
            Dn = Xt(Ln);
          function zn(t) {
            if (t === Ln) throw Error(l(174));
            return t;
          }
          function Un(t, e) {
            Zt(Dn, e), Zt(In, t), Zt(Rn, Ln), (t = I(e)), Jt(Rn), Zt(Rn, t);
          }
          function jn() {
            Jt(Rn), Jt(In), Jt(Dn);
          }
          function Gn(t) {
            var e = zn(Dn.current),
              n = zn(Rn.current);
            n !== (e = D(n, t.type, e)) && (Zt(In, t), Zt(Rn, e));
          }
          function Bn(t) {
            In.current === t && (Jt(Rn), Jt(In));
          }
          var Hn = Xt(0);
          function Vn(t) {
            for (var e = t; null !== e; ) {
              if (13 === e.tag) {
                var n = e.memoizedState;
                if (
                  null !== n &&
                  (null === (n = n.dehydrated) || Dt(n) || zt(n))
                )
                  return e;
              } else if (
                19 === e.tag &&
                void 0 !== e.memoizedProps.revealOrder
              ) {
                if (0 !== (64 & e.flags)) return e;
              } else if (null !== e.child) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) return null;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
            return null;
          }
          var Wn = null,
            Kn = null,
            $n = !1;
          function Yn(t, e) {
            var n = So(5, null, null, 0);
            (n.elementType = 'DELETED'),
              (n.type = 'DELETED'),
              (n.stateNode = e),
              (n.return = t),
              (n.flags = 8),
              null !== t.lastEffect
                ? ((t.lastEffect.nextEffect = n), (t.lastEffect = n))
                : (t.firstEffect = t.lastEffect = n);
          }
          function Qn(t, e) {
            switch (t.tag) {
              case 5:
                return (
                  null !== (e = Rt(e, t.type, t.pendingProps)) &&
                  ((t.stateNode = e), !0)
                );
              case 6:
                return (
                  null !== (e = It(e, t.pendingProps)) &&
                  ((t.stateNode = e), !0)
                );
              case 13:
              default:
                return !1;
            }
          }
          function qn(t) {
            if ($n) {
              var e = Kn;
              if (e) {
                var n = e;
                if (!Qn(t, e)) {
                  if (!(e = Ut(n)) || !Qn(t, e))
                    return (
                      (t.flags = (-1025 & t.flags) | 2),
                      ($n = !1),
                      void (Wn = t)
                    );
                  Yn(Wn, n);
                }
                (Wn = t), (Kn = jt(e));
              } else (t.flags = (-1025 & t.flags) | 2), ($n = !1), (Wn = t);
            }
          }
          function Xn(t) {
            for (
              t = t.return;
              null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag;

            )
              t = t.return;
            Wn = t;
          }
          function Jn(t) {
            if (!J || t !== Wn) return !1;
            if (!$n) return Xn(t), ($n = !0), !1;
            var e = t.type;
            if (
              5 !== t.tag ||
              ('head' !== e && 'body' !== e && !V(e, t.memoizedProps))
            )
              for (e = Kn; e; ) Yn(t, e), (e = Ut(e));
            if ((Xn(t), 13 === t.tag)) {
              if (!J) throw Error(l(316));
              if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null))
                throw Error(l(317));
              Kn = Ht(t);
            } else Kn = Wn ? Ut(t.stateNode) : null;
            return !0;
          }
          function Zn() {
            J && ((Kn = Wn = null), ($n = !1));
          }
          var tr = [];
          function er() {
            for (var t = 0; t < tr.length; t++) {
              var e = tr[t];
              Q
                ? (e._workInProgressVersionPrimary = null)
                : (e._workInProgressVersionSecondary = null);
            }
            tr.length = 0;
          }
          var nr = s.ReactCurrentDispatcher,
            rr = s.ReactCurrentBatchConfig,
            ir = 0,
            ar = null,
            or = null,
            lr = null,
            sr = !1,
            ur = !1;
          function cr() {
            throw Error(l(321));
          }
          function fr(t, e) {
            if (null === e) return !1;
            for (var n = 0; n < e.length && n < t.length; n++)
              if (!Xe(t[n], e[n])) return !1;
            return !0;
          }
          function dr(t, e, n, r, i, a) {
            if (
              ((ir = a),
              (ar = e),
              (e.memoizedState = null),
              (e.updateQueue = null),
              (e.lanes = 0),
              (nr.current = null === t || null === t.memoizedState ? zr : Ur),
              (t = n(r, i)),
              ur)
            ) {
              a = 0;
              do {
                if (((ur = !1), !(25 > a))) throw Error(l(301));
                (a += 1),
                  (lr = or = null),
                  (e.updateQueue = null),
                  (nr.current = jr),
                  (t = n(r, i));
              } while (ur);
            }
            if (
              ((nr.current = Dr),
              (e = null !== or && null !== or.next),
              (ir = 0),
              (lr = or = ar = null),
              (sr = !1),
              e)
            )
              throw Error(l(300));
            return t;
          }
          function hr() {
            var t = {
              memoizedState: null,
              baseState: null,
              baseQueue: null,
              queue: null,
              next: null,
            };
            return (
              null === lr ? (ar.memoizedState = lr = t) : (lr = lr.next = t), lr
            );
          }
          function pr() {
            if (null === or) {
              var t = ar.alternate;
              t = null !== t ? t.memoizedState : null;
            } else t = or.next;
            var e = null === lr ? ar.memoizedState : lr.next;
            if (null !== e) (lr = e), (or = t);
            else {
              if (null === t) throw Error(l(310));
              (t = {
                memoizedState: (or = t).memoizedState,
                baseState: or.baseState,
                baseQueue: or.baseQueue,
                queue: or.queue,
                next: null,
              }),
                null === lr ? (ar.memoizedState = lr = t) : (lr = lr.next = t);
            }
            return lr;
          }
          function gr(t, e) {
            return 'function' === typeof e ? e(t) : e;
          }
          function vr(t) {
            var e = pr(),
              n = e.queue;
            if (null === n) throw Error(l(311));
            n.lastRenderedReducer = t;
            var r = or,
              i = r.baseQueue,
              a = n.pending;
            if (null !== a) {
              if (null !== i) {
                var o = i.next;
                (i.next = a.next), (a.next = o);
              }
              (r.baseQueue = i = a), (n.pending = null);
            }
            if (null !== i) {
              (i = i.next), (r = r.baseState);
              var s = (o = a = null),
                u = i;
              do {
                var c = u.lane;
                if ((ir & c) === c)
                  null !== s &&
                    (s = s.next = {
                      lane: 0,
                      action: u.action,
                      eagerReducer: u.eagerReducer,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                    (r = u.eagerReducer === t ? u.eagerState : t(r, u.action));
                else {
                  var f = {
                    lane: c,
                    action: u.action,
                    eagerReducer: u.eagerReducer,
                    eagerState: u.eagerState,
                    next: null,
                  };
                  null === s ? ((o = s = f), (a = r)) : (s = s.next = f),
                    (ar.lanes |= c),
                    (fa |= c);
                }
                u = u.next;
              } while (null !== u && u !== i);
              null === s ? (a = r) : (s.next = o),
                Xe(r, e.memoizedState) || (Br = !0),
                (e.memoizedState = r),
                (e.baseState = a),
                (e.baseQueue = s),
                (n.lastRenderedState = r);
            }
            return [e.memoizedState, n.dispatch];
          }
          function yr(t) {
            var e = pr(),
              n = e.queue;
            if (null === n) throw Error(l(311));
            n.lastRenderedReducer = t;
            var r = n.dispatch,
              i = n.pending,
              a = e.memoizedState;
            if (null !== i) {
              n.pending = null;
              var o = (i = i.next);
              do {
                (a = t(a, o.action)), (o = o.next);
              } while (o !== i);
              Xe(a, e.memoizedState) || (Br = !0),
                (e.memoizedState = a),
                null === e.baseQueue && (e.baseState = a),
                (n.lastRenderedState = a);
            }
            return [a, r];
          }
          function mr(t, e, n) {
            var r = e._getVersion;
            r = r(e._source);
            var i = Q
              ? e._workInProgressVersionPrimary
              : e._workInProgressVersionSecondary;
            if (
              (null !== i
                ? (t = i === r)
                : ((t = t.mutableReadLanes),
                  (t = (ir & t) === t) &&
                    (Q
                      ? (e._workInProgressVersionPrimary = r)
                      : (e._workInProgressVersionSecondary = r),
                    tr.push(e))),
              t)
            )
              return n(e._source);
            throw (tr.push(e), Error(l(350)));
          }
          function br(t, e, n, r) {
            var i = ra;
            if (null === i) throw Error(l(349));
            var a = e._getVersion,
              o = a(e._source),
              s = nr.current,
              u = s.useState(function () {
                return mr(i, e, n);
              }),
              c = u[1],
              f = u[0];
            u = lr;
            var d = t.memoizedState,
              h = d.refs,
              p = h.getSnapshot,
              g = d.source;
            d = d.subscribe;
            var v = ar;
            return (
              (t.memoizedState = { refs: h, source: e, subscribe: r }),
              s.useEffect(
                function () {
                  (h.getSnapshot = n), (h.setSnapshot = c);
                  var t = a(e._source);
                  if (!Xe(o, t)) {
                    (t = n(e._source)),
                      Xe(f, t) ||
                        (c(t),
                        (t = Da(v)),
                        (i.mutableReadLanes |= t & i.pendingLanes)),
                      (t = i.mutableReadLanes),
                      (i.entangledLanes |= t);
                    for (var r = i.entanglements, l = t; 0 < l; ) {
                      var s = 31 - Se(l),
                        u = 1 << s;
                      (r[s] |= t), (l &= ~u);
                    }
                  }
                },
                [n, e, r]
              ),
              s.useEffect(
                function () {
                  return r(e._source, function () {
                    var t = h.getSnapshot,
                      n = h.setSnapshot;
                    try {
                      n(t(e._source));
                      var r = Da(v);
                      i.mutableReadLanes |= r & i.pendingLanes;
                    } catch (a) {
                      n(function () {
                        throw a;
                      });
                    }
                  });
                },
                [e, r]
              ),
              (Xe(p, n) && Xe(g, e) && Xe(d, r)) ||
                (((t = {
                  pending: null,
                  dispatch: null,
                  lastRenderedReducer: gr,
                  lastRenderedState: f,
                }).dispatch = c = Ir.bind(null, ar, t)),
                (u.queue = t),
                (u.baseQueue = null),
                (f = mr(i, e, n)),
                (u.memoizedState = u.baseState = f)),
              f
            );
          }
          function _r(t, e, n) {
            return br(pr(), t, e, n);
          }
          function wr(t) {
            var e = hr();
            return (
              'function' === typeof t && (t = t()),
              (e.memoizedState = e.baseState = t),
              (t = (t = e.queue = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: gr,
                lastRenderedState: t,
              }).dispatch = Ir.bind(null, ar, t)),
              [e.memoizedState, t]
            );
          }
          function Sr(t, e, n, r) {
            return (
              (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
              null === (e = ar.updateQueue)
                ? ((e = { lastEffect: null }),
                  (ar.updateQueue = e),
                  (e.lastEffect = t.next = t))
                : null === (n = e.lastEffect)
                ? (e.lastEffect = t.next = t)
                : ((r = n.next),
                  (n.next = t),
                  (t.next = r),
                  (e.lastEffect = t)),
              t
            );
          }
          function xr(t) {
            return (t = { current: t }), (hr().memoizedState = t);
          }
          function kr() {
            return pr().memoizedState;
          }
          function Cr(t, e, n, r) {
            var i = hr();
            (ar.flags |= t),
              (i.memoizedState = Sr(1 | e, n, void 0, void 0 === r ? null : r));
          }
          function Pr(t, e, n, r) {
            var i = pr();
            r = void 0 === r ? null : r;
            var a = void 0;
            if (null !== or) {
              var o = or.memoizedState;
              if (((a = o.destroy), null !== r && fr(r, o.deps)))
                return void Sr(e, n, a, r);
            }
            (ar.flags |= t), (i.memoizedState = Sr(1 | e, n, a, r));
          }
          function Er(t, e) {
            return Cr(516, 4, t, e);
          }
          function Tr(t, e) {
            return Pr(516, 4, t, e);
          }
          function Or(t, e) {
            return Pr(4, 2, t, e);
          }
          function Nr(t, e) {
            return 'function' === typeof e
              ? ((t = t()),
                e(t),
                function () {
                  e(null);
                })
              : null !== e && void 0 !== e
              ? ((t = t()),
                (e.current = t),
                function () {
                  e.current = null;
                })
              : void 0;
          }
          function Mr(t, e, n) {
            return (
              (n = null !== n && void 0 !== n ? n.concat([t]) : null),
              Pr(4, 2, Nr.bind(null, e, t), n)
            );
          }
          function Ar() {}
          function Fr(t, e) {
            var n = pr();
            e = void 0 === e ? null : e;
            var r = n.memoizedState;
            return null !== r && null !== e && fr(e, r[1])
              ? r[0]
              : ((n.memoizedState = [t, e]), t);
          }
          function Lr(t, e) {
            var n = pr();
            e = void 0 === e ? null : e;
            var r = n.memoizedState;
            return null !== r && null !== e && fr(e, r[1])
              ? r[0]
              : ((t = t()), (n.memoizedState = [t, e]), t);
          }
          function Rr(t, e) {
            var n = Ve();
            Ke(98 > n ? 98 : n, function () {
              t(!0);
            }),
              Ke(97 < n ? 97 : n, function () {
                var n = rr.transition;
                rr.transition = 1;
                try {
                  t(!1), e();
                } finally {
                  rr.transition = n;
                }
              });
          }
          function Ir(t, e, n) {
            var r = Ia(),
              i = Da(t),
              a = {
                lane: i,
                action: n,
                eagerReducer: null,
                eagerState: null,
                next: null,
              },
              o = e.pending;
            if (
              (null === o ? (a.next = a) : ((a.next = o.next), (o.next = a)),
              (e.pending = a),
              (o = t.alternate),
              t === ar || (null !== o && o === ar))
            )
              ur = sr = !0;
            else {
              if (
                0 === t.lanes &&
                (null === o || 0 === o.lanes) &&
                null !== (o = e.lastRenderedReducer)
              )
                try {
                  var l = e.lastRenderedState,
                    s = o(l, n);
                  if (((a.eagerReducer = o), (a.eagerState = s), Xe(s, l)))
                    return;
                } catch (u) {}
              za(t, i, r);
            }
          }
          var Dr = {
              readContext: dn,
              useCallback: cr,
              useContext: cr,
              useEffect: cr,
              useImperativeHandle: cr,
              useLayoutEffect: cr,
              useMemo: cr,
              useReducer: cr,
              useRef: cr,
              useState: cr,
              useDebugValue: cr,
              useDeferredValue: cr,
              useTransition: cr,
              useMutableSource: cr,
              useOpaqueIdentifier: cr,
              unstable_isNewReconciler: !1,
            },
            zr = {
              readContext: dn,
              useCallback: function (t, e) {
                return (hr().memoizedState = [t, void 0 === e ? null : e]), t;
              },
              useContext: dn,
              useEffect: Er,
              useImperativeHandle: function (t, e, n) {
                return (
                  (n = null !== n && void 0 !== n ? n.concat([t]) : null),
                  Cr(4, 2, Nr.bind(null, e, t), n)
                );
              },
              useLayoutEffect: function (t, e) {
                return Cr(4, 2, t, e);
              },
              useMemo: function (t, e) {
                var n = hr();
                return (
                  (e = void 0 === e ? null : e),
                  (t = t()),
                  (n.memoizedState = [t, e]),
                  t
                );
              },
              useReducer: function (t, e, n) {
                var r = hr();
                return (
                  (e = void 0 !== n ? n(e) : e),
                  (r.memoizedState = r.baseState = e),
                  (t = (t = r.queue = {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: e,
                  }).dispatch = Ir.bind(null, ar, t)),
                  [r.memoizedState, t]
                );
              },
              useRef: xr,
              useState: wr,
              useDebugValue: Ar,
              useDeferredValue: function (t) {
                var e = wr(t),
                  n = e[0],
                  r = e[1];
                return (
                  Er(
                    function () {
                      var e = rr.transition;
                      rr.transition = 1;
                      try {
                        r(t);
                      } finally {
                        rr.transition = e;
                      }
                    },
                    [t]
                  ),
                  n
                );
              },
              useTransition: function () {
                var t = wr(!1),
                  e = t[0];
                return xr((t = Rr.bind(null, t[1]))), [t, e];
              },
              useMutableSource: function (t, e, n) {
                var r = hr();
                return (
                  (r.memoizedState = {
                    refs: { getSnapshot: e, setSnapshot: null },
                    source: t,
                    subscribe: n,
                  }),
                  br(r, t, e, n)
                );
              },
              useOpaqueIdentifier: function () {
                if ($n) {
                  var t = !1,
                    e = tt(function () {
                      throw (t || ((t = !0), n(et())), Error(l(355)));
                    }),
                    n = wr(e)[1];
                  return (
                    0 === (2 & ar.mode) &&
                      ((ar.flags |= 516),
                      Sr(
                        5,
                        function () {
                          n(et());
                        },
                        void 0,
                        null
                      )),
                    e
                  );
                }
                return wr((e = et())), e;
              },
              unstable_isNewReconciler: !1,
            },
            Ur = {
              readContext: dn,
              useCallback: Fr,
              useContext: dn,
              useEffect: Tr,
              useImperativeHandle: Mr,
              useLayoutEffect: Or,
              useMemo: Lr,
              useReducer: vr,
              useRef: kr,
              useState: function () {
                return vr(gr);
              },
              useDebugValue: Ar,
              useDeferredValue: function (t) {
                var e = vr(gr),
                  n = e[0],
                  r = e[1];
                return (
                  Tr(
                    function () {
                      var e = rr.transition;
                      rr.transition = 1;
                      try {
                        r(t);
                      } finally {
                        rr.transition = e;
                      }
                    },
                    [t]
                  ),
                  n
                );
              },
              useTransition: function () {
                var t = vr(gr)[0];
                return [kr().current, t];
              },
              useMutableSource: _r,
              useOpaqueIdentifier: function () {
                return vr(gr)[0];
              },
              unstable_isNewReconciler: !1,
            },
            jr = {
              readContext: dn,
              useCallback: Fr,
              useContext: dn,
              useEffect: Tr,
              useImperativeHandle: Mr,
              useLayoutEffect: Or,
              useMemo: Lr,
              useReducer: yr,
              useRef: kr,
              useState: function () {
                return yr(gr);
              },
              useDebugValue: Ar,
              useDeferredValue: function (t) {
                var e = yr(gr),
                  n = e[0],
                  r = e[1];
                return (
                  Tr(
                    function () {
                      var e = rr.transition;
                      rr.transition = 1;
                      try {
                        r(t);
                      } finally {
                        rr.transition = e;
                      }
                    },
                    [t]
                  ),
                  n
                );
              },
              useTransition: function () {
                var t = yr(gr)[0];
                return [kr().current, t];
              },
              useMutableSource: _r,
              useOpaqueIdentifier: function () {
                return yr(gr)[0];
              },
              unstable_isNewReconciler: !1,
            },
            Gr = s.ReactCurrentOwner,
            Br = !1;
          function Hr(t, e, n, r) {
            e.child = null === t ? Fn(e, null, n, r) : An(e, t.child, n, r);
          }
          function Vr(t, e, n, r, i) {
            n = n.render;
            var a = e.ref;
            return (
              fn(e, i),
              (r = dr(t, e, n, r, a, i)),
              null === t || Br
                ? ((e.flags |= 1), Hr(t, e, r, i), e.child)
                : ((e.updateQueue = t.updateQueue),
                  (e.flags &= -517),
                  (t.lanes &= ~i),
                  fi(t, e, i))
            );
          }
          function Wr(t, e, n, r, i, a) {
            if (null === t) {
              var o = n.type;
              return 'function' !== typeof o ||
                xo(o) ||
                void 0 !== o.defaultProps ||
                null !== n.compare ||
                void 0 !== n.defaultProps
                ? (((t = Co(n.type, null, r, e, e.mode, a)).ref = e.ref),
                  (t.return = e),
                  (e.child = t))
                : ((e.tag = 15), (e.type = o), Kr(t, e, o, r, i, a));
            }
            return (
              (o = t.child),
              0 === (i & a) &&
              ((i = o.memoizedProps),
              (n = null !== (n = n.compare) ? n : Ze)(i, r) && t.ref === e.ref)
                ? fi(t, e, a)
                : ((e.flags |= 1),
                  ((t = ko(o, r)).ref = e.ref),
                  (t.return = e),
                  (e.child = t))
            );
          }
          function Kr(t, e, n, r, i, a) {
            if (null !== t && Ze(t.memoizedProps, r) && t.ref === e.ref) {
              if (((Br = !1), 0 === (a & i)))
                return (e.lanes = t.lanes), fi(t, e, a);
              0 !== (16384 & t.flags) && (Br = !0);
            }
            return Qr(t, e, n, r, a);
          }
          function $r(t, e, n) {
            var r = e.pendingProps,
              i = r.children,
              a = null !== t ? t.memoizedState : null;
            if (
              'hidden' === r.mode ||
              'unstable-defer-without-hiding' === r.mode
            )
              if (0 === (4 & e.mode))
                (e.memoizedState = { baseLanes: 0 }), Ka(e, n);
              else {
                if (0 === (1073741824 & n))
                  return (
                    (t = null !== a ? a.baseLanes | n : n),
                    (e.lanes = e.childLanes = 1073741824),
                    (e.memoizedState = { baseLanes: t }),
                    Ka(e, t),
                    null
                  );
                (e.memoizedState = { baseLanes: 0 }),
                  Ka(e, null !== a ? a.baseLanes : n);
              }
            else
              null !== a
                ? ((r = a.baseLanes | n), (e.memoizedState = null))
                : (r = n),
                Ka(e, r);
            return Hr(t, e, i, n), e.child;
          }
          function Yr(t, e) {
            var n = e.ref;
            ((null === t && null !== n) || (null !== t && t.ref !== n)) &&
              (e.flags |= 128);
          }
          function Qr(t, e, n, r, i) {
            var a = ae(n) ? re : ee.current;
            return (
              (a = ie(e, a)),
              fn(e, i),
              (n = dr(t, e, n, r, a, i)),
              null === t || Br
                ? ((e.flags |= 1), Hr(t, e, n, i), e.child)
                : ((e.updateQueue = t.updateQueue),
                  (e.flags &= -517),
                  (t.lanes &= ~i),
                  fi(t, e, i))
            );
          }
          function qr(t, e, n, r, i) {
            if (ae(n)) {
              var a = !0;
              ue(e);
            } else a = !1;
            if ((fn(e, i), null === e.stateNode))
              null !== t &&
                ((t.alternate = null), (e.alternate = null), (e.flags |= 2)),
                Cn(e, n, r),
                En(e, n, r, i),
                (r = !0);
            else if (null === t) {
              var o = e.stateNode,
                l = e.memoizedProps;
              o.props = l;
              var s = o.context,
                u = n.contextType;
              'object' === typeof u && null !== u
                ? (u = dn(u))
                : (u = ie(e, (u = ae(n) ? re : ee.current)));
              var c = n.getDerivedStateFromProps,
                f =
                  'function' === typeof c ||
                  'function' === typeof o.getSnapshotBeforeUpdate;
              f ||
                ('function' !== typeof o.UNSAFE_componentWillReceiveProps &&
                  'function' !== typeof o.componentWillReceiveProps) ||
                ((l !== r || s !== u) && Pn(e, o, r, u)),
                (hn = !1);
              var d = e.memoizedState;
              (o.state = d),
                bn(e, r, o, i),
                (s = e.memoizedState),
                l !== r || d !== s || ne.current || hn
                  ? ('function' === typeof c &&
                      (Sn(e, n, c, r), (s = e.memoizedState)),
                    (l = hn || kn(e, n, l, r, d, s, u))
                      ? (f ||
                          ('function' !== typeof o.UNSAFE_componentWillMount &&
                            'function' !== typeof o.componentWillMount) ||
                          ('function' === typeof o.componentWillMount &&
                            o.componentWillMount(),
                          'function' === typeof o.UNSAFE_componentWillMount &&
                            o.UNSAFE_componentWillMount()),
                        'function' === typeof o.componentDidMount &&
                          (e.flags |= 4))
                      : ('function' === typeof o.componentDidMount &&
                          (e.flags |= 4),
                        (e.memoizedProps = r),
                        (e.memoizedState = s)),
                    (o.props = r),
                    (o.state = s),
                    (o.context = u),
                    (r = l))
                  : ('function' === typeof o.componentDidMount &&
                      (e.flags |= 4),
                    (r = !1));
            } else {
              (o = e.stateNode),
                gn(t, e),
                (l = e.memoizedProps),
                (u = e.type === e.elementType ? l : en(e.type, l)),
                (o.props = u),
                (f = e.pendingProps),
                (d = o.context),
                'object' === typeof (s = n.contextType) && null !== s
                  ? (s = dn(s))
                  : (s = ie(e, (s = ae(n) ? re : ee.current)));
              var h = n.getDerivedStateFromProps;
              (c =
                'function' === typeof h ||
                'function' === typeof o.getSnapshotBeforeUpdate) ||
                ('function' !== typeof o.UNSAFE_componentWillReceiveProps &&
                  'function' !== typeof o.componentWillReceiveProps) ||
                ((l !== f || d !== s) && Pn(e, o, r, s)),
                (hn = !1),
                (d = e.memoizedState),
                (o.state = d),
                bn(e, r, o, i);
              var p = e.memoizedState;
              l !== f || d !== p || ne.current || hn
                ? ('function' === typeof h &&
                    (Sn(e, n, h, r), (p = e.memoizedState)),
                  (u = hn || kn(e, n, u, r, d, p, s))
                    ? (c ||
                        ('function' !== typeof o.UNSAFE_componentWillUpdate &&
                          'function' !== typeof o.componentWillUpdate) ||
                        ('function' === typeof o.componentWillUpdate &&
                          o.componentWillUpdate(r, p, s),
                        'function' === typeof o.UNSAFE_componentWillUpdate &&
                          o.UNSAFE_componentWillUpdate(r, p, s)),
                      'function' === typeof o.componentDidUpdate &&
                        (e.flags |= 4),
                      'function' === typeof o.getSnapshotBeforeUpdate &&
                        (e.flags |= 256))
                    : ('function' !== typeof o.componentDidUpdate ||
                        (l === t.memoizedProps && d === t.memoizedState) ||
                        (e.flags |= 4),
                      'function' !== typeof o.getSnapshotBeforeUpdate ||
                        (l === t.memoizedProps && d === t.memoizedState) ||
                        (e.flags |= 256),
                      (e.memoizedProps = r),
                      (e.memoizedState = p)),
                  (o.props = r),
                  (o.state = p),
                  (o.context = s),
                  (r = u))
                : ('function' !== typeof o.componentDidUpdate ||
                    (l === t.memoizedProps && d === t.memoizedState) ||
                    (e.flags |= 4),
                  'function' !== typeof o.getSnapshotBeforeUpdate ||
                    (l === t.memoizedProps && d === t.memoizedState) ||
                    (e.flags |= 256),
                  (r = !1));
            }
            return Xr(t, e, n, r, a, i);
          }
          function Xr(t, e, n, r, i, a) {
            Yr(t, e);
            var o = 0 !== (64 & e.flags);
            if (!r && !o) return i && ce(e, n, !1), fi(t, e, a);
            (r = e.stateNode), (Gr.current = e);
            var l =
              o && 'function' !== typeof n.getDerivedStateFromError
                ? null
                : r.render();
            return (
              (e.flags |= 1),
              null !== t && o
                ? ((e.child = An(e, t.child, null, a)),
                  (e.child = An(e, null, l, a)))
                : Hr(t, e, l, a),
              (e.memoizedState = r.state),
              i && ce(e, n, !0),
              e.child
            );
          }
          function Jr(t) {
            var e = t.stateNode;
            e.pendingContext
              ? le(0, e.pendingContext, e.pendingContext !== e.context)
              : e.context && le(0, e.context, !1),
              Un(t, e.containerInfo);
          }
          var Zr,
            ti,
            ei,
            ni,
            ri = { dehydrated: null, retryLane: 0 };
          function ii(t, e, n) {
            var r,
              i = e.pendingProps,
              a = Hn.current,
              o = !1;
            return (
              (r = 0 !== (64 & e.flags)) ||
                (r = (null === t || null !== t.memoizedState) && 0 !== (2 & a)),
              r
                ? ((o = !0), (e.flags &= -65))
                : (null !== t && null === t.memoizedState) ||
                  void 0 === i.fallback ||
                  !0 === i.unstable_avoidThisFallback ||
                  (a |= 1),
              Zt(Hn, 1 & a),
              null === t
                ? (void 0 !== i.fallback && qn(e),
                  (t = i.children),
                  (a = i.fallback),
                  o
                    ? ((t = ai(e, t, a, n)),
                      (e.child.memoizedState = { baseLanes: n }),
                      (e.memoizedState = ri),
                      t)
                    : 'number' === typeof i.unstable_expectedLoadTime
                    ? ((t = ai(e, t, a, n)),
                      (e.child.memoizedState = { baseLanes: n }),
                      (e.memoizedState = ri),
                      (e.lanes = 33554432),
                      t)
                    : (((n = Eo(
                        { mode: 'visible', children: t },
                        e.mode,
                        n,
                        null
                      )).return = e),
                      (e.child = n)))
                : (t.memoizedState,
                  o
                    ? ((i = li(t, e, i.children, i.fallback, n)),
                      (o = e.child),
                      (a = t.child.memoizedState),
                      (o.memoizedState =
                        null === a
                          ? { baseLanes: n }
                          : { baseLanes: a.baseLanes | n }),
                      (o.childLanes = t.childLanes & ~n),
                      (e.memoizedState = ri),
                      i)
                    : ((n = oi(t, e, i.children, n)),
                      (e.memoizedState = null),
                      n))
            );
          }
          function ai(t, e, n, r) {
            var i = t.mode,
              a = t.child;
            return (
              (e = { mode: 'hidden', children: e }),
              0 === (2 & i) && null !== a
                ? ((a.childLanes = 0), (a.pendingProps = e))
                : (a = Eo(e, i, 0, null)),
              (n = Po(n, i, r, null)),
              (a.return = t),
              (n.return = t),
              (a.sibling = n),
              (t.child = a),
              n
            );
          }
          function oi(t, e, n, r) {
            var i = t.child;
            return (
              (t = i.sibling),
              (n = ko(i, { mode: 'visible', children: n })),
              0 === (2 & e.mode) && (n.lanes = r),
              (n.return = e),
              (n.sibling = null),
              null !== t &&
                ((t.nextEffect = null),
                (t.flags = 8),
                (e.firstEffect = e.lastEffect = t)),
              (e.child = n)
            );
          }
          function li(t, e, n, r, i) {
            var a = e.mode,
              o = t.child;
            t = o.sibling;
            var l = { mode: 'hidden', children: n };
            return (
              0 === (2 & a) && e.child !== o
                ? (((n = e.child).childLanes = 0),
                  (n.pendingProps = l),
                  null !== (o = n.lastEffect)
                    ? ((e.firstEffect = n.firstEffect),
                      (e.lastEffect = o),
                      (o.nextEffect = null))
                    : (e.firstEffect = e.lastEffect = null))
                : (n = ko(o, l)),
              null !== t
                ? (r = ko(t, r))
                : ((r = Po(r, a, i, null)).flags |= 2),
              (r.return = e),
              (n.return = e),
              (n.sibling = r),
              (e.child = n),
              r
            );
          }
          function si(t, e) {
            t.lanes |= e;
            var n = t.alternate;
            null !== n && (n.lanes |= e), cn(t.return, e);
          }
          function ui(t, e, n, r, i, a) {
            var o = t.memoizedState;
            null === o
              ? (t.memoizedState = {
                  isBackwards: e,
                  rendering: null,
                  renderingStartTime: 0,
                  last: r,
                  tail: n,
                  tailMode: i,
                  lastEffect: a,
                })
              : ((o.isBackwards = e),
                (o.rendering = null),
                (o.renderingStartTime = 0),
                (o.last = r),
                (o.tail = n),
                (o.tailMode = i),
                (o.lastEffect = a));
          }
          function ci(t, e, n) {
            var r = e.pendingProps,
              i = r.revealOrder,
              a = r.tail;
            if ((Hr(t, e, r.children, n), 0 !== (2 & (r = Hn.current))))
              (r = (1 & r) | 2), (e.flags |= 64);
            else {
              if (null !== t && 0 !== (64 & t.flags))
                t: for (t = e.child; null !== t; ) {
                  if (13 === t.tag) null !== t.memoizedState && si(t, n);
                  else if (19 === t.tag) si(t, n);
                  else if (null !== t.child) {
                    (t.child.return = t), (t = t.child);
                    continue;
                  }
                  if (t === e) break t;
                  for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e) break t;
                    t = t.return;
                  }
                  (t.sibling.return = t.return), (t = t.sibling);
                }
              r &= 1;
            }
            if ((Zt(Hn, r), 0 === (2 & e.mode))) e.memoizedState = null;
            else
              switch (i) {
                case 'forwards':
                  for (n = e.child, i = null; null !== n; )
                    null !== (t = n.alternate) && null === Vn(t) && (i = n),
                      (n = n.sibling);
                  null === (n = i)
                    ? ((i = e.child), (e.child = null))
                    : ((i = n.sibling), (n.sibling = null)),
                    ui(e, !1, i, n, a, e.lastEffect);
                  break;
                case 'backwards':
                  for (n = null, i = e.child, e.child = null; null !== i; ) {
                    if (null !== (t = i.alternate) && null === Vn(t)) {
                      e.child = i;
                      break;
                    }
                    (t = i.sibling), (i.sibling = n), (n = i), (i = t);
                  }
                  ui(e, !0, n, null, a, e.lastEffect);
                  break;
                case 'together':
                  ui(e, !1, null, null, void 0, e.lastEffect);
                  break;
                default:
                  e.memoizedState = null;
              }
            return e.child;
          }
          function fi(t, e, n) {
            if (
              (null !== t && (e.dependencies = t.dependencies),
              (fa |= e.lanes),
              0 !== (n & e.childLanes))
            ) {
              if (null !== t && e.child !== t.child) throw Error(l(153));
              if (null !== e.child) {
                for (
                  n = ko((t = e.child), t.pendingProps),
                    e.child = n,
                    n.return = e;
                  null !== t.sibling;

                )
                  (t = t.sibling),
                    ((n = n.sibling = ko(t, t.pendingProps)).return = e);
                n.sibling = null;
              }
              return e.child;
            }
            return null;
          }
          function di(t) {
            t.flags |= 4;
          }
          if (q)
            (Zr = function (t, e) {
              for (var n = e.child; null !== n; ) {
                if (5 === n.tag || 6 === n.tag) G(t, n.stateNode);
                else if (4 !== n.tag && null !== n.child) {
                  (n.child.return = n), (n = n.child);
                  continue;
                }
                if (n === e) break;
                for (; null === n.sibling; ) {
                  if (null === n.return || n.return === e) return;
                  n = n.return;
                }
                (n.sibling.return = n.return), (n = n.sibling);
              }
            }),
              (ti = function () {}),
              (ei = function (t, e, n, r, i) {
                if ((t = t.memoizedProps) !== r) {
                  var a = e.stateNode,
                    o = zn(Rn.current);
                  (n = H(a, n, t, r, i, o)), (e.updateQueue = n) && di(e);
                }
              }),
              (ni = function (t, e, n, r) {
                n !== r && di(e);
              });
          else if (X) {
            Zr = function (t, e, n, r) {
              for (var i = e.child; null !== i; ) {
                if (5 === i.tag) {
                  var a = i.stateNode;
                  n && r && (a = Ft(a, i.type, i.memoizedProps, i)), G(t, a);
                } else if (6 === i.tag)
                  (a = i.stateNode),
                    n && r && (a = Lt(a, i.memoizedProps, i)),
                    G(t, a);
                else if (4 !== i.tag) {
                  if (
                    13 === i.tag &&
                    0 !== (4 & i.flags) &&
                    (a = null !== i.memoizedState)
                  ) {
                    var o = i.child;
                    if (
                      null !== o &&
                      (null !== o.child &&
                        ((o.child.return = o), Zr(t, o, !0, a)),
                      null !== (a = o.sibling))
                    ) {
                      (a.return = i), (i = a);
                      continue;
                    }
                  }
                  if (null !== i.child) {
                    (i.child.return = i), (i = i.child);
                    continue;
                  }
                }
                if (i === e) break;
                for (; null === i.sibling; ) {
                  if (null === i.return || i.return === e) return;
                  i = i.return;
                }
                (i.sibling.return = i.return), (i = i.sibling);
              }
            };
            var hi = function t(e, n, r, i) {
              for (var a = n.child; null !== a; ) {
                if (5 === a.tag) {
                  var o = a.stateNode;
                  r && i && (o = Ft(o, a.type, a.memoizedProps, a)), Nt(e, o);
                } else if (6 === a.tag)
                  (o = a.stateNode),
                    r && i && (o = Lt(o, a.memoizedProps, a)),
                    Nt(e, o);
                else if (4 !== a.tag) {
                  if (
                    13 === a.tag &&
                    0 !== (4 & a.flags) &&
                    (o = null !== a.memoizedState)
                  ) {
                    var l = a.child;
                    if (
                      null !== l &&
                      (null !== l.child &&
                        ((l.child.return = l), t(e, l, !0, o)),
                      null !== (o = l.sibling))
                    ) {
                      (o.return = a), (a = o);
                      continue;
                    }
                  }
                  if (null !== a.child) {
                    (a.child.return = a), (a = a.child);
                    continue;
                  }
                }
                if (a === n) break;
                for (; null === a.sibling; ) {
                  if (null === a.return || a.return === n) return;
                  a = a.return;
                }
                (a.sibling.return = a.return), (a = a.sibling);
              }
            };
            (ti = function (t) {
              var e = t.stateNode;
              if (null !== t.firstEffect) {
                var n = e.containerInfo,
                  r = Ot(n);
                hi(r, t, !1, !1), (e.pendingChildren = r), di(t), Mt(n, r);
              }
            }),
              (ei = function (t, e, n, r, i) {
                var a = t.stateNode,
                  o = t.memoizedProps;
                if ((t = null === e.firstEffect) && o === r) e.stateNode = a;
                else {
                  var l = e.stateNode,
                    s = zn(Rn.current),
                    u = null;
                  o !== r && (u = H(l, n, o, r, i, s)),
                    t && null === u
                      ? (e.stateNode = a)
                      : ((a = Tt(a, u, n, o, r, e, t, l)),
                        B(a, n, r, i, s) && di(e),
                        (e.stateNode = a),
                        t ? di(e) : Zr(a, e, !1, !1));
                }
              }),
              (ni = function (t, e, n, r) {
                n !== r
                  ? ((t = zn(Dn.current)),
                    (n = zn(Rn.current)),
                    (e.stateNode = W(r, t, n, e)),
                    di(e))
                  : (e.stateNode = t.stateNode);
              });
          } else
            (ti = function () {}), (ei = function () {}), (ni = function () {});
          function pi(t, e) {
            if (!$n)
              switch (t.tailMode) {
                case 'hidden':
                  e = t.tail;
                  for (var n = null; null !== e; )
                    null !== e.alternate && (n = e), (e = e.sibling);
                  null === n ? (t.tail = null) : (n.sibling = null);
                  break;
                case 'collapsed':
                  n = t.tail;
                  for (var r = null; null !== n; )
                    null !== n.alternate && (r = n), (n = n.sibling);
                  null === r
                    ? e || null === t.tail
                      ? (t.tail = null)
                      : (t.tail.sibling = null)
                    : (r.sibling = null);
              }
          }
          function gi(t, e, n) {
            var r = e.pendingProps;
            switch (e.tag) {
              case 2:
              case 16:
              case 15:
              case 0:
              case 11:
              case 7:
              case 8:
              case 12:
              case 9:
              case 14:
                return null;
              case 1:
                return ae(e.type) && oe(), null;
              case 3:
                return (
                  jn(),
                  Jt(ne),
                  Jt(ee),
                  er(),
                  (r = e.stateNode).pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                  (null !== t && null !== t.child) ||
                    (Jn(e) ? di(e) : r.hydrate || (e.flags |= 256)),
                  ti(e),
                  null
                );
              case 5:
                Bn(e);
                var i = zn(Dn.current);
                if (((n = e.type), null !== t && null != e.stateNode))
                  ei(t, e, n, r, i), t.ref !== e.ref && (e.flags |= 128);
                else {
                  if (!r) {
                    if (null === e.stateNode) throw Error(l(166));
                    return null;
                  }
                  if (((t = zn(Rn.current)), Jn(e))) {
                    if (!J) throw Error(l(175));
                    (t = Gt(e.stateNode, e.type, e.memoizedProps, i, t, e)),
                      (e.updateQueue = t),
                      null !== t && di(e);
                  } else {
                    var a = j(n, r, i, t, e);
                    Zr(a, e, !1, !1),
                      (e.stateNode = a),
                      B(a, n, r, i, t) && di(e);
                  }
                  null !== e.ref && (e.flags |= 128);
                }
                return null;
              case 6:
                if (t && null != e.stateNode) ni(t, e, t.memoizedProps, r);
                else {
                  if ('string' !== typeof r && null === e.stateNode)
                    throw Error(l(166));
                  if (((t = zn(Dn.current)), (i = zn(Rn.current)), Jn(e))) {
                    if (!J) throw Error(l(176));
                    Bt(e.stateNode, e.memoizedProps, e) && di(e);
                  } else e.stateNode = W(r, t, i, e);
                }
                return null;
              case 13:
                return (
                  Jt(Hn),
                  (r = e.memoizedState),
                  0 !== (64 & e.flags)
                    ? ((e.lanes = n), e)
                    : ((r = null !== r),
                      (i = !1),
                      null === t
                        ? void 0 !== e.memoizedProps.fallback && Jn(e)
                        : (i = null !== t.memoizedState),
                      r &&
                        !i &&
                        0 !== (2 & e.mode) &&
                        ((null === t &&
                          !0 !== e.memoizedProps.unstable_avoidThisFallback) ||
                        0 !== (1 & Hn.current)
                          ? 0 === sa && (sa = 3)
                          : ((0 !== sa && 3 !== sa) || (sa = 4),
                            null === ra ||
                              (0 === (134217727 & fa) &&
                                0 === (134217727 & da)) ||
                              Ba(ra, aa))),
                      X && r && (e.flags |= 4),
                      q && (r || i) && (e.flags |= 4),
                      null)
                );
              case 4:
                return (
                  jn(), ti(e), null === t && it(e.stateNode.containerInfo), null
                );
              case 10:
                return un(e), null;
              case 17:
                return ae(e.type) && oe(), null;
              case 19:
                if ((Jt(Hn), null === (r = e.memoizedState))) return null;
                if (((i = 0 !== (64 & e.flags)), null === (a = r.rendering)))
                  if (i) pi(r, !1);
                  else {
                    if (0 !== sa || (null !== t && 0 !== (64 & t.flags)))
                      for (t = e.child; null !== t; ) {
                        if (null !== (a = Vn(t))) {
                          for (
                            e.flags |= 64,
                              pi(r, !1),
                              null !== (t = a.updateQueue) &&
                                ((e.updateQueue = t), (e.flags |= 4)),
                              null === r.lastEffect && (e.firstEffect = null),
                              e.lastEffect = r.lastEffect,
                              t = n,
                              r = e.child;
                            null !== r;

                          )
                            (n = t),
                              ((i = r).flags &= 2),
                              (i.nextEffect = null),
                              (i.firstEffect = null),
                              (i.lastEffect = null),
                              null === (a = i.alternate)
                                ? ((i.childLanes = 0),
                                  (i.lanes = n),
                                  (i.child = null),
                                  (i.memoizedProps = null),
                                  (i.memoizedState = null),
                                  (i.updateQueue = null),
                                  (i.dependencies = null),
                                  (i.stateNode = null))
                                : ((i.childLanes = a.childLanes),
                                  (i.lanes = a.lanes),
                                  (i.child = a.child),
                                  (i.memoizedProps = a.memoizedProps),
                                  (i.memoizedState = a.memoizedState),
                                  (i.updateQueue = a.updateQueue),
                                  (i.type = a.type),
                                  (n = a.dependencies),
                                  (i.dependencies =
                                    null === n
                                      ? null
                                      : {
                                          lanes: n.lanes,
                                          firstContext: n.firstContext,
                                        })),
                              (r = r.sibling);
                          return Zt(Hn, (1 & Hn.current) | 2), e.child;
                        }
                        t = t.sibling;
                      }
                    null !== r.tail &&
                      He() > va &&
                      ((e.flags |= 64),
                      (i = !0),
                      pi(r, !1),
                      (e.lanes = 33554432));
                  }
                else {
                  if (!i)
                    if (null !== (t = Vn(a))) {
                      if (
                        ((e.flags |= 64),
                        (i = !0),
                        null !== (t = t.updateQueue) &&
                          ((e.updateQueue = t), (e.flags |= 4)),
                        pi(r, !0),
                        null === r.tail &&
                          'hidden' === r.tailMode &&
                          !a.alternate &&
                          !$n)
                      )
                        return (
                          null !== (e = e.lastEffect = r.lastEffect) &&
                            (e.nextEffect = null),
                          null
                        );
                    } else
                      2 * He() - r.renderingStartTime > va &&
                        1073741824 !== n &&
                        ((e.flags |= 64),
                        (i = !0),
                        pi(r, !1),
                        (e.lanes = 33554432));
                  r.isBackwards
                    ? ((a.sibling = e.child), (e.child = a))
                    : (null !== (t = r.last) ? (t.sibling = a) : (e.child = a),
                      (r.last = a));
                }
                return null !== r.tail
                  ? ((t = r.tail),
                    (r.rendering = t),
                    (r.tail = t.sibling),
                    (r.lastEffect = e.lastEffect),
                    (r.renderingStartTime = He()),
                    (t.sibling = null),
                    (e = Hn.current),
                    Zt(Hn, i ? (1 & e) | 2 : 1 & e),
                    t)
                  : null;
              case 23:
              case 24:
                return (
                  $a(),
                  null !== t &&
                    (null !== t.memoizedState) !== (null !== e.memoizedState) &&
                    'unstable-defer-without-hiding' !== r.mode &&
                    (e.flags |= 4),
                  null
                );
            }
            throw Error(l(156, e.tag));
          }
          function vi(t) {
            switch (t.tag) {
              case 1:
                ae(t.type) && oe();
                var e = t.flags;
                return 4096 & e ? ((t.flags = (-4097 & e) | 64), t) : null;
              case 3:
                if ((jn(), Jt(ne), Jt(ee), er(), 0 !== (64 & (e = t.flags))))
                  throw Error(l(285));
                return (t.flags = (-4097 & e) | 64), t;
              case 5:
                return Bn(t), null;
              case 13:
                return (
                  Jt(Hn),
                  4096 & (e = t.flags)
                    ? ((t.flags = (-4097 & e) | 64), t)
                    : null
                );
              case 19:
                return Jt(Hn), null;
              case 4:
                return jn(), null;
              case 10:
                return un(t), null;
              case 23:
              case 24:
                return $a(), null;
              default:
                return null;
            }
          }
          function yi(t, e) {
            try {
              var n = '',
                r = e;
              do {
                (n += tn(r)), (r = r.return);
              } while (r);
              var i = n;
            } catch (a) {
              i = '\nError generating stack: ' + a.message + '\n' + a.stack;
            }
            return { value: t, source: e, stack: i };
          }
          function mi(t, e) {
            try {
              console.error(e.value);
            } catch (n) {
              setTimeout(function () {
                throw n;
              });
            }
          }
          var bi = 'function' === typeof WeakMap ? WeakMap : Map;
          function _i(t, e, n) {
            ((n = vn(-1, n)).tag = 3), (n.payload = { element: null });
            var r = e.value;
            return (
              (n.callback = function () {
                _a || ((_a = !0), (wa = r)), mi(0, e);
              }),
              n
            );
          }
          function wi(t, e, n) {
            (n = vn(-1, n)).tag = 3;
            var r = t.type.getDerivedStateFromError;
            if ('function' === typeof r) {
              var i = e.value;
              n.payload = function () {
                return mi(0, e), r(i);
              };
            }
            var a = t.stateNode;
            return (
              null !== a &&
                'function' === typeof a.componentDidCatch &&
                (n.callback = function () {
                  'function' !== typeof r &&
                    (null === Sa ? (Sa = new Set([this])) : Sa.add(this),
                    mi(0, e));
                  var t = e.stack;
                  this.componentDidCatch(e.value, {
                    componentStack: null !== t ? t : '',
                  });
                }),
              n
            );
          }
          var Si = 'function' === typeof WeakSet ? WeakSet : Set;
          function xi(t) {
            var e = t.ref;
            if (null !== e)
              if ('function' === typeof e)
                try {
                  e(null);
                } catch (n) {
                  co(t, n);
                }
              else e.current = null;
          }
          function ki(t, e) {
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
              case 22:
                return;
              case 1:
                if (256 & e.flags && null !== t) {
                  var n = t.memoizedProps,
                    r = t.memoizedState;
                  (e = (t = e.stateNode).getSnapshotBeforeUpdate(
                    e.elementType === e.type ? n : en(e.type, n),
                    r
                  )),
                    (t.__reactInternalSnapshotBeforeUpdate = e);
                }
                return;
              case 3:
                return void (
                  q &&
                  256 & e.flags &&
                  Et(e.stateNode.containerInfo)
                );
              case 5:
              case 6:
              case 4:
              case 17:
                return;
            }
            throw Error(l(163));
          }
          function Ci(t, e) {
            if (
              null !== (e = null !== (e = e.updateQueue) ? e.lastEffect : null)
            ) {
              var n = (e = e.next);
              do {
                if ((n.tag & t) === t) {
                  var r = n.destroy;
                  (n.destroy = void 0), void 0 !== r && r();
                }
                n = n.next;
              } while (n !== e);
            }
          }
          function Pi(t, e, n) {
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
              case 22:
                if (
                  null !==
                  (e = null !== (e = n.updateQueue) ? e.lastEffect : null)
                ) {
                  t = e = e.next;
                  do {
                    if (3 === (3 & t.tag)) {
                      var r = t.create;
                      t.destroy = r();
                    }
                    t = t.next;
                  } while (t !== e);
                }
                if (
                  null !==
                  (e = null !== (e = n.updateQueue) ? e.lastEffect : null)
                ) {
                  t = e = e.next;
                  do {
                    var i = t;
                    (r = i.next),
                      0 !== (4 & (i = i.tag)) &&
                        0 !== (1 & i) &&
                        (lo(n, t), oo(n, t)),
                      (t = r);
                  } while (t !== e);
                }
                return;
              case 1:
                return (
                  (t = n.stateNode),
                  4 & n.flags &&
                    (null === e
                      ? t.componentDidMount()
                      : ((r =
                          n.elementType === n.type
                            ? e.memoizedProps
                            : en(n.type, e.memoizedProps)),
                        t.componentDidUpdate(
                          r,
                          e.memoizedState,
                          t.__reactInternalSnapshotBeforeUpdate
                        ))),
                  void (null !== (e = n.updateQueue) && _n(n, e, t))
                );
              case 3:
                if (null !== (e = n.updateQueue)) {
                  if (((t = null), null !== n.child))
                    switch (n.child.tag) {
                      case 5:
                        t = R(n.child.stateNode);
                        break;
                      case 1:
                        t = n.child.stateNode;
                    }
                  _n(n, e, t);
                }
                return;
              case 5:
                return (
                  (t = n.stateNode),
                  void (
                    null === e &&
                    4 & n.flags &&
                    vt(t, n.type, n.memoizedProps, n)
                  )
                );
              case 6:
              case 4:
              case 12:
                return;
              case 13:
                return void (
                  J &&
                  null === n.memoizedState &&
                  ((n = n.alternate),
                  null !== n &&
                    ((n = n.memoizedState),
                    null !== n && ((n = n.dehydrated), null !== n && Wt(n))))
                );
              case 19:
              case 17:
              case 20:
              case 21:
              case 23:
              case 24:
                return;
            }
            throw Error(l(163));
          }
          function Ei(t, e) {
            if (q)
              for (var n = t; ; ) {
                if (5 === n.tag) {
                  var r = n.stateNode;
                  e ? xt(r) : Ct(n.stateNode, n.memoizedProps);
                } else if (6 === n.tag)
                  (r = n.stateNode), e ? kt(r) : Pt(r, n.memoizedProps);
                else if (
                  ((23 !== n.tag && 24 !== n.tag) ||
                    null === n.memoizedState ||
                    n === t) &&
                  null !== n.child
                ) {
                  (n.child.return = n), (n = n.child);
                  continue;
                }
                if (n === t) break;
                for (; null === n.sibling; ) {
                  if (null === n.return || n.return === t) return;
                  n = n.return;
                }
                (n.sibling.return = n.return), (n = n.sibling);
              }
          }
          function Ti(t, e) {
            if (de && 'function' === typeof de.onCommitFiberUnmount)
              try {
                de.onCommitFiberUnmount(fe, e);
              } catch (a) {}
            switch (e.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
              case 22:
                if (
                  null !== (t = e.updateQueue) &&
                  null !== (t = t.lastEffect)
                ) {
                  var n = (t = t.next);
                  do {
                    var r = n,
                      i = r.destroy;
                    if (((r = r.tag), void 0 !== i))
                      if (0 !== (4 & r)) lo(e, n);
                      else {
                        r = e;
                        try {
                          i();
                        } catch (a) {
                          co(r, a);
                        }
                      }
                    n = n.next;
                  } while (n !== t);
                }
                break;
              case 1:
                if (
                  (xi(e),
                  'function' === typeof (t = e.stateNode).componentWillUnmount)
                )
                  try {
                    (t.props = e.memoizedProps),
                      (t.state = e.memoizedState),
                      t.componentWillUnmount();
                  } catch (a) {
                    co(e, a);
                  }
                break;
              case 5:
                xi(e);
                break;
              case 4:
                q
                  ? Ri(t, e)
                  : X &&
                    X &&
                    ((e = e.stateNode.containerInfo), (t = Ot(e)), At(e, t));
            }
          }
          function Oi(t, e) {
            for (var n = e; ; )
              if ((Ti(t, n), null === n.child || (q && 4 === n.tag))) {
                if (n === e) break;
                for (; null === n.sibling; ) {
                  if (null === n.return || n.return === e) return;
                  n = n.return;
                }
                (n.sibling.return = n.return), (n = n.sibling);
              } else (n.child.return = n), (n = n.child);
          }
          function Ni(t) {
            (t.alternate = null),
              (t.child = null),
              (t.dependencies = null),
              (t.firstEffect = null),
              (t.lastEffect = null),
              (t.memoizedProps = null),
              (t.memoizedState = null),
              (t.pendingProps = null),
              (t.return = null),
              (t.updateQueue = null);
          }
          function Mi(t) {
            return 5 === t.tag || 3 === t.tag || 4 === t.tag;
          }
          function Ai(t) {
            if (q) {
              t: {
                for (var e = t.return; null !== e; ) {
                  if (Mi(e)) break t;
                  e = e.return;
                }
                throw Error(l(160));
              }
              var n = e;
              switch (((e = n.stateNode), n.tag)) {
                case 5:
                  var r = !1;
                  break;
                case 3:
                case 4:
                  (e = e.containerInfo), (r = !0);
                  break;
                default:
                  throw Error(l(161));
              }
              16 & n.flags && (St(e), (n.flags &= -17));
              t: e: for (n = t; ; ) {
                for (; null === n.sibling; ) {
                  if (null === n.return || Mi(n.return)) {
                    n = null;
                    break t;
                  }
                  n = n.return;
                }
                for (
                  n.sibling.return = n.return, n = n.sibling;
                  5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

                ) {
                  if (2 & n.flags) continue e;
                  if (null === n.child || 4 === n.tag) continue e;
                  (n.child.return = n), (n = n.child);
                }
                if (!(2 & n.flags)) {
                  n = n.stateNode;
                  break t;
                }
              }
              r ? Fi(t, n, e) : Li(t, n, e);
            }
          }
          function Fi(t, e, n) {
            var r = t.tag,
              i = 5 === r || 6 === r;
            if (i)
              (t = i ? t.stateNode : t.stateNode.instance),
                e ? bt(n, t, e) : pt(n, t);
            else if (4 !== r && null !== (t = t.child))
              for (Fi(t, e, n), t = t.sibling; null !== t; )
                Fi(t, e, n), (t = t.sibling);
          }
          function Li(t, e, n) {
            var r = t.tag,
              i = 5 === r || 6 === r;
            if (i)
              (t = i ? t.stateNode : t.stateNode.instance),
                e ? mt(n, t, e) : ht(n, t);
            else if (4 !== r && null !== (t = t.child))
              for (Li(t, e, n), t = t.sibling; null !== t; )
                Li(t, e, n), (t = t.sibling);
          }
          function Ri(t, e) {
            for (var n, r, i = e, a = !1; ; ) {
              if (!a) {
                a = i.return;
                t: for (;;) {
                  if (null === a) throw Error(l(160));
                  switch (((n = a.stateNode), a.tag)) {
                    case 5:
                      r = !1;
                      break t;
                    case 3:
                    case 4:
                      (n = n.containerInfo), (r = !0);
                      break t;
                  }
                  a = a.return;
                }
                a = !0;
              }
              if (5 === i.tag || 6 === i.tag)
                Oi(t, i), r ? wt(n, i.stateNode) : _t(n, i.stateNode);
              else if (4 === i.tag) {
                if (null !== i.child) {
                  (n = i.stateNode.containerInfo),
                    (r = !0),
                    (i.child.return = i),
                    (i = i.child);
                  continue;
                }
              } else if ((Ti(t, i), null !== i.child)) {
                (i.child.return = i), (i = i.child);
                continue;
              }
              if (i === e) break;
              for (; null === i.sibling; ) {
                if (null === i.return || i.return === e) return;
                4 === (i = i.return).tag && (a = !1);
              }
              (i.sibling.return = i.return), (i = i.sibling);
            }
          }
          function Ii(t, e) {
            if (q) {
              switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                case 22:
                  return void Ci(3, e);
                case 1:
                  return;
                case 5:
                  var n = e.stateNode;
                  if (null != n) {
                    var r = e.memoizedProps;
                    t = null !== t ? t.memoizedProps : r;
                    var i = e.type,
                      a = e.updateQueue;
                    (e.updateQueue = null), null !== a && yt(n, a, i, t, r, e);
                  }
                  return;
                case 6:
                  if (null === e.stateNode) throw Error(l(162));
                  return (
                    (n = e.memoizedProps),
                    void gt(e.stateNode, null !== t ? t.memoizedProps : n, n)
                  );
                case 3:
                  return void (
                    J &&
                    ((e = e.stateNode),
                    e.hydrate && ((e.hydrate = !1), Vt(e.containerInfo)))
                  );
                case 12:
                  return;
                case 13:
                  return Di(e), void zi(e);
                case 19:
                  return void zi(e);
                case 17:
                  return;
                case 23:
                case 24:
                  return void Ei(e, null !== e.memoizedState);
              }
              throw Error(l(163));
            }
            switch (e.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
              case 22:
                return void Ci(3, e);
              case 12:
                return;
              case 13:
                return Di(e), void zi(e);
              case 19:
                return void zi(e);
              case 3:
                J &&
                  (n = e.stateNode).hydrate &&
                  ((n.hydrate = !1), Vt(n.containerInfo));
                break;
              case 23:
              case 24:
                return;
            }
            t: if (X) {
              switch (e.tag) {
                case 1:
                case 5:
                case 6:
                case 20:
                  break t;
                case 3:
                case 4:
                  (e = e.stateNode), At(e.containerInfo, e.pendingChildren);
                  break t;
              }
              throw Error(l(163));
            }
          }
          function Di(t) {
            null !== t.memoizedState && ((ga = He()), q && Ei(t.child, !0));
          }
          function zi(t) {
            var e = t.updateQueue;
            if (null !== e) {
              t.updateQueue = null;
              var n = t.stateNode;
              null === n && (n = t.stateNode = new Si()),
                e.forEach(function (e) {
                  var r = ho.bind(null, t, e);
                  n.has(e) || (n.add(e), e.then(r, r));
                });
            }
          }
          function Ui(t, e) {
            return (
              null !== t &&
              (null === (t = t.memoizedState) || null !== t.dehydrated) &&
              null !== (e = e.memoizedState) &&
              null === e.dehydrated
            );
          }
          var ji = 0,
            Gi = 1,
            Bi = 2,
            Hi = 3,
            Vi = 4;
          if ('function' === typeof Symbol && Symbol.for) {
            var Wi = Symbol.for;
            (ji = Wi('selector.component')),
              (Gi = Wi('selector.has_pseudo_class')),
              (Bi = Wi('selector.role')),
              (Hi = Wi('selector.test_id')),
              (Vi = Wi('selector.text'));
          }
          function Ki(t) {
            var e = Z(t);
            if (null != e) {
              if ('string' !== typeof e.memoizedProps['data-testname'])
                throw Error(l(364));
              return e;
            }
            if (null === (t = ot(t))) throw Error(l(362));
            return t.stateNode.current;
          }
          function $i(t, e) {
            switch (e.$$typeof) {
              case ji:
                if (t.type === e.value) return !0;
                break;
              case Gi:
                t: {
                  (e = e.value), (t = [t, 0]);
                  for (var n = 0; n < t.length; ) {
                    var r = t[n++],
                      i = t[n++],
                      a = e[i];
                    if (5 !== r.tag || !ut(r)) {
                      for (; null != a && $i(r, a); ) a = e[++i];
                      if (i === e.length) {
                        e = !0;
                        break t;
                      }
                      for (r = r.child; null !== r; )
                        t.push(r, i), (r = r.sibling);
                    }
                  }
                  e = !1;
                }
                return e;
              case Bi:
                if (5 === t.tag && ct(t.stateNode, e.value)) return !0;
                break;
              case Vi:
                if (
                  (5 === t.tag || 6 === t.tag) &&
                  null !== (t = st(t)) &&
                  0 <= t.indexOf(e.value)
                )
                  return !0;
                break;
              case Hi:
                if (
                  5 === t.tag &&
                  'string' === typeof (t = t.memoizedProps['data-testname']) &&
                  t.toLowerCase() === e.value.toLowerCase()
                )
                  return !0;
                break;
              default:
                throw Error(l(365, e));
            }
            return !1;
          }
          function Yi(t) {
            switch (t.$$typeof) {
              case ji:
                return '<' + (T(t.value) || 'Unknown') + '>';
              case Gi:
                return ':has(' + (Yi(t) || '') + ')';
              case Bi:
                return '[role="' + t.value + '"]';
              case Vi:
                return '"' + t.value + '"';
              case Hi:
                return '[data-testname="' + t.value + '"]';
              default:
                throw Error(l(365, t));
            }
          }
          function Qi(t, e) {
            var n = [];
            t = [t, 0];
            for (var r = 0; r < t.length; ) {
              var i = t[r++],
                a = t[r++],
                o = e[a];
              if (5 !== i.tag || !ut(i)) {
                for (; null != o && $i(i, o); ) o = e[++a];
                if (a === e.length) n.push(i);
                else
                  for (i = i.child; null !== i; ) t.push(i, a), (i = i.sibling);
              }
            }
            return n;
          }
          function qi(t, e) {
            if (!at) throw Error(l(363));
            (t = Qi((t = Ki(t)), e)), (e = []), (t = Array.from(t));
            for (var n = 0; n < t.length; ) {
              var r = t[n++];
              if (5 === r.tag) ut(r) || e.push(r.stateNode);
              else for (r = r.child; null !== r; ) t.push(r), (r = r.sibling);
            }
            return e;
          }
          var Xi = null;
          var Ji = Math.ceil,
            Zi = s.ReactCurrentDispatcher,
            ta = s.ReactCurrentOwner,
            ea = s.IsSomeRendererActing,
            na = 0,
            ra = null,
            ia = null,
            aa = 0,
            oa = 0,
            la = Xt(0),
            sa = 0,
            ua = null,
            ca = 0,
            fa = 0,
            da = 0,
            ha = 0,
            pa = null,
            ga = 0,
            va = 1 / 0;
          function ya() {
            va = He() + 500;
          }
          var ma,
            ba = null,
            _a = !1,
            wa = null,
            Sa = null,
            xa = !1,
            ka = null,
            Ca = 90,
            Pa = [],
            Ea = [],
            Ta = null,
            Oa = 0,
            Na = null,
            Ma = -1,
            Aa = 0,
            Fa = 0,
            La = null,
            Ra = !1;
          function Ia() {
            return 0 !== (48 & na) ? He() : -1 !== Ma ? Ma : (Ma = He());
          }
          function Da(t) {
            if (0 === (2 & (t = t.mode))) return 1;
            if (0 === (4 & t)) return 99 === Ve() ? 1 : 2;
            if ((0 === Aa && (Aa = ca), 0 !== qe.transition)) {
              0 !== Fa && (Fa = null !== pa ? pa.pendingLanes : 0), (t = Aa);
              var e = 4186112 & ~Fa;
              return (
                0 === (e &= -e) &&
                  0 === (e = (t = 4186112 & ~t) & -t) &&
                  (e = 8192),
                e
              );
            }
            return (
              (t = Ve()),
              0 !== (4 & na) && 98 === t
                ? (t = me(12, Aa))
                : (t = me(
                    (t = (function (t) {
                      switch (t) {
                        case 99:
                          return 15;
                        case 98:
                          return 10;
                        case 97:
                        case 96:
                          return 8;
                        case 95:
                          return 2;
                        default:
                          return 0;
                      }
                    })(t)),
                    Aa
                  )),
              t
            );
          }
          function za(t, e, n) {
            if (50 < Oa) throw ((Oa = 0), (Na = null), Error(l(185)));
            if (null === (t = Ua(t, e))) return null;
            we(t, e, n), t === ra && ((da |= e), 4 === sa && Ba(t, aa));
            var r = Ve();
            1 === e
              ? 0 !== (8 & na) && 0 === (48 & na)
                ? Ha(t)
                : (ja(t, n), 0 === na && (ya(), Ye()))
              : (0 === (4 & na) ||
                  (98 !== r && 99 !== r) ||
                  (null === Ta ? (Ta = new Set([t])) : Ta.add(t)),
                ja(t, n)),
              (pa = t);
          }
          function Ua(t, e) {
            t.lanes |= e;
            var n = t.alternate;
            for (
              null !== n && (n.lanes |= e), n = t, t = t.return;
              null !== t;

            )
              (t.childLanes |= e),
                null !== (n = t.alternate) && (n.childLanes |= e),
                (n = t),
                (t = t.return);
            return 3 === n.tag ? n.stateNode : null;
          }
          function ja(t, e) {
            for (
              var n = t.callbackNode,
                r = t.suspendedLanes,
                i = t.pingedLanes,
                a = t.expirationTimes,
                o = t.pendingLanes;
              0 < o;

            ) {
              var s = 31 - Se(o),
                u = 1 << s,
                c = a[s];
              if (-1 === c) {
                if (0 === (u & r) || 0 !== (u & i)) {
                  (c = e), ge(u);
                  var f = pe;
                  a[s] = 10 <= f ? c + 250 : 6 <= f ? c + 5e3 : -1;
                }
              } else c <= e && (t.expiredLanes |= u);
              o &= ~u;
            }
            if (((r = ve(t, t === ra ? aa : 0)), (e = pe), 0 === r))
              null !== n &&
                (n !== De && Ee(n),
                (t.callbackNode = null),
                (t.callbackPriority = 0));
            else {
              if (null !== n) {
                if (t.callbackPriority === e) return;
                n !== De && Ee(n);
              }
              15 === e
                ? ((n = Ha.bind(null, t)),
                  null === Ue ? ((Ue = [n]), (je = Pe(Ae, Qe))) : Ue.push(n),
                  (n = De))
                : 14 === e
                ? (n = $e(99, Ha.bind(null, t)))
                : (n = $e(
                    (n = (function (t) {
                      switch (t) {
                        case 15:
                        case 14:
                          return 99;
                        case 13:
                        case 12:
                        case 11:
                        case 10:
                          return 98;
                        case 9:
                        case 8:
                        case 7:
                        case 6:
                        case 4:
                        case 5:
                          return 97;
                        case 3:
                        case 2:
                        case 1:
                          return 95;
                        case 0:
                          return 90;
                        default:
                          throw Error(l(358, t));
                      }
                    })(e)),
                    Ga.bind(null, t)
                  )),
                (t.callbackPriority = e),
                (t.callbackNode = n);
            }
          }
          function Ga(t) {
            if (((Ma = -1), (Fa = Aa = 0), 0 !== (48 & na)))
              throw Error(l(327));
            var e = t.callbackNode;
            if (ao() && t.callbackNode !== e) return null;
            var n = ve(t, t === ra ? aa : 0);
            if (0 === n) return null;
            var r = n,
              i = na;
            na |= 16;
            var a = qa();
            for ((ra === t && aa === r) || (ya(), Ya(t, r)); ; )
              try {
                Za();
                break;
              } catch (s) {
                Qa(t, s);
              }
            if (
              (ln(),
              (Zi.current = a),
              (na = i),
              null !== ia ? (r = 0) : ((ra = null), (aa = 0), (r = sa)),
              0 !== (ca & da))
            )
              Ya(t, 0);
            else if (0 !== r) {
              if (
                (2 === r &&
                  ((na |= 64),
                  t.hydrate && ((t.hydrate = !1), Et(t.containerInfo)),
                  0 !== (n = ye(t)) && (r = Xa(t, n))),
                1 === r)
              )
                throw ((e = ua), Ya(t, 0), Ba(t, n), ja(t, He()), e);
              switch (
                ((t.finishedWork = t.current.alternate),
                (t.finishedLanes = n),
                r)
              ) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                  no(t);
                  break;
                case 3:
                  if (
                    (Ba(t, n),
                    (62914560 & n) === n && 10 < (r = ga + 500 - He()))
                  ) {
                    if (0 !== ve(t, 0)) break;
                    if (((i = t.suspendedLanes) & n) !== n) {
                      Ia(), (t.pingedLanes |= t.suspendedLanes & i);
                      break;
                    }
                    t.timeoutHandle = K(no.bind(null, t), r);
                    break;
                  }
                  no(t);
                  break;
                case 4:
                  if ((Ba(t, n), (4186112 & n) === n)) break;
                  for (r = t.eventTimes, i = -1; 0 < n; ) {
                    var o = 31 - Se(n);
                    (a = 1 << o), (o = r[o]) > i && (i = o), (n &= ~a);
                  }
                  if (
                    ((n = i),
                    10 <
                      (n =
                        (120 > (n = He() - n)
                          ? 120
                          : 480 > n
                          ? 480
                          : 1080 > n
                          ? 1080
                          : 1920 > n
                          ? 1920
                          : 3e3 > n
                          ? 3e3
                          : 4320 > n
                          ? 4320
                          : 1960 * Ji(n / 1960)) - n))
                  ) {
                    t.timeoutHandle = K(no.bind(null, t), n);
                    break;
                  }
                  no(t);
                  break;
                case 5:
                  no(t);
                  break;
                default:
                  throw Error(l(329));
              }
            }
            return ja(t, He()), t.callbackNode === e ? Ga.bind(null, t) : null;
          }
          function Ba(t, e) {
            for (
              e &= ~ha,
                e &= ~da,
                t.suspendedLanes |= e,
                t.pingedLanes &= ~e,
                t = t.expirationTimes;
              0 < e;

            ) {
              var n = 31 - Se(e),
                r = 1 << n;
              (t[n] = -1), (e &= ~r);
            }
          }
          function Ha(t) {
            if (0 !== (48 & na)) throw Error(l(327));
            if ((ao(), t === ra && 0 !== (t.expiredLanes & aa))) {
              var e = aa,
                n = Xa(t, e);
              0 !== (ca & da) && (n = Xa(t, (e = ve(t, e))));
            } else n = Xa(t, (e = ve(t, 0)));
            if (
              (0 !== t.tag &&
                2 === n &&
                ((na |= 64),
                t.hydrate && ((t.hydrate = !1), Et(t.containerInfo)),
                0 !== (e = ye(t)) && (n = Xa(t, e))),
              1 === n)
            )
              throw ((n = ua), Ya(t, 0), Ba(t, e), ja(t, He()), n);
            return (
              (t.finishedWork = t.current.alternate),
              (t.finishedLanes = e),
              no(t),
              ja(t, He()),
              null
            );
          }
          function Va(t, e) {
            var n = na;
            na |= 1;
            try {
              return t(e);
            } finally {
              0 === (na = n) && (ya(), Ye());
            }
          }
          function Wa(t, e) {
            var n = na;
            if (0 !== (48 & n)) return t(e);
            na |= 1;
            try {
              if (t) return Ke(99, t.bind(null, e));
            } finally {
              (na = n), Ye();
            }
          }
          function Ka(t, e) {
            Zt(la, oa), (oa |= e), (ca |= e);
          }
          function $a() {
            (oa = la.current), Jt(la);
          }
          function Ya(t, e) {
            (t.finishedWork = null), (t.finishedLanes = 0);
            var n = t.timeoutHandle;
            if ((n !== Y && ((t.timeoutHandle = Y), $(n)), null !== ia))
              for (n = ia.return; null !== n; ) {
                var r = n;
                switch (r.tag) {
                  case 1:
                    null !== (r = r.type.childContextTypes) &&
                      void 0 !== r &&
                      oe();
                    break;
                  case 3:
                    jn(), Jt(ne), Jt(ee), er();
                    break;
                  case 5:
                    Bn(r);
                    break;
                  case 4:
                    jn();
                    break;
                  case 13:
                  case 19:
                    Jt(Hn);
                    break;
                  case 10:
                    un(r);
                    break;
                  case 23:
                  case 24:
                    $a();
                }
                n = n.return;
              }
            (ra = t),
              (ia = ko(t.current, null)),
              (aa = oa = ca = e),
              (sa = 0),
              (ua = null),
              (ha = da = fa = 0);
          }
          function Qa(t, e) {
            for (;;) {
              var n = ia;
              try {
                if ((ln(), (nr.current = Dr), sr)) {
                  for (var r = ar.memoizedState; null !== r; ) {
                    var i = r.queue;
                    null !== i && (i.pending = null), (r = r.next);
                  }
                  sr = !1;
                }
                if (
                  ((ir = 0),
                  (lr = or = ar = null),
                  (ur = !1),
                  (ta.current = null),
                  null === n || null === n.return)
                ) {
                  (sa = 1), (ua = e), (ia = null);
                  break;
                }
                t: {
                  var a = t,
                    o = n.return,
                    l = n,
                    s = e;
                  if (
                    ((e = aa),
                    (l.flags |= 2048),
                    (l.firstEffect = l.lastEffect = null),
                    null !== s &&
                      'object' === typeof s &&
                      'function' === typeof s.then)
                  ) {
                    var u = s;
                    if (0 === (2 & l.mode)) {
                      var c = l.alternate;
                      c
                        ? ((l.updateQueue = c.updateQueue),
                          (l.memoizedState = c.memoizedState),
                          (l.lanes = c.lanes))
                        : ((l.updateQueue = null), (l.memoizedState = null));
                    }
                    var f = 0 !== (1 & Hn.current),
                      d = o;
                    do {
                      var h;
                      if ((h = 13 === d.tag)) {
                        var p = d.memoizedState;
                        if (null !== p) h = null !== p.dehydrated;
                        else {
                          var g = d.memoizedProps;
                          h =
                            void 0 !== g.fallback &&
                            (!0 !== g.unstable_avoidThisFallback || !f);
                        }
                      }
                      if (h) {
                        var v = d.updateQueue;
                        if (null === v) {
                          var y = new Set();
                          y.add(u), (d.updateQueue = y);
                        } else v.add(u);
                        if (0 === (2 & d.mode)) {
                          if (
                            ((d.flags |= 64),
                            (l.flags |= 16384),
                            (l.flags &= -2981),
                            1 === l.tag)
                          )
                            if (null === l.alternate) l.tag = 17;
                            else {
                              var m = vn(-1, 1);
                              (m.tag = 2), yn(l, m);
                            }
                          l.lanes |= 1;
                          break t;
                        }
                        (s = void 0), (l = e);
                        var b = a.pingCache;
                        if (
                          (null === b
                            ? ((b = a.pingCache = new bi()),
                              (s = new Set()),
                              b.set(u, s))
                            : void 0 === (s = b.get(u)) &&
                              ((s = new Set()), b.set(u, s)),
                          !s.has(l))
                        ) {
                          s.add(l);
                          var _ = fo.bind(null, a, u, l);
                          u.then(_, _);
                        }
                        (d.flags |= 4096), (d.lanes = e);
                        break t;
                      }
                      d = d.return;
                    } while (null !== d);
                    s = Error(
                      (T(l.type) || 'A React component') +
                        ' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.'
                    );
                  }
                  5 !== sa && (sa = 2), (s = yi(s, l)), (d = o);
                  do {
                    switch (d.tag) {
                      case 3:
                        (a = s),
                          (d.flags |= 4096),
                          (e &= -e),
                          (d.lanes |= e),
                          mn(d, _i(0, a, e));
                        break t;
                      case 1:
                        a = s;
                        var w = d.type,
                          S = d.stateNode;
                        if (
                          0 === (64 & d.flags) &&
                          ('function' === typeof w.getDerivedStateFromError ||
                            (null !== S &&
                              'function' === typeof S.componentDidCatch &&
                              (null === Sa || !Sa.has(S))))
                        ) {
                          (d.flags |= 4096),
                            (e &= -e),
                            (d.lanes |= e),
                            mn(d, wi(d, a, e));
                          break t;
                        }
                    }
                    d = d.return;
                  } while (null !== d);
                }
                eo(n);
              } catch (x) {
                (e = x), ia === n && null !== n && (ia = n = n.return);
                continue;
              }
              break;
            }
          }
          function qa() {
            var t = Zi.current;
            return (Zi.current = Dr), null === t ? Dr : t;
          }
          function Xa(t, e) {
            var n = na;
            na |= 16;
            var r = qa();
            for ((ra === t && aa === e) || Ya(t, e); ; )
              try {
                Ja();
                break;
              } catch (i) {
                Qa(t, i);
              }
            if ((ln(), (na = n), (Zi.current = r), null !== ia))
              throw Error(l(261));
            return (ra = null), (aa = 0), sa;
          }
          function Ja() {
            for (; null !== ia; ) to(ia);
          }
          function Za() {
            for (; null !== ia && !Te(); ) to(ia);
          }
          function to(t) {
            var e = ma(t.alternate, t, oa);
            (t.memoizedProps = t.pendingProps),
              null === e ? eo(t) : (ia = e),
              (ta.current = null);
          }
          function eo(t) {
            var e = t;
            do {
              var n = e.alternate;
              if (((t = e.return), 0 === (2048 & e.flags))) {
                if (null !== (n = gi(n, e, oa))) return void (ia = n);
                if (
                  (24 !== (n = e).tag && 23 !== n.tag) ||
                  null === n.memoizedState ||
                  0 !== (1073741824 & oa) ||
                  0 === (4 & n.mode)
                ) {
                  for (var r = 0, i = n.child; null !== i; )
                    (r |= i.lanes | i.childLanes), (i = i.sibling);
                  n.childLanes = r;
                }
                null !== t &&
                  0 === (2048 & t.flags) &&
                  (null === t.firstEffect && (t.firstEffect = e.firstEffect),
                  null !== e.lastEffect &&
                    (null !== t.lastEffect &&
                      (t.lastEffect.nextEffect = e.firstEffect),
                    (t.lastEffect = e.lastEffect)),
                  1 < e.flags &&
                    (null !== t.lastEffect
                      ? (t.lastEffect.nextEffect = e)
                      : (t.firstEffect = e),
                    (t.lastEffect = e)));
              } else {
                if (null !== (n = vi(e)))
                  return (n.flags &= 2047), void (ia = n);
                null !== t &&
                  ((t.firstEffect = t.lastEffect = null), (t.flags |= 2048));
              }
              if (null !== (e = e.sibling)) return void (ia = e);
              ia = e = t;
            } while (null !== e);
            0 === sa && (sa = 5);
          }
          function no(t) {
            var e = Ve();
            return Ke(99, ro.bind(null, t, e)), null;
          }
          function ro(t, e) {
            do {
              ao();
            } while (null !== ka);
            if (0 !== (48 & na)) throw Error(l(327));
            var n = t.finishedWork;
            if (null === n) return null;
            if (
              ((t.finishedWork = null), (t.finishedLanes = 0), n === t.current)
            )
              throw Error(l(177));
            t.callbackNode = null;
            var r = n.lanes | n.childLanes,
              i = r,
              a = t.pendingLanes & ~i;
            (t.pendingLanes = i),
              (t.suspendedLanes = 0),
              (t.pingedLanes = 0),
              (t.expiredLanes &= i),
              (t.mutableReadLanes &= i),
              (t.entangledLanes &= i),
              (i = t.entanglements);
            for (var o = t.eventTimes, s = t.expirationTimes; 0 < a; ) {
              var u = 31 - Se(a),
                c = 1 << u;
              (i[u] = 0), (o[u] = -1), (s[u] = -1), (a &= ~c);
            }
            if (
              (null !== Ta && 0 === (24 & r) && Ta.has(t) && Ta.delete(t),
              t === ra && ((ia = ra = null), (aa = 0)),
              1 < n.flags
                ? null !== n.lastEffect
                  ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
                  : (r = n)
                : (r = n.firstEffect),
              null !== r)
            ) {
              (i = na),
                (na |= 32),
                (ta.current = null),
                (La = z(t.containerInfo)),
                (Ra = !1),
                (ba = r);
              do {
                try {
                  io();
                } catch (m) {
                  if (null === ba) throw Error(l(330));
                  co(ba, m), (ba = ba.nextEffect);
                }
              } while (null !== ba);
              (La = null), (ba = r);
              do {
                try {
                  for (o = t; null !== ba; ) {
                    var f = ba.flags;
                    if ((16 & f && q && St(ba.stateNode), 128 & f)) {
                      var d = ba.alternate;
                      if (null !== d) {
                        var h = d.ref;
                        null !== h &&
                          ('function' === typeof h
                            ? h(null)
                            : (h.current = null));
                      }
                    }
                    switch (1038 & f) {
                      case 2:
                        Ai(ba), (ba.flags &= -3);
                        break;
                      case 6:
                        Ai(ba), (ba.flags &= -3), Ii(ba.alternate, ba);
                        break;
                      case 1024:
                        ba.flags &= -1025;
                        break;
                      case 1028:
                        (ba.flags &= -1025), Ii(ba.alternate, ba);
                        break;
                      case 4:
                        Ii(ba.alternate, ba);
                        break;
                      case 8:
                        (s = o), (a = ba), q ? Ri(s, a) : Oi(s, a);
                        var p = a.alternate;
                        Ni(a), null !== p && Ni(p);
                    }
                    ba = ba.nextEffect;
                  }
                } catch (m) {
                  if (null === ba) throw Error(l(330));
                  co(ba, m), (ba = ba.nextEffect);
                }
              } while (null !== ba);
              Ra && rt(), U(t.containerInfo), (t.current = n), (ba = r);
              do {
                try {
                  for (f = t; null !== ba; ) {
                    var g = ba.flags;
                    if ((36 & g && Pi(f, ba.alternate, ba), 128 & g)) {
                      d = void 0;
                      var v = ba.ref;
                      if (null !== v) {
                        var y = ba.stateNode;
                        switch (ba.tag) {
                          case 5:
                            d = R(y);
                            break;
                          default:
                            d = y;
                        }
                        'function' === typeof v ? v(d) : (v.current = d);
                      }
                    }
                    ba = ba.nextEffect;
                  }
                } catch (m) {
                  if (null === ba) throw Error(l(330));
                  co(ba, m), (ba = ba.nextEffect);
                }
              } while (null !== ba);
              (ba = null), ze(), (na = i);
            } else t.current = n;
            if (xa) (xa = !1), (ka = t), (Ca = e);
            else
              for (ba = r; null !== ba; )
                (e = ba.nextEffect),
                  (ba.nextEffect = null),
                  8 & ba.flags &&
                    (((g = ba).sibling = null), (g.stateNode = null)),
                  (ba = e);
            if (
              (0 === (r = t.pendingLanes) && (Sa = null),
              1 === r ? (t === Na ? Oa++ : ((Oa = 0), (Na = t))) : (Oa = 0),
              (n = n.stateNode),
              de && 'function' === typeof de.onCommitFiberRoot)
            )
              try {
                de.onCommitFiberRoot(
                  fe,
                  n,
                  void 0,
                  64 === (64 & n.current.flags)
                );
              } catch (m) {}
            if ((ja(t, He()), _a)) throw ((_a = !1), (t = wa), (wa = null), t);
            return 0 !== (8 & na) || Ye(), null;
          }
          function io() {
            for (; null !== ba; ) {
              var t = ba.alternate;
              Ra ||
                null === La ||
                (0 !== (8 & ba.flags)
                  ? F(ba, La) && ((Ra = !0), nt())
                  : 13 === ba.tag &&
                    Ui(t, ba) &&
                    F(ba, La) &&
                    ((Ra = !0), nt()));
              var e = ba.flags;
              0 !== (256 & e) && ki(t, ba),
                0 === (512 & e) ||
                  xa ||
                  ((xa = !0),
                  $e(97, function () {
                    return ao(), null;
                  })),
                (ba = ba.nextEffect);
            }
          }
          function ao() {
            if (90 !== Ca) {
              var t = 97 < Ca ? 97 : Ca;
              return (Ca = 90), Ke(t, so);
            }
            return !1;
          }
          function oo(t, e) {
            Pa.push(e, t),
              xa ||
                ((xa = !0),
                $e(97, function () {
                  return ao(), null;
                }));
          }
          function lo(t, e) {
            Ea.push(e, t),
              xa ||
                ((xa = !0),
                $e(97, function () {
                  return ao(), null;
                }));
          }
          function so() {
            if (null === ka) return !1;
            var t = ka;
            if (((ka = null), 0 !== (48 & na))) throw Error(l(331));
            var e = na;
            na |= 32;
            var n = Ea;
            Ea = [];
            for (var r = 0; r < n.length; r += 2) {
              var i = n[r],
                a = n[r + 1],
                o = i.destroy;
              if (((i.destroy = void 0), 'function' === typeof o))
                try {
                  o();
                } catch (u) {
                  if (null === a) throw Error(l(330));
                  co(a, u);
                }
            }
            for (n = Pa, Pa = [], r = 0; r < n.length; r += 2) {
              (i = n[r]), (a = n[r + 1]);
              try {
                var s = i.create;
                i.destroy = s();
              } catch (u) {
                if (null === a) throw Error(l(330));
                co(a, u);
              }
            }
            for (s = t.current.firstEffect; null !== s; )
              (t = s.nextEffect),
                (s.nextEffect = null),
                8 & s.flags && ((s.sibling = null), (s.stateNode = null)),
                (s = t);
            return (na = e), Ye(), !0;
          }
          function uo(t, e, n) {
            yn(t, (e = _i(0, (e = yi(n, e)), 1))),
              (e = Ia()),
              null !== (t = Ua(t, 1)) && (we(t, 1, e), ja(t, e));
          }
          function co(t, e) {
            if (3 === t.tag) uo(t, t, e);
            else
              for (var n = t.return; null !== n; ) {
                if (3 === n.tag) {
                  uo(n, t, e);
                  break;
                }
                if (1 === n.tag) {
                  var r = n.stateNode;
                  if (
                    'function' === typeof n.type.getDerivedStateFromError ||
                    ('function' === typeof r.componentDidCatch &&
                      (null === Sa || !Sa.has(r)))
                  ) {
                    var i = wi(n, (t = yi(e, t)), 1);
                    if ((yn(n, i), (i = Ia()), null !== (n = Ua(n, 1))))
                      we(n, 1, i), ja(n, i);
                    else if (
                      'function' === typeof r.componentDidCatch &&
                      (null === Sa || !Sa.has(r))
                    )
                      try {
                        r.componentDidCatch(e, t);
                      } catch (a) {}
                    break;
                  }
                }
                n = n.return;
              }
          }
          function fo(t, e, n) {
            var r = t.pingCache;
            null !== r && r.delete(e),
              (e = Ia()),
              (t.pingedLanes |= t.suspendedLanes & n),
              ra === t &&
                (aa & n) === n &&
                (4 === sa ||
                (3 === sa && (62914560 & aa) === aa && 500 > He() - ga)
                  ? Ya(t, 0)
                  : (ha |= n)),
              ja(t, e);
          }
          function ho(t, e) {
            var n = t.stateNode;
            null !== n && n.delete(e),
              0 === (e = 0) &&
                (0 === (2 & (e = t.mode))
                  ? (e = 1)
                  : 0 === (4 & e)
                  ? (e = 99 === Ve() ? 1 : 2)
                  : (0 === Aa && (Aa = ca),
                    0 === (e = be(62914560 & ~Aa)) && (e = 4194304))),
              (n = Ia()),
              null !== (t = Ua(t, e)) && (we(t, e, n), ja(t, n));
          }
          ma = function (t, e, n) {
            var r = e.lanes;
            if (null !== t)
              if (t.memoizedProps !== e.pendingProps || ne.current) Br = !0;
              else {
                if (0 === (n & r)) {
                  switch (((Br = !1), e.tag)) {
                    case 3:
                      Jr(e), Zn();
                      break;
                    case 5:
                      Gn(e);
                      break;
                    case 1:
                      ae(e.type) && ue(e);
                      break;
                    case 4:
                      Un(e, e.stateNode.containerInfo);
                      break;
                    case 10:
                      sn(e, e.memoizedProps.value);
                      break;
                    case 13:
                      if (null !== e.memoizedState)
                        return 0 !== (n & e.child.childLanes)
                          ? ii(t, e, n)
                          : (Zt(Hn, 1 & Hn.current),
                            null !== (e = fi(t, e, n)) ? e.sibling : null);
                      Zt(Hn, 1 & Hn.current);
                      break;
                    case 19:
                      if (
                        ((r = 0 !== (n & e.childLanes)), 0 !== (64 & t.flags))
                      ) {
                        if (r) return ci(t, e, n);
                        e.flags |= 64;
                      }
                      var i = e.memoizedState;
                      if (
                        (null !== i &&
                          ((i.rendering = null),
                          (i.tail = null),
                          (i.lastEffect = null)),
                        Zt(Hn, Hn.current),
                        r)
                      )
                        break;
                      return null;
                    case 23:
                    case 24:
                      return (e.lanes = 0), $r(t, e, n);
                  }
                  return fi(t, e, n);
                }
                Br = 0 !== (16384 & t.flags);
              }
            else Br = !1;
            switch (((e.lanes = 0), e.tag)) {
              case 2:
                if (
                  ((r = e.type),
                  null !== t &&
                    ((t.alternate = null),
                    (e.alternate = null),
                    (e.flags |= 2)),
                  (t = e.pendingProps),
                  (i = ie(e, ee.current)),
                  fn(e, n),
                  (i = dr(null, e, r, t, i, n)),
                  (e.flags |= 1),
                  'object' === typeof i &&
                    null !== i &&
                    'function' === typeof i.render &&
                    void 0 === i.$$typeof)
                ) {
                  if (
                    ((e.tag = 1),
                    (e.memoizedState = null),
                    (e.updateQueue = null),
                    ae(r))
                  ) {
                    var a = !0;
                    ue(e);
                  } else a = !1;
                  (e.memoizedState =
                    null !== i.state && void 0 !== i.state ? i.state : null),
                    pn(e);
                  var o = r.getDerivedStateFromProps;
                  'function' === typeof o && Sn(e, r, o, t),
                    (i.updater = xn),
                    (e.stateNode = i),
                    (i._reactInternals = e),
                    En(e, r, t, n),
                    (e = Xr(null, e, r, !0, a, n));
                } else (e.tag = 0), Hr(null, e, i, n), (e = e.child);
                return e;
              case 16:
                i = e.elementType;
                t: {
                  switch (
                    (null !== t &&
                      ((t.alternate = null),
                      (e.alternate = null),
                      (e.flags |= 2)),
                    (t = e.pendingProps),
                    (i = (a = i._init)(i._payload)),
                    (e.type = i),
                    (a = e.tag = (function (t) {
                      if ('function' === typeof t) return xo(t) ? 1 : 0;
                      if (void 0 !== t && null !== t) {
                        if ((t = t.$$typeof) === v) return 11;
                        if (t === b) return 14;
                      }
                      return 2;
                    })(i)),
                    (t = en(i, t)),
                    a)
                  ) {
                    case 0:
                      e = Qr(null, e, i, t, n);
                      break t;
                    case 1:
                      e = qr(null, e, i, t, n);
                      break t;
                    case 11:
                      e = Vr(null, e, i, t, n);
                      break t;
                    case 14:
                      e = Wr(null, e, i, en(i.type, t), r, n);
                      break t;
                  }
                  throw Error(l(306, i, ''));
                }
                return e;
              case 0:
                return (
                  (r = e.type),
                  (i = e.pendingProps),
                  Qr(t, e, r, (i = e.elementType === r ? i : en(r, i)), n)
                );
              case 1:
                return (
                  (r = e.type),
                  (i = e.pendingProps),
                  qr(t, e, r, (i = e.elementType === r ? i : en(r, i)), n)
                );
              case 3:
                if ((Jr(e), (r = e.updateQueue), null === t || null === r))
                  throw Error(l(282));
                if (
                  ((r = e.pendingProps),
                  (i = null !== (i = e.memoizedState) ? i.element : null),
                  gn(t, e),
                  bn(e, r, null, n),
                  (r = e.memoizedState.element) === i)
                )
                  Zn(), (e = fi(t, e, n));
                else {
                  if (
                    ((a = (i = e.stateNode).hydrate) &&
                      (J
                        ? ((Kn = jt(e.stateNode.containerInfo)),
                          (Wn = e),
                          (a = $n = !0))
                        : (a = !1)),
                    a)
                  ) {
                    if (J && null != (t = i.mutableSourceEagerHydrationData))
                      for (i = 0; i < t.length; i += 2)
                        (a = t[i]),
                          (o = t[i + 1]),
                          Q
                            ? (a._workInProgressVersionPrimary = o)
                            : (a._workInProgressVersionSecondary = o),
                          tr.push(a);
                    for (n = Fn(e, null, r, n), e.child = n; n; )
                      (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
                  } else Hr(t, e, r, n), Zn();
                  e = e.child;
                }
                return e;
              case 5:
                return (
                  Gn(e),
                  null === t && qn(e),
                  (r = e.type),
                  (i = e.pendingProps),
                  (a = null !== t ? t.memoizedProps : null),
                  (o = i.children),
                  V(r, i)
                    ? (o = null)
                    : null !== a && V(r, a) && (e.flags |= 16),
                  Yr(t, e),
                  Hr(t, e, o, n),
                  e.child
                );
              case 6:
                return null === t && qn(e), null;
              case 13:
                return ii(t, e, n);
              case 4:
                return (
                  Un(e, e.stateNode.containerInfo),
                  (r = e.pendingProps),
                  null === t ? (e.child = An(e, null, r, n)) : Hr(t, e, r, n),
                  e.child
                );
              case 11:
                return (
                  (r = e.type),
                  (i = e.pendingProps),
                  Vr(t, e, r, (i = e.elementType === r ? i : en(r, i)), n)
                );
              case 7:
                return Hr(t, e, e.pendingProps, n), e.child;
              case 8:
              case 12:
                return Hr(t, e, e.pendingProps.children, n), e.child;
              case 10:
                t: {
                  if (
                    ((r = e.type._context),
                    (i = e.pendingProps),
                    (o = e.memoizedProps),
                    sn(e, (a = i.value)),
                    null !== o)
                  ) {
                    var s = o.value;
                    if (
                      0 ===
                      (a = Xe(s, a)
                        ? 0
                        : 0 |
                          ('function' === typeof r._calculateChangedBits
                            ? r._calculateChangedBits(s, a)
                            : 1073741823))
                    ) {
                      if (o.children === i.children && !ne.current) {
                        e = fi(t, e, n);
                        break t;
                      }
                    } else
                      for (
                        null !== (s = e.child) && (s.return = e);
                        null !== s;

                      ) {
                        var u = s.dependencies;
                        if (null !== u) {
                          o = s.child;
                          for (var c = u.firstContext; null !== c; ) {
                            if (c.context === r && 0 !== (c.observedBits & a)) {
                              1 === s.tag &&
                                (((c = vn(-1, n & -n)).tag = 2), yn(s, c)),
                                (s.lanes |= n),
                                null !== (c = s.alternate) && (c.lanes |= n),
                                cn(s.return, n),
                                (u.lanes |= n);
                              break;
                            }
                            c = c.next;
                          }
                        } else
                          o =
                            10 === s.tag && s.type === e.type ? null : s.child;
                        if (null !== o) o.return = s;
                        else
                          for (o = s; null !== o; ) {
                            if (o === e) {
                              o = null;
                              break;
                            }
                            if (null !== (s = o.sibling)) {
                              (s.return = o.return), (o = s);
                              break;
                            }
                            o = o.return;
                          }
                        s = o;
                      }
                  }
                  Hr(t, e, i.children, n), (e = e.child);
                }
                return e;
              case 9:
                return (
                  (i = e.type),
                  (r = (a = e.pendingProps).children),
                  fn(e, n),
                  (r = r((i = dn(i, a.unstable_observedBits)))),
                  (e.flags |= 1),
                  Hr(t, e, r, n),
                  e.child
                );
              case 14:
                return (
                  (a = en((i = e.type), e.pendingProps)),
                  Wr(t, e, i, (a = en(i.type, a)), r, n)
                );
              case 15:
                return Kr(t, e, e.type, e.pendingProps, r, n);
              case 17:
                return (
                  (r = e.type),
                  (i = e.pendingProps),
                  (i = e.elementType === r ? i : en(r, i)),
                  null !== t &&
                    ((t.alternate = null),
                    (e.alternate = null),
                    (e.flags |= 2)),
                  (e.tag = 1),
                  ae(r) ? ((t = !0), ue(e)) : (t = !1),
                  fn(e, n),
                  Cn(e, r, i),
                  En(e, r, i, n),
                  Xr(null, e, r, !0, t, n)
                );
              case 19:
                return ci(t, e, n);
              case 23:
              case 24:
                return $r(t, e, n);
            }
            throw Error(l(156, e.tag));
          };
          var po = { current: !1 },
            go = o.unstable_flushAllWithoutAsserting,
            vo = 'function' === typeof go;
          function yo() {
            if (void 0 !== go) return go();
            for (var t = !1; ao(); ) t = !0;
            return t;
          }
          function mo(e) {
            try {
              yo(),
                (function (e) {
                  if (null === Xi)
                    try {
                      var n = ('require' + Math.random()).slice(0, 7);
                      Xi = (t && t[n]).call(t, 'timers').setImmediate;
                    } catch (r) {
                      Xi = function (t) {
                        var e = new MessageChannel();
                        (e.port1.onmessage = t), e.port2.postMessage(void 0);
                      };
                    }
                  Xi(e);
                })(function () {
                  yo() ? mo(e) : e();
                });
            } catch (n) {
              e(n);
            }
          }
          var bo = 0,
            _o = !1;
          function wo(t, e, n, r) {
            (this.tag = t),
              (this.key = n),
              (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
              (this.index = 0),
              (this.ref = null),
              (this.pendingProps = e),
              (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
              (this.mode = r),
              (this.flags = 0),
              (this.lastEffect = this.firstEffect = this.nextEffect = null),
              (this.childLanes = this.lanes = 0),
              (this.alternate = null);
          }
          function So(t, e, n, r) {
            return new wo(t, e, n, r);
          }
          function xo(t) {
            return !(!(t = t.prototype) || !t.isReactComponent);
          }
          function ko(t, e) {
            var n = t.alternate;
            return (
              null === n
                ? (((n = So(t.tag, e, t.key, t.mode)).elementType =
                    t.elementType),
                  (n.type = t.type),
                  (n.stateNode = t.stateNode),
                  (n.alternate = t),
                  (t.alternate = n))
                : ((n.pendingProps = e),
                  (n.type = t.type),
                  (n.flags = 0),
                  (n.nextEffect = null),
                  (n.firstEffect = null),
                  (n.lastEffect = null)),
              (n.childLanes = t.childLanes),
              (n.lanes = t.lanes),
              (n.child = t.child),
              (n.memoizedProps = t.memoizedProps),
              (n.memoizedState = t.memoizedState),
              (n.updateQueue = t.updateQueue),
              (e = t.dependencies),
              (n.dependencies =
                null === e
                  ? null
                  : { lanes: e.lanes, firstContext: e.firstContext }),
              (n.sibling = t.sibling),
              (n.index = t.index),
              (n.ref = t.ref),
              n
            );
          }
          function Co(t, e, n, r, i, a) {
            var o = 2;
            if (((r = t), 'function' === typeof t)) xo(t) && (o = 1);
            else if ('string' === typeof t) o = 5;
            else
              t: switch (t) {
                case f:
                  return Po(n.children, i, a, e);
                case S:
                  (o = 8), (i |= 16);
                  break;
                case d:
                  (o = 8), (i |= 1);
                  break;
                case h:
                  return (
                    ((t = So(12, n, e, 8 | i)).elementType = h),
                    (t.type = h),
                    (t.lanes = a),
                    t
                  );
                case y:
                  return (
                    ((t = So(13, n, e, i)).type = y),
                    (t.elementType = y),
                    (t.lanes = a),
                    t
                  );
                case m:
                  return (
                    ((t = So(19, n, e, i)).elementType = m), (t.lanes = a), t
                  );
                case x:
                  return Eo(n, i, a, e);
                case k:
                  return (
                    ((t = So(24, n, e, i)).elementType = k), (t.lanes = a), t
                  );
                default:
                  if ('object' === typeof t && null !== t)
                    switch (t.$$typeof) {
                      case p:
                        o = 10;
                        break t;
                      case g:
                        o = 9;
                        break t;
                      case v:
                        o = 11;
                        break t;
                      case b:
                        o = 14;
                        break t;
                      case _:
                        (o = 16), (r = null);
                        break t;
                      case w:
                        o = 22;
                        break t;
                    }
                  throw Error(l(130, null == t ? t : typeof t, ''));
              }
            return (
              ((e = So(o, n, e, i)).elementType = t),
              (e.type = r),
              (e.lanes = a),
              e
            );
          }
          function Po(t, e, n, r) {
            return ((t = So(7, t, r, e)).lanes = n), t;
          }
          function Eo(t, e, n, r) {
            return ((t = So(23, t, r, e)).elementType = x), (t.lanes = n), t;
          }
          function To(t, e, n) {
            return ((t = So(6, t, null, e)).lanes = n), t;
          }
          function Oo(t, e, n) {
            return (
              ((e = So(
                4,
                null !== t.children ? t.children : [],
                t.key,
                e
              )).lanes = n),
              (e.stateNode = {
                containerInfo: t.containerInfo,
                pendingChildren: null,
                implementation: t.implementation,
              }),
              e
            );
          }
          function No(t, e, n) {
            (this.tag = e),
              (this.containerInfo = t),
              (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
              (this.timeoutHandle = Y),
              (this.pendingContext = this.context = null),
              (this.hydrate = n),
              (this.callbackNode = null),
              (this.callbackPriority = 0),
              (this.eventTimes = _e(0)),
              (this.expirationTimes = _e(-1)),
              (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
              (this.entanglements = _e(0)),
              J && (this.mutableSourceEagerHydrationData = null);
          }
          function Mo(t) {
            var e = t._reactInternals;
            if (void 0 === e) {
              if ('function' === typeof t.render) throw Error(l(188));
              throw Error(l(268, Object.keys(t)));
            }
            return null === (t = A(e)) ? null : t.stateNode;
          }
          function Ao(t, e) {
            if (null !== (t = t.memoizedState) && null !== t.dehydrated) {
              var n = t.retryLane;
              t.retryLane = 0 !== n && n < e ? n : e;
            }
          }
          function Fo(t, e) {
            Ao(t, e), (t = t.alternate) && Ao(t, e);
          }
          function Lo(t) {
            return null === (t = A(t)) ? null : t.stateNode;
          }
          function Ro() {
            return null;
          }
          return (
            (r.IsThisRendererActing = po),
            (r.act = function (t) {
              function e() {
                bo--, (ea.current = n), (po.current = r);
              }
              !1 === _o &&
                ((_o = !0),
                console.error(
                  'act(...) is not supported in production builds of React, and might not behave as expected.'
                )),
                bo++;
              var n = ea.current,
                r = po.current;
              (ea.current = !0), (po.current = !0);
              try {
                var i = Va(t);
              } catch (a) {
                throw (e(), a);
              }
              if (
                null !== i &&
                'object' === typeof i &&
                'function' === typeof i.then
              )
                return {
                  then: function (t, r) {
                    i.then(
                      function () {
                        1 < bo || (!0 === vo && !0 === n)
                          ? (e(), t())
                          : mo(function (n) {
                              e(), n ? r(n) : t();
                            });
                      },
                      function (t) {
                        e(), r(t);
                      }
                    );
                  },
                };
              try {
                1 !== bo || (!1 !== vo && !1 !== n) || yo(), e();
              } catch (a) {
                throw (e(), a);
              }
              return {
                then: function (t) {
                  t();
                },
              };
            }),
            (r.attemptContinuousHydration = function (t) {
              13 === t.tag && (za(t, 67108864, Ia()), Fo(t, 67108864));
            }),
            (r.attemptHydrationAtCurrentPriority = function (t) {
              if (13 === t.tag) {
                var e = Ia(),
                  n = Da(t);
                za(t, n, e), Fo(t, n);
              }
            }),
            (r.attemptSynchronousHydration = function (t) {
              switch (t.tag) {
                case 3:
                  var e = t.stateNode;
                  if (e.hydrate) {
                    var n = ge(e.pendingLanes);
                    (e.expiredLanes |= n & e.pendingLanes),
                      ja(e, He()),
                      0 === (48 & na) && (ya(), Ye());
                  }
                  break;
                case 13:
                  var r = Ia();
                  Wa(function () {
                    return za(t, 1, r);
                  }),
                    Fo(t, 4);
              }
            }),
            (r.attemptUserBlockingHydration = function (t) {
              13 === t.tag && (za(t, 4, Ia()), Fo(t, 4));
            }),
            (r.batchedEventUpdates = function (t, e) {
              var n = na;
              na |= 2;
              try {
                return t(e);
              } finally {
                0 === (na = n) && (ya(), Ye());
              }
            }),
            (r.batchedUpdates = Va),
            (r.createComponentSelector = function (t) {
              return { $$typeof: ji, value: t };
            }),
            (r.createContainer = function (t, e, n) {
              return (
                (t = new No(t, e, n)),
                (e = So(3, null, null, 2 === e ? 7 : 1 === e ? 3 : 0)),
                (t.current = e),
                (e.stateNode = t),
                pn(e),
                t
              );
            }),
            (r.createHasPsuedoClassSelector = function (t) {
              return { $$typeof: Gi, value: t };
            }),
            (r.createPortal = function (t, e, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: c,
                key: null == r ? null : '' + r,
                children: t,
                containerInfo: e,
                implementation: n,
              };
            }),
            (r.createRoleSelector = function (t) {
              return { $$typeof: Bi, value: t };
            }),
            (r.createTestNameSelector = function (t) {
              return { $$typeof: Hi, value: t };
            }),
            (r.createTextSelector = function (t) {
              return { $$typeof: Vi, value: t };
            }),
            (r.deferredUpdates = function (t) {
              return Ke(97, t);
            }),
            (r.discreteUpdates = function (t, e, n, r, i) {
              var a = na;
              na |= 4;
              try {
                return Ke(98, t.bind(null, e, n, r, i));
              } finally {
                0 === (na = a) && (ya(), Ye());
              }
            }),
            (r.findAllNodes = qi),
            (r.findBoundingRects = function (t, e) {
              if (!at) throw Error(l(363));
              (e = qi(t, e)), (t = []);
              for (var n = 0; n < e.length; n++) t.push(lt(e[n]));
              for (e = t.length - 1; 0 < e; e--)
                for (
                  var r = (n = t[e]).x,
                    i = r + n.width,
                    a = n.y,
                    o = a + n.height,
                    s = e - 1;
                  0 <= s;
                  s--
                )
                  if (e !== s) {
                    var u = t[s],
                      c = u.x,
                      f = c + u.width,
                      d = u.y,
                      h = d + u.height;
                    if (r >= c && a >= d && i <= f && o <= h) {
                      t.splice(e, 1);
                      break;
                    }
                    if (!(r !== c || n.width !== u.width || h < a || d > o)) {
                      d > a && ((u.height += d - a), (u.y = a)),
                        h < o && (u.height = o - d),
                        t.splice(e, 1);
                      break;
                    }
                    if (!(a !== d || n.height !== u.height || f < r || c > i)) {
                      c > r && ((u.width += c - r), (u.x = r)),
                        f < i && (u.width = i - c),
                        t.splice(e, 1);
                      break;
                    }
                  }
              return t;
            }),
            (r.findHostInstance = Mo),
            (r.findHostInstanceWithNoPortals = function (t) {
              return null ===
                (t = (function (t) {
                  if (!(t = M(t))) return null;
                  for (var e = t; ; ) {
                    if (5 === e.tag || 6 === e.tag) return e;
                    if (e.child && 4 !== e.tag)
                      (e.child.return = e), (e = e.child);
                    else {
                      if (e === t) break;
                      for (; !e.sibling; ) {
                        if (!e.return || e.return === t) return null;
                        e = e.return;
                      }
                      (e.sibling.return = e.return), (e = e.sibling);
                    }
                  }
                  return null;
                })(t))
                ? null
                : 20 === t.tag
                ? t.stateNode.instance
                : t.stateNode;
            }),
            (r.findHostInstanceWithWarning = function (t) {
              return Mo(t);
            }),
            (r.flushControlled = function (t) {
              var e = na;
              na |= 1;
              try {
                Ke(99, t);
              } finally {
                0 === (na = e) && (ya(), Ye());
              }
            }),
            (r.flushDiscreteUpdates = function () {
              0 === (49 & na) &&
                ((function () {
                  if (null !== Ta) {
                    var t = Ta;
                    (Ta = null),
                      t.forEach(function (t) {
                        (t.expiredLanes |= 24 & t.pendingLanes), ja(t, He());
                      });
                  }
                  Ye();
                })(),
                ao());
            }),
            (r.flushPassiveEffects = ao),
            (r.flushSync = Wa),
            (r.focusWithin = function (t, e) {
              if (!at) throw Error(l(363));
              for (
                e = Qi((t = Ki(t)), e), e = Array.from(e), t = 0;
                t < e.length;

              ) {
                var n = e[t++];
                if (!ut(n)) {
                  if (5 === n.tag && ft(n.stateNode)) return !0;
                  for (n = n.child; null !== n; ) e.push(n), (n = n.sibling);
                }
              }
              return !1;
            }),
            (r.getCurrentUpdateLanePriority = function () {
              return he;
            }),
            (r.getFindAllNodesFailureDescription = function (t, e) {
              if (!at) throw Error(l(363));
              var n = 0,
                r = [];
              t = [Ki(t), 0];
              for (var i = 0; i < t.length; ) {
                var a = t[i++],
                  o = t[i++],
                  s = e[o];
                if (
                  (5 !== a.tag || !ut(a)) &&
                  ($i(a, s) && (r.push(Yi(s)), ++o > n && (n = o)),
                  o < e.length)
                )
                  for (a = a.child; null !== a; ) t.push(a, o), (a = a.sibling);
              }
              if (n < e.length) {
                for (t = []; n < e.length; n++) t.push(Yi(e[n]));
                return (
                  'findAllNodes was able to match part of the selector:\n  ' +
                  r.join(' > ') +
                  '\n\nNo matching component was found for:\n  ' +
                  t.join(' > ')
                );
              }
              return null;
            }),
            (r.getPublicRootInstance = function (t) {
              if (!(t = t.current).child) return null;
              switch (t.child.tag) {
                case 5:
                  return R(t.child.stateNode);
                default:
                  return t.child.stateNode;
              }
            }),
            (r.injectIntoDevTools = function (t) {
              if (
                ((t = {
                  bundleType: t.bundleType,
                  version: t.version,
                  rendererPackageName: t.rendererPackageName,
                  rendererConfig: t.rendererConfig,
                  overrideHookState: null,
                  overrideHookStateDeletePath: null,
                  overrideHookStateRenamePath: null,
                  overrideProps: null,
                  overridePropsDeletePath: null,
                  overridePropsRenamePath: null,
                  setSuspenseHandler: null,
                  scheduleUpdate: null,
                  currentDispatcherRef: s.ReactCurrentDispatcher,
                  findHostInstanceByFiber: Lo,
                  findFiberByHostInstance: t.findFiberByHostInstance || Ro,
                  findHostInstancesForRefresh: null,
                  scheduleRefresh: null,
                  scheduleRoot: null,
                  setRefreshHandler: null,
                  getCurrentFiber: null,
                }),
                'undefined' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
              )
                t = !1;
              else {
                var e = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!e.isDisabled && e.supportsFiber)
                  try {
                    (fe = e.inject(t)), (de = e);
                  } catch (n) {}
                t = !0;
              }
              return t;
            }),
            (r.observeVisibleRects = function (t, e, n, r) {
              if (!at) throw Error(l(363));
              t = qi(t, e);
              var i = dt(t, n, r).disconnect;
              return {
                disconnect: function () {
                  i();
                },
              };
            }),
            (r.registerMutableSourceForHydration = function (t, e) {
              var n = e._getVersion;
              (n = n(e._source)),
                null == t.mutableSourceEagerHydrationData
                  ? (t.mutableSourceEagerHydrationData = [e, n])
                  : t.mutableSourceEagerHydrationData.push(e, n);
            }),
            (r.runWithPriority = function (t, e) {
              var n = he;
              try {
                return (he = t), e();
              } finally {
                he = n;
              }
            }),
            (r.shouldSuspend = function () {
              return !1;
            }),
            (r.unbatchedUpdates = function (t, e) {
              var n = na;
              (na &= -2), (na |= 8);
              try {
                return t(e);
              } finally {
                0 === (na = n) && (ya(), Ye());
              }
            }),
            (r.updateContainer = function (t, e, n, r) {
              var i = e.current,
                a = Ia(),
                o = Da(i);
              t: if (n) {
                e: {
                  if (O((n = n._reactInternals)) !== n || 1 !== n.tag)
                    throw Error(l(170));
                  var s = n;
                  do {
                    switch (s.tag) {
                      case 3:
                        s = s.stateNode.context;
                        break e;
                      case 1:
                        if (ae(s.type)) {
                          s =
                            s.stateNode
                              .__reactInternalMemoizedMergedChildContext;
                          break e;
                        }
                    }
                    s = s.return;
                  } while (null !== s);
                  throw Error(l(171));
                }
                if (1 === n.tag) {
                  var u = n.type;
                  if (ae(u)) {
                    n = se(n, u, s);
                    break t;
                  }
                }
                n = s;
              } else n = te;
              return (
                null === e.context ? (e.context = n) : (e.pendingContext = n),
                ((e = vn(a, o)).payload = { element: t }),
                null !== (r = void 0 === r ? null : r) && (e.callback = r),
                yn(i, e),
                za(i, o, a),
                o
              );
            }),
            r
          );
        };
      }.call(this, n(56)(t)));
    },
    function (t, e) {
      t.exports = function (t) {
        return (
          t.webpackPolyfill ||
            ((t.deprecate = function () {}),
            (t.paths = []),
            t.children || (t.children = []),
            Object.defineProperty(t, 'loaded', {
              enumerable: !0,
              get: function () {
                return t.l;
              },
            }),
            Object.defineProperty(t, 'id', {
              enumerable: !0,
              get: function () {
                return t.i;
              },
            }),
            (t.webpackPolyfill = 1)),
          t
        );
      };
    },
    function (t, e, n) {
      'use strict';
      (e.__esModule = !0),
        (e.getClosestInstanceFromNode = function (t) {
          if (t[r]) return t[r];
          for (; !t[r]; ) {
            if (!t.parentNode) return null;
            t = t.parentNode;
          }
          var e = t[r];
          if (5 === e.tag || 6 === e.tag) return e;
          return null;
        });
      var r = '__reactInternalInstance$' + Math.random().toString(36).slice(2);
    },
    function (t, e, n) {
      'use strict';
      (e.__esModule = !0),
        (e.supportsMutation = e.isPrimaryRenderer = e.cancelPassiveEffects = e.schedulePassiveEffects = e.noTimeout = e.cancelTimeout = e.scheduleTimeout = e.cancelDeferredCallback = e.shouldYield = e.scheduleDeferredCallback = e.now = void 0);
      var r = n(59);
      Object.keys(r).forEach(function (t) {
        'default' !== t &&
          '__esModule' !== t &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return r[t];
            },
          });
      });
      var i = n(60);
      Object.keys(i).forEach(function (t) {
        'default' !== t &&
          '__esModule' !== t &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return i[t];
            },
          });
      });
      var a = n(22);
      Object.defineProperty(e, 'now', {
        enumerable: !0,
        get: function () {
          return a.unstable_now;
        },
      }),
        Object.defineProperty(e, 'scheduleDeferredCallback', {
          enumerable: !0,
          get: function () {
            return a.unstable_scheduleCallback;
          },
        }),
        Object.defineProperty(e, 'shouldYield', {
          enumerable: !0,
          get: function () {
            return a.unstable_shouldYield;
          },
        }),
        Object.defineProperty(e, 'cancelDeferredCallback', {
          enumerable: !0,
          get: function () {
            return a.unstable_cancelCallback;
          },
        }),
        (e.appendInitialChild = function (t, e) {
          if ('string' === typeof e)
            return void (0, s.default)(
              !1,
              'Don not use plain text as child of Konva.Node. You are using text: "%s"',
              e
            );
          t.add(e), (0, l.updatePicture)(t);
        }),
        (e.createInstance = function (t, e, n) {
          var r = o.default[t];
          if (!r)
            return void (0, s.default)(
              c,
              'Konva has no node with the type "%s". If you use minimal version of react-konva, just import required nodes into Konva: `import "konva/lib/shapes/%s"`  If you want to render DOM elements as part of canvas tree take a look into this demo: https://konvajs.github.io/docs/react/DOM_Portal.html',
              t,
              t
            );
          var i = {},
            a = {};
          for (var u in e) {
            'on' === u.slice(0, 2) ? (a[u] = e[u]) : (i[u] = e[u]);
          }
          var c = new r(i);
          return (0, l.applyNodeProps)(c, a), c;
        }),
        (e.createTextInstance = function (t, e, n) {
          (0, s.default)(
            !1,
            'Text components are not supported for now in ReactKonva. You text is: "' +
              t +
              '"'
          );
        }),
        (e.finalizeInitialChildren = function (t, e, n) {
          return !1;
        }),
        (e.getPublicInstance = function (t) {
          return t;
        }),
        (e.prepareForCommit = function () {
          return null;
        }),
        (e.prepareUpdate = function (t, e, n, r) {
          return f;
        }),
        (e.resetAfterCommit = function () {}),
        (e.resetTextContent = function (t) {}),
        (e.shouldDeprioritizeSubtree = function (t, e) {
          return !1;
        }),
        (e.getRootHostContext = function () {
          return c;
        }),
        (e.getChildHostContext = function () {
          return c;
        }),
        (e.shouldSetTextContent = function (t, e) {
          return !1;
        }),
        (e.appendChild = function (t, e) {
          e.parent === t ? e.moveToTop() : t.add(e);
          (0, l.updatePicture)(t);
        }),
        (e.appendChildToContainer = function (t, e) {
          e.parent === t ? e.moveToTop() : t.add(e);
          (0, l.updatePicture)(t);
        }),
        (e.insertBefore = d),
        (e.insertInContainerBefore = function (t, e, n) {
          d(t, e, n);
        }),
        (e.removeChild = function (t, e) {
          e.destroy(), e.off(l.EVENTS_NAMESPACE), (0, l.updatePicture)(t);
        }),
        (e.removeChildFromContainer = function (t, e) {
          e.destroy(), e.off(l.EVENTS_NAMESPACE), (0, l.updatePicture)(t);
        }),
        (e.commitTextUpdate = function (t, e, n) {
          (0, s.default)(
            !1,
            'Text components are not yet supported in ReactKonva. You text is: "' +
              n +
              '"'
          );
        }),
        (e.commitMount = function (t, e, n) {}),
        (e.commitUpdate = function (t, e, n, r, i) {
          (0, l.applyNodeProps)(t, i, r);
        }),
        (e.hideInstance = function (t) {
          t.hide(), (0, l.updatePicture)(t);
        }),
        (e.hideTextInstance = function (t) {}),
        (e.unhideInstance = function (t, e) {
          (null == e.visible || e.visible) && t.show();
        }),
        (e.unhideTextInstance = function (t, e) {}),
        (e.clearContainer = function (t) {});
      var o = u(n(29)),
        l = n(35),
        s = u(n(26));
      function u(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var c = {},
        f = {};
      o.default.Node.prototype._applyProps = l.applyNodeProps;
      (e.scheduleTimeout = setTimeout),
        (e.cancelTimeout = clearTimeout),
        (e.noTimeout = -1),
        (e.schedulePassiveEffects = a.unstable_scheduleCallback),
        (e.cancelPassiveEffects = a.unstable_cancelCallback);
      (e.isPrimaryRenderer = !1), (e.supportsMutation = !0);
      function d(t, e, n) {
        (0, s.default)(
          e !== n,
          'ReactKonva: Can not insert node before itself'
        ),
          e._remove(),
          t.add(e),
          e.setZIndex(n.getZIndex()),
          (0, l.updatePicture)(t);
      }
    },
    function (t, e, n) {
      'use strict';
      (e.__esModule = !0),
        (e.createHiddenTextInstance = e.cloneUnhiddenInstance = e.cloneHiddenInstance = e.replaceContainerChildren = e.finalizeContainerChildren = e.appendChildToContainerChildSet = e.createContainerChildSet = e.cloneInstance = e.supportsPersistence = void 0);
      var r,
        i = n(26),
        a = (r = i) && r.__esModule ? r : { default: r };
      function o() {
        (0, a.default)(
          !1,
          'The current renderer does not support persistence. This error is likely caused by a bug in React. Please file an issue.'
        );
      }
      (e.supportsPersistence = !1),
        (e.cloneInstance = o),
        (e.createContainerChildSet = o),
        (e.appendChildToContainerChildSet = o),
        (e.finalizeContainerChildren = o),
        (e.replaceContainerChildren = o),
        (e.cloneHiddenInstance = o),
        (e.cloneUnhiddenInstance = o),
        (e.createHiddenTextInstance = o);
    },
    function (t, e, n) {
      'use strict';
      (e.__esModule = !0),
        (e.didNotFindHydratableTextInstance = e.didNotFindHydratableInstance = e.didNotFindHydratableContainerTextInstance = e.didNotFindHydratableContainerInstance = e.didNotHydrateInstance = e.didNotHydrateContainerInstance = e.didNotMatchHydratedTextInstance = e.didNotMatchHydratedContainerTextInstance = e.hydrateTextInstance = e.hydrateInstance = e.getFirstHydratableChild = e.getNextHydratableSibling = e.canHydrateTextInstance = e.canHydrateInstance = e.supportsHydration = void 0);
      var r,
        i = n(26),
        a = (r = i) && r.__esModule ? r : { default: r };
      function o() {
        (0, a.default)(
          !1,
          'The current renderer does not support hyration. This error is likely caused by a bug in React. Please file an issue.'
        );
      }
      (e.supportsHydration = !1),
        (e.canHydrateInstance = o),
        (e.canHydrateTextInstance = o),
        (e.getNextHydratableSibling = o),
        (e.getFirstHydratableChild = o),
        (e.hydrateInstance = o),
        (e.hydrateTextInstance = o),
        (e.didNotMatchHydratedContainerTextInstance = o),
        (e.didNotMatchHydratedTextInstance = o),
        (e.didNotHydrateContainerInstance = o),
        (e.didNotHydrateInstance = o),
        (e.didNotFindHydratableContainerInstance = o),
        (e.didNotFindHydratableContainerTextInstance = o),
        (e.didNotFindHydratableInstance = o),
        (e.didNotFindHydratableTextInstance = o);
    },
    function (t, e, n) {
      var r = n(62).Konva;
      r._injectGlobal(r), (e.default = r), (t.exports = e.default);
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(30),
        i = n(63),
        a = n(64),
        o = n(65),
        l = n(66),
        s = n(67),
        u = n(68),
        c = n(36),
        f = n(37),
        d = n(38),
        h = n(69),
        p = n(70),
        g = n(71),
        v = n(72),
        y = n(39),
        m = n(73),
        b = n(74),
        _ = n(75),
        w = n(76),
        S = n(77),
        x = n(78),
        k = n(79),
        C = n(80),
        P = n(81),
        E = n(82),
        T = n(83),
        O = n(84),
        N = n(85),
        M = n(86),
        A = n(87),
        F = n(88),
        L = n(89),
        R = n(90),
        I = n(91),
        D = n(92),
        z = n(93),
        U = n(94);
      e.Konva = r.Konva.Util._assign(r.Konva, {
        Arc: i.Arc,
        Arrow: a.Arrow,
        Circle: o.Circle,
        Ellipse: l.Ellipse,
        Image: s.Image,
        Label: u.Label,
        Tag: u.Tag,
        Line: c.Line,
        Path: f.Path,
        Rect: d.Rect,
        RegularPolygon: h.RegularPolygon,
        Ring: p.Ring,
        Sprite: g.Sprite,
        Star: v.Star,
        Text: y.Text,
        TextPath: m.TextPath,
        Transformer: b.Transformer,
        Wedge: _.Wedge,
        Filters: {
          Blur: w.Blur,
          Brighten: S.Brighten,
          Contrast: x.Contrast,
          Emboss: k.Emboss,
          Enhance: C.Enhance,
          Grayscale: P.Grayscale,
          HSL: E.HSL,
          HSV: T.HSV,
          Invert: O.Invert,
          Kaleidoscope: N.Kaleidoscope,
          Mask: M.Mask,
          Noise: A.Noise,
          Pixelate: F.Pixelate,
          Posterize: L.Posterize,
          RGB: R.RGB,
          RGBA: I.RGBA,
          Sepia: D.Sepia,
          Solarize: z.Solarize,
          Threshold: U.Threshold,
        },
      });
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n(5),
        a = n(2),
        o = n(9),
        l = n(3),
        s = n(4),
        u = n(3),
        c = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            r(e, t),
            (e.prototype._sceneFunc = function (t) {
              var e = l.Konva.getAngle(this.angle()),
                n = this.clockwise();
              t.beginPath(),
                t.arc(0, 0, this.outerRadius(), 0, e, n),
                t.arc(0, 0, this.innerRadius(), e, 0, !n),
                t.closePath(),
                t.fillStrokeShape(this);
            }),
            (e.prototype.getWidth = function () {
              return 2 * this.outerRadius();
            }),
            (e.prototype.getHeight = function () {
              return 2 * this.outerRadius();
            }),
            (e.prototype.setWidth = function (t) {
              this.outerRadius(t / 2);
            }),
            (e.prototype.setHeight = function (t) {
              this.outerRadius(t / 2);
            }),
            e
          );
        })(o.Shape);
      (e.Arc = c),
        (c.prototype._centroid = !0),
        (c.prototype.className = 'Arc'),
        (c.prototype._attrsAffectingSize = ['innerRadius', 'outerRadius']),
        u._registerNode(c),
        a.Factory.addGetterSetter(c, 'innerRadius', 0, s.getNumberValidator()),
        a.Factory.addGetterSetter(c, 'outerRadius', 0, s.getNumberValidator()),
        a.Factory.addGetterSetter(c, 'angle', 0, s.getNumberValidator()),
        a.Factory.addGetterSetter(c, 'clockwise', !1, s.getBooleanValidator()),
        i.Collection.mapMethods(c);
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n(5),
        a = n(2),
        o = n(36),
        l = n(4),
        s = n(3),
        u = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            r(e, t),
            (e.prototype._sceneFunc = function (e) {
              t.prototype._sceneFunc.call(this, e);
              var n = 2 * Math.PI,
                r = this.points(),
                i = r,
                a = 0 !== this.tension() && r.length > 4;
              a && (i = this.getTensionPoints());
              var o,
                l,
                s = r.length;
              a
                ? ((o = r[s - 2] - (i[i.length - 2] + i[i.length - 4]) / 2),
                  (l = r[s - 1] - (i[i.length - 1] + i[i.length - 3]) / 2))
                : ((o = r[s - 2] - r[s - 4]), (l = r[s - 1] - r[s - 3]));
              var u = (Math.atan2(l, o) + n) % n,
                c = this.pointerLength(),
                f = this.pointerWidth();
              e.save(),
                e.beginPath(),
                e.translate(r[s - 2], r[s - 1]),
                e.rotate(u),
                e.moveTo(0, 0),
                e.lineTo(-c, f / 2),
                e.lineTo(-c, -f / 2),
                e.closePath(),
                e.restore(),
                this.pointerAtBeginning() &&
                  (e.save(),
                  e.translate(r[0], r[1]),
                  a
                    ? ((o = (i[0] + i[2]) / 2 - r[0]),
                      (l = (i[1] + i[3]) / 2 - r[1]))
                    : ((o = r[2] - r[0]), (l = r[3] - r[1])),
                  e.rotate((Math.atan2(-l, -o) + n) % n),
                  e.moveTo(0, 0),
                  e.lineTo(-c, f / 2),
                  e.lineTo(-c, -f / 2),
                  e.closePath(),
                  e.restore());
              var d = this.dashEnabled();
              d && ((this.attrs.dashEnabled = !1), e.setLineDash([])),
                e.fillStrokeShape(this),
                d && (this.attrs.dashEnabled = !0);
            }),
            (e.prototype.getSelfRect = function () {
              var e = t.prototype.getSelfRect.call(this),
                n = this.pointerWidth() / 2;
              return {
                x: e.x - n,
                y: e.y - n,
                width: e.width + 2 * n,
                height: e.height + 2 * n,
              };
            }),
            e
          );
        })(o.Line);
      (e.Arrow = u),
        (u.prototype.className = 'Arrow'),
        s._registerNode(u),
        a.Factory.addGetterSetter(
          u,
          'pointerLength',
          10,
          l.getNumberValidator()
        ),
        a.Factory.addGetterSetter(
          u,
          'pointerWidth',
          10,
          l.getNumberValidator()
        ),
        a.Factory.addGetterSetter(u, 'pointerAtBeginning', !1),
        i.Collection.mapMethods(u);
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n(5),
        a = n(2),
        o = n(9),
        l = n(4),
        s = n(3),
        u = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            r(e, t),
            (e.prototype._sceneFunc = function (t) {
              t.beginPath(),
                t.arc(0, 0, this.attrs.radius || 0, 0, 2 * Math.PI, !1),
                t.closePath(),
                t.fillStrokeShape(this);
            }),
            (e.prototype.getWidth = function () {
              return 2 * this.radius();
            }),
            (e.prototype.getHeight = function () {
              return 2 * this.radius();
            }),
            (e.prototype.setWidth = function (t) {
              this.radius() !== t / 2 && this.radius(t / 2);
            }),
            (e.prototype.setHeight = function (t) {
              this.radius() !== t / 2 && this.radius(t / 2);
            }),
            e
          );
        })(o.Shape);
      (e.Circle = u),
        (u.prototype._centroid = !0),
        (u.prototype.className = 'Circle'),
        (u.prototype._attrsAffectingSize = ['radius']),
        s._registerNode(u),
        a.Factory.addGetterSetter(u, 'radius', 0, l.getNumberValidator()),
        i.Collection.mapMethods(u);
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n(5),
        a = n(2),
        o = n(9),
        l = n(4),
        s = n(3),
        u = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            r(e, t),
            (e.prototype._sceneFunc = function (t) {
              var e = this.radiusX(),
                n = this.radiusY();
              t.beginPath(),
                t.save(),
                e !== n && t.scale(1, n / e),
                t.arc(0, 0, e, 0, 2 * Math.PI, !1),
                t.restore(),
                t.closePath(),
                t.fillStrokeShape(this);
            }),
            (e.prototype.getWidth = function () {
              return 2 * this.radiusX();
            }),
            (e.prototype.getHeight = function () {
              return 2 * this.radiusY();
            }),
            (e.prototype.setWidth = function (t) {
              this.radiusX(t / 2);
            }),
            (e.prototype.setHeight = function (t) {
              this.radiusY(t / 2);
            }),
            e
          );
        })(o.Shape);
      (e.Ellipse = u),
        (u.prototype.className = 'Ellipse'),
        (u.prototype._centroid = !0),
        (u.prototype._attrsAffectingSize = ['radiusX', 'radiusY']),
        s._registerNode(u),
        a.Factory.addComponentsGetterSetter(u, 'radius', ['x', 'y']),
        a.Factory.addGetterSetter(u, 'radiusX', 0, l.getNumberValidator()),
        a.Factory.addGetterSetter(u, 'radiusY', 0, l.getNumberValidator()),
        i.Collection.mapMethods(u);
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n(5),
        a = n(2),
        o = n(9),
        l = n(4),
        s = n(3),
        u = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            r(e, t),
            (e.prototype._useBufferCanvas = function () {
              return t.prototype._useBufferCanvas.call(this, !0);
            }),
            (e.prototype._sceneFunc = function (t) {
              var e,
                n,
                r,
                i = this.getWidth(),
                a = this.getHeight(),
                o = this.attrs.image;
              o &&
                ((e = this.attrs.cropWidth),
                (n = this.attrs.cropHeight),
                (r =
                  e && n
                    ? [o, this.cropX(), this.cropY(), e, n, 0, 0, i, a]
                    : [o, 0, 0, i, a])),
                (this.hasFill() || this.hasStroke()) &&
                  (t.beginPath(),
                  t.rect(0, 0, i, a),
                  t.closePath(),
                  t.fillStrokeShape(this)),
                o && t.drawImage.apply(t, r);
            }),
            (e.prototype._hitFunc = function (t) {
              var e = this.width(),
                n = this.height();
              t.beginPath(),
                t.rect(0, 0, e, n),
                t.closePath(),
                t.fillStrokeShape(this);
            }),
            (e.prototype.getWidth = function () {
              var t, e;
              return null !== (t = this.attrs.width) && void 0 !== t
                ? t
                : (null === (e = this.image()) || void 0 === e
                    ? void 0
                    : e.width) || 0;
            }),
            (e.prototype.getHeight = function () {
              var t, e;
              return null !== (t = this.attrs.height) && void 0 !== t
                ? t
                : (null === (e = this.image()) || void 0 === e
                    ? void 0
                    : e.height) || 0;
            }),
            (e.fromURL = function (t, n) {
              var r = i.Util.createImageElement();
              (r.onload = function () {
                var t = new e({ image: r });
                n(t);
              }),
                (r.crossOrigin = 'Anonymous'),
                (r.src = t);
            }),
            e
          );
        })(o.Shape);
      (e.Image = u),
        (u.prototype.className = 'Image'),
        s._registerNode(u),
        a.Factory.addGetterSetter(u, 'image'),
        a.Factory.addComponentsGetterSetter(u, 'crop', [
          'x',
          'y',
          'width',
          'height',
        ]),
        a.Factory.addGetterSetter(u, 'cropX', 0, l.getNumberValidator()),
        a.Factory.addGetterSetter(u, 'cropY', 0, l.getNumberValidator()),
        a.Factory.addGetterSetter(u, 'cropWidth', 0, l.getNumberValidator()),
        a.Factory.addGetterSetter(u, 'cropHeight', 0, l.getNumberValidator()),
        i.Collection.mapMethods(u);
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n(5),
        a = n(2),
        o = n(9),
        l = n(24),
        s = n(4),
        u = n(3),
        c = [
          'fontFamily',
          'fontSize',
          'fontStyle',
          'padding',
          'lineHeight',
          'text',
          'width',
        ],
        f = 'up',
        d = 'right',
        h = 'down',
        p = 'left',
        g = c.length,
        v = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              n.on('add.konva', function (t) {
                this._addListeners(t.child), this._sync();
              }),
              n
            );
          }
          return (
            r(e, t),
            (e.prototype.getText = function () {
              return this.find('Text')[0];
            }),
            (e.prototype.getTag = function () {
              return this.find('Tag')[0];
            }),
            (e.prototype._addListeners = function (t) {
              var e,
                n = this,
                r = function () {
                  n._sync();
                };
              for (e = 0; e < g; e++) t.on(c[e] + 'Change.konva', r);
            }),
            (e.prototype.getWidth = function () {
              return this.getText().width();
            }),
            (e.prototype.getHeight = function () {
              return this.getText().height();
            }),
            (e.prototype._sync = function () {
              var t,
                e,
                n,
                r,
                i,
                a,
                o,
                l = this.getText(),
                s = this.getTag();
              if (l && s) {
                switch (
                  ((t = l.width()),
                  (e = l.height()),
                  (n = s.pointerDirection()),
                  (r = s.pointerWidth()),
                  (o = s.pointerHeight()),
                  (i = 0),
                  (a = 0),
                  n)
                ) {
                  case f:
                    (i = t / 2), (a = -1 * o);
                    break;
                  case d:
                    (i = t + r), (a = e / 2);
                    break;
                  case h:
                    (i = t / 2), (a = e + o);
                    break;
                  case p:
                    (i = -1 * r), (a = e / 2);
                }
                s.setAttrs({ x: -1 * i, y: -1 * a, width: t, height: e }),
                  l.setAttrs({ x: -1 * i, y: -1 * a });
              }
            }),
            e
          );
        })(l.Group);
      (e.Label = v),
        (v.prototype.className = 'Label'),
        u._registerNode(v),
        i.Collection.mapMethods(v);
      var y = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          r(e, t),
          (e.prototype._sceneFunc = function (t) {
            var e = this.width(),
              n = this.height(),
              r = this.pointerDirection(),
              i = this.pointerWidth(),
              a = this.pointerHeight(),
              o = this.cornerRadius(),
              l = 0,
              s = 0,
              u = 0,
              c = 0;
            'number' === typeof o
              ? (l = s = u = c = Math.min(o, e / 2, n / 2))
              : ((l = Math.min(o[0] || 0, e / 2, n / 2)),
                (s = Math.min(o[1] || 0, e / 2, n / 2)),
                (c = Math.min(o[2] || 0, e / 2, n / 2)),
                (u = Math.min(o[3] || 0, e / 2, n / 2))),
              t.beginPath(),
              t.moveTo(l, 0),
              r === f &&
                (t.lineTo((e - i) / 2, 0),
                t.lineTo(e / 2, -1 * a),
                t.lineTo((e + i) / 2, 0)),
              t.lineTo(e - s, 0),
              t.arc(e - s, s, s, (3 * Math.PI) / 2, 0, !1),
              r === d &&
                (t.lineTo(e, (n - a) / 2),
                t.lineTo(e + i, n / 2),
                t.lineTo(e, (n + a) / 2)),
              t.lineTo(e, n - c),
              t.arc(e - c, n - c, c, 0, Math.PI / 2, !1),
              r === h &&
                (t.lineTo((e + i) / 2, n),
                t.lineTo(e / 2, n + a),
                t.lineTo((e - i) / 2, n)),
              t.lineTo(u, n),
              t.arc(u, n - u, u, Math.PI / 2, Math.PI, !1),
              r === p &&
                (t.lineTo(0, (n + a) / 2),
                t.lineTo(-1 * i, n / 2),
                t.lineTo(0, (n - a) / 2)),
              t.lineTo(0, l),
              t.arc(l, l, l, Math.PI, (3 * Math.PI) / 2, !1),
              t.closePath(),
              t.fillStrokeShape(this);
          }),
          (e.prototype.getSelfRect = function () {
            var t = 0,
              e = 0,
              n = this.pointerWidth(),
              r = this.pointerHeight(),
              i = this.pointerDirection(),
              a = this.width(),
              o = this.height();
            return (
              i === f
                ? ((e -= r), (o += r))
                : i === h
                ? (o += r)
                : i === p
                ? ((t -= 1.5 * n), (a += n))
                : i === d && (a += 1.5 * n),
              { x: t, y: e, width: a, height: o }
            );
          }),
          e
        );
      })(o.Shape);
      (e.Tag = y),
        (y.prototype.className = 'Tag'),
        u._registerNode(y),
        a.Factory.addGetterSetter(y, 'pointerDirection', 'none'),
        a.Factory.addGetterSetter(y, 'pointerWidth', 0, s.getNumberValidator()),
        a.Factory.addGetterSetter(
          y,
          'pointerHeight',
          0,
          s.getNumberValidator()
        ),
        a.Factory.addGetterSetter(
          y,
          'cornerRadius',
          0,
          s.getNumberOrArrayOfNumbersValidator(4)
        ),
        i.Collection.mapMethods(y);
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n(5),
        a = n(2),
        o = n(9),
        l = n(4),
        s = n(3),
        u = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            r(e, t),
            (e.prototype._sceneFunc = function (t) {
              var e,
                n,
                r,
                i = this.sides(),
                a = this.radius();
              for (t.beginPath(), t.moveTo(0, 0 - a), e = 1; e < i; e++)
                (n = a * Math.sin((2 * e * Math.PI) / i)),
                  (r = -1 * a * Math.cos((2 * e * Math.PI) / i)),
                  t.lineTo(n, r);
              t.closePath(), t.fillStrokeShape(this);
            }),
            (e.prototype.getWidth = function () {
              return 2 * this.radius();
            }),
            (e.prototype.getHeight = function () {
              return 2 * this.radius();
            }),
            (e.prototype.setWidth = function (t) {
              this.radius(t / 2);
            }),
            (e.prototype.setHeight = function (t) {
              this.radius(t / 2);
            }),
            e
          );
        })(o.Shape);
      (e.RegularPolygon = u),
        (u.prototype.className = 'RegularPolygon'),
        (u.prototype._centroid = !0),
        (u.prototype._attrsAffectingSize = ['radius']),
        s._registerNode(u),
        a.Factory.addGetterSetter(u, 'radius', 0, l.getNumberValidator()),
        a.Factory.addGetterSetter(u, 'sides', 0, l.getNumberValidator()),
        i.Collection.mapMethods(u);
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n(5),
        a = n(2),
        o = n(9),
        l = n(4),
        s = n(3),
        u = 2 * Math.PI,
        c = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            r(e, t),
            (e.prototype._sceneFunc = function (t) {
              t.beginPath(),
                t.arc(0, 0, this.innerRadius(), 0, u, !1),
                t.moveTo(this.outerRadius(), 0),
                t.arc(0, 0, this.outerRadius(), u, 0, !0),
                t.closePath(),
                t.fillStrokeShape(this);
            }),
            (e.prototype.getWidth = function () {
              return 2 * this.outerRadius();
            }),
            (e.prototype.getHeight = function () {
              return 2 * this.outerRadius();
            }),
            (e.prototype.setWidth = function (t) {
              this.outerRadius(t / 2);
            }),
            (e.prototype.setHeight = function (t) {
              this.outerRadius(t / 2);
            }),
            e
          );
        })(o.Shape);
      (e.Ring = c),
        (c.prototype.className = 'Ring'),
        (c.prototype._centroid = !0),
        (c.prototype._attrsAffectingSize = ['innerRadius', 'outerRadius']),
        s._registerNode(c),
        a.Factory.addGetterSetter(c, 'innerRadius', 0, l.getNumberValidator()),
        a.Factory.addGetterSetter(c, 'outerRadius', 0, l.getNumberValidator()),
        i.Collection.mapMethods(c);
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n(5),
        a = n(2),
        o = n(9),
        l = n(25),
        s = n(4),
        u = n(3),
        c = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n._updated = !0),
              (n.anim = new l.Animation(function () {
                var t = n._updated;
                return (n._updated = !1), t;
              })),
              n.on('animationChange.konva', function () {
                this.frameIndex(0);
              }),
              n.on('frameIndexChange.konva', function () {
                this._updated = !0;
              }),
              n.on('frameRateChange.konva', function () {
                this.anim.isRunning() &&
                  (clearInterval(this.interval), this._setInterval());
              }),
              n
            );
          }
          return (
            r(e, t),
            (e.prototype._sceneFunc = function (t) {
              var e = this.animation(),
                n = this.frameIndex(),
                r = 4 * n,
                i = this.animations()[e],
                a = this.frameOffsets(),
                o = i[r + 0],
                l = i[r + 1],
                s = i[r + 2],
                u = i[r + 3],
                c = this.image();
              if (
                ((this.hasFill() || this.hasStroke()) &&
                  (t.beginPath(),
                  t.rect(0, 0, s, u),
                  t.closePath(),
                  t.fillStrokeShape(this)),
                c)
              )
                if (a) {
                  var f = a[e],
                    d = 2 * n;
                  t.drawImage(c, o, l, s, u, f[d + 0], f[d + 1], s, u);
                } else t.drawImage(c, o, l, s, u, 0, 0, s, u);
            }),
            (e.prototype._hitFunc = function (t) {
              var e = this.animation(),
                n = this.frameIndex(),
                r = 4 * n,
                i = this.animations()[e],
                a = this.frameOffsets(),
                o = i[r + 2],
                l = i[r + 3];
              if ((t.beginPath(), a)) {
                var s = a[e],
                  u = 2 * n;
                t.rect(s[u + 0], s[u + 1], o, l);
              } else t.rect(0, 0, o, l);
              t.closePath(), t.fillShape(this);
            }),
            (e.prototype._useBufferCanvas = function () {
              return t.prototype._useBufferCanvas.call(this, !0);
            }),
            (e.prototype._setInterval = function () {
              var t = this;
              this.interval = setInterval(function () {
                t._updateIndex();
              }, 1e3 / this.frameRate());
            }),
            (e.prototype.start = function () {
              if (!this.isRunning()) {
                var t = this.getLayer();
                this.anim.setLayers(t), this._setInterval(), this.anim.start();
              }
            }),
            (e.prototype.stop = function () {
              this.anim.stop(), clearInterval(this.interval);
            }),
            (e.prototype.isRunning = function () {
              return this.anim.isRunning();
            }),
            (e.prototype._updateIndex = function () {
              var t = this.frameIndex(),
                e = this.animation();
              t < this.animations()[e].length / 4 - 1
                ? this.frameIndex(t + 1)
                : this.frameIndex(0);
            }),
            e
          );
        })(o.Shape);
      (e.Sprite = c),
        (c.prototype.className = 'Sprite'),
        u._registerNode(c),
        a.Factory.addGetterSetter(c, 'animation'),
        a.Factory.addGetterSetter(c, 'animations'),
        a.Factory.addGetterSetter(c, 'frameOffsets'),
        a.Factory.addGetterSetter(c, 'image'),
        a.Factory.addGetterSetter(c, 'frameIndex', 0, s.getNumberValidator()),
        a.Factory.addGetterSetter(c, 'frameRate', 17, s.getNumberValidator()),
        a.Factory.backCompat(c, {
          index: 'frameIndex',
          getIndex: 'getFrameIndex',
          setIndex: 'setFrameIndex',
        }),
        i.Collection.mapMethods(c);
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n(5),
        a = n(2),
        o = n(9),
        l = n(4),
        s = n(3),
        u = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            r(e, t),
            (e.prototype._sceneFunc = function (t) {
              var e = this.innerRadius(),
                n = this.outerRadius(),
                r = this.numPoints();
              t.beginPath(), t.moveTo(0, 0 - n);
              for (var i = 1; i < 2 * r; i++) {
                var a = i % 2 === 0 ? n : e,
                  o = a * Math.sin((i * Math.PI) / r),
                  l = -1 * a * Math.cos((i * Math.PI) / r);
                t.lineTo(o, l);
              }
              t.closePath(), t.fillStrokeShape(this);
            }),
            (e.prototype.getWidth = function () {
              return 2 * this.outerRadius();
            }),
            (e.prototype.getHeight = function () {
              return 2 * this.outerRadius();
            }),
            (e.prototype.setWidth = function (t) {
              this.outerRadius(t / 2);
            }),
            (e.prototype.setHeight = function (t) {
              this.outerRadius(t / 2);
            }),
            e
          );
        })(o.Shape);
      (e.Star = u),
        (u.prototype.className = 'Star'),
        (u.prototype._centroid = !0),
        (u.prototype._attrsAffectingSize = ['innerRadius', 'outerRadius']),
        s._registerNode(u),
        a.Factory.addGetterSetter(u, 'numPoints', 5, l.getNumberValidator()),
        a.Factory.addGetterSetter(u, 'innerRadius', 0, l.getNumberValidator()),
        a.Factory.addGetterSetter(u, 'outerRadius', 0, l.getNumberValidator()),
        i.Collection.mapMethods(u);
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n(5),
        a = n(2),
        o = n(9),
        l = n(37),
        s = n(39),
        u = n(4),
        c = n(3),
        f = 'normal';
      function d(t) {
        t.fillText(this.partialText, 0, 0);
      }
      function h(t) {
        t.strokeText(this.partialText, 0, 0);
      }
      var p = (function (t) {
        function e(e) {
          var n = t.call(this, e) || this;
          return (
            (n.dummyCanvas = i.Util.createCanvasElement()),
            (n.dataArray = []),
            (n.dataArray = l.Path.parsePathData(n.attrs.data)),
            n.on('dataChange.konva', function () {
              (this.dataArray = l.Path.parsePathData(this.attrs.data)),
                this._setTextData();
            }),
            n.on(
              'textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva',
              n._setTextData
            ),
            e &&
              e.getKerning &&
              (i.Util.warn(
                'getKerning TextPath API is deprecated. Please use "kerningFunc" instead.'
              ),
              n.kerningFunc(e.getKerning)),
            n._setTextData(),
            n
          );
        }
        return (
          r(e, t),
          (e.prototype._sceneFunc = function (t) {
            t.setAttr('font', this._getContextFont()),
              t.setAttr('textBaseline', this.textBaseline()),
              t.setAttr('textAlign', 'left'),
              t.save();
            var e = this.textDecoration(),
              n = this.fill(),
              r = this.fontSize(),
              i = this.glyphInfo;
            'underline' === e && t.beginPath();
            for (var a = 0; a < i.length; a++) {
              t.save();
              var o = i[a].p0;
              t.translate(o.x, o.y),
                t.rotate(i[a].rotation),
                (this.partialText = i[a].text),
                t.fillStrokeShape(this),
                'underline' === e &&
                  (0 === a && t.moveTo(0, r / 2 + 1), t.lineTo(r, r / 2 + 1)),
                t.restore();
            }
            'underline' === e &&
              ((t.strokeStyle = n), (t.lineWidth = r / 20), t.stroke()),
              t.restore();
          }),
          (e.prototype._hitFunc = function (t) {
            t.beginPath();
            var e = this.glyphInfo;
            if (e.length >= 1) {
              var n = e[0].p0;
              t.moveTo(n.x, n.y);
            }
            for (var r = 0; r < e.length; r++) {
              var i = e[r].p1;
              t.lineTo(i.x, i.y);
            }
            t.setAttr('lineWidth', this.fontSize()),
              t.setAttr('strokeStyle', this.colorKey),
              t.stroke();
          }),
          (e.prototype.getTextWidth = function () {
            return this.textWidth;
          }),
          (e.prototype.getTextHeight = function () {
            return (
              i.Util.warn(
                'text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height.'
              ),
              this.textHeight
            );
          }),
          (e.prototype.setText = function (t) {
            return s.Text.prototype.setText.call(this, t);
          }),
          (e.prototype._getContextFont = function () {
            return s.Text.prototype._getContextFont.call(this);
          }),
          (e.prototype._getTextSize = function (t) {
            var e = this.dummyCanvas.getContext('2d');
            e.save(), (e.font = this._getContextFont());
            var n = e.measureText(t);
            return (
              e.restore(),
              { width: n.width, height: parseInt(this.attrs.fontSize, 10) }
            );
          }),
          (e.prototype._setTextData = function () {
            var t = this,
              e = this._getTextSize(this.attrs.text),
              n = this.letterSpacing(),
              r = this.align(),
              i = this.kerningFunc();
            (this.textWidth = e.width), (this.textHeight = e.height);
            var a = Math.max(
              this.textWidth + ((this.attrs.text || '').length - 1) * n,
              0
            );
            this.glyphInfo = [];
            for (var o = 0, u = 0; u < t.dataArray.length; u++)
              t.dataArray[u].pathLength > 0 && (o += t.dataArray[u].pathLength);
            var c = 0;
            'center' === r && (c = Math.max(0, o / 2 - a / 2)),
              'right' === r && (c = Math.max(0, o - a));
            for (
              var f,
                d,
                h,
                p = s.stringToArray(this.text()),
                g = this.text().split(' ').length - 1,
                v = -1,
                y = 0,
                m = function () {
                  y = 0;
                  for (var e = t.dataArray, n = v + 1; n < e.length; n++) {
                    if (e[n].pathLength > 0) return (v = n), e[n];
                    'M' === e[n].command &&
                      (f = { x: e[n].points[0], y: e[n].points[1] });
                  }
                  return {};
                },
                b = function (e) {
                  var i = t._getTextSize(e).width + n;
                  ' ' === e && 'justify' === r && (i += (o - a) / g);
                  var s = 0,
                    u = 0;
                  for (d = void 0; Math.abs(i - s) / i > 0.01 && u < 25; ) {
                    u++;
                    for (var c = s; void 0 === h; )
                      (h = m()) &&
                        c + h.pathLength < i &&
                        ((c += h.pathLength), (h = void 0));
                    if (h === {} || void 0 === f) return;
                    var p = !1;
                    switch (h.command) {
                      case 'L':
                        l.Path.getLineLength(
                          f.x,
                          f.y,
                          h.points[0],
                          h.points[1]
                        ) > i
                          ? (d = l.Path.getPointOnLine(
                              i,
                              f.x,
                              f.y,
                              h.points[0],
                              h.points[1],
                              f.x,
                              f.y
                            ))
                          : (h = void 0);
                        break;
                      case 'A':
                        var v = h.points[4],
                          b = h.points[5],
                          _ = h.points[4] + b;
                        0 === y
                          ? (y = v + 1e-8)
                          : i > s
                          ? (y += ((Math.PI / 180) * b) / Math.abs(b))
                          : (y -= ((Math.PI / 360) * b) / Math.abs(b)),
                          ((b < 0 && y < _) || (b >= 0 && y > _)) &&
                            ((y = _), (p = !0)),
                          (d = l.Path.getPointOnEllipticalArc(
                            h.points[0],
                            h.points[1],
                            h.points[2],
                            h.points[3],
                            y,
                            h.points[6]
                          ));
                        break;
                      case 'C':
                        0 === y
                          ? (y = i > h.pathLength ? 1e-8 : i / h.pathLength)
                          : i > s
                          ? (y += (i - s) / h.pathLength)
                          : (y -= (s - i) / h.pathLength),
                          y > 1 && ((y = 1), (p = !0)),
                          (d = l.Path.getPointOnCubicBezier(
                            y,
                            h.start.x,
                            h.start.y,
                            h.points[0],
                            h.points[1],
                            h.points[2],
                            h.points[3],
                            h.points[4],
                            h.points[5]
                          ));
                        break;
                      case 'Q':
                        0 === y
                          ? (y = i / h.pathLength)
                          : i > s
                          ? (y += (i - s) / h.pathLength)
                          : (y -= (s - i) / h.pathLength),
                          y > 1 && ((y = 1), (p = !0)),
                          (d = l.Path.getPointOnQuadraticBezier(
                            y,
                            h.start.x,
                            h.start.y,
                            h.points[0],
                            h.points[1],
                            h.points[2],
                            h.points[3]
                          ));
                    }
                    void 0 !== d &&
                      (s = l.Path.getLineLength(f.x, f.y, d.x, d.y)),
                      p && ((p = !1), (h = void 0));
                  }
                },
                _ = c / (t._getTextSize('C').width + n) - 1,
                w = 0;
              w < _ && (b('C'), void 0 !== f && void 0 !== d);
              w++
            )
              f = d;
            for (
              var S = 0;
              S < p.length && (b(p[S]), void 0 !== f && void 0 !== d);
              S++
            ) {
              var x = l.Path.getLineLength(f.x, f.y, d.x, d.y),
                k = 0;
              if (i)
                try {
                  k = i(p[S - 1], p[S]) * this.fontSize();
                } catch (E) {
                  k = 0;
                }
              (f.x += k), (d.x += k), (this.textWidth += k);
              var C = l.Path.getPointOnLine(k + x / 2, f.x, f.y, d.x, d.y),
                P = Math.atan2(d.y - f.y, d.x - f.x);
              this.glyphInfo.push({
                transposeX: C.x,
                transposeY: C.y,
                text: p[S],
                rotation: P,
                p0: f,
                p1: d,
              }),
                (f = d);
            }
          }),
          (e.prototype.getSelfRect = function () {
            if (!this.glyphInfo.length)
              return { x: 0, y: 0, width: 0, height: 0 };
            var t = [];
            this.glyphInfo.forEach(function (e) {
              t.push(e.p0.x), t.push(e.p0.y), t.push(e.p1.x), t.push(e.p1.y);
            });
            for (
              var e,
                n,
                r = t[0] || 0,
                i = t[0] || 0,
                a = t[1] || 0,
                o = t[1] || 0,
                l = 0;
              l < t.length / 2;
              l++
            )
              (e = t[2 * l]),
                (n = t[2 * l + 1]),
                (r = Math.min(r, e)),
                (i = Math.max(i, e)),
                (a = Math.min(a, n)),
                (o = Math.max(o, n));
            var s = this.fontSize();
            return {
              x: r - s / 2,
              y: a - s / 2,
              width: i - r + s,
              height: o - a + s,
            };
          }),
          e
        );
      })(o.Shape);
      (e.TextPath = p),
        (p.prototype._fillFunc = d),
        (p.prototype._strokeFunc = h),
        (p.prototype._fillFuncHit = d),
        (p.prototype._strokeFuncHit = h),
        (p.prototype.className = 'TextPath'),
        (p.prototype._attrsAffectingSize = ['text', 'fontSize', 'data']),
        c._registerNode(p),
        a.Factory.addGetterSetter(p, 'data'),
        a.Factory.addGetterSetter(p, 'fontFamily', 'Arial'),
        a.Factory.addGetterSetter(p, 'fontSize', 12, u.getNumberValidator()),
        a.Factory.addGetterSetter(p, 'fontStyle', f),
        a.Factory.addGetterSetter(p, 'align', 'left'),
        a.Factory.addGetterSetter(
          p,
          'letterSpacing',
          0,
          u.getNumberValidator()
        ),
        a.Factory.addGetterSetter(p, 'textBaseline', 'middle'),
        a.Factory.addGetterSetter(p, 'fontVariant', f),
        a.Factory.addGetterSetter(p, 'text', ''),
        a.Factory.addGetterSetter(p, 'textDecoration', null),
        a.Factory.addGetterSetter(p, 'kerningFunc', null),
        i.Collection.mapMethods(p);
    },
    function (t, e, n) {
      'use strict';
      var r =
          (this && this.__extends) ||
          (function () {
            var t = function (e, n) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(e, n);
            };
            return function (e, n) {
              function r() {
                this.constructor = e;
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
        i =
          (this && this.__assign) ||
          function () {
            return (i =
              Object.assign ||
              function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t;
              }).apply(this, arguments);
          };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var a = n(5),
        o = n(2),
        l = n(6),
        s = n(9),
        u = n(38),
        c = n(24),
        f = n(3),
        d = n(4),
        h = n(3),
        p = 'tr-konva',
        g = [
          'resizeEnabledChange',
          'rotateAnchorOffsetChange',
          'rotateEnabledChange',
          'enabledAnchorsChange',
          'anchorSizeChange',
          'borderEnabledChange',
          'borderStrokeChange',
          'borderStrokeWidthChange',
          'borderDashChange',
          'anchorStrokeChange',
          'anchorStrokeWidthChange',
          'anchorFillChange',
          'anchorCornerRadiusChange',
          'ignoreStrokeChange',
        ]
          .map(function (t) {
            return t + '.tr-konva';
          })
          .join(' '),
        v = 'nodesRect',
        y = [
          'widthChange',
          'heightChange',
          'scaleXChange',
          'scaleYChange',
          'skewXChange',
          'skewYChange',
          'rotationChange',
          'offsetXChange',
          'offsetYChange',
          'transformsEnabledChange',
          'strokeWidthChange',
        ]
          .map(function (t) {
            return t + '.tr-konva';
          })
          .join(' '),
        m = {
          'top-left': -45,
          'top-center': 0,
          'top-right': 45,
          'middle-right': -90,
          'middle-left': 90,
          'bottom-left': -135,
          'bottom-center': 180,
          'bottom-right': 135,
        },
        b = 'ontouchstart' in f.Konva._global;
      var _ = [
        'top-left',
        'top-center',
        'top-right',
        'middle-right',
        'middle-left',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ];
      function w(t, e, n) {
        var r = n.x + (t.x - n.x) * Math.cos(e) - (t.y - n.y) * Math.sin(e),
          a = n.y + (t.x - n.x) * Math.sin(e) + (t.y - n.y) * Math.cos(e);
        return i(i({}, t), { rotation: t.rotation + e, x: r, y: a });
      }
      function S(t, e) {
        return w(
          t,
          e,
          (function (t) {
            return {
              x:
                t.x +
                (t.width / 2) * Math.cos(t.rotation) +
                (t.height / 2) * Math.sin(-t.rotation),
              y:
                t.y +
                (t.height / 2) * Math.cos(t.rotation) +
                (t.width / 2) * Math.sin(t.rotation),
            };
          })(t)
        );
      }
      var x = (function (t) {
        function e(e) {
          var n = t.call(this, e) || this;
          return (
            (n._transforming = !1),
            n._createElements(),
            (n._handleMouseMove = n._handleMouseMove.bind(n)),
            (n._handleMouseUp = n._handleMouseUp.bind(n)),
            (n.update = n.update.bind(n)),
            n.on(g, n.update),
            n.getNode() && n.update(),
            n
          );
        }
        return (
          r(e, t),
          (e.prototype.attachTo = function (t) {
            return this.setNode(t), this;
          }),
          (e.prototype.setNode = function (t) {
            return (
              a.Util.warn(
                'tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead.'
              ),
              this.setNodes([t])
            );
          }),
          (e.prototype.getNode = function () {
            return this._nodes && this._nodes[0];
          }),
          (e.prototype.setNodes = function (t) {
            var e = this;
            return (
              void 0 === t && (t = []),
              this._nodes && this._nodes.length && this.detach(),
              (this._nodes = t),
              1 === t.length
                ? this.rotation(t[0].rotation())
                : this.rotation(0),
              this._nodes.forEach(function (t) {
                var n = t._attrsAffectingSize
                    .map(function (t) {
                      return t + 'Change.' + p;
                    })
                    .join(' '),
                  r = function () {
                    1 === e.nodes().length &&
                      e.rotation(e.nodes()[0].rotation()),
                      e._resetTransformCache(),
                      e._transforming || e.update();
                  };
                t.on(n, r),
                  t.on(y, r),
                  t.on('_clearTransformCache.tr-konva', r),
                  t.on('xChange.tr-konva yChange.tr-konva', r),
                  e._proxyDrag(t);
              }),
              this._resetTransformCache(),
              !!this.findOne('.top-left') && this.update(),
              this
            );
          }),
          (e.prototype._proxyDrag = function (t) {
            var e,
              n = this;
            t.on('dragstart.tr-konva', function (r) {
              (e = t.getAbsolutePosition()),
                n.isDragging() ||
                  t === n.findOne('.back') ||
                  n.startDrag(r, !1);
            }),
              t.on('dragmove.tr-konva', function (r) {
                if (e) {
                  var i = t.getAbsolutePosition(),
                    a = i.x - e.x,
                    o = i.y - e.y;
                  n.nodes().forEach(function (e) {
                    if (e !== t && !e.isDragging()) {
                      var n = e.getAbsolutePosition();
                      e.setAbsolutePosition({ x: n.x + a, y: n.y + o }),
                        e.startDrag(r);
                    }
                  }),
                    (e = null);
                }
              });
          }),
          (e.prototype.getNodes = function () {
            return this._nodes || [];
          }),
          (e.prototype.getActiveAnchor = function () {
            return this._movingAnchorName;
          }),
          (e.prototype.detach = function () {
            this._nodes &&
              this._nodes.forEach(function (t) {
                t.off('.tr-konva');
              }),
              (this._nodes = []),
              this._resetTransformCache();
          }),
          (e.prototype._resetTransformCache = function () {
            this._clearCache(v),
              this._clearCache('transform'),
              this._clearSelfAndDescendantCache('absoluteTransform');
          }),
          (e.prototype._getNodeRect = function () {
            return this._getCache(v, this.__getNodeRect);
          }),
          (e.prototype.__getNodeShape = function (t, e, n) {
            void 0 === e && (e = this.rotation());
            var r = t.getClientRect({
                skipTransform: !0,
                skipShadow: !0,
                skipStroke: this.ignoreStroke(),
              }),
              i = t.getAbsoluteScale(n),
              a = t.getAbsolutePosition(n),
              o = r.x * i.x - t.offsetX() * i.x,
              l = r.y * i.y - t.offsetY() * i.y,
              s =
                (f.Konva.getAngle(t.getAbsoluteRotation()) + 2 * Math.PI) %
                (2 * Math.PI);
            return w(
              {
                x: a.x + o * Math.cos(s) + l * Math.sin(-s),
                y: a.y + l * Math.cos(s) + o * Math.sin(s),
                width: r.width * i.x,
                height: r.height * i.y,
                rotation: s,
              },
              -f.Konva.getAngle(e),
              { x: 0, y: 0 }
            );
          }),
          (e.prototype.__getNodeRect = function () {
            var t = this;
            if (!this.getNode())
              return { x: -1e8, y: -1e8, width: 0, height: 0, rotation: 0 };
            var e = [];
            this.nodes().map(function (n) {
              var r = n.getClientRect({
                  skipTransform: !0,
                  skipShadow: !0,
                  skipStroke: t.ignoreStroke(),
                }),
                i = [
                  { x: r.x, y: r.y },
                  { x: r.x + r.width, y: r.y },
                  { x: r.x + r.width, y: r.y + r.height },
                  { x: r.x, y: r.y + r.height },
                ],
                a = n.getAbsoluteTransform();
              i.forEach(function (t) {
                var n = a.point(t);
                e.push(n);
              });
            });
            var n,
              r,
              i,
              o,
              l = new a.Transform();
            l.rotate(-f.Konva.getAngle(this.rotation())),
              e.forEach(function (t) {
                var e = l.point(t);
                void 0 === n && ((n = i = e.x), (r = o = e.y)),
                  (n = Math.min(n, e.x)),
                  (r = Math.min(r, e.y)),
                  (i = Math.max(i, e.x)),
                  (o = Math.max(o, e.y));
              }),
              l.invert();
            var s = l.point({ x: n, y: r });
            return {
              x: s.x,
              y: s.y,
              width: i - n,
              height: o - r,
              rotation: f.Konva.getAngle(this.rotation()),
            };
          }),
          (e.prototype.getX = function () {
            return this._getNodeRect().x;
          }),
          (e.prototype.getY = function () {
            return this._getNodeRect().y;
          }),
          (e.prototype.getWidth = function () {
            return this._getNodeRect().width;
          }),
          (e.prototype.getHeight = function () {
            return this._getNodeRect().height;
          }),
          (e.prototype._createElements = function () {
            this._createBack(),
              _.forEach(
                function (t) {
                  this._createAnchor(t);
                }.bind(this)
              ),
              this._createAnchor('rotater');
          }),
          (e.prototype._createAnchor = function (t) {
            var e = this,
              n = new u.Rect({
                stroke: 'rgb(0, 161, 255)',
                fill: 'white',
                strokeWidth: 1,
                name: t + ' _anchor',
                dragDistance: 0,
                draggable: !0,
                hitStrokeWidth: b ? 10 : 'auto',
              }),
              r = this;
            n.on('mousedown touchstart', function (t) {
              r._handleMouseDown(t);
            }),
              n.on('dragstart', function (t) {
                n.stopDrag(), (t.cancelBubble = !0);
              }),
              n.on('dragend', function (t) {
                t.cancelBubble = !0;
              }),
              n.on('mouseenter', function () {
                var r = f.Konva.getAngle(e.rotation()),
                  i = (function (t, e) {
                    if ('rotater' === t) return 'crosshair';
                    e += a.Util._degToRad(m[t] || 0);
                    var n = ((a.Util._radToDeg(e) % 360) + 360) % 360;
                    return a.Util._inRange(n, 337.5, 360) ||
                      a.Util._inRange(n, 0, 22.5)
                      ? 'ns-resize'
                      : a.Util._inRange(n, 22.5, 67.5)
                      ? 'nesw-resize'
                      : a.Util._inRange(n, 67.5, 112.5)
                      ? 'ew-resize'
                      : a.Util._inRange(n, 112.5, 157.5)
                      ? 'nwse-resize'
                      : a.Util._inRange(n, 157.5, 202.5)
                      ? 'ns-resize'
                      : a.Util._inRange(n, 202.5, 247.5)
                      ? 'nesw-resize'
                      : a.Util._inRange(n, 247.5, 292.5)
                      ? 'ew-resize'
                      : a.Util._inRange(n, 292.5, 337.5)
                      ? 'nwse-resize'
                      : (a.Util.error(
                          'Transformer has unknown angle for cursor detection: ' +
                            n
                        ),
                        'pointer');
                  })(t, r);
                (n.getStage().content.style.cursor = i), (e._cursorChange = !0);
              }),
              n.on('mouseout', function () {
                (n.getStage().content.style.cursor = ''),
                  (e._cursorChange = !1);
              }),
              this.add(n);
          }),
          (e.prototype._createBack = function () {
            var t = this,
              e = new s.Shape({
                name: 'back',
                width: 0,
                height: 0,
                draggable: !0,
                sceneFunc: function (t) {
                  var e = this.getParent(),
                    n = e.padding();
                  t.beginPath(),
                    t.rect(-n, -n, this.width() + 2 * n, this.height() + 2 * n),
                    t.moveTo(this.width() / 2, -n),
                    e.rotateEnabled() &&
                      t.lineTo(
                        this.width() / 2,
                        -e.rotateAnchorOffset() * a.Util._sign(this.height()) -
                          n
                      ),
                    t.fillStrokeShape(this);
                },
                hitFunc: function (e, n) {
                  if (t.shouldOverdrawWholeArea()) {
                    var r = t.padding();
                    e.beginPath(),
                      e.rect(-r, -r, n.width() + 2 * r, n.height() + 2 * r),
                      e.fillStrokeShape(n);
                  }
                },
              });
            this.add(e),
              this._proxyDrag(e),
              e.on('dragstart', function (t) {
                t.cancelBubble = !0;
              }),
              e.on('dragmove', function (t) {
                t.cancelBubble = !0;
              }),
              e.on('dragend', function (t) {
                t.cancelBubble = !0;
              });
          }),
          (e.prototype._handleMouseDown = function (t) {
            this._movingAnchorName = t.target.name().split(' ')[0];
            var e = this._getNodeRect(),
              n = e.width,
              r = e.height,
              i = Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2));
            (this.sin = Math.abs(r / i)),
              (this.cos = Math.abs(n / i)),
              window.addEventListener('mousemove', this._handleMouseMove),
              window.addEventListener('touchmove', this._handleMouseMove),
              window.addEventListener('mouseup', this._handleMouseUp, !0),
              window.addEventListener('touchend', this._handleMouseUp, !0),
              (this._transforming = !0);
            var a = t.target.getAbsolutePosition(),
              o = t.target.getStage().getPointerPosition();
            (this._anchorDragOffset = { x: o.x - a.x, y: o.y - a.y }),
              this._fire('transformstart', { evt: t, target: this.getNode() }),
              this.getNode()._fire('transformstart', {
                evt: t,
                target: this.getNode(),
              });
          }),
          (e.prototype._handleMouseMove = function (t) {
            var e,
              n,
              r,
              i = this.findOne('.' + this._movingAnchorName),
              a = i.getStage();
            a.setPointersPositions(t);
            var o = a.getPointerPosition(),
              l = {
                x: o.x - this._anchorDragOffset.x,
                y: o.y - this._anchorDragOffset.y,
              },
              s = i.getAbsolutePosition();
            i.setAbsolutePosition(l);
            var u = i.getAbsolutePosition();
            if (s.x !== u.x || s.y !== u.y)
              if ('rotater' !== this._movingAnchorName) {
                var c = this.keepRatio() || t.shiftKey,
                  d = this.centeredScaling() || t.altKey;
                if ('top-left' === this._movingAnchorName) {
                  if (c) {
                    var h = d
                      ? { x: this.width() / 2, y: this.height() / 2 }
                      : {
                          x: this.findOne('.bottom-right').x(),
                          y: this.findOne('.bottom-right').y(),
                        };
                    r = Math.sqrt(
                      Math.pow(h.x - i.x(), 2) + Math.pow(h.y - i.y(), 2)
                    );
                    var p = this.findOne('.top-left').x() > h.x ? -1 : 1,
                      g = this.findOne('.top-left').y() > h.y ? -1 : 1;
                    (e = r * this.cos * p),
                      (n = r * this.sin * g),
                      this.findOne('.top-left').x(h.x - e),
                      this.findOne('.top-left').y(h.y - n);
                  }
                } else if ('top-center' === this._movingAnchorName)
                  this.findOne('.top-left').y(i.y());
                else if ('top-right' === this._movingAnchorName) {
                  if (c) {
                    h = d
                      ? { x: this.width() / 2, y: this.height() / 2 }
                      : {
                          x: this.findOne('.bottom-left').x(),
                          y: this.findOne('.bottom-left').y(),
                        };
                    r = Math.sqrt(
                      Math.pow(i.x() - h.x, 2) + Math.pow(h.y - i.y(), 2)
                    );
                    (p = this.findOne('.top-right').x() < h.x ? -1 : 1),
                      (g = this.findOne('.top-right').y() > h.y ? -1 : 1);
                    (e = r * this.cos * p),
                      (n = r * this.sin * g),
                      this.findOne('.top-right').x(h.x + e),
                      this.findOne('.top-right').y(h.y - n);
                  }
                  var v = i.position();
                  this.findOne('.top-left').y(v.y),
                    this.findOne('.bottom-right').x(v.x);
                } else if ('middle-left' === this._movingAnchorName)
                  this.findOne('.top-left').x(i.x());
                else if ('middle-right' === this._movingAnchorName)
                  this.findOne('.bottom-right').x(i.x());
                else if ('bottom-left' === this._movingAnchorName) {
                  if (c) {
                    h = d
                      ? { x: this.width() / 2, y: this.height() / 2 }
                      : {
                          x: this.findOne('.top-right').x(),
                          y: this.findOne('.top-right').y(),
                        };
                    r = Math.sqrt(
                      Math.pow(h.x - i.x(), 2) + Math.pow(i.y() - h.y, 2)
                    );
                    (p = h.x < i.x() ? -1 : 1), (g = i.y() < h.y ? -1 : 1);
                    (e = r * this.cos * p),
                      (n = r * this.sin * g),
                      i.x(h.x - e),
                      i.y(h.y + n);
                  }
                  (v = i.position()),
                    this.findOne('.top-left').x(v.x),
                    this.findOne('.bottom-right').y(v.y);
                } else if ('bottom-center' === this._movingAnchorName)
                  this.findOne('.bottom-right').y(i.y());
                else if ('bottom-right' === this._movingAnchorName) {
                  if (c) {
                    h = d
                      ? { x: this.width() / 2, y: this.height() / 2 }
                      : {
                          x: this.findOne('.top-left').x(),
                          y: this.findOne('.top-left').y(),
                        };
                    r = Math.sqrt(
                      Math.pow(i.x() - h.x, 2) + Math.pow(i.y() - h.y, 2)
                    );
                    (p = this.findOne('.bottom-right').x() < h.x ? -1 : 1),
                      (g = this.findOne('.bottom-right').y() < h.y ? -1 : 1);
                    (e = r * this.cos * p),
                      (n = r * this.sin * g),
                      this.findOne('.bottom-right').x(h.x + e),
                      this.findOne('.bottom-right').y(h.y + n);
                  }
                } else
                  console.error(
                    new Error(
                      'Wrong position argument of selection resizer: ' +
                        this._movingAnchorName
                    )
                  );
                if ((d = this.centeredScaling() || t.altKey)) {
                  var y = this.findOne('.top-left'),
                    m = this.findOne('.bottom-right'),
                    b = y.x(),
                    _ = y.y(),
                    w = this.getWidth() - m.x(),
                    x = this.getHeight() - m.y();
                  m.move({ x: -b, y: -_ }), y.move({ x: w, y: x });
                }
                var k = this.findOne('.top-left').getAbsolutePosition();
                (e = k.x), (n = k.y);
                var C =
                    this.findOne('.bottom-right').x() -
                    this.findOne('.top-left').x(),
                  P =
                    this.findOne('.bottom-right').y() -
                    this.findOne('.top-left').y();
                this._fitNodesInto(
                  {
                    x: e,
                    y: n,
                    width: C,
                    height: P,
                    rotation: f.Konva.getAngle(this.rotation()),
                  },
                  t
                );
              } else {
                var E = this._getNodeRect();
                (e = i.x() - E.width / 2), (n = -i.y() + E.height / 2);
                var T = Math.atan2(-n, e) + Math.PI / 2;
                E.height < 0 && (T -= Math.PI);
                var O = f.Konva.getAngle(this.rotation()) + T,
                  N = f.Konva.getAngle(this.rotationSnapTolerance()),
                  M = S(
                    E,
                    (function (t, e, n) {
                      for (var r = e, i = 0; i < t.length; i++) {
                        var a = f.Konva.getAngle(t[i]),
                          o = Math.abs(a - e) % (2 * Math.PI);
                        Math.min(o, 2 * Math.PI - o) < n && (r = a);
                      }
                      return r;
                    })(this.rotationSnaps(), O, N) - E.rotation
                  );
                this._fitNodesInto(M, t);
              }
          }),
          (e.prototype._handleMouseUp = function (t) {
            this._removeEvents(t);
          }),
          (e.prototype.getAbsoluteTransform = function () {
            return this.getTransform();
          }),
          (e.prototype._removeEvents = function (t) {
            if (this._transforming) {
              (this._transforming = !1),
                window.removeEventListener('mousemove', this._handleMouseMove),
                window.removeEventListener('touchmove', this._handleMouseMove),
                window.removeEventListener('mouseup', this._handleMouseUp, !0),
                window.removeEventListener('touchend', this._handleMouseUp, !0);
              var e = this.getNode();
              this._fire('transformend', { evt: t, target: e }),
                e && e.fire('transformend', { evt: t, target: e }),
                (this._movingAnchorName = null);
            }
          }),
          (e.prototype._fitNodesInto = function (t, e) {
            var n = this,
              r = this._getNodeRect();
            if (a.Util._inRange(t.width, 2 * -this.padding() - 1, 1))
              this.update();
            else if (a.Util._inRange(t.height, 2 * -this.padding() - 1, 1))
              this.update();
            else {
              var i = new a.Transform();
              if (
                (i.rotate(f.Konva.getAngle(this.rotation())),
                this._movingAnchorName &&
                  t.width < 0 &&
                  this._movingAnchorName.indexOf('left') >= 0)
              ) {
                var o = i.point({ x: 2 * -this.padding(), y: 0 });
                (t.x += o.x),
                  (t.y += o.y),
                  (t.width += 2 * this.padding()),
                  (this._movingAnchorName = this._movingAnchorName.replace(
                    'left',
                    'right'
                  )),
                  (this._anchorDragOffset.x -= o.x),
                  (this._anchorDragOffset.y -= o.y);
              } else if (
                this._movingAnchorName &&
                t.width < 0 &&
                this._movingAnchorName.indexOf('right') >= 0
              ) {
                o = i.point({ x: 2 * this.padding(), y: 0 });
                (this._movingAnchorName = this._movingAnchorName.replace(
                  'right',
                  'left'
                )),
                  (this._anchorDragOffset.x -= o.x),
                  (this._anchorDragOffset.y -= o.y),
                  (t.width += 2 * this.padding());
              }
              if (
                this._movingAnchorName &&
                t.height < 0 &&
                this._movingAnchorName.indexOf('top') >= 0
              ) {
                o = i.point({ x: 0, y: 2 * -this.padding() });
                (t.x += o.x),
                  (t.y += o.y),
                  (this._movingAnchorName = this._movingAnchorName.replace(
                    'top',
                    'bottom'
                  )),
                  (this._anchorDragOffset.x -= o.x),
                  (this._anchorDragOffset.y -= o.y),
                  (t.height += 2 * this.padding());
              } else if (
                this._movingAnchorName &&
                t.height < 0 &&
                this._movingAnchorName.indexOf('bottom') >= 0
              ) {
                o = i.point({ x: 0, y: 2 * this.padding() });
                (this._movingAnchorName = this._movingAnchorName.replace(
                  'bottom',
                  'top'
                )),
                  (this._anchorDragOffset.x -= o.x),
                  (this._anchorDragOffset.y -= o.y),
                  (t.height += 2 * this.padding());
              }
              if (this.boundBoxFunc()) {
                var l = this.boundBoxFunc()(r, t);
                l
                  ? (t = l)
                  : a.Util.warn(
                      'boundBoxFunc returned falsy. You should return new bound rect from it!'
                    );
              }
              var s = 1e7,
                u = new a.Transform();
              u.translate(r.x, r.y),
                u.rotate(r.rotation),
                u.scale(r.width / s, r.height / s);
              var c = new a.Transform();
              c.translate(t.x, t.y),
                c.rotate(t.rotation),
                c.scale(t.width / s, t.height / s);
              var d = c.multiply(u.invert());
              this._nodes.forEach(function (t) {
                var r = t.getParent().getAbsoluteTransform(),
                  i = t.getTransform().copy();
                i.translate(t.offsetX(), t.offsetY());
                var o = new a.Transform();
                o.multiply(r.copy().invert())
                  .multiply(d)
                  .multiply(r)
                  .multiply(i);
                var l = o.decompose();
                t.setAttrs(l),
                  n._fire('transform', { evt: e, target: t }),
                  t._fire('transform', { evt: e, target: t });
              }),
                this.rotation(a.Util._getRotation(t.rotation)),
                this._resetTransformCache(),
                this.update(),
                this.getLayer().batchDraw();
            }
          }),
          (e.prototype.forceUpdate = function () {
            this._resetTransformCache(), this.update();
          }),
          (e.prototype._batchChangeChild = function (t, e) {
            this.findOne(t).setAttrs(e);
          }),
          (e.prototype.update = function () {
            var t = this,
              e = this._getNodeRect();
            this.rotation(a.Util._getRotation(e.rotation));
            var n = e.width,
              r = e.height,
              i = this.enabledAnchors(),
              o = this.resizeEnabled(),
              l = this.padding(),
              s = this.anchorSize();
            this.find('._anchor').each(function (e) {
              e.setAttrs({
                width: s,
                height: s,
                offsetX: s / 2,
                offsetY: s / 2,
                stroke: t.anchorStroke(),
                strokeWidth: t.anchorStrokeWidth(),
                fill: t.anchorFill(),
                cornerRadius: t.anchorCornerRadius(),
              });
            }),
              this._batchChangeChild('.top-left', {
                x: 0,
                y: 0,
                offsetX: s / 2 + l,
                offsetY: s / 2 + l,
                visible: o && i.indexOf('top-left') >= 0,
              }),
              this._batchChangeChild('.top-center', {
                x: n / 2,
                y: 0,
                offsetY: s / 2 + l,
                visible: o && i.indexOf('top-center') >= 0,
              }),
              this._batchChangeChild('.top-right', {
                x: n,
                y: 0,
                offsetX: s / 2 - l,
                offsetY: s / 2 + l,
                visible: o && i.indexOf('top-right') >= 0,
              }),
              this._batchChangeChild('.middle-left', {
                x: 0,
                y: r / 2,
                offsetX: s / 2 + l,
                visible: o && i.indexOf('middle-left') >= 0,
              }),
              this._batchChangeChild('.middle-right', {
                x: n,
                y: r / 2,
                offsetX: s / 2 - l,
                visible: o && i.indexOf('middle-right') >= 0,
              }),
              this._batchChangeChild('.bottom-left', {
                x: 0,
                y: r,
                offsetX: s / 2 + l,
                offsetY: s / 2 - l,
                visible: o && i.indexOf('bottom-left') >= 0,
              }),
              this._batchChangeChild('.bottom-center', {
                x: n / 2,
                y: r,
                offsetY: s / 2 - l,
                visible: o && i.indexOf('bottom-center') >= 0,
              }),
              this._batchChangeChild('.bottom-right', {
                x: n,
                y: r,
                offsetX: s / 2 - l,
                offsetY: s / 2 - l,
                visible: o && i.indexOf('bottom-right') >= 0,
              }),
              this._batchChangeChild('.rotater', {
                x: n / 2,
                y: -this.rotateAnchorOffset() * a.Util._sign(r) - l,
                visible: this.rotateEnabled(),
              }),
              this._batchChangeChild('.back', {
                width: n,
                height: r,
                visible: this.borderEnabled(),
                stroke: this.borderStroke(),
                strokeWidth: this.borderStrokeWidth(),
                dash: this.borderDash(),
                x: 0,
                y: 0,
              });
          }),
          (e.prototype.isTransforming = function () {
            return this._transforming;
          }),
          (e.prototype.stopTransform = function () {
            if (this._transforming) {
              this._removeEvents();
              var t = this.findOne('.' + this._movingAnchorName);
              t && t.stopDrag();
            }
          }),
          (e.prototype.destroy = function () {
            return (
              this.getStage() &&
                this._cursorChange &&
                (this.getStage().content.style.cursor = ''),
              c.Group.prototype.destroy.call(this),
              this.detach(),
              this._removeEvents(),
              this
            );
          }),
          (e.prototype.toObject = function () {
            return l.Node.prototype.toObject.call(this);
          }),
          e
        );
      })(c.Group);
      (e.Transformer = x),
        (x.prototype.className = 'Transformer'),
        h._registerNode(x),
        o.Factory.addGetterSetter(x, 'enabledAnchors', _, function (t) {
          return (
            t instanceof Array ||
              a.Util.warn('enabledAnchors value should be an array'),
            t instanceof Array &&
              t.forEach(function (t) {
                -1 === _.indexOf(t) &&
                  a.Util.warn(
                    'Unknown anchor name: ' +
                      t +
                      '. Available names are: ' +
                      _.join(', ')
                  );
              }),
            t || []
          );
        }),
        o.Factory.addGetterSetter(x, 'resizeEnabled', !0),
        o.Factory.addGetterSetter(x, 'anchorSize', 10, d.getNumberValidator()),
        o.Factory.addGetterSetter(x, 'rotateEnabled', !0),
        o.Factory.addGetterSetter(x, 'rotationSnaps', []),
        o.Factory.addGetterSetter(
          x,
          'rotateAnchorOffset',
          50,
          d.getNumberValidator()
        ),
        o.Factory.addGetterSetter(
          x,
          'rotationSnapTolerance',
          5,
          d.getNumberValidator()
        ),
        o.Factory.addGetterSetter(x, 'borderEnabled', !0),
        o.Factory.addGetterSetter(x, 'anchorStroke', 'rgb(0, 161, 255)'),
        o.Factory.addGetterSetter(
          x,
          'anchorStrokeWidth',
          1,
          d.getNumberValidator()
        ),
        o.Factory.addGetterSetter(x, 'anchorFill', 'white'),
        o.Factory.addGetterSetter(
          x,
          'anchorCornerRadius',
          0,
          d.getNumberValidator()
        ),
        o.Factory.addGetterSetter(x, 'borderStroke', 'rgb(0, 161, 255)'),
        o.Factory.addGetterSetter(
          x,
          'borderStrokeWidth',
          1,
          d.getNumberValidator()
        ),
        o.Factory.addGetterSetter(x, 'borderDash'),
        o.Factory.addGetterSetter(x, 'keepRatio', !0),
        o.Factory.addGetterSetter(x, 'centeredScaling', !1),
        o.Factory.addGetterSetter(x, 'ignoreStroke', !1),
        o.Factory.addGetterSetter(x, 'padding', 0, d.getNumberValidator()),
        o.Factory.addGetterSetter(x, 'node'),
        o.Factory.addGetterSetter(x, 'nodes'),
        o.Factory.addGetterSetter(x, 'boundBoxFunc'),
        o.Factory.addGetterSetter(x, 'shouldOverdrawWholeArea', !1),
        o.Factory.backCompat(x, {
          lineEnabled: 'borderEnabled',
          rotateHandlerOffset: 'rotateAnchorOffset',
          enabledHandlers: 'enabledAnchors',
        }),
        a.Collection.mapMethods(x);
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n(5),
        a = n(2),
        o = n(9),
        l = n(3),
        s = n(4),
        u = n(3),
        c = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            r(e, t),
            (e.prototype._sceneFunc = function (t) {
              t.beginPath(),
                t.arc(
                  0,
                  0,
                  this.radius(),
                  0,
                  l.Konva.getAngle(this.angle()),
                  this.clockwise()
                ),
                t.lineTo(0, 0),
                t.closePath(),
                t.fillStrokeShape(this);
            }),
            (e.prototype.getWidth = function () {
              return 2 * this.radius();
            }),
            (e.prototype.getHeight = function () {
              return 2 * this.radius();
            }),
            (e.prototype.setWidth = function (t) {
              this.radius(t / 2);
            }),
            (e.prototype.setHeight = function (t) {
              this.radius(t / 2);
            }),
            e
          );
        })(o.Shape);
      (e.Wedge = c),
        (c.prototype.className = 'Wedge'),
        (c.prototype._centroid = !0),
        (c.prototype._attrsAffectingSize = ['radius']),
        u._registerNode(c),
        a.Factory.addGetterSetter(c, 'radius', 0, s.getNumberValidator()),
        a.Factory.addGetterSetter(c, 'angle', 0, s.getNumberValidator()),
        a.Factory.addGetterSetter(c, 'clockwise', !1),
        a.Factory.backCompat(c, {
          angleDeg: 'angle',
          getAngleDeg: 'getAngle',
          setAngleDeg: 'setAngle',
        }),
        i.Collection.mapMethods(c);
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(2),
        i = n(6),
        a = n(4);
      function o() {
        (this.r = 0),
          (this.g = 0),
          (this.b = 0),
          (this.a = 0),
          (this.next = null);
      }
      var l = [
          512,
          512,
          456,
          512,
          328,
          456,
          335,
          512,
          405,
          328,
          271,
          456,
          388,
          335,
          292,
          512,
          454,
          405,
          364,
          328,
          298,
          271,
          496,
          456,
          420,
          388,
          360,
          335,
          312,
          292,
          273,
          512,
          482,
          454,
          428,
          405,
          383,
          364,
          345,
          328,
          312,
          298,
          284,
          271,
          259,
          496,
          475,
          456,
          437,
          420,
          404,
          388,
          374,
          360,
          347,
          335,
          323,
          312,
          302,
          292,
          282,
          273,
          265,
          512,
          497,
          482,
          468,
          454,
          441,
          428,
          417,
          405,
          394,
          383,
          373,
          364,
          354,
          345,
          337,
          328,
          320,
          312,
          305,
          298,
          291,
          284,
          278,
          271,
          265,
          259,
          507,
          496,
          485,
          475,
          465,
          456,
          446,
          437,
          428,
          420,
          412,
          404,
          396,
          388,
          381,
          374,
          367,
          360,
          354,
          347,
          341,
          335,
          329,
          323,
          318,
          312,
          307,
          302,
          297,
          292,
          287,
          282,
          278,
          273,
          269,
          265,
          261,
          512,
          505,
          497,
          489,
          482,
          475,
          468,
          461,
          454,
          447,
          441,
          435,
          428,
          422,
          417,
          411,
          405,
          399,
          394,
          389,
          383,
          378,
          373,
          368,
          364,
          359,
          354,
          350,
          345,
          341,
          337,
          332,
          328,
          324,
          320,
          316,
          312,
          309,
          305,
          301,
          298,
          294,
          291,
          287,
          284,
          281,
          278,
          274,
          271,
          268,
          265,
          262,
          259,
          257,
          507,
          501,
          496,
          491,
          485,
          480,
          475,
          470,
          465,
          460,
          456,
          451,
          446,
          442,
          437,
          433,
          428,
          424,
          420,
          416,
          412,
          408,
          404,
          400,
          396,
          392,
          388,
          385,
          381,
          377,
          374,
          370,
          367,
          363,
          360,
          357,
          354,
          350,
          347,
          344,
          341,
          338,
          335,
          332,
          329,
          326,
          323,
          320,
          318,
          315,
          312,
          310,
          307,
          304,
          302,
          299,
          297,
          294,
          292,
          289,
          287,
          285,
          282,
          280,
          278,
          275,
          273,
          271,
          269,
          267,
          265,
          263,
          261,
          259,
        ],
        s = [
          9,
          11,
          12,
          13,
          13,
          14,
          14,
          15,
          15,
          15,
          15,
          16,
          16,
          16,
          16,
          17,
          17,
          17,
          17,
          17,
          17,
          17,
          18,
          18,
          18,
          18,
          18,
          18,
          18,
          18,
          18,
          19,
          19,
          19,
          19,
          19,
          19,
          19,
          19,
          19,
          19,
          19,
          19,
          19,
          19,
          20,
          20,
          20,
          20,
          20,
          20,
          20,
          20,
          20,
          20,
          20,
          20,
          20,
          20,
          20,
          20,
          20,
          20,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          22,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          23,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
          24,
        ];
      (e.Blur = function (t) {
        var e = Math.round(this.blurRadius());
        e > 0 &&
          (function (t, e) {
            var n,
              r,
              i,
              a,
              u,
              c,
              f,
              d,
              h,
              p,
              g,
              v,
              y,
              m,
              b,
              _,
              w,
              S,
              x,
              k,
              C,
              P,
              E,
              T,
              O = t.data,
              N = t.width,
              M = t.height,
              A = e + e + 1,
              F = N - 1,
              L = M - 1,
              R = e + 1,
              I = (R * (R + 1)) / 2,
              D = new o(),
              z = null,
              U = D,
              j = null,
              G = null,
              B = l[e],
              H = s[e];
            for (i = 1; i < A; i++) (U = U.next = new o()), i === R && (z = U);
            for (U.next = D, f = c = 0, r = 0; r < M; r++) {
              for (
                _ = w = S = x = d = h = p = g = 0,
                  v = R * (k = O[c]),
                  y = R * (C = O[c + 1]),
                  m = R * (P = O[c + 2]),
                  b = R * (E = O[c + 3]),
                  d += I * k,
                  h += I * C,
                  p += I * P,
                  g += I * E,
                  U = D,
                  i = 0;
                i < R;
                i++
              )
                (U.r = k), (U.g = C), (U.b = P), (U.a = E), (U = U.next);
              for (i = 1; i < R; i++)
                (a = c + ((F < i ? F : i) << 2)),
                  (d += (U.r = k = O[a]) * (T = R - i)),
                  (h += (U.g = C = O[a + 1]) * T),
                  (p += (U.b = P = O[a + 2]) * T),
                  (g += (U.a = E = O[a + 3]) * T),
                  (_ += k),
                  (w += C),
                  (S += P),
                  (x += E),
                  (U = U.next);
              for (j = D, G = z, n = 0; n < N; n++)
                (O[c + 3] = E = (g * B) >> H),
                  0 !== E
                    ? ((E = 255 / E),
                      (O[c] = ((d * B) >> H) * E),
                      (O[c + 1] = ((h * B) >> H) * E),
                      (O[c + 2] = ((p * B) >> H) * E))
                    : (O[c] = O[c + 1] = O[c + 2] = 0),
                  (d -= v),
                  (h -= y),
                  (p -= m),
                  (g -= b),
                  (v -= j.r),
                  (y -= j.g),
                  (m -= j.b),
                  (b -= j.a),
                  (a = (f + ((a = n + e + 1) < F ? a : F)) << 2),
                  (d += _ += j.r = O[a]),
                  (h += w += j.g = O[a + 1]),
                  (p += S += j.b = O[a + 2]),
                  (g += x += j.a = O[a + 3]),
                  (j = j.next),
                  (v += k = G.r),
                  (y += C = G.g),
                  (m += P = G.b),
                  (b += E = G.a),
                  (_ -= k),
                  (w -= C),
                  (S -= P),
                  (x -= E),
                  (G = G.next),
                  (c += 4);
              f += N;
            }
            for (n = 0; n < N; n++) {
              for (
                w = S = x = _ = h = p = g = d = 0,
                  v = R * (k = O[(c = n << 2)]),
                  y = R * (C = O[c + 1]),
                  m = R * (P = O[c + 2]),
                  b = R * (E = O[c + 3]),
                  d += I * k,
                  h += I * C,
                  p += I * P,
                  g += I * E,
                  U = D,
                  i = 0;
                i < R;
                i++
              )
                (U.r = k), (U.g = C), (U.b = P), (U.a = E), (U = U.next);
              for (u = N, i = 1; i <= e; i++)
                (c = (u + n) << 2),
                  (d += (U.r = k = O[c]) * (T = R - i)),
                  (h += (U.g = C = O[c + 1]) * T),
                  (p += (U.b = P = O[c + 2]) * T),
                  (g += (U.a = E = O[c + 3]) * T),
                  (_ += k),
                  (w += C),
                  (S += P),
                  (x += E),
                  (U = U.next),
                  i < L && (u += N);
              for (c = n, j = D, G = z, r = 0; r < M; r++)
                (O[3 + (a = c << 2)] = E = (g * B) >> H),
                  E > 0
                    ? ((E = 255 / E),
                      (O[a] = ((d * B) >> H) * E),
                      (O[a + 1] = ((h * B) >> H) * E),
                      (O[a + 2] = ((p * B) >> H) * E))
                    : (O[a] = O[a + 1] = O[a + 2] = 0),
                  (d -= v),
                  (h -= y),
                  (p -= m),
                  (g -= b),
                  (v -= j.r),
                  (y -= j.g),
                  (m -= j.b),
                  (b -= j.a),
                  (a = (n + ((a = r + R) < L ? a : L) * N) << 2),
                  (d += _ += j.r = O[a]),
                  (h += w += j.g = O[a + 1]),
                  (p += S += j.b = O[a + 2]),
                  (g += x += j.a = O[a + 3]),
                  (j = j.next),
                  (v += k = G.r),
                  (y += C = G.g),
                  (m += P = G.b),
                  (b += E = G.a),
                  (_ -= k),
                  (w -= C),
                  (S -= P),
                  (x -= E),
                  (G = G.next),
                  (c += N);
            }
          })(t, e);
      }),
        r.Factory.addGetterSetter(
          i.Node,
          'blurRadius',
          0,
          a.getNumberValidator(),
          r.Factory.afterSetFilter
        );
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(2),
        i = n(6),
        a = n(4);
      (e.Brighten = function (t) {
        var e,
          n = 255 * this.brightness(),
          r = t.data,
          i = r.length;
        for (e = 0; e < i; e += 4)
          (r[e] += n), (r[e + 1] += n), (r[e + 2] += n);
      }),
        r.Factory.addGetterSetter(
          i.Node,
          'brightness',
          0,
          a.getNumberValidator(),
          r.Factory.afterSetFilter
        );
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(2),
        i = n(6),
        a = n(4);
      (e.Contrast = function (t) {
        var e,
          n = Math.pow((this.contrast() + 100) / 100, 2),
          r = t.data,
          i = r.length,
          a = 150,
          o = 150,
          l = 150;
        for (e = 0; e < i; e += 4)
          (a = r[e]),
            (o = r[e + 1]),
            (l = r[e + 2]),
            (a /= 255),
            (a -= 0.5),
            (a *= n),
            (a += 0.5),
            (o /= 255),
            (o -= 0.5),
            (o *= n),
            (o += 0.5),
            (l /= 255),
            (l -= 0.5),
            (l *= n),
            (l += 0.5),
            (a = (a *= 255) < 0 ? 0 : a > 255 ? 255 : a),
            (o = (o *= 255) < 0 ? 0 : o > 255 ? 255 : o),
            (l = (l *= 255) < 0 ? 0 : l > 255 ? 255 : l),
            (r[e] = a),
            (r[e + 1] = o),
            (r[e + 2] = l);
      }),
        r.Factory.addGetterSetter(
          i.Node,
          'contrast',
          0,
          a.getNumberValidator(),
          r.Factory.afterSetFilter
        );
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(2),
        i = n(6),
        a = n(5),
        o = n(4);
      (e.Emboss = function (t) {
        var e = 10 * this.embossStrength(),
          n = 255 * this.embossWhiteLevel(),
          r = this.embossDirection(),
          i = this.embossBlend(),
          o = 0,
          l = 0,
          s = t.data,
          u = t.width,
          c = t.height,
          f = 4 * u,
          d = c;
        switch (r) {
          case 'top-left':
            (o = -1), (l = -1);
            break;
          case 'top':
            (o = -1), (l = 0);
            break;
          case 'top-right':
            (o = -1), (l = 1);
            break;
          case 'right':
            (o = 0), (l = 1);
            break;
          case 'bottom-right':
            (o = 1), (l = 1);
            break;
          case 'bottom':
            (o = 1), (l = 0);
            break;
          case 'bottom-left':
            (o = 1), (l = -1);
            break;
          case 'left':
            (o = 0), (l = -1);
            break;
          default:
            a.Util.error('Unknown emboss direction: ' + r);
        }
        do {
          var h = (d - 1) * f,
            p = o;
          d + p < 1 && (p = 0), d + p > c && (p = 0);
          var g = (d - 1 + p) * u * 4,
            v = u;
          do {
            var y = h + 4 * (v - 1),
              m = l;
            v + m < 1 && (m = 0), v + m > u && (m = 0);
            var b = g + 4 * (v - 1 + m),
              _ = s[y] - s[b],
              w = s[y + 1] - s[b + 1],
              S = s[y + 2] - s[b + 2],
              x = _,
              k = x > 0 ? x : -x;
            if (
              ((w > 0 ? w : -w) > k && (x = w),
              (S > 0 ? S : -S) > k && (x = S),
              (x *= e),
              i)
            ) {
              var C = s[y] + x,
                P = s[y + 1] + x,
                E = s[y + 2] + x;
              (s[y] = C > 255 ? 255 : C < 0 ? 0 : C),
                (s[y + 1] = P > 255 ? 255 : P < 0 ? 0 : P),
                (s[y + 2] = E > 255 ? 255 : E < 0 ? 0 : E);
            } else {
              var T = n - x;
              T < 0 ? (T = 0) : T > 255 && (T = 255),
                (s[y] = s[y + 1] = s[y + 2] = T);
            }
          } while (--v);
        } while (--d);
      }),
        r.Factory.addGetterSetter(
          i.Node,
          'embossStrength',
          0.5,
          o.getNumberValidator(),
          r.Factory.afterSetFilter
        ),
        r.Factory.addGetterSetter(
          i.Node,
          'embossWhiteLevel',
          0.5,
          o.getNumberValidator(),
          r.Factory.afterSetFilter
        ),
        r.Factory.addGetterSetter(
          i.Node,
          'embossDirection',
          'top-left',
          null,
          r.Factory.afterSetFilter
        ),
        r.Factory.addGetterSetter(
          i.Node,
          'embossBlend',
          !1,
          null,
          r.Factory.afterSetFilter
        );
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(2),
        i = n(6),
        a = n(4);
      function o(t, e, n, r, i) {
        var a = n - e,
          o = i - r;
        return 0 === a ? r + o / 2 : 0 === o ? r : o * ((t - e) / a) + r;
      }
      (e.Enhance = function (t) {
        var e,
          n,
          r,
          i,
          a = t.data,
          l = a.length,
          s = a[0],
          u = s,
          c = a[1],
          f = c,
          d = a[2],
          h = d,
          p = this.enhance();
        if (0 !== p) {
          for (i = 0; i < l; i += 4)
            (e = a[i + 0]) < s ? (s = e) : e > u && (u = e),
              (n = a[i + 1]) < c ? (c = n) : n > f && (f = n),
              (r = a[i + 2]) < d ? (d = r) : r > h && (h = r);
          var g, v, y, m, b, _, w, S, x;
          for (
            u === s && ((u = 255), (s = 0)),
              f === c && ((f = 255), (c = 0)),
              h === d && ((h = 255), (d = 0)),
              p > 0
                ? ((v = u + p * (255 - u)),
                  (y = s - p * (s - 0)),
                  (b = f + p * (255 - f)),
                  (_ = c - p * (c - 0)),
                  (S = h + p * (255 - h)),
                  (x = d - p * (d - 0)))
                : ((v = u + p * (u - (g = 0.5 * (u + s)))),
                  (y = s + p * (s - g)),
                  (b = f + p * (f - (m = 0.5 * (f + c)))),
                  (_ = c + p * (c - m)),
                  (S = h + p * (h - (w = 0.5 * (h + d)))),
                  (x = d + p * (d - w))),
              i = 0;
            i < l;
            i += 4
          )
            (a[i + 0] = o(a[i + 0], s, u, y, v)),
              (a[i + 1] = o(a[i + 1], c, f, _, b)),
              (a[i + 2] = o(a[i + 2], d, h, x, S));
        }
      }),
        r.Factory.addGetterSetter(
          i.Node,
          'enhance',
          0,
          a.getNumberValidator(),
          r.Factory.afterSetFilter
        );
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Grayscale = function (t) {
          var e,
            n,
            r = t.data,
            i = r.length;
          for (e = 0; e < i; e += 4)
            (n = 0.34 * r[e] + 0.5 * r[e + 1] + 0.16 * r[e + 2]),
              (r[e] = n),
              (r[e + 1] = n),
              (r[e + 2] = n);
        });
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(2),
        i = n(6),
        a = n(4);
      r.Factory.addGetterSetter(
        i.Node,
        'hue',
        0,
        a.getNumberValidator(),
        r.Factory.afterSetFilter
      ),
        r.Factory.addGetterSetter(
          i.Node,
          'saturation',
          0,
          a.getNumberValidator(),
          r.Factory.afterSetFilter
        ),
        r.Factory.addGetterSetter(
          i.Node,
          'luminance',
          0,
          a.getNumberValidator(),
          r.Factory.afterSetFilter
        ),
        (e.HSL = function (t) {
          var e,
            n,
            r,
            i,
            a,
            o = t.data,
            l = o.length,
            s = Math.pow(2, this.saturation()),
            u = Math.abs(this.hue() + 360) % 360,
            c = 127 * this.luminance(),
            f = 1 * s * Math.cos((u * Math.PI) / 180),
            d = 1 * s * Math.sin((u * Math.PI) / 180),
            h = 0.299 + 0.701 * f + 0.167 * d,
            p = 0.587 - 0.587 * f + 0.33 * d,
            g = 0.114 - 0.114 * f - 0.497 * d,
            v = 0.299 - 0.299 * f - 0.328 * d,
            y = 0.587 + 0.413 * f + 0.035 * d,
            m = 0.114 - 0.114 * f + 0.293 * d,
            b = 0.299 - 0.3 * f + 1.25 * d,
            _ = 0.587 - 0.586 * f - 1.05 * d,
            w = 0.114 + 0.886 * f - 0.2 * d;
          for (e = 0; e < l; e += 4)
            (n = o[e + 0]),
              (r = o[e + 1]),
              (i = o[e + 2]),
              (a = o[e + 3]),
              (o[e + 0] = h * n + p * r + g * i + c),
              (o[e + 1] = v * n + y * r + m * i + c),
              (o[e + 2] = b * n + _ * r + w * i + c),
              (o[e + 3] = a);
        });
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(2),
        i = n(6),
        a = n(4);
      (e.HSV = function (t) {
        var e,
          n,
          r,
          i,
          a,
          o = t.data,
          l = o.length,
          s = Math.pow(2, this.value()),
          u = Math.pow(2, this.saturation()),
          c = Math.abs(this.hue() + 360) % 360,
          f = s * u * Math.cos((c * Math.PI) / 180),
          d = s * u * Math.sin((c * Math.PI) / 180),
          h = 0.299 * s + 0.701 * f + 0.167 * d,
          p = 0.587 * s - 0.587 * f + 0.33 * d,
          g = 0.114 * s - 0.114 * f - 0.497 * d,
          v = 0.299 * s - 0.299 * f - 0.328 * d,
          y = 0.587 * s + 0.413 * f + 0.035 * d,
          m = 0.114 * s - 0.114 * f + 0.293 * d,
          b = 0.299 * s - 0.3 * f + 1.25 * d,
          _ = 0.587 * s - 0.586 * f - 1.05 * d,
          w = 0.114 * s + 0.886 * f - 0.2 * d;
        for (e = 0; e < l; e += 4)
          (n = o[e + 0]),
            (r = o[e + 1]),
            (i = o[e + 2]),
            (a = o[e + 3]),
            (o[e + 0] = h * n + p * r + g * i),
            (o[e + 1] = v * n + y * r + m * i),
            (o[e + 2] = b * n + _ * r + w * i),
            (o[e + 3] = a);
      }),
        r.Factory.addGetterSetter(
          i.Node,
          'hue',
          0,
          a.getNumberValidator(),
          r.Factory.afterSetFilter
        ),
        r.Factory.addGetterSetter(
          i.Node,
          'saturation',
          0,
          a.getNumberValidator(),
          r.Factory.afterSetFilter
        ),
        r.Factory.addGetterSetter(
          i.Node,
          'value',
          0,
          a.getNumberValidator(),
          r.Factory.afterSetFilter
        );
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Invert = function (t) {
          var e,
            n = t.data,
            r = n.length;
          for (e = 0; e < r; e += 4)
            (n[e] = 255 - n[e]),
              (n[e + 1] = 255 - n[e + 1]),
              (n[e + 2] = 255 - n[e + 2]);
        });
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(2),
        i = n(6),
        a = n(5),
        o = n(4);
      (e.Kaleidoscope = function (t) {
        var e,
          n,
          r,
          i,
          o,
          l,
          s,
          u,
          c,
          f = t.width,
          d = t.height,
          h = Math.round(this.kaleidoscopePower()),
          p = Math.round(this.kaleidoscopeAngle()),
          g = Math.floor((f * (p % 360)) / 360);
        if (!(h < 1)) {
          var v = a.Util.createCanvasElement();
          (v.width = f), (v.height = d);
          var y = v.getContext('2d').getImageData(0, 0, f, d);
          !(function (t, e, n) {
            var r,
              i,
              a,
              o,
              l = t.data,
              s = e.data,
              u = t.width,
              c = t.height,
              f = n.polarCenterX || u / 2,
              d = n.polarCenterY || c / 2,
              h = 0,
              p = 0,
              g = 0,
              v = 0,
              y = Math.sqrt(f * f + d * d);
            (i = u - f),
              (a = c - d),
              (y = (o = Math.sqrt(i * i + a * a)) > y ? o : y);
            var m,
              b,
              _,
              w,
              S = c,
              x = u,
              k = ((360 / x) * Math.PI) / 180;
            for (b = 0; b < x; b += 1)
              for (
                _ = Math.sin(b * k), w = Math.cos(b * k), m = 0;
                m < S;
                m += 1
              )
                (i = Math.floor(f + ((y * m) / S) * w)),
                  (h =
                    l[
                      0 +
                        (r =
                          4 * ((a = Math.floor(d + ((y * m) / S) * _)) * u + i))
                    ]),
                  (p = l[r + 1]),
                  (g = l[r + 2]),
                  (v = l[r + 3]),
                  (s[0 + (r = 4 * (b + m * u))] = h),
                  (s[r + 1] = p),
                  (s[r + 2] = g),
                  (s[r + 3] = v);
          })(t, y, { polarCenterX: f / 2, polarCenterY: d / 2 });
          for (var m = f / Math.pow(2, h); m <= 8; ) (m *= 2), (h -= 1);
          var b = (m = Math.ceil(m)),
            _ = 0,
            w = b,
            S = 1;
          for (g + m > f && ((_ = b), (w = 0), (S = -1)), n = 0; n < d; n += 1)
            for (e = _; e !== w; e += S)
              (u = 4 * (f * n + (Math.round(e + g) % f))),
                (i = y.data[u + 0]),
                (o = y.data[u + 1]),
                (l = y.data[u + 2]),
                (s = y.data[u + 3]),
                (c = 4 * (f * n + e)),
                (y.data[c + 0] = i),
                (y.data[c + 1] = o),
                (y.data[c + 2] = l),
                (y.data[c + 3] = s);
          for (n = 0; n < d; n += 1)
            for (b = Math.floor(m), r = 0; r < h; r += 1) {
              for (e = 0; e < b + 1; e += 1)
                (u = 4 * (f * n + e)),
                  (i = y.data[u + 0]),
                  (o = y.data[u + 1]),
                  (l = y.data[u + 2]),
                  (s = y.data[u + 3]),
                  (c = 4 * (f * n + 2 * b - e - 1)),
                  (y.data[c + 0] = i),
                  (y.data[c + 1] = o),
                  (y.data[c + 2] = l),
                  (y.data[c + 3] = s);
              b *= 2;
            }
          !(function (t, e, n) {
            var r,
              i,
              a,
              o,
              l,
              s,
              u = t.data,
              c = e.data,
              f = t.width,
              d = t.height,
              h = n.polarCenterX || f / 2,
              p = n.polarCenterY || d / 2,
              g = 0,
              v = 0,
              y = 0,
              m = 0,
              b = Math.sqrt(h * h + p * p);
            (i = f - h),
              (a = d - p),
              (b = (s = Math.sqrt(i * i + a * a)) > b ? s : b);
            var _,
              w,
              S,
              x = d,
              k = f,
              C = n.polarRotation || 0;
            for (i = 0; i < f; i += 1)
              for (a = 0; a < d; a += 1)
                (o = i - h),
                  (l = a - p),
                  (_ = (Math.sqrt(o * o + l * l) * x) / b),
                  (w =
                    ((w =
                      ((180 * Math.atan2(l, o)) / Math.PI + 360 + C) % 360) *
                      k) /
                    360),
                  (S = Math.floor(w)),
                  (g = u[0 + (r = 4 * (Math.floor(_) * f + S))]),
                  (v = u[r + 1]),
                  (y = u[r + 2]),
                  (m = u[r + 3]),
                  (c[0 + (r = 4 * (a * f + i))] = g),
                  (c[r + 1] = v),
                  (c[r + 2] = y),
                  (c[r + 3] = m);
          })(y, t, { polarRotation: 0 });
        }
      }),
        r.Factory.addGetterSetter(
          i.Node,
          'kaleidoscopePower',
          2,
          o.getNumberValidator(),
          r.Factory.afterSetFilter
        ),
        r.Factory.addGetterSetter(
          i.Node,
          'kaleidoscopeAngle',
          0,
          o.getNumberValidator(),
          r.Factory.afterSetFilter
        );
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(2),
        i = n(6),
        a = n(4);
      function o(t, e, n) {
        var r = 4 * (n * t.width + e),
          i = [];
        return i.push(t.data[r++], t.data[r++], t.data[r++], t.data[r++]), i;
      }
      function l(t, e) {
        return Math.sqrt(
          Math.pow(t[0] - e[0], 2) +
            Math.pow(t[1] - e[1], 2) +
            Math.pow(t[2] - e[2], 2)
        );
      }
      (e.Mask = function (t) {
        var e = (function (t, e) {
          var n = o(t, 0, 0),
            r = o(t, t.width - 1, 0),
            i = o(t, 0, t.height - 1),
            a = o(t, t.width - 1, t.height - 1),
            s = e || 10;
          if (l(n, r) < s && l(r, a) < s && l(a, i) < s && l(i, n) < s) {
            for (
              var u = (function (t) {
                  for (var e = [0, 0, 0], n = 0; n < t.length; n++)
                    (e[0] += t[n][0]), (e[1] += t[n][1]), (e[2] += t[n][2]);
                  return (
                    (e[0] /= t.length),
                    (e[1] /= t.length),
                    (e[2] /= t.length),
                    e
                  );
                })([r, n, a, i]),
                c = [],
                f = 0;
              f < t.width * t.height;
              f++
            ) {
              var d = l(u, [
                t.data[4 * f],
                t.data[4 * f + 1],
                t.data[4 * f + 2],
              ]);
              c[f] = d < s ? 0 : 255;
            }
            return c;
          }
        })(t, this.threshold());
        return (
          e &&
            (function (t, e) {
              for (var n = 0; n < t.width * t.height; n++)
                t.data[4 * n + 3] = e[n];
            })(
              t,
              (e = (function (t, e, n) {
                for (
                  var r = [
                      1 / 9,
                      1 / 9,
                      1 / 9,
                      1 / 9,
                      1 / 9,
                      1 / 9,
                      1 / 9,
                      1 / 9,
                      1 / 9,
                    ],
                    i = Math.round(Math.sqrt(r.length)),
                    a = Math.floor(i / 2),
                    o = [],
                    l = 0;
                  l < n;
                  l++
                )
                  for (var s = 0; s < e; s++) {
                    for (var u = l * e + s, c = 0, f = 0; f < i; f++)
                      for (var d = 0; d < i; d++) {
                        var h = l + f - a,
                          p = s + d - a;
                        if (h >= 0 && h < n && p >= 0 && p < e) {
                          var g = r[f * i + d];
                          c += t[h * e + p] * g;
                        }
                      }
                    o[u] = c;
                  }
                return o;
              })(
                (e = (function (t, e, n) {
                  for (
                    var r = [1, 1, 1, 1, 1, 1, 1, 1, 1],
                      i = Math.round(Math.sqrt(r.length)),
                      a = Math.floor(i / 2),
                      o = [],
                      l = 0;
                    l < n;
                    l++
                  )
                    for (var s = 0; s < e; s++) {
                      for (var u = l * e + s, c = 0, f = 0; f < i; f++)
                        for (var d = 0; d < i; d++) {
                          var h = l + f - a,
                            p = s + d - a;
                          if (h >= 0 && h < n && p >= 0 && p < e) {
                            var g = r[f * i + d];
                            c += t[h * e + p] * g;
                          }
                        }
                      o[u] = c >= 1020 ? 255 : 0;
                    }
                  return o;
                })(
                  (e = (function (t, e, n) {
                    for (
                      var r = [1, 1, 1, 1, 0, 1, 1, 1, 1],
                        i = Math.round(Math.sqrt(r.length)),
                        a = Math.floor(i / 2),
                        o = [],
                        l = 0;
                      l < n;
                      l++
                    )
                      for (var s = 0; s < e; s++) {
                        for (var u = l * e + s, c = 0, f = 0; f < i; f++)
                          for (var d = 0; d < i; d++) {
                            var h = l + f - a,
                              p = s + d - a;
                            if (h >= 0 && h < n && p >= 0 && p < e) {
                              var g = r[f * i + d];
                              c += t[h * e + p] * g;
                            }
                          }
                        o[u] = 2040 === c ? 255 : 0;
                      }
                    return o;
                  })(e, t.width, t.height)),
                  t.width,
                  t.height
                )),
                t.width,
                t.height
              ))
            ),
          t
        );
      }),
        r.Factory.addGetterSetter(
          i.Node,
          'threshold',
          0,
          a.getNumberValidator(),
          r.Factory.afterSetFilter
        );
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(2),
        i = n(6),
        a = n(4);
      (e.Noise = function (t) {
        var e,
          n = 255 * this.noise(),
          r = t.data,
          i = r.length,
          a = n / 2;
        for (e = 0; e < i; e += 4)
          (r[e + 0] += a - 2 * a * Math.random()),
            (r[e + 1] += a - 2 * a * Math.random()),
            (r[e + 2] += a - 2 * a * Math.random());
      }),
        r.Factory.addGetterSetter(
          i.Node,
          'noise',
          0.2,
          a.getNumberValidator(),
          r.Factory.afterSetFilter
        );
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(2),
        i = n(5),
        a = n(6),
        o = n(4);
      (e.Pixelate = function (t) {
        var e,
          n,
          r,
          a,
          o,
          l,
          s,
          u,
          c,
          f,
          d,
          h,
          p,
          g,
          v = Math.ceil(this.pixelSize()),
          y = t.width,
          m = t.height,
          b = Math.ceil(y / v),
          _ = Math.ceil(m / v),
          w = t.data;
        if (v <= 0) i.Util.error('pixelSize value can not be <= 0');
        else
          for (h = 0; h < b; h += 1)
            for (p = 0; p < _; p += 1) {
              for (
                a = 0,
                  o = 0,
                  l = 0,
                  s = 0,
                  c = (u = h * v) + v,
                  d = (f = p * v) + v,
                  g = 0,
                  e = u;
                e < c;
                e += 1
              )
                if (!(e >= y))
                  for (n = f; n < d; n += 1)
                    n >= m ||
                      ((a += w[(r = 4 * (y * n + e)) + 0]),
                      (o += w[r + 1]),
                      (l += w[r + 2]),
                      (s += w[r + 3]),
                      (g += 1));
              for (a /= g, o /= g, l /= g, s /= g, e = u; e < c; e += 1)
                if (!(e >= y))
                  for (n = f; n < d; n += 1)
                    n >= m ||
                      ((w[(r = 4 * (y * n + e)) + 0] = a),
                      (w[r + 1] = o),
                      (w[r + 2] = l),
                      (w[r + 3] = s));
            }
      }),
        r.Factory.addGetterSetter(
          a.Node,
          'pixelSize',
          8,
          o.getNumberValidator(),
          r.Factory.afterSetFilter
        );
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(2),
        i = n(6),
        a = n(4);
      (e.Posterize = function (t) {
        var e,
          n = Math.round(254 * this.levels()) + 1,
          r = t.data,
          i = r.length,
          a = 255 / n;
        for (e = 0; e < i; e += 1) r[e] = Math.floor(r[e] / a) * a;
      }),
        r.Factory.addGetterSetter(
          i.Node,
          'levels',
          0.5,
          a.getNumberValidator(),
          r.Factory.afterSetFilter
        );
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(2),
        i = n(6),
        a = n(4);
      (e.RGB = function (t) {
        var e,
          n,
          r = t.data,
          i = r.length,
          a = this.red(),
          o = this.green(),
          l = this.blue();
        for (e = 0; e < i; e += 4)
          (n = (0.34 * r[e] + 0.5 * r[e + 1] + 0.16 * r[e + 2]) / 255),
            (r[e] = n * a),
            (r[e + 1] = n * o),
            (r[e + 2] = n * l),
            (r[e + 3] = r[e + 3]);
      }),
        r.Factory.addGetterSetter(i.Node, 'red', 0, function (t) {
          return (
            (this._filterUpToDate = !1),
            t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
          );
        }),
        r.Factory.addGetterSetter(i.Node, 'green', 0, function (t) {
          return (
            (this._filterUpToDate = !1),
            t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
          );
        }),
        r.Factory.addGetterSetter(
          i.Node,
          'blue',
          0,
          a.RGBComponent,
          r.Factory.afterSetFilter
        );
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(2),
        i = n(6),
        a = n(4);
      (e.RGBA = function (t) {
        var e,
          n,
          r = t.data,
          i = r.length,
          a = this.red(),
          o = this.green(),
          l = this.blue(),
          s = this.alpha();
        for (e = 0; e < i; e += 4)
          (n = 1 - s),
            (r[e] = a * s + r[e] * n),
            (r[e + 1] = o * s + r[e + 1] * n),
            (r[e + 2] = l * s + r[e + 2] * n);
      }),
        r.Factory.addGetterSetter(i.Node, 'red', 0, function (t) {
          return (
            (this._filterUpToDate = !1),
            t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
          );
        }),
        r.Factory.addGetterSetter(i.Node, 'green', 0, function (t) {
          return (
            (this._filterUpToDate = !1),
            t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
          );
        }),
        r.Factory.addGetterSetter(
          i.Node,
          'blue',
          0,
          a.RGBComponent,
          r.Factory.afterSetFilter
        ),
        r.Factory.addGetterSetter(i.Node, 'alpha', 1, function (t) {
          return (this._filterUpToDate = !1), t > 1 ? 1 : t < 0 ? 0 : t;
        });
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Sepia = function (t) {
          var e,
            n,
            r,
            i,
            a = t.data,
            o = a.length;
          for (e = 0; e < o; e += 4)
            (n = a[e + 0]),
              (r = a[e + 1]),
              (i = a[e + 2]),
              (a[e + 0] = Math.min(255, 0.393 * n + 0.769 * r + 0.189 * i)),
              (a[e + 1] = Math.min(255, 0.349 * n + 0.686 * r + 0.168 * i)),
              (a[e + 2] = Math.min(255, 0.272 * n + 0.534 * r + 0.131 * i));
        });
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Solarize = function (t) {
          var e = t.data,
            n = t.width,
            r = 4 * n,
            i = t.height;
          do {
            var a = (i - 1) * r,
              o = n;
            do {
              var l = a + 4 * (o - 1),
                s = e[l],
                u = e[l + 1],
                c = e[l + 2];
              s > 127 && (s = 255 - s),
                u > 127 && (u = 255 - u),
                c > 127 && (c = 255 - c),
                (e[l] = s),
                (e[l + 1] = u),
                (e[l + 2] = c);
            } while (--o);
          } while (--i);
        });
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(2),
        i = n(6),
        a = n(4);
      (e.Threshold = function (t) {
        var e,
          n = 255 * this.threshold(),
          r = t.data,
          i = r.length;
        for (e = 0; e < i; e += 1) r[e] = r[e] < n ? 0 : 255;
      }),
        r.Factory.addGetterSetter(
          i.Node,
          'threshold',
          0.5,
          a.getNumberValidator(),
          r.Factory.afterSetFilter
        );
    },
    ,
    ,
    ,
    function (t, e, n) {
      'use strict';
      var r = n(99);
      function i() {}
      function a() {}
      (a.resetWarningCache = i),
        (t.exports = function () {
          function t(t, e, n, i, a, o) {
            if (o !== r) {
              var l = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              );
              throw ((l.name = 'Invariant Violation'), l);
            }
          }
          function e() {
            return t;
          }
          t.isRequired = t;
          var n = {
            array: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: a,
            resetWarningCache: i,
          };
          return (n.PropTypes = n), n;
        });
    },
    function (t, e, n) {
      'use strict';
      t.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    function (t, e) {
      t.exports =
        Array.isArray ||
        function (t) {
          return '[object Array]' == Object.prototype.toString.call(t);
        };
    },
    function (t, e, n) {
      'use strict';
      var r = 'function' === typeof Symbol && Symbol.for,
        i = r ? Symbol.for('react.element') : 60103,
        a = r ? Symbol.for('react.portal') : 60106,
        o = r ? Symbol.for('react.fragment') : 60107,
        l = r ? Symbol.for('react.strict_mode') : 60108,
        s = r ? Symbol.for('react.profiler') : 60114,
        u = r ? Symbol.for('react.provider') : 60109,
        c = r ? Symbol.for('react.context') : 60110,
        f = r ? Symbol.for('react.async_mode') : 60111,
        d = r ? Symbol.for('react.concurrent_mode') : 60111,
        h = r ? Symbol.for('react.forward_ref') : 60112,
        p = r ? Symbol.for('react.suspense') : 60113,
        g = r ? Symbol.for('react.suspense_list') : 60120,
        v = r ? Symbol.for('react.memo') : 60115,
        y = r ? Symbol.for('react.lazy') : 60116,
        m = r ? Symbol.for('react.block') : 60121,
        b = r ? Symbol.for('react.fundamental') : 60117,
        _ = r ? Symbol.for('react.responder') : 60118,
        w = r ? Symbol.for('react.scope') : 60119;
      function S(t) {
        if ('object' === typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case i:
              switch ((t = t.type)) {
                case f:
                case d:
                case o:
                case s:
                case l:
                case p:
                  return t;
                default:
                  switch ((t = t && t.$$typeof)) {
                    case c:
                    case h:
                    case y:
                    case v:
                    case u:
                      return t;
                    default:
                      return e;
                  }
              }
            case a:
              return e;
          }
        }
      }
      function x(t) {
        return S(t) === d;
      }
      (e.AsyncMode = f),
        (e.ConcurrentMode = d),
        (e.ContextConsumer = c),
        (e.ContextProvider = u),
        (e.Element = i),
        (e.ForwardRef = h),
        (e.Fragment = o),
        (e.Lazy = y),
        (e.Memo = v),
        (e.Portal = a),
        (e.Profiler = s),
        (e.StrictMode = l),
        (e.Suspense = p),
        (e.isAsyncMode = function (t) {
          return x(t) || S(t) === f;
        }),
        (e.isConcurrentMode = x),
        (e.isContextConsumer = function (t) {
          return S(t) === c;
        }),
        (e.isContextProvider = function (t) {
          return S(t) === u;
        }),
        (e.isElement = function (t) {
          return 'object' === typeof t && null !== t && t.$$typeof === i;
        }),
        (e.isForwardRef = function (t) {
          return S(t) === h;
        }),
        (e.isFragment = function (t) {
          return S(t) === o;
        }),
        (e.isLazy = function (t) {
          return S(t) === y;
        }),
        (e.isMemo = function (t) {
          return S(t) === v;
        }),
        (e.isPortal = function (t) {
          return S(t) === a;
        }),
        (e.isProfiler = function (t) {
          return S(t) === s;
        }),
        (e.isStrictMode = function (t) {
          return S(t) === l;
        }),
        (e.isSuspense = function (t) {
          return S(t) === p;
        }),
        (e.isValidElementType = function (t) {
          return (
            'string' === typeof t ||
            'function' === typeof t ||
            t === o ||
            t === d ||
            t === s ||
            t === l ||
            t === p ||
            t === g ||
            ('object' === typeof t &&
              null !== t &&
              (t.$$typeof === y ||
                t.$$typeof === v ||
                t.$$typeof === u ||
                t.$$typeof === c ||
                t.$$typeof === h ||
                t.$$typeof === b ||
                t.$$typeof === _ ||
                t.$$typeof === w ||
                t.$$typeof === m))
          );
        }),
        (e.typeOf = S);
    },
  ],
]);
//# sourceMappingURL=2.453b8f72.chunk.js.map
