define(['dart_sdk', 'packages/lifecycle_hooks/src/logger_service'], function(dart_sdk, logger_service) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__logger_service = logger_service.src__logger_service;
  const _root = Object.create(null);
  const src__peek_a_boo_parent_component = Object.create(_root);
  const _logger = Symbol('_logger');
  src__peek_a_boo_parent_component.PeekABooParentComponent = class PeekABooParentComponent extends core.Object {
    get hasChild() {
      return this[hasChild];
    }
    set hasChild(value) {
      this[hasChild] = value;
    }
    get heroName() {
      return this[heroName];
    }
    set heroName(value) {
      this[heroName] = value;
    }
    get logs() {
      return this[_logger].logs;
    }
    toggleChild() {
      this.hasChild = !dart.test(this.hasChild);
      if (dart.test(this.hasChild)) {
        this.heroName = 'Windstorm';
        this[_logger].clear();
      }
      this[_logger].tick();
    }
    updateHero() {
      this.heroName = dart.notNull(this.heroName) + '!';
      this[_logger].tick();
    }
  };
  (src__peek_a_boo_parent_component.PeekABooParentComponent.new = function(logger) {
    this[hasChild] = false;
    this[heroName] = 'Windstorm';
    this[_logger] = logger;
  }).prototype = src__peek_a_boo_parent_component.PeekABooParentComponent.prototype;
  dart.addTypeTests(src__peek_a_boo_parent_component.PeekABooParentComponent);
  const hasChild = Symbol("PeekABooParentComponent.hasChild");
  const heroName = Symbol("PeekABooParentComponent.heroName");
  dart.setMethodSignature(src__peek_a_boo_parent_component.PeekABooParentComponent, () => ({
    __proto__: dart.getMethods(src__peek_a_boo_parent_component.PeekABooParentComponent.__proto__),
    toggleChild: dart.fnType(dart.dynamic, []),
    updateHero: dart.fnType(dart.dynamic, [])
  }));
  dart.setGetterSignature(src__peek_a_boo_parent_component.PeekABooParentComponent, () => ({
    __proto__: dart.getGetters(src__peek_a_boo_parent_component.PeekABooParentComponent.__proto__),
    logs: dart.fnType(core.List$(core.String), [])
  }));
  dart.setFieldSignature(src__peek_a_boo_parent_component.PeekABooParentComponent, () => ({
    __proto__: dart.getFields(src__peek_a_boo_parent_component.PeekABooParentComponent.__proto__),
    [_logger]: dart.finalFieldType(src__logger_service.LoggerService),
    hasChild: dart.fieldType(core.bool),
    heroName: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/lifecycle_hooks/src/peek_a_boo_parent_component.ddc", {
    "package:lifecycle_hooks/src/peek_a_boo_parent_component.dart": src__peek_a_boo_parent_component
  }, '{"version":3,"sourceRoot":"","sources":["peek_a_boo_parent_component.dart"],"names":[],"mappings":";;;;;;;;;;IA8BO;;;;;;IACE;;;;;;;YAIkB,cAAO,KAAK;;;AAGnC,mBAAQ,GAAG,WAAC,aAAQ;AACpB,oBAAI,aAAQ,GAAE;AACZ,qBAAQ,GAAG;AACX,qBAAO,MAAM;;AAEf,mBAAO,KAAK;IACd;;AAGE,mBAAQ,GA/CZ,aA+CI,aAAQ,IAAI;AACZ,mBAAO,KAAK;IACd;;2EAhB6B,MAAO;IAH/B,cAAQ,GAAG;IACT,cAAQ,GAAG;IAEW,aAAO,GAAP,MAAO;EAAC","file":"peek_a_boo_parent_component.ddc.js"}');
  // Exports:
  return {
    src__peek_a_boo_parent_component: src__peek_a_boo_parent_component
  };
});

//# sourceMappingURL=peek_a_boo_parent_component.ddc.js.map
