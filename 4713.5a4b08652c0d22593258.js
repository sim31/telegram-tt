(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[4713],{94713:(s,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>i});var l=a(93966),j=a(14050);const r={"1c":["1с"],bash:["sh"],c:["h"],cpp:["cc","c++","h++","hpp","hh","hxx","cxx"],csharp:["cs","c#"],css:[],erlang:["erl"],elixir:["ex","exs"],go:["golang"],handlebars:["hbs","html.hbs","html.handlebars","htmlbars"],haskell:["hs"],ini:["toml"],java:["jsp"],javascript:["js","jsx","mjs","cjs"],json:[],kotlin:["kt","kts"],lisp:[],lua:[],makefile:["mk","mak","make"],markdown:["md","mkdown","mkd"],matlab:[],objectivec:["mm","objc","obj-c","obj-c++","objective-c++"],perl:["pl","pm"],php:[],python:["py","gyp","ipython"],r:[],ruby:["rb","gemspec","podspec","thor","irb"],rust:["rs"],scheme:[],scss:[],smalltalk:["st"],sql:[],swift:[],twig:["craftcms"],typescript:["ts","tsx"],xml:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],yaml:[]},t=new Map;async function i(s,e){const j=e.toLowerCase(),i=await async function(s){if(l.$.registered(s))return!0;const e=(j=s,null===(i=Object.entries(r).find((s=>{let[e,a]=s;return e===j||a.includes(j)})))||void 0===i?void 0:i[0]);var j,i;if(!e)return!1;if(t.has(e))return await t.get(e),!0;const c=a(94949)(`./${e}`);t.set(e,c);const o=await c;return l.$.registerLanguage(e,o.default),"1c"===e&&l.$.registerAlias("1c","1с"),!0}(j);if(i)return c(l.$.highlight(j,s))}function c(s){var e;const a=s.children.map((s=>"text"===s.type?s.value:"element"===s.type?c(s):void 0)).filter(Boolean);if("root"===s.type)return j.ZP.createElement("code",{className:"hljs custom-scroll-x"},a);const l=s.tagName,r=null===(e=s.properties)||void 0===e?void 0:e.className,t=null==r?void 0:r.join(" ");return j.ZP.createElement(l,{className:t},a)}},94949:(s,e,a)=>{var l={"./1c":[30908,3075],"./1c.js":[30908,3075],"./abnf":[62853,9623],"./abnf.js":[62853,9623],"./accesslog":[35976,7799],"./accesslog.js":[35976,7799],"./actionscript":[55505,244],"./actionscript.js":[55505,244],"./ada":[40059,1276],"./ada.js":[40059,1276],"./angelscript":[72921,7316],"./angelscript.js":[72921,7316],"./apache":[4998,4747],"./apache.js":[4998,4747],"./applescript":[99733,8063],"./applescript.js":[99733,8063],"./arcade":[70149,2892],"./arcade.js":[70149,2892],"./arduino":[89860,8401],"./arduino.js":[89860,8401],"./armasm":[93138,5344],"./armasm.js":[93138,5344],"./asciidoc":[88699,5386],"./asciidoc.js":[88699,5386],"./aspectj":[59950,9565],"./aspectj.js":[59950,9565],"./autohotkey":[31599,8815],"./autohotkey.js":[31599,8815],"./autoit":[1892,3163],"./autoit.js":[1892,3163],"./avrasm":[53105,831],"./avrasm.js":[53105,831],"./awk":[44868,6548],"./awk.js":[44868,6548],"./axapta":[52059,9071],"./axapta.js":[52059,9071],"./bash":[98780,143],"./bash.js":[98780,143],"./basic":[80995,4933],"./basic.js":[80995,4933],"./bnf":[87061,1641],"./bnf.js":[87061,1641],"./brainfuck":[16380,5855],"./brainfuck.js":[16380,5855],"./c":[80612,4314],"./c.js":[80612,4314],"./cal":[15762,5239],"./cal.js":[15762,5239],"./capnproto":[90614,7052],"./capnproto.js":[90614,7052],"./ceylon":[33796,1418],"./ceylon.js":[33796,1418],"./clean":[52222,212],"./clean.js":[52222,212],"./clojure":[92177,67],"./clojure-repl":[42012,1360],"./clojure-repl.js":[42012,1360],"./clojure.js":[92177,67],"./cmake":[35849,9285],"./cmake.js":[35849,9285],"./coffeescript":[95437,713],"./coffeescript.js":[95437,713],"./coq":[99087,6146],"./coq.js":[99087,6146],"./cos":[72569,1954],"./cos.js":[72569,1954],"./cpp":[6248,2690],"./cpp.js":[6248,2690],"./crmsh":[77740,9379],"./crmsh.js":[77740,9379],"./crystal":[83147,3124],"./crystal.js":[83147,3124],"./csharp":[63707,5309],"./csharp.js":[63707,5309],"./csp":[89534,5281],"./csp.js":[89534,5281],"./css":[15064,4303],"./css.js":[15064,4303],"./d":[118,3894],"./d.js":[118,3894],"./dart":[26642,6688],"./dart.js":[26642,6688],"./delphi":[7762,256],"./delphi.js":[7762,256],"./diff":[87731,9486],"./diff.js":[87731,9486],"./django":[33189,2853],"./django.js":[33189,2853],"./dns":[31344,8530],"./dns.js":[31344,8530],"./dockerfile":[57360,2098],"./dockerfile.js":[57360,2098],"./dos":[20605,6401],"./dos.js":[20605,6401],"./dsconfig":[7522,6284],"./dsconfig.js":[7522,6284],"./dts":[11729,3863],"./dts.js":[11729,3863],"./dust":[1450,154],"./dust.js":[1450,154],"./ebnf":[13039,9783],"./ebnf.js":[13039,9783],"./elixir":[62543,3800],"./elixir.js":[62543,3800],"./elm":[25658,4276],"./elm.js":[25658,4276],"./erb":[32151,7897],"./erb.js":[32151,7897],"./erlang":[57569,3866],"./erlang-repl":[12282,209],"./erlang-repl.js":[12282,209],"./erlang.js":[57569,3866],"./excel":[5817,9535],"./excel.js":[5817,9535],"./fix":[13146,4408],"./fix.js":[13146,4408],"./flix":[93090,8369],"./flix.js":[93090,8369],"./fortran":[13532,3280],"./fortran.js":[13532,3280],"./fsharp":[36652,8208],"./fsharp.js":[36652,8208],"./gams":[45379,2002],"./gams.js":[45379,2002],"./gauss":[45004,1098],"./gauss.js":[45004,1098],"./gcode":[11871,2001],"./gcode.js":[11871,2001],"./gherkin":[16499,6770],"./gherkin.js":[16499,6770],"./glsl":[21942,7119],"./glsl.js":[21942,7119],"./gml":[81921,4710],"./gml.js":[81921,4710],"./go":[92399,4569],"./go.js":[92399,4569],"./golo":[9574,5040],"./golo.js":[9574,5040],"./gradle":[89878,9641],"./gradle.js":[89878,9641],"./graphql":[21738,8663],"./graphql.js":[21738,8663],"./groovy":[54658,2342],"./groovy.js":[54658,2342],"./haml":[21950,2537],"./haml.js":[21950,2537],"./handlebars":[71407,958],"./handlebars.js":[71407,958],"./haskell":[67077,3698],"./haskell.js":[67077,3698],"./haxe":[42720,3585],"./haxe.js":[42720,3585],"./hsp":[69662,9375],"./hsp.js":[69662,9375],"./http":[78937,7125],"./http.js":[78937,7125],"./hy":[99358,3309],"./hy.js":[99358,3309],"./inform7":[84458,1627],"./inform7.js":[84458,1627],"./ini":[94762,6972],"./ini.js":[94762,6972],"./irpf90":[60320,8138],"./irpf90.js":[60320,8138],"./isbl":[14664,3588],"./isbl.js":[14664,3588],"./java":[28257,8822],"./java.js":[28257,8822],"./javascript":[40978,9227],"./javascript.js":[40978,9227],"./jboss-cli":[84111,6052],"./jboss-cli.js":[84111,6052],"./json":[40014,4850],"./json.js":[40014,4850],"./julia":[24629,3098],"./julia-repl":[25850,5699],"./julia-repl.js":[25850,5699],"./julia.js":[24629,3098],"./kotlin":[65812,6941],"./kotlin.js":[65812,6941],"./lasso":[73530,1699],"./lasso.js":[73530,1699],"./latex":[47408,730],"./latex.js":[47408,730],"./ldif":[57604,1879],"./ldif.js":[57604,1879],"./leaf":[23961,1752],"./leaf.js":[23961,1752],"./less":[44210,2390],"./less.js":[44210,2390],"./lisp":[91943,6483],"./lisp.js":[91943,6483],"./livecodeserver":[82299,2767],"./livecodeserver.js":[82299,2767],"./livescript":[69735,3408],"./livescript.js":[69735,3408],"./llvm":[14972,2741],"./llvm.js":[14972,2741],"./lsl":[37034,6346],"./lsl.js":[37034,6346],"./lua":[4981,5930],"./lua.js":[4981,5930],"./makefile":[97903,6297],"./makefile.js":[97903,6297],"./markdown":[52003,3488],"./markdown.js":[52003,3488],"./mathematica":[8601,4039],"./mathematica.js":[8601,4039],"./matlab":[48009,1933],"./matlab.js":[48009,1933],"./maxima":[27020,1437],"./maxima.js":[27020,1437],"./mel":[67739,3505],"./mel.js":[67739,3505],"./mercury":[44261,3288],"./mercury.js":[44261,3288],"./mipsasm":[74807,4231],"./mipsasm.js":[74807,4231],"./mizar":[49291,4536],"./mizar.js":[49291,4536],"./mojolicious":[8895,4685],"./mojolicious.js":[8895,4685],"./monkey":[9676,4723],"./monkey.js":[9676,4723],"./moonscript":[56486,6931],"./moonscript.js":[56486,6931],"./n1ql":[71414,7794],"./n1ql.js":[71414,7794],"./nestedtext":[5384,4037],"./nestedtext.js":[5384,4037],"./nginx":[94028,7388],"./nginx.js":[94028,7388],"./nim":[45968,7556],"./nim.js":[45968,7556],"./nix":[84802,5066],"./nix.js":[84802,5066],"./node-repl":[69609,3848],"./node-repl.js":[69609,3848],"./nsis":[9968,5368],"./nsis.js":[9968,5368],"./objectivec":[2446,3076],"./objectivec.js":[2446,3076],"./ocaml":[57552,6969],"./ocaml.js":[57552,6969],"./openscad":[6277,9682],"./openscad.js":[6277,9682],"./oxygene":[80136,6798],"./oxygene.js":[80136,6798],"./parser3":[43412,1917],"./parser3.js":[43412,1917],"./perl":[12482,2054],"./perl.js":[12482,2054],"./pf":[4485,3404],"./pf.js":[4485,3404],"./pgsql":[89814,3539],"./pgsql.js":[89814,3539],"./php":[92656,8913],"./php-template":[35112,1967],"./php-template.js":[35112,1967],"./php.js":[92656,8913],"./plaintext":[62437,5204],"./plaintext.js":[62437,5204],"./pony":[46874,9822],"./pony.js":[46874,9822],"./powershell":[85040,8812],"./powershell.js":[85040,8812],"./processing":[25371,7963],"./processing.js":[25371,7963],"./profile":[73476,4646],"./profile.js":[73476,4646],"./prolog":[63944,8294],"./prolog.js":[63944,8294],"./properties":[17546,9125],"./properties.js":[17546,9125],"./protobuf":[15559,9400],"./protobuf.js":[15559,9400],"./puppet":[93867,4484],"./puppet.js":[93867,4484],"./purebasic":[92938,5474],"./purebasic.js":[92938,5474],"./python":[38245,191],"./python-repl":[3722,5297],"./python-repl.js":[3722,5297],"./python.js":[38245,191],"./q":[82623,2251],"./q.js":[82623,2251],"./qml":[23797,5119],"./qml.js":[23797,5119],"./r":[54730,9606],"./r.js":[54730,9606],"./reasonml":[2318,625],"./reasonml.js":[2318,625],"./rib":[94820,6892],"./rib.js":[94820,6892],"./roboconf":[41874,370],"./roboconf.js":[41874,370],"./routeros":[74005,9328],"./routeros.js":[74005,9328],"./rsl":[92852,2369],"./rsl.js":[92852,2369],"./ruby":[67905,9338],"./ruby.js":[67905,9338],"./ruleslanguage":[32192,8435],"./ruleslanguage.js":[32192,8435],"./rust":[9880,9223],"./rust.js":[9880,9223],"./sas":[93129,4835],"./sas.js":[93129,4835],"./scala":[30729,1402],"./scala.js":[30729,1402],"./scheme":[82254,9657],"./scheme.js":[82254,9657],"./scilab":[85149,2243],"./scilab.js":[85149,2243],"./scss":[71062,6642],"./scss.js":[71062,6642],"./shell":[7874,3656],"./shell.js":[7874,3656],"./smali":[10943,6220],"./smali.js":[10943,6220],"./smalltalk":[17659,2137],"./smalltalk.js":[17659,2137],"./sml":[45935,2138],"./sml.js":[45935,2138],"./sqf":[3677,4753],"./sqf.js":[3677,4753],"./sql":[98935,1142],"./sql.js":[98935,1142],"./stan":[50052,5588],"./stan.js":[50052,5588],"./stata":[60454,4973],"./stata.js":[60454,4973],"./step21":[37022,4838],"./step21.js":[37022,4838],"./stylus":[88688,5246],"./stylus.js":[88688,5246],"./subunit":[40726,905],"./subunit.js":[40726,905],"./swift":[77690,7551],"./swift.js":[77690,7551],"./taggerscript":[15460,3936],"./taggerscript.js":[15460,3936],"./tap":[30422,3411],"./tap.js":[30422,3411],"./tcl":[78158,1514],"./tcl.js":[78158,1514],"./thrift":[30906,5434],"./thrift.js":[30906,5434],"./tp":[6123,5060],"./tp.js":[6123,5060],"./twig":[71973,4686],"./twig.js":[71973,4686],"./typescript":[28987,5603],"./typescript.js":[28987,5603],"./vala":[41462,3881],"./vala.js":[41462,3881],"./vbnet":[27531,7049],"./vbnet.js":[27531,7049],"./vbscript":[4703,3147],"./vbscript-html":[48704,8709],"./vbscript-html.js":[48704,8709],"./vbscript.js":[4703,3147],"./verilog":[54494,483],"./verilog.js":[54494,483],"./vhdl":[48110,3420],"./vhdl.js":[48110,3420],"./vim":[53638,3311],"./vim.js":[53638,3311],"./wasm":[81533,6889],"./wasm.js":[81533,6889],"./wren":[68563,4566],"./wren.js":[68563,4566],"./x86asm":[19947,4986],"./x86asm.js":[19947,4986],"./xl":[49338,3268],"./xl.js":[49338,3268],"./xml":[4610,4334],"./xml.js":[4610,4334],"./xquery":[5595,3108],"./xquery.js":[5595,3108],"./yaml":[71392,9635],"./yaml.js":[71392,9635],"./zephir":[42222,5999],"./zephir.js":[42222,5999]};function j(s){if(!a.o(l,s))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=l[s],j=e[0];return a.e(e[1]).then((()=>a.t(j,23)))}j.keys=()=>Object.keys(l),j.id=94949,s.exports=j}}]);
//# sourceMappingURL=4713.5a4b08652c0d22593258.js.map