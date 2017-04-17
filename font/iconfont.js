;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-s" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M862.71671 1019.416612 193.694467 1019.416612c-27.101241 0-49.157583-22.056342-49.157583-49.157583L144.536884 320.885288c0-27.101241 22.056342-49.157583 49.157583-49.157583l669.022243 0c27.101241 0 49.157583 22.056342 49.157583 49.157583l0 649.372717C911.874293 997.36027 889.817951 1019.416612 862.71671 1019.416612zM193.694467 320.486198l-0.399089 649.77283 669.421332 0.399089c0.217964 0 0.399089-0.181125 0.399089-0.399089L863.115799 320.885288 193.694467 320.486198z"  ></path>' +
    '' +
    '<path d="M276.608875 299.04691l-49.339732-4.743024C243.191788 128.512932 374.670262 3.494591 533.10569 3.494591c153.426345 0 284.409538 120.589472 304.699654 280.501532l-49.169863 6.243191C771.491009 155.021679 661.632949 53.052287 533.10569 53.052287 400.332734 53.052287 290.063305 158.808936 276.608875 299.04691z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fangdajing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M886.054231 886.98851c-9.66615 9.490142-25.38311 9.490142-35.0554 0L652.608411 691.736571c-55.375192 44.187385-125.861546 70.784136-202.691375 70.784136-177.841408 0-322.013995-141.871171-322.013995-316.934303 0-174.99764 144.172587-316.874951 322.012971-316.874951s322.017064 141.876288 322.017064 316.874951c0 81.85017-31.79924 156.205645-83.542718 212.417901l197.664895 194.46911C895.732661 862.022908 895.732661 877.437993 886.054231 886.98851zM449.917036 177.49553c-150.457734 0-272.504394 120.052237-272.504394 268.089851 0 148.104129 122.047684 268.157389 272.504394 268.157389 150.518109 0 272.510534-120.05326 272.510534-268.157389C722.42757 297.547767 600.434122 177.49553 449.917036 177.49553z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibiaoti1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M118.279 336.402h754.531v68.618h-754.531v-68.618z"  ></path>' +
    '' +
    '<path d="M118.279 647.52h754.531v68.618h-754.531v-68.618z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-china" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.913993 511.913993m-511.913993 0a511.913993 511.913993 0 1 0 1023.827986 0 511.913993 511.913993 0 1 0-1023.827986 0Z" fill="#D80027" ></path>' +
    '' +
    '<path d="M352.284898 312.205611l44.207627 136.063161h142.943726l-115.593483 84.1149 44.207627 136.063162-115.765497-84.114901-115.765496 84.114901 44.37964-136.063162L165.133546 448.268772h142.943726zM679.111708 793.501092l-33.886779-41.455401-49.884092 19.265581 28.89837-44.895683-33.714766-41.799429 51.776248 13.761129 29.242399-45.067697 2.752225 53.668402 51.948262 13.761129-50.228121 19.265581zM746.197211 671.543088l15.997313-51.088191-43.691584-31.134554 53.496388-0.688057 15.825298-51.260205 17.373425 50.744163 53.668403-0.516042-43.003528 31.994624 17.201411 50.744163-43.863598-30.96254zM836.848648 376.366874l-23.565933 48.163951 38.359146 37.499076-52.980346-7.568621-23.565933 47.991937-9.288762-52.808332-53.15236-7.568621 47.647909-25.11406-9.288762-52.980346 38.53116 37.499076zM680.487821 230.326894l-3.956324 53.496388 49.712078 20.125651-52.120276 12.901059-3.78431 53.496388-28.210314-45.583739-52.29229 12.901058 34.574836-41.111372-28.382328-45.411726 49.884092 20.297665z" fill="#FFDA44" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pingguo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M836.608 675.84q41.984 59.392 96.256 76.8-23.552 72.704-74.752 151.552-78.848 118.784-155.648 118.784-28.672 0-84.992-19.456-52.224-19.456-91.136-19.456t-86.016 20.48q-49.152 19.456-80.896 19.456-92.16 0-181.248-156.672-89.088-154.624-89.088-304.128 0-138.24 67.584-226.304 69.632-88.064 172.032-88.064 22.528 0 50.176 5.632t57.344 20.992q31.744 17.408 52.224 24.064t31.744 6.656q13.312 0 40.96-6.144t55.296-22.528q29.696-16.384 51.2-24.576t44.032-8.192q71.68 0 129.024 38.912 30.72 20.48 62.464 60.416-47.104 40.96-68.608 71.68-39.936 57.344-39.936 124.928 0 74.752 41.984 135.168z m-205.824-478.208q-35.84 33.792-65.536 44.032-10.24 3.072-26.112 5.632t-36.352 4.608q1.024-90.112 47.104-155.648T701.44 6.144q2.048 10.24 3.072 14.336v11.264q0 36.864-17.408 82.944-18.432 45.056-56.32 82.944z" fill="#272636" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)