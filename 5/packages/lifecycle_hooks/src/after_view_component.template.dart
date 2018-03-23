// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'after_view_component.dart';
export 'after_view_component.dart';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'logger_service.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'logger_service.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_forms/angular_forms.template.dart' as _ref2;
import 'package:angular/src/core/linker/app_view.dart';
import 'after_view_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import3;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import4;
import 'package:angular_forms/src/directives/ng_model.dart' as import5;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/di/opaque_token.dart' as import11;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import12;
import 'package:angular_forms/src/directives/ng_control.dart' as import13;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'logger_service.dart' as import17;
import 'package:angular/src/common/directives/ng_for.dart' as import18;
import 'dart:core';

const List<dynamic> styles$ChildViewComponent = const [];

class ViewChildViewComponent0 extends AppView<import1.ChildViewComponent> {
  import2.InputElement _el_0;
  import3.DefaultValueAccessor _DefaultValueAccessor_0_5;
  List<import4.ControlValueAccessor<dynamic>> _NgValueAccessor_0_6;
  import5.NgModel _NgModel_0_7;
  static RenderComponentType _renderType;
  ViewChildViewComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('my-child-view');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$ChildViewComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.ChildViewComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'input', parentRenderNode);
    _DefaultValueAccessor_0_5 = new import3.DefaultValueAccessor(_el_0);
    _NgValueAccessor_0_6 = [_DefaultValueAccessor_0_5];
    _NgModel_0_7 = new import5.NgModel(null, _NgValueAccessor_0_6);
    _el_0.addEventListener('input', eventHandler1(_handle_input_0_1));
    _el_0.addEventListener('blur', eventHandler0(_DefaultValueAccessor_0_5.touchHandler));
    final subscription_0 = _NgModel_0_7.update.listen(eventHandler1(_handle_ngModelChange_0_0));
    init(const [], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import3.DefaultValueAccessor) && (0 == nodeIndex))) {
      return _DefaultValueAccessor_0_5;
    }
    if ((identical(token, const import11.MultiToken<import12.ControlValueAccessor>('NgValueAccessor')) && (0 == nodeIndex))) {
      return _NgValueAccessor_0_6;
    }
    if (((identical(token, import5.NgModel) || identical(token, import13.NgControl)) && (0 == nodeIndex))) {
      return _NgModel_0_7;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import1.ChildViewComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    _NgModel_0_7.model = _ctx.hero;
    _NgModel_0_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_0_7.ngOnInit();
    }
  }

  void _handle_ngModelChange_0_0($event) {
    ctx.hero = $event;
  }

  void _handle_input_0_1($event) {
    _DefaultValueAccessor_0_5.onChange($event.target.value);
  }
}

AppView<import1.ChildViewComponent> viewFactory_ChildViewComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewChildViewComponent0(parentView, parentIndex);
}

const List<dynamic> styles$ChildViewComponentHost = const [];

class _ViewChildViewComponentHost0 extends AppView<dynamic> {
  ViewChildViewComponent0 _compView_0;
  import1.ChildViewComponent _ChildViewComponent_0_5;
  _ViewChildViewComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewChildViewComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ChildViewComponent_0_5 = new import1.ChildViewComponent();
    _compView_0.create(_ChildViewComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.ChildViewComponent>(0, this, rootEl, _ChildViewComponent_0_5);
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

AppView viewFactory_ChildViewComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewChildViewComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.ChildViewComponent> ChildViewComponentNgFactory = const ComponentFactory<import1.ChildViewComponent>('my-child-view', viewFactory_ChildViewComponentHost0, _ChildViewComponentMetadata);
const List<dynamic> styles$AfterViewComponent = const [];

class ViewAfterViewComponent0 extends AppView<import1.AfterViewComponent> {
  bool _query_ChildViewComponent_1_0_isDirty = true;
  import2.DivElement _el_0;
  import2.Element _el_2;
  ViewChildViewComponent0 _compView_2;
  import1.ChildViewComponent _ChildViewComponent_2_5;
  import2.DivElement _el_3;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  static RenderComponentType _renderType;
  ViewAfterViewComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('after-view');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$AfterViewComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.AfterViewComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import2.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    import2.Text _text_1 = new import2.Text('-- child view begins --');
    _el_0.append(_text_1);
    _compView_2 = new ViewChildViewComponent0(this, 2);
    _el_2 = _compView_2.rootEl;
    parentRenderNode.append(_el_2);
    _ChildViewComponent_2_5 = new import1.ChildViewComponent();
    _compView_2.create(_ChildViewComponent_2_5, []);
    _el_3 = createDivAndAppend(doc, parentRenderNode);
    import2.Text _text_4 = new import2.Text('-- child view ends --');
    _el_3.append(_text_4);
    var _anchor_5 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_5);
    _appEl_5 = new ViewContainer(5, null, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = new TemplateRef(_appEl_5, viewFactory_AfterViewComponent1);
    _NgIf_5_9 = new NgIf(_appEl_5, _TemplateRef_5_8);
    ctx.viewChild = _ChildViewComponent_2_5;
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.AfterViewComponent _ctx = ctx;
    _NgIf_5_9.ngIf = _ctx.comment.isNotEmpty;
    _appEl_5.detectChangesInNestedViews();
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_5?.destroyNestedViews();
    _compView_2?.destroy();
  }
}

AppView<import1.AfterViewComponent> viewFactory_AfterViewComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewAfterViewComponent0(parentView, parentIndex);
}

class _ViewAfterViewComponent1 extends AppView<import1.AfterViewComponent> {
  import2.Element _el_0;
  import2.Text _text_1;
  var _expr_0;
  _ViewAfterViewComponent1(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAfterViewComponent0._renderType;
  }
  @override
  ComponentRef<import1.AfterViewComponent> build() {
    var doc = import2.document;
    _el_0 = doc.createElement('p');
    _el_0.className = 'comment';
    _text_1 = new import2.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.AfterViewComponent _ctx = ctx;
    final currVal_0 = (_ctx.comment ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.AfterViewComponent> viewFactory_AfterViewComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAfterViewComponent1(parentView, parentIndex);
}

const List<dynamic> styles$AfterViewComponentHost = const [];

class _ViewAfterViewComponentHost0 extends AppView<dynamic> {
  ViewAfterViewComponent0 _compView_0;
  import1.AfterViewComponent _AfterViewComponent_0_5;
  _ViewAfterViewComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewAfterViewComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AfterViewComponent_0_5 = new import1.AfterViewComponent(this.injectorGet(import17.LoggerService, viewData.parentIndex));
    _compView_0.create(_AfterViewComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.AfterViewComponent>(0, this, rootEl, _AfterViewComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    _compView_0.detectChanges();
    if (firstCheck) {
      _AfterViewComponent_0_5.ngAfterViewInit();
    }
    _AfterViewComponent_0_5.ngAfterViewChecked();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_AfterViewComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAfterViewComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.AfterViewComponent> AfterViewComponentNgFactory = const ComponentFactory<import1.AfterViewComponent>('after-view', viewFactory_AfterViewComponentHost0, _AfterViewComponentMetadata);
const List<dynamic> styles$AfterViewParentComponent = const ['.parent._ngcontent-%COMP% { background:burlywood; }'];

class ViewAfterViewParentComponent0 extends AppView<import1.AfterViewParentComponent> {
  import2.DivElement _el_0;
  import2.Element _el_1;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  import2.Element _el_4;
  import2.Element _el_6;
  import2.ButtonElement _el_7;
  ViewContainer _appEl_9;
  import18.NgFor _NgFor_9_9;
  var _expr_1;
  static RenderComponentType _renderType;
  ViewAfterViewParentComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('after-view-parent');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$AfterViewParentComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.AfterViewParentComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import2.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'parent';
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'h2', _el_0);
    addShimE(_el_1);
    import2.Text _text_2 = new import2.Text('AfterView');
    _el_1.append(_text_2);
    var _anchor_3 = ngAnchor.clone(false);
    _el_0.append(_anchor_3);
    _appEl_3 = new ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = new TemplateRef(_appEl_3, viewFactory_AfterViewParentComponent1);
    _NgIf_3_9 = new NgIf(_appEl_3, _TemplateRef_3_8);
    _el_4 = createAndAppend(doc, 'h4', _el_0);
    addShimE(_el_4);
    import2.Text _text_5 = new import2.Text('-- AfterView Logs --');
    _el_4.append(_text_5);
    _el_6 = createAndAppend(doc, 'p', _el_0);
    addShimE(_el_6);
    _el_7 = createAndAppend(doc, 'button', _el_6);
    addShimC(_el_7);
    import2.Text _text_8 = new import2.Text('Reset');
    _el_7.append(_text_8);
    var _anchor_9 = ngAnchor.clone(false);
    _el_0.append(_anchor_9);
    _appEl_9 = new ViewContainer(9, 0, this, _anchor_9);
    TemplateRef _TemplateRef_9_8 = new TemplateRef(_appEl_9, viewFactory_AfterViewParentComponent2);
    _NgFor_9_9 = new import18.NgFor(_appEl_9, _TemplateRef_9_8);
    _el_7.addEventListener('click', eventHandler0(ctx.reset));
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.AfterViewParentComponent _ctx = ctx;
    _NgIf_3_9.ngIf = _ctx.show;
    final currVal_1 = _ctx.logs;
    if (!identical(_expr_1, currVal_1)) {
      _NgFor_9_9.ngForOf = currVal_1;
      _expr_1 = currVal_1;
    }
    _NgFor_9_9.ngDoCheck();
    _appEl_3.detectChangesInNestedViews();
    _appEl_9.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_3?.destroyNestedViews();
    _appEl_9?.destroyNestedViews();
  }
}

AppView<import1.AfterViewParentComponent> viewFactory_AfterViewParentComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewAfterViewParentComponent0(parentView, parentIndex);
}

class _ViewAfterViewParentComponent1 extends AppView<import1.AfterViewParentComponent> {
  import2.Element _el_0;
  ViewAfterViewComponent0 _compView_0;
  import1.AfterViewComponent _AfterViewComponent_0_5;
  _ViewAfterViewParentComponent1(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAfterViewParentComponent0._renderType;
  }
  @override
  ComponentRef<import1.AfterViewParentComponent> build() {
    _compView_0 = new ViewAfterViewComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _AfterViewComponent_0_5 = new import1.AfterViewComponent(parentView.parentView.injectorGet(import17.LoggerService, parentView.viewData.parentIndex));
    _compView_0.create(_AfterViewComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    _compView_0.detectChanges();
    if (firstCheck) {
      _AfterViewComponent_0_5.ngAfterViewInit();
    }
    _AfterViewComponent_0_5.ngAfterViewChecked();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import1.AfterViewParentComponent> viewFactory_AfterViewParentComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAfterViewParentComponent1(parentView, parentIndex);
}

class _ViewAfterViewParentComponent2 extends AppView<import1.AfterViewParentComponent> {
  import2.DivElement _el_0;
  import2.Text _text_1;
  var _expr_0;
  _ViewAfterViewParentComponent2(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAfterViewParentComponent0._renderType;
  }
  @override
  ComponentRef<import1.AfterViewParentComponent> build() {
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

AppView<import1.AfterViewParentComponent> viewFactory_AfterViewParentComponent2(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAfterViewParentComponent2(parentView, parentIndex);
}

const List<dynamic> styles$AfterViewParentComponentHost = const [];

class _ViewAfterViewParentComponentHost0 extends AppView<dynamic> {
  ViewAfterViewParentComponent0 _compView_0;
  import17.LoggerService _LoggerService_0_5;
  import1.AfterViewParentComponent _AfterViewParentComponent_0_6;
  _ViewAfterViewParentComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewAfterViewParentComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _LoggerService_0_5 = new import17.LoggerService();
    _AfterViewParentComponent_0_6 = new import1.AfterViewParentComponent(_LoggerService_0_5);
    _compView_0.create(_AfterViewParentComponent_0_6, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.AfterViewParentComponent>(0, this, rootEl, _AfterViewParentComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import17.LoggerService) && (0 == nodeIndex))) {
      return _LoggerService_0_5;
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

AppView viewFactory_AfterViewParentComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAfterViewParentComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.AfterViewParentComponent> AfterViewParentComponentNgFactory = const ComponentFactory<import1.AfterViewParentComponent>('after-view-parent', viewFactory_AfterViewParentComponentHost0, _AfterViewParentComponentMetadata);
const _ChildViewComponentMetadata = const [];
const _AfterViewComponentMetadata = const [];
const _AfterViewParentComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ChildViewComponent, ChildViewComponentNgFactory);
  _ngRef.registerComponent(AfterViewComponent, AfterViewComponentNgFactory);
  _ngRef.registerComponent(AfterViewParentComponent, AfterViewParentComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
