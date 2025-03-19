'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactVirtualized = require('react-virtualized');
var frameworkUtils = require('framework-utils');
var interact = require('interactjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var interact__default = /*#__PURE__*/_interopDefaultLegacy(interact);

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

/**
 * 事件派发器
 */
var Emitter = /*#__PURE__*/function () {
  function Emitter(events) {
    _classCallCheck(this, Emitter);
    this.events = {};
    this.events = events.handlers;
  }
  return _createClass(Emitter, [{
    key: "on",
    value: function on(names, handler) {
      var _this = this;
      var events = names instanceof Array ? names : names.split(' ');
      events.forEach(function (name) {
        if (!_this.events[name]) {
          throw new Error("The event ".concat(name, " does not exist"));
        }
        _this.events[name].push(handler);
      });
      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(name, params) {
      if (!(name in this.events)) {
        throw new Error("The event ".concat(String(name), " cannot be triggered"));
      }
      return this.events[name].reduce(function (r, e) {
        return e(params) !== false && r;
      }, true); // return false if at least one event is false
    }
  }, {
    key: "bind",
    value: function bind(name) {
      if (this.events[name]) {
        throw new Error("The event ".concat(name, " is already bound"));
      }
      this.events[name] = [];
    }
  }, {
    key: "exist",
    value: function exist(name) {
      return Array.isArray(this.events[name]);
    }
  }, {
    key: "off",
    value: function off(name, handler) {
      if (this.events[name]) {
        var listener = this.events[name];
        if (!handler) this.events[name] = [];else {
          var index = listener.indexOf(handler);
          if (index !== -1) listener.splice(index, 1);
        }
      }
    }
  }, {
    key: "offAll",
    value: function offAll() {
      this.events = Object.fromEntries(Object.keys(this.events).map(function (name) {
        return [name, []];
      }));
    }
  }]);
}();

var Events = /*#__PURE__*/_createClass(function Events() {
  var handlers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  _classCallCheck(this, Events);
  this.handlers = {};
  this.handlers = _objectSpread2({
    beforeSetTime: [],
    afterSetTime: [],
    setTimeByTick: [],
    beforeSetPlayRate: [],
    afterSetPlayRate: [],
    setActiveActionIds: [],
    play: [],
    paused: [],
    ended: []
  }, handlers);
});

var PLAYING = 'playing';
var PAUSED = 'paused';
/**
 * 时间轴播放器
 * 可脱离编辑器单独运行
 * @export
 * @class TimelineEngine
 * @extends {Emitter<EventTypes>}
 */
var TimelineEngine = /*#__PURE__*/function (_Emitter) {
  function TimelineEngine() {
    var _this;
    _classCallCheck(this, TimelineEngine);
    _this = _callSuper(this, TimelineEngine, [new Events()]);
    /** requestAnimationFrame timerId */
    _this._timerId = void 0;
    /** 播放速率 */
    _this._playRate = 1;
    /** 当前时间 */
    _this._currentTime = 0;
    /** 播放状态 */
    _this._playState = 'paused';
    /** 时间帧pre数据 */
    _this._prev = void 0;
    /** 动作效果map */
    _this._effectMap = {};
    /** 需要运行的动作map */
    _this._actionMap = {};
    /** 按动作开始时间正序排列后的动作id数组 */
    _this._actionSortIds = [];
    /** 当前遍历到的action index */
    _this._next = 0;
    /** 动作时间范围包含当前时间的actionId列表 */
    _this._activeActionIds = [];
    return _this;
  }
  _inherits(TimelineEngine, _Emitter);
  return _createClass(TimelineEngine, [{
    key: "isPlaying",
    get: /** 是否正在播放 */
    function get() {
      return this._playState === 'playing';
    }
    /** 是否暂停中 */
  }, {
    key: "isPaused",
    get: function get() {
      return this._playState === 'paused';
    }
  }, {
    key: "effects",
    set: function set(effects) {
      this._effectMap = effects;
    }
  }, {
    key: "data",
    set: function set(data) {
      if (this.isPlaying) this.pause();
      this._dealData(data);
      this._dealClear();
      this._dealEnter(this._currentTime);
    }
    /**
     * 设置播放速率
     * @memberof TimelineEngine
     */
  }, {
    key: "setPlayRate",
    value: function setPlayRate(rate) {
      if (rate <= 0) {
        console.error('Error: rate cannot be less than 0!');
        return;
      }
      var result = this.trigger('beforeSetPlayRate', {
        rate: rate,
        engine: this
      });
      if (!result) return false;
      this._playRate = rate;
      this.trigger('afterSetPlayRate', {
        rate: rate,
        engine: this
      });
      return true;
    }
    /**
     * 获取播放速率
     * @memberof TimelineEngine
     */
  }, {
    key: "getPlayRate",
    value: function getPlayRate() {
      return this._playRate;
    }
    /**
     * 重新渲染当前时间
     * @return {*}
     * @memberof TimelineEngine
     */
  }, {
    key: "reRender",
    value: function reRender() {
      if (this.isPlaying) return;
      this._tickAction(this._currentTime);
    }
    /**
     * 设置播放时间
     * @param {number} time
     * @param {boolean} [isTick] 是否是tick触发
     * @memberof TimelineEngine
     */
  }, {
    key: "setTime",
    value: function setTime(time, isTick) {
      var result = isTick || this.trigger('beforeSetTime', {
        time: time,
        engine: this
      });
      if (!result) return false;
      this._currentTime = time;
      this._next = 0;
      this._dealLeave(time);
      this._dealEnter(time);
      if (isTick) this.trigger('setTimeByTick', {
        time: time,
        engine: this
      });else this.trigger('afterSetTime', {
        time: time,
        engine: this
      });
      return true;
    }
    /**
     * 获取当前时间
     * @return {*}  {number}
     * @memberof TimelineEngine
     */
  }, {
    key: "getTime",
    value: function getTime() {
      return this._currentTime;
    }
    /**
     * 运行: 开始时间为当前time
     * @param param
     * @return {boolean} {boolean}
     */
  }, {
    key: "play",
    value: function play(param) {
      var _this2 = this;
      var toTime = param.toTime,
        autoEnd = param.autoEnd;
      var currentTime = this.getTime();
      /** 当前状体啊正在播放中 or 运行终止时间小于开始时间 直接返回*/
      if (this.isPlaying || toTime && toTime <= currentTime) return false;
      // 设置运行状态
      this._playState = PLAYING;
      // activeIds 运行 start
      this._startOrStop('start');
      // 触发事件
      this.trigger('play', {
        engine: this
      });
      this._timerId = requestAnimationFrame(function (time) {
        _this2._prev = time;
        _this2._tick({
          now: time,
          autoEnd: autoEnd,
          to: toTime
        });
      });
      return true;
    }
    /**
     * 暂停播放
     * @memberof TimelineEngine
     */
  }, {
    key: "pause",
    value: function pause() {
      if (this.isPlaying) {
        this._playState = PAUSED;
        // activeIds 运行 stop
        this._startOrStop('stop');
        this.trigger('paused', {
          engine: this
        });
      }
      cancelAnimationFrame(this._timerId);
    }
    /** 播放完成 */
  }, {
    key: "_end",
    value: function _end() {
      this.pause();
      this.trigger('ended', {
        engine: this
      });
    }
  }, {
    key: "_startOrStop",
    value: function _startOrStop(type) {
      for (var i = 0; i < this._activeActionIds.length; i++) {
        var actionId = this._activeActionIds[i];
        var action = this._actionMap[actionId];
        var effect = this._effectMap[action === null || action === void 0 ? void 0 : action.effectId];
        if (type === 'start') {
          var _effect$source;
          (effect === null || effect === void 0 ? void 0 : (_effect$source = effect.source) === null || _effect$source === void 0 ? void 0 : _effect$source.start) && effect.source.start({
            action: action,
            effect: effect,
            engine: this,
            isPlaying: this.isPlaying,
            time: this.getTime()
          });
        } else if (type === 'stop') {
          var _effect$source2;
          (effect === null || effect === void 0 ? void 0 : (_effect$source2 = effect.source) === null || _effect$source2 === void 0 ? void 0 : _effect$source2.stop) && effect.source.stop({
            action: action,
            effect: effect,
            engine: this,
            isPlaying: this.isPlaying,
            time: this.getTime()
          });
        }
      }
    }
    /** 每帧执行 */
  }, {
    key: "_tick",
    value: function _tick(data) {
      var _this3 = this;
      if (this.isPaused) return;
      var now = data.now,
        autoEnd = data.autoEnd,
        to = data.to;
      // 计算当前时间
      var currentTime = this.getTime() + Math.min(1000, now - this._prev) / 1000 * this._playRate;
      this._prev = now;
      // 设置当前时间
      if (to && to <= currentTime) currentTime = to;
      this.setTime(currentTime, true);
      // 执行动作
      this._tickAction(currentTime);
      // 自动停止情况下，判断是否所有动作执行完毕
      if (!to && autoEnd && this._next >= this._actionSortIds.length && this._activeActionIds.length === 0) {
        this._end();
        return;
      }
      // 判断是否终止
      if (to && to <= currentTime) {
        this._end();
      }
      if (this.isPaused) return;
      this._timerId = requestAnimationFrame(function (time) {
        _this3._tick({
          now: time,
          autoEnd: autoEnd,
          to: to
        });
      });
    }
    /** tick运行actions */
  }, {
    key: "_tickAction",
    value: function _tickAction(time) {
      this._dealEnter(time);
      this._dealLeave(time);
      // render
      var length = this._activeActionIds.length;
      for (var i = 0; i < length; i++) {
        var _effect$source3;
        var actionId = this._activeActionIds[i];
        var action = this._actionMap[actionId];
        var effect = this._effectMap[action.effectId];
        if (effect && ((_effect$source3 = effect.source) === null || _effect$source3 === void 0 ? void 0 : _effect$source3.update)) {
          effect.source.update({
            time: time,
            action: action,
            isPlaying: this.isPlaying,
            effect: effect,
            engine: this
          });
        }
      }
    }
    /** 重置active数据 */
  }, {
    key: "_dealClear",
    value: function _dealClear() {
      while (this._activeActionIds.length) {
        var _effect$source4;
        var actionId = this._activeActionIds.shift();
        var action = this._actionMap[actionId];
        var effect = this._effectMap[action === null || action === void 0 ? void 0 : action.effectId];
        if (effect === null || effect === void 0 ? void 0 : (_effect$source4 = effect.source) === null || _effect$source4 === void 0 ? void 0 : _effect$source4.leave) {
          effect.source.leave({
            action: action,
            effect: effect,
            engine: this,
            isPlaying: this.isPlaying,
            time: this.getTime()
          });
        }
      }
      this._next = 0;
    }
    /** 处理action time enter */
  }, {
    key: "_dealEnter",
    value: function _dealEnter(time) {
      // add to active
      while (this._actionSortIds[this._next]) {
        var actionId = this._actionSortIds[this._next];
        var action = this._actionMap[actionId];
        if (!action.disable) {
          // 判断动作开始时间是否到达
          if (action.start > time) break;
          // 动作可以执行开始
          if (action.end > time && !this._activeActionIds.includes(actionId)) {
            var _effect$source5;
            var effect = this._effectMap[action.effectId];
            if (effect && ((_effect$source5 = effect.source) === null || _effect$source5 === void 0 ? void 0 : _effect$source5.enter)) {
              effect.source.enter({
                action: action,
                effect: effect,
                isPlaying: this.isPlaying,
                time: time,
                engine: this
              });
            }
            this._activeActionIds.push(actionId);
          }
        }
        this._next++;
      }
    }
    /** 处理action time leave */
  }, {
    key: "_dealLeave",
    value: function _dealLeave(time) {
      var i = 0;
      while (this._activeActionIds[i]) {
        var actionId = this._activeActionIds[i];
        var action = this._actionMap[actionId];
        // 不在播放区域内
        if (action.start > time || action.end < time) {
          var _effect$source6;
          var effect = this._effectMap[action.effectId];
          if (effect && ((_effect$source6 = effect.source) === null || _effect$source6 === void 0 ? void 0 : _effect$source6.leave)) {
            effect.source.leave({
              action: action,
              effect: effect,
              isPlaying: this.isPlaying,
              time: time,
              engine: this
            });
          }
          this._activeActionIds.splice(i, 1);
          continue;
        }
        i++;
      }
    }
    /** 处理数据 */
  }, {
    key: "_dealData",
    value: function _dealData(data) {
      var actions = [];
      data.map(function (row) {
        actions.push.apply(actions, _toConsumableArray(row.actions));
      });
      var sortActions = actions.sort(function (a, b) {
        return a.start - b.start;
      });
      var actionMap = {};
      var actionSortIds = [];
      sortActions.forEach(function (action) {
        actionSortIds.push(action.id);
        actionMap[action.id] = _objectSpread2({}, action);
      });
      this._actionMap = actionMap;
      this._actionSortIds = actionSortIds;
    }
  }]);
}(Emitter);

var PREFIX = "timeline-editor";
/** 开始时光标所在时间 */
var START_CURSOR_TIME = 0;
/** 默认刻度 */
var DEFAULT_SCALE = 1;
/** 默认刻度分割数量 */
var DEFAULT_SCALE_SPLIT_COUNT = 10;
/** 默认刻度显示宽度 */
var DEFAULT_SCALE_WIDTH = 160;
/** 默认刻度左侧开始距离 */
var DEFAULT_START_LEFT = 20;
/** 默认移动最小像素 */
var DEFAULT_MOVE_GRID = 1;
/** 默认吸附像素 */
var DEFAULT_ADSORPTION_DISTANCE = 8;
/** 默认动作行高度 */
var DEFAULT_ROW_HEIGHT = 32;
/** 最小scale数量 */
var MIN_SCALE_COUNT = 20;
/** 每次新增scale个数 */
var ADD_SCALE_COUNT = 5;

var LogLevel;
(function (LogLevel) {
  LogLevel[LogLevel["VERBOSE"] = 0] = "VERBOSE";
  LogLevel[LogLevel["LOG"] = 1] = "LOG";
  LogLevel[LogLevel["INFO"] = 2] = "INFO";
  LogLevel[LogLevel["WARN"] = 3] = "WARN";
  LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
  LogLevel[LogLevel["FATAL"] = 5] = "FATAL";
  LogLevel[LogLevel["SILENT"] = Infinity] = "SILENT";
})(LogLevel || (LogLevel = {}));
var LogLevels = {
  VERBOSE: LogLevel.VERBOSE,
  LOG: LogLevel.LOG,
  INFO: LogLevel.INFO,
  WARN: LogLevel.WARN,
  ERROR: LogLevel.ERROR,
  SILENT: LogLevel.SILENT
};
function colorize(hex, x) {
  return "color:".concat(hex, ";font-size:").concat(x, "px;");
}
var ConsoleLogger = /*#__PURE__*/function () {
  /**
   * ConsoleLogger
   * @param   {string}  prefix  Logger prefix
   * @return  {ConsoleLogger}
   */
  function ConsoleLogger(prefix) {
    _classCallCheck(this, ConsoleLogger);
    this.Levels = LogLevels;
    this.level = LogLevel.LOG;
    this.prefix = '';
    this.enabled = true;
    this.debugColor = colorize('#cccccc', 12);
    this.logColor = colorize('#bbbbbb', 12);
    this.infoColor = colorize('#2196f3', 12);
    this.warnColor = colorize('#ff00ff', 12);
    this.errorColor = colorize('#e91e63', 12);
    this.fatalColor = colorize('#9a0101', 13);
    this.setPrefix(prefix);
    this.level = ConsoleLogger.level;
    ConsoleLogger.instances.push(this);
  }
  return _createClass(ConsoleLogger, [{
    key: "setPrefix",
    value:
    /**
     * set logger prefix
     * @param prefix
     */
    function setPrefix(prefix) {
      this.prefix = prefix;
    }
    /**
     * enable logger with optional log level
     * @param level
     */
  }, {
    key: "enable",
    value: function enable() {
      var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.level;
      this.level = level;
      this.enabled = true;
    }
    /**
     * disable logger
     */
  }, {
    key: "disable",
    value: function disable() {
      this.enabled = false;
    }
    /**
     * Set log level
     * @param   {LogLevel}  level
     * @return  {void}
     */
  }, {
    key: "setLevel",
    value: function setLevel(level) {
      this.level = level;
    }
    /**
     * trace
     * @param title
     * @param args
     */
  }, {
    key: "trace",
    value: function trace(title) {
      if (!this.enabled || this.level > LogLevel.VERBOSE) {
        return;
      }
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      if (ConsoleLogger.noColor) {
        var _console;
        (_console = console).trace.apply(_console, ["[".concat(this.prefix, "] ").concat(title)].concat(args));
      } else {
        var _console2;
        (_console2 = console).trace.apply(_console2, ["%c[".concat(this.prefix, "] ").concat(title), this.debugColor].concat(args));
      }
    }
    /**
     * debug
     * @param title
     * @param args
     */
  }, {
    key: "debug",
    value: function debug(title) {
      if (!this.enabled || this.level > LogLevel.VERBOSE) {
        return;
      }
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      if (ConsoleLogger.noColor) {
        var _console3;
        (_console3 = console).debug.apply(_console3, ["[".concat(this.prefix, "] ").concat(title)].concat(args));
      } else {
        var _console4;
        (_console4 = console).debug.apply(_console4, ["%c[".concat(this.prefix, "] ").concat(title), this.debugColor].concat(args));
      }
    }
    /**
     * log
     * @param title
     * @param args
     */
  }, {
    key: "log",
    value: function log(title) {
      if (!this.enabled || this.level > LogLevel.LOG) {
        return;
      }
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }
      if (ConsoleLogger.noColor) {
        var _console5;
        (_console5 = console).log.apply(_console5, ["[".concat(this.prefix, "] ").concat(title)].concat(args));
      } else {
        var _console6;
        (_console6 = console).log.apply(_console6, ["%c[".concat(this.prefix, "] ").concat(title), this.logColor].concat(args));
      }
    }
    /**
     * info
     * @param title
     * @param args
     */
  }, {
    key: "info",
    value: function info(title) {
      if (!this.enabled || this.level > LogLevel.INFO) {
        return;
      }
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }
      if (ConsoleLogger.noColor) {
        var _console7;
        (_console7 = console).info.apply(_console7, ["[".concat(this.prefix, "] ").concat(title)].concat(args));
      } else {
        var _console8;
        (_console8 = console).info.apply(_console8, ["%c[".concat(this.prefix, "] ").concat(title), this.infoColor].concat(args));
      }
    }
    /**
     * warn
     * @param title
     * @param args
     */
  }, {
    key: "warn",
    value: function warn(title) {
      if (!this.enabled || this.level > LogLevel.WARN) {
        return;
      }
      for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments[_key5];
      }
      if (ConsoleLogger.noColor) {
        var _console9;
        (_console9 = console).warn.apply(_console9, ["[".concat(this.prefix, "] ").concat(title)].concat(args));
      } else {
        var _console10;
        (_console10 = console).warn.apply(_console10, ["%c[".concat(this.prefix, "] ").concat(title), this.warnColor].concat(args));
      }
    }
    /**
     * error
     * @param title
     * @param args
     */
  }, {
    key: "error",
    value: function error(title) {
      if (!this.enabled || this.level > LogLevel.ERROR) {
        return;
      }
      for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        args[_key6 - 1] = arguments[_key6];
      }
      if (ConsoleLogger.noColor) {
        var _console11;
        (_console11 = console).error.apply(_console11, ["[".concat(this.prefix, "] ").concat(title)].concat(args));
      } else {
        var _console12;
        (_console12 = console).error.apply(_console12, ["%c[".concat(this.prefix, "] ").concat(title), this.errorColor].concat(args));
      }
    }
    /**
     * fatal error
     * @param title
     * @param args
     */
  }, {
    key: "fatal",
    value: function fatal(title) {
      if (!this.enabled || this.level > LogLevel.FATAL) {
        return;
      }
      for (var _len7 = arguments.length, args = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
        args[_key7 - 1] = arguments[_key7];
      }
      if (ConsoleLogger.noColor) {
        var _console13;
        (_console13 = console).error.apply(_console13, ["[".concat(this.prefix, "] ").concat(title)].concat(args));
      } else {
        var _console14;
        (_console14 = console).error.apply(_console14, ["%c[".concat(this.prefix, "] ").concat(title), this.fatalColor].concat(args));
      }
    }
    /**
     * start a group with label
     * @param label
     */
  }, {
    key: "group",
    value: function group() {
      if (console.group) {
        var _console15;
        (_console15 = console).group.apply(_console15, arguments);
      }
    }
    /**
     * end a group
     */
  }, {
    key: "groupEnd",
    value: function groupEnd() {
      if (console.groupEnd) {
        console.groupEnd();
      }
    }
    /**
     * collapse log group
     * @param label
     */
  }, {
    key: "groupCollapsed",
    value: function groupCollapsed() {
      if (console.groupCollapsed) {
        var _console16;
        (_console16 = console).groupCollapsed.apply(_console16, arguments);
      }
    }
  }], [{
    key: "setLevel",
    value: function setLevel(level) {
      this.level = level;
      this.instances.forEach(function (logger) {
        return logger.setLevel(level);
      });
    }
  }, {
    key: "enable",
    value: function enable(level) {
      if (level) {
        this.level = level;
      }
      this.instances.forEach(function (logger) {
        return logger.enable();
      });
    }
  }, {
    key: "disable",
    value: function disable() {
      this.instances.forEach(function (logger) {
        return logger.disable();
      });
    }
  }]);
}();
ConsoleLogger.instances = [];
ConsoleLogger.level = LogLevel.LOG;
ConsoleLogger.Levels = LogLevels;
ConsoleLogger.noColor = false;

var logger = new ConsoleLogger('timeline');
function checkProps(props) {
  var _props$editorData = props.editorData,
    editorData = _props$editorData === void 0 ? [] : _props$editorData,
    _props$effects = props.effects,
    effects = _props$effects === void 0 ? {} : _props$effects,
    _props$scrollTop = props.scrollTop,
    scrollTop = _props$scrollTop === void 0 ? 0 : _props$scrollTop,
    _props$scale = props.scale,
    scale = _props$scale === void 0 ? DEFAULT_SCALE : _props$scale,
    _props$scaleSplitCoun = props.scaleSplitCount,
    scaleSplitCount = _props$scaleSplitCoun === void 0 ? DEFAULT_SCALE_SPLIT_COUNT : _props$scaleSplitCoun,
    _props$scaleWidth = props.scaleWidth,
    scaleWidth = _props$scaleWidth === void 0 ? DEFAULT_SCALE_WIDTH : _props$scaleWidth,
    _props$startLeft = props.startLeft,
    startLeft = _props$startLeft === void 0 ? DEFAULT_START_LEFT : _props$startLeft,
    _props$minScaleCount = props.minScaleCount,
    minScaleCount = _props$minScaleCount === void 0 ? MIN_SCALE_COUNT : _props$minScaleCount,
    _props$maxScaleCount = props.maxScaleCount,
    maxScaleCount = _props$maxScaleCount === void 0 ? Infinity : _props$maxScaleCount,
    _props$rowHeight = props.rowHeight,
    rowHeight = _props$rowHeight === void 0 ? DEFAULT_ROW_HEIGHT : _props$rowHeight;
  if (scale <= 0) {
    logger.error('Error: scale must be greater than 0!');
    scale = DEFAULT_SCALE;
  }
  if (scrollTop < 0) {
    logger.warn('Warning: scrollTop cannot be less than 0!');
    scrollTop = 0;
  }
  if (scaleSplitCount <= 0) {
    logger.warn('Warning: scaleSplitCount cannot be less than 1!');
    scaleSplitCount = 1;
  }
  if (scaleWidth <= 0) {
    logger.warn('Warning: scaleWidth must be greater than 0!');
    scaleWidth = DEFAULT_SCALE_WIDTH;
  }
  if (startLeft < 0) {
    logger.warn('Warning: startLeft cannot be less than 0!');
    startLeft = 0;
  }
  if (minScaleCount < 1) {
    logger.warn('Warning: minScaleCount must be greater than 1!');
    minScaleCount = MIN_SCALE_COUNT;
  }
  minScaleCount = parseInt(minScaleCount + '');
  if (maxScaleCount < minScaleCount) {
    logger.warn('Warning: maxScaleCount cannot be less than minScaleCount!');
    maxScaleCount = minScaleCount;
  }
  maxScaleCount = maxScaleCount === Infinity ? Infinity : parseInt(maxScaleCount + '');
  if (rowHeight <= 0) {
    logger.warn('Warning: rowHeight must be greater than 0!');
    rowHeight = DEFAULT_ROW_HEIGHT;
  }
  var temp = _objectSpread2({}, props);
  delete temp['style'];
  return _objectSpread2(_objectSpread2({}, temp), {}, {
    editorData: editorData,
    effects: effects,
    scrollTop: scrollTop,
    scale: scale,
    scaleSplitCount: scaleSplitCount,
    scaleWidth: scaleWidth,
    startLeft: startLeft,
    minScaleCount: minScaleCount,
    maxScaleCount: maxScaleCount,
    rowHeight: rowHeight
  });
}

/** 时间转像素 */
function parserTimeToPixel(data, param) {
  var startLeft = param.startLeft,
    scale = param.scale,
    scaleWidth = param.scaleWidth;
  return startLeft + data / scale * scaleWidth;
}
/** 像素转时间 */
function parserPixelToTime(data, param) {
  var startLeft = param.startLeft,
    scale = param.scale,
    scaleWidth = param.scaleWidth;
  return (data - startLeft) / scaleWidth * scale;
}
/** 位置 + 宽度 转 start + end */
function parserTransformToTime(data, param) {
  var left = data.left,
    width = data.width;
  var start = parserPixelToTime(left, param);
  var end = parserPixelToTime(left + width, param);
  return {
    start: start,
    end: end
  };
}
/** start + end 转 位置 + 宽度 */
function parserTimeToTransform(data, param) {
  var start = data.start,
    end = data.end;
  var left = parserTimeToPixel(start, param);
  var width = parserTimeToPixel(end, param) - left;
  return {
    left: left,
    width: width
  };
}
/** 根据数据获取刻度个数 */
function getScaleCountByRows(data, param) {
  var max = 0;
  data.forEach(function (row) {
    row.actions.forEach(function (action) {
      max = Math.max(max, action.end);
    });
  });
  var count = Math.ceil(max / param.scale);
  return count + ADD_SCALE_COUNT;
}
/** 根据时间获取目前刻度数 */
function getScaleCountByPixel(data, param) {
  var startLeft = param.startLeft,
    scaleWidth = param.scaleWidth;
  var count = Math.ceil((data - startLeft) / scaleWidth);
  return Math.max(count + ADD_SCALE_COUNT, param.scaleCount);
}
/** 获取动作全部时间的位置集合 */
function parserActionsToPositions(actions, param) {
  var positions = [];
  actions.forEach(function (item) {
    positions.push(parserTimeToPixel(item.start, param));
    positions.push(parserTimeToPixel(item.end, param));
  });
  return positions;
}

function prefix() {
  for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }
  return frameworkUtils.prefixNames.apply(void 0, ["".concat(PREFIX, "-")].concat(classNames));
}

var DEFAULT_SPEED = 1;
var MAX_SPEED = 3;
var CRITICAL_SIZE = 10;
function useAutoScroll(target) {
  var leftBoundRef = React.useRef(Number.MIN_SAFE_INTEGER);
  var rightBoundRef = React.useRef(Number.MAX_SAFE_INTEGER);
  var speed = React.useRef(DEFAULT_SPEED);
  var frame = React.useRef();
  var initAutoScroll = function initAutoScroll() {
    if (target === null || target === void 0 ? void 0 : target.current) {
      var _target$current$getBo = target.current.getBoundingClientRect(),
        left = _target$current$getBo.left,
        width = _target$current$getBo.width;
      leftBoundRef.current = left;
      rightBoundRef.current = left + width;
    }
  };
  var dealDragAutoScroll = function dealDragAutoScroll(e, deltaScroll) {
    // 超出
    if (e.clientX >= rightBoundRef.current || e.clientX <= leftBoundRef.current) {
      cancelAnimationFrame(frame.current);
      var over = Math.abs(e.clientX >= rightBoundRef.current ? e.clientX - rightBoundRef.current : e.clientX - leftBoundRef.current);
      speed.current = Math.min(Number((over / CRITICAL_SIZE).toFixed(0)) * DEFAULT_SPEED, MAX_SPEED);
      var dir = e.clientX >= rightBoundRef.current ? 1 : -1;
      var delta = dir * speed.current;
      var _loop = function loop() {
        deltaScroll && deltaScroll(delta);
        frame.current = requestAnimationFrame(_loop);
      };
      frame.current = requestAnimationFrame(_loop);
      return false;
    } else {
      cancelAnimationFrame(frame.current);
    }
    return true;
  };
  var dealResizeAutoScroll = function dealResizeAutoScroll(e, dir, deltaScroll) {
    if (e.clientX >= rightBoundRef.current || e.clientX < leftBoundRef.current) {
      cancelAnimationFrame(frame.current);
      var over = Math.abs(e.clientX >= rightBoundRef.current ? e.clientX - rightBoundRef.current : e.clientX - leftBoundRef.current);
      speed.current = Math.min(Number((over / CRITICAL_SIZE).toFixed(0)) * DEFAULT_SPEED, MAX_SPEED);
      var direction = e.clientX >= rightBoundRef.current ? 1 : -1;
      var delta = direction * speed.current;
      var _loop2 = function loop() {
        deltaScroll && deltaScroll(delta);
        frame.current = requestAnimationFrame(_loop2);
      };
      frame.current = requestAnimationFrame(_loop2);
      return false;
    } else {
      cancelAnimationFrame(frame.current);
    }
    return true;
  };
  var stopAutoScroll = function stopAutoScroll() {
    leftBoundRef.current = Number.MIN_SAFE_INTEGER;
    rightBoundRef.current = Number.MAX_SAFE_INTEGER;
    speed.current = DEFAULT_SPEED;
    cancelAnimationFrame(frame.current);
  };
  return {
    initAutoScroll: initAutoScroll,
    dealDragAutoScroll: dealDragAutoScroll,
    dealResizeAutoScroll: dealResizeAutoScroll,
    stopAutoScroll: stopAutoScroll
  };
}

var InteractComp = function InteractComp(_ref) {
  var children = _ref.children,
    interactRef = _ref.interactRef,
    draggable = _ref.draggable,
    resizable = _ref.resizable,
    draggableOptions = _ref.draggableOptions,
    resizableOptions = _ref.resizableOptions;
  var nodeRef = React.useRef();
  var interactable = React.useRef();
  var draggableOptionsRef = React.useRef();
  var resizableOptionsRef = React.useRef();
  React.useEffect(function () {
    draggableOptionsRef.current = _objectSpread2({}, draggableOptions);
    resizableOptionsRef.current = _objectSpread2({}, resizableOptions);
  }, [draggableOptions, resizableOptions]);
  React.useEffect(function () {
    interactable.current && interactable.current.unset();
    interactable.current = interact__default['default'](nodeRef.current);
    interactRef.current = interactable.current;
    setInteractions();
  }, [draggable, resizable]);
  var setInteractions = function setInteractions() {
    if (draggable) interactable.current.draggable(_objectSpread2(_objectSpread2({}, draggableOptionsRef.current), {}, {
      onstart: function onstart(e) {
        return draggableOptionsRef.current.onstart && draggableOptionsRef.current.onstart(e);
      },
      onmove: function onmove(e) {
        return draggableOptionsRef.current.onmove && draggableOptionsRef.current.onmove(e);
      },
      onend: function onend(e) {
        return draggableOptionsRef.current.onend && draggableOptionsRef.current.onend(e);
      }
    }));
    if (resizable) interactable.current.resizable(_objectSpread2(_objectSpread2({}, resizableOptionsRef.current), {}, {
      onstart: function onstart(e) {
        return resizableOptionsRef.current.onstart && resizableOptionsRef.current.onstart(e);
      },
      onmove: function onmove(e) {
        return resizableOptionsRef.current.onmove && resizableOptionsRef.current.onmove(e);
      },
      onend: function onend(e) {
        return resizableOptionsRef.current.onend && resizableOptionsRef.current.onend(e);
      }
    }));
  };
  return /*#__PURE__*/React.cloneElement(children, {
    ref: nodeRef,
    draggable: false
  });
};

var RowDnd = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
  var children = _ref.children,
    edges = _ref.edges,
    left = _ref.left,
    width = _ref.width,
    _ref$start = _ref.start,
    start = _ref$start === void 0 ? DEFAULT_START_LEFT : _ref$start,
    _ref$grid = _ref.grid,
    grid = _ref$grid === void 0 ? DEFAULT_MOVE_GRID : _ref$grid,
    _ref$bounds = _ref.bounds,
    bounds = _ref$bounds === void 0 ? {
      left: Number.MIN_SAFE_INTEGER,
      right: Number.MAX_SAFE_INTEGER
    } : _ref$bounds,
    _ref$enableResizing = _ref.enableResizing,
    enableResizing = _ref$enableResizing === void 0 ? true : _ref$enableResizing,
    _ref$enableDragging = _ref.enableDragging,
    enableDragging = _ref$enableDragging === void 0 ? true : _ref$enableDragging,
    _ref$adsorptionDistan = _ref.adsorptionDistance,
    adsorptionDistance = _ref$adsorptionDistan === void 0 ? DEFAULT_ADSORPTION_DISTANCE : _ref$adsorptionDistan,
    _ref$adsorptionPositi = _ref.adsorptionPositions,
    adsorptionPositions = _ref$adsorptionPositi === void 0 ? [] : _ref$adsorptionPositi,
    onResizeStart = _ref.onResizeStart,
    onResize = _ref.onResize,
    onResizeEnd = _ref.onResizeEnd,
    onDragStart = _ref.onDragStart,
    onDragEnd = _ref.onDragEnd,
    onDrag = _ref.onDrag,
    parentRef = _ref.parentRef,
    deltaScrollLeft = _ref.deltaScrollLeft;
  var interactable = React.useRef();
  var deltaX = React.useRef(0);
  var isAdsorption = React.useRef(false);
  var _useAutoScroll = useAutoScroll(parentRef),
    initAutoScroll = _useAutoScroll.initAutoScroll,
    dealDragAutoScroll = _useAutoScroll.dealDragAutoScroll,
    dealResizeAutoScroll = _useAutoScroll.dealResizeAutoScroll,
    stopAutoScroll = _useAutoScroll.stopAutoScroll;
  React.useEffect(function () {
    return function () {
      interactable.current && interactable.current.unset();
    };
  }, []);
  //#region [rgba(100,120,156,0.08)] 赋值相关api
  React.useImperativeHandle(ref, function () {
    return {
      updateLeft: function updateLeft(left) {
        return handleUpdateLeft(left || 0, false);
      },
      updateWidth: function updateWidth(width) {
        return handleUpdateWidth(width, false);
      },
      getLeft: handleGetLeft,
      getWidth: handleGetWidth
    };
  });
  React.useEffect(function () {
    var target = interactable.current.target;
    handleUpdateWidth(typeof width === 'undefined' ? target.offsetWidth : width, false);
  }, [width]);
  React.useEffect(function () {
    handleUpdateLeft(left || 0, false);
  }, [left]);
  var handleUpdateLeft = function handleUpdateLeft(left) {
    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (!interactable.current || !interactable.current.target) return;
    reset && (deltaX.current = 0);
    var target = interactable.current.target;
    target.style.left = "".concat(left, "px");
    Object.assign(target.dataset, {
      left: left
    });
  };
  var handleUpdateWidth = function handleUpdateWidth(width) {
    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (!interactable.current || !interactable.current.target) return;
    reset && (deltaX.current = 0);
    var target = interactable.current.target;
    target.style.width = "".concat(width, "px");
    Object.assign(target.dataset, {
      width: width
    });
  };
  var handleGetLeft = function handleGetLeft() {
    var _target$dataset;
    var target = interactable.current.target;
    return parseFloat((target === null || target === void 0 ? void 0 : (_target$dataset = target.dataset) === null || _target$dataset === void 0 ? void 0 : _target$dataset.left) || '0');
  };
  var handleGetWidth = function handleGetWidth() {
    var _target$dataset2;
    var target = interactable.current.target;
    return parseFloat((target === null || target === void 0 ? void 0 : (_target$dataset2 = target.dataset) === null || _target$dataset2 === void 0 ? void 0 : _target$dataset2.width) || '0');
  };
  //#endregion
  //#region [rgba(188,188,120,0.05)] 回调api
  var handleMoveStart = function handleMoveStart(e) {
    deltaX.current = 0;
    isAdsorption.current = false;
    initAutoScroll();
    onDragStart && onDragStart();
  };
  var move = function move(param) {
    var preLeft = param.preLeft,
      preWidth = param.preWidth,
      scrollDelta = param.scrollDelta;
    var distance = isAdsorption.current ? adsorptionDistance : grid;
    if (Math.abs(deltaX.current) >= distance) {
      var count = parseInt(deltaX.current / distance + '');
      var curLeft = preLeft + count * distance;
      // 控制吸附
      var adsorption = curLeft;
      var minDis = Number.MAX_SAFE_INTEGER;
      adsorptionPositions.forEach(function (item) {
        var dis = Math.abs(item - curLeft);
        if (dis < adsorptionDistance && dis < minDis) adsorption = item;
        var dis2 = Math.abs(item - (curLeft + preWidth));
        if (dis2 < adsorptionDistance && dis2 < minDis) adsorption = item - preWidth;
      });
      if (adsorption !== curLeft) {
        // 采用吸附数据
        isAdsorption.current = true;
        curLeft = adsorption;
      } else {
        // 控制网格
        if ((curLeft - start) % grid !== 0) {
          curLeft = start + grid * Math.round((curLeft - start) / grid);
        }
        isAdsorption.current = false;
      }
      deltaX.current = deltaX.current % distance;
      // 控制bounds
      if (curLeft < bounds.left) curLeft = bounds.left;else if (curLeft + preWidth > bounds.right) curLeft = bounds.right - preWidth;
      if (onDrag) {
        var ret = onDrag({
          lastLeft: preLeft,
          left: curLeft,
          lastWidth: preWidth,
          width: preWidth
        }, scrollDelta);
        if (ret === false) return;
      }
      handleUpdateLeft(curLeft, false);
    }
  };
  var handleMove = function handleMove(e) {
    var target = e.target;
    if (deltaScrollLeft && (parentRef === null || parentRef === void 0 ? void 0 : parentRef.current)) {
      var result = dealDragAutoScroll(e, function (delta) {
        deltaScrollLeft(delta);
        var _target$dataset3 = target.dataset,
          left = _target$dataset3.left,
          width = _target$dataset3.width;
        var preLeft = parseFloat(left);
        var preWidth = parseFloat(width);
        deltaX.current += delta;
        move({
          preLeft: preLeft,
          preWidth: preWidth,
          scrollDelta: delta
        });
      });
      if (!result) return;
    }
    var _target$dataset4 = target.dataset,
      left = _target$dataset4.left,
      width = _target$dataset4.width;
    var preLeft = parseFloat(left);
    var preWidth = parseFloat(width);
    deltaX.current += e.dx;
    move({
      preLeft: preLeft,
      preWidth: preWidth
    });
  };
  var handleMoveStop = function handleMoveStop(e) {
    deltaX.current = 0;
    isAdsorption.current = false;
    stopAutoScroll();
    var target = e.target;
    var _target$dataset5 = target.dataset,
      left = _target$dataset5.left,
      width = _target$dataset5.width;
    onDragEnd && onDragEnd({
      left: parseFloat(left),
      width: parseFloat(width)
    });
  };
  var handleResizeStart = function handleResizeStart(e) {
    var _e$edges;
    deltaX.current = 0;
    isAdsorption.current = false;
    initAutoScroll();
    var dir = ((_e$edges = e.edges) === null || _e$edges === void 0 ? void 0 : _e$edges.right) ? 'right' : 'left';
    onResizeStart && onResizeStart(dir);
  };
  var resize = function resize(param) {
    var dir = param.dir,
      preWidth = param.preWidth,
      preLeft = param.preLeft;
    var distance = isAdsorption.current ? adsorptionDistance : grid;
    if (dir === 'left') {
      // 拖动左侧
      if (Math.abs(deltaX.current) >= distance) {
        var count = parseInt(deltaX.current / distance + '');
        var curLeft = preLeft + count * distance;
        // 控制吸附
        var adsorption = curLeft;
        var minDis = Number.MAX_SAFE_INTEGER;
        adsorptionPositions.forEach(function (item) {
          var dis = Math.abs(item - curLeft);
          if (dis < adsorptionDistance && dis < minDis) adsorption = item;
        });
        if (adsorption !== curLeft) {
          // 采用吸附数据
          isAdsorption.current = true;
          curLeft = adsorption;
        } else {
          // 控制grid网格
          if ((curLeft - start) % grid !== 0) {
            curLeft = start + grid * Math.round((curLeft - start) / grid);
          }
          isAdsorption.current = false;
        }
        deltaX.current = deltaX.current % distance;
        // 控制bounds
        var tempRight = preLeft + preWidth;
        if (curLeft < bounds.left) curLeft = bounds.left;
        var curWidth = tempRight - curLeft;
        if (onResize) {
          var ret = onResize('left', {
            lastLeft: preLeft,
            lastWidth: preWidth,
            left: curLeft,
            width: curWidth
          });
          if (ret === false) return;
        }
        handleUpdateLeft(curLeft, false);
        handleUpdateWidth(curWidth, false);
      }
    } else if (dir === 'right') {
      // 拖动右侧
      if (Math.abs(deltaX.current) >= distance) {
        var _count = parseInt(deltaX.current / grid + '');
        var _curWidth = preWidth + _count * grid;
        // 控制吸附
        var _adsorption = preLeft + _curWidth;
        var _minDis = Number.MAX_SAFE_INTEGER;
        adsorptionPositions.forEach(function (item) {
          var dis = Math.abs(item - (preLeft + _curWidth));
          if (dis < adsorptionDistance && dis < _minDis) _adsorption = item;
        });
        if (_adsorption !== preLeft + _curWidth) {
          // 采用吸附数据
          isAdsorption.current = true;
          _curWidth = _adsorption - preLeft;
        } else {
          // 控制grid网格
          var _tempRight = preLeft + _curWidth;
          if ((_tempRight - start) % grid !== 0) {
            _tempRight = start + grid * Math.round((_tempRight - start) / grid);
            _curWidth = _tempRight - preLeft;
          }
          isAdsorption.current = false;
        }
        deltaX.current = deltaX.current % distance;
        // 控制bounds
        if (preLeft + _curWidth > bounds.right) _curWidth = bounds.right - preLeft;
        if (onResize) {
          var _ret = onResize('right', {
            lastLeft: preLeft,
            lastWidth: preWidth,
            left: preLeft,
            width: _curWidth
          });
          if (_ret === false) return;
        }
        handleUpdateWidth(_curWidth, false);
      }
    }
  };
  var handleResize = function handleResize(e) {
    var _e$edges2;
    var target = e.target;
    var dir = ((_e$edges2 = e.edges) === null || _e$edges2 === void 0 ? void 0 : _e$edges2.left) ? 'left' : 'right';
    if (deltaScrollLeft && (parentRef === null || parentRef === void 0 ? void 0 : parentRef.current)) {
      var result = dealResizeAutoScroll(e, dir, function (delta) {
        deltaScrollLeft(delta);
        var _target$dataset6 = target.dataset,
          left = _target$dataset6.left,
          width = _target$dataset6.width;
        var preLeft = parseFloat(left);
        var preWidth = parseFloat(width);
        deltaX.current += delta;
        resize({
          preLeft: preLeft,
          preWidth: preWidth,
          dir: dir
        });
      });
      if (!result) return;
    }
    var _target$dataset7 = target.dataset,
      left = _target$dataset7.left,
      width = _target$dataset7.width;
    var preLeft = parseFloat(left);
    var preWidth = parseFloat(width);
    deltaX.current += dir === 'left' ? e.deltaRect.left : e.deltaRect.right;
    resize({
      preLeft: preLeft,
      preWidth: preWidth,
      dir: dir
    });
  };
  var handleResizeStop = function handleResizeStop(e) {
    var _e$edges3;
    deltaX.current = 0;
    isAdsorption.current = false;
    stopAutoScroll();
    var target = e.target;
    var _target$dataset8 = target.dataset,
      left = _target$dataset8.left,
      width = _target$dataset8.width;
    var dir = ((_e$edges3 = e.edges) === null || _e$edges3 === void 0 ? void 0 : _e$edges3.right) ? 'right' : 'left';
    onResizeEnd && onResizeEnd(dir, {
      left: parseFloat(left),
      width: parseFloat(width)
    });
  };
  //#endregion
  return /*#__PURE__*/React__default['default'].createElement(InteractComp, {
    interactRef: interactable,
    draggable: enableDragging,
    resizable: enableResizing,
    draggableOptions: {
      lockAxis: 'x',
      onmove: handleMove,
      onstart: handleMoveStart,
      onend: handleMoveStop,
      cursorChecker: function cursorChecker() {
        return null;
      }
    },
    resizableOptions: {
      axis: 'x',
      invert: 'none',
      edges: _objectSpread2({
        left: true,
        right: true,
        top: false,
        bottom: false
      }, edges || {}),
      onmove: handleResize,
      onstart: handleResizeStart,
      onend: handleResizeStop
    }
  }, /*#__PURE__*/React__default['default'].cloneElement(children, {
    style: _objectSpread2(_objectSpread2({}, children.props.style || {}), {}, {
      left: left,
      width: width
    })
  }));
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".timeline-editor-cursor {\n  cursor: ew-resize;\n  position: absolute;\n  top: 32px;\n  height: calc(100% - 32px);\n  box-sizing: border-box;\n  border-left: 1px solid #6A58A5;\n  border-right: 1px solid #6A58A5;\n  transform: translateX(-25%) scaleX(0.5);\n}\n.timeline-editor-cursor-top {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, 0) scaleX(2);\n  margin: auto;\n}\n.timeline-editor-cursor-area {\n  width: 16px;\n  height: 100%;\n  cursor: ew-resize;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n";
styleInject(css_248z);

var Cursor = function Cursor(_ref) {
  var disableDrag = _ref.disableDrag,
    cursorTime = _ref.cursorTime,
    setCursor = _ref.setCursor,
    startLeft = _ref.startLeft,
    timelineWidth = _ref.timelineWidth,
    scaleWidth = _ref.scaleWidth,
    scale = _ref.scale,
    scrollLeft = _ref.scrollLeft,
    scrollSync = _ref.scrollSync,
    areaRef = _ref.areaRef,
    maxScaleCount = _ref.maxScaleCount,
    deltaScrollLeft = _ref.deltaScrollLeft,
    onCursorDragStart = _ref.onCursorDragStart,
    onCursorDrag = _ref.onCursorDrag,
    onCursorDragEnd = _ref.onCursorDragEnd;
  var rowRnd = React.useRef();
  var draggingLeft = React.useRef();
  React.useEffect(function () {
    if (typeof draggingLeft.current === 'undefined') {
      // 非dragging时，根据穿参更新cursor刻度
      rowRnd.current.updateLeft(parserTimeToPixel(cursorTime, {
        startLeft: startLeft,
        scaleWidth: scaleWidth,
        scale: scale
      }) - scrollLeft);
    }
  }, [cursorTime, startLeft, scaleWidth, scale, scrollLeft]);
  return /*#__PURE__*/React__default['default'].createElement(RowDnd, {
    start: startLeft,
    ref: rowRnd,
    parentRef: areaRef,
    bounds: {
      left: 0,
      right: Math.min(timelineWidth, maxScaleCount * scaleWidth + startLeft - scrollLeft)
    },
    deltaScrollLeft: deltaScrollLeft,
    enableDragging: !disableDrag,
    enableResizing: false,
    onDragStart: function onDragStart() {
      onCursorDragStart && onCursorDragStart(cursorTime);
      draggingLeft.current = parserTimeToPixel(cursorTime, {
        startLeft: startLeft,
        scaleWidth: scaleWidth,
        scale: scale
      }) - scrollLeft;
      rowRnd.current.updateLeft(draggingLeft.current);
    },
    onDragEnd: function onDragEnd() {
      var time = parserPixelToTime(draggingLeft.current + scrollLeft, {
        startLeft: startLeft,
        scale: scale,
        scaleWidth: scaleWidth
      });
      setCursor({
        time: time
      });
      onCursorDragEnd && onCursorDragEnd(time);
      draggingLeft.current = undefined;
    },
    onDrag: function onDrag(_ref2) {
      var left = _ref2.left;
      var scroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var scrollLeft = scrollSync.current.state.scrollLeft;
      if (!scroll || scrollLeft === 0) {
        // 拖拽时，如果当前left < left min，将数值设置为 left min
        if (left < startLeft - scrollLeft) draggingLeft.current = startLeft - scrollLeft;else draggingLeft.current = left;
      } else {
        // 自动滚动时，如果当前left < left min，将数值设置为 left min
        if (draggingLeft.current < startLeft - scrollLeft - scroll) {
          draggingLeft.current = startLeft - scrollLeft - scroll;
        }
      }
      rowRnd.current.updateLeft(draggingLeft.current);
      var time = parserPixelToTime(draggingLeft.current + scrollLeft, {
        startLeft: startLeft,
        scale: scale,
        scaleWidth: scaleWidth
      });
      setCursor({
        time: time
      });
      onCursorDrag && onCursorDrag(time);
      return false;
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: prefix('cursor')
  }, /*#__PURE__*/React__default['default'].createElement("svg", {
    className: prefix('cursor-top'),
    width: "8",
    height: "12",
    viewBox: "0 0 8 12",
    fill: "none"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M0 1C0 0.447715 0.447715 0 1 0H7C7.55228 0 8 0.447715 8 1V9.38197C8 9.76074 7.786 10.107 7.44721 10.2764L4.44721 11.7764C4.16569 11.9172 3.83431 11.9172 3.55279 11.7764L0.552786 10.2764C0.214002 10.107 0 9.76074 0 9.38197V1Z",
    fill: "#6A58A5"
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: prefix('cursor-area')
  })));
};

var css_248z$1 = ".timeline-editor-drag-line-container {\n  position: absolute;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.timeline-editor-drag-line {\n  width: 0;\n  position: absolute;\n  top: 0;\n  height: 99%;\n  border-left: 1px dashed rgba(82, 151, 255, 0.6);\n}\n";
styleInject(css_248z$1);

/** 拖拽辅助线 */
var DragLines = function DragLines(_ref) {
  var isMoving = _ref.isMoving,
    _ref$movePositions = _ref.movePositions,
    movePositions = _ref$movePositions === void 0 ? [] : _ref$movePositions,
    _ref$assistPositions = _ref.assistPositions,
    assistPositions = _ref$assistPositions === void 0 ? [] : _ref$assistPositions,
    scrollLeft = _ref.scrollLeft;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: prefix('drag-line-container')
  }, isMoving && movePositions.filter(function (item) {
    return assistPositions.includes(item);
  }).map(function (linePos, index) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: index,
      className: prefix('drag-line'),
      style: {
        left: linePos - scrollLeft
      }
    });
  }));
};

var css_248z$2 = ".timeline-editor:hover .timeline-editor-edit-area .ReactVirtualized__Grid::-webkit-scrollbar {\n  height: 4px;\n}\n.timeline-editor-edit-area {\n  flex: 1 1 auto;\n  margin-top: 10px;\n  overflow: hidden;\n  position: relative;\n}\n.timeline-editor-edit-area .ReactVirtualized__Grid {\n  outline: none !important;\n  overflow: overlay !important;\n}\n.timeline-editor-edit-area .ReactVirtualized__Grid::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n.timeline-editor-edit-area .ReactVirtualized__Grid::-webkit-scrollbar-track {\n  background-color: transparent !important;\n}\n.timeline-editor-edit-area .ReactVirtualized__Grid::-webkit-scrollbar-thumb {\n  background: #313132;\n  border-radius: 16px;\n}\n";
styleInject(css_248z$2);

var css_248z$3 = ".timeline-editor-action {\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: #2f3134;\n}\n.timeline-editor-action .timeline-editor-action-left-stretch,\n.timeline-editor-action .timeline-editor-action-right-stretch {\n  position: absolute;\n  top: 0;\n  width: 10px;\n  border-radius: 4px;\n  height: 100%;\n  overflow: hidden;\n}\n.timeline-editor-action .timeline-editor-action-left-stretch::after,\n.timeline-editor-action .timeline-editor-action-right-stretch::after {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  border-radius: 4px;\n  border-top: 28px solid transparent;\n  border-bottom: 28px solid transparent;\n}\n.timeline-editor-action .timeline-editor-action-left-stretch {\n  left: 0;\n}\n.timeline-editor-action .timeline-editor-action-left-stretch::after {\n  left: 0;\n  content: \"\";\n  border-left: 7px solid rgba(255, 255, 255, 0.1);\n  border-right: 7px solid transparent;\n}\n.timeline-editor-action .timeline-editor-action-right-stretch {\n  right: 0;\n}\n.timeline-editor-action .timeline-editor-action-right-stretch::after {\n  right: 0;\n  content: \"\";\n  border-right: 7px solid rgba(255, 255, 255, 0.1);\n  border-left: 7px solid transparent;\n}\n";
styleInject(css_248z$3);

var EditAction = function EditAction(_ref) {
  var editorData = _ref.editorData,
    row = _ref.row,
    action = _ref.action,
    effects = _ref.effects,
    rowHeight = _ref.rowHeight,
    scale = _ref.scale,
    scaleWidth = _ref.scaleWidth,
    scaleSplitCount = _ref.scaleSplitCount,
    startLeft = _ref.startLeft,
    gridSnap = _ref.gridSnap,
    disableDrag = _ref.disableDrag,
    scaleCount = _ref.scaleCount,
    maxScaleCount = _ref.maxScaleCount,
    setScaleCount = _ref.setScaleCount,
    onActionMoveStart = _ref.onActionMoveStart,
    onActionMoving = _ref.onActionMoving,
    onActionMoveEnd = _ref.onActionMoveEnd,
    onActionResizeStart = _ref.onActionResizeStart,
    onActionResizeEnd = _ref.onActionResizeEnd,
    onActionResizing = _ref.onActionResizing,
    dragLineData = _ref.dragLineData,
    setEditorData = _ref.setEditorData,
    onClickAction = _ref.onClickAction,
    onClickActionOnly = _ref.onClickActionOnly,
    onDoubleClickAction = _ref.onDoubleClickAction,
    onContextMenuAction = _ref.onContextMenuAction,
    getActionRender = _ref.getActionRender,
    handleTime = _ref.handleTime,
    areaRef = _ref.areaRef,
    deltaScrollLeft = _ref.deltaScrollLeft;
  var rowRnd = React.useRef();
  var isDragWhenClick = React.useRef(false);
  var id = action.id,
    maxEnd = action.maxEnd,
    minStart = action.minStart,
    end = action.end,
    start = action.start,
    selected = action.selected,
    _action$flexible = action.flexible,
    flexible = _action$flexible === void 0 ? true : _action$flexible,
    _action$movable = action.movable,
    movable = _action$movable === void 0 ? true : _action$movable,
    effectId = action.effectId;
  // 获取最大/最小 像素范围
  var leftLimit = parserTimeToPixel(minStart || 0, {
    startLeft: startLeft,
    scale: scale,
    scaleWidth: scaleWidth
  });
  var rightLimit = Math.min(maxScaleCount * scaleWidth + startLeft,
  // 根据maxScaleCount限制移动范围
  parserTimeToPixel(maxEnd || Number.MAX_VALUE, {
    startLeft: startLeft,
    scale: scale,
    scaleWidth: scaleWidth
  }));
  // 初始化动作坐标数据
  var _useState = React.useState(function () {
      return parserTimeToTransform({
        start: start,
        end: end
      }, {
        startLeft: startLeft,
        scale: scale,
        scaleWidth: scaleWidth
      });
    }),
    _useState2 = _slicedToArray(_useState, 2),
    transform = _useState2[0],
    setTransform = _useState2[1];
  React.useLayoutEffect(function () {
    setTransform(parserTimeToTransform({
      start: start,
      end: end
    }, {
      startLeft: startLeft,
      scale: scale,
      scaleWidth: scaleWidth
    }));
  }, [end, start, startLeft, scaleWidth, scale]);
  // 配置拖拽网格对其属性
  var gridSize = scaleWidth / scaleSplitCount;
  // 动作的名称
  var classNames = ['action'];
  if (movable) classNames.push('action-movable');
  if (selected) classNames.push('action-selected');
  if (flexible) classNames.push('action-flexible');
  if (effects[effectId]) classNames.push("action-effect-".concat(effectId));
  /** 计算scale count */
  var handleScaleCount = function handleScaleCount(left, width) {
    var curScaleCount = getScaleCountByPixel(left + width, {
      startLeft: startLeft,
      scaleCount: scaleCount,
      scaleWidth: scaleWidth
    });
    if (curScaleCount !== scaleCount) setScaleCount(curScaleCount);
  };
  //#region [rgba(100,120,156,0.08)] 回调
  var handleDragStart = function handleDragStart() {
    onActionMoveStart && onActionMoveStart({
      action: action,
      row: row
    });
  };
  var handleDrag = function handleDrag(_ref2) {
    var left = _ref2.left,
      width = _ref2.width;
    isDragWhenClick.current = true;
    if (onActionMoving) {
      var _parserTransformToTim = parserTransformToTime({
          left: left,
          width: width
        }, {
          scaleWidth: scaleWidth,
          scale: scale,
          startLeft: startLeft
        }),
        _start = _parserTransformToTim.start,
        _end = _parserTransformToTim.end;
      var result = onActionMoving({
        action: action,
        row: row,
        start: _start,
        end: _end
      });
      if (result === false) return false;
    }
    setTransform({
      left: left,
      width: width
    });
    handleScaleCount(left, width);
  };
  var handleDragEnd = function handleDragEnd(_ref3) {
    var left = _ref3.left,
      width = _ref3.width;
    // 计算时间
    var _parserTransformToTim2 = parserTransformToTime({
        left: left,
        width: width
      }, {
        scaleWidth: scaleWidth,
        scale: scale,
        startLeft: startLeft
      }),
      start = _parserTransformToTim2.start,
      end = _parserTransformToTim2.end;
    // 设置数据
    var rowItem = editorData.find(function (item) {
      return item.id === row.id;
    });
    var action = rowItem.actions.find(function (item) {
      return item.id === id;
    });
    action.start = start;
    action.end = end;
    setEditorData(editorData);
    // 执行回调
    if (onActionMoveEnd) onActionMoveEnd({
      action: action,
      row: row,
      start: start,
      end: end
    });
  };
  var handleResizeStart = function handleResizeStart(dir) {
    onActionResizeStart && onActionResizeStart({
      action: action,
      row: row,
      dir: dir
    });
  };
  var handleResizing = function handleResizing(dir, _ref4) {
    var left = _ref4.left,
      width = _ref4.width;
    isDragWhenClick.current = true;
    if (onActionResizing) {
      var _parserTransformToTim3 = parserTransformToTime({
          left: left,
          width: width
        }, {
          scaleWidth: scaleWidth,
          scale: scale,
          startLeft: startLeft
        }),
        _start2 = _parserTransformToTim3.start,
        _end2 = _parserTransformToTim3.end;
      var result = onActionResizing({
        action: action,
        row: row,
        start: _start2,
        end: _end2,
        dir: dir
      });
      if (result === false) return false;
    }
    setTransform({
      left: left,
      width: width
    });
    handleScaleCount(left, width);
  };
  var handleResizeEnd = function handleResizeEnd(dir, _ref5) {
    var left = _ref5.left,
      width = _ref5.width;
    // 计算时间
    var _parserTransformToTim4 = parserTransformToTime({
        left: left,
        width: width
      }, {
        scaleWidth: scaleWidth,
        scale: scale,
        startLeft: startLeft
      }),
      start = _parserTransformToTim4.start,
      end = _parserTransformToTim4.end;
    // 设置数据
    var rowItem = editorData.find(function (item) {
      return item.id === row.id;
    });
    var action = rowItem.actions.find(function (item) {
      return item.id === id;
    });
    action.start = start;
    action.end = end;
    setEditorData(editorData);
    // 触发回调
    if (onActionResizeEnd) onActionResizeEnd({
      action: action,
      row: row,
      start: start,
      end: end,
      dir: dir
    });
  };
  //#endregion
  var nowAction = _objectSpread2(_objectSpread2({}, action), parserTransformToTime({
    left: transform.left,
    width: transform.width
  }, {
    startLeft: startLeft,
    scaleWidth: scaleWidth,
    scale: scale
  }));
  var nowRow = _objectSpread2(_objectSpread2({}, row), {}, {
    actions: _toConsumableArray(row.actions)
  });
  if (row.actions.includes(action)) {
    nowRow.actions[row.actions.indexOf(action)] = nowAction;
  }
  return /*#__PURE__*/React__default['default'].createElement(RowDnd, {
    ref: rowRnd,
    parentRef: areaRef,
    start: startLeft,
    left: transform.left,
    width: transform.width,
    grid: gridSnap && gridSize || DEFAULT_MOVE_GRID,
    adsorptionDistance: gridSnap ? Math.max((gridSize || DEFAULT_MOVE_GRID) / 2, DEFAULT_ADSORPTION_DISTANCE) : DEFAULT_ADSORPTION_DISTANCE,
    adsorptionPositions: dragLineData.assistPositions,
    bounds: {
      left: leftLimit,
      right: rightLimit
    },
    edges: {
      left: !disableDrag && flexible && ".".concat(prefix('action-left-stretch')),
      right: !disableDrag && flexible && ".".concat(prefix('action-right-stretch'))
    },
    enableDragging: !disableDrag && movable,
    enableResizing: !disableDrag && flexible,
    onDragStart: handleDragStart,
    onDrag: handleDrag,
    onDragEnd: handleDragEnd,
    onResizeStart: handleResizeStart,
    onResize: handleResizing,
    onResizeEnd: handleResizeEnd,
    deltaScrollLeft: deltaScrollLeft
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    onMouseDown: function onMouseDown() {
      isDragWhenClick.current = false;
    },
    onClick: function onClick(e) {
      var time;
      if (onClickAction) {
        time = handleTime(e);
        onClickAction(e, {
          row: row,
          action: action,
          time: time
        });
      }
      if (!isDragWhenClick.current && onClickActionOnly) {
        if (!time) time = handleTime(e);
        onClickActionOnly(e, {
          row: row,
          action: action,
          time: time
        });
      }
    },
    onDoubleClick: function onDoubleClick(e) {
      if (onDoubleClickAction) {
        var time = handleTime(e);
        onDoubleClickAction(e, {
          row: row,
          action: action,
          time: time
        });
      }
    },
    onContextMenu: function onContextMenu(e) {
      if (onContextMenuAction) {
        var time = handleTime(e);
        onContextMenuAction(e, {
          row: row,
          action: action,
          time: time
        });
      }
    },
    className: prefix((classNames || []).join(' ')),
    style: {
      height: rowHeight
    }
  }, getActionRender && getActionRender(nowAction, nowRow), flexible && /*#__PURE__*/React__default['default'].createElement("div", {
    className: prefix('action-left-stretch')
  }), flexible && /*#__PURE__*/React__default['default'].createElement("div", {
    className: prefix('action-right-stretch')
  })));
};

var css_248z$4 = ".timeline-editor-edit-row {\n  background-repeat: no-repeat, repeat;\n  background-image: linear-gradient(#191b1d, #191b1d), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 0);\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n}\n";
styleInject(css_248z$4);

var EditRow = function EditRow(props) {
  var rowData = props.rowData,
    _props$style = props.style,
    style = _props$style === void 0 ? {} : _props$style,
    onClickRow = props.onClickRow,
    onDoubleClickRow = props.onDoubleClickRow,
    onContextMenuRow = props.onContextMenuRow,
    areaRef = props.areaRef,
    scrollLeft = props.scrollLeft,
    startLeft = props.startLeft,
    scale = props.scale,
    scaleWidth = props.scaleWidth;
  var classNames = ['edit-row'];
  if (rowData === null || rowData === void 0 ? void 0 : rowData.selected) classNames.push('edit-row-selected');
  var handleTime = function handleTime(e) {
    if (!areaRef.current) return;
    var rect = areaRef.current.getBoundingClientRect();
    var position = e.clientX - rect.x;
    var left = position + scrollLeft;
    var time = parserPixelToTime(left, {
      startLeft: startLeft,
      scale: scale,
      scaleWidth: scaleWidth
    });
    return time;
  };
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(prefix.apply(void 0, classNames), " ").concat(((rowData === null || rowData === void 0 ? void 0 : rowData.classNames) || []).join(' ')),
    style: style,
    onClick: function onClick(e) {
      if (rowData && onClickRow) {
        var time = handleTime(e);
        onClickRow(e, {
          row: rowData,
          time: time
        });
      }
    },
    onDoubleClick: function onDoubleClick(e) {
      if (rowData && onDoubleClickRow) {
        var time = handleTime(e);
        onDoubleClickRow(e, {
          row: rowData,
          time: time
        });
      }
    },
    onContextMenu: function onContextMenu(e) {
      if (rowData && onContextMenuRow) {
        var time = handleTime(e);
        onContextMenuRow(e, {
          row: rowData,
          time: time
        });
      }
    }
  }, ((rowData === null || rowData === void 0 ? void 0 : rowData.actions) || []).map(function (action) {
    return /*#__PURE__*/React__default['default'].createElement(EditAction, _objectSpread2(_objectSpread2({
      key: action.id
    }, props), {}, {
      handleTime: handleTime,
      row: rowData,
      action: action
    }));
  }));
};

function useDragLine() {
  var _useState = React.useState({
      isMoving: false,
      movePositions: [],
      assistPositions: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    dragLineData = _useState2[0],
    setDragLineData = _useState2[1];
  /** 获取辅助线 */
  var defaultGetAssistPosition = function defaultGetAssistPosition(data) {
    var editorData = data.editorData,
      assistActionIds = data.assistActionIds,
      action = data.action,
      row = data.row,
      scale = data.scale,
      scaleWidth = data.scaleWidth,
      startLeft = data.startLeft,
      cursorLeft = data.cursorLeft,
      hideCursor = data.hideCursor;
    var otherActions = [];
    if (assistActionIds) {
      editorData.forEach(function (rowItem) {
        rowItem.actions.forEach(function (actionItem) {
          if (assistActionIds.includes(actionItem.id)) otherActions.push(actionItem);
        });
      });
    } else {
      editorData.forEach(function (rowItem) {
        if (rowItem.id !== row.id) {
          otherActions.push.apply(otherActions, _toConsumableArray(rowItem.actions));
        } else {
          rowItem.actions.forEach(function (actionItem) {
            if (actionItem.id !== action.id) otherActions.push(actionItem);
          });
        }
      });
    }
    var positions = parserActionsToPositions(otherActions, {
      startLeft: startLeft,
      scale: scale,
      scaleWidth: scaleWidth
    });
    if (!hideCursor) positions.push(cursorLeft);
    return positions;
  };
  /** 获取当前移动标记 */
  var defaultGetMovePosition = function defaultGetMovePosition(data) {
    var start = data.start,
      end = data.end,
      dir = data.dir,
      scale = data.scale,
      scaleWidth = data.scaleWidth,
      startLeft = data.startLeft;
    var _parserTimeToTransfor = parserTimeToTransform({
        start: start,
        end: end
      }, {
        startLeft: startLeft,
        scaleWidth: scaleWidth,
        scale: scale
      }),
      left = _parserTimeToTransfor.left,
      width = _parserTimeToTransfor.width;
    if (!dir) return [left, left + width];
    return dir === "right" ? [left + width] : [left];
  };
  /** 初始化draglines */
  var initDragLine = function initDragLine(data) {
    var movePositions = data.movePositions,
      assistPositions = data.assistPositions;
    setDragLineData({
      isMoving: true,
      movePositions: movePositions || [],
      assistPositions: assistPositions || []
    });
  };
  /** 更新dragline */
  var updateDragLine = function updateDragLine(data) {
    var movePositions = data.movePositions,
      assistPositions = data.assistPositions;
    setDragLineData(function (pre) {
      return _objectSpread2(_objectSpread2({}, pre), {}, {
        movePositions: movePositions || pre.movePositions,
        assistPositions: assistPositions || pre.assistPositions
      });
    });
  };
  /** 释放draglines */
  var disposeDragLine = function disposeDragLine() {
    setDragLineData({
      isMoving: false,
      movePositions: [],
      assistPositions: []
    });
  };
  return {
    initDragLine: initDragLine,
    updateDragLine: updateDragLine,
    disposeDragLine: disposeDragLine,
    dragLineData: dragLineData,
    defaultGetAssistPosition: defaultGetAssistPosition,
    defaultGetMovePosition: defaultGetMovePosition
  };
}

var EditArea = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var editorData = props.editorData,
    _rowHeight = props.rowHeight,
    scaleWidth = props.scaleWidth,
    scaleCount = props.scaleCount,
    startLeft = props.startLeft,
    scrollLeft = props.scrollLeft,
    scrollTop = props.scrollTop,
    scale = props.scale,
    hideCursor = props.hideCursor,
    cursorTime = props.cursorTime,
    _onScroll = props.onScroll,
    dragLine = props.dragLine,
    getAssistDragLineActionIds = props.getAssistDragLineActionIds,
    _onActionMoveEnd = props.onActionMoveEnd,
    _onActionMoveStart = props.onActionMoveStart,
    _onActionMoving = props.onActionMoving,
    _onActionResizeEnd = props.onActionResizeEnd,
    _onActionResizeStart = props.onActionResizeStart,
    _onActionResizing = props.onActionResizing;
  var _useDragLine = useDragLine(),
    dragLineData = _useDragLine.dragLineData,
    initDragLine = _useDragLine.initDragLine,
    updateDragLine = _useDragLine.updateDragLine,
    disposeDragLine = _useDragLine.disposeDragLine,
    defaultGetAssistPosition = _useDragLine.defaultGetAssistPosition,
    defaultGetMovePosition = _useDragLine.defaultGetMovePosition;
  var editAreaRef = React.useRef();
  var gridRef = React.useRef();
  var heightRef = React.useRef(-1);
  // ref 数据
  React.useImperativeHandle(ref, function () {
    return {
      get domRef() {
        return editAreaRef;
      }
    };
  });
  var handleInitDragLine = function handleInitDragLine(data) {
    if (dragLine) {
      var assistActionIds = getAssistDragLineActionIds && getAssistDragLineActionIds({
        action: data.action,
        row: data.row,
        editorData: editorData
      });
      var cursorLeft = parserTimeToPixel(cursorTime, {
        scaleWidth: scaleWidth,
        scale: scale,
        startLeft: startLeft
      });
      var assistPositions = defaultGetAssistPosition({
        editorData: editorData,
        assistActionIds: assistActionIds,
        action: data.action,
        row: data.row,
        scale: scale,
        scaleWidth: scaleWidth,
        startLeft: startLeft,
        hideCursor: hideCursor,
        cursorLeft: cursorLeft
      });
      initDragLine({
        assistPositions: assistPositions
      });
    }
  };
  var handleUpdateDragLine = function handleUpdateDragLine(data) {
    if (dragLine) {
      var movePositions = defaultGetMovePosition(_objectSpread2(_objectSpread2({}, data), {}, {
        startLeft: startLeft,
        scaleWidth: scaleWidth,
        scale: scale
      }));
      updateDragLine({
        movePositions: movePositions
      });
    }
  };
  /** 获取每个cell渲染内容 */
  var cellRenderer = function cellRenderer(_ref) {
    var rowIndex = _ref.rowIndex,
      key = _ref.key,
      style = _ref.style;
    var row = editorData[rowIndex]; // 行数据
    return /*#__PURE__*/React__default['default'].createElement(EditRow, _objectSpread2(_objectSpread2({}, props), {}, {
      style: _objectSpread2(_objectSpread2({}, style), {}, {
        backgroundPositionX: "0, ".concat(startLeft, "px"),
        backgroundSize: "".concat(startLeft, "px, ").concat(scaleWidth, "px")
      }),
      areaRef: editAreaRef,
      key: key,
      rowHeight: (row === null || row === void 0 ? void 0 : row.rowHeight) || _rowHeight,
      rowData: row,
      dragLineData: dragLineData,
      onActionMoveStart: function onActionMoveStart(data) {
        handleInitDragLine(data);
        return _onActionMoveStart && _onActionMoveStart(data);
      },
      onActionResizeStart: function onActionResizeStart(data) {
        handleInitDragLine(data);
        return _onActionResizeStart && _onActionResizeStart(data);
      },
      onActionMoving: function onActionMoving(data) {
        handleUpdateDragLine(data);
        return _onActionMoving && _onActionMoving(data);
      },
      onActionResizing: function onActionResizing(data) {
        handleUpdateDragLine(data);
        return _onActionResizing && _onActionResizing(data);
      },
      onActionResizeEnd: function onActionResizeEnd(data) {
        disposeDragLine();
        return _onActionResizeEnd && _onActionResizeEnd(data);
      },
      onActionMoveEnd: function onActionMoveEnd(data) {
        disposeDragLine();
        return _onActionMoveEnd && _onActionMoveEnd(data);
      }
    }));
  };
  React.useLayoutEffect(function () {
    var _gridRef$current;
    (_gridRef$current = gridRef.current) === null || _gridRef$current === void 0 ? void 0 : _gridRef$current.scrollToPosition({
      scrollTop: scrollTop,
      scrollLeft: scrollLeft
    });
  }, [scrollTop, scrollLeft]);
  React.useEffect(function () {
    gridRef.current.recomputeGridSize();
  }, [editorData]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    ref: editAreaRef,
    className: prefix('edit-area')
  }, /*#__PURE__*/React__default['default'].createElement(reactVirtualized.AutoSizer, null, function (_ref2) {
    var width = _ref2.width,
      height = _ref2.height;
    // 获取全部高度
    var totalHeight = 0;
    // 高度列表
    var heights = editorData.map(function (row) {
      var itemHeight = row.rowHeight || _rowHeight;
      totalHeight += itemHeight;
      return itemHeight;
    });
    if (totalHeight < height) {
      heights.push(height - totalHeight);
      if (heightRef.current !== height && heightRef.current >= 0) {
        setTimeout(function () {
          var _gridRef$current2;
          return (_gridRef$current2 = gridRef.current) === null || _gridRef$current2 === void 0 ? void 0 : _gridRef$current2.recomputeGridSize({
            rowIndex: heights.length - 1
          });
        });
      }
    }
    heightRef.current = height;
    return /*#__PURE__*/React__default['default'].createElement(reactVirtualized.Grid, {
      columnCount: 1,
      rowCount: heights.length,
      ref: gridRef,
      cellRenderer: cellRenderer,
      columnWidth: Math.max(scaleCount * scaleWidth + startLeft, width),
      width: width,
      height: height,
      rowHeight: function rowHeight(_ref3) {
        var index = _ref3.index;
        return heights[index] || _rowHeight;
      },
      overscanRowCount: 10,
      overscanColumnCount: 0,
      onScroll: function onScroll(param) {
        _onScroll(param);
      }
    });
  }), dragLine && /*#__PURE__*/React__default['default'].createElement(DragLines, _objectSpread2({
    scrollLeft: scrollLeft
  }, dragLineData)));
});

var css_248z$5 = ".timeline-editor {\n  height: 600px;\n  width: 600px;\n  min-height: 32px;\n  position: relative;\n  font-size: 12px;\n  font-family: \"PingFang SC\";\n  background-color: #191b1d;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n";
styleInject(css_248z$5);

var css_248z$6 = ".timeline-editor-time-area {\n  position: relative;\n  height: 32px;\n  flex: 0 0 auto;\n}\n.timeline-editor-time-area .ReactVirtualized__Grid {\n  outline: none;\n}\n.timeline-editor-time-area .ReactVirtualized__Grid::-webkit-scrollbar {\n  display: none;\n}\n.timeline-editor-time-area-interact {\n  position: absolute;\n  cursor: pointer;\n  left: 0;\n  top: 0;\n  pointer-events: auto;\n}\n.timeline-editor-time-unit {\n  border-right: 1px solid rgba(255, 255, 255, 0.2);\n  position: relative;\n  box-sizing: content-box;\n  height: 4px !important;\n  bottom: 0 !important;\n  top: auto !important;\n}\n.timeline-editor-time-unit-big {\n  height: 8px !important;\n}\n.timeline-editor-time-unit-scale {\n  color: rgba(255, 255, 255, 0.6);\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: translate(50%, -100%);\n}\n";
styleInject(css_248z$6);

/** 动画时间轴组件 */
var TimeArea = function TimeArea(_ref) {
  var setCursor = _ref.setCursor,
    maxScaleCount = _ref.maxScaleCount,
    hideCursor = _ref.hideCursor,
    scale = _ref.scale,
    scaleWidth = _ref.scaleWidth,
    scaleCount = _ref.scaleCount,
    scaleSplitCount = _ref.scaleSplitCount,
    startLeft = _ref.startLeft,
    scrollLeft = _ref.scrollLeft,
    onClickTimeArea = _ref.onClickTimeArea,
    getScaleRender = _ref.getScaleRender,
    comments = _ref.comments,
    handleCommentClick = _ref.handleCommentClick;
  var gridRef = React.useRef();
  var commentDotsRef = React.useRef(new Map());
  /** 是否显示细分刻度 */
  var showUnit = scaleSplitCount > 0;
  // Helper function to check if a point is inside a circle
  var isPointInCircle = function isPointInCircle(x, y, circleX, circleY, radius) {
    var dx = x - circleX;
    var dy = y - circleY;
    return dx * dx + dy * dy <= radius * radius;
  };
  // Register comment dots for later hit testing
  var registerCommentDot = function registerCommentDot(element, commentId) {
    commentDotsRef.current.set(commentId, element);
  };
  /** 获取每个cell渲染内容 */
  var cellRenderer = function cellRenderer(_ref2) {
    var columnIndex = _ref2.columnIndex,
      key = _ref2.key,
      style = _ref2.style;
    var isShowScale = showUnit ? columnIndex % scaleSplitCount === 0 : true;
    var classNames = ['time-unit'];
    if (isShowScale) classNames.push('time-unit-big');
    var item = (showUnit ? columnIndex / scaleSplitCount : columnIndex) * scale;
    var commentsInRange = comments.filter(function (comment) {
      return Math.floor(comment.timestamp) === item;
    });
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: key,
      style: style,
      className: prefix.apply(void 0, classNames)
    }, isShowScale && /*#__PURE__*/React__default['default'].createElement("div", {
      className: prefix('time-unit-scale')
    }, getScaleRender ? getScaleRender(item) : item), commentsInRange.map(function (comment) {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        key: comment.id,
        className: prefix('comment-dot'),
        "data-comment-id": comment.id,
        ref: function ref(el) {
          return el && registerCommentDot(el, comment.id);
        },
        style: {
          position: 'absolute',
          top: '-23px',
          left: '50%',
          //transform: 'translateX(-50%)',
          width: '10px',
          height: '10px',
          backgroundColor: '#6A58A5',
          borderRadius: '50%',
          cursor: 'pointer',
          zIndex: 1000
          //pointerEvents: 'all',
          //pointerEvents: 'auto'
        }
      });
    }));
  };
  React.useEffect(function () {
    var _gridRef$current;
    (_gridRef$current = gridRef.current) === null || _gridRef$current === void 0 ? void 0 : _gridRef$current.recomputeGridSize();
    commentDotsRef.current.clear();
  }, [scaleWidth, startLeft]);
  /** 获取列宽 */
  var getColumnWidth = function getColumnWidth(data) {
    switch (data.index) {
      case 0:
        return startLeft;
      default:
        return showUnit ? scaleWidth / scaleSplitCount : scaleWidth;
    }
  };
  var estColumnWidth = getColumnWidth({
    index: 1
  });
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: prefix('time-area')
  }, /*#__PURE__*/React__default['default'].createElement(reactVirtualized.AutoSizer, null, function (_ref3) {
    var width = _ref3.width,
      height = _ref3.height;
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(reactVirtualized.Grid, {
      ref: gridRef,
      columnCount: showUnit ? scaleCount * scaleSplitCount + 1 : scaleCount,
      columnWidth: getColumnWidth,
      estimatedColumnSize: estColumnWidth,
      rowCount: 1,
      rowHeight: height,
      width: width,
      height: height,
      overscanRowCount: 0,
      overscanColumnCount: 10,
      cellRenderer: cellRenderer,
      scrollLeft: scrollLeft
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      style: {
        width: width,
        height: height
      },
      onClick: function onClick(e) {
        var clickX = e.clientX;
        var clickY = e.clientY;
        // Check if the click hits any comment dot
        var hitCommentId = null;
        commentDotsRef.current.forEach(function (dotElement, commentId) {
          var rect = dotElement.getBoundingClientRect();
          var centerX = rect.left + rect.width / 2;
          var centerY = rect.top + rect.height / 2;
          var radius = rect.width / 2;
          if (isPointInCircle(clickX, clickY, centerX, centerY, radius)) {
            hitCommentId = commentId;
          }
        });
        if (hitCommentId) {
          // We hit a comment dot
          console.log("Clicked on comment ".concat(hitCommentId));
          handleCommentClick(hitCommentId);
          return;
        }
        if (hideCursor) return;
        var rect = e.currentTarget.getBoundingClientRect();
        var position = e.clientX - rect.x;
        var left = Math.max(position + scrollLeft, startLeft);
        if (left > maxScaleCount * scaleWidth + startLeft - scrollLeft) return;
        var time = parserPixelToTime(left, {
          startLeft: startLeft,
          scale: scale,
          scaleWidth: scaleWidth
        });
        var result = onClickTimeArea && onClickTimeArea(time, e);
        if (result === false) return; // Block cursor update if needed
        setCursor({
          time: time
        });
      },
      className: prefix('time-area-interact')
    }));
  }));
};

var Timeline = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var checkedProps = checkProps(props);
  var style = props.style;
  var effects = checkedProps.effects,
    data = checkedProps.editorData,
    scrollTop = checkedProps.scrollTop,
    autoScroll = checkedProps.autoScroll,
    hideCursor = checkedProps.hideCursor,
    disableDrag = checkedProps.disableDrag,
    scale = checkedProps.scale,
    scaleWidth = checkedProps.scaleWidth,
    startLeft = checkedProps.startLeft,
    minScaleCount = checkedProps.minScaleCount,
    maxScaleCount = checkedProps.maxScaleCount,
    onChange = checkedProps.onChange,
    engine = checkedProps.engine,
    comments = checkedProps.comments,
    handleCommentClick = checkedProps.handleCommentClick,
    _checkedProps$autoReR = checkedProps.autoReRender,
    autoReRender = _checkedProps$autoReR === void 0 ? true : _checkedProps$autoReR,
    onScrollVertical = checkedProps.onScroll;
  var engineRef = React.useRef(engine || new TimelineEngine());
  var domRef = React.useRef();
  var areaRef = React.useRef();
  var scrollSync = React.useRef();
  // 编辑器数据
  var _useState = React.useState(data),
    _useState2 = _slicedToArray(_useState, 2),
    editorData = _useState2[0],
    setEditorData = _useState2[1];
  // scale数量
  var _useState3 = React.useState(MIN_SCALE_COUNT),
    _useState4 = _slicedToArray(_useState3, 2),
    scaleCount = _useState4[0],
    setScaleCount = _useState4[1];
  // 光标距离
  var _useState5 = React.useState(START_CURSOR_TIME),
    _useState6 = _slicedToArray(_useState5, 2),
    cursorTime = _useState6[0],
    setCursorTime = _useState6[1];
  // 是否正在运行
  var _useState7 = React.useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isPlaying = _useState8[0],
    setIsPlaying = _useState8[1];
  // 当前时间轴宽度
  var _useState9 = React.useState(Number.MAX_SAFE_INTEGER),
    _useState10 = _slicedToArray(_useState9, 2),
    width = _useState10[0],
    setWidth = _useState10[1];
  /** 监听数据变化 */
  React.useLayoutEffect(function () {
    handleSetScaleCount(getScaleCountByRows(data, {
      scale: scale
    }));
    setEditorData(data);
  }, [data, minScaleCount, maxScaleCount, scale]);
  React.useEffect(function () {
    engineRef.current.effects = effects;
  }, [effects]);
  React.useEffect(function () {
    engineRef.current.data = editorData;
  }, [editorData]);
  React.useEffect(function () {
    autoReRender && engineRef.current.reRender();
  }, [editorData]);
  // deprecated
  React.useEffect(function () {
    scrollSync.current && scrollSync.current.setState({
      scrollTop: scrollTop
    });
  }, [scrollTop]);
  /** 动态设置scale count */
  var handleSetScaleCount = function handleSetScaleCount(value) {
    var data = Math.min(maxScaleCount, Math.max(minScaleCount, value));
    setScaleCount(data);
  };
  /** 处理主动数据变化 */
  var handleEditorDataChange = function handleEditorDataChange(editorData) {
    var result = onChange(editorData);
    if (result !== false) {
      engineRef.current.data = editorData;
      autoReRender && engineRef.current.reRender();
    }
  };
  /** 处理光标 */
  var handleSetCursor = function handleSetCursor(param) {
    var left = param.left,
      time = param.time,
      _param$updateTime = param.updateTime,
      updateTime = _param$updateTime === void 0 ? true : _param$updateTime;
    if (typeof left === 'undefined' && typeof time === 'undefined') return;
    if (typeof time === 'undefined') {
      if (typeof left === 'undefined') left = parserTimeToPixel(time, {
        startLeft: startLeft,
        scale: scale,
        scaleWidth: scaleWidth
      });
      time = parserPixelToTime(left, {
        startLeft: startLeft,
        scale: scale,
        scaleWidth: scaleWidth
      });
    }
    var result = true;
    if (updateTime) {
      result = engineRef.current.setTime(time);
      autoReRender && engineRef.current.reRender();
    }
    result && setCursorTime(time);
    return result;
  };
  /** 设置scrollLeft */
  var handleDeltaScrollLeft = function handleDeltaScrollLeft(delta) {
    // 当超过最大距离时，禁止自动滚动
    var data = scrollSync.current.state.scrollLeft + delta;
    if (data > scaleCount * (scaleWidth - 1) + startLeft - width) return;
    scrollSync.current && scrollSync.current.setState({
      scrollLeft: Math.max(scrollSync.current.state.scrollLeft + delta, 0)
    });
  };
  // 处理运行器相关数据
  React.useEffect(function () {
    var handleTime = function handleTime(_ref) {
      var time = _ref.time;
      handleSetCursor({
        time: time,
        updateTime: false
      });
    };
    var handlePlay = function handlePlay() {
      return setIsPlaying(true);
    };
    var handlePaused = function handlePaused() {
      return setIsPlaying(false);
    };
    engineRef.current.on('setTimeByTick', handleTime);
    engineRef.current.on('play', handlePlay);
    engineRef.current.on('paused', handlePaused);
  }, []);
  // ref 数据
  React.useImperativeHandle(ref, function () {
    return {
      get target() {
        return domRef.current;
      },
      get listener() {
        return engineRef.current;
      },
      get isPlaying() {
        return engineRef.current.isPlaying;
      },
      get isPaused() {
        return engineRef.current.isPaused;
      },
      setPlayRate: engineRef.current.setPlayRate.bind(engineRef.current),
      getPlayRate: engineRef.current.getPlayRate.bind(engineRef.current),
      setTime: function setTime(time) {
        return handleSetCursor({
          time: time
        });
      },
      getTime: engineRef.current.getTime.bind(engineRef.current),
      reRender: engineRef.current.reRender.bind(engineRef.current),
      play: function play(param) {
        return engineRef.current.play(_objectSpread2({}, param));
      },
      pause: engineRef.current.pause.bind(engineRef.current),
      setScrollLeft: function setScrollLeft(val) {
        scrollSync.current && scrollSync.current.setState({
          scrollLeft: Math.max(val, 0)
        });
      },
      setScrollTop: function setScrollTop(val) {
        scrollSync.current && scrollSync.current.setState({
          scrollTop: Math.max(val, 0)
        });
      },
      comments: comments
    };
  });
  // 监听timeline区域宽度变化
  React.useEffect(function () {
    if (areaRef.current) {
      var resizeObserver = new ResizeObserver(function () {
        if (!areaRef.current) return;
        setWidth(areaRef.current.getBoundingClientRect().width);
      });
      resizeObserver.observe(areaRef.current);
      return function () {
        resizeObserver && resizeObserver.disconnect();
      };
    }
  }, []);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    ref: domRef,
    style: style,
    className: "".concat(PREFIX, " ").concat(disableDrag ? PREFIX + '-disable' : '')
  }, /*#__PURE__*/React__default['default'].createElement(reactVirtualized.ScrollSync, {
    ref: scrollSync
  }, function (_ref2) {
    var scrollLeft = _ref2.scrollLeft,
      scrollTop = _ref2.scrollTop,
      _onScroll = _ref2.onScroll;
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(TimeArea, _objectSpread2(_objectSpread2({}, checkedProps), {}, {
      timelineWidth: width,
      disableDrag: disableDrag || isPlaying,
      setCursor: handleSetCursor,
      cursorTime: cursorTime,
      editorData: editorData,
      scaleCount: scaleCount,
      setScaleCount: handleSetScaleCount,
      onScroll: _onScroll,
      scrollLeft: scrollLeft,
      comments: comments,
      handleCommentClick: handleCommentClick
    })), /*#__PURE__*/React__default['default'].createElement(EditArea, _objectSpread2(_objectSpread2({}, checkedProps), {}, {
      timelineWidth: width,
      ref: function ref(_ref3) {
        return areaRef.current = _ref3 === null || _ref3 === void 0 ? void 0 : _ref3.domRef.current;
      },
      disableDrag: disableDrag || isPlaying,
      editorData: editorData,
      cursorTime: cursorTime,
      scaleCount: scaleCount,
      setScaleCount: handleSetScaleCount,
      scrollTop: scrollTop,
      scrollLeft: scrollLeft,
      setEditorData: handleEditorDataChange,
      deltaScrollLeft: autoScroll && handleDeltaScrollLeft,
      onScroll: function onScroll(params) {
        _onScroll(params);
        onScrollVertical && onScrollVertical(params);
      }
    })), !hideCursor && (/*#__PURE__*/React__default['default'].createElement(Cursor, _objectSpread2(_objectSpread2({}, checkedProps), {}, {
      timelineWidth: width,
      disableDrag: isPlaying,
      scrollLeft: scrollLeft,
      scaleCount: scaleCount,
      setScaleCount: handleSetScaleCount,
      setCursor: handleSetCursor,
      cursorTime: cursorTime,
      editorData: editorData,
      areaRef: areaRef,
      scrollSync: scrollSync,
      deltaScrollLeft: autoScroll && handleDeltaScrollLeft
    }))));
  }));
});

exports.Timeline = Timeline;
exports.TimelineEngine = TimelineEngine;
