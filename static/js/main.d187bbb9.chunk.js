(this["webpackJsonphangman-game"]=this["webpackJsonphangman-game"]||[]).push([[0],[,,,,,,,,function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(8),n(9);var r=n(1),i=n.n(r),s=n(6),a=n.n(s),c=n(2),o=n.n(c),d=n(4),u=function(e){var t=Object({NODE_ENV:"production",PUBLIC_URL:"/hangman-game",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})[e];if(!t)throw new Error("Missing: process.env['".concat(e,"']."));return t},l={rapidApi:{key:u("REACT_APP_RAPIDAPI_KEY"),host:u("REACT_APP_RAPIDAPI_HOST")},isProd:!0,isDev:!1,isTest:!1},j="https://".concat(l.rapidApi.host,"/words/?random=true"),f={getRandomWord:function(){return Object(d.a)(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j,{method:"GET",headers:{"x-rapidapi-key":l.rapidApi.key,"x-rapidapi-host":l.rapidApi.host}});case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,"string"!==typeof(r=n.word)){e.next=9;break}return e.abrupt("return",r);case 9:throw new Error('\u2620\ufe0f There something\'s wrong with the "word"');case 10:case"end":return e.stop()}}),e)})))()}};var h=n(3);n(15);var v=n(0),b=["head","neck","corpus","arm arm--right","arm arm--left","hand hand--right","hand hand--left","leg leg--right","leg leg--left","foot foot--right","foot foot--left"];function m(e){var t=e.children;return Object(v.jsxs)("div",{className:"folk-container",children:[Object(v.jsx)("div",{className:"bar bar--horizontal"}),Object(v.jsx)("div",{className:"bar bar--vertical"}),t]})}var p=function(e){var t=e.visiblePartsCount,n=b.slice(0,t);return Object(v.jsx)(m,{children:Object(v.jsx)("div",{className:"folk","data-testid":"folk",children:n.map((function(e){return Object(v.jsx)("div",{className:e},e)}))})})};n(17);var O=function(e){var t=e.children;return Object(v.jsx)("div",{"data-testid":"layout",className:"layout",children:Object(v.jsx)("div",{className:"container",children:t})})},g=(n(18),n(19),n(7));var x=function(e){var t=e.inactive,n=e.children;return Object(v.jsx)("div",{"aria-label":t?"Inactive letter tile":"Active letter tile","data-testid":"letter-tile",className:Object(g.a)("letter-tile",t&&"inactive"),children:n})};var w=function(e){var t=e.word,n=e.guessedLetters,r=t.padStart(11).split("");return Object(v.jsx)("div",{className:"letter-tiles",children:r.map((function(e,t){return Object(v.jsx)(x,{inactive:" "===e,children:n.includes(e)||"-"===e?e:null},t)}))})};n(20);var k=function(e){var t=e.title,n=e.description,r=e.buttonText,i=e.onButtonClick,s=e.noButton;return Object(v.jsxs)("div",{className:"modal",children:[Object(v.jsx)("h1",{className:"title",children:t}),n&&Object(v.jsx)("p",{className:"description",children:n}),!s&&Object(v.jsx)("button",{className:"button",onClick:i,children:r})]})};n(21);var N=function(e){var t=e.missedLetters;return Object(v.jsxs)("div",{className:"you-missed",children:[Object(v.jsx)("div",{className:"title",children:"You missed:"}),Object(v.jsx)("div",{className:"missed-letters",children:t.join(" ")})]})};var E=function(e){var t=e.api,n=r.useState(!0),i=Object(h.a)(n,2),s=i[0],a=i[1],c=r.useState([]),u=Object(h.a)(c,2),l=u[0],j=u[1],f=function(e){var t=r.useState(""),n=Object(h.a)(t,2),i=n[0],s=n[1],a=r.useState("idle"),c=Object(h.a)(a,2),u=c[0],l=c[1],j=r.useCallback(Object(d.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l("pending"),t.prev=1,t.next=4,e.getRandomWord();case 4:n=t.sent,l("resolved"),s(n.toUpperCase()),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),l("rejected"),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,9]])}))),[e]);return r.useEffect((function(){j()}),[j]),{status:u,fetchRandomWord:j,randomWord:i,isIdle:"idle"===u,isPending:"pending"===u,isResolved:"resolved"===u,isRejected:"rejected"===u}}(t),b=f.randomWord,m=f.status,g=f.fetchRandomWord,x=l.filter((function(e){return!b.includes(e)})),E=l.filter((function(e){return b.includes(e)})),A=11===x.length,C=b.split("").every((function(e){return E.includes(e)})),P="pending"===m,S="rejected"===m,T="resolved"===m;r.useEffect((function(){var e=function(e){var t=e.key;/^[a-z]$/i.test(t)&&(l.includes(t.toUpperCase())||s||C||A||P||S||j(l.concat(t.toUpperCase())))};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[l,s,C,A,P,S]),r.useEffect((function(){b.length>11&&g()}),[b,g]);var R=function(){j([]),g()};if(s)return Object(v.jsxs)(O,{children:[Object(v.jsx)(k,{title:"Netguru Hangman",description:"This is a simple Hangman game, have fun and good luck!",buttonText:"Start game",onButtonClick:function(){a(!1)}}),Object(v.jsx)(p,{visiblePartsCount:11}),Object(v.jsx)(N,{missedLetters:["B","D","E","Z","P","U","K","L","Q","W"]}),Object(v.jsx)(w,{word:"HANGMAN",guessedLetters:["H","A"]})]});var _=b.length>11?"":b;return Object(v.jsxs)(O,{children:[P&&Object(v.jsx)(k,{title:"Loading...",noButton:!0}),S&&Object(v.jsx)(k,{title:"Ooops :(",description:"Something went wrong, try refreshing the page.",noButton:!0}),A&&T&&Object(v.jsx)(k,{title:"Game over",buttonText:"New word",onButtonClick:R}),C&&T&&Object(v.jsx)(k,{title:"You won!",buttonText:"Again",description:"Congratulations, you missed ".concat(x.length," letters."),onButtonClick:R}),Object(v.jsx)(p,{visiblePartsCount:x.length}),Object(v.jsx)(N,{missedLetters:x}),Object(v.jsx)(w,{word:_,guessedLetters:E})]})},A=l.isProd?f:function(e){var t=0;return{getRandomWord:function(){return Object(d.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e[t++%e.length]);case 1:case"end":return n.stop()}}),n)})))()}}}(["maciek","a","word","test"]);a.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(E,{api:A})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.d187bbb9.chunk.js.map