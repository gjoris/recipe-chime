function shouldBeMuted(value) {
    let classList = value.previousSibling.classList;
    let shouldBeMuted = false;
    classList.forEach((klazz) => {
        shouldBeMuted = shouldBeMuted || klazz.endsWith("mutedIcon")
    });
    return shouldBeMuted;
}

module.exports = (Franz) => {

    const getMessages = function() {
        let totalUnreadMessages = 0;

        const allPossibleUnreadBadges = document.querySelectorAll(".UnreadBadge");

        allPossibleUnreadBadges.forEach(((value) => {
            //Skip the "Call history"
            try {
                if (value.parentElement?.href?.endsWith("/history")) {
                    return;
                }
            } catch (e) {
                console.error("An exception occured while trying to find the parentElement: ", e);
            }
            if (!shouldBeMuted(value)) totalUnreadMessages += parseInt(value.innerHTML, 10);
        }))

        Franz.setBadge(totalUnreadMessages);
    }

    Franz.loop(getMessages);

};
