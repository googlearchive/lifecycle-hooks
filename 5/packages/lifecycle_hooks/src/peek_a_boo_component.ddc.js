define(['dart_sdk', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/lifecycle_hooks/src/logger_service', 'packages/angular/src/core/change_detection/change_detection_util'], function(dart_sdk, lifecycle_hooks, logger_service, change_detection_util) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__logger_service = logger_service.src__logger_service;
  const src__core__change_detection__change_detection_util = change_detection_util.src__core__change_detection__change_detection_util;
  const _root = Object.create(null);
  const src__peek_a_boo_component = Object.create(_root);
  const $_get = dartx._get;
  const $add = dartx.add;
  const $forEach = dartx.forEach;
  const $join = dartx.join;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StringAndSimpleChangeToNull = () => (StringAndSimpleChangeToNull = dart.constFn(dart.fnType(core.Null, [core.String, src__core__change_detection__change_detection_util.SimpleChange])))();
  let MapOfString$SimpleChange = () => (MapOfString$SimpleChange = dart.constFn(core.Map$(core.String, src__core__change_detection__change_detection_util.SimpleChange)))();
  dart.defineLazy(src__peek_a_boo_component, {
    /*src__peek_a_boo_component._nextId*/get _nextId() {
      return 1;
    },
    set _nextId(_) {}
  });
  const _logger = Symbol('_logger');
  const _logIt = Symbol('_logIt');
  src__peek_a_boo_component.PeekABoo = class PeekABoo extends core.Object {
    ngOnInit() {
      this[_logIt]('OnInit');
    }
    [_logIt](msg) {
      this[_logger].log(dart.str`#${(() => {
        let x = src__peek_a_boo_component._nextId;
        src__peek_a_boo_component._nextId = dart.notNull(x) + 1;
        return x;
      })()} ${msg}`);
    }
  };
  (src__peek_a_boo_component.PeekABoo.new = function(logger) {
    this[_logger] = logger;
  }).prototype = src__peek_a_boo_component.PeekABoo.prototype;
  dart.addTypeTests(src__peek_a_boo_component.PeekABoo);
  src__peek_a_boo_component.PeekABoo[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(src__peek_a_boo_component.PeekABoo, () => ({
    __proto__: dart.getMethods(src__peek_a_boo_component.PeekABoo.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    [_logIt]: dart.fnType(dart.void, [core.String])
  }));
  dart.setFieldSignature(src__peek_a_boo_component.PeekABoo, () => ({
    __proto__: dart.getFields(src__peek_a_boo_component.PeekABoo.__proto__),
    [_logger]: dart.finalFieldType(src__logger_service.LoggerService)
  }));
  const _afterContentCheckedCounter = Symbol('_afterContentCheckedCounter');
  const _afterViewCheckedCounter = Symbol('_afterViewCheckedCounter');
  const _onChangesCounter = Symbol('_onChangesCounter');
  const _verb = Symbol('_verb');
  src__peek_a_boo_component.PeekABooComponent = class PeekABooComponent extends src__peek_a_boo_component.PeekABoo {
    get name() {
      return this[name];
    }
    set name(value) {
      this[name] = value;
    }
    ngOnChanges(changes) {
      let messages = JSArrayOfString().of([]);
      changes[$forEach](dart.fn((propName, change) => {
        if (propName === 'name') {
          let name = changes[$_get]('name').currentValue;
          messages[$add](dart.str`name ${this[_verb]} to "${name}"`);
        } else {
          messages[$add](dart.str`${propName} ${this[_verb]}`);
        }
      }, StringAndSimpleChangeToNull()));
      this[_logIt](dart.str`OnChanges (${(() => {
        let x = this[_onChangesCounter];
        this[_onChangesCounter] = dart.notNull(x) + 1;
        return x;
      })()}): ${messages[$join]('; ')}`);
      this[_verb] = 'changed';
    }
    ngDoCheck() {
      return this[_logIt]('DoCheck');
    }
    ngAfterContentInit() {
      return this[_logIt]('AfterContentInit');
    }
    ngAfterContentChecked() {
      this[_logIt](dart.str`AfterContentChecked (${(() => {
        let x = this[_afterContentCheckedCounter];
        this[_afterContentCheckedCounter] = dart.notNull(x) + 1;
        return x;
      })()})`);
    }
    ngAfterViewInit() {
      return this[_logIt]('AfterViewInit');
    }
    ngAfterViewChecked() {
      this[_logIt](dart.str`AfterViewChecked (${(() => {
        let x = this[_afterViewCheckedCounter];
        this[_afterViewCheckedCounter] = dart.notNull(x) + 1;
        return x;
      })()})`);
    }
    ngOnDestroy() {
      return this[_logIt]('OnDestroy');
    }
  };
  (src__peek_a_boo_component.PeekABooComponent.new = function(logger) {
    this[name] = null;
    this[_afterContentCheckedCounter] = 1;
    this[_afterViewCheckedCounter] = 1;
    this[_onChangesCounter] = 1;
    this[_verb] = 'initialized';
    src__peek_a_boo_component.PeekABooComponent.__proto__.new.call(this, logger);
    let _is = this.name != null ? 'is' : 'is not';
    this[_logIt](dart.str`name ${_is} known at construction`);
  }).prototype = src__peek_a_boo_component.PeekABooComponent.prototype;
  dart.addTypeTests(src__peek_a_boo_component.PeekABooComponent);
  const name = Symbol("PeekABooComponent.name");
  src__peek_a_boo_component.PeekABooComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnChanges, src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.DoCheck, src__core__metadata__lifecycle_hooks.AfterContentInit, src__core__metadata__lifecycle_hooks.AfterContentChecked, src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.AfterViewChecked, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__peek_a_boo_component.PeekABooComponent, () => ({
    __proto__: dart.getMethods(src__peek_a_boo_component.PeekABooComponent.__proto__),
    ngOnChanges: dart.fnType(dart.dynamic, [MapOfString$SimpleChange()]),
    ngDoCheck: dart.fnType(dart.dynamic, []),
    ngAfterContentInit: dart.fnType(dart.dynamic, []),
    ngAfterContentChecked: dart.fnType(dart.dynamic, []),
    ngAfterViewInit: dart.fnType(dart.dynamic, []),
    ngAfterViewChecked: dart.fnType(dart.dynamic, []),
    ngOnDestroy: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(src__peek_a_boo_component.PeekABooComponent, () => ({
    __proto__: dart.getFields(src__peek_a_boo_component.PeekABooComponent.__proto__),
    name: dart.fieldType(core.String),
    [_afterContentCheckedCounter]: dart.fieldType(core.int),
    [_afterViewCheckedCounter]: dart.fieldType(core.int),
    [_onChangesCounter]: dart.fieldType(core.int),
    [_verb]: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/lifecycle_hooks/src/peek_a_boo_component.ddc", {
    "package:lifecycle_hooks/src/peek_a_boo_component.dart": src__peek_a_boo_component
  }, '{"version":3,"sourceRoot":"","sources":["peek_a_boo_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;MAII,iCAAO;YAAG;;;;;;;;AASV,kBAAM,CAAC;IACT;aAEY,GAAU;AAIpB,mBAAO,IAAI,CAAC;gBAAI,iCAAO;8DApB3B;;cAoBgC,GAAG;IACjC;;qDAZc,MAAO;IAAP,aAAO,GAAP,MAAO;EAAC;;;;;;;;;;;;;;;;;IAgCf;;;;;;gBAaK,OAAiC;AAC3C,UAAa,WAAW;AACxB,aAAO,UAAQ,CAAC,SAAC,QAAe,EAAE,MAAmB;AACnD,YAAI,QAAQ,KAAI,QAAQ;AACtB,cAAI,OAAO,OAAO,QAAC,oBAAoB;AACvC,kBAAQ,MAAI,CAAC,gBAAO,WAAK,QAAM,IAAI;eAC9B;AACL,kBAAQ,MAAI,CAAC,WAAE,QAAQ,IAAE,WAAK;;;AAGlC,kBAAM,CAAC;gBAAc,uBAAiB;oDAhE1C;;gBAgEkD,QAAQ,OAAK,CAAC;AAC5D,iBAAK,GAAG;IACV;;YAIe,aAAM,CAAC;IAAU;;YAER,aAAM,CAAC;IAAmB;;AAKhD,kBAAM,CAAC;gBAAwB,iCAA2B;8DA7E9D;;;IA8EE;;YAEqB,aAAM,CAAC;IAAgB;;AAK1C,kBAAM,CAAC;gBAAqB,8BAAwB;2DArFxD;;;IAsFE;;YAEiB,aAAM,CAAC;IAAY;;8DAxClB,MAAoB;IAP/B,UAAI;IAEP,iCAA2B,GAAG;IAC9B,8BAAwB,GAAG;IAC3B,uBAAiB,GAAG;IACjB,WAAK,GAAG;AAE2B,yEAAM,MAAM;AACpD,QAAI,MAAM,SAAI,IAAI,OAAO,OAAO;AAChC,gBAAM,CAAC,gBAAO,GAAG;EACnB","file":"peek_a_boo_component.ddc.js"}');
  // Exports:
  return {
    src__peek_a_boo_component: src__peek_a_boo_component
  };
});

//# sourceMappingURL=peek_a_boo_component.ddc.js.map
