(self.webpackChunkfractalgram=self.webpackChunkfractalgram||[]).push([[6972],{94762:e=>{e.exports=function(e){const n=e.regex,a={className:"number",relevance:0,variants:[{begin:/([+-]+)?[\d]+_[\d_]+/},{begin:e.NUMBER_RE}]},s=e.COMMENT();s.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}];const i={className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)\}/}]},t={className:"literal",begin:/\bon|off|true|false|yes|no\b/},l={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:"'''",end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'},{begin:"'",end:"'"}]},c={begin:/\[/,end:/\]/,contains:[s,t,i,l,a,"self"],relevance:0},r=n.either(/[A-Za-z0-9_-]+/,/"(\\"|[^"])*"/,/'[^']*'/);return{name:"TOML, also INI",aliases:["toml"],case_insensitive:!0,illegal:/\S/,contains:[s,{className:"section",begin:/\[+/,end:/\]+/},{begin:n.concat(r,"(\\s*\\.\\s*",r,")*",n.lookahead(/\s*=\s*[^#\s]/)),className:"attr",starts:{end:/$/,contains:[s,c,t,i,l,a]}}]}}}}]);
//# sourceMappingURL=6972.b7f26f5609014372a719.js.map