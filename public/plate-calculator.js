!(function (t, e) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define([], e)
      : "object" == typeof exports
      ? (exports.plateCalculator = e())
      : (t.plateCalculator = e());
  })(this, function () {
    return (function (t) {
      function e(n) {
        if (r[n]) return r[n].exports;
        var o = (r[n] = { i: n, l: !1, exports: {} });
        return t[n].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
      }
      var r = {};
      return (
        (e.m = t),
        (e.c = r),
        (e.i = function (t) {
          return t;
        }),
        (e.d = function (t, r, n) {
          e.o(t, r) ||
            Object.defineProperty(t, r, {
              configurable: !1,
              enumerable: !0,
              get: n,
            });
        }),
        (e.n = function (t) {
          var r =
            t && t.__esModule
              ? function () {
                  return t.default;
                }
              : function () {
                  return t;
                };
          return e.d(r, "a", r), r;
        }),
        (e.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (e.p = ""),
        e((e.s = 1))
      );
    })([
      function (t, e, r) {
        "use strict";
        var n = {
          POUNDS: [45, 35, 25, 10, 5, 2.5],
          METRIC: [1.25, 25, 20, 16, 10, 7.5, 5, 2.5],
        };
        t.exports = {
          weightSets: n,
          calculate: function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = Object.assign(
                {
                  set: n.POUNDS,
                  barbellWeight: 45,
                  availablePlates: {},
                  returnClosest: !0,
                  addedPlates: [],
                },
                e
              ),
              o = r.barbellWeight;
            (r.set = r.set.concat(r.addedPlates)),
              r.set
                .sort(function (t, e) {
                  return t - e;
                })
                .reverse();
            var i = { plates: [] };
            if (
              (r.set.forEach(function (e) {
                var n = r.availablePlates[e];
                if ((n % 2 && (n -= 1), o < t && (null == n || n >= 2))) {
                  var s = e;
                  if (s <= t - o) {
                    var a = Math.floor((t - o) / s);
                    a % 2 && (a -= 1),
                      n && a > n && (a = n),
                      a && i.plates.push({ plateWeight: e, qty: a }),
                      (o += s * a);
                  }
                }
              }),
              !1 === r.returnClosest && o !== +t)
            )
              throw new Error(
                "Achieving " +
                  t +
                  " is impossible with \n\t\t\tcurrent weight set and/or limitations. Closest possible weight is " +
                  o
              );
            return (i.closestWeight = o), i;
          },
        };
      },
      function (t, e, r) {
        "use strict";
        t.exports = r(0);
      },
    ]);
  });
  