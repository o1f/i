var WB=window.WB||{};WB.DIPSettings={init:function(a){var t=WB.DIPSettings;t.switchAction(a),t.analytics(a)},switchAction:function(a,t){(t||a(".wb-switch[data-target]")).on("change",function(){var t=a(this),n=a(t.data("target"));t.prop("checked")?(t.attr("data-value","true"),n.addClass("active")):(t.attr("data-value","false"),n.removeClass("active"))})},analytics:function(a){var t=a("[data-wba-source]").length&&a("[data-wba-source]").data("wba-source")||window.wbaSource||document.domain;a("a[data-wba-campaign]").each(function(){var n=a(this),i=n.data("wba-campaign"),o=n.data("wba-media")||"link",e=n.attr("href");e+=e.match("[?]")?"&":"?",e+="utm_source="+t,e+="&utm_media="+o,e+="&utm_campaign="+i,n.attr("href",e)})}},jQuery(document).ready(function(a){WB.DIPSettings.init(a),a("#optionsframework-wrap").find("input,textarea").on("change",function(){a(window).on("beforeunload",function(){return confirm("您修改的设置尚未保存，确定离开此页面吗？")}),a("#optionsframework-submit").addClass("sticky-bottom")}),a("#optionsframework-submit .wbs-btn-primary").on("click",function(){a(window).unbind("beforeunload")})});