define(['dart_sdk', 'packages/lifecycle_hooks/src/logger_service'], function(dart_sdk, logger_service) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__logger_service = logger_service.src__logger_service;
  const _root = Object.create(null);
  const src__spy_component = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  const $trim = dartx.trim;
  const $add = dartx.add;
  const $clear = dartx.clear;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  const _logger = Symbol('_logger');
  src__spy_component.SpyParentComponent = class SpyParentComponent extends core.Object {
    get newName() {
      return this[newName];
    }
    set newName(value) {
      this[newName] = value;
    }
    get heroes() {
      return this[heroes];
    }
    set heroes(value) {
      this[heroes] = value;
    }
    get logs() {
      return this[_logger].logs;
    }
    addHero() {
      if (this.newName[$trim]()[$isNotEmpty]) {
        this.heroes[$add](this.newName[$trim]());
        this.newName = '';
        this[_logger].tick();
      }
    }
    reset() {
      this[_logger].log('-- reset --');
      this.heroes[$clear]();
      this[_logger].tick();
    }
  };
  (src__spy_component.SpyParentComponent.new = function(logger) {
    this[newName] = 'Herbie';
    this[heroes] = JSArrayOfString().of(['Windstorm', 'Magneta']);
    this[_logger] = logger;
  }).prototype = src__spy_component.SpyParentComponent.prototype;
  dart.addTypeTests(src__spy_component.SpyParentComponent);
  const newName = Symbol("SpyParentComponent.newName");
  const heroes = Symbol("SpyParentComponent.heroes");
  dart.setMethodSignature(src__spy_component.SpyParentComponent, () => ({
    __proto__: dart.getMethods(src__spy_component.SpyParentComponent.__proto__),
    addHero: dart.fnType(dart.dynamic, []),
    reset: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__spy_component.SpyParentComponent, () => ({
    __proto__: dart.getGetters(src__spy_component.SpyParentComponent.__proto__),
    logs: dart.fnType(core.List$(core.String), [])
  }));
  dart.setFieldSignature(src__spy_component.SpyParentComponent, () => ({
    __proto__: dart.getFields(src__spy_component.SpyParentComponent.__proto__),
    [_logger]: dart.finalFieldType(src__logger_service.LoggerService),
    newName: dart.fieldType(core.String),
    heroes: dart.fieldType(ListOfString())
  }));
  dart.trackLibraries("packages/lifecycle_hooks/src/spy_component.ddc", {
    "package:lifecycle_hooks/src/spy_component.dart": src__spy_component
  }, '{"version":3,"sourceRoot":"","sources":["spy_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;IAkBS;;;;;;IACM;;;;;;;YAIY,cAAO,KAAK;;;AAGnC,UAAI,YAAO,OAAK,eAAa,EAAE;AAC7B,mBAAM,MAAI,CAAC,YAAO,OAAK;AACvB,oBAAO,GAAG;AACV,qBAAO,KAAK;;IAEhB;;AAKE,mBAAO,IAAI,CAAC;AACZ,iBAAM,QAAM;AACZ,mBAAO,KAAK;IACd;;wDAlBwB,MAAO;IAHxB,aAAO,GAAG;IACJ,YAAM,GAAG,sBAAC,aAAa;IAEZ,aAAO,GAAP,MAAO;EAAC","file":"spy_component.ddc.js"}');
  // Exports:
  return {
    src__spy_component: src__spy_component
  };
});

//# sourceMappingURL=spy_component.ddc.js.map
