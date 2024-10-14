(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{491:function(e,t,r){"use strict";r.r(t);var s=r(68),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"errors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[e._v("#")]),e._v(" Errors")]),e._v(" "),r("div",{staticClass:"custom-block highlight"},[r("p",{staticClass:"custom-block-title"},[e._v("🦄 Chevereto V4 users")]),r("p",[e._v("Check the updated documentation at "),r("a",{attrs:{href:"https://v4-docs.chevereto.com/application/reference/errors.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("😖 Debug"),r("OutboundLink")],1),e._v(".")])]),r("p",[e._v("Application errors can be caused by several causes and understanding in which layer the error is affecting the system will drive towards an easy outcome. Kindly understand that in multi-layered systems like Chevereto is crucial to understand when an error is caused by Chevereto or when the problem is elsewhere.")]),e._v(" "),r("h2",{attrs:{id:"error-id"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#error-id"}},[e._v("#")]),e._v(" Error Id")]),e._v(" "),r("p",[e._v("Chevereto logs all error events under a unique "),r("strong",[e._v("errorId")]),e._v(" associated with the error stack trace and debug information.")]),e._v(" "),r("div",{staticClass:"language-plain extra-class"},[r("pre",{pre:!0,attrs:{class:"language-plain"}},[r("code",[e._v("<some code>: ** errorId #dacb7f96fb9fd28d **\n")])])]),r("p",[e._v("Application errors in Chevereto "),r("strong",[e._v("are hidden by default")]),e._v(" on production mode, the only public part is the errorId. Errors won't be displayed "),r("strong",[e._v("for security reasons")]),e._v(" and the errorId is a randomly generated unique identifier per error event.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("Note: A error id is not an error message")]),e._v(" "),r("p",[e._v("The error id exists so you can lookup for that error in your configured system debug device.")])]),e._v(" "),r("h2",{attrs:{id:"stack-trace"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stack-trace"}},[e._v("#")]),e._v(" Stack Trace")]),e._v(" "),r("p",[e._v("Code below shows an example error stack trace. It describes the error, provide its unique errorId and it shows the call stack.")]),e._v(" "),r("div",{staticClass:"language-txt extra-class"},[r("pre",{pre:!0,attrs:{class:"language-txt"}},[r("code",[e._v("Aw, snap! Internal Server Error [debug @ error_log] - https://chevereto.com/go/v3debug\n\n** errorId #dacb7f96fb9fd28d **\n>> PDOException [2002]: SQLSTATE[HY000] [2002] php_network_getaddresses: getaddrinfo failed: Name or service not known\nAt /lib/G/classes/class.db.php:66\n\n>> PDOException [0]: PDO::__construct(): php_network_getaddresses: getaddrinfo failed: Name or service not known\nAt /lib/G/classes/class.db.php:66\n\nStack trace:\n#0 /lib/G/classes/class.db.php(66): PDO->__construct()\n#1 /lib/G/classes/class.db.php(80): G\\\\DB->__construct()\n#2 /app/loader.php(58): G\\\\DB::getInstance()\n#3 /index.php(20): include_once('/app/loader.php')\n")])])]),r("h2",{attrs:{id:"it-is-chevereto-related"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#it-is-chevereto-related"}},[e._v("#")]),e._v(" It is Chevereto related?")]),e._v(" "),r("p",[e._v("Chevereto exists on top of many technologies working at the same time and any component of this stack could fail.")]),e._v(" "),r("p",[e._v("It is likely that Chevereto "),r("strong",[e._v("won't cause")]),e._v(" the following issues:")]),e._v(" "),r("ul",[r("li",[e._v("Unable to connect (network issues)")]),e._v(" "),r("li",[e._v("MySQL server gone")]),e._v(" "),r("li",[e._v("CORS (missing icons, fonts)")]),e._v(" "),r("li",[e._v("Cookies/Sessions not working (permissions)")]),e._v(" "),r("li",[e._v("Restricted functions ("),r("code",[e._v("set_time_limit")]),e._v(")")]),e._v(" "),r("li",[e._v("Server restrictions ("),r("code",[e._v("mod_security")]),e._v(")")])]),e._v(" "),r("h2",{attrs:{id:"common-errors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#common-errors"}},[e._v("#")]),e._v(" Common errors")]),e._v(" "),r("h3",{attrs:{id:"http-500-internal-server-error"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-500-internal-server-error"}},[e._v("#")]),e._v(" HTTP 500 Internal Server Error")]),e._v(" "),r("p",[e._v("This is a generic error response emitted by the web server layer and this it indicates the existence of an error, but it doesn't specify any concrete explication for it.")]),e._v(" "),r("p",[e._v("As these errors may spawn in any layer, it is recommended to check the system error log device (read "),r("RouterLink",{attrs:{to:"/manual/troubleshooting/debug.html#accessing-logs"}},[e._v("accessing logs")]),e._v(" to learn how-to).")],1),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("Debugging HTTP 500 error")]),e._v(" "),r("p",[e._v("This errors need to be debugged in the web-server layer, which will vary depending on the web server software being used. Refer to your web server provisioning documentation.")])]),e._v(" "),r("p",[e._v("Once you get the error you can solve the situation in your own context or use that information to request "),r("a",{attrs:{href:"https://chevereto.com/support",target:"_blank",rel:"noopener noreferrer"}},[e._v("support"),r("OutboundLink")],1),e._v(" from us.")]),e._v(" "),r("h3",{attrs:{id:"aw-snap-internal-server-error"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aw-snap-internal-server-error"}},[e._v("#")]),e._v(" Aw, snap! Internal Server Error")]),e._v(" "),r("div",{staticClass:"language-txt extra-class"},[r("pre",{pre:!0,attrs:{class:"language-txt"}},[r("code",[e._v("Aw, snap! Internal Server Error - Check your error_log or enable debug_mode = 3\n")])])]),r("p",[e._v("This message indicates an error caught by Chevereto, but hidden due to "),r("strong",[e._v("production error reporting")]),e._v(" settings. To actually know what is going on you have to "),r("RouterLink",{attrs:{to:"/manual/troubleshooting/debug.html"}},[e._v("debug")]),e._v(".")],1),e._v(" "),r("h3",{attrs:{id:"database-messages"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#database-messages"}},[e._v("#")]),e._v(" Database messages")]),e._v(" "),r("div",{staticClass:"custom-block danger"},[r("p",{staticClass:"custom-block-title"},[e._v("Dumped update query")]),e._v(" "),r("p",[e._v("If at "),r("code",[e._v("/install")]),e._v(" you see a plain text message starting with "),r("code",[e._v("#Dumped update query")]),e._v(" it means that you "),r("strong",[e._v("MUST")]),e._v(" manual run the printed queries in your MySQL console.")])]),e._v(" "),r("p",[e._v("If "),r("RouterLink",{attrs:{to:"/settings/system.html#dump-update-query"}},[e._v("dump update query")]),e._v(" setting is "),r("strong",[e._v("enabled")]),e._v(" or if the images table has "),r("strong",[e._v("more than 1,000,000")]),e._v(" records, Chevereto will dump the SQL statements required to carry the database update which must run direct in the MySQL console.")],1),e._v(" "),r("p",[e._v("Chevereto has this functionality to minimize breaking your large database as the process could take several minutes to complete.")]),e._v(" "),r("p",[e._v("When manual updating the database keep the following considerations:")]),e._v(" "),r("ul",[r("li",[e._v("Disconnect all peers")]),e._v(" "),r("li",[e._v("Turn off the MySQL server, work in its console (phpMyAdmin, Adminer, CLI)")]),e._v(" "),r("li",[e._v("Run the MySQL statements one-by-one (a semi-colon "),r("code",[e._v(";")]),e._v(" denotes when a MySQL statement ends)")])])])}),[],!1,null,null,null);t.default=a.exports}}]);