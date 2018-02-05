import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';

import 'logger_service.dart';

//////////////////
@Component(
  selector: 'my-child-view',
  template: '<input [(ngModel)]="hero">',
  directives: const [CORE_DIRECTIVES, formDirectives],
)
class ChildViewComponent {
  String hero = 'Magneta';
}

//////////////////////
@Component(
  selector: 'after-view',
  template: '''
    <div>-- child view begins --</div>
      <my-child-view></my-child-view>
    <div>-- child view ends --</div>
    <p *ngIf="comment.isNotEmpty" class="comment">{{comment}}</p>''',
  directives: const [CORE_DIRECTIVES, ChildViewComponent],
)
class AfterViewComponent implements AfterViewChecked, AfterViewInit {
  var _prevHero = '';

  // Query for a VIEW child of type `ChildViewComponent`
  @ViewChild(ChildViewComponent)
  ChildViewComponent viewChild;

  final LoggerService _logger;

  AfterViewComponent(this._logger) {
    _logIt('AfterView constructor');
  }

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    _logIt('AfterViewInit');
    _doSomething();
  }

  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    if (_prevHero == viewChild.hero) {
      _logIt('AfterViewChecked (no change)');
    } else {
      _prevHero = viewChild.hero;
      _logIt('AfterViewChecked');
      _doSomething();
    }
  }

  String comment = '';

  // This surrogate for real business logic sets the `comment`
  void _doSomething() {
    var c = viewChild.hero.length > 10 ? "That's a long name" : '';
    if (c != comment) {
      // Wait a tick because the component's view has already been checked
      _logger.tick().then((_) {
        comment = c;
      });
    }
  }

  void _logIt(String method) {
    var child = viewChild;
    var message = "${method}: ${child != null ? child.hero:'no'} child view";
    _logger.log(message);
  }
  // ...
}

//////////////
@Component(
  selector: 'after-view-parent',
  template: '''
    <div class="parent">
      <h2>AfterView</h2>

      <after-view  *ngIf="show"></after-view>

      <h4>-- AfterView Logs --</h4>
      <p><button (click)="reset()">Reset</button></p>
      <div *ngFor="let msg of logs">{{msg}}</div>
    </div>
    ''',
  styles: const ['.parent {background: burlywood}'],
  providers: const [LoggerService],
  directives: const [CORE_DIRECTIVES, AfterViewComponent],
)
class AfterViewParentComponent {
  final LoggerService _logger;
  bool show = true;

  AfterViewParentComponent(this._logger);

  List<String> get logs => _logger.logs;

  void reset() {
    logs.clear();
    // quickly remove and reload AfterViewComponent which recreates it
    show = false;
    _logger.tick().then((_) {
      show = true;
    });
  }
}