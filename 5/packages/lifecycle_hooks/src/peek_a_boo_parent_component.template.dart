// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'peek_a_boo_parent_component.dart';
export 'peek_a_boo_parent_component.dart';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'logger_service.dart';
import 'peek_a_boo_component.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'logger_service.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_forms/angular_forms.template.dart' as _ref2;
import 'peek_a_boo_component.template.dart' as _ref3;

import 'package:angular/src/core/linker/app_view.dart';
import 'peek_a_boo_parent_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import5;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'peek_a_boo_component.template.dart' as import12;
import 'peek_a_boo_component.dart' as import13;
import 'logger_service.dart' as import14;
import 'dart:core';

const List<dynamic> styles$PeekABooParentComponent = const ['.parent._ngcontent-%COMP% { background:moccasin; }'];

class ViewPeekABooParentComponent0 extends AppView<import1.PeekABooParentComponent> {
  import2.DivElement _el_0;
  import2.Element _el_1;
  import2.ButtonElement _el_3;
  import2.Text _text_4;
  import2.ButtonElement _el_6;
  ViewContainer _appEl_8;
  NgIf _NgIf_8_7;
  import2.Element _el_9;
  ViewContainer _appEl_11;
  import5.NgFor _NgFor_11_7;
  var _expr_0;
  var _expr_1;
  var _expr_3;
  static RenderComponentType _renderType;
  ViewPeekABooParentComponent0(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('peek-a-boo-parent');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$PeekABooParentComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.PeekABooParentComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'parent';
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'h2', _el_0);
    addShimE(_el_1);
    import2.Text _text_2 = new import2.Text('Peek-A-Boo');
    _el_1.append(_text_2);
    _el_3 = createAndAppend(doc, 'button', _el_0);
    addShimC(_el_3);
    _text_4 = new import2.Text('');
    _el_3.append(_text_4);
    import2.Text _text_5 = new import2.Text('PeekABooComponent');
    _el_3.append(_text_5);
    _el_6 = createAndAppend(doc, 'button', _el_0);
    addShimC(_el_6);
    import2.Text _text_7 = new import2.Text('Update Hero');
    _el_6.append(_text_7);
    var _anchor_8 = ngAnchor.clone(false);
    _el_0.append(_anchor_8);
    _appEl_8 = new ViewContainer(8, 0, this, _anchor_8);
    TemplateRef _TemplateRef_8_6 = new TemplateRef(_appEl_8, viewFactory_PeekABooParentComponent1);
    _NgIf_8_7 = new NgIf(_appEl_8, _TemplateRef_8_6);
    _el_9 = createAndAppend(doc, 'h4', _el_0);
    addShimE(_el_9);
    import2.Text _text_10 = new import2.Text('-- Lifecycle Hook Log --');
    _el_9.append(_text_10);
    var _anchor_11 = ngAnchor.clone(false);
    _el_0.append(_anchor_11);
    _appEl_11 = new ViewContainer(11, 0, this, _anchor_11);
    TemplateRef _TemplateRef_11_6 = new TemplateRef(_appEl_11, viewFactory_PeekABooParentComponent2);
    _NgFor_11_7 = new import5.NgFor(_appEl_11, _TemplateRef_11_6);
    _el_3.addEventListener('click', eventHandler0(ctx.toggleChild));
    _el_6.addEventListener('click', eventHandler0(ctx.updateHero));
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.PeekABooParentComponent _ctx = ctx;
    _NgIf_8_7.ngIf = _ctx.hasChild;
    final currVal_3 = _ctx.logs;
    if (!identical(_expr_3, currVal_3)) {
      _NgFor_11_7.ngForOf = currVal_3;
      _expr_3 = currVal_3;
    }
    _NgFor_11_7.ngDoCheck();
    _appEl_8.detectChangesInNestedViews();
    _appEl_11.detectChangesInNestedViews();
    final currVal_0 = import9.interpolate0((_ctx.hasChild ? 'Destroy ' : 'Create '));
    if (!identical(_expr_0, currVal_0)) {
      _text_4.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final bool currVal_1 = !_ctx.hasChild;
    if (!identical(_expr_1, currVal_1)) {
      setProp(_el_6, 'hidden', currVal_1);
      _expr_1 = currVal_1;
    }
  }

  @override
  void destroyInternal() {
    _appEl_8?.destroyNestedViews();
    _appEl_11?.destroyNestedViews();
  }
}

AppView<import1.PeekABooParentComponent> viewFactory_PeekABooParentComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewPeekABooParentComponent0(parentView, parentIndex);
}

class _ViewPeekABooParentComponent1 extends AppView<import1.PeekABooParentComponent> {
  import2.Element _el_0;
  import12.ViewPeekABooComponent0 _compView_0;
  import13.PeekABooComponent _PeekABooComponent_0_4;
  String _expr_0;
  _ViewPeekABooParentComponent1(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewPeekABooParentComponent0._renderType;
  }
  @override
  ComponentRef<import1.PeekABooParentComponent> build() {
    _compView_0 = new import12.ViewPeekABooComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _PeekABooComponent_0_4 = new import13.PeekABooComponent(parentView.parentView.injectorGet(import14.LoggerService, parentView.viewData.parentIndex));
    _compView_0.create(_PeekABooComponent_0_4, []);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import13.PeekABooComponent) && (0 == nodeIndex))) {
      return _PeekABooComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import1.PeekABooParentComponent _ctx = ctx;
    Map<String, SimpleChange> changes;
    bool firstCheck = (this.cdState == 0);
    changes = null;
    final currVal_0 = _ctx.heroName;
    if (!identical(_expr_0, currVal_0)) {
      _PeekABooComponent_0_4.name = currVal_0;
      changes ??= <String, SimpleChange>{};
      changes['name'] = new SimpleChange(_expr_0, currVal_0);
      _expr_0 = currVal_0;
    }
    if (!identical(changes, null)) {
      _PeekABooComponent_0_4.ngOnChanges(changes);
    }
    if (firstCheck) {
      _PeekABooComponent_0_4.ngOnInit();
    }
    _PeekABooComponent_0_4.ngDoCheck();
    if (firstCheck) {
      _PeekABooComponent_0_4.ngAfterContentInit();
    }
    _PeekABooComponent_0_4.ngAfterContentChecked();
    _compView_0.detectChanges();
    if (firstCheck) {
      _PeekABooComponent_0_4.ngAfterViewInit();
    }
    _PeekABooComponent_0_4.ngAfterViewChecked();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _PeekABooComponent_0_4.ngOnDestroy();
  }
}

AppView<import1.PeekABooParentComponent> viewFactory_PeekABooParentComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewPeekABooParentComponent1(parentView, parentIndex);
}

class _ViewPeekABooParentComponent2 extends AppView<import1.PeekABooParentComponent> {
  import2.DivElement _el_0;
  import2.Text _text_1;
  var _expr_0;
  _ViewPeekABooParentComponent2(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewPeekABooParentComponent0._renderType;
  }
  @override
  ComponentRef<import1.PeekABooParentComponent> build() {
    var doc = import2.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _text_1 = new import2.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final String local_msg = locals['\$implicit'];
    final currVal_0 = import9.interpolate0(local_msg);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.PeekABooParentComponent> viewFactory_PeekABooParentComponent2(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewPeekABooParentComponent2(parentView, parentIndex);
}

const List<dynamic> styles$PeekABooParentComponentHost = const [];

class _ViewPeekABooParentComponentHost0 extends AppView<dynamic> {
  ViewPeekABooParentComponent0 _compView_0;
  import14.LoggerService _LoggerService_0_4;
  import1.PeekABooParentComponent _PeekABooParentComponent_0_5;
  _ViewPeekABooParentComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewPeekABooParentComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _LoggerService_0_4 = new import14.LoggerService();
    _PeekABooParentComponent_0_5 = new import1.PeekABooParentComponent(_LoggerService_0_4);
    _compView_0.create(_PeekABooParentComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.PeekABooParentComponent>(0, this, rootEl, _PeekABooParentComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import14.LoggerService) && (0 == nodeIndex))) {
      return _LoggerService_0_4;
    }
    if ((identical(token, import1.PeekABooParentComponent) && (0 == nodeIndex))) {
      return _PeekABooParentComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_PeekABooParentComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewPeekABooParentComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.PeekABooParentComponent> PeekABooParentComponentNgFactory = const ComponentFactory<import1.PeekABooParentComponent>('peek-a-boo-parent', viewFactory_PeekABooParentComponentHost0, _PeekABooParentComponentMetadata);
const _PeekABooParentComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ngRef.registerComponent(
    PeekABooParentComponent,
    PeekABooParentComponentNgFactory,
  );
}
