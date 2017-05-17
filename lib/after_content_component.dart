import 'package:angular2/angular2.dart';

import 'logger_service.dart';

//////////////////
@Component(
  selector: 'my-child',
  template: '<input [(ngModel)]="hero">',
  directives: const [COMMON_DIRECTIVES],
)
class ChildComponent {
  String hero = 'Magneta';
}

//////////////////////
@Component(
  selector: 'after-content',
  template: '''
    <div>-- projected content begins --</div>
      <ng-content></ng-content>
    <div>-- projected content ends --</div>
    <p *ngIf="comment.isNotEmpty" class="comment">{{comment}}</p>
    ''',
  directives: const [CORE_DIRECTIVES],
)
class AfterContentComponent implements AfterContentChecked, AfterContentInit {
  String _prevHero = '';
  String comment = '';

  // Query for a CONTENT child of type `ChildComponent`
  @ContentChild(ChildComponent)
  ChildComponent contentChild;

  final LoggerService _logger;

  AfterContentComponent(this._logger) {
    _logIt('AfterContent constructor');
  }

  ngAfterContentInit() {
    // contentChild is set after the content has been initialized
    _logIt('AfterContentInit');
    _doSomething();
  }

  ngAfterContentChecked() {
    // contentChild is updated after the content has been checked
    if (_prevHero == contentChild?.hero) {
      _logIt('AfterContentChecked (no change)');
    } else {
      _prevHero = contentChild?.hero;
      _logIt('AfterContentChecked');
      _doSomething();
    }
  }

  /// This surrogate for real business logic; sets the `comment`
  void _doSomething() {
    comment = contentChild.hero.length > 10 ? "That's a long name" : '';
  }

  void _logIt(String method) {
    var child = contentChild;
    var message = "${method}: ${child?.hero ?? 'no'} child content";
    _logger.log(message);
  }
  // ...
}

//////////////
@Component(
  selector: 'after-content-parent',
  template: '''
    <div class="parent">
      <h2>AfterContent</h2>

      <div *ngIf="show">
        <after-content>
          <my-child></my-child>
        </after-content>
      </div>

      <h4>-- AfterContent Logs --</h4>
      <p><button (click)="reset()">Reset</button></p>
      <div *ngFor="let msg of logs">{{msg}}</div>
    </div>
    ''',
  styles: const ['.parent {background: burlywood}'],
  providers: const [LoggerService],
  directives: const [CORE_DIRECTIVES, AfterContentComponent, ChildComponent],
)
class AfterContentParentComponent {
  final LoggerService _logger;
  bool show = true;

  AfterContentParentComponent(this._logger);

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
