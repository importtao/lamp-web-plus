var e, s, a = Object.defineProperty, t = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable,
  m = (e, s, t) => s in e ? a(e, s, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
  }) : e[s] = t;
import {y as n} from "./vendor.f0ce1a08.js";
import {S as u} from "./commonEnum.1f29035e.js";
import {s as l} from "./index.d8c355fb.js";

function p(e, s, a) {
  if (e) {
    const t = n();
    let r = "";
    if ("Date" === s ? r = t.format("YYYY-MM-DD") : "DateTime" === s ? r = t.format("YYYY-MM-DD HH:mm:ss") : "Time" === s && (r = t.format("HH:mm:ss")), r) {
      if ("Past" === a) return r > e;
      if ("Future" === a) return r < e
    }
  }
  return !0
}

function i(e) {
  const s = [];
  return e.forEach((({field: e, fieldType: a, constraints: t}) => {
    const r = [];
    "Float" === a ? r.push({
      type: "number",
      message: `${e}必须是数字`
    }) : "Array" === a ? r.push({
      type: "array",
      message: `${e}必须是数组`
    }) : "Boolean" === a ? r.push({
      type: "boolean",
      message: `${e}必须是布尔类型`
    }) : "Date" === a && r.push({type: "boolean", message: `${e}必须是日期类型`}),
      function (e, s, a) {
      s && s.forEach((({type: s, attrs: t}) => {
        switch (s) {
          case"RegEx":
            e.push({type: "regexp", pattern: new RegExp(t.regexp), message: t.message});
            break;
          case"Max":
            e.push({
              type: "method", validator(e, s, a) {
                parseInt(s) > t.value ? a(t.message) : a()
              }, message: t.message
            });
            break;
          case"Min":
            e.push({
              type: "method", validator(e, s, a) {
                parseInt(s) < t.value ? a(t.message) : a()
              }, message: t.message
            });
            break;
          case"DecimalMax":
            e.push({
              type: "method", validator(e, s, a) {
                parseFloat(s) > t.value ? a(t.message) : a()
              }, message: t.message
            });
            break;
          case"DecimalMin":
            e.push({
              type: "method", validator(e, s, a) {
                parseFloat(s) < t.value ? a(t.message) : a()
              }, message: t.message
            });
            break;
          case"Null":
            e.push({
              type: "method", validator(e, s, a) {
                0 !== s.length ? a(t.message) : a()
              }, message: t.message
            });
            break;
          case"NotNull":
            e.push({required: !0, whitespace: !0, message: t.message});
            break;
          case"Range":
            e.push({max: t.max, min: t.min, message: t.message});
            break;
          case"AssertTrue":
            e.push({
              type: "method", validator(e, s, a) {
                "true" === s || !0 === s ? a() : a(t.message)
              }, message: t.message
            });
            break;
          case"AssertFalse":
            e.push({
              type: "method", validator(e, s, a) {
                "false" === s || !1 === s ? a() : a(t.message)
              }, message: t.message
            });
            break;
          case"Past":
            e.push({
              type: "method", validator(e, s, r) {
                p(s, a, "Past") ? r() : r(t.message)
              }, message: t.message
            });
            break;
          case"Future":
            e.push({
              type: "method", validator(e, s, r) {
                p(s, a, "Future") ? r() : r(t.message)
              }, message: t.message
            })
        }
      }))
    }(r, t, a), s.push({field: e, rules: r})
  })), s
}

(s = e || (e = {}))[s.append = 0] = "append", s[s.cover = 1] = "cover";
const c = (e, s) => {
  return a = this, n = null, p = function* () {
    const a = {url: "", method: e.method};
    for (const s in u) e.url.startsWith(u[s]) && (a.url = e.url.replace(u[s], `${u[s]}/form/validator`));
    try {
      const e = yield l.request(((e, s) => {
        for (var a in s || (s = {})) r.call(s, a) && m(e, a, s[a]);
        if (t) for (var a of t(s)) o.call(s, a) && m(e, a, s[a]);
        return e
      })({}, a));
      if (e) return function (e, s) {
        if (!s) return e;
        if (!e) return [];
        const a = new Map;
        e.forEach((({field: e = "", rules: s = []}) => {
          a.set(e, s)
        })), s.forEach((({field: e = "", rules: s = [], type: t = 1}) => {
          if (a.has(e)) if (1 === t) a.set(e, s); else {
            const t = [...(a.get(e) || [])[Symbol.iterator](), ...s[Symbol.iterator]()];
            a.set(e, t)
          } else a.set(e, s)
        }));
        const t = [];
        for (const [r, o] of a) t.push({field: r, rules: o});
        return t
      }(i(e), s)
    } catch (n) {
    }
    return []
  }, new Promise(((e, s) => {
    var t = e => {
      try {
        o(p.next(e))
      } catch (a) {
        s(a)
      }
    }, r = e => {
      try {
        o(p.throw(e))
      } catch (a) {
        s(a)
      }
    }, o = s => s.done ? e(s.value) : Promise.resolve(s.value).then(t, r);
    o((p = p.apply(a, n)).next())
  }));
  var a, n, p
};
export {e as R, c as g};
