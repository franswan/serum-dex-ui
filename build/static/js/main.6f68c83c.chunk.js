(this['webpackJsonpserum-dex-ui'] =
  this['webpackJsonpserum-dex-ui'] || []).push([
  [0],
  {
    275: function (e, t, n) {
      'use strict';
      (function (e) {
        n.d(t, 'b', function () {
          return d;
        }),
          n.d(t, 'a', function () {
            return b;
          });
        var r = n(7),
          a = n.n(r),
          o = n(15),
          c = n(16);
        function i(e, t, n, r) {
          return l.apply(this, arguments);
        }
        function l() {
          return (l = Object(o.a)(
            a.a.mark(function e(t, n, r, o) {
              var c, i, l, u, s;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((c = 0), (i = 0), !(o.length > 255))) {
                        e.next = 15;
                        break;
                      }
                    case 3:
                      if (!(o.length - i > 255)) {
                        e.next = 15;
                        break;
                      }
                      return (
                        (l = o.slice(i, i + 255)),
                        (i += 255),
                        console.log(
                          'send',
                          (2 | c).toString(16),
                          l.length.toString(16),
                          l,
                        ),
                        (e.next = 9),
                        t.send(224, n, r, 2 | c, l)
                      );
                    case 9:
                      if (2 === e.sent.length) {
                        e.next = 12;
                        break;
                      }
                      throw new Error('Received unexpected reply payload');
                    case 12:
                      (c |= 1), (e.next = 3);
                      break;
                    case 15:
                      return (
                        (u = o.slice(i)),
                        console.log(
                          'send',
                          c.toString(16),
                          u.length.toString(16),
                          u,
                        ),
                        (e.next = 19),
                        t.send(224, n, r, c, u)
                      );
                    case 19:
                      return (
                        (s = e.sent),
                        e.abrupt('return', s.slice(0, s.length - 2))
                      );
                    case 21:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          )).apply(this, arguments);
        }
        function u() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return (e | ((1 << 31) >>> 0)) >>> 0;
        }
        function s(t, n) {
          var r;
          r = void 0 !== t ? (void 0 !== n ? 4 : 3) : 2;
          var a = e.alloc(1 + 4 * r),
            o = 0;
          return (
            (o = a.writeUInt8(r, o)),
            (o = a.writeUInt32BE(u(44), o)),
            (o = a.writeUInt32BE(u(501), o)),
            r > 2 &&
              ((o = a.writeUInt32BE(u(t), o)),
              4 === r && (o = a.writeUInt32BE(u(n), o))),
            a
          );
        }
        function d(e, t) {
          return m.apply(this, arguments);
        }
        function m() {
          return (m = Object(o.a)(
            a.a.mark(function e(t, n) {
              var r,
                o,
                c = arguments;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = c.length > 2 && void 0 !== c[2] ? c[2] : s()),
                        (o = n.serializeMessage()),
                        e.abrupt('return', p(t, o, r))
                      );
                    case 3:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          )).apply(this, arguments);
        }
        function p(e, t) {
          return f.apply(this, arguments);
        }
        function f() {
          return (f = Object(o.a)(
            a.a.mark(function t(n, r) {
              var o,
                c,
                l,
                u = arguments;
              return a.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (o = u.length > 2 && void 0 !== u[2] ? u[2] : s()),
                        (c = e.alloc(1)).writeUInt8(1, 0),
                        (l = e.concat([c, o, r])),
                        t.abrupt('return', i(n, 6, 1, l))
                      );
                    case 5:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            }),
          )).apply(this, arguments);
        }
        function b(e) {
          return v.apply(this, arguments);
        }
        function v() {
          return (v = Object(o.a)(
            a.a.mark(function e(t) {
              var n,
                r,
                o = arguments;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = o.length > 1 && void 0 !== o[1] ? o[1] : s()),
                        (e.next = 3),
                        i(t, 5, 0, n)
                      );
                    case 3:
                      return (
                        (r = e.sent), e.abrupt('return', new c.PublicKey(r))
                      );
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          )).apply(this, arguments);
        }
      }.call(this, n(45).Buffer));
    },
    365: function (e, t, n) {
      e.exports = n.p + 'static/media/logo.7402247c.gif';
    },
    377: function (e, t, n) {
      e.exports = n(614);
    },
    382: function (e, t, n) {},
    383: function (e, t, n) {},
    386: function (e, t) {},
    387: function (e, t) {},
    418: function (e, t) {},
    420: function (e, t) {},
    432: function (e, t) {},
    433: function (e, t) {},
    504: function (e, t) {},
    600: function (e, t) {},
    614: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(0),
        a = n.n(r),
        o = n(49),
        c = n.n(o),
        i = (n(382), n(383), n(7)),
        l = n.n(i),
        u = n(15),
        s = n(9),
        d = n(56),
        m = n(16),
        p = n(37),
        f = n.n(p);
      function b(e) {
        if (!e) return !1;
        try {
          return new m.PublicKey(e), !0;
        } catch (t) {
          return !1;
        }
      }
      function v(e) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = Object(u.a)(
          l.a.mark(function e(t) {
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      new Promise(function (e) {
                        return setTimeout(e, t);
                      }),
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      var g = new Intl.NumberFormat(void 0, {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      function k(e, t) {
        return t
          ? Math.floor(e * Math.pow(10, t)) / Math.pow(10, t)
          : Math.floor(e);
      }
      function y(e, t) {
        return t ? Math.round(e * Math.pow(10, t)) / Math.pow(10, t) : e;
      }
      function E(e) {
        return !isNaN(e) && Math.floor(e) !== e && e.toString().includes('.')
          ? e.toString().split('.')[1].length || 0
          : !isNaN(e) && Math.floor(e) !== e && e.toString().includes('e')
          ? parseInt(e.toString().split('e-')[1] || '0')
          : 0;
      }
      function O(e, t) {
        var n = e.div(t).toNumber(),
          r = e.umod(t),
          a = r.gcd(t);
        return n + r.div(a).toNumber() / t.div(a).toNumber();
      }
      function w(e) {
        return new f.a(10).pow(new f.a(e));
      }
      var x = {};
      function j(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          n = localStorage.getItem(e) || t,
          a = Object(r.useState)(e + '\n' + n),
          o = Object(s.a)(a, 2),
          c = o[1];
        Object(r.useEffect)(
          function () {
            return (
              x[e] || (x[e] = []),
              x[e].push(c),
              function () {
                (x[e] = x[e].filter(function (e) {
                  return e !== c;
                })),
                  0 === x[e].length && delete x[e];
              }
            );
          },
          [e],
        );
        var i = Object(r.useCallback)(
          function (t) {
            n !== t &&
              (null === t
                ? localStorage.removeItem(e)
                : localStorage.setItem(e, t),
              x[e].forEach(function (n) {
                return n(e + '\n' + t);
              }));
          },
          [n, e],
        );
        return [n, i];
      }
      function S(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          n = j(e, JSON.stringify(t)),
          a = Object(s.a)(n, 2),
          o = a[0],
          c = a[1];
        return [
          Object(r.useMemo)(
            function () {
              return o && JSON.parse(o);
            },
            [o],
          ),
          function (e) {
            return c(JSON.stringify(e));
          },
        ];
      }
      function T(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
          n = e.toBase58();
        return n.slice(0, t) + '\u2026' + n.slice(-t);
      }
      function A(e, t, n) {
        if (!n && Object.keys(e).length !== Object.keys(t).length) return !1;
        n = n || Object.keys(e);
        var r,
          a = Object(d.a)(n);
        try {
          for (a.s(); !(r = a.n()).done; ) {
            var o = r.value;
            if (e[o] !== t[o]) return !1;
          }
        } catch (c) {
          a.e(c);
        } finally {
          a.f();
        }
        return !0;
      }
      var M = n(46),
        I = n(54),
        C = n(50),
        P = n(8),
        B = n.n(P),
        K = new Date(),
        F = new Map(),
        N = function e(t, n, r, a, o, c) {
          Object(C.a)(this, e),
            (this.cacheKey = void 0),
            (this.fn = void 0),
            (this.refreshInterval = void 0),
            (this.refreshIntervalOnError = void 0),
            (this.callback = void 0),
            (this.cacheNullValues = !0),
            (this.cacheKey = t),
            (this.fn = n),
            (this.refreshInterval = r),
            (this.refreshIntervalOnError = a),
            (this.callback = o),
            (this.cacheNullValues = c);
        },
        z = (function () {
          function e(t, n, r) {
            var a = this;
            Object(C.a)(this, e),
              (this.cacheKey = void 0),
              (this.fn = void 0),
              (this.timeoutId = void 0),
              (this.listeners = void 0),
              (this.errors = void 0),
              (this.cacheNullValues = !0),
              (this.refresh = Object(u.a)(
                l.a.mark(function e() {
                  var t, n, r, o;
                  return l.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (a.timeoutId &&
                                (clearTimeout(a.timeoutId),
                                (a.timeoutId = null)),
                              !a.stopped)
                            ) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt('return');
                          case 3:
                            return (t = !1), (e.prev = 4), (e.next = 7), a.fn();
                          case 7:
                            if (
                              ((n = e.sent), a.cacheNullValues || null !== n)
                            ) {
                              e.next = 14;
                              break;
                            }
                            return (
                              console.log(
                                'Not caching null value for '.concat(
                                  a.cacheKey,
                                ),
                              ),
                              (a.errors = 0),
                              e.abrupt('return', n)
                            );
                          case 14:
                            return (
                              F.set(a.cacheKey, n),
                              (a.errors = 0),
                              a.notifyListeners(),
                              e.abrupt('return', n)
                            );
                          case 18:
                            e.next = 25;
                            break;
                          case 20:
                            (e.prev = 20),
                              (e.t0 = e.catch(4)),
                              ++a.errors,
                              console.warn(e.t0),
                              (t = !0);
                          case 25:
                            return (
                              (e.prev = 25),
                              a.timeoutId ||
                                a.stopped ||
                                ((r = a.refreshInterval),
                                t &&
                                  a.refreshIntervalOnError &&
                                  a.refreshIntervalOnError > 0 &&
                                  (r = a.refreshIntervalOnError),
                                a.errors > 0 &&
                                  (r = Math.min(
                                    1e3 * Math.pow(2, a.errors - 1),
                                    6e4,
                                  )),
                                (o = +new Date() - +K) < 5e3 &&
                                  (r += 5e3 - o / 2),
                                'hidden' === document.visibilityState
                                  ? (r = 6e4)
                                  : document.hasFocus() || (r *= 1.5),
                                (r *= 0.8 + 0.4 * Math.random()),
                                (a.timeoutId = setTimeout(a.refresh, r))),
                              e.finish(25)
                            );
                          case 28:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 20, 25, 28]],
                  );
                }),
              )),
              (this.cacheKey = t),
              (this.fn = n),
              (this.timeoutId = null),
              (this.listeners = new Set()),
              (this.errors = 0),
              (this.cacheNullValues = r);
          }
          return (
            Object(I.a)(e, [
              {
                key: 'refreshInterval',
                get: function () {
                  return Math.min.apply(
                    Math,
                    Object(M.a)(
                      Object(M.a)(this.listeners).map(function (e) {
                        return e.refreshInterval;
                      }),
                    ),
                  );
                },
              },
              {
                key: 'refreshIntervalOnError',
                get: function () {
                  var e = Object(M.a)(this.listeners)
                    .map(function (e) {
                      return e.refreshIntervalOnError;
                    })
                    .filter(function (e) {
                      return null !== e;
                    });
                  return 0 === e.length
                    ? null
                    : Math.min.apply(Math, Object(M.a)(e));
                },
              },
              {
                key: 'stopped',
                get: function () {
                  return 0 === this.listeners.size;
                },
              },
              {
                key: 'addListener',
                value: function (e) {
                  var t = this.refreshInterval;
                  this.listeners.add(e),
                    this.refreshInterval < t && this.refresh();
                },
              },
              {
                key: 'removeListener',
                value: function (e) {
                  B()(this.listeners.delete(e)),
                    this.stopped &&
                      this.timeoutId &&
                      (clearTimeout(this.timeoutId), (this.timeoutId = null));
                },
              },
              {
                key: 'notifyListeners',
                value: function () {
                  this.listeners.forEach(function (e) {
                    return e.callback();
                  });
                },
              },
            ]),
            e
          );
        })(),
        _ = new ((function () {
          function e() {
            Object(C.a)(this, e), (this.loops = new Map());
          }
          return (
            Object(I.a)(e, [
              {
                key: 'addListener',
                value: function (e) {
                  this.loops.has(e.cacheKey) ||
                    this.loops.set(
                      e.cacheKey,
                      new z(e.cacheKey, e.fn, e.cacheNullValues),
                    ),
                    this.loops.get(e.cacheKey).addListener(e);
                },
              },
              {
                key: 'removeListener',
                value: function (e) {
                  var t = this.loops.get(e.cacheKey);
                  t.removeListener(e),
                    t.stopped &&
                      (this.loops.delete(e.cacheKey), F.delete(e.cacheKey));
                },
              },
              {
                key: 'refresh',
                value: function (e) {
                  this.loops.has(e) && this.loops.get(e).refresh();
                },
              },
              {
                key: 'refreshAll',
                value: function () {
                  return Promise.all(
                    Object(M.a)(this.loops.values()).map(function (e) {
                      return e.refresh();
                    }),
                  );
                },
              },
            ]),
            e
          );
        })())();
      function q(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a = n.refreshInterval,
          o = void 0 === a ? 6e4 : a,
          c = n.refreshIntervalOnError,
          i = void 0 === c ? null : c,
          l =
            !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          u = Object(r.useReducer)(function (e) {
            return e + 1;
          }, 0),
          d = Object(s.a)(u, 2),
          m = d[1];
        if (
          (Object(r.useEffect)(
            function () {
              if (!t) return function () {};
              var n = new N(t, e, o, i, m, l);
              return (
                _.addListener(n),
                function () {
                  return _.removeListener(n);
                }
              );
            },
            [t, o],
          ),
          !t)
        )
          return [null, !1];
        var p = F.has(t),
          f = p ? F.get(t) : void 0;
        return [f, p];
      }
      function R(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t && F.delete(e);
        var n = _.loops.get(e);
        n && (n.refresh(), t && n.notifyListeners());
      }
      function L() {
        var e,
          t = Object(d.a)(_.loops.values());
        try {
          for (t.s(); !(e = t.n()).done; ) {
            e.value.refresh();
          }
        } catch (n) {
          t.e(n);
        } finally {
          t.f();
        }
      }
      var D = n(57),
        W = [
          {
            name: 'mainnet-beta',
            endpoint: 'https://solana-api.projectserum.com',
            custom: !1,
          },
          { name: 'localnet', endpoint: 'http://127.0.0.1:8899', custom: !1 },
        ],
        U = new Map(),
        V = a.a.createContext(null);
      function H(e) {
        var t = e.children,
          n = S('connectionEndpts', W[0].endpoint),
          o = Object(s.a)(n, 2),
          c = o[0],
          i = o[1],
          l = S('customConnectionEndpoints', []),
          u = Object(s.a)(l, 2),
          d = u[0],
          p = u[1],
          f = W.concat(d),
          b = Object(r.useMemo)(
            function () {
              return new m.Connection(c, 'recent');
            },
            [c],
          ),
          v = Object(r.useMemo)(
            function () {
              return new m.Connection(c, 'recent');
            },
            [c],
          );
        return (
          Object(r.useEffect)(
            function () {
              var e = b.onAccountChange(
                new m.Account().publicKey,
                function () {},
              );
              return function () {
                b.removeAccountChangeListener(e);
              };
            },
            [b],
          ),
          Object(r.useEffect)(
            function () {
              var e = b.onSlotChange(function () {
                return null;
              });
              return function () {
                b.removeSlotChangeListener(e);
              };
            },
            [b],
          ),
          Object(r.useEffect)(
            function () {
              var e = v.onAccountChange(
                new m.Account().publicKey,
                function () {},
              );
              return function () {
                v.removeAccountChangeListener(e);
              };
            },
            [v],
          ),
          Object(r.useEffect)(
            function () {
              var e = v.onSlotChange(function () {
                return null;
              });
              return function () {
                v.removeSlotChangeListener(e);
              };
            },
            [v],
          ),
          a.a.createElement(
            V.Provider,
            {
              value: {
                endpoint: c,
                setEndpoint: i,
                connection: b,
                sendConnection: v,
                availableEndpoints: f,
                setCustomEndpoints: p,
              },
            },
            t,
          )
        );
      }
      function J() {
        var e = Object(r.useContext)(V);
        if (!e) throw new Error('Missing connection context');
        return e.connection;
      }
      function Q() {
        var e = Object(r.useContext)(V);
        if (!e) throw new Error('Missing connection context');
        return e.sendConnection;
      }
      function G() {
        var e = Object(r.useContext)(V);
        if (!e) throw new Error('Missing connection context');
        return {
          endpoint: e.endpoint,
          endpointInfo: e.availableEndpoints.find(function (t) {
            return t.endpoint === e.endpoint;
          }),
          setEndpoint: e.setEndpoint,
          availableEndpoints: e.availableEndpoints,
          setCustomEndpoints: e.setCustomEndpoints,
        };
      }
      function Y(e) {
        var t = J(),
          n = Object(D.a)(
            t,
            null === e || void 0 === e ? void 0 : e.toBase58(),
          ),
          a = q(
            Object(u.a)(
              l.a.mark(function n() {
                return l.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return n.abrupt(
                          'return',
                          e ? t.getAccountInfo(e) : null,
                        );
                      case 1:
                      case 'end':
                        return n.stop();
                    }
                }, n);
              }),
            ),
            n,
            { refreshInterval: 6e4 },
          ),
          o = Object(s.a)(a, 2),
          c = o[0],
          i = o[1];
        Object(r.useEffect)(
          function () {
            if (e) {
              if (U.has(n)) {
                ++U.get(n).count;
              } else {
                var r = null,
                  a = t.onAccountChange(e, function (e) {
                    (r && r.data.equals(e.data) && r.lamports === e.lamports) ||
                      ((r = e),
                      (function (e, t) {
                        var n =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : {},
                          r = n.initializeOnly,
                          a = void 0 !== r && r;
                        if (!a || !F.has(e)) {
                          F.set(e, t);
                          var o = _.loops.get(e);
                          o && o.notifyListeners();
                        }
                      })(n, e));
                  });
                U.set(n, { count: 1, subscriptionId: a });
              }
              return function () {
                var e = U.get(n);
                e.count - 1 <= 0
                  ? (t.removeAccountChangeListener(e.subscriptionId),
                    U.delete(n))
                  : --e.count;
              };
            }
          },
          [n],
        );
        var d = Object(r.useRef)(null);
        return (
          (c &&
            d.current &&
            d.current.data.equals(c.data) &&
            d.current.lamports === c.lamports) ||
            (d.current = c),
          [d.current, i]
        );
      }
      function X(e) {
        var t = Y(e),
          n = Object(s.a)(t, 1)[0];
        return n && n.data;
      }
      var Z = n(209),
        $ = n(373),
        ee = n(283),
        te = n(110);
      function ne(e) {
        var t = e.external,
          n = void 0 !== t && t,
          r = Object(ee.a)(e, ['external']),
          o = r.to,
          c = r.children,
          i = Object(ee.a)(r, ['to', 'children']);
        return n
          ? a.a.createElement(
              'a',
              Object.assign(
                { href: o, target: '_blank', rel: 'noopener noreferrer' },
                i,
              ),
              c,
            )
          : a.a.createElement(te.b, Object.assign({ to: o }, i), c);
      }
      function re(e) {
        var t = e.message,
          n = e.description,
          r = e.txid,
          o = e.type,
          c = void 0 === o ? 'info' : o,
          i = e.placement,
          l = void 0 === i ? 'bottomLeft' : i;
        r &&
          (n = a.a.createElement(
            ne,
            {
              external: !0,
              to: 'https://explorer.solana.com/tx/' + r,
              style: { color: '#0000ff' },
            },
            'View transaction ',
            r.slice(0, 8),
            '...',
            r.slice(r.length - 8),
          )),
          $.a[c]({
            message: a.a.createElement(
              'span',
              { style: { color: 'black' } },
              t,
            ),
            description: a.a.createElement(
              'span',
              { style: { color: 'black', opacity: 0.5 } },
              n,
            ),
            placement: l,
            style: { backgroundColor: 'white' },
          });
      }
      var ae = n(627),
        oe = n(80),
        ce = n(77),
        ie = n(76),
        le = n(89),
        ue = n.n(le),
        se = n(350),
        de = n(275),
        me = new m.PublicKey('11111111111111111111111111111111'),
        pe = (function (e) {
          Object(ce.a)(n, e);
          var t = Object(ie.a)(n);
          function n() {
            var e;
            return (
              Object(C.a)(this, n),
              ((e = t.call(this))._connecting = void 0),
              (e._publicKey = void 0),
              (e._transport = void 0),
              (e._connecting = !1),
              (e._publicKey = null),
              (e._transport = null),
              e
            );
          }
          return (
            Object(I.a)(n, [
              {
                key: 'publicKey',
                get: function () {
                  return this._publicKey || me;
                },
              },
              {
                key: 'connected',
                get: function () {
                  return null !== this._publicKey;
                },
              },
              {
                key: 'autoApprove',
                get: function () {
                  return !1;
                },
              },
              {
                key: 'signAllTransactions',
                value: (function () {
                  var e = Object(u.a)(
                    l.a.mark(function e(t) {
                      var n, r, a, o;
                      return l.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (n = []), (r = 0);
                              case 2:
                                if (!(r < t.length)) {
                                  e.next = 11;
                                  break;
                                }
                                return (
                                  (a = t[r]),
                                  (e.next = 6),
                                  this.signTransaction(a)
                                );
                              case 6:
                                (o = e.sent), n.push(o);
                              case 8:
                                r++, (e.next = 2);
                                break;
                              case 11:
                                return e.abrupt('return', n);
                              case 12:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'signTransaction',
                value: (function () {
                  var e = Object(u.a)(
                    l.a.mark(function e(t) {
                      var n;
                      return l.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this._transport && this._publicKey) {
                                  e.next = 2;
                                  break;
                                }
                                throw new Error('Not connected to Ledger');
                              case 2:
                                return (
                                  (e.next = 4), Object(de.b)(this._transport, t)
                                );
                              case 4:
                                return (
                                  (n = e.sent),
                                  t.addSignature(this._publicKey, n),
                                  e.abrupt('return', t)
                                );
                              case 7:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'connect',
                value: (function () {
                  var e = Object(u.a)(
                    l.a.mark(function e() {
                      return l.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this._connecting) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt('return');
                              case 2:
                                return (
                                  (this._connecting = !0),
                                  (e.prev = 3),
                                  (e.next = 6),
                                  se.a.create()
                                );
                              case 6:
                                return (
                                  (this._transport = e.sent),
                                  (e.next = 9),
                                  Object(de.a)(this._transport)
                                );
                              case 9:
                                (this._publicKey = e.sent),
                                  this.emit('connect', this._publicKey),
                                  (e.next = 18);
                                break;
                              case 13:
                                return (
                                  (e.prev = 13),
                                  (e.t0 = e.catch(3)),
                                  re({
                                    message: 'Ledger Error',
                                    description: e.t0.message,
                                  }),
                                  (e.next = 18),
                                  this.disconnect()
                                );
                              case 18:
                                return (
                                  (e.prev = 18),
                                  (this._connecting = !1),
                                  e.finish(18)
                                );
                              case 21:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[3, 13, 18, 21]],
                      );
                    }),
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'disconnect',
                value: (function () {
                  var e = Object(u.a)(
                    l.a.mark(function e() {
                      var t;
                      return l.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (((t = !1), !this._transport)) {
                                  e.next = 6;
                                  break;
                                }
                                return (e.next = 4), this._transport.close();
                              case 4:
                                (this._transport = null), (t = !0);
                              case 6:
                                (this._connecting = !1),
                                  (this._publicKey = null),
                                  t && this.emit('disconnect');
                              case 9:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            n
          );
        })(ue.a),
        fe = n(90),
        be = (function (e) {
          Object(ce.a)(n, e);
          var t = Object(ie.a)(n);
          function n() {
            var e;
            return (
              Object(C.a)(this, n),
              ((e = t.call(this))._publicKey = void 0),
              (e._onProcess = void 0),
              (e._connected = void 0),
              (e._onProcess = !1),
              (e._connected = !1),
              (e.connect = e.connect.bind(Object(fe.a)(e))),
              e
            );
          }
          return (
            Object(I.a)(n, [
              {
                key: 'connected',
                get: function () {
                  return this._connected;
                },
              },
              {
                key: 'autoApprove',
                get: function () {
                  return !1;
                },
              },
              {
                key: 'signAllTransactions',
                value: (function () {
                  var e = Object(u.a)(
                    l.a.mark(function e(t) {
                      var n, r, a, o, c;
                      return l.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!(n = window.solong).signAllTransactions) {
                                e.next = 5;
                                break;
                              }
                              return e.abrupt(
                                'return',
                                n.signAllTransactions(t),
                              );
                            case 5:
                              (r = []), (a = 0);
                            case 7:
                              if (!(a < t.length)) {
                                e.next = 16;
                                break;
                              }
                              return (
                                (o = t[a]), (e.next = 11), n.signTransaction(o)
                              );
                            case 11:
                              (c = e.sent), r.push(c);
                            case 13:
                              a++, (e.next = 7);
                              break;
                            case 16:
                              return e.abrupt('return', r);
                            case 17:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'publicKey',
                get: function () {
                  return this._publicKey || me;
                },
              },
              {
                key: 'signTransaction',
                value: (function () {
                  var e = Object(u.a)(
                    l.a.mark(function e(t) {
                      return l.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                'return',
                                window.solong.signTransaction(t),
                              );
                            case 1:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'connect',
                value: function () {
                  var e = this;
                  this._onProcess ||
                    (void 0 !== window.solong
                      ? ((this._onProcess = !0),
                        window.solong
                          .selectAccount()
                          .then(function (t) {
                            (e._publicKey = new m.PublicKey(t)),
                              (e._connected = !0),
                              e.emit('connect', e._publicKey);
                          })
                          .catch(function () {
                            e.disconnect();
                          })
                          .finally(function () {
                            e._onProcess = !1;
                          }))
                      : re({
                          message: 'Solong Error',
                          description:
                            'Please install solong wallet from Chrome ',
                        }));
                },
              },
              {
                key: 'disconnect',
                value: function () {
                  this._publicKey &&
                    ((this._publicKey = void 0),
                    (this._connected = !1),
                    this.emit('disconnect'));
                },
              },
            ]),
            n
          );
        })(ue.a),
        ve = (function (e) {
          Object(ce.a)(n, e);
          var t = Object(ie.a)(n);
          function n() {
            var e;
            return (
              Object(C.a)(this, n),
              ((e = t.call(this))._handleConnect = function () {
                for (
                  var t, n = arguments.length, r = new Array(n), a = 0;
                  a < n;
                  a++
                )
                  r[a] = arguments[a];
                (t = e).emit.apply(t, ['connect'].concat(r));
              }),
              (e._handleDisconnect = function () {
                for (
                  var t, n = arguments.length, r = new Array(n), a = 0;
                  a < n;
                  a++
                )
                  r[a] = arguments[a];
                (t = e).emit.apply(t, ['disconnect'].concat(r));
              }),
              (e.connect = e.connect.bind(Object(fe.a)(e))),
              e
            );
          }
          return (
            Object(I.a)(n, [
              {
                key: '_provider',
                get: function () {
                  var e, t;
                  if (
                    null === (e = window) ||
                    void 0 === e ||
                    null === (t = e.solana) ||
                    void 0 === t
                      ? void 0
                      : t.isPhantom
                  )
                    return window.solana;
                },
              },
              {
                key: 'connected',
                get: function () {
                  var e;
                  return (
                    (null === (e = this._provider) || void 0 === e
                      ? void 0
                      : e.isConnected) || !1
                  );
                },
              },
              {
                key: 'autoApprove',
                get: function () {
                  var e;
                  return (
                    (null === (e = this._provider) || void 0 === e
                      ? void 0
                      : e.autoApprove) || !1
                  );
                },
              },
              {
                key: 'signAllTransactions',
                value: (function () {
                  var e = Object(u.a)(
                    l.a.mark(function e(t) {
                      return l.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this._provider) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt('return', t);
                              case 2:
                                return e.abrupt(
                                  'return',
                                  this._provider.signAllTransactions(t),
                                );
                              case 3:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'publicKey',
                get: function () {
                  var e;
                  return (
                    (null === (e = this._provider) || void 0 === e
                      ? void 0
                      : e.publicKey) || me
                  );
                },
              },
              {
                key: 'signTransaction',
                value: (function () {
                  var e = Object(u.a)(
                    l.a.mark(function e(t) {
                      return l.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this._provider) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt('return', t);
                              case 2:
                                return e.abrupt(
                                  'return',
                                  this._provider.signTransaction(t),
                                );
                              case 3:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'connect',
                value: function () {
                  var e, t, n;
                  if (!this._provider)
                    return (
                      window.open('https://phantom.app/', '_blank'),
                      void re({
                        message: 'Connection Error',
                        description: 'Please install Phantom wallet',
                      })
                    );
                  this._provider.listeners('connect').length ||
                    null === (t = this._provider) ||
                    void 0 === t ||
                    t.on('connect', this._handleConnect);
                  this._provider.listeners('disconnect').length ||
                    null === (n = this._provider) ||
                    void 0 === n ||
                    n.on('disconnect', this._handleDisconnect);
                  return null === (e = this._provider) || void 0 === e
                    ? void 0
                    : e.connect();
                },
              },
              {
                key: 'disconnect',
                value: function () {
                  this._provider && this._provider.disconnect();
                },
              },
            ]),
            n
          );
        })(ue.a);
      var he = (function (e) {
          Object(ce.a)(n, e);
          var t = Object(ie.a)(n);
          function n() {
            var e;
            return (
              Object(C.a)(this, n),
              ((e = t.call(this))._publicKey = void 0),
              (e._onProcess = void 0),
              (e._connected = void 0),
              (e._onProcess = !1),
              (e._connected = !1),
              (e.connect = e.connect.bind(Object(fe.a)(e))),
              e
            );
          }
          return (
            Object(I.a)(n, [
              {
                key: 'connected',
                get: function () {
                  return this._connected;
                },
              },
              {
                key: 'autoApprove',
                get: function () {
                  return !1;
                },
              },
              {
                key: 'signAllTransactions',
                value: (function () {
                  var e = Object(u.a)(
                    l.a.mark(function e(t) {
                      return l.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this._provider) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt('return', t);
                              case 2:
                                return e.abrupt(
                                  'return',
                                  this._provider.signAllTransactions(t),
                                );
                              case 3:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: '_provider',
                get: function () {
                  var e, t;
                  if (
                    null === (e = window) ||
                    void 0 === e ||
                    null === (t = e.solana) ||
                    void 0 === t
                      ? void 0
                      : t.isMathWallet
                  )
                    return window.solana;
                },
              },
              {
                key: 'publicKey',
                get: function () {
                  return this._publicKey || me;
                },
              },
              {
                key: 'signTransaction',
                value: (function () {
                  var e = Object(u.a)(
                    l.a.mark(function e(t) {
                      return l.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this._provider) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt('return', t);
                              case 2:
                                return e.abrupt(
                                  'return',
                                  this._provider.signTransaction(t),
                                );
                              case 3:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'connect',
                value: function () {
                  var e = this;
                  if (!this._onProcess) {
                    if (!this._provider)
                      return (
                        window.open('https://mathwallet.org/', '_blank'),
                        void re({
                          message: 'Math Wallet Error',
                          description: 'Please install mathwallet',
                        })
                      );
                    (this._onProcess = !0),
                      this._provider
                        .getAccount()
                        .then(function (t) {
                          (e._publicKey = new m.PublicKey(t)),
                            (e._connected = !0),
                            e.emit('connect', e._publicKey);
                        })
                        .catch(function () {
                          e.disconnect();
                        })
                        .finally(function () {
                          e._onProcess = !1;
                        });
                  }
                },
              },
              {
                key: 'disconnect',
                value: function () {
                  this._publicKey &&
                    ((this._publicKey = void 0),
                    (this._connected = !1),
                    this.emit('disconnect'));
                },
              },
            ]),
            n
          );
        })(ue.a),
        ge =
          'https://cdn.jsdelivr.net/gh/solana-labs/oyster@main/assets/wallets',
        ke = [
          {
            name: 'sollet.io',
            url: 'https://www.sollet.io',
            icon: ''.concat(ge, '/sollet.svg'),
          },
          {
            name: 'Sollet Extension',
            url: 'https://www.sollet.io/extension',
            icon: ''.concat(ge, '/sollet.svg'),
            adapter: function (e, t) {
              var n = window.sollet;
              return n
                ? new Z.a(n, t)
                : {
                    on: function () {},
                    connect: function () {
                      re({
                        message: 'Sollet Extension Error',
                        description:
                          'Please install the Sollet Extension for Chrome',
                      });
                    },
                  };
            },
          },
          {
            name: 'Ledger',
            url: 'https://www.ledger.com',
            icon: ''.concat(ge, '/ledger.svg'),
            adapter: pe,
          },
          {
            name: 'Solong',
            url: 'https://www.solong.com',
            icon: ''.concat(ge, '/solong.png'),
            adapter: be,
          },
          {
            name: 'Phantom',
            url: 'https://www.phantom.app',
            icon: 'https://www.phantom.app/img/logo.png',
            adapter: ve,
          },
          {
            name: 'MathWallet',
            url: 'https://www.mathwallet.org',
            icon: ''.concat(ge, '/mathwallet.svg'),
            adapter: he,
          },
        ],
        ye = a.a.createContext(null);
      function Ee(e) {
        var t,
          n,
          o = e.children,
          c = G().endpoint,
          i = Object(r.useState)(!1),
          l = Object(s.a)(i, 2),
          u = l[0],
          d = l[1],
          m = S('walletProvider'),
          p = Object(s.a)(m, 2),
          f = p[0],
          b = p[1],
          v = Object(r.useMemo)(
            function () {
              return ke.find(function (e) {
                return e.url === f;
              });
            },
            [f],
          ),
          h = Object(r.useState)(void 0),
          g = Object(s.a)(h, 2),
          k = g[0],
          y = g[1];
        Object(r.useEffect)(
          function () {
            if (v) {
              var e = function () {
                (k = new (v.adapter || Z.a)(f, c)), y(k);
              };
              if ('complete' !== document.readyState) {
                var t = function t() {
                  e(), window.removeEventListener('load', t);
                };
                return (
                  window.addEventListener('load', t),
                  function () {
                    return window.removeEventListener('load', t);
                  }
                );
              }
              e();
            }
          },
          [v, f, c],
        );
        var E = Object(r.useState)(!1),
          O = Object(s.a)(E, 2),
          w = O[0],
          x = O[1];
        Object(r.useEffect)(
          function () {
            return (
              k &&
                (k.on('connect', function () {
                  var e;
                  if (null === (e = k) || void 0 === e ? void 0 : e.publicKey) {
                    console.log('connected'),
                      localStorage.removeItem('feeDiscountKey'),
                      x(!0);
                    var t = k.publicKey.toBase58();
                    re({
                      message: 'Wallet update',
                      description:
                        'Connected to wallet ' +
                        (t.length > 20
                          ? ''
                              .concat(t.substring(0, 7), '.....')
                              .concat(t.substring(t.length - 7, t.length))
                          : t),
                    });
                  }
                }),
                k.on('disconnect', function () {
                  x(!1),
                    re({
                      message: 'Wallet update',
                      description: 'Disconnected from wallet',
                    }),
                    localStorage.removeItem('feeDiscountKey');
                })),
              function () {
                x(!1), k && k.connected && (k.disconnect(), x(!1));
              }
            );
          },
          [k],
        ),
          Object(r.useEffect)(
            function () {
              return k && u && (k.connect(), d(!1)), function () {};
            },
            [k, u],
          );
        var j = Object(r.useState)(!1),
          T = Object(s.a)(j, 2),
          A = T[0],
          M = T[1],
          I = Object(r.useCallback)(function () {
            return M(!0);
          }, []),
          C = Object(r.useCallback)(function () {
            return M(!1);
          }, []);
        return a.a.createElement(
          ye.Provider,
          {
            value: {
              wallet: k,
              connected: w,
              select: I,
              providerUrl: f,
              setProviderUrl: b,
              providerName:
                null !==
                  (t =
                    null ===
                      (n = ke.find(function (e) {
                        return e.url === f;
                      })) || void 0 === n
                      ? void 0
                      : n.name) && void 0 !== t
                  ? t
                  : f,
            },
          },
          o,
          a.a.createElement(
            ae.a,
            {
              title: 'Select Wallet',
              okText: 'Connect',
              visible: A,
              okButtonProps: { style: { display: 'none' } },
              onCancel: C,
              width: 400,
            },
            ke.map(function (e) {
              return a.a.createElement(
                oe.a,
                {
                  size: 'large',
                  type: f === e.url ? 'primary' : 'ghost',
                  onClick: function () {
                    b(e.url), d(!0), C();
                  },
                  icon: a.a.createElement('img', {
                    alt: ''.concat(e.name),
                    width: 20,
                    height: 20,
                    src: e.icon,
                    style: { marginRight: 8 },
                  }),
                  style: {
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    marginBottom: 8,
                  },
                },
                e.name,
              );
            }),
          ),
        );
      }
      function Oe() {
        var e = Object(r.useContext)(ye);
        if (!e) throw new Error('Missing wallet context');
        var t = e.wallet;
        return {
          connected: e.connected,
          wallet: t,
          providerUrl: e.providerUrl,
          setProvider: e.setProviderUrl,
          providerName: e.providerName,
          select: e.select,
          connect: function () {
            t ? t.connect() : e.select();
          },
          disconnect: function () {
            null === t || void 0 === t || t.disconnect();
          },
        };
      }
      var we,
        xe = n(40),
        je = n(41),
        Se = Object(je.a)(
          we ||
            (we = Object(xe.a)([
              '\nhtml,body{\n  background: #;\n}\ninput[type=number]::-webkit-inner-spin-button {\n  opacity: 0;\n}\ninput[type=number]:hover::-webkit-inner-spin-button,\ninput[type=number]:focus::-webkit-inner-spin-button {\n  opacity: 0.25;\n}\n/* width */\n::-webkit-scrollbar {\n  width: 15px;\n}\n/* Track */\n::-webkit-scrollbar-track {\n  background: #2d313c;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #5b5f67;\n}\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #5b5f67;\n}\n.ant-slider-track, .ant-slider:hover .ant-slider-track {\n  background-color: #b13098;\n  opacity: 0.75;\n}\n.ant-slider-track,\n.ant-slider ant-slider-track:hover {\n  background-color: #b13098;\n  opacity: 0.75;\n}\n.ant-slider-dot-active,\n.ant-slider-handle,\n.ant-slider-handle-click-focused,\n.ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open)  {\n  border: 2px solid #b13098; \n}\n.ant-table-tbody > tr.ant-table-row:hover > td {\n  background: #273043;\n}\n.ant-table-tbody > tr > td {\n  border-bottom: 8px solid #1A2029;\n}\n.ant-table-container table > thead > tr:first-child th {\n  border-bottom: none;\n}\n.ant-divider-horizontal.ant-divider-with-text::before, .ant-divider-horizontal.ant-divider-with-text::after {\n  border-top: 1px solid #434a59 !important;\n}\n.ant-layout {\n    background: #000;\n  }\n  .ant-table {\n    background: #212734;\n  }\n  .ant-table-thead > tr > th {\n    background: #1A2029;\n  }\n.ant-select-item-option-content {\n  img {\n    margin-right: 4px;\n  }\n}\n.ant-modal-content {\n  background-color: #212734;\n}\n\n@-webkit-keyframes highlight {\n  from { background-color: #b13098;}\n  to {background-color: #1A2029;}\n}\n@-moz-keyframes highlight {\n  from { background-color: #b13098;}\n  to {background-color: #1A2029;}\n}\n@-keyframes highlight {\n  from { background-color: #b13098;}\n  to {background-color: #1A2029;}\n}\n.flash {\n  -moz-animation: highlight 0.5s ease 0s 1 alternate ;\n  -webkit-animation: highlight 0.5s ease 0s 1 alternate;\n  animation: highlight 0.5s ease 0s 1 alternate;\n}',
            ])),
        ),
        Te = n(361),
        Ae = n(625),
        Me = Ae.a.Title,
        Ie = (function (e) {
          Object(ce.a)(n, e);
          var t = Object(ie.a)(n);
          function n() {
            var e;
            Object(C.a)(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(a))).state = {
                hasError: !1,
              }),
              e
            );
          }
          return (
            Object(I.a)(
              n,
              [
                {
                  key: 'render',
                  value: function () {
                    return this.state.hasError
                      ? a.a.createElement(
                          'div',
                          null,
                          a.a.createElement(
                            'div',
                            null,
                            a.a.createElement(
                              Me,
                              { level: 2 },
                              'Something went wrong.',
                            ),
                            a.a.createElement(
                              Me,
                              { level: 4 },
                              'Please try again later.',
                            ),
                          ),
                        )
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromError',
                  value: function (e) {
                    return { hasError: !0 };
                  },
                },
              ],
            ),
            n
          );
        })(r.Component),
        Ce = n(53),
        Pe = n(118),
        Be = n(616),
        Ke = n(617),
        Fe = n(374),
        Ne = n(42),
        ze = n(22),
        _e = n(3),
        qe = n(36),
        Re = n.n(qe),
        Le = n(97),
        De = n(45),
        We = n(1);
      function Ue(e) {
        return Ve.apply(this, arguments);
      }
      function Ve() {
        return (Ve = Object(u.a)(
          l.a.mark(function e(t) {
            var n, r, a, o, c, i;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.connection),
                      (r = t.wallet),
                      (a = t.mintPublicKey),
                      (o = new m.Account()),
                      (c = new m.Transaction()),
                      (e.t0 = m.SystemProgram),
                      (e.t1 = r.publicKey),
                      (e.t2 = o.publicKey),
                      (e.next = 8),
                      n.getMinimumBalanceForRentExemption(165)
                    );
                  case 8:
                    return (
                      (e.t3 = e.sent),
                      (e.t4 = ze.TokenInstructions.TOKEN_PROGRAM_ID),
                      (e.t5 = {
                        fromPubkey: e.t1,
                        newAccountPubkey: e.t2,
                        lamports: e.t3,
                        space: 165,
                        programId: e.t4,
                      }),
                      (i = e.t0.createAccount.call(e.t0, e.t5)),
                      c.add(i),
                      c.add(
                        ze.TokenInstructions.initializeAccount({
                          account: o.publicKey,
                          mint: a,
                          owner: r.publicKey,
                        }),
                      ),
                      e.abrupt('return', {
                        transaction: c,
                        signer: o,
                        newAccountPubkey: o.publicKey,
                      })
                    );
                  case 15:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function He(e) {
        return Je.apply(this, arguments);
      }
      function Je() {
        return (Je = Object(u.a)(
          l.a.mark(function e(t) {
            var n,
              r,
              a,
              o,
              c,
              i,
              u,
              s,
              d,
              p,
              f,
              b,
              v,
              h,
              g,
              k,
              y,
              E,
              O,
              w,
              x,
              j;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = t.market),
                      (r = t.openOrders),
                      (a = t.connection),
                      (o = t.wallet),
                      (c = t.baseCurrencyAccount),
                      (i = t.quoteCurrencyAccount),
                      (u = t.sendNotification),
                      (s = void 0 === u || u),
                      n && o && a && r && (c || i))
                    ) {
                      e.next = 4;
                      break;
                    }
                    return (
                      s && re({ message: 'Not connected' }), e.abrupt('return')
                    );
                  case 4:
                    if (
                      ((f = null === c || void 0 === c ? void 0 : c.pubkey),
                      (b = null === i || void 0 === i ? void 0 : i.pubkey),
                      f)
                    ) {
                      e.next = 13;
                      break;
                    }
                    return (
                      (e.next = 9),
                      Ue({
                        connection: a,
                        wallet: o,
                        mintPublicKey: n.baseMintAddress,
                      })
                    );
                  case 9:
                    (v = e.sent),
                      (f =
                        null === v || void 0 === v
                          ? void 0
                          : v.newAccountPubkey),
                      (d = null === v || void 0 === v ? void 0 : v.transaction),
                      (p = null === v || void 0 === v ? void 0 : v.signer);
                  case 13:
                    if (b) {
                      e.next = 20;
                      break;
                    }
                    return (
                      (e.next = 16),
                      Ue({
                        connection: a,
                        wallet: o,
                        mintPublicKey: n.quoteMintAddress,
                      })
                    );
                  case 16:
                    (h = e.sent),
                      (b =
                        null === h || void 0 === h
                          ? void 0
                          : h.newAccountPubkey),
                      (d = null === h || void 0 === h ? void 0 : h.transaction),
                      (p = null === h || void 0 === h ? void 0 : h.signer);
                  case 20:
                    return (
                      (g = null),
                      n.supportsReferralFees &&
                        ((k = ze.TOKEN_MINTS.find(function (e) {
                          return 'USDT' === e.name;
                        })),
                        (y = ze.TOKEN_MINTS.find(function (e) {
                          return 'USDC' === e.name;
                        })),
                        ((k && n.quoteMintAddress.equals(k.address)) ||
                          (y && n.quoteMintAddress.equals(y.address))) &&
                          (g = new m.PublicKey(
                            'GTv7LXg2YzbFdnhFkQeartbPcLwzmxyjXQ9kM7Xs5JvT',
                          ))),
                      (e.next = 24),
                      n.makeSettleFundsTransaction(a, r, f, b, g)
                    );
                  case 24:
                    return (
                      (E = e.sent),
                      (O = E.transaction),
                      (w = E.signers),
                      (x = bt([d, O])),
                      (j = p ? [].concat(Object(M.a)(w), [p]) : w),
                      (e.next = 31),
                      ot({
                        transaction: x,
                        signers: j,
                        wallet: o,
                        connection: a,
                        sendingMessage: 'Settling funds...',
                        sendNotification: s,
                      })
                    );
                  case 31:
                    return e.abrupt('return', e.sent);
                  case 32:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function Qe(e) {
        return Ge.apply(this, arguments);
      }
      function Ge() {
        return (Ge = Object(u.a)(
          l.a.mark(function e(t) {
            var n, r, a, o, c, i, s, d, m, p, f, b, v;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = t.connection),
                      (r = t.wallet),
                      (a = t.tokenAccounts),
                      (o = t.markets),
                      (c = t.selectedTokenAccounts),
                      o && r && n && a)
                    ) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt('return');
                  case 3:
                    return (
                      (i = []),
                      o
                        .reduce(function (e, t) {
                          return e.push(t._programId), e;
                        }, [])
                        .forEach(function (e) {
                          i.find(function (t) {
                            return t.equals(e);
                          }) || i.push(e);
                        }),
                      (s = (function () {
                        var e = Object(u.a)(
                          l.a.mark(function e(t) {
                            var a;
                            return l.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2),
                                      ze.OpenOrders.findForOwner(
                                        n,
                                        r.publicKey,
                                        t,
                                      )
                                    );
                                  case 2:
                                    return (
                                      (a = e.sent),
                                      e.abrupt(
                                        'return',
                                        a.filter(function (e) {
                                          return (
                                            e.baseTokenFree.toNumber() ||
                                            e.quoteTokenFree.toNumber()
                                          );
                                        }),
                                      )
                                    );
                                  case 4:
                                  case 'end':
                                    return e.stop();
                                }
                            }, e);
                          }),
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })()),
                      (e.next = 8),
                      Promise.all(
                        i.map(function (e) {
                          return s(e);
                        }),
                      )
                    );
                  case 8:
                    return (
                      (d = e.sent),
                      (m = d.reduce(function (e, t) {
                        return e.concat(t);
                      }, [])),
                      (e.next = 12),
                      Promise.all(
                        m.map(function (e) {
                          var t,
                            r,
                            i = o.find(function (t) {
                              var n, r;
                              return null === (n = t._decoded) ||
                                void 0 === n ||
                                null === (r = n.ownAddress) ||
                                void 0 === r
                                ? void 0
                                : r.equals(e.market);
                            });
                          if (
                            e.baseTokenFree.isZero() &&
                            e.quoteTokenFree.isZero()
                          )
                            return null;
                          var l =
                              null === i || void 0 === i
                                ? void 0
                                : i.baseMintAddress,
                            u =
                              null === i || void 0 === i
                                ? void 0
                                : i.quoteMintAddress,
                            s =
                              null ===
                                (t = tn(a, l, l && c && c[l.toBase58()])) ||
                              void 0 === t
                                ? void 0
                                : t.pubkey,
                            d =
                              null ===
                                (r = tn(a, u, u && c && c[u.toBase58()])) ||
                              void 0 === r
                                ? void 0
                                : r.pubkey;
                          return s && d
                            ? i && i.makeSettleFundsTransaction(n, e, s, d)
                            : null;
                        }),
                      )
                    );
                  case 12:
                    if (
                      (p = e.sent.filter(function (e) {
                        return !!e;
                      })) &&
                      0 !== p.length
                    ) {
                      e.next = 15;
                      break;
                    }
                    return e.abrupt('return');
                  case 15:
                    return (
                      (f = p.slice(0, 4).map(function (e) {
                        return e.transaction;
                      })),
                      (b = []),
                      p
                        .reduce(function (e, t) {
                          return e.concat(t.signers);
                        }, [])
                        .forEach(function (e) {
                          b.find(function (t) {
                            return t.publicKey.equals(e.publicKey);
                          }) || b.push(e);
                        }),
                      (v = bt(f)),
                      (e.next = 21),
                      ot({
                        transaction: v,
                        signers: b,
                        wallet: r,
                        connection: n,
                      })
                    );
                  case 21:
                    return e.abrupt('return', e.sent);
                  case 22:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function Ye(e) {
        return Xe.apply(this, arguments);
      }
      function Xe() {
        return (Xe = Object(u.a)(
          l.a.mark(function e(t) {
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Ze(
                        Object(Ne.a)(
                          Object(Ne.a)({}, t),
                          {},
                          { orders: [t.order] },
                        ),
                      ),
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function Ze(e) {
        return $e.apply(this, arguments);
      }
      function $e() {
        return ($e = Object(u.a)(
          l.a.mark(function e(t) {
            var n, r, a, o, c;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.market),
                      (r = t.wallet),
                      (a = t.connection),
                      (o = t.orders),
                      (c = n.makeMatchOrdersTransaction(5)),
                      o.forEach(function (e) {
                        c.add(n.makeCancelOrderInstruction(a, r.publicKey, e));
                      }),
                      c.add(n.makeMatchOrdersTransaction(5)),
                      (e.next = 6),
                      ot({
                        transaction: c,
                        wallet: r,
                        connection: a,
                        sendingMessage: 'Sending cancel...',
                      })
                    );
                  case 6:
                    return e.abrupt('return', e.sent);
                  case 7:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function et(e) {
        return tt.apply(this, arguments);
      }
      function tt() {
        return (tt = Object(u.a)(
          l.a.mark(function e(t) {
            var n,
              r,
              a,
              o,
              c,
              i,
              u,
              s,
              d,
              p,
              f,
              b,
              v,
              h,
              g,
              k,
              y,
              O,
              w,
              x,
              j,
              S,
              T,
              A,
              I,
              C,
              P,
              B,
              K,
              F,
              N,
              z,
              _,
              q,
              R;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((a = t.side),
                      (o = t.price),
                      (c = t.size),
                      (i = t.orderType),
                      (u = t.market),
                      (s = t.connection),
                      (d = t.wallet),
                      (p = t.baseCurrencyAccount),
                      (f = t.quoteCurrencyAccount),
                      (b = t.feeDiscountPubkey),
                      (v = void 0 === b ? void 0 : b),
                      (h =
                        (null === u ||
                        void 0 === u ||
                        null === (n = u.minOrderSize) ||
                        void 0 === n
                          ? void 0
                          : n.toFixed(E(u.minOrderSize))) ||
                        (null === u || void 0 === u ? void 0 : u.minOrderSize)),
                      (g =
                        (null === u ||
                        void 0 === u ||
                        null === (r = u.tickSize) ||
                        void 0 === r
                          ? void 0
                          : r.toFixed(E(u.tickSize))) ||
                        (null === u || void 0 === u ? void 0 : u.tickSize)),
                      (k = function (e, t) {
                        return (
                          Math.abs((e / t) % 1) < 1e-5 ||
                          Math.abs(((e / t) % 1) - 1) < 1e-5
                        );
                      }),
                      !isNaN(o))
                    ) {
                      e.next = 7;
                      break;
                    }
                    return (
                      re({ message: 'Invalid price', type: 'error' }),
                      e.abrupt('return')
                    );
                  case 7:
                    if (!isNaN(c)) {
                      e.next = 10;
                      break;
                    }
                    return (
                      re({ message: 'Invalid size', type: 'error' }),
                      e.abrupt('return')
                    );
                  case 10:
                    if (d && d.publicKey) {
                      e.next = 13;
                      break;
                    }
                    return (
                      re({ message: 'Connect wallet', type: 'error' }),
                      e.abrupt('return')
                    );
                  case 13:
                    if (u) {
                      e.next = 16;
                      break;
                    }
                    return (
                      re({ message: 'Invalid  market', type: 'error' }),
                      e.abrupt('return')
                    );
                  case 16:
                    if (k(c, u.minOrderSize)) {
                      e.next = 19;
                      break;
                    }
                    return (
                      re({
                        message: 'Size must be an increment of '.concat(h),
                        type: 'error',
                      }),
                      e.abrupt('return')
                    );
                  case 19:
                    if (!(c < u.minOrderSize)) {
                      e.next = 22;
                      break;
                    }
                    return (
                      re({ message: 'Size too small', type: 'error' }),
                      e.abrupt('return')
                    );
                  case 22:
                    if (k(o, u.tickSize)) {
                      e.next = 25;
                      break;
                    }
                    return (
                      re({
                        message: 'Price must be an increment of '.concat(g),
                        type: 'error',
                      }),
                      e.abrupt('return')
                    );
                  case 25:
                    if (!(o < u.tickSize)) {
                      e.next = 28;
                      break;
                    }
                    return (
                      re({ message: 'Price under tick size', type: 'error' }),
                      e.abrupt('return')
                    );
                  case 28:
                    if (
                      ((y = d.publicKey),
                      (O = new m.Transaction()),
                      (w = []),
                      p)
                    ) {
                      e.next = 41;
                      break;
                    }
                    return (
                      (e.next = 34),
                      Ue({
                        connection: s,
                        wallet: d,
                        mintPublicKey: u.baseMintAddress,
                      })
                    );
                  case 34:
                    (x = e.sent),
                      (j = x.transaction),
                      (S = x.signer),
                      (T = x.newAccountPubkey),
                      O.add(j),
                      w.push(S),
                      (p = T);
                  case 41:
                    if (f) {
                      e.next = 51;
                      break;
                    }
                    return (
                      (e.next = 44),
                      Ue({
                        connection: s,
                        wallet: d,
                        mintPublicKey: u.quoteMintAddress,
                      })
                    );
                  case 44:
                    (A = e.sent),
                      (I = A.transaction),
                      (C = A.signer),
                      (P = A.newAccountPubkey),
                      O.add(I),
                      w.push(C),
                      (f = P);
                  case 51:
                    if ((B = 'sell' === a ? p : f)) {
                      e.next = 55;
                      break;
                    }
                    return (
                      re({
                        message: 'Need an SPL token account for cost currency',
                        type: 'error',
                      }),
                      e.abrupt('return')
                    );
                  case 55:
                    return (
                      (K = {
                        owner: y,
                        payer: B,
                        side: a,
                        price: o,
                        size: c,
                        orderType: i,
                        feeDiscountPubkey: v || null,
                      }),
                      console.log(K),
                      (F = u.makeMatchOrdersTransaction(5)),
                      O.add(F),
                      (N = at()),
                      (e.next = 62),
                      u.makePlaceOrderTransaction(s, K, 12e4, 12e4)
                    );
                  case 62:
                    return (
                      (z = e.sent),
                      (_ = z.transaction),
                      (q = z.signers),
                      (R = at()),
                      console.log(
                        'Creating order transaction took '.concat(R - N),
                      ),
                      O.add(_),
                      O.add(u.makeMatchOrdersTransaction(5)),
                      w.push.apply(w, Object(M.a)(q)),
                      (e.next = 72),
                      ot({
                        transaction: O,
                        wallet: d,
                        connection: s,
                        signers: w,
                        sendingMessage: 'Sending order...',
                      })
                    );
                  case 72:
                    return e.abrupt('return', e.sent);
                  case 73:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function nt(e) {
        return rt.apply(this, arguments);
      }
      function rt() {
        return (rt = Object(u.a)(
          l.a.mark(function e(t) {
            var n,
              r,
              a,
              o,
              c,
              i,
              p,
              b,
              v,
              h,
              g,
              k,
              y,
              E,
              O,
              w,
              x,
              j,
              S,
              T,
              A,
              M,
              I,
              C,
              P,
              B,
              K,
              F;
            return l.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (j = function () {
                          return (j = Object(u.a)(
                            l.a.mark(function e() {
                              var t, n;
                              return l.a.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        t = new f.a(0);
                                      case 1:
                                        return (
                                          (e.prev = 2),
                                          (e.next = 5),
                                          m.PublicKey.createProgramAddress(
                                            [
                                              b.publicKey.toBuffer(),
                                              t.toArrayLike(De.Buffer, 'le', 8),
                                            ],
                                            p,
                                          )
                                        );
                                      case 5:
                                        return (
                                          (n = e.sent),
                                          e.abrupt('return', [n, t])
                                        );
                                      case 9:
                                        (e.prev = 9),
                                          (e.t0 = e.catch(2)),
                                          t.iaddn(1);
                                      case 12:
                                        e.next = 1;
                                        break;
                                      case 14:
                                      case 'end':
                                        return e.stop();
                                    }
                                },
                                e,
                                null,
                                [[2, 9]],
                              );
                            }),
                          )).apply(this, arguments);
                        }),
                        (x = function () {
                          return j.apply(this, arguments);
                        }),
                        (n = t.connection),
                        (r = t.wallet),
                        (a = t.baseMint),
                        (o = t.quoteMint),
                        (c = t.baseLotSize),
                        (i = t.quoteLotSize),
                        (p = t.dexProgramId),
                        (b = new m.Account()),
                        (v = new m.Account()),
                        (h = new m.Account()),
                        (g = new m.Account()),
                        (k = new m.Account()),
                        (y = new m.Account()),
                        (E = new m.Account()),
                        (O = 0),
                        (w = new f.a(100)),
                        (e.next = 14),
                        x()
                      );
                    case 14:
                      return (
                        (S = e.sent),
                        (T = Object(s.a)(S, 2)),
                        (A = T[0]),
                        (M = T[1]),
                        (I = new m.Transaction()),
                        (e.t0 = I),
                        (e.t1 = m.SystemProgram),
                        (e.t2 = r.publicKey),
                        (e.t3 = y.publicKey),
                        (e.next = 25),
                        n.getMinimumBalanceForRentExemption(165)
                      );
                    case 25:
                      return (
                        (e.t4 = e.sent),
                        (e.t5 = ze.TokenInstructions.TOKEN_PROGRAM_ID),
                        (e.t6 = {
                          fromPubkey: e.t2,
                          newAccountPubkey: e.t3,
                          lamports: e.t4,
                          space: 165,
                          programId: e.t5,
                        }),
                        (e.t7 = e.t1.createAccount.call(e.t1, e.t6)),
                        (e.t8 = m.SystemProgram),
                        (e.t9 = r.publicKey),
                        (e.t10 = E.publicKey),
                        (e.next = 34),
                        n.getMinimumBalanceForRentExemption(165)
                      );
                    case 34:
                      return (
                        (e.t11 = e.sent),
                        (e.t12 = ze.TokenInstructions.TOKEN_PROGRAM_ID),
                        (e.t13 = {
                          fromPubkey: e.t9,
                          newAccountPubkey: e.t10,
                          lamports: e.t11,
                          space: 165,
                          programId: e.t12,
                        }),
                        (e.t14 = e.t8.createAccount.call(e.t8, e.t13)),
                        (e.t15 = ze.TokenInstructions.initializeAccount({
                          account: y.publicKey,
                          mint: a,
                          owner: A,
                        })),
                        (e.t16 = ze.TokenInstructions.initializeAccount({
                          account: E.publicKey,
                          mint: o,
                          owner: A,
                        })),
                        e.t0.add.call(e.t0, e.t7, e.t14, e.t15, e.t16),
                        (C = new m.Transaction()),
                        (e.t17 = C),
                        (e.t18 = m.SystemProgram),
                        (e.t19 = r.publicKey),
                        (e.t20 = b.publicKey),
                        (e.next = 48),
                        n.getMinimumBalanceForRentExemption(
                          ze.Market.getLayout(p).span,
                        )
                      );
                    case 48:
                      return (
                        (e.t21 = e.sent),
                        (e.t22 = ze.Market.getLayout(p).span),
                        (e.t23 = p),
                        (e.t24 = {
                          fromPubkey: e.t19,
                          newAccountPubkey: e.t20,
                          lamports: e.t21,
                          space: e.t22,
                          programId: e.t23,
                        }),
                        (e.t25 = e.t18.createAccount.call(e.t18, e.t24)),
                        (e.t26 = m.SystemProgram),
                        (e.t27 = r.publicKey),
                        (e.t28 = v.publicKey),
                        (e.next = 58),
                        n.getMinimumBalanceForRentExemption(5132)
                      );
                    case 58:
                      return (
                        (e.t29 = e.sent),
                        (e.t30 = 5132),
                        (e.t31 = p),
                        (e.t32 = {
                          fromPubkey: e.t27,
                          newAccountPubkey: e.t28,
                          lamports: e.t29,
                          space: e.t30,
                          programId: e.t31,
                        }),
                        (e.t33 = e.t26.createAccount.call(e.t26, e.t32)),
                        (e.t34 = m.SystemProgram),
                        (e.t35 = r.publicKey),
                        (e.t36 = h.publicKey),
                        (e.next = 68),
                        n.getMinimumBalanceForRentExemption(262156)
                      );
                    case 68:
                      return (
                        (e.t37 = e.sent),
                        (e.t38 = 262156),
                        (e.t39 = p),
                        (e.t40 = {
                          fromPubkey: e.t35,
                          newAccountPubkey: e.t36,
                          lamports: e.t37,
                          space: e.t38,
                          programId: e.t39,
                        }),
                        (e.t41 = e.t34.createAccount.call(e.t34, e.t40)),
                        (e.t42 = m.SystemProgram),
                        (e.t43 = r.publicKey),
                        (e.t44 = g.publicKey),
                        (e.next = 78),
                        n.getMinimumBalanceForRentExemption(65548)
                      );
                    case 78:
                      return (
                        (e.t45 = e.sent),
                        (e.t46 = 65548),
                        (e.t47 = p),
                        (e.t48 = {
                          fromPubkey: e.t43,
                          newAccountPubkey: e.t44,
                          lamports: e.t45,
                          space: e.t46,
                          programId: e.t47,
                        }),
                        (e.t49 = e.t42.createAccount.call(e.t42, e.t48)),
                        (e.t50 = m.SystemProgram),
                        (e.t51 = r.publicKey),
                        (e.t52 = k.publicKey),
                        (e.next = 88),
                        n.getMinimumBalanceForRentExemption(65548)
                      );
                    case 88:
                      return (
                        (e.t53 = e.sent),
                        (e.t54 = 65548),
                        (e.t55 = p),
                        (e.t56 = {
                          fromPubkey: e.t51,
                          newAccountPubkey: e.t52,
                          lamports: e.t53,
                          space: e.t54,
                          programId: e.t55,
                        }),
                        (e.t57 = e.t50.createAccount.call(e.t50, e.t56)),
                        (e.t58 = ze.DexInstructions.initializeMarket({
                          market: b.publicKey,
                          requestQueue: v.publicKey,
                          eventQueue: h.publicKey,
                          bids: g.publicKey,
                          asks: k.publicKey,
                          baseVault: y.publicKey,
                          quoteVault: E.publicKey,
                          baseMint: a,
                          quoteMint: o,
                          baseLotSize: new f.a(c),
                          quoteLotSize: new f.a(i),
                          feeRateBps: O,
                          vaultSignerNonce: M,
                          quoteDustThreshold: w,
                          programId: p,
                        })),
                        e.t17.add.call(
                          e.t17,
                          e.t25,
                          e.t33,
                          e.t41,
                          e.t49,
                          e.t57,
                          e.t58,
                        ),
                        (e.next = 97),
                        ut({
                          transactionsAndSigners: [
                            { transaction: I, signers: [y, E] },
                            { transaction: C, signers: [b, v, h, g, k] },
                          ],
                          wallet: r,
                          connection: n,
                        })
                      );
                    case 97:
                      (P = e.sent), (B = Object(d.a)(P)), (e.prev = 99), B.s();
                    case 101:
                      if ((K = B.n()).done) {
                        e.next = 107;
                        break;
                      }
                      return (
                        (F = K.value),
                        (e.next = 105),
                        dt({ signedTransaction: F, connection: n })
                      );
                    case 105:
                      e.next = 101;
                      break;
                    case 107:
                      e.next = 112;
                      break;
                    case 109:
                      (e.prev = 109), (e.t59 = e.catch(99)), B.e(e.t59);
                    case 112:
                      return (e.prev = 112), B.f(), e.finish(112);
                    case 115:
                      return e.abrupt('return', b.publicKey);
                    case 116:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[99, 109, 112, 115]],
            );
          }),
        )).apply(this, arguments);
      }
      var at = function () {
        return new Date().getTime() / 1e3;
      };
      function ot(e) {
        return ct.apply(this, arguments);
      }
      function ct() {
        return (ct = Object(u.a)(
          l.a.mark(function e(t) {
            var n, r, a, o, c, i, u, s, d, m, p, f, b, v, h, g;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.transaction),
                      (r = t.wallet),
                      (a = t.signers),
                      (o = void 0 === a ? [] : a),
                      (c = t.connection),
                      (i = t.sendingMessage),
                      (u = void 0 === i ? 'Sending transaction...' : i),
                      (s = t.sentMessage),
                      (d = void 0 === s ? 'Transaction sent' : s),
                      (m = t.successMessage),
                      (p = void 0 === m ? 'Transaction confirmed' : m),
                      (f = t.timeout),
                      (b = void 0 === f ? 15e3 : f),
                      (v = t.sendNotification),
                      (h = void 0 === v || v),
                      (e.next = 3),
                      it({
                        transaction: n,
                        wallet: r,
                        signers: o,
                        connection: c,
                      })
                    );
                  case 3:
                    return (
                      (g = e.sent),
                      (e.next = 6),
                      dt({
                        signedTransaction: g,
                        connection: c,
                        sendingMessage: u,
                        sentMessage: d,
                        successMessage: p,
                        timeout: b,
                        sendNotification: h,
                      })
                    );
                  case 6:
                    return e.abrupt('return', e.sent);
                  case 7:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function it(e) {
        return lt.apply(this, arguments);
      }
      function lt() {
        return (lt = Object(u.a)(
          l.a.mark(function e(t) {
            var n, r, a, o, c;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.transaction),
                      (r = t.wallet),
                      (a = t.signers),
                      (o = void 0 === a ? [] : a),
                      (c = t.connection),
                      (e.next = 3),
                      c.getRecentBlockhash('max')
                    );
                  case 3:
                    return (
                      (n.recentBlockhash = e.sent.blockhash),
                      n.setSigners.apply(
                        n,
                        [r.publicKey].concat(
                          Object(M.a)(
                            o.map(function (e) {
                              return e.publicKey;
                            }),
                          ),
                        ),
                      ),
                      o.length > 0 && n.partialSign.apply(n, Object(M.a)(o)),
                      (e.next = 8),
                      r.signTransaction(n)
                    );
                  case 8:
                    return e.abrupt('return', e.sent);
                  case 9:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function ut(e) {
        return st.apply(this, arguments);
      }
      function st() {
        return (st = Object(u.a)(
          l.a.mark(function e(t) {
            var n, r, a, o;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.transactionsAndSigners),
                      (r = t.wallet),
                      (a = t.connection),
                      (e.next = 3),
                      a.getRecentBlockhash('max')
                    );
                  case 3:
                    return (
                      (o = e.sent.blockhash),
                      n.forEach(function (e) {
                        var t = e.transaction,
                          n = e.signers,
                          a = void 0 === n ? [] : n;
                        (t.recentBlockhash = o),
                          t.setSigners.apply(
                            t,
                            [r.publicKey].concat(
                              Object(M.a)(
                                a.map(function (e) {
                                  return e.publicKey;
                                }),
                              ),
                            ),
                          ),
                          (null === a || void 0 === a ? void 0 : a.length) >
                            0 && t.partialSign.apply(t, Object(M.a)(a));
                      }),
                      (e.next = 7),
                      r.signAllTransactions(
                        n.map(function (e) {
                          return e.transaction;
                        }),
                      )
                    );
                  case 7:
                    return e.abrupt('return', e.sent);
                  case 8:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function dt(e) {
        return mt.apply(this, arguments);
      }
      function mt() {
        return (mt = Object(u.a)(
          l.a.mark(function e(t) {
            var n, r, a, o, c, i, s, d, m, p, f, b, h, g, k, y, E, O, w, x, j;
            return l.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = t.signedTransaction),
                        (r = t.connection),
                        (a = t.sendingMessage),
                        (o = void 0 === a ? 'Sending transaction...' : a),
                        (c = t.sentMessage),
                        (i = void 0 === c ? 'Transaction sent' : c),
                        (s = t.successMessage),
                        (d = void 0 === s ? 'Transaction confirmed' : s),
                        (m = t.timeout),
                        (p = void 0 === m ? 15e3 : m),
                        (f = t.sendNotification),
                        (b = void 0 === f || f),
                        (h = n.serialize()),
                        (g = at()),
                        b && re({ message: o }),
                        (e.next = 6),
                        r.sendRawTransaction(h, { skipPreflight: !0 })
                      );
                    case 6:
                      return (
                        (k = e.sent),
                        b && re({ message: i, type: 'success', txid: k }),
                        console.log('Started awaiting confirmation for', k),
                        (y = !1),
                        Object(u.a)(
                          l.a.mark(function e() {
                            return l.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (y || !(at() - g < p)) {
                                      e.next = 6;
                                      break;
                                    }
                                    return (
                                      r.sendRawTransaction(h, {
                                        skipPreflight: !0,
                                      }),
                                      (e.next = 4),
                                      v(300)
                                    );
                                  case 4:
                                    e.next = 0;
                                    break;
                                  case 6:
                                  case 'end':
                                    return e.stop();
                                }
                            }, e);
                          }),
                        )(),
                        (e.prev = 11),
                        (e.next = 14),
                        pt(k, p, r)
                      );
                    case 14:
                      e.next = 42;
                      break;
                    case 16:
                      if (
                        ((e.prev = 16), (e.t0 = e.catch(11)), !e.t0.timeout)
                      ) {
                        e.next = 20;
                        break;
                      }
                      throw new Error(
                        'Timed out awaiting confirmation on transaction',
                      );
                    case 20:
                      return (
                        (E = null),
                        (e.prev = 21),
                        (e.next = 24),
                        Et(r, n, 'single')
                      );
                    case 24:
                      (E = e.sent.value), (e.next = 29);
                      break;
                    case 27:
                      (e.prev = 27), (e.t1 = e.catch(21));
                    case 29:
                      if (!E || !E.err) {
                        e.next = 41;
                        break;
                      }
                      if (!E.logs) {
                        e.next = 39;
                        break;
                      }
                      O = E.logs.length - 1;
                    case 32:
                      if (!(O >= 0)) {
                        e.next = 39;
                        break;
                      }
                      if (!(w = E.logs[O]).startsWith('Program log: ')) {
                        e.next = 36;
                        break;
                      }
                      throw new Error(
                        'Transaction failed: ' +
                          w.slice('Program log: '.length),
                      );
                    case 36:
                      --O, (e.next = 32);
                      break;
                    case 39:
                      throw (
                        ('object' == typeof E.err && 'InstructionError' in E.err
                          ? ((j = Object(ze.parseInstructionErrorResponse)(
                              n,
                              E.err.InstructionError,
                            )),
                            (x = j.error))
                          : (x = JSON.stringify(E.err)),
                        new Error(x))
                      );
                    case 41:
                      throw new Error('Transaction failed');
                    case 42:
                      return (e.prev = 42), (y = !0), e.finish(42);
                    case 45:
                      return (
                        b && re({ message: d, type: 'success', txid: k }),
                        console.log('Latency', k, at() - g),
                        e.abrupt('return', k)
                      );
                    case 48:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [11, 16, 42, 45],
                [21, 27],
              ],
            );
          }),
        )).apply(this, arguments);
      }
      function pt(e, t, n) {
        return ft.apply(this, arguments);
      }
      function ft() {
        return (ft = Object(u.a)(
          l.a.mark(function e(t, n, r) {
            var a, o;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = !1),
                      (e.next = 3),
                      new Promise(function (e, o) {
                        Object(u.a)(
                          l.a.mark(function c() {
                            return l.a.wrap(function (c) {
                              for (;;)
                                switch ((c.prev = c.next)) {
                                  case 0:
                                    setTimeout(function () {
                                      a ||
                                        ((a = !0),
                                        console.log('Timed out for txid', t),
                                        o({ timeout: !0 }));
                                    }, n);
                                    try {
                                      r.onSignature(
                                        t,
                                        function (n) {
                                          console.log('WS confirmed', t, n),
                                            (a = !0),
                                            n.err ? o(n.err) : e(n);
                                        },
                                        'recent',
                                      ),
                                        console.log('Set up WS connection', t);
                                    } catch (i) {
                                      (a = !0),
                                        console.log('WS error in setup', t, i);
                                    }
                                  case 2:
                                    if (a) {
                                      c.next = 8;
                                      break;
                                    }
                                    return (
                                      Object(u.a)(
                                        l.a.mark(function n() {
                                          var c, i;
                                          return l.a.wrap(
                                            function (n) {
                                              for (;;)
                                                switch ((n.prev = n.next)) {
                                                  case 0:
                                                    return (
                                                      (n.prev = 0),
                                                      (n.next = 3),
                                                      r.getSignatureStatuses([
                                                        t,
                                                      ])
                                                    );
                                                  case 3:
                                                    (c = n.sent),
                                                      (i = c && c.value[0]),
                                                      a ||
                                                        (i
                                                          ? i.err
                                                            ? (console.log(
                                                                'REST error for',
                                                                t,
                                                                i,
                                                              ),
                                                              (a = !0),
                                                              o(i.err))
                                                            : i.confirmations
                                                            ? (console.log(
                                                                'REST confirmation for',
                                                                t,
                                                                i,
                                                              ),
                                                              (a = !0),
                                                              e(i))
                                                            : console.log(
                                                                'REST no confirmations for',
                                                                t,
                                                                i,
                                                              )
                                                          : console.log(
                                                              'REST null result for',
                                                              t,
                                                              i,
                                                            )),
                                                      (n.next = 11);
                                                    break;
                                                  case 8:
                                                    (n.prev = 8),
                                                      (n.t0 = n.catch(0)),
                                                      a ||
                                                        console.log(
                                                          'REST connection error: txid',
                                                          t,
                                                          n.t0,
                                                        );
                                                  case 11:
                                                  case 'end':
                                                    return n.stop();
                                                }
                                            },
                                            n,
                                            null,
                                            [[0, 8]],
                                          );
                                        }),
                                      )(),
                                      (c.next = 6),
                                      v(300)
                                    );
                                  case 6:
                                    c.next = 2;
                                    break;
                                  case 8:
                                  case 'end':
                                    return c.stop();
                                }
                            }, c);
                          }),
                        )();
                      })
                    );
                  case 3:
                    return (o = e.sent), (a = !0), e.abrupt('return', o);
                  case 6:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function bt(e) {
        var t = new m.Transaction();
        return (
          e
            .filter(function (e) {
              return void 0 !== e;
            })
            .forEach(function (e) {
              t.add(e);
            }),
          t
        );
      }
      var vt,
        ht = Object(We.a)({
          executable: 'boolean',
          owner: 'string',
          lamports: 'number',
          data: 'any',
          rentEpoch: 'number?',
        }),
        gt =
          ((vt = We.a.array([We.a.union(['null', ht])])),
          (function (e) {
            var t = We.a.literal('2.0');
            return We.a.union([
              Object(We.a)({ jsonrpc: t, id: 'string', error: 'any' }),
              Object(We.a)({
                jsonrpc: t,
                id: 'string',
                error: 'null?',
                result: e,
              }),
            ]);
          })({ context: Object(We.a)({ slot: 'number' }), value: vt }));
      function kt(e, t) {
        return yt.apply(this, arguments);
      }
      function yt() {
        return (yt = Object(u.a)(
          l.a.mark(function e(t, n) {
            var r, a, o, c, i, u, s, p, f, b, v, h;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = [
                        n.map(function (e) {
                          return e.toBase58();
                        }),
                        { commitment: 'recent' },
                      ]),
                      (e.next = 3),
                      t._rpcRequest('getMultipleAccounts', r)
                    );
                  case 3:
                    if (((a = e.sent), !(o = gt(a)).error)) {
                      e.next = 7;
                      break;
                    }
                    throw new Error(
                      'failed to get info about accounts ' +
                        n
                          .map(function (e) {
                            return e.toBase58();
                          })
                          .join(', ') +
                        ': ' +
                        o.error.message,
                    );
                  case 7:
                    B()('undefined' !== typeof o.result),
                      (c = []),
                      (i = Object(d.a)(o.result.value));
                    try {
                      for (i.s(); !(u = i.n()).done; )
                        (s = u.value),
                          (p = null),
                          o.result.value &&
                            ((f = s.executable),
                            (b = s.owner),
                            (v = s.lamports),
                            (h = s.data),
                            B()('base64' === h[1]),
                            (p = {
                              executable: f,
                              owner: new m.PublicKey(b),
                              lamports: v,
                              data: De.Buffer.from(h[0], 'base64'),
                            })),
                          c.push(p);
                    } catch (l) {
                      i.e(l);
                    } finally {
                      i.f();
                    }
                    return e.abrupt('return', {
                      context: { slot: o.result.context.slot },
                      value: Object.fromEntries(
                        c.map(function (e, t) {
                          return [n[t].toBase58(), e];
                        }),
                      ),
                    });
                  case 12:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function Et(e, t, n) {
        return Ot.apply(this, arguments);
      }
      function Ot() {
        return (Ot = Object(u.a)(
          l.a.mark(function e(t, n, r) {
            var a, o, c, i, u;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      t._recentBlockhash(t._disableBlockhashCaching)
                    );
                  case 2:
                    return (
                      (n.recentBlockhash = e.sent),
                      (a = n.serializeMessage()),
                      (o = n._serialize(a)),
                      (c = o.toString('base64')),
                      (i = [c, { encoding: 'base64', commitment: r }]),
                      (e.next = 10),
                      t._rpcRequest('simulateTransaction', i)
                    );
                  case 10:
                    if (!(u = e.sent).error) {
                      e.next = 13;
                      break;
                    }
                    throw new Error(
                      'failed to simulate transaction: ' + u.error.message,
                    );
                  case 13:
                    return e.abrupt('return', u.result);
                  case 14:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      var wt = _e.struct([
          _e.blob(32, 'mint'),
          _e.blob(32, 'owner'),
          _e.nu64('amount'),
          _e.blob(93),
        ]),
        xt = _e.struct([
          _e.blob(36),
          _e.blob(8, 'supply'),
          _e.u8('decimals'),
          _e.u8('initialized'),
          _e.blob(36),
        ]);
      function jt(e) {
        var t = wt.decode(e),
          n = t.mint,
          r = t.owner,
          a = t.amount;
        return {
          mint: new m.PublicKey(n),
          owner: new m.PublicKey(r),
          amount: a,
        };
      }
      function St(e) {
        var t = xt.decode(e),
          n = t.decimals,
          r = t.initialized,
          a = t.supply;
        return { decimals: n, initialized: !!r, supply: new f.a(a, 10, 'le') };
      }
      function Tt(e) {
        return [
          { memcmp: { offset: wt.offsetOf('owner'), bytes: e.toBase58() } },
          { dataSize: wt.span },
        ];
      }
      var At = new m.PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');
      function Mt(e, t) {
        return It.apply(this, arguments);
      }
      function It() {
        return (It = Object(u.a)(
          l.a.mark(function e(t, n) {
            var r, a;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = Tt(n)),
                      (e.next = 3),
                      t._rpcRequest('getProgramAccounts', [
                        At.toBase58(),
                        { commitment: t.commitment, filters: r },
                      ])
                    );
                  case 3:
                    if (!(a = e.sent).error) {
                      e.next = 6;
                      break;
                    }
                    throw new Error(
                      'failed to get token accounts owned by ' +
                        n.toBase58() +
                        ': ' +
                        a.error.message,
                    );
                  case 6:
                    return e.abrupt(
                      'return',
                      a.result
                        .map(function (e) {
                          var t = e.pubkey,
                            n = e.account,
                            r = n.data,
                            a = n.executable,
                            o = n.owner,
                            c = n.lamports;
                          return {
                            publicKey: new m.PublicKey(t),
                            accountInfo: {
                              data: Re.a.decode(r),
                              executable: a,
                              owner: new m.PublicKey(o),
                              lamports: c,
                            },
                          };
                        })
                        .filter(function (e) {
                          var t = e.accountInfo;
                          return r.every(function (e) {
                            if (e.dataSize) return t.data.length === e.dataSize;
                            if (e.memcmp) {
                              var n = Re.a.decode(e.memcmp.bytes);
                              return t.data
                                .slice(
                                  e.memcmp.offset,
                                  e.memcmp.offset + n.length,
                                )
                                .equals(n);
                            }
                            return !1;
                          });
                        }),
                    );
                  case 7:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function Ct(e, t) {
        return Pt.apply(this, arguments);
      }
      function Pt() {
        return (Pt = Object(u.a)(
          l.a.mark(function e(t, n) {
            var r, a, o, c, i;
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2), Promise.all([Mt(t, n), t.getAccountInfo(n)])
                    );
                  case 2:
                    return (
                      (r = e.sent),
                      (a = Object(s.a)(r, 2)),
                      (o = a[0]),
                      (c = a[1]),
                      (i = o.map(function (e) {
                        var t = e.publicKey,
                          n = e.accountInfo;
                        return {
                          pubkey: t,
                          account: n,
                          effectiveMint: jt(n.data).mint,
                        };
                      })),
                      e.abrupt(
                        'return',
                        i.concat({
                          pubkey: n,
                          account: c,
                          effectiveMint: Le.WRAPPED_SOL_MINT,
                        }),
                      )
                    );
                  case 8:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function Bt() {
        var e = Wt().customMarkets;
        return Object(r.useMemo)(
          function () {
            return Object.fromEntries(
              ze.TOKEN_MINTS.map(function (e) {
                return [e.address.toBase58(), e.name];
              }),
            );
          },
          [e.length],
        );
      }
      function Kt() {
        var e = J(),
          t = en(),
          n = Object(s.a)(t, 1)[0],
          r = zt(),
          a = Object(s.a)(r, 1)[0],
          o = (n || [])
            .map(function (e) {
              return e.effectiveMint;
            })
            .concat(
              (a || []).map(function (e) {
                return e.market.baseMintAddress;
              }),
            )
            .concat(
              (a || []).map(function (e) {
                return e.market.quoteMintAddress;
              }),
            ),
          c = Object(M.a)(
            new Set(
              o.map(function (e) {
                return e.toBase58();
              }),
            ),
          ).map(function (e) {
            return new m.PublicKey(e);
          });
        return q(
          (function () {
            var t = Object(u.a)(
              l.a.mark(function t() {
                var n;
                return l.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), kt(e, c);
                      case 2:
                        return (
                          (n = t.sent),
                          t.abrupt(
                            'return',
                            Object.fromEntries(
                              Object.entries(n.value).map(function (e) {
                                var t = Object(s.a)(e, 2),
                                  n = t[0],
                                  r = t[1];
                                return [n, r && St(r.data)];
                              }),
                            ),
                          )
                        );
                      case 4:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              }),
            );
            return function () {
              return t.apply(this, arguments);
            };
          })(),
          Object(D.a)('getAllMintInfo', e, (n || []).length, (a || []).length),
          { refreshInterval: 5e6 },
        );
      }
      var Ft = (function () {
        function e() {
          Object(C.a)(this, e);
        }
        return (
          Object(I.a)(e, null, [
            {
              key: 'get',
              value: (function () {
                var e = Object(u.a)(
                  l.a.mark(function e(t) {
                    var n, r;
                    return l.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0), (e.next = 3), fetch(this.URL + t)
                              );
                            case 3:
                              if (!(n = e.sent).ok) {
                                e.next = 9;
                                break;
                              }
                              return (e.next = 7), n.json();
                            case 7:
                              return (
                                (r = e.sent),
                                e.abrupt('return', r.success ? r.data : null)
                              );
                            case 9:
                              e.next = 14;
                              break;
                            case 11:
                              (e.prev = 11),
                                (e.t0 = e.catch(0)),
                                console.log(
                                  'Error fetching from Bonfida API '
                                    .concat(t, ': ')
                                    .concat(e.t0),
                                );
                            case 14:
                              return e.abrupt('return', null);
                            case 15:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[0, 11]],
                    );
                  }),
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: 'getRecentTrades',
              value: (function () {
                var t = Object(u.a)(
                  l.a.mark(function t(n) {
                    return l.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return t.abrupt(
                              'return',
                              e.get('trades/address/'.concat(n)),
                            );
                          case 1:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            },
          ]),
          e
        );
      })();
      Ft.URL = 'https://serum-api.bonfida.com/';
      var Nt = ze.MARKETS;
      function zt() {
        var e = J(),
          t = Wt().customMarkets;
        return q(
          (function () {
            var n = Object(u.a)(
              l.a.mark(function n() {
                var r;
                return l.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.next = 2),
                          Promise.all(
                            pn(t).map(
                              (function () {
                                var t = Object(u.a)(
                                  l.a.mark(function t(n) {
                                    var r;
                                    return l.a.wrap(
                                      function (t) {
                                        for (;;)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              return (
                                                (t.prev = 0),
                                                (t.next = 3),
                                                ze.Market.load(
                                                  e,
                                                  n.address,
                                                  {},
                                                  n.programId,
                                                )
                                              );
                                            case 3:
                                              return (
                                                (r = t.sent),
                                                t.abrupt('return', {
                                                  market: r,
                                                  marketName: n.name,
                                                  programId: n.programId,
                                                })
                                              );
                                            case 7:
                                              return (
                                                (t.prev = 7),
                                                (t.t0 = t.catch(0)),
                                                re({
                                                  message:
                                                    'Error loading all market',
                                                  description: t.t0.message,
                                                  type: 'error',
                                                }),
                                                t.abrupt('return', null)
                                              );
                                            case 11:
                                            case 'end':
                                              return t.stop();
                                          }
                                      },
                                      t,
                                      null,
                                      [[0, 7]],
                                    );
                                  }),
                                );
                                return function (e) {
                                  return t.apply(this, arguments);
                                };
                              })(),
                            ),
                          )
                        );
                      case 2:
                        return (
                          (r = n.sent),
                          n.abrupt(
                            'return',
                            r.filter(function (e) {
                              return !!e;
                            }),
                          )
                        );
                      case 4:
                      case 'end':
                        return n.stop();
                    }
                }, n);
              }),
            );
            return function () {
              return n.apply(this, arguments);
            };
          })(),
          Object(D.a)('getAllMarkets', t.length, e),
          { refreshInterval: Rt },
        );
      }
      function _t() {
        var e,
          t = J(),
          n = Oe().wallet;
        function r() {
          return (r = Object(u.a)(
            l.a.mark(function e() {
              var r, a, o, c, i, u, s;
              return l.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (n && t && n.publicKey) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt('return', []);
                      case 2:
                        console.log(
                          'refreshing useUnmigratedOpenOrdersAccounts',
                        ),
                          (r = []),
                          (a = Array.from(
                            new Set(
                              Nt.filter(function (e) {
                                return e.deprecated;
                              }).map(function (e) {
                                return e.programId.toBase58();
                              }),
                            ),
                          ).map(function (e) {
                            return new m.PublicKey(e);
                          })),
                          (c = Object(d.a)(a)),
                          (e.prev = 6),
                          c.s();
                      case 8:
                        if ((i = c.n()).done) {
                          e.next = 22;
                          break;
                        }
                        return (
                          (o = i.value),
                          (e.prev = 10),
                          (e.next = 13),
                          ze.OpenOrders.findForOwner(t, n.publicKey, o)
                        );
                      case 13:
                        (u = e.sent),
                          (r = r.concat(
                            u
                              .filter(function (e) {
                                return (
                                  e.baseTokenTotal.toNumber() ||
                                  e.quoteTokenTotal.toNumber()
                                );
                              })
                              .filter(function (e) {
                                return Nt.some(function (t) {
                                  return (
                                    t.deprecated && t.address.equals(e.market)
                                  );
                                });
                              }),
                          )),
                          (e.next = 20);
                        break;
                      case 17:
                        (e.prev = 17),
                          (e.t0 = e.catch(10)),
                          console.log(
                            'Error loading deprecated markets',
                            null === (s = o) || void 0 === s
                              ? void 0
                              : s.toBase58(),
                            e.t0.message,
                          );
                      case 20:
                        e.next = 8;
                        break;
                      case 22:
                        e.next = 27;
                        break;
                      case 24:
                        (e.prev = 24), (e.t1 = e.catch(6)), c.e(e.t1);
                      case 27:
                        return (e.prev = 27), c.f(), e.finish(27);
                      case 30:
                        return e.abrupt('return', r);
                      case 31:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [
                  [6, 24, 27, 30],
                  [10, 17],
                ],
              );
            }),
          )).apply(this, arguments);
        }
        var a = Object(D.a)(
            'getUnmigratedOpenOrdersAccounts',
            t,
            null === n ||
              void 0 === n ||
              null === (e = n.publicKey) ||
              void 0 === e
              ? void 0
              : e.toBase58(),
          ),
          o = q(
            function () {
              return r.apply(this, arguments);
            },
            a,
            { refreshInterval: Rt },
          );
        return {
          accounts: Object(s.a)(o, 1)[0],
          refresh: function (e) {
            return R(a, e);
          },
        };
      }
      var qt = a.a.createContext(null),
        Rt = 5e6,
        Lt = Nt.find(function (e) {
          var t = e.name,
            n = e.deprecated;
          return 'SRM/USDT' === t && !n;
        });
      function Dt(e, t) {
        var n, r;
        if (!e) return {};
        var a = pn(t).find(function (t) {
            return t.address.equals(e.address);
          }),
          o =
            ((null === e || void 0 === e ? void 0 : e.baseMintAddress) &&
              (null ===
                (n = ze.TOKEN_MINTS.find(function (t) {
                  return t.address.equals(e.baseMintAddress);
                })) || void 0 === n
                ? void 0
                : n.name)) ||
            ((null === a || void 0 === a ? void 0 : a.baseLabel) &&
              ''.concat(
                null === a || void 0 === a ? void 0 : a.baseLabel,
                '*',
              )) ||
            'UNKNOWN',
          c =
            ((null === e || void 0 === e ? void 0 : e.quoteMintAddress) &&
              (null ===
                (r = ze.TOKEN_MINTS.find(function (t) {
                  return t.address.equals(e.quoteMintAddress);
                })) || void 0 === r
                ? void 0
                : r.name)) ||
            ((null === a || void 0 === a ? void 0 : a.quoteLabel) &&
              ''.concat(
                null === a || void 0 === a ? void 0 : a.quoteLabel,
                '*',
              )) ||
            'UNKNOWN';
        return Object(Ne.a)(
          Object(Ne.a)({}, a),
          {},
          {
            marketName: null === a || void 0 === a ? void 0 : a.name,
            baseCurrency: o,
            quoteCurrency: c,
            marketInfo: a,
          },
        );
      }
      function Wt() {
        var e = S('customMarkets', []),
          t = Object(s.a)(e, 2);
        return { customMarkets: t[0], setCustomMarkets: t[1] };
      }
      function Ut(e) {
        var t = e.marketAddress,
          n = e.setMarketAddress,
          o = e.children,
          c = Wt(),
          i = c.customMarkets,
          l = c.setCustomMarkets,
          u = t && new m.PublicKey(t),
          d = J(),
          p = pn(i),
          f =
            u &&
            p.find(function (e) {
              return e.address.equals(u);
            });
        Object(r.useEffect)(function () {
          f &&
            f.deprecated &&
            (console.log('Switching markets from deprecated', f),
            Lt && n(Lt.address.toBase58()));
        }, []);
        var b = Object(r.useState)(),
          v = Object(s.a)(b, 2),
          h = v[0],
          g = v[1];
        return (
          Object(r.useEffect)(
            function () {
              var e;
              (h &&
                f &&
                (null === (e = h._decoded.ownAddress) || void 0 === e
                  ? void 0
                  : e.equals(
                      null === f || void 0 === f ? void 0 : f.address,
                    ))) ||
                (g(null),
                f && f.address
                  ? ze.Market.load(d, f.address, {}, f.programId)
                      .then(g)
                      .catch(function (e) {
                        return re({
                          message: 'Error loading market',
                          description: e.message,
                          type: 'error',
                        });
                      })
                  : re({
                      message: 'Error loading market',
                      description: 'Please select a market from the dropdown',
                      type: 'error',
                    }));
            },
            [d, f],
          ),
          a.a.createElement(
            qt.Provider,
            {
              value: Object(Ne.a)(
                Object(Ne.a)({ market: h }, Dt(h, i)),
                {},
                { setMarketAddress: n, customMarkets: i, setCustomMarkets: l },
              ),
            },
            o,
          )
        );
      }
      function Vt(e) {
        if (!e) {
          var t = localStorage.getItem('marketAddress');
          t && (e = JSON.parse(t)),
            (e =
              e ||
              (null === Lt || void 0 === Lt ? void 0 : Lt.address.toBase58()) ||
              '');
        }
        return '/market/'.concat(e);
      }
      function Ht() {
        var e = S('selectedTokenAccounts', {}),
          t = Object(s.a)(e, 2);
        return [t[0], t[1]];
      }
      function Jt() {
        var e = Object(r.useContext)(qt);
        if (!e) throw new Error('Missing market context');
        return e;
      }
      function Qt() {
        var e = Object(r.useState)(null),
          t = Object(s.a)(e, 2),
          n = t[0],
          a = t[1],
          o = Xt(),
          c = Object(s.a)(o, 1)[0],
          i = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 100,
              t = Gt(e);
            if (!t) return null;
            return t
              .filter(function (e) {
                return e.eventFlags.maker;
              })
              .map(function (e) {
                return Object(Ne.a)(
                  Object(Ne.a)({}, e),
                  {},
                  { side: 'buy' === e.side ? 'sell' : 'buy' },
                );
              });
          })();
        return (
          Object(r.useEffect)(
            function () {
              var e,
                t,
                n =
                  (null === c ||
                  void 0 === c ||
                  null === (e = c.bids) ||
                  void 0 === e
                    ? void 0
                    : e.length) > 0 && Number(c.bids[0][0]),
                r =
                  (null === c ||
                  void 0 === c ||
                  null === (t = c.asks) ||
                  void 0 === t
                    ? void 0
                    : t.length) > 0 && Number(c.asks[0][0]),
                o = i && i.length > 0 && i[0].price,
                l =
                  n && r
                    ? o
                      ? [n, r, o].sort(function (e, t) {
                          return e - t;
                        })[1]
                      : (n + r) / 2
                    : null;
              a(l);
            },
            [c, i],
          ),
          n
        );
      }
      function Gt() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 1e4,
          t = Jt(),
          n = t.market,
          r = J();
        function a() {
          return o.apply(this, arguments);
        }
        function o() {
          return (o = Object(u.a)(
            l.a.mark(function t() {
              return l.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (n && r) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt('return', null);
                    case 2:
                      return (t.next = 4), n.loadFills(r, e);
                    case 4:
                      return t.abrupt('return', t.sent);
                    case 5:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            }),
          )).apply(this, arguments);
        }
        var c = q(a, Object(D.a)('getUnfilteredTrades', n, r), {
            refreshInterval: 5e3,
          }),
          i = Object(s.a)(c, 1),
          d = i[0];
        return d;
      }
      function Yt() {
        var e = Jt().market,
          t = X(e && e._decoded.bids),
          n = X(e && e._decoded.asks);
        return {
          bidOrderbook: e && t ? ze.Orderbook.decode(e, t) : null,
          askOrderbook: e && n ? ze.Orderbook.decode(e, n) : null,
        };
      }
      function Xt() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 20,
          t = Yt(),
          n = t.bidOrderbook,
          r = t.askOrderbook,
          a = Jt(),
          o = a.market,
          c =
            n && o
              ? n.getL2(e).map(function (e) {
                  var t = Object(s.a)(e, 2);
                  return [t[0], t[1]];
                })
              : [],
          i =
            r && o
              ? r.getL2(e).map(function (e) {
                  var t = Object(s.a)(e, 2);
                  return [t[0], t[1]];
                })
              : [];
        return [{ bids: c, asks: i }, !!c || !!i];
      }
      function Zt() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = Jt(),
          n = t.market,
          r = Oe(),
          a = r.connected,
          o = r.wallet,
          c = J();
        function i() {
          return s.apply(this, arguments);
        }
        function s() {
          return (s = Object(u.a)(
            l.a.mark(function e() {
              return l.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (a && o) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt('return', null);
                    case 2:
                      if (n) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt('return', null);
                    case 4:
                      return (
                        (e.next = 6),
                        n.findOpenOrdersAccountsForOwner(c, o.publicKey)
                      );
                    case 6:
                      return e.abrupt('return', e.sent);
                    case 7:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          )).apply(this, arguments);
        }
        return q(i, Object(D.a)('getOpenOrdersAccounts', o, n, a), {
          refreshInterval: e ? 1e3 : 5e3,
        });
      }
      function $t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = Zt(e),
          n = Object(s.a)(t, 1),
          r = n[0];
        return r ? r[0] : null;
      }
      function en() {
        var e = Oe(),
          t = e.connected,
          n = e.wallet,
          r = J();
        function a() {
          return (a = Object(u.a)(
            l.a.mark(function e() {
              return l.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t && n) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt('return', null);
                    case 2:
                      return (e.next = 4), Ct(r, n.publicKey);
                    case 4:
                      return e.abrupt('return', e.sent);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          )).apply(this, arguments);
        }
        return q(
          function () {
            return a.apply(this, arguments);
          },
          Object(D.a)('getTokenAccounts', n, t),
          { refreshInterval: 5e3 },
        );
      }
      function tn(e, t, n) {
        if (!e || !t) return null;
        var r = e.filter(function (e) {
          var r = e.effectiveMint,
            a = e.pubkey;
          return (
            t.equals(r) &&
            (!n || ('string' === typeof n ? n : n.toBase58()) === a.toBase58())
          );
        });
        return r && r[0];
      }
      function nn() {
        var e = en(),
          t = Object(s.a)(e, 1)[0],
          n = Jt().market,
          r = Ht(),
          a = Object(s.a)(r, 1)[0],
          o = null === n || void 0 === n ? void 0 : n.quoteMintAddress;
        return tn(t, o, o && a[o.toBase58()]);
      }
      function rn() {
        var e = en(),
          t = Object(s.a)(e, 1)[0],
          n = Jt().market,
          r = Ht(),
          a = Object(s.a)(r, 1)[0],
          o = null === n || void 0 === n ? void 0 : n.baseMintAddress;
        return tn(t, o, o && a[o.toBase58()]);
      }
      function an() {
        var e,
          t = nn(),
          n = Jt().market,
          r = Y(null === t || void 0 === t ? void 0 : t.pubkey),
          a = Object(s.a)(r, 2),
          o = a[0],
          c = a[1];
        return n && t && c && o
          ? n.quoteMintAddress.equals(ze.TokenInstructions.WRAPPED_SOL_MINT)
            ? null !==
                (e =
                  (null === o || void 0 === o ? void 0 : o.lamports) / 1e9) &&
              void 0 !== e
              ? e
              : 0
            : n.quoteSplSizeToNumber(new f.a(o.data.slice(64, 72), 10, 'le'))
          : null;
      }
      function on() {
        var e,
          t = rn(),
          n = Jt().market,
          r = Y(null === t || void 0 === t ? void 0 : t.pubkey),
          a = Object(s.a)(r, 2),
          o = a[0],
          c = a[1];
        return n && t && c && o
          ? n.baseMintAddress.equals(ze.TokenInstructions.WRAPPED_SOL_MINT)
            ? null !==
                (e =
                  (null === o || void 0 === o ? void 0 : o.lamports) / 1e9) &&
              void 0 !== e
              ? e
              : 0
            : n.baseSplSizeToNumber(new f.a(o.data.slice(64, 72), 10, 'le'))
          : null;
      }
      function cn() {
        var e = S('feeDiscountKey', void 0),
          t = Object(s.a)(e, 2),
          n = t[0],
          r = t[1];
        return {
          storedFeeDiscountKey: n ? new m.PublicKey(n) : void 0,
          setStoredFeeDiscountKey: r,
        };
      }
      function ln() {
        var e = Jt().market,
          t = Oe(),
          n = t.connected,
          r = t.wallet,
          a = J(),
          o = cn().setStoredFeeDiscountKey;
        return q(
          (function () {
            var t = Object(u.a)(
              l.a.mark(function t() {
                var c;
                return l.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (n && r) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt('return', null);
                      case 2:
                        if (e) {
                          t.next = 4;
                          break;
                        }
                        return t.abrupt('return', null);
                      case 4:
                        return (
                          (t.next = 6), e.findFeeDiscountKeys(a, r.publicKey)
                        );
                      case 6:
                        return (
                          (c = t.sent) && o(c[0].pubkey.toBase58()),
                          t.abrupt('return', c)
                        );
                      case 9:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              }),
            );
            return function () {
              return t.apply(this, arguments);
            };
          })(),
          Object(D.a)('getFeeDiscountKeys', r, e, n),
          { refreshInterval: 5e3 },
        );
      }
      function un() {
        var e = (function () {
            var e,
              t = Oe(),
              n = t.wallet,
              r = t.connected,
              a = J(),
              o = fn(),
              c = Object(M.a)(
                new Set(
                  o.map(function (e) {
                    return e.programId.toBase58();
                  }),
                ),
              ).map(function (e) {
                return new m.PublicKey(e);
              });
            return q(
              (function () {
                var e = Object(u.a)(
                  l.a.mark(function e() {
                    return l.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (r && n) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt('return', []);
                          case 2:
                            return (
                              (e.next = 4),
                              Promise.all(
                                c.map(function (e) {
                                  return ze.OpenOrders.findForOwner(
                                    a,
                                    n.publicKey,
                                    e,
                                  );
                                }),
                              )
                            );
                          case 4:
                            return e.abrupt('return', e.sent.flat());
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
              Object(D.a)(
                'getAllOpenOrdersAccounts',
                a,
                r,
                null === n ||
                  void 0 === n ||
                  null === (e = n.publicKey) ||
                  void 0 === e
                  ? void 0
                  : e.toBase58(),
                o.length,
                (c || []).length,
              ),
              { refreshInterval: 5e3 },
            );
          })(),
          t = Object(s.a)(e, 2),
          n = t[0],
          r = t[1],
          a = Kt(),
          o = Object(s.a)(a, 2),
          c = o[0],
          i = o[1],
          p = zt(),
          b = Object(s.a)(p, 1)[0];
        if (!r || !i) return {};
        var v,
          h = Object.fromEntries(
            (b || []).map(function (e) {
              return [e.market.address.toBase58(), e];
            }),
          ),
          g = {},
          k = Object(d.a)(n || []);
        try {
          for (k.s(); !(v = k.n()).done; ) {
            var y = v.value,
              E = h[y.market.toBase58()],
              x =
                null === E || void 0 === E
                  ? void 0
                  : E.market.baseMintAddress.toBase58(),
              j =
                null === E || void 0 === E
                  ? void 0
                  : E.market.quoteMintAddress.toBase58();
            x in g || (g[x] = []), j in g || (g[j] = []);
            var S = c && c[x],
              T = O(
                new f.a(y.baseTokenFree),
                w((null === S || void 0 === S ? void 0 : S.decimals) || 0),
              ),
              A = O(
                new f.a(y.baseTokenTotal),
                w((null === S || void 0 === S ? void 0 : S.decimals) || 0),
              ),
              I = c && c[j],
              C = O(
                new f.a(y.quoteTokenFree),
                w((null === I || void 0 === I ? void 0 : I.decimals) || 0),
              ),
              P = O(
                new f.a(y.quoteTokenTotal),
                w((null === I || void 0 === I ? void 0 : I.decimals) || 0),
              );
            g[x].push({ market: y.market, free: T, total: A }),
              g[j].push({ market: y.market, free: C, total: P });
          }
        } catch (B) {
          k.e(B);
        } finally {
          k.f();
        }
        return g;
      }
      var sn;
      function dn() {
        var e = on(),
          t = an(),
          n = $t(!0),
          r = Jt(),
          a = r.baseCurrency,
          o = r.quoteCurrency,
          c = r.market,
          i = n && n.baseTokenTotal && n.baseTokenFree,
          l = n && n.quoteTokenTotal && n.quoteTokenFree;
        return 'UNKNOWN' !== a && 'UNKNOWN' !== o && a && o
          ? [
              {
                market: c,
                key: ''.concat(a).concat(o).concat(a),
                coin: a,
                wallet: e,
                orders:
                  i && c && n
                    ? c.baseSplSizeToNumber(
                        n.baseTokenTotal.sub(n.baseTokenFree),
                      )
                    : null,
                openOrders: n,
                unsettled:
                  i && c && n ? c.baseSplSizeToNumber(n.baseTokenFree) : null,
              },
              {
                market: c,
                key: ''.concat(o).concat(a).concat(o),
                coin: o,
                wallet: t,
                openOrders: n,
                orders:
                  l && c && n
                    ? c.quoteSplSizeToNumber(
                        n.quoteTokenTotal.sub(n.quoteTokenFree),
                      )
                    : null,
                unsettled:
                  l && c && n ? c.quoteSplSizeToNumber(n.quoteTokenFree) : null,
              },
            ]
          : [];
      }
      function mn() {
        var e = J(),
          t = _t().accounts,
          n =
            t &&
            Array.from(
              new Set(
                t.map(function (e) {
                  return e.market;
                }),
              ),
            ),
          r =
            n &&
            n.map(function (e) {
              return e.toBase58();
            }),
          a = q(
            (function () {
              var t = Object(u.a)(
                l.a.mark(function t() {
                  var r;
                  return l.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (n) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt('return', null);
                        case 2:
                          return (
                            (r = (function () {
                              var t = Object(u.a)(
                                l.a.mark(function t(n) {
                                  var r;
                                  return l.a.wrap(
                                    function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            if (
                                              (r = Nt.find(function (e) {
                                                return e.address.equals(n);
                                              }))
                                            ) {
                                              t.next = 5;
                                              break;
                                            }
                                            return (
                                              console.log(
                                                'Failed loading market',
                                              ),
                                              re({
                                                message: 'Error loading market',
                                                type: 'error',
                                              }),
                                              t.abrupt('return', null)
                                            );
                                          case 5:
                                            return (
                                              (t.prev = 5),
                                              console.log(
                                                'Loading market',
                                                r.name,
                                              ),
                                              (t.next = 9),
                                              ze.Market.load(
                                                e,
                                                r.address,
                                                {},
                                                r.programId,
                                              )
                                            );
                                          case 9:
                                            return t.abrupt('return', t.sent);
                                          case 12:
                                            return (
                                              (t.prev = 12),
                                              (t.t0 = t.catch(5)),
                                              console.log(
                                                'Failed loading market',
                                                r.name,
                                                t.t0,
                                              ),
                                              re({
                                                message: 'Error loading market',
                                                description: t.t0.message,
                                                type: 'error',
                                              }),
                                              t.abrupt('return', null)
                                            );
                                          case 17:
                                          case 'end':
                                            return t.stop();
                                        }
                                    },
                                    t,
                                    null,
                                    [[5, 12]],
                                  );
                                }),
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })()),
                            (t.next = 5),
                            Promise.all(n.map(r))
                          );
                        case 5:
                          return t.abrupt(
                            'return',
                            t.sent.filter(function (e) {
                              return e;
                            }),
                          );
                        case 6:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                }),
              );
              return function () {
                return t.apply(this, arguments);
              };
            })(),
            Object(D.a)(
              'useUnmigratedDeprecatedMarketsInner',
              e,
              r && r.toString(),
            ),
            { refreshInterval: Rt },
          ),
          o = Object(s.a)(a, 1)[0];
        return o
          ? o.map(function (e) {
              return {
                market: e,
                openOrdersList:
                  null === t || void 0 === t
                    ? void 0
                    : t.filter(function (t) {
                        return e && t.market.equals(e.address);
                      }),
              };
            })
          : null;
      }
      function pn(e) {
        var t = e.map(function (e) {
          return Object(Ne.a)(
            Object(Ne.a)({}, e),
            {},
            {
              address: new m.PublicKey(e.address),
              programId: new m.PublicKey(e.programId),
              deprecated: !1,
            },
          );
        });
        return [].concat(Object(M.a)(t), Object(M.a)(Nt));
      }
      function fn() {
        return pn(Wt().customMarkets);
      }
      function bn(e, t, n) {
        if (e.isBids) return e.market.tickSize;
        var r,
          a,
          o,
          c = 0,
          i = e.getL2(1e3),
          l = Object(d.a)(i);
        try {
          for (l.s(); !(o = l.n()).done; ) {
            var u = Object(s.a)(o.value, 2);
            if (c + (a = (r = u[0]) * u[1]) > t) break;
            c += a;
          }
        } catch (p) {
          l.e(p);
        } finally {
          l.f();
        }
        var m = Math.min(1.02 * r, 1.05 * i[0][0]);
        return n ? k(m, n) : m;
      }
      function vn(e, t, n) {
        var r,
          a,
          o,
          c,
          i = 0,
          l = 0,
          u = Object(d.a)(e.getL2(1e3));
        try {
          for (u.s(); !(c = u.n()).done; ) {
            var m = Object(s.a)(c.value, 2);
            if (
              ((r = m[0]), (a = m[1]), i + (o = (e.isBids ? 1 : r) * a) > t)
            ) {
              (l += (t - i) * r), (i = t);
              break;
            }
            (l += o * r), (i += o);
          }
        } catch (f) {
          u.e(f);
        } finally {
          u.f();
        }
        var p = l / Math.min(t, i);
        return n ? k(p, n) : p;
      }
      function hn(e, t) {
        var n = Object(r.useRef)();
        Object(r.useEffect)(
          function () {
            n.current = e;
          },
          [e],
        ),
          Object(r.useEffect)(
            function () {
              if (null !== t) {
                var e = setInterval(function () {
                  n.current && n.current();
                }, t);
                return function () {
                  clearInterval(e);
                };
              }
            },
            [t],
          );
      }
      var gn = je.c.div(
        sn ||
          (sn = Object(xe.a)([
            '\n  margin: 0px;\n  padding: 30px;\n  background-color: #000;\n  border: 1px solid #111\n',
          ])),
      );
      function kn(e) {
        var t = e.style,
          n = void 0 === t ? void 0 : t,
          r = e.children,
          o = e.stretchVertical,
          c = void 0 !== o && o;
        return a.a.createElement(
          gn,
          {
            style: Object(Ne.a)(
              { height: c ? 'calc(100% - 10px)' : void 0 },
              n,
            ),
          },
          r,
        );
      }
      var yn,
        En,
        On,
        wn,
        xn,
        jn,
        Sn,
        Tn = n(631),
        An = n(632),
        Mn = je.c.div(
          yn || (yn = Object(xe.a)(['\n  color: rgba(255, 255, 255, 1);\n'])),
        ),
        In = Object(je.c)(Be.a)(
          En ||
            (En = Object(xe.a)([
              '\n  padding: 20px 0 14px;\n  color: #434a59;\n',
            ])),
        ),
        Cn = Object(je.c)(Be.a)(
          On ||
            (On = Object(xe.a)([
              '\n  padding: 20px 0 14px;\n  font-weight: 700;\n',
            ])),
        ),
        Pn = je.c.div(
          wn ||
            (wn = Object(xe.a)([
              '\n  text-align: right;\n  float: right;\n  height: 100%;\n  ',
              '\n  ',
              '\n',
            ])),
          function (e) {
            return (
              e['data-width'] &&
              Object(je.b)(
                xn || (xn = Object(xe.a)(['\n      width: ', ';\n    '])),
                e['data-width'],
              )
            );
          },
          function (e) {
            return (
              e['data-bgcolor'] &&
              Object(je.b)(
                jn ||
                  (jn = Object(xe.a)([
                    '\n      background-color: ',
                    ';\n    ',
                  ])),
                e['data-bgcolor'],
              )
            );
          },
        ),
        Bn = je.c.div(
          Sn ||
            (Sn = Object(xe.a)([
              '\n  position: absolute;\n  right: 5px;\n  color: white;\n',
            ])),
        );
      function Kn(e) {
        var t = e.smallScreen,
          n = e.depth,
          o = void 0 === n ? 7 : n,
          c = e.onPrice,
          i = e.onSize,
          l = Qt(),
          u = Xt(),
          d = Object(s.a)(u, 1)[0],
          m = Jt(),
          p = m.baseCurrency,
          f = m.quoteCurrency,
          b = Object(r.useRef)(null),
          v = Object(r.useRef)(null),
          h = Object(r.useState)(null),
          g = Object(s.a)(h, 2),
          k = g[0],
          y = g[1];
        function E(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = e.slice(0, o).reduce(function (e, n, r) {
              var a,
                o = Object(s.a)(n, 2),
                c = o[0],
                i = o[1],
                l =
                  ((null === (a = e[r - 1]) || void 0 === a
                    ? void 0
                    : a.cumulativeSize) || 0) + i;
              return (
                e.push({
                  price: c,
                  size: i,
                  cumulativeSize: l,
                  sizePercent: Math.round((l / (t || 1)) * 100),
                }),
                e
              );
            }, []);
          return n && (r = r.reverse()), r;
        }
        return (
          hn(function () {
            if (
              !b.current ||
              JSON.stringify(b.current) !== JSON.stringify(v.current)
            ) {
              var e = (null === d || void 0 === d ? void 0 : d.bids) || [],
                t = (null === d || void 0 === d ? void 0 : d.asks) || [],
                n = function (e, t, n) {
                  var r = Object(s.a)(t, 2)[1];
                  return n < o ? e + r : e;
                },
                r = e.reduce(n, 0) + t.reduce(n, 0),
                a = E(e, r, !1),
                c = E(t, r, !0);
              (b.current = {
                bids: null === d || void 0 === d ? void 0 : d.bids,
                asks: null === d || void 0 === d ? void 0 : d.asks,
              }),
                y({ bids: a, asks: c });
            }
          }, 250),
          Object(r.useEffect)(
            function () {
              v.current = {
                bids: null === d || void 0 === d ? void 0 : d.bids,
                asks: null === d || void 0 === d ? void 0 : d.asks,
              };
            },
            [d],
          ),
          a.a.createElement(
            kn,
            {
              style: t ? { flex: 1 } : { height: '500px', overflow: 'hidden' },
            },
            a.a.createElement(Mn, null, 'Orderbook'),
            a.a.createElement(
              In,
              null,
              a.a.createElement(
                Ke.a,
                { span: 12, style: { textAlign: 'left' } },
                'Size (',
                p,
                ')',
              ),
              a.a.createElement(
                Ke.a,
                { span: 12, style: { textAlign: 'right' } },
                'Price (',
                f,
                ')',
              ),
            ),
            null === k || void 0 === k
              ? void 0
              : k.asks.map(function (e) {
                  var t = e.price,
                    n = e.size,
                    r = e.sizePercent;
                  return a.a.createElement(Fn, {
                    key: t + '',
                    price: t,
                    size: n,
                    side: 'sell',
                    sizePercent: r,
                    onPriceClick: function () {
                      return c(t);
                    },
                    onSizeClick: function () {
                      return i(n);
                    },
                  });
                }),
            a.a.createElement(Nn, { markPrice: l }),
            null === k || void 0 === k
              ? void 0
              : k.bids.map(function (e) {
                  var t = e.price,
                    n = e.size,
                    r = e.sizePercent;
                  return a.a.createElement(Fn, {
                    key: t + '',
                    price: t,
                    size: n,
                    side: 'buy',
                    sizePercent: r,
                    onPriceClick: function () {
                      return c(t);
                    },
                    onSizeClick: function () {
                      return i(n);
                    },
                  });
                }),
          )
        );
      }
      var Fn = a.a.memo(
          function (e) {
            var t = e.side,
              n = e.price,
              o = e.size,
              c = e.sizePercent,
              i = e.onSizeClick,
              l = e.onPriceClick,
              u = Object(r.useRef)(),
              s = Jt().market;
            Object(r.useEffect)(
              function () {
                var e, t;
                !(null === (e = u.current) || void 0 === e
                  ? void 0
                  : e.classList.contains('flash')) &&
                  (null === (t = u.current) ||
                    void 0 === t ||
                    t.classList.add('flash'));
                var n = setTimeout(function () {
                  var e, t;
                  return (
                    (null === (e = u.current) || void 0 === e
                      ? void 0
                      : e.classList.contains('flash')) &&
                    (null === (t = u.current) || void 0 === t
                      ? void 0
                      : t.classList.remove('flash'))
                  );
                }, 250);
                return function () {
                  return clearTimeout(n);
                };
              },
              [n, o],
            );
            var d =
                (null === s || void 0 === s ? void 0 : s.minOrderSize) &&
                !isNaN(o)
                  ? Number(o).toFixed(E(s.minOrderSize) + 1)
                  : o,
              m =
                (null === s || void 0 === s ? void 0 : s.tickSize) && !isNaN(n)
                  ? Number(n).toFixed(E(s.tickSize) + 1)
                  : n;
            return a.a.createElement(
              Be.a,
              { ref: u, style: { marginBottom: 1 }, onClick: i },
              a.a.createElement(
                Ke.a,
                { span: 12, style: { textAlign: 'left' } },
                d,
              ),
              a.a.createElement(
                Ke.a,
                { span: 12, style: { textAlign: 'right' } },
                a.a.createElement(Pn, {
                  'data-width': c + '%',
                  'data-bgcolor':
                    'buy' === t
                      ? 'rgba(65, 199, 122, 0.6)'
                      : 'rgba(242, 60, 105, 0.6)',
                }),
                a.a.createElement(Bn, { onClick: l }, m),
              ),
            );
          },
          function (e, t) {
            return A(e, t, ['price', 'size', 'sizePercent']);
          },
        ),
        Nn = a.a.memo(
          function (e) {
            var t = e.markPrice,
              n = Jt().market,
              o = (function (e) {
                var t = Object(r.useRef)();
                return (
                  Object(r.useEffect)(
                    function () {
                      t.current = e;
                    },
                    [e],
                  ),
                  t.current
                );
              })(t),
              c = t > o ? '#41C77A' : t < o ? '#F23B69' : 'white',
              i =
                t &&
                (null === n || void 0 === n ? void 0 : n.tickSize) &&
                t.toFixed(E(n.tickSize));
            return a.a.createElement(
              Cn,
              { justify: 'center' },
              a.a.createElement(
                Ke.a,
                { style: { color: c } },
                t > o && a.a.createElement(Tn.a, { style: { marginRight: 5 } }),
                t < o && a.a.createElement(An.a, { style: { marginRight: 5 } }),
                i || '----',
              ),
            );
          },
          function (e, t) {
            return A(e, t, ['markPrice']);
          },
        ),
        zn = n(34),
        _n = n(621);
      function qn(e) {
        var t = e.dataSource,
          n = e.columns,
          r = e.emptyLabel,
          o = void 0 === r ? 'No data' : r,
          c = e.pagination,
          i = void 0 !== c && c,
          l = e.loading,
          u = void 0 !== l && l,
          s = e.pageSize,
          d = void 0 === s ? 10 : s;
        return a.a.createElement(
          zn.b,
          {
            renderEmpty: function () {
              return a.a.createElement(
                'div',
                {
                  style: {
                    padding: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                },
                o,
              );
            },
          },
          a.a.createElement(_n.a, {
            dataSource: t,
            columns: n,
            pagination: !!i && { pagination: !0, pageSize: d },
            loading: u,
          }),
        );
      }
      function Rn(e) {
        var t = e.balances,
          n = e.showMarket,
          r = e.hideWalletBalance,
          o = e.onSettleSuccess,
          c = en(),
          i = Object(s.a)(c, 1)[0],
          d = Q(),
          m = Oe().wallet;
        function p() {
          return (p = Object(u.a)(
            l.a.mark(function e(t, n) {
              return l.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          He({
                            market: t,
                            openOrders: n,
                            connection: d,
                            wallet: m,
                            baseCurrencyAccount: tn(
                              i,
                              null === t || void 0 === t
                                ? void 0
                                : t.baseMintAddress,
                            ),
                            quoteCurrencyAccount: tn(
                              i,
                              null === t || void 0 === t
                                ? void 0
                                : t.quoteMintAddress,
                            ),
                          })
                        );
                      case 3:
                        e.next = 9;
                        break;
                      case 5:
                        return (
                          (e.prev = 5),
                          (e.t0 = e.catch(0)),
                          re({
                            message: 'Error settling funds',
                            description: e.t0.message,
                            type: 'error',
                          }),
                          e.abrupt('return')
                        );
                      case 9:
                        o && o();
                      case 10:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 5]],
              );
            }),
          )).apply(this, arguments);
        }
        var f = [
          n
            ? { title: 'Market', dataIndex: 'marketName', key: 'marketName' }
            : null,
          { title: 'Coin', dataIndex: 'coin', key: 'coin' },
          r
            ? null
            : { title: 'Wallet Balance', dataIndex: 'wallet', key: 'wallet' },
          { title: 'Orders', dataIndex: 'orders', key: 'orders' },
          { title: 'Unsettled', dataIndex: 'unsettled', key: 'unsettled' },
          {
            key: 'action',
            render: function (e) {
              var t = e.market,
                n = e.openOrders,
                r = e.marketName;
              return a.a.createElement(
                'div',
                { style: { textAlign: 'right' } },
                a.a.createElement(
                  oe.a,
                  {
                    ghost: !0,
                    style: { marginRight: 12 },
                    onClick: function () {
                      return (function (e, t) {
                        return p.apply(this, arguments);
                      })(t, n);
                    },
                  },
                  'Settle ',
                  r,
                ),
              );
            },
          },
        ].filter(function (e) {
          return e;
        });
        return a.a.createElement(qn, {
          emptyLabel: 'No balances',
          dataSource: t,
          columns: f,
          pagination: !1,
        });
      }
      var Ln,
        Dn = n(629),
        Wn = n(633),
        Un = Object(je.c)(oe.a)(
          Ln ||
            (Ln = Object(xe.a)([
              '\n  color: #f23b69;\n  border: 1px solid #f23b69;\n',
            ])),
        );
      function Vn(e) {
        var t = e.openOrders,
          n = e.onCancelSuccess,
          o = e.pageSize,
          c = e.loading,
          i = e.marketFilter,
          d = Oe().wallet,
          m = Q(),
          p = Object(r.useState)(null),
          f = Object(s.a)(p, 2),
          b = f[0],
          v = f[1];
        function h() {
          return (h = Object(u.a)(
            l.a.mark(function e(t) {
              return l.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (v(null === t || void 0 === t ? void 0 : t.orderId),
                          (e.prev = 1),
                          d)
                        ) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt('return', null);
                      case 4:
                        return (
                          (e.next = 6),
                          Ye({
                            order: t,
                            market: t.market,
                            connection: m,
                            wallet: d,
                          })
                        );
                      case 6:
                        e.next = 12;
                        break;
                      case 8:
                        return (
                          (e.prev = 8),
                          (e.t0 = e.catch(1)),
                          re({
                            message: 'Error cancelling order',
                            description: e.t0.message,
                            type: 'error',
                          }),
                          e.abrupt('return')
                        );
                      case 12:
                        return (e.prev = 12), v(null), e.finish(12);
                      case 15:
                        n && n();
                      case 16:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 8, 12, 15]],
              );
            }),
          )).apply(this, arguments);
        }
        var g = Object(M.a)(
            new Set(
              (t || []).map(function (e) {
                return e.marketName;
              }),
            ),
          ).map(function (e) {
            return { text: e, value: e };
          }),
          k = [
            {
              title: 'Market',
              dataIndex: 'marketName',
              key: 'marketName',
              filters: i ? g : void 0,
              onFilter: function (e, t) {
                return 0 === t.marketName.indexOf(e);
              },
            },
            {
              title: 'Side',
              dataIndex: 'side',
              key: 'side',
              render: function (e) {
                return a.a.createElement(
                  Dn.a,
                  {
                    color: 'buy' === e ? '#41C77A' : '#F23B69',
                    style: { fontWeight: 700 },
                  },
                  e.charAt(0).toUpperCase() + e.slice(1),
                );
              },
              sorter: function (e, t) {
                return e.side === t.side ? 0 : 'buy' === e.side ? 1 : -1;
              },
              showSorterTooltip: !1,
            },
            {
              title: 'Size',
              dataIndex: 'size',
              key: 'size',
              sorter: function (e, t) {
                return t.size - e.size;
              },
              showSorterTooltip: !1,
            },
            {
              title: 'Price',
              dataIndex: 'price',
              key: 'price',
              sorter: function (e, t) {
                return t.price - e.price;
              },
              showSorterTooltip: !1,
            },
            {
              key: 'orderId',
              render: function (e) {
                return a.a.createElement(
                  'div',
                  { style: { textAlign: 'right' } },
                  a.a.createElement(
                    Un,
                    {
                      icon: a.a.createElement(Wn.a, null),
                      onClick: function () {
                        return (function (e) {
                          return h.apply(this, arguments);
                        })(e);
                      },
                      loading:
                        b + '' ===
                        (null === e || void 0 === e ? void 0 : e.orderId) + '',
                    },
                    'Cancel',
                  ),
                );
              },
            },
          ],
          y = (t || []).map(function (e) {
            return Object(Ne.a)(Object(Ne.a)({}, e), {}, { key: e.orderId });
          });
        return a.a.createElement(
          Be.a,
          null,
          a.a.createElement(
            Ke.a,
            { span: 24 },
            a.a.createElement(qn, {
              emptyLabel: 'No open orders',
              dataSource: y,
              columns: k,
              pagination: !0,
              pageSize: o || 5,
              loading: void 0 !== c && c,
            }),
          ),
        );
      }
      var Hn = n(622);
      function Jn() {
        var e = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 100,
              t = Jt(),
              n = t.marketName,
              r = Gt(e),
              a = Zt(),
              o = Object(s.a)(a, 1),
              c = o[0];
            return c && 0 !== c.length && r
              ? r
                  .filter(function (e) {
                    return c.some(function (t) {
                      return e.openOrders.equals(t.publicKey);
                    });
                  })
                  .map(function (e) {
                    return Object(Ne.a)(
                      Object(Ne.a)({}, e),
                      {},
                      { marketName: n },
                    );
                  })
              : null;
          })(),
          t = Jt().quoteCurrency,
          n = [
            { title: 'Market', dataIndex: 'marketName', key: 'marketName' },
            {
              title: 'Side',
              dataIndex: 'side',
              key: 'side',
              render: function (e) {
                return a.a.createElement(
                  Dn.a,
                  {
                    color: 'buy' === e ? '#41C77A' : '#F23B69',
                    style: { fontWeight: 700 },
                  },
                  e.charAt(0).toUpperCase() + e.slice(1),
                );
              },
            },
            { title: 'Size', dataIndex: 'size', key: 'size' },
            { title: 'Price', dataIndex: 'price', key: 'price' },
            { title: 'Liquidity', dataIndex: 'liquidity', key: 'liquidity' },
            {
              title: t ? 'Fees ('.concat(t, ')') : 'Fees',
              dataIndex: 'feeCost',
              key: 'feeCost',
            },
          ],
          r = (e || []).map(function (e) {
            return Object(Ne.a)(
              Object(Ne.a)({}, e),
              {},
              {
                key: ''.concat(e.orderId).concat(e.side),
                liquidity: e.eventFlags.maker ? 'Maker' : 'Taker',
              },
            );
          });
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            Be.a,
            null,
            a.a.createElement(
              Ke.a,
              { span: 24 },
              a.a.createElement(qn, {
                dataSource: r,
                columns: n,
                pagination: !0,
                pageSize: 5,
                emptyLabel: 'No fills',
              }),
            ),
          ),
        );
      }
      function Qn() {
        var e = ln(),
          t = [
            {
              title: 'Fee Tier',
              dataIndex: 'feeTier',
              key: 'feeTier',
              render: function (e, t) {
                return a.a.createElement(
                  'div',
                  { style: { display: 'flex' } },
                  a.a.createElement(Ae.a, null, e),
                  0 === t.index
                    ? a.a.createElement(
                        'div',
                        { style: { marginLeft: 10 } },
                        a.a.createElement(
                          Dn.a,
                          { color: '#41C77A', style: { fontWeight: 700 } },
                          'Selected',
                        ),
                      )
                    : null,
                );
              },
            },
            {
              title: 'Taker',
              dataIndex: 'taker',
              key: 'taker',
              render: function (e, t) {
                return g.format(Object(ze.getFeeRates)(t.feeTier).taker);
              },
            },
            {
              title: 'Maker',
              dataIndex: 'maker',
              key: 'maker',
              render: function (e, t) {
                return g.format(Object(ze.getFeeRates)(t.feeTier).maker);
              },
            },
            {
              title: 'Public Key',
              dataIndex: 'pubkey',
              key: 'pubkey',
              render: function (e) {
                return e.toBase58();
              },
            },
            { title: 'Balance', dataIndex: 'balance', key: 'balance' },
            {
              title: 'Mint',
              dataIndex: 'mint',
              key: 'mint',
              render: function (e, t) {
                return t.mint.equals(ze.TokenInstructions.SRM_MINT)
                  ? 'SRM'
                  : t.mint.equals(ze.TokenInstructions.MSRM_MINT)
                  ? 'MSRM'
                  : 'UNKNOWN';
              },
            },
          ],
          n = (Object(s.a)(e, 1)[0] || []).map(function (e, t) {
            return Object(Ne.a)(
              Object(Ne.a)({}, e),
              {},
              { index: t, key: e.pubkey.toBase58() },
            );
          });
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            Be.a,
            null,
            a.a.createElement(
              Ke.a,
              { span: 24 },
              a.a.createElement(qn, {
                dataSource: n,
                columns: t,
                pagination: !0,
                pageSize: 5,
                emptyLabel: 'No (M)SRM accounts',
              }),
            ),
          ),
          a.a.createElement(
            Be.a,
            { style: { marginTop: 8 } },
            a.a.createElement(
              Ke.a,
              null,
              a.a.createElement(
                Ae.a,
                null,
                'Holding SRM or MSRM makes you eligible for fee discounts:',
              ),
              a.a.createElement(Gn, null),
            ),
          ),
        );
      }
      function Gn() {
        var e = [
          { title: 'Fee Tier', dataIndex: 'feeTier', key: 'feeTier' },
          {
            title: 'Taker',
            dataIndex: 'taker',
            key: 'taker',
            render: function (e, t) {
              return g.format(Object(ze.getFeeRates)(t.feeTier).taker);
            },
          },
          {
            title: 'Maker',
            dataIndex: 'maker',
            key: 'maker',
            render: function (e, t) {
              return g.format(Object(ze.getFeeRates)(t.feeTier).maker);
            },
          },
          {
            title: 'Requirements',
            dataIndex: 'requirements',
            key: 'requirements',
            render: function (e, t) {
              return a.a.createElement(
                Ae.a,
                null,
                t.balance
                  ? '\u2265 '.concat(t.balance, ' ').concat(t.token)
                  : 'None',
              );
            },
          },
        ];
        return a.a.createElement(qn, {
          dataSource: [
            { feeTier: 0, taker: 0.0022, maker: -3e-4, token: '', balance: '' },
            {
              feeTier: 1,
              taker: 0.002,
              maker: -3e-4,
              token: 'SRM',
              balance: 100,
            },
            {
              feeTier: 2,
              taker: 0.0018,
              maker: -3e-4,
              token: 'SRM',
              balance: 1e3,
            },
            {
              feeTier: 3,
              taker: 0.0016,
              maker: -3e-4,
              token: 'SRM',
              balance: 1e4,
            },
            {
              feeTier: 4,
              taker: 0.0014,
              maker: -3e-4,
              token: 'SRM',
              balance: 1e5,
            },
            {
              feeTier: 5,
              taker: 0.0012,
              maker: -3e-4,
              token: 'SRM',
              balance: 1e6,
            },
            {
              feeTier: 6,
              taker: 0.001,
              maker: -5e-4,
              token: 'MSRM',
              balance: 1,
            },
          ].map(function (e) {
            return Object(Ne.a)(Object(Ne.a)({}, e), {}, { key: e.feeTier });
          }),
          columns: e,
        });
      }
      var Yn = Hn.a.TabPane;
      function Xn() {
        var e = Jt().market;
        return a.a.createElement(
          kn,
          { style: { flex: 1, paddingTop: 20 } },
          a.a.createElement(
            Hn.a,
            { defaultActiveKey: 'orders' },
            a.a.createElement(
              Yn,
              { tab: 'Open Orders', key: 'orders' },
              a.a.createElement(Zn, null),
            ),
            a.a.createElement(
              Yn,
              { tab: 'Recent Trade History', key: 'fills' },
              a.a.createElement(Jn, null),
            ),
            a.a.createElement(
              Yn,
              { tab: 'Balances', key: 'balances' },
              a.a.createElement($n, null),
            ),
            e && e.supportsSrmFeeDiscounts
              ? a.a.createElement(
                  Yn,
                  { tab: 'Fee discounts', key: 'fees' },
                  a.a.createElement(Qn, null),
                )
              : null,
          ),
        );
      }
      var Zn = function () {
          var e = (function () {
            var e = Jt(),
              t = e.market,
              n = e.marketName,
              r = $t(),
              a = Yt(),
              o = a.bidOrderbook,
              c = a.askOrderbook;
            return t && r && o && c
              ? t.filterForOpenOrders(o, c, [r]).map(function (e) {
                  return Object(Ne.a)(
                    Object(Ne.a)({}, e),
                    {},
                    { marketName: n, market: t },
                  );
                })
              : null;
          })();
          return a.a.createElement(Vn, { openOrders: e });
        },
        $n = function () {
          var e = dn();
          return a.a.createElement(Rn, { balances: e });
        },
        er = n(618);
      function tr(e) {
        var t,
          n,
          r,
          o = e.onClose,
          c = e.baseOrQuote,
          i = Jt(),
          l = i.market,
          u = i.baseCurrency,
          s = i.quoteCurrency,
          d = Oe(),
          m = d.providerName,
          p = d.providerUrl,
          f = rn(),
          b = nn();
        return (
          'base' === c
            ? ((t = null === l || void 0 === l ? void 0 : l.baseMintAddress),
              (n = f),
              (r = u))
            : 'quote' === c
            ? ((t = null === l || void 0 === l ? void 0 : l.quoteMintAddress),
              (n = b),
              (r = s))
            : (n = null),
          t
            ? a.a.createElement(
                ae.a,
                { title: r, visible: !!t, onOk: o, onCancel: o },
                a.a.createElement(
                  'div',
                  { style: { paddingTop: '20px' } },
                  a.a.createElement(
                    'p',
                    { style: { color: 'white' } },
                    'Mint address:',
                  ),
                  a.a.createElement(
                    'p',
                    { style: { color: 'rgba(255,255,255,0.5)' } },
                    t.toBase58(),
                  ),
                  a.a.createElement(
                    'div',
                    null,
                    a.a.createElement(
                      'p',
                      { style: { color: 'white' } },
                      'SPL Deposit address:',
                    ),
                    a.a.createElement(
                      'p',
                      { style: { color: 'rgba(255,255,255,0.5)' } },
                      n
                        ? n.pubkey.toBase58()
                        : a.a.createElement(
                            a.a.Fragment,
                            null,
                            'Visit',
                            ' ',
                            a.a.createElement(ne, { external: !0, to: p }, m),
                            ' ',
                            'to create an account for this mint',
                          ),
                    ),
                  ),
                ),
              )
            : null
        );
      }
      var nr = n(375);
      function rr(e) {
        var t,
          n = e.accounts,
          r = e.mint,
          o = e.label,
          c = Ht(),
          i = Object(s.a)(c, 2),
          l = i[0],
          u = i[1];
        t =
          r && r in l
            ? l[r]
            : n && (null === n || void 0 === n ? void 0 : n.length) > 0
            ? n[0].pubkey.toBase58()
            : void 0;
        return a.a.createElement(
          a.a.Fragment,
          null,
          o && a.a.createElement(Ke.a, { span: 8 }, 'Token account:'),
          a.a.createElement(
            Ke.a,
            { span: o ? 13 : 21 },
            a.a.createElement(
              Pe.a,
              {
                style: { width: '100%' },
                value: t,
                onSelect: function (e) {
                  if (r) {
                    var t = Object(Ne.a)({}, l);
                    (t[r] = e), u(t);
                  } else
                    re({
                      message: 'Error selecting token account',
                      description: 'Mint is undefined',
                      type: 'error',
                    });
                },
              },
              null === n || void 0 === n
                ? void 0
                : n.map(function (e) {
                    return a.a.createElement(
                      Pe.a.Option,
                      { key: e.pubkey.toBase58(), value: e.pubkey.toBase58() },
                      a.a.createElement(
                        Ae.a.Text,
                        { code: !0 },
                        o ? T(e.pubkey, 8) : e.pubkey.toBase58(),
                      ),
                    );
                  }),
            ),
          ),
          a.a.createElement(
            Ke.a,
            { span: 2, offset: 1 },
            a.a.createElement(oe.a, {
              shape: 'round',
              icon: a.a.createElement(nr.a, null),
              size: 'small',
              onClick: function () {
                return t && navigator.clipboard.writeText(t);
              },
            }),
          ),
        );
      }
      var ar = n(634);
      function or(e) {
        var t = e.title,
          n = e.address,
          r = e.shorten,
          o = void 0 !== r && r;
        return a.a.createElement(
          'div',
          null,
          t && a.a.createElement('p', { style: { color: 'white' } }, t),
          a.a.createElement(
            oe.a,
            {
              type: 'link',
              icon: a.a.createElement(ar.a, null),
              href: 'https://explorer.solana.com/address/' + n,
              target: '_blank',
              rel: 'noopener noreferrer',
              style: { cursor: 'pointer' },
            },
            o ? ''.concat(n.slice(0, 4), '...').concat(n.slice(-4)) : n,
          ),
        );
      }
      var cr,
        ir,
        lr,
        ur = n(233),
        sr = Object(je.c)(Be.a)(
          cr || (cr = Object(xe.a)(['\n  padding-bottom: 20px;\n'])),
        ),
        dr = je.c.p(
          ir ||
            (ir = Object(xe.a)([
              '\n  font-size: 12px;\n  padding-top: 6px;\n',
            ])),
        ),
        mr = Object(je.c)(oe.a)(
          lr ||
            (lr = Object(xe.a)([
              '\n  color: #b13098;\n  background-color: #212734;\n  border-width: 0px;\n',
            ])),
        );
      function pr() {
        var e = Jt(),
          t = e.baseCurrency,
          n = e.quoteCurrency,
          o = e.market,
          c = dn(),
          i = $t(!0),
          d = Q(),
          m = Oe(),
          p = m.providerUrl,
          f = m.providerName,
          b = m.wallet,
          v = m.connected,
          h = Object(r.useState)(''),
          g = Object(s.a)(h, 2),
          k = g[0],
          y = g[1],
          E = rn(),
          O = nn(),
          w = en(),
          x = Object(s.a)(w, 1)[0],
          j =
            c &&
            c.find(function (e) {
              return e.coin === t;
            }),
          T =
            c &&
            c.find(function (e) {
              return e.coin === n;
            }),
          A = S('autoSettleEnabled', !0),
          M = Object(s.a)(A, 1)[0],
          I = Object(r.useState)(0),
          C = Object(s.a)(I, 2),
          P = C[0],
          B = C[1];
        function K() {
          return F.apply(this, arguments);
        }
        function F() {
          return (F = Object(u.a)(
            l.a.mark(function e() {
              return l.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (b) {
                          e.next = 3;
                          break;
                        }
                        return (
                          re({
                            message: 'Wallet not connected',
                            description: 'wallet is undefined',
                            type: 'error',
                          }),
                          e.abrupt('return')
                        );
                      case 3:
                        if (o) {
                          e.next = 6;
                          break;
                        }
                        return (
                          re({
                            message: 'Error settling funds',
                            description: 'market is undefined',
                            type: 'error',
                          }),
                          e.abrupt('return')
                        );
                      case 6:
                        if (i) {
                          e.next = 9;
                          break;
                        }
                        return (
                          re({
                            message: 'Error settling funds',
                            description: 'Open orders account is undefined',
                            type: 'error',
                          }),
                          e.abrupt('return')
                        );
                      case 9:
                        if (E) {
                          e.next = 12;
                          break;
                        }
                        return (
                          re({
                            message: 'Error settling funds',
                            description: 'Open orders account is undefined',
                            type: 'error',
                          }),
                          e.abrupt('return')
                        );
                      case 12:
                        if (O) {
                          e.next = 15;
                          break;
                        }
                        return (
                          re({
                            message: 'Error settling funds',
                            description: 'Open orders account is undefined',
                            type: 'error',
                          }),
                          e.abrupt('return')
                        );
                      case 15:
                        return (
                          (e.prev = 15),
                          (e.next = 18),
                          He({
                            market: o,
                            openOrders: i,
                            connection: d,
                            wallet: b,
                            baseCurrencyAccount: E,
                            quoteCurrencyAccount: O,
                          })
                        );
                      case 18:
                        e.next = 23;
                        break;
                      case 20:
                        (e.prev = 20),
                          (e.t0 = e.catch(15)),
                          re({
                            message: 'Error settling funds',
                            description: e.t0.message,
                            type: 'error',
                          });
                      case 23:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[15, 20]],
              );
            }),
          )).apply(this, arguments);
        }
        hn(function () {
          var e = (function () {
            var e = Object(u.a)(
              l.a.mark(function e() {
                return l.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (b && o && i && E && O && M) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt('return');
                        case 2:
                          if (
                            (null === j || void 0 === j
                              ? void 0
                              : j.unsettled) ||
                            (null === T || void 0 === T ? void 0 : T.unsettled)
                          ) {
                            e.next = 4;
                            break;
                          }
                          return e.abrupt('return');
                        case 4:
                          if (!(Date.now() - P < 15e3)) {
                            e.next = 6;
                            break;
                          }
                          return e.abrupt('return');
                        case 6:
                          return (
                            (e.prev = 6),
                            console.log('Settling funds...'),
                            B(Date.now()),
                            (e.next = 11),
                            He({
                              market: o,
                              openOrders: i,
                              connection: d,
                              wallet: b,
                              baseCurrencyAccount: E,
                              quoteCurrencyAccount: O,
                            })
                          );
                        case 11:
                          e.next = 17;
                          break;
                        case 13:
                          return (
                            (e.prev = 13),
                            (e.t0 = e.catch(6)),
                            console.log(
                              'Error auto settling funds: ' + e.t0.message,
                            ),
                            e.abrupt('return')
                          );
                        case 17:
                          console.log('Finished settling funds.');
                        case 18:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[6, 13]],
                );
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          v &&
            (null === b || void 0 === b ? void 0 : b.autoApprove) &&
            M &&
            e();
        }, 1e3);
        var N = [
          [
            t,
            j,
            'base',
            null === o || void 0 === o ? void 0 : o.baseMintAddress.toBase58(),
          ],
          [
            n,
            T,
            'quote',
            null === o || void 0 === o ? void 0 : o.quoteMintAddress.toBase58(),
          ],
        ];
        return a.a.createElement(
          kn,
          { style: { flex: 1, paddingTop: 10 } },
          N.map(function (e, t) {
            var n = Object(s.a)(e, 4),
              r = n[0],
              o = n[1],
              c = n[2],
              i = n[3];
            return a.a.createElement(
              a.a.Fragment,
              { key: t },
              a.a.createElement(
                er.a,
                { style: { borderColor: 'white' } },
                r,
                ' ',
                i &&
                  a.a.createElement(
                    Fe.a,
                    {
                      content: a.a.createElement(or, { address: i }),
                      placement: 'bottomRight',
                      title: 'Token mint',
                      trigger: 'hover',
                    },
                    a.a.createElement(ur.a, { style: { color: '#b13098' } }),
                  ),
              ),
              v &&
                a.a.createElement(
                  sr,
                  { align: 'middle', style: { paddingBottom: 10 } },
                  a.a.createElement(rr, {
                    accounts:
                      null === x || void 0 === x
                        ? void 0
                        : x.filter(function (e) {
                            return e.effectiveMint.toBase58() === i;
                          }),
                    mint: i,
                    label: !0,
                  }),
                ),
              a.a.createElement(
                sr,
                {
                  align: 'middle',
                  justify: 'space-between',
                  style: { paddingBottom: 12 },
                },
                a.a.createElement(Ke.a, null, 'Wallet balance:'),
                a.a.createElement(Ke.a, null, o && o.wallet),
              ),
              a.a.createElement(
                sr,
                {
                  align: 'middle',
                  justify: 'space-between',
                  style: { paddingBottom: 12 },
                },
                a.a.createElement(Ke.a, null, 'Unsettled balance:'),
                a.a.createElement(Ke.a, null, o && o.unsettled),
              ),
              a.a.createElement(
                sr,
                { align: 'middle', justify: 'space-around' },
                a.a.createElement(
                  Ke.a,
                  { style: { width: 150 } },
                  a.a.createElement(
                    mr,
                    {
                      block: !0,
                      size: 'large',
                      onClick: function () {
                        return y(c);
                      },
                    },
                    'Deposit',
                  ),
                ),
                a.a.createElement(
                  Ke.a,
                  { style: { width: 150 } },
                  a.a.createElement(
                    mr,
                    { block: !0, size: 'large', onClick: K },
                    'Settle',
                  ),
                ),
              ),
              a.a.createElement(
                dr,
                null,
                'All deposits go to your',
                ' ',
                a.a.createElement(ne, { external: !0, to: p }, f),
                ' ',
                'wallet',
              ),
            );
          }),
          a.a.createElement(tr, {
            baseOrQuote: k,
            onClose: function () {
              return y('');
            },
          }),
        );
      }
      var fr,
        br,
        vr,
        hr,
        gr = n(229),
        kr = n(628),
        yr = n(624),
        Er = n(630),
        Or = Object(je.c)(oe.a)(
          fr ||
            (fr = Object(xe.a)([
              '\n  margin: 20px 0px 0px 0px;\n  background: #f23b69;\n  border-color: #f23b69;\n',
            ])),
        ),
        wr = Object(je.c)(oe.a)(
          br ||
            (br = Object(xe.a)([
              '\n  margin: 20px 0px 0px 0px;\n  background: #02bf76;\n  border-color: #02bf76;\n',
            ])),
        ),
        xr = { 0: '0%', 25: '25%', 50: '50%', 75: '75%', 100: '100%' };
      function jr(e) {
        var t = e.style,
          n = e.setChangeOrderRef,
          o = Object(r.useState)('buy'),
          c = Object(s.a)(o, 2),
          i = c[0],
          d = c[1],
          m = Jt(),
          p = m.baseCurrency,
          f = m.quoteCurrency,
          b = m.market,
          v = on(),
          h = an(),
          g = rn(),
          O = nn(),
          w = $t(!0),
          x = Oe(),
          j = x.wallet,
          S = x.connected,
          T = Q(),
          A = Qt();
        ln();
        var M = cn().storedFeeDiscountKey,
          I = Object(r.useState)(!1),
          C = Object(s.a)(I, 2),
          P = C[0],
          B = C[1],
          K = Object(r.useState)(!1),
          F = Object(s.a)(K, 2),
          N = F[0],
          z = F[1],
          _ = Object(r.useState)(void 0),
          q = Object(s.a)(_, 2),
          L = q[0],
          W = q[1],
          U = Object(r.useState)(void 0),
          V = Object(s.a)(U, 2),
          H = V[0],
          J = V[1],
          G = Object(r.useState)(void 0),
          Y = Object(s.a)(G, 2),
          X = Y[0],
          Z = Y[1],
          $ = Object(r.useState)(!1),
          ee = Object(s.a)($, 2),
          te = ee[0],
          ne = ee[1],
          ae = Object(r.useState)(0),
          oe = Object(s.a)(ae, 2),
          ce = oe[0],
          ie = oe[1],
          le =
            (h || 0) +
            ((w && b ? b.quoteSplSizeToNumber(w.quoteTokenFree) : 0) || 0),
          ue = v || 0,
          se =
            (null === b || void 0 === b ? void 0 : b.minOrderSize) &&
            E(b.minOrderSize),
          de =
            (null === b || void 0 === b ? void 0 : b.tickSize) && E(b.tickSize),
          me = null === j || void 0 === j ? void 0 : j.publicKey;
        Object(r.useEffect)(
          function () {
            n && n(fe);
          },
          [n],
        ),
          Object(r.useEffect)(
            function () {
              L && X && ve(ce);
            },
            [i],
          ),
          Object(r.useEffect)(
            function () {
              be();
            },
            [X, L],
          ),
          Object(r.useEffect)(
            function () {
              var e = (function () {
                var e = Object(u.a)(
                  l.a.mark(function e() {
                    var t, n;
                    return l.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (((e.prev = 0), j && me && b)) {
                                e.next = 4;
                                break;
                              }
                              return (
                                console.log('Skipping refreshing accounts'),
                                e.abrupt('return')
                              );
                            case 4:
                              return (
                                (t = at()),
                                console.log(
                                  'Refreshing accounts for '.concat(b.address),
                                ),
                                (e.next = 8),
                                null === b || void 0 === b
                                  ? void 0
                                  : b.findOpenOrdersAccountsForOwner(T, me)
                              );
                            case 8:
                              return (
                                (e.next = 10),
                                null === b || void 0 === b
                                  ? void 0
                                  : b.findBestFeeDiscountKey(T, me)
                              );
                            case 10:
                              (n = at()),
                                console.log(
                                  'Finished refreshing accounts for '
                                    .concat(b.address, ' after ')
                                    .concat(n - t),
                                ),
                                (e.next = 17);
                              break;
                            case 14:
                              (e.prev = 14),
                                (e.t0 = e.catch(0)),
                                console.log(
                                  'Encountered error when refreshing trading accounts: '.concat(
                                    e.t0,
                                  ),
                                );
                            case 17:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 14]],
                    );
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
              e();
              var t = setInterval(e, 3e4);
              return function () {
                return clearInterval(t);
              };
            },
            [b, T, j, me],
          );
        var pe = function (e) {
            if ((W(e), e)) {
              var t = X || A;
              if (t) {
                var n = e && y(e * t, se);
                J(n);
              } else J(void 0);
            } else J(void 0);
          },
          fe = function (e) {
            var t = e.size,
              n = e.price,
              r = t && y(t, se),
              a = n && y(n, de);
            r && pe(r), a && Z(a);
          },
          be = function () {
            var e = k('buy' === i ? le / (X || A || 1) : ue, se),
              t = Math.min(((L || 0) / e) * 100, 100);
            ie(t);
          },
          ve = function (e) {
            if (!X && A) {
              var t = de ? A.toFixed(de) : A;
              Z('number' === typeof t ? t : parseFloat(t));
            }
            var n;
            'buy' === i
              ? (X || A) && (n = ((le / (X || A || 1)) * e) / 100)
              : (n = (ue * e) / 100);
            var r = k(n, se);
            pe(r);
          };
        function he() {
          return ge.apply(this, arguments);
        }
        function ge() {
          return (ge = Object(u.a)(
            l.a.mark(function e() {
              return l.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (X) {
                          e.next = 6;
                          break;
                        }
                        return (
                          console.warn('Missing price'),
                          re({ message: 'Missing price', type: 'error' }),
                          e.abrupt('return')
                        );
                      case 6:
                        if (L) {
                          e.next = 10;
                          break;
                        }
                        return (
                          console.warn('Missing size'),
                          re({ message: 'Missing size', type: 'error' }),
                          e.abrupt('return')
                        );
                      case 10:
                        if ((ne(!0), (e.prev = 11), j)) {
                          e.next = 14;
                          break;
                        }
                        return e.abrupt('return', null);
                      case 14:
                        return (
                          (e.next = 16),
                          et({
                            side: i,
                            price: X,
                            size: L,
                            orderType: N ? 'ioc' : P ? 'postOnly' : 'limit',
                            market: b,
                            connection: T,
                            wallet: j,
                            baseCurrencyAccount:
                              null === g || void 0 === g ? void 0 : g.pubkey,
                            quoteCurrencyAccount:
                              null === O || void 0 === O ? void 0 : O.pubkey,
                            feeDiscountPubkey: M,
                          })
                        );
                      case 16:
                        R(Object(D.a)('getTokenAccounts', j, S)),
                          Z(void 0),
                          pe(void 0),
                          (e.next = 25);
                        break;
                      case 21:
                        (e.prev = 21),
                          (e.t0 = e.catch(11)),
                          console.warn(e.t0),
                          re({
                            message: 'Error placing order',
                            description: e.t0.message,
                            type: 'error',
                          });
                      case 25:
                        return (e.prev = 25), ne(!1), e.finish(25);
                      case 28:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[11, 21, 25, 28]],
              );
            }),
          )).apply(this, arguments);
        }
        return a.a.createElement(
          kn,
          {
            style: Object(Ne.a)(
              { display: 'flex', flexDirection: 'column' },
              t,
            ),
          },
          a.a.createElement(
            'div',
            { style: { flex: 1 } },
            a.a.createElement(
              gr.a.Group,
              {
                onChange: function (e) {
                  return d(e.target.value);
                },
                value: i,
                buttonStyle: 'solid',
                style: { marginBottom: 8, width: '100%' },
              },
              a.a.createElement(
                gr.a.Button,
                {
                  value: 'buy',
                  style: {
                    width: '50%',
                    textAlign: 'center',
                    background: 'buy' === i ? '#02bf76' : '',
                    borderColor: 'buy' === i ? '#02bf76' : '',
                  },
                },
                'BUY',
              ),
              a.a.createElement(
                gr.a.Button,
                {
                  value: 'sell',
                  style: {
                    width: '50%',
                    textAlign: 'center',
                    background: 'sell' === i ? '#F23B69' : '',
                    borderColor: 'sell' === i ? '#F23B69' : '',
                  },
                },
                'SELL',
              ),
            ),
            a.a.createElement(kr.a, {
              style: { textAlign: 'right', paddingBottom: 8 },
              addonBefore: a.a.createElement(
                'div',
                { style: { width: '30px' } },
                'Price',
              ),
              suffix: a.a.createElement(
                'span',
                { style: { fontSize: 10, opacity: 0.5 } },
                f,
              ),
              value: X,
              type: 'number',
              step: (null === b || void 0 === b ? void 0 : b.tickSize) || 1,
              onChange: function (e) {
                return Z(parseFloat(e.target.value));
              },
            }),
            a.a.createElement(
              kr.a.Group,
              { compact: !0, style: { paddingBottom: 8 } },
              a.a.createElement(kr.a, {
                style: { width: 'calc(50% + 30px)', textAlign: 'right' },
                addonBefore: a.a.createElement(
                  'div',
                  { style: { width: '30px' } },
                  'Size',
                ),
                suffix: a.a.createElement(
                  'span',
                  { style: { fontSize: 10, opacity: 0.5 } },
                  p,
                ),
                value: L,
                type: 'number',
                step:
                  (null === b || void 0 === b ? void 0 : b.minOrderSize) || 1,
                onChange: function (e) {
                  return pe(parseFloat(e.target.value));
                },
              }),
              a.a.createElement(kr.a, {
                style: { width: 'calc(50% - 30px)', textAlign: 'right' },
                suffix: a.a.createElement(
                  'span',
                  { style: { fontSize: 10, opacity: 0.5 } },
                  f,
                ),
                value: H,
                type: 'number',
                step:
                  (null === b || void 0 === b ? void 0 : b.minOrderSize) || 1,
                onChange: function (e) {
                  return (function (e) {
                    if ((J(e), e)) {
                      var t = X || A;
                      if (t) {
                        var n = e && y(e / t, se);
                        W(n);
                      } else W(void 0);
                    } else W(void 0);
                  })(parseFloat(e.target.value));
                },
              }),
            ),
            a.a.createElement(yr.a, {
              value: ce,
              tipFormatter: function (e) {
                return ''.concat(e, '%');
              },
              marks: xr,
              onChange: ve,
            }),
            a.a.createElement(
              'div',
              { style: { paddingTop: 18 } },
              'POST ',
              a.a.createElement(Er.a, {
                checked: P,
                onChange: function (e) {
                  e && z(!1), B(e);
                },
                style: { marginRight: 40 },
              }),
              'IOC ',
              a.a.createElement(Er.a, {
                checked: N,
                onChange: function (e) {
                  e && B(!1), z(e);
                },
              }),
            ),
          ),
          'buy' === i
            ? a.a.createElement(
                wr,
                {
                  disabled: !X || !L,
                  onClick: he,
                  block: !0,
                  type: 'primary',
                  size: 'large',
                  loading: te,
                },
                'Buy ',
                p,
              )
            : a.a.createElement(
                Or,
                {
                  disabled: !X || !L,
                  onClick: he,
                  block: !0,
                  type: 'primary',
                  size: 'large',
                  loading: te,
                },
                'Sell ',
                p,
              ),
        );
      }
      var Sr = je.c.div(
          vr || (vr = Object(xe.a)(['\n  color: rgba(255, 255, 255, 1);\n'])),
        ),
        Tr = Object(je.c)(Be.a)(
          hr ||
            (hr = Object(xe.a)([
              '\n  padding: 20px 0 14px;\n  color: #434a59;\n',
            ])),
        );
      function Ar(e) {
        var t = e.smallScreen,
          n = Jt(),
          r = n.baseCurrency,
          o = n.quoteCurrency,
          c = n.market,
          i = (function () {
            var e = Jt().market,
              t = null === e || void 0 === e ? void 0 : e.address.toBase58();
            function n() {
              return (n = Object(u.a)(
                l.a.mark(function e() {
                  return l.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (t) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt('return', null);
                        case 2:
                          return (e.next = 4), Ft.getRecentTrades(t);
                        case 4:
                          return e.abrupt('return', e.sent);
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              )).apply(this, arguments);
            }
            return q(
              function () {
                return n.apply(this, arguments);
              },
              Object(D.a)('getBonfidaTrades', t),
              { refreshInterval: 5e3 },
              !1,
            );
          })(),
          d = Object(s.a)(i, 2),
          m = d[0],
          p = d[1];
        return a.a.createElement(
          kn,
          {
            style: t
              ? { flex: 1 }
              : {
                  marginTop: '10px',
                  minHeight: '270px',
                  maxHeight: 'calc(100vh - 700px)',
                },
          },
          a.a.createElement(Sr, null, 'Recent Market trades'),
          a.a.createElement(
            Tr,
            null,
            a.a.createElement(Ke.a, { span: 8 }, 'Price (', o, ') '),
            a.a.createElement(
              Ke.a,
              { span: 8, style: { textAlign: 'right' } },
              'Size (',
              r,
              ')',
            ),
            a.a.createElement(
              Ke.a,
              { span: 8, style: { textAlign: 'right' } },
              'Time',
            ),
          ),
          !!m &&
            p &&
            a.a.createElement(
              'div',
              {
                style: {
                  marginRight: '-20px',
                  paddingRight: '5px',
                  overflowY: 'scroll',
                  maxHeight: t ? 'calc(100% - 75px)' : 'calc(100vh - 800px)',
                },
              },
              m.map(function (e, t) {
                return a.a.createElement(
                  Be.a,
                  { key: t, style: { marginBottom: 4 } },
                  a.a.createElement(
                    Ke.a,
                    {
                      span: 8,
                      style: {
                        color: 'buy' === e.side ? '#41C77A' : '#F23B69',
                      },
                    },
                    (null === c || void 0 === c ? void 0 : c.tickSize) &&
                      !isNaN(e.price)
                      ? Number(e.price).toFixed(E(c.tickSize))
                      : e.price,
                  ),
                  a.a.createElement(
                    Ke.a,
                    { span: 8, style: { textAlign: 'right' } },
                    (null === c || void 0 === c ? void 0 : c.minOrderSize) &&
                      !isNaN(e.size)
                      ? Number(e.size).toFixed(E(c.minOrderSize))
                      : e.size,
                  ),
                  a.a.createElement(
                    Ke.a,
                    {
                      span: 8,
                      style: { textAlign: 'right', color: '#434a59' },
                    },
                    e.time && new Date(e.time).toLocaleTimeString(),
                  ),
                );
              }),
            ),
        );
      }
      var Mr = n(279),
        Ir = n.n(Mr),
        Cr = n(364),
        Pr = n.n(Cr),
        Br = Ae.a.Title;
      function Kr(e) {
        var t = e.switchToLiveMarkets,
          n = (function () {
            var e = mn(),
              t = S('customMarkets', []),
              n = Object(s.a)(t, 1)[0];
            if (!e) return null;
            var r = [];
            return (
              e.forEach(function (e) {
                var t = e.market,
                  a = e.openOrdersList,
                  o = Dt(t, n),
                  c = o.baseCurrency,
                  i = o.quoteCurrency,
                  l = o.marketName;
                c &&
                  i &&
                  t &&
                  (a || []).forEach(function (e) {
                    var n =
                        (null === e || void 0 === e
                          ? void 0
                          : e.baseTokenTotal) &&
                        (null === e || void 0 === e
                          ? void 0
                          : e.baseTokenFree) &&
                        t.baseSplSizeToNumber(
                          e.baseTokenTotal.sub(e.baseTokenFree),
                        ),
                      a =
                        (null === e || void 0 === e
                          ? void 0
                          : e.quoteTokenTotal) &&
                        (null === e || void 0 === e
                          ? void 0
                          : e.quoteTokenFree) &&
                        t.baseSplSizeToNumber(
                          e.quoteTokenTotal.sub(e.quoteTokenFree),
                        ),
                      o =
                        (null === e || void 0 === e
                          ? void 0
                          : e.baseTokenFree) &&
                        t.baseSplSizeToNumber(e.baseTokenFree),
                      u =
                        (null === e || void 0 === e
                          ? void 0
                          : e.quoteTokenFree) &&
                        t.baseSplSizeToNumber(e.quoteTokenFree);
                    r.push({
                      marketName: l,
                      market: t,
                      coin: c,
                      key: ''.concat(l).concat(c),
                      orders: n,
                      unsettled: o,
                      openOrders: e,
                    }),
                      r.push({
                        marketName: l,
                        market: t,
                        coin: i,
                        key: ''.concat(l).concat(i),
                        orders: a,
                        unsettled: u,
                        openOrders: e,
                      });
                  });
              }),
              r
            );
          })(),
          r = (function () {
            var e = Oe(),
              t = e.connected,
              n = e.wallet,
              r = Wt().customMarkets,
              a = J(),
              o = mn(),
              c =
                o &&
                o.map(function (e) {
                  return e.market;
                }),
              i =
                c &&
                c
                  .filter(function (e) {
                    return !!e;
                  })
                  .map(function (e) {
                    return e.address.toBase58();
                  });
            function d() {
              return (d = Object(u.a)(
                l.a.mark(function e() {
                  var o;
                  return l.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (t && n) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt('return', null);
                        case 2:
                          if (c) {
                            e.next = 4;
                            break;
                          }
                          return e.abrupt('return', null);
                        case 4:
                          return (
                            console.log(
                              'refreshing getOpenOrdersForDeprecatedMarkets',
                            ),
                            (o = (function () {
                              var e = Object(u.a)(
                                l.a.mark(function e(t) {
                                  var o, c;
                                  return l.a.wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if (t) {
                                              e.next = 2;
                                              break;
                                            }
                                            return e.abrupt('return', null);
                                          case 2:
                                            return (
                                              (o = Dt(t, r)),
                                              (c = o.marketName),
                                              (e.prev = 3),
                                              console.log(
                                                'Fetching open orders for',
                                                c,
                                              ),
                                              (e.next = 7),
                                              t.loadOrdersForOwner(
                                                a,
                                                n.publicKey,
                                              )
                                            );
                                          case 7:
                                            return e.abrupt(
                                              'return',
                                              e.sent.map(function (e) {
                                                return Object(Ne.a)(
                                                  { marketName: c, market: t },
                                                  e,
                                                );
                                              }),
                                            );
                                          case 10:
                                            return (
                                              (e.prev = 10),
                                              (e.t0 = e.catch(3)),
                                              console.log(
                                                'Failed loading open orders',
                                                t.address.toBase58(),
                                                e.t0,
                                              ),
                                              re({
                                                message: 'Error loading open orders for deprecated '.concat(
                                                  c,
                                                ),
                                                description: e.t0.message,
                                                type: 'error',
                                              }),
                                              e.abrupt('return', null)
                                            );
                                          case 15:
                                          case 'end':
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    null,
                                    [[3, 10]],
                                  );
                                }),
                              );
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            })()),
                            (e.next = 8),
                            Promise.all(c.map(o))
                          );
                        case 8:
                          return e.abrupt(
                            'return',
                            e.sent
                              .filter(function (e) {
                                return !!e;
                              })
                              .flat(),
                          );
                        case 9:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              )).apply(this, arguments);
            }
            var m = Object(D.a)(
                'getOpenOrdersForDeprecatedMarkets',
                t,
                a,
                n,
                i && i.toString(),
              ),
              p = q(
                function () {
                  return d.apply(this, arguments);
                },
                m,
                { refreshInterval: Rt },
              ),
              f = Object(s.a)(p, 2),
              b = f[0],
              v = f[1];
            return (
              console.log('openOrders', b),
              {
                openOrders: b,
                loaded: v,
                refreshOpenOrders: function () {
                  return R(m);
                },
              }
            );
          })(),
          o = r.openOrders,
          c = r.loaded,
          i = r.refreshOpenOrders,
          d = _t().refresh,
          m = !o || o.length > 0,
          p =
            n &&
            n.filter(function (e) {
              var t = e.orders,
                n = e.unsettled;
              return t > 0 || n > 0;
            }),
          f = p && p.length > 0;
        return a.a.createElement(
          kn,
          null,
          a.a.createElement(
            Br,
            { level: 4, style: { color: 'rgba(255, 255, 255, 1)' } },
            'Migrate new markets',
          ),
          a.a.createElement(
            Ae.a,
            null,
            'Markets on older versions of the DEX or using Wrapped USDT are now deprecated. To migrate over to the new markets, please cancel your orders and settle your funds on old markets. To convert from Wrapped USDT to Native USDT use sollet.io.',
          ),
          a.a.createElement(
            'div',
            {
              style: {
                marginTop: 20,
                display: 'flex',
                justifyContent: 'center',
              },
            },
            a.a.createElement(
              oe.a,
              {
                onClick: function () {
                  return d(!0);
                },
              },
              a.a.createElement(Pr.a, null),
              ' Refresh data',
            ),
          ),
          n
            ? a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(
                  er.a,
                  null,
                  !m && a.a.createElement(Ir.a, null),
                  ' Cancel your orders',
                ),
                m
                  ? c
                    ? a.a.createElement(Vn, {
                        openOrders: o,
                        onCancelSuccess: function () {
                          setTimeout(function () {
                            d(), i();
                          }, 1e3);
                        },
                      })
                    : a.a.createElement(Te.a, { size: 'large' })
                  : null,
                a.a.createElement(
                  er.a,
                  null,
                  !f && a.a.createElement(Ir.a, null),
                  ' Settle your funds',
                ),
                f &&
                  a.a.createElement(Rn, {
                    balances: p,
                    hideWalletBalance: !0,
                    showMarket: !0,
                    onSettleSuccess: function () {
                      setTimeout(d, 1e3);
                    },
                  }),
                a.a.createElement(er.a, null, 'Switch to upgraded markets'),
                a.a.createElement(
                  'div',
                  { style: { display: 'flex', justifyContent: 'center' } },
                  a.a.createElement(
                    oe.a,
                    { onClick: t, disabled: f || m },
                    'Switch to new markets',
                  ),
                ),
              )
            : a.a.createElement(Te.a, { size: 'large' }),
        );
      }
      var Fr = n(635),
        Nr = n(100),
        zr = Ae.a.Text;
      function _r(e) {
        var t,
          n,
          o = e.visible,
          c = e.onAddCustomMarket,
          i = e.onClose,
          l = J(),
          u = Object(r.useState)(''),
          d = Object(s.a)(u, 2),
          p = d[0],
          f = d[1],
          v = Object(r.useState)(''),
          h = Object(s.a)(v, 2),
          g = h[0],
          k = h[1],
          y = Object(r.useState)(''),
          E = Object(s.a)(y, 2),
          O = E[0],
          w = E[1],
          x = Object(r.useState)(''),
          j = Object(s.a)(x, 2),
          S = j[0],
          T = j[1],
          A = Object(r.useState)(null),
          M = Object(s.a)(A, 2),
          I = M[0],
          C = M[1],
          P = Object(r.useState)(!1),
          B = Object(s.a)(P, 2),
          K = B[0],
          F = B[1],
          N = b(p),
          z = Y(N ? new m.PublicKey(p) : null),
          _ = Object(s.a)(z, 1)[0],
          q = _
            ? _.owner.toBase58()
            : ze.MARKETS.find(function (e) {
                return !e.deprecated;
              }).programId.toBase58();
        Object(r.useEffect)(
          function () {
            N && q
              ? (F(!0),
                ze.Market.load(l, new m.PublicKey(p), {}, new m.PublicKey(q))
                  .then(function (e) {
                    C(e);
                  })
                  .catch(function () {
                    R(), C(null);
                  })
                  .finally(function () {
                    return F(!1);
                  }))
              : R();
          },
          [l, p, q],
        );
        var R = function () {
            k(null), w(null), T(null);
          },
          L = ze.MARKETS.find(function (e) {
            return e.address.toBase58() === p && e.programId.toBase58() === q;
          }),
          D = ze.MARKETS.find(function (e) {
            return e.programId.toBase58() === q;
          }),
          W =
            (null === I || void 0 === I ? void 0 : I.baseMintAddress) &&
            (null ===
              (t = ze.TOKEN_MINTS.find(function (e) {
                return e.address.equals(I.baseMintAddress);
              })) || void 0 === t
              ? void 0
              : t.name),
          U =
            (null === I || void 0 === I ? void 0 : I.quoteMintAddress) &&
            (null ===
              (n = ze.TOKEN_MINTS.find(function (e) {
                return e.address.equals(I.quoteMintAddress);
              })) || void 0 === n
              ? void 0
              : n.name),
          V =
            !K &&
            !!I &&
            I.publicKey.toBase58() === p &&
            p &&
            q &&
            g &&
            (W || O) &&
            (U || S) &&
            N,
          H = function () {
            R(), C(null), f(null), i();
          };
        return a.a.createElement(
          ae.a,
          {
            title: 'Add custom market',
            visible: o,
            onOk: function () {
              if (V) {
                var e = { address: p, programId: q, name: g };
                W || (e.baseLabel = O), U || (e.quoteLabel = S), c(e), H();
              } else
                re({
                  message: 'Please fill in all fields with valid values',
                  type: 'error',
                });
            },
            okText: 'Add',
            onCancel: H,
            okButtonProps: { disabled: !V },
          },
          a.a.createElement(
            'div',
            null,
            N
              ? a.a.createElement(
                  a.a.Fragment,
                  null,
                  !I &&
                    !K &&
                    a.a.createElement(
                      Be.a,
                      { style: { marginBottom: 8 } },
                      a.a.createElement(
                        zr,
                        { type: 'danger' },
                        'Not a valid market',
                      ),
                    ),
                  I &&
                    L &&
                    a.a.createElement(
                      Be.a,
                      { style: { marginBottom: 8 } },
                      a.a.createElement(
                        zr,
                        { type: 'warning' },
                        'Market known: ',
                        L.name,
                      ),
                    ),
                  I &&
                    !D &&
                    a.a.createElement(
                      Be.a,
                      { style: { marginBottom: 8 } },
                      a.a.createElement(
                        zr,
                        { type: 'danger' },
                        'Warning: unknown DEX program',
                      ),
                    ),
                  I &&
                    D &&
                    D.deprecated &&
                    a.a.createElement(
                      Be.a,
                      { style: { marginBottom: 8 } },
                      a.a.createElement(
                        zr,
                        { type: 'warning' },
                        'Warning: deprecated DEX program',
                      ),
                    ),
                )
              : a.a.createElement(
                  a.a.Fragment,
                  null,
                  p &&
                    !N &&
                    a.a.createElement(
                      Be.a,
                      { style: { marginBottom: 8 } },
                      a.a.createElement(
                        zr,
                        { type: 'danger' },
                        'Invalid market ID',
                      ),
                    ),
                ),
            a.a.createElement(
              Be.a,
              { style: { marginBottom: 8 } },
              a.a.createElement(
                Ke.a,
                { span: 24 },
                a.a.createElement(kr.a, {
                  placeholder: 'Market Id',
                  value: p,
                  onChange: function (e) {
                    return f(e.target.value);
                  },
                  suffix: K ? a.a.createElement(Nr.a, null) : null,
                }),
              ),
            ),
            a.a.createElement(
              Be.a,
              { style: { marginBottom: 8, marginTop: 8 } },
              a.a.createElement(
                Ke.a,
                { span: 24 },
                a.a.createElement(kr.a, {
                  placeholder: 'Market Label',
                  disabled: !I,
                  value: g,
                  onChange: function (e) {
                    return k(e.target.value);
                  },
                }),
              ),
            ),
            a.a.createElement(
              Be.a,
              { gutter: [8], style: { marginBottom: 8 } },
              a.a.createElement(
                Ke.a,
                { span: 12 },
                a.a.createElement(kr.a, {
                  placeholder: 'Base label',
                  disabled: !I || W,
                  value: W || O,
                  onChange: function (e) {
                    return w(e.target.value);
                  },
                }),
                I &&
                  !W &&
                  a.a.createElement(
                    'div',
                    { style: { marginTop: 8 } },
                    a.a.createElement(
                      zr,
                      { type: 'warning' },
                      'Warning: unknown token',
                    ),
                  ),
              ),
              a.a.createElement(
                Ke.a,
                { span: 12 },
                a.a.createElement(kr.a, {
                  placeholder: 'Quote label',
                  disabled: !I || U,
                  value: U || S,
                  onChange: function (e) {
                    return T(e.target.value);
                  },
                }),
                I &&
                  !U &&
                  a.a.createElement(
                    'div',
                    { style: { marginTop: 8 } },
                    a.a.createElement(
                      zr,
                      { type: 'warning' },
                      'Warning: unknown token',
                    ),
                  ),
              ),
            ),
          ),
        );
      }
      var qr,
        Rr = n(282),
        Lr = Pe.a.Option,
        Dr = Pe.a.OptGroup,
        Wr = je.c.div(
          qr ||
            (qr = Object(xe.a)([
              '\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 16px 16px;\n  .borderNone .ant-select-selector {\n    border: none !important;\n  }\n',
            ])),
        );
      function Ur() {
        var e = Object(Ce.i)().marketAddress;
        Object(r.useEffect)(
          function () {
            e && localStorage.setItem('marketAddress', JSON.stringify(e));
          },
          [e],
        );
        var t = Object(Ce.g)();
        return a.a.createElement(
          Ut,
          {
            marketAddress: e,
            setMarketAddress: function (e) {
              t.push(Vt(e));
            },
          },
          a.a.createElement(Vr, null),
        );
      }
      function Vr() {
        var e = Jt(),
          t = e.market,
          n = e.marketName,
          o = e.customMarkets,
          c = e.setCustomMarkets,
          i = e.setMarketAddress,
          l = Nt.filter(function (e) {
            var t = e.name;
            return !e.deprecated && !'[]'.includes(t);
          }),
          u = Object(r.useState)(!1),
          d = Object(s.a)(u, 2),
          m = d[0],
          p = d[1],
          f = Object(r.useState)(!1),
          b = Object(s.a)(f, 2),
          v = b[0],
          h = b[1],
          g = mn(),
          k = Object(r.useState)({
            height: window.innerHeight,
            width: window.innerWidth,
          }),
          y = Object(s.a)(k, 2),
          E = y[0],
          O = y[1];
        Object(r.useEffect)(
          function () {
            document.title = n ? ''.concat(n, ' \u2014 Serum') : 'Serum';
          },
          [n],
        );
        var w = Object(r.useRef)();
        Object(r.useEffect)(function () {
          var e = function () {
            O({ height: window.innerHeight, width: window.innerWidth });
          };
          return (
            window.addEventListener('resize', e),
            function () {
              return window.removeEventListener('resize', e);
            }
          );
        }, []);
        var x = null === E || void 0 === E ? void 0 : E.width,
          j = {
            onChangeOrderRef: function (e) {
              return (w.current = e);
            },
            onPrice: Object(r.useCallback)(function (e) {
              return w.current && w.current({ price: e });
            }, []),
            onSize: Object(r.useCallback)(function (e) {
              return w.current && w.current({ size: e });
            }, []),
          },
          S = m
            ? a.a.createElement(Jr, {
                switchToLiveMarkets: function () {
                  return p(!1);
                },
              })
            : x < 1e3
            ? a.a.createElement(Yr, j)
            : x < 1450
            ? a.a.createElement(Gr, j)
            : a.a.createElement(Qr, j);
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(_r, {
            visible: v,
            onClose: function () {
              return h(!1);
            },
            onAddCustomMarket: function (e) {
              if (
                pn(o).some(function (t) {
                  return t.address.toBase58() === e.address;
                })
              )
                re({
                  message: 'A market with the given ID already exists',
                  type: 'error',
                });
              else {
                var t = [].concat(Object(M.a)(o), [e]);
                c(t), i(e.address);
              }
            },
          }),
          a.a.createElement(
            Wr,
            null,
            a.a.createElement(
              Be.a,
              {
                align: 'middle',
                style: { paddingLeft: 5, paddingRight: 5 },
                gutter: 16,
              },
              a.a.createElement(
                Ke.a,
                null,
                a.a.createElement(Hr, {
                  markets: l,
                  setHandleDeprecated: p,
                  placeholder: 'Select market',
                  customMarkets: o,
                  onDeleteCustomMarket: function (e) {
                    var t = o.filter(function (t) {
                      return t.address !== e;
                    });
                    c(t);
                  },
                }),
              ),
              t
                ? a.a.createElement(
                    Ke.a,
                    null,
                    a.a.createElement(
                      Fe.a,
                      {
                        content: a.a.createElement(or, {
                          address: t.publicKey.toBase58(),
                        }),
                        placement: 'bottomRight',
                        title: 'Market address',
                        trigger: 'click',
                      },
                      a.a.createElement(ur.a, { style: { color: '#b13098' } }),
                    ),
                  )
                : null,
              a.a.createElement(
                Ke.a,
                null,
                a.a.createElement(Fr.a, {
                  style: { color: '#b13098' },
                  onClick: function () {
                    return h(!0);
                  },
                }),
              ),
              g &&
                g.length > 0 &&
                a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(
                    Ke.a,
                    null,
                    a.a.createElement(
                      Ae.a,
                      null,
                      'You have unsettled funds on old markets! Please go through them to claim your funds.',
                    ),
                  ),
                  a.a.createElement(
                    Ke.a,
                    null,
                    a.a.createElement(
                      oe.a,
                      {
                        onClick: function () {
                          return p(!m);
                        },
                      },
                      m ? 'View new markets' : 'Handle old markets',
                    ),
                  ),
                ),
            ),
            S,
          ),
        );
      }
      function Hr(e) {
        var t,
          n,
          r = e.markets,
          o = e.placeholder,
          c = e.setHandleDeprecated,
          i = e.customMarkets,
          l = e.onDeleteCustomMarket,
          u = Jt(),
          s = u.market,
          d = u.setMarketAddress,
          m = function (e) {
            return e.split('/')[0];
          },
          p = function (e) {
            return e.split('/')[1];
          },
          f =
            null ===
              (t = pn(i).find(function (e) {
                return (
                  (null === s || void 0 === s ? void 0 : s.address) &&
                  e.address.equals(s.address)
                );
              })) ||
            void 0 === t ||
            null === (n = t.address) ||
            void 0 === n
              ? void 0
              : n.toBase58();
        return a.a.createElement(
          Pe.a,
          {
            showSearch: !0,
            size: 'large',
            style: { width: 200 },
            placeholder: o || 'Select a market',
            optionFilterProp: 'name',
            onSelect: function (e) {
              c(!1), d(e);
            },
            listHeight: 400,
            value: f,
            filterOption: function (e, t) {
              var n;
              return (
                (null === t ||
                void 0 === t ||
                null === (n = t.name) ||
                void 0 === n
                  ? void 0
                  : n.toLowerCase().indexOf(e.toLowerCase())) >= 0
              );
            },
          },
          i &&
            i.length > 0 &&
            a.a.createElement(
              Dr,
              { label: 'Custom' },
              i.map(function (e, t) {
                var n = e.address,
                  r = e.name;
                return a.a.createElement(
                  Lr,
                  {
                    value: n,
                    key: Object(Rr.a)(),
                    name: r,
                    style: {
                      padding: '10px',
                      backgroundColor: t % 2 === 0 ? 'rgb(39, 44, 61)' : null,
                    },
                  },
                  a.a.createElement(
                    Be.a,
                    null,
                    a.a.createElement(Ke.a, { flex: 'auto' }, r),
                    f !== n &&
                      a.a.createElement(
                        Ke.a,
                        null,
                        a.a.createElement(Wn.a, {
                          onClick: function (e) {
                            e.stopPropagation(),
                              e.nativeEvent.stopImmediatePropagation(),
                              l && l(n);
                          },
                        }),
                      ),
                  ),
                );
              }),
            ),
          a.a.createElement(
            Dr,
            { label: 'Markets' },
            r
              .sort(function (e, t) {
                return 'USDT' === p(e.name) && 'USDT' !== p(t.name)
                  ? -1
                  : 'USDT' !== p(e.name) && 'USDT' === p(t.name)
                  ? 1
                  : 0;
              })
              .sort(function (e, t) {
                return m(e.name) < m(t.name)
                  ? -1
                  : m(e.name) > m(t.name)
                  ? 1
                  : 0;
              })
              .map(function (e, t) {
                var n = e.address,
                  r = e.name,
                  o = e.deprecated;
                return a.a.createElement(
                  Lr,
                  {
                    value: n.toBase58(),
                    key: Object(Rr.a)(),
                    name: r,
                    style: {
                      padding: '10px',
                      backgroundColor: t % 2 === 0 ? 'rgb(39, 44, 61)' : null,
                    },
                  },
                  r,
                  ' ',
                  o ? ' (Deprecated)' : null,
                );
              }),
          ),
        );
      }
      var Jr = function (e) {
          var t = e.switchToLiveMarkets;
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              Be.a,
              null,
              a.a.createElement(
                Ke.a,
                { flex: 'auto' },
                a.a.createElement(Kr, { switchToLiveMarkets: t }),
              ),
            ),
          );
        },
        Qr = function (e) {
          var t = e.onChangeOrderRef,
            n = e.onPrice,
            r = e.onSize;
          return a.a.createElement(
            Be.a,
            { style: { minHeight: '900px', flexWrap: 'nowrap' } },
            a.a.createElement(
              Ke.a,
              { flex: 'auto', style: { height: '100%', display: 'flex' } },
              a.a.createElement(Xn, null),
            ),
            a.a.createElement(
              Ke.a,
              { flex: '360px', style: { height: '100%' } },
              a.a.createElement(Kn, { smallScreen: !1, onPrice: n, onSize: r }),
              a.a.createElement(Ar, { smallScreen: !1 }),
            ),
            a.a.createElement(
              Ke.a,
              {
                flex: '400px',
                style: {
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                },
              },
              a.a.createElement(jr, { setChangeOrderRef: t }),
              a.a.createElement(pr, null),
            ),
          );
        },
        Gr = function (e) {
          var t = e.onChangeOrderRef,
            n = e.onPrice,
            r = e.onSize;
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              Be.a,
              { style: { height: '900px' } },
              a.a.createElement(
                Ke.a,
                { flex: 'auto', style: { height: '100%', display: 'flex' } },
                a.a.createElement(Kn, {
                  smallScreen: !0,
                  depth: 13,
                  onPrice: n,
                  onSize: r,
                }),
              ),
              a.a.createElement(
                Ke.a,
                { flex: 'auto', style: { height: '100%', display: 'flex' } },
                a.a.createElement(Ar, { smallScreen: !0 }),
              ),
              a.a.createElement(
                Ke.a,
                {
                  flex: '400px',
                  style: {
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  },
                },
                a.a.createElement(jr, { setChangeOrderRef: t }),
                a.a.createElement(pr, null),
              ),
            ),
            a.a.createElement(
              Be.a,
              null,
              a.a.createElement(
                Ke.a,
                { flex: 'auto' },
                a.a.createElement(Xn, null),
              ),
            ),
          );
        },
        Yr = function (e) {
          var t = e.onChangeOrderRef,
            n = e.onPrice,
            r = e.onSize;
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              Be.a,
              null,
              a.a.createElement(
                Ke.a,
                { xs: 24, sm: 12, style: { height: '100%', display: 'flex' } },
                a.a.createElement(jr, {
                  style: { flex: 1 },
                  setChangeOrderRef: t,
                }),
              ),
              a.a.createElement(
                Ke.a,
                { xs: 24, sm: 12 },
                a.a.createElement(pr, null),
              ),
            ),
            a.a.createElement(
              Be.a,
              { style: { height: '500px' } },
              a.a.createElement(
                Ke.a,
                { xs: 24, sm: 12, style: { height: '100%', display: 'flex' } },
                a.a.createElement(Kn, {
                  smallScreen: !0,
                  onPrice: n,
                  onSize: r,
                }),
              ),
              a.a.createElement(
                Ke.a,
                { xs: 24, sm: 12, style: { height: '100%', display: 'flex' } },
                a.a.createElement(Ar, { smallScreen: !0 }),
              ),
            ),
            a.a.createElement(
              Be.a,
              null,
              a.a.createElement(
                Ke.a,
                { flex: 'auto' },
                a.a.createElement(Xn, null),
              ),
            ),
          );
        },
        Xr = n(106),
        Zr = n(227);
      function $r() {
        var e,
          t = Oe(),
          n = t.connected,
          r = t.wallet,
          o = t.select,
          c = t.connect,
          i = t.disconnect,
          l =
            (n &&
              (null === r ||
              void 0 === r ||
              null === (e = r.publicKey) ||
              void 0 === e
                ? void 0
                : e.toBase58())) ||
            '',
          u = a.a.createElement(
            Xr.a,
            null,
            n && a.a.createElement(or, { shorten: !0, address: l }),
            a.a.createElement(
              Xr.a.Item,
              { key: '3', onClick: o },
              'Change Wallet',
            ),
          );
        return a.a.createElement(
          Zr.a.Button,
          { onClick: n ? i : c, overlay: u },
          n ? 'Disconnect' : 'Connect',
        );
      }
      function ea() {
        var e = Oe().connected,
          t = (function () {
            var e = J(),
              t = Oe(),
              n = t.connected,
              a = t.wallet,
              o = Object(r.useState)(!1),
              c = Object(s.a)(o, 2),
              i = c[0],
              d = c[1],
              m = Object(r.useState)(0),
              p = Object(s.a)(m, 2),
              f = p[0],
              b = p[1],
              h = Object(r.useState)(null),
              g = Object(s.a)(h, 2),
              k = g[0],
              y = g[1],
              E = Object(r.useState)(0),
              O = Object(s.a)(E, 2),
              w = O[0],
              x = O[1];
            return (
              Object(r.useEffect)(
                function () {
                  n &&
                    a &&
                    (function () {
                      var t = Object(u.a)(
                        l.a.mark(function t() {
                          var n, r;
                          return l.a.wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    d(!1),
                                    (n = []),
                                    (r = (function () {
                                      var t = Object(u.a)(
                                        l.a.mark(function t(r) {
                                          var o, c;
                                          return l.a.wrap(
                                            function (t) {
                                              for (;;)
                                                switch ((t.prev = t.next)) {
                                                  case 0:
                                                    return (
                                                      (t.next = 2),
                                                      v(1e3 * Math.random())
                                                    );
                                                  case 2:
                                                    return (
                                                      (t.prev = 2),
                                                      (t.next = 5),
                                                      ze.Market.load(
                                                        e,
                                                        r.address,
                                                        void 0,
                                                        r.programId,
                                                      )
                                                    );
                                                  case 5:
                                                    return (
                                                      (o = t.sent),
                                                      (t.next = 8),
                                                      o.loadOrdersForOwner(
                                                        e,
                                                        null === a ||
                                                          void 0 === a
                                                          ? void 0
                                                          : a.publicKey,
                                                        3e4,
                                                      )
                                                    );
                                                  case 8:
                                                    (c = t.sent),
                                                      n.push({
                                                        orders: c,
                                                        marketAddress: r.address.toBase58(),
                                                      }),
                                                      (t.next = 15);
                                                    break;
                                                  case 12:
                                                    (t.prev = 12),
                                                      (t.t0 = t.catch(2)),
                                                      console.warn(
                                                        'Error loading open order '
                                                          .concat(r.name, ' - ')
                                                          .concat(t.t0),
                                                      );
                                                  case 15:
                                                  case 'end':
                                                    return t.stop();
                                                }
                                            },
                                            t,
                                            null,
                                            [[2, 12]],
                                          );
                                        }),
                                      );
                                      return function (e) {
                                        return t.apply(this, arguments);
                                      };
                                    })()),
                                    (t.next = 5),
                                    Promise.all(
                                      Nt.map(function (e) {
                                        return r(e);
                                      }),
                                    )
                                  );
                                case 5:
                                  y(n), x(new Date().getTime()), d(!0);
                                case 8:
                                case 'end':
                                  return t.stop();
                              }
                          }, t);
                        }),
                      );
                      return function () {
                        return t.apply(this, arguments);
                      };
                    })()();
                },
                [e, n, a, f],
              ),
              {
                openOrders: k,
                loaded: i,
                refreshOpenOrders: function () {
                  new Date().getTime() - w > 1e4
                    ? b(function (e) {
                        return e + 1;
                      })
                    : console.log('not refreshing');
                },
              }
            );
          })(),
          n = t.openOrders,
          o = t.loaded,
          c = t.refreshOpenOrders,
          i = fn(),
          d = Object.fromEntries(
            i.map(function (e) {
              return [e.address.toBase58(), e.name];
            }),
          ),
          m = zt(),
          p = Object(s.a)(m, 1)[0],
          f = Object.fromEntries(
            (p || []).map(function (e) {
              return [e.market.address.toBase58(), e.market];
            }),
          ),
          b = (n || [])
            .map(function (e) {
              return e.orders.map(function (t) {
                return Object(Ne.a)(
                  {
                    marketName: d[e.marketAddress],
                    market: f[e.marketAddress],
                  },
                  t,
                );
              });
            })
            .flat();
        return e
          ? a.a.createElement(
              kn,
              { style: { flex: 1, paddingTop: 10 } },
              a.a.createElement(oe.a, { onClick: c, loading: !o }, 'Refresh'),
              a.a.createElement(Vn, {
                openOrders: b,
                pageSize: 25,
                loading: !o,
                onCancelSuccess: c,
                marketFilter: !0,
              }),
            )
          : a.a.createElement(
              Be.a,
              { justify: 'center', style: { marginTop: '10%' } },
              a.a.createElement($r, null),
            );
      }
      function ta(e) {
        var t = e.walletBalances,
          n = J(),
          o = Oe(),
          c = o.wallet,
          i = o.connected,
          d = Ht(),
          p = Object(s.a)(d, 1)[0],
          f = en(),
          b = Object(s.a)(f, 2),
          v = b[0],
          h = b[1],
          g = zt(),
          k = Object(s.a)(g, 2),
          y = k[0],
          E = k[1],
          O = Object(r.useState)(!1),
          w = Object(s.a)(O, 2),
          x = w[0],
          j = w[1];
        function S() {
          return (S = Object(u.a)(
            l.a.mark(function e() {
              return l.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((j(!0), (e.prev = 1), c)) {
                          e.next = 5;
                          break;
                        }
                        return (
                          re({
                            message: 'Wallet not connected',
                            description: 'Wallet not connected',
                            type: 'error',
                          }),
                          e.abrupt('return')
                        );
                      case 5:
                        if (v && h) {
                          e.next = 8;
                          break;
                        }
                        return (
                          re({
                            message: 'Error settling funds',
                            description: 'TokenAccounts not connected',
                            type: 'error',
                          }),
                          e.abrupt('return')
                        );
                      case 8:
                        if (y && E) {
                          e.next = 11;
                          break;
                        }
                        return (
                          re({
                            message: 'Error settling funds',
                            description: 'Markets not connected',
                            type: 'error',
                          }),
                          e.abrupt('return')
                        );
                      case 11:
                        return (
                          (e.next = 13),
                          Qe({
                            connection: n,
                            tokenAccounts: v,
                            selectedTokenAccounts: p,
                            wallet: c,
                            markets: y.map(function (e) {
                              return e.market;
                            }),
                          })
                        );
                      case 13:
                        e.next = 18;
                        break;
                      case 15:
                        (e.prev = 15),
                          (e.t0 = e.catch(1)),
                          re({
                            message: 'Error settling funds',
                            description: e.t0.message,
                            type: 'error',
                          });
                      case 18:
                        return (e.prev = 18), j(!1), e.finish(18);
                      case 21:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 15, 18, 21]],
              );
            }),
          )).apply(this, arguments);
        }
        var A = [
          {
            title: 'Coin',
            key: 'coin',
            width: '20%',
            render: function (e) {
              return a.a.createElement(
                Be.a,
                { align: 'middle' },
                a.a.createElement(
                  'a',
                  {
                    href: 'https://explorer.solana.com/address/'.concat(e.mint),
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  e.coin || T(new m.PublicKey(e.mint)),
                ),
              );
            },
          },
          {
            title: 'Wallet Balance',
            dataIndex: 'walletBalance',
            key: 'walletBalance',
            width: '20%',
          },
          {
            title: 'Open orders total balances',
            dataIndex: 'openOrdersTotal',
            key: 'openOrdersTotal',
            width: '20%',
          },
          {
            title: 'Unsettled balances',
            dataIndex: 'openOrdersFree',
            key: 'openOrdersFree',
            width: '20%',
          },
          {
            title: 'Selected token account',
            key: 'selectTokenAccount',
            width: '20%',
            render: function (e) {
              return a.a.createElement(
                Be.a,
                { align: 'middle', style: { width: '430px' } },
                a.a.createElement(rr, {
                  accounts:
                    null === v || void 0 === v
                      ? void 0
                      : v.filter(function (t) {
                          return t.effectiveMint.toBase58() === e.mint;
                        }),
                  mint: e.mint,
                }),
              );
            },
          },
        ];
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(qn, {
            emptyLabel: 'No balances',
            dataSource: t,
            columns: A,
            pagination: !1,
          }),
          i &&
            a.a.createElement(
              oe.a,
              {
                onClick: function () {
                  return S.apply(this, arguments);
                },
                loading: x,
              },
              'Settle all funds',
            ),
        );
      }
      var na = Hn.a.TabPane;
      function ra() {
        var e = (function () {
            var e = en(),
              t = Object(s.a)(e, 1)[0],
              n = Oe().connected,
              r = Kt(),
              a = Object(s.a)(r, 2),
              o = a[0],
              c = a[1];
            if (!n || !c) return [];
            var i,
              l = {},
              u = Object(d.a)(t || []);
            try {
              for (u.s(); !(i = u.n()).done; ) {
                var m = i.value;
                if (m.account) {
                  var p = void 0;
                  (p = m.effectiveMint.equals(Le.WRAPPED_SOL_MINT)
                    ? {
                        mint: Le.WRAPPED_SOL_MINT,
                        owner: m.pubkey,
                        amount: m.account.lamports,
                      }
                    : jt(m.account.data)).mint.toBase58() in l ||
                    (l[p.mint.toBase58()] = 0);
                  var b = o && o[p.mint.toBase58()],
                    v = O(
                      new f.a(p.amount),
                      w(
                        (null === b || void 0 === b ? void 0 : b.decimals) || 0,
                      ),
                    );
                  l[p.mint.toBase58()] += v;
                }
              }
            } catch (h) {
              u.e(h);
            } finally {
              u.f();
            }
            return Object.entries(l).map(function (e) {
              var t = Object(s.a)(e, 2);
              return { mint: t[0], balance: t[1] };
            });
          })(),
          t = Bt(),
          n = un(),
          r = (e || []).map(function (e) {
            var r,
              a = {
                coin: t[e.mint],
                mint: e.mint,
                walletBalance: e.balance,
                openOrdersFree: 0,
                openOrdersTotal: 0,
              },
              o = Object(d.a)(n[e.mint] || []);
            try {
              for (o.s(); !(r = o.n()).done; ) {
                var c = r.value;
                (a.openOrdersFree += c.free), (a.openOrdersTotal += c.total);
              }
            } catch (i) {
              o.e(i);
            } finally {
              o.f();
            }
            return a;
          });
        return a.a.createElement(
          kn,
          { style: { flex: 1, paddingTop: 10 } },
          a.a.createElement(
            Hn.a,
            { defaultActiveKey: 'walletBalances' },
            a.a.createElement(
              na,
              { tab: 'Wallet Balances', key: 'walletBalances' },
              a.a.createElement(ta, { walletBalances: r }),
            ),
          ),
        );
      }
      var aa,
        oa,
        ca,
        ia = n(636),
        la = Pe.a.Option,
        ua = Ae.a.Title,
        sa = Object(je.c)(oe.a)(
          aa ||
            (aa = Object(xe.a)([
              '\n  color: #b13098;\n  background-color: #212734;\n  border-width: 0px;\n',
            ])),
        ),
        da = Object(je.c)(oe.a)(
          oa ||
            (oa = Object(xe.a)([
              '\n  background: #02bf76;\n  border-color: #02bf76;\n',
            ])),
        );
      function ma() {
        var e = Oe(),
          t = e.connected,
          n = e.wallet,
          o = Wt().customMarkets,
          c = pn(o),
          i = Object(r.useState)(null),
          l = Object(s.a)(i, 2),
          u = l[0],
          d = l[1],
          m = Object(r.useState)(void 0),
          p = Object(s.a)(m, 2),
          f = p[0],
          b = p[1],
          v = Object(r.useState)(void 0),
          h = Object(s.a)(v, 2),
          g = h[0],
          k = h[1],
          y = Object(r.useState)(void 0),
          E = Object(s.a)(y, 2),
          O = E[0],
          w = E[1],
          x = Object.fromEntries(
            c.map(function (e) {
              return [e.name, e];
            }),
          ),
          j = new Map();
        Object.keys(x).forEach(function (e) {
          var t = e.split('/'),
            n = Object(s.a)(t, 2),
            r = n[0],
            a = n[1];
          j.has(r)
            ? j.set(r, new Set([].concat(Object(M.a)(j.get(r) || []), [a])))
            : j.set(r, new Set([a])),
            j.has(a)
              ? j.set(a, new Set([].concat(Object(M.a)(j.get(a) || []), [r])))
              : j.set(a, new Set([r]));
        });
        return a.a.createElement(
          kn,
          { style: { maxWidth: 500 } },
          a.a.createElement(ua, { level: 3 }, 'Convert'),
          !t &&
            a.a.createElement(
              Be.a,
              { justify: 'center' },
              a.a.createElement(Ke.a, null, a.a.createElement($r, null)),
            ),
          j &&
            t &&
            a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(
                Be.a,
                { style: { marginBottom: 8 } },
                a.a.createElement(
                  Ke.a,
                  null,
                  a.a.createElement(
                    Pe.a,
                    {
                      style: { minWidth: 300 },
                      placeholder: 'Select a token',
                      value: f,
                      onChange: function (e) {
                        b(e), k(void 0);
                      },
                    },
                    Array.from(j.keys()).map(function (e) {
                      return a.a.createElement(la, { value: e, key: e }, e);
                    }),
                  ),
                ),
              ),
              f &&
                a.a.createElement(
                  Be.a,
                  { style: { marginBottom: 8 } },
                  a.a.createElement(
                    Ke.a,
                    null,
                    a.a.createElement(
                      Pe.a,
                      {
                        style: { minWidth: 300 },
                        value: g,
                        onChange: function (e) {
                          var t = c
                            .filter(function (e) {
                              return !e.deprecated;
                            })
                            .find(function (t) {
                              return (
                                t.name === ''.concat(f, '/').concat(e) ||
                                t.name === ''.concat(e, '/').concat(f)
                              );
                            });
                          if (!t)
                            return (
                              console.warn(
                                'Could not find market info for market names '
                                  .concat(f, '/')
                                  .concat(e, ' or ')
                                  .concat(e, '/')
                                  .concat(f),
                              ),
                              void re({
                                message: 'Invalid market',
                                type: 'error',
                              })
                            );
                          d(t.address.toBase58()), k(e);
                        },
                      },
                      Object(M.a)(j.get(f) || []).map(function (e) {
                        return a.a.createElement(la, { value: e, key: e }, e);
                      }),
                    ),
                  ),
                ),
              f &&
                g &&
                a.a.createElement(
                  Ut,
                  { marketAddress: u, setMarketAddress: d },
                  a.a.createElement(pa, {
                    size: O,
                    setSize: w,
                    fromToken: f,
                    toToken: g,
                    wallet: n,
                    customMarkets: o,
                  }),
                ),
            ),
        );
      }
      function pa(e) {
        var t = e.size,
          n = e.setSize,
          o = e.fromToken,
          c = e.toToken,
          i = e.wallet,
          d = e.customMarkets,
          m = Jt().market,
          p = en(),
          f = Object(s.a)(p, 1)[0],
          b = dn(),
          v = Object(r.useState)(),
          h = Object(s.a)(v, 2),
          g = h[0],
          y = h[1],
          O = Object(r.useState)(),
          w = Object(s.a)(O, 2),
          x = w[0],
          j = w[1],
          S = cn().storedFeeDiscountKey,
          T = J(),
          A = Q(),
          M = Object(r.useState)(!1),
          I = Object(s.a)(M, 2),
          C = I[0],
          P = I[1],
          B = function (e) {
            var t = Dt(e, d).marketName;
            if (!t)
              throw Error(
                'Cannot determine if coin is quote or base because marketName is missing',
              );
            var n = t.split('/'),
              r = Object(s.a)(n, 1)[0];
            return o === r;
          },
          K = (function () {
            var e = Object(u.a)(
              l.a.mark(function e() {
                var n, r, a, o, c, u, d, p, b, v, h, g;
                return l.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (m) {
                            e.next = 4;
                            break;
                          }
                          return (
                            console.warn(
                              'Market is null when attempting convert.',
                            ),
                            re({ message: 'Invalid market', type: 'error' }),
                            e.abrupt('return')
                          );
                        case 4:
                          (n = tn(
                            f,
                            null === m || void 0 === m
                              ? void 0
                              : m.baseMintAddress,
                          )),
                            (r = tn(
                              f,
                              null === m || void 0 === m
                                ? void 0
                                : m.quoteMintAddress,
                            )),
                            (e.prev = 6),
                            (a = B(m) ? 'sell' : 'buy'),
                            (e.next = 15);
                          break;
                        case 10:
                          return (
                            (e.prev = 10),
                            (e.t0 = e.catch(6)),
                            console.warn(e.t0),
                            re({
                              message: 'Error placing order',
                              description: e.t0.message,
                              type: 'error',
                            }),
                            e.abrupt('return')
                          );
                        case 15:
                          return (
                            (o =
                              'buy' === a ? m._decoded.asks : m._decoded.bids),
                            (e.next = 18),
                            T.getAccountInfo(o)
                          );
                        case 18:
                          if (
                            null === (c = e.sent) || void 0 === c
                              ? void 0
                              : c.data
                          ) {
                            e.next = 22;
                            break;
                          }
                          return (
                            re({
                              message: 'Invalid orderbook data',
                              type: 'error',
                            }),
                            e.abrupt('return')
                          );
                        case 22:
                          if (
                            ((u = ze.Orderbook.decode(m, c.data)),
                            (d =
                              u &&
                              u.getL2(1).map(function (e) {
                                return Object(s.a)(e, 1)[0];
                              })),
                            (p = Object(s.a)(d, 1)),
                            p[0])
                          ) {
                            e.next = 27;
                            break;
                          }
                          return (
                            re({
                              message: 'No best price found',
                              type: 'error',
                            }),
                            e.abrupt('return')
                          );
                        case 27:
                          if (t) {
                            e.next = 30;
                            break;
                          }
                          return (
                            re({
                              message: 'Size not specified',
                              type: 'error',
                            }),
                            e.abrupt('return')
                          );
                        case 30:
                          if (
                            ((b = E(m.tickSize)),
                            (v = bn(u, t, b)),
                            (h = E(m.minOrderSize)),
                            (g = k('sell' === a ? t : t / v, h)),
                            P(!0),
                            (e.prev = 36),
                            i)
                          ) {
                            e.next = 39;
                            break;
                          }
                          return e.abrupt('return', null);
                        case 39:
                          return (
                            (e.next = 41),
                            et({
                              side: a,
                              price: v,
                              size: g,
                              orderType: 'ioc',
                              market: m,
                              connection: A,
                              wallet: i,
                              baseCurrencyAccount:
                                null === n || void 0 === n ? void 0 : n.pubkey,
                              quoteCurrencyAccount:
                                null === r || void 0 === r ? void 0 : r.pubkey,
                              feeDiscountPubkey: S,
                            })
                          );
                        case 41:
                          e.next = 47;
                          break;
                        case 43:
                          (e.prev = 43),
                            (e.t1 = e.catch(36)),
                            console.warn(e.t1),
                            re({
                              message: 'Error placing order',
                              description: e.t1.message,
                              type: 'error',
                            });
                        case 47:
                          return (e.prev = 47), P(!1), e.finish(47);
                        case 50:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [
                    [6, 10],
                    [36, 43, 47, 50],
                  ],
                );
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          F = (function () {
            var e = Object(u.a)(
              l.a.mark(function e() {
                var n, r, a, o, c, i, u, d;
                return l.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (n = B(m) ? 'sell' : 'buy'),
                            (r =
                              'buy' === n ? m._decoded.asks : m._decoded.bids),
                            (e.next = 5),
                            T.getAccountInfo(r)
                          );
                        case 5:
                          if (
                            (null === (a = e.sent) || void 0 === a
                              ? void 0
                              : a.data) &&
                            m
                          ) {
                            e.next = 8;
                            break;
                          }
                          return e.abrupt('return', [null, null]);
                        case 8:
                          if (
                            ((o = ze.Orderbook.decode(m, a.data)),
                            (c =
                              o &&
                              o.getL2(1).map(function (e) {
                                return Object(s.a)(e, 1)[0];
                              })),
                            (i = Object(s.a)(c, 1)),
                            i[0] && t)
                          ) {
                            e.next = 12;
                            break;
                          }
                          return e.abrupt('return', [null, null]);
                        case 12:
                          if (
                            ((u = E(m.tickSize)),
                            (d = vn(o, t, u)),
                            'buy' !== n)
                          ) {
                            e.next = 18;
                            break;
                          }
                          return e.abrupt('return', [d.toFixed(6), 1]);
                        case 18:
                          return e.abrupt('return', [1, d.toFixed(6)]);
                        case 19:
                          e.next = 25;
                          break;
                        case 21:
                          return (
                            (e.prev = 21),
                            (e.t0 = e.catch(0)),
                            console.log('Got error '.concat(e.t0)),
                            e.abrupt('return', [null, null])
                          );
                        case 25:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 21]],
                );
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        Object(r.useEffect)(
          function () {
            F().then(function (e) {
              var t = Object(s.a)(e, 2),
                n = t[0],
                r = t[1];
              y(n || void 0), j(r || void 0);
            });
          },
          [null === m || void 0 === m ? void 0 : m.address.toBase58(), t],
        );
        var N = m && t && t > 0,
          z = b.find(function (e) {
            return e.coin === o;
          }),
          _ =
            0.99 *
            (((null === z || void 0 === z ? void 0 : z.unsettled) || 0) +
              ((null === z || void 0 === z ? void 0 : z.wallet) || 0));
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            Be.a,
            { style: { marginBottom: 8 } },
            a.a.createElement(
              Ke.a,
              null,
              a.a.createElement(kr.a, {
                style: { minWidth: 300 },
                addonBefore: 'Size ('.concat(o, ')'),
                placeholder: 'Size',
                value: null === t ? void 0 : t,
                type: 'number',
                onChange: function (e) {
                  return n(parseFloat(e.target.value) || void 0);
                },
              }),
            ),
          ),
          a.a.createElement(
            Be.a,
            { gutter: 12, style: { marginBottom: 8 } },
            a.a.createElement(
              Ke.a,
              { span: 12 },
              a.a.createElement(
                sa,
                {
                  block: !0,
                  size: 'large',
                  onClick: function () {
                    return n(k(_, 4));
                  },
                },
                'Max: ',
                _.toFixed(4),
              ),
            ),
            a.a.createElement(
              Ke.a,
              { span: 12 },
              a.a.createElement(
                da,
                {
                  block: !0,
                  type: 'primary',
                  size: 'large',
                  loading: C,
                  onClick: K,
                  disabled: !N,
                },
                'Convert',
              ),
            ),
          ),
          N &&
            a.a.createElement(
              Be.a,
              { align: 'middle', justify: 'center' },
              a.a.createElement(Ke.a, null, g, ' ', o),
              a.a.createElement(
                Ke.a,
                { offset: 1 },
                a.a.createElement(ia.a, null),
              ),
              a.a.createElement(Ke.a, { offset: 1 }, x, ' ', c),
            ),
        );
      }
      var fa = je.c.div(
        ca ||
          (ca = Object(xe.a)([
            '\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 16px 16px;\n  .borderNone .ant-select-selector {\n    border: none !important;\n  }\n',
          ])),
      );
      function ba() {
        var e = S(
            'marketAddress',
            null === Lt || void 0 === Lt ? void 0 : Lt.address.toBase58(),
          ),
          t = Object(s.a)(e, 2),
          n = t[0],
          r = t[1];
        return a.a.createElement(
          fa,
          { style: { flex: 1, paddingTop: 10 } },
          a.a.createElement(
            Be.a,
            { justify: 'center' },
            a.a.createElement(
              Ke.a,
              null,
              a.a.createElement(
                Ut,
                { marketAddress: n, setMarketAddress: r },
                a.a.createElement(ma, null),
              ),
            ),
          ),
        );
      }
      var va = n(619),
        ha = n(637),
        ga = n(365),
        ka = n.n(ga),
        ya = a.a.createContext(null);
      function Ea(e) {
        var t = e.children,
          n = S('autoSettleEnabled', !0),
          o = Object(s.a)(n, 2),
          c = o[0],
          i = o[1],
          m = en(),
          p = Object(s.a)(m, 1)[0],
          f = Oe(),
          b = f.connected,
          h = f.wallet,
          g = fn(),
          k = Object(r.useState)(!1),
          y = Object(s.a)(k, 2),
          E = y[0],
          O = y[1],
          w = Object(r.useState)(new Map()),
          x = Object(s.a)(w, 2),
          j = x[0],
          T = x[1],
          A = function (e, t) {
            T(function (n) {
              return new Map(n).set(e, t);
            });
          },
          I = J();
        return (
          hn(function () {
            var e = (function () {
              var e = Object(u.a)(
                l.a.mark(function e() {
                  return l.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (h) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt('return');
                          case 2:
                            return (
                              (e.prev = 2),
                              console.log('Settling funds...'),
                              (e.next = 6),
                              Qe({
                                connection: I,
                                wallet: h,
                                tokenAccounts: p || [],
                                markets: Object(M.a)(j.values()),
                              })
                            );
                          case 6:
                            e.next = 12;
                            break;
                          case 8:
                            return (
                              (e.prev = 8),
                              (e.t0 = e.catch(2)),
                              console.log(
                                'Error auto settling funds: ' + e.t0.message,
                              ),
                              e.abrupt('return')
                            );
                          case 12:
                            console.log('Finished settling funds.');
                          case 13:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 8]],
                  );
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            b &&
              (null === h || void 0 === h ? void 0 : h.autoApprove) &&
              c &&
              e();
          }, 2e4),
          hn(function () {
            var e = (function () {
              var e = Object(u.a)(
                l.a.mark(function e() {
                  var t, n, r, a;
                  return l.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (h) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt('return');
                          case 2:
                            O(!0), (t = Object(d.a)(g)), (e.prev = 4), t.s();
                          case 6:
                            if ((n = t.n()).done) {
                              e.next = 24;
                              break;
                            }
                            if (((r = n.value), !j.has(r.address.toString()))) {
                              e.next = 10;
                              break;
                            }
                            return e.abrupt('continue', 22);
                          case 10:
                            return (
                              (e.prev = 10),
                              (e.next = 13),
                              ze.Market.load(I, r.address, {}, r.programId)
                            );
                          case 13:
                            return (
                              (a = e.sent),
                              A(r.address.toString(), a),
                              (e.next = 17),
                              v(1e3)
                            );
                          case 17:
                            e.next = 22;
                            break;
                          case 19:
                            (e.prev = 19),
                              (e.t0 = e.catch(10)),
                              console.log(
                                'Error fetching market: ' + e.t0.message,
                              );
                          case 22:
                            e.next = 6;
                            break;
                          case 24:
                            e.next = 29;
                            break;
                          case 26:
                            (e.prev = 26), (e.t1 = e.catch(4)), t.e(e.t1);
                          case 29:
                            return (e.prev = 29), t.f(), e.finish(29);
                          case 32:
                            O(!1);
                          case 33:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [
                      [4, 26, 29, 32],
                      [10, 19],
                    ],
                  );
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            b &&
              (null === h || void 0 === h ? void 0 : h.autoApprove) &&
              c &&
              !E &&
              e();
          }, 6e4),
          a.a.createElement(
            ya.Provider,
            { value: { autoSettleEnabled: c, setAutoSettleEnabled: i } },
            t,
          )
        );
      }
      var Oa = Ae.a.Paragraph;
      function wa(e) {
        var t = e.autoApprove,
          n = (function () {
            var e = Object(r.useContext)(ya);
            if (!e) throw new Error('Missing preferences context');
            return {
              autoSettleEnabled: e.autoSettleEnabled,
              setAutoSettleEnabled: e.setAutoSettleEnabled,
            };
          })(),
          o = n.autoSettleEnabled,
          c = n.setAutoSettleEnabled;
        return a.a.createElement(
          'div',
          null,
          a.a.createElement(Er.a, {
            style: { marginRight: 10 },
            disabled: !t,
            checked: t && o,
            onChange: c,
          }),
          ' ',
          'Auto settle',
          !t &&
            a.a.createElement(
              Oa,
              { style: { color: 'rgba(255,255,255,0.5)', marginTop: 10 } },
              'To use auto settle, first enable auto approval in your wallet',
            ),
        );
      }
      function xa(e) {
        var t = e.visible,
          n = e.testingConnection,
          o = e.onAddCustomEndpoint,
          c = e.onClose,
          i = Object(r.useState)(''),
          l = Object(s.a)(i, 2),
          u = l[0],
          d = l[1],
          m = Object(r.useState)(''),
          p = Object(s.a)(m, 2),
          f = p[0],
          b = p[1],
          v = function () {
            d(''), b(''), c && c();
          },
          h = '' !== u && '' !== f;
        return a.a.createElement(
          ae.a,
          {
            title: 'Add custom endpoint',
            visible: t,
            onOk: function () {
              o({ name: f, endpoint: 'https://' + u, custom: !0 }), v();
            },
            okText: 'Add',
            onCancel: v,
            okButtonProps: { disabled: !h, loading: n },
          },
          a.a.createElement(
            Be.a,
            { style: { marginBottom: 8 } },
            a.a.createElement(
              Ke.a,
              { span: 24 },
              a.a.createElement(kr.a, {
                placeholder: 'Cluster Name',
                value: f,
                onChange: function (e) {
                  return b(e.target.value);
                },
              }),
            ),
          ),
          a.a.createElement(
            Be.a,
            { style: { marginBottom: 8 } },
            a.a.createElement(
              Ke.a,
              { span: 24 },
              a.a.createElement(kr.a, {
                placeholder: 'Cluster Endpoint',
                value: u,
                addonBefore: 'https://',
                onChange: function (e) {
                  return d(e.target.value);
                },
              }),
            ),
          ),
        );
      }
      var ja,
        Sa,
        Ta = n(240),
        Aa = n(366),
        Ma = n.n(Aa),
        Ia = Pe.a.Option,
        Ca = Ma.a.concat(
          ze.TOKEN_MINTS.map(function (e) {
            return {
              name: ''.concat(e.name, ' SPL'),
              url: 'https://explorer.solana.com/address/'.concat(
                e.address.toBase58(),
              ),
              description: ''.concat(e.name, ' SPL token'),
              icon: '',
              tags: [
                'token',
                'blockchain',
                'solana',
                'spl',
                'solana',
                e.address.toBase58(),
              ],
            };
          }),
        );
      function Pa(e) {
        var t = Object(r.useState)([]),
          n = Object(s.a)(t, 2),
          o = n[0],
          c = n[1],
          i = Object(r.useState)(void 0),
          l = Object(s.a)(i, 2),
          u = l[0],
          d = l[1],
          m = function () {
            c([]), d(void 0);
          },
          p = o.map(function (e) {
            return a.a.createElement(
              Ia,
              { key: e.name, value: e.name, href: e.url },
              a.a.createElement('h3', null, e.name),
              a.a.createElement(
                Ae.a.Text,
                { type: 'secondary' },
                e.url.replace('https://', ''),
              ),
            );
          }),
          f = Object(r.useRef)();
        return a.a.createElement(
          Pe.a,
          {
            ref: f,
            showSearch: !0,
            allowClear: !0,
            value: u,
            placeholder:
              e.focussed || void 0 === e.focussed
                ? 'Search for dex, swap, wallet, token...'
                : '',
            onSearch: function (e) {
              d('' === e ? void 0 : e);
              var t = Ca.filter(function (t) {
                return (function (e, t) {
                  var n = e.toLowerCase();
                  return (
                    t.name.toLowerCase().includes(n) ||
                    t.tags.some(function (e) {
                      return (
                        e.toLowerCase().includes(n) ||
                        n.includes(e.toLowerCase())
                      );
                    })
                  );
                })(e, t);
              });
              c(t);
            },
            onClear: m,
            onSelect: function (e, t) {
              window.open(t.href, '_blank'), m();
            },
            onFocus: e.onFocus,
            onBlur: function () {
              e.onBlur(), m();
            },
            notFoundContent: null,
            style: {
              width: e.width || '300px',
              transition: e.focussed ? 'width 0.1s ease 0.1s' : '',
            },
            dropdownStyle: { width: e.width || '300px' },
            dropdownMatchSelectWidth: !1,
            suffixIcon: a.a.createElement(Ta.a, {
              onClick: function () {
                return f.current && f.current.focus();
              },
            }),
            filterOption: !1,
          },
          p,
        );
      }
      var Ba = je.c.div(
          ja ||
            (ja = Object(xe.a)([
              '\n  background-color: #000;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding: 0px 30px;\n  flex-wrap: wrap;\n',
            ])),
        ),
        Ka = je.c.div(
          Sa ||
            (Sa = Object(xe.a)([
              '\n  display: flex;\n  align-items: center;\n  color: #b13098;\n  font-weight: bold;\n  cursor: pointer;\n  img {\n    height: 30px;\n    margin-right: 8px;\n  }\n',
            ])),
        ),
        Fa = {
          '/learn': 'https://serum-academy.com/en/serum-dex/',
          '/add-market': 'https://serum-academy.com/en/add-market/',
          '/wallet-support': 'https://serum-academy.com/en/wallet-support',
          '/dex-list': 'https://serum-academy.com/en/dex-list/',
          '/developer-resources':
            'https://serum-academy.com/en/developer-resources/',
          '/explorer': 'https://explorer.solana.com',
          '/srm-faq': 'https://projectserum.com/srm-faq',
          '/swap': 'https://swap.projectserum.com',
        };
      function Na() {
        var e = Oe(),
          t = e.connected,
          n = e.wallet,
          o = G(),
          c = o.endpoint,
          i = o.endpointInfo,
          l = o.setEndpoint,
          u = o.availableEndpoints,
          d = o.setCustomEndpoints,
          p = Object(r.useState)(!1),
          f = Object(s.a)(p, 2),
          b = f[0],
          v = f[1],
          h = Object(r.useState)(!1),
          g = Object(s.a)(h, 2),
          k = g[0],
          y = g[1],
          E = Object(Ce.h)(),
          O = Object(Ce.g)(),
          w = Object(r.useState)(!1),
          x = Object(s.a)(w, 2),
          j = x[0],
          S = x[1],
          T = Object(r.useCallback)(
            function (e) {
              e.key in Fa || O.push(e.key);
            },
            [O],
          ),
          A = i && i.custom;
        Object(r.useEffect)(
          function () {
            var e = function () {
              A && l(W[0].endpoint);
            };
            return (
              window.addEventListener('beforeunload', e),
              function () {
                return window.removeEventListener('beforeunload', e);
              }
            );
          },
          [A, l],
        );
        var I = E.pathname.startsWith('/market/') ? E.pathname : Vt();
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(xa, {
            visible: b,
            testingConnection: k,
            onAddCustomEndpoint: function (e) {
              if (
                u.some(function (t) {
                  return t.endpoint === e.endpoint;
                })
              )
                re({
                  message: 'An endpoint with the given url already exists',
                  type: 'error',
                });
              else {
                var t = function (t) {
                  console.log(
                    'Connection to '.concat(e.endpoint, ' failed: ').concat(t),
                  ),
                    re({
                      message: 'Failed to connect to '.concat(e.endpoint),
                      type: 'error',
                    });
                };
                try {
                  new m.Connection(e.endpoint, 'recent')
                    .getEpochInfo()
                    .then(function (t) {
                      y(!0),
                        console.log(
                          'testing connection to '.concat(e.endpoint),
                        );
                      var n = [].concat(
                        Object(M.a)(
                          u.filter(function (e) {
                            return e.custom;
                          }),
                        ),
                        [e],
                      );
                      l(e.endpoint), d(n);
                    })
                    .catch(t);
                } catch (n) {
                  t(n);
                } finally {
                  y(!1);
                }
              }
            },
            onClose: function () {
              return v(!1);
            },
          }),
          a.a.createElement(
            Ba,
            null,
            a.a.createElement(
              Ka,
              {
                onClick: function () {
                  return O.push(I);
                },
              },
              a.a.createElement('img', { src: ka.a, alt: '' }),
              'PIP-DEX',
            ),
            a.a.createElement(
              Xr.a,
              {
                mode: 'horizontal',
                onClick: T,
                selectedKeys: [E.pathname],
                style: {
                  borderBottom: 'none',
                  backgroundColor: 'transparent',
                  display: 'flex',
                  alignItems: 'flex-end',
                  flex: 1,
                },
              },
              a.a.createElement(
                Xr.a.Item,
                { key: I, style: { margin: '0 10px 0 20px' } },
                'TRADE',
              ),
              t &&
                (!j || '/balances' === E.pathname) &&
                a.a.createElement(
                  Xr.a.Item,
                  { key: '/balances', style: { margin: '0 10px' } },
                  'BALANCES',
                ),
              t &&
                (!j || '/orders' === E.pathname) &&
                a.a.createElement(
                  Xr.a.Item,
                  { key: '/orders', style: { margin: '0 10px' } },
                  'ORDERS',
                ),
              t &&
                (!j || '/convert' === E.pathname) &&
                a.a.createElement(
                  Xr.a.Item,
                  { key: '/convert', style: { margin: '0 10px' } },
                  'CONVERT',
                ),
              (!j || '/list-new-market' === E.pathname) &&
                a.a.createElement(
                  Xr.a.Item,
                  { key: '/list-new-market', style: { margin: '0 10px' } },
                  'ADD MARKET',
                ),
            ),
            a.a.createElement(
              'div',
              {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  paddingRight: 5,
                },
              },
              a.a.createElement(Pa, {
                onFocus: function () {
                  return S(!0);
                },
                onBlur: function () {
                  return S(!1);
                },
                focussed: j,
                width: j ? '350px' : '35px',
              }),
            ),
            a.a.createElement(
              'div',
              null,
              a.a.createElement(
                Be.a,
                {
                  align: 'middle',
                  style: { paddingLeft: 5, paddingRight: 5 },
                  gutter: 16,
                },
                a.a.createElement(
                  Ke.a,
                  null,
                  a.a.createElement(Fr.a, {
                    style: { color: '#b13098' },
                    onClick: function () {
                      return v(!0);
                    },
                  }),
                ),
                a.a.createElement(
                  Ke.a,
                  null,
                  a.a.createElement(
                    Fe.a,
                    {
                      content: c,
                      placement: 'bottomRight',
                      title: 'URL',
                      trigger: 'hover',
                    },
                    a.a.createElement(ur.a, { style: { color: '#b13098' } }),
                  ),
                ),
                a.a.createElement(
                  Ke.a,
                  null,
                  a.a.createElement(
                    Pe.a,
                    {
                      onSelect: l,
                      value: c,
                      style: { marginRight: 8, width: '150px' },
                    },
                    u.map(function (e) {
                      var t = e.name,
                        n = e.endpoint;
                      return a.a.createElement(
                        Pe.a.Option,
                        { value: n, key: n },
                        t,
                      );
                    }),
                  ),
                ),
              ),
            ),
            t &&
              a.a.createElement(
                'div',
                null,
                a.a.createElement(
                  Fe.a,
                  {
                    content: a.a.createElement(wa, {
                      autoApprove:
                        null === n || void 0 === n ? void 0 : n.autoApprove,
                    }),
                    placement: 'bottomRight',
                    title: 'Settings',
                    trigger: 'click',
                  },
                  a.a.createElement(
                    oe.a,
                    { style: { marginRight: 8 } },
                    a.a.createElement(ha.a, null),
                    'Settings',
                  ),
                ),
              ),
            a.a.createElement('div', null, a.a.createElement($r, null)),
          ),
        );
      }
      var za = n(333),
        _a = 'https://t.me/pupprtoken',
        qa = 'https://puppr.town',
        Ra = va.a.Footer,
        La = za.a.useBreakpoint,
        Da = [
          { description: 'puppr.town', link: qa },
          { description: 'Telegram', link: _a },
        ],
        Wa = function () {
          var e = !La().lg;
          return a.a.createElement(
            Ra,
            { style: { height: '45px', paddingBottom: 10, paddingTop: 10 } },
            a.a.createElement(
              Be.a,
              { align: 'middle', gutter: [16, 4] },
              !e &&
                a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(Ke.a, { flex: 'auto' }),
                  Da.map(function (e, t) {
                    return a.a.createElement(
                      Ke.a,
                      { key: t + '' },
                      a.a.createElement(
                        ne,
                        { external: !0, to: e.link },
                        e.description,
                      ),
                    );
                  }),
                ),
              a.a.createElement(Ke.a, { flex: 'auto' }),
            ),
          );
        },
        Ua = va.a.Header,
        Va = va.a.Content;
      function Ha(e) {
        var t = e.children;
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            va.a,
            {
              style: {
                display: 'flex',
                minHeight: '100vh',
                flexDirection: 'column',
              },
            },
            a.a.createElement(
              Ua,
              { style: { padding: 0, minHeight: 64, height: 'unset' } },
              a.a.createElement(Na, null),
            ),
            a.a.createElement(Va, { style: { flex: 1 } }, t),
            a.a.createElement(Wa, null),
          ),
        );
      }
      var Ja,
        Qa = n(623),
        Ga = n(79),
        Ya = n(620);
      function Xa(e, t, n) {
        var o = Object(r.useState)(''),
          c = Object(s.a)(o, 2),
          i = c[0],
          l = c[1],
          u = Y(b(i) ? new m.PublicKey(i) : null),
          d = Object(s.a)(u, 2),
          p = d[0],
          f = d[1],
          v = Bt(),
          h = Object(r.useMemo)(
            function () {
              return Object.entries(v)
                .filter(function (e) {
                  var t = Object(s.a)(e, 2),
                    n = t[0],
                    r = t[1];
                  return (
                    n.includes(i) || r.toLowerCase().includes(i.toLowerCase())
                  );
                })
                .map(function (e) {
                  var t = Object(s.a)(e, 2),
                    n = t[0],
                    r = t[1];
                  return {
                    value: n,
                    label: a.a.createElement(
                      a.a.Fragment,
                      null,
                      r,
                      ' (',
                      n,
                      ')',
                    ),
                  };
                });
            },
            [v, i],
          ),
          g = Object(r.useMemo)(
            function () {
              var e = '',
                t = !1,
                n = null,
                r = null;
              if (i)
                if (((t = !0), p))
                  if (
                    p.owner.equals(ze.TokenInstructions.TOKEN_PROGRAM_ID) &&
                    82 === p.data.length
                  ) {
                    var a = St(p.data);
                    a.initialized
                      ? ((e = 'success'),
                        (r = {
                          address: new m.PublicKey(i),
                          decimals: a.decimals,
                        }))
                      : ((e = 'error'), (n = 'Invalid SPL mint'));
                  } else (e = 'error'), (n = 'Invalid SPL mint address');
                else
                  b(i) && !f
                    ? (e = 'validating')
                    : ((e = 'error'), (n = 'Invalid Solana address'));
              return {
                validateStatus: e,
                hasFeedback: t,
                help: n,
                mintInfo: r,
              };
            },
            [i, p, f],
          ),
          k = g.validateStatus,
          y = g.hasFeedback,
          E = g.help,
          O = g.mintInfo;
        return [
          a.a.createElement(
            Qa.a.Item,
            {
              label: a.a.createElement(
                Ga.a,
                {
                  title: a.a.createElement(
                    a.a.Fragment,
                    null,
                    n,
                    ' You can look up token mint addresses on',
                    ' ',
                    a.a.createElement(
                      ne,
                      { external: !0, to: 'https://sollet.io' },
                      'sollet.io',
                    ),
                    '.',
                  ),
                },
                t,
              ),
              name: e,
              validateStatus: k,
              hasFeedback: y,
              help: E,
            },
            a.a.createElement(Ya.a, {
              options: h,
              value: i,
              onChange: function (e) {
                return l(e);
              },
            }),
          ),
          O,
        ];
      }
      var Za = Ae.a.Text,
        $a = Ae.a.Title,
        eo = je.c.div(
          Ja ||
            (Ja = Object(xe.a)([
              '\n  max-width: 800px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 24px;\n  margin-bottom: 24px;\n',
            ])),
        );
      function to() {
        var e,
          t,
          n = J(),
          o = Oe(),
          c = o.wallet,
          i = o.connected,
          d = Xa(
            'baseMint',
            a.a.createElement(
              Za,
              null,
              'Base Token Mint Address',
              ' ',
              a.a.createElement(
                Za,
                { type: 'secondary' },
                '(e.g. BTC solana address:',
                ' ',
                a.a.createElement(
                  Za,
                  { type: 'secondary', code: !0 },
                  '9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E',
                ),
                ')',
              ),
            ),
            'The base token is the token being traded. For example, the base token of a BTC/USDT market is BTC.',
          ),
          m = Object(s.a)(d, 2),
          p = m[0],
          f = m[1],
          b = Xa(
            'quoteMint',
            a.a.createElement(
              Za,
              null,
              'Quote Token Mint Address',
              ' ',
              a.a.createElement(
                Za,
                { type: 'secondary' },
                '(e.g. USDT solana address:',
                ' ',
                a.a.createElement(
                  Za,
                  { type: 'secondary', code: !0 },
                  'BQcdHdAQW1hczDbBi9hiegXAR7A98Q9jx3X3iBBBDiq4',
                ),
                ')',
              ),
            ),
            'The quote token is the token used to price trades. For example, the quote token of a BTC/USDT market is USDT.',
          ),
          v = Object(s.a)(b, 2),
          h = v[0],
          g = v[1],
          k = Object(r.useState)('1'),
          y = Object(s.a)(k, 2),
          E = y[0],
          O = y[1],
          w = Object(r.useState)('0.01'),
          x = Object(s.a)(w, 2),
          j = x[0],
          S = x[1],
          T = ze.MARKETS.find(function (e) {
            return !e.deprecated;
          }).programId,
          A = Object(r.useState)(!1),
          M = Object(s.a)(A, 2),
          I = M[0],
          C = M[1],
          P = Object(r.useState)(null),
          B = Object(s.a)(P, 2),
          K = B[0],
          F = B[1];
        f &&
          parseFloat(E) > 0 &&
          ((e = Math.round(Math.pow(10, f.decimals) * parseFloat(E))),
          g &&
            parseFloat(j) > 0 &&
            (t = Math.round(
              parseFloat(E) * Math.pow(10, g.decimals) * parseFloat(j),
            )));
        var N = i && !!f && !!g && !!e && !!t;
        function z() {
          return (z = Object(u.a)(
            l.a.mark(function r() {
              var a;
              return l.a.wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (N) {
                          r.next = 2;
                          break;
                        }
                        return r.abrupt('return');
                      case 2:
                        return (
                          C(!0),
                          (r.prev = 3),
                          (r.next = 6),
                          nt({
                            connection: n,
                            wallet: c,
                            baseMint: f.address,
                            quoteMint: g.address,
                            baseLotSize: e,
                            quoteLotSize: t,
                            dexProgramId: T,
                          })
                        );
                      case 6:
                        (a = r.sent), F(a), (r.next = 14);
                        break;
                      case 10:
                        (r.prev = 10),
                          (r.t0 = r.catch(3)),
                          console.warn(r.t0),
                          re({
                            message: 'Error listing new market',
                            description: r.t0.message,
                            type: 'error',
                          });
                      case 14:
                        return (r.prev = 14), C(!1), r.finish(14);
                      case 17:
                      case 'end':
                        return r.stop();
                    }
                },
                r,
                null,
                [[3, 10, 14, 17]],
              );
            }),
          )).apply(this, arguments);
        }
        return a.a.createElement(
          eo,
          null,
          a.a.createElement(
            kn,
            null,
            a.a.createElement($a, { level: 4 }, 'List New Market'),
            a.a.createElement(
              Qa.a,
              {
                labelCol: { span: 24 },
                wrapperCol: { span: 24 },
                layout: 'vertical',
                onFinish: function () {
                  return z.apply(this, arguments);
                },
              },
              p,
              h,
              a.a.createElement(
                Qa.a.Item,
                {
                  label: a.a.createElement(
                    Ga.a,
                    {
                      title:
                        'Smallest allowed order size. For a BTC/USDT market, this would be in units of BTC.',
                    },
                    'Minimum Order Size',
                    ' ',
                    a.a.createElement(
                      Za,
                      { type: 'secondary' },
                      '(Lot size in e.g. BTC)',
                    ),
                  ),
                  name: 'lotSize',
                  initialValue: '1',
                  validateStatus: f && g ? (e ? 'success' : 'error') : null,
                  hasFeedback: f && g,
                },
                a.a.createElement(kr.a, {
                  value: E,
                  onChange: function (e) {
                    return O(e.target.value.trim());
                  },
                  type: 'number',
                  min: '0',
                  step: 'any',
                }),
              ),
              a.a.createElement(
                Qa.a.Item,
                {
                  label: a.a.createElement(
                    Ga.a,
                    {
                      title:
                        'Smallest amount by which prices can move. For a BTC/USDT market, this would be in units of USDT.',
                    },
                    'Tick Size',
                    ' ',
                    a.a.createElement(
                      Za,
                      { type: 'secondary' },
                      '(Price increment in e.g. USDT)',
                    ),
                  ),
                  name: 'tickSize',
                  initialValue: '0.01',
                  validateStatus: f && g ? (t ? 'success' : 'error') : null,
                  hasFeedback: f && g,
                },
                a.a.createElement(kr.a, {
                  value: j,
                  onChange: function (e) {
                    return S(e.target.value.trim());
                  },
                  type: 'number',
                  min: '0',
                  step: 'any',
                }),
              ),
              a.a.createElement(
                Qa.a.Item,
                { label: ' ', colon: !1 },
                a.a.createElement(
                  oe.a,
                  {
                    type: 'primary',
                    htmlType: 'submit',
                    disabled: !N,
                    loading: I,
                  },
                  i ? 'Submit' : 'Not connected to wallet',
                ),
              ),
            ),
          ),
          K
            ? a.a.createElement(
                kn,
                null,
                a.a.createElement(
                  Za,
                  null,
                  'New market address: ',
                  K.toBase58(),
                ),
              )
            : null,
        );
      }
      var no,
        ro,
        ao = n(66),
        oo = Ae.a.Text,
        co = Ae.a.Title,
        io = je.c.div(
          no ||
            (no = Object(xe.a)([
              '\n  max-width: 800px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 24px;\n  margin-bottom: 24px;\n',
            ])),
        ),
        lo = je.c.div(
          ro ||
            (ro = Object(xe.a)([
              '\n  margin-top: 16px;\n  margin-bottom: 16px;\n',
            ])),
        ),
        uo = '71JS8f7y7ASMbuuSMCVG7a3qDdcVco2qYD6bMJeZqUCm',
        so = 'WvmTNLpGMVbwJVYztYL4Hnsy82cJhQorxjnnXcRm3b6',
        mo = [
          { label: 'Simple Pool ('.concat(uo, ')'), value: uo },
          {
            label: 'Admin-Controlled Pool ('.concat(
              'WvmTNLpGMVbwJVYztYL4Hnsy82cJhQorxjnnXcRm3b6',
              ')',
            ),
            value: 'WvmTNLpGMVbwJVYztYL4Hnsy82cJhQorxjnnXcRm3b6',
          },
        ];
      function po() {
        var e = J(),
          t = Oe(),
          n = t.wallet,
          o = t.connected,
          c = Object(r.useState)(''),
          i = Object(s.a)(c, 2),
          p = i[0],
          b = i[1],
          v = Object(r.useState)(so),
          h = Object(s.a)(v, 2),
          g = h[0],
          k = h[1],
          y = Object(r.useState)('1'),
          E = Object(s.a)(y, 2),
          O = E[0],
          w = E[1],
          x = Object(r.useState)([{ valid: !1 }, { valid: !1 }]),
          j = Object(s.a)(x, 2),
          S = j[0],
          T = j[1],
          A = Object(r.useState)(!1),
          M = Object(s.a)(A, 2),
          I = M[0],
          C = M[1],
          P = Object(r.useState)(''),
          B = Object(s.a)(P, 2),
          K = B[0],
          F = B[1],
          N = en(),
          z = Object(s.a)(N, 1)[0],
          _ = Object(r.useState)(!1),
          q = Object(s.a)(_, 2),
          R = q[0],
          L = q[1],
          D = Object(r.useState)(null),
          W = Object(s.a)(D, 2),
          U = W[0],
          V = W[1];
        Object(r.useEffect)(
          function () {
            g === uo
              ? C(!1)
              : 'WvmTNLpGMVbwJVYztYL4Hnsy82cJhQorxjnnXcRm3b6' === g && C(!0);
          },
          [g],
        ),
          Object(r.useEffect)(
            function () {
              o && n && F(n.publicKey.toBase58());
            },
            [n, o],
          );
        var H =
          o &&
          p.trim() &&
          g &&
          parseFloat(O) > 0 &&
          S.every(function (e) {
            return e.valid;
          }) &&
          z &&
          (K || !I);
        function Q() {
          return (Q = Object(u.a)(
            l.a.mark(function t() {
              var r, a, o, c, i, u, b, v, h;
              return l.a.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (H && n) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt('return');
                      case 2:
                        return (
                          L(!0),
                          (t.prev = 3),
                          (r = S),
                          (t.next = 7),
                          ao.PoolTransactions.initializeSimplePool({
                            connection: e,
                            programId: new m.PublicKey(g),
                            poolName: p,
                            poolStateSpace: 1024,
                            poolMintDecimals: 6,
                            initialPoolMintSupply: new f.a(
                              Math.round(Math.pow(10, 6) * parseFloat(O)),
                            ),
                            assetMints: r.map(function (e) {
                              return e.mint;
                            }),
                            initialAssetQuantities: r.map(function (e) {
                              return new f.a(e.quantity);
                            }),
                            creator: n.publicKey,
                            creatorAssets: r.map(function (e) {
                              var t =
                                null === z || void 0 === z
                                  ? void 0
                                  : z.find(function (t) {
                                      return t.effectiveMint.equals(e.mint);
                                    });
                              if (!t)
                                throw new Error(
                                  'No token account for ' + e.mint.toBase58(),
                                );
                              return t.pubkey;
                            }),
                            additionalAccounts: I
                              ? [
                                  {
                                    pubkey: new m.PublicKey(K),
                                    isSigner: !1,
                                    isWritable: !1,
                                  },
                                ]
                              : [],
                          })
                        );
                      case 7:
                        return (
                          (a = t.sent),
                          (o = Object(s.a)(a, 2)),
                          (c = o[0]),
                          (i = o[1]),
                          (t.next = 13),
                          ut({
                            transactionsAndSigners: i,
                            wallet: n,
                            connection: e,
                          })
                        );
                      case 13:
                        (u = t.sent),
                          (b = Object(d.a)(u)),
                          (t.prev = 15),
                          b.s();
                      case 17:
                        if ((v = b.n()).done) {
                          t.next = 23;
                          break;
                        }
                        return (
                          (h = v.value),
                          (t.next = 21),
                          dt({ signedTransaction: h, connection: e })
                        );
                      case 21:
                        t.next = 17;
                        break;
                      case 23:
                        t.next = 28;
                        break;
                      case 25:
                        (t.prev = 25), (t.t0 = t.catch(15)), b.e(t.t0);
                      case 28:
                        return (t.prev = 28), b.f(), t.finish(28);
                      case 31:
                        V(c), (t.next = 38);
                        break;
                      case 34:
                        (t.prev = 34),
                          (t.t1 = t.catch(3)),
                          console.warn(t.t1),
                          re({
                            message: 'Error creating new pool',
                            description: t.t1.message,
                            type: 'error',
                          });
                      case 38:
                        return (t.prev = 38), L(!1), t.finish(38);
                      case 41:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                null,
                [
                  [3, 34, 38, 41],
                  [15, 25, 28, 31],
                ],
              );
            }),
          )).apply(this, arguments);
        }
        return a.a.createElement(
          io,
          null,
          a.a.createElement(
            kn,
            null,
            a.a.createElement(co, { level: 4 }, 'Create new pool'),
            a.a.createElement(
              Qa.a,
              {
                layout: 'vertical',
                onFinish: function () {
                  return Q.apply(this, arguments);
                },
              },
              a.a.createElement(
                Qa.a.Item,
                {
                  label: a.a.createElement(
                    Ga.a,
                    { title: 'Public name of the pool.' },
                    'Pool Name',
                  ),
                  name: 'name',
                },
                a.a.createElement(kr.a, {
                  value: p,
                  onChange: function (e) {
                    return b(e.target.value);
                  },
                }),
              ),
              a.a.createElement(
                Qa.a.Item,
                {
                  label: a.a.createElement(
                    Ga.a,
                    { title: 'Address of the pool program.' },
                    'Program ID',
                    ' ',
                    a.a.createElement(
                      oo,
                      { type: 'secondary' },
                      '(e.g. ',
                      so,
                      ')',
                    ),
                  ),
                  name: 'programId',
                  initialValue: so,
                },
                a.a.createElement(Ya.a, {
                  value: g,
                  onChange: function (e) {
                    return k(e);
                  },
                  options: mo,
                }),
              ),
              a.a.createElement(
                Qa.a.Item,
                {
                  label: a.a.createElement(
                    Ga.a,
                    {
                      title:
                        'Initial number of pool tokens to mint to your account.',
                    },
                    'Initial Pool Token Supply',
                  ),
                  name: 'initialSupply',
                  initialValue: '1',
                },
                a.a.createElement(kr.a, {
                  value: O,
                  onChange: function (e) {
                    return w(e.target.value.trim());
                  },
                  type: 'number',
                  min: '0',
                  step: 'any',
                }),
              ),
              a.a.createElement(
                lo,
                null,
                a.a.createElement(
                  oe.a,
                  {
                    onClick: function () {
                      return T(function (e) {
                        return e.concat({ valid: !1 });
                      });
                    },
                  },
                  'Add token',
                ),
                ' ',
                a.a.createElement(
                  oe.a,
                  {
                    onClick: function () {
                      return T(function (e) {
                        return e.slice(0, e.length - 1);
                      });
                    },
                    disabled: S.length <= 1,
                  },
                  'Remove token',
                ),
              ),
              S.map(function (e, t) {
                return a.a.createElement(fo, {
                  setInitialAssets: T,
                  index: t,
                  key: t,
                });
              }),
              a.a.createElement(
                Qa.a.Item,
                {
                  label: a.a.createElement(
                    Ga.a,
                    {
                      title:
                        'Whether the assets in the pool can be controlled by the pool admin.',
                    },
                    'Admin Controlled',
                  ),
                  name: 'adminControlled',
                },
                a.a.createElement(Er.a, {
                  checked: I,
                  onChange: function (e) {
                    return C(e);
                  },
                  disabled:
                    g === uo ||
                    'WvmTNLpGMVbwJVYztYL4Hnsy82cJhQorxjnnXcRm3b6' === g,
                }),
              ),
              I
                ? a.a.createElement(
                    Qa.a.Item,
                    {
                      label: a.a.createElement(
                        Ga.a,
                        { title: 'Address of the pool admin account.' },
                        'Admin Address',
                      ),
                    },
                    a.a.createElement(kr.a, {
                      value: K,
                      onChange: function (e) {
                        return F(e.target.value.trim());
                      },
                    }),
                  )
                : null,
              a.a.createElement(
                Qa.a.Item,
                { label: ' ', colon: !1 },
                a.a.createElement(
                  oe.a,
                  {
                    type: 'primary',
                    htmlType: 'submit',
                    disabled: !H,
                    loading: R,
                  },
                  o ? 'Submit' : 'Not connected to wallet',
                ),
              ),
            ),
          ),
          U
            ? a.a.createElement(
                kn,
                null,
                a.a.createElement(
                  oo,
                  null,
                  'New pool address:',
                  ' ',
                  a.a.createElement(
                    ne,
                    { to: '/pools/'.concat(U.toBase58()) },
                    U.toBase58(),
                  ),
                ),
              )
            : null,
        );
      }
      function fo(e) {
        var t = e.setInitialAssets,
          n = e.index,
          o = Xa(
            'mint'.concat(n),
            a.a.createElement(oo, null, 'Token ', n + 1, ' Mint Address'),
            a.a.createElement(
              a.a.Fragment,
              null,
              'Token mint address for token ',
              n + 1,
              '.',
            ),
          ),
          c = Object(s.a)(o, 2),
          i = c[0],
          l = c[1],
          u = Object(r.useState)(''),
          d = Object(s.a)(u, 2),
          m = d[0],
          p = d[1];
        return (
          Object(r.useEffect)(
            function () {
              var e;
              if (l && parseFloat(m) >= 0) {
                var r = Math.round(Math.pow(10, l.decimals) * parseFloat(m));
                e = { mint: l.address, quantity: r, valid: !0 };
              } else e = { valid: !1 };
              t(function (t) {
                return t.map(function (t, r) {
                  return r === n ? e : t;
                });
              });
            },
            [t, n, l, m],
          ),
          a.a.createElement(
            a.a.Fragment,
            null,
            i,
            a.a.createElement(
              Qa.a.Item,
              {
                label: a.a.createElement(
                  Ga.a,
                  {
                    title: a.a.createElement(
                      a.a.Fragment,
                      null,
                      'Initial quantity of token ',
                      n + 1,
                      ' to deposit into the pool.',
                    ),
                  },
                  'Token ',
                  n + 1,
                  ' Initial Quantity',
                ),
                name: 'quantity'.concat(n),
                validateStatus: 'success',
              },
              a.a.createElement(kr.a, {
                value: m,
                onChange: function (e) {
                  return p(e.target.value.trim());
                },
                type: 'number',
                min: '0',
                step: 'any',
              }),
            ),
          )
        );
      }
      var bo = n(626);
      function vo(e) {
        var t,
          n = e.mint,
          r = e.showAddress,
          o = void 0 !== r && r,
          c = Bt();
        if (!n) return null;
        var i = 'string' === typeof n ? new m.PublicKey(n) : n,
          l = 'string' === typeof n ? n : n.toBase58(),
          u = null !== (t = c[l]) && void 0 !== t ? t : T(i);
        return a.a.createElement(
          a.a.Fragment,
          null,
          u,
          o
            ? a.a.createElement(
                a.a.Fragment,
                null,
                ' ',
                a.a.createElement(
                  Fe.a,
                  {
                    content: a.a.createElement(or, { address: l }),
                    placement: 'bottomRight',
                    title: 'Token mint',
                    trigger: 'hover',
                  },
                  a.a.createElement(ur.a, { style: { color: '#b13098' } }),
                ),
              )
            : null,
        );
      }
      function ho(e) {
        var t = e.poolInfo,
          n = e.basket;
        return a.a.createElement(
          'ul',
          null,
          t.state.assets.map(function (e, t) {
            return a.a.createElement(go, {
              key: t,
              mint: e.mint,
              quantity: null === n || void 0 === n ? void 0 : n.quantities[t],
            });
          }),
        );
      }
      function go(e) {
        var t = e.mint,
          n = e.quantity,
          r = Y(t),
          o = Object(s.a)(r, 1)[0],
          c = a.a.createElement(Te.a, { size: 'small' });
        if (o && n) {
          var i = St(o.data);
          c = a.a.createElement(
            a.a.Fragment,
            null,
            n.toNumber() / Math.pow(10, i.decimals),
          );
        }
        return a.a.createElement(
          'li',
          null,
          c,
          ' ',
          a.a.createElement(vo, { mint: t, showAddress: !0 }),
        );
      }
      var ko = Ae.a.Text,
        yo = Ae.a.Paragraph,
        Eo = new Intl.NumberFormat(void 0, {
          style: 'percent',
          minimumFractionDigits: 0,
          maximumFractionDigits: 6,
        });
      function Oo(e) {
        var t = e.poolInfo,
          n = e.mintInfo,
          r = J(),
          o = q(function () {
            return Object(ao.getPoolBasket)(r, t, { redeem: n.supply });
          }, Object(D.a)(ao.getPoolBasket, r, t, 'total', n)),
          c = Object(s.a)(o, 1)[0];
        return a.a.createElement(
          kn,
          { stretchVertical: !0 },
          a.a.createElement(yo, null, 'Name: ', t.state.name),
          a.a.createElement(
            yo,
            null,
            'Address: ',
            a.a.createElement(ko, { copyable: !0 }, t.address.toBase58()),
          ),
          a.a.createElement(
            yo,
            null,
            'Pool token mint address:',
            ' ',
            a.a.createElement(
              ko,
              { copyable: !0 },
              t.state.poolTokenMint.toBase58(),
            ),
          ),
          t.state.adminKey
            ? a.a.createElement(
                yo,
                null,
                'Pool admin: ',
                a.a.createElement(
                  ko,
                  { copyable: !0 },
                  t.state.adminKey.toBase58(),
                ),
              )
            : null,
          a.a.createElement(
            yo,
            null,
            'Fee rate: ',
            Eo.format(t.state.feeRate / 1e6),
          ),
          a.a.createElement(
            yo,
            null,
            'Total supply: ',
            n.supply.toNumber() / Math.pow(10, n.decimals),
          ),
          a.a.createElement(ko, null, 'Total assets:'),
          a.a.createElement(
            'div',
            null,
            a.a.createElement(ho, { poolInfo: t, basket: c }),
          ),
        );
      }
      var wo = Ae.a.Text,
        xo = Hn.a.TabPane;
      function jo(e) {
        var t = e.poolInfo,
          n = e.mintInfo;
        return a.a.createElement(
          kn,
          { stretchVertical: !0 },
          a.a.createElement(
            Hn.a,
            null,
            a.a.createElement(
              xo,
              { tab: 'Create', key: 'create' },
              a.a.createElement(So, {
                poolInfo: t,
                mintInfo: n,
                tab: 'create',
              }),
            ),
            a.a.createElement(
              xo,
              { tab: 'Redeem', key: 'redeem' },
              a.a.createElement(So, {
                poolInfo: t,
                mintInfo: n,
                tab: 'redeem',
              }),
            ),
          ),
        );
      }
      function So(e) {
        var t = e.poolInfo,
          n = e.mintInfo,
          o = e.tab,
          c = J(),
          i = Oe(),
          d = i.wallet,
          m = i.connected,
          p = Object(r.useState)(''),
          b = Object(s.a)(p, 2),
          v = b[0],
          h = b[1],
          g = en(),
          k = Object(s.a)(g, 1)[0],
          y = Object(r.useState)(!1),
          E = Object(s.a)(y, 2),
          O = E[0],
          w = E[1],
          x = Object(r.useMemo)(
            function () {
              var e = Math.round(parseFloat(v) * Math.pow(10, n.decimals));
              return e > 0
                ? 'create' === o
                  ? { create: new f.a(e) }
                  : { redeem: new f.a(e) }
                : null;
            },
            [n.decimals, v, o],
          ),
          j = q(
            Object(u.a)(
              l.a.mark(function e() {
                return l.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!x) {
                          e.next = 6;
                          break;
                        }
                        return (e.next = 3), Object(ao.getPoolBasket)(c, t, x);
                      case 3:
                        (e.t0 = e.sent), (e.next = 7);
                        break;
                      case 6:
                        e.t0 = null;
                      case 7:
                        return e.abrupt('return', e.t0);
                      case 8:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            ),
            Object(D.a)(ao.getPoolBasket, c, t.address.toBase58(), x),
          ),
          S = Object(s.a)(j, 2),
          T = S[0],
          A = S[1];
        function M(e) {
          var t =
            null === k || void 0 === k
              ? void 0
              : k.find(function (t) {
                  return t.effectiveMint.equals(e);
                });
          if (t) return t.pubkey;
          throw new Error('No token account for ' + e.toBase58());
        }
        var I = m && x && T;
        function C() {
          return (C = Object(u.a)(
            l.a.mark(function e(n) {
              var r, a, i;
              return l.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((n.preventDefault(), x && T && m && I && d)) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt('return');
                      case 3:
                        return (
                          w(!0),
                          (e.prev = 4),
                          (r = ao.PoolTransactions.execute(
                            t,
                            x,
                            {
                              owner: d.publicKey,
                              poolTokenAccount: M(t.state.poolTokenMint),
                              assetAccounts: t.state.assets.map(function (e) {
                                return M(e.mint);
                              }),
                            },
                            T,
                          )),
                          (a = r.transaction),
                          (i = r.signers),
                          (e.next = 8),
                          ot({
                            connection: c,
                            wallet: d,
                            transaction: a,
                            signers: i,
                          })
                        );
                      case 8:
                        e.next = 14;
                        break;
                      case 10:
                        (e.prev = 10),
                          (e.t0 = e.catch(4)),
                          console.warn(e.t0),
                          re({
                            message:
                              'Error ' +
                              ('create' === o ? 'creating' : 'redeeming') +
                              ' pool tokens',
                            description: e.t0.message,
                            type: 'error',
                          });
                      case 14:
                        return (e.prev = 14), w(!1), e.finish(14);
                      case 17:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[4, 10, 14, 17]],
              );
            }),
          )).apply(this, arguments);
        }
        return a.a.createElement(
          'form',
          {
            onSubmit: function (e) {
              return C.apply(this, arguments);
            },
          },
          a.a.createElement(kr.a, {
            addonBefore: a.a.createElement(a.a.Fragment, null, 'Quantity'),
            value: v,
            onChange: function (e) {
              return h(e.target.value.trim());
            },
            style: { marginBottom: 24 },
          }),
          a.a.createElement(
            'div',
            null,
            T
              ? a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(
                    wo,
                    null,
                    'create' === o ? 'Cost' : 'Proceeds',
                    ': ',
                  ),
                  a.a.createElement(
                    wo,
                    { type: 'secondary' },
                    '(indicative only)',
                  ),
                  a.a.createElement(ho, { poolInfo: t, basket: T }),
                )
              : A
              ? null
              : a.a.createElement(Te.a, null),
          ),
          a.a.createElement(
            oe.a,
            { htmlType: 'submit', type: 'primary', disabled: !I || O },
            m ? 'Submit' : 'Wallet not connected',
          ),
        );
      }
      var To = Hn.a.TabPane;
      function Ao(e) {
        var t = e.poolInfo;
        return a.a.createElement(
          kn,
          null,
          a.a.createElement(
            Hn.a,
            null,
            a.a.createElement(
              To,
              { tab: 'Wallet Balances', key: 'wallet' },
              a.a.createElement(Mo, { poolInfo: t }),
            ),
            a.a.createElement(
              To,
              { tab: 'Pool Balances', key: 'pool' },
              a.a.createElement(Io, { poolInfo: t }),
            ),
          ),
        );
      }
      function Mo(e) {
        var t = e.poolInfo,
          n = en(),
          r = Object(s.a)(n, 1)[0];
        return a.a.createElement(
          'ul',
          null,
          [t.state.poolTokenMint]
            .concat(
              Object(M.a)(
                t.state.assets.map(function (e) {
                  return e.mint;
                }),
              ),
            )
            .map(function (e, n) {
              var o =
                null === r || void 0 === r
                  ? void 0
                  : r.find(function (t) {
                      return t.effectiveMint.equals(e);
                    });
              return o
                ? a.a.createElement(Co, {
                    key: n,
                    mint: e,
                    publicKey: o.pubkey,
                    isPoolToken: e.equals(t.state.poolTokenMint),
                  })
                : null;
            }),
        );
      }
      function Io(e) {
        var t = e.poolInfo;
        return a.a.createElement(
          'ul',
          null,
          t.state.assets.map(function (e, t) {
            return a.a.createElement(Co, {
              key: t,
              mint: e.mint,
              publicKey: e.vaultAddress,
            });
          }),
        );
      }
      function Co(e) {
        var t = e.mint,
          n = e.publicKey,
          r = e.isPoolToken,
          o = Y(t),
          c = Object(s.a)(o, 1)[0],
          i = Y(n),
          l = Object(s.a)(i, 1)[0],
          u = a.a.createElement(Te.a, { size: 'small' });
        if (c && l) {
          var d = St(c.data);
          if (t.equals(Le.WRAPPED_SOL_MINT))
            u = a.a.createElement(
              a.a.Fragment,
              null,
              l.lamports / Math.pow(10, d.decimals),
            );
          else {
            var m = jt(l.data);
            u = a.a.createElement(
              a.a.Fragment,
              null,
              m.amount / Math.pow(10, d.decimals),
            );
          }
        }
        return a.a.createElement(
          'li',
          null,
          u,
          ' ',
          r
            ? a.a.createElement(
                a.a.Fragment,
                null,
                'Pool Token (',
                a.a.createElement(vo, { mint: t }),
                ')',
              )
            : a.a.createElement(vo, { mint: t }),
          ' ',
          a.a.createElement(oe.a, {
            type: 'link',
            icon: a.a.createElement(ar.a, null),
            href: 'https://explorer.solana.com/address/' + n.toBase58(),
            target: '_blank',
            rel: 'noopener noreferrer',
          }),
        );
      }
      var Po = n(280),
        Bo = Hn.a.TabPane,
        Ko = Pe.a.Option;
      function Fo(e) {
        var t = e.poolInfo;
        return a.a.createElement(
          kn,
          null,
          a.a.createElement(
            Hn.a,
            null,
            a.a.createElement(
              Bo,
              { tab: 'Pause/Unpause', key: 'pause' },
              a.a.createElement(No, { poolInfo: t }),
            ),
            a.a.createElement(
              Bo,
              { tab: 'Add Token', key: 'addAsset' },
              a.a.createElement(zo, { poolInfo: t }),
            ),
            a.a.createElement(
              Bo,
              { tab: 'Remove Token', key: 'removeAsset' },
              a.a.createElement(_o, { poolInfo: t }),
            ),
            a.a.createElement(
              Bo,
              { tab: 'Deposit', key: 'deposit' },
              a.a.createElement(qo, { poolInfo: t }),
            ),
            a.a.createElement(
              Bo,
              { tab: 'Withdraw', key: 'withdraw' },
              a.a.createElement(Ro, { poolInfo: t }),
            ),
            a.a.createElement(
              Bo,
              { tab: 'Modify Fee', key: 'updateFee' },
              a.a.createElement(Lo, { poolInfo: t }),
            ),
          ),
        );
      }
      function No(e) {
        var t = e.poolInfo,
          n = J(),
          o = Oe(),
          c = o.wallet,
          i = o.connected,
          d = Object(r.useState)(!1),
          p = Object(s.a)(d, 2),
          f = p[0],
          b = p[1];
        function v() {
          return (v = Object(u.a)(
            l.a.mark(function e() {
              var r;
              return l.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (i && c) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt('return');
                      case 2:
                        return (
                          b(!0),
                          (e.prev = 3),
                          (r = new m.Transaction()).add(
                            ao.AdminControlledPoolInstructions.pause(t),
                          ),
                          (e.next = 8),
                          ot({ connection: n, wallet: c, transaction: r })
                        );
                      case 8:
                        e.next = 13;
                        break;
                      case 10:
                        (e.prev = 10),
                          (e.t0 = e.catch(3)),
                          re({
                            message: 'Error pausing pool',
                            description: e.t0.message,
                            type: 'error',
                          });
                      case 13:
                        return (e.prev = 13), b(!1), e.finish(13);
                      case 16:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[3, 10, 13, 16]],
              );
            }),
          )).apply(this, arguments);
        }
        function h() {
          return (h = Object(u.a)(
            l.a.mark(function e() {
              var r;
              return l.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (i && c) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt('return');
                      case 2:
                        return (
                          b(!0),
                          (e.prev = 3),
                          (r = new m.Transaction()).add(
                            ao.AdminControlledPoolInstructions.unpause(t),
                          ),
                          (e.next = 8),
                          ot({ connection: n, wallet: c, transaction: r })
                        );
                      case 8:
                        e.next = 13;
                        break;
                      case 10:
                        (e.prev = 10),
                          (e.t0 = e.catch(3)),
                          re({
                            message: 'Error unpausing pool',
                            description: e.t0.message,
                            type: 'error',
                          });
                      case 13:
                        return (e.prev = 13), b(!1), e.finish(13);
                      case 16:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[3, 10, 13, 16]],
              );
            }),
          )).apply(this, arguments);
        }
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            oe.a,
            {
              onClick: function () {
                return v.apply(this, arguments);
              },
              disabled: f,
            },
            'Pause',
          ),
          ' ',
          a.a.createElement(
            oe.a,
            {
              onClick: function () {
                return h.apply(this, arguments);
              },
              disabled: f,
            },
            'Unpause',
          ),
        );
      }
      function zo(e) {
        var t = e.poolInfo,
          n = J(),
          o = Object(r.useState)(''),
          c = Object(s.a)(o, 2),
          i = c[0],
          d = c[1],
          p = Oe(),
          f = p.wallet,
          b = p.connected && i,
          v = Do(
            'adding asset to pool',
            Object(u.a)(
              l.a.mark(function e() {
                var r, a, o;
                return l.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = new m.PublicKey(i)),
                          (e.next = 3),
                          Object(Po.getAssociatedTokenAddress)(
                            t.state.vaultSigner,
                            r,
                          )
                        );
                      case 3:
                        return (
                          (a = e.sent),
                          (o = new m.Transaction()),
                          (e.next = 7),
                          n.getAccountInfo(a)
                        );
                      case 7:
                        if (((e.t0 = !e.sent), !e.t0)) {
                          e.next = 10;
                          break;
                        }
                        e.t0 = f;
                      case 10:
                        if (!e.t0) {
                          e.next = 16;
                          break;
                        }
                        return (
                          (e.t1 = o),
                          (e.next = 14),
                          Object(Po.createAssociatedTokenAccount)(
                            f.publicKey,
                            t.state.vaultSigner,
                            r,
                          )
                        );
                      case 14:
                        (e.t2 = e.sent), e.t1.add.call(e.t1, e.t2);
                      case 16:
                        return (
                          o.add(
                            ao.AdminControlledPoolInstructions.addAsset(t, a),
                          ),
                          e.abrupt('return', [o, []])
                        );
                      case 18:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            ),
          ),
          h = Object(s.a)(v, 2),
          g = h[0],
          k = h[1];
        return a.a.createElement(
          'form',
          { onSubmit: g },
          a.a.createElement(Vo, {
            label: 'Token Mint Address',
            value: i,
            onChange: function (e) {
              return d(e);
            },
            style: { marginBottom: 24 },
          }),
          a.a.createElement(Wo, { canSubmit: b, submitting: k }),
        );
      }
      function _o(e) {
        var t = e.poolInfo,
          n = Object(r.useState)(''),
          o = Object(s.a)(n, 2),
          c = o[0],
          i = o[1],
          d = Oe().connected && c,
          p = Do(
            'removing asset from pool',
            Object(u.a)(
              l.a.mark(function e() {
                var n, r, a, o;
                return l.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((r = new m.PublicKey(c)),
                          (a =
                            null ===
                              (n = t.state.assets.find(function (e) {
                                return e.mint.equals(r);
                              })) || void 0 === n
                              ? void 0
                              : n.vaultAddress))
                        ) {
                          e.next = 4;
                          break;
                        }
                        throw new Error('Asset not in pool');
                      case 4:
                        return (
                          (o = new m.Transaction()).add(
                            ao.AdminControlledPoolInstructions.removeAsset(
                              t,
                              a,
                            ),
                          ),
                          e.abrupt('return', [o, []])
                        );
                      case 7:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            ),
          ),
          f = Object(s.a)(p, 2),
          b = f[0],
          v = f[1];
        return a.a.createElement(
          'form',
          { onSubmit: b },
          a.a.createElement(Uo, {
            poolInfo: t,
            label: 'Token Mint Address',
            value: c,
            onChange: function (e) {
              return i(e);
            },
            style: { marginBottom: 24 },
          }),
          a.a.createElement(Wo, { canSubmit: d, submitting: v }),
        );
      }
      function qo(e) {
        var t = e.poolInfo,
          n = Object(r.useState)(''),
          o = Object(s.a)(n, 2),
          c = o[0],
          i = o[1],
          d = Object(r.useState)(''),
          p = Object(s.a)(d, 2),
          f = p[0],
          b = p[1],
          v = J(),
          h = Oe(),
          g = h.wallet,
          k = h.connected,
          y = en(),
          E = Object(s.a)(y, 1)[0],
          O = k && c && E && parseFloat(f),
          w = Do(
            'depositing to pool',
            Object(u.a)(
              l.a.mark(function e() {
                var n, r, a, o, i, u, s, d, p, b;
                return l.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (g) {
                          e.next = 2;
                          break;
                        }
                        throw new Error('Wallet is not connected');
                      case 2:
                        if (
                          ((r = new m.PublicKey(c)),
                          (a =
                            null ===
                              (n = t.state.assets.find(function (e) {
                                return e.mint.equals(r);
                              })) || void 0 === n
                              ? void 0
                              : n.vaultAddress))
                        ) {
                          e.next = 6;
                          break;
                        }
                        throw new Error('Asset not in pool');
                      case 6:
                        if ((o = tn(E, r))) {
                          e.next = 9;
                          break;
                        }
                        throw new Error('Asset not in wallet');
                      case 9:
                        return (e.next = 11), v.getAccountInfo(r);
                      case 11:
                        if ((i = e.sent)) {
                          e.next = 14;
                          break;
                        }
                        throw new Error('Mint not found');
                      case 14:
                        return (
                          (u = St(i.data).decimals),
                          (s = Math.round(parseFloat(f) * Math.pow(10, u))),
                          (d =
                            r.equals(ze.TokenInstructions.WRAPPED_SOL_MINT) &&
                            o.pubkey.equals(g.publicKey)
                              ? new m.Account()
                              : null),
                          (p = new m.Transaction()),
                          (b = []),
                          d
                            ? (p.add(
                                m.SystemProgram.createAccount({
                                  fromPubkey: g.publicKey,
                                  lamports: s + 204e4,
                                  newAccountPubkey: d.publicKey,
                                  programId:
                                    ze.TokenInstructions.TOKEN_PROGRAM_ID,
                                  space: 165,
                                }),
                                ze.TokenInstructions.initializeAccount({
                                  account: d.publicKey,
                                  mint: ze.TokenInstructions.WRAPPED_SOL_MINT,
                                  owner: g.publicKey,
                                }),
                                ze.TokenInstructions.transfer({
                                  source: d.publicKey,
                                  destination: a,
                                  amount: s,
                                  owner: g.publicKey,
                                }),
                                ze.TokenInstructions.closeAccount({
                                  source: d.publicKey,
                                  destination: o.pubkey,
                                  owner: g.publicKey,
                                }),
                              ),
                              b.push(d))
                            : p.add(
                                ze.TokenInstructions.transfer({
                                  source: o.pubkey,
                                  destination: a,
                                  amount: s,
                                  owner: g.publicKey,
                                }),
                              ),
                          e.abrupt('return', [p, b])
                        );
                      case 21:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            ),
            !0,
          ),
          x = Object(s.a)(w, 2),
          j = x[0],
          S = x[1];
        return a.a.createElement(
          'form',
          { onSubmit: j },
          a.a.createElement(Uo, {
            poolInfo: t,
            label: 'Token Mint Address',
            value: c,
            onChange: function (e) {
              return i(e);
            },
            style: { marginBottom: 24 },
          }),
          a.a.createElement(kr.a, {
            addonBefore: a.a.createElement(a.a.Fragment, null, 'Quantity'),
            value: f,
            onChange: function (e) {
              return b(e.target.value.trim());
            },
            style: { marginBottom: 24 },
          }),
          a.a.createElement(Wo, { canSubmit: O, submitting: S }),
        );
      }
      function Ro(e) {
        var t = e.poolInfo,
          n = Object(r.useState)(''),
          o = Object(s.a)(n, 2),
          c = o[0],
          i = o[1],
          d = Object(r.useState)(''),
          p = Object(s.a)(d, 2),
          b = p[0],
          v = p[1],
          h = J(),
          g = Oe(),
          k = g.wallet,
          y = g.connected,
          E = en(),
          O = Object(s.a)(E, 1)[0],
          w = y && c && O && parseFloat(b),
          x = Do(
            'withdrawing from pool',
            Object(u.a)(
              l.a.mark(function e() {
                var n, r, a, o, i, u, s, d, p, v;
                return l.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (k) {
                          e.next = 2;
                          break;
                        }
                        throw new Error('Wallet is not connected');
                      case 2:
                        if (
                          ((r = new m.PublicKey(c)),
                          (a =
                            null ===
                              (n = t.state.assets.find(function (e) {
                                return e.mint.equals(r);
                              })) || void 0 === n
                              ? void 0
                              : n.vaultAddress))
                        ) {
                          e.next = 6;
                          break;
                        }
                        throw new Error('Asset not in pool');
                      case 6:
                        if ((o = tn(O, r))) {
                          e.next = 9;
                          break;
                        }
                        throw new Error('Asset not in wallet');
                      case 9:
                        return (e.next = 11), h.getAccountInfo(r);
                      case 11:
                        if ((i = e.sent)) {
                          e.next = 14;
                          break;
                        }
                        throw new Error('Mint not found');
                      case 14:
                        return (
                          (u = St(i.data).decimals),
                          (s = Math.round(parseFloat(b) * Math.pow(10, u))),
                          (d =
                            r.equals(ze.TokenInstructions.WRAPPED_SOL_MINT) &&
                            o.pubkey.equals(k.publicKey)
                              ? new m.Account()
                              : null),
                          (p = new m.Transaction()),
                          (v = []),
                          d &&
                            (p.add(
                              m.SystemProgram.createAccount({
                                fromPubkey: k.publicKey,
                                lamports: 204e4,
                                newAccountPubkey: d.publicKey,
                                programId:
                                  ze.TokenInstructions.TOKEN_PROGRAM_ID,
                                space: 165,
                              }),
                              ze.TokenInstructions.initializeAccount({
                                account: d.publicKey,
                                mint: ze.TokenInstructions.WRAPPED_SOL_MINT,
                                owner: k.publicKey,
                              }),
                            ),
                            v.push(d)),
                          p.add(
                            ao.AdminControlledPoolInstructions.approveDelegate(
                              t,
                              a,
                              k.publicKey,
                              new f.a(s),
                            ),
                          ),
                          d
                            ? p.add(
                                ze.TokenInstructions.transfer({
                                  source: a,
                                  destination: d.publicKey,
                                  amount: s,
                                  owner: k.publicKey,
                                }),
                                ze.TokenInstructions.closeAccount({
                                  source: d.publicKey,
                                  destination: o.pubkey,
                                  owner: k.publicKey,
                                }),
                              )
                            : p.add(
                                ze.TokenInstructions.transfer({
                                  source: a,
                                  destination: o.pubkey,
                                  amount: s,
                                  owner: k.publicKey,
                                }),
                              ),
                          e.abrupt('return', [p, v])
                        );
                      case 23:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            ),
          ),
          j = Object(s.a)(x, 2),
          S = j[0],
          T = j[1];
        return a.a.createElement(
          'form',
          { onSubmit: S },
          a.a.createElement(Uo, {
            poolInfo: t,
            label: 'Token Mint Address',
            value: c,
            onChange: function (e) {
              return i(e);
            },
            style: { marginBottom: 24 },
          }),
          a.a.createElement(kr.a, {
            addonBefore: a.a.createElement(a.a.Fragment, null, 'Quantity'),
            value: b,
            onChange: function (e) {
              return v(e.target.value.trim());
            },
            style: { marginBottom: 24 },
          }),
          a.a.createElement(Wo, { canSubmit: w, submitting: T }),
        );
      }
      function Lo(e) {
        var t = e.poolInfo,
          n = Object(r.useState)(''),
          o = Object(s.a)(n, 2),
          c = o[0],
          i = o[1],
          d = Oe().connected,
          p = en(),
          f = Object(s.a)(p, 1)[0],
          b = d && f && parseFloat(c),
          v = Do(
            'changing pool fee',
            Object(u.a)(
              l.a.mark(function e() {
                var n;
                return l.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = new m.Transaction()).add(
                            ao.AdminControlledPoolInstructions.updateFee(
                              t,
                              Math.round(1e6 * parseFloat(c)),
                            ),
                          ),
                          e.abrupt('return', [n, []])
                        );
                      case 3:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            ),
          ),
          h = Object(s.a)(v, 2),
          g = h[0],
          k = h[1];
        return a.a.createElement(
          'form',
          { onSubmit: g },
          a.a.createElement(kr.a, {
            addonBefore: a.a.createElement(a.a.Fragment, null, 'Fee Rate'),
            value: c,
            onChange: function (e) {
              return i(e.target.value.trim());
            },
            style: { marginBottom: 24 },
          }),
          a.a.createElement(Wo, { canSubmit: b, submitting: k }),
        );
      }
      function Do(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          a = J(),
          o = Oe(),
          c = o.wallet,
          i = o.connected,
          d = Object(r.useState)(!1),
          m = Object(s.a)(d, 2),
          p = m[0],
          f = m[1];
        function b(e) {
          return v.apply(this, arguments);
        }
        function v() {
          return (v = Object(u.a)(
            l.a.mark(function r(o) {
              var u, d, m, b;
              return l.a.wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if ((o.preventDefault(), !p)) {
                          r.next = 3;
                          break;
                        }
                        return r.abrupt('return');
                      case 3:
                        if ((f(!0), (r.prev = 4), i && c)) {
                          r.next = 7;
                          break;
                        }
                        throw new Error('Wallet not connected');
                      case 7:
                        return (r.next = 9), t();
                      case 9:
                        return (
                          (u = r.sent),
                          (d = Object(s.a)(u, 2)),
                          (m = d[0]),
                          (b = d[1]),
                          (r.next = 15),
                          ot({
                            connection: a,
                            wallet: c,
                            transaction: m,
                            signers: b,
                          })
                        );
                      case 15:
                        n && L(), (r.next = 21);
                        break;
                      case 18:
                        (r.prev = 18),
                          (r.t0 = r.catch(4)),
                          re({
                            message: 'Error '.concat(e),
                            description: r.t0.message,
                            type: 'error',
                          });
                      case 21:
                        return (r.prev = 21), f(!1), r.finish(21);
                      case 24:
                      case 'end':
                        return r.stop();
                    }
                },
                r,
                null,
                [[4, 18, 21, 24]],
              );
            }),
          )).apply(this, arguments);
        }
        return [b, p];
      }
      function Wo(e) {
        var t = e.canSubmit,
          n = e.submitting,
          r = Oe().connected;
        return a.a.createElement(
          oe.a,
          { htmlType: 'submit', type: 'primary', disabled: !t || n },
          r ? 'Submit' : 'Wallet not connected',
        );
      }
      function Uo(e) {
        var t = e.poolInfo,
          n = e.label,
          r = e.value,
          o = e.onChange,
          c = e.style,
          i = Bt();
        return a.a.createElement(
          kr.a.Group,
          { style: c },
          a.a.createElement('span', { className: 'ant-input-group-addon' }, n),
          a.a.createElement(
            Pe.a,
            { onChange: o, value: r, style: { width: '100%' } },
            t.state.assets.map(function (e) {
              return a.a.createElement(
                Ko,
                { value: e.mint.toBase58(), key: e.mint.toBase58() },
                i[e.mint.toBase58()]
                  ? a.a.createElement(
                      a.a.Fragment,
                      null,
                      i[e.mint.toBase58()],
                      ' (',
                      e.mint.toBase58(),
                      ')',
                    )
                  : e.mint.toBase58(),
              );
            }),
          ),
        );
      }
      function Vo(e) {
        var t = e.label,
          n = e.style,
          o = e.value,
          c = e.onChange,
          i = Bt(),
          l = Object(r.useMemo)(
            function () {
              return Object.entries(i)
                .filter(function (e) {
                  var t = Object(s.a)(e, 2),
                    n = t[0],
                    r = t[1];
                  return (
                    n.includes(o) || r.toLowerCase().includes(o.toLowerCase())
                  );
                })
                .map(function (e) {
                  var t = Object(s.a)(e, 2),
                    n = t[0],
                    r = t[1];
                  return {
                    value: n,
                    label: a.a.createElement(
                      a.a.Fragment,
                      null,
                      r,
                      ' (',
                      n,
                      ')',
                    ),
                  };
                });
            },
            [i, o],
          );
        return a.a.createElement(
          kr.a.Group,
          { style: n },
          a.a.createElement('span', { className: 'ant-input-group-addon' }, t),
          a.a.createElement(Ya.a, {
            options: l,
            value: o,
            onChange: function (e) {
              return c(e);
            },
            style: { width: '100%' },
          }),
        );
      }
      var Ho,
        Jo,
        Qo = Ae.a.Text;
      function Go() {
        var e,
          t = Object(Ce.i)().poolAddress,
          n = Y(
            (function (e) {
              try {
                return new m.PublicKey(e), !0;
              } catch (t) {
                return !1;
              }
            })(t)
              ? new m.PublicKey(t)
              : null,
          ),
          o = Object(s.a)(n, 2),
          c = o[0],
          i = o[1],
          l = Object(Ce.g)(),
          u = Object(r.useMemo)(
            function () {
              if (!c) return null;
              try {
                return {
                  address: new m.PublicKey(t),
                  state: Object(ao.decodePoolState)(c.data),
                  program: c.owner,
                };
              } catch (e) {
                return null;
              }
            },
            [t, c],
          ),
          d = Y(null === u || void 0 === u ? void 0 : u.state.poolTokenMint),
          p = Object(s.a)(d, 2),
          f = p[0],
          b = p[1],
          v = Object(r.useMemo)(
            function () {
              return f ? St(f.data) : null;
            },
            [f],
          ),
          h = Oe().wallet;
        return u && v && h
          ? a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(bo.a, {
                title: a.a.createElement(
                  a.a.Fragment,
                  null,
                  'Pool ',
                  u.address.toBase58(),
                ),
                onBack: function () {
                  return l.push('/pools');
                },
                subTitle: u.state.name,
              }),
              a.a.createElement(
                Be.a,
                null,
                a.a.createElement(
                  Ke.a,
                  { xs: 24, lg: 12 },
                  a.a.createElement(Oo, { poolInfo: u, mintInfo: v }),
                ),
                a.a.createElement(
                  Ke.a,
                  { xs: 24, lg: 12 },
                  a.a.createElement(jo, { poolInfo: u, mintInfo: v }),
                ),
                a.a.createElement(
                  Ke.a,
                  { xs: 24 },
                  a.a.createElement(Ao, { poolInfo: u }),
                ),
                h.connected &&
                  (null === (e = u.state.adminKey) || void 0 === e
                    ? void 0
                    : e.equals(h.publicKey)) &&
                  Object(ao.isAdminControlledPool)(u)
                  ? a.a.createElement(
                      Ke.a,
                      { xs: 24 },
                      a.a.createElement(Fo, { poolInfo: u }),
                    )
                  : null,
              ),
            )
          : a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(bo.a, {
                title: a.a.createElement(a.a.Fragment, null, 'Pool ', t),
                onBack: function () {
                  return l.push('/pools');
                },
              }),
              a.a.createElement(
                kn,
                null,
                i && b
                  ? a.a.createElement(Qo, null, 'Invalid pool')
                  : a.a.createElement(Te.a, null),
              ),
            );
      }
      var Yo = Ae.a.Title,
        Xo = je.c.div(
          Ho ||
            (Ho = Object(xe.a)([
              '\n  max-width: 700px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 24px;\n  margin-bottom: 24px;\n',
            ])),
        ),
        Zo = je.c.form(
          Jo ||
            (Jo = Object(xe.a)([
              '\n  display: flex;\n  margin-top: 16px;\n  margin-bottom: 48px;\n',
            ])),
        );
      function $o() {
        var e = Object(r.useState)(''),
          t = Object(s.a)(e, 2),
          n = t[0],
          o = t[1],
          c = Object(Ce.g)();
        return a.a.createElement(
          Xo,
          null,
          a.a.createElement(
            kn,
            null,
            a.a.createElement(Yo, { level: 3 }, 'Pools'),
            a.a.createElement(
              Zo,
              {
                onSubmit: function (e) {
                  e.preventDefault(), c.push('/pools/'.concat(n));
                },
              },
              a.a.createElement(kr.a, {
                value: n,
                onChange: function (e) {
                  return o(e.target.value.trim());
                },
                placeholder: 'Pool address',
              }),
              a.a.createElement(
                oe.a,
                { type: 'primary', htmlType: 'submit' },
                'Go',
              ),
            ),
            a.a.createElement(ne, { to: '/pools/new' }, 'Create new pool'),
          ),
        );
      }
      function ec() {
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            te.a,
            { basename: '/' },
            a.a.createElement(
              Ha,
              null,
              a.a.createElement(
                Ce.d,
                null,
                a.a.createElement(
                  Ce.b,
                  { exact: !0, path: '/' },
                  a.a.createElement(Ce.a, { to: Vt() }),
                ),
                a.a.createElement(
                  Ce.b,
                  { exact: !0, path: '/market/:marketAddress' },
                  a.a.createElement(Ur, null),
                ),
                a.a.createElement(Ce.b, {
                  exact: !0,
                  path: '/orders',
                  component: ea,
                }),
                a.a.createElement(Ce.b, {
                  exact: !0,
                  path: '/balances',
                  component: ra,
                }),
                a.a.createElement(Ce.b, {
                  exact: !0,
                  path: '/convert',
                  component: ba,
                }),
                a.a.createElement(Ce.b, {
                  exact: !0,
                  path: '/list-new-market',
                  component: to,
                }),
                a.a.createElement(
                  Ce.b,
                  { exact: !0, path: '/pools' },
                  a.a.createElement($o, null),
                ),
                a.a.createElement(
                  Ce.b,
                  { exact: !0, path: '/pools/new' },
                  a.a.createElement(po, null),
                ),
                a.a.createElement(
                  Ce.b,
                  { exact: !0, path: '/pools/:poolAddress' },
                  a.a.createElement(Go, null),
                ),
              ),
            ),
          ),
        );
      }
      function tc() {
        return a.a.createElement(
          r.Suspense,
          {
            fallback: function () {
              return a.a.createElement(Te.a, { size: 'large' });
            },
          },
          a.a.createElement(Se, null),
          a.a.createElement(
            Ie,
            null,
            a.a.createElement(
              H,
              null,
              a.a.createElement(
                Ee,
                null,
                a.a.createElement(
                  Ea,
                  null,
                  a.a.createElement(
                    r.Suspense,
                    {
                      fallback: function () {
                        return a.a.createElement(Te.a, { size: 'large' });
                      },
                    },
                    a.a.createElement(ec, null),
                  ),
                ),
              ),
            ),
          ),
        );
      }
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
          ),
      );
      c.a.render(
        a.a.createElement(a.a.StrictMode, null, a.a.createElement(tc, null)),
        document.getElementById('root'),
      ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[377, 1, 2]],
]);
//# sourceMappingURL=main.6f68c83c.chunk.js.map
