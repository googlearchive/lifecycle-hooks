define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__logger_service = Object.create(_root);
  const $_set = dartx._set;
  const $length = dartx.length;
  const $add = dartx.add;
  const $clear = dartx.clear;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  const _prevMsg = Symbol('_prevMsg');
  const _prevMsgCount = Symbol('_prevMsgCount');
  src__logger_service.LoggerService = class LoggerService extends core.Object {
    get logs() {
      return this[logs];
    }
    set logs(value) {
      this[logs] = value;
    }
    log(msg) {
      if (msg == this[_prevMsg]) {
        this.logs[$_set](dart.notNull(this.logs[$length]) - 1, dart.str`${msg} (${this[_prevMsgCount] = dart.notNull(this[_prevMsgCount]) + 1}x)`);
      } else {
        this[_prevMsg] = msg;
        this[_prevMsgCount] = 1;
        this.logs[$add](msg);
      }
    }
    clear() {
      return this.logs[$clear]();
    }
    tick() {
      return FutureOfNull().new(dart.fn(() => {
      }, VoidToNull()));
    }
  };
  (src__logger_service.LoggerService.new = function() {
    this[logs] = JSArrayOfString().of([]);
    this[_prevMsg] = '';
    this[_prevMsgCount] = 1;
  }).prototype = src__logger_service.LoggerService.prototype;
  dart.addTypeTests(src__logger_service.LoggerService);
  const logs = Symbol("LoggerService.logs");
  dart.setMethodSignature(src__logger_service.LoggerService, () => ({
    __proto__: dart.getMethods(src__logger_service.LoggerService.__proto__),
    log: dart.fnType(dart.void, [core.String]),
    clear: dart.fnType(dart.void, []),
    tick: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(src__logger_service.LoggerService, () => ({
    __proto__: dart.getFields(src__logger_service.LoggerService.__proto__),
    logs: dart.fieldType(ListOfString()),
    [_prevMsg]: dart.fieldType(core.String),
    [_prevMsgCount]: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/lifecycle_hooks/src/logger_service.ddc", {
    "package:lifecycle_hooks/src/logger_service.dart": src__logger_service
  }, '{"version":3,"sourceRoot":"","sources":["logger_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;IAMe;;;;;;QAIJ,GAAU;AACjB,UAAI,GAAG,IAAI,cAAQ,EAAE;AAEnB,iBAAI,QAAa,aAAZ,SAAI,SAAO,IAAG,GAAK,WAAE,GAAG,KAAI,mBAAa,GAbpD,aAauC,mBAAa,IAAI;aAC7C;AAEL,sBAAQ,GAAG,GAAG;AACd,2BAAa,GAAG;AAChB,iBAAI,MAAI,CAAC,GAAG;;IAEhB;;YAEgB,UAAI,QAAM;IAAE;;YAGlB,AAAI,mBAAM,CAAC;;IAAM;;;IAnBd,UAAI,GAAG;IACb,cAAQ,GAAG;IACd,mBAAa,GAAG;EAkBtB","file":"logger_service.ddc.js"}');
  // Exports:
  return {
    src__logger_service: src__logger_service
  };
});

//# sourceMappingURL=logger_service.ddc.js.map
