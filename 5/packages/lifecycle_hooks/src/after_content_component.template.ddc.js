define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_forms/src/directives/default_value_accessor', 'packages/angular_forms/src/directives/control_value_accessor', 'packages/angular_forms/src/directives/ng_model', 'packages/angular/src/core/di/opaque_token', 'packages/angular_forms/src/directives/control_container', 'packages/lifecycle_hooks/src/after_content_component', 'packages/angular/src/common/directives/ng_if', 'packages/lifecycle_hooks/src/logger_service', 'packages/angular/src/common/directives/ng_for', 'packages/angular/src/di/reflector', 'packages/lifecycle_hooks/src/logger_service.template', 'packages/angular/angular.template', 'packages/angular_forms/angular_forms.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, default_value_accessor, control_value_accessor, ng_model, opaque_token, control_container, after_content_component, ng_if, logger_service, ng_for, reflector, logger_service$, angular, angular_forms) {
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
  const src__after_content_component = after_content_component.src__after_content_component;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const src__logger_service = logger_service.src__logger_service;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__di__reflector = reflector.src__di__reflector;
  const src__logger_service$46template = logger_service$.src__logger_service$46template;
  const angular$46template = angular.angular$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const _root = Object.create(null);
  const src__after_content_component$46template = Object.create(_root);
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
  let AppViewOfChildComponent = () => (AppViewOfChildComponent = dart.constFn(src__core__linker__app_view.AppView$(src__after_content_component.ChildComponent)))();
  let AppViewAndintToAppViewOfChildComponent = () => (AppViewAndintToAppViewOfChildComponent = dart.constFn(dart.fnType(AppViewOfChildComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfChildComponent = () => (ComponentRefOfChildComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__after_content_component.ChildComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfChildComponent = () => (ComponentFactoryOfChildComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__after_content_component.ChildComponent)))();
  let AppViewOfAfterContentComponent = () => (AppViewOfAfterContentComponent = dart.constFn(src__core__linker__app_view.AppView$(src__after_content_component.AfterContentComponent)))();
  let AppViewAndintToAppViewOfAfterContentComponent = () => (AppViewAndintToAppViewOfAfterContentComponent = dart.constFn(dart.fnType(AppViewOfAfterContentComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfAfterContentComponent = () => (ComponentRefOfAfterContentComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__after_content_component.AfterContentComponent)))();
  let ComponentFactoryOfAfterContentComponent = () => (ComponentFactoryOfAfterContentComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__after_content_component.AfterContentComponent)))();
  let AppViewOfAfterContentParentComponent = () => (AppViewOfAfterContentParentComponent = dart.constFn(src__core__linker__app_view.AppView$(src__after_content_component.AfterContentParentComponent)))();
  let AppViewAndintToAppViewOfAfterContentParentComponent = () => (AppViewAndintToAppViewOfAfterContentParentComponent = dart.constFn(dart.fnType(AppViewOfAfterContentParentComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let ComponentRefOfAfterContentParentComponent = () => (ComponentRefOfAfterContentParentComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__after_content_component.AfterContentParentComponent)))();
  let ComponentFactoryOfAfterContentParentComponent = () => (ComponentFactoryOfAfterContentParentComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__after_content_component.AfterContentParentComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__after_content_component$46template, {
    /*src__after_content_component$46template.styles$ChildComponent*/get styles$ChildComponent() {
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
  src__after_content_component$46template.ViewChildComponent0 = class ViewChildComponent0 extends src__core__linker__app_view.AppView$(src__after_content_component.ChildComponent) {
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
  (src__after_content_component$46template.ViewChildComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_DefaultValueAccessor_0_5] = null;
    this[_NgValueAccessor_0_6] = null;
    this[_NgModel_0_7] = null;
    src__after_content_component$46template.ViewChildComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-child'));
    let t = src__after_content_component$46template.ViewChildComponent0._renderType;
    t == null ? src__after_content_component$46template.ViewChildComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__after_content_component$46template.styles$ChildComponent) : t;
    this.setupComponentType(src__after_content_component$46template.ViewChildComponent0._renderType);
  }).prototype = src__after_content_component$46template.ViewChildComponent0.prototype;
  dart.addTypeTests(src__after_content_component$46template.ViewChildComponent0);
  dart.setMethodSignature(src__after_content_component$46template.ViewChildComponent0, () => ({
    __proto__: dart.getMethods(src__after_content_component$46template.ViewChildComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__after_content_component.ChildComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_ngModelChange_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_input_0_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__after_content_component$46template.ViewChildComponent0, () => ({
    __proto__: dart.getFields(src__after_content_component$46template.ViewChildComponent0.__proto__),
    [_el_0]: dart.fieldType(html.InputElement),
    [_DefaultValueAccessor_0_5]: dart.fieldType(src__directives__default_value_accessor.DefaultValueAccessor),
    [_NgValueAccessor_0_6]: dart.fieldType(ListOfControlValueAccessor()),
    [_NgModel_0_7]: dart.fieldType(src__directives__ng_model.NgModel)
  }));
  dart.defineLazy(src__after_content_component$46template.ViewChildComponent0, {
    /*src__after_content_component$46template.ViewChildComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__after_content_component$46template.viewFactory_ChildComponent0 = function(parentView, parentIndex) {
    return new src__after_content_component$46template.ViewChildComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__after_content_component$46template.viewFactory_ChildComponent0, AppViewAndintToAppViewOfChildComponent());
  dart.defineLazy(src__after_content_component$46template, {
    /*src__after_content_component$46template.styles$ChildComponentHost*/get styles$ChildComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _ChildComponent_0_5 = Symbol('_ChildComponent_0_5');
  src__after_content_component$46template._ViewChildComponentHost0 = class _ViewChildComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__after_content_component$46template.ViewChildComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ChildComponent_0_5] = new src__after_content_component.ChildComponent.new();
      this[_compView_0].create(this[_ChildComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfChildComponent()).new(0, this, this.rootEl, this[_ChildComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__after_content_component$46template._ViewChildComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ChildComponent_0_5] = null;
    src__after_content_component$46template._ViewChildComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__after_content_component$46template._ViewChildComponentHost0.prototype;
  dart.addTypeTests(src__after_content_component$46template._ViewChildComponentHost0);
  dart.setMethodSignature(src__after_content_component$46template._ViewChildComponentHost0, () => ({
    __proto__: dart.getMethods(src__after_content_component$46template._ViewChildComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__after_content_component$46template._ViewChildComponentHost0, () => ({
    __proto__: dart.getFields(src__after_content_component$46template._ViewChildComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__after_content_component$46template.ViewChildComponent0),
    [_ChildComponent_0_5]: dart.fieldType(src__after_content_component.ChildComponent)
  }));
  src__after_content_component$46template.viewFactory_ChildComponentHost0 = function(parentView, parentIndex) {
    return new src__after_content_component$46template._ViewChildComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__after_content_component$46template.viewFactory_ChildComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__after_content_component$46template, {
    /*src__after_content_component$46template.ChildComponentNgFactory*/get ChildComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfChildComponent()).new('my-child', src__after_content_component$46template.viewFactory_ChildComponentHost0, src__after_content_component$46template._ChildComponentMetadata));
    },
    /*src__after_content_component$46template.styles$AfterContentComponent*/get styles$AfterContentComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_2 = Symbol('_el_2');
  const _appEl_4 = Symbol('_appEl_4');
  const _NgIf_4_9 = Symbol('_NgIf_4_9');
  let const$1;
  src__after_content_component$46template.ViewAfterContentComponent0 = class ViewAfterContentComponent0 extends src__core__linker__app_view.AppView$(src__after_content_component.AfterContentComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      let _text_1 = html.Text.new('-- projected content begins --');
      this[_el_0][$append](_text_1);
      this.project(parentRenderNode, 0);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      let _text_3 = html.Text.new('-- projected content ends --');
      this[_el_2][$append](_text_3);
      let _anchor_4 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_4);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, null, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], src__after_content_component$46template.viewFactory_AfterContentComponent1);
      this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      this.init(const$1 || (const$1 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_4_9].ngIf = _ctx.comment[$isNotEmpty];
      this[_appEl_4].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_4];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__after_content_component$46template.ViewAfterContentComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    src__after_content_component$46template.ViewAfterContentComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('after-content'));
    let t = src__after_content_component$46template.ViewAfterContentComponent0._renderType;
    t == null ? src__after_content_component$46template.ViewAfterContentComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__after_content_component$46template.styles$AfterContentComponent) : t;
    this.setupComponentType(src__after_content_component$46template.ViewAfterContentComponent0._renderType);
  }).prototype = src__after_content_component$46template.ViewAfterContentComponent0.prototype;
  dart.addTypeTests(src__after_content_component$46template.ViewAfterContentComponent0);
  dart.setMethodSignature(src__after_content_component$46template.ViewAfterContentComponent0, () => ({
    __proto__: dart.getMethods(src__after_content_component$46template.ViewAfterContentComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__after_content_component.AfterContentComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__after_content_component$46template.ViewAfterContentComponent0, () => ({
    __proto__: dart.getFields(src__after_content_component$46template.ViewAfterContentComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.DivElement),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  dart.defineLazy(src__after_content_component$46template.ViewAfterContentComponent0, {
    /*src__after_content_component$46template.ViewAfterContentComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__after_content_component$46template.viewFactory_AfterContentComponent0 = function(parentView, parentIndex) {
    return new src__after_content_component$46template.ViewAfterContentComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__after_content_component$46template.viewFactory_AfterContentComponent0, AppViewAndintToAppViewOfAfterContentComponent());
  const _text_1 = Symbol('_text_1');
  const _expr_0 = Symbol('_expr_0');
  src__after_content_component$46template._ViewAfterContentComponent1 = class _ViewAfterContentComponent1 extends src__core__linker__app_view.AppView$(src__after_content_component.AfterContentComponent) {
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
  (src__after_content_component$46template._ViewAfterContentComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__after_content_component$46template._ViewAfterContentComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__after_content_component$46template.ViewAfterContentComponent0._renderType;
  }).prototype = src__after_content_component$46template._ViewAfterContentComponent1.prototype;
  dart.addTypeTests(src__after_content_component$46template._ViewAfterContentComponent1);
  dart.setMethodSignature(src__after_content_component$46template._ViewAfterContentComponent1, () => ({
    __proto__: dart.getMethods(src__after_content_component$46template._ViewAfterContentComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__after_content_component.AfterContentComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__after_content_component$46template._ViewAfterContentComponent1, () => ({
    __proto__: dart.getFields(src__after_content_component$46template._ViewAfterContentComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__after_content_component$46template.viewFactory_AfterContentComponent1 = function(parentView, parentIndex) {
    return new src__after_content_component$46template._ViewAfterContentComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__after_content_component$46template.viewFactory_AfterContentComponent1, AppViewAndintToAppViewOfAfterContentComponent());
  dart.defineLazy(src__after_content_component$46template, {
    /*src__after_content_component$46template.styles$AfterContentComponentHost*/get styles$AfterContentComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _AfterContentComponent_0_5 = Symbol('_AfterContentComponent_0_5');
  const _query_ChildComponent_0_0_isDirty = Symbol('_query_ChildComponent_0_0_isDirty');
  src__after_content_component$46template._ViewAfterContentComponentHost0 = class _ViewAfterContentComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__after_content_component$46template.ViewAfterContentComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_AfterContentComponent_0_5] = new src__after_content_component.AfterContentComponent.new(src__logger_service.LoggerService._check(this.injectorGet(dart.wrapType(src__logger_service.LoggerService), this.viewData.parentIndex)));
      this[_compView_0].create(this[_AfterContentComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAfterContentComponent()).new(0, this, this.rootEl, this[_AfterContentComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_AfterContentComponent_0_5].ngAfterContentInit();
      }
      this[_AfterContentComponent_0_5].ngAfterContentChecked();
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__after_content_component$46template._ViewAfterContentComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AfterContentComponent_0_5] = null;
    this[_query_ChildComponent_0_0_isDirty] = true;
    src__after_content_component$46template._ViewAfterContentComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__after_content_component$46template._ViewAfterContentComponentHost0.prototype;
  dart.addTypeTests(src__after_content_component$46template._ViewAfterContentComponentHost0);
  dart.setMethodSignature(src__after_content_component$46template._ViewAfterContentComponentHost0, () => ({
    __proto__: dart.getMethods(src__after_content_component$46template._ViewAfterContentComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__after_content_component$46template._ViewAfterContentComponentHost0, () => ({
    __proto__: dart.getFields(src__after_content_component$46template._ViewAfterContentComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__after_content_component$46template.ViewAfterContentComponent0),
    [_AfterContentComponent_0_5]: dart.fieldType(src__after_content_component.AfterContentComponent),
    [_query_ChildComponent_0_0_isDirty]: dart.fieldType(core.bool)
  }));
  src__after_content_component$46template.viewFactory_AfterContentComponentHost0 = function(parentView, parentIndex) {
    return new src__after_content_component$46template._ViewAfterContentComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__after_content_component$46template.viewFactory_AfterContentComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__after_content_component$46template, {
    /*src__after_content_component$46template.AfterContentComponentNgFactory*/get AfterContentComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAfterContentComponent()).new('after-content', src__after_content_component$46template.viewFactory_AfterContentComponentHost0, src__after_content_component$46template._AfterContentComponentMetadata));
    },
    /*src__after_content_component$46template.styles$AfterContentParentComponent*/get styles$AfterContentParentComponent() {
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
  src__after_content_component$46template.ViewAfterContentParentComponent0 = class ViewAfterContentParentComponent0 extends src__core__linker__app_view.AppView$(src__after_content_component.AfterContentParentComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'parent';
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_0]);
      this.addShimE(this[_el_1]);
      let _text_2 = html.Text.new('AfterContent');
      this[_el_1][$append](_text_2);
      let _anchor_3 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_3);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 0, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], src__after_content_component$46template.viewFactory_AfterContentParentComponent1);
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      this[_el_4] = src__core__linker__app_view.createAndAppend(doc, 'h4', this[_el_0]);
      this.addShimE(this[_el_4]);
      let _text_5 = html.Text.new('-- AfterContent Logs --');
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
      let _TemplateRef_9_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_9], src__after_content_component$46template.viewFactory_AfterContentParentComponent2);
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
  (src__after_content_component$46template.ViewAfterContentParentComponent0.new = function(parentView, parentIndex) {
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
    src__after_content_component$46template.ViewAfterContentParentComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('after-content-parent'));
    let t = src__after_content_component$46template.ViewAfterContentParentComponent0._renderType;
    t == null ? src__after_content_component$46template.ViewAfterContentParentComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__after_content_component$46template.styles$AfterContentParentComponent) : t;
    this.setupComponentType(src__after_content_component$46template.ViewAfterContentParentComponent0._renderType);
  }).prototype = src__after_content_component$46template.ViewAfterContentParentComponent0.prototype;
  dart.addTypeTests(src__after_content_component$46template.ViewAfterContentParentComponent0);
  dart.setMethodSignature(src__after_content_component$46template.ViewAfterContentParentComponent0, () => ({
    __proto__: dart.getMethods(src__after_content_component$46template.ViewAfterContentParentComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__after_content_component.AfterContentParentComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__after_content_component$46template.ViewAfterContentParentComponent0, () => ({
    __proto__: dart.getFields(src__after_content_component$46template.ViewAfterContentParentComponent0.__proto__),
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
  dart.defineLazy(src__after_content_component$46template.ViewAfterContentParentComponent0, {
    /*src__after_content_component$46template.ViewAfterContentParentComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__after_content_component$46template.viewFactory_AfterContentParentComponent0 = function(parentView, parentIndex) {
    return new src__after_content_component$46template.ViewAfterContentParentComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__after_content_component$46template.viewFactory_AfterContentParentComponent0, AppViewAndintToAppViewOfAfterContentParentComponent());
  const _compView_1 = Symbol('_compView_1');
  const _AfterContentComponent_1_5 = Symbol('_AfterContentComponent_1_5');
  const _query_ChildComponent_1_0_isDirty = Symbol('_query_ChildComponent_1_0_isDirty');
  const _compView_2 = Symbol('_compView_2');
  const _ChildComponent_2_5 = Symbol('_ChildComponent_2_5');
  src__after_content_component$46template._ViewAfterContentParentComponent1 = class _ViewAfterContentParentComponent1 extends src__core__linker__app_view.AppView$(src__after_content_component.AfterContentParentComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this.addShimC(this[_el_0]);
      this[_compView_1] = new src__after_content_component$46template.ViewAfterContentComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_AfterContentComponent_1_5] = new src__after_content_component.AfterContentComponent.new(src__logger_service.LoggerService._check(this.parentView.parentView.injectorGet(dart.wrapType(src__logger_service.LoggerService), this.parentView.viewData.parentIndex)));
      this[_compView_2] = new src__after_content_component$46template.ViewChildComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_2]));
      this[_ChildComponent_2_5] = new src__after_content_component.ChildComponent.new();
      this[_compView_2].create(this[_ChildComponent_2_5], []);
      this[_AfterContentComponent_1_5].contentChild = this[_ChildComponent_2_5];
      this[_compView_1].create(this[_AfterContentComponent_1_5], [JSArrayOfElement().of([this[_el_2]])]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_AfterContentComponent_1_5].ngAfterContentInit();
      }
      this[_AfterContentComponent_1_5].ngAfterContentChecked();
      this[_compView_1].detectChanges();
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_1];
      t == null ? null : t.destroy();
      let t$ = this[_compView_2];
      t$ == null ? null : t$.destroy();
    }
  };
  (src__after_content_component$46template._ViewAfterContentParentComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_AfterContentComponent_1_5] = null;
    this[_query_ChildComponent_1_0_isDirty] = true;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_ChildComponent_2_5] = null;
    src__after_content_component$46template._ViewAfterContentParentComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__after_content_component$46template.ViewAfterContentParentComponent0._renderType;
  }).prototype = src__after_content_component$46template._ViewAfterContentParentComponent1.prototype;
  dart.addTypeTests(src__after_content_component$46template._ViewAfterContentParentComponent1);
  dart.setMethodSignature(src__after_content_component$46template._ViewAfterContentParentComponent1, () => ({
    __proto__: dart.getMethods(src__after_content_component$46template._ViewAfterContentParentComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__after_content_component.AfterContentParentComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__after_content_component$46template._ViewAfterContentParentComponent1, () => ({
    __proto__: dart.getFields(src__after_content_component$46template._ViewAfterContentParentComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(src__after_content_component$46template.ViewAfterContentComponent0),
    [_AfterContentComponent_1_5]: dart.fieldType(src__after_content_component.AfterContentComponent),
    [_query_ChildComponent_1_0_isDirty]: dart.fieldType(core.bool),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(src__after_content_component$46template.ViewChildComponent0),
    [_ChildComponent_2_5]: dart.fieldType(src__after_content_component.ChildComponent)
  }));
  src__after_content_component$46template.viewFactory_AfterContentParentComponent1 = function(parentView, parentIndex) {
    return new src__after_content_component$46template._ViewAfterContentParentComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__after_content_component$46template.viewFactory_AfterContentParentComponent1, AppViewAndintToAppViewOfAfterContentParentComponent());
  src__after_content_component$46template._ViewAfterContentParentComponent2 = class _ViewAfterContentParentComponent2 extends src__core__linker__app_view.AppView$(src__after_content_component.AfterContentParentComponent) {
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
  (src__after_content_component$46template._ViewAfterContentParentComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__after_content_component$46template._ViewAfterContentParentComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__after_content_component$46template.ViewAfterContentParentComponent0._renderType;
  }).prototype = src__after_content_component$46template._ViewAfterContentParentComponent2.prototype;
  dart.addTypeTests(src__after_content_component$46template._ViewAfterContentParentComponent2);
  dart.setMethodSignature(src__after_content_component$46template._ViewAfterContentParentComponent2, () => ({
    __proto__: dart.getMethods(src__after_content_component$46template._ViewAfterContentParentComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__after_content_component.AfterContentParentComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__after_content_component$46template._ViewAfterContentParentComponent2, () => ({
    __proto__: dart.getFields(src__after_content_component$46template._ViewAfterContentParentComponent2.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__after_content_component$46template.viewFactory_AfterContentParentComponent2 = function(parentView, parentIndex) {
    return new src__after_content_component$46template._ViewAfterContentParentComponent2.new(parentView, parentIndex);
  };
  dart.fn(src__after_content_component$46template.viewFactory_AfterContentParentComponent2, AppViewAndintToAppViewOfAfterContentParentComponent());
  dart.defineLazy(src__after_content_component$46template, {
    /*src__after_content_component$46template.styles$AfterContentParentComponentHost*/get styles$AfterContentParentComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _LoggerService_0_5 = Symbol('_LoggerService_0_5');
  const _AfterContentParentComponent_0_6 = Symbol('_AfterContentParentComponent_0_6');
  src__after_content_component$46template._ViewAfterContentParentComponentHost0 = class _ViewAfterContentParentComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__after_content_component$46template.ViewAfterContentParentComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_LoggerService_0_5] = new src__logger_service.LoggerService.new();
      this[_AfterContentParentComponent_0_6] = new src__after_content_component.AfterContentParentComponent.new(this[_LoggerService_0_5]);
      this[_compView_0].create(this[_AfterContentParentComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAfterContentParentComponent()).new(0, this, this.rootEl, this[_AfterContentParentComponent_0_6]);
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
  (src__after_content_component$46template._ViewAfterContentParentComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_LoggerService_0_5] = null;
    this[_AfterContentParentComponent_0_6] = null;
    src__after_content_component$46template._ViewAfterContentParentComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__after_content_component$46template._ViewAfterContentParentComponentHost0.prototype;
  dart.addTypeTests(src__after_content_component$46template._ViewAfterContentParentComponentHost0);
  dart.setMethodSignature(src__after_content_component$46template._ViewAfterContentParentComponentHost0, () => ({
    __proto__: dart.getMethods(src__after_content_component$46template._ViewAfterContentParentComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__after_content_component$46template._ViewAfterContentParentComponentHost0, () => ({
    __proto__: dart.getFields(src__after_content_component$46template._ViewAfterContentParentComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__after_content_component$46template.ViewAfterContentParentComponent0),
    [_LoggerService_0_5]: dart.fieldType(src__logger_service.LoggerService),
    [_AfterContentParentComponent_0_6]: dart.fieldType(src__after_content_component.AfterContentParentComponent)
  }));
  src__after_content_component$46template.viewFactory_AfterContentParentComponentHost0 = function(parentView, parentIndex) {
    return new src__after_content_component$46template._ViewAfterContentParentComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__after_content_component$46template.viewFactory_AfterContentParentComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__after_content_component$46template, {
    /*src__after_content_component$46template.AfterContentParentComponentNgFactory*/get AfterContentParentComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAfterContentParentComponent()).new('after-content-parent', src__after_content_component$46template.viewFactory_AfterContentParentComponentHost0, src__after_content_component$46template._AfterContentParentComponentMetadata));
    },
    /*src__after_content_component$46template._ChildComponentMetadata*/get _ChildComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__after_content_component$46template._AfterContentComponentMetadata*/get _AfterContentComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__after_content_component$46template._AfterContentParentComponentMetadata*/get _AfterContentParentComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__after_content_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__after_content_component$46template.initReflector = function() {
    if (dart.test(src__after_content_component$46template._visited)) {
      return;
    }
    src__after_content_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__after_content_component.ChildComponent), src__after_content_component$46template.ChildComponentNgFactory);
    src__di__reflector.registerComponent(dart.wrapType(src__after_content_component.AfterContentComponent), src__after_content_component$46template.AfterContentComponentNgFactory);
    src__di__reflector.registerComponent(dart.wrapType(src__after_content_component.AfterContentParentComponent), src__after_content_component$46template.AfterContentParentComponentNgFactory);
    src__logger_service$46template.initReflector();
    angular$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.fn(src__after_content_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/lifecycle_hooks/src/after_content_component.template.ddc", {
    "package:lifecycle_hooks/src/after_content_component.template.dart": src__after_content_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["after_content_component.template.dart"],"names":[],"mappings":"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","file":"after_content_component.template.ddc.js"}');
  // Exports:
  return {
    src__after_content_component$46template: src__after_content_component$46template
  };
});

//# sourceMappingURL=after_content_component.template.ddc.js.map
