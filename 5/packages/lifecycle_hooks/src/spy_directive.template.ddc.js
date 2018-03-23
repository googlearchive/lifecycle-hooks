define(['dart_sdk', 'packages/lifecycle_hooks/src/logger_service.template', 'packages/angular/angular.template'], function(dart_sdk, logger_service, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__logger_service$46template = logger_service.src__logger_service$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__spy_directive$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__spy_directive$46template, {
    /*src__spy_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__spy_directive$46template.initReflector = function() {
    if (dart.test(src__spy_directive$46template._visited)) {
      return;
    }
    src__spy_directive$46template._visited = true;
    src__logger_service$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__spy_directive$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/lifecycle_hooks/src/spy_directive.template.ddc", {
    "package:lifecycle_hooks/src/spy_directive.template.dart": src__spy_directive$46template
  }, '{"version":3,"sourceRoot":"","sources":["spy_directive.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAYI,sCAAQ;YAAG;;;;;AAEb,kBAAI,sCAAQ,GAAE;AACZ;;AAEF,6CAAW;AAEX,IAAM,4CAAa;AACnB,IAAM,gCAAa;EACrB","file":"spy_directive.template.ddc.js"}');
  // Exports:
  return {
    src__spy_directive$46template: src__spy_directive$46template
  };
});

//# sourceMappingURL=spy_directive.template.ddc.js.map
