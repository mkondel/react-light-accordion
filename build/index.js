!(function(e, t) {
  if ('object' === typeof exports && 'object' === typeof module)
    module.exports = t(require('react'), require('react-dom'));
  else if ('function' === typeof define && define.amd)
    define(['react', 'react-dom'], t);
  else {
    var n =
      'object' === typeof exports
        ? t(require('react'), require('react-dom'))
        : t(e.react, e['react-dom']);
    for (var r in n) ('object' === typeof exports ? exports : e)[r] = n[r];
  }
})(this, function(e, t) {
  return (function(e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var o = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function(e, n, r) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
          });
      }),
      (t.n = function(e) {
        var n =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return t.d(n, 'a', n), n;
      }),
      (t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ''),
      t((t.s = 1))
    );
  })([
    function(t, n) {
      t.exports = e;
    },
    function(e, t, n) {
      e.exports = n(2);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n(3),
        o = n(4);
      n.d(t, 'Accordion', function() {
        return r.a;
      }),
        n.d(t, 'AccordionItem', function() {
          return o.a;
        }),
        (t.default = r.a);
    },
    function(e, t, n) {
      'use strict';
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
      }
      function i(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var c = n(0),
        u = n.n(c),
        a = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        s = (function(e) {
          function t(e) {
            r(this, t);
            var n = o(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
            );
            return (n.state = {}), n;
          }
          return (
            i(t, e),
            a(t, [
              {
                key: 'renderChildren',
                value: function() {
                  var e = this;
                  return u.a.Children.map(this.props.children, function(t) {
                    return u.a.cloneElement(t, { atomic: e.props.atomic });
                  });
                }
              },
              {
                key: 'render',
                value: function() {
                  return u.a.createElement(
                    'div',
                    { className: 'accordion' },
                    this.renderChildren()
                  );
                }
              }
            ]),
            t
          );
        })(c.Component);
      t.a = s;
    },
    function(e, t, n) {
      'use strict';
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
      }
      function i(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var c = n(0),
        u = n.n(c),
        a = n(5),
        s = n.n(a),
        f = n(6),
        p = n.n(f),
        l = n(11),
        d = n.n(l),
        h = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        m = (function(e) {
          function t(e) {
            r(this, t);
            var n = o(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
            );
            return (
              (n.handleDocumentClick = function(e) {
                n.mounted &&
                  !s.a.findDOMNode(n).contains(e.target) &&
                  n.state.isOpen &&
                  !n.props.dontTriggerAction &&
                  n.setState({ isOpen: !1 });
              }),
              (n.onClick = function() {
                n.setState({ isOpen: !n.state.isOpen });
              }),
              (n.state = { isOpen: !1 }),
              (n.mounted = !0),
              n
            );
          }
          return (
            i(t, e),
            h(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.props.atomic &&
                    (document.addEventListener(
                      'click',
                      this.handleDocumentClick,
                      !1
                    ),
                    document.addEventListener(
                      'touchend',
                      this.handleDocumentClick,
                      !1
                    ));
                }
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  (this.mounted = !1),
                    document.removeEventListener(
                      'click',
                      this.handleDocumentClick,
                      !1
                    ),
                    document.removeEventListener(
                      'touchend',
                      this.handleDocumentClick,
                      !1
                    );
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = d()([
                    'accordion-item',
                    { active: this.state.isOpen }
                  ]);
                  return u.a.createElement(
                    'div',
                    { className: e },
                    u.a.createElement(
                      'button',
                      { className: 'title', onClick: this.onClick },
                      this.props.title
                    ),
                    u.a.createElement(
                      'div',
                      { className: 'panel' },
                      this.props.children
                    )
                  );
                }
              }
            ]),
            t
          );
        })(c.Component);
      (m.propTypes = { title: p.a.string, dontTriggerAction: p.a.bool }),
        (m.defaultProps = { title: 'TITLE', dontTriggerAction: !0 }),
        (t.a = m);
    },
    function(e, n) {
      e.exports = t;
    },
    function(e, t, n) {
      e.exports = n(7)();
    },
    function(e, t, n) {
      'use strict';
      var r = n(8),
        o = n(9),
        i = n(10);
      e.exports = function() {
        function e(e, t, n, r, c, u) {
          u !== i &&
            o(
              !1,
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
            );
        }
        function t() {
          return e;
        }
        e.isRequired = e;
        var n = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t
        };
        return (n.checkPropTypes = r), (n.PropTypes = n), n;
      };
    },
    function(e, t, n) {
      'use strict';
      function r(e) {
        return function() {
          return e;
        };
      }
      var o = function() {};
      (o.thatReturns = r),
        (o.thatReturnsFalse = r(!1)),
        (o.thatReturnsTrue = r(!0)),
        (o.thatReturnsNull = r(null)),
        (o.thatReturnsThis = function() {
          return this;
        }),
        (o.thatReturnsArgument = function(e) {
          return e;
        }),
        (e.exports = o);
    },
    function(e, t, n) {
      'use strict';
      function r(e, t, n, r, i, c, u, a) {
        if ((o(t), !e)) {
          var s;
          if (void 0 === t)
            s = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            );
          else {
            var f = [n, r, i, c, u, a],
              p = 0;
            (s = new Error(
              t.replace(/%s/g, function() {
                return f[p++];
              })
            )),
              (s.name = 'Invariant Violation');
          }
          throw ((s.framesToPop = 1), s);
        }
      }
      var o = function(e) {};
      e.exports = r;
    },
    function(e, t, n) {
      'use strict';
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    function(e, t, n) {
      var r, o;
      !(function() {
        'use strict';
        function n() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t];
            if (r) {
              var o = typeof r;
              if ('string' === o || 'number' === o) e.push(r);
              else if (Array.isArray(r)) e.push(n.apply(null, r));
              else if ('object' === o)
                for (var c in r) i.call(r, c) && r[c] && e.push(c);
            }
          }
          return e.join(' ');
        }
        var i = {}.hasOwnProperty;
        'undefined' !== typeof e && e.exports
          ? (e.exports = n)
          : ((r = []),
            void 0 !==
              (o = function() {
                return n;
              }.apply(t, r)) && (e.exports = o));
      })();
    }
  ]);
});
//# sourceMappingURL=index.js.map
