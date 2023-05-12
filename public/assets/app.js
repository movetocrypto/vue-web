!(function () {
  "use strict";
  function t() {
    for (
      var t = document,
        e = window,
        n = [
          "iPhone",
          "iPad",
          "MQQBrowser",
          "Android",
          "MicroMessenger",
          "Trident",
        ],
        o = navigator.userAgent,
        a = t.getElementsByTagName("html")[0],
        i = 0;
      i < n.length;
      i++
    ) {
      var r = new RegExp(n[i]);
      o.match(r) && a.classList.add("ua-" + n[i]);
    }
    -1 !== o.indexOf("Safari") &&
      -1 === o.indexOf("Chrome") &&
      a.classList.add("ua-Safari"),
      "ontouchstart" in e || a.classList.add("ua-Pointer"),
      t
        .querySelector("body")
        .addEventListener("touchstart", function () {}, { passive: !0 }),
      t
        .querySelector("main")
        .addEventListener("touchstart", function () {}, { passive: !0 }),
      t
        .querySelector("footer")
        .addEventListener("touchstart", function () {}, { passive: !0 }),
      t
        .querySelector("html")
        .addEventListener("click", function () {}, { passive: !0 });
    var s = e.innerWidth - t.body.clientWidth;
    t.documentElement.style.setProperty(
      "--scrollbar-width",
      "".concat(s, "px")
    ),
      s > 0 && t.documentElement.classList.add("is-scrollbar-always");
  }
  function e(t) {
    return (
      (e =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      e(t)
    );
  }
  function n(t, e) {
    if (t) {
      if ("string" == typeof t) return o(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      return (
        "Object" === n && t.constructor && (n = t.constructor.name),
        "Map" === n || "Set" === n
          ? Array.from(t)
          : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? o(t, e)
          : void 0
      );
    }
  }
  function o(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
    return o;
  }
  function a(t, e) {
    var o =
      ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
    if (!o) {
      if (
        Array.isArray(t) ||
        (o = n(t)) ||
        (e && t && "number" == typeof t.length)
      ) {
        o && (t = o);
        var a = 0,
          i = function () {};
        return {
          s: i,
          n: function () {
            return a >= t.length ? { done: !0 } : { done: !1, value: t[a++] };
          },
          e: function (t) {
            throw t;
          },
          f: i,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var r = !0,
      s = !1,
      c;
    return {
      s: function () {
        o = o.call(t);
      },
      n: function () {
        var t = o.next();
        return (r = t.done), t;
      },
      e: function (t) {
        (s = !0), (c = t);
      },
      f: function () {
        try {
          r || null == o.return || o.return();
        } finally {
          if (s) throw c;
        }
      },
    };
  }
  function i(t) {
    var n = e(t);
    return null != t && ("object" == n || "function" == n);
  }
  function r(t) {
    for (var e = t.length; e-- && tt.test(t.charAt(e)); );
    return e;
  }
  function s(t) {
    return t ? t.slice(0, r(t) + 1).replace(et, "") : t;
  }
  function c(t) {
    var e = at.call(t, rt),
      n = t[rt];
    try {
      t[rt] = void 0;
      var o = !0;
    } catch (t) {}
    var a = it.call(t);
    return o && (e ? (t[rt] = n) : delete t[rt]), a;
  }
  function l(t) {
    return ct.call(t);
  }
  function d(t) {
    return null == t
      ? void 0 === t
        ? dt
        : lt
      : ut && ut in Object(t)
      ? c(t)
      : l(t);
  }
  function u(t) {
    return null != t && "object" == e(t);
  }
  function v(t) {
    return "symbol" == e(t) || (u(t) && d(t) == vt);
  }
  function h(t) {
    if ("number" == typeof t) return t;
    if (v(t)) return ht;
    if (i(t)) {
      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = i(e) ? e + "" : e;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = s(t);
    var n = yt.test(t);
    return n || pt.test(t) ? gt(t.slice(2), n ? 2 : 8) : ft.test(t) ? ht : +t;
  }
  function f(t, e, n) {
    function o(e) {
      var n = f,
        o = y;
      return (f = y = void 0), (w = e), (g = t.apply(o, n));
    }
    function a(t) {
      return (w = t), (m = setTimeout(c, e)), k ? o(t) : g;
    }
    function r(t) {
      var n,
        o,
        a = e - (t - b);
      return L ? wt(a, p - (t - w)) : a;
    }
    function s(t) {
      var n = t - b,
        o;
      return void 0 === b || n >= e || n < 0 || (L && t - w >= p);
    }
    function c() {
      var t = K();
      if (s(t)) return l(t);
      m = setTimeout(c, r(t));
    }
    function l(t) {
      return (m = void 0), S && f ? o(t) : ((f = y = void 0), g);
    }
    function d() {
      void 0 !== m && clearTimeout(m), (w = 0), (f = b = y = m = void 0);
    }
    function u() {
      return void 0 === m ? g : l(K());
    }
    function v() {
      var t = K(),
        n = s(t);
      if (((f = arguments), (y = this), (b = t), n)) {
        if (void 0 === m) return a(b);
        if (L) return clearTimeout(m), (m = setTimeout(c, e)), o(b);
      }
      return void 0 === m && (m = setTimeout(c, e)), g;
    }
    var f,
      y,
      p,
      g,
      m,
      b,
      w = 0,
      k = !1,
      L = !1,
      S = !0;
    if ("function" != typeof t) throw new TypeError(mt);
    return (
      (e = h(e) || 0),
      i(n) &&
        ((k = !!n.leading),
        (p = (L = "maxWait" in n) ? bt(h(n.maxWait) || 0, e) : p),
        (S = "trailing" in n ? !!n.trailing : S)),
      (v.cancel = d),
      (v.flush = u),
      v
    );
  }
  function y() {
    function t(e) {
      for (var n = e.target; n && !n.matches(".".concat(p, ", main, html")); )
        n = n.parentNode;
      ((n && !n.matches(".".concat(p))) || !n) &&
        (k.classList.remove(g), i.removeEventListener("click", t));
    }
    function e(t) {
      var e = t.target.closest(".".concat(w));
      if (e && S.contains(e)) {
        k.classList.remove(g);
        var n = a.documentElement.getAttribute("lang"),
          o = e.getAttribute("data-value");
        if (o !== n) {
          var r = i.location.pathname;
          i.location.pathname =
            n === y
              ? "/".concat(o) + r
              : o === y
              ? r.replace("/".concat(n, "/"), "/")
              : r.replace("/".concat(n, "/"), "/".concat(o, "/"));
        }
      }
    }
    function n(t) {
      for (
        var e = t.target;
        e && !e.matches(".".concat(E, ", .").concat(_, ", main, html"));

      )
        e = e.parentNode;
      ((e && !e.matches(".".concat(E, ", .").concat(_))) || !e) &&
        (A.classList.remove(x), i.removeEventListener("click", n));
    }
    function o() {
      q.addEventListener("click", function () {
        A.classList.contains(x)
          ? A.classList.remove(x)
          : (A.classList.add(x), i.addEventListener("click", n));
      });
    }
    var a = document,
      i = window,
      r = 24,
      s = 999,
      c = "navbar",
      l = "is-overlay",
      d = a.querySelector(".".concat(c)),
      u = {
        root: null,
        rootMargin: "".concat(r, "px 0px 0px 0px"),
        threshold: [0],
      },
      v,
      h = !1;
    i.addEventListener("load", function () {
      var t = a.querySelector("main");
      if (t) {
        var e = i.innerHeight;
        (u.rootMargin = "".concat(1023, "px 0px ").concat(-(r + e), "px 0px")),
          (v = new IntersectionObserver(function (t) {
            d.classList.toggle(l, t[0].isIntersecting && !h);
          }, u)).observe(t);
        var n = function t() {
          v.disconnect(), (h = !1);
          var e = i.innerHeight;
          (u.rootMargin = ""
            .concat(1023, "px 0px ")
            .concat(-(r + e), "px 0px")),
            (v = new IntersectionObserver(function (t) {
              d.classList.toggle(l, t[0].isIntersecting && !h);
            }, u));
          var n = a.querySelector("main");
          v.observe(n);
        };
        i.addEventListener("resize", function () {
          h = !0;
        }),
          i.addEventListener("resize", f(n, 150));
      }
    });
    var y = "en",
      p = "navbar-locale",
      g = "is-active",
      m = "select-button",
      b = "select-optionlist",
      w = "select-optionlist-item",
      k = a.querySelector(".".concat(p)),
      L = k.querySelector(".".concat(m)),
      S = k.querySelector(".".concat(b));
    L.addEventListener("click", function () {
      k.classList.contains(g)
        ? k.classList.remove(g)
        : (k.classList.add(g), i.addEventListener("click", t));
    }),
      S.addEventListener("click", e),
      S.addEventListener("keydown", function (t) {
        var n = "Enter",
          o = " ";
        (t.key !== n && t.key !== o) || e(t);
      });
    var E = "navbar-menu",
      T = "navbar",
      _ = "navbar-main",
      x = "is-menu-open",
      A = a.querySelector(".".concat(T)),
      q = a.querySelector(".".concat(E));
    q && o();
  }
  function p(t) {
    if (Array.isArray(t)) {
      for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
      return n;
    }
    return Array.from(t);
  }
  function g(t, e, n, o, a) {
    var i = function t() {
        a && a(),
          e.classList.remove(Yt),
          Zt.classList.remove(Xt),
          Ht(e.querySelector(".".concat(zt))),
          Ct.removeEventListener("click", r),
          Mt.removeEventListener("keydown", s),
          e.querySelector(".".concat(Vt)).removeEventListener("click", t);
      },
      r = function t(e) {
        for (
          var n = e.target;
          n && !n.matches(".".concat(Gt, ", .").concat(Nt, ", main, html"));

        )
          n = n.parentNode;
        ((n && !n.matches(".".concat(Gt, ", .").concat(Nt))) || !n) && i();
      },
      s = function t(e) {
        var n = "Escape";
        e.key === n && i();
      },
      c = function t() {
        (e.querySelector(".".concat(zt)).innerHTML = n),
          o && o(),
          e.classList.add(Yt),
          Zt.classList.add(Xt);
        var a = window.requestAnimationFrame;
        (window.requestAnimationFrame = function () {
          return 42;
        }),
          Ft(e.querySelector(".".concat(zt))),
          (window.requestAnimationFrame = a),
          setTimeout(function () {
            Ct.addEventListener("click", r);
          }, 0),
          setTimeout(function () {
            Mt.addEventListener("keydown", s);
          }, 0),
          e.querySelector(".".concat(Vt)).addEventListener("click", i),
          e.querySelector(".".concat(Gt)).focus();
      };
    t.addEventListener("click", c);
  }
  function m(t, e, n, o) {
    var a = function e() {
        o && o(),
          t.classList.remove(Yt),
          Zt.classList.remove(Xt),
          Ht(t.querySelector(".".concat(zt))),
          Ct.removeEventListener("click", i),
          Mt.removeEventListener("keydown", r),
          t.querySelector(".".concat(Vt)).removeEventListener("click", e);
      },
      i = function t(e) {
        for (
          var n = e.target;
          n && !n.matches(".".concat(Gt, ", .").concat(Nt, ", main, html"));

        )
          n = n.parentNode;
        ((n && !n.matches(".".concat(Gt, ", .").concat(Nt))) || !n) && a();
      },
      r = function t(e) {
        var n = "Escape";
        e.key === n && a();
      },
      s;
    (function o() {
      (t.querySelector(".".concat(zt)).innerHTML = e),
        n && n(),
        t.classList.add(Yt),
        Zt.classList.add(Xt);
      var s = window.requestAnimationFrame;
      (window.requestAnimationFrame = function () {
        return 42;
      }),
        Ft(t.querySelector(".".concat(zt))),
        (window.requestAnimationFrame = s),
        setTimeout(function () {
          Ct.addEventListener("click", i);
        }, 0),
        setTimeout(function () {
          Mt.addEventListener("keydown", r);
        }, 0),
        t.querySelector(".".concat(Vt)).addEventListener("click", a),
        t.querySelector(".".concat(Gt)).focus();
    })();
  }
  function b() {
    var t = document,
      e = window,
      n = t.querySelector(".index-header-plate--white"),
      o = t.querySelector(".index-header-plate--yellow"),
      a = t.querySelector(".index-header-plate--orange");
    e.addEventListener("load", function () {
      var t = "is-preload",
        e = "is-loading",
        i = 1800,
        r = 50,
        s = 400,
        c = 800;
      if (n && o && a) {
        var l = n.classList,
          d = o.classList,
          u = a.classList;
        setTimeout(function () {
          l.add(e), l.remove(t);
        }, r),
          setTimeout(function () {
            l.remove(e);
          }, 1850),
          setTimeout(function () {
            d.add(e), d.remove(t);
          }, s),
          setTimeout(function () {
            d.remove(e);
          }, 2200),
          setTimeout(function () {
            u.add(e), u.remove(t);
          }, c),
          setTimeout(function () {
            u.remove(e);
          }, 2600);
      }
    });
    var i = 1700,
      r,
      s = { root: null, rootMargin: "50% 0% -70% 0%", threshold: [0] },
      c = new IntersectionObserver(
        function (t) {
          for (
            var e = function e() {
                var o = t[n].target,
                  a = o.querySelector(".index-story-text"),
                  r = o.querySelector(".index-story-illust");
                !0 === t[n].isIntersecting
                  ? t[n].intersectionRatio >= 0.8
                    ? (o.classList.add("is-shown"),
                      a.classList.add("is-loading"),
                      a.classList.remove("is-preload"),
                      r.classList.add("is-loading"),
                      r.classList.remove("is-preload"),
                      r.classList.remove("is-loaded"),
                      setTimeout(function () {
                        r.classList.contains("is-loading") &&
                          r.classList.add("is-loaded");
                      }, i))
                    : o.classList.remove("is-shown")
                  : (o.classList.remove("is-shown"),
                    a.classList.remove("is-loading"),
                    a.classList.add("is-preload"),
                    r.classList.remove("is-loading"),
                    r.classList.remove("is-loaded"),
                    r.classList.add("is-preload"));
              },
              n = 0;
            n < t.length;
            n++
          )
            e();
        },
        { root: null, rootMargin: "100% 0% 0% 0%", threshold: [0, 0.8] }
      ),
      l = new IntersectionObserver(function (t) {
        for (
          var e = function e() {
              var o = t[n].target,
                a = o.querySelector(".index-story-text"),
                r = o.querySelector(".index-story-illust");
              !0 === t[n].isIntersecting
                ? (a.classList.add("is-loading"),
                  a.classList.remove("is-preload"),
                  r.classList.add("is-loading"),
                  r.classList.remove("is-preload"),
                  r.classList.remove("is-loaded"),
                  setTimeout(function () {
                    r.classList.contains("is-loading") &&
                      r.classList.add("is-loaded");
                  }, i))
                : o.classList.contains("is-shown") ||
                  (a.classList.remove("is-loading"),
                  a.classList.add("is-preload"),
                  r.classList.remove("is-loading"),
                  r.classList.remove("is-loaded"),
                  r.classList.add("is-preload"));
            },
            n = 0;
          n < t.length;
          n++
        )
          e();
      }, s);
    e.addEventListener("load", function () {
      var e = t.querySelectorAll(".index-story");
      if (e)
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          c.observe(o), l.observe(o);
        }
    });
    var d = "highlight-item",
      u = "highlight-details",
      v = "highlight-button",
      h = "highlight-modal",
      f = t.querySelector(".".concat(h)),
      y = t.querySelectorAll(".".concat(d));
    if (y && y.length)
      for (var p = 0; p < y.length; p++) {
        var m = y[p],
          b,
          w;
        g(
          m.querySelector(".".concat(v)),
          f,
          m.querySelector(".".concat(u)).innerHTML,
          null,
          null
        );
      }
  }
  function w(t) {
    var e, n, o, a;
    document.documentElement.classList.contains("ua-Pointer")
      ? t.addEventListener("mousemove", function (o) {
          var a = t.querySelectorAll(".cardlist-item");
          if (a && a.length) {
            var i = t.getBoundingClientRect();
            (e = o.clientX - i.left), (n = o.clientY - i.top);
            var r = o.clientX,
              s = o.clientY;
            a.forEach(function (t) {
              var e = t.getBoundingClientRect(),
                n = r - e.left,
                o = s - e.top;
              t.style.setProperty("--cursor-x", n),
                t.style.setProperty("--cursor-y", o);
            });
          }
        })
      : (t.addEventListener("touchstart", function (o) {
          var a = o.touches[0];
          t.classList.add("is-touching");
          var i = t.querySelectorAll(".cardlist-item");
          if (i && i.length) {
            var r = t.getBoundingClientRect();
            (e = a.clientX - r.left), (n = a.clientY - r.top);
            var s = a.clientX,
              c = a.clientY;
            i.forEach(function (t) {
              var e = t.getBoundingClientRect(),
                n = s - e.left,
                o = c - e.top;
              t.style.setProperty("--cursor-x", n),
                t.style.setProperty("--cursor-y", o);
            });
          }
        }),
        t.addEventListener("touchmove", function (o) {
          var a = o.touches[0],
            i = t.querySelectorAll(".cardlist-item");
          if (i && i.length) {
            var r = t.getBoundingClientRect();
            (e = a.clientX - r.left), (n = a.clientY - r.top);
            var s = a.clientX,
              c = a.clientY;
            i.forEach(function (t) {
              var e = t.getBoundingClientRect(),
                n = s - e.left,
                o = c - e.top;
              t.style.setProperty("--cursor-x", n),
                t.style.setProperty("--cursor-y", o);
            });
          }
        }),
        t.addEventListener("touchend", function () {
          t.classList.remove("is-touching");
        }),
        t.querySelectorAll(".cardlist-item").forEach(function (t) {
          t.addEventListener("touchstart", function () {
            t.classList.add("is-touching");
          }),
            t.addEventListener("touchend", function () {
              t.classList.remove("is-touching");
            });
        }));
  }
  function k(t) {
    var e = window,
      n = t.name,
      o = t.chain,
      a = t.network,
      i = t.address,
      r = t.label,
      s = "/data/staking/logo-".concat(o, ".png?v=").concat(e.ENV.verTag),
      c = t.urlStake,
      l = t.urlNode,
      d = t.apr,
      u = t.aprStake,
      v = t.power,
      h = t.commission,
      f = t.staked,
      y = t.symbol,
      p = t.voteNum,
      g = t.isStakable,
      m = t.isActive,
      b = t.isGovernance,
      w = e.I18N.staking.ecosys,
      k = e.I18N.lang;
    return '\n\t<li class="staking-ecosys-item cardlist-item" id="'
      .concat(
        i,
        '">\n\t\t<div class="staking-ecosys-summary layout-modal-open">\n\t\t\t<div class="staking-ecosys-info">\n\t\t\t\t<figure class="staking-ecosys-hero">\n\t\t\t\t\t<img class="staking-ecosys-logo" src="'
      )
      .concat(s, '" alt="')
      .concat(n, '">\n\t\t\t\t\t')
      .concat(
        r ? '<p class="staking-ecosys-label">'.concat(r, "</p>") : "",
        '\n\t\t\t\t</figure>\n\t\t\t\t<h3 class="staking-ecosys-name">'
      )
      .concat(n, '</h3>\n\t\t\t\t<button class="staking-ecosys-cta button-')
      .concat(g ? "pill" : "text", '-secondary-md">')
      .concat(
        g ? w.cta_stake : w.cta_view,
        '</button>\n\t\t\t</div>\n\t\t\t<div class="staking-ecosys-data">\n\t\t\t\t<div class="staking-ecosys-data-pair staking-ecosys-data-delegation">\n\t\t\t\t\t<h4 class="staking-ecosys-data-key" title="'
      )
      .concat(w.delegation_percentage, '">')
      .concat(
        w.delegation_percentage,
        '</h4>\n\t\t\t\t\t<p class="staking-ecosys-data-value" title="'
      )
      .concat(f, " ")
      .concat(y, '">')
      .concat(
        v,
        '%</p>\n\t\t\t\t</div>\n\t\t\t\t<div class="staking-ecosys-data-pair staking-ecosys-data-governance'
      )
      .concat(
        b ? "" : "--np",
        '">\n\t\t\t\t\t<h4 class="staking-ecosys-data-key" title="Governance">'
      )
      .concat(
        w.governance,
        '</h4>\n\t\t\t\t\t<p class="staking-ecosys-data-value" title="'
      )
      .concat(b ? w.governance_participate : w.governance_notparticipate, '">')
      .concat(
        b ? w.governance_participate : w.governance_np,
        '</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="staking-ecosys-details">\n\t\t\t<article class="staking-ecosys-details-wrap">\n\t\t\t\t<header class="staking-ecosys-details-header">\n\t\t\t\t\t<figure class="staking-ecosys-details-hero">\n\t\t\t\t\t\t<img class="staking-ecosys-details-logo" src="'
      )
      .concat(s, '" alt="')
      .concat(n, '">\n\t\t\t\t\t\t')
      .concat(
        r ? '<p class="staking-ecosys-details-label">'.concat(r, "</p>") : "",
        '\n\t\t\t\t\t</figure>\n\t\t\t\t\t<a class="staking-ecosys-details-cta button-'
      )
      .concat(
        g ? "pill" : "text",
        '-secondary-md" target="_blank" rel="noopener external nofollow noreferrer" href="'
      )
      .concat(g ? c : l, '">')
      .concat(
        g ? w.cta_stake : w.cta_view,
        '</a>\n\t\t\t\t</header>\n\t\t\t\t<div class="staking-ecosys-details-body">\n\t\t\t\t\t<div class="staking-ecosys-details-name">\n\t\t\t\t\t\t<h3>'
      )
      .concat(n, '</h3><span class="staking-ecosys-details-tag--')
      .concat(m ? "safe" : "error", '">')
      .concat(
        m ? w.status_active : w.status_inactive,
        '</span><span class="staking-ecosys-details-tag">'
      )
      .concat(
        a,
        '</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class="kvlist">\n\t\t\t\t\t\t<li class="kvlist-pair">\n\t\t\t\t\t\t\t<h5 class="kvlist-key">'
      )
      .concat(
        w.address,
        '</h5>\n\t\t\t\t\t\t\t<p class="kvlist-value"><code><a target="_blank" rel="noopener external nofollow noreferrer" href="'
      )
      .concat(l, '">')
      .concat(
        i,
        '</a></code></p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class="kvlist-pair">\n\t\t\t\t\t\t\t<h5 class="kvlist-key">'
      )
      .concat(w.network_apr, '</h5>\n\t\t\t\t\t\t\t<p class="kvlist-value">')
      .concat(d, "%</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t")
      .concat(
        g
          ? '\n\t\t\t\t\t\t\t<li class="kvlist-pair">\n\t\t\t\t\t\t\t\t<h5 class="kvlist-key">'
              .concat(
                w.commission,
                '</h5>\n\t\t\t\t\t\t\t\t<p class="kvlist-value">'
              )
              .concat(h, "%</p>\n\t\t\t\t\t\t\t</li>")
          : "",
        "\n\t\t\t\t\t\t"
      )
      .concat(
        g
          ? '\n\t\t\t\t\t\t\t<li class="kvlist-pair">\n\t\t\t\t\t\t\t\t<h5 class="kvlist-key">'
              .concat(
                w.staking_apr,
                '</h5>\n\t\t\t\t\t\t\t\t<p class="kvlist-value">'
              )
              .concat(u, "%</p>\n\t\t\t\t\t\t\t</li>")
          : "",
        '\n\t\t\t\t\t\t<li class="kvlist-pair">\n\t\t\t\t\t\t\t<h5 class="kvlist-key">'
      )
      .concat(w.total_staked, '</h5>\n\t\t\t\t\t\t\t<p class="kvlist-value">')
      .concat(f, " ")
      .concat(
        y,
        '</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class="kvlist-pair">\n\t\t\t\t\t\t\t<h5 class="kvlist-key">'
      )
      .concat(w.governance, '</h5>\n\t\t\t\t\t\t\t<p class="kvlist-value--')
      .concat(b ? "safe" : "neutral", '">')
      .concat(
        b ? w.governance_participate : w.governance_notparticipate,
        '</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class="kvlist-pair">\n\t\t\t\t\t\t\t<h5 class="kvlist-key">'
      )
      .concat(w.voting_power, '</h5>\n\t\t\t\t\t\t\t<p class="kvlist-value--')
      .concat(b ? "safe" : "neutral", '">')
      .concat(v, "%</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t")
      .concat(
        b
          ? '\n\t\t\t\t\t\t\t<li class="kvlist-pair">\n\t\t\t\t\t\t\t\t<h5 class="kvlist-key">'
              .concat(
                w.voted_label,
                '</h5>\n\t\t\t\t\t\t\t\t<p\n\t\t\t\t\t\t\t\t\tclass="kvlist-value--'
              )
              .concat(b ? "safe" : "neutral", '"\n\t\t\t\t\t\t\t\t>')
              .concat(
                p > 0
                  ? '<a class="staking-ecosys-details-votedproposals button-text-secondary-md" href="'
                      .concat(
                        "en" !== k ? "/" + k : "",
                        "/staking/governance/?chain="
                      )
                      .concat(o, '&vote=true&anchor=history" target="_blank">')
                      .concat(p, " ")
                      .concat(
                        p > 1 ? w.voted_unit.other : w.voted_unit.one,
                        "</a>"
                      )
                  : p,
                "</p>\n\t\t\t\t\t\t\t</li>"
              )
          : "",
        "\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</article>\n\t\t</div>\n\t</li>\n\t"
      );
  }
  function L(t) {
    var e = document,
      n = "";
    t.forEach(function (t) {
      var e = "PGS",
        o =
          t.staking.slice(0, -1 * t.precision) +
          "." +
          t.staking.slice(-1 * t.precision),
        a = {
          name: t.name,
          chain: t.network,
          network: t.network_type,
          address: t.node_address,
          label: t.type === e ? e : null,
          urlStake: t.staking_url,
          urlNode: t.node_url,
          apr: t.network_apr.toFixed(2),
          aprStake: t.staking_apr.toFixed(2),
          power: t.voting_power.toFixed(2),
          commission: t.commission.toFixed(2),
          staked: parseFloat(o).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }),
          symbol: t.symbol,
          voteNum: t.voted_count,
          isStakable: t.support_staking,
          isActive: t.status,
          isGovernance: t.support_gov,
        };
      n += k(a);
    });
    var o = "staking-ecosys-list",
      a;
    e.querySelector(".".concat(o)).innerHTML = n;
  }
  function S(t) {
    return t && DataView.prototype.isPrototypeOf(t);
  }
  function E(t) {
    if (
      ("string" != typeof t && (t = String(t)),
      /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t)
    )
      throw new TypeError(
        'Invalid character in header field name: "' + t + '"'
      );
    return t.toLowerCase();
  }
  function T(t) {
    return "string" != typeof t && (t = String(t)), t;
  }
  function _(t) {
    var e = {
      next: function e() {
        var n = t.shift();
        return { done: void 0 === n, value: n };
      },
    };
    return (
      $t.iterable &&
        (e[Symbol.iterator] = function () {
          return e;
        }),
      e
    );
  }
  function x(t) {
    (this.map = {}),
      t instanceof x
        ? t.forEach(function (t, e) {
            this.append(e, t);
          }, this)
        : Array.isArray(t)
        ? t.forEach(function (t) {
            this.append(t[0], t[1]);
          }, this)
        : t &&
          Object.getOwnPropertyNames(t).forEach(function (e) {
            this.append(e, t[e]);
          }, this);
  }
  function A(t) {
    if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
    t.bodyUsed = !0;
  }
  function q(t) {
    return new Promise(function (e, n) {
      (t.onload = function () {
        e(t.result);
      }),
        (t.onerror = function () {
          n(t.error);
        });
    });
  }
  function P(t) {
    var e = new FileReader(),
      n = q(e);
    return e.readAsArrayBuffer(t), n;
  }
  function O(t) {
    var e = new FileReader(),
      n = q(e);
    return e.readAsText(t), n;
  }
  function j(t) {
    for (
      var e = new Uint8Array(t), n = new Array(e.length), o = 0;
      o < e.length;
      o++
    )
      n[o] = String.fromCharCode(e[o]);
    return n.join("");
  }
  function B(t) {
    if (t.slice) return t.slice(0);
    var e = new Uint8Array(t.byteLength);
    return e.set(new Uint8Array(t)), e.buffer;
  }
  function D() {
    return (
      (this.bodyUsed = !1),
      (this._initBody = function (t) {
        (this.bodyUsed = this.bodyUsed),
          (this._bodyInit = t),
          t
            ? "string" == typeof t
              ? (this._bodyText = t)
              : $t.blob && Blob.prototype.isPrototypeOf(t)
              ? (this._bodyBlob = t)
              : $t.formData && FormData.prototype.isPrototypeOf(t)
              ? (this._bodyFormData = t)
              : $t.searchParams && URLSearchParams.prototype.isPrototypeOf(t)
              ? (this._bodyText = t.toString())
              : $t.arrayBuffer && $t.blob && S(t)
              ? ((this._bodyArrayBuffer = B(t.buffer)),
                (this._bodyInit = new Blob([this._bodyArrayBuffer])))
              : $t.arrayBuffer &&
                (ArrayBuffer.prototype.isPrototypeOf(t) || Jt(t))
              ? (this._bodyArrayBuffer = B(t))
              : (this._bodyText = t = Object.prototype.toString.call(t))
            : (this._bodyText = ""),
          this.headers.get("content-type") ||
            ("string" == typeof t
              ? this.headers.set("content-type", "text/plain;charset=UTF-8")
              : this._bodyBlob && this._bodyBlob.type
              ? this.headers.set("content-type", this._bodyBlob.type)
              : $t.searchParams &&
                URLSearchParams.prototype.isPrototypeOf(t) &&
                this.headers.set(
                  "content-type",
                  "application/x-www-form-urlencoded;charset=UTF-8"
                ));
      }),
      $t.blob &&
        ((this.blob = function () {
          var t = A(this);
          if (t) return t;
          if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }),
        (this.arrayBuffer = function () {
          if (this._bodyArrayBuffer) {
            var t = A(this);
            return (
              t ||
              (ArrayBuffer.isView(this._bodyArrayBuffer)
                ? Promise.resolve(
                    this._bodyArrayBuffer.buffer.slice(
                      this._bodyArrayBuffer.byteOffset,
                      this._bodyArrayBuffer.byteOffset +
                        this._bodyArrayBuffer.byteLength
                    )
                  )
                : Promise.resolve(this._bodyArrayBuffer))
            );
          }
          return this.blob().then(P);
        })),
      (this.text = function () {
        var t = A(this);
        if (t) return t;
        if (this._bodyBlob) return O(this._bodyBlob);
        if (this._bodyArrayBuffer)
          return Promise.resolve(j(this._bodyArrayBuffer));
        if (this._bodyFormData)
          throw new Error("could not read FormData body as text");
        return Promise.resolve(this._bodyText);
      }),
      $t.formData &&
        (this.formData = function () {
          return this.text().then(R);
        }),
      (this.json = function () {
        return this.text().then(JSON.parse);
      }),
      this
    );
  }
  function U(t) {
    var e = t.toUpperCase();
    return Kt.indexOf(e) > -1 ? e : t;
  }
  function I(t, e) {
    if (!(this instanceof I))
      throw new TypeError(
        'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
      );
    var n = (e = e || {}).body;
    if (t instanceof I) {
      if (t.bodyUsed) throw new TypeError("Already read");
      (this.url = t.url),
        (this.credentials = t.credentials),
        e.headers || (this.headers = new x(t.headers)),
        (this.method = t.method),
        (this.mode = t.mode),
        (this.signal = t.signal),
        n || null == t._bodyInit || ((n = t._bodyInit), (t.bodyUsed = !0));
    } else this.url = String(t);
    if (
      ((this.credentials = e.credentials || this.credentials || "same-origin"),
      (!e.headers && this.headers) || (this.headers = new x(e.headers)),
      (this.method = U(e.method || this.method || "GET")),
      (this.mode = e.mode || this.mode || null),
      (this.signal = e.signal || this.signal),
      (this.referrer = null),
      ("GET" === this.method || "HEAD" === this.method) && n)
    )
      throw new TypeError("Body not allowed for GET or HEAD requests");
    if (
      (this._initBody(n),
      !(
        ("GET" !== this.method && "HEAD" !== this.method) ||
        ("no-store" !== e.cache && "no-cache" !== e.cache)
      ))
    ) {
      var o = /([?&])_=[^&]*/;
      if (o.test(this.url))
        this.url = this.url.replace(o, "$1_=" + new Date().getTime());
      else {
        var a = /\?/;
        this.url +=
          (a.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
      }
    }
  }
  function R(t) {
    var e = new FormData();
    return (
      t
        .trim()
        .split("&")
        .forEach(function (t) {
          if (t) {
            var n = t.split("="),
              o = n.shift().replace(/\+/g, " "),
              a = n.join("=").replace(/\+/g, " ");
            e.append(decodeURIComponent(o), decodeURIComponent(a));
          }
        }),
      e
    );
  }
  function F(t) {
    var e = new x(),
      n;
    return (
      t
        .replace(/\r?\n[\t ]+/g, " ")
        .split("\r")
        .map(function (t) {
          return 0 === t.indexOf("\n") ? t.substr(1, t.length) : t;
        })
        .forEach(function (t) {
          var n = t.split(":"),
            o = n.shift().trim();
          if (o) {
            var a = n.join(":").trim();
            e.append(o, a);
          }
        }),
      e
    );
  }
  function H(t, e) {
    if (!(this instanceof H))
      throw new TypeError(
        'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
      );
    e || (e = {}),
      (this.type = "default"),
      (this.status = void 0 === e.status ? 200 : e.status),
      (this.ok = this.status >= 200 && this.status < 300),
      (this.statusText = void 0 === e.statusText ? "" : "" + e.statusText),
      (this.headers = new x(e.headers)),
      (this.url = e.url || ""),
      this._initBody(t);
  }
  function M(t, n) {
    return new Promise(function (o, a) {
      function i() {
        c.abort();
      }
      function r(t) {
        try {
          return "" === t && Wt.location.href ? Wt.location.href : t;
        } catch (e) {
          return t;
        }
      }
      var s = new I(t, n);
      if (s.signal && s.signal.aborted)
        return a(new ee("Aborted", "AbortError"));
      var c = new XMLHttpRequest();
      (c.onload = function () {
        var t = {
          status: c.status,
          statusText: c.statusText,
          headers: F(c.getAllResponseHeaders() || ""),
        };
        t.url =
          "responseURL" in c ? c.responseURL : t.headers.get("X-Request-URL");
        var e = "response" in c ? c.response : c.responseText;
        setTimeout(function () {
          o(new H(e, t));
        }, 0);
      }),
        (c.onerror = function () {
          setTimeout(function () {
            a(new TypeError("Network request failed"));
          }, 0);
        }),
        (c.ontimeout = function () {
          setTimeout(function () {
            a(new TypeError("Network request failed"));
          }, 0);
        }),
        (c.onabort = function () {
          setTimeout(function () {
            a(new ee("Aborted", "AbortError"));
          }, 0);
        }),
        c.open(s.method, r(s.url), !0),
        "include" === s.credentials
          ? (c.withCredentials = !0)
          : "omit" === s.credentials && (c.withCredentials = !1),
        "responseType" in c &&
          ($t.blob
            ? (c.responseType = "blob")
            : $t.arrayBuffer &&
              s.headers.get("Content-Type") &&
              -1 !==
                s.headers
                  .get("Content-Type")
                  .indexOf("application/octet-stream") &&
              (c.responseType = "arraybuffer")),
        !n || "object" !== e(n.headers) || n.headers instanceof x
          ? s.headers.forEach(function (t, e) {
              c.setRequestHeader(e, t);
            })
          : Object.getOwnPropertyNames(n.headers).forEach(function (t) {
              c.setRequestHeader(t, T(n.headers[t]));
            }),
        s.signal &&
          (s.signal.addEventListener("abort", i),
          (c.onreadystatechange = function () {
            4 === c.readyState && s.signal.removeEventListener("abort", i);
          })),
        c.send(void 0 === s._bodyInit ? null : s._bodyInit);
    });
  }
  function C() {
    var t = document,
      e,
      n = window.ENV,
      o = t.location.host === n.host.prod ? n.apiHost.prod : n.apiHost.test,
      a = n.fetchOpt.GET,
      i = "staking-ecosys-list",
      r = "staking-ecosys-item",
      s = "staking-ecosys-details",
      c = t.querySelector(".".concat(i)),
      l = "staking-modal",
      d = t.querySelector(".".concat(l));
    c.addEventListener("click", function (t) {
      var e = t.target.closest(".".concat(r));
      if (e && c.contains(e)) {
        var n = e.querySelector(".".concat(s)).innerHTML;
        m(d, n, null, null);
      }
    });
    var u = "https://".concat(o, "/validators/");
    fetch(u, a)
      .then(function (t) {
        return t.json();
      })
      .then(function (e) {
        if (200 === e.code) {
          L((e = e.data));
          var n = "staking-ecosys-list",
            o;
          w(t.querySelector(".".concat(n)));
        }
      });
  }
  function N(t, e) {
    var n = window.ENV.verTag,
      o = t.name,
      a = t.chain,
      i = t.network,
      r = "/data/staking/logo-".concat(a, ".png?v=").concat(n),
      s = t.title,
      c = t.number,
      l = t.endDate,
      d = t.startTime,
      u = t.endTime,
      v = t.urlPrpsl,
      h = {
        yes: t.yes,
        no: t.no,
        nowithveto: t.nowithveto,
        abstain: t.abstain,
      },
      f = window.I18N.governance.ongoing;
    return '\n\t<li class="governance-ongoing-item cardlist-item" tabindex="0" id="'
      .concat(a)
      .concat(
        c,
        '">\n\t\t<div class="governance-ongoing-summary layout-modal-open">\n\t\t\t<div class="governance-ongoing-info">\n\t\t\t\t<img\n\t\t\t\t\tclass="governance-ongoing-logo"\n\t\t\t\t\tsrc="'
      )
      .concat(r, '"\n\t\t\t\t\talt="')
      .concat(
        o,
        '"\n\t\t\t\t>\n\t\t\t\t<div class="governance-ongoing-text">\n\t\t\t\t\t<h3 class="governance-ongoing-name">'
      )
      .concat(o, " #")
      .concat(c, '</h3>\n\t\t\t\t\t<p class="governance-ongoing-ending">')
      .concat(e ? f.ending_on : f.ended_on, " ")
      .concat(
        l,
        '</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p class="governance-ongoing-title">'
      )
      .concat(
        s,
        '</p>\n\t\t</div>\n\t\t<div class="governance-ongoing-details">\n\t\t\t<article class="governance-ongoing-details-wrap">\n\t\t\t\t<header class="governance-ongoing-details-header">\n\t\t\t\t\t<img\n\t\t\t\t\t\tclass="governance-ongoing-details-logo"\n\t\t\t\t\t\tsrc="'
      )
      .concat(r, '"\n\t\t\t\t\t\talt="')
      .concat(
        o,
        '"\n\t\t\t\t\t>\n\t\t\t\t\t<a\n\t\t\t\t\t\tclass="governance-ongoing-details-cta button-text-secondary-md"\n\t\t\t\t\t\ttarget="_blank"\n\t\t\t\t\t\trel="noopener external nofollow noreferrer"\n\t\t\t\t\t\thref="'
      )
      .concat(v, '"\n\t\t\t\t\t>')
      .concat(
        f.cta,
        '</a>\n\t\t\t\t</header>\n\t\t\t\t<div class="governance-ongoing-details-body">\n\t\t\t\t\t<div class="governance-ongoing-details-name">\n\t\t\t\t\t\t<h3>'
      )
      .concat(o, " #")
      .concat(
        c,
        '</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class="kvlist">\n\t\t\t\t\t\t<li class="kvlist-pair">\n\t\t\t\t\t\t\t<h5 class="kvlist-key">'
      )
      .concat(f.title, '</h5>\n\t\t\t\t\t\t\t<p class="kvlist-value">')
      .concat(
        s,
        '</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class="kvlist-pair">\n\t\t\t\t\t\t\t<h5 class="kvlist-key">'
      )
      .concat(f.network, '</h5>\n\t\t\t\t\t\t\t<p class="kvlist-value">')
      .concat(
        i,
        '</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class="kvlist-pair">\n\t\t\t\t\t\t\t<h5 class="kvlist-key">'
      )
      .concat(f.voting_start, '</h5>\n\t\t\t\t\t\t\t<p class="kvlist-value">')
      .concat(
        d,
        '</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class="kvlist-pair">\n\t\t\t\t\t\t\t<h5 class="kvlist-key">'
      )
      .concat(f.voting_end, '</h5>\n\t\t\t\t\t\t\t<p class="kvlist-value">')
      .concat(
        u,
        '</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class="kvlist-pair">\n\t\t\t\t\t\t\t<h5 class="kvlist-key">'
      )
      .concat(
        f.current_status,
        '</h5>\n\t\t\t\t\t\t\t<ul class="governance-ongoing-details-tally">\n\t\t\t\t\t\t\t\t<li class="governance-ongoing-details-tally-item governance-ongoing-tally-item--yes">\n\t\t\t\t\t\t\t\t\t<h6>'
      )
      .concat(f.vote.yes, "</h6>\n\t\t\t\t\t\t\t\t\t<p>")
      .concat(
        h.yes,
        '%</p>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="governance-ongoing-details-tally-item governance-ongoing-tally-item--no">\n\t\t\t\t\t\t\t\t\t<h6>'
      )
      .concat(f.vote.no, "</h6>\n\t\t\t\t\t\t\t\t\t<p>")
      .concat(
        h.no,
        '%</p>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="governance-ongoing-details-tally-item governance-ongoing-tally-item--nowithveto">\n\t\t\t\t\t\t\t\t\t<h6>'
      )
      .concat(f.vote.veto, "</h6>\n\t\t\t\t\t\t\t\t\t<p>")
      .concat(
        h.nowithveto,
        '%</p>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="governance-ongoing-details-tally-item governance-ongoing-tally-item--abstain">\n\t\t\t\t\t\t\t\t\t<h6>'
      )
      .concat(f.vote.abstain, "</h6>\n\t\t\t\t\t\t\t\t\t<p>")
      .concat(
        h.abstain,
        "%</p>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</article>\n\t\t</div>\n\t</li>\n\t"
      );
  }
  function G(t, e) {
    var n = document,
      o = "";
    t.forEach(function (t) {
      var n = Intl.DateTimeFormat().resolvedOptions().timeZone,
        a = new Date().getTimezoneOffset() / 60,
        i = a > 0 ? "".concat(-1 * a) : "+".concat(-1 * a),
        r = new Date(t.voting_start_time)
          .toLocaleDateString("zh", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            timeZone: n,
          })
          .split("/")
          .join("-"),
        s = new Date(t.voting_start_time).toLocaleTimeString("zh", {
          hourCycle: "h23",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: n,
        }),
        c = new Date(t.voting_end_time)
          .toLocaleDateString("zh", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            timeZone: n,
          })
          .split("/")
          .join("-"),
        l = new Date(t.voting_end_time).toLocaleTimeString("zh", {
          hourCycle: "h23",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: n,
        }),
        d = {
          name: t.name,
          chain: t.network,
          network: t.network_type,
          title: t.title,
          number: t.proposal_id,
          endDate: c,
          startTime: "".concat(r, " ").concat(s, " UTC").concat(i),
          endTime: "".concat(c, " ").concat(l, " UTC").concat(i),
          urlPrpsl: t.proposal_url,
          yes: t.yes.toFixed(2),
          no: t.no.toFixed(2),
          nowithveto: t.no_with_veto.toFixed(2),
          abstain: t.abstain.toFixed(2),
        };
      o += N(d, e);
    });
    var a = "governance-ongoing-list",
      i;
    n.querySelector(".".concat(a)).innerHTML = o;
    var r = new Proxy(new URLSearchParams(window.location.search), {
      get: function t(e, n) {
        return e.get(n);
      },
    });
    if (r.anchor) {
      var s = n.querySelector("#".concat(r.anchor));
      if (s) {
        var c = 80,
          l = s.getBoundingClientRect().top + window.pageYOffset - c;
        window.scrollTo({ top: l, behavior: "smooth" });
      }
    }
  }
  function z(t) {
    var e = [];
    return (
      t.forEach(function (t) {
        var n = Intl.DateTimeFormat().resolvedOptions().timeZone,
          o = new Date().getTimezoneOffset() / 60,
          a = o > 0 ? "".concat(-1 * o) : "+".concat(-1 * o),
          i = "";
        t.voting_end_time &&
          (i = new Date(t.voting_end_time)
            .toLocaleDateString("zh", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              timeZone: n,
            })
            .split("/")
            .join("-"));
        var r = "",
          s = "";
        t.vote_timestamp &&
          ((r = new Date(t.vote_timestamp)
            .toLocaleDateString("zh", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              timeZone: n,
            })
            .split("/")
            .join("-")),
          (s = new Date(t.vote_timestamp).toLocaleTimeString("zh", {
            hourCycle: "h23",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZone: n,
          })));
        var c = "N/A";
        t.comment && t.comment.length && (c = t.comment.replace(/\n/g, "<br>"));
        var l = {
          name: t.name,
          chain: t.network,
          network: t.network_type,
          title: t.title,
          number: t.proposal_id,
          endDate: i,
          urlPrpsl: t.proposal_url,
          voteDate: r,
          voteTime: "".concat(r, " ").concat(s, " UTC").concat(a),
          voteOption: t.vote_type,
          voteTx: t.vote_tx_hash,
          urlVoteTx: t.vote_tx_url,
          comment: c,
        };
        e.push(l);
      }),
      e
    );
  }
  function V(t) {
    var e = window.ENV.verTag,
      n = window.I18N.governance.history,
      o = t.name,
      a = t.chain,
      i = t.network,
      r = "/data/staking/logo-".concat(a, ".png?v=").concat(e),
      s = t.title,
      c = t.number,
      l = t.endDate,
      d = t.urlPrpsl,
      u = t.voteDate,
      v = t.voteTime,
      h = t.voteOption,
      f = [
        n.vote.not_attended,
        n.vote.yes,
        n.vote.no,
        n.vote.veto,
        n.vote.abstain,
      ],
      y = ["notattended", "yes", "no", "nowithveto", "abstain"],
      p = 0 !== h,
      g = t.voteTx,
      m = t.urlVoteTx,
      b = t.comment;
    return '\n\t<div class="table-row" tabindex="0">\n\t\t<div class="table-cell">'
      .concat(p ? u : l, '</div>\n\t\t<div class="table-cell">')
      .concat(o, " #")
      .concat(c, '</div>\n\t\t<div class="table-cell governance-history-vote--')
      .concat(y[h], '">')
      .concat(f[h], '</div>\n\t\t<div class="table-cell"><p>')
      .concat(
        b,
        '</p></div>\n\t\t<div class="table-cell"><i></i></div>\n\t\t<div class="governance-history-details">\n\t\t\t<article class="governance-history-details-wrap">\n\t\t\t\t<header class="governance-history-details-header">\n\t\t\t\t\t<img\n\t\t\t\t\t\tclass="governance-history-details-logo"\n\t\t\t\t\t\tsrc="'
      )
      .concat(r, '"\n\t\t\t\t\t\talt="')
      .concat(
        o,
        '"\n\t\t\t\t\t>\n\t\t\t\t\t<a\n\t\t\t\t\t\tclass="governance-history-details-cta button-text-secondary-md"\n\t\t\t\t\t\ttarget="_blank"\n\t\t\t\t\t\trel="noopener external nofollow noreferrer"\n\t\t\t\t\t\thref="'
      )
      .concat(d, '"\n\t\t\t\t\t>')
      .concat(
        n.cta,
        '</a>\n\t\t\t\t</header>\n\t\t\t\t<div class="governance-history-details-body">\n\t\t\t\t\t<div class="governance-history-details-name">\n\t\t\t\t\t\t<h3>'
      )
      .concat(o, " #")
      .concat(
        c,
        '</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class="kvlist">\n\t\t\t\t\t\t<li class="kvlist-pair">\n\t\t\t\t\t\t\t<h5 class="kvlist-key">'
      )
      .concat(n.title, '</h5>\n\t\t\t\t\t\t\t<p class="kvlist-value">')
      .concat(
        s,
        '</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class="kvlist-pair">\n\t\t\t\t\t\t\t<h5 class="kvlist-key">'
      )
      .concat(n.network, '</h5>\n\t\t\t\t\t\t\t<p class="kvlist-value">')
      .concat(i, "</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t")
      .concat(
        p
          ? '\n\t\t\t\t\t\t\t<li class="kvlist-pair">\n\t\t\t\t\t\t\t\t<h5 class="kvlist-key">'
              .concat(
                n.voting_time,
                '</h5>\n\t\t\t\t\t\t\t\t<p class="kvlist-value">'
              )
              .concat(v, "</p>\n\t\t\t\t\t\t\t</li>")
          : "",
        '\n\t\t\t\t\t\t<li class="kvlist-pair">\n\t\t\t\t\t\t\t<h5 class="kvlist-key">'
      )
      .concat(
        n.vote_label,
        '</h5>\n\t\t\t\t\t\t\t<p class="kvlist-value governance-history-vote--'
      )
      .concat(y[h], '">')
      .concat(f[h], "</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t")
      .concat(
        p
          ? '\n\t\t\t\t\t\t\t<li class="kvlist-pair">\n\t\t\t\t\t\t\t\t<h5 class="kvlist-key">'
              .concat(
                n.tx,
                '</h5>\n\t\t\t\t\t\t\t\t<p class="kvlist-value"><code><a\n\t\t\t\t\t\t\t\t\ttarget="_blank"\n\t\t\t\t\t\t\t\t\trel="noopener external nofollow noreferrer"\n\t\t\t\t\t\t\t\t\thref="'
              )
              .concat(m, '"\n\t\t\t\t\t\t\t\t>')
              .concat(g, "</a></code></p>\n\t\t\t\t\t\t\t</li>")
          : "",
        '\n\t\t\t\t\t\t<li class="kvlist-pair">\n\t\t\t\t\t\t\t<h5 class="kvlist-key">'
      )
      .concat(
        n.comment,
        '</h5>\n\t\t\t\t\t\t\t<p class="kvlist-value governance-history-details-comment">'
      )
      .concat(
        b,
        "</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</article>\n\t\t</div>\n\t</div>\n\t"
      );
  }
  function Y(t) {
    var e = document,
      n = window.I18N.governance.history,
      o = "governance-history-table",
      a = "governance-history-pager",
      i = "governance-history-loadmore",
      r = "table-body",
      s = "is-active",
      c = e.querySelector(".".concat(o, " .").concat(r)),
      l = e.querySelector(".".concat(a)),
      d = l.innerHTML;
    if (((l.innerHTML = d), l.classList.remove(s), 0 !== t.length)) {
      var u = 24,
        v = Math.ceil(t.length / u),
        h = 1,
        f = v > h ? u : t.length,
        y;
      h === v || l.classList.add(s);
      for (var p = "", g = 0; g < f; g++) p += V(t[g]);
      (c.innerHTML = p),
        (t = t.splice(f)),
        e.querySelector(".".concat(i)).addEventListener("click", function () {
          if (!(++h > v)) {
            h === v && l.classList.remove(s), (f = v > h ? u : t.length);
            for (var e = "", n = 0; n < f; n++) e += V(t[n]);
            c.insertAdjacentHTML("beforeend", e), (t = t.splice(f));
          }
        });
    } else
      c.innerHTML =
        '\n\t\t\t<div class="governance-history-table-empty"><p>'.concat(
          n.no_proposals,
          "</p></div>\n\t\t"
        );
  }
  function X(t, e) {
    var n = document,
      o = "filter-button",
      a = "filter-optionlist-item",
      i = "filter-optionlist",
      r = "",
      s;
    t.forEach(function (t) {
      r += '<li class="filter-optionlist-item" tabindex="0" data-value="'
        .concat(t.value, '">')
        .concat(t.name, "</li>");
    }),
      n.querySelector(".".concat(i)).insertAdjacentHTML("beforeend", r);
    var c = n.querySelector(".".concat(o)),
      l = n.querySelector(".".concat(a, '[data-value="').concat(e.chain, '"]'));
    c.querySelector("span").textContent = l.textContent;
  }
  function Z() {
    function t(t) {
      var e = t.target.closest(".".concat(f));
      if (e && p.contains(e)) {
        var n = e.querySelector(".".concat(y)).innerHTML;
        m(v, n, null, null);
      }
    }
    function e(t, e) {
      var n = "subnav-tab",
        o = "is-active",
        i = t.querySelectorAll(".".concat(n)),
        c = r.querySelector(
          ".".concat(n, '[data-value="').concat(e.vote, '"]')
        );
      c.classList.add(o), c.setAttribute("tabindex", "-1");
      var u = a(i),
        v;
      try {
        var h = function a() {
          var i = v.value;
          i.addEventListener("click", function () {
            var a = t.querySelector(".".concat(n, ".").concat(o));
            a.classList.remove(o),
              a.removeAttribute("tabindex"),
              i.classList.add(o),
              i.setAttribute("tabindex", "-1");
            var r = i.getAttribute("data-value");
            if (r !== e.vote) {
              e.vote = r;
              var c = { limit: 0 };
              "all" !== e.chain && (c.network = e.chain),
                "all" !== e.vote && (c.is_voted = e.vote);
              var u =
                "https://".concat(l, "/history/?") + new URLSearchParams(c);
              fetch(u, d)
                .then(function (t) {
                  return t.json();
                })
                .then(function (t) {
                  200 === t.code && Y(z((t = t.data)));
                });
              var v = { chain: e.chain, vote: e.vote };
              s.history.replaceState &&
                s.history.replaceState(
                  null,
                  null,
                  "?" + new URLSearchParams(v)
                );
            }
          });
        };
        for (u.s(); !(v = u.n()).done; ) h();
      } catch (t) {
        u.e(t);
      } finally {
        u.f();
      }
    }
    function n(t) {
      for (var e = t.target; e && !e.matches(".".concat(k, ", main, html")); )
        e = e.parentNode;
      if ((e && !e.matches(".".concat(k))) || !e) {
        for (var o = 0; o < _.length; o++) _[o].classList.remove(T);
        s.removeEventListener("click", n);
      }
    }
    function o(t, e) {
      var o = t.querySelector(".".concat(L));
      o.addEventListener("click", function () {
        if (t.classList.contains(T)) t.classList.remove(T);
        else {
          for (var e = 0; e < _.length; e++) _[e].classList.remove(T);
          t.classList.add(T), s.addEventListener("click", n);
        }
      });
      var a = t.querySelector(".".concat(S)),
        i = function n(i) {
          var r = i.target.closest(".".concat(E));
          if (r && a.contains(r)) {
            var c = r.textContent;
            (o.querySelector("span").textContent = c), t.classList.remove(T);
            var u = r.getAttribute("data-value");
            if (u !== e.chain) {
              e.chain = u;
              var v = { limit: 0 };
              "all" !== e.chain && (v.network = e.chain),
                "all" !== e.vote && (v.is_voted = e.vote);
              var h =
                "https://".concat(l, "/history/?") + new URLSearchParams(v);
              fetch(h, d)
                .then(function (t) {
                  return t.json();
                })
                .then(function (t) {
                  200 === t.code && Y(z((t = t.data)));
                });
              var f = { chain: e.chain, vote: e.vote };
              s.history.replaceState &&
                s.history.replaceState(
                  null,
                  null,
                  "?" + new URLSearchParams(f)
                );
            }
          }
        };
      a.addEventListener("click", i),
        a.addEventListener("keydown", function (t) {
          var e = "Enter",
            n = " ";
          (t.key !== e && t.key !== n) || i(t);
        });
    }
    function i() {
      var t = { vote: "true", chain: "all" },
        n = new Proxy(new URLSearchParams(window.location.search), {
          get: function t(e, n) {
            return e.get(n);
          },
        });
      n.vote && (t.vote = n.vote), n.chain && (t.chain = n.chain);
      var a = { limit: 0 };
      "all" !== t.chain && (a.network = t.chain),
        "all" !== t.vote && (a.is_voted = t.vote);
      var i = "https://".concat(l, "/history/?") + new URLSearchParams(a);
      fetch(i, d)
        .then(function (t) {
          return t.json();
        })
        .then(function (e) {
          var n, o;
          200 === e.code && (Y(z(e.data)), X(e.network, t));
        });
      var s = "governance-history-table",
        c = "governance-history-details",
        u = "table-body",
        h = "table-row",
        f = r.querySelector(".".concat(s, " .").concat(u)),
        y = function t(e) {
          var n = e.target.closest(".".concat(h));
          if (n && f.contains(n)) {
            var o = n.querySelector(".".concat(c)).innerHTML;
            m(v, o, null, null);
          }
        };
      f.addEventListener("click", y),
        f.addEventListener("keydown", function (t) {
          var e = "Enter",
            n = " ";
          (t.key !== e && t.key !== n) || y(t);
        });
      var p = "history-subnav-vote",
        g;
      e(r.querySelector("#".concat(p)), t);
      var b = "history-filter-chain",
        w;
      o(r.querySelector("#".concat(b)), t);
    }
    var r = document,
      s = window,
      c = s.ENV,
      l = r.location.host === c.host.prod ? c.apiHost.prod : c.apiHost.test,
      d = c.fetchOpt.GET,
      u = "governance-modal",
      v = r.querySelector(".".concat(u)),
      h = "governance-ongoing-list",
      f = "governance-ongoing-item",
      y = "governance-ongoing-details",
      p = r.querySelector(".".concat(h));
    p.addEventListener("click", t),
      p.addEventListener("keydown", function (e) {
        var n = "Enter",
          o = " ";
        (e.key !== n && e.key !== o) || t(e);
      }),
      w(p);
    var g = "https://".concat(l, "/ongoing/"),
      b =
        "https://".concat(l, "/proposals/?") +
        new URLSearchParams({ limit: 12, page: 1 });
    fetch(g, d)
      .then(function (t) {
        return t.json();
      })
      .then(function (t) {
        200 === t.code &&
          ((t = t.data).length > 0
            ? G(t, !0)
            : fetch(b, d)
                .then(function (t) {
                  return t.json();
                })
                .then(function (t) {
                  200 === t.code && G((t = t.data), !1);
                }));
      });
    var k = "filter",
      L = "filter-button",
      S = "filter-optionlist",
      E = "filter-optionlist-item",
      T = "is-active",
      _ = r.querySelectorAll(".".concat(k));
    i();
  }
  var W =
      "object" == ("undefined" == typeof global ? "undefined" : e(global)) &&
      global &&
      global.Object === Object &&
      global,
    Q =
      "object" == ("undefined" == typeof self ? "undefined" : e(self)) &&
      self &&
      self.Object === Object &&
      self,
    J = W || Q || Function("return this")(),
    K = function t() {
      return J.Date.now();
    },
    tt = /\s/,
    et = /^\s+/,
    nt = J.Symbol,
    ot = Object.prototype,
    at = ot.hasOwnProperty,
    it = ot.toString,
    rt = nt ? nt.toStringTag : void 0,
    st,
    ct = Object.prototype.toString,
    lt = "[object Null]",
    dt = "[object Undefined]",
    ut = nt ? nt.toStringTag : void 0,
    vt = "[object Symbol]",
    ht = NaN,
    ft = /^[-+]0x[0-9a-f]+$/i,
    yt = /^0b[01]+$/i,
    pt = /^0o[0-7]+$/i,
    gt = parseInt,
    mt = "Expected a function",
    bt = Math.max,
    wt = Math.min,
    kt = !1;
  if ("undefined" != typeof window) {
    var Lt = {
      get passive() {
        kt = !0;
      },
    };
    window.addEventListener("testPassive", null, Lt),
      window.removeEventListener("testPassive", null, Lt);
  }
  var St =
      "undefined" != typeof window &&
      window.navigator &&
      window.navigator.platform &&
      (/iP(ad|hone|od)/.test(window.navigator.platform) ||
        ("MacIntel" === window.navigator.platform &&
          window.navigator.maxTouchPoints > 1)),
    Et = [],
    Tt = !1,
    _t = -1,
    xt = void 0,
    At = void 0,
    qt = void 0,
    Pt = function t(e) {
      return Et.some(function (t) {
        return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e));
      });
    },
    Ot = function t(e) {
      var n = e || window.event;
      return (
        !!Pt(n.target) ||
        n.touches.length > 1 ||
        (n.preventDefault && n.preventDefault(), !1)
      );
    },
    jt = function t(e) {
      if (void 0 === qt) {
        var n = !!e && !0 === e.reserveScrollBarGap,
          o = window.innerWidth - document.documentElement.clientWidth;
        if (n && o > 0) {
          var a = parseInt(
            window
              .getComputedStyle(document.body)
              .getPropertyValue("padding-right"),
            10
          );
          (qt = document.body.style.paddingRight),
            (document.body.style.paddingRight = a + o + "px");
        }
      }
      void 0 === xt &&
        ((xt = document.body.style.overflow),
        (document.body.style.overflow = "hidden"));
    },
    Bt = function t() {
      void 0 !== qt && ((document.body.style.paddingRight = qt), (qt = void 0)),
        void 0 !== xt && ((document.body.style.overflow = xt), (xt = void 0));
    },
    Dt = function t() {
      return window.requestAnimationFrame(function () {
        if (void 0 === At) {
          At = {
            position: document.body.style.position,
            top: document.body.style.top,
            left: document.body.style.left,
          };
          var t = window,
            e = t.scrollY,
            n = t.scrollX,
            o = t.innerHeight;
          (document.body.style.position = "fixed"),
            (document.body.style.top = -e),
            (document.body.style.left = -n),
            setTimeout(function () {
              return window.requestAnimationFrame(function () {
                var t = o - window.innerHeight;
                t && e >= o && (document.body.style.top = -(e + t));
              });
            }, 300);
        }
      });
    },
    Ut = function t() {
      if (void 0 !== At) {
        var e = -parseInt(document.body.style.top, 10),
          n = -parseInt(document.body.style.left, 10);
        (document.body.style.position = At.position),
          (document.body.style.top = At.top),
          (document.body.style.left = At.left),
          window.scrollTo(n, e),
          (At = void 0);
      }
    },
    It = function t(e) {
      return !!e && e.scrollHeight - e.scrollTop <= e.clientHeight;
    },
    Rt = function t(e, n) {
      var o = e.targetTouches[0].clientY - _t;
      return (
        !Pt(e.target) &&
        ((n && 0 === n.scrollTop && o > 0) || (It(n) && o < 0)
          ? Ot(e)
          : (e.stopPropagation(), !0))
      );
    },
    Ft = function t(e, n) {
      if (
        e &&
        !Et.some(function (t) {
          return t.targetElement === e;
        })
      ) {
        var o = { targetElement: e, options: n || {} };
        (Et = [].concat(p(Et), [o])),
          St ? Dt() : jt(n),
          St &&
            ((e.ontouchstart = function (t) {
              1 === t.targetTouches.length && (_t = t.targetTouches[0].clientY);
            }),
            (e.ontouchmove = function (t) {
              1 === t.targetTouches.length && Rt(t, e);
            }),
            Tt ||
              (document.addEventListener(
                "touchmove",
                Ot,
                kt ? { passive: !1 } : void 0
              ),
              (Tt = !0)));
      }
    },
    Ht = function t(e) {
      e &&
        ((Et = Et.filter(function (t) {
          return t.targetElement !== e;
        })),
        St &&
          ((e.ontouchstart = null),
          (e.ontouchmove = null),
          Tt &&
            0 === Et.length &&
            (document.removeEventListener(
              "touchmove",
              Ot,
              kt ? { passive: !1 } : void 0
            ),
            (Tt = !1))),
        St ? Ut() : Bt());
    },
    Mt = document,
    Ct = window,
    Nt = "layout-modal-open",
    Gt = "layout-modal-wrap",
    zt = "layout-modal-main",
    Vt = "layout-modal-close",
    Yt = "is-active",
    Xt = "layout-modal--scroll-lock",
    Zt = Mt.querySelector("body"),
    Wt =
      ("undefined" != typeof globalThis && globalThis) ||
      ("undefined" != typeof self && self) ||
      (void 0 !== Wt && Wt),
    $t = {
      searchParams: "URLSearchParams" in Wt,
      iterable: "Symbol" in Wt && "iterator" in Symbol,
      blob:
        "FileReader" in Wt &&
        "Blob" in Wt &&
        (function () {
          try {
            return new Blob(), !0;
          } catch (t) {
            return !1;
          }
        })(),
      formData: "FormData" in Wt,
      arrayBuffer: "ArrayBuffer" in Wt,
    };
  if ($t.arrayBuffer)
    var Qt = [
        "[object Int8Array]",
        "[object Uint8Array]",
        "[object Uint8ClampedArray]",
        "[object Int16Array]",
        "[object Uint16Array]",
        "[object Int32Array]",
        "[object Uint32Array]",
        "[object Float32Array]",
        "[object Float64Array]",
      ],
      Jt =
        ArrayBuffer.isView ||
        function (t) {
          return t && Qt.indexOf(Object.prototype.toString.call(t)) > -1;
        };
  (x.prototype.append = function (t, e) {
    (t = E(t)), (e = T(e));
    var n = this.map[t];
    this.map[t] = n ? n + ", " + e : e;
  }),
    (x.prototype.delete = function (t) {
      delete this.map[E(t)];
    }),
    (x.prototype.get = function (t) {
      return (t = E(t)), this.has(t) ? this.map[t] : null;
    }),
    (x.prototype.has = function (t) {
      return this.map.hasOwnProperty(E(t));
    }),
    (x.prototype.set = function (t, e) {
      this.map[E(t)] = T(e);
    }),
    (x.prototype.forEach = function (t, e) {
      for (var n in this.map)
        this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this);
    }),
    (x.prototype.keys = function () {
      var t = [];
      return (
        this.forEach(function (e, n) {
          t.push(n);
        }),
        _(t)
      );
    }),
    (x.prototype.values = function () {
      var t = [];
      return (
        this.forEach(function (e) {
          t.push(e);
        }),
        _(t)
      );
    }),
    (x.prototype.entries = function () {
      var t = [];
      return (
        this.forEach(function (e, n) {
          t.push([n, e]);
        }),
        _(t)
      );
    }),
    $t.iterable && (x.prototype[Symbol.iterator] = x.prototype.entries);
  var Kt = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
  (I.prototype.clone = function () {
    return new I(this, { body: this._bodyInit });
  }),
    D.call(I.prototype),
    D.call(H.prototype),
    (H.prototype.clone = function () {
      return new H(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new x(this.headers),
        url: this.url,
      });
    }),
    (H.error = function () {
      var t = new H(null, { status: 0, statusText: "" });
      return (t.type = "error"), t;
    });
  var te = [301, 302, 303, 307, 308];
  H.redirect = function (t, e) {
    if (-1 === te.indexOf(e)) throw new RangeError("Invalid status code");
    return new H(null, { status: e, headers: { location: t } });
  };
  var ee = Wt.DOMException;
  try {
    new ee();
  } catch (t) {
    ((ee = function t(e, n) {
      (this.message = e), (this.name = n);
      var o = Error(e);
      this.stack = o.stack;
    }).prototype = Object.create(Error.prototype)),
      (ee.prototype.constructor = ee);
  }
  (M.polyfill = !0),
    Wt.fetch ||
      ((Wt.fetch = M), (Wt.Headers = x), (Wt.Request = I), (Wt.Response = H));
  var ne = document,
    oe,
    ae;
  switch (
    ((window.ENV = {
      verTag: "1.6.5",
      host: { prod: "dorafactory.org", test: "dorafactory.laerhsif.com" },
      apiHost: {
        prod: "pg-staking-api.dorafactory.org",
        test: "pg-staking-dev-api.dorafactory.org",
      },
      fetchOpt: {
        GET: {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      },
    }),
    t(),
    y(),
    ne.querySelector("body").classList[0])
  ) {
    case "index":
      b();
      break;
    case "staking":
      C();
      break;
    case "governance":
      Z();
      break;
  }
})();
