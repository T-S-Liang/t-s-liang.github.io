/*! Live Hugging Face "downloads last month" for resource pills.
 *  HF's own API blocks cross-origin reads, so we pull a shields.io
 *  dynamic badge (CORS-open) and parse the count from its SVG label.
 */
(function () {
  var nodes = document.querySelectorAll("[data-hf-downloads]");
  if (!nodes.length) return;

  function formatCount(n) {
    if (n >= 1e6) {
      var m = n / 1e6;
      return (m >= 10 ? m.toFixed(0) : m.toFixed(1).replace(/\.0$/, "")) + "M";
    }
    if (n >= 1e3) {
      var k = n / 1e3;
      return (k >= 100 ? k.toFixed(0) : k.toFixed(1).replace(/\.0$/, "")) + "k";
    }
    return String(n);
  }

  function badgeUrl(modelId) {
    var api = "https://huggingface.co/api/models/" + modelId;
    return (
      "https://img.shields.io/badge/dynamic/json?url=" +
      encodeURIComponent(api) +
      "&query=%24.downloads&label=d"
    );
  }

  function apply(node, count) {
    node.textContent = formatCount(count);
    var anchor = node.closest("a");
    if (anchor) {
      var model = node.getAttribute("data-hf-downloads");
      anchor.title =
        (model ? model + " · " : "") +
        count.toLocaleString("en-US") +
        " downloads last month on Hugging Face";
    }
  }

  function refresh(node) {
    var model = node.getAttribute("data-hf-downloads");
    if (!model) return;

    fetch(badgeUrl(model), { credentials: "omit" })
      .then(function (res) {
        if (!res.ok) throw new Error("badge " + res.status);
        return res.text();
      })
      .then(function (svg) {
        var match =
          svg.match(/aria-label="[^"]*:\s*([\d,]+)"/i) ||
          svg.match(/<title>[^<:]*:\s*([\d,]+)<\/title>/i);
        if (!match) throw new Error("count not found");
        var count = parseInt(match[1].replace(/,/g, ""), 10);
        if (!isFinite(count)) throw new Error("bad count");
        apply(node, count);
      })
      .catch(function () {
        // Keep the static fallback already in the markup.
      });
  }

  Array.prototype.forEach.call(nodes, refresh);
})();
