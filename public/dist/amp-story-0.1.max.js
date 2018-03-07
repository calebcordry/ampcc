(self.AMP=self.AMP||[]).push({n:"amp-story",v:"1520463365536",f:(function(AMP){(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
var CSS = exports.CSS = ".i-amphtml-story-background{background-color:transparent}amp-story[standalone][desktop]{max-width:none!important;max-height:none!important;width:100vw!important}[desktop] .i-amphtml-story-logo{display:block!important}.i-amphtml-story-background-container{opacity:.8!important;position:absolute!important;top:0!important;right:0!important;bottom:0!important;left:0!important;overflow:hidden!important}.i-amphtml-story-background-overlay,.i-amphtml-story-background-overlay:after{position:absolute!important;left:0!important;top:0!important;height:100%!important;width:100%!important;z-index:1!important;background-color:rgba(0,0,0,0.2)!important}.i-amphtml-story-background-overlay:after{content:\"\"!important;display:block!important;opacity:0!important;background-color:rgba(0,0,0,0.5)!important;-webkit-transition:opacity 0.3s!important;transition:opacity 0.3s!important}.i-amphtml-story-bookend-active .i-amphtml-story-background-overlay:after{opacity:1!important}.i-amphtml-story-background{position:absolute!important;top:-150px!important;right:-150px!important;bottom:-150px!important;left:-150px!important;opacity:0!important;-webkit-filter:blur(50px)!important;filter:blur(50px)!important;background-size:cover!important;background-color:transparent!important;background-position:50%!important;will-change:opacity,z-index!important;z-index:0!important}.i-amphtml-story-background.active{opacity:1!important;z-index:1!important}[desktop] amp-story-page{-webkit-transform:scale(1.0) translateX(-350%) translateY(0%)!important;transform:scale(1.0) translateX(-350%) translateY(0%)!important;opacity:.05!important;-webkit-transform-origin:left!important;transform-origin:left!important;border-radius:16px!important}[desktop] amp-story-page[distance=\"0\"],[desktop] amp-story-page[distance=\"1\"]{-webkit-transition:opacity 300ms linear,-webkit-transform 300ms cubic-bezier(0.4,0.0,0.2,1)!important;transition:opacity 300ms linear,-webkit-transform 300ms cubic-bezier(0.4,0.0,0.2,1)!important;transition:opacity 300ms linear,transform 300ms cubic-bezier(0.4,0.0,0.2,1)!important;transition:opacity 300ms linear,transform 300ms cubic-bezier(0.4,0.0,0.2,1),-webkit-transform 300ms cubic-bezier(0.4,0.0,0.2,1)!important}[desktop] .i-amphtml-story-button-container{position:absolute!important;top:0!important;bottom:0!important;left:0!important;right:0!important;z-index:100002!important;pointer-events:none!important;display:block!important}[desktop] .i-amphtml-story-button-container:before{content:\"\";position:absolute!important;top:0!important;bottom:0!important;width:calc(50vw - 23vh - 32px)!important}.i-amphtml-story-back-prev>.i-amphtml-story-page-sentinel,.i-amphtml-story-button-move,.i-amphtml-story-fwd-next>.i-amphtml-story-page-sentinel{pointer-events:all!important}.i-amphtml-story-button-hidden>.i-amphtml-story-button-move{cursor:default!important;pointer-events:none!important;opacity:0!important}[desktop]>.next-container:before{right:0!important;background:-webkit-linear-gradient(left,rgba(33,33,33,0),rgba(33,33,33,0.32))!important;background:linear-gradient(90deg,rgba(33,33,33,0) 0%,rgba(33,33,33,0.32))!important}[desktop]>.prev-container:before{left:0!important;background:-webkit-linear-gradient(left,rgba(33,33,33,0.32),rgba(33,33,33,0))!important;background:linear-gradient(90deg,rgba(33,33,33,0.32) 0%,rgba(33,33,33,0))!important}[desktop]>.next-container>.i-amphtml-story-button-move{right:0!important}.prev-container>.i-amphtml-story-page-sentinel,[desktop] amp-story-page[pre-active]{-webkit-transform:scale(0.9) translateX(calc(-150% - 64px)) translateY(0%)!important;transform:scale(0.9) translateX(calc(-150% - 64px)) translateY(0%)!important}[desktop] amp-story-page[active]{-webkit-transform:scale(1.0) translateX(-50%) translateY(0%)!important;transform:scale(1.0) translateX(-50%) translateY(0%)!important;opacity:1!important}.next-container>.i-amphtml-story-page-sentinel,[desktop] amp-story-page[active]+amp-story-page{-webkit-transform:scale(0.9) translate(calc(50% + 64px))!important;transform:scale(0.9) translate(calc(50% + 64px))!important}[desktop] amp-story-page[active]+amp-story-page~amp-story-page,[dir=rtl] [desktop] amp-story-page{-webkit-transform:scale(0.9) translateX(250vw) translateY(0%)!important;transform:scale(0.9) translateX(250vw) translateY(0%)!important}[dir=rtl] [desktop] amp-story-page[pre-active]{-webkit-transform:scale(0.9) translateX(calc(50% + 64px)) translateY(0%)!important;transform:scale(0.9) translateX(calc(50% + 64px)) translateY(0%)!important}[dir=rtl] [desktop] amp-story-page[active]{-webkit-transform:scale(1.0) translateX(-50%) translateY(0%)!important;transform:scale(1.0) translateX(-50%) translateY(0%)!important;opacity:1!important}[dir=rtl] [desktop] amp-story-page[active]+amp-story-page{-webkit-transform:scale(0.9) translateX(calc(-150% - 64px)) translateY(0%)!important;transform:scale(0.9) translateX(calc(-150% - 64px)) translateY(0%)!important}[dir=rtl] [desktop] amp-story-page[active]+amp-story-page~amp-story-page{-webkit-transform:scale(0.9) translateX(-350%) translateY(0%)!important;transform:scale(0.9) translateX(-350%) translateY(0%)!important}.i-amphtml-story-page-sentinel,[desktop]>amp-story-page{left:50%!important;right:auto!important;margin:auto!important;max-height:75vh!important;max-width:45vh!important;min-width:320px!important;min-height:533px!important}[desktop]>amp-story-page{box-shadow:0 0 15px rgba(0,0,0,0.4)!important}.i-amphtml-story-page-sentinel{width:100vw!important;height:100vh!important;margin-left:-32px!important;cursor:pointer}.i-amphtml-story-button-move,.i-amphtml-story-page-sentinel{position:absolute!important;top:0!important;bottom:0!important;z-index:100002!important}.i-amphtml-story-button-move{margin:auto 40px!important;width:60px!important;height:60px!important;border-radius:50%!important;border:0!important;background-color:#fff!important;background-repeat:no-repeat!important;background-size:12px 17px!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;opacity:.5!important;-webkit-transition:opacity 150ms linear,-webkit-transform 300ms linear!important;transition:opacity 150ms linear,-webkit-transform 300ms linear!important;transition:opacity 150ms linear,transform 300ms linear!important;transition:opacity 150ms linear,transform 300ms linear,-webkit-transform 300ms linear!important;cursor:pointer!important;outline:none!important}.i-amphtml-story-next-hover>amp-story-page[active]+amp-story-page,.i-amphtml-story-prev-hover>amp-story-page[pre-active]{opacity:0.3!important}.prev-container>.i-amphtml-story-button-move{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.7 22l-9.5-9.5L15.7 3l-3-3L.4 12.6 12.8 25'/%3E%3C/svg%3E\")!important;background-position:45% 50%!important;left:0!important}.i-amphtml-story-fwd-next>.i-amphtml-story-button-move{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.3 3l9.5 9.5L.3 22l3 3 12.4-12.5L3.2 0'/%3E%3C/svg%3E\")!important;background-position:55% 50%!important}.i-amphtml-story-fwd-replay>.i-amphtml-story-button-move{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath d='M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important;background-position:50%;background-size:32px 32px!important}.i-amphtml-story-fwd-more>.i-amphtml-story-button-move{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/svg%3E\")!important;background-position:50%;background-size:32px 32px!important}.i-amphtml-story-next-hover>.next-container>.i-amphtml-story-button-move,.i-amphtml-story-prev-hover>.prev-container>.i-amphtml-story-button-move{-webkit-transform:scale(1.1)!important;transform:scale(1.1)!important;opacity:1!important}.i-amphtml-story-prev-hover>.i-amphtml-story-button-hidden>.i-amphtml-story-button-move{opacity:0!important}.i-amphtml-story-next-hover>.i-amphtml-story-fwd-next>.i-amphtml-story-button-move{-webkit-transform:translateX(8px)!important;transform:translateX(8px)!important;opacity:1!important}.i-amphtml-story-prev-hover>.i-amphtml-story-back-close-bookend>.i-amphtml-story-button-move,.i-amphtml-story-prev-hover>.i-amphtml-story-back-prev>.i-amphtml-story-button-move{-webkit-transform:translateX(-8px)!important;transform:translateX(-8px)!important;opacity:1!important}.i-amphtml-story-top{position:relative!important;display:block!important;height:96px!important;width:100%!important;z-index:1!important;background:-webkit-linear-gradient(top,rgba(33,33,33,0.32),rgba(33,33,33,0))!important;background:linear-gradient(180deg,rgba(33,33,33,0.32) 0%,rgba(33,33,33,0))!important}.i-amphtml-story-share-pill{display:none!important;position:absolute!important;top:0!important;right:40px!important;bottom:0!important;margin:auto!important;height:40px!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important}[desktop] .i-amphtml-story-share-pill{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.i-amphtml-story-share-pill:after{font-family:Roboto,sans-serif!important;content:\"SHARE\"!important;position:absolute!important;right:15px!important;text-align:center!important;width:60px!important;font-size:12px!important;font-weight:700!important;letter-spacing:.5px!important;margin:auto!important;color:#fff!important}.i-amphtml-story-share-pill:before{position:absolute!important;content:\"\"!important;width:58px!important;height:40px!important;padding:0 16px!important;background-color:hsla(0,0%,100%,0.2)!important;border-radius:500px!important;-webkit-transition:width 300ms ease-in-out!important;transition:width 300ms ease-in-out!important;right:0!important}.i-amphtml-story-share-pill .i-amphtml-story-share-item{opacity:0!important;-webkit-transition:opacity 300ms linear!important;transition:opacity 300ms linear!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item{opacity:1!important}.i-amphtml-story-share-pill .i-amphtml-story-share-item{margin:0!important;width:48px!important;height:48px!important;padding:0!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:nth-child(9){-webkit-transition-delay:30ms!important;transition-delay:30ms!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:nth-child(8){-webkit-transition-delay:60ms!important;transition-delay:60ms!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:nth-child(7){-webkit-transition-delay:90ms!important;transition-delay:90ms!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:nth-child(6){-webkit-transition-delay:120ms!important;transition-delay:120ms!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:nth-child(5){-webkit-transition-delay:150ms!important;transition-delay:150ms!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:nth-child(4){-webkit-transition-delay:180ms!important;transition-delay:180ms!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:nth-child(3){-webkit-transition-delay:210ms!important;transition-delay:210ms!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:nth-child(2){-webkit-transition-delay:240ms!important;transition-delay:240ms!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:first-child{-webkit-transition-delay:270ms!important;transition-delay:270ms!important}.i-amphtml-story-share-pill .i-amphtml-story-share-list{padding:0!important;margin:0 72px 0 0!important}.i-amphtml-story-share-pill:hover:before{width:calc(100% - 32px)!important}.i-amphtml-story-share-pill .i-amphtml-story-share-icon{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:48px!important;height:48px!important;padding:0}[desktop] .i-amphtml-story-share-icon{font-size:0px!important;background-size:24px 24px!important;background-position:50%!important;padding:0!important}[desktop] .i-amphtml-story-share-icon.amp-social-share-facebook{background-size:28px 28px!important;background-position:50%!important}[desktop] .i-amphtml-story-share-icon:active:before,[desktop] .i-amphtml-story-share-icon:before{display:none!important}[desktop] .i-amphtml-story-share-list{margin-right:72px!important}[desktop] .i-amphtml-story-system-layer{background:-webkit-linear-gradient(top,rgba(33,33,33,0),rgba(33,33,33,0.32))!important;background:linear-gradient(180deg,rgba(33,33,33,0) 0%,rgba(33,33,33,0.32))!important;top:auto!important;bottom:0!important;height:96px!important;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}[desktop] .i-amphtml-story-progress-bar{position:relative!important;height:3px!important;width:33.33333vw!important;margin:0px!important}[desktop] .i-amphtml-story-page-progress-bar{border-radius:100px!important}.i-amphtml-story-ui-left,[desktop] .i-amphtml-story-system-layer .i-amphtml-story-ui-right .i-amphtml-story-mute-audio-control,[desktop] .i-amphtml-story-system-layer .i-amphtml-story-ui-right .i-amphtml-story-unmute-audio-control{display:none!important}[desktop] .i-amphtml-story-system-layer .i-amphtml-story-ui-left{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;height:40px!important;-webkit-box-flex:1!important;-ms-flex:1!important;flex:1!important;min-width:200px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-right:32px}[desktop] .i-amphtml-story-system-layer .i-amphtml-story-ui-right{display:block!important;-webkit-box-flex:1!important;-ms-flex:1!important;flex:1!important}[desktop] .i-amphtml-story-top{z-index:100002!important}[desktop] .i-amphtml-story-bookend .i-amphtml-story-share-widget{display:none!important}[desktop] .i-amphtml-story-bookend-inner{box-sizing:border-box!important;min-height:100vh!important;padding:104px 156px 64px!important;margin:0!important}[desktop] .i-amphtml-story-bookend-inner:before,[desktop] .i-amphtml-story-bookend-replay{display:none!important}[desktop] .i-amphtml-story-bookend-overflow{margin-top:0!important;margin-bottom:0!important}@media (min-width:952px){[desktop] .i-amphtml-story-bookend-article{max-width:50%!important}}@media (min-width:1272px){[desktop] .i-amphtml-story-bookend-article{max-width:33%!important}}.i-amphtml-story-grid-template-vertical{-ms-flex-line-pack:start;align-content:start;grid-gap:16px;-webkit-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch;justify-items:start;padding:32px}.i-amphtml-story-grid-template-vertical>*{width:100%}.i-amphtml-story-grid-template-horizontal{-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:start;-ms-flex-align:start;align-items:start;grid-gap:16px;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;padding:32px}.i-amphtml-story-grid-template-thirds{padding:32px}amp-story-grid-layer{padding:68px 32px 32px}.i-amphtml-story-hint-container{-webkit-transition-property:opacity!important;transition-property:opacity!important;-webkit-transition-duration:200ms!important;transition-duration:200ms!important;contain:strict!important;pointer-events:none!important;position:absolute!important;left:0!important;top:0!important;right:0!important;bottom:0!important}.i-amphtml-story-hint-container.i-amphtml-hidden{opacity:0!important}[desktop] .i-amphtml-story-hint-container{display:none!important}.i-amphtml-story-hint-container .i-amphtml-story-navigation-help-overlay{position:absolute!important;left:0!important;top:0!important;right:0!important;bottom:0!important;background:rgba(0,0,0,0.7)!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-ms-flex-direction:row!important;flex-direction:row!important;color:#fff!important;font-size:20px!important;padding:16px 0!important}.i-amphtml-story-navigation-help-section{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.prev-page{-webkit-box-flex:1!important;-ms-flex:1!important;flex:1!important}.show-first-page-overlay .i-amphtml-story-navigation-help-overlay{background:transparent!important}.show-first-page-overlay .prev-page{background:-webkit-linear-gradient(left,rgba(0,0,0,0.5),transparent)!important;background:linear-gradient(90deg,rgba(0,0,0,0.5),transparent)!important}.show-first-page-overlay .next-page{opacity:0!important}.show-first-page-overlay .i-amphtml-story-hint-placeholder{display:none!important}.show-first-page-overlay .i-amphtml-story-navigation-help-overlay{padding:0px!important}.i-amphtml-story-hint-container .next-page{-webkit-box-flex:3!important;-ms-flex:3!important;flex:3!important;border-left:1px dashed transparent!important;border-image-source:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath fill='none' stroke-linecap='square' stroke-dasharray='6,6' stroke='%23fff' d='M0 0v30'/%3E%3C/svg%3E\")!important;border-image-slice:33% 33%!important;border-image-repeat:repeat!important;border-image-width:14px!important}.show-first-page-overlay .i-amphtml-story-navigation-help-overlay,.show-navigation-overlay .i-amphtml-story-navigation-help-overlay{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.show-first-page-overlay .prev-page .i-amphtml-story-hint-tap-button{visibility:hidden}.show-navigation-overlay .prev-page .i-amphtml-story-hint-tap-button-icon:before{content:\"\"!important;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'%3E%3Cpath d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important;width:30px!important;height:30px!important;display:inline-block!important}.i-amphtml-story-hint-container .i-amphtml-story-hint-tap-button{position:relative!important;width:44px!important;height:44px!important}.i-amphtml-story-hint-tap-button:after,.i-amphtml-story-hint-tap-button:before{position:absolute!important;content:\"\"!important;width:44px!important;height:44px!important;border-radius:50%!important;background-color:hsla(0,0%,100%,0.5)!important;left:0!important;right:0!important}.i-amphtml-story-hint-tap-button:before{-webkit-animation:expandingBubble 1000ms infinite cubic-bezier(0.4,0,0.2,1)!important;animation:expandingBubble 1000ms infinite cubic-bezier(0.4,0,0.2,1)!important}.i-amphtml-story-hint-tap-button:after{background-color:#fff!important}.i-amphtml-story-hint-container .i-amphtml-story-hint-tap-button-icon{position:absolute!important;z-index:1!important;height:44px!important;width:44px!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important}.i-amphtml-story-hint-tap-button-icon:after,.i-amphtml-story-hint-tap-button-icon:before{vertical-align:middle!important;margin:0 2px!important;background-position:50%}.next-page .i-amphtml-story-hint-tap-button-icon:after{content:\"\"!important;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'%3E%3Cpath d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important;width:24px!important;height:24px!important;display:inline-block!important}.i-amphtml-story-hint-placeholder{top:50%!important;position:absolute}.i-amphtml-story-hint-container .i-amphtml-story-hint-tap-button-text{color:#fff!important;font-size:16px!important;font-family:Roboto-Medium,sans-serif!important;margin-top:24px!important;text-align:center!important}@-webkit-keyframes expandingBubble{0%{-webkit-transform:scale(1);transform:scale(1);opacity:0}50%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:1}to{-webkit-transform:scale(1);transform:scale(1);opacity:0}}@keyframes expandingBubble{0%{-webkit-transform:scale(1);transform:scale(1);opacity:0}50%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:1}to{-webkit-transform:scale(1);transform:scale(1);opacity:0}}.i-amphtml-story-ad-link{background-color:#fff!important;border-radius:20px!important;bottom:32px!important;box-shadow:0px 2px 12px rgba(0,0,0,0.16)!important;color:#4285f4!important;font-size:0px!important;font-family:Roboto-Bold,sans-serif!important;height:36px!important;left:50%!important;letter-spacing:0.2px!important;line-height:36px;margin-left:-60px!important;opacity:0!important;position:absolute!important;-webkit-transform:scale(0)!important;transform:scale(0)!important;text-align:center;text-decoration:none!important;width:120px!important}amp-story-page[active] .i-amphtml-story-ad-link{-webkit-animation-delay:100ms!important;animation-delay:100ms!important;-webkit-animation-duration:300ms!important;animation-duration:300ms!important;-webkit-animation-timing-function:cubic-bezier(0.4,0.0,0.2,1)!important;animation-timing-function:cubic-bezier(0.4,0.0,0.2,1)!important;-webkit-animation-fill-mode:forwards!important;animation-fill-mode:forwards!important;-webkit-animation-name:ad-cta!important;animation-name:ad-cta!important}@-webkit-keyframes ad-cta{0%{opacity:0;font-size:0px;-webkit-transform:scale(0);transform:scale(0)}to{opacity:1;font-size:13px;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ad-cta{0%{opacity:0;font-size:0px;-webkit-transform:scale(0);transform:scale(0)}to{opacity:1;font-size:13px;-webkit-transform:scale(1);transform:scale(1)}}.i-amphtml-ad-overlay-container{height:24px!important;padding:14px 0 0!important;position:absolute!important;z-index:5!important}.i-amphtml-story-ad-attribution{color:#fff!important;font-size:18px!important;font-family:Roboto-Bold,sans-serif!important;letter-spacing:0.5px!important;margin:0 0 0 16px!important;padding:0!important;visibility:hidden!important}amp-story[ad-showing] .i-amphtml-story-ad-attribution{visibility:visible!important}amp-story[ad-showing] .i-amphtml-story-progress-bar{visibility:hidden!important}amp-story,amp-story-cta-layer,amp-story-grid-layer,amp-story-page{contain:strict!important;overflow:hidden!important}.i-amphtml-story-system-reset,.i-amphtml-story-system-reset *{border:none!important;color:initial!important;font-family:Roboto,sans-serif!important;font-size:initial!important;font-weight:initial!important;height:auto!important;margin:0!important;padding:0!important;text-align:left!important;width:auto!important}amp-story{height:100%!important;position:relative!important;text-rendering:geometricPrecision!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;width:100%!important}html.i-amphtml-story-standalone,html.i-amphtml-story-standalone body{height:100%!important;margin:0!important;padding:0!important;width:100%!important;cursor:auto!important;-webkit-tap-highlight-color:rgba(0,0,0,0)!important}html.i-amphtml-story-standalone body{display:grid!important}amp-story[standalone]{-ms-flex-item-align:center!important;align-self:center!important;box-shadow:2px 2px 20px rgba(0,0,0,0.5)!important;height:100%!important;justify-self:center!important}amp-story[standalone]:-webkit-full-screen{height:100vh!important;max-height:none!important;max-width:none!important}amp-story[standalone]:-moz-full-screen{height:100vh!important;max-height:none!important;max-width:none!important}amp-story[standalone]:-ms-fullscreen{height:100vh!important;max-height:none!important;max-width:none!important}amp-story[standalone]:fullscreen{height:100vh!important;max-height:none!important;max-width:none!important}.i-amphtml-story-system-layer{background:-webkit-linear-gradient(top,rgba(0,0,0,0.35),transparent)!important;background:linear-gradient(180deg,rgba(0,0,0,0.35),transparent)!important;position:absolute!important;top:0!important;left:0!important;right:0!important;height:46px!important;z-index:100000!important;padding:4px 0 0!important;box-sizing:border-box!important;-webkit-transition:opacity 0.3s!important;transition:opacity 0.3s!important;pointer-events:none!important}.i-amphtml-story-ui-left,.i-amphtml-story-ui-right{pointer-events:auto!important}.i-amphtml-story-bookend-active>.i-amphtml-story-system-layer{opacity:0.3!important}.i-amphtml-story-ui-right{float:right!important;margin:0 8px!important}.i-amphtml-story-button{background-repeat:no-repeat!important;background-position:50%!important;height:40px!important;width:40px!important;cursor:pointer!important;border-radius:40px!important;box-sizing:border-box!important;padding:8px!important;position:relative!important;background:50% no-repeat!important}.i-amphtml-story-button:active{background-color:rgba(0,0,0,0.2)!important}.i-amphtml-story-system-layer .i-amphtml-story-button{float:left!important}.i-amphtml-story-progress-bar{border:0!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;height:2px!important;left:0!important;margin:4px 0 0!important;padding:0 2px!important;position:absolute!important;right:0!important;top:0!important;visibility:visible!important;z-index:100001!important}.i-amphtml-story-page-progress-bar{background:hsla(0,0%,100%,0.4)!important;border-radius:1px!important;height:100%!important;list-style-type:none!important;margin:0 2px!important;overflow:hidden!important;width:100%!important;-webkit-mask-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)!important}.i-amphtml-story-page-progress-value{background:#fff!important;height:100%!important;width:100%!important;-webkit-transform:translateZ(0) scaleX(0)!important;transform:translateZ(0) scaleX(0)!important;-webkit-transform-origin:left!important;transform-origin:left!important;will-change:transform,transition!important}[dir=rtl] .i-amphtml-story-progress-value{-webkit-transform-origin:right!important;transform-origin:right!important}.i-amphtml-story-mute-audio-control,.i-amphtml-story-unmute-audio-control{display:none!important}.audio-playing:not([muted]) .i-amphtml-story-mute-audio-control,.audio-playing[muted] .i-amphtml-story-unmute-audio-control{display:block!important}.i-amphtml-story-ui-no-buttons .i-amphtml-story-button,.i-amphtml-story-ui-no-buttons .i-amphtml-story-ui-left,.i-amphtml-story-ui-no-buttons .i-amphtml-story-ui-right,[desktop] .i-amphtml-story-ui-no-buttons .i-amphtml-story-ui-left,[desktop] .i-amphtml-story-ui-no-buttons .i-amphtml-story-ui-right,amp-story-page,amp-story .amp-video-eq{display:none!important}amp-story-page{bottom:0!important;height:auto!important;left:0!important;position:absolute!important;right:0!important;top:0!important;-webkit-transition:none!important;transition:none!important}amp-story-page.i-amphtml-layout-container{display:block!important}amp-story:not([desktop])>amp-story-page.i-amphtml-layout-container:not([active]){-webkit-transform:translateY(1000%)!important;transform:translateY(1000%)!important}amp-story-page[active],amp-story:not([desktop])>amp-story-page.i-amphtml-layout-container[distance=\"0\"]{-webkit-transform:translateY(0)!important;transform:translateY(0)!important}amp-story:not([desktop])>amp-story-page.i-amphtml-layout-container[distance=\"1\"]{-webkit-transform:translateY(100%)!important;transform:translateY(100%)!important}amp-story:not([desktop])>amp-story-page.i-amphtml-layout-container[distance=\"2\"]{-webkit-transform:translateY(200%)!important;transform:translateY(200%)!important}amp-story:not([desktop])>amp-story-page.i-amphtml-layout-container[distance=\"3\"]{-webkit-transform:translateY(300%)!important;transform:translateY(300%)!important}.i-amphtml-story-bookend-active:not([desktop])>amp-story-page.i-amphtml-layout-container[active]{-webkit-transform:translateY(0) scale(1.2)!important;transform:translateY(0) scale(1.2)!important;-webkit-filter:blur(15px)!important;filter:blur(15px)!important}.i-amphtml-story-bookend-active>amp-story-page[active]:after{content:\"\"!important;display:block!important;top:0!important;background:hsla(0,0%,46%,0.3)!important;z-index:2!important}.i-amphtml-story-bookend-active>amp-story-page[active]:after,amp-story-cta-layer,amp-story-grid-layer{left:0!important;bottom:0!important;right:0!important;position:absolute!important}amp-story-cta-layer{display:block!important;height:20%!important;z-index:3!important}amp-story-grid-layer{display:grid!important;top:0!important;z-index:2!important}amp-story-grid-layer *{box-sizing:border-box!important;margin:0!important}.i-amphtml-story-grid-template-fill>:not(:first-child),.i-amphtml-story-logo{display:none!important}.i-amphtml-story-logo{margin:15px!important}.i-amphtml-story-grid-template-fill>:first-child{bottom:0!important;display:block!important;height:auto!important;left:0!important;position:absolute!important;right:0!important;top:0!important;width:auto!important}.i-amphtml-story-grid-template-fill>amp-anim img,.i-amphtml-story-grid-template-fill>amp-img img,.i-amphtml-story-grid-template-fill>amp-video video{-o-object-fit:cover!important;object-fit:cover!important}.i-amphtml-story-grid-template-vertical{grid-auto-flow:row!important;grid-template-columns:100%!important}.i-amphtml-story-grid-template-horizontal{grid-auto-flow:column!important;grid-template-rows:100%!important}.i-amphtml-story-grid-template-thirds{grid-template-rows:33% 33% 33%!important;grid-template-areas:\"upper-third\" \"middle-third\" \"lower-third\"!important}.i-amphtml-story-bookend{text-align:left!important;color:#fff!important;bottom:0!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important;left:0!important;position:absolute!important;right:0!important;top:0!important;z-index:100001!important;-webkit-transition:-webkit-transform 0.3s ease-out!important;transition:-webkit-transform 0.3s ease-out!important;transition:transform 0.3s ease-out!important;transition:transform 0.3s ease-out,-webkit-transform 0.3s ease-out!important}.i-amphtml-story-bookend.i-amphtml-hidden{-webkit-transition-timing-function:ease-in!important;transition-timing-function:ease-in!important;-webkit-transform:translateY(100vh)!important;transform:translateY(100vh)!important;pointer-events:none!important}.i-amphtml-story-bookend-hidden{pointer-events:none!important}.i-amphtml-story-bookend-overflow{overflow:auto!important;margin-top:auto!important;-webkit-transition:opacity 0.3s,-webkit-transform 0.3s ease-out!important;transition:opacity 0.3s,-webkit-transform 0.3s ease-out!important;transition:opacity 0.3s,transform 0.3s ease-out!important;transition:opacity 0.3s,transform 0.3s ease-out,-webkit-transform 0.3s ease-out!important}.i-amphtml-story-bookend-hidden .i-amphtml-story-bookend-overflow{-webkit-transform:translateY(200px)!important;transform:translateY(200px)!important;opacity:0!important}.i-amphtml-story-bookend-inner{margin:88px 0 0!important;position:relative!important;padding-top:32px!important;overflow:hidden!important}.i-amphtml-story-bookend-inner:before{content:\" \"!important;display:block!important;z-index:-1!important;background:rgba(0,0,0,0.75)!important;position:absolute!important;left:8px!important;top:8px!important;bottom:8px!important;right:8px!important;border-radius:8px!important}.i-amphtml-story-bookend-fullbleed .i-amphtml-story-bookend-inner:before,[desktop] .i-amphtml-story-bookend-inner:before{left:0!important;top:0!important;bottom:0!important;right:0!important;border-radius:0!important}.i-amphtml-story-bookend-heading{text-transform:uppercase!important;font-size:12px!important;padding-bottom:8px!important;margin:48px 0 8px!important;border-bottom:1px solid hsla(0,0%,100%,0.25)!important;color:hsla(0,0%,100%,0.54)!important;font-family:Roboto,sans-serif;font-weight:700!important;letter-spacing:0.83px!important;line-height:1!important}.i-amphtml-story-bookend-article-meta{font-family:Roboto,sans-serif;font-weight:400!important;font-size:14px!important;line-height:1!important;color:hsla(0,0%,100%,0.6)!important}.i-amphtml-story-bookend-article{box-sizing:border-box!important;display:block!important;text-decoration:none!important;color:inherit!important;overflow:hidden!important;-webkit-box-flex:1!important;-ms-flex:1 0 320px!important;flex:1 0 320px!important;min-width:33%!important;margin:24px 0!important;padding:0 32px!important}@media (min-width:640px){.i-amphtml-story-bookend-article{max-width:50%!important}}@media (min-width:960px){.i-amphtml-story-bookend-article{max-width:33%!important}}.i-amphtml-story-bookend-article-heading{font-family:Roboto,sans-serif!important;font-weight:400!important;font-size:16px!important;color:#fff!important;line-height:1.4;margin:0 0 8px!important}.i-amphtml-story-bookend-article-image,.i-amphtml-story-bookend-replay-image{width:100px!important;height:100px!important;border-radius:8px!important;overflow:hidden}.i-amphtml-story-bookend-article-image.amp-notsupported{display:none!important}.i-amphtml-story-bookend-article-image>img{-o-object-fit:cover;object-fit:cover}.i-amphtml-story-bookend-replay-image{background-position:50%!important;background-size:cover!important}.i-amphtml-story-bookend-article-image,.i-amphtml-story-bookend-replay-icon,.i-amphtml-story-bookend-replay-image{float:right!important;margin-left:24px!important;position:relative!important}.i-amphtml-story-bookend-replay{padding:16px 0!important;margin:0 0 24px!important;overflow:hidden!important}.i-amphtml-story-bookend-replay-icon{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\") 50% no-repeat!important}.i-amphtml-story-bookend-replay-image>.i-amphtml-story-bookend-replay-icon{width:100%!important;height:100%!important;background-color:rgba(0,0,0,0.3)!important;position:absolute!important;margin-left:0!important}.i-amphtml-story-bookend-replay>.i-amphtml-story-bookend-replay-icon{width:48px!important;height:48px!important;background-color:rgba(60,60,60,0.5)!important;position:static!important;border-radius:4px!important}.i-amphtml-story-bookend-heading+.i-amphtml-story-bookend-article-set{border-top:none!important}.i-amphtml-story-bookend-article-set{border-top:1px solid hsla(0,0%,100%,0.25)!important;margin-bottom:32px!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important;-webkit-box-pack:justify!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.i-amphtml-story-bookend-heading,.i-amphtml-story-bookend-replay{margin-left:32px!important;margin-right:32px!important}.i-amphtml-story-share-widget{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;margin:16px 8px!important}.i-amphtml-story-share-widget-scrollable{padding:16px 0!important;height:66px!important;overflow:auto!important}.i-amphtml-story-bookend-fullbleed .i-amphtml-story-share-widget{margin-left:0!important;margin-right:0!important}.i-amphtml-story-share-widget::-webkit-scrollbar{width:0px!important;background:transparent!important}.i-amphtml-story-share-list{list-style:none!important;padding:0 8px!important;margin:0!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.i-amphtml-story-bookend-fullbleed .i-amphtml-story-share-list{padding-left:16px!important;padding-right:16px!important}.i-amphtml-story-share-item{width:48px!important;height:66px!important;padding:0 16px!important}.i-amphtml-story-share-widget-scrollable>*>.i-amphtml-story-share-item{display:block!important;margin:0!important}.i-amphtml-story-share-item:empty{display:none!important}.i-amphtml-story-share-icon{box-sizing:border-box!important;position:relative!important;width:48px!important;height:66px!important;padding:56px 0 0!important;background-color:transparent!important;display:block!important;text-transform:capitalize!important;font-family:Roboto,sans-serif!important;color:#fff!important;font-weight:400!important;line-height:10px!important;font-size:10px!important;text-align:center!important;cursor:pointer!important;background-position:8px 8px!important;background-size:32px 32px!important;background-repeat:no-repeat!important}.i-amphtml-story-share-icon.amp-social-share-facebook{background-size:38px 38px!important;background-position:5px 5px!important}.i-amphtml-story-share-icon:before{content:\" \"!important;border-radius:4px!important;background-color:hsla(0,0%,100%,0.15)!important;width:48px!important;height:48px!important;position:absolute!important;display:block!important;top:0!important;left:0!important;z-index:-1!important}.i-amphtml-story-share-icon:active,.i-amphtml-story-share-icon:focus{outline:none!important;box-shadow:none!important}.i-amphtml-story-share-icon:active:before{background-color:#787878!important}.i-amphtml-story-share-icon[type=email]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-share-icon[type=system]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-share-icon-link{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-bookend-active .i-amphtml-story-dev-logs-button,.i-amphtml-story-dev-logs-button[data-count=\"0\"]{display:none!important}.i-amphtml-story-dev-logs-button{background-position:50%!important;background-repeat:no-repeat!important}.i-amphtml-story-dev-logs-button:after{background-color:#fff!important;border-radius:6px!important;box-sizing:border-box!important;color:#444;content:attr(data-count)!important;display:inline-block!important;font-family:Roboto!important;font-size:11px!important;height:12px!important;line-height:12px!important;padding:0 6px!important;position:absolute!important;right:0!important;top:6px!important}.i-amphtml-story-error-button{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23DB4437'%3E%3Cpath d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-warning-button{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23FFC107'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-success-button{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%230F9D58'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E\")!important}amp-story[standalone] .i-amphtml-story-developer-log{background:rgba(0,0,0,0.85)!important;bottom:0!important;box-sizing:border-box!important;color:#fff!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important;font-family:Roboto!important;left:0!important;max-height:45%!important;padding:0!important;position:fixed!important;right:0!important;text-align:left!important;z-index:100002!important}.i-amphtml-story-developer-log-header{-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;background:rgba(3,169,244,0.85)!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;font-weight:700!important;-webkit-box-pack:justify!important;-ms-flex-pack:justify!important;justify-content:space-between!important;padding:12px 20px!important;text-align:center!important}.i-amphtml-story-developer-log-close,.i-amphtml-story-developer-log-header{-webkit-box-flex:0!important;-ms-flex-positive:0!important;flex-grow:0!important;-ms-flex-negative:0!important;flex-shrink:0!important}.i-amphtml-story-developer-log-close{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23FFF' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-developer-log-context{color:#000!important;font-family:Roboto Mono!important}.i-amphtml-story-developer-log-entries{list-style-type:none!important;margin:0!important;overflow-x:hidden!important;overflow-y:auto!important;padding:0!important}.i-amphtml-story-developer-log-entry{-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;border-bottom:1px solid hsla(0,0%,100%,0.5)!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;padding:20px!important}.i-amphtml-story-developer-log-entry:before{background-position:50%!important;background-repeat:no-repeat!important;background-size:cover!important;content:\"\";display:inline-block!important;-webkit-box-flex:0!important;-ms-flex-positive:0!important;flex-grow:0!important;-ms-flex-negative:0!important;flex-shrink:0!important;height:32px!important;margin-right:20px!important;width:32px!important}.i-amphtml-story-developer-log-entry-error:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23DB4437'%3E%3Cpath d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-developer-log-entry-warning:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23FFC107'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-developer-log-entry-success:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%230F9D58'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-experiment-error{-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-line-pack:center!important;align-content:center!important;background-color:#222!important;bottom:0!important;color:#f0f0f0!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important;font-family:Roboto,sans-serif!important;font-size:20px!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;left:0!important;padding:32px!important;position:absolute!important;right:0!important;top:0!important;z-index:999999!important;text-align:center!important}.i-amphtml-story-experiment-icon{background-repeat:no-repeat!important;background-size:cover!important;height:64px!important;margin:0 auto 16px!important;width:64px!important}.i-amphtml-story-experiment-icon-error{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23FFF'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-experiment-icon-done{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23FFF'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-experiment-error button{background-color:transparent!important;border:1px solid #f0f0f0!important;border-radius:8px!important;color:#f0f0f0!important;cursor:pointer!important;font-size:20px!important;font-family:Roboto,sans-serif!important;margin:16px 0 0!important;outline:none!important;padding:8px 32px!important;text-transform:uppercase!important;width:50%!important}.i-amphtml-story-experiment-error button:active,.i-amphtml-story-experiment-error button:focus{background-color:#f0f0f0!important;color:#222!important}.i-amphtml-story-unmute-audio-control{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23FFF'%3E%3Cpath d='M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-mute-audio-control{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23FFF'%3E%3Cpath d='M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-bookend-close{opacity:0.5!important;top:8px!important;left:8px!important;position:absolute!important;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FFF' height='24' viewBox='0 0 24 24' width='24'%3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-bookend-fullbleed .i-amphtml-story-bookend-close{opacity:1!important;position:fixed!important;z-index:2!important}.i-amphtml-story-bookend-fullbleed:before{content:\" \"!important;display:block!important;background-image:-webkit-linear-gradient(bottom,rgba(1,1,1,0),#000)!important;background-image:linear-gradient(0deg,rgba(1,1,1,0),#000)!important;position:fixed!important;top:0!important;left:0!important;right:0!important;height:40px!important;pointer-events:none!important;z-index:1!important}.i-amphtml-story-toast{position:fixed!important;bottom:0!important;left:0!important;right:0!important;display:inline-block!important;padding:1.16em 1.33em!important;line-height:1.33!important;color:#fff!important;background:#212121!important;-webkit-animation:toast 2.2s!important;animation:toast 2.2s!important;-webkit-animation-fill-mode:both!important;animation-fill-mode:both!important;font-family:Roboto,sans-serif!important;font-weight:400!important;font-size:12px!important;max-width:640px!important;z-index:100002!important}@media (min-width:640px){.i-amphtml-story-toast{right:auto!important;font-size:14px!important;margin:0 auto 1.16em 1.16em!important;border-radius:6px}}@-webkit-keyframes toast{0%{-webkit-transform:translateY(100px);transform:translateY(100px);easing:cubic-bezier(0.0,0.0,0.2,1)}8%{-webkit-transform:translateY(0);transform:translateY(0)}92%{-webkit-transform:translateY(0);transform:translateY(0);easing:cubic-bezier(0.4,0.0,1,1)}to{-webkit-transform:translateY(100px);transform:translateY(100px)}}@keyframes toast{0%{-webkit-transform:translateY(100px);transform:translateY(100px);easing:cubic-bezier(0.0,0.0,0.2,1)}8%{-webkit-transform:translateY(0);transform:translateY(0)}92%{-webkit-transform:translateY(0);transform:translateY(0);easing:cubic-bezier(0.4,0.0,1,1)}to{-webkit-transform:translateY(100px);transform:translateY(100px)}}.i-amphtml-story-copy-successful{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E\")!important;background-repeat:no-repeat!important;background-size:16px 16px!important;padding-left:24px!important;color:#fff!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.i-amphtml-story-copy-url{-webkit-box-flex:1!important;-ms-flex:1!important;flex:1!important;color:hsla(0,0%,100%,0.5)!important;margin-left:40px!important;text-overflow:ellipsis!important;overflow:hidden!important;white-space:nowrap!important}.i-amphtml-story-unsupported-browser-overlay,amp-story[standalone] .i-amphtml-story-no-rotation-overlay{position:fixed!important;z-index:200000!important;font-family:Roboto,sans-serif;font-weight:700!important;line-height:1.5;padding:32px;background-color:#000!important;top:0!important;left:0!important;right:0!important;bottom:0!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;text-align:center!important;display:none!important}[desktop] .i-amphtml-story-no-rotation-overlay{display:none!important}.i-amphtml-story-unsupported-browser-overlay,amp-story[standalone].i-amphtml-story-landscape .i-amphtml-story-no-rotation-overlay{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}amp-story .i-amphtml-story-no-rotation-overlay,amp-story .i-amphtml-story-unsupported-browser-overlay{color:#fff!important}amp-story .i-amphtml-desktop-size-icon,amp-story .i-amphtml-gear-icon,amp-story .i-amphtml-rotate-icon{background-repeat:no-repeat!important;background-position:50%!important;border-radius:50%!important;background-color:#fff!important;padding:16px!important;height:24px!important;width:24px!important;margin:16px auto!important}amp-story .i-amphtml-rotate-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77a1.49 1.49 0 0 0-2.12 0L1.75 8.11a1.49 1.49 0 0 0 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-7.31.29A10.487 10.487 0 0 1 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z'/%3E%3C/svg%3E\")!important}amp-story .i-amphtml-gear-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 20 20'%3E%3Cpath fill='none' d='M0 0h20v20H0V0z'/%3E%3Cpath d='M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34a.4.4 0 0 0-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z'/%3E%3C/svg%3E\")!important}amp-story .i-amphtml-desktop-size-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z'/%3E%3C/svg%3E\")!important}amp-story .i-amphtml-story-overlay-text{color:#fff!important;font-weight:700!important}.i-amphtml-story-button-container{display:none!important}.i-amphtml-story-spinner{display:inline-block!important;position:absolute!important;top:calc(100% - 36px)!important;right:12px!important;width:24px!important;height:24px!important;z-index:10!important}.i-amphtml-story-spinner-container{width:100%!important;height:100%!important;direction:ltr!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-container{-webkit-animation:container-rotate 1294ms linear infinite!important;animation:container-rotate 1294ms linear infinite!important}@-webkit-keyframes container-rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes container-rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.i-amphtml-story-spinner-layer{position:absolute!important;width:100%!important;height:100%!important;opacity:0!important;white-space:nowrap!important;color:#fff!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-layer{-webkit-animation-name:fill-unfill-rotate!important;animation-name:fill-unfill-rotate!important;-webkit-animation-duration:4400ms!important;animation-duration:4400ms!important;-webkit-animation-timing-function:cubic-bezier(0.4,0.0,0.2,1)!important;animation-timing-function:cubic-bezier(0.4,0.0,0.2,1)!important;-webkit-animation-iteration-count:infinite!important;animation-iteration-count:infinite!important;opacity:1!important}@-webkit-keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}@keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}.i-amphtml-story-spinner-circle-clipper{display:inline-block!important;position:relative!important;width:50%!important;height:100%!important;overflow:hidden!important}.i-amphtml-story-spinner-layer:after{left:45%!important;width:10%!important;border-top-style:solid!important}.i-amphtml-story-spinner-circle-clipper:after,.i-amphtml-story-spinner-layer:after{content:\"\"!important;box-sizing:border-box!important;position:absolute!important;top:0!important;border-width:3px!important;border-radius:50%!important}.i-amphtml-story-spinner-circle-clipper:after{bottom:0!important;width:200%!important;border-style:solid!important;border-bottom-color:transparent!important}.i-amphtml-story-spinner-circle-clipper.left:after{left:0!important;border-right-color:transparent!important;-webkit-transform:rotate(129deg)!important;transform:rotate(129deg)!important}.i-amphtml-story-spinner-circle-clipper.right:after{left:-100%!important;border-left-color:transparent!important;-webkit-transform:rotate(-129deg)!important;transform:rotate(-129deg)!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-circle-clipper:after{-webkit-animation-duration:1100ms!important;animation-duration:1100ms!important;-webkit-animation-timing-function:cubic-bezier(0.4,0.0,0.2,1)!important;animation-timing-function:cubic-bezier(0.4,0.0,0.2,1)!important;-webkit-animation-iteration-count:infinite!important;animation-iteration-count:infinite!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-circle-clipper.left:after{-webkit-animation-name:left-spin!important;animation-name:left-spin!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-circle-clipper.right:after{-webkit-animation-name:right-spin!important;animation-name:right-spin!important}@-webkit-keyframes left-spin{0%{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg);transform:rotate(130deg)}}@keyframes left-spin{0%{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg);transform:rotate(130deg)}}@-webkit-keyframes right-spin{0%{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}}@keyframes right-spin{0%{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}}\n/*# sourceURL=/extensions/amp-story/0.1/amp-story.css*/";

},{}],2:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isWhitelistedProp = isWhitelistedProp;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @typedef {
 *   !WebMultiAnimationDef|
 *   !WebSwitchAnimationDef|
 *   !WebCompAnimationDef|
 *   !WebKeyframeAnimationDef
 * }
 */
var WebAnimationDef = exports.WebAnimationDef = void 0;

/**
 * @mixes WebAnimationSelectorDef
 * @mixes WebAnimationTimingDef
 * @mixes WebAnimationVarsDef
 * @mixes WebAnimationConditionalDef
 * @typedef {{
 *   animations: !Array<!WebAnimationDef>,
 * }}
 */
var WebMultiAnimationDef = exports.WebMultiAnimationDef = void 0;

/**
 * @mixes WebAnimationSelectorDef
 * @mixes WebAnimationTimingDef
 * @mixes WebAnimationVarsDef
 * @mixes WebAnimationConditionalDef
 * @typedef {{
 *   switch: !Array<!WebAnimationDef>,
 * }}
 */
var WebSwitchAnimationDef = exports.WebSwitchAnimationDef = void 0;

/**
 * @mixes WebAnimationSelectorDef
 * @mixes WebAnimationTimingDef
 * @mixes WebAnimationVarsDef
 * @mixes WebAnimationConditionalDef
 * @typedef {{
 *   animation: string,
 * }}
 */
var WebCompAnimationDef = exports.WebCompAnimationDef = void 0;

/**
 * @mixes WebAnimationSelectorDef
 * @mixes WebAnimationTimingDef
 * @mixes WebAnimationVarsDef
 * @mixes WebAnimationConditionalDef
 * @typedef {{
 *   keyframes: (string|!WebKeyframesDef),
 * }}
 */
var WebKeyframeAnimationDef = exports.WebKeyframeAnimationDef = void 0;

/**
 * @typedef {!Object<string, *>|!Array<!Object<string, *>>}
 */
var WebKeyframesDef = exports.WebKeyframesDef = void 0;

/**
 * See https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffectTimingProperties
 *
 * @mixin
 * @typedef {{
 *   duration: (time|undefined),
 *   delay: (time|undefined),
 *   endDelay: (time|undefined),
 *   iterations: (number|string|undefined),
 *   iterationStart: (number|undefined),
 *   easing: (string|undefined),
 *   direction: (!WebAnimationTimingDirection|undefined),
 *   fill: (!WebAnimationTimingFill|undefined),
 * }}
 */
var WebAnimationTimingDef = exports.WebAnimationTimingDef = void 0;

/**
 * Indicates an extension to a type that allows specifying vars. Vars are
 * specified as properties with the name in the format of `--varName`.
 *
 * @mixin
 * @typedef {Object}
 */
var WebAnimationVarsDef = exports.WebAnimationVarsDef = void 0;

/**
 * Defines media parameters for an animation.
 *
 * @mixin
 * @typedef {{
 *   media: (string|undefined),
 *   supports: (string|undefined),
 * }}
 */
var WebAnimationConditionalDef = exports.WebAnimationConditionalDef = void 0;

/**
 * @typedef {{
 *   target: (!Element|undefined),
 *   selector: (string|undefined),
 *   subtargets: (!Array<!WebAnimationSubtargetDef>|undefined),
 * }}
 */
var WebAnimationSelectorDef = exports.WebAnimationSelectorDef = void 0;

/**
 * @mixes WebAnimationTimingDef
 * @mixes WebAnimationVarsDef
 * @typedef {{
 *   matcher: (function(!Element, number):boolean|undefined),
 *   index: (number|undefined),
 *   selector: (string|undefined),
 * }}
 */
var WebAnimationSubtargetDef = exports.WebAnimationSubtargetDef = void 0;

/**
 * See https://developer.mozilla.org/en-US/docs/Web/API/Animation/playState
 * @enum {string}
 */
var WebAnimationPlayState = exports.WebAnimationPlayState = {
  IDLE: 'idle',
  PENDING: 'pending',
  RUNNING: 'running',
  PAUSED: 'paused',
  FINISHED: 'finished'
};

/**
 * See https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffectTimingProperties/direction
 * @enum {string}
 */
var WebAnimationTimingDirection = exports.WebAnimationTimingDirection = {
  NORMAL: 'normal',
  REVERSE: 'reverse',
  ALTERNATE: 'alternate',
  ALTERNATE_REVERSE: 'alternate-reverse'
};

/**
 * See https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffectTimingProperties/fill
 * @enum {string}
 */
var WebAnimationTimingFill = exports.WebAnimationTimingFill = {
  NONE: 'none',
  FORWARDS: 'forwards',
  BACKWARDS: 'backwards',
  BOTH: 'both',
  AUTO: 'auto'
};

/** @const {!Object<string, boolean>} */
var WHITELISTED_RPOPS = {
  'opacity': true,
  'transform': true,
  'visibility': true,
  'offset-distance': true,
  'offsetDistance': true
};

/**
 * @param {string} prop
 * @return {boolean}
 */
function isWhitelistedProp(prop) {
  return WHITELISTED_RPOPS[prop] || false;
}

},{}],3:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AmpStoryAutoAds = undefined;

var _ampStoryStateService = require('./amp-story-state-service');

var _commonSignals = require('../../../src/common-signals');

var _services = require('../../../src/services');

var _navigationState = require('./navigation-state');

var _dom = require('../../../src/dom');

var _log = require('../../../src/log');

var _object = require('../../../src/utils/object');

var _embedMode = require('./embed-mode');

var _json = require('../../../src/json');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/** @const */
var MIN_INTERVAL = 3;

/** @const */
var TAG = 'amp-story-auto-ads';

/** @const */
var AD_TAG = 'amp-ad';

/** @const */
var MUSTACHE_TAG = 'amp-mustache';

/** @const */
var TIMEOUT_LIMIT = 10000; // 10 seconds

/** @const */
var DATA_ATTR = {
  CTA_TYPE: 'data-vars-ctatype',
  CTA_URL: 'data-vars-ctaurl'
};

/** @const */
var CTA_TYPES = {
  EXPLORE: 'Explore Now',
  SHOP: 'Shop Now',
  READ: 'Read Now'
};

/** @const */
var AD_STATE = {
  PENDING: 0,
  PLACED: 1,
  FAILED: 2
};

/** @const */
var ALLOWED_AD_TYPES = (0, _object.map)({
  'custom': true
});

var AmpStoryAutoAds = exports.AmpStoryAutoAds = function (_AMP$BaseElement) {
  _inherits(AmpStoryAutoAds, _AMP$BaseElement);

  /** @param {!AmpElement} element */
  function AmpStoryAutoAds(element) {
    _classCallCheck(this, AmpStoryAutoAds);

    /** @private {?./amp-story.AmpStory} */
    var _this = _possibleConstructorReturn(this, _AMP$BaseElement.call(this, element));

    _this.ampStory_ = null;

    /** @private {?./navigation-state.NavigationState} */
    _this.navigationState_ = null;

    /** @private {number} */
    _this.uniquePagesCount_ = 0;

    /** @private {!Object<string, boolean>} */
    _this.uniquePageIds_ = (0, _object.dict)({});

    /** @private {!Array<Element>} */
    _this.adPageEls_ = [];

    /** @private {number} */
    _this.timeCurrentPageCreated_ = -Infinity;

    /** @private {number} */
    _this.adsPlaced_ = 0;

    /** @private {number} */
    _this.adPagesCreated_ = 0;

    /** @private {?Element} */
    _this.currentAdElement_ = null;

    /** @private {boolean} */
    _this.isCurrentAdLoaded_ = false;

    /** @private {Object<string, string>} */
    _this.config_ = {};

    /** @private @const {!AmpStoryStateService} */
    _this.stateService_ = new _ampStoryStateService.AmpStoryStateService();
    return _this;
  }

  /** @override */


  AmpStoryAutoAds.prototype.buildCallback = function buildCallback() {
    var _this2 = this;

    var embedMode = (0, _embedMode.parseEmbedMode)(this.win.location.hash);
    this.stateService_.initializeEmbedMode(embedMode);
    if (!this.isAutomaticAdInsertionAllowed_()) {
      return;
    }

    var ampStoryElement = this.element.parentElement;
    (0, _log.user)().assert(ampStoryElement.tagName === 'AMP-STORY', '<' + TAG + '> should be child of <amp-story>');

    var ampdoc = this.getAmpDoc();
    _services.Services.extensionsFor(this.win). /*OK*/installExtensionForDoc(ampdoc, AD_TAG);
    _services.Services.extensionsFor(this.win). /*OK*/installExtensionForDoc(ampdoc, MUSTACHE_TAG);

    return ampStoryElement.getImpl().then(function (impl) {
      _this2.ampStory_ = impl;
      _this2.navigationState_ = _this2.ampStory_.getNavigationState();
      _this2.navigationState_.observe(_this2.handleStateChange_.bind(_this2));
    });
  };

  /** @override */


  AmpStoryAutoAds.prototype.isLayoutSupported = function isLayoutSupported() {
    return true;
  };

  /** @override */


  AmpStoryAutoAds.prototype.layoutCallback = function layoutCallback() {
    var _this3 = this;

    if (!this.isAutomaticAdInsertionAllowed_()) {
      return Promise.resolve();
    }

    return this.ampStory_.signals().whenSignal(_commonSignals.CommonSignals.INI_LOAD).then(function () {
      _this3.createAdOverlay_();
      _this3.readConfig_();
      _this3.schedulePage_();
    });
  };

  AmpStoryAutoAds.prototype.isAutomaticAdInsertionAllowed_ = function isAutomaticAdInsertionAllowed_() {
    var allowAutomaticAdInsertion = this.stateService_.getState(_ampStoryStateService.StateType.ALLOW_AUTOMATIC_AD_INSERTION);

    return allowAutomaticAdInsertion.getValue();
  };

  /**
   * load in config from child <script> element
   * @private
   */


  AmpStoryAutoAds.prototype.readConfig_ = function readConfig_() {
    var child = this.element.children[0];
    (0, _log.user)().assert((0, _dom.isJsonScriptTag)(child), 'The <' + TAG + '> config should ' + 'be inside a <script> tag with type="application/json"');

    this.config_ = (0, _json.parseJson)(child.textContent);
    this.validateConfig_();
  };

  /**
   * Create a hidden UI that will be shown when ad is displayed
   * @private
   */


  AmpStoryAutoAds.prototype.createAdOverlay_ = function createAdOverlay_() {
    var container = document.createElement('aside');
    container.className = 'i-amphtml-ad-overlay-container';

    var span = document.createElement('p');
    span.className = 'i-amphtml-story-ad-attribution';
    span.textContent = 'Ad';

    container.appendChild(span);
    this.ampStory_.element.appendChild(container);
  };

  /**
   * make sure given JSON config is shaped correctly
   * @private
   */


  AmpStoryAutoAds.prototype.validateConfig_ = function validateConfig_() {
    var adAttributes = this.config_['ad-attributes'];
    (0, _log.user)().assert(adAttributes, '<' + TAG + '>: Error reading config.' + 'Top level JSON should have an "ad-attributes" key');

    var type = adAttributes.type;
    (0, _log.user)().assert(type, '<' + TAG + '>: Error reading config.' + 'Missing ["ad-attribues"]["type"] key');
  };

  /**
   * build page and start preloading
   * @private
   */


  AmpStoryAutoAds.prototype.schedulePage_ = function schedulePage_() {
    var _this4 = this;

    var page = this.createAdPage_();
    this.adPageEls_.push(page);

    this.ampStory_.element.appendChild(page);

    page.getImpl().then(function (impl) {
      _this4.ampStory_.addPage(impl);
      _this4.timeCurrentPageCreated_ = Date.now();
    });
  };

  /**
   * create an `amp-story-page` containing an `amp-ad`
   * @private
   */


  AmpStoryAutoAds.prototype.createAdPage_ = function createAdPage_() {
    var _this5 = this;

    var ampStoryAdPage = this.createPageElement_();
    var ampAd = this.createAdElement_();

    var gridLayer = document.createElement('amp-story-grid-layer');
    gridLayer.setAttribute('template', 'fill');
    gridLayer.appendChild(ampAd);
    ampStoryAdPage.appendChild(gridLayer);

    this.currentAdElement_ = ampAd;
    this.isCurrentAdLoaded_ = false;

    // set up listener for ad-loaded event
    ampAd.getImpl().then(function (impl) {
      var signals = impl.signals();
      return signals.whenSignal(_commonSignals.CommonSignals.INI_LOAD);
    }).then(function () {
      _this5.isCurrentAdLoaded_ = true;
    });

    return ampStoryAdPage;
  };

  /**
   * @return {!Element}
   * @private
   */


  AmpStoryAutoAds.prototype.createPageElement_ = function createPageElement_() {
    var id = ++this.adPagesCreated_;
    var attributes = (0, _object.dict)({
      'id': 'i-amphtml-ad-page-' + id,
      'ad': '',
      'distance': '1'
    });

    return (0, _dom.createElementWithAttributes)(document, 'amp-story-page', attributes);
  };

  /**
   * @return {!Element}
   * @private
   */


  AmpStoryAutoAds.prototype.createAdElement_ = function createAdElement_() {
    var requiredAttrs = {
      'class': 'i-amphtml-story-ad',
      'layout': 'fill'
    };

    var configAttrs = this.config_['ad-attributes'];

    ['height', 'width', 'layout'].forEach(function (attr) {
      if (configAttrs[attr] !== undefined) {
        (0, _log.user)().warn(TAG, 'ad-attribute "' + attr + '" is not allowed');
        delete configAttrs[attr];
      }
    });

    (0, _log.user)().assert(!!ALLOWED_AD_TYPES[configAttrs.type], TAG + ': ' + ('"' + configAttrs.type + '" ad type is not supported'));

    var attributes = /** @type {!JsonObject} */Object.assign({}, configAttrs, requiredAttrs);

    return (0, _dom.createElementWithAttributes)(document, 'amp-ad', attributes);
  };

  /**
   * Validate ad-server response has requirements to build outlink
   * @param {!Element} adPageElement
   */


  AmpStoryAutoAds.prototype.maybeCreateCtaLayer_ = function maybeCreateCtaLayer_(adPageElement) {
    // if making a CTA layer we need a button name & outlink url
    var ctaUrl = this.currentAdElement_.getAttribute(DATA_ATTR.CTA_URL);
    var ctaType = this.currentAdElement_.getAttribute(DATA_ATTR.CTA_TYPE);

    if (!ctaUrl || !ctaType) {
      (0, _log.user)().error(TAG, 'Both CTA Type & CTA Url ' + 'are required in ad-server response."');
      return false;
    }

    var ctaText = CTA_TYPES[ctaType];
    if (!ctaType) {
      (0, _log.user)().error(TAG, 'invalid "CTA Type" in ad response');
      return false;
    }

    return this.createCtaLayer_(adPageElement, ctaText, ctaUrl);
  };

  /**
   * Create layer to contain outlink button
   * @param {!Element} adPageElement
   * @param {string} ctaText
   * @param {string} ctaUrl
   * @return {boolean}
   */


  AmpStoryAutoAds.prototype.createCtaLayer_ = function createCtaLayer_(adPageElement, ctaText, ctaUrl) {
    var a = document.createElement('a');
    a.className = 'i-amphtml-story-ad-link';
    a.setAttribute('target', '_blank');
    a.href = ctaUrl;
    a.textContent = ctaText;

    if (a.protocol !== 'https:' && a.protocol !== 'http:') {
      (0, _log.user)().warn(TAG, 'CTA url is not valid. Ad was discarded');
      return false;
    }

    var ctaLayer = document.createElement('amp-story-cta-layer');
    ctaLayer.appendChild(a);
    adPageElement.appendChild(ctaLayer);
    return true;
  };

  /**
   * @private
   */


  AmpStoryAutoAds.prototype.handleStateChange_ = function handleStateChange_(stateChangeEvent) {
    switch (stateChangeEvent.type) {
      case _navigationState.StateChangeType.ACTIVE_PAGE:
        var _stateChangeEvent$val = stateChangeEvent.value,
            pageIndex = _stateChangeEvent$val.pageIndex,
            pageId = _stateChangeEvent$val.pageId;

        this.handleActivePageChange_((0, _log.dev)().assertNumber(pageIndex), (0, _log.dev)().assertString(pageId));
        break;
    }
  };

  /**
   * @param {number} pageIndex
   * @param {string} pageId
   * @private
   */


  AmpStoryAutoAds.prototype.handleActivePageChange_ = function handleActivePageChange_(pageIndex, pageId) {
    if (!(0, _object.hasOwn)(this.uniquePageIds_, pageId)) {
      this.uniquePagesCount_++;
      this.uniquePageIds_[pageId] = true;
    }

    if (this.uniquePagesCount_ > MIN_INTERVAL) {
      var adState = this.tryToPlaceAdAfterPage_(pageId);

      if (adState === AD_STATE.PLACED) {
        this.adsPlaced_++;
        // start loading next ad
        this.startNextPage_();
      }

      if (adState === AD_STATE.FAILED) {
        this.startNextPage_();
      }
    }
  };

  /**
   * start the process over
   * @private
   */


  AmpStoryAutoAds.prototype.startNextPage_ = function startNextPage_() {
    this.uniquePagesCount_ = 0;
    this.schedulePage_();
  };

  /**
   * Place ad based on user config
   * @param {string} currentPageId
   * @private
   */


  AmpStoryAutoAds.prototype.tryToPlaceAdAfterPage_ = function tryToPlaceAdAfterPage_(currentPageId) {
    var nextAdPageEl = this.adPageEls_[this.adPageEls_.length - 1];
    if (!this.isCurrentAdLoaded_ && this.adTimedOut_()) {
      // timeout fail
      return AD_STATE.FAILED;
    }

    var currentPage = this.ampStory_.getPageById(currentPageId);
    var nextPage = this.ampStory_.getNextPage(currentPage);

    if (!this.isCurrentAdLoaded_ || currentPage.isAd() || nextPage && nextPage.isAd()) {
      // if we are going to cause two consecutive ads or ad is still
      // loading we will try again on next user interaction
      return AD_STATE.PENDING;
    }

    var ctaCreated = this.maybeCreateCtaLayer_(nextAdPageEl);
    if (!ctaCreated) {
      // failed on ad-server response format
      return AD_STATE.FAILED;
    }

    this.ampStory_.insertPage(currentPageId, nextAdPageEl.id);
    return AD_STATE.PLACED;
  };

  /**
   * @private
   * @return {boolean}
   */


  AmpStoryAutoAds.prototype.adTimedOut_ = function adTimedOut_() {
    return Date.now() - this.timeCurrentPageCreated_ > TIMEOUT_LIMIT;
  };

  return AmpStoryAutoAds;
}(AMP.BaseElement);

AMP.registerElement(TAG, AmpStoryAutoAds);

},{"../../../src/common-signals":45,"../../../src/dom":48,"../../../src/json":55,"../../../src/log":57,"../../../src/services":72,"../../../src/utils/object":83,"./amp-story-state-service":8,"./embed-mode":19,"./navigation-state":26}],4:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AmpStoryBaseLayer = undefined;

var _layout = require('../../../src/layout');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @fileoverview Base layer from which other layers in a story page extend from.
 */

var AmpStoryBaseLayer = exports.AmpStoryBaseLayer = function (_AMP$BaseElement) {
  _inherits(AmpStoryBaseLayer, _AMP$BaseElement);

  /** @param {!AmpElement} element */
  function AmpStoryBaseLayer(element) {
    _classCallCheck(this, AmpStoryBaseLayer);

    return _possibleConstructorReturn(this, _AMP$BaseElement.call(this, element));
  }

  /** @override */


  AmpStoryBaseLayer.prototype.isLayoutSupported = function isLayoutSupported(layout) {
    return layout == _layout.Layout.CONTAINER;
  };

  /** @override */


  AmpStoryBaseLayer.prototype.buildCallback = function buildCallback() {
    this.element.classList.add('i-amphtml-story-layer');
  };

  return AmpStoryBaseLayer;
}(AMP.BaseElement);

},{"../../../src/layout":56}],5:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AmpStoryGridLayer = undefined;

var _ampStoryBaseLayer = require('./amp-story-base-layer');

var _dom = require('../../../src/dom');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @fileoverview This is a layer that lays its children out into a grid. Its
 * implementation is based off of the CSS Grid Spec.
 *
 * Example:
 * <code>
 * <amp-story-grid-layer template="fill">
 *   ...
 * </amp-story-grid-layer>
 * </code>
 */

/**
 * A mapping of attribute names we support for grid layers to the CSS Grid
 * properties they control.
 * @private @const {!Object<string, string>}
 */
var SUPPORTED_CSS_GRID_ATTRIBUTES = {
  'align-content': 'alignContent',
  'align-items': 'alignItems',
  'align-self': 'alignSelf',
  'grid-area': 'gridArea',
  'justify-content': 'justifyContent',
  'justify-items': 'justifyItems',
  'justify-self': 'justifySelf'
};

/**
 * Converts the keys of the SUPPORTED_CSS_GRID_ATTRIBUTES object above into a
 * selector for the specified attributes.
 * (e.g. [align-content], [align-items], ...)
 * @private @const {string}
 */
var SUPPORTED_CSS_GRID_ATTRIBUTES_SELECTOR = Object.keys(SUPPORTED_CSS_GRID_ATTRIBUTES).map(function (key) {
  return '[' + key + ']';
}).join(',');

/**
 * The attribute name for grid layer templates.
 * @private @const {string}
 */
var TEMPLATE_ATTRIBUTE_NAME = 'template';

/**
 * A mapping of template attribute values to CSS class names.
 * @private @const {!Object<string, string>}
 */
var TEMPLATE_CLASS_NAMES = {
  'fill': 'i-amphtml-story-grid-template-fill',
  'vertical': 'i-amphtml-story-grid-template-vertical',
  'horizontal': 'i-amphtml-story-grid-template-horizontal',
  'thirds': 'i-amphtml-story-grid-template-thirds'
};

var AmpStoryGridLayer = exports.AmpStoryGridLayer = function (_AmpStoryBaseLayer) {
  _inherits(AmpStoryGridLayer, _AmpStoryBaseLayer);

  /** @param {!AmpElement} element */
  function AmpStoryGridLayer(element) {
    _classCallCheck(this, AmpStoryGridLayer);

    /** @private @const {boolean} Only prerender if child of the first page. */
    var _this = _possibleConstructorReturn(this, _AmpStoryBaseLayer.call(this, element));

    _this.prerenderAllowed_ = (0, _dom.matches)(_this.element, 'amp-story-page:first-of-type amp-story-grid-layer');
    return _this;
  }

  /** @override */


  AmpStoryGridLayer.prototype.buildCallback = function buildCallback() {
    _AmpStoryBaseLayer.prototype.buildCallback.call(this);
    this.applyTemplateClassName_();
    this.setOwnCssGridStyles_();
    this.setDescendentCssGridStyles_();
  };

  /** @override */


  AmpStoryGridLayer.prototype.prerenderAllowed = function prerenderAllowed() {
    return this.prerenderAllowed_;
  };

  /**
   * Applies internal CSS class names for the template attribute, so that styles
   * can use the class name instead of compound
   * amp-story-grid-layer[template="..."] selectors, since the latter increases
   * CSS specificity and can prevent users from being able to override styles.
   * @private
   */


  AmpStoryGridLayer.prototype.applyTemplateClassName_ = function applyTemplateClassName_() {
    if (this.element.hasAttribute(TEMPLATE_ATTRIBUTE_NAME)) {
      var templateName = this.element.getAttribute(TEMPLATE_ATTRIBUTE_NAME);
      var templateClassName = TEMPLATE_CLASS_NAMES[templateName];
      this.element.classList.add(templateClassName);
    }
  };

  /**
   * Copies the whitelisted CSS grid styles for descendants of the
   * <amp-story-grid-layer> element.
   * @private
   */


  AmpStoryGridLayer.prototype.setDescendentCssGridStyles_ = function setDescendentCssGridStyles_() {
    var _this2 = this;

    var elementsToUpgradeStyles = (0, _dom.scopedQuerySelectorAll)(this.element, SUPPORTED_CSS_GRID_ATTRIBUTES_SELECTOR);

    Array.prototype.forEach.call(elementsToUpgradeStyles, function (element) {
      _this2.setCssGridStyles_(element);
    });
  };

  /**
   * Copies the whitelisted CSS grid styles for the <amp-story-grid-layer>
   * element itself.
   * @private
   */


  AmpStoryGridLayer.prototype.setOwnCssGridStyles_ = function setOwnCssGridStyles_() {
    this.setCssGridStyles_(this.element);
  };

  /**
   * Copies the values of an element's attributes to its styles, if the
   * attributes/properties are in the whitelist.
   *
   * @param {!Element} element The element whose styles should be copied from
   *     its attributes.
   */


  AmpStoryGridLayer.prototype.setCssGridStyles_ = function setCssGridStyles_(element) {
    for (var i = element.attributes.length - 1; i >= 0; i--) {
      var attribute = element.attributes[i];
      var attributeName = attribute.name.toLowerCase();
      var propertyName = SUPPORTED_CSS_GRID_ATTRIBUTES[attributeName];
      if (propertyName) {
        element.style[propertyName] = attribute.value;
        element.removeAttribute(attributeName);
      }
    }
  };

  return AmpStoryGridLayer;
}(_ampStoryBaseLayer.AmpStoryBaseLayer);

AMP.registerElement('amp-story-grid-layer', AmpStoryGridLayer);

},{"../../../src/dom":48,"./amp-story-base-layer":4}],6:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AmpStoryHint = undefined;

var _services = require('../../../src/services');

var _object = require('../../../src/utils/object');

var _simpleTemplate = require('./simple-template');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */

/** @private @const {!./simple-template.ElementDef} */
var TEMPLATE = {
  tag: 'aside',
  attrs: (0, _object.dict)({
    'class': 'i-amphtml-story-hint-container ' + 'i-amphtml-story-system-reset i-amphtml-hidden' }),
  children: [{
    tag: 'div',
    attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-navigation-help-overlay' }),
    children: [{
      tag: 'div',
      attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-navigation-help-section' + ' prev-page' }),
      children: [{
        tag: 'div',
        attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-hint-placeholder' }),
        children: [{
          tag: 'div',
          attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-hint-tap-button' }),
          children: [{
            tag: 'div',
            attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-hint-tap-button-icon' })
          }]
        }, {
          tag: 'div',
          attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-hint-tap-button-text' }),
          text: 'Back'
        }]
      }]
    }, {
      tag: 'div',
      attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-navigation-help-section' + ' next-page' }),
      children: [{
        tag: 'div',
        attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-hint-placeholder' }),
        children: [{
          tag: 'div',
          attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-hint-tap-button' }),
          children: [{
            tag: 'div',
            attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-hint-tap-button-icon' })
          }]
        }, {
          tag: 'div',
          attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-hint-tap-button-text' }),
          text: 'Next'
        }]
      }]
    }]
  }]
};

/** @type {string} */
var NAVIGATION_OVERLAY_CLASS = 'show-navigation-overlay';

/** @type {string} */
var FIRST_PAGE_OVERLAY_CLASS = 'show-first-page-overlay';

/** @type {number} */
var NAVIGATION_OVERLAY_TIMEOUT = 3000;

/** @type {number} */
var FIRST_PAGE_NAVIGATION_OVERLAY_TIMEOUT = 275;

/**
 * User Hint Layer for <amp-story>.
 */

var AmpStoryHint = exports.AmpStoryHint = function () {

  /**
   * @param {!Window} win
   */
  function AmpStoryHint(win) {
    _classCallCheck(this, AmpStoryHint);

    /** @private {!Window} */
    this.win_ = win;

    /** @private {!Document} */
    this.document_ = this.win_.document;

    /** @const @private {!../../../src/service/vsync-impl.Vsync} */
    this.vsync_ = _services.Services.vsyncFor(this.win_);

    /** @const @private {!../../../src/service/timer-impl.Timer} */
    this.timer_ = _services.Services.timerFor(this.win_);

    /** @private {?Element} */
    this.hintContainer_ = null;

    /** @private {?(number|string)} */
    this.hintTimeout_ = null;
  }

  /**
   * Builds the hint layer DOM.
   * @return {!Element}
   */


  AmpStoryHint.prototype.buildHintContainer = function buildHintContainer() {
    this.hintContainer_ = (0, _simpleTemplate.renderAsElement)(this.document_, TEMPLATE);
    return this.hintContainer_;
  };

  /**
   * Shows the given hint
   */


  AmpStoryHint.prototype.showHint_ = function showHint_(hintClass) {
    var _this = this;

    this.vsync_.mutate(function () {
      _this.hintContainer_.classList.toggle(NAVIGATION_OVERLAY_CLASS, hintClass == NAVIGATION_OVERLAY_CLASS);
      _this.hintContainer_.classList.toggle(FIRST_PAGE_OVERLAY_CLASS, hintClass == FIRST_PAGE_OVERLAY_CLASS);
      _this.hintContainer_.classList.remove('i-amphtml-hidden');

      var hideTimeout = hintClass == NAVIGATION_OVERLAY_CLASS ? NAVIGATION_OVERLAY_TIMEOUT : FIRST_PAGE_NAVIGATION_OVERLAY_TIMEOUT;
      _this.hideAfterTimeout(hideTimeout);
    });
  };

  /**
   * Show navigation overlay DOM.
   */


  AmpStoryHint.prototype.showNavigationOverlay = function showNavigationOverlay() {
    this.showHint_(NAVIGATION_OVERLAY_CLASS);
  };

  /**
   * Show navigation overlay DOM.
   */


  AmpStoryHint.prototype.showFirstPageHintOverlay = function showFirstPageHintOverlay() {
    this.showHint_(FIRST_PAGE_OVERLAY_CLASS);
  };

  /**
   * Hides the overlay after a given time
   * @param {number} timeout
   */


  AmpStoryHint.prototype.hideAfterTimeout = function hideAfterTimeout(timeout) {
    var _this2 = this;

    this.hintTimeout_ = this.timer_.delay(function () {
      return _this2.hideInternal_();
    }, timeout);
  };

  /**
   * Hide all navigation hints.
   */


  AmpStoryHint.prototype.hideAllNavigationHint = function hideAllNavigationHint() {
    this.hideInternal_();

    if (this.hintTimeout_ !== null) {
      this.timer_.cancel(this.hintTimeout_);
      this.hintTimeout_ = null;
    }
  };

  /** @private */


  AmpStoryHint.prototype.hideInternal_ = function hideInternal_() {
    var _this3 = this;

    this.vsync_.mutate(function () {
      _this3.hintContainer_.classList.add('i-amphtml-hidden');
    });
  };

  return AmpStoryHint;
}();

},{"../../../src/services":72,"../../../src/utils/object":83,"./simple-template":34}],7:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AmpStoryPage = undefined;

var _pageAdvancement = require('./page-advancement');

var _animation = require('./animation');

var _events = require('./events');

var _layout = require('../../../src/layout');

var _loadingSpinner = require('./loading-spinner');

var _mediaPool = require('./media-pool');

var _pageScaling = require('./page-scaling');

var _dom = require('../../../src/dom');

var _rateLimit = require('../../../src/utils/rate-limit');

var _log = require('../../../src/log');

var _logging = require('./logging');

var _mode = require('../../../src/mode');

var _eventHelper = require('../../../src/event-helper');

var _audio = require('./audio');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @fileoverview Embeds a story
 *
 * Example:
 * <code>
 * <amp-story-page>
 * </amp-story>
 * </code>
 */


/**
 * CSS class for an amp-story-page that indicates the entire page is loaded.
 * @const {string}
 */
var PAGE_LOADED_CLASS_NAME = 'i-amphtml-story-page-loaded';

/**
 * Selector for which media to wait for on page layout.
 * @const {string}
 */
var PAGE_MEDIA_SELECTOR = 'amp-audio, amp-video, amp-img, amp-anim';

/** @private @const {string} */
var TAG = 'amp-story-page';

/** @private @const {string} */
var ADVERTISEMENT_ATTR_NAME = 'ad';

/**
 * The <amp-story-page> custom element, which represents a single page of
 * an <amp-story>.
 */

var AmpStoryPage = exports.AmpStoryPage = function (_AMP$BaseElement) {
  _inherits(AmpStoryPage, _AMP$BaseElement);

  /** @param {!AmpElement} element */
  function AmpStoryPage(element) {
    _classCallCheck(this, AmpStoryPage);

    /** @private {?AnimationManager} */
    var _this = _possibleConstructorReturn(this, _AMP$BaseElement.call(this, element));

    _this.animationManager_ = null;

    /** @private @const {!AdvancementConfig} */
    _this.advancement_ = _pageAdvancement.AdvancementConfig.forPage(_this);

    /** @private {?Element} */
    _this.loadingSpinner_ = null;

    /** @private @const {!Promise} */
    _this.mediaLayoutPromise_ = _this.waitForMediaLayout_();

    /** @private @const {!Promise} */
    _this.pageLoadPromise_ = _this.mediaLayoutPromise_.then(function () {
      _this.markPageAsLoaded_();
    });

    var mediaPoolResolveFn = void 0,
        mediaPoolRejectFn = void 0;

    /** @private @const {!Promise<!MediaPool>} */
    _this.mediaPoolPromise_ = new Promise(function (resolve, reject) {
      mediaPoolResolveFn = resolve;
      mediaPoolRejectFn = reject;
    });

    /** @private @const {!function(!MediaPool)} */
    _this.mediaPoolResolveFn_ = mediaPoolResolveFn;

    /** @private @const {!function(*)} */
    _this.mediaPoolRejectFn_ = mediaPoolRejectFn;

    /** @private @const {boolean} Only prerender the first story page. */
    _this.prerenderAllowed_ = (0, _dom.matches)(_this.element, 'amp-story-page:first-of-type');

    /** @const @private {!function()} */
    _this.debounceToggleLoadingSpinner_ = (0, _rateLimit.debounce)(_this.win, function (isActive) {
      return _this.toggleLoadingSpinner_(!!isActive);
    }, 100);

    /** @private {!Array<function()>} */
    _this.unlisteners_ = [];
    return _this;
  }

  /*
   * @return {?./animation.AnimationManager}
   * @private
   */


  AmpStoryPage.prototype.maybeCreateAnimationManager_ = function maybeCreateAnimationManager_() {
    if (!this.animationManager_) {
      if (!(0, _animation.hasAnimations)(this.element)) {
        return;
      }

      this.animationManager_ = _animation.AnimationManager.create(this.element, this.getAmpDoc(), this.getAmpDoc().getUrl());
    }
  };

  /** @override */


  AmpStoryPage.prototype.buildCallback = function buildCallback() {
    var _this2 = this;

    (0, _audio.upgradeBackgroundAudio)(this.element);
    this.markMediaElementsWithPreload_();
    this.initializeMediaPool_();
    this.maybeCreateAnimationManager_();
    this.advancement_.addPreviousListener(function () {
      return _this2.previous();
    });
    this.advancement_.addAdvanceListener(function () {
      return _this2.next( /* opt_isAutomaticAdvance */true);
    });
    this.advancement_.addOnTapNavigationListener(function (navigationDirection) {
      return _this2.navigateOnTap(navigationDirection);
    });
    this.advancement_.addProgressListener(function (progress) {
      return _this2.emitProgress_(progress);
    });
  };

  /** @private */


  AmpStoryPage.prototype.initializeMediaPool_ = function initializeMediaPool_() {
    var _this3 = this;

    var storyEl = (0, _log.dev)().assertElement((0, _dom.closestBySelector)(this.element, 'amp-story'), 'amp-story-page must be a descendant of amp-story.');

    storyEl.getImpl().then(function (storyImpl) {
      _this3.mediaPoolResolveFn_(_mediaPool.MediaPool.for(storyImpl));
    }, function (reason) {
      return _this3.mediaPoolRejectFn_(reason);
    });
  };

  /**
   * Marks any AMP elements that represent media elements with preload="auto".
   * @private
   */


  AmpStoryPage.prototype.markMediaElementsWithPreload_ = function markMediaElementsWithPreload_() {
    var mediaSet = this.element.querySelectorAll('amp-audio, amp-video');
    Array.prototype.forEach.call(mediaSet, function (mediaItem) {
      mediaItem.setAttribute('preload', 'auto');
    });
  };

  /** @override */


  AmpStoryPage.prototype.isLayoutSupported = function isLayoutSupported(layout) {
    return layout == _layout.Layout.CONTAINER;
  };

  /** @override */


  AmpStoryPage.prototype.pauseCallback = function pauseCallback() {
    this.advancement_.stop();

    this.stopListeningToVideoEvents_();
    this.pauseAllMedia_(true /* rewindToBeginning */);

    if (this.animationManager_) {
      this.animationManager_.cancelAll();
    }
  };

  /** @override */


  AmpStoryPage.prototype.resumeCallback = function resumeCallback() {
    var _this4 = this;

    this.registerAllMedia_();

    if (this.isActive()) {
      this.advancement_.start();
      this.maybeStartAnimations();
      this.preloadAllMedia_().then(function () {
        return _this4.startListeningToVideoEvents_();
      }).then(function () {
        return _this4.playAllMedia_();
      });
    }

    this.reportDevModeErrors_();
  };

  /** @override */


  AmpStoryPage.prototype.layoutCallback = function layoutCallback() {
    this.muteAllMedia();

    return Promise.all([this.beforeVisible(), this.mediaLayoutPromise_, this.mediaPoolPromise_]);
  };

  /** @return {!Promise} */


  AmpStoryPage.prototype.beforeVisible = function beforeVisible() {
    var _this5 = this;

    return this.scale_().then(function () {
      return _this5.maybeApplyFirstAnimationFrame();
    });
  };

  /**
   * @return {!Promise}
   * @private
   */


  AmpStoryPage.prototype.waitForMediaLayout_ = function waitForMediaLayout_() {
    var mediaSet = (0, _dom.scopedQuerySelectorAll)(this.element, PAGE_MEDIA_SELECTOR);
    var mediaPromises = Array.prototype.map.call(mediaSet, function (mediaEl) {
      return new Promise(function (resolve) {
        switch (mediaEl.tagName.toLowerCase()) {
          case 'amp-img':
          case 'amp-anim':
            mediaEl.addEventListener('load', resolve, true /* useCapture */);
            break;
          case 'amp-audio':
          case 'amp-video':
            if (mediaEl.readyState >= 2) {
              resolve();
              return;
            }

            mediaEl.addEventListener('canplay', resolve, true /* useCapture */);
            break;
          default:
            // Any other tags should not block loading.
            resolve();
        }

        // We suppress errors so that Promise.all will still wait for all
        // promises to complete, even if one has failed.  We do nothing with the
        // error, as the resource itself and/or code that loads it should handle
        // the error.
        mediaEl.addEventListener('error', resolve, true /* useCapture */);
      });
    });

    return Promise.all(mediaPromises);
  };

  /** @return {!Promise} */


  AmpStoryPage.prototype.whenLoaded = function whenLoaded() {
    return this.pageLoadPromise_;
  };

  /** @private */


  AmpStoryPage.prototype.markPageAsLoaded_ = function markPageAsLoaded_() {
    var _this6 = this;

    (0, _events.dispatch)(this.element, _events.EventType.PAGE_LOADED, true);
    this.mutateElement(function () {
      _this6.element.classList.add(PAGE_LOADED_CLASS_NAME);
    });
  };

  /** @override */


  AmpStoryPage.prototype.prerenderAllowed = function prerenderAllowed() {
    return this.prerenderAllowed_;
  };

  /**
   * Gets all media elements on this page.
   * @return {!NodeList<!Element>}
   * @private
   */


  AmpStoryPage.prototype.getAllMedia_ = function getAllMedia_() {
    return this.element.querySelectorAll('audio, video');
  };

  /**
   * Gets all video elements on this page.
   * @return {!NodeList<!Element>}
   * @private
   */


  AmpStoryPage.prototype.getAllVideos_ = function getAllVideos_() {
    return this.element.querySelectorAll('video');
  };

  /**
   * Applies the specified callback to each media element on the page, after the
   * media element is loaded.
   * @param {!function(!./media-pool.MediaPool, !Element)} callbackFn The
   *     callback to be applied to each media element.
   * @return {!Promise} Promise that resolves after the callbacks are called.
   */


  AmpStoryPage.prototype.whenAllMediaElements_ = function whenAllMediaElements_(callbackFn) {
    var mediaSet = this.getAllMedia_();
    return this.mediaPoolPromise_.then(function (mediaPool) {
      var promises = Array.prototype.map.call(mediaSet, function (mediaEl) {
        return callbackFn(mediaPool, mediaEl);
      });

      return Promise.all(promises);
    });
  };

  /**
   * Pauses all media on this page.
   * @param {boolean=} rewindToBeginning Whether to rewind the currentTime
   *     of media items to the beginning.
   * @return {!Promise} Promise that resolves after the callbacks are called.
   * @private
   */


  AmpStoryPage.prototype.pauseAllMedia_ = function pauseAllMedia_() {
    var rewindToBeginning = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return this.whenAllMediaElements_(function (mediaPool, mediaEl) {
      return mediaPool.pause(
      /** @type {!HTMLMediaElement} */mediaEl, rewindToBeginning);
    });
  };

  /**
   * Plays all media on this page.
   * @return {!Promise} Promise that resolves after the callbacks are called.
   * @private
   */


  AmpStoryPage.prototype.playAllMedia_ = function playAllMedia_() {
    return this.whenAllMediaElements_(function (mediaPool, mediaEl) {
      return mediaPool.play( /** @type {!HTMLMediaElement} */mediaEl);
    });
  };

  /**
   * Preloads all media on this page.
   * @return {!Promise} Promise that resolves after the callbacks are called.
   * @private
   */


  AmpStoryPage.prototype.preloadAllMedia_ = function preloadAllMedia_() {
    return this.whenAllMediaElements_(function (mediaPool, mediaEl) {
      return mediaPool.preload( /** @type {!HTMLMediaElement} */mediaEl);
    });
  };

  /**
   * Mutes all media on this page.
   * @return {!Promise} Promise that resolves after the callbacks are called.
   */


  AmpStoryPage.prototype.muteAllMedia = function muteAllMedia() {
    return this.whenAllMediaElements_(function (mediaPool, mediaEl) {
      return mediaPool.mute( /** @type {!HTMLMediaElement} */mediaEl);
    });
  };

  /**
   * Unmutes all media on this page.
   * @return {!Promise} Promise that resolves after the callbacks are called.
   */


  AmpStoryPage.prototype.unmuteAllMedia = function unmuteAllMedia() {
    return this.whenAllMediaElements_(function (mediaPool, mediaEl) {
      return mediaPool.unmute( /** @type {!HTMLMediaElement} */mediaEl);
    });
  };

  /**
   * Registers all media on this page
   * @return {!Promise} Promise that resolves after the callbacks are called.
   * @private
   */


  AmpStoryPage.prototype.registerAllMedia_ = function registerAllMedia_() {
    return this.whenAllMediaElements_(function (mediaPool, mediaEl) {
      return mediaPool.register( /** @type {!HTMLMediaElement} */mediaEl);
    });
  };

  /**
   * Starts playing animations, if the animation manager is available.
   */


  AmpStoryPage.prototype.maybeStartAnimations = function maybeStartAnimations() {
    if (!this.animationManager_) {
      return;
    }
    this.animationManager_.animateIn();
  };

  /**
   * @return {!Promise}
   */


  AmpStoryPage.prototype.maybeApplyFirstAnimationFrame = function maybeApplyFirstAnimationFrame() {
    if (!this.animationManager_) {
      return Promise.resolve();
    }
    return this.animationManager_.applyFirstFrame();
  };

  /**
   * @return {!Promise}
   * @private
   */


  AmpStoryPage.prototype.scale_ = function scale_() {
    var storyEl = (0, _log.dev)().assertElement(this.element.parentNode);
    return _pageScaling.PageScalingService.for(storyEl).scale(this.element);
  };

  /**
   * @param {boolean} isActive
   */


  AmpStoryPage.prototype.setActive = function setActive(isActive) {
    if (isActive) {
      this.element.setAttribute('active', '');
      this.beforeVisible();
      this.resumeCallback();
    } else {
      this.element.removeAttribute('active');
      this.pauseCallback();
    }
  };

  /**
   * @return {number} The distance from the current page to the active page.
   */


  AmpStoryPage.prototype.getDistance = function getDistance() {
    return parseInt(this.element.getAttribute('distance'), 10);
  };

  /**
   * @param {number} distance The distance from the current page to the active
   *     page.
   */


  AmpStoryPage.prototype.setDistance = function setDistance(distance) {
    // TODO(ccordry) refactor this when pages are managed
    if (this.isAd()) {
      distance = Math.min(distance, 1);
    }

    this.element.setAttribute('distance', distance);
    this.registerAllMedia_();
    if (distance > 0 && distance <= 2) {
      this.preloadAllMedia_();
      this.scale_();
    }
  };

  /**
   * @return {boolean} Whether this page is currently active.
   */


  AmpStoryPage.prototype.isActive = function isActive() {
    return this.element.hasAttribute('active');
  };

  /**
   * Emits an event indicating that the progress of the current page has changed
   * to the specified value.
   * @param {number} progress The progress from 0.0 to 1.0.
   */


  AmpStoryPage.prototype.emitProgress_ = function emitProgress_(progress) {
    var payload = {
      pageId: this.element.id,
      progress: progress
    };
    var eventInit = { bubbles: true };
    (0, _events.dispatchCustom)(this.win, this.element, _events.EventType.PAGE_PROGRESS, payload, eventInit);
  };

  /**
   * Returns all of the pages that are one hop from this page.
   * @return {!Array<string>}
   */


  AmpStoryPage.prototype.getAdjacentPageIds = function getAdjacentPageIds() {
    var adjacentPageIds = [];

    var autoAdvanceNext = this.getNextPageId(true /* opt_isAutomaticAdvance */);
    var manualAdvanceNext = this.getNextPageId(false /* opt_isAutomaticAdvance */);
    var previous = this.getPreviousPageId_();

    if (autoAdvanceNext) {
      adjacentPageIds.push(autoAdvanceNext);
    }

    if (manualAdvanceNext && manualAdvanceNext != autoAdvanceNext) {
      adjacentPageIds.push(manualAdvanceNext);
    }

    if (previous) {
      adjacentPageIds.push(previous);
    }

    return adjacentPageIds;
  };

  /**
   * Gets the ID of the previous page in the story (before the current page).
   * @return {?string} Returns the ID of the next page in the story, or null if
   *     there isn't one.
   * @private
   */


  AmpStoryPage.prototype.getPreviousPageId_ = function getPreviousPageId_() {
    if (this.element.hasAttribute('i-amphtml-return-to')) {
      return this.element.getAttribute('i-amphtml-return-to');
    }

    var previousElement = this.element.previousElementSibling;
    if (previousElement && previousElement.tagName.toLowerCase() === TAG) {
      return previousElement.id;
    }

    return null;
  };

  /**
   * Gets the ID of the next page in the story (after the current page).
   * @param {boolean=} opt_isAutomaticAdvance Whether this navigation was caused
   *     by an automatic advancement after a timeout.
   * @return {?string} Returns the ID of the next page in the story, or null if
   *     there isn't one.
   */


  AmpStoryPage.prototype.getNextPageId = function getNextPageId(opt_isAutomaticAdvance) {
    if (opt_isAutomaticAdvance && this.element.hasAttribute('auto-advance-to')) {
      return this.element.getAttribute('auto-advance-to');
    }

    if (this.element.hasAttribute('i-amphtml-advance-to')) {
      return this.element.getAttribute('i-amphtml-advance-to');
    }

    var nextElement = this.element.nextElementSibling;
    if (nextElement && nextElement.tagName.toLowerCase() === TAG) {
      return nextElement.id;
    }

    return null;
  };

  /**
   * Navigates to the previous page in the story.
   */


  AmpStoryPage.prototype.previous = function previous() {
    var targetPageId = this.getPreviousPageId_();

    if (targetPageId === null) {
      (0, _events.dispatch)(this.element, _events.EventType.SHOW_NO_PREVIOUS_PAGE_HELP, true);
      return;
    }

    this.switchTo_(targetPageId);
  };

  /**
   * Navigates to the next page in the story.
   * @param {boolean=} opt_isAutomaticAdvance Whether this navigation was caused
   *     by an automatic advancement after a timeout.
   */


  AmpStoryPage.prototype.next = function next(opt_isAutomaticAdvance) {
    var pageId = this.getNextPageId(opt_isAutomaticAdvance);

    if (pageId === null) {
      (0, _events.dispatch)(this.element, _events.EventType.SHOW_BOOKEND, /* opt_bubbles */true);
      return;
    }

    this.switchTo_(pageId);
  };

  /**
   * Delegated the navigation decision to AMP-STORY via event.
   * @param {number} direction The direction in which navigation needs to takes place.
   */


  AmpStoryPage.prototype.navigateOnTap = function navigateOnTap(direction) {
    var payload = { direction: direction };
    var eventInit = { bubbles: true };
    (0, _events.dispatchCustom)(this.win, this.element, _events.EventType.TAP_NAVIGATION, payload, eventInit);
  };

  /**
   * @param {string} targetPageId
   * @private
   */


  AmpStoryPage.prototype.switchTo_ = function switchTo_(targetPageId) {
    var payload = { targetPageId: targetPageId };
    var eventInit = { bubbles: true };
    (0, _events.dispatchCustom)(this.win, this.element, _events.EventType.SWITCH_PAGE, payload, eventInit);
  };

  /**
   * @private
   */


  AmpStoryPage.prototype.reportDevModeErrors_ = function reportDevModeErrors_() {
    var _this7 = this;

    if (!(0, _mode.getMode)().development) {
      return;
    }

    (0, _logging.getLogEntries)(this.element).then(function (logEntries) {
      (0, _events.dispatchCustom)(_this7.win, _this7.element, _events.EventType.DEV_LOG_ENTRIES_AVAILABLE, logEntries, { bubbles: true });
    });
  };

  /**
   * Displays a loading spinner whenever the video is buffering.
   * Has to be called after the mediaPool preload method, that swaps the video
   * elements with new amp elements.
   * @private
   */


  AmpStoryPage.prototype.startListeningToVideoEvents_ = function startListeningToVideoEvents_() {
    var _this8 = this;

    var videos = this.getAllVideos_();

    if (videos.length === 0) {
      return;
    }

    this.debounceToggleLoadingSpinner_(true);
    Array.prototype.forEach.call(videos, function (videoEl) {
      _this8.unlisteners_.push((0, _eventHelper.listen)(videoEl, 'playing', function () {
        return _this8.debounceToggleLoadingSpinner_(false);
      }));
      _this8.unlisteners_.push((0, _eventHelper.listen)(videoEl, 'waiting', function () {
        return _this8.debounceToggleLoadingSpinner_(true);
      }));
    });
  };

  /**
   * @private
   */


  AmpStoryPage.prototype.stopListeningToVideoEvents_ = function stopListeningToVideoEvents_() {
    this.debounceToggleLoadingSpinner_(false);
    this.unlisteners_.forEach(function (unlisten) {
      return unlisten();
    });
    this.unlisteners_ = [];
  };

  /**
   * @private
   */


  AmpStoryPage.prototype.buildAndAppendLoadingSpinner_ = function buildAndAppendLoadingSpinner_() {
    this.loadingSpinner_ = new _loadingSpinner.LoadingSpinner(this.win.document);
    this.element.appendChild(this.loadingSpinner_.build());
  };

  /**
   * Has to be called through the `debounceToggleLoadingSpinner_` method, to
   * avoid the spinner flashing on the screen when the video loops, or during
   * navigation transitions.
   * Builds the loading spinner and attaches it to the DOM on first call.
   * @param {boolean} isActive
   * @private
   */


  AmpStoryPage.prototype.toggleLoadingSpinner_ = function toggleLoadingSpinner_(isActive) {
    var _this9 = this;

    this.getVsync().mutate(function () {
      if (!_this9.loadingSpinner_) {
        _this9.buildAndAppendLoadingSpinner_();
      }

      _this9.loadingSpinner_.toggle(isActive);
    });
  };

  /**
   * check to see if this page is a wrapper for an ad
   * @return {boolean}
   */


  AmpStoryPage.prototype.isAd = function isAd() {
    return this.element.hasAttribute(ADVERTISEMENT_ATTR_NAME);
  };

  return AmpStoryPage;
}(AMP.BaseElement);

AMP.registerElement('amp-story-page', AmpStoryPage);

},{"../../../src/dom":48,"../../../src/event-helper":51,"../../../src/layout":56,"../../../src/log":57,"../../../src/mode":59,"../../../src/utils/rate-limit":84,"./animation":13,"./audio":14,"./events":20,"./loading-spinner":22,"./logging":23,"./media-pool":24,"./page-advancement":28,"./page-scaling":29}],8:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AmpStoryStateService = exports.StateType = exports.StatesMap = exports.StateChangeEventDef = undefined;

var _embedMode = require('./embed-mode');

var _observable = require('../../../src/observable');

var _log = require('../../../src/log');

var _types = require('../../../src/types');

var _object = require('../../../src/utils/object');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */


/** @typedef {{type: !StateType, value: *}} */
var StateChangeEventDef = exports.StateChangeEventDef = void 0;

/** @typedef {!Object<!StateType, !State>} */
var StatesMap = exports.StatesMap = void 0;

/** @private @const @enum {string} */
var StateType = exports.StateType = {
  BOOKEND_ACTIVE: 'bookendactive',
  NAVIGATION_OVERLAY_HINT_SHOWN: 'navigationoverlayhintshown',
  NO_PREVIOUS_PAGE_HELP_SHOWN: 'nopreviouspagehelpshown',
  ALLOW_AUTOMATIC_AD_INSERTION: 'allowautomaticadinsertion',
  SYSTEM_LAYER_BUTTONS_SHOWN: 'systemlayerbuttonsshown',
  MUTE_AUDIO_BY_DEFAULT: 'muteaudiobydefault'
};

/**
 *
 */

var AmpStoryStateService = exports.AmpStoryStateService = function () {
  // TODO(newmuis): Scope this to story using a static for(...) function so that
  // it can be retrieved from other classes (e.g. AmpStoryPage) without directly
  // passing it.
  function AmpStoryStateService() {
    _classCallCheck(this, AmpStoryStateService);

    /** @private {!StatesMap} */
    this.states_ = (0, _object.map)({});

    /** @private {!StatesMap} */
    this.defaultStates_ = (0, _object.map)({});

    // Initialize default states.
    this.initializeState(this.defaultStates_, [new State(StateType.BOOKEND_ACTIVE, false /* defaultValue */, true /* isModifiable */), new State(StateType.NAVIGATION_OVERLAY_HINT_SHOWN, false /* defaultValue */, true /* isModifiable */), new State(StateType.NO_PREVIOUS_PAGE_HELP_SHOWN, false /* defaultValue */, true /* isModifiable */), new State(StateType.ALLOW_AUTOMATIC_AD_INSERTION, true /* defaultValue */, true /* isModifiable */), new State(StateType.SYSTEM_LAYER_BUTTONS_SHOWN, true /* defaultValue */, true /* isModifiable */), new State(StateType.MUTE_AUDIO_BY_DEFAULT, true /* defaultValue */, true /* isModifiable */)]);
  }

  /**
   * @param {!StateType} stateType
   * @return {!State}
   */


  AmpStoryStateService.prototype.getState = function getState(stateType) {
    return (0, _log.dev)().assert(this.states_[stateType] || this.defaultStates_[stateType], 'Unknown state ' + stateType + '.');
  };

  /**
   * @param {!StatesMap} statesMap The map to be populated with states.
   * @param {!State|!Array<!State>} stateOrArr The state or list of states to
   *     populate.
   */


  AmpStoryStateService.prototype.initializeState = function initializeState(statesMap, stateOrArr) {
    var _this = this;

    if ((0, _types.isArray)(stateOrArr)) {
      stateOrArr.forEach(function (state) {
        _this.initializeSingleValue_(statesMap, state);
      });
    } else {
      this.initializeSingleValue_(statesMap,
      /** @type {!State} */stateOrArr);
    }
  };

  /**
   * @param {!StatesMap} statesMap The map to be populated with states.
   * @param {!State} state The state to populate.
   * @private
   */


  AmpStoryStateService.prototype.initializeSingleValue_ = function initializeSingleValue_(statesMap, state) {
    (0, _log.dev)().assert(!statesMap[state.type], 'Duplicate entries for state ' + state.type + '.');
    statesMap[state.type] = state;
  };

  /**
   * @param {!EmbedMode} embedMode
   */


  AmpStoryStateService.prototype.initializeEmbedMode = function initializeEmbedMode(embedMode) {
    switch (embedMode) {
      case _embedMode.EmbedMode.NAME_TBD:
        this.initializeState(this.states_, [new State(StateType.BOOKEND_ACTIVE, false /* defaultValue */, false /* isModifiable */), new State(StateType.NAVIGATION_OVERLAY_HINT_SHOWN, false /* defaultValue */, false /* isModifiable */), new State(StateType.NO_PREVIOUS_PAGE_HELP_SHOWN, false /* defaultValue */, true /* isModifiable */), new State(StateType.ALLOW_AUTOMATIC_AD_INSERTION, false /* defaultValue */, false /* isModifiable */), new State(StateType.SYSTEM_LAYER_BUTTONS_SHOWN, false /* defaultValue */, false /* isModifiable */), new State(StateType.MUTE_AUDIO_BY_DEFAULT, false /* defaultValue */, false /* isModifiable */)]);
        break;
    }
  };

  return AmpStoryStateService;
}();

/**
 * TODO(newmuis): Perhaps some of this can be merged with
 * ../../../src/finite-state-machine.js
 * @template T
 */


var State = function () {
  /**
   * @param {!StateType} type
   * @param {T} defaultValue
   * @param {boolean} isModifiable
   */
  function State(type, defaultValue, isModifiable) {
    _classCallCheck(this, State);

    /** @const {!StateType} */
    this.type = type;

    /** @private {T} */
    this.value_ = defaultValue;

    /** @private @const {!Observable<StateChangeEventDef>} */
    this.observable_ = new _observable.Observable();

    /** @private @const {boolean} */
    this.isModifiable_ = isModifiable;
  }

  /**
   * @return {boolean}
   */


  State.prototype.isModifiable = function isModifiable() {
    return this.isModifiable_;
  };

  /**
   * @return {T}
   */


  State.prototype.getValue = function getValue() {
    return this.value_;
  };

  /**
   * @param {function(!StateChangeEventDef):void} stateChangeFn
   */


  State.prototype.observe = function observe(stateChangeFn) {
    this.observable_.add(stateChangeFn);
  };

  /**
   * @param {T} value The new state
   */


  State.prototype.setValue = function setValue(value) {
    if (this.isModifiable) {
      (0, _log.dev)().error('AMP-STORY', 'Cannot change readonly state ' + this.isModifiable + '.');
      return;
    }

    if (value === this.getValue()) {
      return;
    }

    this.value_ = value;
    this.onStateUpdated_();
  };

  /** @private */


  State.prototype.onStateUpdated_ = function onStateUpdated_() {
    this.observable_.fire({ type: this.type, value: this.value_ });
  };

  return State;
}();

},{"../../../src/log":57,"../../../src/observable":61,"../../../src/types":75,"../../../src/utils/object":83,"./embed-mode":19}],9:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AmpStory = undefined;

var _MAX_MEDIA_ELEMENT_CO; /**
                            * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                            *
                            * Licensed under the Apache License, Version 2.0 (the "License");
                            * you may not use this file except in compliance with the License.
                            * You may obtain a copy of the License at
                            *
                            *      http://www.apache.org/licenses/LICENSE-2.0
                            *
                            * Unless required by applicable law or agreed to in writing, software
                            * distributed under the License is distributed on an "AS-IS" BASIS,
                            * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                            * See the License for the specific language governing permissions and
                            * limitations under the License.
                            */

/**
 * @fileoverview Embeds a story
 *
 * Example:
 * <code>
 * <amp-story standalone bookend-config-src="bookend.json">
 *   [...]
 * </amp-story>
 * </code>
 */


require('./amp-story-auto-ads');

require('./amp-story-grid-layer');

require('./amp-story-page');

var _actionTrust = require('../../../src/action-trust');

var _analytics = require('./analytics');

var _background = require('./background');

var _ampStoryHint = require('./amp-story-hint');

var _ampStoryStateService = require('./amp-story-state-service');

var _variableService = require('./variable-service');

var _bookend = require('./bookend');

var _ampStory = require('../../../build/amp-story-0.1.css');

var _commonSignals = require('../../../src/common-signals');

var _gestureRecognizers = require('../../../src/gesture-recognizers');

var _events = require('./events');

var _gesture = require('../../../src/gesture');

var _keyCodes = require('../../../src/utils/key-codes');

var _layout = require('../../../src/layout');

var _mediaPool = require('./media-pool');

var _navigationState = require('./navigation-state');

var _originWhitelist = require('./origin-whitelist');

var _paginationButtons = require('./pagination-buttons');

var _services = require('../../../src/services');

var _share = require('./share');

var _systemLayer = require('./system-layer');

var _pageAdvancement = require('./page-advancement');

var _dom = require('../../../src/dom');

var _style = require('../../../src/style');

var _rateLimit = require('../../../src/utils/rate-limit');

var _log = require('../../../src/log');

var _object = require('../../../src/utils/object');

var _array = require('../../../src/utils/array');

var _mode = require('../../../src/mode');

var _url = require('../../../src/url');

var _experiments = require('../../../src/experiments');

var _function = require('../../../src/utils/function');

var _embedMode = require('./embed-mode');

var _service = require('../../../src/service');

var _relatedArticles = require('./related-articles');

var _simpleTemplate = require('./simple-template');

var _string = require('../../../src/string');

var _audio = require('./audio');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @private @const {string} */
var PRE_ACTIVE_PAGE_ATTRIBUTE_NAME = 'pre-active';

/** @private @const {string} */
var BOOKEND_CONFIG_ATTRIBUTE_NAME = 'bookend-config-src';

/** @private @const {string} */
var AMP_STORY_STANDALONE_ATTRIBUTE = 'standalone';

/** @private @const {number} */
var DESKTOP_WIDTH_THRESHOLD = 1024;

/** @private @const {number} */
var DESKTOP_HEIGHT_THRESHOLD = 550;

/** @private @const {number} */
var MIN_SWIPE_FOR_HINT_OVERLAY_PX = 50;

/** @private @const {string} */
var ADVANCE_TO_ATTR = 'i-amphtml-advance-to';

/** @private @const {string} */
var RETURN_TO_ATTR = 'i-amphtml-return-to';

/** @private @const {string} */
var AUTO_ADVANCE_TO_ATTR = 'auto-advance-to';

/** @private @const {string} */
var AD_SHOWING_ATTR = 'ad-showing';

/**
 * The duration of time (in milliseconds) to wait for a page to be loaded,
 * before the story becomes visible.
 * @const {number}
 */
var PAGE_LOAD_TIMEOUT_MS = 5000;

/**
 * CSS class for an amp-story that indicates the initial load for the story has
 * completed.
 * @const {string}
 */
var STORY_LOADED_CLASS_NAME = 'i-amphtml-story-loaded';

/** @const {!Object<string, number>} */
var MAX_MEDIA_ELEMENT_COUNTS = (_MAX_MEDIA_ELEMENT_CO = {}, _MAX_MEDIA_ELEMENT_CO[_mediaPool.MediaType.AUDIO] = 4, _MAX_MEDIA_ELEMENT_CO[_mediaPool.MediaType.VIDEO] = 8, _MAX_MEDIA_ELEMENT_CO);

/**
 * @private @const {string}
 */
var AUDIO_MUTED_ATTRIBUTE = 'muted';

/** @type {string} */
var TAG = 'amp-story';

var LANDSCAPE_OVERLAY_CLASS = 'i-amphtml-story-landscape';

var LANDSCAPE_ORIENTATION_WARNING = [{
  tag: 'div',
  attrs: (0, _object.dict)({
    'class': 'i-amphtml-story-no-rotation-overlay ' + 'i-amphtml-story-system-reset' }),
  children: [{
    tag: 'div',
    attrs: (0, _object.dict)({ 'class': 'i-amphtml-overlay-container' }),
    children: [{
      tag: 'div',
      attrs: (0, _object.dict)({ 'class': 'i-amphtml-rotate-icon' })
    }, {
      tag: 'div',
      attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-overlay-text' }),
      text: 'The page is best viewed in portrait mode'
    }]
  }]
}];

var DESKTOP_SIZE_WARNING = [{
  tag: 'div',
  attrs: (0, _object.dict)({
    'class': 'i-amphtml-story-no-rotation-overlay ' + 'i-amphtml-story-system-reset' }),
  children: [{
    tag: 'div',
    attrs: (0, _object.dict)({ 'class': 'i-amphtml-overlay-container' }),
    children: [{
      tag: 'div',
      attrs: (0, _object.dict)({ 'class': 'i-amphtml-desktop-size-icon' })
    }, {
      tag: 'div',
      attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-overlay-text' }),
      text: 'Expand your window to view this experience'
    }]
  }]
}];

var UNSUPPORTED_BROWSER_WARNING = [{
  tag: 'div',
  attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-unsupported-browser-overlay' }),
  children: [{
    tag: 'div',
    attrs: (0, _object.dict)({ 'class': 'i-amphtml-overlay-container' }),
    children: [{
      tag: 'div',
      attrs: (0, _object.dict)({ 'class': 'i-amphtml-gear-icon' })
    }, {
      tag: 'div',
      attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-overlay-text' }),
      text: 'We\'re sorry, it looks like your browser doesn\'t support ' + 'this experience'
    }]
  }]
}];

/**
 * Container for "pill-style" share widget, rendered on desktop.
 * @private @const {!./simple-template.ElementDef}
 */
var SHARE_WIDGET_PILL_CONTAINER = {
  tag: 'div',
  attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-share-pill' })
};

/**
 * Selector for elements that should be hidden when the bookend is open on
 * desktop view.
 * @private @const {string}
 */
var HIDE_ON_BOOKEND_SELECTOR = 'amp-story-page, .i-amphtml-story-system-layer';

/**
 * @implements {./media-pool.MediaPoolRoot}
 */

var AmpStory = exports.AmpStory = function (_AMP$BaseElement) {
  _inherits(AmpStory, _AMP$BaseElement);

  /** @param {!AmpElement} element */
  function AmpStory(element) {
    _classCallCheck(this, AmpStory);

    /** @private {!NavigationState} */
    var _this = _possibleConstructorReturn(this, _AMP$BaseElement.call(this, element));

    _this.navigationState_ = new _navigationState.NavigationState(element, function () {
      return _this.hasBookend_();
    });

    /** @private @const {!AmpStoryStateService} */
    _this.stateService_ = new _ampStoryStateService.AmpStoryStateService();

    /** @const @private {!../../../src/service/vsync-impl.Vsync} */
    _this.vsync_ = _this.getVsync();

    /** @private @const {!Bookend} */
    _this.bookend_ = new _bookend.Bookend(_this.win);

    /** @private @const {!SystemLayer} */
    _this.systemLayer_ = new _systemLayer.SystemLayer(_this.win, _this.stateService_);

    /** @private @const {!Array<string>} */
    _this.pageHistoryStack_ = [];

    /** @private @const {!Array<!./amp-story-page.AmpStoryPage>} */
    _this.pages_ = [];

    /** @private @const {!Array<!./amp-story-page.AmpStoryPage>} */
    _this.adPages_ = [];

    /** @const @private {!AmpStoryVariableService} */
    _this.variableService_ = new _variableService.AmpStoryVariableService();

    /** @private @const {!function():!Promise<?./bookend.BookendConfigDef>} */
    _this.loadBookendConfig_ = (0, _function.once)(function () {
      return _this.loadBookendConfigImpl_();
    });

    /** @private {?./amp-story-page.AmpStoryPage} */
    _this.activePage_ = null;

    /** @private @const */
    _this.desktopMedia_ = _this.win.matchMedia('(min-width: ' + DESKTOP_WIDTH_THRESHOLD + 'px) and ' + ('(min-height: ' + DESKTOP_HEIGHT_THRESHOLD + 'px)'));

    /** @private @const */
    _this.canRotateToDesktopMedia_ = _this.win.matchMedia('(min-width: ' + DESKTOP_HEIGHT_THRESHOLD + 'px) and ' + ('(min-height: ' + DESKTOP_WIDTH_THRESHOLD + 'px)'));

    /** @private {?AmpStoryBackground} */
    _this.background_ = null;

    /** @private {?./pagination-buttons.PaginationButtons} */
    _this.paginationButtons_ = null;

    /** @private {?Element} */
    _this.topBar_ = null;

    /** @private {?ShareWidget} */
    _this.shareWidget_ = null;

    /** @private @const {!Array<string>} */
    _this.originWhitelist_ = _originWhitelist.ORIGIN_WHITELIST;

    /** @private {!AmpStoryHint} */
    _this.ampStoryHint_ = new _ampStoryHint.AmpStoryHint(_this.win);

    /** @private {!MediaPool} */
    _this.mediaPool_ = _mediaPool.MediaPool.for(_this);

    /** @private @const {!../../../src/service/timer-impl.Timer} */
    _this.timer_ = _services.Services.timerFor(_this.win);
    return _this;
  }

  /** @override */


  AmpStory.prototype.buildCallback = function buildCallback() {
    var _this2 = this;

    this.assertAmpStoryExperiment_();

    if (this.element.hasAttribute(AMP_STORY_STANDALONE_ATTRIBUTE)) {
      this.initializeStandaloneStory_();
    }

    if (this.isDesktop_()) {
      this.element.setAttribute('desktop', '');
    }
    this.element.querySelector('amp-story-page').setAttribute('active', '');

    this.initializeListeners_();
    this.initializeListenersForDev_();

    this.navigationState_.observe(function (stateChangeEvent) {
      return new _analytics.AmpStoryAnalytics(_this2.element).onStateChange(stateChangeEvent);
    });

    this.navigationState_.observe(function (stateChangeEvent) {
      return _this2.variableService_.onStateChange(stateChangeEvent);
    });

    // Mute `amp-story` in beginning.
    this.mute_();

    (0, _audio.upgradeBackgroundAudio)(this.element);

    (0, _service.registerServiceBuilder)(this.win, 'story-variable', function () {
      return _this2.variableService_;
    });
  };

  /** @private */


  AmpStory.prototype.initializeStandaloneStory_ = function initializeStandaloneStory_() {
    var _this3 = this;

    var html = this.win.document.documentElement;
    this.mutateElement(function () {
      html.classList.add('i-amphtml-story-standalone');
      // Lock body to prevent overflow.
      _this3.lockBody_();
      // Standalone CSS affects sizing of the entire page.
      _this3.onResize();
    }, html);

    var embedMode = (0, _embedMode.parseEmbedMode)(this.win.location.hash);
    this.stateService_.initializeEmbedMode(embedMode);
  };

  /**
   * Builds the system layer DOM.  This is dependent on the pages_ array having
   * been initialized, so it cannot happen at build time.
   * @private
   */


  AmpStory.prototype.buildSystemLayer_ = function buildSystemLayer_() {
    var pageIds = this.pages_.map(function (page) {
      return page.element.id;
    });
    this.element.appendChild(this.systemLayer_.build(pageIds));
    this.updateAudioIcon_();
  };

  /**
   * Builds the hint layer DOM.
   * @private
   */


  AmpStory.prototype.buildHintLayer_ = function buildHintLayer_() {
    this.element.appendChild(this.ampStoryHint_.buildHintContainer());
  };

  /** @private */


  AmpStory.prototype.initializeListeners_ = function initializeListeners_() {
    var _this4 = this;

    this.element.addEventListener(_events.EventType.NEXT_PAGE, function () {
      _this4.next_();
    });

    this.element.addEventListener(_events.EventType.PREVIOUS_PAGE, function () {
      _this4.previous_();
    });

    this.element.addEventListener(_events.EventType.SHOW_BOOKEND, function () {
      _this4.hasBookend_().then(function (hasBookend) {
        if (hasBookend) {
          _this4.showBookend_();
        }
      });
    });

    this.element.addEventListener(_events.EventType.CLOSE_BOOKEND, function () {
      _this4.hideBookend_();
    });

    this.element.addEventListener(_events.EventType.MUTE, function () {
      _this4.mute_();
    });

    this.element.addEventListener(_events.EventType.UNMUTE, function () {
      _this4.unmute_();
    });

    this.element.addEventListener(_events.EventType.AUDIO_PLAYING, function () {
      _this4.audioPlaying_();
    });

    this.element.addEventListener(_events.EventType.AUDIO_STOPPED, function () {
      _this4.audioStopped_();
    });

    this.element.addEventListener(_events.EventType.SWITCH_PAGE, function (e) {
      if (_this4.bookend_.isActive()) {
        // Disallow switching pages while the bookend is active.
        return;
      }

      _this4.switchTo_(e.detail.targetPageId);
      _this4.ampStoryHint_.hideAllNavigationHint();
    });

    this.element.addEventListener(_events.EventType.PAGE_PROGRESS, function (e) {
      var pageId = e.detail.pageId;
      var progress = e.detail.progress;

      if (pageId !== _this4.activePage_.element.id) {
        // Ignore progress update events from inactive pages.
        return;
      }

      if (!_this4.activePage_.isAd()) {
        _this4.systemLayer_.updateProgress(pageId, progress);
      }
    });

    this.element.addEventListener(_events.EventType.REPLAY, function () {
      _this4.replay_();
    });

    var noPreviousPageHelpShown = this.stateService_.getState(_ampStoryStateService.StateType.NO_PREVIOUS_PAGE_HELP_SHOWN);

    this.element.addEventListener(_events.EventType.SHOW_NO_PREVIOUS_PAGE_HELP, function () {
      if (noPreviousPageHelpShown.isModifiable()) {
        _this4.ampStoryHint_.showFirstPageHintOverlay();
      }
    });

    this.element.addEventListener(_events.EventType.TAP_NAVIGATION, function (e) {
      var direction = e.detail.direction;

      _this4.performTapNavigation_(direction);
    });

    this.win.document.addEventListener('keydown', function (e) {
      _this4.onKeyDown_(e);
    }, true);

    this.getViewport().onResize((0, _rateLimit.debounce)(this.win, function () {
      return _this4.onResize();
    }, 300));
    this.installGestureRecognizers_();
  };

  /** @private */


  AmpStory.prototype.installGestureRecognizers_ = function installGestureRecognizers_() {
    var _this5 = this;

    var element = this.element;

    var gestures = _gesture.Gestures.get(element, /* shouldNotPreventDefault */true);

    // Disables zoom on double-tap.
    gestures.onGesture(_gestureRecognizers.DoubletapRecognizer, function (gesture) {
      var event = gesture.event;

      event.preventDefault();
    });

    // Shows "tap to navigate" hint when swiping.
    gestures.onGesture(_gestureRecognizers.SwipeXYRecognizer, function (gesture) {
      var deltaX = gesture.data.deltaX;

      if (_this5.bookend_.isActive()) {
        return;
      }
      if (!_this5.isSwipeLargeEnoughForHint_(deltaX)) {
        return;
      }
      var navigationOverlayHintShown = _this5.stateService_.getState(_ampStoryStateService.StateType.NAVIGATION_OVERLAY_HINT_SHOWN);
      if (!navigationOverlayHintShown.isModifiable()) {
        return;
      }

      _this5.ampStoryHint_.showNavigationOverlay();
    });
  };

  /** @private */


  AmpStory.prototype.isSwipeLargeEnoughForHint_ = function isSwipeLargeEnoughForHint_(deltaX) {
    return Math.abs(deltaX) >= MIN_SWIPE_FOR_HINT_OVERLAY_PX;
  };

  /** @private */


  AmpStory.prototype.initializeListenersForDev_ = function initializeListenersForDev_() {
    var _this6 = this;

    if (!(0, _mode.getMode)().development) {
      return;
    }

    this.element.addEventListener(_events.EventType.DEV_LOG_ENTRIES_AVAILABLE, function (e) {
      _this6.systemLayer_.logAll(e.detail);
    });
  };

  /** @private */


  AmpStory.prototype.lockBody_ = function lockBody_() {
    var document = this.win.document;
    (0, _style.setImportantStyles)(document.documentElement, {
      'overflow': 'hidden'
    });
    (0, _style.setImportantStyles)(document.body, {
      'overflow': 'hidden'
    });

    this.getViewport().resetTouchZoom();
    this.getViewport().disableTouchZoom();
    this.maybeLockScreenOrientation_();
  };

  /** @private */


  AmpStory.prototype.maybeLockScreenOrientation_ = function maybeLockScreenOrientation_() {
    var screen = this.win.screen;
    if (!screen || !this.canRotateToDesktopMedia_.matches) {
      return;
    }

    var lockOrientation = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation || function (unusedOrientation) {};

    try {
      lockOrientation('portrait');
    } catch (e) {
      (0, _log.dev)().warn(TAG, 'Failed to lock screen orientation:', e.message);
    }
  };

  /** @private */


  AmpStory.prototype.buildPaginationButtons_ = function buildPaginationButtons_() {
    var _this7 = this;

    this.paginationButtons_ = _paginationButtons.PaginationButtons.create(this.win.document);

    this.paginationButtons_.attach(this.element);

    this.navigationState_.observe(function (e) {
      return _this7.paginationButtons_.onNavigationStateChange(e);
    });
  };

  /** @visibleForTesting */


  AmpStory.prototype.buildPaginationButtonsForTesting = function buildPaginationButtonsForTesting() {
    this.buildPaginationButtons_();
  };

  /** @private */


  AmpStory.prototype.buildTopBar_ = function buildTopBar_() {
    var doc = this.element.ownerDocument;

    this.topBar_ = doc.createElement('div');
    this.topBar_.classList.add('i-amphtml-story-top');
    this.topBar_.appendChild(this.buildTopBarShare_());

    this.element.insertBefore(this.topBar_, this.element.firstChild);
  };

  /**
   * @return {!Node}
   * @private
   */


  AmpStory.prototype.buildTopBarShare_ = function buildTopBarShare_() {
    var _this8 = this;

    var container = (0, _simpleTemplate.renderSimpleTemplate)(this.win.document, SHARE_WIDGET_PILL_CONTAINER);

    this.shareWidget_ = new _share.ShareWidget(this.win);

    container.appendChild(this.shareWidget_.build(this.getAmpDoc()));

    this.loadBookendConfig_().then(function (bookendConfig) {
      if (bookendConfig !== null) {
        _this8.shareWidget_.setProviders(bookendConfig.shareProviders);
      }
    });

    return container;
  };

  /** @override */


  AmpStory.prototype.layoutCallback = function layoutCallback() {
    var _this9 = this;

    if (!AmpStory.isBrowserSupported(this.win)) {
      this.buildUnsupportedBrowserOverlay_();
      (0, _log.dev)().expectedError(TAG, 'Unsupported browser');
      return Promise.resolve();
    }

    var firstPageEl = (0, _log.user)().assertElement(this.element.querySelector('amp-story-page'), 'Story must have at least one page.');

    if (!this.paginationButtons_) {
      this.buildPaginationButtons_();
    }

    var storyLayoutPromise = this.initializePages_().then(function () {
      return _this9.buildSystemLayer_();
    }).then(function () {
      return _this9.buildHintLayer_();
    }).then(function () {
      return _this9.buildLandscapeOrientationOverlay_();
    }).then(function () {
      _this9.pages_.forEach(function (page) {
        page.setActive(false);
      });
    }).then(function () {
      return _this9.switchTo_(firstPageEl.id);
    }).then(function () {
      return _this9.preloadPagesByDistance_();
    });

    // Do not block the layout callback on the completion of these promises, as
    // that prevents descendents from being laid out (and therefore loaded).
    storyLayoutPromise.then(function () {
      return _this9.whenPagesLoaded_(PAGE_LOAD_TIMEOUT_MS);
    }).then(function () {
      return _this9.markStoryAsLoaded_();
    });

    return storyLayoutPromise;
  };

  /**
   * @param {number} timeoutMs The maximum amount of time to wait, in
   *     milliseconds.
   * @return {!Promise} A promise that is resolved when the page is loaded or
   *     the timeout has been exceeded, whichever happens first.
   * @private
   */


  AmpStory.prototype.whenPagesLoaded_ = function whenPagesLoaded_() {
    var timeoutMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    var pagesToWaitFor = this.isDesktop_() ? [this.pages_[0], this.pages_[1]] : [this.pages_[0]];

    var storyLoadPromise = Promise.all(pagesToWaitFor.map(function (page) {
      return page.whenLoaded();
    }));

    return this.timer_.timeoutPromise(timeoutMs, storyLoadPromise).catch(function () {});
  };

  /** @private */


  AmpStory.prototype.markStoryAsLoaded_ = function markStoryAsLoaded_() {
    var _this10 = this;

    (0, _events.dispatch)(this.element, _events.EventType.STORY_LOADED, true);
    this.signals().signal(_commonSignals.CommonSignals.INI_LOAD);
    this.mutateElement(function () {
      _this10.element.classList.add(STORY_LOADED_CLASS_NAME);
    });
  };

  /** @override */


  AmpStory.prototype.isLayoutSupported = function isLayoutSupported(layout) {
    return layout == _layout.Layout.CONTAINER;
  };

  /** @override */


  AmpStory.prototype.prerenderAllowed = function prerenderAllowed() {
    return true;
  };

  /** @private */


  AmpStory.prototype.isAmpStoryEnabled_ = function isAmpStoryEnabled_() {
    if ((0, _experiments.isExperimentOn)(this.win, TAG) || (0, _mode.getMode)().test) {
      return true;
    }

    var origin = (0, _url.getSourceOrigin)(this.win.location);
    return this.isOriginWhitelisted_(origin);
  };

  /**
   * @param {string} domain The domain part of the origin, to be hashed.
   * @return {string} The hashed origin.
   * @private
   */


  AmpStory.prototype.hashOrigin_ = function hashOrigin_(domain) {
    return (0, _string.stringHash32)(domain.toLowerCase());
  };

  /**
   * @param {string} origin The origin to check.
   * @return {boolean} Whether the specified origin is whitelisted to use the
   *     amp-story extension.
   * @private
   */


  AmpStory.prototype.isOriginWhitelisted_ = function isOriginWhitelisted_(origin) {
    var _this11 = this;

    var hostName = (0, _url.parseUrl)(origin).hostname;
    var domains = hostName.split('.');

    // Check all permutations of the domain to see if any level of the domain is
    // whitelisted.  Taking the example of the whitelisted domain
    // example.co.uk, if the page is served from www.example.co.uk/page.html:
    //
    //   www.example.co.uk => false
    //   example.co.uk => true
    //   co.uk => false
    //   uk => false
    //
    // This is necessary, since we don't have any guarantees of which level of
    // the domain is whitelisted.  For many domains (e.g. .com), the second
    // level of the domain is likely to be whitelisted, whereas for others
    // (e.g. .co.uk) the third level may be whitelisted.  Additionally, this
    // allows subdomains to be whitelisted individually.
    return domains.some(function (unusedDomain, index) {
      var domain = domains.slice(index, domains.length).join('.');
      var domainHash = _this11.hashOrigin_(domain);
      return _this11.originWhitelist_.includes(domainHash);
    });
  };

  /** @private */


  AmpStory.prototype.assertAmpStoryExperiment_ = function assertAmpStoryExperiment_() {
    var _this12 = this;

    if (this.isAmpStoryEnabled_()) {
      return;
    }

    var errorIconEl = this.win.document.createElement('div');
    errorIconEl.classList.add('i-amphtml-story-experiment-icon');
    errorIconEl.classList.add('i-amphtml-story-experiment-icon-error');

    var errorMsgEl = this.win.document.createElement('span');
    errorMsgEl.textContent = 'You must enable the amp-story experiment to ' + 'view this content.';

    var experimentsLinkEl = this.win.document.createElement('button');
    experimentsLinkEl.textContent = 'Enable';
    experimentsLinkEl.addEventListener('click', function () {
      (0, _experiments.toggleExperiment)(_this12.win, 'amp-story', true);
      errorIconEl.classList.remove('i-amphtml-story-experiment-icon-error');
      errorIconEl.classList.add('i-amphtml-story-experiment-icon-done');
      errorMsgEl.textContent = 'Experiment enabled.  Please reload.';
      (0, _dom.removeElement)(experimentsLinkEl);
    });

    var errorEl = this.win.document.createElement('div');
    errorEl.classList.add('i-amphtml-story-experiment-error');
    errorEl.appendChild(errorIconEl);
    errorEl.appendChild(errorMsgEl);
    errorEl.appendChild(experimentsLinkEl);
    this.element.appendChild(errorEl);

    (0, _log.user)().error(TAG, 'enable amp-story experiment');
  };

  /** @private */


  AmpStory.prototype.initializePages_ = function initializePages_() {
    var _this13 = this;

    var pageImplPromises = Array.prototype.map.call(this.element.querySelectorAll('amp-story-page'), function (pageEl, index) {
      return pageEl.getImpl().then(function (pageImpl) {
        _this13.pages_[index] = pageImpl;
      });
    });

    return Promise.all(pageImplPromises);
  };

  /**
   * Advance to the next screen in the story, if there is one.
   * @param {boolean=} opt_isAutomaticAdvance Whether this navigation was caused
   *     by an automatic advancement after a timeout.
   * @private
   */


  AmpStory.prototype.next_ = function next_(opt_isAutomaticAdvance) {
    var activePage = (0, _log.dev)().assert(this.activePage_, 'No active page set when navigating to next page.');

    var lastPage = this.pages_[this.getPageCount() - 1];
    if (activePage.element.hasAttribute(ADVANCE_TO_ATTR) || activePage !== lastPage) {
      activePage.next(opt_isAutomaticAdvance);
    } else {
      (0, _events.dispatch)(this.element, _events.EventType.SHOW_BOOKEND);
    }
  };

  /**
   * Go back to the previous screen in the story, if there is one.
   * @private
   */


  AmpStory.prototype.previous_ = function previous_() {
    var activePage = (0, _log.dev)().assert(this.activePage_, 'No active page set when navigating to next page.');
    activePage.previous();
  };

  /**
   * @param {!TapNavigationDirection} direction The direction to navigate.
   * @private
   */


  AmpStory.prototype.performTapNavigation_ = function performTapNavigation_(direction) {
    if (this.isDesktop_()) {
      this.next_();
      return;
    }

    if (direction === _pageAdvancement.TapNavigationDirection.NEXT) {
      this.next_();
    } else if (direction === _pageAdvancement.TapNavigationDirection.PREVIOUS) {
      this.previous_();
    }
  };

  /**
   * Switches to a particular page.
   * @param {string} targetPageId
   * @return {!Promise}
   */
  // TODO(newmuis): Update history state


  AmpStory.prototype.switchTo_ = function switchTo_(targetPageId) {
    var _this14 = this;

    var targetPage = this.getPageById(targetPageId);
    var pageIndex = this.getPageIndex(targetPage);

    this.updateBackground_(targetPage.element, /* initial */!this.activePage_);

    if (targetPage.isAd()) {
      this.vsync_.mutate(function () {
        _this14.element.setAttribute(AD_SHOWING_ATTR, '');
      });
    } else {
      this.vsync_.mutate(function () {
        _this14.element.removeAttribute(AD_SHOWING_ATTR);
      });
      // TODO(alanorozco): decouple this using NavigationState
      this.systemLayer_.setActivePageId(targetPageId);
    }

    // TODO(alanorozco): check if autoplay
    this.navigationState_.updateActivePage(pageIndex, this.getPageCount(), targetPage.element.id);

    var oldPage = this.activePage_;

    // TODO(cvializ): Move this to the page class?
    var activePriorSibling = targetPage.element.previousElementSibling;
    var previousActivePriorSibling = this.element.querySelector('[' + (0, _dom.escapeCssSelectorIdent)(PRE_ACTIVE_PAGE_ATTRIBUTE_NAME) + ']');

    this.activePage_ = targetPage;

    this.systemLayer_.resetDeveloperLogs();
    this.systemLayer_.setDeveloperLogContextString(this.activePage_.element.id);

    return targetPage.beforeVisible().then(function () {
      _this14.triggerActiveEventForPage_();

      if (oldPage) {
        oldPage.setActive(false);
      }

      targetPage.setActive(true);

      if (activePriorSibling && (0, _dom.matches)(activePriorSibling, 'amp-story-page')) {
        activePriorSibling.setAttribute(PRE_ACTIVE_PAGE_ATTRIBUTE_NAME, '');
      }
      if (previousActivePriorSibling) {
        previousActivePriorSibling.removeAttribute(PRE_ACTIVE_PAGE_ATTRIBUTE_NAME);
      }

      _this14.preloadPagesByDistance_();
      _this14.reapplyMuting_();
      _this14.forceRepaintForSafari_();
      _this14.maybePreloadBookend_();
    });
  };

  /** @private */


  AmpStory.prototype.triggerActiveEventForPage_ = function triggerActiveEventForPage_() {
    // TODO(alanorozco): pass event priority once amphtml-story repo is merged
    // with upstream.
    _services.Services.actionServiceForDoc(this.element).trigger(this.activePage_.element, 'active', /* event */null, _actionTrust.ActionTrust.HIGH);
  };

  /**
   * For some reason, Safari has an issue where sometimes when pages become
   * visible, some descendants are not painted.  This is a hack where we detect
   * that the browser is Safari and force it to repaint, to avoid this case.
   * See newmuis/amphtml-story#106 for details.
   * @private
   */


  AmpStory.prototype.forceRepaintForSafari_ = function forceRepaintForSafari_() {
    var _this15 = this;

    var platform = _services.Services.platformFor(this.win);
    if (!platform.isSafari() && !platform.isIos()) {
      return;
    }
    if (this.isDesktop_()) {
      // Force repaint is only needed when transitioning from invisible to visible
      return;
    }

    this.mutateElement(function () {
      (0, _style.setStyle)(_this15.element, 'display', 'none');

      // Reading the height is what forces the repaint.  The conditional exists
      // only to workaround the fact that the closure compiler would otherwise
      // think that only reading the height has no effect.  Since the height is
      // always >= 0, this conditional will always be executed.
      var height = _this15.element. /*OK*/offsetHeight;
      if (height >= 0) {
        (0, _style.setStyle)(_this15.element, 'display', '');
      }
    });
  };

  /**
   * Handles all key presses within the story.
   * @param {!Event} e The keydown event.
   * @private
   */


  AmpStory.prototype.onKeyDown_ = function onKeyDown_(e) {
    if (this.bookend_.isActive()) {
      return;
    }

    switch (e.keyCode) {
      // TODO(newmuis): This will need to be flipped for RTL.
      case _keyCodes.KeyCodes.LEFT_ARROW:
        this.previous_();
        break;
      case _keyCodes.KeyCodes.RIGHT_ARROW:
        this.next_();
        break;
    }
  };

  /**
   * Handle resize events and set the story's desktop state.
   * @visibleForTesting
   */


  AmpStory.prototype.onResize = function onResize() {
    var _this16 = this;

    if (this.isDesktop_()) {
      this.element.setAttribute('desktop', '');
      this.element.classList.remove(LANDSCAPE_OVERLAY_CLASS);
      if (!this.topBar_) {
        this.buildTopBar_();
      }
      if (!this.background_) {
        this.background_ = new _background.AmpStoryBackground(this.win, this.element);
        this.background_.attach();
      }
      if (this.activePage_) {
        this.updateBackground_(this.activePage_.element, /* initial */true);
      }
    } else {
      this.vsync_.run({
        measure: function measure(state) {
          var _element = _this16.element,
              offsetWidth = _element.offsetWidth,
              offsetHeight = _element.offsetHeight;

          state.isLandscape = offsetWidth > offsetHeight;
        },
        mutate: function mutate(state) {
          _this16.element.classList.toggle(LANDSCAPE_OVERLAY_CLASS, state.isLandscape);
          _this16.element.removeAttribute('desktop');
        }
      }, {});
    }
  };

  /**
   * @return {boolean} True if the screen size matches the desktop media query.
   */


  AmpStory.prototype.isDesktop_ = function isDesktop_() {
    return !(0, _experiments.isExperimentOn)(this.win, 'disable-amp-story-desktop') && this.desktopMedia_.matches;
  };

  /**
   * Return right overlay for mobile or desktop
   */


  AmpStory.prototype.viewportWarningOverlay_ = function viewportWarningOverlay_() {
    var platform = _services.Services.platformFor(this.win);

    return platform.isIos() || platform.isAndroid() ? LANDSCAPE_ORIENTATION_WARNING : DESKTOP_SIZE_WARNING;
  };

  /**
   * Build overlay for Landscape mode mobile
   */


  AmpStory.prototype.buildLandscapeOrientationOverlay_ = function buildLandscapeOrientationOverlay_() {
    var _this17 = this;

    this.mutateElement(function () {
      _this17.element.insertBefore((0, _simpleTemplate.renderSimpleTemplate)(_this17.win.document, _this17.viewportWarningOverlay_()), _this17.element.firstChild);
    });
  };

  /**
   * Build overlay for Landscape mode mobile
   */


  AmpStory.prototype.buildUnsupportedBrowserOverlay_ = function buildUnsupportedBrowserOverlay_() {
    var _this18 = this;

    this.mutateElement(function () {
      _this18.element.insertBefore((0, _simpleTemplate.renderSimpleTemplate)(_this18.win.document, UNSUPPORTED_BROWSER_WARNING), _this18.element.firstChild);
    });
  };

  /**
   * Get the URL of the given page's background resource.
   * @param {!Element} pageElement
   * @return {?string} The URL of the background resource
   */


  AmpStory.prototype.getBackgroundUrl_ = function getBackgroundUrl_(pageElement) {
    var fillElement = pageElement.querySelector('[template="fill"]:not(.i-amphtml-hidden-by-media-query)');

    if (!fillElement) {
      return null;
    }

    fillElement = (0, _log.dev)().assertElement(fillElement);

    var fillPosterElement = fillElement.querySelector('[poster]:not(.i-amphtml-hidden-by-media-query)');

    var srcElement = fillElement.querySelector('[src]:not(.i-amphtml-hidden-by-media-query)');

    var fillPoster = fillPosterElement ? fillPosterElement.getAttribute('poster') : '';
    var src = srcElement ? srcElement.getAttribute('src') : '';

    return fillPoster || src;
  };

  /**
   * Update the background to the specified page's background.
   * @param {!Element} pageElement
   * @param {boolean=} initial
   */


  AmpStory.prototype.updateBackground_ = function updateBackground_(pageElement) {
    var _this19 = this;

    var initial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (!this.background_) {
      return;
    }

    this.getVsync().run({
      measure: function measure(state) {
        state.url = _this19.getBackgroundUrl_(pageElement);
        state.color = (0, _style.computedStyle)(_this19.win, pageElement).getPropertyValue('background-color');
      },
      mutate: function mutate(state) {
        _this19.background_.setBackground(state.color, state.url, initial);
      }
    }, {});
  };

  /**
   * Shows the bookend overlay.
   * @private
   */


  AmpStory.prototype.showBookend_ = function showBookend_() {
    var _this20 = this;

    if (this.bookend_.isActive()) {
      return;
    }

    this.buildBookend_().then(function () {
      _this20.systemLayer_.hideDeveloperLog();

      _this20.activePage_.pauseCallback();

      _this20.toggleElementsOnBookend_( /* display */false);

      _this20.element.classList.add('i-amphtml-story-bookend-active');

      _this20.bookend_.show();
    });
  };

  /**
   * Hides the bookend overlay.
   * @private
   */


  AmpStory.prototype.hideBookend_ = function hideBookend_() {
    if (!this.bookend_.isActive()) {
      return;
    }

    this.activePage_.resumeCallback();

    this.toggleElementsOnBookend_( /* display */true);

    this.element.classList.remove('i-amphtml-story-bookend-active');

    this.bookend_.hide();
  };

  /**
   * Toggle content when bookend is opened/closed.
   * @param {boolean} display
   * @private
   */


  AmpStory.prototype.toggleElementsOnBookend_ = function toggleElementsOnBookend_(display) {
    if (!this.isDesktop_()) {
      return;
    }

    var elements = (0, _dom.scopedQuerySelectorAll)(this.element, HIDE_ON_BOOKEND_SELECTOR);

    Array.prototype.forEach.call(elements, function (el) {
      if (display) {
        (0, _style.resetStyles)(el, ['opacity', 'transition']);
      } else {
        (0, _style.setImportantStyles)(el, {
          opacity: 0,
          transition: 'opacity 0.3s'
        });
      }
    });
  };

  /**
   * @return {!Array<!Array<string>>} A 2D array representing lists of pages by
   *     distance.  The outer array index represents the distance from the
   *     active page; the inner array is a list of page IDs at the specified
   *     distance.
   */


  AmpStory.prototype.getPagesByDistance_ = function getPagesByDistance_() {
    var distanceMap = this.getPageDistanceMapHelper_(
    /* distance */0, /* map */{}, this.activePage_.element.id);

    // Transpose the map into a 2D array.
    var pagesByDistance = [];
    Object.keys(distanceMap).forEach(function (pageId) {
      var distance = distanceMap[pageId];
      if (!pagesByDistance[distance]) {
        pagesByDistance[distance] = [];
      }
      pagesByDistance[distance].push(pageId);
    });

    return pagesByDistance;
  };

  /**
   * Creates a map of a page and all of the pages reachable from that page, by
   * distance.
   *
   * @param {number} distance The distance that the page with the specified
   *     pageId is from the active page.
   * @param {!Object<string, number>} map A mapping from pageId to its distance
   *     from the active page.
   * @param {string} pageId The page to be added to the map.
   * @return {!Object<string, number>} A mapping from page ID to the priority of
   *     that page.
   * @private
   */


  AmpStory.prototype.getPageDistanceMapHelper_ = function getPageDistanceMapHelper_(distance, map, pageId) {
    var _this21 = this;

    if (map[pageId] !== undefined && map[pageId] <= distance) {
      return map;
    }

    map[pageId] = distance;
    var page = this.getPageById(pageId);
    page.getAdjacentPageIds().forEach(function (adjacentPageId) {
      if (map[adjacentPageId] !== undefined && map[adjacentPageId] <= distance) {
        return;
      }

      // TODO(newmuis): Remove the assignment and return, as they're unnecessary.
      map = _this21.getPageDistanceMapHelper_(distance + 1, map, adjacentPageId);
    });

    return map;
  };

  /** @private */


  AmpStory.prototype.preloadPagesByDistance_ = function preloadPagesByDistance_() {
    var _this22 = this;

    var pagesByDistance = this.getPagesByDistance_();

    this.mutateElement(function () {
      pagesByDistance.forEach(function (pageIds, distance) {
        pageIds.forEach(function (pageId) {
          var page = _this22.getPageById(pageId);
          page.setDistance(distance);
        });
      });
    });
  };

  /**
   * Preloads the bookend config if on the last page.
   * @private
   */


  AmpStory.prototype.maybePreloadBookend_ = function maybePreloadBookend_() {
    if (!this.activePage_) {
      return;
    }

    var pageIndex = this.getPageIndex(this.activePage_);

    if (pageIndex + 1 >= this.getPageCount()) {
      this.buildBookend_();
    }
  };

  /** @private */


  AmpStory.prototype.buildBookend_ = function buildBookend_() {
    var _this23 = this;

    if (this.bookend_.isBuilt()) {
      return Promise.resolve();
    }

    this.element.appendChild(this.bookend_.build(this.getAmpDoc()));
    this.setAsOwner(this.bookend_.getRoot());

    return this.loadBookendConfig_().then(function (bookendConfig) {
      if (bookendConfig !== null) {
        _this23.bookend_.setConfig((0, _log.dev)().assert(bookendConfig));
      }
      _this23.scheduleLayout(_this23.bookend_.getRoot());
    });
  };

  /**
   * @return {!Promise<?./bookend.BookendConfigDef>}
   * @private
   */


  AmpStory.prototype.loadBookendConfigImpl_ = function loadBookendConfigImpl_() {
    return this.loadJsonFromAttribute_(BOOKEND_CONFIG_ATTRIBUTE_NAME).then(function (response) {
      return response && {
        shareProviders: response['share-providers'],
        relatedArticles: (0, _relatedArticles.relatedArticlesFromJson)(response['related-articles'])
      };
    }).catch(function (e) {
      (0, _log.user)().error(TAG, 'Error fetching bookend configuration', e.message);
      return null;
    });
  };

  /**
   * @return {!Promise<boolean>}
   * @private
   */


  AmpStory.prototype.hasBookend_ = function hasBookend_() {
    var bookendActive = this.stateService_.getState(_ampStoryStateService.StateType.BOOKEND_ACTIVE);
    if (!bookendActive.isModifiable()) {
      // Whether the bookend is active cannot be modified; its current value can
      // be assumed.
      return Promise.resolve(bookendActive.getValue());
    }

    // TODO(newmuis): Change this comment.
    // On mobile there is always a bookend. On desktop, the bookend will only
    // be shown if related articles have been configured.
    if (!this.isDesktop_()) {
      return Promise.resolve(true);
    }
    return this.loadBookendConfig_().then(function (config) {
      return config && config.relatedArticles && config.relatedArticles.length;
    });
  };

  /**
   * @param {string} attributeName
   * @return {(!Promise<!JsonObject>|!Promise<null>)}
   * @private
   */


  AmpStory.prototype.loadJsonFromAttribute_ = function loadJsonFromAttribute_(attributeName) {
    var _this24 = this;

    if (!this.element.hasAttribute(attributeName)) {
      return Promise.resolve(null);
    }

    var rawUrl = this.element.getAttribute(attributeName);
    var opts = {};
    opts.requireAmpResponseSourceOrigin = false;

    return _services.Services.urlReplacementsForDoc(this.getAmpDoc()).expandUrlAsync((0, _log.user)().assertString(rawUrl)).then(function (url) {
      return _services.Services.xhrFor(_this24.win).fetchJson(url, opts);
    }).then(function (response) {
      (0, _log.user)().assert(response.ok, 'Invalid HTTP response for bookend JSON');
      return response.json();
    });
  };

  /**
   * @param {!Element} el
   * @return {boolean}
   * @private
   */


  AmpStory.prototype.isBookend_ = function isBookend_(el) {
    return this.bookend_.isBuilt() && el === this.bookend_.getRoot();
  };

  /**
   * @param {!Element} el
   * @return {boolean}
   * @private
   */


  AmpStory.prototype.isTopBar_ = function isTopBar_(el) {
    return !!this.topBar_ && this.topBar_.contains(el);
  };

  /**
   * @param {string} id The ID of the page whose index should be retrieved.
   * @return {number} The index of the page.
   * @private
   */


  AmpStory.prototype.getPageIndexById_ = function getPageIndexById_(id) {
    var pageIndex = (0, _array.findIndex)(this.pages_, function (page) {
      return page.element.id === id;
    });

    if (pageIndex < 0) {
      (0, _log.user)().error(TAG, 'Story refers to page "' + id + '", but no such page exists.');
    }

    return pageIndex;
  };

  /**
   * @param {string} id The ID of the page to be retrieved.
   * @return {!./amp-story-page.AmpStoryPage} Retrieves the page with the
   *     specified ID.
   */


  AmpStory.prototype.getPageById = function getPageById(id) {
    var pageIndex = this.getPageIndexById_(id);
    return (0, _log.dev)().assert(this.pages_[pageIndex], 'Page at index ' + pageIndex + ' exists, but is missing from the array.');
  };

  /**
   * @return {number}
   */


  AmpStory.prototype.getPageCount = function getPageCount() {
    return this.pages_.length - this.adPages_.length;
  };

  /**
   * @param {!./amp-story-page.AmpStoryPage} desiredPage
   * @return {number} The index of the page.
   */


  AmpStory.prototype.getPageIndex = function getPageIndex(desiredPage) {
    return (0, _array.findIndex)(this.pages_, function (page) {
      return page === desiredPage;
    });
  };

  /**
   * @param {!Element} element The element whose containing AmpStoryPage should
   *     be retrieved
   * @return {!./amp-story-page.AmpStoryPage} The AmpStoryPage containing the
   *     specified element.
   */


  AmpStory.prototype.getPageContainingElement_ = function getPageContainingElement_(element) {
    var pageIndex = (0, _array.findIndex)(this.pages_, function (page) {
      var pageEl = (0, _dom.closest)(element, function (el) {
        return el === page.element;
      });

      return !!pageEl;
    });

    return (0, _log.dev)().assert(this.pages_[pageIndex], 'Element not contained on any amp-story-page');
  };

  /** @override */


  AmpStory.prototype.getElementDistance = function getElementDistance(element) {
    var page = this.getPageContainingElement_(element);
    return page.getDistance();
  };

  /** @override */


  AmpStory.prototype.getMaxMediaElementCounts = function getMaxMediaElementCounts() {
    var _ref;

    var audioMediaElements = this.element.querySelectorAll('amp-audio, [background-audio]');
    var videoMediaElements = this.element.querySelectorAll('amp-video');

    return _ref = {}, _ref[_mediaPool.MediaType.AUDIO] = Math.min(audioMediaElements.length, MAX_MEDIA_ELEMENT_COUNTS[_mediaPool.MediaType.AUDIO]), _ref[_mediaPool.MediaType.VIDEO] = Math.min(videoMediaElements.length, MAX_MEDIA_ELEMENT_COUNTS[_mediaPool.MediaType.VIDEO]), _ref;
  };

  /** @override */


  AmpStory.prototype.getElement = function getElement() {
    return this.element;
  };

  /**
   * Mutes the audio for the story.
   * @private
   */


  AmpStory.prototype.mute_ = function mute_() {
    this.pages_.forEach(function (page) {
      page.muteAllMedia();
    });
    this.toggleMutedAttribute_(true);
  };

  /**
   * Unmutes the audio for the story.
   * @private
   */


  AmpStory.prototype.unmute_ = function unmute_() {
    var _this25 = this;

    var unmuteAllMedia = function unmuteAllMedia() {
      return _this25.activePage_.unmuteAllMedia();
    };
    this.mediaPool_.blessAll().then(unmuteAllMedia, unmuteAllMedia);
    this.toggleMutedAttribute_(false);
  };

  /**
   * Reapplies the muting status for the currently-active media in the story.
   */


  AmpStory.prototype.reapplyMuting_ = function reapplyMuting_() {
    var isMuted = this.isMuted_();
    if (!isMuted) {
      this.mute_();
      this.unmute_();
    }
  };

  /**
   * @return {boolean} Whether the story is currently muted.
   * @private
   */


  AmpStory.prototype.isMuted_ = function isMuted_() {
    return this.element.hasAttribute(AUDIO_MUTED_ATTRIBUTE);
  };

  /**
   * Toggles mute or unmute attribute on element.
   * @param {boolean} isMuted
   * @private
   */


  AmpStory.prototype.toggleMutedAttribute_ = function toggleMutedAttribute_(isMuted) {
    if (isMuted) {
      this.element.setAttribute(AUDIO_MUTED_ATTRIBUTE, '');
    } else {
      this.element.removeAttribute(AUDIO_MUTED_ATTRIBUTE);
    }
  };

  /**
   * Shows the audio icon if the story has any media elements or background
   * audio.
   * @private
   */


  AmpStory.prototype.updateAudioIcon_ = function updateAudioIcon_() {
    // TODO(#11857): Defer to any playing media element for whether any audio is
    // being played.
    var containsMediaElement = !!this.element.querySelector('amp-audio, amp-video, [background-audio]');
    var hasStoryAudio = this.element.hasAttribute('background-audio');

    if (containsMediaElement || hasStoryAudio) {
      this.audioPlaying_();
    }
  };

  /**
   * Marks the story as having audio playing on the active page.
   * @private
   */


  AmpStory.prototype.audioPlaying_ = function audioPlaying_() {
    this.element.classList.add('audio-playing');
  };

  /**
   * Marks the story as not having audio playing on the active page.
   * @private
   */


  AmpStory.prototype.audioStopped_ = function audioStopped_() {
    this.element.classList.remove('audio-playing');
  };

  /** @private */


  AmpStory.prototype.replay_ = function replay_() {
    if (this.bookend_.isActive()) {
      // Dispaching event instead of calling method directly so that all
      // listeners can respond.
      (0, _events.dispatch)(this.element, _events.EventType.CLOSE_BOOKEND);
    }
    this.switchTo_((0, _log.dev)().assertElement(this.pages_[0].element).id);
  };

  /** @return {!NavigationState} */


  AmpStory.prototype.getNavigationState = function getNavigationState() {
    return this.navigationState_;
  };

  /**
   * Add page to back of pages_ array
   * @param {!./amp-story-page.AmpStoryPage} page
   */


  AmpStory.prototype.addPage = function addPage(page) {
    this.pages_.push(page);

    if (page.isAd()) {
      this.adPages_.push(page);
    }
  };

  /**
   * Insert a new page in navigation flow by changing the attr pointers
   * on amp-story-page elements
   * @param {string} pageBeforeId
   * @param {string} pageToBeInsertedId
   * @return {boolean} was page inserted
   */


  AmpStory.prototype.insertPage = function insertPage(pageBeforeId, pageToBeInsertedId) {
    // TODO(ccordry): make sure this method moves to PageManager when implemented
    var pageToBeInserted = this.getPageById(pageToBeInsertedId);
    var pageToBeInsertedEl = pageToBeInserted.element;

    var allowAutomaticAdInsertion = this.stateService_.getState(_ampStoryStateService.StateType.ALLOW_AUTOMATIC_AD_INSERTION);

    if (pageToBeInserted.isAd() && !allowAutomaticAdInsertion.getValue()) {
      (0, _log.dev)().expectedError(TAG, 'Inserting ads automatically is disallowed.');
      return false;
    }

    var pageBefore = this.getPageById(pageBeforeId);
    var pageBeforeEl = pageBefore.element;

    var nextPage = this.getNextPage(pageBefore);

    if (!nextPage) {
      return false;
    }

    pageBeforeEl.setAttribute(ADVANCE_TO_ATTR, pageToBeInsertedId);
    pageBeforeEl.setAttribute(AUTO_ADVANCE_TO_ATTR, pageToBeInsertedId);
    pageToBeInsertedEl.setAttribute(RETURN_TO_ATTR, pageBeforeId);

    var nextPageEl = nextPage.element;
    var nextPageId = nextPageEl.id;
    pageToBeInsertedEl.setAttribute(ADVANCE_TO_ATTR, nextPageId);
    pageToBeInsertedEl.setAttribute(AUTO_ADVANCE_TO_ATTR, nextPageId);
    nextPageEl.setAttribute(RETURN_TO_ATTR, pageToBeInsertedId);

    return true;
  };

  /**
   * Get next page object
   * @param {!./amp-story-page.AmpStoryPage} page
   * @return {?./amp-story-page.AmpStoryPage}
   */


  AmpStory.prototype.getNextPage = function getNextPage(page) {
    var nextPageId = page.getNextPageId(true /*opt_isAutomaticAdvance */);
    if (!nextPageId) {
      return null;
    }
    return this.getPageById(nextPageId);
  };

  /**
   * @param {!Window} win
   * @return {boolean} true if the user's browser supports the features needed
   *     for amp-story.
   */


  AmpStory.isBrowserSupported = function isBrowserSupported(win) {
    return win.CSS.supports('display', 'grid');
  };

  return AmpStory;
}(AMP.BaseElement);

AMP.extension('amp-story', '0.1', function (AMP) {
  AMP.registerElement('amp-story', AmpStory, _ampStory.CSS);
});

},{"../../../build/amp-story-0.1.css":1,"../../../src/action-trust":42,"../../../src/common-signals":45,"../../../src/dom":48,"../../../src/experiments":52,"../../../src/gesture":54,"../../../src/gesture-recognizers":53,"../../../src/layout":56,"../../../src/log":57,"../../../src/mode":59,"../../../src/service":71,"../../../src/services":72,"../../../src/string":73,"../../../src/style":74,"../../../src/url":78,"../../../src/utils/array":79,"../../../src/utils/function":81,"../../../src/utils/key-codes":82,"../../../src/utils/object":83,"../../../src/utils/rate-limit":84,"./amp-story-auto-ads":3,"./amp-story-grid-layer":5,"./amp-story-hint":6,"./amp-story-page":7,"./amp-story-state-service":8,"./analytics":10,"./audio":14,"./background":15,"./bookend":16,"./embed-mode":19,"./events":20,"./media-pool":24,"./navigation-state":26,"./origin-whitelist":27,"./page-advancement":28,"./pagination-buttons":30,"./related-articles":32,"./share":33,"./simple-template":34,"./system-layer":36,"./variable-service":39}],10:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AmpStoryAnalytics = undefined;

var _navigationState = require('./navigation-state');

var _log = require('../../../src/log');

var _object = require('../../../src/utils/object');

var _analytics = require('../../../src/analytics');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */


var Events = {
  PAGE_VISIBLE: 'story-page-visible'
};

/**
 * Intermediate handler for amp-story specific analytics.
 */

var AmpStoryAnalytics = exports.AmpStoryAnalytics = function () {
  /**
   * @param {!Element} element
   */
  function AmpStoryAnalytics(element) {
    _classCallCheck(this, AmpStoryAnalytics);

    this.element_ = element;

    /** @private @const {!Object<number, boolean>} */
    this.seenPagesIndices_ = (0, _object.map)();
  }

  /**
   * @param {!./navigation-state.StateChangeEventDef} stateChangeEvent
   */


  AmpStoryAnalytics.prototype.onStateChange = function onStateChange(stateChangeEvent) {
    switch (stateChangeEvent.type) {
      case _navigationState.StateChangeType.ACTIVE_PAGE:
        var _stateChangeEvent$val = stateChangeEvent.value,
            pageIndex = _stateChangeEvent$val.pageIndex,
            pageId = _stateChangeEvent$val.pageId;

        this.onActivePageChange_((0, _log.dev)().assertNumber(pageIndex), (0, _log.dev)().assertString(pageId));
        break;
    }
  };

  /**
   * @param {number} pageIndex
   * @param {string} pageId
   */


  AmpStoryAnalytics.prototype.onActivePageChange_ = function onActivePageChange_(pageIndex, pageId) {
    if (!this.seenPagesIndices_[pageIndex]) {
      this.triggerEvent_(Events.PAGE_VISIBLE, {
        'storyPageIndex': pageIndex.toString(),
        'storyPageId': pageId
      });

      this.seenPagesIndices_[pageIndex] = true;
    }
  };

  /**
   * @param {string} eventType
   * @param {!Object<string, string>=} opt_vars A map of vars and their values.
   * @private
   */


  AmpStoryAnalytics.prototype.triggerEvent_ = function triggerEvent_(eventType, opt_vars) {
    (0, _analytics.triggerAnalyticsEvent)(this.element_, eventType, opt_vars);
  };

  return AmpStoryAnalytics;
}();

},{"../../../src/analytics":43,"../../../src/log":57,"../../../src/utils/object":83,"./navigation-state":26}],11:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PRESETS = undefined;

var _animationTypes = require('./animation-types');

var _style = require('../../../src/style');

/** @const {!Object<string, !StoryAnimationPresetDef>} */
// First keyframe will always be considered offset: 0 and will be applied to the
// element as the first frame before animation starts.
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var PRESETS = exports.PRESETS = {
  'pulse': {
    duration: 500,
    easing: 'linear',
    keyframes: [{
      offset: 0,
      transform: 'scale(1)'
    }, {
      offset: 0.25,
      transform: 'scale(0.95)'
    }, {
      offset: 0.75,
      transform: 'scale(1.05)'
    }, {
      offset: 1,
      transform: 'scale(1)'
    }]
  },
  'fly-in-left': {
    duration: 500,
    easing: 'ease-out',
    keyframes: function keyframes(dimensions) {
      var offsetX = -(dimensions.targetX + dimensions.targetWidth);

      return [{ transform: 'translate(' + (0, _style.px)(offsetX) + ', 0)' }, { transform: 'translate(0, 0)' }];
    }
  },
  'fly-in-right': {
    duration: 500,
    easing: 'ease-out',
    keyframes: function keyframes(dimensions) {
      var offsetX = dimensions.pageWidth - dimensions.targetX;

      return [{ transform: 'translate(' + (0, _style.px)(offsetX) + ', 0)' }, { transform: 'translate(0, 0)' }];
    }
  },
  'fly-in-top': {
    duration: 500,
    easing: 'ease-out',
    keyframes: function keyframes(dimensions) {
      var offsetY = -(dimensions.targetY + dimensions.targetHeight);

      return [{ transform: 'translate(0, ' + (0, _style.px)(offsetY) + ')' }, { transform: 'translate(0, 0)' }];
    }
  },
  'fly-in-bottom': {
    duration: 500,
    easing: 'ease-out',
    keyframes: function keyframes(dimensions) {
      var offsetY = dimensions.pageHeight - dimensions.targetY;

      return [{ transform: 'translate(0, ' + (0, _style.px)(offsetY) + ')' }, { transform: 'translate(0, 0)' }];
    }
  },
  'rotate-in-left': {
    duration: 700,
    easing: 'ease-out',
    keyframes: function keyframes(dimensions) {
      var offsetX = -(dimensions.targetX + dimensions.targetWidth);

      return [{ transform: 'translate(' + (0, _style.px)(offsetX) + ', 0) rotate(-360deg)' }, { transform: 'translate(0, 0) rotate(0)' }];
    }
  },
  'rotate-in-right': {
    duration: 700,
    easing: 'ease-out',
    keyframes: function keyframes(dimensions) {
      var offsetX = dimensions.pageWidth - dimensions.targetX;

      return [{ transform: 'translate(' + (0, _style.px)(offsetX) + ', 0) rotate(360deg)' }, { transform: 'translate(0, 0) rotate(0)' }];
    }
  },
  'fade-in': {
    duration: 500,
    easing: 'ease-out',
    keyframes: [{
      opacity: 0
    }, {
      opacity: 1
    }]
  },
  'drop': {
    duration: 1600,
    keyframes: function keyframes(dimensions) {
      var maxBounceHeight = Math.max(160, dimensions.targetY + dimensions.targetHeight);

      return [{
        offset: 0,
        transform: 'translateY(' + (0, _style.px)(-maxBounceHeight) + ')',
        easing: 'cubic-bezier(.75,.05,.86,.08)'
      }, {
        offset: 0.3,
        transform: 'translateY(0)',
        easing: 'cubic-bezier(.22,.61,.35,1)'
      }, {
        offset: 0.52,
        transform: 'translateY(' + (0, _style.px)(-0.6 * maxBounceHeight) + ')',
        easing: 'cubic-bezier(.75,.05,.86,.08)'
      }, {
        offset: 0.74,
        transform: 'translateY(0)',
        easing: 'cubic-bezier(.22,.61,.35,1)'
      }, {
        offset: 0.83,
        transform: 'translateY(' + (0, _style.px)(-0.3 * maxBounceHeight) + ')',
        easing: 'cubic-bezier(.75,.05,.86,.08)'
      }, {
        offset: 1,
        transform: 'translateY(0)',
        easing: 'cubic-bezier(.22,.61,.35,1)'
      }];
    }
  },
  'twirl-in': {
    duration: 1000,
    easing: 'cubic-bezier(.2,.75,.4,1)',
    keyframes: [{
      transform: 'rotate(-540deg) scale(0.1)',
      opacity: 0
    }, {
      transform: 'none',
      opacity: 1
    }]
  },
  'whoosh-in-left': {
    duration: 500,
    easing: 'ease-out',
    keyframes: function keyframes(dimensions) {
      var offsetX = -(dimensions.targetX + dimensions.targetWidth);

      return [{
        opacity: 0,
        transform: 'translate(' + (0, _style.px)(offsetX) + ', 0) scale(0.15)'
      }, {
        opacity: 1,
        transform: 'translate(0, 0) scale(1)'
      }];
    }
  },
  'whoosh-in-right': {
    duration: 500,
    easing: 'ease-out',
    keyframes: function keyframes(dimensions) {
      var offsetX = dimensions.pageWidth - dimensions.targetX;

      return [{
        opacity: 0,
        transform: 'translate(' + (0, _style.px)(offsetX) + ', 0) scale(0.15)'
      }, {
        opacity: 1,
        transform: 'translate(0, 0) scale(1)'
      }];
    }
  }
};

},{"../../../src/style":74,"./animation-types":12}],12:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @typedef {!Array<!Object<string, *>>} */
var KeyframesDef = exports.KeyframesDef = void 0;

/** @typedef {(function(StoryAnimationDimsDef):!KeyframesDef)|!KeyframesDef} */
var KeyframesOrFilterFnDef = exports.KeyframesOrFilterFnDef = void 0;

/**
 * @typedef {{
 *   pageWidth: number,
 *   pageHeight: number,
 *   targetWidth: number,
 *   targetHeight: number,
 *   targetX: number,
 *   targetY: number,
 * }}
 */
var StoryAnimationDimsDef = exports.StoryAnimationDimsDef = void 0;

/**
 * @typedef {{
 *   duration: number,
 *   easing: (string|undefined),
 *   keyframes: !KeyframesOrFilterFnDef,
 * }}
 */
var StoryAnimationPresetDef = exports.StoryAnimationPresetDef = void 0;

/**
 * @typedef {{
 *  target: !Element,
 *  startAfterId: (string|undefined),
 *  preset: !StoryAnimationPresetDef,
 *  duration: (number|undefined),
 *  delay: (number|undefined),
 * }}
 */
var StoryAnimationDef = exports.StoryAnimationDef = void 0;

},{}],13:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimationManager = undefined;
exports.hasAnimations = hasAnimations;

var _animationTypes = require('./animation-types');

var _animationPresets = require('./animation-presets');

var _services = require('../../../src/services');

var _webAnimationTypes = require('../../amp-animation/0.1/web-animation-types');

var _log = require('../../../src/log');

var _dom = require('../../../src/dom');

var _object = require('../../../src/utils/object');

var _style = require('../../../src/style');

var _utils = require('./utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */

/** const {string} */
var ANIMATE_IN_ATTRIBUTE_NAME = 'animate-in';
/** const {string} */
var ANIMATE_IN_DURATION_ATTRIBUTE_NAME = 'animate-in-duration';
/** const {string} */
var ANIMATE_IN_DELAY_ATTRIBUTE_NAME = 'animate-in-delay';
/** const {string} */
var ANIMATE_IN_AFTER_ATTRIBUTE_NAME = 'animate-in-after';
/** const {string} */
var ANIMATABLE_ELEMENTS_SELECTOR = '[' + ANIMATE_IN_ATTRIBUTE_NAME + ']';

/**
 * @param {!Element} element
 * @return {boolean}
 */
// TODO(alanorozco): maybe memoize?
function hasAnimations(element) {
  return !!(0, _dom.scopedQuerySelector)(element, ANIMATABLE_ELEMENTS_SELECTOR);
}

/** @enum {number} */
var PlaybackActivity = {
  START: 0,
  FINISH: 1
};

/** Wraps WebAnimationRunner for story page elements. */

var AnimationRunner = function () {
  /**
   * @param {!Element} page
   * @param {!StoryAnimationDef} animationDef
   * @param {!Promise<
   *    !../../amp-animation/0.1/web-animations.Builder
   * >} webAnimationBuilderPromise
   * @param {!../../../src/service/vsync-impl.Vsync} vsync
   * @param {!../../../src/service/timer-impl.Timer} timer
   * @param {!AnimationSequence} sequence
   */
  function AnimationRunner(page, animationDef, webAnimationBuilderPromise, vsync, timer, sequence) {
    var _this = this;

    _classCallCheck(this, AnimationRunner);

    /** @private @const */
    this.page_ = page;

    /** @private @const */
    this.timer_ = timer;

    /** @private @const */
    this.vsync_ = vsync;

    /** @private @const */
    this.target_ = (0, _log.dev)().assertElement(animationDef.target);

    /** @private @const */
    this.sequence_ = sequence;

    /** @private @const */
    this.animationDef_ = animationDef;

    /** @private @const */
    this.presetDef_ = animationDef.preset;

    /** @private @const */
    this.keyframes_ = this.filterKeyframes_(animationDef.preset.keyframes);

    /** @private @const */
    this.delay_ = animationDef.delay || this.presetDef_.delay || 0;

    /** @private @const */
    this.duration_ = animationDef.duration || this.presetDef_.duration || 0;

    /**
     * @private @const {!Promise<
     *    !../../amp-animation/0.1/web-animations.WebAnimationRunner>}
     */
    this.runnerPromise_ = this.getWebAnimationDef_().then(function (webAnimDef) {
      return webAnimationBuilderPromise.then(function (builder) {
        return builder.createRunner(webAnimDef);
      });
    });

    /** @private @const {!Promise<!Object<string, *>>} */
    this.firstFrameProps_ = this.keyframes_.then(function (keyframes) {
      return (0, _object.omit)(keyframes[0], ['offset']);
    });

    /** @private {?../../amp-animation/0.1/web-animations.WebAnimationRunner} */
    this.runner_ = null;

    /** @private {?PlaybackActivity} */
    this.scheduledActivity_ = null;

    /** @private {?Promise} */
    this.scheduledWait_ = null;

    this.keyframes_.then(function (keyframes) {
      return (0, _log.dev)().assert(!keyframes[0].offset, 'First keyframe offset for animation preset should be 0 or undefined');
    });

    (0, _log.user)().assert(this.delay_ >= 0, 'Negative delays are not allowed in amp-story entrance animations.');

    this.runnerPromise_.then(function (runner) {
      return _this.onRunnerReady_(runner);
    });
  }

  /**
   * @return {!Promise<!StoryAnimationDimsDef>}
   * @visibleForTesting
   */


  AnimationRunner.prototype.getDims = function getDims() {
    var _this2 = this;

    return this.vsync_.measurePromise(function () {
      var targetRect = (0, _utils.unscaledClientRect)(_this2.target_);
      var pageRect = (0, _utils.unscaledClientRect)(_this2.page_);

      return (/** @type {!StoryAnimationDimsDef} */{
          pageWidth: pageRect.width,
          pageHeight: pageRect.height,
          targetWidth: targetRect.width,
          targetHeight: targetRect.height,
          targetX: targetRect.left - pageRect.left,
          targetY: targetRect.top - pageRect.top
        }
      );
    });
  };

  /**
   * @param {!KeyframesOrFilterFnDef} keyframesArrayOrFn
   * @return {!Promise<!KeyframesDef>}
   * @private
   */


  AnimationRunner.prototype.filterKeyframes_ = function filterKeyframes_(keyframesArrayOrFn) {
    if (Array.isArray(keyframesArrayOrFn)) {
      return Promise.resolve(keyframesArrayOrFn);
    }
    return this.getDims().then(keyframesArrayOrFn);
  };

  /**
   * @return {!Promise<
   *   !../../amp-animation/0.1/web-animation-types.WebKeyframeAnimationDef>}
   * @private
   */


  AnimationRunner.prototype.getWebAnimationDef_ = function getWebAnimationDef_() {
    var _this3 = this;

    return this.keyframes_.then(function (keyframes) {
      return {
        keyframes: keyframes,
        target: _this3.target_,
        duration: _this3.duration_ + 'ms',
        easing: _this3.presetDef_.easing,
        fill: 'forwards'
      };
    });
  };

  /** @return {!Promise<void>} */


  AnimationRunner.prototype.applyFirstFrame = function applyFirstFrame() {
    var _this4 = this;

    if (this.hasStarted()) {
      return Promise.resolve();
    }

    if (this.runner_) {
      this.runner_.cancel();
    }

    return this.firstFrameProps_.then(function (firstFrameProps) {
      return _this4.vsync_.mutatePromise(function () {
        (0, _style.setStyles)(_this4.target_, firstFrameProps);
      });
    });
  };

  /** Starts or resumes the animation. */


  AnimationRunner.prototype.start = function start() {
    if (this.hasStarted()) {
      return;
    }

    this.playback_(PlaybackActivity.START, this.getStartWaitPromise_());
  };

  /**
   * @return {!Promise}
   * @private
   */


  AnimationRunner.prototype.getStartWaitPromise_ = function getStartWaitPromise_() {
    var _this5 = this;

    var promise = Promise.resolve();

    if (this.animationDef_.startAfterId) {
      var startAfterId = this.animationDef_.startAfterId;
      promise = promise.then(function () {
        return _this5.sequence_.waitFor(startAfterId);
      });
    }

    if (this.delay_) {
      promise = promise.then(function () {
        return _this5.timer_.promise(_this5.delay_);
      });
    }

    return promise;
  };

  /**
   * @param {!../../amp-animation/0.1/web-animations.WebAnimationRunner} runner
   * @private
   */


  AnimationRunner.prototype.startWhenReady_ = function startWhenReady_(runner) {
    runner.start();
  };

  /** @return {boolean} */


  AnimationRunner.prototype.hasStarted = function hasStarted() {
    return this.isActivityScheduled_(PlaybackActivity.START) || !!this.runner_ && (0, _log.dev)().assert(this.runner_).getPlayState() == _webAnimationTypes.WebAnimationPlayState.RUNNING;
  };

  /** Force-finishes all animations. */


  AnimationRunner.prototype.finish = function finish() {
    if (!this.runner_) {
      this.notifyFinish_();
    }
    this.playback_(PlaybackActivity.FINISH);
  };

  /**
   * @param {!../../amp-animation/0.1/web-animations.WebAnimationRunner} runner
   * @private
   */


  AnimationRunner.prototype.finishWhenReady_ = function finishWhenReady_(runner) {
    if (runner.getPlayState() == _webAnimationTypes.WebAnimationPlayState.RUNNING) {
      runner.finish();
    }
  };

  /** Cancels animation. */


  AnimationRunner.prototype.cancel = function cancel() {
    this.scheduledActivity_ = null;
    this.scheduledWait_ = null;

    if (this.runner_) {
      (0, _log.dev)().assert(this.runner_).cancel();
    }
  };

  /**
   * @param {!PlaybackActivity} activity
   * @param {!Promise=} opt_wait
   * @private
   */


  AnimationRunner.prototype.playback_ = function playback_(activity, opt_wait) {
    var wait = opt_wait || null;

    this.scheduledActivity_ = activity;
    this.scheduledWait_ = wait;

    if (this.runner_) {
      this.playbackWhenReady_(activity, wait);
    }
  };

  /**
   * Executes playback activity if runner is ready.
   * @param {!PlaybackActivity} activity
   * @param {?Promise} wait
   * @private
   */


  AnimationRunner.prototype.playbackWhenReady_ = function playbackWhenReady_(activity, wait) {
    var _this6 = this;

    var runner =
    /**
     * @type {!../../amp-animation/0.1/web-animations.WebAnimationRunner}
     */
    (0, _log.dev)().assert(this.runner_, 'Tried to execute playbackWhenReady_ before runner was resolved.');

    (wait || Promise.resolve()).then(function () {
      if (!_this6.isActivityScheduled_(activity)) {
        return;
      }

      _this6.scheduledActivity_ = null;
      _this6.scheduledWait_ = null;

      switch (activity) {
        case PlaybackActivity.START:
          return _this6.startWhenReady_(runner);
        case PlaybackActivity.FINISH:
          return _this6.finishWhenReady_(runner);
      }
    });
  };

  /**
   * Marks runner as ready and executes playback activity if needed.
   * @param {!../../amp-animation/0.1/web-animations.WebAnimationRunner} runner
   * @private
   */


  AnimationRunner.prototype.onRunnerReady_ = function onRunnerReady_(runner) {
    var _this7 = this;

    this.runner_ = runner;

    runner.onPlayStateChanged(function (state) {
      if (state == _webAnimationTypes.WebAnimationPlayState.FINISHED) {
        _this7.notifyFinish_();
      }
    });

    if (!this.isActivityScheduled_()) {
      return;
    }

    this.playbackWhenReady_(
    /** @type {!PlaybackActivity} */this.scheduledActivity_, this.scheduledWait_);
  };

  /**
   * @param {!PlaybackActivity=} opt_activity
   * @return {boolean}
   * @private
   */


  AnimationRunner.prototype.isActivityScheduled_ = function isActivityScheduled_(opt_activity) {
    if (!opt_activity) {
      return this.scheduledActivity_ !== null;
    }
    return this.scheduledActivity_ === opt_activity;
  };

  /** @private */


  AnimationRunner.prototype.notifyFinish_ = function notifyFinish_() {
    if (this.target_.id) {
      this.sequence_.notifyFinish(this.target_.id);
    }
  };

  return AnimationRunner;
}();

// TODO(alanorozco): Looping animations
/** Manager for animations in story pages. */


var AnimationManager = exports.AnimationManager = function () {
  /**
   * @param {!Element} root
   * @param {!../../../src/service/ampdoc-impl.AmpDoc} ampdoc
   */
  function AnimationManager(root, ampdoc) {
    _classCallCheck(this, AnimationManager);

    (0, _log.dev)().assert(hasAnimations(root));

    /** @private @const */
    this.root_ = root;

    /** @private @const */
    this.ampdoc_ = ampdoc;

    /** @private @const */
    this.vsync_ = _services.Services.vsyncFor(this.ampdoc_.win);

    /** @private @const */
    this.resources_ = _services.Services.resourcesForDoc(this.ampdoc_);

    /** @private @const */
    this.timer_ = _services.Services.timerFor(this.ampdoc_.win);

    /** @private @const */
    this.builderPromise_ = this.createAnimationBuilderPromise_();

    /** @private {?Array<!Promise<!AnimationRunner>>} */
    this.runners_ = null;

    /** @private */
    this.sequence_ = AnimationSequence.create();
  }

  /**
   * Decouples constructor so it can be stubbed in tests.
   * @param {!Element} root
   * @param {!../../../src/service/ampdoc-impl.AmpDoc} ampdoc
   * @param {string} unusedBaseUrl
   * @return {!AnimationManager}
   */


  AnimationManager.create = function create(root, ampdoc, unusedBaseUrl) {
    return new AnimationManager(root, ampdoc);
  };

  /**
   * Applies first frame to target element before starting animation.
   * @return {!Promise}
   */


  AnimationManager.prototype.applyFirstFrame = function applyFirstFrame() {
    return Promise.all(this.getOrCreateRunners_().map(function (runner) {
      return runner.applyFirstFrame();
    }));
  };

  /** Starts all entrance animations for the page. */


  AnimationManager.prototype.animateIn = function animateIn() {
    this.getRunners_().forEach(function (runner) {
      return runner.start();
    });
  };

  /** Skips all entrance animations for the page. */


  AnimationManager.prototype.finishAll = function finishAll() {
    this.getRunners_().forEach(function (runner) {
      return runner.finish();
    });
  };

  /** Cancels all entrance animations for the page. */


  AnimationManager.prototype.cancelAll = function cancelAll() {
    if (!this.runners_) {
      // nothing to cancel when the first frame has not been applied yet.
      return;
    }
    this.getRunners_().forEach(function (runner) {
      return runner.cancel();
    });
  };

  /** Determines if there is an entrance animation running. */


  AnimationManager.prototype.hasAnimationStarted = function hasAnimationStarted() {
    return this.getRunners_().some(function (runner) {
      return runner.hasStarted();
    });
  };

  /** @private */


  AnimationManager.prototype.getRunners_ = function getRunners_() {
    return (0, _log.dev)().assert(this.runners_, 'Executed before applyFirstFrame');
  };

  /**
   * @return {!Array<!AnimationRunner>}
   * @private
   */


  AnimationManager.prototype.getOrCreateRunners_ = function getOrCreateRunners_() {
    var _this8 = this;

    if (!this.runners_) {
      this.runners_ = Array.prototype.map.call((0, _dom.scopedQuerySelectorAll)(this.root_, ANIMATABLE_ELEMENTS_SELECTOR), function (el) {
        return _this8.createRunner_(el);
      });
    }
    return (0, _log.dev)().assert(this.runners_);
  };

  /**
   * @param {!Element} el
   * @return {!AnimationRunner}
   */


  AnimationManager.prototype.createRunner_ = function createRunner_(el) {
    var preset = this.getPreset_(el);
    var animationDef = this.createAnimationDef(el, preset);

    return new AnimationRunner(this.root_, animationDef, (0, _log.dev)().assert(this.builderPromise_), this.vsync_, this.timer_, this.sequence_);
  };

  /**
   * @param {!Element} el
   * @param {!StoryAnimationPresetDef} preset
   * @return {!StoryAnimationDef}
   */


  AnimationManager.prototype.createAnimationDef = function createAnimationDef(el, preset) {
    var animationDef = { target: el, preset: preset };

    if (el.hasAttribute(ANIMATE_IN_DURATION_ATTRIBUTE_NAME)) {
      animationDef.duration = (0, _utils.timeStrToMillis)(el.getAttribute(ANIMATE_IN_DURATION_ATTRIBUTE_NAME));
    }

    if (el.hasAttribute(ANIMATE_IN_DELAY_ATTRIBUTE_NAME)) {
      animationDef.delay = (0, _utils.timeStrToMillis)(el.getAttribute(ANIMATE_IN_DELAY_ATTRIBUTE_NAME));
    }

    if (el.hasAttribute(ANIMATE_IN_AFTER_ATTRIBUTE_NAME)) {
      var dependencyId = el.getAttribute(ANIMATE_IN_AFTER_ATTRIBUTE_NAME);

      (0, _log.user)().assertElement(this.root_.querySelector('#' + (0, _dom.escapeCssSelectorIdent)(dependencyId)), 'The attribute \'' + ANIMATE_IN_AFTER_ATTRIBUTE_NAME + '\' in tag ' + ('\'' + el.tagName + '\' is set to the invalid value ') + ('\'' + dependencyId + '\'. No children of parenting \'amp-story-page\' ') + ('exist with id ' + dependencyId + '.'));

      animationDef.startAfterId = el.getAttribute(ANIMATE_IN_AFTER_ATTRIBUTE_NAME);
    }

    return animationDef;
  };

  /**
   * @return {!Promise<!../../amp-animation/0.1/web-animations.Builder>}
   * @private
   */


  AnimationManager.prototype.createAnimationBuilderPromise_ = function createAnimationBuilderPromise_() {
    var _this9 = this;

    return _services.Services.extensionsFor(this.ampdoc_.win).installExtensionForDoc(this.ampdoc_, 'amp-animation').then(function () {
      return _services.Services.webAnimationServiceFor(_this9.ampdoc_);
    }).then(function (webAnimationService) {
      return webAnimationService.createBuilder();
    });
  };

  /**
   * @param {!Element} el
   * @return {!StoryAnimationPresetDef}
   */


  AnimationManager.prototype.getPreset_ = function getPreset_(el) {
    var name = el.getAttribute(ANIMATE_IN_ATTRIBUTE_NAME);

    return (0, _log.user)().assert(_animationPresets.PRESETS[name], 'Invalid %s preset "%s" for element %s', ANIMATE_IN_ATTRIBUTE_NAME, name, el);
  };

  return AnimationManager;
}();

/** Bus for animation sequencing. */


var AnimationSequence = function () {
  function AnimationSequence() {
    _classCallCheck(this, AnimationSequence);

    /** @private @const {!Object<string, !Promise>} */
    this.subscriptionPromises_ = (0, _object.map)();

    /** @private @const {!Object<string, !Function>} */
    this.subscriptionResolvers_ = (0, _object.map)();
  }

  /** Decouples constructor for testing. */


  AnimationSequence.create = function create() {
    return new AnimationSequence();
  };

  /**
   * Notifies dependent elements that animation has finished.
   * @param {string} id
   */


  AnimationSequence.prototype.notifyFinish = function notifyFinish(id) {
    if (id in this.subscriptionPromises_) {
      (0, _log.dev)().assert(this.subscriptionResolvers_[id])();

      delete this.subscriptionPromises_[id];
    }
  };

  /**
   * Waits for another element to finish animating.
   * @param {string} id
   * @return {!Promise<void>}
   */


  AnimationSequence.prototype.waitFor = function waitFor(id) {
    var _this10 = this;

    if (!(id in this.subscriptionPromises_)) {
      this.subscriptionPromises_[id] = new Promise(function (resolve) {
        _this10.subscriptionResolvers_[id] = resolve;
      });
    }
    return this.subscriptionPromises_[id];
  };

  return AnimationSequence;
}();

},{"../../../src/dom":48,"../../../src/log":57,"../../../src/services":72,"../../../src/style":74,"../../../src/utils/object":83,"../../amp-animation/0.1/web-animation-types":2,"./animation-presets":11,"./animation-types":12,"./utils":38}],14:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upgradeBackgroundAudio = upgradeBackgroundAudio;

var _url = require('../../../src/url');

/**
 * @const {string}
 */
var BACKGROUND_AUDIO_ELEMENT_CLASS_NAME = 'i-amphtml-story-background-audio';

/**
 * Adds support for the background-audio property on the specified element.
 * @param {!Element} element The element to upgrade with support for background
 *     audio.
 */
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function upgradeBackgroundAudio(element) {
  if (element.hasAttribute('background-audio')) {
    var audioEl = element.ownerDocument.createElement('audio');
    var audioSrc = (0, _url.assertHttpsUrl)(element.getAttribute('background-audio'), element);
    audioEl.setAttribute('src', audioSrc);
    audioEl.setAttribute('preload', 'auto');
    audioEl.setAttribute('loop', '');
    audioEl.setAttribute('autoplay', '');
    audioEl.setAttribute('muted', '');
    audioEl.classList.add(BACKGROUND_AUDIO_ELEMENT_CLASS_NAME);
    element.appendChild(audioEl);
  }
}

},{"../../../src/url":78}],15:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AmpStoryBackground = undefined;

var _services = require('../../../src/services');

var _eventHelper = require('../../../src/event-helper');

var _style = require('../../../src/style');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */

/** @const {number} */
var SWAP_TIMEOUT_MS = 500;

var BACKGROUND_CLASS = 'i-amphtml-story-background';

var BACKGROUND_CONTAINER_CLASS = 'i-amphtml-story-background-container';

var BACKGROUND_OVERLAY_CLASS = 'i-amphtml-story-background-overlay';

/**
 * @param {?string} url
 * @return {!Promise}
 */
function maybeLoadImage(url) {
  if (!url) {
    return Promise.resolve();
  }
  var img = new Image();
  img.src = url;
  return (0, _eventHelper.listenOncePromise)(img, 'load');
}

/**
 * TODO(cvializ): Investigate pre-rendering blurred backgrounds to canvas to
 * possibly improve performance?
 */

var AmpStoryBackground = exports.AmpStoryBackground = function () {
  /**
   * @param {!Window} win
   * @param {!Element} element
   */
  function AmpStoryBackground(win, element) {
    _classCallCheck(this, AmpStoryBackground);

    /* @private @const {!Element} */
    this.element_ = element;

    /* @private @const {!Window} */
    this.win_ = win;

    /* @private {number} */
    this.count_ = 0;

    /** @private @const */
    this.container_ = this.element_.ownerDocument.createElement('div');

    /** @private @const */
    this.containerOverlay_ = this.element_.ownerDocument.createElement('div');

    /** @private {!Element} */
    this.hidden_ = this.createBackground_();

    /** @private {!Element} */
    this.active_ = this.createBackground_();

    this.container_.classList.add(BACKGROUND_CONTAINER_CLASS);
    this.containerOverlay_.classList.add(BACKGROUND_OVERLAY_CLASS);

    this.container_.appendChild(this.hidden_);
    this.container_.appendChild(this.active_);
    this.container_.appendChild(this.containerOverlay_);
  }

  /**
   * @return {!Element}
   */


  AmpStoryBackground.prototype.createBackground_ = function createBackground_() {
    var bg = this.element_.ownerDocument.createElement('div');
    bg.classList.add(BACKGROUND_CLASS);
    return bg;
  };

  /**
   * Attach the backgrounds to the document.
   */


  AmpStoryBackground.prototype.attach = function attach() {
    this.element_.insertBefore(this.container_, this.element_.firstChild);
  };

  /**
   * Update the background with new background image URL.
   * @param {string} color
   * @param {?string} url
   * @param {boolean=} initial
   */


  AmpStoryBackground.prototype.setBackground = function setBackground(color, url) {
    var _this = this;

    var initial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var countAtAdd = ++this.count_;

    var whenFresh = function whenFresh(promise, callback) {
      return promise.then(function () {
        if (_this.count_ == countAtAdd) {
          callback();
        }
      });
    };

    var imgLoad = maybeLoadImage(url);
    var timeout = _services.Services.timerFor(this.win_).promise(initial ? 0 : SWAP_TIMEOUT_MS);

    var hidden = this.hidden_;

    (0, _style.setStyle)(hidden, 'background-image', 'none');

    // Image will be swapped on load.
    whenFresh(imgLoad, function () {
      (0, _style.setStyle)(hidden, 'background-image', url ? 'url(' + url + ')' : null);
    });

    // Color will always be swapped on timeout.
    whenFresh(Promise.race([imgLoad, timeout]), function () {
      (0, _style.setStyle)(hidden, 'background-color', color);
      _this.rotateActiveBackground_();
    });
  };

  /**
   * Rotates the classes on page background to bring the new bacground in foreground.
   * @private
   */


  AmpStoryBackground.prototype.rotateActiveBackground_ = function rotateActiveBackground_() {
    var newHidden = this.active_;
    this.active_ = this.hidden_;
    this.hidden_ = newHidden;
    this.active_.classList.add('active');
    this.hidden_.classList.remove('active');
  };

  return AmpStoryBackground;
}();

},{"../../../src/event-helper":51,"../../../src/services":72,"../../../src/style":74}],16:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bookend = exports.BookendConfigDef = undefined;

var _events = require('./events');

var _keyCodes = require('../../../src/utils/key-codes');

var _share = require('./share');

var _services = require('../../../src/services');

var _dom = require('../../../src/dom');

var _log = require('../../../src/log');

var _object = require('./../../../src/utils/object');

var _jsonld = require('./jsonld');

var _types = require('../../../src/types');

var _url = require('../../../src/url');

var _simpleTemplate = require('./simple-template');

var _rateLimit = require('../../../src/utils/rate-limit');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */


/**
 * @typedef {{
 *   shareProviders: (!JsonObject|undefined),
 *   relatedArticles: !Array<!./related-articles.RelatedArticleSetDef>
 * }}
 */
var BookendConfigDef = exports.BookendConfigDef = void 0;

/**
 * Scroll amount required for full-bleed in px.
 * @private @const {number}
 */
var FULLBLEED_THRESHOLD = 88;

/** @private @const {string} */
var FULLBLEED_CLASSNAME = 'i-amphtml-story-bookend-fullbleed';

/** @private @const {string} */
var HIDDEN_CLASSNAME = 'i-amphtml-hidden';

/** @private @const {!./simple-template.ElementDef} */
var ROOT_TEMPLATE = {
  tag: 'section',
  attrs: (0, _object.dict)({
    'class': 'i-amphtml-story-bookend i-amphtml-story-system-reset ' + HIDDEN_CLASSNAME }),
  children: [
  // Overflow container that gets pushed to the bottom when content height is
  // smaller than viewport.
  {
    tag: 'div',
    attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-bookend-overflow' }),
    children: [
    // Holds bookend content.
    {
      tag: 'div',
      attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-bookend-inner' })
    }]
  }]
};

/** @private @const {!./simple-template.ElementDef} */
var REPLAY_ICON_TEMPLATE = {
  tag: 'div',
  attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-bookend-replay-icon' })
};

/**
 * @param {!./related-articles.RelatedArticleDef} articleData
 * @return {!./simple-template.ElementDef}
 */
function buildArticleTemplate(articleData) {
  var template = /** @type {!./simple-template.ElementDef} */{
    tag: 'a',
    attrs: (0, _object.dict)({
      'class': 'i-amphtml-story-bookend-article',
      'href': articleData.url,
      'target': '_top'
    }),
    children: [{
      tag: 'h2',
      attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-bookend-article-heading' }),
      text: articleData.title
    }, {
      tag: 'div',
      attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-bookend-article-meta' }),
      text: articleData.domainName
    }]
  };

  if (articleData.image) {
    template.children.unshift( /** @type {!./simple-template.ElementDef} */{
      tag: 'amp-img',
      attrs: (0, _object.dict)({
        'class': 'i-amphtml-story-bookend-article-image',
        'src': articleData.image,
        'width': 100,
        'height': 100
      })
    });
  }

  return template;
}

/**
 * @param {!Array<!./related-articles.RelatedArticleSetDef>} articleSets
 * @return {!Array<!./simple-template.ElementDef>}
 */
function buildArticlesContainerTemplate(articleSets) {
  var template = [];

  articleSets.forEach(function (articleSet) {
    if (articleSet.heading) {
      template.push({
        tag: 'h3',
        attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-bookend-heading' }),
        text: articleSet.heading
      });
    }
    template.push({
      tag: 'div',
      attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-bookend-article-set' }),
      children: articleSet.articles.map(function (article) {
        return buildArticleTemplate(article);
      })
    });
  });

  return template;
}

/**
 * @param {!Document} doc
 * @param {string} title
 * @param {string} domainName
 * @param {string=} opt_imageUrl
 * @return {!./simple-template.ElementDef}
 */
function buildReplayButtonTemplate(doc, title, domainName, opt_imageUrl) {
  return (/** @type {!./simple-template.ElementDef} */{
      tag: 'div',
      attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-bookend-replay' }),
      children: [!opt_imageUrl ? REPLAY_ICON_TEMPLATE : {
        tag: 'div',
        attrs: (0, _object.dict)({
          'class': 'i-amphtml-story-bookend-replay-image',
          'style': 'background-image: url(' + opt_imageUrl + ') !important'
        }),
        children: [REPLAY_ICON_TEMPLATE]
      }, {
        tag: 'h2',
        attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-bookend-article-heading' }),
        text: title
      }, {
        tag: 'div',
        attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-bookend-article-meta' }),
        text: domainName
      }]
    }
  );
}

/**
 * Bookend component for <amp-story>.
 */

var Bookend = exports.Bookend = function () {
  /**
   * @param {!Window} win
   */
  function Bookend(win) {
    _classCallCheck(this, Bookend);

    /** @private @const {!Window} */
    this.win_ = win;

    /** @private {boolean} */
    this.isBuilt_ = false;

    /** @private {?Element} */
    this.root_ = null;

    /** @private {?Element} */
    this.replayBtn_ = null;

    /** @private {?Element} */
    this.closeBtn_ = null;

    /** @private {!ScrollableShareWidget} */
    this.shareWidget_ = _share.ScrollableShareWidget.create(win);
  }

  /**
   * @param {!../../../src/service/ampdoc-impl.AmpDoc} ampdoc
   * @return {!Element}
   */


  Bookend.prototype.build = function build(ampdoc) {
    if (this.isBuilt_) {
      return this.getRoot();
    }

    this.isBuilt_ = true;

    this.root_ = (0, _simpleTemplate.renderAsElement)(this.win_.document, ROOT_TEMPLATE);

    this.replayBtn_ = this.buildReplayButton_(ampdoc);

    this.getInnerContainer_().appendChild(this.replayBtn_);
    this.getInnerContainer_().appendChild(this.shareWidget_.build(ampdoc));

    this.attachEvents_();

    return this.getRoot();
  };

  /** @private */


  Bookend.prototype.attachEvents_ = function attachEvents_() {
    var _this = this;

    // TODO(alanorozco): Listen to tap event properly (i.e. fastclick)
    this.root_.addEventListener('click', function (e) {
      return _this.maybeClose_(e);
    });
    this.replayBtn_.addEventListener('click', function (e) {
      return _this.onReplayBtnClick_(e);
    });

    this.getOverflowContainer_().addEventListener('scroll',
    // minInterval is high since this is a step function that does not
    // require smoothness
    (0, _rateLimit.throttle)(this.win_, function () {
      return _this.onScroll_();
    }, 100));

    this.win_.addEventListener('keyup', function (e) {
      if (!_this.isActive()) {
        return;
      }
      if (e.keyCode == _keyCodes.KeyCodes.ESCAPE) {
        e.preventDefault();
        _this.dispatchClose_();
      }
    });
  };

  /** @return {boolean} */


  Bookend.prototype.isActive = function isActive() {
    return this.isBuilt() && !this.getRoot().classList.contains(HIDDEN_CLASSNAME);
  };

  /**
   * @param {!Event} e
   * @private
   */


  Bookend.prototype.onReplayBtnClick_ = function onReplayBtnClick_(e) {
    e.stopPropagation();
    (0, _events.dispatch)(this.getRoot(), _events.EventType.REPLAY, /* opt_bubbles */true);
  };

  /**
   * Closes bookend if tapping outside usable area.
   * @param {!Event} e
   * @private
   */


  Bookend.prototype.maybeClose_ = function maybeClose_(e) {
    if (this.elementOutsideUsableArea_((0, _log.dev)().assertElement(e.target))) {
      e.stopPropagation();
      this.dispatchClose_();
    }
  };

  /** @private */


  Bookend.prototype.dispatchClose_ = function dispatchClose_() {
    (0, _events.dispatch)(this.getRoot(), _events.EventType.CLOSE_BOOKEND, /* opt_bubbles */true);
  };

  /**
   * @param {!Element} el
   * @return {boolean}
   */


  Bookend.prototype.elementOutsideUsableArea_ = function elementOutsideUsableArea_(el) {
    var _this2 = this;

    return !(0, _dom.closest)(el, function (el) {
      return el == _this2.getInnerContainer_();
    });
  };

  /**
   * Changes between card view and full-bleed based on scroll position.
   * @private
   */


  Bookend.prototype.onScroll_ = function onScroll_() {
    var _this3 = this;

    if (!this.isActive()) {
      return;
    }
    _services.Services.vsyncFor(this.win_).run({
      measure: function measure(state) {
        state.shouldBeFullBleed = _this3.getOverflowContainer_(). /*OK*/scrollTop >= FULLBLEED_THRESHOLD;
      },
      mutate: function mutate(state) {
        _this3.getRoot().classList.toggle(FULLBLEED_CLASSNAME, state.shouldBeFullBleed);
      }
    }, {});
  };

  /** Hides bookend with a transition. */


  Bookend.prototype.hide = function hide() {
    this.toggle_(false);
  };

  /** Shows bookend with a transition. */


  Bookend.prototype.show = function show() {
    this.toggle_(true);
  };

  /**
   * @param {boolean} show
   * @private
   */


  Bookend.prototype.toggle_ = function toggle_(show) {
    var _this4 = this;

    _services.Services.vsyncFor(this.win_).mutate(function () {
      _this4.getRoot().classList.toggle(HIDDEN_CLASSNAME, !show);
    });
  };

  /**
   * @retun {boolean}
   */


  Bookend.prototype.isBuilt = function isBuilt() {
    return this.isBuilt_;
  };

  /** @private */


  Bookend.prototype.assertBuilt_ = function assertBuilt_() {
    (0, _log.dev)().assert(this.isBuilt(), 'Bookend component needs to be built.');
  };

  /**
   * @param {!BookendConfigDef} bookendConfig
   */


  Bookend.prototype.setConfig = function setConfig(bookendConfig) {
    this.assertBuilt_();

    if (bookendConfig.shareProviders) {
      this.shareWidget_.setProviders((0, _log.dev)().assert(bookendConfig.shareProviders));
    }

    this.setRelatedArticles_(bookendConfig.relatedArticles);
  };

  /**
   * @param {!Array<!./related-articles.RelatedArticleSetDef>} articleSets
   * @private
   */


  Bookend.prototype.setRelatedArticles_ = function setRelatedArticles_(articleSets) {
    this.getInnerContainer_().appendChild((0, _simpleTemplate.renderSimpleTemplate)(this.win_.document, buildArticlesContainerTemplate(articleSets)));
  };

  /** @return {!Element} */


  Bookend.prototype.getRoot = function getRoot() {
    this.assertBuilt_();
    return (0, _log.dev)().assertElement(this.root_);
  };

  /**
   * Gets container for bookend content.
   * @return {!Element}
   * @private
   */


  Bookend.prototype.getInnerContainer_ = function getInnerContainer_() {
    return (0, _log.dev)().assertElement(this.getOverflowContainer_().firstElementChild);
  };

  /**
   * Gets outer container that gets scrolled.
   * @return {!Element}
   * @private
   */


  Bookend.prototype.getOverflowContainer_ = function getOverflowContainer_() {
    return (0, _log.dev)().assertElement(this.getRoot().firstElementChild);
  };

  /**
   * @param {!../../../src/service/ampdoc-impl.AmpDoc} ampdoc
   * @return {{
   *   title: string,
   *   domainName: string,
   *   imageUrl: (string|undefined),
   * }}
   * @private
   */


  Bookend.prototype.getStoryMetadata_ = function getStoryMetadata_(ampdoc) {
    var jsonLd = (0, _jsonld.getJsonLd)(ampdoc.getRootNode());

    var metadata = {
      title: jsonLd && jsonLd['headline'] ? jsonLd['headline'] : (0, _log.user)().assertElement(this.win_.document.head.querySelector('title'), 'Please set <title> or structured data (JSON-LD).').textContent,

      domainName: (0, _url.parseUrl)(_services.Services.documentInfoForDoc(ampdoc).canonicalUrl).hostname
    };

    if (jsonLd && (0, _types.isArray)(jsonLd['image']) && jsonLd['image'].length) {
      (0, _log.user)().assert((0, _url.isProtocolValid)(jsonLd['image']), 'Unsupported protocol for story image URL ' + jsonLd['image']);
      metadata.imageUrl = jsonLd['image'][0];
    }

    return metadata;
  };

  /**
   * @param {!../../../src/service/ampdoc-impl.AmpDoc} ampdoc
   * @return {!Element}
   * @private
   */


  Bookend.prototype.buildReplayButton_ = function buildReplayButton_(ampdoc) {
    var metadata = this.getStoryMetadata_(ampdoc);
    return (0, _simpleTemplate.renderAsElement)(this.win_.document, buildReplayButtonTemplate(this.win_.document, metadata.title, metadata.domainName, metadata.imageUrl));
  };

  return Bookend;
}();

},{"../../../src/dom":48,"../../../src/log":57,"../../../src/services":72,"../../../src/types":75,"../../../src/url":78,"../../../src/utils/key-codes":82,"../../../src/utils/rate-limit":84,"./../../../src/utils/object":83,"./events":20,"./jsonld":21,"./share":33,"./simple-template":34}],17:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var BLANK_AUDIO_SRC = exports.BLANK_AUDIO_SRC = 'data:audio/wav;base64,UklGRjIAAABXQVZFZm10IBA' + 'AAAABAAEAIlYAAESsAAACABAAZGF0YRAAAAAAAAAAAAAAAAAAAAAAAA==';

var BLANK_VIDEO_SRC = exports.BLANK_VIDEO_SRC = 'data:video/mp4;base64,AAAAHGZ0eXBNNFYgAAACAG' + 'lzb21pc28yYXZjMQAAAAhmcmVlAAAGF21kYXTeBAAAbGliZmFhYyAxLjI4AABCAJMgBDIARw' + 'AAArEGBf//rdxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNDIgcjIgOTU2YzhkOCAtIE' + 'guMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTQgLSBodHRwOi8vd3' + 'd3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0zIGRlYm' + 'xvY2s9MTowOjAgYW5hbHlzZT0weDE6MHgxMTEgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3' + 'JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbG' + 'lzPTEgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV' + '9xcF9vZmZzZXQ9LTIgdGhyZWFkcz02IGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3Rocm' + 'VhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb2' + '5zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTI1MCBrZXlpbn' + 'RfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcm' + 'M9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcH' + 'N0ZXA9NCB2YnZfbWF4cmF0ZT03NjggdmJ2X2J1ZnNpemU9MzAwMCBjcmZfbWF4PTAuMCBuYW' + 'xfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAFZliIQL8m' + 'KAAKvMnJycnJycnJycnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' + 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXiEASZACGQAjgCEASZACGQAjgAAAAAdBmjgX4G' + 'SAIQBJkAIZACOAAAAAB0GaVAX4GSAhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpgL8DJIQBJkA' + 'IZACOAIQBJkAIZACOAAAAABkGagC/AySEASZACGQAjgAAAAAZBmqAvwMkhAEmQAhkAI4AhAE' + 'mQAhkAI4AAAAAGQZrAL8DJIQBJkAIZACOAAAAABkGa4C/AySEASZACGQAjgCEASZACGQAjgA' + 'AAAAZBmwAvwMkhAEmQAhkAI4AAAAAGQZsgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGbQC' + '/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm2AvwMkhAEmQAhkAI4AAAAAGQZuAL8DJIQBJkA' + 'IZACOAIQBJkAIZACOAAAAABkGboC/AySEASZACGQAjgAAAAAZBm8AvwMkhAEmQAhkAI4AhAE' + 'mQAhkAI4AAAAAGQZvgL8DJIQBJkAIZACOAAAAABkGaAC/AySEASZACGQAjgCEASZACGQAjgA' + 'AAAAZBmiAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpAL8DJIQBJkAIZACOAAAAABkGaYC' + '/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmoAvwMkhAEmQAhkAI4AAAAAGQZqgL8DJIQBJkA' + 'IZACOAIQBJkAIZACOAAAAABkGawC/AySEASZACGQAjgAAAAAZBmuAvwMkhAEmQAhkAI4AhAE' + 'mQAhkAI4AAAAAGQZsAL8DJIQBJkAIZACOAAAAABkGbIC/AySEASZACGQAjgCEASZACGQAjgA' + 'AAAAZBm0AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZtgL8DJIQBJkAIZACOAAAAABkGbgC' + 'vAySEASZACGQAjgCEASZACGQAjgAAAAAZBm6AnwMkhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAh' + 'kAI4AhAEmQAhkAI4AAAAhubW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAABDcAAQAAAQ' + 'AAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAzB0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAA' + 'AAAAAAA+kAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAA' + 'BAAAAAALAAAACQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPpAAAAAAABAAAAAAKobW' + 'RpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAB1MAAAdU5VxAAAAAAALWhkbHIAAAAAAAAAAHZpZG' + 'UAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACU21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAA' + 'AAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAhNzdGJsAAAAr3N0c2QAAA' + 'AAAAAAAQAAAJ9hdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAALAAkABIAAAASAAAAAAAAA' + 'ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAALWF2Y0MBQsAN/+EAFW' + 'dCwA3ZAsTsBEAAAPpAADqYA8UKkgEABWjLg8sgAAAAHHV1aWRraEDyXyRPxbo5pRvPAyPzAA' + 'AAAAAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2' + 'MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAADDwAAAAsAAAALAA' + 'AACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAA' + 'oAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAA' + 'AAiHN0Y28AAAAAAAAAHgAAAEYAAANnAAADewAAA5gAAAO0AAADxwAAA+MAAAP2AAAEEgAABC' + 'UAAARBAAAEXQAABHAAAASMAAAEnwAABLsAAATOAAAE6gAABQYAAAUZAAAFNQAABUgAAAVkAA' + 'AFdwAABZMAAAWmAAAFwgAABd4AAAXxAAAGDQAABGh0cmFrAAAAXHRraGQAAAADAAAAAAAAAA' + 'AAAAACAAAAAAAABDcAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAA' + 'AAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAQkAAADcAABAA' + 'AAAAPgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAC7gAAAykBVxAAAAAAALWhkbHIAAAAAAA' + 'AAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAADi21pbmYAAAAQc21oZAAAAAAAAA' + 'AAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAADT3N0YmwAAABnc3RzZA' + 'AAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAA' + 'AAA4CAgCIAAgAEgICAFEAVBbjYAAu4AAAADcoFgICAAhGQBoCAgAECAAAAIHN0dHMAAAAAAA' + 'AAAgAAADIAAAQAAAAAAQAAAkAAAAFUc3RzYwAAAAAAAAAbAAAAAQAAAAEAAAABAAAAAgAAAA' + 'IAAAABAAAAAwAAAAEAAAABAAAABAAAAAIAAAABAAAABgAAAAEAAAABAAAABwAAAAIAAAABAA' + 'AACAAAAAEAAAABAAAACQAAAAIAAAABAAAACgAAAAEAAAABAAAACwAAAAIAAAABAAAADQAAAA' + 'EAAAABAAAADgAAAAIAAAABAAAADwAAAAEAAAABAAAAEAAAAAIAAAABAAAAEQAAAAEAAAABAA' + 'AAEgAAAAIAAAABAAAAFAAAAAEAAAABAAAAFQAAAAIAAAABAAAAFgAAAAEAAAABAAAAFwAAAA' + 'IAAAABAAAAGAAAAAEAAAABAAAAGQAAAAIAAAABAAAAGgAAAAEAAAABAAAAGwAAAAIAAAABAA' + 'AAHQAAAAEAAAABAAAAHgAAAAIAAAABAAAAHwAAAAQAAAABAAAA4HN0c3oAAAAAAAAAAAAAAD' + 'MAAAAaAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAA' + 'AACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAA' + 'kAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAA' + 'AACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAACMc3RjbwAAAA' + 'AAAAAfAAAALAAAA1UAAANyAAADhgAAA6IAAAO+AAAD0QAAA+0AAAQAAAAEHAAABC8AAARLAA' + 'AEZwAABHoAAASWAAAEqQAABMUAAATYAAAE9AAABRAAAAUjAAAFPwAABVIAAAVuAAAFgQAABZ' + '0AAAWwAAAFzAAABegAAAX7AAAGFwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAA' + 'AAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYX' + 'ZmNTUuMzMuMTAw';

},{}],18:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DevelopmentModeLog = exports.DevelopmentModeLogButtonSet = undefined;

var _log = require('../../../src/log');

var _services = require('../../../src/services');

var _types = require('../../../src/types');

var _dom = require('../../../src/dom');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */


/**
 * @param {!../../../src/service/vsync-impl.Vsync} vsync
 * @param {!Element} el
 * @param {boolean} isHidden
 */
function toggleHiddenAttribute(vsync, el, isHidden) {
  vsync.mutate(function () {
    if (isHidden) {
      el.setAttribute('hidden', 'hidden');
    } else {
      el.removeAttribute('hidden');
    }
  });
}

/**
 * @param {!Window} win
 * @param {string|!Array<string>} classNameOrList
 * @param {function(Event)} handler
 * @return {!Element}
 */
function createButton(win, classNameOrList, handler) {
  var button = win.document.createElement('div');
  button.setAttribute('role', 'button');

  if ((0, _types.isArray)(classNameOrList)) {
    classNameOrList.forEach(function (className) {
      return button.classList.add(className);
    });
  } else {
    button.classList.add( /** @type {string} */classNameOrList);
  }
  button.classList.add('i-amphtml-story-button');
  button.addEventListener('click', handler);
  return button;
}

var DevelopmentModeLogButtonSet = exports.DevelopmentModeLogButtonSet = function () {
  /**
   * @param {!Window} win
   */
  function DevelopmentModeLogButtonSet(win) {
    _classCallCheck(this, DevelopmentModeLogButtonSet);

    /** @private @const {!Window} */
    this.win_ = win;

    /** @private {?Element} */
    this.root_ = null;

    /** @private {?Element} */
    this.errorButton_ = null;

    /** @private {?Element} */
    this.warningButton_ = null;

    /** @private {?Element} */
    this.successButton_ = null;
  }

  /**
   * @param {!Window} win
   */


  DevelopmentModeLogButtonSet.create = function create(win) {
    return new DevelopmentModeLogButtonSet(win);
  };

  /**
   * Builds the developer log button set element.
   * @param {function()} logButtonActionFn A callback function to be invoked when
   *     the log buttons are clicked.
   * @return {?Element}
   */


  DevelopmentModeLogButtonSet.prototype.build = function build(logButtonActionFn) {
    this.errorButton_ = createButton(this.win_, ['i-amphtml-story-error-button', 'i-amphtml-story-dev-logs-button'], function () {
      return logButtonActionFn();
    });

    this.warningButton_ = createButton(this.win_, ['i-amphtml-story-warning-button', 'i-amphtml-story-dev-logs-button'], function () {
      return logButtonActionFn();
    });

    this.successButton_ = createButton(this.win_, ['i-amphtml-story-success-button', 'i-amphtml-story-dev-logs-button'], function () {
      return logButtonActionFn();
    });

    this.root_ = this.win_.document.createElement('div');
    this.root_.appendChild(this.errorButton_);
    this.root_.appendChild(this.warningButton_);
    this.root_.appendChild(this.successButton_);

    return this.root_;
  };

  /**
   * Gets the button associated to a given log entry.
   * @param {!./logging.AmpStoryLogEntryDef} logEntry The log entry for which
   *     the associated button shouldbe retrieved.
   * @return {?Element} The button associated to the specified log entry, if one
   *     exists.
   * @private
   */


  DevelopmentModeLogButtonSet.prototype.getButtonForLogEntry_ = function getButtonForLogEntry_(logEntry) {
    if (logEntry.conforms) {
      return this.successButton_;
    }

    switch (logEntry.level) {
      case _log.LogLevel.ERROR:
        return this.errorButton_;
      case _log.LogLevel.WARN:
        return this.warningButton_;
      default:
        return null;
    }
  };

  /**
   * Logs an individual entry into the developer log.
   * @param {!./logging.AmpStoryLogEntryDef} logEntry The entry to log.
   */


  DevelopmentModeLogButtonSet.prototype.log = function log(logEntry) {
    var button = this.getButtonForLogEntry_(logEntry);
    if (!button) {
      return;
    }

    var oldCount = parseInt(button.getAttribute('data-count') || 0, 10);
    button.setAttribute('data-count', oldCount + 1);
  };

  /**
   * Clears any error state held by the buttons.
   */


  DevelopmentModeLogButtonSet.prototype.clear = function clear() {
    this.errorButton_.setAttribute('data-count', 0);
    this.warningButton_.setAttribute('data-count', 0);
    this.successButton_.setAttribute('data-count', 0);
  };

  return DevelopmentModeLogButtonSet;
}();

/**
 * Development mode log for <amp-story>.
 */


var DevelopmentModeLog = exports.DevelopmentModeLog = function () {
  /**
   * @param {!Window} win
   */
  function DevelopmentModeLog(win) {
    _classCallCheck(this, DevelopmentModeLog);

    /** @private @const {!Window} */
    this.win_ = win;

    /** @private {boolean} */
    this.isBuilt_ = false;

    /** @private {?Element} */
    this.root_ = null;

    /** @private {?Element} */
    this.errorButton_ = null;

    /** @private {?Element} */
    this.warningButton_ = null;

    /** @private {?Element} */
    this.successButton_ = null;

    /** @private {?Element} */
    this.entriesEl_ = null;

    /** @private {?Element} */
    this.contextStringEl_ = null;
  }

  /**
   * @param {!Window} win
   */


  DevelopmentModeLog.create = function create(win) {
    return new DevelopmentModeLog(win);
  };

  /**
   * Builds the developer log element.
   * @return {?Element}
   */


  DevelopmentModeLog.prototype.build = function build() {
    var _this = this;

    this.contextStringEl_ = this.win_.document.createElement('span');
    this.contextStringEl_.classList.add('i-amphtml-story-developer-log-context');
    var titleEl = this.win_.document.createElement('div');
    titleEl.textContent = 'Developer logs for page ';
    titleEl.appendChild(this.contextStringEl_);

    var closeDeveloperLogEl = createButton(this.win_, 'i-amphtml-story-developer-log-close', function () {
      return _this.hide();
    });

    var headerEl = this.win_.document.createElement('div');
    headerEl.classList.add('i-amphtml-story-developer-log-header');
    headerEl.appendChild(titleEl);
    headerEl.appendChild(closeDeveloperLogEl);

    this.entriesEl_ = this.win_.document.createElement('ul');
    this.entriesEl_.classList.add('i-amphtml-story-developer-log-entries');

    this.root_ = this.win_.document.createElement('div');
    this.root_.classList.add('i-amphtml-story-developer-log');
    this.root_.setAttribute('hidden', '');
    this.root_.appendChild(headerEl);
    this.root_.appendChild(this.entriesEl_);

    this.clear();
    return this.root_;
  };

  /**
   * @param {!LogLevel} logLevel
   * @return {?string} The CSS class to be applied to the log entry, given the
   *     specified log level, or null if no class should be added.
   * @private
   */


  DevelopmentModeLog.prototype.getCssLogLevelClass_ = function getCssLogLevelClass_(logLevel) {
    switch (logLevel) {
      case _log.LogLevel.WARN:
        return 'i-amphtml-story-developer-log-entry-warning';
      case _log.LogLevel.ERROR:
        return 'i-amphtml-story-developer-log-entry-error';
      default:
        return null;
    }
  };

  /**
   * @param {boolean} conforms Whether the log entry is for an element that
   *     conforms to a best practice.
   * @return {?string} The CSS class to be applied to the log entry, given the
   *     element's conformance to a best practice, or null if no class should be
   *     added.
   * @private
   */


  DevelopmentModeLog.prototype.getCssConformanceClass_ = function getCssConformanceClass_(conforms) {
    if (conforms) {
      return 'i-amphtml-story-developer-log-entry-success';
    }

    return null;
  };

  /**
   * @param {!./logging.AmpStoryLogEntryDef} logEntry The entry to be logged.
   */


  DevelopmentModeLog.prototype.log = function log(logEntry) {
    var logLevelClass = this.getCssLogLevelClass_(logEntry.level);
    var conformanceClass = this.getCssConformanceClass_(logEntry.conforms);

    var logEntryUi = this.win_.document.createElement('li');
    logEntryUi.classList.add('i-amphtml-story-developer-log-entry');

    if (logLevelClass) {
      logEntryUi.classList.add(logLevelClass);
    }

    if (conformanceClass) {
      logEntryUi.classList.add(conformanceClass);
    }

    logEntryUi.textContent = logEntry.message;
    this.entriesEl_.appendChild(logEntryUi);
  };

  /**
   * Clears all entries from the developer logs.
   */


  DevelopmentModeLog.prototype.clear = function clear() {
    var _this2 = this;

    _services.Services.vsyncFor(this.win_).mutate(function () {
      (0, _dom.removeChildren)((0, _log.dev)().assertElement(_this2.entriesEl_));
    });
  };

  /**
   * Sets the string providing context for the developer logs window.  This is
   * often the name or ID of the element that all logs are for (e.g. the page).
   * @param {string} contextString
   */


  DevelopmentModeLog.prototype.setContextString = function setContextString(contextString) {
    this.contextStringEl_.textContent = contextString;
  };

  /**
   * Toggles the visibility of the developer log.
   */


  DevelopmentModeLog.prototype.toggle = function toggle() {
    var newHiddenState = !this.root_.hasAttribute('hidden');
    toggleHiddenAttribute(_services.Services.vsyncFor(this.win_), (0, _log.dev)().assertElement(this.root_), newHiddenState);
  };

  /**
   * Hides the developer log in the UI.
   */


  DevelopmentModeLog.prototype.hide = function hide() {
    toggleHiddenAttribute(_services.Services.vsyncFor(this.win_), (0, _log.dev)().assertElement(this.root_),
    /* isHidden */true);
  };

  return DevelopmentModeLog;
}();

},{"../../../src/dom":48,"../../../src/log":57,"../../../src/services":72,"../../../src/types":75}],19:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmbedMode = undefined;
exports.parseEmbedMode = parseEmbedMode;

var _types = require('../../../src/types');

var _url = require('../../../src/url');

/**
 * Embed mode for AMP story.  See ../embed-modes.md for details.
 * @enum {number}
 */
/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var EmbedMode = exports.EmbedMode = {
  /**
   * Default mode.
   */
  NOT_EMBEDDED: 0,

  /**
   * TBD embed mode.
   *
   * This differs from the NOT_EMBEDDED embed mode in the following ways:
   * - Hides bookend
   * - Hides all system layer buttons
   * - Disables swipe-based user education
   * - Disallows ads
   * - Unmutes audio in the story by default
   */
  NAME_TBD: 1
};

/**
 * @param {string} str
 * @return {!EmbedMode}
 * @private
 */
function parseEmbedMode(str) {
  var params = (0, _url.parseQueryString)(str);
  var unsanitizedEmbedMode = params['embedMode'];
  var embedModeIndex = parseInt(unsanitizedEmbedMode, 10);

  return (0, _types.isEnumValue)(EmbedMode, embedModeIndex) ? /** @type {!EmbedMode} */embedModeIndex : EmbedMode.NOT_EMBEDDED;
}

},{"../../../src/types":75,"../../../src/url":78}],20:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventType = undefined;
exports.dispatch = dispatch;
exports.dispatchCustom = dispatchCustom;

var _eventHelper = require('../../../src/event-helper');

/** @const {!Object<string, string>} */
var EventType = exports.EventType = {
  // Triggered when the bookend should be opened
  SHOW_BOOKEND: 'ampstory:showbookend',

  // Triggered when the user clicks the close bookend button
  CLOSE_BOOKEND: 'ampstory:closebookend',

  // Triggered when the user mutes the story
  MUTE: 'ampstory:mute',

  // Triggered when the user unmutes the story
  UNMUTE: 'ampstory:unmute',

  // Triggered when there are audio sources playing on the active page
  AUDIO_PLAYING: 'ampstory:audioplaying',

  // Triggered when there are no audio sources playing on the active page
  AUDIO_STOPPED: 'ampstory:audiostopped',

  // Triggered when the story should switch to a specified page
  SWITCH_PAGE: 'ampstory:switchpage',

  // Triggered when the story should switch to the previous page
  PREVIOUS_PAGE: 'ampstory:previouspage',

  // Triggered when the story should switch to the next page
  NEXT_PAGE: 'ampstory:nextpage',

  // Triggered when the story should navigate after a tap on active page.
  TAP_NAVIGATION: 'ampstory:tapnavigation',

  // Triggered when a page updates its progress
  PAGE_PROGRESS: 'ampstory:pageprogress',

  // Triggered when the story should be replayed
  REPLAY: 'ampstory:replay',

  // DEVELOPMENT MODE ONLY: Triggered when a story page has log entries (e.g.
  // warnings or errors).
  DEV_LOG_ENTRIES_AVAILABLE: 'ampstory:devlogentriesavailable',

  // Triggered when user clicks on left 25% of the first page
  SHOW_NO_PREVIOUS_PAGE_HELP: 'ampstory:shownopreviouspagehelp',

  // Triggered when a story has loaded at least its initial set of pages.
  STORY_LOADED: 'ampstory:load',

  // Triggered when a page has loaded at least one frame of all of its media.
  PAGE_LOADED: 'ampstory:pageload'
};

/**
 * @param {!EventTarget} source
 * @param {string} eventName
 * @param {boolean=} opt_bubbles
 */
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function dispatch(source, eventName, opt_bubbles) {
  var event = new Event(eventName, { bubbles: !!opt_bubbles });
  if (event.initEvent) {
    event.initEvent(eventName, /* bubbles */!!opt_bubbles,
    /* cancelable */false);
  }
  source.dispatchEvent(event);
}

/**
 * @param {!Window} win
 * @param {!EventTarget} source
 * @param {string} eventName
 * @param {!Object} payload
 * @param {!CustomEventInit=} opt_eventInit
 */
function dispatchCustom(win, source, eventName, payload, opt_eventInit) {
  var event = (0, _eventHelper.createCustomEvent)(win, eventName, payload, opt_eventInit);
  source.dispatchEvent(event);
}

},{"../../../src/event-helper":51}],21:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJsonLd = getJsonLd;

var _dom = require('../../../src/dom');

var _json = require('../../../src/json');

var _log = require('../../../src/log');

var TAG = 'getJsonLd';

/**
 * @param {!Node} root
 * @return {?JsonObject}
 */
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function getJsonLd(root) {
  var scriptTag = root.querySelector('script[type="application/ld+json"]');

  if (!scriptTag || !(0, _dom.isJsonLdScriptTag)(scriptTag)) {
    return null;
  }

  return (0, _json.tryParseJson)(scriptTag.textContent, function (e) {
    (0, _log.user)().error(TAG, 'Failed to parse ld+json. Is it valid JSON?', e);
  }) || null;
}

},{"../../../src/dom":48,"../../../src/json":55,"../../../src/log":57}],22:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingSpinner = undefined;

var _log = require('../../../src/log');

var _object = require('./../../../src/utils/object');

var _simpleTemplate = require('./simple-template');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */


/** @const {string} */
var SPINNER_ACTIVE_ATTRIBUTE = 'active';

/** @private @const {!./simple-template.ElementDef} */
var SPINNER = {
  tag: 'div',
  attrs: (0, _object.dict)({
    'class': 'i-amphtml-story-spinner',
    'aria-hidden': 'true',
    'aria-label': 'Loading video'
  }),
  children: [{
    tag: 'div',
    attrs: (0, _object.dict)({
      'class': 'i-amphtml-story-spinner-container'
    }),
    children: [{
      tag: 'div',
      attrs: (0, _object.dict)({
        'class': 'i-amphtml-story-spinner-layer'
      }),
      children: [{
        tag: 'div',
        attrs: (0, _object.dict)({
          'class': 'i-amphtml-story-spinner-circle-clipper left'
        })
      }, {
        tag: 'div',
        attrs: (0, _object.dict)({
          'class': 'i-amphtml-story-spinner-circle-clipper right'
        })
      }]
    }]
  }]
};

var LoadingSpinner = exports.LoadingSpinner = function () {
  /**
   * @param {!Document} doc
   */
  function LoadingSpinner(doc) {
    _classCallCheck(this, LoadingSpinner);

    /** @private @const {!Document} */
    this.doc_ = doc;

    /** @public {?Element} */
    this.root_ = null;

    /** @private {boolean} */
    this.isActive_ = false;
  }

  LoadingSpinner.prototype.build = function build() {
    if (this.root_) {
      return this.root_;
    }

    this.root_ = (0, _simpleTemplate.renderAsElement)(this.doc_, SPINNER);

    return this.getRoot();
  };

  /** @return {!Element} */


  LoadingSpinner.prototype.getRoot = function getRoot() {
    return (0, _log.dev)().assertElement(this.root_);
  };

  /** @param {boolean} isActive */


  LoadingSpinner.prototype.toggle = function toggle(isActive) {
    if (isActive === this.isActive_) {
      return;
    }
    if (isActive) {
      this.root_.setAttribute(SPINNER_ACTIVE_ATTRIBUTE, '');
      this.root_.setAttribute('aria-hidden', 'false');
    } else {
      this.root_.removeAttribute(SPINNER_ACTIVE_ATTRIBUTE);
      this.root_.setAttribute('aria-hidden', 'true');
    }
    this.isActive_ = isActive;
  };

  return LoadingSpinner;
}();

},{"../../../src/log":57,"./../../../src/utils/object":83,"./simple-template":34}],23:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AmpStoryLogEntryDef = undefined;
exports.getLogEntries = getLogEntries;

var _log = require('../../../src/log');

var _dom = require('../../../src/dom');

/** @typedef {function(!Element): (boolean|!Promise<boolean>)} */
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ElementPredicateDef = void 0;

/**
 * A log type is an abstract rule or best practice that should be followed when
 * constructing a story.  This is internal to this file, which handles finding
 * specific instances of these log types, and returning them as log entries.
 *
 * message: (required) The message shown to developers in development mode if
 *     the best practice is not followed.
 * level: (required) The log level at which this entry should be logged.
 * moreInfo: (optional) A URL to a page containing additional documentation on
 *     the best practice.
 * selector: (optional) A selector to be queried on the currently-active page,
 *     and whose results will be subject to the best practice (given that they
 *     also match the precondition).  If unspecified, the amp-story-page itself
 *     is assumed to be subject to the best practice.
 * precondition: (optional) A predicate that takes an element and returns true
 *     if the specified element should be subject to the best practice.  If
 *     unspecified, all elements that match the selector are subject to the best
 *     practice.
 * predicate: (optional) A predicate that takes an element and returns true if
 *     the element follows the best practice, or false otherwise.  If
 *     unspecified, all elements are assumed not to follow the best practice.
 *
 * @typedef {{
 *   message: string,
 *   level: !LogLevel,
 *   moreInfo: (string|undefined),
 *   selector: (string|undefined),
 *   precondition: (!ElementPredicateDef|undefined),
 *   predicate: (!ElementPredicateDef|undefined),
 * }}
 */
var AmpStoryLogTypeDef = void 0;

/**
 * A log entry is a more concrete version of a rule or best practice; it refers
 * to whether a specific element on a specific page of a specific story conforms
 * to a given best practice.
 *
 * @typedef {{
 *   element: !Element,
 *   rootElement: !Element,
 *   message: string,
 *   level: !LogLevel,
 *   conforms: boolean,
 *   moreInfo: (string|undefined),
 * }}
 */
var AmpStoryLogEntryDef = exports.AmpStoryLogEntryDef = void 0;

/** @private @const {string} */
var AMPPROJECT_DOCS = 'https://www.ampproject.org/docs';

function getPosterFromVideo(el) {
  return new Promise(function (resolve, reject) {
    var poster = new Image();
    poster.onload = function () {
      return resolve(poster);
    };
    poster.onerror = reject;
    poster.src = el.getAttribute('poster');
  });
}

/** @enum {!AmpStoryLogTypeDef} */
var LogType = {
  /** Errors */
  VIDEOS_POSTER_SPECIFIED: {
    message: 'Videos should specify a poster image.',
    moreInfo: AMPPROJECT_DOCS + '/reference/components/amp-video#poster',
    selector: 'video:not([poster])',
    level: _log.LogLevel.ERROR
  },

  /** Warnings */
  IMAGES_MAX_720P_OR_SRCSET: {
    message: 'Images should not be larger than 720p.  If you wish to use' + ' images that are larger than 720p, you should specify a srcset.',
    moreInfo: AMPPROJECT_DOCS + '/guides/responsive/art_direction#srcset',
    selector: 'img:not([srcset])',
    predicate: function predicate(el) {
      return el.naturalWidth <= 720 && el.naturalHeight <= 1280;
    },
    level: _log.LogLevel.WARN
  },

  IMAGES_PORTRAIT: {
    message: 'Full-bleed images should be in portrait orientation.',
    selector: 'amp-story-grid-layer[template="fill"] > amp-img > img',
    predicate: function predicate(el) {
      return el.naturalWidth < el.naturalHeight;
    },
    level: _log.LogLevel.WARN
  },

  VIDEOS_MAX_720P: {
    message: 'Videos should not be larger than 720p.',
    selector: 'video',
    predicate: function predicate(el) {
      return el.videoWidth <= 720 && el.videoHeight <= 1280;
    },
    level: _log.LogLevel.WARN
  },

  VIDEOS_PORTRAIT: {
    message: 'Full-bleed videos should be in portrait orientation.',
    selector: 'amp-story-grid-layer[template="fill"] > amp-video > video',
    predicate: function predicate(el) {
      return el.videoWidth < el.videoHeight;
    },
    level: _log.LogLevel.WARN
  },

  VIDEO_POSTER_MAX_720P: {
    message: 'Video poster images should not be larger than 720p.',
    selector: 'video[poster]',
    predicate: function predicate(el) {
      return getPosterFromVideo(el).then(function (poster) {
        return poster.naturalWidth <= 720 && poster.naturalHeight <= 1280;
      });
    },
    level: _log.LogLevel.WARN
  },

  VIDEO_POSTER_POTRAIT: {
    message: 'Poster images for full-bleed videos should be in portrait ' + 'orientation.',
    selector: 'amp-story-grid-layer[template="fill"] > amp-video > ' + 'video[poster]',
    predicate: function predicate(el) {
      return getPosterFromVideo(el).then(function (poster) {
        return poster.naturalWidth < poster.naturalHeight;
      });
    },
    level: _log.LogLevel.WARN
  }
};

/**
 * Gets the log type associated with the specified key.
 * @param {string} logTypeKey
 * @return {!AmpStoryLogTypeDef}
 */
function getLogType(logTypeKey) {
  var logType = LogType[logTypeKey];
  (0, _log.dev)().assert(logType, 'There is no log type "' + logTypeKey + '".');
  (0, _log.dev)().assert(logType.message, 'Log type "' + logTypeKey + '" has no associated message.');
  (0, _log.dev)().assert(logType.level, 'Log type "' + logTypeKey + '" has no associated log level.');

  return logType;
}

/**
 * @param {!Element} rootElement
 * @param {!AmpStoryLogTypeDef} logType
 * @param {!Element} element
 * @return {!Promise<!AmpStoryLogEntryDef>}
 */
function getLogEntry(rootElement, logType, element) {
  var predicate = logType.predicate || function (unusedEl) {
    return false;
  };

  return Promise.resolve(predicate(element)).then(function (conforms) {
    return new Promise(function (resolve) {
      resolve({
        rootElement: rootElement,
        element: element,
        conforms: conforms,
        level: logType.level,
        message: logType.message,
        moreInfo: logType.moreInfo
      });
    });
  });
}

/**
 * @param {!Element} rootElement
 * @param {!AmpStoryLogTypeDef} logType
 * @return {!Array<!Promise<!AmpStoryLogEntryDef>>}
 */
function getLogEntriesForType(rootElement, logType) {
  var precondition = logType.precondition || function (unusedEl) {
    return true;
  };

  var elements = logType.selector ? [].slice.call((0, _dom.scopedQuerySelectorAll)(rootElement, logType.selector)) : [rootElement];

  return elements.filter(precondition).map(getLogEntry.bind( /** thisArg */null, rootElement, logType));
}

/**
 * @param {!AmpStoryLogEntryDef} logEntryA
 * @param {!AmpStoryLogEntryDef} logEntryB
 * @return {number}
 */
function logEntryCompareFn(logEntryA, logEntryB) {
  if (logEntryA.conforms == logEntryB.conforms) {
    // For entries within that are all conformant or all non-conformant, sort by
    // log level, with most severe entries first and least severe entries last.
    return logEntryA.level <= logEntryB.level ? -1 : 1;
  } else {
    // false < true, so non-conformant issues go before conformant ones.
    return logEntryA.conforms < logEntryB.conforms ? -1 : 1;
  }
}

/**
 * Gets a promise which yields a list of log entries for the specified element.
 * @param {!Element} rootElement
 * @return {!Promise<!Array<!AmpStoryLogEntryDef>>}
 */
function getLogEntries(rootElement) {
  var logEntryPromises = Object.keys(LogType).reduce(function (entries, key) {
    var logType = getLogType(key);
    var newEntries = getLogEntriesForType(rootElement, logType);
    return entries.concat(newEntries);
  }, []);

  return Promise.all(logEntryPromises).then(function (logEntries) {
    return logEntries.sort(logEntryCompareFn);
  });
}

},{"../../../src/dom":48,"../../../src/log":57}],24:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaPoolRoot = exports.MediaPool = exports.REPLACED_MEDIA_PROPERTY_NAME = exports.ElementDistanceFnDef = exports.MediaType = undefined;

var _defaultMedia = require('./default-media');

var _mediaTasks = require('./media-tasks');

var _services = require('../../../src/services');

var _sources = require('./sources');

var _utils = require('./utils');

var _log = require('../../../src/log');

var _array = require('../../../src/utils/array');

var _dom = require('../../../src/dom');

var _types = require('../../../src/types');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */

/** @const @enum {string} */
var MediaType = exports.MediaType = {
  UNSUPPORTED: 'unsupported',
  AUDIO: 'audio',
  VIDEO: 'video'
};

/**
 * Represents the distance of an element from the current place in the document.
 * @typedef {function(!HTMLMediaElement): number}
 */
var ElementDistanceFnDef = exports.ElementDistanceFnDef = void 0;

/**
 * Represents a task to be executed on a media element.
 * @typedef {function(!HTMLMediaElement, *): !Promise}
 */
var ElementTaskDef = void 0;

/**
 * @const {string}
 */
var DOM_MEDIA_ELEMENT_ID_PREFIX = 'i-amphtml-media-';

/**
 * @const {string}
 */
var POOL_MEDIA_ELEMENT_PROPERTY_NAME = '__AMP_MEDIA_POOL_ID__';

/**
 * @const {string}
 */
var ELEMENT_TASK_QUEUE_PROPERTY_NAME = '__AMP_MEDIA_ELEMENT_TASKS__';

/**
 * The name for a string attribute that represents the ID of a media element
 * that the element containing this attribute replaced.
 * @const {string}
 */
var REPLACED_MEDIA_PROPERTY_NAME = exports.REPLACED_MEDIA_PROPERTY_NAME = 'replaced-media';

/**
 * @type {!Object<string, !MediaPool>}
 */
var instances = {};

/**
 * @type {number}
 */
var nextInstanceId = 0;

var elId = 0;

var MediaPool = exports.MediaPool = function () {
  /**
   * @param {!Window} win The window object.
   * @param {!Object<!MediaType, number>} maxCounts The maximum amount of each
   *     media element that can be allocated by the pool.
   * @param {!ElementDistanceFnDef} distanceFn A function that, given an
   *     element, returns the distance of that element from the current position
   *     in the document.  The definition of "distance" can be implementation-
   *     dependant, as long as it is consistent between invocations.
   */
  function MediaPool(win, maxCounts, distanceFn) {
    var _this = this,
        _mediaFactory_;

    _classCallCheck(this, MediaPool);

    /** @private @const {!Window} */
    this.win_ = win;

    /** @private @const {!../../../src/service/timer-impl.Timer} */
    this.timer_ = _services.Services.timerFor(win);

    /** @private @const {!../../../src/service/vsync-impl.Vsync} */
    this.vsync_ = _services.Services.vsyncFor(win);

    /**
     * The function used to retrieve the distance between an element and the
     * current position in the document.
     * @private @const {!ElementDistanceFnDef}
     */
    this.distanceFn_ = distanceFn;

    /**
     * Holds all of the media elements that have been allocated.
     * @const {!Object<!MediaType, !Array<!HTMLMediaElement>>}
     * @visibleForTesting
     */
    this.allocated = {};

    /**
     * Holds all of the media elements that have not been allocated.
     * @const {!Object<!MediaType, !Array<!HTMLMediaElement>>}
     * @visibleForTesting
     */
    this.unallocated = {};

    /**
     * Maps a media element's ID to the object containing its sources.
     * @private @const {!Object<string, !Sources>}
     */
    this.sources_ = {};

    /**
     * Maps a media element's ID to the element.  This is necessary, as elements
     * are kept in memory when they are swapped out of the DOM.
     * @private @const {!Object<string, !HTMLMediaElement>}
     */
    this.domMediaEls_ = {};

    /**
     * Counter used to produce unique IDs for media elements.
     * @private {number}
     */
    this.idCounter_ = 0;

    /**
     * Whether the media elements in this MediaPool instance have been "blessed"
     * for unmuted playback without user gesture.
     * @private {boolean}
     */
    this.blessed_ = false;

    /** @const {!Object<string, (function(): !HTMLMediaElement)>} */
    this.mediaFactory_ = (_mediaFactory_ = {}, _mediaFactory_[MediaType.AUDIO] = function () {
      var audioEl = _this.win_.document.createElement('audio');
      audioEl.setAttribute('muted', '');
      audioEl.muted = true;
      audioEl.classList.add('i-amphtml-pool-media');
      audioEl.classList.add('i-amphtml-pool-audio');
      return audioEl;
    }, _mediaFactory_[MediaType.VIDEO] = function () {
      var videoEl = _this.win_.document.createElement('video');
      videoEl.setAttribute('muted', '');
      videoEl.muted = true;
      videoEl.setAttribute('playsinline', '');
      videoEl.classList.add('i-amphtml-pool-media');
      videoEl.classList.add('i-amphtml-pool-video');
      return videoEl;
    }, _mediaFactory_);

    this.initializeMediaPool_(maxCounts);
  }

  /**
   * Fills the media pool by creating the maximum number of media elements for
   * each of the types of media elements.  We need to create these eagerly so
   * that all media elements exist by the time that blessAll() is invoked,
   * thereby "blessing" all media elements for playback without user gesture.
   * @param {!Object<!MediaType, number>} maxCounts The maximum amount of each
   *     media element that can be allocated by the pool.
   * @private
   */


  MediaPool.prototype.initializeMediaPool_ = function initializeMediaPool_(maxCounts) {
    var _this2 = this;

    this.forEachMediaType_(function (key) {
      var type = MediaType[key];
      var count = maxCounts[type] || 0;
      _this2.allocated[type] = [];
      _this2.unallocated[type] = [];
      for (var i = 0; i < count; i++) {
        _this2.vsync_.mutate(function () {
          var mediaEl = _this2.mediaFactory_[type].call(_this2);
          mediaEl.setAttribute('pool-element', elId++);
          var sources = _this2.getDefaultSource_(type);
          _this2.enqueueMediaElementTask_(mediaEl, new _mediaTasks.UpdateSourcesTask(sources, _this2.vsync_));
          // TODO(newmuis): Check the 'error' field to see if MEDIA_ERR_DECODE
          // is returned.  If so, we should adjust the pool size/distribution
          // between media types.
          _this2.unallocated[type].push(mediaEl);
        });
      }
    });
  };

  /**
   * @param {!MediaType} mediaType The media type whose source should be
   *     retrieved.
   * @return {!Sources} The default source for the specified type of media.
   */


  MediaPool.prototype.getDefaultSource_ = function getDefaultSource_(mediaType) {
    switch (mediaType) {
      case MediaType.AUDIO:
        return new _sources.Sources(_defaultMedia.BLANK_AUDIO_SRC);
      case MediaType.VIDEO:
        return new _sources.Sources(_defaultMedia.BLANK_VIDEO_SRC);
      default:
        (0, _log.dev)().error('AMP-STORY', 'No default media for type ' + mediaType + '.');
        return new _sources.Sources();
    }
  };

  /**
   * Comparison function that compares the distance of each element from the
   * current position in the document.
   * @param {!HTMLMediaElement} mediaA The first element to compare.
   * @param {!HTMLMediaElement} mediaB The second element to compare.
   * @private
   */


  MediaPool.prototype.compareMediaDistances_ = function compareMediaDistances_(mediaA, mediaB) {
    var distanceA = this.distanceFn_(mediaA);
    var distanceB = this.distanceFn_(mediaB);
    return distanceA < distanceB ? -1 : 1;
  };

  /**
   * @return {string} A unique ID.
   * @private
   */


  MediaPool.prototype.createDomMediaElementId_ = function createDomMediaElementId_() {
    return DOM_MEDIA_ELEMENT_ID_PREFIX + this.idCounter_++;
  };

  /**
   * Gets the media type from a given element.
   * @param {!HTMLMediaElement} mediaElement The element whose media type should
   *     be retrieved.
   * @return {!MediaType}
   * @private
   */


  MediaPool.prototype.getMediaType_ = function getMediaType_(mediaElement) {
    var tagName = mediaElement.tagName.toLowerCase();
    switch (tagName) {
      case 'audio':
        return MediaType.AUDIO;
      case 'video':
        return MediaType.VIDEO;
      default:
        return MediaType.UNSUPPORTED;
    }
  };

  /**
   * Reserves an element of the specified type by removing it from the set of
   * unallocated elements and returning it.
   * @param {!MediaType} mediaType The type of media element to reserve.
   * @return {?HTMLMediaElement} The reserved element, if one exists.
   * @private
   */


  MediaPool.prototype.reserveUnallocatedMediaElement_ = function reserveUnallocatedMediaElement_(mediaType) {
    return this.unallocated[mediaType].pop();
  };

  /**
   * Retrieves the media element from the pool that matches the specified
   * element, if one exists.
   * @param {!MediaType} mediaType The type of media element to get.
   * @param {!HTMLMediaElement} domMediaEl The element whose matching media
   *     element should be retrieved.
   * @return {?HTMLMediaElement} The media element in the pool that represents
   *     the specified media element
   */


  MediaPool.prototype.getMatchingMediaElementFromPool_ = function getMatchingMediaElementFromPool_(mediaType, domMediaEl) {
    if (this.isAllocatedMediaElement_(mediaType, domMediaEl)) {
      return domMediaEl;
    }

    var allocatedEls = this.allocated[mediaType];
    var index = (0, _array.findIndex)(allocatedEls, function (poolMediaEl) {
      return poolMediaEl[REPLACED_MEDIA_PROPERTY_NAME] === domMediaEl.id;
    });

    return allocatedEls[index];
  };

  /**
   * Allocates the specified media element of the specified type.
   * @param {!MediaType} mediaType The type of media element to allocate.
   * @param {!HTMLMediaElement} poolMediaEl The element to be allocated.
   * @private
   */


  MediaPool.prototype.allocateMediaElement_ = function allocateMediaElement_(mediaType, poolMediaEl) {
    this.allocated[mediaType].push(poolMediaEl);

    var unallocatedEls = this.unallocated[mediaType];
    var indexToRemove = unallocatedEls.indexOf(poolMediaEl);

    if (indexToRemove >= 0) {
      unallocatedEls.splice(indexToRemove, 1);
    }
  };

  /**
   * Deallocates and returns the media element of the specified type furthest
   * from the current position in the document.
   * @param {!MediaType} mediaType The type of media element to deallocate.
   * @param {!HTMLMediaElement=} opt_elToAllocate If specified, the element that
   *     is trying to be allocated, such that another element must be evicted.
   * @return {?HTMLMediaElement} The deallocated element, if one exists.
   * @private
   */


  MediaPool.prototype.deallocateMediaElement_ = function deallocateMediaElement_(mediaType, opt_elToAllocate) {
    var _this3 = this;

    var allocatedEls = this.allocated[mediaType];

    // Sort the allocated media elements by distance to ensure that we are
    // evicting the media element that is furthest from the current place in the
    // document.
    allocatedEls.sort(function (a, b) {
      return _this3.compareMediaDistances_(a, b);
    });

    // Do not deallocate any media elements if the element being loaded or
    // played is further than the farthest allocated element.
    if (opt_elToAllocate) {
      var furthestEl = allocatedEls[allocatedEls.length - 1];
      if (!furthestEl || this.distanceFn_(furthestEl) < this.distanceFn_(opt_elToAllocate)) {
        return null;
      }
    }

    // De-allocate a media element.
    var poolMediaEl = allocatedEls.pop();
    this.unallocated[mediaType].push(poolMediaEl);
    return poolMediaEl;
  };

  /**
   * Forcibly deallocates a specific media element, regardless of its distance
   * from the current position in the document.
   * @param {!HTMLMediaElement} poolMediaEl The element to be deallocated.
   * @return {!Promise} A promise that is resolved when the specified media
   *     element has been successfully deallocated.
   */


  MediaPool.prototype.forceDeallocateMediaElement_ = function forceDeallocateMediaElement_(poolMediaEl) {
    var _this4 = this;

    var mediaType = this.getMediaType_(poolMediaEl);
    var allocatedEls = this.allocated[mediaType];
    var removeFromDom = (0, _dom.isConnectedNode)(poolMediaEl) ? this.swapPoolMediaElementOutOfDom_(poolMediaEl) : Promise.resolve();

    return removeFromDom.then(function () {
      var index = allocatedEls.indexOf(poolMediaEl);
      (0, _log.dev)().assert(index >= 0, 'Cannot deallocate unallocated media element.');
      allocatedEls.splice(index, 1);
      _this4.unallocated[mediaType].push(poolMediaEl);
    });
  };

  /**
   * Evicts an element of the specified type, replaces it in the DOM with the
   * original media element, and returns it.
   * @param {!MediaType} mediaType The type of media element to evict.
   * @param {!HTMLMediaElement=} opt_elToAllocate If specified, the element that
   *     is trying to be allocated, such that another element must be evicted.
   * @return {?HTMLMediaElement} A media element of the specified type.
   * @private
   */


  MediaPool.prototype.evictMediaElement_ = function evictMediaElement_(mediaType, opt_elToAllocate) {
    var poolMediaEl = this.deallocateMediaElement_(mediaType, opt_elToAllocate);
    if (!poolMediaEl) {
      return null;
    }

    this.swapPoolMediaElementOutOfDom_(poolMediaEl);
    return poolMediaEl;
  };

  /**
   * @param {!MediaType} mediaType The media type to check.
   * @param {!HTMLMediaElement} el The element to check.
   * @return {boolean} true, if the specified element has already been allocated
   *     as the specified type of media element.
   * @private
   */


  MediaPool.prototype.isAllocatedMediaElement_ = function isAllocatedMediaElement_(mediaType, el) {
    return this.allocated[mediaType].indexOf(el) >= 0;
  };

  /**
   * Replaces a media element that was originally in the DOM with a media
   * element from the pool.
   * @param {!HTMLMediaElement} domMediaEl The media element originating from
   *     the DOM.
   * @param {!HTMLMediaElement} poolMediaEl The media element originating from
   *     the pool.
   * @param {!Sources} sources The sources for the media element.
   * @return {!Promise} A promise that is resolved when the media element has
   *     been successfully swapped into the DOM.
   * @private
   */


  MediaPool.prototype.swapPoolMediaElementIntoDom_ = function swapPoolMediaElementIntoDom_(domMediaEl, poolMediaEl, sources) {
    var _this5 = this;

    var ampMediaForPoolEl = (0, _utils.ampMediaElementFor)(poolMediaEl);
    var ampMediaForDomEl = (0, _utils.ampMediaElementFor)(domMediaEl);
    poolMediaEl[REPLACED_MEDIA_PROPERTY_NAME] = domMediaEl.id;

    return this.enqueueMediaElementTask_(poolMediaEl, new _mediaTasks.SwapIntoDomTask(domMediaEl, this.vsync_)).then(function () {
      _this5.maybeResetAmpMedia_(ampMediaForPoolEl);
      _this5.maybeResetAmpMedia_(ampMediaForDomEl);
      _this5.enqueueMediaElementTask_(poolMediaEl, new _mediaTasks.UpdateSourcesTask(sources, _this5.vsync_));
      _this5.enqueueMediaElementTask_(poolMediaEl, new _mediaTasks.LoadTask());
    }, function () {
      _this5.forceDeallocateMediaElement_(poolMediaEl);
    });
  };

  /**
   * @param {?Element} componentEl
   * @private
   */


  MediaPool.prototype.maybeResetAmpMedia_ = function maybeResetAmpMedia_(componentEl) {
    if (!componentEl) {
      return;
    }

    if (componentEl.tagName.toLowerCase() == 'amp-audio') {
      // TODO(alanorozco): Implement reset for amp-audio
      return;
    }

    componentEl.getImpl().then(function (impl) {
      return impl.resetOnDomChange();
    });
  };

  /**
   * @param {!HTMLMediaElement} poolMediaEl The element whose source should be
   *     reset.
   * @return {!Promise} A promise that is resolved when the pool media element
   *     has been reset.
   */


  MediaPool.prototype.resetPoolMediaElementSource_ = function resetPoolMediaElementSource_(poolMediaEl) {
    var mediaType = this.getMediaType_(poolMediaEl);
    var defaultSources = this.getDefaultSource_(mediaType);

    return this.enqueueMediaElementTask_(poolMediaEl, new _mediaTasks.UpdateSourcesTask(defaultSources, this.vsync_));
  };

  /**
   * Removes a pool media element from the DOM and replaces it with the video
   * that it originally replaced.
   * @param {!HTMLMediaElement} poolMediaEl The pool media element to remove
   *     from the DOM.
   * @return {!Promise} A promise that is resolved when the media element has
   *     been successfully swapped out of the DOM.
   * @private
   */


  MediaPool.prototype.swapPoolMediaElementOutOfDom_ = function swapPoolMediaElementOutOfDom_(poolMediaEl) {
    var oldDomMediaElId = poolMediaEl[REPLACED_MEDIA_PROPERTY_NAME];
    var oldDomMediaEl = /** @type {!HTMLMediaElement} */(0, _log.dev)().assertElement(this.domMediaEls_[oldDomMediaElId], 'No media element to put back into DOM after eviction.');

    var swapOutOfDom = this.enqueueMediaElementTask_(poolMediaEl, new _mediaTasks.SwapOutOfDomTask(oldDomMediaEl, this.vsync_)).then(function () {
      poolMediaEl[REPLACED_MEDIA_PROPERTY_NAME] = null;
    });

    this.resetPoolMediaElementSource_(poolMediaEl);
    return swapOutOfDom;
  };

  MediaPool.prototype.forEachMediaType_ = function forEachMediaType_(callbackFn) {
    Object.keys(MediaType).forEach(callbackFn.bind(this));
  };

  /**
   * Invokes a function for all media managed by the media pool.
   * @param {function(!HTMLMediaElement)} callbackFn The function to be
   *     invoked.
   * @private
   */


  MediaPool.prototype.forEachMediaElement_ = function forEachMediaElement_(callbackFn) {
    var _this6 = this;

    this.forEachMediaType_(function (key) {
      var type = MediaType[key];
      var allocatedEls = _this6.allocated[type];
      allocatedEls.forEach(callbackFn.bind(_this6));
    });

    this.forEachMediaType_(function (key) {
      var type = MediaType[key];
      var unallocatedEls = _this6.unallocated[type];
      unallocatedEls.forEach(callbackFn.bind(_this6));
    });
  };

  /**
   * Preloads the content of the specified media element in the DOM and returns
   * a media element that can be used in its stead for playback.
   * @param {!HTMLMediaElement} domMediaEl The media element, found in the DOM,
   *     whose content should be loaded.
   * @return {Promise<!HTMLMediaElement>} A media element from the pool that can be used
   *     to replace the specified element.
   */


  MediaPool.prototype.loadInternal_ = function loadInternal_(domMediaEl) {
    if (!(0, _dom.isConnectedNode)(domMediaEl)) {
      // Don't handle nodes that aren't even in the document.
      return Promise.resolve();
    }

    var mediaType = this.getMediaType_(domMediaEl);
    var existingPoolMediaEl = this.getMatchingMediaElementFromPool_(mediaType, domMediaEl);
    if (existingPoolMediaEl) {
      // The element being loaded already has an allocated media element.
      return Promise.resolve(existingPoolMediaEl);
    }

    var sources = this.sources_[domMediaEl.id];
    (0, _log.dev)().assert(sources instanceof _sources.Sources, 'Cannot play unregistered element.');

    var poolMediaEl = this.reserveUnallocatedMediaElement_(mediaType) || this.evictMediaElement_(mediaType, domMediaEl);

    if (!poolMediaEl) {
      // If there is no space in the pool to allocate a new element, and no
      // element can be evicted, do not return any element.
      return Promise.resolve();
    }

    this.allocateMediaElement_(mediaType, poolMediaEl);

    return this.swapPoolMediaElementIntoDom_(domMediaEl, poolMediaEl, sources).then(function () {
      return poolMediaEl;
    });
  };

  /**
   * "Blesses" the specified media element for future playback without a user
   * gesture.  In order for this to bless the media element, this function must
   * be invoked in response to a user gesture.
   * @param {!HTMLMediaElement} poolMediaEl The media element to bless.
   * @return {!Promise} A promise that is resolved when blessing the media
   *     element is complete.
   */


  MediaPool.prototype.bless_ = function bless_(poolMediaEl) {
    if (poolMediaEl[_mediaTasks.ELEMENT_BLESSED_PROPERTY_NAME]) {
      return Promise.resolve();
    }

    return this.enqueueMediaElementTask_(poolMediaEl, new _mediaTasks.BlessTask());
  };

  /**
   * Registers the specified element to be usable by the media pool.  Elements
   * should be registered as early as possible, in order to prevent them from
   * being played while not managed by the media pool.  If the media element is
   * already registered, this is a no-op.  Registering elements from within the
   * pool is not allowed, and will also be a no-op.
   * @param {!HTMLMediaElement} domMediaEl The media element to be registered.
   * @return {!Promise} A promise that is resolved when the element has been
   *     successfully registered, or rejected otherwise.
   */


  MediaPool.prototype.register = function register(domMediaEl) {
    var mediaType = this.getMediaType_(domMediaEl);
    if (this.isAllocatedMediaElement_(mediaType, domMediaEl)) {
      // This media element originated from the media pool.
      return Promise.resolve();
    }

    var id = domMediaEl.id || this.createDomMediaElementId_();
    if (this.sources_[id] && this.domMediaEls_[id]) {
      // This media element is already registered.
      return Promise.resolve();
    }

    // This media element has not yet been registered.
    domMediaEl.id = id;
    var sources = _sources.Sources.removeFrom(domMediaEl);
    this.sources_[id] = sources;
    this.domMediaEls_[id] = domMediaEl;

    domMediaEl.muted = true;
    domMediaEl.setAttribute('muted', '');
    domMediaEl.pause();

    return Promise.resolve();
  };

  /**
   * Preloads the content of the specified media element in the DOM.
   * @param {!HTMLMediaElement} domMediaEl The media element, found in the DOM,
   *     whose content should be loaded.
   * @return {!Promise} A promise that is resolved when the specified media
   *     element has successfully started preloading.
   */


  MediaPool.prototype.preload = function preload(domMediaEl) {
    // Empty then() invocation hides the value yielded by the loadInternal_
    // promise, so that we do not leak the pool media element outside of the
    // scope of the media pool.
    return this.loadInternal_(domMediaEl).then();
  };

  /**
   * Plays the specified media element in the DOM by replacing it with a media
   * element from the pool and playing that.
   * @param {!HTMLMediaElement} domMediaEl The media element to be played.
   * @return {!Promise} A promise that is resolved when the specified media
   *     element has been successfully played.
   */


  MediaPool.prototype.play = function play(domMediaEl) {
    var _this7 = this;

    return this.loadInternal_(domMediaEl).then(function (poolMediaEl) {
      if (!poolMediaEl) {
        return Promise.resolve();
      }

      return _this7.enqueueMediaElementTask_(poolMediaEl, new _mediaTasks.PlayTask());
    });
  };

  /**
   * Pauses the specified media element in the DOM.
   * @param {!HTMLMediaElement} domMediaEl The media element to be paused.
   * @param {boolean=} rewindToBeginning Whether to rewind the currentTime
   *     of media items to the beginning.
   * @return {!Promise} A promise that is resolved when the specified media
   *     element has been successfully paused.
   */


  MediaPool.prototype.pause = function pause(domMediaEl) {
    var _this8 = this;

    var rewindToBeginning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var mediaType = this.getMediaType_(domMediaEl);
    var poolMediaEl = this.getMatchingMediaElementFromPool_(mediaType, domMediaEl);

    if (!poolMediaEl) {
      return Promise.resolve();
    }

    return this.enqueueMediaElementTask_(poolMediaEl, new _mediaTasks.PauseTask()).then(function () {
      if (rewindToBeginning) {
        _this8.enqueueMediaElementTask_(
        /** @type {!HTMLMediaElement} */poolMediaEl, new _mediaTasks.RewindTask());
      }
    });
  };

  /**
   * Rewinds a specified media element in the DOM to 0.
   * @param {!HTMLMediaElement} domMediaEl The media element to be rewound.
   * @return {!Promise} A promise that is resolved when the
   *     specified media element has been successfully rewound.
   */


  MediaPool.prototype.rewindToBeginning = function rewindToBeginning(domMediaEl) {
    var mediaType = this.getMediaType_(domMediaEl);
    var poolMediaEl = this.getMatchingMediaElementFromPool_(mediaType, domMediaEl);

    if (!poolMediaEl) {
      return Promise.resolve();
    }

    return this.enqueueMediaElementTask_(poolMediaEl, new _mediaTasks.RewindTask());
  };

  /**
   * Mutes the specified media element in the DOM.
   * @param {!HTMLMediaElement} domMediaEl The media element to be muted.
   * @return {!Promise} A promise that is resolved when the specified media
   *     element has been successfully muted.
   */


  MediaPool.prototype.mute = function mute(domMediaEl) {
    var mediaType = this.getMediaType_(domMediaEl);
    var poolMediaEl = this.getMatchingMediaElementFromPool_(mediaType, domMediaEl);

    if (!poolMediaEl) {
      return Promise.resolve();
    }

    return this.enqueueMediaElementTask_(poolMediaEl, new _mediaTasks.MuteTask());
  };

  /**
   * Unmutes the specified media element in the DOM.
   * @param {!HTMLMediaElement} domMediaEl The media element to be unmuted.
   * @return {!Promise} A promise that is resolved when the specified media
   *     element has been successfully paused.
   */


  MediaPool.prototype.unmute = function unmute(domMediaEl) {
    var mediaType = this.getMediaType_(domMediaEl);
    var poolMediaEl = this.getMatchingMediaElementFromPool_(mediaType, domMediaEl);

    if (!poolMediaEl) {
      return Promise.resolve();
    }

    return this.enqueueMediaElementTask_(poolMediaEl, new _mediaTasks.UnmuteTask());
  };

  /**
   * "Blesses" all media elements in the media pool for future playback without
   * a user gesture.  In order for this to bless the media elements, this
   * function must be invoked in response to a user gesture.
   * @return {!Promise} A promise that is resolved when all media elements in
   *     the pool are blessed.
   */


  MediaPool.prototype.blessAll = function blessAll() {
    var _this9 = this;

    if (this.blessed_) {
      return Promise.resolve();
    }

    var blessPromises = [];
    this.forEachMediaElement_(function (mediaEl) {
      blessPromises.push(_this9.bless_(mediaEl));
    });

    return Promise.all(blessPromises).then(function () {
      _this9.blessed_ = true;
    }).catch(function (reason) {
      (0, _log.dev)().expectedError('AMP-STORY', 'Blessing all media failed: ', reason);
    });
  };

  /**
   * @param {!HTMLMediaElement} mediaEl The element whose task queue should be
   *     executed.
   * @private
   */


  MediaPool.prototype.executeNextMediaElementTask_ = function executeNextMediaElementTask_(mediaEl) {
    var _this10 = this;

    var queue = mediaEl[ELEMENT_TASK_QUEUE_PROPERTY_NAME];
    if (queue.length === 0) {
      return;
    }

    var task = queue[0];

    var executionFn = function executionFn() {
      task.execute(mediaEl).catch(function (reason) {
        return (0, _log.dev)().error('AMP-STORY', reason);
      }).then(function () {
        // Run regardless of success or failure of task execution.
        queue.shift();
        _this10.executeNextMediaElementTask_(mediaEl);
      });
    };

    if (task.requiresSynchronousExecution()) {
      executionFn.call(this);
    } else {
      this.timer_.delay(executionFn.bind(this), 0);
    }
  };

  /**
   * @param {!HTMLMediaElement} mediaEl The element for which the specified task
   *     should be executed.
   * @param {!./media-tasks.MediaTask} task The task to be executed.
   * @return {!Promise} A promise that is resolved when the specified task is
   *     completed.
   * @private
   */


  MediaPool.prototype.enqueueMediaElementTask_ = function enqueueMediaElementTask_(mediaEl, task) {
    if (!mediaEl[ELEMENT_TASK_QUEUE_PROPERTY_NAME]) {
      mediaEl[ELEMENT_TASK_QUEUE_PROPERTY_NAME] = [];
    }

    var queue = mediaEl[ELEMENT_TASK_QUEUE_PROPERTY_NAME];
    var isQueueRunning = queue.length !== 0;

    queue.push(task);

    if (!isQueueRunning) {
      this.executeNextMediaElementTask_(mediaEl);
    }

    return task.whenComplete();
  };

  /**
   * @param {!MediaPoolRoot} root
   * @return {!MediaPool}
   */


  MediaPool.for = function _for(root) {
    var element = root.getElement();
    var existingId = element[POOL_MEDIA_ELEMENT_PROPERTY_NAME];
    var hasInstanceAllocated = existingId && instances[existingId];

    if (hasInstanceAllocated) {
      return instances[existingId];
    }

    var newId = String(nextInstanceId++);
    element[POOL_MEDIA_ELEMENT_PROPERTY_NAME] = newId;
    instances[newId] = new MediaPool((0, _types.toWin)(root.getElement().ownerDocument.defaultView), root.getMaxMediaElementCounts(), function (element) {
      return root.getElementDistance(element);
    });

    return instances[newId];
  };

  return MediaPool;
}();

/**
 * Defines a common interface for elements that contain a MediaPool.
 *
 * @interface
 */


var MediaPoolRoot = exports.MediaPoolRoot = function () {
  function MediaPoolRoot() {
    _classCallCheck(this, MediaPoolRoot);
  }

  /**
   * @return {!Element} The root element of this media pool.
   */
  MediaPoolRoot.prototype.getElement = function getElement() {};

  /**
   * @param {!Element} unusedElement The element whose distance should be
   *    retrieved.
   * @return {number} A numerical distance representing how far the specified
   *     element is from the user's current position in the document.  The
   *     absolute magnitude of this number is irrelevant; the relative magnitude
   *     is used to determine which media elements should be evicted (elements
   *     furthest from the user's current position in the document are evicted
   *     from the MediaPool first).
   */


  MediaPoolRoot.prototype.getElementDistance = function getElementDistance(unusedElement) {};

  /**
   * @return {!Object<!MediaType, number>} The maximum amount of each media
   *     type to allow within this element.
   */


  MediaPoolRoot.prototype.getMaxMediaElementCounts = function getMaxMediaElementCounts() {};

  return MediaPoolRoot;
}();

},{"../../../src/dom":48,"../../../src/log":57,"../../../src/services":72,"../../../src/types":75,"../../../src/utils/array":79,"./default-media":17,"./media-tasks":25,"./sources":35,"./utils":38}],25:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwapOutOfDomTask = exports.SwapIntoDomTask = exports.UpdateSourcesTask = exports.BlessTask = exports.LoadTask = exports.RewindTask = exports.MuteTask = exports.UnmuteTask = exports.PauseTask = exports.PlayTask = exports.MediaTask = exports.ELEMENT_BLESSED_PROPERTY_NAME = undefined;

var _sources = require('./sources');

var _dom = require('../../../src/dom');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */

/**
 * The name for a boolean property on an element indicating whether that element
 * has already been "blessed".
 * @const {string}
 */
var ELEMENT_BLESSED_PROPERTY_NAME = exports.ELEMENT_BLESSED_PROPERTY_NAME = '__AMP_MEDIA_IS_BLESSED__';

/**
 * CSS class names that should not be removed from an element when swapping it
 * into/out of the DOM.
 * @const {!Array<string>}
 */
var PROTECTED_CSS_CLASS_NAMES = ['i-amphtml-pool-media', 'i-amphtml-pool-audio', 'i-amphtml-pool-video'];

/**
 * Attribute names that should not be removed from an element when swapping it
 * into/out of the DOM.
 * @const {!Array<string>}
 */
var PROTECTED_ATTRIBUTES = ['id', 'src', 'class', 'autoplay'];

/**
 * Determines whether a CSS class name is allowed to be removed or copied from
 * media elements.
 * @param {string} cssClassName The CSS class name name to check.
 * @return {boolean} true, if the specified CSS class name is allowed to be
 *     removed or copied from media elements; false otherwise.
 * @private
 */
function isProtectedCssClassName(cssClassName) {
  return PROTECTED_CSS_CLASS_NAMES.indexOf(cssClassName) >= 0;
}

/**
 * Determines whether an attribute is allowed to be removed or copied from
 * media elements.
 * @param {string} attributeName The attribute name to check.
 * @return {boolean} true, if the specified attribute is allowed to be removed
 *     or copied from media elements; false otherwise.
 * @private
 */
function isProtectedAttributeName(attributeName) {
  return PROTECTED_ATTRIBUTES.indexOf(attributeName) >= 0;
}

/**
 * Copies all unprotected CSS classes from fromEl to toEl.
 * @param {!HTMLMediaElement} fromEl The element from which CSS classes should
 *     be copied.
 * @param {!HTMLMediaElement} toEl The element to which CSS classes should be
 *     copied.
 * @private
 */
function copyCssClasses(fromEl, toEl) {
  // Remove all of the unprotected CSS classes from the toEl.
  for (var i = toEl.classList.length - 1; i >= 0; i--) {
    var cssClass = toEl.classList.item(i);
    if (!isProtectedCssClassName(cssClass)) {
      toEl.classList.remove(cssClass);
    }
  }

  // Copy all of the unprotected CSS classes from the fromEl to the toEl.
  for (var _i = 0; _i < fromEl.classList.length; _i++) {
    var _cssClass = fromEl.classList.item(_i);
    if (!isProtectedCssClassName(_cssClass)) {
      toEl.classList.add(_cssClass);
    }
  }
}

/**
 * Copies all unprotected attributes from fromEl to toEl.
 * @param {!HTMLMediaElement} fromEl The element from which attributes should
 *     be copied.
 * @param {!HTMLMediaElement} toEl The element to which attributes should be
 *     copied.
 * @private
 */
function copyAttributes(fromEl, toEl) {
  var fromAttributes = fromEl.attributes;
  var toAttributes = toEl.attributes;

  // Remove all of the unprotected attributes from the toEl.
  for (var i = toAttributes.length - 1; i >= 0; i--) {
    var attributeName = toAttributes[i].name;
    if (!isProtectedAttributeName(attributeName)) {
      toEl.removeAttribute(attributeName);
    }
  }

  // Copy all of the unprotected attributes from the fromEl to the toEl.
  for (var _i2 = 0; _i2 < fromAttributes.length; _i2++) {
    var _attributeName = fromAttributes[_i2].name;
    var attributeValue = fromAttributes[_i2].value;
    if (!isProtectedAttributeName(_attributeName)) {
      toEl.setAttribute(_attributeName, attributeValue);
    }
  }
}

/**
 * Base class for tasks executed in order on HTMLMediaElements.
 */

var MediaTask = exports.MediaTask = function () {
  function MediaTask(name) {
    var _this = this;

    _classCallCheck(this, MediaTask);

    /** @private @const {string} */
    this.name_ = name;

    /** @private {?function()} */
    this.resolve_ = null;

    /** @private {?function(*)} */
    this.reject_ = null;

    /** @private @const {!Promise} */
    this.completionPromise_ = new Promise(function (resolve, reject) {
      _this.resolve_ = resolve;
      _this.reject_ = reject;
    });
  }

  /**
   * @return {string} The name of this task.
   */


  MediaTask.prototype.getName = function getName() {
    return this.name_;
  };

  /**
   * @return {!Promise<*>} A promise that is resolved when the task has
   *     completed execution.
   */


  MediaTask.prototype.whenComplete = function whenComplete() {
    return this.completionPromise_;
  };

  /**
   * @param {!HTMLMediaElement} mediaEl The media element on which this task
   *     should be executed.
   * @return {!Promise} A promise that is resolved when the task has completed
   *     execution.
   */


  MediaTask.prototype.execute = function execute(mediaEl) {
    return this.executeInternal(mediaEl).then(this.resolve_, this.reject_);
  };

  /**
   * @param {!HTMLMediaElement} unusedMediaEl The media element on which this
   *     task should be executed.
   * @protected
   */


  MediaTask.prototype.executeInternal = function executeInternal(unusedMediaEl) {
    return Promise.resolve();
  };

  /**
   * @return {boolean} true, if this task must be executed synchronously, e.g.
   *    if it requires a user gesture.
   */


  MediaTask.prototype.requiresSynchronousExecution = function requiresSynchronousExecution() {
    return false;
  };

  /**
   * @param {*} reason The reason for failing the task.
   * @protected
   */


  MediaTask.prototype.failTask = function failTask(reason) {
    this.reject_(reason);
  };

  return MediaTask;
}();

/**
 * Plays the specified media element.
 */


var PlayTask = exports.PlayTask = function (_MediaTask) {
  _inherits(PlayTask, _MediaTask);

  function PlayTask() {
    _classCallCheck(this, PlayTask);

    return _possibleConstructorReturn(this, _MediaTask.call(this, 'play'));
  }

  /** @override */


  PlayTask.prototype.executeInternal = function executeInternal(mediaEl) {
    if (!mediaEl.paused) {
      // We do not want to invoke play() if the media element is already
      // playing, as this can interrupt playback in some browsers.
      return Promise.resolve();
    }

    // The play() invocation is wrapped in a Promise.resolve(...) due to the
    // fact that some browsers return a promise from media elements' play()
    // function, while others return a boolean.
    return Promise.resolve(mediaEl.play());
  };

  return PlayTask;
}(MediaTask);

/**
 * Pauses the specified media element.
 */


var PauseTask = exports.PauseTask = function (_MediaTask2) {
  _inherits(PauseTask, _MediaTask2);

  function PauseTask() {
    _classCallCheck(this, PauseTask);

    return _possibleConstructorReturn(this, _MediaTask2.call(this, 'pause'));
  }

  /** @override */


  PauseTask.prototype.executeInternal = function executeInternal(mediaEl) {
    mediaEl.pause();
    return Promise.resolve();
  };

  return PauseTask;
}(MediaTask);

/**
 * Unmutes the specified media element.
 */


var UnmuteTask = exports.UnmuteTask = function (_MediaTask3) {
  _inherits(UnmuteTask, _MediaTask3);

  function UnmuteTask() {
    _classCallCheck(this, UnmuteTask);

    return _possibleConstructorReturn(this, _MediaTask3.call(this, 'unmute'));
  }

  /** @override */


  UnmuteTask.prototype.executeInternal = function executeInternal(mediaEl) {
    mediaEl.muted = false;
    mediaEl.removeAttribute('muted');
    return Promise.resolve();
  };

  return UnmuteTask;
}(MediaTask);

/**
 * Mutes the specified media element.
 */


var MuteTask = exports.MuteTask = function (_MediaTask4) {
  _inherits(MuteTask, _MediaTask4);

  function MuteTask() {
    _classCallCheck(this, MuteTask);

    return _possibleConstructorReturn(this, _MediaTask4.call(this, 'mute'));
  }

  /** @override */


  MuteTask.prototype.executeInternal = function executeInternal(mediaEl) {
    mediaEl.muted = true;
    mediaEl.setAttribute('muted', '');
    return Promise.resolve();
  };

  return MuteTask;
}(MediaTask);

/**
 * Seeks the specified media element to the beginning.
 */


var RewindTask = exports.RewindTask = function (_MediaTask5) {
  _inherits(RewindTask, _MediaTask5);

  function RewindTask() {
    _classCallCheck(this, RewindTask);

    return _possibleConstructorReturn(this, _MediaTask5.call(this, 'rewind'));
  }

  /** @override */


  RewindTask.prototype.executeInternal = function executeInternal(mediaEl) {
    mediaEl.currentTime = 0;
    return Promise.resolve();
  };

  return RewindTask;
}(MediaTask);

/**
 * Loads the specified media element.
 */


var LoadTask = exports.LoadTask = function (_MediaTask6) {
  _inherits(LoadTask, _MediaTask6);

  function LoadTask() {
    _classCallCheck(this, LoadTask);

    return _possibleConstructorReturn(this, _MediaTask6.call(this, 'load'));
  }

  /** @override */


  LoadTask.prototype.executeInternal = function executeInternal(mediaEl) {
    mediaEl.load();
    return Promise.resolve();
  };

  return LoadTask;
}(MediaTask);

/**
 * "Blesses" the specified media element for future playback without a user
 * gesture.  In order for this to bless the media element, this function must
 * be invoked in response to a user gesture.
 */


var BlessTask = exports.BlessTask = function (_MediaTask7) {
  _inherits(BlessTask, _MediaTask7);

  function BlessTask() {
    _classCallCheck(this, BlessTask);

    return _possibleConstructorReturn(this, _MediaTask7.call(this, 'bless'));
  }

  /** @override */


  BlessTask.prototype.requiresSynchronousExecution = function requiresSynchronousExecution() {
    return true;
  };

  /** @override */


  BlessTask.prototype.executeInternal = function executeInternal(mediaEl) {
    var isMuted = mediaEl.muted;
    mediaEl.muted = false;
    if (isMuted) {
      mediaEl.muted = true;
    }
    return Promise.resolve();
  };

  return BlessTask;
}(MediaTask);

/**
 * Updates the sources of the specified media element.
 */


var UpdateSourcesTask = exports.UpdateSourcesTask = function (_MediaTask8) {
  _inherits(UpdateSourcesTask, _MediaTask8);

  /**
   * @param {!Sources} newSources The sources to which the media element should
   *     be updated.
   * @param {!../../../src/service/vsync-impl.Vsync} vsync
   */
  function UpdateSourcesTask(newSources, vsync) {
    _classCallCheck(this, UpdateSourcesTask);

    /** @private @const {!Sources} */
    var _this9 = _possibleConstructorReturn(this, _MediaTask8.call(this, 'update-src'));

    _this9.newSources_ = newSources;

    /** @private @const {!../../../src/service/vsync-impl.Vsync} */
    _this9.vsync_ = vsync;
    return _this9;
  }

  /** @override */


  UpdateSourcesTask.prototype.executeInternal = function executeInternal(mediaEl) {
    _sources.Sources.removeFrom(mediaEl);
    this.newSources_.applyToElement(mediaEl);
    return Promise.resolve();
  };

  return UpdateSourcesTask;
}(MediaTask);

/**
 * Swaps a media element into the DOM, in the place of another media element.
 */


var SwapIntoDomTask = exports.SwapIntoDomTask = function (_MediaTask9) {
  _inherits(SwapIntoDomTask, _MediaTask9);

  /**
   * @param {!HTMLMediaElement} replacedMediaEl The element to be replaced by
   *     the media element on which this task is executed.
   * @param {!../../../src/service/vsync-impl.Vsync} vsync
   */
  function SwapIntoDomTask(replacedMediaEl, vsync) {
    _classCallCheck(this, SwapIntoDomTask);

    /** @private @const {!HTMLMediaElement} */
    var _this10 = _possibleConstructorReturn(this, _MediaTask9.call(this, 'swap-into-dom'));

    _this10.replacedMediaEl_ = replacedMediaEl;

    /** @private @const {!../../../src/service/vsync-impl.Vsync} */
    _this10.vsync_ = vsync;
    return _this10;
  }

  /** @override */


  SwapIntoDomTask.prototype.executeInternal = function executeInternal(mediaEl) {
    if (!(0, _dom.isConnectedNode)(this.replacedMediaEl_)) {
      this.failTask('Cannot swap media for element that is not in DOM.');
      return Promise.resolve();
    }

    copyCssClasses(this.replacedMediaEl_, mediaEl);
    copyAttributes(this.replacedMediaEl_, mediaEl);
    this.replacedMediaEl_.parentElement.replaceChild(mediaEl, this.replacedMediaEl_);
    return Promise.resolve();
  };

  return SwapIntoDomTask;
}(MediaTask);

/**
 * Swaps a media element out the DOM, in the place of a placeholder media
 * element.
 */


var SwapOutOfDomTask = exports.SwapOutOfDomTask = function (_MediaTask10) {
  _inherits(SwapOutOfDomTask, _MediaTask10);

  /**
   * @param {!HTMLMediaElement} placeholderMediaEl The element to be replaced by
   *     the media element on which this task is executed.
   * @param {!../../../src/service/vsync-impl.Vsync} vsync
   */
  function SwapOutOfDomTask(placeholderMediaEl, vsync) {
    _classCallCheck(this, SwapOutOfDomTask);

    /** @private @const {!HTMLMediaElement} */
    var _this11 = _possibleConstructorReturn(this, _MediaTask10.call(this, 'swap-out-of-dom'));

    _this11.placeholderMediaEl_ = placeholderMediaEl;

    /** @private @const {!../../../src/service/vsync-impl.Vsync} */
    _this11.vsync_ = vsync;
    return _this11;
  }

  /** @override */


  SwapOutOfDomTask.prototype.executeInternal = function executeInternal(mediaEl) {
    copyCssClasses(mediaEl, this.placeholderMediaEl_);
    copyAttributes(mediaEl, this.placeholderMediaEl_);
    mediaEl.parentElement.replaceChild(this.placeholderMediaEl_, mediaEl);
    return Promise.resolve();
  };

  return SwapOutOfDomTask;
}(MediaTask);

},{"../../../src/dom":48,"./sources":35}],26:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigationState = exports.StateChangeEventDef = exports.StateChangeType = undefined;

var _events = require('./events');

var _observable = require('../../../src/observable');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */


/**
 * Types of state changes that can be consumed.
 * @enum {number}
 */
var StateChangeType = exports.StateChangeType = {
  ACTIVE_PAGE: 0,
  BOOKEND_ENTER: 1,
  BOOKEND_EXIT: 2,
  END: 3
};

/** @typedef {{type: !StateChangeType, value: *}} */
var StateChangeEventDef = exports.StateChangeEventDef = void 0;

/**
 * State store to decouple navigation changes from consumers.
 */

var NavigationState = exports.NavigationState = function () {
  /**
   * @param {!Element} storyElement
   * @param {function():Promise<boolean>} hasBookend
   */
  function NavigationState(storyElement, hasBookend) {
    _classCallCheck(this, NavigationState);

    /** @private @const {!function():Promise<boolean>} */
    this.hasBookend_ = hasBookend;

    /** @private {!Observable<StateChangeEventDef>} */
    this.observable_ = new _observable.Observable();

    this.attachEvents_(storyElement);
  }

  /**
   * @param {!Element} storyElement
   * @private
   */


  NavigationState.prototype.attachEvents_ = function attachEvents_(storyElement) {
    var _this = this;

    storyElement.addEventListener(_events.EventType.SHOW_BOOKEND, function () {
      _this.fire_(StateChangeType.BOOKEND_ENTER);
      _this.fire_(StateChangeType.END);
    });

    storyElement.addEventListener(_events.EventType.CLOSE_BOOKEND, function () {
      _this.fire_(StateChangeType.BOOKEND_EXIT);
    });
  };

  /** @param {function(!StateChangeEventDef):void} stateChangeFn */


  NavigationState.prototype.observe = function observe(stateChangeFn) {
    this.observable_.add(stateChangeFn);
  };

  /**
   * @param {number} pageIndex
   * @param {number} totalPages
   * @param {string=} opt_pageId
   */
  // TODO(alanorozco): pass whether change was automatic or on user action


  NavigationState.prototype.updateActivePage = function updateActivePage(pageIndex, totalPages, opt_pageId) {
    var _this2 = this;

    var changeValue = { pageIndex: pageIndex, totalPages: totalPages };

    if (opt_pageId) {
      changeValue.pageId = opt_pageId;
    }

    this.fire_(StateChangeType.ACTIVE_PAGE, changeValue);

    if (pageIndex >= totalPages - 1) {
      this.hasBookend_().then(function (hasBookend) {
        if (!hasBookend) {
          _this2.fire_(StateChangeType.END);
        }
      });
    }
  };

  /**
   * @param {!StateChangeType} type
   * @param {*=} opt_changeValue
   */


  NavigationState.prototype.fire_ = function fire_(type, opt_changeValue) {
    this.observable_.fire({ type: type, value: opt_changeValue });
  };

  return NavigationState;
}();

},{"../../../src/observable":61,"./events":20}],27:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A whitelist of djb2a hashes of publisher origins.
 * @const {!Array<string>}
 */
var ORIGIN_WHITELIST = exports.ORIGIN_WHITELIST = ['1006163429', '1008162951', '10089108', '101608808', '1019348494', '1024745460', '1025683127', '1040387537', '1042067194', '1048639639', '1048768124', '1055309246', '1061774354', '1066656902', '1080553171', '1081382723', '1085278050', '1087738722', '1097876642', '1098115586', '1120549175', '1122637707', '1123796379', '1137284944', '1148058575', '1158106191', '1162517776', '1167928101', '1172399292', '1180555863', '1182996899', '1191530385', '1193086302', '1203629527', '1206202368', '1209396307', '1210508580', '1212905960', '1219663970', '1221946827', '1224563123', '1224575240', '122776143', '1235870422', '1239612924', '1266686880', '1267058499', '1275112483', '1279420495', '1291285285', '129196458', '1296373605', '1304908597', '1314122247', '1323716407', '1331021272', '1337085136', '1343032467', '1348111506', '1358036688', '1358275160', '1362700107', '1366298771', '136948846', '1370863654', '1384161523', '1384885545', '1390195319', '1390422041', '1392973808', '1403015859', '1408213495', '1409815047', '1416203172', '1416336576', '1420964370', '1424038674', '1426205130', '142793127', '1429768323', '1433535079', '1436589466', '1451865411', '1452555948', '1452631355', '1454471704', '1456452353', '1462086116', '1463873379', '1472537769', '1474107485', '1476740172', '1491204959', '1502183300', '1502183303', '1506356073', '1510693494', '1512200976', '1515192136', '1516044894', '1527955987', '1531622827', '1542113246', '1542890108', '1544071036', '1544904918', '154680092', '1548043628', '1551216225', '1554302139', '1560556568', '156105329', '1565761663', '1568645882', '1574632236', '1587531568', '1597805481', '1604714840', '1605964375', '1606771939', '1606845272', '1628432066', '1629009934', '1633699767', '1638733129', '1639295851', '1639843601', '1641361303', '1641755208', '1645367571', '1651834381', '165218748', '1657655384', '166080441', '166550074', '167065142', '167457365', '1692205821', '172062822', '1727000213', '1729406438', '1734343726', '1750274567', '1752199172', '1758506884', '176099546', '1762075722', '1762779619', '1765761661', '1766408482', '1778814731', '1786821707', '1790421447', '1793364122', '1796631487', '179954814', '1814333326', '1820719129', '1828302437', '1831449632', '1844097179', '1857703569', '1862429134', '1866288580', '1868825623', '1873175698', '1878840548', '188153886', '1885949806', '1890684493', '1891136033', '1897877027', '190058212', '1911273138', '19233369', '1924394550', '1926444709', '192946894', '1932332195', '1934543421', '1944707380', '1948987049', '1958476175', '1960309827', '1960384540', '197478601', '1980609434', '198514785', '2003114268', '2025148527', '2025653254', '2034674542', '2038626037', '2038733725', '2050218658', '2051204756', '2052997999', '2062991370', '2064945552', '2072157691', '2076974480', '208348204', '2109740133', '2114974219', '2116825342', '2118239665', '2124375454', '2126860507', '212690086', '2128662947', '2131418359', '2134891083', '2138194233', '2139925877', '2150296095', '2151200413', '2160997979', '2163333100', '2164891421', '2183916165', '2185544172', '2199838184', '220103233', '220632861', '2207832807', '2214432888', '2221548842', '2231215830', '2232562594', '2236849121', '2246978037', '2247419316', '2250390055', '2250762825', '2252559194', '2254619785', '2271213671', '2277458929', '2278516260', '2284332078', '2299758819', '2311290044', '2325333010', '2326328585', '2342924379', '2360854839', '2362191459', '2373437534', '2374338088', '2375389254', '2388222966', '2393754227', '2406112565', '2413038656', '2414533450', '241505564', '2422198952', '2426360694', '2427371871', '2428857403', '2434633986', '2438549543', '2450881433', '2451485116', '2465244303', '2471412274', '2472591333', '2479885882', '2483800093', '2486258543', '2487828098', '2491279653', '2497925282', '2498415300', '2500743291', '25024500', '250464294', '2512768819', '2514009950', '2514987571', '2517493756', '251839354', '25231870', '2529138038', '2529319010', '255752794', '2563128128', '2569424332', '2580152873', '2587850265', '2588277885', '2600368355', '2602595202', '2606715995', '2612967453', '2613072379', '2616846056', '2619537797', '2627761745', '2629810525', '2632194804', '2635588792', '2636391541', '2637085339', '2652634921', '2662207691', '2671290557', '2672599929', '2688673784', '2690235168', '2705736432', '270580042', '2713112922', '2718273594', '2718446350', '2720496885', '2723434276', '2725145135', '2732398879', '273580543', '2738155690', '2741673809', '2749835187', '2754997109', '2759976952', '2761508292', '2762302648', '2766754689', '2771839729', '2774175302', '2784479860', '2787853368', '2795182078', '2797839121', '2797844367', '2798104093', '2812672743', '2820864954', '2825564215', '2830660705', '2835331287', '283661147', '2845803411', '2852627326', '2861134475', '2866448207', '2866470331', '2872980659', '288246341', '2887960156', '2893467144', '2893590542', '2911378586', '2914243153', '2917909858', '2919447987', '2927763036', '2930531110', '2930818498', '2933287666', '2933678691', '2934412348', '2939338957', '2941207893', '294281365', '294281662', '296084766', '2972849537', '3003621454', '3018496372', '3018644774', '3022092377', '302251478', '3024284791', '3028558767', '3034807703', '3036809290', '303732921', '3040972817', '3060985947', '3063651839', '3075313860', '3090399922', '3092172140', '3108333779', '3109674920', '3121167307', '3129729985', '3132507840', '3133369938', '3144086645', '3144741080', '3153172095', '3156001180', '3162265419', '3172876126', '3181090214', '3185535902', '3188249139', '3189406311', '3201739013', '3208039641', '3213623864', '3216947982', '3226517851', '3240528713', '3244251087', '3250723869', '3252080663', '3256754508', '3259979025', '3261687030', '3263349802', '3268659322', '3271330177', '3283747143', '3284374556', '3285310371', '32924227', '3295776646', '3301018689', '3301688194', '3307671928', '3308888367', '3309952347', '3319768647', '3320829318', '3322156041', '3326846086', '3341054457', '3349409886', '3353312560', '3355368229', '3355865416', '335855777', '335993804', '3361466716', '3362397554', '3367171293', '3376790055', '3377688480', '3381390900', '3385268402', '3385846727', '338844244', '3390751743', '3394315494', '3402978750', '3408249191', '3416831537', '3422087589', '3424311896', '3429649351', '3436742277', '3446215673', '3448620799', '3450221390', '3451824873', '3455711044', '3458310975', '3464002149', '3473901382', '3494887100', '3498056818', '3500123957', '3501893757', '351733085', '35263365', '353380306', '3535681127', '354082441', '3550596029', '3551433075', '3552657708', '3561349461', '3568064118', '3572504894', '3574354948', '3584992110', '3585356855', '3589838638', '3591084947', '3591311390', '3594356251', '3607050633', '3623074634', '3635562717', '363894702', '365125059', '3652728877', '3655120568', '365605518', '3656736643', '3657625030', '3662429216', '3670522374', '3673866953', '3685844947', '3692367215', '3695202375', '369644343', '3700425047', '3700982698', '3711744991', '3712090763', '3718288426', '3739222329', '3739723588', '3741803823', '3742076373', '3743398870', '3747063085', '3768651282', '3774834930', '3782187505', '3785031815', '3802272349', '3803427289', '3808515023', '3817759242', '3821795909', '3828921363', '382915004', '3835330948', '3835931824', '3838983789', '3841844405', '3842213279', '3866956400', '3867683259', '3882775575', '3887937944', '3902596111', '3907965689', '3916735828', '3919621757', '3926983707', '3931371606', '3935672072', '3942169396', '39435537', '3952253013', '3952985875', '3960376034', '3964022265', '3969333164', '3980734000', '3984648422', '399163616', '4011166599', '4012569232', '4015960781', '402077837', '4022635071', '4031427958', '4038419154', '4038719404', '4040963526', '4045001232', '4045348626', '4047076163', '4050194446', '4051110478', '4053566461', '4062202631', '4064403033', '4067292809', '4071169494', '4072394641', '4083044353', '4084194935', '4092369519', '4092664937', '4096098894', '4097039999', '4098138342', '4102232185', '410737467', '4118683051', '4127212193', '4127351496', '4129698325', '4130370977', '4136314176', '4137746800', '4138310485', '4138748709', '4139415765', '4140762491', '414191242', '4143625838', '4158727075', '4162923732', '4165850368', '4166688207', '4171920376', '4177803870', '4189681769', '4190697962', '4195946149', '4199121874', '4200069764', '4205027822', '4205379393', '4206479264', '4214687327', '4220526267', '4236710113', '4237053731', '4237182114', '4237691393', '4248203292', '4249223952', '4265092200', '4269692612', '4273375831', '4278046063', '4279918903', '4286009170', '431449824', '436035672', '436895478', '446783407', '455553168', '468972428', '473408210', '475325125', '481608910', '497560025', '508331528', '509801075', '524581881', '525657889', '535848262', '552831033', '56119367', '589348565', '590180088', '590449081', '605645428', '607649949', '613252162', '616398681', '616652136', '620434036', '628256541', '630124302', '637590687', '646925241', '649068147', '664849843', '666552315', '667802223', '673490260', '675617839', '676286387', '679226261', '681317506', '684496063', '687924735', '690204840', '699169033', '699554795', '699835401', '708478954', '709875223', '721006546', '722659024', '740460396', '750731789', '759835262', '760645918', '76243793', '763580606', '764546410', '770400223', '773697188', '777846327', '779185847', '781950191', '785278645', '791888271', '793360597', '795111685', '799038630', '802940860', '803626326', '805461297', '809525143', '812914966', '817596813', '826702818', '829747121', '830059440', '834917366', '836634675', '840748945', '845690173', '851918419', '853535426', '855882027', '865387614', '870075114', '878041739', '884037848', '884942273', '885000263', '886030867', '887992794', '9021761', '904920502', '90677328', '907695148', '911963500', '919166850', '926902921', '92732745', '92829579', '93038994', '932642421', '932940871', '938755445', '947303209', '956771599', '958749034', '959889676', '960466505', '962380673', '965728075', '973612916', '976603789', '978364597', '9851868', '986539863', '989444878', '990312922'];

},{}],28:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdvancementConfig = exports.TapNavigationDirection = exports.POLL_INTERVAL_MS = undefined;

var _services = require('../../../src/services');

var _videoInterface = require('../../../src/video-interface');

var _dom = require('../../../src/dom');

var _log = require('../../../src/log');

var _utils = require('./utils');

var _eventHelper = require('../../../src/event-helper');

var _object = require('../../../src/utils/object');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */


/** @private @const {number} */
var NEXT_SCREEN_AREA_RATIO = 0.75;

/** @const {number} */
var POLL_INTERVAL_MS = exports.POLL_INTERVAL_MS = 300;

/** @const @enum */
var TapNavigationDirection = exports.TapNavigationDirection = {
  'NEXT': 1,
  'PREVIOUS': 2
};

/**
 * Base class for the AdvancementConfig.  By default, does nothing other than
 * tracking its internal state when started/stopped, and listeners will never be
 * invoked.
 */

var AdvancementConfig = exports.AdvancementConfig = function () {
  function AdvancementConfig() {
    _classCallCheck(this, AdvancementConfig);

    /** @private @const {!Array<function(number)>} */
    this.progressListeners_ = [];

    /** @private @const {!Array<function()>} */
    this.advanceListeners_ = [];

    /** @private @const {!Array<function()>} */
    this.previousListeners_ = [];

    /** @private @const {!Array<function(number)>} */
    this.tapNavigationListeners_ = [];

    /** @private {boolean} */
    this.isRunning_ = false;
  }

  /**
   * @param {function(number)} progressListener A function that handles when the
   *     progress of the current page has been updated.  It accepts a number
   *     between 0.0 and 1.0 as its only argument, that represents the current
   *     progress.
   */


  AdvancementConfig.prototype.addProgressListener = function addProgressListener(progressListener) {
    this.progressListeners_.push(progressListener);
  };

  /**
   * @param {function()} advanceListener A function that handles when a
   *     page should be advanced.
   */


  AdvancementConfig.prototype.addAdvanceListener = function addAdvanceListener(advanceListener) {
    this.advanceListeners_.push(advanceListener);
  };

  /**
   * @param {function()} previousListener A function that handles when a
   *     page should go back to the previous page.
   */


  AdvancementConfig.prototype.addPreviousListener = function addPreviousListener(previousListener) {
    this.previousListeners_.push(previousListener);
  };

  /**
   * @param {function(number)} onTapNavigationListener A function that handles when a
   * navigation listener to be fired.
   */


  AdvancementConfig.prototype.addOnTapNavigationListener = function addOnTapNavigationListener(onTapNavigationListener) {
    this.tapNavigationListeners_.push(onTapNavigationListener);
  };

  /**
   * Invoked when the advancement configuration should begin taking effect.
   */


  AdvancementConfig.prototype.start = function start() {
    this.isRunning_ = true;
  };

  /**
   * Invoked when the advancement configuration should cease taking effect.
   */


  AdvancementConfig.prototype.stop = function stop() {
    this.isRunning_ = false;
  };

  /**
   * @return {boolean}
   * @protected
   */


  AdvancementConfig.prototype.isRunning = function isRunning() {
    return this.isRunning_;
  };

  /**
   * @return {number}
   * @protected
   */


  AdvancementConfig.prototype.getProgress = function getProgress() {
    return 1;
  };

  /** @protected */


  AdvancementConfig.prototype.onProgressUpdate = function onProgressUpdate() {
    var progress = this.getProgress();
    this.progressListeners_.forEach(function (progressListener) {
      progressListener(progress);
    });
  };

  /** @protected */


  AdvancementConfig.prototype.onAdvance = function onAdvance() {
    this.advanceListeners_.forEach(function (advanceListener) {
      advanceListener();
    });
  };

  /** @protected */


  AdvancementConfig.prototype.onPrevious = function onPrevious() {
    this.previousListeners_.forEach(function (previousListener) {
      previousListener();
    });
  };

  /**
   * @param {number} navigationDirection Direction of navigation
   * @protected
   */


  AdvancementConfig.prototype.onTapNavigation = function onTapNavigation(navigationDirection) {
    this.tapNavigationListeners_.forEach(function (navigationListener) {
      navigationListener(navigationDirection);
    });
  };

  /**
   * Provides an AdvancementConfig object for the specified amp-story-page.
   * @param {!./amp-story-page.AmpStoryPage} page
   * @return {!AdvancementConfig}
   */


  AdvancementConfig.forPage = function forPage(page) {
    var rootEl = page.element;
    var win = rootEl.ownerDocument.defaultView;
    var autoAdvanceStr = rootEl.getAttribute('auto-advance-after');

    var supportedAdvancementModes = [new ManualAdvancement(rootEl), TimeBasedAdvancement.fromAutoAdvanceString(autoAdvanceStr, win), MediaBasedAdvancement.fromAutoAdvanceString(autoAdvanceStr, win, rootEl)].filter(function (x) {
      return x !== null;
    });

    if (supportedAdvancementModes.length === 0) {
      return new AdvancementConfig();
    }

    if (supportedAdvancementModes.length === 1) {
      return supportedAdvancementModes[0];
    }

    return new MultipleAdvancementConfig(supportedAdvancementModes);
  };

  return AdvancementConfig;
}();

/**
 * An AdvancementConfig implementation that composes multiple other
 * AdvancementConfig implementations by simply delegating all of its calls to
 * an array of underlying advancement modes.
 */


var MultipleAdvancementConfig = function (_AdvancementConfig) {
  _inherits(MultipleAdvancementConfig, _AdvancementConfig);

  /**
   * @param {!Array<!AdvancementConfig>} advancementModes A list of
   *     AdvancementConfigs to which all calls should be delegated.
   */
  function MultipleAdvancementConfig(advancementModes) {
    _classCallCheck(this, MultipleAdvancementConfig);

    /** @private @const {!Array<!AdvancementConfig>} */
    var _this = _possibleConstructorReturn(this, _AdvancementConfig.call(this));

    _this.advancementModes_ = advancementModes;
    return _this;
  }

  /** @override */


  MultipleAdvancementConfig.prototype.addProgressListener = function addProgressListener(progressListener) {
    this.advancementModes_.forEach(function (advancementMode) {
      advancementMode.addProgressListener(progressListener);
    });
  };

  /** @override */


  MultipleAdvancementConfig.prototype.addOnTapNavigationListener = function addOnTapNavigationListener(onTapNavigationListener) {
    this.advancementModes_.forEach(function (advancementMode) {
      advancementMode.addOnTapNavigationListener(onTapNavigationListener);
    });
  };

  /** @override */


  MultipleAdvancementConfig.prototype.addAdvanceListener = function addAdvanceListener(advanceListener) {
    this.advancementModes_.forEach(function (advancementMode) {
      advancementMode.addAdvanceListener(advanceListener);
    });
  };

  /** @override */


  MultipleAdvancementConfig.prototype.addPreviousListener = function addPreviousListener(previousListener) {
    this.advancementModes_.forEach(function (advancementMode) {
      advancementMode.addPreviousListener(previousListener);
    });
  };

  /** @override */


  MultipleAdvancementConfig.prototype.start = function start() {
    _AdvancementConfig.prototype.start.call(this);
    this.advancementModes_.forEach(function (advancementMode) {
      advancementMode.start();
    });
  };

  /** @override */


  MultipleAdvancementConfig.prototype.stop = function stop() {
    _AdvancementConfig.prototype.stop.call(this);
    this.advancementModes_.forEach(function (advancementMode) {
      advancementMode.stop();
    });
  };

  return MultipleAdvancementConfig;
}(AdvancementConfig);

/**
 * Always provides a progress of 1.0.  Advances when the user taps the rightmost
 * 75% of the screen; triggers the previous listener when the user taps the
 * leftmost 25% of the screen.
 */


var ManualAdvancement = function (_AdvancementConfig2) {
  _inherits(ManualAdvancement, _AdvancementConfig2);

  /**
   * @param {!Element} element The element that, when clicked, can cause
   *     advancing to the next page or going back to the previous.
   */
  function ManualAdvancement(element) {
    _classCallCheck(this, ManualAdvancement);

    var _this2 = _possibleConstructorReturn(this, _AdvancementConfig2.call(this));

    _this2.element_ = element;
    _this2.clickListener_ = _this2.maybePerformNavigation_.bind(_this2);
    _this2.hasAutoAdvanceStr_ = _this2.element_.getAttribute('auto-advance-after');
    return _this2;
  }

  /** @override */


  ManualAdvancement.prototype.start = function start() {
    _AdvancementConfig2.prototype.start.call(this);
    this.element_.addEventListener('click', this.clickListener_, true);
    if (!this.hasAutoAdvanceStr_) {
      _AdvancementConfig2.prototype.onProgressUpdate.call(this);
    }
  };

  /** @override */


  ManualAdvancement.prototype.stop = function stop() {
    _AdvancementConfig2.prototype.stop.call(this);
    this.element_.removeEventListener('click', this.clickListener_, true);
  };

  /** @override */


  ManualAdvancement.prototype.getProgress = function getProgress() {
    return 1.0;
  };

  /**
   * Determines whether a click should be used for navigation.  Navigate should
   * occur unless the click is on the system layer, or on an element that
   * defines on="tap:..."
   * @param {!Event} e 'click' event.
   * @return {boolean} true, if the click should be used for navigation.
   * @private
   */


  ManualAdvancement.prototype.isNavigationalClick_ = function isNavigationalClick_(e) {
    return !(0, _dom.closest)((0, _log.dev)().assertElement(e.target), function (el) {
      return (0, _utils.hasTapAction)(el);
    }, /* opt_stopAt */this.element_);
  };

  /**
   * We want clicks on certain elements to be exempted from normal page navigation
   * @param {!Event} event
   * @return {boolean}
   */


  ManualAdvancement.prototype.isProtectedTarget_ = function isProtectedTarget_(event) {
    var protectedElements = (0, _object.map)({
      A: true,
      BUTTON: true
    });

    return protectedElements[event.target.tagName] || false;
  };

  /**
   * Performs a system navigation if it is determined that the specified event
   * was a click intended for navigation.
   * @param {!Event} event 'click' event
   * @private
   */


  ManualAdvancement.prototype.maybePerformNavigation_ = function maybePerformNavigation_(event) {
    if (!this.isNavigationalClick_(event) || this.isProtectedTarget_(event)) {
      // If the system doesn't need to handle this click, then we can simply
      // return and let the event propagate as it would have otherwise.
      return;
    }

    event.stopPropagation();

    // TODO(newmuis): This will need to be flipped for RTL.
    var elRect = this.element_. /*OK*/getBoundingClientRect();

    // Using `left` as a fallback since Safari returns a ClientRect in some
    // cases.
    var offsetLeft = 'x' in elRect ? elRect.x : elRect.left;
    var offsetWidth = elRect.width;

    var nextScreenAreaMin = offsetLeft + (1 - NEXT_SCREEN_AREA_RATIO) * offsetWidth;
    var nextScreenAreaMax = offsetLeft + offsetWidth;

    if (event.pageX >= nextScreenAreaMin && event.pageX < nextScreenAreaMax) {
      this.onTapNavigation(TapNavigationDirection.NEXT);
    } else if (event.pageX >= offsetLeft && event.pageX < nextScreenAreaMin) {
      this.onTapNavigation(TapNavigationDirection.PREVIOUS);
    }
  };

  return ManualAdvancement;
}(AdvancementConfig);

/**
 * Provides progress and advancement based on a fixed duration of time,
 * specified in either seconds or milliseconds.
 */


var TimeBasedAdvancement = function (_AdvancementConfig3) {
  _inherits(TimeBasedAdvancement, _AdvancementConfig3);

  /**
   * @param {!Window} win The Window object.
   * @param {number} delayMs The duration to wait before advancing.
   */
  function TimeBasedAdvancement(win, delayMs) {
    _classCallCheck(this, TimeBasedAdvancement);

    /** @private @const {!../../../src/service/timer-impl.Timer} */
    var _this3 = _possibleConstructorReturn(this, _AdvancementConfig3.call(this));

    _this3.timer_ = _services.Services.timerFor(win);

    /** @private @const {number} */
    _this3.delayMs_ = delayMs;

    /** @private {?number} */
    _this3.startTimeMs_ = null;

    /** @private {number|string|null} */
    _this3.timeoutId_ = null;
    return _this3;
  }

  /**
   * @return {number} The current timestamp, in milliseconds.
   * @private
   */


  TimeBasedAdvancement.prototype.getCurrentTimestampMs_ = function getCurrentTimestampMs_() {
    return Date.now();
  };

  /** @override */


  TimeBasedAdvancement.prototype.start = function start() {
    var _this4 = this;

    _AdvancementConfig3.prototype.start.call(this);
    this.startTimeMs_ = this.getCurrentTimestampMs_();

    this.timeoutId_ = this.timer_.delay(function () {
      return _this4.onAdvance();
    }, this.delayMs_);

    this.timer_.poll(POLL_INTERVAL_MS, function () {
      _this4.onProgressUpdate();
      return !_this4.isRunning();
    });
  };

  /** @override */


  TimeBasedAdvancement.prototype.stop = function stop() {
    _AdvancementConfig3.prototype.stop.call(this);

    if (this.timeoutId_ !== null) {
      this.timer_.cancel(this.timeoutId_);
    }
  };

  /** @override */


  TimeBasedAdvancement.prototype.getProgress = function getProgress() {
    if (this.startTimeMs_ === null) {
      return 0;
    }

    var progress = (this.getCurrentTimestampMs_() - this.startTimeMs_) / this.delayMs_;

    return Math.min(Math.max(progress, 0), 1);
  };

  /**
   * Gets an instance of TimeBasedAdvancement based on the value of the
   * auto-advance string (from the 'auto-advance-after' attribute on the page).
   * @param {string} autoAdvanceStr The value of the auto-advance-after
   *     attribute.
   * @return {?AdvancementConfig} An AdvancementConfig, if time-based
   *     auto-advance is supported for the specified auto-advance string; null
   *     otherwise.
   */


  TimeBasedAdvancement.fromAutoAdvanceString = function fromAutoAdvanceString(autoAdvanceStr, win) {
    if (!autoAdvanceStr) {
      return null;
    }

    var delayMs = (0, _utils.timeStrToMillis)(autoAdvanceStr);
    if (delayMs === undefined || isNaN(delayMs)) {
      return null;
    }

    return new TimeBasedAdvancement(win, Number(delayMs));
  };

  return TimeBasedAdvancement;
}(AdvancementConfig);

/**
 * Provides progress and advances pages based on the completion percentage of
 * playback of an HTMLMediaElement or a video that implements the AMP
 * video-interface.
 *
 * These are combined into a single AdvancementConfig implementation because we
 * may not know at build time whether a video implements the AMP
 * video-interface, since that is dependent on the amp-video buildCallback
 * having been executed before the amp-story-page buildCallback, which is not
 * guaranteed.
 */


var MediaBasedAdvancement = function (_AdvancementConfig4) {
  _inherits(MediaBasedAdvancement, _AdvancementConfig4);

  function MediaBasedAdvancement(win, element) {
    _classCallCheck(this, MediaBasedAdvancement);

    /** @private @const {!../../../src/service/timer-impl.Timer} */
    var _this5 = _possibleConstructorReturn(this, _AdvancementConfig4.call(this));

    _this5.timer_ = _services.Services.timerFor(win);

    /** @private @const {!Element} */
    _this5.element_ = element;

    /** @private {?Element} */
    _this5.mediaElement_ = null;

    /** @private {?../../../src/video-interface.VideoInterface} */
    _this5.video_ = null;
    return _this5;
  }

  /**
   * Determines whether the element for auto advancement implements the video
   * interface.
   * @return {boolean} true, if the specified element implements the video
   *     interface.
   * @private
   */


  MediaBasedAdvancement.prototype.isVideoInterfaceVideo_ = function isVideoInterfaceVideo_() {
    return this.element_.classList.contains('i-amphtml-video-interface');
  };

  /**
   * Gets an HTMLMediaElement from an element that wraps it.
   * @return {?Element} The underlying HTMLMediaElement, if one exists.
   * @private
   */


  MediaBasedAdvancement.prototype.getMediaElement_ = function getMediaElement_() {
    var tagName = this.element_.tagName.toLowerCase();

    if (this.element_ instanceof HTMLMediaElement) {
      return this.element_;
    } else if (this.element_.hasAttribute('background-audio') && (tagName === 'amp-story' || tagName === 'amp-story-page')) {
      return this.element_.querySelector('.i-amphtml-story-background-audio');
    } else if (tagName === 'amp-audio') {
      return this.element_.querySelector('audio');
    }

    return null;
  };

  /** @override */


  MediaBasedAdvancement.prototype.start = function start() {
    var _this6 = this;

    _AdvancementConfig4.prototype.start.call(this);

    // Prevents race condition when checking for video interface classname.
    (this.element_.whenBuilt ? this.element_.whenBuilt() : Promise.resolve()).then(function () {
      return _this6.startWhenBuilt_();
    });
  };

  /** @private */


  MediaBasedAdvancement.prototype.startWhenBuilt_ = function startWhenBuilt_() {
    if (this.isVideoInterfaceVideo_()) {
      this.startVideoInterfaceElement_();
      return;
    }

    if (!this.mediaElement_) {
      this.mediaElement_ = this.getMediaElement_();
    }

    if (this.mediaElement_) {
      this.startHtmlMediaElement_();
      return;
    }

    (0, _log.user)().error('AMP-STORY-PAGE', 'Element with ID ' + this.element_.id + ' is not a media element ' + 'supported for automatic advancement.');
  };

  /** @private */


  MediaBasedAdvancement.prototype.startHtmlMediaElement_ = function startHtmlMediaElement_() {
    var _this7 = this;

    var mediaElement = (0, _log.dev)().assertElement(this.mediaElement_, 'Media element was unspecified.');
    (0, _eventHelper.listenOnce)(mediaElement, 'ended', function () {
      return _this7.onAdvance();
    });
    (0, _eventHelper.listenOnce)(mediaElement, 'timeupdate', function () {
      return _this7.onProgressUpdate();
    });
  };

  /** @private */


  MediaBasedAdvancement.prototype.startVideoInterfaceElement_ = function startVideoInterfaceElement_() {
    var _this8 = this;

    this.element_.getImpl().then(function (video) {
      _this8.video_ = video;
    });

    (0, _eventHelper.listenOnce)(this.element_, _videoInterface.VideoEvents.ENDED, function () {
      return _this8.onAdvance();
    }, { capture: true });

    this.timer_.poll(POLL_INTERVAL_MS, function () {
      _this8.onProgressUpdate();
      return !_this8.isRunning();
    });
  };

  /** @override */


  MediaBasedAdvancement.prototype.stop = function stop() {
    // We don't need to explicitly stop the polling or media events listed
    // above, since they are already bound to either the playback of the media
    // on the page, or the isRunning state of this AdvancementConfig.
    _AdvancementConfig4.prototype.stop.call(this);
  };

  /** @override */


  MediaBasedAdvancement.prototype.getProgress = function getProgress() {
    if (this.isVideoInterfaceVideo_()) {
      if (this.video_ && this.video_.getDuration()) {
        return this.video_.getCurrentTime() / this.video_.getDuration();
      }

      return 0;
    }

    if (this.mediaElement_ && this.mediaElement_.duration) {
      return this.mediaElement_.currentTime / this.mediaElement_.duration;
    }

    return _AdvancementConfig4.prototype.getProgress.call(this);
  };

  /**
   * Gets an instance of MediaBasedAdvancement based on the value of the
   * auto-advance string (from the 'auto-advance-after' attribute on the page).
   * @param {string} autoAdvanceStr The value of the auto-advance-after
   *     attribute.
   * @return {?AdvancementConfig} An AdvancementConfig, if media-element-based
   *     auto-advance is supported for the specified auto-advance string; null
   *     otherwise.
   */


  MediaBasedAdvancement.fromAutoAdvanceString = function fromAutoAdvanceString(autoAdvanceStr, win, rootEl) {
    try {
      var element = rootEl.querySelector('#' + (0, _dom.escapeCssSelectorIdent)(autoAdvanceStr));

      if (!element) {
        return null;
      }

      return new MediaBasedAdvancement(win, element);
    } catch (e) {
      return null;
    }
  };

  return MediaBasedAdvancement;
}(AdvancementConfig);

},{"../../../src/dom":48,"../../../src/event-helper":51,"../../../src/log":57,"../../../src/services":72,"../../../src/utils/object":83,"../../../src/video-interface":85,"./utils":38}],29:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageScalingService = undefined;

var _services = require('../../../src/services');

var _dom = require('../../../src/dom');

var _log = require('../../../src/log');

var _experiments = require('../../../src/experiments');

var _style = require('../../../src/style');

var _rateLimit = require('../../../src/utils/rate-limit');

var _types = require('../../../src/types');

var _utils = require('./utils');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */


/** @private @const {number} */
var MIN_LAYER_WIDTH_PX = 380;

/** @private @const {number} */
var MAX_LAYER_WIDTH_PX = 520;

/** @private @const {string} */
var SCALING_APPLIED_CLASSNAME = 'i-amphtml-story-scaled';

/** @struct @typedef {{factor: number, width: number, height: number}} */
var TargetDimensionsDef = void 0;

/**
 * @struct
 * @typedef {{
 *   relativeWidth: number,
 *   relativeHeight: number,
 *   matrix: ?Array<number>,
 * }}
 */
var ScalableDimensionsDef = void 0;

/**
 * @param {!Element} sizer
 * @return {!TargetDimensionsDef}
 */
function targetDimensionsFor(sizer) {
  var _unscaledClientRect = (0, _utils.unscaledClientRect)(sizer),
      width = _unscaledClientRect.width,
      height = _unscaledClientRect.height;

  var ratio = width / height;

  var targetWidth = Math.min(MAX_LAYER_WIDTH_PX, Math.max(width, Math.max(1, ratio) * MIN_LAYER_WIDTH_PX));

  var targetHeight = targetWidth / ratio;

  var factor = width / targetWidth;

  return { factor: factor, width: targetWidth, height: targetHeight };
}

/**
 * @param {number} factor
 * @param {number} width
 * @param {number} height
 * @param {!Array<number>} matrix
 * @return {!Object<string, *>}
 */
function scaleTransform(factor, width, height, matrix) {
  // TODO(alanorozco, #12934): Translate values are not correctly calculated if
  // `scale`, `skew` or `rotate` have been user-defined.
  var translateX = width * factor / 2 - width / 2;
  var translateY = height * factor / 2 - height / 2;
  return [matrix[0] * factor, matrix[1], matrix[2], matrix[3] * factor, matrix[4] + translateX, matrix[5] + translateY];
}

/**
 * @param {!Element} page
 * @return {!Array<!Element>}
 */
function scalableElements(page) {
  return (0, _types.toArray)((0, _dom.childElementsByTag)(page, 'amp-story-grid-layer'));
}

/**
 * @param {!Element} page
 * @return {boolean}
 */
function isScalingEnabled(page) {
  // TODO(alanorozco, #12902): Clean up experiment flag.
  // NOTE(alanorozco): Experiment flag is temporary. No need to clutter the
  // signatures in this function path by adding `win` as a parameter.
  var win = (0, _types.toWin)(page.ownerDocument.defaultView);
  if ((0, _experiments.isExperimentOn)(win, 'amp-story-scaling')) {
    return true;
  }
  return page.getAttribute('scaling') == 'relative';
}

/**
 * @param {!Element} page
 * @return {boolean}
 */
function isScalingApplied(page) {
  return page.classList.contains(SCALING_APPLIED_CLASSNAME);
}

/**
 * @param {!Element} page
 * @param {boolean} isApplied
 */
function markScalingApplied(page) {
  var isApplied = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  page.classList.toggle(SCALING_APPLIED_CLASSNAME, isApplied);
}

/**
 * Required for lazy evaluation after resize.
 * @param {!Element} page
 * @return {boolean}
 */
function withinRange(page) {
  return (0, _dom.matches)(page, '[active], [distance="1"], [desktop] > [distance="2"]');
}

/**
 * @param {!Window} win
 * @return {boolean}
 */
function isCssZoomSupported(win) {
  // IE supports `zoom`, but not `CSS.supports`.
  return _services.Services.platformFor(win).isIe() || win.CSS.supports('zoom', '1');
}

/**
 * @param {!Window} win
 * @return {boolean}
 */
function isCssCustomPropsSupported(win) {
  return !_services.Services.platformFor(win).isIe() && win.CSS.supports('(--foo: red)');
}

/** @private {?PageScalingService} */
var pageScalingService = null;

/**
 * Service for scaling pages dynamically so their layers will be sized within a
 * certain pixel range independent of visual dimensions.
 */
// TODO(alanorozco): Make this part of the runtime layout system to prevent
// FOUC-like jump and allow for SSR.

var PageScalingService = exports.PageScalingService = function () {
  /**
   * @param {!Window} win
   * @param {!Element} rootEl
   */
  function PageScalingService(win, rootEl) {
    var _this = this;

    _classCallCheck(this, PageScalingService);

    /** @private @const {!Window} */
    this.win_ = win;

    /** @private @const {!Element} */
    this.rootEl_ = rootEl;

    /** @private @const */
    this.vsync_ = _services.Services.vsyncFor(win);

    /** @private @const {?Element} */
    // Assumes active page to be determinant of the target size.
    this.sizer_ = rootEl.querySelector('amp-story-page[active]');

    /** @private {?TargetDimensionsDef} */
    this.targetDimensions_ = null;

    /** @private {!Object<string, !Array<!ScalableDimensionsDef>>} */
    this.scalableElsDimensions_ = {};

    _services.Services.viewportForDoc(rootEl).onResize((0, _rateLimit.throttle)(win, function () {
      return _this.onViewportResize_();
    }, 100));
  }

  /**
   * @param {!Element} story
   * @return {!PageScalingService}
   */


  PageScalingService.for = function _for(story) {
    // Implemented as singleton for now, should be mapped to story element.
    // TODO(alanorozco): Implement mapping to support multiple <amp-story>
    // instances in one doc.
    var win = (0, _types.toWin)(story.ownerDocument.defaultView);
    if (!pageScalingService) {
      // TODO(alanorozco, #13064): Falling back to transform on iOS
      if (!isCssZoomSupported(win) || _services.Services.platformFor(win).isIos()) {
        // TODO(alanorozco, #12934): Combine transform matrix.
        (0, _log.user)().warn('AMP-STORY', '`amp-story-scaling` using CSS transforms as fallback.', 'Any `amp-story-grid-layer` with user-defined CSS transforms will', 'break.', 'See https://github.com/ampproject/amphtml/issues/12934');
        pageScalingService = new TransformScalingService(win, story);
      } else if (isCssCustomPropsSupported(win)) {
        pageScalingService = new CssPropsZoomScalingService(win, story);
      } else {
        pageScalingService = new ZoomScalingService(win, story);
      }
    }
    return pageScalingService;
  };

  /**
   * @param {!Element} page
   * @return {!Promise}
   */


  PageScalingService.prototype.scale = function scale(page) {
    return Promise.resolve(this.scale_(page));
  };

  /**
   * @param {!Element} page
   * @return {!Promise|undefined}
   * @private
   */


  PageScalingService.prototype.scale_ = function scale_(page) {
    var _this2 = this;

    if (isScalingApplied(page)) {
      return;
    }
    if (!isScalingEnabled(page)) {
      return;
    }
    if (!withinRange(page)) {
      return;
    }
    return this.vsync_.runPromise({
      measure: function measure(state) {
        state.targetDimensions = _this2.measureTargetDimensions_();
        state.scalableElsDimensions = _this2.getOrMeasureScalableElsFor(page);
      },
      mutate: function mutate(state) {
        var targetDimensions = state.targetDimensions,
            scalableElsDimensions = state.scalableElsDimensions;

        scalableElements(page).forEach(function (el, i) {
          // `border-box` required since layer now has a width/height set.
          (0, _style.setImportantStyles)(el, { 'box-sizing': 'border-box' });
          (0, _style.setImportantStyles)(el, _this2.scalingStyles(targetDimensions, scalableElsDimensions[i]));
        });
        markScalingApplied(page);
      }
    }, /* state */{});
  };

  /**
   * @return {!TargetDimensionsDef}
   * @private
   */


  PageScalingService.prototype.measureTargetDimensions_ = function measureTargetDimensions_() {
    if (!this.targetDimensions_) {
      var sizer = (0, _log.dev)().assertElement(this.sizer_, 'No sizer.');
      var dimensions = targetDimensionsFor(sizer);
      this.targetDimensions_ = dimensions;
      this.updateRootProps(dimensions);
    }
    return (/** @type {!TargetDimensionsDef} */(0, _log.dev)().assert(this.targetDimensions_)
    );
  };

  /**
   * @param {!Element} page
   * @return {!Array<!ScalableDimensionsDef>}
   * @protected
   */


  PageScalingService.prototype.getOrMeasureScalableElsFor = function getOrMeasureScalableElsFor(page) {
    var pageId = (0, _log.user)().assert(page.id, 'No page id.');

    if (!this.scalableElsDimensions_[pageId]) {
      this.scalableElsDimensions_[pageId] = this.measureScalableElsFor(page);
    }

    return (/** @type {!Array<!ScalableDimensionsDef>} */(0, _log.dev)().assert(this.scalableElsDimensions_[pageId])
    );
  };

  /**
   * Measures scalable elements in a page.
   * @param {!Element} page
   * @return {!Array<!ScalableDimensionsDef>}
   * @protected
   */


  PageScalingService.prototype.measureScalableElsFor = function measureScalableElsFor(page) {
    var _this3 = this;

    var _unscaledClientRect2 = (0, _utils.unscaledClientRect)(page),
        width = _unscaledClientRect2.width,
        height = _unscaledClientRect2.height;

    var pageWidth = width;
    var pageHeight = height;
    return scalableElements(page).map(function (el) {
      var _unscaledClientRect3 = (0, _utils.unscaledClientRect)(el),
          width = _unscaledClientRect3.width,
          height = _unscaledClientRect3.height;

      return {
        matrix: _this3.getTransformMatrix(el),
        relativeWidth: width / pageWidth,
        relativeHeight: height / pageHeight
      };
    });
  };

  /** @private */


  PageScalingService.prototype.onViewportResize_ = function onViewportResize_() {
    var _this4 = this;

    this.targetDimensions_ = null;
    this.vsync_.measure(function () {
      _this4.measureTargetDimensions_();
    });
    this.updatePagesOnResize();
  };

  /** @protected */


  PageScalingService.prototype.scaleAll = function scaleAll() {
    var _this5 = this;

    var pages = (0, _types.toArray)((0, _dom.childElementsByTag)(this.rootEl_, 'amp-story-page'));
    pages.forEach(function (page) {
      markScalingApplied(page, false);
      _this5.scale_(page);
    });
  };

  /**
   * Updates properties on root element when target dimensions have been
   * re-measured.
   * @param {!TargetDimensionsDef} unusedTargetDimensions
   */


  PageScalingService.prototype.updateRootProps = function updateRootProps(unusedTargetDimensions) {}
  // Intentionally left blank.


  /** @protected */
  ;

  PageScalingService.prototype.updatePagesOnResize = function updatePagesOnResize() {}
  // Intentionally left blank.


  /**
   * Gets an element's transform matrix.
   * @param {!Element} unusedEl
   * @return {?Array<number>}
   */
  ;

  PageScalingService.prototype.getTransformMatrix = function getTransformMatrix(unusedEl) {
    // Calculating a transform matrix is optional depending on scaling
    // implementation.
    return null;
  };

  /**
   * @param {!TargetDimensionsDef} unusedTargetDimensions
   * @param {!ScalableDimensionsDef} unusedScalableElDimensions
   * @return {!Object<string, *>}
   * @protected
   */


  PageScalingService.prototype.scalingStyles = function scalingStyles(unusedTargetDimensions, unusedScalableElDimensions) {
    (0, _log.dev)().assert(false, 'Empty PageScalingService implementation.');
    return {};
  };

  return PageScalingService;
}();

/** Uses CSS zoom as scaling method. */


var ZoomScalingService = function (_PageScalingService) {
  _inherits(ZoomScalingService, _PageScalingService);

  function ZoomScalingService() {
    _classCallCheck(this, ZoomScalingService);

    return _possibleConstructorReturn(this, _PageScalingService.apply(this, arguments));
  }

  /** @protected */
  ZoomScalingService.prototype.updatePagesOnResize = function updatePagesOnResize() {
    this.scaleAll();
  };

  /** @override */


  ZoomScalingService.prototype.scalingStyles = function scalingStyles(targetDimensions, elementDimensions) {
    var width = targetDimensions.width,
        height = targetDimensions.height,
        factor = targetDimensions.factor;
    var relativeWidth = elementDimensions.relativeWidth,
        relativeHeight = elementDimensions.relativeHeight;

    return {
      'width': (0, _style.px)(width * relativeWidth),
      'height': (0, _style.px)(height * relativeHeight),
      'zoom': factor
    };
  };

  return ZoomScalingService;
}(PageScalingService);

/** Uses combined CSS transform as scaling method. */


var TransformScalingService = function (_PageScalingService2) {
  _inherits(TransformScalingService, _PageScalingService2);

  function TransformScalingService() {
    _classCallCheck(this, TransformScalingService);

    return _possibleConstructorReturn(this, _PageScalingService2.apply(this, arguments));
  }

  /** @protected */
  TransformScalingService.prototype.updatePagesOnResize = function updatePagesOnResize() {
    this.scaleAll();
  };

  /** @override */


  TransformScalingService.prototype.getTransformMatrix = function getTransformMatrix(unusedEl) {
    // TODO(alanorozco, #12934): Implement.
    return [1, 0, 0, 1, 0, 0];
  };

  /** @override */


  TransformScalingService.prototype.scalingStyles = function scalingStyles(targetDimensions, elementDimensions) {
    var width = targetDimensions.width,
        height = targetDimensions.height,
        factor = targetDimensions.factor;
    var relativeWidth = elementDimensions.relativeWidth,
        relativeHeight = elementDimensions.relativeHeight,
        matrix = elementDimensions.matrix;

    var initialMatrix = /** @type {!Array<number>} */(0, _log.dev)().assert(matrix);
    var transformedMatrix = scaleTransform(factor, width, height, initialMatrix);
    return {
      'width': (0, _style.px)(width * relativeWidth),
      'height': (0, _style.px)(height * relativeHeight),
      'transform': 'matrix(' + transformedMatrix.join() + ')'
    };
  };

  return TransformScalingService;
}(PageScalingService);

/** Uses CSS zoom and custom CSS properties as scaling method. */


var CssPropsZoomScalingService = function (_PageScalingService3) {
  _inherits(CssPropsZoomScalingService, _PageScalingService3);

  function CssPropsZoomScalingService() {
    _classCallCheck(this, CssPropsZoomScalingService);

    return _possibleConstructorReturn(this, _PageScalingService3.apply(this, arguments));
  }

  /** @override */
  CssPropsZoomScalingService.prototype.getOrMeasureScalableElsFor = function getOrMeasureScalableElsFor(page) {
    // Circumvents element dimensions cache as layers are only mutated once.
    return this.measureScalableElsFor(page);
  };

  /** @override */


  CssPropsZoomScalingService.prototype.updateRootProps = function updateRootProps() {
    var _this9 = this;

    var _targetDimensions_ = this.targetDimensions_,
        width = _targetDimensions_.width,
        height = _targetDimensions_.height,
        factor = _targetDimensions_.factor;

    this.vsync_.mutate(function () {
      _this9.rootEl_.style.setProperty('--i-amphtml-story-width', (0, _style.px)(width));
      _this9.rootEl_.style.setProperty('--i-amphtml-story-height', (0, _style.px)(height));
      _this9.rootEl_.style.setProperty('--i-amphtml-story-factor', factor.toString());
    });
  };

  /** @override */


  CssPropsZoomScalingService.prototype.scalingStyles = function scalingStyles(unusedTargetDimensions, elementDimensions) {
    var relativeWidth = elementDimensions.relativeWidth,
        relativeHeight = elementDimensions.relativeHeight;

    return {
      'width': 'calc(var(--i-amphtml-story-width) * ' + relativeWidth + ')',
      'height': 'calc(var(--i-amphtml-story-height) * ' + relativeHeight + ')',
      'zoom': 'var(--i-amphtml-story-factor)'
    };
  };

  return CssPropsZoomScalingService;
}(PageScalingService);

},{"../../../src/dom":48,"../../../src/experiments":52,"../../../src/log":57,"../../../src/services":72,"../../../src/style":74,"../../../src/types":75,"../../../src/utils/rate-limit":84,"./utils":38}],30:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaginationButtons = undefined;

var _events = require('./events');

var _navigationState = require('./navigation-state');

var _log = require('../../../src/log');

var _object = require('./../../../src/utils/object');

var _simpleTemplate = require('./simple-template');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */


/** @struct @typedef {{className: string, triggers: (string|undefined)}} */
var ButtonStateDef = void 0;

/** @const {!Object<string, !ButtonStateDef>} */
var BackButtonStates = {
  HIDDEN: { className: 'i-amphtml-story-button-hidden' },
  PREVIOUS_PAGE: {
    className: 'i-amphtml-story-back-prev',
    triggers: _events.EventType.PREVIOUS_PAGE
  },
  CLOSE_BOOKEND: {
    className: 'i-amphtml-story-back-close-bookend',
    triggers: _events.EventType.CLOSE_BOOKEND
  }
};

/** @const {!Object<string, !ButtonStateDef>} */
var ForwardButtonStates = {
  NEXT_PAGE: {
    className: 'i-amphtml-story-fwd-next',
    triggers: _events.EventType.NEXT_PAGE
  },
  SHOW_BOOKEND: {
    className: 'i-amphtml-story-fwd-more',
    triggers: _events.EventType.SHOW_BOOKEND
  },
  REPLAY: {
    className: 'i-amphtml-story-fwd-replay',
    triggers: _events.EventType.REPLAY
  }
};

/** @private @const {!./simple-template.ElementDef} */
var BUTTON = {
  tag: 'div',
  attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-button-container' }),
  children: [{
    tag: 'button',
    attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-button-move' })
  }, {
    tag: 'div',
    attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-page-sentinel' })
  }]
};

/**
 * @param {!Element} hoverEl
 * @param {!Element} targetEl
 * @param {string} className
 */
function setClassOnHover(hoverEl, targetEl, className) {
  hoverEl.addEventListener('mouseenter', function () {
    targetEl.classList.add(className);
  });
  hoverEl.addEventListener('mouseleave', function () {
    targetEl.classList.remove(className);
  });
}

var PaginationButton = function () {
  /**
   * @param {!Document} doc
   * @param {!ButtonStateDef} initialState
   */
  function PaginationButton(doc, initialState) {
    var _this = this;

    _classCallCheck(this, PaginationButton);

    /** @private {!ButtonStateDef} */
    this.state_ = initialState;

    /** @public @const {!Element} */
    this.element = (0, _simpleTemplate.renderAsElement)(doc, BUTTON);

    this.element.classList.add(initialState.className);

    this.element.addEventListener('click', function (e) {
      return _this.onClick_(e);
    });
  }

  /** @param {!ButtonStateDef} state */


  PaginationButton.prototype.updateState = function updateState(state) {
    if (state === this.state_) {
      return;
    }
    this.element.classList.remove(this.state_.className);
    this.element.classList.add(state.className);
    this.state_ = state;
  };

  /**
   * @param {!Event} e
   * @private
   */


  PaginationButton.prototype.onClick_ = function onClick_(e) {
    if (!this.state_.triggers) {
      return;
    }
    e.preventDefault();
    (0, _events.dispatch)(this.element, (0, _log.dev)().assert(this.state_.triggers),
    /* opt_bubbles */true);
  };

  return PaginationButton;
}();

/** Pagination buttons layer. */


var PaginationButtons = exports.PaginationButtons = function () {
  /** @param {!Document} doc */
  function PaginationButtons(doc) {
    _classCallCheck(this, PaginationButtons);

    /** @private @const {!PaginationButton} */
    this.forwardButton_ = new PaginationButton(doc, ForwardButtonStates.NEXT_PAGE);

    /** @private @const {!PaginationButton} */
    this.backButton_ = new PaginationButton(doc, BackButtonStates.HIDDEN);

    this.forwardButton_.element.classList.add('next-container');
    this.backButton_.element.classList.add('prev-container');
  }

  /**
   * @param {!Document} doc
   * @return {!PaginationButtons}
   */


  PaginationButtons.create = function create(doc) {
    return new PaginationButtons(doc);
  };

  /** @param {!Element} element */


  PaginationButtons.prototype.attach = function attach(element) {
    setClassOnHover(this.forwardButton_.element, element, 'i-amphtml-story-next-hover');

    setClassOnHover(this.backButton_.element, element, 'i-amphtml-story-prev-hover');

    element.appendChild(this.forwardButton_.element);
    element.appendChild(this.backButton_.element);
  };

  /** @param {!./navigation-state.StateChangeEventDef} event */


  PaginationButtons.prototype.onNavigationStateChange = function onNavigationStateChange(event) {
    switch (event.type) {
      case _navigationState.StateChangeType.ACTIVE_PAGE:
        var _event$value = event.value,
            pageIndex = _event$value.pageIndex,
            totalPages = _event$value.totalPages;


        this.backButton_.updateState(pageIndex === 0 ? BackButtonStates.HIDDEN : BackButtonStates.PREVIOUS_PAGE);

        this.forwardButton_.updateState(pageIndex === totalPages - 1 ? ForwardButtonStates.SHOW_BOOKEND : ForwardButtonStates.NEXT_PAGE);
        break;

      case _navigationState.StateChangeType.BOOKEND_ENTER:
        this.backButton_.updateState(BackButtonStates.CLOSE_BOOKEND);
        break;

      case _navigationState.StateChangeType.BOOKEND_EXIT:
        this.backButton_.updateState(BackButtonStates.PREVIOUS_PAGE);
        this.forwardButton_.updateState(ForwardButtonStates.SHOW_BOOKEND);
        break;

      case _navigationState.StateChangeType.END:
        this.forwardButton_.updateState(ForwardButtonStates.REPLAY);
        break;
    }
  };

  return PaginationButtons;
}();

},{"../../../src/log":57,"./../../../src/utils/object":83,"./events":20,"./navigation-state":26,"./simple-template":34}],31:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = undefined;

var _pageAdvancement = require('./page-advancement');

var _services = require('../../../src/services');

var _log = require('../../../src/log');

var _dom = require('../../../src/dom');

var _object = require('../../../src/utils/object');

var _style = require('../../../src/style');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */


/**
 * Transition used to show the progress of a media. Has to be linear so the
 * animation is smooth and constant.
 * @const {string}
 */
var TRANSITION_LINEAR = 'transform ' + _pageAdvancement.POLL_INTERVAL_MS + 'ms linear';

/**
 * Transition used to fully fill or unfill a progress bar item.
 * @const {string}
 */
var TRANSITION_EASE = 'transform 200ms ease';

/**
 * Progress bar for <amp-story>.
 */

var ProgressBar = exports.ProgressBar = function () {
  /**
   * @param {!Window} win
   */
  function ProgressBar(win) {
    _classCallCheck(this, ProgressBar);

    /** @private @const {!Window} */
    this.win_ = win;

    /** @private {boolean} */
    this.isBuilt_ = false;

    /** @private {?Element} */
    this.root_ = null;

    /** @private {number} */
    this.segmentCount_ = 0;

    /** @private {number} */
    this.activeSegmentIndex_ = 0;

    /** @private @const {!../../../src/service/vsync-impl.Vsync} */
    this.vsync_ = _services.Services.vsyncFor(this.win_);

    /** @private {!Object<string, number>} */
    this.segmentIdMap_ = (0, _object.map)();
  }

  /**
   * @param {!Window} win
   */


  ProgressBar.create = function create(win) {
    return new ProgressBar(win);
  };

  /**
   * @param {!Array<string>} segmentIds The id of each segment in the story.
   * @return {!Element}
   */


  ProgressBar.prototype.build = function build(segmentIds) {
    var _this = this;

    if (this.isBuilt_) {
      return this.getRoot();
    }

    var segmentCount = segmentIds.length;
    (0, _log.dev)().assert(segmentCount > 0);

    this.isBuilt_ = true;
    this.segmentCount_ = segmentCount;

    segmentIds.forEach(function (id, i) {
      return _this.segmentIdMap_[id] = i;
    });

    this.root_ = this.win_.document.createElement('ol');
    this.root_.classList.add('i-amphtml-story-progress-bar');

    for (var i = 0; i < this.segmentCount_; i++) {
      var segmentProgressBar = this.win_.document.createElement('li');
      segmentProgressBar.classList.add('i-amphtml-story-page-progress-bar');
      var segmentProgressValue = this.win_.document.createElement('div');
      segmentProgressValue.classList.add('i-amphtml-story-page-progress-value');
      segmentProgressBar.appendChild(segmentProgressValue);
      this.root_.appendChild(segmentProgressBar);
    }

    return this.getRoot();
  };

  /**
   * @return {!Element}
   */


  ProgressBar.prototype.getRoot = function getRoot() {
    return (0, _log.dev)().assertElement(this.root_);
  };

  /**
   * @param {string} segmentId The index of the new active segment.
   * @public
   */


  ProgressBar.prototype.setActiveSegmentId = function setActiveSegmentId(segmentId) {
    this.assertVaildSegmentId_(segmentId);
    var segmentIndex = this.segmentIdMap_[segmentId];

    for (var i = 0; i < this.segmentCount_; i++) {
      if (i < segmentIndex) {
        this.updateProgressByIndex_(i, 1.0,
        /* withTransition */i == segmentIndex - 1);
      } else {
        // The active segment manages its own progress by firing PAGE_PROGRESS
        // events to amp-story.
        this.updateProgressByIndex_(i, 0.0, /* withTransition */segmentIndex != 0 && this.activeSegmentIndex_ != 1);
      }
    }
  };

  /**
   * @param {string} segmentId The index to assert validity
   * @private
   */


  ProgressBar.prototype.assertVaildSegmentId_ = function assertVaildSegmentId_(segmentId) {
    (0, _log.dev)().assert((0, _object.hasOwn)(this.segmentIdMap_, segmentId), 'Invalid segment-id passed to progress-bar');
  };

  /**
   * The
   * @param {string} segmentId the id of the segment whos progress to change
   * @param {number} progress A number from 0.0 to 1.0, representing the
   *     progress of the current segment.
   */


  ProgressBar.prototype.updateProgress = function updateProgress(segmentId, progress) {
    this.assertVaildSegmentId_(segmentId);
    var segmentIndex = this.segmentIdMap_[segmentId];
    this.updateProgressByIndex_(segmentIndex, progress);
  };

  /**
   * @param {number} segmentIndex The index of the progress bar segment whose progress should be
   *     changed.
   * @param {number} progress A number from 0.0 to 1.0, representing the
   *     progress of the current segment.
   * @param {boolean=} withTransition
   * @public
   */


  ProgressBar.prototype.updateProgressByIndex_ = function updateProgressByIndex_(segmentIndex, progress) {
    var withTransition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    this.activeSegmentIndex_ = segmentIndex;

    // Offset the index by 1, since nth-child indices start at 1 while
    // JavaScript indices start at 0.
    var nthChildIndex = segmentIndex + 1;
    var progressEl = (0, _dom.scopedQuerySelector)(this.getRoot(), '.i-amphtml-story-page-progress-bar:nth-child(' + (0, _dom.escapeCssSelectorNth)(nthChildIndex) + ') .i-amphtml-story-page-progress-value');
    this.vsync_.mutate(function () {
      var transition = 'none';
      if (withTransition) {
        // Using an eased transition only if filling the bar to 0 or 1.
        transition = progress === 1 || progress === 0 ? TRANSITION_EASE : TRANSITION_LINEAR;
      }
      (0, _style.setImportantStyles)((0, _log.dev)().assertElement(progressEl), {
        'transform': (0, _style.scale)(progress + ',1'),
        'transition': transition
      });
    });
  };

  return ProgressBar;
}();

},{"../../../src/dom":48,"../../../src/log":57,"../../../src/services":72,"../../../src/style":74,"../../../src/utils/object":83,"./page-advancement":28}],32:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RelatedArticleSetDef = exports.RelatedArticleDef = undefined;
exports.relatedArticlesFromJson = relatedArticlesFromJson;

var _log = require('../../../src/log');

var _url = require('../../../src/url');

/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TAG = 'amp-story';

/**
 * @typedef {{
 *   title: string,
 *   url: string,
 *   domainName: string,
 *   image: (string|undefined),
 * }}
 */
var RelatedArticleDef = exports.RelatedArticleDef = void 0;

/**
 * @typedef {{
 *   heading: (string|undefined),
 *   articles: !Array<!RelatedArticleDef>,
 * }}
 */
var RelatedArticleSetDef = exports.RelatedArticleSetDef = void 0;

/**
 * @param {!JsonObject} articleJson
 * @return {?RelatedArticleDef}
 */
function buildArticleFromJson_(articleJson) {
  if (!articleJson['title'] || !articleJson['url']) {
    (0, _log.user)().error(TAG, 'Articles must contain `title` and `url` fields, skipping invalid.');
    return null;
  }

  (0, _log.user)().assert((0, _url.isProtocolValid)(articleJson['url']), 'Unsupported protocol for article URL ' + articleJson['url']);

  var article = {
    title: (0, _log.dev)().assert(articleJson['title']),
    url: (0, _log.dev)().assert(articleJson['url']),
    domainName: (0, _url.parseUrl)((0, _log.dev)().assert(articleJson['url'])).hostname
  };

  if (articleJson['image']) {
    (0, _log.user)().assert((0, _url.isProtocolValid)(articleJson['image']), 'Unsupported protocol for article image URL ' + articleJson['image']);
    article.image = (0, _log.dev)().assert(articleJson['image']);
  }

  return (/** @type {!RelatedArticleDef} */article
  );
}

/**
 * @param {!JsonObject=} opt_articleSetsResponse
 * @return {!Array<!RelatedArticleSetDef>}
 */
function relatedArticlesFromJson(opt_articleSetsResponse) {
  return (/** @type {!Array<!RelatedArticleSetDef>} */Object.keys(opt_articleSetsResponse || {}).map(function (headingKey) {
      var articleSet = {
        articles: opt_articleSetsResponse[headingKey].map(buildArticleFromJson_).filter(function (a) {
          return !!a;
        })
      };

      if (headingKey.trim().length) {
        articleSet.heading = headingKey;
      }

      return (/** @type {!RelatedArticleSetDef} */articleSet
      );
    })
  );
}

},{"../../../src/log":57,"../../../src/url":78}],33:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollableShareWidget = exports.ShareWidget = undefined;

var _services = require('../../../src/services');

var _toast = require('./toast');

var _clipboard = require('../../../src/clipboard');

var _log = require('../../../src/log');

var _object = require('./../../../src/utils/object');

var _types = require('../../../src/types');

var _eventHelper = require('../../../src/event-helper');

var _style = require('../../../src/style');

var _simpleTemplate = require('./simple-template');

var _rateLimit = require('../../../src/utils/rate-limit');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */


/**
 * Maps share provider type to visible name.
 * If the name only needs to be capitalized (e.g. `facebook` to `Facebook`) it
 * does not need to be included here.
 * @const {!JsonObject}
 */
var SHARE_PROVIDER_NAME = (0, _object.dict)({
  'gplus': 'Google+',
  'linkedin': 'LinkedIn',
  'system': 'More',
  'whatsapp': 'WhatsApp'
});

/**
 * Default left/right padding for share buttons.
 * @private @const {number}
 */
var DEFAULT_BUTTON_PADDING = 16;

/**
 * Minimum left/right padding for share buttons.
 * @private @const {number}
 */
var MIN_BUTTON_PADDING = 10;

/** @private @const {!./simple-template.ElementDef} */
var TEMPLATE = {
  tag: 'div',
  attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-share-widget' }),
  children: [{
    tag: 'ul',
    attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-share-list' }),
    children: [{
      tag: 'li',
      attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-share-system' })
    }]
  }]
};

/** @private @const {!./simple-template.ElementDef} */
var SHARE_ITEM_TEMPLATE = {
  tag: 'li',
  attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-share-item' })
};

/** @private @const {!./simple-template.ElementDef} */
var LINK_SHARE_ITEM_TEMPLATE = {
  tag: 'div',
  attrs: (0, _object.dict)({
    'class': 'i-amphtml-story-share-icon i-amphtml-story-share-icon-link'
  }),
  text: 'Get Link' // TODO(alanorozco): i18n
};

/** @private @const {string} */
var SCROLLABLE_CLASSNAME = 'i-amphtml-story-share-widget-scrollable';

/**
 * @param {!JsonObject=} opt_params
 * @return {!JsonObject}
 */
function buildProviderParams(opt_params) {
  var attrs = (0, _object.dict)();

  if (opt_params) {
    Object.keys(opt_params).forEach(function (field) {
      attrs['data-param-' + field] = opt_params[field];
    });
  }

  return attrs;
}

/**
 * @param {!Document} doc
 * @param {string} shareType
 * @param {!JsonObject=} opt_params
 * @return {!Node}
 */
function buildProvider(doc, shareType, opt_params) {
  return (0, _simpleTemplate.renderSimpleTemplate)(doc,
  /** @type {!Array<!./simple-template.ElementDef>} */[{
    tag: 'amp-social-share',
    attrs: /** @type {!JsonObject} */Object.assign((0, _object.dict)({
      'width': 48,
      'height': 66,
      'class': 'i-amphtml-story-share-icon',
      'type': shareType
    }), buildProviderParams(opt_params)),
    text: SHARE_PROVIDER_NAME[shareType] || shareType
  }]);
}

/**
 * @param {!Document} doc
 * @param {string} url
 * @return {!Element}
 */
function buildCopySuccessfulToast(doc, url) {
  return (0, _simpleTemplate.renderAsElement)(doc, /** @type {!./simple-template.ElementDef} */{
    tag: 'div',
    attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-copy-successful' }),
    children: [{
      tag: 'div',
      text: 'Link copied!' // TODO(alanorozco): i18n
    }, {
      tag: 'div',
      attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-copy-url' }),
      text: url
    }]
  });
}

/**
 * Social share widget for story bookend.
 */

var ShareWidget = exports.ShareWidget = function () {
  /** @param {!Window} win */
  function ShareWidget(win) {
    _classCallCheck(this, ShareWidget);

    /** @private {?../../../src/service/ampdoc-impl.AmpDoc} */
    this.ampdoc_ = null;

    /** @private @const {!Window} */
    this.win_ = win;

    /** @private {?Element} */
    this.root_ = null;
  }

  /** @param {!Window} win */


  ShareWidget.create = function create(win) {
    return new ShareWidget(win);
  };

  /**
   * @param {!../../../src/service/ampdoc-impl.AmpDoc} ampdoc
   * @return {!Element}
   */


  ShareWidget.prototype.build = function build(ampdoc) {
    (0, _log.dev)().assert(!this.root_, 'Already built.');

    this.ampdoc_ = ampdoc;

    this.root_ = (0, _simpleTemplate.renderAsElement)(this.win_.document, TEMPLATE);

    this.maybeAddLinkShareButton_();
    this.maybeAddSystemShareButton_();

    return this.root_;
  };

  /** @private */


  ShareWidget.prototype.maybeAddLinkShareButton_ = function maybeAddLinkShareButton_() {
    var _this = this;

    if (!(0, _clipboard.isCopyingToClipboardSupported)(this.win_.document)) {
      return;
    }

    var linkShareButton = (0, _simpleTemplate.renderAsElement)(this.win_.document, LINK_SHARE_ITEM_TEMPLATE);

    this.add_(linkShareButton);

    // TODO(alanorozco): Listen for proper tap event (i.e. fastclick)
    (0, _eventHelper.listen)(linkShareButton, 'click', function (e) {
      e.preventDefault();
      _this.copyUrlToClipboard_();
    });
  };

  /** @private */
  // TODO(alanorozco): i18n for toast.


  ShareWidget.prototype.copyUrlToClipboard_ = function copyUrlToClipboard_() {
    var url = _services.Services.documentInfoForDoc(
    /** @type {!../../../src/service/ampdoc-impl.AmpDoc} */(0, _log.dev)().assert(this.ampdoc_)).canonicalUrl;

    if (!(0, _clipboard.copyTextToClipboard)(this.win_, url)) {
      _toast.Toast.show(this.win_, 'Could not copy link to clipboard :(');
      return;
    }

    _toast.Toast.show(this.win_, buildCopySuccessfulToast(this.win_.document, url));
  };

  /** @private */


  ShareWidget.prototype.maybeAddSystemShareButton_ = function maybeAddSystemShareButton_() {
    if (!this.isSystemShareSupported_()) {
      // `amp-social-share` will hide `system` buttons when not supported, but
      // we also need to avoid adding it for rendering reasons.
      return;
    }

    var container = (0, _log.dev)().assertElement(this.root_).querySelector('.i-amphtml-story-share-system');

    this.loadRequiredExtensions_();

    container.appendChild(buildProvider(this.win_.document, 'system'));
  };

  /** @private */
  // NOTE(alanorozco): This is a duplicate of the logic in the
  // `amp-social-share` component.


  ShareWidget.prototype.isSystemShareSupported_ = function isSystemShareSupported_() {
    var viewer = _services.Services.viewerForDoc(
    /** @type {!../../../src/service/ampdoc-impl.AmpDoc} */(0, _log.dev)().assert(this.ampdoc_));

    var platform = _services.Services.platformFor(this.win_);

    // Chrome exports navigator.share in WebView but does not implement it.
    // See https://bugs.chromium.org/p/chromium/issues/detail?id=765923
    var isChromeWebview = viewer.isWebviewEmbedded() && platform.isChrome();

    return 'share' in navigator && !isChromeWebview;
  };

  /**
   * @param {!Object<string, (!JsonObject|boolean)>} providers
   * @public
   */
  // TODO(alanorozco): Set story metadata in share config


  ShareWidget.prototype.setProviders = function setProviders(providers) {
    var _this2 = this;

    this.loadRequiredExtensions_();

    Object.keys(providers).forEach(function (type) {
      if (type == 'system') {
        (0, _log.user)().warn('AMP-STORY', '`system` is not a valid share provider type. Native sharing is ' + 'enabled by default and cannot be turned off.', type);
        return;
      }

      if ((0, _types.isObject)(providers[type])) {
        _this2.add_(buildProvider(_this2.win_.document, type,
        /** @type {!JsonObject} */providers[type]));
        return;
      }

      // Bookend config API requires real boolean, not just truthy
      if (providers[type] === true) {
        _this2.add_(buildProvider(_this2.win_.document, type));
        return;
      }

      (0, _log.user)().warn('AMP-STORY', 'Invalid amp-story bookend share configuration for %s. ' + 'Value must be `true` or a params object.', type);
    });
  };

  /** @private */


  ShareWidget.prototype.loadRequiredExtensions_ = function loadRequiredExtensions_() {
    var ampdoc = /** @type {!../../../src/service/ampdoc-impl.AmpDoc} */(0, _log.dev)().assert(this.ampdoc_);

    _services.Services.extensionsFor(this.win_).installExtensionForDoc(ampdoc, 'amp-social-share');
  };

  /**
   * @param {!Node} node
   * @private
   */


  ShareWidget.prototype.add_ = function add_(node) {
    var list = (0, _log.dev)().assert(this.root_).firstElementChild;
    var item = (0, _simpleTemplate.renderAsElement)(this.win_.document, SHARE_ITEM_TEMPLATE);

    item.appendChild(node);

    // `lastElementChild` is the system share button container, which should
    // always be last in list
    list.insertBefore(item, list.lastElementChild);
  };

  return ShareWidget;
}();

/**
 * Social share widget for story bookend with a scrollable layout.
 * This class is coupled to the DOM structure for ShareWidget, but that's ok.
 */


var ScrollableShareWidget = exports.ScrollableShareWidget = function () {
  /** @param {!Window} win */
  function ScrollableShareWidget(win) {
    _classCallCheck(this, ScrollableShareWidget);

    /** @private @const {!Window} */
    this.win_ = win;

    /** @private @const {!../../../src/service/vsync-impl.Vsync} */
    this.vsync_ = _services.Services.vsyncFor(win);

    /** @private @const {!ShareWidget} */
    this.mixin_ = ShareWidget.create(win);

    /**
     * Container width is being tracked to prevent unnecessary layout
     * calculations.
     * @private {?number}
     */
    this.containerWidth_ = null;

    /** @private {?Element} */
    this.root_ = null;
  }

  /** @param {!Window} win */


  ScrollableShareWidget.create = function create(win) {
    return new ScrollableShareWidget(win);
  };

  /**
   * @param {!../../../src/service/ampdoc-impl.AmpDoc} ampdoc
   * @return {!Element}
   */


  ScrollableShareWidget.prototype.build = function build(ampdoc) {
    var _this3 = this;

    this.root_ = this.mixin_.build(ampdoc);

    this.root_.classList.add(SCROLLABLE_CLASSNAME);

    _services.Services.viewportForDoc(ampdoc).onResize(
    // we don't require a lot of smoothness here, so we throttle
    (0, _rateLimit.throttle)(this.win_, function () {
      return _this3.applyButtonPadding_();
    }, 100));

    return this.root_;
  };

  /**
   * Calculates padding between buttons so that the result is that there's
   * always one item visually "cut off" for scroll affordance.
   * @private
   */


  ScrollableShareWidget.prototype.applyButtonPadding_ = function applyButtonPadding_() {
    var _this4 = this;

    var items = this.getVisibleItems_();

    if (!items.length) {
      return;
    }

    this.vsync_.run({
      measure: function measure(state) {
        var containerWidth = _this4.root_. /*OK*/clientWidth;

        if (containerWidth == _this4.containerWidth_) {
          // Don't recalculate if width has not changed (i.e. onscreen keyboard)
          state.noop = true;
          return;
        }

        var icon = (0, _log.dev)().assert(items[0].firstElementChild);

        var leftMargin = icon. /*OK*/offsetLeft - _this4.root_. /*OK*/offsetLeft;
        var iconWidth = icon. /*OK*/offsetWidth;

        // Total width that the buttons will occupy with minimum padding.
        var totalItemWidth = iconWidth * items.length + 2 * MIN_BUTTON_PADDING * (items.length - 1);

        // If buttons don't fit within the available area, calculate padding so
        // that there will be an element cut-off.
        if (totalItemWidth > containerWidth - leftMargin * 2) {
          var availableWidth = containerWidth - leftMargin - iconWidth / 2;
          var amountVisible = Math.floor(availableWidth / (iconWidth + MIN_BUTTON_PADDING * 2));

          state.padding = 0.5 * (availableWidth / amountVisible - iconWidth);
        } else {
          // Otherwise, calculate padding in from MIN_PADDING to DEFAULT_PADDING
          // so that all elements fit and take as much area as possible.
          var totalPadding = (containerWidth - leftMargin * 2 - iconWidth * items.length) / (items.length - 1);

          state.padding = Math.min(DEFAULT_BUTTON_PADDING, 0.5 * totalPadding);
        }

        _this4.containerWidth_ = containerWidth;
      },
      mutate: function mutate(state) {
        if (state.noop) {
          return;
        }
        items.forEach(function (el, i) {
          if (i != 0) {
            (0, _style.setImportantStyles)(el, { 'padding-left': (0, _style.px)(state.padding) });
          }
          if (i != items.length - 1) {
            (0, _style.setImportantStyles)(el, { 'padding-right': (0, _style.px)(state.padding) });
          }
        });
      }
    }, {});
  };

  /**
   * @return {!Array<!Element>}
   * @private
   */


  ScrollableShareWidget.prototype.getVisibleItems_ = function getVisibleItems_() {
    return Array.prototype.filter.call((0, _log.dev)().assertElement(this.root_).querySelectorAll('li'), function (el) {
      return !!el.firstElementChild;
    });
  };

  /**
   * @param {!Object<string, (!JsonObject|boolean)>} providers
   * @public
   */


  ScrollableShareWidget.prototype.setProviders = function setProviders(providers) {
    this.mixin_.setProviders(providers);
    this.applyButtonPadding_();
  };

  return ScrollableShareWidget;
}();

},{"../../../src/clipboard":44,"../../../src/event-helper":51,"../../../src/log":57,"../../../src/services":72,"../../../src/style":74,"../../../src/types":75,"../../../src/utils/rate-limit":84,"./../../../src/utils/object":83,"./simple-template":34,"./toast":37}],34:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementDef = undefined;
exports.renderSimpleTemplate = renderSimpleTemplate;
exports.renderAsElement = renderAsElement;

var _dom = require('../../../src/dom');

var _types = require('../../../src/types');

/**
 * @typedef {{
 *   tag: string,
 *   attrs: (!JsonObject|undefined),
 *   text: (string|undefined),
 *   children: (!Array<!ElementDef>|undefined),
 * }}
 */
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ElementDef = exports.ElementDef = void 0;

/**
 * @param {!Document} doc
 * @param {!ElementDef|!Array<!ElementDef>} elementsDef
 * @return {!Node}
 */
function renderSimpleTemplate(doc, elementsDef) {
  if ((0, _types.isArray)(elementsDef)) {
    return renderMulti(doc, /** @type {!Array<!ElementDef>} */elementsDef);
  }
  return renderSingle(doc, /** @type {!ElementDef} */elementsDef);
}

/**
 * @param {!Document} doc
 * @param {!ElementDef} elementDef
 * @return {!Element}
 */
function renderAsElement(doc, elementDef) {
  return renderSingle(doc, elementDef);
}

/**
 * @param {!Document} doc
 * @param {!Array<!ElementDef>} elementsDef
 * @return {!Node}
 */
function renderMulti(doc, elementsDef) {
  var fragment = doc.createDocumentFragment();
  elementsDef.forEach(function (elementDef) {
    return fragment.appendChild(renderSingle(doc, elementDef));
  });
  return fragment;
}

/**
 * @param {!Document} doc
 * @param {!ElementDef} elementDef
 * @return {!Element}
 */
function renderSingle(doc, elementDef) {
  var el = elementDef.attrs ? (0, _dom.createElementWithAttributes)(doc, elementDef.tag, elementDef.attrs) : doc.createElement(elementDef.tag);

  if (elementDef.text) {
    el.textContent = elementDef.text;
  }

  if (elementDef.children) {
    el.appendChild(renderMulti(doc, elementDef.children));
  }

  return el;
}

},{"../../../src/dom":48,"../../../src/types":75}],35:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sources = undefined;

var _utils = require('./utils');

var _dom = require('../../../src/dom');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */

var Sources = exports.Sources = function () {
  /**
   * @param {?string=} opt_srcAttr The 'src' attribute of the media element.
   * @param {?IArrayLike<!Element>=} opt_srcEls Any child <source> tags of the
   *     media element.
   * @param {?IArrayLike<!Element>=} opt_trackEls Any child <track> tags of the
   *     media element.
   */
  function Sources(opt_srcAttr, opt_srcEls, opt_trackEls) {
    _classCallCheck(this, Sources);

    /** @private @const {?string} */
    this.srcAttr_ = opt_srcAttr && opt_srcAttr.length ? opt_srcAttr : null;

    /** @private @const {!IArrayLike<!Element>} */
    this.srcEls_ = opt_srcEls || [];

    /** @private @const {!IArrayLike<!Element>} */
    this.trackEls_ = opt_trackEls || [];
  }

  /**
   * Applies track tags to a specified element. This is done in a separate
   * method from the source tags, because we must wait for "loadedmetadata"
   * video event before doing this.
   * @param {!HTMLMediaElement} element The element to adopt the text tracks
   *     represented by this object.
   * @private
   */


  Sources.prototype.applyTracksToElement_ = function applyTracksToElement_(element) {
    Array.prototype.forEach.call(this.trackEls_, function (trackEl) {
      var track = document.createElement('track');
      track.id = trackEl.id;
      track.kind = trackEl.kind;
      track.label = trackEl.label;
      track.srclang = trackEl.srclang;
      track.default = trackEl.default;
      track.src = trackEl.src;
      track.addEventListener('load', function () {
        track.mode = 'showing';
        element.textTracks[0].mode = 'showing';
      });
      element.appendChild(track);
    });
  };

  /**
   * Applies the src attribute and source tags to a specified element.
   * @param {!HTMLMediaElement} element The element to adopt the sources
   *     represented by this object.
   */


  Sources.prototype.applyToElement = function applyToElement(element) {
    var _this = this;

    Sources.removeFrom(element);

    if (!this.srcAttr_) {
      element.removeAttribute('src');
    } else {
      element.setAttribute('src', this.srcAttr_);
    }

    Array.prototype.forEach.call(this.srcEls_, function (srcEl) {
      return element.appendChild(srcEl);
    });

    if (this.trackEls_.length > 0) {
      // Wait for "loadedmetadata" before adding tracks.
      // Firefox adds tracks, but does not toggle them on unless video metadata
      // is loaded first.
      if (element.readyState >= 1 /* HAVE_METADATA */) {
          this.applyTracksToElement_(element);
        } else {
        var addTracksHandler = function addTracksHandler() {
          element.removeEventListener('loadedmetadata', addTracksHandler);
          _this.applyTracksToElement_(element);
        };

        element.addEventListener('loadedmetadata', addTracksHandler);
      }
    }
  };

  /**
   * Removes and returns the sources from a specified element.
   * @param {!Element} element The element whose sources should be removed and
   *     returned.
   * @return {!Sources} An object representing the sources of the specified
   *     element.
   */


  Sources.removeFrom = function removeFrom(element) {
    var elementToUse = (0, _utils.ampMediaElementFor)(element) || element;
    var srcAttr = elementToUse.getAttribute('src');
    elementToUse.removeAttribute('src');

    var srcEls = elementToUse.querySelectorAll('source');
    Array.prototype.forEach.call(srcEls, function (srcEl) {
      return (0, _dom.removeElement)(srcEl);
    });

    var trackEls = elementToUse.querySelectorAll('track');
    Array.prototype.forEach.call(trackEls, function (trackEl) {
      return (0, _dom.removeElement)(trackEl);
    });

    return new Sources(srcAttr, srcEls, trackEls);
  };

  return Sources;
}();

},{"../../../src/dom":48,"./utils":38}],36:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SystemLayer = undefined;

var _developmentUi = require('./development-ui');

var _events = require('./events');

var _progressBar = require('./progress-bar');

var _services = require('../../../src/services');

var _ampStoryStateService = require('./amp-story-state-service');

var _log = require('../../../src/log');

var _object = require('../../../src/utils/object');

var _mode = require('../../../src/mode');

var _dom = require('../../../src/dom');

var _simpleTemplate = require('./simple-template');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */


var MUTE_CLASS = 'i-amphtml-story-mute-audio-control';

var UNMUTE_CLASS = 'i-amphtml-story-unmute-audio-control';

/** @private @const {!./simple-template.ElementDef} */
var TEMPLATE = {
  tag: 'aside',
  attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-system-layer i-amphtml-story-system-reset' }),
  children: [{
    tag: 'div',
    attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-ui-left' }),
    children: [{
      tag: 'div',
      attrs: (0, _object.dict)({
        'role': 'button',
        'class': UNMUTE_CLASS + ' i-amphtml-story-button'
      })
    }, {
      tag: 'div',
      attrs: (0, _object.dict)({
        'role': 'button',
        'class': MUTE_CLASS + ' i-amphtml-story-button'
      })
    }]
  }, {
    tag: 'div',
    attrs: (0, _object.dict)({ 'class': 'i-amphtml-story-ui-right' }),
    children: [{
      tag: 'div',
      attrs: (0, _object.dict)({
        'role': 'button',
        'class': UNMUTE_CLASS + ' i-amphtml-story-button'
      })
    }, {
      tag: 'div',
      attrs: (0, _object.dict)({
        'role': 'button',
        'class': MUTE_CLASS + ' i-amphtml-story-button'
      })
    }]
  }]
};

/**
 * System Layer (i.e. UI Chrome) for <amp-story>.
 * Chrome contains:
 *   - mute/unmute button
 *   - story progress bar
 *   - bookend close butotn
 */

var SystemLayer = exports.SystemLayer = function () {
  /**
   * @param {!Window} win
   * @param {!./amp-story-state-service.AmpStoryStateService} stateService
   */
  function SystemLayer(win, stateService) {
    _classCallCheck(this, SystemLayer);

    /** @private {!Window} */
    this.win_ = win;

    /** @private {boolean} */
    this.isBuilt_ = false;

    /** @private {?Element} */
    this.root_ = null;

    /** @private {?Element} */
    this.muteAudioBtn_ = null;

    /** @private {?Element} */
    this.unmuteAudioBtn_ = null;

    /** @private {?Element} */
    this.leftButtonTray_ = null;

    /** @private @const {!ProgressBar} */
    this.progressBar_ = _progressBar.ProgressBar.create(win);

    /** @private {!DevelopmentModeLog} */
    this.developerLog_ = _developmentUi.DevelopmentModeLog.create(win);

    /** @private {!DevelopmentModeLogButtonSet} */
    this.developerButtons_ = _developmentUi.DevelopmentModeLogButtonSet.create(win);

    /** @private {!./amp-story-state-service.AmpStoryStateService} */
    this.stateService_ = stateService;
  }

  /**
   * @param {!Array<string>} pageIds the ids of each page in the story
   * @return {!Element}
   */


  SystemLayer.prototype.build = function build(pageIds) {
    if (this.isBuilt_) {
      return this.getRoot();
    }

    this.isBuilt_ = true;

    this.root_ = (0, _simpleTemplate.renderAsElement)(this.win_.document, TEMPLATE);

    this.root_.insertBefore(this.progressBar_.build(pageIds), this.root_.lastChild);

    this.leftButtonTray_ = this.root_.querySelector('.i-amphtml-story-ui-left');

    this.buildForDevelopmentMode_();

    this.addEventHandlers_();

    var systemLayerButtonsShown = this.stateService_.getState(_ampStoryStateService.StateType.SYSTEM_LAYER_BUTTONS_SHOWN);

    // TODO(newmuis): Observe this value.
    if (!systemLayerButtonsShown.getValue() && !systemLayerButtonsShown.isModifiable()) {
      this.root_.classList.add('i-amphtml-story-ui-no-buttons');
    }

    return this.getRoot();
  };

  /**
   * @private
   */


  SystemLayer.prototype.buildForDevelopmentMode_ = function buildForDevelopmentMode_() {
    if (!(0, _mode.getMode)().development) {
      return;
    }

    this.leftButtonTray_.appendChild(this.developerButtons_.build(this.developerLog_.toggle.bind(this.developerLog_)));
    this.root_.appendChild(this.developerLog_.build());
  };

  /**
   * @private
   */


  SystemLayer.prototype.addEventHandlers_ = function addEventHandlers_() {
    var _this = this;

    // TODO(alanorozco): Listen to tap event properly (i.e. fastclick)
    this.root_.addEventListener('click', function (e) {
      var target = (0, _log.dev)().assertElement(e.target);

      if ((0, _dom.matches)(target, '.' + MUTE_CLASS + ', .' + MUTE_CLASS + ' *')) {
        _this.onMuteAudioClick_(e);
      } else if ((0, _dom.matches)(target, '.' + UNMUTE_CLASS + ', .' + UNMUTE_CLASS + ' *')) {
        _this.onUnmuteAudioClick_(e);
      }
    });
  };

  /**
   * @return {!Element}
   */


  SystemLayer.prototype.getRoot = function getRoot() {
    return (0, _log.dev)().assertElement(this.root_);
  };

  /**
   * @param {!Event} e
   * @private
   */


  SystemLayer.prototype.onMuteAudioClick_ = function onMuteAudioClick_(e) {
    this.dispatch_(_events.EventType.MUTE, e);
  };

  /**
   * @param {!Event} e
   * @private
   */


  SystemLayer.prototype.onUnmuteAudioClick_ = function onUnmuteAudioClick_(e) {
    this.dispatch_(_events.EventType.UNMUTE, e);
  };

  /**
   * @param {string} eventType
   * @param {!Event=} opt_event
   * @private
   */


  SystemLayer.prototype.dispatch_ = function dispatch_(eventType, opt_event) {
    if (opt_event) {
      (0, _log.dev)().assert(opt_event).stopPropagation();
    }

    (0, _events.dispatch)(this.getRoot(), eventType, /* opt_bubbles */true);
  };

  /**
   * @param {string} pageId The page id of the new active page.
   * @public
   */


  SystemLayer.prototype.setActivePageId = function setActivePageId(pageId) {
    // TODO(newmuis) avoid passing progress logic through system-layer
    this.progressBar_.setActiveSegmentId(pageId);
  };

  /**
   * @param {string} pageId The id of the page whose progress should be
   *     changed.
   * @param {number} progress A number from 0.0 to 1.0, representing the
   *     progress of the current page.
   * @public
   */


  SystemLayer.prototype.updateProgress = function updateProgress(pageId, progress) {
    // TODO(newmuis) avoid passing progress logic through system-layer
    this.progressBar_.updateProgress(pageId, progress);
  };

  /**
   * @param {!./logging.AmpStoryLogEntryDef} logEntry
   * @private
   */


  SystemLayer.prototype.logInternal_ = function logInternal_(logEntry) {
    this.developerButtons_.log(logEntry);
    this.developerLog_.log(logEntry);
  };

  /**
   * Logs an array of entries to the developer logs.
   * @param {!Array<!./logging.AmpStoryLogEntryDef>} logEntries
   */


  SystemLayer.prototype.logAll = function logAll(logEntries) {
    var _this2 = this;

    if (!(0, _mode.getMode)().development) {
      return;
    }

    _services.Services.vsyncFor(this.win_).mutate(function () {
      logEntries.forEach(function (logEntry) {
        return _this2.logInternal_(logEntry);
      });
    });
  };

  /**
   * Logs a single entry to the developer logs.
   * @param {!./logging.AmpStoryLogEntryDef} logEntry
   */


  SystemLayer.prototype.log = function log(logEntry) {
    if (!(0, _mode.getMode)().development) {
      return;
    }

    this.logInternal_(logEntry);
  };

  /**
   * Clears any state held by the developer log or buttons.
   */


  SystemLayer.prototype.resetDeveloperLogs = function resetDeveloperLogs() {
    if (!(0, _mode.getMode)().development) {
      return;
    }

    this.developerButtons_.clear();
    this.developerLog_.clear();
  };

  /**
   * Sets the string providing context for the developer logs window.  This is
   * often the name or ID of the element that all logs are for (e.g. the page).
   * @param {string} contextString
   */


  SystemLayer.prototype.setDeveloperLogContextString = function setDeveloperLogContextString(contextString) {
    if (!(0, _mode.getMode)().development) {
      return;
    }

    this.developerLog_.setContextString(contextString);
  };

  /**
   * Toggles the visibility of the developer log.
   * @private
   */


  SystemLayer.prototype.toggleDeveloperLog_ = function toggleDeveloperLog_() {
    if (!(0, _mode.getMode)().development) {
      return;
    }

    this.developerLog_.toggle();
  };

  /**
   * Hides the developer log in the UI.
   */


  SystemLayer.prototype.hideDeveloperLog = function hideDeveloperLog() {
    if (!(0, _mode.getMode)().development) {
      return;
    }

    this.developerLog_.hide();
  };

  return SystemLayer;
}();

},{"../../../src/dom":48,"../../../src/log":57,"../../../src/mode":59,"../../../src/services":72,"../../../src/utils/object":83,"./amp-story-state-service":8,"./development-ui":18,"./events":20,"./progress-bar":31,"./simple-template":34}],37:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toast = undefined;

var _services = require('../../../src/services');

var _dom = require('../../../src/dom');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */


/** @private @const {string} */
var TOAST_CLASSNAME = 'i-amphtml-story-toast';

/**
 * Should be higher than total animation time.
 * @private @const {number}
 */
var TOAST_VISIBLE_TIME_MS = 2600;

var Toast = exports.Toast = function () {
  function Toast() {
    _classCallCheck(this, Toast);
  }

  /**
   * @param {!Window} win
   * @param {!Node|string} childNodeOrText
   */
  Toast.show = function show(win, childNodeOrText) {
    var toast = (0, _dom.createElementWithAttributes)(win.document, 'div',
    /** @type {!JsonObject} */{ 'class': TOAST_CLASSNAME });

    if (typeof childNodeOrText == 'string') {
      toast.textContent = childNodeOrText;
    } else {
      toast.appendChild(childNodeOrText);
    }

    win.document.body.appendChild(toast);

    _services.Services.timerFor(win).delay(function () {
      return (0, _dom.removeElement)(toast);
    }, TOAST_VISIBLE_TIME_MS);
  };

  return Toast;
}();

},{"../../../src/dom":48,"../../../src/services":72}],38:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeStrToMillis = timeStrToMillis;
exports.hasTapAction = hasTapAction;
exports.unscaledClientRect = unscaledClientRect;
exports.ampMediaElementFor = ampMediaElementFor;

var _dom = require('../../../src/dom');

var _log = require('../../../src/log');

/**
 * Returns millis as number if given a string(e.g. 1s, 200ms etc)
 * @param {string} time
 * @return {number|undefined}
 */
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function timeStrToMillis(time) {
  var match = time.toLowerCase().match(/^([0-9\.]+)\s*(s|ms)$/);
  if (!match) {
    return NaN;
  }

  var num = match[1];
  var units = match[2];

  (0, _log.user)().assert(match && match.length == 3 && (units == 's' || units == 'ms'), 'Invalid time string %s', time);

  return units == 's' ? parseFloat(num) * 1000 : parseInt(num, 10);
}

/**
 * Determines whether the specified element has an action for its on="tap:..."
 * handler.
 * @param {!Element} el
 * @return {boolean}
 */
function hasTapAction(el) {
  // There are better ways to determine this, but they're all bound to action
  // service race conditions. This is good enough for our use case.
  return el.hasAttribute('on') && !!el.getAttribute('on').match(/(^|;)\s*tap\s*:/);
}

/**
 * Calculates a client rect without applying scaling transformations.
 * @note Must be run in a vsync measure context.
 * @param {!Element} el
 * @return {!ClientRect}
 */
function unscaledClientRect(el) {
  var _el$getBoundingClient = el. /*OK*/getBoundingClientRect(),
      width = _el$getBoundingClient.width,
      height = _el$getBoundingClient.height,
      left = _el$getBoundingClient.left,
      top = _el$getBoundingClient.top;

  var scaleFactorX = width == 0 ? 1 : width / el. /*OK*/offsetWidth;
  var scaleFactorY = height == 0 ? 1 : height / el. /*OK*/offsetHeight;

  return (/** @type {!ClientRect} */{
      left: left / scaleFactorX,
      top: top / scaleFactorY,
      width: width / scaleFactorX,
      height: height / scaleFactorY
    }
  );
}

/**
 * Finds an amp-video/amp-audio ancestor.
 * @param {!Element} el
 * @return {?AmpElement}
 */
function ampMediaElementFor(el) {
  return (0, _dom.closestBySelector)(el, 'amp-video, amp-audio');
}

},{"../../../src/dom":48,"../../../src/log":57}],39:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AmpStoryVariableService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _navigationState = require('./navigation-state');

var _log = require('../../../src/log');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Variable service for amp-story.
 * Used for URL replacement service. See usage in src/url-replacements-impl.
 */
var AmpStoryVariableService = exports.AmpStoryVariableService = function () {
  function AmpStoryVariableService() {
    _classCallCheck(this, AmpStoryVariableService);

    /** @private {?string} */
    this.pageIndex_ = null;

    /** @private {?number} */
    this.pageId_ = null;
  }

  /**
   * @param {!./navigation-state.StateChangeEventDef} stateChangeEvent
   */


  AmpStoryVariableService.prototype.onStateChange = function onStateChange(stateChangeEvent) {
    switch (stateChangeEvent.type) {
      case _navigationState.StateChangeType.ACTIVE_PAGE:
        var _stateChangeEvent$val = stateChangeEvent.value,
            pageIndex = _stateChangeEvent$val.pageIndex,
            pageId = _stateChangeEvent$val.pageId;

        this.pageIndex_ = pageIndex;
        this.pageId_ = pageId;
        break;
    }
  };

  /**
   * @return {number}
   */


  _createClass(AmpStoryVariableService, [{
    key: 'pageIndex',
    get: function get() {
      return (0, _log.dev)().assertNumber(this.pageIndex_);
    }

    /**
     * @return {string}
     */

  }, {
    key: 'pageId',
    get: function get() {
      return (0, _log.dev)().assertString(this.pageId_);
    }
  }]);

  return AmpStoryVariableService;
}();

},{"../../../src/log":57,"./navigation-state":26}],40:[function(require,module,exports){
(function (global){
/*!

Copyright (C) 2014-2016 by Andrea Giammarchi - @WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
// global window Object
// optional polyfill info
//    'auto' used by default, everything is feature detected
//    'force' use the polyfill even if not fully needed
function installCustomElements(window, polyfill) {'use strict';

  // DO NOT USE THIS FILE DIRECTLY, IT WON'T WORK
  // THIS IS A PROJECT BASED ON A BUILD SYSTEM
  // THIS FILE IS JUST WRAPPED UP RESULTING IN
  // build/document-register-element.node.js

  var
    document = window.document,
    Object = window.Object
  ;

  var htmlClass = (function (info) {
    // (C) Andrea Giammarchi - @WebReflection - MIT Style
    var
      catchClass = /^[A-Z]+[a-z]/,
      filterBy = function (re) {
        var arr = [], tag;
        for (tag in register) {
          if (re.test(tag)) arr.push(tag);
        }
        return arr;
      },
      add = function (Class, tag) {
        tag = tag.toLowerCase();
        if (!(tag in register)) {
          register[Class] = (register[Class] || []).concat(tag);
          register[tag] = (register[tag.toUpperCase()] = Class);
        }
      },
      register = (Object.create || Object)(null),
      htmlClass = {},
      i, section, tags, Class
    ;
    for (section in info) {
      for (Class in info[section]) {
        tags = info[section][Class];
        register[Class] = tags;
        for (i = 0; i < tags.length; i++) {
          register[tags[i].toLowerCase()] =
          register[tags[i].toUpperCase()] = Class;
        }
      }
    }
    htmlClass.get = function get(tagOrClass) {
      return typeof tagOrClass === 'string' ?
        (register[tagOrClass] || (catchClass.test(tagOrClass) ? [] : '')) :
        filterBy(tagOrClass);
    };
    htmlClass.set = function set(tag, Class) {
      return (catchClass.test(tag) ?
        add(tag, Class) :
        add(Class, tag)
      ), htmlClass;
    };
    return htmlClass;
  }({
    "collections": {
      "HTMLAllCollection": [
        "all"
      ],
      "HTMLCollection": [
        "forms"
      ],
      "HTMLFormControlsCollection": [
        "elements"
      ],
      "HTMLOptionsCollection": [
        "options"
      ]
    },
    "elements": {
      "Element": [
        "element"
      ],
      "HTMLAnchorElement": [
        "a"
      ],
      "HTMLAppletElement": [
        "applet"
      ],
      "HTMLAreaElement": [
        "area"
      ],
      "HTMLAttachmentElement": [
        "attachment"
      ],
      "HTMLAudioElement": [
        "audio"
      ],
      "HTMLBRElement": [
        "br"
      ],
      "HTMLBaseElement": [
        "base"
      ],
      "HTMLBodyElement": [
        "body"
      ],
      "HTMLButtonElement": [
        "button"
      ],
      "HTMLCanvasElement": [
        "canvas"
      ],
      "HTMLContentElement": [
        "content"
      ],
      "HTMLDListElement": [
        "dl"
      ],
      "HTMLDataElement": [
        "data"
      ],
      "HTMLDataListElement": [
        "datalist"
      ],
      "HTMLDetailsElement": [
        "details"
      ],
      "HTMLDialogElement": [
        "dialog"
      ],
      "HTMLDirectoryElement": [
        "dir"
      ],
      "HTMLDivElement": [
        "div"
      ],
      "HTMLDocument": [
        "document"
      ],
      "HTMLElement": [
        "element",
        "abbr",
        "address",
        "article",
        "aside",
        "b",
        "bdi",
        "bdo",
        "cite",
        "code",
        "command",
        "dd",
        "dfn",
        "dt",
        "em",
        "figcaption",
        "figure",
        "footer",
        "header",
        "i",
        "kbd",
        "mark",
        "nav",
        "noscript",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "section",
        "small",
        "strong",
        "sub",
        "summary",
        "sup",
        "u",
        "var",
        "wbr"
      ],
      "HTMLEmbedElement": [
        "embed"
      ],
      "HTMLFieldSetElement": [
        "fieldset"
      ],
      "HTMLFontElement": [
        "font"
      ],
      "HTMLFormElement": [
        "form"
      ],
      "HTMLFrameElement": [
        "frame"
      ],
      "HTMLFrameSetElement": [
        "frameset"
      ],
      "HTMLHRElement": [
        "hr"
      ],
      "HTMLHeadElement": [
        "head"
      ],
      "HTMLHeadingElement": [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6"
      ],
      "HTMLHtmlElement": [
        "html"
      ],
      "HTMLIFrameElement": [
        "iframe"
      ],
      "HTMLImageElement": [
        "img"
      ],
      "HTMLInputElement": [
        "input"
      ],
      "HTMLKeygenElement": [
        "keygen"
      ],
      "HTMLLIElement": [
        "li"
      ],
      "HTMLLabelElement": [
        "label"
      ],
      "HTMLLegendElement": [
        "legend"
      ],
      "HTMLLinkElement": [
        "link"
      ],
      "HTMLMapElement": [
        "map"
      ],
      "HTMLMarqueeElement": [
        "marquee"
      ],
      "HTMLMediaElement": [
        "media"
      ],
      "HTMLMenuElement": [
        "menu"
      ],
      "HTMLMenuItemElement": [
        "menuitem"
      ],
      "HTMLMetaElement": [
        "meta"
      ],
      "HTMLMeterElement": [
        "meter"
      ],
      "HTMLModElement": [
        "del",
        "ins"
      ],
      "HTMLOListElement": [
        "ol"
      ],
      "HTMLObjectElement": [
        "object"
      ],
      "HTMLOptGroupElement": [
        "optgroup"
      ],
      "HTMLOptionElement": [
        "option"
      ],
      "HTMLOutputElement": [
        "output"
      ],
      "HTMLParagraphElement": [
        "p"
      ],
      "HTMLParamElement": [
        "param"
      ],
      "HTMLPictureElement": [
        "picture"
      ],
      "HTMLPreElement": [
        "pre"
      ],
      "HTMLProgressElement": [
        "progress"
      ],
      "HTMLQuoteElement": [
        "blockquote",
        "q",
        "quote"
      ],
      "HTMLScriptElement": [
        "script"
      ],
      "HTMLSelectElement": [
        "select"
      ],
      "HTMLShadowElement": [
        "shadow"
      ],
      "HTMLSlotElement": [
        "slot"
      ],
      "HTMLSourceElement": [
        "source"
      ],
      "HTMLSpanElement": [
        "span"
      ],
      "HTMLStyleElement": [
        "style"
      ],
      "HTMLTableCaptionElement": [
        "caption"
      ],
      "HTMLTableCellElement": [
        "td",
        "th"
      ],
      "HTMLTableColElement": [
        "col",
        "colgroup"
      ],
      "HTMLTableElement": [
        "table"
      ],
      "HTMLTableRowElement": [
        "tr"
      ],
      "HTMLTableSectionElement": [
        "thead",
        "tbody",
        "tfoot"
      ],
      "HTMLTemplateElement": [
        "template"
      ],
      "HTMLTextAreaElement": [
        "textarea"
      ],
      "HTMLTimeElement": [
        "time"
      ],
      "HTMLTitleElement": [
        "title"
      ],
      "HTMLTrackElement": [
        "track"
      ],
      "HTMLUListElement": [
        "ul"
      ],
      "HTMLUnknownElement": [
        "unknown",
        "vhgroupv",
        "vkeygen"
      ],
      "HTMLVideoElement": [
        "video"
      ]
    },
    "nodes": {
      "Attr": [
        "node"
      ],
      "Audio": [
        "audio"
      ],
      "CDATASection": [
        "node"
      ],
      "CharacterData": [
        "node"
      ],
      "Comment": [
        "#comment"
      ],
      "Document": [
        "#document"
      ],
      "DocumentFragment": [
        "#document-fragment"
      ],
      "DocumentType": [
        "node"
      ],
      "HTMLDocument": [
        "#document"
      ],
      "Image": [
        "img"
      ],
      "Option": [
        "option"
      ],
      "ProcessingInstruction": [
        "node"
      ],
      "ShadowRoot": [
        "#shadow-root"
      ],
      "Text": [
        "#text"
      ],
      "XMLDocument": [
        "xml"
      ]
    }
  }));
  
  
    
  // passed at runtime, configurable
  // via nodejs module
  if (!polyfill) polyfill = 'auto';
  
  var
    // V0 polyfill entry
    REGISTER_ELEMENT = 'registerElement',
  
    // IE < 11 only + old WebKit for attributes + feature detection
    EXPANDO_UID = '__' + REGISTER_ELEMENT + (window.Math.random() * 10e4 >> 0),
  
    // shortcuts and costants
    ADD_EVENT_LISTENER = 'addEventListener',
    ATTACHED = 'attached',
    CALLBACK = 'Callback',
    DETACHED = 'detached',
    EXTENDS = 'extends',
  
    ATTRIBUTE_CHANGED_CALLBACK = 'attributeChanged' + CALLBACK,
    ATTACHED_CALLBACK = ATTACHED + CALLBACK,
    CONNECTED_CALLBACK = 'connected' + CALLBACK,
    DISCONNECTED_CALLBACK = 'disconnected' + CALLBACK,
    CREATED_CALLBACK = 'created' + CALLBACK,
    DETACHED_CALLBACK = DETACHED + CALLBACK,
  
    ADDITION = 'ADDITION',
    MODIFICATION = 'MODIFICATION',
    REMOVAL = 'REMOVAL',
  
    DOM_ATTR_MODIFIED = 'DOMAttrModified',
    DOM_CONTENT_LOADED = 'DOMContentLoaded',
    DOM_SUBTREE_MODIFIED = 'DOMSubtreeModified',
  
    PREFIX_TAG = '<',
    PREFIX_IS = '=',
  
    // valid and invalid node names
    validName = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
    invalidNames = [
      'ANNOTATION-XML',
      'COLOR-PROFILE',
      'FONT-FACE',
      'FONT-FACE-SRC',
      'FONT-FACE-URI',
      'FONT-FACE-FORMAT',
      'FONT-FACE-NAME',
      'MISSING-GLYPH'
    ],
  
    // registered types and their prototypes
    types = [],
    protos = [],
  
    // to query subnodes
    query = '',
  
    // html shortcut used to feature detect
    documentElement = document.documentElement,
  
    // ES5 inline helpers || basic patches
    indexOf = types.indexOf || function (v) {
      for(var i = this.length; i-- && this[i] !== v;){}
      return i;
    },
  
    // other helpers / shortcuts
    OP = Object.prototype,
    hOP = OP.hasOwnProperty,
    iPO = OP.isPrototypeOf,
  
    defineProperty = Object.defineProperty,
    empty = [],
    gOPD = Object.getOwnPropertyDescriptor,
    gOPN = Object.getOwnPropertyNames,
    gPO = Object.getPrototypeOf,
    sPO = Object.setPrototypeOf,
  
    // jshint proto: true
    hasProto = !!Object.__proto__,
  
    // V1 helpers
    fixGetClass = false,
    DRECEV1 = '__dreCEv1',
    customElements = window.customElements,
    usableCustomElements = polyfill !== 'force' && !!(
      customElements &&
      customElements.define &&
      customElements.get &&
      customElements.whenDefined
    ),
    Dict = Object.create || Object,
    Map = window.Map || function Map() {
      var K = [], V = [], i;
      return {
        get: function (k) {
          return V[indexOf.call(K, k)];
        },
        set: function (k, v) {
          i = indexOf.call(K, k);
          if (i < 0) V[K.push(k) - 1] = v;
          else V[i] = v;
        }
      };
    },
    Promise = window.Promise || function (fn) {
      var
        notify = [],
        done = false,
        p = {
          'catch': function () {
            return p;
          },
          'then': function (cb) {
            notify.push(cb);
            if (done) setTimeout(resolve, 1);
            return p;
          }
        }
      ;
      function resolve(value) {
        done = true;
        while (notify.length) notify.shift()(value);
      }
      fn(resolve);
      return p;
    },
    justCreated = false,
    constructors = Dict(null),
    waitingList = Dict(null),
    nodeNames = new Map(),
    secondArgument = function (is) {
      return is.toLowerCase();
    },
  
    // used to create unique instances
    create = Object.create || function Bridge(proto) {
      // silly broken polyfill probably ever used but short enough to work
      return proto ? ((Bridge.prototype = proto), new Bridge()) : this;
    },
  
    // will set the prototype if possible
    // or copy over all properties
    setPrototype = sPO || (
      hasProto ?
        function (o, p) {
          o.__proto__ = p;
          return o;
        } : (
      (gOPN && gOPD) ?
        (function(){
          function setProperties(o, p) {
            for (var
              key,
              names = gOPN(p),
              i = 0, length = names.length;
              i < length; i++
            ) {
              key = names[i];
              if (!hOP.call(o, key)) {
                defineProperty(o, key, gOPD(p, key));
              }
            }
          }
          return function (o, p) {
            do {
              setProperties(o, p);
            } while ((p = gPO(p)) && !iPO.call(p, o));
            return o;
          };
        }()) :
        function (o, p) {
          for (var key in p) {
            o[key] = p[key];
          }
          return o;
        }
    )),
  
    // DOM shortcuts and helpers, if any
  
    MutationObserver = window.MutationObserver ||
                       window.WebKitMutationObserver,
  
    HTMLElementPrototype = (
      window.HTMLElement ||
      window.Element ||
      window.Node
    ).prototype,
  
    IE8 = !iPO.call(HTMLElementPrototype, documentElement),
  
    safeProperty = IE8 ? function (o, k, d) {
      o[k] = d.value;
      return o;
    } : defineProperty,
  
    isValidNode = IE8 ?
      function (node) {
        return node.nodeType === 1;
      } :
      function (node) {
        return iPO.call(HTMLElementPrototype, node);
      },
  
    targets = IE8 && [],
  
    attachShadow = HTMLElementPrototype.attachShadow,
    cloneNode = HTMLElementPrototype.cloneNode,
    dispatchEvent = HTMLElementPrototype.dispatchEvent,
    getAttribute = HTMLElementPrototype.getAttribute,
    hasAttribute = HTMLElementPrototype.hasAttribute,
    removeAttribute = HTMLElementPrototype.removeAttribute,
    setAttribute = HTMLElementPrototype.setAttribute,
  
    // replaced later on
    createElement = document.createElement,
    patchedCreateElement = createElement,
  
    // shared observer for all attributes
    attributesObserver = MutationObserver && {
      attributes: true,
      characterData: true,
      attributeOldValue: true
    },
  
    // useful to detect only if there's no MutationObserver
    DOMAttrModified = MutationObserver || function(e) {
      doesNotSupportDOMAttrModified = false;
      documentElement.removeEventListener(
        DOM_ATTR_MODIFIED,
        DOMAttrModified
      );
    },
  
    // will both be used to make DOMNodeInserted asynchronous
    asapQueue,
    asapTimer = 0,
  
    // internal flags
    V0 = REGISTER_ELEMENT in document,
    setListener = true,
    justSetup = false,
    doesNotSupportDOMAttrModified = true,
    dropDomContentLoaded = true,
  
    // needed for the innerHTML helper
    notFromInnerHTMLHelper = true,
  
    // optionally defined later on
    onSubtreeModified,
    callDOMAttrModified,
    getAttributesMirror,
    observer,
    observe,
  
    // based on setting prototype capability
    // will check proto or the expando attribute
    // in order to setup the node once
    patchIfNotAlready,
    patch
  ;
  
  // only if needed
  if (!V0) {
  
    if (sPO || hasProto) {
        patchIfNotAlready = function (node, proto) {
          if (!iPO.call(proto, node)) {
            setupNode(node, proto);
          }
        };
        patch = setupNode;
    } else {
        patchIfNotAlready = function (node, proto) {
          if (!node[EXPANDO_UID]) {
            node[EXPANDO_UID] = Object(true);
            setupNode(node, proto);
          }
        };
        patch = patchIfNotAlready;
    }
  
    if (IE8) {
      doesNotSupportDOMAttrModified = false;
      (function (){
        var
          descriptor = gOPD(HTMLElementPrototype, ADD_EVENT_LISTENER),
          addEventListener = descriptor.value,
          patchedRemoveAttribute = function (name) {
            var e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
            e.attrName = name;
            e.prevValue = getAttribute.call(this, name);
            e.newValue = null;
            e[REMOVAL] = e.attrChange = 2;
            removeAttribute.call(this, name);
            dispatchEvent.call(this, e);
          },
          patchedSetAttribute = function (name, value) {
            var
              had = hasAttribute.call(this, name),
              old = had && getAttribute.call(this, name),
              e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true})
            ;
            setAttribute.call(this, name, value);
            e.attrName = name;
            e.prevValue = had ? old : null;
            e.newValue = value;
            if (had) {
              e[MODIFICATION] = e.attrChange = 1;
            } else {
              e[ADDITION] = e.attrChange = 0;
            }
            dispatchEvent.call(this, e);
          },
          onPropertyChange = function (e) {
            // jshint eqnull:true
            var
              node = e.currentTarget,
              superSecret = node[EXPANDO_UID],
              propertyName = e.propertyName,
              event
            ;
            if (superSecret.hasOwnProperty(propertyName)) {
              superSecret = superSecret[propertyName];
              event = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
              event.attrName = superSecret.name;
              event.prevValue = superSecret.value || null;
              event.newValue = (superSecret.value = node[propertyName] || null);
              if (event.prevValue == null) {
                event[ADDITION] = event.attrChange = 0;
              } else {
                event[MODIFICATION] = event.attrChange = 1;
              }
              dispatchEvent.call(node, event);
            }
          }
        ;
        descriptor.value = function (type, handler, capture) {
          if (
            type === DOM_ATTR_MODIFIED &&
            this[ATTRIBUTE_CHANGED_CALLBACK] &&
            this.setAttribute !== patchedSetAttribute
          ) {
            this[EXPANDO_UID] = {
              className: {
                name: 'class',
                value: this.className
              }
            };
            this.setAttribute = patchedSetAttribute;
            this.removeAttribute = patchedRemoveAttribute;
            addEventListener.call(this, 'propertychange', onPropertyChange);
          }
          addEventListener.call(this, type, handler, capture);
        };
        defineProperty(HTMLElementPrototype, ADD_EVENT_LISTENER, descriptor);
      }());
    } else if (!MutationObserver) {
      documentElement[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, DOMAttrModified);
      documentElement.setAttribute(EXPANDO_UID, 1);
      documentElement.removeAttribute(EXPANDO_UID);
      if (doesNotSupportDOMAttrModified) {
        onSubtreeModified = function (e) {
          var
            node = this,
            oldAttributes,
            newAttributes,
            key
          ;
          if (node === e.target) {
            oldAttributes = node[EXPANDO_UID];
            node[EXPANDO_UID] = (newAttributes = getAttributesMirror(node));
            for (key in newAttributes) {
              if (!(key in oldAttributes)) {
                // attribute was added
                return callDOMAttrModified(
                  0,
                  node,
                  key,
                  oldAttributes[key],
                  newAttributes[key],
                  ADDITION
                );
              } else if (newAttributes[key] !== oldAttributes[key]) {
                // attribute was changed
                return callDOMAttrModified(
                  1,
                  node,
                  key,
                  oldAttributes[key],
                  newAttributes[key],
                  MODIFICATION
                );
              }
            }
            // checking if it has been removed
            for (key in oldAttributes) {
              if (!(key in newAttributes)) {
                // attribute removed
                return callDOMAttrModified(
                  2,
                  node,
                  key,
                  oldAttributes[key],
                  newAttributes[key],
                  REMOVAL
                );
              }
            }
          }
        };
        callDOMAttrModified = function (
          attrChange,
          currentTarget,
          attrName,
          prevValue,
          newValue,
          action
        ) {
          var e = {
            attrChange: attrChange,
            currentTarget: currentTarget,
            attrName: attrName,
            prevValue: prevValue,
            newValue: newValue
          };
          e[action] = attrChange;
          onDOMAttrModified(e);
        };
        getAttributesMirror = function (node) {
          for (var
            attr, name,
            result = {},
            attributes = node.attributes,
            i = 0, length = attributes.length;
            i < length; i++
          ) {
            attr = attributes[i];
            name = attr.name;
            if (name !== 'setAttribute') {
              result[name] = attr.value;
            }
          }
          return result;
        };
      }
    }
  
    // set as enumerable, writable and configurable
    document[REGISTER_ELEMENT] = function registerElement(type, options) {
      upperType = type.toUpperCase();
      if (setListener) {
        // only first time document.registerElement is used
        // we need to set this listener
        // setting it by default might slow down for no reason
        setListener = false;
        if (MutationObserver) {
          observer = (function(attached, detached){
            function checkEmAll(list, callback) {
              for (var i = 0, length = list.length; i < length; callback(list[i++])){}
            }
            return new MutationObserver(function (records) {
              for (var
                current, node, newValue,
                i = 0, length = records.length; i < length; i++
              ) {
                current = records[i];
                if (current.type === 'childList') {
                  checkEmAll(current.addedNodes, attached);
                  checkEmAll(current.removedNodes, detached);
                } else {
                  node = current.target;
                  if (notFromInnerHTMLHelper &&
                      node[ATTRIBUTE_CHANGED_CALLBACK] &&
                      current.attributeName !== 'style') {
                    newValue = getAttribute.call(node, current.attributeName);
                    if (newValue !== current.oldValue) {
                      node[ATTRIBUTE_CHANGED_CALLBACK](
                        current.attributeName,
                        current.oldValue,
                        newValue
                      );
                    }
                  }
                }
              }
            });
          }(executeAction(ATTACHED), executeAction(DETACHED)));
          observe = function (node) {
            observer.observe(
              node,
              {
                childList: true,
                subtree: true
              }
            );
            return node;
          };
          observe(document);
          if (attachShadow) {
            HTMLElementPrototype.attachShadow = function () {
              return observe(attachShadow.apply(this, arguments));
            };
          }
        } else {
          asapQueue = [];
          document[ADD_EVENT_LISTENER]('DOMNodeInserted', onDOMNode(ATTACHED));
          document[ADD_EVENT_LISTENER]('DOMNodeRemoved', onDOMNode(DETACHED));
        }
  
        document[ADD_EVENT_LISTENER](DOM_CONTENT_LOADED, onReadyStateChange);
        document[ADD_EVENT_LISTENER]('readystatechange', onReadyStateChange);
  
        HTMLElementPrototype.cloneNode = function (deep) {
          var
            node = cloneNode.call(this, !!deep),
            i = getTypeIndex(node)
          ;
          if (-1 < i) patch(node, protos[i]);
          if (deep && query.length) loopAndSetup(node.querySelectorAll(query));
          return node;
        };
      }
  
      if (justSetup) return (justSetup = false);
  
      if (-2 < (
        indexOf.call(types, PREFIX_IS + upperType) +
        indexOf.call(types, PREFIX_TAG + upperType)
      )) {
        throwTypeError(type);
      }
  
      if (!validName.test(upperType) || -1 < indexOf.call(invalidNames, upperType)) {
        throw new Error('The type ' + type + ' is invalid');
      }
  
      var
        constructor = function () {
          return extending ?
            document.createElement(nodeName, upperType) :
            document.createElement(nodeName);
        },
        opt = options || OP,
        extending = hOP.call(opt, EXTENDS),
        nodeName = extending ? options[EXTENDS].toUpperCase() : upperType,
        upperType,
        i
      ;
  
      if (extending && -1 < (
        indexOf.call(types, PREFIX_TAG + nodeName)
      )) {
        throwTypeError(nodeName);
      }
  
      i = types.push((extending ? PREFIX_IS : PREFIX_TAG) + upperType) - 1;
  
      query = query.concat(
        query.length ? ',' : '',
        extending ? nodeName + '[is="' + type.toLowerCase() + '"]' : nodeName
      );
  
      constructor.prototype = (
        protos[i] = hOP.call(opt, 'prototype') ?
          opt.prototype :
          create(HTMLElementPrototype)
      );
  
      if (query.length) loopAndVerify(
        document.querySelectorAll(query),
        ATTACHED
      );
  
      return constructor;
    };
  
    document.createElement = (patchedCreateElement = function (localName, typeExtension) {
      var
        is = getIs(typeExtension),
        node = is ?
          createElement.call(document, localName, secondArgument(is)) :
          createElement.call(document, localName),
        name = '' + localName,
        i = indexOf.call(
          types,
          (is ? PREFIX_IS : PREFIX_TAG) +
          (is || name).toUpperCase()
        ),
        setup = -1 < i
      ;
      if (is) {
        node.setAttribute('is', is = is.toLowerCase());
        if (setup) {
          setup = isInQSA(name.toUpperCase(), is);
        }
      }
      notFromInnerHTMLHelper = !document.createElement.innerHTMLHelper;
      if (setup) patch(node, protos[i]);
      return node;
    });
  
  }
  
  function ASAP() {
    var queue = asapQueue.splice(0, asapQueue.length);
    asapTimer = 0;
    while (queue.length) {
      queue.shift().call(
        null, queue.shift()
      );
    }
  }
  
  function loopAndVerify(list, action) {
    for (var i = 0, length = list.length; i < length; i++) {
      verifyAndSetupAndAction(list[i], action);
    }
  }
  
  function loopAndSetup(list) {
    for (var i = 0, length = list.length, node; i < length; i++) {
      node = list[i];
      patch(node, protos[getTypeIndex(node)]);
    }
  }
  
  function executeAction(action) {
    return function (node) {
      if (isValidNode(node)) {
        verifyAndSetupAndAction(node, action);
        if (query.length) loopAndVerify(
          node.querySelectorAll(query),
          action
        );
      }
    };
  }
  
  function getTypeIndex(target) {
    var
      is = getAttribute.call(target, 'is'),
      nodeName = target.nodeName.toUpperCase(),
      i = indexOf.call(
        types,
        is ?
            PREFIX_IS + is.toUpperCase() :
            PREFIX_TAG + nodeName
      )
    ;
    return is && -1 < i && !isInQSA(nodeName, is) ? -1 : i;
  }
  
  function isInQSA(name, type) {
    return -1 < query.indexOf(name + '[is="' + type + '"]');
  }
  
  function onDOMAttrModified(e) {
    var
      node = e.currentTarget,
      attrChange = e.attrChange,
      attrName = e.attrName,
      target = e.target,
      addition = e[ADDITION] || 2,
      removal = e[REMOVAL] || 3
    ;
    if (notFromInnerHTMLHelper &&
        (!target || target === node) &&
        node[ATTRIBUTE_CHANGED_CALLBACK] &&
        attrName !== 'style' && (
          e.prevValue !== e.newValue ||
          // IE9, IE10, and Opera 12 gotcha
          e.newValue === '' && (
            attrChange === addition ||
            attrChange === removal
          )
    )) {
      node[ATTRIBUTE_CHANGED_CALLBACK](
        attrName,
        attrChange === addition ? null : e.prevValue,
        attrChange === removal ? null : e.newValue
      );
    }
  }
  
  function onDOMNode(action) {
    var executor = executeAction(action);
    return function (e) {
      asapQueue.push(executor, e.target);
      if (asapTimer) clearTimeout(asapTimer);
      asapTimer = setTimeout(ASAP, 1);
    };
  }
  
  function onReadyStateChange(e) {
    if (dropDomContentLoaded) {
      dropDomContentLoaded = false;
      e.currentTarget.removeEventListener(DOM_CONTENT_LOADED, onReadyStateChange);
    }
    if (query.length) loopAndVerify(
      (e.target || document).querySelectorAll(query),
      e.detail === DETACHED ? DETACHED : ATTACHED
    );
    if (IE8) purge();
  }
  
  function patchedSetAttribute(name, value) {
    // jshint validthis:true
    var self = this;
    setAttribute.call(self, name, value);
    onSubtreeModified.call(self, {target: self});
  }
  
  function setupNode(node, proto) {
    setPrototype(node, proto);
    if (observer) {
      observer.observe(node, attributesObserver);
    } else {
      if (doesNotSupportDOMAttrModified) {
        node.setAttribute = patchedSetAttribute;
        node[EXPANDO_UID] = getAttributesMirror(node);
        node[ADD_EVENT_LISTENER](DOM_SUBTREE_MODIFIED, onSubtreeModified);
      }
      node[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, onDOMAttrModified);
    }
    if (node[CREATED_CALLBACK] && notFromInnerHTMLHelper) {
      node.created = true;
      node[CREATED_CALLBACK]();
      node.created = false;
    }
  }
  
  function purge() {
    for (var
      node,
      i = 0,
      length = targets.length;
      i < length; i++
    ) {
      node = targets[i];
      if (!documentElement.contains(node)) {
        length--;
        targets.splice(i--, 1);
        verifyAndSetupAndAction(node, DETACHED);
      }
    }
  }
  
  function throwTypeError(type) {
    throw new Error('A ' + type + ' type is already registered');
  }
  
  function verifyAndSetupAndAction(node, action) {
    var
      fn,
      i = getTypeIndex(node)
    ;
    if (-1 < i) {
      patchIfNotAlready(node, protos[i]);
      i = 0;
      if (action === ATTACHED && !node[ATTACHED]) {
        node[DETACHED] = false;
        node[ATTACHED] = true;
        i = 1;
        if (IE8 && indexOf.call(targets, node) < 0) {
          targets.push(node);
        }
      } else if (action === DETACHED && !node[DETACHED]) {
        node[ATTACHED] = false;
        node[DETACHED] = true;
        i = 1;
      }
      if (i && (fn = node[action + CALLBACK])) fn.call(node);
    }
  }
  
  
  
  // V1 in da House!
  function CustomElementRegistry() {}
  
  CustomElementRegistry.prototype = {
    constructor: CustomElementRegistry,
    // a workaround for the stubborn WebKit
    define: usableCustomElements ?
      function (name, Class, options) {
        if (options) {
          CERDefine(name, Class, options);
        } else {
          var NAME = name.toUpperCase();
          constructors[NAME] = {
            constructor: Class,
            create: [NAME]
          };
          nodeNames.set(Class, NAME);
          customElements.define(name, Class);
        }
      } :
      CERDefine,
    get: usableCustomElements ?
      function (name) {
        return customElements.get(name) || get(name);
      } :
      get,
    whenDefined: usableCustomElements ?
      function (name) {
        return Promise.race([
          customElements.whenDefined(name),
          whenDefined(name)
        ]);
      } :
      whenDefined
  };
  
  function CERDefine(name, Class, options) {
    var
      is = options && options[EXTENDS] || '',
      CProto = Class.prototype,
      proto = create(CProto),
      attributes = Class.observedAttributes || empty,
      definition = {prototype: proto}
    ;
    // TODO: is this needed at all since it's inherited?
    // defineProperty(proto, 'constructor', {value: Class});
    safeProperty(proto, CREATED_CALLBACK, {
        value: function () {
          if (justCreated) justCreated = false;
          else if (!this[DRECEV1]) {
            this[DRECEV1] = true;
            new Class(this);
            if (CProto[CREATED_CALLBACK])
              CProto[CREATED_CALLBACK].call(this);
            var info = constructors[nodeNames.get(Class)];
            if (!usableCustomElements || info.create.length > 1) {
              notifyAttributes(this);
            }
          }
      }
    });
    safeProperty(proto, ATTRIBUTE_CHANGED_CALLBACK, {
      value: function (name) {
        if (-1 < indexOf.call(attributes, name))
          CProto[ATTRIBUTE_CHANGED_CALLBACK].apply(this, arguments);
      }
    });
    if (CProto[CONNECTED_CALLBACK]) {
      safeProperty(proto, ATTACHED_CALLBACK, {
        value: CProto[CONNECTED_CALLBACK]
      });
    }
    if (CProto[DISCONNECTED_CALLBACK]) {
      safeProperty(proto, DETACHED_CALLBACK, {
        value: CProto[DISCONNECTED_CALLBACK]
      });
    }
    if (is) definition[EXTENDS] = is;
    name = name.toUpperCase();
    constructors[name] = {
      constructor: Class,
      create: is ? [is, secondArgument(name)] : [name]
    };
    nodeNames.set(Class, name);
    document[REGISTER_ELEMENT](name.toLowerCase(), definition);
    whenDefined(name);
    waitingList[name].r();
  }
  
  function get(name) {
    var info = constructors[name.toUpperCase()];
    return info && info.constructor;
  }
  
  function getIs(options) {
    return typeof options === 'string' ?
        options : (options && options.is || '');
  }
  
  function notifyAttributes(self) {
    var
      callback = self[ATTRIBUTE_CHANGED_CALLBACK],
      attributes = callback ? self.attributes : empty,
      i = attributes.length,
      attribute
    ;
    while (i--) {
      attribute =  attributes[i]; // || attributes.item(i);
      callback.call(
        self,
        attribute.name || attribute.nodeName,
        null,
        attribute.value || attribute.nodeValue
      );
    }
  }
  
  function whenDefined(name) {
    name = name.toUpperCase();
    if (!(name in waitingList)) {
      waitingList[name] = {};
      waitingList[name].p = new Promise(function (resolve) {
        waitingList[name].r = resolve;
      });
    }
    return waitingList[name].p;
  }
  
  function polyfillV1() {
    if (customElements) delete window.customElements;
    defineProperty(window, 'customElements', {
      configurable: true,
      value: new CustomElementRegistry()
    });
    defineProperty(window, 'CustomElementRegistry', {
      configurable: true,
      value: CustomElementRegistry
    });
    for (var
      patchClass = function (name) {
        var Class = window[name];
        if (Class) {
          window[name] = function CustomElementsV1(self) {
            var info, isNative;
            if (!self) self = this;
            if (!self[DRECEV1]) {
              justCreated = true;
              info = constructors[nodeNames.get(self.constructor)];
              isNative = usableCustomElements && info.create.length === 1;
              self = isNative ?
                Reflect.construct(Class, empty, info.constructor) :
                document.createElement.apply(document, info.create);
              self[DRECEV1] = true;
              justCreated = false;
              if (!isNative) notifyAttributes(self);
            }
            return self;
          };
          window[name].prototype = Class.prototype;
          try {
            Class.prototype.constructor = window[name];
          } catch(WebKit) {
            fixGetClass = true;
            defineProperty(Class, DRECEV1, {value: window[name]});
          }
        }
      },
      Classes = htmlClass.get(/^HTML[A-Z]*[a-z]/),
      i = Classes.length;
      i--;
      patchClass(Classes[i])
    ) {}
    (document.createElement = function (name, options) {
      var is = getIs(options);
      return is ?
        patchedCreateElement.call(this, name, secondArgument(is)) :
        patchedCreateElement.call(this, name);
    });
    if (!V0) {
      justSetup = true;
      document[REGISTER_ELEMENT]('');
    }
  }
  
  // if customElements is not there at all
  if (!customElements || polyfill === 'force') polyfillV1();
  else {
    // if available test extends work as expected
    try {
      (function (DRE, options, name) {
        options[EXTENDS] = 'a';
        DRE.prototype = create(HTMLAnchorElement.prototype);
        DRE.prototype.constructor = DRE;
        window.customElements.define(name, DRE, options);
        if (
          getAttribute.call(document.createElement('a', {is: name}), 'is') !== name ||
          (usableCustomElements && getAttribute.call(new DRE(), 'is') !== name)
        ) {
          throw options;
        }
      }(
        function DRE() {
          return Reflect.construct(HTMLAnchorElement, [], DRE);
        },
        {},
        'document-register-element-a'
      ));
    } catch(o_O) {
      // or force the polyfill if not
      // and keep internal original reference
      polyfillV1();
    }
  }
  
  try {
    createElement.call(document, 'a', 'a');
  } catch(FireFox) {
    secondArgument = function (is) {
      return {is: is.toLowerCase()};
    };
  }
  
}

module.exports = installCustomElements;
installCustomElements(global);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],41:[function(require,module,exports){
'use strict';

/**
 * Constructs a ES6/Promises A+ Promise instance.
 *
 * @constructor
 * @param {function(function(*=), function (*=))} resolver
 */
function Promise(resolver) {
  if (!(this instanceof Promise)) {
    throw new TypeError('Constructor Promise requires `new`');
  }
  if (!isFunction(resolver)) {
    throw new TypeError('Must pass resolver function');
  }

  /**
   * @type {function(this:Promise,*=,function(*=),function(*=),Deferred):!Promise}
   * @private
   */
  this._state = PendingPromise;

  /**
   * @type {*}
   * @private
   */
  this._value = [];

  /**
   * @type {boolean}
   * @private
   */
  this._isChainEnd = true;

  doResolve(
    this,
    adopter(this, FulfilledPromise),
    adopter(this, RejectedPromise),
    { then: resolver }
  );
}

/****************************
  Public Instance Methods
 ****************************/

/**
 * Creates a new promise instance that will receive the result of this promise
 * as inputs to the onFulfilled or onRejected callbacks.
 *
 * @param {function(*)} onFulfilled
 * @param {function(*)} onRejected
 */
Promise.prototype.then = function(onFulfilled, onRejected) {
  onFulfilled = isFunction(onFulfilled) ? onFulfilled : void 0;
  onRejected = isFunction(onRejected) ? onRejected : void 0;

  if (onFulfilled || onRejected) {
    this._isChainEnd = false;
  }

  return this._state(
    this._value,
    onFulfilled,
    onRejected
  );
};

/**
 * Creates a new promise that will handle the rejected state of this promise.
 *
 * @param {function(*)} onRejected
 * @returns {!Promise}
 */
Promise.prototype.catch = function(onRejected) {
  return this.then(void 0, onRejected);
};

/****************************
  Public Static Methods
 ****************************/

/**
 * Creates a fulfilled Promise of value. If value is itself a then-able,
 * resolves with the then-able's value.
 *
 * @this {!Promise}
 * @param {*=} value
 * @returns {!Promise}
 */
Promise.resolve = function(value) {
  var Constructor = this;
  var promise;

  if (isObject(value) && value instanceof this) {
    promise = value;
  } else {
    promise = new Constructor(function(resolve) {
      resolve(value);
    });
  }

  return /** @type {!Promise} */(promise);
};

/**
 * Creates a rejected Promise of reason.
 *
 * @this {!Promise}
 * @param {*=} reason
 * @returns {!Promise}
 */
Promise.reject = function(reason) {
  var Constructor = this;
  var promise = new Constructor(function(_, reject) {
    reject(reason);
  });

  return /** @type {!Promise} */(promise);
};

/**
 * Creates a Promise that will resolve with an array of the values of the
 * passed in promises. If any promise rejects, the returned promise will
 * reject.
 *
 * @this {!Promise}
 * @param {!Array<Promise|*>} promises
 * @returns {!Promise}
 */
Promise.all = function(promises) {
  var Constructor = this;
  var promise = new Constructor(function(resolve, reject) {
    var length = promises.length;
    var values = new Array(length);

    if (length === 0) {
      return resolve(values);
    }

    each(promises, function(promise, index) {
      Constructor.resolve(promise).then(function(value) {
        values[index] = value;
        if (--length === 0) {
          resolve(values);
        }
      }, reject);
    });
  });

  return /** @type {!Promise} */(promise);
};

/**
 * Creates a Promise that will resolve or reject based on the first
 * resolved or rejected promise.
 *
 * @this {!Promise}
 * @param {!Array<Promise|*>} promises
 * @returns {!Promise}
 */
Promise.race = function(promises) {
  var Constructor = this;
  var promise = new Constructor(function(resolve, reject) {
    for (var i = 0; i < promises.length; i++) {
      Constructor.resolve(promises[i]).then(resolve, reject);
    }
  });

  return /** @type {!Promise} */(promise);
};

var onPossiblyUnhandledRejection = function(reason, promise) {
  throw reason;
};

/**
 * An internal use static function.
 */
Promise._overrideUnhandledExceptionHandler = function(handler) {
  onPossiblyUnhandledRejection = handler;
};

/****************************
  Private functions
 ****************************/

/**
 * The Fulfilled Promise state. Calls onFulfilled with the resolved value of
 * this promise, creating a new promise.
 *
 * If there is no onFulfilled, returns the current promise to avoid an promise
 * instance.
 *
 * @this {!Promise} The current promise
 * @param {*=} value The current promise's resolved value.
 * @param {function(*=)=} onFulfilled
 * @param {function(*=)=} unused
 * @param {Deferred} deferred A deferred object that holds a promise and its
 *     resolve and reject functions. It IS NOT passed when called from
 *     Promise#then to save an object instance (since we may return the current
 *     promise). It IS passed in when adopting the Fulfilled state from the
 *     Pending state.
 * @returns {!Promise}
 */
function FulfilledPromise(value, onFulfilled, unused, deferred) {
  if (!onFulfilled) {
    deferredAdopt(deferred, FulfilledPromise, value);
    return this;
  }
  if (!deferred) {
    deferred = new Deferred(this.constructor);
  }
  defer(tryCatchDeferred(deferred, onFulfilled, value));
  return deferred.promise;
}

/**
 * The Rejected Promise state. Calls onRejected with the resolved value of
 * this promise, creating a new promise.
 *
 * If there is no onRejected, returns the current promise to avoid an promise
 * instance.
 *
 * @this {!Promise} The current promise
 * @param {*=} reason The current promise's rejection reason.
 * @param {function(*=)=} unused
 * @param {function(*=)=} onRejected
 * @param {Deferred} deferred A deferred object that holds a promise and its
 *     resolve and reject functions. It IS NOT passed when called from
 *     Promise#then to save an object instance (since we may return the current
 *     promise). It IS passed in when adopting the Rejected state from the
 *     Pending state.
 * @returns {!Promise}
 */
function RejectedPromise(reason, unused, onRejected, deferred) {
  if (!onRejected) {
    deferredAdopt(deferred, RejectedPromise, reason);
    return this;
  }
  if (!deferred) {
    deferred = new Deferred(this.constructor);
  }
  defer(tryCatchDeferred(deferred, onRejected, reason));
  return deferred.promise;
}

/**
 * The Pending Promise state. Eventually calls onFulfilled once the promise has
 * resolved, or onRejected once the promise rejects.
 *
 * If there is no onFulfilled and no onRejected, returns the current promise to
 * avoid an promise instance.
 *
 * @this {!Promise} The current promise
 * @param {*=} queue The current promise's pending promises queue.
 * @param {function(*=)=} onFulfilled
 * @param {function(*=)=} onRejected
 * @param {Deferred} deferred A deferred object that holds a promise and its
 *     resolve and reject functions. It IS NOT passed when called from
 *     Promise#then to save an object instance (since we may return the current
 *     promise). It IS passed in when adopting the Pending state from the
 *     Pending state of another promise.
 * @returns {!Promise}
 */
function PendingPromise(queue, onFulfilled, onRejected, deferred) {
  if (!deferred) {
    if (!onFulfilled && !onRejected) { return this; }
    deferred = new Deferred(this.constructor);
  }
  queue.push({
    deferred: deferred,
    onFulfilled: onFulfilled || deferred.resolve,
    onRejected: onRejected || deferred.reject
  });
  return deferred.promise;
}

/**
 * Constructs a deferred instance that holds a promise and its resolve and
 * reject functions.
 *
 * @constructor
 */
function Deferred(Promise) {
  var deferred = this;
  /** @type {!Promise} */
  this.promise = new Promise(function(resolve, reject) {
    /** @type {function(*=)} */
    deferred.resolve = resolve;

    /** @type {function(*=)} */
    deferred.reject = reject;
  });
  return deferred;
}

/**
 * Transitions the state of promise to another state. This is only ever called
 * on with a promise that is currently in the Pending state.
 *
 * @param {!Promise} promise
 * @param {function(this:Promise,*=,function(*=),function(*=),Deferred):!Promise} state
 * @param {*=} value
 */
function adopt(promise, state, value, adoptee) {
  var queue = promise._value;
  promise._state = state;
  promise._value = value;

  if (adoptee && state === PendingPromise) {
    adoptee._state(value, void 0, void 0, {
      promise: promise,
      resolve: void 0,
      reject: void 0
    });
  }

  for (var i = 0; i < queue.length; i++) {
    var next = queue[i];
    promise._state(
      value,
      next.onFulfilled,
      next.onRejected,
      next.deferred
    );
  }
  queue.length = 0;

  // Determine if this rejected promise will be "handled".
  if (state === RejectedPromise && promise._isChainEnd) {
    setTimeout(function() {
      if (promise._isChainEnd) {
        onPossiblyUnhandledRejection(value, promise);
      }
    }, 0);
  }
}

/**
 * A partial application of adopt.
 *
 * @param {!Promise} promise
 * @param {function(this:Promise,*=,function(*=),function(*=),Deferred):!Promise} state
 * @returns {function(*=)}
 */
function adopter(promise, state) {
  return function(value) {
    adopt(promise, state, value);
  };
}

/**
 * Updates a deferred promises state. Necessary for updating an adopting
 * promise's state when the adoptee resolves.
 *
 * @param {?Deferred} deferred
 * @param {function(this:Promise,*=,function(*=),function(*=),Deferred):!Promise} state
 * @param {*=} value
 */
function deferredAdopt(deferred, state, value) {
  if (deferred) {
    var promise = deferred.promise;
    promise._state = state;
    promise._value = value;
  }
}

/**
 * A no-op function to prevent double resolving.
 */
function noop() {}

/**
 * Tests if fn is a Function
 *
 * @param {*} fn
 * @returns {boolean}
 */
function isFunction(fn) {
  return typeof fn === 'function';
}

/**
 * Tests if fn is an Object
 *
 * @param {*} obj
 * @returns {boolean}
 */
function isObject(obj) {
  return obj === Object(obj);
}

/**
 * Iterates over each element of an array, calling the iterator with the
 * element and its index.
 *
 * @param {!Array} collection
 * @param {function(*=,number)} iterator
 */
function each(collection, iterator) {
  for (var i = 0; i < collection.length; i++) {
    iterator(collection[i], i);
  }
}

/**
 * Creates a function that will attempt to resolve the deferred with the return
 * of fn. If any error is raised, rejects instead.
 *
 * @param {!Deferred} deferred
 * @param {function(*=)} fn
 * @param {*} arg
 * @returns {function()}
 */
function tryCatchDeferred(deferred, fn, arg) {
  var promise = deferred.promise;
  var resolve = deferred.resolve;
  var reject = deferred.reject;
  return function() {
    try {
      var result = fn(arg);
      doResolve(promise, resolve, reject, result, result);
    } catch (e) {
      reject(e);
    }
  };
}

/**
 * Queues and executes multiple deferred functions on another run loop.
 */
var defer = (function() {
  /**
   * Defers fn to another run loop.
   */
  var scheduleFlush;
  if (typeof window !== 'undefined' && window.postMessage) {
    window.addEventListener('message', flush);
    scheduleFlush = function() {
      window.postMessage('macro-task', '*');
    };
  } else {
    scheduleFlush = function() {
      setTimeout(flush, 0);
    };
  }

  var queue = new Array(16);
  var length = 0;

  function flush() {
    for (var i = 0; i < length; i++) {
      var fn = queue[i];
      queue[i] = null;
      fn();
    }
    length = 0;
  }

  /**
   * @param {function()} fn
   */
  function defer(fn) {
    if (length === 0) { scheduleFlush(); }
    queue[length++] = fn;
  }

  return defer;
})();

/**
 * The Promise resolution procedure.
 * https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
 *
 * @param {!Promise} promise
 * @param {function(*=)} resolve
 * @param {function(*=)} reject
 * @param {*} value
 * @param {*=} context
 */
function doResolve(promise, resolve, reject, value, context) {
  var _reject = reject;
  var then;
  var _resolve;
  try {
    if (value === promise) {
      throw new TypeError('Cannot fulfill promise with itself');
    }
    var isObj = isObject(value);
    if (isObj && value instanceof promise.constructor) {
      adopt(promise, value._state, value._value, value);
    } else if (isObj && (then = value.then) && isFunction(then)) {
      _resolve = function(value) {
        _resolve = _reject = noop;
        doResolve(promise, resolve, reject, value, value);
      };
      _reject = function(reason) {
        _resolve = _reject = noop;
        reject(reason);
      };
      then.call(
        context,
        function(value) { _resolve(value); },
        function(reason) { _reject(reason); }
      );
    } else {
      resolve(value);
    }
  } catch (e) {
    _reject(e);
  }
}

module.exports = Promise;

},{}],42:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Trust level of an action.
 *
 * Corresponds to degree of user intent, i.e. events triggered with strong
 * user intent have high trust.
 *
 * @enum {number}
 */
var ActionTrust = exports.ActionTrust = {
  LOW: 1,
  HIGH: 100
};

},{}],43:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.triggerAnalyticsEvent = triggerAnalyticsEvent;

var _services = require('./services');

/**
 * Helper method to trigger analytics event if amp-analytics is available.
 * TODO: Do not expose this function
 * @param {!Element} target
 * @param {string} eventType
 * @param {!Object<string, string>=} opt_vars A map of vars and their values.
 */
function triggerAnalyticsEvent(target, eventType, opt_vars) {
  _services.Services.analyticsForDocOrNull(target).then(function (analytics) {
    if (!analytics) {
      return;
    }
    analytics.triggerEventForTarget(target, eventType, opt_vars);
  });
} /**
   * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS-IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

},{"./services":72}],44:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyTextToClipboard = copyTextToClipboard;
exports.isCopyingToClipboardSupported = isCopyingToClipboardSupported;

var _dom = require('./dom');

var _style = require('./style');

/**
 * @param {!Window} win
 * @param {string} text
 * @return {boolean}
 */
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function copyTextToClipboard(win, text) {
  var copySuccessful = false;
  var doc = win.document;

  var textarea = doc.createElement('textarea');

  (0, _style.setStyles)(textarea, {
    'position': 'fixed',
    'top': 0,
    'left': 0,
    'width': '50px',
    'height': '50px',
    'padding': 0,
    'border': 'none',
    'outline': 'none',
    'background': 'transparent'
  });

  textarea.value = text;
  textarea.readOnly = true;
  textarea.contentEditable = true;

  doc.body.appendChild(textarea);
  var range = doc.createRange();
  range.selectNode(textarea);
  win.getSelection().removeAllRanges();
  win.getSelection().addRange(range);
  textarea.setSelectionRange(0, text.length);

  try {
    copySuccessful = doc.execCommand('copy');
  } catch (e) {
    // 🤷
  }

  (0, _dom.removeElement)(textarea);

  return copySuccessful;
}

/**
 * @param {!Document} doc
 * @return {boolean}
 */
function isCopyingToClipboardSupported(doc) {
  return doc.queryCommandSupported('copy');
}

},{"./dom":48,"./style":74}],45:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Commonly used signals across different elements and documents.
 * @enum {string}
 */
var CommonSignals = exports.CommonSignals = {

  /**
   * The element has been built.
   */
  BUILT: 'built',

  /**
   * The initial contents of an element/document/embed have been loaded.
   */
  INI_LOAD: 'ini-load',

  /**
   * The element has been loaded.
   */
  LOAD_END: 'load-end',

  /**
   * The element has started loading.
   */
  LOAD_START: 'load-start',

  /**
   * Rendering has been confirmed to have been started.
   */
  RENDER_START: 'render-start',

  /**
   * The element has been unlaid out.
   */
  UNLOAD: 'unload'
};

},{}],46:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Allows for runtime configuration. Internally, the runtime should
 * use the src/config.js module for various constants. We can use the
 * AMP_CONFIG global to translate user-defined configurations to this
 * module.
 * @type {!Object<string, string>}
 */
var env = self.AMP_CONFIG || {};

var thirdPartyFrameRegex = typeof env['thirdPartyFrameRegex'] == 'string' ? new RegExp(env['thirdPartyFrameRegex']) : env['thirdPartyFrameRegex'];

var cdnProxyRegex = typeof env['cdnProxyRegex'] == 'string' ? new RegExp(env['cdnProxyRegex']) : env['cdnProxyRegex'];

/** @type {!Object<string, string|boolean|RegExp>} */
var urls = exports.urls = {
  thirdParty: env['thirdPartyUrl'] || 'https://3p.ampproject.net',
  thirdPartyFrameHost: env['thirdPartyFrameHost'] || 'ampproject.net',
  thirdPartyFrameRegex: thirdPartyFrameRegex || /^d-\d+\.ampproject\.net$/,
  cdn: env['cdnUrl'] || 'https://cdn.ampproject.org',
  /* Note that cdnProxyRegex is only ever checked against origins
   * (proto://host[:port]) so does not need to consider path
   */
  cdnProxyRegex: cdnProxyRegex || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,
  localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
  errorReporting: env['errorReportingUrl'] || 'https://amp-error-reporting.appspot.com/r',
  localDev: env['localDev'] || false
};

},{}],47:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCookie = getCookie;
exports.setCookie = setCookie;

var _string = require('./string');

var _url = require('./url');

var _config = require('./config');

/**
 * Returns the value of the cookie. The cookie access is restricted and must
 * go through the privacy review. Before using this method please file a
 * GitHub issue with "Privacy Review" label.
 *
 * Returns the cookie's value or `null`.
 *
 * @param {!Window} win
 * @param {string} name
 * @return {?string}
 */
function getCookie(win, name) {
  var cookieString = tryGetDocumentCookieNoInline(win);
  if (!cookieString) {
    return null;
  }
  var cookies = cookieString.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    var eq = cookie.indexOf('=');
    if (eq == -1) {
      continue;
    }
    if ((0, _url.tryDecodeUriComponent)(cookie.substring(0, eq).trim()) == name) {
      var value = cookie.substring(eq + 1).trim();
      return (0, _url.tryDecodeUriComponent)(value, value);
    }
  }
  return null;
}

/**
 * This method should not be inlined to prevent TryCatch deoptimization.
 * NoInline keyword at the end of function name also prevents Closure compiler
 * from inlining the function.
 * @param {!Window} win
 * @return {string}
 */
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function tryGetDocumentCookieNoInline(win) {
  try {
    return win.document.cookie;
  } catch (e) {
    // Act as if no cookie is available. Exceptions can be thrown when
    // AMP docs are opened on origins that do not allow setting
    // cookies such as null origins.
    return '';
  }
}

/**
 * Sets the value of the cookie. The cookie access is restricted and must
 * go through the privacy review. Before using this method please file a
 * GitHub issue with "Privacy Review" label.
 *
 * @param {!Window} win
 * @param {string} name
 * @param {string} value
 * @param {time} expirationTime
 * @param {{
 *   highestAvailableDomain:(boolean|undefined),
 *   domain:(string|undefined)
 * }=} opt_options
 *     - highestAvailableDomain: If true, set the cookie at the widest domain
 *       scope allowed by the browser. E.g. on example.com if we are currently
 *       on www.example.com.
 *     - domain: Explicit domain to set.
 *     - allowOnProxyOrigin: Allow setting a cookie on the AMP Cache.
 */
function setCookie(win, name, value, expirationTime, opt_options) {
  checkOriginForSettingCookie(win, opt_options, name);
  if (opt_options && opt_options.highestAvailableDomain) {
    var parts = win.location.hostname.split('.');
    var _domain = parts[parts.length - 1];
    for (var i = parts.length - 2; i >= 0; i--) {
      _domain = parts[i] + '.' + _domain;
      trySetCookie(win, name, value, expirationTime, _domain);
      if (getCookie(win, name) == value) {
        return;
      }
    }
  }
  var domain = undefined;
  if (opt_options && opt_options.domain) {
    domain = opt_options.domain;
  }
  trySetCookie(win, name, value, expirationTime, domain);
}

/**
 * Attempt to set a cookie with the given params.
 *
 * @param {!Window} win
 * @param {string} name
 * @param {string} value
 * @param {time} expirationTime
 * @param {string|undefined} domain
 */
function trySetCookie(win, name, value, expirationTime, domain) {
  // We do not allow setting cookies on the domain that contains both
  // the cdn. and www. hosts.
  if (domain == 'ampproject.org') {
    // Actively delete them.
    value = 'delete';
    expirationTime = 0;
  }
  var cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; path=/' + (domain ? '; domain=' + domain : '') + '; expires=' + new Date(expirationTime).toUTCString();
  try {
    win.document.cookie = cookie;
  } catch (ignore) {
    // Do not throw if setting the cookie failed Exceptions can be thrown
    // when AMP docs are opened on origins that do not allow setting
    // cookies such as null origins.
  }
}

/**
 * Throws if a given cookie should not be set on the given origin.
 * This is a defense-in-depth. Callers should never run into this.
 *
 * @param {!Window} win
 * @param {!Object|undefined} options
 * @param {string} name For the error message.
 */
function checkOriginForSettingCookie(win, options, name) {
  if (options && options.allowOnProxyOrigin) {
    return;
  }
  if ((0, _url.isProxyOrigin)(win.location.href)) {
    throw new Error('Should never attempt to set cookie on proxy origin: ' + name);
  }

  var current = (0, _url.parseUrl)(win.location.href).hostname.toLowerCase();
  var proxy = (0, _url.parseUrl)(_config.urls.cdn).hostname.toLowerCase();
  if (current == proxy || (0, _string.endsWith)(current, '.' + proxy)) {
    throw new Error('Should never attempt to set cookie on proxy origin.' + ' (in depth check): ' + name);
  }
}

},{"./config":46,"./string":73,"./url":78}],48:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UPGRADE_TO_CUSTOMELEMENT_RESOLVER = exports.UPGRADE_TO_CUSTOMELEMENT_PROMISE = undefined;
exports.waitForChild = waitForChild;
exports.waitForChildPromise = waitForChildPromise;
exports.waitForBody = waitForBody;
exports.waitForBodyPromise = waitForBodyPromise;
exports.removeElement = removeElement;
exports.removeChildren = removeChildren;
exports.copyChildren = copyChildren;
exports.insertAfterOrAtStart = insertAfterOrAtStart;
exports.addAttributesToElement = addAttributesToElement;
exports.createElementWithAttributes = createElementWithAttributes;
exports.isConnectedNode = isConnectedNode;
exports.rootNodeFor = rootNodeFor;
exports.closest = closest;
exports.closestNode = closestNode;
exports.closestByTag = closestByTag;
exports.closestBySelector = closestBySelector;
exports.matches = matches;
exports.elementByTag = elementByTag;
exports.childElement = childElement;
exports.childElements = childElements;
exports.lastChildElement = lastChildElement;
exports.childNodes = childNodes;
exports.setScopeSelectorSupportedForTesting = setScopeSelectorSupportedForTesting;
exports.childElementByAttr = childElementByAttr;
exports.lastChildElementByAttr = lastChildElementByAttr;
exports.childElementsByAttr = childElementsByAttr;
exports.childElementByTag = childElementByTag;
exports.childElementsByTag = childElementsByTag;
exports.scopedQuerySelector = scopedQuerySelector;
exports.scopedQuerySelectorAll = scopedQuerySelectorAll;
exports.getDataParamsFromAttributes = getDataParamsFromAttributes;
exports.hasNextNodeInDocumentOrder = hasNextNodeInDocumentOrder;
exports.ancestorElements = ancestorElements;
exports.ancestorElementsByTag = ancestorElementsByTag;
exports.templateContentClone = templateContentClone;
exports.iterateCursor = iterateCursor;
exports.openWindowDialog = openWindowDialog;
exports.isJsonScriptTag = isJsonScriptTag;
exports.isJsonLdScriptTag = isJsonLdScriptTag;
exports.isRTL = isRTL;
exports.escapeCssSelectorIdent = escapeCssSelectorIdent;
exports.escapeCssSelectorNth = escapeCssSelectorNth;
exports.escapeHtml = escapeHtml;
exports.tryFocus = tryFocus;
exports.isIframed = isIframed;
exports.isAmpElement = isAmpElement;
exports.whenUpgradedToCustomElement = whenUpgradedToCustomElement;
exports.fullscreenEnter = fullscreenEnter;
exports.fullscreenExit = fullscreenExit;
exports.isFullscreenElement = isFullscreenElement;
exports.isEnabled = isEnabled;

var _cssEscape = require('../third_party/css-escape/css-escape');

var _log = require('./log');

var _object = require('./utils/object');

var _string = require('./string');

var _types = require('./types');

var HTML_ESCAPE_CHARS = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;'
}; /**
    * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *      http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS-IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */

var HTML_ESCAPE_REGEX = /(&|<|>|"|'|`)/g;

/** @const {string} */
var UPGRADE_TO_CUSTOMELEMENT_PROMISE = exports.UPGRADE_TO_CUSTOMELEMENT_PROMISE = '__AMP_UPG_PRM';

/** @const {string} */
var UPGRADE_TO_CUSTOMELEMENT_RESOLVER = exports.UPGRADE_TO_CUSTOMELEMENT_RESOLVER = '__AMP_UPG_RES';

/**
 * Waits until the child element is constructed. Once the child is found, the
 * callback is executed.
 * @param {!Element} parent
 * @param {function(!Element):boolean} checkFunc
 * @param {function()} callback
 */
function waitForChild(parent, checkFunc, callback) {
  if (checkFunc(parent)) {
    callback();
    return;
  }
  /** @const {!Window} */
  var win = (0, _types.toWin)(parent.ownerDocument.defaultView);
  if (win.MutationObserver) {
    /** @const {MutationObserver} */
    var observer = new win.MutationObserver(function () {
      if (checkFunc(parent)) {
        observer.disconnect();
        callback();
      }
    });
    observer.observe(parent, { childList: true });
  } else {
    /** @const {number} */
    var interval = win.setInterval(function () {
      if (checkFunc(parent)) {
        win.clearInterval(interval);
        callback();
      }
    }, /* milliseconds */5);
  }
}

/**
 * Waits until the child element is constructed. Once the child is found, the
 * promise is resolved.
 * @param {!Element} parent
 * @param {function(!Element):boolean} checkFunc
 * @return {!Promise}
 */
function waitForChildPromise(parent, checkFunc) {
  return new Promise(function (resolve) {
    waitForChild(parent, checkFunc, resolve);
  });
}

/**
 * Waits for document's body to be available.
 * Will be deprecated soon; use {@link AmpDoc#whenBodyAvailable} or
 * @{link DocumentState#onBodyAvailable} instead.
 * @param {!Document} doc
 * @param {function()} callback
 */
function waitForBody(doc, callback) {
  waitForChild(doc.documentElement, function () {
    return !!doc.body;
  }, callback);
}

/**
 * Waits for document's body to be available.
 * @param {!Document} doc
 * @return {!Promise}
 */
function waitForBodyPromise(doc) {
  return new Promise(function (resolve) {
    waitForBody(doc, resolve);
  });
}

/**
 * Removes the element.
 * @param {!Element} element
 */
function removeElement(element) {
  if (element.parentElement) {
    element.parentElement.removeChild(element);
  }
}

/**
 * Removes all child nodes of the specified element.
 * @param {!Element} parent
 */
function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

/**
 * Copies all children nodes of element "from" to element "to". Child nodes
 * are deeply cloned. Notice, that this method should be used with care and
 * preferably on smaller subtrees.
 * @param {!Element} from
 * @param {!Element|!DocumentFragment} to
 */
function copyChildren(from, to) {
  var frag = to.ownerDocument.createDocumentFragment();
  for (var n = from.firstChild; n; n = n.nextSibling) {
    frag.appendChild(n.cloneNode(true));
  }
  to.appendChild(frag);
}

/**
 * Insert the element in the root after the element named after or
 * if that is null at the beginning.
 * @param {!Element|!ShadowRoot} root
 * @param {!Element} element
 * @param {?Node} after
 */
function insertAfterOrAtStart(root, element, after) {
  if (after) {
    if (after.nextSibling) {
      root.insertBefore(element, after.nextSibling);
    } else {
      root.appendChild(element);
    }
  } else {
    // Add at the start.
    root.insertBefore(element, root.firstChild);
  }
}

/**
 * Add attributes to an element.
 * @param {!Element} element
 * @param {!JsonObject<string, string>} attributes
 * @return {!Element} created element
 */
function addAttributesToElement(element, attributes) {
  for (var attr in attributes) {
    element.setAttribute(attr, attributes[attr]);
  }
  return element;
}

/**
 * Create a new element on document with specified tagName and attributes.
 * @param {!Document} doc
 * @param {string} tagName
 * @param {!JsonObject<string, string>} attributes
 * @return {!Element} created element
 */
function createElementWithAttributes(doc, tagName, attributes) {
  var element = doc.createElement(tagName);
  return addAttributesToElement(element, attributes);
}

/**
 * Returns true if node is connected (attached).
 * @param {!Node} node
 * @return {boolean}
 * @see https://dom.spec.whatwg.org/#connected
 */
function isConnectedNode(node) {
  // "An element is connected if its shadow-including root is a document."
  var n = node;
  do {
    n = rootNodeFor(n);
    if (n.host) {
      n = n.host;
    } else {
      break;
    }
  } while (true);
  return n.nodeType === Node.DOCUMENT_NODE;
}

/**
 * Returns the root for a given node. Does not cross shadow DOM boundary.
 * @param {!Node} node
 * @return {!Node}
 */
function rootNodeFor(node) {
  if (Node.prototype.getRootNode) {
    // Type checker says `getRootNode` may return null.
    return node.getRootNode() || node;
  }
  var n = void 0;
  for (n = node; !!n.parentNode; n = n.parentNode) {}
  return n;
}

/**
 * Finds the closest element that satisfies the callback from this element
 * up the DOM subtree.
 * @param {!Element} element
 * @param {function(!Element):boolean} callback
 * @param {Element=} opt_stopAt optional elemnt to stop the search at.
 * @return {?Element}
 */
function closest(element, callback, opt_stopAt) {
  for (var el = element; el && el !== opt_stopAt; el = el.parentElement) {
    if (callback(el)) {
      return el;
    }
  }
  return null;
}

/**
 * Finds the closest node that satisfies the callback from this node
 * up the DOM subtree.
 * @param {!Node} node
 * @param {function(!Node):boolean} callback
 * @return {?Node}
 */
function closestNode(node, callback) {
  for (var n = node; n; n = n.parentNode) {
    if (callback(n)) {
      return n;
    }
  }
  return null;
}

/**
 * Finds the closest element with the specified name from this element
 * up the DOM subtree.
 * @param {!Element} element
 * @param {string} tagName
 * @return {?Element}
 */
function closestByTag(element, tagName) {
  if (element.closest) {
    return element.closest(tagName);
  }
  tagName = tagName.toUpperCase();
  return closest(element, function (el) {
    return el.tagName == tagName;
  });
}

/**
 * Finds the closest element with the specified selector from this element
 * @param {!Element} element
 * @param {string} selector
 * @return {?Element} closest ancestor if found.
 */
function closestBySelector(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }

  return closest(element, function (el) {
    return matches(el, selector);
  });
}

/**
 * Checks if the given element matches the selector
 * @param  {!Element} el The element to verify
 * @param  {string} selector The selector to check against
 * @return {boolean} True if the element matched the selector. False otherwise.
 */
function matches(el, selector) {
  var matcher = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector;
  if (matcher) {
    return matcher.call(el, selector);
  }
  return false; // IE8 always returns false.
}

/**
 * Finds the first descendant element with the specified name.
 * @param {!Element|!Document|!ShadowRoot} element
 * @param {string} tagName
 * @return {?Element}
 */
function elementByTag(element, tagName) {
  var elements = element.getElementsByTagName(tagName);
  return elements[0] || null;
}

/**
 * Finds the first child element that satisfies the callback.
 * @param {!Element} parent
 * @param {function(!Element):boolean} callback
 * @return {?Element}
 */
function childElement(parent, callback) {
  for (var child = parent.firstElementChild; child; child = child.nextElementSibling) {
    if (callback(child)) {
      return child;
    }
  }
  return null;
}

/**
 * Finds all child elements that satisfy the callback.
 * @param {!Element} parent
 * @param {function(!Element):boolean} callback
 * @return {!Array<!Element>}
 */
function childElements(parent, callback) {
  var children = [];
  for (var child = parent.firstElementChild; child; child = child.nextElementSibling) {
    if (callback(child)) {
      children.push(child);
    }
  }
  return children;
}

/**
 * Finds the last child element that satisfies the callback.
 * @param {!Element} parent
 * @param {function(!Element):boolean} callback
 * @return {?Element}
 */
function lastChildElement(parent, callback) {
  for (var child = parent.lastElementChild; child; child = child.previousElementSibling) {
    if (callback(child)) {
      return child;
    }
  }
  return null;
}

/**
 * Finds all child nodes that satisfy the callback.
 * These nodes can include Text, Comment and other child nodes.
 * @param {!Node} parent
 * @param {function(!Node):boolean} callback
 * @return {!Array<!Node>}
 */
function childNodes(parent, callback) {
  var nodes = [];
  for (var child = parent.firstChild; child; child = child.nextSibling) {
    if (callback(child)) {
      nodes.push(child);
    }
  }
  return nodes;
}

/**
 * @type {boolean|undefined}
 * @visibleForTesting
 */
var scopeSelectorSupported = void 0;

/**
 * @param {boolean|undefined} val
 * @visibleForTesting
 */
function setScopeSelectorSupportedForTesting(val) {
  scopeSelectorSupported = val;
}

/**
 * Test that the :scope selector is supported and behaves correctly.
 * @param {!Element} parent
 * @return {boolean}
 */
function isScopeSelectorSupported(parent) {
  var doc = parent.ownerDocument;
  try {
    var testElement = doc.createElement('div');
    var testChild = doc.createElement('div');
    testElement.appendChild(testChild);
    // NOTE(cvializ, #12383): Firefox's implementation is incomplete,
    // therefore we test actual functionality of`:scope` as well.
    return testElement. /*OK*/querySelector(':scope div') === testChild;
  } catch (e) {
    return false;
  }
}

/**
 * Finds the first child element that has the specified attribute.
 * @param {!Element} parent
 * @param {string} attr
 * @return {?Element}
 */
function childElementByAttr(parent, attr) {
  return scopedQuerySelector /*OK*/(parent, '> [' + attr + ']');
}

/**
 * Finds the last child element that has the specified attribute.
 * @param {!Element} parent
 * @param {string} attr
 * @return {?Element}
 */
function lastChildElementByAttr(parent, attr) {
  return lastChildElement(parent, function (el) {
    return el.hasAttribute(attr);
  });
}

/**
 * Finds all child elements that has the specified attribute.
 * @param {!Element} parent
 * @param {string} attr
 * @return {!NodeList<!Element>}
 */
function childElementsByAttr(parent, attr) {
  return scopedQuerySelectorAll /*OK*/(parent, '> [' + attr + ']');
}

/**
 * Finds the first child element that has the specified tag name.
 * @param {!Element} parent
 * @param {string} tagName
 * @return {?Element}
 */
function childElementByTag(parent, tagName) {
  return scopedQuerySelector /*OK*/(parent, '> ' + tagName);
}

/**
 * Finds all child elements with the specified tag name.
 * @param {!Element} parent
 * @param {string} tagName
 * @return {!NodeList<!Element>}
 */
function childElementsByTag(parent, tagName) {
  return scopedQuerySelectorAll /*OK*/(parent, '> ' + tagName);
}

/**
 * Finds the first element that matches `selector`, scoped inside `root`.
 * Note: in IE, this causes a quick mutation of the element's class list.
 * @param {!Element} root
 * @param {string} selector
 * @return {?Element}
 */
function scopedQuerySelector(root, selector) {
  if (scopeSelectorSupported == null) {
    scopeSelectorSupported = isScopeSelectorSupported(root);
  }
  if (scopeSelectorSupported) {
    return root. /*OK*/querySelector(':scope ' + selector);
  }

  // Only IE.
  var unique = 'i-amphtml-scoped';
  root.classList.add(unique);
  var element = root. /*OK*/querySelector('.' + unique + ' ' + selector);
  root.classList.remove(unique);
  return element;
}

/**
 * Finds the every element that matches `selector`, scoped inside `root`.
 * Note: in IE, this causes a quick mutation of the element's class list.
 * @param {!Element} root
 * @param {string} selector
 * @return {!NodeList<!Element>}
 */
function scopedQuerySelectorAll(root, selector) {
  if (scopeSelectorSupported == null) {
    scopeSelectorSupported = isScopeSelectorSupported(root);
  }
  if (scopeSelectorSupported) {
    return root. /*OK*/querySelectorAll(':scope ' + selector);
  }

  // Only IE.
  var unique = 'i-amphtml-scoped';
  root.classList.add(unique);
  var elements = root. /*OK*/querySelectorAll('.' + unique + ' ' + selector);
  root.classList.remove(unique);
  return elements;
}

/**
 * Returns element data-param- attributes as url parameters key-value pairs.
 * e.g. data-param-some-attr=value -> {someAttr: value}.
 * @param {!Element} element
 * @param {function(string):string=} opt_computeParamNameFunc to compute the parameter
 *    name, get passed the camel-case parameter name.
 * @param {!RegExp=} opt_paramPattern Regex pattern to match data attributes.
 * @return {!JsonObject}
 */
function getDataParamsFromAttributes(element, opt_computeParamNameFunc, opt_paramPattern) {
  var computeParamNameFunc = opt_computeParamNameFunc || function (key) {
    return key;
  };
  var dataset = element.dataset;
  var params = (0, _object.dict)();
  var paramPattern = opt_paramPattern ? opt_paramPattern : /^param(.+)/;
  for (var key in dataset) {
    var _matches = key.match(paramPattern);
    if (_matches) {
      var param = _matches[1][0].toLowerCase() + _matches[1].substr(1);
      params[computeParamNameFunc(param)] = dataset[key];
    }
  }
  return params;
}

/**
 * Whether the element have a next node in the document order.
 * This means either:
 *  a. The element itself has a nextSibling.
 *  b. Any of the element ancestors has a nextSibling.
 * @param {!Element} element
 * @param {?Node} opt_stopNode
 * @return {boolean}
 */
function hasNextNodeInDocumentOrder(element, opt_stopNode) {
  var currentElement = element;
  do {
    if (currentElement.nextSibling) {
      return true;
    }
  } while ((currentElement = currentElement.parentNode) && currentElement != opt_stopNode);
  return false;
}

/**
 * Finds all ancestor elements that satisfy predicate.
 * @param {!Element} child
 * @param {function(!Element):boolean} predicate
 * @return {!Array<!Element>}
 */
function ancestorElements(child, predicate) {
  var ancestors = [];
  for (var ancestor = child.parentElement; ancestor; ancestor = ancestor.parentElement) {
    if (predicate(ancestor)) {
      ancestors.push(ancestor);
    }
  }
  return ancestors;
}

/**
 * Finds all ancestor elements that has the specified tag name.
 * @param {!Element} child
 * @param {string} tagName
 * @return {!Array<!Element>}
 */
function ancestorElementsByTag(child, tagName) {
  tagName = tagName.toUpperCase();
  return ancestorElements(child, function (el) {
    return el.tagName == tagName;
  });
}

/**
 * Returns a clone of the content of a template element.
 *
 * Polyfill to replace .content access for browsers that do not support
 * HTMLTemplateElements natively.
 *
 * @param {!HTMLTemplateElement|!Element} template
 * @return {!DocumentFragment}
 */
function templateContentClone(template) {
  if ('content' in template) {
    return template.content.cloneNode(true);
  } else {
    var content = template.ownerDocument.createDocumentFragment();
    copyChildren(template, content);
    return content;
  }
}

/**
 * Iterate over an array-like. Some collections like NodeList are
 * lazily evaluated in some browsers, and accessing `length` forces full
 * evaluation. We can improve performance by iterating until an element is
 * `undefined` to avoid checking the `length` property.
 * Test cases: https://jsperf.com/iterating-over-collections-of-elements
 * @param {!IArrayLike<T>} iterable
 * @param {function(T, number)} cb
 * @template T
 */
function iterateCursor(iterable, cb) {
  for (var i = 0, value; (value = iterable[i]) !== undefined; i++) {
    cb(value, i);
  }
}

/**
 * This method wraps around window's open method. It first tries to execute
 * `open` call with the provided target and if it fails, it retries the call
 * with the `_top` target. This is necessary given that in some embedding
 * scenarios, such as iOS' WKWebView, navigation to `_blank` and other targets
 * is blocked by default.
 *
 * @param {!Window} win
 * @param {string} url
 * @param {string} target
 * @param {string=} opt_features
 * @return {?Window}
 */
function openWindowDialog(win, url, target, opt_features) {
  // Try first with the specified target. If we're inside the WKWebView or
  // a similar environments, this method is expected to fail by default for
  // all targets except `_top`.
  var res = void 0;
  try {
    res = win.open(url, target, opt_features);
  } catch (e) {
    (0, _log.dev)().error('DOM', 'Failed to open url on target: ', target, e);
  }

  // Then try with `_top` target.
  if (!res && target != '_top') {
    res = win.open(url, '_top');
  }
  return res;
}

/**
 * Whether the element is a script tag with application/json type.
 * @param {!Element} element
 * @return {boolean}
 */
function isJsonScriptTag(element) {
  return element.tagName == 'SCRIPT' && element.getAttribute('type').toUpperCase() == 'APPLICATION/JSON';
}

/**
 * Whether the element is a script tag with application/json type.
 * @param {!Element} element
 * @return {boolean}
 */
function isJsonLdScriptTag(element) {
  return element.tagName == 'SCRIPT' && element.getAttribute('type').toUpperCase() == 'APPLICATION/LD+JSON';
}

/**
 * Whether the page's direction is right to left or not.
 * @param {!Document} doc
 * @return {boolean}
 */
function isRTL(doc) {
  var dir = doc.body.getAttribute('dir') || doc.documentElement.getAttribute('dir') || 'ltr';
  return dir == 'rtl';
}

/**
 * Escapes an ident (ID or a class name) to be used as a CSS selector.
 *
 * See https://drafts.csswg.org/cssom/#serialize-an-identifier.
 *
 * @param {string} ident
 * @return {string}
 */
function escapeCssSelectorIdent(ident) {
  return (0, _cssEscape.cssEscape)(ident);
}

/**
 * Escapes an ident in a way that can be used by :nth-child() psuedo-class.
 *
 * See https://github.com/w3c/csswg-drafts/issues/2306.
 *
 * @param {string|number} ident
 * @return {string}
 */
function escapeCssSelectorNth(ident) {
  var escaped = String(ident);
  // Ensure it doesn't close the nth-child psuedo class.
  (0, _log.dev)().assert(escaped.indexOf(')') === -1);
  return escaped;
}

/**
 * Escapes `<`, `>` and other HTML charcaters with their escaped forms.
 * @param {string} text
 * @return {string}
 */
function escapeHtml(text) {
  if (!text) {
    return text;
  }
  return text.replace(HTML_ESCAPE_REGEX, escapeHtmlChar);
}

/**
 * @param {string} c
 * @return string
 */
function escapeHtmlChar(c) {
  return HTML_ESCAPE_CHARS[c];
}

/**
 * Tries to focus on the given element; fails silently if browser throws an
 * exception.
 * @param {!Element} element
 */
function tryFocus(element) {
  try {
    element. /*OK*/focus();
  } catch (e) {
    // IE <= 7 may throw exceptions when focusing on hidden items.
  }
}

/**
 * Whether the given window is in an iframe or not.
 * @param {!Window} win
 * @return {boolean}
 */
function isIframed(win) {
  return win.parent && win.parent != win;
}

/**
 * Determines if this element is an AMP element
 * @param {!Element} element
 * @return {boolean}
 */
function isAmpElement(element) {
  var tag = element.tagName;
  // Use prefix to recognize AMP element. This is necessary because stub
  // may not be attached yet.
  return (0, _string.startsWith)(tag, 'AMP-') &&
  // Some "amp-*" elements are not really AMP elements. :smh:
  !(tag == 'AMP-STICKY-AD-TOP-PADDING' || tag == 'AMP-BODY');
}

/**
 * Return a promise that resolve when an AMP element upgrade from HTMLElement
 * to CustomElement
 * @param {!Element} element
 * @return {!Promise<!Element>}
 */
function whenUpgradedToCustomElement(element) {
  (0, _log.dev)().assert(isAmpElement(element), 'element is not AmpElement');
  if (element.createdCallback) {
    // Element already is CustomElement;
    return Promise.resolve(element);
  }
  // If Element is still HTMLElement, wait for it to upgrade to customElement
  // Note: use pure string to avoid obfuscation between versions.
  if (!element[UPGRADE_TO_CUSTOMELEMENT_PROMISE]) {
    element[UPGRADE_TO_CUSTOMELEMENT_PROMISE] = new Promise(function (resolve) {
      element[UPGRADE_TO_CUSTOMELEMENT_RESOLVER] = resolve;
    });
  }

  return element[UPGRADE_TO_CUSTOMELEMENT_PROMISE];
}

/**
 * Replacement for `Element.requestFullscreen()` method.
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen
 * @param {!Element} element
 */
function fullscreenEnter(element) {
  var requestFs = element.requestFullscreen || element.requestFullScreen || element.webkitRequestFullscreen || element.webkitRequestFullScreen || element.webkitEnterFullscreen || element.webkitEnterFullScreen || element.msRequestFullscreen || element.msRequestFullScreen || element.mozRequestFullscreen || element.mozRequestFullScreen;
  if (requestFs) {
    requestFs.call(element);
  }
}

/**
 * Replacement for `Document.exitFullscreen()` method.
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/exitFullscreen
 * @param {!Element} element
 */
function fullscreenExit(element) {
  var exitFs = element.cancelFullScreen || element.exitFullscreen || element.exitFullScreen || element.webkitExitFullscreen || element.webkitExitFullScreen || element.webkitCancelFullScreen || element.mozCancelFullScreen || element.msExitFullscreen;
  if (exitFs) {
    exitFs.call(element);
    return;
  }
  if (element.ownerDocument) {
    exitFs = element.ownerDocument.cancelFullScreen || element.ownerDocument.exitFullscreen || element.ownerDocument.exitFullScreen || element.ownerDocument.webkitExitFullscreen || element.ownerDocument.webkitExitFullScreen || element.ownerDocument.webkitCancelFullScreen || element.ownerDocument.mozCancelFullScreen || element.ownerDocument.msExitFullscreen;
  }
  if (exitFs) {
    exitFs.call(element.ownerDocument);
    return;
  }
}

/**
 * Replacement for `Document.fullscreenElement`.
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreenElement
 * @param {!Element} element
 * @return {boolean}
 */
function isFullscreenElement(element) {
  var isFullscreen = element.webkitDisplayingFullscreen;
  if (isFullscreen) {
    return true;
  }
  if (element.ownerDocument) {
    var fullscreenElement = element.ownerDocument.fullscreenElement || element.ownerDocument.webkitFullscreenElement || element.ownerDocument.mozFullScreenElement || element.webkitCurrentFullScreenElement;
    if (fullscreenElement == element) {
      return true;
    }
  }
  return false;
}

/**
 * Returns true if node is not disabled.
 *
 * IE8 can return false positives, see {@link matches}.
 * @param {!Element} element
 * @return {boolean}
 * @see https://www.w3.org/TR/html5/forms.html#concept-fe-disabled
 */
function isEnabled(element) {
  return !(element.disabled || matches(element, ':disabled'));
}

},{"../third_party/css-escape/css-escape":86,"./log":57,"./string":73,"./types":75,"./utils/object":83}],49:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElementService = getElementService;
exports.getElementServiceIfAvailable = getElementServiceIfAvailable;
exports.getElementServiceForDoc = getElementServiceForDoc;
exports.getElementServiceIfAvailableForDoc = getElementServiceIfAvailableForDoc;
exports.getElementServiceIfAvailableForDocInEmbedScope = getElementServiceIfAvailableForDocInEmbedScope;

var _dom = require('./dom');

var dom = _interopRequireWildcard(_dom);

var _service = require('./service');

var _types = require('./types');

var _log = require('./log');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Returns a promise for a service for the given id and window. Also expects
 * an element that has the actual implementation. The promise resolves when
 * the implementation loaded.
 * Users should typically wrap this as a special purpose function (e.g.
 * Services.viewportForDoc(...)) for type safety and because the factory should not be
 * passed around.
 * @param {!Window} win
 * @param {string} id of the service.
 * @param {string} extension Name of the custom extension that provides the
 *     implementation of this service.
 * @param {boolean=} opt_element Whether this service is provided by an
 *     element, not the extension.
 * @return {!Promise<*>}
 */
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function getElementService(win, id, extension, opt_element) {
  return getElementServiceIfAvailable(win, id, extension, opt_element).then(function (service) {
    return assertService(service, id, extension);
  });
}

/**
 * Same as getElementService but produces null if the given element is not
 * actually available on the current page.
 * @param {!Window} win
 * @param {string} id of the service.
 * @param {string} extension Name of the custom extension that provides the
 *     implementation of this service.
 * @param {boolean=} opt_element Whether this service is provided by an
 *     element, not the extension.
 * @return {!Promise<?Object>}
 */
function getElementServiceIfAvailable(win, id, extension, opt_element) {
  var s = (0, _service.getServicePromiseOrNull)(win, id);
  if (s) {
    return (/** @type {!Promise<?Object>} */s
    );
  }
  return getElementServicePromiseOrNull(win, id, extension, opt_element);
}

/**
 * @param {!Window} win
 * @param {string} elementName Name of an extended custom element.
 * @return {boolean} Whether this element is scheduled to be loaded.
 */
function isElementScheduled(win, elementName) {
  // Set in custom-element.js
  if (!win.ampExtendedElements) {
    return false;
  }
  return !!win.ampExtendedElements[elementName];
}

/**
 * Returns a promise for a service for the given id and window. Also expects
 * an element that has the actual implementation. The promise resolves when
 * the implementation loaded.
 * Users should typically wrap this as a special purpose function (e.g.
 * Services.viewportForDoc(...)) for type safety and because the factory should not be
 * passed around.
 * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
 * @param {string} id of the service.
 * @param {string} extension Name of the custom extension that provides the
 *     implementation of this service.
 * @param {boolean=} opt_element Whether this service is provided by an
 *     element, not the extension.
 * @return {!Promise<*>}
 */
function getElementServiceForDoc(nodeOrDoc, id, extension, opt_element) {
  return getElementServiceIfAvailableForDoc(nodeOrDoc, id, extension, opt_element).then(function (service) {
    return assertService(service, id, extension);
  });
}

/**
 * Same as getElementService but produces null if the given element is not
 * actually available on the current page.
 * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
 * @param {string} id of the service.
 * @param {string} extension Name of the custom extension that provides the
 *     implementation of this service.
 * @param {boolean=} opt_element Whether this service is provided by an
 *     element, not the extension.
 * @return {!Promise<?Object>}
 */
function getElementServiceIfAvailableForDoc(nodeOrDoc, id, extension, opt_element) {
  var ampdoc = (0, _service.getAmpdoc)(nodeOrDoc);
  var s = (0, _service.getServicePromiseOrNullForDoc)(nodeOrDoc, id);
  if (s) {
    return (/** @type {!Promise<?Object>} */s
    );
  }
  // Microtask is necessary to ensure that window.ampExtendedElements has been
  // initialized.
  return Promise.resolve().then(function () {
    if (!opt_element && isElementScheduled(ampdoc.win, extension)) {
      return (0, _service.getServicePromiseForDoc)(nodeOrDoc, id);
    }
    // Wait for HEAD to fully form before denying access to the service.
    return ampdoc.whenBodyAvailable().then(function () {
      // If this service is provided by an element, then we can't depend on the
      // service (they may not use the element).
      if (opt_element) {
        return (0, _service.getServicePromiseOrNullForDoc)(nodeOrDoc, id);
      } else if (isElementScheduled(ampdoc.win, extension)) {
        return (0, _service.getServicePromiseForDoc)(nodeOrDoc, id);
      }
      return null;
    });
  });
}

/**
 * Returns a promise for service for the given id in the embed scope of
 * a given node, if it exists. Otherwise, falls back to ampdoc scope IFF
 * the given node is in the top-level window.
 * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
 * @param {string} id of the service.
 * @param {string} extension Name of the custom element that provides
 *     the implementation of this service.
 * @return {!Promise<?Object>}
 */
function getElementServiceIfAvailableForDocInEmbedScope(nodeOrDoc, id, extension) {
  var s = (0, _service.getExistingServiceForDocInEmbedScope)(nodeOrDoc, id);
  if (s) {
    return (/** @type {!Promise<?Object>} */Promise.resolve(s)
    );
  }
  // Return embed-scope element service promise if scheduled.
  if (nodeOrDoc.nodeType) {
    var win = (0, _types.toWin)( /** @type {!Document} */(nodeOrDoc.ownerDocument || nodeOrDoc).defaultView);
    var topWin = (0, _service.getTopWindow)(win);
    // In embeds, doc-scope services are window-scope. But make sure to
    // only do this for embeds (not the top window), otherwise we'd grab
    // a promise from the wrong service holder which would never resolve.
    if (win !== topWin) {
      return getElementServicePromiseOrNull(win, id, extension);
    } else {
      // Fallback to ampdoc IFF the given node is _not_ FIE.
      return getElementServiceIfAvailableForDoc(nodeOrDoc, id, extension);
    }
  }
  return (/** @type {!Promise<?Object>} */Promise.resolve(null)
  );
}

/**
 * Throws user error if `service` is null.
 * @param {Object} service
 * @param {string} id
 * @param {string} extension
 * @return {!Object}
 * @private
 */
function assertService(service, id, extension) {
  return (/** @type {!Object} */(0, _log.user)().assert(service, 'Service %s was requested to be provided through %s, ' + 'but %s is not loaded in the current page. To fix this ' + 'problem load the JavaScript file for %s in this page.', id, extension, extension, extension)
  );
}

/**
 * Returns the promise for service with `id` on the given window if available.
 * Otherwise, resolves with null (service was not registered).
 * @param {!Window} win
 * @param {string} id
 * @param {string} extension
 * @param {boolean=} opt_element
 * @return {!Promise<Object>}
 * @private
 */
function getElementServicePromiseOrNull(win, id, extension, opt_element) {
  // Microtask is necessary to ensure that window.ampExtendedElements has been
  // initialized.
  return Promise.resolve().then(function () {
    if (!opt_element && isElementScheduled(win, extension)) {
      return (0, _service.getServicePromise)(win, id);
    }
    // Wait for HEAD to fully form before denying access to the service.
    return dom.waitForBodyPromise(win.document).then(function () {
      // If this service is provided by an element, then we can't depend on the
      // service (they may not use the element).
      if (opt_element) {
        return (0, _service.getServicePromiseOrNull)(win, id);
      } else if (isElementScheduled(win, extension)) {
        return (0, _service.getServicePromise)(win, id);
      }
      return null;
    });
  });
}

},{"./dom":48,"./log":57,"./service":71,"./types":75}],50:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.internalListenImplementation = internalListenImplementation;
exports.detectEvtListenerOptsSupport = detectEvtListenerOptsSupport;
exports.resetEvtListenerOptsSupportForTesting = resetEvtListenerOptsSupportForTesting;
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
  * Whether addEventListener supports options or only takes capture as a boolean
  * @type {boolean|undefined}
  * @visibleForTesting
  */
var optsSupported = void 0;

/**
 * Listens for the specified event on the element.
 *
 * Do not use this directly. This method is implemented as a shared
 * dependency. Use `listen()` in either `event-helper` or `3p-frame-messaging`,
 * depending on your use case.
 *
 * @param {!EventTarget} element
 * @param {string} eventType
 * @param {function(!Event)} listener
 * @param {Object=} opt_evtListenerOpts
 * @return {!UnlistenDef}
 */
function internalListenImplementation(element, eventType, listener, opt_evtListenerOpts) {
  var localElement = element;
  var localListener = listener;
  /** @type {?Function}  */
  var wrapped = function wrapped(event) {
    try {
      return localListener(event);
    } catch (e) {
      // reportError is installed globally per window in the entry point.
      self.reportError(e);
      throw e;
    }
  };
  var optsSupported = detectEvtListenerOptsSupport();
  var capture = false;
  if (opt_evtListenerOpts) {
    capture = opt_evtListenerOpts.capture;
  }
  localElement.addEventListener(eventType, wrapped, optsSupported ? opt_evtListenerOpts : capture);
  return function () {
    if (localElement) {
      localElement.removeEventListener(eventType, wrapped, optsSupported ? opt_evtListenerOpts : capture);
    }
    // Ensure these are GC'd
    localListener = null;
    localElement = null;
    wrapped = null;
  };
}

/**
 * Tests whether the browser supports options as an argument of addEventListener
 * or not.
 *
 * @return {boolean}
 */
function detectEvtListenerOptsSupport() {
  // Only run the test once
  if (optsSupported !== undefined) {
    return optsSupported;
  }

  optsSupported = false;
  try {
    // Test whether browser supports EventListenerOptions or not
    var options = {
      get capture() {
        optsSupported = true;
      }
    };
    self.addEventListener('test-options', null, options);
    self.removeEventListener('test-options', null, options);
  } catch (err) {
    // EventListenerOptions are not supported
  }
  return optsSupported;
}

/**
  * Resets the test for whether addEventListener supports options or not.
  */
function resetEvtListenerOptsSupportForTesting() {
  optsSupported = undefined;
}

},{}],51:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCustomEvent = createCustomEvent;
exports.listen = listen;
exports.getData = getData;
exports.listenOnce = listenOnce;
exports.listenOncePromise = listenOncePromise;
exports.isLoaded = isLoaded;
exports.loadPromise = loadPromise;
exports.isLoadErrorMessage = isLoadErrorMessage;

var _eventHelperListen = require('./event-helper-listen');

var _log = require('./log');

/** @const {string}  */
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var LOAD_FAILURE_PREFIX = 'Failed to load:';

/**
 * Returns a CustomEvent with a given type and detail; supports fallback for IE.
 * @param {!Window} win
 * @param {string} type
 * @param {Object} detail
 * @param {EventInit=} opt_eventInit
 * @return {!Event}
 */
function createCustomEvent(win, type, detail, opt_eventInit) {
  var eventInit = /** @type {!CustomEventInit} */{ detail: detail };
  Object.assign(eventInit, opt_eventInit);
  // win.CustomEvent is a function on Edge, Chrome, FF, Safari but
  // is an object on IE 11.
  if (typeof win.CustomEvent == 'function') {
    return new win.CustomEvent(type, eventInit);
  } else {
    // Deprecated fallback for IE.
    var e = win.document.createEvent('CustomEvent');
    e.initCustomEvent(type, !!eventInit.bubbles, !!eventInit.cancelable, detail);
    return e;
  }
}

/**
 * Listens for the specified event on the element.
 * @param {!EventTarget} element
 * @param {string} eventType
 * @param {function(!Event)} listener
 * @param {Object=} opt_evtListenerOpts
 * @return {!UnlistenDef}
 */
function listen(element, eventType, listener, opt_evtListenerOpts) {
  return (0, _eventHelperListen.internalListenImplementation)(element, eventType, listener, opt_evtListenerOpts);
}

/**
 * Returns the data property of an event with the correct type.
 * @param {!Event|{data: !JsonObject}} event
 * @return {?JsonObject|string|undefined}
 */
function getData(event) {
  return (/** @type {?JsonObject|string|undefined} */event.data
  );
}

/**
 * Listens for the specified event on the element and removes the listener
 * as soon as event has been received.
 * @param {!EventTarget} element
 * @param {string} eventType
 * @param {function(!Event)} listener
 * @param {Object=} opt_evtListenerOpts
 * @return {!UnlistenDef}
 */
function listenOnce(element, eventType, listener, opt_evtListenerOpts) {
  var localListener = listener;
  var unlisten = (0, _eventHelperListen.internalListenImplementation)(element, eventType, function (event) {
    try {
      localListener(event);
    } finally {
      // Ensure listener is GC'd
      localListener = null;
      unlisten();
    }
  }, opt_evtListenerOpts);
  return unlisten;
}

/**
 * Returns  a promise that will resolve as soon as the specified event has
 * fired on the element.
 * @param {!EventTarget} element
 * @param {string} eventType
 * @param {Object=} opt_evtListenerOpts
 * @param {function(!UnlistenDef)=} opt_cancel An optional function that, when
 *     provided, will be called with the unlistener. This gives the caller
 *     access to the unlistener, so it may be called manually when necessary.
 * @return {!Promise<!Event>}
 */
function listenOncePromise(element, eventType, opt_evtListenerOpts, opt_cancel) {
  var unlisten = void 0;
  var eventPromise = new Promise(function (resolve) {
    unlisten = listenOnce(element, eventType, resolve, opt_evtListenerOpts);
  });
  eventPromise.then(unlisten, unlisten);
  if (opt_cancel) {
    opt_cancel(unlisten);
  }
  return eventPromise;
}

/**
 * Whether the specified element/window has been loaded already.
 * @param {!Element|!Window} eleOrWindow
 * @return {boolean}
 */
function isLoaded(eleOrWindow) {
  return !!(eleOrWindow.complete || eleOrWindow.readyState == 'complete'
  // If the passed in thing is a Window, infer loaded state from
  //
  || eleOrWindow.document && eleOrWindow.document.readyState == 'complete');
}

/**
 * Returns a promise that will resolve or fail based on the eleOrWindow's 'load'
 * and 'error' events. Optionally this method takes a timeout, which will reject
 * the promise if the resource has not loaded by then.
 * @param {T} eleOrWindow Supports both Elements and as a special case Windows.
 * @return {!Promise<T>}
 * @template T
 */
function loadPromise(eleOrWindow) {
  var unlistenLoad = void 0;
  var unlistenError = void 0;
  if (isLoaded(eleOrWindow)) {
    return Promise.resolve(eleOrWindow);
  }
  var loadingPromise = new Promise(function (resolve, reject) {
    // Listen once since IE 5/6/7 fire the onload event continuously for
    // animated GIFs.
    var tagName = eleOrWindow.tagName;
    if (tagName === 'AUDIO' || tagName === 'VIDEO') {
      unlistenLoad = listenOnce(eleOrWindow, 'loadstart', resolve);
    } else {
      unlistenLoad = listenOnce(eleOrWindow, 'load', resolve);
    }
    // For elements, unlisten on error (don't for Windows).
    if (tagName) {
      unlistenError = listenOnce(eleOrWindow, 'error', reject);
    }
  });

  return loadingPromise.then(function () {
    if (unlistenError) {
      unlistenError();
    }
    return eleOrWindow;
  }, function () {
    if (unlistenLoad) {
      unlistenLoad();
    }
    failedToLoad(eleOrWindow);
  });
}

/**
 * Emit error on load failure.
 * @param {!Element|!Window} eleOrWindow Supports both Elements and as a special
 *     case Windows.
 */
function failedToLoad(eleOrWindow) {
  // Report failed loads as user errors so that they automatically go
  // into the "document error" bucket.
  var target = eleOrWindow;
  if (target && target.src) {
    target = target.src;
  }
  throw (0, _log.user)().createError(LOAD_FAILURE_PREFIX, target);
}

/**
 * Returns true if this error message is was created for a load error.
 * @param {string} message An error message
 * @return {boolean}
 */
function isLoadErrorMessage(message) {
  return message.indexOf(LOAD_FAILURE_PREFIX) != -1;
}

},{"./event-helper-listen":50,"./log":57}],52:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RANDOM_NUMBER_GENERATORS = exports.ExperimentInfo = undefined;
exports.isCanary = isCanary;
exports.getBinaryType = getBinaryType;
exports.isOriginExperimentOn = isOriginExperimentOn;
exports.isExperimentOn = isExperimentOn;
exports.toggleExperiment = toggleExperiment;
exports.experimentToggles = experimentToggles;
exports.experimentTogglesOrNull = experimentTogglesOrNull;
exports.getExperimentToglesFromCookieForTesting = getExperimentToglesFromCookieForTesting;
exports.resetExperimentTogglesForTesting = resetExperimentTogglesForTesting;
exports.randomlySelectUnsetExperiments = randomlySelectUnsetExperiments;
exports.getExperimentBranch = getExperimentBranch;
exports.forceExperimentBranch = forceExperimentBranch;

var _originExperiments = require('./origin-experiments');

var _services = require('./services');

var _cookies = require('./cookies');

var _url = require('./url');

var _log = require('./log');

/** @const {string} */
var TAG = 'experiments';

/** @const {string} */
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Experiments system allows a developer to opt-in to test
 * features that are not yet fully tested.
 *
 * Experiments page: https://cdn.ampproject.org/experiments.html *
 */

var COOKIE_NAME = 'AMP_EXP';

/** @const {number} */
var COOKIE_MAX_AGE_DAYS = 180; // 6 month

/** @const {time} */
var COOKIE_EXPIRATION_INTERVAL = COOKIE_MAX_AGE_DAYS * 24 * 60 * 60 * 1000;

/** @const {string} */
var TOGGLES_WINDOW_PROPERTY = '__AMP__EXPERIMENT_TOGGLES';

/** @const {!webCrypto.JsonWebKey} */
var ORIGIN_EXPERIMENTS_PUBLIC_JWK = /** @type {!webCrypto.JsonWebKey} */{
  'alg': 'RS256',
  'e': 'AQAB',
  'ext': true,
  'key_ops': ['verify'],
  'kty': 'RSA',
  /*eslint "max-len": 0*/
  'n': 'uAGSMYKze8Fit508UaGHz1eZowfX4YsA0lmyi-65xQfjF7nMo61c4Iz4erdqgRp-ov662yVPquhPmTxgB-nzNcTPrj15Jo05Js78Q9hS2hrPIjKMlzcKSYQN_08QieWKOSmVbLSv_-4n9Ms5ta8nRs4pwc_2nX5n7m5B5GH4VerGbqIWIn9FRNYMShBRQ9TCHpb6BIUTwUn6iwmJLenq0A1xhGrQ9rswGC1QJhjotkeReKXZDLLWaFr0uRw-IyvRa5RiiEGntgOvcbvamM5TnbKavc2rxvg2TWTCNQnb7lWSAzldJA_yAOYet_MjnHMyj2srUdbQSDCk8kPWWuafiQ'
};

/** @type {?Promise} */
var originExperimentsPromise = void 0;

/** @private {?OriginExperiments} */
var originExperiments = void 0;

/**
 * @typedef {{
 *   isTrafficEligible: function(!Window):boolean,
 *   branches: !Array<string>
 * }}
 */
var ExperimentInfo = exports.ExperimentInfo = void 0;

/**
 * Whether we are in canary.
 * @param {!Window} win
 * @return {boolean}
 */
function isCanary(win) {
  return !!(win.AMP_CONFIG && win.AMP_CONFIG.canary);
}

/**
 * Returns binary type, e.g., canary, control, or production.
 * @param {!Window} win
 * @return {string}
 */
function getBinaryType(win) {
  return win.AMP_CONFIG && win.AMP_CONFIG.type ? win.AMP_CONFIG.type : 'unknown';
}

/**
 * Verifies a single origin experiment token and enables the corresponding
 * experiment on success. If token verification fails, a user error is logged.
 * @param {!Window} win
 * @param {string} token
 * @param {!./service/crypto-impl.Crypto} crypto
 * @param {!webCrypto.CryptoKey} publicKey
 * @return {!Promise}
 * @private
 */
function verifyOriginExperimentToken(win, token, crypto, publicKey) {
  if (!crypto.isPkcsAvailable()) {
    (0, _log.user)().error(TAG, 'Crypto is unavailable.');
    return Promise.resolve();
  }
  if (!originExperiments) {
    originExperiments = new _originExperiments.OriginExperiments(crypto);
  }
  var verify = originExperiments.verifyToken(token, win.location, publicKey);
  return verify.then(function (experimentId) {
    toggleExperiment(win, experimentId, true, /* transientExperiment */true);
  }, function (error) {
    (0, _log.user)().error(TAG, 'Failed to verify experiment token:' + error);
  });
}

/**
 * Scan the page for origin experiment tokens, verifies them, and enables
 * the corresponding experiments for verified tokens.
 * @param {!Window} win
 * @param {!webCrypto.JsonWebKey} publicJwk
 * @return {!Promise}
 * @private
 */
function scanForOriginExperimentTokens(win, publicJwk) {
  var metas = win.document.head.querySelectorAll('meta[name="amp-experiment-token"]');
  if (metas.length == 0) {
    return Promise.resolve();
  }
  var crypto = _services.Services.cryptoFor(win);
  return crypto.importPkcsKey(publicJwk).then(function (publicKey) {
    var promises = [];
    for (var i = 0; i < metas.length; i++) {
      var meta = metas[i];
      var token = meta.getAttribute('content');
      if (token) {
        var p = verifyOriginExperimentToken(win, token, crypto, publicKey);
        promises.push(p);
      } else {
        (0, _log.user)().error(TAG, 'Missing content for experiment token.');
      }
    }
    return Promise.all(promises);
  });
}

/**
 * Asynchronously checks whether the specified origin experiment is on or off.
 * On the first invocation, triggers scan of origin experiment tokens on page.
 * @param {!Window} win
 * @param {string} experimentId
 * @param {boolean=} opt_forceScan Forces rescan of page for experiment tokens.
 * @return {!Promise<boolean>}
 */
function isOriginExperimentOn(win, experimentId, opt_forceScan) {
  if (!originExperimentsPromise || opt_forceScan) {
    originExperimentsPromise = scanForOriginExperimentTokens(win, ORIGIN_EXPERIMENTS_PUBLIC_JWK);
  }
  return originExperimentsPromise.then(function () {
    return isExperimentOn(win, experimentId);
  });
}

/**
 * Whether the specified experiment is on or off.
 * @param {!Window} win
 * @param {string} experimentId
 * @return {boolean}
 */
function isExperimentOn(win, experimentId) {
  var toggles = experimentToggles(win);
  return !!toggles[experimentId];
}

/**
 * Toggles the experiment on or off. Returns the actual value of the experiment
 * after toggling is done.
 * @param {!Window} win
 * @param {string} experimentId
 * @param {boolean=} opt_on
 * @param {boolean=} opt_transientExperiment  Whether to toggle the
 *     experiment state "transiently" (i.e., for this page load only) or
 *     durably (by saving the experiment IDs to the cookie after toggling).
 *     Default: false (save durably).
 * @return {boolean} New state for experimentId.
 */
function toggleExperiment(win, experimentId, opt_on, opt_transientExperiment) {
  var currentlyOn = isExperimentOn(win, experimentId);
  var on = !!(opt_on !== undefined ? opt_on : !currentlyOn);
  if (on != currentlyOn) {
    var toggles = experimentToggles(win);
    toggles[experimentId] = on;

    if (!opt_transientExperiment) {
      var cookieToggles = getExperimentTogglesFromCookie(win);
      cookieToggles[experimentId] = on;
      saveExperimentTogglesToCookie(win, cookieToggles);
    }
  }
  return on;
}

/**
 * Calculate whether the experiment is on or off based off of the
 * cookieFlag or the global config frequency given.
 * @param {!Window} win
 * @return {!Object<string, boolean>}
 */
function experimentToggles(win) {
  if (win[TOGGLES_WINDOW_PROPERTY]) {
    return win[TOGGLES_WINDOW_PROPERTY];
  }
  win[TOGGLES_WINDOW_PROPERTY] = Object.create(null);
  var toggles = win[TOGGLES_WINDOW_PROPERTY];

  // Read the default config of this build.
  if (win.AMP_CONFIG) {
    for (var experimentId in win.AMP_CONFIG) {
      var frequency = win.AMP_CONFIG[experimentId];
      if (typeof frequency === 'number' && frequency >= 0 && frequency <= 1) {
        toggles[experimentId] = Math.random() < frequency;
      }
    }
  }
  // Read document level override from meta tag.
  if (win.AMP_CONFIG && Array.isArray(win.AMP_CONFIG['allow-doc-opt-in']) && win.AMP_CONFIG['allow-doc-opt-in'].length > 0) {
    var allowed = win.AMP_CONFIG['allow-doc-opt-in'];
    var meta = win.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
    if (meta) {
      var optedInExperiments = meta.getAttribute('content').split(',');
      for (var i = 0; i < optedInExperiments.length; i++) {
        if (allowed.indexOf(optedInExperiments[i]) != -1) {
          toggles[optedInExperiments[i]] = true;
        }
      }
    }
  }

  Object.assign(toggles, getExperimentTogglesFromCookie(win));

  if (win.AMP_CONFIG && Array.isArray(win.AMP_CONFIG['allow-url-opt-in']) && win.AMP_CONFIG['allow-url-opt-in'].length > 0) {
    var _allowed = win.AMP_CONFIG['allow-url-opt-in'];
    var hash = win.location.originalHash || win.location.hash;
    var params = (0, _url.parseQueryString)(hash);
    for (var _i = 0; _i < _allowed.length; _i++) {
      var param = params['e-' + _allowed[_i]];
      if (param == '1') {
        toggles[_allowed[_i]] = true;
      }
      if (param == '0') {
        toggles[_allowed[_i]] = false;
      }
    }
  }
  return toggles;
}

/**
 * Returns the cached experiments toggles, or null if they have not been
 * computed yet.
 * @param {!Window} win
 * @return {Object<string, boolean>}
 */
function experimentTogglesOrNull(win) {
  return win[TOGGLES_WINDOW_PROPERTY] || null;
}

/**
 * Returns a set of experiment IDs currently on.
 * @param {!Window} win
 * @return {!Object<string, boolean>}
 */
function getExperimentTogglesFromCookie(win) {
  var experimentCookie = (0, _cookies.getCookie)(win, COOKIE_NAME);
  var tokens = experimentCookie ? experimentCookie.split(/\s*,\s*/g) : [];

  var toggles = Object.create(null);
  for (var i = 0; i < tokens.length; i++) {
    if (tokens[i].length == 0) {
      continue;
    }
    if (tokens[i][0] == '-') {
      toggles[tokens[i].substr(1)] = false;
    } else {
      toggles[tokens[i]] = true;
    }
  }

  return toggles;
}

/**
 * Saves a set of experiment IDs currently on.
 * @param {!Window} win
 * @param {!Object<string, boolean>} toggles
 */
function saveExperimentTogglesToCookie(win, toggles) {
  var experimentIds = [];
  for (var experiment in toggles) {
    experimentIds.push((toggles[experiment] === false ? '-' : '') + experiment);
  }

  (0, _cookies.setCookie)(win, COOKIE_NAME, experimentIds.join(','), Date.now() + COOKIE_EXPIRATION_INTERVAL, {
    // Set explicit domain, so the cookie gets send to sub domains.
    domain: win.location.hostname,
    allowOnProxyOrigin: true
  });
}

/**
 * See getExperimentTogglesFromCookie().
 * @param {!Window} win
 * @return {!Object<string, boolean>}
 * @visibleForTesting
 */
function getExperimentToglesFromCookieForTesting(win) {
  return getExperimentTogglesFromCookie(win);
}

/**
 * Resets the experimentsToggle cache for testing purposes.
 * @param {!Window} win
 * @visibleForTesting
 */
function resetExperimentTogglesForTesting(win) {
  (0, _cookies.setCookie)(win, COOKIE_NAME, '', 0, {
    domain: win.location.hostname
  });
  win[TOGGLES_WINDOW_PROPERTY] = null;
}

/**
 * In some browser implementations of Math.random(), sequential calls of
 * Math.random() are correlated and can cause a bias.  In particular,
 * if the previous random() call was < 0.001 (as it will be if we select
 * into an experiment), the next value could be less than 0.5 more than
 * 50.7% of the time.  This provides an implementation that roots down into
 * the crypto API, when available, to produce less biased samples.
 *
 * @return {number} Pseudo-random floating-point value on the range [0, 1).
 */
function slowButAccuratePrng() {
  // TODO(tdrl): Implement.
  return Math.random();
}

/**
 * Container for alternate random number generator implementations.  This
 * allows us to set an "accurate" PRNG for branch selection, but to mock it
 * out easily in tests.
 *
 * @visibleForTesting
 * @const {!{accuratePrng: function():number}}
 */
var RANDOM_NUMBER_GENERATORS = exports.RANDOM_NUMBER_GENERATORS = {
  accuratePrng: slowButAccuratePrng
};

/**
 * Selects, uniformly at random, a single item from the array.
 * @param {!Array<string>} arr Object to select from.
 * @return {?string} Single item from arr or null if arr was empty.
 */
function selectRandomItem(arr) {
  var rn = RANDOM_NUMBER_GENERATORS.accuratePrng();
  return arr[Math.floor(rn * arr.length)] || null;
}

/**
 * Selects which page-level experiment branches are enabled. If a given
 * experiment name is already set (including to the null / no branches selected
 * state), this won't alter its state.
 *
 * Check whether a given experiment is set using isExperimentOn(win,
 * experimentName) and, if it is on, look for which branch is selected in
 * win.experimentBranches[experimentName].
 *
 * @param {!Window} win Window context on which to save experiment
 *     selection state.
 * @param {!Object<string, !ExperimentInfo>} experiments  Set of experiments to
 *     configure for this page load.
 * @visibleForTesting
 */
function randomlySelectUnsetExperiments(win, experiments) {
  win.experimentBranches = win.experimentBranches || {};
  for (var experimentName in experiments) {
    // Skip experimentName if it is not a key of experiments object or if it
    // has already been populated by some other property.
    if (!experiments.hasOwnProperty(experimentName) || win.experimentBranches.hasOwnProperty(experimentName)) {
      continue;
    }

    if (!experiments[experimentName].isTrafficEligible || !experiments[experimentName].isTrafficEligible(win)) {
      win.experimentBranches[experimentName] = null;
      continue;
    }

    // If we're in the experiment, but we haven't already forced a specific
    // experiment branch (e.g., via a test setup), then randomize the branch
    // choice.
    if (!win.experimentBranches[experimentName] && isExperimentOn(win, experimentName)) {
      var branches = experiments[experimentName].branches;
      win.experimentBranches[experimentName] = selectRandomItem(branches);
    }
  }
}

/**
 * Returns the experiment branch enabled for the given experiment ID.
 * For example, 'control' or 'experiment'.
 *
 * @param {!Window} win Window context to check for experiment state.
 * @param {string} experimentName Name of the experiment to check.
 * @return {?string} Active experiment branch ID for experimentName (possibly
 *     null if experimentName has been tested but no branch was enabled).
 */
function getExperimentBranch(win, experimentName) {
  return win.experimentBranches ? win.experimentBranches[experimentName] : null;
}

/**
 * Force enable (or disable) a specific branch of a given experiment name.
 * Disables the experiment name altogether if branchId is falseish.
 *
 * @param {!Window} win Window context to check for experiment state.
 * @param {string} experimentName Name of the experiment to check.
 * @param {?string} branchId ID of branch to force or null to disable
 *     altogether.
 * @visibleForTesting
 */
function forceExperimentBranch(win, experimentName, branchId) {
  win.experimentBranches = win.experimentBranches || {};
  toggleExperiment(win, experimentName, !!branchId, true);
  win.experimentBranches[experimentName] = branchId;
}

},{"./cookies":47,"./log":57,"./origin-experiments":62,"./services":72,"./url":78}],53:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PinchRecognizer = exports.TapzoomRecognizer = exports.SwipeYRecognizer = exports.SwipeXRecognizer = exports.SwipeXYRecognizer = exports.SwipeDef = exports.DoubletapRecognizer = exports.TapRecognizer = undefined;

var _gesture = require('./gesture');

var _motion = require('./motion');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * A "tap" gesture.
 * @typedef {{
 *   clientX: number,
 *   clientY: number
 * }}
 */
var TapDef = void 0;

/**
 * Recognizes "tap" gestures.
 * @extends {GestureRecognizer<TapDef>}
 */

var TapRecognizer = exports.TapRecognizer = function (_GestureRecognizer) {
  _inherits(TapRecognizer, _GestureRecognizer);

  /**
   * @param {!./gesture.Gestures} manager
   */
  function TapRecognizer(manager) {
    _classCallCheck(this, TapRecognizer);

    /** @private {number} */
    var _this = _possibleConstructorReturn(this, _GestureRecognizer.call(this, 'tap', manager));

    _this.startX_ = 0;

    /** @private {number} */
    _this.startY_ = 0;

    /** @private {number} */
    _this.lastX_ = 0;

    /** @private {number} */
    _this.lastY_ = 0;
    return _this;
  }

  /** @override */


  TapRecognizer.prototype.onTouchStart = function onTouchStart(e) {
    var touches = e.touches;
    if (touches && touches.length == 1) {
      this.startX_ = touches[0].clientX;
      this.startY_ = touches[0].clientY;
      return true;
    } else {
      return false;
    }
  };

  /** @override */


  TapRecognizer.prototype.onTouchMove = function onTouchMove(e) {
    var touches = e.changedTouches || e.touches;
    if (touches && touches.length == 1) {
      this.lastX_ = touches[0].clientX;
      this.lastY_ = touches[0].clientY;
      var dx = Math.abs(this.lastX_ - this.startX_) >= 8;
      var dy = Math.abs(this.lastY_ - this.startY_) >= 8;
      if (dx || dy) {
        return false;
      }
    }
    return true;
  };

  /** @override */


  TapRecognizer.prototype.onTouchEnd = function onTouchEnd(unusedE) {
    this.signalReady(0);
  };

  /** @override */


  TapRecognizer.prototype.acceptStart = function acceptStart() {
    this.signalEmit({ clientX: this.lastX_, clientY: this.lastY_ }, null);
    this.signalEnd();
  };

  return TapRecognizer;
}(_gesture.GestureRecognizer);

/**
 * A "doubletap" gesture.
 * @typedef {{
 *   clientX: number,
 *   clientY: number
 * }}
 */


var DoubletapDef = void 0;

/**
 * Recognizes a "doubletap" gesture. This gesture will block a single "tap"
 * for about 300ms while it's expecting the second "tap".
 * @extends {GestureRecognizer<DoubletapDef>}
 */

var DoubletapRecognizer = exports.DoubletapRecognizer = function (_GestureRecognizer2) {
  _inherits(DoubletapRecognizer, _GestureRecognizer2);

  /**
   * @param {!./gesture.Gestures} manager
   */
  function DoubletapRecognizer(manager) {
    _classCallCheck(this, DoubletapRecognizer);

    /** @private {number} */
    var _this2 = _possibleConstructorReturn(this, _GestureRecognizer2.call(this, 'doubletap', manager));

    _this2.startX_ = 0;

    /** @private {number} */
    _this2.startY_ = 0;

    /** @private {number} */
    _this2.lastX_ = 0;

    /** @private {number} */
    _this2.lastY_ = 0;

    /** @private {number} */
    _this2.tapCount_ = 0;

    /** @private {?Event} */
    _this2.event_ = null;
    return _this2;
  }

  /** @override */


  DoubletapRecognizer.prototype.onTouchStart = function onTouchStart(e) {
    if (this.tapCount_ > 1) {
      return false;
    }
    var touches = e.touches;
    if (touches && touches.length == 1) {
      this.startX_ = touches[0].clientX;
      this.startY_ = touches[0].clientY;
      this.lastX_ = touches[0].clientX;
      this.lastY_ = touches[0].clientY;
      return true;
    } else {
      return false;
    }
  };

  /** @override */


  DoubletapRecognizer.prototype.onTouchMove = function onTouchMove(e) {
    var touches = e.touches;
    if (touches && touches.length == 1) {
      this.lastX_ = touches[0].clientX;
      this.lastY_ = touches[0].clientY;
      var dx = Math.abs(this.lastX_ - this.startX_) >= 8;
      var dy = Math.abs(this.lastY_ - this.startY_) >= 8;
      if (dx || dy) {
        this.acceptCancel();
        return false;
      }
      return true;
    } else {
      return false;
    }
  };

  /** @override */


  DoubletapRecognizer.prototype.onTouchEnd = function onTouchEnd(e) {
    this.tapCount_++;
    if (this.tapCount_ < 2) {
      this.signalPending(300);
    } else {
      this.event_ = e;
      this.signalReady(0);
    }
  };

  /** @override */


  DoubletapRecognizer.prototype.acceptStart = function acceptStart() {
    this.tapCount_ = 0;
    this.signalEmit({ clientX: this.lastX_, clientY: this.lastY_ }, this.event_);
    this.signalEnd();
  };

  /** @override */


  DoubletapRecognizer.prototype.acceptCancel = function acceptCancel() {
    this.tapCount_ = 0;
  };

  return DoubletapRecognizer;
}(_gesture.GestureRecognizer);

/**
 * A "swipe-xy", "swipe-x" or "swipe-y" gesture. A number of these gestures
 * may be emitted for a single touch series.
 * @typedef {{
 *   first: boolean,
 *   last: boolean,
 *   deltaX: number,
 *   deltaY: number,
 *   velocityX: number,
 *   velocityY: number
 * }}
 */


var SwipeDef = exports.SwipeDef = void 0;

/**
 * Recognizes swipe gestures. This gesture will yield about 10ms to other
 * gestures.
 * @extends {GestureRecognizer<SwipeDef>}
 */

var SwipeRecognizer = function (_GestureRecognizer3) {
  _inherits(SwipeRecognizer, _GestureRecognizer3);

  /**
   * @param {!./gesture.Gestures} manager
   */
  function SwipeRecognizer(type, manager, horiz, vert) {
    _classCallCheck(this, SwipeRecognizer);

    /** @private {boolean} */
    var _this3 = _possibleConstructorReturn(this, _GestureRecognizer3.call(this, type, manager));

    _this3.horiz_ = horiz;

    /** @private {boolean} */
    _this3.vert_ = vert;

    /** @private {boolean} */
    _this3.eventing_ = false;

    /** @private {number} */
    _this3.startX_ = 0;

    /** @private {number} */
    _this3.startY_ = 0;

    /** @private {number} */
    _this3.lastX_ = 0;

    /** @private {number} */
    _this3.lastY_ = 0;

    /** @private {number} */
    _this3.prevX_ = 0;

    /** @private {number} */
    _this3.prevY_ = 0;

    /** @private {time} */
    _this3.startTime_ = 0;

    /** @private {time} */
    _this3.lastTime_ = 0;

    /** @private {time} */
    _this3.prevTime_ = 0;

    /** @private {number} */
    _this3.velocityX_ = 0;

    /** @private {number} */
    _this3.velocityY_ = 0;
    return _this3;
  }

  /** @override */


  SwipeRecognizer.prototype.onTouchStart = function onTouchStart(e) {
    var touches = e.touches;
    if (touches && touches.length == 1) {
      this.startTime_ = Date.now();
      this.startX_ = touches[0].clientX;
      this.startY_ = touches[0].clientY;
      return true;
    } else {
      return false;
    }
  };

  /** @override */


  SwipeRecognizer.prototype.onTouchMove = function onTouchMove(e) {
    var touches = e.touches;
    if (touches && touches.length == 1) {
      var x = touches[0].clientX;
      var y = touches[0].clientY;
      this.lastX_ = x;
      this.lastY_ = y;
      if (this.eventing_) {
        this.emit_(false, false, e);
      } else {
        var dx = Math.abs(x - this.startX_);
        var dy = Math.abs(y - this.startY_);
        // Swipe is penalized slightly since it's one of the least demanding
        // gesture, thus -10 in signalReady.
        if (this.horiz_ && this.vert_) {
          if (dx >= 8 || dy >= 8) {
            this.signalReady(-10);
          }
        } else if (this.horiz_) {
          if (dx >= 8 && dx > dy) {
            this.signalReady(-10);
          } else if (dy >= 8) {
            return false;
          }
        } else if (this.vert_) {
          if (dy >= 8 && dy > dx) {
            this.signalReady(-10);
          } else if (dx >= 8) {
            return false;
          }
        } else {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  };

  /** @override */


  SwipeRecognizer.prototype.onTouchEnd = function onTouchEnd(e) {
    this.end_(e);
  };

  /** @override */


  SwipeRecognizer.prototype.acceptStart = function acceptStart() {
    this.eventing_ = true;
    // Reset start coordinates to where the gesture began to avoid visible
    // jump, but preserve them as "prev" coordinates to calculate the right
    // velocity.
    this.prevX_ = this.startX_;
    this.prevY_ = this.startY_;
    this.prevTime_ = this.startTime_;
    this.startX_ = this.lastX_;
    this.startY_ = this.lastY_;
    this.emit_(true, false, null);
  };

  /** @override */


  SwipeRecognizer.prototype.acceptCancel = function acceptCancel() {
    this.eventing_ = false;
  };

  /**
   * @param {boolean} first
   * @param {boolean} last
   * @param {?Event} event
   * @private
   */


  SwipeRecognizer.prototype.emit_ = function emit_(first, last, event) {
    this.lastTime_ = Date.now();
    var deltaTime = this.lastTime_ - this.prevTime_;
    // It's often that `touchend` arrives on the next frame. These should
    // be ignored to avoid a significant velocity downgrade.
    if (!last && deltaTime > 4 || last && deltaTime > 16) {
      this.velocityX_ = (0, _motion.calcVelocity)(this.lastX_ - this.prevX_, deltaTime, this.velocityX_);
      this.velocityY_ = (0, _motion.calcVelocity)(this.lastY_ - this.prevY_, deltaTime, this.velocityY_);
      this.velocityX_ = Math.abs(this.velocityX_) > 1e-4 ? this.velocityX_ : 0;
      this.velocityY_ = Math.abs(this.velocityY_) > 1e-4 ? this.velocityY_ : 0;
      this.prevX_ = this.lastX_;
      this.prevY_ = this.lastY_;
      this.prevTime_ = this.lastTime_;
    }

    this.signalEmit({
      first: first,
      last: last,
      time: this.lastTime_,
      deltaX: this.horiz_ ? this.lastX_ - this.startX_ : 0,
      deltaY: this.vert_ ? this.lastY_ - this.startY_ : 0,
      velocityX: this.horiz_ ? this.velocityX_ : 0,
      velocityY: this.vert_ ? this.velocityY_ : 0
    }, event);
  };

  /**
   * @param {?Event} event
   * @private
   */


  SwipeRecognizer.prototype.end_ = function end_(event) {
    if (this.eventing_) {
      this.eventing_ = false;
      this.emit_(false, true, event);
      this.signalEnd();
    }
  };

  return SwipeRecognizer;
}(_gesture.GestureRecognizer);

/**
 * Recognizes "swipe-xy" gesture. Yields about 10ms to other gestures.
 */


var SwipeXYRecognizer = exports.SwipeXYRecognizer = function (_SwipeRecognizer) {
  _inherits(SwipeXYRecognizer, _SwipeRecognizer);

  /**
   * @param {!./gesture.Gestures} manager
   */
  function SwipeXYRecognizer(manager) {
    _classCallCheck(this, SwipeXYRecognizer);

    return _possibleConstructorReturn(this, _SwipeRecognizer.call(this, 'swipe-xy', manager, true, true));
  }

  return SwipeXYRecognizer;
}(SwipeRecognizer);

/**
 * Recognizes "swipe-x" gesture. Yields about 10ms to other gestures.
 */


var SwipeXRecognizer = exports.SwipeXRecognizer = function (_SwipeRecognizer2) {
  _inherits(SwipeXRecognizer, _SwipeRecognizer2);

  /**
   * @param {!./gesture.Gestures} manager
   */
  function SwipeXRecognizer(manager) {
    _classCallCheck(this, SwipeXRecognizer);

    return _possibleConstructorReturn(this, _SwipeRecognizer2.call(this, 'swipe-x', manager, true, false));
  }

  return SwipeXRecognizer;
}(SwipeRecognizer);

/**
 * Recognizes "swipe-y" gesture. Yields about 10ms to other gestures.
 */


var SwipeYRecognizer = exports.SwipeYRecognizer = function (_SwipeRecognizer3) {
  _inherits(SwipeYRecognizer, _SwipeRecognizer3);

  /**
   * @param {!./gesture.Gestures} manager
   */
  function SwipeYRecognizer(manager) {
    _classCallCheck(this, SwipeYRecognizer);

    return _possibleConstructorReturn(this, _SwipeRecognizer3.call(this, 'swipe-y', manager, false, true));
  }

  return SwipeYRecognizer;
}(SwipeRecognizer);

/**
 * A "tapzoom" gesture. It has a center, delta off the center center and
 * the velocity of moving away from the center.
 * @typedef {{
 *   first: boolean,
 *   last: boolean,
 *   centerClientX: number,
 *   centerClientY: number,
 *   deltaX: number,
 *   deltaY: number,
 *   velocityX: number,
 *   velocityY: number
 * }}
 */


var TapzoomDef = void 0;

/**
 * Recognizes a "tapzoom" gesture. This gesture will block other gestures
 * for about 400ms after first "tap" while it's expecting swipe.
 * @extends {GestureRecognizer<TapzoomDef>}
 */

var TapzoomRecognizer = exports.TapzoomRecognizer = function (_GestureRecognizer4) {
  _inherits(TapzoomRecognizer, _GestureRecognizer4);

  /**
   * @param {!./gesture.Gestures} manager
   */
  function TapzoomRecognizer(manager) {
    _classCallCheck(this, TapzoomRecognizer);

    /** @private {boolean} */
    var _this7 = _possibleConstructorReturn(this, _GestureRecognizer4.call(this, 'tapzoom', manager));

    _this7.eventing_ = false;

    /** @private {number} */
    _this7.startX_ = 0;

    /** @private {number} */
    _this7.startY_ = 0;

    /** @private {number} */
    _this7.lastX_ = 0;

    /** @private {number} */
    _this7.lastY_ = 0;

    /** @private {number} */
    _this7.tapX_ = 0;

    /** @private {number} */
    _this7.tapY_ = 0;

    /** @private {number} */
    _this7.tapCount_ = 0;

    /** @private {number} */
    _this7.prevX_ = 0;

    /** @private {number} */
    _this7.prevY_ = 0;

    /** @private {time} */
    _this7.startTime_ = 0;

    /** @private {time} */
    _this7.lastTime_ = 0;

    /** @private {time} */
    _this7.prevTime_ = 0;

    /** @private {number} */
    _this7.velocityX_ = 0;

    /** @private {number} */
    _this7.velocityY_ = 0;
    return _this7;
  }

  /** @override */


  TapzoomRecognizer.prototype.onTouchStart = function onTouchStart(e) {
    if (this.eventing_) {
      return false;
    }
    var touches = e.touches;
    if (touches && touches.length == 1) {
      this.startX_ = touches[0].clientX;
      this.startY_ = touches[0].clientY;
      return true;
    } else {
      return false;
    }
  };

  /** @override */


  TapzoomRecognizer.prototype.onTouchMove = function onTouchMove(e) {
    var touches = e.touches;
    if (touches && touches.length == 1) {
      this.lastX_ = touches[0].clientX;
      this.lastY_ = touches[0].clientY;
      if (this.eventing_) {
        this.emit_(false, false, e);
      } else {
        var dx = Math.abs(this.lastX_ - this.startX_) >= 8;
        var dy = Math.abs(this.lastY_ - this.startY_) >= 8;
        if (dx || dy) {
          if (this.tapCount_ == 0) {
            this.acceptCancel();
            return false;
          } else {
            this.signalReady(0);
          }
        }
      }
      return true;
    } else {
      return false;
    }
  };

  /** @override */


  TapzoomRecognizer.prototype.onTouchEnd = function onTouchEnd(e) {
    if (this.eventing_) {
      this.end_(e);
      return;
    }

    this.tapCount_++;
    if (this.tapCount_ == 1) {
      this.signalPending(400);
      this.tapX_ = this.lastX_;
      this.tapY_ = this.lastY_;
      return;
    }

    this.acceptCancel();
  };

  /** @override */


  TapzoomRecognizer.prototype.acceptStart = function acceptStart() {
    this.tapCount_ = 0;
    this.eventing_ = true;
    this.emit_(true, false, null);
  };

  /** @override */


  TapzoomRecognizer.prototype.acceptCancel = function acceptCancel() {
    this.tapCount_ = 0;
    this.eventing_ = false;
  };

  /**
   * @param {boolean} first
   * @param {boolean} last
   * @param {?Event} event
   * @private
   */


  TapzoomRecognizer.prototype.emit_ = function emit_(first, last, event) {
    this.lastTime_ = Date.now();
    if (first) {
      this.startTime_ = this.lastTime_;
      this.velocityX_ = this.velocityY_ = 0;
    } else if (this.lastTime_ - this.prevTime_ > 2) {
      this.velocityX_ = (0, _motion.calcVelocity)(this.lastX_ - this.prevX_, this.lastTime_ - this.prevTime_, this.velocityX_);
      this.velocityY_ = (0, _motion.calcVelocity)(this.lastY_ - this.prevY_, this.lastTime_ - this.prevTime_, this.velocityY_);
    }
    this.prevX_ = this.lastX_;
    this.prevY_ = this.lastY_;
    this.prevTime_ = this.lastTime_;

    this.signalEmit({
      first: first,
      last: last,
      centerClientX: this.startX_,
      centerClientY: this.startY_,
      deltaX: this.lastX_ - this.startX_,
      deltaY: this.lastY_ - this.startY_,
      velocityX: this.velocityX_,
      velocityY: this.velocityY_
    }, event);
  };

  /**
   * @param {?Event} event
   * @private
   */


  TapzoomRecognizer.prototype.end_ = function end_(event) {
    if (this.eventing_) {
      this.eventing_ = false;
      this.emit_(false, true, event);
      this.signalEnd();
    }
  };

  return TapzoomRecognizer;
}(_gesture.GestureRecognizer);

/**
 * A "pinch" gesture. It has a center, delta off the center center and
 * the velocity of moving away from the center. "dir" component of `1`
 * indicates that it's a expand motion and `-1` indicates pinch motion.
 * @typedef {{
 *   first: boolean,
 *   last: boolean,
 *   centerClientX: number,
 *   centerClientY: number,
 *   dir: number,
 *   deltaX: number,
 *   deltaY: number,
 *   velocityX: number,
 *   velocityY: number
 * }}
 */


var PinchDef = void 0;

/**
 * Threshold in pixels for how much two touches move away from
 * each other before we recognize the gesture as a pinch.
 */
var PINCH_ACCEPT_THRESHOLD = 4;

/**
 * Threshold in pixels for how much two touches move in the same
 * direction before we reject the gesture as a pinch.
 */
var PINCH_REJECT_THRESHOLD = 10;

/**
 * Recognizes a "pinch" gesture.
 * @extends {GestureRecognizer<PinchDef>}
 */

var PinchRecognizer = exports.PinchRecognizer = function (_GestureRecognizer5) {
  _inherits(PinchRecognizer, _GestureRecognizer5);

  /**
   * @param {!./gesture.Gestures} manager
   */
  function PinchRecognizer(manager) {
    _classCallCheck(this, PinchRecognizer);

    /** @private {boolean} */
    var _this8 = _possibleConstructorReturn(this, _GestureRecognizer5.call(this, 'pinch', manager));

    _this8.eventing_ = false;

    /** @private {number} */
    _this8.startX1_ = 0;
    /** @private {number} */
    _this8.startY1_ = 0;

    /** @private {number} */
    _this8.startX2_ = 0;
    /** @private {number} */
    _this8.startY2_ = 0;

    /** @private {number} */
    _this8.lastX1_ = 0;
    /** @private {number} */
    _this8.lastY1_ = 0;

    /** @private {number} */
    _this8.lastX2_ = 0;
    /** @private {number} */
    _this8.lastY2_ = 0;

    /** @private {number} */
    _this8.prevDeltaX_ = 0;
    /** @private {number} */
    _this8.prevDeltaY_ = 0;

    /** @private {number} */
    _this8.centerClientX_ = 0;
    /** @private {number} */
    _this8.centerClientY_ = 0;

    /** @private {time} */
    _this8.startTime_ = 0;
    /** @private {time} */
    _this8.lastTime_ = 0;
    /** @private {time} */
    _this8.prevTime_ = 0;

    /** @private {number} */
    _this8.velocityX_ = 0;
    /** @private {number} */
    _this8.velocityY_ = 0;
    return _this8;
  }

  /** @override */


  PinchRecognizer.prototype.onTouchStart = function onTouchStart(e) {
    var touches = e.touches;
    // Pinch touches are not always simultaneous, continue to listen
    // for second touch.
    if (touches && touches.length == 1) {
      return true;
    } else if (touches && touches.length == 2) {
      this.startTime_ = Date.now();
      this.startX1_ = touches[0].clientX;
      this.startY1_ = touches[0].clientY;
      this.startX2_ = touches[1].clientX;
      this.startY2_ = touches[1].clientY;
      return true;
    } else {
      return false;
    }
  };

  /** @override */


  PinchRecognizer.prototype.onTouchMove = function onTouchMove(e) {
    var touches = e.touches;
    // Pinch touches are not always simultaneous, continue to listen
    // for second touch.
    if (touches && touches.length == 1) {
      return true;
    } else if (touches && touches.length == 2) {
      this.lastX1_ = touches[0].clientX;
      this.lastY1_ = touches[0].clientY;
      this.lastX2_ = touches[1].clientX;
      this.lastY2_ = touches[1].clientY;
      if (this.eventing_) {
        this.emit_(false, false, e);
      } else {
        var dx1 = this.lastX1_ - this.startX1_;
        var dy1 = this.lastY1_ - this.startY1_;
        var dx2 = this.lastX2_ - this.startX2_;
        var dy2 = this.lastY2_ - this.startY2_;
        // Fingers should move in opposite directions and go over the threshold.
        if (dx1 * dx2 <= 0 && dy1 * dy2 <= 0) {
          if (Math.abs(dx1 - dx2) >= PINCH_ACCEPT_THRESHOLD || Math.abs(dy1 - dy2) >= PINCH_ACCEPT_THRESHOLD) {
            this.signalReady(0);
          }
        } else if (Math.abs(dx1 + dx2) >= PINCH_REJECT_THRESHOLD || Math.abs(dy1 + dy2) >= PINCH_REJECT_THRESHOLD) {
          // Moving in the same direction over a threshold.
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  };

  /** @override */


  PinchRecognizer.prototype.onTouchEnd = function onTouchEnd(e) {
    this.end_(e);
  };

  /** @override */


  PinchRecognizer.prototype.acceptStart = function acceptStart() {
    this.eventing_ = true;
    this.prevTime_ = this.startTime_;
    this.prevDeltaX_ = 0;
    this.prevDeltaY_ = 0;
    this.centerClientX_ = (this.startX1_ + this.startX2_) * 0.5;
    this.centerClientY_ = (this.startY1_ + this.startY2_) * 0.5;
    this.emit_(true, false, null);
  };

  /** @override */


  PinchRecognizer.prototype.acceptCancel = function acceptCancel() {
    this.eventing_ = false;
  };

  /**
   * @param {boolean} first
   * @param {boolean} last
   * @param {?Event} event
   * @private
   */


  PinchRecognizer.prototype.emit_ = function emit_(first, last, event) {
    this.lastTime_ = Date.now();
    var deltaTime = this.lastTime_ - this.prevTime_;
    var deltaX = this.deltaX_();
    var deltaY = this.deltaY_();
    // It's often that `touchend` arrives on the next frame. These should
    // be ignored to avoid a significant velocity downgrade.
    if (!last && deltaTime > 4 || last && deltaTime > 16) {
      this.velocityX_ = (0, _motion.calcVelocity)(deltaX - this.prevDeltaX_, deltaTime, this.velocityX_);
      this.velocityY_ = (0, _motion.calcVelocity)(deltaY - this.prevDeltaY_, deltaTime, this.velocityY_);
      this.velocityX_ = Math.abs(this.velocityX_) > 1e-4 ? this.velocityX_ : 0;
      this.velocityY_ = Math.abs(this.velocityY_) > 1e-4 ? this.velocityY_ : 0;
      this.prevDeltaX_ = deltaX;
      this.prevDeltaY_ = deltaY;
      this.prevTime_ = this.lastTime_;
    }

    var startSq = this.sqDist_(this.startX1_, this.startX2_, this.startY1_, this.startY2_);
    var lastSq = this.sqDist_(this.lastX1_, this.lastX2_, this.lastY1_, this.lastY2_);
    this.signalEmit({
      first: first,
      last: last,
      time: this.lastTime_,
      centerClientX: this.centerClientX_,
      centerClientY: this.centerClientY_,
      dir: Math.sign(lastSq - startSq),
      deltaX: deltaX * 0.5,
      deltaY: deltaY * 0.5,
      velocityX: this.velocityX_ * 0.5,
      velocityY: this.velocityY_ * 0.5
    }, event);
  };

  /**
   * @param {?Event} event
   * @private
   */


  PinchRecognizer.prototype.end_ = function end_(event) {
    if (this.eventing_) {
      this.eventing_ = false;
      this.emit_(false, true, event);
      this.signalEnd();
    }
  };

  /**
   * @param {number} x1
   * @param {number} x2
   * @param {number} y1
   * @param {number} y2
   * @return {number}
   * @private
   */


  PinchRecognizer.prototype.sqDist_ = function sqDist_(x1, x2, y1, y2) {
    return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
  };

  /**
   * @return {number}
   * @private
   */


  PinchRecognizer.prototype.deltaX_ = function deltaX_() {
    return Math.abs(this.lastX1_ - this.startX1_ - (this.lastX2_ - this.startX2_));
  };

  /**
   * @return {number}
   * @private
   */


  PinchRecognizer.prototype.deltaY_ = function deltaY_() {
    return Math.abs(this.lastY1_ - this.startY1_ - (this.lastY2_ - this.startY2_));
  };

  return PinchRecognizer;
}(_gesture.GestureRecognizer);

},{"./gesture":54,"./motion":60}],54:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GestureRecognizer = exports.Gestures = exports.Gesture = undefined;

var _observable = require('./observable');

var _pass = require('./pass');

var _log = require('./log');

var _array = require('./utils/array');

var _types = require('./types');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */

var PROP_ = '__AMP_Gestures';

/**
 * A gesture object contains the type and data of the gesture such as
 * a tap or a double-tap or a swipe. See {@link GestureRecognizer} for
 * more details.
 * @struct
 * @const
 * @template DATA
 */

var Gesture =
/**
 * @param {string} type The gesture's string type.
 * @param {DATA} data The data of the gesture.
 * @param {time} time The time that the gesture has been emitted.
 * @param {?Event} event An optional browser event that resulted in the
 *   gesture.
 */
exports.Gesture = function Gesture(type, data, time, event) {
  _classCallCheck(this, Gesture);

  /** @const {string} */
  this.type = type;
  /** @const {DATA} */
  this.data = data;
  /** @const {time} */
  this.time = time;
  /** @const {?Event} */
  this.event = event;
};

/**
 * Gestures object manages all gestures on a particular element. It listens
 * to all pointer events and delegates them to individual gesture recognizers.
 * When a recognizer has recognized a gesture and ready to start emitting it
 * it requests permission to do so from this class which resolves conflicts
 * between competing recognizers to decide which gesture should go forward.
 */


var Gestures = exports.Gestures = function () {

  /**
   * Creates if not yet created and returns the shared Gestures instance for
   * the specified element.
   * @param {!Element} element
   * @param {boolean=} opt_shouldNotPreventDefault
   * @return {!Gestures}
   */
  Gestures.get = function get(element) {
    var opt_shouldNotPreventDefault = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var res = element[PROP_];
    if (!res) {
      res = new Gestures(element, opt_shouldNotPreventDefault);
      element[PROP_] = res;
    }
    return res;
  };

  /**
   * @param {!Element} element
   */


  function Gestures(element, shouldNotPreventDefault) {
    _classCallCheck(this, Gestures);

    /** @private {!Element} */
    this.element_ = element;

    /** @private {!Array<!GestureRecognizer>} */
    this.recognizers_ = [];

    /** @private {!Array<boolean>} */
    this.tracking_ = [];

    /** @private {!Array<time>} */
    this.ready_ = [];

    /** @private {!Array<time>} */
    this.pending_ = [];

    /** @private {?GestureRecognizer} */
    this.eventing_ = null;

    /** @private {boolean} */
    this.shouldNotPreventDefault_ = shouldNotPreventDefault;

    /**
     * This variable indicates that the eventing has stopped on this
     * event cycle.
     * @private {boolean}
     */
    this.wasEventing_ = false;

    /** @private {!Pass} */
    this.pass_ = new _pass.Pass((0, _types.toWin)(element.ownerDocument.defaultView), this.doPass_.bind(this));

    /** @private {!Observable} */
    this.pointerDownObservable_ = new _observable.Observable();

    /**
     * Observers for each type of registered gesture types.
     * @private {!Object<string, !Observable<!Gesture>>}
     */
    this.overservers_ = Object.create(null);

    /** @private @const {function(!Event)} */
    this.boundOnTouchStart_ = this.onTouchStart_.bind(this);
    /** @private @const {function(!Event)} */
    this.boundOnTouchEnd_ = this.onTouchEnd_.bind(this);
    /** @private @const {function(!Event)} */
    this.boundOnTouchMove_ = this.onTouchMove_.bind(this);
    /** @private @const {function(!Event)} */
    this.boundOnTouchCancel_ = this.onTouchCancel_.bind(this);

    this.element_.addEventListener('touchstart', this.boundOnTouchStart_);
    this.element_.addEventListener('touchend', this.boundOnTouchEnd_);
    this.element_.addEventListener('touchmove', this.boundOnTouchMove_);
    this.element_.addEventListener('touchcancel', this.boundOnTouchCancel_);

    /** @private {boolean} */
    this.passAfterEvent_ = false;
  }

  /**
   * Unsubscribes from all pointer events and removes the shared cache instance.
   */


  Gestures.prototype.cleanup = function cleanup() {
    this.element_.removeEventListener('touchstart', this.boundOnTouchStart_);
    this.element_.removeEventListener('touchend', this.boundOnTouchEnd_);
    this.element_.removeEventListener('touchmove', this.boundOnTouchMove_);
    this.element_.removeEventListener('touchcancel', this.boundOnTouchCancel_);
    delete this.element_[PROP_];
    this.pass_.cancel();
  };

  /**
   * Subscribes to a gesture emitted by the specified recognizer. For a first
   * gesture handler registered in this method the recognizer is installed
   * and from that point on it participates in the event processing.
   *
   * @param {function(new:GestureRecognizer<DATA>, !Gestures)} recognizerConstr
   * @param {function(!Gesture<DATA>)} handler
   * @return {!UnlistenDef}
   * @template DATA
   */


  Gestures.prototype.onGesture = function onGesture(recognizerConstr, handler) {
    var recognizer = new recognizerConstr(this);
    var type = recognizer.getType();
    var overserver = this.overservers_[type];
    if (!overserver) {
      this.recognizers_.push(recognizer);
      overserver = new _observable.Observable();
      this.overservers_[type] = overserver;
    }
    return overserver.add(handler);
  };

  /**
   * Unsubscribes all handlers from the given gesture recognizer. Returns
   * true if anything was done. Returns false if there were no handlers
   * registered on the given gesture recognizer in first place.
   *
   * @param {function(new:GestureRecognizer<DATA>, !Gestures)} recognizerConstr
   * @return {boolean}
   */


  Gestures.prototype.removeGesture = function removeGesture(recognizerConstr) {
    var type = new recognizerConstr(this).getType();
    var overserver = this.overservers_[type];
    if (overserver) {
      overserver.removeAll();
      var index = (0, _array.findIndex)(this.recognizers_, function (e) {
        return e.getType() == type;
      });
      if (index < 0) {
        return false;
      }
      // Remove the recognizer as well as all associated tracking state
      this.recognizers_.splice(index, 1);
      this.ready_.splice(index, 1);
      this.pending_.splice(index, 1);
      this.tracking_.splice(index, 1);
      delete this.overservers_[type];
      return true;
    } else {
      return false;
    }
  };

  /**
   * Subscribes to pointer down events, such as "touchstart" or "mousedown".
   * @param {!Function} handler
   * @return {!UnlistenDef}
   */


  Gestures.prototype.onPointerDown = function onPointerDown(handler) {
    return this.pointerDownObservable_.add(handler);
  };

  /**
   * Handles all "touchstart" events and dispatches them to the tracking
   * recognizers.
   * @param {!Event} event
   * @private
   */


  Gestures.prototype.onTouchStart_ = function onTouchStart_(event) {
    var now = Date.now();
    this.wasEventing_ = false;

    this.pointerDownObservable_.fire(event);

    for (var i = 0; i < this.recognizers_.length; i++) {
      if (this.ready_[i]) {
        // If the recognizer is in the "ready" state, it won't receive
        // any more touch series until it's allowed to emit.
        continue;
      }
      if (this.pending_[i] && this.pending_[i] < now) {
        // Pending state expired. Reset.
        this.stopTracking_(i);
      }
      if (this.recognizers_[i].onTouchStart(event)) {
        // When a recognizer is interested in the touch series it returns "true"
        // from its onTouchStart method. For this recognizer we start tracking
        // the whole series of touch events from touchstart to touchend. Other
        // recognizers will not receive them unless they return "true" from
        // onTouchStart.
        this.startTracking_(i);
      }
    }

    this.afterEvent_(event);
  };

  /**
   * Handles all "touchmove" events and dispatches them to the tracking
   * recognizers.
   * @param {!Event} event
   * @private
   */


  Gestures.prototype.onTouchMove_ = function onTouchMove_(event) {
    var now = Date.now();

    for (var i = 0; i < this.recognizers_.length; i++) {
      if (!this.tracking_[i]) {
        // The whole touch series are ignored for non-tracking recognizers.
        continue;
      }
      if (this.pending_[i] && this.pending_[i] < now) {
        // Pending state expired. Reset.
        this.stopTracking_(i);
        continue;
      }
      if (!this.recognizers_[i].onTouchMove(event)) {
        // Recognizer lost interest in the series. Reset.
        this.stopTracking_(i);
      }
    }

    this.afterEvent_(event);
  };

  /**
   * Handles all "touchend" events and dispatches them to the tracking
   * recognizers.
   * @param {!Event} event
   * @private
   */


  Gestures.prototype.onTouchEnd_ = function onTouchEnd_(event) {
    var now = Date.now();

    for (var i = 0; i < this.recognizers_.length; i++) {
      if (!this.tracking_[i]) {
        // The whole touch series are ignored for non-tracking recognizers.
        continue;
      }
      if (this.pending_[i] && this.pending_[i] < now) {
        // Pending state expired. Reset.
        this.stopTracking_(i);
        continue;
      }
      this.recognizers_[i].onTouchEnd(event);
      if (!this.pending_[i] || this.pending_[i] < now) {
        this.stopTracking_(i);
      }
    }

    this.afterEvent_(event);
  };

  /**
   * Handles all "touchcancel" events. Cancels all tracking/emitting
   * recognizers.
   * @param {!Event} event
   * @private
   */


  Gestures.prototype.onTouchCancel_ = function onTouchCancel_(event) {
    for (var i = 0; i < this.recognizers_.length; i++) {
      this.cancelEventing_(i);
    }
    this.afterEvent_(event);
  };

  /**
   * Callback for a gesture recognizer to communicate that it's ready to
   * start emitting gestures. Gestures instance may or may not allow the
   * recognizer to proceed.
   * @param {!GestureRecognizer} recognizer
   * @param {number} offset
   * @private
   */


  Gestures.prototype.signalReady_ = function signalReady_(recognizer, offset) {
    // Somebody got here first.
    if (this.eventing_) {
      recognizer.acceptCancel();
      return;
    }

    // Set the recognizer as ready and wait for the pass to
    // make the decision.
    var now = Date.now();
    for (var i = 0; i < this.recognizers_.length; i++) {
      if (this.recognizers_[i] == recognizer) {
        this.ready_[i] = now + offset;
        this.pending_[i] = 0;
      }
    }
    this.passAfterEvent_ = true;
  };

  /**
   * Callback for a gesture recognizer to communicate that it's close to
   * start emitting gestures, but needs more time to see more events. Once
   * this time expires the recognizer should either signal readiness or it
   * will be canceled.
   * @param {!GestureRecognizer} recognizer
   * @param {number} timeLeft
   * @private
   */


  Gestures.prototype.signalPending_ = function signalPending_(recognizer, timeLeft) {
    // Somebody got here first.
    if (this.eventing_) {
      recognizer.acceptCancel();
      return;
    }

    var now = Date.now();
    for (var i = 0; i < this.recognizers_.length; i++) {
      if (this.recognizers_[i] == recognizer) {
        this.pending_[i] = now + timeLeft;
      }
    }
  };

  /**
   * Callback for a gesture recognizer to communicate that it's done
   * emitting gestures.
   * @param {!GestureRecognizer} recognizer
   * @private
   */


  Gestures.prototype.signalEnd_ = function signalEnd_(recognizer) {
    if (this.eventing_ == recognizer) {
      this.eventing_ = null;
      this.wasEventing_ = true;
    }
  };

  /**
   * Callback for a gesture emit the gesture. Only the currently emitting
   * recognizer is allowed to emit gestures.
   * @param {!GestureRecognizer} recognizer
   * @param {*} data
   * @param {?Event} event
   * @private
   */


  Gestures.prototype.signalEmit_ = function signalEmit_(recognizer, data, event) {
    (0, _log.dev)().assert(this.eventing_ == recognizer, 'Recognizer is not currently allowed: %s', recognizer.getType());
    var overserver = this.overservers_[recognizer.getType()];
    if (overserver) {
      overserver.fire(new Gesture(recognizer.getType(), data, Date.now(), event));
    }
  };

  /**
   * @param {!Event} event
   * @private
   */


  Gestures.prototype.afterEvent_ = function afterEvent_(event) {
    var cancelEvent = !!this.eventing_ || this.wasEventing_;
    this.wasEventing_ = false;
    if (!cancelEvent) {
      var now = Date.now();
      for (var i = 0; i < this.recognizers_.length; i++) {
        if (this.ready_[i] || this.pending_[i] && this.pending_[i] >= now) {
          cancelEvent = true;
          break;
        }
      }
    }
    if (cancelEvent) {
      event.stopPropagation();
      if (!this.shouldNotPreventDefault_) {
        event.preventDefault();
      }
    }
    if (this.passAfterEvent_) {
      this.passAfterEvent_ = false;
      this.doPass_();
    }
  };

  /**
   * The pass that decides which recognizers can start emitting and which
   * are canceled.
   * @private
   */


  Gestures.prototype.doPass_ = function doPass_() {
    var now = Date.now();

    // The "most ready" recognizer is the youngest in the "ready" set.
    // Otherwise we wouldn't wait for it at all.
    var readyIndex = -1;
    for (var i = 0; i < this.recognizers_.length; i++) {
      if (!this.ready_[i]) {
        if (this.pending_[i] && this.pending_[i] < now) {
          // Pending state expired. Reset.
          this.stopTracking_(i);
        }
        continue;
      }
      if (readyIndex == -1 || this.ready_[i] > this.ready_[readyIndex]) {
        readyIndex = i;
      }
    }

    if (readyIndex == -1) {
      // Nothing to do.
      return;
    }

    // Look for conflicts.
    var waitTime = 0;
    for (var _i = 0; _i < this.recognizers_.length; _i++) {
      if (this.ready_[_i] || !this.tracking_[_i]) {
        continue;
      }
      waitTime = Math.max(waitTime, this.pending_[_i] - now);
    }

    if (waitTime < 2) {
      // We waited long enough.
      this.startEventing_(readyIndex);
      return;
    }

    // Some conflicts: have to wait to see who wins.
    this.pass_.schedule(waitTime);
  };

  /**
   * This recognizer is given "go ahead" and all others are canceled.
   * @param {number} index
   * @private
   */


  Gestures.prototype.startEventing_ = function startEventing_(index) {
    var recognizer = this.recognizers_[index];
    for (var i = 0; i < this.recognizers_.length; i++) {
      if (i != index) {
        this.cancelEventing_(i);
      }
    }
    this.ready_[index] = 0;
    this.pending_[index] = 0;
    this.eventing_ = recognizer;
    recognizer.acceptStart();
  };

  /**
   * @param {number} index
   * @private
   */


  Gestures.prototype.startTracking_ = function startTracking_(index) {
    this.tracking_[index] = true;
    this.pending_[index] = 0;
  };

  /**
   * @param {number} index
   * @private
   */


  Gestures.prototype.stopTracking_ = function stopTracking_(index) {
    this.tracking_[index] = false;
    this.pending_[index] = 0;
    if (!this.ready_[index]) {
      this.recognizers_[index].acceptCancel();
    }
  };

  /**
   * @param {number} index
   * @private
   */


  Gestures.prototype.cancelEventing_ = function cancelEventing_(index) {
    this.ready_[index] = 0;
    this.stopTracking_(index);
  };

  return Gestures;
}();

/**
 * The gesture recognizer receives the pointer events from Gestures instance.
 * Based on these events, it can "recognize" the gesture it's responsible for,
 * request to start emitting and emit gestures. Gestures instances manages
 * several competing recognizers and decides which ones get to emit gestures
 * and which do not.
 *
 * The recognizer can be in several main states:
 * 1. Tracking state. In this state the recognizer is receiving the series of
 *    touch events from touchstart to touchend. To get into this state the
 *    recognizer has to return "true" from the {@link onTouchStart}.
 * 2. Pending state (optional). The recognizer matched part of the gesture,
 *    but needs more time to get track more events. It requests more time
 *    by calling {@link signalPending}, By the end of this time the recognizer
 *    has either matched the gesture or has been canceled.
 * 3. Ready state. The recognizer matched the whole gesture and ready to start
 *    emitting. It communicates to the Gestures this readiness by calling
 *    {@link signalReady}.
 * 5. Emitting state. If Gestures decides to go ahead with this recognizer, it
 *    will call {@link acceptStart} method. Otherwise, it will call
 *    {@link acceptCancel} method. Once in the emitting state, the recognizer
 *    can emit any number of events by calling {@link signalEmit}.
 * 6. Complete state. Once done, the recognizer can call {@link signalEnd} to
 *    communicate that it's done.
 *
 * @template DATA
 */


var GestureRecognizer = exports.GestureRecognizer = function () {

  /**
   * @param {string} type
   * @param {!Gestures} manager
   */
  function GestureRecognizer(type, manager) {
    _classCallCheck(this, GestureRecognizer);

    /** @private @const {string} */
    this.type_ = type;

    /** @private @const {!Gestures} */
    this.manager_ = manager;
  }

  /**
   * Returns the type of the gesture emitted by the instance of this class.
   * It has to be unique in the scope of the Gestures instance.
   * @return {string}
   */


  GestureRecognizer.prototype.getType = function getType() {
    return this.type_;
  };

  /**
   * The recognizer can call this method to communicate that it's ready to
   * start emitting the gesture. Optionally it can pass a zero, positive or
   * negative offset - a time on how much the gesture should be penalized or
   * given advantage in conflict resolution. The recognizer at this point is
   * in the "ready" state.
   * @param {time} offset
   */


  GestureRecognizer.prototype.signalReady = function signalReady(offset) {
    this.manager_.signalReady_(this, offset);
  };

  /**
   * The recognizer can call this method to communicate that it needs more
   * time (timeLeft) to match the gesture. By the end of this time the
   * recognizer has to either transit to the ready state using
   * {@link signalReady} or it will be canceled. The recognizer is in the
   * "pending" state.
   * @param {time} timeLeft
   */


  GestureRecognizer.prototype.signalPending = function signalPending(timeLeft) {
    this.manager_.signalPending_(this, timeLeft);
  };

  /**
   * The recognizer can call this method to communicate that it's done
   * emitting the gestures. It will return to the waiting state. Recognizer
   * can only call this method if it has previously received the
   * {@link acceptStart} call.
   */


  GestureRecognizer.prototype.signalEnd = function signalEnd() {
    this.manager_.signalEnd_(this);
  };

  /**
   * The recognizer can call this method to emit the gestures while in the
   * "emitting" state. Recognizer can only call this method if it has
   * previously received the {@link acceptStart} call.
   * @param {DATA} data
   * @param {?Event} event
   */


  GestureRecognizer.prototype.signalEmit = function signalEmit(data, event) {
    this.manager_.signalEmit_(this, data, event);
  };

  /**
   * The Gestures instance calls this method to allow the recognizer to start
   * emitting the gestures. At this point the recognizer is in the "emitting"
   * state. It will be in this state until it calls {@link signalEnd} or
   * the {@link acceptCancel} is called by the Gestures instance.
   */


  GestureRecognizer.prototype.acceptStart = function acceptStart() {};

  /**
   * The Gestures instance calls this method to reset the recognizer. At this
   * point the recognizer is in the initial waiting state.
   */


  GestureRecognizer.prototype.acceptCancel = function acceptCancel() {};

  /**
   * The Gestures instance calls this method for each "touchstart" event. If
   * the recognizer wants to receive other touch events in the series, it has
   * to return "true".
   * @param {!Event} unusedEvent
   * @return {boolean}
   */


  GestureRecognizer.prototype.onTouchStart = function onTouchStart(unusedEvent) {
    return false;
  };

  /**
   * The Gestures instance calls this method for each "touchmove" event. If
   * the recognizer wants to continue receiving touch events in the series,
   * it has to return "true".
   * @param {!Event} unusedEvent
   * @return {boolean}
   */


  GestureRecognizer.prototype.onTouchMove = function onTouchMove(unusedEvent) {
    return false;
  };

  /**
   * The Gestures instance calls this method for the "touchend" event.
   * Somewhere within this touch series the recognizer has to call
   * {@link signalReady} or {@link signalPending} or it will be reset for the
   * next touch series.
   * @param {!Event} unusedEvent
   */


  GestureRecognizer.prototype.onTouchEnd = function onTouchEnd(unusedEvent) {};

  return GestureRecognizer;
}();

},{"./log":57,"./observable":61,"./pass":63,"./types":75,"./utils/array":79}],55:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                               * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                               * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                               * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                               * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                               * limitations under the License.
                                                                                                                                                                                                                                                                               */

/**
 * @fileoverview This module declares JSON types as defined in the
 * {@link http://json.org/}.
 */

exports.recreateNonProtoObject = recreateNonProtoObject;
exports.getValueForExpr = getValueForExpr;
exports.parseJson = parseJson;
exports.tryParseJson = tryParseJson;
exports.recursiveEquals = recursiveEquals;

var _types = require('./types');

// NOTE Type are changed to {*} because of
// https://github.com/google/closure-compiler/issues/1999

/**
 * JSON scalar. It's either string, number or boolean.
 * @typedef {*} should be string|number|boolean
 */
var JSONScalarDef = void 0;

/**
 * JSON object. It's a map with string keys and JSON values.
 * @typedef {*} should be !Object<string, ?JSONValueDef>
 */
var JSONObjectDef = void 0;

/**
 * JSON array. It's an array with JSON values.
 * @typedef {*} should be !Array<?JSONValueDef>
 */
var JSONArrayDef = void 0;

/**
 * JSON value. It's either a scalar, an object or an array.
 * @typedef {*} should be !JSONScalarDef|!JSONObjectDef|!JSONArrayDef
 */
var JSONValueDef = void 0;

/**
 * Recreates objects with prototype-less copies.
 * @param {!JsonObject} obj
 * @return {!JsonObject}
 */
function recreateNonProtoObject(obj) {
  var copy = Object.create(null);
  for (var k in obj) {
    if (!hasOwnProperty(obj, k)) {
      continue;
    }
    var v = obj[k];
    copy[k] = (0, _types.isObject)(v) ? recreateNonProtoObject(v) : v;
  }
  return (/** @type {!JsonObject} */copy
  );
}

/**
 * Returns a value from an object for a field-based expression. The expression
 * is a simple nested dot-notation of fields, such as `field1.field2`. If any
 * field in a chain does not exist or is not an object or array, the returned
 * value will be `undefined`.
 *
 * @param {!JsonObject} obj
 * @param {string} expr
 * @return {*}
 */
function getValueForExpr(obj, expr) {
  // The `.` indicates "the object itself".
  if (expr == '.') {
    return obj;
  }
  // Otherwise, navigate via properties.
  var parts = expr.split('.');
  var value = obj;
  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    if (part && value && value[part] !== undefined && hasOwnProperty(value, part)) {
      value = value[part];
      continue;
    }
    value = undefined;
    break;
  }
  return value;
}

/**
 * Simple wrapper around JSON.parse that casts the return value
 * to JsonObject.
 * Create a new wrapper if an array return value is desired.
 * @param {*} json JSON string to parse
 * @return {?JsonObject} May be extend to parse arrays.
 */
function parseJson(json) {
  return (/** @type {?JsonObject} */JSON.parse( /** @type {string} */json)
  );
}

/**
 * Parses the given `json` string without throwing an exception if not valid.
 * Returns `undefined` if parsing fails.
 * Returns the `Object` corresponding to the JSON string when parsing succeeds.
 * @param {*} json JSON string to parse
 * @param {function(!Error)=} opt_onFailed Optional function that will be called
 *     with the error if parsing fails.
 * @return {?JsonObject|undefined} May be extend to parse arrays.
 */
function tryParseJson(json, opt_onFailed) {
  try {
    return parseJson(json);
  } catch (e) {
    if (opt_onFailed) {
      opt_onFailed(e);
    }
    return undefined;
  }
}

/**
 * Recursively checks strict equality of items in nested arrays and objects.
 *
 * @param {JSONValueDef} a
 * @param {JSONValueDef} b
 * @param {number} depth The maximum recursion depth. Must be finite.
 * @return {boolean}
 * @throws {Error} If depth argument is not finite.
 */
function recursiveEquals(a, b) {
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

  if (!isFinite(depth)) {
    throw new Error('depth arg must be finite: ' + depth);
  }
  if (a === b) {
    return true;
  }
  // Only check shallow equality for depth < 1.
  if (depth < 1) {
    return false;
  }
  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== (typeof b === 'undefined' ? 'undefined' : _typeof(b))) {
    return false;
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }
    for (var i = 0; i < a.length; i++) {
      if (!recursiveEquals(a[i], b[i], depth - 1)) {
        return false;
      }
    }
    return true;
  }
  if (a && b && (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object' && (typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') {
    var keysA = Object.keys( /** @type {!Object} */a);
    var keysB = Object.keys( /** @type {!Object} */b);
    if (keysA.length !== keysB.length) {
      return false;
    }
    for (var _i = 0; _i < keysA.length; _i++) {
      var keyA = keysA[_i];
      var valueA = a[keyA];
      var valueB = b[keyA];
      if (!recursiveEquals(valueA, valueB, depth - 1)) {
        return false;
      }
    }
    return true;
  }
  return false;
}

/**
 * @param {*} obj
 * @param {string} key
 * @return {boolean}
 */
function hasOwnProperty(obj, key) {
  if (obj == null || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) != 'object') {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(
  /** @type {!Object} */obj, key);
}

},{"./types":75}],56:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOADING_ELEMENTS_ = exports.naturalDimensions_ = exports.LengthDef = exports.Layout = undefined;
exports.parseLayout = parseLayout;
exports.getLayoutClass = getLayoutClass;
exports.isLayoutSizeDefined = isLayoutSizeDefined;
exports.isInternalElement = isInternalElement;
exports.parseLength = parseLength;
exports.assertLength = assertLength;
exports.assertLengthOrPercent = assertLengthOrPercent;
exports.getLengthUnits = getLengthUnits;
exports.getLengthNumeral = getLengthNumeral;
exports.hasNaturalDimensions = hasNaturalDimensions;
exports.getNaturalDimensions = getNaturalDimensions;
exports.isLoadingAllowed = isLoadingAllowed;
exports.applyStaticLayout = applyStaticLayout;

var _log = require('./log');

var _types = require('./types');

var _style = require('./style');

var _string = require('./string');

/**
 * @enum {string}
 */
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Implements element layout. See https://goo.gl/9avXuT for
 * details.
 */

var Layout = exports.Layout = {
  NODISPLAY: 'nodisplay',
  FIXED: 'fixed',
  FIXED_HEIGHT: 'fixed-height',
  RESPONSIVE: 'responsive',
  CONTAINER: 'container',
  FILL: 'fill',
  FLEX_ITEM: 'flex-item',
  FLUID: 'fluid'
};

/**
 * CSS Length type. E.g. "1px" or "20vh".
 * @typedef {string}
 */
var LengthDef = exports.LengthDef = void 0;

/**
 * @typedef {{
 *   width: string,
 *   height: string
 * }}
 */
var DimensionsDef = void 0;

/**
 * The set of elements with natural dimensions, that is, elements
 * which have a known dimension either based on their value specified here,
 * or, if the value is null, a dimension specific to the browser.
 * `hasNaturalDimensions` checks for membership in this set.
 * `getNaturalDimensions` determines the dimensions for an element in the
 *    set and caches it.
 * @type {!Object<string, ?DimensionsDef>}
 * @private  Visible for testing only!
 */
var naturalDimensions_ = exports.naturalDimensions_ = {
  'AMP-PIXEL': { width: '0px', height: '0px' },
  'AMP-ANALYTICS': { width: '1px', height: '1px' },
  // TODO(dvoytenko): audio should have width:auto.
  'AMP-AUDIO': null,
  'AMP-SOCIAL-SHARE': { width: '60px', height: '44px' }
};

/**
 * Elements that the progess can be shown for. This set has to be externalized
 * since the element's implementation may not be downloaded yet.
 * @enum {boolean}
 * @private  Visible for testing only!
 */
var LOADING_ELEMENTS_ = exports.LOADING_ELEMENTS_ = {
  'AMP-ANIM': true,
  'AMP-BRIGHTCOVE': true,
  'AMP-EMBED': true,
  'AMP-IFRAME': true,
  'AMP-IMG': true,
  'AMP-INSTAGRAM': true,
  'AMP-LIST': true,
  'AMP-OOYALA-PLAYER': true,
  'AMP-PINTEREST': true,
  'AMP-PLAYBUZZ': true,
  'AMP-VIDEO': true,
  'AMP-YOUTUBE': true
};

/**
 * @param {string} s
 * @return {Layout|undefined} Returns undefined in case of failure to parse
 *   the layout string.
 */
function parseLayout(s) {
  for (var k in Layout) {
    if (Layout[k] == s) {
      return Layout[k];
    }
  }
  return undefined;
}

/**
 * @param {!Layout} layout
 * @return {string}
 */
function getLayoutClass(layout) {
  return 'i-amphtml-layout-' + layout;
}

/**
 * Whether an element with this layout inherently defines the size.
 * @param {!Layout} layout
 * @return {boolean}
 */
function isLayoutSizeDefined(layout) {
  return layout == Layout.FIXED || layout == Layout.FIXED_HEIGHT || layout == Layout.RESPONSIVE || layout == Layout.FILL || layout == Layout.FLEX_ITEM || layout == Layout.FLUID;
}

/**
 * Whether the tag is an internal (service) AMP tag.
 * @param {!Node|string} tag
 * @return {boolean}
 */
function isInternalElement(tag) {
  var tagName = typeof tag == 'string' ? tag : tag.tagName;
  return tagName && (0, _string.startsWith)(tagName.toLowerCase(), 'i-');
}

/**
 * Parses the CSS length value. If no units specified, the assumed value is
 * "px". Returns undefined in case of parsing error.
 * @param {string|undefined} s
 * @return {!LengthDef|undefined}
 */
function parseLength(s) {
  if (typeof s == 'number') {
    return s + 'px';
  }
  if (!s) {
    return undefined;
  }
  if (!/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(s)) {
    return undefined;
  }
  if (/^\d+(\.\d+)?$/.test(s)) {
    return s + 'px';
  }
  return s;
}

/**
 * Asserts that the supplied value is a non-percent CSS Length value.
 * @param {!LengthDef|string|null|undefined} length
 * @return {!LengthDef}
 */
function assertLength(length) {
  (0, _log.user)().assert(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(length), 'Invalid length value: %s', length);
  return (/** @type {!LengthDef} */length
  );
}

/**
 * Asserts that the supplied value is a CSS Length value
 * (including percent unit).
 * @param {!LengthDef|string} length
 * @return {!LengthDef}
 */
function assertLengthOrPercent(length) {
  (0, _log.user)().assert(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|%)$/.test(length), 'Invalid length or percent value: %s', length);
  return length;
}

/**
 * Returns units from the CSS length value.
 * @param {!LengthDef|string|null|undefined} length
 * @return {string}
 */
function getLengthUnits(length) {
  assertLength(length);
  (0, _log.dev)().assertString(length);
  var m = (0, _log.user)().assert(length.match(/[a-z]+/i), 'Failed to read units from %s', length);
  return m[0];
}

/**
 * Returns the numeric value of a CSS length value.
 * @param {!LengthDef|string|null|undefined} length
 * @return {number|undefined}
 */
function getLengthNumeral(length) {
  var res = parseFloat(length);
  return (0, _types.isFiniteNumber)(res) ? res : undefined;
}

/**
 * Determines whether the tagName is a known element that has natural dimensions
 * in our runtime or the browser.
 * @param {string} tagName The element tag name.
 * @return {boolean}
 */
function hasNaturalDimensions(tagName) {
  tagName = tagName.toUpperCase();
  return naturalDimensions_[tagName] !== undefined;
}

/**
 * Determines the default dimensions for an element which could vary across
 * different browser implementations, like <audio> for instance.
 * This operation can only be completed for an element whitelisted by
 * `hasNaturalDimensions`.
 * @param {!Element} element
 * @return {DimensionsDef}
 */
function getNaturalDimensions(element) {
  var tagName = element.tagName.toUpperCase();
  (0, _log.dev)().assert(naturalDimensions_[tagName] !== undefined);
  if (!naturalDimensions_[tagName]) {
    var doc = element.ownerDocument;
    var naturalTagName = tagName.replace(/^AMP\-/, '');
    var temp = doc.createElement(naturalTagName);
    // For audio, should no-op elsewhere.
    temp.controls = true;
    (0, _style.setStyles)(temp, {
      position: 'absolute',
      visibility: 'hidden'
    });
    doc.body.appendChild(temp);
    naturalDimensions_[tagName] = {
      width: (temp. /*OK*/offsetWidth || 1) + 'px',
      height: (temp. /*OK*/offsetHeight || 1) + 'px'
    };
    doc.body.removeChild(temp);
  }
  return (/** @type {DimensionsDef} */naturalDimensions_[tagName]
  );
}

/**
 * Whether the loading can be shown for the specified elemeent. This set has
 * to be externalized since the element's implementation may not be
 * downloaded yet.
 * @param {!Element} element.
 * @return {boolean}
 */
function isLoadingAllowed(element) {
  var tagName = element.tagName.toUpperCase();
  if (tagName == 'AMP-AD' || tagName == 'AMP-EMBED') {
    return true;
  }
  return LOADING_ELEMENTS_[tagName] || false;
}

/**
 * Applies layout to the element. Visible for testing only.
 *
 * \   \  /  \  /   / /   \     |   _  \     |  \ |  | |  | |  \ |  |  / _____|
 *  \   \/    \/   / /  ^  \    |  |_)  |    |   \|  | |  | |   \|  | |  |  __
 *   \            / /  /_\  \   |      /     |  . `  | |  | |  . `  | |  | |_ |
 *    \    /\    / /  _____  \  |  |\  \----.|  |\   | |  | |  |\   | |  |__| |
 *     \__/  \__/ /__/     \__\ | _| `._____||__| \__| |__| |__| \__|  \______|
 *
 * The equivalent of this method is used for server-side rendering (SSR) and
 * any changes made to it must be made in coordination with caches that
 * implement SSR. For more information on SSR see bit.ly/amp-ssr.
 *
 * @param {!Element} element
 * @return {!Layout}
 */
function applyStaticLayout(element) {
  // Check if the layout has already been done by server-side rendering. The
  // document may be visible to the user if the boilerplate was removed so
  // please take care in making changes here.
  var completedLayoutAttr = element.getAttribute('i-amphtml-layout');
  if (completedLayoutAttr) {
    var _layout = /** @type {!Layout} */(0, _log.dev)().assert(parseLayout(completedLayoutAttr));
    if (_layout == Layout.RESPONSIVE && element.firstElementChild) {
      // Find sizer, but assume that it might not have been parsed yet.
      element.sizerElement = element.querySelector('i-amphtml-sizer') || undefined;
    } else if (_layout == Layout.NODISPLAY) {
      applyNoDisplayLayout(element);
    }
    return _layout;
  }

  // If the layout was already done by server-side rendering (SSR), then the code
  // below will not run. Any changes below will necessitate a change to SSR and must
  // be coordinated with caches that implement SSR. See bit.ly/amp-ssr.

  // Parse layout from the element.
  var layoutAttr = element.getAttribute('layout');
  var widthAttr = element.getAttribute('width');
  var heightAttr = element.getAttribute('height');
  var sizesAttr = element.getAttribute('sizes');
  var heightsAttr = element.getAttribute('heights');

  // Input layout attributes.
  var inputLayout = layoutAttr ? parseLayout(layoutAttr) : null;
  (0, _log.user)().assert(inputLayout !== undefined, 'Unknown layout: %s', layoutAttr);
  var inputWidth = widthAttr && widthAttr != 'auto' ? parseLength(widthAttr) : widthAttr;
  (0, _log.user)().assert(inputWidth !== undefined, 'Invalid width value: %s', widthAttr);
  var inputHeight = heightAttr && heightAttr != 'fluid' ? parseLength(heightAttr) : heightAttr;
  (0, _log.user)().assert(inputHeight !== undefined, 'Invalid height value: %s', heightAttr);

  // Effective layout attributes. These are effectively constants.
  var width = void 0;
  var height = void 0;
  var layout = void 0;

  // Calculate effective width and height.
  if ((!inputLayout || inputLayout == Layout.FIXED || inputLayout == Layout.FIXED_HEIGHT) && (!inputWidth || !inputHeight) && hasNaturalDimensions(element.tagName)) {
    // Default width and height: handle elements that do not specify a
    // width/height and are defined to have natural browser dimensions.
    var dimensions = getNaturalDimensions(element);
    width = inputWidth || inputLayout == Layout.FIXED_HEIGHT ? inputWidth : dimensions.width;
    height = inputHeight || dimensions.height;
  } else {
    width = inputWidth;
    height = inputHeight;
  }

  // Calculate effective layout.
  if (inputLayout) {
    layout = inputLayout;
  } else if (!width && !height) {
    layout = Layout.CONTAINER;
  } else if (height == 'fluid') {
    layout = Layout.FLUID;
  } else if (height && (!width || width == 'auto')) {
    layout = Layout.FIXED_HEIGHT;
  } else if (height && width && (sizesAttr || heightsAttr)) {
    layout = Layout.RESPONSIVE;
  } else {
    layout = Layout.FIXED;
  }

  // Verify layout attributes.
  if (layout == Layout.FIXED || layout == Layout.FIXED_HEIGHT || layout == Layout.RESPONSIVE) {
    (0, _log.user)().assert(height, 'Expected height to be available: %s', heightAttr);
  }
  if (layout == Layout.FIXED_HEIGHT) {
    (0, _log.user)().assert(!width || width == 'auto', 'Expected width to be either absent or equal "auto" ' + 'for fixed-height layout: %s', widthAttr);
  }
  if (layout == Layout.FIXED || layout == Layout.RESPONSIVE) {
    (0, _log.user)().assert(width && width != 'auto', 'Expected width to be available and not equal to "auto": %s', widthAttr);
  }
  if (layout == Layout.RESPONSIVE) {
    (0, _log.user)().assert(getLengthUnits(width) == getLengthUnits(height), 'Length units should be the same for width and height: %s, %s', widthAttr, heightAttr);
  } else {
    (0, _log.user)().assert(heightsAttr === null, 'Unexpected "heights" attribute for none-responsive layout');
  }

  // Apply UI.
  element.classList.add(getLayoutClass(layout));
  if (isLayoutSizeDefined(layout)) {
    element.classList.add('i-amphtml-layout-size-defined');
  }
  if (layout == Layout.NODISPLAY) {
    // CSS defines layout=nodisplay automatically with `display:none`. Thus
    // no additional styling is needed.
    applyNoDisplayLayout(element);
  } else if (layout == Layout.FIXED) {
    (0, _style.setStyles)(element, {
      width: (0, _log.dev)().assertString(width),
      height: (0, _log.dev)().assertString(height)
    });
  } else if (layout == Layout.FIXED_HEIGHT) {
    (0, _style.setStyle)(element, 'height', (0, _log.dev)().assertString(height));
  } else if (layout == Layout.RESPONSIVE) {
    var sizer = element.ownerDocument.createElement('i-amphtml-sizer');
    (0, _style.setStyles)(sizer, {
      display: 'block',
      paddingTop: getLengthNumeral(height) / getLengthNumeral(width) * 100 + '%'
    });
    element.insertBefore(sizer, element.firstChild);
    element.sizerElement = sizer;
  } else if (layout == Layout.FILL) {
    // Do nothing.
  } else if (layout == Layout.CONTAINER) {
    // Do nothing. Elements themselves will check whether the supplied
    // layout value is acceptable. In particular container is only OK
    // sometimes.
  } else if (layout == Layout.FLEX_ITEM) {
    // Set height and width to a flex item if they exist.
    // The size set to a flex item could be overridden by `display: flex` later.
    if (width) {
      (0, _style.setStyle)(element, 'width', width);
    }
    if (height) {
      (0, _style.setStyle)(element, 'height', height);
    }
  } else if (layout == Layout.FLUID) {
    element.classList.add('i-amphtml-layout-awaiting-size');
    if (width) {
      (0, _style.setStyle)(element, 'width', width);
    }
    (0, _style.setStyle)(element, 'height', 0);
  }
  return layout;
}

/**
 * @param {!Element} element
 */
function applyNoDisplayLayout(element) {
  // TODO(dvoytenko, #9353): once `toggleLayoutDisplay` API has been deployed
  // everywhere, switch all relevant elements to this API. In the meantime,
  // simply unblock display toggling via `style="display: ..."`.
  (0, _style.setStyle)(element, 'display', 'none');
  element.classList.add('i-amphtml-display');
}

},{"./log":57,"./string":73,"./style":74,"./types":75}],57:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Log = exports.LogLevel = exports.USER_ERROR_EMBED_SENTINEL = exports.USER_ERROR_SENTINEL = undefined;
exports.isUserErrorMessage = isUserErrorMessage;
exports.isUserErrorEmbed = isUserErrorEmbed;
exports.setReportError = setReportError;
exports.duplicateErrorIfNecessary = duplicateErrorIfNecessary;
exports.rethrowAsync = rethrowAsync;
exports.initLogConstructor = initLogConstructor;
exports.resetLogConstructorForTesting = resetLogConstructorForTesting;
exports.user = user;
exports.dev = dev;
exports.isFromEmbed = isFromEmbed;

var _mode = require('./mode');

var _modeObject = require('./mode-object');

var _types = require('./types');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */

/**
 * Triple zero width space.
 *
 * This is added to user error messages, so that we can later identify
 * them, when the only thing that we have is the message. This is the
 * case in many browsers when the global exception handler is invoked.
 *
 * @const {string}
 */
var USER_ERROR_SENTINEL = exports.USER_ERROR_SENTINEL = '\u200B\u200B\u200B';

/**
 * Four zero width space.
 *
 * @const {string}
 */
var USER_ERROR_EMBED_SENTINEL = exports.USER_ERROR_EMBED_SENTINEL = '\u200B\u200B\u200B\u200B';

/**
 * @return {boolean} Whether this message was a user error.
 */
function isUserErrorMessage(message) {
  return message.indexOf(USER_ERROR_SENTINEL) >= 0;
}

/**
 * @return {boolean} Whether this message was a a user error from an iframe embed.
 */
function isUserErrorEmbed(message) {
  return message.indexOf(USER_ERROR_EMBED_SENTINEL) >= 0;
}

/**
 * @enum {number}
 * @private Visible for testing only.
 */
var LogLevel = exports.LogLevel = {
  OFF: 0,
  ERROR: 1,
  WARN: 2,
  INFO: 3,
  FINE: 4
};

/**
 * Sets reportError function. Called from error.js to break cyclic
 * dependency.
 * @param {function(*, !Element=)|undefined} fn
 */
function setReportError(fn) {
  self.reportError = fn;
}

/**
 * Logging class.
 * Use of sentinel string instead of a boolean to check user/dev errors
 * because errors could be rethrown by some native code as a new error, and only a message would survive.
 * Also, some browser don’t support a 5th error object argument in window.onerror. List of supporting browser can be found
 * here: https://blog.sentry.io/2016/01/04/client-javascript-reporting-window-onerror.html
 * @final
 * @private Visible for testing only.
 */

var Log = exports.Log = function () {
  /**
   * opt_suffix will be appended to error message to identify the type of the error message.
   * We can't rely on the error object to pass along the type because
   * some browsers do not have this param in its window.onerror API.
   * See: https://blog.sentry.io/2016/01/04/client-javascript-reporting-window-onerror.html
   *
   * @param {!Window} win
   * @param {function(!./mode.ModeDef):!LogLevel} levelFunc
   * @param {string=} opt_suffix
   */
  function Log(win, levelFunc, opt_suffix) {
    _classCallCheck(this, Log);

    /**
     * In tests we use the main test window instead of the iframe where
     * the tests runs because only the former is relayed to the console.
     * @const {!Window}
     */
    this.win = (0, _mode.getMode)().test && win.AMP_TEST_IFRAME ? win.parent : win;

    /** @private @const {function(!./mode.ModeDef):!LogLevel} */
    this.levelFunc_ = levelFunc;

    /** @private @const {!LogLevel} */
    this.level_ = this.calcLevel_();

    /** @private @const {string} */
    this.suffix_ = opt_suffix || '';
  }

  /**
   * @return {!LogLevel}
   * @private
   */


  Log.prototype.calcLevel_ = function calcLevel_() {
    // No console - can't enable logging.
    if (!this.win.console || !this.win.console.log) {
      return LogLevel.OFF;
    }

    // Logging has been explicitly disabled.
    if ((0, _mode.getMode)().log == '0') {
      return LogLevel.OFF;
    }

    // Logging is enabled for tests directly.
    if ((0, _mode.getMode)().test && this.win.ENABLE_LOG) {
      return LogLevel.FINE;
    }

    // LocalDev by default allows INFO level, unless overriden by `#log`.
    if ((0, _mode.getMode)().localDev && !(0, _mode.getMode)().log) {
      return LogLevel.INFO;
    }

    // Delegate to the specific resolver.
    return this.levelFunc_((0, _modeObject.getModeObject)());
  };

  /**
   * @param {string} tag
   * @param {string} level
   * @param {!Array} messages
   */


  Log.prototype.msg_ = function msg_(tag, level, messages) {
    if (this.level_ != LogLevel.OFF) {
      var fn = this.win.console.log;
      if (level == 'ERROR') {
        fn = this.win.console.error || fn;
      } else if (level == 'INFO') {
        fn = this.win.console.info || fn;
      } else if (level == 'WARN') {
        fn = this.win.console.warn || fn;
      }
      if ((0, _mode.getMode)().localDev) {
        messages.unshift('[' + tag + ']');
      }
      fn.apply(this.win.console, messages);
    }
  };

  /**
   * Whether the logging is enabled.
   * @return {boolean}
   */


  Log.prototype.isEnabled = function isEnabled() {
    return this.level_ != LogLevel.OFF;
  };

  /**
   * Reports a fine-grained message.
   * @param {string} tag
   * @param {...*} var_args
   */


  Log.prototype.fine = function fine(tag, var_args) {
    if (this.level_ >= LogLevel.FINE) {
      this.msg_(tag, 'FINE', Array.prototype.slice.call(arguments, 1));
    }
  };

  /**
   * Reports a informational message.
   * @param {string} tag
   * @param {...*} var_args
   */


  Log.prototype.info = function info(tag, var_args) {
    if (this.level_ >= LogLevel.INFO) {
      this.msg_(tag, 'INFO', Array.prototype.slice.call(arguments, 1));
    }
  };

  /**
   * Reports a warning message.
   * @param {string} tag
   * @param {...*} var_args
   */


  Log.prototype.warn = function warn(tag, var_args) {
    if (this.level_ >= LogLevel.WARN) {
      this.msg_(tag, 'WARN', Array.prototype.slice.call(arguments, 1));
    }
  };

  /**
   * Reports an error message. If the logging is disabled, the error is rethrown
   * asynchronously.
   * @param {string} tag
   * @param {...*} var_args
   * @return {!Error|undefined}
   * @private
   */


  Log.prototype.error_ = function error_(tag, var_args) {
    if (this.level_ >= LogLevel.ERROR) {
      this.msg_(tag, 'ERROR', Array.prototype.slice.call(arguments, 1));
    } else {
      var error = createErrorVargs.apply(null, Array.prototype.slice.call(arguments, 1));
      this.prepareError_(error);
      return error;
    }
  };

  /**
   * Reports an error message.
   * @param {string} tag
   * @param {...*} var_args
   * @return {!Error|undefined}
   */


  Log.prototype.error = function error(tag, var_args) {
    var error = this.error_.apply(this, arguments);
    if (error) {
      error.name = tag || error.name;
      // reportError is installed globally per window in the entry point.
      self.reportError(error);
    }
  };

  /**
   * Reports an error message and marks with an expected property. If the
   * logging is disabled, the error is rethrown asynchronously.
   * @param {string} unusedTag
   * @param {...*} var_args
   */


  Log.prototype.expectedError = function expectedError(unusedTag, var_args) {
    var error = this.error_.apply(this, arguments);
    if (error) {
      error.expected = true;
      // reportError is installed globally per window in the entry point.
      self.reportError(error);
    }
  };

  /**
   * Creates an error object.
   * @param {...*} var_args
   * @return {!Error}
   */


  Log.prototype.createError = function createError(var_args) {
    var error = createErrorVargs.apply(null, arguments);
    this.prepareError_(error);
    return error;
  };

  /**
   * Creates an error object with its expected property set to true.
   * @param {...*} var_args
   * @return {!Error}
   */


  Log.prototype.createExpectedError = function createExpectedError(var_args) {
    var error = createErrorVargs.apply(null, arguments);
    this.prepareError_(error);
    error.expected = true;
    return error;
  };

  /**
   * Throws an error if the first argument isn't trueish.
   *
   * Supports argument substitution into the message via %s placeholders.
   *
   * Throws an error object that has two extra properties:
   * - associatedElement: This is the first element provided in the var args.
   *   It can be used for improved display of error messages.
   * - messageArray: The elements of the substituted message as non-stringified
   *   elements in an array. When e.g. passed to console.error this yields
   *   native displays of things like HTML elements.
   *
   * @param {T} shouldBeTrueish The value to assert. The assert fails if it does
   *     not evaluate to true.
   * @param {string=} opt_message The assertion message
   * @param {...*} var_args Arguments substituted into %s in the message.
   * @return {T} The value of shouldBeTrueish.
   * @template T
   */
  /*eslint "google-camelcase/google-camelcase": 0*/


  Log.prototype.assert = function assert(shouldBeTrueish, opt_message, var_args) {
    var firstElement = void 0;
    if (!shouldBeTrueish) {
      var message = opt_message || 'Assertion failed';
      var splitMessage = message.split('%s');
      var first = splitMessage.shift();
      var formatted = first;
      var messageArray = [];
      pushIfNonEmpty(messageArray, first);
      for (var i = 2; i < arguments.length; i++) {
        var val = arguments[i];
        if (val && val.tagName) {
          firstElement = val;
        }
        var nextConstant = splitMessage.shift();
        messageArray.push(val);
        pushIfNonEmpty(messageArray, nextConstant.trim());
        formatted += toString(val) + nextConstant;
      }
      var e = new Error(formatted);
      e.fromAssert = true;
      e.associatedElement = firstElement;
      e.messageArray = messageArray;
      this.prepareError_(e);
      // reportError is installed globally per window in the entry point.
      self.reportError(e);
      throw e;
    }
    return shouldBeTrueish;
  };

  /**
   * Throws an error if the first argument isn't an Element
   *
   * Otherwise see `assert` for usage
   *
   * @param {*} shouldBeElement
   * @param {string=} opt_message The assertion message
   * @return {!Element} The value of shouldBeTrueish.
   * @template T
   */
  /*eslint "google-camelcase/google-camelcase": 2*/


  Log.prototype.assertElement = function assertElement(shouldBeElement, opt_message) {
    var shouldBeTrueish = shouldBeElement && shouldBeElement.nodeType == 1;
    this.assert(shouldBeTrueish, (opt_message || 'Element expected') + ': %s', shouldBeElement);
    return (/** @type {!Element} */shouldBeElement
    );
  };

  /**
   * Throws an error if the first argument isn't a string. The string can
   * be empty.
   *
   * For more details see `assert`.
   *
   * @param {*} shouldBeString
   * @param {string=} opt_message The assertion message
   * @return {string} The string value. Can be an empty string.
   */
  /*eslint "google-camelcase/google-camelcase": 2*/


  Log.prototype.assertString = function assertString(shouldBeString, opt_message) {
    this.assert(typeof shouldBeString == 'string', (opt_message || 'String expected') + ': %s', shouldBeString);
    return (/** @type {string} */shouldBeString
    );
  };

  /**
   * Throws an error if the first argument isn't a number. The allowed values
   * include `0` and `NaN`.
   *
   * For more details see `assert`.
   *
   * @param {*} shouldBeNumber
   * @param {string=} opt_message The assertion message
   * @return {number} The number value. The allowed values include `0`
   *   and `NaN`.
   */


  Log.prototype.assertNumber = function assertNumber(shouldBeNumber, opt_message) {
    this.assert(typeof shouldBeNumber == 'number', (opt_message || 'Number expected') + ': %s', shouldBeNumber);
    return (/** @type {number} */shouldBeNumber
    );
  };

  /**
   * Throws an error if the first argument isn't a boolean.
   *
   * For more details see `assert`.
   *
   * @param {*} shouldBeBoolean
   * @param {string=} opt_message The assertion message
   * @return {boolean} The boolean value.
   */


  Log.prototype.assertBoolean = function assertBoolean(shouldBeBoolean, opt_message) {
    this.assert(!!shouldBeBoolean === shouldBeBoolean, (opt_message || 'Boolean expected') + ': %s', shouldBeBoolean);
    return (/** @type {boolean} */shouldBeBoolean
    );
  };

  /**
   * Asserts and returns the enum value. If the enum doesn't contain such a value,
   * the error is thrown.
   *
   * @param {!Object<T>} enumObj
   * @param {string} s
   * @param {string=} opt_enumName
   * @return T
   * @template T
   */
  /*eslint "google-camelcase/google-camelcase": 2*/


  Log.prototype.assertEnumValue = function assertEnumValue(enumObj, s, opt_enumName) {
    if ((0, _types.isEnumValue)(enumObj, s)) {
      return s;
    }
    this.assert(false, 'Unknown %s value: "%s"', opt_enumName || 'enum', s);
  };

  /**
   * @param {!Error} error
   * @private
   */


  Log.prototype.prepareError_ = function prepareError_(error) {
    error = duplicateErrorIfNecessary(error);
    if (this.suffix_) {
      if (!error.message) {
        error.message = this.suffix_;
      } else if (error.message.indexOf(this.suffix_) == -1) {
        error.message += this.suffix_;
      }
    } else if (isUserErrorMessage(error.message)) {
      error.message = error.message.replace(USER_ERROR_SENTINEL, '');
    }
  };

  return Log;
}();

/**
 * @param {string|!Element} val
 * @return {string}
 */


function toString(val) {
  // Do check equivalent to `val instanceof Element` without cross-window bug
  if (val && val.nodeType == 1) {
    return val.tagName.toLowerCase() + (val.id ? '#' + val.id : '');
  }
  return (/** @type {string} */val
  );
}

/**
 * @param {!Array} array
 * @param {*} val
 */
function pushIfNonEmpty(array, val) {
  if (val != '') {
    array.push(val);
  }
}

/**
 * Some exceptions (DOMException, namely) have read-only message.
 * @param {!Error} error
 * @return {!Error};
 */
function duplicateErrorIfNecessary(error) {
  var message = error.message;
  var test = String(Math.random());
  error.message = test;

  if (error.message === test) {
    error.message = message;
    return error;
  }

  var e = new Error(error.message);
  // Copy all the extraneous things we attach.
  for (var prop in error) {
    e[prop] = error[prop];
  }
  // Ensure these are copied.
  e.stack = error.stack;
  return e;
}

/**
 * @param {...*} var_args
 * @return {!Error}
 * @private
 */
function createErrorVargs(var_args) {
  var error = null;
  var message = '';
  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (arg instanceof Error && !error) {
      error = duplicateErrorIfNecessary(arg);
    } else {
      if (message) {
        message += ' ';
      }
      message += arg;
    }
  }

  if (!error) {
    error = new Error(message);
  } else if (message) {
    error.message = message + ': ' + error.message;
  }
  return error;
}

/**
 * Rethrows the error without terminating the current context. This preserves
 * whether the original error designation is a user error or a dev error.
 * @param {...*} var_args
 */
function rethrowAsync(var_args) {
  var error = createErrorVargs.apply(null, arguments);
  setTimeout(function () {
    // reportError is installed globally per window in the entry point.
    self.reportError(error);
    throw error;
  });
}

/**
 * Cache for logs. We do not use a Service since the service module depends
 * on Log and closure literally can't even.
 * @type {{user: ?Log, dev: ?Log, userForEmbed: ?Log}}
 */
self.log = self.log || {
  user: null,
  dev: null,
  userForEmbed: null
};

var logs = self.log;

/**
 * Eventually holds a constructor for Log objects. Lazily initialized, so we
 * can avoid ever referencing the real constructor except in JS binaries
 * that actually want to include the implementation.
 * @type {?Function}
 */
var logConstructor = null;

function initLogConstructor() {
  logConstructor = Log;
  // Initialize instances for use. If a binary (an extension for example) that
  // does not call `initLogConstructor` invokes `dev()` or `user()` earlier
  // than the binary that does call `initLogConstructor` (amp.js), the extension
  // will throw an error as that extension will never be able to initialize
  // the log instances and we also don't want it to call `initLogConstructor`
  // either (since that will cause the Log implementation to be bundled into that
  // binary). So we must initialize the instances eagerly so that they are
  // ready for use (stored globally) after the main binary calls
  // `initLogConstructor`.
  dev();
  user();
}

function resetLogConstructorForTesting() {
  logConstructor = null;
}

/**
 * Publisher level log.
 *
 * Enabled in the following conditions:
 *  1. Not disabled using `#log=0`.
 *  2. Development mode is enabled via `#development=1` or logging is explicitly
 *     enabled via `#log=D` where D >= 1.
 *
 * @param {!Element=} opt_element
 * @return {!Log}
 */
function user(opt_element) {
  if (!logs.user) {
    logs.user = getUserLogger(USER_ERROR_SENTINEL);
  }
  if (!isFromEmbed(logs.user.win, opt_element)) {
    return logs.user;
  } else {
    if (logs.userForEmbed) {
      return logs.userForEmbed;
    }
    return logs.userForEmbed = getUserLogger(USER_ERROR_EMBED_SENTINEL);
  }
}

/**
 * Getter for user logger
 * @param {string=} suffix
 * @returns {!Log}
 */
function getUserLogger(suffix) {
  if (!logConstructor) {
    throw new Error('failed to call initLogConstructor');
  }
  return new logConstructor(self, function (mode) {
    var logNum = parseInt(mode.log, 10);
    if (mode.development || logNum >= 1) {
      return LogLevel.FINE;
    }
    return LogLevel.WARN;
  }, suffix);
}

/**
 * AMP development log. Calls to `devLog().assert` and `dev.fine` are stripped in
 * the PROD binary. However, `devLog().assert` result is preserved in either case.
 *
 * Enabled in the following conditions:
 *  1. Not disabled using `#log=0`.
 *  2. Logging is explicitly enabled via `#log=D`, where D >= 2.
 *
 * @return {!Log}
 */
function dev() {
  if (logs.dev) {
    return logs.dev;
  }
  if (!logConstructor) {
    throw new Error('failed to call initLogConstructor');
  }
  return logs.dev = new logConstructor(self, function (mode) {
    var logNum = parseInt(mode.log, 10);
    if (logNum >= 3) {
      return LogLevel.FINE;
    }
    if (logNum >= 2) {
      return LogLevel.INFO;
    }
    return LogLevel.OFF;
  });
}

/**
 * @param {!Window} win
 * @param {!Element=} opt_element
 * @returns {boolean} isEmbed
 */
function isFromEmbed(win, opt_element) {
  if (!opt_element) {
    return false;
  }
  return opt_element.ownerDocument.defaultView != win;
}

},{"./mode":59,"./mode-object":58,"./types":75}],58:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getModeObject = getModeObject;

var _mode = require('./mode');

/**
 * Provides info about the current app. This return value may be cached and
 * passed around as it will always be DCE'd.
 * @param {?Window=} opt_win
 * @return {!./mode.ModeDef}
 */
function getModeObject(opt_win) {
  return {
    localDev: (0, _mode.getMode)(opt_win).localDev,
    development: (0, _mode.getMode)(opt_win).development,
    filter: (0, _mode.getMode)(opt_win).filter,
    minified: (0, _mode.getMode)(opt_win).minified,
    lite: (0, _mode.getMode)(opt_win).lite,
    test: (0, _mode.getMode)(opt_win).test,
    log: (0, _mode.getMode)(opt_win).log,
    version: (0, _mode.getMode)(opt_win).version,
    rtvVersion: (0, _mode.getMode)(opt_win).rtvVersion
  };
} /**
   * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS-IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

},{"./mode":59}],59:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModeDef = undefined;
exports.getMode = getMode;
exports.getRtvVersionForTesting = getRtvVersionForTesting;
exports.resetRtvVersionForTesting = resetRtvVersionForTesting;

var _urlParseQueryString = require('./url-parse-query-string');

/**
 * @typedef {{
 *   localDev: boolean,
 *   development: boolean,
 *   filter: (string|undefined),
 *   minified: boolean,
 *   lite: boolean,
 *   test: boolean,
 *   log: (string|undefined),
 *   version: string,
 *   rtvVersion: string,
 * }}
 */
var ModeDef = exports.ModeDef = void 0;

/** @type {string} */
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var version = '1520463365536';

/**
 * `rtvVersion` is the prefixed version we serve off of the cdn.
 * The prefix denotes canary(00) or prod(01) or an experiment version ( > 01).
 * @type {string}
 */
var rtvVersion = '';

/**
 * Provides info about the current app.
 * @param {?Window=} opt_win
 * @return {!ModeDef}
 */
function getMode(opt_win) {
  var win = opt_win || self;
  if (win.AMP_MODE) {
    return win.AMP_MODE;
  }
  return win.AMP_MODE = getMode_(win);
}

/**
 * Provides info about the current app.
 * @param {!Window} win
 * @return {!ModeDef}
 */
function getMode_(win) {
  // Magic constants that are replaced by closure compiler.
  // IS_MINIFIED is always replaced with true when closure compiler is used
  // while IS_DEV is only replaced when `gulp dist` is called without the
  // --fortesting flag.
  var IS_DEV = true;
  var IS_MINIFIED = false;

  var localDevEnabled = !!(self.AMP_CONFIG && self.AMP_CONFIG.localDev);
  var runningTests = IS_DEV && !!(win.AMP_TEST || win.__karma__);
  var isLocalDev = IS_DEV && (localDevEnabled || runningTests);
  var hashQuery = (0, _urlParseQueryString.parseQueryString_)(
  // location.originalHash is set by the viewer when it removes the fragment
  // from the URL.
  win.location.originalHash || win.location.hash);

  var searchQuery = (0, _urlParseQueryString.parseQueryString_)(win.location.search);

  if (!rtvVersion) {
    rtvVersion = getRtvVersion(win, isLocalDev);
  }

  // The `minified`, `test` and `localDev` properties are replaced
  // as boolean literals when we run `gulp dist` without the `--fortesting`
  // flags. This improved DCE on the production file we deploy as the code
  // paths for localhost/testing/development are eliminated.
  return {
    localDev: isLocalDev,
    // Triggers validation
    development: !!(hashQuery['development'] == '1' || win.AMP_DEV_MODE),
    examiner: hashQuery['development'] == '2',
    // Allows filtering validation errors by error category. For the
    // available categories, see ErrorCategory in validator/validator.proto.
    filter: hashQuery['filter'],
    minified: IS_MINIFIED,
    // Whether document is in an amp-lite viewer. It signal that the user
    // would prefer to use less bandwidth.
    lite: searchQuery['amp_lite'] != undefined,
    test: runningTests,
    log: hashQuery['log'],
    version: version,
    rtvVersion: rtvVersion
  };
}

/**
 * Retrieve the `rtvVersion` which will have a numeric prefix
 * denoting canary/prod/experiment (unless `isLocalDev` is true).
 *
 * @param {!Window} win
 * @param {boolean} isLocalDev
 * @return {string}
 */
function getRtvVersion(win, isLocalDev) {
  // If it's local dev then we won't actually have a full version so
  // just use the version.
  if (isLocalDev) {
    return version;
  }

  if (win.AMP_CONFIG && win.AMP_CONFIG.v) {
    return win.AMP_CONFIG.v;
  }

  // Currently `1520463365536` and thus `mode.version` contain only
  // major version. The full version however must also carry the minor version.
  // We will default to production default `01` minor version for now.
  // TODO(erwinmombay): decide whether 1520463365536 should contain
  // minor version.
  return '01' + version;
}

/**
 * @param {!Window} win
 * @param {boolean} isLocalDev
 * @return {string}
 * @visibleForTesting
 */
function getRtvVersionForTesting(win, isLocalDev) {
  return getRtvVersion(win, isLocalDev);
}

/** @visibleForTesting */
function resetRtvVersionForTesting() {
  rtvVersion = '';
}

},{"./url-parse-query-string":76}],60:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Motion = undefined;
exports.calcVelocity = calcVelocity;
exports.continueMotion = continueMotion;

var _services = require('./services');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */

/** @const {function()} */
var NOOP_CALLBACK_ = function NOOP_CALLBACK_() {};

/** @const {number} */
var MIN_VELOCITY_ = 0.02;

/** @const {number} */
var FRAME_CONST_ = 16.67;

/** @const {number} */
var EXP_FRAME_CONST_ = Math.round(-FRAME_CONST_ / Math.log(0.95));

/**
 * Depreciation factor of 1/100 of a millisecond. This is how much previous
 * velocity is depreciated when calculating the new velocity.
 * @const {number}
 */
var VELOCITY_DEPR_FACTOR_ = FRAME_CONST_ * 2;

/**
 * Calculates velocity for an object traveling the distance deltaV in the
 * time deltaTime given the previous velocity prevVelocity. The calculation
 * assumes a basic informational depreciation of previous velocity.
 * @param {number} deltaV
 * @param {time} deltaTime
 * @param {number} prevVelocity
 * @return {number}
 */
function calcVelocity(deltaV, deltaTime, prevVelocity) {
  if (deltaTime < 1) {
    deltaTime = 1;
  }

  // Calculate speed and speed depreciation.
  var speed = deltaV / deltaTime;

  // Depreciation is simply an informational quality. It basically means:
  // we can't ignore the velocity we knew recently, but we'd only consider
  // it proportionally to how long ago we've seen it. Currently, this
  // depreciation factor is 1/100 of a millisecond. New average velocity is
  // calculated by weighing toward the new velocity and away from old
  // velocity based on the depreciation.
  var depr = 0.5 + Math.min(deltaTime / VELOCITY_DEPR_FACTOR_, 0.5);
  return speed * depr + prevVelocity * (1 - depr);
}

/**
 * Returns a motion process that will yield when the velocity has run down to
 * zerp. For each iteration, the velocity is depreciated and the coordinates
 * are advanced from start X/Y to the destination according to velocity
 * vectors. For each such iteration the callback is called with the new x and y.
 * @param {!Node} contextNode
 * @param {number} startX Start X coordinate.
 * @param {number} startY Start Y coordinate.
 * @param {number} veloX Starting X velocity.
 * @param {number} veloY Starting Y velocity.
 * @param {function(number, number):boolean} callback The callback for each
 *   step of the deceleration motion.
 * @param {!./service/vsync-impl.Vsync=} opt_vsync Mostly for testing only.
 * @return {!Motion}
 */
function continueMotion(contextNode, startX, startY, veloX, veloY, callback, opt_vsync) {
  return new Motion(contextNode, startX, startY, veloX, veloY, callback, opt_vsync).start_();
}

/**
 * Motion process that allows tracking and monitoring of the running motion.
 * Most importantly it exposes methods "then" and "thenAlways" that have the
 * semantics of a Promise and signal when the motion has completed or failed.
 * Additionally, it exposes the method "halt" which allows to stop/reset the
 * motion.
 * @implements {IThenable}
 */

var Motion = exports.Motion = function () {
  /**
   * @param {!Node} contextNode Context node.
   * @param {number} startX Start X coordinate.
   * @param {number} startY Start Y coordinate.
   * @param {number} veloX Starting X velocity.
   * @param {number} veloY Starting Y velocity.
   * @param {function(number, number):boolean} callback The callback for each
   *   step of the deceleration motion.
   * @param {!./service/vsync-impl.Vsync=} opt_vsync
   */
  function Motion(contextNode, startX, startY, veloX, veloY, callback, opt_vsync) {
    var _this = this;

    _classCallCheck(this, Motion);

    /** @private @const {!./service/vsync-impl.Vsync} */
    this.vsync_ = opt_vsync || _services.Services.vsyncFor(self);

    /** @private @const {!Node} */
    this.contextNode_ = contextNode;

    /** @private @const */
    this.callback_ = callback;

    /** @private {number} */
    this.lastX_ = startX;

    /** @private {number} */
    this.lastY_ = startY;

    /** @private {number} */
    this.maxVelocityX_ = veloX;

    /** @private {number} */
    this.maxVelocityY_ = veloY;

    /** @private {number} */
    this.velocityX_ = 0;

    /** @private {number} */
    this.velocityY_ = 0;

    /** @private {time} */
    this.startTime_ = Date.now();

    /** @private {time} */
    this.lastTime_ = this.startTime_;

    /** @private {!Function} */
    this.resolve_;

    /** @private {!Function} */
    this.reject_;

    /** @private {!Promise} */
    this.promise_ = new Promise(function (resolve, reject) {
      _this.resolve_ = resolve;
      _this.reject_ = reject;
    });

    /** @private {boolean} */
    this.continuing_ = false;
  }

  /** @private */


  Motion.prototype.start_ = function start_() {
    this.continuing_ = true;
    if (Math.abs(this.maxVelocityX_) <= MIN_VELOCITY_ && Math.abs(this.maxVelocityY_) <= MIN_VELOCITY_) {
      this.fireMove_();
      this.completeContinue_(true);
    } else {
      this.runContinuing_();
    }
    return this;
  };

  /**
   * Halts the motion. The motion promise will be rejected since the motion
   * has been interrupted.
   */


  Motion.prototype.halt = function halt() {
    if (this.continuing_) {
      this.completeContinue_(false);
    }
  };

  /**
   * Chains to the motion's promise that will resolve when the motion has
   * completed or will reject if motion has failed or was interrupted.
   * @override
   */


  Motion.prototype.then = function then(opt_resolve, opt_reject) {
    if (!opt_resolve && !opt_reject) {
      return this.promise_;
    }
    return this.promise_.then(opt_resolve, opt_reject);
  };

  /**
   * Callback for regardless whether the motion succeeds or fails.
   * @param {function()=} opt_callback
   * @return {!Promise}
   */


  Motion.prototype.thenAlways = function thenAlways(opt_callback) {
    var callback = opt_callback || NOOP_CALLBACK_;
    return (/** @type {!Promise} */this.then(callback, callback)
    );
  };

  /**
   * @return {!Promise}
   * @private
   */


  Motion.prototype.runContinuing_ = function runContinuing_() {
    this.velocityX_ = this.maxVelocityX_;
    this.velocityY_ = this.maxVelocityY_;
    var boundStep = this.stepContinue_.bind(this);
    var boundComplete = this.completeContinue_.bind(this, true);
    return this.vsync_.runAnimMutateSeries(this.contextNode_, boundStep, 5000).then(boundComplete, boundComplete);
  };

  /**
   * Returns "true" to continue and "false" to stop motion process.
   * @param {time} timeSinceStart
   * @param {time} timeSincePrev
   * @return {boolean}
   * @private
   */


  Motion.prototype.stepContinue_ = function stepContinue_(timeSinceStart, timeSincePrev) {
    if (!this.continuing_) {
      return false;
    }

    this.lastTime_ = Date.now();
    this.lastX_ += timeSincePrev * this.velocityX_;
    this.lastY_ += timeSincePrev * this.velocityY_;
    if (!this.fireMove_()) {
      return false;
    }

    var decel = Math.exp(-timeSinceStart / EXP_FRAME_CONST_);
    this.velocityX_ = this.maxVelocityX_ * decel;
    this.velocityY_ = this.maxVelocityY_ * decel;
    return Math.abs(this.velocityX_) > MIN_VELOCITY_ || Math.abs(this.velocityY_) > MIN_VELOCITY_;
  };

  /**
   * @param {boolean} success
   * @private
   */


  Motion.prototype.completeContinue_ = function completeContinue_(success) {
    if (!this.continuing_) {
      return;
    }
    this.continuing_ = false;
    this.lastTime_ = Date.now();
    this.fireMove_();
    if (success) {
      this.resolve_();
    } else {
      this.reject_();
    }
  };

  /** @private */


  Motion.prototype.fireMove_ = function fireMove_() {
    return this.callback_(this.lastX_, this.lastY_);
  };

  return Motion;
}();

},{"./services":72}],61:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This class helps to manage observers. Observers can be added, removed or
 * fired through and instance of this class.
 * @template TYPE
 */
var Observable = exports.Observable = function () {
  function Observable() {
    _classCallCheck(this, Observable);

    /** @type {?Array<function(TYPE)>} */
    this.handlers_ = null;
  }

  /**
   * Adds the observer to this instance.
   * @param {function(TYPE)} handler Observer's handler.
   * @return {!UnlistenDef}
   */


  Observable.prototype.add = function add(handler) {
    var _this = this;

    if (!this.handlers_) {
      this.handlers_ = [];
    }
    this.handlers_.push(handler);
    return function () {
      _this.remove(handler);
    };
  };

  /**
   * Removes the observer from this instance.
   * @param {function(TYPE)} handler Observer's instance.
   */


  Observable.prototype.remove = function remove(handler) {
    if (!this.handlers_) {
      return;
    }
    var index = this.handlers_.indexOf(handler);
    if (index > -1) {
      this.handlers_.splice(index, 1);
    }
  };

  /**
   * Removes all observers.
   */


  Observable.prototype.removeAll = function removeAll() {
    if (!this.handlers_) {
      return;
    }
    this.handlers_.length = 0;
  };

  /**
   * Fires an event. All observers are called.
   * @param {TYPE=} opt_event
   */


  Observable.prototype.fire = function fire(opt_event) {
    if (!this.handlers_) {
      return;
    }
    var handlers = this.handlers_;
    for (var i = 0; i < handlers.length; i++) {
      var handler = handlers[i];
      handler(opt_event);
    }
  };

  /**
   * Returns number of handlers. Mostly needed for tests.
   * @return {number}
   */


  Observable.prototype.getHandlerCount = function getHandlerCount() {
    if (!this.handlers_) {
      return 0;
    }
    return this.handlers_.length;
  };

  return Observable;
}();

},{}],62:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OriginExperiments = undefined;

var _bytes = require('./utils/bytes');

var _url = require('./url');

var _json = require('./json');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */

/**
 * Generates, signs and verifies origin experiments.
 */
var OriginExperiments = exports.OriginExperiments = function () {
  /**
   * @param {!./service/crypto-impl.Crypto} crypto
   */
  function OriginExperiments(crypto) {
    _classCallCheck(this, OriginExperiments);

    /** @private {!./service/crypto-impl.Crypto} */
    this.crypto_ = crypto;
  }

  /**
   * Generates an RSA public/private key pair for signing and verifying.
   * @return {!Promise}
   */


  OriginExperiments.prototype.generateKeys = function generateKeys() {
    var generationAlgo = Object.assign({
      modulusLength: 2048,
      publicExponent: Uint8Array.of(1, 0, 1)
    }, this.crypto_.pkcsAlgo);
    return this.crypto_.subtle.generateKey(
    /** @type {{name: string}} */generationAlgo,
    /* extractable */true,
    /* keyUsages */['sign', 'verify']);
  };

  /**
   * Generates an origin experiment token given a config json.
   * @param {number} version
   * @param {!JsonObject} json
   * @param {!webCrypto.CryptoKey} privateKey
   * @return {!Promise<string>}
   */


  OriginExperiments.prototype.generateToken = function generateToken(version, json, privateKey) {
    var _this = this;

    var config = (0, _bytes.stringToBytes)(JSON.stringify(json));
    var data = this.prepend_(version, config);
    return this.sign_(data, privateKey).then(function (signature) {
      return _this.append_(data, new Uint8Array(signature));
    });
  };

  /**
   * Verifies an origin experiment token given a public key.
   * @param {string} token
   * @param {!Location} location
   * @param {!webCrypto.CryptoKey} publicKey
   * @return {!Promise<string>} If token is valid, resolves with the
   *     experiment ID. Otherwise, rejects with validation error.
   */


  OriginExperiments.prototype.verifyToken = function verifyToken(token, location, publicKey) {
    var _this2 = this;

    return new Promise(function (resolve) {
      var i = 0;
      var bytes = (0, _bytes.stringToBytes)(atob(token));

      // Parse version.
      var version = bytes[i];
      if (version !== 0) {
        throw new Error('Unrecognized token version: ' + version);
      }
      i += 1;

      // Parse config length.
      var length = new DataView(bytes.buffer).getUint32(i);
      i += 4; // Number of bytes in Uint32 config length.
      if (length > bytes.length - i) {
        throw new Error('Unexpected config length: ' + length);
      }

      // Parse config itself.
      var configBytes = bytes.subarray(i, i + length);
      i += length;

      // Parse unsigned data and its signature.
      var data = bytes.subarray(0, i);
      var signature = bytes.subarray(i);

      resolve(_this2.verify_(signature, data, publicKey).then(function (verified) {
        if (!verified) {
          throw new Error('Failed to verify token signature.');
        }
        // Convert config from bytes to JS object.
        var configStr = (0, _bytes.bytesToString)(configBytes);
        var config = (0, _json.parseJson)(configStr);

        // Check token experiment origin against `location`.
        var approvedOrigin = (0, _url.parseUrl)(config['origin']).origin;
        var sourceOrigin = (0, _url.getSourceOrigin)(location);
        if (approvedOrigin !== sourceOrigin) {
          throw new Error('Config origin (' + approvedOrigin + ') does not match ' + ('window (' + sourceOrigin + ').'));
        }

        // Check token expiration date.
        var experimentId = config['experiment'];
        var expiration = config['expiration'];
        if (expiration >= Date.now()) {
          return experimentId;
        } else {
          throw new Error('Experiment "' + experimentId + '" has expired.');
        }
      }));
    });
  };

  /**
   * Returns a byte array: (version + config.length + config)
   * @param {number} version
   * @param {!Uint8Array} config
   * @return {!Uint8Array}
   */


  OriginExperiments.prototype.prepend_ = function prepend_(version, config) {
    var data = new Uint8Array(config.length + 5);
    data[0] = version;
    // Insert config length into bytes 1 through 5.
    new DataView(data.buffer).setUint32(1, config.length, false);
    data.set(config, 5);
    return data;
  };

  /**
   * Returns base64(data + signature).
   * @param {!Uint8Array} data
   * @param {!Uint8Array} signature
   * @return {string}
   */


  OriginExperiments.prototype.append_ = function append_(data, signature) {
    var string = (0, _bytes.bytesToString)(data) + (0, _bytes.bytesToString)(signature);
    return btoa(string);
  };

  /**
   * Wraps SubtleCrypto.sign().
   * @param {!Uint8Array} data
   * @param {!webCrypto.CryptoKey} privateKey
   * @return {!Promise}
   */


  OriginExperiments.prototype.sign_ = function sign_(data, privateKey) {
    return this.crypto_.subtle.sign(this.crypto_.pkcsAlgo, privateKey, data);
  };

  /**
   * Wraps SubtleCrypto.verify().
   * @param {!Uint8Array} signature
   * @param {!Uint8Array} data
   * @param {!webCrypto.CryptoKey} publicKey
   * @return {!Promise<boolean>}
   */


  OriginExperiments.prototype.verify_ = function verify_(signature, data, publicKey) {
    return this.crypto_.verifyPkcs(publicKey, signature, data);
  };

  return OriginExperiments;
}();

},{"./json":55,"./url":78,"./utils/bytes":80}],63:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pass = undefined;

var _services = require('./services');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */

/**
 * Pass class helps to manage single-pass process. A pass is scheduled using
 * delay method. Only one pass can be pending at a time. If no pass is pending
 * the process is considered to be "idle".
 */
var Pass = exports.Pass = function () {

  /**
   * Creates a new Pass instance.
   * @param {!Window} win
   * @param {function()} handler Handler to be executed when pass is triggered.
   * @param {number=} opt_defaultDelay Default delay to be used when schedule
   *   is called without one.
   */
  function Pass(win, handler, opt_defaultDelay) {
    var _this = this;

    _classCallCheck(this, Pass);

    this.timer_ = _services.Services.timerFor(win);

    /** @private @const {function()} */
    this.handler_ = handler;

    /** @private @const {number} */
    this.defaultDelay_ = opt_defaultDelay || 0;

    /** @private {number|string} */
    this.scheduled_ = -1;

    /** @private {number} */
    this.nextTime_ = 0;

    /** @private {boolean} */
    this.running_ = false;

    /** @private @const {!Function} */
    this.boundPass_ = function () {
      return _this.pass_();
    };
  }

  /**
   * Whether or not a pass is currently pending.
   * @return {boolean}
   */


  Pass.prototype.isPending = function isPending() {
    return this.scheduled_ != -1;
  };

  /**
   * Tries to schedule a new pass optionally with specified delay. If the new
   * requested pass is requested before the pending pass, the pending pass is
   * canceled. If the new pass is requested after the pending pass, the newly
   * requested pass is ignored.
   *
   * Returns {@code true} if the pass has been scheduled and {@code false} if
   * ignored.
   *
   * @param {number=} opt_delay Delay to schedule the pass. If not specified
   *   the default delay is used, falling back to 0.
   * @return {boolean}
   */


  Pass.prototype.schedule = function schedule(opt_delay) {
    var delay = opt_delay || this.defaultDelay_;
    if (this.running_ && delay < 10) {
      // If we get called recursively, wait at least 10ms for the next
      // execution.
      delay = 10;
    }

    var nextTime = Date.now() + delay;
    // Schedule anew if nothing is scheduled currently or if the new time is
    // sooner then previously requested.
    if (!this.isPending() || nextTime - this.nextTime_ < -10) {
      this.cancel();
      this.nextTime_ = nextTime;
      this.scheduled_ = this.timer_.delay(this.boundPass_, delay);

      return true;
    }

    return false;
  };

  Pass.prototype.pass_ = function pass_() {
    this.scheduled_ = -1;
    this.nextTime_ = 0;
    this.running_ = true;
    this.handler_();
    this.running_ = false;
  };

  /**
   * Cancels the pending pass if any.
   */


  Pass.prototype.cancel = function cancel() {
    if (this.isPending()) {
      this.timer_.cancel(this.scheduled_);
      this.scheduled_ = -1;
    }
  };

  return Pass;
}();

},{"./services":72}],64:[function(require,module,exports){
var _mode = require('./mode');

var _arrayIncludes = require('./polyfills/array-includes');

var _domtokenlistToggle = require('./polyfills/domtokenlist-toggle');

var _documentContains = require('./polyfills/document-contains');

var _mathSign = require('./polyfills/math-sign');

var _objectAssign = require('./polyfills/object-assign');

var _promise = require('./polyfills/promise');

var _documentRegisterElement = require('document-register-element/build/document-register-element.node');

var _documentRegisterElement2 = _interopRequireDefault(_documentRegisterElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  Only install in closure binary and not in babel/browserify binary, since in
  the closure binary we strip out the `document-register-element` install side
  effect so we can tree shake the dependency correctly and we have to make
  sure to not `install` it during dev since the `install` is done as a side
  effect in importing the module.
*/
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

if (!(0, _mode.getMode)().localDev) {
  (0, _documentRegisterElement2.default)(self, 'auto');
}
// Importing the document-register-element module has the side effect
// of installing the custom elements polyfill if necessary.

(0, _domtokenlistToggle.install)(self);
(0, _mathSign.install)(self);
(0, _objectAssign.install)(self);
(0, _promise.install)(self);
(0, _documentContains.install)(self);
(0, _arrayIncludes.install)(self);

},{"./mode":59,"./polyfills/array-includes":65,"./polyfills/document-contains":66,"./polyfills/domtokenlist-toggle":67,"./polyfills/math-sign":68,"./polyfills/object-assign":69,"./polyfills/promise":70,"document-register-element/build/document-register-element.node":40}],65:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = install;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns true if the element is in the array and false otherwise.
 *
 * @param {*} value
 * @param {number=} opt_fromIndex
 * @return {boolean}
 * @this {Array}
 */
function includes(value, opt_fromIndex) {
  var fromIndex = opt_fromIndex || 0;
  var len = this.length;
  var i = fromIndex >= 0 ? fromIndex : Math.max(len + fromIndex, 0);
  for (; i < len; i++) {
    var other = this[i];
    // If value has been found OR (value is NaN AND other is NaN)
    /*eslint "no-self-compare": 0*/
    if (other === value || value !== value && other !== other) {
      return true;
    }
  }
  return false;
}

/**
* Sets the Array.contains polyfill if it does not exist.
* @param {!Window} win
*/
function install(win) {
  if (!win.Array.prototype.includes) {
    win.Object.defineProperty(Array.prototype, 'includes', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: includes
    });
  }
}

},{}],66:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = install;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Polyfill for `document.contains()` method. Notice that according to spec
 * `document.contains` is inclusionary.
 * See https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
 * @param {?Node} node
 * @return {boolean}
 * @this {Node}
 */
function documentContainsPolyfill(node) {
  // Per spec, "contains" method is inclusionary
  // i.e. `node.contains(node) == true`. However, we still need to test
  // equality to the document itself.
  return node == this || this.documentElement.contains(node);
}

/**
 * Polyfills `HTMLDocument.contains` API.
 * @param {!Window} win
 */
function install(win) {
  // HTMLDocument is undefined in Internet Explorer 10, but it has Document,
  // so we use that as a fallback.
  var documentClass = win.HTMLDocument || win.Document;
  if (!documentClass.prototype.contains) {
    win.Object.defineProperty(documentClass.prototype, 'contains', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: documentContainsPolyfill
    });
  }
}

},{}],67:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = install;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Polyfill for `DOMTokenList.prototype.toggle(token, opt_force)` method.
 * This is specially important because IE does not support `opt_force` attribute.
 * See https://goo.gl/hgKNYY for details.
 * @param {string} token
 * @param {boolean=} opt_force
 * @this {DOMTokenList}
 * @return {boolean}
 */
function domTokenListTogglePolyfill(token, opt_force) {
  var remove = opt_force === undefined ? this.contains(token) : !opt_force;
  if (remove) {
    this.remove(token);
    return false;
  } else {
    this.add(token);
    return true;
  }
}

/**
 * Polyfills `DOMTokenList.prototype.toggle` API in IE.
 * @param {!Window} win
 */
function install(win) {
  if (isIe(win) && win.DOMTokenList) {
    win.Object.defineProperty(win.DOMTokenList.prototype, 'toggle', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: domTokenListTogglePolyfill
    });
  }
}

/**
 * Whether the current browser is a IE browser.
 * @param {!Window} win
 * @return {boolean}
 */
function isIe(win) {
  return (/Trident|MSIE|IEMobile/i.test(win.navigator.userAgent)
  );
}

},{}],68:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sign = sign;
exports.install = install;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Parses the number x and returns its sign. For positive x returns 1, for
 * negative, -1. For 0 and -0, returns 0 and -0 respectively. For any number
 * that parses to NaN, returns NaN.
 *
 * @param {number} x
 * @returns {number}
 */
function sign(x) {
  x = Number(x);

  // If x is 0, -0, or NaN, return it.
  if (!x) {
    return x;
  }

  return x > 0 ? 1 : -1;
}

/**
 * Sets the Math.sign polyfill if it does not exist.
 * @param {!Window} win
 */
function install(win) {
  if (!win.Math.sign) {
    win.Object.defineProperty(win.Math, 'sign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: sign
    });
  }
}

},{}],69:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assign = assign;
exports.install = install;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Copies values of all enumerable own properties from one or more source
 * objects (provided as extended arguments to the function) to a target object.
 *
 * @param {!Object} target
 * @param {...Object} var_args
 * @returns {!Object}
 */
function assign(target, var_args) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    if (source != null) {
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          output[key] = source[key];
        }
      }
    }
  }
  return output;
}

/**
 * Sets the Object.assign polyfill if it does not exist.
 * @param {!Window} win
 */
function install(win) {
  if (!win.Object.assign) {
    win.Object.defineProperty(win.Object, 'assign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: assign
    });
  }
}

},{}],70:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = install;

var _promise = require('promise-pjs/promise');

var Promise = _interopRequireWildcard(_promise);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Sets the Promise polyfill if it does not exist.
 * @param {!Window} win
 */
function install(win) {
  if (!win.Promise) {
    win.Promise = /** @type {?} */Promise;
    // In babel the * export is an Object with a default property.
    // In closure compiler it is the Promise function itself.
    if (Promise.default) {
      win.Promise = Promise.default;
    }
    // We copy the individual static methods, because closure
    // compiler flattens the polyfill namespace.
    win.Promise.resolve = Promise.resolve;
    win.Promise.reject = Promise.reject;
    win.Promise.all = Promise.all;
    win.Promise.race = Promise.race;
  }
} /**
   * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS-IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

},{"promise-pjs/promise":41}],71:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmbeddableService = exports.Disposable = undefined;
exports.getExistingServiceInEmbedScope = getExistingServiceInEmbedScope;
exports.getExistingServiceForDocInEmbedScope = getExistingServiceForDocInEmbedScope;
exports.installServiceInEmbedScope = installServiceInEmbedScope;
exports.registerServiceBuilder = registerServiceBuilder;
exports.registerServiceBuilderForDoc = registerServiceBuilderForDoc;
exports.getService = getService;
exports.getServicePromise = getServicePromise;
exports.getExistingServiceOrNull = getExistingServiceOrNull;
exports.getServicePromiseOrNull = getServicePromiseOrNull;
exports.getServiceForDoc = getServiceForDoc;
exports.getServicePromiseForDoc = getServicePromiseForDoc;
exports.getServicePromiseOrNullForDoc = getServicePromiseOrNullForDoc;
exports.setParentWindow = setParentWindow;
exports.getParentWindow = getParentWindow;
exports.getTopWindow = getTopWindow;
exports.getParentWindowFrameElement = getParentWindowFrameElement;
exports.getAmpdoc = getAmpdoc;
exports.isDisposable = isDisposable;
exports.assertDisposable = assertDisposable;
exports.disposeServicesForDoc = disposeServicesForDoc;
exports.disposeServicesForEmbed = disposeServicesForEmbed;
exports.isEmbeddable = isEmbeddable;
exports.adoptServiceForEmbed = adoptServiceForEmbed;
exports.adoptServiceForEmbedIfEmbeddable = adoptServiceForEmbedIfEmbeddable;
exports.resetServiceForTesting = resetServiceForTesting;

require('./polyfills');

var _log = require('./log');

var _types = require('./types');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */

/**
 * @fileoverview Registration and getter functions for AMP services.
 *
 * Invariant: Service getters never return null for registered services.
 */

// src/polyfills.js must be the first import.
// eslint-disable-line sort-imports-es6-autofix/sort-imports-es6

/**
 * Holds info about a service.
 * - obj: Actual service implementation when available.
 * - promise: Promise for the obj.
 * - resolve: Function to resolve the promise with the object.
 * - context: Argument for ctor, either a window or an ampdoc.
 * - ctor: Function that constructs and returns the service.
 * @typedef {{
 *   obj: (?Object),
 *   promise: (?Promise),
 *   resolve: (?function(!Object)),
 *   context: (?Window|?./service/ampdoc-impl.AmpDoc),
 *   ctor: (?function(new:Object, !Window)|
 *          ?function(new:Object, !./service/ampdoc-impl.AmpDoc)),
 * }}
 */
var ServiceHolderDef = void 0;

/**
 * This interface provides a `dispose` method that will be called by
 * runtime when a service needs to be disposed of.
 * @interface
 */

var Disposable = exports.Disposable = function () {
  function Disposable() {
    _classCallCheck(this, Disposable);
  }

  /**
   * Instructs the service to release any resources it might be holding. Can
   * be called only once in the lifecycle of a service.
   */
  Disposable.prototype.dispose = function dispose() {};

  return Disposable;
}();

/**
 * This interface provides a `adoptEmbedWindow` method that will be called by
 * runtime for a new embed window.
 * @interface
 */


var EmbeddableService = exports.EmbeddableService = function () {
  function EmbeddableService() {
    _classCallCheck(this, EmbeddableService);
  }

  /**
   * Instructs the service to adopt the embed window and add any necessary
   * listeners and resources.
   * @param {!Window} unusedEmbedWin
   */
  EmbeddableService.prototype.adoptEmbedWindow = function adoptEmbedWindow(unusedEmbedWin) {};

  return EmbeddableService;
}();

/**
 * Returns a service with the given id. Assumes that it has been registered
 * already.
 * @param {!Window} win
 * @param {string} id
 * @param {boolean=} opt_fallbackToTopWin
 * @return {Object} The service.
 */


function getExistingServiceInEmbedScope(win, id, opt_fallbackToTopWin) {
  // First, try to resolve via local (embed) window.
  var local = getLocalExistingServiceForEmbedWinOrNull(win, id);
  if (local) {
    return local;
  }
  if (opt_fallbackToTopWin) {
    return getService(win, id);
  }
  return null;
}

/**
 * Returns a service with the given id. Assumes that it has been constructed
 * already.
 * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
 * @param {string} id
 * @param {boolean=} opt_fallbackToTopWin
 * @return {Object} The service.
 */
function getExistingServiceForDocInEmbedScope(nodeOrDoc, id, opt_fallbackToTopWin) {
  // First, try to resolve via local (embed) window.
  if (nodeOrDoc.nodeType) {
    // If a node is passed, try to resolve via this node.
    var win = (0, _types.toWin)( /** @type {!Document} */(nodeOrDoc.ownerDocument || nodeOrDoc).defaultView);
    var local = getLocalExistingServiceForEmbedWinOrNull(win, id);
    if (local) {
      return local;
    }
  }
  // If an ampdoc is passed or fallback is allowed, continue resolving.
  if (!nodeOrDoc.nodeType || opt_fallbackToTopWin) {
    return getServiceForDoc(nodeOrDoc, id);
  }
  return null;
}

/**
 * Installs a service override on amp-doc level.
 * @param {!Window} embedWin
 * @param {string} id
 * @param {!Object} service The service.
 */
function installServiceInEmbedScope(embedWin, id, service) {
  var topWin = getTopWindow(embedWin);
  (0, _log.dev)().assert(embedWin != topWin, 'Service override can only be installed in embed window: %s', id);
  (0, _log.dev)().assert(!getLocalExistingServiceForEmbedWinOrNull(embedWin, id), 'Service override has already been installed: %s', id);
  registerServiceInternal(embedWin, embedWin, id, function () {
    return service;
  });
  getServiceInternal(embedWin, id); // Force service to build.
}

/**
 * @param {!Window} embedWin
 * @param {string} id
 * @return {?Object}
 */
function getLocalExistingServiceForEmbedWinOrNull(embedWin, id) {
  // Note that this method currently only resolves against the given window.
  // It does not try to go all the way up the parent window chain. We can change
  // this in the future, but for now this gives us a better performance.
  var topWin = getTopWindow(embedWin);
  if (embedWin != topWin && isServiceRegistered(embedWin, id)) {
    return getServiceInternal(embedWin, id);
  } else {
    return null;
  }
}

/**
 * Registers a service given a class to be used as implementation.
 * @param {!Window} win
 * @param {string} id of the service.
 * @param {function(new:Object, !Window)} constructor
 * @param {boolean=} opt_instantiate Whether to immediately create the service
 */
function registerServiceBuilder(win, id, constructor, opt_instantiate) {
  win = getTopWindow(win);
  registerServiceInternal(win, win, id, constructor);
  if (opt_instantiate) {
    getServiceInternal(win, id);
  }
}

/**
 * Returns a service and registers it given a class to be used as
 * implementation.
 * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
 * @param {string} id of the service.
 * @param {function(new:Object, !./service/ampdoc-impl.AmpDoc)} constructor
 * @param {boolean=} opt_instantiate Whether to immediately create the service
 */
function registerServiceBuilderForDoc(nodeOrDoc, id, constructor, opt_instantiate) {
  var ampdoc = getAmpdoc(nodeOrDoc);
  var holder = getAmpdocServiceHolder(ampdoc);
  registerServiceInternal(holder, ampdoc, id, constructor);
  if (opt_instantiate) {
    getServiceInternal(holder, id);
  }
}

/**
 * Returns a service for the given id and window (a per-window singleton).
 * Users should typically wrap this as a special purpose function (e.g.
 * `Services.vsyncFor(win)`) for type safety and because the factory should not be
 * passed around.
 * @param {!Window} win
 * @param {string} id of the service.
 * @template T
 * @return {T}
 */
function getService(win, id) {
  win = getTopWindow(win);
  return getServiceInternal(win, id);
}

/**
 * Returns a promise for a service for the given id and window. Also expects
 * an element that has the actual implementation. The promise resolves when
 * the implementation loaded.
 * Users should typically wrap this as a special purpose function (e.g.
 * `Services.vsyncFor(win)`) for type safety and because the factory should not be
 * passed around.
 * @param {!Window} win
 * @param {string} id of the service.
 * @return {!Promise<!Object>}
 */
function getServicePromise(win, id) {
  return getServicePromiseInternal(win, id);
}

/**
 * Returns a service or null with the given id.
 * @param {!Window} win
 * @param {string} id
 * @return {?Object} The service.
 */
function getExistingServiceOrNull(win, id) {
  win = getTopWindow(win);
  if (isServiceRegistered(win, id)) {
    return getServiceInternal(win, id);
  } else {
    return null;
  }
}

/**
 * Like getServicePromise but returns null if the service was never registered.
 * @param {!Window} win
 * @param {string} id of the service.
 * @return {?Promise<!Object>}
 */
function getServicePromiseOrNull(win, id) {
  return getServicePromiseOrNullInternal(win, id);
}

/**
 * Returns a service for the given id and ampdoc (a per-ampdoc singleton).
 * Expects service `id` to be registered.
 * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
 * @param {string} id of the service.
 * @return {T}
 * @template T
 */
function getServiceForDoc(nodeOrDoc, id) {
  var ampdoc = getAmpdoc(nodeOrDoc);
  var holder = getAmpdocServiceHolder(ampdoc);
  return getServiceInternal(holder, id);
}

/**
 * Returns a promise for a service for the given id and ampdoc. Also expects
 * a service that has the actual implementation. The promise resolves when
 * the implementation loaded.
 * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
 * @param {string} id of the service.
 * @return {!Promise<!Object>}
 */
function getServicePromiseForDoc(nodeOrDoc, id) {
  return getServicePromiseInternal(getAmpdocServiceHolder(nodeOrDoc), id);
}

/**
 * Like getServicePromiseForDoc but returns null if the service was never
 * registered for this ampdoc.
 * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
 * @param {string} id of the service.
 * @return {?Promise<!Object>}
 */
function getServicePromiseOrNullForDoc(nodeOrDoc, id) {
  return getServicePromiseOrNullInternal(getAmpdocServiceHolder(nodeOrDoc), id);
}

/**
 * Set the parent and top windows on a child window (friendly iframe).
 * @param {!Window} win
 * @param {!Window} parentWin
 */
function setParentWindow(win, parentWin) {
  win.__AMP_PARENT = parentWin;
  win.__AMP_TOP = getTopWindow(parentWin);
}

/**
 * Returns the parent window for a child window (friendly iframe).
 * @param {!Window} win
 * @return {!Window}
 */
function getParentWindow(win) {
  return win.__AMP_PARENT || win;
}

/**
 * Returns the top window where AMP Runtime is installed for a child window
 * (friendly iframe).
 * @param {!Window} win
 * @return {!Window}
 */
function getTopWindow(win) {
  return win.__AMP_TOP || win;
}

/**
 * Returns the parent "friendly" iframe if the node belongs to a child window.
 * @param {!Node} node
 * @param {!Window} topWin
 * @return {?HTMLIFrameElement}
 */
function getParentWindowFrameElement(node, topWin) {
  var childWin = (node.ownerDocument || node).defaultView;
  if (childWin && childWin != topWin && getTopWindow(childWin) == topWin) {
    try {
      return (/** @type {?HTMLIFrameElement} */childWin.frameElement
      );
    } catch (e) {
      // Ignore the error.
    }
  }
  return null;
}

/**
 * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
 * @return {!./service/ampdoc-impl.AmpDoc}
 */
function getAmpdoc(nodeOrDoc) {
  if (nodeOrDoc.nodeType) {
    var win = (0, _types.toWin)( /** @type {!Document} */(nodeOrDoc.ownerDocument || nodeOrDoc).defaultView);
    return getAmpdocService(win).getAmpDoc( /** @type {!Node} */nodeOrDoc);
  }
  return (/** @type {!./service/ampdoc-impl.AmpDoc} */nodeOrDoc
  );
}

/**
 * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
 * @return {!./service/ampdoc-impl.AmpDoc|!Window}
 */
function getAmpdocServiceHolder(nodeOrDoc) {
  var ampdoc = getAmpdoc(nodeOrDoc);
  return ampdoc.isSingleDoc() ? ampdoc.win : ampdoc;
}

/**
 * This is essentially a duplicate of `ampdoc.js`, but necessary to avoid
 * circular dependencies.
 * @param {!Window} win
 * @return {!./service/ampdoc-impl.AmpDocService}
 */
function getAmpdocService(win) {
  return (/** @type {!./service/ampdoc-impl.AmpDocService} */getService(win, 'ampdoc')
  );
}

/**
 * Get service `id` from `holder`. Assumes the service
 * has already been registered.
 * @param {!Object} holder Object holding the service instance.
 * @param {string} id of the service.
 * @return {Object}
 * @template T
 */
function getServiceInternal(holder, id) {
  (0, _log.dev)().assert(isServiceRegistered(holder, id), 'Expected service ' + id + ' to be registered');
  var services = getServices(holder);
  var s = services[id];
  if (!s.obj) {
    (0, _log.dev)().assert(s.ctor, 'Service ' + id + ' registered without ctor nor impl.');
    (0, _log.dev)().assert(s.context, 'Service ' + id + ' registered without context.');
    s.obj = new s.ctor(s.context);
    (0, _log.dev)().assert(s.obj, 'Service ' + id + ' constructed to null.');
    s.ctor = null;
    s.context = null;
    // The service may have been requested already, in which case we have a
    // pending promise we need to fulfill.
    if (s.resolve) {
      s.resolve(s.obj);
    }
  }
  return s.obj;
}

/**
 * @param {!Object} holder Object holding the service instance.
 * @param {!Window|!./service/ampdoc-impl.AmpDoc} context Win or AmpDoc.
 * @param {string} id of the service.
 * @param {?function(new:Object, !Window)|
 *         ?function(new:Object, !./service/ampdoc-impl.AmpDoc)}
 *     ctor Constructor function to new the service. Called with context.
 */
function registerServiceInternal(holder, context, id, ctor) {
  var services = getServices(holder);
  var s = services[id];

  if (!s) {
    s = services[id] = {
      obj: null,
      promise: null,
      resolve: null,
      context: null,
      ctor: null
    };
  }

  if (s.ctor || s.obj) {
    // Service already registered.
    return;
  }

  s.ctor = ctor;
  s.context = context;

  // The service may have been requested already, in which case there is a
  // pending promise that needs to fulfilled.
  if (s.resolve) {
    // getServiceInternal will resolve the promise.
    getServiceInternal(holder, id);
  }
}

/**
 * @param {!Object} holder
 * @param {string} id of the service.
 * @return {!Promise<!Object>}
 */
function getServicePromiseInternal(holder, id) {
  var cached = getServicePromiseOrNullInternal(holder, id);
  if (cached) {
    return cached;
  }
  // Service is not registered.

  // TODO(@cramforce): Add a check that if the element is eventually registered
  // that the service is actually provided and this promise resolves.
  var resolve = void 0;
  var promise = new Promise(function (r) {
    resolve = r;
  });
  var services = getServices(holder);
  services[id] = {
    obj: null,
    promise: promise,
    resolve: resolve,
    context: null,
    ctor: null
  };
  return promise;
}

/**
 * Returns a promise for service `id` if the service has been registered
 * on `holder`.
 * @param {!Object} holder
 * @param {string} id of the service.
 * @return {?Promise<!Object>}
 */
function getServicePromiseOrNullInternal(holder, id) {
  var services = getServices(holder);
  var s = services[id];
  if (s) {
    if (s.promise) {
      return s.promise;
    } else {
      // Instantiate service if not already instantiated.
      getServiceInternal(holder, id);
      return s.promise = Promise.resolve( /** @type {!Object} */s.obj);
    }
  }
  return null;
}

/**
 * Returns the object that holds the services registered in a holder.
 * @param {!Object} holder
 * @return {!Object<string,!ServiceHolderDef>}
 */
function getServices(holder) {
  var services = holder.services;
  if (!services) {
    services = holder.services = {};
  }
  return services;
}

/**
 * Whether the specified service implements `Disposable` interface.
 * @param {!Object} service
 * @return {boolean}
 */
function isDisposable(service) {
  return typeof service.dispose == 'function';
}

/**
 * Asserts that the specified service implements `Disposable` interface and
 * typecasts the instance to `Disposable`.
 * @param {!Object} service
 * @return {!Disposable}
 */
function assertDisposable(service) {
  (0, _log.dev)().assert(isDisposable(service), 'required to implement Disposable');
  return (/** @type {!Disposable} */service
  );
}

/**
 * Disposes all disposable (implements `Disposable` interface) services in
 * ampdoc scope.
 * @param {!./service/ampdoc-impl.AmpDoc} ampdoc
 */
function disposeServicesForDoc(ampdoc) {
  disposeServicesInternal(ampdoc);
}

/**
 * Disposes all disposable (implements `Disposable` interface) services in
 * embed scope.
 * @param {!Window} embedWin
 */
function disposeServicesForEmbed(embedWin) {
  disposeServicesInternal(embedWin);
}

/**
 * @param {!Object} holder Object holding the service instances.
 */
function disposeServicesInternal(holder) {
  // TODO(dvoytenko): Consider marking holder as destroyed for later-arriving
  // service to be canceled automatically.
  var services = getServices(holder);

  var _loop = function _loop(id) {
    if (!Object.prototype.hasOwnProperty.call(services, id)) {
      return 'continue';
    }
    var serviceHolder = services[id];
    if (serviceHolder.obj) {
      disposeServiceInternal(id, serviceHolder.obj);
    } else if (serviceHolder.promise) {
      serviceHolder.promise.then(function (instance) {
        return disposeServiceInternal(id, instance);
      });
    }
  };

  for (var id in services) {
    var _ret = _loop(id);

    if (_ret === 'continue') continue;
  }
}

/**
 * @param {string} id
 * @param {!Object} service
 */
function disposeServiceInternal(id, service) {
  if (!isDisposable(service)) {
    return;
  }
  try {
    assertDisposable(service).dispose();
  } catch (e) {
    // Ensure that a failure to dispose a service does not disrupt other
    // services.
    (0, _log.dev)().error('SERVICE', 'failed to dispose service', id, e);
  }
}

/**
 * Whether the specified service implements `EmbeddableService` interface.
 * @param {!Object} service
 * @return {boolean}
 */
function isEmbeddable(service) {
  return typeof service.adoptEmbedWindow == 'function';
}

/**
 * Adopts an embeddable (implements `EmbeddableService` interface) service
 * in embed scope.
 * @param {!Window} embedWin
 * @param {string} serviceId
 */
function adoptServiceForEmbed(embedWin, serviceId) {
  var adopted = adoptServiceForEmbedIfEmbeddable(embedWin, serviceId);
  (0, _log.dev)().assert(adopted, 'Service ' + serviceId + ' not found on parent ' + 'or doesn\'t implement EmbeddableService.');
}

/**
 * Adopts an embeddable (implements `EmbeddableService` interface) service
 * in embed scope.
 * @param {!Window} embedWin
 * @param {string} serviceId
 * @return {boolean}
 */
function adoptServiceForEmbedIfEmbeddable(embedWin, serviceId) {
  var frameElement = /** @type {!Node} */(0, _log.dev)().assert(embedWin.frameElement, 'frameElement not found for embed');
  var ampdoc = getAmpdoc(frameElement);
  var holder = getAmpdocServiceHolder(ampdoc);
  if (!isServiceRegistered(holder, serviceId)) {
    return false;
  }
  var service = getServiceForDoc(frameElement, serviceId);
  if (!isEmbeddable(service)) {
    return false;
  }
  service.adoptEmbedWindow(embedWin);
  return true;
}

/**
 * Resets a single service, so it gets recreated on next getService invocation.
 * @param {!Object} holder
 * @param {string} id of the service.
 */
function resetServiceForTesting(holder, id) {
  if (holder.services) {
    holder.services[id] = null;
  }
}

/**
 * @param {!Object} holder Object holding the service instance.
 * @param {string} id of the service.
 * @return {boolean}
 */
function isServiceRegistered(holder, id) {
  var service = holder.services && holder.services[id];
  // All registered services must have an implementation or a constructor.
  return !!(service && (service.ctor || service.obj));
}

},{"./log":57,"./polyfills":64,"./types":75}],72:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Services = exports.SubscriptionService = undefined;

var _service = require('./service');

var _elementService = require('./element-service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */

/** @typedef {!../extensions/amp-subscriptions/0.1/amp-subscriptions.SubscriptionService} */
var SubscriptionService = exports.SubscriptionService = void 0;

var Services = exports.Services = function () {
  function Services() {
    _classCallCheck(this, Services);
  }

  /**
   * Returns a promise for the Access service.
   * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
   * @return {!Promise<!../extensions/amp-access/0.1/amp-access.AccessService>}
   */
  Services.accessServiceForDoc = function accessServiceForDoc(nodeOrDoc) {
    return (/** @type {!Promise<
           !../extensions/amp-access/0.1/amp-access.AccessService>} */(0, _elementService.getElementServiceForDoc)(nodeOrDoc, 'access', 'amp-access')
    );
  };

  /**
   * Returns a promise for the Subscriptions service.
   * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
   * @return {!Promise<!SubscriptionService>}
   */


  Services.subscriptionsServiceForDoc = function subscriptionsServiceForDoc(nodeOrDoc) {
    return (/** @type {!Promise<SubscriptionService>} */(0, _elementService.getElementServiceForDoc)(nodeOrDoc, 'subscriptions', 'amp-subscriptions')
    );
  };

  /**
   * Returns a promise for the Access service or a promise for null if the service
   * is not available on the current page.
   * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
   * @return {!Promise<?../extensions/amp-access/0.1/amp-access.AccessService>}
   */


  Services.accessServiceForDocOrNull = function accessServiceForDocOrNull(nodeOrDoc) {
    return (/** @type {
           !Promise<?../extensions/amp-access/0.1/amp-access.AccessService>} */(0, _elementService.getElementServiceIfAvailableForDoc)(nodeOrDoc, 'access', 'amp-access')
    );
  };

  /**
   * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
   * @return {!./service/action-impl.ActionService}
   */


  Services.actionServiceForDoc = function actionServiceForDoc(nodeOrDoc) {
    return (/** @type {!./service/action-impl.ActionService} */(0, _service.getExistingServiceForDocInEmbedScope)(nodeOrDoc, 'action', /* opt_fallbackToTopWin */true)
    );
  };

  /**
   * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
   * @return {!Promise<!Activity>}
   */


  Services.activityForDoc = function activityForDoc(nodeOrDoc) {
    return (/** @type {!Promise<!Activity>} */(0, _elementService.getElementServiceForDoc)(nodeOrDoc, 'activity', 'amp-analytics')
    );
  };

  /**
   * Returns the global instance of the `AmpDocService` service that can be
   * used to resolve an ampdoc for any node: either in the single-doc or
   * shadow-doc environment.
   * @param {!Window} window
   * @return {!./service/ampdoc-impl.AmpDocService}
   */


  Services.ampdocServiceFor = function ampdocServiceFor(window) {
    return (/** @type {!./service/ampdoc-impl.AmpDocService} */(0, _service.getService)(window, 'ampdoc')
    );
  };

  /**
   * Returns the AmpDoc for the specified context node.
   * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
   * @return {!./service/ampdoc-impl.AmpDoc}
   */


  Services.ampdoc = function ampdoc(nodeOrDoc) {
    return (0, _service.getAmpdoc)(nodeOrDoc);
  };

  /**
   * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
   * @param {boolean=} loadAnalytics
   * @return {!Promise<!../extensions/amp-analytics/0.1/instrumentation.InstrumentationService>}
   */


  Services.analyticsForDoc = function analyticsForDoc(nodeOrDoc) {
    var loadAnalytics = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (loadAnalytics) {
      // Get Extensions service and force load analytics extension.
      var ampdoc = (0, _service.getAmpdoc)(nodeOrDoc);
      Services.extensionsFor(ampdoc.win). /*OK*/installExtensionForDoc(ampdoc, 'amp-analytics');
    }
    return (/** @type {!Promise<
             !../extensions/amp-analytics/0.1/instrumentation.InstrumentationService
           >} */(0, _elementService.getElementServiceForDoc)(nodeOrDoc, 'amp-analytics-instrumentation', 'amp-analytics')
    );
  };

  /**
   * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
   * @return {!Promise<?../extensions/amp-analytics/0.1/instrumentation.InstrumentationService>}
   */


  Services.analyticsForDocOrNull = function analyticsForDocOrNull(nodeOrDoc) {
    return (/** @type {!Promise<
             ?../extensions/amp-analytics/0.1/instrumentation.InstrumentationService
           >} */(0, _elementService.getElementServiceIfAvailableForDoc)(nodeOrDoc, 'amp-analytics-instrumentation', 'amp-analytics')
    );
  };

  /**
   * @param {!Window} window
   * @return {!./service/batched-xhr-impl.BatchedXhr}
   */


  Services.batchedXhrFor = function batchedXhrFor(window) {
    return (/** @type {!./service/batched-xhr-impl.BatchedXhr} */(0, _service.getService)(window, 'batched-xhr')
    );
  };

  /**
   * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
   * @return {!Promise<?../extensions/amp-bind/0.1/bind-impl.Bind>}
   */


  Services.bindForDocOrNull = function bindForDocOrNull(nodeOrDoc) {
    return (/** @type {!Promise<?../extensions/amp-bind/0.1/bind-impl.Bind>} */(0, _elementService.getElementServiceIfAvailableForDocInEmbedScope)(nodeOrDoc, 'bind', 'amp-bind')
    );
  };

  /**
   * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
   * @return {!Promise<!./service/cid-impl.Cid>}
   */


  Services.cidForDoc = function cidForDoc(nodeOrDoc) {
    return (/** @type {!Promise<!./service/cid-impl.Cid>} */(0, _service.getServicePromiseForDoc)(nodeOrDoc, 'cid')
    );
  };

  /**
   * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
   * @return {!./service/navigation.Navigation}
   */


  Services.navigationForDoc = function navigationForDoc(nodeOrDoc) {
    return (/** @type {!./service/navigation.Navigation} */(0, _service.getServiceForDoc)(nodeOrDoc, 'navigation')
    );
  };

  /**
   * @param {!Window} window
   * @return {!./service/crypto-impl.Crypto}
   */


  Services.cryptoFor = function cryptoFor(window) {
    return (/** @type {!./service/crypto-impl.Crypto} */(0, _service.getService)(window, 'crypto')
    );
  };

  /**
   * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
   * @return {!./service/document-info-impl.DocumentInfoDef} Info about the doc
   */


  Services.documentInfoForDoc = function documentInfoForDoc(nodeOrDoc) {
    return (/** @type {!./service/document-info-impl.DocInfo} */(0, _service.getServiceForDoc)(nodeOrDoc, 'documentInfo').get()
    );
  };

  /**
   * @param {!Window} window
   * @return {!./service/document-state.DocumentState}
   */


  Services.documentStateFor = function documentStateFor(window) {
    return (0, _service.getService)(window, 'documentState');
  };

  /**
   * @param {!Window} window
   * @return {!./service/extensions-impl.Extensions}
   */


  Services.extensionsFor = function extensionsFor(window) {
    return (/** @type {!./service/extensions-impl.Extensions} */(0, _service.getService)(window, 'extensions')
    );
  };

  /**
   * Returns service implemented in service/history-impl.
   * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
   * @return {!./service/history-impl.History}
   */


  Services.historyForDoc = function historyForDoc(nodeOrDoc) {
    return (/** @type {!./service/history-impl.History} */(0, _service.getServiceForDoc)(nodeOrDoc, 'history')
    );
  };

  /**
   * @param {!Window} win
   * @return {!./input.Input}
   */


  Services.inputFor = function inputFor(win) {
    return (0, _service.getService)(win, 'input');
  };

  /**
   * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
   * @return {!./service/layers-impl.LayoutLayers}
   */


  Services.layersForDoc = function layersForDoc(nodeOrDoc) {
    return (/** @type {!./service/layers-impl.LayoutLayers} */(0, _service.getServiceForDoc)(nodeOrDoc, 'layers')
    );
  };

  /**
   * @param {!Window} window
   * @return {!./service/performance-impl.Performance}
   */


  Services.performanceFor = function performanceFor(window) {
    return (/** @type {!./service/performance-impl.Performance}*/(0, _service.getService)(window, 'performance')
    );
  };

  /**
   * @param {!Window} window
   * @return {!./service/performance-impl.Performance}
   */


  Services.performanceForOrNull = function performanceForOrNull(window) {
    return (/** @type {!./service/performance-impl.Performance}*/(0, _service.getExistingServiceOrNull)(window, 'performance')
    );
  };

  /**
   * @param {!Window} window
   * @return {!./service/platform-impl.Platform}
   */


  Services.platformFor = function platformFor(window) {
    return (/** @type {!./service/platform-impl.Platform} */(0, _service.getService)(window, 'platform')
    );
  };

  /**
   * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
   * @return {!./service/resources-impl.Resources}
   */


  Services.resourcesForDoc = function resourcesForDoc(nodeOrDoc) {
    return (/** @type {!./service/resources-impl.Resources} */(0, _service.getServiceForDoc)(nodeOrDoc, 'resources')
    );
  };

  /**
   * @param {!Window} win
   * @return {?Promise<?{incomingFragment: string, outgoingFragment: string}>}
   */


  Services.shareTrackingForOrNull = function shareTrackingForOrNull(win) {
    return (/** @type {
           !Promise<?{incomingFragment: string, outgoingFragment: string}>} */(0, _elementService.getElementServiceIfAvailable)(win, 'share-tracking', 'amp-share-tracking', true)
    );
  };

  /**
   * @param {!Window} win
   * @return {?Promise<?../extensions/amp-story/0.1/variable-service.AmpStoryVariableService>}
   */


  Services.storyVariableServiceForOrNull = function storyVariableServiceForOrNull(win) {
    return (
      /** @type {!Promise<
           * ?../extensions/amp-story/0.1/variable-service.AmpStoryVariableService
           * >} */(0, _elementService.getElementServiceIfAvailable)(win, 'story-variable', 'amp-story', true)
    );
  };

  /**
   * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
   * @return {!Promise<!../extensions/amp-animation/0.1/web-animation-service.WebAnimationService>}
   */


  Services.webAnimationServiceFor = function webAnimationServiceFor(nodeOrDoc) {
    return (/** @type {
           !Promise<!../extensions/amp-animation/0.1/web-animation-service.WebAnimationService>} */
      (0, _elementService.getElementServiceForDoc)(nodeOrDoc, 'web-animation', 'amp-animation')
    );
  };

  /**
   * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
   * @return {!Promise<!./service/storage-impl.Storage>}
   */


  Services.storageForDoc = function storageForDoc(nodeOrDoc) {
    return (/** @type {!Promise<!./service/storage-impl.Storage>} */(0, _service.getServicePromiseForDoc)(nodeOrDoc, 'storage')
    );
  };

  /**
   * @param {!Window} window
   * @return {!./service/template-impl.Templates}
   */


  Services.templatesFor = function templatesFor(window) {
    return (/** @type {!./service/template-impl.Templates} */(0, _service.getService)(window, 'templates')
    );
  };

  /**
   * @param {!Window} window
   * @return {!./service/timer-impl.Timer}
   */


  Services.timerFor = function timerFor(window) {
    return (/** @type {!./service/timer-impl.Timer} */(0, _service.getService)(window, 'timer')
    );
  };

  /**
   * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
   * @return {!./service/url-replacements-impl.UrlReplacements}
   */


  Services.urlReplacementsForDoc = function urlReplacementsForDoc(nodeOrDoc) {
    return (/** @type {!./service/url-replacements-impl.UrlReplacements} */(0, _service.getExistingServiceForDocInEmbedScope)(nodeOrDoc, 'url-replace', /* opt_fallbackToTopWin */true)
    );
  };

  /**
   * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
   * @return {!Promise<!../extensions/amp-user-notification/0.1/amp-user-notification.UserNotificationManager>}
   */


  Services.userNotificationManagerForDoc = function userNotificationManagerForDoc(nodeOrDoc) {
    return (/** @type {!Promise<!../extensions/amp-user-notification/0.1/amp-user-notification.UserNotificationManager>} */
      (0, _elementService.getElementServiceForDoc)(nodeOrDoc, 'userNotificationManager', 'amp-user-notification')
    );
  };

  /**
   * Returns a promise for the experiment variants or a promise for null if it is
   * not available on the current page.
   * @param {!Window} win
   * @return {!Promise<?Object<string>>}
   */


  Services.variantForOrNull = function variantForOrNull(win) {
    return (/** @type {!Promise<?Object<string>>} */(0, _elementService.getElementServiceIfAvailable)(win, 'variant', 'amp-experiment', true)
    );
  };

  /**
   * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
   * @return {!./service/video-manager-impl.VideoManager}
   */


  Services.videoManagerForDoc = function videoManagerForDoc(nodeOrDoc) {
    return (/** @type {!./service/video-manager-impl.VideoManager} */(0, _service.getServiceForDoc)(nodeOrDoc, 'video-manager')
    );
  };

  /**
   * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
   * @return {!./service/viewer-impl.Viewer}
   */


  Services.viewerForDoc = function viewerForDoc(nodeOrDoc) {
    return (/** @type {!./service/viewer-impl.Viewer} */(0, _service.getServiceForDoc)(nodeOrDoc, 'viewer')
    );
  };

  /**
   * Returns promise for the viewer. This is an unusual case and necessary only
   * for services that need reference to the viewer before it has been
   * initialized. Most of the code, however, just should use `viewerForDoc`.
   * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
   * @return {!Promise<!./service/viewer-impl.Viewer>}
   */


  Services.viewerPromiseForDoc = function viewerPromiseForDoc(nodeOrDoc) {
    return (/** @type {!Promise<!./service/viewer-impl.Viewer>} */(0, _service.getServicePromiseForDoc)(nodeOrDoc, 'viewer')
    );
  };

  /**
   * @param {!Window} window
   * @return {!./service/vsync-impl.Vsync}
   */


  Services.vsyncFor = function vsyncFor(window) {
    return (/** @type {!./service/vsync-impl.Vsync} */(0, _service.getService)(window, 'vsync')
    );
  };

  /**
   * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
   * @return {!./service/viewport/viewport-impl.Viewport}
   */


  Services.viewportForDoc = function viewportForDoc(nodeOrDoc) {
    return (/** @type {!./service/viewport/viewport-impl.Viewport} */(0, _service.getServiceForDoc)(nodeOrDoc, 'viewport')
    );
  };

  /**
   * @param {!Window} window
   * @return {!./service/xhr-impl.Xhr}
   */


  Services.xhrFor = function xhrFor(window) {
    return (/** @type {!./service/xhr-impl.Xhr} */(0, _service.getService)(window, 'xhr')
    );
  };

  return Services;
}();

},{"./element-service":49,"./service":71}],73:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dashToCamelCase = dashToCamelCase;
exports.camelCaseToDash = camelCaseToDash;
exports.dashToUnderline = dashToUnderline;
exports.endsWith = endsWith;
exports.startsWith = startsWith;
exports.expandTemplate = expandTemplate;
exports.stringHash32 = stringHash32;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @param {string} _match
 * @param {string} character
 * @return {string}
 */
function toUpperCase(_match, character) {
  return character.toUpperCase();
}

/**
 * @param {string} match
 * @return {string}
 */
function prependDashAndToLowerCase(match) {
  return '-' + match.toLowerCase();
}

/**
 * @param {string} name Attribute name containing dashes.
 * @return {string} Dashes removed and successive character sent to upper case.
 * visibleForTesting
 */
function dashToCamelCase(name) {
  return name.replace(/-([a-z])/g, toUpperCase);
}

/**
 * Converts a string that is in camelCase to one that is in dash-case.
 *
 * @param {string} string The string to convert.
 * @return {string} The string in dash-case.
 */
function camelCaseToDash(string) {
  return string.replace(/(?!^)[A-Z]/g, prependDashAndToLowerCase);
}

/**
 * @param {string} name Attribute name with dashes
 * @return {string} Dashes replaced by underlines.
 */
function dashToUnderline(name) {
  return name.replace('-', '_');
}

/**
 * Polyfill for String.prototype.endsWith.
 * @param {string} string
 * @param {string} suffix
 * @return {boolean}
 */
function endsWith(string, suffix) {
  var index = string.length - suffix.length;
  return index >= 0 && string.indexOf(suffix, index) == index;
}

/**
 * Polyfill for String.prototype.startsWith.
 * @param {string} string
 * @param {string} prefix
 * @return {boolean}
 */
function startsWith(string, prefix) {
  if (prefix.length > string.length) {
    return false;
  }
  return string.lastIndexOf(prefix, 0) == 0;
}

/**
 * Expands placeholders in a given template string with values.
 *
 * Placeholders use ${key-name} syntax and are replaced with the value
 * returned from the given getter function.
 *
 * @param {string} template The template string to expand.
 * @param {function(string):*} getter Function used to retrieve a value for a
 *   placeholder. Returns values will be coerced into strings.
 * @param {number=} opt_maxIterations Number of times to expand the template.
 *   Defaults to 1, but should be set to a larger value your placeholder tokens
 *   can be expanded to other placeholder tokens. Take caution with large values
 *   as recursively expanding a string can be exponentially expensive.
 */
function expandTemplate(template, getter, opt_maxIterations) {
  var maxIterations = opt_maxIterations || 1;

  var _loop = function _loop(i) {
    var matches = 0;
    template = template.replace(/\${([^}]*)}/g, function (_a, b) {
      matches++;
      return getter(b);
    });
    if (!matches) {
      return 'break';
    }
  };

  for (var i = 0; i < maxIterations; i++) {
    var _ret = _loop(i);

    if (_ret === 'break') break;
  }
  return template;
}

/**
 * Hash function djb2a
 * This is intended to be a simple, fast hashing function using minimal code.
 * It does *not* have good cryptographic properties.
 * @param {string} str
 * @return {string} 32-bit unsigned hash of the string
 */
function stringHash32(str) {
  var length = str.length;
  var hash = 5381;
  for (var i = 0; i < length; i++) {
    hash = hash * 33 ^ str.charCodeAt(i);
  }
  // Convert from 32-bit signed to unsigned.
  return String(hash >>> 0);
}

},{}],74:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.camelCaseToTitleCase = camelCaseToTitleCase;
exports.getVendorJsPropertyName = getVendorJsPropertyName;
exports.setImportantStyles = setImportantStyles;
exports.setStyle = setStyle;
exports.getStyle = getStyle;
exports.setStyles = setStyles;
exports.toggle = toggle;
exports.px = px;
exports.translateX = translateX;
exports.translate = translate;
exports.scale = scale;
exports.removeAlphaFromColor = removeAlphaFromColor;
exports.computedStyle = computedStyle;
exports.resetStyles = resetStyles;

var _object = require('./utils/object.js');

var _string = require('./string');

/** @type {Object<string, string>} */
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Note: loaded by 3p system. Cannot rely on babel polyfills.
var propertyNameCache = void 0;

/** @const {!Array<string>} */
var vendorPrefixes = ['Webkit', 'webkit', 'Moz', 'moz', 'ms', 'O', 'o'];

/**
 * @export
 * @param {string} camelCase camel cased string
 * @return {string} title cased string
 */
function camelCaseToTitleCase(camelCase) {
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
}

/**
 * Checks the style if a prefixed version of a property exists and returns
 * it or returns an empty string.
 * @private
 * @param {!Object} style
 * @param {string} titleCase the title case version of a css property name
 * @return {string} the prefixed property name or null.
 */
function getVendorJsPropertyName_(style, titleCase) {
  for (var i = 0; i < vendorPrefixes.length; i++) {
    var propertyName = vendorPrefixes[i] + titleCase;
    if (style[propertyName] !== undefined) {
      return propertyName;
    }
  }
  return '';
}

/**
 * Returns the possibly prefixed JavaScript property name of a style property
 * (ex. WebkitTransitionDuration) given a camelCase'd version of the property
 * (ex. transitionDuration).
 * @export
 * @param {!Object} style
 * @param {string} camelCase the camel cased version of a css property name
 * @param {boolean=} opt_bypassCache bypass the memoized cache of property
 *   mapping
 * @return {string}
 */
function getVendorJsPropertyName(style, camelCase, opt_bypassCache) {
  if ((0, _string.startsWith)(camelCase, '--')) {
    // CSS vars are returned as is.
    return camelCase;
  }
  if (!propertyNameCache) {
    propertyNameCache = (0, _object.map)();
  }
  var propertyName = propertyNameCache[camelCase];
  if (!propertyName || opt_bypassCache) {
    propertyName = camelCase;
    if (style[camelCase] === undefined) {
      var titleCase = camelCaseToTitleCase(camelCase);
      var prefixedPropertyName = getVendorJsPropertyName_(style, titleCase);

      if (style[prefixedPropertyName] !== undefined) {
        propertyName = prefixedPropertyName;
      }
    }
    if (!opt_bypassCache) {
      propertyNameCache[camelCase] = propertyName;
    }
  }
  return propertyName;
}

/**
 * Sets the CSS styles of the specified element with !important. The styles
 * are specified as a map from CSS property names to their values.
 * @param {!Element} element
 * @param {!Object<string, *>} styles
 */
function setImportantStyles(element, styles) {
  for (var k in styles) {
    element.style.setProperty(getVendorJsPropertyName(styles, k), styles[k].toString(), 'important');
  }
}

/**
 * Sets the CSS style of the specified element with optional units, e.g. "px".
 * @param {Element} element
 * @param {string} property
 * @param {*} value
 * @param {string=} opt_units
 * @param {boolean=} opt_bypassCache
 */
function setStyle(element, property, value, opt_units, opt_bypassCache) {
  var propertyName = getVendorJsPropertyName(element.style, property, opt_bypassCache);
  if (propertyName) {
    element.style[propertyName] =
    /** @type {string} */opt_units ? value + opt_units : value;
  }
}

/**
 * Returns the value of the CSS style of the specified element.
 * @param {!Element} element
 * @param {string} property
 * @param {boolean=} opt_bypassCache
 * @return {*}
 */
function getStyle(element, property, opt_bypassCache) {
  var propertyName = getVendorJsPropertyName(element.style, property, opt_bypassCache);
  if (!propertyName) {
    return undefined;
  }
  return element.style[propertyName];
}

/**
 * Sets the CSS styles of the specified element. The styles
 * a specified as a map from CSS property names to their values.
 * @param {!Element} element
 * @param {!Object<string, *>} styles
 */
function setStyles(element, styles) {
  for (var k in styles) {
    setStyle(element, k, styles[k]);
  }
}

/**
 * Shows or hides the specified element.
 * @param {!Element} element
 * @param {boolean=} opt_display
 */
function toggle(element, opt_display) {
  if (opt_display === undefined) {
    opt_display = getStyle(element, 'display') == 'none';
  }
  setStyle(element, 'display', opt_display ? '' : 'none');
}

/**
 * Returns a pixel value.
 * @param {number} value
 * @return {string}
 */
function px(value) {
  return value + 'px';
}

/**
 * Returns a "translateX" for CSS "transform" property.
 * @param {number|string} value
 * @return {string}
 */
function translateX(value) {
  if (typeof value == 'string') {
    return 'translateX(' + value + ')';
  }
  return 'translateX(' + px(value) + ')';
}

/**
 * Returns a "translateX" for CSS "transform" property.
 * @param {number|string} x
 * @param {(number|string)=} opt_y
 * @return {string}
 */
function translate(x, opt_y) {
  if (typeof x == 'number') {
    x = px(x);
  }
  if (opt_y === undefined) {
    return 'translate(' + x + ')';
  }
  if (typeof opt_y == 'number') {
    opt_y = px(opt_y);
  }
  return 'translate(' + x + ', ' + opt_y + ')';
}

/**
 * Returns a "scale" for CSS "transform" property.
 * @param {number|string} value
 * @return {string}
 */
function scale(value) {
  return 'scale(' + value + ')';
}

/**
 * Remove alpha value from a rgba color value.
 * Return the new color property with alpha equals if has the alpha value.
 * Caller needs to make sure the input color value is a valid rgba/rgb value
 * @param {string} rgbaColor
 * @return {string}
 */
function removeAlphaFromColor(rgbaColor) {
  return rgbaColor.replace(/\(([^,]+),([^,]+),([^,)]+),[^)]+\)/g, '($1,$2,$3, 1)');
}

/**
 * Gets the computed style of the element. The helper is necessary to enforce
 * the possible `null` value returned by a buggy Firefox.
 *
 * @param {!Window} win
 * @param {!Element} el
 * @return {!Object<string, string>}
 */
function computedStyle(win, el) {
  var style = /** @type {?CSSStyleDeclaration} */win.getComputedStyle(el);
  return (/** @type {!Object<string, string>} */style || (0, _object.map)()
  );
}

/**
 * Resets styles that were set dynamically (i.e. inline)
 * @param {!Element} element
 * @param {!Array<string>} properties
 */
function resetStyles(element, properties) {
  var styleObj = {};
  properties.forEach(function (prop) {
    styleObj[prop] = null;
  });
  setStyles(element, styleObj);
}

},{"./string":73,"./utils/object.js":83}],75:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = isArray;
exports.toArray = toArray;
exports.isObject = isObject;
exports.isFiniteNumber = isFiniteNumber;
exports.isEnumValue = isEnumValue;
exports.toWin = toWin;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @const */
var toString_ = Object.prototype.toString;

/**
 * Returns the ECMA [[Class]] of a value
 * @param {*} value
 * @return {string}
 */
function toString(value) {
  return toString_.call(value);
}

/**
 * Determines if value is actually an Array.
 * @param {*} value
 * @return {boolean}
 */
function isArray(value) {
  return Array.isArray(value);
}

/**
 * Converts an array-like object to an array.
 * @param {?IArrayLike<T>|string} arrayLike
 * @return {!Array<T>}
 * @template T
 */
function toArray(arrayLike) {
  if (!arrayLike) {
    return [];
  }
  var array = new Array(arrayLike.length);
  for (var i = 0; i < arrayLike.length; i++) {
    array[i] = arrayLike[i];
  }
  return array;
}

/**
 * Determines if value is actually an Object.
 * @param {*} value
 * @return {boolean}
 */
function isObject(value) {
  return toString(value) === '[object Object]';
}

/**
 * Determines if value is of number type and finite.
 * NaN and Infinity are not considered a finite number.
 * String numbers are not considered numbers.
 * @param {*} value
 * @return {boolean}
 */
function isFiniteNumber(value) {
  return typeof value === 'number' && isFinite(value);
}

/**
 * Checks whether `s` is a valid value of `enumObj`.
 *
 * @param {!Object<T>} enumObj
 * @param {T} s
 * @return {boolean}
 * @template T
 */
function isEnumValue(enumObj, s) {
  for (var k in enumObj) {
    if (enumObj[k] === s) {
      return true;
    }
  }
  return false;
}

/**
 * Externs declare that access `defaultView` from `document` or
 * `ownerDocument` is of type `(Window|null)` but most of our parameter types
 * assume that it is never null. This is OK in practice as we ever only get
 * null on disconnected documents or old IE.
 * This helper function casts it into just a simple Window return type.
 *
 * @param {!Window|null} winOrNull
 * @return {!Window}
 */
function toWin(winOrNull) {
  return (/** @type {!Window} */winOrNull
  );
}

},{}],76:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseQueryString_ = parseQueryString_;

var _urlTryDecodeUriComponent = require('./url-try-decode-uri-component');

var regex = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;

/**
 * Parses the query string of an URL. This method returns a simple key/value
 * map. If there are duplicate keys the latest value is returned.
 *
 * DO NOT import the function from this file. Instead, import parseQueryString
 * from `src/url.js`.
 *
 * @param {string} queryString
 * @return {!JsonObject}
 */
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function parseQueryString_(queryString) {
  var params = /** @type {!JsonObject} */Object.create(null);
  if (!queryString) {
    return params;
  }

  var match = void 0;
  while (match = regex.exec(queryString)) {
    var name = (0, _urlTryDecodeUriComponent.tryDecodeUriComponent_)(match[1], match[1]);
    var value = match[2] ? (0, _urlTryDecodeUriComponent.tryDecodeUriComponent_)(match[2], match[2]) : '';
    params[name] = value;
  }
  return params;
}

},{"./url-try-decode-uri-component":77}],77:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tryDecodeUriComponent_ = tryDecodeUriComponent_;
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Tries to decode a URI component, falling back to opt_fallback (or an empty
 * string)
 *
 * DO NOT import the function from this file. Instead, import
 * tryDecodeUriComponent from `src/url.js`.
 *
 * @param {string} component
 * @param {string=} fallback
 * @return {string}
 */
function tryDecodeUriComponent_(component) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  try {
    return decodeURIComponent(component);
  } catch (e) {
    return fallback;
  }
}

},{}],78:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SOURCE_ORIGIN_PARAM = undefined;
exports.getWinOrigin = getWinOrigin;
exports.parseUrl = parseUrl;
exports.parseUrlWithA = parseUrlWithA;
exports.appendEncodedParamStringToUrl = appendEncodedParamStringToUrl;
exports.addParamToUrl = addParamToUrl;
exports.addParamsToUrl = addParamsToUrl;
exports.serializeQueryString = serializeQueryString;
exports.isSecureUrl = isSecureUrl;
exports.assertHttpsUrl = assertHttpsUrl;
exports.assertAbsoluteHttpOrHttpsUrl = assertAbsoluteHttpOrHttpsUrl;
exports.parseQueryString = parseQueryString;
exports.removeFragment = removeFragment;
exports.getFragment = getFragment;
exports.isProxyOrigin = isProxyOrigin;
exports.isLocalhostOrigin = isLocalhostOrigin;
exports.isProtocolValid = isProtocolValid;
exports.getSourceUrl = getSourceUrl;
exports.getSourceOrigin = getSourceOrigin;
exports.resolveRelativeUrl = resolveRelativeUrl;
exports.resolveRelativeUrlFallback_ = resolveRelativeUrlFallback_;
exports.getCorsUrl = getCorsUrl;
exports.checkCorsUrl = checkCorsUrl;
exports.tryDecodeUriComponent = tryDecodeUriComponent;

var _string = require('./string');

var _mode = require('./mode');

var _types = require('./types');

var _urlParseQueryString = require('./url-parse-query-string');

var _urlTryDecodeUriComponent = require('./url-try-decode-uri-component');

var _config = require('./config');

var _log = require('./log');

/**
 * Cached a-tag to avoid memory allocation during URL parsing.
 * @type {HTMLAnchorElement}
 */
var a = void 0;

/**
 * We cached all parsed URLs. As of now there are no use cases
 * of AMP docs that would ever parse an actual large number of URLs,
 * but we often parse the same one over and over again.
 * @type {Object<string, !Location>}
 */
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cache = void 0;

/** @private @const Matches amp_js_* parameters in query string. */
var AMP_JS_PARAMS_REGEX = /[?&]amp_js[^&]*/;

/** @private @const Matches usqp parameters from goog experiment in query string. */
var GOOGLE_EXPERIMENT_PARAMS_REGEX = /[?&]usqp[^&]*/;

var INVALID_PROTOCOLS = [
/*eslint no-script-url: 0*/'javascript:',
/*eslint no-script-url: 0*/'data:',
/*eslint no-script-url: 0*/'vbscript:'];

/** @const {string} */
var SOURCE_ORIGIN_PARAM = exports.SOURCE_ORIGIN_PARAM = '__amp_source_origin';

/**
 * Returns the correct origin for a given window.
 * @param {!Window} win
 * @return {string} origin
 */
function getWinOrigin(win) {
  return win.origin || parseUrl(win.location.href).origin;
}

/**
 * Returns a Location-like object for the given URL. If it is relative,
 * the URL gets resolved.
 * Consider the returned object immutable. This is enforced during
 * testing by freezing the object.
 * @param {string} url
 * @param {boolean=} opt_nocache
 * @return {!Location}
 */
function parseUrl(url, opt_nocache) {
  if (!a) {
    a = /** @type {!HTMLAnchorElement} */self.document.createElement('a');
    cache = self.UrlCache || (self.UrlCache = Object.create(null));
  }

  var fromCache = cache[url];
  if (fromCache) {
    return fromCache;
  }

  var info = parseUrlWithA(a, url);

  // Freeze during testing to avoid accidental mutation.
  var frozen = (0, _mode.getMode)().test && Object.freeze ? Object.freeze(info) : info;

  if (opt_nocache) {
    return frozen;
  }
  return cache[url] = frozen;
}

/**
 * Returns a Location-like object for the given URL. If it is relative,
 * the URL gets resolved.
 * @param {!HTMLAnchorElement} a
 * @param {string} url
 * @return {!Location}
 * @restricted
 */
function parseUrlWithA(a, url) {
  a.href = url;

  // IE11 doesn't provide full URL components when parsing relative URLs.
  // Assigning to itself again does the trick #3449.
  if (!a.protocol) {
    a.href = a.href;
  }

  var info = /** @type {!Location} */{
    href: a.href,
    protocol: a.protocol,
    host: a.host,
    hostname: a.hostname,
    port: a.port == '0' ? '' : a.port,
    pathname: a.pathname,
    search: a.search,
    hash: a.hash,
    origin: null // Set below.
  };

  // Some IE11 specific polyfills.
  // 1) IE11 strips out the leading '/' in the pathname.
  if (info.pathname[0] !== '/') {
    info.pathname = '/' + info.pathname;
  }

  // 2) For URLs with implicit ports, IE11 parses to default ports while
  // other browsers leave the port field empty.
  if (info.protocol == 'http:' && info.port == 80 || info.protocol == 'https:' && info.port == 443) {
    info.port = '';
    info.host = info.hostname;
  }

  // For data URI a.origin is equal to the string 'null' which is not useful.
  // We instead return the actual origin which is the full URL.
  if (a.origin && a.origin != 'null') {
    info.origin = a.origin;
  } else if (info.protocol == 'data:' || !info.host) {
    info.origin = info.href;
  } else {
    info.origin = info.protocol + '//' + info.host;
  }
  return info;
}

/**
 * Appends the string just before the fragment part (or optionally
 * to the front of the query string) of the URL.
 * @param {string} url
 * @param {string} paramString
 * @param {boolean=} opt_addToFront
 * @return {string}
 */
function appendEncodedParamStringToUrl(url, paramString, opt_addToFront) {
  if (!paramString) {
    return url;
  }
  var mainAndFragment = url.split('#', 2);
  var mainAndQuery = mainAndFragment[0].split('?', 2);

  var newUrl = mainAndQuery[0] + (mainAndQuery[1] ? opt_addToFront ? '?' + paramString + '&' + mainAndQuery[1] : '?' + mainAndQuery[1] + '&' + paramString : '?' + paramString);
  newUrl += mainAndFragment[1] ? '#' + mainAndFragment[1] : '';
  return newUrl;
}
/**
 * Appends a query string field and value to a url. `key` and `value`
 * will be ran through `encodeURIComponent` before appending.
 * @param {string} url
 * @param {string} key
 * @param {string} value
 * @param {boolean=} opt_addToFront
 * @return {string}
 */
function addParamToUrl(url, key, value, opt_addToFront) {
  var field = encodeURIComponent(key) + '=' + encodeURIComponent(value);
  return appendEncodedParamStringToUrl(url, field, opt_addToFront);
}

/**
 * Appends query string fields and values to a url. The `params` objects'
 * `key`s and `value`s will be transformed into query string keys/values.
 * @param {string} url
 * @param {!JsonObject<string, string|!Array<string>>} params
 * @return {string}
 */
function addParamsToUrl(url, params) {
  return appendEncodedParamStringToUrl(url, serializeQueryString(params));
}

/**
 * Serializes the passed parameter map into a query string with both keys
 * and values encoded.
 * @param {!JsonObject<string, string|!Array<string>>} params
 * @return {string}
 */
function serializeQueryString(params) {
  var s = [];
  for (var k in params) {
    var v = params[k];
    if (v == null) {
      continue;
    } else if ((0, _types.isArray)(v)) {
      for (var i = 0; i < v.length; i++) {
        var sv = /** @type {string} */v[i];
        s.push(encodeURIComponent(k) + '=' + encodeURIComponent(sv));
      }
    } else {
      var _sv = /** @type {string} */v;
      s.push(encodeURIComponent(k) + '=' + encodeURIComponent(_sv));
    }
  }
  return s.join('&');
}

/**
 * Returns `true` if the URL is secure: either HTTPS or localhost (for testing).
 * @param {string|!Location} url
 * @return {boolean}
 */
function isSecureUrl(url) {
  if (typeof url == 'string') {
    url = parseUrl(url);
  }
  return url.protocol == 'https:' || url.hostname == 'localhost' || (0, _string.endsWith)(url.hostname, '.localhost');
}

/**
 * Asserts that a given url is HTTPS or protocol relative. It's a user-level
 * assert.
 *
 * Provides an exception for localhost.
 *
 * @param {?string|undefined} urlString
 * @param {!Element|string} elementContext Element where the url was found.
 * @param {string=} sourceName Used for error messages.
 * @return {string}
 */
function assertHttpsUrl(urlString, elementContext) {
  var sourceName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'source';

  (0, _log.user)().assert(urlString != null, '%s %s must be available', elementContext, sourceName);
  // (erwinm, #4560): type cast necessary until #4560 is fixed.
  var theUrlString = /** @type {string} */urlString;
  (0, _log.user)().assert(isSecureUrl(theUrlString) || /^(\/\/)/.test(theUrlString), '%s %s must start with ' + '"https://" or "//" or be relative and served from ' + 'either https or from localhost. Invalid value: %s', elementContext, sourceName, theUrlString);
  return theUrlString;
}

/**
 * Asserts that a given url is an absolute HTTP or HTTPS URL.
 * @param {string} urlString
 * @return {string}
 */
function assertAbsoluteHttpOrHttpsUrl(urlString) {
  (0, _log.user)().assert(/^https?\:/i.test(urlString), 'URL must start with "http://" or "https://". Invalid value: %s', urlString);
  return parseUrl(urlString).href;
}

/**
 * Parses the query string of an URL. This method returns a simple key/value
 * map. If there are duplicate keys the latest value is returned.
 *
 * This function is implemented in a separate file to avoid a circular
 * dependency.
 *
 * @param {string} queryString
 * @return {!JsonObject}
 */
function parseQueryString(queryString) {
  return (0, _urlParseQueryString.parseQueryString_)(queryString);
}

/**
 * Returns the URL without fragment. If URL doesn't contain fragment, the same
 * string is returned.
 * @param {string} url
 * @return {string}
 */
function removeFragment(url) {
  var index = url.indexOf('#');
  if (index == -1) {
    return url;
  }
  return url.substring(0, index);
}

/**
 * Returns the fragment from the URL. If the URL doesn't contain fragment,
 * the empty string is returned.
 * @param {string} url
 * @return {string}
 */
function getFragment(url) {
  var index = url.indexOf('#');
  if (index == -1) {
    return '';
  }
  return url.substring(index);
}

/**
 * Returns whether the URL has the origin of a proxy.
 * @param {string|!Location} url URL of an AMP document.
 * @return {boolean}
 */
function isProxyOrigin(url) {
  if (typeof url == 'string') {
    url = parseUrl(url);
  }
  return _config.urls.cdnProxyRegex.test(url.origin);
}

/**
 * Returns whether the URL origin is localhost.
 * @param {string|!Location} url URL of an AMP document.
 * @return {boolean}
 */
function isLocalhostOrigin(url) {
  if (typeof url == 'string') {
    url = parseUrl(url);
  }
  return _config.urls.localhostRegex.test(url.origin);
}

/**
 * Returns whether the URL has valid protocol.
 * Deep link protocol is valid, but not javascript etc.
 * @param {string|!Location} url
 * @return {boolean}
 */
function isProtocolValid(url) {
  if (!url) {
    return true;
  }
  if (typeof url == 'string') {
    url = parseUrl(url);
  }
  return !INVALID_PROTOCOLS.includes(url.protocol);
}

/**
 * Removes parameters that start with amp js parameter pattern and returns the new
 * search string.
 * @param {string} urlSearch
 * @return {string}
 */
function removeAmpJsParams(urlSearch) {
  if (!urlSearch || urlSearch == '?') {
    return '';
  }
  var search = urlSearch.replace(AMP_JS_PARAMS_REGEX, '').replace(GOOGLE_EXPERIMENT_PARAMS_REGEX, '').replace(/^[?&]/, ''); // Removes first ? or &.
  return search ? '?' + search : '';
}

/**
 * Returns the source URL of an AMP document for documents served
 * on a proxy origin or directly.
 * @param {string|!Location} url URL of an AMP document.
 * @return {string}
 */
function getSourceUrl(url) {
  if (typeof url == 'string') {
    url = parseUrl(url);
  }

  // Not a proxy URL - return the URL itself.
  if (!isProxyOrigin(url)) {
    return url.href;
  }

  // A proxy URL.
  // Example path that is being matched here.
  // https://cdn.ampproject.org/c/s/www.origin.com/foo/
  // The /s/ is optional and signals a secure origin.
  var path = url.pathname.split('/');
  var prefix = path[1];
  (0, _log.user)().assert(prefix == 'a' || prefix == 'c' || prefix == 'v', 'Unknown path prefix in url %s', url.href);
  var domainOrHttpsSignal = path[2];
  var origin = domainOrHttpsSignal == 's' ? 'https://' + decodeURIComponent(path[3]) : 'http://' + decodeURIComponent(domainOrHttpsSignal);
  // Sanity test that what we found looks like a domain.
  (0, _log.user)().assert(origin.indexOf('.') > 0, 'Expected a . in origin %s', origin);
  path.splice(1, domainOrHttpsSignal == 's' ? 3 : 2);
  return origin + path.join('/') + removeAmpJsParams(url.search) + (url.hash || '');
}

/**
 * Returns the source origin of an AMP document for documents served
 * on a proxy origin or directly.
 * @param {string|!Location} url URL of an AMP document.
 * @return {string} The source origin of the URL.
 */
function getSourceOrigin(url) {
  return parseUrl(getSourceUrl(url)).origin;
}

/**
 * Returns absolute URL resolved based on the relative URL and the base.
 * @param {string} relativeUrlString
 * @param {string|!Location} baseUrl
 * @return {string}
 */
function resolveRelativeUrl(relativeUrlString, baseUrl) {
  if (typeof baseUrl == 'string') {
    baseUrl = parseUrl(baseUrl);
  }
  if (typeof URL == 'function') {
    return new URL(relativeUrlString, baseUrl.href).toString();
  }
  return resolveRelativeUrlFallback_(relativeUrlString, baseUrl);
}

/**
 * Fallback for URL resolver when URL class is not available.
 * @param {string} relativeUrlString
 * @param {string|!Location} baseUrl
 * @return {string}
 * @private Visible for testing.
 */
function resolveRelativeUrlFallback_(relativeUrlString, baseUrl) {
  if (typeof baseUrl == 'string') {
    baseUrl = parseUrl(baseUrl);
  }
  relativeUrlString = relativeUrlString.replace(/\\/g, '/');
  var relativeUrl = parseUrl(relativeUrlString);

  // Absolute URL.
  if ((0, _string.startsWith)(relativeUrlString.toLowerCase(), relativeUrl.protocol)) {
    return relativeUrl.href;
  }

  // Protocol-relative URL.
  if ((0, _string.startsWith)(relativeUrlString, '//')) {
    return baseUrl.protocol + relativeUrlString;
  }

  // Absolute path.
  if ((0, _string.startsWith)(relativeUrlString, '/')) {
    return baseUrl.origin + relativeUrlString;
  }

  // Relative path.
  return baseUrl.origin + baseUrl.pathname.replace(/\/[^/]*$/, '/') + relativeUrlString;
}

/**
 * Add "__amp_source_origin" query parameter to the URL.
 * @param {!Window} win
 * @param {string} url
 * @return {string}
 */
function getCorsUrl(win, url) {
  checkCorsUrl(url);
  var sourceOrigin = getSourceOrigin(win.location.href);
  return addParamToUrl(url, SOURCE_ORIGIN_PARAM, sourceOrigin);
}

/**
 * Checks if the url have __amp_source_origin and throws if it does.
 * @param {string} url
 */
function checkCorsUrl(url) {
  var parsedUrl = parseUrl(url);
  var query = parseQueryString(parsedUrl.search);
  (0, _log.user)().assert(!(SOURCE_ORIGIN_PARAM in query), 'Source origin is not allowed in %s', url);
}

/**
 * Tries to decode a URI component, falling back to opt_fallback (or an empty
 * string)
 *
 * @param {string} component
 * @param {string=} opt_fallback
 * @return {string}
 */
function tryDecodeUriComponent(component, opt_fallback) {
  return (0, _urlTryDecodeUriComponent.tryDecodeUriComponent_)(component, opt_fallback);
}

},{"./config":46,"./log":57,"./mode":59,"./string":73,"./types":75,"./url-parse-query-string":76,"./url-try-decode-uri-component":77}],79:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterSplice = filterSplice;
exports.findIndex = findIndex;
exports.fromIterator = fromIterator;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A bit like Array#filter, but removes elements that filter false from the
 * array. Returns the filtered items.
 *
 * @param {!Array<T>} array
 * @param {function(T, number, !Array<T>):boolean} filter
 * @return {!Array<T>}
 * @template T
 */
function filterSplice(array, filter) {
  var splice = [];
  var index = 0;
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (filter(item, i, array)) {
      if (index < i) {
        array[index] = item;
      }
      index++;
    } else {
      splice.push(item);
    }
  }

  if (index < array.length) {
    array.length = index;
  }

  return splice;
}

/**
 * Returns the index of the first element matching the predicate.
 * Like Array#findIndex.
 *
 * @param {!Array<T>} array
 * @param {function(T, number, !Array<T>):boolean} predicate
 * @return {number}
 * @template T
 */
function findIndex(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}

/**
 * Converts the given iterator to an array.
 *
 * @param {!Iterator<T>} iterator
 * @return {Array<T>}
 * @template T
 */
function fromIterator(iterator) {
  var array = [];
  for (var e = iterator.next(); !e.done; e = iterator.next()) {
    array.push(e.value);
  }
  return array;
}

},{}],80:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utf8Decode = utf8Decode;
exports.utf8Encode = utf8Encode;
exports.stringToBytes = stringToBytes;
exports.bytesToString = bytesToString;
exports.bytesToUInt32 = bytesToUInt32;
exports.getCryptoRandomBytesArray = getCryptoRandomBytesArray;

var _log = require('../log');

/**
 * Interpret a byte array as a UTF-8 string.
 * @param {!BufferSource} bytes
 * @return {string}
 */
function utf8Decode(bytes) {
  if (typeof TextDecoder !== 'undefined') {
    return new TextDecoder('utf-8').decode(bytes);
  }
  var asciiString = bytesToString(new Uint8Array(bytes.buffer || bytes));
  return decodeURIComponent(escape(asciiString));
}

/**
 * Turn a string into UTF-8 bytes.
 * @param {string} string
 * @return {!Uint8Array}
 */
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function utf8Encode(string) {
  if (typeof TextEncoder !== 'undefined') {
    return new TextEncoder('utf-8').encode(string);
  }
  return stringToBytes(unescape(encodeURIComponent(string)));
}

/**
 * Converts a string which holds 8-bit code points, such as the result of atob,
 * into a Uint8Array with the corresponding bytes.
 * If you have a string of characters, you probably want to be using utf8Encode.
 * @param {string} str
 * @return {!Uint8Array}
 */
function stringToBytes(str) {
  var bytes = new Uint8Array(str.length);
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    (0, _log.dev)().assert(charCode <= 255, 'Characters must be in range [0,255]');
    bytes[i] = charCode;
  }
  return bytes;
}

/**
 * Converts a 8-bit bytes array into a string
 * @param {!Uint8Array} bytes
 * @return {string}
 */
function bytesToString(bytes) {
  // Intentionally avoids String.fromCharCode.apply so we don't suffer a
  // stack overflow. #10495, https://jsperf.com/bytesToString-2
  var array = new Array(bytes.length);
  for (var i = 0; i < bytes.length; i++) {
    array[i] = String.fromCharCode(bytes[i]);
  }
  return array.join('');
}

/**
 * Converts a 4-item byte array to an unsigned integer.
 * Assumes bytes are big endian.
 * @param {!Uint8Array} bytes
 * @return {number}
 */
function bytesToUInt32(bytes) {
  if (bytes.length != 4) {
    throw new Error('Received byte array with length != 4');
  }
  var val = (bytes[0] & 0xFF) << 24 | (bytes[1] & 0xFF) << 16 | (bytes[2] & 0xFF) << 8 | bytes[3] & 0xFF;
  // Convert to unsigned.
  return val >>> 0;
}

/**
 * Generate a random bytes array with specific length using
 * win.crypto.getRandomValues. Return null if it is not available.
 * @param {number} length
 * @return {?Uint8Array}
 */
function getCryptoRandomBytesArray(win, length) {
  if (!win.crypto || !win.crypto.getRandomValues) {
    return null;
  }

  // Widely available in browsers we support:
  // http://caniuse.com/#search=getRandomValues
  var uint8array = new Uint8Array(length);
  win.crypto.getRandomValues(uint8array);
  return uint8array;
}

},{"../log":57}],81:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.once = once;
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Creates a function that is evaluated only once and returns the cached result
 * subsequently.
 * @param {function():(T|undefined)} fn
 * @return {function():(T|undefined)}
 * @template T
 * @suppress {checkTypes} Compiler complains about "fn = null" for GC.
 */
function once(fn) {
  var evaluated = false;
  var retValue = null;
  return function () {
    if (!evaluated) {
      retValue = fn();
      evaluated = true;
      fn = null; // GC
    }
    return retValue;
  };
}

},{}],82:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @enum {number}
 */
var KeyCodes = exports.KeyCodes = {
  ENTER: 13,
  ESCAPE: 27,
  SPACE: 32,
  LEFT_ARROW: 37,
  UP_ARROW: 38,
  RIGHT_ARROW: 39,
  DOWN_ARROW: 40
};

},{}],83:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;
exports.dict = dict;
exports.hasOwn = hasOwn;
exports.ownProperty = ownProperty;
exports.deepMerge = deepMerge;
exports.omit = omit;

var _types = require('../types');

/* @const */
var hasOwn_ = Object.prototype.hasOwnProperty;

/**
 * Returns a map-like object.
 * If opt_initial is provided, copies its own properties into the
 * newly created object.
 * @param {T=} opt_initial This should typically be an object literal.
 * @return {T}
 * @template T
 */
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function map(opt_initial) {
  var obj = Object.create(null);
  if (opt_initial) {
    Object.assign(obj, opt_initial);
  }
  return obj;
}

/**
 * Return an empty JsonObject or makes the passed in object literal
 * an JsonObject.
 * The JsonObject type is just a simple object that is at-dict.
 * See
 * https://github.com/google/closure-compiler/wiki/@struct-and-@dict-Annotations
 * for what a dict is type-wise.
 * The linter enforces that the argument is, in fact, at-dict like.
 * @param {!Object=} opt_initial
 * @return {!JsonObject}
 */
function dict(opt_initial) {
  // We do not copy. The linter enforces that the passed in object is a literal
  // and thus the caller cannot have a reference to it.
  return (/** @type {!JsonObject} */opt_initial || {}
  );
}

/**
 * Checks if the given key is a property in the map.
 *
 * @param {T}  obj a map like property.
 * @param {string}  key
 * @return {boolean}
 * @template T
 */
function hasOwn(obj, key) {
  return hasOwn_.call(obj, key);
}

/**
 * Returns obj[key] iff key is obj's own property (is not inherited).
 * Otherwise, returns undefined.
 *
 * @param {Object} obj
 * @param {string} key
 * @return {*}
 */
function ownProperty(obj, key) {
  if (hasOwn(obj, key)) {
    return obj[key];
  } else {
    return undefined;
  }
}

/**
 * Deep merges source into target.
 *
 * @param {!Object} target
 * @param {!Object} source
 * @param {number} depth The maximum merge depth. If exceeded, Object.assign
 *                       will be used instead.
 * @return {!Object}
 * @throws {Error} If source contains a circular reference.
 * @note Only nested objects are deep-merged, primitives and arrays are not.
 */
function deepMerge(target, source) {
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  // Keep track of seen objects to detect recursive references.
  var seen = [];

  /** @type {!Array<{t: !Object, s: !Object, d: number}>} */
  var queue = [];
  queue.push({ t: target, s: source, d: 0 });

  // BFS to ensure objects don't have recursive references at shallower depths.

  var _loop = function _loop() {
    var _queue$shift = queue.shift(),
        t = _queue$shift.t,
        s = _queue$shift.s,
        d = _queue$shift.d;

    if (seen.includes(s)) {
      throw new Error('Source object has a circular reference.');
    }
    seen.push(s);
    if (t === s) {
      return 'continue';
    }
    if (d > depth) {
      Object.assign(t, s);
      return 'continue';
    }
    Object.keys(s).forEach(function (key) {
      var newValue = s[key];
      // Perform a deep merge IFF both target and source have the same key
      // whose corresponding values are objects.
      if (hasOwn(t, key)) {
        var oldValue = t[key];
        if ((0, _types.isObject)(newValue) && (0, _types.isObject)(oldValue)) {
          queue.push({ t: oldValue, s: newValue, d: d + 1 });
          return;
        }
      }
      t[key] = newValue;
    });
  };

  while (queue.length > 0) {
    var _ret = _loop();

    if (_ret === 'continue') continue;
  }
  return target;
}

/**
 * @param {!Object} o An object to remove properties from
 * @param {!Array<string>} props A list of properties to remove from the Object
 * @return {!Object} An object with the given properties removed
 */
function omit(o, props) {
  return Object.keys(o).reduce(function (acc, key) {
    if (!props.includes(key)) {
      acc[key] = o[key];
    }
    return acc;
  }, {});
}

},{"../types":75}],84:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttle = throttle;
exports.debounce = debounce;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Wraps a given callback and applies a rate limit.
 * It throttles the calls so that no consequent calls have time interval
 * smaller than the given minimal interval.
 *
 * @param {!Window} win
 * @param {function(...*)} callback
 * @param {number} minInterval the minimum time interval in millisecond
 * @returns {function(...*)}
 */
function throttle(win, callback, minInterval) {
  var locker = 0;
  var nextCallArgs = null;

  function fire(args) {
    nextCallArgs = null;
    // Lock the fire for minInterval milliseconds
    locker = win.setTimeout(waiter, minInterval);

    callback.apply(null, args);
  }

  function waiter() {
    locker = 0;
    // If during the period there're invocations queued up, fire once.
    if (nextCallArgs) {
      fire(nextCallArgs);
    }
  }

  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (locker) {
      nextCallArgs = args;
    } else {
      fire(args);
    }
  };
}

/**
 * Wraps a given callback and applies a wait timer, so that minInterval
 * milliseconds must pass since the last call before the callback is actually
 * invoked.
 *
 * @param {!Window} win
 * @param {function(...*)} callback
 * @param {number} minInterval the minimum time interval in millisecond
 * @returns {function(...*)}
 */
function debounce(win, callback, minInterval) {
  var locker = 0;
  var timestamp = 0;
  var nextCallArgs = null;

  function fire(args) {
    nextCallArgs = null;
    callback.apply(null, args);
  }

  function waiter() {
    locker = 0;
    var remaining = minInterval - (win.Date.now() - timestamp);
    if (remaining > 0) {
      locker = win.setTimeout(waiter, remaining);
    } else {
      fire(nextCallArgs);
    }
  }

  return function () {
    timestamp = win.Date.now();

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    nextCallArgs = args;
    if (!locker) {
      locker = win.setTimeout(waiter, minInterval);
    }
  };
}

},{}],85:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoAnalyticsDetailsDef = exports.VideoAnalyticsEvents = exports.PlayingStates = exports.VideoEvents = exports.VideoAttributes = exports.VideoInterface = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _actionTrust = require('./action-trust');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// eslint-disable-line no-unused-vars

/**
 * VideoInterface defines a common video API which any AMP component that plays
 * videos is expected to implement.
 *
 * AMP runtime uses this common API to provide consistent video experience and
 * analytics across all video players.
 *
 * Components implementing this interface must also extend
 * {@link ./base-element.BaseElement} and register with the
 * Video Manager {@link ./service/video-manager-impl.VideoManager} during
 * their `builtCallback`.
 *
 * @interface
 */
var VideoInterface = exports.VideoInterface = function () {
  function VideoInterface() {
    _classCallCheck(this, VideoInterface);
  }

  /**
   * Whether the component supports video playback in the current platform.
   * If false, component will be not treated as a video component.
   * @return {boolean}
   */
  VideoInterface.prototype.supportsPlatform = function supportsPlatform() {};

  /**
   * Whether users can interact with the video such as pausing it.
   * Example of non-interactive videos include design background videos where
   * all controls are hidden from the user.
   *
   * @return {boolean}
   */


  VideoInterface.prototype.isInteractive = function isInteractive() {};

  /**
   * Current playback time in seconds at time of trigger
   * @return {number}
   */


  VideoInterface.prototype.getCurrentTime = function getCurrentTime() {};

  /**
   * Total duration of the video in seconds
   * @return {number}
   */


  VideoInterface.prototype.getDuration = function getDuration() {};

  /**
   * Get a 2d array of start and stop times that the user has watched.
   * @return {!Array<Array<number>>}
   */


  VideoInterface.prototype.getPlayedRanges = function getPlayedRanges() {};

  /**
   * Plays the video..
   *
   * @param {boolean} unusedIsAutoplay Whether the call to the `play` method is
   * triggered by the autoplay functionality. Video players can use this hint
   * to make decisions such as not playing pre-roll video ads.
   */


  VideoInterface.prototype.play = function play(unusedIsAutoplay) {};

  /**
   * Pauses the video.
   */


  VideoInterface.prototype.pause = function pause() {};

  /**
   * Mutes the video.
   */


  VideoInterface.prototype.mute = function mute() {};

  /**
   * Unmutes the video.
   */


  VideoInterface.prototype.unmute = function unmute() {};

  /**
   * Makes the video UI controls visible.
   *
   * AMP will not call this method if `controls` attribute is not set.
   */


  VideoInterface.prototype.showControls = function showControls() {};

  /**
   * Hides the video UI controls.
   *
   * AMP will not call this method if `controls` attribute is not set.
   */


  VideoInterface.prototype.hideControls = function hideControls() {};

  /**
   * Returns video's meta data (artwork, title, artist, album, etc.) for use
   * with the Media Session API
   * artwork (Array): URL to the poster image (preferably a 512x512 PNG)
   * title (string): Name of the video
   * artist (string): Name of the video's author/artist
   * album (string): Name of the video's album if it exists
   * @return {!./mediasession-helper.MetadataDef|undefined} metadata
   */


  VideoInterface.prototype.getMetadata = function getMetadata() {};

  /**
   * If this returns true then it will be assumed that the player implements
   * the MediaSession API internally so that the video manager does not override
   * it. If not, the video manager will use the metadata variable as well as
   * inferred meta-data to update the video's Media Session notification.
   *
   * @return {boolean}
   */


  VideoInterface.prototype.preimplementsMediaSessionAPI = function preimplementsMediaSessionAPI() {};

  /**
   * Automatically comes from {@link ./base-element.BaseElement}
   *
   * @return {!AmpElement}
   */


  /**
   * Automatically comes from {@link ./base-element.BaseElement}
   *
   * @return {boolean}
   */
  VideoInterface.prototype.isInViewport = function isInViewport() {};

  /**
   * Enables fullscreen on the internal video element
   * NOTE: While implementing, keep in mind that Safari/iOS do not allow taking
   * any element other than <video> to fullscreen, if the player has an internal
   * implementation of fullscreen (flash for example) then check
   * if Services.platformFor(this.win).isSafari is true and use the internal
   * implementation instead. If not, it is recommended to take the iframe
   * to fullscreen using fullscreenEnter from dom.js
   */


  VideoInterface.prototype.fullscreenEnter = function fullscreenEnter() {};

  /**
   * Quits fullscreen mode
   */


  VideoInterface.prototype.fullscreenExit = function fullscreenExit() {};

  /**
   * Returns whether the video is currently in fullscreen mode or not
   * @return {boolean}
   */


  VideoInterface.prototype.isFullscreen = function isFullscreen() {};

  /**
   * Automatically comes from {@link ./base-element.BaseElement}
   *
   * @param {string} unusedMethod
   * @param {function(!./service/action-impl.ActionInvocation)} unusedHandler
   * @param {ActionTrust} unusedMinTrust
   * @public
   */


  VideoInterface.prototype.registerAction = function registerAction(unusedMethod, unusedHandler, unusedMinTrust) {};

  _createClass(VideoInterface, [{
    key: 'element',
    get: function get() {}
  }]);

  return VideoInterface;
}();

/**
 * Attributes
 *
 * Components implementing the VideoInterface are expected to support
 * the following attributes.
 *
 * @constant {!Object<string, string>}
 */


var VideoAttributes = exports.VideoAttributes = {
  /**
   * autoplay
   *
   * Whether the developer has configured autoplay on the component.
   * This is normally done by setting `autoplay` attribute on the component.
   *
   * AMP runtime manages autoplay behaviour itself using methods such as `play`,
   * `pause`, `showControls`, `hideControls`, `mute`, etc.. therefore components
   * should not propagate the autoplay attribute to the underlying player
   * implementation.
   *
   * When a video is requested to autoplay, AMP will automatically
   * mute and hide the controls for the video, when video is 75% visible in
   * the viewport, AMP will play the video and later pauses it when 25%
   * or more of the video exits the viewport. If an auto-playing video also has
   * controls, AMP will install a tap
   * handler on the video, and when an end-user taps the video, AMP will show
   * the controls.
   *
   */
  AUTOPLAY: 'autoplay',
  /**
   * dock
   *
   * Setting the `dock` attribute on the component makes the video minimize
   * to the corner when scrolled out of view and has been interacted with.
   */
  DOCK: 'dock',
  /**
   * fullscreen-on-landscape
   *
   * If enabled, this automatically expands the currently visible video and
   * playing to fullscreen when the user changes the device's orientation to
   * landscape if the video was started following a user interaction
   * (not autoplay)
   *
   * Dependent upon browser support of
   * http://caniuse.com/#feat=screen-orientation
   * and http://caniuse.com/#feat=fullscreen
   */
  FULLSCREEN_ON_LANDSCAPE: 'fullscreen-on-landscape'
};

/**
 * Events
 *
 * Components implementing the VideoInterface are expected to dispatch
 * the following DOM events.
 *
 * @constant {!Object<string, string>}
 */
var VideoEvents = exports.VideoEvents = {
  /**
   * registered
   *
   * Fired when the video player element is built and has been registered with
   * the video manager.
   *
   * @event registered
   */
  REGISTERED: 'registered',

  /**
   * load
   *
   * Fired when the video player is loaded and calls to methods such as `play()`
   * are allowed.
   *
   * @event load
   */
  LOAD: 'load',

  /**
   * playing
   *
   * Fired when the video begins playing.
   *
   * @event playing
   */
  PLAYING: 'playing',

  /**
   * pause
   *
   * Fired when the video pauses.
   *
   * @event pause
   */
  PAUSE: 'pause',

  /**
   * ended
   *
   * Fired when the video ends.
   *
   * This event should be fired in addition to `pause` when video ends.
   *
   * @event ended
   */
  ENDED: 'ended',

  /**
   * muted
   *
   * Fired when the video is muted.
   *
   * @event muted
   */
  MUTED: 'muted',

  /**
   * unmuted
   *
   * Fired when the video is unmuted.
   *
   * @event unmuted
   */
  UNMUTED: 'unmuted',

  /**
   * amp:video:visibility
   *
   * Fired when the video's visibility changes. Normally fired
   * from `viewportCallback`.
   *
   * @event amp:video:visibility
   * @property {boolean} visible Whether the video player is visible or not.
   */
  VISIBILITY: 'amp:video:visibility',

  /**
   * reload
   *
   * Fired when the video's src changes.
   *
   * @event reloaded
   */
  RELOAD: 'reloaded',

  /**
   * pre/mid/post Ad start
   *
   * Fired when an Ad starts playing.
   *
   * This is used to remove any overlay shims during Ad play during autoplay
   * or minimized-to-corner version of the player.
   *
   * @event ad_start
   */
  AD_START: 'ad_start',

  /**
   * pre/mid/post Ad ends
   *
   * Fired when an Ad ends playing.
   *
   * This is used to restore any overlay shims during Ad play during autoplay
   * or minimized-to-corner version of the player.
   *
   * @event ad_end
   */
  AD_END: 'ad_end'
};

/**
 * Playing States
 *
 * Internal playing states used to distinguish between video playing on user's
 * command and videos playing automatically
 *
 * @constant {!Object<string, string>}
 */
var PlayingStates = exports.PlayingStates = {
  /**
   * playing_manual
   *
   * When the video user manually interacted with the video and the video
   * is now playing
   *
   * @event playing_manual
   */
  PLAYING_MANUAL: 'playing_manual',

  /**
   * playing_auto
   *
   * When the video has autoplay and the user hasn't interacted with it yet
   *
   * @event playing_auto
   */
  PLAYING_AUTO: 'playing_auto',

  /**
   * paused
   *
   * When the video is paused.
   *
   * @event paused
   */
  PAUSED: 'paused'
};

/** @enum {string} */
var VideoAnalyticsEvents = exports.VideoAnalyticsEvents = {
  /**
   * video-ended
   *
   * Indicates that a video ended.
   * @property {!VideoAnalyticsDetailsDef} details
   * @event video-ended
   */
  ENDED: 'video-ended',

  /**
   * video-pause
   *
   * Indicates that a video paused.
   * @property {!VideoAnalyticsDetailsDef} details
   * @event video-pause
   */
  PAUSE: 'video-pause',

  /**
   * video-play
   *
   * Indicates that a video began to play.
   * @property {!VideoAnalyticsDetailsDef} details
   * @event video-play
   */
  PLAY: 'video-play',

  /**
   * video-session
   *
   * Indicates that some segment of the video played.
   * @property {!VideoAnalyticsDetailsDef} details
   * @event video-session
   */
  SESSION: 'video-session',

  /**
   * video-session-visible
   *
   * Indicates that some segment of the video played in the viewport.
   * @property {!VideoAnalyticsDetailsDef} details
   * @event video-session-visible
   */
  SESSION_VISIBLE: 'video-session-visible',

  /**
   * video-seconds-played
   *
   * Indicates that a video was playing when the
   * video-seconds-played interval fired.
   * @property {!VideoAnalyticsDetailsDef} details
   * @event video-session-visible
   */
  SECONDS_PLAYED: 'video-seconds-played'
};

/**
 * @typedef {{
 *   autoplay: boolean,
 *   currentTime: number,
 *   duration: number,
 *   height: number,
 *   id: string,
 *   playedRangesJson: string,
 *   playedTotal: number,
 *   muted: boolean,
 *   state: string,
 *   width: number
 * }}
 */
var VideoAnalyticsDetailsDef = exports.VideoAnalyticsDetailsDef = void 0;

},{"./action-trust":42}],86:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cssEscape = cssEscape;
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

/**
 * This regex consists of 4 matching capture groups and one (non-matching) fallback:
 *
 * - (\0), catch the null terminator character so it may be replaced by UTF
 *   Replacement Char
 * - ^(-)$, catch a solitary dash char, so that it may be backslash escaped.
 *   This is a separate capture group so that the legal-chars (group 4) doesn't
 *   capture it first, since that group doesn't need to escape its dash.
 * - ([\x01-\x1f\x7f]|^-?[0-9]), catch a UTF control char, or any leading
 *   number (with an optional leading dash). The control or the number (but not
 *   the leading dash) must be hex-escaped,.
 * - ([\x80-\uffff0-9a-zA-Z_-]+), catch legal-chars, with the exception of a
 *   solitary dash, which will already have matched in group 1.
 * - [^], finally, a catch-all that allows us to backslash escape the char.
 *
 * Together, this matches everything necessary for CSS.escape.
 */
var regex = /(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;

function escaper(match, nil, dash, hexEscape, chars) {
  // Chars is the legal-chars (group 4) capture
  if (chars) {
    return chars;
  }
  // Nil is the null terminator (group 1) capture
  if (nil) {
    return '\uFFFD';
  }
  // Both UTF control chars, and leading numbers (with optional leading dash)
  // (group 3) must be backslash escaped with a trailing space.  Funnily, the
  // leading dash must not be escaped, but the number. :shrug:
  if (hexEscape) {
    return match.slice(0, -1) + '\\' + match.slice(-1).charCodeAt(0).toString(16) + ' ';
  }
  // Finally, the solitary dash and the catch-all chars require backslash
  // escaping.
  return '\\' + match;
}

/**
 * https://drafts.csswg.org/cssom/#serialize-an-identifier
 * @param {string} value
 * @return {string}
 */
function cssEscape(value) {
  return String(value).replace(regex, escaper);
}

},{}]},{},[9])


})});//# sourceMappingURL=amp-story-0.1.max.js.map
