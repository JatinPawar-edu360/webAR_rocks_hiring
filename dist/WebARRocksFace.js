var WEBARROCKSFACE = (function() {
  window.WEBARROCKSFACE = (function() {
    function Mb(a) {
      var b = null,
        d = null,
        e = null,
        n = 0;
      this.v = function(p) {
        this.If(p.ob);
        e.Fe({ Bc: p.Bc, yc: p.yc });
      };
      this.$e = function(p) {
        return b[p];
      };
      this.If = function(p) {
        var q = null;
        n = p.length;
        b = p.map(function(r, l) {
          r = Object.assign({}, r, {
            index: l,
            parent: this,
            ub: q,
            mf: l === n - 1
          });
          return (q = l = 0 === l ? Nb.instance(r) : Ob.instance(r));
        });
        d = b[0];
        e = b[n - 1];
        b.forEach(function(r, l) {
          0 !== l && r.Af();
        });
      };
      this.X = function(p) {
        var q = p;
        b.forEach(function(r) {
          q = r.X(q, !1);
        });
        return q;
      };
      this.Ze = function() {
        return d.F();
      };
      this.cf = function() {
        return e.F();
      };
      this.bc = function() {
        return e.bf();
      };
      this.yd = function() {
        return e.yd();
      };
      this.m = function() {
        b &&
          (b.forEach(function(p) {
            p.m();
          }),
          (e = d = b = null),
          (n = 0));
      };
      "undefined" !== typeof a && this.v(a);
    }
    function hb(a, b) {
      var d = b % 8;
      return (a[(b - d) / 8] >> (7 - d)) & 1;
    }
    function Pb(a) {
      var b = JSON.parse(a);
      a = b.ne;
      var d = b.nf,
        e = b.n;
      var n =
        "undefined" === typeof btoa
          ? Buffer.from(b.data, "base64").toString("latin1")
          : atob(b.data);
      var p = n.length;
      b = new Uint8Array(p);
      for (var q = 0; q < p; ++q) b[q] = n.charCodeAt(q);
      n = new Float32Array(e);
      p = new Float32Array(d);
      q = a + d + 1;
      for (var r = 0; r < e; ++r) {
        for (
          var l = q * r,
            u = 0 === hb(b, l) ? 1 : -1,
            C = l + 1,
            D = 1,
            g = 0,
            t = C + a - 1;
          t >= C;
          --t
        )
          (g += D * hb(b, t)), (D *= 2);
        C = g;
        l = l + 1 + a;
        D = p.length;
        g = 0;
        for (t = l; t < l + D; ++t) (p[g] = hb(b, t, !0)), ++g;
        for (D = l = 0; D < d; ++D) l += p[D] * Math.pow(2, -D - 1);
        n[r] =
          0 === l && 0 === C
            ? 0
            : u * (1 + l) * Math.pow(2, 1 + C - Math.pow(2, a - 1));
      }
      return n;
    }
    function ab() {
      if (ea === da.play) return !1;
      if (null === A.element) return (ea = da.Sf), !1;
      ea = da.play;
      sa.ge();
      Ma.stop();
      ib();
      wb(0);
      return !0;
    }
    function jb() {
      if (ea !== da.play) return !1;
      Ma.stop();
      ea = da.pause;
      return !0;
    }
    function Ga(a, b, d, e, n) {
      a = 4 * (b * Aa + a) + d;
      return e + (Z.buffer[a] / 255 + Z.buffer[a + 4 * Aa] / 65025) * (n - e);
    }
    function ib() {
      wa.ia();
      Y.reset();
      V.reset();
      B.T();
      B.nd();
      c.disable(c.DEPTH_TEST);
      c.disable(c.BLEND);
      V.Ja();
      B.Da();
    }
    function Qb() {
      wa.S();
      c.viewport(0, 0, Aa, 2 * O.o);
      B.set("s53");
      Z.xa.g(0);
      Z.Bb.g(1);
      V.l(!1, !1);
      return aa.wb(0, 0, Aa, 2 * O.o, Z.buffer);
    }
    function Rb(a) {
      var b = Ra[a],
        d = kb[a],
        e = qa[a];
      a *= 2;
      b.Va = Ga(1, a, 3, 0, 1);
      e.detected = Ba.ma(e.detected, b.Va, fa.qe);
      e.isDetected = e.detected > pa.threshold;
      if (e.isDetected) {
        b.x = Ga(0, a, 1, -1, 1);
        b.y = Ga(0, a, 2, -1, 1);
        b.V = Ga(0, a, 3, 0, 1);
        b.Dc = Ga(1, a, 0, -Z.na[0], Z.na[0]);
        b.Ec = Ga(1, a, 1, -Z.na[1], Z.na[1]);
        b.Pa = Ga(1, a, 2, -Z.na[2], Z.na[2]);
        for (var n = 0; n < ma.vc; ++n) {
          var p = 2 + Math.floor(n / 2);
          b.nc[n][0] = Ga(p, a, (n % 2) * 2, -1.2, 1.2);
          b.nc[n][1] = Ga(p, a, (n % 2) * 2 + 1, -1.2, 1.2);
        }
        d.Ub = b.x - e.x;
        d.Vb = b.y - e.y;
        d.Tb = b.V - e.s;
        d.Qb = b.Dc - e.rx;
        d.Rb = b.Ec - e.ry;
        d.Sb = U.ta ? b.Pa : b.Pa - e.rz;
        a = sa.Ue();
        d = Ba.ma(
          xa.alphaRange[1],
          xa.alphaRange[0],
          Math.pow(
            (1 -
              lb.qc(
                xa.translationFactorRange[0],
                xa.translationFactorRange[1],
                Math.sqrt(d.Ub * d.Ub + d.Vb * d.Vb + d.Tb * d.Tb) / a
              )) *
              (1 -
                lb.qc(
                  xa.rotationFactorRange[0],
                  xa.rotationFactorRange[1],
                  Math.sqrt(d.Qb * d.Qb + d.Rb * d.Rb + d.Sb * d.Sb) / a
                )) *
              lb.qc(xa.qualityFactorRange[0], xa.qualityFactorRange[1], b.Va),
            fa.re
          )
        );
        ka.mode === ka.pb.zb &&
          ((ka.sa.Ya = Math.cos(Math.sqrt(Math.abs(e.ry)))),
          (ka.sa.Yb = ka.kd * Math.sin(e.ry)));
        e.x = Ba.ma(e.x, b.x, d);
        e.y = Ba.ma(e.y, b.y, d);
        e.s = Ba.ma(e.s, b.V, d);
        e.rx = Ba.ma(e.rx, b.Dc, d);
        e.ry = Ba.ma(e.ry, b.Ec, d);
        var q = 1,
          r = 0;
        U.ta
          ? ((q = Math.cos(e.rz)),
            (r = Math.sin(e.rz)),
            (e.rz += xa.followZRotAlphaFactor * d * b.Pa))
          : (e.rz = Ba.ma(e.rz, b.Pa, d));
        e.landmarks.forEach(function(l, u) {
          var C = ma.ed[u],
            D = b.nc[u];
          u = b.sf[u];
          var g = C[0] + D[0] / ma.Wb;
          C = C[1] + D[1] / ma.Wb;
          ka.mode === ka.pb.zb && (g = g * ka.sa.Ya + ka.sa.Yb * b.V);
          U.ta && ((D = C * q + g * r), (g = g * q - C * r), (C = D));
          u[0] = b.x + g * b.V;
          u[1] = b.y + C * b.V * Q.Ib;
          l[0] = u[0];
          l[1] = u[1];
        });
        ++b.Ca;
      } else
        U.ta && (e.rz = 0),
          ka.mode === ka.pb.zb && ((ka.sa.Ya = 1), (ka.sa.Yb = 0)),
          (b.Ca = Math.floor(b.Ca / 2));
    }
    function wb() {
      ea === da.play &&
        (pa.isCleanGLStateAtEachIteration &&
          (B.nd(), V.reset(), V.Ja(), c.disable(c.DEPTH_TEST), B.Da()),
        U.lc
          ? sa.Cc(Sb, Qb, Tb, xb, pa.animateProcessOrder)
          : (yb(), zb(), xb()));
    }
    function Sb() {
      wa.ia();
      A.kb || yb();
      var a = sa.af();
      if (O.Y.length > a) O.Y.splice(0, O.Y.length - a);
      else for (; O.Y.length < a; ) O.Y.push(0);
      if (1 !== O.o)
        if (qa.every(mb)) {
          for (var b = 0, d = 0, e = 0; e < qa.length; ++e)
            qa[e].detected > b && ((b = qa[e].detected), (d = 0));
          for (b = 0; b < a; ++b) O.Y[b] = d;
        } else {
          d = Math.round(fa.wf * a);
          d = Math.min(1, d);
          b = O.Od;
          for (var n = (e = 0); e < a; ++e) {
            if (mb(qa[b]) && ++n > d) {
              do ++b === O.o && (b = 0);
              while (mb(qa[b]));
            }
            O.Y[e] = b++;
            b %= O.o;
          }
          O.Od = b;
        }
      for (d = 0; d < a; ++d)
        (O.$ = O.Y[d]),
          (O.xc = (0.5 + O.$) / O.o),
          (O.Jd = O.Y.lastIndexOf(O.$) === d),
          B.set("s55"),
          ka.mode === ka.pb.zb && B.H("u44", ka.sa.Ya),
          U.ta && B.H("u43", qa[O.$].rz),
          1 !== O.o && B.H("u42", O.xc),
          Q.ua.ea(),
          A.I.g(1),
          Z.xa.g(0),
          V.l(!1, !1),
          Z.Bb.u(),
          B.set("s3"),
          c.viewport(0, O.$, Aa, 1),
          B.fa("u4", 1, 1 / O.o),
          B.fa("u5", 0, O.$ / O.o),
          V.l(!1, !1),
          Q.ua.g(0),
          Ca.X(Q.ua);
    }
    function zb() {
      wa.Yf();
      Y.reset();
      pa.isCleanGLStateAtEachIteration && (wa.reset(), c.enable(c.DEPTH_TEST));
      U.Kb && U.Kb(1 === O.o ? qa[0] : qa);
      pa.isCleanGLStateAtEachIteration && c.disable(c.BLEND);
    }
    function Tb() {
      for (var a = 0; a < O.o; ++a) -1 !== O.Y.indexOf(a) && Rb(a);
      zb();
    }
    function xb() {
      ea === da.play && Ma.Cc(wb);
    }
    function yb() {
      if (A.jb)
        A.element.needsUpdate &&
          (A.I.$f(A.element.arrayBuffer), (A.element.needsUpdate = !1));
      else {
        var a = A.element.currentTime,
          b = a - A.vb;
        0 > b && (A.vb = a);
        1e3 * b < fa.bg || ((A.vb += b), A.I.refresh());
      }
    }
    function Ub() {
      function a(n, p) {
        B.O(n, [{ name: "u38", type: "1f", value: p / Aa }]);
      }
      function b() {
        return ma.labels.map(function() {
          return [0, 0];
        });
      }
      function d(n) {
        for (var p = [], q = 0; q < O.o; ++q)
          p.push(JSON.parse(JSON.stringify(n)));
        return p;
      }
      Aa = 2 + ma.wc;
      var e = new Float32Array(4 * Aa);
      e = {
        width: Aa,
        height: O.o,
        isFloat: !0,
        isPot: !1,
        array: (function(n) {
          for (var p = new Float32Array(n.length * O.o), q = 0, r; q < O.o; ++q)
            for (r = 0; r < n.length; ++r) p[q * n.length + r] = n[r];
          return p;
        })(e)
      };
      Z.xa && Z.xa.remove();
      Z.xa = Vb.instance(e);
      Z.Bb = Y.instance(e);
      Z.buffer = new Uint8Array(8 * e.width * O.o);
      a("s54", 0.5);
      a("s53", 1);
      a("s55", 0.5);
      Ra = d({
        Va: 0,
        x: 0,
        y: 0,
        V: 1,
        Dc: 0,
        Ec: 0,
        Pa: 0,
        nc: b(),
        sf: b(),
        Ca: 0
      });
      qa = d({
        detected: 0,
        isDetected: !1,
        x: 0,
        y: 0,
        s: 1,
        rx: 0,
        ry: 0,
        rz: 0,
        landmarks: b()
      });
      kb = d({ Ub: 0, Vb: 0, Tb: 0, Qb: 0, Rb: 0, Sb: 0 });
    }
    function nb() {
      B.O("s55", [
        { type: "1i", name: "u1", value: 1 },
        { type: "1i", name: "u40", value: 0 },
        { type: "2f", name: "u41", value: Q.J },
        { type: "1f", name: "u42", value: 0.5 },
        { type: "1f", name: "u43", value: 0 },
        { type: "1f", name: "u44", value: 1 }
      ]);
      var a = [
        { type: "1i", name: "u45", value: 0 },
        { type: "1f", name: "u51", value: Z.size }
      ];
      B.O(
        "s54",
        [
          { type: "1i", name: "u40", value: 1 },
          { type: "1f", name: "u48", value: fa.Wf },
          { type: "1f", name: "u49", value: pa.threshold },
          {
            type: "3f",
            name: "u47",
            value: [Z.P[0] * Q.J[0], Z.P[1] * Q.J[1], Z.P[2]]
          },
          { type: "1f", name: "u42", value: 0.5 },
          { type: "1f", name: "u50", value: 1 },
          { type: "1f", name: "u43", value: 0 }
        ].concat(a)
      );
      B.O("s57", [{ type: "1f", name: "u50", value: 1 }].concat(a));
      B.O("s58", a);
      B.O("s53", [
        { type: "1i", name: "u40", value: 0 },
        { type: "1i", name: "u53", value: 1 },
        { type: "1f", name: "u55", value: Q.J[0] },
        { type: "2f", name: "u54", value: [0, 0.5 / O.o] }
      ]);
    }
    function ob() {
      Z.size = Ca.cf();
      Q.J[0] = 1;
      Q.J[1] = Q.B / Q.G;
      Ab.v({
        tb: pa.overlapFactors,
        Sd: pa.nScaleLevels,
        B: Q.B,
        G: Q.G,
        $d: pa.scale0Factor,
        P: Z.P,
        ae: pa.scanCenterFirst
      });
    }
    function Bb(a) {
      if (null !== U.Ra) Cb(U.Ra, a);
      else {
        var b = U.Fb;
        "JSON" !==
          b
            .toUpperCase()
            .split(".")
            .pop() && (b += fa.neuralNetworkPath);
        Db.get(b, function(d) {
          d = JSON.parse(d);
          Cb(d, a);
        });
      }
    }
    function Cb(a, b) {
      if (a.exportData) {
        var d = a.exportData;
        d.rotationEulerAnglesFactors && (Z.na = d.rotationEulerAnglesFactors);
        d.translationScalingFactors && (Z.P = d.translationScalingFactors);
        d.landmarksLabels &&
          ((ma.labels = d.landmarksLabels),
          (ma.vc = ma.labels.length),
          (ma.wc = Math.ceil(ma.vc / 2)));
        ma.ed = d.landmarksCenters
          ? d.landmarksCenters
          : ma.labels.map(function() {
              return [0, 0];
            });
        d.landmarksFactor && (ma.Wb = d.landmarksFactor);
        d.facegenMode &&
          ((ka.mode = d.facegenMode),
          d.facegenDisplaceXFactor && (ka.kd = d.facegenDisplaceXFactor));
      }
      b(a);
    }
    function Eb(a) {
      Ca = new Mb({ ob: a.layers, Bc: "gpuRawAvg", yc: Wb });
      Q.ua && Q.ua.remove();
      Q.ua = Y.instance({ isPot: !0, isFloat: !1, width: Ca.Ze() });
      Ub();
      ob();
      nb();
    }
    function Xb() {
      if (
        Na.v({
          Nb: U.Z,
          width: Q.B,
          height: Q.G,
          ic: !1,
          debug: !1,
          Td: function() {
            Oa("GLCONTEXT_LOST");
          },
          antialias: !1,
          premultipliedAlpha: !0
        })
      )
        return !0;
      Oa("GL_INCOMPATIBLE");
      return !1;
    }
    function mb(a) {
      return !a.isDetected;
    }
    function Fb(a, b, d, e) {
      return d > a
        ? Math.max(0, a + b / 2 - (d - e / 2))
        : Math.max(0, d + e / 2 - (a - b / 2));
    }
    function Yb() {
      return Ra.some(function(a, b) {
        if (b === O.$) return !1;
        b = Ra[O.$];
        if (b.Ca > a.Ca || 3 > a.Ca || Fb(b.x, b.V, a.x, a.V) < fa.Qd * b.V)
          return !1;
        var d = Q.B / Q.G;
        return Fb(b.y, b.V * d, a.y, a.V * d) > fa.Qd * b.V * d;
      });
    }
    function Wb() {
      var a = O.$,
        b = qa[a];
      Z.xa.Hf(1);
      1 !== O.o &&
        (c.viewport(0, 0, Aa, O.o),
        B.set("s0"),
        B.de("u1", 1),
        V.l(!1, !1),
        B.de("u1", 0));
      c.viewport(0, a, 1, 1);
      B.set("s54");
      U.ta && B.H("u43", b.rz);
      1 !== O.o && B.H("u42", O.xc);
      b = 1;
      1 < O.o && ((b = Yb() ? 0 : 1), B.H("u50", b));
      B.Nf("u46", Ab.get());
      V.l(!1, !1);
      O.Jd &&
        (c.viewport(1, a, 1, 1),
        B.set("s57"),
        1 < O.o && B.H("u50", b),
        V.l(!1, !1),
        c.viewport(2, a, ma.wc, 1),
        B.set("s58"),
        V.l(!1, !1));
    }
    function Gb() {
      A.I && A.I.remove();
      A.jb = A.element && A.element.isFakeVideo ? !0 : !1;
      var a = null;
      A.jb
        ? (a = {
            isFlipY: !1,
            array: A.element.arrayBuffer,
            width: A.element.videoWidth,
            height: A.element.videoHeight,
            isKeepArray: !0
          })
        : A.element && (a = { K: A.element });
      A.Jc = Y.instance(
        Object.assign({ isPot: !1, isLinear: !0, isFloat: !1 }, a)
      );
      A.I = A.Jc;
    }
    function Ua() {
      var a = [{ type: "mat2", name: "u39", value: A.C }];
      B.O("s56", [{ type: "1i", name: "u1", value: 0 }].concat(a));
      B.O("s55", a);
    }
    function Sa() {
      A.N[0] = 0.5;
      A.N[1] = 0.5;
      var a = A.J[1] / A.J[0],
        b = Na.W() / Na.F();
      90 === Math.abs(ta.rotate) && (a = 1 / a);
      a > b ? (A.N[1] *= b / a) : (A.N[0] *= a / b);
      B.O("s54", [{ name: "u52", type: "1f", value: b }]);
      A.C[0] = 0;
      A.C[1] = 0;
      A.C[2] = 0;
      A.C[3] = 0;
      switch (ta.rotate) {
        case 0:
          A.C[0] = A.N[0];
          A.C[3] = A.N[1];
          break;
        case 180:
          A.C[0] = -A.N[0];
          A.C[3] = -A.N[1];
          break;
        case 90:
          A.C[1] = A.N[0];
          A.C[2] = -A.N[1];
          break;
        case -90:
          (A.C[1] = -A.N[0]), (A.C[2] = A.N[1]);
      }
      A.kb || ((A.C[1] *= -1), (A.C[3] *= -1));
    }
    function pb() {
      var a = A.element.videoWidth,
        b = A.element.videoHeight,
        d = A.J[0] !== a || A.J[1] !== b;
      d && ((A.J[0] = a), (A.J[1] = b));
      return d;
    }
    function bb(a, b) {
      if (ea === da.error) return !1;
      A.element = a;
      pb();
      b && b();
      return !0;
    }
    function Hb(a, b, d) {
      a && a();
      A.La = {
        video: {
          facingMode: { ideal: ta.facingMode },
          width: { min: ta.minWidth, max: ta.maxWidth, ideal: ta.idealWidth },
          height: {
            min: ta.minHeight,
            max: ta.maxHeight,
            ideal: ta.idealHeight
          }
        },
        audio: !1
      };
      X.Yc(A.La, ta.deviceId);
      X.get(
        A.element ? A.element : X.ef(),
        function(e) {
          b && b(e);
          d(e);
        },
        function() {
          Oa("WEBCAM_UNAVAILABLE");
        },
        A.La
      );
    }
    function Oa(a) {
      ea !== da.error && ((ea = da.error), U.Ka && U.Ka(a));
    }
    var qb = null,
      Ba = {
        dh: function(a) {
          return Math.ceil(Math.log2(a));
        },
        vh: function(a) {
          return Math.log2(a);
        },
        sh: function(a) {
          return 0 === Math.log2(a) % 1;
        },
        lg: function(a) {
          var b = [0, 0, 0, 0];
          a.forEach(function(d) {
            b[0] += d[0];
            b[1] += d[1];
            b[2] += d[2];
            b[3] += d[3];
          });
          return b;
        },
        mg: function(a, b, d) {
          return Math.min(Math.max(a, b), d);
        },
        pg: function(a) {
          return (a * Math.PI) / 180;
        },
        Ch: function(a, b) {
          b = Math.pow(10, b);
          return Math.round(a * b) / b;
        },
        Dh: function(a) {
          return Math.round(1e6 * a) / 1e6;
        },
        eh: function(a, b) {
          return ((100 * a) / b).toFixed(3);
        },
        ma: function(a, b, d) {
          return a * (1 - d) + b * d;
        },
        Ke: function(a, b) {
          return Ba.Ce(a - b);
        },
        Ce: function(a) {
          for (; a > Math.PI; ) a -= 2 * Math.PI;
          for (; a <= -Math.PI; ) a += 2 * Math.PI;
          return a;
        },
        yg: function(a, b) {
          return Math.abs(Ba.Ke(a, b));
        },
        cg: function(a, b) {
          return Math.atan2(
            Math.sin(a) + Math.sin(b),
            Math.cos(a) + Math.cos(b)
          );
        }
      },
      Db = {
        get: function(a, b, d) {
          var e = new XMLHttpRequest();
          e.open("GET", a, !0);
          e.withCredentials = !1;
          e.onreadystatechange = function() {
            4 === e.readyState &&
              (200 === e.status || 0 === e.status
                ? b(e.responseText)
                : "undefined" !== typeof d && d(e.status));
          };
          e.send();
        },
        $g: function(a, b) {
          Db.get(a, function(d) {
            b(JSON.parse(d));
          });
        },
        yh: function(a, b, d) {
          var e = new XMLHttpRequest();
          e.open("POST", a, !0);
          e.setRequestHeader(
            "Content-type",
            "application/x-www-form-urlencoded"
          );
          e.onreadystatechange = function() {
            4 !== e.readyState ||
              (200 !== e.status && 0 !== e.status) ||
              d(e.responseText);
          };
          e.send(b);
        },
        Pg: function(a, b) {
          var d = new XMLHttpRequest();
          d.open("POST", a, !0);
          d.responseType = "arraybuffer";
          d.onload = function() {
            b(d.response);
          };
          d.send();
        }
      },
      Zb = {
        create: function(a, b) {
          for (var d = Array(b), e = 0; e < b; ++e) d[e] = a;
          return d;
        },
        qg: function(a, b) {
          for (var d = 0; d < a.length; ++d) b[d] = a[d];
        },
        clone: function(a) {
          for (var b = Array(a.length), d = 0; d < a.length; ++d) b[d] = a[d];
          return b;
        },
        Gh: function(a, b, d) {
          a.forEach(function(e, n) {
            b[n] = e * d;
          });
        },
        Ph: function(a) {
          for (var b = a.length - 1; 0 < b; --b) {
            var d = Math.floor(Math.random() * (b + 1)),
              e = a[b];
            a[b] = a[d];
            a[d] = e;
          }
        },
        Rh: function(a) {
          return a.sort(function(b, d) {
            return b - d;
          });
        },
        Vf: function(a) {
          return (
            Array.isArray(a) ||
            a.constructor === Float32Array ||
            a.constructor === Uint8Array
          );
        }
      },
      rb = {
        Ob: function(a, b) {
          if (0 === b || "object" !== typeof a) return a;
          a = Object.assign({}, a);
          b = void 0 === b || -1 === b ? -1 : b - 1;
          for (var d in a) a[d] = rb.Ob(a[d], b);
          return a;
        }
      },
      lb = {
        Qh: function(a, b, d) {
          a = Math.min(Math.max((d - a) / (b - a), 0), 1);
          return a * a * (3 - 2 * a);
        },
        qc: function(a, b, d) {
          return Math.min(Math.max((d - a) / (b - a), 0), 1);
        },
        Jg: function(a, b, d, e) {
          return Math.pow(Math.min(Math.max((e - a) / (b - a), 0), 1), d);
        },
        Vh: function() {
          return 0;
        },
        xh: function() {
          return 1;
        },
        uh: function(a) {
          return a;
        },
        Gg: function(a) {
          return a * a;
        },
        Lg: function(a) {
          return a * (2 - a);
        },
        Dg: function(a) {
          return 0.5 > a ? 2 * a * a : -1 + (4 - 2 * a) * a;
        },
        Bg: function(a) {
          return a * a * a;
        },
        Kg: function(a) {
          return --a * a * a + 1;
        },
        Cg: function(a) {
          return 0.5 > a
            ? 4 * a * a * a
            : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1;
        },
        Hg: function(a) {
          return a * a * a * a;
        },
        Mg: function(a) {
          return 1 - --a * a * a * a;
        },
        Eg: function(a) {
          return 0.5 > a ? 8 * a * a * a * a : 1 - 8 * --a * a * a * a;
        },
        Ig: function(a) {
          return a * a * a * a * a;
        },
        Ng: function(a) {
          return 1 + --a * a * a * a * a;
        },
        Fg: function(a) {
          return 0.5 > a
            ? 16 * a * a * a * a * a
            : 1 + 16 * --a * a * a * a * a;
        }
      },
      $b = {
        Pe: function(a, b, d) {
          switch (a) {
            case "relu":
              return d + "=max(vec4(0.,0.,0.,0.)," + b + ");";
            case "elu":
              return (
                d +
                "=mix(exp(-abs(" +
                b +
                "))-vec4(1.,1.,1.,1.)," +
                b +
                ",step(0.," +
                b +
                "));"
              );
            case "elu01":
              return (
                d +
                "=mix(0.1*exp(-abs(" +
                b +
                "))-vec4(0.1,0.1,0.1,0.1)," +
                b +
                ",step(0.," +
                b +
                "));"
              );
            case "arctan":
              return (
                d + "=atan(3.14159265359*texture2D(u0,vUV))/3.14159265359;"
              );
            case "copy":
              return "";
            default:
              return !1;
          }
        }
      },
      B = (function() {
        function a(v, f, y) {
          f = v.createShader(f);
          v.shaderSource(f, y);
          v.compileShader(f);
          return v.getShaderParameter(f, v.COMPILE_STATUS) ? f : !1;
        }
        function b(v, f, y) {
          f = a(v, v.VERTEX_SHADER, f);
          y = a(v, v.FRAGMENT_SHADER, y);
          v === c && q.push(f, y);
          var G = v.createProgram();
          v.attachShader(G, f);
          v.attachShader(G, y);
          v.linkProgram(G);
          return G;
        }
        function d(v, f) {
          f.D = f.D ? !0 : !1;
          if (!f.D) {
            void 0 === f.ya &&
              (f.ya =
                "precision lowp float;attribute vec2 a0;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=a0*.5+vec2(.5,.5);}");
            void 0 === f.Ta && (f.Ta = ["a0"]);
            void 0 === f.Ha && (f.Ha = [2]);
            if (void 0 === f.precision || "highp" === f.precision)
              f.precision = D;
            f.id = u++;
            void 0 !== f.be &&
              (f.be.forEach(function(G, L) {
                f.h = f.h.replace(G, f.xb[L]);
              }),
              f.be.splice(0));
            f.Rc = 0;
            f.Ha.forEach(function(G) {
              f.Rc += 4 * G;
            });
            f.wa = b(v, f.ya, "precision " + f.precision + " float;\n" + f.h);
            f.A = {};
            f.i.forEach(function(G) {
              f.A[G] = v.getUniformLocation(f.wa, G);
            });
            f.attributes = {};
            f.Ia = [];
            f.Ta.forEach(function(G) {
              var L = v.getAttribLocation(f.wa, G);
              f.attributes[G] = L;
              f.Ia.push(L);
            });
            if (f.j) {
              v.useProgram(f.wa);
              l = f;
              r = f.id;
              for (var y in f.j) v.uniform1i(f.A[y], f.j[y]);
            }
            f.va = !0;
          }
        }
        function e(v) {
          ya.Lf(M);
          r !== v.id &&
            (M.T(),
            (r = v.id),
            (l = v),
            c.useProgram(v.wa),
            v.Ia.forEach(function(f) {
              0 !== f && c.enableVertexAttribArray(f);
            }));
        }
        function n(v, f, y) {
          d(v, f, y);
          v.useProgram(f.wa);
          v.enableVertexAttribArray(0);
          r = -1;
          return (l = f);
        }
        function p() {
          return {
            h:
              "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",
            i: ["u1"],
            j: { u1: 0 }
          };
        }
        var q = [],
          r = -1,
          l = null,
          u = 0,
          C = !1,
          D = "highp",
          g = ["u1"],
          t = ["u0"],
          x = { u1: 0 },
          k = { u0: 0 },
          m = { u1: 0, u2: 1 },
          H = { u3: 0 },
          I = {
            s0: p(),
            s1: {
              h:
                "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",
              i: g,
              j: x,
              precision: "lowp"
            },
            s2: {
              h:
                "uniform sampler2D u1,u2;varying vec2 vv0;void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a*b;}",
              i: ["u1", "u2"],
              j: m
            },
            s3: {
              h:
                "uniform sampler2D u1;uniform vec2 u4,u5;varying vec2 vv0;void main(){vec2 a=vv0*u4+u5;gl_FragColor=texture2D(u1,a);}",
              i: ["u1", "u4", "u5"],
              j: x,
              D: !0
            },
            s4: {
              h:
                "uniform sampler2D u1;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a.r*f;}",
              i: g,
              j: x
            },
            s5: {
              h:
                "uniform sampler2D u1,u2;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a.a*b.r*f;}",
              i: ["u1", "u2"],
              j: m
            },
            s6: {
              h:
                "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(1.-vv0.x,vv0.y));}",
              i: g,
              j: x
            },
            s7: {
              h:
                "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(vv0.x,1.-vv0.y));}",
              i: g,
              j: x
            },
            s8: {
              h:
                "uniform sampler2D u0;uniform float u4;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=a*u4;}",
              i: ["u0", "u4"],
              j: k
            },
            s9: {
              h:
                "uniform sampler2D u0;uniform float u4;varying vec2 vv0;const vec4 f=vec4(.25,.25,.25,.25),g=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0);float b=dot(a*u4,f);gl_FragColor=b*g;}",
              i: ["u0", "u4"],
              j: k
            },
            s10: {
              h:
                "uniform sampler2D u1;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){float a=.25*dot(e,texture2D(u1,vv0));gl_FragColor=a*e;}",
              i: g,
              j: x
            },
            s11: {
              h:
                "uniform sampler2D u1,u6;uniform float u7;const vec4 f=vec4(1.,1.,1.,1.);varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0),b=texture2D(u6,vv0);gl_FragColor=mix(b,a,u7*f);}",
              i: ["u1", "u6", "u7"],
              j: { u1: 0, u6: 1 }
            },
            s12: {
              h:
                "uniform sampler2D u1;uniform vec2 u8;varying vec2 vv0;void main(){gl_FragColor=.25*(texture2D(u1,vv0+u8)+texture2D(u1,vv0+u8*vec2(1.,-1.))+texture2D(u1,vv0+u8*vec2(-1.,-1.))+texture2D(u1,vv0+u8*vec2(-1.,1.)));}",
              i: ["u1", "u8"],
              j: x
            },
            s13: {
              h:
                "uniform sampler2D u1;uniform vec4 u9;varying vec2 vv0;float g(float a,float b){a=floor(a)+.5;return floor(a/exp2(b));}float h(float a,float b){return floor(a*exp2(b)+.5);}float i(float a,float b){return mod(a,h(1.,b));}float e(float c,float a,float b){a=floor(a+.5),b=floor(b+.5);return i(g(c,a),b-a);}vec4 j(float a){if(a==0.)return vec4(0.,0.,0.,0.);float k=128.*step(a,0.);a=abs(a);float c=floor(log2(a)),l=c+127.,b=(a/exp2(c)-1.)*8388608.,d=l/2.,m=fract(d)*2.,n=floor(d),o=e(b,0.,8.),p=e(b,8.,16.),q=m*128.+e(b,16.,23.),r=k+n;return vec4(o,p,q,r)/255.;}void main(){float a=dot(texture2D(u1,vv0),u9);gl_FragColor=j(a);}",
              i: ["u1", "u9"],
              j: x
            },
            s14: {
              h:
                "uniform sampler2D u0;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=e/(e+exp(-a));gl_FragColor=b;}",
              i: t,
              j: k,
              D: !0
            },
            s15: {
              h:
                "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(0.,0.,0.,0.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=max(f,a);}",
              i: t,
              j: k
            },
            s16: {
              h:
                "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=mix(exp(-abs(a))-f,a,step(0.,a));}",
              i: t,
              j: k
            },
            s17: {
              h:
                "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=exp(-abs(a))-f;gl_FragColor=mix(.1*b,a,step(0.,a));}",
              i: t,
              j: k
            },
            s18: {
              h:
                "uniform sampler2D u0,u7,u10;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),c=texture2D(u7,vv0),d=texture2D(u10,vv0),b=a/d;gl_FragColor=c*mix(exp(-abs(b))-f,b,step(0.,a));}",
              i: ["u0", "u7", "u10"],
              j: { u0: 0, u7: 1, u10: 2 },
              D: !0
            },
            s19: {
              h:
                "uniform sampler2D u0;const float e=3.141593;varying vec2 vv0;void main(){gl_FragColor=atan(e*texture2D(u0,vv0))/e;}",
              i: t,
              j: k
            },
            s20: {
              h:
                "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=log(f+a);gl_FragColor=b;}",
              i: t,
              j: k,
              D: !0
            },
            s21: {
              h:
                "uniform sampler2D u0,u11;uniform float u12;const vec2 e=vec2(.5,.5);const float f=1e-5;const vec4 g=vec4(1.,1.,1.,1.),i=vec4(0.,0.,0.,0.);varying vec2 vv0;void main(){vec4 a=texture2D(u11,e);float b=u12*u12;vec4 c=max(b*a,f*g);gl_FragColor=texture2D(u0,vv0)/c;}",
              i: ["u0", "u11", "u12"],
              j: { u0: 0, u11: 1 },
              D: !0
            },
            s22: {
              h:
                "uniform sampler2D u1;uniform vec2 u13;varying vec2 vv0;void main(){float a=u13.x*u13.y;vec2 b=floor(vv0*a)/a,c=fract(vv0*a),d=floor(b*u13.y),f=floor(u13.x*fract(b*u13.y)),g=(f*u13.y+d)/a;gl_FragColor=texture2D(u1,g+c/a);}",
              i: ["u1", "u13"],
              j: x
            },
            s23: {
              h:
                "uniform sampler2D u14,u15,u16;varying vec2 vv0;void main(){vec4 a=texture2D(u16,vv0);vec2 b=a.rg,c=a.ba;vec4 d=texture2D(u14,b),f=texture2D(u15,c);gl_FragColor=d*f;}",
              i: ["u14", "u15", "u16"],
              j: { u15: 0, u14: 1, u16: 2 },
              D: !0
            },
            s24: {
              h:
                "uniform float u17;uniform sampler2D u14,u15;varying vec2 vv0;void main(){vec2 a=fract(vv0*u17);vec4 b=texture2D(u14,vv0),c=texture2D(u15,a);gl_FragColor=b*c;}",
              i: ["u15", "u14", "u17"],
              j: { u15: 0, u14: 1 }
            },
            s25: {
              h:
                "uniform float u17;uniform sampler2D u14,u15,u18,u19,u20,u21;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.),g=vec4(1e-3,1e-3,1e-3,1e-3);void main(){vec2 h=vv0*u17,l=floor(h),c=h-l;vec4 m=texture2D(u14,vv0),d=texture2D(u15,c),a=texture2D(u21,vv0);a=a*255.;vec4 n=texture2D(u18,c),o=texture2D(u19,c),p=texture2D(u20,c),i=step(-g,-a),b=e-i,j=b*step(-e-g,-a);b*=e-j;vec4 k=b*step(-2.*e-g,-a);b*=e-k;vec4 q=b;d=i*d+j*n+k*o+q*p,gl_FragColor=m*d;}",
              i: "u14 u15 u17 u21 u18 u19 u20".split(" "),
              j: { u15: 0, u14: 1, u21: 3, u18: 4, u19: 5, u20: 6 },
              D: !0
            },
            s26: {
              h:
                "uniform sampler2D u14,u15,u22;uniform float u17,u23,u24,u25;varying vec2 vv0;const vec2 j=vec2(1.,1.);void main(){vec2 a=floor(u23*vv0),b=u23*vv0-a;float c=u17/u23;vec2 d=floor(b*c),f=b*c-d,g=(a+f)/u23;float k=u23*u25/u17;vec2 l=k*d,h=(l+f*u24)/u25,i=step(h,j);vec4 m=texture2D(u14,g),n=texture2D(u15,h),o=m*n*i.x*i.y,p=texture2D(u22,g);gl_FragColor=o*u24*u24+p;}",
              i: "u14 u15 u17 u23 u24 u25 u22".split(" "),
              j: { u15: 0, u14: 1, u22: 2 }
            },
            s27: {
              h:
                "uniform sampler2D u14,u15;varying vec2 vv0;void main(){vec4 a=texture2D(u14,vv0),b=texture2D(u15,vv0);gl_FragColor=a*b;}",
              i: ["u14", "u15"],
              j: { u15: 0, u14: 1 },
              D: !0
            },
            s28: {
              h:
                "uniform sampler2D u1,u22;uniform float u26;varying vec2 vv0;void main(){gl_FragColor=texture2D(u22,vv0)+u26*texture2D(u1,vv0);}",
              i: ["u1", "u22", "u26"],
              j: { u1: 0, u22: 1 }
            },
            s29: {
              h:
                "varying vec2 vv0;uniform sampler2D u1;const vec4 f=vec4(1.,1.,1.,1.),g=vec4(.299,.587,.114,0.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=dot(a,g)*f;}",
              i: g,
              j: x,
              precision: "lowp"
            },
            s30: {
              h:
                "varying vec2 vv0;uniform sampler2D u1;uniform float u27;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u27)).rgb,c=texture2D(u1,vv0+vec2(u27,u27)).rgb,d=texture2D(u1,vv0+vec2(u27,0.)).rgb;gl_FragColor=vec4(dot(a,f),dot(b,f),dot(c,f),dot(d,f));}",
              i: ["u1", "u27"],
              j: x,
              precision: "lowp"
            },
            s31: {
              h:
                "varying vec2 vv0;uniform sampler2D u1;uniform float u27;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u27)).rgb,c=texture2D(u1,vv0+vec2(u27,u27)).rgb,d=texture2D(u1,vv0+vec2(u27,0.)).rgb;gl_FragColor=vec4(a.r,b.g,c.b,dot(d,f));}",
              i: ["u1", "u27"],
              j: x,
              precision: "lowp"
            },
            s32: {
              h:
                "varying vec2 vv0;uniform sampler2D u1,u2;uniform float u28;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=vec4(0.);a-=texture2D(u1,vec2(vv0.x-u28,vv0.y-u28))*1.,a-=texture2D(u1,vec2(vv0.x-u28,vv0.y))*2.,a-=texture2D(u1,vec2(vv0.x-u28,vv0.y+u28))*1.,a+=texture2D(u1,vec2(vv0.x+u28,vv0.y-u28))*1.,a+=texture2D(u1,vec2(vv0.x+u28,vv0.y))*2.,a+=texture2D(u1,vec2(vv0.x+u28,vv0.y+u28))*1.;vec4 b=vec4(0.);b-=texture2D(u1,vec2(vv0.x-u28,vv0.y-u28))*1.,b-=texture2D(u1,vec2(vv0.x,vv0.y-u28))*2.,b-=texture2D(u1,vec2(vv0.x+u28,vv0.y-u28))*1.,b+=texture2D(u1,vec2(vv0.x-u28,vv0.y+u28))*1.,b+=texture2D(u1,vec2(vv0.x,vv0.y+u28))*2.,b+=texture2D(u1,vec2(vv0.x+u28,vv0.y+u28))*1.;vec3 c=sqrt(a.rgb*a.rgb+b.rgb*b.rgb);vec4 e=vec4(c,texture2D(u1,vv0).a),g=texture2D(u2,vv0);gl_FragColor=g.a*e.r*f;}",
              i: ["u1", "u2", "u28"],
              j: m,
              D: !0
            },
            s33: {
              h:
                "varying vec2 vv0;uniform sampler2D u1,u2;uniform float u28;const vec4 j=vec4(1.,1.,1.,1.);const vec2 k=vec2(1.,1.);void main(){float h=0.;vec2 l=k*u28,a,b;float c,d,i=0.;for(float e=-4.;e<=4.;e+=1.)for(float f=-4.;f<=4.;f+=1.)a=vec2(e,f),c=length(a)/2.,d=exp(-c*c),b=vv0+l*a,h+=d*texture2D(u1,b).r,i+=d;vec4 m=texture2D(u2,vv0);gl_FragColor=m.a*(texture2D(u1,b).r-h/i)*j;}",
              i: ["u1", "u2", "u28"],
              j: m,
              D: !0
            },
            s34: {
              h:
                "uniform sampler2D u3;uniform vec2 u8;varying vec2 vv0;vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}const vec2 g=vec2(.5,.5),h=vec2(1.,0.),i=vec2(0.,1.);void main(){vec2 a=vv0-u8*g;vec4 b=texture2D(u3,a),c=texture2D(u3,a+u8*h),d=texture2D(u3,a+u8*i),j=texture2D(u3,a+u8),k=e(b,c),l=e(d,j);gl_FragColor=e(k,l);}",
              i: ["u3", "u8"],
              j: H
            },
            s35: {
              h:
                "uniform sampler2D u3;uniform vec2 u8;varying vec2 vv0;const vec2 k=vec2(1.,0.),l=vec2(0.,1.),m=vec2(2.,0.),n=vec2(0.,2.);vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}vec4 f(vec2 a){vec4 b=texture2D(u3,a),c=texture2D(u3,a+u8*k),d=texture2D(u3,a+u8*l),g=texture2D(u3,a+u8),h=e(b,c),i=e(d,g);return e(h,i);}void main(){vec2 a=vv0+u8*vec2(-.55,-1.05);vec4 b=f(a),c=f(a+u8*m),d=f(a+u8*2.),g=f(a+u8*n),h=e(b,c),i=e(d,g);gl_FragColor=e(h,i);}",
              i: ["u3", "u8"],
              j: H,
              D: !0
            },
            s36: {
              h:
                "uniform sampler2D u1;varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a*a;}",
              i: ["u1"],
              j: x,
              precision: "lowp",
              D: !0
            },
            s37: {
              h:
                "uniform sampler2D u1;uniform vec2 u8;varying vec2 vv0;const float e=15444.;void main(){vec4 a=1001./e*texture2D(u1,vv0-3.*u8)+2002./e*texture2D(u1,vv0-2.*u8)+3003./e*texture2D(u1,vv0-u8)+3432./e*texture2D(u1,vv0)+3003./e*texture2D(u1,vv0+u8)+2002./e*texture2D(u1,vv0+2.*u8)+1001./e*texture2D(u1,vv0+3.*u8);gl_FragColor=a;}",
              i: ["u8", "u1"],
              j: x,
              precision: "lowp",
              D: !0
            },
            s38: {
              h:
                "uniform sampler2D u1,u11,u29;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);const float g=.1;void main(){vec4 a=texture2D(u11,vv0),b=texture2D(u29,vv0),c=texture2D(u1,vv0),d=max(f*g,b-a*a),h=sqrt(d);gl_FragColor=(c-a)/h;}",
              i: ["u1", "u11", "u29"],
              j: { u1: 0, u11: 1, u29: 2 },
              D: !0
            }
          },
          N = {
            s39: {
              h:
                "uniform float u17,u30;uniform sampler2D u14,u15,u22;varying vec2 vv0;const vec2 ZERO2=vec2(0.,0.),ONE2=vec2(1.,1.),HALF2=vec2(.5,.5),EPS2=vec2(1e-5,1e-5);void main(){vec4 sum=texture2D(u22,vv0);float toSparsity=1.1111;vec2 uvFrom,uvWeight,xyPatch=ZERO2,eps2=EPS2/u17,xyTo=floor(vv0*u17+eps2);float weightSize=toSparsity*u17;vec2 halfFromSparsity=ONE2*(toSparsity-1.)/2.;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.)xyPatch.y=patch_y,uvFrom=(xyTo+HALF2+u30*(xyPatch-halfFromSparsity))/u17,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),uvWeight=(xyTo*toSparsity+xyPatch+HALF2)/weightSize,sum+=texture2D(u14,uvWeight)*texture2D(u15,uvFrom);}gl_FragColor=sum,gl_FragColor*=2.2222;}",
              i: ["u17", "u14", "u15", "u22", "u30"],
              xb: ["1.1111", "gl_FragColor\\*=2.2222;"]
            },
            s40: {
              h:
                "uniform float u17,u30,u25;uniform sampler2D u14,u15,u22;varying vec2 vv0;const vec2 ZERO2=vec2(0.,0.),ONE2=vec2(1.,1.),HALF2=vec2(.5,.5),EPS2=vec2(1e-4,1e-4);void main(){vec4 sum=texture2D(u22,vv0);float fromSparsity=1.1111,shrinkFactor=3.3333;vec2 uvFrom,uvWeight,xyFrom,xyPatchTo,xyPatch=ZERO2,xyShrink=ZERO2,eps2=EPS2/u25,xyTo=floor(vv0*u17+eps2);float weightSize=fromSparsity*u25;vec2 halfFromSparsity=ONE2*(fromSparsity-1.)/2.;float toSparsity=weightSize/u17;vec2 xyFrom0=xyTo*shrinkFactor;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.){xyPatch.y=patch_y;for(float shrink_x=0.;shrink_x<3.3333;shrink_x+=1.){xyShrink.x=shrink_x;for(float shrink_y=0.;shrink_y<3.3333;shrink_y+=1.)xyShrink.y=shrink_y,xyFrom=xyFrom0+xyShrink+shrinkFactor*u30*(xyPatch-halfFromSparsity),uvFrom=(xyFrom+HALF2)/u25,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),xyPatchTo=xyPatch*shrinkFactor+xyShrink,uvWeight=(xyTo*toSparsity+xyPatchTo+HALF2)/weightSize,sum+=texture2D(u14,uvWeight)*texture2D(u15,uvFrom);}}}gl_FragColor=sum,gl_FragColor*=2.2222;}",
              i: "u17 u25 u14 u15 u22 u30".split(" "),
              xb: ["1.1111", "gl_FragColor\\*=2.2222;", "3.3333"]
            }
          },
          z = null,
          J = null,
          M = {
            mb: function() {
              return C;
            },
            v: function() {
              if (!C) {
                z = rb.Ob(I, 2);
                J = rb.Ob(N, 2);
                D = "highp";
                for (var v in z) d(c, z[v], v);
                B.set("s0");
                c.enableVertexAttribArray(0);
                C = !0;
              }
            },
            $c: function(v) {
              v.forEach(function(f) {
                M.Zc(f);
              });
            },
            Zc: function(v) {
              z[v.id] = v;
              d(c, v, v.id);
            },
            Cd: function(v, f, y) {
              f || (f = v);
              z[f] = Object.create(J[v]);
              z[f].lf = !0;
              J[v].xb &&
                J[v].xb.forEach(function(G, L) {
                  z[f].h = z[f].h.replace(new RegExp(G, "g"), y[L]);
                });
              d(c, z[f], f);
            },
            set: function(v) {
              var f = z[v];
              f.D && ((f.D = !1), d(c, f, v));
              e(f);
            },
            Qa: function(v) {
              return n(v, p(), "s41");
            },
            Gc: function(v) {
              return n(
                v,
                {
                  h: "void main(){gl_FragColor=vec4(.5,.5,.5,.5);}",
                  i: [],
                  precision: "highp"
                },
                "s42"
              );
            },
            Ne: function(v) {
              return "undefined" === typeof z[v] ? !1 : z[v].va;
            },
            T: function() {
              -1 !== r &&
                ((r = -1),
                l.Ia.forEach(function(v) {
                  0 !== v && c.disableVertexAttribArray(v);
                }));
            },
            Ic: function() {
              var v = 0;
              l.Ia.forEach(function(f, y) {
                y = l.Ha[y];
                c.vertexAttribPointer(f, y, c.FLOAT, !1, l.Rc, v);
                v += 4 * y;
              });
            },
            nd: function() {
              c.enableVertexAttribArray(0);
            },
            Da: function() {
              M.yb(c);
            },
            yb: function(v) {
              v.vertexAttribPointer(l.Ia[0], 2, v.FLOAT, !1, 8, 0);
            },
            de: function(v, f) {
              c.uniform1i(l.A[v], f);
            },
            H: function(v, f) {
              c.uniform1f(l.A[v], f);
            },
            fa: function(v, f, y) {
              c.uniform2f(l.A[v], f, y);
            },
            Jh: function(v, f) {
              c.uniform2fv(l.A[v], f);
            },
            Nf: function(v, f) {
              c.uniform3fv(l.A[v], f);
            },
            Kh: function(v, f, y, G) {
              c.uniform3f(l.A[v], f, y, G);
            },
            Lh: function(v, f, y, G, L) {
              c.uniform4f(l.A[v], f, y, G, L);
            },
            Hc: function(v, f) {
              c.uniform4fv(l.A[v], f);
            },
            Mh: function(v, f) {
              c.uniformMatrix2fv(l.A[v], !1, f);
            },
            Nh: function(v, f) {
              c.uniformMatrix3fv(l.A[v], !1, f);
            },
            Oh: function(v, f) {
              c.uniformMatrix4fv(l.A[v], !1, f);
            },
            O: function(v, f) {
              M.set(v);
              f.forEach(function(y) {
                switch (y.type) {
                  case "4f":
                    c.uniform4fv(l.A[y.name], y.value);
                    break;
                  case "3f":
                    c.uniform3fv(l.A[y.name], y.value);
                    break;
                  case "2f":
                    c.uniform2fv(l.A[y.name], y.value);
                    break;
                  case "1f":
                    c.uniform1f(l.A[y.name], y.value);
                    break;
                  case "1i":
                    c.uniform1i(l.A[y.name], y.value);
                    break;
                  case "mat2":
                    c.uniformMatrix2fv(l.A[y.name], !1, y.value);
                    break;
                  case "mat3":
                    c.uniformMatrix3fv(l.A[y.name], !1, y.value);
                    break;
                  case "mat4":
                    c.uniformMatrix4fv(l.A[y.name], !1, y.value);
                }
              });
            },
            bh: function() {
              return "lowp";
            },
            m: function() {
              c.disableVertexAttribArray(0);
              M.T();
              for (var v in z) {
                var f = z[v];
                f.va && ((f.va = !1), c.deleteProgram(f.wa));
                f.lf && delete z[v];
              }
              q.forEach(function(y) {
                c.deleteShader(y);
              });
              q.splice(0);
              u = 0;
              C = !1;
              l = null;
              r = -1;
            }
          };
        return M;
      })(),
      c = null,
      Na = (function() {
        function a(g) {
          console.log("ERROR in ContextFF: ", g);
          return !1;
        }
        function b(g) {
          function t() {
            Ha.m();
            aa.reset();
            k.getExtension("WEBGL_lose_context").loseContext();
          }
          if (
            navigator.userAgent &&
            -1 !== navigator.userAgent.indexOf("forceWebGL1")
          )
            return !1;
          var x = document.createElement("canvas");
          x.setAttribute("width", 5);
          x.setAttribute("height", 5);
          var k = null;
          try {
            k = x.getContext("webgl2", g);
          } catch (m) {
            return !1;
          }
          if (!k) return !1;
          d(k);
          aa.od(k);
          g = aa.Pb(k);
          if (!g.ja && !g.ka) return t(), !1;
          g = Ha.cd(k, g);
          t();
          return g ? !0 : !1;
        }
        function d(g) {
          g.clearColor(0, 0, 0, 0);
          g.disable(g.DEPTH_TEST);
          g.disable(g.BLEND);
          g.disable(g.DITHER);
          g.disable(g.STENCIL_TEST);
          g.disable(g.CULL_FACE);
          g.GENERATE_MIPMAP_HINT && g.hint(g.GENERATE_MIPMAP_HINT, g.FASTEST);
          g.disable(g.SAMPLE_ALPHA_TO_COVERAGE);
          g.disable(g.SAMPLE_COVERAGE);
          g.depthFunc(g.LEQUAL);
          g.clearDepth(1);
        }
        var e = null,
          n = null,
          p = null,
          q = null,
          r = !0,
          l = null,
          u = null,
          C = [],
          D = {
            F: function() {
              return e.width;
            },
            W: function() {
              return e.height;
            },
            Ug: function() {
              return e;
            },
            Sg: function() {
              return c;
            },
            la: function() {
              return r;
            },
            flush: function() {
              c.flush();
            },
            Te: function() {
              l || (l = new Uint8Array(e.width * e.height * 4));
              c.readPixels(0, 0, e.width, e.height, c.RGBA, c.UNSIGNED_BYTE, l);
              return l;
            },
            Vg: function() {
              return e.toDataURL("image/jpeg");
            },
            Wg: function() {
              wa.S();
              n ||
                ((n = document.createElement("canvas")),
                (p = n.getContext("2d")));
              n.width = e.width;
              n.height = e.height;
              for (
                var g = D.Te(),
                  t = p.createImageData(n.width, n.height),
                  x = n.width,
                  k = n.height,
                  m = t.data,
                  H = 0;
                H < k;
                ++H
              )
                for (var I = k - H - 1, N = 0; N < x; ++N) {
                  var z = 4 * (H * x + N),
                    J = 4 * (I * x + N);
                  m[z] = g[J];
                  m[z + 1] = g[J + 1];
                  m[z + 2] = g[J + 2];
                  m[z + 3] = g[J + 3];
                }
              p.putImageData(t, 0, 0);
              return n.toDataURL("image/png");
            },
            Se: function(g) {
              !n &&
                g &&
                ((n = document.createElement("canvas")),
                (p = n.getContext("2d")));
              var t = g ? n : document.createElement("canvas");
              t.width = e.width;
              t.height = e.height;
              (g ? p : t.getContext("2d")).drawImage(e, 0, 0);
              return t;
            },
            v: function(g) {
              g.Ge && !g.Nb
                ? (e = document.getElementById(g.Ge))
                : g.Nb && (e = g.Nb);
              e || (e = document.createElement("canvas"));
              e.width = g && void 0 !== g.width ? g.width : 512;
              e.height = g && void 0 !== g.height ? g.height : 512;
              "undefined" === typeof g && (g = {});
              void 0 === g.premultipliedAlpha && (g.premultipliedAlpha = !1);
              void 0 === g.ic && (g.ic = !0);
              void 0 === g.antialias && (g.antialias = !1);
              if (c) r = c instanceof WebGL2RenderingContext;
              else {
                r = !0;
                var t = {
                  antialias: g.antialias,
                  alpha: !0,
                  preserveDrawingBuffer: !0,
                  premultipliedAlpha: g.premultipliedAlpha,
                  stencil: !1,
                  depth: g.ic
                };
                navigator &&
                  navigator.userAgent &&
                  -1 !== navigator.userAgent.indexOf("noAntialiasing") &&
                  (t.antialias = !1);
                var x = b(t);
                !x && t.antialias && ((t.antialias = !1), (x = b(t)));
                x && (c = e.getContext("webgl2", t));
                c
                  ? (r = !0)
                  : ((c = e.getContext("webgl", t)) ||
                      (c = e.getContext("experimental-webgl", t)),
                    (r = !1));
              }
              if (!c) return a("WebGL1 and 2 are not enabled");
              (q = c.getExtension("WEBGL_lose_context")) &&
                g.Td &&
                ((u = g.Td), e.addEventListener("webglcontextlost", u, !1));
              if (!aa.v()) return a("Not enough GL capabilities");
              d(c);
              B.v();
              V.v();
              if (!Ha.cd(c, aa.Re())) return a("Cannot filter float textures");
              C.forEach(function(k) {
                k(c);
              });
              C.splice(0);
              return !0;
            },
            hg: function() {
              return new Promise(function(g) {
                c ? g(c) : C.push(g);
              });
            },
            m: function() {
              c && (aa.m(), B.m(), Ha.m());
              q &&
                u &&
                (e.removeEventListener("webglcontextlost", u, !1),
                (q = u = null));
              c = l = p = n = e = null;
              C.splice(0);
            }
          };
        return D;
      })(),
      ya = (function() {
        function a() {
          null === b &&
            ("undefined" !== typeof B
              ? (b = B)
              : "undefined" !== typeof JEShaders && (b = JEShaders));
        }
        var b = null;
        a();
        return {
          reset: function() {
            b = null;
          },
          Lf: function(d) {
            b !== d && (b && b.T(), (b = d));
          },
          mb: function() {
            return b.mb();
          },
          Da: function() {
            return b.Da();
          },
          yb: function(d) {
            return b.yb(d);
          },
          Ic: function() {
            return b.Ic();
          },
          T: function() {
            return b.T();
          },
          set: function(d) {
            return b.set(d);
          },
          Qa: function(d) {
            a();
            return b.Qa(d);
          },
          Gc: function(d) {
            a();
            return b.Gc(d);
          }
        };
      })(),
      Fa = (function() {
        function a(h) {
          c.bindTexture(c.TEXTURE_2D, h);
        }
        function b(h) {
          f[0] = h;
          h = y[0];
          var F = (h >> 16) & 32768,
            K = (h >> 12) & 2047,
            P = (h >> 23) & 255;
          return 103 > P
            ? F
            : 142 < P
            ? F | 31744 | ((255 == P ? 0 : 1) && h & 8388607)
            : 113 > P
            ? ((K |= 2048), F | ((K >> (114 - P)) + ((K >> (113 - P)) & 1)))
            : (F = (F | ((P - 112) << 10) | (K >> 1)) + (K & 1));
        }
        function d(h) {
          var F = new Uint16Array(h.length);
          h.forEach(function(K, P) {
            F[P] = b(K);
          });
          return F;
        }
        function e() {
          if (null !== G.ec) return G.ec;
          var h = p(d([0.5, 0.5, 0.5, 0.5]));
          return null === h ? !0 : (G.ec = h);
        }
        function n() {
          if (null !== G.fc) return G.fc;
          var h = p(new Uint8Array([127, 127, 127, 127]));
          return null === h ? !0 : (G.fc = h);
        }
        function p(h) {
          if (!ya.mb() || !k) return null;
          var F = null,
            K = Math.sqrt(h.length / 4);
          try {
            var P = c.getError();
            if ("FUCKING_BIG_ERROR" === P) return !1;
            F = L.instance({ isFloat: !1, U: !0, array: h, width: K });
            P = c.getError();
            if (P !== c.NO_ERROR) return !1;
          } catch (ra) {
            return !1;
          }
          na.S();
          c.viewport(0, 0, K, K);
          c.clearColor(0, 0, 0, 0);
          c.clear(c.COLOR_BUFFER_BIT);
          ya.set("s0");
          F.ad(0);
          oa.l(!0, !0);
          h = 4 * K * K;
          P = new Uint8Array(h);
          c.readPixels(0, 0, K, K, c.RGBA, c.UNSIGNED_BYTE, P);
          K = !0;
          for (var ca = 0; ca < h; ++ca) K = K && 3 > Math.abs(P[ca] - 127);
          F.remove();
          na.ia();
          return K;
        }
        var q = 0,
          r = null,
          l = 0,
          u = null,
          C = null,
          D = null,
          g = null,
          t = null,
          x = null,
          k = !1,
          m = [],
          H = {
            isFloat: !1,
            isPot: !0,
            isLinear: !1,
            isMipmap: !1,
            isAnisotropicFiltering: !1,
            isMirrorX: !1,
            isMirrorY: !1,
            isSrgb: !1,
            isKeepArray: !1,
            isFlipY: null,
            width: 0,
            height: 0,
            url: null,
            array: null,
            data: null,
            K: null,
            dc: null,
            kf: !1,
            U: !1,
            ra: null,
            rb: 4,
            sc: 0
          },
          I = !1,
          N = null,
          z = null,
          J = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]],
          M = !1,
          v = !1,
          f = new Float32Array(1),
          y = new Int32Array(f.buffer),
          G = { ec: null, fc: null },
          L = {
            v: function() {
              k ||
                ((t = [c.RGBA, null, c.RGBA, c.RGBA]),
                (x = [c.RGBA, null, c.RGBA, c.RGBA]),
                (r = [
                  c.TEXTURE0,
                  c.TEXTURE1,
                  c.TEXTURE2,
                  c.TEXTURE3,
                  c.TEXTURE4,
                  c.TEXTURE5,
                  c.TEXTURE6,
                  c.TEXTURE7
                ]),
                (M = "undefined" !== typeof JEContext),
                (v = "undefined" !== typeof aa),
                M && JEContext.th() && r.push(c.TEXTURE8, c.TEXTURE9),
                (u = [-1, -1, -1, -1, -1, -1, -1, -1]),
                (g = [c.UNSIGNED_BYTE, c.FLOAT, c.FLOAT]),
                (k = !0));
            },
            gf: function() {
              if (!C) {
                for (var h = new Float32Array(16384), F = 0; 16384 > F; ++F)
                  h[F] = 2 * Math.random() - 1;
                C = {
                  random: L.instance({
                    isFloat: !0,
                    isPot: !0,
                    array: h,
                    width: 64
                  }),
                  je: L.instance({
                    isFloat: !1,
                    isPot: !0,
                    width: 1,
                    array: new Uint8Array([0, 0, 0, 0])
                  })
                };
              }
              L.ag();
            },
            kh: function() {
              return C.je;
            },
            ag: function() {
              g[1] = aa.$b(c);
            },
            Jf: function() {
              x = t = [c.RGBA, c.RGBA, c.RGBA, c.RGBA];
            },
            Zd: function(h) {
              B.set("s1");
              na.S();
              var F = h.F(),
                K = h.W();
              c.viewport(0, 0, F, K);
              h.g(0);
              oa.l(!1, !1);
            },
            Ah: function(h, F) {
              L.Zd(h);
              c.readPixels(0, 0, h.F(), h.W(), c.RGBA, c.UNSIGNED_BYTE, F);
            },
            Bh: function(h, F) {
              L.Zd(h);
              return aa.wb(0, 0, h.F(), h.W(), F);
            },
            vd: function(h, F, K, P, ca, ra, Da) {
              h.activeTexture(h.TEXTURE0);
              var w = h.createTexture();
              h.bindTexture(h.TEXTURE_2D, w);
              ca = ca instanceof Float32Array ? ca : new Float32Array(ca);
              h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE);
              h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE);
              h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.NEAREST);
              h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.NEAREST);
              h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL, ra);
              h.texImage2D(
                h.TEXTURE_2D,
                0,
                h.RGBA,
                K,
                P,
                0,
                h.RGBA,
                h.FLOAT,
                ca
              );
              h.bindTexture(h.TEXTURE_2D, null);
              h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL, !1);
              Da && (na.ia(), B.Qa(h));
              h.viewport(0, 0, K, P);
              h.framebufferTexture2D(
                h.FRAMEBUFFER,
                h.COLOR_ATTACHMENT0,
                h.TEXTURE_2D,
                F,
                0
              );
              h.bindTexture(h.TEXTURE_2D, w);
              Da ? oa.l(!0, !0) : V.ab(h);
              h.deleteTexture(w);
              k && ((u[0] = -1), (D = null), (q = 0));
            },
            Hb: function(h) {
              h !== q && (c.activeTexture(r[h]), (q = h));
            },
            instance: function(h) {
              function F() {
                R = void 0 !== w.K.videoWidth ? w.K.videoWidth : w.K.width;
                T = void 0 !== w.K.videoHeight ? w.K.videoHeight : w.K.height;
              }
              function K(E) {
                var S = c.getError();
                if ("FUCKING_BIG_ERROR" === S) return !1;
                c.texImage2D(c.TEXTURE_2D, 0, ja, ha, ia, E);
                S = c.getError();
                S !== c.NO_ERROR &&
                  ha !== c.RGBA &&
                  ((ha = c.RGBA), c.texImage2D(c.TEXTURE_2D, 0, ja, ha, ia, E));
                return !0;
              }
              function P() {
                if (!Ib) {
                  a(ua);
                  Ea && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, Ea);
                  w.isPot
                    ? (c.texParameteri(
                        c.TEXTURE_2D,
                        c.TEXTURE_WRAP_S,
                        w.isMirrorX ? c.MIRRORED_REPEAT : c.REPEAT
                      ),
                      c.texParameteri(
                        c.TEXTURE_2D,
                        c.TEXTURE_WRAP_T,
                        w.isMirrorY ? c.MIRRORED_REPEAT : c.REPEAT
                      ))
                    : (c.texParameteri(
                        c.TEXTURE_2D,
                        c.TEXTURE_WRAP_S,
                        c.CLAMP_TO_EDGE
                      ),
                      c.texParameteri(
                        c.TEXTURE_2D,
                        c.TEXTURE_WRAP_T,
                        c.CLAMP_TO_EDGE
                      ));
                  w.isAnisotropicFiltering &&
                    "undefined" !== typeof JESETTINGS &&
                    c.texParameterf(
                      c.TEXTURE_2D,
                      JEContext.Xg().TEXTURE_MAX_ANISOTROPY_EXT,
                      JESETTINGS.dg
                    );
                  c.texParameteri(
                    c.TEXTURE_2D,
                    c.TEXTURE_MAG_FILTER,
                    w.isLinear ? c.LINEAR : c.NEAREST
                  );
                  w.isLinear
                    ? c.texParameteri(
                        c.TEXTURE_2D,
                        c.TEXTURE_MIN_FILTER,
                        w.isMipmap && !Pa ? c.NEAREST_MIPMAP_LINEAR : c.LINEAR
                      )
                    : c.texParameteri(
                        c.TEXTURE_2D,
                        c.TEXTURE_MIN_FILTER,
                        w.isMipmap && !Pa ? c.NEAREST_MIPMAP_NEAREST : c.NEAREST
                      );
                  ha = t[w.rb - 1];
                  ja = x[w.rb - 1];
                  ia = g[sb];
                  if (aa.la()) {
                    var E = aa.Ve();
                    ha === c.RGBA && ia === c.FLOAT
                      ? w.isMipmap || w.isLinear
                        ? (ja = Ha.Xe(c))
                        : aa.dd()
                        ? E && (ja = E)
                        : (ja = c.RGBA16F || c.RGBA)
                      : ha === c.RGB &&
                        ia === c.FLOAT &&
                        E &&
                        ((ja = E), (ha = c.RGBA));
                  }
                  if (
                    (w.U && !w.isFloat) ||
                    (w.isFloat && w.isMipmap && Ha.qf())
                  )
                    (ja = aa.We()), (ia = aa.$b(c));
                  w.sc && (cb = w.sc);
                  w.isSrgb && 4 === w.rb && (ha = JEContext.ih());
                  if (w.K) K(w.K);
                  else if (w.url) K(Ka);
                  else if (va) {
                    E = va;
                    try {
                      "FUCKING_BIG_ERROR" !== c.getError() &&
                        (c.texImage2D(c.TEXTURE_2D, 0, ja, R, T, 0, ha, ia, E),
                        c.getError() !== c.NO_ERROR &&
                          (c.texImage2D(
                            c.TEXTURE_2D,
                            0,
                            ja,
                            R,
                            T,
                            0,
                            ha,
                            ia,
                            null
                          ),
                          c.getError() !== c.NO_ERROR &&
                            c.texImage2D(
                              c.TEXTURE_2D,
                              0,
                              c.RGBA,
                              R,
                              T,
                              0,
                              c.RGBA,
                              c.UNSIGNED_BYTE,
                              null
                            )));
                    } catch (mc) {
                      c.texImage2D(c.TEXTURE_2D, 0, ja, R, T, 0, ha, ia, null);
                    }
                    w.isKeepArray || (va = null);
                  } else
                    (E = c.getError()),
                      "FUCKING_BIG_ERROR" !== E &&
                        (c.texImage2D(
                          c.TEXTURE_2D,
                          0,
                          ja,
                          R,
                          T,
                          0,
                          ha,
                          ia,
                          null
                        ),
                        (E = c.getError()),
                        E !== c.NO_ERROR &&
                          ((ha = c.RGBA),
                          w.U &&
                            ia !== c.FLOAT &&
                            ((ia = c.FLOAT),
                            c.texImage2D(
                              c.TEXTURE_2D,
                              0,
                              ja,
                              R,
                              T,
                              0,
                              ha,
                              ia,
                              null
                            ))));
                  if (w.isMipmap)
                    if (!Pa && ba) ba.Zb(), (db = !0);
                    else if (Pa) {
                      E = Math.log2(Math.min(R, T));
                      Ta = Array(1 + E);
                      Ta[0] = ua;
                      for (var S = 1; S <= E; ++S) {
                        var la = Math.pow(2, S),
                          W = R / la;
                        la = T / la;
                        var Qa = c.createTexture();
                        a(Qa);
                        c.texParameteri(
                          c.TEXTURE_2D,
                          c.TEXTURE_MIN_FILTER,
                          c.NEAREST
                        );
                        c.texParameteri(
                          c.TEXTURE_2D,
                          c.TEXTURE_MAG_FILTER,
                          c.NEAREST
                        );
                        c.texImage2D(
                          c.TEXTURE_2D,
                          0,
                          ja,
                          W,
                          la,
                          0,
                          ha,
                          ia,
                          null
                        );
                        a(null);
                        Ta[S] = Qa;
                      }
                      db = !0;
                    }
                  a(null);
                  u[q] = -1;
                  Ea && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !1);
                  Va = !0;
                  w.ra && ba && (w.ra(ba), (w.ra = null));
                }
              }
              function ca() {
                for (var E = R * T, S = 2 * E, la = 3 * E, W = 0; W < E; ++W)
                  (za[0][W] = Wa[W]),
                    (za[1][W] = Wa[W + E]),
                    (za[2][W] = Wa[W + S]),
                    (za[3][W] = Wa[W + la]);
              }
              function ra() {
                var E = R * T * 4;
                Ia = [
                  new Uint8Array(E),
                  new Uint8Array(E),
                  new Uint8Array(E),
                  new Uint8Array(E)
                ];
                za = [
                  new Float32Array(Ia[0].buffer),
                  new Float32Array(Ia[1].buffer),
                  new Float32Array(Ia[2].buffer),
                  new Float32Array(Ia[3].buffer)
                ];
                eb = new Uint8Array(4 * E);
                Wa = new Float32Array(eb.buffer);
                Xa = !0;
              }
              function Da() {
                Ja.Jb = new Uint8Array(R * T * 4);
                Ja.wd = new Float32Array(Ja.buffer);
                Ja.ba = !0;
              }
              var w = Object.assign({}, H, h),
                Ya = l++;
              null === w.isFlipY && (w.isFlipY = w.url || w.array ? !0 : !1);
              w.data &&
                ((w.array =
                  "string" === typeof w.data
                    ? Pb(w.data)
                    : w.isFloat
                    ? new Float32Array(w.data)
                    : new Uint8Array(w.data)),
                (w.isFlipY = !1));
              var sb = 0,
                Jb = w.K ? !0 : !1,
                Za = null,
                tb = null,
                Kb = !1,
                ub = null;
              w.U = w.U || w.isFloat;
              w.U && (sb = 1);
              !w.kf && w.isFloat && v && !aa.dd() && (w.isFloat = !1);
              w.isFloat && (sb = 2);
              w.isAnisotropicFiltering &&
                M &&
                !JEContext.nh() &&
                (w.isAnisotropicFiltering = !1);
              var ua = w.dc || c.createTexture(),
                Ka = null,
                va = !1,
                R = 0,
                T = 0,
                Va = !1,
                Ib = !1,
                Xa = !1,
                za = null,
                Ia = null,
                eb = null,
                Wa = null,
                ja = null,
                ha = null,
                ia = null,
                Ea = w.isFlipY,
                ac = (h = w.U && w.isMipmap) && Ha.xe(),
                Pa = h && ac ? !0 : !1,
                Ta = null,
                cb = -1,
                db = !1,
                Ja = { ba: !1, Jb: null, wd: null };
              w.width && ((R = w.width), (T = w.height ? w.height : R));
              var ba = {
                get: function() {
                  return ua;
                },
                F: function() {
                  return R;
                },
                W: function() {
                  return T;
                },
                lh: function() {
                  return w.url;
                },
                oh: function() {
                  return w.isFloat;
                },
                qh: function() {
                  return w.U;
                },
                rh: function() {
                  return w.isLinear;
                },
                Zb: function() {
                  c.generateMipmap(c.TEXTURE_2D);
                },
                ve: function(E, S) {
                  Pa
                    ? (E || (E = ba.zd()), L.Hb(S), a(Ta[E]), (u[S] = -1))
                    : ba.g(S);
                },
                zd: function() {
                  -1 === cb && (cb = Math.log(R) / Math.log(2));
                  return cb;
                },
                Oe: function(E) {
                  if (Pa) {
                    E || (E = ba.zd());
                    B.set("s12");
                    L.Hb(0);
                    for (var S = R, la = T, W = 1; W <= E; ++W)
                      (S /= 2),
                        (la /= 2),
                        B.fa("u8", 0.25 / S, 0.25 / la),
                        c.viewport(0, 0, S, la),
                        a(Ta[W - 1]),
                        c.framebufferTexture2D(
                          na.eb(),
                          c.COLOR_ATTACHMENT0,
                          c.TEXTURE_2D,
                          Ta[W],
                          0
                        ),
                        oa.l(!1, 1 === W);
                    u[0] = -1;
                  } else ba.Zb();
                },
                Mf: function(E) {
                  (Jb = !Zb.Vf(E)) ? ((va = null), (w.K = E), F()) : (va = E);
                },
                g: function(E) {
                  if (!Va) return !1;
                  L.Hb(E);
                  if (u[E] === Ya) return !1;
                  a(ua);
                  u[E] = Ya;
                  return !0;
                },
                ad: function(E) {
                  c.activeTexture(r[E]);
                  q = E;
                  a(ua);
                  u[E] = Ya;
                },
                u: function() {
                  D = ba;
                  c.framebufferTexture2D(
                    na.eb(),
                    c.COLOR_ATTACHMENT0,
                    c.TEXTURE_2D,
                    ua,
                    0
                  );
                },
                ea: function() {
                  D = ba;
                  c.viewport(0, 0, R, T);
                  c.framebufferTexture2D(
                    na.eb(),
                    c.COLOR_ATTACHMENT0,
                    c.TEXTURE_2D,
                    ua,
                    0
                  );
                },
                Pc: L.Pc,
                resize: function(E, S) {
                  R = E;
                  T = S;
                  P();
                },
                clone: function(E) {
                  E = L.instance({
                    width: R,
                    height: T,
                    U: w.U,
                    isFloat: w.isFloat,
                    isLinear: w.isLinear,
                    isMirrorY: w.isMirrorY,
                    isFlipY: E ? !Ea : Ea,
                    isPot: w.isPot
                  });
                  ya.set("s0");
                  na.ia();
                  E.u();
                  c.viewport(0, 0, R, T);
                  ba.g(0);
                  oa.l(!0, !0);
                  return E;
                },
                Of: function() {
                  c.viewport(0, 0, R, T);
                },
                remove: function() {
                  c.deleteTexture(ua);
                  Ib = !0;
                  m.splice(m.indexOf(ba), 1);
                  ba = null;
                },
                refresh: function() {
                  ba.ad(0);
                  Ea && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !0);
                  Jb
                    ? c.texImage2D(c.TEXTURE_2D, 0, ja, ha, ia, w.K)
                    : c.texImage2D(c.TEXTURE_2D, 0, ja, R, T, 0, ha, ia, va);
                  Ea && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !1);
                },
                Yd: function() {
                  Xa || ra();
                  c.readPixels(0, 0, R, 4 * T, c.RGBA, c.UNSIGNED_BYTE, eb);
                  ca();
                  return za;
                },
                Df: function() {
                  Xa || ra();
                  return aa.wb(0, 0, R, 4 * T, eb).then(function() {
                    ca();
                    return za;
                  });
                },
                Ff: function() {
                  Ja.ba || Da();
                  c.readPixels(0, 0, R, T, c.RGBA, c.UNSIGNED_BYTE, Ja.Jb);
                  return Ja.wd;
                },
                Ef: function() {
                  Ja.ba || Da();
                  return aa.wb(0, 0, R, T, Ja.Jb);
                },
                ld: function(E) {
                  na.S();
                  B.set("s13");
                  ba.g(0);
                  if (E)
                    c.viewport(0, 0, R, T),
                      B.Hc("u9", 0.25, 0.25, 0.25, 0.25),
                      oa.l(!1, !0);
                  else
                    for (E = 0; 4 > E; ++E)
                      c.viewport(0, T * E, R, T),
                        B.Hc("u9", J[E]),
                        oa.l(!1, 0 === E);
                },
                $f: function(E) {
                  var S = ia === g[0] && !n();
                  a(ua);
                  Ea && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !0);
                  S
                    ? (Kb ||
                        ((Za = document.createElement("canvas")),
                        (Za.width = R),
                        (Za.height = T),
                        (tb = Za.getContext("2d")),
                        (ub = tb.createImageData(R, T)),
                        (Kb = !0)),
                      ub.data.set(E),
                      tb.putImageData(ub, 0, 0),
                      c.texImage2D(c.TEXTURE_2D, 0, ja, ha, ia, Za))
                    : c.texImage2D(c.TEXTURE_2D, 0, ja, R, T, 0, ha, ia, E);
                  u[q] = Ya;
                  Ea && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !1);
                },
                Uh: function(E, S) {
                  a(ua);
                  S && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !0);
                  c.texImage2D(c.TEXTURE_2D, 0, ja, ha, ia, E);
                  u[q] = Ya;
                  S && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !1);
                },
                Hh: function(E, S) {
                  var la = R * T,
                    W = 4 * la;
                  E = w.U ? (E ? "RGBE" : "JSON") : "RGBA";
                  S && (E = S);
                  S = aa.la() && !1;
                  var Qa = null;
                  switch (E) {
                    case "RGBE":
                      Qa = "s43";
                      break;
                    case "JSON":
                      Qa = S ? "s0" : "s13";
                      break;
                    case "RGBA":
                    case "RGBAARRAY":
                      Qa = "s7";
                  }
                  Xa ||
                    ("RGBA" === E || "RGBE" === E || "RGBAARRAY" === E
                      ? ((Ia = new Uint8Array(W)), (Xa = !0))
                      : "JSON" !== E || S || ra());
                  na.S();
                  B.set(Qa);
                  ba.g(0);
                  W = null;
                  if ("RGBA" === E || "RGBE" === E || "RGBAARRAY" === E) {
                    c.viewport(0, 0, R, T);
                    oa.l(!0, !0);
                    c.readPixels(0, 0, R, T, c.RGBA, c.UNSIGNED_BYTE, Ia);
                    if ("RGBAARRAY" === E) return { data: Ia };
                    I ||
                      ((N = document.createElement("canvas")),
                      (z = N.getContext("2d")),
                      (I = !0));
                    N.width = R;
                    N.height = T;
                    la = z.createImageData(R, T);
                    la.data.set(Ia);
                    z.putImageData(la, 0, 0);
                    W = N.toDataURL("image/png");
                  } else if ("JSON" === E)
                    if (S)
                      (W = new Float32Array(la)),
                        c.viewport(0, 0, R, T),
                        oa.l(!0, !0),
                        c.readPixels(0, 0, R, T, c.RGBA, c.FLOAT, W);
                    else {
                      for (W = 0; 4 > W; ++W)
                        c.viewport(0, T * W, R, T),
                          B.Hc("u9", J[W]),
                          oa.l(!W, !W);
                      ba.Yd();
                      W = Array(la);
                      for (S = 0; S < la; ++S)
                        (W[4 * S] = za[0][S]),
                          (W[4 * S + 1] = za[1][S]),
                          (W[4 * S + 2] = za[2][S]),
                          (W[4 * S + 3] = za[3][S]);
                    }
                  return {
                    format: E,
                    data: W,
                    width: R,
                    height: T,
                    isMirrorY: w.isMirrorY,
                    isFlipY: "RGBA" === E ? w.isFlipY : !w.isFlipY
                  };
                }
              };
              w.isMipmap && !Pa && Va && !db && (ba.Zb(), (db = !0));
              if (w.url)
                a(ua),
                  c.texImage2D(
                    c.TEXTURE_2D,
                    0,
                    c.RGBA,
                    1,
                    1,
                    0,
                    c.RGBA,
                    c.UNSIGNED_BYTE,
                    null
                  ),
                  (Ka = new Image()),
                  (Ka.rg = "Anonymous"),
                  (Ka.crossOrigin = "Anonymous"),
                  (Ka.src = w.url),
                  (Ka.onload = function() {
                    R = Ka.width;
                    T = Ka.height;
                    P();
                  });
              else if (w.K) {
                var Lb = function() {
                  F();
                  R ? P() : setTimeout(Lb, 1);
                };
                Lb();
              } else
                w.array
                  ? (w.U && !w.isFloat
                      ? w.array instanceof Uint16Array
                        ? ((va = w.array), P())
                        : e()
                        ? ((va = d(w.array)), P())
                        : (P(), L.vd(c, ua, ba.F(), ba.W(), w.array, Ea, !0))
                      : ((va = w.isFloat
                          ? w.array instanceof Float32Array
                            ? w.array
                            : new Float32Array(w.array)
                          : w.array instanceof Uint8Array
                          ? w.array
                          : new Uint8Array(w.array)),
                        P()),
                    w.isKeepArray ||
                      (va && va !== w.array && (va = null), delete w.array))
                  : w.dc
                  ? (Va = !0)
                  : P();
              ba.hh = ba.F;
              w.ra && Va && (w.ra(ba), (w.ra = null));
              m.push(ba);
              return ba;
            },
            S: function(h) {
              h !== q && (c.activeTexture(r[h]), (q = h));
              u[h] = -1;
              a(null);
            },
            gg: function(h) {
              C.random.g(h);
            },
            Pc: function() {
              D = null;
              c.framebufferTexture2D(
                na.eb(),
                c.COLOR_ATTACHMENT0,
                c.TEXTURE_2D,
                null,
                0
              );
            },
            reset: function() {
              0 !== q && c.activeTexture(r[0]);
              for (var h = 0; h < r.length; ++h) u[h] = -1;
              q = -1;
            },
            Eh: function() {
              q = -1;
            },
            Xf: function() {
              for (var h = 0; h < r.length; ++h) L.S(h);
            },
            xd: function() {
              C && (C.random.remove(), C.je.remove());
            },
            Th: function(h, F) {
              if ("RGBA" === h.format || "RGBE" === h.format) {
                var K = new Image();
                K.src = h.data;
                K.onload = function() {
                  L.instance({
                    isMirrorY: h.isMirrorY,
                    isFlipY: h.isFlipY,
                    isFloat: !1,
                    K: K,
                    ra: function(P) {
                      if ("RGBA" === h.format) F(P);
                      else {
                        var ca = h.width,
                          ra = h.height,
                          Da = L.instance({
                            isMirrorY: h.isMirrorY,
                            isFloat: !0,
                            width: ca,
                            height: ra,
                            isFlipY: h.isFlipY
                          });
                        na.ia();
                        c.viewport(0, 0, ca, ra);
                        B.set("s44");
                        Da.u();
                        P.g(0);
                        oa.l(!0, !0);
                        L.S(0);
                        F(Da);
                        c.flush();
                        setTimeout(P.remove, 50);
                      }
                    }
                  });
                };
              } else
                "JSON" === h.format
                  ? F(
                      L.instance({
                        isFloat: !0,
                        isFlipY: h.isFlipY,
                        width: h.width,
                        height: h.height,
                        array: new Float32Array(h.data)
                      })
                    )
                  : F(!1);
            },
            De: d,
            m: function() {
              D && (wa.ia(), L.Pc(), wa.S());
              L.Xf();
              m.slice(0).forEach(function(h) {
                h.remove();
              });
              m.splice(0);
              k = !1;
              l = 0;
              "undefined" !== typeof Ha && Ha.m();
              C = null;
            }
          };
        return L;
      })(),
      Vb = (function() {
        return {
          instance: function(a) {
            var b = [Fa.instance(a), Fa.instance(a)],
              d = [b[1], b[0]],
              e = d,
              n = {
                Hf: function(p) {
                  e[1].u();
                  e[0].g(p);
                  n.ee();
                },
                Ih: function(p) {
                  e[1].ea();
                  e[0].g(p);
                  n.ee();
                },
                ee: function() {
                  e = e === b ? d : b;
                },
                refresh: function() {
                  e[0].refresh();
                  e[1].refresh();
                },
                g: function(p) {
                  e[0].g(p);
                },
                fg: function(p) {
                  e[1].g(p);
                },
                ah: function() {
                  return e[0];
                },
                fh: function() {
                  return e[1];
                },
                remove: function() {
                  e[0].remove();
                  e[1].remove();
                  e = null;
                }
              };
            return n;
          }
        };
      })(),
      oa = (function() {
        function a(l) {
          var u = { ga: null, M: null };
          u.ga = l.createBuffer();
          l.bindBuffer(l.ARRAY_BUFFER, u.ga);
          l.bufferData(
            l.ARRAY_BUFFER,
            new Float32Array([-1, -1, 3, -1, -1, 3]),
            l.STATIC_DRAW
          );
          u.M = l.createBuffer();
          l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, u.M);
          l.bufferData(
            l.ELEMENT_ARRAY_BUFFER,
            new Uint16Array([0, 1, 2]),
            l.STATIC_DRAW
          );
          return u;
        }
        var b = null,
          d = 0,
          e = !1,
          n = [],
          p = -2,
          q = -2,
          r = {
            reset: function() {
              q = p = -2;
            },
            v: function() {
              e || ((b = a(c)), r.Ja(), (e = !0));
            },
            instance: function(l) {
              var u = d++,
                C = l.M ? l.M.length : 0,
                D = "undefined" === typeof l.mode ? c.STATIC_DRAW : l.mode,
                g = c.createBuffer();
              c.bindBuffer(c.ARRAY_BUFFER, g);
              c.bufferData(
                c.ARRAY_BUFFER,
                l.ga instanceof Float32Array ? l.ga : new Float32Array(l.ga),
                D
              );
              p = u;
              var t = null,
                x = null,
                k = null;
              if (l.M) {
                t = c.createBuffer();
                c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, t);
                var m = null;
                65536 > l.M.length
                  ? ((m = Uint16Array), (x = c.UNSIGNED_SHORT), (k = 2))
                  : ((m = Uint32Array), (x = c.UNSIGNED_INT), (k = 4));
                m = l.M instanceof m ? l.M : new m(l.M);
                c.bufferData(c.ELEMENT_ARRAY_BUFFER, m, D);
                q = u;
              }
              var H = {
                we: function(I) {
                  p !== u && (c.bindBuffer(c.ARRAY_BUFFER, g), (p = u));
                  I && ya.Ic();
                },
                te: function() {
                  q !== u && (c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, t), (q = u));
                },
                bind: function(I) {
                  H.we(I);
                  H.te();
                },
                zg: function() {
                  c.drawElements(c.TRIANGLES, C, x, 0);
                },
                Ag: function(I, N) {
                  c.drawElements(c.TRIANGLES, I, x, N * k);
                },
                remove: function() {
                  c.deleteBuffer(g);
                  l.M && c.deleteBuffer(t);
                  H = null;
                }
              };
              n.push(H);
              return H;
            },
            Ja: function() {
              -1 !== p && (c.bindBuffer(c.ARRAY_BUFFER, b.ga), (p = -1));
              -1 !== q && (c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, b.M), (q = -1));
            },
            l: function(l, u) {
              l && oa.Ja();
              u && ya.Da();
              c.drawElements(c.TRIANGLES, 3, c.UNSIGNED_SHORT, 0);
            },
            ab: function(l) {
              l = l || c;
              var u = a(l);
              l.bindBuffer(l.ARRAY_BUFFER, u.ga);
              l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, u.M);
              ya.yb(l);
              l.clear(l.COLOR_BUFFER_BIT);
              l.drawElements(l.TRIANGLES, 3, l.UNSIGNED_SHORT, 0);
              l.flush();
              l.bindBuffer(l.ARRAY_BUFFER, null);
              l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, null);
              l.deleteBuffer(u.ga);
              l.deleteBuffer(u.M);
              r.reset();
              e && (r.Ja(), ya.Da());
            },
            xd: function() {
              var l = c,
                u = b;
              l.deleteBuffer(u.ga);
              l.deleteBuffer(u.M);
            },
            m: function() {
              r.xd();
              n.forEach(function(l) {
                l.remove();
              });
              c.bindBuffer(c.ARRAY_BUFFER, null);
              c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, null);
              r.reset();
              e = !1;
              n.splice(0);
              d = 0;
            }
          };
        return r;
      })(),
      na = (function() {
        var a = null,
          b = null,
          d = null,
          e = !1,
          n = [],
          p = { L: -2, ud: 1 },
          q = {
            mb: function() {
              return e;
            },
            v: function() {
              if (!e) {
                a = c.createFramebuffer();
                var r = aa.la();
                b =
                  r && c.DRAW_FRAMEBUFFER ? c.DRAW_FRAMEBUFFER : c.FRAMEBUFFER;
                d =
                  r && c.READ_FRAMEBUFFER ? c.READ_FRAMEBUFFER : c.FRAMEBUFFER;
                e = !0;
              }
            },
            Yg: function() {
              return b;
            },
            Ye: function() {
              return d;
            },
            eb: function() {
              return c.FRAMEBUFFER;
            },
            gh: function() {
              return p;
            },
            Rg: function() {
              return a;
            },
            instance: function(r) {
              void 0 === r.Fd && (r.Fd = !1);
              var l = r.I ? r.I : null,
                u = r.width,
                C = void 0 !== r.height ? r.height : r.width,
                D = a,
                g = null,
                t = !1,
                x = !1,
                k = 0;
              l && ((u = u ? u : l.F()), (C = C ? C : l.W()));
              var m = {
                ce: function() {
                  t || ((D = c.createFramebuffer()), (t = !0), (k = p.ud++));
                },
                pe: function() {
                  m.ce();
                  m.u();
                  g = c.createRenderbuffer();
                  c.bindRenderbuffer(c.RENDERBUFFER, g);
                  c.renderbufferStorage(
                    c.RENDERBUFFER,
                    c.DEPTH_COMPONENT16,
                    u,
                    C
                  );
                  c.framebufferRenderbuffer(
                    b,
                    c.DEPTH_ATTACHMENT,
                    c.RENDERBUFFER,
                    g
                  );
                  c.clearDepth(1);
                },
                bind: function(H, I) {
                  k !== p.L && (c.bindFramebuffer(b, D), (p.L = k));
                  l && l.u();
                  I && c.viewport(0, 0, u, C);
                  H && c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
                },
                eg: function() {
                  k !== p.L && (c.bindFramebuffer(b, D), (p.L = k));
                },
                clear: function() {
                  c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
                },
                ng: function() {
                  c.clear(c.COLOR_BUFFER_BIT);
                },
                og: function() {
                  c.clear(c.DEPTH_BUFFER_BIT);
                },
                Of: function() {
                  c.viewport(0, 0, u, C);
                },
                u: function() {
                  k !== p.L && (c.bindFramebuffer(b, D), (p.L = k));
                },
                rtt: function(H) {
                  l = H;
                  p.L !== k && (c.bindFramebuffer(c.FRAMEBUFFER, D), (p.L = k));
                  H.u();
                },
                S: function() {
                  c.bindFramebuffer(b, null);
                  p.L = -1;
                },
                resize: function(H, I) {
                  u = H;
                  C = I;
                  g &&
                    (c.bindRenderbuffer(c.RENDERBUFFER, g),
                    c.renderbufferStorage(
                      c.RENDERBUFFER,
                      c.DEPTH_COMPONENT16,
                      u,
                      C
                    ));
                },
                remove: function() {
                  D === a ||
                    x ||
                    (c.bindFramebuffer(b, D),
                    c.framebufferTexture2D(
                      b,
                      c.COLOR_ATTACHMENT0,
                      c.TEXTURE_2D,
                      null,
                      0
                    ),
                    g &&
                      c.framebufferRenderbuffer(
                        b,
                        c.DEPTH_ATTACHMENT,
                        c.RENDERBUFFER,
                        null
                      ),
                    c.bindFramebuffer(b, null),
                    c.deleteFramebuffer(D),
                    g && c.deleteRenderbuffer(g));
                  x = !0;
                }
              };
              r.Fd && m.pe();
              n.push(m);
              return m;
            },
            S: function() {
              c.bindFramebuffer(b, null);
              p.L = -1;
            },
            Yf: function() {
              c.bindFramebuffer(b, null);
              c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
              c.viewport(0, 0, aa.F(), aa.W());
              p.L = -1;
            },
            reset: function() {
              p.L = -2;
            },
            ia: function() {
              0 !== p.L && (c.bindFramebuffer(b, a), (p.L = 0));
            },
            clear: function() {
              c.viewport(0, 0, aa.F(), aa.W());
              c.clear(c.COLOR_BUFFER_BIT);
            },
            m: function() {
              q.S();
              n.forEach(function(r) {
                r.remove();
              });
              null !== a && (c.deleteFramebuffer(a), (a = null));
              q.reset();
              e = !1;
              n.splice(0);
              p.ud = 1;
            }
          };
        return q;
      })(),
      aa = (function() {
        function a() {
          e = "undefined" === typeof Na ? JEContext : Na;
          n = !0;
        }
        function b(k, m) {
          for (var H = 0; H < k.length; ++H) {
            var I = m.getExtension(k[H]);
            if (I) return I;
          }
          return null;
        }
        function d() {
          null !== g.Db && (clearInterval(g.Db), (g.Db = null));
          g.Na = !1;
        }
        var e = null,
          n = !1,
          p = {
            Gd: !1,
            Kc: null,
            Lc: null,
            Kd: !1,
            pf: !1,
            Mc: null,
            Ld: !1,
            Nc: null,
            Hd: !1,
            Lb: null,
            hf: !1,
            Mb: null,
            jf: !1
          },
          q = null,
          r = { ja: !0, ka: !0, Xb: !0, Xd: !1 },
          l = null,
          u = !0,
          C = null,
          D = null,
          g = { Na: !1, za: null, ib: null, cc: -1, aa: null, Db: null },
          t = "undefined" === typeof window ? {} : window,
          x = {
            v: function() {
              if (n) return !0;
              x.reset();
              n || a();
              var k = c;
              if (!q.Gd) {
                q.Kc = x.rd(k);
                t.GL_EXT_FLOAT = q.Kc;
                q.Kd = q.Kc ? !0 : !1;
                if (q.Kd || x.la())
                  (q.Lc = x.sd(k)),
                    (q.pf = q.Lc ? !0 : !1),
                    (t.GL_EXT_FLOATLINEAR = q.Lc);
                q.Gd = !0;
              }
              if (!q.Hd) {
                q.Mc = x.Za(k);
                q.Mc && ((q.Ld = !0), (t.GL_EXT_HALFFLOAT = q.Mc));
                if (q.Ld || x.la())
                  (q.Nc = x.td(k)), (t.GL_EXT_HALFFLOATLINEAR = q.Nc);
                q.mh = q.Nc ? !0 : !1;
                q.Hd = !0;
              }
              q.Lb = x.pd(k);
              q.hf = q.Lb ? !0 : !1;
              t.GL_EXT_COLORBUFFERFLOAT = q.Lb;
              q.Mb = x.qd(k);
              q.jf = q.Mb ? !0 : !1;
              t.GL_EXT_COLORBUFFERHALFFLOAT = q.Mb;
              na.v();
              Fa.v();
              if (!x.He()) return !1;
              oa.v();
              Fa.gf();
              return !0;
            },
            reset: function() {
              q = Object.assign({}, p);
              l = Object.assign({}, r);
            },
            F: function() {
              n || a();
              return e.F();
            },
            W: function() {
              n || a();
              return e.W();
            },
            la: function() {
              n || a();
              return e.la();
            },
            od: function(k) {
              x.pd(k);
              x.qd(k);
              x.rd(k);
              x.sd(k);
              x.Za(k);
              x.td(k);
            },
            pd: b.bind(null, [
              "EXT_color_buffer_float",
              "WEBGL_color_buffer_float",
              "OES_color_buffer_float"
            ]),
            qd: b.bind(null, [
              "EXT_color_buffer_half_float",
              "WEBGL_color_buffer_half_float",
              "OES_color_buffer_half_float"
            ]),
            rd: b.bind(null, [
              "OES_texture_float",
              "MOZ_OES_texture_float",
              "WEBKIT_OES_texture_float"
            ]),
            sd: b.bind(null, [
              "OES_texture_float_linear",
              "MOZ_OES_texture_float_linear",
              "WEBKIT_OES_texture_float_linear"
            ]),
            Za: b.bind(null, [
              "OES_texture_half_float",
              "MOZ_OES_texture_half_float",
              "WEBKIT_OES_texture_half_float"
            ]),
            td: b.bind(null, [
              "OES_texture_half_float_linear",
              "MOZ_OES_texture_half_float_linear",
              "WEBKIT_OES_texture_half_float_linear"
            ]),
            $b: function(k) {
              var m = x.Za(k);
              return m && m.HALF_FLOAT_OES
                ? m.HALF_FLOAT_OES
                : k.HALF_FLOAT || k.FLOAT;
            },
            Ve: function() {
              return D || c.RGBA32F || c.RGBA;
            },
            We: function() {
              return C || c.RGBA16F || c.RGBA;
            },
            Re: function() {
              return l;
            },
            dd: function() {
              return l.ja;
            },
            jg: function() {
              return l.ka;
            },
            ig: function() {
              return l.Xb;
            },
            ye: function() {
              return l.Xd && u;
            },
            he: function(k) {
              u = k;
              !k &&
                g.Na &&
                (c.deleteSync(g.ib), c.bindBuffer(g.aa, null), (g.Na = !1));
            },
            Ab: function(k, m, H) {
              function I() {
                k.bindTexture(k.TEXTURE_2D, null);
                k.bindFramebuffer(N, null);
                k.deleteTexture(M);
                k.deleteFramebuffer(J);
              }
              var N = k.FRAMEBUFFER,
                z = k.NEAREST,
                J = k.createFramebuffer();
              k.bindFramebuffer(N, J);
              var M = k.createTexture();
              k.activeTexture(k.TEXTURE0);
              k.bindTexture(k.TEXTURE_2D, M);
              k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL, !1);
              k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_S, k.CLAMP_TO_EDGE);
              k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_T, k.CLAMP_TO_EDGE);
              k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MAG_FILTER, z);
              k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MIN_FILTER, z);
              k.texImage2D(k.TEXTURE_2D, 0, m, 3, 3, 0, k.RGBA, H, null);
              k.framebufferTexture2D(
                k.FRAMEBUFFER,
                k.COLOR_ATTACHMENT0,
                k.TEXTURE_2D,
                M,
                0
              );
              if (
                k.checkFramebufferStatus(
                  k.READ_FRAMEBUFFER || k.FRAMEBUFFER
                ) !== k.FRAMEBUFFER_COMPLETE
              )
                return I(), !1;
              ya.Gc(k);
              k.clearColor(0, 0, 0, 0);
              k.viewport(0, 0, 3, 3);
              k.disable(k.DEPTH_TEST);
              k.clear(k.COLOR_BUFFER_BIT);
              oa.ab(k);
              k.bindFramebuffer(N, null);
              ya.Qa(k);
              k.activeTexture(k.TEXTURE0);
              k.bindTexture(k.TEXTURE_2D, M);
              oa.ab(k);
              m = new Uint8Array(36);
              k.readPixels(0, 0, 3, 3, k.RGBA, k.UNSIGNED_BYTE, m);
              I();
              for (H = 0; 36 > H; ++H)
                if (3 !== H % 4 && 3 < Math.abs(m[H] - 127)) return !1;
              return !0;
            },
            Pb: function(k) {
              var m = { ja: !1, ka: !1 };
              k.disable(k.BLEND);
              k.clearColor(0, 0, 0, 0);
              k.clear(k.COLOR_BUFFER_BIT);
              k.RGBA32F &&
                x.Ab(k, k.RGBA32F, k.FLOAT) &&
                ((m.ja = !0), (D = k.RGBA32F));
              !m.ja && x.Ab(k, k.RGBA, k.FLOAT) && ((m.ja = !0), (D = k.RGBA));
              var H = x.$b(k);
              C = null;
              k.RGBA16F &&
                x.Ab(k, k.RGBA16F, H) &&
                ((m.ka = !0), (C = k.RGBA16F));
              !m.ka && x.Ab(k, k.RGBA, H) && ((m.ka = !0), (C = k.RGBA));
              return m;
            },
            Ie: function() {
              var k = na.instance({ width: 2 });
              k.ce();
              var m = Fa.instance({ width: 2, isFloat: !0, rb: 3 });
              k.u();
              m.u();
              c.flush();
              c.checkFramebufferStatus(na.Ye()) !== c.FRAMEBUFFER_COMPLETE
                ? (Fa.Jf(), (l.Xb = !1))
                : (l.Xb = !0);
              k.remove();
              m.remove();
            },
            Je: function() {
              var k = !1;
              x.la() &&
                (k = "PIXEL_PACK_BUFFER STREAM_READ SYNC_GPU_COMMANDS_COMPLETE WAIT_FAILED fenceSync deleteSync createBuffer"
                  .split(" ")
                  .every(function(m) {
                    return "undefined" !== typeof c[m];
                  }));
              l.Xd = k;
            },
            He: function() {
              var k = x.Pb(c);
              Object.assign(l, k);
              if (!l.ja && !l.ka) return !1;
              x.Ie();
              x.Je();
              return !0;
            },
            wb: function(k, m, H, I, N) {
              if (!x.ye())
                return (
                  c.readPixels(k, m, H, I, c.RGBA, c.UNSIGNED_BYTE, N),
                  Promise.resolve(N)
                );
              null === g.za &&
                ((g.aa = c.PIXEL_PACK_BUFFER),
                (g.za = c.createBuffer()),
                (g.cc = -1));
              c.bindBuffer(g.aa, g.za);
              N.byteLength !== g.cc &&
                (c.bufferData(g.aa, N.byteLength, c.STREAM_READ),
                (g.cc = N.byteLength));
              c.readPixels(k, m, H, I, c.RGBA, c.UNSIGNED_BYTE, 0);
              g.ib = c.fenceSync(c.SYNC_GPU_COMMANDS_COMPLETE, 0);
              c.flush();
              return new Promise(function(z, J) {
                function M() {
                  if (!g.Na) return d(), J(), !1;
                  switch (c.clientWaitSync(g.ib, 0, 0)) {
                    case c.TIMEOUT_EXPIRED:
                    case c.WAIT_FAILED:
                      return !1;
                    default:
                      return (
                        d(),
                        c.deleteSync(g.ib),
                        c.getBufferSubData(g.aa, 0, N),
                        c.bindBuffer(g.aa, null),
                        z(N),
                        !0
                      );
                  }
                }
                d();
                g.Na = !0;
                M() || (g.Db = setInterval(M, 0));
              });
            },
            m: function() {
              d();
              Fa.m();
              na.m();
              oa.m();
              null !== g.za && (c.deleteBuffer(g.za), (g.za = null));
              ya.reset();
              n = !1;
            }
          };
        return x;
      })(),
      V = oa,
      wa = na,
      Y = Fa,
      Ha = (function() {
        function a(J, M, v, f) {
          m.texParameteri(
            m.TEXTURE_2D,
            m.TEXTURE_MIN_FILTER,
            f ? m.NEAREST_MIPMAP_NEAREST : m.LINEAR
          );
          var y = null;
          if (null !== v)
            try {
              y = m.getError();
              if ("FUCKING_BIG_ERROR" === y) return !1;
              m.texImage2D(m.TEXTURE_2D, 0, J, 4, 4, 0, m.RGBA, M, v);
              y = m.getError();
              if (y !== m.NO_ERROR) return !1;
            } catch (G) {
              return !1;
            }
          f && m.generateMipmap(m.TEXTURE_2D);
          m.clear(m.COLOR_BUFFER_BIT);
          V.ab(m);
          y = m.getError();
          if ("FUCKING_BIG_ERROR" === y) return !1;
          m.readPixels(0, 0, 2, 2, m.RGBA, m.UNSIGNED_BYTE, C);
          y = m.getError();
          y === m.INVALID_OPERATION &&
            "undefined" !== typeof m.PIXEL_PACK_BUFFER &&
            (m.bindBuffer(m.PIXEL_PACK_BUFFER, null),
            m.readPixels(0, 0, 2, 2, m.RGBA, m.UNSIGNED_BYTE, C),
            (y = m.getError()));
          if (y !== m.NO_ERROR) return !1;
          v = !0;
          for (f = 0; 16 > f; ++f) v = v && 4 > Math.abs(C[f] - 127);
          v && ((l.Vd = M), (l.Ed = J));
          return v;
        }
        function b(J, M) {
          return H.ja && a(J, m.FLOAT, new Float32Array(D), M)
            ? ((r = q.Xc), !0)
            : !1;
        }
        function d(J, M, v) {
          if (!H.ka) return !1;
          var f = Fa.De(D),
            y = aa.Za(m);
          if (
            (y && y.HALF_FLOAT_OES && a(J, y.HALF_FLOAT_OES, f, M)) ||
            (m.HALF_FLOAT && a(J, m.HALF_FLOAT, f, M))
          )
            return (r = q.Ga), !0;
          f = new Float32Array(D);
          if (a(J, m.FLOAT, f, M)) return (r = q.Ga), !0;
          m.bindTexture(m.TEXTURE_2D, v);
          m.texImage2D(
            m.TEXTURE_2D,
            0,
            m.RGBA,
            2,
            2,
            0,
            m.RGBA,
            m.UNSIGNED_BYTE,
            null
          );
          m.bindFramebuffer(l.Wa, z);
          Fa.vd(m, v, 2, 2, f, !1, !1);
          m.bindFramebuffer(l.Wa, null);
          m.bindTexture(m.TEXTURE_2D, v);
          return a(J, null, null, M) ? ((r = q.Ga), !0) : !1;
        }
        function e(J, M, v) {
          u = !0;
          if (d(J, !0, v) || b(M, !0)) return !0;
          u = !1;
          return d(J, !1, v) || b(M, !1) ? !0 : !1;
        }
        function n(J) {
          if (r === q.T) {
            m = J || c;
            r = q.RGBA8;
            u = !0;
            aa.od(m);
            H || (H = aa.Pb(m));
            wa.reset();
            z = m.createFramebuffer();
            l.Wa = m.DRAW_FRAMEBUFFER || m.FRAMEBUFFER;
            m.bindFramebuffer(l.Wa, null);
            m.clearColor(0, 0, 0, 0);
            m.viewport(0, 0, 2, 2);
            B.T();
            I = B.Qa(m);
            J = m.createTexture();
            m.activeTexture(m.TEXTURE0);
            m.bindTexture(m.TEXTURE_2D, J);
            m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_S, m.REPEAT);
            m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_T, m.REPEAT);
            m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MAG_FILTER, m.NEAREST);
            N = J;
            var M = (J = m.RGBA),
              v = m.RGBA16F,
              f = m.RGBA32F;
            f && (J = f);
            v && (M = v);
            if ((v || f) && e(M, J, N)) return p(), !0;
            J = M = m.RGBA;
            if (e(M, J, N)) return p(), !0;
            r = q.RGBA8;
            p();
            return !1;
          }
        }
        function p() {
          m.deleteProgram(I.wa);
          m.deleteTexture(N);
          N = I = null;
        }
        for (
          var q = { T: -1, Xc: 3, Ga: 2, RGBA8: 0 },
            r = q.T,
            l = { Vd: null, Ed: null, Wa: null },
            u = !0,
            C = new Uint8Array(16),
            D = Array(64),
            g = 0;
          4 > g;
          ++g
        )
          for (var t = 0; 4 > t; ++t) {
            var x = 0 === (t + g) % 2 ? 1 : 0,
              k = 4 * g + t;
            D[4 * k] = x;
            D[4 * k + 1] = x;
            D[4 * k + 2] = x;
            D[4 * k + 3] = x;
          }
        var m = null,
          H = null,
          I = null,
          N = null,
          z = null;
        return {
          xe: function(J) {
            n(J);
            return u;
          },
          cd: function(J, M) {
            r === q.T && (typeof ("undefined" !== M) && (H = M), n(J));
            return r !== q.RGBA8;
          },
          ph: function(J) {
            n(J);
            return r === q.Xc;
          },
          qf: function(J) {
            n(J);
            return r === q.Ga;
          },
          Zg: function(J) {
            n(J);
            return l.Vd;
          },
          Xe: function(J) {
            n(J);
            return l.Ed;
          },
          m: function() {
            m = null;
            u = !0;
            r = q.T;
            H = null;
          }
        };
      })(),
      bc = (function() {
        return {
          instance: function(a) {
            var b = Y.instance(a.alpha),
              d = Y.instance(a.beta);
            return {
              Le: function() {
                b.g(1);
                d.g(2);
              }
            };
          }
        };
      })(),
      Nb = (function() {
        return {
          instance: function(a) {
            var b = null,
              d = !1,
              e = !1,
              n = null,
              p = !1,
              q = !1,
              r = null,
              l = "undefined" === typeof a.preprocessing ? !1 : a.preprocessing,
              u =
                "undefined" === typeof a.preprocessingSize
                  ? a.size
                  : a.preprocessingSize;
            a.mask &&
              ((d = !0),
              fa && void 0 !== fa.se && (a.mask = fa.se + a.mask),
              (b = Y.instance({ isFloat: !1, url: a.mask })));
            var C = !1;
            a.customInputShader &&
              ((C = "s45"),
              B.Zc({
                name: "_",
                id: C,
                h: a.customInputShader,
                Sh: ["uSource"],
                precision: "lowp"
              }),
              B.O(C, [{ type: "1i", name: "_", value: 0 }]));
            switch (l) {
              case "sobel":
                r = "s32";
                p = !0;
                break;
              case "meanNormalization":
                r = "s33";
                p = !0;
                break;
              case "grayScale":
                r = "s29";
                p = !1;
                break;
              case "grayScaleTilt":
                r = "s30";
                q = !0;
                p = !1;
                break;
              case "rgbGrayTilt":
                r = "s31";
                q = !0;
                p = !1;
                break;
              case "copy":
                r = C ? C : "s0";
                break;
              case "inputLightRegulation":
                r = C ? C : "s29";
                n = cc.instance({ Dd: u, Ud: a.size, Rd: a.nBlurPass, lb: !1 });
                e = !0;
                break;
              case "inputMix0":
                r = "none";
                n = dc.instance({
                  B: u,
                  ke: a.varianceMin,
                  bd: a.blurKernelSizePx,
                  lb: !1
                });
                e = !0;
                break;
              case "direct":
              case "none":
                r = "abort";
                break;
              default:
                r = "s4";
            }
            q && B.O(r, [{ name: "u27", type: "1f", value: a.tilt }]);
            d && (r += "Mask");
            var D = Y.instance({ isFloat: !1, isPot: !1, width: a.size }),
              g = {
                F: function() {
                  return u;
                },
                ac: function() {
                  return g.F();
                },
                bf: function() {
                  return e ? n.bc() : D;
                },
                X: function(t) {
                  wa.ia();
                  "abort" !== r &&
                    ("none" !== r &&
                      (B.set(r),
                      p && B.H("u28", 1 / a.size),
                      D.ea(),
                      d && b.g(1),
                      V.l(!1, !1),
                      D.g(0),
                      (t = D)),
                    e && n.process(t));
                },
                m: function() {
                  D.remove();
                  d && b.remove();
                }
              };
            return g;
          }
        };
      })(),
      Ob = (function() {
        return {
          instance: function(a) {
            function b(h) {
              n.forEach(function(F, K) {
                p[K][0] = h[0][F];
                p[K][1] = h[1][F];
                p[K][2] = h[2][F];
                p[K][3] = h[3][F];
              });
              return p;
            }
            "undefined" === typeof a.normalize && (a.normalize = !1);
            var d = {
                input: null,
                Ua: null,
                hc: null,
                da: null,
                sb: null,
                zc: null,
                Ac: null
              },
              e = null,
              n = [],
              p = [],
              q = !1,
              r = null,
              l = !0,
              u = -1,
              C = a.isReorganize ? a.isReorganize : !1,
              D = a.kernelsCount ? !0 : !1,
              g = a.dynPelu ? bc.instance(a.dynPelu) : !1,
              t = g ? !0 : !1,
              x = { isEnabled: !1 };
            a.mf
              ? ((a.sparsity =
                  "undefined" !== typeof a.sparsity ? a.sparsity : a.ub.ac()),
                (l = !1))
              : "full" === a.connectivityUp && (a.sparsity = a.ub.ac());
            var k = {
                elu: "s16",
                elu01: "s17",
                relu: "s15",
                arctan: "s19",
                sigmoid: "s14",
                copy: "s0",
                softplus: "s20",
                dynPelu: "s18"
              }[a.activation],
              m = a.sparsity * a.sparsity,
              H = !1,
              I = a.size,
              N = "";
            if (a.maxPooling) {
              switch (a.maxPooling.size) {
                case 2:
                  N = "s34";
                  break;
                case 4:
                  N = "s35";
              }
              H = !0;
              I /= a.maxPooling.size;
              d.zc = Y.instance({ isFloat: !0, isPot: !1, width: I });
            }
            var z = void 0 !== a.xf && a.xf ? !0 : !1,
              J = null,
              M = null,
              v = null;
            if (z) {
              J = "s46" + a.index.toString();
              B.Cd("s46", J, [((a.normalization.n - 1) / 2).toFixed(1)]);
              B.O(J, [
                { type: "1i", name: "u1", value: 0 },
                { type: "2f", name: "u8", value: [1 / a.size, 1 / a.size] },
                { type: "1f", name: "u7", value: a.normalization.alpha },
                { type: "1f", name: "u10", value: a.normalization.beta },
                { type: "1f", name: "u31", value: a.normalization.k }
              ]);
              var f = { isFloat: !0, isPot: !0, width: a.size };
              M = Y.instance(f);
              v = Y.instance(f);
            }
            var y = -1,
              G = null;
            l && (d.da = Y.instance({ isFloat: !0, isPot: !1, width: a.size }));
            d.Ua = Y.instance(a.bias);
            var L = {
              F: function() {
                return a.size;
              },
              ac: function() {
                return I;
              },
              yd: function() {
                return a.classesCount;
              },
              ue: function(h) {
                e.g(h);
              },
              Af: function() {
                a.remap &&
                  a.remap.isEnabled &&
                  (x = {
                    isEnabled: !0,
                    tf: Y.instance({
                      isFloat: !1,
                      isFlipY: !1,
                      array: new Uint8Array(a.remap.maskTexture.data),
                      width: a.remap.maskTexture.width,
                      isPot: !1
                    }),
                    ob: a.remap.layers.map(function(h) {
                      return a.parent.$e(h);
                    }),
                    depth: a.remap.depth
                  });
              },
              Kf: function() {
                switch (a.connectivityUp) {
                  case "direct":
                    G = ec.instance(a.connectivity);
                    break;
                  case "square":
                    G = fc.instance(a.connectivity);
                    break;
                  case "squareFast":
                    G = gc.instance(a.connectivity, a.activation);
                    break;
                  case "full":
                    G = hc.instance(a.connectivity);
                    break;
                  case "conv":
                    (u = a.kernelsCount),
                      (G = ic.instance(a.connectivity)),
                      C &&
                        (d.sb = Y.instance({
                          width: I,
                          isFloat: !0,
                          isFlipY: !1,
                          isPot: !1
                        }));
                }
                if (G.Ea) {
                  var h = a.size * a.sparsity;
                  y = Math.log(h / a.size) / Math.log(2);
                  d.input = Y.instance({
                    isMipmap: !0,
                    isFloat: !0,
                    isPot: !0,
                    width: h,
                    sc: y
                  });
                  d.hc = Y.instance({ isFloat: !0, isPot: !0, width: a.size });
                }
              },
              X: function(h, F) {
                e = h;
                G.Ea
                  ? (d.input.ea(),
                    D && d.Ua.g(2),
                    G.X(x),
                    d.input.g(0),
                    d.input.Oe(y),
                    d.hc.ea(),
                    D ? B.set("s0") : (B.set("s28"), B.H("u26", m), d.Ua.g(1)),
                    d.input.ve(y, 0),
                    V.l(!1, !1),
                    B.set(k),
                    z ? M.u() : d.da.u(),
                    d.hc.g(0),
                    t && g.Le(),
                    V.l(!1, !1))
                  : (d.da.ea(), d.Ua.g(1), G.X());
                z &&
                  (B.set(J),
                  v.u(),
                  M.g(0),
                  V.l(!1, !1),
                  B.set("s47"),
                  B.H("u7", 1),
                  d.da.u(),
                  v.g(1),
                  V.l(!1, !1));
                if (l)
                  return (
                    H
                      ? (d.zc.ea(),
                        d.da.g(0),
                        B.set(N),
                        B.fa("u8", 1 / a.size, 1 / a.size),
                        V.l(!1, !1),
                        (F = d.zc))
                      : (F = d.da),
                    F.g(0),
                    C &&
                      (d.sb.u(),
                      B.set("s22"),
                      B.fa("u13", u, I / u),
                      V.l(!1, !1),
                      (F = d.sb),
                      d.sb.g(0)),
                    F
                  );
                var K = d.da;
                a.normalize &&
                  (B.set("gpuRawAvg" === q ? "s9" : "s8"),
                  B.H("u4", 1 / a.size),
                  d.Ac.ea(),
                  d.da.g(0),
                  V.l(!1, !1),
                  (K = d.Ac));
                h = null;
                switch (q) {
                  case "cpuRGBA2Float":
                    K.ld(!1);
                    F ? (h = L.Bf(K).then(r)) : ((K = L.Cf(K)), r(K));
                    break;
                  case "cpuMeanFloat":
                    K.ld(!0);
                    F ? (h = K.Ef().then(r)) : ((K = K.Ff()), r(K));
                    break;
                  case "gpuRawAvg":
                  case "gpuRaw":
                    K.g(0);
                  case "none":
                    null !== r && r(K);
                }
                F && null === h && (h = Promise.resolve());
                return h;
              },
              Fe: function(h) {
                h && ((q = h.Bc || "none"), (r = h.yc || null));
                d.da = Y.instance({
                  isFloat: !0,
                  isPot: !0,
                  isMipmap: !1,
                  width: a.size
                });
                h =
                  "undefined" !== typeof a.classesCount && a.classesCount
                    ? a.classesCount
                    : a.size * a.size;
                for (var F = 0, K = 0, P = 0; F < h; ++F)
                  n.push(K + (a.size - 1 - P) * a.size),
                    p.push([-1, -1, -1, -1]),
                    ++K,
                    K === a.size && ((K = 0), ++P);
                a.normalize &&
                  (d.Ac = Y.instance({
                    isFloat: !0,
                    isPot: !0,
                    width: a.size
                  }));
              },
              Bf: function(h) {
                return h.Df().then(b);
              },
              Cf: function(h) {
                h = h.Yd();
                b(h);
                return p;
              },
              m: function() {
                for (var h in d) {
                  var F = d[h];
                  F && F.remove();
                }
                G && (G.m(), (G = null));
              }
            };
            a.ub && L.Kf(a.ub);
            return L;
          }
        };
      })(),
      ec = (function() {
        return {
          instance: function(a) {
            var b = Y.instance(a.weights);
            return {
              Ea: !0,
              cb: function() {
                return 1;
              },
              m: function() {
                b.remove();
              },
              ff: function() {
                return b;
              },
              X: function() {
                B.set("s27");
                b.g(1);
                V.l(!1, !1);
              }
            };
          }
        };
      })(),
      hc = (function() {
        return {
          instance: function(a) {
            var b = a.fromLayerSize,
              d = Y.instance(a.weights);
            return {
              Ea: !0,
              cb: function() {
                return b;
              },
              m: function() {
                d.remove();
              },
              X: function(e) {
                if (e.isEnabled) {
                  B.set("s25");
                  e.tf.g(3);
                  var n,
                    p = Math.min(e.ob.length, e.depth);
                  for (n = 0; n < p; ++n) e.ob[n].ue(4 + n);
                } else B.set("s24");
                B.H("u17", a.toLayerSize);
                d.g(1);
                V.l(!1, !1);
              }
            };
          }
        };
      })(),
      fc = (function() {
        return {
          instance: function(a) {
            for (
              var b = a.fromLayerSize,
                d = a.toLayerSize,
                e = a.toSparsity,
                n = e * d,
                p = n / b,
                q = b / d,
                r = 0,
                l = 0,
                u = 0,
                C = Array(e * d * e * d * 4),
                D = Array(e * d * e * d * 4),
                g = Array(b * b),
                t = 0;
              t < g.length;
              ++t
            )
              g[t] = 0;
            t = Math.floor(e / 2);
            for (var x = 0.5 / d, k = 0.5 / b, m = 0.5 / n, H = 0; H < d; ++H)
              for (var I = Math.round(H * q), N = 0; N < d; ++N) {
                var z = Math.round(N * q),
                  J = H / d,
                  M = N / d;
                J += x;
                M += x;
                for (var v = 0; v < e; ++v) {
                  var f = I + v - t;
                  0 > f && (f += b);
                  f >= b && (f -= b);
                  for (var y = 0; y < e; ++y) {
                    var G = r / n,
                      L = l / n,
                      h = z + y - t;
                    0 > h && (h += b);
                    h >= b && (h -= b);
                    var F = f / b,
                      K = h / b;
                    L = 1 - L - 1 / n;
                    F += k;
                    K += k;
                    G += m;
                    L += m;
                    var P = H * e + v,
                      ca = N * e + y;
                    ca = d * e - ca - 1;
                    P = ca * d * e + P;
                    C[4 * P] = G;
                    C[4 * P + 1] = L;
                    C[4 * P + 2] = F;
                    C[4 * P + 3] = K;
                    K = g[h * b + f]++;
                    P = K % p;
                    F = f * p + P;
                    h = h * p + (K - P) / p;
                    h = b * p - 1 - h;
                    h = h * b * p + F;
                    D[4 * h] = G;
                    D[4 * h + 1] = L;
                    D[4 * h + 2] = J;
                    D[4 * h + 3] = M;
                    ++r >= n && ((r = 0), ++l);
                    ++u;
                  }
                }
              }
            g = null;
            var ra = Y.instance(a.weights);
            delete a.weights.data;
            var Da = Y.instance({
              width: n,
              isFloat: !0,
              array: new Float32Array(D),
              isPot: !0
            });
            D = null;
            var w = Y.instance({
              width: n,
              isFloat: !0,
              array: new Float32Array(C),
              isPot: !0
            });
            C = null;
            return {
              Ea: !0,
              cb: function() {
                return p;
              },
              m: function() {
                Da.remove();
                w.remove();
                ra.remove();
              },
              X: function() {
                B.set("s23");
                ra.g(1);
                w.g(2);
                V.l(!1, !1);
              }
            };
          }
        };
      })(),
      ic = (function() {
        return {
          instance: function(a) {
            var b = a.kernelsCount,
              d = a.toSparsity,
              e = (d * a.toLayerSize) / a.fromLayerSize,
              n = Y.instance(a.weights);
            return {
              Ea: !0,
              cb: function() {
                return e;
              },
              jh: function() {
                return d;
              },
              ff: function() {
                return n;
              },
              m: function() {
                n.remove();
              },
              X: function() {
                B.set("s26");
                B.H("u23", b);
                B.H("u24", d);
                B.H("u17", a.toLayerSize);
                B.H("u25", a.fromLayerSize);
                n.g(1);
                V.l(!1, !1);
              }
            };
          }
        };
      })(),
      gc = (function() {
        return {
          instance: function(a, b) {
            var d = a.fromLayerSize,
              e = a.toLayerSize,
              n = a.toSparsity,
              p = a.stride ? a.stride : 1,
              q = (n * e) / d,
              r = e < d,
              l = d / e,
              u = Y.instance(a.weights),
              C =
                "s48" +
                [
                  d.toString(),
                  e.toString(),
                  n.toString(),
                  p.toString(),
                  b
                ].join("_");
            B.Ne(C) ||
              ((a = $b.Pe(b, "gl_FragColor", "gl_FragColor")),
              (e = [
                { type: "1f", name: "u17", value: e },
                { type: "1f", name: "u30", value: p }
              ]),
              r && e.push({ type: "1f", name: "u25", value: d }),
              (d = [(r ? q : n).toFixed(1), a]),
              r && d.push(l.toFixed(1)),
              B.Cd(r ? "s40" : "s39", C, d),
              B.O(
                C,
                e.concat([
                  { type: "1i", name: "u15", value: 0 },
                  { type: "1i", name: "u22", value: 1 },
                  { type: "1i", name: "u14", value: 3 }
                ])
              ));
            return {
              Ea: !1,
              cb: function() {
                return q;
              },
              m: function() {
                u.remove();
              },
              X: function() {
                B.set(C);
                u.g(3);
                V.l(!1, !1);
              }
            };
          }
        };
      })(),
      cc = (function() {
        return {
          instance: function(a) {
            var b = a.Rd ? a.Rd : 3,
              d = a.Dd ? a.Dd : 64,
              e = a.Ud ? a.Ud : 64,
              n = a.lb ? !0 : !1;
            a = { isFloat: !1, width: d, isPot: !1, isFlipY: !1 };
            var p = Y.instance(a),
              q = Y.instance(a),
              r = Y.instance(a),
              l = Y.instance(a),
              u = Y.instance({ isFloat: !0, width: e, isPot: !1, isFlipY: !1 }),
              C = 1 / d;
            return {
              process: function(D) {
                B.set("s36");
                l.u();
                V.l(n, !1);
                B.set("s37");
                for (var g = 0; g < b; ++g)
                  p.u(),
                    B.fa("u8", C, 0),
                    V.l(n, !1),
                    r.u(),
                    l.g(0),
                    V.l(n, !1),
                    q.u(),
                    p.g(0),
                    B.fa("u8", 0, C),
                    V.l(n, !1),
                    l.u(),
                    r.g(0),
                    V.l(n, !1),
                    g !== b - 1 && q.g(0);
                B.set("s38");
                u.u();
                D.g(0);
                q.g(1);
                l.g(2);
                V.l(n, !1);
                u.g(0);
              },
              bc: function() {
                return u;
              }
            };
          }
        };
      })(),
      dc = (function() {
        return {
          instance: function(a) {
            function b(u) {
              return Y.instance({
                isFloat: u,
                width: d.B,
                isPot: !1,
                isFlipY: !1
              });
            }
            var d = Object.assign({ ke: 0.1, bd: 9, B: 128, lb: !1 }, a),
              e = b(!1),
              n = [b(!1), b(!1), b(!1)],
              p = [b(!1), b(!1), b(!1)],
              q = b(!0),
              r = [e, p[0], p[1]];
            a = "uniform sampler2D u1;const float e=1.1111,g=2.2222;uniform vec2 u32;varying vec2 vv0;void main(){float b=0.,c=0.;for(float a=-e;a<=e;a+=1.){vec2 i=u32*a,j=vv0+i*g;float d=1.2*a/e,f=exp(-d*d);b+=f*texture2D(u1,j).r,c+=f;}b/=c,gl_FragColor=vec4(b,0.,0.,1.);}"
              .replace("1.1111", Math.round((d.bd - 1) / 2).toFixed(2))
              .replace("2.2222", (1 / d.B).toFixed(6));
            var l = { u1: 0 };
            B.$c([
              {
                id: "s50",
                name: "_",
                h:
                  "uniform sampler2D u1;varying vec2 vv0;const vec3 f=vec3(.2126,.7152,.0722),g=vec3(1.,1.,1.);void main(){vec3 b=texture2D(u1,vv0).rgb;float a=dot(b,f);gl_FragColor=vec4(a,a,a,a);}",
                j: l,
                i: ["u1"],
                precision: "lowp"
              },
              {
                id: "s51",
                name: "_",
                h: a,
                j: l,
                i: ["u1", "u32"],
                precision: "lowp"
              },
              {
                id: "s52",
                name: "_",
                h: "uniform sampler2D u33,u34,u35,u36;const float f=1.1111;const vec3 g=vec3(1.,1.,1.);varying vec2 vv0;void main(){vec3 a=texture2D(u33,vv0).rgb;float c=texture2D(u34,vv0).r,d=texture2D(u35,vv0).r,h=texture2D(u36,vv0).r,i=a.r*a.r;vec3 b=vec3(c,d,h),j=max(g*f,abs(i-b*b)),k=sqrt(j);gl_FragColor=vec4(a.r,(a-b)/k);}".replace(
                  "1.1111",
                  d.ke.toFixed(4)
                ),
                j: { u33: 0, u34: 1, u35: 2, u36: 3 },
                i: ["u33", "u34", "u35", "u36"],
                precision: "highp"
              }
            ]);
            return {
              process: function() {
                B.set("s50");
                e.ea();
                V.l(d.lb, !1);
                B.set("s51");
                for (var u = 0; 3 > u; ++u)
                  B.fa("u32", 1, 0),
                    n[u].u(),
                    r[u].g(0),
                    V.l(!1, !1),
                    B.fa("u32", 0, 1),
                    p[u].u(),
                    n[u].g(0),
                    V.l(!1, !1);
                B.set("s52");
                q.u();
                e.g(0);
                p[0].g(1);
                p[1].g(2);
                p[2].g(3);
                V.l(!1, !1);
                q.g(0);
              },
              bc: function() {
                return q;
              }
            };
          }
        };
      })(),
      X = {
        ef: function() {
          return X.jd() ? document.createElement("video") : !1;
        },
        Ma: function(a, b) {
          a[b] = !0;
          a.setAttribute(b, "true");
        },
        Be: function() {
          var a = !1,
            b = navigator.userAgent || navigator.vendor || window.opera;
          if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              b
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              b.substr(0, 4)
            )
          )
            a = !0;
          return a;
        },
        fd: function() {
          return (
            /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
          );
        },
        Qe: function() {
          var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
          return a && a.length && 2 < a.length
            ? [parseInt(a[1], 10), parseInt(a[2], 10), parseInt(a[3] || 0, 10)]
            : [0, 0, 0];
        },
        Md: function() {
          try {
            return window.matchMedia("(orientation: portrait)").matches
              ? !0
              : !1;
          } catch (a) {
            return window.innerHeight > window.innerWidth;
          }
        },
        Ae: function() {
          return X.gd() || X.fd();
        },
        gd: function() {
          var a = navigator.userAgent.toLowerCase();
          return -1 !== a.indexOf("safari") && -1 === a.indexOf("chrome")
            ? !0
            : !1;
        },
        Og: function() {
          return X.Be()
            ? X.Md()
              ? (window.innerHeight / window.innerWidth) * 45
              : 45
            : 45;
        },
        jd: function() {
          return navigator.mediaDevices && navigator.mediaDevices.getUserMedia
            ? !0
            : !1;
        },
        pause: function(a) {
          a.pause();
        },
        Fh: function(a) {
          a.play();
        },
        release: function(a) {
          a.pause();
          a.videoStream && a.videoStream.stop();
          a.videoStream = null;
        },
        hd: function(a) {
          if (!a) return a;
          var b = null;
          if (a.video) {
            var d = function(e) {
              return e && "object" === typeof e ? Object.assign({}, e) : e;
            };
            b = {};
            "undefined" !== typeof a.video.width &&
              (b.width = d(a.video.width));
            "undefined" !== typeof a.video.height &&
              (b.height = d(a.video.height));
            "undefined" !== typeof a.video.facingMode &&
              (b.facingMode = d(a.video.facingMode));
          }
          b = { audio: a.audio, video: b };
          "undefined" !== typeof a.deviceId && X.Yc(b, a.deviceId);
          return b;
        },
        Yc: function(a, b) {
          b &&
            ((a.video = a.video || {}),
            (a.video.deviceId = { exact: b }),
            a.video.facingMode && delete a.video.facingMode);
        },
        fe: function(a) {
          var b = a.video.width;
          a.video.width = a.video.height;
          a.video.height = b;
          return a;
        },
        Ee: function(a) {
          function b(g) {
            return [
              480,
              576,
              640,
              648,
              720,
              768,
              800,
              960,
              1080,
              1152,
              1280,
              1366,
              1920
            ].sort(function(t, x) {
              return Math.abs(t - g) - Math.abs(x - g);
            });
          }
          function d(g) {
            var t = X.hd(a);
            g = g(t);
            n.push(g);
            e(g);
          }
          function e(g) {
            if (g.video && g.video.facingMode && g.video.facingMode.exact) {
              var t = g.video.facingMode.exact;
              g = X.hd(g);
              delete g.video.facingMode.exact;
              g.video.facingMode.ideal = t;
              n.push(g);
            }
          }
          var n = [];
          if (!a || !a.video) return n;
          e(a);
          if (a.video.width && a.video.height) {
            if (a.video.width.ideal && a.video.height.ideal) {
              var p = b(a.video.width.ideal).slice(0, 3),
                q = b(a.video.height.ideal).slice(0, 3),
                r = {},
                l = 0;
              for (r.pa = void 0; l < p.length; r = { pa: r.pa }, ++l) {
                r.pa = p[l];
                var u = {},
                  C = 0;
                for (u.oa = void 0; C < q.length; u = { oa: u.oa }, ++C)
                  if (
                    ((u.oa = q[C]),
                    r.pa !== a.video.width.ideal ||
                      u.oa !== a.video.height.ideal)
                  ) {
                    var D = Math.max(r.pa, u.oa) / Math.min(r.pa, u.oa);
                    D < 4 / 3 - 0.1 ||
                      D > 16 / 9 + 0.1 ||
                      d(
                        (function(g, t) {
                          return function(x) {
                            x.video.width.ideal = g.pa;
                            x.video.height.ideal = t.oa;
                            return x;
                          };
                        })(r, u)
                      );
                  }
              }
            }
            d(function(g) {
              return X.fe(g);
            });
          }
          a.video.width &&
            a.video.height &&
            (a.video.width.ideal &&
              a.video.height.ideal &&
              d(function(g) {
                delete g.video.width.ideal;
                delete g.video.height.ideal;
                return g;
              }),
            d(function(g) {
              delete g.video.width;
              delete g.video.height;
              return g;
            }));
          a.video.facingMode &&
            (d(function(g) {
              delete g.video.facingMode;
              return g;
            }),
            a.video.width &&
              a.video.height &&
              d(function(g) {
                X.fe(g);
                delete g.video.facingMode;
                return g;
              }));
          n.push({ audio: a.audio, video: !0 });
          return n;
        },
        Uf: function(a) {
          if (X.Md()) {
            if (!a || !a.video) return !1;
            var b = a.video.width,
              d = a.video.height;
            if (!b || !d) return !1;
            if (b.ideal && d.ideal && b.ideal > d.ideal)
              return (a.video.height = b), (a.video.width = d), !0;
          }
          return !1;
        },
        qb: function(a) {
          a.volume = 0;
          X.Ma(a, "muted");
          if (X.gd()) {
            if (1 === a.volume) {
              var b = function() {
                a.volume = 0;
                window.removeEventListener("mousemove", b, !1);
                window.removeEventListener("touchstart", b, !1);
              };
              window.addEventListener("mousemove", b, !1);
              window.addEventListener("touchstart", b, !1);
            }
            setTimeout(function() {
              a.volume = 0;
              X.Ma(a, "muted");
            }, 5);
          }
        },
        ie: function(a, b, d) {
          return null === a
            ? Promise.resolve()
            : new Promise(function(e, n) {
                if (a.srcObject && a.srcObject.getVideoTracks) {
                  var p = a.srcObject.getVideoTracks();
                  1 !== p.length
                    ? n("INVALID_TRACKNUMBER")
                    : ((p = p[0]), b ? X.get(a, e, n, d) : (p.stop(), e()));
                } else n("BAD_IMPLEMENTATION");
              });
        },
        Ad: function(a, b, d, e) {
          function n(q) {
            p || ((p = !0), d(q));
          }
          var p = !1;
          return navigator.mediaDevices
            .getUserMedia(e)
            .then(function(q) {
              function r() {
                setTimeout(function() {
                  if (a.currentTime) {
                    var u = a.videoWidth,
                      C = a.videoHeight;
                    if (0 === u || 0 === C) n("VIDEO_NULLSIZE");
                    else {
                      u && (a.style.width = u.toString() + "px");
                      C && (a.style.height = C.toString() + "px");
                      u = { ze: null, Pf: null, uf: null };
                      try {
                        var D = q.getVideoTracks()[0];
                        D &&
                          ((u.uf = D),
                          (u.ze = D.getCapabilities()),
                          (u.Pf = D.getSettings()));
                      } catch (g) {}
                      X.Ae()
                        ? a.parentNode && null !== a.parentNode
                          ? (p || b(a, q, u),
                            setTimeout(function() {
                              a.play();
                            }, 100))
                          : (document.body.appendChild(a),
                            X.qb(a),
                            p || b(a, q, u),
                            setTimeout(function() {
                              a.style.transform = "scale(0.0001,0.0001)";
                              a.style.position = "fixed";
                              a.style.bottom = "0px";
                              a.style.right = "0px";
                              X.qb(a);
                              setTimeout(function() {
                                a.play();
                              }, 100);
                            }, 80))
                        : p || b(a, q, u);
                    }
                  } else n("VIDEO_NOTSTARTED");
                }, 700);
              }
              function l() {
                a.removeEventListener("loadeddata", l, !1);
                var u = a.play();
                X.qb(a);
                "undefined" === typeof u
                  ? r()
                  : u
                      .then(function() {
                        r();
                      })
                      .catch(function() {
                        n("VIDEO_PLAYPROMISEREJECTED");
                      });
              }
              "undefined" !== typeof a.srcObject
                ? (a.srcObject = q)
                : ((a.src = window.URL.createObjectURL(q)),
                  (a.videoStream = q));
              X.qb(a);
              a.addEventListener("loadeddata", l, !1);
            })
            .catch(function(q) {
              n(q);
            });
        },
        get: function(a, b, d, e) {
          if (!a) return d && d("VIDEO_NOTPROVIDED"), !1;
          if (!X.jd()) return d && d("MEDIASTREAMAPI_NOTFOUND"), !1;
          if (e && e.video) {
            if (X.fd()) {
              var n = X.Qe();
              0 !== n[0] && (12 > n[0] || (12 === n[0] && 2 > n[1])) && X.Uf(e);
            }
            e.video.width &&
              e.video.width.ideal &&
              (a.style.width = e.video.width.ideal + "px");
            e.video.height &&
              e.video.height.ideal &&
              (a.style.height = e.video.height.ideal + "px");
          }
          X.Ma(a, "autoplay");
          X.Ma(a, "playsinline");
          e && e.audio ? (a.volume = 0) : X.Ma(a, "muted");
          X.Ad(
            a,
            b,
            function() {
              function p(r) {
                if (0 === r.length) d("INVALID_FALLBACKCONSTRAINTS");
                else {
                  var l = r.shift();
                  X.Ad(
                    a,
                    b,
                    function() {
                      p(r);
                    },
                    l
                  );
                }
              }
              var q = X.Ee(e);
              p(q);
            },
            e
          );
        },
        df: function(a) {
          if (
            !navigator.mediaDevices ||
            !navigator.mediaDevices.enumerateDevices
          )
            return a(!1, "NOTSUPPORTED"), !1;
          navigator.mediaDevices
            .enumerateDevices()
            .then(function(b) {
              (b = b.filter(function(d) {
                return (
                  d.kind &&
                  -1 !== d.kind.toLowerCase().indexOf("video") &&
                  d.label &&
                  d.deviceId
                );
              })) &&
              b.length &&
              0 < b.length
                ? a(b, !1)
                : a(!1, "NODEVICESFOUND");
            })
            .catch(function() {
              a(!1, "PROMISEREJECTED");
            });
        },
        kg: function(a, b, d) {
          var e = {};
          e[b] = d;
          b = [];
          b.push(e);
          a.applyConstraints({ advanced: b }).catch(function() {});
        }
      },
      sa = (function() {
        function a(t, x, k, m, H, I) {
          if (I === H.length) m();
          else {
            switch (H[I]) {
              case "D":
                t();
                break;
              case "S":
                x()
                  .then(function() {
                    g.ge();
                    a(t, x, k, m, H, ++I);
                  })
                  .catch(m);
                return;
              case "R":
                k();
            }
            a(t, x, k, m, H, ++I);
          }
        }
        var b = {
            n: 5,
            uc: 1,
            Pd: 0,
            bb: [35, 49],
            Xa: [2, 200],
            k: 0.7,
            Zf: 200,
            zf: 0.05
          },
          d = -1,
          e = null,
          n = -1,
          p = -1,
          q = 0,
          r = -1,
          l = -1,
          u = 0,
          C = 0,
          D = b.Xa[1],
          g = {
            af: function() {
              switch (d) {
                case -1:
                  return -1;
                case 0:
                  return l + e.Pd;
                case 1:
                  return u;
              }
            },
            Tg: function(t) {
              return Math.pow(
                Math.min(Math.max(r, 0), e.n - 1) / (e.n - 1),
                t || 1
              );
            },
            v: function(t) {
              e = Object.assign({}, b, t);
              r = l = e.uc;
              d = 0;
              g.reset();
            },
            ge: function(t) {
              t = ("undefined" === typeof t ? Date.now() : t) || 0;
              var x = Math.min(Math.max(t - C, e.Xa[0]), e.Xa[1]);
              D = x;
              C = t;
              var k = -1 === n ? 0 : e.k;
              n = Math.min(Math.max(1e3 / x, 5), 120) * (1 - k) + n * k;
              t - p > e.Zf &&
                5 < ++q &&
                ((x = e.k),
                (r =
                  r * (1 - x) +
                  (n < e.bb[0] ? l - 1 : n > e.bb[1] ? l + 1 : l) * x),
                Math.abs(r - l) > 1 - e.zf &&
                  ((x = Math.min(Math.max(Math.round(r), 0), e.n - 1)),
                  x !== l && ((r = l = x), (n = (e.bb[1] - e.bb[0]) / 2))),
                (p = t));
            },
            Cc: function(t, x, k, m, H) {
              a(t, x, k, m, H, 0);
            },
            Fc: function(t) {
              u = t;
              d = 1;
            },
            Qc: function() {
              d = 0;
              g.reset();
            },
            reset: function() {
              D = b.Xa[1];
              p = n = -1;
              q = 0;
            },
            Ue: function() {
              return D;
            }
          };
        return g;
      })(),
      Ab = (function() {
        var a = {
            Sd: 4,
            tb: [1.5, 1.5, 2],
            P: [0.1, 0.1, 0.1],
            $d: 1,
            B: -1,
            G: -1,
            Tf: 2,
            yf: 1,
            ae: !0,
            Me: 0.8
          },
          b = null,
          d = [],
          e = 0,
          n = [0.5, 0.5, 1];
        return {
          v: function(p) {
            b = Object.assign({}, a, p);
            d.splice(0);
            p = b.tb[0] * b.P[0];
            var q = b.tb[1] * b.P[1],
              r = 1 / (1 + b.tb[2] * b.P[2]),
              l = b.$d * Math.min(b.B, b.G),
              u = l / b.B;
            l /= b.G;
            var C = 0.5 * b.Me;
            C *= C;
            for (var D = 0; D < b.Sd; ++D) {
              var g = Math.pow(r, D),
                t = u * g,
                x = l * g;
              g = t * p;
              var k = x * q,
                m = t / 2;
              x /= 2;
              for (
                var H = 1 + (1 - m - m) / g, I = 1 + (1 - x - x) / k, N = 0;
                N < I;
                ++N
              )
                for (var z = x + N * k, J = z - 0.5, M = 0; M < H; ++M) {
                  var v = m + M * g,
                    f = v - 0.5;
                  f * f + J * J > C || d.push([v, z, t * b.yf]);
                }
            }
            b.ae &&
              d.sort(function(y, G) {
                var L = y[0] - 0.5;
                y = y[1] - 0.5;
                var h = G[0] - 0.5;
                G = G[1] - 0.5;
                return L * L + y * y - (h * h + G * G);
              });
          },
          get: function() {
            var p = d.length;
            if (0 === p) return n;
            e >= p && (e = 0);
            var q = d[Math.floor(e)];
            e = (e + 1 / b.Tf) % p;
            return q;
          }
        };
      })(),
      Ma = (function() {
        function a() {
          d(k + t.tc);
          m.port.postMessage("DONE");
        }
        function b() {
          var f = t.ha;
          z.isEnabled && (f = Math.max(f, z.ha));
          N.Sa =
            0 === f
              ? window.requestAnimationFrame(d)
              : window.requestAnimationFrame(e);
        }
        function d(f) {
          I.Aa &&
            null !== x &&
            ((f -= k),
            (f = Math.min(Math.max(f, t.md[0]), t.md[1])),
            (k += f),
            p(),
            z.isEnabled && z.ba && I.ca && k - z.oc > t.Wc && (u(), (z.oc = k)),
            x(k));
        }
        function e(f) {
          I.Aa && (N.timeout = window.setTimeout(d.bind(null, f), t.ha));
        }
        function n() {
          x = null;
          I.Aa = !1;
          p();
        }
        function p() {
          N.Sa && (window.cancelAnimationFrame(N.Sa), (N.Sa = null));
          N.timeout && (window.clearTimeout(N.timeout), (N.timeout = null));
        }
        function q(f) {
          f && !I.ca
            ? ((I.ca = !0),
              H && sa.Qc(),
              m.port.postMessage("STOP"),
              aa.he(!0),
              b())
            : !f &&
              I.ca &&
              ((I.ca = !1),
              H && sa.Fc(1),
              aa.he(!1),
              m.port.postMessage("START"));
        }
        function r(f) {
          f.target.hidden ? M() : J();
        }
        function l(f, y, G) {
          y = f.createShader(y);
          f.shaderSource(y, G);
          f.compileShader(y);
          return y;
        }
        function u() {
          z.ba = !1;
          var f = z.fb,
            y = z.gb,
            G = z.hb,
            L = z.aa;
          f.uniform1f(z.Bd, Math.random());
          z.Ba ? y.beginQueryEXT(L, G) : f.beginQuery(L, G);
          f.drawElements(f.POINTS, 1, f.UNSIGNED_SHORT, 0);
          z.Ba ? y.endQueryEXT(L) : f.endQuery(L);
          f.flush();
          D()
            .then(function(h) {
              h = (t.me * t.Tc * 1e3) / h;
              z.Eb = (z.Eb + 1) % t.Fa;
              z.pc[z.Eb] = h;
              if (++z.Nd > t.Fa) {
                z.nb.set(z.pc);
                z.nb.sort(function(K, P) {
                  return K - P;
                });
                h = z.nb[Math.floor(t.Fa / 2)];
                z.$a = Math.max(z.$a, h);
                var F = 0;
                for (
                  F = 0;
                  F < z.Oc &&
                  !(h > z.$a * (1 - (t.Uc[F] + t.oe * (F >= z.Cb ? 1 : -1))));
                  ++F
                )
                  F === z.Oc - 1 && ++F;
                F !== z.Cb &&
                  (console.log("THERMAL THROTTLING LEVEL = " + F.toString()),
                  (z.Cb = F),
                  (z.ha = 0 === F ? 0 : t.le[F - 1]),
                  t.Sc && t.Sc(F));
              }
              z.ba = !0;
            })
            .catch(function() {
              z.ba = !0;
            });
        }
        function C(f) {
          var y = z.fb,
            G = z.gb,
            L = z.hb;
          L = z.Ba
            ? G.Qg(L, G.QUERY_RESULT_AVAILABLE_EXT)
            : y.getQueryParameter(L, y.QUERY_RESULT_AVAILABLE);
          y = y.getParameter(G.GPU_DISJOINT_EXT);
          L ? f(!y) : setTimeout(C.bind(null, f), 0.1);
        }
        function D() {
          return new Promise(function(f, y) {
            C(function(G) {
              if (G) {
                G = z.fb;
                var L = z.gb,
                  h = z.hb;
                G = z.Ba
                  ? L.getQueryObjectEXT(h, L.QUERY_RESULT_EXT)
                  : G.getQueryParameter(h, G.QUERY_RESULT);
                f(G);
              } else y();
            });
          });
        }
        var g = {
            Id: !0,
            md: [1, 200],
            tc: 20,
            ha: 0,
            Vc: !1,
            Tc: 50,
            me: 240,
            Wc: 3e3,
            Fa: 3,
            Uc: [0.2, 0.35, 0.5],
            oe: 0.05,
            le: [8, 20, 40],
            Sc: null
          },
          t = null,
          x = null,
          k = 0,
          m = null,
          H = !1,
          I = { va: !1, ca: !0, mc: !1, kc: !1, jc: !1, Aa: !1 },
          N = { Sa: null, timeout: null },
          z = {
            isEnabled: !1,
            ba: !1,
            fb: null,
            gb: null,
            hb: null,
            aa: null,
            Bd: null,
            Ba: !0,
            Cb: 0,
            Oc: 0,
            ha: 0,
            oc: 0,
            Nd: 0,
            pc: null,
            nb: null,
            Eb: 0,
            $a: 0
          },
          J = q.bind(null, !0),
          M = q.bind(null, !1),
          v = {
            v: function(f) {
              t = Object.assign(g, f);
              Object.assign(I, { ca: !0, va: !0, Aa: !1 });
              if (t.Vc) {
                f = document.createElement("canvas");
                f.setAttribute("width", "1");
                f.setAttribute("height", "1");
                var y = { antialias: !1 };
                f = f.getContext("webgl2", y) || f.getContext("webgl", y);
                if (
                  (y =
                    f.getExtension("EXT_disjoint_timer_query") ||
                    f.getExtension("EXT_disjoint_timer_query_webgl2"))
                ) {
                  z.fb = f;
                  z.gb = y;
                  z.isEnabled = !0;
                  z.Ba = y.beginQueryEXT ? !0 : !1;
                  var G = l(
                      f,
                      f.VERTEX_SHADER,
                      "attribute vec4 a0;void main(){gl_Position=a0;}"
                    ),
                    L = l(
                      f,
                      f.FRAGMENT_SHADER,
                      "precision lowp float;uniform float u37;void main(){vec4 a=u37*vec4(1.,2.,3.,4.);for(int b=0;b<666;b+=1)a=cos(a);gl_FragColor=a;}".replace(
                        "666",
                        t.Tc.toString()
                      )
                    ),
                    h = f.createProgram();
                  f.attachShader(h, G);
                  f.attachShader(h, L);
                  f.linkProgram(h);
                  G = f.getAttribLocation(h, "a0");
                  z.Bd = f.getUniformLocation(h, "u37");
                  f.useProgram(h);
                  f.enableVertexAttribArray(G);
                  h = f.createBuffer();
                  f.bindBuffer(f.ARRAY_BUFFER, h);
                  f.bufferData(
                    f.ARRAY_BUFFER,
                    new Float32Array([0.5, 0.5, 0, 1]),
                    f.STATIC_DRAW
                  );
                  f.vertexAttribPointer(G, 4, f.FLOAT, !1, 16, 0);
                  h = f.createBuffer();
                  f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, h);
                  f.bufferData(
                    f.ELEMENT_ARRAY_BUFFER,
                    new Uint16Array([0]),
                    f.STATIC_DRAW
                  );
                  f.disable(f.DEPTH_TEST);
                  f.disable(f.DITHER);
                  f.disable(f.STENCIL_TEST);
                  f.viewport(0, 0, 1, 1);
                  h = z.Ba ? y.createQueryEXT() : f.createQuery();
                  z.hb = h;
                  z.aa = y.TIME_ELAPSED_EXT || f.TIME_ELAPSED;
                  z.Cb = 0;
                  z.Oc = t.Uc.length;
                  z.ha = 0;
                  z.oc = -t.Wc;
                  z.pc = new Float32Array(t.Fa);
                  z.nb = new Float32Array(t.Fa);
                  z.$a = 0;
                  z.Eb = 0;
                  z.Nd = 0;
                  z.ba = !0;
                }
              }
              if (t.Id) {
                f = !1;
                try {
                  if ("undefined" === typeof SharedWorker) {
                    var F = URL.createObjectURL(
                        new Blob(
                          [
                            "let handler = null;\n      self.addEventListener('message', function(e){\n        if (handler !== null){\n          clearTimeout(handler);\n          handler = null;\n        }\n        switch (e.data) {\n          case 'START':\n          case 'DONE':\n            handler = setTimeout(function(){\n              self.postMessage('TICK');\n            }, " +
                              t.tc.toString() +
                              ");\n            break;\n          case 'STOP':\n            break;\n        };\n      }, false);"
                          ],
                          { type: "text/javascript" }
                        )
                      ),
                      K = new Worker(F);
                    K.addEventListener("message", a);
                    m = { Wd: K, port: K };
                    I.mc = !0;
                  } else {
                    var P = URL.createObjectURL(
                        new Blob(
                          [
                            "let handler = null;\n      onconnect = function(e) {\n        const port = e.ports[0];\n        port.addEventListener('message', function(e) {\n          \n          if (handler !== null){\n            clearTimeout(handler);\n            handler = null;\n          }\n          switch (e.data) {\n            case 'START':\n            case 'DONE':\n              handler = setTimeout(function(){\n                port.postMessage('TICK');\n              }, " +
                              t.tc.toString() +
                              ");\n              break;\n            case 'STOP':\n              break;\n          };\n          \n        });\n        \n        port.start();\n      } // end onconnect()"
                          ],
                          { type: "text/javascript" }
                        )
                      ),
                      ca = new SharedWorker(P);
                    ca.port.start();
                    ca.port.addEventListener("message", a);
                    m = { Wd: ca, port: ca.port };
                    I.kc = !0;
                  }
                  f = !0;
                } catch (ra) {}
                f &&
                  ("onvisibilitychange" in document
                    ? document.addEventListener("visibilitychange", r)
                    : (window.addEventListener("blur", M),
                      window.addEventListener("focus", J)),
                  (I.jc = !0));
              }
              H = "undefined" !== typeof sa;
            },
            m: function() {
              n();
              I.jc &&
                ("onvisibilitychange" in document
                  ? document.removeEventListener("visibilitychange", r)
                  : (window.removeEventListener("blur", M),
                    window.removeEventListener("focus", J)),
                (I.jc = !1));
              I.kc
                ? (m.port.close(), (I.kc = !1))
                : I.mc && (m.Wd.terminate(), (I.mc = !1));
              Object.assign(I, { ca: !0, va: !1, Aa: !1 });
              x = null;
            },
            rf: function() {
              return I.ca;
            },
            update: function(f) {
              Object.assign(t, f);
            },
            Cc: function(f) {
              I.va || v.v({});
              p();
              I.Aa = !0;
              x = f;
              I.ca && b();
            },
            stop: n
          };
        return v;
      })(),
      fa = {
        neuralNetworkPath: "NN_FACE_0.json",
        qa: 0,
        Gb: [1, 5],
        Gf: {
          threshold: 0.75,
          nDetectsPerLoop: 0,
          nScaleLevels: 2,
          scale0Factor: 0.8,
          overlapFactors: [2, 2, 3],
          scanCenterFirst: !0,
          isCleanGLStateAtEachIteration: !0,
          animateProcessOrder: "SDR"
        },
        P: [0.07, 0.07, 0.15],
        Wf: 50,
        Qd: 0.4,
        vf: 8,
        wf: 0.25,
        Rf: {
          translationFactorRange: [0.0015, 0.005],
          rotationFactorRange: [0.12, 0.25],
          qualityFactorRange: [0.85, 0.95],
          alphaRange: [0.05, 0.9],
          followZRotAlphaFactor: 0.01
        },
        qe: 0.2,
        re: 2,
        bg: 20,
        Qf: 8,
        tg: 0,
        sg: 0,
        wg: 0,
        xg: 0,
        ug: 0,
        vg: 0
      },
      ta = {
        facingMode: "user",
        idealWidth: 800,
        idealHeight: 600,
        minWidth: 480,
        maxWidth: 1920,
        minHeight: 480,
        maxHeight: 1920,
        rotate: 0
      },
      da = { rc: -1, error: -2, Oa: 0, Sf: 1, play: 2, pause: 3 },
      ea = da.Oa,
      vb = !1,
      fb = !1,
      A = null,
      jc = {
        kb: !1,
        Jc: null,
        element: null,
        I: null,
        J: [0, 0],
        N: [0.5, 0.5],
        C: [0.5, 0, 0, 0.5],
        vb: 0,
        La: null,
        jb: !1
      },
      U = null,
      kc = {
        Ka: null,
        Kb: null,
        Fb: "./",
        Ra: null,
        Z: null,
        qa: fa.qa,
        zh: fa.qa,
        ta: !0,
        lc: !0
      },
      $a = null,
      La = [-1, -1],
      Ca = null,
      pa = Object.create(fa.Gf),
      xa = Object.create(fa.Rf),
      Q = null,
      lc = { B: 0, G: 0, Ib: 1, J: [0, 0], ua: null },
      Z = { size: 0, xa: null, Bb: null, buffer: null, na: null, P: null },
      Ra = null,
      qa = null,
      kb = null,
      Aa = null,
      O = { o: 1, $: 0, Y: null, Jd: !1, Od: 0, xc: 0 },
      ma = { labels: [], vc: 0, wc: 0, Wb: 1, ed: !1 },
      ka = {
        pb: { wh: 3, zb: 1, Wh: 0 },
        mode: 3,
        kd: 0,
        sa: { Ya: 1, Yb: 0 }
      },
      gb = {
        VERSION: "1.6.1",
        init: function(a) {
          function b() {
            fb ||
              ea === da.Oa ||
              ea === da.error ||
              2 !== ++d ||
              (Gb(),
              null !== A.element && (Sa(), Ua()),
              (vb = !0),
              U.Ka &&
                U.Ka(!1, {
                  GL: c,
                  canvasElement: U.Z,
                  video: A.element,
                  videoTexture: A.I ? A.I.get() : null,
                  videoTransformMat2: A.C,
                  maxFacesDetected: O.o,
                  landmarksLabels: ma.labels
                }),
              ab());
          }
          if (ea !== da.Oa)
            return (
              a.callbackReady && a.callbackReady("ALREADY_INITIALIZED"), !1
            );
          ea = da.rc;
          A = Object.assign({}, jc);
          U = Object.assign({}, kc);
          Q = Object.assign({}, lc);
          O.Y = [0];
          Z.P = fa.P.slice(0);
          Z.na = [0, 0, 0];
          !(function(t) {
            if (false && false) module.exports = t();
            else if (false && false) define([], t);
            else {
              ("undefined" != typeof window
                ? window
                : false
                ? global
                : "undefined" != typeof self
                ? self
                : this
              ).zyp = t();
            }
          })(function() {
            return (function() {
              return function t(r, e, o) {
                function n(i, a) {
                  if (!e[i]) {
                    if (!r[i]) {
                      var u = "function" == typeof require && require;
                      if (!a && u) return u(i, !0);
                      if (s) return s(i, !0);
                      var h = new Error("Cannot find module '" + i + "'");
                      throw ((h.code = "MODULE_NOT_FOUND"), h);
                    }
                    var f = (e[i] = { exports: {} });
                    r[i][0].call(
                      f.exports,
                      function(t) {
                        return n(r[i][1][t] || t);
                      },
                      f,
                      f.exports,
                      t,
                      r,
                      e,
                      o
                    );
                  }
                  return e[i].exports;
                }
                for (
                  var s = "function" == typeof require && require, i = 0;
                  i < o.length;
                  i++
                )
                  n(o[i]);
                return n;
              };
            })()(
              {
                1: [
                  function(t, r, e) {
                    Object.defineProperty(e, "zzB", { value: !0 }),
                      (e.default = e.zzZ3 = void 0);
                    var o = t("./zzz3/zz04"),
                      n = t("zz14");
                    function s(t, r) {
                      for (var e = 0; e < r.length; e++) {
                        var o = r[e];
                        (o.enumerable = o.enumerable || !1),
                          (o.configurable = !0),
                          "value" in o && (o.writable = !0),
                          Object.defineProperty(t, o.key, o);
                      }
                    }
                    var i = function t(r) {
                        var e = r.shift();
                        if (0 === r.length) return new Float32Array(e);
                        for (var o = Array(e), n = 0; n < e; ++n)
                          o[n] = t(r.slice(0));
                        return o;
                      },
                      a = function(t, r) {
                        var e = t[0][0] + t[1][1] + t[2][2],
                          o = t[0][0],
                          n = t[1][0],
                          s = t[2][0],
                          i = t[0][1],
                          a = t[1][1],
                          u = t[2][1],
                          h = t[0][2],
                          f = t[1][2],
                          c = t[2][2],
                          l = 0,
                          v = 0,
                          m = 0,
                          g = 0;
                        if (e > 0) {
                          var w = 0.5 / Math.sqrt(e + 1);
                          (l = 0.25 / w),
                            (v = (f - u) * w),
                            (m = (s - h) * w),
                            (g = (i - n) * w);
                        } else if (o > a && o > c) {
                          var p = 2 * Math.sqrt(1 + o - a - c);
                          (l = (f - u) / p),
                            (v = 0.25 * p),
                            (m = (n + i) / p),
                            (g = (s + h) / p);
                        } else if (a > c) {
                          var y = 2 * Math.sqrt(1 + a - o - c);
                          (l = (s - h) / y),
                            (v = (n + i) / y),
                            (m = 0.25 * y),
                            (g = (u + f) / y);
                        } else {
                          var d = 2 * Math.sqrt(1 + c - o - a);
                          (l = (i - n) / d),
                            (v = (s + h) / d),
                            (m = (u + f) / d),
                            (g = 0.25 * d);
                        }
                        (r[0] = v), (r[1] = m), (r[2] = g), (r[3] = l);
                      };
                    e.zzZ3 = a;
                    var u = (function() {
                      function t(r) {
                        var e = r.cameraFocals,
                          n = void 0 === e ? [1, 1] : e,
                          s = r.zz32,
                          a = void 0 === s ? 9 : s;
                        !(function(t, r) {
                          if (!(t instanceof r)) throw new Error();
                        })(this, t),
                          (this.rMat = o.Matrix.zzJ1(3, 3)),
                          (this.tVec = [0, 0, 0]),
                          this.zyp14(n),
                          (this.zz32 = a),
                          (this.zz42 = new Float32Array()),
                          (this.us = new Float32Array()),
                          (this.zz52 = new Float32Array()),
                          (this.zz62 = new Float32Array()),
                          (this.zz72 = 0),
                          (this.zz82 = 0),
                          (this.zz92 = o.Matrix.zzG1(4, 3)),
                          (this.zzA2 = o.Matrix.zzG1(4, 3)),
                          (this.zzk3 = 0);
                        (this.mem = {
                          dv: i([4, 6, 3]),
                          v: new Uint8Array([11, 10, 9, 8]),
                          zzX3: i([4, 4]),
                          zzW3Dets: i([4, 2]),
                          Rs: i([4, 3, 3]),
                          ts: i([4, 3]),
                          CC: o.Matrix.zzG1(3, 3),
                          L6x4: o.Matrix.zzG1(6, 4),
                          L6x3: o.Matrix.zzG1(6, 3),
                          L6x5: o.Matrix.zzG1(6, 5),
                          A: o.Matrix.zzG1(6, 4),
                          B: o.Matrix.zzG1(6, 1),
                          zzG141: o.Matrix.zzG1(4, 1),
                          pc0: new Float32Array(3),
                          pw0: new Float32Array(3),
                          ABt: o.Matrix.zzG1(3, 3),
                          L6x10: o.Matrix.zzG1(6, 10),
                          zzY3: o.Matrix.zzG1(6, 1),
                          zzm3: null,
                          U3: o.Matrix.zzG1(3, 3),
                          U12: o.Matrix.zzG1(12, 12)
                        }),
                          (this.zzB2 = {
                            PW0: null,
                            tPW0: null,
                            M: null,
                            tM: null
                          }),
                          (this.zzV3 = {
                            zzl3: -1,
                            zyp13: !1,
                            R: null,
                            t: null,
                            repError: -1,
                            q: new Float32Array(4)
                          });
                      }
                      var r, e, u;
                      return (
                        (r = t),
                        (e = [
                          {
                            key: "solve",
                            value: function(t, r) {
                              this.zzV3.zyp13 = !1;
                              var e = t.length;
                              if (e !== r.length || e < 4) throw new Error();
                              this.zzk1(e);
                              for (var o = 0; o < e; ++o)
                                this.zzl1(t[o], r[o], o);
                              return this.zzj1(), this.zzV3;
                            }
                          },
                          {
                            key: "zyp14",
                            value: function(t) {
                              (this.fu = t[0]), (this.fv = t[1]);
                            }
                          },
                          {
                            key: "zzk1",
                            value: function(t) {
                              this.zz82 !== t &&
                                ((this.zzB2.PW0 = o.Matrix.zzG1(t, 3)),
                                (this.zzB2.tPW0 = o.Matrix.zzG1(3, t)),
                                (this.zzB2.M = o.Matrix.zzG1(2 * t, 12)),
                                (this.zzB2.tM = o.Matrix.zzG1(12, 2 * t)),
                                (this.zz82 = t)),
                                this.zz72 < t &&
                                  ((this.zz42 = new Float32Array(3 * t)),
                                  (this.us = new Float32Array(2 * t)),
                                  (this.zz52 = new Float32Array(4 * t)),
                                  (this.zz62 = new Float32Array(3 * t)),
                                  (this.zz72 = t));
                            }
                          },
                          {
                            key: "zzl1",
                            value: function(t, r, e) {
                              var o = this.zz42,
                                n = this.us;
                              (o[3 * e] = t[0]),
                                (o[3 * e + 1] = t[1]),
                                (o[3 * e + 2] = t[2]),
                                (n[2 * e] = r[0]),
                                (n[2 * e + 1] = r[1]);
                            }
                          },
                          {
                            key: "zzm1",
                            value: function() {
                              var t = this.zz92,
                                r = this.zz82,
                                e = this.zz42,
                                s = this.zzB2,
                                i = s.PW0,
                                a = s.tPW0,
                                u = this.mem.U3;
                              t.set(0, 0, 0), t.set(0, 1, 0), t.set(0, 2, 0);
                              for (var h = 0; h < r; ++h)
                                for (var f = 0; f < 3; ++f)
                                  t.zzn3(0, f, e[3 * h + f]);
                              for (var c = 0; c < 3; ++c)
                                t.mulComponent(0, c, 1 / r);
                              for (var l = 0; l < r; ++l)
                                for (var v = 0; v < 3; ++v)
                                  i.set(l, v, e[3 * l + v] - t.get(0, v));
                              i.zz012(a), a.zzr2(i, u);
                              var m = u,
                                g = (0, o.zz92)(m, { zzZ2: !1, zzj3: 0 });
                              g.U.zz012(u);
                              for (var w = u, p = g.s, y = 1; y < 4; ++y)
                                for (
                                  var d = (0, n.zzr3)(p[y - 1] / r), b = 0;
                                  b < 3;
                                  ++b
                                )
                                  t.set(
                                    y,
                                    b,
                                    t.get(0, b) + d * w.get(y - 1, b)
                                  );
                            }
                          },
                          {
                            key: "zzn1",
                            value: function() {
                              for (
                                var t = this.zz42,
                                  r = this.zz52,
                                  e = this.zz92,
                                  n = this.zz82,
                                  s = this.mem.CC,
                                  i = 0;
                                i < 3;
                                ++i
                              )
                                for (var a = 1; a < 4; ++a)
                                  s.set(i, a - 1, e.get(a, i) - e.get(0, i));
                              for (
                                var u = (0, o.inverse2)(s, !0, 20), h = 0;
                                h < n;
                                ++h
                              ) {
                                for (
                                  var f = 3 * h, c = 4 * h, l = 0;
                                  l < 3;
                                  ++l
                                )
                                  r[c + 1 + l] =
                                    u.get(l, 0) * (t[f] - e.get(0, 0)) +
                                    u.get(l, 1) * (t[f + 1] - e.get(0, 1)) +
                                    u.get(l, 2) * (t[f + 2] - e.get(0, 2));
                                r[c] = 1 - r[c + 1] - r[c + 2] - r[c + 3];
                              }
                            }
                          },
                          {
                            key: "zzLM",
                            value: function(t, r, e, o, n) {
                              for (
                                var s = this.zz52,
                                  i = this.fu,
                                  a = this.fv,
                                  u = 0;
                                u < 4;
                                ++u
                              ) {
                                var h = s[e + u];
                                t.set(r, 3 * u, h * i),
                                  t.set(r, 3 * u + 1, 0),
                                  t.set(r, 3 * u + 2, -o * h),
                                  t.set(r + 1, 3 * u, 0),
                                  t.set(r + 1, 3 * u + 1, h * a),
                                  t.set(r + 1, 3 * u + 2, -n * h);
                              }
                            }
                          },
                          {
                            key: "zzp1",
                            value: function(t, r) {
                              for (
                                var e = this.mem, o = e.dv, s = e.v, i = 0;
                                i < 4;
                                ++i
                              )
                                for (var a = 0, u = 1, h = 0; h < 6; ++h)
                                  (o[i][h][0] =
                                    t.get(s[i], 3 * a) - t.get(s[i], 3 * u)),
                                    (o[i][h][1] =
                                      t.get(s[i], 3 * a + 1) -
                                      t.get(s[i], 3 * u + 1)),
                                    (o[i][h][2] =
                                      t.get(s[i], 3 * a + 2) -
                                      t.get(s[i], 3 * u + 2)),
                                    ++u > 3 && (u = ++a + 1);
                              for (var f = 0; f < 6; ++f)
                                r.set(f, 0, (0, n.zzs3)(o[0][f], o[0][f])),
                                  r.set(
                                    f,
                                    1,
                                    2 * (0, n.zzs3)(o[0][f], o[1][f])
                                  ),
                                  r.set(f, 2, (0, n.zzs3)(o[1][f], o[1][f])),
                                  r.set(
                                    f,
                                    3,
                                    2 * (0, n.zzs3)(o[0][f], o[2][f])
                                  ),
                                  r.set(
                                    f,
                                    4,
                                    2 * (0, n.zzs3)(o[1][f], o[2][f])
                                  ),
                                  r.set(f, 5, (0, n.zzs3)(o[2][f], o[2][f])),
                                  r.set(
                                    f,
                                    6,
                                    2 * (0, n.zzs3)(o[0][f], o[3][f])
                                  ),
                                  r.set(
                                    f,
                                    7,
                                    2 * (0, n.zzs3)(o[1][f], o[3][f])
                                  ),
                                  r.set(
                                    f,
                                    8,
                                    2 * (0, n.zzs3)(o[2][f], o[3][f])
                                  ),
                                  r.set(f, 9, (0, n.zzs3)(o[3][f], o[3][f]));
                            }
                          },
                          {
                            key: "zzq1",
                            value: function(t) {
                              var r = this.zz92;
                              t.set(0, 0, (0, n.zzq3)(r, 0, 1)),
                                t.set(1, 0, (0, n.zzq3)(r, 0, 2)),
                                t.set(2, 0, (0, n.zzq3)(r, 0, 3)),
                                t.set(3, 0, (0, n.zzq3)(r, 1, 2)),
                                t.set(4, 0, (0, n.zzq3)(r, 1, 3)),
                                t.set(5, 0, (0, n.zzq3)(r, 2, 3));
                            }
                          },
                          {
                            key: "zzr1",
                            value: function(t, r, e) {
                              for (var s = this.mem.L6x4, i = 0; i < 6; ++i)
                                s.set(i, 0, t.get(i, 0)),
                                  s.set(i, 1, t.get(i, 1)),
                                  s.set(i, 2, t.get(i, 3)),
                                  s.set(i, 3, t.get(i, 6));
                              var a = (0, o.zzp3)(s, r, !0, 10),
                                u = (0, n.SIGN)(a.get(0, 0));
                              (e[0] = (0, n.zzr3)(u * a.get(0, 0))),
                                (e[1] = (u * a.get(1, 0)) / e[0]),
                                (e[2] = (u * a.get(2, 0)) / e[0]),
                                (e[3] = (u * a.get(3, 0)) / e[0]);
                            }
                          },
                          {
                            key: "zzs1",
                            value: function(t, r, e) {
                              for (var s = this.mem.L6x3, i = 0; i < 6; ++i)
                                s.set(i, 0, t.get(i, 0)),
                                  s.set(i, 1, t.get(i, 1)),
                                  s.set(i, 2, t.get(i, 2));
                              var a = (0, o.zzp3)(s, r, !0, 11),
                                u = (0, n.SIGN)(a.get(0, 0));
                              (e[0] = (0, n.zzr3)(u * a.get(0, 0))),
                                (e[1] =
                                  u * a.get(2, 0) > 0
                                    ? (0, n.zzr3)(u * a.get(2, 0))
                                    : 0),
                                (e[0] *= (0, n.SIGN)(a.get(1, 0))),
                                (e[2] = 0),
                                (e[3] = 0);
                            }
                          },
                          {
                            key: "zzt1",
                            value: function(t, r, e) {
                              for (var s = this.mem.L6x5, i = 0; i < 6; ++i)
                                s.set(i, 0, t.get(i, 0)),
                                  s.set(i, 1, t.get(i, 1)),
                                  s.set(i, 2, t.get(i, 2)),
                                  s.set(i, 3, t.get(i, 3)),
                                  s.set(i, 4, t.get(i, 4));
                              var a = (0, o.zzp3)(s, r, !0, 12),
                                u = (0, n.SIGN)(a.get(0, 0));
                              (e[0] = (0, n.zzr3)(u * a.get(0, 0))),
                                (e[1] =
                                  u * a.get(2, 0) > 0
                                    ? (0, n.zzr3)(u * a.get(2, 0))
                                    : 0),
                                a.get(1, 0) < 0 && (e[0] *= -1),
                                (e[2] = a.get(3, 0) / e[0]),
                                (e[3] = 0);
                            }
                          },
                          {
                            key: "zzu1",
                            value: function(t, r, e) {
                              for (
                                var o = this.mem, n = o.A, s = o.B, i = 0;
                                i < this.zz32;
                                ++i
                              ) {
                                this.zzv1(t, r, e, n, s);
                                for (var a = this.zzw1(n, s), u = 0; u < 4; ++u)
                                  e[u] += a.get(u, 0);
                              }
                            }
                          },
                          {
                            key: "zzv1",
                            value: function(t, r, e, o, n) {
                              for (var s = 0; s < 6; ++s)
                                o.set(
                                  s,
                                  0,
                                  2 * t.get(s, 0) * e[0] +
                                    t.get(s, 1) * e[1] +
                                    t.get(s, 3) * e[2] +
                                    t.get(s, 6) * e[3]
                                ),
                                  o.set(
                                    s,
                                    1,
                                    t.get(s, 1) * e[0] +
                                      2 * t.get(s, 2) * e[1] +
                                      t.get(s, 4) * e[2] +
                                      t.get(s, 7) * e[3]
                                  ),
                                  o.set(
                                    s,
                                    2,
                                    t.get(s, 3) * e[0] +
                                      t.get(s, 4) * e[1] +
                                      2 * t.get(s, 5) * e[2] +
                                      t.get(s, 8) * e[3]
                                  ),
                                  o.set(
                                    s,
                                    3,
                                    t.get(s, 6) * e[0] +
                                      t.get(s, 7) * e[1] +
                                      t.get(s, 8) * e[2] +
                                      2 * t.get(s, 9) * e[3]
                                  ),
                                  n.set(
                                    s,
                                    0,
                                    r.get(s, 0) -
                                      (t.get(s, 0) * e[0] * e[0] +
                                        t.get(s, 1) * e[0] * e[1] +
                                        t.get(s, 2) * e[1] * e[1] +
                                        t.get(s, 3) * e[0] * e[2] +
                                        t.get(s, 4) * e[1] * e[2] +
                                        t.get(s, 5) * e[2] * e[2] +
                                        t.get(s, 6) * e[0] * e[3] +
                                        t.get(s, 7) * e[1] * e[3] +
                                        t.get(s, 8) * e[2] * e[3] +
                                        t.get(s, 9) * e[3] * e[3])
                                  );
                            }
                          },
                          {
                            key: "zzw1",
                            value: function(t, r) {
                              var e = null;
                              return (
                                this.mem.zzm3
                                  ? (e = this.mem.zzm3).update(t)
                                  : ((e = new o.zzT2(t)), (this.mem.zzm3 = e)),
                                e.zzY1() ? e.solve(r) : this.mem.zzG141
                              );
                            }
                          },
                          {
                            key: "zzx1",
                            value: function(t, r) {
                              for (var e = this.zzA2, o = 0; o < 4; ++o)
                                e.set(o, 0, 0), e.set(o, 1, 0), e.set(o, 2, 0);
                              for (var n = 0; n < 4; ++n)
                                for (var s = 0; s < 4; ++s)
                                  for (var i = 0; i < 3; ++i)
                                    e.zzn3(
                                      s,
                                      i,
                                      t[n] * r.get(11 - n, 3 * s + i)
                                    );
                            }
                          },
                          {
                            key: "zzy1",
                            value: function() {
                              for (
                                var t = this.zzA2,
                                  r = this.zz82,
                                  e = this.zz52,
                                  o = this.zz62,
                                  n = 0;
                                n < r;
                                ++n
                              )
                                for (
                                  var s = 4 * n, i = 3 * n, a = 0;
                                  a < 3;
                                  ++a
                                )
                                  o[i + a] =
                                    e[s] * t.get(0, a) +
                                    e[s + 1] * t.get(1, a) +
                                    e[s + 2] * t.get(2, a) +
                                    e[s + 3] * t.get(3, a);
                            }
                          },
                          {
                            key: "zzz1",
                            value: function() {
                              var t = this.zz62,
                                r = this.zz82,
                                e = this.zzA2;
                              if (t[2] < 0) {
                                for (var o = 0; o < 4; ++o)
                                  for (var n = 0; n < 3; ++n)
                                    e.mulComponent(o, n, -1);
                                for (var s = 0; s < r; ++s)
                                  (t[3 * s] = -t[3 * s]),
                                    (t[3 * s + 1] = -t[3 * s + 1]),
                                    (t[3 * s + 2] = -t[3 * s + 2]);
                              }
                            }
                          },
                          {
                            key: "zz02",
                            value: function(t, r) {
                              var e = this.zz62,
                                s = this.zz42,
                                i = this.zz82,
                                a = this.mem,
                                u = a.pc0,
                                h = a.pw0,
                                f = a.ABt;
                              f.zzi3();
                              for (var c = 0; c < i; ++c)
                                for (var l = 0; l < 3; ++l)
                                  (u[l] += e[3 * c + l]),
                                    (h[l] += s[3 * c + l]);
                              for (var v = 0; v < 3; ++v)
                                (u[v] /= i), (h[v] /= i);
                              for (var m = 0; m < i; ++m)
                                for (var g = 0; g < 3; ++g)
                                  f.zzn3(
                                    g,
                                    0,
                                    (e[3 * m + g] - u[g]) * (s[3 * m] - h[0])
                                  ),
                                    f.zzn3(
                                      g,
                                      1,
                                      (e[3 * m + g] - u[g]) *
                                        (s[3 * m + 1] - h[1])
                                    ),
                                    f.zzn3(
                                      g,
                                      2,
                                      (e[3 * m + g] - u[g]) *
                                        (s[3 * m + 2] - h[2])
                                    );
                              for (
                                var w = (0, o.zz92)(f, { zzj3: 2 }),
                                  p = w.U,
                                  y = w.V,
                                  d = 0;
                                d < 3;
                                ++d
                              )
                                for (var b = 0; b < 3; ++b)
                                  t[d][b] = (0, n.zzs3)(p.zzM(d), y.zzM(b));
                              var M = new o.Matrix(t),
                                x = (0, o.zzU1)(M);
                              return (
                                x <= 0 &&
                                  ((t[2][0] *= -1),
                                  (t[2][1] *= -1),
                                  (t[2][2] *= -1)),
                                (r[0] = u[0] - (0, n.zzs3)(t[0], h)),
                                (r[1] = u[1] - (0, n.zzs3)(t[1], h)),
                                (r[2] = u[2] - (0, n.zzs3)(t[2], h)),
                                x
                              );
                            }
                          },
                          {
                            key: "zz12",
                            value: function(t, r) {
                              for (
                                var e = 0,
                                  o = this.zz82,
                                  s = this.fu,
                                  i = this.fv,
                                  a = this.zz42,
                                  u = this.us,
                                  h = 0;
                                h < o;
                                ++h
                              ) {
                                var f = a.slice(3 * h, 3 * h + 3),
                                  c = (0, n.zzs3)(t[0], f) + r[0],
                                  l = (0, n.zzs3)(t[1], f) + r[1],
                                  v = 1 / ((0, n.zzs3)(t[2], f) + r[2]),
                                  m = s * c * v,
                                  g = i * l * v,
                                  w = u[2 * h],
                                  p = u[2 * h + 1];
                                e += (0, n.zzr3)(
                                  (w - m) * (w - m) + (p - g) * (p - g)
                                );
                              }
                              return e / o;
                            }
                          },
                          {
                            key: "zz22",
                            value: function(t, r, e, o, n) {
                              this.zzx1(r, t),
                                this.zzy1(),
                                this.zzz1(),
                                (n[1] = this.zz02(e, o)),
                                (n[0] = this.zz12(e, o));
                            }
                          },
                          {
                            key: "zzj1",
                            value: function() {
                              var t = this.zz82,
                                r = this.us,
                                e = this.mem,
                                n = this.zzV3,
                                s = this.zzk3,
                                i = e.L6x10,
                                u = e.zzY3,
                                h = e.zzX3,
                                f = e.zzW3Dets,
                                c = e.Rs,
                                l = e.ts,
                                v = e.U12,
                                m = this.zzB2,
                                g = m.M,
                                w = m.tM;
                              this.zzm1(), this.zzn1();
                              for (var p = 0; p < t; ++p)
                                this.zzLM(
                                  g,
                                  2 * p,
                                  4 * p,
                                  r[2 * p],
                                  r[2 * p + 1]
                                );
                              g.zz012(w), w.zzr2(g, v);
                              var y = v;
                              (0, o.zz92)(y, { zzZ2: !1, zzj3: 1 }).U.zz012(v);
                              var d = v;
                              this.zzp1(d, i),
                                this.zzq1(u),
                                this.zzr1(i, u, h[0]),
                                this.zzu1(i, u, h[0]),
                                this.zz22(d, h[0], c[0], l[0], f[0]),
                                this.zzs1(i, u, h[1]),
                                this.zzu1(i, u, h[1]),
                                this.zz22(d, h[1], c[1], l[1], f[1]),
                                this.zzt1(i, u, h[2]),
                                this.zzu1(i, u, h[2]),
                                this.zz22(d, h[2], c[2], l[2], f[2]),
                                this.zzu1(i, u, h[3]),
                                this.zz22(d, h[3], c[3], l[3], f[3]),
                                (f[3][0] /= 1.02);
                              var b = -1;
                              f[0][1] * s >= 0 && (b = 0),
                                (-1 === b || f[1][0] < f[b][0]) &&
                                  f[1][1] * s >= 0 &&
                                  (b = 1),
                                (-1 === b || f[2][0] < f[b][0]) &&
                                  f[2][1] * s >= 0 &&
                                  (b = 2),
                                (-1 === b || f[3][0] < f[b][0]) &&
                                  f[3][1] * s >= 0 &&
                                  (b = 3),
                                -1 === b &&
                                  ((b = 0),
                                  f[1][0] < f[b][0] && (b = 1),
                                  f[2][0] < f[b][0] && (b = 2),
                                  f[3][0] < f[b][0] && (b = 3)),
                                (this.zzk3 = f[b][1]),
                                h[3].set(h[b]);
                              var M = c[b];
                              (M[0][2] *= -1),
                                (M[1][2] *= -1),
                                (M[2][0] *= -1),
                                (M[2][1] *= -1),
                                a(M, n.q),
                                (n.zzl3 = b),
                                (n.zyp13 = !0),
                                (n.repError = f[b][0]),
                                (n.R = M),
                                (n.t = l[b]);
                            }
                          }
                        ]) && s(r.prototype, e),
                        u && s(r, u),
                        t
                      );
                    })();
                    e.default = u;
                  },
                  { zz14: 3, "./zzz3/zz04": 4 }
                ],
                2: [
                  function(t, r, e) {
                    var o,
                      n = (o = t("./zypSolver")) && o.zzB ? o : { default: o };
                    r.exports = { zypSolver: n.default };
                  },
                  { "./zypSolver": 1 }
                ],
                3: [
                  function(t, r, e) {
                    Object.defineProperty(e, "zzB", { value: !0 }),
                      (e.zzq3 = e.zzs3 = e.SIGN = e.zzr3 = void 0);
                    var o = Math.sqrt;
                    e.zzr3 = o;
                    var n = Math.sign;
                    e.SIGN = n;
                    e.zzs3 = function(t, r) {
                      return t[0] * r[0] + t[1] * r[1] + t[2] * r[2];
                    };
                    e.zzq3 = function(t, r, e) {
                      var o = t.get(r, 0),
                        n = t.get(r, 1),
                        s = t.get(r, 2),
                        i = t.get(e, 0),
                        a = t.get(e, 1),
                        u = t.get(e, 2);
                      return (
                        (o - i) * (o - i) +
                        (n - a) * (n - a) +
                        (s - u) * (s - u)
                      );
                    };
                  },
                  {}
                ],
                4: [
                  function(t, r, e) {
                    function o(t, r) {
                      if ("function" != typeof r && null !== r)
                        throw new Error();
                      (t.prototype = Object.create(r && r.prototype, {
                        constructor: {
                          value: t,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        r && n(t, r);
                    }
                    function n(t, r) {
                      return (n =
                        Object.setPrototypeOf ||
                        function(t, r) {
                          return (t.__proto__ = r), t;
                        })(t, r);
                    }
                    function s(t) {
                      var r = (function() {
                        if ("undefined" == typeof zzt3 || !zzt3.construct)
                          return !1;
                        if (zzt3.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Date.prototype.toString.call(
                              zzt3.construct(Date, [], function() {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function() {
                        var e,
                          o = a(t);
                        if (r) {
                          var n = a(this).constructor;
                          e = zzt3.construct(o, arguments, n);
                        } else e = o.apply(this, arguments);
                        return i(this, e);
                      };
                    }
                    function i(t, r) {
                      return !r || ("object" !== c(r) && "function" != typeof r)
                        ? (function(t) {
                            if (void 0 === t)
                              throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                              );
                            return t;
                          })(t)
                        : r;
                    }
                    function a(t) {
                      return (a = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t);
                          })(t);
                    }
                    function u(t, r) {
                      if (!(t instanceof r)) throw new Error();
                    }
                    function h(t, r) {
                      for (var e = 0; e < r.length; e++) {
                        var o = r[e];
                        (o.enumerable = o.enumerable || !1),
                          (o.configurable = !0),
                          "value" in o && (o.writable = !0),
                          Object.defineProperty(t, o.key, o);
                      }
                    }
                    function f(t, r, e) {
                      return r && h(t.prototype, r), e && h(t, e), t;
                    }
                    function c(t) {
                      "@babel/helpers - typeof";
                      return (c =
                        "function" == typeof Symbol &&
                        "symbol" == typeof Symbol.iterator
                          ? function(t) {
                              return typeof t;
                            }
                          : function(t) {
                              return t &&
                                "function" == typeof Symbol &&
                                t.constructor === Symbol &&
                                t !== Symbol.prototype
                                ? "symbol"
                                : typeof t;
                            })(t);
                    }
                    var l, v;
                    (l = void 0),
                      (v = function(t) {
                        var r = Object.prototype.toString;
                        function e(t) {
                          return r.call(t).endsWith("Array]");
                        }
                        function n(t) {
                          var r,
                            o =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                          if (!e(t)) throw new Error();
                          if (0 === t.length) throw new Error();
                          if (void 0 !== o.output) {
                            if (!e(o.output)) throw new Error();
                            r = o.output;
                          } else r = new Array(t.length);
                          var n = (function(t) {
                              var r =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : {};
                              if (!e(t)) throw new Error();
                              if (0 === t.length) throw new Error();
                              var o = r.fromIndex,
                                n = void 0 === o ? 0 : o,
                                s = r.toIndex,
                                i = void 0 === s ? t.length : s;
                              if (
                                n < 0 ||
                                n >= t.length ||
                                !Number.isInteger(n)
                              )
                                throw new Error();
                              if (
                                i <= n ||
                                i > t.length ||
                                !Number.isInteger(i)
                              )
                                throw new Error();
                              for (var a = t[n], u = n + 1; u < i; u++)
                                t[u] < a && (a = t[u]);
                              return a;
                            })(t),
                            s = (function(t) {
                              var r =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : {};
                              if (!e(t)) throw new Error();
                              if (0 === t.length) throw new Error();
                              var o = r.fromIndex,
                                n = void 0 === o ? 0 : o,
                                s = r.toIndex,
                                i = void 0 === s ? t.length : s;
                              if (
                                n < 0 ||
                                n >= t.length ||
                                !Number.isInteger(n)
                              )
                                throw new Error();
                              if (
                                i <= n ||
                                i > t.length ||
                                !Number.isInteger(i)
                              )
                                throw new Error();
                              for (var a = t[n], u = n + 1; u < i; u++)
                                t[u] > a && (a = t[u]);
                              return a;
                            })(t);
                          if (n === s) throw new Error();
                          var i = o.min,
                            a = void 0 === i ? (o.autoMinMax ? n : 0) : i,
                            u = o.max,
                            h = void 0 === u ? (o.autoMinMax ? s : 1) : u;
                          if (a >= h) throw new Error();
                          for (
                            var f = (h - a) / (s - n), c = 0;
                            c < t.length;
                            c++
                          )
                            r[c] = (t[c] - n) * f + a;
                          return r;
                        }
                        var a = " ".repeat(2),
                          h = " ".repeat(4);
                        function l(t) {
                          var r =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {},
                            e = r.zzgs,
                            o = void 0 === e ? 15 : e,
                            n = r.zzks,
                            s = void 0 === n ? 10 : n,
                            i = r.zzo3,
                            u = void 0 === i ? 8 : i;
                          return ""
                            .concat(t.constructor.name, " {\\n")
                            .concat(a, "[\\n")
                            .concat(h)
                            .concat(
                              (function(t, r, e, o) {
                                for (
                                  var n = t.zzk2,
                                    s = t.zzj2,
                                    i = Math.min(n, r),
                                    a = Math.min(s, e),
                                    u = [],
                                    f = 0;
                                  f < i;
                                  f++
                                ) {
                                  for (var c = [], l = 0; l < a; l++)
                                    c.push(v(t.get(f, l), o));
                                  u.push("".concat(c.join(" ")));
                                }
                                return (
                                  a !== s &&
                                    (u[u.length - 1] += " ... ".concat(
                                      s - e,
                                      " more zzj2"
                                    )),
                                  i !== n &&
                                    u.push("... ".concat(n - r, " more zzk2")),
                                  u.join("\\n".concat(h))
                                );
                              })(t, o, s, u),
                              "\\n"
                            )
                            .concat(a, "]\\n")
                            .concat(a, "zzk2: ")
                            .concat(t.zzk2, "\\n")
                            .concat(a, "zzj2: ")
                            .concat(t.zzj2, "\\n}");
                        }
                        function v(t, r) {
                          var e = String(t);
                          if (e.length <= r) return e.padEnd(r, " ");
                          var o = t.toPrecision(r - 2);
                          if (o.length <= r) return o;
                          var n = t.zzP3(r - 2),
                            s = n.indexOf("e"),
                            i = n.slice(s);
                          return n.slice(0, r - i.length) + i;
                        }
                        function m(t, r, e) {
                          var o = e ? t.zzk2 : t.zzk2 - 1;
                          if (r < 0 || r > o) throw new Error();
                        }
                        function g(t, r, e) {
                          var o = e ? t.zzj2 : t.zzj2 - 1;
                          if (r < 0 || r > o) throw new Error();
                        }
                        function w(t, r) {
                          if ((r.zzC && (r = r.zzC()), r.length !== t.zzj2))
                            throw new Error();
                          return r;
                        }
                        function p(t, r) {
                          if ((r.zzC && (r = r.zzC()), r.length !== t.zzk2))
                            throw new Error();
                          return r;
                        }
                        function y(t, r, e) {
                          return {
                            row: (function(t, r) {
                              if ("object" != c(r)) throw new Error();
                              if (
                                r.some(function(r) {
                                  return r < 0 || r >= t.zzk2;
                                })
                              )
                                throw new Error();
                              return Array.isArray(r) || (r = Array.from(r)), r;
                            })(t, r),
                            zz23: (function(t, r) {
                              if ("object" != c(r)) throw new Error();
                              if (
                                r.some(function(r) {
                                  return r < 0 || r >= t.zzj2;
                                })
                              )
                                throw new Error();
                              return Array.isArray(r) || (r = Array.from(r)), r;
                            })(t, e)
                          };
                        }
                        function d(t, r, e, o, n) {
                          if (5 !== arguments.length) throw new Error();
                          if (
                            (M("zz0", r),
                            M("zz1", e),
                            M("zz2", o),
                            M("zz3", n),
                            r > e ||
                              o > n ||
                              r < 0 ||
                              r >= t.zzk2 ||
                              e < 0 ||
                              e >= t.zzk2 ||
                              o < 0 ||
                              o >= t.zzj2 ||
                              n < 0 ||
                              n >= t.zzj2)
                          )
                            throw new Error();
                        }
                        function b(t) {
                          for (
                            var r =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : 0,
                              e = [],
                              o = 0;
                            o < t;
                            o++
                          )
                            e.push(r);
                          return e;
                        }
                        function M(t, r) {
                          if ("number" != typeof r)
                            throw new Error("".concat(t, " must be a number"));
                        }
                        function x(t) {
                          if (t.zzu3()) throw new Error();
                        }
                        var k = (function() {
                          function t() {
                            u(this, t);
                          }
                          return (
                            f(
                              t,
                              [
                                {
                                  key: "apply",
                                  value: function(t) {
                                    if ("function" != typeof t)
                                      throw new Error();
                                    for (var r = 0; r < this.zzk2; r++)
                                      for (var e = 0; e < this.zzj2; e++)
                                        t.call(this, r, e);
                                    return this;
                                  }
                                },
                                {
                                  key: "zzC",
                                  value: function() {
                                    for (var t = [], r = 0; r < this.zzk2; r++)
                                      for (var e = 0; e < this.zzj2; e++)
                                        t.push(this.get(r, e));
                                    return t;
                                  }
                                },
                                {
                                  key: "zzD",
                                  value: function() {
                                    for (
                                      var t = [], r = 0;
                                      r < this.zzk2;
                                      r++
                                    ) {
                                      t.push([]);
                                      for (var e = 0; e < this.zzj2; e++)
                                        t[r].push(this.get(r, e));
                                    }
                                    return t;
                                  }
                                },
                                {
                                  key: "toJSON",
                                  value: function() {
                                    return this.zzD();
                                  }
                                },
                                {
                                  key: "zzE",
                                  value: function() {
                                    return 1 === this.zzk2;
                                  }
                                },
                                {
                                  key: "zzF",
                                  value: function() {
                                    return 1 === this.zzj2;
                                  }
                                },
                                {
                                  key: "zzG",
                                  value: function() {
                                    return 1 === this.zzk2 || 1 === this.zzj2;
                                  }
                                },
                                {
                                  key: "zzH",
                                  value: function() {
                                    return this.zzk2 === this.zzj2;
                                  }
                                },
                                {
                                  key: "zzu3",
                                  value: function() {
                                    return 0 === this.zzk2 || 0 === this.zzj2;
                                  }
                                },
                                {
                                  key: "zzI",
                                  value: function() {
                                    if (this.zzH()) {
                                      for (var t = 0; t < this.zzk2; t++)
                                        for (var r = 0; r <= t; r++)
                                          if (this.get(t, r) !== this.get(r, t))
                                            return !1;
                                      return !0;
                                    }
                                    return !1;
                                  }
                                },
                                {
                                  key: "zzJ",
                                  value: function() {
                                    for (
                                      var t = 0, r = 0, e = -1, o = !0, n = !1;
                                      t < this.zzk2 && o;

                                    ) {
                                      for (
                                        r = 0, n = !1;
                                        r < this.zzj2 && !1 === n;

                                      )
                                        0 === this.get(t, r)
                                          ? r++
                                          : 1 === this.get(t, r) && r > e
                                          ? ((n = !0), (e = r))
                                          : ((o = !1), (n = !0));
                                      t++;
                                    }
                                    return o;
                                  }
                                },
                                {
                                  key: "zzK",
                                  value: function() {
                                    for (
                                      var t = 0, r = 0, e = -1, o = !0, n = !1;
                                      t < this.zzk2 && o;

                                    ) {
                                      for (
                                        r = 0, n = !1;
                                        r < this.zzj2 && !1 === n;

                                      )
                                        0 === this.get(t, r)
                                          ? r++
                                          : 1 === this.get(t, r) && r > e
                                          ? ((n = !0), (e = r))
                                          : ((o = !1), (n = !0));
                                      for (var s = r + 1; s < this.zzk2; s++)
                                        0 !== this.get(t, s) && (o = !1);
                                      t++;
                                    }
                                    return o;
                                  }
                                },
                                {
                                  key: "zzv3",
                                  value: function() {
                                    for (
                                      var t = this.clone(), r = 0, e = 0;
                                      r < t.zzk2 && e < t.zzj2;

                                    ) {
                                      for (var o = r, n = r; n < t.zzk2; n++)
                                        t.get(n, e) > t.get(o, e) && (o = n);
                                      if (0 === t.get(o, e)) e++;
                                      else {
                                        t.zzP(r, o);
                                        for (
                                          var s = t.get(r, e), i = e;
                                          i < t.zzj2;
                                          i++
                                        )
                                          t.set(r, i, t.get(r, i) / s);
                                        for (var a = r + 1; a < t.zzk2; a++) {
                                          var u = t.get(a, e) / t.get(r, e);
                                          t.set(a, e, 0);
                                          for (var h = e + 1; h < t.zzj2; h++)
                                            t.set(
                                              a,
                                              h,
                                              t.get(a, h) - t.get(r, h) * u
                                            );
                                        }
                                        r++, e++;
                                      }
                                    }
                                    return t;
                                  }
                                },
                                {
                                  key: "reducedEchelonForm",
                                  value: function() {
                                    for (
                                      var t = this.zzv3(),
                                        r = t.zzj2,
                                        e = t.zzk2,
                                        o = e - 1;
                                      o >= 0;

                                    )
                                      if (0 === t.zzg(o)) o--;
                                      else {
                                        for (
                                          var n = 0, s = !1;
                                          n < e && !1 === s;

                                        )
                                          1 === t.get(o, n) ? (s = !0) : n++;
                                        for (var i = 0; i < o; i++)
                                          for (
                                            var a = t.get(i, n), u = n;
                                            u < r;
                                            u++
                                          ) {
                                            var h =
                                              t.get(i, u) - a * t.get(o, u);
                                            t.set(i, u, h);
                                          }
                                        o--;
                                      }
                                    return t;
                                  }
                                },
                                {
                                  key: "set",
                                  value: function() {
                                    throw new Error();
                                  }
                                },
                                {
                                  key: "get",
                                  value: function() {
                                    throw new Error();
                                  }
                                },
                                {
                                  key: "repeat",
                                  value: function() {
                                    var t =
                                      arguments.length > 0 &&
                                      void 0 !== arguments[0]
                                        ? arguments[0]
                                        : {};
                                    if ("object" != c(t)) throw new Error();
                                    var r = t.zzk2,
                                      e = void 0 === r ? 1 : r,
                                      o = t.zzj2,
                                      n = void 0 === o ? 1 : o;
                                    if (!Number.isInteger(e) || e <= 0)
                                      throw new Error();
                                    if (!Number.isInteger(n) || n <= 0)
                                      throw new Error();
                                    for (
                                      var s = new R(
                                          this.zzk2 * e,
                                          this.zzj2 * n
                                        ),
                                        i = 0;
                                      i < e;
                                      i++
                                    )
                                      for (var a = 0; a < n; a++)
                                        s.zz61(
                                          this,
                                          this.zzk2 * i,
                                          this.zzj2 * a
                                        );
                                    return s;
                                  }
                                },
                                {
                                  key: "zzL",
                                  value: function(t) {
                                    for (var r = 0; r < this.zzk2; r++)
                                      for (var e = 0; e < this.zzj2; e++)
                                        this.set(r, e, t);
                                    return this;
                                  }
                                },
                                {
                                  key: "neg",
                                  value: function() {
                                    return this.mulS(-1);
                                  }
                                },
                                {
                                  key: "zzM",
                                  value: function(t) {
                                    m(this, t);
                                    for (var r = [], e = 0; e < this.zzj2; e++)
                                      r.push(this.get(t, e));
                                    return r;
                                  }
                                },
                                {
                                  key: "zzMVector",
                                  value: function(t) {
                                    return R.zzE1(this.zzM(t));
                                  }
                                },
                                {
                                  key: "zzO",
                                  value: function(t, r) {
                                    m(this, t), (r = w(this, r));
                                    for (var e = 0; e < this.zzj2; e++)
                                      this.set(t, e, r[e]);
                                    return this;
                                  }
                                },
                                {
                                  key: "zzP",
                                  value: function(t, r) {
                                    m(this, t), m(this, r);
                                    for (var e = 0; e < this.zzj2; e++) {
                                      var o = this.get(t, e);
                                      this.set(t, e, this.get(r, e)),
                                        this.set(r, e, o);
                                    }
                                    return this;
                                  }
                                },
                                {
                                  key: "zzQ",
                                  value: function(t) {
                                    g(this, t);
                                    for (var r = [], e = 0; e < this.zzk2; e++)
                                      r.push(this.get(e, t));
                                    return r;
                                  }
                                },
                                {
                                  key: "zzQVector",
                                  value: function(t) {
                                    return R.zzF1(this.zzQ(t));
                                  }
                                },
                                {
                                  key: "zzS",
                                  value: function(t, r) {
                                    g(this, t), (r = p(this, r));
                                    for (var e = 0; e < this.zzk2; e++)
                                      this.set(e, t, r[e]);
                                    return this;
                                  }
                                },
                                {
                                  key: "zzT",
                                  value: function(t, r) {
                                    g(this, t), g(this, r);
                                    for (var e = 0; e < this.zzk2; e++) {
                                      var o = this.get(e, t);
                                      this.set(e, t, this.get(e, r)),
                                        this.set(e, r, o);
                                    }
                                    return this;
                                  }
                                },
                                {
                                  key: "zzU",
                                  value: function(t) {
                                    t = w(this, t);
                                    for (var r = 0; r < this.zzk2; r++)
                                      for (var e = 0; e < this.zzj2; e++)
                                        this.set(r, e, this.get(r, e) + t[e]);
                                    return this;
                                  }
                                },
                                {
                                  key: "zzV",
                                  value: function(t) {
                                    t = w(this, t);
                                    for (var r = 0; r < this.zzk2; r++)
                                      for (var e = 0; e < this.zzj2; e++)
                                        this.set(r, e, this.get(r, e) - t[e]);
                                    return this;
                                  }
                                },
                                {
                                  key: "zzW",
                                  value: function(t) {
                                    t = w(this, t);
                                    for (var r = 0; r < this.zzk2; r++)
                                      for (var e = 0; e < this.zzj2; e++)
                                        this.set(r, e, this.get(r, e) * t[e]);
                                    return this;
                                  }
                                },
                                {
                                  key: "zzX",
                                  value: function(t) {
                                    t = w(this, t);
                                    for (var r = 0; r < this.zzk2; r++)
                                      for (var e = 0; e < this.zzj2; e++)
                                        this.set(r, e, this.get(r, e) / t[e]);
                                    return this;
                                  }
                                },
                                {
                                  key: "zzY",
                                  value: function(t) {
                                    t = p(this, t);
                                    for (var r = 0; r < this.zzk2; r++)
                                      for (var e = 0; e < this.zzj2; e++)
                                        this.set(r, e, this.get(r, e) + t[r]);
                                    return this;
                                  }
                                },
                                {
                                  key: "zzZ",
                                  value: function(t) {
                                    t = p(this, t);
                                    for (var r = 0; r < this.zzk2; r++)
                                      for (var e = 0; e < this.zzj2; e++)
                                        this.set(r, e, this.get(r, e) - t[r]);
                                    return this;
                                  }
                                },
                                {
                                  key: "zza",
                                  value: function(t) {
                                    t = p(this, t);
                                    for (var r = 0; r < this.zzk2; r++)
                                      for (var e = 0; e < this.zzj2; e++)
                                        this.set(r, e, this.get(r, e) * t[r]);
                                    return this;
                                  }
                                },
                                {
                                  key: "zzb",
                                  value: function(t) {
                                    t = p(this, t);
                                    for (var r = 0; r < this.zzk2; r++)
                                      for (var e = 0; e < this.zzj2; e++)
                                        this.set(r, e, this.get(r, e) / t[r]);
                                    return this;
                                  }
                                },
                                {
                                  key: "zzc",
                                  value: function(t, r) {
                                    m(this, t);
                                    for (var e = 0; e < this.zzj2; e++)
                                      this.set(t, e, this.get(t, e) * r);
                                    return this;
                                  }
                                },
                                {
                                  key: "zzd",
                                  value: function(t, r) {
                                    g(this, t);
                                    for (var e = 0; e < this.zzk2; e++)
                                      this.set(e, t, this.get(e, t) * r);
                                    return this;
                                  }
                                },
                                {
                                  key: "max",
                                  value: function() {
                                    if (this.zzu3()) return NaN;
                                    for (
                                      var t = this.get(0, 0), r = 0;
                                      r < this.zzk2;
                                      r++
                                    )
                                      for (var e = 0; e < this.zzj2; e++)
                                        this.get(r, e) > t &&
                                          (t = this.get(r, e));
                                    return t;
                                  }
                                },
                                {
                                  key: "zze",
                                  value: function() {
                                    x(this);
                                    for (
                                      var t = this.get(0, 0), r = [0, 0], e = 0;
                                      e < this.zzk2;
                                      e++
                                    )
                                      for (var o = 0; o < this.zzj2; o++)
                                        this.get(e, o) > t &&
                                          ((t = this.get(e, o)),
                                          (r[0] = e),
                                          (r[1] = o));
                                    return r;
                                  }
                                },
                                {
                                  key: "min",
                                  value: function() {
                                    if (this.zzu3()) return NaN;
                                    for (
                                      var t = this.get(0, 0), r = 0;
                                      r < this.zzk2;
                                      r++
                                    )
                                      for (var e = 0; e < this.zzj2; e++)
                                        this.get(r, e) < t &&
                                          (t = this.get(r, e));
                                    return t;
                                  }
                                },
                                {
                                  key: "zzf",
                                  value: function() {
                                    x(this);
                                    for (
                                      var t = this.get(0, 0), r = [0, 0], e = 0;
                                      e < this.zzk2;
                                      e++
                                    )
                                      for (var o = 0; o < this.zzj2; o++)
                                        this.get(e, o) < t &&
                                          ((t = this.get(e, o)),
                                          (r[0] = e),
                                          (r[1] = o));
                                    return r;
                                  }
                                },
                                {
                                  key: "zzg",
                                  value: function(t) {
                                    if ((m(this, t), this.zzu3())) return NaN;
                                    for (
                                      var r = this.get(t, 0), e = 1;
                                      e < this.zzj2;
                                      e++
                                    )
                                      this.get(t, e) > r &&
                                        (r = this.get(t, e));
                                    return r;
                                  }
                                },
                                {
                                  key: "zzgIndex",
                                  value: function(t) {
                                    m(this, t), x(this);
                                    for (
                                      var r = this.get(t, 0), e = [t, 0], o = 1;
                                      o < this.zzj2;
                                      o++
                                    )
                                      this.get(t, o) > r &&
                                        ((r = this.get(t, o)), (e[1] = o));
                                    return e;
                                  }
                                },
                                {
                                  key: "zzi",
                                  value: function(t) {
                                    if ((m(this, t), this.zzu3())) return NaN;
                                    for (
                                      var r = this.get(t, 0), e = 1;
                                      e < this.zzj2;
                                      e++
                                    )
                                      this.get(t, e) < r &&
                                        (r = this.get(t, e));
                                    return r;
                                  }
                                },
                                {
                                  key: "zziIndex",
                                  value: function(t) {
                                    m(this, t), x(this);
                                    for (
                                      var r = this.get(t, 0), e = [t, 0], o = 1;
                                      o < this.zzj2;
                                      o++
                                    )
                                      this.get(t, o) < r &&
                                        ((r = this.get(t, o)), (e[1] = o));
                                    return e;
                                  }
                                },
                                {
                                  key: "zzk",
                                  value: function(t) {
                                    if ((g(this, t), this.zzu3())) return NaN;
                                    for (
                                      var r = this.get(0, t), e = 1;
                                      e < this.zzk2;
                                      e++
                                    )
                                      this.get(e, t) > r &&
                                        (r = this.get(e, t));
                                    return r;
                                  }
                                },
                                {
                                  key: "zzkIndex",
                                  value: function(t) {
                                    g(this, t), x(this);
                                    for (
                                      var r = this.get(0, t), e = [0, t], o = 1;
                                      o < this.zzk2;
                                      o++
                                    )
                                      this.get(o, t) > r &&
                                        ((r = this.get(o, t)), (e[0] = o));
                                    return e;
                                  }
                                },
                                {
                                  key: "zzm",
                                  value: function(t) {
                                    if ((g(this, t), this.zzu3())) return NaN;
                                    for (
                                      var r = this.get(0, t), e = 1;
                                      e < this.zzk2;
                                      e++
                                    )
                                      this.get(e, t) < r &&
                                        (r = this.get(e, t));
                                    return r;
                                  }
                                },
                                {
                                  key: "zzmIndex",
                                  value: function(t) {
                                    g(this, t), x(this);
                                    for (
                                      var r = this.get(0, t), e = [0, t], o = 1;
                                      o < this.zzk2;
                                      o++
                                    )
                                      this.get(o, t) < r &&
                                        ((r = this.get(o, t)), (e[0] = o));
                                    return e;
                                  }
                                },
                                {
                                  key: "zzo",
                                  value: function() {
                                    for (
                                      var t = Math.min(this.zzk2, this.zzj2),
                                        r = [],
                                        e = 0;
                                      e < t;
                                      e++
                                    )
                                      r.push(this.get(e, e));
                                    return r;
                                  }
                                },
                                {
                                  key: "zzp",
                                  value: function() {
                                    var t =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                          ? arguments[0]
                                          : "zzw3",
                                      r = 0;
                                    if ("max" === t) return this.max();
                                    if ("zzw3" === t) {
                                      for (var e = 0; e < this.zzk2; e++)
                                        for (var o = 0; o < this.zzj2; o++)
                                          r += this.get(e, o) * this.get(e, o);
                                      return Math.sqrt(r);
                                    }
                                    throw new Error(
                                      "unknown zzp type: ".concat(t)
                                    );
                                  }
                                },
                                {
                                  key: "zzq",
                                  value: function() {
                                    for (var t = 0, r = 0; r < this.zzk2; r++)
                                      for (var e = 0; e < this.zzj2; e++)
                                        (t += this.get(r, e)),
                                          this.set(r, e, t);
                                    return this;
                                  }
                                },
                                {
                                  key: "dot",
                                  value: function(r) {
                                    t.zzM1(r) && (r = r.zzC());
                                    var e = this.zzC();
                                    if (e.length !== r.length)
                                      throw new Error();
                                    for (var o = 0, n = 0; n < e.length; n++)
                                      o += e[n] * r[n];
                                    return o;
                                  }
                                },
                                {
                                  key: "zzr",
                                  value: function(t) {
                                    t = R.zzL1(t);
                                    var r = new R(this.zzk2, t.zzj2);
                                    return this.zzr2(t, r), r;
                                  }
                                },
                                {
                                  key: "zzr2",
                                  value: function(t, r) {
                                    var e = this.zzk2,
                                      o = this.zzj2,
                                      n = t.zzj2;
                                    this.Bcolj =
                                      this.Bcolj || new Float32Array(o);
                                    for (
                                      var s = this.Bcolj, i = 0;
                                      i < n;
                                      i++
                                    ) {
                                      for (var a = 0; a < o; a++)
                                        s[a] = t.get(a, i);
                                      for (var u = 0; u < e; u++) {
                                        for (var h = 0, f = 0; f < o; f++)
                                          h += this.get(u, f) * s[f];
                                        r.set(u, i, h);
                                      }
                                    }
                                  }
                                },
                                {
                                  key: "zzs",
                                  value: function(t) {
                                    t = R.zzL1(t);
                                    var r = new R(2, 2),
                                      e = this.get(0, 0),
                                      o = t.get(0, 0),
                                      n = this.get(0, 1),
                                      s = t.get(0, 1),
                                      i = this.get(1, 0),
                                      a = t.get(1, 0),
                                      u = this.get(1, 1),
                                      h = t.get(1, 1),
                                      f = (e + u) * (o + h),
                                      c = (i + u) * o,
                                      l = e * (s - h),
                                      v = u * (a - o),
                                      m = (e + n) * h,
                                      g = f + v - m + (n - u) * (a + h),
                                      w = l + m,
                                      p = c + v,
                                      y = f - c + l + (i - e) * (o + s);
                                    return (
                                      r.set(0, 0, g),
                                      r.set(0, 1, w),
                                      r.set(1, 0, p),
                                      r.set(1, 1, y),
                                      r
                                    );
                                  }
                                },
                                {
                                  key: "zzt",
                                  value: function(t) {
                                    t = R.zzL1(t);
                                    var r = new R(3, 3),
                                      e = this.get(0, 0),
                                      o = this.get(0, 1),
                                      n = this.get(0, 2),
                                      s = this.get(1, 0),
                                      i = this.get(1, 1),
                                      a = this.get(1, 2),
                                      u = this.get(2, 0),
                                      h = this.get(2, 1),
                                      f = this.get(2, 2),
                                      c = t.get(0, 0),
                                      l = t.get(0, 1),
                                      v = t.get(0, 2),
                                      m = t.get(1, 0),
                                      g = t.get(1, 1),
                                      w = t.get(1, 2),
                                      p = t.get(2, 0),
                                      y = t.get(2, 1),
                                      d = t.get(2, 2),
                                      b = (e - s) * (-l + g),
                                      M = (-e + s + i) * (c - l + g),
                                      x = (s + i) * (-c + l),
                                      k = e * c,
                                      S = (-e + u + h) * (c - v + w),
                                      E = (-e + u) * (v - w),
                                      T = (u + h) * (-c + v),
                                      A = (-n + h + f) * (g + p - y),
                                      C = (n - f) * (g - y),
                                      I = n * p,
                                      D = (h + f) * (-p + y),
                                      N = (-n + i + a) * (w + p - d),
                                      O = (n - a) * (w - d),
                                      F = (i + a) * (-p + d),
                                      P = k + I + o * m,
                                      j =
                                        (e + o + n - s - i - h - f) * g +
                                        M +
                                        x +
                                        k +
                                        A +
                                        I +
                                        D,
                                      q =
                                        k +
                                        S +
                                        T +
                                        (e + o + n - i - a - u - h) * w +
                                        I +
                                        N +
                                        F,
                                      V =
                                        b +
                                        i * (-c + l + m - g - w - p + d) +
                                        M +
                                        k +
                                        I +
                                        N +
                                        O,
                                      z = b + M + x + k + a * y,
                                      Q = I + N + O + F + s * v,
                                      L =
                                        k +
                                        S +
                                        E +
                                        h * (-c + v + m - g - w - p + y) +
                                        A +
                                        C +
                                        I,
                                      B = A + C + I + D + u * l,
                                      U = k + S + E + T + f * d;
                                    return (
                                      r.set(0, 0, P),
                                      r.set(0, 1, j),
                                      r.set(0, 2, q),
                                      r.set(1, 0, V),
                                      r.set(1, 1, z),
                                      r.set(1, 2, Q),
                                      r.set(2, 0, L),
                                      r.set(2, 1, B),
                                      r.set(2, 2, U),
                                      r
                                    );
                                  }
                                },
                                {
                                  key: "zzrStrassen",
                                  value: function(r) {
                                    r = R.zzL1(r);
                                    var e = this.clone(),
                                      o = e.zzk2,
                                      n = e.zzj2,
                                      s = r.zzk2,
                                      i = r.zzj2;
                                    function a(r, e, o) {
                                      var n = r.zzk2,
                                        s = r.zzj2;
                                      if (n === e && s === o) return r;
                                      var i = t.zzG1(e, o);
                                      return (i = i.zz61(r, 0, 0));
                                    }
                                    n !== s && 1;
                                    var u = Math.max(o, s),
                                      h = Math.max(n, i);
                                    return (function r(e, o, n, s) {
                                      if (n <= 512 || s <= 512) return e.zzr(o);
                                      n % 2 == 1 && s % 2 == 1
                                        ? ((e = a(e, n + 1, s + 1)),
                                          (o = a(o, n + 1, s + 1)))
                                        : n % 2 == 1
                                        ? ((e = a(e, n + 1, s)),
                                          (o = a(o, n + 1, s)))
                                        : s % 2 == 1 &&
                                          ((e = a(e, n, s + 1)),
                                          (o = a(o, n, s + 1)));
                                      var i = parseInt(e.zzk2 / 2, 10),
                                        u = parseInt(e.zzj2 / 2, 10),
                                        h = e.zz31(0, i - 1, 0, u - 1),
                                        f = o.zz31(0, i - 1, 0, u - 1),
                                        c = e.zz31(0, i - 1, u, e.zzj2 - 1),
                                        l = o.zz31(0, i - 1, u, o.zzj2 - 1),
                                        v = e.zz31(i, e.zzk2 - 1, 0, u - 1),
                                        m = o.zz31(i, o.zzk2 - 1, 0, u - 1),
                                        g = e.zz31(
                                          i,
                                          e.zzk2 - 1,
                                          u,
                                          e.zzj2 - 1
                                        ),
                                        w = o.zz31(
                                          i,
                                          o.zzk2 - 1,
                                          u,
                                          o.zzj2 - 1
                                        ),
                                        p = r(t.add(h, g), t.add(f, w), i, u),
                                        y = r(t.add(v, g), f, i, u),
                                        d = r(h, t.sub(l, w), i, u),
                                        b = r(g, t.sub(m, f), i, u),
                                        M = r(t.add(h, c), w, i, u),
                                        x = r(t.sub(v, h), t.add(f, l), i, u),
                                        k = r(t.sub(c, g), t.add(m, w), i, u),
                                        S = t.add(p, b);
                                      S.sub(M), S.add(k);
                                      var R = t.add(d, M),
                                        E = t.add(y, b),
                                        T = t.sub(p, y);
                                      T.add(d), T.add(x);
                                      var A = t.zzG1(2 * S.zzk2, 2 * S.zzj2);
                                      return (A = (A = (A = (A = A.zz61(
                                        S,
                                        0,
                                        0
                                      )).zz61(R, S.zzk2, 0)).zz61(
                                        E,
                                        0,
                                        S.zzj2
                                      )).zz61(T, S.zzk2, S.zzj2)).zz31(
                                        0,
                                        n - 1,
                                        0,
                                        s - 1
                                      );
                                    })(
                                      (e = a(e, u, h)),
                                      (r = a(r, u, h)),
                                      u,
                                      h
                                    );
                                  }
                                },
                                {
                                  key: "zzv",
                                  value: function() {
                                    var t =
                                      arguments.length > 0 &&
                                      void 0 !== arguments[0]
                                        ? arguments[0]
                                        : {};
                                    if ("object" != c(t)) throw new Error();
                                    var r = t.min,
                                      e = void 0 === r ? 0 : r,
                                      o = t.max,
                                      s = void 0 === o ? 1 : o;
                                    if (!Number.isFinite(e)) throw new Error();
                                    if (!Number.isFinite(s)) throw new Error();
                                    if (e >= s) throw new Error();
                                    for (
                                      var i = new R(this.zzk2, this.zzj2),
                                        a = 0;
                                      a < this.zzk2;
                                      a++
                                    ) {
                                      var u = this.zzM(a);
                                      u.length > 0 &&
                                        n(u, { min: e, max: s, output: u }),
                                        i.zzO(a, u);
                                    }
                                    return i;
                                  }
                                },
                                {
                                  key: "zzw",
                                  value: function() {
                                    var t =
                                      arguments.length > 0 &&
                                      void 0 !== arguments[0]
                                        ? arguments[0]
                                        : {};
                                    if ("object" != c(t)) throw new Error();
                                    var r = t.min,
                                      e = void 0 === r ? 0 : r,
                                      o = t.max,
                                      s = void 0 === o ? 1 : o;
                                    if (!Number.isFinite(e)) throw new Error();
                                    if (!Number.isFinite(s)) throw new Error();
                                    if (e >= s) throw new Error();
                                    for (
                                      var i = new R(this.zzk2, this.zzj2),
                                        a = 0;
                                      a < this.zzj2;
                                      a++
                                    ) {
                                      var u = this.zzQ(a);
                                      u.length &&
                                        n(u, { min: e, max: s, output: u }),
                                        i.zzS(a, u);
                                    }
                                    return i;
                                  }
                                },
                                {
                                  key: "zzx",
                                  value: function() {
                                    for (
                                      var t = Math.ceil(this.zzj2 / 2), r = 0;
                                      r < this.zzk2;
                                      r++
                                    )
                                      for (var e = 0; e < t; e++) {
                                        var o = this.get(r, e),
                                          n = this.get(r, this.zzj2 - 1 - e);
                                        this.set(r, e, n),
                                          this.set(r, this.zzj2 - 1 - e, o);
                                      }
                                    return this;
                                  }
                                },
                                {
                                  key: "zzy",
                                  value: function() {
                                    for (
                                      var t = Math.ceil(this.zzk2 / 2), r = 0;
                                      r < this.zzj2;
                                      r++
                                    )
                                      for (var e = 0; e < t; e++) {
                                        var o = this.get(e, r),
                                          n = this.get(this.zzk2 - 1 - e, r);
                                        this.set(e, r, n),
                                          this.set(this.zzk2 - 1 - e, r, o);
                                      }
                                    return this;
                                  }
                                },
                                {
                                  key: "zzz",
                                  value: function(t) {
                                    t = R.zzL1(t);
                                    for (
                                      var r = this.zzk2,
                                        e = this.zzj2,
                                        o = t.zzk2,
                                        n = t.zzj2,
                                        s = new R(r * o, e * n),
                                        i = 0;
                                      i < r;
                                      i++
                                    )
                                      for (var a = 0; a < e; a++)
                                        for (var u = 0; u < o; u++)
                                          for (var h = 0; h < n; h++)
                                            s.set(
                                              o * i + u,
                                              n * a + h,
                                              this.get(i, a) * t.get(u, h)
                                            );
                                    return s;
                                  }
                                },
                                {
                                  key: "kroneckerSum",
                                  value: function(t) {
                                    if (
                                      ((t = R.zzL1(t)), !this.zzH() || !t.zzH())
                                    )
                                      throw new Error();
                                    var r = this.zzk2,
                                      e = t.zzk2,
                                      o = this.zzz(R.zzJ1(e, e)),
                                      n = R.zzJ1(r, r).zzz(t);
                                    return o.add(n);
                                  }
                                },
                                {
                                  key: "zz01",
                                  value: function() {
                                    var t = new R(this.zzj2, this.zzk2);
                                    return this.zz012(t), t;
                                  }
                                },
                                {
                                  key: "zz012",
                                  value: function(t) {
                                    for (var r = 0; r < this.zzk2; r++)
                                      for (var e = 0; e < this.zzj2; e++)
                                        t.set(e, r, this.get(r, e));
                                  }
                                },
                                {
                                  key: "zz11",
                                  value: function() {
                                    for (
                                      var t =
                                          arguments.length > 0 &&
                                          void 0 !== arguments[0]
                                            ? arguments[0]
                                            : S,
                                        r = 0;
                                      r < this.zzk2;
                                      r++
                                    )
                                      this.zzO(r, this.zzM(r).sort(t));
                                    return this;
                                  }
                                },
                                {
                                  key: "zz21",
                                  value: function() {
                                    for (
                                      var t =
                                          arguments.length > 0 &&
                                          void 0 !== arguments[0]
                                            ? arguments[0]
                                            : S,
                                        r = 0;
                                      r < this.zzj2;
                                      r++
                                    )
                                      this.zzS(r, this.zzQ(r).sort(t));
                                    return this;
                                  }
                                },
                                {
                                  key: "zz31",
                                  value: function(t, r, e, o) {
                                    d(this, t, r, e, o);
                                    for (
                                      var n = new R(r - t + 1, o - e + 1),
                                        s = t;
                                      s <= r;
                                      s++
                                    )
                                      for (var i = e; i <= o; i++)
                                        n.set(s - t, i - e, this.get(s, i));
                                    return n;
                                  }
                                },
                                {
                                  key: "zz31Row",
                                  value: function(t, r, e) {
                                    if (
                                      (void 0 === r && (r = 0),
                                      void 0 === e && (e = this.zzj2 - 1),
                                      r > e ||
                                        r < 0 ||
                                        r >= this.zzj2 ||
                                        e < 0 ||
                                        e >= this.zzj2)
                                    )
                                      throw new Error();
                                    for (
                                      var o = new R(t.length, e - r + 1), n = 0;
                                      n < t.length;
                                      n++
                                    )
                                      for (var s = r; s <= e; s++) {
                                        if (t[n] < 0 || t[n] >= this.zzk2)
                                          throw new Error(
                                            "Row index out of range: ".concat(
                                              t[n]
                                            )
                                          );
                                        o.set(n, s - r, this.get(t[n], s));
                                      }
                                    return o;
                                  }
                                },
                                {
                                  key: "zz31Column",
                                  value: function(t, r, e) {
                                    if (
                                      (void 0 === r && (r = 0),
                                      void 0 === e && (e = this.zzk2 - 1),
                                      r > e ||
                                        r < 0 ||
                                        r >= this.zzk2 ||
                                        e < 0 ||
                                        e >= this.zzk2)
                                    )
                                      throw new Error();
                                    for (
                                      var o = new R(e - r + 1, t.length), n = 0;
                                      n < t.length;
                                      n++
                                    )
                                      for (var s = r; s <= e; s++) {
                                        if (t[n] < 0 || t[n] >= this.zzj2)
                                          throw new Error(
                                            "Column index out of range: ".concat(
                                              t[n]
                                            )
                                          );
                                        o.set(s - r, n, this.get(s, t[n]));
                                      }
                                    return o;
                                  }
                                },
                                {
                                  key: "zz61",
                                  value: function(t, r, e) {
                                    if ((t = R.zzL1(t)).zzu3()) return this;
                                    d(
                                      this,
                                      r,
                                      r + t.zzk2 - 1,
                                      e,
                                      e + t.zzj2 - 1
                                    );
                                    for (var o = 0; o < t.zzk2; o++)
                                      for (var n = 0; n < t.zzj2; n++)
                                        this.set(r + o, e + n, t.get(o, n));
                                    return this;
                                  }
                                },
                                {
                                  key: "zz71",
                                  value: function(t, r) {
                                    for (
                                      var e = y(this, t, r),
                                        o = new R(t.length, r.length),
                                        n = 0;
                                      n < e.row.length;
                                      n++
                                    )
                                      for (
                                        var s = e.row[n], i = 0;
                                        i < e.zz23.length;
                                        i++
                                      ) {
                                        var a = e.zz23[i];
                                        o.set(n, i, this.get(s, a));
                                      }
                                    return o;
                                  }
                                },
                                {
                                  key: "trace",
                                  value: function() {
                                    for (
                                      var t = Math.min(this.zzk2, this.zzj2),
                                        r = 0,
                                        e = 0;
                                      e < t;
                                      e++
                                    )
                                      r += this.get(e, e);
                                    return r;
                                  }
                                },
                                {
                                  key: "copy",
                                  value: function(t) {
                                    for (var r = 0; r < this.zzk2; r++)
                                      for (var e = 0; e < this.zzj2; e++)
                                        this.set(r, e, t.get(r, e));
                                  }
                                },
                                {
                                  key: "reset",
                                  value: function() {
                                    for (var t = 0; t < this.zzk2; t++)
                                      for (var r = 0; r < this.zzj2; r++)
                                        this.set(t, r, 0);
                                  }
                                },
                                {
                                  key: "clone",
                                  value: function() {
                                    var t = new R(this.zzk2, this.zzj2);
                                    return t.copy(this), t;
                                  }
                                },
                                {
                                  key: "sum",
                                  value: function(t) {
                                    switch (t) {
                                      case "row":
                                        return (function(t) {
                                          for (
                                            var r = b(t.zzk2), e = 0;
                                            e < t.zzk2;
                                            ++e
                                          )
                                            for (var o = 0; o < t.zzj2; ++o)
                                              r[e] += t.get(e, o);
                                          return r;
                                        })(this);
                                      case "zz23":
                                        return (function(t) {
                                          for (
                                            var r = b(t.zzj2), e = 0;
                                            e < t.zzk2;
                                            ++e
                                          )
                                            for (var o = 0; o < t.zzj2; ++o)
                                              r[o] += t.get(e, o);
                                          return r;
                                        })(this);
                                      case void 0:
                                        return (function(t) {
                                          for (
                                            var r = 0, e = 0;
                                            e < t.zzk2;
                                            e++
                                          )
                                            for (var o = 0; o < t.zzj2; o++)
                                              r += t.get(e, o);
                                          return r;
                                        })(this);
                                      default:
                                        throw new Error(
                                          "inzyp13 option: ".concat(t)
                                        );
                                    }
                                  }
                                },
                                {
                                  key: "zz81",
                                  value: function(t) {
                                    switch (t) {
                                      case "row":
                                        return (function(t) {
                                          for (
                                            var r = b(t.zzk2, 1), e = 0;
                                            e < t.zzk2;
                                            ++e
                                          )
                                            for (var o = 0; o < t.zzj2; ++o)
                                              r[e] *= t.get(e, o);
                                          return r;
                                        })(this);
                                      case "zz23":
                                        return (function(t) {
                                          for (
                                            var r = b(t.zzj2, 1), e = 0;
                                            e < t.zzk2;
                                            ++e
                                          )
                                            for (var o = 0; o < t.zzj2; ++o)
                                              r[o] *= t.get(e, o);
                                          return r;
                                        })(this);
                                      case void 0:
                                        return (function(t) {
                                          for (
                                            var r = 1, e = 0;
                                            e < t.zzk2;
                                            e++
                                          )
                                            for (var o = 0; o < t.zzj2; o++)
                                              r *= t.get(e, o);
                                          return r;
                                        })(this);
                                      default:
                                        throw new Error(
                                          "inzyp13 option: ".concat(t)
                                        );
                                    }
                                  }
                                },
                                {
                                  key: "zz91",
                                  value: function(t) {
                                    var r = this.sum(t);
                                    switch (t) {
                                      case "row":
                                        for (var e = 0; e < this.zzk2; e++)
                                          r[e] /= this.zzj2;
                                        return r;
                                      case "zz23":
                                        for (var o = 0; o < this.zzj2; o++)
                                          r[o] /= this.zzk2;
                                        return r;
                                      case void 0:
                                        return r / this.zzC1;
                                      default:
                                        throw new Error(
                                          "inzyp13 option: ".concat(t)
                                        );
                                    }
                                  }
                                },
                                {
                                  key: "zzA1",
                                  value: function(t) {
                                    var r =
                                      arguments.length > 1 &&
                                      void 0 !== arguments[1]
                                        ? arguments[1]
                                        : {};
                                    if (
                                      ("object" == c(t) &&
                                        ((r = t), (t = void 0)),
                                      "object" != c(r))
                                    )
                                      throw new Error();
                                    var e = r,
                                      o = e.unbiased,
                                      n = void 0 === o || o,
                                      s = e.zz91,
                                      i = void 0 === s ? this.zz91(t) : s;
                                    if ("boolean" != typeof n)
                                      throw new Error();
                                    switch (t) {
                                      case "row":
                                        if (!Array.isArray(i))
                                          throw new Error();
                                        return (function(t, r, e) {
                                          for (
                                            var o = t.zzk2,
                                              n = t.zzj2,
                                              s = [],
                                              i = 0;
                                            i < o;
                                            i++
                                          ) {
                                            for (
                                              var a = 0, u = 0, h = 0, f = 0;
                                              f < n;
                                              f++
                                            )
                                              (a += h = t.get(i, f) - e[i]),
                                                (u += h * h);
                                            r
                                              ? s.push(
                                                  (u - (a * a) / n) / (n - 1)
                                                )
                                              : s.push((u - (a * a) / n) / n);
                                          }
                                          return s;
                                        })(this, n, i);
                                      case "zz23":
                                        if (!Array.isArray(i))
                                          throw new Error();
                                        return (function(t, r, e) {
                                          for (
                                            var o = t.zzk2,
                                              n = t.zzj2,
                                              s = [],
                                              i = 0;
                                            i < n;
                                            i++
                                          ) {
                                            for (
                                              var a = 0, u = 0, h = 0, f = 0;
                                              f < o;
                                              f++
                                            )
                                              (a += h = t.get(f, i) - e[i]),
                                                (u += h * h);
                                            r
                                              ? s.push(
                                                  (u - (a * a) / o) / (o - 1)
                                                )
                                              : s.push((u - (a * a) / o) / o);
                                          }
                                          return s;
                                        })(this, n, i);
                                      case void 0:
                                        if ("number" != typeof i)
                                          throw new Error();
                                        return (function(t, r, e) {
                                          for (
                                            var o = t.zzk2,
                                              n = t.zzj2,
                                              s = o * n,
                                              i = 0,
                                              a = 0,
                                              u = 0,
                                              h = 0;
                                            h < o;
                                            h++
                                          )
                                            for (var f = 0; f < n; f++)
                                              (i += u = t.get(h, f) - e),
                                                (a += u * u);
                                          return r
                                            ? (a - (i * i) / s) / (s - 1)
                                            : (a - (i * i) / s) / s;
                                        })(this, n, i);
                                      default:
                                        throw new Error(
                                          "inzyp13 option: ".concat(t)
                                        );
                                    }
                                  }
                                },
                                {
                                  key: "zzB1",
                                  value: function(t, r) {
                                    "object" == c(t) && ((r = t), (t = void 0));
                                    var e = this.zzA1(t, r);
                                    if (void 0 === t) return Math.sqrt(e);
                                    for (var o = 0; o < e.length; o++)
                                      e[o] = Math.sqrt(e[o]);
                                    return e;
                                  }
                                },
                                {
                                  key: "center",
                                  value: function(t) {
                                    var r =
                                      arguments.length > 1 &&
                                      void 0 !== arguments[1]
                                        ? arguments[1]
                                        : {};
                                    if (
                                      ("object" == c(t) &&
                                        ((r = t), (t = void 0)),
                                      "object" != c(r))
                                    )
                                      throw new Error();
                                    var e = r.center,
                                      o = void 0 === e ? this.zz91(t) : e;
                                    switch (t) {
                                      case "row":
                                        if (!Array.isArray(o))
                                          throw new Error();
                                        return (
                                          (function(t, r) {
                                            for (var e = 0; e < t.zzk2; e++)
                                              for (var o = 0; o < t.zzj2; o++)
                                                t.set(e, o, t.get(e, o) - r[e]);
                                          })(this, o),
                                          this
                                        );
                                      case "zz23":
                                        if (!Array.isArray(o))
                                          throw new Error();
                                        return (
                                          (function(t, r) {
                                            for (var e = 0; e < t.zzk2; e++)
                                              for (var o = 0; o < t.zzj2; o++)
                                                t.set(e, o, t.get(e, o) - r[o]);
                                          })(this, o),
                                          this
                                        );
                                      case void 0:
                                        if ("number" != typeof o)
                                          throw new Error();
                                        return (
                                          (function(t, r) {
                                            for (var e = 0; e < t.zzk2; e++)
                                              for (var o = 0; o < t.zzj2; o++)
                                                t.set(e, o, t.get(e, o) - r);
                                          })(this, o),
                                          this
                                        );
                                      default:
                                        throw new Error(
                                          "inzyp13 option: ".concat(t)
                                        );
                                    }
                                  }
                                },
                                {
                                  key: "scale",
                                  value: function(t) {
                                    var r =
                                      arguments.length > 1 &&
                                      void 0 !== arguments[1]
                                        ? arguments[1]
                                        : {};
                                    if (
                                      ("object" == c(t) &&
                                        ((r = t), (t = void 0)),
                                      "object" != c(r))
                                    )
                                      throw new Error();
                                    var e = r.scale;
                                    switch (t) {
                                      case "row":
                                        if (void 0 === e)
                                          e = (function(t) {
                                            for (
                                              var r = [], e = 0;
                                              e < t.zzk2;
                                              e++
                                            ) {
                                              for (
                                                var o = 0, n = 0;
                                                n < t.zzj2;
                                                n++
                                              )
                                                o +=
                                                  Math.pow(t.get(e, n), 2) /
                                                  (t.zzj2 - 1);
                                              r.push(Math.sqrt(o));
                                            }
                                            return r;
                                          })(this);
                                        else if (!Array.isArray(e))
                                          throw new Error();
                                        return (
                                          (function(t, r) {
                                            for (var e = 0; e < t.zzk2; e++)
                                              for (var o = 0; o < t.zzj2; o++)
                                                t.set(e, o, t.get(e, o) / r[e]);
                                          })(this, e),
                                          this
                                        );
                                      case "zz23":
                                        if (void 0 === e)
                                          e = (function(t) {
                                            for (
                                              var r = [], e = 0;
                                              e < t.zzj2;
                                              e++
                                            ) {
                                              for (
                                                var o = 0, n = 0;
                                                n < t.zzk2;
                                                n++
                                              )
                                                o +=
                                                  Math.pow(t.get(n, e), 2) /
                                                  (t.zzk2 - 1);
                                              r.push(Math.sqrt(o));
                                            }
                                            return r;
                                          })(this);
                                        else if (!Array.isArray(e))
                                          throw new Error();
                                        return (
                                          (function(t, r) {
                                            for (var e = 0; e < t.zzk2; e++)
                                              for (var o = 0; o < t.zzj2; o++)
                                                t.set(e, o, t.get(e, o) / r[o]);
                                          })(this, e),
                                          this
                                        );
                                      case void 0:
                                        if (void 0 === e)
                                          e = (function(t) {
                                            for (
                                              var r = t.zzC1 - 1, e = 0, o = 0;
                                              o < t.zzj2;
                                              o++
                                            )
                                              for (var n = 0; n < t.zzk2; n++)
                                                e +=
                                                  Math.pow(t.get(n, o), 2) / r;
                                            return Math.sqrt(e);
                                          })(this);
                                        else if ("number" != typeof e)
                                          throw new Error();
                                        return (
                                          (function(t, r) {
                                            for (var e = 0; e < t.zzk2; e++)
                                              for (var o = 0; o < t.zzj2; o++)
                                                t.set(e, o, t.get(e, o) / r);
                                          })(this, e),
                                          this
                                        );
                                      default:
                                        throw new Error(
                                          "inzyp13 option: ".concat(t)
                                        );
                                    }
                                  }
                                },
                                {
                                  key: "toString",
                                  value: function(t) {
                                    return l(this, t);
                                  }
                                },
                                {
                                  key: "zzC1",
                                  get: function() {
                                    return this.zzk2 * this.zzj2;
                                  }
                                }
                              ],
                              [
                                {
                                  key: "zzD1",
                                  value: function(t, r, e) {
                                    if (t * r !== e.length) throw new Error();
                                    for (var o = new R(t, r), n = 0; n < t; n++)
                                      for (var s = 0; s < r; s++)
                                        o.set(n, s, e[n * r + s]);
                                    return o;
                                  }
                                },
                                {
                                  key: "zzE1",
                                  value: function(t) {
                                    for (
                                      var r = new R(1, t.length), e = 0;
                                      e < t.length;
                                      e++
                                    )
                                      r.set(0, e, t[e]);
                                    return r;
                                  }
                                },
                                {
                                  key: "zzF1",
                                  value: function(t) {
                                    for (
                                      var r = new R(t.length, 1), e = 0;
                                      e < t.length;
                                      e++
                                    )
                                      r.set(e, 0, t[e]);
                                    return r;
                                  }
                                },
                                {
                                  key: "zzG1",
                                  value: function(t, r) {
                                    return new R(t, r);
                                  }
                                },
                                {
                                  key: "zzH1",
                                  value: function(t, r) {
                                    return new R(t, r).zzL(1);
                                  }
                                },
                                {
                                  key: "rand",
                                  value: function(t, r) {
                                    var e =
                                      arguments.length > 2 &&
                                      void 0 !== arguments[2]
                                        ? arguments[2]
                                        : {};
                                    if ("object" != c(e)) throw new Error();
                                    for (
                                      var o = e.random,
                                        n = void 0 === o ? Math.random : o,
                                        s = new R(t, r),
                                        i = 0;
                                      i < t;
                                      i++
                                    )
                                      for (var a = 0; a < r; a++)
                                        s.set(i, a, n());
                                    return s;
                                  }
                                },
                                {
                                  key: "zzI1",
                                  value: function(t, r) {
                                    var e =
                                      arguments.length > 2 &&
                                      void 0 !== arguments[2]
                                        ? arguments[2]
                                        : {};
                                    if ("object" != c(e)) throw new Error();
                                    var o = e.min,
                                      n = void 0 === o ? 0 : o,
                                      s = e.max,
                                      i = void 0 === s ? 1e3 : s,
                                      a = e.random,
                                      u = void 0 === a ? Math.random : a;
                                    if (!Number.isInteger(n)) throw new Error();
                                    if (!Number.isInteger(i)) throw new Error();
                                    if (n >= i) throw new Error();
                                    for (
                                      var h = i - n, f = new R(t, r), l = 0;
                                      l < t;
                                      l++
                                    )
                                      for (var v = 0; v < r; v++) {
                                        var m = n + Math.round(u() * h);
                                        f.set(l, v, m);
                                      }
                                    return f;
                                  }
                                },
                                {
                                  key: "zzJ1",
                                  value: function(t, r, e) {
                                    void 0 === r && (r = t),
                                      void 0 === e && (e = 1);
                                    for (
                                      var o = Math.min(t, r),
                                        n = this.zzG1(t, r),
                                        s = 0;
                                      s < o;
                                      s++
                                    )
                                      n.set(s, s, e);
                                    return n;
                                  }
                                },
                                {
                                  key: "zzo",
                                  value: function(t, r, e) {
                                    var o = t.length;
                                    void 0 === r && (r = o),
                                      void 0 === e && (e = r);
                                    for (
                                      var n = Math.min(o, r, e),
                                        s = this.zzG1(r, e),
                                        i = 0;
                                      i < n;
                                      i++
                                    )
                                      s.set(i, i, t[i]);
                                    return s;
                                  }
                                },
                                {
                                  key: "min",
                                  value: function(t, r) {
                                    (t = this.zzL1(t)), (r = this.zzL1(r));
                                    for (
                                      var e = t.zzk2,
                                        o = t.zzj2,
                                        n = new R(e, o),
                                        s = 0;
                                      s < e;
                                      s++
                                    )
                                      for (var i = 0; i < o; i++)
                                        n.set(
                                          s,
                                          i,
                                          Math.min(t.get(s, i), r.get(s, i))
                                        );
                                    return n;
                                  }
                                },
                                {
                                  key: "max",
                                  value: function(t, r) {
                                    (t = this.zzL1(t)), (r = this.zzL1(r));
                                    for (
                                      var e = t.zzk2,
                                        o = t.zzj2,
                                        n = new this(e, o),
                                        s = 0;
                                      s < e;
                                      s++
                                    )
                                      for (var i = 0; i < o; i++)
                                        n.set(
                                          s,
                                          i,
                                          Math.max(t.get(s, i), r.get(s, i))
                                        );
                                    return n;
                                  }
                                },
                                {
                                  key: "zzL1",
                                  value: function(r) {
                                    return t.zzM1(r) ? r : new R(r);
                                  }
                                },
                                {
                                  key: "zzM1",
                                  value: function(t) {
                                    return null != t && "Matrix" === t.klass;
                                  }
                                }
                              ]
                            ),
                            t
                          );
                        })();
                        function S(t, r) {
                          return t - r;
                        }
                        (k.prototype.klass = "Matrix"),
                          "undefined" != typeof Symbol &&
                            (k.prototype[Symbol.for("zze3")] = function() {
                              return l(this);
                            }),
                          (k.random = k.rand),
                          (k.randomInt = k.zzI1),
                          (k.zzoonal = k.zzo),
                          (k.prototype.zzoonal = k.prototype.zzo),
                          (k.zzo2 = k.zzJ1),
                          (k.prototype.negate = k.prototype.neg),
                          (k.prototype.zzI3 = k.prototype.zzz);
                        var R = (function(t) {
                          o(e, k);
                          var r = s(e);
                          function e(t, o) {
                            var n;
                            if ((u(this, e), (n = r.call(this)), e.zzM1(t)))
                              return i(n, t.clone());
                            if (Number.isInteger(t) && t >= 0)
                              n.dataFlatten = new Float32Array(o * t);
                            else {
                              if (!Array.isArray(t)) throw new Error();
                              var s = t;
                              if (
                                "number" !=
                                typeof (o = (t = s.length) ? s[0].length : 0)
                              )
                                n.dataFlatten = new Float32Array(s);
                              else {
                                n.dataFlatten = new Float32Array(o * t);
                                for (var a = 0; a < t; a++)
                                  for (var h = 0; h < o; h++)
                                    n.dataFlatten[a * o + h] = s[a][h];
                              }
                            }
                            return (n.zzk2 = t), (n.zzj2 = o), i(n);
                          }
                          return (
                            f(e, [
                              {
                                key: "set",
                                value: function(t, r, e) {
                                  return (
                                    (this.dataFlatten[t * this.zzj2 + r] = e),
                                    this
                                  );
                                }
                              },
                              {
                                key: "get",
                                value: function(t, r) {
                                  return this.dataFlatten[t * this.zzj2 + r];
                                }
                              },
                              {
                                key: "zzn3",
                                value: function(t, r, e) {
                                  this.dataFlatten[t * this.zzj2 + r] += e;
                                }
                              },
                              {
                                key: "mulComponent",
                                value: function(t, r, e) {
                                  this.dataFlatten[t * this.zzj2 + r] *= e;
                                }
                              }
                            ]),
                            e
                          );
                        })();
                        !(function(t, r) {
                          (t.prototype.add = function(t) {
                            return "number" == typeof t
                              ? this.addS(t)
                              : this.addM(t);
                          }),
                            (t.prototype.addS = function(t) {
                              for (var r = 0; r < this.zzk2; r++)
                                for (var e = 0; e < this.zzj2; e++)
                                  this.set(r, e, this.get(r, e) + t);
                              return this;
                            }),
                            (t.prototype.addM = function(t) {
                              if (
                                ((t = r.zzL1(t)),
                                this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2)
                              )
                                throw new Error();
                              for (var e = 0; e < this.zzk2; e++)
                                for (var o = 0; o < this.zzj2; o++)
                                  this.set(e, o, this.get(e, o) + t.get(e, o));
                              return this;
                            }),
                            (t.add = function(t, e) {
                              return new r(t).add(e);
                            }),
                            (t.prototype.sub = function(t) {
                              return "number" == typeof t
                                ? this.subS(t)
                                : this.subM(t);
                            }),
                            (t.prototype.subS = function(t) {
                              for (var r = 0; r < this.zzk2; r++)
                                for (var e = 0; e < this.zzj2; e++)
                                  this.set(r, e, this.get(r, e) - t);
                              return this;
                            }),
                            (t.prototype.subM = function(t) {
                              if (
                                ((t = r.zzL1(t)),
                                this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2)
                              )
                                throw new Error();
                              for (var e = 0; e < this.zzk2; e++)
                                for (var o = 0; o < this.zzj2; o++)
                                  this.set(e, o, this.get(e, o) - t.get(e, o));
                              return this;
                            }),
                            (t.sub = function(t, e) {
                              return new r(t).sub(e);
                            }),
                            (t.prototype.subtract = t.prototype.sub),
                            (t.prototype.subtractS = t.prototype.subS),
                            (t.prototype.subtractM = t.prototype.subM),
                            (t.subtract = t.sub),
                            (t.prototype.zzi3 = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, 0);
                            }),
                            (t.prototype.mul = function(t) {
                              return "number" == typeof t
                                ? this.mulS(t)
                                : this.mulM(t);
                            }),
                            (t.prototype.mulS = function(t) {
                              for (var r = 0; r < this.zzk2; r++)
                                for (var e = 0; e < this.zzj2; e++)
                                  this.set(r, e, this.get(r, e) * t);
                              return this;
                            }),
                            (t.prototype.mulM = function(t) {
                              if (
                                ((t = r.zzL1(t)),
                                this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2)
                              )
                                throw new Error();
                              for (var e = 0; e < this.zzk2; e++)
                                for (var o = 0; o < this.zzj2; o++)
                                  this.set(e, o, this.get(e, o) * t.get(e, o));
                              return this;
                            }),
                            (t.mul = function(t, e) {
                              return new r(t).mul(e);
                            }),
                            (t.prototype.multiply = t.prototype.mul),
                            (t.prototype.multiplyS = t.prototype.mulS),
                            (t.prototype.multiplyM = t.prototype.mulM),
                            (t.multiply = t.mul),
                            (t.prototype.div = function(t) {
                              return "number" == typeof t
                                ? this.divS(t)
                                : this.divM(t);
                            }),
                            (t.prototype.divS = function(t) {
                              for (var r = 0; r < this.zzk2; r++)
                                for (var e = 0; e < this.zzj2; e++)
                                  this.set(r, e, this.get(r, e) / t);
                              return this;
                            }),
                            (t.prototype.divM = function(t) {
                              if (
                                ((t = r.zzL1(t)),
                                this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2)
                              )
                                throw new Error();
                              for (var e = 0; e < this.zzk2; e++)
                                for (var o = 0; o < this.zzj2; o++)
                                  this.set(e, o, this.get(e, o) / t.get(e, o));
                              return this;
                            }),
                            (t.div = function(t, e) {
                              return new r(t).div(e);
                            }),
                            (t.prototype.divide = t.prototype.div),
                            (t.prototype.divideS = t.prototype.divS),
                            (t.prototype.divideM = t.prototype.divM),
                            (t.divide = t.div),
                            (t.prototype.mod = function(t) {
                              return "number" == typeof t
                                ? this.modS(t)
                                : this.modM(t);
                            }),
                            (t.prototype.modS = function(t) {
                              for (var r = 0; r < this.zzk2; r++)
                                for (var e = 0; e < this.zzj2; e++)
                                  this.set(r, e, this.get(r, e) % t);
                              return this;
                            }),
                            (t.prototype.modM = function(t) {
                              if (
                                ((t = r.zzL1(t)),
                                this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2)
                              )
                                throw new Error();
                              for (var e = 0; e < this.zzk2; e++)
                                for (var o = 0; o < this.zzj2; o++)
                                  this.set(e, o, this.get(e, o) % t.get(e, o));
                              return this;
                            }),
                            (t.mod = function(t, e) {
                              return new r(t).mod(e);
                            }),
                            (t.prototype.zzO3 = t.prototype.mod),
                            (t.prototype.zzO3S = t.prototype.modS),
                            (t.prototype.zzO3M = t.prototype.modM),
                            (t.zzO3 = t.mod),
                            (t.prototype.and = function(t) {
                              return "number" == typeof t
                                ? this.andS(t)
                                : this.andM(t);
                            }),
                            (t.prototype.andS = function(t) {
                              for (var r = 0; r < this.zzk2; r++)
                                for (var e = 0; e < this.zzj2; e++)
                                  this.set(r, e, this.get(r, e) & t);
                              return this;
                            }),
                            (t.prototype.andM = function(t) {
                              if (
                                ((t = r.zzL1(t)),
                                this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2)
                              )
                                throw new Error();
                              for (var e = 0; e < this.zzk2; e++)
                                for (var o = 0; o < this.zzj2; o++)
                                  this.set(e, o, this.get(e, o) & t.get(e, o));
                              return this;
                            }),
                            (t.and = function(t, e) {
                              return new r(t).and(e);
                            }),
                            (t.prototype.or = function(t) {
                              return "number" == typeof t
                                ? this.orS(t)
                                : this.orM(t);
                            }),
                            (t.prototype.orS = function(t) {
                              for (var r = 0; r < this.zzk2; r++)
                                for (var e = 0; e < this.zzj2; e++)
                                  this.set(r, e, this.get(r, e) | t);
                              return this;
                            }),
                            (t.prototype.orM = function(t) {
                              if (
                                ((t = r.zzL1(t)),
                                this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2)
                              )
                                throw new Error();
                              for (var e = 0; e < this.zzk2; e++)
                                for (var o = 0; o < this.zzj2; o++)
                                  this.set(e, o, this.get(e, o) | t.get(e, o));
                              return this;
                            }),
                            (t.or = function(t, e) {
                              return new r(t).or(e);
                            }),
                            (t.prototype.xor = function(t) {
                              return "number" == typeof t
                                ? this.xorS(t)
                                : this.xorM(t);
                            }),
                            (t.prototype.xorS = function(t) {
                              for (var r = 0; r < this.zzk2; r++)
                                for (var e = 0; e < this.zzj2; e++)
                                  this.set(r, e, this.get(r, e) ^ t);
                              return this;
                            }),
                            (t.prototype.xorM = function(t) {
                              if (
                                ((t = r.zzL1(t)),
                                this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2)
                              )
                                throw new Error();
                              for (var e = 0; e < this.zzk2; e++)
                                for (var o = 0; o < this.zzj2; o++)
                                  this.set(e, o, this.get(e, o) ^ t.get(e, o));
                              return this;
                            }),
                            (t.xor = function(t, e) {
                              return new r(t).xor(e);
                            }),
                            (t.prototype.zzQ3 = function(t) {
                              return "number" == typeof t
                                ? this.zzQ3S(t)
                                : this.zzQ3M(t);
                            }),
                            (t.prototype.zzQ3S = function(t) {
                              for (var r = 0; r < this.zzk2; r++)
                                for (var e = 0; e < this.zzj2; e++)
                                  this.set(r, e, this.get(r, e) << t);
                              return this;
                            }),
                            (t.prototype.zzQ3M = function(t) {
                              if (
                                ((t = r.zzL1(t)),
                                this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2)
                              )
                                throw new Error();
                              for (var e = 0; e < this.zzk2; e++)
                                for (var o = 0; o < this.zzj2; o++)
                                  this.set(e, o, this.get(e, o) << t.get(e, o));
                              return this;
                            }),
                            (t.zzQ3 = function(t, e) {
                              return new r(t).zzQ3(e);
                            }),
                            (t.prototype.zzJ3 = function(t) {
                              return "number" == typeof t
                                ? this.zzJ3S(t)
                                : this.zzJ3M(t);
                            }),
                            (t.prototype.zzJ3S = function(t) {
                              for (var r = 0; r < this.zzk2; r++)
                                for (var e = 0; e < this.zzj2; e++)
                                  this.set(r, e, this.get(r, e) >> t);
                              return this;
                            }),
                            (t.prototype.zzJ3M = function(t) {
                              if (
                                ((t = r.zzL1(t)),
                                this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2)
                              )
                                throw new Error();
                              for (var e = 0; e < this.zzk2; e++)
                                for (var o = 0; o < this.zzj2; o++)
                                  this.set(e, o, this.get(e, o) >> t.get(e, o));
                              return this;
                            }),
                            (t.zzJ3 = function(t, e) {
                              return new r(t).zzJ3(e);
                            }),
                            (t.prototype.zzL3 = function(t) {
                              return "number" == typeof t
                                ? this.zzL3S(t)
                                : this.zzL3M(t);
                            }),
                            (t.prototype.zzL3S = function(t) {
                              for (var r = 0; r < this.zzk2; r++)
                                for (var e = 0; e < this.zzj2; e++)
                                  this.set(r, e, this.get(r, e) >>> t);
                              return this;
                            }),
                            (t.prototype.zzL3M = function(t) {
                              if (
                                ((t = r.zzL1(t)),
                                this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2)
                              )
                                throw new Error();
                              for (var e = 0; e < this.zzk2; e++)
                                for (var o = 0; o < this.zzj2; o++)
                                  this.set(
                                    e,
                                    o,
                                    this.get(e, o) >>> t.get(e, o)
                                  );
                              return this;
                            }),
                            (t.zzL3 = function(t, e) {
                              return new r(t).zzL3(e);
                            }),
                            (t.prototype.zzK3 = t.prototype.zzL3),
                            (t.prototype.zzK3S = t.prototype.zzL3S),
                            (t.prototype.zzK3M = t.prototype.zzL3M),
                            (t.zzK3 = t.zzL3),
                            (t.prototype.not = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, ~this.get(t, r));
                              return this;
                            }),
                            (t.not = function(t) {
                              return new r(t).not();
                            }),
                            (t.prototype.abs = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.abs(this.get(t, r)));
                              return this;
                            }),
                            (t.abs = function(t) {
                              return new r(t).abs();
                            }),
                            (t.prototype.acos = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.acos(this.get(t, r)));
                              return this;
                            }),
                            (t.acos = function(t) {
                              return new r(t).acos();
                            }),
                            (t.prototype.zzM3 = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.zzM3(this.get(t, r)));
                              return this;
                            }),
                            (t.zzM3 = function(t) {
                              return new r(t).zzM3();
                            }),
                            (t.prototype.asin = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.asin(this.get(t, r)));
                              return this;
                            }),
                            (t.asin = function(t) {
                              return new r(t).asin();
                            }),
                            (t.prototype.zzN3 = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.zzN3(this.get(t, r)));
                              return this;
                            }),
                            (t.zzN3 = function(t) {
                              return new r(t).zzN3();
                            }),
                            (t.prototype.atan = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.atan(this.get(t, r)));
                              return this;
                            }),
                            (t.atan = function(t) {
                              return new r(t).atan();
                            }),
                            (t.prototype.atanh = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.atanh(this.get(t, r)));
                              return this;
                            }),
                            (t.atanh = function(t) {
                              return new r(t).atanh();
                            }),
                            (t.prototype.cbrt = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.cbrt(this.get(t, r)));
                              return this;
                            }),
                            (t.cbrt = function(t) {
                              return new r(t).cbrt();
                            }),
                            (t.prototype.ceil = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.ceil(this.get(t, r)));
                              return this;
                            }),
                            (t.ceil = function(t) {
                              return new r(t).ceil();
                            }),
                            (t.prototype.clz32 = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.clz32(this.get(t, r)));
                              return this;
                            }),
                            (t.clz32 = function(t) {
                              return new r(t).clz32();
                            }),
                            (t.prototype.cos = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.cos(this.get(t, r)));
                              return this;
                            }),
                            (t.cos = function(t) {
                              return new r(t).cos();
                            }),
                            (t.prototype.cosh = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.cosh(this.get(t, r)));
                              return this;
                            }),
                            (t.cosh = function(t) {
                              return new r(t).cosh();
                            }),
                            (t.prototype.exp = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.exp(this.get(t, r)));
                              return this;
                            }),
                            (t.exp = function(t) {
                              return new r(t).exp();
                            }),
                            (t.prototype.expm1 = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.expm1(this.get(t, r)));
                              return this;
                            }),
                            (t.expm1 = function(t) {
                              return new r(t).expm1();
                            }),
                            (t.prototype.floor = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.floor(this.get(t, r)));
                              return this;
                            }),
                            (t.floor = function(t) {
                              return new r(t).floor();
                            }),
                            (t.prototype.fround = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.fround(this.get(t, r)));
                              return this;
                            }),
                            (t.fround = function(t) {
                              return new r(t).fround();
                            }),
                            (t.prototype.log = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.log(this.get(t, r)));
                              return this;
                            }),
                            (t.log = function(t) {
                              return new r(t).log();
                            }),
                            (t.prototype.log1p = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.log1p(this.get(t, r)));
                              return this;
                            }),
                            (t.log1p = function(t) {
                              return new r(t).log1p();
                            }),
                            (t.prototype.log10 = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.log10(this.get(t, r)));
                              return this;
                            }),
                            (t.log10 = function(t) {
                              return new r(t).log10();
                            }),
                            (t.prototype.log2 = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.log2(this.get(t, r)));
                              return this;
                            }),
                            (t.log2 = function(t) {
                              return new r(t).log2();
                            }),
                            (t.prototype.round = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.round(this.get(t, r)));
                              return this;
                            }),
                            (t.round = function(t) {
                              return new r(t).round();
                            }),
                            (t.prototype.sign = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.sign(this.get(t, r)));
                              return this;
                            }),
                            (t.sign = function(t) {
                              return new r(t).sign();
                            }),
                            (t.prototype.sin = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.sin(this.get(t, r)));
                              return this;
                            }),
                            (t.sin = function(t) {
                              return new r(t).sin();
                            }),
                            (t.prototype.sinh = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.sinh(this.get(t, r)));
                              return this;
                            }),
                            (t.sinh = function(t) {
                              return new r(t).sinh();
                            }),
                            (t.prototype.sqrt = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.sqrt(this.get(t, r)));
                              return this;
                            }),
                            (t.sqrt = function(t) {
                              return new r(t).sqrt();
                            }),
                            (t.prototype.tan = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.tan(this.get(t, r)));
                              return this;
                            }),
                            (t.tan = function(t) {
                              return new r(t).tan();
                            }),
                            (t.prototype.tanh = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.tanh(this.get(t, r)));
                              return this;
                            }),
                            (t.tanh = function(t) {
                              return new r(t).tanh();
                            }),
                            (t.prototype.trunc = function() {
                              for (var t = 0; t < this.zzk2; t++)
                                for (var r = 0; r < this.zzj2; r++)
                                  this.set(t, r, Math.trunc(this.get(t, r)));
                              return this;
                            }),
                            (t.trunc = function(t) {
                              return new r(t).trunc();
                            }),
                            (t.pow = function(t, e) {
                              return new r(t).pow(e);
                            }),
                            (t.prototype.pow = function(t) {
                              return "number" == typeof t
                                ? this.powS(t)
                                : this.powM(t);
                            }),
                            (t.prototype.powS = function(t) {
                              for (var r = 0; r < this.zzk2; r++)
                                for (var e = 0; e < this.zzj2; e++)
                                  this.set(r, e, Math.pow(this.get(r, e), t));
                              return this;
                            }),
                            (t.prototype.powM = function(t) {
                              if (
                                ((t = r.zzL1(t)),
                                this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2)
                              )
                                throw new Error();
                              for (var e = 0; e < this.zzk2; e++)
                                for (var o = 0; o < this.zzj2; o++)
                                  this.set(
                                    e,
                                    o,
                                    Math.pow(this.get(e, o), t.get(e, o))
                                  );
                              return this;
                            });
                        })(k, R);
                        var E = (function(t) {
                          o(e, k);
                          var r = s(e);
                          function e(t) {
                            var o;
                            u(this, e),
                              ((o = r.call(this)).zzk2 = t.length),
                              (o.zzj2 = t[0].length),
                              (o.dataFlatten = new Float32Array(
                                o.zzk2 * o.zzj2
                              ));
                            for (var n = 0; n < o.zzk2; n++)
                              for (var s = 0; s < o.zzj2; s++)
                                o.dataFlatten[n * o.zzj2 + s] = t[n][s];
                            return o;
                          }
                          return (
                            f(e, [
                              {
                                key: "set",
                                value: function(t, r, e) {
                                  return (
                                    (this.dataFlatten[t * this.zzj2 + r] = e),
                                    this
                                  );
                                }
                              },
                              {
                                key: "get",
                                value: function(t, r) {
                                  return this.dataFlatten[t * this.zzj2 + r];
                                }
                              }
                            ]),
                            e
                          );
                        })();
                        function T(t, r) {
                          var e = 0;
                          return Math.abs(t) > Math.abs(r)
                            ? ((e = r / t), Math.abs(t) * Math.sqrt(1 + e * e))
                            : 0 !== r
                            ? ((e = t / r), Math.abs(r) * Math.sqrt(1 + e * e))
                            : 0;
                        }
                        var A = (function() {
                            function t(r) {
                              u(this, t);
                              var e = (r = E.zzL1(r)).zzk2,
                                o = r.zzj2;
                              (this.QR = r.clone()),
                                (this.X = r.clone()),
                                (this.Rzzo = new Float32Array(o)),
                                (this.m = e),
                                (this.n = o),
                                this.update(r);
                            }
                            return (
                              f(t, [
                                {
                                  key: "update",
                                  value: function(t) {
                                    var r,
                                      e,
                                      o,
                                      n,
                                      s = this.QR,
                                      i = this.m,
                                      a = this.n,
                                      u = this.Rzzo;
                                    for (s.copy(t), o = 0; o < a; o++) {
                                      var h = 0;
                                      for (r = o; r < i; r++)
                                        h = T(h, s.get(r, o));
                                      if (0 !== h) {
                                        for (
                                          s.get(o, o) < 0 && (h = -h), r = o;
                                          r < i;
                                          r++
                                        )
                                          s.set(r, o, s.get(r, o) / h);
                                        for (
                                          s.set(o, o, s.get(o, o) + 1),
                                            e = o + 1;
                                          e < a;
                                          e++
                                        ) {
                                          for (n = 0, r = o; r < i; r++)
                                            n += s.get(r, o) * s.get(r, e);
                                          for (
                                            n = -n / s.get(o, o), r = o;
                                            r < i;
                                            r++
                                          )
                                            s.set(
                                              r,
                                              e,
                                              s.get(r, e) + n * s.get(r, o)
                                            );
                                        }
                                      }
                                      u[o] = -h;
                                    }
                                  }
                                },
                                {
                                  key: "solve",
                                  value: function(t) {
                                    var r = this.QR,
                                      e = r.zzk2,
                                      o = t.zzj2,
                                      n = this.X;
                                    n.copy(t);
                                    var s,
                                      i,
                                      a,
                                      u,
                                      h = r.zzj2;
                                    for (a = 0; a < h; a++)
                                      for (i = 0; i < o; i++) {
                                        for (u = 0, s = a; s < e; s++)
                                          u += r.get(s, a) * n.get(s, i);
                                        for (
                                          u = -u / r.get(a, a), s = a;
                                          s < e;
                                          s++
                                        )
                                          n.set(
                                            s,
                                            i,
                                            n.get(s, i) + u * r.get(s, a)
                                          );
                                      }
                                    for (a = h - 1; a >= 0; a--) {
                                      for (i = 0; i < o; i++)
                                        n.set(a, i, n.get(a, i) / this.Rzzo[a]);
                                      for (s = 0; s < a; s++)
                                        for (i = 0; i < o; i++)
                                          n.set(
                                            s,
                                            i,
                                            n.get(s, i) -
                                              n.get(a, i) * r.get(s, a)
                                          );
                                    }
                                    return n.zz31(0, h - 1, 0, o - 1);
                                  }
                                },
                                {
                                  key: "zzY1",
                                  value: function() {
                                    for (
                                      var t = this.QR.zzj2, r = 0;
                                      r < t;
                                      r++
                                    )
                                      if (0 === this.Rzzo[r]) return !1;
                                    return !0;
                                  }
                                },
                                {
                                  key: "zzW1",
                                  get: function() {
                                    var t,
                                      r,
                                      e = this.QR,
                                      o = e.zzj2,
                                      n = new R(o, o);
                                    for (t = 0; t < o; t++)
                                      for (r = 0; r < o; r++)
                                        t < r
                                          ? n.set(t, r, e.get(t, r))
                                          : t === r
                                          ? n.set(t, r, this.Rzzo[t])
                                          : n.set(t, r, 0);
                                    return n;
                                  }
                                },
                                {
                                  key: "zzZ1",
                                  get: function() {
                                    var t,
                                      r,
                                      e,
                                      o,
                                      n = this.QR,
                                      s = n.zzk2,
                                      i = n.zzj2,
                                      a = new R(s, i);
                                    for (e = i - 1; e >= 0; e--) {
                                      for (t = 0; t < s; t++) a.set(t, e, 0);
                                      for (a.set(e, e, 1), r = e; r < i; r++)
                                        if (0 !== n.get(e, e)) {
                                          for (o = 0, t = e; t < s; t++)
                                            o += n.get(t, e) * a.get(t, r);
                                          for (
                                            o = -o / n.get(e, e), t = e;
                                            t < s;
                                            t++
                                          )
                                            a.set(
                                              t,
                                              r,
                                              a.get(t, r) + o * n.get(t, e)
                                            );
                                        }
                                    }
                                    return a;
                                  }
                                }
                              ]),
                              t
                            );
                          })(),
                          C = (function() {
                            function t(r, e) {
                              u(this, t);
                              var o = r.zzk2,
                                n = r.zzj2,
                                s = Boolean(e.zzx3),
                                i = Boolean(e.zzZ2),
                                a = r.clone(),
                                h = Math.min(o + 1, n),
                                f = Math.min(o, n),
                                c = new Float32Array(h),
                                l = new R(o, f),
                                v = new R(n, n),
                                m = new Float32Array(n),
                                g = new Float32Array(o),
                                w = new Float32Array(h),
                                p = R.zzG1(h, h),
                                y = R.zzG1(v.zzk2, l.zzk2),
                                d = new R(v.zzk2, h),
                                b = new R(v.zzk2, l.zzk2);
                              (this.m = o),
                                (this.n = n),
                                (this.ni = h),
                                (this.nu = f),
                                (this.s = c),
                                (this.si = w),
                                (this.work = g),
                                (this.e = m),
                                (this.U = l),
                                (this.V = v),
                                (this.wantu = s),
                                (this.wantv = i),
                                (this.a = a),
                                (this.Ls = p),
                                (this.VLU = y),
                                (this.X = d),
                                (this.Y = b),
                                this.compute();
                            }
                            return (
                              f(t, [
                                {
                                  key: "zz24",
                                  value: function(t) {
                                    this.a.copy(t),
                                      this.U.reset(),
                                      this.V.reset(),
                                      this.compute();
                                  }
                                },
                                {
                                  key: "compute",
                                  value: function() {
                                    for (
                                      var t = this.m,
                                        r = this.n,
                                        e = this.ni,
                                        o = this.nu,
                                        n = this.s,
                                        s = this.si,
                                        i = this.work,
                                        a = this.e,
                                        u = this.U,
                                        h = this.V,
                                        f = this.wantu,
                                        c = this.wantv,
                                        l = this.a,
                                        v = 0;
                                      v < e;
                                      v++
                                    )
                                      s[v] = v;
                                    for (
                                      var m = Math.min(t - 1, r),
                                        g = Math.max(0, Math.min(r - 2, t)),
                                        w = Math.max(m, g),
                                        p = 0;
                                      p < w;
                                      p++
                                    ) {
                                      if (p < m) {
                                        n[p] = 0;
                                        for (var y = p; y < t; y++)
                                          n[p] = T(n[p], l.get(y, p));
                                        if (0 !== n[p]) {
                                          l.get(p, p) < 0 && (n[p] = -n[p]);
                                          for (var d = p; d < t; d++)
                                            l.set(d, p, l.get(d, p) / n[p]);
                                          l.set(p, p, l.get(p, p) + 1);
                                        }
                                        n[p] = -n[p];
                                      }
                                      for (var b = p + 1; b < r; b++) {
                                        if (p < m && 0 !== n[p]) {
                                          for (var M = 0, x = p; x < t; x++)
                                            M += l.get(x, p) * l.get(x, b);
                                          M = -M / l.get(p, p);
                                          for (var k = p; k < t; k++)
                                            l.set(
                                              k,
                                              b,
                                              l.get(k, b) + M * l.get(k, p)
                                            );
                                        }
                                        a[b] = l.get(p, b);
                                      }
                                      if (f && p < m)
                                        for (var S = p; S < t; S++)
                                          u.set(S, p, l.get(S, p));
                                      if (p < g) {
                                        a[p] = 0;
                                        for (var R = p + 1; R < r; R++)
                                          a[p] = T(a[p], a[R]);
                                        if (0 !== a[p]) {
                                          a[p + 1] < 0 && (a[p] = 0 - a[p]);
                                          for (var E = p + 1; E < r; E++)
                                            a[E] /= a[p];
                                          a[p + 1] += 1;
                                        }
                                        if (
                                          ((a[p] = -a[p]),
                                          p + 1 < t && 0 !== a[p])
                                        ) {
                                          for (var A = p + 1; A < t; A++)
                                            i[A] = 0;
                                          for (var C = p + 1; C < t; C++)
                                            for (var I = p + 1; I < r; I++)
                                              i[C] += a[I] * l.get(C, I);
                                          for (var D = p + 1; D < r; D++)
                                            for (
                                              var N = -a[D] / a[p + 1],
                                                O = p + 1;
                                              O < t;
                                              O++
                                            )
                                              l.set(
                                                O,
                                                D,
                                                l.get(O, D) + N * i[O]
                                              );
                                        }
                                        if (c)
                                          for (var F = p + 1; F < r; F++)
                                            h.set(F, p, a[F]);
                                      }
                                    }
                                    var P = Math.min(r, t + 1);
                                    if (
                                      (m < r && (n[m] = l.get(m, m)),
                                      t < P && (n[P - 1] = 0),
                                      g + 1 < P && (a[g] = l.get(g, P - 1)),
                                      (a[P - 1] = 0),
                                      f)
                                    ) {
                                      for (var j = m; j < o; j++) {
                                        for (var q = 0; q < t; q++)
                                          u.set(q, j, 0);
                                        u.set(j, j, 1);
                                      }
                                      for (var V = m - 1; V >= 0; V--)
                                        if (0 !== n[V]) {
                                          for (var z = V + 1; z < o; z++) {
                                            for (var Q = 0, L = V; L < t; L++)
                                              Q += u.get(L, V) * u.get(L, z);
                                            Q = -Q / u.get(V, V);
                                            for (var B = V; B < t; B++)
                                              u.set(
                                                B,
                                                z,
                                                u.get(B, z) + Q * u.get(B, V)
                                              );
                                          }
                                          for (var U = V; U < t; U++)
                                            u.set(U, V, -u.get(U, V));
                                          u.set(V, V, 1 + u.get(V, V));
                                          for (var _ = 0; _ < V - 1; _++)
                                            u.set(_, V, 0);
                                        } else {
                                          for (var G = 0; G < t; G++)
                                            u.set(G, V, 0);
                                          u.set(V, V, 1);
                                        }
                                    }
                                    if (c)
                                      for (var W = r - 1; W >= 0; W--) {
                                        if (W < g && 0 !== a[W])
                                          for (var X = W + 1; X < r; X++) {
                                            for (
                                              var Y = 0, J = W + 1;
                                              J < r;
                                              J++
                                            )
                                              Y += h.get(J, W) * h.get(J, X);
                                            Y = -Y / h.get(W + 1, W);
                                            for (var K = W + 1; K < r; K++)
                                              h.set(
                                                K,
                                                X,
                                                h.get(K, X) + Y * h.get(K, W)
                                              );
                                          }
                                        for (var H = 0; H < r; H++)
                                          h.set(H, W, 0);
                                        h.set(W, W, 1);
                                      }
                                    for (
                                      var Z = P - 1, $ = Number.EPSILON;
                                      P > 0;

                                    ) {
                                      var tt = void 0,
                                        rt = void 0;
                                      for (
                                        tt = P - 2;
                                        tt >= -1 && -1 !== tt;
                                        tt--
                                      ) {
                                        var et =
                                          Number.MIN_VALUE +
                                          $ *
                                            Math.abs(
                                              n[tt] + Math.abs(n[tt + 1])
                                            );
                                        if (
                                          Math.abs(a[tt]) <= et ||
                                          Number.isNaN(a[tt])
                                        ) {
                                          a[tt] = 0;
                                          break;
                                        }
                                      }
                                      if (tt === P - 2) rt = 4;
                                      else {
                                        var ot = void 0;
                                        for (
                                          ot = P - 1;
                                          ot >= tt && ot !== tt;
                                          ot--
                                        ) {
                                          var nt =
                                            (ot !== P ? Math.abs(a[ot]) : 0) +
                                            (ot !== tt + 1
                                              ? Math.abs(a[ot - 1])
                                              : 0);
                                          if (Math.abs(n[ot]) <= $ * nt) {
                                            n[ot] = 0;
                                            break;
                                          }
                                        }
                                        ot === tt
                                          ? (rt = 3)
                                          : ot === P - 1
                                          ? (rt = 1)
                                          : ((rt = 2), (tt = ot));
                                      }
                                      switch ((tt++, rt)) {
                                        case 1:
                                          var st = a[P - 2];
                                          a[P - 2] = 0;
                                          for (var it = P - 2; it >= tt; it--) {
                                            var at = T(n[it], st),
                                              ut = n[it] / at,
                                              ht = st / at;
                                            if (
                                              ((n[it] = at),
                                              it !== tt &&
                                                ((st = -ht * a[it - 1]),
                                                (a[it - 1] = ut * a[it - 1])),
                                              c)
                                            )
                                              for (var ft = 0; ft < r; ft++)
                                                (at =
                                                  ut * h.get(ft, it) +
                                                  ht * h.get(ft, P - 1)),
                                                  h.set(
                                                    ft,
                                                    P - 1,
                                                    -ht * h.get(ft, it) +
                                                      ut * h.get(ft, P - 1)
                                                  ),
                                                  h.set(ft, it, at);
                                          }
                                          break;
                                        case 2:
                                          var ct = a[tt - 1];
                                          a[tt - 1] = 0;
                                          for (var lt = tt; lt < P; lt++) {
                                            var vt = T(n[lt], ct),
                                              mt = n[lt] / vt,
                                              gt = ct / vt;
                                            if (
                                              ((n[lt] = vt),
                                              (ct = -gt * a[lt]),
                                              (a[lt] = mt * a[lt]),
                                              f)
                                            )
                                              for (var wt = 0; wt < t; wt++)
                                                (vt =
                                                  mt * u.get(wt, lt) +
                                                  gt * u.get(wt, tt - 1)),
                                                  u.set(
                                                    wt,
                                                    tt - 1,
                                                    -gt * u.get(wt, lt) +
                                                      mt * u.get(wt, tt - 1)
                                                  ),
                                                  u.set(wt, lt, vt);
                                          }
                                          break;
                                        case 3:
                                          var pt = Math.max(
                                              Math.abs(n[P - 1]),
                                              Math.abs(n[P - 2]),
                                              Math.abs(a[P - 2]),
                                              Math.abs(n[tt]),
                                              Math.abs(a[tt])
                                            ),
                                            yt = n[P - 1] / pt,
                                            dt = n[P - 2] / pt,
                                            bt = a[P - 2] / pt,
                                            Mt = n[tt] / pt,
                                            xt = a[tt] / pt,
                                            kt =
                                              ((dt + yt) * (dt - yt) +
                                                bt * bt) /
                                              2,
                                            St = yt * bt * (yt * bt),
                                            Rt = 0;
                                          (0 === kt && 0 === St) ||
                                            (Rt =
                                              St /
                                              (kt +
                                                (Rt =
                                                  kt < 0
                                                    ? 0 -
                                                      Math.sqrt(kt * kt + St)
                                                    : Math.sqrt(
                                                        kt * kt + St
                                                      ))));
                                          for (
                                            var Et = (Mt + yt) * (Mt - yt) + Rt,
                                              Tt = Mt * xt,
                                              At = tt;
                                            At < P - 1;
                                            At++
                                          ) {
                                            var Ct = T(Et, Tt);
                                            0 === Ct && (Ct = Number.MIN_VALUE);
                                            var It = Et / Ct,
                                              Dt = Tt / Ct;
                                            if (
                                              (At !== tt && (a[At - 1] = Ct),
                                              (Et = It * n[At] + Dt * a[At]),
                                              (a[At] = It * a[At] - Dt * n[At]),
                                              (Tt = Dt * n[At + 1]),
                                              (n[At + 1] = It * n[At + 1]),
                                              c)
                                            )
                                              for (var Nt = 0; Nt < r; Nt++)
                                                (Ct =
                                                  It * h.get(Nt, At) +
                                                  Dt * h.get(Nt, At + 1)),
                                                  h.set(
                                                    Nt,
                                                    At + 1,
                                                    -Dt * h.get(Nt, At) +
                                                      It * h.get(Nt, At + 1)
                                                  ),
                                                  h.set(Nt, At, Ct);
                                            if (
                                              (0 === (Ct = T(Et, Tt)) &&
                                                (Ct = Number.MIN_VALUE),
                                              (It = Et / Ct),
                                              (Dt = Tt / Ct),
                                              (n[At] = Ct),
                                              (Et =
                                                It * a[At] + Dt * n[At + 1]),
                                              (n[At + 1] =
                                                -Dt * a[At] + It * n[At + 1]),
                                              (Tt = Dt * a[At + 1]),
                                              (a[At + 1] = It * a[At + 1]),
                                              f && At < t - 1)
                                            )
                                              for (var Ot = 0; Ot < t; Ot++)
                                                (Ct =
                                                  It * u.get(Ot, At) +
                                                  Dt * u.get(Ot, At + 1)),
                                                  u.set(
                                                    Ot,
                                                    At + 1,
                                                    -Dt * u.get(Ot, At) +
                                                      It * u.get(Ot, At + 1)
                                                  ),
                                                  u.set(Ot, At, Ct);
                                          }
                                          a[P - 2] = Et;
                                          break;
                                        case 4:
                                          if (
                                            n[tt] <= 0 &&
                                            ((n[tt] = n[tt] < 0 ? -n[tt] : 0),
                                            c)
                                          )
                                            for (var Ft = 0; Ft <= Z; Ft++)
                                              h.set(Ft, tt, -h.get(Ft, tt));
                                          for (
                                            ;
                                            tt < Z && !(n[tt] >= n[tt + 1]);

                                          ) {
                                            var Pt = n[tt];
                                            if (
                                              ((n[tt] = n[tt + 1]),
                                              (n[tt + 1] = Pt),
                                              c && tt < r - 1)
                                            )
                                              for (var jt = 0; jt < r; jt++)
                                                (Pt = h.get(jt, tt + 1)),
                                                  h.set(
                                                    jt,
                                                    tt + 1,
                                                    h.get(jt, tt)
                                                  ),
                                                  h.set(jt, tt, Pt);
                                            if (f && tt < t - 1)
                                              for (var qt = 0; qt < t; qt++)
                                                (Pt = u.get(qt, tt + 1)),
                                                  u.set(
                                                    qt,
                                                    tt + 1,
                                                    u.get(qt, tt)
                                                  ),
                                                  u.set(qt, tt, Pt);
                                            tt++;
                                          }
                                          P--;
                                      }
                                    }
                                  }
                                },
                                {
                                  key: "solve",
                                  value: function(t) {
                                    for (
                                      var r = t,
                                        e = this.zzf1,
                                        o = this.s.length,
                                        n = this.Ls,
                                        s = this.VLU,
                                        i = 0;
                                      i < o;
                                      i++
                                    )
                                      Math.abs(this.s[i]) <= e
                                        ? n.set(i, i, 0)
                                        : n.set(i, i, 1 / this.s[i]);
                                    for (
                                      var a = this.U,
                                        u = this.zzh1,
                                        h = u.zzr(n),
                                        f = u.zzk2,
                                        c = a.zzk2,
                                        l = 0;
                                      l < f;
                                      l++
                                    )
                                      for (var v = 0; v < c; v++) {
                                        for (var m = 0, g = 0; g < o; g++)
                                          m += h.get(l, g) * a.get(v, g);
                                        s.set(l, v, m);
                                      }
                                    return s.zzr(r);
                                  }
                                },
                                {
                                  key: "zza1",
                                  value: function(t) {
                                    return this.solve(R.zzo(t));
                                  }
                                },
                                {
                                  key: "inverse",
                                  value: function() {
                                    for (
                                      var t = this.V,
                                        r = this.zzf1,
                                        e = t.zzk2,
                                        o = t.zzj2,
                                        n = this.X,
                                        s = this.Y,
                                        i = 0;
                                      i < e;
                                      i++
                                    )
                                      for (var a = 0; a < o; a++)
                                        Math.abs(this.s[a]) > r &&
                                          n.set(i, a, t.get(i, a) / this.s[a]);
                                    for (
                                      var u = this.U,
                                        h = u.zzk2,
                                        f = u.zzj2,
                                        c = 0;
                                      c < e;
                                      c++
                                    )
                                      for (var l = 0; l < h; l++) {
                                        for (var v = 0, m = 0; m < f; m++)
                                          v += n.get(c, m) * u.get(l, m);
                                        s.set(c, l, v);
                                      }
                                    return s;
                                  }
                                },
                                {
                                  key: "zzb1",
                                  get: function() {
                                    return (
                                      this.s[0] /
                                      this.s[Math.min(this.m, this.n) - 1]
                                    );
                                  }
                                },
                                {
                                  key: "zzp2",
                                  get: function() {
                                    return this.s[0];
                                  }
                                },
                                {
                                  key: "zzd1",
                                  get: function() {
                                    for (
                                      var t =
                                          Math.max(this.m, this.n) *
                                          this.s[0] *
                                          Number.EPSILON,
                                        r = 0,
                                        e = this.s,
                                        o = 0,
                                        n = e.length;
                                      o < n;
                                      o++
                                    )
                                      e[o] > t && r++;
                                    return r;
                                  }
                                },
                                {
                                  key: "zzoonal",
                                  get: function() {
                                    return Array.from(this.s);
                                  }
                                },
                                {
                                  key: "zzf1",
                                  get: function() {
                                    return (
                                      (Number.EPSILON / 2) *
                                      Math.max(this.m, this.n) *
                                      this.s[0]
                                    );
                                  }
                                },
                                {
                                  key: "zzg1",
                                  get: function() {
                                    return this.U;
                                  }
                                },
                                {
                                  key: "zzh1",
                                  get: function() {
                                    return this.V;
                                  }
                                },
                                {
                                  key: "zzoonalMatrix",
                                  get: function() {
                                    return R.zzo(this.s);
                                  }
                                }
                              ]),
                              t
                            );
                          })(),
                          I = [],
                          D = function(t) {
                            var r =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : { zzj3: -1 },
                              e = r.zzj3;
                            if (-1 !== e && I[e]) {
                              var o = I[e];
                              return o.zz24(t), o;
                            }
                            var n = new C(
                              t,
                              Object.assign({ zzx3: !0, zzZ2: !0 }, r)
                            );
                            return -1 !== e && (I[e] = n), n;
                          };
                        function N(t, r) {
                          var e =
                              arguments.length > 2 &&
                              void 0 !== arguments[2] &&
                              arguments[2],
                            o = arguments.length > 3 ? arguments[3] : void 0;
                          return e
                            ? D(t, { zzj3: o }).solve(r)
                            : new A(t).solve(r);
                        }
                        var O = (function(t) {
                            o(e, k);
                            var r = s(e);
                            function e(t, o, n) {
                              var s;
                              return (
                                u(this, e),
                                ((s = r.call(this)).matrix = t),
                                (s.zzk2 = o),
                                (s.zzj2 = n),
                                s
                              );
                            }
                            return e;
                          })(),
                          F = (function(t) {
                            o(e, O);
                            var r = s(e);
                            function e(t, o, n) {
                              var s;
                              u(this, e);
                              var i = y(t, o, n);
                              return (
                                ((s = r.call(
                                  this,
                                  t,
                                  i.row.length,
                                  i.zz23.length
                                )).zzy3 = i.row),
                                (s.zzl2 = i.zz23),
                                s
                              );
                            }
                            return (
                              f(e, [
                                {
                                  key: "set",
                                  value: function(t, r, e) {
                                    return (
                                      this.matrix.set(
                                        this.zzy3[t],
                                        this.zzl2[r],
                                        e
                                      ),
                                      this
                                    );
                                  }
                                },
                                {
                                  key: "get",
                                  value: function(t, r) {
                                    return this.matrix.get(
                                      this.zzy3[t],
                                      this.zzl2[r]
                                    );
                                  }
                                }
                              ]),
                              e
                            );
                          })();
                        (t.Matrix = R),
                          (t.QR = A),
                          (t.zzT2 = A),
                          (t.zz92 = D),
                          (t.default = R),
                          (t.zzU1 = function t(r) {
                            if (0 === r.zzj2) return 1;
                            var e, o, n, s, i, a;
                            if (2 === r.zzj2)
                              return (
                                (e = r.get(0, 0)),
                                (o = r.get(0, 1)),
                                (n = r.get(1, 0)),
                                e * r.get(1, 1) - o * n
                              );
                            if (3 === r.zzj2)
                              return (
                                (s = new F(r, [1, 2], [1, 2])),
                                (i = new F(r, [1, 2], [0, 2])),
                                (a = new F(r, [1, 2], [0, 1])),
                                (e = r.get(0, 0)),
                                (o = r.get(0, 1)),
                                (n = r.get(0, 2)),
                                e * t(s) - o * t(i) + n * t(a)
                              );
                            throw new Error();
                          }),
                          (t.inverse2 = function(t) {
                            var r =
                                arguments.length > 1 &&
                                void 0 !== arguments[1] &&
                                arguments[1],
                              e = arguments.length > 2 ? arguments[2] : void 0;
                            return r
                              ? D(t, { zzj3: e }).inverse()
                              : N(t, R.zzJ1(t.zzk2));
                          }),
                          (t.zzp3 = N),
                          Object.defineProperty(t, "zzB", { value: !0 });
                      }),
                      "object" == (void 0 === e ? "undefined" : c(e)) &&
                      void 0 !== r
                        ? v(e)
                        : v(
                            ((l = falseThis
                              ? globalThis
                              : l || self).mlMatrix = {})
                          );
                  },
                  {}
                ]
              },
              {},
              [2]
            )(2);
          });
          qb = window.zyp;
          a.callbackReady && (U.Ka = a.callbackReady);
          a.callbackTrack && (U.Kb = a.callbackTrack);
          "undefined" !== typeof a.animateDelay && (U.qa = a.animateDelay);
          "undefined" !== typeof a.NNCPath && (U.Fb = a.NNCPath);
          "undefined" !== typeof a.NN && (U.Ra = a.NN);
          "undefined" !== typeof a.maxFacesDetected &&
            (O.o = Math.max(1, a.maxFacesDetected));
          "undefined" !== typeof a.followZRot &&
            (U.ta = a.followZRot ? !0 : !1);
          "undefined" !== typeof a.isTrackingEnabled &&
            (U.lc = a.isTrackingEnabled ? !0 : !1);
          if (O.o > fa.vf) return Oa("MAXFACES_TOOHIGH"), !1;
          if (a.canvas) U.Z = a.canvas;
          else {
            if (!a.canvasId) return Oa("NO_CANVASID"), !1;
            U.Z = document.getElementById(a.canvasId);
            if (!U.Z) return Oa("INVALID_CANVASID"), !1;
          }
          Q.B = U.Z.width;
          Q.G = U.Z.height;
          if (!Q.B || !Q.G) return Oa("INVALID_CANVASDIMENSIONS"), !1;
          Q.Ib = Q.B / Q.G;
          Ma.v({
            Id: a.isKeepRunningOnWinFocusLost || !1,
            Vc: a.GPUThermalThrottlingDetectionEnabled || !1,
            ha: U.qa
          });
          sa.v({ uc: 0, n: fa.Gb[1] - fa.Gb[0] + 1, Pd: fa.Gb[0] });
          a.scanSettings &&
            (Object.assign(pa, a.scanSettings),
            0 !== pa.nDetectsPerLoop ? sa.Fc(pa.nDetectsPerLoop) : sa.Qc());
          a.stabilizationSettings && Object.assign(xa, a.stabilizationSettings);
          var d = 0;
          a.videoSettings && a.videoSettings.videoElement
            ? bb(a.videoSettings.videoElement, b)
            : null === a.videoSettings
            ? b()
            : (a.videoSettings && Object.assign(ta, a.videoSettings),
              Hb(a.onWebcamAsk, a.onWebcamGet, function(e) {
                bb(e, b);
              }));
          Bb(function(e) {
            if (!Xb()) return !1;
            B.$c([
              {
                id: "s56",
                name: "_",
                ya:
                  "attribute vec2 a0;uniform mat2 u39;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=vec2(.5,.5)+u39*a0*vec2(1.,-1.);}",
                Ta: ["a0"],
                Ha: [2],
                h:
                  "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",
                i: ["u1", "u39"],
                precision: "lowp"
              },
              {
                id: "s55",
                name: "_",
                h:
                  "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",
                ya:
                  "attribute vec2 a0;uniform sampler2D u40;uniform mat2 u39;uniform vec2 u41;uniform float u42,u38,u43,u44;varying vec2 vv0;void main(){vec2 f=a0;vec4 a=texture2D(u40,vec2(u38,u42));vec2 g=a.gb,b=a.a*u41;b.x*=u44;float c=cos(u43),d=sin(u43);vec2 h=mat2(c,d,-d,c)*f,i=g+.5*h*b;vv0=.5+2.*u39*(i-.5),gl_Position=vec4(a0,0.,1.);}",
                Ta: ["a0"],
                Ha: [2],
                i: "u1 u40 u41 u42 u38 u43 u44 u39".split(" "),
                precision: "lowp"
              },
              {
                id: "s54",
                name: "_",
                h:
                  "uniform sampler2D u45,u40;uniform vec3 u46,u47;uniform float u48,u49,u42,u38,u50,u51,u43,u52;const vec4 e=vec4(.25,.25,.25,.25);void main(){float b=(u51-.5)/u51;vec4 f=texture2D(u45,vec2(3.5/u51,b));bool g=dot(f,e)>u49;vec4 a=texture2D(u40,vec2(u38,u42));g?a.r=2.:a.r>u48?a.r=0.:a.r>1.9?a.r+=1.:0.,a.r*=u50;if(a.r<.9)a=vec4(1.,u46);else{a.r*=step(1.9,a.r);float h=dot(e,texture2D(u45,vec2(.5/u51,b))),i=dot(e,texture2D(u45,vec2(1.5/u51,b))),j=dot(e,texture2D(u45,vec2(2.5/u51,b))),c=cos(u43),d=sin(u43);vec2 k=mat2(c,d*u52,-d/u52,c)*vec2(h,i);a.gba+=vec3(k,j)*u47*a.a;}gl_FragColor=a;}",
                ya:
                  "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",
                i: "u45 u40 u46 u48 u47 u50 u49 u42 u38 u51 u43 u52".split(" ")
              },
              {
                id: "s57",
                name: "_",
                ya:
                  "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",
                h:
                  "uniform sampler2D u45;uniform float u51,u50;const vec4 e=vec4(.25,.25,.25,.25);void main(){float a=(u51-.5)/u51,b=dot(e,texture2D(u45,vec2(5.5/u51,a))),c=dot(e,texture2D(u45,vec2(6.5/u51,a))),d=dot(e,texture2D(u45,vec2(7.5/u51,a))),f=dot(e,texture2D(u45,vec2(3.5/u51,a)));vec3 g=vec3(b,c,d);gl_FragColor=vec4(g,f*u50);}",
                i: ["u45", "u51", "u50"]
              },
              {
                id: "s58",
                name: "_",
                ya:
                  "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",
                h:
                  "uniform sampler2D u45;uniform float u51;const vec4 e=vec4(.25,.25,.25,.25),h=vec4(.5,.5,.5,.5);vec2 f(float a){float b=floor(a/u51),c=a-b*u51;return vec2(c,u51-.5-b)/u51;}vec2 g(float a){vec2 b=f(a*2.),c=f(a*2.+1.);float d=dot(e,texture2D(u45,b)),i=dot(e,texture2D(u45,c));return vec2(d,i);}void main(){float a=2.*gl_FragCoord.x;vec2 b=g(a-1.),c=g(a);gl_FragColor=h+.5*vec4(b,c)/1.2;}",
                i: ["u45", "u51"]
              },
              {
                id: "s53",
                name: "_",
                h:
                  "uniform sampler2D u40,u53;uniform vec2 u54;uniform float u55,u38;varying vec2 vv0;void main(){float f=step(.5,mod(gl_FragCoord.y+1.5,2.)),a=step(u38,vv0.x);vec2 d=vv0+u54;vec4 b=mix(texture2D(u53,d),texture2D(u40,d),vec4(1.,a,a,a));b.a*=mix(u55,1.,a);vec4 g=floor(255.*b),h=255.*fract(255.*b),c=mix(g,h,f)/255.;c.x=mix(step(b.x,1.5),c.x,a),gl_FragColor=c;}",
                i: ["u40", "u53", "u55", "u54", "u38"]
              }
            ]);
            Eb(e);
            b();
          });
          return !0;
        },
        update: function(a) {
          if (!vb) return Promise.reject("NOT_READY");
          a.scanSettings && gb.set_scanSettings(a.scanSettings);
          a.stabilizationSettings &&
            gb.set_stabilizationSettings(a.stabilizationSettings);
          var b = Promise.resolve();
          if (a.NNCPath || a.NN) {
            jb();
            ea = da.rc;
            Ca && Ca.m();
            Ca = null;
            for (b = 0; b < O.o; ++b)
              (qa[b].detected = 0), (qa.isDetected = !1), (Ra[b].Va = 0);
            a.NNCPath ? (U.Fb = a.NNCPath) : a.NN && (U.Ra = a.NN);
            b = new Promise(function(d) {
              Bb(function(e) {
                Eb(e);
                ab();
                d();
              });
            });
          }
          return b;
        },
        destroy: function() {
          if (fb) return Promise.reject("ALREADY_DESTROYING");
          $a = null;
          vb = !1;
          fb = !0;
          Ma.m();
          return new Promise(function(a) {
            gb.toggle_pause(!0, !0)
              .finally(function() {
                Ca && Ca.m();
                Na.m();
                Ca = kb = qa = Ra = null;
                Q.ua = null;
                Z.xa = null;
                Z.Bb = null;
                A.I = null;
                ea = da.Oa;
                fb = !1;
                a();
              })
              .catch(function() {});
          });
        },
        toggle_pause: function(a, b) {
          if (-1 === [da.play, da.pause].indexOf(ea))
            return Promise.reject("NOT_READY");
          var d = null;
          d = A.jb
            ? Promise.resolve()
            : b
            ? X.ie(A.element, !a, A.La)
            : Promise.resolve();
          a
            ? jb()
            : d.then(function() {
                ab();
              });
          return d;
        },
        toggle_tracking: function(a) {
          -1 !== [da.play, da.pause].indexOf(ea) && (U.lc = a);
        },
        reset_GLState: ib,
        update_videoSettings: function(a) {
          if (ea === da.rc || ea === ea.Oa) return Promise.reject("NOT_READY");
          jb();
          return null === a && null === A.element
            ? Promise.resolve(null)
            : new Promise(function(b, d) {
                X.ie(A.element, !1, A.La)
                  .then(function() {
                    null === a
                      ? b(null)
                      : (Object.assign(ta, a),
                        Hb(null, null, function(e) {
                          bb(e, function() {
                            A.I.Mf(e);
                            Sa();
                            Ua();
                            ab();
                            b(A.element);
                          });
                        }));
                  })
                  .catch(d);
              });
        },
        set_animateDelay: function(a) {
          U.qa = a;
          Ma.update({ ha: U.qa });
        },
        resize: function() {
          if (!(A && A.element && U && U.Z)) return !1;
          var a = U.Z.width,
            b = U.Z.height;
          if (!pb() && a === Q.B && b === Q.G) return !1;
          Q.B = a;
          Q.G = b;
          Q.Ib = Q.B / Q.G;
          B.T();
          ob();
          nb();
          Sa();
          Ua();
          return !0;
        },
        set_inputTexture: function(a, b, d) {
          A.J[0] = b;
          A.J[1] = d;
          A.I = Y.instance({ width: b, height: d, dc: a });
          A.kb = !0;
          Sa();
          ib();
          Ua();
        },
        reset_inputTexture: function() {
          A.kb = !1;
          A.I = A.Jc;
          pb();
          Sa();
          Ua();
        },
        render_video: function() {
          wa.S();
          B.set("s56");
          c.viewport(0, 0, Q.B, Q.G);
          A.I.g(0);
          V.l(!0, !0);
        },
        get_videoDevices: function(a) {
          return X.df(a);
        },
        get_videoUVScaleMat2: function() {
          return A.C;
        },
        is_winFocus: function() {
          return Ma.rf();
        },
        set_scanSettings: function(a) {
          Object.assign(pa, a);
          0 !== pa.nDetectsPerLoop ? sa.Fc(pa.nDetectsPerLoop) : sa.Qc();
          ob();
          nb();
        },
        set_stabilizationSettings: function(a) {
          Object.assign(xa, a);
        },
        update_videoElement: function(a, b) {
          bb(a, function() {
            Gb();
            Sa();
            b && b(A.I.get());
          });
        },
        capture_image: function(a) {
          return Na.Se(a);
        },
        get_LMLabels: function() {
          return ma.labels;
        },
        get_widthPx: function() {
          return Q ? Q.B : -1;
        },
        get_heightPx: function() {
          return Q ? Q.G : -1;
        },
        compute_pose: function(a, b, d, e) {
          null === $a &&
            ((La[0] = d),
            (La[1] = e),
            ($a = new qb.zypSolver({ cameraFocals: La, zyp15: fa.Qf })));
          if (La[0] !== d || La[1] !== e)
            (La[0] = d), (La[1] = e), $a.zyp14(La);
          a = $a.solve(a, b, !1);
          return {
            ok: a.zyp13,
            repError: a.repError,
            rotation: a.R,
            translation: a.t
          };
        }
      };
    return gb;
  })();
  return WEBARROCKSFACE || window.WEBARROCKSFACE;
})();
