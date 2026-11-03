(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) r(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const f of d.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && r(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
          ? (d.credentials = "omit")
          : (d.credentials = "same-origin"),
      d
    );
  }
  function r(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = o(c);
    fetch(c.href, d);
  }
})();
var xf = { exports: {} },
  ns = {};
var Mg;
function x2() {
  if (Mg) return ns;
  Mg = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function o(r, c, d) {
    var f = null;
    if (
      (d !== void 0 && (f = "" + d),
      c.key !== void 0 && (f = "" + c.key),
      "key" in c)
    ) {
      d = {};
      for (var m in c) m !== "key" && (d[m] = c[m]);
    } else d = c;
    return (
      (c = d.ref),
      { $$typeof: a, type: r, key: f, ref: c !== void 0 ? c : null, props: d }
    );
  }
  return ((ns.Fragment = l), (ns.jsx = o), (ns.jsxs = o), ns);
}
var Dg;
function b2() {
  return (Dg || ((Dg = 1), (xf.exports = x2())), xf.exports);
}
var b = b2(),
  bf = { exports: {} },
  rt = {};
var Og;
function S2() {
  if (Og) return rt;
  Og = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    v = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    p = Symbol.for("react.activity"),
    S = Symbol.for("react.view_transition"),
    N = Symbol.iterator;
  function M(w) {
    return w === null || typeof w != "object"
      ? null
      : ((w = (N && w[N]) || w["@@iterator"]),
        typeof w == "function" ? w : null);
  }
  var z = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    A = Object.assign,
    U = {};
  function Y(w, k, nt) {
    ((this.props = w),
      (this.context = k),
      (this.refs = U),
      (this.updater = nt || z));
  }
  ((Y.prototype.isReactComponent = {}),
    (Y.prototype.setState = function (w, k) {
      if (typeof w != "object" && typeof w != "function" && w != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, w, k, "setState");
    }),
    (Y.prototype.forceUpdate = function (w) {
      this.updater.enqueueForceUpdate(this, w, "forceUpdate");
    }));
  function B() {}
  B.prototype = Y.prototype;
  function q(w, k, nt) {
    ((this.props = w),
      (this.context = k),
      (this.refs = U),
      (this.updater = nt || z));
  }
  var K = (q.prototype = new B());
  ((K.constructor = q), A(K, Y.prototype), (K.isPureReactComponent = !0));
  var tt = Array.isArray;
  function Q() {}
  var G = { H: null, A: null, T: null, S: null },
    it = Object.prototype.hasOwnProperty;
  function F(w, k, nt) {
    var at = nt.ref;
    return {
      $$typeof: a,
      type: w,
      key: k,
      ref: at !== void 0 ? at : null,
      props: nt,
    };
  }
  function dt(w, k) {
    return F(w.type, k, w.props);
  }
  function St(w) {
    return typeof w == "object" && w !== null && w.$$typeof === a;
  }
  function Xt(w) {
    var k = { "=": "=0", ":": "=2" };
    return (
      "$" +
      w.replace(/[=:]/g, function (nt) {
        return k[nt];
      })
    );
  }
  var Zt = /\/+/g;
  function pt(w, k) {
    return typeof w == "object" && w !== null && w.key != null
      ? Xt("" + w.key)
      : k.toString(36);
  }
  function X(w) {
    switch (w.status) {
      case "fulfilled":
        return w.value;
      case "rejected":
        throw w.reason;
      default:
        switch (
          (typeof w.status == "string"
            ? w.then(Q, Q)
            : ((w.status = "pending"),
              w.then(
                function (k) {
                  w.status === "pending" &&
                    ((w.status = "fulfilled"), (w.value = k));
                },
                function (k) {
                  w.status === "pending" &&
                    ((w.status = "rejected"), (w.reason = k));
                },
              )),
          w.status)
        ) {
          case "fulfilled":
            return w.value;
          case "rejected":
            throw w.reason;
        }
    }
    throw w;
  }
  function st(w, k, nt, at, Tt) {
    var Et = typeof w;
    (Et === "undefined" || Et === "boolean") && (w = null);
    var At = !1;
    if (w === null) At = !0;
    else
      switch (Et) {
        case "bigint":
        case "string":
        case "number":
          At = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case a:
            case l:
              At = !0;
              break;
            case g:
              return ((At = w._init), st(At(w._payload), k, nt, at, Tt));
          }
      }
    if (At)
      return (
        (Tt = Tt(w)),
        (At = at === "" ? "." + pt(w, 0) : at),
        tt(Tt)
          ? ((nt = ""),
            At != null && (nt = At.replace(Zt, "$&/") + "/"),
            st(Tt, k, nt, "", function (zn) {
              return zn;
            }))
          : Tt != null &&
            (St(Tt) &&
              (Tt = dt(
                Tt,
                nt +
                  (Tt.key == null || (w && w.key === Tt.key)
                    ? ""
                    : ("" + Tt.key).replace(Zt, "$&/") + "/") +
                  At,
              )),
            k.push(Tt)),
        1
      );
    At = 0;
    var I = at === "" ? "." : at + ":";
    if (tt(w))
      for (var ot = 0; ot < w.length; ot++)
        ((at = w[ot]), (Et = I + pt(at, ot)), (At += st(at, k, nt, Et, Tt)));
    else if (((ot = M(w)), typeof ot == "function"))
      for (w = ot.call(w), ot = 0; !(at = w.next()).done;)
        ((at = at.value),
          (Et = I + pt(at, ot++)),
          (At += st(at, k, nt, Et, Tt)));
    else if (Et === "object") {
      if (typeof w.then == "function") return st(X(w), k, nt, at, Tt);
      throw (
        (k = String(w)),
        Error(
          "Objects are not valid as a React child (found: " +
            (k === "[object Object]"
              ? "object with keys {" + Object.keys(w).join(", ") + "}"
              : k) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return At;
  }
  function J(w, k, nt) {
    if (w == null) return w;
    var at = [],
      Tt = 0;
    return (
      st(w, at, "", "", function (Et) {
        return k.call(nt, Et, Tt++);
      }),
      at
    );
  }
  function ft(w) {
    if (w._status === -1) {
      var k = w._result,
        nt = k();
      (nt.then(
        function (at) {
          (w._status === 0 || w._status === -1) &&
            ((w._status = 1),
            (w._result = at),
            nt.status === void 0 &&
              ((nt.status = "fulfilled"), (nt.value = at)));
        },
        function (at) {
          (w._status === 0 || w._status === -1) &&
            ((w._status = 2),
            (w._result = at),
            nt.status === void 0 &&
              ((nt.status = "rejected"), (nt.reason = at)));
        },
      ),
        w._status === -1 && ((w._status = 0), (w._result = nt)));
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var mt =
    typeof reportError == "function"
      ? reportError
      : function (w) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var k = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof w == "object" &&
                w !== null &&
                typeof w.message == "string"
                  ? String(w.message)
                  : String(w),
              error: w,
            });
            if (!window.dispatchEvent(k)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", w);
            return;
          }
          console.error(w);
        };
  function ee(w) {
    var k = G.T,
      nt = {};
    ((nt.types = k !== null ? k.types : null), (G.T = nt));
    try {
      var at = w(),
        Tt = G.S;
      (Tt !== null && Tt(nt, at),
        typeof at == "object" &&
          at !== null &&
          typeof at.then == "function" &&
          at.then(Q, mt));
    } catch (Et) {
      mt(Et);
    } finally {
      (k !== null && nt.types !== null && (k.types = nt.types), (G.T = k));
    }
  }
  function en(w) {
    var k = G.T;
    if (k !== null) {
      var nt = k.types;
      nt === null ? (k.types = [w]) : nt.indexOf(w) === -1 && nt.push(w);
    } else ee(en.bind(null, w));
  }
  var Ma = {
    map: J,
    forEach: function (w, k, nt) {
      J(
        w,
        function () {
          k.apply(this, arguments);
        },
        nt,
      );
    },
    count: function (w) {
      var k = 0;
      return (
        J(w, function () {
          k++;
        }),
        k
      );
    },
    toArray: function (w) {
      return (
        J(w, function (k) {
          return k;
        }) || []
      );
    },
    only: function (w) {
      if (!St(w))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return w;
    },
  };
  return (
    (rt.Activity = p),
    (rt.Children = Ma),
    (rt.Component = Y),
    (rt.Fragment = o),
    (rt.Profiler = c),
    (rt.PureComponent = q),
    (rt.StrictMode = r),
    (rt.Suspense = y),
    (rt.ViewTransition = S),
    (rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G),
    (rt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (w) {
        return G.H.useMemoCache(w);
      },
    }),
    (rt.addTransitionType = en),
    (rt.cache = function (w) {
      return function () {
        return w.apply(null, arguments);
      };
    }),
    (rt.cacheSignal = function () {
      return null;
    }),
    (rt.cloneElement = function (w, k, nt) {
      if (w == null)
        throw Error(
          "The argument must be a React element, but you passed " + w + ".",
        );
      var at = A({}, w.props),
        Tt = w.key;
      if (k != null)
        for (Et in (k.key !== void 0 && (Tt = "" + k.key), k))
          !it.call(k, Et) ||
            Et === "key" ||
            Et === "__self" ||
            Et === "__source" ||
            (Et === "ref" && k.ref === void 0) ||
            (at[Et] = k[Et]);
      var Et = arguments.length - 2;
      if (Et === 1) at.children = nt;
      else if (1 < Et) {
        for (var At = Array(Et), I = 0; I < Et; I++) At[I] = arguments[I + 2];
        at.children = At;
      }
      return F(w.type, Tt, at);
    }),
    (rt.createContext = function (w) {
      return (
        (w = {
          $$typeof: f,
          _currentValue: w,
          _currentValue2: w,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (w.Provider = w),
        (w.Consumer = { $$typeof: d, _context: w }),
        w
      );
    }),
    (rt.createElement = function (w, k, nt) {
      var at,
        Tt = {},
        Et = null;
      if (k != null)
        for (at in (k.key !== void 0 && (Et = "" + k.key), k))
          it.call(k, at) &&
            at !== "key" &&
            at !== "__self" &&
            at !== "__source" &&
            (Tt[at] = k[at]);
      var At = arguments.length - 2;
      if (At === 1) Tt.children = nt;
      else if (1 < At) {
        for (var I = Array(At), ot = 0; ot < At; ot++)
          I[ot] = arguments[ot + 2];
        Tt.children = I;
      }
      if (w && w.defaultProps)
        for (at in ((At = w.defaultProps), At))
          Tt[at] === void 0 && (Tt[at] = At[at]);
      return F(w, Et, Tt);
    }),
    (rt.createRef = function () {
      return { current: null };
    }),
    (rt.forwardRef = function (w) {
      return { $$typeof: m, render: w };
    }),
    (rt.isValidElement = St),
    (rt.lazy = function (w) {
      return { $$typeof: g, _payload: { _status: -1, _result: w }, _init: ft };
    }),
    (rt.memo = function (w, k) {
      return { $$typeof: v, type: w, compare: k === void 0 ? null : k };
    }),
    (rt.startTransition = ee),
    (rt.unstable_useCacheRefresh = function () {
      return G.H.useCacheRefresh();
    }),
    (rt.use = function (w) {
      return G.H.use(w);
    }),
    (rt.useActionState = function (w, k, nt) {
      return G.H.useActionState(w, k, nt);
    }),
    (rt.useCallback = function (w, k) {
      return G.H.useCallback(w, k);
    }),
    (rt.useContext = function (w) {
      return G.H.useContext(w);
    }),
    (rt.useDebugValue = function () {}),
    (rt.useDeferredValue = function (w, k) {
      return G.H.useDeferredValue(w, k);
    }),
    (rt.useEffect = function (w, k) {
      return G.H.useEffect(w, k);
    }),
    (rt.useEffectEvent = function (w) {
      return G.H.useEffectEvent(w);
    }),
    (rt.useId = function () {
      return G.H.useId();
    }),
    (rt.useImperativeHandle = function (w, k, nt) {
      return G.H.useImperativeHandle(w, k, nt);
    }),
    (rt.useInsertionEffect = function (w, k) {
      return G.H.useInsertionEffect(w, k);
    }),
    (rt.useLayoutEffect = function (w, k) {
      return G.H.useLayoutEffect(w, k);
    }),
    (rt.useMemo = function (w, k) {
      return G.H.useMemo(w, k);
    }),
    (rt.useOptimistic = function (w, k) {
      return G.H.useOptimistic(w, k);
    }),
    (rt.useReducer = function (w, k, nt) {
      return G.H.useReducer(w, k, nt);
    }),
    (rt.useRef = function (w) {
      return G.H.useRef(w);
    }),
    (rt.useState = function (w) {
      return G.H.useState(w);
    }),
    (rt.useSyncExternalStore = function (w, k, nt) {
      return G.H.useSyncExternalStore(w, k, nt);
    }),
    (rt.useTransition = function () {
      return G.H.useTransition();
    }),
    (rt.version = "19.3.0"),
    rt
  );
}
var zg;
function Sd() {
  return (zg || ((zg = 1), (bf.exports = S2())), bf.exports);
}
var E = Sd(),
  Sf = { exports: {} },
  as = {},
  Tf = { exports: {} },
  Ef = {};
var jg;
function T2() {
  return (
    jg ||
      ((jg = 1),
      (function (a) {
        function l(X, st) {
          var J = X.length;
          X.push(st);
          t: for (; 0 < J;) {
            var ft = (J - 1) >>> 1,
              mt = X[ft];
            if (0 < c(mt, st)) ((X[ft] = st), (X[J] = mt), (J = ft));
            else break t;
          }
        }
        function o(X) {
          return X.length === 0 ? null : X[0];
        }
        function r(X) {
          if (X.length === 0) return null;
          var st = X[0],
            J = X.pop();
          if (J !== st) {
            X[0] = J;
            t: for (var ft = 0, mt = X.length, ee = mt >>> 1; ft < ee;) {
              var en = 2 * (ft + 1) - 1,
                Ma = X[en],
                w = en + 1,
                k = X[w];
              if (0 > c(Ma, J))
                w < mt && 0 > c(k, Ma)
                  ? ((X[ft] = k), (X[w] = J), (ft = w))
                  : ((X[ft] = Ma), (X[en] = J), (ft = en));
              else if (w < mt && 0 > c(k, J))
                ((X[ft] = k), (X[w] = J), (ft = w));
              else break t;
            }
          }
          return st;
        }
        function c(X, st) {
          var J = X.sortIndex - st.sortIndex;
          return J !== 0 ? J : X.id - st.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          a.unstable_now = function () {
            return d.now();
          };
        } else {
          var f = Date,
            m = f.now();
          a.unstable_now = function () {
            return f.now() - m;
          };
        }
        var y = [],
          v = [],
          g = 1,
          p = null,
          S = 3,
          N = !1,
          M = !1,
          z = !1,
          A = !1,
          U = typeof setTimeout == "function" ? setTimeout : null,
          Y = typeof clearTimeout == "function" ? clearTimeout : null,
          B = typeof setImmediate < "u" ? setImmediate : null;
        function q(X) {
          for (var st = o(v); st !== null;) {
            if (st.callback === null) r(v);
            else if (st.startTime <= X)
              (r(v), (st.sortIndex = st.expirationTime), l(y, st));
            else break;
            st = o(v);
          }
        }
        function K(X) {
          if (((z = !1), q(X), !M))
            if (o(y) !== null) ((M = !0), tt || ((tt = !0), St()));
            else {
              var st = o(v);
              st !== null && pt(K, st.startTime - X);
            }
        }
        var tt = !1,
          Q = -1,
          G = 5,
          it = -1;
        function F() {
          return A ? !0 : !(a.unstable_now() - it < G);
        }
        function dt() {
          if (((A = !1), tt)) {
            var X = a.unstable_now();
            it = X;
            var st = !0;
            try {
              t: {
                ((M = !1), z && ((z = !1), Y(Q), (Q = -1)), (N = !0));
                var J = S;
                try {
                  e: {
                    for (
                      q(X), p = o(y);
                      p !== null && !(p.expirationTime > X && F());
                    ) {
                      var ft = p.callback;
                      if (typeof ft == "function") {
                        ((p.callback = null), (S = p.priorityLevel));
                        var mt = ft(p.expirationTime <= X);
                        if (((X = a.unstable_now()), typeof mt == "function")) {
                          ((p.callback = mt), q(X), (st = !0));
                          break e;
                        }
                        (p === o(y) && r(y), q(X));
                      } else r(y);
                      p = o(y);
                    }
                    if (p !== null) st = !0;
                    else {
                      var ee = o(v);
                      (ee !== null && pt(K, ee.startTime - X), (st = !1));
                    }
                  }
                  break t;
                } finally {
                  ((p = null), (S = J), (N = !1));
                }
                st = void 0;
              }
            } finally {
              st ? St() : (tt = !1);
            }
          }
        }
        var St;
        if (typeof B == "function")
          St = function () {
            B(dt);
          };
        else if (typeof MessageChannel < "u") {
          var Xt = new MessageChannel(),
            Zt = Xt.port2;
          ((Xt.port1.onmessage = dt),
            (St = function () {
              Zt.postMessage(null);
            }));
        } else
          St = function () {
            U(dt, 0);
          };
        function pt(X, st) {
          Q = U(function () {
            X(a.unstable_now());
          }, st);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (X) {
            X.callback = null;
          }),
          (a.unstable_forceFrameRate = function (X) {
            0 > X || 125 < X
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (G = 0 < X ? Math.floor(1e3 / X) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (a.unstable_next = function (X) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var st = 3;
                break;
              default:
                st = S;
            }
            var J = S;
            S = st;
            try {
              return X();
            } finally {
              S = J;
            }
          }),
          (a.unstable_requestPaint = function () {
            A = !0;
          }),
          (a.unstable_runWithPriority = function (X, st) {
            switch (X) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                X = 3;
            }
            var J = S;
            S = X;
            try {
              return st();
            } finally {
              S = J;
            }
          }),
          (a.unstable_scheduleCallback = function (X, st, J) {
            var ft = a.unstable_now();
            switch (
              (typeof J == "object" && J !== null
                ? ((J = J.delay),
                  (J = typeof J == "number" && 0 < J ? ft + J : ft))
                : (J = ft),
              X)
            ) {
              case 1:
                var mt = -1;
                break;
              case 2:
                mt = 250;
                break;
              case 5:
                mt = 1073741823;
                break;
              case 4:
                mt = 1e4;
                break;
              default:
                mt = 5e3;
            }
            return (
              (mt = J + mt),
              (X = {
                id: g++,
                callback: st,
                priorityLevel: X,
                startTime: J,
                expirationTime: mt,
                sortIndex: -1,
              }),
              J > ft
                ? ((X.sortIndex = J),
                  l(v, X),
                  o(y) === null &&
                    X === o(v) &&
                    (z ? (Y(Q), (Q = -1)) : (z = !0), pt(K, J - ft)))
                : ((X.sortIndex = mt),
                  l(y, X),
                  M || N || ((M = !0), tt || ((tt = !0), St()))),
              X
            );
          }),
          (a.unstable_shouldYield = F),
          (a.unstable_wrapCallback = function (X) {
            var st = S;
            return function () {
              var J = S;
              S = st;
              try {
                return X.apply(this, arguments);
              } finally {
                S = J;
              }
            };
          }));
      })(Ef)),
    Ef
  );
}
var _g;
function E2() {
  return (_g || ((_g = 1), (Tf.exports = T2())), Tf.exports);
}
var Cf = { exports: {} },
  he = {};
var Vg;
function C2() {
  if (Vg) return he;
  Vg = 1;
  var a = Sd();
  function l(g) {
    var p = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++)
        p += "&args[]=" + encodeURIComponent(arguments[S]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var r = {
      d: {
        f: o,
        r: function () {
          throw Error(l(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal"),
    d = Symbol.for("react.recoverable"),
    f = Symbol.for("react.optimistic_key");
  function m(g, p, S) {
    var N =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: N == null ? null : N === f ? f : "" + N,
      children: g,
      containerInfo: p,
      implementation: S,
    };
  }
  var y = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function v(g, p) {
    if (g === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (he.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (he.browser = function (g) {
      return { $$typeof: d, _reason: g };
    }),
    (he.createPortal = function (g, p) {
      var S =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(l(299));
      return m(g, p, null, S);
    }),
    (he.flushSync = function (g) {
      var p = y.T,
        S = r.p;
      try {
        if (((y.T = null), (r.p = 2), g)) return g();
      } finally {
        ((y.T = p), (r.p = S), r.d.f());
      }
    }),
    (he.preconnect = function (g, p) {
      typeof g == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        r.d.C(g, p));
    }),
    (he.prefetchDNS = function (g) {
      typeof g == "string" && r.d.D(g);
    }),
    (he.preinit = function (g, p) {
      if (typeof g == "string" && p && typeof p.as == "string") {
        var S = p.as,
          N = v(S, p.crossOrigin),
          M = typeof p.integrity == "string" ? p.integrity : void 0,
          z = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        S === "style"
          ? r.d.S(g, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: N,
              integrity: M,
              fetchPriority: z,
            })
          : S === "script" &&
            r.d.X(g, {
              crossOrigin: N,
              integrity: M,
              fetchPriority: z,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (he.preinitModule = function (g, p) {
      if (typeof g == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var S = v(p.as, p.crossOrigin);
            r.d.M(g, {
              crossOrigin: S,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
              fetchPriority:
                typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
            });
          }
        } else p == null && r.d.M(g);
    }),
    (he.preload = function (g, p) {
      if (
        typeof g == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var S = p.as,
          N = v(S, p.crossOrigin);
        r.d.L(g, S, {
          crossOrigin: N,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (he.preloadModule = function (g, p) {
      if (typeof g == "string")
        if (p) {
          var S = v(p.as, p.crossOrigin);
          r.d.m(g, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: S,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            fetchPriority:
              typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          });
        } else r.d.m(g);
    }),
    (he.requestFormReset = function (g) {
      r.d.r(g);
    }),
    (he.unstable_batchedUpdates = function (g, p) {
      return g(p);
    }),
    (he.useFormState = function (g, p, S) {
      return y.H.useFormState(g, p, S);
    }),
    (he.useFormStatus = function () {
      return y.H.useHostTransitionStatus();
    }),
    (he.version = "19.3.0"),
    he
  );
}
var Ug;
function A2() {
  if (Ug) return Cf.exports;
  Ug = 1;
  function a() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return (a(), (Cf.exports = C2()), Cf.exports);
}
var Bg;
function w2() {
  if (Bg) return as;
  Bg = 1;
  var a = E2(),
    l = Sd(),
    o = A2();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function d(t) {
    for (var e = t, n = e; n && !n.alternate;)
      ((e = n), (e.flags & 4098) !== 0 && (t = e.return), (n = e.return));
    for (; e.return;) e = e.return;
    return e.tag === 3 ? t : null;
  }
  function f(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function y(t) {
    if (d(t) !== t) throw Error(r(188));
  }
  function v(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = d(t)), e === null)) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var n = t, i = e; ;) {
      var s = n.return;
      if (s === null) break;
      var u = s.alternate;
      if (u === null) {
        if (((i = s.return), i !== null)) {
          n = i;
          continue;
        }
        break;
      }
      if (s.child === u.child) {
        for (u = s.child; u;) {
          if (u === n) return (y(s), t);
          if (u === i) return (y(s), e);
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== i.return) ((n = s), (i = u));
      else {
        for (var h = !1, x = s.child; x;) {
          if (x === n) {
            ((h = !0), (n = s), (i = u));
            break;
          }
          if (x === i) {
            ((h = !0), (i = s), (n = u));
            break;
          }
          x = x.sibling;
        }
        if (!h) {
          for (x = u.child; x;) {
            if (x === n) {
              ((h = !0), (n = u), (i = s));
              break;
            }
            if (x === i) {
              ((h = !0), (i = u), (n = s));
              break;
            }
            x = x.sibling;
          }
          if (!h) throw Error(r(189));
        }
      }
      if (n.alternate !== i) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? t : e;
  }
  function g(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null;) {
      if (((e = g(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  function p(t, e, n, i, s, u) {
    for (; t !== null;) {
      if (
        ((t.tag === 5 || t.tag === 27 || t.tag === 6) && n(t, i, s, u)) ||
        ((t.tag !== 22 || t.memoizedState === null) &&
          (e || (t.tag !== 5 && t.tag !== 27)) &&
          p(t.child, e, n, i, s, u))
      )
        return !0;
      t = t.sibling;
    }
    return !1;
  }
  function S(t) {
    for (t = t.return; t !== null;) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function N(t) {
    var e = !1;
    for (
      t = t.return;
      t !== null &&
      (t.tag === 4 && (e = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27));
    )
      t = t.return;
    return e;
  }
  function M(t) {
    var e = [null, null],
      n = S(t);
    return (n === null || z(e, t, n.child, { foundSelf: !1 }), e);
  }
  function z(t, e, n, i) {
    for (; n !== null;) {
      if (n === e) i.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (i.foundSelf) return ((t[1] = n), !0);
        t[0] = n;
      } else if (
        (n.tag !== 22 || n.memoizedState === null) &&
        z(t, e, n.child, i)
      )
        return !0;
      n = n.sibling;
    }
    return !1;
  }
  function A(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(r(559));
    }
  }
  var U = null,
    Y = null;
  function B(t, e, n) {
    return t === n ? !0 : t === e ? ((U = t), !0) : !1;
  }
  function q(t, e, n) {
    return t === n ? ((Y = t), !1) : t === e ? (Y !== null && (U = t), !0) : !1;
  }
  function K(t) {
    if (t === null) return null;
    do t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function tt(t, e, n) {
    for (var i = 0, s = t; s; s = n(s)) i++;
    s = 0;
    for (var u = e; u; u = n(u)) s++;
    for (; 0 < i - s;) ((t = n(t)), i--);
    for (; 0 < s - i;) ((e = n(e)), s--);
    for (; i--;) {
      if (t === e || (e !== null && t === e.alternate)) return t;
      ((t = n(t)), (e = n(e)));
    }
    return null;
  }
  var Q = Object.assign,
    G = Symbol.for("react.element"),
    it = Symbol.for("react.transitional.element"),
    F = Symbol.for("react.portal"),
    dt = Symbol.for("react.fragment"),
    St = Symbol.for("react.strict_mode"),
    Xt = Symbol.for("react.profiler"),
    Zt = Symbol.for("react.consumer"),
    pt = Symbol.for("react.context"),
    X = Symbol.for("react.forward_ref"),
    st = Symbol.for("react.suspense"),
    J = Symbol.for("react.suspense_list"),
    ft = Symbol.for("react.memo"),
    mt = Symbol.for("react.lazy"),
    ee = Symbol.for("react.activity"),
    en = Symbol.for("react.legacy_hidden"),
    Ma = Symbol.for("react.memo_cache_sentinel"),
    w = Symbol.for("react.view_transition"),
    k = Symbol.for("react.recoverable"),
    nt = Symbol.iterator;
  function at(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (nt && t[nt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Tt = Symbol.for("react.client.reference");
  function Et(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Tt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case dt:
        return "Fragment";
      case Xt:
        return "Profiler";
      case St:
        return "StrictMode";
      case st:
        return "Suspense";
      case J:
        return "SuspenseList";
      case ee:
        return "Activity";
      case w:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case F:
          return "Portal";
        case pt:
          return t.displayName || "Context";
        case Zt:
          return (t._context.displayName || "Context") + ".Consumer";
        case X:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case ft:
          return (
            (e = t.displayName || null),
            e !== null ? e : Et(t.type) || "Memo"
          );
        case mt:
          ((e = t._payload), (t = t._init));
          try {
            return Et(t(e));
          } catch {}
      }
    return null;
  }
  var At = Array.isArray,
    I = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ot = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    zn = { pending: !1, data: null, method: null, action: null },
    Br = [],
    ii = -1;
  function dn(t) {
    return { current: t };
  }
  function se(t) {
    0 > ii || ((t.current = Br[ii]), (Br[ii] = null), ii--);
  }
  function Vt(t, e) {
    (ii++, (Br[ii] = t.current), (t.current = e));
  }
  var hn = dn(null),
    rl = dn(null),
    Jn = dn(null),
    Es = dn(null);
  function Cs(t, e) {
    switch ((Vt(Jn, e), Vt(rl, t), Vt(hn, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Ly(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = Ly(e)), (t = Hy(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (se(hn), Vt(hn, t));
  }
  function li() {
    (se(hn), se(rl), se(Jn));
  }
  function Lr(t) {
    var e = t.memoizedState;
    (e !== null && ((Qi._currentValue = e.memoizedState), Vt(Es, t)),
      (e = hn.current));
    var n = Hy(e, t.type);
    e !== n && (Vt(rl, t), Vt(hn, n));
  }
  function As(t) {
    (rl.current === t && (se(hn), se(rl)),
      Es.current === t && (se(Es), (Qi._currentValue = zn)));
  }
  var Hr, lh;
  function $n(t) {
    if (Hr === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ((Hr = (e && e[1]) || ""),
          (lh =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Hr +
      t +
      lh
    );
  }
  var Yr = !1;
  function qr(t, e) {
    if (!t || Yr) return "";
    Yr = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var H = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(H.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(H, []);
                } catch (Z) {
                  var R = Z;
                }
                Reflect.construct(t, [], H);
              } else {
                try {
                  H.call();
                } catch (Z) {
                  R = Z;
                }
                H = !1;
                try {
                  var _ = Object.getOwnPropertyDescriptor(t.prototype, "props");
                  (Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function () {
                      throw Error();
                    },
                  }),
                    (H = !0),
                    new t());
                } finally {
                  H &&
                    (_ !== void 0
                      ? Object.defineProperty(t.prototype, "props", _)
                      : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (Z) {
                R = Z;
              }
              (H = t()) &&
                typeof H.catch == "function" &&
                H.catch(function () {});
            }
          } catch (Z) {
            if (Z && R && typeof Z.stack == "string") return [Z.stack, R.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name",
      );
      s &&
        s.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = i.DetermineComponentFrameRoot(),
        h = u[0],
        x = u[1];
      if (h && x) {
        var T = h.split(`
`),
          O = x.split(`
`);
        for (
          s = i = 0;
          i < T.length && !T[i].includes("DetermineComponentFrameRoot");
        )
          i++;
        for (; s < O.length && !O[s].includes("DetermineComponentFrameRoot");)
          s++;
        if (i === T.length || s === O.length)
          for (
            i = T.length - 1, s = O.length - 1;
            1 <= i && 0 <= s && T[i] !== O[s];
          )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (T[i] !== O[s]) {
            if (i !== 1 || s !== 1)
              do
                if ((i--, s--, 0 > s || T[i] !== O[s])) {
                  var V =
                    `
` + T[i].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      V.includes("<anonymous>") &&
                      (V = V.replace("<anonymous>", t.displayName)),
                    V
                  );
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      ((Yr = !1), (Error.prepareStackTrace = n));
    }
    return (n = t ? t.displayName || t.name : "") ? $n(n) : "";
  }
  function Ex(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return $n(t.type);
      case 16:
        return $n("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? $n("Suspense Fallback")
          : $n("Suspense");
      case 19:
        return $n("SuspenseList");
      case 0:
      case 15:
        return qr(t.type, !1);
      case 11:
        return qr(t.type.render, !1);
      case 1:
        return qr(t.type, !0);
      case 31:
        return $n("Activity");
      case 30:
        return $n("ViewTransition");
      default:
        return "";
    }
  }
  function sh(t) {
    try {
      var e = "",
        n = null;
      do ((e += Ex(t, n)), (n = t), (t = t.return));
      while (t);
      return e;
    } catch (i) {
      return (
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack
      );
    }
  }
  var Gr = Object.prototype.hasOwnProperty,
    kr = a.unstable_scheduleCallback,
    Xr = a.unstable_cancelCallback,
    Cx = a.unstable_shouldYield,
    Ax = a.unstable_requestPaint,
    De = a.unstable_now,
    wx = a.unstable_getCurrentPriorityLevel,
    oh = a.unstable_ImmediatePriority,
    rh = a.unstable_UserBlockingPriority,
    ws = a.unstable_NormalPriority,
    Nx = a.unstable_LowPriority,
    uh = a.unstable_IdlePriority,
    Rx = a.log,
    Mx = a.unstable_setDisableYieldValue,
    ul = null,
    Oe = null;
  function Wn(t) {
    if (
      (typeof Rx == "function" && Mx(t),
      Oe && typeof Oe.setStrictMode == "function")
    )
      try {
        Oe.setStrictMode(ul, t);
      } catch {}
  }
  var ze = Math.clz32 ? Math.clz32 : zx,
    Dx = Math.log,
    Ox = Math.LN2;
  function zx(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Dx(t) / Ox) | 0)) | 0);
  }
  var Ns = 256,
    Rs = 262144,
    Ms = 4194304;
  function Da(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & -t;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Ds(t, e, n) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var s = 0,
      u = t.suspendedLanes,
      h = t.pingedLanes;
    t = t.warmLanes;
    var x = i & 134217727;
    return (
      x !== 0
        ? ((i = x & ~u),
          i !== 0
            ? (s = Da(i))
            : ((h &= x),
              h !== 0
                ? (s = Da(h))
                : n || ((n = x & ~t), n !== 0 && (s = Da(n)))))
        : ((x = i & ~u),
          x !== 0
            ? (s = Da(x))
            : h !== 0
              ? (s = Da(h))
              : n || ((n = i & ~t), n !== 0 && (s = Da(n)))),
      s === 0
        ? 0
        : e !== 0 &&
            e !== s &&
            (e & u) === 0 &&
            ((u = s & -s),
            (n = e & -e),
            u >= n || (u === 32 && (n & 4194048) !== 0))
          ? e
          : s
    );
  }
  function cl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function ch(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n;) {
        var i = 31 - ze(n),
          s = 1 << i;
        ((e |= t[i]), (n &= ~s));
      }
    return e;
  }
  function jx(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function fh() {
    var t = Ms;
    return ((Ms <<= 1), (Ms & 62914560) === 0 && (Ms = 4194304), t);
  }
  function Zr(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function fl(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function _x(t, e, n, i, s, u) {
    var h = t.pendingLanes;
    ((t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0));
    var x = t.entanglements,
      T = t.expirationTimes,
      O = t.hiddenUpdates;
    for (n = h & ~n; 0 < n;) {
      var V = 31 - ze(n),
        H = 1 << V;
      ((x[V] = 0), (T[V] = -1));
      var R = O[V];
      if (R !== null)
        for (O[V] = null, V = 0; V < R.length; V++) {
          var _ = R[V];
          _ !== null && (_.lane &= -536870913);
        }
      n &= ~H;
    }
    (i !== 0 && dh(t, i, 0),
      u !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(h & ~e)));
  }
  function dh(t, e, n) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var i = 31 - ze(e);
    ((t.entangledLanes |= e),
      (t.entanglements[i] = t.entanglements[i] | 1073741824 | (n & 261930)));
  }
  function hh(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n;) {
      var i = 31 - ze(n),
        s = 1 << i;
      ((s & e) | (t[i] & e) && (t[i] |= e), (n &= ~s));
    }
  }
  function mh(t, e) {
    var n = e & -e;
    return (
      (n = (n & 42) !== 0 ? 1 : Qr(n)),
      (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
    );
  }
  function Qr(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Kr(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ph() {
    var t = ot.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Tg(t.type));
  }
  function yh(t, e) {
    var n = ot.p;
    try {
      return ((ot.p = t), e());
    } finally {
      ot.p = n;
    }
  }
  var jn = Math.random().toString(36).slice(2),
    oe = "__reactFiber$" + jn,
    Ee = "__reactProps$" + jn,
    si = "__reactContainer$" + jn,
    gh = "__reactEvents$" + jn,
    Vx = "__reactListeners$" + jn,
    Ux = "__reactHandles$" + jn,
    vh = "__reactResources$" + jn,
    dl = "__reactMarker$" + jn,
    Os = "__reactLoad$" + jn;
  function zs(t) {
    (delete t[oe], delete t[Ee], delete t[Vx], delete t[Ux]);
  }
  function Oa(t) {
    var e;
    if ((e = t[oe])) return e;
    for (var n = t.parentNode; n;) {
      if ((e = n[si] || n[oe])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = ng(t); t !== null;) {
            if ((n = t[oe])) return n;
            t = ng(t);
          }
        return e;
      }
      ((t = n), (n = t.parentNode));
    }
    return null;
  }
  function oi(t) {
    if ((t = t[oe] || t[si])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function hl(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function ri(t) {
    var e = t[vh];
    return (
      e ||
        (e = t[vh] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function ne(t) {
    t[dl] = !0;
  }
  function xh(t) {
    t[Os] = void 0;
  }
  var bh = new Set(),
    Sh = {};
  function za(t, e) {
    (ui(t, e), ui(t + "Capture", e));
  }
  function ui(t, e) {
    for (Sh[t] = e, t = 0; t < e.length; t++) bh.add(e[t]);
  }
  var Bx = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Th = {},
    Eh = {};
  function Lx(t) {
    return Gr.call(Eh, t)
      ? !0
      : Gr.call(Th, t)
        ? !1
        : Bx.test(t)
          ? (Eh[t] = !0)
          : ((Th[t] = !0), !1);
  }
  var Ct = !1;
  function Ch() {
    var t = Ct;
    return ((Ct = !1), t);
  }
  function js(t, e, n) {
    if (Lx(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var i = e.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, n);
      }
  }
  function _s(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, n);
    }
  }
  function _n(t, e, n, i) {
    if (i === null) t.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, i);
    }
  }
  function je(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Ah(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Hx(t, e, n) {
    var i = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var s = i.get,
        u = i.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (h) {
            ((n = "" + h), u.call(this, h));
          },
        }),
        Object.defineProperty(t, e, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (h) {
            n = "" + h;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function Pr(t) {
    if (!t._valueTracker) {
      var e = Ah(t) ? "checked" : "value";
      t._valueTracker = Hx(t, e, "" + t[e]);
    }
  }
  function wh(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      i = "";
    return (
      t && (i = Ah(t) ? (t.checked ? "true" : "false") : t.value),
      (t = i),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  var Yx = /[\n"\\]/g;
  function ke(t) {
    return t.replace(Yx, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Fr(t, e, n, i, s, u, h, x) {
    ((t.name = ""),
      h != null &&
      typeof h != "function" &&
      typeof h != "symbol" &&
      typeof h != "boolean"
        ? (t.type = h)
        : t.removeAttribute("type"),
      e != null
        ? h === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + je(e))
          : t.value !== "" + je(e) && (t.value = "" + je(e))
        : (h !== "submit" && h !== "reset") || t.removeAttribute("value"),
      e != null
        ? h === "number" && t.value == e
          ? Jr(t, je(t.value))
          : Jr(t, je(e))
        : n != null
          ? Jr(t, je(n))
          : i != null && t.removeAttribute("value"),
      s == null && u != null && (t.defaultChecked = !!u),
      s != null &&
        (t.checked = s && typeof s != "function" && typeof s != "symbol"),
      x != null &&
      typeof x != "function" &&
      typeof x != "symbol" &&
      typeof x != "boolean"
        ? (t.name = "" + je(x))
        : t.removeAttribute("name"));
  }
  function Nh(t, e, n, i, s, u, h, x) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (t.type = u),
      e != null || n != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || e != null)) {
        Pr(t);
        return;
      }
      ((n = n != null ? "" + je(n) : ""),
        (e = e != null ? "" + je(e) : n),
        x || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((i = i ?? s),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (t.checked = x ? t.checked : !!i),
      (t.defaultChecked = !!i),
      h != null &&
        typeof h != "function" &&
        typeof h != "symbol" &&
        typeof h != "boolean" &&
        (t.name = h),
      Pr(t));
  }
  function Jr(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function ci(t, e, n, i) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        ((s = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== s && (t[n].selected = s),
          s && i && (t[n].defaultSelected = !0));
    } else {
      for (n = "" + je(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          ((t[s].selected = !0), i && (t[s].defaultSelected = !0));
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Rh(t, e, n) {
    if (
      e != null &&
      ((e = "" + je(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + je(n) : "";
  }
  function Mh(t, e, n, i) {
    if (e == null) {
      if (i != null) {
        if (n != null) throw Error(r(92));
        if (At(i)) {
          if (1 < i.length) throw Error(r(93));
          i = i[0];
        }
        n = i;
      }
      (n == null && (n = ""), (e = n));
    }
    ((n = je(e)),
      (t.defaultValue = n),
      (i = t.textContent),
      i === n && i !== "" && i !== null && (t.value = i),
      Pr(t));
  }
  function fi(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var qx = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Dh(t, e, n) {
    var i = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? i
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : i
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || qx.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function Oh(t, e, n) {
    if (e != null && typeof e != "object") throw Error(r(62));
    if (((t = t.style), n != null)) {
      for (var i in n)
        !n.hasOwnProperty(i) ||
          (e != null && e.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? t.setProperty(i, "")
            : i === "float"
              ? (t.cssFloat = "")
              : (t[i] = ""),
          (Ct = !0));
      for (var s in e)
        ((i = e[s]),
          e.hasOwnProperty(s) && n[s] !== i && (Dh(t, s, i), (Ct = !0)));
    } else for (var u in e) e.hasOwnProperty(u) && Dh(t, u, e[u]);
  }
  function $r(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Gx = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["maskType", "mask-type"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    kx =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Vs(t) {
    return kx.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function mn() {}
  var Wr = null;
  function Ir(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var di = null,
    hi = null;
  function zh(t) {
    var e = oi(t);
    if (e && (t = e.stateNode)) {
      var n = t[Ee] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Fr(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode;) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + ke("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var i = n[e];
              if (i !== t && i.form === t.form) {
                var s = i[Ee] || null;
                if (!s) throw Error(r(90));
                Fr(
                  i,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name,
                );
              }
            }
            for (e = 0; e < n.length; e++)
              ((i = n[e]), i.form === t.form && wh(i));
          }
          break t;
        case "textarea":
          Rh(t, n.value, n.defaultValue);
          break t;
        case "select":
          ((e = n.value), e != null && ci(t, !!n.multiple, e, !1));
      }
    }
  }
  var tu = !1;
  function jh(t, e, n) {
    if (tu) return t(e, n);
    tu = !0;
    try {
      var i = t(e);
      return i;
    } finally {
      if (
        ((tu = !1),
        (di !== null || hi !== null) &&
          (Uo(), di && ((e = di), (t = hi), (hi = di = null), zh(e), t)))
      )
        for (e = 0; e < t.length; e++) zh(t[e]);
    }
  }
  function ml(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var i = n[Ee] || null;
    if (i === null) return null;
    n = i[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((i = !i.disabled) ||
          ((t = t.type),
          (i = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !i));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(r(231, e, typeof n));
    return n;
  }
  var Vn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    eu = !1;
  if (Vn)
    try {
      var pl = {};
      (Object.defineProperty(pl, "passive", {
        get: function () {
          eu = !0;
        },
      }),
        window.addEventListener("test", pl, pl),
        window.removeEventListener("test", pl, pl));
    } catch {
      eu = !1;
    }
  var In = null,
    nu = null,
    Us = null;
  function _h() {
    if (Us) return Us;
    var t,
      e = nu,
      n = e.length,
      i,
      s = "value" in In ? In.value : In.textContent,
      u = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++);
    var h = n - t;
    for (i = 1; i <= h && e[n - i] === s[u - i]; i++);
    return (Us = s.slice(t, 1 < i ? 1 - i : void 0));
  }
  function Bs(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Ls() {
    return !0;
  }
  function Vh() {
    return !1;
  }
  function ge(t) {
    function e(n, i, s, u, h) {
      ((this._reactName = n),
        (this._targetInst = s),
        (this.type = i),
        (this.nativeEvent = u),
        (this.target = h),
        (this.currentTarget = null));
      for (var x in t)
        t.hasOwnProperty(x) && ((n = t[x]), (this[x] = n ? n(u) : u[x]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Ls
          : Vh),
        (this.isPropagationStopped = Vh),
        this
      );
    }
    return (
      Q(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Ls));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ls));
        },
        persist: function () {},
        isPersistent: Ls,
      }),
      e
    );
  }
  var ta = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Hs = ge(ta),
    yl = Q({}, ta, { view: 0, detail: 0 }),
    Xx = ge(yl),
    au,
    iu,
    gl,
    Ys = Q({}, yl, {
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
      getModifierState: su,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== gl &&
              (gl && t.type === "mousemove"
                ? ((au = t.screenX - gl.screenX), (iu = t.screenY - gl.screenY))
                : (iu = au = 0),
              (gl = t)),
            au);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : iu;
      },
    }),
    Uh = ge(Ys),
    Zx = Q({}, Ys, { dataTransfer: 0 }),
    Qx = ge(Zx),
    Kx = Q({}, yl, { relatedTarget: 0 }),
    lu = ge(Kx),
    Px = Q({}, ta, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Fx = ge(Px),
    Jx = Q({}, ta, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    $x = ge(Jx),
    Wx = Q({}, ta, { data: 0 }),
    Bh = ge(Wx),
    Ix = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    tb = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    eb = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function nb(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = eb[t])
        ? !!e[t]
        : !1;
  }
  function su() {
    return nb;
  }
  var ab = Q({}, yl, {
      key: function (t) {
        if (t.key) {
          var e = Ix[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Bs(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? tb[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: su,
      charCode: function (t) {
        return t.type === "keypress" ? Bs(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Bs(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    ib = ge(ab),
    lb = Q({}, Ys, {
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
    }),
    Lh = ge(lb),
    sb = Q({}, ta, { submitter: 0 }),
    ob = ge(sb),
    rb = Q({}, yl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: su,
    }),
    ub = ge(rb),
    cb = Q({}, ta, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    fb = ge(cb),
    db = Q({}, Ys, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    hb = ge(db),
    mb = Q({}, ta, { newState: 0, oldState: 0, source: 0 }),
    pb = ge(mb),
    yb = [9, 13, 27, 32],
    ou = Vn && "CompositionEvent" in window,
    vl = null;
  Vn && "documentMode" in document && (vl = document.documentMode);
  var gb = Vn && "TextEvent" in window && !vl,
    Hh = Vn && (!ou || (vl && 8 < vl && 11 >= vl)),
    Yh = " ",
    qh = !1;
  function Gh(t, e) {
    switch (t) {
      case "keyup":
        return yb.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function kh(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var mi = !1;
  function vb(t, e) {
    switch (t) {
      case "compositionend":
        return kh(e);
      case "keypress":
        return e.which !== 32 ? null : ((qh = !0), Yh);
      case "textInput":
        return ((t = e.data), t === Yh && qh ? null : t);
      default:
        return null;
    }
  }
  function xb(t, e) {
    if (mi)
      return t === "compositionend" || (!ou && Gh(t, e))
        ? ((t = _h()), (Us = nu = In = null), (mi = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Hh && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var bb = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
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
  function Xh(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!bb[t.type] : e === "textarea";
  }
  function Zh(t, e, n, i) {
    (di ? (hi ? hi.push(i) : (hi = [i])) : (di = i),
      (e = Go(e, "onChange")),
      0 < e.length &&
        ((n = new Hs("onChange", "change", null, n, i)),
        t.push({ event: n, listeners: e })));
  }
  var xl = null,
    bl = null;
  function Sb(t) {
    zy(t, 0);
  }
  function qs(t) {
    var e = hl(t);
    if (wh(e)) return t;
  }
  function Qh(t, e) {
    if (t === "change") return e;
  }
  var Kh = !1;
  if (Vn) {
    var ru;
    if (Vn) {
      var uu = "oninput" in document;
      if (!uu) {
        var Ph = document.createElement("div");
        (Ph.setAttribute("oninput", "return;"),
          (uu = typeof Ph.oninput == "function"));
      }
      ru = uu;
    } else ru = !1;
    Kh = ru && (!document.documentMode || 9 < document.documentMode);
  }
  function Fh() {
    xl && (xl.detachEvent("onpropertychange", Jh), (bl = xl = null));
  }
  function Jh(t) {
    if (t.propertyName === "value" && qs(bl)) {
      var e = [];
      (Zh(e, bl, t, Ir(t)), jh(Sb, e));
    }
  }
  function Tb(t, e, n) {
    t === "focusin"
      ? (Fh(), (xl = e), (bl = n), xl.attachEvent("onpropertychange", Jh))
      : t === "focusout" && Fh();
  }
  function Eb(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return qs(bl);
  }
  function Cb(t, e) {
    if (t === "click") return qs(e);
  }
  function Ab(t, e) {
    if (t === "input" || t === "change") return qs(e);
  }
  function wb(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var _e = typeof Object.is == "function" ? Object.is : wb;
  function Sl(t, e) {
    if (_e(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var s = n[i];
      if (!Gr.call(e, s) || !_e(t[s], e[s])) return !1;
    }
    return !0;
  }
  function cu(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function $h(t) {
    for (; t && t.firstChild;) t = t.firstChild;
    return t;
  }
  function Wh(t, e) {
    var n = $h(t);
    t = 0;
    for (var i; n;) {
      if (n.nodeType === 3) {
        if (((i = t + n.textContent.length), t <= e && i >= e))
          return { node: n, offset: e - t };
        t = i;
      }
      t: {
        for (; n;) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = $h(n);
    }
  }
  function Ih(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Ih(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function tm(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = cu(t.document); e instanceof t.HTMLIFrameElement;) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = cu(t.document);
    }
    return e;
  }
  function fu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Nb = Vn && "documentMode" in document && 11 >= document.documentMode,
    pi = null,
    du = null,
    Tl = null,
    hu = !1;
  function em(t, e, n) {
    var i =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    hu ||
      pi == null ||
      pi !== cu(i) ||
      ((i = pi),
      "selectionStart" in i && fu(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (Tl && Sl(Tl, i)) ||
        ((Tl = i),
        (i = Go(du, "onSelect")),
        0 < i.length &&
          ((e = new Hs("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: i }),
          (e.target = pi))));
  }
  function ja(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var yi = {
      animationend: ja("Animation", "AnimationEnd"),
      animationiteration: ja("Animation", "AnimationIteration"),
      animationstart: ja("Animation", "AnimationStart"),
      transitionrun: ja("Transition", "TransitionRun"),
      transitionstart: ja("Transition", "TransitionStart"),
      transitioncancel: ja("Transition", "TransitionCancel"),
      transitionend: ja("Transition", "TransitionEnd"),
    },
    mu = {},
    nm = {};
  Vn &&
    ((nm = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete yi.animationend.animation,
      delete yi.animationiteration.animation,
      delete yi.animationstart.animation),
    "TransitionEvent" in window || delete yi.transitionend.transition);
  function _a(t) {
    if (mu[t]) return mu[t];
    if (!yi[t]) return t;
    var e = yi[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in nm) return (mu[t] = e[n]);
    return t;
  }
  var am = _a("animationend"),
    im = _a("animationiteration"),
    lm = _a("animationstart"),
    Rb = _a("transitionrun"),
    Mb = _a("transitionstart"),
    Db = _a("transitioncancel"),
    sm = _a("transitionend"),
    om = new Map(),
    pu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  pu.push("scrollEnd");
  function nn(t, e) {
    (om.set(t, e), za(e, [t]));
  }
  var Ob = 0;
  function Un(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = on.identifierPrefix;
    var n = Ob++;
    return ((t = "_" + t + "t_" + n.toString(32) + "_"), (e.autoName = t));
  }
  function rm(t) {
    if (t == null || typeof t == "string") return t;
    var e = null,
      n = Ui;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var s = t[n[i]];
        if (s != null) {
          if (s === "none") return "none";
          e = e == null ? s : e + (" " + s);
        }
      }
    return e ?? t.default;
  }
  function Bn(t, e) {
    return (
      (t = rm(t)),
      (e = rm(e)),
      e == null ? (t === "auto" ? null : t) : e === "auto" ? null : e
    );
  }
  var Gs =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    Xe = [],
    gi = 0,
    yu = 0;
  function ks() {
    for (var t = gi, e = (yu = gi = 0); e < t;) {
      var n = Xe[e];
      Xe[e++] = null;
      var i = Xe[e];
      Xe[e++] = null;
      var s = Xe[e];
      Xe[e++] = null;
      var u = Xe[e];
      if (((Xe[e++] = null), i !== null && s !== null)) {
        var h = i.pending;
        (h === null ? (s.next = s) : ((s.next = h.next), (h.next = s)),
          (i.pending = s));
      }
      u !== 0 && um(n, s, u);
    }
  }
  function Xs(t, e, n, i) {
    ((Xe[gi++] = t),
      (Xe[gi++] = e),
      (Xe[gi++] = n),
      (Xe[gi++] = i),
      (yu |= i),
      (t.lanes |= i),
      (t = t.alternate),
      t !== null && (t.lanes |= i));
  }
  function gu(t, e, n, i) {
    return (Xs(t, e, n, i), Zs(t));
  }
  function Va(t, e) {
    return (Xs(t, null, null, e), Zs(t));
  }
  function um(t, e, n) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n);
    for (var s = !1, u = t.return; u !== null;)
      ((u.childLanes |= n),
        (i = u.alternate),
        i !== null && (i.childLanes |= n),
        u.tag === 22 &&
          ((t = u.stateNode), t === null || t._visibility & 1 || (s = !0)),
        (t = u),
        (u = u.return));
    return t.tag === 3
      ? ((u = t.stateNode),
        s &&
          e !== null &&
          ((s = 31 - ze(n)),
          (t = u.hiddenUpdates),
          (i = t[s]),
          i === null ? (t[s] = [e]) : i.push(e),
          (e.lane = n | 536870912)),
        u)
      : null;
  }
  function Zs(t) {
    if (50 < Xl) throw ((Xl = 0), (Vo = null), Error(r(185)));
    for (var e = t.return; e !== null;) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var vi = {};
  function zb(t, e, n, i) {
    ((this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Ce(t, e, n, i) {
    return new zb(t, e, n, i);
  }
  function vu(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function Ln(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = Ce(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 1206910976),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function cm(t, e) {
    t.flags &= 1206910978;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Qs(t, e, n, i, s, u) {
    var h = 0;
    if (((i = t), typeof i == "function")) vu(i) && (h = 1);
    else if (typeof i == "string")
      h = s2(t, n, hn.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (i) {
        case ee:
          return (
            (t = Ce(31, n, e, s)),
            (t.elementType = ee),
            (t.lanes = u),
            t
          );
        case dt:
          return Ua(n.children, s, u, e);
        case St:
          ((h = 8), (s |= 24));
          break;
        case Xt:
          return (
            (t = Ce(12, n, e, s | 2)),
            (t.elementType = Xt),
            (t.lanes = u),
            t
          );
        case st:
          return (
            (t = Ce(13, n, e, s)),
            (t.elementType = st),
            (t.lanes = u),
            t
          );
        case J:
          return ((t = Ce(19, n, e, s)), (t.elementType = J), (t.lanes = u), t);
        case en:
        case w:
          return (
            (t = s | 32),
            (t = Ce(30, n, e, t)),
            (t.elementType = w),
            (t.lanes = u),
            (t.stateNode = {
              autoName: null,
              paired: null,
              clones: null,
              ref: null,
            }),
            t
          );
        default:
          if (typeof i == "object" && i !== null)
            switch (i.$$typeof) {
              case pt:
                h = 10;
                break t;
              case Zt:
                h = 9;
                break t;
              case X:
                h = 11;
                break t;
              case ft:
                h = 14;
                break t;
              case mt:
                ((h = 16), (i = null));
                break t;
            }
          ((h = 29),
            (n = Error(r(130, t === null ? "null" : typeof t, ""))),
            (i = null));
      }
    return (
      (e = Ce(h, n, e, s)),
      (e.elementType = t),
      (e.type = i),
      (e.lanes = u),
      e
    );
  }
  function Ua(t, e, n, i) {
    return ((t = Ce(7, t, i, e)), (t.lanes = n), t);
  }
  function xu(t, e, n) {
    return ((t = Ce(6, t, null, e)), (t.lanes = n), t);
  }
  function fm(t) {
    var e = Ce(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function bu(t, e, n) {
    return (
      (e = Ce(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var dm = new WeakMap();
  function Ze(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = dm.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: sh(e) }), dm.set(t, e), e);
    }
    return { value: t, source: e, stack: sh(e) };
  }
  var xi = [],
    bi = 0,
    Ks = null,
    El = 0,
    Qe = [],
    Ke = 0,
    ea = null,
    pn = 1,
    yn = "";
  function Hn(t, e) {
    ((xi[bi++] = El), (xi[bi++] = Ks), (Ks = t), (El = e));
  }
  function hm(t, e, n) {
    ((Qe[Ke++] = pn), (Qe[Ke++] = yn), (Qe[Ke++] = ea), (ea = t));
    var i = pn;
    t = yn;
    var s = 32 - ze(i) - 1;
    ((i &= ~(1 << s)), (n += 1));
    var u = 32 - ze(e) + s;
    if (30 < u) {
      var h = s - (s % 5);
      ((u = (i & ((1 << h) - 1)).toString(32)),
        (i >>= h),
        (s -= h),
        (pn = (1 << (32 - ze(e) + s)) | (n << s) | i),
        (yn = u + t));
    } else ((pn = (1 << u) | (n << s) | i), (yn = t));
  }
  function Ps(t) {
    t.return !== null && (Hn(t, 1), hm(t, 1, 0));
  }
  function Su(t) {
    for (; t === Ks;)
      ((Ks = xi[--bi]), (xi[bi] = null), (El = xi[--bi]), (xi[bi] = null));
    for (; t === ea;)
      ((ea = Qe[--Ke]),
        (Qe[Ke] = null),
        (yn = Qe[--Ke]),
        (Qe[Ke] = null),
        (pn = Qe[--Ke]),
        (Qe[Ke] = null));
  }
  function mm(t, e) {
    ((Qe[Ke++] = pn),
      (Qe[Ke++] = yn),
      (Qe[Ke++] = ea),
      (pn = e.id),
      (yn = e.overflow),
      (ea = t));
  }
  var ae = null,
    Ut = null,
    ht = !1,
    na = null,
    Pe = !1,
    Tu = Error(r(519));
  function aa(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Cl(Ze(e, t)), Tu);
  }
  function pm(t) {
    var e = t.stateNode,
      n = t.type,
      i = t.memoizedProps;
    switch (((e[oe] = t), (e[Ee] = i), n)) {
      case "dialog":
        (gt("cancel", e), gt("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        gt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ql.length; n++) gt(Ql[n], e);
        break;
      case "source":
        gt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (gt("error", e), gt("load", e));
        break;
      case "details":
        gt("toggle", e);
        break;
      case "input":
        (gt("invalid", e),
          Nh(
            e,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0,
          ));
        break;
      case "select":
        gt("invalid", e);
        break;
      case "textarea":
        (gt("invalid", e), Mh(e, i.value, i.defaultValue, i.children));
    }
    ((n = i.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      i.suppressHydrationWarning === !0 ||
      Uy(e.textContent, n)
        ? (i.popover != null && (gt("beforetoggle", e), gt("toggle", e)),
          i.onScroll != null && gt("scroll", e),
          i.onScrollEnd != null && gt("scrollend", e),
          i.onClick != null && (e.onclick = mn),
          (e = !0))
        : (e = !1),
      e || aa(t, !0));
  }
  function Fs(t) {
    for (ae = t.return; ae;)
      switch (ae.tag) {
        case 5:
        case 31:
        case 13:
          Pe = !1;
          return;
        case 27:
        case 3:
          Pe = !0;
          return;
        default:
          ae = ae.return;
      }
  }
  function Si(t) {
    if (t !== ae) return !1;
    if (!ht) return (Fs(t), (ht = !0), !1);
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || Wc(t.type, t.memoizedProps))),
        (n = !n)),
      n && Ut && aa(t),
      Fs(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      Ut = eg(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      Ut = eg(t);
    } else
      e === 27
        ? ((e = Ut), xa(t.type) ? ((t = rf), (rf = null), (Ut = t)) : (Ut = e))
        : (Ut = ae ? Je(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Ba() {
    ((Ut = ae = null), (ht = !1));
  }
  function Eu() {
    var t = na;
    return (
      t !== null &&
        (Ne === null ? (Ne = t) : Ne.push.apply(Ne, t), (na = null)),
      t
    );
  }
  function Cl(t) {
    na === null ? (na = [t]) : na.push(t);
  }
  var Cu = dn(null),
    La = null,
    Yn = null;
  function ia(t, e, n) {
    (Vt(Cu, e._currentValue), (e._currentValue = n));
  }
  function qn(t) {
    ((t._currentValue = Cu.current), se(Cu));
  }
  function Js(t, e, n) {
    for (; t !== null;) {
      var i = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
          : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function Au(t, e, n, i) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null;) {
      var u = s.dependencies;
      if (u !== null) {
        var h = s.child;
        u = u.firstContext;
        t: for (; u !== null;) {
          var x = u;
          u = s;
          for (var T = 0; T < e.length; T++)
            if (x.context === e[T]) {
              ((u.lanes |= n),
                (x = u.alternate),
                x !== null && (x.lanes |= n),
                Js(u.return, n, t),
                i || (h = null));
              break t;
            }
          u = x.next;
        }
      } else if (s.tag === 18) {
        if (((h = s.return), h === null)) throw Error(r(341));
        ((h.lanes |= n),
          (u = h.alternate),
          u !== null && (u.lanes |= n),
          Js(h, n, t),
          (h = null));
      } else
        s.tag === 13 &&
        s.memoizedState !== null &&
        s.memoizedState.dehydrated === null
          ? ((s.lanes |= n),
            (h = s.alternate),
            h !== null && (h.lanes |= n),
            Js(s.return, n, t),
            (h = s.child),
            (h = h !== null ? h.sibling : null))
          : (h = s.child);
      if (h !== null) h.return = s;
      else
        for (h = s; h !== null;) {
          if (h === t) {
            h = null;
            break;
          }
          if (((s = h.sibling), s !== null)) {
            ((s.return = h.return), (h = s));
            break;
          }
          h = h.return;
        }
      s = h;
    }
  }
  function Ha(t, e, n, i) {
    t = null;
    for (var s = e, u = !1; s !== null;) {
      if (!u) {
        if ((s.flags & 524288) !== 0) u = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var h = s.alternate;
        if (h === null) throw Error(r(387));
        if (((h = h.memoizedProps), h !== null)) {
          var x = s.type;
          _e(s.pendingProps.value, h.value) ||
            (t !== null ? t.push(x) : (t = [x]));
        }
      } else if (s === Es.current) {
        if (((h = s.alternate), h === null)) throw Error(r(387));
        h.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (t !== null ? t.push(Qi) : (t = [Qi]));
      }
      s = s.return;
    }
    return (t !== null && Au(e, t, n, i), (e.flags |= 262144), t !== null);
  }
  function $s(t) {
    for (t = t.firstContext; t !== null;) {
      if (!_e(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Ya(t) {
    ((La = t),
      (Yn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function re(t) {
    return ym(La, t);
  }
  function Ws(t, e) {
    return (La === null && Ya(t), ym(t, e));
  }
  function ym(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), Yn === null)) {
      if (t === null) throw Error(r(308));
      ((Yn = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else Yn = Yn.next = e;
    return n;
  }
  var jb =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, i) {
                  t.push(i);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                }));
            };
          },
    _b = a.unstable_scheduleCallback,
    Vb = a.unstable_NormalPriority,
    Kt = {
      $$typeof: pt,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function wu() {
    return { controller: new jb(), data: new Map(), refCount: 0 };
  }
  function Al(t) {
    (t.refCount--,
      t.refCount === 0 &&
        _b(Vb, function () {
          t.controller.abort();
        }));
  }
  function gm(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var n = t.transitionTypes;
      for (
        n === null && (n = t.transitionTypes = []), t = 0;
        t < e.length;
        t++
      ) {
        var i = e[t];
        n.indexOf(i) === -1 && n.push(i);
      }
    }
  }
  var wl = null;
  function Ub(t) {
    var e = t.transitionTypes;
    return ((t.transitionTypes = null), e);
  }
  var Nl = null,
    Nu = 0,
    qa = 0,
    Ti = null;
  function Bb(t, e) {
    if (Nl === null) {
      var n = (Nl = []);
      ((Nu = 0),
        (qa = kc()),
        (Ti = {
          status: "pending",
          value: void 0,
          then: function (i) {
            n.push(i);
          },
        }));
    }
    return (Nu++, e.then(vm, vm), e);
  }
  function vm() {
    if (--Nu === 0 && ((wl = null), Nl !== null)) {
      Ti !== null && (Ti.status = "fulfilled");
      var t = Nl;
      ((Nl = null), (qa = 0), (Ti = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Lb(t, e) {
    var n = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          n.push(s);
        },
      };
    return (
      t.then(
        function () {
          ((i.status = "fulfilled"), (i.value = e));
          for (var s = 0; s < n.length; s++) (0, n[s])(e);
        },
        function (s) {
          for (i.status = "rejected", i.reason = s, s = 0; s < n.length; s++)
            (0, n[s])(void 0);
        },
      ),
      i
    );
  }
  var xm = I.S;
  I.S = function (t, e) {
    if (
      ((fy = De()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        Bb(t, e),
      wl !== null)
    )
      for (var n = Yi; n !== null;) (gm(n, wl), (n = n.next));
    if (((n = t.types), n !== null)) {
      for (var i = Yi; i !== null;) (gm(i, n), (i = i.next));
      if (qa !== 0) {
        ((i = wl), i === null && (i = wl = []));
        for (var s = 0; s < n.length; s++) {
          var u = n[s];
          i.indexOf(u) === -1 && i.push(u);
        }
      }
    }
    xm !== null && xm(t, e);
  };
  var Ga = dn(null);
  function Ru() {
    var t = Ga.current;
    return t !== null ? t : zt.pooledCache;
  }
  function Is(t, e) {
    e === null ? Vt(Ga, Ga.current) : Vt(Ga, e.pool);
  }
  function bm() {
    var t = Ru();
    return t === null ? null : { parent: Kt._currentValue, pool: t };
  }
  var Ei = Error(r(460)),
    Mu = Error(r(474)),
    to = Error(r(542)),
    eo = { then: function () {} };
  function Sm(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function Tm(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(mn, mn), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw (
          (t = e.reason),
          Cm(t),
          t === void 0 && !("reason" in e) ? Error(r(600)) : t
        );
      default:
        if (typeof e.status == "string") e.then(mn, mn);
        else {
          if (((t = zt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  ((s.status = "fulfilled"), (s.value = i));
                }
              },
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  ((s.status = "rejected"), (s.reason = i));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Cm(t), t);
        }
        throw ((Xa = e), Ei);
    }
  }
  function ka(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((Xa = n), Ei)
        : n;
    }
  }
  var Xa = null;
  function Em() {
    if (Xa === null) throw Error(r(459));
    var t = Xa;
    return ((Xa = null), t);
  }
  function Cm(t) {
    if (t === Ei || t === to) throw Error(r(483));
  }
  var Ci = null,
    Rl = 0;
  function no(t) {
    var e = Rl;
    return ((Rl += 1), Ci === null && (Ci = []), Tm(Ci, t, e));
  }
  function la(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function ao(t, e) {
    throw e.$$typeof === G
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function Am(t) {
    function e(D, C) {
      if (t) {
        var j = D.deletions;
        j === null ? ((D.deletions = [C]), (D.flags |= 16)) : j.push(C);
      }
    }
    function n(D, C) {
      if (!t) return null;
      for (; C !== null;) (e(D, C), (C = C.sibling));
      return null;
    }
    function i(D) {
      for (var C = new Map(); D !== null;)
        (D.key === null ? C.set(D.index, D) : C.set(D.key, D), (D = D.sibling));
      return C;
    }
    function s(D, C) {
      return ((D = Ln(D, C)), (D.index = 0), (D.sibling = null), D);
    }
    function u(D, C, j) {
      return (
        (D.index = j),
        t
          ? ((j = D.alternate),
            j !== null
              ? ((j = j.index), j < C ? ((D.flags |= 2), C) : j)
              : ((D.flags |= 134217730), C))
          : ((D.flags |= 1048576), C)
      );
    }
    function h(D) {
      return (t && D.alternate === null && (D.flags |= 134217730), D);
    }
    function x(D, C, j, L) {
      return C === null || C.tag !== 6
        ? ((C = xu(j, D.mode, L)), (C.return = D), C)
        : ((C = s(C, j)), (C.return = D), C);
    }
    function T(D, C, j, L) {
      var P = j.type;
      return P === dt
        ? ((D = V(D, C, j.props.children, L, j.key)), la(D, j), D)
        : C !== null &&
            (C.elementType === P ||
              (typeof P == "object" &&
                P !== null &&
                P.$$typeof === mt &&
                ka(P) === C.type))
          ? ((C = s(C, j.props)), la(C, j), (C.return = D), C)
          : ((C = Qs(j.type, j.key, j.props, null, D.mode, L)),
            la(C, j),
            (C.return = D),
            C);
    }
    function O(D, C, j, L) {
      return C === null ||
        C.tag !== 4 ||
        C.stateNode.containerInfo !== j.containerInfo ||
        C.stateNode.implementation !== j.implementation
        ? ((C = bu(j, D.mode, L)), (C.return = D), C)
        : ((C = s(C, j.children || [])), (C.return = D), C);
    }
    function V(D, C, j, L, P) {
      return C === null || C.tag !== 7
        ? ((C = Ua(j, D.mode, L, P)), (C.return = D), C)
        : ((C = s(C, j)), (C.return = D), C);
    }
    function H(D, C, j) {
      if (
        (typeof C == "string" && C !== "") ||
        typeof C == "number" ||
        typeof C == "bigint"
      )
        return ((C = xu("" + C, D.mode, j)), (C.return = D), C);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case it:
            return (
              (j = Qs(C.type, C.key, C.props, null, D.mode, j)),
              la(j, C),
              (j.return = D),
              j
            );
          case F:
            return ((C = bu(C, D.mode, j)), (C.return = D), C);
          case mt:
            return ((C = ka(C)), H(D, C, j));
        }
        if (At(C) || at(C))
          return ((C = Ua(C, D.mode, j, null)), (C.return = D), C);
        if (typeof C.then == "function") return H(D, no(C), j);
        if (C.$$typeof === pt) return H(D, Ws(D, C), j);
        ao(D, C);
      }
      return null;
    }
    function R(D, C, j, L) {
      var P = C !== null ? C.key : null;
      if (
        (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
      )
        return P !== null ? null : x(D, C, "" + j, L);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case it:
            return j.key === P ? T(D, C, j, L) : null;
          case F:
            return j.key === P ? O(D, C, j, L) : null;
          case mt:
            return ((j = ka(j)), R(D, C, j, L));
        }
        if (At(j) || at(j)) return P !== null ? null : V(D, C, j, L, null);
        if (typeof j.then == "function") return R(D, C, no(j), L);
        if (j.$$typeof === pt) return R(D, C, Ws(D, j), L);
        ao(D, j);
      }
      return null;
    }
    function _(D, C, j, L, P) {
      if (
        (typeof L == "string" && L !== "") ||
        typeof L == "number" ||
        typeof L == "bigint"
      )
        return ((D = D.get(j) || null), x(C, D, "" + L, P));
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case it:
            return (
              (D = D.get(L.key === null ? j : L.key) || null),
              T(C, D, L, P)
            );
          case F:
            return (
              (D = D.get(L.key === null ? j : L.key) || null),
              O(C, D, L, P)
            );
          case mt:
            return ((L = ka(L)), _(D, C, j, L, P));
        }
        if (At(L) || at(L))
          return ((D = D.get(j) || null), V(C, D, L, P, null));
        if (typeof L.then == "function") return _(D, C, j, no(L), P);
        if (L.$$typeof === pt) return _(D, C, j, Ws(C, L), P);
        ao(C, L);
      }
      return null;
    }
    function Z(D, C, j, L) {
      for (
        var P = null, xt = null, et = C, lt = (C = 0), Jt = null;
        et !== null && lt < j.length;
        lt++
      ) {
        et.index > lt ? ((Jt = et), (et = null)) : (Jt = et.sibling);
        var bt = R(D, et, j[lt], L);
        if (bt === null) {
          et === null && (et = Jt);
          break;
        }
        (t && et && bt.alternate === null && e(D, et),
          (C = u(bt, C, lt)),
          xt === null ? (P = bt) : (xt.sibling = bt),
          (xt = bt),
          (et = Jt));
      }
      if (lt === j.length) return (n(D, et), ht && Hn(D, lt), P);
      if (et === null) {
        for (; lt < j.length; lt++)
          ((et = H(D, j[lt], L)),
            et !== null &&
              ((C = u(et, C, lt)),
              xt === null ? (P = et) : (xt.sibling = et),
              (xt = et)));
        return (ht && Hn(D, lt), P);
      }
      for (et = i(et); lt < j.length; lt++)
        ((Jt = _(et, D, lt, j[lt], L)),
          Jt !== null &&
            (t &&
              ((bt = Jt.alternate),
              bt !== null && et.delete(bt.key === null ? lt : bt.key)),
            (C = u(Jt, C, lt)),
            xt === null ? (P = Jt) : (xt.sibling = Jt),
            (xt = Jt)));
      return (
        t &&
          et.forEach(function (Ca) {
            return e(D, Ca);
          }),
        ht && Hn(D, lt),
        P
      );
    }
    function $(D, C, j, L) {
      if (j == null) throw Error(r(151));
      for (
        var P = null, xt = null, et = C, lt = (C = 0), Jt = null, bt = j.next();
        et !== null && !bt.done;
        lt++, bt = j.next()
      ) {
        et.index > lt ? ((Jt = et), (et = null)) : (Jt = et.sibling);
        var Ca = R(D, et, bt.value, L);
        if (Ca === null) {
          et === null && (et = Jt);
          break;
        }
        (t && et && Ca.alternate === null && e(D, et),
          (C = u(Ca, C, lt)),
          xt === null ? (P = Ca) : (xt.sibling = Ca),
          (xt = Ca),
          (et = Jt));
      }
      if (bt.done) return (n(D, et), ht && Hn(D, lt), P);
      if (et === null) {
        for (; !bt.done; lt++, bt = j.next())
          ((bt = H(D, bt.value, L)),
            bt !== null &&
              ((C = u(bt, C, lt)),
              xt === null ? (P = bt) : (xt.sibling = bt),
              (xt = bt)));
        return (ht && Hn(D, lt), P);
      }
      for (et = i(et); !bt.done; lt++, bt = j.next())
        ((bt = _(et, D, lt, bt.value, L)),
          bt !== null &&
            (t &&
              ((Jt = bt.alternate),
              Jt !== null && et.delete(Jt.key === null ? lt : Jt.key)),
            (C = u(bt, C, lt)),
            xt === null ? (P = bt) : (xt.sibling = bt),
            (xt = bt)));
      return (
        t &&
          et.forEach(function (v2) {
            return e(D, v2);
          }),
        ht && Hn(D, lt),
        P
      );
    }
    function ct(D, C, j, L) {
      if (
        (typeof j == "object" &&
          j !== null &&
          j.type === dt &&
          j.key === null &&
          j.props.ref === void 0 &&
          (j = j.props.children),
        typeof j == "object" && j !== null)
      ) {
        switch (j.$$typeof) {
          case it:
            t: {
              for (var P = j.key; C !== null;) {
                if (C.key === P) {
                  if (((P = j.type), P === dt)) {
                    if (C.tag === 7) {
                      (n(D, C.sibling),
                        (L = s(C, j.props.children)),
                        la(L, j),
                        (L.return = D),
                        (D = L));
                      break t;
                    }
                  } else if (
                    C.elementType === P ||
                    (typeof P == "object" &&
                      P !== null &&
                      P.$$typeof === mt &&
                      ka(P) === C.type)
                  ) {
                    (n(D, C.sibling),
                      (L = s(C, j.props)),
                      la(L, j),
                      (L.return = D),
                      (D = L));
                    break t;
                  }
                  n(D, C);
                  break;
                } else e(D, C);
                C = C.sibling;
              }
              j.type === dt
                ? ((L = Ua(j.props.children, D.mode, L, j.key)),
                  la(L, j),
                  (L.return = D),
                  (D = L))
                : ((L = Qs(j.type, j.key, j.props, null, D.mode, L)),
                  la(L, j),
                  (L.return = D),
                  (D = L));
            }
            return h(D);
          case F:
            t: {
              for (P = j.key; C !== null;) {
                if (C.key === P)
                  if (
                    C.tag === 4 &&
                    C.stateNode.containerInfo === j.containerInfo &&
                    C.stateNode.implementation === j.implementation
                  ) {
                    (n(D, C.sibling),
                      (L = s(C, j.children || [])),
                      (L.return = D),
                      (D = L));
                    break t;
                  } else {
                    n(D, C);
                    break;
                  }
                else e(D, C);
                C = C.sibling;
              }
              ((L = bu(j, D.mode, L)), (L.return = D), (D = L));
            }
            return h(D);
          case mt:
            return ((j = ka(j)), ct(D, C, j, L));
        }
        if (At(j)) return Z(D, C, j, L);
        if (at(j)) {
          if (((P = at(j)), typeof P != "function")) throw Error(r(150));
          return ((j = P.call(j)), $(D, C, j, L));
        }
        if (typeof j.then == "function") return ct(D, C, no(j), L);
        if (j.$$typeof === pt) return ct(D, C, Ws(D, j), L);
        ao(D, j);
      }
      return (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
        ? ((j = "" + j),
          C !== null && C.tag === 6
            ? (n(D, C.sibling), (L = s(C, j)), (L.return = D), (D = L))
            : (n(D, C), (L = xu(j, D.mode, L)), (L.return = D), (D = L)),
          h(D))
        : n(D, C);
    }
    return function (D, C, j, L) {
      try {
        Rl = 0;
        var P = ct(D, C, j, L);
        return ((Ci = null), P);
      } catch (et) {
        if (et === Ei || et === to) throw et;
        var xt = Ce(29, et, null, D.mode);
        return ((xt.lanes = L), (xt.return = D), xt);
      }
    };
  }
  var Za = Am(!0),
    wm = Am(!1),
    sa = !1;
  function Du(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ou(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function oa(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ra(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (wt & 2) !== 0)) {
      var s = i.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (i.pending = e),
        (e = Zs(t)),
        um(t, null, n),
        e
      );
    }
    return (Xs(t, i, e, n), Zs(t));
  }
  function Ml(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var i = e.lanes;
      ((i &= t.pendingLanes), (n |= i), (e.lanes = n), hh(t, n));
    }
  }
  function zu(t, e) {
    var n = t.updateQueue,
      i = t.alternate;
    if (i !== null && ((i = i.updateQueue), n === i)) {
      var s = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var h = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (u === null ? (s = u = h) : (u = u.next = h), (n = n.next));
        } while (n !== null);
        u === null ? (s = u = e) : (u = u.next = e);
      } else s = u = e;
      ((n = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: u,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (t.updateQueue = n));
      return;
    }
    ((t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e));
  }
  var ju = !1;
  function Dl() {
    if (ju) {
      var t = Ti;
      if (t !== null) throw t;
    }
  }
  function Ol(t, e, n, i) {
    ju = !1;
    var s = t.updateQueue;
    sa = !1;
    var u = s.firstBaseUpdate,
      h = s.lastBaseUpdate,
      x = s.shared.pending;
    if (x !== null) {
      s.shared.pending = null;
      var T = x,
        O = T.next;
      ((T.next = null), h === null ? (u = O) : (h.next = O), (h = T));
      var V = t.alternate;
      V !== null &&
        ((V = V.updateQueue),
        (x = V.lastBaseUpdate),
        x !== h &&
          (x === null ? (V.firstBaseUpdate = O) : (x.next = O),
          (V.lastBaseUpdate = T)));
    }
    if (u !== null) {
      var H = s.baseState;
      ((h = 0), (V = O = T = null), (x = u));
      do {
        var R = x.lane & -536870913,
          _ = R !== x.lane;
        if (_ ? (vt & R) === R : (i & R) === R) {
          (R !== 0 && R === qa && (ju = !0),
            V !== null &&
              (V = V.next =
                {
                  lane: 0,
                  tag: x.tag,
                  payload: x.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var Z = t,
              $ = x;
            R = e;
            var ct = n;
            switch ($.tag) {
              case 1:
                if (((Z = $.payload), typeof Z == "function")) {
                  H = Z.call(ct, H, R);
                  break t;
                }
                H = Z;
                break t;
              case 3:
                Z.flags = (Z.flags & -65537) | 128;
              case 0:
                if (
                  ((Z = $.payload),
                  (R = typeof Z == "function" ? Z.call(ct, H, R) : Z),
                  R == null)
                )
                  break t;
                H = Q({}, H, R);
                break t;
              case 2:
                sa = !0;
            }
          }
          ((R = x.callback),
            R !== null &&
              ((t.flags |= 64),
              _ && (t.flags |= 8192),
              (_ = s.callbacks),
              _ === null ? (s.callbacks = [R]) : _.push(R)));
        } else
          ((_ = {
            lane: R,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null,
          }),
            V === null ? ((O = V = _), (T = H)) : (V = V.next = _),
            (h |= R));
        if (((x = x.next), x === null)) {
          if (((x = s.shared.pending), x === null)) break;
          ((_ = x),
            (x = _.next),
            (_.next = null),
            (s.lastBaseUpdate = _),
            (s.shared.pending = null));
        }
      } while (!0);
      (V === null && (T = H),
        (s.baseState = T),
        (s.firstBaseUpdate = O),
        (s.lastBaseUpdate = V),
        u === null && (s.shared.lanes = 0),
        (pa |= h),
        (t.lanes = h),
        (t.memoizedState = H));
    }
  }
  function Nm(t, e) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(e);
  }
  function Rm(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) Nm(n[t], e);
  }
  var ua = dn(null),
    io = dn(0);
  function Mm(t, e) {
    ((t = Qn), Vt(io, t), Vt(ua, e), (Qn = t | e.baseLanes));
  }
  function _u() {
    (Vt(io, Qn), Vt(ua, ua.current));
  }
  function Vu() {
    ((Qn = io.current), se(ua), se(io));
  }
  var ue = dn(null),
    pe = null;
  function ca(t) {
    var e = t.alternate;
    (Vt(ce, ce.current & 1),
      Vt(ue, t),
      pe === null &&
        (e === null || ua.current !== null || e.memoizedState !== null) &&
        (pe = t));
  }
  function Uu(t) {
    (Vt(ce, ce.current), Vt(ue, t), pe === null && (pe = t));
  }
  function Dm(t) {
    t.tag === 22
      ? (Vt(ce, ce.current), Vt(ue, t), pe === null && (pe = t))
      : fa();
  }
  function fa() {
    (Vt(ce, ce.current), Vt(ue, ue.current));
  }
  function Ve(t) {
    (se(ue), pe === t && (pe = null), se(ce));
  }
  var ce = dn(0);
  function zl(t, e) {
    (Vt(ue, ue.current), Vt(ce, e));
  }
  function Bu(t) {
    (se(ce), se(ue), pe === t && (pe = null));
  }
  function lo(t) {
    for (var e = t; e !== null;) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || sf(n) || of(n)))
          return e;
      } else if (
        e.tag === 19 &&
        e.memoizedProps.revealOrder !== "independent"
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null;) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var Gn = 0,
    ut = null,
    Ot = null,
    Pt = null,
    so = !1,
    Ai = !1,
    Qa = !1,
    oo = 0,
    jl = 0,
    wi = null,
    Hb = 0;
  function qt() {
    throw Error(r(321));
  }
  function Lu(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!_e(t[n], e[n])) return !1;
    return !0;
  }
  function Hu(t, e, n, i, s, u) {
    return (
      (Gn = u),
      (ut = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (I.H = t === null || t.memoizedState === null ? hp : mp),
      (Qa = !1),
      (u = n(i, s)),
      (Qa = !1),
      Ai && (u = zm(e, n, i, s)),
      Om(t),
      u
    );
  }
  function Om(t) {
    I.H = po;
    var e = Ot !== null && Ot.next !== null;
    if (((Gn = 0), (Pt = Ot = ut = null), (so = !1), (jl = 0), (wi = null), e))
      throw Error(r(300));
    t === null ||
      Ft ||
      ((t = t.dependencies), t !== null && $s(t) && (Ft = !0));
  }
  function zm(t, e, n, i) {
    ut = t;
    var s = 0;
    do {
      if ((Ai && (wi = null), (jl = 0), (Ai = !1), 25 <= s))
        throw Error(r(301));
      if (((s += 1), (Pt = Ot = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((I.H = Kb), (u = e(n, i)));
    } while (Ai);
    return u;
  }
  function Yb() {
    var t = I.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? _l(e) : e),
      (t = t.useState()[0]),
      (Ot !== null ? Ot.memoizedState : null) !== t && (ut.flags |= 1024),
      e
    );
  }
  function Yu() {
    var t = oo !== 0;
    return ((oo = 0), t);
  }
  function qu(t, e, n) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n));
  }
  function Gu(t) {
    if (so) {
      for (t = t.memoizedState; t !== null;) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      so = !1;
    }
    ((Gn = 0), (Pt = Ot = ut = null), (Ai = !1), (jl = oo = 0), (wi = null));
  }
  function ve() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Pt === null ? (ut.memoizedState = Pt = t) : (Pt = Pt.next = t), Pt);
  }
  function Qt() {
    if (Ot === null) {
      var t = ut.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Ot.next;
    var e = Pt === null ? ut.memoizedState : Pt.next;
    if (e !== null) ((Pt = e), (Ot = t));
    else {
      if (t === null)
        throw ut.alternate === null ? Error(r(467)) : Error(r(310));
      ((Ot = t),
        (t = {
          memoizedState: Ot.memoizedState,
          baseState: Ot.baseState,
          baseQueue: Ot.baseQueue,
          queue: Ot.queue,
          next: null,
        }),
        Pt === null ? (ut.memoizedState = Pt = t) : (Pt = Pt.next = t));
    }
    return Pt;
  }
  function ro() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function _l(t) {
    var e = jl;
    return (
      (jl += 1),
      wi === null && (wi = []),
      (t = Tm(wi, t, e)),
      (e = ut),
      (Pt === null ? e.memoizedState : Pt.next) === null &&
        ((e = e.alternate),
        (I.H = e === null || e.memoizedState === null ? hp : mp)),
      t
    );
  }
  function uo(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return _l(t);
      if (t.$$typeof === k) return;
      if (t.$$typeof === pt) return re(t);
    }
    throw Error(r(438, String(t)));
  }
  function ku(t) {
    var e = null,
      n = ut.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var i = ut.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (e = {
              data: i.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = ro()), (ut.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), i = 0; i < t; i++) n[i] = Ma;
    return (e.index++, n);
  }
  function kn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function co(t) {
    var e = Qt();
    return Xu(e, Ot, t);
  }
  function Xu(t, e, n) {
    var i = t.queue;
    if (i === null) throw Error(r(311));
    i.lastRenderedReducer = n;
    var s = t.baseQueue,
      u = i.pending;
    if (u !== null) {
      if (s !== null) {
        var h = s.next;
        ((s.next = u.next), (u.next = h));
      }
      ((e.baseQueue = s = u), (i.pending = null));
    }
    if (((u = t.baseState), s === null)) t.memoizedState = u;
    else {
      e = s.next;
      var x = (h = null),
        T = null,
        O = e,
        V = !1;
      do {
        var H = O.lane & -536870913;
        if (H !== O.lane ? (vt & H) === H : (Gn & H) === H) {
          var R = O.revertLane;
          if (R === 0)
            (T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: O.action,
                  hasEagerState: O.hasEagerState,
                  eagerState: O.eagerState,
                  next: null,
                }),
              H === qa && (V = !0));
          else if ((Gn & R) === R) {
            ((O = O.next), R === qa && (V = !0));
            continue;
          } else
            ((H = {
              lane: 0,
              revertLane: O.revertLane,
              gesture: null,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null,
            }),
              T === null ? ((x = T = H), (h = u)) : (T = T.next = H),
              (ut.lanes |= R),
              (pa |= R));
          ((H = O.action),
            Qa && n(u, H),
            (u = O.hasEagerState ? O.eagerState : n(u, H)));
        } else
          ((R = {
            lane: H,
            revertLane: O.revertLane,
            gesture: O.gesture,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null,
          }),
            T === null ? ((x = T = R), (h = u)) : (T = T.next = R),
            (ut.lanes |= H),
            (pa |= H));
        O = O.next;
      } while (O !== null && O !== e);
      if (
        (T === null ? (h = u) : (T.next = x),
        !_e(u, t.memoizedState) && ((Ft = !0), V && ((n = Ti), n !== null)))
      )
        throw n;
      ((t.memoizedState = u),
        (t.baseState = h),
        (t.baseQueue = T),
        (i.lastRenderedState = u));
    }
    return (s === null && (i.lanes = 0), [t.memoizedState, i.dispatch]);
  }
  function Zu(t) {
    var e = Qt(),
      n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch,
      s = n.pending,
      u = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var h = (s = s.next);
      do ((u = t(u, h.action)), (h = h.next));
      while (h !== s);
      (_e(u, e.memoizedState) || (Ft = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, i];
  }
  function jm(t, e, n) {
    var i = ut,
      s = Qt(),
      u = ht;
    if (u) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = e();
    var h = !_e((Ot || s).memoizedState, n);
    if (
      (h && ((s.memoizedState = n), (Ft = !0)),
      (s = s.queue),
      Pu(Um.bind(null, i, s, t), [t]),
      (t =
        s.getSnapshot !== e ||
        h ||
        (Pt !== null && (Pt.memoizedState.tag & 1) !== 0)),
      Ni(t ? 9 : 8, { destroy: void 0 }, Vm.bind(null, i, s, n, e), null),
      t)
    ) {
      if (((i.flags |= 2048), zt === null)) throw Error(r(349));
      u || (Gn & 127) !== 0 || _m(i, e, n);
    }
    return n;
  }
  function _m(t, e, n) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = ut.updateQueue),
      e === null
        ? ((e = ro()), (ut.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
  }
  function Vm(t, e, n, i) {
    ((e.value = n), (e.getSnapshot = i), Bm(e) && Lm(t));
  }
  function Um(t, e, n) {
    return n(function () {
      Bm(e) && Lm(t);
    });
  }
  function Bm(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !_e(t, n);
    } catch {
      return !0;
    }
  }
  function Lm(t) {
    var e = Va(t, 2);
    e !== null && Re(e, t, 2);
  }
  function Qu(t) {
    var e = ve();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), Qa)) {
        Wn(!0);
        try {
          n();
        } finally {
          Wn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: kn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Hm(t, e, n, i) {
    return ((t.baseState = n), Xu(t, Ot, typeof i == "function" ? i : kn));
  }
  function qb(t, e, n, i, s) {
    if (mo(t)) throw Error(r(485));
    if (((t = e.action), t !== null)) {
      var u = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (h) {
          u.listeners.push(h);
        },
      };
      (I.T !== null ? n(!0) : (u.isTransition = !1),
        i(u),
        (n = e.pending),
        n === null
          ? ((u.next = e.pending = u), Ym(e, u))
          : ((u.next = n.next), (e.pending = n.next = u)));
    }
  }
  function Ym(t, e) {
    var n = e.action,
      i = e.payload,
      s = t.state;
    if (e.isTransition) {
      var u = I.T,
        h = {};
      ((h.types = u !== null ? u.types : null), (I.T = h));
      try {
        var x = n(s, i),
          T = I.S;
        (T !== null && T(h, x), qm(t, e, x));
      } catch (O) {
        Ku(t, e, O);
      } finally {
        (u !== null && h.types !== null && (u.types = h.types), (I.T = u));
      }
    } else
      try {
        ((u = n(s, i)), qm(t, e, u));
      } catch (O) {
        Ku(t, e, O);
      }
  }
  function qm(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (i) {
            Gm(t, e, i);
          },
          function (i) {
            return Ku(t, e, i);
          },
        )
      : Gm(t, e, n);
  }
  function Gm(t, e, n) {
    ((e.status = "fulfilled"),
      (e.value = n),
      km(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), Ym(t, n))));
  }
  function Ku(t, e, n) {
    var i = t.pending;
    if (((t.pending = null), i !== null)) {
      i = i.next;
      do ((e.status = "rejected"), (e.reason = n), km(e), (e = e.next));
      while (e !== i);
    }
    t.action = null;
  }
  function km(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Xm(t, e) {
    return e;
  }
  function Zm(t, e) {
    if (ht) {
      var n = zt.formState;
      if (n !== null) {
        t: {
          var i = ut;
          if (ht) {
            if (Ut) {
              e: {
                for (var s = Ut, u = Pe; s.nodeType !== 8;) {
                  if (!u) {
                    s = null;
                    break e;
                  }
                  if (((s = Je(s.nextSibling)), s === null)) {
                    s = null;
                    break e;
                  }
                }
                ((u = s.data), (s = u === "F!" || u === "F" ? s : null));
              }
              if (s) {
                ((Ut = Je(s.nextSibling)), (i = s.data === "F!"));
                break t;
              }
            }
            aa(i);
          }
          i = !1;
        }
        i && (e = n[0]);
      }
    }
    return (
      (n = ve()),
      (n.memoizedState = n.baseState = e),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xm,
        lastRenderedState: e,
      }),
      (n.queue = i),
      (n = cp.bind(null, ut, i)),
      (i.dispatch = n),
      (i = Qu(!1)),
      (u = Iu.bind(null, ut, !1, i.queue)),
      (i = ve()),
      (s = { state: e, dispatch: null, action: t, pending: null }),
      (i.queue = s),
      (n = qb.bind(null, ut, s, u, n)),
      (s.dispatch = n),
      (i.memoizedState = t),
      [e, n, !1]
    );
  }
  function Qm(t) {
    var e = Qt();
    return Km(e, Ot, t);
  }
  function Km(t, e, n) {
    if (
      ((e = Xu(t, e, Xm)[0]),
      (t = co(kn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var i = _l(e);
      } catch (h) {
        throw h === Ei ? to : h;
      }
    else i = e;
    e = Qt();
    var s = e.queue,
      u = s.dispatch;
    return (
      n !== e.memoizedState &&
        ((ut.flags |= 2048),
        Ni(9, { destroy: void 0 }, Gb.bind(null, s, n), null)),
      [i, u, t]
    );
  }
  function Gb(t, e) {
    t.action = e;
  }
  function Pm(t) {
    var e = Qt(),
      n = Ot;
    if (n !== null) return Km(e, n, t);
    (Qt(), (e = e.memoizedState), (n = Qt()));
    var i = n.queue.dispatch;
    return ((n.memoizedState = t), [e, i, !1]);
  }
  function Ni(t, e, n, i) {
    return (
      (t = { tag: t, create: n, deps: i, inst: e, next: null }),
      (e = ut.updateQueue),
      e === null && ((e = ro()), (ut.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t)),
      t
    );
  }
  function Fm() {
    return Qt().memoizedState;
  }
  function fo(t, e, n, i) {
    var s = ve();
    ((ut.flags |= t),
      (s.memoizedState = Ni(
        1 | e,
        { destroy: void 0 },
        n,
        i === void 0 ? null : i,
      )));
  }
  function ho(t, e, n, i) {
    var s = Qt();
    i = i === void 0 ? null : i;
    var u = s.memoizedState.inst;
    Ot !== null && i !== null && Lu(i, Ot.memoizedState.deps)
      ? (s.memoizedState = Ni(e, u, n, i))
      : ((ut.flags |= t), (s.memoizedState = Ni(1 | e, u, n, i)));
  }
  function Jm(t, e) {
    fo(8390656, 8, t, e);
  }
  function Pu(t, e) {
    ho(2048, 8, t, e);
  }
  function kb(t) {
    ut.flags |= 4;
    var e = ut.updateQueue;
    if (e === null) ((e = ro()), (ut.updateQueue = e), (e.events = [t]));
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function $m(t) {
    var e = Qt().memoizedState;
    return (
      kb({ ref: e, nextImpl: t }),
      function () {
        if ((wt & 2) !== 0) throw Error(r(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function Wm(t, e) {
    return ho(4, 2, t, e);
  }
  function Im(t, e) {
    return ho(4, 4, t, e);
  }
  function tp(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function ep(t, e, n) {
    ((n = n != null ? n.concat([t]) : null), ho(4, 4, tp.bind(null, e, t), n));
  }
  function Fu() {}
  function np(t, e) {
    var n = Qt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return e !== null && Lu(e, i[1]) ? i[0] : ((n.memoizedState = [t, e]), t);
  }
  function ap(t, e) {
    var n = Qt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    if (e !== null && Lu(e, i[1])) return i[0];
    if (((i = t()), Qa)) {
      Wn(!0);
      try {
        t();
      } finally {
        Wn(!1);
      }
    }
    return ((n.memoizedState = [i, e]), i);
  }
  function Ju(t, e, n) {
    return n === void 0 || ((Gn & 1073741824) !== 0 && (vt & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = hy()), (ut.lanes |= t), (pa |= t), n);
  }
  function ip(t, e, n, i) {
    return _e(n, e)
      ? n
      : ua.current !== null
        ? ((t = Ju(t, n, i)), _e(t, e) || (Ft = !0), t)
        : (Gn & 106) === 0 || ((Gn & 1073741824) !== 0 && (vt & 261930) === 0)
          ? ((Ft = !0), (t.memoizedState = n))
          : ((t = hy()), (ut.lanes |= t), (pa |= t), e);
  }
  function lp(t, e, n, i, s) {
    var u = ot.p;
    ot.p = u !== 0 && 8 > u ? u : 8;
    var h = I.T,
      x = {};
    ((x.types = h !== null ? h.types : null), (I.T = x), Iu(t, !1, e, n));
    try {
      var T = s(),
        O = I.S;
      if (
        (O !== null && O(x, T),
        T !== null && typeof T == "object" && typeof T.then == "function")
      ) {
        var V = Lb(T, i);
        Vl(t, e, V, He(t));
      } else Vl(t, e, i, He(t));
    } catch (H) {
      Vl(t, e, { then: function () {}, status: "rejected", reason: H }, He());
    } finally {
      ((ot.p = u),
        h !== null && x.types !== null && (h.types = x.types),
        (I.T = h));
    }
  }
  function Xb() {}
  function $u(t, e, n, i) {
    if (t.tag !== 5) throw Error(r(476));
    var s = sp(t).queue;
    lp(
      t,
      s,
      e,
      zn,
      n === null
        ? Xb
        : function () {
            return (op(t), n(i));
          },
    );
  }
  function sp(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: zn,
      baseState: zn,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: kn,
        lastRenderedState: zn,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: kn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function op(t) {
    var e = sp(t);
    (e.next === null && (e = t.alternate.memoizedState),
      Vl(t, e.next.queue, {}, He()));
  }
  function Wu() {
    return re(Qi);
  }
  function rp() {
    return Qt().memoizedState;
  }
  function up() {
    return Qt().memoizedState;
  }
  function Zb(t) {
    for (var e = t.return; e !== null;) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = He();
          t = oa(n);
          var i = ra(e, t, n);
          (i !== null && (Re(i, e, n), Ml(i, e, n)),
            (e = { cache: wu() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function Qb(t, e, n) {
    var i = He();
    ((n = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      mo(t)
        ? fp(e, n)
        : ((n = gu(t, e, n, i)), n !== null && (Re(n, t, i), dp(n, e, i))));
  }
  function cp(t, e, n) {
    var i = He();
    Vl(t, e, n, i);
  }
  function Vl(t, e, n, i) {
    var s = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (mo(t)) fp(e, s);
    else {
      var u = t.alternate;
      if (
        t.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = e.lastRenderedReducer), u !== null)
      )
        try {
          var h = e.lastRenderedState,
            x = u(h, n);
          if (((s.hasEagerState = !0), (s.eagerState = x), _e(x, h)))
            return (Xs(t, e, s, 0), zt === null && ks(), !1);
        } catch {}
      if (((n = gu(t, e, s, i)), n !== null))
        return (Re(n, t, i), dp(n, e, i), !0);
    }
    return !1;
  }
  function Iu(t, e, n, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: kc(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      mo(t))
    ) {
      if (e) throw Error(r(479));
    } else ((e = gu(t, n, i, 2)), e !== null && Re(e, t, 2));
  }
  function mo(t) {
    var e = t.alternate;
    return t === ut || (e !== null && e === ut);
  }
  function fp(t, e) {
    Ai = so = !0;
    var n = t.pending;
    (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e));
  }
  function dp(t, e, n) {
    if ((n & 4194048) !== 0) {
      var i = e.lanes;
      ((i &= t.pendingLanes), (n |= i), (e.lanes = n), hh(t, n));
    }
  }
  var po = {
      readContext: re,
      use: uo,
      useCallback: qt,
      useContext: qt,
      useEffect: qt,
      useImperativeHandle: qt,
      useLayoutEffect: qt,
      useInsertionEffect: qt,
      useMemo: qt,
      useReducer: qt,
      useRef: qt,
      useState: qt,
      useDebugValue: qt,
      useDeferredValue: qt,
      useTransition: qt,
      useSyncExternalStore: qt,
      useId: qt,
      useHostTransitionStatus: qt,
      useFormState: qt,
      useActionState: qt,
      useOptimistic: qt,
      useMemoCache: qt,
      useCacheRefresh: qt,
      useEffectEvent: qt,
    },
    hp = {
      readContext: re,
      use: uo,
      useCallback: function (t, e) {
        return ((ve().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: re,
      useEffect: Jm,
      useImperativeHandle: function (t, e, n) {
        ((n = n != null ? n.concat([t]) : null),
          fo(4194308, 4, tp.bind(null, e, t), n));
      },
      useLayoutEffect: function (t, e) {
        return fo(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        fo(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = ve();
        e = e === void 0 ? null : e;
        var i = t();
        if (Qa) {
          Wn(!0);
          try {
            t();
          } finally {
            Wn(!1);
          }
        }
        return ((n.memoizedState = [i, e]), i);
      },
      useReducer: function (t, e, n) {
        var i = ve();
        if (n !== void 0) {
          var s = n(e);
          if (Qa) {
            Wn(!0);
            try {
              n(e);
            } finally {
              Wn(!1);
            }
          }
        } else s = e;
        return (
          (i.memoizedState = i.baseState = s),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: s,
          }),
          (i.queue = t),
          (t = t.dispatch = Qb.bind(null, ut, t)),
          [i.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = ve();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Qu(t);
        var e = t.queue,
          n = cp.bind(null, ut, e);
        return ((e.dispatch = n), [t.memoizedState, n]);
      },
      useDebugValue: Fu,
      useDeferredValue: function (t, e) {
        var n = ve();
        return Ju(n, t, e);
      },
      useTransition: function () {
        var t = Qu(!1);
        return (
          (t = lp.bind(null, ut, t.queue, !0, !1)),
          (ve().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var i = ut,
          s = ve();
        if (ht) {
          if (n === void 0) throw Error(r(407));
          n = n();
        } else {
          if (((n = e()), zt === null)) throw Error(r(349));
          (vt & 127) !== 0 || _m(i, e, n);
        }
        s.memoizedState = n;
        var u = { value: n, getSnapshot: e };
        return (
          (s.queue = u),
          Jm(Um.bind(null, i, u, t), [t]),
          (i.flags |= 2048),
          Ni(9, { destroy: void 0 }, Vm.bind(null, i, u, n, e), null),
          n
        );
      },
      useId: function () {
        var t = ve(),
          e = zt.identifierPrefix;
        if (ht) {
          var n = yn,
            i = pn;
          ((n = (i & ~(1 << (32 - ze(i) - 1))).toString(32) + n),
            (e = "_" + e + "R_" + n),
            (n = oo++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "_"));
        } else ((n = Hb++), (e = "_" + e + "r_" + n.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Wu,
      useFormState: Zm,
      useActionState: Zm,
      useOptimistic: function (t) {
        var e = ve();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = Iu.bind(null, ut, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: ku,
      useCacheRefresh: function () {
        return (ve().memoizedState = Zb.bind(null, ut));
      },
      useEffectEvent: function (t) {
        var e = ve(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if ((wt & 2) !== 0) throw Error(r(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    mp = {
      readContext: re,
      use: uo,
      useCallback: np,
      useContext: re,
      useEffect: Pu,
      useImperativeHandle: ep,
      useInsertionEffect: Wm,
      useLayoutEffect: Im,
      useMemo: ap,
      useReducer: co,
      useRef: Fm,
      useState: function () {
        return co(kn);
      },
      useDebugValue: Fu,
      useDeferredValue: function (t, e) {
        var n = Qt();
        return ip(n, Ot.memoizedState, t, e);
      },
      useTransition: function () {
        var t = co(kn)[0],
          e = Qt().memoizedState;
        return [typeof t == "boolean" ? t : _l(t), e];
      },
      useSyncExternalStore: jm,
      useId: rp,
      useHostTransitionStatus: Wu,
      useFormState: Qm,
      useActionState: Qm,
      useOptimistic: function (t, e) {
        var n = Qt();
        return Hm(n, Ot, t, e);
      },
      useMemoCache: ku,
      useCacheRefresh: up,
      useEffectEvent: $m,
    },
    Kb = {
      readContext: re,
      use: uo,
      useCallback: np,
      useContext: re,
      useEffect: Pu,
      useImperativeHandle: ep,
      useInsertionEffect: Wm,
      useLayoutEffect: Im,
      useMemo: ap,
      useReducer: Zu,
      useRef: Fm,
      useState: function () {
        return Zu(kn);
      },
      useDebugValue: Fu,
      useDeferredValue: function (t, e) {
        var n = Qt();
        return Ot === null ? Ju(n, t, e) : ip(n, Ot.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Zu(kn)[0],
          e = Qt().memoizedState;
        return [typeof t == "boolean" ? t : _l(t), e];
      },
      useSyncExternalStore: jm,
      useId: rp,
      useHostTransitionStatus: Wu,
      useFormState: Pm,
      useActionState: Pm,
      useOptimistic: function (t, e) {
        var n = Qt();
        return Ot !== null
          ? Hm(n, Ot, t, e)
          : ((n.baseState = t), [t, n.queue.dispatch]);
      },
      useMemoCache: ku,
      useCacheRefresh: up,
      useEffectEvent: $m,
    };
  function tc(t, e, n, i) {
    ((e = t.memoizedState),
      (n = n(i, e)),
      (n = n == null ? e : Q({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n));
  }
  var ec = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var i = He(),
        s = oa(i);
      ((s.payload = e),
        n != null && (s.callback = n),
        (e = ra(t, s, i)),
        e !== null && (Re(e, t, i), Ml(e, t, i)));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var i = He(),
        s = oa(i);
      ((s.tag = 1),
        (s.payload = e),
        n != null && (s.callback = n),
        (e = ra(t, s, i)),
        e !== null && (Re(e, t, i), Ml(e, t, i)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = He(),
        i = oa(n);
      ((i.tag = 2),
        e != null && (i.callback = e),
        (e = ra(t, i, n)),
        e !== null && (Re(e, t, n), Ml(e, t, n)));
    },
  };
  function pp(t, e, n, i, s, u, h) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(i, u, h)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Sl(n, i) || !Sl(s, u)
          : !0
    );
  }
  function yp(t, e, n, i) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, i),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, i),
      e.state !== t && ec.enqueueReplaceState(e, e.state, null));
  }
  function Ka(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var i in e) i !== "ref" && (n[i] = e[i]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = Q({}, n));
      for (var s in t) n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  function gp(t) {
    Gs(t);
  }
  function vp(t) {
    console.error(t);
  }
  function xp(t) {
    Gs(t);
  }
  function yo(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function bp(t, e, n) {
    try {
      var i = t.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function nc(t, e, n) {
    return (
      (n = oa(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        yo(t, e);
      }),
      n
    );
  }
  function Sp(t) {
    return ((t = oa(t)), (t.tag = 3), t);
  }
  function Tp(t, e, n, i) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = i.value;
      ((t.payload = function () {
        return s(u);
      }),
        (t.callback = function () {
          bp(e, n, i);
        }));
    }
    var h = n.stateNode;
    h !== null &&
      typeof h.componentDidCatch == "function" &&
      (t.callback = function () {
        (bp(e, n, i),
          typeof s != "function" &&
            (ya === null ? (ya = new Set([this])) : ya.add(this)));
        var x = i.stack;
        this.componentDidCatch(i.value, {
          componentStack: x !== null ? x : "",
        });
      });
  }
  function Pb(t, e, n, i, s) {
    if (
      ((n.flags |= 32768),
      i !== null && typeof i == "object" && typeof i.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && Ha(e, n, s, !0),
        (n = ue.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return (
              pe === null ? Bo() : n.alternate === null && Gt === 0 && (Gt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = s),
              i === eo
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([i])) : e.add(i),
                  Yc(t, i, s)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              i === eo
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([i])) : n.add(i)),
                  Yc(t, i, s)),
              !1
            );
        }
        throw Error(r(435, n.tag));
      }
      return (Yc(t, i, s), Bo(), !1);
    }
    if (ht)
      return (
        (e = ue.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = s),
            i !== Tu && ((t = Error(r(422), { cause: i })), Cl(Ze(t, n))))
          : (i !== Tu && ((e = Error(r(423), { cause: i })), Cl(Ze(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (i = Ze(i, n)),
            (s = nc(t.stateNode, i, s)),
            zu(t, s),
            Gt !== 4 && (Gt = 2)),
        !1
      );
    var u = Error(r(520), { cause: i });
    if (
      ((u = Ze(u, n)),
      kl === null ? (kl = [u]) : kl.push(u),
      Gt !== 4 && (Gt = 2),
      e === null)
    )
      return !0;
    ((i = Ze(i, n)), (n = e));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = s & -s),
            (n.lanes |= t),
            (t = nc(n.stateNode, i, t)),
            zu(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (u = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (ya === null || !ya.has(u)))))
          )
            return (
              (n.flags |= 65536),
              (s &= -s),
              (n.lanes |= s),
              (s = Sp(s)),
              Tp(s, t, n, i),
              zu(n, s),
              !1
            );
          break;
        case 22:
          if (n.memoizedState !== null) return ((n.flags |= 65536), !1);
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var ac = Error(r(461)),
    Ft = !1;
  function Wt(t, e, n, i) {
    e.child = t === null ? wm(e, null, n, i) : Za(e, t.child, n, i);
  }
  function Ep(t, e, n, i, s) {
    n = n.render;
    var u = e.ref;
    if ("ref" in i) {
      var h = {};
      for (var x in i) x !== "ref" && (h[x] = i[x]);
    } else h = i;
    return (
      Ya(e),
      (i = Hu(t, e, n, h, u, s)),
      (x = Yu()),
      t !== null && !Ft
        ? (qu(t, e, s), Xn(t, e, s))
        : (ht && x && Ps(e), (e.flags |= 1), Wt(t, e, i, s), e.child)
    );
  }
  function Cp(t, e, n, i, s) {
    if (t === null) {
      var u = n.type;
      return typeof u == "function" &&
        !vu(u) &&
        u.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = u), Ap(t, e, u, i, s))
        : ((t = Qs(n.type, null, i, e, e.mode, s)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((u = t.child), !fc(t, s))) {
      var h = u.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Sl), n(h, i) && t.ref === e.ref)
      )
        return Xn(t, e, s);
    }
    return (
      (e.flags |= 1),
      (t = Ln(u, i)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Ap(t, e, n, i, s) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Sl(u, i) && t.ref === e.ref)
        if (((Ft = !1), (e.pendingProps = i = u), fc(t, s)))
          (t.flags & 131072) !== 0 && (Ft = !0);
        else return ((e.lanes = t.lanes), Xn(t, e, s));
    }
    return ic(t, e, n, i, s);
  }
  function wp(t, e, n, i) {
    var s = i.children,
      u = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      i.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | n : n), t !== null)) {
          for (i = e.child = t.child, s = 0; i !== null;)
            ((s = s | i.lanes | i.childLanes), (i = i.sibling));
          i = s & ~u;
        } else ((i = 0), (e.child = null));
        return Np(t, e, u, n, i);
      }
      if ((n & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Is(e, u !== null ? u.cachePool : null),
          u !== null ? Mm(e, u) : _u(),
          Dm(e));
      else
        return (
          (i = e.lanes = 536870912),
          Np(t, e, u !== null ? u.baseLanes | n : n, n, i)
        );
    } else
      u !== null
        ? (Is(e, u.cachePool), Mm(e, u), fa(), (e.memoizedState = null))
        : (t !== null && Is(e, null), _u(), fa());
    return (Wt(t, e, s, n), e.child);
  }
  function Ul(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function Np(t, e, n, i, s) {
    var u = Ru();
    return (
      (u = u === null ? null : { parent: Kt._currentValue, pool: u }),
      (e.memoizedState = { baseLanes: n, cachePool: u }),
      t !== null && Is(e, null),
      _u(),
      Dm(e),
      t !== null && Ha(t, e, i, !0),
      (e.childLanes = s),
      null
    );
  }
  function go(t, e) {
    return (
      (e = vo({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Rp(t, e, n) {
    return (
      Za(e, t.child, null, n),
      (t = go(e, e.pendingProps)),
      (t.flags |= 2),
      Ve(e),
      (e.memoizedState = null),
      t
    );
  }
  function Fb(t, e, n) {
    var i = e.pendingProps,
      s = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (ht) {
        if (i.mode === "hidden")
          return (
            (t = go(e, i)),
            (e.lanes = 536870912),
            (t.memoizedState = { baseLanes: 0, cachePool: null }),
            Ul(null, t)
          );
        if (
          (Uu(e),
          (t = Ut)
            ? ((t = tg(t, Pe)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: ea !== null ? { id: pn, overflow: yn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = fm(t)),
                (n.return = e),
                (e.child = n),
                (ae = e),
                (Ut = null)))
            : (t = null),
          t === null)
        )
          throw aa(e);
        return ((e.lanes = 536870912), null);
      }
      return go(e, i);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var h = u.dehydrated;
      if ((Uu(e), s))
        if (e.flags & 256) ((e.flags &= -257), (e = Rp(t, e, n)));
        else if (e.memoizedState !== null)
          ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(r(558));
      else if (
        (Ft || Ha(t, e, n, !1), (s = (n & t.childLanes) !== 0), Ft || s)
      ) {
        if (ua.current === null) {
          if (
            ((i = zt),
            i !== null && ((h = mh(i, n)), h !== 0 && h !== u.retryLane))
          )
            throw ((u.retryLane = h), Va(t, h), Re(i, t, h), ac);
          Bo();
        }
        e = Rp(t, e, n);
      } else
        ((t = u.treeContext),
          (Ut = Je(h.nextSibling)),
          (ae = e),
          (ht = !0),
          (na = null),
          (Pe = !1),
          t !== null && mm(e, t),
          (e = go(e, i)),
          (e.flags |= 134221824));
      return e;
    }
    return (
      (t = Ln(t.child, { mode: i.mode, children: i.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Ri(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(r(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function ic(t, e, n, i, s) {
    return (
      Ya(e),
      (n = Hu(t, e, n, i, void 0, s)),
      (i = Yu()),
      t !== null && !Ft
        ? (qu(t, e, s), Xn(t, e, s))
        : (ht && i && Ps(e), (e.flags |= 1), Wt(t, e, n, s), e.child)
    );
  }
  function Mp(t, e, n, i, s, u) {
    return (
      Ya(e),
      (e.updateQueue = null),
      (n = zm(e, i, n, s)),
      Om(t),
      (i = Yu()),
      t !== null && !Ft
        ? (qu(t, e, u), Xn(t, e, u))
        : (ht && i && Ps(e), (e.flags |= 1), Wt(t, e, n, u), e.child)
    );
  }
  function Dp(t, e, n, i, s) {
    if ((Ya(e), e.stateNode === null)) {
      var u = vi,
        h = n.contextType;
      (typeof h == "object" && h !== null && (u = re(h)),
        (u = new n(i, u)),
        (e.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = ec),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = i),
        (u.state = e.memoizedState),
        (u.refs = {}),
        Du(e),
        (h = n.contextType),
        (u.context = typeof h == "object" && h !== null ? re(h) : vi),
        (u.state = e.memoizedState),
        (h = n.getDerivedStateFromProps),
        typeof h == "function" && (tc(e, n, h, i), (u.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((h = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          h !== u.state && ec.enqueueReplaceState(u, u.state, null),
          Ol(e, i, u, s),
          Dl(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308),
        (i = !0));
    } else if (t === null) {
      u = e.stateNode;
      var x = e.memoizedProps,
        T = Ka(n, x);
      u.props = T;
      var O = u.context,
        V = n.contextType;
      ((h = vi), typeof V == "object" && V !== null && (h = re(V)));
      var H = n.getDerivedStateFromProps;
      ((V =
        typeof H == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (x = e.pendingProps !== x),
        V ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((x || O !== h) && yp(e, u, i, h)),
        (sa = !1));
      var R = e.memoizedState;
      ((u.state = R),
        Ol(e, i, u, s),
        Dl(),
        (O = e.memoizedState),
        x || R !== O || sa
          ? (typeof H == "function" && (tc(e, n, H, i), (O = e.memoizedState)),
            (T = sa || pp(e, n, T, i, R, O, h))
              ? (V ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = i),
                (e.memoizedState = O)),
            (u.props = i),
            (u.state = O),
            (u.context = h),
            (i = T))
          : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            (i = !1)));
    } else {
      ((u = e.stateNode),
        Ou(t, e),
        (h = e.memoizedProps),
        (V = Ka(n, h)),
        (u.props = V),
        (H = e.pendingProps),
        (R = u.context),
        (O = n.contextType),
        (T = vi),
        typeof O == "object" && O !== null && (T = re(O)),
        (x = n.getDerivedStateFromProps),
        (O =
          typeof x == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((h !== H || R !== T) && yp(e, u, i, T)),
        (sa = !1),
        (R = e.memoizedState),
        (u.state = R),
        Ol(e, i, u, s),
        Dl());
      var _ = e.memoizedState;
      h !== H ||
      R !== _ ||
      sa ||
      (t !== null && t.dependencies !== null && $s(t.dependencies))
        ? (typeof x == "function" && (tc(e, n, x, i), (_ = e.memoizedState)),
          (V =
            sa ||
            pp(e, n, V, i, R, _, T) ||
            (t !== null && t.dependencies !== null && $s(t.dependencies)))
            ? (O ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(i, _, T),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(i, _, T)),
              typeof u.componentDidUpdate == "function" && (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (h === t.memoizedProps && R === t.memoizedState) ||
                (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (h === t.memoizedProps && R === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = i),
              (e.memoizedState = _)),
          (u.props = i),
          (u.state = _),
          (u.context = T),
          (i = V))
        : (typeof u.componentDidUpdate != "function" ||
            (h === t.memoizedProps && R === t.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (h === t.memoizedProps && R === t.memoizedState) ||
            (e.flags |= 1024),
          (i = !1));
    }
    return (
      (u = i),
      Ri(t, e),
      (i = (e.flags & 128) !== 0),
      u || i
        ? ((u = e.stateNode),
          (n =
            i && typeof n.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (e.flags |= 1),
          t !== null && i
            ? ((e.child = Za(e, t.child, null, s)),
              (e.child = Za(e, null, n, s)))
            : Wt(t, e, n, s),
          (e.memoizedState = u.state),
          (t = e.child))
        : (t = Xn(t, e, s)),
      t
    );
  }
  function Op(t, e, n, i) {
    return (Ba(), (e.flags |= 256), Wt(t, e, n, i), e.child);
  }
  var lc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function sc(t) {
    return { baseLanes: t, cachePool: bm() };
  }
  function oc(t, e, n) {
    return ((t = t !== null ? t.childLanes & ~n : 0), e && (t |= Le), t);
  }
  function zp(t, e, n) {
    var i = e.pendingProps,
      s = !1,
      u = (e.flags & 128) !== 0,
      h;
    if (
      ((h = u) ||
        (h =
          t !== null && t.memoizedState === null ? !1 : (ce.current & 2) !== 0),
      h && ((s = !0), (e.flags &= -129)),
      (h = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (ht) {
        if (
          (s ? ca(e) : fa(),
          (t = Ut)
            ? ((t = tg(t, Pe)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: ea !== null ? { id: pn, overflow: yn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = fm(t)),
                (n.return = e),
                (e.child = n),
                (ae = e),
                (Ut = null)))
            : (t = null),
          t === null)
        )
          throw aa(e);
        return (of(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      return (
        (u = i.children),
        (i = i.fallback),
        s
          ? (fa(),
            (s = e.mode),
            (u = vo({ mode: "hidden", children: u }, s)),
            (i = Ua(i, s, n, null)),
            (u.return = e),
            (i.return = e),
            (u.sibling = i),
            (e.child = u),
            (i = e.child),
            (i.memoizedState = sc(n)),
            (i.childLanes = oc(t, h, n)),
            (e.memoizedState = lc),
            Ul(null, i))
          : (ca(e), rc(e, u))
      );
    }
    var x = t.memoizedState;
    if (x !== null) {
      var T = x.dehydrated;
      if (T !== null) return Jb(t, e, u, h, i, T, x, n);
    }
    return s
      ? (fa(),
        (s = i.fallback),
        (u = e.mode),
        (x = t.child),
        (T = x.sibling),
        (i = Ln(x, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = x.subtreeFlags & 1206910976),
        T !== null ? (s = Ln(T, s)) : ((s = Ua(s, u, n, null)), (s.flags |= 2)),
        (s.return = e),
        (i.return = e),
        (i.sibling = s),
        (e.child = i),
        Ul(null, i),
        (i = e.child),
        (s = t.child.memoizedState),
        s === null
          ? (s = sc(n))
          : ((u = s.cachePool),
            u !== null
              ? ((x = Kt._currentValue),
                (u = u.parent !== x ? { parent: x, pool: x } : u))
              : (u = bm()),
            (s = { baseLanes: s.baseLanes | n, cachePool: u })),
        (i.memoizedState = s),
        (i.childLanes = oc(t, h, n)),
        (e.memoizedState = lc),
        Ul(t.child, i))
      : (ca(e),
        (n = t.child),
        (t = n.sibling),
        (n = Ln(n, { mode: "visible", children: i.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((h = e.deletions),
          h === null ? ((e.deletions = [t]), (e.flags |= 16)) : h.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function rc(t, e) {
    return (
      (e = vo({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function vo(t, e) {
    return ((t = Ce(22, t, null, e)), (t.lanes = 0), t);
  }
  function xo(t, e, n) {
    return (
      Za(e, t.child, null, n),
      (t = rc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Jb(t, e, n, i, s, u, h, x) {
    if (n)
      return e.flags & 256
        ? (ca(e), (e.flags &= -257), xo(t, e, x))
        : e.memoizedState !== null
          ? (fa(), (e.child = t.child), (e.flags |= 128), null)
          : (fa(),
            (u = s.fallback),
            (h = e.mode),
            (s = vo({ mode: "visible", children: s.children }, h)),
            (u = Ua(u, h, x, null)),
            (u.flags |= 2),
            (s.return = e),
            (u.return = e),
            (s.sibling = u),
            (e.child = s),
            Za(e, t.child, null, x),
            (s = e.child),
            (s.memoizedState = sc(x)),
            (s.childLanes = oc(t, i, x)),
            (e.memoizedState = lc),
            Ul(null, s));
    if ((ca(e), of(u))) {
      if (((i = u.nextSibling && u.nextSibling.dataset), i)) var T = i.dgst;
      return (
        (i = T),
        i !== "" &&
          ((s = Error(r(419))),
          (s.stack = ""),
          (s.digest = i),
          Cl({ value: s, source: null, stack: null })),
        xo(t, e, x)
      );
    }
    if ((Ft || Ha(t, e, x, !1), (i = (x & t.childLanes) !== 0), Ft || i)) {
      if (ua.current !== null) return xo(t, e, x);
      if (
        ((i = zt), i !== null && ((s = mh(i, x)), s !== 0 && s !== h.retryLane))
      )
        throw ((h.retryLane = s), Va(t, s), Re(i, t, s), ac);
      return (sf(u) || Bo(), xo(t, e, x));
    }
    return sf(u)
      ? ((e.flags |= 192), (e.child = t.child), null)
      : ((t = h.treeContext),
        (Ut = Je(u.nextSibling)),
        (ae = e),
        (ht = !0),
        (na = null),
        (Pe = !1),
        t !== null && mm(e, t),
        (e = rc(e, s.children)),
        (e.flags |= 134221824),
        e);
  }
  function jp(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    (i !== null && (i.lanes |= e), Js(t.return, e, n));
  }
  function _p(t) {
    for (var e = null; t !== null;) {
      var n = t.alternate;
      (n !== null && lo(n) === null && (e = t), (t = t.sibling));
    }
    return e;
  }
  function bo(t, e, n, i, s, u) {
    var h = t.memoizedState;
    h === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: n,
          tailMode: s,
          treeForkCount: u,
        })
      : ((h.isBackwards = e),
        (h.rendering = null),
        (h.renderingStartTime = 0),
        (h.last = i),
        (h.tail = n),
        (h.tailMode = s),
        (h.treeForkCount = u));
  }
  function uc(t) {
    var e = t.child;
    for (t.child = null; e !== null;) {
      var n = e.sibling;
      ((e.sibling = t.child), (t.child = e), (e = n));
    }
  }
  function cc(t, e, n) {
    var i = e.pendingProps,
      s = i.revealOrder,
      u = i.tail;
    i = i.children;
    var h = ce.current;
    if (e.flags & 128) return (zl(e, h), null);
    var x = (h & 2) !== 0;
    if (
      (x ? ((h = (h & 1) | 2), (e.flags |= 128)) : (h &= 1),
      zl(e, h),
      s === "backwards" && t !== null
        ? (uc(t), Wt(t, e, i, n), uc(t))
        : Wt(t, e, i, n),
      (i = ht ? El : 0),
      !x && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null;) {
        if (t.tag === 13) t.memoizedState !== null && jp(t, n, e);
        else if (t.tag === 19) jp(t, n, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (s) {
      case "backwards":
        ((n = _p(e.child)),
          n === null
            ? ((s = e.child), (e.child = null))
            : ((s = n.sibling), (n.sibling = null), uc(e)),
          bo(e, !0, s, null, u, i));
        break;
      case "unstable_legacy-backwards":
        for (n = null, s = e.child, e.child = null; s !== null;) {
          if (((t = s.alternate), t !== null && lo(t) === null)) {
            e.child = s;
            break;
          }
          ((t = s.sibling), (s.sibling = n), (n = s), (s = t));
        }
        bo(e, !0, n, null, u, i);
        break;
      case "together":
        bo(e, !1, null, null, void 0, i);
        break;
      case "independent":
        e.memoizedState = null;
        break;
      default:
        ((n = _p(e.child)),
          n === null
            ? ((s = e.child), (e.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          bo(e, !1, s, n, u, i));
    }
    return e.child;
  }
  function Vp(t, e, n) {
    var i = e.pendingProps;
    return (ia(e, e.type, i.value), Wt(t, e, i.children, n), e.child);
  }
  function Xn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (pa |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Ha(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(r(153));
    if (e.child !== null) {
      for (
        t = e.child, n = Ln(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (n = n.sibling = Ln(t, t.pendingProps)),
          (n.return = e));
      n.sibling = null;
    }
    return e.child;
  }
  function fc(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && $s(t)));
  }
  function $b(t, e, n) {
    switch (e.tag) {
      case 3:
        (Cs(e, e.stateNode.containerInfo),
          ia(e, Kt, t.memoizedState.cache),
          Ba());
        break;
      case 27:
      case 5:
        Lr(e);
        break;
      case 4:
        Cs(e, e.stateNode.containerInfo);
        break;
      case 10:
        ia(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), Uu(e), null);
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null) {
          if (i.dehydrated !== null) return (ca(e), (e.flags |= 128), null);
          i = Ha(t, e, n, !1);
          var s = e.child.childLanes;
          return i || (n & s) !== 0
            ? zp(t, e, n)
            : (ca(e), (t = Xn(t, e, n)), t !== null ? t.sibling : null);
        }
        ca(e);
        break;
      case 19:
        if (e.flags & 128) return cc(t, e, n);
        if (
          ((s = (t.flags & 128) !== 0),
          (i = (n & e.childLanes) !== 0),
          i || (Ha(t, e, n, !1), (i = (n & e.childLanes) !== 0)),
          s)
        ) {
          if (i) return cc(t, e, n);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          zl(e, ce.current),
          i)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), wp(t, e, n, e.pendingProps));
      case 24:
        ia(e, Kt, t.memoizedState.cache);
    }
    return Xn(t, e, n);
  }
  function Up(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Ft = !0;
      else {
        if (!fc(t, n) && (e.flags & 128) === 0) return ((Ft = !1), $b(t, e, n));
        Ft = (t.flags & 131072) !== 0;
      }
    else ((Ft = !1), ht && (e.flags & 1048576) !== 0 && hm(e, El, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var i = e.pendingProps;
          if (((t = ka(e.elementType)), (e.type = t), typeof t == "function"))
            vu(t)
              ? ((i = Ka(t, i)), (e.tag = 1), (e = Dp(null, e, t, i, n)))
              : ((e.tag = 0), (e = ic(null, e, t, i, n)));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === X) {
                ((e.tag = 11), (e = Ep(null, e, t, i, n)));
                break t;
              } else if (s === ft) {
                ((e.tag = 14), (e = Cp(null, e, t, i, n)));
                break t;
              } else if (s === pt) {
                ((e.tag = 10), (e.type = t), (e = Vp(null, e, n)));
                break t;
              }
            }
            throw ((e = Et(t) || t), Error(r(306, e, "")));
          }
        }
        return e;
      case 0:
        return ic(t, e, e.type, e.pendingProps, n);
      case 1:
        return ((i = e.type), (s = Ka(i, e.pendingProps)), Dp(t, e, i, s, n));
      case 3:
        t: {
          if ((Cs(e, e.stateNode.containerInfo), t === null))
            throw Error(r(387));
          i = e.pendingProps;
          var u = e.memoizedState;
          ((s = u.element), Ou(t, e), Ol(e, i, null, n));
          var h = e.memoizedState;
          if (
            ((i = h.cache),
            ia(e, Kt, i),
            i !== u.cache && Au(e, [Kt], n, !0),
            Dl(),
            (i = h.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: i, isDehydrated: !1, cache: h.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = Op(t, e, i, n);
              break t;
            } else if (i !== s) {
              ((s = Ze(Error(r(424)), e)), Cl(s), (e = Op(t, e, i, n)));
              break t;
            } else
              for (
                t = e.stateNode.containerInfo,
                  t.nodeType === 9
                    ? (t = t.body)
                    : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
                  Ut = Je(t.firstChild),
                  ae = e,
                  ht = !0,
                  na = null,
                  Pe = !0,
                  n = wm(e, null, i, n),
                  e.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 134221824), (n = n.sibling));
          else {
            if ((Ba(), i === s)) {
              e = Xn(t, e, n);
              break t;
            }
            Wt(t, e, i, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Ri(t, e),
          t === null
            ? (n = og(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : ht || (e.stateNode = Yy(e.type, e.pendingProps, Jn.current, e))
            : (e.memoizedState = og(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Lr(e),
          t === null &&
            ht &&
            ((i = e.stateNode = ag(e.type, e.pendingProps, Jn.current)),
            (ae = e),
            (Pe = !0),
            (s = Ut),
            xa(e.type) ? ((rf = s), (Ut = Je(i.firstChild))) : (Ut = s)),
          Wt(t, e, e.pendingProps.children, n),
          Ri(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            ht &&
            ((s = i = Ut) &&
              ((i = ZS(i, e.type, e.pendingProps, Pe)),
              i !== null
                ? ((e.stateNode = i),
                  (ae = e),
                  (Ut = Je(i.firstChild)),
                  (Pe = !1),
                  (s = !0))
                : (s = !1)),
            s || aa(e)),
          Lr(e),
          (s = e.type),
          (u = e.pendingProps),
          (h = t !== null ? t.memoizedProps : null),
          (i = u.children),
          Wc(s, u) ? (i = null) : h !== null && Wc(s, h) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((s = Hu(t, e, Yb, null, null, n)), (Qi._currentValue = s)),
          Ri(t, e),
          Wt(t, e, i, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            ht &&
            ((t = n = Ut) &&
              ((n = QS(n, e.pendingProps, Pe)),
              n !== null
                ? ((e.stateNode = n), (ae = e), (Ut = null), (t = !0))
                : (t = !1)),
            t || aa(e)),
          null
        );
      case 13:
        return zp(t, e, n);
      case 4:
        return (
          Cs(e, e.stateNode.containerInfo),
          (i = e.pendingProps),
          t === null ? (e.child = Za(e, null, i, n)) : Wt(t, e, i, n),
          e.child
        );
      case 11:
        return Ep(t, e, e.type, e.pendingProps, n);
      case 7:
        return ((i = e.pendingProps), Ri(t, e), Wt(t, e, i, n), e.child);
      case 8:
        return (Wt(t, e, e.pendingProps.children, n), e.child);
      case 12:
        return (Wt(t, e, e.pendingProps.children, n), e.child);
      case 10:
        return Vp(t, e, n);
      case 9:
        return (
          (s = e.type._context),
          (i = e.pendingProps.children),
          Ya(e),
          (s = re(s)),
          (i = i(s)),
          (e.flags |= 1),
          Wt(t, e, i, n),
          e.child
        );
      case 14:
        return Cp(t, e, e.type, e.pendingProps, n);
      case 15:
        return Ap(t, e, e.type, e.pendingProps, n);
      case 19:
        return cc(t, e, n);
      case 31:
        return Fb(t, e, n);
      case 22:
        return wp(t, e, n, e.pendingProps);
      case 24:
        return (
          Ya(e),
          (i = re(Kt)),
          t === null
            ? ((s = Ru()),
              s === null &&
                ((s = zt),
                (u = wu()),
                (s.pooledCache = u),
                u.refCount++,
                u !== null && (s.pooledCacheLanes |= n),
                (s = u)),
              (e.memoizedState = { parent: i, cache: s }),
              Du(e),
              ia(e, Kt, s))
            : ((t.lanes & n) !== 0 && (Ou(t, e), Ol(e, null, null, n), Dl()),
              (s = t.memoizedState),
              (u = e.memoizedState),
              s.parent !== i
                ? ((s = { parent: i, cache: i }),
                  (e.memoizedState = s),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = s),
                  ia(e, Kt, i))
                : ((i = u.cache),
                  ia(e, Kt, i),
                  i !== s.cache && Au(e, [Kt], n, !0))),
          Wt(t, e, e.pendingProps.children, n),
          e.child
        );
      case 30:
        return (
          e.stateNode === null &&
            (e.stateNode = {
              autoName: null,
              paired: null,
              clones: null,
              ref: null,
            }),
          (i = e.pendingProps),
          i.name != null && i.name !== "auto"
            ? (e.flags |= t === null ? 18882560 : 18874368)
            : ht && Ps(e),
          t !== null && t.memoizedProps.name !== i.name
            ? (e.flags |= 4194816)
            : Ri(t, e),
          Wt(t, e, i.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function Zn(t) {
    t.flags |= 4;
  }
  function dc(t, e, n, i, s) {
    var u;
    if (
      ((u = (t.mode & 32) !== 0) &&
        (u =
          n === null
            ? fg(e, i)
            : fg(e, i) && (i.src !== n.src || i.srcSet !== n.srcSet)),
      u)
    ) {
      if (((t.flags |= 16777216), (s & 335544128) === s))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (gy()) t.flags |= 8192;
        else throw ((Xa = eo), Mu);
    } else t.flags &= -16777217;
  }
  function Bp(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !dg(e)))
      if (gy()) t.flags |= 8192;
      else throw ((Xa = eo), Mu);
  }
  function So(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? fh() : 536870912), (t.lanes |= e), (ji |= e)));
  }
  function Bl(t, e) {
    if (!ht)
      switch (t.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var n = t.tail, i = null; n !== null;)
            (n.alternate !== null && (i = n), (n = n.sibling));
          i === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (i.sibling = null);
          break;
        default:
          for (e = t.tail, n = null; e !== null;)
            (e.alternate !== null && (n = e), (e = e.sibling));
          n === null ? (t.tail = null) : (n.sibling = null);
      }
  }
  function Bt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      i = 0;
    if (e)
      for (var s = t.child; s !== null;)
        ((n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags & 1206910976),
          (i |= s.flags & 1206910976),
          (s.return = t),
          (s = s.sibling));
    else
      for (s = t.child; s !== null;)
        ((n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags),
          (i |= s.flags),
          (s.return = t),
          (s = s.sibling));
    return ((t.subtreeFlags |= i), (t.childLanes = n), e);
  }
  function Wb(t, e, n) {
    var i = e.pendingProps;
    switch ((Su(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Bt(e), null);
      case 1:
        return (Bt(e), null);
      case 3:
        return (
          (n = e.stateNode),
          (i = null),
          t !== null && (i = t.memoizedState.cache),
          e.memoizedState.cache !== i && (e.flags |= 2048),
          qn(Kt),
          li(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Si(e)
              ? Zn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Eu())),
          Bt(e),
          null
        );
      case 26:
        var s = e.type,
          u = e.memoizedState;
        return (
          t === null
            ? (Zn(e),
              u !== null ? (Bt(e), Bp(e, u)) : (Bt(e), dc(e, s, null, i, n)))
            : u
              ? u !== t.memoizedState
                ? (Zn(e), Bt(e), Bp(e, u))
                : (Bt(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== i && Zn(e),
                Bt(e),
                dc(e, s, t, i, n)),
          null
        );
      case 27:
        if (
          (As(e),
          (n = Jn.current),
          (s = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== i && Zn(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(r(166));
            return (Bt(e), (e.subtreeFlags &= -33554433), null);
          }
          ((t = hn.current),
            Si(e) ? pm(e) : ((t = ag(s, i, n)), (e.stateNode = t), Zn(e)));
        }
        return (Bt(e), (e.subtreeFlags &= -33554433), null);
      case 5:
        if ((As(e), (s = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== i && Zn(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(r(166));
            return (Bt(e), (e.subtreeFlags &= -33554433), null);
          }
          if (((u = hn.current), Si(e))) pm(e);
          else {
            var h = Pl(Jn.current);
            switch (u) {
              case 1:
                u = h.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                u = h.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    u = h.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    u = h.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s,
                    );
                    break;
                  case "script":
                    ((u = h.createElement("div")),
                      (u.innerHTML = "<script><\/script>"),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case "select":
                    ((u =
                      typeof i.is == "string"
                        ? h.createElement("select", { is: i.is })
                        : h.createElement("select")),
                      i.multiple
                        ? (u.multiple = !0)
                        : i.size && (u.size = i.size));
                    break;
                  default:
                    u =
                      typeof i.is == "string"
                        ? h.createElement(s, { is: i.is })
                        : h.createElement(s);
                }
            }
            ((u[oe] = e), (u[Ee] = i));
            t: for (h = e.child; h !== null;) {
              if (h.tag === 5 || h.tag === 6) u.appendChild(h.stateNode);
              else if (h.tag !== 4 && h.tag !== 27 && h.child !== null) {
                ((h.child.return = h), (h = h.child));
                continue;
              }
              if (h === e) break t;
              for (; h.sibling === null;) {
                if (h.return === null || h.return === e) break t;
                h = h.return;
              }
              ((h.sibling.return = h.return), (h = h.sibling));
            }
            e.stateNode = u;
            t: switch ((de(u, s, i), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break t;
              case "img":
                i = !0;
                break t;
              default:
                i = !1;
            }
            i && Zn(e);
          }
        }
        return (
          Bt(e),
          (e.subtreeFlags &= -33554433),
          dc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== i && Zn(e);
        else {
          if (typeof i != "string" && e.stateNode === null) throw Error(r(166));
          if (((t = Jn.current), Si(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (i = null),
              (s = ae),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            ((t[oe] = e),
              (t = !!(
                t.nodeValue === n ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                Uy(t.nodeValue, n)
              )),
              t || aa(e, !0));
          } else
            ((t = Pl(t).createTextNode(i)), (t[oe] = e), (e.stateNode = t));
        }
        return (Bt(e), null);
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((i = Si(e)), n !== null)) {
            if (t === null) {
              if (!i) throw Error(r(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(r(557));
              t[oe] = e;
            } else
              (Ba(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Bt(e), (t = !1));
          } else
            ((n = Eu()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (t = !0));
          if (!t) return e.flags & 256 ? (Ve(e), e) : (Ve(e), null);
          if ((e.flags & 128) !== 0) throw Error(r(558));
        }
        return (Bt(e), null);
      case 13:
        if (
          ((i = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = Si(e)), i !== null && i.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(r(318));
              if (
                ((s = e.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(r(317));
              s[oe] = e;
            } else
              (Ba(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Bt(e), (s = !1));
          } else
            ((s = Eu()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = s),
              (s = !0));
          if (!s) return e.flags & 256 ? (Ve(e), e) : (Ve(e), null);
        }
        return (
          Ve(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = n), e)
            : ((n = i !== null),
              (t = t !== null && t.memoizedState !== null),
              n &&
                ((i = e.child),
                (s = null),
                i.alternate !== null &&
                  i.alternate.memoizedState !== null &&
                  i.alternate.memoizedState.cachePool !== null &&
                  (s = i.alternate.memoizedState.cachePool.pool),
                (u = null),
                i.memoizedState !== null &&
                  i.memoizedState.cachePool !== null &&
                  (u = i.memoizedState.cachePool.pool),
                u !== s && (i.flags |= 2048)),
              n !== t && n && (e.child.flags |= 8192),
              So(e, e.updateQueue),
              Bt(e),
              null)
        );
      case 4:
        return (
          li(),
          t === null && Kc(e.stateNode.containerInfo),
          (e.flags |= 67108864),
          Bt(e),
          null
        );
      case 10:
        return (qn(e.type), Bt(e), null);
      case 19:
        if ((Bu(e), (i = e.memoizedState), i === null)) return (Bt(e), null);
        if (((s = (e.flags & 128) !== 0), (u = i.rendering), u === null))
          if (s) Bl(i, !1);
          else {
            if (Gt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null;) {
                if (((u = lo(t)), u !== null)) {
                  for (
                    e.flags |= 128,
                      Bl(i, !1),
                      t = u.updateQueue,
                      e.updateQueue = t,
                      So(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;
                  )
                    (cm(n, t), (n = n.sibling));
                  return (
                    zl(e, (ce.current & 1) | 2),
                    ht && Hn(e, i.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            i.tail !== null &&
              De() > jo &&
              ((e.flags |= 128), (s = !0), Bl(i, !1), (e.lanes = 4194304));
          }
        else {
          if (!s)
            if (((t = lo(u)), t !== null)) {
              if (
                ((e.flags |= 128),
                (s = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                So(e, t),
                Bl(i, !0),
                i.tail === null &&
                  i.tailMode !== "collapsed" &&
                  i.tailMode !== "visible" &&
                  !u.alternate &&
                  !ht)
              )
                return (Bt(e), null);
            } else
              2 * De() - i.renderingStartTime > jo &&
                n !== 536870912 &&
                ((e.flags |= 128), (s = !0), Bl(i, !1), (e.lanes = 4194304));
          i.isBackwards
            ? ((u.sibling = e.child), (e.child = u))
            : ((t = i.last),
              t !== null ? (t.sibling = u) : (e.child = u),
              (i.last = u));
        }
        if (i.tail !== null) {
          t = i.tail;
          t: {
            for (n = t; n !== null;) {
              if (n.alternate !== null) {
                n = !1;
                break t;
              }
              n = n.sibling;
            }
            n = !0;
          }
          return (
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = De()),
            (t.sibling = null),
            (u = ce.current),
            (u = s ? (u & 1) | 2 : u & 1),
            i.tailMode === "visible" || i.tailMode === "collapsed" || !n || ht
              ? zl(e, u)
              : ((n = u), Vt(ue, e), Vt(ce, n), pe === null && (pe = e)),
            ht && Hn(e, i.treeForkCount),
            t
          );
        }
        return (Bt(e), null);
      case 22:
      case 23:
        return (
          Ve(e),
          Vu(),
          (i = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== i && (e.flags |= 8192)
            : i && (e.flags |= 8192),
          i
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Bt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Bt(e),
          (n = e.updateQueue),
          n !== null && So(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (i = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (i = e.memoizedState.cachePool.pool),
          i !== n && (e.flags |= 2048),
          t !== null && se(Ga),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          qn(Kt),
          Bt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return ((e.flags |= 33554432), Bt(e), null);
    }
    throw Error(r(156, e.tag));
  }
  function Ib(t, e) {
    switch ((Su(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          qn(Kt),
          li(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (As(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((Ve(e), e.alternate === null)) throw Error(r(340));
          Ba();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (Ve(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(r(340));
          Ba();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (
          Bu(e),
          (t = e.flags),
          t & 65536
            ? ((e.flags = (t & -65537) | 128),
              (t = e.memoizedState),
              t !== null && ((t.rendering = null), (t.tail = null)),
              (e.flags |= 4),
              e)
            : null
        );
      case 4:
        return (li(), null);
      case 10:
        return (qn(e.type), null);
      case 22:
      case 23:
        return (
          Ve(e),
          Vu(),
          t !== null && se(Ga),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (qn(Kt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Lp(t, e) {
    switch ((Su(e), e.tag)) {
      case 3:
        (qn(Kt), li());
        break;
      case 26:
      case 27:
      case 5:
        As(e);
        break;
      case 4:
        li();
        break;
      case 31:
        e.memoizedState !== null && Ve(e);
        break;
      case 13:
        Ve(e);
        break;
      case 19:
        Bu(e);
        break;
      case 10:
        qn(e.type);
        break;
      case 22:
      case 23:
        (Ve(e), Vu(), t !== null && se(Ga));
        break;
      case 24:
        qn(Kt);
    }
  }
  function Ll(t, e) {
    try {
      var n = e.updateQueue,
        i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            i = void 0;
            var u = n.create,
              h = n.inst;
            ((i = u()), (h.destroy = i));
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (x) {
      Mt(e, e.return, x);
    }
  }
  function da(t, e, n) {
    try {
      var i = e.updateQueue,
        s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var u = s.next;
        i = u;
        do {
          if ((i.tag & t) === t) {
            var h = i.inst,
              x = h.destroy;
            if (x !== void 0) {
              ((h.destroy = void 0), (s = e));
              var T = n,
                O = x;
              try {
                O();
              } catch (V) {
                Mt(s, T, V);
              }
            }
          }
          i = i.next;
        } while (i !== u);
      }
    } catch (V) {
      Mt(e, e.return, V);
    }
  }
  function Hp(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Rm(e, n);
      } catch (i) {
        Mt(t, t.return, i);
      }
    }
  }
  function Yp(t, e, n) {
    ((n.props = Ka(t.type, t.memoizedProps)), (n.state = t.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (i) {
      Mt(t, e, i);
    }
  }
  function gn(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = t.stateNode;
            break;
          case 30:
            var s = t.stateNode,
              u = Un(t.memoizedProps, s);
            ((s.ref === null || s.ref.name !== u) && (s.ref = Ky(u)),
              (i = s.ref));
            break;
          case 7:
            if (t.stateNode === null) {
              var h = new Ye(t);
              (p(t.child, !1, kS, h, void 0, void 0), (t.stateNode = h));
            }
            i = t.stateNode;
            break;
          default:
            i = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(i)) : (n.current = i);
      }
    } catch (x) {
      Mt(t, e, x);
    }
  }
  function fe(t, e) {
    var n = t.ref,
      i = t.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          Mt(t, e, s);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          Mt(t, e, s);
        }
      else n.current = null;
  }
  function To(t, e) {
    if (
      (t.tag === 5 || t.tag === 27 || t.tag === 6) &&
      t.alternate === null &&
      e !== null
    )
      for (var n = 0; n < e.length; n++) Iy(t.stateNode, e[n]);
  }
  function qp(t) {
    for (
      var e = t.return;
      e !== null && (mc(e) && Iy(t.stateNode, e.stateNode), !hc(e));
    )
      e = e.return;
  }
  function Hl(t) {
    for (
      var e = t.return;
      e !== null && (mc(e) && XS(t.stateNode, e.stateNode), !hc(e));
    )
      e = e.return;
  }
  function hc(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function mc(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function pc(t) {
    var e = t.type,
      n = t.memoizedProps,
      i = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break t;
        case "img":
          n.src ? (i.src = n.src) : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (s) {
      Mt(t, t.return, s);
    }
  }
  function yc(t, e, n) {
    try {
      var i = t.stateNode;
      (AS(i, t.type, n, e), (i[Ee] = e));
    } catch (s) {
      Mt(t, t.return, s);
    }
  }
  function Gp(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && xa(t.type)) ||
      t.tag === 4
    );
  }
  function gc(t) {
    t: for (;;) {
      for (; t.sibling === null;) {
        if (t.return === null || Gp(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && xa(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function vc(t, e, n, i) {
    var s = t.tag;
    if (s === 5 || s === 6)
      ((s = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(s, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            e.appendChild(s),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = mn)),
        To(t, i),
        (Ct = !0));
    else if (
      s !== 4 &&
      (s === 27 &&
        (To(t, i), (i = null), xa(t.type) && ((n = t.stateNode), (e = null))),
      (t = t.child),
      t !== null)
    )
      for (vc(t, e, n, i), t = t.sibling; t !== null;)
        (vc(t, e, n, i), (t = t.sibling));
  }
  function Eo(t, e, n, i) {
    var s = t.tag;
    if (s === 5 || s === 6)
      ((s = t.stateNode),
        e ? n.insertBefore(s, e) : n.appendChild(s),
        To(t, i),
        (Ct = !0));
    else if (
      s !== 4 &&
      (s === 27 && (To(t, i), (i = null), xa(t.type) && (n = t.stateNode)),
      (t = t.child),
      t !== null)
    )
      for (Eo(t, e, n, i), t = t.sibling; t !== null;)
        (Eo(t, e, n, i), (t = t.sibling));
  }
  function kp(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var i = t.type, s = e.attributes; s.length;)
        e.removeAttributeNode(s[0]);
      (de(e, i, n), (e[oe] = t), (e[Ee] = n));
    } catch (u) {
      Mt(t, t.return, u);
    }
  }
  var Co = !1,
    Ue = null;
  function Xp(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (Co = !0);
  }
  var vn = null;
  function Zp() {
    var t = vn;
    return ((vn = null), t);
  }
  var Ae = 0;
  function Mi(t, e, n, i, s) {
    return ((Ae = 0), Qp(t.child, e, n, i, s));
  }
  function Qp(t, e, n, i, s) {
    for (var u = !1; t !== null;) {
      if (t.tag === 5) {
        var h = t.stateNode;
        if (i !== null) {
          var x = ef(h);
          (i.push(x), x.view && (u = !0));
        } else u || (ef(h).view && (u = !0));
        ((Co = !0), Zy(h, Ae === 0 ? e : e + "_" + Ae, n), Ae++);
      } else
        (t.tag !== 22 || t.memoizedState === null) &&
          ((t.tag === 30 && s) || (Qp(t.child, e, n, i, s) && (u = !0)));
      t = t.sibling;
    }
    return u;
  }
  function xn(t, e) {
    for (; t !== null;)
      (t.tag === 5
        ? Qy(t.stateNode, t.memoizedProps)
        : (t.tag !== 22 || t.memoizedState === null) &&
          ((t.tag === 30 && e) || xn(t.child, e)),
        (t = t.sibling));
  }
  function Ao(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null;) {
        if (
          (t.tag !== 22 || t.memoizedState === null) &&
          (Ao(t),
          t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)
        ) {
          var e = t.memoizedProps;
          if (e.name == null || e.name === "auto") throw Error(r(544));
          var n = e.name;
          ((e = Bn(e.default, e.share)),
            e !== "none" && (Mi(t, n, e, null, !1) || xn(t.child, !1)));
        }
        t = t.sibling;
      }
  }
  function xc(t, e) {
    if (t.tag === 30) {
      var n = t.stateNode,
        i = t.memoizedProps,
        s = Un(i, n),
        u = Bn(i.default, n.paired ? i.share : i.enter);
      u !== "none"
        ? Mi(t, s, u, null, !1)
          ? (Ao(t), n.paired || e || Bi(t, i.onEnter))
          : xn(t.child, !1)
        : Ao(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null;) (xc(t, e), (t = t.sibling));
    else Ao(t);
  }
  function bc(t) {
    if (Ue !== null && Ue.size !== 0) {
      var e = Ue;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null;) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var n = t.memoizedProps,
                i = n.name;
              if (i != null && i !== "auto") {
                var s = e.get(i);
                if (s !== void 0) {
                  var u = Bn(n.default, n.share);
                  if (
                    (u !== "none" &&
                      (Mi(t, i, u, null, !1)
                        ? ((u = t.stateNode),
                          (s.paired = u),
                          (u.paired = s),
                          Bi(t, n.onShare))
                        : xn(t.child, !1)),
                    e.delete(i),
                    e.size === 0)
                  )
                    break;
                }
              }
            }
            bc(t);
          }
          t = t.sibling;
        }
    }
  }
  function Sc(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps,
        n = Un(e, t.stateNode),
        i = Ue !== null ? Ue.get(n) : void 0,
        s = Bn(e.default, i !== void 0 ? e.share : e.exit);
      (s !== "none" &&
        (Mi(t, n, s, null, !1)
          ? i !== void 0
            ? ((s = t.stateNode),
              (i.paired = s),
              (s.paired = i),
              Ue.delete(n),
              Bi(t, e.onShare))
            : Bi(t, e.onExit)
          : xn(t.child, !1)),
        Ue !== null && bc(t));
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null;) (Sc(t), (t = t.sibling));
    else Ue !== null && bc(t);
  }
  function Kp(t) {
    for (t = t.child; t !== null;) {
      if (t.tag === 30) {
        var e = t.memoizedProps,
          n = Un(e, t.stateNode);
        ((e = Bn(e.default, e.update)),
          (t.flags &= -5),
          e !== "none" && Mi(t, n, e, (t.memoizedState = []), !1));
      } else (t.subtreeFlags & 33554432) !== 0 && Kp(t);
      t = t.sibling;
    }
  }
  function Tc(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null;) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && ((e.paired = null), xn(t.child, !1));
          }
          Tc(t);
        }
        t = t.sibling;
      }
  }
  function wo(t) {
    if (t.tag === 30) ((t.stateNode.paired = null), xn(t.child, !1), Tc(t));
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null;) (wo(t), (t = t.sibling));
    else Tc(t);
  }
  function Pp(t) {
    for (t = t.child; t !== null;)
      (t.tag === 30
        ? xn(t.child, !1)
        : (t.subtreeFlags & 33554432) !== 0 && Pp(t),
        (t = t.sibling));
  }
  function Ec(t, e, n, i, s, u, h) {
    for (var x = !1; e !== null;) {
      if (e.tag === 5) {
        var T = e.stateNode;
        if (u !== null && Ae < u.length) {
          var O = u[Ae],
            V = ef(T);
          (O.view || V.view) && (x = !0);
          var H;
          if ((H = (t.flags & 4) === 0))
            if (V.clip) H = !0;
            else {
              H = O.rect;
              var R = V.rect;
              H =
                H.y !== R.y ||
                H.x !== R.x ||
                H.height !== R.height ||
                H.width !== R.width;
            }
          (H && (t.flags |= 4),
            V.abs
              ? (V = !O.abs)
              : ((O = O.rect),
                (V = V.rect),
                (V = O.height !== V.height || O.width !== V.width)),
            V && (t.flags |= 32));
        } else t.flags |= 32;
        ((t.flags & 4) !== 0 && Zy(T, Ae === 0 ? n : n + "_" + Ae, s),
          (x && (t.flags & 4) !== 0) ||
            (vn === null && (vn = []),
            vn.push(T, Ae === 0 ? i : i + "_" + Ae, e.memoizedProps)),
          Ae++);
      } else
        (e.tag !== 22 || e.memoizedState === null) &&
          (e.tag === 30 && h
            ? (t.flags |= e.flags & 32)
            : Ec(t, e.child, n, i, s, u, h) && (x = !0));
      e = e.sibling;
    }
    return x;
  }
  function Fp(t, e) {
    for (t = t.child; t !== null;) {
      if (t.tag === 30) {
        var n = t.memoizedProps,
          i = t.stateNode,
          s = Un(n, i),
          u = Bn(n.default, n.update),
          h;
        ((h = t.memoizedState), (t.memoizedState = null), (i = t));
        var x = t.child;
        ((Ae = 0),
          (s = Ec(i, x, s, s, u, h, !1)),
          (t.flags & 4) !== 0 && s && Bi(t, n.onUpdate));
      } else (t.subtreeFlags & 33554432) !== 0 && Fp(t);
      t = t.sibling;
    }
  }
  var ie = !1,
    Nt = !1,
    bn = !1,
    Cc = !1,
    Jp = typeof WeakSet == "function" ? WeakSet : Set,
    le = null,
    Sn = !1,
    Yl = !1,
    No = !1,
    Ac = !1;
  function tS(t, e, n) {
    if (((t = t.containerInfo), (Jc = Ki), (t = tm(t)), fu(t))) {
      if ("selectionStart" in t)
        var i = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          i = ((i = t.ownerDocument) && i.defaultView) || window;
          var s = i.getSelection && i.getSelection();
          if (s && s.rangeCount !== 0) {
            i = s.anchorNode;
            var u = s.anchorOffset,
              h = s.focusNode;
            s = s.focusOffset;
            try {
              (i.nodeType, h.nodeType);
            } catch {
              i = null;
              break t;
            }
            var x = 0,
              T = -1,
              O = -1,
              V = 0,
              H = 0,
              R = t,
              _ = null;
            e: for (;;) {
              for (
                var Z;
                R !== i || (u !== 0 && R.nodeType !== 3) || (T = x + u),
                  R !== h || (s !== 0 && R.nodeType !== 3) || (O = x + s),
                  R.nodeType === 3 && (x += R.nodeValue.length),
                  (Z = R.firstChild) !== null;
              )
                ((_ = R), (R = Z));
              for (;;) {
                if (R === t) break e;
                if (
                  (_ === i && ++V === u && (T = x),
                  _ === h && ++H === s && (O = x),
                  (Z = R.nextSibling) !== null)
                )
                  break;
                ((R = _), (_ = R.parentNode));
              }
              R = Z;
            }
            i = T === -1 || O === -1 ? null : { start: T, end: O };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (
      $c = { focusedElem: t, selectionRange: i },
        Ki = !1,
        n = (n & 335544064) === n,
        le = e,
        e = n ? 9270 : 1024;
      le !== null;
    ) {
      if (((t = le), n && ((i = t.deletions), i !== null)))
        for (u = 0; u < i.length; u++) n && Sc(i[u]);
      if (t.alternate === null && (t.flags & 2) !== 0) (n && Xp(t), Ro(n));
      else {
        if (t.tag === 22) {
          if (((i = t.alternate), t.memoizedState !== null)) {
            (i !== null && i.memoizedState === null && n && Sc(i), Ro(n));
            continue;
          } else if (i !== null && i.memoizedState !== null) {
            (n && Xp(t), Ro(n));
            continue;
          }
        }
        ((i = t.child),
          (t.subtreeFlags & e) !== 0 && i !== null
            ? ((i.return = t), (le = i))
            : (n && Kp(t), Ro(n)));
      }
    }
    Ue = null;
  }
  function Ro(t) {
    for (; le !== null;) {
      var e = le,
        n = t,
        i = e.alternate,
        s = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((s & 1024) !== 0 && i !== null) {
            ((n = void 0), (s = i.memoizedProps), (i = i.memoizedState));
            var u = e.stateNode;
            try {
              var h = Ka(e.type, s);
              ((n = u.getSnapshotBeforeUpdate(h, i)),
                (u.__reactInternalSnapshotBeforeUpdate = n));
            } catch (x) {
              Mt(e, e.return, x);
            }
          }
          break;
        case 3:
          if ((s & 1024) !== 0) {
            if (((i = e.stateNode.containerInfo), (n = i.nodeType), n === 9))
              lf(i);
            else if (n === 1)
              switch (i.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  lf(i);
                  break;
                default:
                  i.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          n &&
            i !== null &&
            ((n = Un(i.memoizedProps, i.stateNode)),
            (s = e.memoizedProps),
            (s = Bn(s.default, s.update)),
            s !== "none" && Mi(i, n, s, (i.memoizedState = []), !0));
          break;
        default:
          if ((s & 1024) !== 0) throw Error(r(163));
      }
      if (((i = e.sibling), i !== null)) {
        ((i.return = e.return), (le = i));
        break;
      }
      le = e.return;
    }
  }
  function $p(t, e, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Tn(t, n), i & 4 && Ll(5, n));
        break;
      case 1:
        if ((Tn(t, n), i & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (h) {
              Mt(n, n.return, h);
            }
          else {
            var s = Ka(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (h) {
              Mt(n, n.return, h);
            }
          }
        (i & 64 && Hp(n), i & 512 && gn(n, n.return));
        break;
      case 3:
        if ((Tn(t, n), i & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Rm(t, e);
          } catch (h) {
            Mt(n, n.return, h);
          }
        }
        break;
      case 27:
        e === null && i & 4 && kp(n);
      case 26:
      case 5:
        (Tn(t, n), e === null && i & 4 && pc(n), i & 512 && gn(n, n.return));
        break;
      case 12:
        Tn(t, n);
        break;
      case 31:
        (Tn(t, n), i & 4 && ey(t, n));
        break;
      case 13:
        (Tn(t, n),
          i & 4 && ny(t, n),
          i & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = dS.bind(null, n)), KS(t, n)))));
        break;
      case 22:
        if (((i = n.memoizedState !== null || ie), !i)) {
          var u = (e !== null && e.memoizedState !== null) || Nt;
          ((e = ie),
            (s = Nt),
            (ie = i),
            (Nt = u) && !s
              ? ((i = 2),
                (n.subtreeFlags & 8772) !== 0 && (i |= 1),
                sn(t, n, i))
              : Tn(t, n),
            (ie = e),
            (Nt = s));
        }
        break;
      case 30:
        (Tn(t, n), i & 512 && gn(n, n.return));
        break;
      case 7:
        i & 512 && gn(n, n.return);
      default:
        Tn(t, n);
    }
  }
  function wc(t, e) {
    for (t = t.child; t !== null;) (Wp(t, e), (t = t.sibling));
  }
  function Wp(t, e) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var n = t.stateNode;
          if (e) {
            var i = n.style;
            typeof i.setProperty == "function"
              ? i.setProperty("display", "none", "important")
              : (i.display = "none");
          } else {
            var s = t.stateNode,
              u = t.memoizedProps.style,
              h = u != null && u.hasOwnProperty("display") ? u.display : null;
            s.style.display =
              h == null || typeof h == "boolean" ? "" : ("" + h).trim();
          }
        } catch (T) {
          Mt(t, t.return, T);
        }
        Nc(t, e);
        break;
      case 6:
        try {
          ((t.stateNode.nodeValue = e ? "" : t.memoizedProps), (Ct = !0));
        } catch (T) {
          Mt(t, t.return, T);
        }
        break;
      case 18:
        try {
          var x = t.stateNode;
          e ? Xy(x, !0) : Xy(t.stateNode, !1);
        } catch (T) {
          Mt(t, t.return, T);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && wc(t, e);
        break;
      default:
        wc(t, e);
    }
  }
  function Nc(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null;) {
        t: {
          var n = t,
            i = e;
          switch (n.tag) {
            case 4:
              Wp(n, i);
              break t;
            case 22:
              n.memoizedState === null && Nc(n, i);
              break t;
            default:
              Nc(n, i);
          }
        }
        t = t.sibling;
      }
  }
  function Ip(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), Ip(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && zs(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var Lt = null,
    we = !1;
  function an(t, e, n) {
    for (n = n.child; n !== null;) (ty(t, e, n), (n = n.sibling));
  }
  function ty(t, e, n) {
    if (Oe && typeof Oe.onCommitFiberUnmount == "function")
      try {
        Oe.onCommitFiberUnmount(ul, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Nt || fe(n, e),
          an(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode &&
              !Nt &&
              ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        (Nt || fe(n, e), Hl(n));
        var i = Lt,
          s = we;
        (xa(n.type) && ((Lt = n.stateNode), (we = !1)),
          an(t, e, n),
          ig(n.stateNode, n.type, n.memoizedProps),
          (Lt = i),
          (we = s));
        break;
      case 5:
        (Nt || fe(n, e), Hl(n));
      case 6:
        if (
          (n.tag === 6 && Hl(n),
          (i = Lt),
          (s = we),
          (Lt = null),
          an(t, e, n),
          (Lt = i),
          (we = s),
          Lt !== null)
        )
          if (we)
            try {
              ((Lt.nodeType === 9
                ? Lt.body
                : Lt.nodeName === "HTML"
                  ? Lt.ownerDocument.body
                  : Lt
              ).removeChild(n.stateNode),
                (Ct = !0));
            } catch (u) {
              Mt(n, e, u);
            }
          else
            try {
              (Lt.removeChild(n.stateNode), (Ct = !0));
            } catch (u) {
              Mt(n, e, u);
            }
        break;
      case 18:
        Lt !== null &&
          (we
            ? ((t = Lt),
              ky(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                n.stateNode,
              ),
              Pi(t))
            : ky(Lt, n.stateNode));
        break;
      case 4:
        ((i = Lt),
          (s = we),
          (Lt = n.stateNode.containerInfo),
          (we = !0),
          an(t, e, n),
          (Lt = i),
          (we = s));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (da(2, n, e), Nt || da(4, n, e), an(t, e, n));
        break;
      case 1:
        (Nt ||
          (fe(n, e),
          (i = n.stateNode),
          typeof i.componentWillUnmount == "function" && Yp(n, e, i)),
          an(t, e, n));
        break;
      case 21:
        an(t, e, n);
        break;
      case 22:
        ((Nt = (i = Nt) || n.memoizedState !== null), an(t, e, n), (Nt = i));
        break;
      case 30:
        (fe(n, e), an(t, e, n));
        break;
      case 7:
        (Nt || fe(n, e), an(t, e, n));
        break;
      default:
        an(t, e, n);
    }
  }
  function ey(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        Pi(t);
      } catch (n) {
        Mt(e, e.return, n);
      }
    }
  }
  function ny(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Pi(t);
      } catch (n) {
        Mt(e, e.return, n);
      }
  }
  function eS(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new Jp()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Jp()),
          e
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Mo(t, e) {
    var n = eS(t);
    e.forEach(function (i) {
      if (!n.has(i)) {
        n.add(i);
        var s = hS.bind(null, t, i);
        i.then(s, s);
      }
    });
  }
  function xe(t, e, n) {
    var i = e.deletions;
    if (i !== null)
      for (var s = 0; s < i.length; s++) {
        var u = i[s],
          h = t,
          x = e,
          T = x;
        t: for (; T !== null;) {
          switch (T.tag) {
            case 27:
              if (xa(T.type)) {
                ((Lt = T.stateNode), (we = !1));
                break t;
              }
              break;
            case 5:
              ((Lt = T.stateNode), (we = !1));
              break t;
            case 3:
            case 4:
              ((Lt = T.stateNode.containerInfo), (we = !0));
              break t;
          }
          T = T.return;
        }
        if (Lt === null) throw Error(r(160));
        (ty(h, x, u),
          (Lt = null),
          (we = !1),
          (h = u.alternate),
          h !== null && (h.return = null),
          (u.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null;) (ay(e, t, n), (e = e.sibling));
  }
  var ln = null;
  function ay(t, e, n) {
    var i = t.alternate,
      s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          s & 4 &&
          ((i = t.updateQueue), (i = i !== null ? i.events : null), i !== null)
        )
          for (var u = 0; u < i.length; u++) {
            var h = i[u];
            h.ref.impl = h.nextImpl;
          }
        (xe(e, t, n),
          be(t),
          s & 4 && (da(3, t, t.return), Ll(3, t), da(5, t, t.return)));
        break;
      case 1:
        (xe(e, t, n),
          be(t),
          s & 512 && (Nt || i === null || fe(i, i.return)),
          s & 64 &&
            ie &&
            ((t = t.updateQueue),
            t !== null &&
              ((e = t.callbacks),
              e !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? e : n.concat(e))))));
        break;
      case 26:
        if (
          ((u = ln),
          xe(e, t, n),
          be(t),
          s & 512 && (Nt || i === null || fe(i, i.return)),
          s & 4)
        )
          if (
            ((s = i !== null ? i.memoizedState : null),
            (n = t.memoizedState),
            i === null)
          )
            if (n === null)
              if (t.stateNode === null)
                if (ie)
                  t.stateNode = Yy(t.type, t.memoizedProps, e.containerInfo, t);
                else {
                  t: {
                    ((e = t.type),
                      (n = t.memoizedProps),
                      (s = u.ownerDocument || u));
                    e: switch (e) {
                      case "title":
                        ((i = s.getElementsByTagName("title")[0]),
                          (!i ||
                            i[dl] ||
                            i[oe] ||
                            i.namespaceURI === "http://www.w3.org/2000/svg" ||
                            i.hasAttribute("itemprop")) &&
                            ((i = s.createElement(e)),
                            s.head.insertBefore(
                              i,
                              s.querySelector("head > title"),
                            )),
                          de(i, e, n),
                          (i[oe] = t),
                          ne(i),
                          (e = i));
                        break t;
                      case "link":
                        if (
                          (u = cg("link", "href", s).get(e + (n.href || "")))
                        ) {
                          for (h = 0; h < u.length; h++)
                            if (
                              ((i = u[h]),
                              i.getAttribute("href") ===
                                (n.href == null || n.href === ""
                                  ? null
                                  : n.href) &&
                                i.getAttribute("rel") ===
                                  (n.rel == null ? null : n.rel) &&
                                i.getAttribute("title") ===
                                  (n.title == null ? null : n.title) &&
                                i.getAttribute("crossorigin") ===
                                  (n.crossOrigin == null
                                    ? null
                                    : n.crossOrigin))
                            ) {
                              u.splice(h, 1);
                              break e;
                            }
                        }
                        ((i = s.createElement(e)),
                          de(i, e, n),
                          s.head.appendChild(i));
                        break;
                      case "meta":
                        if (
                          (u = cg("meta", "content", s).get(
                            e + (n.content || ""),
                          ))
                        ) {
                          for (h = 0; h < u.length; h++)
                            if (
                              ((i = u[h]),
                              i.getAttribute("content") ===
                                (n.content == null ? null : "" + n.content) &&
                                i.getAttribute("name") ===
                                  (n.name == null ? null : n.name) &&
                                i.getAttribute("property") ===
                                  (n.property == null ? null : n.property) &&
                                i.getAttribute("http-equiv") ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                i.getAttribute("charset") ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              u.splice(h, 1);
                              break e;
                            }
                        }
                        ((i = s.createElement(e)),
                          de(i, e, n),
                          s.head.appendChild(i));
                        break;
                      default:
                        throw Error(r(468, e));
                    }
                    ((i[oe] = t), ne(i), (e = i));
                  }
                  t.stateNode = e;
                }
              else ie || df(u, t.type, t.stateNode);
            else t.stateNode = ug(u, n, t.memoizedProps);
          else
            s !== n
              ? (s === null
                  ? ((e = i.stateNode),
                    e === null || Nt || e.parentNode.removeChild(e))
                  : s.count--,
                n === null
                  ? ie || df(u, t.type, t.stateNode)
                  : ug(u, n, t.memoizedProps))
              : n === null &&
                t.stateNode !== null &&
                yc(t, t.memoizedProps, i.memoizedProps);
        break;
      case 27:
        (xe(e, t, n),
          be(t),
          s & 512 && (Nt || i === null || fe(i, i.return)),
          i !== null && s & 4 && yc(t, t.memoizedProps, i.memoizedProps));
        break;
      case 5:
        if (
          ((u = bn),
          (bn = !1),
          xe(e, t, n),
          (bn = u),
          be(t),
          s & 512 && (Nt || i === null || fe(i, i.return)),
          t.flags & 32)
        ) {
          e = t.stateNode;
          try {
            (fi(e, ""), (Ct = !0));
          } catch (V) {
            Mt(t, t.return, V);
          }
        }
        (s & 4 &&
          t.stateNode != null &&
          ((e = t.memoizedProps), yc(t, e, i !== null ? i.memoizedProps : e)),
          s & 1024 && (Cc = !0));
        break;
      case 6:
        if ((xe(e, t, n), be(t), s & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          ((e = t.memoizedProps), (n = t.stateNode));
          try {
            ((n.nodeValue = e), (Ct = !0));
          } catch (V) {
            Mt(t, t.return, V);
          }
        }
        break;
      case 3:
        if (
          ((Ct = !1),
          (Xo = null),
          (u = ln),
          (ln = Fl(e.containerInfo)),
          xe(e, t, n),
          (ln = u),
          be(t),
          s & 4 && i !== null && i.memoizedState.isDehydrated)
        )
          try {
            Pi(e.containerInfo);
          } catch (V) {
            Mt(t, t.return, V);
          }
        (Cc && ((Cc = !1), iy(t)), (Ct = !1));
        break;
      case 4:
        ((s = bn),
          (bn = ie),
          (i = Ch()),
          (u = ln),
          (ln = Fl(t.stateNode.containerInfo)),
          xe(e, t, n),
          be(t),
          (ln = u),
          Ct && Yl && (No = !0),
          (Ct = i),
          (bn = s));
        break;
      case 12:
        (xe(e, t, n), be(t));
        break;
      case 31:
        (xe(e, t, n),
          be(t),
          s & 4 &&
            ((e = t.updateQueue),
            e !== null && ((t.updateQueue = null), Mo(t, e))));
        break;
      case 13:
        (xe(e, t, n),
          be(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (i !== null && i.memoizedState !== null) &&
            (zo = De()),
          s & 4 &&
            ((e = t.updateQueue),
            e !== null && ((t.updateQueue = null), Mo(t, e))));
        break;
      case 22:
        ((u = t.memoizedState !== null),
          (h = i !== null && i.memoizedState !== null));
        var x = ie,
          T = Nt,
          O = bn;
        ((ie = x || u),
          (bn = O || u),
          (Nt = T || h),
          xe(e, t, n),
          (Nt = T),
          (bn = O),
          (ie = x),
          be(t),
          s & 8192 &&
            ((e = t.stateNode),
            (e._visibility = u ? e._visibility & -2 : e._visibility | 1),
            !u ||
              i === null ||
              h ||
              ie ||
              Nt ||
              ((e = h || Nt),
              (n = ie),
              (i = Nt),
              (ie = u || ie),
              (Nt = e),
              ha(t, 2),
              (ie = n),
              (Nt = i)),
            (!u && bn) || wc(t, u)),
          s & 4 &&
            ((e = t.updateQueue),
            e !== null &&
              ((n = e.retryQueue),
              n !== null && ((e.retryQueue = null), Mo(t, n)))));
        break;
      case 19:
        (xe(e, t, n),
          be(t),
          s & 4 &&
            ((e = t.updateQueue),
            e !== null && ((t.updateQueue = null), Mo(t, e))));
        break;
      case 30:
        (s & 512 && (Nt || i === null || fe(i, i.return)),
          (s = Ch()),
          (u = Yl),
          (h = (n & 335544064) === n),
          (x = t.memoizedProps),
          (Yl = h && Bn(x.default, x.update) !== "none"),
          xe(e, t, n),
          be(t),
          h && i !== null && Ct && (t.flags |= 4),
          (Yl = u),
          (Ct = s));
        break;
      case 21:
        break;
      case 7:
        (s & 512 && (Nt || i === null || fe(i, i.return)),
          i && i.stateNode !== null && (i.stateNode._fragmentFiber = t));
      default:
        (xe(e, t, n), be(t));
    }
  }
  function be(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, i = t.return; i !== null;) {
          if (Gp(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        i = null;
        for (var s = t.return; s !== null;) {
          if (mc(s)) {
            var u = s.stateNode;
            i === null ? (i = [u]) : i.push(u);
          }
          if (hc(s)) break;
          s = s.return;
        }
        var h = i;
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var x = n.stateNode,
              T = gc(t);
            Eo(t, T, x, h);
            break;
          case 5:
            var O = n.stateNode;
            n.flags & 32 && (fi(O, ""), (n.flags &= -33));
            var V = gc(t);
            Eo(t, V, O, h);
            break;
          case 3:
          case 4:
            var H = n.stateNode.containerInfo,
              R = gc(t);
            vc(t, R, H, h);
            break;
          default:
            throw Error(r(161));
        }
      } catch (_) {
        Mt(t, t.return, _);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function iy(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null;) {
        var e = t;
        (iy(e),
          e.tag === 5 &&
            e.flags & 1024 &&
            ((e = e.stateNode), (Ki = !0), e.reset(), (Ki = !1)),
          (t = t.sibling));
      }
  }
  function Di(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null;) (ly(e, t), (e = e.sibling));
    else Fp(e);
  }
  function ly(t, e) {
    var n = t.alternate;
    if (n === null) xc(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (((Ac = Sn = !1), Zp(), Di(e, t), !Sn && !No)) {
            if (((t = vn), t !== null))
              for (var i = 0; i < t.length; i += 3) {
                n = t[i];
                var s = t[i + 1];
                (Qy(n, t[i + 2]),
                  (n = n.ownerDocument.documentElement),
                  n !== null &&
                    n.animate(
                      { opacity: [0, 0], pointerEvents: ["none", "none"] },
                      {
                        duration: 0,
                        fill: "forwards",
                        pseudoElement: "::view-transition-group(" + s + ")",
                      },
                    ));
              }
            ((t = e.containerInfo),
              (t =
                t.nodeType === 9
                  ? t.documentElement
                  : t.ownerDocument.documentElement),
              t !== null &&
                t.style.viewTransitionName === "" &&
                ((t.style.viewTransitionName = "none"),
                t.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(root)",
                  },
                ),
                t.animate(
                  { width: [0, 0], height: [0, 0] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition",
                  },
                )),
              (Ac = !0));
          }
          vn = null;
          break;
        case 5:
          Di(e, t);
          break;
        case 4:
          ((i = Sn), (Sn = !1), Di(e, t), Sn && (No = !0), (Sn = i));
          break;
        case 22:
          t.memoizedState === null &&
            (n.memoizedState !== null ? xc(t, !1) : Di(e, t));
          break;
        case 30:
          ((i = Sn), (s = Zp()), (Sn = !1), Di(e, t), Sn && (t.flags |= 4));
          var u = t.memoizedProps,
            h = t.stateNode;
          ((e = Un(u, h)), (h = Un(n.memoizedProps, h)));
          var x = Bn(u.default, u.update);
          (x === "none"
            ? (e = !1)
            : ((u = n.memoizedState),
              (n.memoizedState = null),
              (n = t.child),
              (Ae = 0),
              (e = Ec(t, n, e, h, x, u, !0)),
              Ae !== (u === null ? 0 : u.length) && (t.flags |= 32)),
            (t.flags & 4) !== 0 && e
              ? (Bi(t, t.memoizedProps.onUpdate), (vn = s))
              : s !== null && (s.push.apply(s, vn), (vn = s)),
            (Sn = (t.flags & 32) !== 0 ? !0 : i));
          break;
        default:
          Di(e, t);
      }
  }
  function Tn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null;) ($p(t, e.alternate, e), (e = e.sibling));
  }
  function ha(t, e) {
    for (t = t.child; t !== null;) {
      var n = t,
        i = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (da(4, n, n.return), ha(n, i));
          break;
        case 1:
          fe(n, n.return);
          var s = n.stateNode;
          (typeof s.componentWillUnmount == "function" && Yp(n, n.return, s),
            ha(n, i));
          break;
        case 27:
          (i & 2) !== 0 && ig(n.stateNode, n.type, n.memoizedProps);
        case 5:
          (fe(n, n.return), (n.tag !== 5 && n.tag !== 27) || Hl(n), ha(n, i));
          break;
        case 6:
          Hl(n);
          break;
        case 26:
          (fe(n, n.return),
            (s = n.stateNode),
            n.memoizedState !== null ||
              s === null ||
              Nt ||
              s.parentNode.removeChild(s),
            ha(n, i));
          break;
        case 22:
          n.memoizedState === null && ha(n, i);
          break;
        case 30:
          (fe(n, n.return), ha(n, i));
          break;
        case 7:
          fe(n, n.return);
        default:
          ha(n, i);
      }
      t = t.sibling;
    }
  }
  function sn(t, e, n) {
    for (
      n = (e.subtreeFlags & 8772) !== 0 ? n : n & -2, e = e.child;
      e !== null;
    ) {
      var i = e.alternate,
        s = t,
        u = e,
        h = u.flags,
        x = (n & 1) !== 0;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (sn(s, u, n), Ll(4, u));
          break;
        case 1:
          if (
            (sn(s, u, n),
            (i = u),
            (s = i.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (V) {
              Mt(i, i.return, V);
            }
          if (((i = u), (s = i.updateQueue), s !== null)) {
            var T = i.stateNode;
            try {
              var O = s.shared.hiddenCallbacks;
              if (O !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < O.length; s++)
                  Nm(O[s], T);
            } catch (V) {
              Mt(i, i.return, V);
            }
          }
          (x && h & 64 && Hp(u), gn(u, u.return));
          break;
        case 27:
          (n & 2) !== 0 && kp(u);
        case 5:
          ((u.tag !== 5 && u.tag !== 27) || qp(u),
            sn(s, u, n),
            x && i === null && h & 4 && pc(u),
            gn(u, u.return));
          break;
        case 6:
          qp(u);
          break;
        case 26:
          ((T = u.stateNode),
            u.memoizedState !== null ||
              T === null ||
              ie ||
              df(Fl(T.ownerDocument), u.type, T),
            sn(s, u, n),
            x && i === null && h & 4 && pc(u),
            gn(u, u.return));
          break;
        case 12:
          sn(s, u, n);
          break;
        case 31:
          (sn(s, u, n), x && h & 4 && ey(s, u));
          break;
        case 13:
          (sn(s, u, n), x && h & 4 && ny(s, u));
          break;
        case 22:
          (u.memoizedState === null && sn(s, u, n), gn(u, u.return));
          break;
        case 30:
          (sn(s, u, n), gn(u, u.return));
          break;
        case 7:
          gn(u, u.return);
        default:
          sn(s, u, n);
      }
      e = e.sibling;
    }
  }
  function Rc(t, e) {
    var n = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Al(n)));
  }
  function Mc(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Al(t)));
  }
  function Fe(t, e, n, i) {
    var s = (n & 335544064) === n;
    if (e.subtreeFlags & (s ? 10262 : 10256))
      for (e = e.child; e !== null;) (sy(t, e, n, i), (e = e.sibling));
    else s && Pp(e);
  }
  function sy(t, e, n, i) {
    var s = (n & 335544064) === n;
    s &&
      e.alternate === null &&
      e.return !== null &&
      e.return.alternate !== null &&
      wo(e);
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Fe(t, e, n, i), u & 2048 && Ll(9, e));
        break;
      case 1:
        Fe(t, e, n, i);
        break;
      case 3:
        (Fe(t, e, n, i),
          s &&
            Ac &&
            ((t = t.containerInfo),
            (t =
              t.nodeType === 9
                ? t.body
                : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t),
            t.style.viewTransitionName === "root" &&
              (t.style.viewTransitionName = ""),
            (t = t.ownerDocument.documentElement),
            t !== null &&
              t.style.viewTransitionName === "none" &&
              (t.style.viewTransitionName = "")),
          u & 2048 &&
            ((u = null),
            e.alternate !== null && (u = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== u && (e.refCount++, u != null && Al(u))));
        break;
      case 12:
        if (u & 2048) {
          (Fe(t, e, n, i), (u = e.stateNode));
          try {
            var h = e.memoizedProps,
              x = h.id,
              T = h.onPostCommit;
            typeof T == "function" &&
              T(
                x,
                e.alternate === null ? "mount" : "update",
                u.passiveEffectDuration,
                -0,
              );
          } catch (O) {
            Mt(e, e.return, O);
          }
        } else Fe(t, e, n, i);
        break;
      case 31:
        Fe(t, e, n, i);
        break;
      case 13:
        Fe(t, e, n, i);
        break;
      case 23:
        break;
      case 22:
        ((h = e.stateNode),
          (x = e.alternate),
          e.memoizedState !== null
            ? (s && x !== null && x.memoizedState === null && wo(x),
              h._visibility & 2 ? Fe(t, e, n, i) : ql(t, e))
            : (s && x !== null && x.memoizedState !== null && wo(e),
              h._visibility & 2
                ? Fe(t, e, n, i)
                : ((h._visibility |= 2),
                  Oi(t, e, n, i, (e.subtreeFlags & 10256) !== 0 || !1))),
          u & 2048 && Rc(x, e));
        break;
      case 24:
        (Fe(t, e, n, i), u & 2048 && Mc(e.alternate, e));
        break;
      case 30:
        (s &&
          ((u = e.alternate), u !== null && (xn(u.child, !0), xn(e.child, !0))),
          Fe(t, e, n, i));
        break;
      default:
        Fe(t, e, n, i);
    }
  }
  function Oi(t, e, n, i, s) {
    for (
      s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var u = t,
        h = e,
        x = n,
        T = i,
        O = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          (Oi(u, h, x, T, s), Ll(8, h));
          break;
        case 23:
          break;
        case 22:
          var V = h.stateNode;
          (h.memoizedState !== null
            ? V._visibility & 2
              ? Oi(u, h, x, T, s)
              : ql(u, h)
            : ((V._visibility |= 2), Oi(u, h, x, T, s)),
            s && O & 2048 && Rc(h.alternate, h));
          break;
        case 24:
          (Oi(u, h, x, T, s), s && O & 2048 && Mc(h.alternate, h));
          break;
        default:
          Oi(u, h, x, T, s);
      }
      e = e.sibling;
    }
  }
  function ql(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) {
        var n = t,
          i = e,
          s = i.flags;
        switch (i.tag) {
          case 22:
            (ql(n, i), s & 2048 && Rc(i.alternate, i));
            break;
          case 24:
            (ql(n, i), s & 2048 && Mc(i.alternate, i));
            break;
          default:
            ql(n, i);
        }
        e = e.sibling;
      }
  }
  var Pa = 8192;
  function Fa(t, e, n) {
    if (t.subtreeFlags & Pa)
      for (t = t.child; t !== null;) (oy(t, e, n), (t = t.sibling));
  }
  function oy(t, e, n) {
    switch (t.tag) {
      case 26:
        (Fa(t, e, n),
          t.flags & Pa &&
            (t.memoizedState !== null
              ? o2(n, ln, t.memoizedState, t.memoizedProps)
              : ((t = t.stateNode), (e & 335544128) === e && mg(n, t))));
        break;
      case 5:
        (Fa(t, e, n),
          t.flags & Pa &&
            ((t = t.stateNode), (e & 335544128) === e && mg(n, t)));
        break;
      case 3:
      case 4:
        var i = ln;
        ((ln = Fl(t.stateNode.containerInfo)), Fa(t, e, n), (ln = i));
        break;
      case 22:
        t.memoizedState === null &&
          ((i = t.alternate),
          i !== null && i.memoizedState !== null
            ? ((i = Pa), (Pa = 16777216), Fa(t, e, n), (Pa = i))
            : Fa(t, e, n));
        break;
      case 30:
        if (
          (t.flags & Pa) !== 0 &&
          ((i = t.memoizedProps.name), i != null && i !== "auto")
        ) {
          var s = t.stateNode;
          ((s.paired = null), Ue === null && (Ue = new Map()), Ue.set(i, s));
        }
        Fa(t, e, n);
        break;
      default:
        Fa(t, e, n);
    }
  }
  function ry(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function Gl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((le = i), cy(i, t));
        }
      ry(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) (uy(t), (t = t.sibling));
  }
  function uy(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Gl(t), t.flags & 2048 && da(9, t, t.return));
        break;
      case 3:
        Gl(t);
        break;
      case 12:
        Gl(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Do(t))
          : Gl(t);
        break;
      default:
        Gl(t);
    }
  }
  function Do(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((le = i), cy(i, t));
        }
      ry(t);
    }
    for (t = t.child; t !== null;) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (da(8, e, e.return), Do(e));
          break;
        case 22:
          ((n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Do(e)));
          break;
        default:
          Do(e);
      }
      t = t.sibling;
    }
  }
  function cy(t, e) {
    for (; le !== null;) {
      var n = le;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          da(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Al(n.memoizedState.cache);
      }
      if (((i = n.child), i !== null)) ((i.return = n), (le = i));
      else
        t: for (n = t; le !== null;) {
          i = le;
          var s = i.sibling,
            u = i.return;
          if ((Ip(i), i === n)) {
            le = null;
            break t;
          }
          if (s !== null) {
            ((s.return = u), (le = s));
            break t;
          }
          le = u;
        }
    }
  }
  var nS = {
      getCacheForType: function (t) {
        var e = re(Kt),
          n = e.data.get(t);
        return (n === void 0 && ((n = t()), e.data.set(t, n)), n);
      },
      cacheSignal: function () {
        return re(Kt).controller.signal;
      },
    },
    aS = typeof WeakMap == "function" ? WeakMap : Map,
    wt = 0,
    zt = null,
    yt = null,
    vt = 0,
    Rt = 0,
    Be = null,
    ma = !1,
    zi = !1,
    Dc = !1,
    Qn = 0,
    Gt = 0,
    pa = 0,
    Ja = 0,
    Oo = 0,
    Le = 0,
    ji = 0,
    kl = null,
    Ne = null,
    Oc = !1,
    zo = 0,
    fy = 0,
    jo = 1 / 0,
    _o = null,
    ya = null,
    Yt = 0,
    on = null,
    $a = null,
    En = 0,
    zc = 0,
    jc = null,
    dy = null,
    _i = null,
    Vi = null,
    Ui = null,
    Xl = 0,
    Vo = null;
  function He() {
    return (wt & 2) !== 0 && vt !== 0 ? vt & -vt : I.T !== null ? kc() : ph();
  }
  function hy() {
    if (Le === 0)
      if ((vt & 536870912) === 0 || ht) {
        var t = Rs;
        ((Rs <<= 1), (Rs & 3932160) === 0 && (Rs = 262144), (Le = t));
      } else Le = 536870912;
    return ((t = ue.current), t !== null && (t.flags |= 32), Le);
  }
  function Bi(t, e) {
    if (e != null) {
      var n = t.stateNode,
        i = n.ref;
      (i === null && (i = n.ref = Ky(Un(t.memoizedProps, n))),
        Vi === null && (Vi = []),
        Vi.push(e.bind(null, i)));
    }
  }
  function Re(t, e, n) {
    (((t === zt && (Rt === 2 || Rt === 9)) || t.cancelPendingCommit !== null) &&
      (Li(t, 0), ga(t, vt, Le, !1)),
      fl(t, n),
      ((wt & 2) === 0 || t !== zt) &&
        (t === zt &&
          ((wt & 2) === 0 && (Ja |= n), Gt === 4 && ga(t, vt, Le, !1)),
        Cn(t)));
  }
  function my(t, e, n) {
    if ((wt & 6) !== 0) throw Error(r(327));
    var i = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || cl(t, e),
      s = i ? sS(t, e) : Vc(t, e, !0),
      u = i;
    do {
      if (s === 0) {
        zi && !i && ga(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), u && !iS(n))) {
          ((s = Vc(t, e, !1)), (u = !1));
          continue;
        }
        if (s === 2) {
          if (((u = e), t.errorRecoveryDisabledLanes & u)) var h = 0;
          else
            ((h = t.pendingLanes & -536870913),
              (h = h !== 0 ? h : h & 536870912 ? 536870912 : 0));
          if (h !== 0) {
            e = h;
            t: {
              var x = t;
              s = kl;
              var T = x.current.memoizedState.isDehydrated;
              if (
                (T && (Li(x, h).flags |= 256),
                (h = Vc(x, h, !1)),
                h !== 2 && h !== 6)
              ) {
                if (Dc && !T) {
                  ((x.errorRecoveryDisabledLanes |= u), (Ja |= u), (s = 4));
                  break t;
                }
                ((u = Ne),
                  (Ne = s),
                  u !== null &&
                    (Ne === null ? (Ne = u) : Ne.push.apply(Ne, u)));
              }
              s = h;
            }
            if (((u = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          (Li(t, 0), ga(t, e, 0, !0));
          break;
        }
        t: {
          switch (((i = t), (u = s), u)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e && (e & 62914560) !== e) break;
            case 6:
              ga(i, e, Le, !ma);
              break t;
            case 2:
              Ne = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && ((s = zo + 300 - De()), 10 < s)) {
            if ((ga(i, e, Le, !ma), Ds(i, 0, !0) !== 0)) break t;
            ((En = e),
              (i.timeoutHandle = tf(
                py.bind(
                  null,
                  i,
                  n,
                  Ne,
                  _o,
                  Oc,
                  e,
                  Le,
                  Ja,
                  ji,
                  ma,
                  u,
                  "Throttled",
                  -0,
                  0,
                ),
                s,
              )));
            break t;
          }
          py(i, n, Ne, _o, Oc, e, Le, Ja, ji, ma, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Cn(t);
  }
  function py(t, e, n, i, s, u, h, x, T, O, V, H, R, _) {
    t.timeoutHandle = -1;
    var Z = e.subtreeFlags,
      $ = (u & 335544064) === u;
    if (
      ((H = null),
      ($ || Z & 8192 || (Z & 16785408) === 16785408) &&
        ((H = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: mn,
        }),
        (Ue = null),
        oy(e, u, H),
        $ &&
          ((Z = H),
          ($ = t.containerInfo),
          ($ = ($.nodeType === 9 ? $ : $.ownerDocument).__reactViewTransition),
          $ != null &&
            (Z.count++,
            (Z.waitingForViewTransition = !0),
            (Z = Wl.bind(Z)),
            $.finished.then(Z, Z))),
        (Z =
          (u & 62914560) === u
            ? zo - De()
            : (u & 4194048) === u
              ? fy - De()
              : 0),
        (Z = r2(H, Z)),
        Z !== null))
    ) {
      ((En = u),
        (t.cancelPendingCommit = Z(
          Ey.bind(null, t, e, u, n, i, s, h, x, T, O, V, H, null, R, _),
        )),
        ga(t, u, h, !O));
      return;
    }
    Ey(t, e, u, n, i, s, h, x, T, O, V, H);
  }
  function iS(t) {
    for (var e = t; ;) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var i = 0; i < n.length; i++) {
          var s = n[i],
            u = s.getSnapshot;
          s = s.value;
          try {
            if (!_e(u(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        ((n.return = e), (e = n));
      else {
        if (e === t) break;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function ga(t, e, n, i) {
    ((e = ch(t, e)),
      (e &= ~Oo),
      (e &= ~Ja),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      i && (t.warmLanes |= e),
      (i = t.expirationTimes));
    for (var s = e; 0 < s;) {
      var u = 31 - ze(s),
        h = 1 << u;
      ((i[u] = -1), (s &= ~h));
    }
    n !== 0 && dh(t, n, e);
  }
  function Uo() {
    return (wt & 6) === 0 ? (Zl(0), !1) : !0;
  }
  function _c() {
    if (yt !== null) {
      if (Rt === 0) var t = yt.return;
      else ((t = yt), (Yn = La = null), Gu(t), (Ci = null), (Rl = 0), (t = yt));
      for (; t !== null;) (Lp(t.alternate, t), (t = t.return));
      yt = null;
    }
  }
  function Li(t, e) {
    var n = t.timeoutHandle;
    return (
      n !== -1 && ((t.timeoutHandle = -1), RS(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (En = 0),
      _c(),
      (zt = t),
      (yt = n = Ln(t.current, null)),
      (vt = e),
      (Rt = 0),
      (Be = null),
      (ma = !1),
      (zi = cl(t, e)),
      (Dc = !1),
      (ji = Le = Oo = Ja = pa = Gt = 0),
      (Ne = kl = null),
      (Oc = !1),
      (Qn = ch(t, e)),
      ks(),
      n
    );
  }
  function yy(t, e) {
    ((ut = null),
      (I.H = po),
      e === Ei || e === to
        ? ((e = Em()), (Rt = 3))
        : e === Mu
          ? ((e = Em()), (Rt = 4))
          : (Rt =
              e === ac
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (Be = e),
      yt === null && ((Gt = 1), yo(t, Ze(e, t.current))));
  }
  function gy() {
    var t = ue.current;
    return t === null
      ? !0
      : (vt & 4194048) === vt
        ? pe === null
        : (vt & 62914560) === vt || (vt & 536870912) !== 0
          ? t === pe
          : !1;
  }
  function vy() {
    var t = I.H;
    return ((I.H = po), t === null ? po : t);
  }
  function xy() {
    var t = I.A;
    return ((I.A = nS), t);
  }
  function Bo() {
    ((Gt = 4),
      ma || ((vt & 4194048) !== vt && ue.current !== null) || (zi = !0),
      ((pa & 134217727) === 0 && (Ja & 134217727) === 0) ||
        zt === null ||
        ga(zt, vt, Le, !1));
  }
  function Vc(t, e, n) {
    var i = wt;
    wt |= 2;
    var s = vy(),
      u = xy();
    ((zt !== t || vt !== e) && ((_o = null), Li(t, e)), (e = !1));
    var h = Gt;
    t: do
      try {
        if (Rt !== 0 && yt !== null) {
          var x = yt,
            T = Be;
          switch (Rt) {
            case 8:
              (_c(), (h = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ue.current === null && (e = !0);
              var O = Rt;
              if (((Rt = 0), (Be = null), Hi(t, x, T, O), n && zi)) {
                h = 0;
                break t;
              }
              break;
            default:
              ((O = Rt), (Rt = 0), (Be = null), Hi(t, x, T, O));
          }
        }
        (lS(), (h = Gt));
        break;
      } catch (V) {
        yy(t, V);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Yn = La = null),
      (wt = i),
      (I.H = s),
      (I.A = u),
      yt === null && ((zt = null), (vt = 0), ks()),
      h
    );
  }
  function lS() {
    for (; yt !== null;) by(yt);
  }
  function sS(t, e) {
    var n = wt;
    wt |= 2;
    var i = vy(),
      s = xy();
    zt !== t || vt !== e
      ? ((_o = null), (jo = De() + 500), Li(t, e))
      : (zi = cl(t, e));
    t: do
      try {
        if (Rt !== 0 && yt !== null) {
          e = yt;
          var u = Be;
          e: switch (Rt) {
            case 1:
              ((Rt = 0), (Be = null), Hi(t, e, u, 1));
              break;
            case 2:
            case 9:
              if (Sm(u)) {
                ((Rt = 0), (Be = null), Sy(e));
                break;
              }
              ((e = function () {
                ((Rt !== 2 && Rt !== 9) || zt !== t || (Rt = 7), Cn(t));
              }),
                u.then(e, e));
              break t;
            case 3:
              Rt = 7;
              break t;
            case 4:
              Rt = 5;
              break t;
            case 7:
              Sm(u)
                ? ((Rt = 0), (Be = null), Sy(e))
                : ((Rt = 0), (Be = null), Hi(t, e, u, 7));
              break;
            case 5:
              var h = null;
              switch (yt.tag) {
                case 26:
                  h = yt.memoizedState;
                case 5:
                case 27:
                  var x = yt;
                  if (h ? dg(h) : x.stateNode.complete) {
                    ((Rt = 0), (Be = null));
                    var T = x.sibling;
                    if (T !== null) yt = T;
                    else {
                      var O = x.return;
                      O !== null ? ((yt = O), Lo(O)) : (yt = null);
                    }
                    break e;
                  }
              }
              ((Rt = 0), (Be = null), Hi(t, e, u, 5));
              break;
            case 6:
              ((Rt = 0), (Be = null), Hi(t, e, u, 6));
              break;
            case 8:
              (_c(), (Gt = 6));
              break t;
            default:
              throw Error(r(462));
          }
        }
        oS();
        break;
      } catch (V) {
        yy(t, V);
      }
    while (!0);
    return (
      (Yn = La = null),
      (I.H = i),
      (I.A = s),
      (wt = n),
      yt !== null ? 0 : ((zt = null), (vt = 0), ks(), Gt)
    );
  }
  function oS() {
    for (; yt !== null && !Cx();) by(yt);
  }
  function by(t) {
    var e = Up(t.alternate, t, Qn);
    ((t.memoizedProps = t.pendingProps), e === null ? Lo(t) : (yt = e));
  }
  function Sy(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Mp(n, e, e.pendingProps, e.type, void 0, vt);
        break;
      case 11:
        e = Mp(n, e, e.pendingProps, e.type.render, e.ref, vt);
        break;
      case 5:
        Gu(e);
        var i = e;
        i === ae &&
          (ht
            ? (Fs(i), i.tag === 5 && i.stateNode != null && (Ut = i.stateNode))
            : (Fs(i), (ht = !0)));
      default:
        (Lp(n, e), (e = yt = cm(e, Qn)), (e = Up(n, e, Qn)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Lo(t) : (yt = e));
  }
  function Hi(t, e, n, i) {
    ((Yn = La = null), Gu(e), (Ci = null), (Rl = 0));
    var s = e.return;
    try {
      if (Pb(t, s, e, n, vt)) {
        ((Gt = 1), yo(t, Ze(n, t.current)), (yt = null));
        return;
      }
    } catch (u) {
      if (s !== null) throw ((yt = s), u);
      ((Gt = 1), yo(t, Ze(n, t.current)), (yt = null));
      return;
    }
    e.flags & 32768
      ? (ht || i === 1
          ? (t = !0)
          : zi || (vt & 536870912) !== 0
            ? (t = !1)
            : ((ma = t = !0),
              (i === 2 || i === 9 || i === 3 || i === 6) &&
                ((i = ue.current),
                i !== null && i.tag === 13 && (i.flags |= 16384))),
        Ty(e, t))
      : Lo(e);
  }
  function Lo(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Ty(e, ma);
        return;
      }
      t = e.return;
      var n = Wb(e.alternate, e, Qn);
      if (n !== null) {
        yt = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        yt = e;
        return;
      }
      yt = e = t;
    } while (e !== null);
    Gt === 0 && (Gt = 5);
  }
  function Ty(t, e) {
    do {
      var n = Ib(t.alternate, t);
      if (n !== null) {
        ((n.flags &= 32767), (yt = n));
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        yt = t;
        return;
      }
      yt = t = n;
    } while (t !== null);
    ((Gt = 6), (yt = null));
  }
  function Ey(t, e, n, i, s, u, h, x, T, O, V, H) {
    t.cancelPendingCommit = null;
    do Ho();
    while (Yt !== 0);
    if ((wt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      (t === zt && ((yt = zt = null), (vt = 0)),
        ($a = e),
        (on = t),
        (En = n),
        (jc = s),
        (dy = i),
        rS(t, e, n, h, x, T, H));
    }
  }
  function rS(t, e, n, i, s, u, h) {
    var x = e.lanes | e.childLanes;
    if (
      ((zc = x),
      (x |= yu),
      _x(t, n, x, i, s, u),
      (Vi = null),
      (n & 335544064) === n
        ? ((Ui = Ub(t)), (i = 10262))
        : ((Ui = null), (i = 10256)),
      (e.subtreeFlags & i) !== 0 || (e.flags & i) !== 0
        ? ((t.callbackNode = null),
          (t.callbackPriority = 0),
          mS(ws, function () {
            return (Hc(), null);
          }))
        : ((t.callbackNode = null), (t.callbackPriority = 0)),
      (Co = !1),
      (i = (e.flags & 13878) !== 0),
      (e.subtreeFlags & 13878) !== 0 || i)
    ) {
      ((i = I.T), (I.T = null), (s = ot.p), (ot.p = 2), (u = wt), (wt |= 4));
      try {
        tS(t, e, n);
      } finally {
        ((wt = u), (ot.p = s), (I.T = i));
      }
    }
    ((Yt = 1),
      Co
        ? (_i = _S(h, t.containerInfo, Ui, Uc, Bc, cS, Lc, Hc, uS))
        : (Uc(), Bc(), Lc()));
  }
  function uS(t) {
    if (Yt !== 0) {
      var e = on.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function cS() {
    Yt === 3 && ((Yt = 0), ly($a, on), (Yt = 4));
  }
  function Uc() {
    if (Yt === 1) {
      Yt = 0;
      var t = on,
        e = $a,
        n = En,
        i = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || i) {
        ((i = I.T), (I.T = null));
        var s = ot.p;
        ot.p = 2;
        var u = wt;
        wt |= 4;
        try {
          ((Yl = No = !1), ay(e, t, n), (n = $c));
          var h = tm(t.containerInfo),
            x = n.focusedElem,
            T = n.selectionRange;
          if (
            h !== x &&
            x &&
            x.ownerDocument &&
            Ih(x.ownerDocument.documentElement, x)
          ) {
            if (T !== null && fu(x)) {
              var O = T.start,
                V = T.end;
              if ((V === void 0 && (V = O), "selectionStart" in x))
                ((x.selectionStart = O),
                  (x.selectionEnd = Math.min(V, x.value.length)));
              else {
                var H = x.ownerDocument || document,
                  R = (H && H.defaultView) || window;
                if (R.getSelection) {
                  var _ = R.getSelection(),
                    Z = x.textContent.length,
                    $ = Math.min(T.start, Z),
                    ct = T.end === void 0 ? $ : Math.min(T.end, Z);
                  !_.extend && $ > ct && ((h = ct), (ct = $), ($ = h));
                  var D = Wh(x, $),
                    C = Wh(x, ct);
                  if (
                    D &&
                    C &&
                    (_.rangeCount !== 1 ||
                      _.anchorNode !== D.node ||
                      _.anchorOffset !== D.offset ||
                      _.focusNode !== C.node ||
                      _.focusOffset !== C.offset)
                  ) {
                    var j = H.createRange();
                    (j.setStart(D.node, D.offset),
                      _.removeAllRanges(),
                      $ > ct
                        ? (_.addRange(j), _.extend(C.node, C.offset))
                        : (j.setEnd(C.node, C.offset), _.addRange(j)));
                  }
                }
              }
            }
            for (H = [], _ = x; (_ = _.parentNode);)
              _.nodeType === 1 &&
                H.push({ element: _, left: _.scrollLeft, top: _.scrollTop });
            for (
              typeof x.focus == "function" && x.focus(), x = 0;
              x < H.length;
              x++
            ) {
              var L = H[x];
              ((L.element.scrollLeft = L.left), (L.element.scrollTop = L.top));
            }
          }
          ((Ki = !!Jc), ($c = Jc = null));
        } finally {
          ((wt = u), (ot.p = s), (I.T = i));
        }
      }
      ((t.current = e), (Yt = 2));
    }
  }
  function Bc() {
    if (Yt === 2) {
      Yt = 0;
      var t = on,
        e = $a,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        ((n = I.T), (I.T = null));
        var i = ot.p;
        ot.p = 2;
        var s = wt;
        wt |= 4;
        try {
          $p(t, e.alternate, e);
        } finally {
          ((wt = s), (ot.p = i), (I.T = n));
        }
      }
      Yt = 3;
    }
  }
  function Lc() {
    if (Yt === 4 || Yt === 3) {
      Yt = 0;
      var t = _i;
      ((_i = null), Ax());
      var e = on,
        n = $a,
        i = En,
        s = dy,
        u = (i & 335544064) === i ? 10262 : 10256;
      if (
        ((n.subtreeFlags & u) !== 0 || (n.flags & u) !== 0
          ? (Yt = 5)
          : ((Yt = 0), ($a = on = null), Cy(e, e.pendingLanes)),
        (u = e.pendingLanes),
        u === 0 && (ya = null),
        Kr(i),
        (n = n.stateNode),
        Oe && typeof Oe.onCommitFiberRoot == "function")
      )
        try {
          Oe.onCommitFiberRoot(ul, n, void 0, (n.current.flags & 128) === 128);
        } catch {}
      if (s !== null) {
        ((n = I.T), (u = ot.p), (ot.p = 2), (I.T = null));
        try {
          for (var h = e.onRecoverableError, x = 0; x < s.length; x++) {
            var T = s[x];
            h(T.value, { componentStack: T.stack });
          }
        } finally {
          ((I.T = n), (ot.p = u));
        }
      }
      if (
        ((s = Vi),
        (h = Ui),
        (Ui = null),
        s !== null && ((Vi = null), h === null && (h = []), t !== null))
      )
        for (T = 0; T < s.length; T++)
          ((n = (0, s[T])(h)), n !== void 0 && t.finished.finally(n));
      ((En & 3) !== 0 && Ho(),
        Cn(e),
        (u = e.pendingLanes),
        (i & 261930) !== 0 && (u & 42) !== 0
          ? e === Vo
            ? Xl++
            : ((Xl = 0), (Vo = e))
          : ((Xl = 0), (Vo = null)),
        Zl(0));
    }
  }
  function Cy(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Al(e)));
  }
  function Ho() {
    return (
      _i !== null && (_i.skipTransition(), (_i = null)),
      Uc(),
      Bc(),
      Lc(),
      Hc()
    );
  }
  function Hc() {
    if (Yt !== 5) return !1;
    var t = on,
      e = zc;
    zc = 0;
    var n = Kr(En),
      i = I.T,
      s = ot.p;
    try {
      ((ot.p = 32 > n ? 32 : n), (I.T = null), (n = jc), (jc = null));
      var u = on,
        h = En;
      if (((Yt = 0), ($a = on = null), (En = 0), (wt & 6) !== 0))
        throw Error(r(331));
      var x = wt;
      if (
        ((wt |= 4),
        uy(u.current),
        sy(u, u.current, h, n),
        (wt = x),
        Zl(0, !1),
        Oe && typeof Oe.onPostCommitFiberRoot == "function")
      )
        try {
          Oe.onPostCommitFiberRoot(ul, u);
        } catch {}
      return !0;
    } finally {
      ((ot.p = s), (I.T = i), Cy(t, e));
    }
  }
  function Ay(t, e, n) {
    ((e = Ze(n, e)),
      (e = nc(t.stateNode, e, 2)),
      (t = ra(t, e, 2)),
      t !== null && (fl(t, 2), Cn(t)));
  }
  function Mt(t, e, n) {
    if (t.tag === 3) Ay(t, t, n);
    else
      for (; e !== null;) {
        if (e.tag === 3) {
          Ay(e, t, n);
          break;
        } else if (e.tag === 1) {
          var i = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (ya === null || !ya.has(i)))
          ) {
            ((t = Ze(n, t)),
              (n = Sp(2)),
              (i = ra(e, n, 2)),
              i !== null && (Tp(n, i, e, t), fl(i, 2), Cn(i)));
            break;
          }
        }
        e = e.return;
      }
  }
  function Yc(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new aS();
      var s = new Set();
      i.set(e, s);
    } else ((s = i.get(e)), s === void 0 && ((s = new Set()), i.set(e, s)));
    s.has(n) ||
      ((Dc = !0), s.add(n), (t = fS.bind(null, t, e, n)), e.then(t, t));
  }
  function fS(t, e, n) {
    var i = t.pingCache;
    (i !== null && i.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      zt === t &&
        (vt & n) === n &&
        ((Gt === 4 ||
          (Gt === 3 && (vt & 62914560) === vt && 300 > De() - zo)) &&
        (wt & 2) === 0
          ? Li(t, 0)
          : (Oo |= n),
        ji === vt && (ji = 0)),
      Cn(t));
  }
  function wy(t, e) {
    (e === 0 && (e = fh()), (t = Va(t, e)), t !== null && (fl(t, e), Cn(t)));
  }
  function dS(t) {
    var e = t.memoizedState,
      n = 0;
    (e !== null && (n = e.retryLane), wy(t, n));
  }
  function hS(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var i = t.stateNode,
          s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        i = t.stateNode;
        break;
      case 22:
        i = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    (i !== null && i.delete(e), wy(t, n));
  }
  function mS(t, e) {
    return kr(t, e);
  }
  var Yi = null,
    qi = null,
    qc = !1,
    Yo = !1,
    Gc = !1,
    va = 0;
  function Cn(t) {
    (t !== qi &&
      t.next === null &&
      (qi === null ? (Yi = qi = t) : (qi = qi.next = t)),
      (Yo = !0),
      qc || ((qc = !0), yS()));
  }
  function Zl(t, e) {
    if (!Gc && Yo) {
      Gc = !0;
      do
        for (var n = !1, i = Yi; i !== null;) {
          if (t !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var u = 0;
            else {
              var h = i.suspendedLanes,
                x = i.pingedLanes;
              ((u = (1 << (31 - ze(42 | t) + 1)) - 1),
                (u &= s & ~(h & ~x)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((n = !0), Dy(i, u));
          } else
            ((u = vt),
              (u = Ds(
                i,
                i === zt ? u : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || cl(i, u) || ((n = !0), Dy(i, u)));
          i = i.next;
        }
      while (n);
      Gc = !1;
    }
  }
  function pS() {
    Ny();
  }
  function Ny() {
    Yo = qc = !1;
    var t = 0;
    va !== 0 && NS() && (t = va);
    for (var e = De(), n = null, i = Yi; i !== null;) {
      var s = i.next,
        u = Ry(i, e);
      (u === 0
        ? ((i.next = null),
          n === null ? (Yi = s) : (n.next = s),
          s === null && (qi = n))
        : ((n = i), (t !== 0 || (u & 3) !== 0) && (Yo = !0)),
        (i = s));
    }
    ((Yt !== 0 && Yt !== 5) || Zl(t), va !== 0 && (va = 0));
  }
  function Ry(t, e) {
    for (
      var n = t.suspendedLanes,
        i = t.pingedLanes,
        s = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;
    ) {
      var h = 31 - ze(u),
        x = 1 << h,
        T = s[h];
      (T === -1
        ? ((x & n) === 0 || (x & i) !== 0) && (s[h] = jx(x, e))
        : T <= e && (t.expiredLanes |= x),
        (u &= ~x));
    }
    if (
      ((e = zt),
      (n = vt),
      (n = Ds(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (i = t.callbackNode),
      n === 0 ||
        (t === e && (Rt === 2 || Rt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        i !== null && i !== null && Xr(i),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || cl(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((i !== null && Xr(i), Kr(n))) {
        case 2:
        case 8:
          n = rh;
          break;
        case 32:
          n = ws;
          break;
        case 268435456:
          n = uh;
          break;
        default:
          n = ws;
      }
      return (
        (i = My.bind(null, t)),
        (n = kr(n, i)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      i !== null && i !== null && Xr(i),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function My(t, e) {
    if (Yt !== 0 && Yt !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var n = t.callbackNode;
    if (Ho() && t.callbackNode !== n) return null;
    var i = vt;
    return (
      (i = Ds(
        t,
        t === zt ? i : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      i === 0
        ? null
        : (my(t, i, e),
          Ry(t, De()),
          t.callbackNode != null && t.callbackNode === n
            ? My.bind(null, t)
            : null)
    );
  }
  function Dy(t, e) {
    if (Ho()) return null;
    my(t, e, !0);
  }
  function yS() {
    MS(function () {
      (wt & 6) !== 0 ? kr(oh, pS) : Ny();
    });
  }
  function kc() {
    if (va === 0) {
      var t = qa;
      (t === 0 && ((t = Ns), (Ns <<= 1), (Ns & 261888) === 0 && (Ns = 256)),
        (va = t));
    }
    return va;
  }
  function Oy(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Vs(t);
  }
  function gS(t, e, n, i, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var u = Oy((s[Ee] || null).action),
        h = i.submitter;
      h &&
        ((e = (e = h[Ee] || null)
          ? Oy(e.formAction)
          : h.getAttribute("formAction")),
        e !== null && ((u = e), (h = null)));
      var x = new Hs("action", "action", null, i, s);
      t.push({
        event: x,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (va !== 0) {
                  var T = new FormData(s, h);
                  $u(
                    n,
                    { pending: !0, data: T, method: s.method, action: u },
                    null,
                    T,
                  );
                }
              } else
                typeof u == "function" &&
                  (x.preventDefault(),
                  (T = new FormData(s, h)),
                  $u(
                    n,
                    { pending: !0, data: T, method: s.method, action: u },
                    u,
                    T,
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var Xc = 0; Xc < pu.length; Xc++) {
    var Zc = pu[Xc],
      vS = Zc.toLowerCase(),
      xS = Zc[0].toUpperCase() + Zc.slice(1);
    nn(vS, "on" + xS);
  }
  (nn(am, "onAnimationEnd"),
    nn(im, "onAnimationIteration"),
    nn(lm, "onAnimationStart"),
    nn("dblclick", "onDoubleClick"),
    nn("focusin", "onFocus"),
    nn("focusout", "onBlur"),
    nn(Rb, "onTransitionRun"),
    nn(Mb, "onTransitionStart"),
    nn(Db, "onTransitionCancel"),
    nn(sm, "onTransitionEnd"),
    ui("onMouseEnter", ["mouseout", "mouseover"]),
    ui("onMouseLeave", ["mouseout", "mouseover"]),
    ui("onPointerEnter", ["pointerout", "pointerover"]),
    ui("onPointerLeave", ["pointerout", "pointerover"]),
    za(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    za(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    za("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    za(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    za(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    za(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Ql =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    bS = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Ql),
    );
  function zy(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var i = t[n],
        s = i.event;
      i = i.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var h = i.length - 1; 0 <= h; h--) {
            var x = i[h],
              T = x.instance,
              O = x.currentTarget;
            if (((x = x.listener), T !== u && s.isPropagationStopped()))
              break t;
            ((u = x), (s.currentTarget = O));
            try {
              u(s);
            } catch (V) {
              Gs(V);
            }
            ((s.currentTarget = null), (u = T));
          }
        else
          for (h = 0; h < i.length; h++) {
            if (
              ((x = i[h]),
              (T = x.instance),
              (O = x.currentTarget),
              (x = x.listener),
              T !== u && s.isPropagationStopped())
            )
              break t;
            ((u = x), (s.currentTarget = O));
            try {
              u(s);
            } catch (V) {
              Gs(V);
            }
            ((s.currentTarget = null), (u = T));
          }
      }
    }
  }
  function gt(t, e) {
    var n = e[gh];
    n === void 0 && (n = e[gh] = new Set());
    var i = t + "__bubble";
    n.has(i) || (jy(e, t, 2, !1), n.add(i));
  }
  function Qc(t, e, n) {
    var i = 0;
    (e && (i |= 4), jy(n, t, i, e));
  }
  var qo = "_reactListening" + Math.random().toString(36).slice(2);
  function Kc(t) {
    if (!t[qo]) {
      ((t[qo] = !0),
        bh.forEach(function (n) {
          n !== "selectionchange" && (bS.has(n) || Qc(n, !1, t), Qc(n, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[qo] || ((e[qo] = !0), Qc("selectionchange", !1, e));
    }
  }
  function jy(t, e, n, i) {
    switch (Tg(e)) {
      case 2:
        var s = d2;
        break;
      case 8:
        s = h2;
        break;
      default:
        s = mf;
    }
    ((n = s.bind(null, e, n, t)),
      (s = void 0),
      !eu ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (s = !0),
      i
        ? s !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: s })
          : t.addEventListener(e, n, !0)
        : s !== void 0
          ? t.addEventListener(e, n, { passive: s })
          : t.addEventListener(e, n, !1));
  }
  function Pc(t, e, n, i, s) {
    var u = i;
    if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
      t: for (;;) {
        if (i === null) return;
        var h = i.tag;
        if (h === 3 || h === 4) {
          var x = i.stateNode.containerInfo;
          if (x === s) break;
          if (h === 4)
            for (h = i.return; h !== null;) {
              var T = h.tag;
              if ((T === 3 || T === 4) && h.stateNode.containerInfo === s)
                return;
              h = h.return;
            }
          for (; x !== null;) {
            if (((h = Oa(x)), h === null)) return;
            if (((T = h.tag), T === 5 || T === 6 || T === 26 || T === 27)) {
              i = u = h;
              continue t;
            }
            x = x.parentNode;
          }
        }
        i = i.return;
      }
    jh(function () {
      var O = u,
        V = Ir(n),
        H = [];
      t: {
        var R = om.get(t);
        if (R !== void 0) {
          var _ = Hs,
            Z = t;
          switch (t) {
            case "keypress":
              if (Bs(n) === 0) break t;
            case "keydown":
            case "keyup":
              _ = ib;
              break;
            case "focusin":
              ((Z = "focus"), (_ = lu));
              break;
            case "focusout":
              ((Z = "blur"), (_ = lu));
              break;
            case "beforeblur":
            case "afterblur":
              _ = lu;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              _ = Uh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _ = Qx;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _ = ub;
              break;
            case am:
            case im:
            case lm:
              _ = Fx;
              break;
            case sm:
              _ = fb;
              break;
            case "scroll":
            case "scrollend":
              _ = Xx;
              break;
            case "wheel":
              _ = hb;
              break;
            case "copy":
            case "cut":
            case "paste":
              _ = $x;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _ = Lh;
              break;
            case "submit":
              _ = ob;
              break;
            case "toggle":
            case "beforetoggle":
              _ = pb;
          }
          var $ = (e & 4) !== 0,
            ct = !$ && (t === "scroll" || t === "scrollend"),
            D = $ ? (R !== null ? R + "Capture" : null) : R;
          $ = [];
          for (var C = O, j; C !== null;) {
            var L = C;
            if (
              ((j = L.stateNode),
              (L = L.tag),
              (L !== 5 && L !== 26 && L !== 27) ||
                j === null ||
                D === null ||
                ((L = ml(C, D)), L != null && $.push(Kl(C, L, j))),
              ct)
            )
              break;
            C = C.return;
          }
          0 < $.length &&
            ((R = new _(R, Z, null, n, V)), H.push({ event: R, listeners: $ }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((_ = t === "mouseover" || t === "pointerover"),
            (R = t === "mouseout" || t === "pointerout"),
            _ &&
              n !== Wr &&
              (Z = n.relatedTarget || n.fromElement) &&
              (Oa(Z) || Z[si]))
          )
            break t;
          (R || _) &&
            ((Z =
              V.window === V
                ? V
                : (_ = V.ownerDocument)
                  ? _.defaultView || _.parentWindow
                  : window),
            R
              ? ((_ = n.relatedTarget || n.toElement),
                (R = O),
                (_ = _ ? Oa(_) : null),
                _ !== null &&
                  ((ct = d(_)),
                  ($ = _.tag),
                  _ !== ct || ($ !== 5 && $ !== 27 && $ !== 6)) &&
                  (_ = null))
              : ((R = null), (_ = O)),
            R !== _ &&
              (($ = Uh),
              (L = "onMouseLeave"),
              (D = "onMouseEnter"),
              (C = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                (($ = Lh),
                (L = "onPointerLeave"),
                (D = "onPointerEnter"),
                (C = "pointer")),
              (ct = R == null ? Z : hl(R)),
              (j = _ == null ? Z : hl(_)),
              (Z = new $(L, C + "leave", R, n, V)),
              (Z.target = ct),
              (Z.relatedTarget = j),
              (L = null),
              Oa(V) === O &&
                (($ = new $(D, C + "enter", _, n, V)),
                ($.target = j),
                ($.relatedTarget = ct),
                (L = $)),
              (ct = L),
              ($ = R && _ ? tt(R, _, SS) : null),
              R !== null && _y(H, Z, R, $, !1),
              _ !== null && ct !== null && _y(H, ct, _, $, !0)));
        }
        t: {
          if (
            ((R = O ? hl(O) : window),
            (_ = R.nodeName && R.nodeName.toLowerCase()),
            _ === "select" || (_ === "input" && R.type === "file"))
          )
            var P = Qh;
          else if (Xh(R))
            if (Kh) P = Ab;
            else {
              P = Eb;
              var xt = Tb;
            }
          else
            ((_ = R.nodeName),
              !_ ||
              _.toLowerCase() !== "input" ||
              (R.type !== "checkbox" && R.type !== "radio")
                ? O && $r(O.elementType) && (P = Qh)
                : (P = Cb));
          if (P && (P = P(t, O))) {
            Zh(H, P, n, V);
            break t;
          }
          xt && xt(t, R, O);
        }
        switch (((xt = O ? hl(O) : window), t)) {
          case "focusin":
            (Xh(xt) || xt.contentEditable === "true") &&
              ((pi = xt), (du = O), (Tl = null));
            break;
          case "focusout":
            Tl = du = pi = null;
            break;
          case "mousedown":
            hu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((hu = !1), em(H, n, V));
            break;
          case "selectionchange":
            if (Nb) break;
          case "keydown":
          case "keyup":
            em(H, n, V);
        }
        var et;
        if (ou)
          t: {
            switch (t) {
              case "compositionstart":
                var lt = "onCompositionStart";
                break t;
              case "compositionend":
                lt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                lt = "onCompositionUpdate";
                break t;
            }
            lt = void 0;
          }
        else
          mi
            ? Gh(t, n) && (lt = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (lt = "onCompositionStart");
        (lt &&
          (Hh &&
            n.locale !== "ko" &&
            (mi || lt !== "onCompositionStart"
              ? lt === "onCompositionEnd" && mi && (et = _h())
              : ((In = V),
                (nu = "value" in In ? In.value : In.textContent),
                (mi = !0))),
          (xt = Go(O, lt)),
          0 < xt.length &&
            ((lt = new Bh(lt, t, null, n, V)),
            H.push({ event: lt, listeners: xt }),
            et
              ? (lt.data = et)
              : ((et = kh(n)), et !== null && (lt.data = et)))),
          (et = gb ? vb(t, n) : xb(t, n)) &&
            ((lt = Go(O, "onBeforeInput")),
            0 < lt.length &&
              ((xt = new Bh("onBeforeInput", "beforeinput", null, n, V)),
              H.push({ event: xt, listeners: lt }),
              (xt.data = et))),
          gS(H, t, O, n, V));
      }
      zy(H, e);
    });
  }
  function Kl(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Go(t, e) {
    for (var n = e + "Capture", i = []; t !== null;) {
      var s = t,
        u = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          u === null ||
          ((s = ml(t, n)),
          s != null && i.unshift(Kl(t, s, u)),
          (s = ml(t, e)),
          s != null && i.push(Kl(t, s, u))),
        t.tag === 3)
      )
        return i;
      t = t.return;
    }
    return [];
  }
  function SS(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function _y(t, e, n, i, s) {
    for (var u = e._reactName, h = []; n !== null && n !== i;) {
      var x = n,
        T = x.alternate,
        O = x.stateNode;
      if (((x = x.tag), T !== null && T === i)) break;
      ((x !== 5 && x !== 26 && x !== 27) ||
        O === null ||
        ((T = O),
        s
          ? ((O = ml(n, u)), O != null && h.unshift(Kl(n, O, T)))
          : s || ((O = ml(n, u)), O != null && h.push(Kl(n, O, T)))),
        (n = n.return));
    }
    h.length !== 0 && t.push({ event: e, listeners: h });
  }
  var TS = /\r\n?/g,
    ES = /\u0000|\uFFFD/g;
  function Vy(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        TS,
        `
`,
      )
      .replace(ES, "");
  }
  function Uy(t, e) {
    return ((e = Vy(e)), Vy(t) === e);
  }
  function Dt(t, e, n, i, s, u) {
    switch (n) {
      case "children":
        if (typeof i == "string")
          e === "body" || (e === "textarea" && i === "") || fi(t, i);
        else if (typeof i == "number" || typeof i == "bigint")
          e !== "body" && fi(t, "" + i);
        else return;
        break;
      case "className":
        _s(t, "class", i);
        break;
      case "tabIndex":
        _s(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        _s(t, n, i);
        break;
      case "style":
        Oh(t, i, u);
        return;
      case "data":
        if (e !== "object") {
          _s(t, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "symbol" ||
          typeof i == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        ((i = Vs(i)), t.setAttribute(n, i));
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == "function" &&
            (n === "formAction"
              ? (e !== "input" && Dt(t, e, "name", s.name, s, null),
                Dt(t, e, "formEncType", s.formEncType, s, null),
                Dt(t, e, "formMethod", s.formMethod, s, null),
                Dt(t, e, "formTarget", s.formTarget, s, null))
              : (Dt(t, e, "encType", s.encType, s, null),
                Dt(t, e, "method", s.method, s, null),
                Dt(t, e, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        ((i = Vs(i)), t.setAttribute(n, i));
        break;
      case "onClick":
        i != null && (t.onclick = mn);
        return;
      case "onScroll":
        i != null && gt("scroll", t);
        return;
      case "onScrollEnd":
        i != null && gt("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(r(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(r(60));
            u?.__html !== n && (t.innerHTML = n);
          }
        }
        break;
      case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "boolean" ||
          typeof i == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((n = Vs(i)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, i)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0
          ? t.setAttribute(n, "")
          : i !== !1 &&
              i != null &&
              typeof i != "function" &&
              typeof i != "symbol"
            ? t.setAttribute(n, i)
            : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        !isNaN(i) &&
        1 <= i
          ? t.setAttribute(n, i)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? t.removeAttribute(n)
          : t.setAttribute(n, i);
        break;
      case "popover":
        (gt("beforetoggle", t), gt("toggle", t), js(t, "popover", i));
        break;
      case "xlinkActuate":
        _n(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        _n(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        _n(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        _n(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        _n(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        _n(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        _n(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        _n(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        _n(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        js(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (
          !(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")
        )
          ((n = Gx.get(n) || n), js(t, n, i));
        else return;
    }
    Ct = !0;
  }
  function Fc(t, e, n, i, s, u) {
    switch (n) {
      case "style":
        Oh(t, i, u);
        return;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(r(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(r(60));
            u?.__html !== n && (t.innerHTML = n);
          }
        }
        break;
      case "children":
        if (typeof i == "string") fi(t, i);
        else if (typeof i == "number" || typeof i == "bigint") fi(t, "" + i);
        else return;
        break;
      case "onScroll":
        i != null && gt("scroll", t);
        return;
      case "onScrollEnd":
        i != null && gt("scrollend", t);
        return;
      case "onClick":
        i != null && (t.onclick = mn);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!Sh.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((s = n.endsWith("Capture")),
              (u = n.slice(2, s ? n.length - 7 : void 0)),
              (e = t[Ee] || null),
              (e = e != null ? e[n] : null),
              typeof e == "function" && t.removeEventListener(u, e, s),
              typeof i == "function")
            ) {
              (typeof e != "function" &&
                e !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(u, i, s));
              break t;
            }
            ((Ct = !0),
              n in t
                ? (t[n] = i)
                : i === !0
                  ? t.setAttribute(n, "")
                  : js(t, n, i));
          }
        return;
    }
    Ct = !0;
  }
  function de(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (gt("error", t), gt("load", t));
        var i = !1,
          s = !1,
          u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var h = n[u];
            if (h != null)
              switch (u) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  Dt(t, e, u, h, n, null);
              }
          }
        (s && Dt(t, e, "srcSet", n.srcSet, n, null),
          i && Dt(t, e, "src", n.src, n, null));
        return;
      case "input":
        gt("invalid", t);
        var x = (u = h = s = null),
          T = null,
          O = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var V = n[i];
            if (V != null)
              switch (i) {
                case "name":
                  s = V;
                  break;
                case "type":
                  h = V;
                  break;
                case "checked":
                  T = V;
                  break;
                case "defaultChecked":
                  O = V;
                  break;
                case "value":
                  u = V;
                  break;
                case "defaultValue":
                  x = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null) throw Error(r(137, e));
                  break;
                default:
                  Dt(t, e, i, V, n, null);
              }
          }
        Nh(t, u, x, T, O, h, s, !1);
        return;
      case "select":
        (gt("invalid", t), (i = h = u = null));
        for (s in n)
          if (n.hasOwnProperty(s) && ((x = n[s]), x != null))
            switch (s) {
              case "value":
                u = x;
                break;
              case "defaultValue":
                h = x;
                break;
              case "multiple":
                i = x;
              default:
                Dt(t, e, s, x, n, null);
            }
        ((e = u),
          (n = h),
          (t.multiple = !!i),
          e != null ? ci(t, !!i, e, !1) : n != null && ci(t, !!i, n, !0));
        return;
      case "textarea":
        (gt("invalid", t), (u = s = i = null));
        for (h in n)
          if (n.hasOwnProperty(h) && ((x = n[h]), x != null))
            switch (h) {
              case "value":
                i = x;
                break;
              case "defaultValue":
                s = x;
                break;
              case "children":
                u = x;
                break;
              case "dangerouslySetInnerHTML":
                if (x != null) throw Error(r(91));
                break;
              default:
                Dt(t, e, h, x, n, null);
            }
        Mh(t, i, s, u);
        return;
      case "option":
        for (T in n)
          n.hasOwnProperty(T) &&
            ((i = n[T]), i != null) &&
            (T === "selected"
              ? (t.selected =
                  i && typeof i != "function" && typeof i != "symbol")
              : Dt(t, e, T, i, n, null));
        return;
      case "dialog":
        (gt("beforetoggle", t),
          gt("toggle", t),
          gt("cancel", t),
          gt("close", t));
        break;
      case "iframe":
      case "object":
        gt("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Ql.length; i++) gt(Ql[i], t);
        break;
      case "image":
        (gt("error", t), gt("load", t));
        break;
      case "details":
        gt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (gt("error", t), gt("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (O in n)
          if (n.hasOwnProperty(O) && ((i = n[O]), i != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Dt(t, e, O, i, n, null);
            }
        return;
      default:
        if ($r(e)) {
          for (V in n)
            n.hasOwnProperty(V) &&
              ((i = n[V]), i !== void 0 && Fc(t, e, V, i, n, void 0));
          return;
        }
    }
    for (x in n)
      n.hasOwnProperty(x) && ((i = n[x]), i != null && Dt(t, e, x, i, n, null));
  }
  var CS = {};
  function AS(t, e, n, i) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          u = null,
          h = null,
          x = null,
          T = null,
          O = null,
          V = null;
        for (_ in n) {
          var H = n[_];
          if (n.hasOwnProperty(_) && H != null)
            switch (_) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = H;
              default:
                i.hasOwnProperty(_) || Dt(t, e, _, null, i, H);
            }
        }
        for (var R in i) {
          var _ = i[R];
          if (((H = n[R]), i.hasOwnProperty(R) && (_ != null || H != null)))
            switch (R) {
              case "type":
                (_ !== H && (Ct = !0), (u = _));
                break;
              case "name":
                (_ !== H && (Ct = !0), (s = _));
                break;
              case "checked":
                (_ !== H && (Ct = !0), (O = _));
                break;
              case "defaultChecked":
                (_ !== H && (Ct = !0), (V = _));
                break;
              case "value":
                (_ !== H && (Ct = !0), (h = _));
                break;
              case "defaultValue":
                (_ !== H && (Ct = !0), (x = _));
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null) throw Error(r(137, e));
                break;
              default:
                _ !== H && Dt(t, e, R, _, i, H);
            }
        }
        Fr(t, h, x, T, O, V, u, s);
        return;
      case "select":
        _ = h = x = R = null;
        for (u in n)
          if (((T = n[u]), n.hasOwnProperty(u) && T != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                _ = T;
              default:
                i.hasOwnProperty(u) || Dt(t, e, u, null, i, T);
            }
        for (s in i)
          if (
            ((u = i[s]),
            (T = n[s]),
            i.hasOwnProperty(s) && (u != null || T != null))
          )
            switch (s) {
              case "value":
                (u !== T && (Ct = !0), (R = u));
                break;
              case "defaultValue":
                (u !== T && (Ct = !0), (x = u));
                break;
              case "multiple":
                (u !== T && (Ct = !0), (h = u));
              default:
                u !== T && Dt(t, e, s, u, i, T);
            }
        ((e = x),
          (n = h),
          (i = _),
          R != null
            ? ci(t, !!n, R, !1)
            : !!i != !!n &&
              (e != null ? ci(t, !!n, e, !0) : ci(t, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        _ = R = null;
        for (x in n)
          if (
            ((s = n[x]),
            n.hasOwnProperty(x) && s != null && !i.hasOwnProperty(x))
          )
            switch (x) {
              case "value":
                break;
              case "children":
                break;
              default:
                Dt(t, e, x, null, i, s);
            }
        for (h in i)
          if (
            ((s = i[h]),
            (u = n[h]),
            i.hasOwnProperty(h) && (s != null || u != null))
          )
            switch (h) {
              case "value":
                (s !== u && (Ct = !0), (R = s));
                break;
              case "defaultValue":
                (s !== u && (Ct = !0), (_ = s));
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                s !== u && Dt(t, e, h, s, i, u);
            }
        Rh(t, R, _);
        return;
      case "option":
        for (var Z in n)
          ((R = n[Z]),
            n.hasOwnProperty(Z) &&
              R != null &&
              !i.hasOwnProperty(Z) &&
              (Z === "selected" ? (t.selected = !1) : Dt(t, e, Z, null, i, R)));
        for (T in i)
          ((R = i[T]),
            (_ = n[T]),
            i.hasOwnProperty(T) &&
              R !== _ &&
              (R != null || _ != null) &&
              (T === "selected"
                ? (R !== _ && (Ct = !0),
                  (t.selected =
                    R && typeof R != "function" && typeof R != "symbol"))
                : Dt(t, e, T, R, i, _)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var $ in n)
          ((R = n[$]),
            n.hasOwnProperty($) &&
              R != null &&
              !i.hasOwnProperty($) &&
              Dt(t, e, $, null, i, R));
        for (O in i)
          if (
            ((R = i[O]),
            (_ = n[O]),
            i.hasOwnProperty(O) && R !== _ && (R != null || _ != null))
          )
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null) throw Error(r(137, e));
                break;
              default:
                Dt(t, e, O, R, i, _);
            }
        return;
      default:
        if ($r(e)) {
          for (var ct in n)
            ((R = n[ct]),
              n.hasOwnProperty(ct) &&
                R !== void 0 &&
                !i.hasOwnProperty(ct) &&
                Fc(t, e, ct, void 0, i, R));
          for (V in i)
            ((R = i[V]),
              (_ = n[V]),
              !i.hasOwnProperty(V) ||
                R === _ ||
                (R === void 0 && _ === void 0) ||
                Fc(t, e, V, R, i, _));
          return;
        }
    }
    for (var D in n)
      ((R = n[D]),
        n.hasOwnProperty(D) &&
          R != null &&
          !i.hasOwnProperty(D) &&
          Dt(t, e, D, null, i, R));
    for (H in i)
      ((R = i[H]),
        (_ = n[H]),
        !i.hasOwnProperty(H) ||
          R === _ ||
          (R == null && _ == null) ||
          Dt(t, e, H, R, i, _));
  }
  function By(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function wS() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, n = performance.getEntriesByType("resource"), i = 0;
        i < n.length;
        i++
      ) {
        var s = n[i],
          u = s.transferSize,
          h = s.initiatorType,
          x = s.duration;
        if (u && x && By(h)) {
          for (h = 0, x = s.responseEnd, i += 1; i < n.length; i++) {
            var T = n[i],
              O = T.startTime;
            if (O > x) break;
            var V = T.transferSize,
              H = T.initiatorType;
            V &&
              By(H) &&
              ((T = T.responseEnd), (h += V * (T < x ? 1 : (x - O) / (T - O))));
          }
          if ((--i, (e += (8 * (u + h)) / (s.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var Jc = null,
    $c = null;
  function Pl(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Ly(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Hy(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Yy(t, e, n, i) {
    return (
      (n = Pl(n).createElement(t)),
      (n[oe] = i),
      (n[Ee] = e),
      de(n, t, e),
      ne(n),
      n
    );
  }
  function Wc(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ic = null;
  function NS() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Ic
        ? !1
        : ((Ic = t), !0)
      : ((Ic = null), !1);
  }
  var tf = typeof setTimeout == "function" ? setTimeout : void 0,
    RS = typeof clearTimeout == "function" ? clearTimeout : void 0,
    qy = typeof Promise == "function" ? Promise : void 0,
    Gy =
      typeof requestAnimationFrame == "function" ? requestAnimationFrame : tf,
    MS =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof qy < "u"
          ? function (t) {
              return qy.resolve(null).then(t).catch(DS);
            }
          : tf;
  function DS(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function xa(t) {
    return t === "head";
  }
  function ky(t, e) {
    var n = e,
      i = 0;
    do {
      var s = n.nextSibling;
      if ((t.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$" || n === "/&")) {
          if (i === 0) {
            (t.removeChild(s), Pi(e));
            return;
          }
          i--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          i++;
        else if (n === "html") uf(t.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = t.ownerDocument.head), uf(n));
          for (var u = n.firstChild; u;) {
            var h = u.nextSibling,
              x = u.nodeName;
            (u[dl] ||
              x === "SCRIPT" ||
              x === "STYLE" ||
              (x === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(u),
              (u = h));
          }
        } else n === "body" && uf(t.ownerDocument.body);
      n = s;
    } while (n);
    Pi(e);
  }
  function Xy(t, e) {
    var n = t;
    t = 0;
    do {
      var i = n.nextSibling;
      if (
        (n.nodeType === 1
          ? e
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (e
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        i && i.nodeType === 8)
      )
        if (((n = i.data), n === "/$")) {
          if (t === 0) break;
          t--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || t++;
      n = i;
    } while (n);
  }
  function Zy(t, e, n) {
    if (
      ((e = CSS.escape(e) !== e ? "r-" + btoa(e).replace(/=/g, "") : e),
      (t.style.viewTransitionName = e),
      n != null && (t.style.viewTransitionClass = n),
      (n = getComputedStyle(t)),
      n.display === "inline")
    ) {
      if (((e = t.getClientRects()), e.length === 1)) var i = 1;
      else
        for (var s = (i = 0); s < e.length; s++) {
          var u = e[s];
          0 < u.width && 0 < u.height && i++;
        }
      i === 1 &&
        ((t = t.style),
        (t.display = e.length === 1 ? "inline-block" : "block"),
        (t.marginTop = "-" + n.paddingTop),
        (t.marginBottom = "-" + n.paddingBottom));
    }
  }
  function Qy(t, e) {
    ((t = t.style), (e = e.style));
    var n =
      e != null
        ? e.hasOwnProperty("viewTransitionName")
          ? e.viewTransitionName
          : e.hasOwnProperty("view-transition-name")
            ? e["view-transition-name"]
            : null
        : null;
    ((t.viewTransitionName =
      n == null || typeof n == "boolean" ? "" : ("" + n).trim()),
      (n =
        e != null
          ? e.hasOwnProperty("viewTransitionClass")
            ? e.viewTransitionClass
            : e.hasOwnProperty("view-transition-class")
              ? e["view-transition-class"]
              : null
          : null),
      (t.viewTransitionClass =
        n == null || typeof n == "boolean" ? "" : ("" + n).trim()),
      t.display === "inline-block" &&
        (e == null
          ? (t.display = t.margin = "")
          : ((n = e.display),
            (t.display = n == null || typeof n == "boolean" ? "" : n),
            (n = e.margin),
            n != null
              ? (t.margin = n)
              : ((n = e.hasOwnProperty("marginTop")
                  ? e.marginTop
                  : e["margin-top"]),
                (t.marginTop = n == null || typeof n == "boolean" ? "" : n),
                (e = e.hasOwnProperty("marginBottom")
                  ? e.marginBottom
                  : e["margin-bottom"]),
                (t.marginBottom =
                  e == null || typeof e == "boolean" ? "" : e)))));
  }
  function OS(t, e, n) {
    return (
      (n = n.ownerDocument.defaultView),
      {
        rect: t,
        abs: e.position === "absolute" || e.position === "fixed",
        clip:
          e.clipPath !== "none" ||
          e.overflow !== "visible" ||
          e.filter !== "none" ||
          e.mask !== "none" ||
          e.mask !== "none" ||
          e.borderRadius !== "0px",
        view:
          0 <= t.bottom &&
          0 <= t.right &&
          t.top <= n.innerHeight &&
          t.left <= n.innerWidth,
      }
    );
  }
  function ef(t) {
    var e = t.getBoundingClientRect(),
      n = getComputedStyle(t);
    return OS(e, n, t);
  }
  function zS(t) {
    return t.documentElement.clientHeight;
  }
  function jS(t) {
    (this.addEventListener("load", t), this.addEventListener("error", t));
  }
  function _S(t, e, n, i, s, u, h, x, T) {
    var O = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var V = O.startViewTransition({
        update: function () {
          var R = O.defaultView,
            _ = R.navigation && R.navigation.transition,
            Z = O.fonts.status;
          i();
          var $ = [];
          if (
            (Z === "loaded" &&
              (zS(O), O.fonts.status === "loading" && $.push(O.fonts.ready)),
            (Z = $.length),
            t !== null)
          )
            for (var ct = t.suspenseyImages, D = 0, C = 0; C < ct.length; C++) {
              var j = ct[C];
              if (!j.complete) {
                var L = j.getBoundingClientRect();
                if (
                  0 < L.bottom &&
                  0 < L.right &&
                  L.top < R.innerHeight &&
                  L.left < R.innerWidth
                ) {
                  if (((D += hg(j)), D > Zo)) {
                    $.length = Z;
                    break;
                  }
                  ((j = new Promise(jS.bind(j))), $.push(j));
                }
              }
            }
          if (0 < $.length)
            return (
              (R = Promise.race([
                Promise.all($),
                new Promise(function (P) {
                  return setTimeout(P, 500);
                }),
              ]).then(s, s)),
              (_ ? Promise.allSettled([_.finished, R]) : R).then(u, u)
            );
          if ((s(), _)) return _.finished.then(u, u);
          u();
        },
        types: n,
      });
      O.__reactViewTransition = V;
      var H = [];
      return (
        V.ready.then(
          function () {
            for (
              var R = O.documentElement.getAnimations({ subtree: !0 }), _ = 0;
              _ < R.length;
              _++
            ) {
              var Z = R[_],
                $ = Z.effect,
                ct = $.pseudoElement;
              if (ct != null && ct.startsWith("::view-transition")) {
                (H.push(Z), (Z = $.getKeyframes()));
                for (var D = (ct = void 0), C = !0, j = 0; j < Z.length; j++) {
                  var L = Z[j],
                    P = L.width;
                  if (ct === void 0) ct = P;
                  else if (ct !== P) {
                    C = !1;
                    break;
                  }
                  if (((P = L.height), D === void 0)) D = P;
                  else if (D !== P) {
                    C = !1;
                    break;
                  }
                  (delete L.width,
                    delete L.height,
                    L.transform === "none" && delete L.transform);
                }
                C &&
                  ct !== void 0 &&
                  D !== void 0 &&
                  ($.setKeyframes(Z),
                  (C = getComputedStyle($.target, $.pseudoElement)),
                  C.width !== ct || C.height !== D) &&
                  ((C = Z[0]),
                  (C.width = ct),
                  (C.height = D),
                  (C = Z[Z.length - 1]),
                  (C.width = ct),
                  (C.height = D),
                  $.setKeyframes(Z));
              }
            }
            h();
          },
          function (R) {
            O.__reactViewTransition === V && (O.__reactViewTransition = null);
            try {
              (typeof R == "object" &&
                R !== null &&
                R.name === "InvalidStateError" &&
                (R.message ===
                  "View transition was skipped because document visibility state is hidden." ||
                  R.message ===
                    "Skipping view transition because document visibility state has become hidden." ||
                  R.message ===
                    "Skipping view transition because viewport size changed." ||
                  R.message ===
                    "Transition was aborted because of invalid state") &&
                (R = null),
                R !== null && T(R));
            } finally {
              (i(), s(), h());
            }
          },
        ),
        V.finished.finally(function () {
          for (var R = 0; R < H.length; R++) H[R].cancel();
          (O.__reactViewTransition === V && (O.__reactViewTransition = null),
            x());
        }),
        V
      );
    } catch {
      return (i(), s(), h(), null);
    }
  }
  function Wa(t, e) {
    ((this._scope = document.documentElement),
      (this._selector = "::view-transition-" + t + "(" + e + ")"));
  }
  ((Wa.prototype.animate = function (t, e) {
    return (
      (e = typeof e == "number" ? { duration: e } : Q({}, e)),
      (e.pseudoElement = this._selector),
      this._scope.animate(t, e)
    );
  }),
    (Wa.prototype.getAnimations = function () {
      for (
        var t = this._scope,
          e = this._selector,
          n = t.getAnimations({ subtree: !0 }),
          i = [],
          s = 0;
        s < n.length;
        s++
      ) {
        var u = n[s].effect;
        u !== null && u.target === t && u.pseudoElement === e && i.push(n[s]);
      }
      return i;
    }),
    (Wa.prototype.getComputedStyle = function () {
      return getComputedStyle(this._scope, this._selector);
    }));
  function Ky(t) {
    return {
      name: t,
      group: new Wa("group", t),
      imagePair: new Wa("image-pair", t),
      old: new Wa("old", t),
      new: new Wa("new", t),
    };
  }
  function Ye(t) {
    ((this._fragmentFiber = t),
      (this._observers = this._eventListeners = null));
  }
  Ye.prototype.addEventListener = function (t, e, n) {
    var i = null,
      s = null;
    if (!(
      n != null &&
      typeof n != "boolean" &&
      ((i = n.signal || null), i !== null && i.aborted)
    )) {
      this._eventListeners === null && (this._eventListeners = []);
      var u = this._eventListeners;
      if (Fy(u, t, e, n) === -1) {
        var h = this,
          x = e;
        (n != null &&
          typeof n != "boolean" &&
          n.once === !0 &&
          (x = function (T) {
            (h.removeEventListener(t, e, n),
              typeof e == "function" ? e.call(this, T) : e.handleEvent(T));
          }),
          i !== null &&
            ((s = h.removeEventListener.bind(h, t, e, n)),
            i.addEventListener("abort", s, { once: !0 }),
            (s = i.removeEventListener.bind(i, "abort", s))),
          (i = Gi(n)),
          u.push({
            type: t,
            listener: e,
            optionsOrUseCapture: n,
            attachedListener: x,
            cleanup: s,
          }),
          p(this._fragmentFiber.child, !1, VS, t, x, i));
      }
      this._eventListeners = u;
    }
  };
  function VS(t, e, n, i) {
    return (A(t).addEventListener(e, n, i), !1);
  }
  Ye.prototype.removeEventListener = function (t, e, n) {
    var i = this._eventListeners;
    if (i !== null && ((e = Fy(i, t, e, n)), e !== -1)) {
      var s = i[e];
      n = s.attachedListener;
      var u = s.cleanup;
      ((s = Gi(s.optionsOrUseCapture)),
        p(this._fragmentFiber.child, !1, US, t, n, s),
        i.splice(e, 1),
        u !== null && u());
    }
  };
  function US(t, e, n, i) {
    return (A(t).removeEventListener(e, n, i), !1);
  }
  function Gi(t) {
    return t != null &&
      typeof t != "boolean" &&
      (t.once === !0 || t.signal instanceof AbortSignal)
      ? { capture: t.capture, passive: t.passive }
      : t;
  }
  function Py(t) {
    return t == null
      ? "c=0"
      : typeof t == "boolean"
        ? "c=" + (t ? "1" : "0")
        : "c=" + (t.capture ? "1" : "0");
  }
  function Fy(t, e, n, i) {
    if (t.length === 0) return -1;
    i = Py(i);
    for (var s = 0; s < t.length; s++) {
      var u = t[s];
      if (u.type === e && u.listener === n && Py(u.optionsOrUseCapture) === i)
        return s;
    }
    return -1;
  }
  ((Ye.prototype.dispatchEvent = function (t) {
    var e = S(this._fragmentFiber);
    if (e === null) return !0;
    e = A(e);
    var n = this._eventListeners;
    if ((n !== null && 0 < n.length) || !t.bubbles) {
      var i =
        e.nodeType === 9 ? e.createComment("") : document.createTextNode("");
      if (n)
        for (var s = 0; s < n.length; s++) {
          var u = n[s];
          i.addEventListener(
            u.type,
            u.attachedListener,
            Gi(u.optionsOrUseCapture),
          );
        }
      if ((e.appendChild(i), (t = i.dispatchEvent(t)), n))
        for (s = 0; s < n.length; s++)
          ((u = n[s]),
            i.removeEventListener(
              u.type,
              u.attachedListener,
              Gi(u.optionsOrUseCapture),
            ));
      return (e.removeChild(i), t);
    }
    return e.dispatchEvent(t);
  }),
    (Ye.prototype.focus = function (t) {
      p(this._fragmentFiber.child, !0, Jy, t, void 0, void 0);
    }));
  function Jy(t, e) {
    return t.tag === 6 ? !1 : ((t = A(t)), PS(t, e));
  }
  Ye.prototype.focusLast = function (t) {
    var e = [];
    p(this._fragmentFiber.child, !0, nf, e, void 0, void 0);
    for (var n = e.length - 1; 0 <= n && !Jy(e[n], t); n--);
  };
  function nf(t, e) {
    return (e.push(t), !1);
  }
  Ye.prototype.blur = function () {
    var t = S(this._fragmentFiber);
    t !== null &&
      ((t = A(t)),
      (t = Pl(t).activeElement),
      t !== null && p(this._fragmentFiber.child, !1, BS, t, void 0, void 0));
  };
  function BS(t, e) {
    return t.tag === 6
      ? !1
      : ((t = A(t)), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  Ye.prototype.observeUsing = function (t) {
    (this._observers === null && (this._observers = new Set()),
      this._observers.add(t),
      p(this._fragmentFiber.child, !1, LS, t, void 0, void 0));
  };
  function LS(t, e) {
    return (t.tag === 6 || ((t = A(t)), e.observe(t)), !1);
  }
  Ye.prototype.unobserveUsing = function (t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      (e.delete(t), p(this._fragmentFiber.child, !1, HS, t, void 0, void 0));
      for (var n = (e = 0); n < rn.length; n++) {
        var i = rn[n];
        i.fragmentInstance === this && i.observer === t
          ? t.unobserve(i.instance)
          : (rn[e++] = i);
      }
      rn.length = e;
    }
  };
  function HS(t, e) {
    return (t.tag === 6 || ((t = A(t)), e.unobserve(t)), !1);
  }
  var rn = [],
    af = !1;
  function YS(t, e, n) {
    (rn.push({ fragmentInstance: t, observer: e, instance: n }),
      af ||
        ((af = !0),
        FS(function () {
          af = !1;
          var i = rn;
          rn = [];
          for (var s = 0; s < i.length; s++) {
            var u = i[s];
            u.observer.unobserve(u.instance);
          }
        })));
  }
  Ye.prototype.getClientRects = function () {
    var t = [];
    return (p(this._fragmentFiber.child, !1, qS, t, void 0, void 0), t);
  };
  function qS(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var n = t.ownerDocument.createRange();
      (n.selectNodeContents(t), e.push.apply(e, n.getClientRects()));
    } else ((t = A(t)), e.push.apply(e, t.getClientRects()));
    return !1;
  }
  ((Ye.prototype.getRootNode = function (t) {
    var e = S(this._fragmentFiber);
    return e === null ? this : A(e).getRootNode(t);
  }),
    (Ye.prototype.compareDocumentPosition = function (t) {
      var e = S(this._fragmentFiber);
      if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      var n = [];
      p(this._fragmentFiber.child, !1, nf, n, void 0, void 0);
      var i = A(e);
      if (n.length === 0) {
        if (((n = i), N(this._fragmentFiber))) {
          t: {
            for (e = this._fragmentFiber.return; e !== null;) {
              if (e.tag === 4) {
                e = e.stateNode.containerInfo;
                break t;
              }
              if (e.tag === 3 || e.tag === 5 || e.tag === 27) break;
              e = e.return;
            }
            e = null;
          }
          e != null && (n = e);
        }
        e = this._fragmentFiber;
        var s = (i = n.compareDocumentPosition(t));
        return (
          n === t
            ? (s = Node.DOCUMENT_POSITION_CONTAINS)
            : i & Node.DOCUMENT_POSITION_CONTAINED_BY &&
              ((n = M(e)[1]),
              n === null
                ? (s = Node.DOCUMENT_POSITION_PRECEDING)
                : ((t = A(n).compareDocumentPosition(t)),
                  (s =
                    t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING
                      ? Node.DOCUMENT_POSITION_FOLLOWING
                      : Node.DOCUMENT_POSITION_PRECEDING))),
          (s |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
        );
      }
      ((e = A(n[0])), (s = A(n[n.length - 1])));
      var u = N(this._fragmentFiber) ? e.parentElement : i;
      if (u == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      ((i = u.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY),
        (u =
          u.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_CONTAINED_BY));
      var h = e.compareDocumentPosition(t),
        x = s.compareDocumentPosition(t),
        T =
          h & Node.DOCUMENT_POSITION_CONTAINED_BY ||
          x & Node.DOCUMENT_POSITION_CONTAINED_BY;
      return (
        (x =
          i &&
          u &&
          h & Node.DOCUMENT_POSITION_FOLLOWING &&
          x & Node.DOCUMENT_POSITION_PRECEDING),
        (e =
          (i && e === t) || (u && s === t) || T || x
            ? Node.DOCUMENT_POSITION_CONTAINED_BY
            : (!i && e === t) || (!u && s === t)
              ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
              : h),
        e & Node.DOCUMENT_POSITION_DISCONNECTED ||
        e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC ||
        GS(e, this._fragmentFiber, n[0], n[n.length - 1], t)
          ? e
          : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
      );
    }));
  function GS(t, e, n, i, s) {
    var u = Oa(s);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if ((n = !!u))
        t: {
          for (; u !== null;) {
            if (u.tag === 7 && (u === e || u.alternate === e)) {
              n = !0;
              break t;
            }
            u = u.return;
          }
          n = !1;
        }
      return n;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (u === null)
        return (
          (u = s.ownerDocument),
          s === u || s === u.documentElement || s === u.body
        );
      t: {
        for (u = e, e = S(e); u !== null;) {
          if (!(
            (u.tag !== 5 && u.tag !== 3 && u.tag !== 27) ||
            (u !== e && u.alternate !== e)
          )) {
            u = !0;
            break t;
          }
          u = u.return;
        }
        u = !1;
      }
      return u;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING
      ? ((e = !!u) &&
          !(e = u === n) &&
          ((e = tt(n, u, K)),
          e === null
            ? (e = !1)
            : (p(e, !0, B, u, n), (u = U), (U = null), (e = u !== null))),
        e)
      : t & Node.DOCUMENT_POSITION_FOLLOWING
        ? ((e = !!u) &&
            !(e = u === i) &&
            ((e = tt(i, u, K)),
            e === null
              ? (e = !1)
              : (p(e, !0, q, u, i), (u = U), (Y = U = null), (e = u !== null))),
          e)
        : !1;
  }
  function $y(t, e) {
    var n = t.ownerDocument.createRange();
    (n.selectNodeContents(t),
      (t = n.getBoundingClientRect()),
      window.scrollTo(
        window.scrollX + t.left,
        e
          ? window.scrollY + t.top
          : window.scrollY + t.bottom - window.innerHeight,
      ));
  }
  Ye.prototype.scrollIntoView = function (t) {
    if (typeof t == "object") throw Error(r(566));
    var e = [];
    p(this._fragmentFiber.child, !1, nf, e, void 0, void 0);
    var n = t !== !1;
    if (e.length === 0) {
      var i = M(this._fragmentFiber);
      if (
        ((i = n ? i[1] || i[0] || S(this._fragmentFiber) : i[0] || i[1]),
        i === null)
      )
        return;
      if (i.tag === 6) {
        ((t = A(i)), $y(t, n));
        return;
      }
      if (((i = A(i)), i.nodeType !== 9)) {
        if (i.nodeType === 11) {
          ((n = "host" in i ? i.host : null),
            n !== null && n.scrollIntoView(t));
          return;
        }
        i.scrollIntoView(t);
      }
    }
    for (i = n ? e.length - 1 : 0; i !== (n ? -1 : e.length);) {
      var s = e[i];
      (s.tag === 6 ? ((s = A(s)), $y(s, n)) : A(s).scrollIntoView(t),
        (i += n ? -1 : 1));
    }
  };
  function kS(t, e) {
    return ((t = A(t)), Wy(t, e), !1);
  }
  function Wy(t, e) {
    (t.reactFragments == null && (t.reactFragments = new Set()),
      t.reactFragments.add(e));
  }
  function Iy(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var s = n[i];
        t.addEventListener(
          s.type,
          s.attachedListener,
          Gi(s.optionsOrUseCapture),
        );
      }
    t.nodeType !== 3 &&
      ((n = e._observers),
      n !== null &&
        n.forEach(function (u) {
          for (var h = 0, x = 0; x < rn.length; x++) {
            var T = rn[x];
            (T.fragmentInstance !== e ||
              T.observer !== u ||
              T.instance !== t) &&
              (rn[h++] = T);
          }
          ((rn.length = h), u.observe(t));
        }),
      Wy(t, e));
  }
  function XS(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var s = n[i];
        t.removeEventListener(
          s.type,
          s.attachedListener,
          Gi(s.optionsOrUseCapture),
        );
      }
    t.nodeType !== 3 &&
      ((n = e._observers),
      n !== null &&
        n.forEach(function (u) {
          typeof u.rootMargin == "string" ? YS(e, u, t) : u.unobserve(t);
        }),
      t.reactFragments != null && t.reactFragments.delete(e));
  }
  function lf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e;) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (lf(n), zs(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function ZS(t, e, n, i) {
    for (; t.nodeType === 1;) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (i) {
        if (!t[dl])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((u = t.getAttribute("rel")),
                u === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== s.rel ||
                t.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                t.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                t.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((u = t.getAttribute("src")),
                (u !== (s.src == null ? null : s.src) ||
                  t.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  t.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  u &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === u) return t;
      } else return t;
      if (((t = Je(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function QS(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3;)
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = Je(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function tg(t, e) {
    for (; t.nodeType !== 8;)
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = Je(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function sf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function of(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function KS(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var i = function () {
        (e(), n.removeEventListener("DOMContentLoaded", i));
      };
      (n.addEventListener("DOMContentLoaded", i), (t._reactRetry = i));
    }
  }
  function Je(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var rf = null;
  function eg(t) {
    t = t.nextSibling;
    for (var e = 0; t;) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return Je(t.nextSibling);
          e--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function ng(t) {
    t = t.previousSibling;
    for (var e = 0; t;) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else (n !== "/$" && n !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function PS(t, e) {
    function n() {
      i = !0;
    }
    if (t.ownerDocument.activeElement === t) return !0;
    var i = !1;
    try {
      (t.ownerDocument.addEventListener("focus", n, !0),
        (t.focus || HTMLElement.prototype.focus).call(t, e));
    } finally {
      t.ownerDocument.removeEventListener("focus", n, !0);
    }
    return i;
  }
  function FS(t) {
    Gy(function () {
      Gy(function (e) {
        return t(e);
      });
    });
  }
  function ag(t, e, n) {
    switch (((e = Pl(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function ig(t, e, n) {
    for (var i in n) {
      var s = n[i];
      n.hasOwnProperty(i) && s != null && Dt(t, e, i, null, CS, s);
    }
    (n.dangerouslySetInnerHTML != null && (t.textContent = ""),
      t.onclick === mn && (t.onclick = null),
      zs(t));
  }
  function uf(t) {
    for (var e = t.attributes; e.length;) t.removeAttributeNode(e[0]);
    zs(t);
  }
  var $e = new Map(),
    lg = new Set();
  function Fl(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Kn = ot.d;
  ot.d = { f: JS, r: $S, D: WS, C: IS, L: t2, m: e2, X: a2, S: n2, M: i2 };
  function JS() {
    var t = Kn.f(),
      e = Uo();
    return t || e;
  }
  function $S(t) {
    var e = oi(t);
    e !== null && e.tag === 5 && e.type === "form" ? op(e) : Kn.r(t);
  }
  var ki = typeof document > "u" ? null : document;
  function sg(t, e, n) {
    var i = ki;
    if (i && typeof e == "string" && e) {
      var s = ke(e);
      ((s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
        lg.has(s) ||
          (lg.add(s),
          (t = { rel: t, crossOrigin: n, href: e }),
          i.querySelector(s) === null &&
            ((e = i.createElement("link")),
            de(e, "link", t),
            ne(e),
            i.head.appendChild(e))));
    }
  }
  function WS(t) {
    (Kn.D(t), sg("dns-prefetch", t, null));
  }
  function IS(t, e) {
    (Kn.C(t, e), sg("preconnect", t, e));
  }
  function t2(t, e, n) {
    Kn.L(t, e, n);
    var i = ki;
    if (i && t && e) {
      var s = 'link[rel="preload"][as="' + ke(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((s += '[imagesrcset="' + ke(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (s += '[imagesizes="' + ke(n.imageSizes) + '"]'))
        : (s += '[href="' + ke(t) + '"]');
      var u = s;
      switch (e) {
        case "style":
          u = Xi(t);
          break;
        case "script":
          u = Zi(t);
      }
      if (!(
        $e.has(u) ||
        ((t = Q(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n,
        )),
        $e.set(u, t),
        i.querySelector(s) !== null ||
          (e === "style" && i.querySelector(Jl(u))) ||
          (e === "script" && i.querySelector($l(u))))
      )) {
        var h = i.createElement("link");
        (de(h, "link", t),
          e === "style" &&
            ((h[Os] = !0),
            (h.onload = h.onerror =
              function () {
                xh(h);
              })),
          ne(h),
          i.head.appendChild(h));
      }
    }
  }
  function e2(t, e) {
    Kn.m(t, e);
    var n = ki;
    if (n && t) {
      var i = e && typeof e.as == "string" ? e.as : "script",
        s =
          'link[rel="modulepreload"][as="' + ke(i) + '"][href="' + ke(t) + '"]',
        u = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Zi(t);
      }
      if (
        !$e.has(u) &&
        ((t = Q({ rel: "modulepreload", href: t }, e)),
        $e.set(u, t),
        n.querySelector(s) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector($l(u))) return;
        }
        ((i = n.createElement("link")),
          de(i, "link", t),
          ne(i),
          n.head.appendChild(i));
      }
    }
  }
  function n2(t, e, n) {
    Kn.S(t, e, n);
    var i = ki;
    if (i && t) {
      var s = ri(i).hoistableStyles,
        u = Xi(t);
      e = e || "default";
      var h = s.get(u);
      if (!h) {
        var x = { loading: 0, preload: null };
        if ((h = i.querySelector(Jl(u)))) x.loading = 5;
        else {
          ((t = Q({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = $e.get(u)) && cf(t, n));
          var T = (h = i.createElement("link"));
          (ne(T),
            de(T, "link", t),
            (T._p = new Promise(function (O, V) {
              ((T.onload = O), (T.onerror = V));
            })),
            T.addEventListener("load", function () {
              x.loading |= 1;
            }),
            T.addEventListener("error", function () {
              x.loading |= 2;
            }),
            (x.loading |= 4),
            ko(h, e, i));
        }
        ((h = { type: "stylesheet", instance: h, count: 1, state: x }),
          s.set(u, h));
      }
    }
  }
  function a2(t, e) {
    Kn.X(t, e);
    var n = ki;
    if (n && t) {
      var i = ri(n).hoistableScripts,
        s = Zi(t),
        u = i.get(s);
      u ||
        ((u = n.querySelector($l(s))),
        u ||
          ((t = Q({ src: t, async: !0 }, e)),
          (e = $e.get(s)) && ff(t, e),
          (u = n.createElement("script")),
          ne(u),
          de(u, "link", t),
          n.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        i.set(s, u));
    }
  }
  function i2(t, e) {
    Kn.M(t, e);
    var n = ki;
    if (n && t) {
      var i = ri(n).hoistableScripts,
        s = Zi(t),
        u = i.get(s);
      u ||
        ((u = n.querySelector($l(s))),
        u ||
          ((t = Q({ src: t, async: !0, type: "module" }, e)),
          (e = $e.get(s)) && ff(t, e),
          (u = n.createElement("script")),
          ne(u),
          de(u, "link", t),
          n.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        i.set(s, u));
    }
  }
  function og(t, e, n, i) {
    var s = (s = Jn.current) ? Fl(s) : null;
    if (!s) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((n = Xi(n.href)),
            (e = ri(s).hoistableStyles),
            (i = e.get(n)),
            i ||
              ((i = { type: "style", instance: null, count: 0, state: null }),
              e.set(n, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = Xi(n.href);
          var u = ri(s).hoistableStyles,
            h = u.get(t);
          if (
            (h ||
              ((s = s.ownerDocument || s),
              (h = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(t, h),
              (u = s.querySelector(Jl(t)))
                ? u._p || ((h.instance = u), (h.state.loading = 5))
                : ((u = $e.get(t)),
                  u ||
                    ((u = {
                      rel: "preload",
                      as: "style",
                      href: n.href,
                      crossOrigin: n.crossOrigin,
                      integrity: n.integrity,
                      media: n.media,
                      hrefLang: n.hrefLang,
                      referrerPolicy: n.referrerPolicy,
                    }),
                    $e.set(t, u)),
                  l2(s, t, u, h.state))),
            e && i === null)
          )
            throw Error(r(528, ""));
          return h;
        }
        if (e && i !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((n = Zi(n)),
              (e = ri(s).hoistableScripts),
              (i = e.get(n)),
              i ||
                ((i = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                e.set(n, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function Xi(t) {
    return 'href="' + ke(t) + '"';
  }
  function Jl(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function rg(t) {
    return Q({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function l2(t, e, n, i) {
    if ((e = t.querySelector('link[rel="preload"][as="style"][' + e + "]"))) {
      if (e[Os] !== !0) {
        i.loading = 1;
        return;
      }
    } else
      ((e = t.createElement("link")),
        (e[Os] = !0),
        (e.onload = e.onerror = xh.bind(null, e)),
        de(e, "link", n),
        ne(e),
        t.head.appendChild(e));
    ((i.preload = e),
      e.addEventListener("load", function () {
        return (i.loading |= 1);
      }),
      e.addEventListener("error", function () {
        return (i.loading |= 2);
      }));
  }
  function Zi(t) {
    return '[src="' + ke(t) + '"]';
  }
  function $l(t) {
    return "script[async]" + t;
  }
  function ug(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var i = t.querySelector('style[data-href~="' + ke(n.href) + '"]');
          if (i) return ((e.instance = i), ne(i), i);
          var s = Q({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (t.ownerDocument || t).createElement("style")),
            ne(i),
            de(i, "style", s),
            ko(i, n.precedence, t),
            (e.instance = i)
          );
        case "stylesheet":
          s = Xi(n.href);
          var u = t.querySelector(Jl(s));
          if (u) return ((e.state.loading |= 4), (e.instance = u), ne(u), u);
          ((i = rg(n)),
            (s = $e.get(s)) && cf(i, s),
            (u = (t.ownerDocument || t).createElement("link")),
            ne(u));
          var h = u;
          return (
            (h._p = new Promise(function (x, T) {
              ((h.onload = x), (h.onerror = T));
            })),
            de(u, "link", i),
            (e.state.loading |= 4),
            ko(u, n.precedence, t),
            (e.instance = u)
          );
        case "script":
          return (
            (u = Zi(n.src)),
            (s = t.querySelector($l(u)))
              ? ((e.instance = s), ne(s), s)
              : ((i = n),
                (s = $e.get(u)) && ((i = Q({}, n)), ff(i, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement("script")),
                ne(s),
                de(s, "link", i),
                t.head.appendChild(s),
                (e.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((i = e.instance), (e.state.loading |= 4), ko(i, n.precedence, t));
    return e.instance;
  }
  function ko(t, e, n) {
    for (
      var i = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        s = i.length ? i[i.length - 1] : null,
        u = s,
        h = 0;
      h < i.length;
      h++
    ) {
      var x = i[h];
      if (x.dataset.precedence === e) u = x;
      else if (u !== s) break;
    }
    u
      ? u.parentNode.insertBefore(t, u.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function cf(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function ff(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var Xo = null;
  function cg(t, e, n) {
    if (Xo === null) {
      var i = new Map(),
        s = (Xo = new Map());
      s.set(n, i);
    } else ((s = Xo), (i = s.get(n)), i || ((i = new Map()), s.set(n, i)));
    if (i.has(t)) return i;
    for (
      i.set(t, null), n = n.getElementsByTagName(t), s = 0;
      s < n.length;
      s++
    ) {
      var u = n[s];
      if (
        !(
          u[dl] ||
          u[oe] ||
          (t === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var h = u.getAttribute(e) || "";
        h = t + h;
        var x = i.get(h);
        x ? x.push(u) : i.set(h, [u]);
      }
    }
    return i;
  }
  function df(t, e, n) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function s2(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        return e.rel === "stylesheet"
          ? ((t = e.disabled), typeof e.precedence == "string" && t == null)
          : !0;
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function fg(t, e) {
    return (
      t === "img" &&
      e.src != null &&
      e.src !== "" &&
      e.onLoad == null &&
      e.loading !== "lazy"
    );
  }
  function dg(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function hg(t) {
    return (
      (t.width || 100) *
      (t.height || 100) *
      (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) *
      0.25
    );
  }
  function mg(t, e) {
    typeof e.decode == "function" &&
      (t.imgCount++,
      e.complete || ((t.imgBytes += hg(e)), t.suspenseyImages.push(e)),
      (t = u2.bind(t)),
      e.decode().then(t, t));
  }
  function o2(t, e, n, i) {
    if (
      n.type === "stylesheet" &&
      (typeof i.media != "string" || matchMedia(i.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var s = Xi(i.href),
          u = e.querySelector(Jl(s));
        if (u) {
          ((e = u._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = Wl.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = u),
            ne(u));
          return;
        }
        ((u = e.ownerDocument || e),
          (i = rg(i)),
          (s = $e.get(s)) && cf(i, s),
          (u = u.createElement("link")),
          ne(u));
        var h = u;
        ((h._p = new Promise(function (x, T) {
          ((h.onload = x), (h.onerror = T));
        })),
          de(u, "link", i),
          (n.instance = u));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++,
          (n = Wl.bind(t)),
          e.addEventListener("load", n),
          e.addEventListener("error", n)));
    }
  }
  var Zo = 0;
  function r2(t, e) {
    return (
      t.stylesheets && t.count === 0 && Ko(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var i = setTimeout(function () {
              if ((t.stylesheets && Ko(t, t.stylesheets), t.unsuspend)) {
                var u = t.unsuspend;
                ((t.unsuspend = null), u());
              }
            }, 6e4 + e);
            0 < t.imgBytes && Zo === 0 && (Zo = 62500 * wS());
            var s = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && Ko(t, t.stylesheets), t.unsuspend))
                ) {
                  var u = t.unsuspend;
                  ((t.unsuspend = null), u());
                }
              },
              (t.imgBytes > Zo ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = n),
              function () {
                ((t.unsuspend = null), clearTimeout(i), clearTimeout(s));
              }
            );
          }
        : null
    );
  }
  function pg(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) Ko(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        ((t.unsuspend = null), e());
      }
    }
  }
  function Wl() {
    (this.count--, pg(this));
  }
  function u2() {
    (this.imgCount--, pg(this));
  }
  var Qo = null;
  function Ko(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Qo = new Map()),
        e.forEach(c2, t),
        (Qo = null),
        Wl.call(t)));
  }
  function c2(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Qo.get(t);
      if (n) var i = n.get(null);
      else {
        ((n = new Map()), Qo.set(t, n));
        for (
          var s = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            u = 0;
          u < s.length;
          u++
        ) {
          var h = s[u];
          (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") &&
            (n.set(h.dataset.precedence, h), (i = h));
        }
        i && n.set(null, i);
      }
      ((s = e.instance),
        (h = s.getAttribute("data-precedence")),
        (u = n.get(h) || i),
        u === i && n.set(null, s),
        n.set(h, s),
        this.count++,
        (i = Wl.bind(this)),
        s.addEventListener("load", i),
        s.addEventListener("error", i),
        u
          ? u.parentNode.insertBefore(s, u.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(s, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var Qi = {
    $$typeof: pt,
    Provider: null,
    Consumer: null,
    _currentValue: zn,
    _currentValue2: zn,
    _threadCount: 0,
  };
  function f2(t, e, n, i, s, u, h, x, T) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Zr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Zr(0)),
      (this.hiddenUpdates = Zr(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = s),
      (this.onCaughtError = u),
      (this.onRecoverableError = h),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = T),
      (this.transitionTypes = null),
      (this.incompleteTransitions = new Map()));
  }
  function yg(t, e, n, i, s, u, h, x, T, O, V, H) {
    return (
      (t = new f2(t, e, n, h, T, O, V, H, x)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = Ce(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = wu()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: i, isDehydrated: n, cache: e }),
      Du(u),
      t
    );
  }
  function gg(t) {
    return t ? ((t = vi), t) : vi;
  }
  function vg(t, e, n, i, s, u) {
    ((s = gg(s)),
      i.context === null ? (i.context = s) : (i.pendingContext = s),
      (i = oa(e)),
      (i.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null && (i.callback = u),
      (n = ra(t, i, e)),
      n !== null && (Re(n, t, e), Ml(n, t, e)));
  }
  function xg(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function hf(t, e) {
    (xg(t, e), (t = t.alternate) && xg(t, e));
  }
  function bg(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Va(t, 67108864);
      (e !== null && Re(e, t, 67108864), hf(t, 67108864));
    }
  }
  function Sg(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = He();
      e = Qr(e);
      var n = Va(t, e);
      (n !== null && Re(n, t, e), hf(t, e));
    }
  }
  var Ki = !0;
  function d2(t, e, n, i) {
    var s = I.T;
    I.T = null;
    var u = ot.p;
    try {
      ((ot.p = 2), mf(t, e, n, i));
    } finally {
      ((ot.p = u), (I.T = s));
    }
  }
  function h2(t, e, n, i) {
    var s = I.T;
    I.T = null;
    var u = ot.p;
    try {
      ((ot.p = 8), mf(t, e, n, i));
    } finally {
      ((ot.p = u), (I.T = s));
    }
  }
  function mf(t, e, n, i) {
    if (Ki) {
      var s = pf(i);
      if (s === null) (Pc(t, e, i, Po, n), Eg(t, i));
      else if (p2(s, t, e, n, i)) i.stopPropagation();
      else if ((Eg(t, i), e & 4 && -1 < m2.indexOf(t))) {
        for (; s !== null;) {
          var u = oi(s);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var h = Da(u.pendingLanes);
                  if (h !== 0) {
                    var x = u;
                    for (x.pendingLanes |= 2, x.entangledLanes |= 2; h;) {
                      var T = 1 << (31 - ze(h));
                      ((x.entanglements[1] |= T), (h &= ~T));
                    }
                    (Cn(u), (wt & 6) === 0 && ((jo = De() + 500), Zl(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((x = Va(u, 2)), x !== null && Re(x, u, 2), Uo(), hf(u, 2));
            }
          if (((u = pf(i)), u === null && Pc(t, e, i, Po, n), u === s)) break;
          s = u;
        }
        s !== null && i.stopPropagation();
      } else Pc(t, e, i, null, n);
    }
  }
  function pf(t) {
    return ((t = Ir(t)), yf(t));
  }
  var Po = null;
  function yf(t) {
    if (((Po = null), (t = Oa(t)), t !== null)) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = f(e)), t !== null)) return t;
          t = null;
        } else if (n === 31) {
          if (((t = m(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((Po = t), null);
  }
  function Tg(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (wx()) {
          case oh:
            return 2;
          case rh:
            return 8;
          case ws:
          case Nx:
            return 32;
          case uh:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var gf = !1,
    ba = null,
    Sa = null,
    Ta = null,
    Il = new Map(),
    ts = new Map(),
    Ea = [],
    m2 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Eg(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        ba = null;
        break;
      case "dragenter":
      case "dragleave":
        Sa = null;
        break;
      case "mouseover":
      case "mouseout":
        Ta = null;
        break;
      case "pointerover":
      case "pointerout":
        Il.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ts.delete(e.pointerId);
    }
  }
  function es(t, e, n, i, s, u) {
    return t === null || t.nativeEvent !== u
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: i,
          nativeEvent: u,
          targetContainers: [s],
        }),
        e !== null && ((e = oi(e)), e !== null && bg(e)),
        t)
      : ((t.eventSystemFlags |= i),
        (e = t.targetContainers),
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t);
  }
  function p2(t, e, n, i, s) {
    switch (e) {
      case "focusin":
        return ((ba = es(ba, t, e, n, i, s)), !0);
      case "dragenter":
        return ((Sa = es(Sa, t, e, n, i, s)), !0);
      case "mouseover":
        return ((Ta = es(Ta, t, e, n, i, s)), !0);
      case "pointerover":
        var u = s.pointerId;
        return (Il.set(u, es(Il.get(u) || null, t, e, n, i, s)), !0);
      case "gotpointercapture":
        return (
          (u = s.pointerId),
          ts.set(u, es(ts.get(u) || null, t, e, n, i, s)),
          !0
        );
    }
    return !1;
  }
  function Cg(t) {
    var e = Oa(t.target);
    if (e !== null) {
      var n = d(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = f(n)), e !== null)) {
            ((t.blockedOn = e),
              yh(t.priority, function () {
                Sg(n);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = m(n)), e !== null)) {
            ((t.blockedOn = e),
              yh(t.priority, function () {
                Sg(n);
              }));
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Fo(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length;) {
      var n = pf(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var i = new n.constructor(n.type, n);
        ((Wr = i), n.target.dispatchEvent(i), (Wr = null));
      } else return ((e = oi(n)), e !== null && bg(e), (t.blockedOn = n), !1);
      e.shift();
    }
    return !0;
  }
  function Ag(t, e, n) {
    Fo(t) && n.delete(e);
  }
  function y2() {
    ((gf = !1),
      ba !== null && Fo(ba) && (ba = null),
      Sa !== null && Fo(Sa) && (Sa = null),
      Ta !== null && Fo(Ta) && (Ta = null),
      Il.forEach(Ag),
      ts.forEach(Ag));
  }
  function Jo(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      gf ||
        ((gf = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, y2)));
  }
  var $o = null;
  function wg(t) {
    $o !== t &&
      (($o = t),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        $o === t && ($o = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            i = t[e + 1],
            s = t[e + 2];
          if (typeof i != "function") {
            if (yf(i || n) === null) continue;
            break;
          }
          var u = oi(n);
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            $u(u, { pending: !0, data: s, method: n.method, action: i }, i, s));
        }
      }));
  }
  function Pi(t) {
    function e(T) {
      return Jo(T, t);
    }
    (ba !== null && Jo(ba, t),
      Sa !== null && Jo(Sa, t),
      Ta !== null && Jo(Ta, t),
      Il.forEach(e),
      ts.forEach(e));
    for (var n = 0; n < Ea.length; n++) {
      var i = Ea[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < Ea.length && ((n = Ea[0]), n.blockedOn === null);)
      (Cg(n), n.blockedOn === null && Ea.shift());
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (i = 0; i < n.length; i += 3) {
        var s = n[i],
          u = n[i + 1],
          h = s[Ee] || null;
        if (typeof u == "function") h || wg(n);
        else if (h) {
          var x = null;
          if (u && u.hasAttribute("formAction")) {
            if (((s = u), (h = u[Ee] || null))) x = h.formAction;
            else if (yf(s) !== null) continue;
          } else x = h.action;
          (typeof x == "function" ? (n[i + 1] = x) : (n.splice(i, 3), (i -= 3)),
            wg(n));
        }
      }
  }
  function Ng() {
    function t(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (h) {
              return (s = h);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (s !== null && (s(), (s = null)), i || setTimeout(n, 20));
    }
    function n() {
      if (!i && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var i = !1,
        s = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(n, 100),
        function () {
          ((i = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            s !== null && (s(), (s = null)));
        }
      );
    }
  }
  function vf(t) {
    this._internalRoot = t;
  }
  ((Wo.prototype.render = vf.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var n = e.current,
        i = He();
      vg(n, i, t, e, null, null);
    }),
    (Wo.prototype.unmount = vf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (vg(t.current, 2, null, t, null, null), Uo(), (e[si] = null));
        }
      }));
  function Wo(t) {
    this._internalRoot = t;
  }
  Wo.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = ph();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Ea.length && e !== 0 && e < Ea[n].priority; n++);
      (Ea.splice(n, 0, t), n === 0 && Cg(t));
    }
  };
  var Rg = l.version;
  if (Rg !== "19.3.0") throw Error(r(527, Rg, "19.3.0"));
  ot.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = v(e)),
      (t = t !== null ? g(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var g2 = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: I,
    reconcilerVersion: "19.3.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Io = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Io.isDisabled && Io.supportsFiber)
      try {
        ((ul = Io.inject(g2)), (Oe = Io));
      } catch {}
  }
  return (
    (as.createRoot = function (t, e) {
      if (!c(t)) throw Error(r(299));
      var n = !1,
        i = "",
        s = gp,
        u = vp,
        h = xp;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (h = e.onRecoverableError)),
        (e = yg(t, 1, !1, null, null, n, i, null, s, u, h, Ng)),
        (t[si] = e.current),
        Kc(t),
        new vf(e)
      );
    }),
    (as.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(r(299));
      var i = !1,
        s = "",
        u = gp,
        h = vp,
        x = xp,
        T = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (h = n.onCaughtError),
          n.onRecoverableError !== void 0 && (x = n.onRecoverableError),
          n.formState !== void 0 && (T = n.formState)),
        (e = yg(t, 1, !0, e, n ?? null, i, s, T, u, h, x, Ng)),
        (e.context = gg(null)),
        (n = e.current),
        (i = He()),
        (i = Qr(i)),
        (s = oa(i)),
        (s.callback = null),
        ra(n, s, i),
        (n = i),
        (e.current.lanes = n),
        fl(e, n),
        Cn(e),
        (t[si] = e.current),
        Kc(t),
        new Wo(e)
      );
    }),
    (as.version = "19.3.0"),
    as
  );
}
var Lg;
function N2() {
  if (Lg) return Sf.exports;
  Lg = 1;
  function a() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return (a(), (Sf.exports = w2()), Sf.exports);
}
var R2 = N2();
var Hg = "popstate";
function Yg(a) {
  return (
    typeof a == "object" &&
    a != null &&
    "pathname" in a &&
    "search" in a &&
    "hash" in a &&
    "state" in a &&
    "key" in a
  );
}
function M2(a = {}) {
  function l(r, c) {
    let d = c.state?.masked,
      { pathname: f, search: m, hash: y } = d || r.location;
    return Zf(
      "",
      { pathname: f, search: m, hash: y },
      (c.state && c.state.usr) || null,
      (c.state && c.state.key) || "default",
      d
        ? {
            pathname: r.location.pathname,
            search: r.location.search,
            hash: r.location.hash,
          }
        : void 0,
    );
  }
  function o(r, c) {
    return typeof c == "string" ? c : fs(c);
  }
  return O2(l, o, null, a);
}
function Ht(a, l) {
  if (a === !1 || a === null || typeof a > "u") throw new Error(l);
}
function tn(a, l) {
  if (!a) {
    typeof console < "u" && console.warn(l);
    try {
      throw new Error(l);
    } catch {}
  }
}
function D2() {
  return Math.random().toString(36).substring(2, 10);
}
function qg(a, l) {
  return {
    usr: a.state,
    key: a.key,
    idx: l,
    masked: a.unstable_mask
      ? { pathname: a.pathname, search: a.search, hash: a.hash }
      : void 0,
  };
}
function Zf(a, l, o = null, r, c) {
  return {
    pathname: typeof a == "string" ? a : a.pathname,
    search: "",
    hash: "",
    ...(typeof l == "string" ? nl(l) : l),
    state: o,
    key: (l && l.key) || r || D2(),
    unstable_mask: c,
  };
}
function fs({ pathname: a = "/", search: l = "", hash: o = "" }) {
  return (
    l && l !== "?" && (a += l.charAt(0) === "?" ? l : "?" + l),
    o && o !== "#" && (a += o.charAt(0) === "#" ? o : "#" + o),
    a
  );
}
function nl(a) {
  let l = {};
  if (a) {
    let o = a.indexOf("#");
    o >= 0 && ((l.hash = a.substring(o)), (a = a.substring(0, o)));
    let r = a.indexOf("?");
    (r >= 0 && ((l.search = a.substring(r)), (a = a.substring(0, r))),
      a && (l.pathname = a));
  }
  return l;
}
function O2(a, l, o, r = {}) {
  let { window: c = document.defaultView, v5Compat: d = !1 } = r,
    f = c.history,
    m = "POP",
    y = null,
    v = g();
  v == null && ((v = 0), f.replaceState({ ...f.state, idx: v }, ""));
  function g() {
    return (f.state || { idx: null }).idx;
  }
  function p() {
    m = "POP";
    let A = g(),
      U = A == null ? null : A - v;
    ((v = A), y && y({ action: m, location: z.location, delta: U }));
  }
  function S(A, U) {
    m = "PUSH";
    let Y = Yg(A) ? A : Zf(z.location, A, U);
    v = g() + 1;
    let B = qg(Y, v),
      q = z.createHref(Y.unstable_mask || Y);
    try {
      f.pushState(B, "", q);
    } catch (K) {
      if (K instanceof DOMException && K.name === "DataCloneError") throw K;
      c.location.assign(q);
    }
    d && y && y({ action: m, location: z.location, delta: 1 });
  }
  function N(A, U) {
    m = "REPLACE";
    let Y = Yg(A) ? A : Zf(z.location, A, U);
    v = g();
    let B = qg(Y, v),
      q = z.createHref(Y.unstable_mask || Y);
    (f.replaceState(B, "", q),
      d && y && y({ action: m, location: z.location, delta: 0 }));
  }
  function M(A) {
    return z2(A);
  }
  let z = {
    get action() {
      return m;
    },
    get location() {
      return a(c, f);
    },
    listen(A) {
      if (y) throw new Error("A history only accepts one active listener");
      return (
        c.addEventListener(Hg, p),
        (y = A),
        () => {
          (c.removeEventListener(Hg, p), (y = null));
        }
      );
    },
    createHref(A) {
      return l(c, A);
    },
    createURL: M,
    encodeLocation(A) {
      let U = M(A);
      return { pathname: U.pathname, search: U.search, hash: U.hash };
    },
    push: S,
    replace: N,
    go(A) {
      return f.go(A);
    },
  };
  return z;
}
function z2(a, l = !1) {
  let o = "http://localhost";
  (typeof window < "u" &&
    (o =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Ht(o, "No window.location.(origin|href) available to create URL"));
  let r = typeof a == "string" ? a : fs(a);
  return (
    (r = r.replace(/ $/, "%20")),
    !l && r.startsWith("//") && (r = o + r),
    new URL(r, o)
  );
}
function dv(a, l, o = "/") {
  return j2(a, l, o, !1);
}
function j2(a, l, o, r) {
  let c = typeof l == "string" ? nl(l) : l,
    d = Fn(c.pathname || "/", o);
  if (d == null) return null;
  let f = hv(a);
  _2(f);
  let m = null;
  for (let y = 0; m == null && y < f.length; ++y) {
    let v = Z2(d);
    m = k2(f[y], v, r);
  }
  return m;
}
function hv(a, l = [], o = [], r = "", c = !1) {
  let d = (f, m, y = c, v) => {
    let g = {
      relativePath: v === void 0 ? f.path || "" : v,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: m,
      route: f,
    };
    if (g.relativePath.startsWith("/")) {
      if (!g.relativePath.startsWith(r) && y) return;
      (Ht(
        g.relativePath.startsWith(r),
        `Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (g.relativePath = g.relativePath.slice(r.length)));
    }
    let p = Nn([r, g.relativePath]),
      S = o.concat(g);
    (f.children &&
      f.children.length > 0 &&
      (Ht(
        f.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${p}".`,
      ),
      hv(f.children, l, S, p, y)),
      !(f.path == null && !f.index) &&
        l.push({ path: p, score: q2(p, f.index), routesMeta: S }));
  };
  return (
    a.forEach((f, m) => {
      if (f.path === "" || !f.path?.includes("?")) d(f, m);
      else for (let y of mv(f.path)) d(f, m, !0, y);
    }),
    l
  );
}
function mv(a) {
  let l = a.split("/");
  if (l.length === 0) return [];
  let [o, ...r] = l,
    c = o.endsWith("?"),
    d = o.replace(/\?$/, "");
  if (r.length === 0) return c ? [d, ""] : [d];
  let f = mv(r.join("/")),
    m = [];
  return (
    m.push(...f.map((y) => (y === "" ? d : [d, y].join("/")))),
    c && m.push(...f),
    m.map((y) => (a.startsWith("/") && y === "" ? "/" : y))
  );
}
function _2(a) {
  a.sort((l, o) =>
    l.score !== o.score
      ? o.score - l.score
      : G2(
          l.routesMeta.map((r) => r.childrenIndex),
          o.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
var V2 = /^:[\w-]+$/,
  U2 = 3,
  B2 = 2,
  L2 = 1,
  H2 = 10,
  Y2 = -2,
  Gg = (a) => a === "*";
function q2(a, l) {
  let o = a.split("/"),
    r = o.length;
  return (
    o.some(Gg) && (r += Y2),
    l && (r += B2),
    o
      .filter((c) => !Gg(c))
      .reduce((c, d) => c + (V2.test(d) ? U2 : d === "" ? L2 : H2), r)
  );
}
function G2(a, l) {
  return a.length === l.length && a.slice(0, -1).every((r, c) => r === l[c])
    ? a[a.length - 1] - l[l.length - 1]
    : 0;
}
function k2(a, l, o = !1) {
  let { routesMeta: r } = a,
    c = {},
    d = "/",
    f = [];
  for (let m = 0; m < r.length; ++m) {
    let y = r[m],
      v = m === r.length - 1,
      g = d === "/" ? l : l.slice(d.length) || "/",
      p = gr(
        { path: y.relativePath, caseSensitive: y.caseSensitive, end: v },
        g,
      ),
      S = y.route;
    if (
      (!p &&
        v &&
        o &&
        !r[r.length - 1].route.index &&
        (p = gr(
          { path: y.relativePath, caseSensitive: y.caseSensitive, end: !1 },
          g,
        )),
      !p)
    )
      return null;
    (Object.assign(c, p.params),
      f.push({
        params: c,
        pathname: Nn([d, p.pathname]),
        pathnameBase: F2(Nn([d, p.pathnameBase])),
        route: S,
      }),
      p.pathnameBase !== "/" && (d = Nn([d, p.pathnameBase])));
  }
  return f;
}
function gr(a, l) {
  typeof a == "string" && (a = { path: a, caseSensitive: !1, end: !0 });
  let [o, r] = X2(a.path, a.caseSensitive, a.end),
    c = l.match(o);
  if (!c) return null;
  let d = c[0],
    f = d.replace(/(.)\/+$/, "$1"),
    m = c.slice(1);
  return {
    params: r.reduce((v, { paramName: g, isOptional: p }, S) => {
      if (g === "*") {
        let M = m[S] || "";
        f = d.slice(0, d.length - M.length).replace(/(.)\/+$/, "$1");
      }
      const N = m[S];
      return (
        p && !N ? (v[g] = void 0) : (v[g] = (N || "").replace(/%2F/g, "/")),
        v
      );
    }, {}),
    pathname: d,
    pathnameBase: f,
    pattern: a,
  };
}
function X2(a, l = !1, o = !0) {
  tn(
    a === "*" || !a.endsWith("*") || a.endsWith("/*"),
    `Route path "${a}" will be treated as if it were "${a.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/, "/*")}".`,
  );
  let r = [],
    c =
      "^" +
      a
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(/\/:([\w-]+)(\?)?/g, (f, m, y, v, g) => {
          if ((r.push({ paramName: m, isOptional: y != null }), y)) {
            let p = g.charAt(v + f.length);
            return p && p !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
          }
          return "/([^\\/]+)";
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    a.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (c += a === "*" || a === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : o
        ? (c += "\\/*$")
        : a !== "" && a !== "/" && (c += "(?:(?=\\/|$))"),
    [new RegExp(c, l ? void 0 : "i"), r]
  );
}
function Z2(a) {
  try {
    return a
      .split("/")
      .map((l) => decodeURIComponent(l).replace(/\//g, "%2F"))
      .join("/");
  } catch (l) {
    return (
      tn(
        !1,
        `The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`,
      ),
      a
    );
  }
}
function Fn(a, l) {
  if (l === "/") return a;
  if (!a.toLowerCase().startsWith(l.toLowerCase())) return null;
  let o = l.endsWith("/") ? l.length - 1 : l.length,
    r = a.charAt(o);
  return r && r !== "/" ? null : a.slice(o) || "/";
}
var Q2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function K2(a, l = "/") {
  let {
      pathname: o,
      search: r = "",
      hash: c = "",
    } = typeof a == "string" ? nl(a) : a,
    d;
  return (
    o
      ? ((o = o.replace(/\/\/+/g, "/")),
        o.startsWith("/") ? (d = kg(o.substring(1), "/")) : (d = kg(o, l)))
      : (d = l),
    { pathname: d, search: J2(r), hash: $2(c) }
  );
}
function kg(a, l) {
  let o = l.replace(/\/+$/, "").split("/");
  return (
    a.split("/").forEach((c) => {
      c === ".." ? o.length > 1 && o.pop() : c !== "." && o.push(c);
    }),
    o.length > 1 ? o.join("/") : "/"
  );
}
function Af(a, l, o, r) {
  return `Cannot include a '${a}' character in a manually specified \`to.${l}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function P2(a) {
  return a.filter(
    (l, o) => o === 0 || (l.route.path && l.route.path.length > 0),
  );
}
function Td(a) {
  let l = P2(a);
  return l.map((o, r) => (r === l.length - 1 ? o.pathname : o.pathnameBase));
}
function Rr(a, l, o, r = !1) {
  let c;
  typeof a == "string"
    ? (c = nl(a))
    : ((c = { ...a }),
      Ht(
        !c.pathname || !c.pathname.includes("?"),
        Af("?", "pathname", "search", c),
      ),
      Ht(
        !c.pathname || !c.pathname.includes("#"),
        Af("#", "pathname", "hash", c),
      ),
      Ht(!c.search || !c.search.includes("#"), Af("#", "search", "hash", c)));
  let d = a === "" || c.pathname === "",
    f = d ? "/" : c.pathname,
    m;
  if (f == null) m = o;
  else {
    let p = l.length - 1;
    if (!r && f.startsWith("..")) {
      let S = f.split("/");
      for (; S[0] === "..";) (S.shift(), (p -= 1));
      c.pathname = S.join("/");
    }
    m = p >= 0 ? l[p] : "/";
  }
  let y = K2(c, m),
    v = f && f !== "/" && f.endsWith("/"),
    g = (d || f === ".") && o.endsWith("/");
  return (!y.pathname.endsWith("/") && (v || g) && (y.pathname += "/"), y);
}
var Nn = (a) => a.join("/").replace(/\/\/+/g, "/"),
  F2 = (a) => a.replace(/\/+$/, "").replace(/^\/*/, "/"),
  J2 = (a) => (!a || a === "?" ? "" : a.startsWith("?") ? a : "?" + a),
  $2 = (a) => (!a || a === "#" ? "" : a.startsWith("#") ? a : "#" + a),
  W2 = class {
    constructor(a, l, o, r = !1) {
      ((this.status = a),
        (this.statusText = l || ""),
        (this.internal = r),
        o instanceof Error
          ? ((this.data = o.toString()), (this.error = o))
          : (this.data = o));
    }
  };
function I2(a) {
  return (
    a != null &&
    typeof a.status == "number" &&
    typeof a.statusText == "string" &&
    typeof a.internal == "boolean" &&
    "data" in a
  );
}
function tT(a) {
  return (
    a
      .map((l) => l.route.path)
      .filter(Boolean)
      .join("/")
      .replace(/\/\/*/g, "/") || "/"
  );
}
var pv =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function yv(a, l) {
  let o = a;
  if (typeof o != "string" || !Q2.test(o))
    return { absoluteURL: void 0, isExternal: !1, to: o };
  let r = o,
    c = !1;
  if (pv)
    try {
      let d = new URL(window.location.href),
        f = o.startsWith("//") ? new URL(d.protocol + o) : new URL(o),
        m = Fn(f.pathname, l);
      f.origin === d.origin && m != null
        ? (o = m + f.search + f.hash)
        : (c = !0);
    } catch {
      tn(
        !1,
        `<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: r, isExternal: c, to: o };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var gv = ["POST", "PUT", "PATCH", "DELETE"];
new Set(gv);
var eT = ["GET", ...gv];
new Set(eT);
var al = E.createContext(null);
al.displayName = "DataRouter";
var Mr = E.createContext(null);
Mr.displayName = "DataRouterState";
var nT = E.createContext(!1),
  vv = E.createContext({ isTransitioning: !1 });
vv.displayName = "ViewTransition";
var aT = E.createContext(new Map());
aT.displayName = "Fetchers";
var iT = E.createContext(null);
iT.displayName = "Await";
var Ge = E.createContext(null);
Ge.displayName = "Navigation";
var ys = E.createContext(null);
ys.displayName = "Location";
var Dn = E.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Dn.displayName = "Route";
var Ed = E.createContext(null);
Ed.displayName = "RouteError";
var xv = "REACT_ROUTER_ERROR",
  lT = "REDIRECT",
  sT = "ROUTE_ERROR_RESPONSE";
function oT(a) {
  if (a.startsWith(`${xv}:${lT}:{`))
    try {
      let l = JSON.parse(a.slice(28));
      if (
        typeof l == "object" &&
        l &&
        typeof l.status == "number" &&
        typeof l.statusText == "string" &&
        typeof l.location == "string" &&
        typeof l.reloadDocument == "boolean" &&
        typeof l.replace == "boolean"
      )
        return l;
    } catch {}
}
function rT(a) {
  if (a.startsWith(`${xv}:${sT}:{`))
    try {
      let l = JSON.parse(a.slice(40));
      if (
        typeof l == "object" &&
        l &&
        typeof l.status == "number" &&
        typeof l.statusText == "string"
      )
        return new W2(l.status, l.statusText, l.data);
    } catch {}
}
function uT(a, { relative: l } = {}) {
  Ht(
    il(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: o, navigator: r } = E.useContext(Ge),
    { hash: c, pathname: d, search: f } = gs(a, { relative: l }),
    m = d;
  return (
    o !== "/" && (m = d === "/" ? o : Nn([o, d])),
    r.createHref({ pathname: m, search: f, hash: c })
  );
}
function il() {
  return E.useContext(ys) != null;
}
function On() {
  return (
    Ht(
      il(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    E.useContext(ys).location
  );
}
var bv =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Sv(a) {
  E.useContext(Ge).static || E.useLayoutEffect(a);
}
function Cd() {
  let { isDataRoute: a } = E.useContext(Dn);
  return a ? TT() : cT();
}
function cT() {
  Ht(
    il(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let a = E.useContext(al),
    { basename: l, navigator: o } = E.useContext(Ge),
    { matches: r } = E.useContext(Dn),
    { pathname: c } = On(),
    d = JSON.stringify(Td(r)),
    f = E.useRef(!1);
  return (
    Sv(() => {
      f.current = !0;
    }),
    E.useCallback(
      (y, v = {}) => {
        if ((tn(f.current, bv), !f.current)) return;
        if (typeof y == "number") {
          o.go(y);
          return;
        }
        let g = Rr(y, JSON.parse(d), c, v.relative === "path");
        (a == null &&
          l !== "/" &&
          (g.pathname = g.pathname === "/" ? l : Nn([l, g.pathname])),
          (v.replace ? o.replace : o.push)(g, v.state, v));
      },
      [l, o, d, c, a],
    )
  );
}
E.createContext(null);
function gs(a, { relative: l } = {}) {
  let { matches: o } = E.useContext(Dn),
    { pathname: r } = On(),
    c = JSON.stringify(Td(o));
  return E.useMemo(() => Rr(a, JSON.parse(c), r, l === "path"), [a, c, r, l]);
}
function fT(a, l) {
  return Tv(a, l);
}
function Tv(a, l, o) {
  Ht(
    il(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: r } = E.useContext(Ge),
    { matches: c } = E.useContext(Dn),
    d = c[c.length - 1],
    f = d ? d.params : {},
    m = d ? d.pathname : "/",
    y = d ? d.pathnameBase : "/",
    v = d && d.route;
  {
    let A = (v && v.path) || "";
    Cv(
      m,
      !v || A.endsWith("*") || A.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A === "/" ? "*" : `${A}/*`}">.`,
    );
  }
  let g = On(),
    p;
  if (l) {
    let A = typeof l == "string" ? nl(l) : l;
    (Ht(
      y === "/" || A.pathname?.startsWith(y),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${A.pathname}" was given in the \`location\` prop.`,
    ),
      (p = A));
  } else p = g;
  let S = p.pathname || "/",
    N = S;
  if (y !== "/") {
    let A = y.replace(/^\//, "").split("/");
    N = "/" + S.replace(/^\//, "").split("/").slice(A.length).join("/");
  }
  let M = dv(a, { pathname: N });
  (tn(
    v || M != null,
    `No routes matched location "${p.pathname}${p.search}${p.hash}" `,
  ),
    tn(
      M == null ||
        M[M.length - 1].route.element !== void 0 ||
        M[M.length - 1].route.Component !== void 0 ||
        M[M.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let z = yT(
    M &&
      M.map((A) =>
        Object.assign({}, A, {
          params: Object.assign({}, f, A.params),
          pathname: Nn([
            y,
            r.encodeLocation
              ? r.encodeLocation(
                  A.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23"),
                ).pathname
              : A.pathname,
          ]),
          pathnameBase:
            A.pathnameBase === "/"
              ? y
              : Nn([
                  y,
                  r.encodeLocation
                    ? r.encodeLocation(
                        A.pathnameBase
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23"),
                      ).pathname
                    : A.pathnameBase,
                ]),
        }),
      ),
    c,
    o,
  );
  return l && z
    ? E.createElement(
        ys.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              unstable_mask: void 0,
              ...p,
            },
            navigationType: "POP",
          },
        },
        z,
      )
    : z;
}
function dT() {
  let a = ST(),
    l = I2(a)
      ? `${a.status} ${a.statusText}`
      : a instanceof Error
        ? a.message
        : JSON.stringify(a),
    o = a instanceof Error ? a.stack : null,
    r = "rgba(200,200,200, 0.5)",
    c = { padding: "0.5rem", backgroundColor: r },
    d = { padding: "2px 4px", backgroundColor: r },
    f = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", a),
    (f = E.createElement(
      E.Fragment,
      null,
      E.createElement("p", null, "💿 Hey developer 👋"),
      E.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        E.createElement("code", { style: d }, "ErrorBoundary"),
        " or",
        " ",
        E.createElement("code", { style: d }, "errorElement"),
        " prop on your route.",
      ),
    )),
    E.createElement(
      E.Fragment,
      null,
      E.createElement("h2", null, "Unexpected Application Error!"),
      E.createElement("h3", { style: { fontStyle: "italic" } }, l),
      o ? E.createElement("pre", { style: c }, o) : null,
      f,
    )
  );
}
var hT = E.createElement(dT, null),
  Ev = class extends E.Component {
    constructor(a) {
      (super(a),
        (this.state = {
          location: a.location,
          revalidation: a.revalidation,
          error: a.error,
        }));
    }
    static getDerivedStateFromError(a) {
      return { error: a };
    }
    static getDerivedStateFromProps(a, l) {
      return l.location !== a.location ||
        (l.revalidation !== "idle" && a.revalidation === "idle")
        ? { error: a.error, location: a.location, revalidation: a.revalidation }
        : {
            error: a.error !== void 0 ? a.error : l.error,
            location: l.location,
            revalidation: a.revalidation || l.revalidation,
          };
    }
    componentDidCatch(a, l) {
      this.props.onError
        ? this.props.onError(a, l)
        : console.error(
            "React Router caught the following error during render",
            a,
          );
    }
    render() {
      let a = this.state.error;
      if (
        this.context &&
        typeof a == "object" &&
        a &&
        "digest" in a &&
        typeof a.digest == "string"
      ) {
        const o = rT(a.digest);
        o && (a = o);
      }
      let l =
        a !== void 0
          ? E.createElement(
              Dn.Provider,
              { value: this.props.routeContext },
              E.createElement(Ed.Provider, {
                value: a,
                children: this.props.component,
              }),
            )
          : this.props.children;
      return this.context ? E.createElement(mT, { error: a }, l) : l;
    }
  };
Ev.contextType = nT;
var wf = new WeakMap();
function mT({ children: a, error: l }) {
  let { basename: o } = E.useContext(Ge);
  if (
    typeof l == "object" &&
    l &&
    "digest" in l &&
    typeof l.digest == "string"
  ) {
    let r = oT(l.digest);
    if (r) {
      let c = wf.get(l);
      if (c) throw c;
      let d = yv(r.location, o);
      if (pv && !wf.get(l))
        if (d.isExternal || r.reloadDocument)
          window.location.href = d.absoluteURL || d.to;
        else {
          const f = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(d.to, {
              replace: r.replace,
            }),
          );
          throw (wf.set(l, f), f);
        }
      return E.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${d.absoluteURL || d.to}`,
      });
    }
  }
  return a;
}
function pT({ routeContext: a, match: l, children: o }) {
  let r = E.useContext(al);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (l.route.errorElement || l.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = l.route.id),
    E.createElement(Dn.Provider, { value: a }, o)
  );
}
function yT(a, l = [], o) {
  let r = o?.state;
  if (a == null) {
    if (!r) return null;
    if (r.errors) a = r.matches;
    else if (l.length === 0 && !r.initialized && r.matches.length > 0)
      a = r.matches;
    else return null;
  }
  let c = a,
    d = r?.errors;
  if (d != null) {
    let g = c.findIndex((p) => p.route.id && d?.[p.route.id] !== void 0);
    (Ht(
      g >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`,
    ),
      (c = c.slice(0, Math.min(c.length, g + 1))));
  }
  let f = !1,
    m = -1;
  if (o && r) {
    f = r.renderFallback;
    for (let g = 0; g < c.length; g++) {
      let p = c[g];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (m = g),
        p.route.id)
      ) {
        let { loaderData: S, errors: N } = r,
          M =
            p.route.loader &&
            !S.hasOwnProperty(p.route.id) &&
            (!N || N[p.route.id] === void 0);
        if (p.route.lazy || M) {
          (o.isStatic && (f = !0),
            m >= 0 ? (c = c.slice(0, m + 1)) : (c = [c[0]]));
          break;
        }
      }
    }
  }
  let y = o?.onError,
    v =
      r && y
        ? (g, p) => {
            y(g, {
              location: r.location,
              params: r.matches?.[0]?.params ?? {},
              unstable_pattern: tT(r.matches),
              errorInfo: p,
            });
          }
        : void 0;
  return c.reduceRight((g, p, S) => {
    let N,
      M = !1,
      z = null,
      A = null;
    r &&
      ((N = d && p.route.id ? d[p.route.id] : void 0),
      (z = p.route.errorElement || hT),
      f &&
        (m < 0 && S === 0
          ? (Cv(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (M = !0),
            (A = null))
          : m === S &&
            ((M = !0), (A = p.route.hydrateFallbackElement || null))));
    let U = l.concat(c.slice(0, S + 1)),
      Y = () => {
        let B;
        return (
          N
            ? (B = z)
            : M
              ? (B = A)
              : p.route.Component
                ? (B = E.createElement(p.route.Component, null))
                : p.route.element
                  ? (B = p.route.element)
                  : (B = g),
          E.createElement(pT, {
            match: p,
            routeContext: { outlet: g, matches: U, isDataRoute: r != null },
            children: B,
          })
        );
      };
    return r && (p.route.ErrorBoundary || p.route.errorElement || S === 0)
      ? E.createElement(Ev, {
          location: r.location,
          revalidation: r.revalidation,
          component: z,
          error: N,
          children: Y(),
          routeContext: { outlet: null, matches: U, isDataRoute: !0 },
          onError: v,
        })
      : Y();
  }, null);
}
function Ad(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function gT(a) {
  let l = E.useContext(al);
  return (Ht(l, Ad(a)), l);
}
function vT(a) {
  let l = E.useContext(Mr);
  return (Ht(l, Ad(a)), l);
}
function xT(a) {
  let l = E.useContext(Dn);
  return (Ht(l, Ad(a)), l);
}
function wd(a) {
  let l = xT(a),
    o = l.matches[l.matches.length - 1];
  return (
    Ht(
      o.route.id,
      `${a} can only be used on routes that contain a unique "id"`,
    ),
    o.route.id
  );
}
function bT() {
  return wd("useRouteId");
}
function ST() {
  let a = E.useContext(Ed),
    l = vT("useRouteError"),
    o = wd("useRouteError");
  return a !== void 0 ? a : l.errors?.[o];
}
function TT() {
  let { router: a } = gT("useNavigate"),
    l = wd("useNavigate"),
    o = E.useRef(!1);
  return (
    Sv(() => {
      o.current = !0;
    }),
    E.useCallback(
      async (c, d = {}) => {
        (tn(o.current, bv),
          o.current &&
            (typeof c == "number"
              ? await a.navigate(c)
              : await a.navigate(c, { fromRouteId: l, ...d })));
      },
      [a, l],
    )
  );
}
var Xg = {};
function Cv(a, l, o) {
  !l && !Xg[a] && ((Xg[a] = !0), tn(!1, o));
}
E.memo(ET);
function ET({ routes: a, future: l, state: o, isStatic: r, onError: c }) {
  return Tv(a, void 0, { state: o, isStatic: r, onError: c });
}
function CT({ to: a, replace: l, state: o, relative: r }) {
  Ht(
    il(),
    "<Navigate> may be used only in the context of a <Router> component.",
  );
  let { static: c } = E.useContext(Ge);
  tn(
    !c,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.",
  );
  let { matches: d } = E.useContext(Dn),
    { pathname: f } = On(),
    m = Cd(),
    y = Rr(a, Td(d), f, r === "path"),
    v = JSON.stringify(y);
  return (
    E.useEffect(() => {
      m(JSON.parse(v), { replace: l, state: o, relative: r });
    }, [m, v, r, l, o]),
    null
  );
}
function sr(a) {
  Ht(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function AT({
  basename: a = "/",
  children: l = null,
  location: o,
  navigationType: r = "POP",
  navigator: c,
  static: d = !1,
  unstable_useTransitions: f,
}) {
  Ht(
    !il(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let m = a.replace(/^\/*/, "/"),
    y = E.useMemo(
      () => ({
        basename: m,
        navigator: c,
        static: d,
        unstable_useTransitions: f,
        future: {},
      }),
      [m, c, d, f],
    );
  typeof o == "string" && (o = nl(o));
  let {
      pathname: v = "/",
      search: g = "",
      hash: p = "",
      state: S = null,
      key: N = "default",
      unstable_mask: M,
    } = o,
    z = E.useMemo(() => {
      let A = Fn(v, m);
      return A == null
        ? null
        : {
            location: {
              pathname: A,
              search: g,
              hash: p,
              state: S,
              key: N,
              unstable_mask: M,
            },
            navigationType: r,
          };
    }, [m, v, g, p, S, N, r, M]);
  return (
    tn(
      z != null,
      `<Router basename="${m}"> is not able to match the URL "${v}${g}${p}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    z == null
      ? null
      : E.createElement(
          Ge.Provider,
          { value: y },
          E.createElement(ys.Provider, { children: l, value: z }),
        )
  );
}
function wT({ children: a, location: l }) {
  return fT(Qf(a), l);
}
function Qf(a, l = []) {
  let o = [];
  return (
    E.Children.forEach(a, (r, c) => {
      if (!E.isValidElement(r)) return;
      let d = [...l, c];
      if (r.type === E.Fragment) {
        o.push.apply(o, Qf(r.props.children, d));
        return;
      }
      (Ht(
        r.type === sr,
        `[${typeof r.type == "string" ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        Ht(
          !r.props.index || !r.props.children,
          "An index route cannot have child routes.",
        ));
      let f = {
        id: r.props.id || d.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        middleware: r.props.middleware,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.hasErrorBoundary === !0 ||
          r.props.ErrorBoundary != null ||
          r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (f.children = Qf(r.props.children, d)), o.push(f));
    }),
    o
  );
}
var or = "get",
  rr = "application/x-www-form-urlencoded";
function Dr(a) {
  return typeof HTMLElement < "u" && a instanceof HTMLElement;
}
function NT(a) {
  return Dr(a) && a.tagName.toLowerCase() === "button";
}
function RT(a) {
  return Dr(a) && a.tagName.toLowerCase() === "form";
}
function MT(a) {
  return Dr(a) && a.tagName.toLowerCase() === "input";
}
function DT(a) {
  return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
}
function OT(a, l) {
  return a.button === 0 && (!l || l === "_self") && !DT(a);
}
function Kf(a = "") {
  return new URLSearchParams(
    typeof a == "string" || Array.isArray(a) || a instanceof URLSearchParams
      ? a
      : Object.keys(a).reduce((l, o) => {
          let r = a[o];
          return l.concat(Array.isArray(r) ? r.map((c) => [o, c]) : [[o, r]]);
        }, []),
  );
}
function zT(a, l) {
  let o = Kf(a);
  return (
    l &&
      l.forEach((r, c) => {
        o.has(c) ||
          l.getAll(c).forEach((d) => {
            o.append(c, d);
          });
      }),
    o
  );
}
var tr = null;
function jT() {
  if (tr === null)
    try {
      (new FormData(document.createElement("form"), 0), (tr = !1));
    } catch {
      tr = !0;
    }
  return tr;
}
var _T = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Nf(a) {
  return a != null && !_T.has(a)
    ? (tn(
        !1,
        `"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rr}"`,
      ),
      null)
    : a;
}
function VT(a, l) {
  let o, r, c, d, f;
  if (RT(a)) {
    let m = a.getAttribute("action");
    ((r = m ? Fn(m, l) : null),
      (o = a.getAttribute("method") || or),
      (c = Nf(a.getAttribute("enctype")) || rr),
      (d = new FormData(a)));
  } else if (NT(a) || (MT(a) && (a.type === "submit" || a.type === "image"))) {
    let m = a.form;
    if (m == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let y = a.getAttribute("formaction") || m.getAttribute("action");
    if (
      ((r = y ? Fn(y, l) : null),
      (o = a.getAttribute("formmethod") || m.getAttribute("method") || or),
      (c =
        Nf(a.getAttribute("formenctype")) ||
        Nf(m.getAttribute("enctype")) ||
        rr),
      (d = new FormData(m, a)),
      !jT())
    ) {
      let { name: v, type: g, value: p } = a;
      if (g === "image") {
        let S = v ? `${v}.` : "";
        (d.append(`${S}x`, "0"), d.append(`${S}y`, "0"));
      } else v && d.append(v, p);
    }
  } else {
    if (Dr(a))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((o = or), (r = null), (c = rr), (f = a));
  }
  return (
    d && c === "text/plain" && ((f = d), (d = void 0)),
    { action: r, method: o.toLowerCase(), encType: c, formData: d, body: f }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Nd(a, l) {
  if (a === !1 || a === null || typeof a > "u") throw new Error(l);
}
function UT(a, l, o, r) {
  let c =
    typeof a == "string"
      ? new URL(
          a,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : a;
  return (
    o
      ? c.pathname.endsWith("/")
        ? (c.pathname = `${c.pathname}_.${r}`)
        : (c.pathname = `${c.pathname}.${r}`)
      : c.pathname === "/"
        ? (c.pathname = `_root.${r}`)
        : l && Fn(c.pathname, l) === "/"
          ? (c.pathname = `${l.replace(/\/$/, "")}/_root.${r}`)
          : (c.pathname = `${c.pathname.replace(/\/$/, "")}.${r}`),
    c
  );
}
async function BT(a, l) {
  if (a.id in l) return l[a.id];
  try {
    let o = await import(a.module);
    return ((l[a.id] = o), o);
  } catch (o) {
    return (
      console.error(
        `Error loading route module \`${a.module}\`, reloading page...`,
      ),
      console.error(o),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function LT(a) {
  return a == null
    ? !1
    : a.href == null
      ? a.rel === "preload" &&
        typeof a.imageSrcSet == "string" &&
        typeof a.imageSizes == "string"
      : typeof a.rel == "string" && typeof a.href == "string";
}
async function HT(a, l, o) {
  let r = await Promise.all(
    a.map(async (c) => {
      let d = l.routes[c.route.id];
      if (d) {
        let f = await BT(d, o);
        return f.links ? f.links() : [];
      }
      return [];
    }),
  );
  return kT(
    r
      .flat(1)
      .filter(LT)
      .filter((c) => c.rel === "stylesheet" || c.rel === "preload")
      .map((c) =>
        c.rel === "stylesheet"
          ? { ...c, rel: "prefetch", as: "style" }
          : { ...c, rel: "prefetch" },
      ),
  );
}
function Zg(a, l, o, r, c, d) {
  let f = (y, v) => (o[v] ? y.route.id !== o[v].route.id : !0),
    m = (y, v) =>
      o[v].pathname !== y.pathname ||
      (o[v].route.path?.endsWith("*") && o[v].params["*"] !== y.params["*"]);
  return d === "assets"
    ? l.filter((y, v) => f(y, v) || m(y, v))
    : d === "data"
      ? l.filter((y, v) => {
          let g = r.routes[y.route.id];
          if (!g || !g.hasLoader) return !1;
          if (f(y, v) || m(y, v)) return !0;
          if (y.route.shouldRevalidate) {
            let p = y.route.shouldRevalidate({
              currentUrl: new URL(
                c.pathname + c.search + c.hash,
                window.origin,
              ),
              currentParams: o[0]?.params || {},
              nextUrl: new URL(a, window.origin),
              nextParams: y.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof p == "boolean") return p;
          }
          return !0;
        })
      : [];
}
function YT(a, l, { includeHydrateFallback: o } = {}) {
  return qT(
    a
      .map((r) => {
        let c = l.routes[r.route.id];
        if (!c) return [];
        let d = [c.module];
        return (
          c.clientActionModule && (d = d.concat(c.clientActionModule)),
          c.clientLoaderModule && (d = d.concat(c.clientLoaderModule)),
          o &&
            c.hydrateFallbackModule &&
            (d = d.concat(c.hydrateFallbackModule)),
          c.imports && (d = d.concat(c.imports)),
          d
        );
      })
      .flat(1),
  );
}
function qT(a) {
  return [...new Set(a)];
}
function GT(a) {
  let l = {},
    o = Object.keys(a).sort();
  for (let r of o) l[r] = a[r];
  return l;
}
function kT(a, l) {
  let o = new Set();
  return (
    new Set(l),
    a.reduce((r, c) => {
      let d = JSON.stringify(GT(c));
      return (o.has(d) || (o.add(d), r.push({ key: d, link: c })), r);
    }, [])
  );
}
function Av() {
  let a = E.useContext(al);
  return (
    Nd(
      a,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    a
  );
}
function XT() {
  let a = E.useContext(Mr);
  return (
    Nd(
      a,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    a
  );
}
var Rd = E.createContext(void 0);
Rd.displayName = "FrameworkContext";
function wv() {
  let a = E.useContext(Rd);
  return (
    Nd(a, "You must render this element inside a <HydratedRouter> element"),
    a
  );
}
function ZT(a, l) {
  let o = E.useContext(Rd),
    [r, c] = E.useState(!1),
    [d, f] = E.useState(!1),
    {
      onFocus: m,
      onBlur: y,
      onMouseEnter: v,
      onMouseLeave: g,
      onTouchStart: p,
    } = l,
    S = E.useRef(null);
  (E.useEffect(() => {
    if ((a === "render" && f(!0), a === "viewport")) {
      let z = (U) => {
          U.forEach((Y) => {
            f(Y.isIntersecting);
          });
        },
        A = new IntersectionObserver(z, { threshold: 0.5 });
      return (
        S.current && A.observe(S.current),
        () => {
          A.disconnect();
        }
      );
    }
  }, [a]),
    E.useEffect(() => {
      if (r) {
        let z = setTimeout(() => {
          f(!0);
        }, 100);
        return () => {
          clearTimeout(z);
        };
      }
    }, [r]));
  let N = () => {
      c(!0);
    },
    M = () => {
      (c(!1), f(!1));
    };
  return o
    ? a !== "intent"
      ? [d, S, {}]
      : [
          d,
          S,
          {
            onFocus: is(m, N),
            onBlur: is(y, M),
            onMouseEnter: is(v, N),
            onMouseLeave: is(g, M),
            onTouchStart: is(p, N),
          },
        ]
    : [!1, S, {}];
}
function is(a, l) {
  return (o) => {
    (a && a(o), o.defaultPrevented || l(o));
  };
}
function QT({ page: a, ...l }) {
  let { router: o } = Av(),
    r = E.useMemo(() => dv(o.routes, a, o.basename), [o.routes, a, o.basename]);
  return r ? E.createElement(PT, { page: a, matches: r, ...l }) : null;
}
function KT(a) {
  let { manifest: l, routeModules: o } = wv(),
    [r, c] = E.useState([]);
  return (
    E.useEffect(() => {
      let d = !1;
      return (
        HT(a, l, o).then((f) => {
          d || c(f);
        }),
        () => {
          d = !0;
        }
      );
    }, [a, l, o]),
    r
  );
}
function PT({ page: a, matches: l, ...o }) {
  let r = On(),
    { future: c, manifest: d, routeModules: f } = wv(),
    { basename: m } = Av(),
    { loaderData: y, matches: v } = XT(),
    g = E.useMemo(() => Zg(a, l, v, d, r, "data"), [a, l, v, d, r]),
    p = E.useMemo(() => Zg(a, l, v, d, r, "assets"), [a, l, v, d, r]),
    S = E.useMemo(() => {
      if (a === r.pathname + r.search + r.hash) return [];
      let z = new Set(),
        A = !1;
      if (
        (l.forEach((Y) => {
          let B = d.routes[Y.route.id];
          !B ||
            !B.hasLoader ||
            ((!g.some((q) => q.route.id === Y.route.id) &&
              Y.route.id in y &&
              f[Y.route.id]?.shouldRevalidate) ||
            B.hasClientLoader
              ? (A = !0)
              : z.add(Y.route.id));
        }),
        z.size === 0)
      )
        return [];
      let U = UT(a, m, c.unstable_trailingSlashAwareDataRequests, "data");
      return (
        A &&
          z.size > 0 &&
          U.searchParams.set(
            "_routes",
            l
              .filter((Y) => z.has(Y.route.id))
              .map((Y) => Y.route.id)
              .join(","),
          ),
        [U.pathname + U.search]
      );
    }, [m, c.unstable_trailingSlashAwareDataRequests, y, r, d, g, l, a, f]),
    N = E.useMemo(() => YT(p, d), [p, d]),
    M = KT(p);
  return E.createElement(
    E.Fragment,
    null,
    S.map((z) =>
      E.createElement("link", {
        key: z,
        rel: "prefetch",
        as: "fetch",
        href: z,
        ...o,
      }),
    ),
    N.map((z) =>
      E.createElement("link", { key: z, rel: "modulepreload", href: z, ...o }),
    ),
    M.map(({ key: z, link: A }) =>
      E.createElement("link", {
        key: z,
        nonce: o.nonce,
        ...A,
        crossOrigin: A.crossOrigin ?? o.crossOrigin,
      }),
    ),
  );
}
function FT(...a) {
  return (l) => {
    a.forEach((o) => {
      typeof o == "function" ? o(l) : o != null && (o.current = l);
    });
  };
}
var JT =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  JT && (window.__reactRouterVersion = "7.13.1");
} catch {}
function $T({
  basename: a,
  children: l,
  unstable_useTransitions: o,
  window: r,
}) {
  let c = E.useRef();
  c.current == null && (c.current = M2({ window: r, v5Compat: !0 }));
  let d = c.current,
    [f, m] = E.useState({ action: d.action, location: d.location }),
    y = E.useCallback(
      (v) => {
        o === !1 ? m(v) : E.startTransition(() => m(v));
      },
      [o],
    );
  return (
    E.useLayoutEffect(() => d.listen(y), [d, y]),
    E.createElement(AT, {
      basename: a,
      children: l,
      location: f.location,
      navigationType: f.action,
      navigator: d,
      unstable_useTransitions: o,
    })
  );
}
var Nv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Md = E.forwardRef(function (
    {
      onClick: l,
      discover: o = "render",
      prefetch: r = "none",
      relative: c,
      reloadDocument: d,
      replace: f,
      unstable_mask: m,
      state: y,
      target: v,
      to: g,
      preventScrollReset: p,
      viewTransition: S,
      unstable_defaultShouldRevalidate: N,
      ...M
    },
    z,
  ) {
    let {
        basename: A,
        navigator: U,
        unstable_useTransitions: Y,
      } = E.useContext(Ge),
      B = typeof g == "string" && Nv.test(g),
      q = yv(g, A);
    g = q.to;
    let K = uT(g, { relative: c }),
      tt = On(),
      Q = null;
    if (m) {
      let pt = Rr(
        m,
        [],
        tt.unstable_mask ? tt.unstable_mask.pathname : "/",
        !0,
      );
      (A !== "/" &&
        (pt.pathname = pt.pathname === "/" ? A : Nn([A, pt.pathname])),
        (Q = U.createHref(pt)));
    }
    let [G, it, F] = ZT(r, M),
      dt = eE(g, {
        replace: f,
        unstable_mask: m,
        state: y,
        target: v,
        preventScrollReset: p,
        relative: c,
        viewTransition: S,
        unstable_defaultShouldRevalidate: N,
        unstable_useTransitions: Y,
      });
    function St(pt) {
      (l && l(pt), pt.defaultPrevented || dt(pt));
    }
    let Xt = !(q.isExternal || d),
      Zt = E.createElement("a", {
        ...M,
        ...F,
        href: (Xt ? Q : void 0) || q.absoluteURL || K,
        onClick: Xt ? St : l,
        ref: FT(z, it),
        target: v,
        "data-discover": !B && o === "render" ? "true" : void 0,
      });
    return G && !B
      ? E.createElement(E.Fragment, null, Zt, E.createElement(QT, { page: K }))
      : Zt;
  });
Md.displayName = "Link";
var WT = E.forwardRef(function (
  {
    "aria-current": l = "page",
    caseSensitive: o = !1,
    className: r = "",
    end: c = !1,
    style: d,
    to: f,
    viewTransition: m,
    children: y,
    ...v
  },
  g,
) {
  let p = gs(f, { relative: v.relative }),
    S = On(),
    N = E.useContext(Mr),
    { navigator: M, basename: z } = E.useContext(Ge),
    A = N != null && oE(p) && m === !0,
    U = M.encodeLocation ? M.encodeLocation(p).pathname : p.pathname,
    Y = S.pathname,
    B =
      N && N.navigation && N.navigation.location
        ? N.navigation.location.pathname
        : null;
  (o ||
    ((Y = Y.toLowerCase()),
    (B = B ? B.toLowerCase() : null),
    (U = U.toLowerCase())),
    B && z && (B = Fn(B, z) || B));
  const q = U !== "/" && U.endsWith("/") ? U.length - 1 : U.length;
  let K = Y === U || (!c && Y.startsWith(U) && Y.charAt(q) === "/"),
    tt =
      B != null &&
      (B === U || (!c && B.startsWith(U) && B.charAt(U.length) === "/")),
    Q = { isActive: K, isPending: tt, isTransitioning: A },
    G = K ? l : void 0,
    it;
  typeof r == "function"
    ? (it = r(Q))
    : (it = [
        r,
        K ? "active" : null,
        tt ? "pending" : null,
        A ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let F = typeof d == "function" ? d(Q) : d;
  return E.createElement(
    Md,
    {
      ...v,
      "aria-current": G,
      className: it,
      ref: g,
      style: F,
      to: f,
      viewTransition: m,
    },
    typeof y == "function" ? y(Q) : y,
  );
});
WT.displayName = "NavLink";
var IT = E.forwardRef(
  (
    {
      discover: a = "render",
      fetcherKey: l,
      navigate: o,
      reloadDocument: r,
      replace: c,
      state: d,
      method: f = or,
      action: m,
      onSubmit: y,
      relative: v,
      preventScrollReset: g,
      viewTransition: p,
      unstable_defaultShouldRevalidate: S,
      ...N
    },
    M,
  ) => {
    let { unstable_useTransitions: z } = E.useContext(Ge),
      A = lE(),
      U = sE(m, { relative: v }),
      Y = f.toLowerCase() === "get" ? "get" : "post",
      B = typeof m == "string" && Nv.test(m),
      q = (K) => {
        if ((y && y(K), K.defaultPrevented)) return;
        K.preventDefault();
        let tt = K.nativeEvent.submitter,
          Q = tt?.getAttribute("formmethod") || f,
          G = () =>
            A(tt || K.currentTarget, {
              fetcherKey: l,
              method: Q,
              navigate: o,
              replace: c,
              state: d,
              relative: v,
              preventScrollReset: g,
              viewTransition: p,
              unstable_defaultShouldRevalidate: S,
            });
        z && o !== !1 ? E.startTransition(() => G()) : G();
      };
    return E.createElement("form", {
      ref: M,
      method: Y,
      action: U,
      onSubmit: r ? y : q,
      ...N,
      "data-discover": !B && a === "render" ? "true" : void 0,
    });
  },
);
IT.displayName = "Form";
function tE(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Rv(a) {
  let l = E.useContext(al);
  return (Ht(l, tE(a)), l);
}
function eE(
  a,
  {
    target: l,
    replace: o,
    unstable_mask: r,
    state: c,
    preventScrollReset: d,
    relative: f,
    viewTransition: m,
    unstable_defaultShouldRevalidate: y,
    unstable_useTransitions: v,
  } = {},
) {
  let g = Cd(),
    p = On(),
    S = gs(a, { relative: f });
  return E.useCallback(
    (N) => {
      if (OT(N, l)) {
        N.preventDefault();
        let M = o !== void 0 ? o : fs(p) === fs(S),
          z = () =>
            g(a, {
              replace: M,
              unstable_mask: r,
              state: c,
              preventScrollReset: d,
              relative: f,
              viewTransition: m,
              unstable_defaultShouldRevalidate: y,
            });
        v ? E.startTransition(() => z()) : z();
      }
    },
    [p, g, S, o, r, c, l, a, d, f, m, y, v],
  );
}
function nE(a) {
  tn(
    typeof URLSearchParams < "u",
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.",
  );
  let l = E.useRef(Kf(a)),
    o = E.useRef(!1),
    r = On(),
    c = E.useMemo(() => zT(r.search, o.current ? null : l.current), [r.search]),
    d = Cd(),
    f = E.useCallback(
      (m, y) => {
        const v = Kf(typeof m == "function" ? m(new URLSearchParams(c)) : m);
        ((o.current = !0), d("?" + v, y));
      },
      [d, c],
    );
  return [c, f];
}
var aE = 0,
  iE = () => `__${String(++aE)}__`;
function lE() {
  let { router: a } = Rv("useSubmit"),
    { basename: l } = E.useContext(Ge),
    o = bT(),
    r = a.fetch,
    c = a.navigate;
  return E.useCallback(
    async (d, f = {}) => {
      let { action: m, method: y, encType: v, formData: g, body: p } = VT(d, l);
      if (f.navigate === !1) {
        let S = f.fetcherKey || iE();
        await r(S, o, f.action || m, {
          unstable_defaultShouldRevalidate: f.unstable_defaultShouldRevalidate,
          preventScrollReset: f.preventScrollReset,
          formData: g,
          body: p,
          formMethod: f.method || y,
          formEncType: f.encType || v,
          flushSync: f.flushSync,
        });
      } else
        await c(f.action || m, {
          unstable_defaultShouldRevalidate: f.unstable_defaultShouldRevalidate,
          preventScrollReset: f.preventScrollReset,
          formData: g,
          body: p,
          formMethod: f.method || y,
          formEncType: f.encType || v,
          replace: f.replace,
          state: f.state,
          fromRouteId: o,
          flushSync: f.flushSync,
          viewTransition: f.viewTransition,
        });
    },
    [r, c, l, o],
  );
}
function sE(a, { relative: l } = {}) {
  let { basename: o } = E.useContext(Ge),
    r = E.useContext(Dn);
  Ht(r, "useFormAction must be used inside a RouteContext");
  let [c] = r.matches.slice(-1),
    d = { ...gs(a || ".", { relative: l }) },
    f = On();
  if (a == null) {
    d.search = f.search;
    let m = new URLSearchParams(d.search),
      y = m.getAll("index");
    if (y.some((g) => g === "")) {
      (m.delete("index"),
        y.filter((p) => p).forEach((p) => m.append("index", p)));
      let g = m.toString();
      d.search = g ? `?${g}` : "";
    }
  }
  return (
    (!a || a === ".") &&
      c.route.index &&
      (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
    o !== "/" && (d.pathname = d.pathname === "/" ? o : Nn([o, d.pathname])),
    fs(d)
  );
}
function oE(a, { relative: l } = {}) {
  let o = E.useContext(vv);
  Ht(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: r } = Rv("useViewTransitionState"),
    c = gs(a, { relative: l });
  if (!o.isTransitioning) return !1;
  let d = Fn(o.currentLocation.pathname, r) || o.currentLocation.pathname,
    f = Fn(o.nextLocation.pathname, r) || o.nextLocation.pathname;
  return gr(c.pathname, f) != null || gr(c.pathname, d) != null;
}
const rE = [
    {
      name: "Grey",
      swatch: "#454545",
      image: "/images/trinity-charcoal-1.png",
      back: "/images/trinity-charcoal-1.jpg",
      front: "/images/trinity-charcoal-front.png",
    },
    {
      name: "Navy",
      swatch: "#1e2a44",
      image: "/images/trinity-navy-2.png",
      back: "/images/trinity-navy-1.jpg",
      front: "/images/trinity-navy-front.png",
    },
    {
      name: "Black",
      swatch: "#1c1c1c",
      image: "/images/trinity-obsidian-1.png",
      back: "/images/trinity-obsidian-2.png",
      front: "/images/trinity-obsidian-3.png",
    },
    {
      name: "White",
      swatch: "#ffffff",
      image: "/images/trinity-white-1.png",
      back: "/images/trinity-bone-2.jpg",
      front: "/images/trinity-bone-front.png",
    },
  ],
  uE = [
    {
      name: "Grey",
      swatch: "#8d8a84",
      image: "/images/worn-grey.png",
      back: "/images/guardian-stone-back.png",
      front: "/images/guardian-stone-front.png",
    },
    {
      name: "Navy",
      swatch: "#1e2a44",
      image: "/images/guardian-navy-1.png",
      back: "/images/guardian-navy-2.png",
      front: "/images/guardian-navy-front.png",
    },
    {
      name: "Black",
      swatch: "#1c1c1c",
      image: "/images/guardian-obsidian-1.png",
      back: "/images/guardian-obsidian-2.png",
      front: "/images/guardian-obsidian-3.png",
    },
    {
      name: "White",
      swatch: "#ffffff",
      image: "/images/guardian-wings-1.png",
      back: "/images/guardian-wings-2.png",
      front: "/images/guardian-wings-3.png",
    },
  ],
  Pf = [
    {
      id: "trinity-black",
      name: "The Trinity Hoodie",
      subtitle: "The Father · The Son · The Holy Spirit",
      price: 65,
      compareAt: 75,
      description:
        "The heavyweight hoodie that started it all. Arched scripture across the back, an embroidered dove on the hood. Now in three garment-washed colourways.",
      details: [
        "14oz heavyweight cotton fleece, garment-washed",
        "Oversized boxy fit, dropped shoulders",
        "Back print: The Father, The Son, The Holy Spirit",
        "Embroidered dove on the hood, woven sleeve label",
      ],
      colors: rE,
      tag: "Pre-order",
    },
    {
      id: "angel-grey",
      name: "The Guardian Hoodie",
      subtitle: "Winged guardian · florals · grace",
      price: 65,
      compareAt: 75,
      description:
        "A hoodie etched with a winged guardian wrapped in flowers. Quiet from the front, a cathedral across the back. Available in three tonal colourways.",
      details: [
        "14oz heavyweight cotton fleece, garment-washed",
        "Oversized boxy fit, dropped shoulders",
        "Guardian angel & floral line-art back print",
        "Tonal all-over monogram, woven sleeve label",
      ],
      colors: uE,
      tag: "Pre-order",
    },
  ],
  Mv = ["S", "M", "L", "XL"],
  Dv = (a) => [a.image, a.back, ...(a.front ? [a.front] : [])],
  Ov = (a) => Pf.find((l) => l.id === a) ?? Pf[0],
  zv = E.createContext(null),
  jv = "holy-trinity-cart",
  cE = (a, l, o) => `${a}__${l}__${o}`;
function fE() {
  try {
    const a = window.localStorage.getItem(jv);
    if (!a) return [];
    const l = JSON.parse(a);
    return Array.isArray(l.lines) ? l.lines : [];
  } catch {
    return [];
  }
}
function dE({ children: a }) {
  const [l, o] = E.useState(!1),
    [r, c] = E.useState([]),
    [d, f] = E.useState(null),
    [m, y] = E.useState(!1);
  (E.useEffect(() => {
    (c(fE()), y(!0));
  }, []),
    E.useEffect(() => {
      if (m)
        try {
          window.localStorage.setItem(jv, JSON.stringify({ lines: r }));
        } catch {}
    }, [r, m]));
  const v = E.useCallback((A, U, Y) => {
      const B = Ov(A),
        q = B.colors.find((tt) => tt.name === Y) ?? B.colors[0],
        K = cE(B.id, U, q.name);
      (c((tt) =>
        tt.find((G) => G.id === K)
          ? tt.map((G) => (G.id === K ? { ...G, qty: G.qty + 1 } : G))
          : [
              ...tt,
              {
                id: K,
                product: {
                  id: B.id,
                  name: B.name,
                  subtitle: B.subtitle,
                  price: B.price,
                  compareAt: B.compareAt,
                  description: B.description,
                  details: B.details,
                  tag: B.tag,
                  image: q.image,
                  color: q.name,
                },
                size: U,
                color: q.name,
                qty: 1,
              },
            ],
      ),
        o(!0),
        f(`${B.name} · ${q.name} (${U}) added`));
    }, []),
    g = E.useCallback((A) => {
      c((U) => U.filter((Y) => Y.id !== A));
    }, []),
    p = E.useCallback((A, U) => {
      c((Y) =>
        Y.map((B) => (B.id === A ? { ...B, qty: Math.max(1, U) } : B)).filter(
          (B) => B.qty > 0,
        ),
      );
    }, []),
    S = E.useCallback(() => f(null), []),
    N = E.useMemo(() => r.reduce((A, U) => A + U.qty, 0), [r]),
    M = E.useMemo(
      () => r.reduce((A, U) => A + U.qty * U.product.price, 0),
      [r],
    ),
    z = E.useMemo(
      () => ({
        open: l,
        lines: r,
        toast: d,
        itemCount: N,
        subtotal: M,
        setOpen: o,
        add: v,
        remove: g,
        setQty: p,
        clearToast: S,
      }),
      [l, r, d, N, M, v, g, p, S],
    );
  return b.jsx(zv.Provider, {
    value: z,
    "data-source-loc": "src/lib/cart.tsx:152:9",
    children: a,
  });
}
function vs() {
  const a = E.useContext(zv);
  if (!a) throw new Error("useCart must be used within a CartProvider");
  return a;
}
const _v = (...a) =>
  a
    .filter((l, o, r) => !!l && l.trim() !== "" && r.indexOf(l) === o)
    .join(" ")
    .trim();
const hE = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mE = (a) =>
  a.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, o, r) =>
    r ? r.toUpperCase() : o.toLowerCase(),
  );
const Qg = (a) => {
  const l = mE(a);
  return l.charAt(0).toUpperCase() + l.slice(1);
};
var pE = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const yE = (a) => {
  for (const l in a)
    if (l.startsWith("aria-") || l === "role" || l === "title") return !0;
  return !1;
};
const gE = E.forwardRef(
  (
    {
      color: a = "currentColor",
      size: l = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: r,
      className: c = "",
      children: d,
      iconNode: f,
      ...m
    },
    y,
  ) =>
    E.createElement(
      "svg",
      {
        ref: y,
        ...pE,
        width: l,
        height: l,
        stroke: a,
        strokeWidth: r ? (Number(o) * 24) / Number(l) : o,
        className: _v("lucide", c),
        ...(!d && !yE(m) && { "aria-hidden": "true" }),
        ...m,
      },
      [
        ...f.map(([v, g]) => E.createElement(v, g)),
        ...(Array.isArray(d) ? d : [d]),
      ],
    ),
);
const Me = (a, l) => {
  const o = E.forwardRef(({ className: r, ...c }, d) =>
    E.createElement(gE, {
      ref: d,
      iconNode: l,
      className: _v(`lucide-${hE(Qg(a))}`, `lucide-${a}`, r),
      ...c,
    }),
  );
  return ((o.displayName = Qg(a)), o);
};
const vE = [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }],
  ],
  xE = Me("arrow-left", vE);
const bE = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  Vv = Me("check", bE);
const SE = [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp",
      },
    ],
  ],
  TE = Me("external-link", SE);
const EE = [
    [
      "path",
      {
        d: "M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z",
        key: "18jl4k",
      },
    ],
    ["path", { d: "M16 8 2 22", key: "vp34q" }],
    ["path", { d: "M17.5 15H9", key: "1oz8nu" }],
  ],
  CE = Me("feather", EE);
const AE = [
    [
      "path",
      {
        d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
        key: "mvr1a0",
      },
    ],
  ],
  wE = Me("heart", AE);
const NE = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  RE = Me("mail", NE);
const ME = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  DE = Me("menu", ME);
const OE = [["path", { d: "M5 12h14", key: "1ays0h" }]],
  zE = Me("minus", OE);
const jE = [
    [
      "path",
      {
        d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
        key: "e79jfc",
      },
    ],
    [
      "circle",
      { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" },
    ],
    [
      "circle",
      { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" },
    ],
    [
      "circle",
      { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" },
    ],
    [
      "circle",
      { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" },
    ],
  ],
  _E = Me("palette", jE);
const VE = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ],
  Uv = Me("plus", VE);
const UE = [
    [
      "path",
      {
        d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",
        key: "1wgbhj",
      },
    ],
  ],
  BE = Me("shirt", UE);
const LE = [
    ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
    ["path", { d: "M3.103 6.034h17.794", key: "awc11p" }],
    [
      "path",
      {
        d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
        key: "o988cm",
      },
    ],
  ],
  Dd = Me("shopping-bag", LE);
const HE = [
    ["path", { d: "M12 4v16", key: "1654pz" }],
    ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
    ["path", { d: "M9 20h6", key: "s66wpe" }],
  ],
  YE = Me("type", HE);
const qE = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Bv = Me("x", qE);
function Kg({ className: a }) {
  return b.jsxs("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    className: a,
    "data-source-loc": "src/components/Nav.tsx:7:4",
    children: [
      b.jsx("rect", {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        "data-source-loc": "src/components/Nav.tsx:17:6",
      }),
      b.jsx("path", {
        d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
        "data-source-loc": "src/components/Nav.tsx:18:6",
      }),
      b.jsx("line", {
        x1: "17.5",
        x2: "17.51",
        y1: "6.5",
        y2: "6.5",
        "data-source-loc": "src/components/Nav.tsx:19:6",
      }),
    ],
  });
}
function Pg({ className: a }) {
  return b.jsxs("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    className: a,
    "data-source-loc": "src/components/Nav.tsx:26:4",
    children: [
      b.jsx("rect", {
        width: "24",
        height: "24",
        rx: "5.5",
        fill: "#010101",
        "data-source-loc": "src/components/Nav.tsx:32:6",
      }),
      b.jsx("path", {
        d: "M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-2.98v11.5a2.5 2.5 0 1 1-2.5-2.5c.3 0 .6.06.88.16V9.62a5.46 5.46 0 0 0-.88-.06 5.46 5.46 0 1 0 5.46 5.46V9.3a7.2 7.2 0 0 0 4.24 1.38V7.7a4.28 4.28 0 0 1-3.16-1.88Z",
        fill: "#25F4EE",
        opacity: "0.9",
        transform: "translate(-0.45 0.45)",
        "data-source-loc": "src/components/Nav.tsx:33:6",
      }),
      b.jsx("path", {
        d: "M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-2.98v11.5a2.5 2.5 0 1 1-2.5-2.5c.3 0 .6.06.88.16V9.62a5.46 5.46 0 0 0-.88-.06 5.46 5.46 0 1 0 5.46 5.46V9.3a7.2 7.2 0 0 0 4.24 1.38V7.7a4.28 4.28 0 0 1-3.16-1.88Z",
        fill: "#FE2C55",
        opacity: "0.9",
        transform: "translate(0.45 -0.45)",
        "data-source-loc": "src/components/Nav.tsx:39:6",
      }),
      b.jsx("path", {
        d: "M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-2.98v11.5a2.5 2.5 0 1 1-2.5-2.5c.3 0 .6.06.88.16V9.62a5.46 5.46 0 0 0-.88-.06 5.46 5.46 0 1 0 5.46 5.46V9.3a7.2 7.2 0 0 0 4.24 1.38V7.7a4.28 4.28 0 0 1-3.16-1.88Z",
        fill: "#FFFFFF",
        "data-source-loc": "src/components/Nav.tsx:45:6",
      }),
    ],
  });
}
const Fg = [
  { label: "Collection", href: "#collection" },
  { label: "The Story", href: "#story" },
  { label: "Pre-order", href: "#preorder" },
  { label: "Contact", href: "#contact" },
];
function GE() {
  const { itemCount: a, setOpen: l } = vs(),
    [o, r] = E.useState(!1),
    [c, d] = E.useState(!1);
  return (
    E.useEffect(() => {
      const f = () => r(window.scrollY > 24);
      return (
        f(),
        window.addEventListener("scroll", f, { passive: !0 }),
        () => window.removeEventListener("scroll", f)
      );
    }, []),
    b.jsxs("header", {
      className: `fixed top-0 inset-x-0 z-40 transition-all duration-300 ${o ? "bg-bone/90 backdrop-blur-md border-b border-line" : "bg-transparent"}`,
      "data-source-loc": "src/components/Nav.tsx:73:4",
      children: [
        b.jsxs("nav", {
          className:
            "mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between",
          "data-source-loc": "src/components/Nav.tsx:80:6",
          children: [
            b.jsxs("a", {
              href: "#top",
              className: "flex items-center gap-2.5 text-ink",
              "aria-label": "Holy Trinity home",
              "data-source-loc": "src/components/Nav.tsx:81:8",
              children: [
                b.jsx("img", {
                  src: "/images/cross-emblem.png",
                  alt: "",
                  "aria-hidden": !0,
                  className: "h-7 w-auto mix-blend-multiply",
                  "data-source-loc": "src/components/Nav.tsx:86:10",
                }),
                b.jsx("span", {
                  className: "wordmark text-[13px] sm:text-sm",
                  "data-source-loc": "src/components/Nav.tsx:92:10",
                  children: "Holy Trinity",
                }),
              ],
            }),
            b.jsx("ul", {
              className: "hidden md:flex items-center gap-9",
              "data-source-loc": "src/components/Nav.tsx:95:8",
              children: Fg.map((f) =>
                f.label === "Contact"
                  ? b.jsxs(
                      "li",
                      {
                        className: "flex items-center gap-4",
                        "data-source-loc": "src/components/Nav.tsx:98:14",
                        children: [
                          b.jsx("a", {
                            href: f.href,
                            className:
                              "text-[13px] uppercase tracking-[0.18em] text-ink-soft hover:text-ink transition-colors",
                            "data-source-loc": "src/components/Nav.tsx:99:16",
                            children: f.label,
                          }),
                          b.jsx("a", {
                            href: "https://www.instagram.com/holytrinityclo",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label": "Holy Trinity on Instagram",
                            className:
                              "text-ink-soft hover:text-ink transition-colors",
                            "data-source-loc": "src/components/Nav.tsx:105:16",
                            children: b.jsx(Kg, {
                              className: "w-5 h-5",
                              "data-source-loc":
                                "src/components/Nav.tsx:112:18",
                            }),
                          }),
                          b.jsx("a", {
                            href: "https://www.tiktok.com/@holy_trinityofficial",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label": "Holy Trinity on TikTok",
                            className:
                              "text-ink-soft hover:text-ink transition-colors",
                            "data-source-loc": "src/components/Nav.tsx:114:16",
                            children: b.jsx(Pg, {
                              className: "w-5 h-5",
                              "data-source-loc":
                                "src/components/Nav.tsx:121:18",
                            }),
                          }),
                        ],
                      },
                      f.href,
                    )
                  : b.jsx(
                      "li",
                      {
                        "data-source-loc": "src/components/Nav.tsx:125:14",
                        children: b.jsx("a", {
                          href: f.href,
                          className:
                            "text-[13px] uppercase tracking-[0.18em] text-ink-soft hover:text-ink transition-colors",
                          "data-source-loc": "src/components/Nav.tsx:126:16",
                          children: f.label,
                        }),
                      },
                      f.href,
                    ),
              ),
            }),
            b.jsxs("div", {
              className: "flex items-center gap-2",
              "data-source-loc": "src/components/Nav.tsx:137:8",
              children: [
                b.jsxs("button", {
                  onClick: () => l(!0),
                  className:
                    "relative flex items-center gap-2 px-3 py-2 text-ink hover:opacity-70 transition",
                  "aria-label": `Open cart, ${a} items`,
                  "data-source-loc": "src/components/Nav.tsx:138:10",
                  children: [
                    b.jsx(Dd, {
                      className: "w-5 h-5",
                      strokeWidth: 1.6,
                      "data-source-loc": "src/components/Nav.tsx:143:12",
                    }),
                    a > 0 &&
                      b.jsx("span", {
                        className:
                          "absolute -top-0.5 -right-0.5 grid place-items-center w-4 h-4 rounded-full bg-ink text-bone text-[10px] font-semibold",
                        "data-source-loc": "src/components/Nav.tsx:145:14",
                        children: a,
                      }),
                  ],
                }),
                b.jsx("button", {
                  className: "md:hidden p-2 text-ink",
                  onClick: () => d((f) => !f),
                  "aria-label": "Toggle menu",
                  "aria-expanded": c,
                  "data-source-loc": "src/components/Nav.tsx:150:10",
                  children: c
                    ? b.jsx(Bv, {
                        className: "w-5 h-5",
                        "data-source-loc": "src/components/Nav.tsx:157:14",
                      })
                    : b.jsx(DE, {
                        className: "w-5 h-5",
                        "data-source-loc": "src/components/Nav.tsx:159:14",
                      }),
                }),
              ],
            }),
          ],
        }),
        c &&
          b.jsx("div", {
            className: "md:hidden bg-bone border-b border-line",
            "data-source-loc": "src/components/Nav.tsx:166:8",
            children: b.jsx("ul", {
              className: "px-5 py-3 flex flex-col",
              "data-source-loc": "src/components/Nav.tsx:167:10",
              children: Fg.map((f) =>
                f.label === "Contact"
                  ? b.jsxs(
                      "li",
                      {
                        "data-source-loc": "src/components/Nav.tsx:170:16",
                        children: [
                          b.jsx("a", {
                            href: f.href,
                            onClick: () => d(!1),
                            className:
                              "block py-3 text-sm uppercase tracking-[0.18em] text-ink-soft",
                            "data-source-loc": "src/components/Nav.tsx:171:18",
                            children: f.label,
                          }),
                          b.jsxs("div", {
                            className: "flex items-center gap-5 pb-3 pl-0.5",
                            "data-source-loc": "src/components/Nav.tsx:178:18",
                            children: [
                              b.jsx("a", {
                                href: "https://www.instagram.com/holytrinityclo",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": "Holy Trinity on Instagram",
                                className:
                                  "text-ink-soft hover:text-ink transition-colors",
                                "data-source-loc":
                                  "src/components/Nav.tsx:179:20",
                                children: b.jsx(Kg, {
                                  className: "w-5 h-5",
                                  "data-source-loc":
                                    "src/components/Nav.tsx:186:22",
                                }),
                              }),
                              b.jsx("a", {
                                href: "https://www.tiktok.com/@holy_trinityofficial",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": "Holy Trinity on TikTok",
                                className:
                                  "text-ink-soft hover:text-ink transition-colors",
                                "data-source-loc":
                                  "src/components/Nav.tsx:188:20",
                                children: b.jsx(Pg, {
                                  className: "w-5 h-5",
                                  "data-source-loc":
                                    "src/components/Nav.tsx:195:22",
                                }),
                              }),
                            ],
                          }),
                        ],
                      },
                      f.href,
                    )
                  : b.jsx(
                      "li",
                      {
                        "data-source-loc": "src/components/Nav.tsx:200:16",
                        children: b.jsx("a", {
                          href: f.href,
                          onClick: () => d(!1),
                          className:
                            "block py-3 text-sm uppercase tracking-[0.18em] text-ink-soft",
                          "data-source-loc": "src/components/Nav.tsx:201:18",
                          children: f.label,
                        }),
                      },
                      f.href,
                    ),
              ),
            }),
          }),
      ],
    })
  );
}
const Od = E.createContext({});
function zd(a) {
  const l = E.useRef(null);
  return (l.current === null && (l.current = a()), l.current);
}
const kE = typeof window < "u",
  Lv = kE ? E.useLayoutEffect : E.useEffect,
  Or = E.createContext(null);
function jd(a, l) {
  a.indexOf(l) === -1 && a.push(l);
}
function vr(a, l) {
  const o = a.indexOf(l);
  o > -1 && a.splice(o, 1);
}
const Mn = (a, l, o) => (o > l ? l : o < a ? a : o);
let zr = () => {};
const wa = {},
  Hv = (a) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a),
  Yv = (a) => typeof a == "object" && a !== null,
  qv = (a) => /^0[^.\s]+$/u.test(a);
function Gv(a) {
  let l;
  return () => (l === void 0 && (l = a()), l);
}
const Ie = (a) => a,
  xs = (...a) => a.reduce((l, o) => (r) => o(l(r))),
  ds = (a, l, o) => {
    const r = l - a;
    return r ? (o - a) / r : 1;
  };
class _d {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return (jd(this.subscriptions, l), () => vr(this.subscriptions, l));
  }
  notify(l, o, r) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](l, o, r);
      else
        for (let d = 0; d < c; d++) {
          const f = this.subscriptions[d];
          f && f(l, o, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const qe = (a) => a * 1e3,
  We = (a) => a / 1e3,
  kv = (a, l) => (l ? a * (1e3 / l) : 0),
  Xv = (a, l, o) =>
    (((1 - 3 * o + 3 * l) * a + (3 * o - 6 * l)) * a + 3 * l) * a,
  XE = 1e-7,
  ZE = 12;
function QE(a, l, o, r, c) {
  let d,
    f,
    m = 0;
  do ((f = l + (o - l) / 2), (d = Xv(f, r, c) - a), d > 0 ? (o = f) : (l = f));
  while (Math.abs(d) > XE && ++m < ZE);
  return f;
}
function bs(a, l, o, r) {
  if (a === l && o === r) return Ie;
  const c = (d) => QE(d, 0, 1, a, o);
  return (d) => (d === 0 || d === 1 ? d : Xv(c(d), l, r));
}
const Zv = (a) => (l) => (l <= 0.5 ? a(2 * l) / 2 : (2 - a(2 * (1 - l))) / 2),
  Qv = (a) => (l) => 1 - a(1 - l),
  Kv = bs(0.33, 1.53, 0.69, 0.99),
  Vd = Qv(Kv),
  Pv = Zv(Vd),
  Fv = (a) =>
    a >= 1
      ? 1
      : (a *= 2) < 1
        ? 0.5 * Vd(a)
        : 0.5 * (2 - Math.pow(2, -10 * (a - 1))),
  Ud = (a) => 1 - Math.sin(Math.acos(a)),
  Jv = Qv(Ud),
  $v = Zv(Ud),
  KE = bs(0.42, 0, 1, 1),
  PE = bs(0, 0, 0.58, 1),
  Wv = bs(0.42, 0, 0.58, 1),
  FE = (a) => Array.isArray(a) && typeof a[0] != "number",
  Iv = (a) => Array.isArray(a) && typeof a[0] == "number",
  JE = {
    linear: Ie,
    easeIn: KE,
    easeInOut: Wv,
    easeOut: PE,
    circIn: Ud,
    circInOut: $v,
    circOut: Jv,
    backIn: Vd,
    backInOut: Pv,
    backOut: Kv,
    anticipate: Fv,
  },
  $E = (a) => typeof a == "string",
  Jg = (a) => {
    if (Iv(a)) {
      zr(a.length === 4);
      const [l, o, r, c] = a;
      return bs(l, o, r, c);
    } else if ($E(a)) return JE[a];
    return a;
  },
  er = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function WE(a) {
  let l = new Set(),
    o = new Set(),
    r = !1,
    c = !1;
  const d = new WeakSet();
  let f = { delta: 0, timestamp: 0, isProcessing: !1 };
  function m(v) {
    (d.has(v) && (y.schedule(v), a()), v(f));
  }
  const y = {
    schedule: (v, g = !1, p = !1) => {
      const N = p && r ? l : o;
      return (g && d.add(v), N.add(v), v);
    },
    cancel: (v) => {
      (o.delete(v), d.delete(v));
    },
    process: (v) => {
      if (((f = v), r)) {
        c = !0;
        return;
      }
      r = !0;
      const g = l;
      ((l = o),
        (o = g),
        l.forEach(m),
        l.clear(),
        (r = !1),
        c && ((c = !1), y.process(v)));
    },
  };
  return y;
}
const IE = 40;
function t1(a, l) {
  let o = !1,
    r = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (o = !0),
    f = er.reduce((B, q) => ((B[q] = WE(d)), B), {}),
    {
      setup: m,
      read: y,
      resolveKeyframes: v,
      preUpdate: g,
      update: p,
      preRender: S,
      render: N,
      postRender: M,
    } = f,
    z = () => {
      const B = wa.useManualTiming,
        q = B ? c.timestamp : performance.now();
      ((o = !1),
        B ||
          (c.delta = r ? 1e3 / 60 : Math.max(Math.min(q - c.timestamp, IE), 1)),
        (c.timestamp = q),
        (c.isProcessing = !0),
        m.process(c),
        y.process(c),
        v.process(c),
        g.process(c),
        p.process(c),
        S.process(c),
        N.process(c),
        M.process(c),
        (c.isProcessing = !1),
        o && l && ((r = !1), a(z)));
    },
    A = () => {
      ((o = !0), (r = !0), c.isProcessing || a(z));
    };
  return {
    schedule: er.reduce((B, q) => {
      const K = f[q];
      return (
        (B[q] = (tt, Q = !1, G = !1) => (o || A(), K.schedule(tt, Q, G))),
        B
      );
    }, {}),
    cancel: (B) => {
      for (let q = 0; q < er.length; q++) f[er[q]].cancel(B);
    },
    state: c,
    steps: f,
  };
}
const {
  schedule: _t,
  cancel: Na,
  state: me,
  steps: Rf,
} = t1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ie, !0);
let ur;
function tC() {
  ur = void 0;
}
const Se = {
    now: () => (
      ur === void 0 &&
        Se.set(
          me.isProcessing || wa.useManualTiming
            ? me.timestamp
            : performance.now(),
        ),
      ur
    ),
    set: (a) => {
      ((ur = a), queueMicrotask(tC));
    },
  },
  e1 = (a) => (l) => typeof l == "string" && l.startsWith(a),
  n1 = e1("--"),
  eC = e1("var(--"),
  Bd = (a) => (eC(a) ? nC.test(a.split("/*")[0].trim()) : !1),
  nC =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function $g(a) {
  return typeof a != "string" ? !1 : a.split("/*")[0].includes("var(--");
}
const ll = {
    test: (a) => typeof a == "number",
    parse: parseFloat,
    transform: (a) => a,
  },
  hs = { ...ll, transform: (a) => Mn(0, 1, a) },
  nr = { ...ll, default: 1 },
  os = (a) => Math.round(a * 1e5) / 1e5,
  Ld = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function aC(a) {
  return a == null;
}
const iC =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Hd = (a, l) => (o) =>
    !!(
      (typeof o == "string" && iC.test(o) && o.startsWith(a)) ||
      (l && !aC(o) && Object.prototype.hasOwnProperty.call(o, l))
    ),
  a1 = (a, l, o) => (r) => {
    if (typeof r != "string") return r;
    const [c, d, f, m] = r.match(Ld);
    return {
      [a]: parseFloat(c),
      [l]: parseFloat(d),
      [o]: parseFloat(f),
      alpha: m !== void 0 ? parseFloat(m) : 1,
    };
  },
  lC = (a) => Mn(0, 255, a),
  Mf = { ...ll, transform: (a) => Math.round(lC(a)) },
  ei = {
    test: Hd("rgb", "red"),
    parse: a1("red", "green", "blue"),
    transform: ({ red: a, green: l, blue: o, alpha: r = 1 }) =>
      "rgba(" +
      Mf.transform(a) +
      ", " +
      Mf.transform(l) +
      ", " +
      Mf.transform(o) +
      ", " +
      os(hs.transform(r)) +
      ")",
  };
function sC(a) {
  let l = "",
    o = "",
    r = "",
    c = "";
  return (
    a.length > 5
      ? ((l = a.substring(1, 3)),
        (o = a.substring(3, 5)),
        (r = a.substring(5, 7)),
        (c = a.substring(7, 9)))
      : ((l = a.substring(1, 2)),
        (o = a.substring(2, 3)),
        (r = a.substring(3, 4)),
        (c = a.substring(4, 5)),
        (l += l),
        (o += o),
        (r += r),
        (c += c)),
    {
      red: parseInt(l, 16),
      green: parseInt(o, 16),
      blue: parseInt(r, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const Ff = { test: Hd("#"), parse: sC, transform: ei.transform },
  Ss = (a) => ({
    test: (l) =>
      typeof l == "string" && l.endsWith(a) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: (l) => `${l}${a}`,
  }),
  Pn = Ss("deg"),
  Rn = Ss("%"),
  W = Ss("px"),
  oC = Ss("vh"),
  rC = Ss("vw"),
  Wg = {
    ...Rn,
    parse: (a) => Rn.parse(a) / 100,
    transform: (a) => Rn.transform(a * 100),
  },
  Ji = {
    test: Hd("hsl", "hue"),
    parse: a1("hue", "saturation", "lightness"),
    transform: ({ hue: a, saturation: l, lightness: o, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(a) +
      ", " +
      Rn.transform(os(l)) +
      ", " +
      Rn.transform(os(o)) +
      ", " +
      os(hs.transform(r)) +
      ")",
  },
  $t = {
    test: (a) => ei.test(a) || Ff.test(a) || Ji.test(a),
    parse: (a) =>
      ei.test(a) ? ei.parse(a) : Ji.test(a) ? Ji.parse(a) : Ff.parse(a),
    transform: (a) =>
      typeof a == "string"
        ? a
        : a.hasOwnProperty("red")
          ? ei.transform(a)
          : Ji.transform(a),
    getAnimatableNone: (a) => {
      const l = $t.parse(a);
      return ((l.alpha = 0), $t.transform(l));
    },
  },
  uC =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function cC(a) {
  return (
    isNaN(a) &&
    typeof a == "string" &&
    (a.match(Ld)?.length || 0) + (a.match(uC)?.length || 0) > 0
  );
}
const i1 = "number",
  l1 = "color",
  fC = "var",
  dC = "var(",
  Ig = "${}",
  hC =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function tl(a) {
  const l = a.toString(),
    o = [],
    r = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const m = l
    .replace(
      hC,
      (y) => (
        $t.test(y)
          ? (r.color.push(d), c.push(l1), o.push($t.parse(y)))
          : y.startsWith(dC)
            ? (r.var.push(d), c.push(fC), o.push(y))
            : (r.number.push(d), c.push(i1), o.push(parseFloat(y))),
        ++d,
        Ig
      ),
    )
    .split(Ig);
  return { values: o, split: m, indexes: r, types: c };
}
function mC(a) {
  return tl(a).values;
}
function s1({ split: a, types: l }) {
  const o = a.length;
  return (r) => {
    let c = "";
    for (let d = 0; d < o; d++)
      if (((c += a[d]), r[d] !== void 0)) {
        const f = l[d];
        f === i1
          ? (c += os(r[d]))
          : f === l1
            ? (c += $t.transform(r[d]))
            : (c += r[d]);
      }
    return c;
  };
}
function pC(a) {
  return s1(tl(a));
}
const yC = (a) =>
    typeof a == "number" ? 0 : $t.test(a) ? $t.getAnimatableNone(a) : a,
  gC = (a, l) =>
    typeof a == "number" ? (l?.trim().endsWith("/") ? a : 0) : yC(a);
function vC(a) {
  const l = tl(a);
  return s1(l)(l.values.map((r, c) => gC(r, l.split[c])));
}
const fn = {
  test: cC,
  parse: mC,
  createTransformer: pC,
  getAnimatableNone: vC,
};
function Df(a, l, o) {
  return (
    o < 0 && (o += 1),
    o > 1 && (o -= 1),
    o < 1 / 6
      ? a + (l - a) * 6 * o
      : o < 1 / 2
        ? l
        : o < 2 / 3
          ? a + (l - a) * (2 / 3 - o) * 6
          : a
  );
}
function xC({ hue: a, saturation: l, lightness: o, alpha: r }) {
  ((a /= 360), (l /= 100), (o /= 100));
  let c = 0,
    d = 0,
    f = 0;
  if (!l) c = d = f = o;
  else {
    const m = o < 0.5 ? o * (1 + l) : o + l - o * l,
      y = 2 * o - m;
    ((c = Df(y, m, a + 1 / 3)), (d = Df(y, m, a)), (f = Df(y, m, a - 1 / 3)));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(f * 255),
    alpha: r,
  };
}
function xr(a, l) {
  return (o) => (o > 0 ? l : a);
}
const jt = (a, l, o) => a + (l - a) * o,
  Of = (a, l, o) => {
    const r = a * a,
      c = o * (l * l - r) + r;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  bC = [Ff, ei, Ji],
  SC = (a) => bC.find((l) => l.test(a));
function t0(a) {
  const l = SC(a);
  if (!l) return !1;
  let o = l.parse(a);
  return (l === Ji && (o = xC(o)), o);
}
const e0 = (a, l) => {
    const o = t0(a),
      r = t0(l);
    if (!o || !r) return xr(a, l);
    const c = { ...o };
    return (d) => (
      (c.red = Of(o.red, r.red, d)),
      (c.green = Of(o.green, r.green, d)),
      (c.blue = Of(o.blue, r.blue, d)),
      (c.alpha = jt(o.alpha, r.alpha, d)),
      ei.transform(c)
    );
  },
  Jf = new Set(["none", "hidden"]);
function TC(a, l) {
  return Jf.has(a) ? (o) => (o <= 0 ? a : l) : (o) => (o >= 1 ? l : a);
}
function EC(a, l) {
  return (o) => jt(a, l, o);
}
function Yd(a) {
  return typeof a == "number"
    ? EC
    : typeof a == "string"
      ? Bd(a)
        ? xr
        : $t.test(a)
          ? e0
          : wC
      : Array.isArray(a)
        ? o1
        : typeof a == "object"
          ? $t.test(a)
            ? e0
            : CC
          : xr;
}
function o1(a, l) {
  const o = [...a],
    r = o.length,
    c = a.map((d, f) => Yd(d)(d, l[f]));
  return (d) => {
    for (let f = 0; f < r; f++) o[f] = c[f](d);
    return o;
  };
}
function CC(a, l) {
  const o = { ...a, ...l },
    r = {};
  for (const c in o)
    a[c] !== void 0 && l[c] !== void 0 && (r[c] = Yd(a[c])(a[c], l[c]));
  return (c) => {
    for (const d in r) o[d] = r[d](c);
    return o;
  };
}
function AC(a, l) {
  const o = [],
    r = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const d = l.types[c],
      f = a.indexes[d][r[d]],
      m = a.values[f] ?? 0;
    ((o[c] = m), r[d]++);
  }
  return o;
}
const wC = (a, l) => {
  const o = fn.createTransformer(l),
    r = tl(a),
    c = tl(l);
  return r.indexes.var.length === c.indexes.var.length &&
    r.indexes.color.length === c.indexes.color.length &&
    r.indexes.number.length >= c.indexes.number.length
    ? (Jf.has(a) && !c.values.length) || (Jf.has(l) && !r.values.length)
      ? TC(a, l)
      : xs(o1(AC(r, c), c.values), o)
    : xr(a, l);
};
function r1(a, l, o) {
  return typeof a == "number" && typeof l == "number" && typeof o == "number"
    ? jt(a, l, o)
    : Yd(a)(a, l);
}
const NC = (a) => {
    const l = ({ timestamp: o }) => a(o);
    return {
      start: (o = !0) => _t.update(l, o),
      stop: () => Na(l),
      now: () => (me.isProcessing ? me.timestamp : Se.now()),
    };
  },
  u1 = (a, l, o = 10) => {
    let r = "";
    const c = Math.max(Math.round(l / o), 2);
    for (let d = 0; d < c; d++)
      r += Math.round(a(d / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  br = 2e4;
function qd(a) {
  let l = 0;
  const o = 50;
  let r = a.next(l);
  for (; !r.done && l < br;) ((l += o), (r = a.next(l)));
  return l >= br ? 1 / 0 : l;
}
function RC(a, l = 100, o) {
  const r = o({ ...a, keyframes: [0, l] }),
    c = Math.min(qd(r), br);
  return {
    type: "keyframes",
    ease: (d) => r.next(c * d).value / l,
    duration: We(c),
  };
}
const kt = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function $f(a, l) {
  return a * Math.sqrt(1 - l * l);
}
const MC = 12;
function DC(a, l, o) {
  let r = o;
  for (let c = 1; c < MC; c++) r = r - a(r) / l(r);
  return r;
}
const zf = 0.001;
function OC({
  duration: a = kt.duration,
  bounce: l = kt.bounce,
  velocity: o = kt.velocity,
  mass: r = kt.mass,
}) {
  let c,
    d,
    f = 1 - l;
  ((f = Mn(kt.minDamping, kt.maxDamping, f)),
    (a = Mn(kt.minDuration, kt.maxDuration, We(a))),
    f < 1
      ? ((c = (v) => {
          const g = v * f,
            p = g * a,
            S = g - o,
            N = $f(v, f),
            M = Math.exp(-p);
          return zf - (S / N) * M;
        }),
        (d = (v) => {
          const p = v * f * a,
            S = p * o + o,
            N = Math.pow(f, 2) * Math.pow(v, 2) * a,
            M = Math.exp(-p),
            z = $f(Math.pow(v, 2), f);
          return ((-c(v) + zf > 0 ? -1 : 1) * ((S - N) * M)) / z;
        }))
      : ((c = (v) => {
          const g = Math.exp(-v * a),
            p = (v - o) * a + 1;
          return -zf + g * p;
        }),
        (d = (v) => {
          const g = Math.exp(-v * a),
            p = (o - v) * (a * a);
          return g * p;
        })));
  const m = 5 / a,
    y = DC(c, d, m);
  if (((a = qe(a)), isNaN(y)))
    return { stiffness: kt.stiffness, damping: kt.damping, duration: a };
  {
    const v = Math.pow(y, 2) * r;
    return { stiffness: v, damping: f * 2 * Math.sqrt(r * v), duration: a };
  }
}
const zC = ["duration", "bounce"],
  jC = ["stiffness", "damping", "mass"];
function n0(a, l) {
  return l.some((o) => a[o] !== void 0);
}
function _C(a) {
  let l = {
    velocity: kt.velocity,
    stiffness: kt.stiffness,
    damping: kt.damping,
    mass: kt.mass,
    isResolvedFromDuration: !1,
    ...a,
  };
  if (!n0(a, jC) && n0(a, zC))
    if (((l.velocity = 0), a.visualDuration)) {
      const o = a.visualDuration,
        r = (2 * Math.PI) / (o * 1.2),
        c = r * r,
        d = 2 * Mn(0.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(c);
      l = { ...l, mass: kt.mass, stiffness: c, damping: d };
    } else {
      const o = OC({ ...a, velocity: 0 });
      ((l = { ...l, ...o, mass: kt.mass }), (l.isResolvedFromDuration = !0));
    }
  return l;
}
function Sr(a = kt.visualDuration, l = kt.bounce) {
  const o =
    typeof a != "object"
      ? { visualDuration: a, keyframes: [0, 1], bounce: l }
      : a;
  let { restSpeed: r, restDelta: c } = o;
  const d = o.keyframes[0],
    f = o.keyframes[o.keyframes.length - 1],
    m = { done: !1, value: d },
    {
      stiffness: y,
      damping: v,
      mass: g,
      duration: p,
      velocity: S,
      isResolvedFromDuration: N,
    } = _C({ ...o, velocity: -We(o.velocity || 0) }),
    M = S || 0,
    z = v / (2 * Math.sqrt(y * g)),
    A = f - d,
    U = We(Math.sqrt(y / g)),
    Y = Math.abs(A) < 5;
  (r || (r = Y ? kt.restSpeed.granular : kt.restSpeed.default),
    c || (c = Y ? kt.restDelta.granular : kt.restDelta.default));
  let B, q, K, tt, Q, G;
  if (z < 1)
    ((K = $f(U, z)),
      (tt = (M + z * U * A) / K),
      (B = (F) => {
        const dt = Math.exp(-z * U * F);
        return f - dt * (tt * Math.sin(K * F) + A * Math.cos(K * F));
      }),
      (Q = z * U * tt + A * K),
      (G = z * U * A - tt * K),
      (q = (F) =>
        Math.exp(-z * U * F) * (Q * Math.sin(K * F) + G * Math.cos(K * F))));
  else if (z === 1) {
    B = (dt) => f - Math.exp(-U * dt) * (A + (M + U * A) * dt);
    const F = M + U * A;
    q = (dt) => Math.exp(-U * dt) * (U * F * dt - M);
  } else {
    const F = U * Math.sqrt(z * z - 1);
    B = (Zt) => {
      const pt = Math.exp(-z * U * Zt),
        X = Math.min(F * Zt, 300);
      return (
        f - (pt * ((M + z * U * A) * Math.sinh(X) + F * A * Math.cosh(X))) / F
      );
    };
    const dt = (M + z * U * A) / F,
      St = z * U * dt - A * F,
      Xt = z * U * A - dt * F;
    q = (Zt) => {
      const pt = Math.exp(-z * U * Zt),
        X = Math.min(F * Zt, 300);
      return pt * (St * Math.sinh(X) + Xt * Math.cosh(X));
    };
  }
  const it = {
    calculatedDuration: (N && p) || null,
    velocity: (F) => qe(q(F)),
    next: (F) => {
      if (!N && z < 1) {
        const St = Math.exp(-z * U * F),
          Xt = Math.sin(K * F),
          Zt = Math.cos(K * F),
          pt = f - St * (tt * Xt + A * Zt),
          X = qe(St * (Q * Xt + G * Zt));
        return (
          (m.done = Math.abs(X) <= r && Math.abs(f - pt) <= c),
          (m.value = m.done ? f : pt),
          m
        );
      }
      const dt = B(F);
      if (N) m.done = F >= p;
      else {
        const St = qe(q(F));
        m.done = Math.abs(St) <= r && Math.abs(f - dt) <= c;
      }
      return ((m.value = m.done ? f : dt), m);
    },
    toString: () => {
      const F = Math.min(qd(it), br),
        dt = u1((St) => it.next(F * St).value, F, 30);
      return F + "ms " + dt;
    },
    toTransition: () => {},
  };
  return it;
}
Sr.applyToOptions = (a) => {
  const l = RC(a, 100, Sr);
  return (
    (a.ease = l.ease),
    (a.duration = qe(l.duration)),
    (a.type = "keyframes"),
    a
  );
};
const VC = 5;
function c1(a, l, o) {
  const r = Math.max(l - VC, 0);
  return kv(o - a(r), l - r);
}
function Wf({
  keyframes: a,
  velocity: l = 0,
  power: o = 0.8,
  timeConstant: r = 325,
  bounceDamping: c = 10,
  bounceStiffness: d = 500,
  modifyTarget: f,
  min: m,
  max: y,
  restDelta: v = 0.5,
  restSpeed: g,
}) {
  const p = a[0],
    S = { done: !1, value: p },
    N = (G) => (m !== void 0 && G < m) || (y !== void 0 && G > y),
    M = (G) =>
      m === void 0
        ? y
        : y === void 0 || Math.abs(m - G) < Math.abs(y - G)
          ? m
          : y;
  let z = o * l;
  const A = p + z,
    U = f === void 0 ? A : f(A);
  U !== A && (z = U - p);
  const Y = (G) => -z * Math.exp(-G / r),
    B = (G) => U + Y(G),
    q = (G) => {
      const it = Y(G),
        F = B(G);
      ((S.done = Math.abs(it) <= v), (S.value = S.done ? U : F));
    };
  let K, tt;
  const Q = (G) => {
    N(S.value) &&
      ((K = G),
      (tt = Sr({
        keyframes: [S.value, M(S.value)],
        velocity: c1(B, G, S.value),
        damping: c,
        stiffness: d,
        restDelta: v,
        restSpeed: g,
      })));
  };
  return (
    Q(0),
    {
      calculatedDuration: null,
      next: (G) => {
        let it = !1;
        return (
          !tt && K === void 0 && ((it = !0), q(G), Q(G)),
          K !== void 0 && G >= K ? tt.next(G - K) : (!it && q(G), S)
        );
      },
    }
  );
}
function UC(a, l, o) {
  const r = [],
    c = o || wa.mix || r1,
    d = a.length - 1;
  for (let f = 0; f < d; f++) {
    let m = c(a[f], a[f + 1]);
    if (l) {
      const y = Array.isArray(l) ? l[f] || Ie : l;
      m = xs(y, m);
    }
    r.push(m);
  }
  return r;
}
function BC(a, l, { clamp: o = !0, ease: r, mixer: c } = {}) {
  const d = a.length;
  if ((zr(d === l.length), d === 1)) return () => l[0];
  if (d === 2 && l[0] === l[1]) return () => l[1];
  const f = a[0] === a[1];
  a[0] > a[d - 1] && ((a = [...a].reverse()), (l = [...l].reverse()));
  const m = UC(l, r, c),
    y = m.length,
    v = (g) => {
      if (f && g < a[0]) return l[0];
      let p = 0;
      if (y > 1) for (; p < a.length - 2 && !(g < a[p + 1]); p++);
      const S = ds(a[p], a[p + 1], g);
      return m[p](S);
    };
  return o ? (g) => v(Mn(a[0], a[d - 1], g)) : v;
}
function LC(a, l) {
  const o = a[a.length - 1];
  for (let r = 1; r <= l; r++) {
    const c = ds(0, l, r);
    a.push(jt(o, 1, c));
  }
}
function HC(a) {
  const l = [0];
  return (LC(l, a.length - 1), l);
}
function YC(a, l) {
  return a.map((o) => o * l);
}
function qC(a, l) {
  return a.map(() => l || Wv).splice(0, a.length - 1);
}
function rs({
  duration: a = 300,
  keyframes: l,
  times: o,
  ease: r = "easeInOut",
}) {
  const c = FE(r) ? r.map(Jg) : Jg(r),
    d = { done: !1, value: l[0] },
    f = YC(o && o.length === l.length ? o : HC(l), a),
    m = BC(f, l, { ease: Array.isArray(c) ? c : qC(l, c) });
  return {
    calculatedDuration: a,
    next: (y) => ((d.value = m(y)), (d.done = y >= a), d),
  };
}
const GC = (a) => a !== null;
function jr(a, { repeat: l, repeatType: o = "loop" }, r, c = 1) {
  const d = a.filter(GC),
    m = c < 0 || (l && o !== "loop" && l % 2 === 1) ? 0 : d.length - 1;
  return !m || r === void 0 ? d[m] : r;
}
const kC = { decay: Wf, inertia: Wf, tween: rs, keyframes: rs, spring: Sr };
function f1(a) {
  typeof a.type == "string" && (a.type = kC[a.type]);
}
class Gd {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((l) => {
      this.resolve = l;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(l, o) {
    return this.finished.then(l, o);
  }
}
const XC = (a) => a / 100;
class Tr extends Gd {
  constructor(l) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        const { motionValue: o } = this.options;
        (o && o.updatedAt !== Se.now() && this.tick(Se.now()),
          (this.isStopped = !0),
          this.state !== "idle" && (this.teardown(), this.options.onStop?.()));
      }),
      (this.options = l),
      this.initAnimation(),
      this.play(),
      l.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: l } = this;
    f1(l);
    const {
      type: o = rs,
      repeat: r = 0,
      repeatDelay: c = 0,
      repeatType: d,
      velocity: f = 0,
    } = l;
    let { keyframes: m } = l;
    const y = o || rs;
    y !== rs &&
      typeof m[0] != "number" &&
      ((this.mixKeyframes = xs(XC, r1(m[0], m[1]))), (m = [0, 100]));
    const v = y({ ...l, keyframes: m });
    (d === "mirror" &&
      (this.mirroredGenerator = y({
        ...l,
        keyframes: [...m].reverse(),
        velocity: -f,
      })),
      v.calculatedDuration === null && (v.calculatedDuration = qd(v)));
    const { calculatedDuration: g } = v;
    ((this.calculatedDuration = g),
      (this.resolvedDuration = g + c),
      (this.totalDuration = this.resolvedDuration * (r + 1) - c),
      (this.generator = v));
  }
  updateTime(l) {
    const o = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = o);
  }
  tick(l, o = !1) {
    const {
      generator: r,
      totalDuration: c,
      mixKeyframes: d,
      mirroredGenerator: f,
      resolvedDuration: m,
      calculatedDuration: y,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: v = 0,
      keyframes: g,
      repeat: p,
      repeatType: S,
      repeatDelay: N,
      type: M,
      onUpdate: z,
      finalKeyframe: A,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, l))
      : this.speed < 0 &&
        (this.startTime = Math.min(l - c / this.speed, this.startTime)),
      o ? (this.currentTime = l) : this.updateTime(l));
    const U = this.currentTime - v * (this.playbackSpeed >= 0 ? 1 : -1),
      Y = this.playbackSpeed >= 0 ? U < 0 : U > c;
    ((this.currentTime = Math.max(U, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c));
    let B = this.currentTime,
      q = r;
    if (p) {
      const G = Math.min(this.currentTime, c) / m;
      let it = Math.floor(G),
        F = G % 1;
      (!F && G >= 1 && (F = 1),
        F === 1 && it--,
        (it = Math.min(it, p + 1)),
        it % 2 &&
          (S === "reverse"
            ? ((F = 1 - F), N && (F -= N / m))
            : S === "mirror" && (q = f)),
        (B = Mn(0, 1, F) * m));
    }
    let K;
    (Y
      ? ((this.delayState.value = g[0]), (K = this.delayState))
      : (K = q.next(B)),
      d && !Y && (K.value = d(K.value)));
    let { done: tt } = K;
    !Y &&
      y !== null &&
      (tt =
        this.playbackSpeed >= 0
          ? this.currentTime >= c
          : this.currentTime <= 0);
    const Q =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && tt));
    return (
      Q && M !== Wf && (K.value = jr(g, this.options, A, this.speed)),
      z && z(K.value),
      Q && this.finish(),
      K
    );
  }
  then(l, o) {
    return this.finished.then(l, o);
  }
  get duration() {
    return We(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + We(l);
  }
  get time() {
    return We(this.currentTime);
  }
  set time(l) {
    ((l = qe(l)),
      (this.currentTime = l),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = l)
        : this.driver &&
          (this.startTime = this.driver.now() - l / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0),
          (this.state = "paused"),
          (this.holdTime = l),
          this.tick(l)));
  }
  getGeneratorVelocity() {
    const l = this.currentTime;
    if (l <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(l);
    const o = this.generator.next(l).value;
    return c1((r) => this.generator.next(r).value, l, o);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const o = this.playbackSpeed !== l;
    (o && this.driver && this.updateTime(Se.now()),
      (this.playbackSpeed = l),
      o && this.driver && (this.time = We(this.currentTime)));
  }
  play() {
    if (this.isStopped) return;
    const { driver: l = NC, startTime: o } = this.options;
    (this.driver || (this.driver = l((c) => this.tick(c))),
      this.options.onPlay?.());
    const r = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime || (this.startTime = o ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(Se.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      this.options.onComplete?.());
  }
  cancel() {
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.());
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(l) {
    return ((this.startTime = 0), this.tick(l, !0));
  }
  attachTimeline(l) {
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      this.driver?.stop(),
      l.observe(this)
    );
  }
}
function ZC(a) {
  for (let l = 1; l < a.length; l++) a[l] ?? (a[l] = a[l - 1]);
}
const ni = (a) => (a * 180) / Math.PI,
  If = (a) => {
    const l = ni(Math.atan2(a[1], a[0]));
    return td(l);
  },
  QC = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (a) => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
    rotate: If,
    rotateZ: If,
    skewX: (a) => ni(Math.atan(a[1])),
    skewY: (a) => ni(Math.atan(a[2])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[2])) / 2,
  },
  td = (a) => ((a = a % 360), a < 0 && (a += 360), a),
  a0 = If,
  i0 = (a) => Math.sqrt(a[0] * a[0] + a[1] * a[1]),
  l0 = (a) => Math.sqrt(a[4] * a[4] + a[5] * a[5]),
  KC = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: i0,
    scaleY: l0,
    scale: (a) => (i0(a) + l0(a)) / 2,
    rotateX: (a) => td(ni(Math.atan2(a[6], a[5]))),
    rotateY: (a) => td(ni(Math.atan2(-a[2], a[0]))),
    rotateZ: a0,
    rotate: a0,
    skewX: (a) => ni(Math.atan(a[4])),
    skewY: (a) => ni(Math.atan(a[1])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[4])) / 2,
  };
function ed(a) {
  return a.includes("scale") ? 1 : 0;
}
function nd(a, l) {
  if (!a || a === "none") return ed(l);
  const o = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, c;
  if (o) ((r = KC), (c = o));
  else {
    const m = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = QC), (c = m));
  }
  if (!c) return ed(l);
  const d = r[l],
    f = c[1].split(",").map(FC);
  return typeof d == "function" ? d(f) : f[d];
}
const PC = (a, l) => {
  const { transform: o = "none" } = getComputedStyle(a);
  return nd(o, l);
};
function FC(a) {
  return parseFloat(a.trim());
}
const sl = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  ol = new Set([...sl, "pathRotation"]),
  s0 = (a) => a === ll || a === W,
  JC = new Set(["x", "y", "z"]),
  $C = sl.filter((a) => !JC.has(a));
function WC(a) {
  const l = [];
  return (
    $C.forEach((o) => {
      const r = a.getValue(o);
      r !== void 0 &&
        (l.push([o, r.get()]), r.set(o.startsWith("scale") ? 1 : 0));
    }),
    l
  );
}
const Aa = {
  width: (
    { x: a },
    { paddingLeft: l = "0", paddingRight: o = "0", boxSizing: r },
  ) => {
    const c = a.max - a.min;
    return r === "border-box" ? c : c - parseFloat(l) - parseFloat(o);
  },
  height: (
    { y: a },
    { paddingTop: l = "0", paddingBottom: o = "0", boxSizing: r },
  ) => {
    const c = a.max - a.min;
    return r === "border-box" ? c : c - parseFloat(l) - parseFloat(o);
  },
  top: (a, { top: l }) => parseFloat(l),
  left: (a, { left: l }) => parseFloat(l),
  bottom: ({ y: a }, { top: l }) => parseFloat(l) + (a.max - a.min),
  right: ({ x: a }, { left: l }) => parseFloat(l) + (a.max - a.min),
  x: (a, { transform: l }) => nd(l, "x"),
  y: (a, { transform: l }) => nd(l, "y"),
};
Aa.translateX = Aa.x;
Aa.translateY = Aa.y;
const ai = new Set();
let ad = !1,
  id = !1,
  ld = !1;
function d1() {
  if (id) {
    const a = Array.from(ai).filter((r) => r.needsMeasurement),
      l = new Set(a.map((r) => r.element)),
      o = new Map();
    (l.forEach((r) => {
      const c = WC(r);
      c.length && (o.set(r, c), r.render());
    }),
      a.forEach((r) => r.measureInitialState()),
      l.forEach((r) => {
        r.render();
        const c = o.get(r);
        c &&
          c.forEach(([d, f]) => {
            r.getValue(d)?.set(f);
          });
      }),
      a.forEach((r) => r.measureEndState()),
      a.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((id = !1), (ad = !1), ai.forEach((a) => a.complete(ld)), ai.clear());
}
function h1() {
  ai.forEach((a) => {
    (a.readKeyframes(), a.needsMeasurement && (id = !0));
  });
}
function IC() {
  ((ld = !0), h1(), d1(), (ld = !1));
}
class kd {
  constructor(l, o, r, c, d, f = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...l]),
      (this.onComplete = o),
      (this.name = r),
      (this.motionValue = c),
      (this.element = d),
      (this.isAsync = f));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (ai.add(this),
          ad || ((ad = !0), _t.read(h1), _t.resolveKeyframes(d1)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: l,
      name: o,
      element: r,
      motionValue: c,
    } = this;
    if (l[0] === null) {
      const d = c?.get(),
        f = l[l.length - 1];
      if (d !== void 0) l[0] = d;
      else if (r && o) {
        const m = r.readValue(o, f);
        m != null && (l[0] = m);
      }
      (l[0] === void 0 && (l[0] = f), c && d === void 0 && c.set(l[0]));
    }
    ZC(l);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(l = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l),
      ai.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (ai.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const t4 = (a) => a.startsWith("--");
function m1(a, l, o) {
  t4(l) ? a.style.setProperty(l, o) : (a.style[l] = o);
}
const e4 = {};
function p1(a, l) {
  const o = Gv(a);
  return () => e4[l] ?? o();
}
const n4 = p1(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  y1 = p1(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  ss = ([a, l, o, r]) => `cubic-bezier(${a}, ${l}, ${o}, ${r})`,
  o0 = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ss([0, 0.65, 0.55, 1]),
    circOut: ss([0.55, 0, 1, 0.45]),
    backIn: ss([0.31, 0.01, 0.66, -0.59]),
    backOut: ss([0.33, 1.53, 0.69, 0.99]),
  };
function g1(a, l) {
  if (a)
    return typeof a == "function"
      ? y1()
        ? u1(a, l)
        : "ease-out"
      : Iv(a)
        ? ss(a)
        : Array.isArray(a)
          ? a.map((o) => g1(o, l) || o0.easeOut)
          : o0[a];
}
function a4(
  a,
  l,
  o,
  {
    delay: r = 0,
    duration: c = 300,
    repeat: d = 0,
    repeatType: f = "loop",
    ease: m = "easeOut",
    times: y,
  } = {},
  v = void 0,
) {
  const g = { [l]: o };
  y && (g.offset = y);
  const p = g1(m, c);
  Array.isArray(p) && (g.easing = p);
  const S = {
    delay: r,
    duration: c,
    easing: Array.isArray(p) ? "linear" : p,
    fill: "both",
    iterations: d + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return (v && (S.pseudoElement = v), a.animate(g, S));
}
function v1(a) {
  return typeof a == "function" && "applyToOptions" in a;
}
function i4({ type: a, ...l }) {
  return v1(a) && y1()
    ? a.applyToOptions(l)
    : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class x1 extends Gd {
  constructor(l) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !l)
    )
      return;
    const {
      element: o,
      name: r,
      keyframes: c,
      pseudoElement: d,
      allowFlatten: f = !1,
      finalKeyframe: m,
      onComplete: y,
    } = l;
    ((this.isPseudoElement = !!d),
      (this.allowFlatten = f),
      (this.options = l),
      zr(typeof l.type != "string"));
    const v = i4(l);
    ((this.animation = a4(o, r, c, v, d)),
      v.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !d)) {
          const g = jr(c, this.options, m, this.speed);
          (this.updateMotionValue && this.updateMotionValue(g),
            m1(o, r, g),
            this.animation.cancel());
        }
        (y?.(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: l } = this;
    l === "idle" ||
      l === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    const l = this.options?.element;
    !this.isPseudoElement && l?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const l = this.animation.effect?.getComputedTiming?.().duration || 0;
    return We(Number(l));
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + We(l);
  }
  get time() {
    return We(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    const o = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = qe(l)),
      o && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(l) {
    (l < 0 && (this.finishedTime = null), (this.animation.playbackRate = l));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(l) {
    this.manualStartTime = this.animation.startTime = l;
  }
  attachTimeline({ timeline: l, rangeStart: o, rangeEnd: r, observe: c }) {
    return (
      this.allowFlatten &&
        this.animation.effect?.updateTiming({ easing: "linear" }),
      (this.animation.onfinish = null),
      l && n4()
        ? ((this.animation.timeline = l),
          o && (this.animation.rangeStart = o),
          r && (this.animation.rangeEnd = r),
          Ie)
        : c(this)
    );
  }
}
const b1 = { anticipate: Fv, backInOut: Pv, circInOut: $v };
function l4(a) {
  return a in b1;
}
function s4(a) {
  typeof a.ease == "string" && l4(a.ease) && (a.ease = b1[a.ease]);
}
const jf = 10;
class o4 extends x1 {
  constructor(l) {
    (s4(l),
      f1(l),
      super(l),
      l.startTime !== void 0 &&
        l.autoplay !== !1 &&
        (this.startTime = l.startTime),
      (this.options = l));
  }
  updateMotionValue(l) {
    const {
      motionValue: o,
      onUpdate: r,
      onComplete: c,
      element: d,
      ...f
    } = this.options;
    if (!o) return;
    if (l !== void 0) {
      o.set(l);
      return;
    }
    const m = new Tr({ ...f, autoplay: !1 }),
      y = Math.max(jf, Se.now() - this.startTime),
      v = Mn(0, jf, y - jf),
      g = m.sample(y).value,
      { name: p } = this.options;
    (d && p && m1(d, p, g),
      o.setWithVelocity(m.sample(Math.max(0, y - v)).value, g, v),
      m.stop());
  }
}
const r0 = (a, l) =>
  l === "zIndex"
    ? !1
    : !!(
        typeof a == "number" ||
        Array.isArray(a) ||
        (typeof a == "string" &&
          (fn.test(a) || a === "0") &&
          !a.startsWith("url("))
      );
function r4(a) {
  const l = a[0];
  if (a.length === 1) return !0;
  for (let o = 0; o < a.length; o++) if (a[o] !== l) return !0;
}
function u4(a, l, o, r) {
  const c = a[0];
  if (c === null) return !1;
  if (l === "display" || l === "visibility") return !0;
  const d = a[a.length - 1],
    f = r0(c, l),
    m = r0(d, l);
  return !f || !m ? !1 : r4(a) || ((o === "spring" || v1(o)) && r);
}
function sd(a) {
  ((a.duration = 0), (a.type = "keyframes"));
}
const S1 = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  c4 = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function f4(a) {
  for (let l = 0; l < a.length; l++)
    if (typeof a[l] == "string" && c4.test(a[l])) return !0;
  return !1;
}
const d4 = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  h4 = Gv(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function m4(a) {
  const {
      motionValue: l,
      name: o,
      repeatDelay: r,
      repeatType: c,
      damping: d,
      type: f,
      keyframes: m,
    } = a,
    y = l?.owner?.current;
  if (!(y instanceof HTMLElement) && !(y instanceof SVGElement)) return !1;
  const { onUpdate: v, transformTemplate: g } = l.owner.getProps();
  return (
    h4() &&
    o &&
    (S1.has(o) || (d4.has(o) && f4(m))) &&
    (o !== "transform" || !g) &&
    !v &&
    !r &&
    c !== "mirror" &&
    d !== 0 &&
    f !== "inertia"
  );
}
const p4 = 40;
class y4 extends Gd {
  constructor({
    autoplay: l = !0,
    delay: o = 0,
    type: r = "keyframes",
    repeat: c = 0,
    repeatDelay: d = 0,
    repeatType: f = "loop",
    keyframes: m,
    name: y,
    motionValue: v,
    element: g,
    ...p
  }) {
    (super(),
      (this.stop = () => {
        (this._animation && (this._animation.stop(), this.stopTimeline?.()),
          this.keyframeResolver?.cancel());
      }),
      (this.createdAt = Se.now()));
    const S = {
        autoplay: l,
        delay: o,
        type: r,
        repeat: c,
        repeatDelay: d,
        repeatType: f,
        name: y,
        motionValue: v,
        element: g,
        ...p,
      },
      N = g?.KeyframeResolver || kd;
    ((this.keyframeResolver = new N(
      m,
      (M, z, A) => this.onKeyframesResolved(M, z, S, !A),
      y,
      v,
      g,
    )),
      this.keyframeResolver?.scheduleResolve());
  }
  onKeyframesResolved(l, o, r, c) {
    this.keyframeResolver = void 0;
    const {
      name: d,
      type: f,
      velocity: m,
      delay: y,
      isHandoff: v,
      onUpdate: g,
    } = r;
    this.resolvedAt = Se.now();
    let p = !0;
    u4(l, d, f, m) ||
      ((p = !1),
      (wa.instantAnimations || !y) && g?.(jr(l, r, o)),
      (l[0] = l[l.length - 1]),
      sd(r),
      (r.repeat = 0));
    const N = {
        startTime: c
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > p4
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: o,
        ...r,
        keyframes: l,
      },
      M = p && !v && m4(N),
      z = N.motionValue?.owner?.current;
    let A;
    if (M)
      try {
        A = new o4({ ...N, element: z });
      } catch {
        A = new Tr(N);
      }
    else A = new Tr(N);
    (A.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(Ie),
      this.pendingTimeline &&
        ((this.stopTimeline = A.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = A));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(l, o) {
    return this.finished.finally(l).then(() => {});
  }
  get animation() {
    return (
      this._animation || (this.keyframeResolver?.resume(), IC()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(l) {
    this.animation.time = l;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(l) {
    this.animation.speed = l;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(l) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(l))
        : (this.pendingTimeline = l),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    (this._animation && this.animation.cancel(),
      this.keyframeResolver?.cancel());
  }
}
function T1(a, l, o, r = 0, c = 1) {
  const d = Array.from(a)
      .sort((v, g) => v.sortNodePosition(g))
      .indexOf(l),
    f = a.size,
    m = (f - 1) * r;
  return typeof o == "function" ? o(d, f) : c === 1 ? d * r : m - d * r;
}
const u0 = 30,
  g4 = (a) => !isNaN(parseFloat(a));
class v4 {
  constructor(l, o = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        const c = Se.now();
        if (
          (this.updatedAt !== c && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            (this.events.change?.notify(this.current), this.dependents))
        )
          for (const d of this.dependents) d.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(l),
      (this.owner = o.owner));
  }
  setCurrent(l) {
    ((this.current = l),
      (this.updatedAt = Se.now()),
      this.canTrackVelocity === null &&
        l !== void 0 &&
        (this.canTrackVelocity = g4(this.current)));
  }
  setPrevFrameValue(l = this.current) {
    ((this.prevFrameValue = l), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(l) {
    return this.on("change", l);
  }
  on(l, o) {
    this.events[l] || (this.events[l] = new _d());
    const r = this.events[l].add(o);
    return l === "change"
      ? () => {
          (r(),
            _t.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const l in this.events) this.events[l].clear();
  }
  attach(l, o) {
    ((this.passiveEffect = l), (this.stopPassiveEffect = o));
  }
  set(l) {
    this.passiveEffect
      ? this.passiveEffect(l, this.updateAndNotify)
      : this.updateAndNotify(l);
  }
  setWithVelocity(l, o, r) {
    (this.set(o),
      (this.prev = void 0),
      (this.prevFrameValue = l),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(l, o = !0) {
    (this.updateAndNotify(l),
      (this.prev = l),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      o && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(l) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(l));
  }
  removeDependent(l) {
    this.dependents && this.dependents.delete(l);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const l = Se.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      l - this.updatedAt > u0
    )
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, u0);
    return kv(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
  }
  start(l) {
    return (
      this.stop(),
      new Promise((o) => {
        ((this.hasAnimated = !0),
          (this.animation = l(o)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function el(a, l) {
  return new v4(a, l);
}
function E1(a, l) {
  if (a?.inherit && l) {
    const { inherit: o, ...r } = a;
    return { ...l, ...r };
  }
  return a;
}
function Xd(a, l) {
  const o = a?.[l] ?? a?.default ?? a;
  return o !== a ? E1(o, a) : o;
}
const x4 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  b4 = (a) => ({
    type: "spring",
    stiffness: 550,
    damping: a === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  S4 = { type: "keyframes", duration: 0.8 },
  T4 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  E4 = (a, { keyframes: l }) =>
    l.length > 2
      ? S4
      : ol.has(a)
        ? a.startsWith("scale")
          ? b4(l[1])
          : x4
        : T4,
  C4 = new Set([
    "when",
    "delay",
    "delayChildren",
    "staggerChildren",
    "staggerDirection",
    "repeat",
    "repeatType",
    "repeatDelay",
    "from",
    "elapsed",
  ]);
function A4(a) {
  for (const l in a) if (!C4.has(l)) return !0;
  return !1;
}
const Zd =
    (a, l, o, r = {}, c, d) =>
    (f) => {
      const m = Xd(r, a) || {},
        y = m.delay || r.delay || 0;
      let { elapsed: v = 0 } = r;
      v = v - qe(y);
      const g = {
        keyframes: Array.isArray(o) ? o : [null, o],
        ease: "easeOut",
        velocity: l.getVelocity(),
        ...m,
        delay: -v,
        onUpdate: (S) => {
          (l.set(S), m.onUpdate && m.onUpdate(S));
        },
        onComplete: () => {
          (f(), m.onComplete && m.onComplete());
        },
        name: a,
        motionValue: l,
        element: d ? void 0 : c,
      };
      (A4(m) || Object.assign(g, E4(a, g)),
        g.duration && (g.duration = qe(g.duration)),
        g.repeatDelay && (g.repeatDelay = qe(g.repeatDelay)),
        g.from !== void 0 && (g.keyframes[0] = g.from));
      let p = !1;
      if (
        ((g.type === !1 || (g.duration === 0 && !g.repeatDelay)) &&
          (sd(g), g.delay === 0 && (p = !0)),
        (wa.instantAnimations ||
          wa.skipAnimations ||
          c?.shouldSkipAnimations ||
          m.skipAnimations) &&
          ((p = !0), sd(g), (g.delay = 0)),
        (g.allowFlatten = !m.type && !m.ease),
        p && !d && l.get() !== void 0)
      ) {
        const S = jr(g.keyframes, m);
        if (S !== void 0) {
          _t.update(() => {
            (g.onUpdate(S), g.onComplete());
          });
          return;
        }
      }
      return m.isSync ? new Tr(g) : new y4(g);
    },
  w4 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function N4(a) {
  const l = w4.exec(a);
  if (!l) return [,];
  const [, o, r, c] = l;
  return [`--${o ?? r}`, c];
}
function C1(a, l, o = 1) {
  const [r, c] = N4(a);
  if (!r) return;
  const d = window.getComputedStyle(l).getPropertyValue(r);
  if (d) {
    const f = d.trim();
    return Hv(f) ? parseFloat(f) : f;
  }
  return Bd(c) ? C1(c, l, o + 1) : c;
}
function c0(a) {
  const l = [{}, {}];
  return (
    a?.values.forEach((o, r) => {
      ((l[0][r] = o.get()), (l[1][r] = o.getVelocity()));
    }),
    l
  );
}
function Qd(a, l, o, r) {
  if (typeof l == "function") {
    const [c, d] = c0(r);
    l = l(o !== void 0 ? o : a.custom, c, d);
  }
  if (
    (typeof l == "string" && (l = a.variants && a.variants[l]),
    typeof l == "function")
  ) {
    const [c, d] = c0(r);
    l = l(o !== void 0 ? o : a.custom, c, d);
  }
  return l;
}
function Ii(a, l, o) {
  const r = a.getProps();
  return Qd(r, l, o !== void 0 ? o : r.custom, a);
}
const A1 = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...sl,
  ]),
  od = (a) => Array.isArray(a);
function R4(a, l, o) {
  a.hasValue(l) ? a.getValue(l).set(o) : a.addValue(l, el(o));
}
function M4(a) {
  return od(a) ? a[a.length - 1] || 0 : a;
}
function D4(a, l) {
  const o = Ii(a, l);
  let { transitionEnd: r = {}, transition: c = {}, ...d } = o || {};
  d = { ...d, ...r };
  for (const f in d) {
    const m = M4(d[f]);
    R4(a, f, m);
  }
}
const ye = (a) => !!(a && a.getVelocity);
function O4(a) {
  return !!(ye(a) && a.add);
}
function rd(a, l) {
  const o = a.getValue("willChange");
  if (O4(o)) return o.add(l);
  if (!o && wa.WillChange) {
    const r = new wa.WillChange("auto");
    (a.addValue("willChange", r), r.add(l));
  }
}
function Kd(a) {
  return a.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const z4 = "framerAppearId",
  w1 = "data-" + Kd(z4);
function N1(a) {
  return a.props[w1];
}
function j4({ protectedKeys: a, needsAnimating: l }, o) {
  const r = a.hasOwnProperty(o) && l[o] !== !0;
  return ((l[o] = !1), r);
}
function R1(a, l, { delay: o = 0, transitionOverride: r, type: c } = {}) {
  let { transition: d, transitionEnd: f, ...m } = l;
  const y = a.getDefaultTransition();
  d = d ? E1(d, y) : y;
  const v = d?.reduceMotion,
    g = d?.skipAnimations;
  r && (d = r);
  const p = [],
    S = c && a.animationState && a.animationState.getState()[c],
    N = d?.path;
  N && N.animateVisualElement(a, m, d, o, p);
  for (const M in m) {
    const z = a.getValue(M, a.latestValues[M] ?? null),
      A = m[M];
    if (A === void 0 || (S && j4(S, M))) continue;
    const U = { delay: o, ...Xd(d || {}, M) };
    g && (U.skipAnimations = !0);
    const Y = z.get();
    if (
      Y !== void 0 &&
      !z.isAnimating() &&
      !Array.isArray(A) &&
      A === Y &&
      !U.velocity
    ) {
      _t.update(() => z.set(A));
      continue;
    }
    let B = !1;
    if (window.MotionHandoffAnimation) {
      const tt = N1(a);
      if (tt) {
        const Q = window.MotionHandoffAnimation(tt, M, _t);
        Q !== null && ((U.startTime = Q), (B = !0));
      }
    }
    rd(a, M);
    const q = v ?? a.shouldReduceMotion;
    z.start(Zd(M, z, A, q && A1.has(M) ? { type: !1 } : U, a, B));
    const K = z.animation;
    K && p.push(K);
  }
  if (f) {
    const M = () =>
      _t.update(() => {
        f && D4(a, f);
      });
    p.length ? Promise.all(p).then(M) : M();
  }
  return p;
}
function ud(a, l, o = {}) {
  const r = Ii(a, l, o.type === "exit" ? a.presenceContext?.custom : void 0);
  let { transition: c = a.getDefaultTransition() || {} } = r || {};
  o.transitionOverride && (c = o.transitionOverride);
  const d = r ? () => Promise.all(R1(a, r, o)) : () => Promise.resolve(),
    f =
      a.variantChildren && a.variantChildren.size
        ? (y = 0) => {
            const {
              delayChildren: v = 0,
              staggerChildren: g,
              staggerDirection: p,
            } = c;
            return _4(a, l, y, v, g, p, o);
          }
        : () => Promise.resolve(),
    { when: m } = c;
  if (m) {
    const [y, v] = m === "beforeChildren" ? [d, f] : [f, d];
    return y().then(() => v());
  } else return Promise.all([d(), f(o.delay)]);
}
function _4(a, l, o = 0, r = 0, c = 0, d = 1, f) {
  const m = [];
  for (const y of a.variantChildren)
    (y.notify("AnimationStart", l),
      m.push(
        ud(y, l, {
          ...f,
          delay:
            o +
            (typeof r == "function" ? 0 : r) +
            T1(a.variantChildren, y, r, c, d),
        }).then(() => y.notify("AnimationComplete", l)),
      ));
  return Promise.all(m);
}
function V4(a, l, o = {}) {
  a.notify("AnimationStart", l);
  let r;
  if (Array.isArray(l)) {
    const c = l.map((d) => ud(a, d, o));
    r = Promise.all(c);
  } else if (typeof l == "string") r = ud(a, l, o);
  else {
    const c = typeof l == "function" ? Ii(a, l, o.custom) : l;
    r = Promise.all(R1(a, c, o));
  }
  return r.then(() => {
    a.notify("AnimationComplete", l);
  });
}
const U4 = { test: (a) => a === "auto", parse: (a) => a },
  M1 = (a) => (l) => l.test(a),
  D1 = [ll, W, Rn, Pn, rC, oC, U4],
  f0 = (a) => D1.find(M1(a));
function B4(a) {
  return typeof a == "number"
    ? a === 0
    : a !== null
      ? a === "none" || a === "0" || qv(a)
      : !0;
}
const L4 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function H4(a) {
  const [l, o] = a.slice(0, -1).split("(");
  if (l === "drop-shadow") return a;
  const [r] = o.match(Ld) || [];
  if (!r) return a;
  const c = o.replace(r, "");
  let d = L4.has(l) ? 1 : 0;
  return (r !== o && (d *= 100), l + "(" + d + c + ")");
}
const Y4 = /\b([a-z-]*)\(.*?\)/gu,
  cd = {
    ...fn,
    getAnimatableNone: (a) => {
      const l = a.match(Y4);
      return l ? l.map(H4).join(" ") : a;
    },
  },
  fd = {
    ...fn,
    getAnimatableNone: (a) => {
      const l = fn.parse(a);
      return fn.createTransformer(a)(
        l.map((r) =>
          typeof r == "number"
            ? 0
            : typeof r == "object"
              ? { ...r, alpha: 1 }
              : r,
        ),
      );
    },
  },
  d0 = { ...ll, transform: Math.round },
  q4 = {
    rotate: Pn,
    pathRotation: Pn,
    rotateX: Pn,
    rotateY: Pn,
    rotateZ: Pn,
    scale: nr,
    scaleX: nr,
    scaleY: nr,
    scaleZ: nr,
    skew: Pn,
    skewX: Pn,
    skewY: Pn,
    distance: W,
    translateX: W,
    translateY: W,
    translateZ: W,
    x: W,
    y: W,
    z: W,
    perspective: W,
    transformPerspective: W,
    opacity: hs,
    originX: Wg,
    originY: Wg,
    originZ: W,
  },
  Er = {
    borderWidth: W,
    borderTopWidth: W,
    borderRightWidth: W,
    borderBottomWidth: W,
    borderLeftWidth: W,
    borderRadius: W,
    borderTopLeftRadius: W,
    borderTopRightRadius: W,
    borderBottomRightRadius: W,
    borderBottomLeftRadius: W,
    width: W,
    maxWidth: W,
    height: W,
    maxHeight: W,
    top: W,
    right: W,
    bottom: W,
    left: W,
    inset: W,
    insetBlock: W,
    insetBlockStart: W,
    insetBlockEnd: W,
    insetInline: W,
    insetInlineStart: W,
    insetInlineEnd: W,
    padding: W,
    paddingTop: W,
    paddingRight: W,
    paddingBottom: W,
    paddingLeft: W,
    paddingBlock: W,
    paddingBlockStart: W,
    paddingBlockEnd: W,
    paddingInline: W,
    paddingInlineStart: W,
    paddingInlineEnd: W,
    margin: W,
    marginTop: W,
    marginRight: W,
    marginBottom: W,
    marginLeft: W,
    marginBlock: W,
    marginBlockStart: W,
    marginBlockEnd: W,
    marginInline: W,
    marginInlineStart: W,
    marginInlineEnd: W,
    fontSize: W,
    backgroundPositionX: W,
    backgroundPositionY: W,
    ...q4,
    zIndex: d0,
    fillOpacity: hs,
    strokeOpacity: hs,
    numOctaves: d0,
  },
  G4 = {
    ...Er,
    color: $t,
    backgroundColor: $t,
    outlineColor: $t,
    fill: $t,
    stroke: $t,
    borderColor: $t,
    borderTopColor: $t,
    borderRightColor: $t,
    borderBottomColor: $t,
    borderLeftColor: $t,
    filter: cd,
    WebkitFilter: cd,
    mask: fd,
    WebkitMask: fd,
  },
  O1 = (a) => G4[a],
  k4 = new Set([cd, fd]);
function z1(a, l) {
  let o = O1(a);
  return (
    k4.has(o) || (o = fn),
    o.getAnimatableNone ? o.getAnimatableNone(l) : void 0
  );
}
const X4 = new Set(["auto", "none", "0"]);
function Z4(a, l, o) {
  let r = 0,
    c;
  for (; r < a.length && !c;) {
    const d = a[r];
    (typeof d == "string" && !X4.has(d) && tl(d).values.length && (c = a[r]),
      r++);
  }
  if (c && o) for (const d of l) a[d] = z1(o, c);
}
class Q4 extends kd {
  constructor(l, o, r, c, d) {
    super(l, o, r, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: o, name: r } = this;
    if (!o || !o.current) return;
    super.readKeyframes();
    for (let g = 0; g < l.length; g++) {
      let p = l[g];
      if (typeof p == "string" && ((p = p.trim()), Bd(p))) {
        const S = C1(p, o.current);
        (S !== void 0 && (l[g] = S),
          g === l.length - 1 && (this.finalKeyframe = p));
      }
    }
    if ((this.resolveNoneKeyframes(), !A1.has(r) || l.length !== 2)) return;
    const [c, d] = l,
      f = f0(c),
      m = f0(d),
      y = $g(c),
      v = $g(d);
    if (y !== v && Aa[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (f !== m)
      if (s0(f) && s0(m))
        for (let g = 0; g < l.length; g++) {
          const p = l[g];
          typeof p == "string" && (l[g] = parseFloat(p));
        }
      else Aa[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: o } = this,
      r = [];
    for (let c = 0; c < l.length; c++) (l[c] === null || B4(l[c])) && r.push(c);
    r.length && Z4(l, r, o);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: o, name: r } = this;
    if (!l || !l.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Aa[r](
        l.measureViewportBox(),
        window.getComputedStyle(l.current),
      )),
      (o[0] = this.measuredOrigin));
    const c = o[o.length - 1];
    c !== void 0 && l.getValue(r, c).jump(c, !1);
  }
  measureEndState() {
    const { element: l, name: o, unresolvedKeyframes: r } = this;
    if (!l || !l.current) return;
    const c = l.getValue(o);
    c && c.jump(this.measuredOrigin, !1);
    const d = r.length - 1,
      f = r[d];
    ((r[d] = Aa[o](l.measureViewportBox(), window.getComputedStyle(l.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([m, y]) => {
          l.getValue(m).set(y);
        }),
      this.resolveNoneKeyframes());
  }
}
const Pd = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius",
];
function j1(a, l, o) {
  if (a == null) return [];
  if (a instanceof EventTarget) return [a];
  if (typeof a == "string") {
    let r = document;
    const c = o?.[a] ?? r.querySelectorAll(a);
    return c ? Array.from(c) : [];
  }
  return Array.from(a).filter((r) => r != null);
}
const dd = (a, l) => (l && typeof a == "number" ? l.transform(a) : a);
function hd(a) {
  return Yv(a) && "offsetHeight" in a && !("ownerSVGElement" in a);
}
const { schedule: Fd } = t1(queueMicrotask, !1),
  cn = { x: !1, y: !1 };
function _1() {
  return cn.x || cn.y;
}
function K4(a) {
  return a === "x" || a === "y"
    ? cn[a]
      ? null
      : ((cn[a] = !0),
        () => {
          cn[a] = !1;
        })
    : cn.x || cn.y
      ? null
      : ((cn.x = cn.y = !0),
        () => {
          cn.x = cn.y = !1;
        });
}
function V1(a, l) {
  const o = j1(a),
    r = new AbortController(),
    c = { passive: !0, ...l, signal: r.signal };
  return [o, c, () => r.abort()];
}
function P4(a) {
  return !(a.pointerType === "touch" || _1());
}
function F4(a, l, o = {}) {
  const [r, c, d] = V1(a, o);
  return (
    r.forEach((f) => {
      let m = !1,
        y = !1,
        v;
      const g = () => {
          f.removeEventListener("pointerleave", M);
        },
        p = (A) => {
          (v && (v(A), (v = void 0)), g());
        },
        S = (A) => {
          ((m = !1),
            window.removeEventListener("pointerup", S),
            window.removeEventListener("pointercancel", S),
            y && ((y = !1), p(A)));
        },
        N = () => {
          ((m = !0),
            window.addEventListener("pointerup", S, c),
            window.addEventListener("pointercancel", S, c));
        },
        M = (A) => {
          if (A.pointerType !== "touch") {
            if (m) {
              y = !0;
              return;
            }
            p(A);
          }
        },
        z = (A) => {
          if (!P4(A)) return;
          y = !1;
          const U = l(f, A);
          typeof U == "function" &&
            ((v = U), f.addEventListener("pointerleave", M, c));
        };
      (f.addEventListener("pointerenter", z, c),
        f.addEventListener("pointerdown", N, c));
    }),
    d
  );
}
const U1 = (a, l) => (l ? (a === l ? !0 : U1(a, l.parentElement)) : !1),
  Jd = (a) =>
    a.pointerType === "mouse"
      ? typeof a.button != "number" || a.button <= 0
      : a.isPrimary !== !1,
  J4 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function $4(a) {
  return J4.has(a.tagName) || a.isContentEditable === !0;
}
const W4 = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function I4(a) {
  return W4.has(a.tagName) || a.isContentEditable === !0;
}
const cr = new WeakSet();
function h0(a) {
  return (l) => {
    l.key === "Enter" && a(l);
  };
}
function _f(a, l) {
  a.dispatchEvent(
    new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }),
  );
}
const t3 = (a, l) => {
  const o = a.currentTarget;
  if (!o) return;
  const r = h0(() => {
    if (cr.has(o)) return;
    _f(o, "down");
    const c = h0(() => {
        _f(o, "up");
      }),
      d = () => _f(o, "cancel");
    (o.addEventListener("keyup", c, l), o.addEventListener("blur", d, l));
  });
  (o.addEventListener("keydown", r, l),
    o.addEventListener("blur", () => o.removeEventListener("keydown", r), l));
};
function m0(a) {
  return Jd(a) && !_1();
}
const p0 = new WeakSet();
function e3(a, l, o = {}) {
  const [r, c, d] = V1(a, o),
    f = (m) => {
      const y = m.currentTarget;
      if (!m0(m) || p0.has(m)) return;
      (cr.add(y), o.stopPropagation && p0.add(m));
      const v = l(y, m),
        g = { ...c, capture: !0 },
        p = (M, z) => {
          (window.removeEventListener("pointerup", S, g),
            window.removeEventListener("pointercancel", N, g),
            cr.has(y) && cr.delete(y),
            m0(M) && typeof v == "function" && v(M, { success: z }));
        },
        S = (M) => {
          p(
            M,
            y === window ||
              y === document ||
              o.useGlobalTarget ||
              U1(y, M.target),
          );
        },
        N = (M) => {
          p(M, !1);
        };
      (window.addEventListener("pointerup", S, g),
        window.addEventListener("pointercancel", N, g));
    };
  return (
    r.forEach((m) => {
      ((o.useGlobalTarget ? window : m).addEventListener("pointerdown", f, c),
        hd(m) &&
          (m.addEventListener("focus", (v) => t3(v, c)),
          !$4(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0)));
    }),
    d
  );
}
function $d(a) {
  return Yv(a) && "ownerSVGElement" in a;
}
const fr = new WeakMap();
let dr;
const B1 = (a, l, o) => (r, c) =>
    c && c[0]
      ? c[0][a + "Size"]
      : $d(r) && "getBBox" in r
        ? r.getBBox()[l]
        : r[o],
  n3 = B1("inline", "width", "offsetWidth"),
  a3 = B1("block", "height", "offsetHeight");
function i3({ target: a, borderBoxSize: l }) {
  fr.get(a)?.forEach((o) => {
    o(a, {
      get width() {
        return n3(a, l);
      },
      get height() {
        return a3(a, l);
      },
    });
  });
}
function l3(a) {
  a.forEach(i3);
}
function s3() {
  typeof ResizeObserver > "u" || (dr = new ResizeObserver(l3));
}
function o3(a, l) {
  dr || s3();
  const o = j1(a);
  return (
    o.forEach((r) => {
      let c = fr.get(r);
      (c || ((c = new Set()), fr.set(r, c)), c.add(l), dr?.observe(r));
    }),
    () => {
      o.forEach((r) => {
        const c = fr.get(r);
        (c?.delete(l), c?.size || dr?.unobserve(r));
      });
    }
  );
}
const hr = new Set();
let $i;
function r3() {
  (($i = () => {
    const a = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    hr.forEach((l) => l(a));
  }),
    window.addEventListener("resize", $i));
}
function u3(a) {
  return (
    hr.add(a),
    $i || r3(),
    () => {
      (hr.delete(a),
        !hr.size &&
          typeof $i == "function" &&
          (window.removeEventListener("resize", $i), ($i = void 0)));
    }
  );
}
function y0(a, l) {
  return typeof a == "function" ? u3(a) : o3(a, l);
}
function c3(a) {
  return $d(a) && a.tagName === "svg";
}
const f3 = [...D1, $t, fn],
  d3 = (a) => f3.find(M1(a)),
  g0 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Wi = () => ({ x: g0(), y: g0() }),
  v0 = () => ({ min: 0, max: 0 }),
  It = () => ({ x: v0(), y: v0() }),
  h3 = new WeakMap();
function _r(a) {
  return a !== null && typeof a == "object" && typeof a.start == "function";
}
function ms(a) {
  return typeof a == "string" || Array.isArray(a);
}
const Wd = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Id = ["initial", ...Wd];
function Vr(a) {
  return _r(a.animate) || Id.some((l) => ms(a[l]));
}
function L1(a) {
  return !!(Vr(a) || a.variants);
}
function m3(a, l, o) {
  for (const r in l) {
    const c = l[r],
      d = o[r];
    if (ye(c)) a.addValue(r, c);
    else if (ye(d)) a.addValue(r, el(c, { owner: a }));
    else if (d !== c)
      if (a.hasValue(r)) {
        const f = a.getValue(r);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = a.getStaticValue(r);
        a.addValue(r, el(f !== void 0 ? f : c, { owner: a }));
      }
  }
  for (const r in o) l[r] === void 0 && a.removeValue(r);
  return l;
}
const md = { current: null },
  H1 = { current: !1 },
  p3 = typeof window < "u";
function y3() {
  if (((H1.current = !0), !!p3))
    if (window.matchMedia) {
      const a = window.matchMedia("(prefers-reduced-motion)"),
        l = () => (md.current = a.matches);
      (a.addEventListener("change", l), l());
    } else md.current = !1;
}
const x0 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let Cr = {};
function Y1(a) {
  Cr = a;
}
function g3() {
  return Cr;
}
class v3 {
  scrapeMotionValuesFromProps(l, o, r) {
    return {};
  }
  constructor(
    {
      parent: l,
      props: o,
      presenceContext: r,
      reducedMotionConfig: c,
      skipAnimations: d,
      blockInitialAnimation: f,
      visualState: m,
    },
    y = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = kd),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const N = Se.now();
        this.renderScheduledAt < N &&
          ((this.renderScheduledAt = N), _t.render(this.render, !1, !0));
      }));
    const { latestValues: v, renderState: g } = m;
    ((this.latestValues = v),
      (this.baseTarget = { ...v }),
      (this.initialValues = o.initial ? { ...v } : {}),
      (this.renderState = g),
      (this.parent = l),
      (this.props = o),
      (this.presenceContext = r),
      (this.depth = l ? l.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.skipAnimationsConfig = d),
      (this.options = y),
      (this.blockInitialAnimation = !!f),
      (this.isControllingVariants = Vr(o)),
      (this.isVariantNode = L1(o)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(l && l.current)));
    const { willChange: p, ...S } = this.scrapeMotionValuesFromProps(
      o,
      {},
      this,
    );
    for (const N in S) {
      const M = S[N];
      v[N] !== void 0 && ye(M) && M.set(v[N]);
    }
  }
  mount(l) {
    if (this.hasBeenMounted)
      for (const o in this.initialValues)
        (this.values.get(o)?.jump(this.initialValues[o]),
          (this.latestValues[o] = this.initialValues[o]));
    ((this.current = l),
      h3.set(l, this),
      this.projection && !this.projection.instance && this.projection.mount(l),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((o, r) => this.bindToMotionValue(r, o)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (H1.current || y3(), (this.shouldReduceMotion = md.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    (this.projection && this.projection.unmount(),
      Na(this.notifyUpdate),
      Na(this.render),
      this.valueSubscriptions.forEach((l) => l()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this));
    for (const l in this.events) this.events[l].clear();
    for (const l in this.features) {
      const o = this.features[l];
      o && (o.unmount(), (o.isMounted = !1));
    }
    this.current = null;
  }
  addChild(l) {
    (this.children.add(l),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(l));
  }
  removeChild(l) {
    (this.children.delete(l),
      this.enteringChildren && this.enteringChildren.delete(l));
  }
  bindToMotionValue(l, o) {
    if (
      (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(),
      o.accelerate && S1.has(l) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: f,
          keyframes: m,
          times: y,
          ease: v,
          duration: g,
        } = o.accelerate,
        p = new x1({
          element: this.current,
          name: l,
          keyframes: m,
          times: y,
          ease: v,
          duration: qe(g),
        }),
        S = f(p);
      this.valueSubscriptions.set(l, () => {
        (S(), p.cancel());
      });
      return;
    }
    const r = ol.has(l);
    r && this.onBindTransform && this.onBindTransform();
    const c = o.on("change", (f) => {
      ((this.latestValues[l] = f),
        this.props.onUpdate && _t.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let d;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (d = window.MotionCheckAppearSync(this, l, o)),
      this.valueSubscriptions.set(l, () => {
        (c(), d && d());
      }));
  }
  sortNodePosition(l) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== l.type
      ? 0
      : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in Cr) {
      const o = Cr[l];
      if (!o) continue;
      const { isEnabled: r, Feature: c } = o;
      if (
        (!this.features[l] &&
          c &&
          r(this.props) &&
          (this.features[l] = new c(this)),
        this.features[l])
      ) {
        const d = this.features[l];
        d.isMounted ? d.update() : (d.mount(), (d.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : It();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, o) {
    this.latestValues[l] = o;
  }
  update(l, o) {
    ((l.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = l),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = o));
    for (let r = 0; r < x0.length; r++) {
      const c = x0[r];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](),
        delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        f = l[d];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    ((this.prevMotionValues = m3(
      this,
      this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(l) {
    const o = this.getClosestVariantNode();
    if (o)
      return (
        o.variantChildren && o.variantChildren.add(l),
        () => o.variantChildren.delete(l)
      );
  }
  addValue(l, o) {
    const r = this.values.get(l);
    o !== r &&
      (r && this.removeValue(l),
      this.bindToMotionValue(l, o),
      this.values.set(l, o),
      (this.latestValues[l] = o.get()));
  }
  removeValue(l) {
    this.values.delete(l);
    const o = this.valueSubscriptions.get(l);
    (o && (o(), this.valueSubscriptions.delete(l)),
      delete this.latestValues[l],
      this.removeValueFromRenderState(l, this.renderState));
  }
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, o) {
    if (this.props.values && this.props.values[l]) return this.props.values[l];
    let r = this.values.get(l);
    return (
      r === void 0 &&
        o !== void 0 &&
        ((r = el(o === null ? void 0 : o, { owner: this })),
        this.addValue(l, r)),
      r
    );
  }
  readValue(l, o) {
    let r =
      this.latestValues[l] !== void 0 || !this.current
        ? this.latestValues[l]
        : (this.getBaseTargetFromProps(this.props, l) ??
          this.readValueFromInstance(this.current, l, this.options));
    return (
      r != null &&
        (typeof r == "string" && (Hv(r) || qv(r))
          ? (r = parseFloat(r))
          : !d3(r) && fn.test(o) && (r = z1(l, o)),
        this.setBaseTarget(l, ye(r) ? r.get() : r)),
      ye(r) ? r.get() : r
    );
  }
  setBaseTarget(l, o) {
    this.baseTarget[l] = o;
  }
  getBaseTarget(l) {
    const { initial: o } = this.props;
    let r;
    if (typeof o == "string" || typeof o == "object") {
      const d = Qd(this.props, o, this.presenceContext?.custom);
      d && (r = d[l]);
    }
    if (o && r !== void 0) return r;
    const c = this.getBaseTargetFromProps(this.props, l);
    return c !== void 0 && !ye(c)
      ? c
      : this.initialValues[l] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[l];
  }
  on(l, o) {
    return (
      this.events[l] || (this.events[l] = new _d()),
      this.events[l].add(o)
    );
  }
  notify(l, ...o) {
    this.events[l] && this.events[l].notify(...o);
  }
  scheduleRenderMicrotask() {
    Fd.render(this.render);
  }
}
class q1 extends v3 {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = Q4));
  }
  sortInstanceNodePosition(l, o) {
    return l.compareDocumentPosition(o) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, o) {
    const r = l.style;
    return r ? r[o] : void 0;
  }
  removeValueFromRenderState(l, { vars: o, style: r }) {
    (delete o[l], delete r[l]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    ye(l) &&
      (this.childSubscription = l.on("change", (o) => {
        this.current && (this.current.textContent = `${o}`);
      }));
  }
}
class Ra {
  constructor(l) {
    ((this.isMounted = !1), (this.node = l));
  }
  update() {}
}
function G1({ top: a, left: l, right: o, bottom: r }) {
  return { x: { min: l, max: o }, y: { min: a, max: r } };
}
function x3({ x: a, y: l }) {
  return { top: l.min, right: a.max, bottom: l.max, left: a.min };
}
function b3(a, l) {
  if (!l) return a;
  const o = l({ x: a.left, y: a.top }),
    r = l({ x: a.right, y: a.bottom });
  return { top: o.y, left: o.x, bottom: r.y, right: r.x };
}
function Vf(a) {
  return a === void 0 || a === 1;
}
function pd({ scale: a, scaleX: l, scaleY: o }) {
  return !Vf(a) || !Vf(l) || !Vf(o);
}
function ti(a) {
  return (
    pd(a) ||
    k1(a) ||
    a.z ||
    a.rotate ||
    a.rotateX ||
    a.rotateY ||
    a.skewX ||
    a.skewY
  );
}
function k1(a) {
  return b0(a.x) || b0(a.y);
}
function b0(a) {
  return a && a !== "0%";
}
function Ar(a, l, o) {
  const r = a - o,
    c = l * r;
  return o + c;
}
function S0(a, l, o, r, c) {
  return (c !== void 0 && (a = Ar(a, c, r)), Ar(a, o, r) + l);
}
function yd(a, l = 0, o = 1, r, c) {
  ((a.min = S0(a.min, l, o, r, c)), (a.max = S0(a.max, l, o, r, c)));
}
function X1(a, { x: l, y: o }) {
  (yd(a.x, l.translate, l.scale, l.originPoint),
    yd(a.y, o.translate, o.scale, o.originPoint));
}
const T0 = 0.999999999999,
  E0 = 1.0000000000001;
function S3(a, l, o, r = !1) {
  const c = o.length;
  if (!c) return;
  l.x = l.y = 1;
  let d, f;
  for (let m = 0; m < c; m++) {
    ((d = o[m]), (f = d.projectionDelta));
    const { visualElement: y } = d.options;
    (y && y.props.style && y.props.style.display === "contents") ||
      (r &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        (wn(a.x, -d.scroll.offset.x), wn(a.y, -d.scroll.offset.y)),
      f && ((l.x *= f.x.scale), (l.y *= f.y.scale), X1(a, f)),
      r && ti(d.latestValues) && mr(a, d.latestValues, d.layout?.layoutBox));
  }
  (l.x < E0 && l.x > T0 && (l.x = 1), l.y < E0 && l.y > T0 && (l.y = 1));
}
function wn(a, l) {
  ((a.min += l), (a.max += l));
}
function C0(a, l, o, r, c = 0.5) {
  const d = jt(a.min, a.max, c);
  yd(a, l, o, d, r);
}
function A0(a, l) {
  return typeof a == "string" ? (parseFloat(a) / 100) * (l.max - l.min) : a;
}
function mr(a, l, o) {
  const r = o ?? a;
  (C0(a.x, A0(l.x, r.x), l.scaleX, l.scale, l.originX),
    C0(a.y, A0(l.y, r.y), l.scaleY, l.scale, l.originY));
}
function Z1(a, l) {
  return G1(b3(a.getBoundingClientRect(), l));
}
function T3(a, l, o) {
  const r = Z1(a, o),
    { scroll: c } = l;
  return (c && (wn(r.x, c.offset.x), wn(r.y, c.offset.y)), r);
}
const E3 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  C3 = sl.length;
function A3(a, l, o) {
  let r = "",
    c = !0;
  for (let f = 0; f < C3; f++) {
    const m = sl[f],
      y = a[m];
    if (y === void 0) continue;
    let v = !0;
    if (typeof y == "number") v = y === (m.startsWith("scale") ? 1 : 0);
    else {
      const g = parseFloat(y);
      v = m.startsWith("scale") ? g === 1 : g === 0;
    }
    if (!v || o) {
      const g = dd(y, Er[m]);
      if (!v) {
        c = !1;
        const p = E3[m] || m;
        r += `${p}(${g}) `;
      }
      o && (l[m] = g);
    }
  }
  const d = a.pathRotation;
  return (
    d && ((c = !1), (r += `rotate(${dd(d, Er.pathRotation)}) `)),
    (r = r.trim()),
    o ? (r = o(l, c ? "" : r)) : c && (r = "none"),
    r
  );
}
function th(a, l, o) {
  const { style: r, vars: c, transformOrigin: d } = a;
  let f = !1,
    m = !1;
  for (const y in l) {
    const v = l[y];
    if (ol.has(y)) {
      f = !0;
      continue;
    } else if (n1(y)) {
      c[y] = v;
      continue;
    } else {
      const g = dd(v, Er[y]);
      y.startsWith("origin") ? ((m = !0), (d[y] = g)) : (r[y] = g);
    }
  }
  if (
    (l.transform ||
      (f || o
        ? (r.transform = A3(l, a.transform, o))
        : r.transform && (r.transform = "none")),
    m)
  ) {
    const { originX: y = "50%", originY: v = "50%", originZ: g = 0 } = d;
    r.transformOrigin = `${y} ${v} ${g}`;
  }
}
function Q1(a, { style: l, vars: o }, r, c) {
  const d = a.style;
  let f;
  for (f in l) d[f] = l[f];
  c?.applyProjectionStyles(d, r);
  for (f in o) d.setProperty(f, o[f]);
}
function w0(a, l) {
  return l.max === l.min ? 0 : (a / (l.max - l.min)) * 100;
}
const ls = {
    correct: (a, l) => {
      if (!l.target) return a;
      if (typeof a == "string")
        if (W.test(a)) a = parseFloat(a);
        else return a;
      const o = w0(a, l.target.x),
        r = w0(a, l.target.y);
      return `${o}% ${r}%`;
    },
  },
  w3 = {
    correct: (a, { treeScale: l, projectionDelta: o }) => {
      const r = a,
        c = fn.parse(a);
      if (c.length > 5) return r;
      const d = fn.createTransformer(a),
        f = typeof c[0] != "number" ? 1 : 0,
        m = o.x.scale * l.x,
        y = o.y.scale * l.y;
      ((c[0 + f] /= m), (c[1 + f] /= y));
      const v = jt(m, y, 0.5);
      return (
        typeof c[2 + f] == "number" && (c[2 + f] /= v),
        typeof c[3 + f] == "number" && (c[3 + f] /= v),
        d(c)
      );
    },
  },
  gd = {
    borderRadius: { ...ls, applyTo: [...Pd] },
    borderTopLeftRadius: ls,
    borderTopRightRadius: ls,
    borderBottomLeftRadius: ls,
    borderBottomRightRadius: ls,
    boxShadow: w3,
  };
function K1(a, { layout: l, layoutId: o }) {
  return (
    ol.has(a) ||
    a.startsWith("origin") ||
    ((l || o !== void 0) && (!!gd[a] || a === "opacity"))
  );
}
function eh(a, l, o) {
  const r = a.style,
    c = l?.style,
    d = {};
  if (!r) return d;
  for (const f in r)
    (ye(r[f]) ||
      (c && ye(c[f])) ||
      K1(f, a) ||
      o?.getValue(f)?.liveStyle !== void 0) &&
      (d[f] = r[f]);
  return d;
}
function N3(a) {
  return window.getComputedStyle(a);
}
class R3 extends q1 {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Q1));
  }
  mount(l) {
    (zr(!!l.style), super.mount(l));
  }
  readValueFromInstance(l, o) {
    if (ol.has(o)) return this.projection?.isProjecting ? ed(o) : PC(l, o);
    {
      const r = N3(l),
        c = (n1(o) ? r.getPropertyValue(o) : r[o]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: o }) {
    return Z1(l, o);
  }
  build(l, o, r) {
    th(l, o, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return eh(l, o, r);
  }
}
const M3 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  D3 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function O3(a, l, o = 1, r = 0, c = !0) {
  a.pathLength = 1;
  const d = c ? M3 : D3;
  ((a[d.offset] = `${-r}`), (a[d.array] = `${l} ${o}`));
}
const z3 = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function P1(
  a,
  {
    attrX: l,
    attrY: o,
    attrScale: r,
    pathLength: c,
    pathSpacing: d = 1,
    pathOffset: f = 0,
    ...m
  },
  y,
  v,
  g,
) {
  if ((th(a, m, v), y)) {
    a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
    return;
  }
  ((a.attrs = a.style), (a.style = {}));
  const { attrs: p, style: S } = a;
  (p.transform && ((S.transform = p.transform), delete p.transform),
    (S.transform || p.transformOrigin) &&
      ((S.transformOrigin = p.transformOrigin ?? "50% 50%"),
      delete p.transformOrigin),
    S.transform &&
      ((S.transformBox = g?.transformBox ?? "fill-box"),
      delete p.transformBox));
  for (const N of z3) p[N] !== void 0 && ((S[N] = p[N]), delete p[N]);
  (l !== void 0 && (p.x = l),
    o !== void 0 && (p.y = o),
    r !== void 0 && (p.scale = r),
    c !== void 0 && O3(p, c, d, f, !1));
}
const F1 = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  J1 = (a) => typeof a == "string" && a.toLowerCase() === "svg";
function j3(a, l, o, r) {
  Q1(a, l, void 0, r);
  for (const c in l.attrs) a.setAttribute(F1.has(c) ? c : Kd(c), l.attrs[c]);
}
function $1(a, l, o) {
  const r = eh(a, l, o);
  for (const c in a)
    if (ye(a[c]) || ye(l[c])) {
      const d =
        sl.indexOf(c) !== -1
          ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
          : c;
      r[d] = a[c];
    }
  return r;
}
class _3 extends q1 {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = It));
  }
  getBaseTargetFromProps(l, o) {
    return l[o];
  }
  readValueFromInstance(l, o) {
    if (ol.has(o)) {
      const r = O1(o);
      return (r && r.default) || 0;
    }
    return ((o = F1.has(o) ? o : Kd(o)), l.getAttribute(o));
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return $1(l, o, r);
  }
  build(l, o, r) {
    P1(l, o, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(l, o, r, c) {
    j3(l, o, r, c);
  }
  mount(l) {
    ((this.isSVGTag = J1(l.tagName)), super.mount(l));
  }
}
const V3 = Id.length;
function W1(a) {
  if (!a) return;
  if (!a.isControllingVariants) {
    const o = a.parent ? W1(a.parent) || {} : {};
    return (a.props.initial !== void 0 && (o.initial = a.props.initial), o);
  }
  const l = {};
  for (let o = 0; o < V3; o++) {
    const r = Id[o],
      c = a.props[r];
    (ms(c) || c === !1) && (l[r] = c);
  }
  return l;
}
function I1(a, l) {
  if (!Array.isArray(l)) return !1;
  const o = l.length;
  if (o !== a.length) return !1;
  for (let r = 0; r < o; r++) if (l[r] !== a[r]) return !1;
  return !0;
}
const U3 = [...Wd].reverse(),
  B3 = Wd.length;
function L3(a) {
  return (l) =>
    Promise.all(l.map(({ animation: o, options: r }) => V4(a, o, r)));
}
function H3(a) {
  let l = L3(a),
    o = N0(),
    r = !0,
    c = !1;
  const d = (v) => (g, p) => {
    const S = Ii(a, p, v === "exit" ? a.presenceContext?.custom : void 0);
    if (S) {
      const { transition: N, transitionEnd: M, ...z } = S;
      g = { ...g, ...z, ...M };
    }
    return g;
  };
  function f(v) {
    l = v(a);
  }
  function m(v) {
    const { props: g } = a,
      p = W1(a.parent) || {},
      S = [],
      N = new Set();
    let M = {},
      z = 1 / 0;
    for (let U = 0; U < B3; U++) {
      const Y = U3[U],
        B = o[Y],
        q = g[Y] !== void 0 ? g[Y] : p[Y],
        K = ms(q),
        tt = Y === v ? B.isActive : null;
      tt === !1 && (z = U);
      let Q = q === p[Y] && q !== g[Y] && K;
      if (
        (Q && (r || c) && a.manuallyAnimateOnMount && (Q = !1),
        (B.protectedKeys = { ...M }),
        (!B.isActive && tt === null) ||
          (!q && !B.prevProp) ||
          _r(q) ||
          typeof q == "boolean")
      )
        continue;
      if (Y === "exit" && B.isActive && tt !== !0) {
        B.prevResolvedValues && (M = { ...M, ...B.prevResolvedValues });
        continue;
      }
      const G = Y3(B.prevProp, q);
      let it = G || (Y === v && B.isActive && !Q && K) || (U > z && K),
        F = !1;
      const dt = Array.isArray(q) ? q : [q];
      let St = dt.reduce(d(Y), {});
      tt === !1 && (St = {});
      const { prevResolvedValues: Xt = {} } = B,
        Zt = { ...Xt, ...St },
        pt = (J) => {
          ((it = !0),
            N.has(J) && ((F = !0), N.delete(J)),
            (B.needsAnimating[J] = !0));
          const ft = a.getValue(J);
          ft && (ft.liveStyle = !1);
        };
      for (const J in Zt) {
        const ft = St[J],
          mt = Xt[J];
        if (M.hasOwnProperty(J)) continue;
        let ee = !1;
        (od(ft) && od(mt) ? (ee = !I1(ft, mt) || G) : (ee = ft !== mt),
          ee
            ? ft != null
              ? pt(J)
              : N.add(J)
            : ft !== void 0 && N.has(J)
              ? pt(J)
              : (B.protectedKeys[J] = !0));
      }
      ((B.prevProp = q),
        (B.prevResolvedValues = St),
        B.isActive && (M = { ...M, ...St }),
        (r || c) && a.blockInitialAnimation && (it = !1));
      const X = Q && G;
      it &&
        (!X || F) &&
        S.push(
          ...dt.map((J) => {
            const ft = { type: Y };
            if (
              typeof J == "string" &&
              (r || c) &&
              !X &&
              a.manuallyAnimateOnMount &&
              a.parent
            ) {
              const { parent: mt } = a,
                ee = Ii(mt, J);
              if (mt.enteringChildren && ee) {
                const { delayChildren: en } = ee.transition || {};
                ft.delay = T1(mt.enteringChildren, a, en);
              }
            }
            return { animation: J, options: ft };
          }),
        );
    }
    if (N.size) {
      const U = {};
      if (typeof g.initial != "boolean") {
        const Y = Ii(a, Array.isArray(g.initial) ? g.initial[0] : g.initial);
        Y && Y.transition && (U.transition = Y.transition);
      }
      (N.forEach((Y) => {
        const B = a.getBaseTarget(Y),
          q = a.getValue(Y);
        (q && (q.liveStyle = !0), (U[Y] = B ?? null));
      }),
        S.push({ animation: U }));
    }
    let A = !!S.length;
    return (
      r &&
        (g.initial === !1 || g.initial === g.animate) &&
        !a.manuallyAnimateOnMount &&
        (A = !1),
      (r = !1),
      (c = !1),
      A ? l(S) : Promise.resolve()
    );
  }
  function y(v, g) {
    if (o[v].isActive === g) return Promise.resolve();
    (a.variantChildren?.forEach((S) => S.animationState?.setActive(v, g)),
      (o[v].isActive = g));
    const p = m(v);
    for (const S in o) o[S].protectedKeys = {};
    return p;
  }
  return {
    animateChanges: m,
    setActive: y,
    setAnimateFunction: f,
    getState: () => o,
    reset: () => {
      ((o = N0()), (c = !0));
    },
  };
}
function Y3(a, l) {
  return typeof l == "string" ? l !== a : Array.isArray(l) ? !I1(l, a) : !1;
}
function Ia(a = !1) {
  return {
    isActive: a,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function N0() {
  return {
    animate: Ia(!0),
    whileInView: Ia(),
    whileHover: Ia(),
    whileTap: Ia(),
    whileDrag: Ia(),
    whileFocus: Ia(),
    exit: Ia(),
  };
}
function vd(a, l) {
  ((a.min = l.min), (a.max = l.max));
}
function un(a, l) {
  (vd(a.x, l.x), vd(a.y, l.y));
}
function R0(a, l) {
  ((a.translate = l.translate),
    (a.scale = l.scale),
    (a.originPoint = l.originPoint),
    (a.origin = l.origin));
}
const tx = 1e-4,
  q3 = 1 - tx,
  G3 = 1 + tx,
  ex = 0.01,
  k3 = 0 - ex,
  X3 = 0 + ex;
function Te(a) {
  return a.max - a.min;
}
function Z3(a, l, o) {
  return Math.abs(a - l) <= o;
}
function M0(a, l, o, r = 0.5) {
  ((a.origin = r),
    (a.originPoint = jt(l.min, l.max, a.origin)),
    (a.scale = Te(o) / Te(l)),
    (a.translate = jt(o.min, o.max, a.origin) - a.originPoint),
    ((a.scale >= q3 && a.scale <= G3) || isNaN(a.scale)) && (a.scale = 1),
    ((a.translate >= k3 && a.translate <= X3) || isNaN(a.translate)) &&
      (a.translate = 0));
}
function us(a, l, o, r) {
  (M0(a.x, l.x, o.x, r ? r.originX : void 0),
    M0(a.y, l.y, o.y, r ? r.originY : void 0));
}
function D0(a, l, o, r = 0) {
  const c = r ? jt(o.min, o.max, r) : o.min;
  ((a.min = c + l.min), (a.max = a.min + Te(l)));
}
function Q3(a, l, o, r) {
  (D0(a.x, l.x, o.x, r?.x), D0(a.y, l.y, o.y, r?.y));
}
function O0(a, l, o, r = 0) {
  const c = r ? jt(o.min, o.max, r) : o.min;
  ((a.min = l.min - c), (a.max = a.min + Te(l)));
}
function wr(a, l, o, r) {
  (O0(a.x, l.x, o.x, r?.x), O0(a.y, l.y, o.y, r?.y));
}
function z0(a, l, o, r, c) {
  return (
    (a -= l),
    (a = Ar(a, 1 / o, r)),
    c !== void 0 && (a = Ar(a, 1 / c, r)),
    a
  );
}
function K3(a, l = 0, o = 1, r = 0.5, c, d = a, f = a) {
  if (
    (Rn.test(l) &&
      ((l = parseFloat(l)), (l = jt(f.min, f.max, l / 100) - f.min)),
    typeof l != "number")
  )
    return;
  let m = jt(d.min, d.max, r);
  (a === d && (m -= l),
    (a.min = z0(a.min, l, o, m, c)),
    (a.max = z0(a.max, l, o, m, c)));
}
function j0(a, l, [o, r, c], d, f) {
  K3(a, l[o], l[r], l[c], l.scale, d, f);
}
const P3 = ["x", "scaleX", "originX"],
  F3 = ["y", "scaleY", "originY"];
function _0(a, l, o, r) {
  (j0(a.x, l, P3, o ? o.x : void 0, r ? r.x : void 0),
    j0(a.y, l, F3, o ? o.y : void 0, r ? r.y : void 0));
}
function V0(a) {
  return a.translate === 0 && a.scale === 1;
}
function nx(a) {
  return V0(a.x) && V0(a.y);
}
function U0(a, l) {
  return a.min === l.min && a.max === l.max;
}
function J3(a, l) {
  return U0(a.x, l.x) && U0(a.y, l.y);
}
function B0(a, l) {
  return (
    Math.round(a.min) === Math.round(l.min) &&
    Math.round(a.max) === Math.round(l.max)
  );
}
function ax(a, l) {
  return B0(a.x, l.x) && B0(a.y, l.y);
}
function L0(a) {
  return Te(a.x) / Te(a.y);
}
function H0(a, l) {
  return (
    a.translate === l.translate &&
    a.scale === l.scale &&
    a.originPoint === l.originPoint
  );
}
function An(a) {
  return [a("x"), a("y")];
}
function $3(a, l, o) {
  let r = "";
  const c = a.x.translate / l.x,
    d = a.y.translate / l.y,
    f = o?.z || 0;
  if (
    ((c || d || f) && (r = `translate3d(${c}px, ${d}px, ${f}px) `),
    (l.x !== 1 || l.y !== 1) && (r += `scale(${1 / l.x}, ${1 / l.y}) `),
    o)
  ) {
    const {
      transformPerspective: v,
      rotate: g,
      pathRotation: p,
      rotateX: S,
      rotateY: N,
      skewX: M,
      skewY: z,
    } = o;
    (v && (r = `perspective(${v}px) ${r}`),
      g && (r += `rotate(${g}deg) `),
      p && (r += `rotate(${p}deg) `),
      S && (r += `rotateX(${S}deg) `),
      N && (r += `rotateY(${N}deg) `),
      M && (r += `skewX(${M}deg) `),
      z && (r += `skewY(${z}deg) `));
  }
  const m = a.x.scale * l.x,
    y = a.y.scale * l.y;
  return ((m !== 1 || y !== 1) && (r += `scale(${m}, ${y})`), r || "none");
}
const W3 = Pd.length,
  Y0 = (a) => (typeof a == "string" ? parseFloat(a) : a),
  q0 = (a) => typeof a == "number" || W.test(a);
function I3(a, l, o, r, c, d) {
  c
    ? ((a.opacity = jt(0, o.opacity ?? 1, tA(r))),
      (a.opacityExit = jt(l.opacity ?? 1, 0, eA(r))))
    : d && (a.opacity = jt(l.opacity ?? 1, o.opacity ?? 1, r));
  for (let f = 0; f < W3; f++) {
    const m = Pd[f];
    let y = G0(l, m),
      v = G0(o, m);
    if (y === void 0 && v === void 0) continue;
    (y || (y = 0),
      v || (v = 0),
      y === 0 || v === 0 || q0(y) === q0(v)
        ? ((a[m] = Math.max(jt(Y0(y), Y0(v), r), 0)),
          (Rn.test(v) || Rn.test(y)) && (a[m] += "%"))
        : (a[m] = v));
  }
  (l.rotate || o.rotate) && (a.rotate = jt(l.rotate || 0, o.rotate || 0, r));
}
function G0(a, l) {
  return a[l] !== void 0 ? a[l] : a.borderRadius;
}
const tA = ix(0, 0.5, Jv),
  eA = ix(0.5, 0.95, Ie);
function ix(a, l, o) {
  return (r) => (r < a ? 0 : r > l ? 1 : o(ds(a, l, r)));
}
function nA(a, l, o) {
  const r = ye(a) ? a : el(a);
  return (r.start(Zd("", r, l, o)), r.animation);
}
function ps(a, l, o, r = { passive: !0 }) {
  return (a.addEventListener(l, o, r), () => a.removeEventListener(l, o, r));
}
const aA = (a, l) => a.depth - l.depth;
class iA {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(l) {
    (jd(this.children, l), (this.isDirty = !0));
  }
  remove(l) {
    (vr(this.children, l), (this.isDirty = !0));
  }
  forEach(l) {
    (this.isDirty && this.children.sort(aA),
      (this.isDirty = !1),
      this.children.forEach(l));
  }
}
function lA(a, l) {
  const o = Se.now(),
    r = ({ timestamp: c }) => {
      const d = c - o;
      d >= l && (Na(r), a(d - l));
    };
  return (_t.setup(r, !0), () => Na(r));
}
function pr(a) {
  return ye(a) ? a.get() : a;
}
class sA {
  constructor() {
    this.members = [];
  }
  add(l) {
    jd(this.members, l);
    for (let o = this.members.length - 1; o >= 0; o--) {
      const r = this.members[o];
      if (r === l || r === this.lead || r === this.prevLead) continue;
      const c = r.instance;
      (!c || c.isConnected === !1) &&
        !r.snapshot &&
        (vr(this.members, r), r.unmount());
    }
    l.scheduleRender();
  }
  remove(l) {
    if (
      (vr(this.members, l),
      l === this.prevLead && (this.prevLead = void 0),
      l === this.lead)
    ) {
      const o = this.members[this.members.length - 1];
      o && this.promote(o);
    }
  }
  relegate(l) {
    for (let o = this.members.indexOf(l) - 1; o >= 0; o--) {
      const r = this.members[o];
      if (r.isPresent !== !1 && r.instance?.isConnected !== !1)
        return (this.promote(r), !0);
    }
    return !1;
  }
  promote(l, o) {
    const r = this.lead;
    if (l !== r && ((this.prevLead = r), (this.lead = l), l.show(), r)) {
      (r.updateSnapshot(), l.scheduleRender());
      const { layoutDependency: c } = r.options,
        { layoutDependency: d } = l.options;
      ((c === void 0 || c !== d) &&
        ((l.resumeFrom = r),
        o && (r.preserveOpacity = !0),
        r.snapshot &&
          ((l.snapshot = r.snapshot),
          (l.snapshot.latestValues = r.animationValues || r.latestValues)),
        l.root?.isUpdating && (l.isLayoutDirty = !0)),
        l.options.crossfade === !1 && r.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      (l.options.onExitComplete?.(),
        l.resumingFrom?.options.onExitComplete?.());
    });
  }
  scheduleRender() {
    this.members.forEach((l) => l.instance && l.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
const yr = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  Uf = ["", "X", "Y", "Z"],
  oA = 1e3;
let rA = 0;
function Bf(a, l, o, r) {
  const { latestValues: c } = l;
  c[a] && ((o[a] = c[a]), l.setStaticValue(a, 0), r && (r[a] = 0));
}
function lx(a) {
  if (((a.hasCheckedOptimisedAppear = !0), a.root === a)) return;
  const { visualElement: l } = a.options;
  if (!l) return;
  const o = N1(l);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: c, layoutId: d } = a.options;
    window.MotionCancelOptimisedAnimation(o, "transform", _t, !(c || d));
  }
  const { parent: r } = a;
  r && !r.hasCheckedOptimisedAppear && lx(r);
}
function sx({
  attachResizeListener: a,
  defaultParent: l,
  measureScroll: o,
  checkIsScrollRoot: r,
  resetTransform: c,
}) {
  return class {
    constructor(f = {}, m = l?.()) {
      ((this.id = rA++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(fA),
            this.nodes.forEach(gA),
            this.nodes.forEach(vA),
            this.nodes.forEach(dA));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = m ? m.root || m : this),
        (this.path = m ? [...m.path, m] : []),
        (this.parent = m),
        (this.depth = m ? m.depth + 1 : 0));
      for (let y = 0; y < this.path.length; y++)
        this.path[y].shouldResetTransform = !0;
      this.root === this && (this.nodes = new iA());
    }
    addEventListener(f, m) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new _d()),
        this.eventHandlers.get(f).add(m)
      );
    }
    notifyListeners(f, ...m) {
      const y = this.eventHandlers.get(f);
      y && y.notify(...m);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) return;
      ((this.isSVG = $d(f) && !c3(f)), (this.instance = f));
      const { layoutId: m, layout: y, visualElement: v } = this.options;
      if (
        (v && !v.current && v.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (y || m) && (this.isLayoutDirty = !0),
        a)
      ) {
        let g,
          p = 0;
        const S = () => (this.root.updateBlockedByResize = !1);
        (_t.read(() => {
          p = window.innerWidth;
        }),
          a(f, () => {
            const N = window.innerWidth;
            N !== p &&
              ((p = N),
              (this.root.updateBlockedByResize = !0),
              g && g(),
              (g = lA(S, 250)),
              yr.hasAnimatedSinceResize &&
                ((yr.hasAnimatedSinceResize = !1), this.nodes.forEach(Z0)));
          }));
      }
      (m && this.root.registerSharedNode(m, this),
        this.options.animate !== !1 &&
          v &&
          (m || y) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: g,
              hasLayoutChanged: p,
              hasRelativeLayoutChanged: S,
              layout: N,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const M =
                  this.options.transition || v.getDefaultTransition() || EA,
                { onLayoutAnimationStart: z, onLayoutAnimationComplete: A } =
                  v.getProps(),
                U = !this.targetLayout || !ax(this.targetLayout, N),
                Y = !p && S;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                Y ||
                (p && (U || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const B = { ...Xd(M, "layout"), onPlay: z, onComplete: A };
                ((v.shouldReduceMotion || this.options.layoutRoot) &&
                  ((B.delay = 0), (B.type = !1)),
                  this.startAnimation(B),
                  this.setAnimationOrigin(g, Y, B.path));
              } else
                (p || Z0(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = N;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const f = this.getStack();
      (f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Na(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(xA),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          lx(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const p = this.path[g];
        ((p.shouldResetTransform = !0),
          (typeof p.latestValues.x == "string" ||
            typeof p.latestValues.y == "string") &&
            (p.isLayoutDirty = !0),
          p.updateScroll("snapshot"),
          p.options.layoutRoot && p.willUpdate(!1));
      }
      const { layoutId: m, layout: y } = this.options;
      if (m === void 0 && !y) return;
      const v = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = v
        ? v(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const y = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          y && this.nodes.forEach(mA),
          this.nodes.forEach(k0));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(X0);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(pA),
            this.nodes.forEach(yA),
            this.nodes.forEach(uA),
            this.nodes.forEach(cA))
          : this.nodes.forEach(X0),
        this.clearAllSnapshots());
      const m = Se.now();
      ((me.delta = Mn(0, 1e3 / 60, m - me.timestamp)),
        (me.timestamp = m),
        (me.isProcessing = !0),
        Rf.update.process(me),
        Rf.preRender.process(me),
        Rf.render.process(me),
        (me.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Fd.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(hA), this.sharedNodes.forEach(bA));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        _t.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      _t.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !Te(this.snapshot.measuredBox.x) &&
          !Te(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let y = 0; y < this.path.length; y++) this.path[y].updateScroll();
      const f = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = It()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: m } = this.options;
      m &&
        m.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          f ? f.layoutBox : void 0,
        );
    }
    updateScroll(f = "measure") {
      let m = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (m = !1),
        m && this.instance)
      ) {
        const y = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: y,
          offset: o(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : y,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const f =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        m = this.projectionDelta && !nx(this.projectionDelta),
        y = this.getTransformTemplate(),
        v = y ? y(this.latestValues, "") : void 0,
        g = v !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (m || ti(this.latestValues) || g) &&
        (c(this.instance, v),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(f = !0) {
      const m = this.measurePageBox();
      let y = this.removeElementScroll(m);
      return (
        f && (y = this.removeTransform(y)),
        CA(y),
        {
          animationId: this.root.animationId,
          measuredBox: m,
          layoutBox: y,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: f } = this.options;
      if (!f) return It();
      const m = f.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(AA))) {
        const { scroll: v } = this.root;
        v && (wn(m.x, v.offset.x), wn(m.y, v.offset.y));
      }
      return m;
    }
    removeElementScroll(f) {
      const m = It();
      if ((un(m, f), this.scroll?.wasRoot)) return m;
      for (let y = 0; y < this.path.length; y++) {
        const v = this.path[y],
          { scroll: g, options: p } = v;
        v !== this.root &&
          g &&
          p.layoutScroll &&
          (g.wasRoot && un(m, f), wn(m.x, g.offset.x), wn(m.y, g.offset.y));
      }
      return m;
    }
    applyTransform(f, m = !1, y) {
      const v = y || It();
      un(v, f);
      for (let g = 0; g < this.path.length; g++) {
        const p = this.path[g];
        (!m &&
          p.options.layoutScroll &&
          p.scroll &&
          p !== p.root &&
          (wn(v.x, -p.scroll.offset.x), wn(v.y, -p.scroll.offset.y)),
          ti(p.latestValues) && mr(v, p.latestValues, p.layout?.layoutBox));
      }
      return (
        ti(this.latestValues) &&
          mr(v, this.latestValues, this.layout?.layoutBox),
        v
      );
    }
    removeTransform(f) {
      const m = It();
      un(m, f);
      for (let y = 0; y < this.path.length; y++) {
        const v = this.path[y];
        if (!ti(v.latestValues)) continue;
        let g;
        (v.instance &&
          (pd(v.latestValues) && v.updateSnapshot(),
          (g = It()),
          un(g, v.measurePageBox())),
          _0(m, v.latestValues, v.snapshot?.layoutBox, g));
      }
      return (ti(this.latestValues) && _0(m, this.latestValues), m);
    }
    setTargetDelta(f) {
      ((this.targetDelta = f),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== me.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      const m = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = m.isSharedProjectionDirty));
      const y = !!this.resumingFrom || this !== m;
      if (!(
        f ||
        (y && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        this.parent?.isProjectionDirty ||
        this.attemptToResolveRelativeTarget ||
        this.root.updateBlockedByResize
      ))
        return;
      const { layout: g, layoutId: p } = this.options;
      if (!this.layout || !(g || p)) return;
      this.resolvedRelativeTargetAt = me.timestamp;
      const S = this.getClosestProjectingParent();
      (S &&
        this.linkedParentVersion !== S.layoutVersion &&
        !S.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && S && S.layout
            ? this.createRelativeTarget(
                S,
                this.layout.layoutBox,
                S.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = It()), (this.targetWithTransforms = It())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              Q3(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : un(this.target, this.layout.layoutBox),
                X1(this.target, this.targetDelta))
              : un(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            S &&
            !!S.resumingFrom == !!this.resumingFrom &&
            !S.options.layoutScroll &&
            S.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(S, this.target, S.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (!(
        !this.parent ||
        pd(this.parent.latestValues) ||
        k1(this.parent.latestValues)
      ))
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(f, m, y) {
      ((this.relativeParent = f),
        (this.linkedParentVersion = f.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = It()),
        (this.relativeTargetOrigin = It()),
        wr(
          this.relativeTargetOrigin,
          m,
          y,
          this.options.layoutAnchor || void 0,
        ),
        un(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const f = this.getLead(),
        m = !!this.resumingFrom || this !== f;
      let y = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (y = !1),
        m &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (y = !1),
        this.resolvedRelativeTargetAt === me.timestamp && (y = !1),
        y)
      )
        return;
      const { layout: v, layoutId: g } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(v || g))
      )
        return;
      un(this.layoutCorrected, this.layout.layoutBox);
      const p = this.treeScale.x,
        S = this.treeScale.y;
      (S3(this.layoutCorrected, this.treeScale, this.path, m),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = It())));
      const { target: N } = f;
      if (!N) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (R0(this.prevProjectionDelta.x, this.projectionDelta.x),
          R0(this.prevProjectionDelta.y, this.projectionDelta.y)),
        us(this.projectionDelta, this.layoutCorrected, N, this.latestValues),
        (this.treeScale.x !== p ||
          this.treeScale.y !== S ||
          !H0(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !H0(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", N)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      if ((this.options.visualElement?.scheduleRender(), f)) {
        const m = this.getStack();
        m && m.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = Wi()),
        (this.projectionDelta = Wi()),
        (this.projectionDeltaWithTransform = Wi()));
    }
    setAnimationOrigin(f, m = !1, y) {
      const v = this.snapshot,
        g = v ? v.latestValues : {},
        p = { ...this.latestValues },
        S = Wi();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !m));
      const N = It(),
        M = v ? v.source : void 0,
        z = this.layout ? this.layout.source : void 0,
        A = M !== z,
        U = this.getStack(),
        Y = !U || U.members.length <= 1,
        B = !!(A && !Y && this.options.crossfade === !0 && !this.path.some(TA));
      this.animationProgress = 0;
      let q;
      const K = y?.interpolateProjection(f);
      ((this.mixTargetDelta = (tt) => {
        const Q = tt / 1e3,
          G = K?.(Q);
        (G
          ? ((S.x.translate = G.x),
            (S.x.scale = jt(f.x.scale, 1, Q)),
            (S.x.origin = f.x.origin),
            (S.x.originPoint = f.x.originPoint),
            (S.y.translate = G.y),
            (S.y.scale = jt(f.y.scale, 1, Q)),
            (S.y.origin = f.y.origin),
            (S.y.originPoint = f.y.originPoint))
          : (Q0(S.x, f.x, Q), Q0(S.y, f.y, Q)),
          this.setTargetDelta(S),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (wr(
              N,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            SA(this.relativeTarget, this.relativeTargetOrigin, N, Q),
            q && J3(this.relativeTarget, q) && (this.isProjectionDirty = !1),
            q || (q = It()),
            un(q, this.relativeTarget)),
          A &&
            ((this.animationValues = p), I3(p, g, this.latestValues, Q, B, Y)),
          G &&
            G.rotate !== void 0 &&
            (this.animationValues || (this.animationValues = p),
            (this.animationValues.pathRotation = G.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = Q));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(f) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation &&
          (Na(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = _t.update(() => {
          ((yr.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = el(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = nA(this.motionValue, [0, 1e3], {
              ...f,
              velocity: 0,
              isSync: !0,
              onUpdate: (m) => {
                (this.mixTargetDelta(m), f.onUpdate && f.onUpdate(m));
              },
              onComplete: () => {
                (f.onComplete && f.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const f = this.getStack();
      (f && f.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(oA),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let {
        targetWithTransforms: m,
        target: y,
        layout: v,
        latestValues: g,
      } = f;
      if (!(!m || !y || !v)) {
        if (
          this !== f &&
          this.layout &&
          v &&
          ox(this.options.animationType, this.layout.layoutBox, v.layoutBox)
        ) {
          y = this.target || It();
          const p = Te(this.layout.layoutBox.x);
          ((y.x.min = f.target.x.min), (y.x.max = y.x.min + p));
          const S = Te(this.layout.layoutBox.y);
          ((y.y.min = f.target.y.min), (y.y.max = y.y.min + S));
        }
        (un(m, y),
          mr(m, g),
          us(this.projectionDeltaWithTransform, this.layoutCorrected, m, g));
      }
    }
    registerSharedNode(f, m) {
      (this.sharedNodes.has(f) || this.sharedNodes.set(f, new sA()),
        this.sharedNodes.get(f).add(m));
      const v = m.options.initialPromotionConfig;
      m.promote({
        transition: v ? v.transition : void 0,
        preserveFollowOpacity:
          v && v.shouldPreserveFollowOpacity
            ? v.shouldPreserveFollowOpacity(m)
            : void 0,
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: m, preserveFollowOpacity: y } = {}) {
      const v = this.getStack();
      (v && v.promote(this, y),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        m && this.setOptions({ transition: m }));
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let m = !1;
      const { latestValues: y } = f;
      if (
        ((y.z ||
          y.rotate ||
          y.rotateX ||
          y.rotateY ||
          y.rotateZ ||
          y.skewX ||
          y.skewY) &&
          (m = !0),
        !m)
      )
        return;
      const v = {};
      y.z && Bf("z", f, v, this.animationValues);
      for (let g = 0; g < Uf.length; g++)
        (Bf(`rotate${Uf[g]}`, f, v, this.animationValues),
          Bf(`skew${Uf[g]}`, f, v, this.animationValues));
      f.render();
      for (const g in v)
        (f.setStaticValue(g, v[g]),
          this.animationValues && (this.animationValues[g] = v[g]));
      f.scheduleRender();
    }
    applyProjectionStyles(f, m) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const y = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (f.visibility = ""),
          (f.opacity = ""),
          (f.pointerEvents = pr(m?.pointerEvents) || ""),
          (f.transform = y ? y(this.latestValues, "") : "none"));
        return;
      }
      const v = this.getLead();
      if (!this.projectionDelta || !this.layout || !v.target) {
        (this.options.layoutId &&
          ((f.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (f.pointerEvents = pr(m?.pointerEvents) || "")),
          this.hasProjected &&
            !ti(this.latestValues) &&
            ((f.transform = y ? y({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      f.visibility = "";
      const g = v.animationValues || v.latestValues;
      this.applyTransformsToTarget();
      let p = $3(this.projectionDeltaWithTransform, this.treeScale, g);
      (y && (p = y(g, p)), (f.transform = p));
      const { x: S, y: N } = this.projectionDelta;
      ((f.transformOrigin = `${S.origin * 100}% ${N.origin * 100}% 0`),
        v.animationValues
          ? (f.opacity =
              v === this
                ? (g.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : g.opacityExit)
          : (f.opacity =
              v === this
                ? g.opacity !== void 0
                  ? g.opacity
                  : ""
                : g.opacityExit !== void 0
                  ? g.opacityExit
                  : 0));
      for (const M in gd) {
        if (g[M] === void 0) continue;
        const { correct: z, applyTo: A, isCSSVariable: U } = gd[M],
          Y = p === "none" ? g[M] : z(g[M], v);
        if (A) {
          const B = A.length;
          for (let q = 0; q < B; q++) f[A[q]] = Y;
        } else
          U ? (this.options.visualElement.renderState.vars[M] = Y) : (f[M] = Y);
      }
      this.options.layoutId &&
        (f.pointerEvents = v === this ? pr(m?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((f) => f.currentAnimation?.stop()),
        this.root.nodes.forEach(k0),
        this.root.sharedNodes.clear());
    }
  };
}
function uA(a) {
  a.updateLayout();
}
function cA(a) {
  const l = a.resumeFrom?.snapshot || a.snapshot;
  if (a.isLead() && a.layout && l && a.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: r } = a.layout,
      { animationType: c } = a.options,
      d = l.source !== a.layout.source;
    if (c === "size")
      An((g) => {
        const p = d ? l.measuredBox[g] : l.layoutBox[g],
          S = Te(p);
        ((p.min = o[g].min), (p.max = p.min + S));
      });
    else if (c === "x" || c === "y") {
      const g = c === "x" ? "y" : "x";
      vd(d ? l.measuredBox[g] : l.layoutBox[g], o[g]);
    } else
      ox(c, l.layoutBox, o) &&
        An((g) => {
          const p = d ? l.measuredBox[g] : l.layoutBox[g],
            S = Te(o[g]);
          ((p.max = p.min + S),
            a.relativeTarget &&
              !a.currentAnimation &&
              ((a.isProjectionDirty = !0),
              (a.relativeTarget[g].max = a.relativeTarget[g].min + S)));
        });
    const f = Wi();
    us(f, o, l.layoutBox);
    const m = Wi();
    d ? us(m, a.applyTransform(r, !0), l.measuredBox) : us(m, o, l.layoutBox);
    const y = !nx(f);
    let v = !1;
    if (!a.resumeFrom) {
      const g = a.getClosestProjectingParent();
      if (g && !g.resumeFrom) {
        const { snapshot: p, layout: S } = g;
        if (p && S) {
          const N = a.options.layoutAnchor || void 0,
            M = It();
          wr(M, l.layoutBox, p.layoutBox, N);
          const z = It();
          (wr(z, o, S.layoutBox, N),
            ax(M, z) || (v = !0),
            g.options.layoutRoot &&
              ((a.relativeTarget = z),
              (a.relativeTargetOrigin = M),
              (a.relativeParent = g)));
        }
      }
    }
    a.notifyListeners("didUpdate", {
      layout: o,
      snapshot: l,
      delta: m,
      layoutDelta: f,
      hasLayoutChanged: y,
      hasRelativeLayoutChanged: v,
    });
  } else if (a.isLead()) {
    const { onExitComplete: o } = a.options;
    o && o();
  }
  a.options.transition = void 0;
}
function fA(a) {
  a.parent &&
    (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty),
    a.isSharedProjectionDirty ||
      (a.isSharedProjectionDirty = !!(
        a.isProjectionDirty ||
        a.parent.isProjectionDirty ||
        a.parent.isSharedProjectionDirty
      )),
    a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty));
}
function dA(a) {
  a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1;
}
function hA(a) {
  a.clearSnapshot();
}
function k0(a) {
  a.clearMeasurements();
}
function mA(a) {
  ((a.isLayoutDirty = !0), a.updateLayout());
}
function X0(a) {
  a.isLayoutDirty = !1;
}
function pA(a) {
  a.isAnimationBlocked &&
    a.layout &&
    !a.isLayoutDirty &&
    ((a.snapshot = a.layout), (a.isLayoutDirty = !0));
}
function yA(a) {
  const { visualElement: l } = a.options;
  (l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"),
    a.resetTransform());
}
function Z0(a) {
  (a.finishAnimation(),
    (a.targetDelta = a.relativeTarget = a.target = void 0),
    (a.isProjectionDirty = !0));
}
function gA(a) {
  a.resolveTargetDelta();
}
function vA(a) {
  a.calcProjection();
}
function xA(a) {
  a.resetSkewAndRotation();
}
function bA(a) {
  a.removeLeadSnapshot();
}
function Q0(a, l, o) {
  ((a.translate = jt(l.translate, 0, o)),
    (a.scale = jt(l.scale, 1, o)),
    (a.origin = l.origin),
    (a.originPoint = l.originPoint));
}
function K0(a, l, o, r) {
  ((a.min = jt(l.min, o.min, r)), (a.max = jt(l.max, o.max, r)));
}
function SA(a, l, o, r) {
  (K0(a.x, l.x, o.x, r), K0(a.y, l.y, o.y, r));
}
function TA(a) {
  return a.animationValues && a.animationValues.opacityExit !== void 0;
}
const EA = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  P0 = (a) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(a),
  F0 = P0("applewebkit/") && !P0("chrome/") ? Math.round : Ie;
function J0(a) {
  ((a.min = F0(a.min)), (a.max = F0(a.max)));
}
function CA(a) {
  (J0(a.x), J0(a.y));
}
function ox(a, l, o) {
  return (
    a === "position" || (a === "preserve-aspect" && !Z3(L0(l), L0(o), 0.2))
  );
}
function AA(a) {
  return a !== a.root && a.scroll?.wasRoot;
}
const wA = sx({
    attachResizeListener: (a, l) => ps(a, "resize", l),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Lf = { current: void 0 },
  rx = sx({
    measureScroll: (a) => ({ x: a.scrollLeft, y: a.scrollTop }),
    defaultParent: () => {
      if (!Lf.current) {
        const a = new wA({});
        (a.mount(window), a.setOptions({ layoutScroll: !0 }), (Lf.current = a));
      }
      return Lf.current;
    },
    resetTransform: (a, l) => {
      a.style.transform = l !== void 0 ? l : "none";
    },
    checkIsScrollRoot: (a) => window.getComputedStyle(a).position === "fixed",
  }),
  nh = E.createContext({
    transformPagePoint: (a) => a,
    isStatic: !1,
    reducedMotion: "never",
  });
function $0(a, l) {
  if (typeof a == "function") return a(l);
  a != null && (a.current = l);
}
function NA(...a) {
  return (l) => {
    let o = !1;
    const r = a.map((c) => {
      const d = $0(c, l);
      return (!o && typeof d == "function" && (o = !0), d);
    });
    if (o)
      return () => {
        for (let c = 0; c < r.length; c++) {
          const d = r[c];
          typeof d == "function" ? d() : $0(a[c], null);
        }
      };
  };
}
function RA(...a) {
  return E.useCallback(NA(...a), a);
}
class MA extends E.Component {
  getSnapshotBeforeUpdate(l) {
    const o = this.props.childRef.current;
    if (o && l.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const r = o.offsetParent,
        c = (hd(r) && r.offsetWidth) || 0,
        d = (hd(r) && r.offsetHeight) || 0,
        f = this.props.sizeRef.current;
      ((f.height = o.offsetHeight || 0),
        (f.width = o.offsetWidth || 0),
        (f.top = o.offsetTop),
        (f.left = o.offsetLeft),
        (f.right = c - f.width - f.left),
        (f.bottom = d - f.height - f.top));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function DA({
  children: a,
  isPresent: l,
  anchorX: o,
  anchorY: r,
  root: c,
  pop: d,
}) {
  const f = E.useId(),
    m = E.useRef(null),
    y = E.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }),
    { nonce: v } = E.useContext(nh),
    g = a.props?.ref ?? a?.ref,
    p = RA(m, g);
  return (
    E.useInsertionEffect(() => {
      const {
        width: S,
        height: N,
        top: M,
        left: z,
        right: A,
        bottom: U,
      } = y.current;
      if (l || d === !1 || !m.current || !S || !N) return;
      const Y = o === "left" ? `left: ${z}` : `right: ${A}`,
        B = r === "bottom" ? `bottom: ${U}` : `top: ${M}`;
      m.current.dataset.motionPopId = f;
      const q = document.createElement("style");
      v && (q.nonce = v);
      const K = c ?? document.head;
      return (
        K.appendChild(q),
        q.sheet &&
          q.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${N}px !important;
            ${Y}px !important;
            ${B}px !important;
          }
        `),
        () => {
          K.contains(q) && K.removeChild(q);
        }
      );
    }, [l]),
    b.jsx(MA, {
      isPresent: l,
      childRef: m,
      sizeRef: y,
      pop: d,
      children: d === !1 ? a : E.cloneElement(a, { ref: p }),
    })
  );
}
const OA = ({
  children: a,
  initial: l,
  isPresent: o,
  onExitComplete: r,
  custom: c,
  presenceAffectsLayout: d,
  mode: f,
  anchorX: m,
  anchorY: y,
  root: v,
}) => {
  const g = zd(zA),
    p = E.useId();
  let S = !0,
    N = E.useMemo(
      () => (
        (S = !1),
        {
          id: p,
          initial: l,
          isPresent: o,
          custom: c,
          onExitComplete: (M) => {
            g.set(M, !0);
            for (const z of g.values()) if (!z) return;
            r && r();
          },
          register: (M) => (g.set(M, !1), () => g.delete(M)),
        }
      ),
      [o, g, r],
    );
  return (
    d && S && (N = { ...N }),
    E.useMemo(() => {
      g.forEach((M, z) => g.set(z, !1));
    }, [o]),
    E.useEffect(() => {
      !o && !g.size && r && r();
    }, [o]),
    (a = b.jsx(DA, {
      pop: f === "popLayout",
      isPresent: o,
      anchorX: m,
      anchorY: y,
      root: v,
      children: a,
    })),
    b.jsx(Or.Provider, { value: N, children: a })
  );
};
function zA() {
  return new Map();
}
function ux(a = !0) {
  const l = E.useContext(Or);
  if (l === null) return [!0, null];
  const { isPresent: o, onExitComplete: r, register: c } = l,
    d = E.useId();
  E.useEffect(() => {
    if (a) return c(d);
  }, [a]);
  const f = E.useCallback(() => a && r && r(d), [d, r, a]);
  return !o && r ? [!1, f] : [!0];
}
const ar = (a) => a.key || "";
function W0(a) {
  const l = [];
  return (
    E.Children.forEach(a, (o) => {
      E.isValidElement(o) && l.push(o);
    }),
    l
  );
}
const cx = ({
    children: a,
    custom: l,
    initial: o = !0,
    onExitComplete: r,
    presenceAffectsLayout: c = !0,
    mode: d = "sync",
    propagate: f = !1,
    anchorX: m = "left",
    anchorY: y = "top",
    root: v,
  }) => {
    const [g, p] = ux(f),
      S = E.useMemo(() => W0(a), [a]),
      N = f && !g ? [] : S.map(ar),
      M = E.useRef(!0),
      z = E.useRef(S),
      A = zd(() => new Map()),
      U = E.useRef(new Set()),
      [Y, B] = E.useState(S),
      [q, K] = E.useState(S);
    Lv(() => {
      ((M.current = !1), (z.current = S));
      for (let G = 0; G < q.length; G++) {
        const it = ar(q[G]);
        N.includes(it)
          ? (A.delete(it), U.current.delete(it))
          : A.get(it) !== !0 && A.set(it, !1);
      }
    }, [q, N.length, N.join("-")]);
    const tt = [];
    if (S !== Y) {
      let G = [...S];
      for (let it = 0; it < q.length; it++) {
        const F = q[it],
          dt = ar(F);
        N.includes(dt) || (G.splice(it, 0, F), tt.push(F));
      }
      return (d === "wait" && tt.length && (G = tt), K(W0(G)), B(S), null);
    }
    const { forceRender: Q } = E.useContext(Od);
    return b.jsx(b.Fragment, {
      children: q.map((G) => {
        const it = ar(G),
          F = f && !g ? !1 : S === q || N.includes(it),
          dt = () => {
            if (U.current.has(it)) return;
            if ((U.current.add(it), A.has(it))) A.set(it, !0);
            else return;
            let St = !0;
            (A.forEach((Xt) => {
              Xt || (St = !1);
            }),
              St && (Q?.(), K(z.current), f && p?.(), r && r()));
          };
        return b.jsx(
          OA,
          {
            isPresent: F,
            initial: !M.current || o ? void 0 : !1,
            custom: l,
            presenceAffectsLayout: c,
            mode: d,
            root: v,
            onExitComplete: F ? void 0 : dt,
            anchorX: m,
            anchorY: y,
            children: G,
          },
          it,
        );
      }),
    });
  },
  fx = E.createContext({ strict: !1 }),
  I0 = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let tv = !1;
function jA() {
  if (tv) return;
  const a = {};
  for (const l in I0) a[l] = { isEnabled: (o) => I0[l].some((r) => !!o[r]) };
  (Y1(a), (tv = !0));
}
function dx() {
  return (jA(), g3());
}
function _A(a) {
  const l = dx();
  for (const o in a) l[o] = { ...l[o], ...a[o] };
  Y1(l);
}
const VA = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function Nr(a) {
  return (
    a.startsWith("while") ||
    (a.startsWith("drag") && a !== "draggable") ||
    a.startsWith("layout") ||
    a.startsWith("onTap") ||
    a.startsWith("onPan") ||
    a.startsWith("onLayout") ||
    VA.has(a)
  );
}
let hx = (a) => !Nr(a);
function UA(a) {
  typeof a == "function" && (hx = (l) => (l.startsWith("on") ? !Nr(l) : a(l)));
}
try {
  UA(require("@emotion/is-prop-valid").default);
} catch {}
function BA(a, l, o) {
  const r = {};
  for (const c in a)
    (c === "values" && typeof a.values == "object") ||
      ((hx(c) ||
        (o === !0 && Nr(c)) ||
        (!l && !Nr(c)) ||
        (a.draggable && c.startsWith("onDrag"))) &&
        (r[c] = a[c]));
  return r;
}
const Ur = E.createContext({});
function LA(a, l) {
  if (Vr(a)) {
    const { initial: o, animate: r } = a;
    return {
      initial: o === !1 || ms(o) ? o : void 0,
      animate: ms(r) ? r : void 0,
    };
  }
  return a.inherit !== !1 ? l : {};
}
function HA(a) {
  const { initial: l, animate: o } = LA(a, E.useContext(Ur));
  return E.useMemo(() => ({ initial: l, animate: o }), [ev(l), ev(o)]);
}
function ev(a) {
  return Array.isArray(a) ? a.join(" ") : a;
}
const ah = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function mx(a, l, o) {
  for (const r in l) !ye(l[r]) && !K1(r, o) && (a[r] = l[r]);
}
function YA({ transformTemplate: a }, l) {
  return E.useMemo(() => {
    const o = ah();
    return (th(o, l, a), Object.assign({}, o.vars, o.style));
  }, [l]);
}
function qA(a, l) {
  const o = a.style || {},
    r = {};
  return (mx(r, o, a), Object.assign(r, YA(a, l)), r);
}
function GA(a, l) {
  const o = {},
    r = qA(a, l);
  return (
    a.drag &&
      a.dragListener !== !1 &&
      ((o.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        a.drag === !0 ? "none" : `pan-${a.drag === "x" ? "y" : "x"}`)),
    a.tabIndex === void 0 &&
      (a.onTap || a.onTapStart || a.whileTap) &&
      (o.tabIndex = 0),
    (o.style = r),
    o
  );
}
const px = () => ({ ...ah(), attrs: {} });
function kA(a, l, o, r) {
  const c = E.useMemo(() => {
    const d = px();
    return (
      P1(d, l, J1(r), a.transformTemplate, a.style),
      { ...d.attrs, style: { ...d.style } }
    );
  }, [l]);
  if (a.style) {
    const d = {};
    (mx(d, a.style, a), (c.style = { ...d, ...c.style }));
  }
  return c;
}
const XA = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function ih(a) {
  return typeof a != "string" || a.includes("-")
    ? !1
    : !!(XA.indexOf(a) > -1 || /[A-Z]/u.test(a));
}
function ZA(a, l, o, { latestValues: r }, c, d = !1, f) {
  const y = ((f ?? ih(a)) ? kA : GA)(l, r, c, a),
    v = BA(l, typeof a == "string", d),
    g = a !== E.Fragment ? { ...v, ...y, ref: o } : {},
    { children: p } = l,
    S = E.useMemo(() => (ye(p) ? p.get() : p), [p]);
  return E.createElement(a, { ...g, children: S });
}
function QA({ scrapeMotionValuesFromProps: a, createRenderState: l }, o, r, c) {
  return { latestValues: KA(o, r, c, a), renderState: l() };
}
function KA(a, l, o, r) {
  const c = {},
    d = r(a, {});
  for (const S in d) c[S] = pr(d[S]);
  let { initial: f, animate: m } = a;
  const y = Vr(a),
    v = L1(a);
  l &&
    v &&
    !y &&
    a.inherit !== !1 &&
    (f === void 0 && (f = l.initial), m === void 0 && (m = l.animate));
  let g = o ? o.initial === !1 : !1;
  g = g || f === !1;
  const p = g ? m : f;
  if (p && typeof p != "boolean" && !_r(p)) {
    const S = Array.isArray(p) ? p : [p];
    for (let N = 0; N < S.length; N++) {
      const M = Qd(a, S[N]);
      if (M) {
        const { transitionEnd: z, transition: A, ...U } = M;
        for (const Y in U) {
          let B = U[Y];
          if (Array.isArray(B)) {
            const q = g ? B.length - 1 : 0;
            B = B[q];
          }
          B !== null && (c[Y] = B);
        }
        for (const Y in z) c[Y] = z[Y];
      }
    }
  }
  return c;
}
const yx = (a) => (l, o) => {
    const r = E.useContext(Ur),
      c = E.useContext(Or),
      d = () => QA(a, l, r, c);
    return o ? d() : zd(d);
  },
  PA = yx({ scrapeMotionValuesFromProps: eh, createRenderState: ah }),
  FA = yx({ scrapeMotionValuesFromProps: $1, createRenderState: px }),
  JA = Symbol.for("motionComponentSymbol");
function $A(a, l, o) {
  const r = E.useRef(o);
  E.useInsertionEffect(() => {
    r.current = o;
  });
  const c = E.useRef(null);
  return E.useCallback(
    (d) => {
      d && a.onMount?.(d);
      const f = r.current;
      if (typeof f == "function")
        if (d) {
          const m = f(d);
          typeof m == "function" && (c.current = m);
        } else c.current ? (c.current(), (c.current = null)) : f(d);
      else f && (f.current = d);
      l && (d ? l.mount(d) : l.unmount());
    },
    [l],
  );
}
const gx = E.createContext({});
function Fi(a) {
  return (
    a &&
    typeof a == "object" &&
    Object.prototype.hasOwnProperty.call(a, "current")
  );
}
function WA(a, l, o, r, c, d) {
  const { visualElement: f } = E.useContext(Ur),
    m = E.useContext(fx),
    y = E.useContext(Or),
    v = E.useContext(nh),
    g = v.reducedMotion,
    p = v.skipAnimations,
    S = E.useRef(null),
    N = E.useRef(!1);
  ((r = r || m.renderer),
    !S.current &&
      r &&
      ((S.current = r(a, {
        visualState: l,
        parent: f,
        props: o,
        presenceContext: y,
        blockInitialAnimation: y ? y.initial === !1 : !1,
        reducedMotionConfig: g,
        skipAnimations: p,
        isSVG: d,
      })),
      N.current && S.current && (S.current.manuallyAnimateOnMount = !0)));
  const M = S.current,
    z = E.useContext(gx);
  M &&
    !M.projection &&
    c &&
    (M.type === "html" || M.type === "svg") &&
    IA(S.current, o, c, z);
  const A = E.useRef(!1);
  E.useInsertionEffect(() => {
    M && A.current && M.update(o, y);
  });
  const U = o[w1],
    Y = E.useRef(
      !!U &&
        typeof window < "u" &&
        !window.MotionHandoffIsComplete?.(U) &&
        window.MotionHasOptimisedAnimation?.(U),
    );
  return (
    Lv(() => {
      ((N.current = !0),
        M &&
          ((A.current = !0),
          (window.MotionIsMounted = !0),
          M.updateFeatures(),
          M.scheduleRenderMicrotask(),
          Y.current && M.animationState && M.animationState.animateChanges()));
    }),
    E.useEffect(() => {
      M &&
        (!Y.current && M.animationState && M.animationState.animateChanges(),
        Y.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(U);
          }),
          (Y.current = !1)),
        (M.enteringChildren = void 0));
    }),
    M
  );
}
function IA(a, l, o, r) {
  const {
    layoutId: c,
    layout: d,
    drag: f,
    dragConstraints: m,
    layoutScroll: y,
    layoutRoot: v,
    layoutCrossfade: g,
  } = l;
  ((a.projection = new o(
    a.latestValues,
    l["data-framer-portal-id"] ? void 0 : vx(a.parent),
  )),
    a.projection.setOptions({
      layoutId: c,
      layout: d,
      alwaysMeasureLayout: !!f || (m && Fi(m)),
      visualElement: a,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: r,
      crossfade: g,
      layoutScroll: y,
      layoutRoot: v,
    }));
}
function vx(a) {
  if (a) return a.options.allowProjection !== !1 ? a.projection : vx(a.parent);
}
function Hf(a, { forwardMotionProps: l = !1, type: o } = {}, r, c) {
  r && _A(r);
  const d = o ? o === "svg" : ih(a),
    f = d ? FA : PA;
  function m(v, g) {
    let p;
    const S = { ...E.useContext(nh), ...v, layoutId: tw(v) },
      { isStatic: N } = S,
      M = HA(v),
      z = f(v, N);
    if (!N && typeof window < "u") {
      ew();
      const A = nw(S);
      ((p = A.MeasureLayout),
        (M.visualElement = WA(a, z, S, c, A.ProjectionNode, d)));
    }
    return b.jsxs(Ur.Provider, {
      value: M,
      children: [
        p && M.visualElement
          ? b.jsx(p, { visualElement: M.visualElement, ...S })
          : null,
        ZA(a, v, $A(z, M.visualElement, g), z, N, l, d),
      ],
    });
  }
  m.displayName = `motion.${typeof a == "string" ? a : `create(${a.displayName ?? a.name ?? ""})`}`;
  const y = E.forwardRef(m);
  return ((y[JA] = a), y);
}
function tw({ layoutId: a }) {
  const l = E.useContext(Od).id;
  return l && a !== void 0 ? l + "-" + a : a;
}
function ew(a, l) {
  E.useContext(fx).strict;
}
function nw(a) {
  const l = dx(),
    { drag: o, layout: r } = l;
  if (!o && !r) return {};
  const c = { ...o, ...r };
  return {
    MeasureLayout:
      o?.isEnabled(a) || r?.isEnabled(a) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode,
  };
}
function aw(a, l) {
  if (typeof Proxy > "u") return Hf;
  const o = new Map(),
    r = (d, f) => Hf(d, f, a, l),
    c = (d, f) => r(d, f);
  return new Proxy(c, {
    get: (d, f) =>
      f === "create"
        ? r
        : (o.has(f) || o.set(f, Hf(f, void 0, a, l)), o.get(f)),
  });
}
const iw = (a, l) =>
  (l.isSVG ?? ih(a))
    ? new _3(l)
    : new R3(l, { allowProjection: a !== E.Fragment });
class lw extends Ra {
  constructor(l) {
    (super(l), l.animationState || (l.animationState = H3(l)));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    _r(l) && (this.unmountControls = l.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(),
      { animate: o } = this.node.prevProps || {};
    l !== o && this.updateAnimationControlsSubscription();
  }
  unmount() {
    (this.node.animationState.reset(), this.unmountControls?.());
  }
}
let sw = 0;
class ow extends Ra {
  constructor() {
    (super(...arguments), (this.id = sw++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: l, onExitComplete: o } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === r) return;
    const c = this.node.animationState.setActive("exit", !l);
    o &&
      !l &&
      c.then(() => {
        o(this.id);
      });
  }
  mount() {
    const { register: l, onExitComplete: o } = this.node.presenceContext || {};
    (o && o(this.id), l && (this.unmount = l(this.id)));
  }
  unmount() {}
}
const rw = { animation: { Feature: lw }, exit: { Feature: ow } };
function Ts(a) {
  return { point: { x: a.pageX, y: a.pageY } };
}
const uw = (a) => (l) => Jd(l) && a(l, Ts(l));
function cs(a, l, o, r) {
  return ps(a, l, uw(o), r);
}
const xx = ({ current: a }) => (a ? a.ownerDocument.defaultView : null),
  nv = (a, l) => Math.abs(a - l);
function cw(a, l) {
  const o = nv(a.x, l.x),
    r = nv(a.y, l.y);
  return Math.sqrt(o ** 2 + r ** 2);
}
const av = new Set(["auto", "scroll"]);
class bx {
  constructor(
    l,
    o,
    {
      transformPagePoint: r,
      contextWindow: c = window,
      dragSnapToOrigin: d = !1,
      distanceThreshold: f = 3,
      element: m,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (N) => {
        this.handleScroll(N.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const N = qf(this.lastMoveEventInfo, this.history),
          M = this.startEvent !== null,
          z = cw(N.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!M && !z) return;
        const { point: A } = N,
          { timestamp: U } = me;
        this.history.push({ ...A, timestamp: U });
        const { onStart: Y, onMove: B } = this.handlers;
        (M ||
          (Y && Y(this.lastMoveEvent, N),
          (this.startEvent = this.lastMoveEvent)),
          B && B(this.lastMoveEvent, N));
      }),
      (this.handlePointerMove = (N, M) => {
        ((this.lastMoveEvent = N),
          (this.lastMoveEventInfo = Yf(M, this.transformPagePoint)),
          _t.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (N, M) => {
        this.end();
        const { onEnd: z, onSessionEnd: A, resumeAnimation: U } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && U && U(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const Y = qf(
          N.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Yf(M, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && z && z(N, Y), A && A(N, Y));
      }),
      !Jd(l))
    )
      return;
    ((this.dragSnapToOrigin = d),
      (this.handlers = o),
      (this.transformPagePoint = r),
      (this.distanceThreshold = f),
      (this.contextWindow = c || window));
    const y = Ts(l),
      v = Yf(y, this.transformPagePoint),
      { point: g } = v,
      { timestamp: p } = me;
    this.history = [{ ...g, timestamp: p }];
    const { onSessionStart: S } = o;
    (S && S(l, qf(v, this.history)),
      (this.removeListeners = xs(
        cs(this.contextWindow, "pointermove", this.handlePointerMove),
        cs(this.contextWindow, "pointerup", this.handlePointerUp),
        cs(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      m && this.startScrollTracking(m));
  }
  startScrollTracking(l) {
    let o = l.parentElement;
    for (; o;) {
      const r = getComputedStyle(o);
      ((av.has(r.overflowX) || av.has(r.overflowY)) &&
        this.scrollPositions.set(o, { x: o.scrollLeft, y: o.scrollTop }),
        (o = o.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(l) {
    const o = this.scrollPositions.get(l);
    if (!o) return;
    const r = l === window,
      c = r
        ? { x: window.scrollX, y: window.scrollY }
        : { x: l.scrollLeft, y: l.scrollTop },
      d = { x: c.x - o.x, y: c.y - o.y };
    (d.x === 0 && d.y === 0) ||
      (r
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += d.x),
          (this.lastMoveEventInfo.point.y += d.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= d.x), (this.history[0].y -= d.y)),
      this.scrollPositions.set(l, c),
      _t.update(this.updatePoint, !0));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      Na(this.updatePoint));
  }
}
function Yf(a, l) {
  return l ? { point: l(a.point) } : a;
}
function iv(a, l) {
  return { x: a.x - l.x, y: a.y - l.y };
}
function qf({ point: a }, l) {
  return {
    point: a,
    delta: iv(a, Sx(l)),
    offset: iv(a, fw(l)),
    velocity: dw(l, 0.1),
  };
}
function fw(a) {
  return a[0];
}
function Sx(a) {
  return a[a.length - 1];
}
function dw(a, l) {
  if (a.length < 2) return { x: 0, y: 0 };
  let o = a.length - 1,
    r = null;
  const c = Sx(a);
  for (; o >= 0 && ((r = a[o]), !(c.timestamp - r.timestamp > qe(l)));) o--;
  if (!r) return { x: 0, y: 0 };
  r === a[0] &&
    a.length > 2 &&
    c.timestamp - r.timestamp > qe(l) * 2 &&
    (r = a[1]);
  const d = We(c.timestamp - r.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const f = { x: (c.x - r.x) / d, y: (c.y - r.y) / d };
  return (f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f);
}
function hw(a, { min: l, max: o }, r) {
  return (
    l !== void 0 && a < l
      ? (a = r ? jt(l, a, r.min) : Math.max(a, l))
      : o !== void 0 && a > o && (a = r ? jt(o, a, r.max) : Math.min(a, o)),
    a
  );
}
function lv(a, l, o) {
  return {
    min: l !== void 0 ? a.min + l : void 0,
    max: o !== void 0 ? a.max + o - (a.max - a.min) : void 0,
  };
}
function mw(a, { top: l, left: o, bottom: r, right: c }) {
  return { x: lv(a.x, o, c), y: lv(a.y, l, r) };
}
function sv(a, l) {
  let o = l.min - a.min,
    r = l.max - a.max;
  return (
    l.max - l.min < a.max - a.min && ([o, r] = [r, o]),
    { min: o, max: r }
  );
}
function pw(a, l) {
  return { x: sv(a.x, l.x), y: sv(a.y, l.y) };
}
function yw(a, l) {
  let o = 0.5;
  const r = Te(a),
    c = Te(l);
  return (
    c > r
      ? (o = ds(l.min, l.max - r, a.min))
      : r > c && (o = ds(a.min, a.max - c, l.min)),
    Mn(0, 1, o)
  );
}
function gw(a, l) {
  const o = {};
  return (
    l.min !== void 0 && (o.min = l.min - a.min),
    l.max !== void 0 && (o.max = l.max - a.min),
    o
  );
}
const xd = 0.35;
function vw(a = xd) {
  return (
    a === !1 ? (a = 0) : a === !0 && (a = xd),
    { x: ov(a, "left", "right"), y: ov(a, "top", "bottom") }
  );
}
function ov(a, l, o) {
  return { min: rv(a, l), max: rv(a, o) };
}
function rv(a, l) {
  return typeof a == "number" ? a : a[l] || 0;
}
const xw = new WeakMap();
class bw {
  constructor(l) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = It()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = l));
  }
  start(l, { snapToCursor: o = !1, distanceThreshold: r } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1) return;
    const d = (p) => {
        (o && this.snapToCursor(Ts(p).point), this.stopAnimation());
      },
      f = (p, S) => {
        const { drag: N, dragPropagation: M, onDragStart: z } = this.getProps();
        if (
          N &&
          !M &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = K4(N)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = p),
          (this.latestPanInfo = S),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          An((U) => {
            let Y = this.getAxisMotionValue(U).get() || 0;
            if (Rn.test(Y)) {
              const { projection: B } = this.visualElement;
              if (B && B.layout) {
                const q = B.layout.layoutBox[U];
                q && (Y = Te(q) * (parseFloat(Y) / 100));
              }
            }
            this.originPoint[U] = Y;
          }),
          z && _t.update(() => z(p, S), !1, !0),
          rd(this.visualElement, "transform"));
        const { animationState: A } = this.visualElement;
        A && A.setActive("whileDrag", !0);
      },
      m = (p, S) => {
        ((this.latestPointerEvent = p), (this.latestPanInfo = S));
        const {
          dragPropagation: N,
          dragDirectionLock: M,
          onDirectionLock: z,
          onDrag: A,
        } = this.getProps();
        if (!N && !this.openDragLock) return;
        const { offset: U } = S;
        if (M && this.currentDirection === null) {
          ((this.currentDirection = Tw(U)),
            this.currentDirection !== null && z && z(this.currentDirection));
          return;
        }
        (this.updateAxis("x", S.point, U),
          this.updateAxis("y", S.point, U),
          this.visualElement.render(),
          A && _t.update(() => A(p, S), !1, !0));
      },
      y = (p, S) => {
        ((this.latestPointerEvent = p),
          (this.latestPanInfo = S),
          this.stop(p, S),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      v = () => {
        const { dragSnapToOrigin: p } = this.getProps();
        (p || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new bx(
      l,
      {
        onSessionStart: d,
        onStart: f,
        onMove: m,
        onSessionEnd: y,
        resumeAnimation: v,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: g,
        distanceThreshold: r,
        contextWindow: xx(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(l, o) {
    const r = l || this.latestPointerEvent,
      c = o || this.latestPanInfo,
      d = this.isDragging;
    if ((this.cancel(), !d || !c || !r)) return;
    const { velocity: f } = c;
    this.startAnimation(f);
    const { onDragEnd: m } = this.getProps();
    m && _t.postRender(() => m(r, c));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: o } = this.visualElement;
    (l && (l.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      o && o.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(l, o, r) {
    const { drag: c } = this.getProps();
    if (!r || !ir(l, c, this.currentDirection)) return;
    const d = this.getAxisMotionValue(l);
    let f = this.originPoint[l] + r[l];
    (this.constraints &&
      this.constraints[l] &&
      (f = hw(f, this.constraints[l], this.elastic[l])),
      d.set(f));
  }
  resolveConstraints() {
    const { dragConstraints: l, dragElastic: o } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : this.visualElement.projection?.layout,
      c = this.constraints;
    (l && Fi(l)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : l && r
        ? (this.constraints = mw(r.layoutBox, l))
        : (this.constraints = !1),
      (this.elastic = vw(o)),
      c !== this.constraints &&
        !Fi(l) &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        An((d) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(d) &&
            (this.constraints[d] = gw(r.layoutBox[d], this.constraints[d]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: o } = this.getProps();
    if (!l || !Fi(l)) return !1;
    const r = l.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const d = T3(r, c.root, this.visualElement.getTransformPagePoint());
    let f = pw(c.layout.layoutBox, d);
    if (o) {
      const m = o(x3(f));
      ((this.hasMutatedConstraints = !!m), m && (f = G1(m)));
    }
    return f;
  }
  startAnimation(l) {
    const {
        drag: o,
        dragMomentum: r,
        dragElastic: c,
        dragTransition: d,
        dragSnapToOrigin: f,
        onDragTransitionEnd: m,
      } = this.getProps(),
      y = this.constraints || {},
      v = An((g) => {
        if (!ir(g, o, this.currentDirection)) return;
        let p = (y && y[g]) || {};
        f && (p = { min: 0, max: 0 });
        const S = c ? 200 : 1e6,
          N = c ? 40 : 1e7,
          M = {
            type: "inertia",
            velocity: r ? l[g] : 0,
            bounceStiffness: S,
            bounceDamping: N,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...p,
          };
        return this.startAxisValueAnimation(g, M);
      });
    return Promise.all(v).then(m);
  }
  startAxisValueAnimation(l, o) {
    const r = this.getAxisMotionValue(l);
    return (
      rd(this.visualElement, l),
      r.start(Zd(l, r, 0, o, this.visualElement, !1))
    );
  }
  stopAnimation() {
    An((l) => this.getAxisMotionValue(l).stop());
  }
  getAxisMotionValue(l) {
    const o = `_drag${l.toUpperCase()}`,
      r = this.visualElement.getProps(),
      c = r[o];
    return (
      c ||
      this.visualElement.getValue(l, (r.initial ? r.initial[l] : void 0) || 0)
    );
  }
  snapToCursor(l) {
    An((o) => {
      const { drag: r } = this.getProps();
      if (!ir(o, r, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        d = this.getAxisMotionValue(o);
      if (c && c.layout) {
        const { min: f, max: m } = c.layout.layoutBox[o],
          y = d.get() || 0;
        d.set(l[o] - jt(f, m, 0.5) + y);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: l, dragConstraints: o } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Fi(o) || !r || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    An((f) => {
      const m = this.getAxisMotionValue(f);
      if (m && this.constraints !== !1) {
        const y = m.get();
        c[f] = yw({ min: y, max: y }, this.constraints[f]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      An((f) => {
        if (!ir(f, l, null)) return;
        const m = this.getAxisMotionValue(f),
          { min: y, max: v } = this.constraints[f];
        m.set(jt(y, v, c[f]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    xw.set(this.visualElement, this);
    const l = this.visualElement.current,
      o = cs(l, "pointerdown", (v) => {
        const { drag: g, dragListener: p = !0 } = this.getProps(),
          S = v.target,
          N = S !== l && I4(S);
        g && p && !N && this.start(v);
      });
    let r;
    const c = () => {
        const { dragConstraints: v } = this.getProps();
        Fi(v) &&
          v.current &&
          ((this.constraints = this.resolveRefConstraints()),
          r ||
            (r = Sw(l, v.current, () =>
              this.scalePositionWithinConstraints(),
            )));
      },
      { projection: d } = this.visualElement,
      f = d.addEventListener("measure", c);
    (d && !d.layout && (d.root && d.root.updateScroll(), d.updateLayout()),
      _t.read(c));
    const m = ps(window, "resize", () => this.scalePositionWithinConstraints()),
      y = d.addEventListener(
        "didUpdate",
        ({ delta: v, hasLayoutChanged: g }) => {
          this.isDragging &&
            g &&
            (An((p) => {
              const S = this.getAxisMotionValue(p);
              S &&
                ((this.originPoint[p] += v[p].translate),
                S.set(S.get() + v[p].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (m(), o(), f(), y && y(), r && r());
    };
  }
  getProps() {
    const l = this.visualElement.getProps(),
      {
        drag: o = !1,
        dragDirectionLock: r = !1,
        dragPropagation: c = !1,
        dragConstraints: d = !1,
        dragElastic: f = xd,
        dragMomentum: m = !0,
      } = l;
    return {
      ...l,
      drag: o,
      dragDirectionLock: r,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: f,
      dragMomentum: m,
    };
  }
}
function uv(a) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    a();
  };
}
function Sw(a, l, o) {
  const r = y0(a, uv(o)),
    c = y0(l, uv(o));
  return () => {
    (r(), c());
  };
}
function ir(a, l, o) {
  return (l === !0 || l === a) && (o === null || o === a);
}
function Tw(a, l = 10) {
  let o = null;
  return (Math.abs(a.y) > l ? (o = "y") : Math.abs(a.x) > l && (o = "x"), o);
}
class Ew extends Ra {
  constructor(l) {
    (super(l),
      (this.removeGroupControls = Ie),
      (this.removeListeners = Ie),
      (this.controls = new bw(l)));
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    (l && (this.removeGroupControls = l.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ie));
  }
  update() {
    const { dragControls: l } = this.node.getProps(),
      { dragControls: o } = this.node.prevProps || {};
    l !== o &&
      (this.removeGroupControls(),
      l && (this.removeGroupControls = l.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const Gf = (a) => (l, o) => {
  a && _t.update(() => a(l, o), !1, !0);
};
class Cw extends Ra {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Ie));
  }
  onPointerDown(l) {
    this.session = new bx(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: xx(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: l,
      onPanStart: o,
      onPan: r,
      onPanEnd: c,
    } = this.node.getProps();
    return {
      onSessionStart: Gf(l),
      onStart: Gf(o),
      onMove: Gf(r),
      onEnd: (d, f) => {
        (delete this.session, c && _t.postRender(() => c(d, f)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = cs(this.node.current, "pointerdown", (l) =>
      this.onPointerDown(l),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let kf = !1;
class Aw extends E.Component {
  componentDidMount() {
    const {
        visualElement: l,
        layoutGroup: o,
        switchLayoutGroup: r,
        layoutId: c,
      } = this.props,
      { projection: d } = l;
    (d &&
      (o.group && o.group.add(d),
      r && r.register && c && r.register(d),
      kf && d.root.didUpdate(),
      d.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      d.setOptions({
        ...d.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (yr.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(l) {
    const {
        layoutDependency: o,
        visualElement: r,
        drag: c,
        isPresent: d,
      } = this.props,
      { projection: f } = r;
    return (
      f &&
        ((f.isPresent = d),
        l.layoutDependency !== o &&
          f.setOptions({ ...f.options, layoutDependency: o }),
        (kf = !0),
        c || l.layoutDependency !== o || o === void 0 || l.isPresent !== d
          ? f.willUpdate()
          : this.safeToRemove(),
        l.isPresent !== d &&
          (d
            ? f.promote()
            : f.relegate() ||
              _t.postRender(() => {
                const m = f.getStack();
                (!m || !m.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: l } = this.props.visualElement;
    l &&
      (l.root.didUpdate(),
      Fd.postRender(() => {
        !l.currentAnimation && l.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: l,
        layoutGroup: o,
        switchLayoutGroup: r,
      } = this.props,
      { projection: c } = l;
    ((kf = !0),
      c &&
        (c.scheduleCheckAfterUnmount(),
        o && o.group && o.group.remove(c),
        r && r.deregister && r.deregister(c)));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function Tx(a) {
  const [l, o] = ux(),
    r = E.useContext(Od);
  return b.jsx(Aw, {
    ...a,
    layoutGroup: r,
    switchLayoutGroup: E.useContext(gx),
    isPresent: l,
    safeToRemove: o,
  });
}
const ww = {
  pan: { Feature: Cw },
  drag: { Feature: Ew, ProjectionNode: rx, MeasureLayout: Tx },
};
function cv(a, l, o) {
  const { props: r } = a;
  a.animationState &&
    r.whileHover &&
    a.animationState.setActive("whileHover", o === "Start");
  const c = "onHover" + o,
    d = r[c];
  d && _t.postRender(() => d(l, Ts(l)));
}
class Nw extends Ra {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = F4(
        l,
        (o, r) => (cv(this.node, r, "Start"), (c) => cv(this.node, c, "End")),
      ));
  }
  unmount() {}
}
class Rw extends Ra {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = xs(
      ps(this.node.current, "focus", () => this.onFocus()),
      ps(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function fv(a, l, o) {
  const { props: r } = a;
  if (a.current instanceof HTMLButtonElement && a.current.disabled) return;
  a.animationState &&
    r.whileTap &&
    a.animationState.setActive("whileTap", o === "Start");
  const c = "onTap" + (o === "End" ? "" : o),
    d = r[c];
  d && _t.postRender(() => d(l, Ts(l)));
}
class Mw extends Ra {
  mount() {
    const { current: l } = this.node;
    if (!l) return;
    const { globalTapTarget: o, propagate: r } = this.node.props;
    this.unmount = e3(
      l,
      (c, d) => (
        fv(this.node, d, "Start"),
        (f, { success: m }) => fv(this.node, f, m ? "End" : "Cancel")
      ),
      { useGlobalTarget: o, stopPropagation: r?.tap === !1 },
    );
  }
  unmount() {}
}
const bd = new WeakMap(),
  Xf = new WeakMap(),
  Dw = (a) => {
    const l = bd.get(a.target);
    l && l(a);
  },
  Ow = (a) => {
    a.forEach(Dw);
  };
function zw({ root: a, ...l }) {
  const o = a || document;
  Xf.has(o) || Xf.set(o, {});
  const r = Xf.get(o),
    c = JSON.stringify(l);
  return (
    r[c] || (r[c] = new IntersectionObserver(Ow, { root: a, ...l })),
    r[c]
  );
}
function jw(a, l, o) {
  const r = zw(l);
  return (
    bd.set(a, o),
    r.observe(a),
    () => {
      (bd.delete(a), r.unobserve(a));
    }
  );
}
const _w = { some: 0, all: 1 };
class Vw extends Ra {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: l = {} } = this.node.getProps(),
      { root: o, margin: r, amount: c = "some", once: d } = l,
      f = {
        root: o ? o.current : void 0,
        rootMargin: r,
        threshold: typeof c == "number" ? c : _w[c],
      },
      m = (y) => {
        const { isIntersecting: v } = y;
        if (
          this.isInView === v ||
          ((this.isInView = v), d && !v && this.hasEnteredView)
        )
          return;
        (v && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", v));
        const { onViewportEnter: g, onViewportLeave: p } = this.node.getProps(),
          S = v ? g : p;
        S && S(y);
      };
    return jw(this.node.current, f, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: l, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(Uw(l, o)) && this.startObserver();
  }
  unmount() {}
}
function Uw({ viewport: a = {} }, { viewport: l = {} } = {}) {
  return (o) => a[o] !== l[o];
}
const Bw = {
    inView: { Feature: Vw },
    tap: { Feature: Mw },
    focus: { Feature: Rw },
    hover: { Feature: Nw },
  },
  Lw = { layout: { ProjectionNode: rx, MeasureLayout: Tx } },
  Hw = { ...rw, ...Bw, ...ww, ...Lw },
  te = aw(Hw, iw);
function Yw() {
  return b.jsxs("section", {
    id: "top",
    className:
      "relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-16",
    "data-source-loc": "src/components/Hero.tsx:5:4",
    children: [
      b.jsx("div", {
        className: "pointer-events-none absolute inset-0 grain opacity-[0.07]",
        "aria-hidden": !0,
        "data-source-loc": "src/components/Hero.tsx:9:6",
      }),
      b.jsx("div", {
        className: "pointer-events-none absolute inset-0 opacity-70",
        style: {
          background:
            "radial-gradient(120% 90% at 50% -10%, #f6f2ea 0%, #efe9df 45%, #e3dbcb 100%)",
        },
        "aria-hidden": !0,
        "data-source-loc": "src/components/Hero.tsx:13:6",
      }),
      b.jsx(te.img, {
        src: "/images/cross-emblem.png",
        alt: "",
        "aria-hidden": !0,
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 0.18, scale: 1 },
        transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
        className:
          "pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[620px] mix-blend-multiply",
        "data-source-loc": "src/components/Hero.tsx:21:6",
      }),
      b.jsxs("div", {
        className: "relative z-10 mx-auto max-w-7xl w-full px-5 sm:px-8",
        "data-source-loc": "src/components/Hero.tsx:30:6",
        children: [
          b.jsx(te.p, {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7 },
            className:
              "wordmark text-center text-[11px] sm:text-xs text-ink-soft",
            "data-source-loc": "src/components/Hero.tsx:32:8",
            children: "EST. SINCE FAITH",
          }),
          b.jsxs("div", {
            className: "mt-6 text-center",
            "data-source-loc": "src/components/Hero.tsx:41:8",
            children: [
              ["Made in", "Heaven."].map((a, l) =>
                b.jsx(
                  te.h1,
                  {
                    initial: { opacity: 0, y: 28 },
                    animate: { opacity: 1, y: 0 },
                    transition: {
                      duration: 0.8,
                      delay: 0.1 + l * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    className:
                      "display leading-[0.86] text-ink text-[18vw] sm:text-[14vw] lg:text-[10rem] mb-3 last:mb-0",
                    "data-source-loc": "src/components/Hero.tsx:43:12",
                    children: a,
                  },
                  a,
                ),
              ),
              b.jsx(te.p, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.9, delay: 0.5 },
                className:
                  "serif-it text-ink-soft text-2xl sm:text-4xl lg:text-5xl mt-3",
                "data-source-loc": "src/components/Hero.tsx:57:10",
                children: "Worn on Earth.",
              }),
            ],
          }),
          b.jsxs(te.div, {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.7 },
            className:
              "mt-10 flex flex-col sm:flex-row items-center justify-center gap-4",
            "data-source-loc": "src/components/Hero.tsx:67:8",
            children: [
              b.jsx("a", {
                href: "#collection",
                className:
                  "group inline-flex items-center justify-center px-8 py-4 bg-ink text-bone text-xs uppercase tracking-[0.22em] hover:bg-ink-soft transition-colors",
                "data-source-loc": "src/components/Hero.tsx:73:10",
                children: "Shop the Collection",
              }),
              b.jsx("a", {
                href: "#preorder",
                className:
                  "inline-flex items-center justify-center px-8 py-4 border border-ink/30 text-ink text-xs uppercase tracking-[0.22em] hover:border-ink transition-colors",
                "data-source-loc": "src/components/Hero.tsx:79:10",
                children: "$10 Off Pre-order",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const lr = [
  "Made in Heaven",
  "Worn on Earth",
  "The Father · The Son · The Holy Spirit",
  "Holy Trinity",
];
function qw() {
  const a = [...lr, ...lr, ...lr, ...lr];
  return b.jsx("div", {
    className:
      "border-y border-ink/15 bg-ink text-bone py-4 overflow-hidden select-none",
    "aria-hidden": !0,
    "data-source-loc": "src/components/Marquee.tsx:11:4",
    children: b.jsx("div", {
      className: "flex w-max animate-marquee",
      "data-source-loc": "src/components/Marquee.tsx:15:6",
      children: a.map((l, o) =>
        b.jsxs(
          "span",
          {
            className:
              "display text-xl sm:text-2xl px-6 whitespace-nowrap text-bone/90",
            "data-source-loc": "src/components/Marquee.tsx:17:10",
            children: [
              l,
              b.jsx("span", {
                className: "px-6 text-bone/40",
                "data-source-loc": "src/components/Marquee.tsx:22:12",
                children: "✦",
              }),
            ],
          },
          o,
        ),
      ),
    }),
  });
}
function Gw({ product: a, index: l }) {
  const { add: o } = vs(),
    [r, c] = E.useState("M"),
    [d, f] = E.useState(0),
    [m, y] = E.useState(0),
    v = a.colors[d],
    g = Dv(v),
    p = g[Math.min(m, g.length - 1)];
  return b.jsxs(te.article, {
    initial: { opacity: 0, y: 36 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: !0, margin: "-80px" },
    transition: { duration: 0.7, delay: l * 0.08, ease: [0.22, 1, 0.36, 1] },
    className: "group",
    "data-source-loc": "src/components/ProductCard.tsx:24:4",
    children: [
      b.jsxs("div", {
        className:
          "relative aspect-[4/5] overflow-hidden bg-paper border border-line",
        "data-source-loc": "src/components/ProductCard.tsx:31:6",
        children: [
          b.jsx("img", {
            src: p,
            alt: `${a.name} — ${v.name}, view ${m + 1} of ${g.length}`,
            className:
              "h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]",
            loading: "lazy",
            "data-source-loc": "src/components/ProductCard.tsx:32:8",
          }),
          b.jsx("span", {
            className:
              "absolute top-4 left-4 bg-ink text-bone text-[10px] uppercase tracking-[0.2em] px-3 py-1.5",
            "data-source-loc": "src/components/ProductCard.tsx:38:8",
            children: a.tag,
          }),
          b.jsxs("span", {
            className:
              "absolute top-4 right-4 bg-bone/85 backdrop-blur-sm border border-line text-ink text-[10px] uppercase tracking-[0.18em] px-2.5 py-1.5",
            "data-source-loc": "src/components/ProductCard.tsx:41:8",
            children: [g.length, " photos"],
          }),
          b.jsx("div", {
            className:
              "absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-bone/85 backdrop-blur-sm border border-line px-3 py-2",
            "data-source-loc": "src/components/ProductCard.tsx:44:8",
            children: g.map((S, N) =>
              b.jsx(
                "button",
                {
                  onClick: () => y(N),
                  "aria-pressed": m === N,
                  "aria-label": `Show ${a.name} image ${N + 1} of ${g.length}`,
                  className: `w-2.5 h-2.5 rounded-full transition-colors ${m === N ? "bg-ink" : "bg-ink/25 hover:bg-ink/50"}`,
                  "data-source-loc": "src/components/ProductCard.tsx:46:12",
                },
                N,
              ),
            ),
          }),
        ],
      }),
      b.jsxs("div", {
        className: "mt-5",
        "data-source-loc": "src/components/ProductCard.tsx:59:6",
        children: [
          b.jsxs("div", {
            className: "flex items-baseline justify-between gap-3",
            "data-source-loc": "src/components/ProductCard.tsx:60:8",
            children: [
              b.jsx("h3", {
                className: "display text-2xl text-ink leading-none",
                "data-source-loc": "src/components/ProductCard.tsx:61:10",
                children: a.name,
              }),
              b.jsxs("div", {
                className: "text-right shrink-0",
                "data-source-loc": "src/components/ProductCard.tsx:64:10",
                children: [
                  b.jsxs("span", {
                    className: "text-ink font-semibold",
                    "data-source-loc": "src/components/ProductCard.tsx:65:12",
                    children: ["$", a.price],
                  }),
                  b.jsxs("span", {
                    className: "ml-2 text-ash line-through text-sm",
                    "data-source-loc": "src/components/ProductCard.tsx:66:12",
                    children: ["$", a.compareAt],
                  }),
                ],
              }),
            ],
          }),
          b.jsx("p", {
            className:
              "mt-1 text-[13px] uppercase tracking-[0.16em] text-stone",
            "data-source-loc": "src/components/ProductCard.tsx:71:8",
            children: a.subtitle,
          }),
          b.jsx("p", {
            className: "mt-3 text-sm leading-relaxed text-ink-soft",
            "data-source-loc": "src/components/ProductCard.tsx:74:8",
            children: a.description,
          }),
          b.jsxs("div", {
            className: "mt-5",
            "data-source-loc": "src/components/ProductCard.tsx:78:8",
            children: [
              b.jsxs("div", {
                className: "flex items-center justify-between gap-3",
                "data-source-loc": "src/components/ProductCard.tsx:79:10",
                children: [
                  b.jsxs("span", {
                    className: "text-xs uppercase tracking-[0.16em] text-stone",
                    "data-source-loc": "src/components/ProductCard.tsx:80:12",
                    children: [
                      "Colour — ",
                      b.jsx("span", {
                        className: "text-ink-soft",
                        "data-source-loc":
                          "src/components/ProductCard.tsx:81:23",
                        children: v.name,
                      }),
                    ],
                  }),
                  b.jsxs("a", {
                    href: `/customize?id=${a.id}&color=${encodeURIComponent(v.name)}`,
                    className:
                      "inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.14em] text-ink-soft hover:text-ink underline underline-offset-2",
                    "data-source-loc": "src/components/ProductCard.tsx:83:12",
                    children: [
                      "Customise ",
                      b.jsx(TE, {
                        className: "w-3 h-3",
                        strokeWidth: 1.8,
                        "data-source-loc":
                          "src/components/ProductCard.tsx:89:24",
                      }),
                    ],
                  }),
                ],
              }),
              b.jsx("div", {
                className: "mt-3 flex gap-3",
                role: "group",
                "aria-label": `Colour for ${a.name}`,
                "data-source-loc": "src/components/ProductCard.tsx:92:10",
                children: a.colors.map((S, N) =>
                  b.jsx(
                    "button",
                    {
                      onClick: () => {
                        (f(N), y(0));
                      },
                      "aria-pressed": d === N,
                      "aria-label": S.name,
                      title: S.name,
                      className: `w-8 h-8 rounded-full border transition-all ${d === N ? "ring-2 ring-ink ring-offset-2 ring-offset-bone border-ink" : "border-line hover:border-ink"}`,
                      style: { backgroundColor: S.swatch },
                      "data-source-loc": "src/components/ProductCard.tsx:98:14",
                    },
                    S.name,
                  ),
                ),
              }),
            ],
          }),
          b.jsxs("div", {
            className: "mt-5",
            "data-source-loc": "src/components/ProductCard.tsx:118:8",
            children: [
              b.jsx("span", {
                className: "sr-only",
                "data-source-loc": "src/components/ProductCard.tsx:119:10",
                children: "Choose a size",
              }),
              b.jsx("div", {
                className: "flex flex-wrap gap-2",
                role: "group",
                "aria-label": `Size for ${a.name}`,
                "data-source-loc": "src/components/ProductCard.tsx:120:10",
                children: Mv.map((S) =>
                  b.jsx(
                    "button",
                    {
                      onClick: () => c(S),
                      "aria-pressed": r === S,
                      className: `min-w-[44px] h-10 px-3 text-sm border transition-colors ${r === S ? "border-ink bg-ink text-bone" : "border-line text-ink-soft hover:border-ink"}`,
                      "data-source-loc":
                        "src/components/ProductCard.tsx:126:14",
                      children: S,
                    },
                    S,
                  ),
                ),
              }),
            ],
          }),
          b.jsxs("button", {
            onClick: () => o(a.id, r, v.name),
            className:
              "mt-5 w-full inline-flex items-center justify-center gap-2 bg-ink text-bone h-12 text-xs uppercase tracking-[0.22em] hover:bg-ink-soft transition-colors",
            "data-source-loc": "src/components/ProductCard.tsx:142:8",
            children: [
              b.jsx(Uv, {
                className: "w-4 h-4",
                strokeWidth: 2,
                "data-source-loc": "src/components/ProductCard.tsx:146:10",
              }),
              " Add to bag",
            ],
          }),
          b.jsxs("details", {
            className: "mt-4 border-t border-line pt-3 group/d",
            "data-source-loc": "src/components/ProductCard.tsx:149:8",
            children: [
              b.jsxs("summary", {
                className:
                  "cursor-pointer list-none text-xs uppercase tracking-[0.18em] text-ink-soft flex items-center justify-between",
                "data-source-loc": "src/components/ProductCard.tsx:150:10",
                children: [
                  "Details & fit",
                  b.jsx("span", {
                    className:
                      "text-ash group-open/d:rotate-45 transition-transform",
                    "data-source-loc": "src/components/ProductCard.tsx:152:12",
                    children: "+",
                  }),
                ],
              }),
              b.jsx("ul", {
                className: "mt-3 space-y-1.5",
                "data-source-loc": "src/components/ProductCard.tsx:156:10",
                children: a.details.map((S) =>
                  b.jsxs(
                    "li",
                    {
                      className: "text-sm text-ink-soft flex gap-2",
                      "data-source-loc":
                        "src/components/ProductCard.tsx:158:14",
                      children: [
                        b.jsx("span", {
                          className: "text-ash",
                          "data-source-loc":
                            "src/components/ProductCard.tsx:162:16",
                          children: "—",
                        }),
                        " ",
                        S,
                      ],
                    },
                    S,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function kw() {
  return b.jsxs("section", {
    id: "collection",
    className: "relative overflow-hidden scroll-mt-16",
    "data-source-loc": "src/components/Collection.tsx:6:4",
    children: [
      b.jsx("img", {
        src: "/images/cross-emblem.png",
        alt: "",
        "aria-hidden": !0,
        className:
          "pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 w-[70vw] max-w-[560px] opacity-[0.07] mix-blend-multiply",
        "data-source-loc": "src/components/Collection.tsx:7:6",
      }),
      b.jsxs("div", {
        className: "relative mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28",
        "data-source-loc": "src/components/Collection.tsx:13:6",
        children: [
          b.jsxs("div", {
            className:
              "flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12",
            "data-source-loc": "src/components/Collection.tsx:14:8",
            children: [
              b.jsxs("div", {
                "data-source-loc": "src/components/Collection.tsx:15:10",
                children: [
                  b.jsx("p", {
                    className: "wordmark text-[11px] text-stone",
                    "data-source-loc": "src/components/Collection.tsx:16:12",
                    children: "The Collection",
                  }),
                  b.jsxs("h2", {
                    className:
                      "display text-4xl sm:text-6xl text-ink mt-3 leading-[0.9]",
                    "data-source-loc": "src/components/Collection.tsx:17:12",
                    children: [
                      "Two Designs.",
                      b.jsx("br", {
                        "data-source-loc":
                          "src/components/Collection.tsx:19:14",
                      }),
                      "One Devotion.",
                    ],
                  }),
                ],
              }),
              b.jsx("p", {
                className: "max-w-sm text-sm leading-relaxed text-ink-soft",
                "data-source-loc": "src/components/Collection.tsx:23:10",
                children:
                  "Heavyweight, garment-washed hoodies built to be lived in — and worn as a statement of faith. Each piece is made to order.",
              }),
            ],
          }),
          b.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16",
            "data-source-loc": "src/components/Collection.tsx:29:8",
            children: Pf.map((a, l) =>
              b.jsx(
                Gw,
                {
                  product: a,
                  index: l,
                  "data-source-loc": "src/components/Collection.tsx:31:12",
                },
                a.id,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
const Xw = [
  { icon: CE, text: "Dove artwork on the hood" },
  { icon: YE, text: "Bold Christian lettering on the back" },
  { icon: _E, text: "Classic colours to choose from" },
  { icon: BE, text: "Minimalist and clean design" },
  { icon: wE, text: "Inspired by faith, purpose, and identity" },
];
function Zw() {
  return b.jsxs("section", {
    id: "manifesto",
    className:
      "relative overflow-hidden bg-paper border-y border-line scroll-mt-16",
    "data-source-loc": "src/components/Manifesto.tsx:14:4",
    children: [
      b.jsx("img", {
        src: "/images/cross-emblem.png",
        alt: "",
        "aria-hidden": !0,
        className:
          "pointer-events-none absolute -left-16 top-1/2 -translate-y-1/2 w-[48vw] max-w-[460px] opacity-[0.07] mix-blend-multiply",
        "data-source-loc": "src/components/Manifesto.tsx:18:6",
      }),
      b.jsxs("div", {
        className:
          "relative mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center",
        "data-source-loc": "src/components/Manifesto.tsx:24:6",
        children: [
          b.jsxs(te.div, {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0, margin: "-80px" },
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            "data-source-loc": "src/components/Manifesto.tsx:25:8",
            children: [
              b.jsx("p", {
                className: "wordmark text-[11px] text-stone",
                "data-source-loc": "src/components/Manifesto.tsx:31:10",
                children: "Love in Every Thread",
              }),
              b.jsxs("h2", {
                className:
                  "display text-4xl sm:text-6xl text-ink mt-4 leading-[0.9]",
                "data-source-loc": "src/components/Manifesto.tsx:32:10",
                children: [
                  "Faith meets",
                  b.jsx("br", {
                    "data-source-loc": "src/components/Manifesto.tsx:34:12",
                  }),
                  "streetwear.",
                ],
              }),
              b.jsxs("p", {
                className: "mt-6 text-ink-soft leading-relaxed",
                "data-source-loc": "src/components/Manifesto.tsx:37:10",
                children: [
                  "Introducing the Holy Trinity Hoodie, designed to represent Christian faith through bold, meaningful artwork. Featuring the words",
                  " ",
                  b.jsx("span", {
                    className: "text-ink",
                    "data-source-loc": "src/components/Manifesto.tsx:40:12",
                    children: "“The Father, The Son, The Holy Spirit”",
                  }),
                  " ",
                  "across the back, a small dove design on the hood, and a subtle Bible verse detail on the sleeve, this hoodie combines faith with a clean, modern streetwear style.",
                ],
              }),
              b.jsx("p", {
                className: "mt-6 serif-it text-2xl sm:text-3xl text-ink",
                "data-source-loc": "src/components/Manifesto.tsx:47:10",
                children:
                  "Wear your faith. Represent what you believe. Let your clothing tell a story.",
              }),
              b.jsx("a", {
                href: "#collection",
                className:
                  "mt-8 inline-flex items-center justify-center px-8 py-4 bg-ink text-bone text-xs uppercase tracking-[0.22em] hover:bg-ink-soft transition-colors",
                "data-source-loc": "src/components/Manifesto.tsx:51:10",
                children: "Shop the Hoodie",
              }),
            ],
          }),
          b.jsxs(te.div, {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0, margin: "-80px" },
            transition: { duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
            "data-source-loc": "src/components/Manifesto.tsx:59:8",
            children: [
              b.jsx("ul", {
                className: "space-y-0 border-t border-line",
                "data-source-loc": "src/components/Manifesto.tsx:65:10",
                children: Xw.map(({ icon: a, text: l }) =>
                  b.jsxs(
                    "li",
                    {
                      className:
                        "flex items-center gap-4 py-5 border-b border-line",
                      "data-source-loc": "src/components/Manifesto.tsx:67:14",
                      children: [
                        b.jsx("span", {
                          className:
                            "grid place-items-center w-11 h-11 shrink-0 border border-line bg-bone",
                          "data-source-loc":
                            "src/components/Manifesto.tsx:71:16",
                          children: b.jsx(a, {
                            className: "w-5 h-5 text-ink",
                            strokeWidth: 1.6,
                            "data-source-loc":
                              "src/components/Manifesto.tsx:72:18",
                          }),
                        }),
                        b.jsx("span", {
                          className: "text-ink",
                          "data-source-loc":
                            "src/components/Manifesto.tsx:74:16",
                          children: l,
                        }),
                      ],
                    },
                    l,
                  ),
                ),
              }),
              b.jsx("p", {
                className:
                  "mt-6 text-xs uppercase tracking-[0.18em] text-stone",
                "data-source-loc": "src/components/Manifesto.tsx:78:10",
                children: "Materials — 100% Cotton Fleece",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Qw() {
  return b.jsxs("section", {
    className: "relative overflow-hidden",
    "aria-label": "Made in Heaven, Worn on Earth",
    "data-source-loc": "src/components/WingedBanner.tsx:5:4",
    children: [
      b.jsx("div", {
        className: "absolute inset-0",
        style: {
          background:
            "linear-gradient(180deg, #efe9df 0%, #e7dfce 42%, #ddd2bb 72%, #d2c5aa 100%)",
        },
        "aria-hidden": !0,
        "data-source-loc": "src/components/WingedBanner.tsx:9:6",
      }),
      b.jsx("div", {
        className: "pointer-events-none absolute inset-0 grain opacity-[0.08]",
        "aria-hidden": !0,
        "data-source-loc": "src/components/WingedBanner.tsx:17:6",
      }),
      b.jsx(te.img, {
        src: "/images/winged-cross.jpg",
        alt: "Winged cross rising over the horizon",
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0 },
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
        className:
          "pointer-events-none absolute inset-x-0 bottom-0 w-full object-cover object-bottom mix-blend-multiply",
        style: { height: "min(62%, 340px)" },
        loading: "lazy",
        "data-source-loc": "src/components/WingedBanner.tsx:21:6",
      }),
      b.jsxs("div", {
        className:
          "relative mx-auto max-w-5xl px-5 sm:px-8 pt-16 sm:pt-20 pb-[36vw] sm:pb-[22vw] lg:pb-56 text-center",
        "data-source-loc": "src/components/WingedBanner.tsx:32:6",
        children: [
          b.jsx(te.p, {
            initial: { opacity: 0, y: 12 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.8 },
            className: "wordmark text-[11px] text-ink-soft",
            "data-source-loc": "src/components/WingedBanner.tsx:33:8",
            children: "Holy Trinity",
          }),
          b.jsxs(te.p, {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: !0 },
            transition: { duration: 0.9, delay: 0.2 },
            className: "serif-it text-ink text-3xl sm:text-5xl mt-4",
            "data-source-loc": "src/components/WingedBanner.tsx:42:8",
            children: [
              "Made in Heaven.",
              b.jsx("br", {
                className: "sm:hidden",
                "data-source-loc": "src/components/WingedBanner.tsx:50:10",
              }),
              " Worn on Earth.",
            ],
          }),
        ],
      }),
    ],
  });
}
function Kw() {
  return b.jsx("section", {
    id: "preorder",
    className: "bg-ink text-bone scroll-mt-16 overflow-hidden",
    "data-source-loc": "src/components/Preorder.tsx:5:4",
    children: b.jsxs("div", {
      className:
        "mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28 grid lg:grid-cols-2 gap-14 items-center",
      "data-source-loc": "src/components/Preorder.tsx:9:6",
      children: [
        b.jsxs(te.div, {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.7 },
          "data-source-loc": "src/components/Preorder.tsx:10:8",
          children: [
            b.jsx("p", {
              className: "wordmark text-[11px] text-bone/50",
              "data-source-loc": "src/components/Preorder.tsx:16:10",
              children: "Pre-order Exclusive",
            }),
            b.jsxs("h2", {
              className: "display leading-[0.85] mt-4",
              "data-source-loc": "src/components/Preorder.tsx:19:10",
              children: [
                b.jsx("span", {
                  className:
                    "block text-[22vw] sm:text-[11rem] lg:text-[13rem]",
                  "data-source-loc": "src/components/Preorder.tsx:20:12",
                  children: "$10",
                }),
                b.jsx("span", {
                  className: "block text-3xl sm:text-5xl",
                  "data-source-loc": "src/components/Preorder.tsx:23:12",
                  children: "Off every design",
                }),
              ],
            }),
            b.jsx("p", {
              className: "mt-6 max-w-md text-bone/70 leading-relaxed",
              "data-source-loc": "src/components/Preorder.tsx:25:10",
              children:
                "Save $10 when you pre-order either hoodie. Two designs, one offer. Reserve yours before the run closes — made to order, shipped with care.",
            }),
            b.jsx("a", {
              href: "#collection",
              className:
                "mt-8 inline-flex items-center justify-center px-8 py-4 bg-bone text-ink text-xs uppercase tracking-[0.22em] hover:bg-paper transition-colors",
              "data-source-loc": "src/components/Preorder.tsx:30:10",
              children: "Pre-order now",
            }),
          ],
        }),
        b.jsx(te.div, {
          initial: { opacity: 0, scale: 0.96 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: !0 },
          transition: { duration: 0.9 },
          className: "relative",
          "data-source-loc": "src/components/Preorder.tsx:38:8",
          children: b.jsx("div", {
            className: "overflow-hidden border border-bone/15 bg-paper",
            "data-source-loc": "src/components/Preorder.tsx:45:10",
            children: b.jsxs("div", {
              className: "grid grid-cols-2",
              "data-source-loc": "src/components/Preorder.tsx:46:12",
              children: [
                b.jsx("img", {
                  src: "/images/trinity-black-flat.jpg",
                  alt: "The Trinity Hoodie — The Father, The Son, The Holy Spirit",
                  className: "w-full h-full object-cover",
                  loading: "lazy",
                  "data-source-loc": "src/components/Preorder.tsx:47:14",
                }),
                b.jsx("img", {
                  src: "/images/worn-grey.png",
                  alt: "The Guardian Hoodie — angel back print",
                  className: "w-full h-full object-cover object-top",
                  loading: "lazy",
                  "data-source-loc": "src/components/Preorder.tsx:53:14",
                }),
              ],
            }),
          }),
        }),
      ],
    }),
  });
}
function Pw() {
  return b.jsx("section", {
    id: "story",
    className: "relative overflow-hidden scroll-mt-16",
    "data-source-loc": "src/components/Story.tsx:5:4",
    children: b.jsxs("div", {
      className:
        "mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28 grid lg:grid-cols-2 gap-14 items-center",
      "data-source-loc": "src/components/Story.tsx:6:6",
      children: [
        b.jsxs(te.div, {
          initial: { opacity: 0, x: -24 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.8 },
          "data-source-loc": "src/components/Story.tsx:7:8",
          children: [
            b.jsx("p", {
              className: "wordmark text-[11px] text-stone",
              "data-source-loc": "src/components/Story.tsx:13:10",
              children: "The Story",
            }),
            b.jsxs("h2", {
              className:
                "display text-4xl sm:text-6xl text-ink mt-4 leading-[0.92]",
              "data-source-loc": "src/components/Story.tsx:14:10",
              children: [
                "Clothing as",
                b.jsx("br", {
                  "data-source-loc": "src/components/Story.tsx:16:12",
                }),
                "a quiet prayer.",
              ],
            }),
            b.jsx("p", {
              className: "mt-6 text-ink-soft leading-relaxed",
              "data-source-loc": "src/components/Story.tsx:18:10",
              children:
                "Holy Trinity began with a simple idea — that what we wear can carry what we believe. Every hoodie is designed around scripture and symbol, then washed soft so it feels like it has always belonged to you.",
            }),
            b.jsx("p", {
              className: "mt-4 serif-it text-2xl text-ink",
              "data-source-loc": "src/components/Story.tsx:24:10",
              children: "“Made in Heaven. Worn on Earth.”",
            }),
            b.jsx("p", {
              className: "mt-4 text-ink-soft leading-relaxed",
              "data-source-loc": "src/components/Story.tsx:27:10",
              children:
                "No fast fashion, no waste. Pieces are made to order in small runs, so each one is truly yours. Faith first, always.",
            }),
          ],
        }),
        b.jsxs(te.div, {
          initial: { opacity: 0, scale: 0.97 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: !0 },
          transition: { duration: 0.9 },
          className: "relative",
          "data-source-loc": "src/components/Story.tsx:33:8",
          children: [
            b.jsx("div", {
              className:
                "aspect-[4/5] overflow-hidden border border-line bg-paper",
              "data-source-loc": "src/components/Story.tsx:40:10",
              children: b.jsx("img", {
                src: "/images/worn-grey.png",
                alt: "The Guardian Hoodie worn — winged guardian and floral back print",
                className: "h-full w-full object-cover object-top",
                loading: "lazy",
                "data-source-loc": "src/components/Story.tsx:41:12",
              }),
            }),
            b.jsxs("div", {
              className:
                "absolute -bottom-5 -left-5 bg-ink text-bone px-6 py-5 max-w-[220px]",
              "data-source-loc": "src/components/Story.tsx:48:10",
              children: [
                b.jsxs("p", {
                  className: "display text-3xl leading-none",
                  "data-source-loc": "src/components/Story.tsx:49:12",
                  children: [
                    "Made to",
                    b.jsx("br", {
                      "data-source-loc": "src/components/Story.tsx:51:14",
                    }),
                    "order",
                  ],
                }),
                b.jsx("p", {
                  className:
                    "mt-2 text-[11px] uppercase tracking-[0.18em] text-bone/70",
                  "data-source-loc": "src/components/Story.tsx:54:12",
                  children: "Small-batch · Low waste",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Fw({ className: a }) {
  return b.jsxs("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    className: a,
    "data-source-loc": "src/components/Footer.tsx:5:4",
    children: [
      b.jsx("rect", {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        "data-source-loc": "src/components/Footer.tsx:15:6",
      }),
      b.jsx("path", {
        d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
        "data-source-loc": "src/components/Footer.tsx:16:6",
      }),
      b.jsx("line", {
        x1: "17.5",
        x2: "17.51",
        y1: "6.5",
        y2: "6.5",
        "data-source-loc": "src/components/Footer.tsx:17:6",
      }),
    ],
  });
}
function Jw({ className: a }) {
  return b.jsxs("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    className: a,
    "data-source-loc": "src/components/Footer.tsx:24:4",
    children: [
      b.jsx("rect", {
        width: "24",
        height: "24",
        rx: "5.5",
        fill: "#010101",
        "data-source-loc": "src/components/Footer.tsx:30:6",
      }),
      b.jsx("path", {
        d: "M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-2.98v11.5a2.5 2.5 0 1 1-2.5-2.5c.3 0 .6.06.88.16V9.62a5.46 5.46 0 0 0-.88-.06 5.46 5.46 0 1 0 5.46 5.46V9.3a7.2 7.2 0 0 0 4.24 1.38V7.7a4.28 4.28 0 0 1-3.16-1.88Z",
        fill: "#25F4EE",
        opacity: "0.9",
        transform: "translate(-0.45 0.45)",
        "data-source-loc": "src/components/Footer.tsx:31:6",
      }),
      b.jsx("path", {
        d: "M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-2.98v11.5a2.5 2.5 0 1 1-2.5-2.5c.3 0 .6.06.88.16V9.62a5.46 5.46 0 0 0-.88-.06 5.46 5.46 0 1 0 5.46 5.46V9.3a7.2 7.2 0 0 0 4.24 1.38V7.7a4.28 4.28 0 0 1-3.16-1.88Z",
        fill: "#FE2C55",
        opacity: "0.9",
        transform: "translate(0.45 -0.45)",
        "data-source-loc": "src/components/Footer.tsx:37:6",
      }),
      b.jsx("path", {
        d: "M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-2.98v11.5a2.5 2.5 0 1 1-2.5-2.5c.3 0 .6.06.88.16V9.62a5.46 5.46 0 0 0-.88-.06 5.46 5.46 0 1 0 5.46 5.46V9.3a7.2 7.2 0 0 0 4.24 1.38V7.7a4.28 4.28 0 0 1-3.16-1.88Z",
        fill: "#FFFFFF",
        "data-source-loc": "src/components/Footer.tsx:43:6",
      }),
    ],
  });
}
function $w() {
  return b.jsxs("footer", {
    id: "contact",
    className:
      "relative bg-bone border-t border-line scroll-mt-16 overflow-hidden",
    "data-source-loc": "src/components/Footer.tsx:53:4",
    children: [
      b.jsx("img", {
        src: "/images/cross-emblem.png",
        alt: "",
        "aria-hidden": !0,
        className:
          "pointer-events-none absolute -right-10 -bottom-10 w-80 opacity-[0.16] mix-blend-multiply",
        "data-source-loc": "src/components/Footer.tsx:57:6",
      }),
      b.jsxs("div", {
        className: "relative mx-auto max-w-7xl px-5 sm:px-8 py-16",
        "data-source-loc": "src/components/Footer.tsx:63:6",
        children: [
          b.jsxs("div", {
            className: "grid md:grid-cols-[1.4fr_1fr_1fr] gap-10",
            "data-source-loc": "src/components/Footer.tsx:64:8",
            children: [
              b.jsxs("div", {
                "data-source-loc": "src/components/Footer.tsx:65:10",
                children: [
                  b.jsx("p", {
                    className: "wordmark text-sm text-ink",
                    "data-source-loc": "src/components/Footer.tsx:66:12",
                    children: "Holy Trinity",
                  }),
                  b.jsx("p", {
                    className: "serif-it text-2xl text-ink-soft mt-4",
                    "data-source-loc": "src/components/Footer.tsx:67:12",
                    children: "Made in Heaven. Worn on Earth.",
                  }),
                  b.jsx("p", {
                    className:
                      "mt-4 max-w-sm text-sm text-ink-soft leading-relaxed",
                    "data-source-loc": "src/components/Footer.tsx:70:12",
                    children:
                      "Faith-led, made-to-order apparel. Each piece crafted in small runs and shipped with intention.",
                  }),
                ],
              }),
              b.jsxs("div", {
                "data-source-loc": "src/components/Footer.tsx:76:10",
                children: [
                  b.jsx("p", {
                    className:
                      "text-[11px] uppercase tracking-[0.2em] text-stone",
                    "data-source-loc": "src/components/Footer.tsx:77:12",
                    children: "Shop",
                  }),
                  b.jsxs("ul", {
                    className: "mt-4 space-y-2 text-sm text-ink-soft",
                    "data-source-loc": "src/components/Footer.tsx:80:12",
                    children: [
                      b.jsx("li", {
                        "data-source-loc": "src/components/Footer.tsx:81:14",
                        children: b.jsx("a", {
                          href: "#collection",
                          className: "hover:text-ink transition-colors",
                          "data-source-loc": "src/components/Footer.tsx:82:16",
                          children: "The Collection",
                        }),
                      }),
                      b.jsx("li", {
                        "data-source-loc": "src/components/Footer.tsx:86:14",
                        children: b.jsx("a", {
                          href: "#preorder",
                          className: "hover:text-ink transition-colors",
                          "data-source-loc": "src/components/Footer.tsx:87:16",
                          children: "Pre-order Offer",
                        }),
                      }),
                      b.jsx("li", {
                        "data-source-loc": "src/components/Footer.tsx:91:14",
                        children: b.jsx("a", {
                          href: "#story",
                          className: "hover:text-ink transition-colors",
                          "data-source-loc": "src/components/Footer.tsx:92:16",
                          children: "The Story",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              b.jsxs("div", {
                "data-source-loc": "src/components/Footer.tsx:99:10",
                children: [
                  b.jsx("p", {
                    className:
                      "text-[11px] uppercase tracking-[0.2em] text-stone",
                    "data-source-loc": "src/components/Footer.tsx:100:12",
                    children: "Get in touch",
                  }),
                  b.jsxs("ul", {
                    className: "mt-4 space-y-3 text-sm text-ink-soft",
                    "data-source-loc": "src/components/Footer.tsx:103:12",
                    children: [
                      b.jsx("li", {
                        "data-source-loc": "src/components/Footer.tsx:104:14",
                        children: b.jsxs("a", {
                          href: "mailto:holytrinityofficial3@gmail.com",
                          className:
                            "inline-flex items-center gap-2 hover:text-ink transition-colors",
                          "data-source-loc": "src/components/Footer.tsx:105:16",
                          children: [
                            b.jsx(RE, {
                              className: "w-5 h-5",
                              strokeWidth: 1.6,
                              "data-source-loc":
                                "src/components/Footer.tsx:109:18",
                            }),
                            "holytrinityofficial3@gmail.com",
                          ],
                        }),
                      }),
                      b.jsx("li", {
                        "data-source-loc": "src/components/Footer.tsx:113:14",
                        children: b.jsxs("a", {
                          href: "https://www.instagram.com/holytrinityclo",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "inline-flex items-center gap-2 hover:text-ink transition-colors",
                          "data-source-loc": "src/components/Footer.tsx:114:16",
                          children: [
                            b.jsx(Fw, {
                              className: "w-7 h-7",
                              "data-source-loc":
                                "src/components/Footer.tsx:120:18",
                            }),
                            "@holytrinityclo",
                          ],
                        }),
                      }),
                      b.jsx("li", {
                        "data-source-loc": "src/components/Footer.tsx:124:14",
                        children: b.jsxs("a", {
                          href: "https://www.tiktok.com/@holy_trinityofficial",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "inline-flex items-center gap-2 hover:text-ink transition-colors",
                          "data-source-loc": "src/components/Footer.tsx:125:16",
                          children: [
                            b.jsx(Jw, {
                              className: "w-7 h-7",
                              "data-source-loc":
                                "src/components/Footer.tsx:131:18",
                            }),
                            "@holy_trinityofficial",
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          b.jsxs("div", {
            className:
              "mt-14 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3",
            "data-source-loc": "src/components/Footer.tsx:139:8",
            children: [
              b.jsxs("p", {
                className: "text-xs text-stone",
                "data-source-loc": "src/components/Footer.tsx:140:10",
                children: [
                  "© ",
                  new Date().getFullYear(),
                  " Holy Trinity. All rights reserved.",
                ],
              }),
              b.jsx("p", {
                className: "text-xs text-stone",
                "data-source-loc": "src/components/Footer.tsx:143:10",
                children: "Made to order · Small-batch · Low waste",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Ww() {
  const {
    open: a,
    lines: l,
    setOpen: o,
    remove: r,
    setQty: c,
    subtotal: d,
  } = vs();
  return (
    E.useEffect(() => {
      const f = (m) => {
        m.key === "Escape" && o(!1);
      };
      return (
        window.addEventListener("keydown", f),
        () => window.removeEventListener("keydown", f)
      );
    }, [o]),
    E.useEffect(
      () => (
        (document.body.style.overflow = a ? "hidden" : ""),
        () => {
          document.body.style.overflow = "";
        }
      ),
      [a],
    ),
    b.jsx(cx, {
      "data-source-loc": "src/components/CartDrawer.tsx:25:4",
      children:
        a &&
        b.jsxs(b.Fragment, {
          children: [
            b.jsx(te.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              onClick: () => o(!1),
              className: "fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm",
              "aria-hidden": !0,
              "data-source-loc": "src/components/CartDrawer.tsx:28:10",
            }),
            b.jsxs(te.aside, {
              initial: { x: "100%" },
              animate: { x: 0 },
              exit: { x: "100%" },
              transition: {
                type: "tween",
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              },
              className:
                "fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-bone flex flex-col shadow-2xl",
              role: "dialog",
              "aria-label": "Shopping bag",
              "data-source-loc": "src/components/CartDrawer.tsx:36:10",
              children: [
                b.jsxs("div", {
                  className:
                    "flex items-center justify-between px-6 h-16 border-b border-line",
                  "data-source-loc": "src/components/CartDrawer.tsx:45:12",
                  children: [
                    b.jsx("h2", {
                      className: "wordmark text-xs text-ink",
                      "data-source-loc": "src/components/CartDrawer.tsx:46:14",
                      children: "Your Bag",
                    }),
                    b.jsx("button", {
                      onClick: () => o(!1),
                      "aria-label": "Close cart",
                      className: "p-2 hover:opacity-60",
                      "data-source-loc": "src/components/CartDrawer.tsx:47:14",
                      children: b.jsx(Bv, {
                        className: "w-5 h-5",
                        "data-source-loc":
                          "src/components/CartDrawer.tsx:52:16",
                      }),
                    }),
                  ],
                }),
                l.length === 0
                  ? b.jsxs("div", {
                      className:
                        "flex-1 flex flex-col items-center justify-center text-center px-8 gap-4",
                      "data-source-loc": "src/components/CartDrawer.tsx:57:14",
                      children: [
                        b.jsx(Dd, {
                          className: "w-10 h-10 text-ash",
                          strokeWidth: 1.3,
                          "data-source-loc":
                            "src/components/CartDrawer.tsx:58:16",
                        }),
                        b.jsx("p", {
                          className: "text-ink-soft",
                          "data-source-loc":
                            "src/components/CartDrawer.tsx:59:16",
                          children: "Your bag is empty.",
                        }),
                        b.jsx("button", {
                          onClick: () => o(!1),
                          className:
                            "mt-2 px-6 py-3 bg-ink text-bone text-xs uppercase tracking-[0.2em]",
                          "data-source-loc":
                            "src/components/CartDrawer.tsx:60:16",
                          children: "Continue shopping",
                        }),
                      ],
                    })
                  : b.jsxs(b.Fragment, {
                      children: [
                        b.jsx("div", {
                          className:
                            "flex-1 overflow-y-auto px-6 py-5 space-y-5",
                          "data-source-loc":
                            "src/components/CartDrawer.tsx:69:16",
                          children: l.map((f) =>
                            b.jsxs(
                              "div",
                              {
                                className: "flex gap-4",
                                "data-source-loc":
                                  "src/components/CartDrawer.tsx:71:20",
                                children: [
                                  b.jsx("div", {
                                    className:
                                      "w-20 h-24 shrink-0 overflow-hidden bg-paper border border-line",
                                    "data-source-loc":
                                      "src/components/CartDrawer.tsx:72:22",
                                    children: b.jsx("img", {
                                      src: f.product.image,
                                      alt: f.product.name,
                                      className: "w-full h-full object-cover",
                                      "data-source-loc":
                                        "src/components/CartDrawer.tsx:73:24",
                                    }),
                                  }),
                                  b.jsxs("div", {
                                    className: "flex-1 min-w-0",
                                    "data-source-loc":
                                      "src/components/CartDrawer.tsx:79:22",
                                    children: [
                                      b.jsxs("div", {
                                        className: "flex justify-between gap-2",
                                        "data-source-loc":
                                          "src/components/CartDrawer.tsx:80:24",
                                        children: [
                                          b.jsx("p", {
                                            className:
                                              "font-medium text-ink text-sm leading-snug",
                                            "data-source-loc":
                                              "src/components/CartDrawer.tsx:81:26",
                                            children: f.product.name,
                                          }),
                                          b.jsx("button", {
                                            onClick: () => r(f.id),
                                            className:
                                              "text-xs text-ash hover:text-ink underline shrink-0",
                                            "data-source-loc":
                                              "src/components/CartDrawer.tsx:84:26",
                                            children: "Remove",
                                          }),
                                        ],
                                      }),
                                      b.jsxs("p", {
                                        className: "text-xs text-stone mt-0.5",
                                        "data-source-loc":
                                          "src/components/CartDrawer.tsx:91:24",
                                        children: [
                                          "Size ",
                                          f.size,
                                          " · ",
                                          f.color,
                                        ],
                                      }),
                                      b.jsxs("div", {
                                        className:
                                          "mt-3 flex items-center justify-between",
                                        "data-source-loc":
                                          "src/components/CartDrawer.tsx:94:24",
                                        children: [
                                          b.jsxs("div", {
                                            className:
                                              "flex items-center border border-line",
                                            "data-source-loc":
                                              "src/components/CartDrawer.tsx:95:26",
                                            children: [
                                              b.jsx("button", {
                                                onClick: () =>
                                                  c(f.id, f.qty - 1),
                                                className:
                                                  "w-8 h-8 grid place-items-center hover:bg-paper",
                                                "aria-label":
                                                  "Decrease quantity",
                                                "data-source-loc":
                                                  "src/components/CartDrawer.tsx:96:28",
                                                children: b.jsx(zE, {
                                                  className: "w-3.5 h-3.5",
                                                  "data-source-loc":
                                                    "src/components/CartDrawer.tsx:101:30",
                                                }),
                                              }),
                                              b.jsx("span", {
                                                className:
                                                  "w-8 text-center text-sm",
                                                "data-source-loc":
                                                  "src/components/CartDrawer.tsx:103:28",
                                                children: f.qty,
                                              }),
                                              b.jsx("button", {
                                                onClick: () =>
                                                  c(f.id, f.qty + 1),
                                                className:
                                                  "w-8 h-8 grid place-items-center hover:bg-paper",
                                                "aria-label":
                                                  "Increase quantity",
                                                "data-source-loc":
                                                  "src/components/CartDrawer.tsx:106:28",
                                                children: b.jsx(Uv, {
                                                  className: "w-3.5 h-3.5",
                                                  "data-source-loc":
                                                    "src/components/CartDrawer.tsx:111:30",
                                                }),
                                              }),
                                            ],
                                          }),
                                          b.jsxs("span", {
                                            className:
                                              "text-sm font-medium text-ink",
                                            "data-source-loc":
                                              "src/components/CartDrawer.tsx:114:26",
                                            children: [
                                              "$",
                                              f.product.price * f.qty,
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              f.id,
                            ),
                          ),
                        }),
                        b.jsxs("div", {
                          className: "border-t border-line px-6 py-5 space-y-4",
                          "data-source-loc":
                            "src/components/CartDrawer.tsx:123:16",
                          children: [
                            b.jsxs("div", {
                              className:
                                "flex justify-between text-sm text-ink-soft",
                              "data-source-loc":
                                "src/components/CartDrawer.tsx:124:18",
                              children: [
                                b.jsx("span", {
                                  "data-source-loc":
                                    "src/components/CartDrawer.tsx:125:20",
                                  children: "Subtotal",
                                }),
                                b.jsxs("span", {
                                  className: "text-ink font-semibold",
                                  "data-source-loc":
                                    "src/components/CartDrawer.tsx:126:20",
                                  children: ["$", d],
                                }),
                              ],
                            }),
                            b.jsx("p", {
                              className: "text-xs text-stone",
                              "data-source-loc":
                                "src/components/CartDrawer.tsx:128:18",
                              children:
                                "Pre-order pricing applied. Shipping calculated at checkout.",
                            }),
                            b.jsxs("a", {
                              href: `mailto:holytrinityofficial3@gmail.com?subject=Holy%20Trinity%20Pre-order&body=Hi%20Holy%20Trinity%2C%20I%27d%20like%20to%20pre-order%3A%0A${encodeURIComponent(
                                l.map(
                                  (f) =>
                                    `- ${f.product.name} · ${f.color} · Size ${f.size} × ${f.qty}`,
                                ).join(`
`),
                              )}%0A%0ASubtotal%3A%20$${d}`,
                              className:
                                "block text-center bg-ink text-bone h-12 leading-[3rem] text-xs uppercase tracking-[0.22em] hover:bg-ink-soft transition-colors",
                              "data-source-loc":
                                "src/components/CartDrawer.tsx:131:18",
                              children: ["Checkout — $", d],
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
    })
  );
}
function Iw() {
  const { toast: a, clearToast: l } = vs();
  return (
    E.useEffect(() => {
      if (!a) return;
      const o = setTimeout(l, 2200);
      return () => clearTimeout(o);
    }, [a, l]),
    b.jsx(cx, {
      "data-source-loc": "src/components/Toast.tsx:16:4",
      children:
        a &&
        b.jsxs(te.div, {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 20 },
          className:
            "fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-2 bg-ink text-bone px-5 py-3 text-sm shadow-xl",
          role: "status",
          "data-source-loc": "src/components/Toast.tsx:18:8",
          children: [
            b.jsx(Vv, {
              className: "w-4 h-4",
              "data-source-loc": "src/components/Toast.tsx:25:10",
            }),
            " ",
            a,
          ],
        }),
    })
  );
}
function t5() {
  return b.jsxs("div", {
    className: "min-h-screen bg-bone text-ink",
    "data-source-loc": "src/pages/Home.tsx:15:4",
    children: [
      b.jsx(GE, { "data-source-loc": "src/pages/Home.tsx:16:6" }),
      b.jsxs("main", {
        "data-source-loc": "src/pages/Home.tsx:17:6",
        children: [
          b.jsx(Yw, { "data-source-loc": "src/pages/Home.tsx:18:8" }),
          b.jsx(qw, { "data-source-loc": "src/pages/Home.tsx:19:8" }),
          b.jsx(kw, { "data-source-loc": "src/pages/Home.tsx:20:8" }),
          b.jsx(Zw, { "data-source-loc": "src/pages/Home.tsx:21:8" }),
          b.jsx(Qw, { "data-source-loc": "src/pages/Home.tsx:22:8" }),
          b.jsx(Kw, { "data-source-loc": "src/pages/Home.tsx:23:8" }),
          b.jsx(Pw, { "data-source-loc": "src/pages/Home.tsx:24:8" }),
        ],
      }),
      b.jsx($w, { "data-source-loc": "src/pages/Home.tsx:26:6" }),
      b.jsx(Ww, { "data-source-loc": "src/pages/Home.tsx:27:6" }),
      b.jsx(Iw, { "data-source-loc": "src/pages/Home.tsx:28:6" }),
    ],
  });
}
function e5() {
  const [a] = nE(),
    { add: l } = vs(),
    o = E.useMemo(() => Ov(a.get("id")), [a]),
    r = Math.max(
      0,
      o.colors.findIndex((z) => z.name === a.get("color")),
    ),
    [c, d] = E.useState(r),
    [f, m] = E.useState(0),
    [y, v] = E.useState("M"),
    [g, p] = E.useState(!1),
    S = o.colors[c],
    N = Dv(S),
    M = () => {
      (l(o.id, y, S.name), p(!0), window.setTimeout(() => p(!1), 1800));
    };
  return b.jsxs("div", {
    className: "min-h-screen bg-bone text-ink",
    "data-source-loc": "src/pages/Customize.tsx:40:4",
    children: [
      b.jsx("header", {
        className: "border-b border-line",
        "data-source-loc": "src/pages/Customize.tsx:41:6",
        children: b.jsxs("div", {
          className:
            "mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between",
          "data-source-loc": "src/pages/Customize.tsx:42:8",
          children: [
            b.jsxs(Md, {
              to: "/",
              className:
                "inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink transition-colors",
              "data-source-loc": "src/pages/Customize.tsx:43:10",
              children: [
                b.jsx(xE, {
                  className: "w-4 h-4",
                  "data-source-loc": "src/pages/Customize.tsx:47:12",
                }),
                " Back to store",
              ],
            }),
            b.jsx("span", {
              className: "wordmark text-[12px] text-ink",
              "data-source-loc": "src/pages/Customize.tsx:49:10",
              children: "Holy Trinity",
            }),
          ],
        }),
      }),
      b.jsxs("main", {
        className:
          "mx-auto max-w-6xl px-5 sm:px-8 py-10 lg:py-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start",
        "data-source-loc": "src/pages/Customize.tsx:53:6",
        children: [
          b.jsxs("div", {
            className: "lg:sticky lg:top-10",
            "data-source-loc": "src/pages/Customize.tsx:54:8",
            children: [
              b.jsx(
                te.div,
                {
                  initial: { opacity: 0.3, scale: 0.99 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.4 },
                  className:
                    "aspect-[4/5] overflow-hidden border border-line bg-paper",
                  "data-source-loc": "src/pages/Customize.tsx:55:10",
                  children: b.jsx("img", {
                    src: N[Math.min(f, N.length - 1)],
                    alt: `${o.name} — ${S.name}, view ${f + 1}`,
                    className: "h-full w-full object-cover object-top",
                    "data-source-loc": "src/pages/Customize.tsx:62:12",
                  }),
                },
                S.name + f,
              ),
              b.jsx("div", {
                className: "mt-3 grid grid-cols-3 gap-3",
                "data-source-loc": "src/pages/Customize.tsx:68:10",
                children: N.map((z, A) =>
                  b.jsx(
                    "button",
                    {
                      onClick: () => m(A),
                      "aria-pressed": f === A,
                      "aria-label": `View ${A + 1}`,
                      className: `aspect-[4/5] overflow-hidden border transition-all ${f === A ? "border-ink ring-1 ring-ink" : "border-line hover:border-ink"}`,
                      "data-source-loc": "src/pages/Customize.tsx:70:14",
                      children: b.jsx("img", {
                        src: z,
                        alt: "",
                        className: "h-full w-full object-cover object-top",
                        "data-source-loc": "src/pages/Customize.tsx:81:16",
                      }),
                    },
                    A,
                  ),
                ),
              }),
            ],
          }),
          b.jsxs("div", {
            "data-source-loc": "src/pages/Customize.tsx:91:8",
            children: [
              b.jsx("p", {
                className: "wordmark text-[11px] text-stone",
                "data-source-loc": "src/pages/Customize.tsx:92:10",
                children: "Customise",
              }),
              b.jsx("h1", {
                className: "display text-4xl sm:text-5xl mt-3 leading-[0.9]",
                "data-source-loc": "src/pages/Customize.tsx:93:10",
                children: o.name,
              }),
              b.jsx("p", {
                className:
                  "mt-2 text-[13px] uppercase tracking-[0.16em] text-stone",
                "data-source-loc": "src/pages/Customize.tsx:96:10",
                children: o.subtitle,
              }),
              b.jsxs("div", {
                className: "mt-6 flex items-baseline gap-3",
                "data-source-loc": "src/pages/Customize.tsx:100:10",
                children: [
                  b.jsxs("span", {
                    className: "text-2xl font-semibold",
                    "data-source-loc": "src/pages/Customize.tsx:101:12",
                    children: ["$", o.price],
                  }),
                  b.jsxs("span", {
                    className: "text-ash line-through",
                    "data-source-loc": "src/pages/Customize.tsx:102:12",
                    children: ["$", o.compareAt],
                  }),
                  b.jsxs("span", {
                    className:
                      "text-xs uppercase tracking-[0.16em] text-ink-soft bg-paper border border-line px-2 py-1",
                    "data-source-loc": "src/pages/Customize.tsx:103:12",
                    children: ["Save $", o.compareAt - o.price],
                  }),
                ],
              }),
              b.jsx("p", {
                className: "mt-6 text-ink-soft leading-relaxed",
                "data-source-loc": "src/pages/Customize.tsx:108:10",
                children: o.description,
              }),
              b.jsxs("div", {
                className: "mt-8",
                "data-source-loc": "src/pages/Customize.tsx:112:10",
                children: [
                  b.jsxs("p", {
                    className: "text-xs uppercase tracking-[0.16em] text-stone",
                    "data-source-loc": "src/pages/Customize.tsx:113:12",
                    children: [
                      "Colour — ",
                      b.jsx("span", {
                        className: "text-ink",
                        "data-source-loc": "src/pages/Customize.tsx:114:23",
                        children: S.name,
                      }),
                    ],
                  }),
                  b.jsx("div", {
                    className: "mt-3 flex gap-4",
                    "data-source-loc": "src/pages/Customize.tsx:116:12",
                    children: o.colors.map((z, A) =>
                      b.jsx(
                        "button",
                        {
                          onClick: () => {
                            (d(A), m(0));
                          },
                          "aria-pressed": c === A,
                          "aria-label": z.name,
                          title: z.name,
                          className: `w-11 h-11 rounded-full border transition-all ${c === A ? "ring-2 ring-ink ring-offset-2 ring-offset-bone border-ink" : "border-line hover:border-ink"}`,
                          style: { backgroundColor: z.swatch },
                          "data-source-loc": "src/pages/Customize.tsx:118:16",
                        },
                        z.name,
                      ),
                    ),
                  }),
                ],
              }),
              b.jsxs("div", {
                className: "mt-8",
                "data-source-loc": "src/pages/Customize.tsx:138:10",
                children: [
                  b.jsx("p", {
                    className: "text-xs uppercase tracking-[0.16em] text-stone",
                    "data-source-loc": "src/pages/Customize.tsx:139:12",
                    children: "Size",
                  }),
                  b.jsx("div", {
                    className: "mt-3 flex flex-wrap gap-2",
                    role: "group",
                    "aria-label": "Size",
                    "data-source-loc": "src/pages/Customize.tsx:142:12",
                    children: Mv.map((z) =>
                      b.jsx(
                        "button",
                        {
                          onClick: () => v(z),
                          "aria-pressed": y === z,
                          className: `min-w-[52px] h-11 px-3 text-sm border transition-colors ${y === z ? "border-ink bg-ink text-bone" : "border-line text-ink-soft hover:border-ink"}`,
                          "data-source-loc": "src/pages/Customize.tsx:148:16",
                          children: z,
                        },
                        z,
                      ),
                    ),
                  }),
                ],
              }),
              b.jsx("button", {
                onClick: M,
                className:
                  "mt-8 w-full inline-flex items-center justify-center gap-2 bg-ink text-bone h-14 text-xs uppercase tracking-[0.22em] hover:bg-ink-soft transition-colors",
                "data-source-loc": "src/pages/Customize.tsx:164:10",
                children: g
                  ? b.jsxs(b.Fragment, {
                      children: [
                        b.jsx(Vv, {
                          className: "w-4 h-4",
                          "data-source-loc": "src/pages/Customize.tsx:170:16",
                        }),
                        " Added to bag",
                      ],
                    })
                  : b.jsxs(b.Fragment, {
                      children: [
                        b.jsx(Dd, {
                          className: "w-4 h-4",
                          strokeWidth: 1.8,
                          "data-source-loc": "src/pages/Customize.tsx:174:16",
                        }),
                        " Add to bag — ",
                        S.name,
                        " / ",
                        y,
                      ],
                    }),
              }),
              b.jsx("p", {
                className: "mt-3 text-xs text-stone",
                "data-source-loc": "src/pages/Customize.tsx:179:10",
                children:
                  "Your bag syncs with the main store. Pre-order pricing applied.",
              }),
              b.jsx("ul", {
                className: "mt-8 border-t border-line pt-5 space-y-1.5",
                "data-source-loc": "src/pages/Customize.tsx:183:10",
                children: o.details.map((z) =>
                  b.jsxs(
                    "li",
                    {
                      className: "text-sm text-ink-soft flex gap-2",
                      "data-source-loc": "src/pages/Customize.tsx:185:14",
                      children: [
                        b.jsx("span", {
                          className: "text-ash",
                          "data-source-loc": "src/pages/Customize.tsx:186:16",
                          children: "—",
                        }),
                        " ",
                        z,
                      ],
                    },
                    z,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function n5() {
  return b.jsx(dE, {
    "data-source-loc": "src/App.tsx:8:4",
    children: b.jsx($T, {
      "data-source-loc": "src/App.tsx:9:6",
      children: b.jsxs(wT, {
        "data-source-loc": "src/App.tsx:10:8",
        children: [
          b.jsx(sr, {
            path: "/",
            element: b.jsx(t5, { "data-source-loc": "src/App.tsx:11:35" }),
            "data-source-loc": "src/App.tsx:11:10",
          }),
          b.jsx(sr, {
            path: "/customize",
            element: b.jsx(e5, { "data-source-loc": "src/App.tsx:12:44" }),
            "data-source-loc": "src/App.tsx:12:10",
          }),
          b.jsx(sr, {
            path: "*",
            element: b.jsx(CT, {
              to: "/",
              replace: !0,
              "data-source-loc": "src/App.tsx:13:35",
            }),
            "data-source-loc": "src/App.tsx:13:10",
          }),
        ],
      }),
    }),
  });
}
R2.createRoot(document.getElementById("root")).render(
  b.jsx(E.StrictMode, {
    "data-source-loc": "src/main.tsx:7:2",
    children: b.jsx(n5, { "data-source-loc": "src/main.tsx:8:4" }),
  }),
);
