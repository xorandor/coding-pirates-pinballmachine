!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).DAPjs = {}));
})(this, function (e) {
  "use strict";
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */ var t =
    function (e, r) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        })(e, r);
    };
  function r(e, r) {
    function n() {
      this.constructor = e;
    }
    t(e, r),
      (e.prototype =
        null === r ? Object.create(r) : ((n.prototype = r.prototype), new n()));
  }
  function n(e, t, r, n) {
    return new (r || (r = Promise))(function (i, s) {
      function o(e) {
        try {
          a(n.next(e));
        } catch (e) {
          s(e);
        }
      }
      function c(e) {
        try {
          a(n.throw(e));
        } catch (e) {
          s(e);
        }
      }
      function a(e) {
        var t;
        e.done
          ? i(e.value)
          : ((t = e.value),
            t instanceof r
              ? t
              : new r(function (e) {
                  e(t);
                })).then(o, c);
      }
      a((n = n.apply(e, t || [])).next());
    });
  }
  function i(e, t) {
    var r,
      n,
      i,
      s,
      o = {
        label: 0,
        sent: function () {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (s = { next: c(0), throw: c(1), return: c(2) }),
      "function" == typeof Symbol &&
        (s[Symbol.iterator] = function () {
          return this;
        }),
      s
    );
    function c(s) {
      return function (c) {
        return (function (s) {
          if (r) throw new TypeError("Generator is already executing.");
          for (; o; )
            try {
              if (
                ((r = 1),
                n &&
                  (i =
                    2 & s[0]
                      ? n.return
                      : s[0]
                      ? n.throw || ((i = n.return) && i.call(n), 0)
                      : n.next) &&
                  !(i = i.call(n, s[1])).done)
              )
                return i;
              switch (((n = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                case 0:
                case 1:
                  i = s;
                  break;
                case 4:
                  return o.label++, { value: s[1], done: !1 };
                case 5:
                  o.label++, (n = s[1]), (s = [0]);
                  continue;
                case 7:
                  (s = o.ops.pop()), o.trys.pop();
                  continue;
                default:
                  if (
                    !((i = o.trys),
                    (i = i.length > 0 && i[i.length - 1]) ||
                      (6 !== s[0] && 2 !== s[0]))
                  ) {
                    o = 0;
                    continue;
                  }
                  if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                    o.label = s[1];
                    break;
                  }
                  if (6 === s[0] && o.label < i[1]) {
                    (o.label = i[1]), (i = s);
                    break;
                  }
                  if (i && o.label < i[2]) {
                    (o.label = i[2]), o.ops.push(s);
                    break;
                  }
                  i[2] && o.ops.pop(), o.trys.pop();
                  continue;
              }
              s = t.call(e, o);
            } catch (e) {
              (s = [6, e]), (n = 0);
            } finally {
              r = i = 0;
            }
          if (5 & s[0]) throw s[1];
          return { value: s[0] ? s[1] : void 0, done: !0 };
        })([s, c]);
      };
    }
  }
  function s() {}
  function o() {
    o.init.call(this);
  }
  function c(e) {
    return void 0 === e._maxListeners ? o.defaultMaxListeners : e._maxListeners;
  }
  function a(e, t, r) {
    if (t) e.call(r);
    else for (var n = e.length, i = w(e, n), s = 0; s < n; ++s) i[s].call(r);
  }
  function u(e, t, r, n) {
    if (t) e.call(r, n);
    else for (var i = e.length, s = w(e, i), o = 0; o < i; ++o) s[o].call(r, n);
  }
  function h(e, t, r, n, i) {
    if (t) e.call(r, n, i);
    else
      for (var s = e.length, o = w(e, s), c = 0; c < s; ++c) o[c].call(r, n, i);
  }
  function f(e, t, r, n, i, s) {
    if (t) e.call(r, n, i, s);
    else
      for (var o = e.length, c = w(e, o), a = 0; a < o; ++a)
        c[a].call(r, n, i, s);
  }
  function l(e, t, r, n) {
    if (t) e.apply(r, n);
    else
      for (var i = e.length, s = w(e, i), o = 0; o < i; ++o) s[o].apply(r, n);
  }
  function d(e, t, r, n) {
    var i, o, a, u;
    if ("function" != typeof r)
      throw new TypeError('"listener" argument must be a function');
    if (
      ((o = e._events)
        ? (o.newListener &&
            (e.emit("newListener", t, r.listener ? r.listener : r),
            (o = e._events)),
          (a = o[t]))
        : ((o = e._events = new s()), (e._eventsCount = 0)),
      a)
    ) {
      if (
        ("function" == typeof a
          ? (a = o[t] = n ? [r, a] : [a, r])
          : n
          ? a.unshift(r)
          : a.push(r),
        !a.warned && (i = c(e)) && i > 0 && a.length > i)
      ) {
        a.warned = !0;
        var h = new Error(
          "Possible EventEmitter memory leak detected. " +
            a.length +
            " " +
            t +
            " listeners added. Use emitter.setMaxListeners() to increase limit"
        );
        (h.name = "MaxListenersExceededWarning"),
          (h.emitter = e),
          (h.type = t),
          (h.count = a.length),
          (u = h),
          "function" == typeof console.warn ? console.warn(u) : console.log(u);
      }
    } else (a = o[t] = r), ++e._eventsCount;
    return e;
  }
  function p(e, t, r) {
    var n = !1;
    function i() {
      e.removeListener(t, i), n || ((n = !0), r.apply(e, arguments));
    }
    return (i.listener = r), i;
  }
  function v(e) {
    var t = this._events;
    if (t) {
      var r = t[e];
      if ("function" == typeof r) return 1;
      if (r) return r.length;
    }
    return 0;
  }
  function w(e, t) {
    for (var r = new Array(t); t--; ) r[t] = e[t];
    return r;
  }
  (s.prototype = Object.create(null)),
    (o.EventEmitter = o),
    (o.usingDomains = !1),
    (o.prototype.domain = void 0),
    (o.prototype._events = void 0),
    (o.prototype._maxListeners = void 0),
    (o.defaultMaxListeners = 10),
    (o.init = function () {
      (this.domain = null),
        o.usingDomains && (void 0).active,
        (this._events &&
          this._events !== Object.getPrototypeOf(this)._events) ||
          ((this._events = new s()), (this._eventsCount = 0)),
        (this._maxListeners = this._maxListeners || void 0);
    }),
    (o.prototype.setMaxListeners = function (e) {
      if ("number" != typeof e || e < 0 || isNaN(e))
        throw new TypeError('"n" argument must be a positive number');
      return (this._maxListeners = e), this;
    }),
    (o.prototype.getMaxListeners = function () {
      return c(this);
    }),
    (o.prototype.emit = function (e) {
      var t,
        r,
        n,
        i,
        s,
        o,
        c,
        d = "error" === e;
      if ((o = this._events)) d = d && null == o.error;
      else if (!d) return !1;
      if (((c = this.domain), d)) {
        if (((t = arguments[1]), !c)) {
          if (t instanceof Error) throw t;
          var p = new Error('Uncaught, unspecified "error" event. (' + t + ")");
          throw ((p.context = t), p);
        }
        return (
          t || (t = new Error('Uncaught, unspecified "error" event')),
          (t.domainEmitter = this),
          (t.domain = c),
          (t.domainThrown = !1),
          c.emit("error", t),
          !1
        );
      }
      if (!(r = o[e])) return !1;
      var v = "function" == typeof r;
      switch ((n = arguments.length)) {
        case 1:
          a(r, v, this);
          break;
        case 2:
          u(r, v, this, arguments[1]);
          break;
        case 3:
          h(r, v, this, arguments[1], arguments[2]);
          break;
        case 4:
          f(r, v, this, arguments[1], arguments[2], arguments[3]);
          break;
        default:
          for (i = new Array(n - 1), s = 1; s < n; s++) i[s - 1] = arguments[s];
          l(r, v, this, i);
      }
      return !0;
    }),
    (o.prototype.addListener = function (e, t) {
      return d(this, e, t, !1);
    }),
    (o.prototype.on = o.prototype.addListener),
    (o.prototype.prependListener = function (e, t) {
      return d(this, e, t, !0);
    }),
    (o.prototype.once = function (e, t) {
      if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function');
      return this.on(e, p(this, e, t)), this;
    }),
    (o.prototype.prependOnceListener = function (e, t) {
      if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function');
      return this.prependListener(e, p(this, e, t)), this;
    }),
    (o.prototype.removeListener = function (e, t) {
      var r, n, i, o, c;
      if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function');
      if (!(n = this._events)) return this;
      if (!(r = n[e])) return this;
      if (r === t || (r.listener && r.listener === t))
        0 == --this._eventsCount
          ? (this._events = new s())
          : (delete n[e],
            n.removeListener &&
              this.emit("removeListener", e, r.listener || t));
      else if ("function" != typeof r) {
        for (i = -1, o = r.length; o-- > 0; )
          if (r[o] === t || (r[o].listener && r[o].listener === t)) {
            (c = r[o].listener), (i = o);
            break;
          }
        if (i < 0) return this;
        if (1 === r.length) {
          if (((r[0] = void 0), 0 == --this._eventsCount))
            return (this._events = new s()), this;
          delete n[e];
        } else
          !(function (e, t) {
            for (var r = t, n = r + 1, i = e.length; n < i; r += 1, n += 1)
              e[r] = e[n];
            e.pop();
          })(r, i);
        n.removeListener && this.emit("removeListener", e, c || t);
      }
      return this;
    }),
    (o.prototype.removeAllListeners = function (e) {
      var t, r;
      if (!(r = this._events)) return this;
      if (!r.removeListener)
        return (
          0 === arguments.length
            ? ((this._events = new s()), (this._eventsCount = 0))
            : r[e] &&
              (0 == --this._eventsCount
                ? (this._events = new s())
                : delete r[e]),
          this
        );
      if (0 === arguments.length) {
        for (var n, i = Object.keys(r), o = 0; o < i.length; ++o)
          "removeListener" !== (n = i[o]) && this.removeAllListeners(n);
        return (
          this.removeAllListeners("removeListener"),
          (this._events = new s()),
          (this._eventsCount = 0),
          this
        );
      }
      if ("function" == typeof (t = r[e])) this.removeListener(e, t);
      else if (t)
        do {
          this.removeListener(e, t[t.length - 1]);
        } while (t[0]);
      return this;
    }),
    (o.prototype.listeners = function (e) {
      var t,
        r = this._events;
      return r && (t = r[e])
        ? "function" == typeof t
          ? [t.listener || t]
          : (function (e) {
              for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                t[r] = e[r].listener || e[r];
              return t;
            })(t)
        : [];
    }),
    (o.listenerCount = function (e, t) {
      return "function" == typeof e.listenerCount
        ? e.listenerCount(t)
        : v.call(e, t);
    }),
    (o.prototype.listenerCount = v),
    (o.prototype.eventNames = function () {
      return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
    });
  var y,
    m = (function () {
      function e() {
        this.locked = !1;
      }
      return (
        (e.prototype.lock = function () {
          return n(this, void 0, void 0, function () {
            return i(this, function (e) {
              switch (e.label) {
                case 0:
                  return this.locked
                    ? [
                        4,
                        new Promise(function (e) {
                          return setTimeout(e, 1);
                        }),
                      ]
                    : [3, 2];
                case 1:
                  return e.sent(), [3, 0];
                case 2:
                  return (this.locked = !0), [2];
              }
            });
          });
        }),
        (e.prototype.unlock = function () {
          this.locked = !1;
        }),
        e
      );
    })(),
    b = (function (e) {
      function t(t, r, n) {
        void 0 === r && (r = 0), void 0 === n && (n = 1e7);
        var i = e.call(this) || this;
        (i.transport = t),
          (i.mode = r),
          (i.clockFrequency = n),
          (i.connected = !1),
          (i.sendMutex = new m()),
          (i.blockSize = i.transport.packetSize - 4 - 1);
        var s = i.transport.packetSize - 2 - 1;
        return (i.operationCount = Math.floor(s / 5)), i;
      }
      return (
        r(t, e),
        (t.prototype.bufferSourceToUint8Array = function (e, t) {
          if (!t) return new Uint8Array([e]);
          var r = void 0 !== t.buffer ? t.buffer : t,
            n = new Uint8Array(r.byteLength + 1);
          return n.set([e]), n.set(new Uint8Array(r), 1), n;
        }),
        (t.prototype.selectProtocol = function (e) {
          return n(this, void 0, void 0, function () {
            var t;
            return i(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (t = 2 === e ? 59196 : 59294),
                    [
                      4,
                      this.swjSequence(
                        new Uint8Array([255, 255, 255, 255, 255, 255, 255])
                      ),
                    ]
                  );
                case 1:
                  return r.sent(), [4, this.swjSequence(new Uint16Array([t]))];
                case 2:
                  return (
                    r.sent(),
                    [
                      4,
                      this.swjSequence(
                        new Uint8Array([255, 255, 255, 255, 255, 255, 255])
                      ),
                    ]
                  );
                case 3:
                  return r.sent(), [4, this.swjSequence(new Uint8Array([0]))];
                case 4:
                  return r.sent(), [2];
              }
            });
          });
        }),
        (t.prototype.send = function (e, t) {
          return n(this, void 0, void 0, function () {
            var r, n;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (r = this.bufferSourceToUint8Array(e, t)),
                    [4, this.sendMutex.lock()]
                  );
                case 1:
                  i.sent(), (i.label = 2);
                case 2:
                  return i.trys.push([2, , 5, 6]), [4, this.transport.write(r)];
                case 3:
                  return i.sent(), [4, this.transport.read()];
                case 4:
                  if ((n = i.sent()).getUint8(0) !== e)
                    throw new Error(
                      "Bad response for " + e + " -> " + n.getUint8(0)
                    );
                  switch (e) {
                    case 3:
                    case 8:
                    case 9:
                    case 10:
                    case 17:
                    case 18:
                    case 19:
                    case 29:
                    case 23:
                    case 24:
                    case 26:
                    case 21:
                    case 22:
                    case 4:
                      if (0 !== n.getUint8(1))
                        throw new Error(
                          "Bad status for " + e + " -> " + n.getUint8(1)
                        );
                  }
                  return [2, n];
                case 5:
                  return this.sendMutex.unlock(), [7];
                case 6:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.clearAbort = function (e) {
          return (
            void 0 === e && (e = 30),
            n(this, void 0, void 0, function () {
              return i(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.send(8, new Uint8Array([0, e]))];
                  case 1:
                    return t.sent(), [2];
                }
              });
            })
          );
        }),
        (t.prototype.dapInfo = function (e) {
          return n(this, void 0, void 0, function () {
            var t, r, n, s;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    i.trys.push([0, 2, , 4]),
                    [4, this.send(0, new Uint8Array([e]))]
                  );
                case 1:
                  if (((t = i.sent()), 0 === (r = t.getUint8(1))))
                    throw new Error("DAP Info Failure");
                  switch (e) {
                    case 240:
                    case 254:
                    case 255:
                    case 253:
                      if (1 === r) return [2, t.getUint8(2)];
                      if (2 === r) return [2, t.getUint16(2)];
                      if (4 === r) return [2, t.getUint32(2)];
                  }
                  return (
                    (n = Array.prototype.slice.call(
                      new Uint8Array(t.buffer, 2, r)
                    )),
                    [2, String.fromCharCode.apply(null, n)]
                  );
                case 2:
                  return (s = i.sent()), [4, this.clearAbort()];
                case 3:
                  throw (i.sent(), s);
                case 4:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.swjSequence = function (e) {
          return n(this, void 0, void 0, function () {
            var t, r, n;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  (t = 8 * e.byteLength),
                    (r = this.bufferSourceToUint8Array(t, e)),
                    (i.label = 1);
                case 1:
                  return i.trys.push([1, 3, , 5]), [4, this.send(18, r)];
                case 2:
                  return i.sent(), [3, 5];
                case 3:
                  return (n = i.sent()), [4, this.clearAbort()];
                case 4:
                  throw (i.sent(), n);
                case 5:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.configureTransfer = function (e, t, r) {
          return n(this, void 0, void 0, function () {
            var n, s, o;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  (n = new Uint8Array(5)),
                    (s = new DataView(n.buffer)).setUint8(0, e),
                    s.setUint16(1, t, !0),
                    s.setUint16(3, r, !0),
                    (i.label = 1);
                case 1:
                  return i.trys.push([1, 3, , 5]), [4, this.send(4, n)];
                case 2:
                  return i.sent(), [3, 5];
                case 3:
                  return (o = i.sent()), [4, this.clearAbort()];
                case 4:
                  throw (i.sent(), o);
                case 5:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.connect = function () {
          return n(this, void 0, void 0, function () {
            var e, t, r;
            return i(this, function (n) {
              switch (n.label) {
                case 0:
                  return !0 === this.connected
                    ? [2]
                    : [4, this.transport.open()];
                case 1:
                  n.sent(), (n.label = 2);
                case 2:
                  return (
                    n.trys.push([2, 5, , 8]),
                    [4, this.send(17, new Uint32Array([this.clockFrequency]))]
                  );
                case 3:
                  return (
                    n.sent(), [4, this.send(2, new Uint8Array([this.mode]))]
                  );
                case 4:
                  if (
                    0 === (e = n.sent()).getUint8(1) ||
                    (0 !== this.mode && e.getUint8(1) !== this.mode)
                  )
                    throw new Error("Mode not enabled.");
                  return [3, 8];
                case 5:
                  return (t = n.sent()), [4, this.clearAbort()];
                case 6:
                  return n.sent(), [4, this.transport.close()];
                case 7:
                  throw (n.sent(), t);
                case 8:
                  return (
                    n.trys.push([8, 11, , 13]),
                    [4, this.configureTransfer(0, 100, 0)]
                  );
                case 9:
                  return n.sent(), [4, this.selectProtocol(1)];
                case 10:
                  return n.sent(), [3, 13];
                case 11:
                  return (r = n.sent()), [4, this.transport.close()];
                case 12:
                  throw (n.sent(), r);
                case 13:
                  return (this.connected = !0), [2];
              }
            });
          });
        }),
        (t.prototype.disconnect = function () {
          return n(this, void 0, void 0, function () {
            var e;
            return i(this, function (t) {
              switch (t.label) {
                case 0:
                  if (!1 === this.connected) return [2];
                  t.label = 1;
                case 1:
                  return t.trys.push([1, 3, , 5]), [4, this.send(3)];
                case 2:
                  return t.sent(), [3, 5];
                case 3:
                  return (e = t.sent()), [4, this.clearAbort()];
                case 4:
                  throw (t.sent(), e);
                case 5:
                  return [4, this.transport.close()];
                case 6:
                  return t.sent(), (this.connected = !1), [2];
              }
            });
          });
        }),
        (t.prototype.reconnect = function () {
          return n(this, void 0, void 0, function () {
            return i(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.disconnect()];
                case 1:
                  return (
                    e.sent(),
                    [
                      4,
                      new Promise(function (e) {
                        return setTimeout(e, 100);
                      }),
                    ]
                  );
                case 2:
                  return e.sent(), [4, this.connect()];
                case 3:
                  return e.sent(), [2];
              }
            });
          });
        }),
        (t.prototype.reset = function () {
          return n(this, void 0, void 0, function () {
            var e;
            return i(this, function (t) {
              switch (t.label) {
                case 0:
                  return t.trys.push([0, 2, , 4]), [4, this.send(10)];
                case 1:
                  return [2, 1 === t.sent().getUint8(2)];
                case 2:
                  return (e = t.sent()), [4, this.clearAbort()];
                case 3:
                  throw (t.sent(), e);
                case 4:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.transfer = function (e, t, r, s) {
          return (
            void 0 === t && (t = 2),
            void 0 === r && (r = 0),
            void 0 === s && (s = 0),
            n(this, void 0, void 0, function () {
              var n, o, c, a, u, h, f;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    (n =
                      "number" == typeof e
                        ? [{ port: e, mode: t, register: r, value: s }]
                        : e),
                      (o = new Uint8Array(2 + 5 * n.length)),
                      (c = new DataView(o.buffer)).setUint8(0, 0),
                      c.setUint8(1, n.length),
                      n.forEach(function (e, t) {
                        var r = 2 + 5 * t;
                        c.setUint8(r, e.port | e.mode | e.register),
                          c.setUint32(r + 1, e.value || 0, !0);
                      }),
                      (i.label = 1);
                  case 1:
                    return i.trys.push([1, 3, , 5]), [4, this.send(5, o)];
                  case 2:
                    if ((a = i.sent()).getUint8(1) !== n.length)
                      throw new Error("Transfer count mismatch");
                    if (2 === (u = a.getUint8(2)))
                      throw new Error("Transfer response WAIT");
                    if (4 === u) throw new Error("Transfer response FAULT");
                    if (8 === u)
                      throw new Error("Transfer response PROTOCOL_ERROR");
                    if (16 === u)
                      throw new Error("Transfer response VALUE_MISMATCH");
                    if (7 === u) throw new Error("Transfer response NO_ACK");
                    return "number" == typeof e
                      ? [2, a.getUint32(3, !0)]
                      : ((h = 4 * n.length),
                        [2, new Uint32Array(a.buffer.slice(3, 3 + h))]);
                  case 3:
                    return (f = i.sent()), [4, this.clearAbort()];
                  case 4:
                    throw (i.sent(), f);
                  case 5:
                    return [2];
                }
              });
            })
          );
        }),
        (t.prototype.transferBlock = function (e, t, r) {
          return n(this, void 0, void 0, function () {
            var n, s, o, c, a, u, h, f;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  (o = 4),
                    "number" == typeof r
                      ? ((n = r), (s = 2))
                      : ((n = r.length), (s = 0), (o += r.byteLength)),
                    (c = new Uint8Array(o)),
                    (a = new DataView(c.buffer)).setUint8(0, 0),
                    a.setUint16(1, n, !0),
                    a.setUint8(3, e | s | t),
                    "number" != typeof r &&
                      r.forEach(function (e, t) {
                        var r = 4 + 4 * t;
                        a.setUint32(r, e, !0);
                      }),
                    (i.label = 1);
                case 1:
                  return i.trys.push([1, 3, , 5]), [4, this.send(6, a)];
                case 2:
                  if ((u = i.sent()).getUint16(1, !0) !== n)
                    throw new Error("Transfer count mismatch");
                  if (2 === (h = u.getUint8(3)))
                    throw new Error("Transfer response WAIT");
                  if (4 === h) throw new Error("Transfer response FAULT");
                  if (8 === h)
                    throw new Error("Transfer response PROTOCOL_ERROR");
                  if (7 === h) throw new Error("Transfer response NO_ACK");
                  return "number" == typeof r
                    ? [2, new Uint32Array(u.buffer.slice(4, 4 + 4 * n))]
                    : [3, 5];
                case 3:
                  return (f = i.sent()), [4, this.clearAbort()];
                case 4:
                  throw (i.sent(), f);
                case 5:
                  return [2, void 0];
              }
            });
          });
        }),
        t
      );
    })(o),
    g = /[\xc0-\xff][\x80-\xbf]*$/g,
    A = /[\xc0-\xff][\x80-\xbf]*/g,
    C = (function () {
      function e() {}
      return (
        (e.prototype.decode = function (e) {
          var t = Array.prototype.slice.call(new Uint8Array(e)),
            r = String.fromCodePoint.apply(void 0, t);
          this.partialChar &&
            ((r = "" + this.partialChar + r), (this.partialChar = void 0));
          var n = r.match(g);
          if (n) {
            var i = n[0].length;
            (this.partialChar = r.slice(-i)), (r = r.slice(0, -i));
          }
          return r.replace(A, this.decoderReplacer);
        }),
        (e.prototype.decoderReplacer = function (e) {
          var t = e.codePointAt(0) << 24,
            r = Math.clz32(~t),
            n = 0,
            i = e.length,
            s = "";
          if (r < 5 && i >= r) {
            for (t = (t << r) >>> (24 + r), n = 1; n < r; n += 1)
              t = (t << 6) | (63 & e.codePointAt(n));
            t <= 65535
              ? (s += String.fromCodePoint(t))
              : t <= 1114111
              ? ((t -= 65536),
                (s += String.fromCodePoint(
                  55296 + (t >> 10),
                  56320 + (1023 & t)
                )))
              : (n = 0);
          }
          for (; n < i; n += 1) s += "�";
          return s;
        }),
        e
      );
    })(),
    E = new C(),
    U = (function (e) {
      function t(r, s, o) {
        void 0 === s && (s = 0), void 0 === o && (o = 1e7);
        var c = e.call(this, r, s, o) || this;
        return (
          (c.serialPolling = !1),
          (c.serialListeners = !1),
          c.on("newListener", function (e) {
            return n(c, void 0, void 0, function () {
              return i(this, function (r) {
                return (
                  e === t.EVENT_SERIAL_DATA &&
                    0 === this.listenerCount(e) &&
                    (this.serialListeners = !0),
                  [2]
                );
              });
            });
          }),
          c.on("removeListener", function (e) {
            e === t.EVENT_SERIAL_DATA &&
              0 === c.listenerCount(e) &&
              (c.serialListeners = !1);
          }),
          c
        );
      }
      return (
        r(t, e),
        (t.prototype.isBufferBinary = function (e) {
          for (
            var t = Array.prototype.slice.call(new Uint16Array(e, 0, 50)),
              r = String.fromCharCode.apply(null, t),
              n = 0;
            n < r.length;
            n++
          ) {
            var i = r.charCodeAt(n);
            if (65533 === i || i <= 8) return !0;
          }
          return !1;
        }),
        (t.prototype.writeBuffer = function (e, r, s) {
          return (
            void 0 === s && (s = 0),
            n(this, void 0, void 0, function () {
              var n, o, c, a;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    (n = Math.min(e.byteLength, s + r)),
                      (o = e.slice(s, n)),
                      (c = new Uint8Array(o.byteLength + 1)).set([
                        o.byteLength,
                      ]),
                      c.set(new Uint8Array(o), 1),
                      (i.label = 1);
                  case 1:
                    return i.trys.push([1, 3, , 5]), [4, this.send(140, c)];
                  case 2:
                    return i.sent(), [3, 5];
                  case 3:
                    return (a = i.sent()), [4, this.clearAbort()];
                  case 4:
                    throw (i.sent(), a);
                  case 5:
                    return (
                      this.emit(t.EVENT_PROGRESS, s / e.byteLength),
                      n < e.byteLength ? [2, this.writeBuffer(e, r, n)] : [2]
                    );
                }
              });
            })
          );
        }),
        (t.prototype.flash = function (e, r) {
          return (
            void 0 === r && (r = 62),
            n(this, void 0, void 0, function () {
              var n, s, o;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    (n = (function (e) {
                      return void 0 !== e.buffer;
                    })(e)
                      ? e.buffer
                      : e),
                      (s = this.isBufferBinary(n) ? 0 : 1),
                      (i.label = 1);
                  case 1:
                    return (
                      i.trys.push([1, 6, , 8]),
                      [4, this.send(138, new Uint32Array([s]))]
                    );
                  case 2:
                    if (0 !== i.sent().getUint8(1))
                      throw new Error("Flash error");
                    return [4, this.writeBuffer(n, r)];
                  case 3:
                    return (
                      i.sent(),
                      this.emit(t.EVENT_PROGRESS, 1),
                      [4, this.send(139)]
                    );
                  case 4:
                    if (0 !== i.sent().getUint8(1))
                      throw new Error("Flash error");
                    return [4, this.send(137)];
                  case 5:
                    return i.sent(), [3, 8];
                  case 6:
                    return (o = i.sent()), [4, this.clearAbort()];
                  case 7:
                    throw (i.sent(), o);
                  case 8:
                    return [2];
                }
              });
            })
          );
        }),
        (t.prototype.getSerialBaudrate = function () {
          return n(this, void 0, void 0, function () {
            var e;
            return i(this, function (t) {
              switch (t.label) {
                case 0:
                  return t.trys.push([0, 2, , 4]), [4, this.send(129)];
                case 1:
                  return [2, t.sent().getUint32(1, !0)];
                case 2:
                  return (e = t.sent()), [4, this.clearAbort()];
                case 3:
                  throw (t.sent(), e);
                case 4:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.setSerialBaudrate = function (e) {
          return (
            void 0 === e && (e = 9600),
            n(this, void 0, void 0, function () {
              var t;
              return i(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      r.trys.push([0, 2, , 4]),
                      [4, this.send(130, new Uint32Array([e]))]
                    );
                  case 1:
                    return r.sent(), [3, 4];
                  case 2:
                    return (t = r.sent()), [4, this.clearAbort()];
                  case 3:
                    throw (r.sent(), t);
                  case 4:
                    return [2];
                }
              });
            })
          );
        }),
        (t.prototype.serialWrite = function (e) {
          return n(this, void 0, void 0, function () {
            var t, r;
            return i(this, function (n) {
              switch (n.label) {
                case 0:
                  (t = e.split("").map(function (e) {
                    return e.charCodeAt(0);
                  })).unshift(t.length),
                    (n.label = 1);
                case 1:
                  return (
                    n.trys.push([1, 3, , 5]),
                    [4, this.send(132, new Uint8Array(t).buffer)]
                  );
                case 2:
                  return n.sent(), [3, 5];
                case 3:
                  return (r = n.sent()), [4, this.clearAbort()];
                case 4:
                  throw (n.sent(), r);
                case 5:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.serialRead = function () {
          return n(this, void 0, void 0, function () {
            var e, t, r;
            return i(this, function (n) {
              switch (n.label) {
                case 0:
                  return n.trys.push([0, 2, , 4]), [4, this.send(131)];
                case 1:
                  return 0 === (e = n.sent()).byteLength ||
                    131 !== e.getUint8(0) ||
                    0 === (t = e.getUint8(1))
                    ? [2, void 0]
                    : (2, [2, e.buffer.slice(2, 2 + t)]);
                case 2:
                  return (r = n.sent()), [4, this.clearAbort()];
                case 3:
                  throw (n.sent(), r);
                case 4:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.startSerialRead = function (e, r) {
          return (
            void 0 === e && (e = 100),
            void 0 === r && (r = !0),
            n(this, void 0, void 0, function () {
              var n, s, o;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    (this.serialPolling = !0), (i.label = 1);
                  case 1:
                    return this.serialPolling
                      ? this.serialListeners
                        ? ((n = this.connected),
                          !1 !== this.connected || !0 !== r
                            ? [3, 3]
                            : [4, this.connect()])
                        : [3, 7]
                      : [3, 9];
                  case 2:
                    i.sent(), (i.label = 3);
                  case 3:
                    return [4, this.serialRead()];
                  case 4:
                    return (
                      (s = i.sent()),
                      !1 !== n || !0 !== r ? [3, 6] : [4, this.disconnect()]
                    );
                  case 5:
                    i.sent(), (i.label = 6);
                  case 6:
                    void 0 !== s &&
                      ((o = E.decode(s)), this.emit(t.EVENT_SERIAL_DATA, o)),
                      (i.label = 7);
                  case 7:
                    return [
                      4,
                      new Promise(function (t) {
                        return setTimeout(t, e);
                      }),
                    ];
                  case 8:
                    return i.sent(), [3, 1];
                  case 9:
                    return [2];
                }
              });
            })
          );
        }),
        (t.prototype.stopSerialRead = function () {
          this.serialPolling = !1;
        }),
        (t.EVENT_PROGRESS = "progress"),
        (t.EVENT_SERIAL_DATA = "serial"),
        t
      );
    })(b),
    P = (function () {
      function e(e, t, r) {
        void 0 === t && (t = 0), void 0 === r && (r = 1e7);
        this.proxy = void 0 !== e.open ? new b(e, t, r) : e;
      }
      return (
        (e.prototype.waitDelay = function (e, t, r) {
          return (
            void 0 === t && (t = 0),
            void 0 === r && (r = 100),
            n(this, void 0, void 0, function () {
              var n;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    (n = !0),
                      t > 0 &&
                        setTimeout(function () {
                          if (n) throw ((n = !1), new Error("Wait timed out"));
                        }, t),
                      (i.label = 1);
                  case 1:
                    return n ? [4, e()] : [3, 5];
                  case 2:
                    return !0 === i.sent()
                      ? ((n = !1), [2])
                      : r > 0
                      ? [
                          4,
                          new Promise(function (e) {
                            return setTimeout(e, t);
                          }),
                        ]
                      : [3, 4];
                  case 3:
                    i.sent(), (i.label = 4);
                  case 4:
                    return [3, 1];
                  case 5:
                    return [2];
                }
              });
            })
          );
        }),
        (e.prototype.concatTypedArray = function (e) {
          if (1 === e.length) return e[0];
          for (var t = 0, r = 0, n = e; r < n.length; r++) {
            t += n[r].length;
          }
          for (var i = new Uint32Array(t), s = 0, o = 0; s < e.length; s++)
            i.set(e[s], o), (o += e[s].length);
          return i;
        }),
        (e.prototype.readDPCommand = function (e) {
          return [{ mode: 2, port: 0, register: e }];
        }),
        (e.prototype.writeDPCommand = function (e, t) {
          if (8 === e) {
            if (t === this.selectedAddress) return [];
            this.selectedAddress = t;
          }
          return [{ mode: 0, port: 0, register: e, value: t }];
        }),
        (e.prototype.readAPCommand = function (e) {
          var t = (4278190080 & e) | (240 & e);
          return this.writeDPCommand(8, t).concat({
            mode: 2,
            port: 1,
            register: e,
          });
        }),
        (e.prototype.writeAPCommand = function (e, t) {
          if (0 === e) {
            if (t === this.cswValue) return [];
            this.cswValue = t;
          }
          var r = (4278190080 & e) | (240 & e);
          return this.writeDPCommand(8, r).concat({
            mode: 0,
            port: 1,
            register: e,
            value: t,
          });
        }),
        (e.prototype.readMem16Command = function (e) {
          return this.writeAPCommand(0, 587202641)
            .concat(this.writeAPCommand(4, e))
            .concat(this.readAPCommand(12));
        }),
        (e.prototype.writeMem16Command = function (e, t) {
          return this.writeAPCommand(0, 587202641)
            .concat(this.writeAPCommand(4, e))
            .concat(this.writeAPCommand(12, t));
        }),
        (e.prototype.readMem32Command = function (e) {
          return this.writeAPCommand(0, 587202642)
            .concat(this.writeAPCommand(4, e))
            .concat(this.readAPCommand(12));
        }),
        (e.prototype.writeMem32Command = function (e, t) {
          return this.writeAPCommand(0, 587202642)
            .concat(this.writeAPCommand(4, e))
            .concat(this.writeAPCommand(12, t));
        }),
        (e.prototype.transferSequence = function (e) {
          return n(this, void 0, void 0, function () {
            var t, r, n, s;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  (t = (t = []).concat.apply(t, e)), (r = []), (i.label = 1);
                case 1:
                  return t.length
                    ? ((n = t.splice(0, this.proxy.operationCount)),
                      [4, this.proxy.transfer(n)])
                    : [3, 3];
                case 2:
                  return (s = i.sent()), r.push(s), [3, 1];
                case 3:
                  return [2, this.concatTypedArray(r)];
              }
            });
          });
        }),
        (e.prototype.connect = function () {
          return n(this, void 0, void 0, function () {
            var e,
              t = this;
            return i(this, function (r) {
              switch (r.label) {
                case 0:
                  return (e = -1610612736), [4, this.proxy.connect()];
                case 1:
                  return r.sent(), [4, this.readDP(0)];
                case 2:
                  return (
                    r.sent(),
                    [
                      4,
                      this.transferSequence([
                        this.writeDPCommand(0, 4),
                        this.writeDPCommand(8, 0),
                        this.writeDPCommand(4, 1342177280),
                      ]),
                    ]
                  );
                case 3:
                  return (
                    r.sent(),
                    [
                      4,
                      this.waitDelay(function () {
                        return n(t, void 0, void 0, function () {
                          return i(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return [4, this.readDP(4)];
                              case 1:
                                return [2, (t.sent() & e) === e];
                            }
                          });
                        });
                      }),
                    ]
                  );
                case 4:
                  return r.sent(), [2];
              }
            });
          });
        }),
        (e.prototype.disconnect = function () {
          return this.proxy.disconnect();
        }),
        (e.prototype.reconnect = function () {
          return n(this, void 0, void 0, function () {
            return i(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.disconnect()];
                case 1:
                  return (
                    e.sent(),
                    [
                      4,
                      new Promise(function (e) {
                        return setTimeout(e, 100);
                      }),
                    ]
                  );
                case 2:
                  return e.sent(), [4, this.connect()];
                case 3:
                  return e.sent(), [2];
              }
            });
          });
        }),
        (e.prototype.reset = function () {
          return this.proxy.reset();
        }),
        (e.prototype.readDP = function (e) {
          return n(this, void 0, void 0, function () {
            return i(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.proxy.transfer(this.readDPCommand(e))];
                case 1:
                  return [2, t.sent()[0]];
              }
            });
          });
        }),
        (e.prototype.writeDP = function (e, t) {
          return n(this, void 0, void 0, function () {
            return i(this, function (r) {
              switch (r.label) {
                case 0:
                  return [4, this.proxy.transfer(this.writeDPCommand(e, t))];
                case 1:
                  return r.sent(), [2];
              }
            });
          });
        }),
        (e.prototype.readAP = function (e) {
          return n(this, void 0, void 0, function () {
            return i(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.proxy.transfer(this.readAPCommand(e))];
                case 1:
                  return [2, t.sent()[0]];
              }
            });
          });
        }),
        (e.prototype.writeAP = function (e, t) {
          return n(this, void 0, void 0, function () {
            return i(this, function (r) {
              switch (r.label) {
                case 0:
                  return [4, this.proxy.transfer(this.writeAPCommand(e, t))];
                case 1:
                  return r.sent(), [2];
              }
            });
          });
        }),
        (e.prototype.readMem16 = function (e) {
          return n(this, void 0, void 0, function () {
            return i(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.proxy.transfer(this.readMem16Command(e))];
                case 1:
                  return [2, t.sent()[0]];
              }
            });
          });
        }),
        (e.prototype.writeMem16 = function (e, t) {
          return n(this, void 0, void 0, function () {
            return i(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (t <<= (2 & e) << 3),
                    [4, this.proxy.transfer(this.writeMem16Command(e, t))]
                  );
                case 1:
                  return r.sent(), [2];
              }
            });
          });
        }),
        (e.prototype.readMem32 = function (e) {
          return n(this, void 0, void 0, function () {
            return i(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.proxy.transfer(this.readMem32Command(e))];
                case 1:
                  return [2, t.sent()[0]];
              }
            });
          });
        }),
        (e.prototype.writeMem32 = function (e, t) {
          return n(this, void 0, void 0, function () {
            return i(this, function (r) {
              switch (r.label) {
                case 0:
                  return [4, this.proxy.transfer(this.writeMem32Command(e, t))];
                case 1:
                  return r.sent(), [2];
              }
            });
          });
        }),
        (e.prototype.readBlock = function (e, t) {
          return n(this, void 0, void 0, function () {
            var r, n, s, o;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  return [
                    4,
                    this.transferSequence([
                      this.writeAPCommand(0, 587202642),
                      this.writeAPCommand(4, e),
                    ]),
                  ];
                case 1:
                  i.sent(), (r = []), (n = t), (i.label = 2);
                case 2:
                  return n > 0
                    ? ((s = Math.min(n, Math.floor(this.proxy.blockSize / 4))),
                      [4, this.proxy.transferBlock(1, 12, s)])
                    : [3, 4];
                case 3:
                  return (o = i.sent()), r.push(o), (n -= s), [3, 2];
                case 4:
                  return [2, this.concatTypedArray(r)];
              }
            });
          });
        }),
        (e.prototype.writeBlock = function (e, t) {
          return n(this, void 0, void 0, function () {
            var r, n;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  return [
                    4,
                    this.transferSequence([
                      this.writeAPCommand(0, 587202642),
                      this.writeAPCommand(4, e),
                    ]),
                  ];
                case 1:
                  i.sent(), (r = 0), (i.label = 2);
                case 2:
                  return r < t.length
                    ? ((n = t.slice(
                        r,
                        r + Math.floor(this.proxy.blockSize / 4)
                      )),
                      [4, this.proxy.transferBlock(1, 12, n)])
                    : [3, 4];
                case 3:
                  return (
                    i.sent(),
                    (r += Math.floor(this.proxy.blockSize / 4)),
                    [3, 2]
                  );
                case 4:
                  return [2];
              }
            });
          });
        }),
        e
      );
    })(),
    T = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        r(t, e),
        (t.prototype.enableDebug = function () {
          return this.writeMem32(3758157296, -1604386815);
        }),
        (t.prototype.readCoreRegisterCommand = function (e) {
          return this.writeMem32Command(3758157300, e)
            .concat(this.readMem32Command(3758157296))
            .concat(this.readMem32Command(3758157304));
        }),
        (t.prototype.writeCoreRegisterCommand = function (e, t) {
          return this.writeMem32Command(3758157304, t).concat(
            this.writeMem32Command(3758157300, 65536 | e)
          );
        }),
        (t.prototype.getState = function () {
          return n(this, void 0, void 0, function () {
            var e, t, r;
            return i(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, this.readMem32(3758157296)];
                case 1:
                  return (
                    (e = n.sent()),
                    (t = 524288 & e ? 1 : 262144 & e ? 2 : 131072 & e ? 3 : 4),
                    33554432 & e ? [4, this.readMem32(3758157296)] : [3, 3]
                  );
                case 2:
                  return 33554432 & (r = n.sent()) && !(16777216 & r)
                    ? [2, 0]
                    : [2, t];
                case 3:
                  return [2, t];
                case 4:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.isHalted = function () {
          return n(this, void 0, void 0, function () {
            return i(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.readMem32(3758157296)];
                case 1:
                  return [2, !!(131072 & e.sent())];
              }
            });
          });
        }),
        (t.prototype.halt = function (e, t) {
          return (
            void 0 === e && (e = !0),
            void 0 === t && (t = 0),
            n(this, void 0, void 0, function () {
              var r = this;
              return i(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.isHalted()];
                  case 1:
                    return n.sent()
                      ? [2]
                      : [4, this.writeMem32(3758157296, -1604386813)];
                  case 2:
                    return (
                      n.sent(),
                      e
                        ? [
                            2,
                            this.waitDelay(function () {
                              return r.isHalted();
                            }, t),
                          ]
                        : [2]
                    );
                }
              });
            })
          );
        }),
        (t.prototype.resume = function (e, t) {
          return (
            void 0 === e && (e = !0),
            void 0 === t && (t = 0),
            n(this, void 0, void 0, function () {
              var r = this;
              return i(this, function (s) {
                switch (s.label) {
                  case 0:
                    return [4, this.isHalted()];
                  case 1:
                    return s.sent() ? [4, this.writeMem32(3758157104, 7)] : [2];
                  case 2:
                    return s.sent(), [4, this.enableDebug()];
                  case 3:
                    return (
                      s.sent(),
                      e
                        ? [
                            2,
                            this.waitDelay(function () {
                              return n(r, void 0, void 0, function () {
                                return i(this, function (e) {
                                  switch (e.label) {
                                    case 0:
                                      return [4, this.isHalted()];
                                    case 1:
                                      return [2, !e.sent()];
                                  }
                                });
                              });
                            }, t),
                          ]
                        : [2]
                    );
                }
              });
            })
          );
        }),
        (t.prototype.readCoreRegister = function (e) {
          return n(this, void 0, void 0, function () {
            var t;
            return i(this, function (r) {
              switch (r.label) {
                case 0:
                  return [
                    4,
                    this.transferSequence([
                      this.writeMem32Command(3758157300, e),
                      this.readMem32Command(3758157296),
                    ]),
                  ];
                case 1:
                  if (((t = r.sent()), !(65536 & t[0])))
                    throw new Error("Register not ready");
                  return [2, this.readMem32(3758157304)];
              }
            });
          });
        }),
        (t.prototype.readCoreRegisters = function (e) {
          return n(this, void 0, void 0, function () {
            var t, r, n, s, o;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  (t = []), (r = 0), (n = e), (i.label = 1);
                case 1:
                  return r < n.length
                    ? ((s = n[r]), [4, this.readCoreRegister(s)])
                    : [3, 4];
                case 2:
                  (o = i.sent()), t.push(o), (i.label = 3);
                case 3:
                  return r++, [3, 1];
                case 4:
                  return [2, t];
              }
            });
          });
        }),
        (t.prototype.writeCoreRegister = function (e, t) {
          return n(this, void 0, void 0, function () {
            var r;
            return i(this, function (n) {
              switch (n.label) {
                case 0:
                  return [
                    4,
                    this.transferSequence([
                      this.writeMem32Command(3758157304, t),
                      this.writeMem32Command(3758157300, 65536 | e),
                      this.readMem32Command(3758157296),
                    ]),
                  ];
                case 1:
                  if (((r = n.sent()), !(65536 & r[0])))
                    throw new Error("Register not ready");
                  return [2];
              }
            });
          });
        }),
        (t.prototype.execute = function (e, t, r, s, o) {
          void 0 === o && (o = e + 1);
          for (var c = [], a = 5; a < arguments.length; a++)
            c[a - 5] = arguments[a];
          return n(this, void 0, void 0, function () {
            var n,
              a,
              u,
              h = this;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  for (
                    48682 !== t[t.length - 1] &&
                      ((n = new Uint32Array(t.length + 1)).set(t),
                      n.set([48682], t.length - 1),
                      (t = n)),
                      a = [
                        this.writeCoreRegisterCommand(13, r),
                        this.writeCoreRegisterCommand(15, s),
                        this.writeCoreRegisterCommand(14, o),
                      ],
                      u = 0;
                    u < Math.min(c.length, 12);
                    u++
                  )
                    a.push(this.writeCoreRegisterCommand(u, c[u]));
                  return (
                    a.push(this.writeCoreRegisterCommand(16, 16777216)),
                    [4, this.halt()]
                  );
                case 1:
                  return i.sent(), [4, this.transferSequence(a)];
                case 2:
                  return i.sent(), [4, this.writeBlock(e, t)];
                case 3:
                  return i.sent(), [4, this.resume(!1)];
                case 4:
                  return (
                    i.sent(),
                    [
                      4,
                      this.waitDelay(function () {
                        return h.isHalted();
                      }, 1e4),
                    ]
                  );
                case 5:
                  return i.sent(), [2];
              }
            });
          });
        }),
        (t.prototype.softReset = function () {
          return n(this, void 0, void 0, function () {
            return i(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.writeMem32(3758157308, 0)];
                case 1:
                  return e.sent(), [2, this.writeMem32(3758157068, 100270084)];
              }
            });
          });
        }),
        (t.prototype.setTargetResetState = function (e) {
          return (
            void 0 === e && (e = !0),
            n(this, void 0, void 0, function () {
              var t;
              return i(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.writeMem32(3758157308, 1)];
                  case 1:
                    return r.sent(), !0 !== e ? [3, 3] : [4, this.reset()];
                  case 2:
                    return r.sent(), [3, 6];
                  case 3:
                    return [4, this.readMem32(3758157068)];
                  case 4:
                    return (
                      (t = r.sent()),
                      [4, this.writeMem32(3758157068, 100270084 | t)]
                    );
                  case 5:
                    r.sent(), (r.label = 6);
                  case 6:
                    return [4, this.writeMem32(3758157308, 0)];
                  case 7:
                    return r.sent(), [2];
                }
              });
            })
          );
        }),
        t
      );
    })(P);
  ((y = e.FPBCtrlMask || (e.FPBCtrlMask = {}))[(y.ENABLE = 1)] = "ENABLE"),
    (y[(y.KEY = 2)] = "KEY");
  var L = (function () {
      function e(e) {
        (this.os = "browser"), (this.packetSize = 64);
        this.path = void 0 !== e.path ? e.path : e;
      }
      return (
        (e.prototype.open = function () {
          return n(this, void 0, void 0, function () {
            var e;
            return i(this, function (t) {
              if (!this.path.length) throw new Error("No path specified");
              return (
                (e = require("node-hid")),
                (this.device = new e.HID(this.path)),
                [2]
              );
            });
          });
        }),
        (e.prototype.close = function () {
          return n(this, void 0, void 0, function () {
            return i(this, function (e) {
              return this.device && this.device.close(), [2];
            });
          });
        }),
        (e.prototype.read = function () {
          return n(this, void 0, void 0, function () {
            var e,
              t,
              r = this;
            return i(this, function (n) {
              switch (n.label) {
                case 0:
                  if (!this.device) throw new Error("No device opened");
                  return [
                    4,
                    new Promise(function (e, t) {
                      r.device.read(function (r, n) {
                        if (r) return t(new Error(r));
                        e(n);
                      });
                    }),
                  ];
                case 1:
                  return (
                    (e = n.sent()),
                    (t = new Uint8Array(e).buffer),
                    [2, new DataView(t)]
                  );
              }
            });
          });
        }),
        (e.prototype.write = function (e) {
          return n(this, void 0, void 0, function () {
            var t, r;
            return i(this, function (n) {
              if (!this.device) throw new Error("No device opened");
              for (
                t = (function (e) {
                  return void 0 !== e.buffer;
                })(e)
                  ? e.buffer
                  : e,
                  r = Array.prototype.slice.call(new Uint8Array(t));
                r.length < this.packetSize;

              )
                r.push(0);
              if (
                ("win32" === this.os && r.unshift(0),
                this.device.write(r) !== r.length)
              )
                throw new Error("Incorrect bytecount written");
              return [2];
            });
          });
        }),
        e
      );
    })(),
    _ = (function () {
      function e(e, t, r, n) {
        void 0 === t && (t = 255),
          void 0 === r && (r = 1),
          void 0 === n && (n = !1),
          (this.device = e),
          (this.interfaceClass = t),
          (this.configuration = r),
          (this.alwaysControlTransfer = n),
          (this.packetSize = 64);
      }
      return (
        (e.prototype.bufferToDataView = function (e) {
          var t = new Uint8Array(e).buffer;
          return new DataView(t);
        }),
        (e.prototype.isView = function (e) {
          return void 0 !== e.buffer;
        }),
        (e.prototype.bufferSourceToBuffer = function (e) {
          var t = this.isView(e) ? e.buffer : e;
          return Buffer.from(t);
        }),
        (e.prototype.extendBuffer = function (e, t) {
          var r = this.isView(e) ? e.buffer : e,
            n = Math.min(r.byteLength, t),
            i = new Uint8Array(n);
          return i.set(new Uint8Array(r)), i;
        }),
        (e.prototype.open = function () {
          return n(this, void 0, void 0, function () {
            var e,
              t,
              r,
              n,
              s,
              o,
              c = this;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    this.device.open(),
                    [
                      4,
                      new Promise(function (e, t) {
                        c.device.setConfiguration(
                          c.configuration,
                          function (r) {
                            r ? t(new Error(r)) : e();
                          }
                        );
                      }),
                    ]
                  );
                case 1:
                  if (
                    (i.sent(),
                    !(e = this.device.interfaces.filter(function (e) {
                      return e.descriptor.bInterfaceClass === c.interfaceClass;
                    })).length)
                  )
                    throw new Error("No valid interfaces found.");
                  if (
                    ((t = e.find(function (e) {
                      return e.endpoints.length > 0;
                    })) || (t = e[0]),
                    (this.interfaceNumber = t.interfaceNumber),
                    !this.alwaysControlTransfer)
                  ) {
                    for (
                      r = t.endpoints,
                        this.endpointIn = void 0,
                        this.endpointOut = void 0,
                        n = 0,
                        s = r;
                      n < s.length;
                      n++
                    )
                      "in" === (o = s[n]).direction
                        ? (this.endpointIn = o)
                        : (this.endpointOut = o);
                    if (this.endpointIn || this.endpointOut)
                      try {
                        t.claim();
                      } catch (e) {
                        (this.endpointIn = void 0), (this.endpointOut = void 0);
                      }
                  }
                  return [2];
              }
            });
          });
        }),
        (e.prototype.close = function () {
          return n(this, void 0, void 0, function () {
            return i(this, function (e) {
              return this.device.close(), [2];
            });
          });
        }),
        (e.prototype.read = function () {
          return n(this, void 0, void 0, function () {
            var e,
              t = this;
            return i(this, function (r) {
              switch (r.label) {
                case 0:
                  if (void 0 === this.interfaceNumber)
                    throw new Error("No device opened");
                  return [
                    4,
                    new Promise(function (e, r) {
                      t.endpointIn
                        ? t.endpointIn.transfer(t.packetSize, function (t, n) {
                            t ? r(t) : e(n);
                          })
                        : t.device.controlTransfer(
                            161,
                            1,
                            256,
                            t.interfaceNumber,
                            t.packetSize,
                            function (t, n) {
                              t
                                ? r(t)
                                : n
                                ? e(n)
                                : r(new Error("No buffer read"));
                            }
                          );
                    }),
                  ];
                case 1:
                  return (e = r.sent()), [2, this.bufferToDataView(e)];
              }
            });
          });
        }),
        (e.prototype.write = function (e) {
          return n(this, void 0, void 0, function () {
            var t,
              r,
              n = this;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  if (void 0 === this.interfaceNumber)
                    throw new Error("No device opened");
                  return (
                    (t = this.extendBuffer(e, this.packetSize)),
                    (r = this.bufferSourceToBuffer(t)),
                    [
                      4,
                      new Promise(function (e, t) {
                        n.endpointOut
                          ? n.endpointOut.transfer(r, function (r) {
                              if (r) return t(r);
                              e();
                            })
                          : n.device.controlTransfer(
                              33,
                              9,
                              512,
                              n.interfaceNumber,
                              r,
                              function (r) {
                                if (r) return t(r);
                                e();
                              }
                            );
                      }),
                    ]
                  );
                case 1:
                  return i.sent(), [2];
              }
            });
          });
        }),
        e
      );
    })(),
    M = (function () {
      function e(e, t, r, n) {
        void 0 === t && (t = 255),
          void 0 === r && (r = 1),
          void 0 === n && (n = !1),
          (this.device = e),
          (this.interfaceClass = t),
          (this.configuration = r),
          (this.alwaysControlTransfer = n),
          (this.packetSize = 64);
      }
      return (
        (e.prototype.extendBuffer = function (e, t) {
          var r = void 0 !== e.buffer ? e.buffer : e,
            n = Math.min(r.byteLength, t),
            i = new Uint8Array(n);
          return i.set(new Uint8Array(r)), i;
        }),
        (e.prototype.open = function () {
          return n(this, void 0, void 0, function () {
            var e,
              t,
              r,
              n,
              s,
              o,
              c = this;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, this.device.open()];
                case 1:
                  return (
                    i.sent(),
                    [4, this.device.selectConfiguration(this.configuration)]
                  );
                case 2:
                  if (
                    (i.sent(),
                    !(e = this.device.configuration.interfaces.filter(function (
                      e
                    ) {
                      return (
                        e.alternates[0].interfaceClass === c.interfaceClass
                      );
                    })).length)
                  )
                    throw new Error("No valid interfaces found.");
                  if (
                    ((t = e.find(function (e) {
                      return e.alternates[0].endpoints.length > 0;
                    })) || (t = e[0]),
                    (this.interfaceNumber = t.interfaceNumber),
                    !this.alwaysControlTransfer)
                  )
                    for (
                      r = t.alternates[0].endpoints,
                        this.endpointIn = void 0,
                        this.endpointOut = void 0,
                        n = 0,
                        s = r;
                      n < s.length;
                      n++
                    )
                      "in" === (o = s[n]).direction
                        ? (this.endpointIn = o)
                        : (this.endpointOut = o);
                  return [2, this.device.claimInterface(this.interfaceNumber)];
              }
            });
          });
        }),
        (e.prototype.close = function () {
          return this.device.close();
        }),
        (e.prototype.read = function () {
          return n(this, void 0, void 0, function () {
            var e;
            return i(this, function (t) {
              switch (t.label) {
                case 0:
                  if (void 0 === this.interfaceNumber)
                    throw new Error("No device opened");
                  return this.endpointIn
                    ? [
                        4,
                        this.device.transferIn(
                          this.endpointIn.endpointNumber,
                          this.packetSize
                        ),
                      ]
                    : [3, 2];
                case 1:
                  return (e = t.sent()), [3, 4];
                case 2:
                  return [
                    4,
                    this.device.controlTransferIn(
                      {
                        requestType: "class",
                        recipient: "interface",
                        request: 1,
                        value: 256,
                        index: this.interfaceNumber,
                      },
                      this.packetSize
                    ),
                  ];
                case 3:
                  (e = t.sent()), (t.label = 4);
                case 4:
                  return [2, e.data];
              }
            });
          });
        }),
        (e.prototype.write = function (e) {
          return n(this, void 0, void 0, function () {
            var t;
            return i(this, function (r) {
              switch (r.label) {
                case 0:
                  if (void 0 === this.interfaceNumber)
                    throw new Error("No device opened");
                  return (
                    (t = this.extendBuffer(e, this.packetSize)),
                    this.endpointOut
                      ? [
                          4,
                          this.device.transferOut(
                            this.endpointOut.endpointNumber,
                            t
                          ),
                        ]
                      : [3, 2]
                  );
                case 1:
                  return r.sent(), [3, 4];
                case 2:
                  return [
                    4,
                    this.device.controlTransferOut(
                      {
                        requestType: "class",
                        recipient: "interface",
                        request: 9,
                        value: 512,
                        index: this.interfaceNumber,
                      },
                      t
                    ),
                  ];
                case 3:
                  r.sent(), (r.label = 4);
                case 4:
                  return [2];
              }
            });
          });
        }),
        e
      );
    })();
  (e.ADI = P),
    (e.CmsisDAP = b),
    (e.CortexM = T),
    (e.DAPLink = U),
    (e.DEFAULT_CLOCK_FREQUENCY = 1e7),
    (e.HID = L),
    (e.USB = _),
    (e.WebUSB = M),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=dap.umd.js.map
