// overrides
/* 0102: set startup page [SETUP-CHROME]
 * 0=blank, 1=home, 2=last visited page, 3=resume previous session
 * [NOTE] Session Restore is cleared with history (2811), and not used in Private Browsing mode
 * [SETTING] General>Startup>Restore previous session ***/
user_pref("browser.startup.page", 3);
/* 5007: exclude "Undo Closed Tabs" in Session Restore ***/
user_pref("browser.sessionstore.max_tabs_undo", 15);
/* Remove history after 15 days ***/
user_pref("browser.history_expire_days", 15);
/* Restore pinned tabs ***/
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand",true);

/** SANITIZE ON SHUTDOWN: IGNORES "ALLOW" SITE EXCEPTIONS | v2 migration is FF128+ ***/
/* 2811: set/enforce what items to clear on shutdown (if 2810 is true) [SETUP-CHROME]
 * [NOTE] If "history" is true, downloads will also be cleared ***/
user_pref("privacy.clearOnShutdown.history", false);
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", false);

user_pref("privacy.clearOnShutdown.sessions", false); // Active Logins [DEFAULT: true]
user_pref("privacy.clearOnShutdown.cookies", false); // Cookies

/* 4503: disable mozAddonManager Web API [FF57+]
 * [NOTE] To allow extensions to work on AMO, you also need 2662
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1384330,1406795,1415644,1453988 ***/
user_pref("privacy.resistFingerprinting.block_mozAddonManager", false);

user_pref("privacy.resistFingerprinting", true);

/* 7015: enable the DNT (Do Not Track) HTTP header
 * [WHY] DNT is enforced with Tracking Protection which is used in ETP Strict (2701) ***/
user_pref("privacy.donottrackheader.enabled", true);

/* Speed up ***/
user_pref("network.http.max-persistent-connections-per-server", 30);
user_pref("browser.cache.disk.enable", false);

/* Disable Pocket ***/
user_pref("browser.pocket.enabled", false);
user_pref("extensions.pocket.enabled", false);

/* 5010: disable location bar suggestion types
 * [SETTING] Search>Address Bar>When using the address bar, suggest ***/
user_pref("browser.urlbar.suggest.topsites", false);

/* Disable default browser check ***/
user_pref("browser.shell.checkDefaultBrowser", false);
