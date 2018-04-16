// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'after_content_component.dart';
export 'after_content_component.dart';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'logger_service.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'logger_service.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_forms/angular_forms.template.dart' as _ref2;
import 'package:angular/src/core/linker/app_view.dart';
import 'after_content_component.dart' as import1;
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

const List<dynamic> styles$ChildComponent = const [];

class ViewChildComponent0 extends AppView<import1.ChildComponent> {
  import2.InputElement _el_0;
  import3.DefaultValueAccessor _DefaultValueAccessor_0_5;
  List<import4.ControlValueAccessor<dynamic>> _NgValueAccessor_0_6;
  import5.NgModel _NgModel_0_7;
  static RenderComponentType _renderType;
  ViewChildComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('my-child');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$ChildComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.ChildComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'input', parentRenderNode);
    _DefaultValueAccessor_0_5 = new import3.DefaultValueAccessor(_el_0);
    _NgValueAccessor_0_6 = [_DefaultValueAccessor_0_5];
    _NgModel_0_7 = new import5.NgModel(null, _NgValueAccessor_0_6);
    _el_0.addEventListener('blur', eventHandler0(_DefaultValueAccessor_0_5.touchHandler));
    _el_0.addEventListener('input', eventHandler1(_handle_input_0_2));
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
    final import1.ChildComponent _ctx = ctx;
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

  void _handle_input_0_2($event) {
    _DefaultValueAccessor_0_5.handleChange($event.target.value);
  }
}

AppView<import1.ChildComponent> viewFactory_ChildComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewChildComponent0(parentView, parentIndex);
}

const List<dynamic> styles$ChildComponentHost = const [];

class _ViewChildComponentHost0 extends AppView<dynamic> {
  ViewChildComponent0 _compView_0;
  import1.ChildComponent _ChildComponent_0_5;
  _ViewChildComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewChildComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ChildComponent_0_5 = new import1.ChildComponent();
    _compView_0.create(_ChildComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.ChildComponent>(0, this, rootEl, _ChildComponent_0_5);
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

AppView viewFactory_ChildComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewChildComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.ChildComponent> ChildComponentNgFactory = const ComponentFactory<import1.ChildComponent>('my-child', viewFactory_ChildComponentHost0, _ChildComponentMetadata);
const List<dynamic> styles$AfterContentComponent = const [];

class ViewAfterContentComponent0 extends AppView<import1.AfterContentComponent> {
  import2.DivElement _el_0;
  import2.DivElement _el_2;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  static RenderComponentType _renderType;
  ViewAfterContentComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('after-content');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$AfterContentComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.AfterContentComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import2.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    import2.Text _text_1 = new import2.Text('-- projected content begins --');
    _el_0.append(_text_1);
    project(parentRenderNode, 0);
    _el_2 = createDivAndAppend(doc, parentRenderNode);
    import2.Text _text_3 = new import2.Text('-- projected content ends --');
    _el_2.append(_text_3);
    final _anchor_4 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_4);
    _appEl_4 = new ViewContainer(4, null, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = new TemplateRef(_appEl_4, viewFactory_AfterContentComponent1);
    _NgIf_4_9 = new NgIf(_appEl_4, _TemplateRef_4_8);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.AfterContentComponent _ctx = ctx;
    _NgIf_4_9.ngIf = _ctx.comment.isNotEmpty;
    _appEl_4.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_4?.destroyNestedViews();
  }
}

AppView<import1.AfterContentComponent> viewFactory_AfterContentComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewAfterContentComponent0(parentView, parentIndex);
}

class _ViewAfterContentComponent1 extends AppView<import1.AfterContentComponent> {
  import2.Element _el_0;
  import2.Text _text_1;
  var _expr_0;
  _ViewAfterContentComponent1(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAfterContentComponent0._renderType;
  }
  @override
  ComponentRef<import1.AfterContentComponent> build() {
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
    final import1.AfterContentComponent _ctx = ctx;
    final currVal_0 = (_ctx.comment ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.AfterContentComponent> viewFactory_AfterContentComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAfterContentComponent1(parentView, parentIndex);
}

const List<dynamic> styles$AfterContentComponentHost = const [];

class _ViewAfterContentComponentHost0 extends AppView<dynamic> {
  ViewAfterContentComponent0 _compView_0;
  import1.AfterContentComponent _AfterContentComponent_0_5;
  bool _query_ChildComponent_0_0_isDirty = true;
  _ViewAfterContentComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewAfterContentComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AfterContentComponent_0_5 = new import1.AfterContentComponent(this.injectorGet(import17.LoggerService, viewData.parentIndex));
    _compView_0.create(_AfterContentComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.AfterContentComponent>(0, this, rootEl, _AfterContentComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _AfterContentComponent_0_5.ngAfterContentInit();
    }
    _AfterContentComponent_0_5.ngAfterContentChecked();
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_AfterContentComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAfterContentComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.AfterContentComponent> AfterContentComponentNgFactory = const ComponentFactory<import1.AfterContentComponent>('after-content', viewFactory_AfterContentComponentHost0, _AfterContentComponentMetadata);
const List<dynamic> styles$AfterContentParentComponent = const ['.parent._ngcontent-%COMP% { background:burlywood; }'];

class ViewAfterContentParentComponent0 extends AppView<import1.AfterContentParentComponent> {
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
  ViewAfterContentParentComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('after-content-parent');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$AfterContentParentComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.AfterContentParentComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import2.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'parent';
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'h2', _el_0);
    addShimE(_el_1);
    import2.Text _text_2 = new import2.Text('AfterContent');
    _el_1.append(_text_2);
    final _anchor_3 = createViewContainerAnchor();
    _el_0.append(_anchor_3);
    _appEl_3 = new ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = new TemplateRef(_appEl_3, viewFactory_AfterContentParentComponent1);
    _NgIf_3_9 = new NgIf(_appEl_3, _TemplateRef_3_8);
    _el_4 = createAndAppend(doc, 'h4', _el_0);
    addShimE(_el_4);
    import2.Text _text_5 = new import2.Text('-- AfterContent Logs --');
    _el_4.append(_text_5);
    _el_6 = createAndAppend(doc, 'p', _el_0);
    addShimE(_el_6);
    _el_7 = createAndAppend(doc, 'button', _el_6);
    addShimC(_el_7);
    import2.Text _text_8 = new import2.Text('Reset');
    _el_7.append(_text_8);
    final _anchor_9 = createViewContainerAnchor();
    _el_0.append(_anchor_9);
    _appEl_9 = new ViewContainer(9, 0, this, _anchor_9);
    TemplateRef _TemplateRef_9_8 = new TemplateRef(_appEl_9, viewFactory_AfterContentParentComponent2);
    _NgFor_9_9 = new import18.NgFor(_appEl_9, _TemplateRef_9_8);
    _el_7.addEventListener('click', eventHandler0(ctx.reset));
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.AfterContentParentComponent _ctx = ctx;
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

AppView<import1.AfterContentParentComponent> viewFactory_AfterContentParentComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewAfterContentParentComponent0(parentView, parentIndex);
}

class _ViewAfterContentParentComponent1 extends AppView<import1.AfterContentParentComponent> {
  import2.DivElement _el_0;
  import2.Element _el_1;
  ViewAfterContentComponent0 _compView_1;
  import1.AfterContentComponent _AfterContentComponent_1_5;
  bool _query_ChildComponent_1_0_isDirty = true;
  import2.Element _el_2;
  ViewChildComponent0 _compView_2;
  import1.ChildComponent _ChildComponent_2_5;
  _ViewAfterContentParentComponent1(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAfterContentParentComponent0._renderType;
  }
  @override
  ComponentRef<import1.AfterContentParentComponent> build() {
    var doc = import2.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _compView_1 = new ViewAfterContentComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    addShimC(_el_1);
    _AfterContentComponent_1_5 = new import1.AfterContentComponent(parentView.parentView.injectorGet(import17.LoggerService, parentView.viewData.parentIndex));
    _compView_2 = new ViewChildComponent0(this, 2);
    _el_2 = _compView_2.rootEl;
    addShimC(_el_2);
    _ChildComponent_2_5 = new import1.ChildComponent();
    _compView_2.create(_ChildComponent_2_5, []);
    _AfterContentComponent_1_5.contentChild = _ChildComponent_2_5;
    _compView_1.create(_AfterContentComponent_1_5, [
      [_el_2]
    ]);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _AfterContentComponent_1_5.ngAfterContentInit();
    }
    _AfterContentComponent_1_5.ngAfterContentChecked();
    _compView_1.detectChanges();
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1?.destroy();
    _compView_2?.destroy();
  }
}

AppView<import1.AfterContentParentComponent> viewFactory_AfterContentParentComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAfterContentParentComponent1(parentView, parentIndex);
}

class _ViewAfterContentParentComponent2 extends AppView<import1.AfterContentParentComponent> {
  import2.DivElement _el_0;
  import2.Text _text_1;
  var _expr_0;
  _ViewAfterContentParentComponent2(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAfterContentParentComponent0._renderType;
  }
  @override
  ComponentRef<import1.AfterContentParentComponent> build() {
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

AppView<import1.AfterContentParentComponent> viewFactory_AfterContentParentComponent2(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAfterContentParentComponent2(parentView, parentIndex);
}

const List<dynamic> styles$AfterContentParentComponentHost = const [];

class _ViewAfterContentParentComponentHost0 extends AppView<dynamic> {
  ViewAfterContentParentComponent0 _compView_0;
  import17.LoggerService _LoggerService_0_5;
  import1.AfterContentParentComponent _AfterContentParentComponent_0_6;
  _ViewAfterContentParentComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewAfterContentParentComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _LoggerService_0_5 = new import17.LoggerService();
    _AfterContentParentComponent_0_6 = new import1.AfterContentParentComponent(_LoggerService_0_5);
    _compView_0.create(_AfterContentParentComponent_0_6, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.AfterContentParentComponent>(0, this, rootEl, _AfterContentParentComponent_0_6);
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

AppView viewFactory_AfterContentParentComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAfterContentParentComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.AfterContentParentComponent> AfterContentParentComponentNgFactory = const ComponentFactory<import1.AfterContentParentComponent>('after-content-parent', viewFactory_AfterContentParentComponentHost0, _AfterContentParentComponentMetadata);
const _ChildComponentMetadata = const [];
const _AfterContentComponentMetadata = const [];
const _AfterContentParentComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ChildComponent, ChildComponentNgFactory);
  _ngRef.registerComponent(AfterContentComponent, AfterContentComponentNgFactory);
  _ngRef.registerComponent(AfterContentParentComponent, AfterContentParentComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
