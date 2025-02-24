
import "../sub/teset2/main.js";
import foo from "./helpers.js";

foo("bar");

function getIOSVersion() {
	const userAgent = window.navigator.userAgent;
	// Check if the device is iOS and exclude Windows Phone
	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		// Split user agent to find the OS version
		const osVersion = userAgent.split(/OS /);
		if (osVersion.length > 1) {
			// Extract version numbers and format them
			const versionPart = osVersion[1].split(/[^0-9_]/)[0];
			return versionPart ? +versionPart.replaceAll('_', '.') : null;
		}
	}
	return null;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("root").innerHTML = getIOSVersion();
    console.log(window.ABCDEFG);
});
