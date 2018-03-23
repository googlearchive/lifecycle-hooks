define(['dart_sdk', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/lifecycle_hooks/src/logger_service'], function(dart_sdk, lifecycle_hooks, logger_service) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__logger_service = logger_service.src__logger_service;
  const _root = Object.create(null);
  const src__spy_directive = Object.create(_root);
  dart.defineLazy(src__spy_directive, {
    /*src__spy_directive._nextId*/get _nextId() {
      return 1;
    },
    set _nextId(_) {}
  });
  const _logger = Symbol('_logger');
  const _logIt = Symbol('_logIt');
  src__spy_directive.SpyDirective = class SpyDirective extends core.Object {
    ngOnInit() {
      return this[_logIt]('onInit');
    }
    ngOnDestroy() {
      return this[_logIt]('onDestroy');
    }
    [_logIt](msg) {
      return this[_logger].log(dart.str`Spy #${(() => {
        let x = src__spy_directive._nextId;
        src__spy_directive._nextId = dart.notNull(x) + 1;
        return x;
      })()} ${msg}`);
    }
  };
  (src__spy_directive.SpyDirective.new = function(logger) {
    this[_logger] = logger;
  }).prototype = src__spy_directive.SpyDirective.prototype;
  dart.addTypeTests(src__spy_directive.SpyDirective);
  src__spy_directive.SpyDirective[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__spy_directive.SpyDirective, () => ({
    __proto__: dart.getMethods(src__spy_directive.SpyDirective.__proto__),
    ngOnInit: dart.fnType(dart.dynamic, []),
    ngOnDestroy: dart.fnType(dart.dynamic, []),
    [_logIt]: dart.fnType(dart.dynamic, [core.String])
  }));
  dart.setFieldSignature(src__spy_directive.SpyDirective, () => ({
    __proto__: dart.getFields(src__spy_directive.SpyDirective.__proto__),
    [_logger]: dart.finalFieldType(src__logger_service.LoggerService)
  }));
  dart.trackLibraries("packages/lifecycle_hooks/src/spy_directive.ddc", {
    "package:lifecycle_hooks/src/spy_directive.dart": src__spy_directive
  }, '{"version":3,"sourceRoot":"","sources":["spy_directive.dart"],"names":[],"mappings":";;;;;;;;;;MAII,0BAAO;YAAG;;;;;;;;YAUE,aAAM,CAAC;IAAS;;YAEb,aAAM,CAAC;IAAY;aAE7B,GAAU;YAAK,cAAO,IAAI,CAAC;gBAAQ,0BAAO;uDAlBnD;;cAkBwD,GAAG;IAAE;;kDANzC,MAAO;IAAP,aAAO,GAAP,MAAO;EAAC","file":"spy_directive.ddc.js"}');
  // Exports:
  return {
    src__spy_directive: src__spy_directive
  };
});

//# sourceMappingURL=spy_directive.ddc.js.map
