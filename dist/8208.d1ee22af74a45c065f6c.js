(self.webpackChunkfractalgram=self.webpackChunkfractalgram||[]).push([[8208],{36652:e=>{function n(e){return new RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}function t(e){return e?"string"==typeof e?e:e.source:null}function i(e){return a("(?=",e,")")}function a(...e){return e.map((e=>t(e))).join("")}function o(...e){const n=function(e){const n=e[e.length-1];return"object"==typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}(e);return"("+(n.capture?"":"?:")+e.map((e=>t(e))).join("|")+")"}e.exports=function(e){const t={scope:"keyword",match:/\b(yield|return|let|do|match|use)!/},r=["bool","byte","sbyte","int8","int16","int32","uint8","uint16","uint32","int","uint","int64","uint64","nativeint","unativeint","decimal","float","double","float32","single","char","string","unit","bigint","option","voption","list","array","seq","byref","exn","inref","nativeptr","obj","outref","voidptr","Result"],s={keyword:["abstract","and","as","assert","base","begin","class","default","delegate","do","done","downcast","downto","elif","else","end","exception","extern","finally","fixed","for","fun","function","global","if","in","inherit","inline","interface","internal","lazy","let","match","member","module","mutable","namespace","new","of","open","or","override","private","public","rec","return","static","struct","then","to","try","type","upcast","use","val","void","when","while","with","yield"],literal:["true","false","null","Some","None","Ok","Error","infinity","infinityf","nan","nanf"],built_in:["not","ref","raise","reraise","dict","readOnlyDict","set","get","enum","sizeof","typeof","typedefof","nameof","nullArg","invalidArg","invalidOp","id","fst","snd","ignore","lock","using","box","unbox","tryUnbox","printf","printfn","sprintf","eprintf","eprintfn","fprintf","fprintfn","failwith","failwithf"],"variable.constant":["__LINE__","__SOURCE_DIRECTORY__","__SOURCE_FILE__"]},c={variants:[e.COMMENT(/\(\*(?!\))/,/\*\)/,{contains:["self"]}),e.C_LINE_COMMENT_MODE]},l={scope:"variable",begin:/``/,end:/``/},u=/\B('|\^)/,f={scope:"symbol",variants:[{match:a(u,/``.*?``/)},{match:a(u,e.UNDERSCORE_IDENT_RE)}],relevance:0},p=function({includeEqual:e}){let t;t=e?"!%&*+-/<=>@^|~?":"!%&*+-/<>@^|~?";const r=a("[",...Array.from(t).map(n),"]"),s=o(r,/\./),c=a(s,i(s)),l=o(a(c,s,"*"),a(r,"+"));return{scope:"operator",match:o(l,/:\?>/,/:\?/,/:>/,/:=/,/::?/,/\$/),relevance:0}},d=p({includeEqual:!0}),b=p({includeEqual:!1}),g=function(n,t){return{begin:a(n,i(a(/\s*/,o(/\w/,/'/,/\^/,/#/,/``/,/\(/,/{\|/)))),beginScope:t,end:i(o(/\n/,/=/)),relevance:0,keywords:e.inherit(s,{type:r}),contains:[c,f,e.inherit(l,{scope:null}),b]}},m=g(/:/,"operator"),h=g(/\bof\b/,"keyword"),y={begin:[/(^|\s+)/,/type/,/\s+/,/[a-zA-Z_](\w|')*/],beginScope:{2:"keyword",4:"title.class"},end:i(/\(|=|$/),keywords:s,contains:[c,e.inherit(l,{scope:null}),f,{scope:"operator",match:/<|>/},m]},E={scope:"computation-expression",match:/\b[_a-z]\w*(?=\s*\{)/},_={begin:[/^\s*/,a(/#/,o("if","else","endif","line","nowarn","light","r","i","I","load","time","help","quit")),/\b/],beginScope:{2:"meta"},end:i(/\s|$/)},w={variants:[e.BINARY_NUMBER_MODE,e.C_NUMBER_MODE]},v={scope:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE]},A={scope:"string",begin:/@"/,end:/"/,contains:[{match:/""/},e.BACKSLASH_ESCAPE]},S={scope:"string",begin:/"""/,end:/"""/,relevance:2},C={scope:"subst",begin:/\{/,end:/\}/,keywords:s},k={scope:"string",begin:/\$"/,end:/"/,contains:[{match:/\{\{/},{match:/\}\}/},e.BACKSLASH_ESCAPE,C]},O={scope:"string",begin:/(\$@|@\$)"/,end:/"/,contains:[{match:/\{\{/},{match:/\}\}/},{match:/""/},e.BACKSLASH_ESCAPE,C]},x={scope:"string",begin:/\$"""/,end:/"""/,contains:[{match:/\{\{/},{match:/\}\}/},C],relevance:2},R={scope:"string",match:a(/'/,o(/[^\\']/,/\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8})/),/'/)};return C.contains=[O,k,A,v,R,t,c,l,m,E,_,w,f,d],{name:"F#",aliases:["fs","f#"],keywords:s,illegal:/\/\*/,classNameAliases:{"computation-expression":"keyword"},contains:[t,{variants:[x,O,k,S,A,v,R]},c,l,y,{scope:"meta",begin:/\[</,end:/>\]/,relevance:2,contains:[l,S,A,v,R,w]},h,m,E,_,w,f,d]}}}}]);
//# sourceMappingURL=8208.d1ee22af74a45c065f6c.js.map