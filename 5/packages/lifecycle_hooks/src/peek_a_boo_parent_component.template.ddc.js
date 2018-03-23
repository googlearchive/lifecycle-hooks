define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_if', 'packages/angular/src/common/directives/ng_for', 'packages/lifecycle_hooks/src/peek_a_boo_parent_component', 'packages/lifecycle_hooks/src/peek_a_boo_component.template', 'packages/lifecycle_hooks/src/logger_service', 'packages/lifecycle_hooks/src/peek_a_boo_component', 'packages/angular/src/core/change_detection/change_detection_util', 'packages/angular/src/di/reflector', 'packages/lifecycle_hooks/src/logger_service.template', 'packages/angular/angular.template', 'packages/angular_forms/angular_forms.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, ng_if, ng_for, peek_a_boo_parent_component, peek_a_boo_component, logger_service, peek_a_boo_component$, change_detection_util, reflector, logger_service$, angular, angular_forms) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__peek_a_boo_parent_component = peek_a_boo_parent_component.src__peek_a_boo_parent_component;
  const src__peek_a_boo_component$46template = peek_a_boo_component.src__peek_a_boo_component$46template;
  const src__logger_service = logger_service.src__logger_service;
  const src__peek_a_boo_component = peek_a_boo_component$.src__peek_a_boo_component;
  const src__core__change_detection__change_detection_util = change_detection_util.src__core__change_detection__change_detection_util;
  const src__di__reflector = reflector.src__di__reflector;
  const src__logger_service$46template = logger_service$.src__logger_service$46template;
  const angular$46template = angular.angular$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const _root = Object.create(null);
  const src__peek_a_boo_parent_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  const $_set = dartx._set;
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfPeekABooParentComponent = () => (AppViewOfPeekABooParentComponent = dart.constFn(src__core__linker__app_view.AppView$(src__peek_a_boo_parent_component.PeekABooParentComponent)))();
  let AppViewAndintToAppViewOfPeekABooParentComponent = () => (AppViewAndintToAppViewOfPeekABooParentComponent = dart.constFn(dart.fnType(AppViewOfPeekABooParentComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let IdentityMapOfString$SimpleChange = () => (IdentityMapOfString$SimpleChange = dart.constFn(_js_helper.IdentityMap$(core.String, src__core__change_detection__change_detection_util.SimpleChange)))();
  let ComponentRefOfPeekABooParentComponent = () => (ComponentRefOfPeekABooParentComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__peek_a_boo_parent_component.PeekABooParentComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfPeekABooParentComponent = () => (ComponentFactoryOfPeekABooParentComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__peek_a_boo_parent_component.PeekABooParentComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__peek_a_boo_parent_component$46template, {
    /*src__peek_a_boo_parent_component$46template.styles$PeekABooParentComponent*/get styles$PeekABooParentComponent() {
      return dart.constList(['.parent._ngcontent-%COMP% { background:moccasin; }'], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _el_3 = Symbol('_el_3');
  const _text_4 = Symbol('_text_4');
  const _el_6 = Symbol('_el_6');
  const _appEl_8 = Symbol('_appEl_8');
  const _NgIf_8_9 = Symbol('_NgIf_8_9');
  const _el_9 = Symbol('_el_9');
  const _appEl_11 = Symbol('_appEl_11');
  const _NgFor_11_9 = Symbol('_NgFor_11_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_3 = Symbol('_expr_3');
  let const$;
  src__peek_a_boo_parent_component$46template.ViewPeekABooParentComponent0 = class ViewPeekABooParentComponent0 extends src__core__linker__app_view.AppView$(src__peek_a_boo_parent_component.PeekABooParentComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'parent';
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_0]);
      this.addShimE(this[_el_1]);
      let _text_2 = html.Text.new('Peek-A-Boo');
      this[_el_1][$append](_text_2);
      this[_el_3] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_0]));
      this.addShimC(this[_el_3]);
      this[_text_4] = html.Text.new('');
      this[_el_3][$append](this[_text_4]);
      let _text_5 = html.Text.new('PeekABooComponent');
      this[_el_3][$append](_text_5);
      this[_el_6] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_0]));
      this.addShimC(this[_el_6]);
      let _text_7 = html.Text.new('Update Hero');
      this[_el_6][$append](_text_7);
      let _anchor_8 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_8);
      this[_appEl_8] = new src__core__linker__view_container.ViewContainer.new(8, 0, this, _anchor_8);
      let _TemplateRef_8_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_8], src__peek_a_boo_parent_component$46template.viewFactory_PeekABooParentComponent1);
      this[_NgIf_8_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_8], _TemplateRef_8_8);
      this[_el_9] = src__core__linker__app_view.createAndAppend(doc, 'h4', this[_el_0]);
      this.addShimE(this[_el_9]);
      let _text_10 = html.Text.new('-- Lifecycle Hook Log --');
      this[_el_9][$append](_text_10);
      let _anchor_11 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_11);
      this[_appEl_11] = new src__core__linker__view_container.ViewContainer.new(11, 0, this, _anchor_11);
      let _TemplateRef_11_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_11], src__peek_a_boo_parent_component$46template.viewFactory_PeekABooParentComponent2);
      this[_NgFor_11_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_11], _TemplateRef_11_8);
      this[_el_3][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'toggleChild')));
      this[_el_6][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'updateHero')));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_8_9].ngIf = _ctx.hasChild;
      let currVal_3 = _ctx.logs;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_NgFor_11_9].ngForOf = currVal_3;
        this[_expr_3] = currVal_3;
      }
      this[_NgFor_11_9].ngDoCheck();
      this[_appEl_8].detectChangesInNestedViews();
      this[_appEl_11].detectChangesInNestedViews();
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(dart.test(_ctx.hasChild) ? 'Destroy ' : 'Create ');
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_4][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = !dart.test(_ctx.hasChild);
      if (!(this[_expr_1] === currVal_1)) {
        this.setProp(this[_el_6], 'hidden', currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    destroyInternal() {
      let t = this[_appEl_8];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_11];
      t$ == null ? null : t$.destroyNestedViews();
    }
  };
  (src__peek_a_boo_parent_component$46template.ViewPeekABooParentComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_3] = null;
    this[_text_4] = null;
    this[_el_6] = null;
    this[_appEl_8] = null;
    this[_NgIf_8_9] = null;
    this[_el_9] = null;
    this[_appEl_11] = null;
    this[_NgFor_11_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_3] = null;
    src__peek_a_boo_parent_component$46template.ViewPeekABooParentComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('peek-a-boo-parent'));
    let t = src__peek_a_boo_parent_component$46template.ViewPeekABooParentComponent0._renderType;
    t == null ? src__peek_a_boo_parent_component$46template.ViewPeekABooParentComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__peek_a_boo_parent_component$46template.styles$PeekABooParentComponent) : t;
    this.setupComponentType(src__peek_a_boo_parent_component$46template.ViewPeekABooParentComponent0._renderType);
  }).prototype = src__peek_a_boo_parent_component$46template.ViewPeekABooParentComponent0.prototype;
  dart.addTypeTests(src__peek_a_boo_parent_component$46template.ViewPeekABooParentComponent0);
  dart.setMethodSignature(src__peek_a_boo_parent_component$46template.ViewPeekABooParentComponent0, () => ({
    __proto__: dart.getMethods(src__peek_a_boo_parent_component$46template.ViewPeekABooParentComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__peek_a_boo_parent_component.PeekABooParentComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__peek_a_boo_parent_component$46template.ViewPeekABooParentComponent0, () => ({
    __proto__: dart.getFields(src__peek_a_boo_parent_component$46template.ViewPeekABooParentComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.ButtonElement),
    [_text_4]: dart.fieldType(html.Text),
    [_el_6]: dart.fieldType(html.ButtonElement),
    [_appEl_8]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_8_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_9]: dart.fieldType(html.Element),
    [_appEl_11]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_11_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__peek_a_boo_parent_component$46template.ViewPeekABooParentComponent0, {
    /*src__peek_a_boo_parent_component$46template.ViewPeekABooParentComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__peek_a_boo_parent_component$46template.viewFactory_PeekABooParentComponent0 = function(parentView, parentIndex) {
    return new src__peek_a_boo_parent_component$46template.ViewPeekABooParentComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__peek_a_boo_parent_component$46template.viewFactory_PeekABooParentComponent0, AppViewAndintToAppViewOfPeekABooParentComponent());
  const _compView_0 = Symbol('_compView_0');
  const _PeekABooComponent_0_5 = Symbol('_PeekABooComponent_0_5');
  src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponent1 = class _ViewPeekABooParentComponent1 extends src__core__linker__app_view.AppView$(src__peek_a_boo_parent_component.PeekABooParentComponent) {
    build() {
      this[_compView_0] = new src__peek_a_boo_component$46template.ViewPeekABooComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_PeekABooComponent_0_5] = new src__peek_a_boo_component.PeekABooComponent.new(src__logger_service.LoggerService._check(this.parentView.parentView.injectorGet(dart.wrapType(src__logger_service.LoggerService), this.parentView.viewData.parentIndex)));
      this[_compView_0].create(this[_PeekABooComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changes = null;
      let firstCheck = this.cdState === 0;
      changes = null;
      let currVal_0 = _ctx.heroName;
      if (!(this[_expr_0] == currVal_0)) {
        this[_PeekABooComponent_0_5].name = currVal_0;
        let t = changes;
        t == null ? changes = new (IdentityMapOfString$SimpleChange()).new() : t;
        changes[$_set]('name', new src__core__change_detection__change_detection_util.SimpleChange.new(this[_expr_0], currVal_0));
        this[_expr_0] = currVal_0;
      }
      if (!(changes == null)) {
        this[_PeekABooComponent_0_5].ngOnChanges(changes);
      }
      if (firstCheck) {
        this[_PeekABooComponent_0_5].ngOnInit();
      }
      this[_PeekABooComponent_0_5].ngDoCheck();
      if (firstCheck) {
        this[_PeekABooComponent_0_5].ngAfterContentInit();
      }
      this[_PeekABooComponent_0_5].ngAfterContentChecked();
      this[_compView_0].detectChanges();
      if (firstCheck) {
        this[_PeekABooComponent_0_5].ngAfterViewInit();
      }
      this[_PeekABooComponent_0_5].ngAfterViewChecked();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_PeekABooComponent_0_5].ngOnDestroy();
    }
  };
  (src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_PeekABooComponent_0_5] = null;
    this[_expr_0] = null;
    src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__peek_a_boo_parent_component$46template.ViewPeekABooParentComponent0._renderType;
  }).prototype = src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponent1.prototype;
  dart.addTypeTests(src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponent1);
  dart.setMethodSignature(src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponent1, () => ({
    __proto__: dart.getMethods(src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__peek_a_boo_parent_component.PeekABooParentComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponent1, () => ({
    __proto__: dart.getFields(src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(src__peek_a_boo_component$46template.ViewPeekABooComponent0),
    [_PeekABooComponent_0_5]: dart.fieldType(src__peek_a_boo_component.PeekABooComponent),
    [_expr_0]: dart.fieldType(core.String)
  }));
  src__peek_a_boo_parent_component$46template.viewFactory_PeekABooParentComponent1 = function(parentView, parentIndex) {
    return new src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__peek_a_boo_parent_component$46template.viewFactory_PeekABooParentComponent1, AppViewAndintToAppViewOfPeekABooParentComponent());
  const _text_1 = Symbol('_text_1');
  src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponent2 = class _ViewPeekABooParentComponent2 extends src__core__linker__app_view.AppView$(src__peek_a_boo_parent_component.PeekABooParentComponent) {
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
  (src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__peek_a_boo_parent_component$46template.ViewPeekABooParentComponent0._renderType;
  }).prototype = src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponent2.prototype;
  dart.addTypeTests(src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponent2);
  dart.setMethodSignature(src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponent2, () => ({
    __proto__: dart.getMethods(src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__peek_a_boo_parent_component.PeekABooParentComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponent2, () => ({
    __proto__: dart.getFields(src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponent2.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__peek_a_boo_parent_component$46template.viewFactory_PeekABooParentComponent2 = function(parentView, parentIndex) {
    return new src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponent2.new(parentView, parentIndex);
  };
  dart.fn(src__peek_a_boo_parent_component$46template.viewFactory_PeekABooParentComponent2, AppViewAndintToAppViewOfPeekABooParentComponent());
  dart.defineLazy(src__peek_a_boo_parent_component$46template, {
    /*src__peek_a_boo_parent_component$46template.styles$PeekABooParentComponentHost*/get styles$PeekABooParentComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _LoggerService_0_5 = Symbol('_LoggerService_0_5');
  const _PeekABooParentComponent_0_6 = Symbol('_PeekABooParentComponent_0_6');
  src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponentHost0 = class _ViewPeekABooParentComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__peek_a_boo_parent_component$46template.ViewPeekABooParentComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_LoggerService_0_5] = new src__logger_service.LoggerService.new();
      this[_PeekABooParentComponent_0_6] = new src__peek_a_boo_parent_component.PeekABooParentComponent.new(this[_LoggerService_0_5]);
      this[_compView_0].create(this[_PeekABooParentComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfPeekABooParentComponent()).new(0, this, this.rootEl, this[_PeekABooParentComponent_0_6]);
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
  (src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_LoggerService_0_5] = null;
    this[_PeekABooParentComponent_0_6] = null;
    src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponentHost0.prototype;
  dart.addTypeTests(src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponentHost0);
  dart.setMethodSignature(src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponentHost0, () => ({
    __proto__: dart.getMethods(src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponentHost0, () => ({
    __proto__: dart.getFields(src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__peek_a_boo_parent_component$46template.ViewPeekABooParentComponent0),
    [_LoggerService_0_5]: dart.fieldType(src__logger_service.LoggerService),
    [_PeekABooParentComponent_0_6]: dart.fieldType(src__peek_a_boo_parent_component.PeekABooParentComponent)
  }));
  src__peek_a_boo_parent_component$46template.viewFactory_PeekABooParentComponentHost0 = function(parentView, parentIndex) {
    return new src__peek_a_boo_parent_component$46template._ViewPeekABooParentComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__peek_a_boo_parent_component$46template.viewFactory_PeekABooParentComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__peek_a_boo_parent_component$46template, {
    /*src__peek_a_boo_parent_component$46template.PeekABooParentComponentNgFactory*/get PeekABooParentComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfPeekABooParentComponent()).new('peek-a-boo-parent', src__peek_a_boo_parent_component$46template.viewFactory_PeekABooParentComponentHost0, src__peek_a_boo_parent_component$46template._PeekABooParentComponentMetadata));
    },
    /*src__peek_a_boo_parent_component$46template._PeekABooParentComponentMetadata*/get _PeekABooParentComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__peek_a_boo_parent_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__peek_a_boo_parent_component$46template.initReflector = function() {
    if (dart.test(src__peek_a_boo_parent_component$46template._visited)) {
      return;
    }
    src__peek_a_boo_parent_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__peek_a_boo_parent_component.PeekABooParentComponent), src__peek_a_boo_parent_component$46template.PeekABooParentComponentNgFactory);
    src__logger_service$46template.initReflector();
    angular$46template.initReflector();
    angular_forms$46template.initReflector();
    src__peek_a_boo_component$46template.initReflector();
  };
  dart.fn(src__peek_a_boo_parent_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/lifecycle_hooks/src/peek_a_boo_parent_component.template.ddc", {
    "package:lifecycle_hooks/src/peek_a_boo_parent_component.template.dart": src__peek_a_boo_parent_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["peek_a_boo_parent_component.template.dart"],"names":[],"mappings":"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","file":"peek_a_boo_parent_component.template.ddc.js"}');
  // Exports:
  return {
    src__peek_a_boo_parent_component$46template: src__peek_a_boo_parent_component$46template
  };
});

//# sourceMappingURL=peek_a_boo_parent_component.template.ddc.js.map
