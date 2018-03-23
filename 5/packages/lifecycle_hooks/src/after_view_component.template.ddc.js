define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_forms/src/directives/default_value_accessor', 'packages/angular_forms/src/directives/control_value_accessor', 'packages/angular_forms/src/directives/ng_model', 'packages/angular/src/core/di/opaque_token', 'packages/angular_forms/src/directives/control_container', 'packages/lifecycle_hooks/src/after_view_component', 'packages/angular/src/common/directives/ng_if', 'packages/lifecycle_hooks/src/logger_service', 'packages/angular/src/common/directives/ng_for', 'packages/angular/src/di/reflector', 'packages/lifecycle_hooks/src/logger_service.template', 'packages/angular/angular.template', 'packages/angular_forms/angular_forms.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, default_value_accessor, control_value_accessor, ng_model, opaque_token, control_container, after_view_component, ng_if, logger_service, ng_for, reflector, logger_service$, angular, angular_forms) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__directives__default_value_accessor = default_value_accessor.src__directives__default_value_accessor;
  const src__directives__control_value_accessor = control_value_accessor.src__directives__control_value_accessor;
  const src__directives__ng_model = ng_model.src__directives__ng_model;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__directives__ng_control = control_container.src__directives__ng_control;
  const src__after_view_component = after_view_component.src__after_view_component;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const src__logger_service = logger_service.src__logger_service;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__di__reflector = reflector.src__di__reflector;
  const src__logger_service$46template = logger_service$.src__logger_service$46template;
  const angular$46template = angular.angular$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const _root = Object.create(null);
  const src__after_view_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $addEventListener = dartx.addEventListener;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $isNotEmpty = dartx.isNotEmpty;
  const $text = dartx.text;
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfControlValueAccessor = () => (JSArrayOfControlValueAccessor = dart.constFn(_interceptors.JSArray$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let MultiTokenOfControlValueAccessor = () => (MultiTokenOfControlValueAccessor = dart.constFn(src__core__di__opaque_token.MultiToken$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let ListOfControlValueAccessor = () => (ListOfControlValueAccessor = dart.constFn(core.List$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let AppViewOfChildViewComponent = () => (AppViewOfChildViewComponent = dart.constFn(src__core__linker__app_view.AppView$(src__after_view_component.ChildViewComponent)))();
  let AppViewAndintToAppViewOfChildViewComponent = () => (AppViewAndintToAppViewOfChildViewComponent = dart.constFn(dart.fnType(AppViewOfChildViewComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfChildViewComponent = () => (ComponentRefOfChildViewComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__after_view_component.ChildViewComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfChildViewComponent = () => (ComponentFactoryOfChildViewComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__after_view_component.ChildViewComponent)))();
  let AppViewOfAfterViewComponent = () => (AppViewOfAfterViewComponent = dart.constFn(src__core__linker__app_view.AppView$(src__after_view_component.AfterViewComponent)))();
  let AppViewAndintToAppViewOfAfterViewComponent = () => (AppViewAndintToAppViewOfAfterViewComponent = dart.constFn(dart.fnType(AppViewOfAfterViewComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfAfterViewComponent = () => (ComponentRefOfAfterViewComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__after_view_component.AfterViewComponent)))();
  let ComponentFactoryOfAfterViewComponent = () => (ComponentFactoryOfAfterViewComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__after_view_component.AfterViewComponent)))();
  let AppViewOfAfterViewParentComponent = () => (AppViewOfAfterViewParentComponent = dart.constFn(src__core__linker__app_view.AppView$(src__after_view_component.AfterViewParentComponent)))();
  let AppViewAndintToAppViewOfAfterViewParentComponent = () => (AppViewAndintToAppViewOfAfterViewParentComponent = dart.constFn(dart.fnType(AppViewOfAfterViewParentComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfAfterViewParentComponent = () => (ComponentRefOfAfterViewParentComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__after_view_component.AfterViewParentComponent)))();
  let ComponentFactoryOfAfterViewParentComponent = () => (ComponentFactoryOfAfterViewParentComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__after_view_component.AfterViewParentComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__after_view_component$46template, {
    /*src__after_view_component$46template.styles$ChildViewComponent*/get styles$ChildViewComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _DefaultValueAccessor_0_5 = Symbol('_DefaultValueAccessor_0_5');
  const _NgValueAccessor_0_6 = Symbol('_NgValueAccessor_0_6');
  const _NgModel_0_7 = Symbol('_NgModel_0_7');
  const _handle_input_0_1 = Symbol('_handle_input_0_1');
  const _handle_ngModelChange_0_0 = Symbol('_handle_ngModelChange_0_0');
  let const$;
  let const$0;
  src__after_view_component$46template.ViewChildViewComponent0 = class ViewChildViewComponent0 extends src__core__linker__app_view.AppView$(src__after_view_component.ChildViewComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', parentRenderNode));
      this[_DefaultValueAccessor_0_5] = new src__directives__default_value_accessor.DefaultValueAccessor.new(this[_el_0]);
      this[_NgValueAccessor_0_6] = JSArrayOfControlValueAccessor().of([this[_DefaultValueAccessor_0_5]]);
      this[_NgModel_0_7] = new src__directives__ng_model.NgModel.new(null, this[_NgValueAccessor_0_6]);
      this[_el_0][$addEventListener]('input', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_input_0_1)));
      this[_el_0][$addEventListener]('blur', this.eventHandler0(html.Event, dart.bind(this[_DefaultValueAccessor_0_5], 'touchHandler')));
      let subscription_0 = this[_NgModel_0_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_0_0)));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__directives__default_value_accessor.DefaultValueAccessor) && 0 === nodeIndex) {
        return this[_DefaultValueAccessor_0_5];
      }
      if (token === (const$0 || (const$0 = dart.const(new (MultiTokenOfControlValueAccessor()).new('NgValueAccessor')))) && 0 === nodeIndex) {
        return this[_NgValueAccessor_0_6];
      }
      if ((token === dart.wrapType(src__directives__ng_model.NgModel) || token === dart.wrapType(src__directives__ng_control.NgControl)) && 0 === nodeIndex) {
        return this[_NgModel_0_7];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_0_7].model = _ctx.hero;
      this[_NgModel_0_7].ngAfterChanges();
      if (firstCheck) {
        this[_NgModel_0_7].ngOnInit();
      }
    }
    [_handle_ngModelChange_0_0]($event) {
      this.ctx.hero = core.String._check($event);
    }
    [_handle_input_0_1]($event) {
      dart.dsend(this[_DefaultValueAccessor_0_5], 'onChange', dart.dload(dart.dload($event, 'target'), 'value'));
    }
  };
  (src__after_view_component$46template.ViewChildViewComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_DefaultValueAccessor_0_5] = null;
    this[_NgValueAccessor_0_6] = null;
    this[_NgModel_0_7] = null;
    src__after_view_component$46template.ViewChildViewComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-child-view'));
    let t = src__after_view_component$46template.ViewChildViewComponent0._renderType;
    t == null ? src__after_view_component$46template.ViewChildViewComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__after_view_component$46template.styles$ChildViewComponent) : t;
    this.setupComponentType(src__after_view_component$46template.ViewChildViewComponent0._renderType);
  }).prototype = src__after_view_component$46template.ViewChildViewComponent0.prototype;
  dart.addTypeTests(src__after_view_component$46template.ViewChildViewComponent0);
  dart.setMethodSignature(src__after_view_component$46template.ViewChildViewComponent0, () => ({
    __proto__: dart.getMethods(src__after_view_component$46template.ViewChildViewComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__after_view_component.ChildViewComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_ngModelChange_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_input_0_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__after_view_component$46template.ViewChildViewComponent0, () => ({
    __proto__: dart.getFields(src__after_view_component$46template.ViewChildViewComponent0.__proto__),
    [_el_0]: dart.fieldType(html.InputElement),
    [_DefaultValueAccessor_0_5]: dart.fieldType(src__directives__default_value_accessor.DefaultValueAccessor),
    [_NgValueAccessor_0_6]: dart.fieldType(ListOfControlValueAccessor()),
    [_NgModel_0_7]: dart.fieldType(src__directives__ng_model.NgModel)
  }));
  dart.defineLazy(src__after_view_component$46template.ViewChildViewComponent0, {
    /*src__after_view_component$46template.ViewChildViewComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__after_view_component$46template.viewFactory_ChildViewComponent0 = function(parentView, parentIndex) {
    return new src__after_view_component$46template.ViewChildViewComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__after_view_component$46template.viewFactory_ChildViewComponent0, AppViewAndintToAppViewOfChildViewComponent());
  dart.defineLazy(src__after_view_component$46template, {
    /*src__after_view_component$46template.styles$ChildViewComponentHost*/get styles$ChildViewComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _ChildViewComponent_0_5 = Symbol('_ChildViewComponent_0_5');
  src__after_view_component$46template._ViewChildViewComponentHost0 = class _ViewChildViewComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__after_view_component$46template.ViewChildViewComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ChildViewComponent_0_5] = new src__after_view_component.ChildViewComponent.new();
      this[_compView_0].create(this[_ChildViewComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfChildViewComponent()).new(0, this, this.rootEl, this[_ChildViewComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__after_view_component$46template._ViewChildViewComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ChildViewComponent_0_5] = null;
    src__after_view_component$46template._ViewChildViewComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__after_view_component$46template._ViewChildViewComponentHost0.prototype;
  dart.addTypeTests(src__after_view_component$46template._ViewChildViewComponentHost0);
  dart.setMethodSignature(src__after_view_component$46template._ViewChildViewComponentHost0, () => ({
    __proto__: dart.getMethods(src__after_view_component$46template._ViewChildViewComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__after_view_component$46template._ViewChildViewComponentHost0, () => ({
    __proto__: dart.getFields(src__after_view_component$46template._ViewChildViewComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__after_view_component$46template.ViewChildViewComponent0),
    [_ChildViewComponent_0_5]: dart.fieldType(src__after_view_component.ChildViewComponent)
  }));
  src__after_view_component$46template.viewFactory_ChildViewComponentHost0 = function(parentView, parentIndex) {
    return new src__after_view_component$46template._ViewChildViewComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__after_view_component$46template.viewFactory_ChildViewComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__after_view_component$46template, {
    /*src__after_view_component$46template.ChildViewComponentNgFactory*/get ChildViewComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfChildViewComponent()).new('my-child-view', src__after_view_component$46template.viewFactory_ChildViewComponentHost0, src__after_view_component$46template._ChildViewComponentMetadata));
    },
    /*src__after_view_component$46template.styles$AfterViewComponent*/get styles$AfterViewComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _query_ChildViewComponent_1_0_isDirty = Symbol('_query_ChildViewComponent_1_0_isDirty');
  const _el_2 = Symbol('_el_2');
  const _compView_2 = Symbol('_compView_2');
  const _ChildViewComponent_2_5 = Symbol('_ChildViewComponent_2_5');
  const _el_3 = Symbol('_el_3');
  const _appEl_5 = Symbol('_appEl_5');
  const _NgIf_5_9 = Symbol('_NgIf_5_9');
  let const$1;
  src__after_view_component$46template.ViewAfterViewComponent0 = class ViewAfterViewComponent0 extends src__core__linker__app_view.AppView$(src__after_view_component.AfterViewComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      let _text_1 = html.Text.new('-- child view begins --');
      this[_el_0][$append](_text_1);
      this[_compView_2] = new src__after_view_component$46template.ViewChildViewComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      parentRenderNode[$append](this[_el_2]);
      this[_ChildViewComponent_2_5] = new src__after_view_component.ChildViewComponent.new();
      this[_compView_2].create(this[_ChildViewComponent_2_5], []);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      let _text_4 = html.Text.new('-- child view ends --');
      this[_el_3][$append](_text_4);
      let _anchor_5 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_5);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, null, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], src__after_view_component$46template.viewFactory_AfterViewComponent1);
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      this.ctx.viewChild = this[_ChildViewComponent_2_5];
      this.init(const$1 || (const$1 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_5_9].ngIf = _ctx.comment[$isNotEmpty];
      this[_appEl_5].detectChangesInNestedViews();
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_5];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_2];
      t$ == null ? null : t$.destroy();
    }
  };
  (src__after_view_component$46template.ViewAfterViewComponent0.new = function(parentView, parentIndex) {
    this[_query_ChildViewComponent_1_0_isDirty] = true;
    this[_el_0] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_ChildViewComponent_2_5] = null;
    this[_el_3] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    src__after_view_component$46template.ViewAfterViewComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('after-view'));
    let t = src__after_view_component$46template.ViewAfterViewComponent0._renderType;
    t == null ? src__after_view_component$46template.ViewAfterViewComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__after_view_component$46template.styles$AfterViewComponent) : t;
    this.setupComponentType(src__after_view_component$46template.ViewAfterViewComponent0._renderType);
  }).prototype = src__after_view_component$46template.ViewAfterViewComponent0.prototype;
  dart.addTypeTests(src__after_view_component$46template.ViewAfterViewComponent0);
  dart.setMethodSignature(src__after_view_component$46template.ViewAfterViewComponent0, () => ({
    __proto__: dart.getMethods(src__after_view_component$46template.ViewAfterViewComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__after_view_component.AfterViewComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__after_view_component$46template.ViewAfterViewComponent0, () => ({
    __proto__: dart.getFields(src__after_view_component$46template.ViewAfterViewComponent0.__proto__),
    [_query_ChildViewComponent_1_0_isDirty]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(src__after_view_component$46template.ViewChildViewComponent0),
    [_ChildViewComponent_2_5]: dart.fieldType(src__after_view_component.ChildViewComponent),
    [_el_3]: dart.fieldType(html.DivElement),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  dart.defineLazy(src__after_view_component$46template.ViewAfterViewComponent0, {
    /*src__after_view_component$46template.ViewAfterViewComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__after_view_component$46template.viewFactory_AfterViewComponent0 = function(parentView, parentIndex) {
    return new src__after_view_component$46template.ViewAfterViewComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__after_view_component$46template.viewFactory_AfterViewComponent0, AppViewAndintToAppViewOfAfterViewComponent());
  const _text_1 = Symbol('_text_1');
  const _expr_0 = Symbol('_expr_0');
  src__after_view_component$46template._ViewAfterViewComponent1 = class _ViewAfterViewComponent1 extends src__core__linker__app_view.AppView$(src__after_view_component.AfterViewComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('p');
      this[_el_0].className = 'comment';
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.comment;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__after_view_component$46template._ViewAfterViewComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__after_view_component$46template._ViewAfterViewComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__after_view_component$46template.ViewAfterViewComponent0._renderType;
  }).prototype = src__after_view_component$46template._ViewAfterViewComponent1.prototype;
  dart.addTypeTests(src__after_view_component$46template._ViewAfterViewComponent1);
  dart.setMethodSignature(src__after_view_component$46template._ViewAfterViewComponent1, () => ({
    __proto__: dart.getMethods(src__after_view_component$46template._ViewAfterViewComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__after_view_component.AfterViewComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__after_view_component$46template._ViewAfterViewComponent1, () => ({
    __proto__: dart.getFields(src__after_view_component$46template._ViewAfterViewComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__after_view_component$46template.viewFactory_AfterViewComponent1 = function(parentView, parentIndex) {
    return new src__after_view_component$46template._ViewAfterViewComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__after_view_component$46template.viewFactory_AfterViewComponent1, AppViewAndintToAppViewOfAfterViewComponent());
  dart.defineLazy(src__after_view_component$46template, {
    /*src__after_view_component$46template.styles$AfterViewComponentHost*/get styles$AfterViewComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _AfterViewComponent_0_5 = Symbol('_AfterViewComponent_0_5');
  src__after_view_component$46template._ViewAfterViewComponentHost0 = class _ViewAfterViewComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__after_view_component$46template.ViewAfterViewComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_AfterViewComponent_0_5] = new src__after_view_component.AfterViewComponent.new(src__logger_service.LoggerService._check(this.injectorGet(dart.wrapType(src__logger_service.LoggerService), this.viewData.parentIndex)));
      this[_compView_0].create(this[_AfterViewComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAfterViewComponent()).new(0, this, this.rootEl, this[_AfterViewComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_0].detectChanges();
      if (firstCheck) {
        this[_AfterViewComponent_0_5].ngAfterViewInit();
      }
      this[_AfterViewComponent_0_5].ngAfterViewChecked();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__after_view_component$46template._ViewAfterViewComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AfterViewComponent_0_5] = null;
    src__after_view_component$46template._ViewAfterViewComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__after_view_component$46template._ViewAfterViewComponentHost0.prototype;
  dart.addTypeTests(src__after_view_component$46template._ViewAfterViewComponentHost0);
  dart.setMethodSignature(src__after_view_component$46template._ViewAfterViewComponentHost0, () => ({
    __proto__: dart.getMethods(src__after_view_component$46template._ViewAfterViewComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__after_view_component$46template._ViewAfterViewComponentHost0, () => ({
    __proto__: dart.getFields(src__after_view_component$46template._ViewAfterViewComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__after_view_component$46template.ViewAfterViewComponent0),
    [_AfterViewComponent_0_5]: dart.fieldType(src__after_view_component.AfterViewComponent)
  }));
  src__after_view_component$46template.viewFactory_AfterViewComponentHost0 = function(parentView, parentIndex) {
    return new src__after_view_component$46template._ViewAfterViewComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__after_view_component$46template.viewFactory_AfterViewComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__after_view_component$46template, {
    /*src__after_view_component$46template.AfterViewComponentNgFactory*/get AfterViewComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAfterViewComponent()).new('after-view', src__after_view_component$46template.viewFactory_AfterViewComponentHost0, src__after_view_component$46template._AfterViewComponentMetadata));
    },
    /*src__after_view_component$46template.styles$AfterViewParentComponent*/get styles$AfterViewParentComponent() {
      return dart.constList(['.parent._ngcontent-%COMP% { background:burlywood; }'], dart.dynamic);
    }
  });
  const _el_1 = Symbol('_el_1');
  const _appEl_3 = Symbol('_appEl_3');
  const _NgIf_3_9 = Symbol('_NgIf_3_9');
  const _el_4 = Symbol('_el_4');
  const _el_6 = Symbol('_el_6');
  const _el_7 = Symbol('_el_7');
  const _appEl_9 = Symbol('_appEl_9');
  const _NgFor_9_9 = Symbol('_NgFor_9_9');
  const _expr_1 = Symbol('_expr_1');
  let const$2;
  src__after_view_component$46template.ViewAfterViewParentComponent0 = class ViewAfterViewParentComponent0 extends src__core__linker__app_view.AppView$(src__after_view_component.AfterViewParentComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'parent';
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_0]);
      this.addShimE(this[_el_1]);
      let _text_2 = html.Text.new('AfterView');
      this[_el_1][$append](_text_2);
      let _anchor_3 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_3);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 0, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], src__after_view_component$46template.viewFactory_AfterViewParentComponent1);
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      this[_el_4] = src__core__linker__app_view.createAndAppend(doc, 'h4', this[_el_0]);
      this.addShimE(this[_el_4]);
      let _text_5 = html.Text.new('-- AfterView Logs --');
      this[_el_4][$append](_text_5);
      this[_el_6] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_0]);
      this.addShimE(this[_el_6]);
      this[_el_7] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_6]));
      this.addShimC(this[_el_7]);
      let _text_8 = html.Text.new('Reset');
      this[_el_7][$append](_text_8);
      let _anchor_9 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_9);
      this[_appEl_9] = new src__core__linker__view_container.ViewContainer.new(9, 0, this, _anchor_9);
      let _TemplateRef_9_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_9], src__after_view_component$46template.viewFactory_AfterViewParentComponent2);
      this[_NgFor_9_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_9], _TemplateRef_9_8);
      this[_el_7][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'reset')));
      this.init(const$2 || (const$2 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_3_9].ngIf = _ctx.show;
      let currVal_1 = _ctx.logs;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_NgFor_9_9].ngForOf = currVal_1;
        this[_expr_1] = currVal_1;
      }
      this[_NgFor_9_9].ngDoCheck();
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_9].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_3];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_9];
      t$ == null ? null : t$.destroyNestedViews();
    }
  };
  (src__after_view_component$46template.ViewAfterViewParentComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_el_4] = null;
    this[_el_6] = null;
    this[_el_7] = null;
    this[_appEl_9] = null;
    this[_NgFor_9_9] = null;
    this[_expr_1] = null;
    src__after_view_component$46template.ViewAfterViewParentComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('after-view-parent'));
    let t = src__after_view_component$46template.ViewAfterViewParentComponent0._renderType;
    t == null ? src__after_view_component$46template.ViewAfterViewParentComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__after_view_component$46template.styles$AfterViewParentComponent) : t;
    this.setupComponentType(src__after_view_component$46template.ViewAfterViewParentComponent0._renderType);
  }).prototype = src__after_view_component$46template.ViewAfterViewParentComponent0.prototype;
  dart.addTypeTests(src__after_view_component$46template.ViewAfterViewParentComponent0);
  dart.setMethodSignature(src__after_view_component$46template.ViewAfterViewParentComponent0, () => ({
    __proto__: dart.getMethods(src__after_view_component$46template.ViewAfterViewParentComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__after_view_component.AfterViewParentComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__after_view_component$46template.ViewAfterViewParentComponent0, () => ({
    __proto__: dart.getFields(src__after_view_component$46template.ViewAfterViewParentComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_4]: dart.fieldType(html.Element),
    [_el_6]: dart.fieldType(html.Element),
    [_el_7]: dart.fieldType(html.ButtonElement),
    [_appEl_9]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_9_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__after_view_component$46template.ViewAfterViewParentComponent0, {
    /*src__after_view_component$46template.ViewAfterViewParentComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__after_view_component$46template.viewFactory_AfterViewParentComponent0 = function(parentView, parentIndex) {
    return new src__after_view_component$46template.ViewAfterViewParentComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__after_view_component$46template.viewFactory_AfterViewParentComponent0, AppViewAndintToAppViewOfAfterViewParentComponent());
  src__after_view_component$46template._ViewAfterViewParentComponent1 = class _ViewAfterViewParentComponent1 extends src__core__linker__app_view.AppView$(src__after_view_component.AfterViewParentComponent) {
    build() {
      this[_compView_0] = new src__after_view_component$46template.ViewAfterViewComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_AfterViewComponent_0_5] = new src__after_view_component.AfterViewComponent.new(src__logger_service.LoggerService._check(this.parentView.parentView.injectorGet(dart.wrapType(src__logger_service.LoggerService), this.parentView.viewData.parentIndex)));
      this[_compView_0].create(this[_AfterViewComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_0].detectChanges();
      if (firstCheck) {
        this[_AfterViewComponent_0_5].ngAfterViewInit();
      }
      this[_AfterViewComponent_0_5].ngAfterViewChecked();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__after_view_component$46template._ViewAfterViewParentComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_AfterViewComponent_0_5] = null;
    src__after_view_component$46template._ViewAfterViewParentComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__after_view_component$46template.ViewAfterViewParentComponent0._renderType;
  }).prototype = src__after_view_component$46template._ViewAfterViewParentComponent1.prototype;
  dart.addTypeTests(src__after_view_component$46template._ViewAfterViewParentComponent1);
  dart.setMethodSignature(src__after_view_component$46template._ViewAfterViewParentComponent1, () => ({
    __proto__: dart.getMethods(src__after_view_component$46template._ViewAfterViewParentComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__after_view_component.AfterViewParentComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__after_view_component$46template._ViewAfterViewParentComponent1, () => ({
    __proto__: dart.getFields(src__after_view_component$46template._ViewAfterViewParentComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(src__after_view_component$46template.ViewAfterViewComponent0),
    [_AfterViewComponent_0_5]: dart.fieldType(src__after_view_component.AfterViewComponent)
  }));
  src__after_view_component$46template.viewFactory_AfterViewParentComponent1 = function(parentView, parentIndex) {
    return new src__after_view_component$46template._ViewAfterViewParentComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__after_view_component$46template.viewFactory_AfterViewParentComponent1, AppViewAndintToAppViewOfAfterViewParentComponent());
  src__after_view_component$46template._ViewAfterViewParentComponent2 = class _ViewAfterViewParentComponent2 extends src__core__linker__app_view.AppView$(src__after_view_component.AfterViewParentComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this.addShimC(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_msg = core.String._check(this.locals[$_get]('$implicit'));
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_msg);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__after_view_component$46template._ViewAfterViewParentComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__after_view_component$46template._ViewAfterViewParentComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__after_view_component$46template.ViewAfterViewParentComponent0._renderType;
  }).prototype = src__after_view_component$46template._ViewAfterViewParentComponent2.prototype;
  dart.addTypeTests(src__after_view_component$46template._ViewAfterViewParentComponent2);
  dart.setMethodSignature(src__after_view_component$46template._ViewAfterViewParentComponent2, () => ({
    __proto__: dart.getMethods(src__after_view_component$46template._ViewAfterViewParentComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__after_view_component.AfterViewParentComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__after_view_component$46template._ViewAfterViewParentComponent2, () => ({
    __proto__: dart.getFields(src__after_view_component$46template._ViewAfterViewParentComponent2.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__after_view_component$46template.viewFactory_AfterViewParentComponent2 = function(parentView, parentIndex) {
    return new src__after_view_component$46template._ViewAfterViewParentComponent2.new(parentView, parentIndex);
  };
  dart.fn(src__after_view_component$46template.viewFactory_AfterViewParentComponent2, AppViewAndintToAppViewOfAfterViewParentComponent());
  dart.defineLazy(src__after_view_component$46template, {
    /*src__after_view_component$46template.styles$AfterViewParentComponentHost*/get styles$AfterViewParentComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _LoggerService_0_5 = Symbol('_LoggerService_0_5');
  const _AfterViewParentComponent_0_6 = Symbol('_AfterViewParentComponent_0_6');
  src__after_view_component$46template._ViewAfterViewParentComponentHost0 = class _ViewAfterViewParentComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__after_view_component$46template.ViewAfterViewParentComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_LoggerService_0_5] = new src__logger_service.LoggerService.new();
      this[_AfterViewParentComponent_0_6] = new src__after_view_component.AfterViewParentComponent.new(this[_LoggerService_0_5]);
      this[_compView_0].create(this[_AfterViewParentComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAfterViewParentComponent()).new(0, this, this.rootEl, this[_AfterViewParentComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__logger_service.LoggerService) && 0 === nodeIndex) {
        return this[_LoggerService_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__after_view_component$46template._ViewAfterViewParentComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_LoggerService_0_5] = null;
    this[_AfterViewParentComponent_0_6] = null;
    src__after_view_component$46template._ViewAfterViewParentComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__after_view_component$46template._ViewAfterViewParentComponentHost0.prototype;
  dart.addTypeTests(src__after_view_component$46template._ViewAfterViewParentComponentHost0);
  dart.setMethodSignature(src__after_view_component$46template._ViewAfterViewParentComponentHost0, () => ({
    __proto__: dart.getMethods(src__after_view_component$46template._ViewAfterViewParentComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__after_view_component$46template._ViewAfterViewParentComponentHost0, () => ({
    __proto__: dart.getFields(src__after_view_component$46template._ViewAfterViewParentComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__after_view_component$46template.ViewAfterViewParentComponent0),
    [_LoggerService_0_5]: dart.fieldType(src__logger_service.LoggerService),
    [_AfterViewParentComponent_0_6]: dart.fieldType(src__after_view_component.AfterViewParentComponent)
  }));
  src__after_view_component$46template.viewFactory_AfterViewParentComponentHost0 = function(parentView, parentIndex) {
    return new src__after_view_component$46template._ViewAfterViewParentComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__after_view_component$46template.viewFactory_AfterViewParentComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__after_view_component$46template, {
    /*src__after_view_component$46template.AfterViewParentComponentNgFactory*/get AfterViewParentComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAfterViewParentComponent()).new('after-view-parent', src__after_view_component$46template.viewFactory_AfterViewParentComponentHost0, src__after_view_component$46template._AfterViewParentComponentMetadata));
    },
    /*src__after_view_component$46template._ChildViewComponentMetadata*/get _ChildViewComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__after_view_component$46template._AfterViewComponentMetadata*/get _AfterViewComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__after_view_component$46template._AfterViewParentComponentMetadata*/get _AfterViewParentComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__after_view_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__after_view_component$46template.initReflector = function() {
    if (dart.test(src__after_view_component$46template._visited)) {
      return;
    }
    src__after_view_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__after_view_component.ChildViewComponent), src__after_view_component$46template.ChildViewComponentNgFactory);
    src__di__reflector.registerComponent(dart.wrapType(src__after_view_component.AfterViewComponent), src__after_view_component$46template.AfterViewComponentNgFactory);
    src__di__reflector.registerComponent(dart.wrapType(src__after_view_component.AfterViewParentComponent), src__after_view_component$46template.AfterViewParentComponentNgFactory);
    src__logger_service$46template.initReflector();
    angular$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.fn(src__after_view_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/lifecycle_hooks/src/after_view_component.template.ddc", {
    "package:lifecycle_hooks/src/after_view_component.template.dart": src__after_view_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["after_view_component.template.dart"],"names":[],"mappings":";;;;QA4Yc,IAAO;;;;;;;QAhHD,iCAAO;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAzPP,8DAAyB;YAAG;;;;;;;;;;;;;AAe5C,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAc,AAwVR,IAAO,SAxVS;AAC1B,iBAAK,GAAG,AAuVE,IAAO,qBAvVT,2CAAe,CAAC,GAAG,EAAE,SAAS,gBAAgB;AACtD,qCAAyB,GAAG,IAAI,gEAA4B,CAAC,WAAK;AAClE,gCAAoB,GAAG,oCAAC,+BAAyB;AACjD,wBAAY,GAAG,IAAI,qCAAe,CAAC,MAAM,0BAAoB;AAC7D,iBAAK,mBAAiB,CAAC,SAAS,kBAAa,CAmVnC,IAAO,QAAP,IAAO,QAnV6B,kCAAiB;AAC/D,iBAAK,mBAAiB,CAAC,QAAQ,kBAAa,CAkVlC,IAAO,kBAlV4B,+BAAyB;AACtE,UAAM,iBAAiB,kBAAY,OAAO,OAAO,CAAC,kBAAa,6BAAC,0CAAyB;AACzF,eAAI,CAAC,uDAAU,CAAC,cAAc;AAC9B,YAAO;IACT;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,UAAK,AAAU,KAAK,KAAU,2EAAoB,IAAM,MAAK,SAAS,EAAI;AACxE,cAAO,gCAAyB;;AAElC,UAAK,AAAU,KAAK,MAAE,qCAAM,wCAAkD,CAAC,yBAAwB,MAAK,SAAS,EAAI;AACvH,cAAO,2BAAoB;;AAE7B,WAAM,AAAU,KAAK,KAAU,gDAAO,IAAK,AAAU,KAAK,KAAW,oDAAS,KAAO,MAAK,SAAS,EAAI;AACrG,cAAO,mBAAY;;AAErB,YAAO,eAAc;IACvB;;AAIE,UAAiC,OAAO,QAAG;AAC3C,UAAK,UAAU;AACf,UAAK,aAAc,YAAY,KAAI;AACnC,aAAO,GAAG;AACV,wBAAY,MAAM,GAAG,IAAI,KAAK;AAC9B,wBAAY,eAAe;AAC3B,UAAI,UAAU,EAAE;AACd,0BAAY,SAAS;;IAEzB;gCAE+B,MAAM;AACnC,cAAG,KAAK,sBAAG,MAAM;IACnB;wBAEuB,MAAM;AAC3B,gDAAyB,oCAAU,MAAM;IAC3C;;+EAtDwB,UAA2B,EAAE,WAAe;IAL/C,WAAK;IACG,+BAAyB;IACV,0BAAoB;IAChD,kBAAY;AAE4C,0FAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACxK,eAAM,GAAG,AAgWC,IAAO,oBAhWR,AAAQ,AAgWP,IAAO,SAhWQ,gBAAc,CAAC;AACxC,oFAAW;gBAAX,wEAAW,GAAK,AAAQ,AA+OR,iCAAO,aA/Oa,iBAAiB,CAAC,IAAI,2CAAiB,KAAK,EAAE,8DAAyB;AAC3G,2BAAkB,CAAC,wEAAW;EAChC;;;;;;;;;;;;4BA6VY,IAAO;;;;;;MAlWQ,wEAAW;;;;;kFA0D4B,UAA2B,EAAE,WAAe;AAC9G,UAAO,KAAI,gEAAuB,CAAC,UAAU,EAAE,WAAW;EAC5D;;;MAEoB,kEAA6B;YAAG;;;;;;;AAQhD,uBAAW,GAAG,IAAI,gEAAuB,CAAC,MAAM;AAChD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,mCAAuB,GAAG,IAAI,gDAA0B;AACxD,uBAAW,OAAO,CAAC,6BAAuB,EAAE,qBAAgB;AAC5D,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,wCAAwC,CAAC,GAAG,MAAM,WAAM,EAAE,6BAAuB;IAC9F;;AAIE,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;oFAnB6B,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,6BAAuB;AAC2B,+FAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;sFAsBjI,UAA2B,EAAE,WAAe;AACtF,UAAO,KAAI,qEAA4B,CAAC,UAAU,EAAE,WAAW;EACjE;;;MAEmD,gEAA2B;YAAG,gBAAM,4CAA4C,CAAC,iBAAiB,wEAAmC,EAAE,gEAA2B;;MACjM,8DAAyB;YAAG;;;;;;;;;;;;;AAmB5C,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAc,AA+OR,IAAO,SA/OS;AAC1B,iBAAK,GAAG,8CAAkB,CAAC,GAAG,EAAE,gBAAgB;AAChD,UAAa,UAAU,AAAI,AA6OjB,IAAO,SA7OsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,uBAAW,GAAG,IAAI,gEAAuB,CAAC,MAAM;AAChD,iBAAK,GAAG,iBAAW,OAAO;AAC1B,sBAAgB,SAAO,CAAC,WAAK;AAC7B,mCAAuB,GAAG,IAAI,gDAA0B;AACxD,uBAAW,OAAO,CAAC,6BAAuB,EAAE;AAC5C,iBAAK,GAAG,8CAAkB,CAAC,GAAG,EAAE,gBAAgB;AAChD,UAAa,UAAU,AAAI,AAqOjB,IAAO,SArOsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,sBAAgB,SAAO,CAAC,SAAS;AACjC,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACrD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,oEAA+B;AACxF,qBAAS,GAAG,IAAI,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC/C,cAAG,UAAU,GAAG,6BAAuB;AACvC,eAAI,CAAC,yDAAU;AACf,YAAO;IACT;;AAIE,UAAiC,OAAO,QAAG;AAC3C,qBAAS,KAAK,GAAG,IAAI,QAAQ,aAAW;AACxC,oBAAQ,2BAA2B;AACnC,uBAAW,cAAc;IAC3B;;AAIE,4BAAQ;;AACR,gCAAW;;IACb;;+EA3CwB,UAA2B,EAAE,WAAe;IAT/D,2CAAqC,GAAG;IAC1B,WAAK;IACR,WAAK;IACG,iBAAW;IACR,6BAAuB;IAC/B,WAAK;IACV,cAAQ;IACjB,eAAS;AAE0D,0FAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACxK,eAAM,GAAG,AAuPC,IAAO,oBAvPR,AAAQ,AAuPP,IAAO,SAvPQ,gBAAc,CAAC;AACxC,oFAAW;gBAAX,wEAAW,GAAK,AAAQ,AAsIR,iCAAO,aAtIa,iBAAiB,CAAC,IAAI,2CAAiB,KAAK,EAAE,8DAAyB;AAC3G,2BAAkB,CAAC,wEAAW;EAChC;;;;;;;;;;;4BAoPY,IAAO;4BAAP,IAAO;;;4BAAP,IAAO;;;;;MAzPQ,wEAAW;;;;;kFA+C4B,UAA2B,EAAE,WAAe;AAC9G,UAAO,KAAI,gEAAuB,CAAC,UAAU,EAAE,WAAW;EAC5D;;;;;;AAWI,UAAI,MAAc,AA6LR,IAAO,SA7LS;AAC1B,iBAAK,GAAG,GAAG,gBAAc,CAAC;AAC1B,iBAAK,UAAU,GAAG;AAClB,mBAAO,GAAG,AAAI,AA0LJ,IAAO,SA1LS,CAAC;AAC3B,iBAAK,SAAO,CAAC,aAAO;AACpB,gBAAK,CAAC,WAAK;AACX,YAAO;IACT;;AAIE,UAAiC,OAAO,QAAG;AAC3C,cAAmB,IAAI,QAAQ;UAAzB,4BAA6B;AACnC,YAAK,AAAU,aAAO,KAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,GAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;IAEvB;;gFAtByB,UAA2B,EAAE,WAAe;IAHrD,WAAK;IACR,aAAO;IAChB,aAAO;AAC8D,2FAAM,qCAAgB,SAAS,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACxK,sBAAa,GAAG,4DAAuB,YAAY;EACrD;;;;;;;;;4BAgMY,IAAO;8BAAP,IAAO;;;kFAzK+C,UAA2B,EAAE,WAAe;AAC9G,UAAO,KAAI,iEAAwB,CAAC,UAAU,EAAE,WAAW;EAC7D;;;MAEoB,kEAA6B;YAAG;;;;;;AAQhD,uBAAW,GAAG,IAAI,gEAAuB,CAAC,MAAM;AAChD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,mCAAuB,GAAG,IAAI,gDAA0B,0CAAC,gBAAgB,CAAU,gDAAa,EAAE,aAAQ,YAAY;AACtH,uBAAW,OAAO,CAAC,6BAAuB,EAAE,qBAAgB;AAC5D,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,wCAAwC,CAAC,GAAG,MAAM,WAAM,EAAE,6BAAuB;IAC9F;;AAIE,UAAK,aAAc,YAAY,KAAI;AACnC,uBAAW,cAAc;AACzB,UAAI,UAAU,EAAE;AACd,qCAAuB,gBAAgB;;AAEzC,mCAAuB,mBAAmB;IAC5C;;AAIE,+BAAW;;IACb;;oFAxB6B,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,6BAAuB;AAC2B,+FAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;sFA2BjI,UAA2B,EAAE,WAAe;AACtF,UAAO,KAAI,qEAA4B,CAAC,UAAU,EAAE,WAAW;EACjE;;;MAEmD,gEAA2B;YAAG,gBAAM,4CAA4C,CAAC,cAAc,wEAAmC,EAAE,gEAA2B;;MAC9L,oEAA+B;YAAG,iBAAO;;;;;;;;;;;;;;;AAqBzD,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAc,AAyGR,IAAO,SAzGS;AAC1B,iBAAK,GAAG,8CAAkB,CAAC,GAAG,EAAE,gBAAgB;AAChD,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,iBAAK,GAAG,2CAAe,CAAC,GAAG,EAAE,MAAM,WAAK;AACxC,mBAAQ,CAAC,WAAK;AACd,UAAa,UAAU,AAAI,AAmGjB,IAAO,SAnGsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,iBAAK,SAAO,CAAC,SAAS;AACtB,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAClD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,0EAAqC;AAC9F,qBAAS,GAAG,IAAI,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC/C,iBAAK,GAAG,2CAAe,CAAC,GAAG,EAAE,MAAM,WAAK;AACxC,mBAAQ,CAAC,WAAK;AACd,UAAa,UAAU,AAAI,AA0FjB,IAAO,SA1FsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,iBAAK,GAAG,2CAAe,CAAC,GAAG,EAAE,KAAK,WAAK;AACvC,mBAAQ,CAAC,WAAK;AACd,iBAAK,GAAG,AAsFE,IAAO,sBAtFT,2CAAe,CAAC,GAAG,EAAE,UAAU,WAAK;AAC5C,mBAAQ,CAAC,WAAK;AACd,UAAa,UAAU,AAAI,AAoFjB,IAAO,SApFsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,iBAAK,SAAO,CAAC,SAAS;AACtB,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAClD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,0EAAqC;AAC9F,sBAAU,GAAG,IAAI,yCAAc,CAAC,cAAQ,EAAE,gBAAgB;AAC1D,iBAAK,mBAAiB,CAAC,SAAS,kBAAa,CA6EnC,IAAO,kBA7E6B,QAAG;AACjD,eAAI,CAAC,yDAAU;AACf,YAAO;IACT;;AAIE,UAAuC,OAAO,QAAG;AACjD,qBAAS,KAAK,GAAG,IAAI,KAAK;AAC1B,UAAM,YAAY,IAAI,KAAK;AAC3B,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,wBAAU,QAAQ,GAAG,SAAS;AAC9B,qBAAO,GAAG,SAAS;;AAErB,sBAAU,UAAU;AACpB,oBAAQ,2BAA2B;AACnC,oBAAQ,2BAA2B;IACrC;;AAIE,4BAAQ;;AACR,6BAAQ;;IACV;;qFA5D8B,UAA2B,EAAE,WAAe;IAXvD,WAAK;IACR,WAAK;IACP,cAAQ;IACjB,eAAS;IACE,WAAK;IACL,WAAK;IACC,WAAK;IACb,cAAQ;IACP,gBAAU;IACrB,aAAO;AAEmE,gGAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC9K,eAAM,GAAG,AAiHC,IAAO,oBAjHR,AAAQ,AAiHP,IAAO,SAjHQ,gBAAc,CAAC;AACxC,0FAAW;gBAAX,8EAAW,GAAK,AAAA,AAAQ,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,SAAS,EAAE,oEAA+B;AACrH,2BAAkB,CAAC,8EAAW;EAChC;;;;;;;;;;4BA8GY,IAAO;4BAAP,IAAO;;;4BAAP,IAAO;4BAAP,IAAO;4BAAP,IAAO;;;;;;MAnHQ,8EAAW;;;;;wFAgEwC,UAA2B,EAAE,WAAe;AAC1H,UAAO,KAAI,sEAA6B,CAAC,UAAU,EAAE,WAAW;EAClE;;;;AAWI,uBAAW,GAAG,IAAI,gEAAuB,CAAC,MAAM;AAChD,iBAAK,GAAG,iBAAW,OAAO;AAC1B,mBAAQ,CAAC,AAoCC,IAAO,oBApCR,WAAK;AACd,mCAAuB,GAAG,IAAI,gDAA0B,0CAAC,eAAU,WAAW,YAAY,CAAU,gDAAa,EAAE,eAAU,SAAS,YAAY;AAClJ,uBAAW,OAAO,CAAC,6BAAuB,EAAE;AAC5C,gBAAK,CAAC,WAAK;AACX,YAAO;IACT;;AAIE,UAAK,aAAc,YAAY,KAAI;AACnC,uBAAW,cAAc;AACzB,UAAI,UAAU,EAAE;AACd,qCAAuB,gBAAgB;;AAEzC,mCAAuB,mBAAmB;IAC5C;;AAIE,+BAAW;;IACb;;sFA3B+B,UAA2B,EAAE,WAAe;IAH3D,WAAK;IACG,iBAAW;IACR,6BAAuB;AAC6B,iGAAM,qCAAgB,SAAS,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC9K,sBAAa,GAAG,kEAA6B,YAAY;EAC3D;;;;;;;;;;4BAyCY,IAAO;;;;wFAb2D,UAA2B,EAAE,WAAe;AAC1H,UAAO,KAAI,uEAA8B,CAAC,UAAU,EAAE,WAAW;EACnE;;;;AAWI,UAAI,MAAM,AAAQ,IAAD,SAAS;AAC1B,iBAAK,GADK,AACF,IADS,mBACT,GAAG,gBAAc,CAAC;AAC1B,mBAAQ,CAAC,WAAK;AACd,mBAAO,GAHG,AAGA,AAAI,IAHG,SAGS,CAAC;AAC3B,iBAAK,SAAO,CAAC,aAAO;AACpB,gBAAK,CAAC,WAAK;AACX,YAAO;IACT;;AAIE,UAAa,+BAAY,WAAM,QAAC;AAChC,UAAM,YA5HU,AA4HE,AAAQ,iCA5HH,aA4He,CAAC,SAAS;AAChD,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,sBAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;IAEvB;;sFAtB+B,UAA2B,EAAE,WAAe;IAHxD,WAAK;IACX,aAAO;IAChB,aAAO;AACoE,iGAAM,qCAAgB,SAAS,EAAE,0CAAC,aAAc,QAAO,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAChM,sBAAa,GAAG,kEAA6B,YAAY;EAC3D;;;;;;;;;4BAGY,IAAO;8BAAP,IAAO;;;wFAoB2D,UAA2B,EAAE,WAAe;AAC1H,UAAO,KAAI,uEAA8B,CAAC,UAAU,EAAE,WAAW;EACnE;;;MAEoB,wEAAmC;YAAG;;;;;;;AAStD,uBAAW,GAAG,IAAI,sEAA6B,CAAC,MAAM;AACtD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,8BAAkB,GAAG,IAAI,qCAAsB;AAC/C,yCAA6B,GAAG,IAAI,sDAAgC,CAAC,wBAAkB;AACvF,uBAAW,OAAO,CAAC,mCAA6B,EAAE,qBAAgB;AAClE,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,8CAA8C,CAAC,GAAG,MAAM,WAAM,EAAE,mCAA6B;IAC1G;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,UAAK,AAAU,KAAK,KAAW,gDAAa,IAAM,MAAK,SAAS,EAAI;AAClE,cAAO,yBAAkB;;AAE3B,YAAO,eAAc;IACvB;;AAIE,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;0FA5BmC,UAA2B,EAAE,WAAe;IAHjD,iBAAW;IAClB,wBAAkB;IACR,mCAA6B;AACqB,qGAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;;;4FA+BjI,UAA2B,EAAE,WAAe;AAC5F,UAAO,KAAI,2EAAkC,CAAC,UAAU,EAAE,WAAW;EACvE;;;MAEyD,sEAAiC;YAAG,gBAAM,kDAAkD,CAAC,qBAAqB,8EAAyC,EAAE,sEAAiC;;MACjP,gEAA2B;YAAG;;MAC9B,gEAA2B;YAAG;;MAC9B,sEAAiC;YAAG;;MACtC,6CAAQ;YAAG;;;;;AAEb,kBAAI,6CAAQ,GAAE;AACZ;;AAEF,oDAAW;AAEX,IAAO,oCAAiB,CAAC,2DAAkB,EAAE,gEAA2B;AACxE,IAAO,oCAAiB,CAAC,2DAAkB,EAAE,gEAA2B;AACxE,IAAO,oCAAiB,CAAC,iEAAwB,EAAE,sEAAiC;AACpF,IAAM,4CAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,sCAAa;EACrB","file":"after_view_component.template.ddc.js"}');
  // Exports:
  return {
    src__after_view_component$46template: src__after_view_component$46template
  };
});

//# sourceMappingURL=after_view_component.template.ddc.js.map
