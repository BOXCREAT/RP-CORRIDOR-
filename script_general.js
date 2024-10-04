(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"backgroundColorRatios":[0],"definitions": [{"playbackBarHeadShadowOpacity":0.7,"subtitlesVerticalAlign":"bottom","toolTipFontFamily":"Arial","playbackBarHeadBorderSize":0,"displayTooltipInSurfaceSelection":true,"vrPointerColor":"#FFFFFF","toolTipBorderRadius":3,"subtitlesTextShadowHorizontalLength":1,"width":"100%","toolTipShadowOpacity":1,"data":{"name":"Main Viewer"},"playbackBarProgressBackgroundColorRatios":[0],"id":"MainViewer","playbackBarProgressBackgroundColorDirection":"vertical","shadow":false,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","progressBackgroundColorRatios":[0],"playbackBarBorderSize":0,"toolTipFontSize":"1.11vmin","subtitlesFontWeight":"normal","playbackBarOpacity":1,"toolTipTextShadowColor":"#000000","progressRight":0,"subtitlesFontFamily":"Arial","toolTipBorderColor":"#767676","transitionMode":"blending","playbackBarHeadShadow":true,"playbackBarHeadShadowHorizontalLength":0,"progressOpacity":1,"progressBarBorderColor":"#000000","paddingLeft":0,"progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"subtitlesTop":0,"paddingRight":0,"progressBackgroundColorDirection":"vertical","toolTipHorizontalAlign":"center","playbackBarBackgroundColorDirection":"vertical","subtitlesGap":0,"playbackBarRight":0,"subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColorDirection":"vertical","subtitlesFontSize":"3vmin","toolTipShadowVerticalLength":0,"toolTipPaddingLeft":6,"translationTransitionDuration":1000,"playbackBarHeadBackgroundColor":["#111111","#666666"],"displayTooltipInTouchScreens":true,"progressBackgroundOpacity":1,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"progressBorderColor":"#000000","doubleClickAction":"toggle_fullscreen","subtitlesTextShadowVerticalLength":1,"subtitlesFontColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"subtitlesPaddingLeft":5,"progressBackgroundColor":["#FFFFFF"],"playbackBarBorderRadius":0,"borderSize":0,"playbackBarProgressBorderColor":"#000000","progressBottom":0,"subtitlesHorizontalAlign":"center","progressBarOpacity":1,"subtitlesTextShadowBlurRadius":0,"subtitlesBorderColor":"#FFFFFF","subtitlesTextDecoration":"none","toolTipPaddingRight":6,"progressHeight":10,"subtitlesPaddingBottom":5,"progressBorderSize":0,"playbackBarBackgroundOpacity":1,"playbackBarHeadOpacity":1,"playbackBarHeadShadowVerticalLength":0,"toolTipTextShadowBlurRadius":3,"height":"100%","toolTipFontStyle":"normal","minWidth":100,"toolTipTextShadowOpacity":0,"paddingTop":0,"progressBarBorderRadius":0,"class":"ViewerArea","transitionDuration":500,"minHeight":50,"paddingBottom":0,"propagateClick":false,"toolTipFontColor":"#606060","toolTipPaddingBottom":4,"progressBorderRadius":0,"subtitlesOpacity":1,"progressBarBorderSize":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarLeft":0,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontWeight":"normal","surfaceReticleColor":"#FFFFFF","firstTransitionDuration":0,"vrPointerSelectionTime":2000,"subtitlesBorderSize":0,"toolTipShadowSpread":0,"playbackBarHeadShadowColor":"#000000","progressLeft":0,"toolTipShadowColor":"#333333","surfaceReticleSelectionColor":"#FFFFFF","subtitlesBottom":50,"playbackBarProgressBorderRadius":0,"subtitlesPaddingRight":5,"playbackBarHeadBorderRadius":0,"subtitlesShadow":false,"toolTipPaddingTop":4,"vrPointerSelectionColor":"#FF6600","toolTipBorderSize":1,"toolTipDisplayTime":600,"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowOpacity":1,"surfaceReticleOpacity":0.6,"toolTipOpacity":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesBackgroundColor":"#000000","borderRadius":0,"toolTipShadowHorizontalLength":0,"toolTipShadowBlurRadius":3,"subtitlesPaddingTop":5,"playbackBarProgressOpacity":1,"playbackBarBottom":5,"subtitlesEnabled":true,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0},{"thumbnailUrl":"media/panorama_53527B75_58E8_18AC_41BB_DD18CCACDB64_t.jpg","vfov":180,"hfovMax":130,"label":trans('panorama_53527B75_58E8_18AC_41BB_DD18CCACDB64.label'),"hfov":360,"hfovMin":"150%","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":1536,"width":9216,"rowCount":3,"url":"media/panorama_53527B75_58E8_18AC_41BB_DD18CCACDB64_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":18},{"height":1024,"width":6144,"rowCount":2,"url":"media/panorama_53527B75_58E8_18AC_41BB_DD18CCACDB64_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":12},{"height":512,"width":3072,"rowCount":1,"url":"media/panorama_53527B75_58E8_18AC_41BB_DD18CCACDB64_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6}]},"thumbnailUrl":"media/panorama_53527B75_58E8_18AC_41BB_DD18CCACDB64_t.jpg"}],"partial":false,"pitch":0,"data":{"label":"CORRIDOR"},"id":"panorama_53527B75_58E8_18AC_41BB_DD18CCACDB64"},{"viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"surfaceSelectionEnabled":false,"touchControlMode":"drag_rotation","arrowKeysAction":"translate","gyroscopeVerticalDraggingEnabled":true,"aaEnabled":true,"class":"PanoramaPlayer","zoomEnabled":true,"id":"MainViewerPanoramaPlayer"},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_52E39FC0_58E8_17E4_41D4_FB95B98B322E","hoverFactor":0,"id":"panorama_53527B75_58E8_18AC_41BB_DD18CCACDB64_camera"},{"class":"PlayList","items":[{"camera":"this.panorama_53527B75_58E8_18AC_41BB_DD18CCACDB64_camera","media":"this.panorama_53527B75_58E8_18AC_41BB_DD18CCACDB64","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_52E39FC0_58E8_17E4_41D4_FB95B98B322E"}],"data":{"name":"Player610","defaultLocale":"en","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"speechOnQuizQuestion":false,"pitch":1,"rate":1}},"gap":10,"mediaActivationMode":"window","backgroundOpacity":1,"minWidth":20,"width":"100%","paddingTop":0,"id":"rootPlayer","class":"Player","horizontalAlign":"left","minHeight":20,"shadow":false,"paddingBottom":0,"propagateClick":false,"mouseWheelEnabled":true,"overflow":"hidden","defaultVRPointer":"laser","desktopMipmappingEnabled":false,"scrollBarMargin":2,"verticalAlign":"top","mobileMipmappingEnabled":false,"children":["this.MainViewer"],"contentOpaque":false,"scrollBarOpacity":0.5,"paddingLeft":0,"height":"100%","paddingRight":0,"toolTipHorizontalAlign":"center","backgroundColor":["#FFFFFF"],"vrPolyfillScale":0.75,"scrollBarVisible":"rollOver","backgroundPreloadEnabled":true,"scrollBarWidth":10,"borderRadius":0,"scrollBarColor":"#000000","scripts":{"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"translate":TDV.Tour.Script.translate,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMediaByName":TDV.Tour.Script.getMediaByName,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"playAudioList":TDV.Tour.Script.playAudioList,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getOverlays":TDV.Tour.Script.getOverlays,"getKey":TDV.Tour.Script.getKey,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"textToSpeech":TDV.Tour.Script.textToSpeech,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"initAnalytics":TDV.Tour.Script.initAnalytics,"downloadFile":TDV.Tour.Script.downloadFile,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"shareSocial":TDV.Tour.Script.shareSocial,"clone":TDV.Tour.Script.clone,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"openLink":TDV.Tour.Script.openLink,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"historyGoBack":TDV.Tour.Script.historyGoBack,"init":TDV.Tour.Script.init,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"existsKey":TDV.Tour.Script.existsKey,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getMainViewer":TDV.Tour.Script.getMainViewer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"unregisterKey":TDV.Tour.Script.unregisterKey,"showWindow":TDV.Tour.Script.showWindow,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"initQuiz":TDV.Tour.Script.initQuiz,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"cloneCamera":TDV.Tour.Script.cloneCamera,"historyGoForward":TDV.Tour.Script.historyGoForward,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPixels":TDV.Tour.Script.getPixels,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setLocale":TDV.Tour.Script.setLocale,"isPanorama":TDV.Tour.Script.isPanorama,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"registerKey":TDV.Tour.Script.registerKey,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getComponentByName":TDV.Tour.Script.getComponentByName,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizStart":TDV.Tour.Script.quizStart,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"setValue":TDV.Tour.Script.setValue,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"resumePlayers":TDV.Tour.Script.resumePlayers,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"mixObject":TDV.Tour.Script.mixObject,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizFinish":TDV.Tour.Script.quizFinish,"setMapLocation":TDV.Tour.Script.setMapLocation,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios},"start":"this.init()","downloadEnabled":false,"borderSize":0,"layout":"absolute","backgroundColorDirection":"vertical"};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Fri Oct 4 2024