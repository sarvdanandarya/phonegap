webpackJsonp([126],{

/***/ 1975:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarListPageModule", function() { return AddonCalendarListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list__ = __webpack_require__(2114);
// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AddonCalendarListPageModule = /** @class */ (function () {
    function AddonCalendarListPageModule() {
    }
    AddonCalendarListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__list__["a" /* AddonCalendarListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__list__["a" /* AddonCalendarListPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonCalendarListPageModule);
    return AddonCalendarListPageModule;
}());

//# sourceMappingURL=list.module.js.map

/***/ }),

/***/ 2114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonCalendarListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_calendar__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_helper__ = __webpack_require__(966);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_courses_providers_courses__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_local_notifications__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_course_picker_menu_course_picker_menu_popover__ = __webpack_require__(973);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_split_view_split_view__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_moment__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_moment__);
// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















/**
 * Page that displays the list of calendar events.
 */
var AddonCalendarListPage = /** @class */ (function () {
    function AddonCalendarListPage(translate, calendarProvider, navParams, domUtils, coursesProvider, utils, calendarHelper, sitesProvider, localNotificationsProvider, popoverCtrl, eventsProvider, navCtrl, appProvider) {
        var _this = this;
        this.translate = translate;
        this.calendarProvider = calendarProvider;
        this.domUtils = domUtils;
        this.coursesProvider = coursesProvider;
        this.utils = utils;
        this.calendarHelper = calendarHelper;
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
        this.daysLoaded = 0;
        this.emptyEventsTimes = 0; // Variable to identify consecutive calls returning 0 events.
        this.categoriesRetrieved = false;
        this.getCategories = false;
        this.allCourses = {
            id: -1,
            fullname: this.translate.instant('core.fulllistofcourses'),
            category: -1
        };
        this.categories = {};
        this.eventsLoaded = false;
        this.events = [];
        this.notificationsEnabled = false;
        this.filteredEvents = [];
        this.canLoadMore = false;
        this.loadMoreError = false;
        this.filter = {
            course: this.allCourses
        };
        this.siteHomeId = sitesProvider.getCurrentSite().getSiteHomeId();
        this.notificationsEnabled = localNotificationsProvider.isAvailable();
        if (this.notificationsEnabled) {
            // Re-schedule events if default time changes.
            this.obsDefaultTimeChange = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_3__providers_calendar__["a" /* AddonCalendarProvider */].DEFAULT_NOTIFICATION_TIME_CHANGED, function () {
                calendarProvider.scheduleEventsNotifications(_this.events);
            }, sitesProvider.getCurrentSiteId());
        }
        this.eventId = navParams.get('eventId') || false;
    }
    /**
     * View loaded.
     */
    AddonCalendarListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.eventId) {
            // There is an event to load, open the event in a new state.
            this.gotoEvent(this.eventId);
        }
        this.fetchData().then(function () {
            if (!_this.eventId && _this.splitviewCtrl.isOn() && _this.events.length > 0) {
                // Take first and load it.
                _this.gotoEvent(_this.events[0].id);
            }
        }).finally(function () {
            _this.eventsLoaded = true;
        });
    };
    /**
     * Fetch all the data required for the view.
     *
     * @param {boolean} [refresh] Empty events array first.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonCalendarListPage.prototype.fetchData = function (refresh) {
        var _this = this;
        if (refresh === void 0) { refresh = false; }
        this.daysLoaded = 0;
        this.emptyEventsTimes = 0;
        // Load courses for the popover.
        return this.coursesProvider.getUserCourses(false).then(function (courses) {
            // Add "All courses".
            courses.unshift(_this.allCourses);
            _this.courses = courses;
            return _this.fetchEvents(refresh);
        });
    };
    /**
     * Fetches the events and updates the view.
     *
     * @param {boolean} [refresh] Empty events array first.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonCalendarListPage.prototype.fetchEvents = function (refresh) {
        var _this = this;
        if (refresh === void 0) { refresh = false; }
        this.loadMoreError = false;
        return this.calendarProvider.getEventsList(this.daysLoaded, __WEBPACK_IMPORTED_MODULE_3__providers_calendar__["a" /* AddonCalendarProvider */].DAYS_INTERVAL).then(function (events) {
            _this.daysLoaded += __WEBPACK_IMPORTED_MODULE_3__providers_calendar__["a" /* AddonCalendarProvider */].DAYS_INTERVAL;
            if (events.length === 0) {
                _this.emptyEventsTimes++;
                if (_this.emptyEventsTimes > 5) {
                    _this.canLoadMore = false;
                    if (refresh) {
                        _this.events = [];
                        _this.filteredEvents = [];
                    }
                }
                else {
                    // No events returned, load next events.
                    return _this.fetchEvents();
                }
            }
            else {
                // Sort the events by timestart, they're ordered by id.
                events.sort(function (a, b) {
                    if (a.timestart == b.timestart) {
                        return a.timeduration - b.timeduration;
                    }
                    return a.timestart - b.timestart;
                });
                events.forEach(_this.calendarHelper.formatEventData.bind(_this.calendarHelper));
                _this.getCategories = _this.shouldLoadCategories(events);
                if (refresh) {
                    _this.events = events;
                }
                else {
                    // Filter events with same ID. Repeated events are returned once per WS call, show them only once.
                    _this.events = _this.utils.mergeArraysWithoutDuplicates(_this.events, events, 'id');
                }
                _this.filteredEvents = _this.getFilteredEvents();
                // Calculate which evemts need to display the date.
                _this.filteredEvents.forEach(function (event, index) {
                    event.showDate = _this.showDate(event, _this.filteredEvents[index - 1]);
                    event.endsSameDay = _this.endsSameDay(event);
                });
                _this.canLoadMore = true;
                // Schedule notifications for the events retrieved (might have new events).
                _this.calendarProvider.scheduleEventsNotifications(_this.events);
            }
            // Resize the content so infinite loading is able to calculate if it should load more items or not.
            // @todo: Infinite loading is not working if content is not high enough.
            _this.content.resize();
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
            _this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
        }).then(function () {
            // Success retrieving events. Get categories if needed.
            if (_this.getCategories) {
                _this.getCategories = false;
                return _this.loadCategories();
            }
        });
    };
    /**
     * Function to load more events.
     *
     * @param {any} [infiniteComplete] Infinite scroll complete function. Only used from core-infinite-loading.
     * @return {Promise<any>} Resolved when done.
     */
    AddonCalendarListPage.prototype.loadMoreEvents = function (infiniteComplete) {
        return this.fetchEvents().finally(function () {
            infiniteComplete && infiniteComplete();
        });
    };
    /**
     * Get filtered events.
     *
     * @return {any[]} Filtered events.
     */
    AddonCalendarListPage.prototype.getFilteredEvents = function () {
        if (this.filter.course.id == -1) {
            // No filter, display everything.
            return this.events;
        }
        return this.events.filter(this.shouldDisplayEvent.bind(this));
    };
    /**
     * Check if an event should be displayed based on the filter.
     *
     * @param {any} event Event object.
     * @return {boolean} Whether it should be displayed.
     */
    AddonCalendarListPage.prototype.shouldDisplayEvent = function (event) {
        if (event.eventtype == 'user' || event.eventtype == 'site') {
            // User or site event, display it.
            return true;
        }
        if (event.eventtype == 'category') {
            if (!event.categoryid || !Object.keys(this.categories).length) {
                // We can't tell if the course belongs to the category, display them all.
                return true;
            }
            if (event.categoryid == this.filter.course.category) {
                // The event is in the same category as the course, display it.
                return true;
            }
            // Check parent categories.
            var category = this.categories[this.filter.course.category];
            while (category) {
                if (!category.parent) {
                    // Category doesn't have parent, stop.
                    break;
                }
                if (event.categoryid == category.parent) {
                    return true;
                }
                category = this.categories[category.parent];
            }
            return false;
        }
        // Show the event if it is from site home or if it matches the selected course.
        return event.courseid === this.siteHomeId || event.courseid == this.filter.course.id;
    };
    /**
     * Returns if the current state should load categories or not.
     * @param {any[]} events Events to parse.
     * @return {boolean}  True if categories should be loaded.
     */
    AddonCalendarListPage.prototype.shouldLoadCategories = function (events) {
        if (this.categoriesRetrieved || this.getCategories) {
            // Use previous value
            return this.getCategories;
        }
        // Categories not loaded yet. We should get them if there's any category event.
        var found = events.some(function (event) { return event.categoryid != 'undefined' && event.categoryid > 0; });
        return found || this.getCategories;
    };
    /**
     * Load categories to be able to filter events.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonCalendarListPage.prototype.loadCategories = function () {
        var _this = this;
        return this.coursesProvider.getCategories(0, true).then(function (cats) {
            _this.categoriesRetrieved = true;
            _this.categories = {};
            // Index categories by ID.
            cats.forEach(function (category) {
                _this.categories[category.id] = category;
            });
        }).catch(function () {
            // Ignore errors.
        });
    };
    /**
     * Refresh the events.
     *
     * @param {any} refresher Refresher.
     */
    AddonCalendarListPage.prototype.refreshEvents = function (refresher) {
        var _this = this;
        var promises = [];
        promises.push(this.calendarProvider.invalidateEventsList());
        if (this.categoriesRetrieved) {
            promises.push(this.coursesProvider.invalidateCategories(0, true));
            this.categoriesRetrieved = false;
        }
        Promise.all(promises).finally(function () {
            _this.fetchData(true).finally(function () {
                refresher.complete();
            });
        });
    };
    /**
     * Check date should be shown on event list for the current event.
     * If date has changed from previous to current event it should be shown.
     *
     * @param {any} event       Current event where to show the date.
     * @param {any} [prevEvent] Previous event where to compare the date with.
     * @return {boolean}  If date has changed and should be shown.
     */
    AddonCalendarListPage.prototype.showDate = function (event, prevEvent) {
        if (!prevEvent) {
            // First event, show it.
            return true;
        }
        // Check if day has changed.
        return !__WEBPACK_IMPORTED_MODULE_14_moment__(event.timestart * 1000).isSame(prevEvent.timestart * 1000, 'day');
    };
    /**
     * Check if event ends the same date or not.
     *
     * @param {any} event Event info.
     * @return {boolean}  If date has changed and should be shown.
     */
    AddonCalendarListPage.prototype.endsSameDay = function (event) {
        if (!event.timeduration) {
            // No duration.
            return true;
        }
        // Check if day has changed.
        return __WEBPACK_IMPORTED_MODULE_14_moment__(event.timestart * 1000).isSame((event.timestart + event.timeduration) * 1000, 'day');
    };
    /**
     * Show the context menu.
     *
     * @param {MouseEvent} event Event.
     */
    AddonCalendarListPage.prototype.openCourseFilter = function (event) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_10__components_course_picker_menu_course_picker_menu_popover__["a" /* CoreCoursePickerMenuPopoverComponent */], {
            courses: this.courses,
            courseId: this.filter.course.id
        });
        popover.onDidDismiss(function (course) {
            if (course) {
                _this.filter.course = course;
                _this.domUtils.scrollToTop(_this.content);
                _this.filteredEvents = _this.getFilteredEvents();
            }
        });
        popover.present({
            ev: event
        });
    };
    /**
     * Open calendar events settings.
     */
    AddonCalendarListPage.prototype.openSettings = function () {
        this.navCtrl.push('AddonCalendarSettingsPage');
    };
    /**
     * Navigate to a particular event.
     *
     * @param {number} eventId Event to load.
     */
    AddonCalendarListPage.prototype.gotoEvent = function (eventId) {
        this.eventId = eventId;
        this.splitviewCtrl.push('AddonCalendarEventPage', { id: eventId });
    };
    /**
     * Page destroyed.
     */
    AddonCalendarListPage.prototype.ngOnDestroy = function () {
        this.obsDefaultTimeChange && this.obsDefaultTimeChange.off();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], AddonCalendarListPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_13__components_split_view_split_view__["a" /* CoreSplitViewComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_13__components_split_view_split_view__["a" /* CoreSplitViewComponent */])
    ], AddonCalendarListPage.prototype, "splitviewCtrl", void 0);
    AddonCalendarListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-calendar-list',template:/*ion-inline-start:"D:\mstar-phonegap\moodlemobiledirectory\src\addon\calendar\pages\list\list.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'addon.calendar.calendarevents\' | translate }}</ion-title>\n\n        <ion-buttons end>\n\n            <button *ngIf="courses && courses.length" ion-button icon-only (click)="openCourseFilter($event)" [attr.aria-label]="\'core.courses.filter\' | translate">\n\n                <ion-icon name="funnel"></ion-icon>\n\n            </button>\n\n            <core-context-menu>\n\n                <core-context-menu-item [hidden]="!notificationsEnabled" [priority]="600" [content]="\'core.settings.settings\' | translate" (action)="openSettings()" [iconAction]="\'cog\'"></core-context-menu-item>\n\n            </core-context-menu>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<core-split-view>\n\n    <ion-content>\n\n        <ion-refresher [enabled]="eventsLoaded" (ionRefresh)="refreshEvents($event)">\n\n            <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n        </ion-refresher>\n\n        <core-loading [hideUntil]="eventsLoaded">\n\n            <core-empty-box *ngIf="!filteredEvents || !filteredEvents.length" icon="calendar" [message]="\'addon.calendar.noevents\' | translate">\n\n            </core-empty-box>\n\n\n\n            <ion-list *ngIf="filteredEvents && filteredEvents.length" no-margin>\n\n                <ng-container *ngFor="let event of filteredEvents">\n\n                    <ion-item-divider *ngIf="event.showDate">\n\n                        {{ event.timestart * 1000 | coreFormatDate: "strftimedayshort" }}\n\n                    </ion-item-divider>\n\n                    <a ion-item text-wrap [title]="event.name" (click)="gotoEvent(event.id)" [class.core-split-item-selected]="event.id == eventId">\n\n                        <img *ngIf="event.moduleIcon" src="{{event.moduleIcon}}" item-start class="core-module-icon">\n\n                        <core-icon *ngIf="event.icon && !event.moduleIcon" [name]="event.icon" item-start></core-icon>\n\n                        <h2><core-format-text [text]="event.name"></core-format-text></h2>\n\n                        <p>\n\n                            {{ event.timestart * 1000 | coreFormatDate: "strftimetime" }}\n\n                            <span *ngIf="event.timeduration && event.endsSameDay"> - {{ (event.timestart + event.timeduration) * 1000 | coreFormatDate: "strftimetime" }}</span>\n\n                            <span *ngIf="event.timeduration && !event.endsSameDay"> - {{ (event.timestart + event.timeduration) * 1000 | coreFormatDate: "strftimedatetimeshort" }}</span>\n\n                        </p>\n\n                    </a>\n\n                </ng-container>\n\n            </ion-list>\n\n\n\n            <core-infinite-loading [enabled]="canLoadMore" (action)="loadMoreEvents($event)" [error]="loadMoreError"></core-infinite-loading>\n\n        </core-loading>\n\n    </ion-content>\n\n</core-split-view>'/*ion-inline-end:"D:\mstar-phonegap\moodlemobiledirectory\src\addon\calendar\pages\list\list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_calendar__["a" /* AddonCalendarProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_5__core_courses_providers_courses__["a" /* CoreCoursesProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__["a" /* CoreUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_helper__["a" /* AddonCalendarHelperProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_sites__["a" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_local_notifications__["a" /* CoreLocalNotificationsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_11__providers_events__["a" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_12__providers_app__["a" /* CoreAppProvider */]])
    ], AddonCalendarListPage);
    return AddonCalendarListPage;
}());

//# sourceMappingURL=list.js.map

/***/ })

});
//# sourceMappingURL=126.js.map