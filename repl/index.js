!(function(e, t) {
	if ('object' == typeof exports && 'object' == typeof module)
		module.exports = t()
	else if ('function' == typeof define && define.amd) define([], t)
	else {
		var n = t()
		for (var r in n) ('object' == typeof exports ? exports : e)[r] = n[r]
	}
})(this, function() {
	return (function(e) {
		var t = {}
		function n(r) {
			if (t[r]) return t[r].exports
			var s = (t[r] = {i: r, l: !1, exports: {}})
			return e[r].call(s.exports, s, s.exports, n), (s.l = !0), s.exports
		}
		return (
			(n.m = e),
			(n.c = t),
			(n.d = function(e, t, r) {
				n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
			}),
			(n.r = function(e) {
				'undefined' != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}),
					Object.defineProperty(e, '__esModule', {value: !0})
			}),
			(n.t = function(e, t) {
				if ((1 & t && (e = n(e)), 8 & t)) return e
				if (4 & t && 'object' == typeof e && e && e.__esModule) return e
				var r = Object.create(null)
				if (
					(n.r(r),
					Object.defineProperty(r, 'default', {enumerable: !0, value: e}),
					2 & t && 'string' != typeof e)
				)
					for (var s in e)
						n.d(
							r,
							s,
							function(t) {
								return e[t]
							}.bind(null, s)
						)
				return r
			}),
			(n.n = function(e) {
				var t =
					e && e.__esModule
						? function() {
								return e.default
						  }
						: function() {
								return e
						  }
				return n.d(t, 'a', t), t
			}),
			(n.o = function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}),
			(n.p = ''),
			n((n.s = 37))
		)
	})([
		function(e, t, n) {
			'use strict'
			n.d(t, 'b', function() {
				return s
			}),
				n.d(t, 'n', function() {
					return i
				}),
				n.d(t, 'i', function() {
					return c
				}),
				n.d(t, 'h', function() {
					return a
				}),
				n.d(t, 'e', function() {
					return l
				}),
				n.d(t, 'f', function() {
					return _
				}),
				n.d(t, 'g', function() {
					return f
				}),
				n.d(t, 'l', function() {
					return p
				}),
				n.d(t, 'm', function() {
					return d
				}),
				n.d(t, 'j', function() {
					return O
				}),
				n.d(t, 'd', function() {
					return y
				}),
				n.d(t, 'k', function() {
					return m
				}),
				n.d(t, 'c', function() {
					return E
				}),
				n.d(t, 'a', function() {
					return M
				}),
				n.d(t, 'p', function() {
					return w
				}),
				n.d(t, 'K', function() {
					return D
				}),
				n.d(t, 'q', function() {
					return v
				}),
				n.d(t, 'z', function() {
					return P
				}),
				n.d(t, 'w', function() {
					return j
				}),
				n.d(t, 'L', function() {
					return k
				}),
				n.d(t, 'D', function() {
					return x
				}),
				n.d(t, 'F', function() {
					return S
				}),
				n.d(t, 'x', function() {
					return C
				}),
				n.d(t, 'N', function() {
					return A
				}),
				n.d(t, 'v', function() {
					return I
				}),
				n.d(t, 's', function() {
					return B
				}),
				n.d(t, 'y', function() {
					return R
				}),
				n.d(t, 'u', function() {
					return T
				}),
				n.d(t, 'C', function() {
					return L
				}),
				n.d(t, 'G', function() {
					return U
				}),
				n.d(t, 'H', function() {
					return K
				}),
				n.d(t, 'M', function() {
					return F
				}),
				n.d(t, 'A', function() {
					return N
				}),
				n.d(t, 'J', function() {
					return $
				}),
				n.d(t, 'B', function() {
					return V
				}),
				n.d(t, 't', function() {
					return z
				}),
				n.d(t, 'I', function() {
					return Q
				}),
				n.d(t, 'E', function() {
					return H
				}),
				n.d(t, 'r', function() {
					return J
				}),
				n.d(t, 'o', function() {
					return Z
				})
			const r = Symbol.for('meta'),
				s = Symbol.for('ast'),
				o = Symbol.for('env'),
				i = Symbol.for('params'),
				c = Symbol.for('ismacro'),
				a = Symbol.for('islist'),
				u = Symbol.for('type'),
				l = Symbol.for('eval'),
				_ = Symbol.for('eval-params'),
				f = Symbol.for('fn'),
				p = Symbol.for('outer'),
				d = Symbol.for('outer-key'),
				h = Symbol.for('cache'),
				b = Symbol.for('expand'),
				O = Symbol('issugar'),
				y = Symbol.for('elmstrs'),
				m = Symbol.for('keys'),
				E = Symbol.for('delimiters'),
				g = Symbol.for('def')
			var M, v
			!(function(e) {
				;(e[(e.Constant = 1)] = 'Constant'),
					(e[(e.Env = 2)] = 'Env'),
					(e[(e.Unchange = 3)] = 'Unchange')
			})(M || (M = {}))
			class w extends Error {}
			function D(e, t) {
				e[b] = t
			}
			function P(e) {
				switch (typeof e) {
					case 'object':
						if (null === e) return v.Nil
						if (Array.isArray(e)) {
							return e[a] ? v.List : v.Vector
						}
						return e instanceof Float32Array
							? v.Vector
							: e[u] === v.Symbol
							? v.Symbol
							: e instanceof Z
							? v.Atom
							: v.Map
					case 'function':
						return e[c] ? v.Macro : v.Function
					case 'string':
						switch (e[0]) {
							case q:
								return v.Keyword
							default:
								return v.String
						}
					case 'number':
						return v.Number
					case 'boolean':
						return v.Boolean
					default:
						return v.Undefined
				}
			}
			function j(e, t) {
				return e[h] instanceof Object ? e[h][t] : void 0
			}
			function k(e, t, n) {
				e[h] instanceof Object || (e[h] = {}), (e[h][t] = n)
			}
			!(function(e) {
				;(e.List = 'list'),
					(e.Vector = 'vector'),
					(e.Map = 'map'),
					(e.Number = 'number'),
					(e.String = 'string'),
					(e.Boolean = 'boolean'),
					(e.Nil = 'nil'),
					(e.Symbol = 'symbol'),
					(e.Keyword = 'keyword'),
					(e.Atom = 'atom'),
					(e.Function = 'fn'),
					(e.Macro = 'macro'),
					(e.Undefined = 'undefined')
			})(v || (v = {}))
			const x = e => {
					const t = P(e)
					return t === v.List || t === v.Map || t === v.Vector
				},
				S = e => {
					const t = P(e)
					return t === v.List || t === v.Vector
				}
			function C(e) {
				return e instanceof Object && r in e ? e[r] : null
			}
			function A(e, t) {
				if (void 0 === t) throw new w('[with-meta] Need the metadata to attach')
				if (!(e instanceof Object))
					throw new w('[with-meta] Object should not be atom')
				return B(e, t)
			}
			function I(e) {
				if ('root' in e) return e.root
				{
					const {outer: t, index: n} = e
					return H(t) ? t[t[m][n]] : t[n]
				}
			}
			function B(e, t) {
				let n
				const s = P(e)
				switch (P(e)) {
					case v.List:
					case v.Vector:
						;(n = [...e]), s === v.List && (n = z(...n))
						break
					case v.Map:
						n = Object.assign({}, e)
						break
					case v.Function:
					case v.Macro: {
						const t = (...t) => e(...t)
						n = Object.assign(t, e)
						break
					}
					default:
						n = e
				}
				return void 0 !== t && n instanceof Object && (n[r] = t), n
			}
			function R(e) {
				switch (P(e)) {
					case v.String:
						return e
					case v.Keyword:
						return e.slice(1)
					case v.Symbol:
						return e.value
					default:
						throw new w(
							'getName() can only extract the name by string/keyword/symbol'
						)
				}
			}
			function T(e, t, n, a, u = null, l = !1) {
				const _ = {[s]: t, [o]: n, [i]: a, [r]: u, [c]: l}
				return Object.assign(e, _)
			}
			const L = e => !!(e instanceof Function && e[s]),
				U = e => P(e) === v.String
			class W {
				constructor(e) {
					;(this.value = e), (this[u] = v.Symbol)
				}
				static get(e) {
					let t = W.map.get(e)
					return t || ((t = new W(e)), W.map.set(e, t), t)
				}
				set def(e) {
					this[g] = e
				}
				get def() {
					return this[g] || null
				}
				set evaluated(e) {
					this[l] = e
				}
				get evaluated() {
					return this[l]
				}
				toString() {
					return this.value
				}
			}
			;(W.map = globalThis['mal-symbols'] || new Map()),
				(globalThis['mal-symbols'] = W.map),
				(globalThis.MalSymbol = W)
			const K = e => P(e) === v.Symbol,
				F = W.get,
				q = 'ʞ',
				N = e => P(e) === v.Keyword,
				$ = e => q + e,
				V = e => P(e) === v.List
			function z(...e) {
				return (e[a] = !0), e
			}
			const Q = e => P(e) === v.Vector,
				H = e => P(e) === v.Map
			function J(e, ...t) {
				if (t.length % 2 == 1) throw new w('Odd number of map arguments')
				for (let n = 0; n < t.length; n += 2) {
					if ('string' != typeof t[n])
						throw new w('Hash map can only use string/symbol/keyword as key')
					e[t[n]] = t[n + 1]
				}
				return e
			}
			class Z {
				constructor(e) {
					this.val = e
				}
			}
		},
		,
		function(e, t, n) {
			'use strict'
			n.d(t, 'b', function() {
				return s
			}),
				n.d(t, 'a', function() {
					return o
				})
			var r = n(0)
			const s = {
				log: (...e) => {
					console.info(...e)
				},
				return: (...e) => {
					console.log(...e)
				},
				error: (...e) => {
					console.error(...e)
				},
				pseudoExecute: e => {
					console.log(e)
				},
				clear: console.clear
			}
			function o(e, t = !0, n = !0) {
				const s = t,
					i = n
				let c
				if (Object(r.D)(e) && r.d in e) {
					const t = e[r.c],
						n = e[r.d]
					if (Array.isArray(e)) {
						const a = n.length
						c = ''
						for (let r = 0; r < a; r++)
							(c += t[r]), n[r] || (n[r] = o(e[r], s, i)), (c += n[r])
						;(c += t[a]),
							e[r.j] ||
								(Object(r.B)(e)
									? (c = '(' + c + ')')
									: Object(r.I)(e) && (c = '[' + c + ']'))
					} else {
						const a = e[r.k],
							u = a.length
						c = ''
						for (let r = 0; r < u; r++)
							(c += t[2 * r] + o(a[r], s, i) + t[2 * r + 1]),
								n[r] || (n[r] = o(e[a[r]], s, i)),
								(c += n[r])
						;(c += t[t.length - 1]), (c = '{' + c + '}')
					}
				} else {
					let t = null
					const n = Object(r.z)(e)
					switch (n) {
						case r.q.List:
						case r.q.Vector: {
							let a
							if (((t = e.map(e => o(e, s, i))), r.c in e)) a = e[r.c]
							else {
								const n = Math.max(0, t.length - 1)
								;(a = ['', ...Array(n).fill(' '), '']), (e[r.c] = a)
							}
							c = n === r.q.List ? '(' : '['
							for (let e = 0; e < t.length; e++) c += a[e] + t[e]
							;(c += a[a.length - 1]), (c += n === r.q.List ? ')' : ']')
							break
						}
						case r.q.Map: {
							t = []
							for (const n in e) t.push(o(n, s, i), o(e[n], s, i))
							let n
							if (r.c in e) n = e[r.c]
							else {
								const s = Math.max(0, t.length - 1)
								;(n = ['', ...Array(s).fill(' '), '']), (e[r.c] = n)
							}
							c = '{'
							for (let e = 0; e < t.length; e++) c += n[e] + t[e]
							;(c += n[n.length - 1]), (c += '}')
							break
						}
						case r.q.Number:
							c = e.toString()
							break
						case r.q.String:
							c = s
								? '"' +
								  e
										.replace(/\\/g, '\\\\')
										.replace(/"/g, '\\"')
										.replace(/\n/g, '\\n') +
								  '"'
								: e
							break
						case r.q.Boolean:
							c = e.toString()
							break
						case r.q.Nil:
							c = 'nil'
							break
						case r.q.Symbol:
							c = e.value
							break
						case r.q.Keyword:
							c = ':' + e.slice(1)
							break
						case r.q.Atom:
							c = `(atom ${o(e.val, s, i)})`
							break
						case r.q.Function:
						case r.q.Macro:
							if (r.b in e) {
								c = `(${n} ${o(e[r.n], s, i)} ${o(e[r.b], s, i)})`
							} else c = '<JS Function>'
							break
						default:
							c = '<undefined>'
					}
					i && Object(r.D)(e) && t && (e[r.d] || (e[r.d] = t))
				}
				return c
			}
		},
		function(e, t, n) {
			'use strict'
			n.d(t, 'b', function() {
				return d
			}),
				n.d(t, 'a', function() {
					return h
				}),
				n.d(t, 'd', function() {
					return b
				}),
				n.d(t, 'c', function() {
					return O
				})
			var r = n(0)
			n(2)
			const s = Object(r.M)('quote'),
				o = Object(r.M)('quasiquote'),
				i = Object(r.M)('unquote'),
				c = Object(r.M)('splice-unquote'),
				a = Object(r.M)('fn-sugar'),
				u = Object(r.M)('with-meta-sugar'),
				l = Object(r.M)('deref')
			class _ {
				constructor(e, t) {
					;(this.tokens = [...e]),
						(this.str = t),
						(this.strlen = t.length),
						(this._index = 0)
				}
				next() {
					const e = this.tokens[this._index++]
					return Array.isArray(e) ? e[0] : e
				}
				peek(e = this._index) {
					const t = this.tokens[e]
					return Array.isArray(t) ? t[0] : t
				}
				get index() {
					return this._index
				}
				getStr(e, t) {
					return this.str.slice(e, t)
				}
				offset(e = this._index) {
					const t = this.tokens[e]
					return void 0 !== t ? t[1] : this.strlen
				}
				endOffset(e = this._index) {
					const t = this.tokens[e]
					return void 0 !== t ? t[1] + t[0].length : this.strlen
				}
				prevEndOffset() {
					return this.endOffset(this._index - 1)
				}
			}
			function f(e, t, n = '[', s = ']') {
				const o = []
				let i = null,
					c = null,
					a = e.next()
				if (a !== n) throw new r.p(`[READ] expected '${n}'`)
				t && ((i = []), (c = []))
				let u = 0
				for (; (a = e.peek()) !== s; ) {
					if (!a) throw new r.p(`[READ] expected '${s}', got EOF`)
					if (t) {
						const t = e.getStr(e.prevEndOffset(), e.offset())
						null == c || c.push(t), (u = e.offset())
					}
					if ((o.push(p(e, t)), t)) {
						const t = e.getStr(u, e.prevEndOffset())
						null == i || i.push(t)
					}
				}
				if (t) {
					const t = e.getStr(e.prevEndOffset(), e.offset())
					null == c || c.push(t), (o[r.c] = c), (o[r.d] = i)
				}
				return e.next(), o
			}
			function p(e, t) {
				let n
				const _ = e.index
				let d = null
				switch (e.peek()) {
					case ';':
						n = null
						break
					case "'":
						e.next(),
							t && (d = [e.prevEndOffset(), e.offset()]),
							(n = Object(r.t)(s, p(e, t)))
						break
					case '`':
						e.next(),
							t && (d = [e.prevEndOffset(), e.offset()]),
							(n = Object(r.t)(o, p(e, t)))
						break
					case '~':
						e.next(),
							t && (d = [e.prevEndOffset(), e.offset()]),
							(n = Object(r.t)(i, p(e, t)))
						break
					case '~@':
						e.next(),
							t && (d = [e.prevEndOffset(), e.offset()]),
							(n = Object(r.t)(c, p(e, t)))
						break
					case '#': {
						e.next()
						const s = e.peek()
						if ('(' === s)
							t && (d = [e.prevEndOffset(), e.offset()]),
								(n = Object(r.t)(a, p(e, t)))
						else if ('"' === s[0]) {
							t && (d = [e.prevEndOffset(), e.offset()])
							const s = p(e, t)
							d && d.push(e.prevEndOffset(), e.offset())
							const o = p(e, t)
							n = Object(r.t)(Object(r.M)('set-id'), s, o)
						} else
							switch (s) {
								case 'f32':
									e.next(),
										t && (d = [e.prevEndOffset(), e.offset()]),
										(n = Object(r.t)(Object(r.M)('f32'), f(e, t)))
							}
						break
					}
					case '^': {
						e.next(), t && (d = [e.prevEndOffset(), e.offset()])
						const s = p(e, t)
						d && d.push(e.prevEndOffset(), e.offset())
						const o = p(e, t)
						n = Object(r.t)(u, s, o)
						break
					}
					case '@':
						e.next(),
							t && (d = [e.prevEndOffset(), e.offset()]),
							(n = Object(r.t)(l, p(e, t)))
						break
					case ')':
						throw new r.p("unexpected ')'")
					case '(':
						n = (function(e, t) {
							const n = f(e, t, '(', ')')
							return (n[r.h] = !0), n
						})(e, t)
						break
					case ']':
						throw new Error("unexpected ']'")
					case '[':
						n = f(e, t)
						break
					case '}':
						throw new Error("unexpected '}'")
					case '{':
						n = (function(e, t) {
							const n = f(e, t, '{', '}'),
								s = Object(r.r)({}, ...n)
							if (t) {
								const e = [],
									t = []
								for (let s = 0; s < n.length; s += 2)
									e.push(n[s]), t.push(n[r.d][s + 1])
								;(s[r.k] = e), (s[r.d] = t), (s[r.c] = n[r.c])
							}
							return s
						})(e, t)
						break
					default:
						n = (function(e) {
							const t = e.next()
							if ('string' == typeof t) {
								if (t.match(/^[-+]?[0-9]+$/)) return parseInt(t, 10)
								if (t.match(/^[-+]?([0-9]*\.[0-9]+|[0-9]+)$/))
									return parseFloat(t)
								if (t.match(/^"(?:\\.|[^\\"])*"$/))
									return t
										.slice(1, t.length - 1)
										.replace(/\\(.)/g, (e, t) => ('n' === t ? '\n' : t))
								if ('"' === t[0]) throw new r.p("[READ] expected '\"', got EOF")
								return ':' === t[0]
									? Object(r.J)(t.slice(1))
									: 'nil' === t
									? null
									: 'true' === t ||
									  ('false' !== t && ('NaN' === t ? NaN : Object(r.M)(t)))
							}
							return t
						})(e)
				}
				if (d) {
					const t = e.peek(_),
						s = e.prevEndOffset()
					n[r.j] = !0
					const o = [''],
						i = [t]
					d.push(s)
					for (let t = 0; t < d.length - 1; t += 2)
						o.push(e.getStr(d[t], d[t + 1])),
							i.push(e.getStr(d[t + 1], d[t + 2]))
					o.push(''), (n[r.c] = o), (n[r.d] = i)
				}
				return n
			}
			function d(e) {
				if (Array.isArray(e)) {
					return e.map(e => d(e))
				}
				if (Object(r.H)(e)) return e
				if (e instanceof Object) {
					const t = {}
					for (const [n, s] of Object.entries(e)) t[Object(r.J)(n)] = d(s)
					return t
				}
				return e
			}
			class h extends Error {}
			function b(e, t, n) {
				if (Object(r.D)(e) && !(r.l in e)) {
					Object(r.D)(t) && void 0 !== n && ((e[r.l] = t), (e[r.m] = n)),
						Object(r.E)(e) && !(r.k in e) && (e[r.k] = Object.keys(e))
					const s = Array.isArray(e)
						? e
						: Object(r.E)(e)
						? e[r.k].map(t => e[t])
						: null
					s && s.forEach((t, n) => b(t, e, n))
				}
			}
			function O(e, t = !0) {
				const n = (function(e, t = !1) {
					const n = /[\s,]*(~@|[\[\]{}()'`~^@#]|"(?:\\.|[^\\"])*"|;.*|[^\s\[\]{}('"`,;)]*)/g
					let r = null
					const s = /^[\s,]*/
					let o = null,
						i = null
					const c = []
					for (; (r = n.exec(e)) && '' != r[1]; )
						';' !== r[1][0] &&
							(t
								? ((o = s.exec(r[0])),
								  (i = o ? o[0].length : 0),
								  c.push([r[1], r.index + i]))
								: c.push(r[1]))
					return c
				})(e, t)
				if (0 === n.length) throw new h()
				const s = new _(n, e),
					o = p(s, t)
				if (s.index < n.length - 1) throw new r.p('Invalid end of file')
				return t && b(o, null), o
			}
		},
		,
		,
		function(e, t, n) {
			/*! Case - v1.6.2 - 2020-03-24
			 * Copyright (c) 2020 Nathan Bubna; Licensed MIT, GPL */
			;(function() {
				'use strict'
				var t = function(e, t) {
						return (
							(t = t || ''),
							e.replace(/(^|-)/g, '$1\\u' + t).replace(/,/g, '\\u' + t)
						)
					},
					n = t('20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7', '00'),
					r = 'a-z' + t('DF-F6,F8-FF', '00'),
					s = 'A-Z' + t('C0-D6,D8-DE', '00'),
					o = function(e, t, o, i) {
						return (
							(e = e || n),
							(t = t || r),
							(o = o || s),
							(i =
								i ||
								'A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via'),
							{
								capitalize: new RegExp('(^|[' + e + '])([' + t + '])', 'g'),
								pascal: new RegExp('(^|[' + e + '])+([' + t + o + '])', 'g'),
								fill: new RegExp('[' + e + ']+(.|$)', 'g'),
								sentence: new RegExp(
									'(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")([' + t + '])',
									'g'
								),
								improper: new RegExp('\\b(' + i + ')\\b', 'g'),
								relax: new RegExp(
									'([^' + o + '])([' + o + ']*)([' + o + '])(?=[^' + o + ']|$)',
									'g'
								),
								upper: new RegExp('^[^' + t + ']+$'),
								hole: /[^\s]\s[^\s]/,
								apostrophe: /'/g,
								room: new RegExp('[' + e + ']')
							}
						)
					},
					i = o(),
					c = {
						re: i,
						unicodes: t,
						regexps: o,
						types: [],
						up: String.prototype.toUpperCase,
						low: String.prototype.toLowerCase,
						cap: function(e) {
							return c.up.call(e.charAt(0)) + e.slice(1)
						},
						decap: function(e) {
							return c.low.call(e.charAt(0)) + e.slice(1)
						},
						deapostrophe: function(e) {
							return e.replace(i.apostrophe, '')
						},
						fill: function(e, t, n) {
							return (
								null != t &&
									(e = e.replace(i.fill, function(e, n) {
										return n ? t + n : ''
									})),
								n && (e = c.deapostrophe(e)),
								e
							)
						},
						prep: function(e, t, n, r) {
							if (
								((e = null == e ? '' : e + ''),
								!r && i.upper.test(e) && (e = c.low.call(e)),
								!t && !i.hole.test(e))
							) {
								var s = c.fill(e, ' ')
								i.hole.test(s) && (e = s)
							}
							return n || i.room.test(e) || (e = e.replace(i.relax, c.relax)), e
						},
						relax: function(e, t, n, r) {
							return t + ' ' + (n ? n + ' ' : '') + r
						}
					},
					a = {
						_: c,
						of: function(e) {
							for (var t = 0, n = c.types.length; t < n; t++)
								if (a[c.types[t]].apply(a, arguments) === e) return c.types[t]
						},
						flip: function(e) {
							return e.replace(/\w/g, function(e) {
								return (e == c.up.call(e) ? c.low : c.up).call(e)
							})
						},
						random: function(e) {
							return e.replace(/\w/g, function(e) {
								return (Math.round(Math.random()) ? c.up : c.low).call(e)
							})
						},
						type: function(e, t) {
							;(a[e] = t), c.types.push(e)
						}
					},
					u = {
						lower: function(e, t, n) {
							return c.fill(c.low.call(c.prep(e, t)), t, n)
						},
						snake: function(e) {
							return a.lower(e, '_', !0)
						},
						constant: function(e) {
							return a.upper(e, '_', !0)
						},
						camel: function(e) {
							return c.decap(a.pascal(e))
						},
						kebab: function(e) {
							return a.lower(e, '-', !0)
						},
						upper: function(e, t, n) {
							return c.fill(c.up.call(c.prep(e, t, !1, !0)), t, n)
						},
						capital: function(e, t, n) {
							return c.fill(
								c.prep(e).replace(i.capitalize, function(e, t, n) {
									return t + c.up.call(n)
								}),
								t,
								n
							)
						},
						header: function(e) {
							return a.capital(e, '-', !0)
						},
						pascal: function(e) {
							return c.fill(
								c.prep(e, !1, !0).replace(i.pascal, function(e, t, n) {
									return c.up.call(n)
								}),
								'',
								!0
							)
						},
						title: function(e) {
							return a.capital(e).replace(i.improper, function(e, t, n, r) {
								return n > 0 && n < r.lastIndexOf(' ') ? c.low.call(e) : e
							})
						},
						sentence: function(e, t, n) {
							return (
								(e = a.lower(e).replace(i.sentence, function(e, t, n) {
									return t + c.up.call(n)
								})),
								t &&
									t.forEach(function(t) {
										e = e.replace(
											new RegExp('\\b' + a.lower(t) + '\\b', 'g'),
											c.cap
										)
									}),
								n &&
									n.forEach(function(t) {
										e = e.replace(
											new RegExp('(\\b' + a.lower(t) + '\\. +)(\\w)'),
											function(e, t, n) {
												return t + c.low.call(n)
											}
										)
									}),
								e
							)
						}
					}
				for (var l in ((u.squish = u.pascal), (a.default = a), u))
					a.type(l, u[l])
				var _ = 'function' == typeof _ ? _ : function() {}
				_(e.exports ? (e.exports = a) : (this.Case = a))
			}.call(this))
		},
		function(e, t, n) {
			'use strict'
			e.exports = !(
				'undefined' == typeof process ||
				!process.versions ||
				!process.versions.node
			)
		},
		function(e, t, n) {
			'use strict'
			n.d(t, 'a', function() {
				return o
			})
			var r = n(0),
				s = n(13)
			class o {
				constructor(e = null, t, n) {
					;(this.outer = e),
						(this.data = {}),
						(this.defs = {}),
						(this.name = 'let'),
						this.root === this && (this.bindings = []),
						n && (this.exps = n),
						t && n && this.bindAll(t, n)
				}
				get root() {
					return this.outer ? this.outer.root : this
				}
				getMergedData() {
					var e
					const t =
						(null === (e = this.outer) || void 0 === e
							? void 0
							: e.getMergedData()) || {}
					return Object.assign(Object.assign({}, t), this.data)
				}
				getSymbolValuePairs() {
					return Object.entries(this.data).map(([e, t]) => [Object(r.M)(e), t])
				}
				getAllSymbols() {
					return Object.keys(this.getMergedData()).map(r.M)
				}
				bindAll(e, t) {
					if (Object(r.H)(e)) this.set(e, t)
					else
						for (let n = 0; n < e.length; n++) {
							const o = e[n],
								i = t[n],
								c = Object(r.z)(o)
							if (c === r.q.Symbol && '&' === o.value) {
								this.set(e[n + 1], t.slice(n))
								break
							}
							switch (c) {
								case r.q.Symbol:
									if (void 0 === i)
										throw new r.p(`Error: parameter '${o}' is not specified`)
									this.set(o, i)
									break
								case r.q.Vector:
									if (!Object(r.F)(i))
										throw new r.p(
											`Error: destruction parameter ${Object(s.a)(
												o,
												!0,
												!1
											)} is not specified as sequence`
										)
									this.bindAll(o, i)
									break
								case r.q.Map: {
									if (!Object(r.E)(i))
										throw new r.p(
											`Error: destruction parameter '${Object(s.a)(
												o,
												!0,
												!1
											)}'} is not specified as map`
										)
									const e = Object.entries(o),
										t = [],
										n = []
									for (const [s, o] of e) {
										if (!(s in i))
											throw new r.p(
												`ERROR: destruction keyword :${s.slice(
													1
												)} does not exist on the parameter`
											)
										t.push(o), n.push(i[s])
									}
									this.bindAll(t, n)
									break
								}
								default:
									throw new r.p('Error: invalid bind expression')
							}
						}
				}
				set(e, t, n) {
					return (this.data[e.value] = t), n && (this.defs[e.value] = n), t
				}
				getDef(e) {
					return this.defs.hasOwnProperty(e.value)
						? this.defs[e.value]
						: null !== this.outer
						? this.outer.getDef(e)
						: null
				}
				find(e) {
					const t = this.root.bindings
					if (t.length > 0) {
						const n = t[t.length - 1].find(e)
						if (void 0 !== n) return n
					}
					if (this.data.hasOwnProperty(e.value)) return this.data[e.value]
					let n
					return '%' === e.value[0] &&
						this.exps &&
						this.exps.length >= (n = parseInt(e.value.slice(1)) - 1 || 0)
						? this.exps[n]
						: null !== this.outer
						? this.outer.find(e)
						: void 0
				}
				hasOwn(e) {
					return this.data.hasOwnProperty(e.value)
				}
				get(e) {
					const t = this.find(e)
					if (void 0 === t) throw new r.p(`Symbol ${e} not found`)
					return t
				}
				getChain() {
					let e = this
					const t = [...this.root.bindings.reverse()]
					do {
						t.push(e), (e = e.outer)
					} while (e)
					return t
				}
				setOuter(e) {
					this.outer = e
				}
				pushBinding(e) {
					const t = this.root.bindings,
						n = t.length > 0 ? t[t.length - 1] : null
					return (e.name = 'binding'), (e.outer = n), t.push(e), e
				}
				popBinding() {
					this.root.bindings.pop()
				}
			}
		},
		,
		function(e, t) {
			e.exports = require('path')
		},
		function(e, t) {
			e.exports = require('fs')
		},
		,
		function(e, t, n) {
			'use strict'
			n(3)
			var r = n(2)
			n.d(t, 'a', function() {
				return r.a
			})
		},
		function(e, t, n) {
			'use strict'
			n.d(t, 'a', function() {
				return C
			})
			var r = n(0),
				s = n(8),
				o = (n(3), n(13)),
				i = n(6)
			const c = Object(r.M)('def'),
				a = Object(r.M)('defvar'),
				u = Object(r.M)('let'),
				l = Object(r.M)('binding'),
				_ = Object(r.M)('if'),
				f = Object(r.M)('do'),
				p = Object(r.M)('fn'),
				d = Object(r.M)('get-all-symbols'),
				h = Object(r.M)('fn-params'),
				b = Object(r.M)('fn-sugar'),
				O = Object(r.M)('macro'),
				y = Object(r.M)('macroexpand'),
				m = Object(r.M)('quote'),
				E = Object(r.M)('unquote'),
				g = Object(r.M)('quasiquote'),
				M = Object(r.M)('splice-unquote'),
				v = Object(r.M)('try'),
				w = Object(r.M)('catch'),
				D = Object(r.M)('concat'),
				P = (Object(r.M)('env-chain'), Object(r.M)('eval*')),
				j = (Object(r.M)('var'), Object(r.M)('lst'))
			function k(e) {
				if (Object(r.E)(e)) {
					const t = {}
					for (const [n, r] of Object.entries(e)) t[n] = k(r)
					return t
				}
				if (!n(e)) return Object(r.t)(m, e)
				if (e[0] === E) return e[1]
				let t = Object(r.t)(
					D,
					...e.map(e => (n(e) && e[0] === M ? e[1] : [k(e)]))
				)
				return (t = Object(r.B)(e) ? Object(r.t)(j, t) : t), t
				function n(e) {
					return Object(r.F)(e) && e.length > 0
				}
			}
			function x(e, t, n) {
				let o = e
				for (; Object(r.B)(o) && Object(r.H)(o[0]) && t.find(o[0]); ) {
					const e = t.get(o[0])
					if (!Object(r.C)(e) || !e[r.i]) break
					o[r.g] = e
					const i = o.slice(1)
					n && (o[r.f] = i), (o = e.bind({callerEnv: s.a})(...i))
				}
				return (
					n &&
						o !== e &&
						Object(r.B)(e) &&
						Object(r.K)(e, {type: r.a.Constant, exp: o}),
					o
				)
			}
			function S(e, t, n) {
				if (Object(r.H)(e)) {
					const r = t.get(e)
					if (n) {
						const n = t.getDef(e)
						n && (e.def = n), (e.evaluated = r)
					}
					return r
				}
				if (Array.isArray(e)) {
					const s = e.map(e => {
						const s = C(e, t, n)
						return n && Object(r.D)(e) && (e[r.e] = s), s
					})
					return n && (e[r.e] = s), Object(r.B)(e) ? Object(r.t)(...s) : s
				}
				if (Object(r.E)(e)) {
					const s = {}
					for (const o in e) {
						const i = C(e[o], t, n)
						n && Object(r.D)(e[o]) && (e[o][r.e] = i), (s[o] = i)
					}
					return n && (e[r.e] = s), s
				}
				return e
			}
			function C(e, t, n = !0) {
				const E = e
				let M = 0
				for (; M++ < 1e6; ) {
					if (!Object(r.B)(e)) return S(e, t, n)
					if (((e = x(e, t, n)), !Object(r.B)(e))) return S(e, t, n)
					if (0 === e.length) throw new r.p('Invalid empty list')
					const [M] = e
					switch (M) {
						case c: {
							const [, s, o] = e
							if (!Object(r.H)(s) || void 0 === o)
								throw new r.p('Invalid form of def')
							const i = t.set(s, C(o, t, n))
							return (
								n &&
									(Object(r.K)(e, {type: r.a.Unchange}),
									(e[r.g] = t.get(c)),
									(E[r.e] = i)),
								i
							)
						}
						case a: {
							const [, s, o] = e
							if (!Object(r.H)(s) || void 0 === o)
								throw new r.p('Invalid form of defvar')
							const i = C(o, t, n)
							return t.set(s, i, e), n && ((e[r.g] = t.get(a)), (E[r.e] = i)), i
						}
						case u: {
							const o = new s.a(t),
								[, i, ...c] = e
							if (!Object(r.I)(i)) throw new r.p('Invalid bind-expr in let')
							for (let e = 0; e < i.length; e += 2)
								o.bindAll(i[e], C(i[e + 1], o, n))
							t = o
							const a = 1 === c.length ? c[0] : Object(r.t)(f, ...c)
							n &&
								(Object(r.K)(e, {type: r.a.Env, exp: a, env: o}),
								(e[r.g] = t.get(u))),
								(e = a)
							break
						}
						case l: {
							const o = new s.a(),
								[, i, ...c] = e
							if (!Object(r.F)(i)) throw new r.p('Invalid bind-expr in binding')
							for (let e = 0; e < i.length; e += 2)
								o.bindAll(i[e], C(i[e + 1], t, n))
							t.pushBinding(o)
							const a = 1 === c.length ? c[0] : Object(r.t)(f, ...c)
							let u
							try {
								u = C(a, t, n)
							} finally {
								t.popBinding()
							}
							return n && ((e[r.g] = t.get(l)), (E[r.e] = u)), u
						}
						case d: {
							const s = t.getAllSymbols()
							return n && ((e[r.g] = t.get(d)), (E[r.e] = s)), s
						}
						case h: {
							const s = C(e[1], t, n),
								o = Object(r.C)(s) ? [...s[r.n]] : null
							return n && ((e[r.g] = t.get(h)), (E[r.e] = o)), o
						}
						case P: {
							const s = C(e[1], t, n)
							n && (e[r.g] = t.get(P)), (e = C(s, this ? this.callerEnv : t, n))
							break
						}
						case m: {
							const s = e[1]
							return n && ((e[r.g] = t.get(m)), (E[r.e] = s)), s
						}
						case g: {
							const s = k(e[1])
							n && (e[r.g] = t.get(g)), (e = s)
							break
						}
						case p: {
							const [, o, i] = e
							if (!Object(r.I)(o))
								throw new r.p('First argument of fn should be vector')
							if (void 0 === i)
								throw new r.p('Second argument of fn should be specified')
							const c = Object(r.u)(
								(...e) => C(i, new s.a(t, o, e), n),
								i,
								t,
								o
							)
							return n && ((e[r.g] = t.get(p)), (E[r.e] = c)), c
						}
						case b: {
							const o = e[1],
								i = Object(r.u)((...e) => C(o, new s.a(t, [], e), n), o, t, [])
							return n && ((e[r.g] = t.get(b)), (E[r.e] = i)), i
						}
						case O: {
							const [, o, i] = e,
								c = Object(r.u)(
									(...e) => C.bind(this)(i, new s.a(t, o, e), n),
									i,
									t,
									o
								)
							return (c[r.i] = !0), n && ((e[r.g] = t.get(O)), (E[r.e] = c)), c
						}
						case y: {
							const s = x(e[1], t, n)
							return n && ((e[r.g] = t.get(y)), (E[r.e] = s)), s
						}
						case v: {
							const [, o, i] = e
							try {
								const s = C(o, t, n)
								return n && ((e[r.g] = t.get(v)), (E[r.e] = s)), s
							} catch (e) {
								let o = e
								if (Object(r.B)(i) && i[0] === w && Object(r.H)(i[1])) {
									e instanceof Error && (o = e.message)
									const [, c, a] = i,
										u = C(a, new s.a(t, [c], [o]), n)
									return n && ((i[r.g] = t.get(w)), (E[r.e] = u)), u
								}
								throw o
							}
						}
						case f:
							if ((n && (e[r.g] = t.get(f)), 1 === e.length)) return null
							S(e.slice(1, -1), t, n), (e = e[e.length - 1])
							break
						case _: {
							const [, s, o, i] = e,
								c = C(s, t, n) ? o : void 0 !== i ? i : null
							n && (e[r.g] = t.get(_)), (e = c)
							break
						}
						default: {
							const [s, ...c] = S(e, t, n)
							if (s instanceof Function) {
								e[r.f] = c
								const t = s(...c)
								return n && ((E[r.e] = t), (e[r.g] = s)), t
							}
							{
								const e = Object(i.capital)(Object(r.z)(s))
								throw new r.p(
									`[EVAL] ${e} ${Object(o.a)(
										s
									)} is not a function. First element of list always should be a function.`
								)
							}
						}
					}
				}
				throw new Error('[EVAL] Exceed the maximum TCO stacks')
			}
		},
		function(module, __webpack_exports__, __webpack_require__) {
			'use strict'
			var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0)
			__webpack_exports__.a = {
				resolveJS(str) {
					if (str.match(/\./)) {
						const match = /^(.*)\.[^\.]*$/.exec(str)
						if (null === match)
							throw new _types__WEBPACK_IMPORTED_MODULE_0__.p(
								'[interop.resolveJS] Cannot resolve'
							)
						return [eval(match[1]), eval(str)]
					}
					return [globalThis, eval(str)]
				},
				jsToMal(e) {
					if (null == e) return null
					const t = [],
						n = JSON.stringify(e, (e, n) => {
							if ('object' == typeof n && null !== n) {
								if (-1 !== t.indexOf(n)) return
								t.push(n)
							}
							return n
						})
					return JSON.parse(n)
				}
			}
		},
		function(e, t) {
			e.exports = require('crypto')
		},
		function(module, __webpack_exports__, __webpack_require__) {
			'use strict'
			__webpack_require__.d(__webpack_exports__, 'b', function() {
				return slurp
			})
			var sprintf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24),
				sprintf_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					sprintf_js__WEBPACK_IMPORTED_MODULE_0__
				),
				is_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7),
				is_node__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					is_node__WEBPACK_IMPORTED_MODULE_1__
				),
				_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0),
				_printer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2),
				_reader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3),
				_interop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15)
			const slurp = (() => {
				if (is_node__WEBPACK_IMPORTED_MODULE_1___default.a) {
					const e = __webpack_require__(11)
					return t => e.readFileSync(t, 'UTF-8')
				}
				return e => {
					const t = new XMLHttpRequest(),
						n = e + (/\?/.test(e) ? '&' : '?') + new Date().getTime()
					if ((t.open('GET', n, !1), t.send(), 200 !== t.status))
						throw new _types__WEBPACK_IMPORTED_MODULE_2__.p(
							`Failed to slurp file: ${e}`
						)
					return t.responseText
				}
			})()
			function jsEval(str) {
				return _interop__WEBPACK_IMPORTED_MODULE_5__.a.jsToMal(
					eval(str.toString())
				)
			}
			function jsMethodCall(e, ...t) {
				const [n, r] = _interop__WEBPACK_IMPORTED_MODULE_5__.a.resolveJS(e),
					s = r.apply(n, t)
				return _interop__WEBPACK_IMPORTED_MODULE_5__.a.jsToMal(s)
			}
			const dummyFn = () => null,
				Exports = [
					[
						'throw',
						e => {
							throw new _types__WEBPACK_IMPORTED_MODULE_2__.p(e)
						}
					],
					[
						'prn',
						(...e) => (
							_printer__WEBPACK_IMPORTED_MODULE_3__.b.log(
								...e.map(e =>
									Object(_printer__WEBPACK_IMPORTED_MODULE_3__.a)(e, !0)
								)
							),
							null
						)
					],
					[
						'print-str',
						(...e) =>
							e
								.map(e =>
									Object(_printer__WEBPACK_IMPORTED_MODULE_3__.a)(e, !0)
								)
								.join(' ')
					],
					[
						'println',
						(...e) => (
							_printer__WEBPACK_IMPORTED_MODULE_3__.b.log(
								...e.map(e =>
									Object(_printer__WEBPACK_IMPORTED_MODULE_3__.a)(e, !1)
								)
							),
							null
						)
					],
					['read-string', _reader__WEBPACK_IMPORTED_MODULE_4__.c],
					['slurp', slurp],
					['js-eval', jsEval],
					['.', jsMethodCall],
					[
						'format',
						(e, ...t) =>
							Object(sprintf_js__WEBPACK_IMPORTED_MODULE_0__.vsprintf)(e, t)
					],
					['*is-node*', is_node__WEBPACK_IMPORTED_MODULE_1___default.a],
					['*host-language*', 'JavaScript'],
					['&', Object(_types__WEBPACK_IMPORTED_MODULE_2__.M)('&')],
					[
						'def',
						Object(_types__WEBPACK_IMPORTED_MODULE_2__.N)(
							dummyFn,
							Object(_reader__WEBPACK_IMPORTED_MODULE_4__.b)({
								doc: 'Defines a variable',
								params: [
									{label: 'Symbol', type: 'symbol'},
									{label: 'Value', type: 'any'}
								]
							})
						)
					],
					[
						'defvar',
						Object(_types__WEBPACK_IMPORTED_MODULE_2__.N)(
							dummyFn,
							Object(_reader__WEBPACK_IMPORTED_MODULE_4__.b)({
								doc:
									'Creates a variable which can be changed by the bidirectional evaluation',
								params: [
									{label: 'Symbol', type: 'symbol'},
									{label: 'Value', type: 'any'}
								]
							})
						)
					],
					[
						'let',
						Object(_types__WEBPACK_IMPORTED_MODULE_2__.N)(
							dummyFn,
							Object(_reader__WEBPACK_IMPORTED_MODULE_4__.b)({
								doc: 'Creates a lexical scope',
								params: [
									{label: 'Binds', type: 'code'},
									{label: 'Body', type: 'code'}
								]
							})
						)
					],
					[
						'binding',
						Object(_types__WEBPACK_IMPORTED_MODULE_2__.N)(
							dummyFn,
							Object(_reader__WEBPACK_IMPORTED_MODULE_4__.b)({
								doc: 'Creates a new binding',
								params: [
									{label: 'Binds', type: 'code'},
									{label: 'Body', type: 'code'}
								]
							})
						)
					],
					[
						'get-all-symbols',
						Object(_types__WEBPACK_IMPORTED_MODULE_2__.N)(
							dummyFn,
							Object(_reader__WEBPACK_IMPORTED_MODULE_4__.b)({
								doc: 'Gets all existing symbols',
								params: [],
								return: {type: 'vector'}
							})
						)
					],
					[
						'fn-params',
						Object(_types__WEBPACK_IMPORTED_MODULE_2__.N)(
							dummyFn,
							Object(_reader__WEBPACK_IMPORTED_MODULE_4__.b)({
								doc: 'Gets the list of a function parameter',
								params: [{label: 'Function', type: 'symbol'}]
							})
						)
					],
					[
						'eval*',
						Object(_types__WEBPACK_IMPORTED_MODULE_2__.N)(
							dummyFn,
							Object(_reader__WEBPACK_IMPORTED_MODULE_4__.b)({
								doc:
									'Inside macro, evaluates the expression in a scope that called macro. Otherwise, executes *eval* normally',
								params: [{label: 'Form', type: 'code'}]
							})
						)
					],
					[
						'quote',
						Object(_types__WEBPACK_IMPORTED_MODULE_2__.N)(
							dummyFn,
							Object(_reader__WEBPACK_IMPORTED_MODULE_4__.b)({
								doc: 'Yields the unevaluated *form*',
								params: [{label: 'Form', type: 'code'}]
							})
						)
					],
					[
						'quasiquote',
						Object(_types__WEBPACK_IMPORTED_MODULE_2__.N)(
							dummyFn,
							Object(_reader__WEBPACK_IMPORTED_MODULE_4__.b)({
								doc: 'Quasiquote',
								params: [{label: 'Form', type: 'code'}]
							})
						)
					],
					[
						'fn',
						Object(_types__WEBPACK_IMPORTED_MODULE_2__.N)(
							dummyFn,
							Object(_reader__WEBPACK_IMPORTED_MODULE_4__.b)({
								doc: 'Defines a function',
								params: [
									{label: 'Params', type: 'code'},
									{label: 'Form', type: 'code'}
								]
							})
						)
					],
					[
						'fn-sugar',
						Object(_types__WEBPACK_IMPORTED_MODULE_2__.N)(
							dummyFn,
							Object(_reader__WEBPACK_IMPORTED_MODULE_4__.b)({
								doc: 'syntactic sugar for (fn [] *form*)',
								params: []
							})
						)
					],
					[
						'macro',
						Object(_types__WEBPACK_IMPORTED_MODULE_2__.N)(
							dummyFn,
							Object(_reader__WEBPACK_IMPORTED_MODULE_4__.b)({
								doc: '',
								params: [
									{label: 'Param', type: 'code'},
									{label: 'Form', type: 'code'}
								]
							})
						)
					],
					[
						'macroexpand',
						Object(_types__WEBPACK_IMPORTED_MODULE_2__.N)(
							dummyFn,
							Object(_reader__WEBPACK_IMPORTED_MODULE_4__.b)({
								doc: 'Expands the macro',
								params: []
							})
						)
					],
					[
						'try',
						Object(_types__WEBPACK_IMPORTED_MODULE_2__.N)(
							dummyFn,
							Object(_reader__WEBPACK_IMPORTED_MODULE_4__.b)({
								doc: 'Try',
								params: []
							})
						)
					],
					[
						'catch',
						Object(_types__WEBPACK_IMPORTED_MODULE_2__.N)(
							dummyFn,
							Object(_reader__WEBPACK_IMPORTED_MODULE_4__.b)({
								doc: 'Catch',
								params: []
							})
						)
					],
					[
						'do',
						Object(_types__WEBPACK_IMPORTED_MODULE_2__.N)(
							dummyFn,
							Object(_reader__WEBPACK_IMPORTED_MODULE_4__.b)({
								doc:
									'Evaluates *forms* in order and returns the value of the last',
								params: [
									Object(_types__WEBPACK_IMPORTED_MODULE_2__.M)('&'),
									{label: 'Form', type: 'code'}
								]
							})
						)
					],
					[
						'if',
						Object(_types__WEBPACK_IMPORTED_MODULE_2__.N)(
							dummyFn,
							Object(_reader__WEBPACK_IMPORTED_MODULE_4__.b)({
								doc:
									'Evaluates *test*. If truthy, evaluates and yields *then*, otherwise, evaluates and yields *else*. If *else* is not supplied it defaults to nil',
								params: [
									{label: 'Test', type: 'code'},
									{label: 'Then', type: 'code'},
									{label: 'Else', type: 'code', default: null}
								]
							})
						)
					],
					[
						'env-chain',
						Object(_types__WEBPACK_IMPORTED_MODULE_2__.N)(
							dummyFn,
							Object(_reader__WEBPACK_IMPORTED_MODULE_4__.b)({
								doc: 'Env chain',
								params: []
							})
						)
					]
				]
			__webpack_exports__.a = Exports
		},
		,
		,
		,
		,
		function(e, t, n) {
			'use strict'
			var r,
				s,
				o,
				i,
				c,
				a,
				u = 'win32' === process.platform,
				l =
					"The current environment doesn't support interactive reading from TTY.",
				_ = n(11),
				f = process.binding('tty_wrap').TTY,
				p = n(38),
				d = n(10),
				h = {
					prompt: '> ',
					hideEchoBack: !1,
					mask: '*',
					limit: [],
					limitMessage: 'Input another, please.$<( [)limit(])>',
					defaultInput: '',
					trueValue: [],
					falseValue: [],
					caseSensitive: !1,
					keepWhitespace: !1,
					encoding: 'utf8',
					bufferSize: 1024,
					print: void 0,
					history: !0,
					cd: !1,
					phContent: void 0,
					preCheck: void 0
				},
				b = 'none',
				O = !1,
				y = 0,
				m = '',
				E = [],
				g = !1,
				M = !1,
				v = !1
			function w(e) {
				return i.concat(
					((t = {
						display: 'string',
						displayOnly: 'boolean',
						keyIn: 'boolean',
						hideEchoBack: 'boolean',
						mask: 'string',
						limit: 'string',
						caseSensitive: 'boolean'
					}),
					(n = []),
					Object.keys(t).forEach(function(r) {
						'boolean' === t[r]
							? e[r] && n.push('--' + r)
							: 'string' === t[r] &&
							  e[r] &&
							  n.push(
									'--' + r,
									e[r].replace(/[^\w\u0080-\uFFFF]/g, function(e) {
										return '#' + e.charCodeAt(0) + ';'
									})
							  )
					}),
					n)
				)
				var t, n
			}
			function D(e) {
				var t,
					r,
					s = {},
					a = {env: process.env, encoding: e.encoding}
				if (
					(o ||
						(u
							? process.env.PSModulePath
								? ((o = 'powershell.exe'),
								  (i = [
										'-ExecutionPolicy',
										'Bypass',
										'-File',
										__dirname + '\\read.ps1'
								  ]))
								: ((o = 'cscript.exe'),
								  (i = ['//nologo', __dirname + '\\read.cs.js']))
							: ((o = '/bin/sh'), (i = [__dirname + '/read.sh']))),
					u && !process.env.PSModulePath && (a.stdio = [process.stdin]),
					p.execFileSync)
				) {
					;(t = w(e)), v && v('execFileSync', t)
					try {
						s.input = p.execFileSync(o, t, a)
					} catch (e) {
						;(r = e.stderr ? (e.stderr + '').trim() : ''),
							(s.error = new Error(l + (r ? '\n' + r : ''))),
							(s.error.method = 'execFileSync'),
							(s.error.program = o),
							(s.error.args = t),
							(s.error.extMessage = r),
							(s.error.exitCode = e.status),
							(s.error.code = e.code),
							(s.error.signal = e.signal)
					}
				} else
					s = (function(e, t) {
						function r(e) {
							var t,
								r,
								s = ''
							for (c = c || n(39).tmpdir(); ; ) {
								t = d.join(c, e + s)
								try {
									r = _.openSync(t, 'wx')
								} catch (e) {
									if ('EEXIST' === e.code) {
										s++
										continue
									}
									throw e
								}
								_.closeSync(r)
								break
							}
							return t
						}
						var s,
							i,
							a,
							f,
							h,
							b,
							O,
							m,
							E = {},
							g = r('readline-sync.stdout'),
							M = r('readline-sync.stderr'),
							D = r('readline-sync.exit'),
							P = r('readline-sync.done'),
							j = n(16)
						;(b = j.createHash('sha256')).update(
							'' + process.pid + y++ + Math.random()
						),
							(m = b.digest('hex')),
							(O = j.createDecipher('aes-256-cbc', m)),
							(s = w(e)),
							u
								? ((i = process.env.ComSpec || 'cmd.exe'),
								  (process.env.Q = '"'),
								  (a = [
										'/V:ON',
										'/S',
										'/C',
										'(%Q%' +
											i +
											'%Q% /V:ON /S /C %Q%%Q%' +
											o +
											'%Q%' +
											s
												.map(function(e) {
													return ' %Q%' + e + '%Q%'
												})
												.join('') +
											' & (echo !ERRORLEVEL!)>%Q%' +
											D +
											'%Q%%Q%) 2>%Q%' +
											M +
											'%Q% |%Q%' +
											process.execPath +
											'%Q% %Q%' +
											__dirname +
											'\\encrypt.js%Q% %Q%aes-256-cbc%Q% %Q%' +
											m +
											'%Q% >%Q%' +
											g +
											'%Q% & (echo 1)>%Q%' +
											P +
											'%Q%'
								  ]))
								: ((i = '/bin/sh'),
								  (a = [
										'-c',
										'("' +
											o +
											'"' +
											s
												.map(function(e) {
													return " '" + e.replace(/'/g, "'\\''") + "'"
												})
												.join('') +
											'; echo $?>"' +
											D +
											'") 2>"' +
											M +
											'" |"' +
											process.execPath +
											'" "' +
											__dirname +
											'/encrypt.js" "aes-256-cbc" "' +
											m +
											'" >"' +
											g +
											'"; echo 1 >"' +
											P +
											'"'
								  ])),
							v && v('_execFileSync', s)
						try {
							p.spawn(i, a, t)
						} catch (e) {
							;(E.error = new Error(e.message)),
								(E.error.method = '_execFileSync - spawn'),
								(E.error.program = i),
								(E.error.args = a)
						}
						for (; '1' !== _.readFileSync(P, {encoding: e.encoding}).trim(); );
						return (
							'0' === (f = _.readFileSync(D, {encoding: e.encoding}).trim())
								? (E.input =
										O.update(
											_.readFileSync(g, {encoding: 'binary'}),
											'hex',
											e.encoding
										) + O.final(e.encoding))
								: ((h = _.readFileSync(M, {encoding: e.encoding}).trim()),
								  (E.error = new Error(l + (h ? '\n' + h : ''))),
								  (E.error.method = '_execFileSync'),
								  (E.error.program = i),
								  (E.error.args = a),
								  (E.error.extMessage = h),
								  (E.error.exitCode = +f)),
							_.unlinkSync(g),
							_.unlinkSync(M),
							_.unlinkSync(D),
							_.unlinkSync(P),
							E
						)
					})(e, a)
				return (
					s.error ||
						((s.input = s.input.replace(/^\s*'|'\s*$/g, '')), (e.display = '')),
					s
				)
			}
			function P(e) {
				var t = '',
					n = e.display,
					o = !e.display && e.keyIn && e.hideEchoBack && !e.mask
				function i() {
					var t = D(e)
					if (t.error) throw t.error
					return t.input
				}
				return (
					M && M(e),
					(function() {
						var e, t, n
						function o() {
							return (
								e ||
									((e = process.binding('fs')),
									(t =
										(t = process.binding('constants')) &&
										t.fs &&
										'number' == typeof t.fs.O_RDWR
											? t.fs
											: t)),
								e
							)
						}
						if ('string' == typeof b)
							if (((b = null), u)) {
								if (
									((n = (function(e) {
										var t = process.version.replace(/^\D+/, '').split('.'),
											n = 0
										return (
											(t[0] = +t[0]) && (n += 1e4 * t[0]),
											(t[1] = +t[1]) && (n += 100 * t[1]),
											(t[2] = +t[2]) && (n += t[2]),
											n
										)
									})()) >= 20302 &&
										n < 40204) ||
									(n >= 5e4 && n < 50100) ||
									(n >= 50600 && n < 60200) ||
									!process.stdin.isTTY
								)
									try {
										;(b = o().open('CONIN$', t.O_RDWR, parseInt('0666', 8))),
											(s = new f(b, !0))
									} catch (e) {}
								else
									process.stdin.pause(),
										(b = process.stdin.fd),
										(s = process.stdin._handle)
								if (process.stdout.isTTY) r = process.stdout.fd
								else {
									try {
										r = _.openSync('\\\\.\\CON', 'w')
									} catch (e) {}
									if ('number' != typeof r)
										try {
											r = o().open('CONOUT$', t.O_RDWR, parseInt('0666', 8))
										} catch (e) {}
								}
							} else {
								if (process.stdin.isTTY) {
									process.stdin.pause()
									try {
										;(b = _.openSync('/dev/tty', 'r')),
											(s = process.stdin._handle)
									} catch (e) {}
								} else
									try {
										;(b = _.openSync('/dev/tty', 'r')), (s = new f(b, !1))
									} catch (e) {}
								if (process.stdout.isTTY) r = process.stdout.fd
								else
									try {
										r = _.openSync('/dev/tty', 'w')
									} catch (e) {}
							}
					})(),
					(function() {
						var n,
							c,
							u,
							l,
							f,
							p,
							d,
							h = !e.hideEchoBack && !e.keyIn
						function y(e) {
							return e === O || (0 === s.setRawMode(e) && ((O = e), !0))
						}
						if (
							((a = ''), !g && s && ('number' == typeof r || (!e.display && h)))
						) {
							if (
								(e.display && (_.writeSync(r, e.display), (e.display = '')),
								!e.displayOnly)
							)
								if (y(!h)) {
									for (
										l = e.keyIn ? 1 : e.bufferSize,
											u =
												Buffer.allocUnsafe && Buffer.alloc
													? Buffer.alloc(l)
													: new Buffer(l),
											e.keyIn &&
												e.limit &&
												(c = new RegExp(
													'[^' + e.limit + ']',
													'g' + (e.caseSensitive ? '' : 'i')
												));
										;

									) {
										f = 0
										try {
											f = _.readSync(b, u, 0, l)
										} catch (e) {
											if ('EOF' !== e.code) return y(!1), void (t += i())
										}
										if (
											(f > 0
												? ((p = u.toString(e.encoding, 0, f)), (a += p))
												: ((p = '\n'), (a += String.fromCharCode(0))),
											p &&
												'string' ==
													typeof (d = (p.match(/^(.*?)[\r\n]/) || [])[1]) &&
												((p = d), (n = !0)),
											p &&
												(p = p.replace(
													/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g,
													''
												)),
											p && c && (p = p.replace(c, '')),
											p &&
												(h ||
													(e.hideEchoBack
														? e.mask &&
														  _.writeSync(
																r,
																new Array(p.length + 1).join(e.mask)
														  )
														: _.writeSync(r, p)),
												(t += p)),
											(!e.keyIn && n) || (e.keyIn && t.length >= l))
										)
											break
									}
									h || o || _.writeSync(r, '\n'), y(!1)
								} else t = i()
						} else t = i()
					})(),
					e.print &&
						!o &&
						e.print(
							n +
								(e.displayOnly
									? ''
									: (e.hideEchoBack
											? new Array(t.length + 1).join(e.mask)
											: t) + '\n'),
							e.encoding
						),
					e.displayOnly ? '' : (m = e.keepWhitespace || e.keyIn ? t : t.trim())
				)
			}
			function j(e, t) {
				var n = []
				return (
					(function e(r) {
						null != r &&
							(Array.isArray(r) ? r.forEach(e) : (t && !t(r)) || n.push(r))
					})(e),
					n
				)
			}
			function k(e) {
				return e.replace(/[\x00-\x7f]/g, function(e) {
					return '\\x' + ('00' + e.charCodeAt().toString(16)).substr(-2)
				})
			}
			function x() {
				var e,
					t,
					n = Array.prototype.slice.call(arguments)
				return (
					n.length &&
						'boolean' == typeof n[0] &&
						(t = n.shift()) &&
						((e = Object.keys(h)), n.unshift(h)),
					n.reduce(function(n, r) {
						return (
							null == r ||
								(r.hasOwnProperty('noEchoBack') &&
									!r.hasOwnProperty('hideEchoBack') &&
									((r.hideEchoBack = r.noEchoBack), delete r.noEchoBack),
								r.hasOwnProperty('noTrim') &&
									!r.hasOwnProperty('keepWhitespace') &&
									((r.keepWhitespace = r.noTrim), delete r.noTrim),
								t || (e = Object.keys(r)),
								e.forEach(function(e) {
									var t
									if (r.hasOwnProperty(e))
										switch (((t = r[e]), e)) {
											case 'mask':
											case 'limitMessage':
											case 'defaultInput':
											case 'encoding':
												;(t = null != t ? t + '' : '') &&
													'limitMessage' !== e &&
													(t = t.replace(/[\r\n]/g, '')),
													(n[e] = t)
												break
											case 'bufferSize':
												isNaN((t = parseInt(t, 10))) ||
													'number' != typeof t ||
													(n[e] = t)
												break
											case 'displayOnly':
											case 'keyIn':
											case 'hideEchoBack':
											case 'caseSensitive':
											case 'keepWhitespace':
											case 'history':
											case 'cd':
												n[e] = !!t
												break
											case 'limit':
											case 'trueValue':
											case 'falseValue':
												n[e] = j(t, function(e) {
													var t = typeof e
													return (
														'string' === t ||
														'number' === t ||
														'function' === t ||
														e instanceof RegExp
													)
												}).map(function(e) {
													return 'string' == typeof e
														? e.replace(/[\r\n]/g, '')
														: e
												})
												break
											case 'print':
											case 'phContent':
											case 'preCheck':
												n[e] = 'function' == typeof t ? t : void 0
												break
											case 'prompt':
											case 'display':
												n[e] = null != t ? t : ''
										}
								})),
							n
						)
					}, {})
				)
			}
			function S(e, t, n) {
				return t.some(function(t) {
					var r = typeof t
					return 'string' === r
						? n
							? e === t
							: e.toLowerCase() === t.toLowerCase()
						: 'number' === r
						? parseFloat(e) === t
						: 'function' === r
						? t(e)
						: t instanceof RegExp && t.test(e)
				})
			}
			function C(e, t) {
				var n = d
					.normalize(
						u
							? (process.env.HOMEDRIVE || '') + (process.env.HOMEPATH || '')
							: process.env.HOME || ''
					)
					.replace(/[/\\]+$/, '')
				return (
					(e = d.normalize(e)),
					t
						? e.replace(/^~(?=\/|\\|$)/, n)
						: e.replace(
								new RegExp('^' + k(n) + '(?=\\/|\\\\|$)', u ? 'i' : ''),
								'~'
						  )
				)
			}
			function A(e, t) {
				var n = '(?:\\(([\\s\\S]*?)\\))?(\\w+|.-.)(?:\\(([\\s\\S]*?)\\))?',
					r = new RegExp('(\\$)?(\\$<' + n + '>)', 'g'),
					s = new RegExp('(\\$)?(\\$\\{' + n + '\\})', 'g')
				function o(e, n, r, s, o, i) {
					var c
					return n || 'string' != typeof (c = t(o))
						? r
						: c
						? (s || '') + c + (i || '')
						: ''
				}
				return e.replace(r, o).replace(s, o)
			}
			function I(e, t, n) {
				var r,
					s,
					o = [],
					i = -1,
					c = 0,
					a = ''
				function u(e, t) {
					return (
						t.length > 3
							? (e.push(t[0] + '...' + t[t.length - 1]), (s = !0))
							: t.length && (e = e.concat(t)),
						e
					)
				}
				return (
					(r = e
						.reduce(function(e, t) {
							return e.concat((t + '').split(''))
						}, [])
						.reduce(function(e, r) {
							var s, l
							return (
								t || (r = r.toLowerCase()),
								(s = /^\d$/.test(r)
									? 1
									: /^[A-Z]$/.test(r)
									? 2
									: /^[a-z]$/.test(r)
									? 3
									: 0),
								n && 0 === s
									? (a += r)
									: ((l = r.charCodeAt(0)),
									  s && s === i && l === c + 1
											? o.push(r)
											: ((e = u(e, o)), (o = [r]), (i = s)),
									  (c = l)),
								e
							)
						}, [])),
					(r = u(r, o)),
					a && (r.push(a), (s = !0)),
					{values: r, suppressed: s}
				)
			}
			function B(e, t) {
				return e.join(e.length > 2 ? ', ' : t ? ' / ' : '/')
			}
			function R(e, t) {
				var n,
					r,
					s,
					o = {}
				if ((t.phContent && (n = t.phContent(e, t)), 'string' != typeof n))
					switch (e) {
						case 'hideEchoBack':
						case 'mask':
						case 'defaultInput':
						case 'caseSensitive':
						case 'keepWhitespace':
						case 'encoding':
						case 'bufferSize':
						case 'history':
						case 'cd':
							n = t.hasOwnProperty(e)
								? 'boolean' == typeof t[e]
									? t[e]
										? 'on'
										: 'off'
									: t[e] + ''
								: ''
							break
						case 'limit':
						case 'trueValue':
						case 'falseValue':
							;(r = t[t.hasOwnProperty(e + 'Src') ? e + 'Src' : e]),
								(n = B(
									(r = t.keyIn
										? (o = I(r, t.caseSensitive)).values
										: r.filter(function(e) {
												var t = typeof e
												return 'string' === t || 'number' === t
										  })),
									o.suppressed
								))
							break
						case 'limitCount':
						case 'limitCountNotZero':
							n =
								(n =
									t[t.hasOwnProperty('limitSrc') ? 'limitSrc' : 'limit']
										.length) || 'limitCountNotZero' !== e
									? n + ''
									: ''
							break
						case 'lastInput':
							n = m
							break
						case 'cwd':
						case 'CWD':
						case 'cwdHome':
							;(n = process.cwd()),
								'CWD' === e
									? (n = d.basename(n))
									: 'cwdHome' === e && (n = C(n))
							break
						case 'date':
						case 'time':
						case 'localeDate':
						case 'localeTime':
							n = new Date()[
								'to' +
									e.replace(/^./, function(e) {
										return e.toUpperCase()
									}) +
									'String'
							]()
							break
						default:
							'string' == typeof (s = (e.match(/^history_m(\d+)$/) || [])[1]) &&
								(n = E[E.length - s] || '')
					}
				return n
			}
			function T(e) {
				var t,
					n,
					r,
					s,
					o = /^(.)-(.)$/.exec(e),
					i = ''
				if (!o) return null
				for (
					s = (t = o[1].charCodeAt(0)) < (n = o[2].charCodeAt(0)) ? 1 : -1,
						r = t;
					r !== n + s;
					r += s
				)
					i += String.fromCharCode(r)
				return i
			}
			function L(e) {
				var t,
					n,
					r = new RegExp(/(\s*)(?:("|')(.*?)(?:\2|$)|(\S+))/g),
					s = '',
					o = []
				for (e = e.trim(); (t = r.exec(e)); )
					(n = t[3] || t[4] || ''), t[1] && (o.push(s), (s = '')), (s += n)
				return s && o.push(s), o
			}
			function U(e, t) {
				return (
					!(!t.trueValue.length || !S(e, t.trueValue, t.caseSensitive)) ||
					((!t.falseValue.length || !S(e, t.falseValue, t.caseSensitive)) && e)
				)
			}
			function W(e) {
				var t, n, r, s, o, i, c
				function a(t) {
					return R(t, e)
				}
				function u(t) {
					e.display += (/[^\r\n]$/.test(e.display) ? '\n' : '') + t
				}
				for (
					e.limitSrc = e.limit,
						e.displaySrc = e.display,
						e.limit = '',
						e.display = A(e.display + '', a);
					;

				) {
					if (
						((t = P(e)),
						(n = !1),
						(r = ''),
						e.defaultInput && !t && (t = e.defaultInput),
						e.history &&
							((s = /^\s*!(?:!|-1)(:p)?\s*$/.exec(t))
								? ((o = E[0] || ''),
								  s[1] ? (n = !0) : (t = o),
								  u(o + '\n'),
								  n || ((e.displayOnly = !0), P(e), (e.displayOnly = !1)))
								: t && t !== E[E.length - 1] && (E = [t])),
						!n && e.cd && t)
					)
						switch ((i = L(t))[0].toLowerCase()) {
							case 'cd':
								if (i[1])
									try {
										process.chdir(C(i[1], !0))
									} catch (e) {
										u(e + '')
									}
								n = !0
								break
							case 'pwd':
								u(process.cwd()), (n = !0)
						}
					if (
						(!n &&
							e.preCheck &&
							((t = (c = e.preCheck(t, e)).res), c.forceNext && (n = !0)),
						!n)
					) {
						if (!e.limitSrc.length || S(t, e.limitSrc, e.caseSensitive)) break
						e.limitMessage && (r = A(e.limitMessage, a))
					}
					u((r ? r + '\n' : '') + A(e.displaySrc + '', a))
				}
				return U(t, e)
			}
			function K(e, n, r) {
				var s
				return (
					t.question(
						e,
						x({limitMessage: 'Input valid number, please.'}, n, {
							limit: function(e) {
								return (s = r(e)), !isNaN(s) && 'number' == typeof s
							},
							cd: !1
						})
					),
					s
				)
			}
			function F(e, t) {
				var n = {},
					r = {}
				return (
					'object' == typeof e
						? (Object.keys(e).forEach(function(n) {
								'function' == typeof e[n] &&
									(r[t.caseSensitive ? n : n.toLowerCase()] = e[n])
						  }),
						  (n.preCheck = function(e) {
								var s
								return (
									(n.args = L(e)),
									(s = n.args[0] || ''),
									t.caseSensitive || (s = s.toLowerCase()),
									(n.hRes =
										'_' !== s && r.hasOwnProperty(s)
											? r[s].apply(e, n.args.slice(1))
											: r.hasOwnProperty('_')
											? r._.apply(e, n.args)
											: null),
									{res: e, forceNext: !1}
								)
						  }),
						  r.hasOwnProperty('_') ||
								(n.limit = function() {
									var e = n.args[0] || ''
									return (
										t.caseSensitive || (e = e.toLowerCase()),
										r.hasOwnProperty(e)
									)
								}))
						: (n.preCheck = function(t) {
								return (
									(n.args = L(t)),
									(n.hRes = 'function' != typeof e || e.apply(t, n.args)),
									{res: t, forceNext: !1}
								)
						  }),
					n
				)
			}
			function q(e, n, r) {
				var s
				return (
					null == e && (e = 'Are you sure? '),
					(n && !1 === n.guide) ||
						!(e += '') ||
						(e = e.replace(/\s*:?\s*$/, '') + ' [y/n]: '),
					'boolean' ==
					typeof (s = t.keyIn(
						e,
						x(n, {
							hideEchoBack: !1,
							limit: r,
							trueValue: 'y',
							falseValue: 'n',
							caseSensitive: !1
						})
					))
						? s
						: ''
				)
			}
			function N(e, n) {
				var r
				return n.length && ((r = {})[e] = n[0]), t.setDefaultOptions(r)[e]
			}
			;(t._DBG_set_useExt = function(e) {
				g = e
			}),
				(t._DBG_set_checkOptions = function(e) {
					M = e
				}),
				(t._DBG_set_checkMethod = function(e) {
					v = e
				}),
				(t._DBG_clearHistory = function() {
					;(m = ''), (E = [])
				}),
				(t.setDefaultOptions = function(e) {
					return (h = x(!0, e)), x(!0)
				}),
				(t.question = function(e, t) {
					return W(x(x(!0, t), {display: e}))
				}),
				(t.prompt = function(e) {
					var t = x(!0, e)
					return (t.display = t.prompt), W(t)
				}),
				(t.keyIn = function(e, t) {
					var n = x(x(!0, t), {display: e, keyIn: !0, keepWhitespace: !0})
					return (
						(n.limitSrc = n.limit
							.filter(function(e) {
								var t = typeof e
								return 'string' === t || 'number' === t
							})
							.map(function(e) {
								return A(e + '', T)
							})),
						(n.limit = k(n.limitSrc.join(''))),
						['trueValue', 'falseValue'].forEach(function(e) {
							n[e] = n[e].reduce(function(e, t) {
								var n = typeof t
								return (
									'string' === n || 'number' === n
										? (e = e.concat((t + '').split('')))
										: e.push(t),
									e
								)
							}, [])
						}),
						(n.display = A(n.display + '', function(e) {
							return R(e, n)
						})),
						U(P(n), n)
					)
				}),
				(t.questionEMail = function(e, n) {
					return (
						null == e && (e = 'Input e-mail address: '),
						t.question(
							e,
							x(
								{
									hideEchoBack: !1,
									limit: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
									limitMessage: 'Input valid e-mail address, please.',
									trueValue: null,
									falseValue: null
								},
								n,
								{keepWhitespace: !1, cd: !1}
							)
						)
					)
				}),
				(t.questionNewPassword = function(e, n) {
					var r,
						s,
						o,
						i,
						c,
						a,
						u,
						l,
						_,
						f,
						p = x(
							{
								hideEchoBack: !0,
								mask: '*',
								limitMessage:
									'It can include: $<charlist>\nAnd the length must be: $<length>',
								trueValue: null,
								falseValue: null,
								caseSensitive: !0
							},
							n,
							{
								history: !1,
								cd: !1,
								phContent: function(e) {
									return 'charlist' === e
										? r.text
										: 'length' === e
										? s + '...' + o
										: null
								}
							}
						)
					for (
						i = A((n = n || {}).charlist ? n.charlist + '' : '$<!-~>', T),
							(isNaN((s = parseInt(n.min, 10))) || 'number' != typeof s) &&
								(s = 12),
							(isNaN((o = parseInt(n.max, 10))) || 'number' != typeof o) &&
								(o = 24),
							u = new RegExp('^[' + k(i) + ']{' + s + ',' + o + '}$'),
							(r = I([i], p.caseSensitive, !0)).text = B(
								r.values,
								r.suppressed
							),
							c =
								null != n.confirmMessage
									? n.confirmMessage
									: 'Reinput a same one to confirm it: ',
							a =
								null != n.unmatchMessage
									? n.unmatchMessage
									: 'It differs from first one. Hit only the Enter key if you want to retry from first one.',
							null == e && (e = 'Input new password: '),
							l = p.limitMessage;
						!f;

					)
						(p.limit = u),
							(p.limitMessage = l),
							(_ = t.question(e, p)),
							(p.limit = [_, '']),
							(p.limitMessage = a),
							(f = t.question(c, p))
					return _
				}),
				(t.questionInt = function(e, t) {
					return K(e, t, function(e) {
						return parseInt(e, 10)
					})
				}),
				(t.questionFloat = function(e, t) {
					return K(e, t, parseFloat)
				}),
				(t.questionPath = function(e, n) {
					var r,
						s = '',
						o = x(
							{
								hideEchoBack: !1,
								limitMessage:
									'$<error(\n)>Input valid path, please.$<( Min:)min>$<( Max:)max>',
								history: !0,
								cd: !0
							},
							n,
							{
								keepWhitespace: !1,
								limit: function(e) {
									var t, o, i
									function c(e) {
										e.split(/\/|\\/).reduce(function(e, t) {
											var n = d.resolve((e += t + d.sep))
											if (_.existsSync(n)) {
												if (!_.statSync(n).isDirectory())
													throw new Error('Non directory already exists: ' + n)
											} else _.mkdirSync(n)
											return e
										}, '')
									}
									;(e = C(e, !0)), (s = '')
									try {
										if (
											((t = _.existsSync(e)),
											(r = t ? _.realpathSync(e) : d.resolve(e)),
											(!n.hasOwnProperty('exists') && !t) ||
												('boolean' == typeof n.exists && n.exists !== t))
										)
											return (
												(s =
													(t ? 'Already exists' : 'No such file or directory') +
													': ' +
													r),
												!1
											)
										if (
											(!t &&
												n.create &&
												(n.isDirectory
													? c(r)
													: (c(d.dirname(r)), _.closeSync(_.openSync(r, 'w'))),
												(r = _.realpathSync(r))),
											t && (n.min || n.max || n.isFile || n.isDirectory))
										) {
											if (((o = _.statSync(r)), n.isFile && !o.isFile()))
												return (s = 'Not file: ' + r), !1
											if (n.isDirectory && !o.isDirectory())
												return (s = 'Not directory: ' + r), !1
											if (
												(n.min && o.size < +n.min) ||
												(n.max && o.size > +n.max)
											)
												return (
													(s = 'Size ' + o.size + ' is out of range: ' + r), !1
												)
										}
										if (
											'function' == typeof n.validate &&
											!0 !== (i = n.validate(r))
										)
											return 'string' == typeof i && (s = i), !1
									} catch (e) {
										return (s = e + ''), !1
									}
									return !0
								},
								phContent: function(e) {
									return 'error' === e
										? s
										: 'min' !== e && 'max' !== e
										? null
										: n.hasOwnProperty(e)
										? n[e] + ''
										: ''
								}
							}
						)
					return (
						(n = n || {}),
						null == e && (e = 'Input path (you can "cd" and "pwd"): '),
						t.question(e, o),
						r
					)
				}),
				(t.promptCL = function(e, n) {
					var r = x(
							{
								hideEchoBack: !1,
								limitMessage: 'Requested command is not available.',
								caseSensitive: !1,
								history: !0
							},
							n
						),
						s = F(e, r)
					return (
						(r.limit = s.limit), (r.preCheck = s.preCheck), t.prompt(r), s.args
					)
				}),
				(t.promptLoop = function(e, n) {
					for (
						var r = x(
							{
								hideEchoBack: !1,
								trueValue: null,
								falseValue: null,
								caseSensitive: !1,
								history: !0
							},
							n
						);
						!e(t.prompt(r));

					);
				}),
				(t.promptCLLoop = function(e, n) {
					var r = x(
							{
								hideEchoBack: !1,
								limitMessage: 'Requested command is not available.',
								caseSensitive: !1,
								history: !0
							},
							n
						),
						s = F(e, r)
					for (
						r.limit = s.limit, r.preCheck = s.preCheck;
						t.prompt(r), !s.hRes;

					);
				}),
				(t.promptSimShell = function(e) {
					return t.prompt(
						x({hideEchoBack: !1, history: !0}, e, {
							prompt: u
								? '$<cwd>>'
								: (process.env.USER || '') +
								  (process.env.HOSTNAME
										? '@' + process.env.HOSTNAME.replace(/\..*$/, '')
										: '') +
								  ':$<cwdHome>$ '
						})
					)
				}),
				(t.keyInYN = function(e, t) {
					return q(e, t)
				}),
				(t.keyInYNStrict = function(e, t) {
					return q(e, t, 'yn')
				}),
				(t.keyInPause = function(e, n) {
					null == e && (e = 'Continue...'),
						(n && !1 === n.guide) ||
							!(e += '') ||
							(e = e.replace(/\s+$/, '') + ' (Hit any key)'),
						t.keyIn(e, x({limit: null}, n, {hideEchoBack: !0, mask: ''}))
				}),
				(t.keyInSelect = function(e, n, r) {
					var s = x({hideEchoBack: !1}, r, {
							trueValue: null,
							falseValue: null,
							caseSensitive: !1,
							phContent: function(t) {
								return 'itemsCount' === t
									? e.length + ''
									: 'firstItem' === t
									? (e[0] + '').trim()
									: 'lastItem' === t
									? (e[e.length - 1] + '').trim()
									: null
							}
						}),
						o = '',
						i = {},
						c = 49,
						a = '\n'
					if (!Array.isArray(e) || !e.length || e.length > 35)
						throw '`items` must be Array (max length: 35).'
					return (
						e.forEach(function(e, t) {
							var n = String.fromCharCode(c)
							;(o += n),
								(i[n] = t),
								(a += '[' + n + '] ' + (e + '').trim() + '\n'),
								(c = 57 === c ? 97 : c + 1)
						}),
						(r && !1 === r.cancel) ||
							((o += '0'),
							(i[0] = -1),
							(a +=
								'[0] ' +
								(r && null != r.cancel && 'boolean' != typeof r.cancel
									? (r.cancel + '').trim()
									: 'CANCEL') +
								'\n')),
						(s.limit = o),
						(a += '\n'),
						null == n && (n = 'Choose one from list: '),
						(n += '') &&
							((r && !1 === r.guide) ||
								(n = n.replace(/\s*:?\s*$/, '') + ' [$<limit>]: '),
							(a += n)),
						i[t.keyIn(a, s).toLowerCase()]
					)
				}),
				(t.getRawInput = function() {
					return a
				}),
				(t.setPrint = function() {
					return N('print', arguments)
				}),
				(t.setPrompt = function() {
					return N('prompt', arguments)
				}),
				(t.setEncoding = function() {
					return N('encoding', arguments)
				}),
				(t.setMask = function() {
					return N('mask', arguments)
				}),
				(t.setBufferSize = function() {
					return N('bufferSize', arguments)
				})
		},
		function(module, __webpack_exports__, __webpack_require__) {
			'use strict'
			__webpack_require__.d(__webpack_exports__, 'a', function() {
				return Scope
			})
			var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8),
				_reader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3),
				_eval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14),
				_repl_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17),
				_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0),
				_printer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2),
				is_node__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7),
				is_node__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
					is_node__WEBPACK_IMPORTED_MODULE_6__
				)
			const normalizeURL = (() => {
				if (is_node__WEBPACK_IMPORTED_MODULE_6___default.a) {
					const e = __webpack_require__(10)
					return (t, n) => e.join(e.dirname(n), t)
				}
				return (e, t) => new URL(e, t).href
			})()
			class Scope {
				constructor(e = null, t = 'repl', n = null, r = !1) {
					;(this.outer = e),
						(this.name = t),
						(this.onSetup = n),
						(this.cache = r),
						this.setup(),
						null === this.outer ? this.initAsRoot() : (this.outer.inner = this)
				}
				initAsRoot() {
					let filename
					_repl_core__WEBPACK_IMPORTED_MODULE_3__.a.forEach(([e, t]) => {
						this.def(e, t)
					}),
						this.def('normalize-url', e => {
							const t = this.var('*filename*')
							return normalizeURL(e, t)
						}),
						this.def('eval', e =>
							Object(_eval__WEBPACK_IMPORTED_MODULE_2__.a)(e, this.env)
						),
						this.def('import-js-force', url => {
							const basename = this.var('*filename*'),
								absurl = normalizeURL(url, basename),
								text = Object(_repl_core__WEBPACK_IMPORTED_MODULE_3__.b)(absurl)
							eval(text)
							const exp = globalThis.glisp_library
							return Object(_eval__WEBPACK_IMPORTED_MODULE_2__.a)(exp, this.env)
						}),
						(filename = is_node__WEBPACK_IMPORTED_MODULE_6___default.a
							? '/Users/baku/Sites/glisp/repl/index.js'
							: new URL('.', document.baseURI).href),
						this.def('*filename*', filename),
						this.readEval(
							'(def import-force\n\t\t\t\t(fn [path]\n\t\t\t\t\t(let [url (normalize-url path)]\n\t\t\t\t\t\t(eval (read-string\n\t\t\t\t\t\t\t\t\t(format "(do (def *filename* \\"%s\\") %s \n nil)"\n\t\t\t\t\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t\t\t\t\t\t(slurp url)))))))'
						),
						this.readEval('(import-force "./lib/core.glisp")'),
						is_node__WEBPACK_IMPORTED_MODULE_6___default.a &&
							this.def('*filename*', process.cwd())
				}
				setup(e) {
					var t
					;(this.env = new _env__WEBPACK_IMPORTED_MODULE_0__.a(
						null === (t = this.outer) || void 0 === t ? void 0 : t.env
					)),
						(this.env.name = this.name),
						this.onSetup && e && this.onSetup(this, e),
						this.inner && this.inner.env.setOuter(this.env)
				}
				REP(e) {
					const t = this.readEval(e)
					void 0 !== t &&
						_printer__WEBPACK_IMPORTED_MODULE_5__.b.return(
							Object(_printer__WEBPACK_IMPORTED_MODULE_5__.a)(t)
						)
				}
				readEval(e) {
					try {
						return this.eval(Object(_reader__WEBPACK_IMPORTED_MODULE_1__.c)(e))
					} catch (e) {
						return e instanceof _reader__WEBPACK_IMPORTED_MODULE_1__.a
							? null
							: void (e instanceof _types__WEBPACK_IMPORTED_MODULE_4__.p
									? _printer__WEBPACK_IMPORTED_MODULE_5__.b.error(e)
									: _printer__WEBPACK_IMPORTED_MODULE_5__.b.error(e.stack))
					}
				}
				eval(e) {
					try {
						return Object(_eval__WEBPACK_IMPORTED_MODULE_2__.a)(
							e,
							this.env,
							this.cache
						)
					} catch (e) {
						return void (e instanceof _types__WEBPACK_IMPORTED_MODULE_4__.p
							? _printer__WEBPACK_IMPORTED_MODULE_5__.b.error(e)
							: _printer__WEBPACK_IMPORTED_MODULE_5__.b.error(e.stack))
					}
				}
				def(e, t) {
					this.env.set(Object(_types__WEBPACK_IMPORTED_MODULE_4__.M)(e), t)
				}
				pushBinding(e) {
					this.env.pushBinding(e)
				}
				popBinding() {
					this.env.popBinding()
				}
				var(e) {
					return this.env.get(Object(_types__WEBPACK_IMPORTED_MODULE_4__.M)(e))
				}
			}
		},
		function(e, t, n) {
			!(function(e) {
				var n = {
					not_string: /[^s]/,
					number: /[diefg]/,
					json: /[j]/,
					not_json: /[^j]/,
					text: /^[^\x25]+/,
					modulo: /^\x25{2}/,
					placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijosuxX])/,
					key: /^([a-z_][a-z_\d]*)/i,
					key_access: /^\.([a-z_][a-z_\d]*)/i,
					index_access: /^\[(\d+)\]/,
					sign: /^[\+\-]/
				}
				function r() {
					var e = arguments[0],
						t = r.cache
					return (
						(t[e] && t.hasOwnProperty(e)) || (t[e] = r.parse(e)),
						r.format.call(null, t[e], arguments)
					)
				}
				;(r.format = function(e, t) {
					var o,
						i,
						c,
						a,
						u,
						l,
						_,
						f,
						p = 1,
						d = e.length,
						h = '',
						b = [],
						O = !0,
						y = ''
					for (i = 0; i < d; i++)
						if ('string' === (h = s(e[i]))) b[b.length] = e[i]
						else if ('array' === h) {
							if ((a = e[i])[2])
								for (o = t[p], c = 0; c < a[2].length; c++) {
									if (!o.hasOwnProperty(a[2][c]))
										throw new Error(
											r("[sprintf] property '%s' does not exist", a[2][c])
										)
									o = o[a[2][c]]
								}
							else o = a[1] ? t[a[1]] : t[p++]
							if (
								('function' == s(o) && (o = o()),
								n.not_string.test(a[8]) &&
									n.not_json.test(a[8]) &&
									'number' != s(o) &&
									isNaN(o))
							)
								throw new TypeError(
									r('[sprintf] expecting number but found %s', s(o))
								)
							switch ((n.number.test(a[8]) && (O = o >= 0), a[8])) {
								case 'b':
									o = o.toString(2)
									break
								case 'c':
									o = String.fromCharCode(o)
									break
								case 'd':
								case 'i':
									o = parseInt(o, 10)
									break
								case 'j':
									o = JSON.stringify(o, null, a[6] ? parseInt(a[6]) : 0)
									break
								case 'e':
									o = a[7] ? o.toExponential(a[7]) : o.toExponential()
									break
								case 'f':
									o = a[7] ? parseFloat(o).toFixed(a[7]) : parseFloat(o)
									break
								case 'g':
									o = a[7] ? parseFloat(o).toPrecision(a[7]) : parseFloat(o)
									break
								case 'o':
									o = o.toString(8)
									break
								case 's':
									o = (o = String(o)) && a[7] ? o.substring(0, a[7]) : o
									break
								case 'u':
									o >>>= 0
									break
								case 'x':
									o = o.toString(16)
									break
								case 'X':
									o = o.toString(16).toUpperCase()
							}
							n.json.test(a[8])
								? (b[b.length] = o)
								: (!n.number.test(a[8]) || (O && !a[3])
										? (y = '')
										: ((y = O ? '+' : '-'),
										  (o = o.toString().replace(n.sign, ''))),
								  (l = a[4] ? ('0' === a[4] ? '0' : a[4].charAt(1)) : ' '),
								  (_ = a[6] - (y + o).length),
								  (u = a[6] && _ > 0 ? ((f = l), Array(_ + 1).join(f)) : ''),
								  (b[b.length] = a[5]
										? y + o + u
										: '0' === l
										? y + u + o
										: u + y + o))
						}
					return b.join('')
				}),
					(r.cache = {}),
					(r.parse = function(e) {
						for (var t = e, r = [], s = [], o = 0; t; ) {
							if (null !== (r = n.text.exec(t))) s[s.length] = r[0]
							else if (null !== (r = n.modulo.exec(t))) s[s.length] = '%'
							else {
								if (null === (r = n.placeholder.exec(t)))
									throw new SyntaxError('[sprintf] unexpected placeholder')
								if (r[2]) {
									o |= 1
									var i = [],
										c = r[2],
										a = []
									if (null === (a = n.key.exec(c)))
										throw new SyntaxError(
											'[sprintf] failed to parse named argument key'
										)
									for (
										i[i.length] = a[1];
										'' !== (c = c.substring(a[0].length));

									)
										if (null !== (a = n.key_access.exec(c))) i[i.length] = a[1]
										else {
											if (null === (a = n.index_access.exec(c)))
												throw new SyntaxError(
													'[sprintf] failed to parse named argument key'
												)
											i[i.length] = a[1]
										}
									r[2] = i
								} else o |= 2
								if (3 === o)
									throw new Error(
										'[sprintf] mixing positional and named placeholders is not (yet) supported'
									)
								s[s.length] = r
							}
							t = t.substring(r[0].length)
						}
						return s
					})
				function s(e) {
					return Object.prototype.toString
						.call(e)
						.slice(8, -1)
						.toLowerCase()
				}
				;(t.sprintf = r),
					(t.vsprintf = function(e, t, n) {
						return (n = (t || []).slice(0)).splice(0, 0, e), r.apply(null, n)
					})
			})('undefined' == typeof window || window)
		},
		,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		function(e, t, n) {
			'use strict'
			n.r(t)
			var r = n(22),
				s = n.n(r)
			const o = new (n(23).a)()
			if ('undefined' != typeof process && 2 < process.argv.length) {
				const e = process.argv[2]
				o.def('*ARGV*', process.argv.slice(3)),
					o.def('*filename*', e),
					o.REP(`(import "${e}")`),
					process.exit(0)
			}
			for (o.REP('(str "Glisp [" *host-language* "]")'); ; ) {
				const e = s.a.question('glisp> ')
				if (null == e) break
				if ('' !== e)
					try {
						o.REP(e)
					} catch (e) {
						console.error('Error:', e)
					}
			}
		},
		function(e, t) {
			e.exports = require('child_process')
		},
		function(e, t) {
			e.exports = require('os')
		}
	])
})
