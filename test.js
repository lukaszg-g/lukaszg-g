(function () {
  "use strict";
  var a = {};
  global.VEL = global.VEL || {};
  global.VEL.Wordwall = global.VEL.Wordwall || {};
  global.VEL.Wordwall.Application = global.VEL.Wordwall.Application || {};
  global.VEL.Wordwall.Application.Client =
    global.VEL.Wordwall.Application.Client || {};
  global.VEL.Wordwall.Application.Client.Documents =
    global.VEL.Wordwall.Application.Client.Documents || {};
  global.VEL.Wordwall.Application.Client.GoogleClassroom =
    global.VEL.Wordwall.Application.Client.GoogleClassroom || {};
  ss.initAssembly(a, "VEL.Wordwall.Application.Client");
  var b = function () {
    this.$5 = 0;
    this.$6 = false;
    document.addEventListener("mozfullscreenchange", ss.mkdel(this, this.$0));
    document.addEventListener(
      "webkitfullscreenchange",
      ss.mkdel(this, this.$0)
    );
    document.addEventListener("fullscreenchange", ss.mkdel(this, this.$0));
    document.addEventListener("MSFullscreenChange", ss.mkdel(this, this.$0));
  };
  b.__typeName = "VEL.Wordwall.Application.Client.$0";
  var c = function () {
    this.$1$1 = null;
    this.$1$2 = null;
    this.$1$3 = 0;
    this.$1$4 = 0;
  };
  c.__typeName = "VEL.Wordwall.Application.Client.$1";
  var d = function () {
    this.$A = null;
    this.$q = null;
    this.$s = null;
    this.$w = null;
    this.$B = null;
    this.$r = 0;
    this.$D = null;
    this.$C = 0;
    this.$z = 0;
    this.$v = false;
    this.$x = null;
    this.$y = null;
    this.$u = null;
    this.$t = null;
    VEL.Wordwall.Core.Application.App.call(this);
    VEL.Wordwall.Global.Modules.app = this;
    this.$r = ServerModel.fontStackId;
    this.$s = new b();
    this.$q = new f(this);
    this.$A = new g();
    this.$w = new VEL.Wordwall.Global.Controls.Control.$ctor1(
      ".js-play-preload"
    );
    this.$B = VEL.Wordwall.Global.Helpers.SettingsHelper.get$2(
      "session_id",
      null
    );
    if (ss.isNullOrUndefined(this.$B)) {
      this.$B = ss.getHashCode(this).toString();
      VEL.Wordwall.Global.Helpers.SettingsHelper.set(
        "session_id",
        this.$B,
        true
      );
    }
    this.$t = d.$0();
    if (!d.isUndefined(ServerModel.templateId)) {
      this.$b(ServerModel.templateId, 0);
    }
  };
  d.__typeName = "VEL.Wordwall.Application.Client.ClientApp";
  d.isUndefined = function (k) {
    return !(k >= 0);
  };
  d.$0 = function () {
    if (ss.isNullOrEmptyString(ServerModel.googleClassroomCourseWorkID)) {
      return null;
    }
    return new i(
      ServerModel.googleClassroomClientID,
      ServerModel.googleClassroomApiKey,
      ServerModel.googleClassroomCourseID,
      ServerModel.googleClassroomCourseWorkID
    );
  };
  global.VEL.Wordwall.Application.Client.ClientApp = d;
  var e = function () {};
  e.__typeName = "VEL.Wordwall.Application.Client.FullscreenSeleniumHook";
  global.VEL.Wordwall.Application.Client.FullscreenSeleniumHook = e;
  var f = function (k) {
    this.$e = false;
    this.$c = 20;
    this.$d = false;
    this.$b = null;
    this.$b = k;
    this.$2();
  };
  f.__typeName = "VEL.Wordwall.Application.Client.Documents.DocumentStore";
  global.VEL.Wordwall.Application.Client.Documents.DocumentStore = f;
  var g = function () {};
  g.__typeName = "VEL.Wordwall.Application.Client.Documents.ResultsStore";
  global.VEL.Wordwall.Application.Client.Documents.ResultsStore = g;
  var h = function (k, l, m, n) {
    this.$c = null;
    this.$b = null;
    this.$d = null;
    this.$e = null;
    this.$a = null;
    h.$0(k, "googleClassroomClientID", "Google Classroom assignment client ID");
    this.$c = k;
    h.$0(l, "googleClassroomApiKey", "Google Classroom assignment API key");
    this.$b = l;
    h.$0(m, "googleClassroomCourseID", "Google Classroom course ID");
    this.$d = m;
    h.$0(n, "googleClassroomCourseWorkID", "Google Classroom course work ID");
    this.$e = n;
  };
  h.__typeName = "VEL.Wordwall.Application.Client.GoogleClassroom.$0";
  h.$0 = function (k, l, m) {
    if (ss.isNullOrUndefined(k)) {
      throw new ss.ArgumentNullException(l, "The " + m + " is null.");
    } else if (ss.isNullOrEmptyString(k)) {
      throw new ss.ArgumentException("The " + m + " is missing.", l);
    }
  };
  var i = function (k, l, m, n) {
    this.$3 = null;
    this.$2 = null;
    this.$4 = null;
    this.$1$1 = null;
    this.$3 = new g();
    this.$2 = new h(k, l, m, n);
  };
  i.__typeName =
    "VEL.Wordwall.Application.Client.GoogleClassroom.GoogleClassroomApplicationAssignment";
  i.$0 = function (k) {
    return (k & 4) !== 0;
  };
  global.VEL.Wordwall.Application.Client.GoogleClassroom.GoogleClassroomApplicationAssignment =
    i;
  var j = function (k, l) {
    this.$2 = null;
    this.$1$1 = null;
    this.set_studentSubmission(k);
    this.$2 = l;
  };
  j.__typeName =
    "VEL.Wordwall.Application.Client.GoogleClassroom.GoogleClassroomUserAssignmentData";
  global.VEL.Wordwall.Application.Client.GoogleClassroom.GoogleClassroomUserAssignmentData =
    j;
  ss.initClass(b, a, {
    $3: function (k) {
      if (
        /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        !window.MSStream &&
        !(window.navigator.standalone === true)
      ) {
        if (k) {
          var l = window.location.href;
          l += l.indexOf("?") !== -1 ? "&" : "?";
          l += "footer=false&nofullscreen";
          window.open(l, "_blank");
        } else {
          this.$2();
        }
        return;
      }
      if (e.forcePseudo) {
        this.$2();
        return;
      }
      this.$6 = true;
      var m = $(".js-activity-wrapper");
      if (m.length === 0) {
        return;
      }
      var n = m.get(0);
      if (
        n.requestFullscreen ||
        n.msRequestFullscreen ||
        n.mozRequestFullScreen ||
        n.webkitRequestFullscreen
      ) {
        if (n.requestFullscreen) {
          n.requestFullscreen();
        } else if (n.msRequestFullscreen) {
          n.msRequestFullscreen();
        } else if (n.mozRequestFullScreen) {
          n.mozRequestFullScreen();
        } else {
          n.webkitRequestFullscreen();
        }
      } else {
        this.$2();
      }
      $(".js-activity-wrapper").addClass("is-fullscreen");
      this.$5 = window.setTimeout(
        ss.mkdel(this, function () {
          if (
            !(
              document.fullscreenElement ||
              document.mozFullScreenElement ||
              document.webkitFullscreenElement ||
              document.msFullscreenElement ||
              $("#pseudo_full_screen").is(":visible")
            ) &&
            this.$6
          ) {
            this.$2();
          }
        }),
        1500
      );
    },
    $4: function () {
      if (this.$5 !== 0) {
        window.clearTimeout(this.$5);
        this.$5 = 0;
      }
      $(".js-activity-wrapper").removeClass("is-fullscreen");
      $(window).trigger("resize");
      if ($("#pseudo_full_screen").is(":visible")) {
        this.$1();
      } else {
        try {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          }
        } catch (k) {}
      }
    },
    $0: function () {
      if (
        !(
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement ||
          $("#pseudo_full_screen").is(":visible")
        )
      ) {
        $(".js-activity-wrapper").removeClass("is-fullscreen");
        $(window).trigger("resize");
      }
      this.$6 = false;
    },
    $2: function () {
      $("body").css("overflow", "hidden");
      $("#pseudo_full_screen").addClass("is-visible");
      $("#pseudo_full_screen").append($(".js-activity-wrapper"));
      $(".js-activity-wrapper").addClass("is-fullscreen");
    },
    $1: function () {
      $("body").css("overflow", "");
      $(".js-activity-block").append($(".js-activity-wrapper"));
      $("#pseudo_full_screen").removeClass("is-visible");
    },
  });
  ss.initClass(c, a, {
    $2: function () {
      return this.$1$1;
    },
    $3: function (k) {
      this.$1$1 = k;
    },
    $0: function () {
      return this.$1$2;
    },
    $1: function (k) {
      this.$1$2 = k;
    },
    $6: function () {
      return this.$1$3;
    },
    $7: function (k) {
      this.$1$3 = k;
    },
    $4: function () {
      return this.$1$4;
    },
    $5: function (k) {
      this.$1$4 = k;
    },
  });
  ss.initClass(
    d,
    a,
    {
      setHomework: function (k, l, m, n) {
        this.$A.setHomework(k, l, m, n);
      },
      startScreenshot: function (k, l, m) {
        this.setFontStackId(m, false);
        this.startGame(2, 0, k, l, null);
      },
      startFullScreen: function () {
        var k = this.$C === 4 || this.$C === 10;
        this.$s.$3(k);
      },
      stopFullScreen: function () {
        this.$s.$4();
      },
      isFullScreen: function () {
        return (
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement ||
          $("#pseudo_full_screen").is(":visible")
        );
      },
      triggerAutoSave: function () {
        this.$q.triggerAutoSave();
      },
      forceAutoSave: function () {
        this.$q.forceAutoSave();
      },
      enableAutoSave: function (k) {
        this.$q.enableAutoSave(k);
      },
      setThemeId: function (k, l) {
        if (k === 0) {
          return;
        }
        this.$D.selected =
          VEL.Wordwall.Core.View.Themes.ThemeHelper.getTheme(k);
        if (l) {
          this.destroyView();
          this.$i();
        }
      },
      getThemeSelection: function () {
        return this.$D;
      },
      setFontStackId: function (k, l) {
        this.$r = k;
        if (l) {
          this.destroyView();
          this.$i();
        }
      },
      getFontStackId: function () {
        return this.$r;
      },
      new$1: function (k, l) {
        var m = this.createDocument(l, k);
        if (!m.hasEditor()) {
          this.$q.save(
            0,
            0,
            ServerModel.userId,
            ServerModel.localeId,
            function (n, o) {
              var p = "/resource?guid=" + o + "&format=" + 1;
              window.location.href = p;
            },
            null,
            null
          );
          return null;
        }
        return m;
      },
      restore: function (k) {
        var l = this.$q.restore(k);
        this.set_document(l);
        return l;
      },
      open: function (k, l, m, n, o) {
        this.$q.open(
          k,
          l,
          m,
          n,
          null,
          ss.mkdel(this, function (p) {
            this.$b(p.get_template().get_id(), 0);
            this.set_document(p);
            o(p);
          })
        );
      },
      startGame: function (k, l, m, n, o) {
        this.stopGame();
        this.$C = k;
        var p = o;
        if (ss.isNullOrUndefined(p)) {
          p = ServerModel.templateId;
        }
        this.$b(p, n);
        if (this.$C === 4) {
          this.$7(m, l, o);
          return;
        }
        this.$q.open(
          m,
          true,
          l,
          1,
          o,
          ss.mkdel(this, function (q) {
            this.$d(q, o);
          })
        );
      },
      startTestGame: function (k, l, m) {
        this.stopGame();
        this.$C = 5;
        this.$b(ServerModel.templateId, k);
        this.$q.openTest(
          l,
          m,
          ss.mkdel(this, function (n) {
            this.$d(n, null);
          })
        );
      },
      onStartComplete: function () {
        if (
          VEL.Wordwall.Global.Helpers.DeviceHelper.isPhoneSized() &&
          (this.$C === 1 || this.$C === 9)
        ) {
          this.onToggleFullscreen(true);
        }
        if (this.$6()) {
          return;
        }
        Analytics.event("activity", "play", "");
        if (ServerModel.isAuthor) {
          Analytics.event("activity", "play-my-own", "");
        }
        var k =
          "/resourceajax/trackpagevisit?activityId=" +
          ServerModel.activityId +
          "&templateId=" +
          this.get_document().get_template().get_id();
        $.ajax(k, {});
      },
      onGameOver: function () {
        if (this.$6()) {
          return;
        }
        Analytics.event("activity", "game-over", "");
      },
      save: function (k, l, m, n, o) {
        this.$q.save(k, l, ServerModel.userId, ServerModel.localeId, m, n, o);
      },
      saveOptions: function (k, l) {
        this.$q.saveOptions(k, l);
      },
      onHomeworkSubmission: function (k, l, m) {
        this.$j(null);
        this.$A.onHomeworkSubmission(
          k,
          ss.mkdel(this, function (n) {
            this.$g(n, l, m);
          }),
          m
        );
      },
      $g: function (k, l, m) {
        this.$j(k);
        if (
          this.get_isGoogleClassroomAssignment() &&
          !this.get_activeGame().get_isRestartEnabled()
        ) {
          this.$n(l, m);
        } else if (this.$p()) {
          this.$l(l, m);
        } else {
          l();
        }
      },
      $j: function (k) {
        this.$u = k;
        if (this.get_isGoogleClassroomAssignment()) {
          this.$t.set_homeworkSubmission(k);
        }
      },
      onToggleFullscreen: function (k) {
        var l =
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement ||
          $("#pseudo_full_screen").is(":visible");
        if (k === l) {
          return l;
        }
        if (ss.isNullOrUndefined(k)) {
          k = !l;
        }
        if (ss.unbox(k)) {
          var m = this.$C === 4 || this.$C === 10;
          this.$s.$3(m);
        } else {
          this.$s.$4();
        }
        return !l;
      },
      onRestartGame: function () {
        if (this.$C === 9 || this.$C === 10) {
          this.onExitAssignment();
        } else {
          this.restart();
        }
      },
      onNextGame: function () {
        if (this.$C === 11) {
          this.goToNextGame();
        } else {
          this.restart();
        }
      },
      onCheckLeaderboard: function (k, l, m, n) {
        var o =
          "/leaderboardajax/getentryrank?score=" +
          l +
          "&time=" +
          m +
          "&activityId=" +
          ServerModel.activityId +
          "&templateId=" +
          k;
        $.ajax({
          url: o,
          success: function (p, q, r) {
            n(parseInt(p.toString()));
          },
          error: function (p, q, r) {
            n(-1);
          },
          type: "GET",
        });
      },
      onAddLeaderboard: function (k, l, m, n, o, p, q) {
        var r =
          "/leaderboardajax/addentry?score=" +
          l +
          "&time=" +
          m +
          "&name=" +
          encodeURIComponent(k) +
          "&mode=" +
          n +
          "&activityId=" +
          ServerModel.activityId +
          "&templateId=" +
          o;
        $.ajax({
          url: r,
          success: function (s, t, u) {
            p(parseInt(s.toString()));
          },
          error: function (s, t, u) {
            q();
          },
          type: "GET",
        });
      },
      onSetTestCard: function (k) {
        if (ss.isNullOrUndefined(k)) {
          return;
        }
        this.setSetting("tc_page", k.page.toString(), true);
        this.setSetting("tc_section", k.section.toString(), true);
      },
      onGetTestCard: function () {
        var k = new VEL.Wordwall.Core.Application.TestCardSetting();
        k.section = parseInt(this.getSetting("tc_section", "0"));
        k.page = parseInt(this.getSetting("tc_page", "0"));
        return k;
      },
      onSetMute: function (k) {
        this.onAnalyticsEvent(
          "mute-" +
            k.toString().toLowerCase() +
            "-theme-" +
            this.$D.selected.id +
            "-template-" +
            this.get_document().get_template().get_id()
        );
        this.setSetting("mute", k.toString(), false);
      },
      onGetMute: function () {
        return /^\s*true\s*$/i.test(this.getSetting("mute", false.toString()));
      },
      onAnalyticsEvent: function (k) {
        Analytics.event("game", k, "");
      },
      onGetLeaderboardEntries: function (k, l, m, n) {
        var o;
        if (l) {
          o =
            "/resultajax/getleaderboardentries?homeworkId=" +
            ServerModel.homeworkId;
        } else {
          o =
            "/leaderboardajax/getentries?activityId=" +
            ServerModel.activityId +
            "&templateId=" +
            k;
        }
        $.ajax({
          url: o,
          success: ss.mkdel(this, function (p, q, r) {
            var s = Enumerable.from(
              VEL.Wordwall.Core.Toolbox.Serialization.JsonHelper.deserializeEnumerable(
                VEL.Wordwall.Global.Json.LeaderboardEntryJson
              ).call(null, ss.cast(p, String))
            ).toArray();
            m(s);
            if (ss.isValue(VEL.Wordwall.Global.Modules.activityPage)) {
              VEL.Wordwall.Global.Modules.activityPage.updateLeaderboard(
                s,
                this.get_document().get_template().get_leaderboardMode()
              );
            }
          }),
          error: function (p, q, r) {
            n();
          },
          type: "GET",
        });
      },
      onExitAssignment: function () {
        if (ss.isValue(VEL.Wordwall.Global.Modules.playPage)) {
          VEL.Wordwall.Global.Modules.playPage.restart();
        }
      },
      setSetting: function (k, l, m) {
        VEL.Wordwall.Global.Helpers.SettingsHelper.set(k, l, m);
      },
      getSetting: function (k, l) {
        return VEL.Wordwall.Global.Helpers.SettingsHelper.get$2(k, l);
      },
      onActivityContentChanged: function () {
        if (ss.isValue(VEL.Wordwall.Global.Modules.activityPage)) {
          VEL.Wordwall.Global.Modules.activityPage.onContentChanged();
        }
      },
      restart: function () {
        if (ss.isNullOrUndefined(this.get_activeGame())) {
          return;
        }
        this.$8();
        this.$m(null);
      },
      goToNextGame: function () {
        if (ss.isNullOrUndefined(this.get_activeGame()) || this.$C !== 11) {
          return;
        }
        this.destroyView();
        VEL.Wordwall.Global.Modules.folderPlayPage.nextGame();
      },
      onViewBuilt: function () {
        this.$v = true;
      },
      onViewReady: function () {
        if (ss.isValue(this.$x) && ss.isValue(this.$y)) {
          this.$x += ", viewReady:" + this.$y.milliseconds();
        }
        this.$w.set_isVisible(false);
      },
      destroyView: function () {
        window.onbeforeunload = null;
        VEL.Wordwall.Core.Application.App.prototype.destroyView.call(this);
      },
      $7: function (k, l, m) {
        var n = m;
        if (ss.isNullOrUndefined(n)) {
          n = ServerModel.templateId;
        }
        var o = n;
        var p = VEL.Wordwall.Core.Application.TemplateManager.createTemplate(o);
        var q = new VEL.Wordwall.View.ClientView(this, false, null);
        var r = ss.mkdel(this, function () {
          q.dispose();
          this.$w.set_isVisible(true);
          this.set_activeGame(null);
          this.$q.open(
            k,
            true,
            l,
            1,
            m,
            ss.mkdel(this, function (t) {
              this.$d(t, m);
            })
          );
        });
        var s = ss.mkdel(this, function () {
          this.$w.set_isVisible(false);
        });
        this.set_activeGame(
          new VEL.Wordwall.Core.Games.PreStartGame(q, this, r)
        );
        q.onPreStart(
          ServerHelper.get_htmlDecodedActivityTitle(),
          p.get_title(),
          p.get_description(),
          s
        );
      },
      $6: function () {
        var k = ServerModel.activityId < 0;
        return (
          k ||
          ss.isNullOrUndefined(this.get_activeGame()) ||
          this.get_activeGame().get_isHomeworkClient() ||
          this.$C === 2
        );
      },
      $d: function (k, l) {
        this.set_document(k);
        this.get_document().set_title(
          ServerHelper.get_htmlDecodedActivityTitle()
        );
        if (this.$C === 1) {
          var m = this.get_document()
            .get_template()
            .getCanCreateValidity()
            .get_hasErrors();
          if (m) {
            $.get(
              "/resourceajax/seterror?activityId=" + ServerModel.activityId
            );
            if (ServerModel.isAuthor) {
              window.location.href =
                "/create/editcontent?guid=" + ServerModel.activityGuid;
            } else {
              var n = Strings.enterContent_Generic_ErrorBuilding;
              window.location.href = "/error?message=" + n;
            }
            return;
          }
        }
        if (
          ss.isValue(l) &&
          l !== 0 &&
          l !== this.get_document().get_template().get_id()
        ) {
          this.convertDocument(ss.unbox(l));
        }
        this.get_document().setInteractive();
        if (this.$C === 1) {
          VEL.Wordwall.Global.Modules.activityPage.onDocumentOpen(1);
        }
        this.setThemeId(this.$D.selected.id, true);
        if (this.$C === 1) {
          VEL.Wordwall.Global.Modules.activityPage.populateOptionsSection();
          VEL.Wordwall.Global.Modules.activityPage.populateThemesList();
          VEL.Wordwall.Global.Modules.activityPage.populateTemplates();
          VEL.Wordwall.Global.Modules.activityPage.populateLeaderboard();
        }
      },
      $i: function () {
        this.$v = false;
        this.$y = new ss.Stopwatch();
        this.$y.start();
        this.$x = "";
        if (this.$z !== 0) {
          window.clearTimeout(this.$z);
          this.$z = 0;
        }
        this.$w.set_isVisible(true);
        var k = ss.cast(
          this.get_document().get_selectedGame(),
          VEL.Wordwall.Core.Application.IGame_Application
        );
        var l = this.$C !== 2;
        var m =
          this.get_document()
            .get_template()
            .get_contentModel()
            .getUnicodeRange() | this.$a();
        VEL.Wordwall.View.Assets.AssetLoader.start(
          this.$D.selected,
          this.$r,
          m,
          k.get_template(),
          l,
          true,
          ss.mkdel(this, this.$e)
        );
        this.$z = window.setTimeout(
          ss.mkdel(this, function () {
            this.$c();
            if (this.$v) {
              return;
            }
            var n =
              VEL.Wordwall.View.Assets.AssetLoader.getPreloadStatus() +
              "|" +
              VEL.Wordwall.View.Assets.Reusables.ReusableTest.getMemory() +
              "kP|" +
              this.$x;
            VEL.Wordwall.Global.LogHelper.event("theme_timeout", n);
            VEL.Wordwall.Global.Shell.writeError(n);
          }),
          30000
        );
      },
      $a: function () {
        switch (Strings.languageId) {
          case "2": {
            return 2;
          }
          case "1037": {
            return 4;
          }
          case "1054": {
            return 8;
          }
          default: {
            return 1;
          }
        }
      },
      $c: function () {
        var k = VEL.Wordwall.View.Assets.AssetLoader.getErrors();
        if (ss.isValue(k) && Enumerable.from(k).any()) {
          VEL.Wordwall.Global.LogHelper.event("asset_error", k.join("|"));
        }
      },
      $e: function () {
        this.$c();
        this.$x += ", gamePreload:" + this.$y.milliseconds();
        if (this.get_document().get_canPreBuild()) {
          var k =
            "/resourceajax/getprebuild?guid=" +
            ServerModel.activityGuid +
            "&templateId=" +
            this.get_document().get_template().get_id();
          $.get(
            k,
            ss.mkdel(this, function (l) {
              this.get_document().setPrebuild(ss.cast(l, String));
              this.$h();
            })
          );
        } else {
          this.$h();
        }
      },
      $h: function () {
        this.$x += ", prebuildReady:" + this.$y.milliseconds();
        this.$8();
        if (this.$C === 2) {
          this.$m(
            ss.mkdel(this, function () {
              this.$w.set_isVisible(false);
            })
          );
        } else {
          this.$m(ss.mkdel(this, this.$f));
        }
      },
      $f: function () {
        this.$x += ", gameStarted:" + this.$y.milliseconds();
      },
      $m: function (k) {
        if (
          ss.isNullOrUndefined(this.get_document()) ||
          ss.isNullOrUndefined(this.get_document().get_selectedGame())
        ) {
          return;
        }
        this.stopGame();
        this.createGame();
        if (ss.isValue(this.view)) {
          this.get_activeGame().set_view$1(this.view);
          this.view.set_game(this.get_activeGame());
        }
        this.get_activeGame().registerClient(
          this.client.guid,
          this.client.forename,
          this.client.surname
        );
        this.get_activeGame().onGameOverChanged(this.gameOverOptions);
        var l = this.get_document().get_title();
        if (ss.isNullOrUndefined(l)) {
          l = ServerHelper.get_htmlDecodedActivityTitle();
        }
        var m = l;
        this.get_activeGame().onBuildAndStart(
          m,
          this.get_document().get_seed(),
          this.$C
        );
        this.get_document().set_preBuild(this.get_activeGame().get_prebuild());
        if (!ss.staticEquals(k, null)) {
          k();
        }
      },
      $8: function () {
        this.destroyView();
        this.view = new VEL.Wordwall.View.ClientView(this, this.$C === 2, null);
      },
      $b: function (k, l) {
        this.$D = new VEL.Wordwall.Core.View.Themes.ThemeSelection();
        var m = Enumerable.from(
          VEL.Wordwall.Core.View.Themes.ThemeHelper.getAvailableThemeIds(k)
        )
          .select(VEL.Wordwall.Core.View.Themes.ThemeHelper.getTheme)
          .toArray();
        for (var n = 0; n < m.length; n++) {
          var o = m[n];
          var p =
            window.FS7 === undefined || window.FS7[o.id + "_" + k] === undefined
              ? 0
              : Number(window.FS7[o.id + "_" + k]);
          if (p === 0) {
            p =
              window.FS7 === undefined ||
              window.FS7[o.id + "_" + 0] === undefined
                ? 0
                : Number(window.FS7[o.id + "_" + 0]);
          }
          switch (p) {
            case 1: {
              o.isHidden = true;
              break;
            }
            case 2: {
              o.isHidden = false;
              break;
            }
            case 6: {
              if (o.isHidden) {
                var q = this.$9(o, m);
                if (ss.isValue(q)) {
                  q.isHidden = true;
                  o.isHidden = false;
                  if (q.id === l) {
                    l = o.id;
                  }
                }
              }
              break;
            }
          }
          if (o.id === l && o.isHidden) {
            var r = this.$9(o, m);
            if (ss.isValue(r) && !r.isHidden) {
              l = r.id;
            } else {
              o.isHidden = false;
            }
          }
        }
        if (
          Enumerable.from(m).all(function (A) {
            return A.isHidden;
          })
        ) {
          var s =
            Enumerable.from(m).firstOrDefault(function (A) {
              return A.id === l;
            }, ss.getDefaultValue(VEL.Wordwall.Core.View.Themes.Theme)) ||
            Enumerable.from(m).first();
          s.isHidden = false;
        }
        var t = Enumerable.from(m)
          .where(function (A) {
            return A.isHidden;
          })
          .toArray();
        for (var u = 0; u < t.length; u++) {
          var v = t[u];
          ss.remove(m, v);
        }
        var w = Array.prototype.slice.call(m);
        for (var x = 0; x < w.length; x++) {
          var y = w[x];
          var z =
            window.FS7 === undefined || window.FS7[y.id + "_" + k] === undefined
              ? 0
              : Number(window.FS7[y.id + "_" + k]);
          if (z === 0) {
            z =
              window.FS7 === undefined ||
              window.FS7[y.id + "_" + 0] === undefined
                ? 0
                : Number(window.FS7[y.id + "_" + 0]);
          }
          switch (z) {
            case 3: {
              ss.remove(m, y);
              ss.insert(m, 0, y);
              break;
            }
            case 5: {
              ss.remove(m, y);
              m.push(y);
              break;
            }
            case 4: {
              if (!ss.referenceEquals(y, Enumerable.from(m).first())) {
                ss.remove(m, y);
                ss.insert(m, 1, y);
              }
              break;
            }
          }
        }
        this.$D.available = Array.prototype.slice.call(m);
        if (
          l !== 0 &&
          Enumerable.from(m).any(function (A) {
            return A.id === l;
          })
        ) {
          this.$D.selected = Enumerable.from(m).first(function (A) {
            return A.id === l;
          });
        } else {
          this.$D.selected = Enumerable.from(m).first();
        }
      },
      $9: function (k, l) {
        return Enumerable.from(l).firstOrDefault(function (m) {
          return (
            (k.baseId === m.id || m.baseId === m.id) &&
            !ss.referenceEquals(k, m) &&
            !m.isHidden
          );
        }, ss.getDefaultValue(VEL.Wordwall.Core.View.Themes.Theme));
      },
      get_googleClassroom: function () {
        this.$o();
        return this.$t;
      },
      get_googleClassroomAssignment: function () {
        this.$o();
        return this.$t;
      },
      get_isGoogleClassroomAssignment: function () {
        return ss.isValue(this.$t);
      },
      $o: function () {
        if (!this.get_isGoogleClassroomAssignment()) {
          throw new ss.InvalidOperationException(
            "This activity is not a Google Classroom assignment."
          );
        }
      },
      $n: function (k, l) {
        this.$t.turnInStudentSubmission().continueWith(function (m) {
          if (m.isCompleted()) {
            k();
          } else {
            l();
          }
        });
      },
      get_isGoogleClassroomAddOnAttachment: function () {
        return (
          !ss.isNullOrEmptyString(ServerModel.googleClassroomAddOnCourseId) &&
          !ss.isNullOrEmptyString(ServerModel.googleClassroomAddOnPostId) &&
          !ss.isNullOrEmptyString(ServerModel.googleClassroomAddOnAttachmentId)
        );
      },
      $p: function () {
        return (
          this.get_isGoogleClassroomAddOnAttachment() &&
          !ss.isNullOrEmptyString(
            ServerModel.googleClassroomAddOnStudentSubmissionId
          )
        );
      },
      $k: function () {
        var k = 0,
          l = new ss.TaskCompletionSource(),
          m;
        var n = ss.mkdel(this, function () {
          try {
            $sm1: for (;;) {
              switch (k) {
                case 0: {
                  k = -1;
                  m = ss.Task.fromPromise(
                    this.$A.setGoogleClassroomAddOnAttachmentStudentSubmission(
                      this.$u.HomeworkSubmissionId,
                      ServerModel.googleClassroomAddOnCourseId,
                      ServerModel.googleClassroomAddOnPostId,
                      ServerModel.googleClassroomAddOnAttachmentId,
                      ServerModel.googleClassroomAddOnStudentSubmissionId
                    ),
                    0
                  );
                  k = 1;
                  m.continueWith(n);
                  return;
                }
                case 1: {
                  k = -1;
                  m.getAwaitedResult();
                  k = -1;
                  break $sm1;
                }
                default: {
                  break $sm1;
                }
              }
            }
            l.setResult(null);
          } catch (o) {
            l.setException(ss.Exception.wrap(o));
          }
        });
        n();
        return l.task;
      },
      $l: function (k, l) {
        this.$k().continueWith(function (m) {
          if (m.isCompleted()) {
            k();
          } else {
            l();
          }
        });
      },
      closeGoogleClassroomAddOn: function () {
        if (!ss.referenceEquals(window.parent, window.self)) {
          VEL.Wordwall.Global.Helpers.GoogleClassroomAddOn.GoogleClassroomAddOnHelper.closeAddOn();
        } else {
          this.onToggleFullscreen(false);
          VEL.Wordwall.Global.Modules.playPage.onCompletedGoogleClassroomAddOnAttachment();
        }
      },
    },
    VEL.Wordwall.Core.Application.App,
    [
      VEL.Wordwall.Core.Application.IApplication,
      VEL.Wordwall.Core.Application.IApplication_Game,
      VEL.Wordwall.Core.Toolbox.Threading.IThreadScope,
    ]
  );
  ss.initClass(e, a, {});
  ss.initClass(f, a, {
    open: function (k, l, m, n, o, p) {
      var q = k === "00000000000000000000000000000000";
      if (
        !q &&
        (d.isUndefined(ServerModel.userId) ||
          d.isUndefined(ServerModel.activityId))
      ) {
        l = false;
      }
      var r = ss.mkdel(this, function (s) {
        this.$8(s, l, m, n, o, function () {
          p(s);
        });
      });
      this.$4(k, r, function () {});
    },
    openTest: function (k, l, m) {
      var n = new ss.Random().nextMinMax(0, 100000);
      window.localStorage["test.doc"] = k;
      window.localStorage["test.config"] = l;
      this.open("00000000000000000000000000000000", true, n, 1, null, m);
    },
    restore: function (k) {
      if (ss.referenceEquals(window.localStorage["autosave.guid"], k)) {
        var l = window.localStorage["autosave.doc"];
        var m = this.$1(l);
        var n = VEL.Wordwall.Core.Application.DocumentFactory.create(m);
        n.set_guid(k);
        return n;
      }
      return null;
    },
    save: function (k, l, m, n, o, p, q) {
      this.$e = true;
      if (!ss.isNullOrEmptyString(q)) {
        this.$b.get_document().set_title(q);
      }
      if (m > 0) {
        this.$b.get_document().set_userId(m);
      }
      if (n > 0) {
        this.$b.get_document().set_localeId(n);
      }
      if (k > 0) {
        ServerModel.activityGuid = this.$b.get_document().changeGuid();
      }
      this.$a(
        k,
        l,
        function (r, s) {
          ServerModel.activityGuid = s;
          o(r, s);
        },
        p
      );
    },
    saveOptions: function (k, l) {
      var m = this.$b.get_document();
      if (ss.isNullOrUndefined(m)) {
        return;
      }
      var n = m.writeOptions();
      var o = {
        type: "POST",
        url:
          "/resourceajax/setoptions?activityId=" +
          ServerModel.activityId +
          "&templateId=" +
          m.get_template().get_id() +
          "&format=" +
          m.get_format() +
          "&scope=" +
          k,
        data: n,
        cache: false,
        contentType: "application/xml",
        success: function (p, q, r) {
          l();
        },
        error: function (p, q, r) {
          l();
        },
      };
      $.ajax(o);
    },
    forceAutoSave: function () {
      this.$b
        .get_document()
        .set_title(
          new VEL.Wordwall.Global.Controls.Input.$ctor1(
            ".js-activity-title"
          ).get_value()
        );
      var k = this.$b.get_document().save();
      this.$6(this.$b.get_document(), k);
    },
    triggerAutoSave: function () {
      this.$c = 0;
    },
    enableAutoSave: function (k) {
      if (k) {
        window.setInterval(
          ss.mkdel(this, function () {
            if (this.$e) {
              return;
            }
            this.$c++;
            if (this.$c === 8) {
              $(".js-auto-saving").fadeIn();
            }
            if (this.$c === 10 && ss.isValue(this.$b.get_document())) {
              if (this.$d) {
                this.$c--;
                return;
              }
              this.$9();
            }
          }),
          200
        );
      } else {
        this.$e = true;
      }
    },
    $8: function (k, l, m, n, o, p) {
      k.set_seed(m);
      if (ss.isValue(o) && k.get_template().get_id() !== o) {
        k.convert(ss.unbox(o), false);
      }
      if (l) {
        this.$5(k, n, o, p);
      } else {
        this.$7(k, p);
      }
    },
    $7: function (k, l) {
      if (!ss.isNullOrEmptyString(ServerModel.activityGuid)) {
        k.set_guid(ServerModel.activityGuid);
      }
      l();
    },
    $4: function (k, l, m) {
      if (k === "00000000000000000000000000000000") {
        var n = window.localStorage["test.doc"];
        var o = this.$1(n);
        var p = VEL.Wordwall.Core.Application.DocumentFactory.create(o);
        l(p);
        return;
      }
      var q = "//az779572.vo.msecnd.net/documents/" + k;
      var r = new XMLHttpRequest();
      r.open("GET", q, true);
      r.responseType = "arraybuffer";
      r.onload = function (s) {
        if (r.status === 200) {
          var t = ss.cast(r.response, Array);
          if (ss.isNullOrUndefined(t) || t.length === 0) {
            m();
          } else {
            var u = new DataView(new Uint8Array(t).buffer);
            var v = VEL.Wordwall.Core.Application.DocumentFactory.create(u);
            v.set_guid(k);
            l(v);
          }
        } else {
          m();
        }
      };
      r.send();
    },
    $a: function (k, l, m, n) {
      var o = this.$b.get_document().get_guid();
      console.log(o, this.$b.get_document().get_guid())
      var p = this.$b.get_document().save();
      var q =
        "/createajax/upload?guid=" +
        o +
        "&activityId=" +
        k +
        "&userId=" +
        this.$b.get_document().get_userId();
      q += "&folderId=" + l;
      q +=
        "&screenshot=" +
        VEL.Wordwall.Global.Helpers.SettingsHelper.get(
          "enable_screenshot",
          true
        );
      q += "&makeCopy=" + (ServerModel.makeCopy === true);
      var r = new Uint8Array(p.byteLength);
      for (var s = 0; s < p.byteLength; s++) {
        r[s] = p.getUint8(s);
      }
      var t = new XMLHttpRequest();
      t.open("POST", q, true);
      t.onreadystatechange = function (u) {
        if (t.readyState === 4) {
          if (t.status === 200) {
            var v = JSON.parse(t.responseText);
            VEL.Wordwall.Global.Helpers.AutoSaveHelper.clear();
            m(v.ActivityID, v.ActivityGuid);
          } else if (!ss.staticEquals(n, null)) {
            n();
          }
        }
      };
      t.setRequestHeader("Content-Type", "application/octet-stream");
      t.send(r);
    },
    $5: function (k, l, m, n) {
      if (k.get_guid() === "00000000000000000000000000000000") {
        var o = window.localStorage["test.config"];
        k.readOptions(o);
        n();
        return;
      }
      var p = m;
      if (ss.isNullOrUndefined(p)) {
        p = k.get_template().get_id();
      }
      var q = p;
      var r = {
        type: "GET",
        dataType: "text",
        url:
          "/resourceajax/getoptions?templateId=" +
          q +
          "&activityId=" +
          ServerModel.activityId +
          "&format=" +
          l,
        success: ss.mkdel(this, function (s, t, u) {
          if (ss.isInstanceOfType(s, String)) {
            k.readOptions(s.toString());
            this.$0(k);
          }
          n();
        }),
        error: function (s, t, u) {
          n();
        },
      };
      $.ajax(r);
    },
    $0: function (k) {
      var l = k.get_template().get_game().get_options();
      for (var m = 0; m < l.length; m++) {
        var n = l[m];
        var o = n.get_xmlTag();
        var p = k.get_template().get_id();
        var q =
          window.FS4 === undefined || window.FS4[o + "_" + p] === undefined
            ? null
            : window.FS4[o + "_" + p];
        if (ss.isValue(q)) {
          n.set_untypedValue(q);
        }
      }
    },
    $3: function (k) {
      var l = "";
      var m = k.byteLength;
      for (var n = 0; n < m; n++) {
        l += String.fromCharCode(k.getUint8(n));
      }
      return window.btoa(l);
    },
    $1: function (k) {
      var l = window.atob(k);
      var m = l.length;
      var n = new DataView(new ArrayBuffer(m));
      for (var o = 0; o < m; o++) {
        n.setUint8(o, l.charCodeAt(o));
      }
      return n;
    },
    $2: function () {
      try {
        for (var k = 0; k < window.localStorage.length; k++) {
          var l = window.localStorage.key(k);
          if (ss.startsWithString(l, "doc.value")) {
            window.localStorage.clear();
            break;
          }
        }
      } catch (m) {
        var e = ss.Exception.wrap(m);
      }
    },
    $9: function () {
      this.$d = true;
      var k = this.$b.get_document();
      k.set_title(
        new VEL.Wordwall.Global.Controls.Input.$ctor1(
          ".js-activity-title"
        ).get_value()
      );
      k.saveAsync(
        ss.mkdel(this, function (l) {
          this.$6(k, l);
        })
      );
    },
    $6: function (k, l) {
      var m = ss.Int32.div(l.byteLength * 4, 3);
      if (m > 3145728) {
        this.$d = false;
        return;
      }
      var n = this.$3(l);
      var o = k.get_guid();
      window.localStorage["autosave.guid"] = o;
      window.localStorage["autosave.templateid"] = k
        .get_template()
        .get_id()
        .toString();
      window.localStorage["autosave.doc"] = n;
      window.localStorage["autosave.user"] = ServerModel.userId.toString();
      window.localStorage["autosave.title"] = k.get_title();
      window.localStorage["autosave.time"] =
        VEL.Wordwall.Global.Extensions.DateTimeExtensions.toUnix(
          new Date()
        ).toString();
      window.setTimeout(function () {
        $(".js-auto-saving").fadeOut(250);
      }, 1000);
      this.$d = false;
    },
  });
  ss.initClass(g, a, {
    setHomework: function (k, l, m, n) {
      var o = {
        type: "POST",
        url: "/MyResultsAjax/SetHomework?activityId=" + k + "&code=" + l,
        cache: false,
        success: function (p, q, r) {
          m();
        },
        error: function (p, q, r) {
          n();
        },
      };
      $.ajax(o);
    },
    onHomeworkSubmission: function (k, l, m) {
      if (ServerModel.isFull) {
        Analytics.event("student", "homework-full", "");
        l(null);
        return;
      }
      var n = k.toXml();
      var o = {
        type: "POST",
        url:
          "/MyResultsAjax/AddHomeworkSubmission?homeworkId=" +
          ServerModel.homeworkId +
          "&name=" +
          encodeURIComponent(k.get_player().get_fullName()) +
          "&score=" +
          k.get_score() +
          "&time=" +
          k.get_timing() +
          "&playerGuid=" +
          k.get_player().guid,
        data: n,
        contentType: "text/xml",
        cache: false,
        success: function (p, q, r) {
          $.get(
            "/MyResultsAjax/IncrementHomework?homeworkId=" +
              ServerModel.homeworkId
          );
          l(ss.cast(p, VEL.Wordwall.Global.Json.HomeworkSubmissionInfo));
        },
        error: function (p, q, r) {
          m();
        },
      };
      $.ajax(o);
      Analytics.event("student", "homework-submitted", "");
    },
    setGoogleClassroomStudentSubmission: function (k, l, m, n) {
      var o =
        "/MyResultsAjax/SetGoogleClassroomStudentSubmission?homeworkSubmissionId=" +
        k +
        "&googleClassroomCourseId=" +
        encodeURIComponent(l) +
        "&googleClassroomCourseWorkId=" +
        encodeURIComponent(m) +
        "&googleClassroomStudentSubmissionId=" +
        encodeURIComponent(n);
      return $.ajax({ type: "POST", url: o });
    },
    setGoogleClassroomAddOnAttachmentStudentSubmission: function (
      k,
      l,
      m,
      n,
      o
    ) {
      var p =
        "/MyResultsAjax/SetGoogleClassroomAddOnAttachmentStudentSubmission?homeworkSubmissionId=" +
        k +
        "&googleClassroomCourseId=" +
        encodeURIComponent(l) +
        "&googleClassroomPostId=" +
        encodeURIComponent(m) +
        "&googleClassroomAttachmentId=" +
        encodeURIComponent(n) +
        "&googleClassroomStudentSubmissionId=" +
        encodeURIComponent(o);
      return $.ajax({ type: "POST", url: p });
    },
  });
  ss.initClass(h, a, {
    $0: function () {
      var k = 0,
        l = new ss.TaskCompletionSource(),
        m,
        n,
        o;
      var p = ss.mkdel(this, function () {
        try {
          $sm1: for (;;) {
            switch (k) {
              case 0: {
                k = -1;
                m = this.$1();
                k = 1;
                m.continueWith(p);
                return;
              }
              case 1: {
                k = -1;
                n = m.getAwaitedResult();
                o = n.getCurrentUserState();
                k = 2;
                o.continueWith(p);
                return;
              }
              case 2: {
                k = -1;
                l.setResult(o.getAwaitedResult());
                return;
              }
              default: {
                break $sm1;
              }
            }
          }
        } catch (q) {
          l.setException(ss.Exception.wrap(q));
        }
      });
      p();
      return l.task;
    },
    $7: function () {
      var k = 0,
        l = new ss.TaskCompletionSource(),
        m,
        n,
        o,
        p;
      var q = ss.mkdel(this, function () {
        try {
          $sm1: for (;;) {
            switch (k) {
              case 0:
              case 1:
              case 2:
              case 3: {
                if (k === 0) {
                  k = 1;
                }
                try {
                  $sm2: for (;;) {
                    switch (k) {
                      case 1: {
                        k = -1;
                        m = this.$1();
                        k = 2;
                        m.continueWith(q);
                        return;
                      }
                      case 2: {
                        k = -1;
                        n = m.getAwaitedResult();
                        o = n.signIn("do-assignment");
                        k = 3;
                        o.continueWith(q);
                        return;
                      }
                      case 3: {
                        k = -1;
                        o.getAwaitedResult();
                        k = -1;
                        break $sm2;
                      }
                      default: {
                        break $sm2;
                      }
                    }
                  }
                } catch (r) {
                  r = ss.Exception.wrap(r);
                  if (ss.isInstanceOfType(r, ss.PromiseException)) {
                    p = ss.cast(r, ss.PromiseException);
                    if (!this.$3(p)) {
                      throw r;
                    }
                  } else {
                    throw r;
                  }
                }
                k = -1;
                break $sm1;
              }
              default: {
                break $sm1;
              }
            }
          }
          l.setResult(null);
        } catch (r) {
          l.setException(ss.Exception.wrap(r));
        }
      });
      q();
      return l.task;
    },
    $2: function () {
      var k = 0,
        l = new ss.TaskCompletionSource(),
        m,
        n,
        o,
        p;
      var q = ss.mkdel(this, function () {
        try {
          $sm1: for (;;) {
            switch (k) {
              case 0:
              case 1:
              case 2:
              case 3: {
                if (k === 0) {
                  k = 1;
                }
                try {
                  $sm2: for (;;) {
                    switch (k) {
                      case 1: {
                        k = -1;
                        m = this.$1();
                        k = 2;
                        m.continueWith(q);
                        return;
                      }
                      case 2: {
                        k = -1;
                        n = m.getAwaitedResult();
                        o = n.grantPermissions();
                        k = 3;
                        o.continueWith(q);
                        return;
                      }
                      case 3: {
                        k = -1;
                        o.getAwaitedResult();
                        k = -1;
                        break $sm2;
                      }
                      default: {
                        break $sm2;
                      }
                    }
                  }
                } catch (r) {
                  r = ss.Exception.wrap(r);
                  if (ss.isInstanceOfType(r, ss.PromiseException)) {
                    p = ss.cast(r, ss.PromiseException);
                    if (!this.$3(p)) {
                      throw r;
                    }
                  } else {
                    throw r;
                  }
                }
                k = -1;
                break $sm1;
              }
              default: {
                break $sm1;
              }
            }
          }
          l.setResult(null);
        } catch (r) {
          l.setException(ss.Exception.wrap(r));
        }
      });
      q();
      return l.task;
    },
    $3: function (k) {
      var l =
        VEL.Wordwall.Global.Helpers.GoogleClassroomHelper.exceptionToError(k);
      var m = ss.isValue(l) ? l.errorCode : null;
      switch (m) {
        case "popup_closed_by_user":
        case "access_denied": {
          return true;
        }
        default: {
          return false;
        }
      }
    },
    $8: function () {
      var k = 0,
        l = new ss.TaskCompletionSource(),
        m,
        n,
        o;
      var p = ss.mkdel(this, function () {
        try {
          $sm1: for (;;) {
            switch (k) {
              case 0: {
                k = -1;
                m = this.$1();
                k = 1;
                m.continueWith(p);
                return;
              }
              case 1: {
                k = -1;
                n = m.getAwaitedResult();
                o = n.signOut();
                k = 2;
                o.continueWith(p);
                return;
              }
              case 2: {
                k = -1;
                o.getAwaitedResult();
                k = -1;
                break $sm1;
              }
              default: {
                break $sm1;
              }
            }
          }
          l.setResult(null);
        } catch (q) {
          l.setException(ss.Exception.wrap(q));
        }
      });
      p();
      return l.task;
    },
    $4: function () {
      var k = 0,
        l = new ss.TaskCompletionSource(),
        m,
        n,
        o,
        p,
        q;
      var r = ss.mkdel(this, function () {
        try {
          $sm1: for (;;) {
            switch (k) {
              case 0: {
                k = -1;
                m = this.$1();
                k = 1;
                m.continueWith(r);
                return;
              }
              case 1: {
                k = -1;
                n = m.getAwaitedResult();
                o = this.$6(n);
                p = this.$5(n);
                q = ss.Task.whenAll([o, p]);
                k = 2;
                q.continueWith(r);
                return;
              }
              case 2: {
                k = -1;
                q.getAwaitedResult();
                l.setResult(new j(o.getResult(), p.getResult()));
                return;
              }
              default: {
                break $sm1;
              }
            }
          }
        } catch (s) {
          l.setException(ss.Exception.wrap(s));
        }
      });
      r();
      return l.task;
    },
    $6: function (k) {
      var l = 0,
        m = new ss.TaskCompletionSource(),
        n;
      var o = ss.mkdel(this, function () {
        try {
          $sm1: for (;;) {
            switch (l) {
              case 0:
              case 1:
              case 2: {
                if (l === 0) {
                  l = 1;
                }
                try {
                  $sm2: for (;;) {
                    switch (l) {
                      case 1: {
                        l = -1;
                        n = k.getMyCourseWorkStudentSubmission(
                          this.$d,
                          this.$e
                        );
                        l = 2;
                        n.continueWith(o);
                        return;
                      }
                      case 2: {
                        l = -1;
                        m.setResult(n.getAwaitedResult());
                        return;
                      }
                      default: {
                        break $sm2;
                      }
                    }
                  }
                } catch (p) {
                  m.setResult(null);
                  return;
                }
                l = -1;
                break $sm1;
              }
              default: {
                break $sm1;
              }
            }
          }
          m.setResult(null);
        } catch (p) {
          m.setException(ss.Exception.wrap(p));
        }
      });
      o();
      return m.task;
    },
    $5: function (k) {
      var l = 0,
        m = new ss.TaskCompletionSource(),
        n,
        o;
      var p = ss.mkdel(this, function () {
        try {
          $sm1: for (;;) {
            switch (l) {
              case 0:
              case 1:
              case 2: {
                if (l === 0) {
                  l = 1;
                }
                try {
                  $sm2: for (;;) {
                    switch (l) {
                      case 1: {
                        l = -1;
                        n = k.listMyTeacherCourses();
                        l = 2;
                        n.continueWith(p);
                        return;
                      }
                      case 2: {
                        l = -1;
                        o = n.getAwaitedResult();
                        m.setResult(
                          Enumerable.from(o).firstOrDefault(
                            ss.mkdel(this, function (q) {
                              return ss.referenceEquals(q.id, this.$d);
                            }),
                            ss.getDefaultValue(
                              VEL.Wordwall.Global.Json.GoogleClassroom.Course
                            )
                          )
                        );
                        return;
                      }
                      default: {
                        break $sm2;
                      }
                    }
                  }
                } catch (q) {
                  m.setResult(null);
                  return;
                }
                l = -1;
                break $sm1;
              }
              default: {
                break $sm1;
              }
            }
          }
          m.setResult(null);
        } catch (q) {
          m.setException(ss.Exception.wrap(q));
        }
      });
      p();
      return m.task;
    },
    $9: function (k) {
      var l = 0,
        m = new ss.TaskCompletionSource(),
        n,
        o,
        p;
      var q = ss.mkdel(this, function () {
        try {
          $sm1: for (;;) {
            switch (l) {
              case 0: {
                l = -1;
                if (
                  k.get_userCanTurnInSubmission() &&
                  !k.get_userHasTurnedInSubmission()
                ) {
                  n = this.$1();
                  l = 1;
                  n.continueWith(q);
                  return;
                } else {
                  m.setResult(null);
                  return;
                }
              }
              case 1: {
                l = -1;
                o = n.getAwaitedResult();
                p = o.turnInStudentSubmission(
                  k.get_studentSubmission().courseId,
                  k.get_studentSubmission().courseWorkId,
                  k.get_studentSubmission().id
                );
                l = 2;
                p.continueWith(q);
                return;
              }
              case 2: {
                l = -1;
                p.getAwaitedResult();
                k.get_studentSubmission().state = "TURNED_IN";
                m.setResult(k.get_studentSubmission());
                return;
              }
              default: {
                break $sm1;
              }
            }
          }
        } catch (r) {
          m.setException(ss.Exception.wrap(r));
        }
      });
      q();
      return m.task;
    },
    $1: function () {
      if (ss.isNullOrUndefined(this.$a)) {
        this.$a =
          VEL.Wordwall.Global.Interop.GoogleClassroomClient.createDoAssignmentClient(
            this.$c,
            this.$b
          );
      }
      return this.$a;
    },
  });
  ss.initClass(
    i,
    a,
    {
      getCurrentUserState: function () {
        return this.$2.$0();
      },
      signInToGoogleClassroom: function () {
        var k = 0,
          l = new ss.TaskCompletionSource(),
          m,
          n;
        var o = ss.mkdel(this, function () {
          try {
            $sm1: for (;;) {
              switch (k) {
                case 0: {
                  k = -1;
                  this.$0();
                  m = this.$2.$7();
                  k = 1;
                  m.continueWith(o);
                  return;
                }
                case 1: {
                  k = -1;
                  m.getAwaitedResult();
                  n = this.loadUserAssignmentData();
                  k = 2;
                  n.continueWith(o);
                  return;
                }
                case 2: {
                  k = -1;
                  n.getAwaitedResult();
                  k = -1;
                  break $sm1;
                }
                default: {
                  break $sm1;
                }
              }
            }
            l.setResult(null);
          } catch (p) {
            l.setException(ss.Exception.wrap(p));
          }
        });
        o();
        return l.task;
      },
      grantGoogleClassroomPermissions: function () {
        var k = 0,
          l = new ss.TaskCompletionSource(),
          m,
          n;
        var o = ss.mkdel(this, function () {
          try {
            $sm1: for (;;) {
              switch (k) {
                case 0: {
                  k = -1;
                  this.$0();
                  m = this.$2.$2();
                  k = 1;
                  m.continueWith(o);
                  return;
                }
                case 1: {
                  k = -1;
                  m.getAwaitedResult();
                  n = this.loadUserAssignmentData();
                  k = 2;
                  n.continueWith(o);
                  return;
                }
                case 2: {
                  k = -1;
                  n.getAwaitedResult();
                  k = -1;
                  break $sm1;
                }
                default: {
                  break $sm1;
                }
              }
            }
            l.setResult(null);
          } catch (p) {
            l.setException(ss.Exception.wrap(p));
          }
        });
        o();
        return l.task;
      },
      signOutFromGoogleClassroom: function () {
        this.$0();
        return this.$2.$8();
      },
      $0: function () {
        this.$4 = null;
      },
      loadUserAssignmentData: function () {
        var k = 0,
          l = new ss.TaskCompletionSource(),
          m;
        var n = ss.mkdel(this, function () {
          try {
            $sm1: for (;;) {
              switch (k) {
                case 0: {
                  k = -1;
                  if (ss.isNullOrUndefined(this.$4)) {
                    m = this.$2.$4();
                    k = 1;
                    m.continueWith(n);
                    return;
                  }
                  k = -1;
                  break $sm1;
                }
                case 1: {
                  k = -1;
                  this.$4 = m.getAwaitedResult();
                  k = -1;
                  break $sm1;
                }
                default: {
                  break $sm1;
                }
              }
            }
            l.setResult(null);
          } catch (o) {
            l.setException(ss.Exception.wrap(o));
          }
        });
        n();
        return l.task;
      },
      $1: function () {
        return this.$4 || j.noUserAssignmentData;
      },
      isUserAssignedToAssignment: function () {
        return this.$1().get_isAssignedToUser();
      },
      hasUserAlreadyCompletedAssignment: function (k) {
        return !i.$0(k) && this.$1().get_userHasTurnedInSubmission();
      },
      getStudentSubmissionState: function () {
        var k =
          new VEL.Wordwall.Core.Application.GoogleClassroomStudentSubmissionState();
        k.canTurnInSubmission = this.$1().get_userCanTurnInSubmission();
        k.hasTurnedInSubmission = this.$1().get_userHasTurnedInSubmission();
        return k;
      },
      get_homeworkSubmission: function () {
        return this.$1$1;
      },
      set_homeworkSubmission: function (k) {
        this.$1$1 = k;
      },
      onTurnInStudentSubmission: function () {
        var k = 0,
          l = new ss.TaskCompletionSource(),
          m,
          n,
          o,
          p;
        var q = ss.mkdel(this, function () {
          try {
            $sm1: for (;;) {
              switch (k) {
                case 0: {
                  k = -1;
                  m = "Error when turning-in Google Classroom assignment";
                  k = 1;
                  continue $sm1;
                }
                case 1:
                case 2:
                case 3: {
                  if (k === 1) {
                    k = 2;
                  }
                  try {
                    $sm2: for (;;) {
                      switch (k) {
                        case 2: {
                          k = -1;
                          n = this.turnInStudentSubmission();
                          k = 3;
                          n.continueWith(q);
                          return;
                        }
                        case 3: {
                          k = -1;
                          n.getAwaitedResult();
                          VEL.Wordwall.Global.Modules.playPage.onTurnedInGoogleClassroomStudentSubmission();
                          k = -1;
                          break $sm2;
                        }
                        default: {
                          break $sm2;
                        }
                      }
                    }
                  } catch (r) {
                    r = ss.Exception.wrap(r);
                    if (ss.isInstanceOfType(r, ss.PromiseException)) {
                      o = ss.cast(r, ss.PromiseException);
                      i.$1.reportGoogleClassroomError(
                        Strings.myActivities_DefaultError,
                        m,
                        o
                      );
                    } else {
                      p = r;
                      i.$1.reportError$1(
                        Strings.myActivities_DefaultError,
                        m,
                        p
                      );
                    }
                  }
                  k = -1;
                  break $sm1;
                }
                default: {
                  break $sm1;
                }
              }
            }
            l.setResult(null);
          } catch (r) {
            l.setException(ss.Exception.wrap(r));
          }
        });
        q();
        return l.task;
      },
      turnInStudentSubmission: function () {
        var k = 0,
          l = new ss.TaskCompletionSource(),
          m,
          n,
          o;
        var p = ss.mkdel(this, function () {
          try {
            $sm1: for (;;) {
              switch (k) {
                case 0: {
                  k = -1;
                  if (ss.isNullOrUndefined(this.get_homeworkSubmission())) {
                    throw new ss.InvalidOperationException(
                      "No homework submission has been recorded for the current user."
                    );
                  }
                  m = this.$2.$9(this.$1());
                  k = 1;
                  m.continueWith(p);
                  return;
                }
                case 1: {
                  k = -1;
                  n = m.getAwaitedResult();
                  if (ss.isValue(n)) {
                    o = ss.Task.fromPromise(
                      this.$3.setGoogleClassroomStudentSubmission(
                        this.get_homeworkSubmission().HomeworkSubmissionId,
                        n.courseId,
                        n.courseWorkId,
                        n.id
                      ),
                      0
                    );
                    k = 2;
                    o.continueWith(p);
                    return;
                  }
                  k = -1;
                  break $sm1;
                }
                case 2: {
                  k = -1;
                  o.getAwaitedResult();
                  Analytics.event(
                    "student",
                    "gc-student-submission-turned-in",
                    ""
                  );
                  k = -1;
                  break $sm1;
                }
                default: {
                  break $sm1;
                }
              }
            }
            l.setResult(null);
          } catch (q) {
            l.setException(ss.Exception.wrap(q));
          }
        });
        p();
        return l.task;
      },
    },
    null,
    [
      VEL.Wordwall.Core.Application.IGoogleClassroomApplication,
      VEL.Wordwall.Core.Application.IGoogleClassroomApplicationAssignment,
    ]
  );
  ss.initClass(j, a, {
    get_studentSubmission: function () {
      return this.$1$1;
    },
    set_studentSubmission: function (k) {
      this.$1$1 = k;
    },
    $1: function () {
      return ss.isValue(this.get_studentSubmission());
    },
    $0: function () {
      return ss.isValue(this.$2);
    },
    get_isAssignedToUser: function () {
      return this.$1() || this.$0();
    },
    get_userCanTurnInSubmission: function () {
      return this.$1();
    },
    get_userHasTurnedInSubmission: function () {
      return this.$1() && this.get_studentSubmission().state === "TURNED_IN";
    },
  });
  (function () {
    e.forcePseudo = false;
  })();
  (function () {
    b.$0 = ".js-activity-wrapper";
  })();
  (function () {
    j.noUserAssignmentData = new j(null, null);
  })();
  (function () {
    i.$1 = new VEL.Wordwall.Global.Helpers.GoogleClassroomErrorReporter(
      "https://wordwall.net/scripts/saltarelle/vel.wordwall.application.client.js"
    );
  })();
  (function () {
    f.$3 = "test.doc";
    f.$2 = "test.config";
    f.$0 = "doc.value";
    f.$1 = 3145728;
  })();
})();
$(document).ready(function () {
  var app = new VEL.Wordwall.Application.Client.ClientApp();
});
