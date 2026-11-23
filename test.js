
(function () {
    function addTestBanner() {
        if (document.getElementById("ptcb-widget-test")) {
            return;
        }

        const banner = document.createElement("div");
        banner.id = "ptcb-widget-test";
        banner.textContent = "PTCB Custom Widget Test - Success!";

        Object.assign(banner.style, {
            backgroundColor: "#0066a4",
            color: "#ffffff",
            padding: "16px",
            textAlign: "center",
            borderRadius: "6px",
            margin: "16px 0",
            fontWeight: "600"
        });

        document.body.prepend(banner);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", addTestBanner);
    } else {
        addTestBanner();
    }
})();

