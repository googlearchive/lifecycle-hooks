define(['dart_sdk', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular/src/core/change_detection/change_detection_util', 'packages/lifecycle_hooks/src/logger_service'], function(dart_sdk, lifecycle_hooks, change_detection_util, logger_service) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detection_util = change_detection_util.src__core__change_detection__change_detection_util;
  const src__logger_service = logger_service.src__logger_service;
  const _root = Object.create(null);
  const src__counter_component = Object.create(_root);
  const $clear = dartx.clear;
  const $_get = dartx._get;
  const $add = dartx.add;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let MapOfString$SimpleChange = () => (MapOfString$SimpleChange = dart.constFn(core.Map$(core.String, src__core__change_detection__change_detection_util.SimpleChange)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  src__counter_component.MyCounterComponent = class MyCounterComponent extends core.Object {
    get counter() {
      return this[counter];
    }
    set counter(value) {
      this[counter] = value;
    }
    get changeLog() {
      return this[changeLog];
    }
    set changeLog(value) {
      this[changeLog] = value;
    }
    ngOnChanges(changes) {
      if (this.counter === 0) {
        this.changeLog[$clear]();
      }
      let chng = changes[$_get]('counter');
      let cur = chng.currentValue;
      let prev = chng.previousValue == null ? "{}" : chng.previousValue;
      this.changeLog[$add](dart.str`counter: currentValue = ${cur}, previousValue = ${prev}`);
    }
  };
  (src__counter_component.MyCounterComponent.new = function() {
    this[counter] = null;
    this[changeLog] = JSArrayOfString().of([]);
  }).prototype = src__counter_component.MyCounterComponent.prototype;
  dart.addTypeTests(src__counter_component.MyCounterComponent);
  const counter = Symbol("MyCounterComponent.counter");
  const changeLog = Symbol("MyCounterComponent.changeLog");
  src__counter_component.MyCounterComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnChanges];
  dart.setMethodSignature(src__counter_component.MyCounterComponent, () => ({
    __proto__: dart.getMethods(src__counter_component.MyCounterComponent.__proto__),
    ngOnChanges: dart.fnType(dart.dynamic, [MapOfString$SimpleChange()])
  }));
  dart.setFieldSignature(src__counter_component.MyCounterComponent, () => ({
    __proto__: dart.getFields(src__counter_component.MyCounterComponent.__proto__),
    counter: dart.fieldType(core.num),
    changeLog: dart.fieldType(ListOfString())
  }));
  const _logger = Symbol('_logger');
  src__counter_component.CounterParentComponent = class CounterParentComponent extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
    get logs() {
      return this[_logger].logs;
    }
    updateCounter() {
      this.value = dart.notNull(this.value) + 1;
      this[_logger].tick();
    }
    reset() {
      this[_logger].log('-- reset --');
      this.value = 0;
      this[_logger].tick();
    }
  };
  (src__counter_component.CounterParentComponent.new = function(logger) {
    this[value$] = null;
    this[_logger] = logger;
    this.reset();
  }).prototype = src__counter_component.CounterParentComponent.prototype;
  dart.addTypeTests(src__counter_component.CounterParentComponent);
  const value$ = Symbol("CounterParentComponent.value");
  dart.setMethodSignature(src__counter_component.CounterParentComponent, () => ({
    __proto__: dart.getMethods(src__counter_component.CounterParentComponent.__proto__),
    updateCounter: dart.fnType(dart.void, []),
    reset: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__counter_component.CounterParentComponent, () => ({
    __proto__: dart.getGetters(src__counter_component.CounterParentComponent.__proto__),
    logs: dart.fnType(core.List$(core.String), [])
  }));
  dart.setFieldSignature(src__counter_component.CounterParentComponent, () => ({
    __proto__: dart.getFields(src__counter_component.CounterParentComponent.__proto__),
    [_logger]: dart.finalFieldType(src__logger_service.LoggerService),
    value: dart.fieldType(core.num)
  }));
  dart.trackLibraries("packages/lifecycle_hooks/src/counter_component.ddc", {
    "package:lifecycle_hooks/src/counter_component.dart": src__counter_component
  }, '{"version":3,"sourceRoot":"","sources":["counter_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;IAoBM;;;;;;IACS;;;;;;gBAED,OAAiC;AAG3C,UAAI,YAAY,KAAI,GAAG;AACrB,sBAAS,QAAM;;AAIjB,UAAa,OAAO,OAAO,QAAC;AAC5B,UAAI,MAAM,IAAI,aAAa;AAC3B,UAAI,OAAO,IAAI,cAAc,IAAI,OAAO,OAAO,IAAI,cAAc;AACjE,oBAAS,MAAI,CAAC,mCAA0B,GAAG,qBAAmB,IAAI;IACpE;;;IAfI,aAAO;IACE,eAAS,GAAG;EAe3B;;;;;;;;;;;;;;;;IAuBM;;;;;;;YAMqB,cAAO,KAAK;;;AAGnC,gBAAK,GApET,aAoEI,UAAK,IAAI;AACT,mBAAO,KAAK;IACd;;AAGE,mBAAO,IAAI,CAAC;AACZ,gBAAK,GAAG;AACR,mBAAO,KAAK;IACd;;gEAf4B,MAAO;IAF/B,YAAK;IAEmB,aAAO,GAAP,MAAO;AACjC,cAAK;EACP","file":"counter_component.ddc.js"}');
  // Exports:
  return {
    src__counter_component: src__counter_component
  };
});

//# sourceMappingURL=counter_component.ddc.js.map
