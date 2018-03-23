define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/lifecycle_hooks/src/peek_a_boo_parent_component.template', 'packages/lifecycle_hooks/src/logger_service', 'packages/lifecycle_hooks/src/peek_a_boo_parent_component', 'packages/lifecycle_hooks/src/spy_component.template', 'packages/lifecycle_hooks/src/spy_component', 'packages/lifecycle_hooks/src/on_changes_component.template', 'packages/lifecycle_hooks/src/on_changes_component', 'packages/lifecycle_hooks/src/do_check_component.template', 'packages/lifecycle_hooks/src/do_check_component', 'packages/lifecycle_hooks/src/after_view_component.template', 'packages/lifecycle_hooks/src/after_view_component', 'packages/lifecycle_hooks/src/after_content_component.template', 'packages/lifecycle_hooks/src/after_content_component', 'packages/lifecycle_hooks/src/counter_component.template', 'packages/lifecycle_hooks/src/counter_component', 'packages/lifecycle_hooks/app_component', 'packages/angular/src/di/reflector', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, peek_a_boo_parent_component, logger_service, peek_a_boo_parent_component$, spy_component, spy_component$, on_changes_component, on_changes_component$, do_check_component, do_check_component$, after_view_component, after_view_component$, after_content_component, after_content_component$, counter_component, counter_component$, app_component, reflector, angular) {
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
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__peek_a_boo_parent_component$46template = peek_a_boo_parent_component.src__peek_a_boo_parent_component$46template;
  const src__logger_service = logger_service.src__logger_service;
  const src__peek_a_boo_parent_component = peek_a_boo_parent_component$.src__peek_a_boo_parent_component;
  const src__spy_component$46template = spy_component.src__spy_component$46template;
  const src__spy_component = spy_component$.src__spy_component;
  const src__on_changes_component$46template = on_changes_component.src__on_changes_component$46template;
  const src__on_changes_component = on_changes_component$.src__on_changes_component;
  const src__do_check_component$46template = do_check_component.src__do_check_component$46template;
  const src__do_check_component = do_check_component$.src__do_check_component;
  const src__after_view_component$46template = after_view_component.src__after_view_component$46template;
  const src__after_view_component = after_view_component$.src__after_view_component;
  const src__after_content_component$46template = after_content_component.src__after_content_component$46template;
  const src__after_content_component = after_content_component$.src__after_content_component;
  const src__counter_component$46template = counter_component.src__counter_component$46template;
  const src__counter_component = counter_component$.src__counter_component;
  const app_component$ = app_component.app_component;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const app_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfAppComponent = () => (AppViewOfAppComponent = dart.constFn(src__core__linker__app_view.AppView$(app_component$.AppComponent)))();
  let AppViewAndintToAppViewOfAppComponent = () => (AppViewAndintToAppViewOfAppComponent = dart.constFn(dart.fnType(AppViewOfAppComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfAppComponent = () => (ComponentRefOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfAppComponent = () => (ComponentFactoryOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(app_component$.AppComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponent*/get styles$AppComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _el_3 = Symbol('_el_3');
  const _el_5 = Symbol('_el_5');
  const _el_6 = Symbol('_el_6');
  const _el_8 = Symbol('_el_8');
  const _el_9 = Symbol('_el_9');
  const _el_11 = Symbol('_el_11');
  const _el_12 = Symbol('_el_12');
  const _el_14 = Symbol('_el_14');
  const _el_15 = Symbol('_el_15');
  const _el_17 = Symbol('_el_17');
  const _el_18 = Symbol('_el_18');
  const _el_20 = Symbol('_el_20');
  const _el_21 = Symbol('_el_21');
  const _el_23 = Symbol('_el_23');
  const _el_24 = Symbol('_el_24');
  const _el_25 = Symbol('_el_25');
  const _compView_25 = Symbol('_compView_25');
  const _LoggerService_25_5 = Symbol('_LoggerService_25_5');
  const _PeekABooParentComponent_25_6 = Symbol('_PeekABooParentComponent_25_6');
  const _el_26 = Symbol('_el_26');
  const _el_28 = Symbol('_el_28');
  const _el_29 = Symbol('_el_29');
  const _compView_29 = Symbol('_compView_29');
  const _LoggerService_29_5 = Symbol('_LoggerService_29_5');
  const _SpyParentComponent_29_6 = Symbol('_SpyParentComponent_29_6');
  const _el_30 = Symbol('_el_30');
  const _el_32 = Symbol('_el_32');
  const _el_33 = Symbol('_el_33');
  const _compView_33 = Symbol('_compView_33');
  const _OnChangesParentComponent_33_5 = Symbol('_OnChangesParentComponent_33_5');
  const _el_34 = Symbol('_el_34');
  const _el_36 = Symbol('_el_36');
  const _el_37 = Symbol('_el_37');
  const _compView_37 = Symbol('_compView_37');
  const _DoCheckParentComponent_37_5 = Symbol('_DoCheckParentComponent_37_5');
  const _el_38 = Symbol('_el_38');
  const _el_40 = Symbol('_el_40');
  const _el_41 = Symbol('_el_41');
  const _compView_41 = Symbol('_compView_41');
  const _LoggerService_41_5 = Symbol('_LoggerService_41_5');
  const _AfterViewParentComponent_41_6 = Symbol('_AfterViewParentComponent_41_6');
  const _el_42 = Symbol('_el_42');
  const _el_44 = Symbol('_el_44');
  const _el_45 = Symbol('_el_45');
  const _compView_45 = Symbol('_compView_45');
  const _LoggerService_45_5 = Symbol('_LoggerService_45_5');
  const _AfterContentParentComponent_45_6 = Symbol('_AfterContentParentComponent_45_6');
  const _el_46 = Symbol('_el_46');
  const _el_48 = Symbol('_el_48');
  const _el_49 = Symbol('_el_49');
  const _compView_49 = Symbol('_compView_49');
  const _LoggerService_49_5 = Symbol('_LoggerService_49_5');
  const _CounterParentComponent_49_6 = Symbol('_CounterParentComponent_49_6');
  const _el_50 = Symbol('_el_50');
  let const$;
  app_component$46template.ViewAppComponent0 = class ViewAppComponent0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this.createAttr(this[_el_0], 'id', 'top');
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, 'h1', parentRenderNode);
      let _text_2 = html.Text.new('Component Lifecycle Hooks');
      this[_el_1][$append](_text_2);
      this[_el_3] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this.createAttr(this[_el_3], 'href', '#hooks');
      let _text_4 = html.Text.new('Peek-a-boo: (most) lifecycle hooks');
      this[_el_3][$append](_text_4);
      this[_el_5] = src__core__linker__app_view.createAndAppend(doc, 'br', parentRenderNode);
      this[_el_6] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this.createAttr(this[_el_6], 'href', '#onchanges');
      let _text_7 = html.Text.new('OnChanges');
      this[_el_6][$append](_text_7);
      this[_el_8] = src__core__linker__app_view.createAndAppend(doc, 'br', parentRenderNode);
      this[_el_9] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this.createAttr(this[_el_9], 'href', '#docheck');
      let _text_10 = html.Text.new('DoCheck');
      this[_el_9][$append](_text_10);
      this[_el_11] = src__core__linker__app_view.createAndAppend(doc, 'br', parentRenderNode);
      this[_el_12] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this.createAttr(this[_el_12], 'href', '#after-view');
      let _text_13 = html.Text.new('AfterViewInit & AfterViewChecked');
      this[_el_12][$append](_text_13);
      this[_el_14] = src__core__linker__app_view.createAndAppend(doc, 'br', parentRenderNode);
      this[_el_15] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this.createAttr(this[_el_15], 'href', '#after-content');
      let _text_16 = html.Text.new('AfterContentInit & AfterContentChecked');
      this[_el_15][$append](_text_16);
      this[_el_17] = src__core__linker__app_view.createAndAppend(doc, 'br', parentRenderNode);
      this[_el_18] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this.createAttr(this[_el_18], 'href', '#spy');
      let _text_19 = html.Text.new('Spy: directive with OnInit & OnDestroy');
      this[_el_18][$append](_text_19);
      this[_el_20] = src__core__linker__app_view.createAndAppend(doc, 'br', parentRenderNode);
      this[_el_21] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this.createAttr(this[_el_21], 'href', '#counter');
      let _text_22 = html.Text.new('Counter: OnChanges + Spy directive');
      this[_el_21][$append](_text_22);
      this[_el_23] = src__core__linker__app_view.createAndAppend(doc, 'br', parentRenderNode);
      this[_el_24] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this.createAttr(this[_el_24], 'id', 'hooks');
      this[_compView_25] = new src__peek_a_boo_parent_component$46template.ViewPeekABooParentComponent0.new(this, 25);
      this[_el_25] = this[_compView_25].rootEl;
      parentRenderNode[$append](this[_el_25]);
      this[_LoggerService_25_5] = new src__logger_service.LoggerService.new();
      this[_PeekABooParentComponent_25_6] = new src__peek_a_boo_parent_component.PeekABooParentComponent.new(this[_LoggerService_25_5]);
      this[_compView_25].create(this[_PeekABooParentComponent_25_6], []);
      this[_el_26] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this.createAttr(this[_el_26], 'href', '#top');
      let _text_27 = html.Text.new('back to top');
      this[_el_26][$append](_text_27);
      this[_el_28] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this.createAttr(this[_el_28], 'id', 'spy');
      this[_compView_29] = new src__spy_component$46template.ViewSpyParentComponent0.new(this, 29);
      this[_el_29] = this[_compView_29].rootEl;
      parentRenderNode[$append](this[_el_29]);
      this[_LoggerService_29_5] = new src__logger_service.LoggerService.new();
      this[_SpyParentComponent_29_6] = new src__spy_component.SpyParentComponent.new(this[_LoggerService_29_5]);
      this[_compView_29].create(this[_SpyParentComponent_29_6], []);
      this[_el_30] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this.createAttr(this[_el_30], 'href', '#top');
      let _text_31 = html.Text.new('back to top');
      this[_el_30][$append](_text_31);
      this[_el_32] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this.createAttr(this[_el_32], 'id', 'onchanges');
      this[_compView_33] = new src__on_changes_component$46template.ViewOnChangesParentComponent0.new(this, 33);
      this[_el_33] = this[_compView_33].rootEl;
      parentRenderNode[$append](this[_el_33]);
      this[_OnChangesParentComponent_33_5] = new src__on_changes_component.OnChangesParentComponent.new();
      this[_compView_33].create(this[_OnChangesParentComponent_33_5], []);
      this[_el_34] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this.createAttr(this[_el_34], 'href', '#top');
      let _text_35 = html.Text.new('back to top');
      this[_el_34][$append](_text_35);
      this[_el_36] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this.createAttr(this[_el_36], 'id', 'docheck');
      this[_compView_37] = new src__do_check_component$46template.ViewDoCheckParentComponent0.new(this, 37);
      this[_el_37] = this[_compView_37].rootEl;
      parentRenderNode[$append](this[_el_37]);
      this[_DoCheckParentComponent_37_5] = new src__do_check_component.DoCheckParentComponent.new();
      this[_compView_37].create(this[_DoCheckParentComponent_37_5], []);
      this[_el_38] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this.createAttr(this[_el_38], 'href', '#top');
      let _text_39 = html.Text.new('back to top');
      this[_el_38][$append](_text_39);
      this[_el_40] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this.createAttr(this[_el_40], 'id', 'after-view');
      this[_compView_41] = new src__after_view_component$46template.ViewAfterViewParentComponent0.new(this, 41);
      this[_el_41] = this[_compView_41].rootEl;
      parentRenderNode[$append](this[_el_41]);
      this[_LoggerService_41_5] = new src__logger_service.LoggerService.new();
      this[_AfterViewParentComponent_41_6] = new src__after_view_component.AfterViewParentComponent.new(this[_LoggerService_41_5]);
      this[_compView_41].create(this[_AfterViewParentComponent_41_6], []);
      this[_el_42] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this.createAttr(this[_el_42], 'href', '#top');
      let _text_43 = html.Text.new('back to top');
      this[_el_42][$append](_text_43);
      this[_el_44] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this.createAttr(this[_el_44], 'id', 'after-content');
      this[_compView_45] = new src__after_content_component$46template.ViewAfterContentParentComponent0.new(this, 45);
      this[_el_45] = this[_compView_45].rootEl;
      parentRenderNode[$append](this[_el_45]);
      this[_LoggerService_45_5] = new src__logger_service.LoggerService.new();
      this[_AfterContentParentComponent_45_6] = new src__after_content_component.AfterContentParentComponent.new(this[_LoggerService_45_5]);
      this[_compView_45].create(this[_AfterContentParentComponent_45_6], []);
      this[_el_46] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this.createAttr(this[_el_46], 'href', '#top');
      let _text_47 = html.Text.new('back to top');
      this[_el_46][$append](_text_47);
      this[_el_48] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this.createAttr(this[_el_48], 'id', 'counter');
      this[_compView_49] = new src__counter_component$46template.ViewCounterParentComponent0.new(this, 49);
      this[_el_49] = this[_compView_49].rootEl;
      parentRenderNode[$append](this[_el_49]);
      this[_LoggerService_49_5] = new src__logger_service.LoggerService.new();
      this[_CounterParentComponent_49_6] = new src__counter_component.CounterParentComponent.new(this[_LoggerService_49_5]);
      this[_compView_49].create(this[_CounterParentComponent_49_6], []);
      this[_el_50] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this.createAttr(this[_el_50], 'href', '#top');
      let _text_51 = html.Text.new('back to top');
      this[_el_50][$append](_text_51);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__logger_service.LoggerService) && 25 === nodeIndex) {
        return this[_LoggerService_25_5];
      }
      if (token === dart.wrapType(src__logger_service.LoggerService) && 29 === nodeIndex) {
        return this[_LoggerService_29_5];
      }
      if (token === dart.wrapType(src__logger_service.LoggerService) && 41 === nodeIndex) {
        return this[_LoggerService_41_5];
      }
      if (token === dart.wrapType(src__logger_service.LoggerService) && 45 === nodeIndex) {
        return this[_LoggerService_45_5];
      }
      if (token === dart.wrapType(src__logger_service.LoggerService) && 49 === nodeIndex) {
        return this[_LoggerService_49_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_25].detectChanges();
      this[_compView_29].detectChanges();
      this[_compView_33].detectChanges();
      this[_compView_37].detectChanges();
      this[_compView_41].detectChanges();
      this[_compView_45].detectChanges();
      this[_compView_49].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_25];
      t == null ? null : t.destroy();
      let t$ = this[_compView_29];
      t$ == null ? null : t$.destroy();
      let t$0 = this[_compView_33];
      t$0 == null ? null : t$0.destroy();
      let t$1 = this[_compView_37];
      t$1 == null ? null : t$1.destroy();
      let t$2 = this[_compView_41];
      t$2 == null ? null : t$2.destroy();
      let t$3 = this[_compView_45];
      t$3 == null ? null : t$3.destroy();
      let t$4 = this[_compView_49];
      t$4 == null ? null : t$4.destroy();
    }
  };
  (app_component$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_3] = null;
    this[_el_5] = null;
    this[_el_6] = null;
    this[_el_8] = null;
    this[_el_9] = null;
    this[_el_11] = null;
    this[_el_12] = null;
    this[_el_14] = null;
    this[_el_15] = null;
    this[_el_17] = null;
    this[_el_18] = null;
    this[_el_20] = null;
    this[_el_21] = null;
    this[_el_23] = null;
    this[_el_24] = null;
    this[_el_25] = null;
    this[_compView_25] = null;
    this[_LoggerService_25_5] = null;
    this[_PeekABooParentComponent_25_6] = null;
    this[_el_26] = null;
    this[_el_28] = null;
    this[_el_29] = null;
    this[_compView_29] = null;
    this[_LoggerService_29_5] = null;
    this[_SpyParentComponent_29_6] = null;
    this[_el_30] = null;
    this[_el_32] = null;
    this[_el_33] = null;
    this[_compView_33] = null;
    this[_OnChangesParentComponent_33_5] = null;
    this[_el_34] = null;
    this[_el_36] = null;
    this[_el_37] = null;
    this[_compView_37] = null;
    this[_DoCheckParentComponent_37_5] = null;
    this[_el_38] = null;
    this[_el_40] = null;
    this[_el_41] = null;
    this[_compView_41] = null;
    this[_LoggerService_41_5] = null;
    this[_AfterViewParentComponent_41_6] = null;
    this[_el_42] = null;
    this[_el_44] = null;
    this[_el_45] = null;
    this[_compView_45] = null;
    this[_LoggerService_45_5] = null;
    this[_AfterContentParentComponent_45_6] = null;
    this[_el_46] = null;
    this[_el_48] = null;
    this[_el_49] = null;
    this[_compView_49] = null;
    this[_LoggerService_49_5] = null;
    this[_CounterParentComponent_49_6] = null;
    this[_el_50] = null;
    app_component$46template.ViewAppComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-app'));
    let t = app_component$46template.ViewAppComponent0._renderType;
    t == null ? app_component$46template.ViewAppComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, app_component$46template.styles$AppComponent) : t;
    this.setupComponentType(app_component$46template.ViewAppComponent0._renderType);
  }).prototype = app_component$46template.ViewAppComponent0.prototype;
  dart.addTypeTests(app_component$46template.ViewAppComponent0);
  dart.setMethodSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getMethods(app_component$46template.ViewAppComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(app_component$46template.ViewAppComponent0.__proto__),
    [_el_0]: dart.fieldType(html.AnchorElement),
    [_el_1]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.AnchorElement),
    [_el_5]: dart.fieldType(html.Element),
    [_el_6]: dart.fieldType(html.AnchorElement),
    [_el_8]: dart.fieldType(html.Element),
    [_el_9]: dart.fieldType(html.AnchorElement),
    [_el_11]: dart.fieldType(html.Element),
    [_el_12]: dart.fieldType(html.AnchorElement),
    [_el_14]: dart.fieldType(html.Element),
    [_el_15]: dart.fieldType(html.AnchorElement),
    [_el_17]: dart.fieldType(html.Element),
    [_el_18]: dart.fieldType(html.AnchorElement),
    [_el_20]: dart.fieldType(html.Element),
    [_el_21]: dart.fieldType(html.AnchorElement),
    [_el_23]: dart.fieldType(html.Element),
    [_el_24]: dart.fieldType(html.AnchorElement),
    [_el_25]: dart.fieldType(html.Element),
    [_compView_25]: dart.fieldType(src__peek_a_boo_parent_component$46template.ViewPeekABooParentComponent0),
    [_LoggerService_25_5]: dart.fieldType(src__logger_service.LoggerService),
    [_PeekABooParentComponent_25_6]: dart.fieldType(src__peek_a_boo_parent_component.PeekABooParentComponent),
    [_el_26]: dart.fieldType(html.AnchorElement),
    [_el_28]: dart.fieldType(html.AnchorElement),
    [_el_29]: dart.fieldType(html.Element),
    [_compView_29]: dart.fieldType(src__spy_component$46template.ViewSpyParentComponent0),
    [_LoggerService_29_5]: dart.fieldType(src__logger_service.LoggerService),
    [_SpyParentComponent_29_6]: dart.fieldType(src__spy_component.SpyParentComponent),
    [_el_30]: dart.fieldType(html.AnchorElement),
    [_el_32]: dart.fieldType(html.AnchorElement),
    [_el_33]: dart.fieldType(html.Element),
    [_compView_33]: dart.fieldType(src__on_changes_component$46template.ViewOnChangesParentComponent0),
    [_OnChangesParentComponent_33_5]: dart.fieldType(src__on_changes_component.OnChangesParentComponent),
    [_el_34]: dart.fieldType(html.AnchorElement),
    [_el_36]: dart.fieldType(html.AnchorElement),
    [_el_37]: dart.fieldType(html.Element),
    [_compView_37]: dart.fieldType(src__do_check_component$46template.ViewDoCheckParentComponent0),
    [_DoCheckParentComponent_37_5]: dart.fieldType(src__do_check_component.DoCheckParentComponent),
    [_el_38]: dart.fieldType(html.AnchorElement),
    [_el_40]: dart.fieldType(html.AnchorElement),
    [_el_41]: dart.fieldType(html.Element),
    [_compView_41]: dart.fieldType(src__after_view_component$46template.ViewAfterViewParentComponent0),
    [_LoggerService_41_5]: dart.fieldType(src__logger_service.LoggerService),
    [_AfterViewParentComponent_41_6]: dart.fieldType(src__after_view_component.AfterViewParentComponent),
    [_el_42]: dart.fieldType(html.AnchorElement),
    [_el_44]: dart.fieldType(html.AnchorElement),
    [_el_45]: dart.fieldType(html.Element),
    [_compView_45]: dart.fieldType(src__after_content_component$46template.ViewAfterContentParentComponent0),
    [_LoggerService_45_5]: dart.fieldType(src__logger_service.LoggerService),
    [_AfterContentParentComponent_45_6]: dart.fieldType(src__after_content_component.AfterContentParentComponent),
    [_el_46]: dart.fieldType(html.AnchorElement),
    [_el_48]: dart.fieldType(html.AnchorElement),
    [_el_49]: dart.fieldType(html.Element),
    [_compView_49]: dart.fieldType(src__counter_component$46template.ViewCounterParentComponent0),
    [_LoggerService_49_5]: dart.fieldType(src__logger_service.LoggerService),
    [_CounterParentComponent_49_6]: dart.fieldType(src__counter_component.CounterParentComponent),
    [_el_50]: dart.fieldType(html.AnchorElement)
  }));
  dart.defineLazy(app_component$46template.ViewAppComponent0, {
    /*app_component$46template.ViewAppComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  app_component$46template.viewFactory_AppComponent0 = function(parentView, parentIndex) {
    return new app_component$46template.ViewAppComponent0.new(parentView, parentIndex);
  };
  dart.fn(app_component$46template.viewFactory_AppComponent0, AppViewAndintToAppViewOfAppComponent());
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponentHost*/get styles$AppComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _AppComponent_0_5 = Symbol('_AppComponent_0_5');
  app_component$46template._ViewAppComponentHost0 = class _ViewAppComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new app_component$46template.ViewAppComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_AppComponent_0_5] = new app_component$.AppComponent.new();
      this[_compView_0].create(this[_AppComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAppComponent()).new(0, this, this.rootEl, this[_AppComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (app_component$46template._ViewAppComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AppComponent_0_5] = null;
    app_component$46template._ViewAppComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = app_component$46template._ViewAppComponentHost0.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponentHost0);
  dart.setMethodSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(app_component$46template.ViewAppComponent0),
    [_AppComponent_0_5]: dart.fieldType(app_component$.AppComponent)
  }));
  app_component$46template.viewFactory_AppComponentHost0 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(app_component$46template.viewFactory_AppComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.AppComponentNgFactory*/get AppComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAppComponent()).new('my-app', app_component$46template.viewFactory_AppComponentHost0, app_component$46template._AppComponentMetadata));
    },
    /*app_component$46template._AppComponentMetadata*/get _AppComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*app_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  app_component$46template.initReflector = function() {
    if (dart.test(app_component$46template._visited)) {
      return;
    }
    app_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(app_component$.AppComponent), app_component$46template.AppComponentNgFactory);
    angular$46template.initReflector();
    src__after_content_component$46template.initReflector();
    src__after_view_component$46template.initReflector();
    src__counter_component$46template.initReflector();
    src__do_check_component$46template.initReflector();
    src__on_changes_component$46template.initReflector();
    src__peek_a_boo_parent_component$46template.initReflector();
    src__spy_component$46template.initReflector();
  };
  dart.fn(app_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/lifecycle_hooks/app_component.template.ddc", {
    "package:lifecycle_hooks/app_component.template.dart": app_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_component.template.dart"],"names":[],"mappings":"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","file":"app_component.template.ddc.js"}');
  // Exports:
  return {
    app_component$46template: app_component$46template
  };
});

//# sourceMappingURL=app_component.template.ddc.js.map
