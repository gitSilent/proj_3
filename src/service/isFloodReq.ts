export function isFlood() {
    let isFloodCookie = document.cookie.replace(/(?:(?:^|.*;\s*)flood\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    console.log(isFloodCookie);

    if (Boolean(isFloodCookie)) {
        console.log("is flood");
        return true
    } else {
        console.log("is not flood");
        return false
    }
}
